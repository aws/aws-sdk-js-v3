// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  GetFunctionRecursionConfigCommandInput,
  GetFunctionRecursionConfigCommandOutput,
} from "../commands/GetFunctionRecursionConfigCommand";
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
import {
  InvokeWithResponseStreamCommandInput,
  InvokeWithResponseStreamCommandOutput,
} from "../commands/InvokeWithResponseStreamCommand";
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
  PutFunctionRecursionConfigCommandInput,
  PutFunctionRecursionConfigCommandOutput,
} from "../commands/PutFunctionRecursionConfigCommand";
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
  AliasConfiguration,
  AliasRoutingConfiguration,
  AllowedPublishers,
  AmazonManagedKafkaEventSourceConfig,
  Architecture,
  CodeSigningConfigNotFoundException,
  CodeSigningPolicies,
  CodeStorageExceededException,
  CodeVerificationFailedException,
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
  EphemeralStorage,
  EventSourceMappingConfiguration,
  FileSystemConfig,
  Filter,
  FilterCriteria,
  FunctionCode,
  FunctionEventInvokeConfig,
  FunctionResponseType,
  ImageConfig,
  InvalidCodeSignatureException,
  InvalidParameterValueException,
  InvalidRequestContentException,
  InvalidRuntimeException,
  InvalidSecurityGroupIDException,
  InvalidSubnetIDException,
  InvalidZipFileException,
  InvokeResponseStreamUpdate,
  InvokeWithResponseStreamCompleteEvent,
  InvokeWithResponseStreamResponseEvent,
  KMSAccessDeniedException,
  KMSDisabledException,
  KMSInvalidStateException,
  KMSNotFoundException,
  LayerVersionContentInput,
  LoggingConfig,
  OnFailure,
  OnSuccess,
  PolicyLengthExceededException,
  PreconditionFailedException,
  ProvisionedConcurrencyConfigNotFoundException,
  RecursiveInvocationException,
  RequestTooLargeException,
  ResourceConflictException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceNotReadyException,
  Runtime,
  ScalingConfig,
  SelfManagedEventSource,
  SelfManagedKafkaEventSourceConfig,
  ServiceException,
  SnapStart,
  SnapStartException,
  SnapStartNotReadyException,
  SnapStartTimeoutException,
  SourceAccessConfiguration,
  SubnetIPAddressLimitReachedException,
  TooManyRequestsException,
  TracingConfig,
  UnsupportedMediaTypeException,
  VpcConfig,
} from "../models/models_0";

/**
 * serializeAws_restJson1AddLayerVersionPermissionCommand
 */
