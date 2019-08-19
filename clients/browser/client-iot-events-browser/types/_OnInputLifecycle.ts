import { _Event, _UnmarshalledEvent } from "./_Event";
import {
  _TransitionEvent,
  _UnmarshalledTransitionEvent
} from "./_TransitionEvent";

/**
 * <p>Specifies the actions performed when the <code>"condition"</code> evaluates to TRUE.</p>
 */
export interface _OnInputLifecycle {
  /**
   * <p>Specifies the actions performed when the <code>"condition"</code> evaluates to TRUE.</p>
   */
  events?: Array<_Event> | Iterable<_Event>;

  /**
   * <p>Specifies the actions performed, and the next state entered, when a <code>"condition"</code> evaluates to TRUE.</p>
   */
  transitionEvents?: Array<_TransitionEvent> | Iterable<_TransitionEvent>;
}

export interface _UnmarshalledOnInputLifecycle extends _OnInputLifecycle {
  /**
   * <p>Specifies the actions performed when the <code>"condition"</code> evaluates to TRUE.</p>
   */
  events?: Array<_UnmarshalledEvent>;

  /**
   * <p>Specifies the actions performed, and the next state entered, when a <code>"condition"</code> evaluates to TRUE.</p>
   */
  transitionEvents?: Array<_UnmarshalledTransitionEvent>;
}
