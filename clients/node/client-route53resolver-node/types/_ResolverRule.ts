import { _TargetAddress, _UnmarshalledTargetAddress } from "./_TargetAddress";

/**
 * <p>For queries that originate in your VPC, detailed information about a resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a>CreateResolverRule</a>, <a>DeleteResolverRule</a>, <a>GetResolverRule</a>, <a>ListResolverRules</a>, or <a>UpdateResolverRule</a> request.</p>
 */
export interface _ResolverRule {
  /**
   * <p>The ID that Resolver assigned to the resolver rule when you created it.</p>
   */
  Id?: string;

  /**
   * <p>A unique string that you specified when you created the resolver rule. <code>CreatorRequestId</code>identifies the request and allows failed requests to be retried without the risk of executing the operation twice. </p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The ARN (Amazon Resource Name) for the resolver rule specified by <code>Id</code>.</p>
   */
  Arn?: string;

  /**
   * <p>DNS queries for this domain name are forwarded to the IP addresses that are specified in <code>TargetIps</code>. If a query matches multiple resolver rules (example.com and www.example.com), the query is routed using the resolver rule that contains the most specific domain name (www.example.com).</p>
   */
  DomainName?: string;

  /**
   * <p>A code that specifies the current status of the resolver rule.</p>
   */
  Status?: "COMPLETE" | "DELETING" | "UPDATING" | "FAILED" | string;

  /**
   * <p>A detailed description of the status of a resolver rule.</p>
   */
  StatusMessage?: string;

  /**
   * <p>This value is always <code>FORWARD</code>. Other resolver rule types aren't supported.</p>
   */
  RuleType?: "FORWARD" | "SYSTEM" | "RECURSIVE" | string;

  /**
   * <p>The name for the resolver rule, which you specified when you created the resolver rule.</p>
   */
  Name?: string;

  /**
   * <p>An array that contains the IP addresses and ports that you want to forward </p>
   */
  TargetIps?: Array<_TargetAddress> | Iterable<_TargetAddress>;

  /**
   * <p>The ID of the endpoint that the rule is associated with.</p>
   */
  ResolverEndpointId?: string;

  /**
   * <p>When a rule is shared with another AWS account, the account ID of the account that the rule is shared with.</p>
   */
  OwnerId?: string;

  /**
   * <p>Whether the rules is shared and, if so, whether the current account is sharing the rule with another account, or another account is sharing the rule with the current account.</p>
   */
  ShareStatus?: "NOT_SHARED" | "SHARED_WITH_ME" | "SHARED_BY_ME" | string;
}

export interface _UnmarshalledResolverRule extends _ResolverRule {
  /**
   * <p>An array that contains the IP addresses and ports that you want to forward </p>
   */
  TargetIps?: Array<_UnmarshalledTargetAddress>;
}
