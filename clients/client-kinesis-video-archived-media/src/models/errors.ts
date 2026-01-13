// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import {
  KinesisVideoArchivedMediaServiceException as __BaseException,
} from "./KinesisVideoArchivedMediaServiceException";

/**
 * <p>Kinesis Video Streams has throttled the request because you have exceeded a limit. Try making the call later. For information about limits, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p>
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
 * <p>A specified parameter exceeds its restrictions, is not supported, or can't be
 *             used.</p>
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
 * <p>The codec private data in at least one of the tracks of the video stream is not valid
 *             for this operation.</p>
 * @public
 */
export class InvalidCodecPrivateDataException extends __BaseException {
  readonly name = "InvalidCodecPrivateDataException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCodecPrivateDataException, __BaseException>) {
    super({
      name: "InvalidCodecPrivateDataException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCodecPrivateDataException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more frames in the requested clip could not be parsed based on the specified
 *             codec.</p>
 * @public
 */
export class InvalidMediaFrameException extends __BaseException {
  readonly name = "InvalidMediaFrameException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidMediaFrameException, __BaseException>) {
    super({
      name: "InvalidMediaFrameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidMediaFrameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No codec private data was found in at least one of tracks of the video stream.</p>
 * @public
 */
export class MissingCodecPrivateDataException extends __BaseException {
  readonly name = "MissingCodecPrivateDataException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingCodecPrivateDataException, __BaseException>) {
    super({
      name: "MissingCodecPrivateDataException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingCodecPrivateDataException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>
 *             <code>GetImages</code> was requested for a stream that does not retain data (that is, has
 *             a <code>DataRetentionInHours</code> of 0). </p>
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

/**
 * <p>Status Code: 403, The caller is not authorized to perform an operation on the given
 *             stream, or the token has expired.</p>
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
 * <p>
 *             <code>GetImages</code> will throw this error when Kinesis Video Streams can't find the stream
 *             that you specified.</p>
 *          <p>
 *             <code>GetHLSStreamingSessionURL</code> and <code>GetDASHStreamingSessionURL</code> throw
 *             this error if a session with a <code>PlaybackMode</code> of <code>ON_DEMAND</code> or
 *                 <code>LIVE_REPLAY</code>is requested for a stream that has no fragments within the
 *             requested time range, or if a session with a <code>PlaybackMode</code> of
 *                 <code>LIVE</code> is requested for a stream that has no fragments within the last 30
 *             seconds.</p>
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
 * <p>The type of the media (for example, h.264 or h.265 video or ACC or G.711 audio) could
 *             not be determined from the codec IDs of the tracks in the first fragment for a playback
 *             session. The codec ID for track 1 should be <code>V_MPEG/ISO/AVC</code> and, optionally,
 *             the codec ID for track 2 should be <code>A_AAC</code>.</p>
 * @public
 */
export class UnsupportedStreamMediaTypeException extends __BaseException {
  readonly name = "UnsupportedStreamMediaTypeException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedStreamMediaTypeException, __BaseException>) {
    super({
      name: "UnsupportedStreamMediaTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedStreamMediaTypeException.prototype);
    this.Message = opts.Message;
  }
}
