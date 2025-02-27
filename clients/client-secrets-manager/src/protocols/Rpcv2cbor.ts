// smithy-typescript generated code
import {
  buildHttpRpcRequest,
  cbor,
  checkCborResponse as cr,
  loadSmithyRpcV2CborErrorCode,
  parseCborBody as parseBody,
  parseCborErrorBody as parseErrorBody,
} from "@smithy/core/cbor";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  BatchGetSecretValueCommandInput,
  BatchGetSecretValueCommandOutput,
} from "../commands/BatchGetSecretValueCommand";
import { CancelRotateSecretCommandInput, CancelRotateSecretCommandOutput } from "../commands/CancelRotateSecretCommand";
import { CreateSecretCommandInput, CreateSecretCommandOutput } from "../commands/CreateSecretCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import { DeleteSecretCommandInput, DeleteSecretCommandOutput } from "../commands/DeleteSecretCommand";
import { DescribeSecretCommandInput, DescribeSecretCommandOutput } from "../commands/DescribeSecretCommand";
import { GetRandomPasswordCommandInput, GetRandomPasswordCommandOutput } from "../commands/GetRandomPasswordCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import { GetSecretValueCommandInput, GetSecretValueCommandOutput } from "../commands/GetSecretValueCommand";
import { ListSecretsCommandInput, ListSecretsCommandOutput } from "../commands/ListSecretsCommand";
import {
  ListSecretVersionIdsCommandInput,
  ListSecretVersionIdsCommandOutput,
} from "../commands/ListSecretVersionIdsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import { PutSecretValueCommandInput, PutSecretValueCommandOutput } from "../commands/PutSecretValueCommand";
import {
  RemoveRegionsFromReplicationCommandInput,
  RemoveRegionsFromReplicationCommandOutput,
} from "../commands/RemoveRegionsFromReplicationCommand";
import {
  ReplicateSecretToRegionsCommandInput,
  ReplicateSecretToRegionsCommandOutput,
} from "../commands/ReplicateSecretToRegionsCommand";
import { RestoreSecretCommandInput, RestoreSecretCommandOutput } from "../commands/RestoreSecretCommand";
import { RotateSecretCommandInput, RotateSecretCommandOutput } from "../commands/RotateSecretCommand";
import {
  StopReplicationToReplicaCommandInput,
  StopReplicationToReplicaCommandOutput,
} from "../commands/StopReplicationToReplicaCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateSecretCommandInput, UpdateSecretCommandOutput } from "../commands/UpdateSecretCommand";
import {
  UpdateSecretVersionStageCommandInput,
  UpdateSecretVersionStageCommandOutput,
} from "../commands/UpdateSecretVersionStageCommand";
import {
  ValidateResourcePolicyCommandInput,
  ValidateResourcePolicyCommandOutput,
} from "../commands/ValidateResourcePolicyCommand";
import {
  BatchGetSecretValueRequest,
  BatchGetSecretValueResponse,
  CancelRotateSecretRequest,
  CreateSecretRequest,
  CreateSecretResponse,
  DecryptionFailure,
  DeleteResourcePolicyRequest,
  DeleteSecretRequest,
  DeleteSecretResponse,
  DescribeSecretRequest,
  DescribeSecretResponse,
  EncryptionFailure,
  Filter,
  GetRandomPasswordRequest,
  GetResourcePolicyRequest,
  GetSecretValueRequest,
  GetSecretValueResponse,
  InternalServiceError,
  InvalidNextTokenException,
  InvalidParameterException,
  InvalidRequestException,
  LimitExceededException,
  ListSecretsRequest,
  ListSecretsResponse,
  ListSecretVersionIdsRequest,
  ListSecretVersionIdsResponse,
  MalformedPolicyDocumentException,
  PreconditionNotMetException,
  PublicPolicyException,
  PutResourcePolicyRequest,
  PutSecretValueRequest,
  RemoveRegionsFromReplicationRequest,
  RemoveRegionsFromReplicationResponse,
  ReplicaRegionType,
  ReplicateSecretToRegionsRequest,
  ReplicateSecretToRegionsResponse,
  ReplicationStatusType,
  ResourceExistsException,
  ResourceNotFoundException,
  RestoreSecretRequest,
  RotateSecretRequest,
  RotationRulesType,
  SecretListEntry,
  SecretValueEntry,
  SecretVersionsListEntry,
  StopReplicationToReplicaRequest,
  Tag,
  TagResourceRequest,
  UntagResourceRequest,
  UpdateSecretRequest,
  UpdateSecretVersionStageRequest,
  ValidateResourcePolicyRequest,
} from "../models/models_0";
import { SecretsManagerServiceException as __BaseException } from "../models/SecretsManagerServiceException";

