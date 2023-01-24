import { Pluggable } from "@aws-sdk/types";

import { authMiddleware, AuthMiddlewareOptions } from "./authMiddleware";
import { AuthResolvedConfig } from "./configurations";

export const getAuthPlugin = (options: AuthResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(authMiddleware(options), AuthMiddlewareOptions);
  },
});
