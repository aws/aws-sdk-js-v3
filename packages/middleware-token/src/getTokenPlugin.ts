import { Pluggable } from "@aws-sdk/types";

import { TokenResolvedConfig } from "./configurations";
import { tokenMiddleware, tokenMiddlewareOptions } from "./tokenMiddleware";

/**
 * @internal
 */
export const getTokenPlugin = (options: TokenResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(tokenMiddleware(options), tokenMiddlewareOptions);
  },
});
