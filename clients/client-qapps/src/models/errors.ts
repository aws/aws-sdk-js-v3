// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { QAppsServiceException as __BaseException } from "./QAppsServiceException";

/**
 * <p>The client is not authorized to perform the requested operation.</p>
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
 * <p>The requested operation could not be completed due to a conflict with the current state of the resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The unique identifier of the resource</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource</p>
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
 * <p>An internal service error occurred while processing the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * <p>The number of seconds to wait before retrying the operation</p>
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
 * <p>The requested resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The unique identifier of the resource</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource</p>
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
 * <p>The requested operation could not be completed because it would exceed the service's quota or limit.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The unique identifier of the resource</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The code for the service where the quota was exceeded</p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>The code of the quota that was exceeded</p>
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
 * <p>The requested operation could not be completed because too many requests were sent at once. Wait a bit and try again later.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The code for the service where the quota was exceeded</p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>The code of the quota that was exceeded</p>
   * @public
   */
  quotaCode: string | undefined;

  /**
   * <p>The number of seconds to wait before retrying the operation</p>
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
 * <p>The client is not authenticated or authorized to perform the requested operation.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name = "UnauthorizedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * <p>The input failed to satisfy the constraints specified by the service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The requested operation could not be completed because the content exceeds the maximum allowed size.</p>
 * @public
 */
export class ContentTooLargeException extends __BaseException {
  readonly name = "ContentTooLargeException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The unique identifier of the resource</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContentTooLargeException, __BaseException>) {
    super({
      name: "ContentTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContentTooLargeException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}
