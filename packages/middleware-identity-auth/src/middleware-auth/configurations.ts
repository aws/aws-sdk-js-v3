import { AuthScheme, AuthSchemeProvider } from "@aws-sdk/types";

export interface AuthInputConfig {
  authSchemes?: AuthScheme[];
  authSchemeProvider?: AuthSchemeProvider;
}

export interface AuthResolvedConfig extends AuthInputConfig {}
