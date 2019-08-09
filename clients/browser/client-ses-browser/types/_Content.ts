/**
 * <p>Represents textual data, plus an optional character set specification.</p> <p>By default, the text must be 7-bit ASCII, due to the constraints of the SMTP protocol. If the text must contain any other characters, then you must also specify a character set. Examples include UTF-8, ISO-8859-1, and Shift_JIS.</p>
 */
export interface _Content {
  /**
   * <p>The textual data of the content.</p>
   */
  Data: string;

  /**
   * <p>The character set of the content.</p>
   */
  Charset?: string;
}

export type _UnmarshalledContent = _Content;
