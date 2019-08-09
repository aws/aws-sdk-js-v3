import { AssociateWebACLInput } from "./AssociateWebACLInput";
import { CreateByteMatchSetInput } from "./CreateByteMatchSetInput";
import { CreateGeoMatchSetInput } from "./CreateGeoMatchSetInput";
import { CreateIPSetInput } from "./CreateIPSetInput";
import { CreateRateBasedRuleInput } from "./CreateRateBasedRuleInput";
import { CreateRegexMatchSetInput } from "./CreateRegexMatchSetInput";
import { CreateRegexPatternSetInput } from "./CreateRegexPatternSetInput";
import { CreateRuleInput } from "./CreateRuleInput";
import { CreateRuleGroupInput } from "./CreateRuleGroupInput";
import { CreateSizeConstraintSetInput } from "./CreateSizeConstraintSetInput";
import { CreateSqlInjectionMatchSetInput } from "./CreateSqlInjectionMatchSetInput";
import { CreateWebACLInput } from "./CreateWebACLInput";
import { CreateXssMatchSetInput } from "./CreateXssMatchSetInput";
import { DeleteByteMatchSetInput } from "./DeleteByteMatchSetInput";
import { DeleteGeoMatchSetInput } from "./DeleteGeoMatchSetInput";
import { DeleteIPSetInput } from "./DeleteIPSetInput";
import { DeleteLoggingConfigurationInput } from "./DeleteLoggingConfigurationInput";
import { DeletePermissionPolicyInput } from "./DeletePermissionPolicyInput";
import { DeleteRateBasedRuleInput } from "./DeleteRateBasedRuleInput";
import { DeleteRegexMatchSetInput } from "./DeleteRegexMatchSetInput";
import { DeleteRegexPatternSetInput } from "./DeleteRegexPatternSetInput";
import { DeleteRuleInput } from "./DeleteRuleInput";
import { DeleteRuleGroupInput } from "./DeleteRuleGroupInput";
import { DeleteSizeConstraintSetInput } from "./DeleteSizeConstraintSetInput";
import { DeleteSqlInjectionMatchSetInput } from "./DeleteSqlInjectionMatchSetInput";
import { DeleteWebACLInput } from "./DeleteWebACLInput";
import { DeleteXssMatchSetInput } from "./DeleteXssMatchSetInput";
import { DisassociateWebACLInput } from "./DisassociateWebACLInput";
import { GetByteMatchSetInput } from "./GetByteMatchSetInput";
import { GetChangeTokenInput } from "./GetChangeTokenInput";
import { GetChangeTokenStatusInput } from "./GetChangeTokenStatusInput";
import { GetGeoMatchSetInput } from "./GetGeoMatchSetInput";
import { GetIPSetInput } from "./GetIPSetInput";
import { GetLoggingConfigurationInput } from "./GetLoggingConfigurationInput";
import { GetPermissionPolicyInput } from "./GetPermissionPolicyInput";
import { GetRateBasedRuleInput } from "./GetRateBasedRuleInput";
import { GetRateBasedRuleManagedKeysInput } from "./GetRateBasedRuleManagedKeysInput";
import { GetRegexMatchSetInput } from "./GetRegexMatchSetInput";
import { GetRegexPatternSetInput } from "./GetRegexPatternSetInput";
import { GetRuleInput } from "./GetRuleInput";
import { GetRuleGroupInput } from "./GetRuleGroupInput";
import { GetSampledRequestsInput } from "./GetSampledRequestsInput";
import { GetSizeConstraintSetInput } from "./GetSizeConstraintSetInput";
import { GetSqlInjectionMatchSetInput } from "./GetSqlInjectionMatchSetInput";
import { GetWebACLInput } from "./GetWebACLInput";
import { GetWebACLForResourceInput } from "./GetWebACLForResourceInput";
import { GetXssMatchSetInput } from "./GetXssMatchSetInput";
import { ListActivatedRulesInRuleGroupInput } from "./ListActivatedRulesInRuleGroupInput";
import { ListByteMatchSetsInput } from "./ListByteMatchSetsInput";
import { ListGeoMatchSetsInput } from "./ListGeoMatchSetsInput";
import { ListIPSetsInput } from "./ListIPSetsInput";
import { ListLoggingConfigurationsInput } from "./ListLoggingConfigurationsInput";
import { ListRateBasedRulesInput } from "./ListRateBasedRulesInput";
import { ListRegexMatchSetsInput } from "./ListRegexMatchSetsInput";
import { ListRegexPatternSetsInput } from "./ListRegexPatternSetsInput";
import { ListResourcesForWebACLInput } from "./ListResourcesForWebACLInput";
import { ListRuleGroupsInput } from "./ListRuleGroupsInput";
import { ListRulesInput } from "./ListRulesInput";
import { ListSizeConstraintSetsInput } from "./ListSizeConstraintSetsInput";
import { ListSqlInjectionMatchSetsInput } from "./ListSqlInjectionMatchSetsInput";
import { ListSubscribedRuleGroupsInput } from "./ListSubscribedRuleGroupsInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListWebACLsInput } from "./ListWebACLsInput";
import { ListXssMatchSetsInput } from "./ListXssMatchSetsInput";
import { PutLoggingConfigurationInput } from "./PutLoggingConfigurationInput";
import { PutPermissionPolicyInput } from "./PutPermissionPolicyInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateByteMatchSetInput } from "./UpdateByteMatchSetInput";
import { UpdateGeoMatchSetInput } from "./UpdateGeoMatchSetInput";
import { UpdateIPSetInput } from "./UpdateIPSetInput";
import { UpdateRateBasedRuleInput } from "./UpdateRateBasedRuleInput";
import { UpdateRegexMatchSetInput } from "./UpdateRegexMatchSetInput";
import { UpdateRegexPatternSetInput } from "./UpdateRegexPatternSetInput";
import { UpdateRuleInput } from "./UpdateRuleInput";
import { UpdateRuleGroupInput } from "./UpdateRuleGroupInput";
import { UpdateSizeConstraintSetInput } from "./UpdateSizeConstraintSetInput";
import { UpdateSqlInjectionMatchSetInput } from "./UpdateSqlInjectionMatchSetInput";
import { UpdateWebACLInput } from "./UpdateWebACLInput";
import { UpdateXssMatchSetInput } from "./UpdateXssMatchSetInput";
export type InputTypesUnion =
  | AssociateWebACLInput
  | CreateByteMatchSetInput
  | CreateGeoMatchSetInput
  | CreateIPSetInput
  | CreateRateBasedRuleInput
  | CreateRegexMatchSetInput
  | CreateRegexPatternSetInput
  | CreateRuleInput
  | CreateRuleGroupInput
  | CreateSizeConstraintSetInput
  | CreateSqlInjectionMatchSetInput
  | CreateWebACLInput
  | CreateXssMatchSetInput
  | DeleteByteMatchSetInput
  | DeleteGeoMatchSetInput
  | DeleteIPSetInput
  | DeleteLoggingConfigurationInput
  | DeletePermissionPolicyInput
  | DeleteRateBasedRuleInput
  | DeleteRegexMatchSetInput
  | DeleteRegexPatternSetInput
  | DeleteRuleInput
  | DeleteRuleGroupInput
  | DeleteSizeConstraintSetInput
  | DeleteSqlInjectionMatchSetInput
  | DeleteWebACLInput
  | DeleteXssMatchSetInput
  | DisassociateWebACLInput
  | GetByteMatchSetInput
  | GetChangeTokenInput
  | GetChangeTokenStatusInput
  | GetGeoMatchSetInput
  | GetIPSetInput
  | GetLoggingConfigurationInput
  | GetPermissionPolicyInput
  | GetRateBasedRuleInput
  | GetRateBasedRuleManagedKeysInput
  | GetRegexMatchSetInput
  | GetRegexPatternSetInput
  | GetRuleInput
  | GetRuleGroupInput
  | GetSampledRequestsInput
  | GetSizeConstraintSetInput
  | GetSqlInjectionMatchSetInput
  | GetWebACLInput
  | GetWebACLForResourceInput
  | GetXssMatchSetInput
  | ListActivatedRulesInRuleGroupInput
  | ListByteMatchSetsInput
  | ListGeoMatchSetsInput
  | ListIPSetsInput
  | ListLoggingConfigurationsInput
  | ListRateBasedRulesInput
  | ListRegexMatchSetsInput
  | ListRegexPatternSetsInput
  | ListResourcesForWebACLInput
  | ListRuleGroupsInput
  | ListRulesInput
  | ListSizeConstraintSetsInput
  | ListSqlInjectionMatchSetsInput
  | ListSubscribedRuleGroupsInput
  | ListTagsForResourceInput
  | ListWebACLsInput
  | ListXssMatchSetsInput
  | PutLoggingConfigurationInput
  | PutPermissionPolicyInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateByteMatchSetInput
  | UpdateGeoMatchSetInput
  | UpdateIPSetInput
  | UpdateRateBasedRuleInput
  | UpdateRegexMatchSetInput
  | UpdateRegexPatternSetInput
  | UpdateRuleInput
  | UpdateRuleGroupInput
  | UpdateSizeConstraintSetInput
  | UpdateSqlInjectionMatchSetInput
  | UpdateWebACLInput
  | UpdateXssMatchSetInput;
