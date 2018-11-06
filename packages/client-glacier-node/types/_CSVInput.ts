/**
 * <p>Contains information about the comma-separated value (CSV) file to select from.</p>
 */
export interface _CSVInput {
    /**
     * <p>Describes the first line of input. Valid values are <code>None</code>, <code>Ignore</code>, and <code>Use</code>.</p>
     */
    FileHeaderInfo?: 'USE'|'IGNORE'|'NONE'|string;

    /**
     * <p>A single character used to indicate that a row should be ignored when the character is present at the start of that row.</p>
     */
    Comments?: string;

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

export type _UnmarshalledCSVInput = _CSVInput;