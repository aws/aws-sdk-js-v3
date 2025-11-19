// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BackupGatewayServiceException as __BaseException } from "./BackupGatewayServiceException";

/**
 * <p>The operation cannot proceed because you have insufficient permissions.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A description of why you have insufficient permissions.</p>
   * @public
   */
  ErrorCode: string | undefined;

  Message?: string | undefined;
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation cannot proceed because it is not supported.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A description of why the operation is not supported.</p>
   * @public
   */
  ErrorCode: string | undefined;

  Message?: string | undefined;
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>A description of which internal error occured.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  Message?: string | undefined;
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>TPS has been limited to protect against intentional or unintentional
 *     high request volumes.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Error: TPS has been limited to protect against intentional or unintentional
   *       high request volumes.</p>
   * @public
   */
  ErrorCode: string | undefined;

  Message?: string | undefined;
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation did not succeed because a validation error occurred.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A description of what caused the validation error.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  Message?: string | undefined;
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource that is required for the action wasn't found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A description of which resource wasn't found.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  Message?: string | undefined;
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}
