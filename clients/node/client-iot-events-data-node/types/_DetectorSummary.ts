import {
  _DetectorStateSummary,
  _UnmarshalledDetectorStateSummary
} from "./_DetectorStateSummary";

/**
 * <p>Information about the detector (instance).</p>
 */
export interface _DetectorSummary {
  /**
   * <p>The name of the detector model that created this detector (instance).</p>
   */
  detectorModelName?: string;

  /**
   * <p>The value of the key (identifying the device or system) that caused the creation of this detector (instance).</p>
   */
  keyValue?: string;

  /**
   * <p>The version of the detector model that created this detector (instance).</p>
   */
  detectorModelVersion?: string;

  /**
   * <p>The current state of the detector (instance).</p>
   */
  state?: _DetectorStateSummary;

  /**
   * <p>The time the detector (instance) was created.</p>
   */
  creationTime?: Date | string | number;

  /**
   * <p>The time the detector (instance) was last updated.</p>
   */
  lastUpdateTime?: Date | string | number;
}

export interface _UnmarshalledDetectorSummary extends _DetectorSummary {
  /**
   * <p>The current state of the detector (instance).</p>
   */
  state?: _UnmarshalledDetectorStateSummary;

  /**
   * <p>The time the detector (instance) was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time the detector (instance) was last updated.</p>
   */
  lastUpdateTime?: Date;
}
