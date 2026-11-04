// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { ValidationExceptionReason } from "./enums";
import type { ValidationExceptionField } from "./models_0";
import { WorkspacesInstancesServiceException as __BaseException } from "./WorkspacesInstancesServiceException";

/**
 * Indicates insufficient permissions to perform the requested action.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspacesinstances#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * Detailed explanation of the access denial.
   *
   * @public
   */
  Message: string | undefined;
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
 * Signals a conflict with the current state of the resource.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspacesinstances#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * Description of the conflict encountered.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * Identifier of the conflicting resource.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Type of the conflicting resource.
   *
   * @public
   */
  ResourceType: string | undefined;
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
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * Indicates an unexpected server-side error occurred.
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspacesinstances#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * Description of the internal server error.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * Recommended wait time before retrying the request.
   *
   * @public
   */
  RetryAfterSeconds?: number | undefined;
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
    this.Message = opts.Message;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * Indicates the requested resource could not be found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspacesinstances#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * Details about the missing resource.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * Identifier of the resource that was not found.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Type of the resource that was not found.
   *
   * @public
   */
  ResourceType: string | undefined;
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
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * Indicates the request rate has exceeded limits.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspacesinstances#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
  /**
   * Description of the throttling event.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * Code identifying the service experiencing throttling.
   *
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * Specific code for the throttling quota.
   *
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * Recommended wait time before retrying the request.
   *
   * @public
   */
  RetryAfterSeconds?: number | undefined;
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
    this.ServiceCode = opts.ServiceCode;
    this.QuotaCode = opts.QuotaCode;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * Indicates invalid input parameters in the request.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspacesinstances#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * Overall description of validation failures.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * Specific reason for the validation failure.
   *
   * @public
   */
  Reason: ValidationExceptionReason | undefined;

  /**
   * List of fields that failed validation.
   *
   * @public
   */
  FieldList?: ValidationExceptionField[] | undefined;
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
    this.Reason = opts.Reason;
    this.FieldList = opts.FieldList;
  }
}

/**
 * Indicates that a service quota has been exceeded.
 *
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspacesinstances#ServiceQuotaExceededException";
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * Description of the quota limitation.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * Identifier of the resource related to the quota.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Type of resource related to the quota.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * Code identifying the service with the quota limitation.
   *
   * @public
   */
  ServiceCode: string | undefined;

  /**
   * Specific code for the exceeded quota.
   *
   * @public
   */
  QuotaCode: string | undefined;
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
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.ServiceCode = opts.ServiceCode;
    this.QuotaCode = opts.QuotaCode;
  }
}

/**
 * The volume has a previous modification that is still in progress, or has reached the limit of four modifications in a rolling 24-hour period. Wait for the current modification to finish, or wait until the time indicated in the error message, and then retry the request.
 *
 * @public
 */
export class VolumeModificationRateExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspacesinstances#VolumeModificationRateExceededException";
  readonly name = "VolumeModificationRateExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * Specifies the reason that the modification request was rejected.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * Specifies the identifier of the volume for which the modification request was rejected.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Specifies the type of the resource for which the modification request was rejected.
   *
   * @public
   */
  ResourceType: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VolumeModificationRateExceededException, __BaseException>) {
    super({
      name: "VolumeModificationRateExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VolumeModificationRateExceededException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}
