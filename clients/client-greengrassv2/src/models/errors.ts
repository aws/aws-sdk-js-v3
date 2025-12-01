// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ValidationExceptionReason } from "./enums";
import { GreengrassV2ServiceException as __BaseException } from "./GreengrassV2ServiceException";
import { ValidationExceptionField } from "./models_0";

/**
 * <p>You don't have permission to perform the action.</p>
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
 * <p>IoT Greengrass can't process your request right now. Try again later.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The amount of time to wait before you retry the request.</p>
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
 * <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The reason for the validation exception.</p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p>The list of fields that failed to validate.</p>
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
    this.reason = opts.reason;
    this.fields = opts.fields;
  }
}

/**
 * <p>The requested resource can't be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The ID of the resource that isn't found.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource that isn't found.</p>
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
 * <p>Your request exceeded a request rate quota. For example, you might have exceeded the
 *       amount of times that you can retrieve device or deployment status per second.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The code for the quota in <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a>.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>The code for the service in <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a>.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The amount of time to wait before you retry the request.</p>
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
    this.quotaCode = opts.quotaCode;
    this.serviceCode = opts.serviceCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The ID of the resource that conflicts with the request.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource that conflicts with the request.</p>
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
 * <p>The request is already in progress. This exception occurs when you use a client token for
 *       multiple requests while IoT Greengrass is still processing an earlier request that uses the same client
 *       token.</p>
 * @public
 */
export class RequestAlreadyInProgressException extends __BaseException {
  readonly name = "RequestAlreadyInProgressException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestAlreadyInProgressException, __BaseException>) {
    super({
      name: "RequestAlreadyInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestAlreadyInProgressException.prototype);
  }
}

/**
 * <p>Your request exceeds a service quota. For example, you might have the maximum number of
 *       components that you can create.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The ID of the resource that exceeds the service quota.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The type of the resource that exceeds the service quota.</p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p>The code for the quota in <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a>.</p>
   * @public
   */
  quotaCode: string | undefined;

  /**
   * <p>The code for the service in <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">Service Quotas</a>.</p>
   * @public
   */
  serviceCode: string | undefined;

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
    this.quotaCode = opts.quotaCode;
    this.serviceCode = opts.serviceCode;
  }
}
