// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { OAMServiceException as __BaseException } from "./OAMServiceException";

/**
 * <p>A resource was in an inconsistent state during an update or a deletion.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The name of the exception.</p>
   * @public
   */
  amznErrorType?: string | undefined;
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
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * <p>Unexpected error while processing the request. Retry the request.</p>
 * @public
 */
export class InternalServiceFault extends __BaseException {
  readonly name = "InternalServiceFault" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * <p>The name of the exception.</p>
   * @public
   */
  amznErrorType?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceFault, __BaseException>) {
    super({
      name: "InternalServiceFault",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceFault.prototype);
    this.Message = opts.Message;
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * <p>A parameter is specified incorrectly.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The name of the exception.</p>
   * @public
   */
  amznErrorType?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * <p>A required parameter is missing from the request.</p>
 * @public
 */
export class MissingRequiredParameterException extends __BaseException {
  readonly name = "MissingRequiredParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The name of the exception.</p>
   * @public
   */
  amznErrorType?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingRequiredParameterException, __BaseException>) {
    super({
      name: "MissingRequiredParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingRequiredParameterException.prototype);
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * <p>The request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The name of the exception.</p>
   * @public
   */
  amznErrorType?: string | undefined;
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
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * <p>The request references a resource that does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The name of the exception.</p>
   * @public
   */
  amznErrorType?: string | undefined;
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
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * <p>The value of a parameter in the request caused an error.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource can have no more than 50 tags.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
  }
}
