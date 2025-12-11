// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ValidationExceptionErrorCode } from "./enums";
import { ValidationExceptionField } from "./models_0";
import { TaxSettingsServiceException as __BaseException } from "./TaxSettingsServiceException";

/**
 * <p>The access is denied for the Amazon Web ServicesSupport API.
 *     </p>
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
 * <p>Failed to upload the tax exemption document to Amazon Web ServicesSupport case.
 *     </p>
 * @public
 */
export class AttachmentUploadException extends __BaseException {
  readonly name = "AttachmentUploadException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AttachmentUploadException, __BaseException>) {
    super({
      name: "AttachmentUploadException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AttachmentUploadException.prototype);
  }
}

/**
 * <p>The exception when the input is creating conflict with the given state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>409</p>
   * @public
   */
  errorCode: string | undefined;

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
  }
}

/**
 * <p>The exception thrown when an unexpected error occurs when processing a request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>500</p>
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
 * <p>The exception when the input doesn't pass validation for at least one of the input
 *       parameters. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>400</p>
   * @public
   */
  errorCode: ValidationExceptionErrorCode | undefined;

  /**
   * <p>400</p>
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
    this.errorCode = opts.errorCode;
    this.fieldList = opts.fieldList;
  }
}

/**
 * <p>The exception thrown when the input doesn't have a resource associated to it.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>404</p>
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
 * <p>You've exceeded the Amazon Web ServicesSupport case creation limit for your account.
 *     </p>
 * @public
 */
export class CaseCreationLimitExceededException extends __BaseException {
  readonly name = "CaseCreationLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CaseCreationLimitExceededException, __BaseException>) {
    super({
      name: "CaseCreationLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CaseCreationLimitExceededException.prototype);
  }
}
