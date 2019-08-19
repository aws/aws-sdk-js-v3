/**
 * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, see the AWS Elemental MediaConvert User Guide.
 */
export interface _AccelerationSettings {
  /**
   * Acceleration configuration for the job.
   */
  Mode: "DISABLED" | "ENABLED" | string;
}

export type _UnmarshalledAccelerationSettings = _AccelerationSettings;
