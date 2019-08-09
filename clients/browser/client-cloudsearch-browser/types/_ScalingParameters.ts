/**
 * <p>The desired instance type and desired number of replicas of each index partition.</p>
 */
export interface _ScalingParameters {
  /**
   * <p>The instance type that you want to preconfigure for your domain. For example, <code>search.m1.small</code>.</p>
   */
  DesiredInstanceType?:
    | "search.m1.small"
    | "search.m1.large"
    | "search.m2.xlarge"
    | "search.m2.2xlarge"
    | "search.m3.medium"
    | "search.m3.large"
    | "search.m3.xlarge"
    | "search.m3.2xlarge"
    | string;

  /**
   * <p>The number of replicas you want to preconfigure for each index partition.</p>
   */
  DesiredReplicationCount?: number;

  /**
   * <p>The number of partitions you want to preconfigure for your domain. Only valid when you select <code>m2.2xlarge</code> as the desired instance type.</p>
   */
  DesiredPartitionCount?: number;
}

export type _UnmarshalledScalingParameters = _ScalingParameters;
