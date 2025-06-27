import { HttpResponse } from "@smithy/protocol-http";
import {
  DeserializeMiddleware,
  Encoder,
  HandlerExecutionContext,
  Pluggable,
  RelativeMiddlewareOptions,
  StreamCollector,
} from "@smithy/types";
import { headStream, splitStream } from "@smithy/util-stream";

type PreviouslyResolved = {
  utf8Encoder: Encoder;
};

/**
 * @internal
 */
const THROW_IF_EMPTY_BODY: Record<string, boolean> = {
  CopyObjectCommand: true,
  UploadPartCopyCommand: true,
  CompleteMultipartUploadCommand: true,
};

/**
 * @internal
 * We will check at most this many bytes from the stream when looking for
 * an error-like 200 status.
 */
const MAX_BYTES_TO_INSPECT = 3000;

/**
 * In case of an internal error/terminated connection, S3 operations may return 200 errors. CopyObject, UploadPartCopy,
 * CompleteMultipartUpload may return empty payload or payload with only xml Preamble.
 * @internal
 */
export const throw200ExceptionsMiddleware =
  (config: PreviouslyResolved): DeserializeMiddleware<any, any> =>
  (next, context: HandlerExecutionContext) =>
  async (args) => {
    const result = await next(args);
    const { response } = result;
    if (!HttpResponse.isInstance(response)) {
      return result;
    }
    const { statusCode, body: sourceBody } = response;
    if (statusCode < 200 || statusCode >= 300) {
      return result;
    }

    const isSplittableStream =
      typeof sourceBody?.stream === "function" ||
      typeof sourceBody?.pipe === "function" ||
      typeof sourceBody?.tee === "function";

    if (!isSplittableStream) {
      return result;
    }

    let bodyCopy = sourceBody;
    let body = sourceBody;

    if (sourceBody && typeof sourceBody === "object" && !(sourceBody instanceof Uint8Array)) {
      [bodyCopy, body] = await splitStream(sourceBody);
    }
    // restore split body to the response for deserialization.
    response.body = body;

    const bodyBytes: Uint8Array = await collectBody(bodyCopy, {
      streamCollector: async (stream: any) => {
        return headStream(stream, MAX_BYTES_TO_INSPECT);
      },
    });
    if (typeof bodyCopy?.destroy === "function") {
      // discard partially-read Node.js Stream.
      bodyCopy.destroy();
    }

    const bodyStringTail = config.utf8Encoder(bodyBytes.subarray(bodyBytes.length - 16));

    // Throw on 200 response with empty body, legacy behavior allowlist.
    if (bodyBytes.length === 0 && THROW_IF_EMPTY_BODY[context.commandName!]) {
      const err = new Error("S3 aborted request");
      err.name = "InternalError";
      throw err;
    }
    // Generalized throw-on-200 for top level Error element and non-streaming response.
    if (bodyStringTail && bodyStringTail.endsWith("</Error>")) {
      // Set the error code to 4XX so that error deserializer can parse them
      response.statusCode = 400;
    }

    return result;
  };

/**
 * @internal
 */
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: { streamCollector: StreamCollector }
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

/**
 * @internal
 */
export const throw200ExceptionsMiddlewareOptions: RelativeMiddlewareOptions = {
  relation: "after",
  toMiddleware: "deserializerMiddleware",
  tags: ["THROW_200_EXCEPTIONS", "S3"],
  name: "throw200ExceptionsMiddleware",
  override: true,
};

/**
 *
 * @internal
 */
export const getThrow200ExceptionsPlugin = (config: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(throw200ExceptionsMiddleware(config), throw200ExceptionsMiddlewareOptions);
  },
});
