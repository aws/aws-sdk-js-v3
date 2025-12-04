import {
  ActionValue,
  AssociateWebACLCommand,
  AssociatedResourceType,
  BodyParsingFallbackBehavior,
  CheckCapacityCommand,
  ComparisonOperator,
  CountryCode,
  CreateAPIKeyCommand,
  CreateIPSetCommand,
  CreateRegexPatternSetCommand,
  CreateRuleGroupCommand,
  CreateWebACLCommand,
  DataProtectionAction,
  DeleteAPIKeyCommand,
  DeleteFirewallManagerRuleGroupsCommand,
  DeleteIPSetCommand,
  DeleteLoggingConfigurationCommand,
  DeletePermissionPolicyCommand,
  DeleteRegexPatternSetCommand,
  DeleteRuleGroupCommand,
  DeleteWebACLCommand,
  DescribeAllManagedProductsCommand,
  DescribeManagedProductsByVendorCommand,
  DescribeManagedRuleGroupCommand,
  DisassociateWebACLCommand,
  FailureReason,
  FallbackBehavior,
  FieldToProtectType,
  FilterBehavior,
  FilterRequirement,
  ForwardedIPPosition,
  GenerateMobileSdkReleaseUrlCommand,
  GetDecryptedAPIKeyCommand,
  GetIPSetCommand,
  GetLoggingConfigurationCommand,
  GetManagedRuleSetCommand,
  GetMobileSdkReleaseCommand,
  GetPermissionPolicyCommand,
  GetRateBasedStatementManagedKeysCommand,
  GetRegexPatternSetCommand,
  GetRuleGroupCommand,
  GetSampledRequestsCommand,
  GetWebACLCommand,
  GetWebACLForResourceCommand,
  IPAddressVersion,
  InspectionLevel,
  JsonMatchScope,
  LabelMatchScope,
  ListAPIKeysCommand,
  ListAvailableManagedRuleGroupVersionsCommand,
  ListAvailableManagedRuleGroupsCommand,
  ListIPSetsCommand,
  ListLoggingConfigurationsCommand,
  ListManagedRuleSetsCommand,
  ListMobileSdkReleasesCommand,
  ListRegexPatternSetsCommand,
  ListResourcesForWebACLCommand,
  ListRuleGroupsCommand,
  ListTagsForResourceCommand,
  ListWebACLsCommand,
  LogScope,
  LogType,
  LowReputationMode,
  MapMatchScope,
  OversizeHandling,
  PayloadType,
  Platform,
  PositionalConstraint,
  PutLoggingConfigurationCommand,
  PutManagedRuleSetVersionsCommand,
  PutPermissionPolicyCommand,
  RateBasedStatementAggregateKeyType,
  ResourceType,
  ResponseContentType,
  Scope,
  SensitivityLevel,
  SensitivityToAct,
  SizeInspectionLimit,
  TagResourceCommand,
  TextTransformationType,
  UntagResourceCommand,
  UpdateIPSetCommand,
  UpdateManagedRuleSetVersionExpiryDateCommand,
  UpdateRegexPatternSetCommand,
  UpdateRuleGroupCommand,
  UpdateWebACLCommand,
  UsageOfAction,
  WAFV2,
  WAFV2Client,
  WAFV2ServiceException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WAFV2Client === "function");
