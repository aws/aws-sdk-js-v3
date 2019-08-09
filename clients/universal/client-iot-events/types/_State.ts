import {
  _OnInputLifecycle,
  _UnmarshalledOnInputLifecycle
} from "./_OnInputLifecycle";
import {
  _OnEnterLifecycle,
  _UnmarshalledOnEnterLifecycle
} from "./_OnEnterLifecycle";
import {
  _OnExitLifecycle,
  _UnmarshalledOnExitLifecycle
} from "./_OnExitLifecycle";

/**
 * <p>Information that defines a state of a detector.</p>
 */
export interface _State {
  /**
   * <p>The name of the state.</p>
   */
  stateName: string;

  /**
   * <p>When an input is received and the <code>"condition"</code> is TRUE, perform the specified <code>"actions"</code>.</p>
   */
  onInput?: _OnInputLifecycle;

  /**
   * <p>When entering this state, perform these <code>"actions"</code> if the <code>"condition"</code> is TRUE.</p>
   */
  onEnter?: _OnEnterLifecycle;

  /**
   * <p>When exiting this state, perform these <code>"actions"</code> if the specified <code>"condition"</code> is TRUE.</p>
   */
  onExit?: _OnExitLifecycle;
}

export interface _UnmarshalledState extends _State {
  /**
   * <p>When an input is received and the <code>"condition"</code> is TRUE, perform the specified <code>"actions"</code>.</p>
   */
  onInput?: _UnmarshalledOnInputLifecycle;

  /**
   * <p>When entering this state, perform these <code>"actions"</code> if the <code>"condition"</code> is TRUE.</p>
   */
  onEnter?: _UnmarshalledOnEnterLifecycle;

  /**
   * <p>When exiting this state, perform these <code>"actions"</code> if the specified <code>"condition"</code> is TRUE.</p>
   */
  onExit?: _UnmarshalledOnExitLifecycle;
}
