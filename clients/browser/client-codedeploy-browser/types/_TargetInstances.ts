import { _EC2TagFilter, _UnmarshalledEC2TagFilter } from "./_EC2TagFilter";
import { _EC2TagSet, _UnmarshalledEC2TagSet } from "./_EC2TagSet";

/**
 * <p>Information about the instances to be used in the replacement environment in a blue/green deployment.</p>
 */
export interface _TargetInstances {
  /**
   * <p>The tag filter key, type, and value used to identify Amazon EC2 instances in a replacement environment for a blue/green deployment. Cannot be used in the same call as ec2TagSet.</p>
   */
  tagFilters?: Array<_EC2TagFilter> | Iterable<_EC2TagFilter>;

  /**
   * <p>The names of one or more Auto Scaling groups to identify a replacement environment for a blue/green deployment.</p>
   */
  autoScalingGroups?: Array<string> | Iterable<string>;

  /**
   * <p>Information about the groups of EC2 instance tags that an instance must be identified by in order for it to be included in the replacement environment for a blue/green deployment. Cannot be used in the same call as tagFilters.</p>
   */
  ec2TagSet?: _EC2TagSet;
}

export interface _UnmarshalledTargetInstances extends _TargetInstances {
  /**
   * <p>The tag filter key, type, and value used to identify Amazon EC2 instances in a replacement environment for a blue/green deployment. Cannot be used in the same call as ec2TagSet.</p>
   */
  tagFilters?: Array<_UnmarshalledEC2TagFilter>;

  /**
   * <p>The names of one or more Auto Scaling groups to identify a replacement environment for a blue/green deployment.</p>
   */
  autoScalingGroups?: Array<string>;

  /**
   * <p>Information about the groups of EC2 instance tags that an instance must be identified by in order for it to be included in the replacement environment for a blue/green deployment. Cannot be used in the same call as tagFilters.</p>
   */
  ec2TagSet?: _UnmarshalledEC2TagSet;
}
