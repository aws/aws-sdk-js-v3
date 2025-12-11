import {
  AccessDeniedException,
  AccountSortBy,
  AggregationFindingType,
  AggregationResourceType,
  AggregationType,
  AmiSortBy,
  Architecture,
  AssociateMemberCommand,
  AssociationResultStatusCode,
  AwsEcrContainerSortBy,
  BadRequestException,
  BatchAssociateCodeSecurityScanConfigurationCommand,
  BatchDisassociateCodeSecurityScanConfigurationCommand,
  BatchGetAccountStatusCommand,
  BatchGetCodeSnippetCommand,
  BatchGetFindingDetailsCommand,
  BatchGetFreeTrialInfoCommand,
  BatchGetMemberEc2DeepInspectionStatusCommand,
  BatchUpdateMemberEc2DeepInspectionStatusCommand,
  CancelFindingsReportCommand,
  CancelSbomExportCommand,
  CisFindingStatus,
  CisFindingStatusComparison,
  CisReportFormat,
  CisReportStatus,
  CisResultStatus,
  CisResultStatusComparison,
  CisRuleStatus,
  CisScanConfigurationsSortBy,
  CisScanResultDetailsSortBy,
  CisScanResultsAggregatedByChecksSortBy,
  CisScanResultsAggregatedByTargetResourceSortBy,
  CisScanStatus,
  CisScanStatusComparison,
  CisSecurityLevel,
  CisSecurityLevelComparison,
  CisSortOrder,
  CisStringComparison,
  CisTargetStatus,
  CisTargetStatusComparison,
  CisTargetStatusReason,
  CodeRepositoryProviderType,
  CodeRepositorySortBy,
  CodeScanStatus,
  CodeSnippetErrorCode,
  ConfigurationLevel,
  ConflictException,
  ContinuousIntegrationScanEvent,
  CoverageMapComparison,
  CoverageResourceType,
  CoverageStringComparison,
  CreateCisScanConfigurationCommand,
  CreateCodeSecurityIntegrationCommand,
  CreateCodeSecurityScanConfigurationCommand,
  CreateFilterCommand,
  CreateFindingsReportCommand,
  CreateSbomExportCommand,
  Currency,
  Day,
  DelegatedAdminStatus,
  DeleteCisScanConfigurationCommand,
  DeleteCodeSecurityIntegrationCommand,
  DeleteCodeSecurityScanConfigurationCommand,
  DeleteFilterCommand,
  DescribeOrganizationConfigurationCommand,
  DisableCommand,
  DisableDelegatedAdminAccountCommand,
  DisassociateMemberCommand,
  Ec2DeepInspectionStatus,
  Ec2InstanceSortBy,
  Ec2Platform,
  Ec2ScanMode,
  Ec2ScanModeStatus,
  EcrPullDateRescanDuration,
  EcrPullDateRescanMode,
  EcrRescanDuration,
  EcrRescanDurationStatus,
  EcrScanFrequency,
  EnableCommand,
  EnableDelegatedAdminAccountCommand,
  ErrorCode,
  ExploitAvailable,
  ExternalReportStatus,
  FilterAction,
  FindingDetailsErrorCode,
  FindingStatus,
  FindingType,
  FindingTypeSortBy,
  FixAvailable,
  FreeTrialInfoErrorCode,
  FreeTrialStatus,
  FreeTrialType,
  GetCisScanReportCommand,
  GetCisScanResultDetailsCommand,
  GetClustersForImageCommand,
  GetCodeSecurityIntegrationCommand,
  GetCodeSecurityScanCommand,
  GetCodeSecurityScanConfigurationCommand,
  GetConfigurationCommand,
  GetDelegatedAdminAccountCommand,
  GetEc2DeepInspectionConfigurationCommand,
  GetEncryptionKeyCommand,
  GetFindingsReportStatusCommand,
  GetMemberCommand,
  GetSbomExportCommand,
  GroupKey,
  ImageLayerSortBy,
  Inspector2,
  Inspector2Client,
  Inspector2ServiceException,
  IntegrationStatus,
  IntegrationType,
  InternalServerException,
  LambdaFunctionSortBy,
  LambdaLayerSortBy,
  ListAccountPermissionsCommand,
  ListCisScanConfigurationsCommand,
  ListCisScanResultsAggregatedByChecksCommand,
  ListCisScanResultsAggregatedByTargetResourceCommand,
  ListCisScansCommand,
  ListCisScansDetailLevel,
  ListCisScansSortBy,
  ListCodeSecurityIntegrationsCommand,
  ListCodeSecurityScanConfigurationAssociationsCommand,
  ListCodeSecurityScanConfigurationsCommand,
  ListCoverageCommand,
  ListCoverageStatisticsCommand,
  ListDelegatedAdminAccountsCommand,
  ListFiltersCommand,
  ListFindingAggregationsCommand,
  ListFindingsCommand,
  ListMembersCommand,
  ListTagsForResourceCommand,
  ListUsageTotalsCommand,
  MapComparison,
  NetworkProtocol,
  Operation,
  PackageManager,
  PackageSortBy,
  PackageType,
  PeriodicScanFrequency,
  ProjectSelectionScope,
  RelationshipStatus,
  ReportFormat,
  ReportingErrorCode,
  RepositorySortBy,
  ResetEncryptionKeyCommand,
  ResourceMapComparison,
  ResourceNotFoundException,
  ResourceScanType,
  ResourceStringComparison,
  ResourceType,
  RuleSetCategory,
  Runtime,
  SbomReportFormat,
  ScanMode,
  ScanStatusCode,
  ScanStatusReason,
  ScanType,
  SearchVulnerabilitiesCommand,
  SendCisSessionHealthCommand,
  SendCisSessionTelemetryCommand,
  Service,
  ServiceQuotaExceededException,
  Severity,
  SortField,
  SortOrder,
  StartCisSessionCommand,
  StartCodeSecurityScanCommand,
  Status,
  StopCisSessionCommand,
  StopCisSessionStatus,
  StringComparison,
  TagComparison,
  TagResourceCommand,
  ThrottlingException,
  TitleSortBy,
  UntagResourceCommand,
  UpdateCisScanConfigurationCommand,
  UpdateCodeSecurityIntegrationCommand,
  UpdateCodeSecurityScanConfigurationCommand,
  UpdateConfigurationCommand,
  UpdateEc2DeepInspectionConfigurationCommand,
  UpdateEncryptionKeyCommand,
  UpdateFilterCommand,
  UpdateOrgEc2DeepInspectionConfigurationCommand,
  UpdateOrganizationConfigurationCommand,
  UsageType,
  ValidationException,
  ValidationExceptionReason,
  VulnerabilitySource,
  paginateGetCisScanResultDetails,
  paginateGetClustersForImage,
  paginateListAccountPermissions,
  paginateListCisScanConfigurations,
  paginateListCisScanResultsAggregatedByChecks,
  paginateListCisScanResultsAggregatedByTargetResource,
  paginateListCisScans,
  paginateListCoverage,
  paginateListCoverageStatistics,
  paginateListDelegatedAdminAccounts,
  paginateListFilters,
  paginateListFindingAggregations,
  paginateListFindings,
  paginateListMembers,
  paginateListUsageTotals,
  paginateSearchVulnerabilities,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Inspector2Client === "function");
