/**
 * <p>The filters to describe or get information about your managed instances.</p>
 */
export interface _InstanceInformationStringFilter {
  /**
   * <p>The filter key name to describe your instances. For example:</p> <p>"InstanceIds"|"AgentVersion"|"PingStatus"|"PlatformTypes"|"ActivationIds"|"IamRole"|"ResourceType"|"AssociationStatus"|"Tag Key"</p>
   */
  Key: string;

  /**
   * <p>The filter values.</p>
   */
  Values: Array<string> | Iterable<string>;
}

export interface _UnmarshalledInstanceInformationStringFilter
  extends _InstanceInformationStringFilter {
  /**
   * <p>The filter values.</p>
   */
  Values: Array<string>;
}
