// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RekognitionStreamingServiceException as __BaseException } from "./RekognitionStreamingServiceException";

/**
 * <p>Occurs when the client isn't authorized to perform the action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
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
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * <p>Unexpected error during processing of request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  Code?: string | undefined;
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
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * <p>Occurs when a request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
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
    this.Code = opts.Code;
  }
}

/**
 * <p>Service-wide throttling to recover from an operational event or service is not able to scale.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * <p>A request was denied due to request throttling. Occurs when too many requests were made by a user
 *        (exceeding their service quota), the service isn't able to scale, or a service-wide throttling was done to recover from an operational event.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
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
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by the service. Potential reasons
 *       inlcude: video quality or size is invalid, video container format not supported, video does
 *       not have enough information - no person detected in video, request couldn't be parsed or is
 *       invalid, session has expired or is invalid, S3 bucket is invalid/in another AWS region, KMS
 *       Key is invalid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
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
    this.Code = opts.Code;
  }
}

/**
 * <p>Occurs when the given <code>sessionId</code> is not found.</p>
 * @public
 */
export class SessionNotFoundException extends __BaseException {
  readonly name = "SessionNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SessionNotFoundException, __BaseException>) {
    super({
      name: "SessionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SessionNotFoundException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}
