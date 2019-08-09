import { _EncryptionKey, _UnmarshalledEncryptionKey } from "./_EncryptionKey";

/**
 * <p>The properties of the custom terminology.</p>
 */
export interface _TerminologyProperties {
  /**
   * <p>The name of the custom terminology.</p>
   */
  Name?: string;

  /**
   * <p>The description of the custom terminology properties.</p>
   */
  Description?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the custom terminology. </p>
   */
  Arn?: string;

  /**
   * <p>The language code for the source text of the translation request for which the custom terminology is being used.</p>
   */
  SourceLanguageCode?: string;

  /**
   * <p>The language codes for the target languages available with the custom terminology file. All possible target languages are returned in array.</p>
   */
  TargetLanguageCodes?: Array<string> | Iterable<string>;

  /**
   * <p>The encryption key for the custom terminology.</p>
   */
  EncryptionKey?: _EncryptionKey;

  /**
   * <p>The size of the file used when importing a custom terminology.</p>
   */
  SizeBytes?: number;

  /**
   * <p>The number of terms included in the custom terminology.</p>
   */
  TermCount?: number;

  /**
   * <p>The time at which the custom terminology was created, based on the timestamp.</p>
   */
  CreatedAt?: Date | string | number;

  /**
   * <p>The time at which the custom terminology was last update, based on the timestamp.</p>
   */
  LastUpdatedAt?: Date | string | number;
}

export interface _UnmarshalledTerminologyProperties
  extends _TerminologyProperties {
  /**
   * <p>The language codes for the target languages available with the custom terminology file. All possible target languages are returned in array.</p>
   */
  TargetLanguageCodes?: Array<string>;

  /**
   * <p>The encryption key for the custom terminology.</p>
   */
  EncryptionKey?: _UnmarshalledEncryptionKey;

  /**
   * <p>The time at which the custom terminology was created, based on the timestamp.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The time at which the custom terminology was last update, based on the timestamp.</p>
   */
  LastUpdatedAt?: Date;
}
