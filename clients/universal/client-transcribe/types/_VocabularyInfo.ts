/**
 * <p>Provides information about a custom vocabulary. </p>
 */
export interface _VocabularyInfo {
  /**
   * <p>The name of the vocabulary.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The language code of the vocabulary entries.</p>
   */
  LanguageCode?:
    | "en-US"
    | "es-US"
    | "en-AU"
    | "fr-CA"
    | "en-GB"
    | "de-DE"
    | "pt-BR"
    | "fr-FR"
    | "it-IT"
    | "ko-KR"
    | "es-ES"
    | "en-IN"
    | "hi-IN"
    | "ar-SA"
    | string;

  /**
   * <p>The date and time that the vocabulary was last modified.</p>
   */
  LastModifiedTime?: Date | string | number;

  /**
   * <p>The processing state of the vocabulary. If the state is <code>READY</code> you can use the vocabulary in a <code>StartTranscriptionJob</code> request.</p>
   */
  VocabularyState?: "PENDING" | "READY" | "FAILED" | string;
}

export interface _UnmarshalledVocabularyInfo extends _VocabularyInfo {
  /**
   * <p>The date and time that the vocabulary was last modified.</p>
   */
  LastModifiedTime?: Date;
}
