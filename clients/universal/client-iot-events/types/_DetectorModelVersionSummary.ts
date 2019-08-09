/**
 * <p>Information about the detector model version.</p>
 */
export interface _DetectorModelVersionSummary {
  /**
   * <p>The name of the detector model.</p>
   */
  detectorModelName?: string;

  /**
   * <p>The ID of the detector model version.</p>
   */
  detectorModelVersion?: string;

  /**
   * <p>The ARN of the detector model version.</p>
   */
  detectorModelArn?: string;

  /**
   * <p>The ARN of the role that grants the detector model permission to perform its tasks.</p>
   */
  roleArn?: string;

  /**
   * <p>The time the detector model version was created.</p>
   */
  creationTime?: Date | string | number;

  /**
   * <p>The last time the detector model version was updated.</p>
   */
  lastUpdateTime?: Date | string | number;

  /**
   * <p>The status of the detector model version.</p>
   */
  status?:
    | "ACTIVE"
    | "ACTIVATING"
    | "INACTIVE"
    | "DEPRECATED"
    | "DRAFT"
    | "PAUSED"
    | "FAILED"
    | string;
}

export interface _UnmarshalledDetectorModelVersionSummary
  extends _DetectorModelVersionSummary {
  /**
   * <p>The time the detector model version was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The last time the detector model version was updated.</p>
   */
  lastUpdateTime?: Date;
}
