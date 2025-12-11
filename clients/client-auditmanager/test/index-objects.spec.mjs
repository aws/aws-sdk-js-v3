import {
  AccessDeniedException,
  AccountStatus,
  ActionEnum,
  AssessmentReportDestinationType,
  AssessmentReportStatus,
  AssessmentStatus,
  AssociateAssessmentReportEvidenceFolderCommand,
  AuditManager,
  AuditManagerClient,
  AuditManagerServiceException,
  BatchAssociateAssessmentReportEvidenceCommand,
  BatchCreateDelegationByAssessmentCommand,
  BatchDeleteDelegationByAssessmentCommand,
  BatchDisassociateAssessmentReportEvidenceCommand,
  BatchImportEvidenceToAssessmentControlCommand,
  ControlResponse,
  ControlSetStatus,
  ControlState,
  ControlStatus,
  ControlType,
  CreateAssessmentCommand,
  CreateAssessmentFrameworkCommand,
  CreateAssessmentReportCommand,
  CreateControlCommand,
  DataSourceType,
  DelegationStatus,
  DeleteAssessmentCommand,
  DeleteAssessmentFrameworkCommand,
  DeleteAssessmentFrameworkShareCommand,
  DeleteAssessmentReportCommand,
  DeleteControlCommand,
  DeleteResources,
  DeregisterAccountCommand,
  DeregisterOrganizationAdminAccountCommand,
  DisassociateAssessmentReportEvidenceFolderCommand,
  EvidenceFinderBackfillStatus,
  EvidenceFinderEnablementStatus,
  ExportDestinationType,
  FrameworkType,
  GetAccountStatusCommand,
  GetAssessmentCommand,
  GetAssessmentFrameworkCommand,
  GetAssessmentReportUrlCommand,
  GetChangeLogsCommand,
  GetControlCommand,
  GetDelegationsCommand,
  GetEvidenceByEvidenceFolderCommand,
  GetEvidenceCommand,
  GetEvidenceFileUploadUrlCommand,
  GetEvidenceFolderCommand,
  GetEvidenceFoldersByAssessmentCommand,
  GetEvidenceFoldersByAssessmentControlCommand,
  GetInsightsByAssessmentCommand,
  GetInsightsCommand,
  GetOrganizationAdminAccountCommand,
  GetServicesInScopeCommand,
  GetSettingsCommand,
  InternalServerException,
  KeywordInputType,
  ListAssessmentControlInsightsByControlDomainCommand,
  ListAssessmentFrameworkShareRequestsCommand,
  ListAssessmentFrameworksCommand,
  ListAssessmentReportsCommand,
  ListAssessmentsCommand,
  ListControlDomainInsightsByAssessmentCommand,
  ListControlDomainInsightsCommand,
  ListControlInsightsByControlDomainCommand,
  ListControlsCommand,
  ListKeywordsForDataSourceCommand,
  ListNotificationsCommand,
  ListTagsForResourceCommand,
  ObjectTypeEnum,
  RegisterAccountCommand,
  RegisterOrganizationAdminAccountCommand,
  ResourceNotFoundException,
  RoleType,
  ServiceQuotaExceededException,
  SettingAttribute,
  ShareRequestAction,
  ShareRequestStatus,
  ShareRequestType,
  SourceFrequency,
  SourceSetUpOption,
  SourceType,
  StartAssessmentFrameworkShareCommand,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateAssessmentCommand,
  UpdateAssessmentControlCommand,
  UpdateAssessmentControlSetStatusCommand,
  UpdateAssessmentFrameworkCommand,
  UpdateAssessmentFrameworkShareCommand,
  UpdateAssessmentStatusCommand,
  UpdateControlCommand,
  UpdateSettingsCommand,
  ValidateAssessmentReportIntegrityCommand,
  ValidationException,
  ValidationExceptionReason,
  paginateGetChangeLogs,
  paginateGetDelegations,
  paginateGetEvidenceByEvidenceFolder,
  paginateGetEvidenceFoldersByAssessment,
  paginateGetEvidenceFoldersByAssessmentControl,
  paginateListAssessmentControlInsightsByControlDomain,
  paginateListAssessmentFrameworkShareRequests,
  paginateListAssessmentFrameworks,
  paginateListAssessmentReports,
  paginateListAssessments,
  paginateListControlDomainInsights,
  paginateListControlDomainInsightsByAssessment,
  paginateListControlInsightsByControlDomain,
  paginateListControls,
  paginateListKeywordsForDataSource,
  paginateListNotifications,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AuditManagerClient === "function");
