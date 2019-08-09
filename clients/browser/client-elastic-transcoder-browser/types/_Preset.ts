import {
  _AudioParameters,
  _UnmarshalledAudioParameters
} from "./_AudioParameters";
import {
  _VideoParameters,
  _UnmarshalledVideoParameters
} from "./_VideoParameters";
import { _Thumbnails, _UnmarshalledThumbnails } from "./_Thumbnails";

/**
 * <p>Presets are templates that contain most of the settings for transcoding media files from one format to another. Elastic Transcoder includes some default presets for common formats, for example, several iPod and iPhone versions. You can also create your own presets for formats that aren't included among the default presets. You specify which preset you want to use when you create a job.</p>
 */
export interface _Preset {
  /**
   * <p>Identifier for the new preset. You use this value to get settings for the preset or to delete it.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the preset.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the preset.</p>
   */
  Name?: string;

  /**
   * <p>A description of the preset.</p>
   */
  Description?: string;

  /**
   * <p>The container type for the output file. Valid values include <code>flac</code>, <code>flv</code>, <code>fmp4</code>, <code>gif</code>, <code>mp3</code>, <code>mp4</code>, <code>mpg</code>, <code>mxf</code>, <code>oga</code>, <code>ogg</code>, <code>ts</code>, and <code>webm</code>.</p>
   */
  Container?: string;

  /**
   * <p>A section of the response body that provides information about the audio preset values.</p>
   */
  Audio?: _AudioParameters;

  /**
   * <p>A section of the response body that provides information about the video preset values.</p>
   */
  Video?: _VideoParameters;

  /**
   * <p>A section of the response body that provides information about the thumbnail preset values, if any.</p>
   */
  Thumbnails?: _Thumbnails;

  /**
   * <p>Whether the preset is a default preset provided by Elastic Transcoder (<code>System</code>) or a preset that you have defined (<code>Custom</code>).</p>
   */
  Type?: string;
}

export interface _UnmarshalledPreset extends _Preset {
  /**
   * <p>A section of the response body that provides information about the audio preset values.</p>
   */
  Audio?: _UnmarshalledAudioParameters;

  /**
   * <p>A section of the response body that provides information about the video preset values.</p>
   */
  Video?: _UnmarshalledVideoParameters;

  /**
   * <p>A section of the response body that provides information about the thumbnail preset values, if any.</p>
   */
  Thumbnails?: _UnmarshalledThumbnails;
}
