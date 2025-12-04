import {
  AccessRight,
  ApplicationPolicyType,
  ClientCompatibilityV2,
  ClientCompatibilityV3,
  ClientCompatibilityV4,
  ConnectorStatus,
  ConnectorStatusReason,
  CreateConnectorCommand,
  CreateDirectoryRegistrationCommand,
  CreateServicePrincipalNameCommand,
  CreateTemplateCommand,
  CreateTemplateGroupAccessControlEntryCommand,
  DeleteConnectorCommand,
  DeleteDirectoryRegistrationCommand,
  DeleteServicePrincipalNameCommand,
  DeleteTemplateCommand,
  DeleteTemplateGroupAccessControlEntryCommand,
  DirectoryRegistrationStatus,
  DirectoryRegistrationStatusReason,
  GetConnectorCommand,
  GetDirectoryRegistrationCommand,
  GetServicePrincipalNameCommand,
  GetTemplateCommand,
  GetTemplateGroupAccessControlEntryCommand,
  HashAlgorithm,
  IpAddressType,
  KeySpec,
  KeyUsagePropertyType,
  ListConnectorsCommand,
  ListDirectoryRegistrationsCommand,
  ListServicePrincipalNamesCommand,
  ListTagsForResourceCommand,
  ListTemplateGroupAccessControlEntriesCommand,
  ListTemplatesCommand,
  PcaConnectorAd,
  PcaConnectorAdClient,
  PcaConnectorAdServiceException,
  PrivateKeyAlgorithm,
  ServicePrincipalNameStatus,
  ServicePrincipalNameStatusReason,
  TagResourceCommand,
  TemplateStatus,
  UntagResourceCommand,
  UpdateTemplateCommand,
  UpdateTemplateGroupAccessControlEntryCommand,
  ValidityPeriodType,
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
assert(typeof CreateDirectoryRegistrationCommand === "function");
assert(typeof CreateServicePrincipalNameCommand === "function");
assert(typeof CreateTemplateCommand === "function");
assert(typeof CreateTemplateGroupAccessControlEntryCommand === "function");
assert(typeof DeleteConnectorCommand === "function");
assert(typeof DeleteDirectoryRegistrationCommand === "function");
assert(typeof DeleteServicePrincipalNameCommand === "function");
assert(typeof DeleteTemplateCommand === "function");
assert(typeof DeleteTemplateGroupAccessControlEntryCommand === "function");
assert(typeof GetConnectorCommand === "function");
assert(typeof GetDirectoryRegistrationCommand === "function");
assert(typeof GetServicePrincipalNameCommand === "function");
assert(typeof GetTemplateCommand === "function");
assert(typeof GetTemplateGroupAccessControlEntryCommand === "function");
assert(typeof ListConnectorsCommand === "function");
assert(typeof ListDirectoryRegistrationsCommand === "function");
assert(typeof ListServicePrincipalNamesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTemplateGroupAccessControlEntriesCommand === "function");
assert(typeof ListTemplatesCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateTemplateCommand === "function");
assert(typeof UpdateTemplateGroupAccessControlEntryCommand === "function");
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
assert(typeof ValidityPeriodType === "object");
// errors
assert(PcaConnectorAdServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListConnectors === "function");
assert(typeof paginateListDirectoryRegistrations === "function");
assert(typeof paginateListServicePrincipalNames === "function");
assert(typeof paginateListTemplateGroupAccessControlEntries === "function");
assert(typeof paginateListTemplates === "function");
console.log(`PcaConnectorAd index test passed.`);
