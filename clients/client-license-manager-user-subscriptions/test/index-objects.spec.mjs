import {
  AccessDeniedException,
  ActiveDirectoryType,
  AssociateUserCommand,
  ConflictException,
  CreateLicenseServerEndpointCommand,
  DeleteLicenseServerEndpointCommand,
  DeregisterIdentityProviderCommand,
  DisassociateUserCommand,
  InternalServerException,
  LicenseManagerUserSubscriptions,
  LicenseManagerUserSubscriptionsClient,
  LicenseManagerUserSubscriptionsServiceException,
  LicenseServerEndpointProvisioningStatus,
  LicenseServerHealthStatus,
  ListIdentityProvidersCommand,
  ListInstancesCommand,
  ListLicenseServerEndpointsCommand,
  ListProductSubscriptionsCommand,
  ListTagsForResourceCommand,
  ListUserAssociationsCommand,
  RegisterIdentityProviderCommand,
  ResourceNotFoundException,
  ServerType,
  ServiceQuotaExceededException,
  StartProductSubscriptionCommand,
  StopProductSubscriptionCommand,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateIdentityProviderSettingsCommand,
  ValidationException,
  paginateListIdentityProviders,
  paginateListInstances,
  paginateListLicenseServerEndpoints,
  paginateListProductSubscriptions,
  paginateListUserAssociations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LicenseManagerUserSubscriptionsClient === "function");
assert(typeof LicenseManagerUserSubscriptions === "function");
// commands
assert(typeof AssociateUserCommand === "function");
assert(typeof CreateLicenseServerEndpointCommand === "function");
assert(typeof DeleteLicenseServerEndpointCommand === "function");
assert(typeof DeregisterIdentityProviderCommand === "function");
assert(typeof DisassociateUserCommand === "function");
assert(typeof ListIdentityProvidersCommand === "function");
assert(typeof ListInstancesCommand === "function");
assert(typeof ListLicenseServerEndpointsCommand === "function");
assert(typeof ListProductSubscriptionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListUserAssociationsCommand === "function");
assert(typeof RegisterIdentityProviderCommand === "function");
assert(typeof StartProductSubscriptionCommand === "function");
assert(typeof StopProductSubscriptionCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateIdentityProviderSettingsCommand === "function");
// enums
assert(typeof ActiveDirectoryType === "object");
assert(typeof LicenseServerEndpointProvisioningStatus === "object");
assert(typeof LicenseServerHealthStatus === "object");
assert(typeof ServerType === "object");
// errors
assert(AccessDeniedException.prototype instanceof LicenseManagerUserSubscriptionsServiceException);
assert(ConflictException.prototype instanceof LicenseManagerUserSubscriptionsServiceException);
assert(InternalServerException.prototype instanceof LicenseManagerUserSubscriptionsServiceException);
assert(ResourceNotFoundException.prototype instanceof LicenseManagerUserSubscriptionsServiceException);
assert(ServiceQuotaExceededException.prototype instanceof LicenseManagerUserSubscriptionsServiceException);
assert(ThrottlingException.prototype instanceof LicenseManagerUserSubscriptionsServiceException);
assert(ValidationException.prototype instanceof LicenseManagerUserSubscriptionsServiceException);
assert(LicenseManagerUserSubscriptionsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListIdentityProviders === "function");
assert(typeof paginateListInstances === "function");
assert(typeof paginateListLicenseServerEndpoints === "function");
assert(typeof paginateListProductSubscriptions === "function");
assert(typeof paginateListUserAssociations === "function");
console.log(`LicenseManagerUserSubscriptions index test passed.`);
