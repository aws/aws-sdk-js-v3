import {
  AddLayerVersionPermissionCommand,
  AddPermissionCommand,
  ApplicationLogLevel,
  Architecture,
  CodeSigningPolicy,
  CreateAliasCommand,
  CreateCodeSigningConfigCommand,
  CreateEventSourceMappingCommand,
  CreateFunctionCommand,
  CreateFunctionUrlConfigCommand,
  DeleteAliasCommand,
  DeleteCodeSigningConfigCommand,
  DeleteEventSourceMappingCommand,
  DeleteFunctionCodeSigningConfigCommand,
  DeleteFunctionCommand,
  DeleteFunctionConcurrencyCommand,
  DeleteFunctionEventInvokeConfigCommand,
  DeleteFunctionUrlConfigCommand,
  DeleteLayerVersionCommand,
  DeleteProvisionedConcurrencyConfigCommand,
  EndPointType,
  EventSourceMappingMetric,
  EventSourcePosition,
  FullDocument,
  FunctionResponseType,
  FunctionUrlAuthType,
  FunctionVersion,
  GetAccountSettingsCommand,
  GetAliasCommand,
  GetCodeSigningConfigCommand,
  GetEventSourceMappingCommand,
  GetFunctionCodeSigningConfigCommand,
  GetFunctionCommand,
  GetFunctionConcurrencyCommand,
  GetFunctionConfigurationCommand,
  GetFunctionEventInvokeConfigCommand,
  GetFunctionRecursionConfigCommand,
  GetFunctionUrlConfigCommand,
  GetLayerVersionByArnCommand,
  GetLayerVersionCommand,
  GetLayerVersionPolicyCommand,
  GetPolicyCommand,
  GetProvisionedConcurrencyConfigCommand,
  GetRuntimeManagementConfigCommand,
  InvocationType,
  InvokeAsyncCommand,
  InvokeCommand,
  InvokeMode,
  InvokeWithResponseStreamCommand,
  KafkaSchemaRegistryAuthType,
  KafkaSchemaValidationAttribute,
  Lambda,
  LambdaClient,
  LambdaServiceException,
  LastUpdateStatus,
  LastUpdateStatusReasonCode,
  ListAliasesCommand,
  ListCodeSigningConfigsCommand,
  ListEventSourceMappingsCommand,
  ListFunctionEventInvokeConfigsCommand,
  ListFunctionUrlConfigsCommand,
  ListFunctionsByCodeSigningConfigCommand,
  ListFunctionsCommand,
  ListLayerVersionsCommand,
  ListLayersCommand,
  ListProvisionedConcurrencyConfigsCommand,
  ListTagsCommand,
  ListVersionsByFunctionCommand,
  LogFormat,
  LogType,
  PackageType,
  ProvisionedConcurrencyStatusEnum,
  PublishLayerVersionCommand,
  PublishVersionCommand,
  PutFunctionCodeSigningConfigCommand,
  PutFunctionConcurrencyCommand,
  PutFunctionEventInvokeConfigCommand,
  PutFunctionRecursionConfigCommand,
  PutProvisionedConcurrencyConfigCommand,
  PutRuntimeManagementConfigCommand,
  RecursiveLoop,
  RemoveLayerVersionPermissionCommand,
  RemovePermissionCommand,
  ResponseStreamingInvocationType,
  Runtime,
  SchemaRegistryEventRecordFormat,
  SnapStartApplyOn,
  SnapStartOptimizationStatus,
  SourceAccessType,
  State,
  StateReasonCode,
  SystemLogLevel,
  TagResourceCommand,
  TenantIsolationMode,
  TracingMode,
  UntagResourceCommand,
  UpdateAliasCommand,
  UpdateCodeSigningConfigCommand,
  UpdateEventSourceMappingCommand,
  UpdateFunctionCodeCommand,
  UpdateFunctionConfigurationCommand,
  UpdateFunctionEventInvokeConfigCommand,
  UpdateFunctionUrlConfigCommand,
  UpdateRuntimeOn,
  paginateListAliases,
  paginateListCodeSigningConfigs,
  paginateListEventSourceMappings,
  paginateListFunctionEventInvokeConfigs,
  paginateListFunctionUrlConfigs,
  paginateListFunctions,
  paginateListFunctionsByCodeSigningConfig,
  paginateListLayerVersions,
  paginateListLayers,
  paginateListProvisionedConcurrencyConfigs,
  paginateListVersionsByFunction,
  waitForFunctionActive,
  waitForFunctionActiveV2,
  waitForFunctionExists,
  waitForFunctionUpdated,
  waitForFunctionUpdatedV2,
  waitForPublishedVersionActive,
  waitUntilFunctionActive,
  waitUntilFunctionActiveV2,
  waitUntilFunctionExists,
  waitUntilFunctionUpdated,
  waitUntilFunctionUpdatedV2,
  waitUntilPublishedVersionActive,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LambdaClient === "function")
