// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KinesisVideoMediaServiceException as __BaseException } from "./KinesisVideoMediaServiceException";

/**
 * <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *       allowed client calls. Try making the call later.</p>
 * @public
 */
export class ClientLimitExceededException extends __BaseException {
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
 * <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *       allowed client connections.</p>
 * @public
 */
export class ConnectionLimitExceededException extends __BaseException {
  readonly name = "ConnectionLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConnectionLimitExceededException, __BaseException>) {
    super({
      name: "ConnectionLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConnectionLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The value for this input parameter is invalid.</p>
 * @public
 */
export class InvalidArgumentException extends __BaseException {
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
 * <p> Status Code: 400, Caller used wrong endpoint to write data to a stream. On receiving
 *       such an exception, the user must call <code>GetDataEndpoint</code> with
 *         <code>AccessMode</code> set to "READ" and use the endpoint Kinesis Video returns in the next
 *         <code>GetMedia</code> call. </p>
 * @public
 */
export class InvalidEndpointException extends __BaseException {
  readonly name = "InvalidEndpointException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEndpointException, __BaseException>) {
    super({
      name: "InvalidEndpointException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEndpointException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Status Code: 403, The caller is not authorized to perform an operation on the given
 *       stream, or the token has expired.</p>
 * @public
 */
export class NotAuthorizedException extends __BaseException {
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
 * <p>Status Code: 404, The stream with the given name does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
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
