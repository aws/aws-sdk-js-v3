// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudSearchServiceException as __BaseException } from "./CloudSearchServiceException";

/**
 * <p>An error occurred while processing the request.</p>
 * @public
 */
export class BaseException extends __BaseException {
  readonly name = "BaseException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A machine-parsable string error or warning code.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>A human-readable string error or warning message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BaseException, __BaseException>) {
    super({
      name: "BaseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BaseException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 * @public
 */
export class InternalException extends __BaseException {
  readonly name = "InternalException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>A machine-parsable string error or warning code.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>A human-readable string error or warning message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A machine-parsable string error or warning code.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>A human-readable string error or warning message.</p>
   * @public
   */
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
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because it has invalid parameters.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A machine-parsable string error or warning code.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>A human-readable string error or warning message.</p>
   * @public
   */
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
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because a resource limit has already been met.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A machine-parsable string error or warning code.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>A human-readable string error or warning message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because it attempted to create a resource that already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name = "ResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A machine-parsable string error or warning code.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>A human-readable string error or warning message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because it specified an invalid type definition.</p>
 * @public
 */
export class InvalidTypeException extends __BaseException {
  readonly name = "InvalidTypeException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A machine-parsable string error or warning code.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>A human-readable string error or warning message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTypeException, __BaseException>) {
    super({
      name: "InvalidTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTypeException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because it attempted an operation which is not enabled.</p>
 * @public
 */
export class DisabledOperationException extends __BaseException {
  readonly name = "DisabledOperationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A machine-parsable string error or warning code.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>A human-readable string error or warning message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DisabledOperationException, __BaseException>) {
    super({
      name: "DisabledOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DisabledOperationException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}
