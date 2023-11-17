// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { SSOOIDCServiceException as __BaseException } from "./SSOOIDCServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Single error code.
   *       For this exception the value will be <code>access_denied</code>.</p>
   */
  error?: string;

  /**
   * @public
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
   */
  error_description?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * @public
 * <p>Indicates that a request to authorize a client with an access user session token is
 *       pending.</p>
 */
export class AuthorizationPendingException extends __BaseException {
  readonly name: "AuthorizationPendingException" = "AuthorizationPendingException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Single error code.
   *       For this exception the value will be <code>authorization_pending</code>.</p>
   */
  error?: string;

  /**
   * @public
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
   */
  error_description?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationPendingException, __BaseException>) {
    super({
      name: "AuthorizationPendingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationPendingException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * @public
 */
export interface CreateTokenRequest {
  /**
   * @public
   * <p>The unique identifier string for the client or application. This value comes from the
   *       result of the <a>RegisterClient</a> API.</p>
   */
  clientId: string | undefined;

  /**
   * @public
   * <p>A secret string generated for the client. This value should come from the persisted result
   *       of the <a>RegisterClient</a> API.</p>
   */
  clientSecret: string | undefined;

  /**
   * @public
   * <p>Supports the following OAuth grant types: Device Code and Refresh Token.
   *       Specify either of the following values, depending on the grant type that you want:</p>
   *          <p>* Device Code - <code>urn:ietf:params:oauth:grant-type:device_code</code>
   *          </p>
   *          <p>* Refresh Token - <code>refresh_token</code>
   *          </p>
   *          <p>For information about how to obtain the device code, see the <a>StartDeviceAuthorization</a> topic.</p>
   */
  grantType: string | undefined;

  /**
   * @public
   * <p>Used only when calling this API for the Device Code grant type. This short-term code is
   *       used to identify this authorization request. This comes from the result of the
   *       <a>StartDeviceAuthorization</a> API.</p>
   */
  deviceCode?: string;

  /**
   * @public
   * <p>Used only when calling this API for the Authorization Code grant type. The short-term code is
   *       used to identify this authorization request. This grant type is currently unsupported for the
   *       <a>CreateToken</a> API.</p>
   */
  code?: string;

  /**
   * @public
   * <p>Used only when calling this API for the Refresh Token grant type. This token is used to
   *       refresh short-term tokens, such as the access token, that might expire.</p>
   *          <p>For more information about the features and limitations of the current IAM Identity Center OIDC
   *       implementation, see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center
   *       OIDC API Reference</a>.</p>
   */
  refreshToken?: string;

  /**
   * @public
   * <p>The list of scopes for which authorization is requested. The access token that is issued
   *       is limited to the scopes that are granted. If this value is not specified, IAM Identity Center authorizes
   *       all scopes that are configured for the client during the call to
   *       <a>RegisterClient</a>.</p>
   */
  scope?: string[];

  /**
   * @public
   * <p>Used only when calling this API for the Authorization Code grant type. This value specifies
   *       the location of the client or application that has registered to receive the authorization
   *         code.</p>
   */
  redirectUri?: string;
}

/**
 * @public
 */
export interface CreateTokenResponse {
  /**
   * @public
   * <p>A bearer token to access AWS accounts and applications assigned to a user.</p>
   */
  accessToken?: string;

  /**
   * @public
   * <p>Used to notify the client that the returned token is an access token. The supported token
   *       type is <code>Bearer</code>.</p>
   */
  tokenType?: string;

  /**
   * @public
   * <p>Indicates the time in seconds when an access token will expire.</p>
   */
  expiresIn?: number;

  /**
   * @public
   * <p>A token that, if present, can be used to refresh a previously issued access token that
   *       might have expired.</p>
   *          <p>For more
   *       information about the features and limitations of the current IAM Identity Center OIDC implementation,
   *       see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center
   *         OIDC API Reference</a>.</p>
   */
  refreshToken?: string;

  /**
   * @public
   * <p>The <code>idToken</code> is not implemented or supported. For more information about the
   *       features and limitations of the current IAM Identity Center OIDC implementation, see <i>Considerations
   *       for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center
   *       OIDC API Reference</a>.</p>
   *          <p>A JSON Web Token (JWT) that identifies who is associated with the issued access token.
   *       </p>
   */
  idToken?: string;
}

/**
 * @public
 * <p>Indicates that the token issued by the service is expired and is no longer valid.</p>
 */
export class ExpiredTokenException extends __BaseException {
  readonly name: "ExpiredTokenException" = "ExpiredTokenException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Single error code.
   *       For this exception the value will be <code>expired_token</code>.</p>
   */
  error?: string;

  /**
   * @public
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
   */
  error_description?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredTokenException, __BaseException>) {
    super({
      name: "ExpiredTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredTokenException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * @public
 * <p>Indicates that an error from the service occurred while trying to process a
 *       request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>Single error code.
   *       For this exception the value will be <code>server_error</code>.</p>
   */
  error?: string;

  /**
   * @public
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
   */
  error_description?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * @public
 * <p>Indicates that the <code>clientId</code> or <code>clientSecret</code> in the request is
 *       invalid. For example, this can occur when a client sends an incorrect <code>clientId</code> or
 *       an expired <code>clientSecret</code>.</p>
 */
export class InvalidClientException extends __BaseException {
  readonly name: "InvalidClientException" = "InvalidClientException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Single error code.
   *       For this exception the value will be <code>invalid_client</code>.</p>
   */
  error?: string;

  /**
   * @public
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
   */
  error_description?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClientException, __BaseException>) {
    super({
      name: "InvalidClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClientException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * @public
 * <p>Indicates that a request contains an invalid grant. This can occur if a client makes a
 *         <a>CreateToken</a> request with an invalid grant type.</p>
 */
export class InvalidGrantException extends __BaseException {
  readonly name: "InvalidGrantException" = "InvalidGrantException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Single error code.
   *       For this exception the value will be <code>invalid_grant</code>.</p>
   */
  error?: string;

  /**
   * @public
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
   */
  error_description?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidGrantException, __BaseException>) {
    super({
      name: "InvalidGrantException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidGrantException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * @public
 * <p>Indicates that something is wrong with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Single error code.
   *       For this exception the value will be <code>invalid_request</code>.</p>
   */
  error?: string;

  /**
   * @public
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
   */
  error_description?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * @public
 * <p>Indicates that the scope provided in the request is invalid.</p>
 */
export class InvalidScopeException extends __BaseException {
  readonly name: "InvalidScopeException" = "InvalidScopeException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Single error code.
   *       For this exception the value will be <code>invalid_scope</code>.</p>
   */
  error?: string;

  /**
   * @public
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
   */
  error_description?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidScopeException, __BaseException>) {
    super({
      name: "InvalidScopeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidScopeException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * @public
 * <p>Indicates that the client is making the request too frequently and is more than the
 *       service can handle. </p>
 */
export class SlowDownException extends __BaseException {
  readonly name: "SlowDownException" = "SlowDownException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Single error code.
   *       For this exception the value will be <code>slow_down</code>.</p>
   */
  error?: string;

  /**
   * @public
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
   */
  error_description?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SlowDownException, __BaseException>) {
    super({
      name: "SlowDownException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SlowDownException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * @public
 * <p>Indicates that the client is not currently authorized to make the request. This can happen
 *       when a <code>clientId</code> is not issued for a public client.</p>
 */
export class UnauthorizedClientException extends __BaseException {
  readonly name: "UnauthorizedClientException" = "UnauthorizedClientException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Single error code.
   *       For this exception the value will be <code>unauthorized_client</code>.</p>
   */
  error?: string;

  /**
   * @public
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
   */
  error_description?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedClientException, __BaseException>) {
    super({
      name: "UnauthorizedClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * @public
 * <p>Indicates that the grant type in the request is not supported by the service.</p>
 */
export class UnsupportedGrantTypeException extends __BaseException {
  readonly name: "UnsupportedGrantTypeException" = "UnsupportedGrantTypeException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Single error code.
   *       For this exception the value will be <code>unsupported_grant_type</code>.</p>
   */
  error?: string;

  /**
   * @public
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
   */
  error_description?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedGrantTypeException, __BaseException>) {
    super({
      name: "UnsupportedGrantTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedGrantTypeException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * @public
 */
export interface CreateTokenWithIAMRequest {
  /**
   * @public
   * <p>The unique identifier string for the client or application. This value is an application
   *       ARN that has OAuth grants configured.</p>
   */
  clientId: string | undefined;

  /**
   * @public
   * <p>Supports the following OAuth grant types: Authorization Code, Refresh Token, JWT Bearer,
   *       and Token Exchange. Specify one of the following values, depending on the grant type that you
   *       want:</p>
   *          <p>* Authorization Code - <code>authorization_code</code>
   *          </p>
   *          <p>* Refresh Token - <code>refresh_token</code>
   *          </p>
   *          <p>* JWT Bearer - <code>urn:ietf:params:oauth:grant-type:jwt-bearer</code>
   *          </p>
   *          <p>* Token Exchange - <code>urn:ietf:params:oauth:grant-type:token-exchange</code>
   *          </p>
   */
  grantType: string | undefined;

  /**
   * @public
   * <p>Used only when calling this API for the Authorization Code grant type. This short-term
   *         code is used to identify this authorization request. The code is obtained through a redirect
   *         from IAM Identity Center to a redirect URI persisted in the Authorization Code GrantOptions for the
   *         application.</p>
   */
  code?: string;

  /**
   * @public
   * <p>Used only when calling this API for the Refresh Token grant type. This token is used to
   *       refresh short-term tokens, such as the access token, that might expire.</p>
   *          <p>For more information about the features and limitations of the current IAM Identity Center OIDC
   *       implementation, see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center
   *       OIDC API Reference</a>.</p>
   */
  refreshToken?: string;

  /**
   * @public
   * <p>Used only when calling this API for the JWT Bearer grant type. This value specifies the JSON
   *       Web Token (JWT) issued by a trusted token issuer. To authorize a trusted token issuer,
   *       configure the JWT Bearer GrantOptions for the application.</p>
   */
  assertion?: string;

  /**
   * @public
   * <p>The list of scopes for which authorization is requested. The access token that is issued
   *       is limited to the scopes that are granted. If the value is not specified, IAM Identity Center authorizes all
   *       scopes configured for the application, including the following default scopes:
   *       <code>openid</code>, <code>aws</code>, <code>sts:identity_context</code>.</p>
   */
  scope?: string[];

  /**
   * @public
   * <p>Used only when calling this API for the Authorization Code grant type. This value specifies
   *       the location of the client or application that has registered to receive the authorization code.
   *       </p>
   */
  redirectUri?: string;

  /**
   * @public
   * <p>Used only when calling this API for the Token Exchange grant type. This value specifies
   *       the subject of the exchange. The value of the subject token must be an access token issued by
   *       IAM Identity Center to a different client or application. The access token must have authorized scopes
   *       that indicate the requested application as a target audience.</p>
   */
  subjectToken?: string;

  /**
   * @public
   * <p>Used only when calling this API for the Token Exchange grant type. This value specifies
   *       the type of token that is passed as the subject of the exchange. The following value is
   *       supported:</p>
   *          <p>* Access Token - <code>urn:ietf:params:oauth:token-type:access_token</code>
   *          </p>
   */
  subjectTokenType?: string;

  /**
   * @public
   * <p>Used only when calling this API for the Token Exchange grant type. This value specifies
   *       the type of token that the requester can receive. The following values are supported:</p>
   *          <p>* Access Token - <code>urn:ietf:params:oauth:token-type:access_token</code>
   *          </p>
   *          <p>* Refresh Token - <code>urn:ietf:params:oauth:token-type:refresh_token</code>
   *          </p>
   */
  requestedTokenType?: string;
}

/**
 * @public
 */
export interface CreateTokenWithIAMResponse {
  /**
   * @public
   * <p>A bearer token to access AWS accounts and applications assigned to a user.</p>
   */
  accessToken?: string;

  /**
   * @public
   * <p>Used to notify the requester that the returned token is an access token. The supported
   *       token type is <code>Bearer</code>.</p>
   */
  tokenType?: string;

  /**
   * @public
   * <p>Indicates the time in seconds when an access token will expire.</p>
   */
  expiresIn?: number;

  /**
   * @public
   * <p>A token that, if present, can be used to refresh a previously issued access token that
   *       might have expired.</p>
   *          <p>For more
   *       information about the features and limitations of the current IAM Identity Center OIDC implementation,
   *       see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center
   *         OIDC API Reference</a>.</p>
   */
  refreshToken?: string;

  /**
   * @public
   * <p>A JSON Web Token (JWT) that identifies the user associated with the issued access token.
   *       </p>
   */
  idToken?: string;

  /**
   * @public
   * <p>Indicates the type of tokens that are issued by IAM Identity Center. The following values are supported:
   *       </p>
   *          <p>* Access Token - <code>urn:ietf:params:oauth:token-type:access_token</code>
   *          </p>
   *          <p>* Refresh Token - <code>urn:ietf:params:oauth:token-type:refresh_token</code>
   *          </p>
   */
  issuedTokenType?: string;

  /**
   * @public
   * <p>The list of scopes for which authorization is granted. The access token that is issued
   *       is limited to the scopes that are granted.</p>
   */
  scope?: string[];
}

/**
 * @public
 * <p>Indicates that a token provided as input to the request was issued by and is only usable
 *       by calling IAM Identity Center endpoints in another region.</p>
 */
export class InvalidRequestRegionException extends __BaseException {
  readonly name: "InvalidRequestRegionException" = "InvalidRequestRegionException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Single error code.
   *       For this exception the value will be <code>invalid_request</code>.</p>
   */
  error?: string;

  /**
   * @public
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
   */
  error_description?: string;

  /**
   * @public
   * <p>Indicates the IAM Identity Center endpoint which the requester may call with this token.</p>
   */
  endpoint?: string;

  /**
   * @public
   * <p>Indicates the region which the requester may call with this token.</p>
   */
  region?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestRegionException, __BaseException>) {
    super({
      name: "InvalidRequestRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestRegionException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
    this.endpoint = opts.endpoint;
    this.region = opts.region;
  }
}

/**
 * @public
 * <p>Indicates that the client information sent in the request during registration is
 *       invalid.</p>
 */
export class InvalidClientMetadataException extends __BaseException {
  readonly name: "InvalidClientMetadataException" = "InvalidClientMetadataException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Single error code.
   *       For this exception the value will be <code>invalid_client_metadata</code>.</p>
   */
  error?: string;

  /**
   * @public
   * <p>Human-readable text providing additional information, used to assist the
   *       client developer in understanding the error that occurred.</p>
   */
  error_description?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClientMetadataException, __BaseException>) {
    super({
      name: "InvalidClientMetadataException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClientMetadataException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}

/**
 * @public
 */
export interface RegisterClientRequest {
  /**
   * @public
   * <p>The friendly name of the client.</p>
   */
  clientName: string | undefined;

  /**
   * @public
   * <p>The type of client. The service supports only <code>public</code> as a client type.
   *       Anything other than public will be rejected by the service.</p>
   */
  clientType: string | undefined;

  /**
   * @public
   * <p>The list of scopes that are defined by the client. Upon authorization, this list is used
   *       to restrict permissions when granting an access token.</p>
   */
  scopes?: string[];
}

/**
 * @public
 */
export interface RegisterClientResponse {
  /**
   * @public
   * <p>The unique identifier string for each client. This client uses this identifier to get
   *       authenticated by the service in subsequent calls.</p>
   */
  clientId?: string;

  /**
   * @public
   * <p>A secret string generated for the client. The client will use this string to get
   *       authenticated by the service in subsequent calls.</p>
   */
  clientSecret?: string;

  /**
   * @public
   * <p>Indicates the time at which the <code>clientId</code> and <code>clientSecret</code> were
   *       issued.</p>
   */
  clientIdIssuedAt?: number;

  /**
   * @public
   * <p>Indicates the time at which the <code>clientId</code> and <code>clientSecret</code> will
   *       become invalid.</p>
   */
  clientSecretExpiresAt?: number;

  /**
   * @public
   * <p>An endpoint that the client can use to request authorization.</p>
   */
  authorizationEndpoint?: string;

  /**
   * @public
   * <p>An endpoint that the client can use to create tokens.</p>
   */
  tokenEndpoint?: string;
}

/**
 * @public
 */
export interface StartDeviceAuthorizationRequest {
  /**
   * @public
   * <p>The unique identifier string for the client that is registered with IAM Identity Center. This value
   *       should come from the persisted result of the <a>RegisterClient</a> API
   *       operation.</p>
   */
  clientId: string | undefined;

  /**
   * @public
   * <p>A secret string that is generated for the client. This value should come from the
   *       persisted result of the <a>RegisterClient</a> API operation.</p>
   */
  clientSecret: string | undefined;

  /**
   * @public
   * <p>The URL for the Amazon Web Services access portal. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/using-the-portal.html">Using
   *       the Amazon Web Services access portal</a> in the <i>IAM Identity Center User Guide</i>.</p>
   */
  startUrl: string | undefined;
}

/**
 * @public
 */
export interface StartDeviceAuthorizationResponse {
  /**
   * @public
   * <p>The short-lived code that is used by the device when polling for a session token.</p>
   */
  deviceCode?: string;

  /**
   * @public
   * <p>A one-time user verification code. This is needed to authorize an in-use device.</p>
   */
  userCode?: string;

  /**
   * @public
   * <p>The URI of the verification page that takes the <code>userCode</code> to authorize the
   *       device.</p>
   */
  verificationUri?: string;

  /**
   * @public
   * <p>An alternate URL that the client can use to automatically launch a browser. This process
   *       skips the manual step in which the user visits the verification page and enters their
   *       code.</p>
   */
  verificationUriComplete?: string;

  /**
   * @public
   * <p>Indicates the number of seconds in which the verification code will become invalid.</p>
   */
  expiresIn?: number;

  /**
   * @public
   * <p>Indicates the number of seconds the client must wait between attempts when polling for a
   *       session.</p>
   */
  interval?: number;
}

/**
 * @internal
 */
export const CreateTokenRequestFilterSensitiveLog = (obj: CreateTokenRequest): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
  ...(obj.refreshToken && { refreshToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateTokenResponseFilterSensitiveLog = (obj: CreateTokenResponse): any => ({
  ...obj,
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  ...(obj.refreshToken && { refreshToken: SENSITIVE_STRING }),
  ...(obj.idToken && { idToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateTokenWithIAMRequestFilterSensitiveLog = (obj: CreateTokenWithIAMRequest): any => ({
  ...obj,
  ...(obj.refreshToken && { refreshToken: SENSITIVE_STRING }),
  ...(obj.assertion && { assertion: SENSITIVE_STRING }),
  ...(obj.subjectToken && { subjectToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateTokenWithIAMResponseFilterSensitiveLog = (obj: CreateTokenWithIAMResponse): any => ({
  ...obj,
  ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
  ...(obj.refreshToken && { refreshToken: SENSITIVE_STRING }),
  ...(obj.idToken && { idToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RegisterClientResponseFilterSensitiveLog = (obj: RegisterClientResponse): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartDeviceAuthorizationRequestFilterSensitiveLog = (obj: StartDeviceAuthorizationRequest): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});
