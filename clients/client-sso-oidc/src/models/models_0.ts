// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { SSOOIDCServiceException as __BaseException } from "./SSOOIDCServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  error?: string;
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
  error?: string;
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
   * <p>The unique identifier string for each client. This value should come from the persisted
   *       result of the <a>RegisterClient</a> API.</p>
   */
  clientId: string | undefined;

  /**
   * <p>A secret string generated for the client. This value should come from the persisted result
   *       of the <a>RegisterClient</a> API.</p>
   */
  clientSecret: string | undefined;

  /**
   * <p>Supports grant types for the authorization code, refresh token, and device code request.
   *       For device code requests, specify the following value:</p>
   *
   *          <p>
   *             <code>urn:ietf:params:oauth:grant-type:<i>device_code</i>
   *             </code>
   *          </p>
   *
   *          <p>For information about how to obtain the device code, see the <a>StartDeviceAuthorization</a> topic.</p>
   */
  grantType: string | undefined;

  /**
   * <p>Used only when calling this API for the device code grant type. This short-term code is
   *       used to identify this authentication attempt. This should come from an in-memory reference to
   *       the result of the <a>StartDeviceAuthorization</a> API.</p>
   */
  deviceCode?: string;

  /**
   * <p>The authorization code received from the authorization service. This parameter is required
   *       to perform an authorization grant request to get access to a token.</p>
   */
  code?: string;

  /**
   * <p>Currently, <code>refreshToken</code> is not yet implemented and is not supported. For more
   *       information about the features and limitations of the current IAM Identity Center OIDC implementation,
   *       see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center
   *         OIDC API Reference</a>.</p>
   *          <p>The token used to obtain an access token in the event that the access token is invalid or
   *       expired.</p>
   */
  refreshToken?: string;

  /**
   * <p>The list of scopes that is defined by the client. Upon authorization, this list is used to
   *       restrict permissions when granting an access token.</p>
   */
  scope?: string[];

  /**
   * <p>The location of the application that will receive the authorization code. Users authorize
   *       the service to send the request to this location.</p>
   */
  redirectUri?: string;
}

/**
 * @public
 */
export interface CreateTokenResponse {
  /**
   * <p>An opaque token to access IAM Identity Center resources assigned to a user.</p>
   */
  accessToken?: string;

  /**
   * <p>Used to notify the client that the returned token is an access token. The supported type
   *       is <code>BearerToken</code>.</p>
   */
  tokenType?: string;

  /**
   * <p>Indicates the time in seconds when an access token will expire.</p>
   */
  expiresIn?: number;

  /**
   * <p>Currently, <code>refreshToken</code> is not yet implemented and is not supported. For more
   *       information about the features and limitations of the current IAM Identity Center OIDC implementation,
   *       see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center
   *         OIDC API Reference</a>.</p>
   *          <p>A token that, if present, can be used to refresh a previously issued access token that
   *       might have expired.</p>
   */
  refreshToken?: string;

  /**
   * <p>Currently, <code>idToken</code> is not yet implemented and is not supported. For more
   *       information about the features and limitations of the current IAM Identity Center OIDC implementation,
   *       see <i>Considerations for Using this Guide</i> in the <a href="https://docs.aws.amazon.com/singlesignon/latest/OIDCAPIReference/Welcome.html">IAM Identity Center
   *         OIDC API Reference</a>.</p>
   *          <p>The identifier of the user that associated with the access token, if present.</p>
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
  error?: string;
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
  error?: string;
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
  error?: string;
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
  error?: string;
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
  error?: string;
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
  error?: string;
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
  error?: string;
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
  error?: string;
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
  error?: string;
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
 * <p>Indicates that the client information sent in the request during registration is
 *       invalid.</p>
 */
export class InvalidClientMetadataException extends __BaseException {
  readonly name: "InvalidClientMetadataException" = "InvalidClientMetadataException";
  readonly $fault: "client" = "client";
  error?: string;
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
   * <p>The friendly name of the client.</p>
   */
  clientName: string | undefined;

  /**
   * <p>The type of client. The service supports only <code>public</code> as a client type.
   *       Anything other than public will be rejected by the service.</p>
   */
  clientType: string | undefined;

  /**
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
   * <p>The unique identifier string for each client. This client uses this identifier to get
   *       authenticated by the service in subsequent calls.</p>
   */
  clientId?: string;

  /**
   * <p>A secret string generated for the client. The client will use this string to get
   *       authenticated by the service in subsequent calls.</p>
   */
  clientSecret?: string;

  /**
   * <p>Indicates the time at which the <code>clientId</code> and <code>clientSecret</code> were
   *       issued.</p>
   */
  clientIdIssuedAt?: number;

  /**
   * <p>Indicates the time at which the <code>clientId</code> and <code>clientSecret</code> will
   *       become invalid.</p>
   */
  clientSecretExpiresAt?: number;

  /**
   * <p>The endpoint where the client can request authorization.</p>
   */
  authorizationEndpoint?: string;

  /**
   * <p>The endpoint where the client can get an access token.</p>
   */
  tokenEndpoint?: string;
}

/**
 * @public
 */
export interface StartDeviceAuthorizationRequest {
  /**
   * <p>The unique identifier string for the client that is registered with IAM Identity Center. This value
   *       should come from the persisted result of the <a>RegisterClient</a> API
   *       operation.</p>
   */
  clientId: string | undefined;

  /**
   * <p>A secret string that is generated for the client. This value should come from the
   *       persisted result of the <a>RegisterClient</a> API operation.</p>
   */
  clientSecret: string | undefined;

  /**
   * <p>The URL for the AWS access portal. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/using-the-portal.html">Using
   *       the AWS access portal</a> in the <i>IAM Identity Center User Guide</i>.</p>
   */
  startUrl: string | undefined;
}

/**
 * @public
 */
export interface StartDeviceAuthorizationResponse {
  /**
   * <p>The short-lived code that is used by the device when polling for a session token.</p>
   */
  deviceCode?: string;

  /**
   * <p>A one-time user verification code. This is needed to authorize an in-use device.</p>
   */
  userCode?: string;

  /**
   * <p>The URI of the verification page that takes the <code>userCode</code> to authorize the
   *       device.</p>
   */
  verificationUri?: string;

  /**
   * <p>An alternate URL that the client can use to automatically launch a browser. This process
   *       skips the manual step in which the user visits the verification page and enters their
   *       code.</p>
   */
  verificationUriComplete?: string;

  /**
   * <p>Indicates the number of seconds in which the verification code will become invalid.</p>
   */
  expiresIn?: number;

  /**
   * <p>Indicates the number of seconds the client must wait between attempts when polling for a
   *       session.</p>
   */
  interval?: number;
}
