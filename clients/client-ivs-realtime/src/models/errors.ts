// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IVSRealTimeServiceException as __BaseException } from "./IVSRealTimeServiceException";

/**
 * <p/>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p/>
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * <p/>
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * <p/>
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * <p/>
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * <p/>
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xAmznErrorType?: string | undefined;

  /**
   * <p>User does not have sufficient access to perform this action.</p>
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
 * <p/>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p/>
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * <p/>
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * <p/>
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * <p/>
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * <p/>
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xAmznErrorType?: string | undefined;

  /**
   * <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
 * <p/>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * <p/>
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * <p/>
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * <p/>
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * <p/>
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * <p/>
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xAmznErrorType?: string | undefined;

  /**
   * <p>Unexpected error during processing of request.</p>
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
 * <p/>
 * @public
 */
export class PendingVerification extends __BaseException {
  readonly name = "PendingVerification" as const;
  readonly $fault = "client" as const;
  /**
   * <p/>
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * <p/>
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * <p/>
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * <p/>
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * <p/>
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xAmznErrorType?: string | undefined;

  /**
   * <p> Your account is pending verification. </p>
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
 * <p/>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p/>
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * <p/>
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * <p/>
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * <p/>
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * <p/>
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xAmznErrorType?: string | undefined;

  /**
   * <p>Request references a resource which does not exist.</p>
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
 * <p/>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p/>
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * <p/>
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * <p/>
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * <p/>
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * <p/>
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xAmznErrorType?: string | undefined;

  /**
   * <p>Request would cause a service quota to be exceeded.</p>
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
 * <p/>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p/>
   * @public
   */
  accessControlAllowOrigin?: string | undefined;

  /**
   * <p/>
   * @public
   */
  accessControlExposeHeaders?: string | undefined;

  /**
   * <p/>
   * @public
   */
  cacheControl?: string | undefined;

  /**
   * <p/>
   * @public
   */
  contentSecurityPolicy?: string | undefined;

  /**
   * <p/>
   * @public
   */
  strictTransportSecurity?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xContentTypeOptions?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xFrameOptions?: string | undefined;

  /**
   * <p/>
   * @public
   */
  xAmznErrorType?: string | undefined;

  /**
   * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
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
