import {
  AWSServiceAccessNotEnabledException,
  AWSServiceAccessNotEnabledException$,
  AccessDeniedException,
  AccessDeniedException$,
  AppliedLevelEnum,
  AssociateServiceQuotaTemplate$,
  AssociateServiceQuotaTemplateCommand,
  AssociateServiceQuotaTemplateRequest$,
  AssociateServiceQuotaTemplateResponse$,
  CreateSupportCase$,
  CreateSupportCaseCommand,
  CreateSupportCaseRequest$,
  CreateSupportCaseResponse$,
  DeleteServiceQuotaIncreaseRequestFromTemplate$,
  DeleteServiceQuotaIncreaseRequestFromTemplateCommand,
  DeleteServiceQuotaIncreaseRequestFromTemplateRequest$,
  DeleteServiceQuotaIncreaseRequestFromTemplateResponse$,
  DependencyAccessDeniedException,
  DependencyAccessDeniedException$,
  DisassociateServiceQuotaTemplate$,
  DisassociateServiceQuotaTemplateCommand,
  DisassociateServiceQuotaTemplateRequest$,
  DisassociateServiceQuotaTemplateResponse$,
  ErrorCode,
  ErrorReason$,
  GetAWSDefaultServiceQuota$,
  GetAWSDefaultServiceQuotaCommand,
  GetAWSDefaultServiceQuotaRequest$,
  GetAWSDefaultServiceQuotaResponse$,
  GetAssociationForServiceQuotaTemplate$,
  GetAssociationForServiceQuotaTemplateCommand,
  GetAssociationForServiceQuotaTemplateRequest$,
  GetAssociationForServiceQuotaTemplateResponse$,
  GetAutoManagementConfiguration$,
  GetAutoManagementConfigurationCommand,
  GetAutoManagementConfigurationRequest$,
  GetAutoManagementConfigurationResponse$,
  GetQuotaUtilizationReport$,
  GetQuotaUtilizationReportCommand,
  GetQuotaUtilizationReportRequest$,
  GetQuotaUtilizationReportResponse$,
  GetRequestedServiceQuotaChange$,
  GetRequestedServiceQuotaChangeCommand,
  GetRequestedServiceQuotaChangeRequest$,
  GetRequestedServiceQuotaChangeResponse$,
  GetServiceQuota$,
  GetServiceQuotaCommand,
  GetServiceQuotaIncreaseRequestFromTemplate$,
  GetServiceQuotaIncreaseRequestFromTemplateCommand,
  GetServiceQuotaIncreaseRequestFromTemplateRequest$,
  GetServiceQuotaIncreaseRequestFromTemplateResponse$,
  GetServiceQuotaRequest$,
  GetServiceQuotaResponse$,
  IllegalArgumentException,
  IllegalArgumentException$,
  InvalidPaginationTokenException,
  InvalidPaginationTokenException$,
  InvalidResourceStateException,
  InvalidResourceStateException$,
  ListAWSDefaultServiceQuotas$,
  ListAWSDefaultServiceQuotasCommand,
  ListAWSDefaultServiceQuotasRequest$,
  ListAWSDefaultServiceQuotasResponse$,
  ListRequestedServiceQuotaChangeHistory$,
  ListRequestedServiceQuotaChangeHistoryByQuota$,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommand,
  ListRequestedServiceQuotaChangeHistoryByQuotaRequest$,
  ListRequestedServiceQuotaChangeHistoryByQuotaResponse$,
  ListRequestedServiceQuotaChangeHistoryCommand,
  ListRequestedServiceQuotaChangeHistoryRequest$,
  ListRequestedServiceQuotaChangeHistoryResponse$,
  ListServiceQuotaIncreaseRequestsInTemplate$,
  ListServiceQuotaIncreaseRequestsInTemplateCommand,
  ListServiceQuotaIncreaseRequestsInTemplateRequest$,
  ListServiceQuotaIncreaseRequestsInTemplateResponse$,
  ListServiceQuotas$,
  ListServiceQuotasCommand,
  ListServiceQuotasRequest$,
  ListServiceQuotasResponse$,
  ListServices$,
  ListServicesCommand,
  ListServicesRequest$,
  ListServicesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MetricInfo$,
  NoAvailableOrganizationException,
  NoAvailableOrganizationException$,
  NoSuchResourceException,
  NoSuchResourceException$,
  OptInLevel,
  OptInStatus,
  OptInType,
  OrganizationNotInAllFeaturesModeException,
  OrganizationNotInAllFeaturesModeException$,
  PeriodUnit,
  PutServiceQuotaIncreaseRequestIntoTemplate$,
  PutServiceQuotaIncreaseRequestIntoTemplateCommand,
  PutServiceQuotaIncreaseRequestIntoTemplateRequest$,
  PutServiceQuotaIncreaseRequestIntoTemplateResponse$,
  QuotaContextInfo$,
  QuotaContextScope,
  QuotaExceededException,
  QuotaExceededException$,
  QuotaInfo$,
  QuotaPeriod$,
  QuotaUtilizationInfo$,
  ReportStatus,
  RequestServiceQuotaIncrease$,
  RequestServiceQuotaIncreaseCommand,
  RequestServiceQuotaIncreaseRequest$,
  RequestServiceQuotaIncreaseResponse$,
  RequestStatus,
  RequestType,
  RequestedServiceQuotaChange$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ServiceException,
  ServiceException$,
  ServiceInfo$,
  ServiceQuota$,
  ServiceQuotaIncreaseRequestInTemplate$,
  ServiceQuotaTemplateAssociationStatus,
  ServiceQuotaTemplateNotInUseException,
  ServiceQuotaTemplateNotInUseException$,
  ServiceQuotas,
  ServiceQuotasClient,
  ServiceQuotasServiceException,
  StartAutoManagement$,
  StartAutoManagementCommand,
  StartAutoManagementRequest$,
  StartAutoManagementResponse$,
  StartQuotaUtilizationReport$,
  StartQuotaUtilizationReportCommand,
  StartQuotaUtilizationReportRequest$,
  StartQuotaUtilizationReportResponse$,
  StopAutoManagement$,
  StopAutoManagementCommand,
  StopAutoManagementRequest$,
  StopAutoManagementResponse$,
  Tag$,
  TagPolicyViolationException,
  TagPolicyViolationException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TemplatesNotAvailableInRegionException,
  TemplatesNotAvailableInRegionException$,
  TooManyRequestsException,
  TooManyRequestsException$,
  TooManyTagsException,
  TooManyTagsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAutoManagement$,
  UpdateAutoManagementCommand,
  UpdateAutoManagementRequest$,
  UpdateAutoManagementResponse$,
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
assert(typeof AssociateServiceQuotaTemplate$ === "object");
assert(typeof CreateSupportCaseCommand === "function");
assert(typeof CreateSupportCase$ === "object");
assert(typeof DeleteServiceQuotaIncreaseRequestFromTemplateCommand === "function");
assert(typeof DeleteServiceQuotaIncreaseRequestFromTemplate$ === "object");
assert(typeof DisassociateServiceQuotaTemplateCommand === "function");
assert(typeof DisassociateServiceQuotaTemplate$ === "object");
assert(typeof GetAssociationForServiceQuotaTemplateCommand === "function");
assert(typeof GetAssociationForServiceQuotaTemplate$ === "object");
assert(typeof GetAutoManagementConfigurationCommand === "function");
assert(typeof GetAutoManagementConfiguration$ === "object");
assert(typeof GetAWSDefaultServiceQuotaCommand === "function");
assert(typeof GetAWSDefaultServiceQuota$ === "object");
assert(typeof GetQuotaUtilizationReportCommand === "function");
assert(typeof GetQuotaUtilizationReport$ === "object");
assert(typeof GetRequestedServiceQuotaChangeCommand === "function");
assert(typeof GetRequestedServiceQuotaChange$ === "object");
assert(typeof GetServiceQuotaCommand === "function");
assert(typeof GetServiceQuota$ === "object");
assert(typeof GetServiceQuotaIncreaseRequestFromTemplateCommand === "function");
assert(typeof GetServiceQuotaIncreaseRequestFromTemplate$ === "object");
assert(typeof ListAWSDefaultServiceQuotasCommand === "function");
assert(typeof ListAWSDefaultServiceQuotas$ === "object");
assert(typeof ListRequestedServiceQuotaChangeHistoryCommand === "function");
assert(typeof ListRequestedServiceQuotaChangeHistory$ === "object");
assert(typeof ListRequestedServiceQuotaChangeHistoryByQuotaCommand === "function");
assert(typeof ListRequestedServiceQuotaChangeHistoryByQuota$ === "object");
assert(typeof ListServiceQuotaIncreaseRequestsInTemplateCommand === "function");
assert(typeof ListServiceQuotaIncreaseRequestsInTemplate$ === "object");
assert(typeof ListServiceQuotasCommand === "function");
assert(typeof ListServiceQuotas$ === "object");
assert(typeof ListServicesCommand === "function");
assert(typeof ListServices$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutServiceQuotaIncreaseRequestIntoTemplateCommand === "function");
assert(typeof PutServiceQuotaIncreaseRequestIntoTemplate$ === "object");
assert(typeof RequestServiceQuotaIncreaseCommand === "function");
assert(typeof RequestServiceQuotaIncrease$ === "object");
assert(typeof StartAutoManagementCommand === "function");
assert(typeof StartAutoManagement$ === "object");
assert(typeof StartQuotaUtilizationReportCommand === "function");
assert(typeof StartQuotaUtilizationReport$ === "object");
assert(typeof StopAutoManagementCommand === "function");
assert(typeof StopAutoManagement$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAutoManagementCommand === "function");
assert(typeof UpdateAutoManagement$ === "object");
// structural schemas
assert(typeof AssociateServiceQuotaTemplateRequest$ === "object");
assert(typeof AssociateServiceQuotaTemplateResponse$ === "object");
assert(typeof CreateSupportCaseRequest$ === "object");
assert(typeof CreateSupportCaseResponse$ === "object");
assert(typeof DeleteServiceQuotaIncreaseRequestFromTemplateRequest$ === "object");
assert(typeof DeleteServiceQuotaIncreaseRequestFromTemplateResponse$ === "object");
assert(typeof DisassociateServiceQuotaTemplateRequest$ === "object");
assert(typeof DisassociateServiceQuotaTemplateResponse$ === "object");
assert(typeof ErrorReason$ === "object");
assert(typeof GetAssociationForServiceQuotaTemplateRequest$ === "object");
assert(typeof GetAssociationForServiceQuotaTemplateResponse$ === "object");
assert(typeof GetAutoManagementConfigurationRequest$ === "object");
assert(typeof GetAutoManagementConfigurationResponse$ === "object");
assert(typeof GetAWSDefaultServiceQuotaRequest$ === "object");
assert(typeof GetAWSDefaultServiceQuotaResponse$ === "object");
assert(typeof GetQuotaUtilizationReportRequest$ === "object");
assert(typeof GetQuotaUtilizationReportResponse$ === "object");
assert(typeof GetRequestedServiceQuotaChangeRequest$ === "object");
assert(typeof GetRequestedServiceQuotaChangeResponse$ === "object");
assert(typeof GetServiceQuotaIncreaseRequestFromTemplateRequest$ === "object");
assert(typeof GetServiceQuotaIncreaseRequestFromTemplateResponse$ === "object");
assert(typeof GetServiceQuotaRequest$ === "object");
assert(typeof GetServiceQuotaResponse$ === "object");
assert(typeof ListAWSDefaultServiceQuotasRequest$ === "object");
assert(typeof ListAWSDefaultServiceQuotasResponse$ === "object");
assert(typeof ListRequestedServiceQuotaChangeHistoryByQuotaRequest$ === "object");
assert(typeof ListRequestedServiceQuotaChangeHistoryByQuotaResponse$ === "object");
assert(typeof ListRequestedServiceQuotaChangeHistoryRequest$ === "object");
assert(typeof ListRequestedServiceQuotaChangeHistoryResponse$ === "object");
assert(typeof ListServiceQuotaIncreaseRequestsInTemplateRequest$ === "object");
assert(typeof ListServiceQuotaIncreaseRequestsInTemplateResponse$ === "object");
assert(typeof ListServiceQuotasRequest$ === "object");
assert(typeof ListServiceQuotasResponse$ === "object");
assert(typeof ListServicesRequest$ === "object");
assert(typeof ListServicesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MetricInfo$ === "object");
assert(typeof PutServiceQuotaIncreaseRequestIntoTemplateRequest$ === "object");
assert(typeof PutServiceQuotaIncreaseRequestIntoTemplateResponse$ === "object");
assert(typeof QuotaContextInfo$ === "object");
assert(typeof QuotaInfo$ === "object");
assert(typeof QuotaPeriod$ === "object");
assert(typeof QuotaUtilizationInfo$ === "object");
assert(typeof RequestedServiceQuotaChange$ === "object");
assert(typeof RequestServiceQuotaIncreaseRequest$ === "object");
assert(typeof RequestServiceQuotaIncreaseResponse$ === "object");
assert(typeof ServiceInfo$ === "object");
assert(typeof ServiceQuota$ === "object");
assert(typeof ServiceQuotaIncreaseRequestInTemplate$ === "object");
assert(typeof StartAutoManagementRequest$ === "object");
assert(typeof StartAutoManagementResponse$ === "object");
assert(typeof StartQuotaUtilizationReportRequest$ === "object");
assert(typeof StartQuotaUtilizationReportResponse$ === "object");
assert(typeof StopAutoManagementRequest$ === "object");
assert(typeof StopAutoManagementResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAutoManagementRequest$ === "object");
assert(typeof UpdateAutoManagementResponse$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(AWSServiceAccessNotEnabledException.prototype instanceof ServiceQuotasServiceException);
assert(typeof AWSServiceAccessNotEnabledException$ === "object");
assert(DependencyAccessDeniedException.prototype instanceof ServiceQuotasServiceException);
assert(typeof DependencyAccessDeniedException$ === "object");
assert(IllegalArgumentException.prototype instanceof ServiceQuotasServiceException);
assert(typeof IllegalArgumentException$ === "object");
assert(InvalidPaginationTokenException.prototype instanceof ServiceQuotasServiceException);
assert(typeof InvalidPaginationTokenException$ === "object");
assert(InvalidResourceStateException.prototype instanceof ServiceQuotasServiceException);
assert(typeof InvalidResourceStateException$ === "object");
assert(NoAvailableOrganizationException.prototype instanceof ServiceQuotasServiceException);
assert(typeof NoAvailableOrganizationException$ === "object");
assert(NoSuchResourceException.prototype instanceof ServiceQuotasServiceException);
assert(typeof NoSuchResourceException$ === "object");
assert(OrganizationNotInAllFeaturesModeException.prototype instanceof ServiceQuotasServiceException);
assert(typeof OrganizationNotInAllFeaturesModeException$ === "object");
assert(QuotaExceededException.prototype instanceof ServiceQuotasServiceException);
assert(typeof QuotaExceededException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof ServiceQuotasServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ServiceException.prototype instanceof ServiceQuotasServiceException);
assert(typeof ServiceException$ === "object");
assert(ServiceQuotaTemplateNotInUseException.prototype instanceof ServiceQuotasServiceException);
assert(typeof ServiceQuotaTemplateNotInUseException$ === "object");
assert(TagPolicyViolationException.prototype instanceof ServiceQuotasServiceException);
assert(typeof TagPolicyViolationException$ === "object");
assert(TemplatesNotAvailableInRegionException.prototype instanceof ServiceQuotasServiceException);
assert(typeof TemplatesNotAvailableInRegionException$ === "object");
assert(TooManyRequestsException.prototype instanceof ServiceQuotasServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(TooManyTagsException.prototype instanceof ServiceQuotasServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ServiceQuotasServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAWSDefaultServiceQuotas === "function");
assert(typeof paginateListRequestedServiceQuotaChangeHistory === "function");
assert(typeof paginateListRequestedServiceQuotaChangeHistoryByQuota === "function");
assert(typeof paginateListServiceQuotaIncreaseRequestsInTemplate === "function");
assert(typeof paginateListServiceQuotas === "function");
assert(typeof paginateListServices === "function");
console.log(`ServiceQuotas index test passed.`);
