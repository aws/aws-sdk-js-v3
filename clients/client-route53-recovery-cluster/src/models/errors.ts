// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ValidationExceptionReason } from "./enums";
import { ValidationExceptionField } from "./models_0";
import { Route53RecoveryClusterServiceException as __BaseException } from "./Route53RecoveryClusterServiceException";

/**
 * <p>You don't have sufficient permissions to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>There was a conflict with this request. Try again.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * Identifier of the resource in use
   * @public
   */
  resourceId: string | undefined;

  /**
   * Type of the resource in use
   * @public
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The cluster endpoint isn't available. Try another cluster endpoint.</p>
 * @public
 */
export class EndpointTemporarilyUnavailableException extends __BaseException {
  readonly name = "EndpointTemporarilyUnavailableException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointTemporarilyUnavailableException, __BaseException>) {
    super({
      name: "EndpointTemporarilyUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointTemporarilyUnavailableException.prototype);
  }
}

/**
 * <p>There was an unexpected error during processing of the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * Advice to clients on when the call can be safely retried
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The request references a routing control or control panel that was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * Hypothetical resource identifier that was not found
   * @public
   */
  resourceId: string | undefined;

  /**
   * Hypothetical resource type that was not found
   * @public
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The request was denied because of request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * Advice to clients on when the call can be safely retried
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>There was a validation error on the request.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * Reason the request failed validation
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * The fields that caused the error, if applicable
   * @public
   */
  fields?: ValidationExceptionField[] | undefined;

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
    this.reason = opts.reason;
    this.fields = opts.fields;
  }
}

/**
 * <p>The request can't update that many routing control states at the same time. Try again with fewer routing control states.</p>
 * @public
 */
export class ServiceLimitExceededException extends __BaseException {
  readonly name = "ServiceLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The resource identifier of the limit that was exceeded.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The resource type of the limit that was exceeded.</p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p>The code of the limit that was exceeded.</p>
   * @public
   */
  limitCode: string | undefined;

  /**
   * <p>The service code of the limit that was exceeded.</p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLimitExceededException, __BaseException>) {
    super({
      name: "ServiceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLimitExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.limitCode = opts.limitCode;
    this.serviceCode = opts.serviceCode;
  }
}
