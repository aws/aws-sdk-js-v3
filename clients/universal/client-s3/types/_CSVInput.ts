/**
 * <p>Describes how a CSV-formatted input object is formatted.</p>
 */
export interface _CSVInput {
  /**
   * <p>Describes the first line of input. Valid values: None, Ignore, Use.</p>
   */
  FileHeaderInfo?: "USE" | "IGNORE" | "NONE" | string;

  /**
   * <p>The single character used to indicate a row should be ignored when present at the start of a row.</p>
   */
  Comments?: string;

  /**
   * <p>The single character used for escaping the quote character inside an already escaped value.</p>
   */
  QuoteEscapeCharacter?: string;

  /**
   * <p>The value used to separate individual records.</p>
   */
  RecordDelimiter?: string;

  /**
   * <p>The value used to separate individual fields in a record.</p>
   */
  FieldDelimiter?: string;

  /**
   * <p>Value used for escaping where the field delimiter is part of the value.</p>
   */
  QuoteCharacter?: string;

  /**
   * <p>Specifies that CSV field values may contain quoted record delimiters and such records should be allowed. Default value is FALSE. Setting this value to TRUE may lower performance.</p>
   */
  AllowQuotedRecordDelimiter?: boolean;
}

export type _UnmarshalledCSVInput = _CSVInput;
