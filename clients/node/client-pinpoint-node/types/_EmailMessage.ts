import { _RawEmail, _UnmarshalledRawEmail } from "./_RawEmail";
import { _SimpleEmail, _UnmarshalledSimpleEmail } from "./_SimpleEmail";

/**
 * <p>Specifies the default settings and content for a one-time email message that's sent directly to an endpoint.</p>
 */
export interface _EmailMessage {
  /**
   * <p>The body of the email message.</p>
   */
  Body?: string;

  /**
   * <p>The email address to forward bounces and complaints to, if feedback forwarding is enabled.</p>
   */
  FeedbackForwardingAddress?: string;

  /**
   * <p>The verified email address to send the email message from. The default value is the FromAddress specified for the email channel.</p>
   */
  FromAddress?: string;

  /**
   * <p>The email message, represented as a raw MIME message.</p>
   */
  RawEmail?: _RawEmail;

  /**
   * <p>The reply-to email address(es) for the email message. If a recipient replies to the email, each reply-to address receives the reply.</p>
   */
  ReplyToAddresses?: Array<string> | Iterable<string>;

  /**
   * <p>The email message, composed of a subject, a text part, and an HTML part.</p>
   */
  SimpleEmail?: _SimpleEmail;

  /**
   * <p>The default message variables to use in the email message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;
}

export interface _UnmarshalledEmailMessage extends _EmailMessage {
  /**
   * <p>The email message, represented as a raw MIME message.</p>
   */
  RawEmail?: _UnmarshalledRawEmail;

  /**
   * <p>The reply-to email address(es) for the email message. If a recipient replies to the email, each reply-to address receives the reply.</p>
   */
  ReplyToAddresses?: Array<string>;

  /**
   * <p>The email message, composed of a subject, a text part, and an HTML part.</p>
   */
  SimpleEmail?: _UnmarshalledSimpleEmail;

  /**
   * <p>The default message variables to use in the email message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?: { [key: string]: Array<string> };
}
