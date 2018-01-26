import {_RulesConfigurationType, _UnmarshalledRulesConfigurationType} from './_RulesConfigurationType';

/**
 * <p>A role mapping.</p>
 */
export interface _RoleMapping {
    /**
     * <p>The role mapping type. Token will use <code>cognito:roles</code> and <code>cognito:preferred_role</code> claims from the Cognito identity provider token to map groups to roles. Rules will attempt to match claims from the token to map to a role.</p>
     */
    Type: 'Token'|'Rules'|string;

    /**
     * <p>If you specify Token or Rules as the <code>Type</code>, <code>AmbiguousRoleResolution</code> is required.</p> <p>Specifies the action to be taken if either no rules match the claim value for the <code>Rules</code> type, or there is no <code>cognito:preferred_role</code> claim and there are multiple <code>cognito:roles</code> matches for the <code>Token</code> type.</p>
     */
    AmbiguousRoleResolution?: 'AuthenticatedRole'|'Deny'|string;

    /**
     * <p>The rules to be used for mapping users to roles.</p> <p>If you specify Rules as the role mapping type, <code>RulesConfiguration</code> is required.</p>
     */
    RulesConfiguration?: _RulesConfigurationType;
}

export interface _UnmarshalledRoleMapping extends _RoleMapping {
    /**
     * <p>The rules to be used for mapping users to roles.</p> <p>If you specify Rules as the role mapping type, <code>RulesConfiguration</code> is required.</p>
     */
    RulesConfiguration?: _UnmarshalledRulesConfigurationType;
}