// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { KinesisVideoServiceException as __BaseException } from "./KinesisVideoServiceException";

/**
 * You do not have required permissions to perform this operation.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideo#AccessDeniedException";
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
 * You have reached the maximum limit of active signaling channels for this Amazon Web Services account in this region.
 *
 * @public
 */
export class AccountChannelLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideo#AccountChannelLimitExceededException";
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
 * The number of streams created for the account is too high.
 *
 * @public
 */
export class AccountStreamLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideo#AccountStreamLimitExceededException";
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
 * Kinesis Video Streams has throttled the request because you have exceeded the limit of allowed client calls. Try making the call later.
 *
 * @public
 */
export class ClientLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideo#ClientLimitExceededException";
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
  public static readonly shapeId: string = "com.amazonaws.kinesisvideo#InvalidArgumentException";
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
 * When the input `StreamARN` or `ChannelARN` in `CLOUD_STORAGE_MODE` is already mapped to a different Kinesis Video Stream resource, or if the provided input `StreamARN` or `ChannelARN` is not in Active status, try one of the following :
 *
 * 1. The `DescribeMediaStorageConfiguration` API to determine what the stream given channel is mapped to.
 * 2. The `DescribeMappedResourceConfiguration` API to determine the channel that the given stream is mapped to.
 * 3. The `DescribeStream` or `DescribeSignalingChannel` API to determine the status of the resource.
 *
 * @public
 */
export class ResourceInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideo#ResourceInUseException";
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
 * You have exceeded the limit of tags that you can associate with the resource. A Kinesis video stream can support up to 50 tags.
 *
 * @public
 */
export class TagsPerResourceExceededLimitException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideo#TagsPerResourceExceededLimitException";
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
 * Not implemented.
 *
 * @public
 */
export class DeviceStreamLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideo#DeviceStreamLimitExceededException";
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
 * Not implemented.
 *
 * @public
 */
export class InvalidDeviceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideo#InvalidDeviceException";
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
 * Amazon Kinesis Video Streams can't find the stream that you specified.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideo#ResourceNotFoundException";
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
 * The Exception rendered when the Amazon Kinesis Video Stream can't find a stream's edge configuration that you specified.
 *
 * @public
 */
export class StreamEdgeConfigurationNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideo#StreamEdgeConfigurationNotFoundException";
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
 * The stream version that you specified is not the latest version. To get the latest version, use the [DescribeStream](https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_DescribeStream.html) API.
 *
 * @public
 */
export class VersionMismatchException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideo#VersionMismatchException";
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
 * The caller is not authorized to perform this operation.
 *
 * @public
 */
export class NotAuthorizedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideo#NotAuthorizedException";
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
 * The format of the `StreamARN` is invalid.
 *
 * @public
 */
export class InvalidResourceFormatException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideo#InvalidResourceFormatException";
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
 * The Stream data retention in hours is equal to zero.
 *
 * @public
 */
export class NoDataRetentionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesisvideo#NoDataRetentionException";
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
