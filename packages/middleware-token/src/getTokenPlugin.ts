import { Pluggable } from "@aws-sdk/types";

import { TokenResolvedConfig } from "./configurations";
import { tokenMiddleware, TokenMiddlewareOptions } from "./tokenMiddleware";

export const getTokenPlugin = (options: TokenResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(tokenMiddleware(options), TokenMiddlewareOptions);
  },
});
