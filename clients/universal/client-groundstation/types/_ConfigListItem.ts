/**
 * <p>An item in a list of <code>Config</code> objects.</p>
 */
export interface _ConfigListItem {
  /**
   * <p>ARN of a <code>Config</code>.</p>
   */
  configArn?: string;

  /**
   * <p>UUID of a <code>Config</code>.</p>
   */
  configId?: string;

  /**
   * <p>Type of a <code>Config</code>.</p>
   */
  configType?:
    | "antenna-downlink"
    | "antenna-downlink-demod-decode"
    | "antenna-uplink"
    | "dataflow-endpoint"
    | "tracking"
    | "uplink-echo"
    | string;

  /**
   * <p>Name of a <code>Config</code>.</p>
   */
  name?: string;
}

export type _UnmarshalledConfigListItem = _ConfigListItem;
