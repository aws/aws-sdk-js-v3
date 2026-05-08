// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { S3FilesServiceException as __BaseException } from "./S3FilesServiceException";

/**
 * <p>The request conflicts with the current state of the resource. This can occur when trying to create a resource that already exists or delete a resource that is in use.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code associated with the exception.</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * <p>The identifier of the resource that caused the conflict.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The type of the resource that caused the conflict.</p>
   * @public
   */
  resourceType?: string | undefined;

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
    this.errorCode = opts.errorCode;
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>An internal server error occurred. Retry your request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The error code associated with the exception.</p>
   * @public
   */
  errorCode: string | undefined;

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
    this.errorCode = opts.errorCode;
  }
}

/**
 * <p>The specified resource was not found. Verify that the resource exists and that you have permission to access it.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code associated with the exception.</p>
   * @public
   */
  errorCode: string | undefined;

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
    this.errorCode = opts.errorCode;
  }
}

/**
 * <p>The request would exceed a service quota. Review your service quotas and either delete resources or request a quota increase.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code associated with the exception.</p>
   * @public
   */
  errorCode: string | undefined;

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
    this.errorCode = opts.errorCode;
  }
}

/**
 * <p>The request was throttled. Retry your request using exponential backoff.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code associated with the exception.</p>
   * @public
   */
  errorCode: string | undefined;

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
    this.errorCode = opts.errorCode;
  }
}

/**
 * <p>The input parameters are not valid. Check the parameter values and try again.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error code associated with the exception.</p>
   * @public
   */
  errorCode: string | undefined;

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
    this.errorCode = opts.errorCode;
  }
}
