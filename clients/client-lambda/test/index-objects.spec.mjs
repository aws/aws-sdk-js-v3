import {
  AccountLimit$,
  AccountUsage$,
  AddLayerVersionPermission$,
  AddLayerVersionPermissionCommand,
  AddLayerVersionPermissionRequest$,
  AddLayerVersionPermissionResponse$,
  AddPermission$,
  AddPermissionCommand,
  AddPermissionRequest$,
  AddPermissionResponse$,
  AliasConfiguration$,
  AliasRoutingConfiguration$,
  AllowedPublishers$,
  AmazonManagedKafkaEventSourceConfig$,
  ApplicationLogLevel,
  Architecture,
  CallbackDetails$,
  CallbackFailedDetails$,
  CallbackOptions$,
  CallbackStartedDetails$,
  CallbackSucceededDetails$,
  CallbackTimedOutDetails$,
  CallbackTimeoutException,
  CallbackTimeoutException$,
  CapacityProvider$,
  CapacityProviderConfig$,
  CapacityProviderLimitExceededException,
  CapacityProviderLimitExceededException$,
  CapacityProviderPermissionsConfig$,
  CapacityProviderPredefinedMetricType,
  CapacityProviderScalingConfig$,
  CapacityProviderScalingMode,
  CapacityProviderState,
  CapacityProviderVpcConfig$,
  ChainedInvokeDetails$,
  ChainedInvokeFailedDetails$,
  ChainedInvokeOptions$,
  ChainedInvokeStartedDetails$,
  ChainedInvokeStoppedDetails$,
  ChainedInvokeSucceededDetails$,
  ChainedInvokeTimedOutDetails$,
  CheckpointDurableExecution$,
  CheckpointDurableExecutionCommand,
  CheckpointDurableExecutionRequest$,
  CheckpointDurableExecutionResponse$,
  CheckpointUpdatedExecutionState$,
  CodeSigningConfig$,
  CodeSigningConfigNotFoundException,
  CodeSigningConfigNotFoundException$,
  CodeSigningPolicies$,
  CodeSigningPolicy,
  CodeStorageExceededException,
  CodeStorageExceededException$,
  CodeVerificationFailedException,
  CodeVerificationFailedException$,
  Concurrency$,
  ContextDetails$,
  ContextFailedDetails$,
  ContextOptions$,
  ContextStartedDetails$,
  ContextSucceededDetails$,
  Cors$,
  CreateAlias$,
  CreateAliasCommand,
  CreateAliasRequest$,
  CreateCapacityProvider$,
  CreateCapacityProviderCommand,
  CreateCapacityProviderRequest$,
  CreateCapacityProviderResponse$,
  CreateCodeSigningConfig$,
  CreateCodeSigningConfigCommand,
  CreateCodeSigningConfigRequest$,
  CreateCodeSigningConfigResponse$,
  CreateEventSourceMapping$,
  CreateEventSourceMappingCommand,
  CreateEventSourceMappingRequest$,
  CreateFunction$,
  CreateFunctionCommand,
  CreateFunctionRequest$,
  CreateFunctionUrlConfig$,
  CreateFunctionUrlConfigCommand,
  CreateFunctionUrlConfigRequest$,
  CreateFunctionUrlConfigResponse$,
  DeadLetterConfig$,
  DeleteAlias$,
  DeleteAliasCommand,
  DeleteAliasRequest$,
  DeleteCapacityProvider$,
  DeleteCapacityProviderCommand,
  DeleteCapacityProviderRequest$,
  DeleteCapacityProviderResponse$,
  DeleteCodeSigningConfig$,
  DeleteCodeSigningConfigCommand,
  DeleteCodeSigningConfigRequest$,
  DeleteCodeSigningConfigResponse$,
  DeleteEventSourceMapping$,
  DeleteEventSourceMappingCommand,
  DeleteEventSourceMappingRequest$,
  DeleteFunction$,
  DeleteFunctionCodeSigningConfig$,
  DeleteFunctionCodeSigningConfigCommand,
  DeleteFunctionCodeSigningConfigRequest$,
  DeleteFunctionCommand,
  DeleteFunctionConcurrency$,
  DeleteFunctionConcurrencyCommand,
  DeleteFunctionConcurrencyRequest$,
  DeleteFunctionEventInvokeConfig$,
  DeleteFunctionEventInvokeConfigCommand,
  DeleteFunctionEventInvokeConfigRequest$,
  DeleteFunctionRequest$,
  DeleteFunctionResponse$,
  DeleteFunctionUrlConfig$,
  DeleteFunctionUrlConfigCommand,
  DeleteFunctionUrlConfigRequest$,
  DeleteLayerVersion$,
  DeleteLayerVersionCommand,
  DeleteLayerVersionRequest$,
  DeleteProvisionedConcurrencyConfig$,
  DeleteProvisionedConcurrencyConfigCommand,
  DeleteProvisionedConcurrencyConfigRequest$,
  DestinationConfig$,
  DocumentDBEventSourceConfig$,
  DurableConfig$,
  DurableExecutionAlreadyStartedException,
  DurableExecutionAlreadyStartedException$,
  EC2AccessDeniedException,
  EC2AccessDeniedException$,
  EC2ThrottledException,
  EC2ThrottledException$,
  EC2UnexpectedException,
  EC2UnexpectedException$,
  EFSIOException,
  EFSIOException$,
  EFSMountConnectivityException,
  EFSMountConnectivityException$,
  EFSMountFailureException,
  EFSMountFailureException$,
  EFSMountTimeoutException,
  EFSMountTimeoutException$,
  EndPointType,
  ENILimitReachedException,
  ENILimitReachedException$,
  Environment$,
  EnvironmentError$,
  EnvironmentResponse$,
  EphemeralStorage$,
  ErrorObject$,
  Event$,
  EventError$,
  EventInput$,
  EventResult$,
  EventSourceMappingConfiguration$,
  EventSourceMappingMetric,
  EventSourceMappingMetricsConfig$,
  EventSourcePosition,
  EventType,
  Execution$,
  ExecutionDetails$,
  ExecutionFailedDetails$,
  ExecutionStartedDetails$,
  ExecutionStatus,
  ExecutionStoppedDetails$,
  ExecutionSucceededDetails$,
  ExecutionTimedOutDetails$,
  FileSystemConfig$,
  Filter$,
  FilterCriteria$,
  FilterCriteriaError$,
  FullDocument,
  FunctionCode$,
  FunctionCodeLocation$,
  FunctionConfiguration$,
  FunctionEventInvokeConfig$,
  FunctionResponseType,
  FunctionScalingConfig$,
  FunctionUrlAuthType,
  FunctionUrlConfig$,
  FunctionVersion,
  FunctionVersionLatestPublished,
  FunctionVersionsByCapacityProviderListItem$,
  FunctionVersionsPerCapacityProviderLimitExceededException,
  FunctionVersionsPerCapacityProviderLimitExceededException$,
  GetAccountSettings$,
  GetAccountSettingsCommand,
  GetAccountSettingsRequest$,
  GetAccountSettingsResponse$,
  GetAlias$,
  GetAliasCommand,
  GetAliasRequest$,
  GetCapacityProvider$,
  GetCapacityProviderCommand,
  GetCapacityProviderRequest$,
  GetCapacityProviderResponse$,
  GetCodeSigningConfig$,
  GetCodeSigningConfigCommand,
  GetCodeSigningConfigRequest$,
  GetCodeSigningConfigResponse$,
  GetDurableExecution$,
  GetDurableExecutionCommand,
  GetDurableExecutionHistory$,
  GetDurableExecutionHistoryCommand,
  GetDurableExecutionHistoryRequest$,
  GetDurableExecutionHistoryResponse$,
  GetDurableExecutionRequest$,
  GetDurableExecutionResponse$,
  GetDurableExecutionState$,
  GetDurableExecutionStateCommand,
  GetDurableExecutionStateRequest$,
  GetDurableExecutionStateResponse$,
  GetEventSourceMapping$,
  GetEventSourceMappingCommand,
  GetEventSourceMappingRequest$,
  GetFunction$,
  GetFunctionCodeSigningConfig$,
  GetFunctionCodeSigningConfigCommand,
  GetFunctionCodeSigningConfigRequest$,
  GetFunctionCodeSigningConfigResponse$,
  GetFunctionCommand,
  GetFunctionConcurrency$,
  GetFunctionConcurrencyCommand,
  GetFunctionConcurrencyRequest$,
  GetFunctionConcurrencyResponse$,
  GetFunctionConfiguration$,
  GetFunctionConfigurationCommand,
  GetFunctionConfigurationRequest$,
  GetFunctionEventInvokeConfig$,
  GetFunctionEventInvokeConfigCommand,
  GetFunctionEventInvokeConfigRequest$,
  GetFunctionRecursionConfig$,
  GetFunctionRecursionConfigCommand,
  GetFunctionRecursionConfigRequest$,
  GetFunctionRecursionConfigResponse$,
  GetFunctionRequest$,
  GetFunctionResponse$,
  GetFunctionScalingConfig$,
  GetFunctionScalingConfigCommand,
  GetFunctionScalingConfigRequest$,
  GetFunctionScalingConfigResponse$,
  GetFunctionUrlConfig$,
  GetFunctionUrlConfigCommand,
  GetFunctionUrlConfigRequest$,
  GetFunctionUrlConfigResponse$,
  GetLayerVersion$,
  GetLayerVersionByArn$,
  GetLayerVersionByArnCommand,
  GetLayerVersionByArnRequest$,
  GetLayerVersionCommand,
  GetLayerVersionPolicy$,
  GetLayerVersionPolicyCommand,
  GetLayerVersionPolicyRequest$,
  GetLayerVersionPolicyResponse$,
  GetLayerVersionRequest$,
  GetLayerVersionResponse$,
  GetPolicy$,
  GetPolicyCommand,
  GetPolicyRequest$,
  GetPolicyResponse$,
  GetProvisionedConcurrencyConfig$,
  GetProvisionedConcurrencyConfigCommand,
  GetProvisionedConcurrencyConfigRequest$,
  GetProvisionedConcurrencyConfigResponse$,
  GetRuntimeManagementConfig$,
  GetRuntimeManagementConfigCommand,
  GetRuntimeManagementConfigRequest$,
  GetRuntimeManagementConfigResponse$,
  ImageConfig$,
  ImageConfigError$,
  ImageConfigResponse$,
  InstanceRequirements$,
  InvalidCodeSignatureException,
  InvalidCodeSignatureException$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  InvalidRequestContentException,
  InvalidRequestContentException$,
  InvalidRuntimeException,
  InvalidRuntimeException$,
  InvalidSecurityGroupIDException,
  InvalidSecurityGroupIDException$,
  InvalidSubnetIDException,
  InvalidSubnetIDException$,
  InvalidZipFileException,
  InvalidZipFileException$,
  InvocationCompletedDetails$,
  InvocationRequest$,
  InvocationResponse$,
  InvocationType,
  Invoke$,
  InvokeAsync$,
  InvokeAsyncCommand,
  InvokeAsyncRequest$,
  InvokeAsyncResponse$,
  InvokeCommand,
  InvokeMode,
  InvokeResponseStreamUpdate$,
  InvokeWithResponseStream$,
  InvokeWithResponseStreamCommand,
  InvokeWithResponseStreamCompleteEvent$,
  InvokeWithResponseStreamRequest$,
  InvokeWithResponseStreamResponse$,
  InvokeWithResponseStreamResponseEvent$,
  KafkaSchemaRegistryAccessConfig$,
  KafkaSchemaRegistryAuthType,
  KafkaSchemaRegistryConfig$,
  KafkaSchemaValidationAttribute,
  KafkaSchemaValidationConfig$,
  KMSAccessDeniedException,
  KMSAccessDeniedException$,
  KMSDisabledException,
  KMSDisabledException$,
  KMSInvalidStateException,
  KMSInvalidStateException$,
  KMSNotFoundException,
  KMSNotFoundException$,
  Lambda,
  LambdaClient,
  LambdaManagedInstancesCapacityProviderConfig$,
  LambdaServiceException,
  LastUpdateStatus,
  LastUpdateStatusReasonCode,
  Layer$,
  LayersListItem$,
  LayerVersionContentInput$,
  LayerVersionContentOutput$,
  LayerVersionsListItem$,
  ListAliases$,
  ListAliasesCommand,
  ListAliasesRequest$,
  ListAliasesResponse$,
  ListCapacityProviders$,
  ListCapacityProvidersCommand,
  ListCapacityProvidersRequest$,
  ListCapacityProvidersResponse$,
  ListCodeSigningConfigs$,
  ListCodeSigningConfigsCommand,
  ListCodeSigningConfigsRequest$,
  ListCodeSigningConfigsResponse$,
  ListDurableExecutionsByFunction$,
  ListDurableExecutionsByFunctionCommand,
  ListDurableExecutionsByFunctionRequest$,
  ListDurableExecutionsByFunctionResponse$,
  ListEventSourceMappings$,
  ListEventSourceMappingsCommand,
  ListEventSourceMappingsRequest$,
  ListEventSourceMappingsResponse$,
  ListFunctionEventInvokeConfigs$,
  ListFunctionEventInvokeConfigsCommand,
  ListFunctionEventInvokeConfigsRequest$,
  ListFunctionEventInvokeConfigsResponse$,
  ListFunctions$,
  ListFunctionsByCodeSigningConfig$,
  ListFunctionsByCodeSigningConfigCommand,
  ListFunctionsByCodeSigningConfigRequest$,
  ListFunctionsByCodeSigningConfigResponse$,
  ListFunctionsCommand,
  ListFunctionsRequest$,
  ListFunctionsResponse$,
  ListFunctionUrlConfigs$,
  ListFunctionUrlConfigsCommand,
  ListFunctionUrlConfigsRequest$,
  ListFunctionUrlConfigsResponse$,
  ListFunctionVersionsByCapacityProvider$,
  ListFunctionVersionsByCapacityProviderCommand,
  ListFunctionVersionsByCapacityProviderRequest$,
  ListFunctionVersionsByCapacityProviderResponse$,
  ListLayers$,
  ListLayersCommand,
  ListLayersRequest$,
  ListLayersResponse$,
  ListLayerVersions$,
  ListLayerVersionsCommand,
  ListLayerVersionsRequest$,
  ListLayerVersionsResponse$,
  ListProvisionedConcurrencyConfigs$,
  ListProvisionedConcurrencyConfigsCommand,
  ListProvisionedConcurrencyConfigsRequest$,
  ListProvisionedConcurrencyConfigsResponse$,
  ListTags$,
  ListTagsCommand,
  ListTagsRequest$,
  ListTagsResponse$,
  ListVersionsByFunction$,
  ListVersionsByFunctionCommand,
  ListVersionsByFunctionRequest$,
  ListVersionsByFunctionResponse$,
  LogFormat,
  LoggingConfig$,
  LogType,
  NoPublishedVersionException,
  NoPublishedVersionException$,
  OnFailure$,
  OnSuccess$,
  Operation$,
  OperationAction,
  OperationStatus,
  OperationType,
  OperationUpdate$,
  PackageType,
  paginateGetDurableExecutionHistory,
  paginateGetDurableExecutionState,
  paginateListAliases,
  paginateListCapacityProviders,
  paginateListCodeSigningConfigs,
  paginateListDurableExecutionsByFunction,
  paginateListEventSourceMappings,
  paginateListFunctionEventInvokeConfigs,
  paginateListFunctions,
  paginateListFunctionsByCodeSigningConfig,
  paginateListFunctionUrlConfigs,
  paginateListFunctionVersionsByCapacityProvider,
  paginateListLayers,
  paginateListLayerVersions,
  paginateListProvisionedConcurrencyConfigs,
  paginateListVersionsByFunction,
  PolicyLengthExceededException,
  PolicyLengthExceededException$,
  PreconditionFailedException,
  PreconditionFailedException$,
  ProvisionedConcurrencyConfigListItem$,
  ProvisionedConcurrencyConfigNotFoundException,
  ProvisionedConcurrencyConfigNotFoundException$,
  ProvisionedConcurrencyStatusEnum,
  ProvisionedPollerConfig$,
  PublishLayerVersion$,
  PublishLayerVersionCommand,
  PublishLayerVersionRequest$,
  PublishLayerVersionResponse$,
  PublishVersion$,
  PublishVersionCommand,
  PublishVersionRequest$,
  PutFunctionCodeSigningConfig$,
  PutFunctionCodeSigningConfigCommand,
  PutFunctionCodeSigningConfigRequest$,
  PutFunctionCodeSigningConfigResponse$,
  PutFunctionConcurrency$,
  PutFunctionConcurrencyCommand,
  PutFunctionConcurrencyRequest$,
  PutFunctionEventInvokeConfig$,
  PutFunctionEventInvokeConfigCommand,
  PutFunctionEventInvokeConfigRequest$,
  PutFunctionRecursionConfig$,
  PutFunctionRecursionConfigCommand,
  PutFunctionRecursionConfigRequest$,
  PutFunctionRecursionConfigResponse$,
  PutFunctionScalingConfig$,
  PutFunctionScalingConfigCommand,
  PutFunctionScalingConfigRequest$,
  PutFunctionScalingConfigResponse$,
  PutProvisionedConcurrencyConfig$,
  PutProvisionedConcurrencyConfigCommand,
  PutProvisionedConcurrencyConfigRequest$,
  PutProvisionedConcurrencyConfigResponse$,
  PutRuntimeManagementConfig$,
  PutRuntimeManagementConfigCommand,
  PutRuntimeManagementConfigRequest$,
  PutRuntimeManagementConfigResponse$,
  RecursiveInvocationException,
  RecursiveInvocationException$,
  RecursiveLoop,
  RemoveLayerVersionPermission$,
  RemoveLayerVersionPermissionCommand,
  RemoveLayerVersionPermissionRequest$,
  RemovePermission$,
  RemovePermissionCommand,
  RemovePermissionRequest$,
  RequestTooLargeException,
  RequestTooLargeException$,
  ResourceConflictException,
  ResourceConflictException$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceNotReadyException,
  ResourceNotReadyException$,
  ResponseStreamingInvocationType,
  RetryDetails$,
  Runtime,
  RuntimeVersionConfig$,
  RuntimeVersionError$,
  ScalingConfig$,
  SchemaRegistryEventRecordFormat,
  SelfManagedEventSource$,
  SelfManagedKafkaEventSourceConfig$,
  SendDurableExecutionCallbackFailure$,
  SendDurableExecutionCallbackFailureCommand,
  SendDurableExecutionCallbackFailureRequest$,
  SendDurableExecutionCallbackFailureResponse$,
  SendDurableExecutionCallbackHeartbeat$,
  SendDurableExecutionCallbackHeartbeatCommand,
  SendDurableExecutionCallbackHeartbeatRequest$,
  SendDurableExecutionCallbackHeartbeatResponse$,
  SendDurableExecutionCallbackSuccess$,
  SendDurableExecutionCallbackSuccessCommand,
  SendDurableExecutionCallbackSuccessRequest$,
  SendDurableExecutionCallbackSuccessResponse$,
  SerializedRequestEntityTooLargeException,
  SerializedRequestEntityTooLargeException$,
  ServiceException,
  ServiceException$,
  SnapStart$,
  SnapStartApplyOn,
  SnapStartException,
  SnapStartException$,
  SnapStartNotReadyException,
  SnapStartNotReadyException$,
  SnapStartOptimizationStatus,
  SnapStartResponse$,
  SnapStartTimeoutException,
  SnapStartTimeoutException$,
  SourceAccessConfiguration$,
  SourceAccessType,
  State,
  StateReasonCode,
  StepDetails$,
  StepFailedDetails$,
  StepOptions$,
  StepStartedDetails$,
  StepSucceededDetails$,
  StopDurableExecution$,
  StopDurableExecutionCommand,
  StopDurableExecutionRequest$,
  StopDurableExecutionResponse$,
  SubnetIPAddressLimitReachedException,
  SubnetIPAddressLimitReachedException$,
  SystemLogLevel,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagsError$,
  TargetTrackingScalingPolicy$,
  TenancyConfig$,
  TenantIsolationMode,
  ThrottleReason,
  TooManyRequestsException,
  TooManyRequestsException$,
  TraceHeader$,
  TracingConfig$,
  TracingConfigResponse$,
  TracingMode,
  UnsupportedMediaTypeException,
  UnsupportedMediaTypeException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateAlias$,
  UpdateAliasCommand,
  UpdateAliasRequest$,
  UpdateCapacityProvider$,
  UpdateCapacityProviderCommand,
  UpdateCapacityProviderRequest$,
  UpdateCapacityProviderResponse$,
  UpdateCodeSigningConfig$,
  UpdateCodeSigningConfigCommand,
  UpdateCodeSigningConfigRequest$,
  UpdateCodeSigningConfigResponse$,
  UpdateEventSourceMapping$,
  UpdateEventSourceMappingCommand,
  UpdateEventSourceMappingRequest$,
  UpdateFunctionCode$,
  UpdateFunctionCodeCommand,
  UpdateFunctionCodeRequest$,
  UpdateFunctionConfiguration$,
  UpdateFunctionConfigurationCommand,
  UpdateFunctionConfigurationRequest$,
  UpdateFunctionEventInvokeConfig$,
  UpdateFunctionEventInvokeConfigCommand,
  UpdateFunctionEventInvokeConfigRequest$,
  UpdateFunctionUrlConfig$,
  UpdateFunctionUrlConfigCommand,
  UpdateFunctionUrlConfigRequest$,
  UpdateFunctionUrlConfigResponse$,
  UpdateRuntimeOn,
  VpcConfig$,
  VpcConfigResponse$,
  WaitCancelledDetails$,
  WaitDetails$,
  waitForFunctionActive,
  waitForFunctionActiveV2,
  waitForFunctionExists,
  waitForFunctionUpdated,
  waitForFunctionUpdatedV2,
  waitForPublishedVersionActive,
  WaitOptions$,
  WaitStartedDetails$,
  WaitSucceededDetails$,
  waitUntilFunctionActive,
  waitUntilFunctionActiveV2,
  waitUntilFunctionExists,
  waitUntilFunctionUpdated,
  waitUntilFunctionUpdatedV2,
  waitUntilPublishedVersionActive,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LambdaClient === "function");
