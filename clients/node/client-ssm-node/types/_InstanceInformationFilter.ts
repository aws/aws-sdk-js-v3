/**
 * <p>Describes a filter for a specific list of instances. You can filter instances information by using tags. You specify tags by using a key-value mapping.</p> <p>Use this action instead of the <a>DescribeInstanceInformationRequest$InstanceInformationFilterList</a> method. The <code>InstanceInformationFilterList</code> method is a legacy method and does not support tags. </p>
 */
export interface _InstanceInformationFilter {
  /**
   * <p>The name of the filter. </p>
   */
  key:
    | "InstanceIds"
    | "AgentVersion"
    | "PingStatus"
    | "PlatformTypes"
    | "ActivationIds"
    | "IamRole"
    | "ResourceType"
    | "AssociationStatus"
    | string;

  /**
   * <p>The filter values.</p>
   */
  valueSet: Array<string> | Iterable<string>;
}

export interface _UnmarshalledInstanceInformationFilter
  extends _InstanceInformationFilter {
  /**
   * <p>The filter values.</p>
   */
  valueSet: Array<string>;
}
