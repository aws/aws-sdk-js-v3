/**
 * <p>Describes an instance running on a Dedicated Host.</p>
 */
export interface _HostInstance {
  /**
   * <p>the IDs of instances that are running on the Dedicated Host.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance type size (for example, <code>m3.medium</code>) of the running instance.</p>
   */
  InstanceType?: string;
}

export type _UnmarshalledHostInstance = _HostInstance;
