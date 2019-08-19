/**
 * <p>The SSML message. For more information, see <a href="https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html">SSML Reference</a>.</p>
 */
export interface _Ssml {
  /**
   * <p>The locale of the SSML message. Currently, en-US is supported.</p>
   */
  Locale: "en-US" | string;

  /**
   * <p>The value of the SSML message in the correct SSML format. The audio tag is not supported.</p>
   */
  Value: string;
}

export type _UnmarshalledSsml = _Ssml;
