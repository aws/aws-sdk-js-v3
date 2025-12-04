// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ComputeOptimizerAutomationServiceException as __BaseException } from "./ComputeOptimizerAutomationServiceException";

/**
 * <p> You do not have sufficient permissions to perform this action. </p>
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
 * <p> You are not authorized to perform this action. </p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name = "ForbiddenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
  }
}

/**
 * <p> The specified client token is already in use. </p>
 * @public
 */
export class IdempotencyTokenInUseException extends __BaseException {
  readonly name = "IdempotencyTokenInUseException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotencyTokenInUseException, __BaseException>) {
    super({
      name: "IdempotencyTokenInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotencyTokenInUseException.prototype);
  }
}

/**
 * <p>Exception thrown when the same client token is used with different parameters, indicating a mismatch in idempotent request parameters.</p>
 * @public
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name = "IdempotentParameterMismatchException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatchException, __BaseException>) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
  }
}

/**
 * <p> An internal error occurred while processing the request. </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
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
  }
}

/**
 * <p> One or more parameter values are not valid. </p>
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name = "InvalidParameterValueException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p> The operation can only be performed by a management account. </p>
 * @public
 */
export class NotManagementAccountException extends __BaseException {
  readonly name = "NotManagementAccountException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotManagementAccountException, __BaseException>) {
    super({
      name: "NotManagementAccountException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotManagementAccountException.prototype);
  }
}

/**
 * <p> The account must be opted in to Compute Optimizer Automation before performing this action. </p>
 * @public
 */
export class OptInRequiredException extends __BaseException {
  readonly name = "OptInRequiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OptInRequiredException, __BaseException>) {
    super({
      name: "OptInRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OptInRequiredException.prototype);
  }
}

/**
 * <p> The service is temporarily unavailable. </p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * <p> The request was denied due to request throttling. </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p> The specified resource was not found. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p> The request would exceed service quotas. </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}
