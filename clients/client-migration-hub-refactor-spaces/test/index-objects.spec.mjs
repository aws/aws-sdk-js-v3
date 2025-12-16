import {
  AccessDeniedException,
  AccessDeniedException$,
  ApiGatewayEndpointType,
  ApiGatewayProxyConfig$,
  ApiGatewayProxyInput$,
  ApiGatewayProxySummary$,
  ApplicationState,
  ApplicationSummary$,
  ConflictException,
  ConflictException$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResponse$,
  CreateEnvironment$,
  CreateEnvironmentCommand,
  CreateEnvironmentRequest$,
  CreateEnvironmentResponse$,
  CreateRoute$,
  CreateRouteCommand,
  CreateRouteRequest$,
  CreateRouteResponse$,
  CreateService$,
  CreateServiceCommand,
  CreateServiceRequest$,
  CreateServiceResponse$,
  DefaultRouteInput$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationRequest$,
  DeleteApplicationResponse$,
  DeleteEnvironment$,
  DeleteEnvironmentCommand,
  DeleteEnvironmentRequest$,
  DeleteEnvironmentResponse$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DeleteRoute$,
  DeleteRouteCommand,
  DeleteRouteRequest$,
  DeleteRouteResponse$,
  DeleteService$,
  DeleteServiceCommand,
  DeleteServiceRequest$,
  DeleteServiceResponse$,
  EnvironmentState,
  EnvironmentSummary$,
  EnvironmentVpc$,
  ErrorCode,
  ErrorResourceType,
  ErrorResponse$,
  GetApplication$,
  GetApplicationCommand,
  GetApplicationRequest$,
  GetApplicationResponse$,
  GetEnvironment$,
  GetEnvironmentCommand,
  GetEnvironmentRequest$,
  GetEnvironmentResponse$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  GetRoute$,
  GetRouteCommand,
  GetRouteRequest$,
  GetRouteResponse$,
  GetService$,
  GetServiceCommand,
  GetServiceRequest$,
  GetServiceResponse$,
  HttpMethod,
  InternalServerException,
  InternalServerException$,
  InvalidResourcePolicyException,
  InvalidResourcePolicyException$,
  LambdaEndpointConfig$,
  LambdaEndpointInput$,
  LambdaEndpointSummary$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsRequest$,
  ListApplicationsResponse$,
  ListEnvironmentVpcs$,
  ListEnvironmentVpcsCommand,
  ListEnvironmentVpcsRequest$,
  ListEnvironmentVpcsResponse$,
  ListEnvironments$,
  ListEnvironmentsCommand,
  ListEnvironmentsRequest$,
  ListEnvironmentsResponse$,
  ListRoutes$,
  ListRoutesCommand,
  ListRoutesRequest$,
  ListRoutesResponse$,
  ListServices$,
  ListServicesCommand,
  ListServicesRequest$,
  ListServicesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MigrationHubRefactorSpaces,
  MigrationHubRefactorSpacesClient,
  MigrationHubRefactorSpacesServiceException,
  NetworkFabricType,
  ProxyType,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RouteActivationState,
  RouteState,
  RouteSummary$,
  RouteType,
  ServiceEndpointType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceState,
  ServiceSummary$,
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
  UpdateRoute$,
  UpdateRouteCommand,
  UpdateRouteRequest$,
  UpdateRouteResponse$,
  UriPathRouteInput$,
  UrlEndpointConfig$,
  UrlEndpointInput$,
  UrlEndpointSummary$,
  ValidationException,
  ValidationException$,
  paginateListApplications,
  paginateListEnvironmentVpcs,
  paginateListEnvironments,
  paginateListRoutes,
  paginateListServices,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MigrationHubRefactorSpacesClient === "function");
