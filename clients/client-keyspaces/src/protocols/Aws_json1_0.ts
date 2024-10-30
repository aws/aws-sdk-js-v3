// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
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
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateKeyspaceCommandInput, CreateKeyspaceCommandOutput } from "../commands/CreateKeyspaceCommand";
import { CreateTableCommandInput, CreateTableCommandOutput } from "../commands/CreateTableCommand";
import { CreateTypeCommandInput, CreateTypeCommandOutput } from "../commands/CreateTypeCommand";
import { DeleteKeyspaceCommandInput, DeleteKeyspaceCommandOutput } from "../commands/DeleteKeyspaceCommand";
import { DeleteTableCommandInput, DeleteTableCommandOutput } from "../commands/DeleteTableCommand";
import { DeleteTypeCommandInput, DeleteTypeCommandOutput } from "../commands/DeleteTypeCommand";
import { GetKeyspaceCommandInput, GetKeyspaceCommandOutput } from "../commands/GetKeyspaceCommand";
import {
  GetTableAutoScalingSettingsCommandInput,
  GetTableAutoScalingSettingsCommandOutput,
} from "../commands/GetTableAutoScalingSettingsCommand";
import { GetTableCommandInput, GetTableCommandOutput } from "../commands/GetTableCommand";
import { GetTypeCommandInput, GetTypeCommandOutput } from "../commands/GetTypeCommand";
import { ListKeyspacesCommandInput, ListKeyspacesCommandOutput } from "../commands/ListKeyspacesCommand";
import { ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTypesCommandInput, ListTypesCommandOutput } from "../commands/ListTypesCommand";
import { RestoreTableCommandInput, RestoreTableCommandOutput } from "../commands/RestoreTableCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateTableCommandInput, UpdateTableCommandOutput } from "../commands/UpdateTableCommand";
import { KeyspacesServiceException as __BaseException } from "../models/KeyspacesServiceException";
import {
  AccessDeniedException,
  AutoScalingPolicy,
  AutoScalingSettings,
  AutoScalingSpecification,
  CapacitySpecification,
  CapacitySpecificationSummary,
  ClientSideTimestamps,
  ClusteringKey,
  ColumnDefinition,
  Comment,
  ConflictException,
  CreateKeyspaceRequest,
  CreateTableRequest,
  CreateTypeRequest,
  DeleteKeyspaceRequest,
  DeleteTableRequest,
  DeleteTypeRequest,
  EncryptionSpecification,
  FieldDefinition,
  GetKeyspaceRequest,
  GetTableAutoScalingSettingsRequest,
  GetTableAutoScalingSettingsResponse,
  GetTableRequest,
  GetTableResponse,
  GetTypeRequest,
  GetTypeResponse,
  InternalServerException,
  ListKeyspacesRequest,
  ListTablesRequest,
  ListTagsForResourceRequest,
  ListTypesRequest,
  PartitionKey,
  PointInTimeRecovery,
  PointInTimeRecoverySummary,
  ReplicaAutoScalingSpecification,
  ReplicaSpecification,
  ReplicaSpecificationSummary,
  ReplicationSpecification,
  ResourceNotFoundException,
  RestoreTableRequest,
  SchemaDefinition,
  ServiceQuotaExceededException,
  StaticColumn,
  Tag,
  TagResourceRequest,
  TargetTrackingScalingPolicyConfiguration,
  TimeToLive,
  UntagResourceRequest,
  UpdateTableRequest,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_json1_0CreateKeyspaceCommand
 */
export const se_CreateKeyspaceCommand = async (
  input: CreateKeyspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateKeyspace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateTableCommand
 */
export const se_CreateTableCommand = async (
  input: CreateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTable");
  let body: any;
  body = JSON.stringify(se_CreateTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateTypeCommand
 */
export const se_CreateTypeCommand = async (
  input: CreateTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteKeyspaceCommand
 */
export const se_DeleteKeyspaceCommand = async (
  input: DeleteKeyspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteKeyspace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteTableCommand
 */
export const se_DeleteTableCommand = async (
  input: DeleteTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTable");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteTypeCommand
 */
export const se_DeleteTypeCommand = async (
  input: DeleteTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetKeyspaceCommand
 */
export const se_GetKeyspaceCommand = async (
  input: GetKeyspaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetKeyspace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetTableCommand
 */
export const se_GetTableCommand = async (
  input: GetTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTable");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetTableAutoScalingSettingsCommand
 */
export const se_GetTableAutoScalingSettingsCommand = async (
  input: GetTableAutoScalingSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTableAutoScalingSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetTypeCommand
 */
export const se_GetTypeCommand = async (
  input: GetTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListKeyspacesCommand
 */
export const se_ListKeyspacesCommand = async (
  input: ListKeyspacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListKeyspaces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTablesCommand
 */
export const se_ListTablesCommand = async (
  input: ListTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTables");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTypesCommand
 */
export const se_ListTypesCommand = async (
  input: ListTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTypes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RestoreTableCommand
 */
export const se_RestoreTableCommand = async (
  input: RestoreTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreTable");
  let body: any;
  body = JSON.stringify(se_RestoreTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateTableCommand
 */
export const se_UpdateTableCommand = async (
  input: UpdateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTable");
  let body: any;
  body = JSON.stringify(se_UpdateTableRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CreateKeyspaceCommand
 */
export const de_CreateKeyspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyspaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateKeyspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateTableCommand
 */
export const de_CreateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateTypeCommand
 */
export const de_CreateTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteKeyspaceCommand
 */
export const de_DeleteKeyspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyspaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteKeyspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteTableCommand
 */
export const de_DeleteTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteTypeCommand
 */
export const de_DeleteTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetKeyspaceCommand
 */
export const de_GetKeyspaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKeyspaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetKeyspaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetTableCommand
 */
export const de_GetTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTableResponse(data, context);
  const response: GetTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetTableAutoScalingSettingsCommand
 */
export const de_GetTableAutoScalingSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableAutoScalingSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTableAutoScalingSettingsResponse(data, context);
  const response: GetTableAutoScalingSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetTypeCommand
 */
export const de_GetTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTypeResponse(data, context);
  const response: GetTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListKeyspacesCommand
 */
export const de_ListKeyspacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeyspacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListKeyspacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListTablesCommand
 */
export const de_ListTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListTypesCommand
 */
export const de_ListTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0RestoreTableCommand
 */
export const de_RestoreTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RestoreTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateTableCommand
 */
export const de_UpdateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_0CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.keyspaces#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.keyspaces#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.keyspaces#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.keyspaces#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.keyspaces#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.keyspaces#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0AutoScalingPolicy
 */
const se_AutoScalingPolicy = (input: AutoScalingPolicy, context: __SerdeContext): any => {
  return take(input, {
    targetTrackingScalingPolicyConfiguration: (_) => se_TargetTrackingScalingPolicyConfiguration(_, context),
  });
};

/**
 * serializeAws_json1_0AutoScalingSettings
 */
const se_AutoScalingSettings = (input: AutoScalingSettings, context: __SerdeContext): any => {
  return take(input, {
    autoScalingDisabled: [],
    maximumUnits: [],
    minimumUnits: [],
    scalingPolicy: (_) => se_AutoScalingPolicy(_, context),
  });
};

/**
 * serializeAws_json1_0AutoScalingSpecification
 */
const se_AutoScalingSpecification = (input: AutoScalingSpecification, context: __SerdeContext): any => {
  return take(input, {
    readCapacityAutoScaling: (_) => se_AutoScalingSettings(_, context),
    writeCapacityAutoScaling: (_) => se_AutoScalingSettings(_, context),
  });
};

// se_CapacitySpecification omitted.

// se_ClientSideTimestamps omitted.

// se_ClusteringKey omitted.

// se_ClusteringKeyList omitted.

// se_ColumnDefinition omitted.

// se_ColumnDefinitionList omitted.

// se_Comment omitted.

// se_CreateKeyspaceRequest omitted.

/**
 * serializeAws_json1_0CreateTableRequest
 */
const se_CreateTableRequest = (input: CreateTableRequest, context: __SerdeContext): any => {
  return take(input, {
    autoScalingSpecification: (_) => se_AutoScalingSpecification(_, context),
    capacitySpecification: _json,
    clientSideTimestamps: _json,
    comment: _json,
    defaultTimeToLive: [],
    encryptionSpecification: _json,
    keyspaceName: [],
    pointInTimeRecovery: _json,
    replicaSpecifications: (_) => se_ReplicaSpecificationList(_, context),
    schemaDefinition: _json,
    tableName: [],
    tags: _json,
    ttl: _json,
  });
};

// se_CreateTypeRequest omitted.

// se_DeleteKeyspaceRequest omitted.

// se_DeleteTableRequest omitted.

// se_DeleteTypeRequest omitted.

// se_EncryptionSpecification omitted.

// se_FieldDefinition omitted.

// se_FieldList omitted.

// se_GetKeyspaceRequest omitted.

// se_GetTableAutoScalingSettingsRequest omitted.

// se_GetTableRequest omitted.

// se_GetTypeRequest omitted.

// se_ListKeyspacesRequest omitted.

// se_ListTablesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTypesRequest omitted.

// se_PartitionKey omitted.

// se_PartitionKeyList omitted.

// se_PointInTimeRecovery omitted.

// se_RegionList omitted.

/**
 * serializeAws_json1_0ReplicaSpecification
 */
const se_ReplicaSpecification = (input: ReplicaSpecification, context: __SerdeContext): any => {
  return take(input, {
    readCapacityAutoScaling: (_) => se_AutoScalingSettings(_, context),
    readCapacityUnits: [],
    region: [],
  });
};

/**
 * serializeAws_json1_0ReplicaSpecificationList
 */
const se_ReplicaSpecificationList = (input: ReplicaSpecification[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReplicaSpecification(entry, context);
    });
};

// se_ReplicationSpecification omitted.

/**
 * serializeAws_json1_0RestoreTableRequest
 */
const se_RestoreTableRequest = (input: RestoreTableRequest, context: __SerdeContext): any => {
  return take(input, {
    autoScalingSpecification: (_) => se_AutoScalingSpecification(_, context),
    capacitySpecificationOverride: _json,
    encryptionSpecificationOverride: _json,
    pointInTimeRecoveryOverride: _json,
    replicaSpecifications: (_) => se_ReplicaSpecificationList(_, context),
    restoreTimestamp: (_) => _.getTime() / 1_000,
    sourceKeyspaceName: [],
    sourceTableName: [],
    tagsOverride: _json,
    targetKeyspaceName: [],
    targetTableName: [],
  });
};

// se_SchemaDefinition omitted.

// se_StaticColumn omitted.

// se_StaticColumnList omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

/**
 * serializeAws_json1_0TargetTrackingScalingPolicyConfiguration
 */
const se_TargetTrackingScalingPolicyConfiguration = (
  input: TargetTrackingScalingPolicyConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    disableScaleIn: [],
    scaleInCooldown: [],
    scaleOutCooldown: [],
    targetValue: __serializeFloat,
  });
};

// se_TimeToLive omitted.

// se_UntagResourceRequest omitted.

/**
 * serializeAws_json1_0UpdateTableRequest
 */
const se_UpdateTableRequest = (input: UpdateTableRequest, context: __SerdeContext): any => {
  return take(input, {
    addColumns: _json,
    autoScalingSpecification: (_) => se_AutoScalingSpecification(_, context),
    capacitySpecification: _json,
    clientSideTimestamps: _json,
    defaultTimeToLive: [],
    encryptionSpecification: _json,
    keyspaceName: [],
    pointInTimeRecovery: _json,
    replicaSpecifications: (_) => se_ReplicaSpecificationList(_, context),
    tableName: [],
    ttl: _json,
  });
};

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_0AutoScalingPolicy
 */
const de_AutoScalingPolicy = (output: any, context: __SerdeContext): AutoScalingPolicy => {
  return take(output, {
    targetTrackingScalingPolicyConfiguration: (_: any) => de_TargetTrackingScalingPolicyConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0AutoScalingSettings
 */
const de_AutoScalingSettings = (output: any, context: __SerdeContext): AutoScalingSettings => {
  return take(output, {
    autoScalingDisabled: __expectBoolean,
    maximumUnits: __expectLong,
    minimumUnits: __expectLong,
    scalingPolicy: (_: any) => de_AutoScalingPolicy(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0AutoScalingSpecification
 */
const de_AutoScalingSpecification = (output: any, context: __SerdeContext): AutoScalingSpecification => {
  return take(output, {
    readCapacityAutoScaling: (_: any) => de_AutoScalingSettings(_, context),
    writeCapacityAutoScaling: (_: any) => de_AutoScalingSettings(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CapacitySpecificationSummary
 */
const de_CapacitySpecificationSummary = (output: any, context: __SerdeContext): CapacitySpecificationSummary => {
  return take(output, {
    lastUpdateToPayPerRequestTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    readCapacityUnits: __expectLong,
    throughputMode: __expectString,
    writeCapacityUnits: __expectLong,
  }) as any;
};

// de_ClientSideTimestamps omitted.

// de_ClusteringKey omitted.

// de_ClusteringKeyList omitted.

// de_ColumnDefinition omitted.

// de_ColumnDefinitionList omitted.

// de_Comment omitted.

// de_ConflictException omitted.

// de_CreateKeyspaceResponse omitted.

// de_CreateTableResponse omitted.

// de_CreateTypeResponse omitted.

// de_DeleteKeyspaceResponse omitted.

// de_DeleteTableResponse omitted.

// de_DeleteTypeResponse omitted.

// de_EncryptionSpecification omitted.

// de_FieldDefinition omitted.

// de_FieldList omitted.

// de_GetKeyspaceResponse omitted.

/**
 * deserializeAws_json1_0GetTableAutoScalingSettingsResponse
 */
const de_GetTableAutoScalingSettingsResponse = (
  output: any,
  context: __SerdeContext
): GetTableAutoScalingSettingsResponse => {
  return take(output, {
    autoScalingSpecification: (_: any) => de_AutoScalingSpecification(_, context),
    keyspaceName: __expectString,
    replicaSpecifications: (_: any) => de_ReplicaAutoScalingSpecificationList(_, context),
    resourceArn: __expectString,
    tableName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetTableResponse
 */
const de_GetTableResponse = (output: any, context: __SerdeContext): GetTableResponse => {
  return take(output, {
    capacitySpecification: (_: any) => de_CapacitySpecificationSummary(_, context),
    clientSideTimestamps: _json,
    comment: _json,
    creationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    defaultTimeToLive: __expectInt32,
    encryptionSpecification: _json,
    keyspaceName: __expectString,
    pointInTimeRecovery: (_: any) => de_PointInTimeRecoverySummary(_, context),
    replicaSpecifications: (_: any) => de_ReplicaSpecificationSummaryList(_, context),
    resourceArn: __expectString,
    schemaDefinition: _json,
    status: __expectString,
    tableName: __expectString,
    ttl: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0GetTypeResponse
 */
const de_GetTypeResponse = (output: any, context: __SerdeContext): GetTypeResponse => {
  return take(output, {
    directParentTypes: _json,
    directReferringTables: _json,
    fieldDefinitions: _json,
    keyspaceArn: __expectString,
    keyspaceName: __expectString,
    lastModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    maxNestingDepth: __expectInt32,
    status: __expectString,
    typeName: __expectString,
  }) as any;
};

// de_InternalServerException omitted.

// de_KeyspaceSummary omitted.

// de_KeyspaceSummaryList omitted.

// de_ListKeyspacesResponse omitted.

// de_ListTablesResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_ListTypesResponse omitted.

// de_PartitionKey omitted.

// de_PartitionKeyList omitted.

/**
 * deserializeAws_json1_0PointInTimeRecoverySummary
 */
const de_PointInTimeRecoverySummary = (output: any, context: __SerdeContext): PointInTimeRecoverySummary => {
  return take(output, {
    earliestRestorableTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

// de_RegionList omitted.

/**
 * deserializeAws_json1_0ReplicaAutoScalingSpecification
 */
const de_ReplicaAutoScalingSpecification = (output: any, context: __SerdeContext): ReplicaAutoScalingSpecification => {
  return take(output, {
    autoScalingSpecification: (_: any) => de_AutoScalingSpecification(_, context),
    region: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ReplicaAutoScalingSpecificationList
 */
const de_ReplicaAutoScalingSpecificationList = (
  output: any,
  context: __SerdeContext
): ReplicaAutoScalingSpecification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicaAutoScalingSpecification(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ReplicaSpecificationSummary
 */
const de_ReplicaSpecificationSummary = (output: any, context: __SerdeContext): ReplicaSpecificationSummary => {
  return take(output, {
    capacitySpecification: (_: any) => de_CapacitySpecificationSummary(_, context),
    region: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ReplicaSpecificationSummaryList
 */
const de_ReplicaSpecificationSummaryList = (output: any, context: __SerdeContext): ReplicaSpecificationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicaSpecificationSummary(entry, context);
    });
  return retVal;
};

// de_ResourceNotFoundException omitted.

// de_RestoreTableResponse omitted.

// de_SchemaDefinition omitted.

// de_ServiceQuotaExceededException omitted.

// de_StaticColumn omitted.

// de_StaticColumnList omitted.

// de_TableNameList omitted.

// de_TableSummary omitted.

// de_TableSummaryList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

/**
 * deserializeAws_json1_0TargetTrackingScalingPolicyConfiguration
 */
const de_TargetTrackingScalingPolicyConfiguration = (
  output: any,
  context: __SerdeContext
): TargetTrackingScalingPolicyConfiguration => {
  return take(output, {
    disableScaleIn: __expectBoolean,
    scaleInCooldown: __expectInt32,
    scaleOutCooldown: __expectInt32,
    targetValue: __limitedParseDouble,
  }) as any;
};

// de_TimeToLive omitted.

// de_TypeNameList omitted.

// de_UntagResourceResponse omitted.

// de_UpdateTableResponse omitted.

// de_ValidationException omitted.

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

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `KeyspacesService.${operation}`,
  };
}
