// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ValidationExceptionReason } from "./enums";
import { EvsServiceException as __BaseException } from "./EvsServiceException";
import { ValidationExceptionField } from "./models_0";

/**
 * <p>A service resource associated with the request could not be found. The resource might not be specified correctly, or it may have a <code>state</code> of <code>DELETED</code>.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The ID of the resource that could not be found.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource that is associated with the error.</p>
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
 * <p>The operation couldn't be performed because the service is throttling requests. This exception is thrown when there are too many requests accepted concurrently from the service endpoint.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  /**
   * <p>The seconds to wait to retry.</p>
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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The input fails to satisfy the specified constraints. You will see this exception if invalid inputs are provided for any of the Amazon EVS environment operations, or if a list operation is performed on an environment resource that is still initializing.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The reason for the exception.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>A list of fields that didn't validate.</p>
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
 * <p>The number of one or more Amazon EVS resources exceeds the maximum allowed. For a list of Amazon EVS quotas, see <a href="https://docs.aws.amazon.com/evs/latest/userguide/service-quotas-evs.html">Amazon EVS endpoints and quotas</a> in the <i>Amazon EVS User Guide</i>. Delete some resources or request an increase in your service quota. To request an increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">Amazon Web Services Service Quotas</a> in the <i>Amazon Web Services General Reference Guide</i>. </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
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

/**
 * <note> <p> <code>TagPolicyException</code> is deprecated. See <a href="https://docs.aws.amazon.com/evs/latest/APIReference/API_ValidationException.html"> <code>ValidationException</code> </a> instead.</p> </note> <p>The request doesn't comply with IAM tag policy. Correct your request and then retry it.</p>
 * @public
 */
export class TagPolicyException extends __BaseException {
  readonly name = "TagPolicyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagPolicyException, __BaseException>) {
    super({
      name: "TagPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagPolicyException.prototype);
  }
}

/**
 * <note> <p> <code>TooManyTagsException</code> is deprecated. See <a href="https://docs.aws.amazon.com/evs/latest/APIReference/API_ServiceQuotaExceededException.html"> <code>ServiceQuotaExceededException</code> </a> instead.</p> </note> <p>A service resource associated with the request has more than 200 tags.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}
