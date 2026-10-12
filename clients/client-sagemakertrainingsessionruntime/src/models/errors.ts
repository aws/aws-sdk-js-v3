// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import {
  SageMakerTrainingSessionRuntimeServiceException as __BaseException,
} from "./SageMakerTrainingSessionRuntimeServiceException";

/**
 * <p>The training session is in a state that cannot accept new operations. The session must be in <code>Running</code> or <code>Blocked</code> state to accept requests.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakertrainingsessionruntime#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>An internal service error occurred. Retry the request using exponential backoff.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakertrainingsessionruntime#InternalServerException";
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
 * <p>The specified training session or operation does not exist, or the operation does not belong to the specified training session.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakertrainingsessionruntime#ResourceNotFoundException";
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
 * <p>The request was throttled. Retry the request after a brief wait using exponential backoff.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakertrainingsessionruntime#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>The request is not valid. Check the request syntax and parameters. Examples include invalid sequence numbers, malformed client tokens, missing required fields, or invalid operation configuration.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sagemakertrainingsessionruntime#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
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
  }
}
