/**
 * <p>An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.</p>
 */
export interface _MetricsConfiguration {
  /**
   * <p>A Boolean that specifies whether cloud metrics are collected.</p>
   */
  cloudMetricEnabled?: boolean;

  /**
   * <p>The ARN of the role that is used to collect cloud metrics.</p>
   */
  metricRuleRoleArn?: string;
}

export type _UnmarshalledMetricsConfiguration = _MetricsConfiguration;
