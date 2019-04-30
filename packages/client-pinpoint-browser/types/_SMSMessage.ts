/**
 * SMS Message.
 */
export interface _SMSMessage {
  /**
   * The body of the SMS message.
   */
  Body?: string;

  /**
   * The SMS program name that you provided to AWS Support when you requested your dedicated number.
   */
  Keyword?: string;

  /**
   * Is this a transaction priority message or lower priority.
   */
  MessageType?: "TRANSACTIONAL" | "PROMOTIONAL" | string;

  /**
   * The phone number that the SMS message originates from. Specify one of the dedicated long codes or short codes that you requested from AWS Support and that is assigned to your account. If this attribute is not specified, Amazon Pinpoint randomly assigns a long code.
   */
  OriginationNumber?: string;

  /**
   * The sender ID that is shown as the message sender on the recipient's device. Support for sender IDs varies by country or region.
   */
  SenderId?: string;

  /**
   * Default message substitutions. Can be overridden by individual address substitutions.
   */
  Substitutions?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;
}

export interface _UnmarshalledSMSMessage extends _SMSMessage {
  /**
   * Default message substitutions. Can be overridden by individual address substitutions.
   */
  Substitutions?: { [key: string]: Array<string> };
}
