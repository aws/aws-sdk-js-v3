/**
 * <p>An object that represents the content of the email, and optionally a character set specification.</p>
 */
export interface _Content {
  /**
   * <p>The content of the message itself.</p>
   */
  Data: string;

  /**
   * <p>The character set for the content. Because of the constraints of the SMTP protocol, Amazon Pinpoint uses 7-bit ASCII by default. If the text includes characters outside of the ASCII range, you have to specify a character set. For example, you could specify <code>UTF-8</code>, <code>ISO-8859-1</code>, or <code>Shift_JIS</code>.</p>
   */
  Charset?: string;
}

export type _UnmarshalledContent = _Content;
