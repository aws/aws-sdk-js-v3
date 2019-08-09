/**
 * <p>Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.</p>
 */
export interface _InstanceResizePolicy {
  /**
   * <p>Specific list of instances to be terminated when shrinking an instance group.</p>
   */
  InstancesToTerminate?: Array<string> | Iterable<string>;

  /**
   * <p>Specific list of instances to be protected when shrinking an instance group.</p>
   */
  InstancesToProtect?: Array<string> | Iterable<string>;

  /**
   * <p>Decommissioning timeout override for the specific list of instances to be terminated.</p>
   */
  InstanceTerminationTimeout?: number;
}

export interface _UnmarshalledInstanceResizePolicy
  extends _InstanceResizePolicy {
  /**
   * <p>Specific list of instances to be terminated when shrinking an instance group.</p>
   */
  InstancesToTerminate?: Array<string>;

  /**
   * <p>Specific list of instances to be protected when shrinking an instance group.</p>
   */
  InstancesToProtect?: Array<string>;
}