assert(typeof Lambda === "function");
// commands
assert(typeof AddLayerVersionPermissionCommand === "function");
assert(typeof AddLayerVersionPermission$ === "object");
assert(typeof AddPermissionCommand === "function");
assert(typeof AddPermission$ === "object");
assert(typeof CheckpointDurableExecutionCommand === "function");
assert(typeof CheckpointDurableExecution$ === "object");
assert(typeof CreateAliasCommand === "function");
assert(typeof CreateAlias$ === "object");
assert(typeof CreateCapacityProviderCommand === "function");
assert(typeof CreateCapacityProvider$ === "object");
assert(typeof CreateCodeSigningConfigCommand === "function");
assert(typeof CreateCodeSigningConfig$ === "object");
assert(typeof CreateEventSourceMappingCommand === "function");
assert(typeof CreateEventSourceMapping$ === "object");
assert(typeof CreateFunctionCommand === "function");
assert(typeof CreateFunction$ === "object");
assert(typeof CreateFunctionUrlConfigCommand === "function");
assert(typeof CreateFunctionUrlConfig$ === "object");
assert(typeof DeleteAliasCommand === "function");
assert(typeof DeleteAlias$ === "object");
assert(typeof DeleteCapacityProviderCommand === "function");
assert(typeof DeleteCapacityProvider$ === "object");
assert(typeof DeleteCodeSigningConfigCommand === "function");
assert(typeof DeleteCodeSigningConfig$ === "object");
assert(typeof DeleteEventSourceMappingCommand === "function");
assert(typeof DeleteEventSourceMapping$ === "object");
assert(typeof DeleteFunctionCommand === "function");
assert(typeof DeleteFunction$ === "object");
assert(typeof DeleteFunctionCodeSigningConfigCommand === "function");
assert(typeof DeleteFunctionCodeSigningConfig$ === "object");
assert(typeof DeleteFunctionConcurrencyCommand === "function");
assert(typeof DeleteFunctionConcurrency$ === "object");
assert(typeof DeleteFunctionEventInvokeConfigCommand === "function");
assert(typeof DeleteFunctionEventInvokeConfig$ === "object");
assert(typeof DeleteFunctionUrlConfigCommand === "function");
assert(typeof DeleteFunctionUrlConfig$ === "object");
assert(typeof DeleteLayerVersionCommand === "function");
assert(typeof DeleteLayerVersion$ === "object");
assert(typeof DeleteProvisionedConcurrencyConfigCommand === "function");
assert(typeof DeleteProvisionedConcurrencyConfig$ === "object");
assert(typeof GetAccountSettingsCommand === "function");
assert(typeof GetAccountSettings$ === "object");
assert(typeof GetAliasCommand === "function");
assert(typeof GetAlias$ === "object");
assert(typeof GetCapacityProviderCommand === "function");
assert(typeof GetCapacityProvider$ === "object");
assert(typeof GetCodeSigningConfigCommand === "function");
assert(typeof GetCodeSigningConfig$ === "object");
assert(typeof GetDurableExecutionCommand === "function");
assert(typeof GetDurableExecution$ === "object");
assert(typeof GetDurableExecutionHistoryCommand === "function");
assert(typeof GetDurableExecutionHistory$ === "object");
assert(typeof GetDurableExecutionStateCommand === "function");
assert(typeof GetDurableExecutionState$ === "object");
assert(typeof GetEventSourceMappingCommand === "function");
assert(typeof GetEventSourceMapping$ === "object");
assert(typeof GetFunctionCommand === "function");
assert(typeof GetFunction$ === "object");
assert(typeof GetFunctionCodeSigningConfigCommand === "function");
assert(typeof GetFunctionCodeSigningConfig$ === "object");
assert(typeof GetFunctionConcurrencyCommand === "function");
assert(typeof GetFunctionConcurrency$ === "object");
assert(typeof GetFunctionConfigurationCommand === "function");
assert(typeof GetFunctionConfiguration$ === "object");
assert(typeof GetFunctionEventInvokeConfigCommand === "function");
assert(typeof GetFunctionEventInvokeConfig$ === "object");
assert(typeof GetFunctionRecursionConfigCommand === "function");
assert(typeof GetFunctionRecursionConfig$ === "object");
assert(typeof GetFunctionScalingConfigCommand === "function");
assert(typeof GetFunctionScalingConfig$ === "object");
assert(typeof GetFunctionUrlConfigCommand === "function");
assert(typeof GetFunctionUrlConfig$ === "object");
assert(typeof GetLayerVersionCommand === "function");
assert(typeof GetLayerVersion$ === "object");
assert(typeof GetLayerVersionByArnCommand === "function");
assert(typeof GetLayerVersionByArn$ === "object");
assert(typeof GetLayerVersionPolicyCommand === "function");
assert(typeof GetLayerVersionPolicy$ === "object");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPolicy$ === "object");
assert(typeof GetProvisionedConcurrencyConfigCommand === "function");
assert(typeof GetProvisionedConcurrencyConfig$ === "object");
assert(typeof GetRuntimeManagementConfigCommand === "function");
assert(typeof GetRuntimeManagementConfig$ === "object");
assert(typeof InvokeCommand === "function");
assert(typeof Invoke$ === "object");
assert(typeof InvokeAsyncCommand === "function");
assert(typeof InvokeAsync$ === "object");
assert(typeof InvokeWithResponseStreamCommand === "function");
assert(typeof InvokeWithResponseStream$ === "object");
assert(typeof ListAliasesCommand === "function");
assert(typeof ListAliases$ === "object");
assert(typeof ListCapacityProvidersCommand === "function");
assert(typeof ListCapacityProviders$ === "object");
assert(typeof ListCodeSigningConfigsCommand === "function");
assert(typeof ListCodeSigningConfigs$ === "object");
assert(typeof ListDurableExecutionsByFunctionCommand === "function");
assert(typeof ListDurableExecutionsByFunction$ === "object");
assert(typeof ListEventSourceMappingsCommand === "function");
assert(typeof ListEventSourceMappings$ === "object");
assert(typeof ListFunctionEventInvokeConfigsCommand === "function");
assert(typeof ListFunctionEventInvokeConfigs$ === "object");
assert(typeof ListFunctionsCommand === "function");
assert(typeof ListFunctions$ === "object");
assert(typeof ListFunctionsByCodeSigningConfigCommand === "function");
assert(typeof ListFunctionsByCodeSigningConfig$ === "object");
assert(typeof ListFunctionUrlConfigsCommand === "function");
assert(typeof ListFunctionUrlConfigs$ === "object");
assert(typeof ListFunctionVersionsByCapacityProviderCommand === "function");
assert(typeof ListFunctionVersionsByCapacityProvider$ === "object");
assert(typeof ListLayersCommand === "function");
assert(typeof ListLayers$ === "object");
assert(typeof ListLayerVersionsCommand === "function");
assert(typeof ListLayerVersions$ === "object");
assert(typeof ListProvisionedConcurrencyConfigsCommand === "function");
assert(typeof ListProvisionedConcurrencyConfigs$ === "object");
assert(typeof ListTagsCommand === "function");
assert(typeof ListTags$ === "object");
assert(typeof ListVersionsByFunctionCommand === "function");
assert(typeof ListVersionsByFunction$ === "object");
assert(typeof PublishLayerVersionCommand === "function");
assert(typeof PublishLayerVersion$ === "object");
assert(typeof PublishVersionCommand === "function");
assert(typeof PublishVersion$ === "object");
assert(typeof PutFunctionCodeSigningConfigCommand === "function");
assert(typeof PutFunctionCodeSigningConfig$ === "object");
assert(typeof PutFunctionConcurrencyCommand === "function");
assert(typeof PutFunctionConcurrency$ === "object");
assert(typeof PutFunctionEventInvokeConfigCommand === "function");
assert(typeof PutFunctionEventInvokeConfig$ === "object");
assert(typeof PutFunctionRecursionConfigCommand === "function");
assert(typeof PutFunctionRecursionConfig$ === "object");
assert(typeof PutFunctionScalingConfigCommand === "function");
assert(typeof PutFunctionScalingConfig$ === "object");
assert(typeof PutProvisionedConcurrencyConfigCommand === "function");
assert(typeof PutProvisionedConcurrencyConfig$ === "object");
assert(typeof PutRuntimeManagementConfigCommand === "function");
assert(typeof PutRuntimeManagementConfig$ === "object");
assert(typeof RemoveLayerVersionPermissionCommand === "function");
assert(typeof RemoveLayerVersionPermission$ === "object");
assert(typeof RemovePermissionCommand === "function");
assert(typeof RemovePermission$ === "object");
assert(typeof SendDurableExecutionCallbackFailureCommand === "function");
assert(typeof SendDurableExecutionCallbackFailure$ === "object");
assert(typeof SendDurableExecutionCallbackHeartbeatCommand === "function");
assert(typeof SendDurableExecutionCallbackHeartbeat$ === "object");
assert(typeof SendDurableExecutionCallbackSuccessCommand === "function");
assert(typeof SendDurableExecutionCallbackSuccess$ === "object");
assert(typeof StopDurableExecutionCommand === "function");
assert(typeof StopDurableExecution$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAliasCommand === "function");
assert(typeof UpdateAlias$ === "object");
assert(typeof UpdateCapacityProviderCommand === "function");
assert(typeof UpdateCapacityProvider$ === "object");
assert(typeof UpdateCodeSigningConfigCommand === "function");
assert(typeof UpdateCodeSigningConfig$ === "object");
assert(typeof UpdateEventSourceMappingCommand === "function");
assert(typeof UpdateEventSourceMapping$ === "object");
assert(typeof UpdateFunctionCodeCommand === "function");
assert(typeof UpdateFunctionCode$ === "object");
assert(typeof UpdateFunctionConfigurationCommand === "function");
assert(typeof UpdateFunctionConfiguration$ === "object");
assert(typeof UpdateFunctionEventInvokeConfigCommand === "function");
assert(typeof UpdateFunctionEventInvokeConfig$ === "object");
assert(typeof UpdateFunctionUrlConfigCommand === "function");
assert(typeof UpdateFunctionUrlConfig$ === "object");
// structural schemas
assert(typeof AccountLimit$ === "object");
assert(typeof AccountUsage$ === "object");
assert(typeof AddLayerVersionPermissionRequest$ === "object");
assert(typeof AddLayerVersionPermissionResponse$ === "object");
assert(typeof AddPermissionRequest$ === "object");
assert(typeof AddPermissionResponse$ === "object");
assert(typeof AliasConfiguration$ === "object");
assert(typeof AliasRoutingConfiguration$ === "object");
assert(typeof AllowedPublishers$ === "object");
assert(typeof AmazonManagedKafkaEventSourceConfig$ === "object");
assert(typeof CallbackDetails$ === "object");
assert(typeof CallbackFailedDetails$ === "object");
assert(typeof CallbackOptions$ === "object");
assert(typeof CallbackStartedDetails$ === "object");
assert(typeof CallbackSucceededDetails$ === "object");
assert(typeof CallbackTimedOutDetails$ === "object");
assert(typeof CapacityProvider$ === "object");
assert(typeof CapacityProviderConfig$ === "object");
assert(typeof CapacityProviderPermissionsConfig$ === "object");
assert(typeof CapacityProviderScalingConfig$ === "object");
assert(typeof CapacityProviderVpcConfig$ === "object");
assert(typeof ChainedInvokeDetails$ === "object");
assert(typeof ChainedInvokeFailedDetails$ === "object");
assert(typeof ChainedInvokeOptions$ === "object");
assert(typeof ChainedInvokeStartedDetails$ === "object");
assert(typeof ChainedInvokeStoppedDetails$ === "object");
assert(typeof ChainedInvokeSucceededDetails$ === "object");
assert(typeof ChainedInvokeTimedOutDetails$ === "object");
assert(typeof CheckpointDurableExecutionRequest$ === "object");
assert(typeof CheckpointDurableExecutionResponse$ === "object");
assert(typeof CheckpointUpdatedExecutionState$ === "object");
assert(typeof CodeSigningConfig$ === "object");
assert(typeof CodeSigningPolicies$ === "object");
assert(typeof Concurrency$ === "object");
assert(typeof ContextDetails$ === "object");
assert(typeof ContextFailedDetails$ === "object");
assert(typeof ContextOptions$ === "object");
assert(typeof ContextStartedDetails$ === "object");
assert(typeof ContextSucceededDetails$ === "object");
assert(typeof Cors$ === "object");
assert(typeof CreateAliasRequest$ === "object");
assert(typeof CreateCapacityProviderRequest$ === "object");
assert(typeof CreateCapacityProviderResponse$ === "object");
assert(typeof CreateCodeSigningConfigRequest$ === "object");
assert(typeof CreateCodeSigningConfigResponse$ === "object");
assert(typeof CreateEventSourceMappingRequest$ === "object");
assert(typeof CreateFunctionRequest$ === "object");
assert(typeof CreateFunctionUrlConfigRequest$ === "object");
assert(typeof CreateFunctionUrlConfigResponse$ === "object");
assert(typeof DeadLetterConfig$ === "object");
assert(typeof DeleteAliasRequest$ === "object");
assert(typeof DeleteCapacityProviderRequest$ === "object");
assert(typeof DeleteCapacityProviderResponse$ === "object");
assert(typeof DeleteCodeSigningConfigRequest$ === "object");
assert(typeof DeleteCodeSigningConfigResponse$ === "object");
assert(typeof DeleteEventSourceMappingRequest$ === "object");
assert(typeof DeleteFunctionCodeSigningConfigRequest$ === "object");
assert(typeof DeleteFunctionConcurrencyRequest$ === "object");
assert(typeof DeleteFunctionEventInvokeConfigRequest$ === "object");
assert(typeof DeleteFunctionRequest$ === "object");
assert(typeof DeleteFunctionResponse$ === "object");
assert(typeof DeleteFunctionUrlConfigRequest$ === "object");
assert(typeof DeleteLayerVersionRequest$ === "object");
assert(typeof DeleteProvisionedConcurrencyConfigRequest$ === "object");
assert(typeof DestinationConfig$ === "object");
assert(typeof DocumentDBEventSourceConfig$ === "object");
assert(typeof DurableConfig$ === "object");
assert(typeof Environment$ === "object");
assert(typeof EnvironmentError$ === "object");
assert(typeof EnvironmentResponse$ === "object");
assert(typeof EphemeralStorage$ === "object");
assert(typeof ErrorObject$ === "object");
assert(typeof Event$ === "object");
assert(typeof EventError$ === "object");
assert(typeof EventInput$ === "object");
assert(typeof EventResult$ === "object");
assert(typeof EventSourceMappingConfiguration$ === "object");
assert(typeof EventSourceMappingMetricsConfig$ === "object");
assert(typeof Execution$ === "object");
assert(typeof ExecutionDetails$ === "object");
assert(typeof ExecutionFailedDetails$ === "object");
assert(typeof ExecutionStartedDetails$ === "object");
assert(typeof ExecutionStoppedDetails$ === "object");
assert(typeof ExecutionSucceededDetails$ === "object");
assert(typeof ExecutionTimedOutDetails$ === "object");
assert(typeof FileSystemConfig$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FilterCriteria$ === "object");
assert(typeof FilterCriteriaError$ === "object");
assert(typeof FunctionCode$ === "object");
assert(typeof FunctionCodeLocation$ === "object");
assert(typeof FunctionConfiguration$ === "object");
assert(typeof FunctionEventInvokeConfig$ === "object");
assert(typeof FunctionScalingConfig$ === "object");
assert(typeof FunctionUrlConfig$ === "object");
assert(typeof FunctionVersionsByCapacityProviderListItem$ === "object");
assert(typeof GetAccountSettingsRequest$ === "object");
assert(typeof GetAccountSettingsResponse$ === "object");
assert(typeof GetAliasRequest$ === "object");
assert(typeof GetCapacityProviderRequest$ === "object");
assert(typeof GetCapacityProviderResponse$ === "object");
assert(typeof GetCodeSigningConfigRequest$ === "object");
assert(typeof GetCodeSigningConfigResponse$ === "object");
assert(typeof GetDurableExecutionHistoryRequest$ === "object");
assert(typeof GetDurableExecutionHistoryResponse$ === "object");
assert(typeof GetDurableExecutionRequest$ === "object");
assert(typeof GetDurableExecutionResponse$ === "object");
assert(typeof GetDurableExecutionStateRequest$ === "object");
assert(typeof GetDurableExecutionStateResponse$ === "object");
assert(typeof GetEventSourceMappingRequest$ === "object");
assert(typeof GetFunctionCodeSigningConfigRequest$ === "object");
assert(typeof GetFunctionCodeSigningConfigResponse$ === "object");
assert(typeof GetFunctionConcurrencyRequest$ === "object");
assert(typeof GetFunctionConcurrencyResponse$ === "object");
assert(typeof GetFunctionConfigurationRequest$ === "object");
assert(typeof GetFunctionEventInvokeConfigRequest$ === "object");
assert(typeof GetFunctionRecursionConfigRequest$ === "object");
assert(typeof GetFunctionRecursionConfigResponse$ === "object");
assert(typeof GetFunctionRequest$ === "object");
assert(typeof GetFunctionResponse$ === "object");
assert(typeof GetFunctionScalingConfigRequest$ === "object");
assert(typeof GetFunctionScalingConfigResponse$ === "object");
assert(typeof GetFunctionUrlConfigRequest$ === "object");
assert(typeof GetFunctionUrlConfigResponse$ === "object");
assert(typeof GetLayerVersionByArnRequest$ === "object");
assert(typeof GetLayerVersionPolicyRequest$ === "object");
assert(typeof GetLayerVersionPolicyResponse$ === "object");
assert(typeof GetLayerVersionRequest$ === "object");
assert(typeof GetLayerVersionResponse$ === "object");
assert(typeof GetPolicyRequest$ === "object");
assert(typeof GetPolicyResponse$ === "object");
assert(typeof GetProvisionedConcurrencyConfigRequest$ === "object");
assert(typeof GetProvisionedConcurrencyConfigResponse$ === "object");
assert(typeof GetRuntimeManagementConfigRequest$ === "object");
assert(typeof GetRuntimeManagementConfigResponse$ === "object");
assert(typeof ImageConfig$ === "object");
assert(typeof ImageConfigError$ === "object");
assert(typeof ImageConfigResponse$ === "object");
assert(typeof InstanceRequirements$ === "object");
assert(typeof InvocationCompletedDetails$ === "object");
assert(typeof InvocationRequest$ === "object");
assert(typeof InvocationResponse$ === "object");
assert(typeof InvokeAsyncRequest$ === "object");
assert(typeof InvokeAsyncResponse$ === "object");
assert(typeof InvokeResponseStreamUpdate$ === "object");
assert(typeof InvokeWithResponseStreamCompleteEvent$ === "object");
assert(typeof InvokeWithResponseStreamRequest$ === "object");
assert(typeof InvokeWithResponseStreamResponse$ === "object");
assert(typeof InvokeWithResponseStreamResponseEvent$ === "object");
assert(typeof KafkaSchemaRegistryAccessConfig$ === "object");
assert(typeof KafkaSchemaRegistryConfig$ === "object");
assert(typeof KafkaSchemaValidationConfig$ === "object");
assert(typeof LambdaManagedInstancesCapacityProviderConfig$ === "object");
assert(typeof Layer$ === "object");
assert(typeof LayersListItem$ === "object");
assert(typeof LayerVersionContentInput$ === "object");
assert(typeof LayerVersionContentOutput$ === "object");
assert(typeof LayerVersionsListItem$ === "object");
assert(typeof ListAliasesRequest$ === "object");
assert(typeof ListAliasesResponse$ === "object");
assert(typeof ListCapacityProvidersRequest$ === "object");
assert(typeof ListCapacityProvidersResponse$ === "object");
assert(typeof ListCodeSigningConfigsRequest$ === "object");
assert(typeof ListCodeSigningConfigsResponse$ === "object");
assert(typeof ListDurableExecutionsByFunctionRequest$ === "object");
assert(typeof ListDurableExecutionsByFunctionResponse$ === "object");
assert(typeof ListEventSourceMappingsRequest$ === "object");
assert(typeof ListEventSourceMappingsResponse$ === "object");
assert(typeof ListFunctionEventInvokeConfigsRequest$ === "object");
assert(typeof ListFunctionEventInvokeConfigsResponse$ === "object");
assert(typeof ListFunctionsByCodeSigningConfigRequest$ === "object");
assert(typeof ListFunctionsByCodeSigningConfigResponse$ === "object");
assert(typeof ListFunctionsRequest$ === "object");
assert(typeof ListFunctionsResponse$ === "object");
assert(typeof ListFunctionUrlConfigsRequest$ === "object");
assert(typeof ListFunctionUrlConfigsResponse$ === "object");
assert(typeof ListFunctionVersionsByCapacityProviderRequest$ === "object");
assert(typeof ListFunctionVersionsByCapacityProviderResponse$ === "object");
assert(typeof ListLayersRequest$ === "object");
assert(typeof ListLayersResponse$ === "object");
assert(typeof ListLayerVersionsRequest$ === "object");
assert(typeof ListLayerVersionsResponse$ === "object");
assert(typeof ListProvisionedConcurrencyConfigsRequest$ === "object");
assert(typeof ListProvisionedConcurrencyConfigsResponse$ === "object");
assert(typeof ListTagsRequest$ === "object");
assert(typeof ListTagsResponse$ === "object");
assert(typeof ListVersionsByFunctionRequest$ === "object");
assert(typeof ListVersionsByFunctionResponse$ === "object");
assert(typeof LoggingConfig$ === "object");
assert(typeof OnFailure$ === "object");
assert(typeof OnSuccess$ === "object");
assert(typeof Operation$ === "object");
assert(typeof OperationUpdate$ === "object");
assert(typeof ProvisionedConcurrencyConfigListItem$ === "object");
assert(typeof ProvisionedPollerConfig$ === "object");
assert(typeof PublishLayerVersionRequest$ === "object");
assert(typeof PublishLayerVersionResponse$ === "object");
assert(typeof PublishVersionRequest$ === "object");
assert(typeof PutFunctionCodeSigningConfigRequest$ === "object");
assert(typeof PutFunctionCodeSigningConfigResponse$ === "object");
assert(typeof PutFunctionConcurrencyRequest$ === "object");
assert(typeof PutFunctionEventInvokeConfigRequest$ === "object");
assert(typeof PutFunctionRecursionConfigRequest$ === "object");
assert(typeof PutFunctionRecursionConfigResponse$ === "object");
assert(typeof PutFunctionScalingConfigRequest$ === "object");
assert(typeof PutFunctionScalingConfigResponse$ === "object");
assert(typeof PutProvisionedConcurrencyConfigRequest$ === "object");
assert(typeof PutProvisionedConcurrencyConfigResponse$ === "object");
assert(typeof PutRuntimeManagementConfigRequest$ === "object");
assert(typeof PutRuntimeManagementConfigResponse$ === "object");
assert(typeof RemoveLayerVersionPermissionRequest$ === "object");
assert(typeof RemovePermissionRequest$ === "object");
assert(typeof RetryDetails$ === "object");
assert(typeof RuntimeVersionConfig$ === "object");
assert(typeof RuntimeVersionError$ === "object");
assert(typeof ScalingConfig$ === "object");
assert(typeof SelfManagedEventSource$ === "object");
assert(typeof SelfManagedKafkaEventSourceConfig$ === "object");
assert(typeof SendDurableExecutionCallbackFailureRequest$ === "object");
assert(typeof SendDurableExecutionCallbackFailureResponse$ === "object");
assert(typeof SendDurableExecutionCallbackHeartbeatRequest$ === "object");
assert(typeof SendDurableExecutionCallbackHeartbeatResponse$ === "object");
assert(typeof SendDurableExecutionCallbackSuccessRequest$ === "object");
assert(typeof SendDurableExecutionCallbackSuccessResponse$ === "object");
assert(typeof SnapStart$ === "object");
assert(typeof SnapStartResponse$ === "object");
assert(typeof SourceAccessConfiguration$ === "object");
assert(typeof StepDetails$ === "object");
assert(typeof StepFailedDetails$ === "object");
assert(typeof StepOptions$ === "object");
assert(typeof StepStartedDetails$ === "object");
assert(typeof StepSucceededDetails$ === "object");
assert(typeof StopDurableExecutionRequest$ === "object");
assert(typeof StopDurableExecutionResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagsError$ === "object");
assert(typeof TargetTrackingScalingPolicy$ === "object");
assert(typeof TenancyConfig$ === "object");
assert(typeof TraceHeader$ === "object");
assert(typeof TracingConfig$ === "object");
assert(typeof TracingConfigResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateAliasRequest$ === "object");
assert(typeof UpdateCapacityProviderRequest$ === "object");
assert(typeof UpdateCapacityProviderResponse$ === "object");
assert(typeof UpdateCodeSigningConfigRequest$ === "object");
assert(typeof UpdateCodeSigningConfigResponse$ === "object");
assert(typeof UpdateEventSourceMappingRequest$ === "object");
assert(typeof UpdateFunctionCodeRequest$ === "object");
assert(typeof UpdateFunctionConfigurationRequest$ === "object");
assert(typeof UpdateFunctionEventInvokeConfigRequest$ === "object");
assert(typeof UpdateFunctionUrlConfigRequest$ === "object");
assert(typeof UpdateFunctionUrlConfigResponse$ === "object");
assert(typeof VpcConfig$ === "object");
assert(typeof VpcConfigResponse$ === "object");
assert(typeof WaitCancelledDetails$ === "object");
assert(typeof WaitDetails$ === "object");
assert(typeof WaitOptions$ === "object");
assert(typeof WaitStartedDetails$ === "object");
assert(typeof WaitSucceededDetails$ === "object");
// enums
assert(typeof ApplicationLogLevel === "object");
assert(typeof Architecture === "object");
assert(typeof CapacityProviderPredefinedMetricType === "object");
assert(typeof CapacityProviderScalingMode === "object");
assert(typeof CapacityProviderState === "object");
assert(typeof CodeSigningPolicy === "object");
assert(typeof EndPointType === "object");
assert(typeof EventSourceMappingMetric === "object");
assert(typeof EventSourcePosition === "object");
assert(typeof EventType === "object");
assert(typeof ExecutionStatus === "object");
assert(typeof FullDocument === "object");
assert(typeof FunctionResponseType === "object");
assert(typeof FunctionUrlAuthType === "object");
assert(typeof FunctionVersion === "object");
assert(typeof FunctionVersionLatestPublished === "object");
assert(typeof InvocationType === "object");
assert(typeof InvokeMode === "object");
assert(typeof KafkaSchemaRegistryAuthType === "object");
assert(typeof KafkaSchemaValidationAttribute === "object");
assert(typeof LastUpdateStatus === "object");
assert(typeof LastUpdateStatusReasonCode === "object");
assert(typeof LogFormat === "object");
assert(typeof LogType === "object");
assert(typeof OperationAction === "object");
assert(typeof OperationStatus === "object");
assert(typeof OperationType === "object");
assert(typeof PackageType === "object");
assert(typeof ProvisionedConcurrencyStatusEnum === "object");
assert(typeof RecursiveLoop === "object");
assert(typeof ResponseStreamingInvocationType === "object");
assert(typeof Runtime === "object");
assert(typeof SchemaRegistryEventRecordFormat === "object");
assert(typeof SnapStartApplyOn === "object");
assert(typeof SnapStartOptimizationStatus === "object");
assert(typeof SourceAccessType === "object");
assert(typeof State === "object");
assert(typeof StateReasonCode === "object");
assert(typeof SystemLogLevel === "object");
assert(typeof TenantIsolationMode === "object");
assert(typeof ThrottleReason === "object");
assert(typeof TracingMode === "object");
assert(typeof UpdateRuntimeOn === "object");
// errors
assert(CallbackTimeoutException.prototype instanceof LambdaServiceException);
assert(typeof CallbackTimeoutException$ === "object");
assert(CapacityProviderLimitExceededException.prototype instanceof LambdaServiceException);
assert(typeof CapacityProviderLimitExceededException$ === "object");
assert(CodeSigningConfigNotFoundException.prototype instanceof LambdaServiceException);
assert(typeof CodeSigningConfigNotFoundException$ === "object");
assert(CodeStorageExceededException.prototype instanceof LambdaServiceException);
assert(typeof CodeStorageExceededException$ === "object");
assert(CodeVerificationFailedException.prototype instanceof LambdaServiceException);
assert(typeof CodeVerificationFailedException$ === "object");
assert(DurableExecutionAlreadyStartedException.prototype instanceof LambdaServiceException);
assert(typeof DurableExecutionAlreadyStartedException$ === "object");
assert(EC2AccessDeniedException.prototype instanceof LambdaServiceException);
assert(typeof EC2AccessDeniedException$ === "object");
assert(EC2ThrottledException.prototype instanceof LambdaServiceException);
assert(typeof EC2ThrottledException$ === "object");
assert(EC2UnexpectedException.prototype instanceof LambdaServiceException);
assert(typeof EC2UnexpectedException$ === "object");
assert(EFSIOException.prototype instanceof LambdaServiceException);
assert(typeof EFSIOException$ === "object");
assert(EFSMountConnectivityException.prototype instanceof LambdaServiceException);
assert(typeof EFSMountConnectivityException$ === "object");
assert(EFSMountFailureException.prototype instanceof LambdaServiceException);
assert(typeof EFSMountFailureException$ === "object");
assert(EFSMountTimeoutException.prototype instanceof LambdaServiceException);
assert(typeof EFSMountTimeoutException$ === "object");
assert(ENILimitReachedException.prototype instanceof LambdaServiceException);
assert(typeof ENILimitReachedException$ === "object");
assert(FunctionVersionsPerCapacityProviderLimitExceededException.prototype instanceof LambdaServiceException);
assert(typeof FunctionVersionsPerCapacityProviderLimitExceededException$ === "object");
assert(InvalidCodeSignatureException.prototype instanceof LambdaServiceException);
assert(typeof InvalidCodeSignatureException$ === "object");
assert(InvalidParameterValueException.prototype instanceof LambdaServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(InvalidRequestContentException.prototype instanceof LambdaServiceException);
assert(typeof InvalidRequestContentException$ === "object");
assert(InvalidRuntimeException.prototype instanceof LambdaServiceException);
assert(typeof InvalidRuntimeException$ === "object");
assert(InvalidSecurityGroupIDException.prototype instanceof LambdaServiceException);
assert(typeof InvalidSecurityGroupIDException$ === "object");
assert(InvalidSubnetIDException.prototype instanceof LambdaServiceException);
assert(typeof InvalidSubnetIDException$ === "object");
assert(InvalidZipFileException.prototype instanceof LambdaServiceException);
assert(typeof InvalidZipFileException$ === "object");
assert(KMSAccessDeniedException.prototype instanceof LambdaServiceException);
assert(typeof KMSAccessDeniedException$ === "object");
assert(KMSDisabledException.prototype instanceof LambdaServiceException);
assert(typeof KMSDisabledException$ === "object");
assert(KMSInvalidStateException.prototype instanceof LambdaServiceException);
assert(typeof KMSInvalidStateException$ === "object");
assert(KMSNotFoundException.prototype instanceof LambdaServiceException);
assert(typeof KMSNotFoundException$ === "object");
assert(NoPublishedVersionException.prototype instanceof LambdaServiceException);
assert(typeof NoPublishedVersionException$ === "object");
assert(PolicyLengthExceededException.prototype instanceof LambdaServiceException);
assert(typeof PolicyLengthExceededException$ === "object");
assert(PreconditionFailedException.prototype instanceof LambdaServiceException);
assert(typeof PreconditionFailedException$ === "object");
assert(ProvisionedConcurrencyConfigNotFoundException.prototype instanceof LambdaServiceException);
assert(typeof ProvisionedConcurrencyConfigNotFoundException$ === "object");
assert(RecursiveInvocationException.prototype instanceof LambdaServiceException);
assert(typeof RecursiveInvocationException$ === "object");
assert(RequestTooLargeException.prototype instanceof LambdaServiceException);
assert(typeof RequestTooLargeException$ === "object");
assert(ResourceConflictException.prototype instanceof LambdaServiceException);
assert(typeof ResourceConflictException$ === "object");
assert(ResourceInUseException.prototype instanceof LambdaServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof LambdaServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceNotReadyException.prototype instanceof LambdaServiceException);
assert(typeof ResourceNotReadyException$ === "object");
assert(SerializedRequestEntityTooLargeException.prototype instanceof LambdaServiceException);
assert(typeof SerializedRequestEntityTooLargeException$ === "object");
assert(ServiceException.prototype instanceof LambdaServiceException);
assert(typeof ServiceException$ === "object");
assert(SnapStartException.prototype instanceof LambdaServiceException);
assert(typeof SnapStartException$ === "object");
assert(SnapStartNotReadyException.prototype instanceof LambdaServiceException);
assert(typeof SnapStartNotReadyException$ === "object");
assert(SnapStartTimeoutException.prototype instanceof LambdaServiceException);
assert(typeof SnapStartTimeoutException$ === "object");
assert(SubnetIPAddressLimitReachedException.prototype instanceof LambdaServiceException);
assert(typeof SubnetIPAddressLimitReachedException$ === "object");
assert(TooManyRequestsException.prototype instanceof LambdaServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(UnsupportedMediaTypeException.prototype instanceof LambdaServiceException);
assert(typeof UnsupportedMediaTypeException$ === "object");
assert(LambdaServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForFunctionActive === "function");
assert(typeof waitForFunctionActiveV2 === "function");
assert(typeof waitForFunctionExists === "function");
assert(typeof waitForFunctionUpdated === "function");
assert(typeof waitForFunctionUpdatedV2 === "function");
assert(typeof waitForPublishedVersionActive === "function");
assert(typeof waitUntilFunctionActive === "function");
assert(typeof waitUntilFunctionActiveV2 === "function");
assert(typeof waitUntilFunctionExists === "function");
assert(typeof waitUntilFunctionUpdated === "function");
assert(typeof waitUntilFunctionUpdatedV2 === "function");
assert(typeof waitUntilPublishedVersionActive === "function");
// paginators
assert(typeof paginateGetDurableExecutionHistory === "function");
assert(typeof paginateGetDurableExecutionState === "function");
assert(typeof paginateListAliases === "function");
assert(typeof paginateListCapacityProviders === "function");
assert(typeof paginateListCodeSigningConfigs === "function");
assert(typeof paginateListDurableExecutionsByFunction === "function");
assert(typeof paginateListEventSourceMappings === "function");
assert(typeof paginateListFunctionEventInvokeConfigs === "function");
assert(typeof paginateListFunctionUrlConfigs === "function");
assert(typeof paginateListFunctionVersionsByCapacityProvider === "function");
assert(typeof paginateListFunctions === "function");
assert(typeof paginateListFunctionsByCodeSigningConfig === "function");
assert(typeof paginateListLayerVersions === "function");
assert(typeof paginateListLayers === "function");
assert(typeof paginateListProvisionedConcurrencyConfigs === "function");
assert(typeof paginateListVersionsByFunction === "function");
console.log(`Lambda index test passed.`);
