// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { BraketServiceException as __BaseException } from "./BraketServiceException";
import type { ValidationExceptionReason } from "./enums";
import type { ProgramSetValidationFailure } from "./models_0";

/**
 * <p>You do not have sufficient permissions to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.braket#AccessDeniedException";
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
 * <p>The request failed because of an unknown error.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.braket#InternalServiceException";
  readonly name = "InternalServiceException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
  }
}

/**
 * <p>The specified resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.braket#ResourceNotFoundException";
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
 * <p>The API throttling rate limit is exceeded.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.braket#ThrottlingException";
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
 * <p>The input request failed to satisfy constraints expected by Amazon Braket.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.braket#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The reason for validation failure.</p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p>The validation failures in the program set submitted in the request.</p>
   * @public
   */
  programSetValidationFailures?: ProgramSetValidationFailure[] | undefined;

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
    this.programSetValidationFailures = opts.programSetValidationFailures;
  }
}

/**
 * <p>An error occurred due to a conflict.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.braket#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The specified device is currently offline.</p>
 * @public
 */
export class DeviceOfflineException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.braket#DeviceOfflineException";
  readonly name = "DeviceOfflineException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeviceOfflineException, __BaseException>) {
    super({
      name: "DeviceOfflineException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeviceOfflineException.prototype);
  }
}

/**
 * <p>The specified device has been retired.</p>
 * @public
 */
export class DeviceRetiredException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.braket#DeviceRetiredException";
  readonly name = "DeviceRetiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeviceRetiredException, __BaseException>) {
    super({
      name: "DeviceRetiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeviceRetiredException.prototype);
  }
}

/**
 * <p>The request failed because a service quota is exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.braket#ServiceQuotaExceededException";
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
