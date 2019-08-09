/**
 * The properties for a VPC type input destination.
 */
export interface _InputDestinationVpc {
  /**
   * The availability zone of the Input destination.
   *
   */
  AvailabilityZone?: string;

  /**
   * The network interface ID of the Input destination in the VPC.
   *
   */
  NetworkInterfaceId?: string;
}

export type _UnmarshalledInputDestinationVpc = _InputDestinationVpc;
