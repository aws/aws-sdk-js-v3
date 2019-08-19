import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a customer gateway.</p>
 */
export interface _CustomerGateway {
  /**
   * <p>The customer gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN).</p>
   */
  BgpAsn?: string;

  /**
   * <p>The ID of the customer gateway.</p>
   */
  CustomerGatewayId?: string;

  /**
   * <p>The Internet-routable IP address of the customer gateway's outside interface.</p>
   */
  IpAddress?: string;

  /**
   * <p>The current state of the customer gateway (<code>pending | available | deleting | deleted</code>).</p>
   */
  State?: string;

  /**
   * <p>The type of VPN connection the customer gateway supports (<code>ipsec.1</code>).</p>
   */
  Type?: string;

  /**
   * <p>Any tags assigned to the customer gateway.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledCustomerGateway extends _CustomerGateway {
  /**
   * <p>Any tags assigned to the customer gateway.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
