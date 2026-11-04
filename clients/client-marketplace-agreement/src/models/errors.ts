// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { AccessDeniedExceptionReason, ResourceType, ValidationExceptionReason } from "./enums";
import { MarketplaceAgreementServiceException as __BaseException } from "./MarketplaceAgreementServiceException";
import type { ValidationExceptionField } from "./models_0";

/**
 * User does not have sufficient access to perform this action.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.marketplaceagreement#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * The unique identifier for the error.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The reason for the access denied exception.
   *
   * @public
   */
  reason?: AccessDeniedExceptionReason | undefined;

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
    this.requestId = opts.requestId;
    this.reason = opts.reason;
  }
}

/**
 * Request was denied due to a resource conflict.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.marketplaceagreement#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * The unique identifier for the error.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The unique identifier of the resource involved in the conflict.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The type of the resource involved in the conflict.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

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
    this.requestId = opts.requestId;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * Unexpected error during processing of request.
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.marketplaceagreement#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * The unique identifier for the error.
   *
   * @public
   */
  requestId?: string | undefined;

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
    this.requestId = opts.requestId;
  }
}

/**
 * Request references a resource which does not exist.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.marketplaceagreement#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * The unique identifier for the error.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The unique identifier for the resource.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The type of resource.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

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
    this.requestId = opts.requestId;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * Request was denied due to request throttling.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.marketplaceagreement#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * The unique identifier for the error.
   *
   * @public
   */
  requestId?: string | undefined;

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
    this.requestId = opts.requestId;
  }
}

/**
 * The input fails to satisfy the constraints specified by the service.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.marketplaceagreement#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * The unique identifier associated with the error.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The reason associated with the error.
   *
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * The fields associated with the error.
   *
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
    this.requestId = opts.requestId;
    this.reason = opts.reason;
    this.fields = opts.fields;
  }
}

/**
 * Request exceeded the maximum allowed limit (quota) for a specific resource or API operation.
 *
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.marketplaceagreement#ServiceQuotaExceededException";
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The unique identifier for the error.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The code of the quota that was exceeded.
   *
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * The code of the service whose quota was exceeded.
   *
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * The type of the resource that exceeded the quota.
   *
   * @public
   */
  resourceType?: string | undefined;

  /**
   * The unique identifier of the resource that exceeded the quota.
   *
   * @public
   */
  resourceId?: string | undefined;

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
    this.requestId = opts.requestId;
    this.quotaCode = opts.quotaCode;
    this.serviceCode = opts.serviceCode;
    this.resourceType = opts.resourceType;
    this.resourceId = opts.resourceId;
  }
}
