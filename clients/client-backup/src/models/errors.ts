// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { BackupServiceException as __BaseException } from "./BackupServiceException";

/**
 * <p>The required resource already exists.</p>
 * @public
 */
export class AlreadyExistsException extends __BaseException {
  readonly name = "AlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.CreatorRequestId = opts.CreatorRequestId;
    this.Arn = opts.Arn;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name = "InvalidParameterValueException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * <p>Indicates that a required parameter is missing.</p>
 * @public
 */
export class MissingParameterValueException extends __BaseException {
  readonly name = "MissingParameterValueException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingParameterValueException, __BaseException>) {
    super({
      name: "MissingParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingParameterValueException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * <p>A resource that is required for the action doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
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
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * <p>The request failed due to a temporary failure of the server.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * <p>Backup is already performing an action on this recovery point. It can't
 *          perform the action you requested until the first action finishes. Try again later.</p>
 * @public
 */
export class InvalidResourceStateException extends __BaseException {
  readonly name = "InvalidResourceStateException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceStateException, __BaseException>) {
    super({
      name: "InvalidResourceStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceStateException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
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
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}

/**
 * <p>A dependent Amazon Web Services service or resource returned an error to the Backup service, and the action cannot be completed.</p>
 * @public
 */
export class DependencyFailureException extends __BaseException {
  readonly name = "DependencyFailureException" as const;
  readonly $fault = "server" as const;
  Code?: string | undefined;
  Message?: string | undefined;
  /**
   * <p></p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p></p>
   * @public
   */
  Context?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyFailureException, __BaseException>) {
    super({
      name: "DependencyFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyFailureException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
    this.Type = opts.Type;
    this.Context = opts.Context;
  }
}
