import {
  DeregisterSubscriptionProvider$,
  DeregisterSubscriptionProviderCommand,
  DeregisterSubscriptionProviderRequest$,
  DeregisterSubscriptionProviderResponse$,
  Filter$,
  GetRegisteredSubscriptionProvider$,
  GetRegisteredSubscriptionProviderCommand,
  GetRegisteredSubscriptionProviderRequest$,
  GetRegisteredSubscriptionProviderResponse$,
  GetServiceSettings$,
  GetServiceSettingsCommand,
  GetServiceSettingsRequest$,
  GetServiceSettingsResponse$,
  Instance$,
  InternalServerException,
  InternalServerException$,
  LicenseManagerLinuxSubscriptions,
  LicenseManagerLinuxSubscriptionsClient,
  LicenseManagerLinuxSubscriptionsServiceException,
  LinuxSubscriptionsDiscovery,
  LinuxSubscriptionsDiscoverySettings$,
  ListLinuxSubscriptionInstances$,
  ListLinuxSubscriptionInstancesCommand,
  ListLinuxSubscriptionInstancesRequest$,
  ListLinuxSubscriptionInstancesResponse$,
  ListLinuxSubscriptions$,
  ListLinuxSubscriptionsCommand,
  ListLinuxSubscriptionsRequest$,
  ListLinuxSubscriptionsResponse$,
  ListRegisteredSubscriptionProviders$,
  ListRegisteredSubscriptionProvidersCommand,
  ListRegisteredSubscriptionProvidersRequest$,
  ListRegisteredSubscriptionProvidersResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  Operator,
  OrganizationIntegration,
  RegisterSubscriptionProvider$,
  RegisterSubscriptionProviderCommand,
  RegisterSubscriptionProviderRequest$,
  RegisterSubscriptionProviderResponse$,
  RegisteredSubscriptionProvider$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Status,
  Subscription$,
  SubscriptionProviderSource,
  SubscriptionProviderStatus,
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
  UpdateServiceSettings$,
  UpdateServiceSettingsCommand,
  UpdateServiceSettingsRequest$,
  UpdateServiceSettingsResponse$,
  ValidationException,
  ValidationException$,
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
assert(typeof DeregisterSubscriptionProvider$ === "object");
assert(typeof GetRegisteredSubscriptionProviderCommand === "function");
assert(typeof GetRegisteredSubscriptionProvider$ === "object");
assert(typeof GetServiceSettingsCommand === "function");
assert(typeof GetServiceSettings$ === "object");
assert(typeof ListLinuxSubscriptionInstancesCommand === "function");
assert(typeof ListLinuxSubscriptionInstances$ === "object");
assert(typeof ListLinuxSubscriptionsCommand === "function");
assert(typeof ListLinuxSubscriptions$ === "object");
assert(typeof ListRegisteredSubscriptionProvidersCommand === "function");
assert(typeof ListRegisteredSubscriptionProviders$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RegisterSubscriptionProviderCommand === "function");
assert(typeof RegisterSubscriptionProvider$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateServiceSettingsCommand === "function");
assert(typeof UpdateServiceSettings$ === "object");
// structural schemas
assert(typeof DeregisterSubscriptionProviderRequest$ === "object");
assert(typeof DeregisterSubscriptionProviderResponse$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetRegisteredSubscriptionProviderRequest$ === "object");
assert(typeof GetRegisteredSubscriptionProviderResponse$ === "object");
assert(typeof GetServiceSettingsRequest$ === "object");
assert(typeof GetServiceSettingsResponse$ === "object");
assert(typeof Instance$ === "object");
assert(typeof LinuxSubscriptionsDiscoverySettings$ === "object");
assert(typeof ListLinuxSubscriptionInstancesRequest$ === "object");
assert(typeof ListLinuxSubscriptionInstancesResponse$ === "object");
assert(typeof ListLinuxSubscriptionsRequest$ === "object");
assert(typeof ListLinuxSubscriptionsResponse$ === "object");
assert(typeof ListRegisteredSubscriptionProvidersRequest$ === "object");
assert(typeof ListRegisteredSubscriptionProvidersResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof RegisteredSubscriptionProvider$ === "object");
assert(typeof RegisterSubscriptionProviderRequest$ === "object");
assert(typeof RegisterSubscriptionProviderResponse$ === "object");
assert(typeof Subscription$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateServiceSettingsRequest$ === "object");
assert(typeof UpdateServiceSettingsResponse$ === "object");
// enums
assert(typeof LinuxSubscriptionsDiscovery === "object");
assert(typeof Operator === "object");
assert(typeof OrganizationIntegration === "object");
assert(typeof Status === "object");
assert(typeof SubscriptionProviderSource === "object");
assert(typeof SubscriptionProviderStatus === "object");
// errors
assert(InternalServerException.prototype instanceof LicenseManagerLinuxSubscriptionsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof LicenseManagerLinuxSubscriptionsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof LicenseManagerLinuxSubscriptionsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof LicenseManagerLinuxSubscriptionsServiceException);
assert(typeof ValidationException$ === "object");
assert(LicenseManagerLinuxSubscriptionsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListLinuxSubscriptionInstances === "function");
assert(typeof paginateListLinuxSubscriptions === "function");
assert(typeof paginateListRegisteredSubscriptionProviders === "function");
console.log(`LicenseManagerLinuxSubscriptions index test passed.`);
