import { _RawEmail, _UnmarshalledRawEmail } from "./_RawEmail";
import { _SimpleEmail, _UnmarshalledSimpleEmail } from "./_SimpleEmail";

/**
 * Email Message.
 */
export interface _EmailMessage {
  /**
   * The body of the email message.
   */
  Body?: string;

  /**
   * The email address that bounces and complaints will be forwarded to when feedback forwarding is enabled.
   */
  FeedbackForwardingAddress?: string;

  /**
   * The email address used to send the email from. Defaults to use FromAddress specified in the Email Channel.
   */
  FromAddress?: string;

  /**
   * An email represented as a raw MIME message.
   */
  RawEmail?: _RawEmail;

  /**
   * The reply-to email address(es) for the email. If the recipient replies to the email, each reply-to address will receive the reply.
   */
  ReplyToAddresses?: Array<string> | Iterable<string>;

  /**
   * An email composed of a subject, a text part and a html part.
   */
  SimpleEmail?: _SimpleEmail;

  /**
   * Default message substitutions. Can be overridden by individual address substitutions.
   */
  Substitutions?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;
}

export interface _UnmarshalledEmailMessage extends _EmailMessage {
  /**
   * An email represented as a raw MIME message.
   */
  RawEmail?: _UnmarshalledRawEmail;

  /**
   * The reply-to email address(es) for the email. If the recipient replies to the email, each reply-to address will receive the reply.
   */
  ReplyToAddresses?: Array<string>;

  /**
   * An email composed of a subject, a text part and a html part.
   */
  SimpleEmail?: _UnmarshalledSimpleEmail;

  /**
   * Default message substitutions. Can be overridden by individual address substitutions.
   */
  Substitutions?: { [key: string]: Array<string> };
}
