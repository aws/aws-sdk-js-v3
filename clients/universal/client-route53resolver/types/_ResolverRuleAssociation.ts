/**
 * <p>In the response to an <a>AssociateResolverRule</a>, <a>DisassociateResolverRule</a>, or <a>ListResolverRuleAssociations</a> request, information about an association between a resolver rule and a VPC.</p>
 */
export interface _ResolverRuleAssociation {
  /**
   * <p>The ID of the association between a resolver rule and a VPC. Resolver assigns this value when you submit an <a>AssociateResolverRule</a> request.</p>
   */
  Id?: string;

  /**
   * <p>The ID of the resolver rule that you associated with the VPC that is specified by <code>VPCId</code>.</p>
   */
  ResolverRuleId?: string;

  /**
   * <p>The name of an association between a resolver rule and a VPC.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the VPC that you associated the resolver rule with.</p>
   */
  VPCId?: string;

  /**
   * <p>A code that specifies the current status of the association between a resolver rule and a VPC.</p>
   */
  Status?:
    | "CREATING"
    | "COMPLETE"
    | "DELETING"
    | "FAILED"
    | "OVERRIDDEN"
    | string;

  /**
   * <p>A detailed description of the status of the association between a resolver rule and a VPC.</p>
   */
  StatusMessage?: string;
}

export type _UnmarshalledResolverRuleAssociation = _ResolverRuleAssociation;
