import { _CaptionSource, _UnmarshalledCaptionSource } from "./_CaptionSource";
import { _CaptionFormat, _UnmarshalledCaptionFormat } from "./_CaptionFormat";

/**
 * <p>The captions to be created, if any.</p>
 */
export interface _Captions {
  /**
   * <p>A policy that determines how Elastic Transcoder handles the existence of multiple captions.</p> <ul> <li> <p> <b>MergeOverride:</b> Elastic Transcoder transcodes both embedded and sidecar captions into outputs. If captions for a language are embedded in the input file and also appear in a sidecar file, Elastic Transcoder uses the sidecar captions and ignores the embedded captions for that language.</p> </li> <li> <p> <b>MergeRetain:</b> Elastic Transcoder transcodes both embedded and sidecar captions into outputs. If captions for a language are embedded in the input file and also appear in a sidecar file, Elastic Transcoder uses the embedded captions and ignores the sidecar captions for that language. If <code>CaptionSources</code> is empty, Elastic Transcoder omits all sidecar captions from the output files.</p> </li> <li> <p> <b>Override:</b> Elastic Transcoder transcodes only the sidecar captions that you specify in <code>CaptionSources</code>.</p> </li> </ul> <p> <code>MergePolicy</code> cannot be null.</p>
   */
  MergePolicy?: string;

  /**
   * <p>Source files for the input sidecar captions used during the transcoding process. To omit all sidecar captions, leave <code>CaptionSources</code> blank.</p>
   */
  CaptionSources?: Array<_CaptionSource> | Iterable<_CaptionSource>;

  /**
   * <p>The array of file formats for the output captions. If you leave this value blank, Elastic Transcoder returns an error.</p>
   */
  CaptionFormats?: Array<_CaptionFormat> | Iterable<_CaptionFormat>;
}

export interface _UnmarshalledCaptions extends _Captions {
  /**
   * <p>Source files for the input sidecar captions used during the transcoding process. To omit all sidecar captions, leave <code>CaptionSources</code> blank.</p>
   */
  CaptionSources?: Array<_UnmarshalledCaptionSource>;

  /**
   * <p>The array of file formats for the output captions. If you leave this value blank, Elastic Transcoder returns an error.</p>
   */
  CaptionFormats?: Array<_UnmarshalledCaptionFormat>;
}
