import {
  AcceptGrantCommand,
  AccessDeniedException,
  ActivationOverrideBehavior,
  AllowedOperation,
  AuthorizationException,
  CheckInLicenseCommand,
  CheckoutBorrowLicenseCommand,
  CheckoutLicenseCommand,
  CheckoutType,
  ConflictException,
  CreateGrantCommand,
  CreateGrantVersionCommand,
  CreateLicenseAssetGroupCommand,
  CreateLicenseAssetRulesetCommand,
  CreateLicenseCommand,
  CreateLicenseConfigurationCommand,
  CreateLicenseConversionTaskForResourceCommand,
  CreateLicenseManagerReportGeneratorCommand,
  CreateLicenseVersionCommand,
  CreateTokenCommand,
  DeleteGrantCommand,
  DeleteLicenseAssetGroupCommand,
  DeleteLicenseAssetRulesetCommand,
  DeleteLicenseCommand,
  DeleteLicenseConfigurationCommand,
  DeleteLicenseManagerReportGeneratorCommand,
  DeleteTokenCommand,
  DigitalSignatureMethod,
  EntitlementDataUnit,
  EntitlementNotAllowedException,
  EntitlementUnit,
  ExtendLicenseConsumptionCommand,
  FailedDependencyException,
  FilterLimitExceededException,
  GetAccessTokenCommand,
  GetGrantCommand,
  GetLicenseAssetGroupCommand,
  GetLicenseAssetRulesetCommand,
  GetLicenseCommand,
  GetLicenseConfigurationCommand,
  GetLicenseConversionTaskCommand,
  GetLicenseManagerReportGeneratorCommand,
  GetLicenseUsageCommand,
  GetServiceSettingsCommand,
  GrantStatus,
  InvalidParameterValueException,
  InvalidResourceStateException,
  InventoryFilterCondition,
  LicenseAssetGroupStatus,
  LicenseConfigurationStatus,
  LicenseConversionTaskStatus,
  LicenseCountingType,
  LicenseDeletionStatus,
  LicenseManager,
  LicenseManagerClient,
  LicenseManagerServiceException,
  LicenseStatus,
  LicenseUsageException,
  ListAssetsForLicenseAssetGroupCommand,
  ListAssociationsForLicenseConfigurationCommand,
  ListDistributedGrantsCommand,
  ListFailuresForLicenseConfigurationOperationsCommand,
  ListLicenseAssetGroupsCommand,
  ListLicenseAssetRulesetsCommand,
  ListLicenseConfigurationsCommand,
  ListLicenseConfigurationsForOrganizationCommand,
  ListLicenseConversionTasksCommand,
  ListLicenseManagerReportGeneratorsCommand,
  ListLicenseSpecificationsForResourceCommand,
  ListLicenseVersionsCommand,
  ListLicensesCommand,
  ListReceivedGrantsCommand,
  ListReceivedGrantsForOrganizationCommand,
  ListReceivedLicensesCommand,
  ListReceivedLicensesForOrganizationCommand,
  ListResourceInventoryCommand,
  ListTagsForResourceCommand,
  ListTokensCommand,
  ListUsageForLicenseConfigurationCommand,
  NoEntitlementsAllowedException,
  ProductCodeType,
  RateLimitExceededException,
  ReceivedStatus,
  RedirectException,
  RejectGrantCommand,
  RenewType,
  ReportFrequencyType,
  ReportType,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ResourceType,
  ServerInternalException,
  TagResourceCommand,
  TokenType,
  UnsupportedDigitalSignatureMethodException,
  UntagResourceCommand,
  UpdateLicenseAssetGroupCommand,
  UpdateLicenseAssetRulesetCommand,
  UpdateLicenseConfigurationCommand,
  UpdateLicenseManagerReportGeneratorCommand,
  UpdateLicenseSpecificationsForResourceCommand,
  UpdateServiceSettingsCommand,
  ValidationException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LicenseManagerClient === "function");
