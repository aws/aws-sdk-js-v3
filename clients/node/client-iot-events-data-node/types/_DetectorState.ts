import { _Variable, _UnmarshalledVariable } from "./_Variable";
import { _Timer, _UnmarshalledTimer } from "./_Timer";

/**
 * <p>Information about the current state of the detector instance.</p>
 */
export interface _DetectorState {
  /**
   * <p>The name of the state.</p>
   */
  stateName: string;

  /**
   * <p>The current values of the detector's variables.</p>
   */
  variables: Array<_Variable> | Iterable<_Variable>;

  /**
   * <p>The current state of the detector's timers.</p>
   */
  timers: Array<_Timer> | Iterable<_Timer>;
}

export interface _UnmarshalledDetectorState extends _DetectorState {
  /**
   * <p>The current values of the detector's variables.</p>
   */
  variables: Array<_UnmarshalledVariable>;

  /**
   * <p>The current state of the detector's timers.</p>
   */
  timers: Array<_UnmarshalledTimer>;
}
