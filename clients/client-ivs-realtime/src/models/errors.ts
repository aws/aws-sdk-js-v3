// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { IVSRealTimeServiceException as __BaseException } from "./IVSRealTimeServiceException";

/**
 * User does not have sufficient access to perform this action.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ivsrealtime#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * @public
   */
  xAmznErrorType?: string | undefined;

  /**
   * User does not have sufficient access to perform this action.
   *
   * @public
   */
  exceptionMessage?: string | undefined;
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
    this.accessControlAllowOrigin = opts.accessControlAllowOrigin;
    this.accessControlExposeHeaders = opts.accessControlExposeHeaders;
    this.cacheControl = opts.cacheControl;
    this.contentSecurityPolicy = opts.contentSecurityPolicy;
    this.strictTransportSecurity = opts.strictTransportSecurity;
    this.xContentTypeOptions = opts.xContentTypeOptions;
    this.xFrameOptions = opts.xFrameOptions;
    this.xAmznErrorType = opts.xAmznErrorType;
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ivsrealtime#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * @public
   */
  xAmznErrorType?: string | undefined;

  /**
   * Updating or deleting a resource can cause an inconsistent state.
   *
   * @public
   */
  exceptionMessage?: string | undefined;
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
    this.accessControlAllowOrigin = opts.accessControlAllowOrigin;
    this.accessControlExposeHeaders = opts.accessControlExposeHeaders;
    this.cacheControl = opts.cacheControl;
    this.contentSecurityPolicy = opts.contentSecurityPolicy;
    this.strictTransportSecurity = opts.strictTransportSecurity;
    this.xContentTypeOptions = opts.xContentTypeOptions;
    this.xFrameOptions = opts.xFrameOptions;
    this.xAmznErrorType = opts.xAmznErrorType;
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * Unexpected error during processing of request.
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ivsrealtime#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * @public
   */
  xAmznErrorType?: string | undefined;

  /**
   * Unexpected error during processing of request.
   *
   * @public
   */
  exceptionMessage?: string | undefined;
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
    this.accessControlAllowOrigin = opts.accessControlAllowOrigin;
    this.accessControlExposeHeaders = opts.accessControlExposeHeaders;
    this.cacheControl = opts.cacheControl;
    this.contentSecurityPolicy = opts.contentSecurityPolicy;
    this.strictTransportSecurity = opts.strictTransportSecurity;
    this.xContentTypeOptions = opts.xContentTypeOptions;
    this.xFrameOptions = opts.xFrameOptions;
    this.xAmznErrorType = opts.xAmznErrorType;
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * Your account is pending verification.
 *
 * @public
 */
export class PendingVerification extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ivsrealtime#PendingVerification";
  readonly name = "PendingVerification" as const;
  readonly $fault = "client" as const;
  /**
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * @public
   */
  xAmznErrorType?: string | undefined;

  /**
   * Your account is pending verification.
   *
   * @public
   */
  exceptionMessage?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PendingVerification, __BaseException>) {
    super({
      name: "PendingVerification",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PendingVerification.prototype);
    this.accessControlAllowOrigin = opts.accessControlAllowOrigin;
    this.accessControlExposeHeaders = opts.accessControlExposeHeaders;
    this.cacheControl = opts.cacheControl;
    this.contentSecurityPolicy = opts.contentSecurityPolicy;
    this.strictTransportSecurity = opts.strictTransportSecurity;
    this.xContentTypeOptions = opts.xContentTypeOptions;
    this.xFrameOptions = opts.xFrameOptions;
    this.xAmznErrorType = opts.xAmznErrorType;
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * Request references a resource which does not exist.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ivsrealtime#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * @public
   */
  xAmznErrorType?: string | undefined;

  /**
   * Request references a resource which does not exist.
   *
   * @public
   */
  exceptionMessage?: string | undefined;
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
    this.accessControlAllowOrigin = opts.accessControlAllowOrigin;
    this.accessControlExposeHeaders = opts.accessControlExposeHeaders;
    this.cacheControl = opts.cacheControl;
    this.contentSecurityPolicy = opts.contentSecurityPolicy;
    this.strictTransportSecurity = opts.strictTransportSecurity;
    this.xContentTypeOptions = opts.xContentTypeOptions;
    this.xFrameOptions = opts.xFrameOptions;
    this.xAmznErrorType = opts.xAmznErrorType;
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * Request would cause a service quota to be exceeded.
 *
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ivsrealtime#ServiceQuotaExceededException";
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * @public
   */
  xAmznErrorType?: string | undefined;

  /**
   * Request would cause a service quota to be exceeded.
   *
   * @public
   */
  exceptionMessage?: string | undefined;
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
    this.accessControlAllowOrigin = opts.accessControlAllowOrigin;
    this.accessControlExposeHeaders = opts.accessControlExposeHeaders;
    this.cacheControl = opts.cacheControl;
    this.contentSecurityPolicy = opts.contentSecurityPolicy;
    this.strictTransportSecurity = opts.strictTransportSecurity;
    this.xContentTypeOptions = opts.xContentTypeOptions;
    this.xFrameOptions = opts.xFrameOptions;
    this.xAmznErrorType = opts.xAmznErrorType;
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.ivsrealtime#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * @public
   */
  xAmznErrorType?: string | undefined;

  /**
   * The input fails to satisfy the constraints specified by an Amazon Web Services service.
   *
   * @public
   */
  exceptionMessage?: string | undefined;
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
    this.accessControlAllowOrigin = opts.accessControlAllowOrigin;
    this.accessControlExposeHeaders = opts.accessControlExposeHeaders;
    this.cacheControl = opts.cacheControl;
    this.contentSecurityPolicy = opts.contentSecurityPolicy;
    this.strictTransportSecurity = opts.strictTransportSecurity;
    this.xContentTypeOptions = opts.xContentTypeOptions;
    this.xFrameOptions = opts.xFrameOptions;
    this.xAmznErrorType = opts.xAmznErrorType;
    this.exceptionMessage = opts.exceptionMessage;
  }
}
