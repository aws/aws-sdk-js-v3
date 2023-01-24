import { HttpSigner } from "@aws-sdk/middleware-identity";
import { Identity, IdentityProvider, Provider } from "@aws-sdk/types";

import { mapSchemeIdToAuthScheme } from "./util/mapSchemeIdToAuthScheme";

export interface AuthScheme {
  schemeId: string;
  identity: (identityResolverConfiguration: Record<string, any>) => IdentityProvider<Identity>;
  signer: Provider<HttpSigner<Identity>>;
  /**
   * @example "sigv4a" or "sigv4"
   * @deprecated
   */
  name?: "sigv4" | "sigv4a" | string;
  /**
   * @example "s3"
   * @deprecated
   */
  signingName?: string;
  /**
   * @example "us-east-1"
   * @deprecated
   */
  signingRegion?: string;
  /**
   * @example ["*"]
   * @exammple ["us-west-2", "us-east-1"]
   * @deprecated
   */
  signingRegionSet?: string[];
  /**
   * @deprecated this field was renamed to signingRegion.
   */
  signingScope?: never;
  /**
   * @deprecated
   */
  properties?: Record<string, unknown>;
}

interface ClientAuthParametersFromCodegen {}

export interface AuthInputConfig {
  authSchemes?: AuthScheme[];
  authSchemeProvider?: AuthSchemeProvider<ClientAuthParametersFromCodegen>;
}

export interface HttpAuthOption {
  schemeId: string;
  identityProperties: Record<string, any>;
  signerProperties: Record<string, any>;
}

export interface AuthSchemeProvider<AuthParametersType> {
  (authParameters: AuthParametersType): Array<HttpAuthOption>;
}

export interface AuthResolvedConfig extends AuthInputConfig {}

export const SMITHY_SDK_SUPPORTED_AUTH: AuthScheme[] = [SigV4AAuthScheme, SigV4AuthScheme, HttpBearerAuthScheme];

export const SMITHY_SDK_SUPPORTED_AUTH_MAP: Record<string, AuthScheme> =
  mapSchemeIdToAuthScheme(SMITHY_SDK_SUPPORTED_AUTH);

export const SMITHY_SDK_SUPPPORTED_AUTH_OPTIONS: HttpAuthOption[] = [
  SigV4AAuthOption,
  SigV4AuthOption,
  HttpBearerAuthOption,
];
