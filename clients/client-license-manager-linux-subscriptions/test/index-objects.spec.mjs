import {
  DeregisterSubscriptionProviderCommand,
  GetRegisteredSubscriptionProviderCommand,
  GetServiceSettingsCommand,
  InternalServerException,
  LicenseManagerLinuxSubscriptions,
  LicenseManagerLinuxSubscriptionsClient,
  LicenseManagerLinuxSubscriptionsServiceException,
  LinuxSubscriptionsDiscovery,
  ListLinuxSubscriptionInstancesCommand,
  ListLinuxSubscriptionsCommand,
  ListRegisteredSubscriptionProvidersCommand,
  ListTagsForResourceCommand,
  Operator,
  OrganizationIntegration,
  RegisterSubscriptionProviderCommand,
  ResourceNotFoundException,
  Status,
  SubscriptionProviderSource,
  SubscriptionProviderStatus,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateServiceSettingsCommand,
  ValidationException,
  paginateListLinuxSubscriptionInstances,
  paginateListLinuxSubscriptions,
  paginateListRegisteredSubscriptionProviders,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LicenseManagerLinuxSubscriptionsClient === "function");
assert(typeof LicenseManagerLinuxSubscriptions === "function");
// commands
assert(typeof DeregisterSubscriptionProviderCommand === "function");
assert(typeof GetRegisteredSubscriptionProviderCommand === "function");
assert(typeof GetServiceSettingsCommand === "function");
assert(typeof ListLinuxSubscriptionInstancesCommand === "function");
assert(typeof ListLinuxSubscriptionsCommand === "function");
assert(typeof ListRegisteredSubscriptionProvidersCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RegisterSubscriptionProviderCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateServiceSettingsCommand === "function");
// enums
assert(typeof LinuxSubscriptionsDiscovery === "object");
assert(typeof Operator === "object");
assert(typeof OrganizationIntegration === "object");
assert(typeof Status === "object");
assert(typeof SubscriptionProviderSource === "object");
assert(typeof SubscriptionProviderStatus === "object");
// errors
assert(InternalServerException.prototype instanceof LicenseManagerLinuxSubscriptionsServiceException);
assert(ResourceNotFoundException.prototype instanceof LicenseManagerLinuxSubscriptionsServiceException);
assert(ThrottlingException.prototype instanceof LicenseManagerLinuxSubscriptionsServiceException);
assert(ValidationException.prototype instanceof LicenseManagerLinuxSubscriptionsServiceException);
assert(LicenseManagerLinuxSubscriptionsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListLinuxSubscriptionInstances === "function");
assert(typeof paginateListLinuxSubscriptions === "function");
assert(typeof paginateListRegisteredSubscriptionProviders === "function");
console.log(`LicenseManagerLinuxSubscriptions index test passed.`);
