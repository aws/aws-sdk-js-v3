import { Pluggable } from "@smithy/types";

import {
  compressionMiddleware,
  CompressionMiddlewareConfig,
  compressionMiddlewareOptions,
} from "./compressionMiddleware";
import { CompressionResolvedConfig } from "./configurations";

/**
 * @internal
 */
export const getCompressionPlugin = (
  config: CompressionResolvedConfig,
  middlewareConfig: CompressionMiddlewareConfig
): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(compressionMiddleware(config, middlewareConfig), compressionMiddlewareOptions);
  },
});
