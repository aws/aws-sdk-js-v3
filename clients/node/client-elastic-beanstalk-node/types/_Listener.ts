/**
 * <p>Describes the properties of a Listener for the LoadBalancer.</p>
 */
export interface _Listener {
  /**
   * <p>The protocol that is used by the Listener.</p>
   */
  Protocol?: string;

  /**
   * <p>The port that is used by the Listener.</p>
   */
  Port?: number;
}

export type _UnmarshalledListener = _Listener;
