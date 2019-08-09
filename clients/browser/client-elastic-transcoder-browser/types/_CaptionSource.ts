import { _Encryption, _UnmarshalledEncryption } from "./_Encryption";

/**
 * <p>A source file for the input sidecar captions used during the transcoding process.</p>
 */
export interface _CaptionSource {
  /**
   * <p>The name of the sidecar caption file that you want Elastic Transcoder to include in the output file.</p>
   */
  Key?: string;

  /**
   * <p>A string that specifies the language of the caption. If you specified multiple inputs with captions, the caption language must match in order to be included in the output. Specify this as one of:</p> <ul> <li> <p>2-character ISO 639-1 code</p> </li> <li> <p>3-character ISO 639-2 code</p> </li> </ul> <p>For more information on ISO language codes and language names, see the List of ISO 639-1 codes.</p>
   */
  Language?: string;

  /**
   * <p>For clip generation or captions that do not start at the same time as the associated video file, the <code>TimeOffset</code> tells Elastic Transcoder how much of the video to encode before including captions.</p> <p>Specify the TimeOffset in the form [+-]SS.sss or [+-]HH:mm:SS.ss.</p>
   */
  TimeOffset?: string;

  /**
   * <p>The label of the caption shown in the player when choosing a language. We recommend that you put the caption language name here, in the language of the captions.</p>
   */
  Label?: string;

  /**
   * <p>The encryption settings, if any, that Elastic Transcoder needs to decyrpt your caption sources, or that you want Elastic Transcoder to apply to your caption sources.</p>
   */
  Encryption?: _Encryption;
}

export interface _UnmarshalledCaptionSource extends _CaptionSource {
  /**
   * <p>The encryption settings, if any, that Elastic Transcoder needs to decyrpt your caption sources, or that you want Elastic Transcoder to apply to your caption sources.</p>
   */
  Encryption?: _UnmarshalledEncryption;
}
