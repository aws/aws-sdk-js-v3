import {
  AccessDeniedException,
  AccessDeniedException$,
  ApiKeyCredential$,
  AppAuthorization$,
  AppAuthorizationStatus,
  AppAuthorizationSummary$,
  AppBundle$,
  AppBundleSummary$,
  AppFabric,
  AppFabricClient,
  AppFabricServiceException,
  AuditLogDestinationConfiguration$,
  AuditLogProcessingConfiguration$,
  AuthRequest$,
  AuthType,
  BatchGetUserAccessTasks$,
  BatchGetUserAccessTasksCommand,
  BatchGetUserAccessTasksRequest$,
  BatchGetUserAccessTasksResponse$,
  ConflictException,
  ConflictException$,
  ConnectAppAuthorization$,
  ConnectAppAuthorizationCommand,
  ConnectAppAuthorizationRequest$,
  ConnectAppAuthorizationResponse$,
  CreateAppAuthorization$,
  CreateAppAuthorizationCommand,
  CreateAppAuthorizationRequest$,
  CreateAppAuthorizationResponse$,
  CreateAppBundle$,
  CreateAppBundleCommand,
  CreateAppBundleRequest$,
  CreateAppBundleResponse$,
  CreateIngestion$,
  CreateIngestionCommand,
  CreateIngestionDestination$,
  CreateIngestionDestinationCommand,
  CreateIngestionDestinationRequest$,
  CreateIngestionDestinationResponse$,
  CreateIngestionRequest$,
  CreateIngestionResponse$,
  Credential$,
  DeleteAppAuthorization$,
  DeleteAppAuthorizationCommand,
  DeleteAppAuthorizationRequest$,
  DeleteAppAuthorizationResponse$,
  DeleteAppBundle$,
  DeleteAppBundleCommand,
  DeleteAppBundleRequest$,
  DeleteAppBundleResponse$,
  DeleteIngestion$,
  DeleteIngestionCommand,
  DeleteIngestionDestination$,
  DeleteIngestionDestinationCommand,
  DeleteIngestionDestinationRequest$,
  DeleteIngestionDestinationResponse$,
  DeleteIngestionRequest$,
  DeleteIngestionResponse$,
  Destination$,
  DestinationConfiguration$,
  FirehoseStream$,
  Format,
  GetAppAuthorization$,
  GetAppAuthorizationCommand,
  GetAppAuthorizationRequest$,
  GetAppAuthorizationResponse$,
  GetAppBundle$,
  GetAppBundleCommand,
  GetAppBundleRequest$,
  GetAppBundleResponse$,
  GetIngestion$,
  GetIngestionCommand,
  GetIngestionDestination$,
  GetIngestionDestinationCommand,
  GetIngestionDestinationRequest$,
  GetIngestionDestinationResponse$,
  GetIngestionRequest$,
  GetIngestionResponse$,
  Ingestion$,
  IngestionDestination$,
  IngestionDestinationStatus,
  IngestionDestinationSummary$,
  IngestionState,
  IngestionSummary$,
  IngestionType,
  InternalServerException,
  InternalServerException$,
  ListAppAuthorizations$,
  ListAppAuthorizationsCommand,
  ListAppAuthorizationsRequest$,
  ListAppAuthorizationsResponse$,
  ListAppBundles$,
  ListAppBundlesCommand,
  ListAppBundlesRequest$,
  ListAppBundlesResponse$,
  ListIngestionDestinations$,
  ListIngestionDestinationsCommand,
  ListIngestionDestinationsRequest$,
  ListIngestionDestinationsResponse$,
  ListIngestions$,
  ListIngestionsCommand,
  ListIngestionsRequest$,
  ListIngestionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  Oauth2Credential$,
  paginateListAppAuthorizations,
  paginateListAppBundles,
  paginateListIngestionDestinations,
  paginateListIngestions,
  Persona,
  ProcessingConfiguration$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResultStatus,
  S3Bucket$,
  Schema,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StartIngestion$,
  StartIngestionCommand,
  StartIngestionRequest$,
  StartIngestionResponse$,
  StartUserAccessTasks$,
  StartUserAccessTasksCommand,
  StartUserAccessTasksRequest$,
  StartUserAccessTasksResponse$,
  StopIngestion$,
  StopIngestionCommand,
  StopIngestionRequest$,
  StopIngestionResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TaskError$,
  Tenant$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAppAuthorization$,
  UpdateAppAuthorizationCommand,
  UpdateAppAuthorizationRequest$,
  UpdateAppAuthorizationResponse$,
  UpdateIngestionDestination$,
  UpdateIngestionDestinationCommand,
  UpdateIngestionDestinationRequest$,
  UpdateIngestionDestinationResponse$,
  UserAccessResultItem$,
  UserAccessTaskItem$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AppFabricClient === "function");
