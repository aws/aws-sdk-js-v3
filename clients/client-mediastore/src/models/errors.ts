// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { MediaStoreServiceException as __BaseException } from "./MediaStoreServiceException";

/**
 * The container that you specified in the request already exists or is being updated.
 *
 * @public
 */
export class ContainerInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mediastore#ContainerInUseException";
  readonly name = "ContainerInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContainerInUseException, __BaseException>) {
    super({
      name: "ContainerInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContainerInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The container that you specified in the request does not exist.
 *
 * @public
 */
export class ContainerNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mediastore#ContainerNotFoundException";
  readonly name = "ContainerNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContainerNotFoundException, __BaseException>) {
    super({
      name: "ContainerNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContainerNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The CORS policy that you specified in the request does not exist.
 *
 * @public
 */
export class CorsPolicyNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mediastore#CorsPolicyNotFoundException";
  readonly name = "CorsPolicyNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CorsPolicyNotFoundException, __BaseException>) {
    super({
      name: "CorsPolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CorsPolicyNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The service is temporarily unavailable.
 *
 * @public
 */
export class InternalServerError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mediastore#InternalServerError";
  readonly name = "InternalServerError" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * A service limit has been exceeded.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mediastore#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
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
    this.Message = opts.Message;
  }
}

/**
 * The policy that you specified in the request does not exist.
 *
 * @public
 */
export class PolicyNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.mediastore#PolicyNotFoundException";
  readonly name = "PolicyNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyNotFoundException, __BaseException>) {
    super({
      name: "PolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyNotFoundException.prototype);
    this.Message = opts.Message;
  }
}
