import {
  _DetectorStateDefinition,
  _UnmarshalledDetectorStateDefinition
} from "./_DetectorStateDefinition";

/**
 * <p>Information used to update the detector (instance).</p>
 */
export interface _UpdateDetectorRequest {
  /**
   * <p>The ID to assign to the detector update <code>"message"</code>. Each <code>"messageId"</code> must be unique within each batch sent.</p>
   */
  messageId: string;

  /**
   * <p>The name of the detector model that created the detectors (instances).</p>
   */
  detectorModelName: string;

  /**
   * <p>The value of the input key attribute (identifying the device or system) that caused the creation of this detector (instance).</p>
   */
  keyValue?: string;

  /**
   * <p>The new state, variable values, and timer settings of the detector (instance).</p>
   */
  state: _DetectorStateDefinition;
}

export interface _UnmarshalledUpdateDetectorRequest
  extends _UpdateDetectorRequest {
  /**
   * <p>The new state, variable values, and timer settings of the detector (instance).</p>
   */
  state: _UnmarshalledDetectorStateDefinition;
}
