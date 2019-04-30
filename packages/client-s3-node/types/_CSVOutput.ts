/**
 * <p>Describes how CSV-formatted results are formatted.</p>
 */
export interface _CSVOutput {
  /**
   * <p>Indicates whether or not all output fields should be quoted.</p>
   */
  QuoteFields?: "ALWAYS" | "ASNEEDED" | string;

  /**
   * <p>Single character used for escaping the quote character inside an already escaped value.</p>
   */
  QuoteEscapeCharacter?: string;

  /**
   * <p>Value used to separate individual records.</p>
   */
  RecordDelimiter?: string;

  /**
   * <p>Value used to separate individual fields in a record.</p>
   */
  FieldDelimiter?: string;

  /**
   * <p>Value used for escaping where the field delimiter is part of the value.</p>
   */
  QuoteCharacter?: string;
}

export type _UnmarshalledCSVOutput = _CSVOutput;