assert(typeof AuditManager === "function");
// commands
assert(typeof AssociateAssessmentReportEvidenceFolderCommand === "function");
assert(typeof BatchAssociateAssessmentReportEvidenceCommand === "function");
assert(typeof BatchCreateDelegationByAssessmentCommand === "function");
assert(typeof BatchDeleteDelegationByAssessmentCommand === "function");
assert(typeof BatchDisassociateAssessmentReportEvidenceCommand === "function");
assert(typeof BatchImportEvidenceToAssessmentControlCommand === "function");
assert(typeof CreateAssessmentCommand === "function");
assert(typeof CreateAssessmentFrameworkCommand === "function");
assert(typeof CreateAssessmentReportCommand === "function");
assert(typeof CreateControlCommand === "function");
assert(typeof DeleteAssessmentCommand === "function");
assert(typeof DeleteAssessmentFrameworkCommand === "function");
assert(typeof DeleteAssessmentFrameworkShareCommand === "function");
assert(typeof DeleteAssessmentReportCommand === "function");
assert(typeof DeleteControlCommand === "function");
assert(typeof DeregisterAccountCommand === "function");
assert(typeof DeregisterOrganizationAdminAccountCommand === "function");
assert(typeof DisassociateAssessmentReportEvidenceFolderCommand === "function");
assert(typeof GetAccountStatusCommand === "function");
assert(typeof GetAssessmentCommand === "function");
assert(typeof GetAssessmentFrameworkCommand === "function");
assert(typeof GetAssessmentReportUrlCommand === "function");
assert(typeof GetChangeLogsCommand === "function");
assert(typeof GetControlCommand === "function");
assert(typeof GetDelegationsCommand === "function");
assert(typeof GetEvidenceCommand === "function");
assert(typeof GetEvidenceByEvidenceFolderCommand === "function");
assert(typeof GetEvidenceFileUploadUrlCommand === "function");
assert(typeof GetEvidenceFolderCommand === "function");
assert(typeof GetEvidenceFoldersByAssessmentCommand === "function");
assert(typeof GetEvidenceFoldersByAssessmentControlCommand === "function");
assert(typeof GetInsightsCommand === "function");
assert(typeof GetInsightsByAssessmentCommand === "function");
assert(typeof GetOrganizationAdminAccountCommand === "function");
assert(typeof GetServicesInScopeCommand === "function");
assert(typeof GetSettingsCommand === "function");
assert(typeof ListAssessmentControlInsightsByControlDomainCommand === "function");
assert(typeof ListAssessmentFrameworksCommand === "function");
assert(typeof ListAssessmentFrameworkShareRequestsCommand === "function");
assert(typeof ListAssessmentReportsCommand === "function");
assert(typeof ListAssessmentsCommand === "function");
assert(typeof ListControlDomainInsightsCommand === "function");
assert(typeof ListControlDomainInsightsByAssessmentCommand === "function");
assert(typeof ListControlInsightsByControlDomainCommand === "function");
assert(typeof ListControlsCommand === "function");
assert(typeof ListKeywordsForDataSourceCommand === "function");
assert(typeof ListNotificationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RegisterAccountCommand === "function");
assert(typeof RegisterOrganizationAdminAccountCommand === "function");
assert(typeof StartAssessmentFrameworkShareCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAssessmentCommand === "function");
assert(typeof UpdateAssessmentControlCommand === "function");
assert(typeof UpdateAssessmentControlSetStatusCommand === "function");
assert(typeof UpdateAssessmentFrameworkCommand === "function");
assert(typeof UpdateAssessmentFrameworkShareCommand === "function");
assert(typeof UpdateAssessmentStatusCommand === "function");
assert(typeof UpdateControlCommand === "function");
assert(typeof UpdateSettingsCommand === "function");
assert(typeof ValidateAssessmentReportIntegrityCommand === "function");
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
assert(InternalServerException.prototype instanceof AuditManagerServiceException);
assert(ResourceNotFoundException.prototype instanceof AuditManagerServiceException);
assert(ServiceQuotaExceededException.prototype instanceof AuditManagerServiceException);
assert(ThrottlingException.prototype instanceof AuditManagerServiceException);
assert(ValidationException.prototype instanceof AuditManagerServiceException);
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