assert(typeof LicenseManager === "function");
// commands
assert(typeof AcceptGrantCommand === "function");
assert(typeof CheckInLicenseCommand === "function");
assert(typeof CheckoutBorrowLicenseCommand === "function");
assert(typeof CheckoutLicenseCommand === "function");
assert(typeof CreateGrantCommand === "function");
assert(typeof CreateGrantVersionCommand === "function");
assert(typeof CreateLicenseCommand === "function");
assert(typeof CreateLicenseAssetGroupCommand === "function");
assert(typeof CreateLicenseAssetRulesetCommand === "function");
assert(typeof CreateLicenseConfigurationCommand === "function");
assert(typeof CreateLicenseConversionTaskForResourceCommand === "function");
assert(typeof CreateLicenseManagerReportGeneratorCommand === "function");
assert(typeof CreateLicenseVersionCommand === "function");
assert(typeof CreateTokenCommand === "function");
assert(typeof DeleteGrantCommand === "function");
assert(typeof DeleteLicenseCommand === "function");
assert(typeof DeleteLicenseAssetGroupCommand === "function");
assert(typeof DeleteLicenseAssetRulesetCommand === "function");
assert(typeof DeleteLicenseConfigurationCommand === "function");
assert(typeof DeleteLicenseManagerReportGeneratorCommand === "function");
assert(typeof DeleteTokenCommand === "function");
assert(typeof ExtendLicenseConsumptionCommand === "function");
assert(typeof GetAccessTokenCommand === "function");
assert(typeof GetGrantCommand === "function");
assert(typeof GetLicenseCommand === "function");
assert(typeof GetLicenseAssetGroupCommand === "function");
assert(typeof GetLicenseAssetRulesetCommand === "function");
assert(typeof GetLicenseConfigurationCommand === "function");
assert(typeof GetLicenseConversionTaskCommand === "function");
assert(typeof GetLicenseManagerReportGeneratorCommand === "function");
assert(typeof GetLicenseUsageCommand === "function");
assert(typeof GetServiceSettingsCommand === "function");
assert(typeof ListAssetsForLicenseAssetGroupCommand === "function");
assert(typeof ListAssociationsForLicenseConfigurationCommand === "function");
assert(typeof ListDistributedGrantsCommand === "function");
assert(typeof ListFailuresForLicenseConfigurationOperationsCommand === "function");
assert(typeof ListLicenseAssetGroupsCommand === "function");
assert(typeof ListLicenseAssetRulesetsCommand === "function");
assert(typeof ListLicenseConfigurationsCommand === "function");
assert(typeof ListLicenseConfigurationsForOrganizationCommand === "function");
assert(typeof ListLicenseConversionTasksCommand === "function");
assert(typeof ListLicenseManagerReportGeneratorsCommand === "function");
assert(typeof ListLicensesCommand === "function");
assert(typeof ListLicenseSpecificationsForResourceCommand === "function");
assert(typeof ListLicenseVersionsCommand === "function");
assert(typeof ListReceivedGrantsCommand === "function");
assert(typeof ListReceivedGrantsForOrganizationCommand === "function");
assert(typeof ListReceivedLicensesCommand === "function");
assert(typeof ListReceivedLicensesForOrganizationCommand === "function");
assert(typeof ListResourceInventoryCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTokensCommand === "function");
assert(typeof ListUsageForLicenseConfigurationCommand === "function");
assert(typeof RejectGrantCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateLicenseAssetGroupCommand === "function");
assert(typeof UpdateLicenseAssetRulesetCommand === "function");
assert(typeof UpdateLicenseConfigurationCommand === "function");
assert(typeof UpdateLicenseManagerReportGeneratorCommand === "function");
assert(typeof UpdateLicenseSpecificationsForResourceCommand === "function");
assert(typeof UpdateServiceSettingsCommand === "function");
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
assert(AuthorizationException.prototype instanceof LicenseManagerServiceException);
assert(ConflictException.prototype instanceof LicenseManagerServiceException);
assert(EntitlementNotAllowedException.prototype instanceof LicenseManagerServiceException);
assert(FailedDependencyException.prototype instanceof LicenseManagerServiceException);
assert(FilterLimitExceededException.prototype instanceof LicenseManagerServiceException);
assert(InvalidParameterValueException.prototype instanceof LicenseManagerServiceException);
assert(InvalidResourceStateException.prototype instanceof LicenseManagerServiceException);
assert(LicenseUsageException.prototype instanceof LicenseManagerServiceException);
assert(NoEntitlementsAllowedException.prototype instanceof LicenseManagerServiceException);
assert(RateLimitExceededException.prototype instanceof LicenseManagerServiceException);
assert(RedirectException.prototype instanceof LicenseManagerServiceException);
assert(ResourceLimitExceededException.prototype instanceof LicenseManagerServiceException);
assert(ResourceNotFoundException.prototype instanceof LicenseManagerServiceException);
assert(ServerInternalException.prototype instanceof LicenseManagerServiceException);
assert(UnsupportedDigitalSignatureMethodException.prototype instanceof LicenseManagerServiceException);
assert(ValidationException.prototype instanceof LicenseManagerServiceException);
assert(LicenseManagerServiceException.prototype instanceof Error);
console.log(`LicenseManager index test passed.`);
