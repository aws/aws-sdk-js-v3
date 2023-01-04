import { Pluggable } from "@aws-sdk/types";

import { IdentityResolvedConfig } from "./configurations";
import { identityMiddleware, IdentityMiddlewareOptions } from "./identityMiddleware";

export const getIdentityPlugin = (options: IdentityResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(identityMiddleware(options), IdentityMiddlewareOptions);
  },
});
