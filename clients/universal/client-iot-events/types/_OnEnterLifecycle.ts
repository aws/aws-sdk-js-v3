import { _Event, _UnmarshalledEvent } from "./_Event";

/**
 * <p>When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE.</p>
 */
export interface _OnEnterLifecycle {
  /**
   * <p>Specifies the actions that are performed when the state is entered and the <code>"condition"</code> is TRUE.</p>
   */
  events?: Array<_Event> | Iterable<_Event>;
}

export interface _UnmarshalledOnEnterLifecycle extends _OnEnterLifecycle {
  /**
   * <p>Specifies the actions that are performed when the state is entered and the <code>"condition"</code> is TRUE.</p>
   */
  events?: Array<_UnmarshalledEvent>;
}
