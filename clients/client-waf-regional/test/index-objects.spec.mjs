import {
  ActivatedRule$,
  AssociateWebACL$,
  AssociateWebACLCommand,
  AssociateWebACLRequest$,
  AssociateWebACLResponse$,
  ByteMatchSet$,
  ByteMatchSetSummary$,
  ByteMatchSetUpdate$,
  ByteMatchTuple$,
  ChangeAction,
  ChangeTokenStatus,
  ComparisonOperator,
  CreateByteMatchSet$,
  CreateByteMatchSetCommand,
  CreateByteMatchSetRequest$,
  CreateByteMatchSetResponse$,
  CreateGeoMatchSet$,
  CreateGeoMatchSetCommand,
  CreateGeoMatchSetRequest$,
  CreateGeoMatchSetResponse$,
  CreateIPSet$,
  CreateIPSetCommand,
  CreateIPSetRequest$,
  CreateIPSetResponse$,
  CreateRateBasedRule$,
  CreateRateBasedRuleCommand,
  CreateRateBasedRuleRequest$,
  CreateRateBasedRuleResponse$,
  CreateRegexMatchSet$,
  CreateRegexMatchSetCommand,
  CreateRegexMatchSetRequest$,
  CreateRegexMatchSetResponse$,
  CreateRegexPatternSet$,
  CreateRegexPatternSetCommand,
  CreateRegexPatternSetRequest$,
  CreateRegexPatternSetResponse$,
  CreateRule$,
  CreateRuleCommand,
  CreateRuleGroup$,
  CreateRuleGroupCommand,
  CreateRuleGroupRequest$,
  CreateRuleGroupResponse$,
  CreateRuleRequest$,
  CreateRuleResponse$,
  CreateSizeConstraintSet$,
  CreateSizeConstraintSetCommand,
  CreateSizeConstraintSetRequest$,
  CreateSizeConstraintSetResponse$,
  CreateSqlInjectionMatchSet$,
  CreateSqlInjectionMatchSetCommand,
  CreateSqlInjectionMatchSetRequest$,
  CreateSqlInjectionMatchSetResponse$,
  CreateWebACL$,
  CreateWebACLCommand,
  CreateWebACLMigrationStack$,
  CreateWebACLMigrationStackCommand,
  CreateWebACLMigrationStackRequest$,
  CreateWebACLMigrationStackResponse$,
  CreateWebACLRequest$,
  CreateWebACLResponse$,
  CreateXssMatchSet$,
  CreateXssMatchSetCommand,
  CreateXssMatchSetRequest$,
  CreateXssMatchSetResponse$,
  DeleteByteMatchSet$,
  DeleteByteMatchSetCommand,
  DeleteByteMatchSetRequest$,
  DeleteByteMatchSetResponse$,
  DeleteGeoMatchSet$,
  DeleteGeoMatchSetCommand,
  DeleteGeoMatchSetRequest$,
  DeleteGeoMatchSetResponse$,
  DeleteIPSet$,
  DeleteIPSetCommand,
  DeleteIPSetRequest$,
  DeleteIPSetResponse$,
  DeleteLoggingConfiguration$,
  DeleteLoggingConfigurationCommand,
  DeleteLoggingConfigurationRequest$,
  DeleteLoggingConfigurationResponse$,
  DeletePermissionPolicy$,
  DeletePermissionPolicyCommand,
  DeletePermissionPolicyRequest$,
  DeletePermissionPolicyResponse$,
  DeleteRateBasedRule$,
  DeleteRateBasedRuleCommand,
  DeleteRateBasedRuleRequest$,
  DeleteRateBasedRuleResponse$,
  DeleteRegexMatchSet$,
  DeleteRegexMatchSetCommand,
  DeleteRegexMatchSetRequest$,
  DeleteRegexMatchSetResponse$,
  DeleteRegexPatternSet$,
  DeleteRegexPatternSetCommand,
  DeleteRegexPatternSetRequest$,
  DeleteRegexPatternSetResponse$,
  DeleteRule$,
  DeleteRuleCommand,
  DeleteRuleGroup$,
  DeleteRuleGroupCommand,
  DeleteRuleGroupRequest$,
  DeleteRuleGroupResponse$,
  DeleteRuleRequest$,
  DeleteRuleResponse$,
  DeleteSizeConstraintSet$,
  DeleteSizeConstraintSetCommand,
  DeleteSizeConstraintSetRequest$,
  DeleteSizeConstraintSetResponse$,
  DeleteSqlInjectionMatchSet$,
  DeleteSqlInjectionMatchSetCommand,
  DeleteSqlInjectionMatchSetRequest$,
  DeleteSqlInjectionMatchSetResponse$,
  DeleteWebACL$,
  DeleteWebACLCommand,
  DeleteWebACLRequest$,
  DeleteWebACLResponse$,
  DeleteXssMatchSet$,
  DeleteXssMatchSetCommand,
  DeleteXssMatchSetRequest$,
  DeleteXssMatchSetResponse$,
  DisassociateWebACL$,
  DisassociateWebACLCommand,
  DisassociateWebACLRequest$,
  DisassociateWebACLResponse$,
  ExcludedRule$,
  FieldToMatch$,
  GeoMatchConstraint$,
  GeoMatchConstraintType,
  GeoMatchConstraintValue,
  GeoMatchSet$,
  GeoMatchSetSummary$,
  GeoMatchSetUpdate$,
  GetByteMatchSet$,
  GetByteMatchSetCommand,
  GetByteMatchSetRequest$,
  GetByteMatchSetResponse$,
  GetChangeToken$,
  GetChangeTokenCommand,
  GetChangeTokenRequest$,
  GetChangeTokenResponse$,
  GetChangeTokenStatus$,
  GetChangeTokenStatusCommand,
  GetChangeTokenStatusRequest$,
  GetChangeTokenStatusResponse$,
  GetGeoMatchSet$,
  GetGeoMatchSetCommand,
  GetGeoMatchSetRequest$,
  GetGeoMatchSetResponse$,
  GetIPSet$,
  GetIPSetCommand,
  GetIPSetRequest$,
  GetIPSetResponse$,
  GetLoggingConfiguration$,
  GetLoggingConfigurationCommand,
  GetLoggingConfigurationRequest$,
  GetLoggingConfigurationResponse$,
  GetPermissionPolicy$,
  GetPermissionPolicyCommand,
  GetPermissionPolicyRequest$,
  GetPermissionPolicyResponse$,
  GetRateBasedRule$,
  GetRateBasedRuleCommand,
  GetRateBasedRuleManagedKeys$,
  GetRateBasedRuleManagedKeysCommand,
  GetRateBasedRuleManagedKeysRequest$,
  GetRateBasedRuleManagedKeysResponse$,
  GetRateBasedRuleRequest$,
  GetRateBasedRuleResponse$,
  GetRegexMatchSet$,
  GetRegexMatchSetCommand,
  GetRegexMatchSetRequest$,
  GetRegexMatchSetResponse$,
  GetRegexPatternSet$,
  GetRegexPatternSetCommand,
  GetRegexPatternSetRequest$,
  GetRegexPatternSetResponse$,
  GetRule$,
  GetRuleCommand,
  GetRuleGroup$,
  GetRuleGroupCommand,
  GetRuleGroupRequest$,
  GetRuleGroupResponse$,
  GetRuleRequest$,
  GetRuleResponse$,
  GetSampledRequests$,
  GetSampledRequestsCommand,
  GetSampledRequestsRequest$,
  GetSampledRequestsResponse$,
  GetSizeConstraintSet$,
  GetSizeConstraintSetCommand,
  GetSizeConstraintSetRequest$,
  GetSizeConstraintSetResponse$,
  GetSqlInjectionMatchSet$,
  GetSqlInjectionMatchSetCommand,
  GetSqlInjectionMatchSetRequest$,
  GetSqlInjectionMatchSetResponse$,
  GetWebACL$,
  GetWebACLCommand,
  GetWebACLForResource$,
  GetWebACLForResourceCommand,
  GetWebACLForResourceRequest$,
  GetWebACLForResourceResponse$,
  GetWebACLRequest$,
  GetWebACLResponse$,
  GetXssMatchSet$,
  GetXssMatchSetCommand,
  GetXssMatchSetRequest$,
  GetXssMatchSetResponse$,
  HTTPHeader$,
  HTTPRequest$,
  IPSet$,
  IPSetDescriptor$,
  IPSetDescriptorType,
  IPSetSummary$,
  IPSetUpdate$,
  ListActivatedRulesInRuleGroup$,
  ListActivatedRulesInRuleGroupCommand,
  ListActivatedRulesInRuleGroupRequest$,
  ListActivatedRulesInRuleGroupResponse$,
  ListByteMatchSets$,
  ListByteMatchSetsCommand,
  ListByteMatchSetsRequest$,
  ListByteMatchSetsResponse$,
  ListGeoMatchSets$,
  ListGeoMatchSetsCommand,
  ListGeoMatchSetsRequest$,
  ListGeoMatchSetsResponse$,
  ListIPSets$,
  ListIPSetsCommand,
  ListIPSetsRequest$,
  ListIPSetsResponse$,
  ListLoggingConfigurations$,
  ListLoggingConfigurationsCommand,
  ListLoggingConfigurationsRequest$,
  ListLoggingConfigurationsResponse$,
  ListRateBasedRules$,
  ListRateBasedRulesCommand,
  ListRateBasedRulesRequest$,
  ListRateBasedRulesResponse$,
  ListRegexMatchSets$,
  ListRegexMatchSetsCommand,
  ListRegexMatchSetsRequest$,
  ListRegexMatchSetsResponse$,
  ListRegexPatternSets$,
  ListRegexPatternSetsCommand,
  ListRegexPatternSetsRequest$,
  ListRegexPatternSetsResponse$,
  ListResourcesForWebACL$,
  ListResourcesForWebACLCommand,
  ListResourcesForWebACLRequest$,
  ListResourcesForWebACLResponse$,
  ListRuleGroups$,
  ListRuleGroupsCommand,
  ListRuleGroupsRequest$,
  ListRuleGroupsResponse$,
  ListRules$,
  ListRulesCommand,
  ListRulesRequest$,
  ListRulesResponse$,
  ListSizeConstraintSets$,
  ListSizeConstraintSetsCommand,
  ListSizeConstraintSetsRequest$,
  ListSizeConstraintSetsResponse$,
  ListSqlInjectionMatchSets$,
  ListSqlInjectionMatchSetsCommand,
  ListSqlInjectionMatchSetsRequest$,
  ListSqlInjectionMatchSetsResponse$,
  ListSubscribedRuleGroups$,
  ListSubscribedRuleGroupsCommand,
  ListSubscribedRuleGroupsRequest$,
  ListSubscribedRuleGroupsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListWebACLs$,
  ListWebACLsCommand,
  ListWebACLsRequest$,
  ListWebACLsResponse$,
  ListXssMatchSets$,
  ListXssMatchSetsCommand,
  ListXssMatchSetsRequest$,
  ListXssMatchSetsResponse$,
  LoggingConfiguration$,
  MatchFieldType,
  MigrationErrorType,
  ParameterExceptionField,
  ParameterExceptionReason,
  PositionalConstraint,
  Predicate$,
  PredicateType,
  PutLoggingConfiguration$,
  PutLoggingConfigurationCommand,
  PutLoggingConfigurationRequest$,
  PutLoggingConfigurationResponse$,
  PutPermissionPolicy$,
  PutPermissionPolicyCommand,
  PutPermissionPolicyRequest$,
  PutPermissionPolicyResponse$,
  RateBasedRule$,
  RateKey,
  RegexMatchSet$,
  RegexMatchSetSummary$,
  RegexMatchSetUpdate$,
  RegexMatchTuple$,
  RegexPatternSet$,
  RegexPatternSetSummary$,
  RegexPatternSetUpdate$,
  ResourceType,
  Rule$,
  RuleGroup$,
  RuleGroupSummary$,
  RuleGroupUpdate$,
  RuleSummary$,
  RuleUpdate$,
  SampledHTTPRequest$,
  SizeConstraint$,
  SizeConstraintSet$,
  SizeConstraintSetSummary$,
  SizeConstraintSetUpdate$,
  SqlInjectionMatchSet$,
  SqlInjectionMatchSetSummary$,
  SqlInjectionMatchSetUpdate$,
  SqlInjectionMatchTuple$,
  SubscribedRuleGroupSummary$,
  Tag$,
  TagInfoForResource$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TextTransformation,
  TimeWindow$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateByteMatchSet$,
  UpdateByteMatchSetCommand,
  UpdateByteMatchSetRequest$,
  UpdateByteMatchSetResponse$,
  UpdateGeoMatchSet$,
  UpdateGeoMatchSetCommand,
  UpdateGeoMatchSetRequest$,
  UpdateGeoMatchSetResponse$,
  UpdateIPSet$,
  UpdateIPSetCommand,
  UpdateIPSetRequest$,
  UpdateIPSetResponse$,
  UpdateRateBasedRule$,
  UpdateRateBasedRuleCommand,
  UpdateRateBasedRuleRequest$,
  UpdateRateBasedRuleResponse$,
  UpdateRegexMatchSet$,
  UpdateRegexMatchSetCommand,
  UpdateRegexMatchSetRequest$,
  UpdateRegexMatchSetResponse$,
  UpdateRegexPatternSet$,
  UpdateRegexPatternSetCommand,
  UpdateRegexPatternSetRequest$,
  UpdateRegexPatternSetResponse$,
  UpdateRule$,
  UpdateRuleCommand,
  UpdateRuleGroup$,
  UpdateRuleGroupCommand,
  UpdateRuleGroupRequest$,
  UpdateRuleGroupResponse$,
  UpdateRuleRequest$,
  UpdateRuleResponse$,
  UpdateSizeConstraintSet$,
  UpdateSizeConstraintSetCommand,
  UpdateSizeConstraintSetRequest$,
  UpdateSizeConstraintSetResponse$,
  UpdateSqlInjectionMatchSet$,
  UpdateSqlInjectionMatchSetCommand,
  UpdateSqlInjectionMatchSetRequest$,
  UpdateSqlInjectionMatchSetResponse$,
  UpdateWebACL$,
  UpdateWebACLCommand,
  UpdateWebACLRequest$,
  UpdateWebACLResponse$,
  UpdateXssMatchSet$,
  UpdateXssMatchSetCommand,
  UpdateXssMatchSetRequest$,
  UpdateXssMatchSetResponse$,
  WAFBadRequestException,
  WAFBadRequestException$,
  WAFDisallowedNameException,
  WAFDisallowedNameException$,
  WAFEntityMigrationException,
  WAFEntityMigrationException$,
  WAFInternalErrorException,
  WAFInternalErrorException$,
  WAFInvalidAccountException,
  WAFInvalidAccountException$,
  WAFInvalidOperationException,
  WAFInvalidOperationException$,
  WAFInvalidParameterException,
  WAFInvalidParameterException$,
  WAFInvalidPermissionPolicyException,
  WAFInvalidPermissionPolicyException$,
  WAFInvalidRegexPatternException,
  WAFInvalidRegexPatternException$,
  WAFLimitsExceededException,
  WAFLimitsExceededException$,
  WAFNonEmptyEntityException,
  WAFNonEmptyEntityException$,
  WAFNonexistentContainerException,
  WAFNonexistentContainerException$,
  WAFNonexistentItemException,
  WAFNonexistentItemException$,
  WAFReferencedItemException,
  WAFReferencedItemException$,
  WAFRegional,
  WAFRegionalClient,
  WAFRegionalServiceException,
  WAFServiceLinkedRoleErrorException,
  WAFServiceLinkedRoleErrorException$,
  WAFStaleDataException,
  WAFStaleDataException$,
  WAFSubscriptionNotFoundException,
  WAFSubscriptionNotFoundException$,
  WAFTagOperationException,
  WAFTagOperationException$,
  WAFTagOperationInternalErrorException,
  WAFTagOperationInternalErrorException$,
  WAFUnavailableEntityException,
  WAFUnavailableEntityException$,
  WafAction$,
  WafActionType,
  WafOverrideAction$,
  WafOverrideActionType,
  WafRuleType,
  WebACL$,
  WebACLSummary$,
  WebACLUpdate$,
  XssMatchSet$,
  XssMatchSetSummary$,
  XssMatchSetUpdate$,
  XssMatchTuple$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WAFRegionalClient === "function");
