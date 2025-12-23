// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import {
  KinesisVideoWebRTCStorageServiceException as __BaseException,
} from "./KinesisVideoWebRTCStorageServiceException";

/**
 * <p>You do not have required permissions to perform this operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
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
 * <p>
 *       Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.
 *     </p>
 * @public
 */
export class ClientLimitExceededException extends __BaseException {
  readonly name = "ClientLimitExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "InvalidArgumentException" as const;
  readonly $fault = "client" as const;
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
 * <p>The specified resource is not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
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
