// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ARCRegionSwitchServiceException as __BaseException } from "./ARCRegionSwitchServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p> <p>HTTP Status Code: 403</p>
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
 * <p>The specified resource was not found.</p> <p>HTTP Status Code: 404</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The request processing has failed because of an unknown error, exception, or failure.</p> <p>HTTP Status Code: 500</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
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
  }
}

/**
 * <p>The operation failed because the current state of the resource doesn't allow the operation to proceed.</p> <p>HTTP Status Code: 400</p>
 * @public
 */
export class IllegalStateException extends __BaseException {
  readonly name = "IllegalStateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalStateException, __BaseException>) {
    super({
      name: "IllegalStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalStateException.prototype);
  }
}

/**
 * <p>The request processing has an invalid argument.</p>
 * @public
 */
export class IllegalArgumentException extends __BaseException {
  readonly name = "IllegalArgumentException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalArgumentException, __BaseException>) {
    super({
      name: "IllegalArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalArgumentException.prototype);
  }
}
