/**
 * <p>Describes a registered Amazon ECS cluster.</p>
 */
export interface _EcsCluster {
  /**
   * <p>The cluster's ARN.</p>
   */
  EcsClusterArn?: string;

  /**
   * <p>The cluster name.</p>
   */
  EcsClusterName?: string;

  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The time and date that the cluster was registered with the stack.</p>
   */
  RegisteredAt?: string;
}

export type _UnmarshalledEcsCluster = _EcsCluster;
