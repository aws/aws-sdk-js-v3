// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const StreamGroupLocationStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
  REMOVING: "REMOVING",
} as const;
/**
 * @public
 */
export type StreamGroupLocationStatus = (typeof StreamGroupLocationStatus)[keyof typeof StreamGroupLocationStatus];

/**
 * @public
 * @enum
 */
export const ApplicationStatus = {
  DELETING: "DELETING",
  ERROR: "ERROR",
  INITIALIZED: "INITIALIZED",
  PROCESSING: "PROCESSING",
  READY: "READY",
} as const;
/**
 * @public
 */
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

/**
 * @public
 * @enum
 */
export const ApplicationStatusReason = {
  ACCESS_DENIED: "accessDenied",
  INTERNAL_ERROR: "internalError",
} as const;
/**
 * @public
 */
export type ApplicationStatusReason = (typeof ApplicationStatusReason)[keyof typeof ApplicationStatusReason];

/**
 * @public
 * @enum
 */
export const RuntimeEnvironmentType = {
  PROTON: "PROTON",
  UBUNTU: "UBUNTU",
  WINDOWS: "WINDOWS",
} as const;
/**
 * @public
 */
export type RuntimeEnvironmentType = (typeof RuntimeEnvironmentType)[keyof typeof RuntimeEnvironmentType];

/**
 * @public
 * @enum
 */
export const ReplicationStatusType = {
  COMPLETED: "COMPLETED",
  REPLICATING: "REPLICATING",
} as const;
/**
 * @public
 */
export type ReplicationStatusType = (typeof ReplicationStatusType)[keyof typeof ReplicationStatusType];

/**
 * @public
 * @enum
 */
export const StreamClass = {
  gen4n_high: "gen4n_high",
  gen4n_ultra: "gen4n_ultra",
  gen4n_win2022: "gen4n_win2022",
  gen5n_high: "gen5n_high",
  gen5n_ultra: "gen5n_ultra",
  gen5n_win2022: "gen5n_win2022",
} as const;
/**
 * @public
 */
export type StreamClass = (typeof StreamClass)[keyof typeof StreamClass];

/**
 * @public
 * @enum
 */
export const StreamGroupStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  ACTIVE_WITH_ERRORS: "ACTIVE_WITH_ERRORS",
  DELETING: "DELETING",
  ERROR: "ERROR",
  EXPIRED: "EXPIRED",
  UPDATING_LOCATIONS: "UPDATING_LOCATIONS",
} as const;
/**
 * @public
 */
export type StreamGroupStatus = (typeof StreamGroupStatus)[keyof typeof StreamGroupStatus];

/**
 * @public
 * @enum
 */
export const StreamGroupStatusReason = {
  INTERNAL_ERROR: "internalError",
  NO_AVAILABLE_INSTANCES: "noAvailableInstances",
} as const;
/**
 * @public
 */
export type StreamGroupStatusReason = (typeof StreamGroupStatusReason)[keyof typeof StreamGroupStatusReason];

/**
 * @public
 * @enum
 */
export const ExportFilesStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ExportFilesStatus = (typeof ExportFilesStatus)[keyof typeof ExportFilesStatus];

/**
 * @public
 * @enum
 */
export const Protocol = {
  WEBRTC: "WebRTC",
} as const;
/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * @enum
 */
export const StreamSessionStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  CONNECTED: "CONNECTED",
  ERROR: "ERROR",
  PENDING_CLIENT_RECONNECTION: "PENDING_CLIENT_RECONNECTION",
  RECONNECTING: "RECONNECTING",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
} as const;
/**
 * @public
 */
export type StreamSessionStatus = (typeof StreamSessionStatus)[keyof typeof StreamSessionStatus];

/**
 * @public
 * @enum
 */
export const StreamSessionStatusReason = {
  API_TERMINATED: "apiTerminated",
  APPLICATION_EXIT: "applicationExit",
  APP_LOG_S3_DESTINATION_ERROR: "applicationLogS3DestinationError",
  CONNECTION_TIMEOUT: "connectionTimeout",
  IDLE_TIMEOUT: "idleTimeout",
  INTERNAL_ERROR: "internalError",
  INVALID_SIGNAL_REQUEST: "invalidSignalRequest",
  MAX_SESSION_LENGTH_TIMEOUT: "maxSessionLengthTimeout",
  PLACEMENT_TIMEOUT: "placementTimeout",
  RECONNECTION_TIMEOUT: "reconnectionTimeout",
} as const;
/**
 * @public
 */
export type StreamSessionStatusReason = (typeof StreamSessionStatusReason)[keyof typeof StreamSessionStatusReason];
