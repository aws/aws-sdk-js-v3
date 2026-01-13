import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountStatus,
  ActionEnum,
  Assessment$,
  AssessmentControl$,
  AssessmentControlSet$,
  AssessmentEvidenceFolder$,
  AssessmentFramework$,
  AssessmentFrameworkMetadata$,
  AssessmentFrameworkShareRequest$,
  AssessmentMetadata$,
  AssessmentMetadataItem$,
  AssessmentReport$,
  AssessmentReportDestinationType,
  AssessmentReportEvidenceError$,
  AssessmentReportMetadata$,
  AssessmentReportsDestination$,
  AssessmentReportStatus,
  AssessmentStatus,
  AssociateAssessmentReportEvidenceFolder$,
  AssociateAssessmentReportEvidenceFolderCommand,
  AssociateAssessmentReportEvidenceFolderRequest$,
  AssociateAssessmentReportEvidenceFolderResponse$,
  AuditManager,
  AuditManagerClient,
  AuditManagerServiceException,
  AWSAccount$,
  AWSService$,
  BatchAssociateAssessmentReportEvidence$,
  BatchAssociateAssessmentReportEvidenceCommand,
  BatchAssociateAssessmentReportEvidenceRequest$,
  BatchAssociateAssessmentReportEvidenceResponse$,
  BatchCreateDelegationByAssessment$,
  BatchCreateDelegationByAssessmentCommand,
  BatchCreateDelegationByAssessmentError$,
  BatchCreateDelegationByAssessmentRequest$,
  BatchCreateDelegationByAssessmentResponse$,
  BatchDeleteDelegationByAssessment$,
  BatchDeleteDelegationByAssessmentCommand,
  BatchDeleteDelegationByAssessmentError$,
  BatchDeleteDelegationByAssessmentRequest$,
  BatchDeleteDelegationByAssessmentResponse$,
  BatchDisassociateAssessmentReportEvidence$,
  BatchDisassociateAssessmentReportEvidenceCommand,
  BatchDisassociateAssessmentReportEvidenceRequest$,
  BatchDisassociateAssessmentReportEvidenceResponse$,
  BatchImportEvidenceToAssessmentControl$,
  BatchImportEvidenceToAssessmentControlCommand,
  BatchImportEvidenceToAssessmentControlError$,
  BatchImportEvidenceToAssessmentControlRequest$,
  BatchImportEvidenceToAssessmentControlResponse$,
  ChangeLog$,
  Control$,
  ControlComment$,
  ControlDomainInsights$,
  ControlInsightsMetadataByAssessmentItem$,
  ControlInsightsMetadataItem$,
  ControlMappingSource$,
  ControlMetadata$,
  ControlResponse,
  ControlSet$,
  ControlSetStatus,
  ControlState,
  ControlStatus,
  ControlType,
  CreateAssessment$,
  CreateAssessmentCommand,
  CreateAssessmentFramework$,
  CreateAssessmentFrameworkCommand,
  CreateAssessmentFrameworkControl$,
  CreateAssessmentFrameworkControlSet$,
  CreateAssessmentFrameworkRequest$,
  CreateAssessmentFrameworkResponse$,
  CreateAssessmentReport$,
  CreateAssessmentReportCommand,
  CreateAssessmentReportRequest$,
  CreateAssessmentReportResponse$,
  CreateAssessmentRequest$,
  CreateAssessmentResponse$,
  CreateControl$,
  CreateControlCommand,
  CreateControlMappingSource$,
  CreateControlRequest$,
  CreateControlResponse$,
  CreateDelegationRequest$,
  DataSourceType,
  DefaultExportDestination$,
  Delegation$,
  DelegationMetadata$,
  DelegationStatus,
  DeleteAssessment$,
  DeleteAssessmentCommand,
  DeleteAssessmentFramework$,
  DeleteAssessmentFrameworkCommand,
  DeleteAssessmentFrameworkRequest$,
  DeleteAssessmentFrameworkResponse$,
  DeleteAssessmentFrameworkShare$,
  DeleteAssessmentFrameworkShareCommand,
  DeleteAssessmentFrameworkShareRequest$,
  DeleteAssessmentFrameworkShareResponse$,
  DeleteAssessmentReport$,
  DeleteAssessmentReportCommand,
  DeleteAssessmentReportRequest$,
  DeleteAssessmentReportResponse$,
  DeleteAssessmentRequest$,
  DeleteAssessmentResponse$,
  DeleteControl$,
  DeleteControlCommand,
  DeleteControlRequest$,
  DeleteControlResponse$,
  DeleteResources,
  DeregisterAccount$,
  DeregisterAccountCommand,
  DeregisterAccountRequest$,
  DeregisterAccountResponse$,
  DeregisterOrganizationAdminAccount$,
  DeregisterOrganizationAdminAccountCommand,
  DeregisterOrganizationAdminAccountRequest$,
  DeregisterOrganizationAdminAccountResponse$,
  DeregistrationPolicy$,
  DisassociateAssessmentReportEvidenceFolder$,
  DisassociateAssessmentReportEvidenceFolderCommand,
  DisassociateAssessmentReportEvidenceFolderRequest$,
  DisassociateAssessmentReportEvidenceFolderResponse$,
  Evidence$,
  EvidenceFinderBackfillStatus,
  EvidenceFinderEnablement$,
  EvidenceFinderEnablementStatus,
  EvidenceInsights$,
  ExportDestinationType,
  Framework$,
  FrameworkMetadata$,
  FrameworkType,
  GetAccountStatus$,
  GetAccountStatusCommand,
  GetAccountStatusRequest$,
  GetAccountStatusResponse$,
  GetAssessment$,
  GetAssessmentCommand,
  GetAssessmentFramework$,
  GetAssessmentFrameworkCommand,
  GetAssessmentFrameworkRequest$,
  GetAssessmentFrameworkResponse$,
  GetAssessmentReportUrl$,
  GetAssessmentReportUrlCommand,
  GetAssessmentReportUrlRequest$,
  GetAssessmentReportUrlResponse$,
  GetAssessmentRequest$,
  GetAssessmentResponse$,
  GetChangeLogs$,
  GetChangeLogsCommand,
  GetChangeLogsRequest$,
  GetChangeLogsResponse$,
  GetControl$,
  GetControlCommand,
  GetControlRequest$,
  GetControlResponse$,
  GetDelegations$,
  GetDelegationsCommand,
  GetDelegationsRequest$,
  GetDelegationsResponse$,
  GetEvidence$,
  GetEvidenceByEvidenceFolder$,
  GetEvidenceByEvidenceFolderCommand,
  GetEvidenceByEvidenceFolderRequest$,
  GetEvidenceByEvidenceFolderResponse$,
  GetEvidenceCommand,
  GetEvidenceFileUploadUrl$,
  GetEvidenceFileUploadUrlCommand,
  GetEvidenceFileUploadUrlRequest$,
  GetEvidenceFileUploadUrlResponse$,
  GetEvidenceFolder$,
  GetEvidenceFolderCommand,
  GetEvidenceFolderRequest$,
  GetEvidenceFolderResponse$,
  GetEvidenceFoldersByAssessment$,
  GetEvidenceFoldersByAssessmentCommand,
  GetEvidenceFoldersByAssessmentControl$,
  GetEvidenceFoldersByAssessmentControlCommand,
  GetEvidenceFoldersByAssessmentControlRequest$,
  GetEvidenceFoldersByAssessmentControlResponse$,
  GetEvidenceFoldersByAssessmentRequest$,
  GetEvidenceFoldersByAssessmentResponse$,
  GetEvidenceRequest$,
  GetEvidenceResponse$,
  GetInsights$,
  GetInsightsByAssessment$,
  GetInsightsByAssessmentCommand,
  GetInsightsByAssessmentRequest$,
  GetInsightsByAssessmentResponse$,
  GetInsightsCommand,
  GetInsightsRequest$,
  GetInsightsResponse$,
  GetOrganizationAdminAccount$,
  GetOrganizationAdminAccountCommand,
  GetOrganizationAdminAccountRequest$,
  GetOrganizationAdminAccountResponse$,
  GetServicesInScope$,
  GetServicesInScopeCommand,
  GetServicesInScopeRequest$,
  GetServicesInScopeResponse$,
  GetSettings$,
  GetSettingsCommand,
  GetSettingsRequest$,
  GetSettingsResponse$,
  Insights$,
  InsightsByAssessment$,
  InternalServerException,
  InternalServerException$,
  KeywordInputType,
  ListAssessmentControlInsightsByControlDomain$,
  ListAssessmentControlInsightsByControlDomainCommand,
  ListAssessmentControlInsightsByControlDomainRequest$,
  ListAssessmentControlInsightsByControlDomainResponse$,
  ListAssessmentFrameworks$,
  ListAssessmentFrameworksCommand,
  ListAssessmentFrameworkShareRequests$,
  ListAssessmentFrameworkShareRequestsCommand,
  ListAssessmentFrameworkShareRequestsRequest$,
  ListAssessmentFrameworkShareRequestsResponse$,
  ListAssessmentFrameworksRequest$,
  ListAssessmentFrameworksResponse$,
  ListAssessmentReports$,
  ListAssessmentReportsCommand,
  ListAssessmentReportsRequest$,
  ListAssessmentReportsResponse$,
  ListAssessments$,
  ListAssessmentsCommand,
  ListAssessmentsRequest$,
  ListAssessmentsResponse$,
  ListControlDomainInsights$,
  ListControlDomainInsightsByAssessment$,
  ListControlDomainInsightsByAssessmentCommand,
  ListControlDomainInsightsByAssessmentRequest$,
  ListControlDomainInsightsByAssessmentResponse$,
  ListControlDomainInsightsCommand,
  ListControlDomainInsightsRequest$,
  ListControlDomainInsightsResponse$,
  ListControlInsightsByControlDomain$,
  ListControlInsightsByControlDomainCommand,
  ListControlInsightsByControlDomainRequest$,
  ListControlInsightsByControlDomainResponse$,
  ListControls$,
  ListControlsCommand,
  ListControlsRequest$,
  ListControlsResponse$,
  ListKeywordsForDataSource$,
  ListKeywordsForDataSourceCommand,
  ListKeywordsForDataSourceRequest$,
  ListKeywordsForDataSourceResponse$,
  ListNotifications$,
  ListNotificationsCommand,
  ListNotificationsRequest$,
  ListNotificationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ManualEvidence$,
  Notification$,
  ObjectTypeEnum,
  paginateGetChangeLogs,
  paginateGetDelegations,
  paginateGetEvidenceByEvidenceFolder,
  paginateGetEvidenceFoldersByAssessment,
  paginateGetEvidenceFoldersByAssessmentControl,
  paginateListAssessmentControlInsightsByControlDomain,
  paginateListAssessmentFrameworks,
  paginateListAssessmentFrameworkShareRequests,
  paginateListAssessmentReports,
  paginateListAssessments,
  paginateListControlDomainInsights,
  paginateListControlDomainInsightsByAssessment,
  paginateListControlInsightsByControlDomain,
  paginateListControls,
  paginateListKeywordsForDataSource,
  paginateListNotifications,
  RegisterAccount$,
  RegisterAccountCommand,
  RegisterAccountRequest$,
  RegisterAccountResponse$,
  RegisterOrganizationAdminAccount$,
  RegisterOrganizationAdminAccountCommand,
  RegisterOrganizationAdminAccountRequest$,
  RegisterOrganizationAdminAccountResponse$,
  Resource$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Role$,
  RoleType,
  Scope$,
  ServiceMetadata$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SettingAttribute,
  Settings$,
  ShareRequestAction,
  ShareRequestStatus,
  ShareRequestType,
  SourceFrequency,
  SourceKeyword$,
  SourceSetUpOption,
  SourceType,
  StartAssessmentFrameworkShare$,
  StartAssessmentFrameworkShareCommand,
  StartAssessmentFrameworkShareRequest$,
  StartAssessmentFrameworkShareResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAssessment$,
  UpdateAssessmentCommand,
  UpdateAssessmentControl$,
  UpdateAssessmentControlCommand,
  UpdateAssessmentControlRequest$,
  UpdateAssessmentControlResponse$,
  UpdateAssessmentControlSetStatus$,
  UpdateAssessmentControlSetStatusCommand,
  UpdateAssessmentControlSetStatusRequest$,
  UpdateAssessmentControlSetStatusResponse$,
  UpdateAssessmentFramework$,
  UpdateAssessmentFrameworkCommand,
  UpdateAssessmentFrameworkControlSet$,
  UpdateAssessmentFrameworkRequest$,
  UpdateAssessmentFrameworkResponse$,
  UpdateAssessmentFrameworkShare$,
  UpdateAssessmentFrameworkShareCommand,
  UpdateAssessmentFrameworkShareRequest$,
  UpdateAssessmentFrameworkShareResponse$,
  UpdateAssessmentRequest$,
  UpdateAssessmentResponse$,
  UpdateAssessmentStatus$,
  UpdateAssessmentStatusCommand,
  UpdateAssessmentStatusRequest$,
  UpdateAssessmentStatusResponse$,
  UpdateControl$,
  UpdateControlCommand,
  UpdateControlRequest$,
  UpdateControlResponse$,
  UpdateSettings$,
  UpdateSettingsCommand,
  UpdateSettingsRequest$,
  UpdateSettingsResponse$,
  URL$,
  ValidateAssessmentReportIntegrity$,
  ValidateAssessmentReportIntegrityCommand,
  ValidateAssessmentReportIntegrityRequest$,
  ValidateAssessmentReportIntegrityResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AuditManagerClient === "function");
