import { _Event, _UnmarshalledEvent } from "./_Event";

/**
 * <p>When exiting this state, perform these <code>"actions"</code> if the specified <code>"condition"</code> is TRUE.</p>
 */
export interface _OnExitLifecycle {
  /**
   * <p>Specifies the <code>"actions"</code> that are performed when the state is exited and the <code>"condition"</code> is TRUE.</p>
   */
  events?: Array<_Event> | Iterable<_Event>;
}

export interface _UnmarshalledOnExitLifecycle extends _OnExitLifecycle {
  /**
   * <p>Specifies the <code>"actions"</code> that are performed when the state is exited and the <code>"condition"</code> is TRUE.</p>
   */
  events?: Array<_UnmarshalledEvent>;
}
