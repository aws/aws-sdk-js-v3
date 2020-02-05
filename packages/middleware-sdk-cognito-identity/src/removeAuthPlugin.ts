import { Pluggable } from "@aws-sdk/types";
const AUTH_MIDDLEWARE_NAME = "awsAuthMiddleware";

/**
 * GetId, GetOpenIdToken, GetCredentialsForIdentity commands
 * in CognitoIdentity client doesn't need authentication. So we add
 * this plugin to remove signing middleware from the middleware stack.
 */
export const getRemoveAuthPlugin = (_?: any): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.remove(AUTH_MIDDLEWARE_NAME);
  }
});
