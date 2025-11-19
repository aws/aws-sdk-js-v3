// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AgentStatus = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type AgentStatus = (typeof AgentStatus)[keyof typeof AgentStatus];

/**
 * @public
 * @enum
 */
export const AngleUnits = {
  DEGREE_ANGLE: "DEGREE_ANGLE",
  RADIAN: "RADIAN",
} as const;
/**
 * @public
 */
export type AngleUnits = (typeof AngleUnits)[keyof typeof AngleUnits];

/**
 * @public
 * @enum
 */
export const BandwidthUnits = {
  GHZ: "GHz",
  KHZ: "kHz",
  MHZ: "MHz",
} as const;
/**
 * @public
 */
export type BandwidthUnits = (typeof BandwidthUnits)[keyof typeof BandwidthUnits];

/**
 * @public
 * @enum
 */
export const FrequencyUnits = {
  GHZ: "GHz",
  KHZ: "kHz",
  MHZ: "MHz",
} as const;
/**
 * @public
 */
export type FrequencyUnits = (typeof FrequencyUnits)[keyof typeof FrequencyUnits];

/**
 * @public
 * @enum
 */
export const Polarization = {
  LEFT_HAND: "LEFT_HAND",
  NONE: "NONE",
  RIGHT_HAND: "RIGHT_HAND",
} as const;
/**
 * @public
 */
export type Polarization = (typeof Polarization)[keyof typeof Polarization];

/**
 * @public
 * @enum
 */
export const EirpUnits = {
  DBW: "dBW",
} as const;
/**
 * @public
 */
export type EirpUnits = (typeof EirpUnits)[keyof typeof EirpUnits];

/**
 * @public
 * @enum
 */
export const AuditResults = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;
/**
 * @public
 */
export type AuditResults = (typeof AuditResults)[keyof typeof AuditResults];

/**
 * @public
 * @enum
 */
export const CapabilityHealth = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;
/**
 * @public
 */
export type CapabilityHealth = (typeof CapabilityHealth)[keyof typeof CapabilityHealth];

/**
 * @public
 * @enum
 */
export const CapabilityHealthReason = {
  DATAPLANE_FAILURE: "DATAPLANE_FAILURE",
  HEALTHY: "HEALTHY",
  INITIALIZING_DATAPLANE: "INITIALIZING_DATAPLANE",
  INVALID_IP_OWNERSHIP: "INVALID_IP_OWNERSHIP",
  NOT_AUTHORIZED_TO_CREATE_SLR: "NOT_AUTHORIZED_TO_CREATE_SLR",
  NO_REGISTERED_AGENT: "NO_REGISTERED_AGENT",
  UNVERIFIED_IP_OWNERSHIP: "UNVERIFIED_IP_OWNERSHIP",
} as const;
/**
 * @public
 */
export type CapabilityHealthReason = (typeof CapabilityHealthReason)[keyof typeof CapabilityHealthReason];

/**
 * @public
 * @enum
 */
export const ConfigCapabilityType = {
  ANTENNA_DOWNLINK: "antenna-downlink",
  ANTENNA_DOWNLINK_DEMOD_DECODE: "antenna-downlink-demod-decode",
  ANTENNA_UPLINK: "antenna-uplink",
  DATAFLOW_ENDPOINT: "dataflow-endpoint",
  S3_RECORDING: "s3-recording",
  TRACKING: "tracking",
  UPLINK_ECHO: "uplink-echo",
} as const;
/**
 * @public
 */
export type ConfigCapabilityType = (typeof ConfigCapabilityType)[keyof typeof ConfigCapabilityType];

/**
 * @public
 * @enum
 */
export const Criticality = {
  PREFERRED: "PREFERRED",
  REMOVED: "REMOVED",
  REQUIRED: "REQUIRED",
} as const;
/**
 * @public
 */
export type Criticality = (typeof Criticality)[keyof typeof Criticality];

/**
 * @public
 * @enum
 */
export const EndpointStatus = {
  created: "created",
  creating: "creating",
  deleted: "deleted",
  deleting: "deleting",
  failed: "failed",
} as const;
/**
 * @public
 */
export type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];

/**
 * @public
 * @enum
 */
export const ContactStatus = {
  AVAILABLE: "AVAILABLE",
  AWS_CANCELLED: "AWS_CANCELLED",
  AWS_FAILED: "AWS_FAILED",
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  FAILED_TO_SCHEDULE: "FAILED_TO_SCHEDULE",
  PASS: "PASS",
  POSTPASS: "POSTPASS",
  PREPASS: "PREPASS",
  SCHEDULED: "SCHEDULED",
  SCHEDULING: "SCHEDULING",
} as const;
/**
 * @public
 */
export type ContactStatus = (typeof ContactStatus)[keyof typeof ContactStatus];

/**
 * @public
 * @enum
 */
export const EphemerisType = {
  AZ_EL: "AZ_EL",
  OEM: "OEM",
  SERVICE_MANAGED: "SERVICE_MANAGED",
  TLE: "TLE",
} as const;
/**
 * @public
 */
export type EphemerisType = (typeof EphemerisType)[keyof typeof EphemerisType];

/**
 * @public
 * @enum
 */
