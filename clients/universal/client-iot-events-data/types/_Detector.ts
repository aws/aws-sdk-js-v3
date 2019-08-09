import { _DetectorState, _UnmarshalledDetectorState } from "./_DetectorState";

/**
 * <p>Information about the detector (instance).</p>
 */
export interface _Detector {
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
  state?: _DetectorState;

  /**
   * <p>The time the detector (instance) was created.</p>
   */
  creationTime?: Date | string | number;

  /**
   * <p>The time the detector (instance) was last updated.</p>
   */
  lastUpdateTime?: Date | string | number;
}

export interface _UnmarshalledDetector extends _Detector {
  /**
   * <p>The current state of the detector (instance).</p>
   */
  state?: _UnmarshalledDetectorState;

  /**
   * <p>The time the detector (instance) was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time the detector (instance) was last updated.</p>
   */
  lastUpdateTime?: Date;
}
