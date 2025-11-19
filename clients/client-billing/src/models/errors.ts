// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BillingServiceException as __BaseException } from "./BillingServiceException";
import { ValidationExceptionReason } from "./enums";
import { ValidationExceptionField } from "./models_0";

/**
 * <p>You don't have sufficient access to perform this action.</p>
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
 * <p> Exception thrown when a billing view's health status prevents an operation from being performed. This may occur if the billing view is in a state other than <code>HEALTHY</code>.</p>
 * @public
 */
export class BillingViewHealthStatusException extends __BaseException {
  readonly name = "BillingViewHealthStatusException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p> The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p> The identifier for the service resource associated with the request. </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p> The type of resource associated with the request. </p>
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
 * <p>The request processing failed because of an unknown error, exception, or failure. </p>
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
 * <p> The specified ARN in the request doesn't exist. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p> Value is a list of resource IDs that were not found. </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p> Value is the type of resource that was not found. </p>
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
 * <p> You've reached the limit of resources you can create, or exceeded the size of an individual resource. </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p> The ID of the resource. </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p> The type of Amazon Web Services resource. </p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p> The container for the <code>serviceCode</code>. </p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p> The container for the <code>quotaCode</code>. </p>
   * @public
   */
  quotaCode: string | undefined;

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

/**
 * <p>The request was denied due to request throttling. </p>
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
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.fieldList = opts.fieldList;
  }
}
