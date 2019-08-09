import { _Encryption, _UnmarshalledEncryption } from "./_Encryption";

/**
 * <p>The file to be used as album art. There can be multiple artworks associated with an audio file, to a maximum of 20.</p> <p>To remove artwork or leave the artwork empty, you can either set <code>Artwork</code> to null, or set the <code>Merge Policy</code> to "Replace" and use an empty <code>Artwork</code> array.</p> <p>To pass through existing artwork unchanged, set the <code>Merge Policy</code> to "Prepend", "Append", or "Fallback", and use an empty <code>Artwork</code> array.</p>
 */
export interface _Artwork {
  /**
   * <p>The name of the file to be used as album art. To determine which Amazon S3 bucket contains the specified file, Elastic Transcoder checks the pipeline specified by <code>PipelineId</code>; the <code>InputBucket</code> object in that pipeline identifies the bucket.</p> <p>If the file name includes a prefix, for example, <code>cooking/pie.jpg</code>, include the prefix in the key. If the file isn't in the specified bucket, Elastic Transcoder returns an error.</p>
   */
  InputKey?: string;

  /**
   * <p>The maximum width of the output album art in pixels. If you specify <code>auto</code>, Elastic Transcoder uses 600 as the default value. If you specify a numeric value, enter an even integer between 32 and 4096, inclusive.</p>
   */
  MaxWidth?: string;

  /**
   * <p>The maximum height of the output album art in pixels. If you specify <code>auto</code>, Elastic Transcoder uses 600 as the default value. If you specify a numeric value, enter an even integer between 32 and 3072, inclusive.</p>
   */
  MaxHeight?: string;

  /**
   * <p>Specify one of the following values to control scaling of the output album art:</p> <ul> <li> <p> <code>Fit:</code> Elastic Transcoder scales the output art so it matches the value that you specified in either <code>MaxWidth</code> or <code>MaxHeight</code> without exceeding the other value.</p> </li> <li> <p> <code>Fill:</code> Elastic Transcoder scales the output art so it matches the value that you specified in either <code>MaxWidth</code> or <code>MaxHeight</code> and matches or exceeds the other value. Elastic Transcoder centers the output art and then crops it in the dimension (if any) that exceeds the maximum value. </p> </li> <li> <p> <code>Stretch:</code> Elastic Transcoder stretches the output art to match the values that you specified for <code>MaxWidth</code> and <code>MaxHeight</code>. If the relative proportions of the input art and the output art are different, the output art will be distorted.</p> </li> <li> <p> <code>Keep:</code> Elastic Transcoder does not scale the output art. If either dimension of the input art exceeds the values that you specified for <code>MaxWidth</code> and <code>MaxHeight</code>, Elastic Transcoder crops the output art.</p> </li> <li> <p> <code>ShrinkToFit:</code> Elastic Transcoder scales the output art down so that its dimensions match the values that you specified for at least one of <code>MaxWidth</code> and <code>MaxHeight</code> without exceeding either value. If you specify this option, Elastic Transcoder does not scale the art up.</p> </li> <li> <p> <code>ShrinkToFill</code> Elastic Transcoder scales the output art down so that its dimensions match the values that you specified for at least one of <code>MaxWidth</code> and <code>MaxHeight</code> without dropping below either value. If you specify this option, Elastic Transcoder does not scale the art up.</p> </li> </ul>
   */
  SizingPolicy?: string;

  /**
   * <p>When you set <code>PaddingPolicy</code> to <code>Pad</code>, Elastic Transcoder may add white bars to the top and bottom and/or left and right sides of the output album art to make the total size of the output art match the values that you specified for <code>MaxWidth</code> and <code>MaxHeight</code>.</p>
   */
  PaddingPolicy?: string;

  /**
   * <p>The format of album art, if any. Valid formats are <code>.jpg</code> and <code>.png</code>.</p>
   */
  AlbumArtFormat?: string;

  /**
   * <p>The encryption settings, if any, that you want Elastic Transcoder to apply to your artwork.</p>
   */
  Encryption?: _Encryption;
}

export interface _UnmarshalledArtwork extends _Artwork {
  /**
   * <p>The encryption settings, if any, that you want Elastic Transcoder to apply to your artwork.</p>
   */
  Encryption?: _UnmarshalledEncryption;
}
