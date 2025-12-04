// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DetectiveServiceException as __BaseException } from "./DetectiveServiceException";
import { ErrorCode } from "./enums";

/**
 * <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The SDK default error code associated with the access denied exception.</p>
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * <p>The SDK default explanation of why access was denied.</p>
   * @public
   */
  ErrorCodeReason?: string | undefined;

  /**
   * <p>The error code associated with the access denied exception.</p>
   * @public
   */
  SubErrorCode?: ErrorCode | undefined;

  /**
   * <p> An explanation of why access was denied.</p>
   * @public
   */
  SubErrorCodeReason?: string | undefined;
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
    this.Message = opts.Message;
    this.ErrorCode = opts.ErrorCode;
    this.ErrorCodeReason = opts.ErrorCodeReason;
    this.SubErrorCode = opts.SubErrorCode;
    this.SubErrorCodeReason = opts.SubErrorCodeReason;
  }
}

/**
 * <p>The request attempted an invalid action.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was valid but failed because of a problem with the service.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The request refers to a nonexistent resource.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The request parameters are invalid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The error code associated with the validation failure.</p>
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * <p> An explanation of why validation failed.</p>
   * @public
   */
  ErrorCodeReason?: string | undefined;
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
    this.Message = opts.Message;
    this.ErrorCode = opts.ErrorCode;
    this.ErrorCodeReason = opts.ErrorCodeReason;
  }
}

/**
 * <p>This request cannot be completed for one of the following reasons.</p>
 *          <ul>
 *             <li>
 *                <p>This request cannot be completed if it would cause the number of member accounts in the
 *             behavior graph to exceed the maximum allowed. A behavior graph cannot have more than 1,200
 *             member accounts.</p>
 *             </li>
 *             <li>
 *                <p>This request cannot be completed if the current volume ingested is above the limit of 10 TB per day. Detective will not allow you to add additional member accounts.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The type of resource that has exceeded the service quota.</p>
   * @public
   */
  Resources?: string[] | undefined;
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
    this.Message = opts.Message;
    this.Resources = opts.Resources;
  }
}

/**
 * <p>The request cannot be completed because too many other requests are occurring at the
 *          same time.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}
