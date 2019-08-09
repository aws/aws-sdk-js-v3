import { _TargetGroup, _UnmarshalledTargetGroup } from "./_TargetGroup";

/**
 * <p>Describes the target groups to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these target groups.</p>
 */
export interface _TargetGroupsConfig {
  /**
   * <p>One or more target groups.</p>
   */
  TargetGroups?: Array<_TargetGroup> | Iterable<_TargetGroup>;
}

export interface _UnmarshalledTargetGroupsConfig extends _TargetGroupsConfig {
  /**
   * <p>One or more target groups.</p>
   */
  TargetGroups?: Array<_UnmarshalledTargetGroup>;
}
