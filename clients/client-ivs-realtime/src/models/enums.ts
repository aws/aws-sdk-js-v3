// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const IngestProtocol = {
  RTMP: "RTMP",
  RTMPS: "RTMPS",
} as const;
/**
 * @public
 */
export type IngestProtocol = (typeof IngestProtocol)[keyof typeof IngestProtocol];

/**
 * @public
 * @enum
 */
export const IngestConfigurationState = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type IngestConfigurationState = (typeof IngestConfigurationState)[keyof typeof IngestConfigurationState];

/**
 * @public
 * @enum
 */
export const ParticipantTokenCapability = {
  PUBLISH: "PUBLISH",
  SUBSCRIBE: "SUBSCRIBE",
} as const;
/**
 * @public
 */
export type ParticipantTokenCapability = (typeof ParticipantTokenCapability)[keyof typeof ParticipantTokenCapability];

/**
 * @public
 * @enum
 */
export const ParticipantRecordingMediaType = {
  AUDIO_ONLY: "AUDIO_ONLY",
  AUDIO_VIDEO: "AUDIO_VIDEO",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type ParticipantRecordingMediaType =
  (typeof ParticipantRecordingMediaType)[keyof typeof ParticipantRecordingMediaType];

/**
 * @public
 * @enum
 */
export const ThumbnailRecordingMode = {
  DISABLED: "DISABLED",
  INTERVAL: "INTERVAL",
} as const;
/**
 * @public
 */
export type ThumbnailRecordingMode = (typeof ThumbnailRecordingMode)[keyof typeof ThumbnailRecordingMode];

/**
 * @public
 * @enum
 */
export const ThumbnailStorageType = {
  LATEST: "LATEST",
  SEQUENTIAL: "SEQUENTIAL",
} as const;
/**
 * @public
 */
export type ThumbnailStorageType = (typeof ThumbnailStorageType)[keyof typeof ThumbnailStorageType];

/**
 * @public
 * @enum
 */
export const RecordingConfigurationFormat = {
  HLS: "HLS",
} as const;
/**
 * @public
 */
export type RecordingConfigurationFormat =
  (typeof RecordingConfigurationFormat)[keyof typeof RecordingConfigurationFormat];

/**
 * @public
 * @enum
 */
export const DestinationState = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  RECONNECTING: "RECONNECTING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type DestinationState = (typeof DestinationState)[keyof typeof DestinationState];

/**
 * @public
 * @enum
 */
export const VideoAspectRatio = {
  AUTO: "AUTO",
  PORTRAIT: "PORTRAIT",
  SQUARE: "SQUARE",
  VIDEO: "VIDEO",
} as const;
/**
 * @public
 */
export type VideoAspectRatio = (typeof VideoAspectRatio)[keyof typeof VideoAspectRatio];

/**
 * @public
 * @enum
 */
export const VideoFillMode = {
  CONTAIN: "CONTAIN",
  COVER: "COVER",
  FILL: "FILL",
} as const;
/**
 * @public
 */
export type VideoFillMode = (typeof VideoFillMode)[keyof typeof VideoFillMode];

/**
 * @public
 * @enum
 */
export const PipBehavior = {
  DYNAMIC: "DYNAMIC",
  STATIC: "STATIC",
} as const;
/**
 * @public
 */
export type PipBehavior = (typeof PipBehavior)[keyof typeof PipBehavior];

/**
 * @public
 * @enum
 */
export const PipPosition = {
  BOTTOM_LEFT: "BOTTOM_LEFT",
  BOTTOM_RIGHT: "BOTTOM_RIGHT",
  TOP_LEFT: "TOP_LEFT",
  TOP_RIGHT: "TOP_RIGHT",
} as const;
/**
 * @public
 */
export type PipPosition = (typeof PipPosition)[keyof typeof PipPosition];

/**
 * @public
 * @enum
 */
export const CompositionState = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type CompositionState = (typeof CompositionState)[keyof typeof CompositionState];

/**
 * @public
 * @enum
 */
export const ParticipantProtocol = {
  RTMP: "RTMP",
  RTMPS: "RTMPS",
  UNKNOWN: "UNKNOWN",
  WHIP: "WHIP",
} as const;
/**
 * @public
 */
export type ParticipantProtocol = (typeof ParticipantProtocol)[keyof typeof ParticipantProtocol];

/**
 * @public
 * @enum
 */
export const ParticipantRecordingState = {
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
  FAILED: "FAILED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type ParticipantRecordingState = (typeof ParticipantRecordingState)[keyof typeof ParticipantRecordingState];

/**
 * @public
 * @enum
 */
export const ReplicationState = {
  ACTIVE: "ACTIVE",
  STOPPED: "STOPPED",
} as const;
/**
 * @public
 */
export type ReplicationState = (typeof ReplicationState)[keyof typeof ReplicationState];

/**
 * @public
 * @enum
 */
export const ReplicationType = {
  NONE: "NONE",
  REPLICA: "REPLICA",
  SOURCE: "SOURCE",
} as const;
/**
 * @public
 */
export type ReplicationType = (typeof ReplicationType)[keyof typeof ReplicationType];

/**
 * @public
 * @enum
 */
export const ParticipantState = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
} as const;
/**
 * @public
 */
export type ParticipantState = (typeof ParticipantState)[keyof typeof ParticipantState];

/**
 * @public
 * @enum
 */
export const EventErrorCode = {
  BITRATE_EXCEEDED: "BITRATE_EXCEEDED",
  B_FRAME_PRESENT: "B_FRAME_PRESENT",
  INSUFFICIENT_CAPABILITIES: "INSUFFICIENT_CAPABILITIES",
  INTERNAL_SERVER_EXCEPTION: "INTERNAL_SERVER_EXCEPTION",
  INVALID_AUDIO_CODEC: "INVALID_AUDIO_CODEC",
  INVALID_INPUT: "INVALID_INPUT",
  INVALID_PROTOCOL: "INVALID_PROTOCOL",
  INVALID_STREAM_KEY: "INVALID_STREAM_KEY",
  INVALID_VIDEO_CODEC: "INVALID_VIDEO_CODEC",
  PUBLISHER_NOT_FOUND: "PUBLISHER_NOT_FOUND",
  QUOTA_EXCEEDED: "QUOTA_EXCEEDED",
  RESOLUTION_EXCEEDED: "RESOLUTION_EXCEEDED",
  REUSE_OF_STREAM_KEY: "REUSE_OF_STREAM_KEY",
  STREAM_DURATION_EXCEEDED: "STREAM_DURATION_EXCEEDED",
} as const;
/**
 * @public
 */
export type EventErrorCode = (typeof EventErrorCode)[keyof typeof EventErrorCode];

/**
 * @public
 * @enum
 */
export const EventName = {
  JOINED: "JOINED",
  JOIN_ERROR: "JOIN_ERROR",
  LEFT: "LEFT",
  PUBLISH_ERROR: "PUBLISH_ERROR",
  PUBLISH_STARTED: "PUBLISH_STARTED",
  PUBLISH_STOPPED: "PUBLISH_STOPPED",
  REPLICATION_STARTED: "REPLICATION_STARTED",
  REPLICATION_STOPPED: "REPLICATION_STOPPED",
  SUBSCRIBE_ERROR: "SUBSCRIBE_ERROR",
  SUBSCRIBE_STARTED: "SUBSCRIBE_STARTED",
  SUBSCRIBE_STOPPED: "SUBSCRIBE_STOPPED",
} as const;
/**
 * @public
 */
export type EventName = (typeof EventName)[keyof typeof EventName];

/**
 * @public
 * @enum
 */
export const ParticipantRecordingFilterByRecordingState = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type ParticipantRecordingFilterByRecordingState =
  (typeof ParticipantRecordingFilterByRecordingState)[keyof typeof ParticipantRecordingFilterByRecordingState];
