import { _ClusterStatus, _UnmarshalledClusterStatus } from "./_ClusterStatus";

/**
 * <p>The summary description of the cluster.</p>
 */
export interface _ClusterSummary {
  /**
   * <p>The unique identifier for the cluster.</p>
   */
  Id?: string;

  /**
   * <p>The name of the cluster.</p>
   */
  Name?: string;

  /**
   * <p>The details about the current status of the cluster.</p>
   */
  Status?: _ClusterStatus;

  /**
   * <p>An approximation of the cost of the cluster, represented in m1.small/hours. This value is incremented one time for every hour an m1.small instance runs. Larger instances are weighted more, so an EC2 instance that is roughly four times more expensive would result in the normalized instance hours being incremented by four. This result is only an approximation and does not reflect the actual billing rate.</p>
   */
  NormalizedInstanceHours?: number;
}

export interface _UnmarshalledClusterSummary extends _ClusterSummary {
  /**
   * <p>The details about the current status of the cluster.</p>
   */
  Status?: _UnmarshalledClusterStatus;
}
