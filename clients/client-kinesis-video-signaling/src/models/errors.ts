// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { KinesisVideoSignalingServiceException as __BaseException } from "./KinesisVideoSignalingServiceException";

/**
 * Your request was throttled because you have exceeded the limit of allowed client calls. Try making the call later.
 *
 * @public
 */
export class ClientLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideosignaling#ClientLimitExceededException";
  readonly name = "ClientLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClientLimitExceededException, __BaseException>) {
    super({
      name: "ClientLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClientLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The value for this input parameter is invalid.
 *
 * @public
 */
export class InvalidArgumentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideosignaling#InvalidArgumentException";
  readonly name = "InvalidArgumentException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>) {
    super({
      name: "InvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified client is invalid.
 *
 * @public
 */
export class InvalidClientException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideosignaling#InvalidClientException";
  readonly name = "InvalidClientException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClientException, __BaseException>) {
    super({
      name: "InvalidClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClientException.prototype);
  }
}

/**
 * The caller is not authorized to perform this operation.
 *
 * @public
 */
export class NotAuthorizedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideosignaling#NotAuthorizedException";
  readonly name = "NotAuthorizedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotAuthorizedException, __BaseException>) {
    super({
      name: "NotAuthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotAuthorizedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified resource is not found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideosignaling#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * If the client session is expired. Once the client is connected, the session is valid for 45 minutes. Client should reconnect to the channel to continue sending/receiving messages.
 *
 * @public
 */
export class SessionExpiredException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideosignaling#SessionExpiredException";
  readonly name = "SessionExpiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SessionExpiredException, __BaseException>) {
    super({
      name: "SessionExpiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SessionExpiredException.prototype);
  }
}
