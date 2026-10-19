import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountQuotas$,
  AccountUsage$,
  ApplicationLogLevel,
  AuthType,
  AutoDeploymentMode,
  BuildConfig$,
  CodeConfig$,
  ConflictException,
  ConflictException$,
  CreateWebFunction$,
  CreateWebFunctionCommand,
  CreateWebFunctionEndpoint$,
  CreateWebFunctionEndpointCommand,
  CreateWebFunctionEndpointRequest$,
  CreateWebFunctionEndpointResponse$,
  CreateWebFunctionRequest$,
  CreateWebFunctionResponse$,
  CreateWebFunctionRevision$,
  CreateWebFunctionRevisionCommand,
  CreateWebFunctionRevisionRequest$,
  CreateWebFunctionRevisionResponse$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteWebFunction$,
  DeleteWebFunctionCommand,
  DeleteWebFunctionEndpoint$,
  DeleteWebFunctionEndpointCommand,
  DeleteWebFunctionEndpointRequest$,
  DeleteWebFunctionRequest$,
  DeleteWebFunctionRevision$,
  DeleteWebFunctionRevisionCommand,
  DeleteWebFunctionRevisionRequest$,
  EndpointConfig$,
  EndpointState,
  EndpointType,
  EndpointUpdateStatus,
  Filter$,
  FunctionEndpointSummary$,
  FunctionRevisionSummary$,
  FunctionState,
  FunctionSummary$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  GetWebAccountSettings$,
  GetWebAccountSettingsCommand,
  GetWebAccountSettingsRequest$,
  GetWebAccountSettingsResponse$,
  GetWebFunction$,
  GetWebFunctionCommand,
  GetWebFunctionEndpoint$,
  GetWebFunctionEndpointCommand,
  GetWebFunctionEndpointRequest$,
  GetWebFunctionEndpointResponse$,
  GetWebFunctionRequest$,
  GetWebFunctionResponse$,
  GetWebFunctionRevision$,
  GetWebFunctionRevisionCommand,
  GetWebFunctionRevisionRequest$,
  GetWebFunctionRevisionResponse$,
  InternalServerException,
  InternalServerException$,
  LambdaWeb,
  LambdaWebClient,
  LambdaWebServiceException,
  ListTags$,
  ListTagsCommand,
  ListTagsRequest$,
  ListTagsResponse$,
  ListWebFunctionEndpoints$,
  ListWebFunctionEndpointsCommand,
  ListWebFunctionEndpointsRequest$,
  ListWebFunctionEndpointsResponse$,
  ListWebFunctionRevisions$,
  ListWebFunctionRevisionsCommand,
  ListWebFunctionRevisionsRequest$,
  ListWebFunctionRevisionsResponse$,
  ListWebFunctions$,
  ListWebFunctionsCommand,
  ListWebFunctionsRequest$,
  ListWebFunctionsResponse$,
  LoggingConfig$,
  paginateListWebFunctionEndpoints,
  paginateListWebFunctionRevisions,
  paginateListWebFunctions,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  RegionalEndpoint$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RevisionConfig$,
  RevisionError$,
  RevisionState,
  RevisionWeight$,
  RuntimeConfig$,
  S3Object$,
  ScalingConfig$,
  ServiceConfig$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SystemLogLevel,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TelemetryConfig$,
  ThrottleConfig$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateWebFunctionEndpoint$,
  UpdateWebFunctionEndpointCommand,
  UpdateWebFunctionEndpointRequest$,
  UpdateWebFunctionEndpointResponse$,
  ValidationException,
  ValidationException$,
  waitForWebFunctionActive,
  waitForWebFunctionDeleted,
  waitForWebFunctionEndpointActive,
  waitForWebFunctionEndpointDeleted,
  waitForWebFunctionEndpointUpdated,
  waitForWebFunctionRevisionActive,
  waitUntilWebFunctionActive,
  waitUntilWebFunctionDeleted,
  waitUntilWebFunctionEndpointActive,
  waitUntilWebFunctionEndpointDeleted,
  waitUntilWebFunctionEndpointUpdated,
  waitUntilWebFunctionRevisionActive,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LambdaWebClient === "function");
