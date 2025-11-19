// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ValidationExceptionReason } from "./enums";
import { ValidationExceptionField } from "./models_0";
import { QBusinessServiceException as __BaseException } from "./QBusinessServiceException";

/**
 * <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
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
 * <p>You are trying to perform an action that conflicts with the current status of your resource. Fix any inconsistencies with your resources and try again.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The identifier of the resource affected.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource affected.</p>
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
 * <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
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
 * <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The identifier of the resource affected.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource affected.</p>
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
 * <p>You have exceeded the set limits for your Amazon Q Business service. </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The identifier of the resource affected.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource affected.</p>
   * @public
   */
  resourceType: string | undefined;

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
  }
}

/**
 * <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
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
 * <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The reason for the <code>ValidationException</code>.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>The input field(s) that failed validation.</p>
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
 * <p>An external resource that you configured with your application is returning errors and preventing this operation from succeeding. Fix those errors and try again. </p>
 * @public
 */
export class ExternalResourceException extends __BaseException {
  readonly name = "ExternalResourceException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExternalResourceException, __BaseException>) {
    super({
      name: "ExternalResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExternalResourceException.prototype);
  }
}

/**
 * <p>You don't have permissions to perform the action because your license is inactive. Ask your admin to activate your license and try again after your licence is active.</p>
 * @public
 */
export class LicenseNotFoundException extends __BaseException {
  readonly name = "LicenseNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LicenseNotFoundException, __BaseException>) {
    super({
      name: "LicenseNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LicenseNotFoundException.prototype);
  }
}

/**
 * <p>The requested media object is too large to be returned.</p>
 * @public
 */
export class MediaTooLargeException extends __BaseException {
  readonly name = "MediaTooLargeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MediaTooLargeException, __BaseException>) {
    super({
      name: "MediaTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MediaTooLargeException.prototype);
  }
}
