/**
 * <p>A rule that maps a claim name, a claim value, and a match type to a role ARN.</p>
 */
export interface _MappingRule {
    /**
     * <p>The claim name that must be present in the token, for example, "isAdmin" or "paid".</p>
     */
    Claim: string;

    /**
     * <p>The match condition that specifies how closely the claim value in the IdP token must match <code>Value</code>.</p>
     */
    MatchType: 'Equals'|'Contains'|'StartsWith'|'NotEqual'|string;

    /**
     * <p>A brief string that the claim must match, for example, "paid" or "yes".</p>
     */
    Value: string;

    /**
     * <p>The role ARN.</p>
     */
    RoleARN: string;
}

export type _UnmarshalledMappingRule = _MappingRule;