import {
  AWSServiceAccessNotEnabledException,
  AccessDeniedException,
  AppliedLevelEnum,
  AssociateServiceQuotaTemplateCommand,
  CreateSupportCaseCommand,
  DeleteServiceQuotaIncreaseRequestFromTemplateCommand,
  DependencyAccessDeniedException,
  DisassociateServiceQuotaTemplateCommand,
  ErrorCode,
  GetAWSDefaultServiceQuotaCommand,
  GetAssociationForServiceQuotaTemplateCommand,
  GetAutoManagementConfigurationCommand,
  GetQuotaUtilizationReportCommand,
  GetRequestedServiceQuotaChangeCommand,
  GetServiceQuotaCommand,
  GetServiceQuotaIncreaseRequestFromTemplateCommand,
  IllegalArgumentException,
  InvalidPaginationTokenException,
  InvalidResourceStateException,
  ListAWSDefaultServiceQuotasCommand,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommand,
  ListRequestedServiceQuotaChangeHistoryCommand,
  ListServiceQuotaIncreaseRequestsInTemplateCommand,
  ListServiceQuotasCommand,
  ListServicesCommand,
  ListTagsForResourceCommand,
  NoAvailableOrganizationException,
  NoSuchResourceException,
  OptInLevel,
  OptInStatus,
  OptInType,
  OrganizationNotInAllFeaturesModeException,
  PeriodUnit,
  PutServiceQuotaIncreaseRequestIntoTemplateCommand,
  QuotaContextScope,
  QuotaExceededException,
  ReportStatus,
  RequestServiceQuotaIncreaseCommand,
  RequestStatus,
  RequestType,
  ResourceAlreadyExistsException,
  ServiceException,
  ServiceQuotaTemplateAssociationStatus,
  ServiceQuotaTemplateNotInUseException,
  ServiceQuotas,
  ServiceQuotasClient,
  ServiceQuotasServiceException,
  StartAutoManagementCommand,
  StartQuotaUtilizationReportCommand,
  StopAutoManagementCommand,
  TagPolicyViolationException,
  TagResourceCommand,
  TemplatesNotAvailableInRegionException,
  TooManyRequestsException,
  TooManyTagsException,
  UntagResourceCommand,
  UpdateAutoManagementCommand,
  paginateListAWSDefaultServiceQuotas,
  paginateListRequestedServiceQuotaChangeHistory,
  paginateListRequestedServiceQuotaChangeHistoryByQuota,
  paginateListServiceQuotaIncreaseRequestsInTemplate,
  paginateListServiceQuotas,
  paginateListServices,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ServiceQuotasClient === "function");
assert(typeof ServiceQuotas === "function");
// commands
assert(typeof AssociateServiceQuotaTemplateCommand === "function");
assert(typeof CreateSupportCaseCommand === "function");
assert(typeof DeleteServiceQuotaIncreaseRequestFromTemplateCommand === "function");
assert(typeof DisassociateServiceQuotaTemplateCommand === "function");
assert(typeof GetAssociationForServiceQuotaTemplateCommand === "function");
assert(typeof GetAutoManagementConfigurationCommand === "function");
assert(typeof GetAWSDefaultServiceQuotaCommand === "function");
assert(typeof GetQuotaUtilizationReportCommand === "function");
assert(typeof GetRequestedServiceQuotaChangeCommand === "function");
assert(typeof GetServiceQuotaCommand === "function");
assert(typeof GetServiceQuotaIncreaseRequestFromTemplateCommand === "function");
assert(typeof ListAWSDefaultServiceQuotasCommand === "function");
assert(typeof ListRequestedServiceQuotaChangeHistoryCommand === "function");
assert(typeof ListRequestedServiceQuotaChangeHistoryByQuotaCommand === "function");
assert(typeof ListServiceQuotaIncreaseRequestsInTemplateCommand === "function");
assert(typeof ListServiceQuotasCommand === "function");
assert(typeof ListServicesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutServiceQuotaIncreaseRequestIntoTemplateCommand === "function");
assert(typeof RequestServiceQuotaIncreaseCommand === "function");
assert(typeof StartAutoManagementCommand === "function");
assert(typeof StartQuotaUtilizationReportCommand === "function");
assert(typeof StopAutoManagementCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAutoManagementCommand === "function");
// enums
assert(typeof AppliedLevelEnum === "object");
assert(typeof ErrorCode === "object");
assert(typeof OptInLevel === "object");
assert(typeof OptInStatus === "object");
assert(typeof OptInType === "object");
assert(typeof PeriodUnit === "object");
assert(typeof QuotaContextScope === "object");
assert(typeof ReportStatus === "object");
assert(typeof RequestStatus === "object");
assert(typeof RequestType === "object");
assert(typeof ServiceQuotaTemplateAssociationStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof ServiceQuotasServiceException);
assert(AWSServiceAccessNotEnabledException.prototype instanceof ServiceQuotasServiceException);
assert(DependencyAccessDeniedException.prototype instanceof ServiceQuotasServiceException);
assert(IllegalArgumentException.prototype instanceof ServiceQuotasServiceException);
assert(InvalidPaginationTokenException.prototype instanceof ServiceQuotasServiceException);
assert(InvalidResourceStateException.prototype instanceof ServiceQuotasServiceException);
assert(NoAvailableOrganizationException.prototype instanceof ServiceQuotasServiceException);
assert(NoSuchResourceException.prototype instanceof ServiceQuotasServiceException);
assert(OrganizationNotInAllFeaturesModeException.prototype instanceof ServiceQuotasServiceException);
assert(QuotaExceededException.prototype instanceof ServiceQuotasServiceException);
assert(ResourceAlreadyExistsException.prototype instanceof ServiceQuotasServiceException);
assert(ServiceException.prototype instanceof ServiceQuotasServiceException);
assert(ServiceQuotaTemplateNotInUseException.prototype instanceof ServiceQuotasServiceException);
assert(TagPolicyViolationException.prototype instanceof ServiceQuotasServiceException);
assert(TemplatesNotAvailableInRegionException.prototype instanceof ServiceQuotasServiceException);
assert(TooManyRequestsException.prototype instanceof ServiceQuotasServiceException);
assert(TooManyTagsException.prototype instanceof ServiceQuotasServiceException);
assert(ServiceQuotasServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAWSDefaultServiceQuotas === "function");
assert(typeof paginateListRequestedServiceQuotaChangeHistory === "function");
assert(typeof paginateListRequestedServiceQuotaChangeHistoryByQuota === "function");
assert(typeof paginateListServiceQuotaIncreaseRequestsInTemplate === "function");
assert(typeof paginateListServiceQuotas === "function");
assert(typeof paginateListServices === "function");
console.log(`ServiceQuotas index test passed.`);
