import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Information about an on-premises instance.</p>
 */
export interface _InstanceInfo {
  /**
   * <p>The name of the on-premises instance.</p>
   */
  instanceName?: string;

  /**
   * <p>The ARN of the IAM session associated with the on-premises instance.</p>
   */
  iamSessionArn?: string;

  /**
   * <p>The IAM user ARN associated with the on-premises instance.</p>
   */
  iamUserArn?: string;

  /**
   * <p>The ARN of the on-premises instance.</p>
   */
  instanceArn?: string;

  /**
   * <p>The time at which the on-premises instance was registered.</p>
   */
  registerTime?: Date | string | number;

  /**
   * <p>If the on-premises instance was deregistered, the time at which the on-premises instance was deregistered.</p>
   */
  deregisterTime?: Date | string | number;

  /**
   * <p>The tags currently associated with the on-premises instance.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledInstanceInfo extends _InstanceInfo {
  /**
   * <p>The time at which the on-premises instance was registered.</p>
   */
  registerTime?: Date;

  /**
   * <p>If the on-premises instance was deregistered, the time at which the on-premises instance was deregistered.</p>
   */
  deregisterTime?: Date;

  /**
   * <p>The tags currently associated with the on-premises instance.</p>
   */
  tags?: Array<_UnmarshalledTag>;
}
