import {
  AccessDeniedException,
  AccessDeniedException$,
  Account$,
  AccountAggregation$,
  AccountAggregationResponse$,
  AccountSortBy,
  AccountState$,
  AggregationFindingType,
  AggregationRequest$,
  AggregationResourceType,
  AggregationResponse$,
  AggregationType,
  AmiAggregation$,
  AmiAggregationResponse$,
  AmiSortBy,
  Architecture,
  AssociateConfigurationRequest$,
  AssociateMember$,
  AssociateMemberCommand,
  AssociateMemberRequest$,
  AssociateMemberResponse$,
  AssociationResultStatusCode,
  AtigData$,
  AutoEnable$,
  AwsEc2InstanceDetails$,
  AwsEcrContainerAggregation$,
  AwsEcrContainerAggregationResponse$,
  AwsEcrContainerImageDetails$,
  AwsEcrContainerSortBy,
  AwsEcsMetadataDetails$,
  AwsEksMetadataDetails$,
  AwsEksWorkloadInfo$,
  AwsLambdaFunctionDetails$,
  BadRequestException,
  BadRequestException$,
  BatchAssociateCodeSecurityScanConfiguration$,
  BatchAssociateCodeSecurityScanConfigurationCommand,
  BatchAssociateCodeSecurityScanConfigurationRequest$,
  BatchAssociateCodeSecurityScanConfigurationResponse$,
  BatchDisassociateCodeSecurityScanConfiguration$,
  BatchDisassociateCodeSecurityScanConfigurationCommand,
  BatchDisassociateCodeSecurityScanConfigurationRequest$,
  BatchDisassociateCodeSecurityScanConfigurationResponse$,
  BatchGetAccountStatus$,
  BatchGetAccountStatusCommand,
  BatchGetAccountStatusRequest$,
  BatchGetAccountStatusResponse$,
  BatchGetCodeSnippet$,
  BatchGetCodeSnippetCommand,
  BatchGetCodeSnippetRequest$,
  BatchGetCodeSnippetResponse$,
  BatchGetFindingDetails$,
  BatchGetFindingDetailsCommand,
  BatchGetFindingDetailsRequest$,
  BatchGetFindingDetailsResponse$,
  BatchGetFreeTrialInfo$,
  BatchGetFreeTrialInfoCommand,
  BatchGetFreeTrialInfoRequest$,
  BatchGetFreeTrialInfoResponse$,
  BatchGetMemberEc2DeepInspectionStatus$,
  BatchGetMemberEc2DeepInspectionStatusCommand,
  BatchGetMemberEc2DeepInspectionStatusRequest$,
  BatchGetMemberEc2DeepInspectionStatusResponse$,
  BatchUpdateMemberEc2DeepInspectionStatus$,
  BatchUpdateMemberEc2DeepInspectionStatusCommand,
  BatchUpdateMemberEc2DeepInspectionStatusRequest$,
  BatchUpdateMemberEc2DeepInspectionStatusResponse$,
  CancelFindingsReport$,
  CancelFindingsReportCommand,
  CancelFindingsReportRequest$,
  CancelFindingsReportResponse$,
  CancelSbomExport$,
  CancelSbomExportCommand,
  CancelSbomExportRequest$,
  CancelSbomExportResponse$,
  CisCheckAggregation$,
  CisDateFilter$,
  CisFindingStatus,
  CisFindingStatusComparison,
  CisFindingStatusFilter$,
  CisNumberFilter$,
  CisReportFormat,
  CisReportStatus,
  CisResultStatus,
  CisResultStatusComparison,
  CisResultStatusFilter$,
  CisRuleStatus,
  CisScan$,
  CisScanConfiguration$,
  CisScanConfigurationsSortBy,
  CisScanResultDetails$,
  CisScanResultDetailsFilterCriteria$,
  CisScanResultDetailsSortBy,
  CisScanResultsAggregatedByChecksFilterCriteria$,
  CisScanResultsAggregatedByChecksSortBy,
  CisScanResultsAggregatedByTargetResourceFilterCriteria$,
  CisScanResultsAggregatedByTargetResourceSortBy,
  CisScanStatus,
  CisScanStatusComparison,
  CisScanStatusFilter$,
  CisSecurityLevel,
  CisSecurityLevelComparison,
  CisSecurityLevelFilter$,
  CisSessionMessage$,
  CisSortOrder,
  CisStringComparison,
  CisStringFilter$,
  CisTargetResourceAggregation$,
  CisTargetStatus,
  CisTargetStatusComparison,
  CisTargetStatusFilter$,
  CisTargetStatusReason,
  CisTargetStatusReasonFilter$,
  CisTargets$,
  CisaData$,
  ClusterDetails$,
  ClusterForImageFilterCriteria$,
  ClusterInformation$,
  ClusterMetadata$,
  CodeFilePath$,
  CodeLine$,
  CodeRepositoryAggregation$,
  CodeRepositoryAggregationResponse$,
  CodeRepositoryDetails$,
  CodeRepositoryMetadata$,
  CodeRepositoryOnDemandScan$,
  CodeRepositoryProviderType,
  CodeRepositorySortBy,
  CodeScanStatus,
  CodeSecurityIntegrationSummary$,
  CodeSecurityResource$,
  CodeSecurityScanConfiguration$,
  CodeSecurityScanConfigurationAssociationSummary$,
  CodeSecurityScanConfigurationSummary$,
  CodeSnippetError$,
  CodeSnippetErrorCode,
  CodeSnippetResult$,
  CodeVulnerabilityDetails$,
  ComputePlatform$,
  ConfigurationLevel,
  ConflictException,
  ConflictException$,
  ContinuousIntegrationScanConfiguration$,
  ContinuousIntegrationScanEvent,
  Counts$,
  CoverageDateFilter$,
  CoverageFilterCriteria$,
  CoverageMapComparison,
  CoverageMapFilter$,
  CoverageNumberFilter$,
  CoverageResourceType,
  CoverageStringComparison,
  CoverageStringFilter$,
  CoveredResource$,
  CreateCisScanConfiguration$,
  CreateCisScanConfigurationCommand,
  CreateCisScanConfigurationRequest$,
  CreateCisScanConfigurationResponse$,
  CreateCisTargets$,
  CreateCodeSecurityIntegration$,
  CreateCodeSecurityIntegrationCommand,
  CreateCodeSecurityIntegrationRequest$,
  CreateCodeSecurityIntegrationResponse$,
  CreateCodeSecurityScanConfiguration$,
  CreateCodeSecurityScanConfigurationCommand,
  CreateCodeSecurityScanConfigurationRequest$,
  CreateCodeSecurityScanConfigurationResponse$,
  CreateFilter$,
  CreateFilterCommand,
  CreateFilterRequest$,
  CreateFilterResponse$,
  CreateFindingsReport$,
  CreateFindingsReportCommand,
  CreateFindingsReportRequest$,
  CreateFindingsReportResponse$,
  CreateGitLabSelfManagedIntegrationDetail$,
  CreateIntegrationDetail$,
  CreateSbomExport$,
  CreateSbomExportCommand,
  CreateSbomExportRequest$,
  CreateSbomExportResponse$,
  Currency,
  Cvss2$,
  Cvss3$,
  Cvss4$,
  CvssScore$,
  CvssScoreAdjustment$,
  CvssScoreDetails$,
  DailySchedule$,
  DateFilter$,
  Day,
  DelegatedAdmin$,
  DelegatedAdminAccount$,
  DelegatedAdminStatus,
  DeleteCisScanConfiguration$,
  DeleteCisScanConfigurationCommand,
  DeleteCisScanConfigurationRequest$,
  DeleteCisScanConfigurationResponse$,
  DeleteCodeSecurityIntegration$,
  DeleteCodeSecurityIntegrationCommand,
  DeleteCodeSecurityIntegrationRequest$,
  DeleteCodeSecurityIntegrationResponse$,
  DeleteCodeSecurityScanConfiguration$,
  DeleteCodeSecurityScanConfigurationCommand,
  DeleteCodeSecurityScanConfigurationRequest$,
  DeleteCodeSecurityScanConfigurationResponse$,
  DeleteFilter$,
  DeleteFilterCommand,
  DeleteFilterRequest$,
  DeleteFilterResponse$,
  DescribeOrganizationConfiguration$,
  DescribeOrganizationConfigurationCommand,
  DescribeOrganizationConfigurationRequest$,
  DescribeOrganizationConfigurationResponse$,
  Destination$,
  Disable$,
  DisableCommand,
  DisableDelegatedAdminAccount$,
  DisableDelegatedAdminAccountCommand,
  DisableDelegatedAdminAccountRequest$,
  DisableDelegatedAdminAccountResponse$,
  DisableRequest$,
  DisableResponse$,
  DisassociateConfigurationRequest$,
  DisassociateMember$,
  DisassociateMemberCommand,
  DisassociateMemberRequest$,
  DisassociateMemberResponse$,
  Ec2Configuration$,
  Ec2ConfigurationState$,
  Ec2DeepInspectionStatus,
  Ec2InstanceAggregation$,
  Ec2InstanceAggregationResponse$,
  Ec2InstanceSortBy,
  Ec2Metadata$,
  Ec2Platform,
  Ec2ScanMode,
  Ec2ScanModeState$,
  Ec2ScanModeStatus,
  EcrConfiguration$,
  EcrConfigurationState$,
  EcrContainerImageMetadata$,
  EcrPullDateRescanDuration,
  EcrPullDateRescanMode,
  EcrRepositoryMetadata$,
  EcrRescanDuration,
  EcrRescanDurationState$,
  EcrRescanDurationStatus,
  EcrScanFrequency,
  Enable$,
  EnableCommand,
  EnableDelegatedAdminAccount$,
  EnableDelegatedAdminAccountCommand,
  EnableDelegatedAdminAccountRequest$,
  EnableDelegatedAdminAccountResponse$,
  EnableRequest$,
  EnableResponse$,
  Epss$,
  EpssDetails$,
  ErrorCode,
  Evidence$,
  ExploitAvailable,
  ExploitObserved$,
  ExploitabilityDetails$,
  ExternalReportStatus,
  FailedAccount$,
  FailedAssociationResult$,
  FailedMemberAccountEc2DeepInspectionStatusState$,
  Filter$,
  FilterAction,
  FilterCriteria$,
  Finding$,
  FindingDetail$,
  FindingDetailsError$,
  FindingDetailsErrorCode,
  FindingStatus,
  FindingType,
  FindingTypeAggregation$,
  FindingTypeAggregationResponse$,
  FindingTypeSortBy,
  FixAvailable,
  FreeTrialAccountInfo$,
  FreeTrialInfo$,
  FreeTrialInfoError$,
  FreeTrialInfoErrorCode,
  FreeTrialStatus,
  FreeTrialType,
  GetCisScanReport$,
  GetCisScanReportCommand,
  GetCisScanReportRequest$,
  GetCisScanReportResponse$,
  GetCisScanResultDetails$,
  GetCisScanResultDetailsCommand,
  GetCisScanResultDetailsRequest$,
  GetCisScanResultDetailsResponse$,
  GetClustersForImage$,
  GetClustersForImageCommand,
  GetClustersForImageRequest$,
  GetClustersForImageResponse$,
  GetCodeSecurityIntegration$,
  GetCodeSecurityIntegrationCommand,
  GetCodeSecurityIntegrationRequest$,
  GetCodeSecurityIntegrationResponse$,
  GetCodeSecurityScan$,
  GetCodeSecurityScanCommand,
  GetCodeSecurityScanConfiguration$,
  GetCodeSecurityScanConfigurationCommand,
  GetCodeSecurityScanConfigurationRequest$,
  GetCodeSecurityScanConfigurationResponse$,
  GetCodeSecurityScanRequest$,
  GetCodeSecurityScanResponse$,
  GetConfiguration$,
  GetConfigurationCommand,
  GetConfigurationRequest$,
  GetConfigurationResponse$,
  GetDelegatedAdminAccount$,
  GetDelegatedAdminAccountCommand,
  GetDelegatedAdminAccountRequest$,
  GetDelegatedAdminAccountResponse$,
  GetEc2DeepInspectionConfiguration$,
  GetEc2DeepInspectionConfigurationCommand,
  GetEc2DeepInspectionConfigurationRequest$,
  GetEc2DeepInspectionConfigurationResponse$,
  GetEncryptionKey$,
  GetEncryptionKeyCommand,
  GetEncryptionKeyRequest$,
  GetEncryptionKeyResponse$,
  GetFindingsReportStatus$,
  GetFindingsReportStatusCommand,
  GetFindingsReportStatusRequest$,
  GetFindingsReportStatusResponse$,
  GetMember$,
  GetMemberCommand,
  GetMemberRequest$,
  GetMemberResponse$,
  GetSbomExport$,
  GetSbomExportCommand,
  GetSbomExportRequest$,
  GetSbomExportResponse$,
  GroupKey,
  ImageLayerAggregation$,
  ImageLayerAggregationResponse$,
  ImageLayerSortBy,
  Inspector2,
  Inspector2Client,
  Inspector2ServiceException,
  InspectorScoreDetails$,
  IntegrationStatus,
  IntegrationType,
  InternalServerException,
  InternalServerException$,
  LambdaFunctionAggregation$,
  LambdaFunctionAggregationResponse$,
  LambdaFunctionMetadata$,
  LambdaFunctionSortBy,
  LambdaLayerAggregation$,
  LambdaLayerAggregationResponse$,
  LambdaLayerSortBy,
  LambdaVpcConfig$,
  ListAccountPermissions$,
  ListAccountPermissionsCommand,
  ListAccountPermissionsRequest$,
  ListAccountPermissionsResponse$,
  ListCisScanConfigurations$,
  ListCisScanConfigurationsCommand,
  ListCisScanConfigurationsFilterCriteria$,
  ListCisScanConfigurationsRequest$,
  ListCisScanConfigurationsResponse$,
  ListCisScanResultsAggregatedByChecks$,
  ListCisScanResultsAggregatedByChecksCommand,
  ListCisScanResultsAggregatedByChecksRequest$,
  ListCisScanResultsAggregatedByChecksResponse$,
  ListCisScanResultsAggregatedByTargetResource$,
  ListCisScanResultsAggregatedByTargetResourceCommand,
  ListCisScanResultsAggregatedByTargetResourceRequest$,
  ListCisScanResultsAggregatedByTargetResourceResponse$,
  ListCisScans$,
  ListCisScansCommand,
  ListCisScansDetailLevel,
  ListCisScansFilterCriteria$,
  ListCisScansRequest$,
  ListCisScansResponse$,
  ListCisScansSortBy,
  ListCodeSecurityIntegrations$,
  ListCodeSecurityIntegrationsCommand,
  ListCodeSecurityIntegrationsRequest$,
  ListCodeSecurityIntegrationsResponse$,
  ListCodeSecurityScanConfigurationAssociations$,
  ListCodeSecurityScanConfigurationAssociationsCommand,
  ListCodeSecurityScanConfigurationAssociationsRequest$,
  ListCodeSecurityScanConfigurationAssociationsResponse$,
  ListCodeSecurityScanConfigurations$,
  ListCodeSecurityScanConfigurationsCommand,
  ListCodeSecurityScanConfigurationsRequest$,
  ListCodeSecurityScanConfigurationsResponse$,
  ListCoverage$,
  ListCoverageCommand,
  ListCoverageRequest$,
  ListCoverageResponse$,
  ListCoverageStatistics$,
  ListCoverageStatisticsCommand,
  ListCoverageStatisticsRequest$,
  ListCoverageStatisticsResponse$,
  ListDelegatedAdminAccounts$,
  ListDelegatedAdminAccountsCommand,
  ListDelegatedAdminAccountsRequest$,
  ListDelegatedAdminAccountsResponse$,
  ListFilters$,
  ListFiltersCommand,
  ListFiltersRequest$,
  ListFiltersResponse$,
  ListFindingAggregations$,
  ListFindingAggregationsCommand,
  ListFindingAggregationsRequest$,
  ListFindingAggregationsResponse$,
  ListFindings$,
  ListFindingsCommand,
  ListFindingsRequest$,
  ListFindingsResponse$,
  ListMembers$,
  ListMembersCommand,
  ListMembersRequest$,
  ListMembersResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListUsageTotals$,
  ListUsageTotalsCommand,
  ListUsageTotalsRequest$,
  ListUsageTotalsResponse$,
  MapComparison,
  MapFilter$,
  Member$,
  MemberAccountEc2DeepInspectionStatus$,
  MemberAccountEc2DeepInspectionStatusState$,
  MonthlySchedule$,
  NetworkPath$,
  NetworkProtocol,
  NetworkReachabilityDetails$,
  NumberFilter$,
  OneTimeSchedule$,
  Operation,
  PackageAggregation$,
  PackageAggregationResponse$,
  PackageFilter$,
  PackageManager,
  PackageSortBy,
  PackageType,
  PackageVulnerabilityDetails$,
  PeriodicScanConfiguration$,
  PeriodicScanFrequency,
  Permission$,
  PortRange$,
  PortRangeFilter$,
  ProjectCodeSecurityScanConfiguration$,
  ProjectContinuousIntegrationScanConfiguration$,
  ProjectPeriodicScanConfiguration$,
  ProjectSelectionScope,
  Recommendation$,
  RelationshipStatus,
  Remediation$,
  ReportFormat,
  ReportingErrorCode,
  RepositoryAggregation$,
  RepositoryAggregationResponse$,
  RepositorySortBy,
  ResetEncryptionKey$,
  ResetEncryptionKeyCommand,
  ResetEncryptionKeyRequest$,
  ResetEncryptionKeyResponse$,
  Resource$,
  ResourceDetails$,
  ResourceFilterCriteria$,
  ResourceMapComparison,
  ResourceMapFilter$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceScanMetadata$,
  ResourceScanType,
  ResourceState$,
  ResourceStatus$,
  ResourceStringComparison,
  ResourceStringFilter$,
  ResourceType,
  RuleSetCategory,
  Runtime,
  SbomReportFormat,
  ScanMode,
  ScanStatus$,
  ScanStatusCode,
  ScanStatusReason,
  ScanType,
  Schedule$,
  ScopeSettings$,
  SearchVulnerabilities$,
  SearchVulnerabilitiesCommand,
  SearchVulnerabilitiesFilterCriteria$,
  SearchVulnerabilitiesRequest$,
  SearchVulnerabilitiesResponse$,
  SendCisSessionHealth$,
  SendCisSessionHealthCommand,
  SendCisSessionHealthRequest$,
  SendCisSessionHealthResponse$,
  SendCisSessionTelemetry$,
  SendCisSessionTelemetryCommand,
  SendCisSessionTelemetryRequest$,
  SendCisSessionTelemetryResponse$,
  Service,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Severity,
  SeverityCounts$,
  SortCriteria$,
  SortField,
  SortOrder,
  StartCisSession$,
  StartCisSessionCommand,
  StartCisSessionMessage$,
  StartCisSessionRequest$,
  StartCisSessionResponse$,
  StartCodeSecurityScan$,
  StartCodeSecurityScanCommand,
  StartCodeSecurityScanRequest$,
  StartCodeSecurityScanResponse$,
  State$,
  Status,
  StatusCounts$,
  Step$,
  StopCisMessageProgress$,
  StopCisSession$,
  StopCisSessionCommand,
  StopCisSessionMessage$,
  StopCisSessionRequest$,
  StopCisSessionResponse$,
  StopCisSessionStatus,
  StringComparison,
  StringFilter$,
  SuccessfulAssociationResult$,
  SuggestedFix$,
  TagComparison,
  TagFilter$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  Time$,
  TitleAggregation$,
  TitleAggregationResponse$,
  TitleSortBy,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateCisScanConfiguration$,
  UpdateCisScanConfigurationCommand,
  UpdateCisScanConfigurationRequest$,
  UpdateCisScanConfigurationResponse$,
  UpdateCisTargets$,
  UpdateCodeSecurityIntegration$,
  UpdateCodeSecurityIntegrationCommand,
  UpdateCodeSecurityIntegrationRequest$,
  UpdateCodeSecurityIntegrationResponse$,
  UpdateCodeSecurityScanConfiguration$,
  UpdateCodeSecurityScanConfigurationCommand,
  UpdateCodeSecurityScanConfigurationRequest$,
  UpdateCodeSecurityScanConfigurationResponse$,
  UpdateConfiguration$,
  UpdateConfigurationCommand,
  UpdateConfigurationRequest$,
  UpdateConfigurationResponse$,
  UpdateEc2DeepInspectionConfiguration$,
  UpdateEc2DeepInspectionConfigurationCommand,
  UpdateEc2DeepInspectionConfigurationRequest$,
  UpdateEc2DeepInspectionConfigurationResponse$,
  UpdateEncryptionKey$,
  UpdateEncryptionKeyCommand,
  UpdateEncryptionKeyRequest$,
  UpdateEncryptionKeyResponse$,
  UpdateFilter$,
  UpdateFilterCommand,
  UpdateFilterRequest$,
  UpdateFilterResponse$,
  UpdateGitHubIntegrationDetail$,
  UpdateGitLabSelfManagedIntegrationDetail$,
  UpdateIntegrationDetails$,
  UpdateOrgEc2DeepInspectionConfiguration$,
  UpdateOrgEc2DeepInspectionConfigurationCommand,
  UpdateOrgEc2DeepInspectionConfigurationRequest$,
  UpdateOrgEc2DeepInspectionConfigurationResponse$,
  UpdateOrganizationConfiguration$,
  UpdateOrganizationConfigurationCommand,
  UpdateOrganizationConfigurationRequest$,
  UpdateOrganizationConfigurationResponse$,
  Usage$,
  UsageTotal$,
  UsageType,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  Vulnerability$,
  VulnerabilitySource,
  VulnerablePackage$,
  WeeklySchedule$,
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
assert(typeof AssociateMember$ === "object");
assert(typeof BatchAssociateCodeSecurityScanConfigurationCommand === "function");
assert(typeof BatchAssociateCodeSecurityScanConfiguration$ === "object");
assert(typeof BatchDisassociateCodeSecurityScanConfigurationCommand === "function");
assert(typeof BatchDisassociateCodeSecurityScanConfiguration$ === "object");
assert(typeof BatchGetAccountStatusCommand === "function");
assert(typeof BatchGetAccountStatus$ === "object");
assert(typeof BatchGetCodeSnippetCommand === "function");
assert(typeof BatchGetCodeSnippet$ === "object");
assert(typeof BatchGetFindingDetailsCommand === "function");
assert(typeof BatchGetFindingDetails$ === "object");
assert(typeof BatchGetFreeTrialInfoCommand === "function");
assert(typeof BatchGetFreeTrialInfo$ === "object");
assert(typeof BatchGetMemberEc2DeepInspectionStatusCommand === "function");
assert(typeof BatchGetMemberEc2DeepInspectionStatus$ === "object");
assert(typeof BatchUpdateMemberEc2DeepInspectionStatusCommand === "function");
assert(typeof BatchUpdateMemberEc2DeepInspectionStatus$ === "object");
assert(typeof CancelFindingsReportCommand === "function");
assert(typeof CancelFindingsReport$ === "object");
assert(typeof CancelSbomExportCommand === "function");
assert(typeof CancelSbomExport$ === "object");
assert(typeof CreateCisScanConfigurationCommand === "function");
assert(typeof CreateCisScanConfiguration$ === "object");
assert(typeof CreateCodeSecurityIntegrationCommand === "function");
assert(typeof CreateCodeSecurityIntegration$ === "object");
assert(typeof CreateCodeSecurityScanConfigurationCommand === "function");
assert(typeof CreateCodeSecurityScanConfiguration$ === "object");
assert(typeof CreateFilterCommand === "function");
assert(typeof CreateFilter$ === "object");
assert(typeof CreateFindingsReportCommand === "function");
assert(typeof CreateFindingsReport$ === "object");
assert(typeof CreateSbomExportCommand === "function");
assert(typeof CreateSbomExport$ === "object");
assert(typeof DeleteCisScanConfigurationCommand === "function");
assert(typeof DeleteCisScanConfiguration$ === "object");
assert(typeof DeleteCodeSecurityIntegrationCommand === "function");
assert(typeof DeleteCodeSecurityIntegration$ === "object");
assert(typeof DeleteCodeSecurityScanConfigurationCommand === "function");
assert(typeof DeleteCodeSecurityScanConfiguration$ === "object");
assert(typeof DeleteFilterCommand === "function");
assert(typeof DeleteFilter$ === "object");
assert(typeof DescribeOrganizationConfigurationCommand === "function");
assert(typeof DescribeOrganizationConfiguration$ === "object");
assert(typeof DisableCommand === "function");
assert(typeof Disable$ === "object");
assert(typeof DisableDelegatedAdminAccountCommand === "function");
assert(typeof DisableDelegatedAdminAccount$ === "object");
assert(typeof DisassociateMemberCommand === "function");
assert(typeof DisassociateMember$ === "object");
assert(typeof EnableCommand === "function");
assert(typeof Enable$ === "object");
assert(typeof EnableDelegatedAdminAccountCommand === "function");
assert(typeof EnableDelegatedAdminAccount$ === "object");
assert(typeof GetCisScanReportCommand === "function");
assert(typeof GetCisScanReport$ === "object");
assert(typeof GetCisScanResultDetailsCommand === "function");
assert(typeof GetCisScanResultDetails$ === "object");
assert(typeof GetClustersForImageCommand === "function");
assert(typeof GetClustersForImage$ === "object");
assert(typeof GetCodeSecurityIntegrationCommand === "function");
assert(typeof GetCodeSecurityIntegration$ === "object");
assert(typeof GetCodeSecurityScanCommand === "function");
assert(typeof GetCodeSecurityScan$ === "object");
assert(typeof GetCodeSecurityScanConfigurationCommand === "function");
assert(typeof GetCodeSecurityScanConfiguration$ === "object");
assert(typeof GetConfigurationCommand === "function");
assert(typeof GetConfiguration$ === "object");
assert(typeof GetDelegatedAdminAccountCommand === "function");
assert(typeof GetDelegatedAdminAccount$ === "object");
assert(typeof GetEc2DeepInspectionConfigurationCommand === "function");
assert(typeof GetEc2DeepInspectionConfiguration$ === "object");
assert(typeof GetEncryptionKeyCommand === "function");
assert(typeof GetEncryptionKey$ === "object");
assert(typeof GetFindingsReportStatusCommand === "function");
assert(typeof GetFindingsReportStatus$ === "object");
assert(typeof GetMemberCommand === "function");
assert(typeof GetMember$ === "object");
assert(typeof GetSbomExportCommand === "function");
assert(typeof GetSbomExport$ === "object");
assert(typeof ListAccountPermissionsCommand === "function");
assert(typeof ListAccountPermissions$ === "object");
assert(typeof ListCisScanConfigurationsCommand === "function");
assert(typeof ListCisScanConfigurations$ === "object");
assert(typeof ListCisScanResultsAggregatedByChecksCommand === "function");
assert(typeof ListCisScanResultsAggregatedByChecks$ === "object");
assert(typeof ListCisScanResultsAggregatedByTargetResourceCommand === "function");
assert(typeof ListCisScanResultsAggregatedByTargetResource$ === "object");
assert(typeof ListCisScansCommand === "function");
assert(typeof ListCisScans$ === "object");
assert(typeof ListCodeSecurityIntegrationsCommand === "function");
assert(typeof ListCodeSecurityIntegrations$ === "object");
assert(typeof ListCodeSecurityScanConfigurationAssociationsCommand === "function");
assert(typeof ListCodeSecurityScanConfigurationAssociations$ === "object");
assert(typeof ListCodeSecurityScanConfigurationsCommand === "function");
assert(typeof ListCodeSecurityScanConfigurations$ === "object");
assert(typeof ListCoverageCommand === "function");
assert(typeof ListCoverage$ === "object");
assert(typeof ListCoverageStatisticsCommand === "function");
assert(typeof ListCoverageStatistics$ === "object");
assert(typeof ListDelegatedAdminAccountsCommand === "function");
assert(typeof ListDelegatedAdminAccounts$ === "object");
assert(typeof ListFiltersCommand === "function");
assert(typeof ListFilters$ === "object");
assert(typeof ListFindingAggregationsCommand === "function");
assert(typeof ListFindingAggregations$ === "object");
assert(typeof ListFindingsCommand === "function");
assert(typeof ListFindings$ === "object");
assert(typeof ListMembersCommand === "function");
assert(typeof ListMembers$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListUsageTotalsCommand === "function");
assert(typeof ListUsageTotals$ === "object");
assert(typeof ResetEncryptionKeyCommand === "function");
assert(typeof ResetEncryptionKey$ === "object");
assert(typeof SearchVulnerabilitiesCommand === "function");
assert(typeof SearchVulnerabilities$ === "object");
assert(typeof SendCisSessionHealthCommand === "function");
assert(typeof SendCisSessionHealth$ === "object");
assert(typeof SendCisSessionTelemetryCommand === "function");
assert(typeof SendCisSessionTelemetry$ === "object");
assert(typeof StartCisSessionCommand === "function");
assert(typeof StartCisSession$ === "object");
assert(typeof StartCodeSecurityScanCommand === "function");
assert(typeof StartCodeSecurityScan$ === "object");
assert(typeof StopCisSessionCommand === "function");
assert(typeof StopCisSession$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCisScanConfigurationCommand === "function");
assert(typeof UpdateCisScanConfiguration$ === "object");
assert(typeof UpdateCodeSecurityIntegrationCommand === "function");
assert(typeof UpdateCodeSecurityIntegration$ === "object");
assert(typeof UpdateCodeSecurityScanConfigurationCommand === "function");
assert(typeof UpdateCodeSecurityScanConfiguration$ === "object");
assert(typeof UpdateConfigurationCommand === "function");
assert(typeof UpdateConfiguration$ === "object");
assert(typeof UpdateEc2DeepInspectionConfigurationCommand === "function");
assert(typeof UpdateEc2DeepInspectionConfiguration$ === "object");
assert(typeof UpdateEncryptionKeyCommand === "function");
assert(typeof UpdateEncryptionKey$ === "object");
assert(typeof UpdateFilterCommand === "function");
assert(typeof UpdateFilter$ === "object");
assert(typeof UpdateOrganizationConfigurationCommand === "function");
assert(typeof UpdateOrganizationConfiguration$ === "object");
assert(typeof UpdateOrgEc2DeepInspectionConfigurationCommand === "function");
assert(typeof UpdateOrgEc2DeepInspectionConfiguration$ === "object");
// structural schemas
assert(typeof Account$ === "object");
assert(typeof AccountAggregation$ === "object");
assert(typeof AccountAggregationResponse$ === "object");
assert(typeof AccountState$ === "object");
assert(typeof AggregationRequest$ === "object");
assert(typeof AggregationResponse$ === "object");
assert(typeof AmiAggregation$ === "object");
assert(typeof AmiAggregationResponse$ === "object");
assert(typeof AssociateConfigurationRequest$ === "object");
assert(typeof AssociateMemberRequest$ === "object");
assert(typeof AssociateMemberResponse$ === "object");
assert(typeof AtigData$ === "object");
assert(typeof AutoEnable$ === "object");
assert(typeof AwsEc2InstanceDetails$ === "object");
assert(typeof AwsEcrContainerAggregation$ === "object");
assert(typeof AwsEcrContainerAggregationResponse$ === "object");
assert(typeof AwsEcrContainerImageDetails$ === "object");
assert(typeof AwsEcsMetadataDetails$ === "object");
assert(typeof AwsEksMetadataDetails$ === "object");
assert(typeof AwsEksWorkloadInfo$ === "object");
assert(typeof AwsLambdaFunctionDetails$ === "object");
assert(typeof BatchAssociateCodeSecurityScanConfigurationRequest$ === "object");
assert(typeof BatchAssociateCodeSecurityScanConfigurationResponse$ === "object");
assert(typeof BatchDisassociateCodeSecurityScanConfigurationRequest$ === "object");
assert(typeof BatchDisassociateCodeSecurityScanConfigurationResponse$ === "object");
assert(typeof BatchGetAccountStatusRequest$ === "object");
assert(typeof BatchGetAccountStatusResponse$ === "object");
assert(typeof BatchGetCodeSnippetRequest$ === "object");
assert(typeof BatchGetCodeSnippetResponse$ === "object");
assert(typeof BatchGetFindingDetailsRequest$ === "object");
assert(typeof BatchGetFindingDetailsResponse$ === "object");
assert(typeof BatchGetFreeTrialInfoRequest$ === "object");
assert(typeof BatchGetFreeTrialInfoResponse$ === "object");
assert(typeof BatchGetMemberEc2DeepInspectionStatusRequest$ === "object");
assert(typeof BatchGetMemberEc2DeepInspectionStatusResponse$ === "object");
assert(typeof BatchUpdateMemberEc2DeepInspectionStatusRequest$ === "object");
assert(typeof BatchUpdateMemberEc2DeepInspectionStatusResponse$ === "object");
assert(typeof CancelFindingsReportRequest$ === "object");
assert(typeof CancelFindingsReportResponse$ === "object");
assert(typeof CancelSbomExportRequest$ === "object");
assert(typeof CancelSbomExportResponse$ === "object");
assert(typeof CisaData$ === "object");
assert(typeof CisCheckAggregation$ === "object");
assert(typeof CisDateFilter$ === "object");
assert(typeof CisFindingStatusFilter$ === "object");
assert(typeof CisNumberFilter$ === "object");
assert(typeof CisResultStatusFilter$ === "object");
assert(typeof CisScan$ === "object");
assert(typeof CisScanConfiguration$ === "object");
assert(typeof CisScanResultDetails$ === "object");
assert(typeof CisScanResultDetailsFilterCriteria$ === "object");
assert(typeof CisScanResultsAggregatedByChecksFilterCriteria$ === "object");
assert(typeof CisScanResultsAggregatedByTargetResourceFilterCriteria$ === "object");
assert(typeof CisScanStatusFilter$ === "object");
assert(typeof CisSecurityLevelFilter$ === "object");
assert(typeof CisSessionMessage$ === "object");
assert(typeof CisStringFilter$ === "object");
assert(typeof CisTargetResourceAggregation$ === "object");
assert(typeof CisTargets$ === "object");
assert(typeof CisTargetStatusFilter$ === "object");
assert(typeof CisTargetStatusReasonFilter$ === "object");
assert(typeof ClusterDetails$ === "object");
assert(typeof ClusterForImageFilterCriteria$ === "object");
assert(typeof ClusterInformation$ === "object");
assert(typeof ClusterMetadata$ === "object");
assert(typeof CodeFilePath$ === "object");
assert(typeof CodeLine$ === "object");
assert(typeof CodeRepositoryAggregation$ === "object");
assert(typeof CodeRepositoryAggregationResponse$ === "object");
assert(typeof CodeRepositoryDetails$ === "object");
assert(typeof CodeRepositoryMetadata$ === "object");
assert(typeof CodeRepositoryOnDemandScan$ === "object");
assert(typeof CodeSecurityIntegrationSummary$ === "object");
assert(typeof CodeSecurityResource$ === "object");
assert(typeof CodeSecurityScanConfiguration$ === "object");
assert(typeof CodeSecurityScanConfigurationAssociationSummary$ === "object");
assert(typeof CodeSecurityScanConfigurationSummary$ === "object");
assert(typeof CodeSnippetError$ === "object");
assert(typeof CodeSnippetResult$ === "object");
assert(typeof CodeVulnerabilityDetails$ === "object");
assert(typeof ComputePlatform$ === "object");
assert(typeof ContinuousIntegrationScanConfiguration$ === "object");
assert(typeof Counts$ === "object");
assert(typeof CoverageDateFilter$ === "object");
assert(typeof CoverageFilterCriteria$ === "object");
assert(typeof CoverageMapFilter$ === "object");
assert(typeof CoverageNumberFilter$ === "object");
assert(typeof CoverageStringFilter$ === "object");
assert(typeof CoveredResource$ === "object");
assert(typeof CreateCisScanConfigurationRequest$ === "object");
assert(typeof CreateCisScanConfigurationResponse$ === "object");
assert(typeof CreateCisTargets$ === "object");
assert(typeof CreateCodeSecurityIntegrationRequest$ === "object");
assert(typeof CreateCodeSecurityIntegrationResponse$ === "object");
assert(typeof CreateCodeSecurityScanConfigurationRequest$ === "object");
assert(typeof CreateCodeSecurityScanConfigurationResponse$ === "object");
assert(typeof CreateFilterRequest$ === "object");
assert(typeof CreateFilterResponse$ === "object");
assert(typeof CreateFindingsReportRequest$ === "object");
assert(typeof CreateFindingsReportResponse$ === "object");
assert(typeof CreateGitLabSelfManagedIntegrationDetail$ === "object");
assert(typeof CreateIntegrationDetail$ === "object");
assert(typeof CreateSbomExportRequest$ === "object");
assert(typeof CreateSbomExportResponse$ === "object");
assert(typeof Cvss2$ === "object");
assert(typeof Cvss3$ === "object");
assert(typeof Cvss4$ === "object");
assert(typeof CvssScore$ === "object");
assert(typeof CvssScoreAdjustment$ === "object");
assert(typeof CvssScoreDetails$ === "object");
assert(typeof DailySchedule$ === "object");
assert(typeof DateFilter$ === "object");
assert(typeof DelegatedAdmin$ === "object");
assert(typeof DelegatedAdminAccount$ === "object");
assert(typeof DeleteCisScanConfigurationRequest$ === "object");
assert(typeof DeleteCisScanConfigurationResponse$ === "object");
assert(typeof DeleteCodeSecurityIntegrationRequest$ === "object");
assert(typeof DeleteCodeSecurityIntegrationResponse$ === "object");
assert(typeof DeleteCodeSecurityScanConfigurationRequest$ === "object");
assert(typeof DeleteCodeSecurityScanConfigurationResponse$ === "object");
assert(typeof DeleteFilterRequest$ === "object");
assert(typeof DeleteFilterResponse$ === "object");
assert(typeof DescribeOrganizationConfigurationRequest$ === "object");
assert(typeof DescribeOrganizationConfigurationResponse$ === "object");
assert(typeof Destination$ === "object");
assert(typeof DisableDelegatedAdminAccountRequest$ === "object");
assert(typeof DisableDelegatedAdminAccountResponse$ === "object");
assert(typeof DisableRequest$ === "object");
assert(typeof DisableResponse$ === "object");
assert(typeof DisassociateConfigurationRequest$ === "object");
assert(typeof DisassociateMemberRequest$ === "object");
assert(typeof DisassociateMemberResponse$ === "object");
assert(typeof Ec2Configuration$ === "object");
assert(typeof Ec2ConfigurationState$ === "object");
assert(typeof Ec2InstanceAggregation$ === "object");
assert(typeof Ec2InstanceAggregationResponse$ === "object");
assert(typeof Ec2Metadata$ === "object");
assert(typeof Ec2ScanModeState$ === "object");
assert(typeof EcrConfiguration$ === "object");
assert(typeof EcrConfigurationState$ === "object");
assert(typeof EcrContainerImageMetadata$ === "object");
assert(typeof EcrRepositoryMetadata$ === "object");
assert(typeof EcrRescanDurationState$ === "object");
assert(typeof EnableDelegatedAdminAccountRequest$ === "object");
assert(typeof EnableDelegatedAdminAccountResponse$ === "object");
assert(typeof EnableRequest$ === "object");
assert(typeof EnableResponse$ === "object");
assert(typeof Epss$ === "object");
assert(typeof EpssDetails$ === "object");
assert(typeof Evidence$ === "object");
assert(typeof ExploitabilityDetails$ === "object");
assert(typeof ExploitObserved$ === "object");
assert(typeof FailedAccount$ === "object");
assert(typeof FailedAssociationResult$ === "object");
assert(typeof FailedMemberAccountEc2DeepInspectionStatusState$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FilterCriteria$ === "object");
assert(typeof Finding$ === "object");
assert(typeof FindingDetail$ === "object");
assert(typeof FindingDetailsError$ === "object");
assert(typeof FindingTypeAggregation$ === "object");
assert(typeof FindingTypeAggregationResponse$ === "object");
assert(typeof FreeTrialAccountInfo$ === "object");
assert(typeof FreeTrialInfo$ === "object");
assert(typeof FreeTrialInfoError$ === "object");
assert(typeof GetCisScanReportRequest$ === "object");
assert(typeof GetCisScanReportResponse$ === "object");
assert(typeof GetCisScanResultDetailsRequest$ === "object");
assert(typeof GetCisScanResultDetailsResponse$ === "object");
assert(typeof GetClustersForImageRequest$ === "object");
assert(typeof GetClustersForImageResponse$ === "object");
assert(typeof GetCodeSecurityIntegrationRequest$ === "object");
assert(typeof GetCodeSecurityIntegrationResponse$ === "object");
assert(typeof GetCodeSecurityScanConfigurationRequest$ === "object");
assert(typeof GetCodeSecurityScanConfigurationResponse$ === "object");
assert(typeof GetCodeSecurityScanRequest$ === "object");
assert(typeof GetCodeSecurityScanResponse$ === "object");
assert(typeof GetConfigurationRequest$ === "object");
assert(typeof GetConfigurationResponse$ === "object");
assert(typeof GetDelegatedAdminAccountRequest$ === "object");
assert(typeof GetDelegatedAdminAccountResponse$ === "object");
assert(typeof GetEc2DeepInspectionConfigurationRequest$ === "object");
assert(typeof GetEc2DeepInspectionConfigurationResponse$ === "object");
assert(typeof GetEncryptionKeyRequest$ === "object");
assert(typeof GetEncryptionKeyResponse$ === "object");
assert(typeof GetFindingsReportStatusRequest$ === "object");
assert(typeof GetFindingsReportStatusResponse$ === "object");
assert(typeof GetMemberRequest$ === "object");
assert(typeof GetMemberResponse$ === "object");
assert(typeof GetSbomExportRequest$ === "object");
assert(typeof GetSbomExportResponse$ === "object");
assert(typeof ImageLayerAggregation$ === "object");
assert(typeof ImageLayerAggregationResponse$ === "object");
assert(typeof InspectorScoreDetails$ === "object");
assert(typeof LambdaFunctionAggregation$ === "object");
assert(typeof LambdaFunctionAggregationResponse$ === "object");
assert(typeof LambdaFunctionMetadata$ === "object");
assert(typeof LambdaLayerAggregation$ === "object");
assert(typeof LambdaLayerAggregationResponse$ === "object");
assert(typeof LambdaVpcConfig$ === "object");
assert(typeof ListAccountPermissionsRequest$ === "object");
assert(typeof ListAccountPermissionsResponse$ === "object");
assert(typeof ListCisScanConfigurationsFilterCriteria$ === "object");
assert(typeof ListCisScanConfigurationsRequest$ === "object");
assert(typeof ListCisScanConfigurationsResponse$ === "object");
assert(typeof ListCisScanResultsAggregatedByChecksRequest$ === "object");
assert(typeof ListCisScanResultsAggregatedByChecksResponse$ === "object");
assert(typeof ListCisScanResultsAggregatedByTargetResourceRequest$ === "object");
assert(typeof ListCisScanResultsAggregatedByTargetResourceResponse$ === "object");
assert(typeof ListCisScansFilterCriteria$ === "object");
assert(typeof ListCisScansRequest$ === "object");
assert(typeof ListCisScansResponse$ === "object");
assert(typeof ListCodeSecurityIntegrationsRequest$ === "object");
assert(typeof ListCodeSecurityIntegrationsResponse$ === "object");
assert(typeof ListCodeSecurityScanConfigurationAssociationsRequest$ === "object");
assert(typeof ListCodeSecurityScanConfigurationAssociationsResponse$ === "object");
assert(typeof ListCodeSecurityScanConfigurationsRequest$ === "object");
assert(typeof ListCodeSecurityScanConfigurationsResponse$ === "object");
assert(typeof ListCoverageRequest$ === "object");
assert(typeof ListCoverageResponse$ === "object");
assert(typeof ListCoverageStatisticsRequest$ === "object");
assert(typeof ListCoverageStatisticsResponse$ === "object");
assert(typeof ListDelegatedAdminAccountsRequest$ === "object");
assert(typeof ListDelegatedAdminAccountsResponse$ === "object");
assert(typeof ListFiltersRequest$ === "object");
assert(typeof ListFiltersResponse$ === "object");
assert(typeof ListFindingAggregationsRequest$ === "object");
assert(typeof ListFindingAggregationsResponse$ === "object");
assert(typeof ListFindingsRequest$ === "object");
assert(typeof ListFindingsResponse$ === "object");
assert(typeof ListMembersRequest$ === "object");
assert(typeof ListMembersResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListUsageTotalsRequest$ === "object");
assert(typeof ListUsageTotalsResponse$ === "object");
assert(typeof MapFilter$ === "object");
assert(typeof Member$ === "object");
assert(typeof MemberAccountEc2DeepInspectionStatus$ === "object");
assert(typeof MemberAccountEc2DeepInspectionStatusState$ === "object");
assert(typeof MonthlySchedule$ === "object");
assert(typeof NetworkPath$ === "object");
assert(typeof NetworkReachabilityDetails$ === "object");
assert(typeof NumberFilter$ === "object");
assert(typeof OneTimeSchedule$ === "object");
assert(typeof PackageAggregation$ === "object");
assert(typeof PackageAggregationResponse$ === "object");
assert(typeof PackageFilter$ === "object");
assert(typeof PackageVulnerabilityDetails$ === "object");
assert(typeof PeriodicScanConfiguration$ === "object");
assert(typeof Permission$ === "object");
assert(typeof PortRange$ === "object");
assert(typeof PortRangeFilter$ === "object");
assert(typeof ProjectCodeSecurityScanConfiguration$ === "object");
assert(typeof ProjectContinuousIntegrationScanConfiguration$ === "object");
assert(typeof ProjectPeriodicScanConfiguration$ === "object");
assert(typeof Recommendation$ === "object");
assert(typeof Remediation$ === "object");
assert(typeof RepositoryAggregation$ === "object");
assert(typeof RepositoryAggregationResponse$ === "object");
assert(typeof ResetEncryptionKeyRequest$ === "object");
assert(typeof ResetEncryptionKeyResponse$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceDetails$ === "object");
assert(typeof ResourceFilterCriteria$ === "object");
assert(typeof ResourceMapFilter$ === "object");
assert(typeof ResourceScanMetadata$ === "object");
assert(typeof ResourceState$ === "object");
assert(typeof ResourceStatus$ === "object");
assert(typeof ResourceStringFilter$ === "object");
assert(typeof ScanStatus$ === "object");
assert(typeof Schedule$ === "object");
assert(typeof ScopeSettings$ === "object");
assert(typeof SearchVulnerabilitiesFilterCriteria$ === "object");
assert(typeof SearchVulnerabilitiesRequest$ === "object");
assert(typeof SearchVulnerabilitiesResponse$ === "object");
assert(typeof SendCisSessionHealthRequest$ === "object");
assert(typeof SendCisSessionHealthResponse$ === "object");
assert(typeof SendCisSessionTelemetryRequest$ === "object");
assert(typeof SendCisSessionTelemetryResponse$ === "object");
assert(typeof SeverityCounts$ === "object");
assert(typeof SortCriteria$ === "object");
assert(typeof StartCisSessionMessage$ === "object");
assert(typeof StartCisSessionRequest$ === "object");
assert(typeof StartCisSessionResponse$ === "object");
assert(typeof StartCodeSecurityScanRequest$ === "object");
assert(typeof StartCodeSecurityScanResponse$ === "object");
assert(typeof State$ === "object");
assert(typeof StatusCounts$ === "object");
assert(typeof Step$ === "object");
assert(typeof StopCisMessageProgress$ === "object");
assert(typeof StopCisSessionMessage$ === "object");
assert(typeof StopCisSessionRequest$ === "object");
assert(typeof StopCisSessionResponse$ === "object");
assert(typeof StringFilter$ === "object");
assert(typeof SuccessfulAssociationResult$ === "object");
assert(typeof SuggestedFix$ === "object");
assert(typeof TagFilter$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Time$ === "object");
assert(typeof TitleAggregation$ === "object");
assert(typeof TitleAggregationResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateCisScanConfigurationRequest$ === "object");
assert(typeof UpdateCisScanConfigurationResponse$ === "object");
assert(typeof UpdateCisTargets$ === "object");
assert(typeof UpdateCodeSecurityIntegrationRequest$ === "object");
assert(typeof UpdateCodeSecurityIntegrationResponse$ === "object");
assert(typeof UpdateCodeSecurityScanConfigurationRequest$ === "object");
assert(typeof UpdateCodeSecurityScanConfigurationResponse$ === "object");
assert(typeof UpdateConfigurationRequest$ === "object");
assert(typeof UpdateConfigurationResponse$ === "object");
assert(typeof UpdateEc2DeepInspectionConfigurationRequest$ === "object");
assert(typeof UpdateEc2DeepInspectionConfigurationResponse$ === "object");
assert(typeof UpdateEncryptionKeyRequest$ === "object");
assert(typeof UpdateEncryptionKeyResponse$ === "object");
assert(typeof UpdateFilterRequest$ === "object");
assert(typeof UpdateFilterResponse$ === "object");
assert(typeof UpdateGitHubIntegrationDetail$ === "object");
assert(typeof UpdateGitLabSelfManagedIntegrationDetail$ === "object");
assert(typeof UpdateIntegrationDetails$ === "object");
assert(typeof UpdateOrganizationConfigurationRequest$ === "object");
assert(typeof UpdateOrganizationConfigurationResponse$ === "object");
assert(typeof UpdateOrgEc2DeepInspectionConfigurationRequest$ === "object");
assert(typeof UpdateOrgEc2DeepInspectionConfigurationResponse$ === "object");
assert(typeof Usage$ === "object");
assert(typeof UsageTotal$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof Vulnerability$ === "object");
assert(typeof VulnerablePackage$ === "object");
assert(typeof WeeklySchedule$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof Inspector2ServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof Inspector2ServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof Inspector2ServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof Inspector2ServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof Inspector2ServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof Inspector2ServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof Inspector2ServiceException);
assert(typeof ValidationException$ === "object");
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