assert(typeof WAFRegional === "function");
// commands
assert(typeof AssociateWebACLCommand === "function");
assert(typeof AssociateWebACL$ === "object");
assert(typeof CreateByteMatchSetCommand === "function");
assert(typeof CreateByteMatchSet$ === "object");
assert(typeof CreateGeoMatchSetCommand === "function");
assert(typeof CreateGeoMatchSet$ === "object");
assert(typeof CreateIPSetCommand === "function");
assert(typeof CreateIPSet$ === "object");
assert(typeof CreateRateBasedRuleCommand === "function");
assert(typeof CreateRateBasedRule$ === "object");
assert(typeof CreateRegexMatchSetCommand === "function");
assert(typeof CreateRegexMatchSet$ === "object");
assert(typeof CreateRegexPatternSetCommand === "function");
assert(typeof CreateRegexPatternSet$ === "object");
assert(typeof CreateRuleCommand === "function");
assert(typeof CreateRule$ === "object");
assert(typeof CreateRuleGroupCommand === "function");
assert(typeof CreateRuleGroup$ === "object");
assert(typeof CreateSizeConstraintSetCommand === "function");
assert(typeof CreateSizeConstraintSet$ === "object");
assert(typeof CreateSqlInjectionMatchSetCommand === "function");
assert(typeof CreateSqlInjectionMatchSet$ === "object");
assert(typeof CreateWebACLCommand === "function");
assert(typeof CreateWebACL$ === "object");
assert(typeof CreateWebACLMigrationStackCommand === "function");
assert(typeof CreateWebACLMigrationStack$ === "object");
assert(typeof CreateXssMatchSetCommand === "function");
assert(typeof CreateXssMatchSet$ === "object");
assert(typeof DeleteByteMatchSetCommand === "function");
assert(typeof DeleteByteMatchSet$ === "object");
assert(typeof DeleteGeoMatchSetCommand === "function");
assert(typeof DeleteGeoMatchSet$ === "object");
assert(typeof DeleteIPSetCommand === "function");
assert(typeof DeleteIPSet$ === "object");
assert(typeof DeleteLoggingConfigurationCommand === "function");
assert(typeof DeleteLoggingConfiguration$ === "object");
assert(typeof DeletePermissionPolicyCommand === "function");
assert(typeof DeletePermissionPolicy$ === "object");
assert(typeof DeleteRateBasedRuleCommand === "function");
assert(typeof DeleteRateBasedRule$ === "object");
assert(typeof DeleteRegexMatchSetCommand === "function");
assert(typeof DeleteRegexMatchSet$ === "object");
assert(typeof DeleteRegexPatternSetCommand === "function");
assert(typeof DeleteRegexPatternSet$ === "object");
assert(typeof DeleteRuleCommand === "function");
assert(typeof DeleteRule$ === "object");
assert(typeof DeleteRuleGroupCommand === "function");
assert(typeof DeleteRuleGroup$ === "object");
assert(typeof DeleteSizeConstraintSetCommand === "function");
assert(typeof DeleteSizeConstraintSet$ === "object");
assert(typeof DeleteSqlInjectionMatchSetCommand === "function");
assert(typeof DeleteSqlInjectionMatchSet$ === "object");
assert(typeof DeleteWebACLCommand === "function");
assert(typeof DeleteWebACL$ === "object");
assert(typeof DeleteXssMatchSetCommand === "function");
assert(typeof DeleteXssMatchSet$ === "object");
assert(typeof DisassociateWebACLCommand === "function");
assert(typeof DisassociateWebACL$ === "object");
assert(typeof GetByteMatchSetCommand === "function");
assert(typeof GetByteMatchSet$ === "object");
assert(typeof GetChangeTokenCommand === "function");
assert(typeof GetChangeToken$ === "object");
assert(typeof GetChangeTokenStatusCommand === "function");
assert(typeof GetChangeTokenStatus$ === "object");
assert(typeof GetGeoMatchSetCommand === "function");
assert(typeof GetGeoMatchSet$ === "object");
assert(typeof GetIPSetCommand === "function");
assert(typeof GetIPSet$ === "object");
assert(typeof GetLoggingConfigurationCommand === "function");
assert(typeof GetLoggingConfiguration$ === "object");
assert(typeof GetPermissionPolicyCommand === "function");
assert(typeof GetPermissionPolicy$ === "object");
assert(typeof GetRateBasedRuleCommand === "function");
assert(typeof GetRateBasedRule$ === "object");
assert(typeof GetRateBasedRuleManagedKeysCommand === "function");
assert(typeof GetRateBasedRuleManagedKeys$ === "object");
assert(typeof GetRegexMatchSetCommand === "function");
assert(typeof GetRegexMatchSet$ === "object");
assert(typeof GetRegexPatternSetCommand === "function");
assert(typeof GetRegexPatternSet$ === "object");
assert(typeof GetRuleCommand === "function");
assert(typeof GetRule$ === "object");
assert(typeof GetRuleGroupCommand === "function");
assert(typeof GetRuleGroup$ === "object");
assert(typeof GetSampledRequestsCommand === "function");
assert(typeof GetSampledRequests$ === "object");
assert(typeof GetSizeConstraintSetCommand === "function");
assert(typeof GetSizeConstraintSet$ === "object");
assert(typeof GetSqlInjectionMatchSetCommand === "function");
assert(typeof GetSqlInjectionMatchSet$ === "object");
assert(typeof GetWebACLCommand === "function");
assert(typeof GetWebACL$ === "object");
assert(typeof GetWebACLForResourceCommand === "function");
assert(typeof GetWebACLForResource$ === "object");
assert(typeof GetXssMatchSetCommand === "function");
assert(typeof GetXssMatchSet$ === "object");
assert(typeof ListActivatedRulesInRuleGroupCommand === "function");
assert(typeof ListActivatedRulesInRuleGroup$ === "object");
assert(typeof ListByteMatchSetsCommand === "function");
assert(typeof ListByteMatchSets$ === "object");
assert(typeof ListGeoMatchSetsCommand === "function");
assert(typeof ListGeoMatchSets$ === "object");
assert(typeof ListIPSetsCommand === "function");
assert(typeof ListIPSets$ === "object");
assert(typeof ListLoggingConfigurationsCommand === "function");
assert(typeof ListLoggingConfigurations$ === "object");
assert(typeof ListRateBasedRulesCommand === "function");
assert(typeof ListRateBasedRules$ === "object");
assert(typeof ListRegexMatchSetsCommand === "function");
assert(typeof ListRegexMatchSets$ === "object");
assert(typeof ListRegexPatternSetsCommand === "function");
assert(typeof ListRegexPatternSets$ === "object");
assert(typeof ListResourcesForWebACLCommand === "function");
assert(typeof ListResourcesForWebACL$ === "object");
assert(typeof ListRuleGroupsCommand === "function");
assert(typeof ListRuleGroups$ === "object");
assert(typeof ListRulesCommand === "function");
assert(typeof ListRules$ === "object");
assert(typeof ListSizeConstraintSetsCommand === "function");
assert(typeof ListSizeConstraintSets$ === "object");
assert(typeof ListSqlInjectionMatchSetsCommand === "function");
assert(typeof ListSqlInjectionMatchSets$ === "object");
assert(typeof ListSubscribedRuleGroupsCommand === "function");
assert(typeof ListSubscribedRuleGroups$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWebACLsCommand === "function");
assert(typeof ListWebACLs$ === "object");
assert(typeof ListXssMatchSetsCommand === "function");
assert(typeof ListXssMatchSets$ === "object");
assert(typeof PutLoggingConfigurationCommand === "function");
assert(typeof PutLoggingConfiguration$ === "object");
assert(typeof PutPermissionPolicyCommand === "function");
assert(typeof PutPermissionPolicy$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateByteMatchSetCommand === "function");
assert(typeof UpdateByteMatchSet$ === "object");
assert(typeof UpdateGeoMatchSetCommand === "function");
assert(typeof UpdateGeoMatchSet$ === "object");
assert(typeof UpdateIPSetCommand === "function");
assert(typeof UpdateIPSet$ === "object");
assert(typeof UpdateRateBasedRuleCommand === "function");
assert(typeof UpdateRateBasedRule$ === "object");
assert(typeof UpdateRegexMatchSetCommand === "function");
assert(typeof UpdateRegexMatchSet$ === "object");
assert(typeof UpdateRegexPatternSetCommand === "function");
assert(typeof UpdateRegexPatternSet$ === "object");
assert(typeof UpdateRuleCommand === "function");
assert(typeof UpdateRule$ === "object");
assert(typeof UpdateRuleGroupCommand === "function");
assert(typeof UpdateRuleGroup$ === "object");
assert(typeof UpdateSizeConstraintSetCommand === "function");
assert(typeof UpdateSizeConstraintSet$ === "object");
assert(typeof UpdateSqlInjectionMatchSetCommand === "function");
assert(typeof UpdateSqlInjectionMatchSet$ === "object");
assert(typeof UpdateWebACLCommand === "function");
assert(typeof UpdateWebACL$ === "object");
assert(typeof UpdateXssMatchSetCommand === "function");
assert(typeof UpdateXssMatchSet$ === "object");
// structural schemas
assert(typeof ActivatedRule$ === "object");
assert(typeof AssociateWebACLRequest$ === "object");
assert(typeof AssociateWebACLResponse$ === "object");
assert(typeof ByteMatchSet$ === "object");
assert(typeof ByteMatchSetSummary$ === "object");
assert(typeof ByteMatchSetUpdate$ === "object");
assert(typeof ByteMatchTuple$ === "object");
assert(typeof CreateByteMatchSetRequest$ === "object");
assert(typeof CreateByteMatchSetResponse$ === "object");
assert(typeof CreateGeoMatchSetRequest$ === "object");
assert(typeof CreateGeoMatchSetResponse$ === "object");
assert(typeof CreateIPSetRequest$ === "object");
assert(typeof CreateIPSetResponse$ === "object");
assert(typeof CreateRateBasedRuleRequest$ === "object");
assert(typeof CreateRateBasedRuleResponse$ === "object");
assert(typeof CreateRegexMatchSetRequest$ === "object");
assert(typeof CreateRegexMatchSetResponse$ === "object");
assert(typeof CreateRegexPatternSetRequest$ === "object");
assert(typeof CreateRegexPatternSetResponse$ === "object");
assert(typeof CreateRuleGroupRequest$ === "object");
assert(typeof CreateRuleGroupResponse$ === "object");
assert(typeof CreateRuleRequest$ === "object");
assert(typeof CreateRuleResponse$ === "object");
assert(typeof CreateSizeConstraintSetRequest$ === "object");
assert(typeof CreateSizeConstraintSetResponse$ === "object");
assert(typeof CreateSqlInjectionMatchSetRequest$ === "object");
assert(typeof CreateSqlInjectionMatchSetResponse$ === "object");
assert(typeof CreateWebACLMigrationStackRequest$ === "object");
assert(typeof CreateWebACLMigrationStackResponse$ === "object");
assert(typeof CreateWebACLRequest$ === "object");
assert(typeof CreateWebACLResponse$ === "object");
assert(typeof CreateXssMatchSetRequest$ === "object");
assert(typeof CreateXssMatchSetResponse$ === "object");
assert(typeof DeleteByteMatchSetRequest$ === "object");
assert(typeof DeleteByteMatchSetResponse$ === "object");
assert(typeof DeleteGeoMatchSetRequest$ === "object");
assert(typeof DeleteGeoMatchSetResponse$ === "object");
assert(typeof DeleteIPSetRequest$ === "object");
assert(typeof DeleteIPSetResponse$ === "object");
assert(typeof DeleteLoggingConfigurationRequest$ === "object");
assert(typeof DeleteLoggingConfigurationResponse$ === "object");
assert(typeof DeletePermissionPolicyRequest$ === "object");
assert(typeof DeletePermissionPolicyResponse$ === "object");
assert(typeof DeleteRateBasedRuleRequest$ === "object");
assert(typeof DeleteRateBasedRuleResponse$ === "object");
assert(typeof DeleteRegexMatchSetRequest$ === "object");
assert(typeof DeleteRegexMatchSetResponse$ === "object");
assert(typeof DeleteRegexPatternSetRequest$ === "object");
assert(typeof DeleteRegexPatternSetResponse$ === "object");
assert(typeof DeleteRuleGroupRequest$ === "object");
assert(typeof DeleteRuleGroupResponse$ === "object");
assert(typeof DeleteRuleRequest$ === "object");
assert(typeof DeleteRuleResponse$ === "object");
assert(typeof DeleteSizeConstraintSetRequest$ === "object");
assert(typeof DeleteSizeConstraintSetResponse$ === "object");
assert(typeof DeleteSqlInjectionMatchSetRequest$ === "object");
assert(typeof DeleteSqlInjectionMatchSetResponse$ === "object");
assert(typeof DeleteWebACLRequest$ === "object");
assert(typeof DeleteWebACLResponse$ === "object");
assert(typeof DeleteXssMatchSetRequest$ === "object");
assert(typeof DeleteXssMatchSetResponse$ === "object");
assert(typeof DisassociateWebACLRequest$ === "object");
assert(typeof DisassociateWebACLResponse$ === "object");
assert(typeof ExcludedRule$ === "object");
assert(typeof FieldToMatch$ === "object");
assert(typeof GeoMatchConstraint$ === "object");
assert(typeof GeoMatchSet$ === "object");
assert(typeof GeoMatchSetSummary$ === "object");
assert(typeof GeoMatchSetUpdate$ === "object");
assert(typeof GetByteMatchSetRequest$ === "object");
assert(typeof GetByteMatchSetResponse$ === "object");
assert(typeof GetChangeTokenRequest$ === "object");
assert(typeof GetChangeTokenResponse$ === "object");
assert(typeof GetChangeTokenStatusRequest$ === "object");
assert(typeof GetChangeTokenStatusResponse$ === "object");
assert(typeof GetGeoMatchSetRequest$ === "object");
assert(typeof GetGeoMatchSetResponse$ === "object");
assert(typeof GetIPSetRequest$ === "object");
assert(typeof GetIPSetResponse$ === "object");
assert(typeof GetLoggingConfigurationRequest$ === "object");
assert(typeof GetLoggingConfigurationResponse$ === "object");
assert(typeof GetPermissionPolicyRequest$ === "object");
assert(typeof GetPermissionPolicyResponse$ === "object");
assert(typeof GetRateBasedRuleManagedKeysRequest$ === "object");
assert(typeof GetRateBasedRuleManagedKeysResponse$ === "object");
assert(typeof GetRateBasedRuleRequest$ === "object");
assert(typeof GetRateBasedRuleResponse$ === "object");
assert(typeof GetRegexMatchSetRequest$ === "object");
assert(typeof GetRegexMatchSetResponse$ === "object");
assert(typeof GetRegexPatternSetRequest$ === "object");
assert(typeof GetRegexPatternSetResponse$ === "object");
assert(typeof GetRuleGroupRequest$ === "object");
assert(typeof GetRuleGroupResponse$ === "object");
assert(typeof GetRuleRequest$ === "object");
assert(typeof GetRuleResponse$ === "object");
assert(typeof GetSampledRequestsRequest$ === "object");
assert(typeof GetSampledRequestsResponse$ === "object");
assert(typeof GetSizeConstraintSetRequest$ === "object");
assert(typeof GetSizeConstraintSetResponse$ === "object");
assert(typeof GetSqlInjectionMatchSetRequest$ === "object");
assert(typeof GetSqlInjectionMatchSetResponse$ === "object");
assert(typeof GetWebACLForResourceRequest$ === "object");
assert(typeof GetWebACLForResourceResponse$ === "object");
assert(typeof GetWebACLRequest$ === "object");
assert(typeof GetWebACLResponse$ === "object");
assert(typeof GetXssMatchSetRequest$ === "object");
assert(typeof GetXssMatchSetResponse$ === "object");
assert(typeof HTTPHeader$ === "object");
assert(typeof HTTPRequest$ === "object");
assert(typeof IPSet$ === "object");
assert(typeof IPSetDescriptor$ === "object");
assert(typeof IPSetSummary$ === "object");
assert(typeof IPSetUpdate$ === "object");
assert(typeof ListActivatedRulesInRuleGroupRequest$ === "object");
assert(typeof ListActivatedRulesInRuleGroupResponse$ === "object");
assert(typeof ListByteMatchSetsRequest$ === "object");
assert(typeof ListByteMatchSetsResponse$ === "object");
assert(typeof ListGeoMatchSetsRequest$ === "object");
assert(typeof ListGeoMatchSetsResponse$ === "object");
assert(typeof ListIPSetsRequest$ === "object");
assert(typeof ListIPSetsResponse$ === "object");
assert(typeof ListLoggingConfigurationsRequest$ === "object");
assert(typeof ListLoggingConfigurationsResponse$ === "object");
assert(typeof ListRateBasedRulesRequest$ === "object");
assert(typeof ListRateBasedRulesResponse$ === "object");
assert(typeof ListRegexMatchSetsRequest$ === "object");
assert(typeof ListRegexMatchSetsResponse$ === "object");
assert(typeof ListRegexPatternSetsRequest$ === "object");
assert(typeof ListRegexPatternSetsResponse$ === "object");
assert(typeof ListResourcesForWebACLRequest$ === "object");
assert(typeof ListResourcesForWebACLResponse$ === "object");
assert(typeof ListRuleGroupsRequest$ === "object");
assert(typeof ListRuleGroupsResponse$ === "object");
assert(typeof ListRulesRequest$ === "object");
assert(typeof ListRulesResponse$ === "object");
assert(typeof ListSizeConstraintSetsRequest$ === "object");
assert(typeof ListSizeConstraintSetsResponse$ === "object");
assert(typeof ListSqlInjectionMatchSetsRequest$ === "object");
assert(typeof ListSqlInjectionMatchSetsResponse$ === "object");
assert(typeof ListSubscribedRuleGroupsRequest$ === "object");
assert(typeof ListSubscribedRuleGroupsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListWebACLsRequest$ === "object");
assert(typeof ListWebACLsResponse$ === "object");
assert(typeof ListXssMatchSetsRequest$ === "object");
assert(typeof ListXssMatchSetsResponse$ === "object");
assert(typeof LoggingConfiguration$ === "object");
assert(typeof Predicate$ === "object");
assert(typeof PutLoggingConfigurationRequest$ === "object");
assert(typeof PutLoggingConfigurationResponse$ === "object");
assert(typeof PutPermissionPolicyRequest$ === "object");
assert(typeof PutPermissionPolicyResponse$ === "object");
assert(typeof RateBasedRule$ === "object");
assert(typeof RegexMatchSet$ === "object");
assert(typeof RegexMatchSetSummary$ === "object");
assert(typeof RegexMatchSetUpdate$ === "object");
assert(typeof RegexMatchTuple$ === "object");
assert(typeof RegexPatternSet$ === "object");
assert(typeof RegexPatternSetSummary$ === "object");
assert(typeof RegexPatternSetUpdate$ === "object");
assert(typeof Rule$ === "object");
assert(typeof RuleGroup$ === "object");
assert(typeof RuleGroupSummary$ === "object");
assert(typeof RuleGroupUpdate$ === "object");
assert(typeof RuleSummary$ === "object");
assert(typeof RuleUpdate$ === "object");
assert(typeof SampledHTTPRequest$ === "object");
assert(typeof SizeConstraint$ === "object");
assert(typeof SizeConstraintSet$ === "object");
assert(typeof SizeConstraintSetSummary$ === "object");
assert(typeof SizeConstraintSetUpdate$ === "object");
assert(typeof SqlInjectionMatchSet$ === "object");
assert(typeof SqlInjectionMatchSetSummary$ === "object");
assert(typeof SqlInjectionMatchSetUpdate$ === "object");
assert(typeof SqlInjectionMatchTuple$ === "object");
assert(typeof SubscribedRuleGroupSummary$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagInfoForResource$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TimeWindow$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateByteMatchSetRequest$ === "object");
assert(typeof UpdateByteMatchSetResponse$ === "object");
assert(typeof UpdateGeoMatchSetRequest$ === "object");
assert(typeof UpdateGeoMatchSetResponse$ === "object");
assert(typeof UpdateIPSetRequest$ === "object");
assert(typeof UpdateIPSetResponse$ === "object");
assert(typeof UpdateRateBasedRuleRequest$ === "object");
assert(typeof UpdateRateBasedRuleResponse$ === "object");
assert(typeof UpdateRegexMatchSetRequest$ === "object");
assert(typeof UpdateRegexMatchSetResponse$ === "object");
assert(typeof UpdateRegexPatternSetRequest$ === "object");
assert(typeof UpdateRegexPatternSetResponse$ === "object");
assert(typeof UpdateRuleGroupRequest$ === "object");
assert(typeof UpdateRuleGroupResponse$ === "object");
assert(typeof UpdateRuleRequest$ === "object");
assert(typeof UpdateRuleResponse$ === "object");
assert(typeof UpdateSizeConstraintSetRequest$ === "object");
assert(typeof UpdateSizeConstraintSetResponse$ === "object");
assert(typeof UpdateSqlInjectionMatchSetRequest$ === "object");
assert(typeof UpdateSqlInjectionMatchSetResponse$ === "object");
assert(typeof UpdateWebACLRequest$ === "object");
assert(typeof UpdateWebACLResponse$ === "object");
assert(typeof UpdateXssMatchSetRequest$ === "object");
assert(typeof UpdateXssMatchSetResponse$ === "object");
assert(typeof WafAction$ === "object");
assert(typeof WafOverrideAction$ === "object");
assert(typeof WebACL$ === "object");
assert(typeof WebACLSummary$ === "object");
assert(typeof WebACLUpdate$ === "object");
assert(typeof XssMatchSet$ === "object");
assert(typeof XssMatchSetSummary$ === "object");
assert(typeof XssMatchSetUpdate$ === "object");
assert(typeof XssMatchTuple$ === "object");
// enums
assert(typeof ChangeAction === "object");
assert(typeof ChangeTokenStatus === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof GeoMatchConstraintType === "object");
assert(typeof GeoMatchConstraintValue === "object");
assert(typeof IPSetDescriptorType === "object");
assert(typeof MatchFieldType === "object");
assert(typeof MigrationErrorType === "object");
assert(typeof ParameterExceptionField === "object");
assert(typeof ParameterExceptionReason === "object");
assert(typeof PositionalConstraint === "object");
assert(typeof PredicateType === "object");
assert(typeof RateKey === "object");
assert(typeof ResourceType === "object");
assert(typeof TextTransformation === "object");
assert(typeof WafActionType === "object");
assert(typeof WafOverrideActionType === "object");
assert(typeof WafRuleType === "object");
// errors
assert(WAFBadRequestException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFBadRequestException$ === "object");
assert(WAFDisallowedNameException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFDisallowedNameException$ === "object");
assert(WAFEntityMigrationException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFEntityMigrationException$ === "object");
assert(WAFInternalErrorException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFInternalErrorException$ === "object");
assert(WAFInvalidAccountException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFInvalidAccountException$ === "object");
assert(WAFInvalidOperationException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFInvalidOperationException$ === "object");
assert(WAFInvalidParameterException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFInvalidParameterException$ === "object");
assert(WAFInvalidPermissionPolicyException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFInvalidPermissionPolicyException$ === "object");
assert(WAFInvalidRegexPatternException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFInvalidRegexPatternException$ === "object");
assert(WAFLimitsExceededException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFLimitsExceededException$ === "object");
assert(WAFNonEmptyEntityException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFNonEmptyEntityException$ === "object");
assert(WAFNonexistentContainerException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFNonexistentContainerException$ === "object");
assert(WAFNonexistentItemException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFNonexistentItemException$ === "object");
assert(WAFReferencedItemException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFReferencedItemException$ === "object");
assert(WAFServiceLinkedRoleErrorException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFServiceLinkedRoleErrorException$ === "object");
assert(WAFStaleDataException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFStaleDataException$ === "object");
assert(WAFSubscriptionNotFoundException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFSubscriptionNotFoundException$ === "object");
assert(WAFTagOperationException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFTagOperationException$ === "object");
assert(WAFTagOperationInternalErrorException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFTagOperationInternalErrorException$ === "object");
assert(WAFUnavailableEntityException.prototype instanceof WAFRegionalServiceException);
assert(typeof WAFUnavailableEntityException$ === "object");
assert(WAFRegionalServiceException.prototype instanceof Error);
console.log(`WAFRegional index test passed.`);