/**
 * serializeRpcv2cborBatchGetSecretValueCommand
 */
export const se_BatchGetSecretValueCommand = async (
  input: BatchGetSecretValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/secretsmanager/operation/BatchGetSecretValue",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborCancelRotateSecretCommand
 */
export const se_CancelRotateSecretCommand = async (
  input: CancelRotateSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/secretsmanager/operation/CancelRotateSecret", undefined, body);
};

/**
 * serializeRpcv2cborCreateSecretCommand
 */
export const se_CreateSecretCommand = async (
  input: CreateSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_CreateSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/service/secretsmanager/operation/CreateSecret", undefined, body);
};

/**
 * serializeRpcv2cborDeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/secretsmanager/operation/DeleteResourcePolicy",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDeleteSecretCommand
 */
export const se_DeleteSecretCommand = async (
  input: DeleteSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/secretsmanager/operation/DeleteSecret", undefined, body);
};

/**
 * serializeRpcv2cborDescribeSecretCommand
 */
export const se_DescribeSecretCommand = async (
  input: DescribeSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/secretsmanager/operation/DescribeSecret", undefined, body);
};

/**
 * serializeRpcv2cborGetRandomPasswordCommand
 */
export const se_GetRandomPasswordCommand = async (
  input: GetRandomPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/secretsmanager/operation/GetRandomPassword", undefined, body);
};

/**
 * serializeRpcv2cborGetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/secretsmanager/operation/GetResourcePolicy", undefined, body);
};

/**
 * serializeRpcv2cborGetSecretValueCommand
 */
export const se_GetSecretValueCommand = async (
  input: GetSecretValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/secretsmanager/operation/GetSecretValue", undefined, body);
};

/**
 * serializeRpcv2cborListSecretsCommand
 */
export const se_ListSecretsCommand = async (
  input: ListSecretsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/secretsmanager/operation/ListSecrets", undefined, body);
};

/**
 * serializeRpcv2cborListSecretVersionIdsCommand
 */
export const se_ListSecretVersionIdsCommand = async (
  input: ListSecretVersionIdsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/secretsmanager/operation/ListSecretVersionIds",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborPutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/secretsmanager/operation/PutResourcePolicy", undefined, body);
};

/**
 * serializeRpcv2cborPutSecretValueCommand
 */
export const se_PutSecretValueCommand = async (
  input: PutSecretValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_PutSecretValueRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/service/secretsmanager/operation/PutSecretValue", undefined, body);
};

/**
 * serializeRpcv2cborRemoveRegionsFromReplicationCommand
 */
