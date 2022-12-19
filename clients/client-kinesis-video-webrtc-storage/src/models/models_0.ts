// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { KinesisVideoWebRTCStorageServiceException as __BaseException } from "./KinesisVideoWebRTCStorageServiceException";

/**
 * <ol>
 *             <li>
 *                <p>You do not have required permissions to perform this operation</p>
 *             </li>
 *          </ol>
 *          <ol>
 *             <li>
 *                <p>The <code>AccessDeniedException</code> can be thrown for operation access as well as tokens or resource access</p>
 *             </li>
 *          </ol>
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
 * <ol>
 *             <li>
 *                <p>The value for this input parameter is invalid.</p>
 *             </li>
 *          </ol>
 *          <ol>
 *             <li>
 *                <p>Additional details may <b>not</b>be returned.</p>
 *             </li>
 *          </ol>
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

export interface JoinStorageSessionInput {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the signaling channel.
   *     </p>
   */
  channelArn: string | undefined;
}

/**
 * <ol>
 *             <li>
 *                <p>The specified resource is not found</p>
 *             </li>
 *          </ol>
 *          <ol>
 *             <li>
 *                <p>You have not specified a channel in this API call.</p>
 *             </li>
 *          </ol>
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

export interface JoinStorageSessionAsViewerInput {
  /**
   * <p>
   *       The Amazon Resource Name (ARN) of the signaling channel.
   *     </p>
   */
  channelArn: string | undefined;

  /**
   * <p>
   *       The unique identifier for the sender client.
   *     </p>
   */
  clientId: string | undefined;
}

/**
 * @internal
 */
export const JoinStorageSessionInputFilterSensitiveLog = (obj: JoinStorageSessionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JoinStorageSessionAsViewerInputFilterSensitiveLog = (obj: JoinStorageSessionAsViewerInput): any => ({
  ...obj,
});
