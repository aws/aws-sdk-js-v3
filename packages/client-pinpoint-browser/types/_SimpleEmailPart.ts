/**
 * Textual email data, plus an optional character set specification.
 */
export interface _SimpleEmailPart {
    /**
     * The character set of the content.
     */
    Charset?: string;

    /**
     * The textual data of the content.
     */
    Data?: string;
}

export type _UnmarshalledSimpleEmailPart = _SimpleEmailPart;