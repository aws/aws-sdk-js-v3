import {
  AssociateWebACLCommand,
  ChangeAction,
  ChangeTokenStatus,
  ComparisonOperator,
  CreateByteMatchSetCommand,
  CreateGeoMatchSetCommand,
  CreateIPSetCommand,
  CreateRateBasedRuleCommand,
  CreateRegexMatchSetCommand,
  CreateRegexPatternSetCommand,
  CreateRuleCommand,
  CreateRuleGroupCommand,
  CreateSizeConstraintSetCommand,
  CreateSqlInjectionMatchSetCommand,
  CreateWebACLCommand,
  CreateWebACLMigrationStackCommand,
  CreateXssMatchSetCommand,
  DeleteByteMatchSetCommand,
  DeleteGeoMatchSetCommand,
  DeleteIPSetCommand,
  DeleteLoggingConfigurationCommand,
  DeletePermissionPolicyCommand,
  DeleteRateBasedRuleCommand,
  DeleteRegexMatchSetCommand,
  DeleteRegexPatternSetCommand,
  DeleteRuleCommand,
  DeleteRuleGroupCommand,
  DeleteSizeConstraintSetCommand,
  DeleteSqlInjectionMatchSetCommand,
  DeleteWebACLCommand,
  DeleteXssMatchSetCommand,
  DisassociateWebACLCommand,
  GeoMatchConstraintType,
  GeoMatchConstraintValue,
  GetByteMatchSetCommand,
  GetChangeTokenCommand,
  GetChangeTokenStatusCommand,
  GetGeoMatchSetCommand,
  GetIPSetCommand,
  GetLoggingConfigurationCommand,
  GetPermissionPolicyCommand,
  GetRateBasedRuleCommand,
  GetRateBasedRuleManagedKeysCommand,
  GetRegexMatchSetCommand,
  GetRegexPatternSetCommand,
  GetRuleCommand,
  GetRuleGroupCommand,
  GetSampledRequestsCommand,
  GetSizeConstraintSetCommand,
  GetSqlInjectionMatchSetCommand,
  GetWebACLCommand,
  GetWebACLForResourceCommand,
  GetXssMatchSetCommand,
  IPSetDescriptorType,
  ListActivatedRulesInRuleGroupCommand,
  ListByteMatchSetsCommand,
  ListGeoMatchSetsCommand,
  ListIPSetsCommand,
  ListLoggingConfigurationsCommand,
  ListRateBasedRulesCommand,
  ListRegexMatchSetsCommand,
  ListRegexPatternSetsCommand,
  ListResourcesForWebACLCommand,
  ListRuleGroupsCommand,
  ListRulesCommand,
  ListSizeConstraintSetsCommand,
  ListSqlInjectionMatchSetsCommand,
  ListSubscribedRuleGroupsCommand,
  ListTagsForResourceCommand,
  ListWebACLsCommand,
  ListXssMatchSetsCommand,
  MatchFieldType,
  MigrationErrorType,
  ParameterExceptionField,
  ParameterExceptionReason,
  PositionalConstraint,
  PredicateType,
  PutLoggingConfigurationCommand,
  PutPermissionPolicyCommand,
  RateKey,
  ResourceType,
  TagResourceCommand,
  TextTransformation,
  UntagResourceCommand,
  UpdateByteMatchSetCommand,
  UpdateGeoMatchSetCommand,
  UpdateIPSetCommand,
  UpdateRateBasedRuleCommand,
  UpdateRegexMatchSetCommand,
  UpdateRegexPatternSetCommand,
  UpdateRuleCommand,
  UpdateRuleGroupCommand,
  UpdateSizeConstraintSetCommand,
  UpdateSqlInjectionMatchSetCommand,
  UpdateWebACLCommand,
  UpdateXssMatchSetCommand,
  WAFBadRequestException,
  WAFDisallowedNameException,
  WAFEntityMigrationException,
  WAFInternalErrorException,
  WAFInvalidAccountException,
  WAFInvalidOperationException,
  WAFInvalidParameterException,
  WAFInvalidPermissionPolicyException,
  WAFInvalidRegexPatternException,
  WAFLimitsExceededException,
  WAFNonEmptyEntityException,
  WAFNonexistentContainerException,
  WAFNonexistentItemException,
  WAFReferencedItemException,
  WAFRegional,
  WAFRegionalClient,
  WAFRegionalServiceException,
  WAFServiceLinkedRoleErrorException,
  WAFStaleDataException,
  WAFSubscriptionNotFoundException,
  WAFTagOperationException,
  WAFTagOperationInternalErrorException,
  WAFUnavailableEntityException,
  WafActionType,
  WafOverrideActionType,
  WafRuleType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WAFRegionalClient === "function");
