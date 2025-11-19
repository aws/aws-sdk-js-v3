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
