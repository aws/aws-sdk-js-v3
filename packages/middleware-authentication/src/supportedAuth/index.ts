import { AuthScheme, HttpAuthOption } from "@aws-sdk/types";

import { mapSchemeIdToAuthScheme } from "../util/mapSchemeIdToAuthScheme";
import { HttpBearerAuthOption, HttpBearerAuthScheme } from "./httpBearerAuth";
import { SigV4AuthOption, SigV4AuthScheme } from "./sigv4";
import { SigV4AAuthOption, SigV4AAuthScheme } from "./sigv4a";

/**
 * TODO(identityandauth)
 */
export const SUPPORTED_AUTH_SCHEMES: AuthScheme[] = [SigV4AAuthScheme, SigV4AuthScheme, HttpBearerAuthScheme];

export const SUPPORTED_AUTH_SCHEMES_MAP: Record<string, AuthScheme> = mapSchemeIdToAuthScheme(SUPPORTED_AUTH_SCHEMES);

export const SUPPORTED_AUTH_OPTIONS: HttpAuthOption[] = [SigV4AAuthOption, SigV4AuthOption, HttpBearerAuthOption];

export * from "./httpBearerAuth";
export * from "./sigv4";
export * from "./sigv4a";