assert(typeof WAFRegional === "function");
// commands
assert(typeof AssociateWebACLCommand === "function");
assert(typeof CreateByteMatchSetCommand === "function");
assert(typeof CreateGeoMatchSetCommand === "function");
assert(typeof CreateIPSetCommand === "function");
assert(typeof CreateRateBasedRuleCommand === "function");
assert(typeof CreateRegexMatchSetCommand === "function");
assert(typeof CreateRegexPatternSetCommand === "function");
assert(typeof CreateRuleCommand === "function");
assert(typeof CreateRuleGroupCommand === "function");
assert(typeof CreateSizeConstraintSetCommand === "function");
assert(typeof CreateSqlInjectionMatchSetCommand === "function");
assert(typeof CreateWebACLCommand === "function");
assert(typeof CreateWebACLMigrationStackCommand === "function");
assert(typeof CreateXssMatchSetCommand === "function");
assert(typeof DeleteByteMatchSetCommand === "function");
assert(typeof DeleteGeoMatchSetCommand === "function");
assert(typeof DeleteIPSetCommand === "function");
assert(typeof DeleteLoggingConfigurationCommand === "function");
assert(typeof DeletePermissionPolicyCommand === "function");
assert(typeof DeleteRateBasedRuleCommand === "function");
assert(typeof DeleteRegexMatchSetCommand === "function");
assert(typeof DeleteRegexPatternSetCommand === "function");
assert(typeof DeleteRuleCommand === "function");
assert(typeof DeleteRuleGroupCommand === "function");
assert(typeof DeleteSizeConstraintSetCommand === "function");
assert(typeof DeleteSqlInjectionMatchSetCommand === "function");
assert(typeof DeleteWebACLCommand === "function");
assert(typeof DeleteXssMatchSetCommand === "function");
assert(typeof DisassociateWebACLCommand === "function");
assert(typeof GetByteMatchSetCommand === "function");
assert(typeof GetChangeTokenCommand === "function");
assert(typeof GetChangeTokenStatusCommand === "function");
assert(typeof GetGeoMatchSetCommand === "function");
assert(typeof GetIPSetCommand === "function");
assert(typeof GetLoggingConfigurationCommand === "function");
assert(typeof GetPermissionPolicyCommand === "function");
assert(typeof GetRateBasedRuleCommand === "function");
assert(typeof GetRateBasedRuleManagedKeysCommand === "function");
assert(typeof GetRegexMatchSetCommand === "function");
assert(typeof GetRegexPatternSetCommand === "function");
assert(typeof GetRuleCommand === "function");
assert(typeof GetRuleGroupCommand === "function");
assert(typeof GetSampledRequestsCommand === "function");
assert(typeof GetSizeConstraintSetCommand === "function");
assert(typeof GetSqlInjectionMatchSetCommand === "function");
assert(typeof GetWebACLCommand === "function");
assert(typeof GetWebACLForResourceCommand === "function");
assert(typeof GetXssMatchSetCommand === "function");
assert(typeof ListActivatedRulesInRuleGroupCommand === "function");
assert(typeof ListByteMatchSetsCommand === "function");
assert(typeof ListGeoMatchSetsCommand === "function");
assert(typeof ListIPSetsCommand === "function");
assert(typeof ListLoggingConfigurationsCommand === "function");
assert(typeof ListRateBasedRulesCommand === "function");
assert(typeof ListRegexMatchSetsCommand === "function");
assert(typeof ListRegexPatternSetsCommand === "function");
assert(typeof ListResourcesForWebACLCommand === "function");
assert(typeof ListRuleGroupsCommand === "function");
assert(typeof ListRulesCommand === "function");
assert(typeof ListSizeConstraintSetsCommand === "function");
assert(typeof ListSqlInjectionMatchSetsCommand === "function");
assert(typeof ListSubscribedRuleGroupsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListWebACLsCommand === "function");
assert(typeof ListXssMatchSetsCommand === "function");
assert(typeof PutLoggingConfigurationCommand === "function");
assert(typeof PutPermissionPolicyCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateByteMatchSetCommand === "function");
assert(typeof UpdateGeoMatchSetCommand === "function");
assert(typeof UpdateIPSetCommand === "function");
assert(typeof UpdateRateBasedRuleCommand === "function");
assert(typeof UpdateRegexMatchSetCommand === "function");
assert(typeof UpdateRegexPatternSetCommand === "function");
assert(typeof UpdateRuleCommand === "function");
assert(typeof UpdateRuleGroupCommand === "function");
assert(typeof UpdateSizeConstraintSetCommand === "function");
assert(typeof UpdateSqlInjectionMatchSetCommand === "function");
assert(typeof UpdateWebACLCommand === "function");
assert(typeof UpdateXssMatchSetCommand === "function");
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
assert(WAFDisallowedNameException.prototype instanceof WAFRegionalServiceException);
assert(WAFEntityMigrationException.prototype instanceof WAFRegionalServiceException);
assert(WAFInternalErrorException.prototype instanceof WAFRegionalServiceException);
assert(WAFInvalidAccountException.prototype instanceof WAFRegionalServiceException);
assert(WAFInvalidOperationException.prototype instanceof WAFRegionalServiceException);
assert(WAFInvalidParameterException.prototype instanceof WAFRegionalServiceException);
assert(WAFInvalidPermissionPolicyException.prototype instanceof WAFRegionalServiceException);
assert(WAFInvalidRegexPatternException.prototype instanceof WAFRegionalServiceException);
assert(WAFLimitsExceededException.prototype instanceof WAFRegionalServiceException);
assert(WAFNonEmptyEntityException.prototype instanceof WAFRegionalServiceException);
assert(WAFNonexistentContainerException.prototype instanceof WAFRegionalServiceException);
assert(WAFNonexistentItemException.prototype instanceof WAFRegionalServiceException);
assert(WAFReferencedItemException.prototype instanceof WAFRegionalServiceException);
assert(WAFServiceLinkedRoleErrorException.prototype instanceof WAFRegionalServiceException);
assert(WAFStaleDataException.prototype instanceof WAFRegionalServiceException);
assert(WAFSubscriptionNotFoundException.prototype instanceof WAFRegionalServiceException);
assert(WAFTagOperationException.prototype instanceof WAFRegionalServiceException);
assert(WAFTagOperationInternalErrorException.prototype instanceof WAFRegionalServiceException);
assert(WAFUnavailableEntityException.prototype instanceof WAFRegionalServiceException);
assert(WAFRegionalServiceException.prototype instanceof Error);
console.log(`WAFRegional index test passed.`);
