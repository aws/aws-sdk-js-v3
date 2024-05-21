import type { Pluggable } from "@smithy/types";

import type { TokenResolvedConfig } from "./configurations";
import { tokenMiddleware, tokenMiddlewareOptions } from "./tokenMiddleware";

/**
 * @internal
 */
export const getTokenPlugin = (options: TokenResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(tokenMiddleware(options), tokenMiddlewareOptions);
  },
});
