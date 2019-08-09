import {
  _BootstrapActionConfig,
  _UnmarshalledBootstrapActionConfig
} from "./_BootstrapActionConfig";

/**
 * <p>Reports the configuration of a bootstrap action in a cluster (job flow).</p>
 */
export interface _BootstrapActionDetail {
  /**
   * <p>A description of the bootstrap action.</p>
   */
  BootstrapActionConfig?: _BootstrapActionConfig;
}

export interface _UnmarshalledBootstrapActionDetail
  extends _BootstrapActionDetail {
  /**
   * <p>A description of the bootstrap action.</p>
   */
  BootstrapActionConfig?: _UnmarshalledBootstrapActionConfig;
}
