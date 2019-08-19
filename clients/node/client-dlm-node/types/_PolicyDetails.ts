import { _Tag, _UnmarshalledTag } from "./_Tag";
import { _Schedule, _UnmarshalledSchedule } from "./_Schedule";
import { _Parameters, _UnmarshalledParameters } from "./_Parameters";

/**
 * <p>Specifies the configuration of a lifecycle policy.</p>
 */
export interface _PolicyDetails {
  /**
   * <p>This field determines the valid target resource types and actions a policy can manage. This field defaults to EBS_SNAPSHOT_MANAGEMENT if not present.</p>
   */
  PolicyType?: "EBS_SNAPSHOT_MANAGEMENT" | string;

  /**
   * <p>The resource type.</p>
   */
  ResourceTypes?:
    | Array<"VOLUME" | "INSTANCE" | string>
    | Iterable<"VOLUME" | "INSTANCE" | string>;

  /**
   * <p>The single tag that identifies targeted resources for this policy.</p>
   */
  TargetTags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The schedule of policy-defined actions.</p>
   */
  Schedules?: Array<_Schedule> | Iterable<_Schedule>;

  /**
   * <p>A set of optional parameters that can be provided by the policy. </p>
   */
  Parameters?: _Parameters;
}

export interface _UnmarshalledPolicyDetails extends _PolicyDetails {
  /**
   * <p>The resource type.</p>
   */
  ResourceTypes?: Array<"VOLUME" | "INSTANCE" | string>;

  /**
   * <p>The single tag that identifies targeted resources for this policy.</p>
   */
  TargetTags?: Array<_UnmarshalledTag>;

  /**
   * <p>The schedule of policy-defined actions.</p>
   */
  Schedules?: Array<_UnmarshalledSchedule>;

  /**
   * <p>A set of optional parameters that can be provided by the policy. </p>
   */
  Parameters?: _UnmarshalledParameters;
}
