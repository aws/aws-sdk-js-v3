import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  error?: string;
  error_description?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return __isa(o, "AccessDeniedException");
  }
}

/**
 * <p>Indicates that a request to authorize a client with an access user session token is pending.</p>
 */
export interface AuthorizationPendingException
  extends __SmithyException,
    $MetadataBearer {
  name: "AuthorizationPendingException";
  $fault: "client";
  error?: string;
  error_description?: string;
}

export namespace AuthorizationPendingException {
  export function isa(o: any): o is AuthorizationPendingException {
    return __isa(o, "AuthorizationPendingException");
  }
}

export interface CreateTokenRequest {
  __type?: "CreateTokenRequest";
  /**
   * <p>The unique identifier string for each client. This value should come from the persisted result of the <a>RegisterClient</a> API.</p>
   */
  clientId: string | undefined;

  /**
   * <p>A secret string generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API.</p>
   */
  clientSecret: string | undefined;

  /**
   * <p>The authorization code received from the authorization service. This parameter is required to perform an authorization grant request to get access to a token.</p>
   */
  code?: string;

  /**
   * <p>Used only when calling this API for the device code grant type. This short-term code is
   *       used to identify this authentication attempt. This should come from an in-memory reference to
   *       the result of the <a>StartDeviceAuthorization</a> API.</p>
   */
  deviceCode: string | undefined;

  /**
   * <p>Supports grant types for authorization code, refresh token, and device code request.</p>
   */
  grantType: string | undefined;

  /**
   * <p>The location of the application that will receive the authorization code. Users authorize
   *       the service to send the request to this location.</p>
   */
  redirectUri?: string;

  /**
   * <p>The token used to obtain an access token in the event that the access token is invalid or expired. This token is not issued by the service.</p>
   */
  refreshToken?: string;

  /**
   * <p>The list of scopes that is defined by the client. Upon authorization, this list is used to
   *       restrict permissions when granting an access token.</p>
   */
  scope?: Array<string>;
}

export namespace CreateTokenRequest {
  export function isa(o: any): o is CreateTokenRequest {
    return __isa(o, "CreateTokenRequest");
  }
}

export interface CreateTokenResponse {
  __type?: "CreateTokenResponse";
  /**
   * <p>An opaque token to access AWS SSO resources assigned to a user.</p>
   */
  accessToken?: string;

  /**
   * <p>Indicates the time in seconds when an access token will expire.</p>
   */
  expiresIn?: number;

  /**
   * <p>The identifier of the user that associated with the access token, if present.</p>
   */
  idToken?: string;

  /**
   * <p>A token that, if present, can be used to refresh a previously issued access token that
   *       might have expired.</p>
   */
  refreshToken?: string;

  /**
   * <p>Used to notify the client that the returned token is an access token. The supported type
   *       is <code>BearerToken</code>.</p>
   */
  tokenType?: string;
}

export namespace CreateTokenResponse {
  export function isa(o: any): o is CreateTokenResponse {
    return __isa(o, "CreateTokenResponse");
  }
}

/**
 * <p>Indicates that the token issued by the service is expired and is no longer valid.</p>
 */
export interface ExpiredTokenException
  extends __SmithyException,
    $MetadataBearer {
  name: "ExpiredTokenException";
  $fault: "client";
  error?: string;
  error_description?: string;
}

export namespace ExpiredTokenException {
  export function isa(o: any): o is ExpiredTokenException {
    return __isa(o, "ExpiredTokenException");
  }
}

/**
 * <p>Indicates that an error from the service occurred while trying to process a request.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  error?: string;
  error_description?: string;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return __isa(o, "InternalServerException");
  }
}

/**
 * <p>Indicates that the <code>clientId</code> or <code>clientSecret</code> in the request is
 *       invalid. For example, this can occur when a client sends an incorrect <code>clientId</code> or
 *       an expired <code>clientSecret</code>.</p>
 */
export interface InvalidClientException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidClientException";
  $fault: "client";
  error?: string;
  error_description?: string;
}

export namespace InvalidClientException {
  export function isa(o: any): o is InvalidClientException {
    return __isa(o, "InvalidClientException");
  }
}

/**
 * <p>Indicates that the client information sent in the request during registration is invalid.</p>
 */
export interface InvalidClientMetadataException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidClientMetadataException";
  $fault: "client";
  error?: string;
  error_description?: string;
}

export namespace InvalidClientMetadataException {
  export function isa(o: any): o is InvalidClientMetadataException {
    return __isa(o, "InvalidClientMetadataException");
  }
}

/**
 * <p>Indicates that a request contains an invalid grant. This can occur if a client makes a <a>CreateToken</a> request with an invalid grant type.</p>
 */
export interface InvalidGrantException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidGrantException";
  $fault: "client";
  error?: string;
  error_description?: string;
}

export namespace InvalidGrantException {
  export function isa(o: any): o is InvalidGrantException {
    return __isa(o, "InvalidGrantException");
  }
}

/**
 * <p>Indicates that something is wrong with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  error?: string;
  error_description?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

/**
 * <p>Indicates that the scope provided in the request is invalid.</p>
 */
