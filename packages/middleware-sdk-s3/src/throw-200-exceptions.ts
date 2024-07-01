import { HttpResponse } from "@smithy/protocol-http";
import {
  DeserializeMiddleware,
  Encoder,
  HandlerExecutionContext,
  Pluggable,
  RelativeMiddlewareOptions,
  StreamCollector,
} from "@smithy/types";

type PreviouslyResolved = {
  streamCollector: StreamCollector;
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
    const { statusCode, body } = response;
    if (statusCode < 200 || statusCode >= 300) {
      return result;
    }

    const bodyBytes: Uint8Array = await collectBody(body, config);
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

    // Body stream is consumed and paused at this point. So replace the response.body to the collected bytes.
    // So that the deserializer can consume the body as normal.
    response.body = bodyBytes;
    return result;
  };

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: PreviouslyResolved): Promise<Uint8Array> => {
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
