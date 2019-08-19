/**
 * <p>Specifies the default settings for a one-time SMS message that's sent directly to an endpoint.</p>
 */
export interface _SMSMessage {
  /**
   * <p>The body of the SMS message.</p>
   */
  Body?: string;

  /**
   * <p>The SMS program name that you provided to AWS Support when you requested your dedicated number.</p>
   */
  Keyword?: string;

  /**
   * <p>The SMS message type. Valid values are: TRANSACTIONAL, the message is critical or time-sensitive, such as a one-time password that supports a customer transaction; and, PROMOTIONAL, the message is not critical or time-sensitive, such as a marketing message.</p>
   */
  MessageType?: "TRANSACTIONAL" | "PROMOTIONAL" | string;

  /**
   * <p>The number that the SMS message originates from. This should be one of the dedicated long codes or short codes that you requested from AWS Support and is assigned to your AWS account. If you don't specify a long or short code, Amazon Pinpoint assigns a random long code to the SMS message.</p>
   */
  OriginationNumber?: string;

  /**
   * <p>The sender ID to display as the sender of the message on a recipient's device. Support for sender IDs varies by country or region.</p>
   */
  SenderId?: string;

  /**
   * <p>The message variables to use in the SMS message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;
}

export interface _UnmarshalledSMSMessage extends _SMSMessage {
  /**
   * <p>The message variables to use in the SMS message. You can override the default variables with individual address variables.</p>
   */
  Substitutions?: { [key: string]: Array<string> };
}
