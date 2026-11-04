// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { DataPipelineServiceException as __BaseException } from "./DataPipelineServiceException";

/**
 * An internal service error occurred.
 *
 * @public
 */
export class InternalServiceError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.datapipeline#InternalServiceError";
  readonly name = "InternalServiceError" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceError, __BaseException>) {
    super({
      name: "InternalServiceError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceError.prototype);
  }
}

/**
 * The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.
 *
 * @public
 */
export class InvalidRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.datapipeline#InvalidRequestException";
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * The specified pipeline has been deleted.
 *
 * @public
 */
export class PipelineDeletedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.datapipeline#PipelineDeletedException";
  readonly name = "PipelineDeletedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PipelineDeletedException, __BaseException>) {
    super({
      name: "PipelineDeletedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PipelineDeletedException.prototype);
  }
}

/**
 * The specified pipeline was not found. Verify that you used the correct user and account identifiers.
 *
 * @public
 */
export class PipelineNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.datapipeline#PipelineNotFoundException";
  readonly name = "PipelineNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PipelineNotFoundException, __BaseException>) {
    super({
      name: "PipelineNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PipelineNotFoundException.prototype);
  }
}

/**
 * The specified task was not found.
 *
 * @public
 */
export class TaskNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.datapipeline#TaskNotFoundException";
  readonly name = "TaskNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TaskNotFoundException, __BaseException>) {
    super({
      name: "TaskNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TaskNotFoundException.prototype);
  }
}