export const se_RemoveRegionsFromReplicationCommand = async (
  input: RemoveRegionsFromReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/secretsmanager/operation/RemoveRegionsFromReplication",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborReplicateSecretToRegionsCommand
 */
export const se_ReplicateSecretToRegionsCommand = async (
  input: ReplicateSecretToRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/secretsmanager/operation/ReplicateSecretToRegions",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborRestoreSecretCommand
 */
export const se_RestoreSecretCommand = async (
  input: RestoreSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/secretsmanager/operation/RestoreSecret", undefined, body);
};

/**
 * serializeRpcv2cborRotateSecretCommand
 */
export const se_RotateSecretCommand = async (
  input: RotateSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_RotateSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/service/secretsmanager/operation/RotateSecret", undefined, body);
};

/**
 * serializeRpcv2cborStopReplicationToReplicaCommand
 */
export const se_StopReplicationToReplicaCommand = async (
  input: StopReplicationToReplicaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/secretsmanager/operation/StopReplicationToReplica",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborTagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/secretsmanager/operation/TagResource", undefined, body);
};

/**
 * serializeRpcv2cborUntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(context, headers, "/service/secretsmanager/operation/UntagResource", undefined, body);
};

/**
 * serializeRpcv2cborUpdateSecretCommand
 */
export const se_UpdateSecretCommand = async (
  input: UpdateSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_UpdateSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/service/secretsmanager/operation/UpdateSecret", undefined, body);
};

/**
 * serializeRpcv2cborUpdateSecretVersionStageCommand
 */
export const se_UpdateSecretVersionStageCommand = async (
  input: UpdateSecretVersionStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/secretsmanager/operation/UpdateSecretVersionStage",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborValidateResourcePolicyCommand
 */
export const se_ValidateResourcePolicyCommand = async (
  input: ValidateResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/secretsmanager/operation/ValidateResourcePolicy",
    undefined,
    body
  );
};

/**
 * deserializeRpcv2cborBatchGetSecretValueCommand
 */
export const de_BatchGetSecretValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetSecretValueCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchGetSecretValueResponse(data, context);
  const response: BatchGetSecretValueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborCancelRotateSecretCommand
 */
export const de_CancelRotateSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRotateSecretCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CancelRotateSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborCreateSecretCommand
 */
export const de_CreateSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecretCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSecretResponse(data, context);
  const response: CreateSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborDeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborDeleteSecretCommand
 */
export const de_DeleteSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecretCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSecretResponse(data, context);
  const response: DeleteSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborDescribeSecretCommand
 */
export const de_DescribeSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecretCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSecretResponse(data, context);
  const response: DescribeSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborGetRandomPasswordCommand
 */
export const de_GetRandomPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRandomPasswordCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetRandomPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborGetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborGetSecretValueCommand
 */
export const de_GetSecretValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecretValueCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSecretValueResponse(data, context);
  const response: GetSecretValueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborListSecretsCommand
 */
export const de_ListSecretsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecretsCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSecretsResponse(data, context);
  const response: ListSecretsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborListSecretVersionIdsCommand
 */
export const de_ListSecretVersionIdsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecretVersionIdsCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSecretVersionIdsResponse(data, context);
  const response: ListSecretVersionIdsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborPutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborPutSecretValueCommand
 */
export const de_PutSecretValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSecretValueCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutSecretValueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborRemoveRegionsFromReplicationCommand
 */
export const de_RemoveRegionsFromReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRegionsFromReplicationCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveRegionsFromReplicationResponse(data, context);
  const response: RemoveRegionsFromReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborReplicateSecretToRegionsCommand
 */
export const de_ReplicateSecretToRegionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReplicateSecretToRegionsCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReplicateSecretToRegionsResponse(data, context);
  const response: ReplicateSecretToRegionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborRestoreSecretCommand
 */
export const de_RestoreSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreSecretCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RestoreSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborRotateSecretCommand
 */
export const de_RotateSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateSecretCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RotateSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborStopReplicationToReplicaCommand
 */
export const de_StopReplicationToReplicaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopReplicationToReplicaCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopReplicationToReplicaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborTagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeRpcv2cborUntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeRpcv2cborUpdateSecretCommand
 */
export const de_UpdateSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecretCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborUpdateSecretVersionStageCommand
 */
export const de_UpdateSecretVersionStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecretVersionStageCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSecretVersionStageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborValidateResourcePolicyCommand
 */
export const de_ValidateResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateResourcePolicyCommandOutput> => {
  cr(output);
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }

  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ValidateResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Rpcv2cborCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadSmithyRpcV2CborErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DecryptionFailure":
    case "com.amazonaws.secretsmanager#DecryptionFailure":
      throw await de_DecryptionFailureRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.secretsmanager#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "EncryptionFailure":
    case "com.amazonaws.secretsmanager#EncryptionFailure":
      throw await de_EncryptionFailureRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.secretsmanager#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.secretsmanager#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.secretsmanager#PreconditionNotMetException":
      throw await de_PreconditionNotMetExceptionRes(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.secretsmanager#ResourceExistsException":
      throw await de_ResourceExistsExceptionRes(parsedOutput, context);
    case "PublicPolicyException":
    case "com.amazonaws.secretsmanager#PublicPolicyException":
      throw await de_PublicPolicyExceptionRes(parsedOutput, context);
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
 * deserializeRpcv2cborDecryptionFailureRes
 */
const de_DecryptionFailureRes = async (parsedOutput: any, context: __SerdeContext): Promise<DecryptionFailure> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DecryptionFailure({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborEncryptionFailureRes
 */
const de_EncryptionFailureRes = async (parsedOutput: any, context: __SerdeContext): Promise<EncryptionFailure> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new EncryptionFailure({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborInternalServiceErrorRes
 */
const de_InternalServiceErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServiceError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborInvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborInvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborInvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborLimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborMalformedPolicyDocumentExceptionRes
 */
const de_MalformedPolicyDocumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MalformedPolicyDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborPreconditionNotMetExceptionRes
 */
const de_PreconditionNotMetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionNotMetException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PreconditionNotMetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborPublicPolicyExceptionRes
 */
const de_PublicPolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PublicPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PublicPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborResourceExistsExceptionRes
 */
const de_ResourceExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborResourceNotFoundExceptionRes
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

// se_AddReplicaRegionListType omitted.

// se_BatchGetSecretValueRequest omitted.

// se_CancelRotateSecretRequest omitted.

/**
 * serializeRpcv2cborCreateSecretRequest
 */
const se_CreateSecretRequest = (input: CreateSecretRequest, context: __SerdeContext): any => {
  return take(input, {
    AddReplicaRegions: _json,
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    ForceOverwriteReplicaSecret: [],
    KmsKeyId: [],
    Name: [],
    SecretBinary: [],
    SecretString: [],
    Tags: _json,
  });
};

// se_DeleteResourcePolicyRequest omitted.

// se_DeleteSecretRequest omitted.

// se_DescribeSecretRequest omitted.

// se_Filter omitted.

// se_FiltersListType omitted.

// se_FilterValuesStringList omitted.

// se_GetRandomPasswordRequest omitted.

// se_GetResourcePolicyRequest omitted.

// se_GetSecretValueRequest omitted.

// se_ListSecretsRequest omitted.

// se_ListSecretVersionIdsRequest omitted.

// se_PutResourcePolicyRequest omitted.

/**
 * serializeRpcv2cborPutSecretValueRequest
 */
const se_PutSecretValueRequest = (input: PutSecretValueRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    RotationToken: [],
    SecretBinary: [],
    SecretId: [],
    SecretString: [],
    VersionStages: _json,
  });
};

// se_RemoveRegionsFromReplicationRequest omitted.

// se_RemoveReplicaRegionListType omitted.

// se_ReplicaRegionType omitted.

// se_ReplicateSecretToRegionsRequest omitted.

// se_RestoreSecretRequest omitted.

/**
 * serializeRpcv2cborRotateSecretRequest
 */
const se_RotateSecretRequest = (input: RotateSecretRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    RotateImmediately: [],
    RotationLambdaARN: [],
    RotationRules: _json,
    SecretId: [],
  });
};

// se_RotationRulesType omitted.

// se_SecretIdListType omitted.

// se_SecretVersionStagesType omitted.

// se_StopReplicationToReplicaRequest omitted.

// se_Tag omitted.

// se_TagKeyListType omitted.

// se_TagListType omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

/**
 * serializeRpcv2cborUpdateSecretRequest
 */
const se_UpdateSecretRequest = (input: UpdateSecretRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    KmsKeyId: [],
    SecretBinary: [],
    SecretId: [],
    SecretString: [],
  });
};

