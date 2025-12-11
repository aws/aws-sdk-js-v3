// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ConflictExceptionReason, UnprocessableExceptionReason, ValidationExceptionReason } from "./enums";
import { NeptuneGraphServiceException as __BaseException } from "./NeptuneGraphServiceException";

/**
 * <p>Raised in case of an authentication or authorization failure.</p>
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
 * <p>A failure occurred on the server.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
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
 * <p>A specified resource could not be located.</p>
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
 * <p>The exception was interrupted by throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
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
 * <p>A resource could not be validated.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The reason that the resource could not be validated.</p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

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
  }
}

/**
 * <p>Raised when a conflict is encountered.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The reason for the conflict exception.</p>
   * @public
   */
  reason?: ConflictExceptionReason | undefined;

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
    this.reason = opts.reason;
  }
}

/**
 * <p>Request cannot be processed due to known reasons. Eg. partition full.</p>
 * @public
 */
export class UnprocessableException extends __BaseException {
  readonly name = "UnprocessableException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The reason for the unprocessable exception.</p>
   * @public
   */
  reason: UnprocessableExceptionReason | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnprocessableException, __BaseException>) {
    super({
      name: "UnprocessableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnprocessableException.prototype);
    this.reason = opts.reason;
  }
}

/**
 * <p>A service quota was exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The identifier of the resource that exceeded quota.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The type of the resource that exceeded quota. Ex: Graph, Snapshot</p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p>The service code that exceeded quota.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>Service quota code of the resource for which quota was exceeded.</p>
   * @public
   */
  quotaCode?: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}
