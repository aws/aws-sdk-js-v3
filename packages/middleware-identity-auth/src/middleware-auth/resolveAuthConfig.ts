import { AuthInputConfig, AuthResolvedConfig } from "./configurations";

export const resolveAuthConfig = <T>(input: T & AuthInputConfig): T & AuthResolvedConfig => {
  const authSchemes = input.authSchemes ? input.authSchemes : undefined;

  const authSchemeProvider = input.authSchemeProvider ? input.authSchemeProvider : undefined;

  return {
    ...input,
    authSchemes,
    authSchemeProvider,
  };
};
