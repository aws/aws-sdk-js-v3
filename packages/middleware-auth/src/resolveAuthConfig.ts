import { AuthInputConfig, AuthResolvedConfig } from "./configurations";

/**
 * Resolves identity in the following precedence:
 *
 * - identity: user-provided identity
 * - token: backwards compatible token identity
 * - credentials: backwards compatible credentials identity
 * - authScheme: populated from AuthSchemeResolver from config
 *
 * @param input configuration object
 * @returns input with an identity provider
 */
export const resolveAuthConfig = <T>(input: T & AuthInputConfig): T & AuthResolvedConfig => {
  const authSchemes = input.authSchemes ? input.authSchemes : undefined;

  const authSchemeProvider = input.authSchemeProvider ? input.authSchemeProvider : undefined;

  return {
    ...input,
    authSchemes,
    authSchemeProvider,
  };
};
