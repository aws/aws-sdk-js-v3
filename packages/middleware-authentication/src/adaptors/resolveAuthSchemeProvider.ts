import { AuthOptionsProvider, AuthScheme } from "@aws-sdk/types";

import { SUPPORTED_AUTH_OPTIONS } from "../supportedAuth";
import { mapSchemeIdToAuthScheme } from "../util/mapSchemeIdToAuthScheme";

/**
 * @internal
 */
export interface ResolveAuthSchemeProviderOptions {
  authSchemes: AuthScheme[];
}

/**
 * @internal
 */
export const resolveAuthSchemeProvider =
  async <T>(options: T & ResolveAuthSchemeProviderOptions): Promise<AuthOptionsProvider> =>
  async () => {
    const supportedAuthSchemesMap = mapSchemeIdToAuthScheme(options.authSchemes);
    return SUPPORTED_AUTH_OPTIONS.filter((authOption) => supportedAuthSchemesMap[authOption.schemeId]);
  };
