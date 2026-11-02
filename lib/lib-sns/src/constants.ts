import type { SNSMessageType } from "./types";

/**
 * Trusted SNS certificate host, e.g. sns.us-east-1.amazonaws.com.
 */
export const DEFAULT_HOST_PATTERN = /^sns\.[a-zA-Z0-9\-]{3,}\.amazonaws\.com(\.cn)?$/;

export const DEFAULT_ENCODING: BufferEncoding = "utf8";

export const SUPPORTED_MESSAGE_TYPES: SNSMessageType[] = [
  "Notification",
  "SubscriptionConfirmation",
  "UnsubscribeConfirmation",
];

export const REQUIRED_KEYS = [
  "Message",
  "MessageId",
  "Timestamp",
  "TopicArn",
  "Type",
  "Signature",
  "SigningCertURL",
  "SignatureVersion",
] as const;

/**
 * Keys included in the canonical string-to-sign, per message type and in the
 * order SNS signs them. Ordering is required to match signed bytes.
 */
export const SIGNABLE_KEYS_BY_TYPE: Record<SNSMessageType, string[]> = {
  Notification: ["Message", "MessageId", "Subject", "Timestamp", "TopicArn", "Type"],
  SubscriptionConfirmation: ["Message", "MessageId", "SubscribeURL", "Timestamp", "Token", "TopicArn", "Type"],
  UnsubscribeConfirmation: ["Message", "MessageId", "SubscribeURL", "Timestamp", "Token", "TopicArn", "Type"],
};

/**
 * Lambda delivers two URL fields with "Url" casing. Map them to the canonical
 * uppercase "URL" names the rest of the validator expects.
 */
export const LAMBDA_MESSAGE_KEYS: Record<string, string> = {
  SigningCertUrl: "SigningCertURL",
  UnsubscribeUrl: "UnsubscribeURL",
};
