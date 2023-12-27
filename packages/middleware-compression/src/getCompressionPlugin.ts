import { Pluggable } from "@smithy/types";

import { compressionMiddleware, compressionMiddlewareOptions } from "./compressionMiddleware";
import { CompressionResolvedConfig } from "./configurations";

/**
 * @internal
 */
export const getCompressionPlugin = (options: CompressionResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(compressionMiddleware(options), compressionMiddlewareOptions);
  },
});