assert(typeof Inspector2 === "function");
// commands
assert(typeof AssociateMemberCommand === "function");
assert(typeof BatchAssociateCodeSecurityScanConfigurationCommand === "function");
assert(typeof BatchDisassociateCodeSecurityScanConfigurationCommand === "function");
assert(typeof BatchGetAccountStatusCommand === "function");
assert(typeof BatchGetCodeSnippetCommand === "function");
assert(typeof BatchGetFindingDetailsCommand === "function");
assert(typeof BatchGetFreeTrialInfoCommand === "function");
assert(typeof BatchGetMemberEc2DeepInspectionStatusCommand === "function");
assert(typeof BatchUpdateMemberEc2DeepInspectionStatusCommand === "function");
assert(typeof CancelFindingsReportCommand === "function");
assert(typeof CancelSbomExportCommand === "function");
assert(typeof CreateCisScanConfigurationCommand === "function");
assert(typeof CreateCodeSecurityIntegrationCommand === "function");
assert(typeof CreateCodeSecurityScanConfigurationCommand === "function");
assert(typeof CreateFilterCommand === "function");
assert(typeof CreateFindingsReportCommand === "function");
assert(typeof CreateSbomExportCommand === "function");
assert(typeof DeleteCisScanConfigurationCommand === "function");
assert(typeof DeleteCodeSecurityIntegrationCommand === "function");
assert(typeof DeleteCodeSecurityScanConfigurationCommand === "function");
assert(typeof DeleteFilterCommand === "function");
assert(typeof DescribeOrganizationConfigurationCommand === "function");
assert(typeof DisableCommand === "function");
assert(typeof DisableDelegatedAdminAccountCommand === "function");
assert(typeof DisassociateMemberCommand === "function");
assert(typeof EnableCommand === "function");
assert(typeof EnableDelegatedAdminAccountCommand === "function");
assert(typeof GetCisScanReportCommand === "function");
assert(typeof GetCisScanResultDetailsCommand === "function");
assert(typeof GetClustersForImageCommand === "function");
assert(typeof GetCodeSecurityIntegrationCommand === "function");
assert(typeof GetCodeSecurityScanCommand === "function");
assert(typeof GetCodeSecurityScanConfigurationCommand === "function");
assert(typeof GetConfigurationCommand === "function");
assert(typeof GetDelegatedAdminAccountCommand === "function");
assert(typeof GetEc2DeepInspectionConfigurationCommand === "function");
assert(typeof GetEncryptionKeyCommand === "function");
assert(typeof GetFindingsReportStatusCommand === "function");
assert(typeof GetMemberCommand === "function");
assert(typeof GetSbomExportCommand === "function");
assert(typeof ListAccountPermissionsCommand === "function");
assert(typeof ListCisScanConfigurationsCommand === "function");
assert(typeof ListCisScanResultsAggregatedByChecksCommand === "function");
assert(typeof ListCisScanResultsAggregatedByTargetResourceCommand === "function");
assert(typeof ListCisScansCommand === "function");
assert(typeof ListCodeSecurityIntegrationsCommand === "function");
assert(typeof ListCodeSecurityScanConfigurationAssociationsCommand === "function");
assert(typeof ListCodeSecurityScanConfigurationsCommand === "function");
assert(typeof ListCoverageCommand === "function");
assert(typeof ListCoverageStatisticsCommand === "function");
assert(typeof ListDelegatedAdminAccountsCommand === "function");
assert(typeof ListFiltersCommand === "function");
assert(typeof ListFindingAggregationsCommand === "function");
assert(typeof ListFindingsCommand === "function");
assert(typeof ListMembersCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListUsageTotalsCommand === "function");
assert(typeof ResetEncryptionKeyCommand === "function");
assert(typeof SearchVulnerabilitiesCommand === "function");
assert(typeof SendCisSessionHealthCommand === "function");
assert(typeof SendCisSessionTelemetryCommand === "function");
assert(typeof StartCisSessionCommand === "function");
assert(typeof StartCodeSecurityScanCommand === "function");
assert(typeof StopCisSessionCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateCisScanConfigurationCommand === "function");
assert(typeof UpdateCodeSecurityIntegrationCommand === "function");
assert(typeof UpdateCodeSecurityScanConfigurationCommand === "function");
assert(typeof UpdateConfigurationCommand === "function");
assert(typeof UpdateEc2DeepInspectionConfigurationCommand === "function");
assert(typeof UpdateEncryptionKeyCommand === "function");
assert(typeof UpdateFilterCommand === "function");
assert(typeof UpdateOrganizationConfigurationCommand === "function");
assert(typeof UpdateOrgEc2DeepInspectionConfigurationCommand === "function");
// enums
assert(typeof AccountSortBy === "object");
assert(typeof AggregationFindingType === "object");
assert(typeof AggregationResourceType === "object");
assert(typeof AggregationType === "object");
assert(typeof AmiSortBy === "object");
assert(typeof Architecture === "object");
assert(typeof AssociationResultStatusCode === "object");
assert(typeof AwsEcrContainerSortBy === "object");
assert(typeof CisFindingStatus === "object");
assert(typeof CisFindingStatusComparison === "object");
assert(typeof CisReportFormat === "object");
assert(typeof CisReportStatus === "object");
assert(typeof CisResultStatus === "object");
assert(typeof CisResultStatusComparison === "object");
assert(typeof CisRuleStatus === "object");
assert(typeof CisScanConfigurationsSortBy === "object");
assert(typeof CisScanResultDetailsSortBy === "object");
assert(typeof CisScanResultsAggregatedByChecksSortBy === "object");
assert(typeof CisScanResultsAggregatedByTargetResourceSortBy === "object");
assert(typeof CisScanStatus === "object");
assert(typeof CisScanStatusComparison === "object");
assert(typeof CisSecurityLevel === "object");
assert(typeof CisSecurityLevelComparison === "object");
assert(typeof CisSortOrder === "object");
assert(typeof CisStringComparison === "object");
assert(typeof CisTargetStatus === "object");
assert(typeof CisTargetStatusComparison === "object");
assert(typeof CisTargetStatusReason === "object");
assert(typeof CodeRepositoryProviderType === "object");
assert(typeof CodeRepositorySortBy === "object");
assert(typeof CodeScanStatus === "object");
assert(typeof CodeSnippetErrorCode === "object");
assert(typeof ConfigurationLevel === "object");
assert(typeof ContinuousIntegrationScanEvent === "object");
assert(typeof CoverageMapComparison === "object");
assert(typeof CoverageResourceType === "object");
assert(typeof CoverageStringComparison === "object");
assert(typeof Currency === "object");
assert(typeof Day === "object");
assert(typeof DelegatedAdminStatus === "object");
assert(typeof Ec2DeepInspectionStatus === "object");
assert(typeof Ec2InstanceSortBy === "object");
assert(typeof Ec2Platform === "object");
assert(typeof Ec2ScanMode === "object");
assert(typeof Ec2ScanModeStatus === "object");
assert(typeof EcrPullDateRescanDuration === "object");
assert(typeof EcrPullDateRescanMode === "object");
assert(typeof EcrRescanDuration === "object");
assert(typeof EcrRescanDurationStatus === "object");
assert(typeof EcrScanFrequency === "object");
assert(typeof ErrorCode === "object");
assert(typeof ExploitAvailable === "object");
assert(typeof ExternalReportStatus === "object");
assert(typeof FilterAction === "object");
assert(typeof FindingDetailsErrorCode === "object");
assert(typeof FindingStatus === "object");
assert(typeof FindingType === "object");
assert(typeof FindingTypeSortBy === "object");
assert(typeof FixAvailable === "object");
assert(typeof FreeTrialInfoErrorCode === "object");
assert(typeof FreeTrialStatus === "object");
assert(typeof FreeTrialType === "object");
assert(typeof GroupKey === "object");
assert(typeof ImageLayerSortBy === "object");
assert(typeof IntegrationStatus === "object");
assert(typeof IntegrationType === "object");
assert(typeof LambdaFunctionSortBy === "object");
assert(typeof LambdaLayerSortBy === "object");
assert(typeof ListCisScansDetailLevel === "object");
assert(typeof ListCisScansSortBy === "object");
assert(typeof MapComparison === "object");
assert(typeof NetworkProtocol === "object");
assert(typeof Operation === "object");
assert(typeof PackageManager === "object");
assert(typeof PackageSortBy === "object");
assert(typeof PackageType === "object");
assert(typeof PeriodicScanFrequency === "object");
assert(typeof ProjectSelectionScope === "object");
assert(typeof RelationshipStatus === "object");
assert(typeof ReportFormat === "object");
assert(typeof ReportingErrorCode === "object");
assert(typeof RepositorySortBy === "object");
assert(typeof ResourceMapComparison === "object");
assert(typeof ResourceScanType === "object");
assert(typeof ResourceStringComparison === "object");
assert(typeof ResourceType === "object");
assert(typeof RuleSetCategory === "object");
assert(typeof Runtime === "object");
assert(typeof SbomReportFormat === "object");
assert(typeof ScanMode === "object");
assert(typeof ScanStatusCode === "object");
assert(typeof ScanStatusReason === "object");
assert(typeof ScanType === "object");
assert(typeof Service === "object");
assert(typeof Severity === "object");
assert(typeof SortField === "object");
assert(typeof SortOrder === "object");
assert(typeof Status === "object");
assert(typeof StopCisSessionStatus === "object");
assert(typeof StringComparison === "object");
assert(typeof TagComparison === "object");
assert(typeof TitleSortBy === "object");
assert(typeof UsageType === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof VulnerabilitySource === "object");
// errors
assert(AccessDeniedException.prototype instanceof Inspector2ServiceException);
assert(BadRequestException.prototype instanceof Inspector2ServiceException);
assert(ConflictException.prototype instanceof Inspector2ServiceException);
assert(InternalServerException.prototype instanceof Inspector2ServiceException);
assert(ResourceNotFoundException.prototype instanceof Inspector2ServiceException);
assert(ServiceQuotaExceededException.prototype instanceof Inspector2ServiceException);
assert(ThrottlingException.prototype instanceof Inspector2ServiceException);
assert(ValidationException.prototype instanceof Inspector2ServiceException);
assert(Inspector2ServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetCisScanResultDetails === "function");
assert(typeof paginateGetClustersForImage === "function");
assert(typeof paginateListAccountPermissions === "function");
assert(typeof paginateListCisScanConfigurations === "function");
assert(typeof paginateListCisScanResultsAggregatedByChecks === "function");
assert(typeof paginateListCisScanResultsAggregatedByTargetResource === "function");
assert(typeof paginateListCisScans === "function");
assert(typeof paginateListCoverage === "function");
assert(typeof paginateListCoverageStatistics === "function");
assert(typeof paginateListDelegatedAdminAccounts === "function");
assert(typeof paginateListFilters === "function");
assert(typeof paginateListFindingAggregations === "function");
assert(typeof paginateListFindings === "function");
assert(typeof paginateListMembers === "function");
assert(typeof paginateListUsageTotals === "function");
assert(typeof paginateSearchVulnerabilities === "function");
console.log(`Inspector2 index test passed.`);
