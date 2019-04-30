import {
  _MessageAttributeValue,
  _UnmarshalledMessageAttributeValue
} from "./_MessageAttributeValue";

/**
 * <p>An Amazon SQS message.</p>
 */
export interface _Message {
  /**
   * <p>A unique identifier for the message. A <code>MessageId</code>is considered unique across all AWS accounts for an extended period of time.</p>
   */
  MessageId?: string;

  /**
   * <p>An identifier associated with the act of receiving the message. A new receipt handle is returned every time you receive a message. When deleting a message, you provide the last received receipt handle to delete the message.</p>
   */
  ReceiptHandle?: string;

  /**
   * <p>An MD5 digest of the non-URL-encoded message body string.</p>
   */
  MD5OfBody?: string;

  /**
   * <p>The message's contents (not URL-encoded).</p>
   */
  Body?: string;

  /**
   * <p>A map of the attributes requested in <code> <a>ReceiveMessage</a> </code> to their respective values. Supported attributes:</p> <ul> <li> <p> <code>ApproximateReceiveCount</code> </p> </li> <li> <p> <code>ApproximateFirstReceiveTimestamp</code> </p> </li> <li> <p> <code>MessageDeduplicationId</code> </p> </li> <li> <p> <code>MessageGroupId</code> </p> </li> <li> <p> <code>SenderId</code> </p> </li> <li> <p> <code>SentTimestamp</code> </p> </li> <li> <p> <code>SequenceNumber</code> </p> </li> </ul> <p> <code>ApproximateFirstReceiveTimestamp</code> and <code>SentTimestamp</code> are each returned as an integer representing the <a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a> in milliseconds.</p>
   */
  Attributes?:
    | {
        [key in
          | "SenderId"
          | "SentTimestamp"
          | "ApproximateReceiveCount"
          | "ApproximateFirstReceiveTimestamp"
          | "SequenceNumber"
          | "MessageDeduplicationId"
          | "MessageGroupId"
          | string]: string
      }
    | Iterable<
        [

            | "SenderId"
            | "SentTimestamp"
            | "ApproximateReceiveCount"
            | "ApproximateFirstReceiveTimestamp"
            | "SequenceNumber"
            | "MessageDeduplicationId"
            | "MessageGroupId"
            | string,
          string
        ]
      >;

  /**
   * <p>An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
   */
  MD5OfMessageAttributes?: string;

  /**
   * <p>Each message attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>. For more information, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-attributes.html">Amazon SQS Message Attributes</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
   */
  MessageAttributes?:
    | { [key: string]: _MessageAttributeValue }
    | Iterable<[string, _MessageAttributeValue]>;
}

export interface _UnmarshalledMessage extends _Message {
  /**
   * <p>A map of the attributes requested in <code> <a>ReceiveMessage</a> </code> to their respective values. Supported attributes:</p> <ul> <li> <p> <code>ApproximateReceiveCount</code> </p> </li> <li> <p> <code>ApproximateFirstReceiveTimestamp</code> </p> </li> <li> <p> <code>MessageDeduplicationId</code> </p> </li> <li> <p> <code>MessageGroupId</code> </p> </li> <li> <p> <code>SenderId</code> </p> </li> <li> <p> <code>SentTimestamp</code> </p> </li> <li> <p> <code>SequenceNumber</code> </p> </li> </ul> <p> <code>ApproximateFirstReceiveTimestamp</code> and <code>SentTimestamp</code> are each returned as an integer representing the <a href="http://en.wikipedia.org/wiki/Unix_time">epoch time</a> in milliseconds.</p>
   */
  Attributes?: {
    [key in
      | "SenderId"
      | "SentTimestamp"
      | "ApproximateReceiveCount"
      | "ApproximateFirstReceiveTimestamp"
      | "SequenceNumber"
      | "MessageDeduplicationId"
      | "MessageGroupId"
      | string]: string
  };

  /**
   * <p>Each message attribute consists of a <code>Name</code>, <code>Type</code>, and <code>Value</code>. For more information, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-attributes.html">Amazon SQS Message Attributes</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
   */
  MessageAttributes?: { [key: string]: _UnmarshalledMessageAttributeValue };
}
