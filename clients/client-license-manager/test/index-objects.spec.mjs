import {
  AcceptGrant$,
  AcceptGrantCommand,
  AcceptGrantRequest$,
  AcceptGrantResponse$,
  AccessDeniedException,
  AccessDeniedException$,
  ActivationOverrideBehavior,
  AllowedOperation,
  AndRuleStatement$,
  Asset$,
  AuthorizationException,
  AuthorizationException$,
  AutomatedDiscoveryInformation$,
  BorrowConfiguration$,
  CheckInLicense$,
  CheckInLicenseCommand,
  CheckInLicenseRequest$,
  CheckInLicenseResponse$,
  CheckoutBorrowLicense$,
  CheckoutBorrowLicenseCommand,
  CheckoutBorrowLicenseRequest$,
  CheckoutBorrowLicenseResponse$,
  CheckoutLicense$,
  CheckoutLicenseCommand,
  CheckoutLicenseRequest$,
  CheckoutLicenseResponse$,
  CheckoutType,
  ConflictException,
  ConflictException$,
  ConsumedLicenseSummary$,
  ConsumptionConfiguration$,
  CreateGrant$,
  CreateGrantCommand,
  CreateGrantRequest$,
  CreateGrantResponse$,
  CreateGrantVersion$,
  CreateGrantVersionCommand,
  CreateGrantVersionRequest$,
  CreateGrantVersionResponse$,
  CreateLicense$,
  CreateLicenseAssetGroup$,
  CreateLicenseAssetGroupCommand,
  CreateLicenseAssetGroupRequest$,
  CreateLicenseAssetGroupResponse$,
  CreateLicenseAssetRuleset$,
  CreateLicenseAssetRulesetCommand,
  CreateLicenseAssetRulesetRequest$,
  CreateLicenseAssetRulesetResponse$,
  CreateLicenseCommand,
  CreateLicenseConfiguration$,
  CreateLicenseConfigurationCommand,
  CreateLicenseConfigurationRequest$,
  CreateLicenseConfigurationResponse$,
  CreateLicenseConversionTaskForResource$,
  CreateLicenseConversionTaskForResourceCommand,
  CreateLicenseConversionTaskForResourceRequest$,
  CreateLicenseConversionTaskForResourceResponse$,
  CreateLicenseManagerReportGenerator$,
  CreateLicenseManagerReportGeneratorCommand,
  CreateLicenseManagerReportGeneratorRequest$,
  CreateLicenseManagerReportGeneratorResponse$,
  CreateLicenseRequest$,
  CreateLicenseResponse$,
  CreateLicenseVersion$,
  CreateLicenseVersionCommand,
  CreateLicenseVersionRequest$,
  CreateLicenseVersionResponse$,
  CreateToken$,
  CreateTokenCommand,
  CreateTokenRequest$,
  CreateTokenResponse$,
  CrossAccountDiscoveryServiceStatus$,
  CrossRegionDiscoveryStatus$,
  DatetimeRange$,
  DeleteGrant$,
  DeleteGrantCommand,
  DeleteGrantRequest$,
  DeleteGrantResponse$,
  DeleteLicense$,
  DeleteLicenseAssetGroup$,
  DeleteLicenseAssetGroupCommand,
  DeleteLicenseAssetGroupRequest$,
  DeleteLicenseAssetGroupResponse$,
  DeleteLicenseAssetRuleset$,
  DeleteLicenseAssetRulesetCommand,
  DeleteLicenseAssetRulesetRequest$,
  DeleteLicenseAssetRulesetResponse$,
  DeleteLicenseCommand,
  DeleteLicenseConfiguration$,
  DeleteLicenseConfigurationCommand,
  DeleteLicenseConfigurationRequest$,
  DeleteLicenseConfigurationResponse$,
  DeleteLicenseManagerReportGenerator$,
  DeleteLicenseManagerReportGeneratorCommand,
  DeleteLicenseManagerReportGeneratorRequest$,
  DeleteLicenseManagerReportGeneratorResponse$,
  DeleteLicenseRequest$,
  DeleteLicenseResponse$,
  DeleteToken$,
  DeleteTokenCommand,
  DeleteTokenRequest$,
  DeleteTokenResponse$,
  DigitalSignatureMethod,
  Entitlement$,
  EntitlementData$,
  EntitlementDataUnit,
  EntitlementNotAllowedException,
  EntitlementNotAllowedException$,
  EntitlementUnit,
  EntitlementUsage$,
  ExtendLicenseConsumption$,
  ExtendLicenseConsumptionCommand,
  ExtendLicenseConsumptionRequest$,
  ExtendLicenseConsumptionResponse$,
  FailedDependencyException,
  FailedDependencyException$,
  Filter$,
  FilterLimitExceededException,
  FilterLimitExceededException$,
  GetAccessToken$,
  GetAccessTokenCommand,
  GetAccessTokenRequest$,
  GetAccessTokenResponse$,
  GetGrant$,
  GetGrantCommand,
  GetGrantRequest$,
  GetGrantResponse$,
  GetLicense$,
  GetLicenseAssetGroup$,
  GetLicenseAssetGroupCommand,
  GetLicenseAssetGroupRequest$,
  GetLicenseAssetGroupResponse$,
  GetLicenseAssetRuleset$,
  GetLicenseAssetRulesetCommand,
  GetLicenseAssetRulesetRequest$,
  GetLicenseAssetRulesetResponse$,
  GetLicenseCommand,
  GetLicenseConfiguration$,
  GetLicenseConfigurationCommand,
  GetLicenseConfigurationRequest$,
  GetLicenseConfigurationResponse$,
  GetLicenseConversionTask$,
  GetLicenseConversionTaskCommand,
  GetLicenseConversionTaskRequest$,
  GetLicenseConversionTaskResponse$,
  GetLicenseManagerReportGenerator$,
  GetLicenseManagerReportGeneratorCommand,
  GetLicenseManagerReportGeneratorRequest$,
  GetLicenseManagerReportGeneratorResponse$,
  GetLicenseRequest$,
  GetLicenseResponse$,
  GetLicenseUsage$,
  GetLicenseUsageCommand,
  GetLicenseUsageRequest$,
  GetLicenseUsageResponse$,
  GetServiceSettings$,
  GetServiceSettingsCommand,
  GetServiceSettingsRequest$,
  GetServiceSettingsResponse$,
  Grant$,
  GrantedLicense$,
  GrantStatus,
  InstanceRuleStatement$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  InvalidResourceStateException,
  InvalidResourceStateException$,
  InventoryFilter$,
  InventoryFilterCondition,
  Issuer$,
  IssuerDetails$,
  License$,
  LicenseAssetGroup$,
  LicenseAssetGroupConfiguration$,
  LicenseAssetGroupProperty$,
  LicenseAssetGroupStatus,
  LicenseAssetRule$,
  LicenseAssetRuleset$,
  LicenseConfiguration$,
  LicenseConfigurationAssociation$,
  LicenseConfigurationRuleStatement$,
  LicenseConfigurationStatus,
  LicenseConfigurationUsage$,
  LicenseConversionContext$,
  LicenseConversionTask$,
  LicenseConversionTaskStatus,
  LicenseCountingType,
  LicenseDeletionStatus,
  LicenseManager,
  LicenseManagerClient,
  LicenseManagerServiceException,
  LicenseOperationFailure$,
  LicenseRuleStatement$,
  LicenseSpecification$,
  LicenseStatus,
  LicenseUsage$,
  LicenseUsageException,
  LicenseUsageException$,
  ListAssetsForLicenseAssetGroup$,
  ListAssetsForLicenseAssetGroupCommand,
  ListAssetsForLicenseAssetGroupRequest$,
  ListAssetsForLicenseAssetGroupResponse$,
  ListAssociationsForLicenseConfiguration$,
  ListAssociationsForLicenseConfigurationCommand,
  ListAssociationsForLicenseConfigurationRequest$,
  ListAssociationsForLicenseConfigurationResponse$,
  ListDistributedGrants$,
  ListDistributedGrantsCommand,
  ListDistributedGrantsRequest$,
  ListDistributedGrantsResponse$,
  ListFailuresForLicenseConfigurationOperations$,
  ListFailuresForLicenseConfigurationOperationsCommand,
  ListFailuresForLicenseConfigurationOperationsRequest$,
  ListFailuresForLicenseConfigurationOperationsResponse$,
  ListLicenseAssetGroups$,
  ListLicenseAssetGroupsCommand,
  ListLicenseAssetGroupsRequest$,
  ListLicenseAssetGroupsResponse$,
  ListLicenseAssetRulesets$,
  ListLicenseAssetRulesetsCommand,
  ListLicenseAssetRulesetsRequest$,
  ListLicenseAssetRulesetsResponse$,
  ListLicenseConfigurations$,
  ListLicenseConfigurationsCommand,
  ListLicenseConfigurationsForOrganization$,
  ListLicenseConfigurationsForOrganizationCommand,
  ListLicenseConfigurationsForOrganizationRequest$,
  ListLicenseConfigurationsForOrganizationResponse$,
  ListLicenseConfigurationsRequest$,
  ListLicenseConfigurationsResponse$,
  ListLicenseConversionTasks$,
  ListLicenseConversionTasksCommand,
  ListLicenseConversionTasksRequest$,
  ListLicenseConversionTasksResponse$,
  ListLicenseManagerReportGenerators$,
  ListLicenseManagerReportGeneratorsCommand,
  ListLicenseManagerReportGeneratorsRequest$,
  ListLicenseManagerReportGeneratorsResponse$,
  ListLicenses$,
  ListLicensesCommand,
  ListLicenseSpecificationsForResource$,
  ListLicenseSpecificationsForResourceCommand,
  ListLicenseSpecificationsForResourceRequest$,
  ListLicenseSpecificationsForResourceResponse$,
  ListLicensesRequest$,
  ListLicensesResponse$,
  ListLicenseVersions$,
  ListLicenseVersionsCommand,
  ListLicenseVersionsRequest$,
  ListLicenseVersionsResponse$,
  ListReceivedGrants$,
  ListReceivedGrantsCommand,
  ListReceivedGrantsForOrganization$,
  ListReceivedGrantsForOrganizationCommand,
  ListReceivedGrantsForOrganizationRequest$,
  ListReceivedGrantsForOrganizationResponse$,
  ListReceivedGrantsRequest$,
  ListReceivedGrantsResponse$,
  ListReceivedLicenses$,
  ListReceivedLicensesCommand,
  ListReceivedLicensesForOrganization$,
  ListReceivedLicensesForOrganizationCommand,
  ListReceivedLicensesForOrganizationRequest$,
  ListReceivedLicensesForOrganizationResponse$,
  ListReceivedLicensesRequest$,
  ListReceivedLicensesResponse$,
  ListResourceInventory$,
  ListResourceInventoryCommand,
  ListResourceInventoryRequest$,
  ListResourceInventoryResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTokens$,
  ListTokensCommand,
  ListTokensRequest$,
  ListTokensResponse$,
  ListUsageForLicenseConfiguration$,
  ListUsageForLicenseConfigurationCommand,
  ListUsageForLicenseConfigurationRequest$,
  ListUsageForLicenseConfigurationResponse$,
  ManagedResourceSummary$,
  MatchingRuleStatement$,
  Metadata$,
  NoEntitlementsAllowedException,
  NoEntitlementsAllowedException$,
  Options$,
  OrganizationConfiguration$,
  OrRuleStatement$,
  ProductCodeListItem$,
  ProductCodeType,
  ProductInformation$,
  ProductInformationFilter$,
  ProvisionalConfiguration$,
  RateLimitExceededException,
  RateLimitExceededException$,
  ReceivedMetadata$,
  ReceivedStatus,
  RedirectException,
  RedirectException$,
  RegionStatus$,
  RejectGrant$,
  RejectGrantCommand,
  RejectGrantRequest$,
  RejectGrantResponse$,
  RenewType,
  ReportContext$,
  ReportFrequency$,
  ReportFrequencyType,
  ReportGenerator$,
  ReportType,
  ResourceInventory$,
  ResourceLimitExceededException,
  ResourceLimitExceededException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  RuleStatement$,
  S3Location$,
  ScriptRuleStatement$,
  ServerInternalException,
  ServerInternalException$,
  ServiceStatus$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TokenData$,
  TokenType,
  UnsupportedDigitalSignatureMethodException,
  UnsupportedDigitalSignatureMethodException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateLicenseAssetGroup$,
  UpdateLicenseAssetGroupCommand,
  UpdateLicenseAssetGroupRequest$,
  UpdateLicenseAssetGroupResponse$,
  UpdateLicenseAssetRuleset$,
  UpdateLicenseAssetRulesetCommand,
  UpdateLicenseAssetRulesetRequest$,
  UpdateLicenseAssetRulesetResponse$,
  UpdateLicenseConfiguration$,
  UpdateLicenseConfigurationCommand,
  UpdateLicenseConfigurationRequest$,
  UpdateLicenseConfigurationResponse$,
  UpdateLicenseManagerReportGenerator$,
  UpdateLicenseManagerReportGeneratorCommand,
  UpdateLicenseManagerReportGeneratorRequest$,
  UpdateLicenseManagerReportGeneratorResponse$,
  UpdateLicenseSpecificationsForResource$,
  UpdateLicenseSpecificationsForResourceCommand,
  UpdateLicenseSpecificationsForResourceRequest$,
  UpdateLicenseSpecificationsForResourceResponse$,
  UpdateServiceSettings$,
  UpdateServiceSettingsCommand,
  UpdateServiceSettingsRequest$,
  UpdateServiceSettingsResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LicenseManagerClient === "function");
