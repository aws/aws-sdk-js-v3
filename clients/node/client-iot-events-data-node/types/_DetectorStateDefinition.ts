import {
  _VariableDefinition,
  _UnmarshalledVariableDefinition
} from "./_VariableDefinition";
import {
  _TimerDefinition,
  _UnmarshalledTimerDefinition
} from "./_TimerDefinition";

/**
 * <p>The new state, variable values, and timer settings of the detector (instance).</p>
 */
export interface _DetectorStateDefinition {
  /**
   * <p>The name of the new state of the detector (instance).</p>
   */
  stateName: string;

  /**
   * <p>The new values of the detector's variables. Any variable whose value isn't specified is cleared.</p>
   */
  variables: Array<_VariableDefinition> | Iterable<_VariableDefinition>;

  /**
   * <p>The new values of the detector's timers. Any timer whose value isn't specified is cleared, and its timeout event won't occur.</p>
   */
  timers: Array<_TimerDefinition> | Iterable<_TimerDefinition>;
}

export interface _UnmarshalledDetectorStateDefinition
  extends _DetectorStateDefinition {
  /**
   * <p>The new values of the detector's variables. Any variable whose value isn't specified is cleared.</p>
   */
  variables: Array<_UnmarshalledVariableDefinition>;

  /**
   * <p>The new values of the detector's timers. Any timer whose value isn't specified is cleared, and its timeout event won't occur.</p>
   */
  timers: Array<_UnmarshalledTimerDefinition>;
}
