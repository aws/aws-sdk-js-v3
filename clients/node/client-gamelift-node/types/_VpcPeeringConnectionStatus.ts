/**
 * <p>Represents status information for a VPC peering connection. Status is associated with a <a>VpcPeeringConnection</a> object. Status codes and messages are provided from EC2 (see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpcPeeringConnectionStateReason.html">VpcPeeringConnectionStateReason</a>). Connection status information is also communicated as a fleet <a>Event</a>.</p>
 */
export interface _VpcPeeringConnectionStatus {
  /**
   * <p>Code indicating the status of a VPC peering connection.</p>
   */
  Code?: string;

  /**
   * <p>Additional messaging associated with the connection status. </p>
   */
  Message?: string;
}

export type _UnmarshalledVpcPeeringConnectionStatus = _VpcPeeringConnectionStatus;
