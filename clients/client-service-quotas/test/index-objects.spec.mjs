import {
  AppliedLevelEnum,
  AssociateServiceQuotaTemplateCommand,
  CreateSupportCaseCommand,
  DeleteServiceQuotaIncreaseRequestFromTemplateCommand,
  DisassociateServiceQuotaTemplateCommand,
  ErrorCode,
  GetAWSDefaultServiceQuotaCommand,
  GetAssociationForServiceQuotaTemplateCommand,
  GetAutoManagementConfigurationCommand,
  GetRequestedServiceQuotaChangeCommand,
  GetServiceQuotaCommand,
  GetServiceQuotaIncreaseRequestFromTemplateCommand,
  ListAWSDefaultServiceQuotasCommand,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommand,
  ListRequestedServiceQuotaChangeHistoryCommand,
  ListServiceQuotaIncreaseRequestsInTemplateCommand,
  ListServiceQuotasCommand,
  ListServicesCommand,
  ListTagsForResourceCommand,
  OptInLevel,
  OptInStatus,
  OptInType,
  PeriodUnit,
  PutServiceQuotaIncreaseRequestIntoTemplateCommand,
  QuotaContextScope,
  RequestServiceQuotaIncreaseCommand,
  RequestStatus,
  ServiceQuotaTemplateAssociationStatus,
  ServiceQuotas,
  ServiceQuotasClient,
  ServiceQuotasServiceException,
  StartAutoManagementCommand,
  StopAutoManagementCommand,
  TagResourceCommand,
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
assert(typeof RequestStatus === "object");
assert(typeof ServiceQuotaTemplateAssociationStatus === "object");
// errors
assert(ServiceQuotasServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAWSDefaultServiceQuotas === "function");
assert(typeof paginateListRequestedServiceQuotaChangeHistory === "function");
assert(typeof paginateListRequestedServiceQuotaChangeHistoryByQuota === "function");
assert(typeof paginateListServiceQuotaIncreaseRequestsInTemplate === "function");
assert(typeof paginateListServiceQuotas === "function");
assert(typeof paginateListServices === "function");
console.log(`ServiceQuotas index test passed.`);
