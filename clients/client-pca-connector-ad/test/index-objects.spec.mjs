import {
  AccessControlEntry$,
  AccessControlEntrySummary$,
  AccessDeniedException,
  AccessDeniedException$,
  AccessRight,
  AccessRights$,
  ApplicationPolicies$,
  ApplicationPolicy$,
  ApplicationPolicyType,
  CertificateValidity$,
  ClientCompatibilityV2,
  ClientCompatibilityV3,
  ClientCompatibilityV4,
  ConflictException,
  ConflictException$,
  Connector$,
  ConnectorStatus,
  ConnectorStatusReason,
  ConnectorSummary$,
  CreateConnector$,
  CreateConnectorCommand,
  CreateConnectorRequest$,
  CreateConnectorResponse$,
  CreateDirectoryRegistration$,
  CreateDirectoryRegistrationCommand,
  CreateDirectoryRegistrationRequest$,
  CreateDirectoryRegistrationResponse$,
  CreateServicePrincipalName$,
  CreateServicePrincipalNameCommand,
  CreateServicePrincipalNameRequest$,
  CreateTemplate$,
  CreateTemplateCommand,
  CreateTemplateGroupAccessControlEntry$,
  CreateTemplateGroupAccessControlEntryCommand,
  CreateTemplateGroupAccessControlEntryRequest$,
  CreateTemplateRequest$,
  CreateTemplateResponse$,
  DeleteConnector$,
  DeleteConnectorCommand,
  DeleteConnectorRequest$,
  DeleteDirectoryRegistration$,
  DeleteDirectoryRegistrationCommand,
  DeleteDirectoryRegistrationRequest$,
  DeleteServicePrincipalName$,
  DeleteServicePrincipalNameCommand,
  DeleteServicePrincipalNameRequest$,
  DeleteTemplate$,
  DeleteTemplateCommand,
  DeleteTemplateGroupAccessControlEntry$,
  DeleteTemplateGroupAccessControlEntryCommand,
  DeleteTemplateGroupAccessControlEntryRequest$,
  DeleteTemplateRequest$,
  DirectoryRegistration$,
  DirectoryRegistrationStatus,
  DirectoryRegistrationStatusReason,
  DirectoryRegistrationSummary$,
  EnrollmentFlagsV2$,
  EnrollmentFlagsV3$,
  EnrollmentFlagsV4$,
  ExtensionsV2$,
  ExtensionsV3$,
  ExtensionsV4$,
  GeneralFlagsV2$,
  GeneralFlagsV3$,
  GeneralFlagsV4$,
  GetConnector$,
  GetConnectorCommand,
  GetConnectorRequest$,
  GetConnectorResponse$,
  GetDirectoryRegistration$,
  GetDirectoryRegistrationCommand,
  GetDirectoryRegistrationRequest$,
  GetDirectoryRegistrationResponse$,
  GetServicePrincipalName$,
  GetServicePrincipalNameCommand,
  GetServicePrincipalNameRequest$,
  GetServicePrincipalNameResponse$,
  GetTemplate$,
  GetTemplateCommand,
  GetTemplateGroupAccessControlEntry$,
  GetTemplateGroupAccessControlEntryCommand,
  GetTemplateGroupAccessControlEntryRequest$,
  GetTemplateGroupAccessControlEntryResponse$,
  GetTemplateRequest$,
  GetTemplateResponse$,
  HashAlgorithm,
  InternalServerException,
  InternalServerException$,
  IpAddressType,
  KeySpec,
  KeyUsage$,
  KeyUsageFlags$,
  KeyUsageProperty$,
  KeyUsagePropertyFlags$,
  KeyUsagePropertyType,
  ListConnectors$,
  ListConnectorsCommand,
  ListConnectorsRequest$,
  ListConnectorsResponse$,
  ListDirectoryRegistrations$,
  ListDirectoryRegistrationsCommand,
  ListDirectoryRegistrationsRequest$,
  ListDirectoryRegistrationsResponse$,
  ListServicePrincipalNames$,
  ListServicePrincipalNamesCommand,
  ListServicePrincipalNamesRequest$,
  ListServicePrincipalNamesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTemplateGroupAccessControlEntries$,
  ListTemplateGroupAccessControlEntriesCommand,
  ListTemplateGroupAccessControlEntriesRequest$,
  ListTemplateGroupAccessControlEntriesResponse$,
  ListTemplates$,
  ListTemplatesCommand,
  ListTemplatesRequest$,
  ListTemplatesResponse$,
  PcaConnectorAd,
  PcaConnectorAdClient,
  PcaConnectorAdServiceException,
  PrivateKeyAlgorithm,
  PrivateKeyAttributesV2$,
  PrivateKeyAttributesV3$,
  PrivateKeyAttributesV4$,
  PrivateKeyFlagsV2$,
  PrivateKeyFlagsV3$,
  PrivateKeyFlagsV4$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServicePrincipalName$,
  ServicePrincipalNameStatus,
  ServicePrincipalNameStatusReason,
  ServicePrincipalNameSummary$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SubjectNameFlagsV2$,
  SubjectNameFlagsV3$,
  SubjectNameFlagsV4$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  Template$,
  TemplateDefinition$,
  TemplateRevision$,
  TemplateStatus,
  TemplateSummary$,
  TemplateV2$,
  TemplateV3$,
  TemplateV4$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateTemplate$,
  UpdateTemplateCommand,
  UpdateTemplateGroupAccessControlEntry$,
  UpdateTemplateGroupAccessControlEntryCommand,
  UpdateTemplateGroupAccessControlEntryRequest$,
  UpdateTemplateRequest$,
  ValidationException,
  ValidationException$,
  ValidationExceptionReason,
  ValidityPeriod$,
  ValidityPeriodType,
  VpcInformation$,
  paginateListConnectors,
  paginateListDirectoryRegistrations,
  paginateListServicePrincipalNames,
  paginateListTemplateGroupAccessControlEntries,
  paginateListTemplates,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PcaConnectorAdClient === "function");
