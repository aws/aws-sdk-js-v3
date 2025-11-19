// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ConnectionType = {
  CONNECTION_CREDENTIALS: "CONNECTION_CREDENTIALS",
  WEBRTC_CONNECTION: "WEBRTC_CONNECTION",
  WEBSOCKET: "WEBSOCKET",
} as const;
/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * @public
 * @enum
 */
export const MeetingFeatureStatus = {
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;
/**
 * @public
 */
export type MeetingFeatureStatus = (typeof MeetingFeatureStatus)[keyof typeof MeetingFeatureStatus];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  CONTACT: "CONTACT",
  CONTACT_FLOW: "CONTACT_FLOW",
  HIERARCHY_GROUP: "HIERARCHY_GROUP",
  HIERARCHY_LEVEL: "HIERARCHY_LEVEL",
  INSTANCE: "INSTANCE",
  PARTICIPANT: "PARTICIPANT",
  PHONE_NUMBER: "PHONE_NUMBER",
  USER: "USER",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ScanDirection = {
  BACKWARD: "BACKWARD",
  FORWARD: "FORWARD",
} as const;
/**
 * @public
 */
export type ScanDirection = (typeof ScanDirection)[keyof typeof ScanDirection];

/**
 * @public
 * @enum
 */
export const SortKey = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortKey = (typeof SortKey)[keyof typeof SortKey];

/**
 * @public
 * @enum
 */
export const ArtifactStatus = {
  APPROVED: "APPROVED",
  IN_PROGRESS: "IN_PROGRESS",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type ArtifactStatus = (typeof ArtifactStatus)[keyof typeof ArtifactStatus];

/**
 * @public
 * @enum
 */
export const ParticipantRole = {
  AGENT: "AGENT",
  CUSTOMER: "CUSTOMER",
  CUSTOM_BOT: "CUSTOM_BOT",
  SUPERVISOR: "SUPERVISOR",
  SYSTEM: "SYSTEM",
} as const;
/**
 * @public
 */
export type ParticipantRole = (typeof ParticipantRole)[keyof typeof ParticipantRole];

/**
 * @public
 * @enum
 */
export const ChatItemType = {
  ATTACHMENT: "ATTACHMENT",
  CHAT_ENDED: "CHAT_ENDED",
  CONNECTION_ACK: "CONNECTION_ACK",
  EVENT: "EVENT",
  MESSAGE: "MESSAGE",
  MESSAGE_DELIVERED: "MESSAGE_DELIVERED",
  MESSAGE_READ: "MESSAGE_READ",
  PARTICIPANT_JOINED: "PARTICIPANT_JOINED",
  PARTICIPANT_LEFT: "PARTICIPANT_LEFT",
  TRANSFER_FAILED: "TRANSFER_FAILED",
  TRANSFER_SUCCEEDED: "TRANSFER_SUCCEEDED",
  TYPING: "TYPING",
} as const;
/**
 * @public
 */
export type ChatItemType = (typeof ChatItemType)[keyof typeof ChatItemType];
