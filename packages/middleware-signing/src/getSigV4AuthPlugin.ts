import { Pluggable } from "@aws-sdk/types";

import { SigV4AuthResolvedConfig } from "./configurations";
import { sigV4AuthMiddleware, SigV4AuthMiddlewareOptions } from "./sigV4AuthMiddleware";

export const getSigV4AuthPlugin = (options: SigV4AuthResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(sigV4AuthMiddleware(options), SigV4AuthMiddlewareOptions);
  },
});
