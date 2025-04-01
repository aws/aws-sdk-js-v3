// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KinesisVideoWebRTCStorageServiceException as __BaseException } from "./KinesisVideoWebRTCStorageServiceException";

/**
 * <p>You do not have required permissions to perform this operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
 * <p>
 *       Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.
 *     </p>
 * @public
 */
export class ClientLimitExceededException extends __BaseException {
  readonly name: "ClientLimitExceededException" = "ClientLimitExceededException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The value for this input parameter is invalid.</p>
 * @public
 */
export class InvalidArgumentException extends __BaseException {
  readonly name: "InvalidArgumentException" = "InvalidArgumentException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface JoinStorageSessionInput {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the signaling channel.
   *     </p>
   * @public
   */
  channelArn: string | undefined;
}

/**
 * <p>The specified resource is not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
 * @public
 */
export interface JoinStorageSessionAsViewerInput {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the signaling channel.
   *     </p>
   * @public
   */
  channelArn: string | undefined;

  /**
   * <p>
   *       The unique identifier for the sender client.
   *     </p>
   * @public
   */
  clientId: string | undefined;
}
