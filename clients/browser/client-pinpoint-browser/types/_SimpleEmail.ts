import {
  _SimpleEmailPart,
  _UnmarshalledSimpleEmailPart
} from "./_SimpleEmailPart";

/**
 * <p>Specifies the content of an email message, composed of a subject, a text part, and an HTML part.</p>
 */
export interface _SimpleEmail {
  /**
   * <p>The body of the email message, in HTML format. We recommend using an HTML part for email clients that support HTML. You can include links, formatted text, and more in an HTML message.</p>
   */
  HtmlPart?: _SimpleEmailPart;

  /**
   * <p>The subject line, or title, of the email.</p>
   */
  Subject?: _SimpleEmailPart;

  /**
   * <p>The body of the email message, in text format. We recommend using a text part for email clients that don't support HTML and clients that are connected to high-latency networks, such as mobile devices.</p>
   */
  TextPart?: _SimpleEmailPart;
}

export interface _UnmarshalledSimpleEmail extends _SimpleEmail {
  /**
   * <p>The body of the email message, in HTML format. We recommend using an HTML part for email clients that support HTML. You can include links, formatted text, and more in an HTML message.</p>
   */
  HtmlPart?: _UnmarshalledSimpleEmailPart;

  /**
   * <p>The subject line, or title, of the email.</p>
   */
  Subject?: _UnmarshalledSimpleEmailPart;

  /**
   * <p>The body of the email message, in text format. We recommend using a text part for email clients that don't support HTML and clients that are connected to high-latency networks, such as mobile devices.</p>
   */
  TextPart?: _UnmarshalledSimpleEmailPart;
}
