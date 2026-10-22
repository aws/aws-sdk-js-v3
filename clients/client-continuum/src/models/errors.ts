// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { ContinuumServiceException as __BaseException } from "./ContinuumServiceException";
import type { ValidationExceptionField } from "./models_0";

/**
 * The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.continuum#AccessDeniedException";
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
 * The request could not be completed due to a conflict with the current state of the resource.
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.continuum#ConflictException";
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
 * The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.continuum#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
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
 * The specified resource was not found. Verify that the resource identifier is correct and that the resource exists.
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.continuum#ResourceNotFoundException";
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
 * The request was denied due to request throttling.
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.continuum#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
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
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.continuum#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
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
    this.fieldList = opts.fieldList;
  }
}

/**
 * The request would exceed a service quota. Review your quota and request an increase if needed.
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.continuum#ServiceQuotaExceededException";
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The quota code for the exceeded limit.
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * The service code for the exceeded limit.
   * @public
   */
  serviceCode?: string | undefined;

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
    this.quotaCode = opts.quotaCode;
    this.serviceCode = opts.serviceCode;
  }
}
