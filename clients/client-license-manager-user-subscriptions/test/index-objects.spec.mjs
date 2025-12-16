import {
  AccessDeniedException,
  AccessDeniedException$,
  ActiveDirectoryIdentityProvider$,
  ActiveDirectorySettings$,
  ActiveDirectoryType,
  AssociateUser$,
  AssociateUserCommand,
  AssociateUserRequest$,
  AssociateUserResponse$,
  ConflictException,
  ConflictException$,
  CreateLicenseServerEndpoint$,
  CreateLicenseServerEndpointCommand,
  CreateLicenseServerEndpointRequest$,
  CreateLicenseServerEndpointResponse$,
  CredentialsProvider$,
  DeleteLicenseServerEndpoint$,
  DeleteLicenseServerEndpointCommand,
  DeleteLicenseServerEndpointRequest$,
  DeleteLicenseServerEndpointResponse$,
  DeregisterIdentityProvider$,
  DeregisterIdentityProviderCommand,
  DeregisterIdentityProviderRequest$,
  DeregisterIdentityProviderResponse$,
  DisassociateUser$,
  DisassociateUserCommand,
  DisassociateUserRequest$,
  DisassociateUserResponse$,
  DomainNetworkSettings$,
  Filter$,
  IdentityProvider$,
  IdentityProviderSummary$,
  InstanceSummary$,
  InstanceUserSummary$,
  InternalServerException,
  InternalServerException$,
  LicenseManagerUserSubscriptions,
  LicenseManagerUserSubscriptionsClient,
  LicenseManagerUserSubscriptionsServiceException,
  LicenseServer$,
  LicenseServerEndpoint$,
  LicenseServerEndpointProvisioningStatus,
  LicenseServerHealthStatus,
  LicenseServerSettings$,
  ListIdentityProviders$,
  ListIdentityProvidersCommand,
  ListIdentityProvidersRequest$,
  ListIdentityProvidersResponse$,
  ListInstances$,
  ListInstancesCommand,
  ListInstancesRequest$,
  ListInstancesResponse$,
  ListLicenseServerEndpoints$,
  ListLicenseServerEndpointsCommand,
  ListLicenseServerEndpointsRequest$,
  ListLicenseServerEndpointsResponse$,
  ListProductSubscriptions$,
  ListProductSubscriptionsCommand,
  ListProductSubscriptionsRequest$,
  ListProductSubscriptionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListUserAssociations$,
  ListUserAssociationsCommand,
  ListUserAssociationsRequest$,
  ListUserAssociationsResponse$,
  ProductUserSummary$,
  RdsSalSettings$,
  RegisterIdentityProvider$,
  RegisterIdentityProviderCommand,
  RegisterIdentityProviderRequest$,
  RegisterIdentityProviderResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SecretsManagerCredentialsProvider$,
  ServerEndpoint$,
  ServerSettings$,
  ServerType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Settings$,
  StartProductSubscription$,
  StartProductSubscriptionCommand,
  StartProductSubscriptionRequest$,
  StartProductSubscriptionResponse$,
  StopProductSubscription$,
  StopProductSubscriptionCommand,
  StopProductSubscriptionRequest$,
  StopProductSubscriptionResponse$,
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
  UpdateIdentityProviderSettings$,
  UpdateIdentityProviderSettingsCommand,
  UpdateIdentityProviderSettingsRequest$,
  UpdateIdentityProviderSettingsResponse$,
  UpdateSettings$,
  ValidationException,
  ValidationException$,
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
assert(typeof AssociateUser$ === "object");
assert(typeof CreateLicenseServerEndpointCommand === "function");
assert(typeof CreateLicenseServerEndpoint$ === "object");
assert(typeof DeleteLicenseServerEndpointCommand === "function");
assert(typeof DeleteLicenseServerEndpoint$ === "object");
assert(typeof DeregisterIdentityProviderCommand === "function");
assert(typeof DeregisterIdentityProvider$ === "object");
assert(typeof DisassociateUserCommand === "function");
assert(typeof DisassociateUser$ === "object");
assert(typeof ListIdentityProvidersCommand === "function");
assert(typeof ListIdentityProviders$ === "object");
assert(typeof ListInstancesCommand === "function");
assert(typeof ListInstances$ === "object");
assert(typeof ListLicenseServerEndpointsCommand === "function");
assert(typeof ListLicenseServerEndpoints$ === "object");
assert(typeof ListProductSubscriptionsCommand === "function");
assert(typeof ListProductSubscriptions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListUserAssociationsCommand === "function");
assert(typeof ListUserAssociations$ === "object");
assert(typeof RegisterIdentityProviderCommand === "function");
assert(typeof RegisterIdentityProvider$ === "object");
assert(typeof StartProductSubscriptionCommand === "function");
assert(typeof StartProductSubscription$ === "object");
assert(typeof StopProductSubscriptionCommand === "function");
assert(typeof StopProductSubscription$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateIdentityProviderSettingsCommand === "function");
assert(typeof UpdateIdentityProviderSettings$ === "object");
// structural schemas
assert(typeof ActiveDirectoryIdentityProvider$ === "object");
assert(typeof ActiveDirectorySettings$ === "object");
assert(typeof AssociateUserRequest$ === "object");
assert(typeof AssociateUserResponse$ === "object");
assert(typeof CreateLicenseServerEndpointRequest$ === "object");
assert(typeof CreateLicenseServerEndpointResponse$ === "object");
assert(typeof CredentialsProvider$ === "object");
assert(typeof DeleteLicenseServerEndpointRequest$ === "object");
assert(typeof DeleteLicenseServerEndpointResponse$ === "object");
assert(typeof DeregisterIdentityProviderRequest$ === "object");
assert(typeof DeregisterIdentityProviderResponse$ === "object");
assert(typeof DisassociateUserRequest$ === "object");
assert(typeof DisassociateUserResponse$ === "object");
assert(typeof DomainNetworkSettings$ === "object");
assert(typeof Filter$ === "object");
assert(typeof IdentityProvider$ === "object");
assert(typeof IdentityProviderSummary$ === "object");
assert(typeof InstanceSummary$ === "object");
assert(typeof InstanceUserSummary$ === "object");
assert(typeof LicenseServer$ === "object");
assert(typeof LicenseServerEndpoint$ === "object");
assert(typeof LicenseServerSettings$ === "object");
assert(typeof ListIdentityProvidersRequest$ === "object");
assert(typeof ListIdentityProvidersResponse$ === "object");
assert(typeof ListInstancesRequest$ === "object");
assert(typeof ListInstancesResponse$ === "object");
assert(typeof ListLicenseServerEndpointsRequest$ === "object");
assert(typeof ListLicenseServerEndpointsResponse$ === "object");
assert(typeof ListProductSubscriptionsRequest$ === "object");
assert(typeof ListProductSubscriptionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListUserAssociationsRequest$ === "object");
assert(typeof ListUserAssociationsResponse$ === "object");
assert(typeof ProductUserSummary$ === "object");
assert(typeof RdsSalSettings$ === "object");
assert(typeof RegisterIdentityProviderRequest$ === "object");
assert(typeof RegisterIdentityProviderResponse$ === "object");
assert(typeof SecretsManagerCredentialsProvider$ === "object");
assert(typeof ServerEndpoint$ === "object");
assert(typeof ServerSettings$ === "object");
assert(typeof Settings$ === "object");
assert(typeof StartProductSubscriptionRequest$ === "object");
assert(typeof StartProductSubscriptionResponse$ === "object");
assert(typeof StopProductSubscriptionRequest$ === "object");
assert(typeof StopProductSubscriptionResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateIdentityProviderSettingsRequest$ === "object");
assert(typeof UpdateIdentityProviderSettingsResponse$ === "object");
assert(typeof UpdateSettings$ === "object");
// enums
assert(typeof ActiveDirectoryType === "object");
assert(typeof LicenseServerEndpointProvisioningStatus === "object");
assert(typeof LicenseServerHealthStatus === "object");
assert(typeof ServerType === "object");
// errors
assert(AccessDeniedException.prototype instanceof LicenseManagerUserSubscriptionsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof LicenseManagerUserSubscriptionsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof LicenseManagerUserSubscriptionsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof LicenseManagerUserSubscriptionsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof LicenseManagerUserSubscriptionsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof LicenseManagerUserSubscriptionsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof LicenseManagerUserSubscriptionsServiceException);
assert(typeof ValidationException$ === "object");
assert(LicenseManagerUserSubscriptionsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListIdentityProviders === "function");
assert(typeof paginateListInstances === "function");
assert(typeof paginateListLicenseServerEndpoints === "function");
assert(typeof paginateListProductSubscriptions === "function");
assert(typeof paginateListUserAssociations === "function");
console.log(`LicenseManagerUserSubscriptions index test passed.`);
