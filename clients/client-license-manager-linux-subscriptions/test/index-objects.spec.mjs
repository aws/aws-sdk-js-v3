import {
  DeregisterSubscriptionProviderCommand,
  GetRegisteredSubscriptionProviderCommand,
  GetServiceSettingsCommand,
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
  Status,
  SubscriptionProviderSource,
  SubscriptionProviderStatus,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateServiceSettingsCommand,
  paginateListLinuxSubscriptionInstances,
  paginateListLinuxSubscriptions,
  paginateListRegisteredSubscriptionProviders,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LicenseManagerLinuxSubscriptionsClient === "function")
assert(typeof LicenseManagerLinuxSubscriptions === "function")
// commands
assert(typeof DeregisterSubscriptionProviderCommand === "function")
assert(typeof GetRegisteredSubscriptionProviderCommand === "function")
assert(typeof GetServiceSettingsCommand === "function")
assert(typeof ListLinuxSubscriptionInstancesCommand === "function")
assert(typeof ListLinuxSubscriptionsCommand === "function")
assert(typeof ListRegisteredSubscriptionProvidersCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof RegisterSubscriptionProviderCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateServiceSettingsCommand === "function")
// enums
assert(typeof LinuxSubscriptionsDiscovery === "object");
assert(typeof Operator === "object");
assert(typeof OrganizationIntegration === "object");
assert(typeof Status === "object");
assert(typeof SubscriptionProviderSource === "object");
assert(typeof SubscriptionProviderStatus === "object");
// errors
assert(LicenseManagerLinuxSubscriptionsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListLinuxSubscriptionInstances === "function")
assert(typeof paginateListLinuxSubscriptions === "function")
assert(typeof paginateListRegisteredSubscriptionProviders === "function")
console.log(`LicenseManagerLinuxSubscriptions index test passed.`);
