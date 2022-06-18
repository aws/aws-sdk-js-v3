// smithy-typescript generated code
export enum DolbyVisionLevel6Mode {
  PASSTHROUGH = "PASSTHROUGH",
  RECALCULATE = "RECALCULATE",
  SPECIFY = "SPECIFY",
}

export enum DolbyVisionMapping {
  HDR10_1000 = "HDR10_1000",
  HDR10_NOMAP = "HDR10_NOMAP",
}

export enum DolbyVisionProfile {
  PROFILE_5 = "PROFILE_5",
  PROFILE_8_1 = "PROFILE_8_1",
}

export enum NoiseReducerFilter {
  BILATERAL = "BILATERAL",
  CONSERVE = "CONSERVE",
  GAUSSIAN = "GAUSSIAN",
  LANCZOS = "LANCZOS",
  MEAN = "MEAN",
  SHARPEN = "SHARPEN",
  SPATIAL = "SPATIAL",
  TEMPORAL = "TEMPORAL",
}

export enum NoiseFilterPostTemporalSharpening {
  AUTO = "AUTO",
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum NoiseFilterPostTemporalSharpeningStrength {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

export enum WatermarkingStrength {
  DEFAULT = "DEFAULT",
  LIGHTER = "LIGHTER",
  LIGHTEST = "LIGHTEST",
  STRONGER = "STRONGER",
  STRONGEST = "STRONGEST",
}

export enum TimecodeBurninPosition {
  BOTTOM_CENTER = "BOTTOM_CENTER",
  BOTTOM_LEFT = "BOTTOM_LEFT",
  BOTTOM_RIGHT = "BOTTOM_RIGHT",
  MIDDLE_CENTER = "MIDDLE_CENTER",
  MIDDLE_LEFT = "MIDDLE_LEFT",
  MIDDLE_RIGHT = "MIDDLE_RIGHT",
  TOP_CENTER = "TOP_CENTER",
  TOP_LEFT = "TOP_LEFT",
  TOP_RIGHT = "TOP_RIGHT",
}

export enum TimecodeSource {
  EMBEDDED = "EMBEDDED",
  SPECIFIEDSTART = "SPECIFIEDSTART",
  ZEROBASED = "ZEROBASED",
}

export enum SimulateReservedQueue {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum JobStatus {
  CANCELED = "CANCELED",
  COMPLETE = "COMPLETE",
  ERROR = "ERROR",
  PROGRESSING = "PROGRESSING",
  SUBMITTED = "SUBMITTED",
}

export enum StatusUpdateInterval {
  SECONDS_10 = "SECONDS_10",
  SECONDS_12 = "SECONDS_12",
  SECONDS_120 = "SECONDS_120",
  SECONDS_15 = "SECONDS_15",
  SECONDS_180 = "SECONDS_180",
  SECONDS_20 = "SECONDS_20",
  SECONDS_240 = "SECONDS_240",
  SECONDS_30 = "SECONDS_30",
  SECONDS_300 = "SECONDS_300",
  SECONDS_360 = "SECONDS_360",
  SECONDS_420 = "SECONDS_420",
  SECONDS_480 = "SECONDS_480",
  SECONDS_540 = "SECONDS_540",
  SECONDS_60 = "SECONDS_60",
  SECONDS_600 = "SECONDS_600",
}

export enum Type {
  CUSTOM = "CUSTOM",
  SYSTEM = "SYSTEM",
}

export enum PricingPlan {
  ON_DEMAND = "ON_DEMAND",
  RESERVED = "RESERVED",
}

export enum Commitment {
  ONE_YEAR = "ONE_YEAR",
}

export enum RenewalType {
  AUTO_RENEW = "AUTO_RENEW",
  EXPIRE = "EXPIRE",
}

export enum ReservationPlanStatus {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
}

export enum QueueStatus {
  ACTIVE = "ACTIVE",
  PAUSED = "PAUSED",
}

export enum DescribeEndpointsMode {
  DEFAULT = "DEFAULT",
  GET_ONLY = "GET_ONLY",
}

export enum InputPolicy {
  ALLOWED = "ALLOWED",
  DISALLOWED = "DISALLOWED",
}

export enum JobTemplateListBy {
  CREATION_DATE = "CREATION_DATE",
  NAME = "NAME",
  SYSTEM = "SYSTEM",
}

export enum Order {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export enum PresetListBy {
  CREATION_DATE = "CREATION_DATE",
  NAME = "NAME",
  SYSTEM = "SYSTEM",
}

export enum QueueListBy {
  CREATION_DATE = "CREATION_DATE",
  NAME = "NAME",
}