export const se_AddLayerVersionPermissionCommand = async (
  input: AddLayerVersionPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy");
  b.p("LayerName", () => input.LayerName!, "{LayerName}", false);
  b.p("VersionNumber", () => input.VersionNumber!.toString(), "{VersionNumber}", false);
  const query: any = map({
    [_RI]: [, input[_RI]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Action: [],
      OrganizationId: [],
      Principal: [],
      StatementId: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AddPermissionCommand
 */
export const se_AddPermissionCommand = async (
  input: AddPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-03-31/functions/{FunctionName}/policy");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Action: [],
      EventSourceToken: [],
      FunctionUrlAuthType: [],
      Principal: [],
      PrincipalOrgID: [],
      RevisionId: [],
      SourceAccount: [],
      SourceArn: [],
      StatementId: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAliasCommand
 */
export const se_CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-03-31/functions/{FunctionName}/aliases");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      FunctionVersion: [],
      Name: [],
      RoutingConfig: (_) => se_AliasRoutingConfiguration(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCodeSigningConfigCommand
 */
export const se_CreateCodeSigningConfigCommand = async (
  input: CreateCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2020-04-22/code-signing-configs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AllowedPublishers: (_) => _json(_),
      CodeSigningPolicies: (_) => _json(_),
      Description: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEventSourceMappingCommand
 */
export const se_CreateEventSourceMappingCommand = async (
  input: CreateEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-03-31/event-source-mappings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AmazonManagedKafkaEventSourceConfig: (_) => _json(_),
      BatchSize: [],
      BisectBatchOnFunctionError: [],
      DestinationConfig: (_) => _json(_),
      DocumentDBEventSourceConfig: (_) => _json(_),
      Enabled: [],
      EventSourceArn: [],
      FilterCriteria: (_) => _json(_),
      FunctionName: [],
      FunctionResponseTypes: (_) => _json(_),
      KMSKeyArn: [],
      MaximumBatchingWindowInSeconds: [],
      MaximumRecordAgeInSeconds: [],
      MaximumRetryAttempts: [],
      ParallelizationFactor: [],
      Queues: (_) => _json(_),
      ScalingConfig: (_) => _json(_),
      SelfManagedEventSource: (_) => _json(_),
      SelfManagedKafkaEventSourceConfig: (_) => _json(_),
      SourceAccessConfigurations: (_) => _json(_),
      StartingPosition: [],
      StartingPositionTimestamp: (_) => _.getTime() / 1_000,
      Tags: (_) => _json(_),
      Topics: (_) => _json(_),
      TumblingWindowInSeconds: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFunctionCommand
 */
export const se_CreateFunctionCommand = async (
  input: CreateFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-03-31/functions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Architectures: (_) => _json(_),
      Code: (_) => se_FunctionCode(_, context),
      CodeSigningConfigArn: [],
      DeadLetterConfig: (_) => _json(_),
      Description: [],
      Environment: (_) => _json(_),
      EphemeralStorage: (_) => _json(_),
      FileSystemConfigs: (_) => _json(_),
      FunctionName: [],
      Handler: [],
      ImageConfig: (_) => _json(_),
      KMSKeyArn: [],
      Layers: (_) => _json(_),
      LoggingConfig: (_) => _json(_),
      MemorySize: [],
      PackageType: [],
      Publish: [],
      Role: [],
      Runtime: [],
      SnapStart: (_) => _json(_),
      Tags: (_) => _json(_),
      Timeout: [],
      TracingConfig: (_) => _json(_),
      VpcConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFunctionUrlConfigCommand
 */
export const se_CreateFunctionUrlConfigCommand = async (
  input: CreateFunctionUrlConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-10-31/functions/{FunctionName}/url");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      AuthType: [],
      Cors: (_) => _json(_),
      InvokeMode: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAliasCommand
 */
export const se_DeleteAliasCommand = async (
  input: DeleteAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-03-31/functions/{FunctionName}/aliases/{Name}");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCodeSigningConfigCommand
 */
export const se_DeleteCodeSigningConfigCommand = async (
  input: DeleteCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-04-22/code-signing-configs/{CodeSigningConfigArn}");
  b.p("CodeSigningConfigArn", () => input.CodeSigningConfigArn!, "{CodeSigningConfigArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEventSourceMappingCommand
 */
export const se_DeleteEventSourceMappingCommand = async (
  input: DeleteEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-03-31/event-source-mappings/{UUID}");
  b.p("UUID", () => input.UUID!, "{UUID}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFunctionCommand
 */
export const se_DeleteFunctionCommand = async (
  input: DeleteFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-03-31/functions/{FunctionName}");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFunctionCodeSigningConfigCommand
 */
export const se_DeleteFunctionCodeSigningConfigCommand = async (
  input: DeleteFunctionCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-06-30/functions/{FunctionName}/code-signing-config");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFunctionConcurrencyCommand
 */
export const se_DeleteFunctionConcurrencyCommand = async (
  input: DeleteFunctionConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2017-10-31/functions/{FunctionName}/concurrency");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFunctionEventInvokeConfigCommand
 */
export const se_DeleteFunctionEventInvokeConfigCommand = async (
  input: DeleteFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2019-09-25/functions/{FunctionName}/event-invoke-config");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFunctionUrlConfigCommand
 */
export const se_DeleteFunctionUrlConfigCommand = async (
  input: DeleteFunctionUrlConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-10-31/functions/{FunctionName}/url");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLayerVersionCommand
 */
export const se_DeleteLayerVersionCommand = async (
  input: DeleteLayerVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2018-10-31/layers/{LayerName}/versions/{VersionNumber}");
  b.p("LayerName", () => input.LayerName!, "{LayerName}", false);
  b.p("VersionNumber", () => input.VersionNumber!.toString(), "{VersionNumber}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand
 */
export const se_DeleteProvisionedConcurrencyConfigCommand = async (
  input: DeleteProvisionedConcurrencyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2019-09-30/functions/{FunctionName}/provisioned-concurrency");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, __expectNonNull(input[_Q]!, `Qualifier`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccountSettingsCommand
 */
export const se_GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2016-08-19/account-settings");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAliasCommand
 */
export const se_GetAliasCommand = async (
  input: GetAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-03-31/functions/{FunctionName}/aliases/{Name}");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCodeSigningConfigCommand
 */
export const se_GetCodeSigningConfigCommand = async (
  input: GetCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-04-22/code-signing-configs/{CodeSigningConfigArn}");
  b.p("CodeSigningConfigArn", () => input.CodeSigningConfigArn!, "{CodeSigningConfigArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEventSourceMappingCommand
 */
export const se_GetEventSourceMappingCommand = async (
  input: GetEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-03-31/event-source-mappings/{UUID}");
  b.p("UUID", () => input.UUID!, "{UUID}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFunctionCommand
 */
export const se_GetFunctionCommand = async (
  input: GetFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-03-31/functions/{FunctionName}");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFunctionCodeSigningConfigCommand
 */
export const se_GetFunctionCodeSigningConfigCommand = async (
  input: GetFunctionCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-06-30/functions/{FunctionName}/code-signing-config");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFunctionConcurrencyCommand
 */
export const se_GetFunctionConcurrencyCommand = async (
  input: GetFunctionConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2019-09-30/functions/{FunctionName}/concurrency");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFunctionConfigurationCommand
 */
export const se_GetFunctionConfigurationCommand = async (
  input: GetFunctionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-03-31/functions/{FunctionName}/configuration");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFunctionEventInvokeConfigCommand
 */
export const se_GetFunctionEventInvokeConfigCommand = async (
  input: GetFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2019-09-25/functions/{FunctionName}/event-invoke-config");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFunctionRecursionConfigCommand
 */
export const se_GetFunctionRecursionConfigCommand = async (
  input: GetFunctionRecursionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2024-08-31/functions/{FunctionName}/recursion-config");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFunctionUrlConfigCommand
 */
export const se_GetFunctionUrlConfigCommand = async (
  input: GetFunctionUrlConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-10-31/functions/{FunctionName}/url");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLayerVersionCommand
 */
export const se_GetLayerVersionCommand = async (
  input: GetLayerVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2018-10-31/layers/{LayerName}/versions/{VersionNumber}");
  b.p("LayerName", () => input.LayerName!, "{LayerName}", false);
  b.p("VersionNumber", () => input.VersionNumber!.toString(), "{VersionNumber}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLayerVersionByArnCommand
 */
export const se_GetLayerVersionByArnCommand = async (
  input: GetLayerVersionByArnCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2018-10-31/layers");
  const query: any = map({
    [_f]: [, "LayerVersion"],
    [_A]: [, __expectNonNull(input[_A]!, `Arn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLayerVersionPolicyCommand
 */
export const se_GetLayerVersionPolicyCommand = async (
  input: GetLayerVersionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy");
  b.p("LayerName", () => input.LayerName!, "{LayerName}", false);
  b.p("VersionNumber", () => input.VersionNumber!.toString(), "{VersionNumber}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPolicyCommand
 */
export const se_GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-03-31/functions/{FunctionName}/policy");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProvisionedConcurrencyConfigCommand
 */
export const se_GetProvisionedConcurrencyConfigCommand = async (
  input: GetProvisionedConcurrencyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2019-09-30/functions/{FunctionName}/provisioned-concurrency");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, __expectNonNull(input[_Q]!, `Qualifier`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRuntimeManagementConfigCommand
 */
export const se_GetRuntimeManagementConfigCommand = async (
  input: GetRuntimeManagementConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-07-20/functions/{FunctionName}/runtime-management-config");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InvokeCommand
 */
export const se_InvokeCommand = async (input: InvokeCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    [_xait]: input[_IT]!,
    [_xalt]: input[_LT]!,
    [_xacc]: input[_CC]!,
  });
  b.bp("/2015-03-31/functions/{FunctionName}/invocations");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  if (input.Payload !== undefined) {
    body = input.Payload;
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InvokeAsyncCommand
 */
export const se_InvokeAsyncCommand = async (
  input: InvokeAsyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/octet-stream",
  };
  b.bp("/2014-11-13/functions/{FunctionName}/invoke-async");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  let body: any;
  if (input.InvokeArgs !== undefined) {
    body = input.InvokeArgs;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InvokeWithResponseStreamCommand
 */
export const se_InvokeWithResponseStreamCommand = async (
  input: InvokeWithResponseStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    [_xait]: input[_IT]!,
    [_xalt]: input[_LT]!,
    [_xacc]: input[_CC]!,
  });
  b.bp("/2021-11-15/functions/{FunctionName}/response-streaming-invocations");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  if (input.Payload !== undefined) {
    body = input.Payload;
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAliasesCommand
 */
export const se_ListAliasesCommand = async (
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-03-31/functions/{FunctionName}/aliases");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_FV]: [, input[_FV]!],
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCodeSigningConfigsCommand
 */
export const se_ListCodeSigningConfigsCommand = async (
  input: ListCodeSigningConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-04-22/code-signing-configs");
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEventSourceMappingsCommand
 */
export const se_ListEventSourceMappingsCommand = async (
  input: ListEventSourceMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-03-31/event-source-mappings");
  const query: any = map({
    [_ESA]: [, input[_ESA]!],
    [_FN]: [, input[_FN]!],
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFunctionEventInvokeConfigsCommand
 */
export const se_ListFunctionEventInvokeConfigsCommand = async (
  input: ListFunctionEventInvokeConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2019-09-25/functions/{FunctionName}/event-invoke-config/list");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFunctionsCommand
 */
export const se_ListFunctionsCommand = async (
  input: ListFunctionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-03-31/functions");
  const query: any = map({
    [_MR]: [, input[_MR]!],
    [_FV]: [, input[_FV]!],
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFunctionsByCodeSigningConfigCommand
 */
export const se_ListFunctionsByCodeSigningConfigCommand = async (
  input: ListFunctionsByCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions");
  b.p("CodeSigningConfigArn", () => input.CodeSigningConfigArn!, "{CodeSigningConfigArn}", false);
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFunctionUrlConfigsCommand
 */
export const se_ListFunctionUrlConfigsCommand = async (
  input: ListFunctionUrlConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-10-31/functions/{FunctionName}/urls");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLayersCommand
 */
export const se_ListLayersCommand = async (
  input: ListLayersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2018-10-31/layers");
  const query: any = map({
    [_CR]: [, input[_CR]!],
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
    [_CA]: [, input[_CA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLayerVersionsCommand
 */
export const se_ListLayerVersionsCommand = async (
  input: ListLayerVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2018-10-31/layers/{LayerName}/versions");
  b.p("LayerName", () => input.LayerName!, "{LayerName}", false);
  const query: any = map({
    [_CR]: [, input[_CR]!],
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
    [_CA]: [, input[_CA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProvisionedConcurrencyConfigsCommand
 */
export const se_ListProvisionedConcurrencyConfigsCommand = async (
  input: ListProvisionedConcurrencyConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2019-09-30/functions/{FunctionName}/provisioned-concurrency");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_L]: [, "ALL"],
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2017-03-31/tags/{Resource}");
  b.p("Resource", () => input.Resource!, "{Resource}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVersionsByFunctionCommand
 */
export const se_ListVersionsByFunctionCommand = async (
  input: ListVersionsByFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-03-31/functions/{FunctionName}/versions");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_M]: [, input[_M]!],
    [_MI]: [() => input.MaxItems !== void 0, () => input[_MI]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PublishLayerVersionCommand
 */
export const se_PublishLayerVersionCommand = async (
  input: PublishLayerVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2018-10-31/layers/{LayerName}/versions");
  b.p("LayerName", () => input.LayerName!, "{LayerName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CompatibleArchitectures: (_) => _json(_),
      CompatibleRuntimes: (_) => _json(_),
      Content: (_) => se_LayerVersionContentInput(_, context),
      Description: [],
      LicenseInfo: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PublishVersionCommand
 */
export const se_PublishVersionCommand = async (
  input: PublishVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-03-31/functions/{FunctionName}/versions");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CodeSha256: [],
      Description: [],
      RevisionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutFunctionCodeSigningConfigCommand
 */
export const se_PutFunctionCodeSigningConfigCommand = async (
  input: PutFunctionCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2020-06-30/functions/{FunctionName}/code-signing-config");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CodeSigningConfigArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutFunctionConcurrencyCommand
 */
export const se_PutFunctionConcurrencyCommand = async (
  input: PutFunctionConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2017-10-31/functions/{FunctionName}/concurrency");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ReservedConcurrentExecutions: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutFunctionEventInvokeConfigCommand
 */
export const se_PutFunctionEventInvokeConfigCommand = async (
  input: PutFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2019-09-25/functions/{FunctionName}/event-invoke-config");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      DestinationConfig: (_) => _json(_),
      MaximumEventAgeInSeconds: [],
      MaximumRetryAttempts: [],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutFunctionRecursionConfigCommand
 */
export const se_PutFunctionRecursionConfigCommand = async (
  input: PutFunctionRecursionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2024-08-31/functions/{FunctionName}/recursion-config");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      RecursiveLoop: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutProvisionedConcurrencyConfigCommand
 */
export const se_PutProvisionedConcurrencyConfigCommand = async (
  input: PutProvisionedConcurrencyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2019-09-30/functions/{FunctionName}/provisioned-concurrency");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, __expectNonNull(input[_Q]!, `Qualifier`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ProvisionedConcurrentExecutions: [],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutRuntimeManagementConfigCommand
 */
export const se_PutRuntimeManagementConfigCommand = async (
  input: PutRuntimeManagementConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-07-20/functions/{FunctionName}/runtime-management-config");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      RuntimeVersionArn: [],
      UpdateRuntimeOn: [],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemoveLayerVersionPermissionCommand
 */
export const se_RemoveLayerVersionPermissionCommand = async (
  input: RemoveLayerVersionPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}");
  b.p("LayerName", () => input.LayerName!, "{LayerName}", false);
  b.p("VersionNumber", () => input.VersionNumber!.toString(), "{VersionNumber}", false);
  b.p("StatementId", () => input.StatementId!, "{StatementId}", false);
  const query: any = map({
    [_RI]: [, input[_RI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemovePermissionCommand
 */
export const se_RemovePermissionCommand = async (
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-03-31/functions/{FunctionName}/policy/{StatementId}");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  b.p("StatementId", () => input.StatementId!, "{StatementId}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
    [_RI]: [, input[_RI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2017-03-31/tags/{Resource}");
  b.p("Resource", () => input.Resource!, "{Resource}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2017-03-31/tags/{Resource}");
  b.p("Resource", () => input.Resource!, "{Resource}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAliasCommand
 */
export const se_UpdateAliasCommand = async (
  input: UpdateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-03-31/functions/{FunctionName}/aliases/{Name}");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      FunctionVersion: [],
      RevisionId: [],
      RoutingConfig: (_) => se_AliasRoutingConfiguration(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCodeSigningConfigCommand
 */
export const se_UpdateCodeSigningConfigCommand = async (
  input: UpdateCodeSigningConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2020-04-22/code-signing-configs/{CodeSigningConfigArn}");
  b.p("CodeSigningConfigArn", () => input.CodeSigningConfigArn!, "{CodeSigningConfigArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AllowedPublishers: (_) => _json(_),
      CodeSigningPolicies: (_) => _json(_),
      Description: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEventSourceMappingCommand
 */
export const se_UpdateEventSourceMappingCommand = async (
  input: UpdateEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-03-31/event-source-mappings/{UUID}");
  b.p("UUID", () => input.UUID!, "{UUID}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      BatchSize: [],
      BisectBatchOnFunctionError: [],
      DestinationConfig: (_) => _json(_),
      DocumentDBEventSourceConfig: (_) => _json(_),
      Enabled: [],
      FilterCriteria: (_) => _json(_),
      FunctionName: [],
      FunctionResponseTypes: (_) => _json(_),
      KMSKeyArn: [],
      MaximumBatchingWindowInSeconds: [],
      MaximumRecordAgeInSeconds: [],
      MaximumRetryAttempts: [],
      ParallelizationFactor: [],
      ScalingConfig: (_) => _json(_),
      SourceAccessConfigurations: (_) => _json(_),
      TumblingWindowInSeconds: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFunctionCodeCommand
 */
export const se_UpdateFunctionCodeCommand = async (
  input: UpdateFunctionCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-03-31/functions/{FunctionName}/code");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Architectures: (_) => _json(_),
      DryRun: [],
      ImageUri: [],
      Publish: [],
      RevisionId: [],
      S3Bucket: [],
      S3Key: [],
      S3ObjectVersion: [],
      ZipFile: (_) => context.base64Encoder(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFunctionConfigurationCommand
 */
export const se_UpdateFunctionConfigurationCommand = async (
  input: UpdateFunctionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-03-31/functions/{FunctionName}/configuration");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeadLetterConfig: (_) => _json(_),
      Description: [],
      Environment: (_) => _json(_),
      EphemeralStorage: (_) => _json(_),
      FileSystemConfigs: (_) => _json(_),
      Handler: [],
      ImageConfig: (_) => _json(_),
      KMSKeyArn: [],
      Layers: (_) => _json(_),
      LoggingConfig: (_) => _json(_),
      MemorySize: [],
      RevisionId: [],
      Role: [],
      Runtime: [],
      SnapStart: (_) => _json(_),
      Timeout: [],
      TracingConfig: (_) => _json(_),
      VpcConfig: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFunctionEventInvokeConfigCommand
 */
export const se_UpdateFunctionEventInvokeConfigCommand = async (
  input: UpdateFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2019-09-25/functions/{FunctionName}/event-invoke-config");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      DestinationConfig: (_) => _json(_),
      MaximumEventAgeInSeconds: [],
      MaximumRetryAttempts: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFunctionUrlConfigCommand
 */
export const se_UpdateFunctionUrlConfigCommand = async (
  input: UpdateFunctionUrlConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-10-31/functions/{FunctionName}/url");
  b.p("FunctionName", () => input.FunctionName!, "{FunctionName}", false);
  const query: any = map({
    [_Q]: [, input[_Q]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      AuthType: [],
      Cors: (_) => _json(_),
      InvokeMode: [],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AddLayerVersionPermissionCommand
 */
export const de_AddLayerVersionPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddLayerVersionPermissionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RevisionId: __expectString,
    Statement: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AddPermissionCommand
 */
export const de_AddPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPermissionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Statement: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAliasCommand
 */
export const de_CreateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AliasArn: __expectString,
    Description: __expectString,
    FunctionVersion: __expectString,
    Name: __expectString,
    RevisionId: __expectString,
    RoutingConfig: (_) => de_AliasRoutingConfiguration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCodeSigningConfigCommand
 */
export const de_CreateCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CodeSigningConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEventSourceMappingCommand
 */
export const de_CreateEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AmazonManagedKafkaEventSourceConfig: _json,
    BatchSize: __expectInt32,
    BisectBatchOnFunctionError: __expectBoolean,
    DestinationConfig: _json,
    DocumentDBEventSourceConfig: _json,
    EventSourceArn: __expectString,
    EventSourceMappingArn: __expectString,
    FilterCriteria: _json,
    FilterCriteriaError: _json,
    FunctionArn: __expectString,
    FunctionResponseTypes: _json,
    KMSKeyArn: __expectString,
    LastModified: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastProcessingResult: __expectString,
    MaximumBatchingWindowInSeconds: __expectInt32,
    MaximumRecordAgeInSeconds: __expectInt32,
    MaximumRetryAttempts: __expectInt32,
    ParallelizationFactor: __expectInt32,
    Queues: _json,
    ScalingConfig: _json,
    SelfManagedEventSource: _json,
    SelfManagedKafkaEventSourceConfig: _json,
    SourceAccessConfigurations: _json,
    StartingPosition: __expectString,
    StartingPositionTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateTransitionReason: __expectString,
    Topics: _json,
    TumblingWindowInSeconds: __expectInt32,
    UUID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFunctionCommand
 */
export const de_CreateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Architectures: _json,
    CodeSha256: __expectString,
    CodeSize: __expectLong,
    DeadLetterConfig: _json,
    Description: __expectString,
    Environment: _json,
    EphemeralStorage: _json,
    FileSystemConfigs: _json,
    FunctionArn: __expectString,
    FunctionName: __expectString,
    Handler: __expectString,
    ImageConfigResponse: _json,
    KMSKeyArn: __expectString,
    LastModified: __expectString,
    LastUpdateStatus: __expectString,
    LastUpdateStatusReason: __expectString,
    LastUpdateStatusReasonCode: __expectString,
    Layers: _json,
    LoggingConfig: _json,
    MasterArn: __expectString,
    MemorySize: __expectInt32,
    PackageType: __expectString,
    RevisionId: __expectString,
    Role: __expectString,
    Runtime: __expectString,
    RuntimeVersionConfig: _json,
    SigningJobArn: __expectString,
    SigningProfileVersionArn: __expectString,
    SnapStart: _json,
    State: __expectString,
    StateReason: __expectString,
    StateReasonCode: __expectString,
    Timeout: __expectInt32,
    TracingConfig: _json,
    Version: __expectString,
    VpcConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFunctionUrlConfigCommand
 */
export const de_CreateFunctionUrlConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionUrlConfigCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AuthType: __expectString,
    Cors: _json,
    CreationTime: __expectString,
    FunctionArn: __expectString,
    FunctionUrl: __expectString,
    InvokeMode: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAliasCommand
 */
export const de_DeleteAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCodeSigningConfigCommand
 */
export const de_DeleteCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEventSourceMappingCommand
 */
export const de_DeleteEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AmazonManagedKafkaEventSourceConfig: _json,
    BatchSize: __expectInt32,
    BisectBatchOnFunctionError: __expectBoolean,
    DestinationConfig: _json,
    DocumentDBEventSourceConfig: _json,
    EventSourceArn: __expectString,
    EventSourceMappingArn: __expectString,
    FilterCriteria: _json,
    FilterCriteriaError: _json,
    FunctionArn: __expectString,
    FunctionResponseTypes: _json,
    KMSKeyArn: __expectString,
    LastModified: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastProcessingResult: __expectString,
    MaximumBatchingWindowInSeconds: __expectInt32,
    MaximumRecordAgeInSeconds: __expectInt32,
    MaximumRetryAttempts: __expectInt32,
    ParallelizationFactor: __expectInt32,
    Queues: _json,
    ScalingConfig: _json,
    SelfManagedEventSource: _json,
    SelfManagedKafkaEventSourceConfig: _json,
    SourceAccessConfigurations: _json,
    StartingPosition: __expectString,
    StartingPositionTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateTransitionReason: __expectString,
    Topics: _json,
    TumblingWindowInSeconds: __expectInt32,
    UUID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFunctionCommand
 */
export const de_DeleteFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommand
 */
export const de_DeleteFunctionCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFunctionConcurrencyCommand
 */
export const de_DeleteFunctionConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionConcurrencyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommand
 */
export const de_DeleteFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFunctionUrlConfigCommand
 */
export const de_DeleteFunctionUrlConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionUrlConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLayerVersionCommand
 */
export const de_DeleteLayerVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLayerVersionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand
 */
export const de_DeleteProvisionedConcurrencyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisionedConcurrencyConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAccountSettingsCommand
 */
export const de_GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountLimit: _json,
    AccountUsage: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAliasCommand
 */
export const de_GetAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AliasArn: __expectString,
    Description: __expectString,
    FunctionVersion: __expectString,
    Name: __expectString,
    RevisionId: __expectString,
    RoutingConfig: (_) => de_AliasRoutingConfiguration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCodeSigningConfigCommand
 */
export const de_GetCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CodeSigningConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEventSourceMappingCommand
 */
export const de_GetEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AmazonManagedKafkaEventSourceConfig: _json,
    BatchSize: __expectInt32,
    BisectBatchOnFunctionError: __expectBoolean,
    DestinationConfig: _json,
    DocumentDBEventSourceConfig: _json,
    EventSourceArn: __expectString,
    EventSourceMappingArn: __expectString,
    FilterCriteria: _json,
    FilterCriteriaError: _json,
    FunctionArn: __expectString,
    FunctionResponseTypes: _json,
    KMSKeyArn: __expectString,
    LastModified: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastProcessingResult: __expectString,
    MaximumBatchingWindowInSeconds: __expectInt32,
    MaximumRecordAgeInSeconds: __expectInt32,
    MaximumRetryAttempts: __expectInt32,
    ParallelizationFactor: __expectInt32,
    Queues: _json,
    ScalingConfig: _json,
    SelfManagedEventSource: _json,
    SelfManagedKafkaEventSourceConfig: _json,
    SourceAccessConfigurations: _json,
    StartingPosition: __expectString,
    StartingPositionTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateTransitionReason: __expectString,
    Topics: _json,
    TumblingWindowInSeconds: __expectInt32,
    UUID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionCommand
 */
export const de_GetFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Code: _json,
    Concurrency: _json,
    Configuration: _json,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionCodeSigningConfigCommand
 */
export const de_GetFunctionCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CodeSigningConfigArn: __expectString,
    FunctionName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionConcurrencyCommand
 */
export const de_GetFunctionConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionConcurrencyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ReservedConcurrentExecutions: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionConfigurationCommand
 */
export const de_GetFunctionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Architectures: _json,
    CodeSha256: __expectString,
    CodeSize: __expectLong,
    DeadLetterConfig: _json,
    Description: __expectString,
    Environment: _json,
    EphemeralStorage: _json,
    FileSystemConfigs: _json,
    FunctionArn: __expectString,
    FunctionName: __expectString,
    Handler: __expectString,
    ImageConfigResponse: _json,
    KMSKeyArn: __expectString,
    LastModified: __expectString,
    LastUpdateStatus: __expectString,
    LastUpdateStatusReason: __expectString,
    LastUpdateStatusReasonCode: __expectString,
    Layers: _json,
    LoggingConfig: _json,
    MasterArn: __expectString,
    MemorySize: __expectInt32,
    PackageType: __expectString,
    RevisionId: __expectString,
    Role: __expectString,
    Runtime: __expectString,
    RuntimeVersionConfig: _json,
    SigningJobArn: __expectString,
    SigningProfileVersionArn: __expectString,
    SnapStart: _json,
    State: __expectString,
    StateReason: __expectString,
    StateReasonCode: __expectString,
    Timeout: __expectInt32,
    TracingConfig: _json,
    Version: __expectString,
    VpcConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionEventInvokeConfigCommand
 */
export const de_GetFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DestinationConfig: _json,
    FunctionArn: __expectString,
    LastModified: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaximumEventAgeInSeconds: __expectInt32,
    MaximumRetryAttempts: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionRecursionConfigCommand
 */
export const de_GetFunctionRecursionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionRecursionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RecursiveLoop: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFunctionUrlConfigCommand
 */
export const de_GetFunctionUrlConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionUrlConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AuthType: __expectString,
    Cors: _json,
    CreationTime: __expectString,
    FunctionArn: __expectString,
    FunctionUrl: __expectString,
    InvokeMode: __expectString,
    LastModifiedTime: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLayerVersionCommand
 */
export const de_GetLayerVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CompatibleArchitectures: _json,
    CompatibleRuntimes: _json,
    Content: _json,
    CreatedDate: __expectString,
    Description: __expectString,
    LayerArn: __expectString,
    LayerVersionArn: __expectString,
    LicenseInfo: __expectString,
    Version: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLayerVersionByArnCommand
 */
export const de_GetLayerVersionByArnCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionByArnCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CompatibleArchitectures: _json,
    CompatibleRuntimes: _json,
    Content: _json,
    CreatedDate: __expectString,
    Description: __expectString,
    LayerArn: __expectString,
    LayerVersionArn: __expectString,
    LicenseInfo: __expectString,
    Version: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLayerVersionPolicyCommand
 */
export const de_GetLayerVersionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Policy: __expectString,
    RevisionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPolicyCommand
 */
export const de_GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Policy: __expectString,
    RevisionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProvisionedConcurrencyConfigCommand
 */
export const de_GetProvisionedConcurrencyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProvisionedConcurrencyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AllocatedProvisionedConcurrentExecutions: __expectInt32,
    AvailableProvisionedConcurrentExecutions: __expectInt32,
    LastModified: __expectString,
    RequestedProvisionedConcurrentExecutions: __expectInt32,
    Status: __expectString,
    StatusReason: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRuntimeManagementConfigCommand
 */
export const de_GetRuntimeManagementConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuntimeManagementConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FunctionArn: __expectString,
    RuntimeVersionArn: __expectString,
    UpdateRuntimeOn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1InvokeCommand
 */
export const de_InvokeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_FE]: [, output.headers[_xafe]],
    [_LR]: [, output.headers[_xalr]],
    [_EV]: [, output.headers[_xaev]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Payload = data;
  map(contents, {
    StatusCode: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1InvokeAsyncCommand
 */
export const de_InvokeAsyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeAsyncCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1InvokeWithResponseStreamCommand
 */
export const de_InvokeWithResponseStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<InvokeWithResponseStreamCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_EV]: [, output.headers[_xaev]],
    [_RSCT]: [, output.headers[_ct]],
  });
  const data: any = output.body;
  contents.EventStream = de_InvokeWithResponseStreamResponseEvent(data, context);
  map(contents, {
    StatusCode: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1ListAliasesCommand
 */
export const de_ListAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Aliases: (_) => de_AliasList(_, context),
    NextMarker: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCodeSigningConfigsCommand
 */
export const de_ListCodeSigningConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeSigningConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CodeSigningConfigs: _json,
    NextMarker: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEventSourceMappingsCommand
 */
export const de_ListEventSourceMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourceMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EventSourceMappings: (_) => de_EventSourceMappingsList(_, context),
    NextMarker: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFunctionEventInvokeConfigsCommand
 */
export const de_ListFunctionEventInvokeConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionEventInvokeConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FunctionEventInvokeConfigs: (_) => de_FunctionEventInvokeConfigList(_, context),
    NextMarker: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFunctionsCommand
 */
export const de_ListFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Functions: _json,
    NextMarker: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommand
 */
export const de_ListFunctionsByCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsByCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FunctionArns: _json,
    NextMarker: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFunctionUrlConfigsCommand
 */
export const de_ListFunctionUrlConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionUrlConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FunctionUrlConfigs: _json,
    NextMarker: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLayersCommand
 */
export const de_ListLayersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Layers: _json,
    NextMarker: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLayerVersionsCommand
 */
export const de_ListLayerVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayerVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LayerVersions: _json,
    NextMarker: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommand
 */
export const de_ListProvisionedConcurrencyConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedConcurrencyConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextMarker: __expectString,
    ProvisionedConcurrencyConfigs: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVersionsByFunctionCommand
 */
export const de_ListVersionsByFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVersionsByFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextMarker: __expectString,
    Versions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PublishLayerVersionCommand
 */
export const de_PublishLayerVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishLayerVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CompatibleArchitectures: _json,
    CompatibleRuntimes: _json,
    Content: _json,
    CreatedDate: __expectString,
    Description: __expectString,
    LayerArn: __expectString,
    LayerVersionArn: __expectString,
    LicenseInfo: __expectString,
    Version: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PublishVersionCommand
 */
export const de_PublishVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Architectures: _json,
    CodeSha256: __expectString,
    CodeSize: __expectLong,
    DeadLetterConfig: _json,
    Description: __expectString,
    Environment: _json,
    EphemeralStorage: _json,
    FileSystemConfigs: _json,
    FunctionArn: __expectString,
    FunctionName: __expectString,
    Handler: __expectString,
    ImageConfigResponse: _json,
    KMSKeyArn: __expectString,
    LastModified: __expectString,
    LastUpdateStatus: __expectString,
    LastUpdateStatusReason: __expectString,
    LastUpdateStatusReasonCode: __expectString,
    Layers: _json,
    LoggingConfig: _json,
    MasterArn: __expectString,
    MemorySize: __expectInt32,
    PackageType: __expectString,
    RevisionId: __expectString,
    Role: __expectString,
    Runtime: __expectString,
    RuntimeVersionConfig: _json,
    SigningJobArn: __expectString,
    SigningProfileVersionArn: __expectString,
    SnapStart: _json,
    State: __expectString,
    StateReason: __expectString,
    StateReasonCode: __expectString,
    Timeout: __expectInt32,
    TracingConfig: _json,
    Version: __expectString,
    VpcConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutFunctionCodeSigningConfigCommand
 */
export const de_PutFunctionCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CodeSigningConfigArn: __expectString,
    FunctionName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutFunctionConcurrencyCommand
 */
export const de_PutFunctionConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionConcurrencyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ReservedConcurrentExecutions: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutFunctionEventInvokeConfigCommand
 */
export const de_PutFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DestinationConfig: _json,
    FunctionArn: __expectString,
    LastModified: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaximumEventAgeInSeconds: __expectInt32,
    MaximumRetryAttempts: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutFunctionRecursionConfigCommand
 */
export const de_PutFunctionRecursionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionRecursionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RecursiveLoop: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutProvisionedConcurrencyConfigCommand
 */
export const de_PutProvisionedConcurrencyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProvisionedConcurrencyConfigCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AllocatedProvisionedConcurrentExecutions: __expectInt32,
    AvailableProvisionedConcurrentExecutions: __expectInt32,
    LastModified: __expectString,
    RequestedProvisionedConcurrentExecutions: __expectInt32,
    Status: __expectString,
    StatusReason: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutRuntimeManagementConfigCommand
 */
export const de_PutRuntimeManagementConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRuntimeManagementConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FunctionArn: __expectString,
    RuntimeVersionArn: __expectString,
    UpdateRuntimeOn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveLayerVersionPermissionCommand
 */
export const de_RemoveLayerVersionPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveLayerVersionPermissionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemovePermissionCommand
 */
export const de_RemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAliasCommand
 */
export const de_UpdateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AliasArn: __expectString,
    Description: __expectString,
    FunctionVersion: __expectString,
    Name: __expectString,
    RevisionId: __expectString,
    RoutingConfig: (_) => de_AliasRoutingConfiguration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCodeSigningConfigCommand
 */
export const de_UpdateCodeSigningConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCodeSigningConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CodeSigningConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEventSourceMappingCommand
 */
export const de_UpdateEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AmazonManagedKafkaEventSourceConfig: _json,
    BatchSize: __expectInt32,
    BisectBatchOnFunctionError: __expectBoolean,
    DestinationConfig: _json,
    DocumentDBEventSourceConfig: _json,
    EventSourceArn: __expectString,
    EventSourceMappingArn: __expectString,
    FilterCriteria: _json,
    FilterCriteriaError: _json,
    FunctionArn: __expectString,
    FunctionResponseTypes: _json,
    KMSKeyArn: __expectString,
    LastModified: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastProcessingResult: __expectString,
    MaximumBatchingWindowInSeconds: __expectInt32,
    MaximumRecordAgeInSeconds: __expectInt32,
    MaximumRetryAttempts: __expectInt32,
    ParallelizationFactor: __expectInt32,
    Queues: _json,
    ScalingConfig: _json,
    SelfManagedEventSource: _json,
    SelfManagedKafkaEventSourceConfig: _json,
    SourceAccessConfigurations: _json,
    StartingPosition: __expectString,
    StartingPositionTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateTransitionReason: __expectString,
    Topics: _json,
    TumblingWindowInSeconds: __expectInt32,
    UUID: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFunctionCodeCommand
 */
export const de_UpdateFunctionCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Architectures: _json,
    CodeSha256: __expectString,
    CodeSize: __expectLong,
    DeadLetterConfig: _json,
    Description: __expectString,
    Environment: _json,
    EphemeralStorage: _json,
    FileSystemConfigs: _json,
    FunctionArn: __expectString,
    FunctionName: __expectString,
    Handler: __expectString,
    ImageConfigResponse: _json,
    KMSKeyArn: __expectString,
    LastModified: __expectString,
    LastUpdateStatus: __expectString,
    LastUpdateStatusReason: __expectString,
    LastUpdateStatusReasonCode: __expectString,
    Layers: _json,
    LoggingConfig: _json,
    MasterArn: __expectString,
    MemorySize: __expectInt32,
    PackageType: __expectString,
    RevisionId: __expectString,
    Role: __expectString,
    Runtime: __expectString,
    RuntimeVersionConfig: _json,
    SigningJobArn: __expectString,
    SigningProfileVersionArn: __expectString,
    SnapStart: _json,
    State: __expectString,
    StateReason: __expectString,
    StateReasonCode: __expectString,
    Timeout: __expectInt32,
    TracingConfig: _json,
    Version: __expectString,
    VpcConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFunctionConfigurationCommand
 */
export const de_UpdateFunctionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Architectures: _json,
    CodeSha256: __expectString,
    CodeSize: __expectLong,
    DeadLetterConfig: _json,
    Description: __expectString,
    Environment: _json,
    EphemeralStorage: _json,
    FileSystemConfigs: _json,
    FunctionArn: __expectString,
    FunctionName: __expectString,
    Handler: __expectString,
    ImageConfigResponse: _json,
    KMSKeyArn: __expectString,
    LastModified: __expectString,
    LastUpdateStatus: __expectString,
    LastUpdateStatusReason: __expectString,
    LastUpdateStatusReasonCode: __expectString,
    Layers: _json,
    LoggingConfig: _json,
    MasterArn: __expectString,
    MemorySize: __expectInt32,
    PackageType: __expectString,
    RevisionId: __expectString,
    Role: __expectString,
    Runtime: __expectString,
    RuntimeVersionConfig: _json,
    SigningJobArn: __expectString,
    SigningProfileVersionArn: __expectString,
    SnapStart: _json,
    State: __expectString,
    StateReason: __expectString,
    StateReasonCode: __expectString,
    Timeout: __expectInt32,
    TracingConfig: _json,
    Version: __expectString,
    VpcConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommand
 */
export const de_UpdateFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DestinationConfig: _json,
    FunctionArn: __expectString,
    LastModified: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaximumEventAgeInSeconds: __expectInt32,
    MaximumRetryAttempts: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFunctionUrlConfigCommand
 */
export const de_UpdateFunctionUrlConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionUrlConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AuthType: __expectString,
    Cors: _json,
    CreationTime: __expectString,
    FunctionArn: __expectString,
    FunctionUrl: __expectString,
    InvokeMode: __expectString,
    LastModifiedTime: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "ResourceInUseException":
    case "com.amazonaws.lambda#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ProvisionedConcurrencyConfigNotFoundException":
    case "com.amazonaws.lambda#ProvisionedConcurrencyConfigNotFoundException":
      throw await de_ProvisionedConcurrencyConfigNotFoundExceptionRes(parsedOutput, context);
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
    case "RecursiveInvocationException":
    case "com.amazonaws.lambda#RecursiveInvocationException":
      throw await de_RecursiveInvocationExceptionRes(parsedOutput, context);
    case "RequestTooLargeException":
    case "com.amazonaws.lambda#RequestTooLargeException":
      throw await de_RequestTooLargeExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.lambda#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
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
    case "UnsupportedMediaTypeException":
    case "com.amazonaws.lambda#UnsupportedMediaTypeException":
      throw await de_UnsupportedMediaTypeExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1CodeSigningConfigNotFoundExceptionRes
 */
const de_CodeSigningConfigNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CodeSigningConfigNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Type: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    EC2ErrorCode: __expectString,
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Type: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Type: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Type: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Type: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Type: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ProvisionedConcurrencyConfigNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RecursiveInvocationExceptionRes
 */
const de_RecursiveInvocationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RecursiveInvocationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new RecursiveInvocationException({
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
  const doc = take(data, {
    Type: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Type: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Type: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
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
    [_rAS]: [, parsedOutput.headers[_ra]],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Reason: __expectString,
    Type: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Type: __expectString,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedMediaTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvokeWithResponseStreamResponseEvent
 */
const de_InvokeWithResponseStreamResponseEvent = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<InvokeWithResponseStreamResponseEvent> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["PayloadChunk"] != null) {
      return {
        PayloadChunk: await de_InvokeResponseStreamUpdate_event(event["PayloadChunk"], context),
      };
    }
    if (event["InvokeComplete"] != null) {
      return {
        InvokeComplete: await de_InvokeWithResponseStreamCompleteEvent_event(event["InvokeComplete"], context),
      };
    }
    return { $unknown: output };
  });
};
const de_InvokeResponseStreamUpdate_event = async (
  output: any,
  context: __SerdeContext
): Promise<InvokeResponseStreamUpdate> => {
  const contents: InvokeResponseStreamUpdate = {} as any;
  contents.Payload = output.body;
  return contents;
};
const de_InvokeWithResponseStreamCompleteEvent_event = async (
  output: any,
  context: __SerdeContext
): Promise<InvokeWithResponseStreamCompleteEvent> => {
  const contents: InvokeWithResponseStreamCompleteEvent = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
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
  return take(input, {
    AdditionalVersionWeights: (_) => se_AdditionalVersionWeights(_, context),
  });
};

// se_AllowedPublishers omitted.

// se_AllowMethodsList omitted.

// se_AllowOriginsList omitted.

// se_AmazonManagedKafkaEventSourceConfig omitted.

// se_ArchitecturesList omitted.

// se_CodeSigningPolicies omitted.

// se_CompatibleArchitectures omitted.

// se_CompatibleRuntimes omitted.

// se_Cors omitted.

// se_DeadLetterConfig omitted.

// se_DestinationConfig omitted.

// se_DocumentDBEventSourceConfig omitted.

// se_EndpointLists omitted.

// se_Endpoints omitted.

// se_Environment omitted.

// se_EnvironmentVariables omitted.

// se_EphemeralStorage omitted.

// se_FileSystemConfig omitted.

// se_FileSystemConfigList omitted.

// se_Filter omitted.

// se_FilterCriteria omitted.

// se_FilterList omitted.

/**
 * serializeAws_restJson1FunctionCode
 */
const se_FunctionCode = (input: FunctionCode, context: __SerdeContext): any => {
  return take(input, {
    ImageUri: [],
    S3Bucket: [],
    S3Key: [],
    S3ObjectVersion: [],
    ZipFile: context.base64Encoder,
  });
};

// se_FunctionResponseTypeList omitted.

// se_HeadersList omitted.

// se_ImageConfig omitted.

// se_LayerList omitted.

/**
 * serializeAws_restJson1LayerVersionContentInput
 */
const se_LayerVersionContentInput = (input: LayerVersionContentInput, context: __SerdeContext): any => {
  return take(input, {
    S3Bucket: [],
    S3Key: [],
    S3ObjectVersion: [],
    ZipFile: context.base64Encoder,
  });
};

// se_LoggingConfig omitted.

// se_OnFailure omitted.

// se_OnSuccess omitted.

// se_Queues omitted.

// se_ScalingConfig omitted.

// se_SecurityGroupIds omitted.

// se_SelfManagedEventSource omitted.

// se_SelfManagedKafkaEventSourceConfig omitted.

// se_SigningProfileVersionArns omitted.

// se_SnapStart omitted.

// se_SourceAccessConfiguration omitted.

// se_SourceAccessConfigurations omitted.

// se_StringList omitted.

// se_SubnetIds omitted.

// se_Tags omitted.

// se_Topics omitted.

// se_TracingConfig omitted.

// se_VpcConfig omitted.

// de_AccountLimit omitted.

// de_AccountUsage omitted.

/**
 * deserializeAws_restJson1AdditionalVersionWeights
 */
const de_AdditionalVersionWeights = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __limitedParseDouble(value) as any;
    return acc;
  }, {} as Record<string, number>);
};

/**
 * deserializeAws_restJson1AliasConfiguration
 */
const de_AliasConfiguration = (output: any, context: __SerdeContext): AliasConfiguration => {
  return take(output, {
    AliasArn: __expectString,
    Description: __expectString,
    FunctionVersion: __expectString,
    Name: __expectString,
    RevisionId: __expectString,
    RoutingConfig: (_: any) => de_AliasRoutingConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AliasList
 */
const de_AliasList = (output: any, context: __SerdeContext): AliasConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AliasConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AliasRoutingConfiguration
 */
const de_AliasRoutingConfiguration = (output: any, context: __SerdeContext): AliasRoutingConfiguration => {
  return take(output, {
    AdditionalVersionWeights: (_: any) => de_AdditionalVersionWeights(_, context),
  }) as any;
};

// de_AllowedPublishers omitted.

// de_AllowMethodsList omitted.

// de_AllowOriginsList omitted.

// de_AmazonManagedKafkaEventSourceConfig omitted.

// de_ArchitecturesList omitted.

// de_CodeSigningConfig omitted.

// de_CodeSigningConfigList omitted.

// de_CodeSigningPolicies omitted.

// de_CompatibleArchitectures omitted.

// de_CompatibleRuntimes omitted.

// de_Concurrency omitted.

// de_Cors omitted.

// de_DeadLetterConfig omitted.

// de_DestinationConfig omitted.

// de_DocumentDBEventSourceConfig omitted.

// de_EndpointLists omitted.

// de_Endpoints omitted.

// de_EnvironmentError omitted.

// de_EnvironmentResponse omitted.

// de_EnvironmentVariables omitted.

// de_EphemeralStorage omitted.

/**
 * deserializeAws_restJson1EventSourceMappingConfiguration
 */
const de_EventSourceMappingConfiguration = (output: any, context: __SerdeContext): EventSourceMappingConfiguration => {
  return take(output, {
    AmazonManagedKafkaEventSourceConfig: _json,
    BatchSize: __expectInt32,
    BisectBatchOnFunctionError: __expectBoolean,
    DestinationConfig: _json,
    DocumentDBEventSourceConfig: _json,
    EventSourceArn: __expectString,
    EventSourceMappingArn: __expectString,
    FilterCriteria: _json,
    FilterCriteriaError: _json,
    FunctionArn: __expectString,
    FunctionResponseTypes: _json,
    KMSKeyArn: __expectString,
    LastModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastProcessingResult: __expectString,
    MaximumBatchingWindowInSeconds: __expectInt32,
    MaximumRecordAgeInSeconds: __expectInt32,
    MaximumRetryAttempts: __expectInt32,
    ParallelizationFactor: __expectInt32,
    Queues: _json,
    ScalingConfig: _json,
    SelfManagedEventSource: _json,
    SelfManagedKafkaEventSourceConfig: _json,
    SourceAccessConfigurations: _json,
    StartingPosition: __expectString,
    StartingPositionTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateTransitionReason: __expectString,
    Topics: _json,
    TumblingWindowInSeconds: __expectInt32,
    UUID: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EventSourceMappingsList
 */
const de_EventSourceMappingsList = (output: any, context: __SerdeContext): EventSourceMappingConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventSourceMappingConfiguration(entry, context);
    });
  return retVal;
};

// de_FileSystemConfig omitted.

// de_FileSystemConfigList omitted.

// de_Filter omitted.

// de_FilterCriteria omitted.

// de_FilterCriteriaError omitted.

// de_FilterList omitted.

// de_FunctionArnList omitted.

// de_FunctionCodeLocation omitted.

// de_FunctionConfiguration omitted.

/**
 * deserializeAws_restJson1FunctionEventInvokeConfig
 */
const de_FunctionEventInvokeConfig = (output: any, context: __SerdeContext): FunctionEventInvokeConfig => {
  return take(output, {
    DestinationConfig: _json,
    FunctionArn: __expectString,
    LastModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaximumEventAgeInSeconds: __expectInt32,
    MaximumRetryAttempts: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1FunctionEventInvokeConfigList
 */
const de_FunctionEventInvokeConfigList = (output: any, context: __SerdeContext): FunctionEventInvokeConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FunctionEventInvokeConfig(entry, context);
    });
  return retVal;
};

// de_FunctionList omitted.

// de_FunctionResponseTypeList omitted.

// de_FunctionUrlConfig omitted.

// de_FunctionUrlConfigList omitted.

// de_HeadersList omitted.

// de_ImageConfig omitted.

// de_ImageConfigError omitted.

// de_ImageConfigResponse omitted.

// de_InvokeWithResponseStreamCompleteEvent omitted.

// de_Layer omitted.

// de_LayersList omitted.

// de_LayersListItem omitted.

// de_LayersReferenceList omitted.

// de_LayerVersionContentOutput omitted.

// de_LayerVersionsList omitted.

// de_LayerVersionsListItem omitted.

// de_LoggingConfig omitted.

// de_OnFailure omitted.

// de_OnSuccess omitted.

// de_ProvisionedConcurrencyConfigList omitted.

// de_ProvisionedConcurrencyConfigListItem omitted.

// de_Queues omitted.

// de_RuntimeVersionConfig omitted.

// de_RuntimeVersionError omitted.

// de_ScalingConfig omitted.

// de_SecurityGroupIds omitted.

// de_SelfManagedEventSource omitted.

// de_SelfManagedKafkaEventSourceConfig omitted.

// de_SigningProfileVersionArns omitted.

// de_SnapStartResponse omitted.

// de_SourceAccessConfiguration omitted.

// de_SourceAccessConfigurations omitted.

// de_StringList omitted.

// de_SubnetIds omitted.

// de_Tags omitted.

// de_Topics omitted.

// de_TracingConfigResponse omitted.

// de_VpcConfigResponse omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _A = "Arn";
const _CA = "CompatibleArchitecture";
const _CC = "ClientContext";
const _CR = "CompatibleRuntime";
const _ESA = "EventSourceArn";
const _EV = "ExecutedVersion";
const _FE = "FunctionError";
const _FN = "FunctionName";
const _FV = "FunctionVersion";
const _IT = "InvocationType";
const _L = "List";
const _LR = "LogResult";
const _LT = "LogType";
const _M = "Marker";
const _MI = "MaxItems";
const _MR = "MasterRegion";
const _Q = "Qualifier";
const _RI = "RevisionId";
const _RSCT = "ResponseStreamContentType";
const _TK = "TagKeys";
const _ct = "content-type";
const _f = "find";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _tK = "tagKeys";
const _xacc = "x-amz-client-context";
const _xaev = "x-amz-executed-version";
const _xafe = "x-amz-function-error";
const _xait = "x-amz-invocation-type";
const _xalr = "x-amz-log-result";
const _xalt = "x-amz-log-type";
