// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KinesisVideoServiceException as __BaseException } from "./KinesisVideoServiceException";

/**
 * <p>You do not have required permissions to perform this operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * <p>You have reached the maximum limit of active signaling channels for this Amazon Web Services account
 *             in this region.</p>
 * @public
 */
export class AccountChannelLimitExceededException extends __BaseException {
  readonly name = "AccountChannelLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountChannelLimitExceededException, __BaseException>) {
    super({
      name: "AccountChannelLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountChannelLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The number of streams created for the account is too high.</p>
 * @public
 */
export class AccountStreamLimitExceededException extends __BaseException {
  readonly name = "AccountStreamLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountStreamLimitExceededException, __BaseException>) {
    super({
      name: "AccountStreamLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountStreamLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
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
 * <p>When the input <code>StreamARN</code> or <code>ChannelARN</code>
 *             in <code>CLOUD_STORAGE_MODE</code> is already mapped to a different
 *             Kinesis Video Stream resource, or if the provided input <code>StreamARN</code>
 *             or <code>ChannelARN</code> is not in Active status, try one of the following : </p>
 *          <ol>
 *             <li>
 *                <p>The <code>DescribeMediaStorageConfiguration</code> API to determine what the stream given channel is mapped to.
 *             </p>
 *             </li>
 *             <li>
 *                <p>The <code>DescribeMappedResourceConfiguration</code> API to determine the channel that the given stream is mapped to.
 *             </p>
 *             </li>
 *             <li>
 *                <p>The <code>DescribeStream</code> or <code>DescribeSignalingChannel</code> API to determine the status of the resource.
 *             </p>
 *             </li>
 *          </ol>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have exceeded the limit of tags that you can associate with the resource.
 *             A Kinesis video stream can support up to 50 tags. </p>
 * @public
 */
export class TagsPerResourceExceededLimitException extends __BaseException {
  readonly name = "TagsPerResourceExceededLimitException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagsPerResourceExceededLimitException, __BaseException>) {
    super({
      name: "TagsPerResourceExceededLimitException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagsPerResourceExceededLimitException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Not implemented.
 *             </p>
 * @public
 */
export class DeviceStreamLimitExceededException extends __BaseException {
  readonly name = "DeviceStreamLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeviceStreamLimitExceededException, __BaseException>) {
    super({
      name: "DeviceStreamLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeviceStreamLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Not implemented.</p>
 * @public
 */
export class InvalidDeviceException extends __BaseException {
  readonly name = "InvalidDeviceException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDeviceException, __BaseException>) {
    super({
      name: "InvalidDeviceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDeviceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
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

/**
 * <p>The Exception rendered when the Amazon Kinesis Video Stream can't find a stream's edge configuration
 *          that you specified. </p>
 * @public
 */
export class StreamEdgeConfigurationNotFoundException extends __BaseException {
  readonly name = "StreamEdgeConfigurationNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StreamEdgeConfigurationNotFoundException, __BaseException>) {
    super({
      name: "StreamEdgeConfigurationNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StreamEdgeConfigurationNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The stream version that you specified is not the latest version. To get the latest
 *             version, use the <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html">DescribeStream</a>
 *             API.</p>
 * @public
 */
export class VersionMismatchException extends __BaseException {
  readonly name = "VersionMismatchException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VersionMismatchException, __BaseException>) {
    super({
      name: "VersionMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VersionMismatchException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The caller is not authorized to perform this operation.</p>
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
 * <p>The format of the <code>StreamARN</code> is invalid.</p>
 * @public
 */
export class InvalidResourceFormatException extends __BaseException {
  readonly name = "InvalidResourceFormatException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceFormatException, __BaseException>) {
    super({
      name: "InvalidResourceFormatException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceFormatException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Stream data retention in hours is equal to zero.</p>
 * @public
 */
export class NoDataRetentionException extends __BaseException {
  readonly name = "NoDataRetentionException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoDataRetentionException, __BaseException>) {
    super({
      name: "NoDataRetentionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoDataRetentionException.prototype);
    this.Message = opts.Message;
  }
}
