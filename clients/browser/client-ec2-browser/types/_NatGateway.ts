import {
  _NatGatewayAddress,
  _UnmarshalledNatGatewayAddress
} from "./_NatGatewayAddress";
import {
  _ProvisionedBandwidth,
  _UnmarshalledProvisionedBandwidth
} from "./_ProvisionedBandwidth";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a NAT gateway.</p>
 */
export interface _NatGateway {
  /**
   * <p>The date and time the NAT gateway was created.</p>
   */
  CreateTime?: Date | string | number;

  /**
   * <p>The date and time the NAT gateway was deleted, if applicable.</p>
   */
  DeleteTime?: Date | string | number;

  /**
   * <p>If the NAT gateway could not be created, specifies the error code for the failure. (<code>InsufficientFreeAddressesInSubnet</code> | <code>Gateway.NotAttached</code> | <code>InvalidAllocationID.NotFound</code> | <code>Resource.AlreadyAssociated</code> | <code>InternalError</code> | <code>InvalidSubnetID.NotFound</code>)</p>
   */
  FailureCode?: string;

  /**
   * <p>If the NAT gateway could not be created, specifies the error message for the failure, that corresponds to the error code.</p> <ul> <li> <p>For InsufficientFreeAddressesInSubnet: "Subnet has insufficient free addresses to create this NAT gateway"</p> </li> <li> <p>For Gateway.NotAttached: "Network vpc-xxxxxxxx has no Internet gateway attached"</p> </li> <li> <p>For InvalidAllocationID.NotFound: "Elastic IP address eipalloc-xxxxxxxx could not be associated with this NAT gateway"</p> </li> <li> <p>For Resource.AlreadyAssociated: "Elastic IP address eipalloc-xxxxxxxx is already associated"</p> </li> <li> <p>For InternalError: "Network interface eni-xxxxxxxx, created and used internally by this NAT gateway is in an invalid state. Please try again."</p> </li> <li> <p>For InvalidSubnetID.NotFound: "The specified subnet subnet-xxxxxxxx does not exist or could not be found."</p> </li> </ul>
   */
  FailureMessage?: string;

  /**
   * <p>Information about the IP addresses and network interface associated with the NAT gateway.</p>
   */
  NatGatewayAddresses?:
    | Array<_NatGatewayAddress>
    | Iterable<_NatGatewayAddress>;

  /**
   * <p>The ID of the NAT gateway.</p>
   */
  NatGatewayId?: string;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  ProvisionedBandwidth?: _ProvisionedBandwidth;

  /**
   * <p>The state of the NAT gateway.</p> <ul> <li> <p> <code>pending</code>: The NAT gateway is being created and is not ready to process traffic.</p> </li> <li> <p> <code>failed</code>: The NAT gateway could not be created. Check the <code>failureCode</code> and <code>failureMessage</code> fields for the reason.</p> </li> <li> <p> <code>available</code>: The NAT gateway is able to process traffic. This status remains until you delete the NAT gateway, and does not indicate the health of the NAT gateway.</p> </li> <li> <p> <code>deleting</code>: The NAT gateway is in the process of being terminated and may still be processing traffic.</p> </li> <li> <p> <code>deleted</code>: The NAT gateway has been terminated and is no longer processing traffic.</p> </li> </ul>
   */
  State?: "pending" | "failed" | "available" | "deleting" | "deleted" | string;

  /**
   * <p>The ID of the subnet in which the NAT gateway is located.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the VPC in which the NAT gateway is located.</p>
   */
  VpcId?: string;

  /**
   * <p>The tags for the NAT gateway.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledNatGateway extends _NatGateway {
  /**
   * <p>The date and time the NAT gateway was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The date and time the NAT gateway was deleted, if applicable.</p>
   */
  DeleteTime?: Date;

  /**
   * <p>Information about the IP addresses and network interface associated with the NAT gateway.</p>
   */
  NatGatewayAddresses?: Array<_UnmarshalledNatGatewayAddress>;

  /**
   * <p>Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.</p>
   */
  ProvisionedBandwidth?: _UnmarshalledProvisionedBandwidth;

  /**
   * <p>The tags for the NAT gateway.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
