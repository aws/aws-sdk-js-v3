import { HttpResponse } from "@smithy/core/protocols";
import type {
  DeserializeMiddleware,
  Encoder,
  HandlerExecutionContext,
  MetadataBearer,
  Pluggable,
  RelativeMiddlewareOptions,
  StreamCollector,
} from "@smithy/types";

import { toStream } from "../to-stream/toStream";

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

    // This middleware applies to 2xx.
    if (statusCode < 200 || statusCode >= 300) {
      return result;
    }

    const bodyBytes: Uint8Array = await collectBody(body, config);
    response.body = toStream(bodyBytes);

    // Throw on 200 response with empty body, legacy behavior allowlist.
    if (bodyBytes.length === 0 && THROW_IF_EMPTY_BODY[context.commandName!]) {
      const err = new Error("S3 aborted request") as Error & MetadataBearer;
      err.$metadata = {
        httpStatusCode: 503,
      };
      err.name = "InternalError";
      throw err;
    }

    const bodyStringTail = config.utf8Encoder(bodyBytes.subarray(bodyBytes.length - 16));

    // Generalized throw-on-200 for top level Error element and non-streaming response.
    if (bodyStringTail && bodyStringTail.endsWith("</Error>")) {
      // Synthetic 503 to indicate retryable.
      response.statusCode = 503;
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
