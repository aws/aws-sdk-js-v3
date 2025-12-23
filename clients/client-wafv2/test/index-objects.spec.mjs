import {
  ActionCondition$,
  ActionValue,
  AddressField$,
  All$,
  AllowAction$,
  AllQueryArguments$,
  AndStatement$,
  APIKeySummary$,
  ApplicationAttribute$,
  ApplicationConfig$,
  AsnMatchStatement$,
  AssociatedResourceType,
  AssociateWebACL$,
  AssociateWebACLCommand,
  AssociateWebACLRequest$,
  AssociateWebACLResponse$,
  AssociationConfig$,
  AWSManagedRulesACFPRuleSet$,
  AWSManagedRulesAntiDDoSRuleSet$,
  AWSManagedRulesATPRuleSet$,
  AWSManagedRulesBotControlRuleSet$,
  BlockAction$,
  Body$,
  BodyParsingFallbackBehavior,
  ByteMatchStatement$,
  CaptchaAction$,
  CaptchaConfig$,
  CaptchaResponse$,
  ChallengeAction$,
  ChallengeConfig$,
  ChallengeResponse$,
  CheckCapacity$,
  CheckCapacityCommand,
  CheckCapacityRequest$,
  CheckCapacityResponse$,
  ClientSideAction$,
  ClientSideActionConfig$,
  ComparisonOperator,
  Condition$,
  CookieMatchPattern$,
  Cookies$,
  CountAction$,
  CountryCode,
  CreateAPIKey$,
  CreateAPIKeyCommand,
  CreateAPIKeyRequest$,
  CreateAPIKeyResponse$,
  CreateIPSet$,
  CreateIPSetCommand,
  CreateIPSetRequest$,
  CreateIPSetResponse$,
  CreateRegexPatternSet$,
  CreateRegexPatternSetCommand,
  CreateRegexPatternSetRequest$,
  CreateRegexPatternSetResponse$,
  CreateRuleGroup$,
  CreateRuleGroupCommand,
  CreateRuleGroupRequest$,
  CreateRuleGroupResponse$,
  CreateWebACL$,
  CreateWebACLCommand,
  CreateWebACLRequest$,
  CreateWebACLResponse$,
  CustomHTTPHeader$,
  CustomRequestHandling$,
  CustomResponse$,
  CustomResponseBody$,
  DataProtection$,
  DataProtectionAction,
  DataProtectionConfig$,
  DefaultAction$,
  DeleteAPIKey$,
  DeleteAPIKeyCommand,
  DeleteAPIKeyRequest$,
  DeleteAPIKeyResponse$,
  DeleteFirewallManagerRuleGroups$,
  DeleteFirewallManagerRuleGroupsCommand,
  DeleteFirewallManagerRuleGroupsRequest$,
  DeleteFirewallManagerRuleGroupsResponse$,
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
  DeleteRegexPatternSet$,
  DeleteRegexPatternSetCommand,
  DeleteRegexPatternSetRequest$,
  DeleteRegexPatternSetResponse$,
  DeleteRuleGroup$,
  DeleteRuleGroupCommand,
  DeleteRuleGroupRequest$,
  DeleteRuleGroupResponse$,
  DeleteWebACL$,
  DeleteWebACLCommand,
  DeleteWebACLRequest$,
  DeleteWebACLResponse$,
  DescribeAllManagedProducts$,
  DescribeAllManagedProductsCommand,
  DescribeAllManagedProductsRequest$,
  DescribeAllManagedProductsResponse$,
  DescribeManagedProductsByVendor$,
  DescribeManagedProductsByVendorCommand,
  DescribeManagedProductsByVendorRequest$,
  DescribeManagedProductsByVendorResponse$,
  DescribeManagedRuleGroup$,
  DescribeManagedRuleGroupCommand,
  DescribeManagedRuleGroupRequest$,
  DescribeManagedRuleGroupResponse$,
  DisallowedFeature$,
  DisassociateWebACL$,
  DisassociateWebACLCommand,
  DisassociateWebACLRequest$,
  DisassociateWebACLResponse$,
  EmailField$,
  ExcludedRule$,
  FailureReason,
  FallbackBehavior,
  FieldToMatch$,
  FieldToProtect$,
  FieldToProtectType,
  Filter$,
  FilterBehavior,
  FilterRequirement,
  FirewallManagerRuleGroup$,
  FirewallManagerStatement$,
  ForwardedIPConfig$,
  ForwardedIPPosition,
  GenerateMobileSdkReleaseUrl$,
  GenerateMobileSdkReleaseUrlCommand,
  GenerateMobileSdkReleaseUrlRequest$,
  GenerateMobileSdkReleaseUrlResponse$,
  GeoMatchStatement$,
  GetDecryptedAPIKey$,
  GetDecryptedAPIKeyCommand,
  GetDecryptedAPIKeyRequest$,
  GetDecryptedAPIKeyResponse$,
  GetIPSet$,
  GetIPSetCommand,
  GetIPSetRequest$,
  GetIPSetResponse$,
  GetLoggingConfiguration$,
  GetLoggingConfigurationCommand,
  GetLoggingConfigurationRequest$,
  GetLoggingConfigurationResponse$,
  GetManagedRuleSet$,
  GetManagedRuleSetCommand,
  GetManagedRuleSetRequest$,
  GetManagedRuleSetResponse$,
  GetMobileSdkRelease$,
  GetMobileSdkReleaseCommand,
  GetMobileSdkReleaseRequest$,
  GetMobileSdkReleaseResponse$,
  GetPermissionPolicy$,
  GetPermissionPolicyCommand,
  GetPermissionPolicyRequest$,
  GetPermissionPolicyResponse$,
  GetRateBasedStatementManagedKeys$,
  GetRateBasedStatementManagedKeysCommand,
  GetRateBasedStatementManagedKeysRequest$,
  GetRateBasedStatementManagedKeysResponse$,
  GetRegexPatternSet$,
  GetRegexPatternSetCommand,
  GetRegexPatternSetRequest$,
  GetRegexPatternSetResponse$,
  GetRuleGroup$,
  GetRuleGroupCommand,
  GetRuleGroupRequest$,
  GetRuleGroupResponse$,
  GetSampledRequests$,
  GetSampledRequestsCommand,
  GetSampledRequestsRequest$,
  GetSampledRequestsResponse$,
  GetWebACL$,
  GetWebACLCommand,
  GetWebACLForResource$,
  GetWebACLForResourceCommand,
  GetWebACLForResourceRequest$,
  GetWebACLForResourceResponse$,
  GetWebACLRequest$,
  GetWebACLResponse$,
  HeaderMatchPattern$,
  HeaderOrder$,
  Headers$,
  HTTPHeader$,
  HTTPRequest$,
  ImmunityTimeProperty$,
  InspectionLevel,
  IPAddressVersion,
  IPSet$,
  IPSetForwardedIPConfig$,
  IPSetReferenceStatement$,
  IPSetSummary$,
  JA3Fingerprint$,
  JA4Fingerprint$,
  JsonBody$,
  JsonMatchPattern$,
  JsonMatchScope,
  Label$,
  LabelMatchScope,
  LabelMatchStatement$,
  LabelNameCondition$,
  LabelSummary$,
  ListAPIKeys$,
  ListAPIKeysCommand,
  ListAPIKeysRequest$,
  ListAPIKeysResponse$,
  ListAvailableManagedRuleGroups$,
  ListAvailableManagedRuleGroupsCommand,
  ListAvailableManagedRuleGroupsRequest$,
  ListAvailableManagedRuleGroupsResponse$,
  ListAvailableManagedRuleGroupVersions$,
  ListAvailableManagedRuleGroupVersionsCommand,
  ListAvailableManagedRuleGroupVersionsRequest$,
  ListAvailableManagedRuleGroupVersionsResponse$,
  ListIPSets$,
  ListIPSetsCommand,
  ListIPSetsRequest$,
  ListIPSetsResponse$,
  ListLoggingConfigurations$,
  ListLoggingConfigurationsCommand,
  ListLoggingConfigurationsRequest$,
  ListLoggingConfigurationsResponse$,
  ListManagedRuleSets$,
  ListManagedRuleSetsCommand,
  ListManagedRuleSetsRequest$,
  ListManagedRuleSetsResponse$,
  ListMobileSdkReleases$,
  ListMobileSdkReleasesCommand,
  ListMobileSdkReleasesRequest$,
  ListMobileSdkReleasesResponse$,
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
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListWebACLs$,
  ListWebACLsCommand,
  ListWebACLsRequest$,
  ListWebACLsResponse$,
  LoggingConfiguration$,
  LoggingFilter$,
  LogScope,
  LogType,
  LowReputationMode,
  ManagedProductDescriptor$,
  ManagedRuleGroupConfig$,
  ManagedRuleGroupStatement$,
  ManagedRuleGroupSummary$,
  ManagedRuleGroupVersion$,
  ManagedRuleSet$,
  ManagedRuleSetSummary$,
  ManagedRuleSetVersion$,
  MapMatchScope,
  Method$,
  MobileSdkRelease$,
  NoneAction$,
  NotStatement$,
  OnSourceDDoSProtectionConfig$,
  OrStatement$,
  OverrideAction$,
  OversizeHandling,
  ParameterExceptionField,
  PasswordField$,
  PayloadType,
  PhoneNumberField$,
  Platform,
  PositionalConstraint,
  PutLoggingConfiguration$,
  PutLoggingConfigurationCommand,
  PutLoggingConfigurationRequest$,
  PutLoggingConfigurationResponse$,
  PutManagedRuleSetVersions$,
  PutManagedRuleSetVersionsCommand,
  PutManagedRuleSetVersionsRequest$,
  PutManagedRuleSetVersionsResponse$,
  PutPermissionPolicy$,
  PutPermissionPolicyCommand,
  PutPermissionPolicyRequest$,
  PutPermissionPolicyResponse$,
  QueryString$,
  RateBasedStatement$,
  RateBasedStatementAggregateKeyType,
  RateBasedStatementCustomKey$,
  RateBasedStatementManagedKeysIPSet$,
  RateLimitAsn$,
  RateLimitCookie$,
  RateLimitForwardedIP$,
  RateLimitHeader$,
  RateLimitHTTPMethod$,
  RateLimitIP$,
  RateLimitJA3Fingerprint$,
  RateLimitJA4Fingerprint$,
  RateLimitLabelNamespace$,
  RateLimitQueryArgument$,
  RateLimitQueryString$,
  RateLimitUriPath$,
  Regex$,
  RegexMatchStatement$,
  RegexPatternSet$,
  RegexPatternSetReferenceStatement$,
  RegexPatternSetSummary$,
  ReleaseSummary$,
  RequestBodyAssociatedResourceTypeConfig$,
  RequestInspection$,
  RequestInspectionACFP$,
  ResourceType,
  ResponseContentType,
  ResponseInspection$,
  ResponseInspectionBodyContains$,
  ResponseInspectionHeader$,
  ResponseInspectionJson$,
  ResponseInspectionStatusCode$,
  Rule$,
  RuleAction$,
  RuleActionOverride$,
  RuleGroup$,
  RuleGroupReferenceStatement$,
  RuleGroupSummary$,
  RuleSummary$,
  SampledHTTPRequest$,
  Scope,
  SensitivityLevel,
  SensitivityToAct,
  SingleHeader$,
  SingleQueryArgument$,
  SizeConstraintStatement$,
  SizeInspectionLimit,
  SqliMatchStatement$,
  Statement$,
  Tag$,
  TagInfoForResource$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TextTransformation$,
  TextTransformationType,
  TimeWindow$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateIPSet$,
  UpdateIPSetCommand,
  UpdateIPSetRequest$,
  UpdateIPSetResponse$,
  UpdateManagedRuleSetVersionExpiryDate$,
  UpdateManagedRuleSetVersionExpiryDateCommand,
  UpdateManagedRuleSetVersionExpiryDateRequest$,
  UpdateManagedRuleSetVersionExpiryDateResponse$,
  UpdateRegexPatternSet$,
  UpdateRegexPatternSetCommand,
  UpdateRegexPatternSetRequest$,
  UpdateRegexPatternSetResponse$,
  UpdateRuleGroup$,
  UpdateRuleGroupCommand,
  UpdateRuleGroupRequest$,
  UpdateRuleGroupResponse$,
  UpdateWebACL$,
  UpdateWebACLCommand,
  UpdateWebACLRequest$,
  UpdateWebACLResponse$,
  UriFragment$,
  UriPath$,
  UsageOfAction,
  UsernameField$,
  VersionToPublish$,
  VisibilityConfig$,
  WAFAssociatedItemException,
  WAFAssociatedItemException$,
  WAFConfigurationWarningException,
  WAFConfigurationWarningException$,
  WAFDuplicateItemException,
  WAFDuplicateItemException$,
  WAFExpiredManagedRuleGroupVersionException,
  WAFExpiredManagedRuleGroupVersionException$,
  WAFFeatureNotIncludedInPricingPlanException,
  WAFFeatureNotIncludedInPricingPlanException$,
  WAFInternalErrorException,
  WAFInternalErrorException$,
  WAFInvalidOperationException,
  WAFInvalidOperationException$,
  WAFInvalidParameterException,
  WAFInvalidParameterException$,
  WAFInvalidPermissionPolicyException,
  WAFInvalidPermissionPolicyException$,
  WAFInvalidResourceException,
  WAFInvalidResourceException$,
  WAFLimitsExceededException,
  WAFLimitsExceededException$,
  WAFLogDestinationPermissionIssueException,
  WAFLogDestinationPermissionIssueException$,
  WAFNonexistentItemException,
  WAFNonexistentItemException$,
  WAFOptimisticLockException,
  WAFOptimisticLockException$,
  WAFServiceLinkedRoleErrorException,
  WAFServiceLinkedRoleErrorException$,
  WAFSubscriptionNotFoundException,
  WAFSubscriptionNotFoundException$,
  WAFTagOperationException,
  WAFTagOperationException$,
  WAFTagOperationInternalErrorException,
  WAFTagOperationInternalErrorException$,
  WAFUnavailableEntityException,
  WAFUnavailableEntityException$,
  WAFUnsupportedAggregateKeyTypeException,
  WAFUnsupportedAggregateKeyTypeException$,
  WAFV2,
  WAFV2Client,
  WAFV2ServiceException,
  WebACL$,
  WebACLSummary$,
  XssMatchStatement$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WAFV2Client === "function");
