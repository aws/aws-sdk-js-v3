import {_MappingRule, _UnmarshalledMappingRule} from './_MappingRule';

/**
 * <p>A container for rules.</p>
 */
export interface _RulesConfigurationType {
    /**
     * <p>An array of rules. You can specify up to 25 rules per identity provider.</p> <p>Rules are evaluated in order. The first one to match specifies the role.</p>
     */
    Rules: Array<_MappingRule>|Iterable<_MappingRule>;
}

export interface _UnmarshalledRulesConfigurationType extends _RulesConfigurationType {
    /**
     * <p>An array of rules. You can specify up to 25 rules per identity provider.</p> <p>Rules are evaluated in order. The first one to match specifies the role.</p>
     */
    Rules: Array<_UnmarshalledMappingRule>;
}