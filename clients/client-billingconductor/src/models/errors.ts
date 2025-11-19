// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BillingconductorServiceException as __BaseException } from "./BillingconductorServiceException";
import { ConflictExceptionReason, ValidationExceptionReason } from "./enums";
import { ValidationExceptionField } from "./models_0";

/**
 * <p>You do not have sufficient access to perform this action. </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
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
 * <p>You can cause an inconsistent state by updating or deleting a resource. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>Identifier of the resource in use. </p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Type of the resource in use. </p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>Reason for the inconsistent state. </p>
   * @public
   */
  Reason?: ConflictExceptionReason | undefined;
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
    this.Reason = opts.Reason;
  }
}

/**
 * <p>An unexpected error occurred while processing a request. </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  Message: string | undefined;
  /**
   * <p>Number of seconds you can retry after the call. </p>
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
 * <p>The request references a resource that doesn't exist. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>Resource identifier that was not found. </p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>Resource type that was not found. </p>
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
 * <p>The request would cause a service limit to exceed. </p>
 * @public
 */
export class ServiceLimitExceededException extends __BaseException {
  readonly name = "ServiceLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>Identifier of the resource affected. </p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>Type of the resource affected. </p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The unique code identifier of the service limit that is being exceeded. </p>
   * @public
   */
  LimitCode: string | undefined;

  /**
   * <p>The unique code for the service of the limit that is being exceeded. </p>
   * @public
   */
  ServiceCode: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.LimitCode = opts.LimitCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

/**
 * <p>The request was denied due to request throttling. </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>Number of seconds you can safely retry after the call. </p>
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
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p>The input doesn't match with the constraints specified by Amazon Web Services services.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The reason the request's validation failed. </p>
   * @public
   */
  Reason?: ValidationExceptionReason | undefined;

  /**
   * <p>The fields that caused the error, if applicable. </p>
   * @public
   */
  Fields?: ValidationExceptionField[] | undefined;
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
    this.Fields = opts.Fields;
  }
}
