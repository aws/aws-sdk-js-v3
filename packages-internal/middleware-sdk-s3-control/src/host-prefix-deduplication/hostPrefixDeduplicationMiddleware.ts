import {
  HandlerExecutionContext,
  Pluggable,
  RelativeMiddlewareOptions,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeHandlerOutput,
  SerializeMiddleware,
} from "@smithy/types";

/**
 * @internal
 * @deprecated - the middleware is no longer necessary since hostPrefix was
 * removed by S3Control codegen customization's model preprocessing.
 */
export const hostPrefixDeduplicationMiddleware = (): SerializeMiddleware<any, any> => {
  return (next: SerializeHandler<any, any>, context: HandlerExecutionContext): SerializeHandler<any, any> =>
    (args: SerializeHandlerArguments<any>): Promise<SerializeHandlerOutput<any>> => {
      return next(args);
    };
};

/**
 * @internal
 * @deprecated
 */
export const hostPrefixDeduplicationMiddlewareOptions: RelativeMiddlewareOptions = {
  tags: ["HOST_PREFIX_DEDUPLICATION", "ENDPOINT_V2", "ENDPOINT"],
  toMiddleware: "serializerMiddleware",
  relation: "after",
  name: "hostPrefixDeduplicationMiddleware",
  override: true,
};

/**
 * @internal
 * @deprecated
 */
export const getHostPrefixDeduplicationPlugin = <T>(config: T): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(hostPrefixDeduplicationMiddleware(), hostPrefixDeduplicationMiddlewareOptions);
  },
});
