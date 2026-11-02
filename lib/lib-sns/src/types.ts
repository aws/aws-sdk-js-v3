/**
 * An inbound SNS message is an open JSON object. These fields are the ones the
 * validator reads. Unknown fields are preserved and ignored.
 * @public
 */
export interface SNSMessage {
  Type: string;
  MessageId?: string;
  Token?: string;
  TopicArn?: string;
  Subject?: string | null;
  Message?: string;
  SubscribeURL?: string;
  Timestamp?: string;
  SignatureVersion?: string;
  Signature?: string;
  SigningCertURL?: string;
  UnsubscribeURL?: string;
  // Lambda delivers these with lowercase "Url" casing.
  SigningCertUrl?: string;
  UnsubscribeUrl?: string;
  [key: string]: unknown;
}

/**
 * The three SNS message types a subscribed HTTP(S) endpoint can receive.
 * @public
 */
export type SNSMessageType = "Notification" | "SubscriptionConfirmation" | "UnsubscribeConfirmation";

/**
 * Options for {@link MessageValidator}.
 * @public
 */
export interface MessageValidatorOptions {
  /**
   * Validates that a message's certificate originates from a trusted domain.
   * @defaultValue /^sns\.[a-zA-Z0-9\-]{3,}\.amazonaws\.com(\.cn)?$/
   */
  hostPattern?: RegExp;

  /**
   * Encoding of the signed message fields.
   * @defaultValue "utf8"
   */
  encoding?: BufferEncoding;
}

/**
 * Node-style callback invoked once a message's signature is verified.
 * @public
 */
export type ValidationCallback = (error: Error | null, message?: SNSMessage) => void;
