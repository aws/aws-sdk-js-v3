import { Pluggable } from "@aws-sdk/types";

import { PopulateSigningInputConfig } from "./configurations";
import { populateSigningMiddleware, PopulateSigningMiddlewareOptions } from "./populateSigningMiddleware";

/**
 * TODO(identityandauth)
 */
export const getPopulateSigningMiddleware = (options: PopulateSigningInputConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(populateSigningMiddleware(options), PopulateSigningMiddlewareOptions);
  },
});
