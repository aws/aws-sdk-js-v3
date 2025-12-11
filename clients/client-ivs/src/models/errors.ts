// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IvsServiceException as __BaseException } from "./IvsServiceException";

/**
 * <p/>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>User does not have sufficient access to perform this action.</p>
   * @public
   */
  exceptionMessage?: string | undefined;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * <p/>
 * @public
 */
export class PendingVerification extends __BaseException {
  readonly name = "PendingVerification" as const;
  readonly $fault = "client" as const;
  /**
   * <p> Your account is pending verification. </p>
   * @public
   */
  exceptionMessage?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PendingVerification, __BaseException>) {
    super({
      name: "PendingVerification",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PendingVerification.prototype);
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * <p/>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Request was denied due to request throttling.</p>
   * @public
   */
  exceptionMessage?: string | undefined;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * <p/>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
   * @public
   */
  exceptionMessage?: string | undefined;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * <p/>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Request references a resource which does not exist.</p>
   * @public
   */
  exceptionMessage?: string | undefined;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * <p/>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Request would cause a service quota to be exceeded.</p>
   * @public
   */
  exceptionMessage?: string | undefined;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * <p/>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Updating or deleting a resource can cause an inconsistent state.</p>
   * @public
   */
  exceptionMessage?: string | undefined;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * <p/>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>Unexpected error during processing of request.</p>
   * @public
   */
  exceptionMessage?: string | undefined;
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
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * <p/>
 * @public
 */
export class ChannelNotBroadcasting extends __BaseException {
  readonly name = "ChannelNotBroadcasting" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The stream is offline for the given channel ARN.</p>
   * @public
   */
  exceptionMessage?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ChannelNotBroadcasting, __BaseException>) {
    super({
      name: "ChannelNotBroadcasting",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ChannelNotBroadcasting.prototype);
    this.exceptionMessage = opts.exceptionMessage;
  }
}

/**
 * <p/>
 * @public
 */
export class StreamUnavailable extends __BaseException {
  readonly name = "StreamUnavailable" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The stream is temporarily unavailable.</p>
   * @public
   */
  exceptionMessage?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StreamUnavailable, __BaseException>) {
    super({
      name: "StreamUnavailable",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, StreamUnavailable.prototype);
    this.exceptionMessage = opts.exceptionMessage;
  }
}
