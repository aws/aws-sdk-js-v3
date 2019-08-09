/**
 * <p>The settings to use when creating a cluster. This parameter is used to enable CloudWatch Container Insights for a cluster.</p>
 */
export interface _ClusterSetting {
  /**
   * <p>The name of the cluster setting. The only supported value is <code>containerInsights</code>.</p>
   */
  name?: "containerInsights" | string;

  /**
   * <p>The value to set for the cluster setting. The supported values are <code>enabled</code> and <code>disabled</code>. If <code>enabled</code> is specified, CloudWatch Container Insights will be enabled for the cluster, otherwise it will be disabled unless the <code>containerInsights</code> account setting is enabled. If a cluster value is specified, it will override the <code>containerInsights</code> value set with <a>PutAccountSetting</a> or <a>PutAccountSettingDefault</a>.</p>
   */
  value?: string;
}

export type _UnmarshalledClusterSetting = _ClusterSetting;
