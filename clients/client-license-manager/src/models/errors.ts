// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { LicenseManagerServiceException as __BaseException } from "./LicenseManagerServiceException";

/**
 * <p>Access to resource denied.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 * @public
 */
export class AuthorizationException extends __BaseException {
  readonly name = "AuthorizationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationException, __BaseException>) {
    super({
      name: "AuthorizationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more parameter values are not valid.</p>
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name = "InvalidParameterValueException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Too many requests have been submitted. Try again after a brief wait.</p>
 * @public
 */
export class RateLimitExceededException extends __BaseException {
  readonly name = "RateLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RateLimitExceededException, __BaseException>) {
    super({
      name: "RateLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RateLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your resource limits have been exceeded.</p>
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name = "ResourceLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The server experienced an internal error. Try again.</p>
 * @public
 */
export class ServerInternalException extends __BaseException {
  readonly name = "ServerInternalException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerInternalException, __BaseException>) {
    super({
      name: "ServerInternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerInternalException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The provided input is not valid. Try your request again.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There was a conflict processing the request. Try your request again.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource cannot be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The entitlement is not allowed.</p>
 * @public
 */
export class EntitlementNotAllowedException extends __BaseException {
  readonly name = "EntitlementNotAllowedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntitlementNotAllowedException, __BaseException>) {
    super({
      name: "EntitlementNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntitlementNotAllowedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There are no entitlements found for this license, or the entitlement maximum count is reached.</p>
 * @public
 */
export class NoEntitlementsAllowedException extends __BaseException {
  readonly name = "NoEntitlementsAllowedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoEntitlementsAllowedException, __BaseException>) {
    super({
      name: "NoEntitlementsAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoEntitlementsAllowedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This is not the correct Region for the resource. Try again.</p>
 * @public
 */
export class RedirectException extends __BaseException {
  readonly name = "RedirectException" as const;
  readonly $fault = "client" as const;
  Location?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RedirectException, __BaseException>) {
    super({
      name: "RedirectException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RedirectException.prototype);
    this.Location = opts.Location;
    this.Message = opts.Message;
  }
}

/**
 * <p>The digital signature method is unsupported. Try your request again.</p>
 * @public
 */
export class UnsupportedDigitalSignatureMethodException extends __BaseException {
  readonly name = "UnsupportedDigitalSignatureMethodException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedDigitalSignatureMethodException, __BaseException>) {
    super({
      name: "UnsupportedDigitalSignatureMethodException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedDigitalSignatureMethodException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request uses too many filters or too many filter values.</p>
 * @public
 */
export class FilterLimitExceededException extends __BaseException {
  readonly name = "FilterLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FilterLimitExceededException, __BaseException>) {
    super({
      name: "FilterLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FilterLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A dependency required to run the API is missing.</p>
 * @public
 */
export class FailedDependencyException extends __BaseException {
  readonly name = "FailedDependencyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  ErrorCode?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FailedDependencyException, __BaseException>) {
    super({
      name: "FailedDependencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FailedDependencyException.prototype);
    this.Message = opts.Message;
    this.ErrorCode = opts.ErrorCode;
  }
}

/**
 * <p>License Manager cannot allocate a license to a resource because of its state. </p>
 *          <p>For example, you cannot allocate a license to an instance in the process of shutting
 *          down.</p>
 * @public
 */
export class InvalidResourceStateException extends __BaseException {
  readonly name = "InvalidResourceStateException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceStateException, __BaseException>) {
    super({
      name: "InvalidResourceStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You do not have enough licenses available to support a new resource launch.</p>
 * @public
 */
export class LicenseUsageException extends __BaseException {
  readonly name = "LicenseUsageException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LicenseUsageException, __BaseException>) {
    super({
      name: "LicenseUsageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LicenseUsageException.prototype);
    this.Message = opts.Message;
  }
}
