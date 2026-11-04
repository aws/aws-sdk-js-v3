// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { ARCRegionSwitchServiceException as __BaseException } from "./ARCRegionSwitchServiceException";

/**
 * You do not have sufficient access to perform this action.
 *
 * HTTP Status Code: 403
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.arcregionswitch#AccessDeniedException";
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
 * The specified resource was not found.
 *
 * HTTP Status Code: 404
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.arcregionswitch#ResourceNotFoundException";
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
 * The request processing has an invalid argument.
 *
 * @public
 */
export class IllegalArgumentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.arcregionswitch#IllegalArgumentException";
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

/**
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * HTTP Status Code: 500
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.arcregionswitch#InternalServerException";
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
 * The operation failed because the current state of the resource doesn't allow the operation to proceed.
 *
 * HTTP Status Code: 400
 *
 * @public
 */
export class IllegalStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.arcregionswitch#IllegalStateException";
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
 * The client token was already used with different request parameters. A client token must map to the same parameters for every request. To retry this operation, provide a new client token.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.arcregionswitch#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * The identifier of the resource involved in the client token conflict.
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The type of the resource involved in the client token conflict.
   *
   * @public
   */
  resourceType?: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}