assert(typeof PcaConnectorAd === "function");
// commands
assert(typeof CreateConnectorCommand === "function");
assert(typeof CreateConnector$ === "object");
assert(typeof CreateDirectoryRegistrationCommand === "function");
assert(typeof CreateDirectoryRegistration$ === "object");
assert(typeof CreateServicePrincipalNameCommand === "function");
assert(typeof CreateServicePrincipalName$ === "object");
assert(typeof CreateTemplateCommand === "function");
assert(typeof CreateTemplate$ === "object");
assert(typeof CreateTemplateGroupAccessControlEntryCommand === "function");
assert(typeof CreateTemplateGroupAccessControlEntry$ === "object");
assert(typeof DeleteConnectorCommand === "function");
assert(typeof DeleteConnector$ === "object");
assert(typeof DeleteDirectoryRegistrationCommand === "function");
assert(typeof DeleteDirectoryRegistration$ === "object");
assert(typeof DeleteServicePrincipalNameCommand === "function");
assert(typeof DeleteServicePrincipalName$ === "object");
assert(typeof DeleteTemplateCommand === "function");
assert(typeof DeleteTemplate$ === "object");
assert(typeof DeleteTemplateGroupAccessControlEntryCommand === "function");
assert(typeof DeleteTemplateGroupAccessControlEntry$ === "object");
assert(typeof GetConnectorCommand === "function");
assert(typeof GetConnector$ === "object");
assert(typeof GetDirectoryRegistrationCommand === "function");
assert(typeof GetDirectoryRegistration$ === "object");
assert(typeof GetServicePrincipalNameCommand === "function");
assert(typeof GetServicePrincipalName$ === "object");
assert(typeof GetTemplateCommand === "function");
assert(typeof GetTemplate$ === "object");
assert(typeof GetTemplateGroupAccessControlEntryCommand === "function");
assert(typeof GetTemplateGroupAccessControlEntry$ === "object");
assert(typeof ListConnectorsCommand === "function");
assert(typeof ListConnectors$ === "object");
assert(typeof ListDirectoryRegistrationsCommand === "function");
assert(typeof ListDirectoryRegistrations$ === "object");
assert(typeof ListServicePrincipalNamesCommand === "function");
assert(typeof ListServicePrincipalNames$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTemplateGroupAccessControlEntriesCommand === "function");
assert(typeof ListTemplateGroupAccessControlEntries$ === "object");
assert(typeof ListTemplatesCommand === "function");
assert(typeof ListTemplates$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateTemplateCommand === "function");
assert(typeof UpdateTemplate$ === "object");
assert(typeof UpdateTemplateGroupAccessControlEntryCommand === "function");
assert(typeof UpdateTemplateGroupAccessControlEntry$ === "object");
// structural schemas
assert(typeof AccessControlEntry$ === "object");
assert(typeof AccessControlEntrySummary$ === "object");
assert(typeof AccessRights$ === "object");
assert(typeof ApplicationPolicies$ === "object");
assert(typeof ApplicationPolicy$ === "object");
assert(typeof CertificateValidity$ === "object");
assert(typeof Connector$ === "object");
assert(typeof ConnectorSummary$ === "object");
assert(typeof CreateConnectorRequest$ === "object");
assert(typeof CreateConnectorResponse$ === "object");
assert(typeof CreateDirectoryRegistrationRequest$ === "object");
assert(typeof CreateDirectoryRegistrationResponse$ === "object");
assert(typeof CreateServicePrincipalNameRequest$ === "object");
assert(typeof CreateTemplateGroupAccessControlEntryRequest$ === "object");
assert(typeof CreateTemplateRequest$ === "object");
assert(typeof CreateTemplateResponse$ === "object");
assert(typeof DeleteConnectorRequest$ === "object");
assert(typeof DeleteDirectoryRegistrationRequest$ === "object");
assert(typeof DeleteServicePrincipalNameRequest$ === "object");
assert(typeof DeleteTemplateGroupAccessControlEntryRequest$ === "object");
assert(typeof DeleteTemplateRequest$ === "object");
assert(typeof DirectoryRegistration$ === "object");
assert(typeof DirectoryRegistrationSummary$ === "object");
assert(typeof EnrollmentFlagsV2$ === "object");
assert(typeof EnrollmentFlagsV3$ === "object");
assert(typeof EnrollmentFlagsV4$ === "object");
assert(typeof ExtensionsV2$ === "object");
assert(typeof ExtensionsV3$ === "object");
assert(typeof ExtensionsV4$ === "object");
assert(typeof GeneralFlagsV2$ === "object");
assert(typeof GeneralFlagsV3$ === "object");
assert(typeof GeneralFlagsV4$ === "object");
assert(typeof GetConnectorRequest$ === "object");
assert(typeof GetConnectorResponse$ === "object");
assert(typeof GetDirectoryRegistrationRequest$ === "object");
assert(typeof GetDirectoryRegistrationResponse$ === "object");
assert(typeof GetServicePrincipalNameRequest$ === "object");
assert(typeof GetServicePrincipalNameResponse$ === "object");
assert(typeof GetTemplateGroupAccessControlEntryRequest$ === "object");
assert(typeof GetTemplateGroupAccessControlEntryResponse$ === "object");
assert(typeof GetTemplateRequest$ === "object");
assert(typeof GetTemplateResponse$ === "object");
assert(typeof KeyUsage$ === "object");
assert(typeof KeyUsageFlags$ === "object");
assert(typeof KeyUsageProperty$ === "object");
assert(typeof KeyUsagePropertyFlags$ === "object");
assert(typeof ListConnectorsRequest$ === "object");
assert(typeof ListConnectorsResponse$ === "object");
assert(typeof ListDirectoryRegistrationsRequest$ === "object");
assert(typeof ListDirectoryRegistrationsResponse$ === "object");
assert(typeof ListServicePrincipalNamesRequest$ === "object");
assert(typeof ListServicePrincipalNamesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTemplateGroupAccessControlEntriesRequest$ === "object");
assert(typeof ListTemplateGroupAccessControlEntriesResponse$ === "object");
assert(typeof ListTemplatesRequest$ === "object");
assert(typeof ListTemplatesResponse$ === "object");
assert(typeof PrivateKeyAttributesV2$ === "object");
assert(typeof PrivateKeyAttributesV3$ === "object");
assert(typeof PrivateKeyAttributesV4$ === "object");
assert(typeof PrivateKeyFlagsV2$ === "object");
assert(typeof PrivateKeyFlagsV3$ === "object");
assert(typeof PrivateKeyFlagsV4$ === "object");
assert(typeof ServicePrincipalName$ === "object");
assert(typeof ServicePrincipalNameSummary$ === "object");
assert(typeof SubjectNameFlagsV2$ === "object");
assert(typeof SubjectNameFlagsV3$ === "object");
assert(typeof SubjectNameFlagsV4$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof Template$ === "object");
assert(typeof TemplateDefinition$ === "object");
assert(typeof TemplateRevision$ === "object");
assert(typeof TemplateSummary$ === "object");
assert(typeof TemplateV2$ === "object");
assert(typeof TemplateV3$ === "object");
assert(typeof TemplateV4$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateTemplateGroupAccessControlEntryRequest$ === "object");
assert(typeof UpdateTemplateRequest$ === "object");
assert(typeof ValidityPeriod$ === "object");
assert(typeof VpcInformation$ === "object");
// enums
assert(typeof AccessRight === "object");
assert(typeof ApplicationPolicyType === "object");
assert(typeof ClientCompatibilityV2 === "object");
assert(typeof ClientCompatibilityV3 === "object");
assert(typeof ClientCompatibilityV4 === "object");
assert(typeof ConnectorStatus === "object");
assert(typeof ConnectorStatusReason === "object");
assert(typeof DirectoryRegistrationStatus === "object");
assert(typeof DirectoryRegistrationStatusReason === "object");
assert(typeof HashAlgorithm === "object");
assert(typeof IpAddressType === "object");
assert(typeof KeySpec === "object");
assert(typeof KeyUsagePropertyType === "object");
assert(typeof PrivateKeyAlgorithm === "object");
assert(typeof ServicePrincipalNameStatus === "object");
assert(typeof ServicePrincipalNameStatusReason === "object");
assert(typeof TemplateStatus === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof ValidityPeriodType === "object");
// errors
assert(AccessDeniedException.prototype instanceof PcaConnectorAdServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof PcaConnectorAdServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof PcaConnectorAdServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PcaConnectorAdServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof PcaConnectorAdServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof PcaConnectorAdServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof PcaConnectorAdServiceException);
assert(typeof ValidationException$ === "object");
assert(PcaConnectorAdServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListConnectors === "function");
assert(typeof paginateListDirectoryRegistrations === "function");
assert(typeof paginateListServicePrincipalNames === "function");
assert(typeof paginateListTemplateGroupAccessControlEntries === "function");
assert(typeof paginateListTemplates === "function");
console.log(`PcaConnectorAd index test passed.`);
