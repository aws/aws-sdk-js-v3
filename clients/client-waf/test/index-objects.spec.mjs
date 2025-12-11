import {
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
  WAF,
  WAFBadRequestException,
  WAFClient,
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
  WAFServiceException,
  WAFServiceLinkedRoleErrorException,
  WAFStaleDataException,
  WAFSubscriptionNotFoundException,
  WAFTagOperationException,
  WAFTagOperationInternalErrorException,
  WafActionType,
  WafOverrideActionType,
  WafRuleType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WAFClient === "function");
assert(typeof WAF === "function");
// commands
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
assert(typeof GetXssMatchSetCommand === "function");
assert(typeof ListActivatedRulesInRuleGroupCommand === "function");
assert(typeof ListByteMatchSetsCommand === "function");
assert(typeof ListGeoMatchSetsCommand === "function");
assert(typeof ListIPSetsCommand === "function");
assert(typeof ListLoggingConfigurationsCommand === "function");
assert(typeof ListRateBasedRulesCommand === "function");
assert(typeof ListRegexMatchSetsCommand === "function");
assert(typeof ListRegexPatternSetsCommand === "function");
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
assert(typeof TextTransformation === "object");
assert(typeof WafActionType === "object");
assert(typeof WafOverrideActionType === "object");
assert(typeof WafRuleType === "object");
// errors
assert(WAFBadRequestException.prototype instanceof WAFServiceException);
assert(WAFDisallowedNameException.prototype instanceof WAFServiceException);
assert(WAFEntityMigrationException.prototype instanceof WAFServiceException);
assert(WAFInternalErrorException.prototype instanceof WAFServiceException);
assert(WAFInvalidAccountException.prototype instanceof WAFServiceException);
assert(WAFInvalidOperationException.prototype instanceof WAFServiceException);
assert(WAFInvalidParameterException.prototype instanceof WAFServiceException);
assert(WAFInvalidPermissionPolicyException.prototype instanceof WAFServiceException);
assert(WAFInvalidRegexPatternException.prototype instanceof WAFServiceException);
assert(WAFLimitsExceededException.prototype instanceof WAFServiceException);
assert(WAFNonEmptyEntityException.prototype instanceof WAFServiceException);
assert(WAFNonexistentContainerException.prototype instanceof WAFServiceException);
assert(WAFNonexistentItemException.prototype instanceof WAFServiceException);
assert(WAFReferencedItemException.prototype instanceof WAFServiceException);
assert(WAFServiceLinkedRoleErrorException.prototype instanceof WAFServiceException);
assert(WAFStaleDataException.prototype instanceof WAFServiceException);
assert(WAFSubscriptionNotFoundException.prototype instanceof WAFServiceException);
assert(WAFTagOperationException.prototype instanceof WAFServiceException);
assert(WAFTagOperationInternalErrorException.prototype instanceof WAFServiceException);
assert(WAFServiceException.prototype instanceof Error);
console.log(`WAF index test passed.`);
