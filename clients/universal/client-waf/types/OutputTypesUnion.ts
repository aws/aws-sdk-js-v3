import { CreateByteMatchSetOutput } from "./CreateByteMatchSetOutput";
import { CreateGeoMatchSetOutput } from "./CreateGeoMatchSetOutput";
import { CreateIPSetOutput } from "./CreateIPSetOutput";
import { CreateRateBasedRuleOutput } from "./CreateRateBasedRuleOutput";
import { CreateRegexMatchSetOutput } from "./CreateRegexMatchSetOutput";
import { CreateRegexPatternSetOutput } from "./CreateRegexPatternSetOutput";
import { CreateRuleOutput } from "./CreateRuleOutput";
import { CreateRuleGroupOutput } from "./CreateRuleGroupOutput";
import { CreateSizeConstraintSetOutput } from "./CreateSizeConstraintSetOutput";
import { CreateSqlInjectionMatchSetOutput } from "./CreateSqlInjectionMatchSetOutput";
import { CreateWebACLOutput } from "./CreateWebACLOutput";
import { CreateXssMatchSetOutput } from "./CreateXssMatchSetOutput";
import { DeleteByteMatchSetOutput } from "./DeleteByteMatchSetOutput";
import { DeleteGeoMatchSetOutput } from "./DeleteGeoMatchSetOutput";
import { DeleteIPSetOutput } from "./DeleteIPSetOutput";
import { DeleteLoggingConfigurationOutput } from "./DeleteLoggingConfigurationOutput";
import { DeletePermissionPolicyOutput } from "./DeletePermissionPolicyOutput";
import { DeleteRateBasedRuleOutput } from "./DeleteRateBasedRuleOutput";
import { DeleteRegexMatchSetOutput } from "./DeleteRegexMatchSetOutput";
import { DeleteRegexPatternSetOutput } from "./DeleteRegexPatternSetOutput";
import { DeleteRuleOutput } from "./DeleteRuleOutput";
import { DeleteRuleGroupOutput } from "./DeleteRuleGroupOutput";
import { DeleteSizeConstraintSetOutput } from "./DeleteSizeConstraintSetOutput";
import { DeleteSqlInjectionMatchSetOutput } from "./DeleteSqlInjectionMatchSetOutput";
import { DeleteWebACLOutput } from "./DeleteWebACLOutput";
import { DeleteXssMatchSetOutput } from "./DeleteXssMatchSetOutput";
import { GetByteMatchSetOutput } from "./GetByteMatchSetOutput";
import { GetChangeTokenOutput } from "./GetChangeTokenOutput";
import { GetChangeTokenStatusOutput } from "./GetChangeTokenStatusOutput";
import { GetGeoMatchSetOutput } from "./GetGeoMatchSetOutput";
import { GetIPSetOutput } from "./GetIPSetOutput";
import { GetLoggingConfigurationOutput } from "./GetLoggingConfigurationOutput";
import { GetPermissionPolicyOutput } from "./GetPermissionPolicyOutput";
import { GetRateBasedRuleOutput } from "./GetRateBasedRuleOutput";
import { GetRateBasedRuleManagedKeysOutput } from "./GetRateBasedRuleManagedKeysOutput";
import { GetRegexMatchSetOutput } from "./GetRegexMatchSetOutput";
import { GetRegexPatternSetOutput } from "./GetRegexPatternSetOutput";
import { GetRuleOutput } from "./GetRuleOutput";
import { GetRuleGroupOutput } from "./GetRuleGroupOutput";
import { GetSampledRequestsOutput } from "./GetSampledRequestsOutput";
import { GetSizeConstraintSetOutput } from "./GetSizeConstraintSetOutput";
import { GetSqlInjectionMatchSetOutput } from "./GetSqlInjectionMatchSetOutput";
import { GetWebACLOutput } from "./GetWebACLOutput";
import { GetXssMatchSetOutput } from "./GetXssMatchSetOutput";
import { ListActivatedRulesInRuleGroupOutput } from "./ListActivatedRulesInRuleGroupOutput";
import { ListByteMatchSetsOutput } from "./ListByteMatchSetsOutput";
import { ListGeoMatchSetsOutput } from "./ListGeoMatchSetsOutput";
import { ListIPSetsOutput } from "./ListIPSetsOutput";
import { ListLoggingConfigurationsOutput } from "./ListLoggingConfigurationsOutput";
import { ListRateBasedRulesOutput } from "./ListRateBasedRulesOutput";
import { ListRegexMatchSetsOutput } from "./ListRegexMatchSetsOutput";
import { ListRegexPatternSetsOutput } from "./ListRegexPatternSetsOutput";
import { ListRuleGroupsOutput } from "./ListRuleGroupsOutput";
import { ListRulesOutput } from "./ListRulesOutput";
import { ListSizeConstraintSetsOutput } from "./ListSizeConstraintSetsOutput";
import { ListSqlInjectionMatchSetsOutput } from "./ListSqlInjectionMatchSetsOutput";
import { ListSubscribedRuleGroupsOutput } from "./ListSubscribedRuleGroupsOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { ListWebACLsOutput } from "./ListWebACLsOutput";
import { ListXssMatchSetsOutput } from "./ListXssMatchSetsOutput";
import { PutLoggingConfigurationOutput } from "./PutLoggingConfigurationOutput";
import { PutPermissionPolicyOutput } from "./PutPermissionPolicyOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateByteMatchSetOutput } from "./UpdateByteMatchSetOutput";
import { UpdateGeoMatchSetOutput } from "./UpdateGeoMatchSetOutput";
import { UpdateIPSetOutput } from "./UpdateIPSetOutput";
import { UpdateRateBasedRuleOutput } from "./UpdateRateBasedRuleOutput";
import { UpdateRegexMatchSetOutput } from "./UpdateRegexMatchSetOutput";
import { UpdateRegexPatternSetOutput } from "./UpdateRegexPatternSetOutput";
import { UpdateRuleOutput } from "./UpdateRuleOutput";
import { UpdateRuleGroupOutput } from "./UpdateRuleGroupOutput";
import { UpdateSizeConstraintSetOutput } from "./UpdateSizeConstraintSetOutput";
import { UpdateSqlInjectionMatchSetOutput } from "./UpdateSqlInjectionMatchSetOutput";
import { UpdateWebACLOutput } from "./UpdateWebACLOutput";
import { UpdateXssMatchSetOutput } from "./UpdateXssMatchSetOutput";
export type OutputTypesUnion =
  | CreateByteMatchSetOutput
  | CreateGeoMatchSetOutput
  | CreateIPSetOutput
  | CreateRateBasedRuleOutput
  | CreateRegexMatchSetOutput
  | CreateRegexPatternSetOutput
  | CreateRuleOutput
  | CreateRuleGroupOutput
  | CreateSizeConstraintSetOutput
  | CreateSqlInjectionMatchSetOutput
  | CreateWebACLOutput
  | CreateXssMatchSetOutput
  | DeleteByteMatchSetOutput
  | DeleteGeoMatchSetOutput
  | DeleteIPSetOutput
  | DeleteLoggingConfigurationOutput
  | DeletePermissionPolicyOutput
  | DeleteRateBasedRuleOutput
  | DeleteRegexMatchSetOutput
  | DeleteRegexPatternSetOutput
  | DeleteRuleOutput
  | DeleteRuleGroupOutput
  | DeleteSizeConstraintSetOutput
  | DeleteSqlInjectionMatchSetOutput
  | DeleteWebACLOutput
  | DeleteXssMatchSetOutput
  | GetByteMatchSetOutput
  | GetChangeTokenOutput
  | GetChangeTokenStatusOutput
  | GetGeoMatchSetOutput
  | GetIPSetOutput
  | GetLoggingConfigurationOutput
  | GetPermissionPolicyOutput
  | GetRateBasedRuleOutput
  | GetRateBasedRuleManagedKeysOutput
  | GetRegexMatchSetOutput
  | GetRegexPatternSetOutput
  | GetRuleOutput
  | GetRuleGroupOutput
  | GetSampledRequestsOutput
  | GetSizeConstraintSetOutput
  | GetSqlInjectionMatchSetOutput
  | GetWebACLOutput
  | GetXssMatchSetOutput
  | ListActivatedRulesInRuleGroupOutput
  | ListByteMatchSetsOutput
  | ListGeoMatchSetsOutput
  | ListIPSetsOutput
  | ListLoggingConfigurationsOutput
  | ListRateBasedRulesOutput
  | ListRegexMatchSetsOutput
  | ListRegexPatternSetsOutput
  | ListRuleGroupsOutput
  | ListRulesOutput
  | ListSizeConstraintSetsOutput
  | ListSqlInjectionMatchSetsOutput
  | ListSubscribedRuleGroupsOutput
  | ListTagsForResourceOutput
  | ListWebACLsOutput
  | ListXssMatchSetsOutput
  | PutLoggingConfigurationOutput
  | PutPermissionPolicyOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateByteMatchSetOutput
  | UpdateGeoMatchSetOutput
  | UpdateIPSetOutput
  | UpdateRateBasedRuleOutput
  | UpdateRegexMatchSetOutput
  | UpdateRegexPatternSetOutput
  | UpdateRuleOutput
  | UpdateRuleGroupOutput
  | UpdateSizeConstraintSetOutput
  | UpdateSqlInjectionMatchSetOutput
  | UpdateWebACLOutput
  | UpdateXssMatchSetOutput;
