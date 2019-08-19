/**
 * <p>Describes a Reserved Instance listing state.</p>
 */
export interface _InstanceCount {
  /**
   * <p>The number of listed Reserved Instances in the state specified by the <code>state</code>.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The states of the listed Reserved Instances.</p>
   */
  State?: "available" | "sold" | "cancelled" | "pending" | string;
}

export type _UnmarshalledInstanceCount = _InstanceCount;