assert(typeof WAFV2 === "function");
// commands
assert(typeof AssociateWebACLCommand === "function");
assert(typeof AssociateWebACL$ === "object");
assert(typeof CheckCapacityCommand === "function");
assert(typeof CheckCapacity$ === "object");
assert(typeof CreateAPIKeyCommand === "function");
assert(typeof CreateAPIKey$ === "object");
assert(typeof CreateIPSetCommand === "function");
assert(typeof CreateIPSet$ === "object");
assert(typeof CreateRegexPatternSetCommand === "function");
assert(typeof CreateRegexPatternSet$ === "object");
assert(typeof CreateRuleGroupCommand === "function");
assert(typeof CreateRuleGroup$ === "object");
assert(typeof CreateWebACLCommand === "function");
assert(typeof CreateWebACL$ === "object");
assert(typeof DeleteAPIKeyCommand === "function");
assert(typeof DeleteAPIKey$ === "object");
assert(typeof DeleteFirewallManagerRuleGroupsCommand === "function");
assert(typeof DeleteFirewallManagerRuleGroups$ === "object");
assert(typeof DeleteIPSetCommand === "function");
assert(typeof DeleteIPSet$ === "object");
assert(typeof DeleteLoggingConfigurationCommand === "function");
assert(typeof DeleteLoggingConfiguration$ === "object");
assert(typeof DeletePermissionPolicyCommand === "function");
assert(typeof DeletePermissionPolicy$ === "object");
assert(typeof DeleteRegexPatternSetCommand === "function");
assert(typeof DeleteRegexPatternSet$ === "object");
assert(typeof DeleteRuleGroupCommand === "function");
assert(typeof DeleteRuleGroup$ === "object");
assert(typeof DeleteWebACLCommand === "function");
assert(typeof DeleteWebACL$ === "object");
assert(typeof DescribeAllManagedProductsCommand === "function");
assert(typeof DescribeAllManagedProducts$ === "object");
assert(typeof DescribeManagedProductsByVendorCommand === "function");
assert(typeof DescribeManagedProductsByVendor$ === "object");
assert(typeof DescribeManagedRuleGroupCommand === "function");
assert(typeof DescribeManagedRuleGroup$ === "object");
assert(typeof DisassociateWebACLCommand === "function");
assert(typeof DisassociateWebACL$ === "object");
assert(typeof GenerateMobileSdkReleaseUrlCommand === "function");
assert(typeof GenerateMobileSdkReleaseUrl$ === "object");
assert(typeof GetDecryptedAPIKeyCommand === "function");
assert(typeof GetDecryptedAPIKey$ === "object");
assert(typeof GetIPSetCommand === "function");
assert(typeof GetIPSet$ === "object");
assert(typeof GetLoggingConfigurationCommand === "function");
assert(typeof GetLoggingConfiguration$ === "object");
assert(typeof GetManagedRuleSetCommand === "function");
assert(typeof GetManagedRuleSet$ === "object");
assert(typeof GetMobileSdkReleaseCommand === "function");
assert(typeof GetMobileSdkRelease$ === "object");
assert(typeof GetPermissionPolicyCommand === "function");
assert(typeof GetPermissionPolicy$ === "object");
assert(typeof GetRateBasedStatementManagedKeysCommand === "function");
assert(typeof GetRateBasedStatementManagedKeys$ === "object");
assert(typeof GetRegexPatternSetCommand === "function");
assert(typeof GetRegexPatternSet$ === "object");
assert(typeof GetRuleGroupCommand === "function");
assert(typeof GetRuleGroup$ === "object");
assert(typeof GetSampledRequestsCommand === "function");
assert(typeof GetSampledRequests$ === "object");
assert(typeof GetWebACLCommand === "function");
assert(typeof GetWebACL$ === "object");
assert(typeof GetWebACLForResourceCommand === "function");
assert(typeof GetWebACLForResource$ === "object");
assert(typeof ListAPIKeysCommand === "function");
assert(typeof ListAPIKeys$ === "object");
assert(typeof ListAvailableManagedRuleGroupsCommand === "function");
assert(typeof ListAvailableManagedRuleGroups$ === "object");
assert(typeof ListAvailableManagedRuleGroupVersionsCommand === "function");
assert(typeof ListAvailableManagedRuleGroupVersions$ === "object");
assert(typeof ListIPSetsCommand === "function");
assert(typeof ListIPSets$ === "object");
assert(typeof ListLoggingConfigurationsCommand === "function");
assert(typeof ListLoggingConfigurations$ === "object");
assert(typeof ListManagedRuleSetsCommand === "function");
assert(typeof ListManagedRuleSets$ === "object");
assert(typeof ListMobileSdkReleasesCommand === "function");
assert(typeof ListMobileSdkReleases$ === "object");
assert(typeof ListRegexPatternSetsCommand === "function");
assert(typeof ListRegexPatternSets$ === "object");
assert(typeof ListResourcesForWebACLCommand === "function");
assert(typeof ListResourcesForWebACL$ === "object");
assert(typeof ListRuleGroupsCommand === "function");
assert(typeof ListRuleGroups$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWebACLsCommand === "function");
assert(typeof ListWebACLs$ === "object");
assert(typeof PutLoggingConfigurationCommand === "function");
assert(typeof PutLoggingConfiguration$ === "object");
assert(typeof PutManagedRuleSetVersionsCommand === "function");
assert(typeof PutManagedRuleSetVersions$ === "object");
assert(typeof PutPermissionPolicyCommand === "function");
assert(typeof PutPermissionPolicy$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateIPSetCommand === "function");
assert(typeof UpdateIPSet$ === "object");
assert(typeof UpdateManagedRuleSetVersionExpiryDateCommand === "function");
assert(typeof UpdateManagedRuleSetVersionExpiryDate$ === "object");
assert(typeof UpdateRegexPatternSetCommand === "function");
assert(typeof UpdateRegexPatternSet$ === "object");
assert(typeof UpdateRuleGroupCommand === "function");
assert(typeof UpdateRuleGroup$ === "object");
assert(typeof UpdateWebACLCommand === "function");
assert(typeof UpdateWebACL$ === "object");
// structural schemas
assert(typeof ActionCondition$ === "object");
assert(typeof AddressField$ === "object");
assert(typeof All$ === "object");
assert(typeof AllowAction$ === "object");
assert(typeof AllQueryArguments$ === "object");
assert(typeof AndStatement$ === "object");
assert(typeof APIKeySummary$ === "object");
assert(typeof ApplicationAttribute$ === "object");
assert(typeof ApplicationConfig$ === "object");
assert(typeof AsnMatchStatement$ === "object");
assert(typeof AssociateWebACLRequest$ === "object");
assert(typeof AssociateWebACLResponse$ === "object");
assert(typeof AssociationConfig$ === "object");
assert(typeof AWSManagedRulesACFPRuleSet$ === "object");
assert(typeof AWSManagedRulesAntiDDoSRuleSet$ === "object");
assert(typeof AWSManagedRulesATPRuleSet$ === "object");
assert(typeof AWSManagedRulesBotControlRuleSet$ === "object");
assert(typeof BlockAction$ === "object");
assert(typeof Body$ === "object");
assert(typeof ByteMatchStatement$ === "object");
assert(typeof CaptchaAction$ === "object");
assert(typeof CaptchaConfig$ === "object");
assert(typeof CaptchaResponse$ === "object");
assert(typeof ChallengeAction$ === "object");
assert(typeof ChallengeConfig$ === "object");
assert(typeof ChallengeResponse$ === "object");
assert(typeof CheckCapacityRequest$ === "object");
assert(typeof CheckCapacityResponse$ === "object");
assert(typeof ClientSideAction$ === "object");
assert(typeof ClientSideActionConfig$ === "object");
assert(typeof Condition$ === "object");
assert(typeof CookieMatchPattern$ === "object");
assert(typeof Cookies$ === "object");
assert(typeof CountAction$ === "object");
assert(typeof CreateAPIKeyRequest$ === "object");
assert(typeof CreateAPIKeyResponse$ === "object");
assert(typeof CreateIPSetRequest$ === "object");
assert(typeof CreateIPSetResponse$ === "object");
assert(typeof CreateRegexPatternSetRequest$ === "object");
assert(typeof CreateRegexPatternSetResponse$ === "object");
assert(typeof CreateRuleGroupRequest$ === "object");
assert(typeof CreateRuleGroupResponse$ === "object");
assert(typeof CreateWebACLRequest$ === "object");
assert(typeof CreateWebACLResponse$ === "object");
assert(typeof CustomHTTPHeader$ === "object");
assert(typeof CustomRequestHandling$ === "object");
assert(typeof CustomResponse$ === "object");
assert(typeof CustomResponseBody$ === "object");
assert(typeof DataProtection$ === "object");
assert(typeof DataProtectionConfig$ === "object");
assert(typeof DefaultAction$ === "object");
assert(typeof DeleteAPIKeyRequest$ === "object");
assert(typeof DeleteAPIKeyResponse$ === "object");
assert(typeof DeleteFirewallManagerRuleGroupsRequest$ === "object");
assert(typeof DeleteFirewallManagerRuleGroupsResponse$ === "object");
assert(typeof DeleteIPSetRequest$ === "object");
assert(typeof DeleteIPSetResponse$ === "object");
assert(typeof DeleteLoggingConfigurationRequest$ === "object");
assert(typeof DeleteLoggingConfigurationResponse$ === "object");
assert(typeof DeletePermissionPolicyRequest$ === "object");
assert(typeof DeletePermissionPolicyResponse$ === "object");
assert(typeof DeleteRegexPatternSetRequest$ === "object");
assert(typeof DeleteRegexPatternSetResponse$ === "object");
assert(typeof DeleteRuleGroupRequest$ === "object");
assert(typeof DeleteRuleGroupResponse$ === "object");
assert(typeof DeleteWebACLRequest$ === "object");
assert(typeof DeleteWebACLResponse$ === "object");
assert(typeof DescribeAllManagedProductsRequest$ === "object");
assert(typeof DescribeAllManagedProductsResponse$ === "object");
assert(typeof DescribeManagedProductsByVendorRequest$ === "object");
assert(typeof DescribeManagedProductsByVendorResponse$ === "object");
assert(typeof DescribeManagedRuleGroupRequest$ === "object");
assert(typeof DescribeManagedRuleGroupResponse$ === "object");
assert(typeof DisallowedFeature$ === "object");
assert(typeof DisassociateWebACLRequest$ === "object");
assert(typeof DisassociateWebACLResponse$ === "object");
assert(typeof EmailField$ === "object");
assert(typeof ExcludedRule$ === "object");
assert(typeof FieldToMatch$ === "object");
assert(typeof FieldToProtect$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FirewallManagerRuleGroup$ === "object");
assert(typeof FirewallManagerStatement$ === "object");
assert(typeof ForwardedIPConfig$ === "object");
assert(typeof GenerateMobileSdkReleaseUrlRequest$ === "object");
assert(typeof GenerateMobileSdkReleaseUrlResponse$ === "object");
assert(typeof GeoMatchStatement$ === "object");
assert(typeof GetDecryptedAPIKeyRequest$ === "object");
assert(typeof GetDecryptedAPIKeyResponse$ === "object");
assert(typeof GetIPSetRequest$ === "object");
assert(typeof GetIPSetResponse$ === "object");
assert(typeof GetLoggingConfigurationRequest$ === "object");
assert(typeof GetLoggingConfigurationResponse$ === "object");
assert(typeof GetManagedRuleSetRequest$ === "object");
assert(typeof GetManagedRuleSetResponse$ === "object");
assert(typeof GetMobileSdkReleaseRequest$ === "object");
assert(typeof GetMobileSdkReleaseResponse$ === "object");
assert(typeof GetPermissionPolicyRequest$ === "object");
assert(typeof GetPermissionPolicyResponse$ === "object");
assert(typeof GetRateBasedStatementManagedKeysRequest$ === "object");
assert(typeof GetRateBasedStatementManagedKeysResponse$ === "object");
assert(typeof GetRegexPatternSetRequest$ === "object");
assert(typeof GetRegexPatternSetResponse$ === "object");
assert(typeof GetRuleGroupRequest$ === "object");
assert(typeof GetRuleGroupResponse$ === "object");
assert(typeof GetSampledRequestsRequest$ === "object");
assert(typeof GetSampledRequestsResponse$ === "object");
assert(typeof GetWebACLForResourceRequest$ === "object");
assert(typeof GetWebACLForResourceResponse$ === "object");
assert(typeof GetWebACLRequest$ === "object");
assert(typeof GetWebACLResponse$ === "object");
assert(typeof HeaderMatchPattern$ === "object");
assert(typeof HeaderOrder$ === "object");
assert(typeof Headers$ === "object");
assert(typeof HTTPHeader$ === "object");
assert(typeof HTTPRequest$ === "object");
assert(typeof ImmunityTimeProperty$ === "object");
assert(typeof IPSet$ === "object");
assert(typeof IPSetForwardedIPConfig$ === "object");
assert(typeof IPSetReferenceStatement$ === "object");
assert(typeof IPSetSummary$ === "object");
assert(typeof JA3Fingerprint$ === "object");
assert(typeof JA4Fingerprint$ === "object");
assert(typeof JsonBody$ === "object");
assert(typeof JsonMatchPattern$ === "object");
assert(typeof Label$ === "object");
assert(typeof LabelMatchStatement$ === "object");
assert(typeof LabelNameCondition$ === "object");
assert(typeof LabelSummary$ === "object");
assert(typeof ListAPIKeysRequest$ === "object");
assert(typeof ListAPIKeysResponse$ === "object");
assert(typeof ListAvailableManagedRuleGroupsRequest$ === "object");
assert(typeof ListAvailableManagedRuleGroupsResponse$ === "object");
assert(typeof ListAvailableManagedRuleGroupVersionsRequest$ === "object");
assert(typeof ListAvailableManagedRuleGroupVersionsResponse$ === "object");
assert(typeof ListIPSetsRequest$ === "object");
assert(typeof ListIPSetsResponse$ === "object");
assert(typeof ListLoggingConfigurationsRequest$ === "object");
assert(typeof ListLoggingConfigurationsResponse$ === "object");
assert(typeof ListManagedRuleSetsRequest$ === "object");
assert(typeof ListManagedRuleSetsResponse$ === "object");
assert(typeof ListMobileSdkReleasesRequest$ === "object");
assert(typeof ListMobileSdkReleasesResponse$ === "object");
assert(typeof ListRegexPatternSetsRequest$ === "object");
assert(typeof ListRegexPatternSetsResponse$ === "object");
assert(typeof ListResourcesForWebACLRequest$ === "object");
assert(typeof ListResourcesForWebACLResponse$ === "object");
assert(typeof ListRuleGroupsRequest$ === "object");
assert(typeof ListRuleGroupsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListWebACLsRequest$ === "object");
assert(typeof ListWebACLsResponse$ === "object");
assert(typeof LoggingConfiguration$ === "object");
assert(typeof LoggingFilter$ === "object");
assert(typeof ManagedProductDescriptor$ === "object");
assert(typeof ManagedRuleGroupConfig$ === "object");
assert(typeof ManagedRuleGroupStatement$ === "object");
assert(typeof ManagedRuleGroupSummary$ === "object");
assert(typeof ManagedRuleGroupVersion$ === "object");
assert(typeof ManagedRuleSet$ === "object");
assert(typeof ManagedRuleSetSummary$ === "object");
assert(typeof ManagedRuleSetVersion$ === "object");
assert(typeof Method$ === "object");
assert(typeof MobileSdkRelease$ === "object");
assert(typeof NoneAction$ === "object");
assert(typeof NotStatement$ === "object");
assert(typeof OnSourceDDoSProtectionConfig$ === "object");
assert(typeof OrStatement$ === "object");
assert(typeof OverrideAction$ === "object");
assert(typeof PasswordField$ === "object");
assert(typeof PhoneNumberField$ === "object");
assert(typeof PutLoggingConfigurationRequest$ === "object");
assert(typeof PutLoggingConfigurationResponse$ === "object");
assert(typeof PutManagedRuleSetVersionsRequest$ === "object");
assert(typeof PutManagedRuleSetVersionsResponse$ === "object");
assert(typeof PutPermissionPolicyRequest$ === "object");
assert(typeof PutPermissionPolicyResponse$ === "object");
assert(typeof QueryString$ === "object");
assert(typeof RateBasedStatement$ === "object");
assert(typeof RateBasedStatementCustomKey$ === "object");
assert(typeof RateBasedStatementManagedKeysIPSet$ === "object");
assert(typeof RateLimitAsn$ === "object");
assert(typeof RateLimitCookie$ === "object");
assert(typeof RateLimitForwardedIP$ === "object");
assert(typeof RateLimitHeader$ === "object");
assert(typeof RateLimitHTTPMethod$ === "object");
assert(typeof RateLimitIP$ === "object");
assert(typeof RateLimitJA3Fingerprint$ === "object");
assert(typeof RateLimitJA4Fingerprint$ === "object");
assert(typeof RateLimitLabelNamespace$ === "object");
assert(typeof RateLimitQueryArgument$ === "object");
assert(typeof RateLimitQueryString$ === "object");
assert(typeof RateLimitUriPath$ === "object");
assert(typeof Regex$ === "object");
assert(typeof RegexMatchStatement$ === "object");
assert(typeof RegexPatternSet$ === "object");
assert(typeof RegexPatternSetReferenceStatement$ === "object");
assert(typeof RegexPatternSetSummary$ === "object");
assert(typeof ReleaseSummary$ === "object");
assert(typeof RequestBodyAssociatedResourceTypeConfig$ === "object");
assert(typeof RequestInspection$ === "object");
assert(typeof RequestInspectionACFP$ === "object");
assert(typeof ResponseInspection$ === "object");
assert(typeof ResponseInspectionBodyContains$ === "object");
assert(typeof ResponseInspectionHeader$ === "object");
assert(typeof ResponseInspectionJson$ === "object");
assert(typeof ResponseInspectionStatusCode$ === "object");
assert(typeof Rule$ === "object");
assert(typeof RuleAction$ === "object");
assert(typeof RuleActionOverride$ === "object");
assert(typeof RuleGroup$ === "object");
assert(typeof RuleGroupReferenceStatement$ === "object");
assert(typeof RuleGroupSummary$ === "object");
assert(typeof RuleSummary$ === "object");
assert(typeof SampledHTTPRequest$ === "object");
assert(typeof SingleHeader$ === "object");
assert(typeof SingleQueryArgument$ === "object");
assert(typeof SizeConstraintStatement$ === "object");
assert(typeof SqliMatchStatement$ === "object");
assert(typeof Statement$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagInfoForResource$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TextTransformation$ === "object");
assert(typeof TimeWindow$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateIPSetRequest$ === "object");
assert(typeof UpdateIPSetResponse$ === "object");
assert(typeof UpdateManagedRuleSetVersionExpiryDateRequest$ === "object");
assert(typeof UpdateManagedRuleSetVersionExpiryDateResponse$ === "object");
assert(typeof UpdateRegexPatternSetRequest$ === "object");
assert(typeof UpdateRegexPatternSetResponse$ === "object");
assert(typeof UpdateRuleGroupRequest$ === "object");
assert(typeof UpdateRuleGroupResponse$ === "object");
assert(typeof UpdateWebACLRequest$ === "object");
assert(typeof UpdateWebACLResponse$ === "object");
assert(typeof UriFragment$ === "object");
assert(typeof UriPath$ === "object");
assert(typeof UsernameField$ === "object");
assert(typeof VersionToPublish$ === "object");
assert(typeof VisibilityConfig$ === "object");
assert(typeof WebACL$ === "object");
assert(typeof WebACLSummary$ === "object");
assert(typeof XssMatchStatement$ === "object");
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
assert(typeof ParameterExceptionField === "object");
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
assert(WAFAssociatedItemException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFAssociatedItemException$ === "object");
assert(WAFConfigurationWarningException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFConfigurationWarningException$ === "object");
assert(WAFDuplicateItemException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFDuplicateItemException$ === "object");
assert(WAFExpiredManagedRuleGroupVersionException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFExpiredManagedRuleGroupVersionException$ === "object");
assert(WAFFeatureNotIncludedInPricingPlanException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFFeatureNotIncludedInPricingPlanException$ === "object");
assert(WAFInternalErrorException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFInternalErrorException$ === "object");
assert(WAFInvalidOperationException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFInvalidOperationException$ === "object");
assert(WAFInvalidParameterException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFInvalidParameterException$ === "object");
assert(WAFInvalidPermissionPolicyException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFInvalidPermissionPolicyException$ === "object");
assert(WAFInvalidResourceException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFInvalidResourceException$ === "object");
assert(WAFLimitsExceededException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFLimitsExceededException$ === "object");
assert(WAFLogDestinationPermissionIssueException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFLogDestinationPermissionIssueException$ === "object");
assert(WAFNonexistentItemException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFNonexistentItemException$ === "object");
assert(WAFOptimisticLockException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFOptimisticLockException$ === "object");
assert(WAFServiceLinkedRoleErrorException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFServiceLinkedRoleErrorException$ === "object");
assert(WAFSubscriptionNotFoundException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFSubscriptionNotFoundException$ === "object");
assert(WAFTagOperationException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFTagOperationException$ === "object");
assert(WAFTagOperationInternalErrorException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFTagOperationInternalErrorException$ === "object");
assert(WAFUnavailableEntityException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFUnavailableEntityException$ === "object");
assert(WAFUnsupportedAggregateKeyTypeException.prototype instanceof WAFV2ServiceException);
assert(typeof WAFUnsupportedAggregateKeyTypeException$ === "object");
assert(WAFV2ServiceException.prototype instanceof Error);
console.log(`WAFV2 index test passed.`);