assert(typeof AppFabric === "function");
// commands
assert(typeof BatchGetUserAccessTasksCommand === "function");
assert(typeof BatchGetUserAccessTasks$ === "object");
assert(typeof ConnectAppAuthorizationCommand === "function");
assert(typeof ConnectAppAuthorization$ === "object");
assert(typeof CreateAppAuthorizationCommand === "function");
assert(typeof CreateAppAuthorization$ === "object");
assert(typeof CreateAppBundleCommand === "function");
assert(typeof CreateAppBundle$ === "object");
assert(typeof CreateIngestionCommand === "function");
assert(typeof CreateIngestion$ === "object");
assert(typeof CreateIngestionDestinationCommand === "function");
assert(typeof CreateIngestionDestination$ === "object");
assert(typeof DeleteAppAuthorizationCommand === "function");
assert(typeof DeleteAppAuthorization$ === "object");
assert(typeof DeleteAppBundleCommand === "function");
assert(typeof DeleteAppBundle$ === "object");
assert(typeof DeleteIngestionCommand === "function");
assert(typeof DeleteIngestion$ === "object");
assert(typeof DeleteIngestionDestinationCommand === "function");
assert(typeof DeleteIngestionDestination$ === "object");
assert(typeof GetAppAuthorizationCommand === "function");
assert(typeof GetAppAuthorization$ === "object");
assert(typeof GetAppBundleCommand === "function");
assert(typeof GetAppBundle$ === "object");
assert(typeof GetIngestionCommand === "function");
assert(typeof GetIngestion$ === "object");
assert(typeof GetIngestionDestinationCommand === "function");
assert(typeof GetIngestionDestination$ === "object");
assert(typeof ListAppAuthorizationsCommand === "function");
assert(typeof ListAppAuthorizations$ === "object");
assert(typeof ListAppBundlesCommand === "function");
assert(typeof ListAppBundles$ === "object");
assert(typeof ListIngestionDestinationsCommand === "function");
assert(typeof ListIngestionDestinations$ === "object");
assert(typeof ListIngestionsCommand === "function");
assert(typeof ListIngestions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartIngestionCommand === "function");
assert(typeof StartIngestion$ === "object");
assert(typeof StartUserAccessTasksCommand === "function");
assert(typeof StartUserAccessTasks$ === "object");
assert(typeof StopIngestionCommand === "function");
assert(typeof StopIngestion$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAppAuthorizationCommand === "function");
assert(typeof UpdateAppAuthorization$ === "object");
assert(typeof UpdateIngestionDestinationCommand === "function");
assert(typeof UpdateIngestionDestination$ === "object");
// structural schemas
assert(typeof ApiKeyCredential$ === "object");
assert(typeof AppAuthorization$ === "object");
assert(typeof AppAuthorizationSummary$ === "object");
assert(typeof AppBundle$ === "object");
assert(typeof AppBundleSummary$ === "object");
assert(typeof AuditLogDestinationConfiguration$ === "object");
assert(typeof AuditLogProcessingConfiguration$ === "object");
assert(typeof AuthRequest$ === "object");
assert(typeof BatchGetUserAccessTasksRequest$ === "object");
assert(typeof BatchGetUserAccessTasksResponse$ === "object");
assert(typeof ConnectAppAuthorizationRequest$ === "object");
assert(typeof ConnectAppAuthorizationResponse$ === "object");
assert(typeof CreateAppAuthorizationRequest$ === "object");
assert(typeof CreateAppAuthorizationResponse$ === "object");
assert(typeof CreateAppBundleRequest$ === "object");
assert(typeof CreateAppBundleResponse$ === "object");
assert(typeof CreateIngestionDestinationRequest$ === "object");
assert(typeof CreateIngestionDestinationResponse$ === "object");
assert(typeof CreateIngestionRequest$ === "object");
assert(typeof CreateIngestionResponse$ === "object");
assert(typeof Credential$ === "object");
assert(typeof DeleteAppAuthorizationRequest$ === "object");
assert(typeof DeleteAppAuthorizationResponse$ === "object");
assert(typeof DeleteAppBundleRequest$ === "object");
assert(typeof DeleteAppBundleResponse$ === "object");
assert(typeof DeleteIngestionDestinationRequest$ === "object");
assert(typeof DeleteIngestionDestinationResponse$ === "object");
assert(typeof DeleteIngestionRequest$ === "object");
assert(typeof DeleteIngestionResponse$ === "object");
assert(typeof Destination$ === "object");
assert(typeof DestinationConfiguration$ === "object");
assert(typeof FirehoseStream$ === "object");
assert(typeof GetAppAuthorizationRequest$ === "object");
assert(typeof GetAppAuthorizationResponse$ === "object");
assert(typeof GetAppBundleRequest$ === "object");
assert(typeof GetAppBundleResponse$ === "object");
assert(typeof GetIngestionDestinationRequest$ === "object");
assert(typeof GetIngestionDestinationResponse$ === "object");
assert(typeof GetIngestionRequest$ === "object");
assert(typeof GetIngestionResponse$ === "object");
assert(typeof Ingestion$ === "object");
assert(typeof IngestionDestination$ === "object");
assert(typeof IngestionDestinationSummary$ === "object");
assert(typeof IngestionSummary$ === "object");
assert(typeof ListAppAuthorizationsRequest$ === "object");
assert(typeof ListAppAuthorizationsResponse$ === "object");
assert(typeof ListAppBundlesRequest$ === "object");
assert(typeof ListAppBundlesResponse$ === "object");
assert(typeof ListIngestionDestinationsRequest$ === "object");
assert(typeof ListIngestionDestinationsResponse$ === "object");
assert(typeof ListIngestionsRequest$ === "object");
assert(typeof ListIngestionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Oauth2Credential$ === "object");
assert(typeof ProcessingConfiguration$ === "object");
assert(typeof S3Bucket$ === "object");
assert(typeof StartIngestionRequest$ === "object");
assert(typeof StartIngestionResponse$ === "object");
assert(typeof StartUserAccessTasksRequest$ === "object");
assert(typeof StartUserAccessTasksResponse$ === "object");
assert(typeof StopIngestionRequest$ === "object");
assert(typeof StopIngestionResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TaskError$ === "object");
assert(typeof Tenant$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAppAuthorizationRequest$ === "object");
assert(typeof UpdateAppAuthorizationResponse$ === "object");
assert(typeof UpdateIngestionDestinationRequest$ === "object");
assert(typeof UpdateIngestionDestinationResponse$ === "object");
assert(typeof UserAccessResultItem$ === "object");
assert(typeof UserAccessTaskItem$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof AppAuthorizationStatus === "object");
assert(typeof AuthType === "object");
assert(typeof Format === "object");
assert(typeof IngestionDestinationStatus === "object");
assert(typeof IngestionState === "object");
assert(typeof IngestionType === "object");
assert(typeof Persona === "object");
assert(typeof ResultStatus === "object");
assert(typeof Schema === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof AppFabricServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof AppFabricServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof AppFabricServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AppFabricServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof AppFabricServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof AppFabricServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof AppFabricServiceException);
assert(typeof ValidationException$ === "object");
assert(AppFabricServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAppAuthorizations === "function");
assert(typeof paginateListAppBundles === "function");
assert(typeof paginateListIngestionDestinations === "function");
assert(typeof paginateListIngestions === "function");
console.log(`AppFabric index test passed.`);
