// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MediaStoreServiceException as __BaseException } from "./MediaStoreServiceException";

/**
 * <p>The container that you specified in the request already exists or is being
 *          updated.</p>
 * @public
 */
export class ContainerInUseException extends __BaseException {
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
 * <p>The container that you specified in the request does not exist.</p>
 * @public
 */
export class ContainerNotFoundException extends __BaseException {
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
 * <p>The CORS policy that you specified in the request does not exist.</p>
 * @public
 */
export class CorsPolicyNotFoundException extends __BaseException {
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
 * <p>The service is temporarily unavailable.</p>
 * @public
 */
export class InternalServerError extends __BaseException {
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
 * <p>A service limit has been exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
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
 * <p>The policy that you specified in the request does not exist.</p>
 * @public
 */
export class PolicyNotFoundException extends __BaseException {
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
