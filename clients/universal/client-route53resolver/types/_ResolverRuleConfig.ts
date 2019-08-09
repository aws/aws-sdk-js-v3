import { _TargetAddress, _UnmarshalledTargetAddress } from "./_TargetAddress";

/**
 * <p>In an <a>UpdateResolverRule</a> request, information about the changes that you want to make.</p>
 */
export interface _ResolverRuleConfig {
  /**
   * <p>The new name for the resolver rule. The name that you specify appears in the Resolver dashboard in the Route 53 console. </p>
   */
  Name?: string;

  /**
   * <p>For DNS queries that originate in your VPC, the new IP addresses that you want to route outbound DNS queries to.</p>
   */
  TargetIps?: Array<_TargetAddress> | Iterable<_TargetAddress>;

  /**
   * <p>The ID of the new outbound resolver endpoint that you want to use to route DNS queries to the IP addresses that you specify in <code>TargetIps</code>.</p>
   */
  ResolverEndpointId?: string;
}

export interface _UnmarshalledResolverRuleConfig extends _ResolverRuleConfig {
  /**
   * <p>For DNS queries that originate in your VPC, the new IP addresses that you want to route outbound DNS queries to.</p>
   */
  TargetIps?: Array<_UnmarshalledTargetAddress>;
}
