import {
  ApiGatewayEndpointType,
  ApplicationState,
  CreateApplicationCommand,
  CreateEnvironmentCommand,
  CreateRouteCommand,
  CreateServiceCommand,
  DeleteApplicationCommand,
  DeleteEnvironmentCommand,
  DeleteResourcePolicyCommand,
  DeleteRouteCommand,
  DeleteServiceCommand,
  EnvironmentState,
  ErrorCode,
  ErrorResourceType,
  GetApplicationCommand,
  GetEnvironmentCommand,
  GetResourcePolicyCommand,
  GetRouteCommand,
  GetServiceCommand,
  HttpMethod,
  ListApplicationsCommand,
  ListEnvironmentVpcsCommand,
  ListEnvironmentsCommand,
  ListRoutesCommand,
  ListServicesCommand,
  ListTagsForResourceCommand,
  MigrationHubRefactorSpaces,
  MigrationHubRefactorSpacesClient,
  MigrationHubRefactorSpacesServiceException,
  NetworkFabricType,
  ProxyType,
  PutResourcePolicyCommand,
  RouteActivationState,
  RouteState,
  RouteType,
  ServiceEndpointType,
  ServiceState,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateRouteCommand,
  paginateListApplications,
  paginateListEnvironmentVpcs,
  paginateListEnvironments,
  paginateListRoutes,
  paginateListServices,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MigrationHubRefactorSpacesClient === "function")
assert(typeof MigrationHubRefactorSpaces === "function")
// commands
assert(typeof CreateApplicationCommand === "function")
assert(typeof CreateEnvironmentCommand === "function")
assert(typeof CreateRouteCommand === "function")
assert(typeof CreateServiceCommand === "function")
assert(typeof DeleteApplicationCommand === "function")
assert(typeof DeleteEnvironmentCommand === "function")
assert(typeof DeleteResourcePolicyCommand === "function")
assert(typeof DeleteRouteCommand === "function")
assert(typeof DeleteServiceCommand === "function")
assert(typeof GetApplicationCommand === "function")
assert(typeof GetEnvironmentCommand === "function")
assert(typeof GetResourcePolicyCommand === "function")
assert(typeof GetRouteCommand === "function")
assert(typeof GetServiceCommand === "function")
assert(typeof ListApplicationsCommand === "function")
assert(typeof ListEnvironmentsCommand === "function")
assert(typeof ListEnvironmentVpcsCommand === "function")
assert(typeof ListRoutesCommand === "function")
assert(typeof ListServicesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PutResourcePolicyCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateRouteCommand === "function")
// enums
assert(typeof ApiGatewayEndpointType === "object");
assert(typeof ApplicationState === "object");
assert(typeof EnvironmentState === "object");
assert(typeof ErrorCode === "object");
assert(typeof ErrorResourceType === "object");
assert(typeof HttpMethod === "object");
assert(typeof NetworkFabricType === "object");
assert(typeof ProxyType === "object");
assert(typeof RouteActivationState === "object");
assert(typeof RouteState === "object");
assert(typeof RouteType === "object");
assert(typeof ServiceEndpointType === "object");
assert(typeof ServiceState === "object");
// errors
assert(MigrationHubRefactorSpacesServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListApplications === "function")
assert(typeof paginateListEnvironmentVpcs === "function")
assert(typeof paginateListEnvironments === "function")
assert(typeof paginateListRoutes === "function")
assert(typeof paginateListServices === "function")
console.log(`MigrationHubRefactorSpaces index test passed.`);