assert(typeof AuditManager === "function");
// commands
assert(typeof AssociateAssessmentReportEvidenceFolderCommand === "function");
assert(typeof AssociateAssessmentReportEvidenceFolder$ === "object");
assert(typeof BatchAssociateAssessmentReportEvidenceCommand === "function");
assert(typeof BatchAssociateAssessmentReportEvidence$ === "object");
assert(typeof BatchCreateDelegationByAssessmentCommand === "function");
assert(typeof BatchCreateDelegationByAssessment$ === "object");
assert(typeof BatchDeleteDelegationByAssessmentCommand === "function");
assert(typeof BatchDeleteDelegationByAssessment$ === "object");
assert(typeof BatchDisassociateAssessmentReportEvidenceCommand === "function");
assert(typeof BatchDisassociateAssessmentReportEvidence$ === "object");
assert(typeof BatchImportEvidenceToAssessmentControlCommand === "function");
assert(typeof BatchImportEvidenceToAssessmentControl$ === "object");
assert(typeof CreateAssessmentCommand === "function");
assert(typeof CreateAssessment$ === "object");
assert(typeof CreateAssessmentFrameworkCommand === "function");
assert(typeof CreateAssessmentFramework$ === "object");
assert(typeof CreateAssessmentReportCommand === "function");
assert(typeof CreateAssessmentReport$ === "object");
assert(typeof CreateControlCommand === "function");
assert(typeof CreateControl$ === "object");
assert(typeof DeleteAssessmentCommand === "function");
assert(typeof DeleteAssessment$ === "object");
assert(typeof DeleteAssessmentFrameworkCommand === "function");
assert(typeof DeleteAssessmentFramework$ === "object");
assert(typeof DeleteAssessmentFrameworkShareCommand === "function");
assert(typeof DeleteAssessmentFrameworkShare$ === "object");
assert(typeof DeleteAssessmentReportCommand === "function");
assert(typeof DeleteAssessmentReport$ === "object");
assert(typeof DeleteControlCommand === "function");
assert(typeof DeleteControl$ === "object");
assert(typeof DeregisterAccountCommand === "function");
assert(typeof DeregisterAccount$ === "object");
assert(typeof DeregisterOrganizationAdminAccountCommand === "function");
assert(typeof DeregisterOrganizationAdminAccount$ === "object");
assert(typeof DisassociateAssessmentReportEvidenceFolderCommand === "function");
assert(typeof DisassociateAssessmentReportEvidenceFolder$ === "object");
assert(typeof GetAccountStatusCommand === "function");
assert(typeof GetAccountStatus$ === "object");
assert(typeof GetAssessmentCommand === "function");
assert(typeof GetAssessment$ === "object");
assert(typeof GetAssessmentFrameworkCommand === "function");
assert(typeof GetAssessmentFramework$ === "object");
assert(typeof GetAssessmentReportUrlCommand === "function");
assert(typeof GetAssessmentReportUrl$ === "object");
assert(typeof GetChangeLogsCommand === "function");
assert(typeof GetChangeLogs$ === "object");
assert(typeof GetControlCommand === "function");
assert(typeof GetControl$ === "object");
assert(typeof GetDelegationsCommand === "function");
assert(typeof GetDelegations$ === "object");
assert(typeof GetEvidenceCommand === "function");
assert(typeof GetEvidence$ === "object");
assert(typeof GetEvidenceByEvidenceFolderCommand === "function");
assert(typeof GetEvidenceByEvidenceFolder$ === "object");
assert(typeof GetEvidenceFileUploadUrlCommand === "function");
assert(typeof GetEvidenceFileUploadUrl$ === "object");
assert(typeof GetEvidenceFolderCommand === "function");
assert(typeof GetEvidenceFolder$ === "object");
assert(typeof GetEvidenceFoldersByAssessmentCommand === "function");
assert(typeof GetEvidenceFoldersByAssessment$ === "object");
assert(typeof GetEvidenceFoldersByAssessmentControlCommand === "function");
assert(typeof GetEvidenceFoldersByAssessmentControl$ === "object");
assert(typeof GetInsightsCommand === "function");
assert(typeof GetInsights$ === "object");
assert(typeof GetInsightsByAssessmentCommand === "function");
assert(typeof GetInsightsByAssessment$ === "object");
assert(typeof GetOrganizationAdminAccountCommand === "function");
assert(typeof GetOrganizationAdminAccount$ === "object");
assert(typeof GetServicesInScopeCommand === "function");
assert(typeof GetServicesInScope$ === "object");
assert(typeof GetSettingsCommand === "function");
assert(typeof GetSettings$ === "object");
assert(typeof ListAssessmentControlInsightsByControlDomainCommand === "function");
assert(typeof ListAssessmentControlInsightsByControlDomain$ === "object");
assert(typeof ListAssessmentFrameworksCommand === "function");
assert(typeof ListAssessmentFrameworks$ === "object");
assert(typeof ListAssessmentFrameworkShareRequestsCommand === "function");
assert(typeof ListAssessmentFrameworkShareRequests$ === "object");
assert(typeof ListAssessmentReportsCommand === "function");
assert(typeof ListAssessmentReports$ === "object");
assert(typeof ListAssessmentsCommand === "function");
assert(typeof ListAssessments$ === "object");
assert(typeof ListControlDomainInsightsCommand === "function");
assert(typeof ListControlDomainInsights$ === "object");
assert(typeof ListControlDomainInsightsByAssessmentCommand === "function");
assert(typeof ListControlDomainInsightsByAssessment$ === "object");
assert(typeof ListControlInsightsByControlDomainCommand === "function");
assert(typeof ListControlInsightsByControlDomain$ === "object");
assert(typeof ListControlsCommand === "function");
assert(typeof ListControls$ === "object");
assert(typeof ListKeywordsForDataSourceCommand === "function");
assert(typeof ListKeywordsForDataSource$ === "object");
assert(typeof ListNotificationsCommand === "function");
assert(typeof ListNotifications$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RegisterAccountCommand === "function");
assert(typeof RegisterAccount$ === "object");
assert(typeof RegisterOrganizationAdminAccountCommand === "function");
assert(typeof RegisterOrganizationAdminAccount$ === "object");
assert(typeof StartAssessmentFrameworkShareCommand === "function");
assert(typeof StartAssessmentFrameworkShare$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAssessmentCommand === "function");
assert(typeof UpdateAssessment$ === "object");
assert(typeof UpdateAssessmentControlCommand === "function");
assert(typeof UpdateAssessmentControl$ === "object");
assert(typeof UpdateAssessmentControlSetStatusCommand === "function");
assert(typeof UpdateAssessmentControlSetStatus$ === "object");
assert(typeof UpdateAssessmentFrameworkCommand === "function");
assert(typeof UpdateAssessmentFramework$ === "object");
assert(typeof UpdateAssessmentFrameworkShareCommand === "function");
assert(typeof UpdateAssessmentFrameworkShare$ === "object");
assert(typeof UpdateAssessmentStatusCommand === "function");
assert(typeof UpdateAssessmentStatus$ === "object");
assert(typeof UpdateControlCommand === "function");
assert(typeof UpdateControl$ === "object");
assert(typeof UpdateSettingsCommand === "function");
assert(typeof UpdateSettings$ === "object");
assert(typeof ValidateAssessmentReportIntegrityCommand === "function");
assert(typeof ValidateAssessmentReportIntegrity$ === "object");
// structural schemas
assert(typeof Assessment$ === "object");
assert(typeof AssessmentControl$ === "object");
assert(typeof AssessmentControlSet$ === "object");
assert(typeof AssessmentEvidenceFolder$ === "object");
assert(typeof AssessmentFramework$ === "object");
assert(typeof AssessmentFrameworkMetadata$ === "object");
assert(typeof AssessmentFrameworkShareRequest$ === "object");
assert(typeof AssessmentMetadata$ === "object");
assert(typeof AssessmentMetadataItem$ === "object");
assert(typeof AssessmentReport$ === "object");
assert(typeof AssessmentReportEvidenceError$ === "object");
assert(typeof AssessmentReportMetadata$ === "object");
assert(typeof AssessmentReportsDestination$ === "object");
assert(typeof AssociateAssessmentReportEvidenceFolderRequest$ === "object");
assert(typeof AssociateAssessmentReportEvidenceFolderResponse$ === "object");
assert(typeof AWSAccount$ === "object");
assert(typeof AWSService$ === "object");
assert(typeof BatchAssociateAssessmentReportEvidenceRequest$ === "object");
assert(typeof BatchAssociateAssessmentReportEvidenceResponse$ === "object");
assert(typeof BatchCreateDelegationByAssessmentError$ === "object");
assert(typeof BatchCreateDelegationByAssessmentRequest$ === "object");
assert(typeof BatchCreateDelegationByAssessmentResponse$ === "object");
assert(typeof BatchDeleteDelegationByAssessmentError$ === "object");
assert(typeof BatchDeleteDelegationByAssessmentRequest$ === "object");
assert(typeof BatchDeleteDelegationByAssessmentResponse$ === "object");
assert(typeof BatchDisassociateAssessmentReportEvidenceRequest$ === "object");
assert(typeof BatchDisassociateAssessmentReportEvidenceResponse$ === "object");
assert(typeof BatchImportEvidenceToAssessmentControlError$ === "object");
assert(typeof BatchImportEvidenceToAssessmentControlRequest$ === "object");
assert(typeof BatchImportEvidenceToAssessmentControlResponse$ === "object");
assert(typeof ChangeLog$ === "object");
assert(typeof Control$ === "object");
assert(typeof ControlComment$ === "object");
assert(typeof ControlDomainInsights$ === "object");
assert(typeof ControlInsightsMetadataByAssessmentItem$ === "object");
assert(typeof ControlInsightsMetadataItem$ === "object");
assert(typeof ControlMappingSource$ === "object");
assert(typeof ControlMetadata$ === "object");
assert(typeof ControlSet$ === "object");
assert(typeof CreateAssessmentFrameworkControl$ === "object");
assert(typeof CreateAssessmentFrameworkControlSet$ === "object");
assert(typeof CreateAssessmentFrameworkRequest$ === "object");
assert(typeof CreateAssessmentFrameworkResponse$ === "object");
assert(typeof CreateAssessmentReportRequest$ === "object");
assert(typeof CreateAssessmentReportResponse$ === "object");
assert(typeof CreateAssessmentRequest$ === "object");
assert(typeof CreateAssessmentResponse$ === "object");
assert(typeof CreateControlMappingSource$ === "object");
assert(typeof CreateControlRequest$ === "object");
assert(typeof CreateControlResponse$ === "object");
assert(typeof CreateDelegationRequest$ === "object");
assert(typeof DefaultExportDestination$ === "object");
assert(typeof Delegation$ === "object");
assert(typeof DelegationMetadata$ === "object");
assert(typeof DeleteAssessmentFrameworkRequest$ === "object");
assert(typeof DeleteAssessmentFrameworkResponse$ === "object");
assert(typeof DeleteAssessmentFrameworkShareRequest$ === "object");
assert(typeof DeleteAssessmentFrameworkShareResponse$ === "object");
assert(typeof DeleteAssessmentReportRequest$ === "object");
assert(typeof DeleteAssessmentReportResponse$ === "object");
assert(typeof DeleteAssessmentRequest$ === "object");
assert(typeof DeleteAssessmentResponse$ === "object");
assert(typeof DeleteControlRequest$ === "object");
assert(typeof DeleteControlResponse$ === "object");
assert(typeof DeregisterAccountRequest$ === "object");
assert(typeof DeregisterAccountResponse$ === "object");
assert(typeof DeregisterOrganizationAdminAccountRequest$ === "object");
assert(typeof DeregisterOrganizationAdminAccountResponse$ === "object");
assert(typeof DeregistrationPolicy$ === "object");
assert(typeof DisassociateAssessmentReportEvidenceFolderRequest$ === "object");
assert(typeof DisassociateAssessmentReportEvidenceFolderResponse$ === "object");
assert(typeof Evidence$ === "object");
assert(typeof EvidenceFinderEnablement$ === "object");
assert(typeof EvidenceInsights$ === "object");
assert(typeof Framework$ === "object");
assert(typeof FrameworkMetadata$ === "object");
assert(typeof GetAccountStatusRequest$ === "object");
assert(typeof GetAccountStatusResponse$ === "object");
assert(typeof GetAssessmentFrameworkRequest$ === "object");
assert(typeof GetAssessmentFrameworkResponse$ === "object");
assert(typeof GetAssessmentReportUrlRequest$ === "object");
assert(typeof GetAssessmentReportUrlResponse$ === "object");
assert(typeof GetAssessmentRequest$ === "object");
assert(typeof GetAssessmentResponse$ === "object");
assert(typeof GetChangeLogsRequest$ === "object");
assert(typeof GetChangeLogsResponse$ === "object");
assert(typeof GetControlRequest$ === "object");
assert(typeof GetControlResponse$ === "object");
assert(typeof GetDelegationsRequest$ === "object");
assert(typeof GetDelegationsResponse$ === "object");
assert(typeof GetEvidenceByEvidenceFolderRequest$ === "object");
assert(typeof GetEvidenceByEvidenceFolderResponse$ === "object");
assert(typeof GetEvidenceFileUploadUrlRequest$ === "object");
assert(typeof GetEvidenceFileUploadUrlResponse$ === "object");
assert(typeof GetEvidenceFolderRequest$ === "object");
assert(typeof GetEvidenceFolderResponse$ === "object");
assert(typeof GetEvidenceFoldersByAssessmentControlRequest$ === "object");
assert(typeof GetEvidenceFoldersByAssessmentControlResponse$ === "object");
assert(typeof GetEvidenceFoldersByAssessmentRequest$ === "object");
assert(typeof GetEvidenceFoldersByAssessmentResponse$ === "object");
assert(typeof GetEvidenceRequest$ === "object");
assert(typeof GetEvidenceResponse$ === "object");
assert(typeof GetInsightsByAssessmentRequest$ === "object");
assert(typeof GetInsightsByAssessmentResponse$ === "object");
assert(typeof GetInsightsRequest$ === "object");
assert(typeof GetInsightsResponse$ === "object");
assert(typeof GetOrganizationAdminAccountRequest$ === "object");
assert(typeof GetOrganizationAdminAccountResponse$ === "object");
assert(typeof GetServicesInScopeRequest$ === "object");
assert(typeof GetServicesInScopeResponse$ === "object");
assert(typeof GetSettingsRequest$ === "object");
assert(typeof GetSettingsResponse$ === "object");
assert(typeof Insights$ === "object");
assert(typeof InsightsByAssessment$ === "object");
assert(typeof ListAssessmentControlInsightsByControlDomainRequest$ === "object");
assert(typeof ListAssessmentControlInsightsByControlDomainResponse$ === "object");
assert(typeof ListAssessmentFrameworkShareRequestsRequest$ === "object");
assert(typeof ListAssessmentFrameworkShareRequestsResponse$ === "object");
assert(typeof ListAssessmentFrameworksRequest$ === "object");
assert(typeof ListAssessmentFrameworksResponse$ === "object");
assert(typeof ListAssessmentReportsRequest$ === "object");
assert(typeof ListAssessmentReportsResponse$ === "object");
assert(typeof ListAssessmentsRequest$ === "object");
assert(typeof ListAssessmentsResponse$ === "object");
assert(typeof ListControlDomainInsightsByAssessmentRequest$ === "object");
assert(typeof ListControlDomainInsightsByAssessmentResponse$ === "object");
assert(typeof ListControlDomainInsightsRequest$ === "object");
assert(typeof ListControlDomainInsightsResponse$ === "object");
assert(typeof ListControlInsightsByControlDomainRequest$ === "object");
assert(typeof ListControlInsightsByControlDomainResponse$ === "object");
assert(typeof ListControlsRequest$ === "object");
assert(typeof ListControlsResponse$ === "object");
assert(typeof ListKeywordsForDataSourceRequest$ === "object");
assert(typeof ListKeywordsForDataSourceResponse$ === "object");
assert(typeof ListNotificationsRequest$ === "object");
assert(typeof ListNotificationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ManualEvidence$ === "object");
assert(typeof Notification$ === "object");
assert(typeof RegisterAccountRequest$ === "object");
assert(typeof RegisterAccountResponse$ === "object");
assert(typeof RegisterOrganizationAdminAccountRequest$ === "object");
assert(typeof RegisterOrganizationAdminAccountResponse$ === "object");
assert(typeof Resource$ === "object");
assert(typeof Role$ === "object");
assert(typeof Scope$ === "object");
assert(typeof ServiceMetadata$ === "object");
assert(typeof Settings$ === "object");
assert(typeof SourceKeyword$ === "object");
assert(typeof StartAssessmentFrameworkShareRequest$ === "object");
assert(typeof StartAssessmentFrameworkShareResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAssessmentControlRequest$ === "object");
assert(typeof UpdateAssessmentControlResponse$ === "object");
assert(typeof UpdateAssessmentControlSetStatusRequest$ === "object");
assert(typeof UpdateAssessmentControlSetStatusResponse$ === "object");
assert(typeof UpdateAssessmentFrameworkControlSet$ === "object");
assert(typeof UpdateAssessmentFrameworkRequest$ === "object");
assert(typeof UpdateAssessmentFrameworkResponse$ === "object");
assert(typeof UpdateAssessmentFrameworkShareRequest$ === "object");
assert(typeof UpdateAssessmentFrameworkShareResponse$ === "object");
assert(typeof UpdateAssessmentRequest$ === "object");
assert(typeof UpdateAssessmentResponse$ === "object");
assert(typeof UpdateAssessmentStatusRequest$ === "object");
assert(typeof UpdateAssessmentStatusResponse$ === "object");
assert(typeof UpdateControlRequest$ === "object");
assert(typeof UpdateControlResponse$ === "object");
assert(typeof UpdateSettingsRequest$ === "object");
assert(typeof UpdateSettingsResponse$ === "object");
assert(typeof URL$ === "object");
assert(typeof ValidateAssessmentReportIntegrityRequest$ === "object");
assert(typeof ValidateAssessmentReportIntegrityResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof AccountStatus === "object");
assert(typeof ActionEnum === "object");
assert(typeof AssessmentReportDestinationType === "object");
assert(typeof AssessmentReportStatus === "object");
assert(typeof AssessmentStatus === "object");
assert(typeof ControlResponse === "object");
assert(typeof ControlSetStatus === "object");
assert(typeof ControlState === "object");
assert(typeof ControlStatus === "object");
assert(typeof ControlType === "object");
assert(typeof DataSourceType === "object");
assert(typeof DelegationStatus === "object");
assert(typeof DeleteResources === "object");
assert(typeof EvidenceFinderBackfillStatus === "object");
assert(typeof EvidenceFinderEnablementStatus === "object");
assert(typeof ExportDestinationType === "object");
assert(typeof FrameworkType === "object");
assert(typeof KeywordInputType === "object");
assert(typeof ObjectTypeEnum === "object");
assert(typeof RoleType === "object");
assert(typeof SettingAttribute === "object");
assert(typeof ShareRequestAction === "object");
assert(typeof ShareRequestStatus === "object");
assert(typeof ShareRequestType === "object");
assert(typeof SourceFrequency === "object");
assert(typeof SourceSetUpOption === "object");
assert(typeof SourceType === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof AuditManagerServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof AuditManagerServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AuditManagerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof AuditManagerServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof AuditManagerServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof AuditManagerServiceException);
assert(typeof ValidationException$ === "object");
assert(AuditManagerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetChangeLogs === "function");
assert(typeof paginateGetDelegations === "function");
assert(typeof paginateGetEvidenceByEvidenceFolder === "function");
assert(typeof paginateGetEvidenceFoldersByAssessment === "function");
assert(typeof paginateGetEvidenceFoldersByAssessmentControl === "function");
assert(typeof paginateListAssessmentControlInsightsByControlDomain === "function");
assert(typeof paginateListAssessmentFrameworkShareRequests === "function");
assert(typeof paginateListAssessmentFrameworks === "function");
assert(typeof paginateListAssessmentReports === "function");
assert(typeof paginateListAssessments === "function");
assert(typeof paginateListControlDomainInsights === "function");
assert(typeof paginateListControlDomainInsightsByAssessment === "function");
assert(typeof paginateListControlInsightsByControlDomain === "function");
assert(typeof paginateListControls === "function");
assert(typeof paginateListKeywordsForDataSource === "function");
assert(typeof paginateListNotifications === "function");
console.log(`AuditManager index test passed.`);
