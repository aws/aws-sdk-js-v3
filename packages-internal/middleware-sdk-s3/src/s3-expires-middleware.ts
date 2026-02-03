import { HttpResponse } from "@smithy/protocol-http";
import { parseRfc7231DateTime } from "@smithy/smithy-client";
import {
  DeserializeHandler,
  DeserializeHandlerArguments,
  DeserializeHandlerOutput,
  DeserializeMiddleware,
  HandlerExecutionContext,
  MetadataBearer,
  Pluggable,
  RelativeMiddlewareOptions,
} from "@smithy/types";

/**
 * @internal
 */
interface PreviouslyResolved {}

/**
 * @internal
 *
 * From the S3 Expires compatibility spec.
 * A model transform will ensure S3#Expires remains a timestamp shape, though
 * it is deprecated.
 * If a particular object has a non-date string set as the Expires value,
 * the SDK will have the raw string as "ExpiresString" on the response.
 *
 */
export const s3ExpiresMiddleware = (config: PreviouslyResolved): DeserializeMiddleware<any, any> => {
  return <Output extends MetadataBearer>(
      next: DeserializeHandler<any, Output>,
      context: HandlerExecutionContext
    ): DeserializeHandler<any, Output> =>
    async (args: DeserializeHandlerArguments<any>): Promise<DeserializeHandlerOutput<Output>> => {
      const result = await next(args);
      const { response } = result;
      if (HttpResponse.isInstance(response)) {
        if (response.headers.expires) {
          response.headers.expiresstring = response.headers.expires;
          try {
            parseRfc7231DateTime(response.headers.expires);
          } catch (e) {
            context.logger?.warn(
              `AWS SDK Warning for ${context.clientName}::${context.commandName} response parsing (${response.headers.expires}): ${e}`
            );
            delete response.headers.expires;
          }
        }
      }
      return result;
    };
};

/**
 * @internal
 */
export const s3ExpiresMiddlewareOptions: RelativeMiddlewareOptions = {
  tags: ["S3"],
  name: "s3ExpiresMiddleware",
  override: true,
  relation: "after",
  toMiddleware: "deserializerMiddleware",
};

/**
 * @internal
 */
export const getS3ExpiresMiddlewarePlugin = (clientConfig: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(s3ExpiresMiddleware(clientConfig), s3ExpiresMiddlewareOptions);
  },
});
