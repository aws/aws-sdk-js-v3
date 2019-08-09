import {
  _VpcPeeringConnectionStatus,
  _UnmarshalledVpcPeeringConnectionStatus
} from "./_VpcPeeringConnectionStatus";

/**
 * <p>Represents a peering connection between a VPC on one of your AWS accounts and the VPC for your Amazon GameLift fleets. This record may be for an active peering connection or a pending connection that has not yet been established.</p> <ul> <li> <p> <a>CreateVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>DescribeVpcPeeringAuthorizations</a> </p> </li> <li> <p> <a>DeleteVpcPeeringAuthorization</a> </p> </li> <li> <p> <a>CreateVpcPeeringConnection</a> </p> </li> <li> <p> <a>DescribeVpcPeeringConnections</a> </p> </li> <li> <p> <a>DeleteVpcPeeringConnection</a> </p> </li> </ul>
 */
export interface _VpcPeeringConnection {
  /**
   * <p>Unique identifier for a fleet. This ID determines the ID of the Amazon GameLift VPC for your fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>CIDR block of IPv4 addresses assigned to the VPC peering connection for the GameLift VPC. The peered VPC also has an IPv4 CIDR block associated with it; these blocks cannot overlap or the peering connection cannot be created. </p>
   */
  IpV4CidrBlock?: string;

  /**
   * <p>Unique identifier that is automatically assigned to the connection record. This ID is referenced in VPC peering connection events, and is used when deleting a connection with <a>DeleteVpcPeeringConnection</a>. </p>
   */
  VpcPeeringConnectionId?: string;

  /**
   * <p>Object that contains status information about the connection. Status indicates if a connection is pending, successful, or failed.</p>
   */
  Status?: _VpcPeeringConnectionStatus;

  /**
   * <p>Unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same region where your fleet is deployed. Look up a VPC ID using the <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the AWS Management Console. Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   */
  PeerVpcId?: string;

  /**
   * <p>Unique identifier for the VPC that contains the Amazon GameLift fleet for this connection. This VPC is managed by Amazon GameLift and does not appear in your AWS account. </p>
   */
  GameLiftVpcId?: string;
}

export interface _UnmarshalledVpcPeeringConnection
  extends _VpcPeeringConnection {
  /**
   * <p>Object that contains status information about the connection. Status indicates if a connection is pending, successful, or failed.</p>
   */
  Status?: _UnmarshalledVpcPeeringConnectionStatus;
}
