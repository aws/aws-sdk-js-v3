import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  error?: string;
  error_description?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export interface AuthorizationPendingException extends __SmithyException, $MetadataBearer {
  name: "AuthorizationPendingException";
  $fault: "client";
  error_description?: string;
  error?: string;
}

export namespace AuthorizationPendingException {
  export const filterSensitiveLog = (obj: AuthorizationPendingException): any => ({
    ...obj,
  });
}

export interface CreateTokenRequest {
  code?: string;
  refreshToken?: string;
  scope?: string[];
  redirectUri?: string;
  grantType: string | undefined;
  deviceCode: string | undefined;
  clientId: string | undefined;
  clientSecret: string | undefined;
}

export namespace CreateTokenRequest {
  export const filterSensitiveLog = (obj: CreateTokenRequest): any => ({
    ...obj,
  });
}

export interface CreateTokenResponse {
  accessToken?: string;
  expiresIn?: number;
  refreshToken?: string;
  tokenType?: string;
  idToken?: string;
}

export namespace CreateTokenResponse {
  export const filterSensitiveLog = (obj: CreateTokenResponse): any => ({
    ...obj,
  });
}

export interface ExpiredTokenException extends __SmithyException, $MetadataBearer {
  name: "ExpiredTokenException";
  $fault: "client";
  error?: string;
  error_description?: string;
}

export namespace ExpiredTokenException {
  export const filterSensitiveLog = (obj: ExpiredTokenException): any => ({
    ...obj,
  });
}

export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  error?: string;
  error_description?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

export interface InvalidClientException extends __SmithyException, $MetadataBearer {
  name: "InvalidClientException";
  $fault: "client";
  error_description?: string;
  error?: string;
}

export namespace InvalidClientException {
  export const filterSensitiveLog = (obj: InvalidClientException): any => ({
    ...obj,
  });
}

export interface InvalidGrantException extends __SmithyException, $MetadataBearer {
  name: "InvalidGrantException";
  $fault: "client";
  error_description?: string;
  error?: string;
}

export namespace InvalidGrantException {
  export const filterSensitiveLog = (obj: InvalidGrantException): any => ({
    ...obj,
  });
}

export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  error_description?: string;
  error?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

export interface InvalidScopeException extends __SmithyException, $MetadataBearer {
  name: "InvalidScopeException";
  $fault: "client";
  error_description?: string;
  error?: string;
}

export namespace InvalidScopeException {
  export const filterSensitiveLog = (obj: InvalidScopeException): any => ({
    ...obj,
  });
}

export interface SlowDownException extends __SmithyException, $MetadataBearer {
  name: "SlowDownException";
  $fault: "client";
  error?: string;
  error_description?: string;
}

export namespace SlowDownException {
  export const filterSensitiveLog = (obj: SlowDownException): any => ({
    ...obj,
  });
}

export interface UnauthorizedClientException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedClientException";
  $fault: "client";
  error_description?: string;
  error?: string;
}

export namespace UnauthorizedClientException {
  export const filterSensitiveLog = (obj: UnauthorizedClientException): any => ({
    ...obj,
  });
}

export interface UnsupportedGrantTypeException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedGrantTypeException";
  $fault: "client";
  error?: string;
  error_description?: string;
}

export namespace UnsupportedGrantTypeException {
  export const filterSensitiveLog = (obj: UnsupportedGrantTypeException): any => ({
    ...obj,
  });
}

export interface InvalidClientMetadataException extends __SmithyException, $MetadataBearer {
  name: "InvalidClientMetadataException";
  $fault: "client";
  error?: string;
  error_description?: string;
}

export namespace InvalidClientMetadataException {
  export const filterSensitiveLog = (obj: InvalidClientMetadataException): any => ({
    ...obj,
  });
}

export interface RegisterClientRequest {
  scopes?: string[];
  clientType: string | undefined;
  clientName: string | undefined;
}

export namespace RegisterClientRequest {
  export const filterSensitiveLog = (obj: RegisterClientRequest): any => ({
    ...obj,
  });
}

export interface RegisterClientResponse {
  clientSecret?: string;
  authorizationEndpoint?: string;
  clientId?: string;
  tokenEndpoint?: string;
  clientIdIssuedAt?: number;
  clientSecretExpiresAt?: number;
}

export namespace RegisterClientResponse {
  export const filterSensitiveLog = (obj: RegisterClientResponse): any => ({
    ...obj,
  });
}

export interface StartDeviceAuthorizationRequest {
  clientSecret: string | undefined;
  clientId: string | undefined;
  startUrl: string | undefined;
}

export namespace StartDeviceAuthorizationRequest {
  export const filterSensitiveLog = (obj: StartDeviceAuthorizationRequest): any => ({
    ...obj,
  });
}

export interface StartDeviceAuthorizationResponse {
  expiresIn?: number;
  verificationUri?: string;
  interval?: number;
  verificationUriComplete?: string;
  deviceCode?: string;
  userCode?: string;
}

export namespace StartDeviceAuthorizationResponse {
  export const filterSensitiveLog = (obj: StartDeviceAuthorizationResponse): any => ({
    ...obj,
  });
}
