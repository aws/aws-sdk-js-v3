/**
 * <p>Configuration properties of a peer node.</p>
 */
export interface _NodeConfiguration {
  /**
   * <p>The Amazon Managed Blockchain instance type for the node.</p>
   */
  InstanceType: string;

  /**
   * <p>The Availability Zone in which the node exists.</p>
   */
  AvailabilityZone: string;
}

export type _UnmarshalledNodeConfiguration = _NodeConfiguration;
