// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BCMDataExportsServiceException as __BaseException } from "./BCMDataExportsServiceException";
import { ValidationExceptionReason } from "./enums";
import { ValidationExceptionField } from "./models_0";

/**
 * <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  Message: string | undefined;
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
  }
}

/**
 * <p>You've reached the limit on the number of resources you can create, or exceeded the size
 *       of an individual resource.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The identifier of the resource that exceeded quota.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The type of the resource that exceeded quota.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The quota code that was exceeded.</p>
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * <p>The service code that exceeded quota. It will always be
   *       “AWSBillingAndCostManagementDataExports”.</p>
   * @public
   */
  ServiceCode: string | undefined;
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
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The quota code that exceeded the throttling limit.</p>
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * <p>The service code that exceeded the throttling limit. It will always be
   *       “AWSBillingAndCostManagementDataExports”.</p>
   * @public
   */
  ServiceCode?: string | undefined;
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
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The reason for the validation exception.</p>
   * @public
   */
  Reason?: ValidationExceptionReason | undefined;

  /**
   * <p>The list of fields that are invalid.</p>
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

/**
 * <p>The specified Amazon Resource Name (ARN) in the request doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The identifier of the resource that was not found.</p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of the resource that was not found.</p>
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
