// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import type { AccessDeniedExceptionReason, ResourceType, ValidationExceptionReason } from "./enums";
import { MarketplaceAgreementServiceException as __BaseException } from "./MarketplaceAgreementServiceException";
import type { ValidationExceptionField } from "./models_0";

/**
 * <p>User does not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The unique identifier for the error.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The reason for the access denied exception.</p>
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
 * <p>Request was denied due to a resource conflict.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The unique identifier for the error.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The unique identifier of the resource involved in the conflict.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The type of the resource involved in the conflict.</p>
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
 * <p>Unexpected error during processing of request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The unique identifier for the error.</p>
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
 * <p>Request references a resource which does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The unique identifier for the error.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The unique identifier for the resource.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The type of resource.</p>
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
 * <p>Request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The unique identifier for the error.</p>
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
 * <p>The input fails to satisfy the constraints specified by the service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The unique identifier associated with the error.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The reason associated with the error.</p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p>The fields associated with the error.</p>
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
 * <p>Request exceeded the maximum allowed limit (quota) for a specific resource or API operation.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The unique identifier for the error.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The code of the quota that was exceeded.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>The code of the service whose quota was exceeded.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The type of the resource that exceeded the quota.</p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p>The unique identifier of the resource that exceeded the quota.</p>
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
