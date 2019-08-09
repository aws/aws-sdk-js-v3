import { _VideoParameters } from "./_VideoParameters";
import { _AudioParameters } from "./_AudioParameters";
import { _Thumbnails } from "./_Thumbnails";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The <code>CreatePresetRequest</code> structure.</p>
 */
export interface CreatePresetInput {
  /**
   * <p>The name of the preset. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p>
   */
  Name: string;

  /**
   * <p>A description of the preset.</p>
   */
  Description?: string;

  /**
   * <p>The container type for the output file. Valid values include <code>flac</code>, <code>flv</code>, <code>fmp4</code>, <code>gif</code>, <code>mp3</code>, <code>mp4</code>, <code>mpg</code>, <code>mxf</code>, <code>oga</code>, <code>ogg</code>, <code>ts</code>, and <code>webm</code>.</p>
   */
  Container: string;

  /**
   * <p>A section of the request body that specifies the video parameters.</p>
   */
  Video?: _VideoParameters;

  /**
   * <p>A section of the request body that specifies the audio parameters.</p>
   */
  Audio?: _AudioParameters;

  /**
   * <p>A section of the request body that specifies the thumbnail parameters, if any.</p>
   */
  Thumbnails?: _Thumbnails;

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