assert(typeof LambdaWeb === "function");
// commands
assert(typeof CreateWebFunctionCommand === "function");
assert(typeof CreateWebFunction$ === "object");
assert(typeof CreateWebFunctionEndpointCommand === "function");
assert(typeof CreateWebFunctionEndpoint$ === "object");
assert(typeof CreateWebFunctionRevisionCommand === "function");
assert(typeof CreateWebFunctionRevision$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteWebFunctionCommand === "function");
assert(typeof DeleteWebFunction$ === "object");
assert(typeof DeleteWebFunctionEndpointCommand === "function");
assert(typeof DeleteWebFunctionEndpoint$ === "object");
assert(typeof DeleteWebFunctionRevisionCommand === "function");
assert(typeof DeleteWebFunctionRevision$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof GetWebAccountSettingsCommand === "function");
assert(typeof GetWebAccountSettings$ === "object");
assert(typeof GetWebFunctionCommand === "function");
assert(typeof GetWebFunction$ === "object");
assert(typeof GetWebFunctionEndpointCommand === "function");
assert(typeof GetWebFunctionEndpoint$ === "object");
assert(typeof GetWebFunctionRevisionCommand === "function");
assert(typeof GetWebFunctionRevision$ === "object");
assert(typeof ListTagsCommand === "function");
assert(typeof ListTags$ === "object");
assert(typeof ListWebFunctionEndpointsCommand === "function");
assert(typeof ListWebFunctionEndpoints$ === "object");
assert(typeof ListWebFunctionRevisionsCommand === "function");
assert(typeof ListWebFunctionRevisions$ === "object");
assert(typeof ListWebFunctionsCommand === "function");
assert(typeof ListWebFunctions$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateWebFunctionEndpointCommand === "function");
assert(typeof UpdateWebFunctionEndpoint$ === "object");
// structural schemas
assert(typeof AccountQuotas$ === "object");
assert(typeof AccountUsage$ === "object");
assert(typeof BuildConfig$ === "object");
assert(typeof CodeConfig$ === "object");
assert(typeof CreateWebFunctionEndpointRequest$ === "object");
assert(typeof CreateWebFunctionEndpointResponse$ === "object");
assert(typeof CreateWebFunctionRequest$ === "object");
assert(typeof CreateWebFunctionResponse$ === "object");
assert(typeof CreateWebFunctionRevisionRequest$ === "object");
assert(typeof CreateWebFunctionRevisionResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteWebFunctionEndpointRequest$ === "object");
assert(typeof DeleteWebFunctionRequest$ === "object");
assert(typeof DeleteWebFunctionRevisionRequest$ === "object");
assert(typeof EndpointConfig$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FunctionEndpointSummary$ === "object");
assert(typeof FunctionRevisionSummary$ === "object");
assert(typeof FunctionSummary$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof GetWebAccountSettingsRequest$ === "object");
assert(typeof GetWebAccountSettingsResponse$ === "object");
assert(typeof GetWebFunctionEndpointRequest$ === "object");
assert(typeof GetWebFunctionEndpointResponse$ === "object");
assert(typeof GetWebFunctionRequest$ === "object");
assert(typeof GetWebFunctionResponse$ === "object");
assert(typeof GetWebFunctionRevisionRequest$ === "object");
assert(typeof GetWebFunctionRevisionResponse$ === "object");
assert(typeof ListTagsRequest$ === "object");
assert(typeof ListTagsResponse$ === "object");
assert(typeof ListWebFunctionEndpointsRequest$ === "object");
assert(typeof ListWebFunctionEndpointsResponse$ === "object");
assert(typeof ListWebFunctionRevisionsRequest$ === "object");
assert(typeof ListWebFunctionRevisionsResponse$ === "object");
assert(typeof ListWebFunctionsRequest$ === "object");
assert(typeof ListWebFunctionsResponse$ === "object");
assert(typeof LoggingConfig$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof RegionalEndpoint$ === "object");
assert(typeof RevisionConfig$ === "object");
assert(typeof RevisionError$ === "object");
assert(typeof RevisionWeight$ === "object");
assert(typeof RuntimeConfig$ === "object");
assert(typeof S3Object$ === "object");
assert(typeof ScalingConfig$ === "object");
assert(typeof ServiceConfig$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TelemetryConfig$ === "object");
assert(typeof ThrottleConfig$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateWebFunctionEndpointRequest$ === "object");
assert(typeof UpdateWebFunctionEndpointResponse$ === "object");
// enums
assert(typeof ApplicationLogLevel === "object");
assert(typeof AuthType === "object");
assert(typeof AutoDeploymentMode === "object");
assert(typeof EndpointState === "object");
assert(typeof EndpointType === "object");
assert(typeof EndpointUpdateStatus === "object");
assert(typeof FunctionState === "object");
assert(typeof RevisionState === "object");
assert(typeof SystemLogLevel === "object");
// errors
assert(AccessDeniedException.prototype instanceof LambdaWebServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof LambdaWebServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof LambdaWebServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof LambdaWebServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof LambdaWebServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof LambdaWebServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof LambdaWebServiceException);
assert(typeof ValidationException$ === "object");
assert(LambdaWebServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForWebFunctionActive === "function");
assert(typeof waitForWebFunctionDeleted === "function");
assert(typeof waitForWebFunctionEndpointActive === "function");
assert(typeof waitForWebFunctionEndpointDeleted === "function");
assert(typeof waitForWebFunctionEndpointUpdated === "function");
assert(typeof waitForWebFunctionRevisionActive === "function");
assert(typeof waitUntilWebFunctionActive === "function");
assert(typeof waitUntilWebFunctionDeleted === "function");
assert(typeof waitUntilWebFunctionEndpointActive === "function");
assert(typeof waitUntilWebFunctionEndpointDeleted === "function");
assert(typeof waitUntilWebFunctionEndpointUpdated === "function");
assert(typeof waitUntilWebFunctionRevisionActive === "function");
// paginators
assert(typeof paginateListWebFunctionEndpoints === "function");
assert(typeof paginateListWebFunctionRevisions === "function");
assert(typeof paginateListWebFunctions === "function");
console.log(`LambdaWeb index test passed.`);
