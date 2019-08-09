import { _Listener, _UnmarshalledListener } from "./_Listener";

/**
 * <p>The policies enabled for a listener.</p>
 */
export interface _ListenerDescription {
  /**
   * <p>The listener.</p>
   */
  Listener?: _Listener;

  /**
   * <p>The policies. If there are no policies enabled, the list is empty.</p>
   */
  PolicyNames?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledListenerDescription extends _ListenerDescription {
  /**
   * <p>The listener.</p>
   */
  Listener?: _UnmarshalledListener;

  /**
   * <p>The policies. If there are no policies enabled, the list is empty.</p>
   */
  PolicyNames?: Array<string>;
}