assert(typeof WAFV2 === "function");
// commands
assert(typeof AssociateWebACLCommand === "function");
assert(typeof CheckCapacityCommand === "function");
assert(typeof CreateAPIKeyCommand === "function");
assert(typeof CreateIPSetCommand === "function");
assert(typeof CreateRegexPatternSetCommand === "function");
assert(typeof CreateRuleGroupCommand === "function");
assert(typeof CreateWebACLCommand === "function");
assert(typeof DeleteAPIKeyCommand === "function");
assert(typeof DeleteFirewallManagerRuleGroupsCommand === "function");
assert(typeof DeleteIPSetCommand === "function");
assert(typeof DeleteLoggingConfigurationCommand === "function");
assert(typeof DeletePermissionPolicyCommand === "function");
assert(typeof DeleteRegexPatternSetCommand === "function");
assert(typeof DeleteRuleGroupCommand === "function");
assert(typeof DeleteWebACLCommand === "function");
assert(typeof DescribeAllManagedProductsCommand === "function");
assert(typeof DescribeManagedProductsByVendorCommand === "function");
assert(typeof DescribeManagedRuleGroupCommand === "function");
assert(typeof DisassociateWebACLCommand === "function");
assert(typeof GenerateMobileSdkReleaseUrlCommand === "function");
assert(typeof GetDecryptedAPIKeyCommand === "function");
assert(typeof GetIPSetCommand === "function");
assert(typeof GetLoggingConfigurationCommand === "function");
assert(typeof GetManagedRuleSetCommand === "function");
assert(typeof GetMobileSdkReleaseCommand === "function");
assert(typeof GetPermissionPolicyCommand === "function");
assert(typeof GetRateBasedStatementManagedKeysCommand === "function");
assert(typeof GetRegexPatternSetCommand === "function");
assert(typeof GetRuleGroupCommand === "function");
assert(typeof GetSampledRequestsCommand === "function");
assert(typeof GetWebACLCommand === "function");
assert(typeof GetWebACLForResourceCommand === "function");
assert(typeof ListAPIKeysCommand === "function");
assert(typeof ListAvailableManagedRuleGroupsCommand === "function");
assert(typeof ListAvailableManagedRuleGroupVersionsCommand === "function");
assert(typeof ListIPSetsCommand === "function");
assert(typeof ListLoggingConfigurationsCommand === "function");
assert(typeof ListManagedRuleSetsCommand === "function");
assert(typeof ListMobileSdkReleasesCommand === "function");
assert(typeof ListRegexPatternSetsCommand === "function");
assert(typeof ListResourcesForWebACLCommand === "function");
assert(typeof ListRuleGroupsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListWebACLsCommand === "function");
assert(typeof PutLoggingConfigurationCommand === "function");
assert(typeof PutManagedRuleSetVersionsCommand === "function");
assert(typeof PutPermissionPolicyCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateIPSetCommand === "function");
assert(typeof UpdateManagedRuleSetVersionExpiryDateCommand === "function");
assert(typeof UpdateRegexPatternSetCommand === "function");
assert(typeof UpdateRuleGroupCommand === "function");
assert(typeof UpdateWebACLCommand === "function");
// enums
assert(typeof ActionValue === "object");
assert(typeof AssociatedResourceType === "object");
assert(typeof BodyParsingFallbackBehavior === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof CountryCode === "object");
assert(typeof DataProtectionAction === "object");
assert(typeof FailureReason === "object");
assert(typeof FallbackBehavior === "object");
assert(typeof FieldToProtectType === "object");
assert(typeof FilterBehavior === "object");
assert(typeof FilterRequirement === "object");
assert(typeof ForwardedIPPosition === "object");
assert(typeof InspectionLevel === "object");
assert(typeof IPAddressVersion === "object");
assert(typeof JsonMatchScope === "object");
assert(typeof LabelMatchScope === "object");
assert(typeof LogScope === "object");
assert(typeof LogType === "object");
assert(typeof LowReputationMode === "object");
assert(typeof MapMatchScope === "object");
assert(typeof OversizeHandling === "object");
assert(typeof PayloadType === "object");
assert(typeof Platform === "object");
assert(typeof PositionalConstraint === "object");
assert(typeof RateBasedStatementAggregateKeyType === "object");
assert(typeof ResourceType === "object");
assert(typeof ResponseContentType === "object");
assert(typeof Scope === "object");
assert(typeof SensitivityLevel === "object");
assert(typeof SensitivityToAct === "object");
assert(typeof SizeInspectionLimit === "object");
assert(typeof TextTransformationType === "object");
assert(typeof UsageOfAction === "object");
// errors
assert(WAFV2ServiceException.prototype instanceof Error);
console.log(`WAFV2 index test passed.`);
