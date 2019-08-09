/**
 * <p>Describes the virtual private server (or <i>instance</i>) status.</p>
 */
export interface _InstanceState {
  /**
   * <p>The status code for the instance.</p>
   */
  code?: number;

  /**
   * <p>The state of the instance (e.g., <code>running</code> or <code>pending</code>).</p>
   */
  name?: string;
}

export type _UnmarshalledInstanceState = _InstanceState;
