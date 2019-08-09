import {
  _DetectorModelDefinition,
  _UnmarshalledDetectorModelDefinition
} from "./_DetectorModelDefinition";
import {
  _DetectorModelConfiguration,
  _UnmarshalledDetectorModelConfiguration
} from "./_DetectorModelConfiguration";

/**
 * <p>Information about the detector model.</p>
 */
export interface _DetectorModel {
  /**
   * <p>Information that defines how a detector operates.</p>
   */
  detectorModelDefinition?: _DetectorModelDefinition;

  /**
   * <p>Information about how the detector is configured.</p>
   */
  detectorModelConfiguration?: _DetectorModelConfiguration;
}

export interface _UnmarshalledDetectorModel extends _DetectorModel {
  /**
   * <p>Information that defines how a detector operates.</p>
   */
  detectorModelDefinition?: _UnmarshalledDetectorModelDefinition;

  /**
   * <p>Information about how the detector is configured.</p>
   */
  detectorModelConfiguration?: _UnmarshalledDetectorModelConfiguration;
}
