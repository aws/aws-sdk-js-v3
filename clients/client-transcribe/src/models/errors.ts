// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { BadRequestExceptionReason } from "./enums";
import { TranscribeServiceException as __BaseException } from "./TranscribeServiceException";

/**
 * <p>Your request didn't pass one or more validation tests. This can occur when a
 *             parameter has an invalid value, when you combine parameters in a way that isn't
 *             supported, when the entity you're trying to delete doesn't exist, or if it's in a
 *             non-terminal state (such as <code>IN PROGRESS</code>). See the exception message field
 *             for more information.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.transcribe#BadRequestException";
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>A code that identifies why the audio in your request was rejected. Currently,
   *                 <code>TranscribeAudio</code> returns this field, and only for problems with your
   *             audio. It isn't returned for other validation errors.</p>
   *          <p>Possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>audioTooLong</code>: The audio is longer than the maximum duration of 1
   *                     hour.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>audioTooShort</code>: The audio is shorter than 0.5 seconds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>audioFileTooLarge</code>: The audio is larger than the maximum
   *                     size.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unsupportedAudioFormat</code>: The media format isn't supported.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unsupportedChannelCount</code>: You enabled
   *                         <code>ChannelIdentification</code> and the audio has more than two
   *                     channels.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>invalidAudio</code>: Amazon Transcribe couldn't decode the audio.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mediaDownloadFailed</code>: Amazon Transcribe couldn't download the audio at
   *                     your <code>MediaFileUri</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Reason?: BadRequestExceptionReason | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
  }
}

/**
 * <p>A resource already exists with this name. Resource names must be unique within an
 *                 Amazon Web Services account.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.transcribe#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.transcribe#InternalFailureException";
  readonly name = "InternalFailureException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.transcribe#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>We can't find the requested resource. Check that the specified name is correct and try
 *             your request again.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.transcribe#NotFoundException";
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.Message = opts.Message;
  }
}
