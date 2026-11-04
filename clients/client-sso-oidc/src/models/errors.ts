// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { AccessDeniedExceptionReason, InvalidRequestExceptionReason } from "./enums";
import { SSOOIDCServiceException as __BaseException } from "./SSOOIDCServiceException";

/**
 * You do not have sufficient access to perform this action.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssooidc#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * Single error code. For this exception the value will be `access_denied`.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A string that uniquely identifies a reason for the error.
   *
   * @public
   */
  reason?: AccessDeniedExceptionReason | undefined;

  /**
   * Human-readable text providing additional information, used to assist the client developer in understanding the error that occurred.
   *
   * @public
   */
  error_description?: string | undefined;
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
    this.reason = opts.reason;
    this.error_description = opts.error_description;
  }
}

/**
 * Indicates that a request to authorize a client with an access user session token is pending.
 *
 * @public
 */
export class AuthorizationPendingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssooidc#AuthorizationPendingException";
  readonly name = "AuthorizationPendingException" as const;
  readonly $fault = "client" as const;
  /**
   * Single error code. For this exception the value will be `authorization_pending`.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * Human-readable text providing additional information, used to assist the client developer in understanding the error that occurred.
   *
   * @public
   */
  error_description?: string | undefined;
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
 * Indicates that the token issued by the service is expired and is no longer valid.
 *
 * @public
 */
export class ExpiredTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssooidc#ExpiredTokenException";
  readonly name = "ExpiredTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * Single error code. For this exception the value will be `expired_token`.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * Human-readable text providing additional information, used to assist the client developer in understanding the error that occurred.
   *
   * @public
   */
  error_description?: string | undefined;
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
 * Indicates that an error from the service occurred while trying to process a request.
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssooidc#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * Single error code. For this exception the value will be `server_error`.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * Human-readable text providing additional information, used to assist the client developer in understanding the error that occurred.
   *
   * @public
   */
  error_description?: string | undefined;
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
 * Indicates that the `clientId` or `clientSecret` in the request is invalid. For example, this can occur when a client sends an incorrect `clientId` or an expired `clientSecret`.
 *
 * @public
 */
export class InvalidClientException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssooidc#InvalidClientException";
  readonly name = "InvalidClientException" as const;
  readonly $fault = "client" as const;
  /**
   * Single error code. For this exception the value will be `invalid_client`.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * Human-readable text providing additional information, used to assist the client developer in understanding the error that occurred.
   *
   * @public
   */
  error_description?: string | undefined;
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
 * Indicates that a request contains an invalid grant. This can occur if a client makes a CreateToken request with an invalid grant type.
 *
 * @public
 */
export class InvalidGrantException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssooidc#InvalidGrantException";
  readonly name = "InvalidGrantException" as const;
  readonly $fault = "client" as const;
  /**
   * Single error code. For this exception the value will be `invalid_grant`.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * Human-readable text providing additional information, used to assist the client developer in understanding the error that occurred.
   *
   * @public
   */
  error_description?: string | undefined;
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
 * Indicates that something is wrong with the input to the request. For example, a required parameter might be missing or out of range.
 *
 * @public
 */
export class InvalidRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssooidc#InvalidRequestException";
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * Single error code. For this exception the value will be `invalid_request`.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * A string that uniquely identifies a reason for the error.
   *
   * @public
   */
  reason?: InvalidRequestExceptionReason | undefined;

  /**
   * Human-readable text providing additional information, used to assist the client developer in understanding the error that occurred.
   *
   * @public
   */
  error_description?: string | undefined;
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
    this.reason = opts.reason;
    this.error_description = opts.error_description;
  }
}

/**
 * Indicates that the scope provided in the request is invalid.
 *
 * @public
 */
export class InvalidScopeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssooidc#InvalidScopeException";
  readonly name = "InvalidScopeException" as const;
  readonly $fault = "client" as const;
  /**
   * Single error code. For this exception the value will be `invalid_scope`.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * Human-readable text providing additional information, used to assist the client developer in understanding the error that occurred.
   *
   * @public
   */
  error_description?: string | undefined;
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
 * Indicates that the client is making the request too frequently and is more than the service can handle.
 *
 * @public
 */
export class SlowDownException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssooidc#SlowDownException";
  readonly name = "SlowDownException" as const;
  readonly $fault = "client" as const;
  /**
   * Single error code. For this exception the value will be `slow_down`.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * Human-readable text providing additional information, used to assist the client developer in understanding the error that occurred.
   *
   * @public
   */
  error_description?: string | undefined;
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
 * Indicates that the client is not currently authorized to make the request. This can happen when a `clientId` is not issued for a public client.
 *
 * @public
 */
export class UnauthorizedClientException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssooidc#UnauthorizedClientException";
  readonly name = "UnauthorizedClientException" as const;
  readonly $fault = "client" as const;
  /**
   * Single error code. For this exception the value will be `unauthorized_client`.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * Human-readable text providing additional information, used to assist the client developer in understanding the error that occurred.
   *
   * @public
   */
  error_description?: string | undefined;
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
 * Indicates that the grant type in the request is not supported by the service.
 *
 * @public
 */
export class UnsupportedGrantTypeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssooidc#UnsupportedGrantTypeException";
  readonly name = "UnsupportedGrantTypeException" as const;
  readonly $fault = "client" as const;
  /**
   * Single error code. For this exception the value will be `unsupported_grant_type`.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * Human-readable text providing additional information, used to assist the client developer in understanding the error that occurred.
   *
   * @public
   */
  error_description?: string | undefined;
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
 * Indicates that a token provided as input to the request was issued by and is only usable by calling IAM Identity Center endpoints in another region.
 *
 * @public
 */
export class InvalidRequestRegionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssooidc#InvalidRequestRegionException";
  readonly name = "InvalidRequestRegionException" as const;
  readonly $fault = "client" as const;
  /**
   * Single error code. For this exception the value will be `invalid_request`.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * Human-readable text providing additional information, used to assist the client developer in understanding the error that occurred.
   *
   * @public
   */
  error_description?: string | undefined;

  /**
   * Indicates the IAM Identity Center endpoint which the requester may call with this token.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * Indicates the region which the requester may call with this token.
   *
   * @public
   */
  region?: string | undefined;
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
 * Indicates that the client information sent in the request during registration is invalid.
 *
 * @public
 */
export class InvalidClientMetadataException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssooidc#InvalidClientMetadataException";
  readonly name = "InvalidClientMetadataException" as const;
  readonly $fault = "client" as const;
  /**
   * Single error code. For this exception the value will be `invalid_client_metadata`.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * Human-readable text providing additional information, used to assist the client developer in understanding the error that occurred.
   *
   * @public
   */
  error_description?: string | undefined;
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
 * Indicates that one or more redirect URI in the request is not supported for this operation.
 *
 * @public
 */
export class InvalidRedirectUriException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ssooidc#InvalidRedirectUriException";
  readonly name = "InvalidRedirectUriException" as const;
  readonly $fault = "client" as const;
  /**
   * Single error code. For this exception the value will be `invalid_redirect_uri`.
   *
   * @public
   */
  error?: string | undefined;

  /**
   * Human-readable text providing additional information, used to assist the client developer in understanding the error that occurred.
   *
   * @public
   */
  error_description?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRedirectUriException, __BaseException>) {
    super({
      name: "InvalidRedirectUriException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRedirectUriException.prototype);
    this.error = opts.error;
    this.error_description = opts.error_description;
  }
}
