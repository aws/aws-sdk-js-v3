import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateStreamInput shape
 */
export interface UpdateStreamInput {
  /**
   * <p>The name of the stream whose metadata you want to update.</p> <p>The stream name is an identifier for the stream, and must be unique for each account and region.</p>
   */
  StreamName?: string;

  /**
   * <p>The ARN of the stream whose metadata you want to update.</p>
   */
  StreamARN?: string;

  /**
   * <p>The version of the stream whose metadata you want to update.</p>
   */
  CurrentVersion: string;

  /**
   * <p>The name of the device that is writing to the stream. </p> <note> <p> In the current implementation, Kinesis Video Streams does not use this name. </p> </note>
   */
  DeviceName?: string;

  /**
   * <p>The stream's media type. Use <code>MediaType</code> to specify the type of content that the stream contains to the consumers of the stream. For more information about media types, see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a>. If you choose to specify the <code>MediaType</code>, see <a href="https://tools.ietf.org/html/rfc6838#section-4.2">Naming Requirements</a>.</p> <p>To play video on the console, you must specify the correct video type. For example, if the video in the stream is H.264, specify <code>video/h264</code> as the <code>MediaType</code>.</p>
   */
  MediaType?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