export const EphemerisErrorCode = {
  AZ_EL_SEGMENTS_OUT_OF_ORDER: "AZ_EL_SEGMENTS_OUT_OF_ORDER",
  AZ_EL_SEGMENT_END_TIME_BEFORE_START_TIME: "AZ_EL_SEGMENT_END_TIME_BEFORE_START_TIME",
  AZ_EL_SEGMENT_END_TIME_INVALID: "AZ_EL_SEGMENT_END_TIME_INVALID",
  AZ_EL_SEGMENT_END_TIME_TOO_LATE: "AZ_EL_SEGMENT_END_TIME_TOO_LATE",
  AZ_EL_SEGMENT_LIST_MISSING: "AZ_EL_SEGMENT_LIST_MISSING",
  AZ_EL_SEGMENT_REFERENCE_EPOCH_INVALID: "AZ_EL_SEGMENT_REFERENCE_EPOCH_INVALID",
  AZ_EL_SEGMENT_START_TIME_INVALID: "AZ_EL_SEGMENT_START_TIME_INVALID",
  AZ_EL_SEGMENT_TIMES_OVERLAP: "AZ_EL_SEGMENT_TIMES_OVERLAP",
  AZ_EL_SEGMENT_VALID_TIME_RANGE_INVALID: "AZ_EL_SEGMENT_VALID_TIME_RANGE_INVALID",
  AZ_EL_TOTAL_DURATION_EXCEEDED: "AZ_EL_TOTAL_DURATION_EXCEEDED",
  CENTER_BODY_UNSUPPORTED: "CENTER_BODY_UNSUPPORTED",
  CREATION_DATE_MISSING: "CREATION_DATE_MISSING",
  END_TIME_IN_PAST: "END_TIME_IN_PAST",
  EXPIRATION_TIME_TOO_EARLY: "EXPIRATION_TIME_TOO_EARLY",
  FILE_FORMAT_INVALID: "FILE_FORMAT_INVALID",
  INSUFFICIENT_KMS_PERMISSIONS: "INSUFFICIENT_KMS_PERMISSIONS",
  INSUFFICIENT_TIME_AZ_EL: "INSUFFICIENT_TIME_AZ_EL",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INTERPOLATION_DEGREE_INVALID: "INTERPOLATION_DEGREE_INVALID",
  INTERPOLATION_MISSING: "INTERPOLATION_MISSING",
  MEAN_MOTION_INVALID: "MEAN_MOTION_INVALID",
  MISMATCHED_SATCAT_ID: "MISMATCHED_SATCAT_ID",
  OBJECT_ID_MISSING: "OBJECT_ID_MISSING",
  OBJECT_NAME_MISSING: "OBJECT_NAME_MISSING",
  OEM_VERSION_UNSUPPORTED: "OEM_VERSION_UNSUPPORTED",
  ORIGINATOR_MISSING: "ORIGINATOR_MISSING",
  REF_FRAME_EPOCH_UNSUPPORTED: "REF_FRAME_EPOCH_UNSUPPORTED",
  REF_FRAME_UNSUPPORTED: "REF_FRAME_UNSUPPORTED",
  START_TIME_IN_FUTURE: "START_TIME_IN_FUTURE",
  START_TIME_METADATA_TOO_EARLY: "START_TIME_METADATA_TOO_EARLY",
  STOP_TIME_METADATA_TOO_LATE: "STOP_TIME_METADATA_TOO_LATE",
  TIME_AZ_EL_ANGLE_UNITS_INVALID: "TIME_AZ_EL_ANGLE_UNITS_INVALID",
  TIME_AZ_EL_AZ_DEGREE_RANGE_INVALID: "TIME_AZ_EL_AZ_DEGREE_RANGE_INVALID",
  TIME_AZ_EL_AZ_RADIAN_RANGE_INVALID: "TIME_AZ_EL_AZ_RADIAN_RANGE_INVALID",
  TIME_AZ_EL_EL_DEGREE_RANGE_INVALID: "TIME_AZ_EL_EL_DEGREE_RANGE_INVALID",
  TIME_AZ_EL_EL_RADIAN_RANGE_INVALID: "TIME_AZ_EL_EL_RADIAN_RANGE_INVALID",
  TIME_AZ_EL_ITEMS_OUT_OF_ORDER: "TIME_AZ_EL_ITEMS_OUT_OF_ORDER",
  TIME_SYSTEM_UNSUPPORTED: "TIME_SYSTEM_UNSUPPORTED",
} as const;
/**
 * @public
 */
export type EphemerisErrorCode = (typeof EphemerisErrorCode)[keyof typeof EphemerisErrorCode];

/**
 * @public
 * @enum
 */
export const EphemerisInvalidReason = {
  /**
   * Provided KMS key is invalid
   */
  KMS_KEY_INVALID: "KMS_KEY_INVALID",
  /**
   * Provided spacecraft identifiers such as spacecraft NORAD Id are invalid
   */
  METADATA_INVALID: "METADATA_INVALID",
  /**
   * Start, end, or expiration time(s) are invalid for the provided ephemeris
   */
  TIME_RANGE_INVALID: "TIME_RANGE_INVALID",
  /**
   * Provided ephemeris defines invalid spacecraft trajectory
   */
  TRAJECTORY_INVALID: "TRAJECTORY_INVALID",
  /**
   * Internal Service Error occurred while processing ephemeris
   */
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;
/**
 * @public
 */
export type EphemerisInvalidReason = (typeof EphemerisInvalidReason)[keyof typeof EphemerisInvalidReason];

/**
 * @public
 * @enum
 */
export const EphemerisStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ERROR: "ERROR",
  EXPIRED: "EXPIRED",
  INVALID: "INVALID",
  VALIDATING: "VALIDATING",
} as const;
/**
 * @public
 */
export type EphemerisStatus = (typeof EphemerisStatus)[keyof typeof EphemerisStatus];

/**
 * @public
 * @enum
 */
export const EphemerisSource = {
  CUSTOMER_PROVIDED: "CUSTOMER_PROVIDED",
  SPACE_TRACK: "SPACE_TRACK",
} as const;
/**
 * @public
 */
export type EphemerisSource = (typeof EphemerisSource)[keyof typeof EphemerisSource];
