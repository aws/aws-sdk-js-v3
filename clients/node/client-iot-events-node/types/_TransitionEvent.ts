import { _Action, _UnmarshalledAction } from "./_Action";

/**
 * <p>Specifies the actions performed and the next state entered when a <code>"condition"</code> evaluates to TRUE.</p>
 */
export interface _TransitionEvent {
  /**
   * <p>The name of the transition event.</p>
   */
  eventName: string;

  /**
   * <p>[Required] A Boolean expression that when TRUE causes the actions to be performed and the <code>"nextState"</code> to be entered.</p>
   */
  condition: string;

  /**
   * <p>The actions to be performed.</p>
   */
  actions?: Array<_Action> | Iterable<_Action>;

  /**
   * <p>The next state to enter.</p>
   */
  nextState: string;
}

export interface _UnmarshalledTransitionEvent extends _TransitionEvent {
  /**
   * <p>The actions to be performed.</p>
   */
  actions?: Array<_UnmarshalledAction>;
}