// se_UpdateSecretVersionStageRequest omitted.

// se_ValidateResourcePolicyRequest omitted.

// de_APIErrorListType omitted.

// de_APIErrorType omitted.

/**
 * deserializeRpcv2cborBatchGetSecretValueResponse
 */
const de_BatchGetSecretValueResponse = (output: any, context: __SerdeContext): BatchGetSecretValueResponse => {
  return take(output, {
    Errors: _json,
    NextToken: __expectString,
    SecretValues: (_: any) => de_SecretValuesType(_, context),
  }) as any;
};

// de_CancelRotateSecretResponse omitted.

/**
 * deserializeRpcv2cborCreateSecretResponse
 */
const de_CreateSecretResponse = (output: any, context: __SerdeContext): CreateSecretResponse => {
  return take(output, {
    ARN: __expectString,
    Name: __expectString,
    ReplicationStatus: (_: any) => de_ReplicationStatusListType(_, context),
    VersionId: __expectString,
  }) as any;
};

// de_DecryptionFailure omitted.

// de_DeleteResourcePolicyResponse omitted.

/**
 * deserializeRpcv2cborDeleteSecretResponse
 */
const de_DeleteSecretResponse = (output: any, context: __SerdeContext): DeleteSecretResponse => {
  return take(output, {
    ARN: __expectString,
    DeletionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborDescribeSecretResponse
 */
const de_DescribeSecretResponse = (output: any, context: __SerdeContext): DescribeSecretResponse => {
  return take(output, {
    ARN: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    DeletedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    Description: __expectString,
    KmsKeyId: __expectString,
    LastAccessedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    LastChangedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    LastRotatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    Name: __expectString,
    NextRotationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    OwningService: __expectString,
    PrimaryRegion: __expectString,
    ReplicationStatus: (_: any) => de_ReplicationStatusListType(_, context),
    RotationEnabled: __expectBoolean,
    RotationLambdaARN: __expectString,
    RotationRules: _json,
    Tags: _json,
    VersionIdsToStages: _json,
  }) as any;
};

// de_EncryptionFailure omitted.

// de_GetRandomPasswordResponse omitted.

// de_GetResourcePolicyResponse omitted.

/**
 * deserializeRpcv2cborGetSecretValueResponse
 */
const de_GetSecretValueResponse = (output: any, context: __SerdeContext): GetSecretValueResponse => {
  return take(output, {
    ARN: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    Name: __expectString,
    SecretBinary: [],
    SecretString: __expectString,
    VersionId: __expectString,
    VersionStages: _json,
  }) as any;
};

// de_InternalServiceError omitted.

// de_InvalidNextTokenException omitted.

// de_InvalidParameterException omitted.

// de_InvalidRequestException omitted.

// de_KmsKeyIdListType omitted.

// de_LimitExceededException omitted.

/**
 * deserializeRpcv2cborListSecretsResponse
 */
const de_ListSecretsResponse = (output: any, context: __SerdeContext): ListSecretsResponse => {
  return take(output, {
    NextToken: __expectString,
    SecretList: (_: any) => de_SecretListType(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborListSecretVersionIdsResponse
 */
const de_ListSecretVersionIdsResponse = (output: any, context: __SerdeContext): ListSecretVersionIdsResponse => {
  return take(output, {
    ARN: __expectString,
    Name: __expectString,
    NextToken: __expectString,
    Versions: (_: any) => de_SecretVersionsListType(_, context),
  }) as any;
};

// de_MalformedPolicyDocumentException omitted.

// de_PreconditionNotMetException omitted.

// de_PublicPolicyException omitted.

// de_PutResourcePolicyResponse omitted.

// de_PutSecretValueResponse omitted.

/**
 * deserializeRpcv2cborRemoveRegionsFromReplicationResponse
 */
const de_RemoveRegionsFromReplicationResponse = (
  output: any,
  context: __SerdeContext
): RemoveRegionsFromReplicationResponse => {
  return take(output, {
    ARN: __expectString,
    ReplicationStatus: (_: any) => de_ReplicationStatusListType(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborReplicateSecretToRegionsResponse
 */
const de_ReplicateSecretToRegionsResponse = (
  output: any,
  context: __SerdeContext
): ReplicateSecretToRegionsResponse => {
  return take(output, {
    ARN: __expectString,
    ReplicationStatus: (_: any) => de_ReplicationStatusListType(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborReplicationStatusListType
 */
const de_ReplicationStatusListType = (output: any, context: __SerdeContext): ReplicationStatusType[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicationStatusType(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborReplicationStatusType
 */
const de_ReplicationStatusType = (output: any, context: __SerdeContext): ReplicationStatusType => {
  return take(output, {
    KmsKeyId: __expectString,
    LastAccessedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    Region: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

// de_ResourceExistsException omitted.

// de_ResourceNotFoundException omitted.

// de_RestoreSecretResponse omitted.

// de_RotateSecretResponse omitted.

// de_RotationRulesType omitted.

/**
 * deserializeRpcv2cborSecretListEntry
 */
const de_SecretListEntry = (output: any, context: __SerdeContext): SecretListEntry => {
  return take(output, {
    ARN: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    DeletedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    Description: __expectString,
    KmsKeyId: __expectString,
    LastAccessedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    LastChangedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    LastRotatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    Name: __expectString,
    NextRotationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    OwningService: __expectString,
    PrimaryRegion: __expectString,
    RotationEnabled: __expectBoolean,
    RotationLambdaARN: __expectString,
    RotationRules: _json,
    SecretVersionsToStages: _json,
    Tags: _json,
  }) as any;
};

/**
 * deserializeRpcv2cborSecretListType
 */
const de_SecretListType = (output: any, context: __SerdeContext): SecretListEntry[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SecretListEntry(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborSecretValueEntry
 */
const de_SecretValueEntry = (output: any, context: __SerdeContext): SecretValueEntry => {
  return take(output, {
    ARN: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    Name: __expectString,
    SecretBinary: [],
    SecretString: __expectString,
    VersionId: __expectString,
    VersionStages: _json,
  }) as any;
};

/**
 * deserializeRpcv2cborSecretValuesType
 */
const de_SecretValuesType = (output: any, context: __SerdeContext): SecretValueEntry[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SecretValueEntry(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborSecretVersionsListEntry
 */
const de_SecretVersionsListEntry = (output: any, context: __SerdeContext): SecretVersionsListEntry => {
  return take(output, {
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    KmsKeyIds: _json,
    LastAccessedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    VersionId: __expectString,
    VersionStages: _json,
  }) as any;
};

/**
 * deserializeRpcv2cborSecretVersionsListType
 */
const de_SecretVersionsListType = (output: any, context: __SerdeContext): SecretVersionsListEntry[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SecretVersionsListEntry(entry, context);
    });
  return collection;
};

// de_SecretVersionStagesType omitted.

// de_SecretVersionsToStagesMapType omitted.

// de_StopReplicationToReplicaResponse omitted.

// de_Tag omitted.

// de_TagListType omitted.

// de_UpdateSecretResponse omitted.

// de_UpdateSecretVersionStageResponse omitted.

// de_ValidateResourcePolicyResponse omitted.

// de_ValidationErrorsEntry omitted.

// de_ValidationErrorsType omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

const throwDefaultError = withBaseException(__BaseException);
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/cbor",
  "smithy-protocol": "rpc-v2-cbor",
  accept: "application/cbor",
};
