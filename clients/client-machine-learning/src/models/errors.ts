// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MachineLearningServiceException as __BaseException } from "./MachineLearningServiceException";

/**
 * <p>An error on the server occurred when trying to process a request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  code?: number | undefined;
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
    this.code = opts.code;
  }
}

/**
 * <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name = "InvalidInputException" as const;
  readonly $fault = "client" as const;
  code?: number | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
    this.code = opts.code;
  }
}

/**
 * @public
 */
export class InvalidTagException extends __BaseException {
  readonly name = "InvalidTagException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagException, __BaseException>) {
    super({
      name: "InvalidTagException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagException.prototype);
  }
}

/**
 * <p>A specified resource cannot be located.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  code?: number | undefined;
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
    this.code = opts.code;
  }
}

/**
 * @public
 */
export class TagLimitExceededException extends __BaseException {
  readonly name = "TagLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagLimitExceededException, __BaseException>) {
    super({
      name: "TagLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagLimitExceededException.prototype);
  }
}

/**
 * <p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>
 * @public
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name = "IdempotentParameterMismatchException" as const;
  readonly $fault = "client" as const;
  code?: number | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatchException, __BaseException>) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
    this.code = opts.code;
  }
}

/**
 * <p>The subscriber exceeded the maximum number of operations. This exception can occur when listing objects such as <code>DataSource</code>.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  code?: number | undefined;
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
    this.code = opts.code;
  }
}

/**
 * <p>The exception is thrown when a predict request is made to an unmounted <code>MLModel</code>.</p>
 * @public
 */
export class PredictorNotMountedException extends __BaseException {
  readonly name = "PredictorNotMountedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PredictorNotMountedException, __BaseException>) {
    super({
      name: "PredictorNotMountedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PredictorNotMountedException.prototype);
  }
}