export interface InvalidScopeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidScopeException";
  $fault: "client";
  error?: string;
  error_description?: string;
}

export namespace InvalidScopeException {
  export function isa(o: any): o is InvalidScopeException {
    return __isa(o, "InvalidScopeException");
  }
}

export interface RegisterClientRequest {
  __type?: "RegisterClientRequest";
  /**
   * <p>The friendly name of the client.</p>
   */
  clientName: string | undefined;

  /**
   * <p>The type of client. The service supports only <code>public</code> as a client type. Anything other than public will be rejected by the service.</p>
   */
  clientType: string | undefined;

  /**
   * <p>The list of scopes that are defined by the client. Upon authorization, this list is used
   *       to restrict permissions when granting an access token.</p>
   */
  scopes?: Array<string>;
}

export namespace RegisterClientRequest {
  export function isa(o: any): o is RegisterClientRequest {
    return __isa(o, "RegisterClientRequest");
  }
}

export interface RegisterClientResponse {
  __type?: "RegisterClientResponse";
  /**
   * <p>The endpoint where the client can request authorization.</p>
   */
  authorizationEndpoint?: string;

  /**
   * <p>The unique identifier string for each client. This client uses this identifier to get
   *       authenticated by the service in subsequent calls.</p>
   */
  clientId?: string;

  /**
   * <p>Indicates the time at which the <code>clientId</code> and <code>clientSecret</code> were issued.</p>
   */
  clientIdIssuedAt?: number;

  /**
   * <p>A secret string generated for the client. The client will use this string to get
   *       authenticated by the service in subsequent calls.</p>
   */
  clientSecret?: string;

  /**
   * <p>Indicates the time at which the <code>clientId</code> and <code>clientSecret</code> will become invalid.</p>
   */
  clientSecretExpiresAt?: number;

  /**
   * <p>The endpoint where the client can get an access token.</p>
   */
  tokenEndpoint?: string;
}

export namespace RegisterClientResponse {
  export function isa(o: any): o is RegisterClientResponse {
    return __isa(o, "RegisterClientResponse");
  }
}

/**
 * <p>Indicates that the client is making the request too frequently and is more than the service can handle. </p>
 */
export interface SlowDownException extends __SmithyException, $MetadataBearer {
  name: "SlowDownException";
  $fault: "client";
  error?: string;
  error_description?: string;
}

export namespace SlowDownException {
  export function isa(o: any): o is SlowDownException {
    return __isa(o, "SlowDownException");
  }
}

export interface StartDeviceAuthorizationRequest {
  __type?: "StartDeviceAuthorizationRequest";
  /**
   * <p>The unique identifier string for the client that is registered with AWS SSO. This value
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
   * <p>The URL for the AWS SSO user portal. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/using-the-portal.html">Using
   *         the User Portal</a> in the <i>AWS Single Sign-On User Guide</i>.</p>
   */
  startUrl: string | undefined;
}

export namespace StartDeviceAuthorizationRequest {
  export function isa(o: any): o is StartDeviceAuthorizationRequest {
    return __isa(o, "StartDeviceAuthorizationRequest");
  }
}

export interface StartDeviceAuthorizationResponse {
  __type?: "StartDeviceAuthorizationResponse";
  /**
   * <p>The short-lived code that is used by the device when polling for a session token.</p>
   */
  deviceCode?: string;

  /**
   * <p>Indicates the number of seconds in which the verification code will become invalid.</p>
   */
  expiresIn?: number;

  /**
   * <p>Indicates the number of seconds the client must wait between attempts when polling for a session.</p>
   */
  interval?: number;

  /**
   * <p>A one-time user verification code. This is needed to authorize an in-use device.</p>
   */
  userCode?: string;

  /**
   * <p>The URI of the verification page that takes the <code>userCode</code> to authorize the device.</p>
   */
  verificationUri?: string;

  /**
   * <p>An alternate URL that the client can use to automatically launch a browser. This process
   *       skips the manual step in which the user visits the verification page and enters their
   *       code.</p>
   */
  verificationUriComplete?: string;
}

export namespace StartDeviceAuthorizationResponse {
  export function isa(o: any): o is StartDeviceAuthorizationResponse {
    return __isa(o, "StartDeviceAuthorizationResponse");
  }
}

/**
 * <p>Indicates that the client is not currently authorized to make the request. This can happen
 *       when a <code>clientId</code> is not issued for a public client.</p>
 */
export interface UnauthorizedClientException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedClientException";
  $fault: "client";
  error?: string;
  error_description?: string;
}

export namespace UnauthorizedClientException {
  export function isa(o: any): o is UnauthorizedClientException {
    return __isa(o, "UnauthorizedClientException");
  }
}

/**
 * <p>Indicates that the grant type in the request is not supported by the service.</p>
 */
export interface UnsupportedGrantTypeException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedGrantTypeException";
  $fault: "client";
  error?: string;
  error_description?: string;
}

export namespace UnsupportedGrantTypeException {
  export function isa(o: any): o is UnsupportedGrantTypeException {
    return __isa(o, "UnsupportedGrantTypeException");
  }
}
