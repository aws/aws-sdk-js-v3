import { _Encryption, _UnmarshalledEncryption } from "./_Encryption";

/**
 * <p>Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.</p>
 */
export interface _JobWatermark {
  /**
   * <p>The ID of the watermark settings that Elastic Transcoder uses to add watermarks to the video during transcoding. The settings are in the preset specified by Preset for the current output. In that preset, the value of Watermarks Id tells Elastic Transcoder which settings to use.</p>
   */
  PresetWatermarkId?: string;

  /**
   * <p> The name of the .png or .jpg file that you want to use for the watermark. To determine which Amazon S3 bucket contains the specified file, Elastic Transcoder checks the pipeline specified by <code>Pipeline</code>; the <code>Input Bucket</code> object in that pipeline identifies the bucket.</p> <p> If the file name includes a prefix, for example, <b>logos/128x64.png</b>, include the prefix in the key. If the file isn't in the specified bucket, Elastic Transcoder returns an error. </p>
   */
  InputKey?: string;

  /**
   * <p>The encryption settings, if any, that you want Elastic Transcoder to apply to your watermarks.</p>
   */
  Encryption?: _Encryption;
}

export interface _UnmarshalledJobWatermark extends _JobWatermark {
  /**
   * <p>The encryption settings, if any, that you want Elastic Transcoder to apply to your watermarks.</p>
   */
  Encryption?: _UnmarshalledEncryption;
}
