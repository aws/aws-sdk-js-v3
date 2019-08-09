/**
 * <p>Returns the code for the dominant language in the input text and the level of confidence that Amazon Comprehend has in the accuracy of the detection.</p>
 */
export interface _DominantLanguage {
  /**
   * <p>The RFC 5646 language code for the dominant language. For more information about RFC 5646, see <a href="https://tools.ietf.org/html/rfc5646">Tags for Identifying Languages</a> on the <i>IETF Tools</i> web site.</p>
   */
  LanguageCode?: string;

  /**
   * <p>The level of confidence that Amazon Comprehend has in the accuracy of the detection.</p>
   */
  Score?: number;
}

export type _UnmarshalledDominantLanguage = _DominantLanguage;