assert(typeof LicenseManager === "function");
// commands
assert(typeof AcceptGrantCommand === "function");
assert(typeof AcceptGrant$ === "object");
assert(typeof CheckInLicenseCommand === "function");
assert(typeof CheckInLicense$ === "object");
assert(typeof CheckoutBorrowLicenseCommand === "function");
assert(typeof CheckoutBorrowLicense$ === "object");
assert(typeof CheckoutLicenseCommand === "function");
assert(typeof CheckoutLicense$ === "object");
assert(typeof CreateGrantCommand === "function");
assert(typeof CreateGrant$ === "object");
assert(typeof CreateGrantVersionCommand === "function");
assert(typeof CreateGrantVersion$ === "object");
assert(typeof CreateLicenseCommand === "function");
assert(typeof CreateLicense$ === "object");
assert(typeof CreateLicenseAssetGroupCommand === "function");
assert(typeof CreateLicenseAssetGroup$ === "object");
assert(typeof CreateLicenseAssetRulesetCommand === "function");
assert(typeof CreateLicenseAssetRuleset$ === "object");
assert(typeof CreateLicenseConfigurationCommand === "function");
assert(typeof CreateLicenseConfiguration$ === "object");
assert(typeof CreateLicenseConversionTaskForResourceCommand === "function");
assert(typeof CreateLicenseConversionTaskForResource$ === "object");
assert(typeof CreateLicenseManagerReportGeneratorCommand === "function");
assert(typeof CreateLicenseManagerReportGenerator$ === "object");
assert(typeof CreateLicenseVersionCommand === "function");
assert(typeof CreateLicenseVersion$ === "object");
assert(typeof CreateTokenCommand === "function");
assert(typeof CreateToken$ === "object");
assert(typeof DeleteGrantCommand === "function");
assert(typeof DeleteGrant$ === "object");
assert(typeof DeleteLicenseCommand === "function");
assert(typeof DeleteLicense$ === "object");
assert(typeof DeleteLicenseAssetGroupCommand === "function");
assert(typeof DeleteLicenseAssetGroup$ === "object");
assert(typeof DeleteLicenseAssetRulesetCommand === "function");
assert(typeof DeleteLicenseAssetRuleset$ === "object");
assert(typeof DeleteLicenseConfigurationCommand === "function");
assert(typeof DeleteLicenseConfiguration$ === "object");
assert(typeof DeleteLicenseManagerReportGeneratorCommand === "function");
assert(typeof DeleteLicenseManagerReportGenerator$ === "object");
assert(typeof DeleteTokenCommand === "function");
assert(typeof DeleteToken$ === "object");
assert(typeof ExtendLicenseConsumptionCommand === "function");
assert(typeof ExtendLicenseConsumption$ === "object");
assert(typeof GetAccessTokenCommand === "function");
assert(typeof GetAccessToken$ === "object");
assert(typeof GetGrantCommand === "function");
assert(typeof GetGrant$ === "object");
assert(typeof GetLicenseCommand === "function");
assert(typeof GetLicense$ === "object");
assert(typeof GetLicenseAssetGroupCommand === "function");
assert(typeof GetLicenseAssetGroup$ === "object");
assert(typeof GetLicenseAssetRulesetCommand === "function");
assert(typeof GetLicenseAssetRuleset$ === "object");
assert(typeof GetLicenseConfigurationCommand === "function");
assert(typeof GetLicenseConfiguration$ === "object");
assert(typeof GetLicenseConversionTaskCommand === "function");
assert(typeof GetLicenseConversionTask$ === "object");
assert(typeof GetLicenseManagerReportGeneratorCommand === "function");
assert(typeof GetLicenseManagerReportGenerator$ === "object");
assert(typeof GetLicenseUsageCommand === "function");
assert(typeof GetLicenseUsage$ === "object");
assert(typeof GetServiceSettingsCommand === "function");
assert(typeof GetServiceSettings$ === "object");
assert(typeof ListAssetsForLicenseAssetGroupCommand === "function");
assert(typeof ListAssetsForLicenseAssetGroup$ === "object");
assert(typeof ListAssociationsForLicenseConfigurationCommand === "function");
assert(typeof ListAssociationsForLicenseConfiguration$ === "object");
assert(typeof ListDistributedGrantsCommand === "function");
assert(typeof ListDistributedGrants$ === "object");
assert(typeof ListFailuresForLicenseConfigurationOperationsCommand === "function");
assert(typeof ListFailuresForLicenseConfigurationOperations$ === "object");
assert(typeof ListLicenseAssetGroupsCommand === "function");
assert(typeof ListLicenseAssetGroups$ === "object");
assert(typeof ListLicenseAssetRulesetsCommand === "function");
assert(typeof ListLicenseAssetRulesets$ === "object");
assert(typeof ListLicenseConfigurationsCommand === "function");
assert(typeof ListLicenseConfigurations$ === "object");
assert(typeof ListLicenseConfigurationsForOrganizationCommand === "function");
assert(typeof ListLicenseConfigurationsForOrganization$ === "object");
assert(typeof ListLicenseConversionTasksCommand === "function");
assert(typeof ListLicenseConversionTasks$ === "object");
assert(typeof ListLicenseManagerReportGeneratorsCommand === "function");
assert(typeof ListLicenseManagerReportGenerators$ === "object");
assert(typeof ListLicensesCommand === "function");
assert(typeof ListLicenses$ === "object");
assert(typeof ListLicenseSpecificationsForResourceCommand === "function");
assert(typeof ListLicenseSpecificationsForResource$ === "object");
assert(typeof ListLicenseVersionsCommand === "function");
assert(typeof ListLicenseVersions$ === "object");
assert(typeof ListReceivedGrantsCommand === "function");
assert(typeof ListReceivedGrants$ === "object");
assert(typeof ListReceivedGrantsForOrganizationCommand === "function");
assert(typeof ListReceivedGrantsForOrganization$ === "object");
assert(typeof ListReceivedLicensesCommand === "function");
assert(typeof ListReceivedLicenses$ === "object");
assert(typeof ListReceivedLicensesForOrganizationCommand === "function");
assert(typeof ListReceivedLicensesForOrganization$ === "object");
assert(typeof ListResourceInventoryCommand === "function");
assert(typeof ListResourceInventory$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTokensCommand === "function");
assert(typeof ListTokens$ === "object");
assert(typeof ListUsageForLicenseConfigurationCommand === "function");
assert(typeof ListUsageForLicenseConfiguration$ === "object");
assert(typeof RejectGrantCommand === "function");
assert(typeof RejectGrant$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateLicenseAssetGroupCommand === "function");
assert(typeof UpdateLicenseAssetGroup$ === "object");
assert(typeof UpdateLicenseAssetRulesetCommand === "function");
assert(typeof UpdateLicenseAssetRuleset$ === "object");
assert(typeof UpdateLicenseConfigurationCommand === "function");
assert(typeof UpdateLicenseConfiguration$ === "object");
assert(typeof UpdateLicenseManagerReportGeneratorCommand === "function");
assert(typeof UpdateLicenseManagerReportGenerator$ === "object");
assert(typeof UpdateLicenseSpecificationsForResourceCommand === "function");
assert(typeof UpdateLicenseSpecificationsForResource$ === "object");
assert(typeof UpdateServiceSettingsCommand === "function");
assert(typeof UpdateServiceSettings$ === "object");
// structural schemas
assert(typeof AcceptGrantRequest$ === "object");
assert(typeof AcceptGrantResponse$ === "object");
assert(typeof AndRuleStatement$ === "object");
assert(typeof Asset$ === "object");
assert(typeof AutomatedDiscoveryInformation$ === "object");
assert(typeof BorrowConfiguration$ === "object");
assert(typeof CheckInLicenseRequest$ === "object");
assert(typeof CheckInLicenseResponse$ === "object");
assert(typeof CheckoutBorrowLicenseRequest$ === "object");
assert(typeof CheckoutBorrowLicenseResponse$ === "object");
assert(typeof CheckoutLicenseRequest$ === "object");
assert(typeof CheckoutLicenseResponse$ === "object");
assert(typeof ConsumedLicenseSummary$ === "object");
assert(typeof ConsumptionConfiguration$ === "object");
assert(typeof CreateGrantRequest$ === "object");
assert(typeof CreateGrantResponse$ === "object");
assert(typeof CreateGrantVersionRequest$ === "object");
assert(typeof CreateGrantVersionResponse$ === "object");
assert(typeof CreateLicenseAssetGroupRequest$ === "object");
assert(typeof CreateLicenseAssetGroupResponse$ === "object");
assert(typeof CreateLicenseAssetRulesetRequest$ === "object");
assert(typeof CreateLicenseAssetRulesetResponse$ === "object");
assert(typeof CreateLicenseConfigurationRequest$ === "object");
assert(typeof CreateLicenseConfigurationResponse$ === "object");
assert(typeof CreateLicenseConversionTaskForResourceRequest$ === "object");
assert(typeof CreateLicenseConversionTaskForResourceResponse$ === "object");
assert(typeof CreateLicenseManagerReportGeneratorRequest$ === "object");
assert(typeof CreateLicenseManagerReportGeneratorResponse$ === "object");
assert(typeof CreateLicenseRequest$ === "object");
assert(typeof CreateLicenseResponse$ === "object");
assert(typeof CreateLicenseVersionRequest$ === "object");
assert(typeof CreateLicenseVersionResponse$ === "object");
assert(typeof CreateTokenRequest$ === "object");
assert(typeof CreateTokenResponse$ === "object");
assert(typeof CrossAccountDiscoveryServiceStatus$ === "object");
assert(typeof CrossRegionDiscoveryStatus$ === "object");
assert(typeof DatetimeRange$ === "object");
assert(typeof DeleteGrantRequest$ === "object");
assert(typeof DeleteGrantResponse$ === "object");
assert(typeof DeleteLicenseAssetGroupRequest$ === "object");
assert(typeof DeleteLicenseAssetGroupResponse$ === "object");
assert(typeof DeleteLicenseAssetRulesetRequest$ === "object");
assert(typeof DeleteLicenseAssetRulesetResponse$ === "object");
assert(typeof DeleteLicenseConfigurationRequest$ === "object");
assert(typeof DeleteLicenseConfigurationResponse$ === "object");
assert(typeof DeleteLicenseManagerReportGeneratorRequest$ === "object");
assert(typeof DeleteLicenseManagerReportGeneratorResponse$ === "object");
assert(typeof DeleteLicenseRequest$ === "object");
assert(typeof DeleteLicenseResponse$ === "object");
assert(typeof DeleteTokenRequest$ === "object");
assert(typeof DeleteTokenResponse$ === "object");
assert(typeof Entitlement$ === "object");
assert(typeof EntitlementData$ === "object");
assert(typeof EntitlementUsage$ === "object");
assert(typeof ExtendLicenseConsumptionRequest$ === "object");
assert(typeof ExtendLicenseConsumptionResponse$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetAccessTokenRequest$ === "object");
assert(typeof GetAccessTokenResponse$ === "object");
assert(typeof GetGrantRequest$ === "object");
assert(typeof GetGrantResponse$ === "object");
assert(typeof GetLicenseAssetGroupRequest$ === "object");
assert(typeof GetLicenseAssetGroupResponse$ === "object");
assert(typeof GetLicenseAssetRulesetRequest$ === "object");
assert(typeof GetLicenseAssetRulesetResponse$ === "object");
assert(typeof GetLicenseConfigurationRequest$ === "object");
assert(typeof GetLicenseConfigurationResponse$ === "object");
assert(typeof GetLicenseConversionTaskRequest$ === "object");
assert(typeof GetLicenseConversionTaskResponse$ === "object");
assert(typeof GetLicenseManagerReportGeneratorRequest$ === "object");
assert(typeof GetLicenseManagerReportGeneratorResponse$ === "object");
assert(typeof GetLicenseRequest$ === "object");
assert(typeof GetLicenseResponse$ === "object");
assert(typeof GetLicenseUsageRequest$ === "object");
assert(typeof GetLicenseUsageResponse$ === "object");
assert(typeof GetServiceSettingsRequest$ === "object");
assert(typeof GetServiceSettingsResponse$ === "object");
assert(typeof Grant$ === "object");
assert(typeof GrantedLicense$ === "object");
assert(typeof InstanceRuleStatement$ === "object");
assert(typeof InventoryFilter$ === "object");
assert(typeof Issuer$ === "object");
assert(typeof IssuerDetails$ === "object");
assert(typeof License$ === "object");
assert(typeof LicenseAssetGroup$ === "object");
assert(typeof LicenseAssetGroupConfiguration$ === "object");
assert(typeof LicenseAssetGroupProperty$ === "object");
assert(typeof LicenseAssetRule$ === "object");
assert(typeof LicenseAssetRuleset$ === "object");
assert(typeof LicenseConfiguration$ === "object");
assert(typeof LicenseConfigurationAssociation$ === "object");
assert(typeof LicenseConfigurationRuleStatement$ === "object");
assert(typeof LicenseConfigurationUsage$ === "object");
assert(typeof LicenseConversionContext$ === "object");
assert(typeof LicenseConversionTask$ === "object");
assert(typeof LicenseOperationFailure$ === "object");
assert(typeof LicenseRuleStatement$ === "object");
assert(typeof LicenseSpecification$ === "object");
assert(typeof LicenseUsage$ === "object");
assert(typeof ListAssetsForLicenseAssetGroupRequest$ === "object");
assert(typeof ListAssetsForLicenseAssetGroupResponse$ === "object");
assert(typeof ListAssociationsForLicenseConfigurationRequest$ === "object");
assert(typeof ListAssociationsForLicenseConfigurationResponse$ === "object");
assert(typeof ListDistributedGrantsRequest$ === "object");
assert(typeof ListDistributedGrantsResponse$ === "object");
assert(typeof ListFailuresForLicenseConfigurationOperationsRequest$ === "object");
assert(typeof ListFailuresForLicenseConfigurationOperationsResponse$ === "object");
assert(typeof ListLicenseAssetGroupsRequest$ === "object");
assert(typeof ListLicenseAssetGroupsResponse$ === "object");
assert(typeof ListLicenseAssetRulesetsRequest$ === "object");
assert(typeof ListLicenseAssetRulesetsResponse$ === "object");
assert(typeof ListLicenseConfigurationsForOrganizationRequest$ === "object");
assert(typeof ListLicenseConfigurationsForOrganizationResponse$ === "object");
assert(typeof ListLicenseConfigurationsRequest$ === "object");
assert(typeof ListLicenseConfigurationsResponse$ === "object");
assert(typeof ListLicenseConversionTasksRequest$ === "object");
assert(typeof ListLicenseConversionTasksResponse$ === "object");
assert(typeof ListLicenseManagerReportGeneratorsRequest$ === "object");
assert(typeof ListLicenseManagerReportGeneratorsResponse$ === "object");
assert(typeof ListLicenseSpecificationsForResourceRequest$ === "object");
assert(typeof ListLicenseSpecificationsForResourceResponse$ === "object");
assert(typeof ListLicensesRequest$ === "object");
assert(typeof ListLicensesResponse$ === "object");
assert(typeof ListLicenseVersionsRequest$ === "object");
assert(typeof ListLicenseVersionsResponse$ === "object");
assert(typeof ListReceivedGrantsForOrganizationRequest$ === "object");
assert(typeof ListReceivedGrantsForOrganizationResponse$ === "object");
assert(typeof ListReceivedGrantsRequest$ === "object");
assert(typeof ListReceivedGrantsResponse$ === "object");
assert(typeof ListReceivedLicensesForOrganizationRequest$ === "object");
assert(typeof ListReceivedLicensesForOrganizationResponse$ === "object");
assert(typeof ListReceivedLicensesRequest$ === "object");
assert(typeof ListReceivedLicensesResponse$ === "object");
assert(typeof ListResourceInventoryRequest$ === "object");
assert(typeof ListResourceInventoryResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTokensRequest$ === "object");
assert(typeof ListTokensResponse$ === "object");
assert(typeof ListUsageForLicenseConfigurationRequest$ === "object");
assert(typeof ListUsageForLicenseConfigurationResponse$ === "object");
assert(typeof ManagedResourceSummary$ === "object");
assert(typeof MatchingRuleStatement$ === "object");
assert(typeof Metadata$ === "object");
assert(typeof Options$ === "object");
assert(typeof OrganizationConfiguration$ === "object");
assert(typeof OrRuleStatement$ === "object");
assert(typeof ProductCodeListItem$ === "object");
assert(typeof ProductInformation$ === "object");
assert(typeof ProductInformationFilter$ === "object");
assert(typeof ProvisionalConfiguration$ === "object");
assert(typeof ReceivedMetadata$ === "object");
assert(typeof RegionStatus$ === "object");
assert(typeof RejectGrantRequest$ === "object");
assert(typeof RejectGrantResponse$ === "object");
assert(typeof ReportContext$ === "object");
assert(typeof ReportFrequency$ === "object");
assert(typeof ReportGenerator$ === "object");
assert(typeof ResourceInventory$ === "object");
assert(typeof RuleStatement$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof ScriptRuleStatement$ === "object");
assert(typeof ServiceStatus$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TokenData$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateLicenseAssetGroupRequest$ === "object");
assert(typeof UpdateLicenseAssetGroupResponse$ === "object");
assert(typeof UpdateLicenseAssetRulesetRequest$ === "object");
assert(typeof UpdateLicenseAssetRulesetResponse$ === "object");
assert(typeof UpdateLicenseConfigurationRequest$ === "object");
assert(typeof UpdateLicenseConfigurationResponse$ === "object");
assert(typeof UpdateLicenseManagerReportGeneratorRequest$ === "object");
assert(typeof UpdateLicenseManagerReportGeneratorResponse$ === "object");
assert(typeof UpdateLicenseSpecificationsForResourceRequest$ === "object");
assert(typeof UpdateLicenseSpecificationsForResourceResponse$ === "object");
assert(typeof UpdateServiceSettingsRequest$ === "object");
assert(typeof UpdateServiceSettingsResponse$ === "object");
// enums
assert(typeof ActivationOverrideBehavior === "object");
assert(typeof AllowedOperation === "object");
assert(typeof CheckoutType === "object");
assert(typeof DigitalSignatureMethod === "object");
assert(typeof EntitlementDataUnit === "object");
assert(typeof EntitlementUnit === "object");
assert(typeof GrantStatus === "object");
assert(typeof InventoryFilterCondition === "object");
assert(typeof LicenseAssetGroupStatus === "object");
assert(typeof LicenseConfigurationStatus === "object");
assert(typeof LicenseConversionTaskStatus === "object");
assert(typeof LicenseCountingType === "object");
assert(typeof LicenseDeletionStatus === "object");
assert(typeof LicenseStatus === "object");
assert(typeof ProductCodeType === "object");
assert(typeof ReceivedStatus === "object");
assert(typeof RenewType === "object");
assert(typeof ReportFrequencyType === "object");
assert(typeof ReportType === "object");
assert(typeof ResourceType === "object");
assert(typeof TokenType === "object");
// errors
assert(AccessDeniedException.prototype instanceof LicenseManagerServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(AuthorizationException.prototype instanceof LicenseManagerServiceException);
assert(typeof AuthorizationException$ === "object");
assert(ConflictException.prototype instanceof LicenseManagerServiceException);
assert(typeof ConflictException$ === "object");
assert(EntitlementNotAllowedException.prototype instanceof LicenseManagerServiceException);
assert(typeof EntitlementNotAllowedException$ === "object");
assert(FailedDependencyException.prototype instanceof LicenseManagerServiceException);
assert(typeof FailedDependencyException$ === "object");
assert(FilterLimitExceededException.prototype instanceof LicenseManagerServiceException);
assert(typeof FilterLimitExceededException$ === "object");
assert(InvalidParameterValueException.prototype instanceof LicenseManagerServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(InvalidResourceStateException.prototype instanceof LicenseManagerServiceException);
assert(typeof InvalidResourceStateException$ === "object");
assert(LicenseUsageException.prototype instanceof LicenseManagerServiceException);
assert(typeof LicenseUsageException$ === "object");
assert(NoEntitlementsAllowedException.prototype instanceof LicenseManagerServiceException);
assert(typeof NoEntitlementsAllowedException$ === "object");
assert(RateLimitExceededException.prototype instanceof LicenseManagerServiceException);
assert(typeof RateLimitExceededException$ === "object");
assert(RedirectException.prototype instanceof LicenseManagerServiceException);
assert(typeof RedirectException$ === "object");
assert(ResourceLimitExceededException.prototype instanceof LicenseManagerServiceException);
assert(typeof ResourceLimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof LicenseManagerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServerInternalException.prototype instanceof LicenseManagerServiceException);
assert(typeof ServerInternalException$ === "object");
assert(UnsupportedDigitalSignatureMethodException.prototype instanceof LicenseManagerServiceException);
assert(typeof UnsupportedDigitalSignatureMethodException$ === "object");
assert(ValidationException.prototype instanceof LicenseManagerServiceException);
assert(typeof ValidationException$ === "object");
assert(LicenseManagerServiceException.prototype instanceof Error);
console.log(`LicenseManager index test passed.`);
