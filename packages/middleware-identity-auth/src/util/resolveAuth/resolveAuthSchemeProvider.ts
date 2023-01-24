import { AuthScheme, AuthSchemeProvider } from "@aws-sdk/types";

import { SUPPORTED_AUTH_OPTIONS } from "../../supported";
import { mapSchemeIdToAuthScheme } from "../mapSchemeIdToAuthScheme";

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
  async <T>(options: T & ResolveAuthSchemeProviderOptions): Promise<AuthSchemeProvider> =>
  () => {
    const supportedAuthSchemes = mapSchemeIdToAuthScheme(options.authSchemes);
    return SUPPORTED_AUTH_OPTIONS.filter((authOption) => supportedAuthSchemes[authOption.schemeId]);
  };
