// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BudgetsServiceException as __BaseException } from "./BudgetsServiceException";

/**
 * <p>You are not authorized to use this operation with the given parameters.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error message the exception carries.</p>
   * @public
   */
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
 * <p>
 *       The billing view status must be HEALTHY to perform this action. Try again when the status is HEALTHY.
 *     </p>
 * @public
 */
export class BillingViewHealthStatusException extends __BaseException {
  readonly name = "BillingViewHealthStatusException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error message the exception carries.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BillingViewHealthStatusException, __BaseException>) {
    super({
      name: "BillingViewHealthStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BillingViewHealthStatusException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've exceeded the notification or subscriber limit.</p>
 * @public
 */
export class CreationLimitExceededException extends __BaseException {
  readonly name = "CreationLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error message the exception carries.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CreationLimitExceededException, __BaseException>) {
    super({
      name: "CreationLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CreationLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The budget name already exists. Budget names must be unique within an account.</p>
 * @public
 */
export class DuplicateRecordException extends __BaseException {
  readonly name = "DuplicateRecordException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error message the exception carries.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateRecordException, __BaseException>) {
    super({
      name: "DuplicateRecordException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateRecordException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An error on the server occurred during the processing of your request. Try again later.</p>
 * @public
 */
export class InternalErrorException extends __BaseException {
  readonly name = "InternalErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The error message the exception carries.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalErrorException, __BaseException>) {
    super({
      name: "InternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error message the exception carries.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>We can’t locate the resource that you specified.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error message the exception carries.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached a Service Quota limit on this resource.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error message the exception carries.</p>
   * @public
   */
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of API requests has exceeded the maximum allowed API request throttling limit
 *       for the account.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error message the exception carries.</p>
   * @public
   */
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was received and recognized by the server, but the server rejected that
 *       particular method for the requested resource.</p>
 * @public
 */
export class ResourceLockedException extends __BaseException {
  readonly name = "ResourceLockedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error message the exception carries.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLockedException, __BaseException>) {
    super({
      name: "ResourceLockedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLockedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The pagination token is invalid.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name = "InvalidNextTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error message the exception carries.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The pagination token expired.</p>
 * @public
 */
export class ExpiredNextTokenException extends __BaseException {
  readonly name = "ExpiredNextTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error message the exception carries.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredNextTokenException, __BaseException>) {
    super({
      name: "ExpiredNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredNextTokenException.prototype);
    this.Message = opts.Message;
  }
}
