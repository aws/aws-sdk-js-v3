import { _PatchRule, _UnmarshalledPatchRule } from "./_PatchRule";

/**
 * <p>A set of rules defining the approval rules for a patch baseline.</p>
 */
export interface _PatchRuleGroup {
  /**
   * <p>The rules that make up the rule group.</p>
   */
  PatchRules: Array<_PatchRule> | Iterable<_PatchRule>;
}

export interface _UnmarshalledPatchRuleGroup extends _PatchRuleGroup {
  /**
   * <p>The rules that make up the rule group.</p>
   */
  PatchRules: Array<_UnmarshalledPatchRule>;
}
