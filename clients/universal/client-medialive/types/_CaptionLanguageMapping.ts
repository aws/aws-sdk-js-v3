/**
 * Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description.
 */
export interface _CaptionLanguageMapping {
  /**
   * The closed caption channel being described by this CaptionLanguageMapping.  Each channel mapping must have a unique channel number (maximum of 4)
   */
  CaptionChannel: number;

  /**
   * Three character ISO 639-2 language code (see http://www.loc.gov/standards/iso639-2)
   */
  LanguageCode: string;

  /**
   * Textual description of language
   */
  LanguageDescription: string;
}

export type _UnmarshalledCaptionLanguageMapping = _CaptionLanguageMapping;