assert(typeof MigrationHubRefactorSpaces === "function");
// commands
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreateEnvironment$ === "object");
assert(typeof CreateRouteCommand === "function");
assert(typeof CreateRoute$ === "object");
assert(typeof CreateServiceCommand === "function");
assert(typeof CreateService$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteEnvironment$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteRouteCommand === "function");
assert(typeof DeleteRoute$ === "object");
assert(typeof DeleteServiceCommand === "function");
assert(typeof DeleteService$ === "object");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplication$ === "object");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetEnvironment$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof GetRouteCommand === "function");
assert(typeof GetRoute$ === "object");
assert(typeof GetServiceCommand === "function");
assert(typeof GetService$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListEnvironments$ === "object");
assert(typeof ListEnvironmentVpcsCommand === "function");
assert(typeof ListEnvironmentVpcs$ === "object");
assert(typeof ListRoutesCommand === "function");
assert(typeof ListRoutes$ === "object");
assert(typeof ListServicesCommand === "function");
assert(typeof ListServices$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateRouteCommand === "function");
assert(typeof UpdateRoute$ === "object");
// structural schemas
assert(typeof ApiGatewayProxyConfig$ === "object");
assert(typeof ApiGatewayProxyInput$ === "object");
assert(typeof ApiGatewayProxySummary$ === "object");
assert(typeof ApplicationSummary$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResponse$ === "object");
assert(typeof CreateEnvironmentRequest$ === "object");
assert(typeof CreateEnvironmentResponse$ === "object");
assert(typeof CreateRouteRequest$ === "object");
assert(typeof CreateRouteResponse$ === "object");
assert(typeof CreateServiceRequest$ === "object");
assert(typeof CreateServiceResponse$ === "object");
assert(typeof DefaultRouteInput$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteApplicationResponse$ === "object");
assert(typeof DeleteEnvironmentRequest$ === "object");
assert(typeof DeleteEnvironmentResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DeleteRouteRequest$ === "object");
assert(typeof DeleteRouteResponse$ === "object");
assert(typeof DeleteServiceRequest$ === "object");
assert(typeof DeleteServiceResponse$ === "object");
assert(typeof EnvironmentSummary$ === "object");
assert(typeof EnvironmentVpc$ === "object");
assert(typeof ErrorResponse$ === "object");
assert(typeof GetApplicationRequest$ === "object");
assert(typeof GetApplicationResponse$ === "object");
assert(typeof GetEnvironmentRequest$ === "object");
assert(typeof GetEnvironmentResponse$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof GetRouteRequest$ === "object");
assert(typeof GetRouteResponse$ === "object");
assert(typeof GetServiceRequest$ === "object");
assert(typeof GetServiceResponse$ === "object");
assert(typeof LambdaEndpointConfig$ === "object");
assert(typeof LambdaEndpointInput$ === "object");
assert(typeof LambdaEndpointSummary$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListApplicationsResponse$ === "object");
assert(typeof ListEnvironmentsRequest$ === "object");
assert(typeof ListEnvironmentsResponse$ === "object");
assert(typeof ListEnvironmentVpcsRequest$ === "object");
assert(typeof ListEnvironmentVpcsResponse$ === "object");
assert(typeof ListRoutesRequest$ === "object");
assert(typeof ListRoutesResponse$ === "object");
assert(typeof ListServicesRequest$ === "object");
assert(typeof ListServicesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof RouteSummary$ === "object");
assert(typeof ServiceSummary$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateRouteRequest$ === "object");
assert(typeof UpdateRouteResponse$ === "object");
assert(typeof UriPathRouteInput$ === "object");
assert(typeof UrlEndpointConfig$ === "object");
assert(typeof UrlEndpointInput$ === "object");
assert(typeof UrlEndpointSummary$ === "object");
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
assert(AccessDeniedException.prototype instanceof MigrationHubRefactorSpacesServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof MigrationHubRefactorSpacesServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof MigrationHubRefactorSpacesServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidResourcePolicyException.prototype instanceof MigrationHubRefactorSpacesServiceException);
assert(typeof InvalidResourcePolicyException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MigrationHubRefactorSpacesServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof MigrationHubRefactorSpacesServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof MigrationHubRefactorSpacesServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof MigrationHubRefactorSpacesServiceException);
assert(typeof ValidationException$ === "object");
assert(MigrationHubRefactorSpacesServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApplications === "function");
assert(typeof paginateListEnvironmentVpcs === "function");
assert(typeof paginateListEnvironments === "function");
assert(typeof paginateListRoutes === "function");
assert(typeof paginateListServices === "function");
console.log(`MigrationHubRefactorSpaces index test passed.`);
