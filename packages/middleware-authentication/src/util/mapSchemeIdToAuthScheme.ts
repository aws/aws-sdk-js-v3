import { AuthScheme } from "@aws-sdk/types";

/**
 * TODO(identityandauth)
 * @internal
 */
export const mapSchemeIdToAuthScheme = (authSchemes: AuthScheme[]): Record<string, AuthScheme> => {
  const authSchemeMap = {};
  for (const authScheme of authSchemes) {
    authSchemeMap[authScheme.schemeId] = authScheme;
  }
  return authSchemeMap;
};