assert(typeof Lambda === "function")
// commands
assert(typeof AddLayerVersionPermissionCommand === "function")
assert(typeof AddPermissionCommand === "function")
assert(typeof CreateAliasCommand === "function")
assert(typeof CreateCodeSigningConfigCommand === "function")
assert(typeof CreateEventSourceMappingCommand === "function")
assert(typeof CreateFunctionCommand === "function")
assert(typeof CreateFunctionUrlConfigCommand === "function")
assert(typeof DeleteAliasCommand === "function")
assert(typeof DeleteCodeSigningConfigCommand === "function")
assert(typeof DeleteEventSourceMappingCommand === "function")
assert(typeof DeleteFunctionCommand === "function")
assert(typeof DeleteFunctionCodeSigningConfigCommand === "function")
assert(typeof DeleteFunctionConcurrencyCommand === "function")
assert(typeof DeleteFunctionEventInvokeConfigCommand === "function")
assert(typeof DeleteFunctionUrlConfigCommand === "function")
assert(typeof DeleteLayerVersionCommand === "function")
assert(typeof DeleteProvisionedConcurrencyConfigCommand === "function")
assert(typeof GetAccountSettingsCommand === "function")
assert(typeof GetAliasCommand === "function")
assert(typeof GetCodeSigningConfigCommand === "function")
assert(typeof GetEventSourceMappingCommand === "function")
assert(typeof GetFunctionCommand === "function")
assert(typeof GetFunctionCodeSigningConfigCommand === "function")
assert(typeof GetFunctionConcurrencyCommand === "function")
assert(typeof GetFunctionConfigurationCommand === "function")
assert(typeof GetFunctionEventInvokeConfigCommand === "function")
assert(typeof GetFunctionRecursionConfigCommand === "function")
assert(typeof GetFunctionUrlConfigCommand === "function")
assert(typeof GetLayerVersionCommand === "function")
assert(typeof GetLayerVersionByArnCommand === "function")
assert(typeof GetLayerVersionPolicyCommand === "function")
assert(typeof GetPolicyCommand === "function")
assert(typeof GetProvisionedConcurrencyConfigCommand === "function")
assert(typeof GetRuntimeManagementConfigCommand === "function")
assert(typeof InvokeCommand === "function")
assert(typeof InvokeAsyncCommand === "function")
assert(typeof InvokeWithResponseStreamCommand === "function")
assert(typeof ListAliasesCommand === "function")
assert(typeof ListCodeSigningConfigsCommand === "function")
assert(typeof ListEventSourceMappingsCommand === "function")
assert(typeof ListFunctionEventInvokeConfigsCommand === "function")
assert(typeof ListFunctionsCommand === "function")
assert(typeof ListFunctionsByCodeSigningConfigCommand === "function")
assert(typeof ListFunctionUrlConfigsCommand === "function")
assert(typeof ListLayersCommand === "function")
assert(typeof ListLayerVersionsCommand === "function")
assert(typeof ListProvisionedConcurrencyConfigsCommand === "function")
assert(typeof ListTagsCommand === "function")
assert(typeof ListVersionsByFunctionCommand === "function")
assert(typeof PublishLayerVersionCommand === "function")
assert(typeof PublishVersionCommand === "function")
assert(typeof PutFunctionCodeSigningConfigCommand === "function")
assert(typeof PutFunctionConcurrencyCommand === "function")
assert(typeof PutFunctionEventInvokeConfigCommand === "function")
assert(typeof PutFunctionRecursionConfigCommand === "function")
assert(typeof PutProvisionedConcurrencyConfigCommand === "function")
assert(typeof PutRuntimeManagementConfigCommand === "function")
assert(typeof RemoveLayerVersionPermissionCommand === "function")
assert(typeof RemovePermissionCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAliasCommand === "function")
assert(typeof UpdateCodeSigningConfigCommand === "function")
assert(typeof UpdateEventSourceMappingCommand === "function")
assert(typeof UpdateFunctionCodeCommand === "function")
assert(typeof UpdateFunctionConfigurationCommand === "function")
assert(typeof UpdateFunctionEventInvokeConfigCommand === "function")
assert(typeof UpdateFunctionUrlConfigCommand === "function")
// enums
assert(typeof ApplicationLogLevel === "object");
assert(typeof Architecture === "object");
assert(typeof CodeSigningPolicy === "object");
assert(typeof EndPointType === "object");
assert(typeof EventSourceMappingMetric === "object");
assert(typeof EventSourcePosition === "object");
assert(typeof FullDocument === "object");
assert(typeof FunctionResponseType === "object");
assert(typeof FunctionUrlAuthType === "object");
assert(typeof FunctionVersion === "object");
assert(typeof InvocationType === "object");
assert(typeof InvokeMode === "object");
assert(typeof KafkaSchemaRegistryAuthType === "object");
assert(typeof KafkaSchemaValidationAttribute === "object");
assert(typeof LastUpdateStatus === "object");
assert(typeof LastUpdateStatusReasonCode === "object");
assert(typeof LogFormat === "object");
assert(typeof LogType === "object");
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
assert(typeof TracingMode === "object");
assert(typeof UpdateRuntimeOn === "object");
// errors
assert(LambdaServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForFunctionActive === "function")
assert(typeof waitForFunctionActiveV2 === "function")
assert(typeof waitForFunctionExists === "function")
assert(typeof waitForFunctionUpdated === "function")
assert(typeof waitForFunctionUpdatedV2 === "function")
assert(typeof waitForPublishedVersionActive === "function")
assert(typeof waitUntilFunctionActive === "function")
assert(typeof waitUntilFunctionActiveV2 === "function")
assert(typeof waitUntilFunctionExists === "function")
assert(typeof waitUntilFunctionUpdated === "function")
assert(typeof waitUntilFunctionUpdatedV2 === "function")
assert(typeof waitUntilPublishedVersionActive === "function")
// paginators
assert(typeof paginateListAliases === "function")
assert(typeof paginateListCodeSigningConfigs === "function")
assert(typeof paginateListEventSourceMappings === "function")
assert(typeof paginateListFunctionEventInvokeConfigs === "function")
assert(typeof paginateListFunctionUrlConfigs === "function")
assert(typeof paginateListFunctions === "function")
assert(typeof paginateListFunctionsByCodeSigningConfig === "function")
assert(typeof paginateListLayerVersions === "function")
assert(typeof paginateListLayers === "function")
assert(typeof paginateListProvisionedConcurrencyConfigs === "function")
assert(typeof paginateListVersionsByFunction === "function")
console.log(`Lambda index test passed.`);
