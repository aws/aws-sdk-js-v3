import {
  _SimpleEmailPart,
  _UnmarshalledSimpleEmailPart
} from "./_SimpleEmailPart";

/**
 * An email composed of a subject, a text part and a html part.
 */
export interface _SimpleEmail {
  /**
   * The content of the message, in HTML format. Use this for email clients that can process HTML. You can include clickable links, formatted text, and much more in an HTML message.
   */
  HtmlPart?: _SimpleEmailPart;

  /**
   * The subject of the message: A short summary of the content, which will appear in the recipient's inbox.
   */
  Subject?: _SimpleEmailPart;

  /**
   * The content of the message, in text format. Use this for text-based email clients, or clients on high-latency networks (such as mobile devices).
   */
  TextPart?: _SimpleEmailPart;
}

export interface _UnmarshalledSimpleEmail extends _SimpleEmail {
  /**
   * The content of the message, in HTML format. Use this for email clients that can process HTML. You can include clickable links, formatted text, and much more in an HTML message.
   */
  HtmlPart?: _UnmarshalledSimpleEmailPart;

  /**
   * The subject of the message: A short summary of the content, which will appear in the recipient's inbox.
   */
  Subject?: _UnmarshalledSimpleEmailPart;

  /**
   * The content of the message, in text format. Use this for text-based email clients, or clients on high-latency networks (such as mobile devices).
   */
  TextPart?: _UnmarshalledSimpleEmailPart;
}
