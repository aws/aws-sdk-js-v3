/**
 * <p>The message object that provides the message text and its type.</p>
 */
export interface _Message {
  /**
   * <p>The content type of the message string.</p>
   */
  contentType: "PlainText" | "SSML" | "CustomPayload" | string;

  /**
   * <p>The text of the message.</p>
   */
  content: string;

  /**
   * <p>Identifies the message group that the message belongs to. When a group is assigned to a message, Amazon Lex returns one message from each group in the response.</p>
   */
  groupNumber?: number;
}

export type _UnmarshalledMessage = _Message;
