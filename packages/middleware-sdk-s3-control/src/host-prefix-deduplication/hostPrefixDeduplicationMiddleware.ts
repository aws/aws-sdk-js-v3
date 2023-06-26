import {
  HandlerExecutionContext,
  HttpRequest,
  Pluggable,
  RelativeMiddlewareOptions,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeHandlerOutput,
  SerializeMiddleware,
} from "@smithy/types";

import { deduplicateHostPrefix } from "./deduplicateHostPrefix";

/**
 * @internal
 * This customization handles an edge case where
 * a hostprefix may be duplicated in the endpoint ruleset resolution
 * and hostPrefix serialization via the pre-endpoints 2.0 trait,
 * and which cannot be reconciled automatically.
 */
export const hostPrefixDeduplicationMiddleware = (): SerializeMiddleware<any, any> => {
  return (next: SerializeHandler<any, any>, context: HandlerExecutionContext): SerializeHandler<any, any> =>
    async (args: SerializeHandlerArguments<any>): Promise<SerializeHandlerOutput<any>> => {
      const httpRequest: HttpRequest = (args.request ?? {}) as HttpRequest;
      if (httpRequest?.hostname) {
        httpRequest.hostname = deduplicateHostPrefix(httpRequest.hostname);
      }
      return next(args);
    };
};

/**
 * @internal
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
 */
export const getHostPrefixDeduplicationPlugin = <T>(config: T): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(hostPrefixDeduplicationMiddleware(), hostPrefixDeduplicationMiddlewareOptions);
  },
});
