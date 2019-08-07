/**
 * <p>Contains information about the comma-separated value (CSV) file that the job results are stored in.</p>
 */
export interface _CSVOutput {
  /**
   * <p>A value that indicates whether all output fields should be contained within quotation marks.</p>
   */
  QuoteFields?: "ALWAYS" | "ASNEEDED" | string;

  /**
   * <p>A single character used for escaping the quotation-mark character inside an already escaped value.</p>
   */
  QuoteEscapeCharacter?: string;

  /**
   * <p>A value used to separate individual records from each other.</p>
   */
  RecordDelimiter?: string;

  /**
   * <p>A value used to separate individual fields from each other within a record.</p>
   */
  FieldDelimiter?: string;

  /**
   * <p>A value used as an escape character where the field delimiter is part of the value.</p>
   */
  QuoteCharacter?: string;
}

export type _UnmarshalledCSVOutput = _CSVOutput;
