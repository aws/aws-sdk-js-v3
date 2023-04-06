// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AddLayerVersionPermissionCommandInput,
  AddLayerVersionPermissionCommandOutput,
} from "../commands/AddLayerVersionPermissionCommand";
import { AddPermissionCommandInput, AddPermissionCommandOutput } from "../commands/AddPermissionCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "../commands/CreateAliasCommand";
import {
  CreateCodeSigningConfigCommandInput,
  CreateCodeSigningConfigCommandOutput,
} from "../commands/CreateCodeSigningConfigCommand";
import {
  CreateEventSourceMappingCommandInput,
  CreateEventSourceMappingCommandOutput,
} from "../commands/CreateEventSourceMappingCommand";
import { CreateFunctionCommandInput, CreateFunctionCommandOutput } from "../commands/CreateFunctionCommand";
import {
  CreateFunctionUrlConfigCommandInput,
  CreateFunctionUrlConfigCommandOutput,
} from "../commands/CreateFunctionUrlConfigCommand";
import { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "../commands/DeleteAliasCommand";
import {
  DeleteCodeSigningConfigCommandInput,
  DeleteCodeSigningConfigCommandOutput,
} from "../commands/DeleteCodeSigningConfigCommand";
import {
  DeleteEventSourceMappingCommandInput,
  DeleteEventSourceMappingCommandOutput,
} from "../commands/DeleteEventSourceMappingCommand";
import {
  DeleteFunctionCodeSigningConfigCommandInput,
  DeleteFunctionCodeSigningConfigCommandOutput,
} from "../commands/DeleteFunctionCodeSigningConfigCommand";
import { DeleteFunctionCommandInput, DeleteFunctionCommandOutput } from "../commands/DeleteFunctionCommand";
import {
  DeleteFunctionConcurrencyCommandInput,
  DeleteFunctionConcurrencyCommandOutput,
} from "../commands/DeleteFunctionConcurrencyCommand";
import {
  DeleteFunctionEventInvokeConfigCommandInput,
  DeleteFunctionEventInvokeConfigCommandOutput,
} from "../commands/DeleteFunctionEventInvokeConfigCommand";
import {
  DeleteFunctionUrlConfigCommandInput,
  DeleteFunctionUrlConfigCommandOutput,
} from "../commands/DeleteFunctionUrlConfigCommand";
import { DeleteLayerVersionCommandInput, DeleteLayerVersionCommandOutput } from "../commands/DeleteLayerVersionCommand";
import {
  DeleteProvisionedConcurrencyConfigCommandInput,
  DeleteProvisionedConcurrencyConfigCommandOutput,
} from "../commands/DeleteProvisionedConcurrencyConfigCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "../commands/GetAccountSettingsCommand";
import { GetAliasCommandInput, GetAliasCommandOutput } from "../commands/GetAliasCommand";
import {
  GetCodeSigningConfigCommandInput,
  GetCodeSigningConfigCommandOutput,
} from "../commands/GetCodeSigningConfigCommand";
import {
  GetEventSourceMappingCommandInput,
  GetEventSourceMappingCommandOutput,
} from "../commands/GetEventSourceMappingCommand";
import {
  GetFunctionCodeSigningConfigCommandInput,
  GetFunctionCodeSigningConfigCommandOutput,
} from "../commands/GetFunctionCodeSigningConfigCommand";
import { GetFunctionCommandInput, GetFunctionCommandOutput } from "../commands/GetFunctionCommand";
import {
  GetFunctionConcurrencyCommandInput,
  GetFunctionConcurrencyCommandOutput,
} from "../commands/GetFunctionConcurrencyCommand";
import {
  GetFunctionConfigurationCommandInput,
  GetFunctionConfigurationCommandOutput,
} from "../commands/GetFunctionConfigurationCommand";
import {
  GetFunctionEventInvokeConfigCommandInput,
  GetFunctionEventInvokeConfigCommandOutput,
} from "../commands/GetFunctionEventInvokeConfigCommand";
import {
  GetFunctionUrlConfigCommandInput,
  GetFunctionUrlConfigCommandOutput,
} from "../commands/GetFunctionUrlConfigCommand";
import {
  GetLayerVersionByArnCommandInput,
  GetLayerVersionByArnCommandOutput,
} from "../commands/GetLayerVersionByArnCommand";
import { GetLayerVersionCommandInput, GetLayerVersionCommandOutput } from "../commands/GetLayerVersionCommand";
import {
  GetLayerVersionPolicyCommandInput,
  GetLayerVersionPolicyCommandOutput,
} from "../commands/GetLayerVersionPolicyCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "../commands/GetPolicyCommand";
import {
  GetProvisionedConcurrencyConfigCommandInput,
  GetProvisionedConcurrencyConfigCommandOutput,
} from "../commands/GetProvisionedConcurrencyConfigCommand";
import {
  GetRuntimeManagementConfigCommandInput,
  GetRuntimeManagementConfigCommandOutput,
} from "../commands/GetRuntimeManagementConfigCommand";
import { InvokeAsyncCommandInput, InvokeAsyncCommandOutput } from "../commands/InvokeAsyncCommand";
import { InvokeCommandInput, InvokeCommandOutput } from "../commands/InvokeCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import {
  ListCodeSigningConfigsCommandInput,
  ListCodeSigningConfigsCommandOutput,
} from "../commands/ListCodeSigningConfigsCommand";
import {
  ListEventSourceMappingsCommandInput,
  ListEventSourceMappingsCommandOutput,
} from "../commands/ListEventSourceMappingsCommand";
import {
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput,
} from "../commands/ListFunctionEventInvokeConfigsCommand";
import {
  ListFunctionsByCodeSigningConfigCommandInput,
  ListFunctionsByCodeSigningConfigCommandOutput,
} from "../commands/ListFunctionsByCodeSigningConfigCommand";
import { ListFunctionsCommandInput, ListFunctionsCommandOutput } from "../commands/ListFunctionsCommand";
import {
  ListFunctionUrlConfigsCommandInput,
  ListFunctionUrlConfigsCommandOutput,
} from "../commands/ListFunctionUrlConfigsCommand";
import { ListLayersCommandInput, ListLayersCommandOutput } from "../commands/ListLayersCommand";
import { ListLayerVersionsCommandInput, ListLayerVersionsCommandOutput } from "../commands/ListLayerVersionsCommand";
import {
  ListProvisionedConcurrencyConfigsCommandInput,
  ListProvisionedConcurrencyConfigsCommandOutput,
} from "../commands/ListProvisionedConcurrencyConfigsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import {
  ListVersionsByFunctionCommandInput,
  ListVersionsByFunctionCommandOutput,
} from "../commands/ListVersionsByFunctionCommand";
import {
  PublishLayerVersionCommandInput,
  PublishLayerVersionCommandOutput,
} from "../commands/PublishLayerVersionCommand";
import { PublishVersionCommandInput, PublishVersionCommandOutput } from "../commands/PublishVersionCommand";
import {
  PutFunctionCodeSigningConfigCommandInput,
  PutFunctionCodeSigningConfigCommandOutput,
} from "../commands/PutFunctionCodeSigningConfigCommand";
import {
  PutFunctionConcurrencyCommandInput,
  PutFunctionConcurrencyCommandOutput,
} from "../commands/PutFunctionConcurrencyCommand";
import {
  PutFunctionEventInvokeConfigCommandInput,
  PutFunctionEventInvokeConfigCommandOutput,
} from "../commands/PutFunctionEventInvokeConfigCommand";
import {
  PutProvisionedConcurrencyConfigCommandInput,
  PutProvisionedConcurrencyConfigCommandOutput,
} from "../commands/PutProvisionedConcurrencyConfigCommand";
import {
  PutRuntimeManagementConfigCommandInput,
  PutRuntimeManagementConfigCommandOutput,
} from "../commands/PutRuntimeManagementConfigCommand";
import {
  RemoveLayerVersionPermissionCommandInput,
  RemoveLayerVersionPermissionCommandOutput,
} from "../commands/RemoveLayerVersionPermissionCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "../commands/RemovePermissionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAliasCommandInput, UpdateAliasCommandOutput } from "../commands/UpdateAliasCommand";
import {
  UpdateCodeSigningConfigCommandInput,
  UpdateCodeSigningConfigCommandOutput,
} from "../commands/UpdateCodeSigningConfigCommand";
import {
  UpdateEventSourceMappingCommandInput,
  UpdateEventSourceMappingCommandOutput,
} from "../commands/UpdateEventSourceMappingCommand";
import { UpdateFunctionCodeCommandInput, UpdateFunctionCodeCommandOutput } from "../commands/UpdateFunctionCodeCommand";
import {
  UpdateFunctionConfigurationCommandInput,
  UpdateFunctionConfigurationCommandOutput,
} from "../commands/UpdateFunctionConfigurationCommand";
import {
  UpdateFunctionEventInvokeConfigCommandInput,
  UpdateFunctionEventInvokeConfigCommandOutput,
} from "../commands/UpdateFunctionEventInvokeConfigCommand";
import {
  UpdateFunctionUrlConfigCommandInput,
  UpdateFunctionUrlConfigCommandOutput,
} from "../commands/UpdateFunctionUrlConfigCommand";
import { LambdaServiceException as __BaseException } from "../models/LambdaServiceException";
import {
  AccountLimit,
  AccountUsage,
  AliasConfiguration,
  AliasRoutingConfiguration,
  AllowedPublishers,
  AmazonManagedKafkaEventSourceConfig,
  Architecture,
  CodeSigningConfig,
  CodeSigningConfigNotFoundException,
  CodeSigningPolicies,
  CodeStorageExceededException,
  CodeVerificationFailedException,
  Concurrency,
  Cors,
  DeadLetterConfig,
  DestinationConfig,
  DocumentDBEventSourceConfig,
  EC2AccessDeniedException,
  EC2ThrottledException,
  EC2UnexpectedException,
  EFSIOException,
  EFSMountConnectivityException,
  EFSMountFailureException,
  EFSMountTimeoutException,
  EndPointType,
  ENILimitReachedException,
  Environment,
  EnvironmentError,
  EnvironmentResponse,
  EphemeralStorage,
  EventSourceMappingConfiguration,
  FileSystemConfig,
  Filter,
  FilterCriteria,
  FunctionCode,
  FunctionCodeLocation,
  FunctionConfiguration,
  FunctionEventInvokeConfig,
  FunctionResponseType,
  FunctionUrlConfig,
  ImageConfig,
  ImageConfigError,
  ImageConfigResponse,
  InvalidCodeSignatureException,
  InvalidParameterValueException,
  InvalidRequestContentException,
  InvalidRuntimeException,
  InvalidSecurityGroupIDException,
  InvalidSubnetIDException,
  InvalidZipFileException,
  KMSAccessDeniedException,
  KMSDisabledException,
  KMSInvalidStateException,
  KMSNotFoundException,
  Layer,
  LayersListItem,
  LayerVersionContentInput,
  LayerVersionContentOutput,
  LayerVersionsListItem,
  OnFailure,
  OnSuccess,
  PolicyLengthExceededException,
  PreconditionFailedException,
  ProvisionedConcurrencyConfigListItem,
  ProvisionedConcurrencyConfigNotFoundException,
  RequestTooLargeException,
  ResourceConflictException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceNotReadyException,
  Runtime,
  RuntimeVersionConfig,
  RuntimeVersionError,
  ScalingConfig,
  SelfManagedEventSource,
  SelfManagedKafkaEventSourceConfig,
  ServiceException,
  SnapStart,
  SnapStartException,
  SnapStartNotReadyException,
  SnapStartResponse,
  SnapStartTimeoutException,
  SourceAccessConfiguration,
  SubnetIPAddressLimitReachedException,
  TooManyRequestsException,
  TracingConfig,
  TracingConfigResponse,
  UnsupportedMediaTypeException,
  VpcConfig,
  VpcConfigResponse,
} from "../models/models_0";

/**
 * serializeAws_restJson1AddLayerVersionPermissionCommand
 */
