/**
 * <p>Specifies the subject or body of an email message, represented as textual email data and the applicable character set.</p>
 */
export interface _SimpleEmailPart {
  /**
   * <p>The applicable character set for the message content.</p>
   */
  Charset?: string;

  /**
   * <p>The textual data of the message content.</p>
   */
  Data?: string;
}

export type _UnmarshalledSimpleEmailPart = _SimpleEmailPart;
