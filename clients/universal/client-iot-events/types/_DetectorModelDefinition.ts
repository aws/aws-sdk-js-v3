import { _State, _UnmarshalledState } from "./_State";

/**
 * <p>Information that defines how a detector operates.</p>
 */
export interface _DetectorModelDefinition {
  /**
   * <p>Information about the states of the detector.</p>
   */
  states: Array<_State> | Iterable<_State>;

  /**
   * <p>The state that is entered at the creation of each detector (instance).</p>
   */
  initialStateName: string;
}

export interface _UnmarshalledDetectorModelDefinition
  extends _DetectorModelDefinition {
  /**
   * <p>Information about the states of the detector.</p>
   */
  states: Array<_UnmarshalledState>;
}