export const se_AddLayerVersionPermissionCommand = async (
  input: AddLayerVersionPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "LayerName", () => input.LayerName!, "{LayerName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VersionNumber",
    () => input.VersionNumber!.toString(),
    "{VersionNumber}",
    false
  );
  const query: any = map({
    RevisionId: [, input.RevisionId!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Action != null && { Action: input.Action }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.Principal != null && { Principal: input.Principal }),
    ...(input.StatementId != null && { StatementId: input.StatementId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1AddPermissionCommand
 */
export const se_AddPermissionCommand = async (
  input: AddPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/policy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, input.Qualifier!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Action != null && { Action: input.Action }),
    ...(input.EventSourceToken != null && { EventSourceToken: input.EventSourceToken }),
    ...(input.FunctionUrlAuthType != null && { FunctionUrlAuthType: input.FunctionUrlAuthType }),
    ...(input.Principal != null && { Principal: input.Principal }),
    ...(input.PrincipalOrgID != null && { PrincipalOrgID: input.PrincipalOrgID }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
    ...(input.SourceAccount != null && { SourceAccount: input.SourceAccount }),
    ...(input.SourceArn != null && { SourceArn: input.SourceArn }),
    ...(input.StatementId != null && { StatementId: input.StatementId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CreateAliasCommand
 */
export const se_CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/aliases";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FunctionVersion != null && { FunctionVersion: input.FunctionVersion }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoutingConfig != null && { RoutingConfig: se_AliasRoutingConfiguration(input.RoutingConfig, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateCodeSigningConfigCommand
 */
export const se_CreateCodeSigningConfigCommand = async (
  input: CreateCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-04-22/code-signing-configs";
  let body: any;
  body = JSON.stringify({
    ...(input.AllowedPublishers != null && {
      AllowedPublishers: se_AllowedPublishers(input.AllowedPublishers, context),
    }),
    ...(input.CodeSigningPolicies != null && {
      CodeSigningPolicies: se_CodeSigningPolicies(input.CodeSigningPolicies, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateEventSourceMappingCommand
 */
export const se_CreateEventSourceMappingCommand = async (
  input: CreateEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings";
  let body: any;
  body = JSON.stringify({
    ...(input.AmazonManagedKafkaEventSourceConfig != null && {
      AmazonManagedKafkaEventSourceConfig: se_AmazonManagedKafkaEventSourceConfig(
        input.AmazonManagedKafkaEventSourceConfig,
        context
      ),
    }),
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.BisectBatchOnFunctionError != null && { BisectBatchOnFunctionError: input.BisectBatchOnFunctionError }),
    ...(input.DestinationConfig != null && {
      DestinationConfig: se_DestinationConfig(input.DestinationConfig, context),
    }),
    ...(input.DocumentDBEventSourceConfig != null && {
      DocumentDBEventSourceConfig: se_DocumentDBEventSourceConfig(input.DocumentDBEventSourceConfig, context),
    }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.EventSourceArn != null && { EventSourceArn: input.EventSourceArn }),
    ...(input.FilterCriteria != null && { FilterCriteria: se_FilterCriteria(input.FilterCriteria, context) }),
    ...(input.FunctionName != null && { FunctionName: input.FunctionName }),
    ...(input.FunctionResponseTypes != null && {
      FunctionResponseTypes: se_FunctionResponseTypeList(input.FunctionResponseTypes, context),
    }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.MaximumRecordAgeInSeconds != null && { MaximumRecordAgeInSeconds: input.MaximumRecordAgeInSeconds }),
    ...(input.MaximumRetryAttempts != null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
    ...(input.ParallelizationFactor != null && { ParallelizationFactor: input.ParallelizationFactor }),
    ...(input.Queues != null && { Queues: se_Queues(input.Queues, context) }),
    ...(input.ScalingConfig != null && { ScalingConfig: se_ScalingConfig(input.ScalingConfig, context) }),
    ...(input.SelfManagedEventSource != null && {
      SelfManagedEventSource: se_SelfManagedEventSource(input.SelfManagedEventSource, context),
    }),
    ...(input.SelfManagedKafkaEventSourceConfig != null && {
      SelfManagedKafkaEventSourceConfig: se_SelfManagedKafkaEventSourceConfig(
        input.SelfManagedKafkaEventSourceConfig,
        context
      ),
    }),
    ...(input.SourceAccessConfigurations != null && {
      SourceAccessConfigurations: se_SourceAccessConfigurations(input.SourceAccessConfigurations, context),
    }),
    ...(input.StartingPosition != null && { StartingPosition: input.StartingPosition }),
    ...(input.StartingPositionTimestamp != null && {
      StartingPositionTimestamp: Math.round(input.StartingPositionTimestamp.getTime() / 1000),
    }),
    ...(input.Topics != null && { Topics: se_Topics(input.Topics, context) }),
    ...(input.TumblingWindowInSeconds != null && { TumblingWindowInSeconds: input.TumblingWindowInSeconds }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateFunctionCommand
 */
export const se_CreateFunctionCommand = async (
  input: CreateFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions";
  let body: any;
  body = JSON.stringify({
    ...(input.Architectures != null && { Architectures: se_ArchitecturesList(input.Architectures, context) }),
    ...(input.Code != null && { Code: se_FunctionCode(input.Code, context) }),
    ...(input.CodeSigningConfigArn != null && { CodeSigningConfigArn: input.CodeSigningConfigArn }),
    ...(input.DeadLetterConfig != null && { DeadLetterConfig: se_DeadLetterConfig(input.DeadLetterConfig, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Environment != null && { Environment: se_Environment(input.Environment, context) }),
    ...(input.EphemeralStorage != null && { EphemeralStorage: se_EphemeralStorage(input.EphemeralStorage, context) }),
    ...(input.FileSystemConfigs != null && {
      FileSystemConfigs: se_FileSystemConfigList(input.FileSystemConfigs, context),
    }),
    ...(input.FunctionName != null && { FunctionName: input.FunctionName }),
    ...(input.Handler != null && { Handler: input.Handler }),
    ...(input.ImageConfig != null && { ImageConfig: se_ImageConfig(input.ImageConfig, context) }),
    ...(input.KMSKeyArn != null && { KMSKeyArn: input.KMSKeyArn }),
    ...(input.Layers != null && { Layers: se_LayerList(input.Layers, context) }),
    ...(input.MemorySize != null && { MemorySize: input.MemorySize }),
    ...(input.PackageType != null && { PackageType: input.PackageType }),
    ...(input.Publish != null && { Publish: input.Publish }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.Runtime != null && { Runtime: input.Runtime }),
    ...(input.SnapStart != null && { SnapStart: se_SnapStart(input.SnapStart, context) }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
    ...(input.TracingConfig != null && { TracingConfig: se_TracingConfig(input.TracingConfig, context) }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfig(input.VpcConfig, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateFunctionUrlConfigCommand
 */
export const se_CreateFunctionUrlConfigCommand = async (
  input: CreateFunctionUrlConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/url";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, input.Qualifier!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.AuthType != null && { AuthType: input.AuthType }),
    ...(input.Cors != null && { Cors: se_Cors(input.Cors, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteAliasCommand
 */
export const se_DeleteAliasCommand = async (
  input: DeleteAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteCodeSigningConfigCommand
 */
export const se_DeleteCodeSigningConfigCommand = async (
  input: DeleteCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CodeSigningConfigArn",
    () => input.CodeSigningConfigArn!,
    "{CodeSigningConfigArn}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteEventSourceMappingCommand
 */
export const se_DeleteEventSourceMappingCommand = async (
  input: DeleteEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings/{UUID}";
  resolvedPath = __resolvedPath(resolvedPath, input, "UUID", () => input.UUID!, "{UUID}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteFunctionCommand
 */
export const se_DeleteFunctionCommand = async (
  input: DeleteFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions/{FunctionName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, input.Qualifier!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteFunctionCodeSigningConfigCommand
 */
export const se_DeleteFunctionCodeSigningConfigCommand = async (
  input: DeleteFunctionCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-06-30/functions/{FunctionName}/code-signing-config";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteFunctionConcurrencyCommand
 */
export const se_DeleteFunctionConcurrencyCommand = async (
  input: DeleteFunctionConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2017-10-31/functions/{FunctionName}/concurrency";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteFunctionEventInvokeConfigCommand
 */
export const se_DeleteFunctionEventInvokeConfigCommand = async (
  input: DeleteFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-25/functions/{FunctionName}/event-invoke-config";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, input.Qualifier!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteFunctionUrlConfigCommand
 */
export const se_DeleteFunctionUrlConfigCommand = async (
  input: DeleteFunctionUrlConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/url";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, input.Qualifier!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteLayerVersionCommand
 */
export const se_DeleteLayerVersionCommand = async (
  input: DeleteLayerVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}";
  resolvedPath = __resolvedPath(resolvedPath, input, "LayerName", () => input.LayerName!, "{LayerName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VersionNumber",
    () => input.VersionNumber!.toString(),
    "{VersionNumber}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand
 */
export const se_DeleteProvisionedConcurrencyConfigCommand = async (
  input: DeleteProvisionedConcurrencyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, __expectNonNull(input.Qualifier!, `Qualifier`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetAccountSettingsCommand
 */
export const se_GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2016-08-19/account-settings";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetAliasCommand
 */
export const se_GetAliasCommand = async (
  input: GetAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetCodeSigningConfigCommand
 */
export const se_GetCodeSigningConfigCommand = async (
  input: GetCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CodeSigningConfigArn",
    () => input.CodeSigningConfigArn!,
    "{CodeSigningConfigArn}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetEventSourceMappingCommand
 */
export const se_GetEventSourceMappingCommand = async (
  input: GetEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings/{UUID}";
  resolvedPath = __resolvedPath(resolvedPath, input, "UUID", () => input.UUID!, "{UUID}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetFunctionCommand
 */
export const se_GetFunctionCommand = async (
  input: GetFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions/{FunctionName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, input.Qualifier!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetFunctionCodeSigningConfigCommand
 */
export const se_GetFunctionCodeSigningConfigCommand = async (
  input: GetFunctionCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-06-30/functions/{FunctionName}/code-signing-config";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetFunctionConcurrencyCommand
 */
export const se_GetFunctionConcurrencyCommand = async (
  input: GetFunctionConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-30/functions/{FunctionName}/concurrency";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetFunctionConfigurationCommand
 */
export const se_GetFunctionConfigurationCommand = async (
  input: GetFunctionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, input.Qualifier!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetFunctionEventInvokeConfigCommand
 */
export const se_GetFunctionEventInvokeConfigCommand = async (
  input: GetFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-25/functions/{FunctionName}/event-invoke-config";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, input.Qualifier!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetFunctionUrlConfigCommand
 */
export const se_GetFunctionUrlConfigCommand = async (
  input: GetFunctionUrlConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/url";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, input.Qualifier!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetLayerVersionCommand
 */
export const se_GetLayerVersionCommand = async (
  input: GetLayerVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}";
  resolvedPath = __resolvedPath(resolvedPath, input, "LayerName", () => input.LayerName!, "{LayerName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VersionNumber",
    () => input.VersionNumber!.toString(),
    "{VersionNumber}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetLayerVersionByArnCommand
 */
export const se_GetLayerVersionByArnCommand = async (
  input: GetLayerVersionByArnCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2018-10-31/layers";
  const query: any = map({
    find: [, "LayerVersion"],
    Arn: [, __expectNonNull(input.Arn!, `Arn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetLayerVersionPolicyCommand
 */
export const se_GetLayerVersionPolicyCommand = async (
  input: GetLayerVersionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "LayerName", () => input.LayerName!, "{LayerName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VersionNumber",
    () => input.VersionNumber!.toString(),
    "{VersionNumber}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetPolicyCommand
 */
export const se_GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/policy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, input.Qualifier!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetProvisionedConcurrencyConfigCommand
 */
export const se_GetProvisionedConcurrencyConfigCommand = async (
  input: GetProvisionedConcurrencyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, __expectNonNull(input.Qualifier!, `Qualifier`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetRuntimeManagementConfigCommand
 */
export const se_GetRuntimeManagementConfigCommand = async (
  input: GetRuntimeManagementConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-07-20/functions/{FunctionName}/runtime-management-config";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, input.Qualifier!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1InvokeCommand
 */
export const se_InvokeCommand = async (input: InvokeCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    "x-amz-invocation-type": input.InvocationType!,
    "x-amz-log-type": input.LogType!,
    "x-amz-client-context": input.ClientContext!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/invocations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, input.Qualifier!],
  });
  let body: any;
  if (input.Payload !== undefined) {
    body = input.Payload;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1InvokeAsyncCommand
 */
export const se_InvokeAsyncCommand = async (
  input: InvokeAsyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2014-11-13/functions/{FunctionName}/invoke-async";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  let body: any;
  if (input.InvokeArgs !== undefined) {
    body = input.InvokeArgs;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListAliasesCommand
 */
export const se_ListAliasesCommand = async (
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/aliases";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    FunctionVersion: [, input.FunctionVersion!],
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListCodeSigningConfigsCommand
 */
export const se_ListCodeSigningConfigsCommand = async (
  input: ListCodeSigningConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-04-22/code-signing-configs";
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListEventSourceMappingsCommand
 */
export const se_ListEventSourceMappingsCommand = async (
  input: ListEventSourceMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings";
  const query: any = map({
    EventSourceArn: [, input.EventSourceArn!],
    FunctionName: [, input.FunctionName!],
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListFunctionEventInvokeConfigsCommand
 */
export const se_ListFunctionEventInvokeConfigsCommand = async (
  input: ListFunctionEventInvokeConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-25/functions/{FunctionName}/event-invoke-config/list";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListFunctionsCommand
 */
export const se_ListFunctionsCommand = async (
  input: ListFunctionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions";
  const query: any = map({
    MasterRegion: [, input.MasterRegion!],
    FunctionVersion: [, input.FunctionVersion!],
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListFunctionsByCodeSigningConfigCommand
 */
export const se_ListFunctionsByCodeSigningConfigCommand = async (
  input: ListFunctionsByCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CodeSigningConfigArn",
    () => input.CodeSigningConfigArn!,
    "{CodeSigningConfigArn}",
    false
  );
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListFunctionUrlConfigsCommand
 */
export const se_ListFunctionUrlConfigsCommand = async (
  input: ListFunctionUrlConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/urls";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListLayersCommand
 */
export const se_ListLayersCommand = async (
  input: ListLayersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2018-10-31/layers";
  const query: any = map({
    CompatibleRuntime: [, input.CompatibleRuntime!],
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
    CompatibleArchitecture: [, input.CompatibleArchitecture!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListLayerVersionsCommand
 */
export const se_ListLayerVersionsCommand = async (
  input: ListLayerVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2018-10-31/layers/{LayerName}/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "LayerName", () => input.LayerName!, "{LayerName}", false);
  const query: any = map({
    CompatibleRuntime: [, input.CompatibleRuntime!],
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
    CompatibleArchitecture: [, input.CompatibleArchitecture!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListProvisionedConcurrencyConfigsCommand
 */
export const se_ListProvisionedConcurrencyConfigsCommand = async (
  input: ListProvisionedConcurrencyConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    List: [, "ALL"],
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-03-31/tags/{Resource}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Resource", () => input.Resource!, "{Resource}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListVersionsByFunctionCommand
 */
export const se_ListVersionsByFunctionCommand = async (
  input: ListVersionsByFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Marker: [, input.Marker!],
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1PublishLayerVersionCommand
 */
export const se_PublishLayerVersionCommand = async (
  input: PublishLayerVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2018-10-31/layers/{LayerName}/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "LayerName", () => input.LayerName!, "{LayerName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.CompatibleArchitectures != null && {
      CompatibleArchitectures: se_CompatibleArchitectures(input.CompatibleArchitectures, context),
    }),
    ...(input.CompatibleRuntimes != null && {
      CompatibleRuntimes: se_CompatibleRuntimes(input.CompatibleRuntimes, context),
    }),
    ...(input.Content != null && { Content: se_LayerVersionContentInput(input.Content, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LicenseInfo != null && { LicenseInfo: input.LicenseInfo }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PublishVersionCommand
 */
export const se_PublishVersionCommand = async (
  input: PublishVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.CodeSha256 != null && { CodeSha256: input.CodeSha256 }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutFunctionCodeSigningConfigCommand
 */
export const se_PutFunctionCodeSigningConfigCommand = async (
  input: PutFunctionCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-06-30/functions/{FunctionName}/code-signing-config";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.CodeSigningConfigArn != null && { CodeSigningConfigArn: input.CodeSigningConfigArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutFunctionConcurrencyCommand
 */
export const se_PutFunctionConcurrencyCommand = async (
  input: PutFunctionConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2017-10-31/functions/{FunctionName}/concurrency";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ReservedConcurrentExecutions != null && {
      ReservedConcurrentExecutions: input.ReservedConcurrentExecutions,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutFunctionEventInvokeConfigCommand
 */
export const se_PutFunctionEventInvokeConfigCommand = async (
  input: PutFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-25/functions/{FunctionName}/event-invoke-config";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, input.Qualifier!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.DestinationConfig != null && {
      DestinationConfig: se_DestinationConfig(input.DestinationConfig, context),
    }),
    ...(input.MaximumEventAgeInSeconds != null && { MaximumEventAgeInSeconds: input.MaximumEventAgeInSeconds }),
    ...(input.MaximumRetryAttempts != null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1PutProvisionedConcurrencyConfigCommand
 */
export const se_PutProvisionedConcurrencyConfigCommand = async (
  input: PutProvisionedConcurrencyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, __expectNonNull(input.Qualifier!, `Qualifier`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.ProvisionedConcurrentExecutions != null && {
      ProvisionedConcurrentExecutions: input.ProvisionedConcurrentExecutions,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1PutRuntimeManagementConfigCommand
 */
export const se_PutRuntimeManagementConfigCommand = async (
  input: PutRuntimeManagementConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-07-20/functions/{FunctionName}/runtime-management-config";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, input.Qualifier!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.RuntimeVersionArn != null && { RuntimeVersionArn: input.RuntimeVersionArn }),
    ...(input.UpdateRuntimeOn != null && { UpdateRuntimeOn: input.UpdateRuntimeOn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1RemoveLayerVersionPermissionCommand
 */
export const se_RemoveLayerVersionPermissionCommand = async (
  input: RemoveLayerVersionPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "LayerName", () => input.LayerName!, "{LayerName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VersionNumber",
    () => input.VersionNumber!.toString(),
    "{VersionNumber}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "StatementId", () => input.StatementId!, "{StatementId}", false);
  const query: any = map({
    RevisionId: [, input.RevisionId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1RemovePermissionCommand
 */
export const se_RemovePermissionCommand = async (
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/policy/{StatementId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "StatementId", () => input.StatementId!, "{StatementId}", false);
  const query: any = map({
    Qualifier: [, input.Qualifier!],
    RevisionId: [, input.RevisionId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-03-31/tags/{Resource}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Resource", () => input.Resource!, "{Resource}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2017-03-31/tags/{Resource}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Resource", () => input.Resource!, "{Resource}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateAliasCommand
 */
export const se_UpdateAliasCommand = async (
  input: UpdateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FunctionVersion != null && { FunctionVersion: input.FunctionVersion }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
    ...(input.RoutingConfig != null && { RoutingConfig: se_AliasRoutingConfiguration(input.RoutingConfig, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateCodeSigningConfigCommand
 */
export const se_UpdateCodeSigningConfigCommand = async (
  input: UpdateCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CodeSigningConfigArn",
    () => input.CodeSigningConfigArn!,
    "{CodeSigningConfigArn}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.AllowedPublishers != null && {
      AllowedPublishers: se_AllowedPublishers(input.AllowedPublishers, context),
    }),
    ...(input.CodeSigningPolicies != null && {
      CodeSigningPolicies: se_CodeSigningPolicies(input.CodeSigningPolicies, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateEventSourceMappingCommand
 */
export const se_UpdateEventSourceMappingCommand = async (
  input: UpdateEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/event-source-mappings/{UUID}";
  resolvedPath = __resolvedPath(resolvedPath, input, "UUID", () => input.UUID!, "{UUID}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.BatchSize != null && { BatchSize: input.BatchSize }),
    ...(input.BisectBatchOnFunctionError != null && { BisectBatchOnFunctionError: input.BisectBatchOnFunctionError }),
    ...(input.DestinationConfig != null && {
      DestinationConfig: se_DestinationConfig(input.DestinationConfig, context),
    }),
    ...(input.DocumentDBEventSourceConfig != null && {
      DocumentDBEventSourceConfig: se_DocumentDBEventSourceConfig(input.DocumentDBEventSourceConfig, context),
    }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.FilterCriteria != null && { FilterCriteria: se_FilterCriteria(input.FilterCriteria, context) }),
    ...(input.FunctionName != null && { FunctionName: input.FunctionName }),
    ...(input.FunctionResponseTypes != null && {
      FunctionResponseTypes: se_FunctionResponseTypeList(input.FunctionResponseTypes, context),
    }),
    ...(input.MaximumBatchingWindowInSeconds != null && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
    }),
    ...(input.MaximumRecordAgeInSeconds != null && { MaximumRecordAgeInSeconds: input.MaximumRecordAgeInSeconds }),
    ...(input.MaximumRetryAttempts != null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
    ...(input.ParallelizationFactor != null && { ParallelizationFactor: input.ParallelizationFactor }),
    ...(input.ScalingConfig != null && { ScalingConfig: se_ScalingConfig(input.ScalingConfig, context) }),
    ...(input.SourceAccessConfigurations != null && {
      SourceAccessConfigurations: se_SourceAccessConfigurations(input.SourceAccessConfigurations, context),
    }),
    ...(input.TumblingWindowInSeconds != null && { TumblingWindowInSeconds: input.TumblingWindowInSeconds }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateFunctionCodeCommand
 */
export const se_UpdateFunctionCodeCommand = async (
  input: UpdateFunctionCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-03-31/functions/{FunctionName}/code";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Architectures != null && { Architectures: se_ArchitecturesList(input.Architectures, context) }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.ImageUri != null && { ImageUri: input.ImageUri }),
    ...(input.Publish != null && { Publish: input.Publish }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key != null && { S3Key: input.S3Key }),
    ...(input.S3ObjectVersion != null && { S3ObjectVersion: input.S3ObjectVersion }),
    ...(input.ZipFile != null && { ZipFile: context.base64Encoder(input.ZipFile) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateFunctionConfigurationCommand
 */
export const se_UpdateFunctionConfigurationCommand = async (
  input: UpdateFunctionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-03-31/functions/{FunctionName}/configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.DeadLetterConfig != null && { DeadLetterConfig: se_DeadLetterConfig(input.DeadLetterConfig, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Environment != null && { Environment: se_Environment(input.Environment, context) }),
    ...(input.EphemeralStorage != null && { EphemeralStorage: se_EphemeralStorage(input.EphemeralStorage, context) }),
    ...(input.FileSystemConfigs != null && {
      FileSystemConfigs: se_FileSystemConfigList(input.FileSystemConfigs, context),
    }),
    ...(input.Handler != null && { Handler: input.Handler }),
    ...(input.ImageConfig != null && { ImageConfig: se_ImageConfig(input.ImageConfig, context) }),
    ...(input.KMSKeyArn != null && { KMSKeyArn: input.KMSKeyArn }),
    ...(input.Layers != null && { Layers: se_LayerList(input.Layers, context) }),
    ...(input.MemorySize != null && { MemorySize: input.MemorySize }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.Runtime != null && { Runtime: input.Runtime }),
    ...(input.SnapStart != null && { SnapStart: se_SnapStart(input.SnapStart, context) }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
    ...(input.TracingConfig != null && { TracingConfig: se_TracingConfig(input.TracingConfig, context) }),
    ...(input.VpcConfig != null && { VpcConfig: se_VpcConfig(input.VpcConfig, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateFunctionEventInvokeConfigCommand
 */
export const se_UpdateFunctionEventInvokeConfigCommand = async (
  input: UpdateFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2019-09-25/functions/{FunctionName}/event-invoke-config";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, input.Qualifier!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.DestinationConfig != null && {
      DestinationConfig: se_DestinationConfig(input.DestinationConfig, context),
    }),
    ...(input.MaximumEventAgeInSeconds != null && { MaximumEventAgeInSeconds: input.MaximumEventAgeInSeconds }),
    ...(input.MaximumRetryAttempts != null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateFunctionUrlConfigCommand
 */
export const se_UpdateFunctionUrlConfigCommand = async (
  input: UpdateFunctionUrlConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-10-31/functions/{FunctionName}/url";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FunctionName",
    () => input.FunctionName!,
    "{FunctionName}",
    false
  );
  const query: any = map({
    Qualifier: [, input.Qualifier!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.AuthType != null && { AuthType: input.AuthType }),
    ...(input.Cors != null && { Cors: se_Cors(input.Cors, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * deserializeAws_restJson1AddLayerVersionPermissionCommand
 */
export const de_AddLayerVersionPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddLayerVersionPermissionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_AddLayerVersionPermissionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RevisionId != null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.Statement != null) {
    contents.Statement = __expectString(data.Statement);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AddLayerVersionPermissionCommandError
 */
const de_AddLayerVersionPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddLayerVersionPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "PolicyLengthExceededException":
    case "com.amazonaws.lambda#PolicyLengthExceededException":
      throw await de_PolicyLengthExceededExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1AddPermissionCommand
 */
export const de_AddPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPermissionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_AddPermissionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Statement != null) {
    contents.Statement = __expectString(data.Statement);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AddPermissionCommandError
 */
const de_AddPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "PolicyLengthExceededException":
    case "com.amazonaws.lambda#PolicyLengthExceededException":
      throw await de_PolicyLengthExceededExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateAliasCommand
 */
export const de_CreateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AliasArn != null) {
    contents.AliasArn = __expectString(data.AliasArn);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.FunctionVersion != null) {
    contents.FunctionVersion = __expectString(data.FunctionVersion);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RevisionId != null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.RoutingConfig != null) {
    contents.RoutingConfig = de_AliasRoutingConfiguration(data.RoutingConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAliasCommandError
 */
const de_CreateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateCodeSigningConfigCommand
 */
export const de_CreateCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateCodeSigningConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeSigningConfig != null) {
    contents.CodeSigningConfig = de_CodeSigningConfig(data.CodeSigningConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateCodeSigningConfigCommandError
 */
const de_CreateCodeSigningConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCodeSigningConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateEventSourceMappingCommand
 */
export const de_CreateEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CreateEventSourceMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AmazonManagedKafkaEventSourceConfig != null) {
    contents.AmazonManagedKafkaEventSourceConfig = de_AmazonManagedKafkaEventSourceConfig(
      data.AmazonManagedKafkaEventSourceConfig,
      context
    );
  }
  if (data.BatchSize != null) {
    contents.BatchSize = __expectInt32(data.BatchSize);
  }
  if (data.BisectBatchOnFunctionError != null) {
    contents.BisectBatchOnFunctionError = __expectBoolean(data.BisectBatchOnFunctionError);
  }
  if (data.DestinationConfig != null) {
    contents.DestinationConfig = de_DestinationConfig(data.DestinationConfig, context);
  }
  if (data.DocumentDBEventSourceConfig != null) {
    contents.DocumentDBEventSourceConfig = de_DocumentDBEventSourceConfig(data.DocumentDBEventSourceConfig, context);
  }
  if (data.EventSourceArn != null) {
    contents.EventSourceArn = __expectString(data.EventSourceArn);
  }
  if (data.FilterCriteria != null) {
    contents.FilterCriteria = de_FilterCriteria(data.FilterCriteria, context);
  }
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionResponseTypes != null) {
    contents.FunctionResponseTypes = de_FunctionResponseTypeList(data.FunctionResponseTypes, context);
  }
  if (data.LastModified != null) {
    contents.LastModified = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModified)));
  }
  if (data.LastProcessingResult != null) {
    contents.LastProcessingResult = __expectString(data.LastProcessingResult);
  }
  if (data.MaximumBatchingWindowInSeconds != null) {
    contents.MaximumBatchingWindowInSeconds = __expectInt32(data.MaximumBatchingWindowInSeconds);
  }
  if (data.MaximumRecordAgeInSeconds != null) {
    contents.MaximumRecordAgeInSeconds = __expectInt32(data.MaximumRecordAgeInSeconds);
  }
  if (data.MaximumRetryAttempts != null) {
    contents.MaximumRetryAttempts = __expectInt32(data.MaximumRetryAttempts);
  }
  if (data.ParallelizationFactor != null) {
    contents.ParallelizationFactor = __expectInt32(data.ParallelizationFactor);
  }
  if (data.Queues != null) {
    contents.Queues = de_Queues(data.Queues, context);
  }
  if (data.ScalingConfig != null) {
    contents.ScalingConfig = de_ScalingConfig(data.ScalingConfig, context);
  }
  if (data.SelfManagedEventSource != null) {
    contents.SelfManagedEventSource = de_SelfManagedEventSource(data.SelfManagedEventSource, context);
  }
  if (data.SelfManagedKafkaEventSourceConfig != null) {
    contents.SelfManagedKafkaEventSourceConfig = de_SelfManagedKafkaEventSourceConfig(
      data.SelfManagedKafkaEventSourceConfig,
      context
    );
  }
  if (data.SourceAccessConfigurations != null) {
    contents.SourceAccessConfigurations = de_SourceAccessConfigurations(data.SourceAccessConfigurations, context);
  }
  if (data.StartingPosition != null) {
    contents.StartingPosition = __expectString(data.StartingPosition);
  }
  if (data.StartingPositionTimestamp != null) {
    contents.StartingPositionTimestamp = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.StartingPositionTimestamp))
    );
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateTransitionReason != null) {
    contents.StateTransitionReason = __expectString(data.StateTransitionReason);
  }
  if (data.Topics != null) {
    contents.Topics = de_Topics(data.Topics, context);
  }
  if (data.TumblingWindowInSeconds != null) {
    contents.TumblingWindowInSeconds = __expectInt32(data.TumblingWindowInSeconds);
  }
  if (data.UUID != null) {
    contents.UUID = __expectString(data.UUID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateEventSourceMappingCommandError
 */
const de_CreateEventSourceMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSourceMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateFunctionCommand
 */
export const de_CreateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Architectures != null) {
    contents.Architectures = de_ArchitecturesList(data.Architectures, context);
  }
  if (data.CodeSha256 != null) {
    contents.CodeSha256 = __expectString(data.CodeSha256);
  }
  if (data.CodeSize != null) {
    contents.CodeSize = __expectLong(data.CodeSize);
  }
  if (data.DeadLetterConfig != null) {
    contents.DeadLetterConfig = de_DeadLetterConfig(data.DeadLetterConfig, context);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Environment != null) {
    contents.Environment = de_EnvironmentResponse(data.Environment, context);
  }
  if (data.EphemeralStorage != null) {
    contents.EphemeralStorage = de_EphemeralStorage(data.EphemeralStorage, context);
  }
  if (data.FileSystemConfigs != null) {
    contents.FileSystemConfigs = de_FileSystemConfigList(data.FileSystemConfigs, context);
  }
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionName != null) {
    contents.FunctionName = __expectString(data.FunctionName);
  }
  if (data.Handler != null) {
    contents.Handler = __expectString(data.Handler);
  }
  if (data.ImageConfigResponse != null) {
    contents.ImageConfigResponse = de_ImageConfigResponse(data.ImageConfigResponse, context);
  }
  if (data.KMSKeyArn != null) {
    contents.KMSKeyArn = __expectString(data.KMSKeyArn);
  }
  if (data.LastModified != null) {
    contents.LastModified = __expectString(data.LastModified);
  }
  if (data.LastUpdateStatus != null) {
    contents.LastUpdateStatus = __expectString(data.LastUpdateStatus);
  }
  if (data.LastUpdateStatusReason != null) {
    contents.LastUpdateStatusReason = __expectString(data.LastUpdateStatusReason);
  }
  if (data.LastUpdateStatusReasonCode != null) {
    contents.LastUpdateStatusReasonCode = __expectString(data.LastUpdateStatusReasonCode);
  }
  if (data.Layers != null) {
    contents.Layers = de_LayersReferenceList(data.Layers, context);
  }
  if (data.MasterArn != null) {
    contents.MasterArn = __expectString(data.MasterArn);
  }
  if (data.MemorySize != null) {
    contents.MemorySize = __expectInt32(data.MemorySize);
  }
  if (data.PackageType != null) {
    contents.PackageType = __expectString(data.PackageType);
  }
  if (data.RevisionId != null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.Role != null) {
    contents.Role = __expectString(data.Role);
  }
  if (data.Runtime != null) {
    contents.Runtime = __expectString(data.Runtime);
  }
  if (data.RuntimeVersionConfig != null) {
    contents.RuntimeVersionConfig = de_RuntimeVersionConfig(data.RuntimeVersionConfig, context);
  }
  if (data.SigningJobArn != null) {
    contents.SigningJobArn = __expectString(data.SigningJobArn);
  }
  if (data.SigningProfileVersionArn != null) {
    contents.SigningProfileVersionArn = __expectString(data.SigningProfileVersionArn);
  }
  if (data.SnapStart != null) {
    contents.SnapStart = de_SnapStartResponse(data.SnapStart, context);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateReason != null) {
    contents.StateReason = __expectString(data.StateReason);
  }
  if (data.StateReasonCode != null) {
    contents.StateReasonCode = __expectString(data.StateReasonCode);
  }
  if (data.Timeout != null) {
    contents.Timeout = __expectInt32(data.Timeout);
  }
  if (data.TracingConfig != null) {
    contents.TracingConfig = de_TracingConfigResponse(data.TracingConfig, context);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  if (data.VpcConfig != null) {
    contents.VpcConfig = de_VpcConfigResponse(data.VpcConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateFunctionCommandError
 */
const de_CreateFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeSigningConfigNotFoundException":
    case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
      throw await de_CodeSigningConfigNotFoundExceptionRes(parsedOutput, context);
    case "CodeStorageExceededException":
    case "com.amazonaws.lambda#CodeStorageExceededException":
      throw await de_CodeStorageExceededExceptionRes(parsedOutput, context);
    case "CodeVerificationFailedException":
    case "com.amazonaws.lambda#CodeVerificationFailedException":
      throw await de_CodeVerificationFailedExceptionRes(parsedOutput, context);
    case "InvalidCodeSignatureException":
    case "com.amazonaws.lambda#InvalidCodeSignatureException":
      throw await de_InvalidCodeSignatureExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateFunctionUrlConfigCommand
 */
export const de_CreateFunctionUrlConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionUrlConfigCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateFunctionUrlConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AuthType != null) {
    contents.AuthType = __expectString(data.AuthType);
  }
  if (data.Cors != null) {
    contents.Cors = de_Cors(data.Cors, context);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectString(data.CreationTime);
  }
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionUrl != null) {
    contents.FunctionUrl = __expectString(data.FunctionUrl);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateFunctionUrlConfigCommandError
 */
const de_CreateFunctionUrlConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionUrlConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteAliasCommand
 */
export const de_DeleteAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAliasCommandError
 */
const de_DeleteAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteCodeSigningConfigCommand
 */
export const de_DeleteCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteCodeSigningConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCodeSigningConfigCommandError
 */
const de_DeleteCodeSigningConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCodeSigningConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteEventSourceMappingCommand
 */
export const de_DeleteEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteEventSourceMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AmazonManagedKafkaEventSourceConfig != null) {
    contents.AmazonManagedKafkaEventSourceConfig = de_AmazonManagedKafkaEventSourceConfig(
      data.AmazonManagedKafkaEventSourceConfig,
      context
    );
  }
  if (data.BatchSize != null) {
    contents.BatchSize = __expectInt32(data.BatchSize);
  }
  if (data.BisectBatchOnFunctionError != null) {
    contents.BisectBatchOnFunctionError = __expectBoolean(data.BisectBatchOnFunctionError);
  }
  if (data.DestinationConfig != null) {
    contents.DestinationConfig = de_DestinationConfig(data.DestinationConfig, context);
  }
  if (data.DocumentDBEventSourceConfig != null) {
    contents.DocumentDBEventSourceConfig = de_DocumentDBEventSourceConfig(data.DocumentDBEventSourceConfig, context);
  }
  if (data.EventSourceArn != null) {
    contents.EventSourceArn = __expectString(data.EventSourceArn);
  }
  if (data.FilterCriteria != null) {
    contents.FilterCriteria = de_FilterCriteria(data.FilterCriteria, context);
  }
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionResponseTypes != null) {
    contents.FunctionResponseTypes = de_FunctionResponseTypeList(data.FunctionResponseTypes, context);
  }
  if (data.LastModified != null) {
    contents.LastModified = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModified)));
  }
  if (data.LastProcessingResult != null) {
    contents.LastProcessingResult = __expectString(data.LastProcessingResult);
  }
  if (data.MaximumBatchingWindowInSeconds != null) {
    contents.MaximumBatchingWindowInSeconds = __expectInt32(data.MaximumBatchingWindowInSeconds);
  }
  if (data.MaximumRecordAgeInSeconds != null) {
    contents.MaximumRecordAgeInSeconds = __expectInt32(data.MaximumRecordAgeInSeconds);
  }
  if (data.MaximumRetryAttempts != null) {
    contents.MaximumRetryAttempts = __expectInt32(data.MaximumRetryAttempts);
  }
  if (data.ParallelizationFactor != null) {
    contents.ParallelizationFactor = __expectInt32(data.ParallelizationFactor);
  }
  if (data.Queues != null) {
    contents.Queues = de_Queues(data.Queues, context);
  }
  if (data.ScalingConfig != null) {
    contents.ScalingConfig = de_ScalingConfig(data.ScalingConfig, context);
  }
  if (data.SelfManagedEventSource != null) {
    contents.SelfManagedEventSource = de_SelfManagedEventSource(data.SelfManagedEventSource, context);
  }
  if (data.SelfManagedKafkaEventSourceConfig != null) {
    contents.SelfManagedKafkaEventSourceConfig = de_SelfManagedKafkaEventSourceConfig(
      data.SelfManagedKafkaEventSourceConfig,
      context
    );
  }
  if (data.SourceAccessConfigurations != null) {
    contents.SourceAccessConfigurations = de_SourceAccessConfigurations(data.SourceAccessConfigurations, context);
  }
  if (data.StartingPosition != null) {
    contents.StartingPosition = __expectString(data.StartingPosition);
  }
  if (data.StartingPositionTimestamp != null) {
    contents.StartingPositionTimestamp = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.StartingPositionTimestamp))
    );
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateTransitionReason != null) {
    contents.StateTransitionReason = __expectString(data.StateTransitionReason);
  }
  if (data.Topics != null) {
    contents.Topics = de_Topics(data.Topics, context);
  }
  if (data.TumblingWindowInSeconds != null) {
    contents.TumblingWindowInSeconds = __expectInt32(data.TumblingWindowInSeconds);
  }
  if (data.UUID != null) {
    contents.UUID = __expectString(data.UUID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEventSourceMappingCommandError
 */
const de_DeleteEventSourceMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSourceMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.lambda#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteFunctionCommand
 */
export const de_DeleteFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFunctionCommandError
 */
const de_DeleteFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommand
 */
export const de_DeleteFunctionCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteFunctionCodeSigningConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommandError
 */
const de_DeleteFunctionCodeSigningConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCodeSigningConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeSigningConfigNotFoundException":
    case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
      throw await de_CodeSigningConfigNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteFunctionConcurrencyCommand
 */
export const de_DeleteFunctionConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionConcurrencyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteFunctionConcurrencyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFunctionConcurrencyCommandError
 */
const de_DeleteFunctionConcurrencyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionConcurrencyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommand
 */
export const de_DeleteFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteFunctionEventInvokeConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommandError
 */
const de_DeleteFunctionEventInvokeConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionEventInvokeConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteFunctionUrlConfigCommand
 */
export const de_DeleteFunctionUrlConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionUrlConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteFunctionUrlConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFunctionUrlConfigCommandError
 */
const de_DeleteFunctionUrlConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionUrlConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteLayerVersionCommand
 */
export const de_DeleteLayerVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLayerVersionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteLayerVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLayerVersionCommandError
 */
const de_DeleteLayerVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLayerVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand
 */
export const de_DeleteProvisionedConcurrencyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisionedConcurrencyConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteProvisionedConcurrencyConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommandError
 */
const de_DeleteProvisionedConcurrencyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisionedConcurrencyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAccountSettingsCommand
 */
export const de_GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAccountSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccountLimit != null) {
    contents.AccountLimit = de_AccountLimit(data.AccountLimit, context);
  }
  if (data.AccountUsage != null) {
    contents.AccountUsage = de_AccountUsage(data.AccountUsage, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAccountSettingsCommandError
 */
const de_GetAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetAliasCommand
 */
export const de_GetAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AliasArn != null) {
    contents.AliasArn = __expectString(data.AliasArn);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.FunctionVersion != null) {
    contents.FunctionVersion = __expectString(data.FunctionVersion);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RevisionId != null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.RoutingConfig != null) {
    contents.RoutingConfig = de_AliasRoutingConfiguration(data.RoutingConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAliasCommandError
 */
const de_GetAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetCodeSigningConfigCommand
 */
export const de_GetCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCodeSigningConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeSigningConfig != null) {
    contents.CodeSigningConfig = de_CodeSigningConfig(data.CodeSigningConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCodeSigningConfigCommandError
 */
const de_GetCodeSigningConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCodeSigningConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetEventSourceMappingCommand
 */
export const de_GetEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEventSourceMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AmazonManagedKafkaEventSourceConfig != null) {
    contents.AmazonManagedKafkaEventSourceConfig = de_AmazonManagedKafkaEventSourceConfig(
      data.AmazonManagedKafkaEventSourceConfig,
      context
    );
  }
  if (data.BatchSize != null) {
    contents.BatchSize = __expectInt32(data.BatchSize);
  }
  if (data.BisectBatchOnFunctionError != null) {
    contents.BisectBatchOnFunctionError = __expectBoolean(data.BisectBatchOnFunctionError);
  }
  if (data.DestinationConfig != null) {
    contents.DestinationConfig = de_DestinationConfig(data.DestinationConfig, context);
  }
  if (data.DocumentDBEventSourceConfig != null) {
    contents.DocumentDBEventSourceConfig = de_DocumentDBEventSourceConfig(data.DocumentDBEventSourceConfig, context);
  }
  if (data.EventSourceArn != null) {
    contents.EventSourceArn = __expectString(data.EventSourceArn);
  }
  if (data.FilterCriteria != null) {
    contents.FilterCriteria = de_FilterCriteria(data.FilterCriteria, context);
  }
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionResponseTypes != null) {
    contents.FunctionResponseTypes = de_FunctionResponseTypeList(data.FunctionResponseTypes, context);
  }
  if (data.LastModified != null) {
    contents.LastModified = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModified)));
  }
  if (data.LastProcessingResult != null) {
    contents.LastProcessingResult = __expectString(data.LastProcessingResult);
  }
  if (data.MaximumBatchingWindowInSeconds != null) {
    contents.MaximumBatchingWindowInSeconds = __expectInt32(data.MaximumBatchingWindowInSeconds);
  }
  if (data.MaximumRecordAgeInSeconds != null) {
    contents.MaximumRecordAgeInSeconds = __expectInt32(data.MaximumRecordAgeInSeconds);
  }
  if (data.MaximumRetryAttempts != null) {
    contents.MaximumRetryAttempts = __expectInt32(data.MaximumRetryAttempts);
  }
  if (data.ParallelizationFactor != null) {
    contents.ParallelizationFactor = __expectInt32(data.ParallelizationFactor);
  }
  if (data.Queues != null) {
    contents.Queues = de_Queues(data.Queues, context);
  }
  if (data.ScalingConfig != null) {
    contents.ScalingConfig = de_ScalingConfig(data.ScalingConfig, context);
  }
  if (data.SelfManagedEventSource != null) {
    contents.SelfManagedEventSource = de_SelfManagedEventSource(data.SelfManagedEventSource, context);
  }
  if (data.SelfManagedKafkaEventSourceConfig != null) {
    contents.SelfManagedKafkaEventSourceConfig = de_SelfManagedKafkaEventSourceConfig(
      data.SelfManagedKafkaEventSourceConfig,
      context
    );
  }
  if (data.SourceAccessConfigurations != null) {
    contents.SourceAccessConfigurations = de_SourceAccessConfigurations(data.SourceAccessConfigurations, context);
  }
  if (data.StartingPosition != null) {
    contents.StartingPosition = __expectString(data.StartingPosition);
  }
  if (data.StartingPositionTimestamp != null) {
    contents.StartingPositionTimestamp = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.StartingPositionTimestamp))
    );
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateTransitionReason != null) {
    contents.StateTransitionReason = __expectString(data.StateTransitionReason);
  }
  if (data.Topics != null) {
    contents.Topics = de_Topics(data.Topics, context);
  }
  if (data.TumblingWindowInSeconds != null) {
    contents.TumblingWindowInSeconds = __expectInt32(data.TumblingWindowInSeconds);
  }
  if (data.UUID != null) {
    contents.UUID = __expectString(data.UUID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetEventSourceMappingCommandError
 */
const de_GetEventSourceMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventSourceMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetFunctionCommand
 */
export const de_GetFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Code != null) {
    contents.Code = de_FunctionCodeLocation(data.Code, context);
  }
  if (data.Concurrency != null) {
    contents.Concurrency = de_Concurrency(data.Concurrency, context);
  }
  if (data.Configuration != null) {
    contents.Configuration = de_FunctionConfiguration(data.Configuration, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_Tags(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionCommandError
 */
const de_GetFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetFunctionCodeSigningConfigCommand
 */
export const de_GetFunctionCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFunctionCodeSigningConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeSigningConfigArn != null) {
    contents.CodeSigningConfigArn = __expectString(data.CodeSigningConfigArn);
  }
  if (data.FunctionName != null) {
    contents.FunctionName = __expectString(data.FunctionName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionCodeSigningConfigCommandError
 */
const de_GetFunctionCodeSigningConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCodeSigningConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetFunctionConcurrencyCommand
 */
export const de_GetFunctionConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionConcurrencyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFunctionConcurrencyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ReservedConcurrentExecutions != null) {
    contents.ReservedConcurrentExecutions = __expectInt32(data.ReservedConcurrentExecutions);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionConcurrencyCommandError
 */
const de_GetFunctionConcurrencyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionConcurrencyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetFunctionConfigurationCommand
 */
export const de_GetFunctionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFunctionConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Architectures != null) {
    contents.Architectures = de_ArchitecturesList(data.Architectures, context);
  }
  if (data.CodeSha256 != null) {
    contents.CodeSha256 = __expectString(data.CodeSha256);
  }
  if (data.CodeSize != null) {
    contents.CodeSize = __expectLong(data.CodeSize);
  }
  if (data.DeadLetterConfig != null) {
    contents.DeadLetterConfig = de_DeadLetterConfig(data.DeadLetterConfig, context);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Environment != null) {
    contents.Environment = de_EnvironmentResponse(data.Environment, context);
  }
  if (data.EphemeralStorage != null) {
    contents.EphemeralStorage = de_EphemeralStorage(data.EphemeralStorage, context);
  }
  if (data.FileSystemConfigs != null) {
    contents.FileSystemConfigs = de_FileSystemConfigList(data.FileSystemConfigs, context);
  }
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionName != null) {
    contents.FunctionName = __expectString(data.FunctionName);
  }
  if (data.Handler != null) {
    contents.Handler = __expectString(data.Handler);
  }
  if (data.ImageConfigResponse != null) {
    contents.ImageConfigResponse = de_ImageConfigResponse(data.ImageConfigResponse, context);
  }
  if (data.KMSKeyArn != null) {
    contents.KMSKeyArn = __expectString(data.KMSKeyArn);
  }
  if (data.LastModified != null) {
    contents.LastModified = __expectString(data.LastModified);
  }
  if (data.LastUpdateStatus != null) {
    contents.LastUpdateStatus = __expectString(data.LastUpdateStatus);
  }
  if (data.LastUpdateStatusReason != null) {
    contents.LastUpdateStatusReason = __expectString(data.LastUpdateStatusReason);
  }
  if (data.LastUpdateStatusReasonCode != null) {
    contents.LastUpdateStatusReasonCode = __expectString(data.LastUpdateStatusReasonCode);
  }
  if (data.Layers != null) {
    contents.Layers = de_LayersReferenceList(data.Layers, context);
  }
  if (data.MasterArn != null) {
    contents.MasterArn = __expectString(data.MasterArn);
  }
  if (data.MemorySize != null) {
    contents.MemorySize = __expectInt32(data.MemorySize);
  }
  if (data.PackageType != null) {
    contents.PackageType = __expectString(data.PackageType);
  }
  if (data.RevisionId != null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.Role != null) {
    contents.Role = __expectString(data.Role);
  }
  if (data.Runtime != null) {
    contents.Runtime = __expectString(data.Runtime);
  }
  if (data.RuntimeVersionConfig != null) {
    contents.RuntimeVersionConfig = de_RuntimeVersionConfig(data.RuntimeVersionConfig, context);
  }
  if (data.SigningJobArn != null) {
    contents.SigningJobArn = __expectString(data.SigningJobArn);
  }
  if (data.SigningProfileVersionArn != null) {
    contents.SigningProfileVersionArn = __expectString(data.SigningProfileVersionArn);
  }
  if (data.SnapStart != null) {
    contents.SnapStart = de_SnapStartResponse(data.SnapStart, context);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateReason != null) {
    contents.StateReason = __expectString(data.StateReason);
  }
  if (data.StateReasonCode != null) {
    contents.StateReasonCode = __expectString(data.StateReasonCode);
  }
  if (data.Timeout != null) {
    contents.Timeout = __expectInt32(data.Timeout);
  }
  if (data.TracingConfig != null) {
    contents.TracingConfig = de_TracingConfigResponse(data.TracingConfig, context);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  if (data.VpcConfig != null) {
    contents.VpcConfig = de_VpcConfigResponse(data.VpcConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionConfigurationCommandError
 */
const de_GetFunctionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetFunctionEventInvokeConfigCommand
 */
export const de_GetFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFunctionEventInvokeConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DestinationConfig != null) {
    contents.DestinationConfig = de_DestinationConfig(data.DestinationConfig, context);
  }
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.LastModified != null) {
    contents.LastModified = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModified)));
  }
  if (data.MaximumEventAgeInSeconds != null) {
    contents.MaximumEventAgeInSeconds = __expectInt32(data.MaximumEventAgeInSeconds);
  }
  if (data.MaximumRetryAttempts != null) {
    contents.MaximumRetryAttempts = __expectInt32(data.MaximumRetryAttempts);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionEventInvokeConfigCommandError
 */
const de_GetFunctionEventInvokeConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionEventInvokeConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetFunctionUrlConfigCommand
 */
export const de_GetFunctionUrlConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionUrlConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFunctionUrlConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AuthType != null) {
    contents.AuthType = __expectString(data.AuthType);
  }
  if (data.Cors != null) {
    contents.Cors = de_Cors(data.Cors, context);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectString(data.CreationTime);
  }
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionUrl != null) {
    contents.FunctionUrl = __expectString(data.FunctionUrl);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectString(data.LastModifiedTime);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionUrlConfigCommandError
 */
const de_GetFunctionUrlConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionUrlConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetLayerVersionCommand
 */
export const de_GetLayerVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLayerVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CompatibleArchitectures != null) {
    contents.CompatibleArchitectures = de_CompatibleArchitectures(data.CompatibleArchitectures, context);
  }
  if (data.CompatibleRuntimes != null) {
    contents.CompatibleRuntimes = de_CompatibleRuntimes(data.CompatibleRuntimes, context);
  }
  if (data.Content != null) {
    contents.Content = de_LayerVersionContentOutput(data.Content, context);
  }
  if (data.CreatedDate != null) {
    contents.CreatedDate = __expectString(data.CreatedDate);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LayerArn != null) {
    contents.LayerArn = __expectString(data.LayerArn);
  }
  if (data.LayerVersionArn != null) {
    contents.LayerVersionArn = __expectString(data.LayerVersionArn);
  }
  if (data.LicenseInfo != null) {
    contents.LicenseInfo = __expectString(data.LicenseInfo);
  }
  if (data.Version != null) {
    contents.Version = __expectLong(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLayerVersionCommandError
 */
const de_GetLayerVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetLayerVersionByArnCommand
 */
export const de_GetLayerVersionByArnCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionByArnCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLayerVersionByArnCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CompatibleArchitectures != null) {
    contents.CompatibleArchitectures = de_CompatibleArchitectures(data.CompatibleArchitectures, context);
  }
  if (data.CompatibleRuntimes != null) {
    contents.CompatibleRuntimes = de_CompatibleRuntimes(data.CompatibleRuntimes, context);
  }
  if (data.Content != null) {
    contents.Content = de_LayerVersionContentOutput(data.Content, context);
  }
  if (data.CreatedDate != null) {
    contents.CreatedDate = __expectString(data.CreatedDate);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LayerArn != null) {
    contents.LayerArn = __expectString(data.LayerArn);
  }
  if (data.LayerVersionArn != null) {
    contents.LayerVersionArn = __expectString(data.LayerVersionArn);
  }
  if (data.LicenseInfo != null) {
    contents.LicenseInfo = __expectString(data.LicenseInfo);
  }
  if (data.Version != null) {
    contents.Version = __expectLong(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLayerVersionByArnCommandError
 */
const de_GetLayerVersionByArnCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionByArnCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetLayerVersionPolicyCommand
 */
export const de_GetLayerVersionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLayerVersionPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Policy != null) {
    contents.Policy = __expectString(data.Policy);
  }
  if (data.RevisionId != null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLayerVersionPolicyCommandError
 */
const de_GetLayerVersionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetPolicyCommand
 */
export const de_GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Policy != null) {
    contents.Policy = __expectString(data.Policy);
  }
  if (data.RevisionId != null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPolicyCommandError
 */
const de_GetPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetProvisionedConcurrencyConfigCommand
 */
export const de_GetProvisionedConcurrencyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProvisionedConcurrencyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetProvisionedConcurrencyConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AllocatedProvisionedConcurrentExecutions != null) {
    contents.AllocatedProvisionedConcurrentExecutions = __expectInt32(data.AllocatedProvisionedConcurrentExecutions);
  }
  if (data.AvailableProvisionedConcurrentExecutions != null) {
    contents.AvailableProvisionedConcurrentExecutions = __expectInt32(data.AvailableProvisionedConcurrentExecutions);
  }
  if (data.LastModified != null) {
    contents.LastModified = __expectString(data.LastModified);
  }
  if (data.RequestedProvisionedConcurrentExecutions != null) {
    contents.RequestedProvisionedConcurrentExecutions = __expectInt32(data.RequestedProvisionedConcurrentExecutions);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusReason != null) {
    contents.StatusReason = __expectString(data.StatusReason);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetProvisionedConcurrencyConfigCommandError
 */
const de_GetProvisionedConcurrencyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProvisionedConcurrencyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ProvisionedConcurrencyConfigNotFoundException":
    case "com.amazonaws.lambda#ProvisionedConcurrencyConfigNotFoundException":
      throw await de_ProvisionedConcurrencyConfigNotFoundExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetRuntimeManagementConfigCommand
 */
export const de_GetRuntimeManagementConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuntimeManagementConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRuntimeManagementConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.RuntimeVersionArn != null) {
    contents.RuntimeVersionArn = __expectString(data.RuntimeVersionArn);
  }
  if (data.UpdateRuntimeOn != null) {
    contents.UpdateRuntimeOn = __expectString(data.UpdateRuntimeOn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetRuntimeManagementConfigCommandError
 */
const de_GetRuntimeManagementConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuntimeManagementConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1InvokeCommand
 */
export const de_InvokeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_InvokeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    FunctionError: [, output.headers["x-amz-function-error"]],
    LogResult: [, output.headers["x-amz-log-result"]],
    ExecutedVersion: [, output.headers["x-amz-executed-version"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Payload = data;
  map(contents, {
    StatusCode: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1InvokeCommandError
 */
const de_InvokeCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<InvokeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EC2AccessDeniedException":
    case "com.amazonaws.lambda#EC2AccessDeniedException":
      throw await de_EC2AccessDeniedExceptionRes(parsedOutput, context);
    case "EC2ThrottledException":
    case "com.amazonaws.lambda#EC2ThrottledException":
      throw await de_EC2ThrottledExceptionRes(parsedOutput, context);
    case "EC2UnexpectedException":
    case "com.amazonaws.lambda#EC2UnexpectedException":
      throw await de_EC2UnexpectedExceptionRes(parsedOutput, context);
    case "EFSIOException":
    case "com.amazonaws.lambda#EFSIOException":
      throw await de_EFSIOExceptionRes(parsedOutput, context);
    case "EFSMountConnectivityException":
    case "com.amazonaws.lambda#EFSMountConnectivityException":
      throw await de_EFSMountConnectivityExceptionRes(parsedOutput, context);
    case "EFSMountFailureException":
    case "com.amazonaws.lambda#EFSMountFailureException":
      throw await de_EFSMountFailureExceptionRes(parsedOutput, context);
    case "EFSMountTimeoutException":
    case "com.amazonaws.lambda#EFSMountTimeoutException":
      throw await de_EFSMountTimeoutExceptionRes(parsedOutput, context);
    case "ENILimitReachedException":
    case "com.amazonaws.lambda#ENILimitReachedException":
      throw await de_ENILimitReachedExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestContentException":
    case "com.amazonaws.lambda#InvalidRequestContentException":
      throw await de_InvalidRequestContentExceptionRes(parsedOutput, context);
    case "InvalidRuntimeException":
    case "com.amazonaws.lambda#InvalidRuntimeException":
      throw await de_InvalidRuntimeExceptionRes(parsedOutput, context);
    case "InvalidSecurityGroupIDException":
    case "com.amazonaws.lambda#InvalidSecurityGroupIDException":
      throw await de_InvalidSecurityGroupIDExceptionRes(parsedOutput, context);
    case "InvalidSubnetIDException":
    case "com.amazonaws.lambda#InvalidSubnetIDException":
      throw await de_InvalidSubnetIDExceptionRes(parsedOutput, context);
    case "InvalidZipFileException":
    case "com.amazonaws.lambda#InvalidZipFileException":
      throw await de_InvalidZipFileExceptionRes(parsedOutput, context);
    case "KMSAccessDeniedException":
    case "com.amazonaws.lambda#KMSAccessDeniedException":
      throw await de_KMSAccessDeniedExceptionRes(parsedOutput, context);
    case "KMSDisabledException":
    case "com.amazonaws.lambda#KMSDisabledException":
      throw await de_KMSDisabledExceptionRes(parsedOutput, context);
    case "KMSInvalidStateException":
    case "com.amazonaws.lambda#KMSInvalidStateException":
      throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
    case "KMSNotFoundException":
    case "com.amazonaws.lambda#KMSNotFoundException":
      throw await de_KMSNotFoundExceptionRes(parsedOutput, context);
    case "RequestTooLargeException":
    case "com.amazonaws.lambda#RequestTooLargeException":
      throw await de_RequestTooLargeExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.lambda#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "SnapStartException":
    case "com.amazonaws.lambda#SnapStartException":
      throw await de_SnapStartExceptionRes(parsedOutput, context);
    case "SnapStartNotReadyException":
    case "com.amazonaws.lambda#SnapStartNotReadyException":
      throw await de_SnapStartNotReadyExceptionRes(parsedOutput, context);
    case "SnapStartTimeoutException":
    case "com.amazonaws.lambda#SnapStartTimeoutException":
      throw await de_SnapStartTimeoutExceptionRes(parsedOutput, context);
    case "SubnetIPAddressLimitReachedException":
    case "com.amazonaws.lambda#SubnetIPAddressLimitReachedException":
      throw await de_SubnetIPAddressLimitReachedExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedMediaTypeException":
    case "com.amazonaws.lambda#UnsupportedMediaTypeException":
      throw await de_UnsupportedMediaTypeExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1InvokeAsyncCommand
 */
export const de_InvokeAsyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeAsyncCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_InvokeAsyncCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  map(contents, {
    Status: [, output.statusCode],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1InvokeAsyncCommandError
 */
const de_InvokeAsyncCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeAsyncCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestContentException":
    case "com.amazonaws.lambda#InvalidRequestContentException":
      throw await de_InvalidRequestContentExceptionRes(parsedOutput, context);
    case "InvalidRuntimeException":
    case "com.amazonaws.lambda#InvalidRuntimeException":
      throw await de_InvalidRuntimeExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListAliasesCommand
 */
export const de_ListAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAliasesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Aliases != null) {
    contents.Aliases = de_AliasList(data.Aliases, context);
  }
  if (data.NextMarker != null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAliasesCommandError
 */
const de_ListAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListCodeSigningConfigsCommand
 */
export const de_ListCodeSigningConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeSigningConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCodeSigningConfigsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeSigningConfigs != null) {
    contents.CodeSigningConfigs = de_CodeSigningConfigList(data.CodeSigningConfigs, context);
  }
  if (data.NextMarker != null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCodeSigningConfigsCommandError
 */
const de_ListCodeSigningConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeSigningConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListEventSourceMappingsCommand
 */
export const de_ListEventSourceMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourceMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEventSourceMappingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventSourceMappings != null) {
    contents.EventSourceMappings = de_EventSourceMappingsList(data.EventSourceMappings, context);
  }
  if (data.NextMarker != null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListEventSourceMappingsCommandError
 */
const de_ListEventSourceMappingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourceMappingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListFunctionEventInvokeConfigsCommand
 */
export const de_ListFunctionEventInvokeConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionEventInvokeConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFunctionEventInvokeConfigsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FunctionEventInvokeConfigs != null) {
    contents.FunctionEventInvokeConfigs = de_FunctionEventInvokeConfigList(data.FunctionEventInvokeConfigs, context);
  }
  if (data.NextMarker != null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFunctionEventInvokeConfigsCommandError
 */
const de_ListFunctionEventInvokeConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionEventInvokeConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListFunctionsCommand
 */
export const de_ListFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFunctionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Functions != null) {
    contents.Functions = de_FunctionList(data.Functions, context);
  }
  if (data.NextMarker != null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFunctionsCommandError
 */
const de_ListFunctionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommand
 */
export const de_ListFunctionsByCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsByCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFunctionsByCodeSigningConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FunctionArns != null) {
    contents.FunctionArns = de_FunctionArnList(data.FunctionArns, context);
  }
  if (data.NextMarker != null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommandError
 */
const de_ListFunctionsByCodeSigningConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsByCodeSigningConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListFunctionUrlConfigsCommand
 */
export const de_ListFunctionUrlConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionUrlConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFunctionUrlConfigsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FunctionUrlConfigs != null) {
    contents.FunctionUrlConfigs = de_FunctionUrlConfigList(data.FunctionUrlConfigs, context);
  }
  if (data.NextMarker != null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFunctionUrlConfigsCommandError
 */
const de_ListFunctionUrlConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionUrlConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListLayersCommand
 */
export const de_ListLayersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLayersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Layers != null) {
    contents.Layers = de_LayersList(data.Layers, context);
  }
  if (data.NextMarker != null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListLayersCommandError
 */
const de_ListLayersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListLayerVersionsCommand
 */
export const de_ListLayerVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayerVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLayerVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LayerVersions != null) {
    contents.LayerVersions = de_LayerVersionsList(data.LayerVersions, context);
  }
  if (data.NextMarker != null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListLayerVersionsCommandError
 */
const de_ListLayerVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayerVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommand
 */
export const de_ListProvisionedConcurrencyConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedConcurrencyConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProvisionedConcurrencyConfigsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextMarker != null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  if (data.ProvisionedConcurrencyConfigs != null) {
    contents.ProvisionedConcurrencyConfigs = de_ProvisionedConcurrencyConfigList(
      data.ProvisionedConcurrencyConfigs,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommandError
 */
const de_ListProvisionedConcurrencyConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedConcurrencyConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = de_Tags(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsCommandError
 */
const de_ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListVersionsByFunctionCommand
 */
export const de_ListVersionsByFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVersionsByFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVersionsByFunctionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextMarker != null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  if (data.Versions != null) {
    contents.Versions = de_FunctionList(data.Versions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListVersionsByFunctionCommandError
 */
const de_ListVersionsByFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVersionsByFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PublishLayerVersionCommand
 */
export const de_PublishLayerVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishLayerVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_PublishLayerVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CompatibleArchitectures != null) {
    contents.CompatibleArchitectures = de_CompatibleArchitectures(data.CompatibleArchitectures, context);
  }
  if (data.CompatibleRuntimes != null) {
    contents.CompatibleRuntimes = de_CompatibleRuntimes(data.CompatibleRuntimes, context);
  }
  if (data.Content != null) {
    contents.Content = de_LayerVersionContentOutput(data.Content, context);
  }
  if (data.CreatedDate != null) {
    contents.CreatedDate = __expectString(data.CreatedDate);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LayerArn != null) {
    contents.LayerArn = __expectString(data.LayerArn);
  }
  if (data.LayerVersionArn != null) {
    contents.LayerVersionArn = __expectString(data.LayerVersionArn);
  }
  if (data.LicenseInfo != null) {
    contents.LicenseInfo = __expectString(data.LicenseInfo);
  }
  if (data.Version != null) {
    contents.Version = __expectLong(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PublishLayerVersionCommandError
 */
const de_PublishLayerVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishLayerVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeStorageExceededException":
    case "com.amazonaws.lambda#CodeStorageExceededException":
      throw await de_CodeStorageExceededExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PublishVersionCommand
 */
export const de_PublishVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_PublishVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Architectures != null) {
    contents.Architectures = de_ArchitecturesList(data.Architectures, context);
  }
  if (data.CodeSha256 != null) {
    contents.CodeSha256 = __expectString(data.CodeSha256);
  }
  if (data.CodeSize != null) {
    contents.CodeSize = __expectLong(data.CodeSize);
  }
  if (data.DeadLetterConfig != null) {
    contents.DeadLetterConfig = de_DeadLetterConfig(data.DeadLetterConfig, context);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Environment != null) {
    contents.Environment = de_EnvironmentResponse(data.Environment, context);
  }
  if (data.EphemeralStorage != null) {
    contents.EphemeralStorage = de_EphemeralStorage(data.EphemeralStorage, context);
  }
  if (data.FileSystemConfigs != null) {
    contents.FileSystemConfigs = de_FileSystemConfigList(data.FileSystemConfigs, context);
  }
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionName != null) {
    contents.FunctionName = __expectString(data.FunctionName);
  }
  if (data.Handler != null) {
    contents.Handler = __expectString(data.Handler);
  }
  if (data.ImageConfigResponse != null) {
    contents.ImageConfigResponse = de_ImageConfigResponse(data.ImageConfigResponse, context);
  }
  if (data.KMSKeyArn != null) {
    contents.KMSKeyArn = __expectString(data.KMSKeyArn);
  }
  if (data.LastModified != null) {
    contents.LastModified = __expectString(data.LastModified);
  }
  if (data.LastUpdateStatus != null) {
    contents.LastUpdateStatus = __expectString(data.LastUpdateStatus);
  }
  if (data.LastUpdateStatusReason != null) {
    contents.LastUpdateStatusReason = __expectString(data.LastUpdateStatusReason);
  }
  if (data.LastUpdateStatusReasonCode != null) {
    contents.LastUpdateStatusReasonCode = __expectString(data.LastUpdateStatusReasonCode);
  }
  if (data.Layers != null) {
    contents.Layers = de_LayersReferenceList(data.Layers, context);
  }
  if (data.MasterArn != null) {
    contents.MasterArn = __expectString(data.MasterArn);
  }
  if (data.MemorySize != null) {
    contents.MemorySize = __expectInt32(data.MemorySize);
  }
  if (data.PackageType != null) {
    contents.PackageType = __expectString(data.PackageType);
  }
  if (data.RevisionId != null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.Role != null) {
    contents.Role = __expectString(data.Role);
  }
  if (data.Runtime != null) {
    contents.Runtime = __expectString(data.Runtime);
  }
  if (data.RuntimeVersionConfig != null) {
    contents.RuntimeVersionConfig = de_RuntimeVersionConfig(data.RuntimeVersionConfig, context);
  }
  if (data.SigningJobArn != null) {
    contents.SigningJobArn = __expectString(data.SigningJobArn);
  }
  if (data.SigningProfileVersionArn != null) {
    contents.SigningProfileVersionArn = __expectString(data.SigningProfileVersionArn);
  }
  if (data.SnapStart != null) {
    contents.SnapStart = de_SnapStartResponse(data.SnapStart, context);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateReason != null) {
    contents.StateReason = __expectString(data.StateReason);
  }
  if (data.StateReasonCode != null) {
    contents.StateReasonCode = __expectString(data.StateReasonCode);
  }
  if (data.Timeout != null) {
    contents.Timeout = __expectInt32(data.Timeout);
  }
  if (data.TracingConfig != null) {
    contents.TracingConfig = de_TracingConfigResponse(data.TracingConfig, context);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  if (data.VpcConfig != null) {
    contents.VpcConfig = de_VpcConfigResponse(data.VpcConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PublishVersionCommandError
 */
const de_PublishVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeStorageExceededException":
    case "com.amazonaws.lambda#CodeStorageExceededException":
      throw await de_CodeStorageExceededExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutFunctionCodeSigningConfigCommand
 */
export const de_PutFunctionCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutFunctionCodeSigningConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeSigningConfigArn != null) {
    contents.CodeSigningConfigArn = __expectString(data.CodeSigningConfigArn);
  }
  if (data.FunctionName != null) {
    contents.FunctionName = __expectString(data.FunctionName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutFunctionCodeSigningConfigCommandError
 */
const de_PutFunctionCodeSigningConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionCodeSigningConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeSigningConfigNotFoundException":
    case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
      throw await de_CodeSigningConfigNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutFunctionConcurrencyCommand
 */
export const de_PutFunctionConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionConcurrencyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutFunctionConcurrencyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ReservedConcurrentExecutions != null) {
    contents.ReservedConcurrentExecutions = __expectInt32(data.ReservedConcurrentExecutions);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutFunctionConcurrencyCommandError
 */
const de_PutFunctionConcurrencyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionConcurrencyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutFunctionEventInvokeConfigCommand
 */
export const de_PutFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutFunctionEventInvokeConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DestinationConfig != null) {
    contents.DestinationConfig = de_DestinationConfig(data.DestinationConfig, context);
  }
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.LastModified != null) {
    contents.LastModified = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModified)));
  }
  if (data.MaximumEventAgeInSeconds != null) {
    contents.MaximumEventAgeInSeconds = __expectInt32(data.MaximumEventAgeInSeconds);
  }
  if (data.MaximumRetryAttempts != null) {
    contents.MaximumRetryAttempts = __expectInt32(data.MaximumRetryAttempts);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutFunctionEventInvokeConfigCommandError
 */
const de_PutFunctionEventInvokeConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionEventInvokeConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutProvisionedConcurrencyConfigCommand
 */
export const de_PutProvisionedConcurrencyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProvisionedConcurrencyConfigCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_PutProvisionedConcurrencyConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AllocatedProvisionedConcurrentExecutions != null) {
    contents.AllocatedProvisionedConcurrentExecutions = __expectInt32(data.AllocatedProvisionedConcurrentExecutions);
  }
  if (data.AvailableProvisionedConcurrentExecutions != null) {
    contents.AvailableProvisionedConcurrentExecutions = __expectInt32(data.AvailableProvisionedConcurrentExecutions);
  }
  if (data.LastModified != null) {
    contents.LastModified = __expectString(data.LastModified);
  }
  if (data.RequestedProvisionedConcurrentExecutions != null) {
    contents.RequestedProvisionedConcurrentExecutions = __expectInt32(data.RequestedProvisionedConcurrentExecutions);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusReason != null) {
    contents.StatusReason = __expectString(data.StatusReason);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutProvisionedConcurrencyConfigCommandError
 */
const de_PutProvisionedConcurrencyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProvisionedConcurrencyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutRuntimeManagementConfigCommand
 */
export const de_PutRuntimeManagementConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRuntimeManagementConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutRuntimeManagementConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.RuntimeVersionArn != null) {
    contents.RuntimeVersionArn = __expectString(data.RuntimeVersionArn);
  }
  if (data.UpdateRuntimeOn != null) {
    contents.UpdateRuntimeOn = __expectString(data.UpdateRuntimeOn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutRuntimeManagementConfigCommandError
 */
const de_PutRuntimeManagementConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRuntimeManagementConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1RemoveLayerVersionPermissionCommand
 */
export const de_RemoveLayerVersionPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveLayerVersionPermissionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_RemoveLayerVersionPermissionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveLayerVersionPermissionCommandError
 */
const de_RemoveLayerVersionPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveLayerVersionPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1RemovePermissionCommand
 */
export const de_RemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_RemovePermissionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemovePermissionCommandError
 */
const de_RemovePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateAliasCommand
 */
export const de_UpdateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AliasArn != null) {
    contents.AliasArn = __expectString(data.AliasArn);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.FunctionVersion != null) {
    contents.FunctionVersion = __expectString(data.FunctionVersion);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RevisionId != null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.RoutingConfig != null) {
    contents.RoutingConfig = de_AliasRoutingConfiguration(data.RoutingConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAliasCommandError
 */
const de_UpdateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateCodeSigningConfigCommand
 */
export const de_UpdateCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateCodeSigningConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CodeSigningConfig != null) {
    contents.CodeSigningConfig = de_CodeSigningConfig(data.CodeSigningConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCodeSigningConfigCommandError
 */
const de_UpdateCodeSigningConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCodeSigningConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateEventSourceMappingCommand
 */
export const de_UpdateEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateEventSourceMappingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AmazonManagedKafkaEventSourceConfig != null) {
    contents.AmazonManagedKafkaEventSourceConfig = de_AmazonManagedKafkaEventSourceConfig(
      data.AmazonManagedKafkaEventSourceConfig,
      context
    );
  }
  if (data.BatchSize != null) {
    contents.BatchSize = __expectInt32(data.BatchSize);
  }
  if (data.BisectBatchOnFunctionError != null) {
    contents.BisectBatchOnFunctionError = __expectBoolean(data.BisectBatchOnFunctionError);
  }
  if (data.DestinationConfig != null) {
    contents.DestinationConfig = de_DestinationConfig(data.DestinationConfig, context);
  }
  if (data.DocumentDBEventSourceConfig != null) {
    contents.DocumentDBEventSourceConfig = de_DocumentDBEventSourceConfig(data.DocumentDBEventSourceConfig, context);
  }
  if (data.EventSourceArn != null) {
    contents.EventSourceArn = __expectString(data.EventSourceArn);
  }
  if (data.FilterCriteria != null) {
    contents.FilterCriteria = de_FilterCriteria(data.FilterCriteria, context);
  }
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionResponseTypes != null) {
    contents.FunctionResponseTypes = de_FunctionResponseTypeList(data.FunctionResponseTypes, context);
  }
  if (data.LastModified != null) {
    contents.LastModified = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModified)));
  }
  if (data.LastProcessingResult != null) {
    contents.LastProcessingResult = __expectString(data.LastProcessingResult);
  }
  if (data.MaximumBatchingWindowInSeconds != null) {
    contents.MaximumBatchingWindowInSeconds = __expectInt32(data.MaximumBatchingWindowInSeconds);
  }
  if (data.MaximumRecordAgeInSeconds != null) {
    contents.MaximumRecordAgeInSeconds = __expectInt32(data.MaximumRecordAgeInSeconds);
  }
  if (data.MaximumRetryAttempts != null) {
    contents.MaximumRetryAttempts = __expectInt32(data.MaximumRetryAttempts);
  }
  if (data.ParallelizationFactor != null) {
    contents.ParallelizationFactor = __expectInt32(data.ParallelizationFactor);
  }
  if (data.Queues != null) {
    contents.Queues = de_Queues(data.Queues, context);
  }
  if (data.ScalingConfig != null) {
    contents.ScalingConfig = de_ScalingConfig(data.ScalingConfig, context);
  }
  if (data.SelfManagedEventSource != null) {
    contents.SelfManagedEventSource = de_SelfManagedEventSource(data.SelfManagedEventSource, context);
  }
  if (data.SelfManagedKafkaEventSourceConfig != null) {
    contents.SelfManagedKafkaEventSourceConfig = de_SelfManagedKafkaEventSourceConfig(
      data.SelfManagedKafkaEventSourceConfig,
      context
    );
  }
  if (data.SourceAccessConfigurations != null) {
    contents.SourceAccessConfigurations = de_SourceAccessConfigurations(data.SourceAccessConfigurations, context);
  }
  if (data.StartingPosition != null) {
    contents.StartingPosition = __expectString(data.StartingPosition);
  }
  if (data.StartingPositionTimestamp != null) {
    contents.StartingPositionTimestamp = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.StartingPositionTimestamp))
    );
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateTransitionReason != null) {
    contents.StateTransitionReason = __expectString(data.StateTransitionReason);
  }
  if (data.Topics != null) {
    contents.Topics = de_Topics(data.Topics, context);
  }
  if (data.TumblingWindowInSeconds != null) {
    contents.TumblingWindowInSeconds = __expectInt32(data.TumblingWindowInSeconds);
  }
  if (data.UUID != null) {
    contents.UUID = __expectString(data.UUID);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEventSourceMappingCommandError
 */
const de_UpdateEventSourceMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventSourceMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.lambda#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateFunctionCodeCommand
 */
export const de_UpdateFunctionCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFunctionCodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Architectures != null) {
    contents.Architectures = de_ArchitecturesList(data.Architectures, context);
  }
  if (data.CodeSha256 != null) {
    contents.CodeSha256 = __expectString(data.CodeSha256);
  }
  if (data.CodeSize != null) {
    contents.CodeSize = __expectLong(data.CodeSize);
  }
  if (data.DeadLetterConfig != null) {
    contents.DeadLetterConfig = de_DeadLetterConfig(data.DeadLetterConfig, context);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Environment != null) {
    contents.Environment = de_EnvironmentResponse(data.Environment, context);
  }
  if (data.EphemeralStorage != null) {
    contents.EphemeralStorage = de_EphemeralStorage(data.EphemeralStorage, context);
  }
  if (data.FileSystemConfigs != null) {
    contents.FileSystemConfigs = de_FileSystemConfigList(data.FileSystemConfigs, context);
  }
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionName != null) {
    contents.FunctionName = __expectString(data.FunctionName);
  }
  if (data.Handler != null) {
    contents.Handler = __expectString(data.Handler);
  }
  if (data.ImageConfigResponse != null) {
    contents.ImageConfigResponse = de_ImageConfigResponse(data.ImageConfigResponse, context);
  }
  if (data.KMSKeyArn != null) {
    contents.KMSKeyArn = __expectString(data.KMSKeyArn);
  }
  if (data.LastModified != null) {
    contents.LastModified = __expectString(data.LastModified);
  }
  if (data.LastUpdateStatus != null) {
    contents.LastUpdateStatus = __expectString(data.LastUpdateStatus);
  }
  if (data.LastUpdateStatusReason != null) {
    contents.LastUpdateStatusReason = __expectString(data.LastUpdateStatusReason);
  }
  if (data.LastUpdateStatusReasonCode != null) {
    contents.LastUpdateStatusReasonCode = __expectString(data.LastUpdateStatusReasonCode);
  }
  if (data.Layers != null) {
    contents.Layers = de_LayersReferenceList(data.Layers, context);
  }
  if (data.MasterArn != null) {
    contents.MasterArn = __expectString(data.MasterArn);
  }
  if (data.MemorySize != null) {
    contents.MemorySize = __expectInt32(data.MemorySize);
  }
  if (data.PackageType != null) {
    contents.PackageType = __expectString(data.PackageType);
  }
  if (data.RevisionId != null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.Role != null) {
    contents.Role = __expectString(data.Role);
  }
  if (data.Runtime != null) {
    contents.Runtime = __expectString(data.Runtime);
  }
  if (data.RuntimeVersionConfig != null) {
    contents.RuntimeVersionConfig = de_RuntimeVersionConfig(data.RuntimeVersionConfig, context);
  }
  if (data.SigningJobArn != null) {
    contents.SigningJobArn = __expectString(data.SigningJobArn);
  }
  if (data.SigningProfileVersionArn != null) {
    contents.SigningProfileVersionArn = __expectString(data.SigningProfileVersionArn);
  }
  if (data.SnapStart != null) {
    contents.SnapStart = de_SnapStartResponse(data.SnapStart, context);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateReason != null) {
    contents.StateReason = __expectString(data.StateReason);
  }
  if (data.StateReasonCode != null) {
    contents.StateReasonCode = __expectString(data.StateReasonCode);
  }
  if (data.Timeout != null) {
    contents.Timeout = __expectInt32(data.Timeout);
  }
  if (data.TracingConfig != null) {
    contents.TracingConfig = de_TracingConfigResponse(data.TracingConfig, context);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  if (data.VpcConfig != null) {
    contents.VpcConfig = de_VpcConfigResponse(data.VpcConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFunctionCodeCommandError
 */
const de_UpdateFunctionCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeSigningConfigNotFoundException":
    case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
      throw await de_CodeSigningConfigNotFoundExceptionRes(parsedOutput, context);
    case "CodeStorageExceededException":
    case "com.amazonaws.lambda#CodeStorageExceededException":
      throw await de_CodeStorageExceededExceptionRes(parsedOutput, context);
    case "CodeVerificationFailedException":
    case "com.amazonaws.lambda#CodeVerificationFailedException":
      throw await de_CodeVerificationFailedExceptionRes(parsedOutput, context);
    case "InvalidCodeSignatureException":
    case "com.amazonaws.lambda#InvalidCodeSignatureException":
      throw await de_InvalidCodeSignatureExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateFunctionConfigurationCommand
 */
export const de_UpdateFunctionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFunctionConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Architectures != null) {
    contents.Architectures = de_ArchitecturesList(data.Architectures, context);
  }
  if (data.CodeSha256 != null) {
    contents.CodeSha256 = __expectString(data.CodeSha256);
  }
  if (data.CodeSize != null) {
    contents.CodeSize = __expectLong(data.CodeSize);
  }
  if (data.DeadLetterConfig != null) {
    contents.DeadLetterConfig = de_DeadLetterConfig(data.DeadLetterConfig, context);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Environment != null) {
    contents.Environment = de_EnvironmentResponse(data.Environment, context);
  }
  if (data.EphemeralStorage != null) {
    contents.EphemeralStorage = de_EphemeralStorage(data.EphemeralStorage, context);
  }
  if (data.FileSystemConfigs != null) {
    contents.FileSystemConfigs = de_FileSystemConfigList(data.FileSystemConfigs, context);
  }
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionName != null) {
    contents.FunctionName = __expectString(data.FunctionName);
  }
  if (data.Handler != null) {
    contents.Handler = __expectString(data.Handler);
  }
  if (data.ImageConfigResponse != null) {
    contents.ImageConfigResponse = de_ImageConfigResponse(data.ImageConfigResponse, context);
  }
  if (data.KMSKeyArn != null) {
    contents.KMSKeyArn = __expectString(data.KMSKeyArn);
  }
  if (data.LastModified != null) {
    contents.LastModified = __expectString(data.LastModified);
  }
  if (data.LastUpdateStatus != null) {
    contents.LastUpdateStatus = __expectString(data.LastUpdateStatus);
  }
  if (data.LastUpdateStatusReason != null) {
    contents.LastUpdateStatusReason = __expectString(data.LastUpdateStatusReason);
  }
  if (data.LastUpdateStatusReasonCode != null) {
    contents.LastUpdateStatusReasonCode = __expectString(data.LastUpdateStatusReasonCode);
  }
  if (data.Layers != null) {
    contents.Layers = de_LayersReferenceList(data.Layers, context);
  }
  if (data.MasterArn != null) {
    contents.MasterArn = __expectString(data.MasterArn);
  }
  if (data.MemorySize != null) {
    contents.MemorySize = __expectInt32(data.MemorySize);
  }
  if (data.PackageType != null) {
    contents.PackageType = __expectString(data.PackageType);
  }
  if (data.RevisionId != null) {
    contents.RevisionId = __expectString(data.RevisionId);
  }
  if (data.Role != null) {
    contents.Role = __expectString(data.Role);
  }
  if (data.Runtime != null) {
    contents.Runtime = __expectString(data.Runtime);
  }
  if (data.RuntimeVersionConfig != null) {
    contents.RuntimeVersionConfig = de_RuntimeVersionConfig(data.RuntimeVersionConfig, context);
  }
  if (data.SigningJobArn != null) {
    contents.SigningJobArn = __expectString(data.SigningJobArn);
  }
  if (data.SigningProfileVersionArn != null) {
    contents.SigningProfileVersionArn = __expectString(data.SigningProfileVersionArn);
  }
  if (data.SnapStart != null) {
    contents.SnapStart = de_SnapStartResponse(data.SnapStart, context);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.StateReason != null) {
    contents.StateReason = __expectString(data.StateReason);
  }
  if (data.StateReasonCode != null) {
    contents.StateReasonCode = __expectString(data.StateReasonCode);
  }
  if (data.Timeout != null) {
    contents.Timeout = __expectInt32(data.Timeout);
  }
  if (data.TracingConfig != null) {
    contents.TracingConfig = de_TracingConfigResponse(data.TracingConfig, context);
  }
  if (data.Version != null) {
    contents.Version = __expectString(data.Version);
  }
  if (data.VpcConfig != null) {
    contents.VpcConfig = de_VpcConfigResponse(data.VpcConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFunctionConfigurationCommandError
 */
const de_UpdateFunctionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeSigningConfigNotFoundException":
    case "com.amazonaws.lambda#CodeSigningConfigNotFoundException":
      throw await de_CodeSigningConfigNotFoundExceptionRes(parsedOutput, context);
    case "CodeVerificationFailedException":
    case "com.amazonaws.lambda#CodeVerificationFailedException":
      throw await de_CodeVerificationFailedExceptionRes(parsedOutput, context);
    case "InvalidCodeSignatureException":
    case "com.amazonaws.lambda#InvalidCodeSignatureException":
      throw await de_InvalidCodeSignatureExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommand
 */
export const de_UpdateFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFunctionEventInvokeConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DestinationConfig != null) {
    contents.DestinationConfig = de_DestinationConfig(data.DestinationConfig, context);
  }
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.LastModified != null) {
    contents.LastModified = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModified)));
  }
  if (data.MaximumEventAgeInSeconds != null) {
    contents.MaximumEventAgeInSeconds = __expectInt32(data.MaximumEventAgeInSeconds);
  }
  if (data.MaximumRetryAttempts != null) {
    contents.MaximumRetryAttempts = __expectInt32(data.MaximumRetryAttempts);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommandError
 */
const de_UpdateFunctionEventInvokeConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionEventInvokeConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateFunctionUrlConfigCommand
 */
export const de_UpdateFunctionUrlConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionUrlConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFunctionUrlConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AuthType != null) {
    contents.AuthType = __expectString(data.AuthType);
  }
  if (data.Cors != null) {
    contents.Cors = de_Cors(data.Cors, context);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectString(data.CreationTime);
  }
  if (data.FunctionArn != null) {
    contents.FunctionArn = __expectString(data.FunctionArn);
  }
  if (data.FunctionUrl != null) {
    contents.FunctionUrl = __expectString(data.FunctionUrl);
  }
  if (data.LastModifiedTime != null) {
    contents.LastModifiedTime = __expectString(data.LastModifiedTime);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFunctionUrlConfigCommandError
 */
const de_UpdateFunctionUrlConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionUrlConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1CodeSigningConfigNotFoundExceptionRes
 */
const de_CodeSigningConfigNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CodeSigningConfigNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new CodeSigningConfigNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1CodeStorageExceededExceptionRes
 */
const de_CodeStorageExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CodeStorageExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new CodeStorageExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1CodeVerificationFailedExceptionRes
 */
const de_CodeVerificationFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CodeVerificationFailedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new CodeVerificationFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1EC2AccessDeniedExceptionRes
 */
const de_EC2AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EC2AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new EC2AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1EC2ThrottledExceptionRes
 */
const de_EC2ThrottledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EC2ThrottledException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new EC2ThrottledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1EC2UnexpectedExceptionRes
 */
const de_EC2UnexpectedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EC2UnexpectedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.EC2ErrorCode != null) {
    contents.EC2ErrorCode = __expectString(data.EC2ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new EC2UnexpectedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1EFSIOExceptionRes
 */
const de_EFSIOExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<EFSIOException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new EFSIOException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1EFSMountConnectivityExceptionRes
 */
const de_EFSMountConnectivityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EFSMountConnectivityException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new EFSMountConnectivityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1EFSMountFailureExceptionRes
 */
const de_EFSMountFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EFSMountFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new EFSMountFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1EFSMountTimeoutExceptionRes
 */
const de_EFSMountTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EFSMountTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new EFSMountTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ENILimitReachedExceptionRes
 */
const de_ENILimitReachedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ENILimitReachedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new ENILimitReachedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidCodeSignatureExceptionRes
 */
const de_InvalidCodeSignatureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCodeSignatureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new InvalidCodeSignatureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterValueExceptionRes
 */
const de_InvalidParameterValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestContentExceptionRes
 */
const de_InvalidRequestContentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestContentException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidRequestContentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRuntimeExceptionRes
 */
const de_InvalidRuntimeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRuntimeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new InvalidRuntimeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidSecurityGroupIDExceptionRes
 */
const de_InvalidSecurityGroupIDExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSecurityGroupIDException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new InvalidSecurityGroupIDException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidSubnetIDExceptionRes
 */
const de_InvalidSubnetIDExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnetIDException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new InvalidSubnetIDException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidZipFileExceptionRes
 */
const de_InvalidZipFileExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidZipFileException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new InvalidZipFileException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1KMSAccessDeniedExceptionRes
 */
const de_KMSAccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSAccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new KMSAccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1KMSDisabledExceptionRes
 */
const de_KMSDisabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSDisabledException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new KMSDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1KMSInvalidStateExceptionRes
 */
const de_KMSInvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidStateException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new KMSInvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1KMSNotFoundExceptionRes
 */
const de_KMSNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new KMSNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PolicyLengthExceededExceptionRes
 */
const de_PolicyLengthExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyLengthExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new PolicyLengthExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PreconditionFailedExceptionRes
 */
const de_PreconditionFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionFailedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new PreconditionFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ProvisionedConcurrencyConfigNotFoundExceptionRes
 */
const de_ProvisionedConcurrencyConfigNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedConcurrencyConfigNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ProvisionedConcurrencyConfigNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RequestTooLargeExceptionRes
 */
const de_RequestTooLargeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestTooLargeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new RequestTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceConflictExceptionRes
 */
const de_ResourceConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotReadyExceptionRes
 */
const de_ResourceNotReadyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceExceptionRes
 */
const de_ServiceExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new ServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SnapStartExceptionRes
 */
const de_SnapStartExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<SnapStartException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new SnapStartException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SnapStartNotReadyExceptionRes
 */
const de_SnapStartNotReadyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapStartNotReadyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new SnapStartNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SnapStartTimeoutExceptionRes
 */
const de_SnapStartTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapStartTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new SnapStartTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SubnetIPAddressLimitReachedExceptionRes
 */
const de_SubnetIPAddressLimitReachedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetIPAddressLimitReachedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new SubnetIPAddressLimitReachedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({
    retryAfterSeconds: [, parsedOutput.headers["retry-after"]],
  });
  const data: any = parsedOutput.body;
  if (data.Reason != null) {
    contents.Reason = __expectString(data.Reason);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedMediaTypeExceptionRes
 */
const de_UnsupportedMediaTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedMediaTypeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UnsupportedMediaTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AdditionalVersionWeights
 */
const se_AdditionalVersionWeights = (input: Record<string, number>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __serializeFloat(value);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1AliasRoutingConfiguration
 */
const se_AliasRoutingConfiguration = (input: AliasRoutingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalVersionWeights != null && {
      AdditionalVersionWeights: se_AdditionalVersionWeights(input.AdditionalVersionWeights, context),
    }),
  };
};

/**
 * serializeAws_restJson1AllowedPublishers
 */
const se_AllowedPublishers = (input: AllowedPublishers, context: __SerdeContext): any => {
  return {
    ...(input.SigningProfileVersionArns != null && {
      SigningProfileVersionArns: se_SigningProfileVersionArns(input.SigningProfileVersionArns, context),
    }),
  };
};

/**
 * serializeAws_restJson1AllowMethodsList
 */
const se_AllowMethodsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1AllowOriginsList
 */
const se_AllowOriginsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1AmazonManagedKafkaEventSourceConfig
 */
const se_AmazonManagedKafkaEventSourceConfig = (
  input: AmazonManagedKafkaEventSourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConsumerGroupId != null && { ConsumerGroupId: input.ConsumerGroupId }),
  };
};

/**
 * serializeAws_restJson1ArchitecturesList
 */
const se_ArchitecturesList = (input: (Architecture | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1CodeSigningPolicies
 */
const se_CodeSigningPolicies = (input: CodeSigningPolicies, context: __SerdeContext): any => {
  return {
    ...(input.UntrustedArtifactOnDeployment != null && {
      UntrustedArtifactOnDeployment: input.UntrustedArtifactOnDeployment,
    }),
  };
};

/**
 * serializeAws_restJson1CompatibleArchitectures
 */
const se_CompatibleArchitectures = (input: (Architecture | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1CompatibleRuntimes
 */
const se_CompatibleRuntimes = (input: (Runtime | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Cors
 */
const se_Cors = (input: Cors, context: __SerdeContext): any => {
  return {
    ...(input.AllowCredentials != null && { AllowCredentials: input.AllowCredentials }),
    ...(input.AllowHeaders != null && { AllowHeaders: se_HeadersList(input.AllowHeaders, context) }),
    ...(input.AllowMethods != null && { AllowMethods: se_AllowMethodsList(input.AllowMethods, context) }),
    ...(input.AllowOrigins != null && { AllowOrigins: se_AllowOriginsList(input.AllowOrigins, context) }),
    ...(input.ExposeHeaders != null && { ExposeHeaders: se_HeadersList(input.ExposeHeaders, context) }),
    ...(input.MaxAge != null && { MaxAge: input.MaxAge }),
  };
};

/**
 * serializeAws_restJson1DeadLetterConfig
 */
const se_DeadLetterConfig = (input: DeadLetterConfig, context: __SerdeContext): any => {
  return {
    ...(input.TargetArn != null && { TargetArn: input.TargetArn }),
  };
};

/**
 * serializeAws_restJson1DestinationConfig
 */
const se_DestinationConfig = (input: DestinationConfig, context: __SerdeContext): any => {
  return {
    ...(input.OnFailure != null && { OnFailure: se_OnFailure(input.OnFailure, context) }),
    ...(input.OnSuccess != null && { OnSuccess: se_OnSuccess(input.OnSuccess, context) }),
  };
};

/**
 * serializeAws_restJson1DocumentDBEventSourceConfig
 */
const se_DocumentDBEventSourceConfig = (input: DocumentDBEventSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.CollectionName != null && { CollectionName: input.CollectionName }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.FullDocument != null && { FullDocument: input.FullDocument }),
  };
};

/**
 * serializeAws_restJson1EndpointLists
 */
const se_EndpointLists = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Endpoints
 */
const se_Endpoints = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [EndPointType | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_EndpointLists(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Environment
 */
const se_Environment = (input: Environment, context: __SerdeContext): any => {
  return {
    ...(input.Variables != null && { Variables: se_EnvironmentVariables(input.Variables, context) }),
  };
};

/**
 * serializeAws_restJson1EnvironmentVariables
 */
const se_EnvironmentVariables = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1EphemeralStorage
 */
const se_EphemeralStorage = (input: EphemeralStorage, context: __SerdeContext): any => {
  return {
    ...(input.Size != null && { Size: input.Size }),
  };
};

/**
 * serializeAws_restJson1FileSystemConfig
 */
const se_FileSystemConfig = (input: FileSystemConfig, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.LocalMountPath != null && { LocalMountPath: input.LocalMountPath }),
  };
};

/**
 * serializeAws_restJson1FileSystemConfigList
 */
const se_FileSystemConfigList = (input: FileSystemConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FileSystemConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Pattern != null && { Pattern: input.Pattern }),
  };
};

/**
 * serializeAws_restJson1FilterCriteria
 */
const se_FilterCriteria = (input: FilterCriteria, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
  };
};

/**
 * serializeAws_restJson1FilterList
 */
const se_FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_restJson1FunctionCode
 */
const se_FunctionCode = (input: FunctionCode, context: __SerdeContext): any => {
  return {
    ...(input.ImageUri != null && { ImageUri: input.ImageUri }),
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key != null && { S3Key: input.S3Key }),
    ...(input.S3ObjectVersion != null && { S3ObjectVersion: input.S3ObjectVersion }),
    ...(input.ZipFile != null && { ZipFile: context.base64Encoder(input.ZipFile) }),
  };
};

/**
 * serializeAws_restJson1FunctionResponseTypeList
 */
const se_FunctionResponseTypeList = (input: (FunctionResponseType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1HeadersList
 */
const se_HeadersList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ImageConfig
 */
const se_ImageConfig = (input: ImageConfig, context: __SerdeContext): any => {
  return {
    ...(input.Command != null && { Command: se_StringList(input.Command, context) }),
    ...(input.EntryPoint != null && { EntryPoint: se_StringList(input.EntryPoint, context) }),
    ...(input.WorkingDirectory != null && { WorkingDirectory: input.WorkingDirectory }),
  };
};

/**
 * serializeAws_restJson1LayerList
 */
const se_LayerList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1LayerVersionContentInput
 */
const se_LayerVersionContentInput = (input: LayerVersionContentInput, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key != null && { S3Key: input.S3Key }),
    ...(input.S3ObjectVersion != null && { S3ObjectVersion: input.S3ObjectVersion }),
    ...(input.ZipFile != null && { ZipFile: context.base64Encoder(input.ZipFile) }),
  };
};

/**
 * serializeAws_restJson1OnFailure
 */
const se_OnFailure = (input: OnFailure, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
  };
};

/**
 * serializeAws_restJson1OnSuccess
 */
const se_OnSuccess = (input: OnSuccess, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
  };
};

/**
 * serializeAws_restJson1Queues
 */
const se_Queues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ScalingConfig
 */
const se_ScalingConfig = (input: ScalingConfig, context: __SerdeContext): any => {
  return {
    ...(input.MaximumConcurrency != null && { MaximumConcurrency: input.MaximumConcurrency }),
  };
};

/**
 * serializeAws_restJson1SecurityGroupIds
 */
const se_SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SelfManagedEventSource
 */
const se_SelfManagedEventSource = (input: SelfManagedEventSource, context: __SerdeContext): any => {
  return {
    ...(input.Endpoints != null && { Endpoints: se_Endpoints(input.Endpoints, context) }),
  };
};

/**
 * serializeAws_restJson1SelfManagedKafkaEventSourceConfig
 */
const se_SelfManagedKafkaEventSourceConfig = (
  input: SelfManagedKafkaEventSourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConsumerGroupId != null && { ConsumerGroupId: input.ConsumerGroupId }),
  };
};

/**
 * serializeAws_restJson1SigningProfileVersionArns
 */
const se_SigningProfileVersionArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SnapStart
 */
const se_SnapStart = (input: SnapStart, context: __SerdeContext): any => {
  return {
    ...(input.ApplyOn != null && { ApplyOn: input.ApplyOn }),
  };
};

/**
 * serializeAws_restJson1SourceAccessConfiguration
 */
const se_SourceAccessConfiguration = (input: SourceAccessConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.URI != null && { URI: input.URI }),
  };
};

/**
 * serializeAws_restJson1SourceAccessConfigurations
 */
const se_SourceAccessConfigurations = (input: SourceAccessConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SourceAccessConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SubnetIds
 */
const se_SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Tags
 */
const se_Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Topics
 */
const se_Topics = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TracingConfig
 */
const se_TracingConfig = (input: TracingConfig, context: __SerdeContext): any => {
  return {
    ...(input.Mode != null && { Mode: input.Mode }),
  };
};

/**
 * serializeAws_restJson1VpcConfig
 */
const se_VpcConfig = (input: VpcConfig, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds != null && { SecurityGroupIds: se_SecurityGroupIds(input.SecurityGroupIds, context) }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIds(input.SubnetIds, context) }),
  };
};

/**
 * deserializeAws_restJson1AccountLimit
 */
const de_AccountLimit = (output: any, context: __SerdeContext): AccountLimit => {
  return {
    CodeSizeUnzipped: __expectLong(output.CodeSizeUnzipped),
    CodeSizeZipped: __expectLong(output.CodeSizeZipped),
    ConcurrentExecutions: __expectInt32(output.ConcurrentExecutions),
    TotalCodeSize: __expectLong(output.TotalCodeSize),
    UnreservedConcurrentExecutions: __expectInt32(output.UnreservedConcurrentExecutions),
  } as any;
};

/**
 * deserializeAws_restJson1AccountUsage
 */
const de_AccountUsage = (output: any, context: __SerdeContext): AccountUsage => {
  return {
    FunctionCount: __expectLong(output.FunctionCount),
    TotalCodeSize: __expectLong(output.TotalCodeSize),
  } as any;
};

/**
 * deserializeAws_restJson1AdditionalVersionWeights
 */
const de_AdditionalVersionWeights = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseDouble(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AliasConfiguration
 */
const de_AliasConfiguration = (output: any, context: __SerdeContext): AliasConfiguration => {
  return {
    AliasArn: __expectString(output.AliasArn),
    Description: __expectString(output.Description),
    FunctionVersion: __expectString(output.FunctionVersion),
    Name: __expectString(output.Name),
    RevisionId: __expectString(output.RevisionId),
    RoutingConfig:
      output.RoutingConfig != null ? de_AliasRoutingConfiguration(output.RoutingConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AliasList
 */
const de_AliasList = (output: any, context: __SerdeContext): AliasConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AliasConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AliasRoutingConfiguration
 */
const de_AliasRoutingConfiguration = (output: any, context: __SerdeContext): AliasRoutingConfiguration => {
  return {
    AdditionalVersionWeights:
      output.AdditionalVersionWeights != null
        ? de_AdditionalVersionWeights(output.AdditionalVersionWeights, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AllowedPublishers
 */
const de_AllowedPublishers = (output: any, context: __SerdeContext): AllowedPublishers => {
  return {
    SigningProfileVersionArns:
      output.SigningProfileVersionArns != null
        ? de_SigningProfileVersionArns(output.SigningProfileVersionArns, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AllowMethodsList
 */
const de_AllowMethodsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AllowOriginsList
 */
const de_AllowOriginsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AmazonManagedKafkaEventSourceConfig
 */
const de_AmazonManagedKafkaEventSourceConfig = (
  output: any,
  context: __SerdeContext
): AmazonManagedKafkaEventSourceConfig => {
  return {
    ConsumerGroupId: __expectString(output.ConsumerGroupId),
  } as any;
};

/**
 * deserializeAws_restJson1ArchitecturesList
 */
const de_ArchitecturesList = (output: any, context: __SerdeContext): (Architecture | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CodeSigningConfig
 */
const de_CodeSigningConfig = (output: any, context: __SerdeContext): CodeSigningConfig => {
  return {
    AllowedPublishers:
      output.AllowedPublishers != null ? de_AllowedPublishers(output.AllowedPublishers, context) : undefined,
    CodeSigningConfigArn: __expectString(output.CodeSigningConfigArn),
    CodeSigningConfigId: __expectString(output.CodeSigningConfigId),
    CodeSigningPolicies:
      output.CodeSigningPolicies != null ? de_CodeSigningPolicies(output.CodeSigningPolicies, context) : undefined,
    Description: __expectString(output.Description),
    LastModified: __expectString(output.LastModified),
  } as any;
};

/**
 * deserializeAws_restJson1CodeSigningConfigList
 */
const de_CodeSigningConfigList = (output: any, context: __SerdeContext): CodeSigningConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CodeSigningConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CodeSigningPolicies
 */
const de_CodeSigningPolicies = (output: any, context: __SerdeContext): CodeSigningPolicies => {
  return {
    UntrustedArtifactOnDeployment: __expectString(output.UntrustedArtifactOnDeployment),
  } as any;
};

/**
 * deserializeAws_restJson1CompatibleArchitectures
 */
const de_CompatibleArchitectures = (output: any, context: __SerdeContext): (Architecture | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CompatibleRuntimes
 */
const de_CompatibleRuntimes = (output: any, context: __SerdeContext): (Runtime | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Concurrency
 */
const de_Concurrency = (output: any, context: __SerdeContext): Concurrency => {
  return {
    ReservedConcurrentExecutions: __expectInt32(output.ReservedConcurrentExecutions),
  } as any;
};

/**
 * deserializeAws_restJson1Cors
 */
const de_Cors = (output: any, context: __SerdeContext): Cors => {
  return {
    AllowCredentials: __expectBoolean(output.AllowCredentials),
    AllowHeaders: output.AllowHeaders != null ? de_HeadersList(output.AllowHeaders, context) : undefined,
    AllowMethods: output.AllowMethods != null ? de_AllowMethodsList(output.AllowMethods, context) : undefined,
    AllowOrigins: output.AllowOrigins != null ? de_AllowOriginsList(output.AllowOrigins, context) : undefined,
    ExposeHeaders: output.ExposeHeaders != null ? de_HeadersList(output.ExposeHeaders, context) : undefined,
    MaxAge: __expectInt32(output.MaxAge),
  } as any;
};

/**
 * deserializeAws_restJson1DeadLetterConfig
 */
const de_DeadLetterConfig = (output: any, context: __SerdeContext): DeadLetterConfig => {
  return {
    TargetArn: __expectString(output.TargetArn),
  } as any;
};

/**
 * deserializeAws_restJson1DestinationConfig
 */
const de_DestinationConfig = (output: any, context: __SerdeContext): DestinationConfig => {
  return {
    OnFailure: output.OnFailure != null ? de_OnFailure(output.OnFailure, context) : undefined,
    OnSuccess: output.OnSuccess != null ? de_OnSuccess(output.OnSuccess, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DocumentDBEventSourceConfig
 */
const de_DocumentDBEventSourceConfig = (output: any, context: __SerdeContext): DocumentDBEventSourceConfig => {
  return {
    CollectionName: __expectString(output.CollectionName),
    DatabaseName: __expectString(output.DatabaseName),
    FullDocument: __expectString(output.FullDocument),
  } as any;
};

/**
 * deserializeAws_restJson1EndpointLists
 */
const de_EndpointLists = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Endpoints
 */
const de_Endpoints = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [EndPointType | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_EndpointLists(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1EnvironmentError
 */
const de_EnvironmentError = (output: any, context: __SerdeContext): EnvironmentError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_restJson1EnvironmentResponse
 */
const de_EnvironmentResponse = (output: any, context: __SerdeContext): EnvironmentResponse => {
  return {
    Error: output.Error != null ? de_EnvironmentError(output.Error, context) : undefined,
    Variables: output.Variables != null ? de_EnvironmentVariables(output.Variables, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EnvironmentVariables
 */
const de_EnvironmentVariables = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1EphemeralStorage
 */
const de_EphemeralStorage = (output: any, context: __SerdeContext): EphemeralStorage => {
  return {
    Size: __expectInt32(output.Size),
  } as any;
};

/**
 * deserializeAws_restJson1EventSourceMappingConfiguration
 */
const de_EventSourceMappingConfiguration = (output: any, context: __SerdeContext): EventSourceMappingConfiguration => {
  return {
    AmazonManagedKafkaEventSourceConfig:
      output.AmazonManagedKafkaEventSourceConfig != null
        ? de_AmazonManagedKafkaEventSourceConfig(output.AmazonManagedKafkaEventSourceConfig, context)
        : undefined,
    BatchSize: __expectInt32(output.BatchSize),
    BisectBatchOnFunctionError: __expectBoolean(output.BisectBatchOnFunctionError),
    DestinationConfig:
      output.DestinationConfig != null ? de_DestinationConfig(output.DestinationConfig, context) : undefined,
    DocumentDBEventSourceConfig:
      output.DocumentDBEventSourceConfig != null
        ? de_DocumentDBEventSourceConfig(output.DocumentDBEventSourceConfig, context)
        : undefined,
    EventSourceArn: __expectString(output.EventSourceArn),
    FilterCriteria: output.FilterCriteria != null ? de_FilterCriteria(output.FilterCriteria, context) : undefined,
    FunctionArn: __expectString(output.FunctionArn),
    FunctionResponseTypes:
      output.FunctionResponseTypes != null
        ? de_FunctionResponseTypeList(output.FunctionResponseTypes, context)
        : undefined,
    LastModified:
      output.LastModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModified)))
        : undefined,
    LastProcessingResult: __expectString(output.LastProcessingResult),
    MaximumBatchingWindowInSeconds: __expectInt32(output.MaximumBatchingWindowInSeconds),
    MaximumRecordAgeInSeconds: __expectInt32(output.MaximumRecordAgeInSeconds),
    MaximumRetryAttempts: __expectInt32(output.MaximumRetryAttempts),
    ParallelizationFactor: __expectInt32(output.ParallelizationFactor),
    Queues: output.Queues != null ? de_Queues(output.Queues, context) : undefined,
    ScalingConfig: output.ScalingConfig != null ? de_ScalingConfig(output.ScalingConfig, context) : undefined,
    SelfManagedEventSource:
      output.SelfManagedEventSource != null
        ? de_SelfManagedEventSource(output.SelfManagedEventSource, context)
        : undefined,
    SelfManagedKafkaEventSourceConfig:
      output.SelfManagedKafkaEventSourceConfig != null
        ? de_SelfManagedKafkaEventSourceConfig(output.SelfManagedKafkaEventSourceConfig, context)
        : undefined,
    SourceAccessConfigurations:
      output.SourceAccessConfigurations != null
        ? de_SourceAccessConfigurations(output.SourceAccessConfigurations, context)
        : undefined,
    StartingPosition: __expectString(output.StartingPosition),
    StartingPositionTimestamp:
      output.StartingPositionTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartingPositionTimestamp)))
        : undefined,
    State: __expectString(output.State),
    StateTransitionReason: __expectString(output.StateTransitionReason),
    Topics: output.Topics != null ? de_Topics(output.Topics, context) : undefined,
    TumblingWindowInSeconds: __expectInt32(output.TumblingWindowInSeconds),
    UUID: __expectString(output.UUID),
  } as any;
};

/**
 * deserializeAws_restJson1EventSourceMappingsList
 */
const de_EventSourceMappingsList = (output: any, context: __SerdeContext): EventSourceMappingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventSourceMappingConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FileSystemConfig
 */
const de_FileSystemConfig = (output: any, context: __SerdeContext): FileSystemConfig => {
  return {
    Arn: __expectString(output.Arn),
    LocalMountPath: __expectString(output.LocalMountPath),
  } as any;
};

/**
 * deserializeAws_restJson1FileSystemConfigList
 */
const de_FileSystemConfigList = (output: any, context: __SerdeContext): FileSystemConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FileSystemConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Filter
 */
const de_Filter = (output: any, context: __SerdeContext): Filter => {
  return {
    Pattern: __expectString(output.Pattern),
  } as any;
};

/**
 * deserializeAws_restJson1FilterCriteria
 */
const de_FilterCriteria = (output: any, context: __SerdeContext): FilterCriteria => {
  return {
    Filters: output.Filters != null ? de_FilterList(output.Filters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FilterList
 */
const de_FilterList = (output: any, context: __SerdeContext): Filter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Filter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FunctionArnList
 */
const de_FunctionArnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FunctionCodeLocation
 */
const de_FunctionCodeLocation = (output: any, context: __SerdeContext): FunctionCodeLocation => {
  return {
    ImageUri: __expectString(output.ImageUri),
    Location: __expectString(output.Location),
    RepositoryType: __expectString(output.RepositoryType),
    ResolvedImageUri: __expectString(output.ResolvedImageUri),
  } as any;
};

/**
 * deserializeAws_restJson1FunctionConfiguration
 */
const de_FunctionConfiguration = (output: any, context: __SerdeContext): FunctionConfiguration => {
  return {
    Architectures: output.Architectures != null ? de_ArchitecturesList(output.Architectures, context) : undefined,
    CodeSha256: __expectString(output.CodeSha256),
    CodeSize: __expectLong(output.CodeSize),
    DeadLetterConfig:
      output.DeadLetterConfig != null ? de_DeadLetterConfig(output.DeadLetterConfig, context) : undefined,
    Description: __expectString(output.Description),
    Environment: output.Environment != null ? de_EnvironmentResponse(output.Environment, context) : undefined,
    EphemeralStorage:
      output.EphemeralStorage != null ? de_EphemeralStorage(output.EphemeralStorage, context) : undefined,
    FileSystemConfigs:
      output.FileSystemConfigs != null ? de_FileSystemConfigList(output.FileSystemConfigs, context) : undefined,
    FunctionArn: __expectString(output.FunctionArn),
    FunctionName: __expectString(output.FunctionName),
    Handler: __expectString(output.Handler),
    ImageConfigResponse:
      output.ImageConfigResponse != null ? de_ImageConfigResponse(output.ImageConfigResponse, context) : undefined,
    KMSKeyArn: __expectString(output.KMSKeyArn),
    LastModified: __expectString(output.LastModified),
    LastUpdateStatus: __expectString(output.LastUpdateStatus),
    LastUpdateStatusReason: __expectString(output.LastUpdateStatusReason),
    LastUpdateStatusReasonCode: __expectString(output.LastUpdateStatusReasonCode),
    Layers: output.Layers != null ? de_LayersReferenceList(output.Layers, context) : undefined,
    MasterArn: __expectString(output.MasterArn),
    MemorySize: __expectInt32(output.MemorySize),
    PackageType: __expectString(output.PackageType),
    RevisionId: __expectString(output.RevisionId),
    Role: __expectString(output.Role),
    Runtime: __expectString(output.Runtime),
    RuntimeVersionConfig:
      output.RuntimeVersionConfig != null ? de_RuntimeVersionConfig(output.RuntimeVersionConfig, context) : undefined,
    SigningJobArn: __expectString(output.SigningJobArn),
    SigningProfileVersionArn: __expectString(output.SigningProfileVersionArn),
    SnapStart: output.SnapStart != null ? de_SnapStartResponse(output.SnapStart, context) : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
    StateReasonCode: __expectString(output.StateReasonCode),
    Timeout: __expectInt32(output.Timeout),
    TracingConfig: output.TracingConfig != null ? de_TracingConfigResponse(output.TracingConfig, context) : undefined,
    Version: __expectString(output.Version),
    VpcConfig: output.VpcConfig != null ? de_VpcConfigResponse(output.VpcConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FunctionEventInvokeConfig
 */
const de_FunctionEventInvokeConfig = (output: any, context: __SerdeContext): FunctionEventInvokeConfig => {
  return {
    DestinationConfig:
      output.DestinationConfig != null ? de_DestinationConfig(output.DestinationConfig, context) : undefined,
    FunctionArn: __expectString(output.FunctionArn),
    LastModified:
      output.LastModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModified)))
        : undefined,
    MaximumEventAgeInSeconds: __expectInt32(output.MaximumEventAgeInSeconds),
    MaximumRetryAttempts: __expectInt32(output.MaximumRetryAttempts),
  } as any;
};

/**
 * deserializeAws_restJson1FunctionEventInvokeConfigList
 */
const de_FunctionEventInvokeConfigList = (output: any, context: __SerdeContext): FunctionEventInvokeConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FunctionEventInvokeConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FunctionList
 */
const de_FunctionList = (output: any, context: __SerdeContext): FunctionConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FunctionConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FunctionResponseTypeList
 */
const de_FunctionResponseTypeList = (output: any, context: __SerdeContext): (FunctionResponseType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FunctionUrlConfig
 */
const de_FunctionUrlConfig = (output: any, context: __SerdeContext): FunctionUrlConfig => {
  return {
    AuthType: __expectString(output.AuthType),
    Cors: output.Cors != null ? de_Cors(output.Cors, context) : undefined,
    CreationTime: __expectString(output.CreationTime),
    FunctionArn: __expectString(output.FunctionArn),
    FunctionUrl: __expectString(output.FunctionUrl),
    LastModifiedTime: __expectString(output.LastModifiedTime),
  } as any;
};

/**
 * deserializeAws_restJson1FunctionUrlConfigList
 */
const de_FunctionUrlConfigList = (output: any, context: __SerdeContext): FunctionUrlConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FunctionUrlConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HeadersList
 */
const de_HeadersList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImageConfig
 */
const de_ImageConfig = (output: any, context: __SerdeContext): ImageConfig => {
  return {
    Command: output.Command != null ? de_StringList(output.Command, context) : undefined,
    EntryPoint: output.EntryPoint != null ? de_StringList(output.EntryPoint, context) : undefined,
    WorkingDirectory: __expectString(output.WorkingDirectory),
  } as any;
};

/**
 * deserializeAws_restJson1ImageConfigError
 */
const de_ImageConfigError = (output: any, context: __SerdeContext): ImageConfigError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_restJson1ImageConfigResponse
 */
const de_ImageConfigResponse = (output: any, context: __SerdeContext): ImageConfigResponse => {
  return {
    Error: output.Error != null ? de_ImageConfigError(output.Error, context) : undefined,
    ImageConfig: output.ImageConfig != null ? de_ImageConfig(output.ImageConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Layer
 */
const de_Layer = (output: any, context: __SerdeContext): Layer => {
  return {
    Arn: __expectString(output.Arn),
    CodeSize: __expectLong(output.CodeSize),
    SigningJobArn: __expectString(output.SigningJobArn),
    SigningProfileVersionArn: __expectString(output.SigningProfileVersionArn),
  } as any;
};

/**
 * deserializeAws_restJson1LayersList
 */
const de_LayersList = (output: any, context: __SerdeContext): LayersListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LayersListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LayersListItem
 */
const de_LayersListItem = (output: any, context: __SerdeContext): LayersListItem => {
  return {
    LatestMatchingVersion:
      output.LatestMatchingVersion != null
        ? de_LayerVersionsListItem(output.LatestMatchingVersion, context)
        : undefined,
    LayerArn: __expectString(output.LayerArn),
    LayerName: __expectString(output.LayerName),
  } as any;
};

/**
 * deserializeAws_restJson1LayersReferenceList
 */
const de_LayersReferenceList = (output: any, context: __SerdeContext): Layer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Layer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LayerVersionContentOutput
 */
const de_LayerVersionContentOutput = (output: any, context: __SerdeContext): LayerVersionContentOutput => {
  return {
    CodeSha256: __expectString(output.CodeSha256),
    CodeSize: __expectLong(output.CodeSize),
    Location: __expectString(output.Location),
    SigningJobArn: __expectString(output.SigningJobArn),
    SigningProfileVersionArn: __expectString(output.SigningProfileVersionArn),
  } as any;
};

/**
 * deserializeAws_restJson1LayerVersionsList
 */
const de_LayerVersionsList = (output: any, context: __SerdeContext): LayerVersionsListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LayerVersionsListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LayerVersionsListItem
 */
const de_LayerVersionsListItem = (output: any, context: __SerdeContext): LayerVersionsListItem => {
  return {
    CompatibleArchitectures:
      output.CompatibleArchitectures != null
        ? de_CompatibleArchitectures(output.CompatibleArchitectures, context)
        : undefined,
    CompatibleRuntimes:
      output.CompatibleRuntimes != null ? de_CompatibleRuntimes(output.CompatibleRuntimes, context) : undefined,
    CreatedDate: __expectString(output.CreatedDate),
    Description: __expectString(output.Description),
    LayerVersionArn: __expectString(output.LayerVersionArn),
    LicenseInfo: __expectString(output.LicenseInfo),
    Version: __expectLong(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1OnFailure
 */
const de_OnFailure = (output: any, context: __SerdeContext): OnFailure => {
  return {
    Destination: __expectString(output.Destination),
  } as any;
};

/**
 * deserializeAws_restJson1OnSuccess
 */
const de_OnSuccess = (output: any, context: __SerdeContext): OnSuccess => {
  return {
    Destination: __expectString(output.Destination),
  } as any;
};

/**
 * deserializeAws_restJson1ProvisionedConcurrencyConfigList
 */
const de_ProvisionedConcurrencyConfigList = (
  output: any,
  context: __SerdeContext
): ProvisionedConcurrencyConfigListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProvisionedConcurrencyConfigListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProvisionedConcurrencyConfigListItem
 */
const de_ProvisionedConcurrencyConfigListItem = (
  output: any,
  context: __SerdeContext
): ProvisionedConcurrencyConfigListItem => {
  return {
    AllocatedProvisionedConcurrentExecutions: __expectInt32(output.AllocatedProvisionedConcurrentExecutions),
    AvailableProvisionedConcurrentExecutions: __expectInt32(output.AvailableProvisionedConcurrentExecutions),
    FunctionArn: __expectString(output.FunctionArn),
    LastModified: __expectString(output.LastModified),
    RequestedProvisionedConcurrentExecutions: __expectInt32(output.RequestedProvisionedConcurrentExecutions),
    Status: __expectString(output.Status),
    StatusReason: __expectString(output.StatusReason),
  } as any;
};

/**
 * deserializeAws_restJson1Queues
 */
const de_Queues = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RuntimeVersionConfig
 */
const de_RuntimeVersionConfig = (output: any, context: __SerdeContext): RuntimeVersionConfig => {
  return {
    Error: output.Error != null ? de_RuntimeVersionError(output.Error, context) : undefined,
    RuntimeVersionArn: __expectString(output.RuntimeVersionArn),
  } as any;
};

/**
 * deserializeAws_restJson1RuntimeVersionError
 */
const de_RuntimeVersionError = (output: any, context: __SerdeContext): RuntimeVersionError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_restJson1ScalingConfig
 */
const de_ScalingConfig = (output: any, context: __SerdeContext): ScalingConfig => {
  return {
    MaximumConcurrency: __expectInt32(output.MaximumConcurrency),
  } as any;
};

/**
 * deserializeAws_restJson1SecurityGroupIds
 */
const de_SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SelfManagedEventSource
 */
const de_SelfManagedEventSource = (output: any, context: __SerdeContext): SelfManagedEventSource => {
  return {
    Endpoints: output.Endpoints != null ? de_Endpoints(output.Endpoints, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SelfManagedKafkaEventSourceConfig
 */
const de_SelfManagedKafkaEventSourceConfig = (
  output: any,
  context: __SerdeContext
): SelfManagedKafkaEventSourceConfig => {
  return {
    ConsumerGroupId: __expectString(output.ConsumerGroupId),
  } as any;
};

/**
 * deserializeAws_restJson1SigningProfileVersionArns
 */
const de_SigningProfileVersionArns = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SnapStartResponse
 */
const de_SnapStartResponse = (output: any, context: __SerdeContext): SnapStartResponse => {
  return {
    ApplyOn: __expectString(output.ApplyOn),
    OptimizationStatus: __expectString(output.OptimizationStatus),
  } as any;
};

/**
 * deserializeAws_restJson1SourceAccessConfiguration
 */
const de_SourceAccessConfiguration = (output: any, context: __SerdeContext): SourceAccessConfiguration => {
  return {
    Type: __expectString(output.Type),
    URI: __expectString(output.URI),
  } as any;
};

/**
 * deserializeAws_restJson1SourceAccessConfigurations
 */
const de_SourceAccessConfigurations = (output: any, context: __SerdeContext): SourceAccessConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SourceAccessConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubnetIds
 */
const de_SubnetIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Topics
 */
const de_Topics = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TracingConfigResponse
 */
const de_TracingConfigResponse = (output: any, context: __SerdeContext): TracingConfigResponse => {
  return {
    Mode: __expectString(output.Mode),
  } as any;
};

/**
 * deserializeAws_restJson1VpcConfigResponse
 */
const de_VpcConfigResponse = (output: any, context: __SerdeContext): VpcConfigResponse => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds != null ? de_SecurityGroupIds(output.SecurityGroupIds, context) : undefined,
    SubnetIds: output.SubnetIds != null ? de_SubnetIds(output.SubnetIds, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
