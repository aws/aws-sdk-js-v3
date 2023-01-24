import { Pluggable } from "@aws-sdk/types";

import { authenticationMiddleware, AuthenticationMiddlewareOptions } from "./authenticationMiddleware";
import { AuthenticationResolvedConfig } from "./configurations";

export const getAuthenticationPlugin = (options: AuthenticationResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(authenticationMiddleware(options), AuthenticationMiddlewareOptions);
  },
});
