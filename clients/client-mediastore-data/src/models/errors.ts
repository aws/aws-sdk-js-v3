// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MediaStoreDataServiceException as __BaseException } from "./MediaStoreDataServiceException";

/**
 * <p>The specified container was not found for the specified account.</p>
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
 * <p>Could not perform an operation on an object that does not exist.</p>
 * @public
 */
export class ObjectNotFoundException extends __BaseException {
  readonly name = "ObjectNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ObjectNotFoundException, __BaseException>) {
    super({
      name: "ObjectNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ObjectNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested content range is not valid.</p>
 * @public
 */
export class RequestedRangeNotSatisfiableException extends __BaseException {
  readonly name = "RequestedRangeNotSatisfiableException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestedRangeNotSatisfiableException, __BaseException>) {
    super({
      name: "RequestedRangeNotSatisfiableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestedRangeNotSatisfiableException.prototype);
    this.Message = opts.Message;
  }
}
