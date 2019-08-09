import { _Action, _UnmarshalledAction } from "./_Action";

/**
 * <p>Specifies the <code>"actions"</code> to be performed when the <code>"condition"</code> evaluates to TRUE.</p>
 */
export interface _Event {
  /**
   * <p>The name of the event.</p>
   */
  eventName: string;

  /**
   * <p>[Optional] The Boolean expression that when TRUE causes the <code>"actions"</code> to be performed. If not present, the actions are performed (=TRUE); if the expression result is not a Boolean value, the actions are NOT performed (=FALSE).</p>
   */
  condition?: string;

  /**
   * <p>The actions to be performed.</p>
   */
  actions?: Array<_Action> | Iterable<_Action>;
}

export interface _UnmarshalledEvent extends _Event {
  /**
   * <p>The actions to be performed.</p>
   */
  actions?: Array<_UnmarshalledAction>;
}
