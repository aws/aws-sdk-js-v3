// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BCMPricingCalculatorServiceException as __BaseException } from "./BCMPricingCalculatorServiceException";
import { ValidationExceptionReason } from "./enums";
import { ValidationExceptionField } from "./models_0";

/**
 * <p> You do not have sufficient access to perform this action. </p>
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
 * <p> The requested data is currently unavailable. </p>
 * @public
 */
export class DataUnavailableException extends __BaseException {
  readonly name = "DataUnavailableException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataUnavailableException, __BaseException>) {
    super({
      name: "DataUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataUnavailableException.prototype);
  }
}

/**
 * <p> An internal error has occurred. Retry your request, but if the problem persists, contact Amazon Web Services support. </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * <p> An internal error has occurred. Retry your request, but if the problem persists, contact Amazon Web Services support. </p>
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
 * <p> The specified resource was not found. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p> The identifier of the resource that was not found. </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p> The type of the resource that was not found. </p>
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
 * <p> The request was denied due to request throttling. </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The service code that exceeded the throttling limit.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The quota code that exceeded the throttling limit.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>The service code that exceeded the throttling limit. Retry your request, but if the problem persists, contact Amazon Web Services support.</p>
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
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p> The input provided fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p> The reason for the validation exception. </p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p> The list of fields that are invalid. </p>
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

/**
 * <p> The request could not be processed because of conflict in the current state of the resource. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p> The identifier of the resource that was not found. </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p> The type of the resource that was not found. </p>
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
 * <p> The request would cause you to exceed your service quota. </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p> The identifier of the resource that exceeded quota. </p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p> The type of the resource that exceeded quota. </p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p> The service code that exceeded quota. </p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p> The quota code that was exceeded. </p>
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
