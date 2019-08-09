import { _Content, _UnmarshalledContent } from "./_Content";
import { _Body, _UnmarshalledBody } from "./_Body";

/**
 * <p>Represents the email message that you're sending. The <code>Message</code> object consists of a subject line and a message body.</p>
 */
export interface _Message {
  /**
   * <p>The subject line of the email. The subject line can only contain 7-bit ASCII characters. However, you can specify non-ASCII characters in the subject line by using encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>.</p>
   */
  Subject: _Content;

  /**
   * <p>The body of the message. You can specify an HTML version of the message, a text-only version of the message, or both.</p>
   */
  Body: _Body;
}

export interface _UnmarshalledMessage extends _Message {
  /**
   * <p>The subject line of the email. The subject line can only contain 7-bit ASCII characters. However, you can specify non-ASCII characters in the subject line by using encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>.</p>
   */
  Subject: _UnmarshalledContent;

  /**
   * <p>The body of the message. You can specify an HTML version of the message, a text-only version of the message, or both.</p>
   */
  Body: _UnmarshalledBody;
}
