// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DataPipelineServiceException as __BaseException } from "./DataPipelineServiceException";

/**
 * <p>An internal service error occurred.</p>
 * @public
 */
export class InternalServiceError extends __BaseException {
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
 * <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
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
 * <p>The specified pipeline has been deleted.</p>
 * @public
 */
export class PipelineDeletedException extends __BaseException {
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
 * <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
 * @public
 */
export class PipelineNotFoundException extends __BaseException {
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
 * <p>The specified task was not found. </p>
 * @public
 */
export class TaskNotFoundException extends __BaseException {
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
