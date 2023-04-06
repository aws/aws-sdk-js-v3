// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

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
  CancelRotateSecretRequest,
  CancelRotateSecretResponse,
  CreateSecretRequest,
  CreateSecretResponse,
  DecryptionFailure,
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteSecretRequest,
  DeleteSecretResponse,
  DescribeSecretRequest,
  DescribeSecretResponse,
  EncryptionFailure,
  Filter,
  GetRandomPasswordRequest,
  GetRandomPasswordResponse,
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
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
  PutResourcePolicyResponse,
  PutSecretValueRequest,
  PutSecretValueResponse,
  RemoveRegionsFromReplicationRequest,
  RemoveRegionsFromReplicationResponse,
  ReplicaRegionType,
  ReplicateSecretToRegionsRequest,
  ReplicateSecretToRegionsResponse,
  ReplicationStatusType,
  ResourceExistsException,
  ResourceNotFoundException,
  RestoreSecretRequest,
  RestoreSecretResponse,
  RotateSecretRequest,
  RotateSecretResponse,
  RotationRulesType,
  SecretListEntry,
  SecretVersionsListEntry,
  StopReplicationToReplicaRequest,
  StopReplicationToReplicaResponse,
  Tag,
  TagResourceRequest,
  UntagResourceRequest,
  UpdateSecretRequest,
  UpdateSecretResponse,
  UpdateSecretVersionStageRequest,
  UpdateSecretVersionStageResponse,
  ValidateResourcePolicyRequest,
  ValidateResourcePolicyResponse,
  ValidationErrorsEntry,
} from "../models/models_0";
import { SecretsManagerServiceException as __BaseException } from "../models/SecretsManagerServiceException";

/**
 * serializeAws_json1_1CancelRotateSecretCommand
 */
export const se_CancelRotateSecretCommand = async (
  input: CancelRotateSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.CancelRotateSecret",
  };
  let body: any;
  body = JSON.stringify(se_CancelRotateSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSecretCommand
 */
export const se_CreateSecretCommand = async (
  input: CreateSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.CreateSecret",
  };
  let body: any;
  body = JSON.stringify(se_CreateSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.DeleteResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeleteResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSecretCommand
 */
export const se_DeleteSecretCommand = async (
  input: DeleteSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.DeleteSecret",
  };
  let body: any;
  body = JSON.stringify(se_DeleteSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSecretCommand
 */
export const se_DescribeSecretCommand = async (
  input: DescribeSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.DescribeSecret",
  };
  let body: any;
  body = JSON.stringify(se_DescribeSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRandomPasswordCommand
 */
export const se_GetRandomPasswordCommand = async (
  input: GetRandomPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.GetRandomPassword",
  };
  let body: any;
  body = JSON.stringify(se_GetRandomPasswordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.GetResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSecretValueCommand
 */
export const se_GetSecretValueCommand = async (
  input: GetSecretValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.GetSecretValue",
  };
  let body: any;
  body = JSON.stringify(se_GetSecretValueRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSecretsCommand
 */
export const se_ListSecretsCommand = async (
  input: ListSecretsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.ListSecrets",
  };
  let body: any;
  body = JSON.stringify(se_ListSecretsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSecretVersionIdsCommand
 */
export const se_ListSecretVersionIdsCommand = async (
  input: ListSecretVersionIdsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.ListSecretVersionIds",
  };
  let body: any;
  body = JSON.stringify(se_ListSecretVersionIdsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.PutResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutSecretValueCommand
 */
export const se_PutSecretValueCommand = async (
  input: PutSecretValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.PutSecretValue",
  };
  let body: any;
  body = JSON.stringify(se_PutSecretValueRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveRegionsFromReplicationCommand
 */
export const se_RemoveRegionsFromReplicationCommand = async (
  input: RemoveRegionsFromReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.RemoveRegionsFromReplication",
  };
  let body: any;
  body = JSON.stringify(se_RemoveRegionsFromReplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ReplicateSecretToRegionsCommand
 */
export const se_ReplicateSecretToRegionsCommand = async (
  input: ReplicateSecretToRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.ReplicateSecretToRegions",
  };
  let body: any;
  body = JSON.stringify(se_ReplicateSecretToRegionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreSecretCommand
 */
export const se_RestoreSecretCommand = async (
  input: RestoreSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.RestoreSecret",
  };
  let body: any;
  body = JSON.stringify(se_RestoreSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RotateSecretCommand
 */
export const se_RotateSecretCommand = async (
  input: RotateSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.RotateSecret",
  };
  let body: any;
  body = JSON.stringify(se_RotateSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopReplicationToReplicaCommand
 */
export const se_StopReplicationToReplicaCommand = async (
  input: StopReplicationToReplicaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.StopReplicationToReplica",
  };
  let body: any;
  body = JSON.stringify(se_StopReplicationToReplicaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSecretCommand
 */
export const se_UpdateSecretCommand = async (
  input: UpdateSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.UpdateSecret",
  };
  let body: any;
  body = JSON.stringify(se_UpdateSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSecretVersionStageCommand
 */
export const se_UpdateSecretVersionStageCommand = async (
  input: UpdateSecretVersionStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.UpdateSecretVersionStage",
  };
  let body: any;
  body = JSON.stringify(se_UpdateSecretVersionStageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ValidateResourcePolicyCommand
 */
export const se_ValidateResourcePolicyCommand = async (
  input: ValidateResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.ValidateResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(se_ValidateResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CancelRotateSecretCommand
 */
export const de_CancelRotateSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRotateSecretCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelRotateSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelRotateSecretResponse(data, context);
  const response: CancelRotateSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelRotateSecretCommandError
 */
const de_CancelRotateSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRotateSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateSecretCommand
 */
export const de_CreateSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecretCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSecretResponse(data, context);
  const response: CreateSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSecretCommandError
 */
const de_CreateSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DecryptionFailure":
    case "com.amazonaws.secretsmanager#DecryptionFailure":
      throw await de_DecryptionFailureRes(parsedOutput, context);
    case "EncryptionFailure":
    case "com.amazonaws.secretsmanager#EncryptionFailure":
      throw await de_EncryptionFailureRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteResourcePolicyResponse(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyCommandError
 */
const de_DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteSecretCommand
 */
export const de_DeleteSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecretCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSecretResponse(data, context);
  const response: DeleteSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSecretCommandError
 */
const de_DeleteSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeSecretCommand
 */
export const de_DescribeSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecretCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSecretResponse(data, context);
  const response: DescribeSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSecretCommandError
 */
const de_DescribeSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetRandomPasswordCommand
 */
export const de_GetRandomPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRandomPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRandomPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRandomPasswordResponse(data, context);
  const response: GetRandomPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetRandomPasswordCommandError
 */
const de_GetRandomPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRandomPasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourcePolicyResponse(data, context);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResourcePolicyCommandError
 */
const de_GetResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetSecretValueCommand
 */
export const de_GetSecretValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecretValueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSecretValueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSecretValueResponse(data, context);
  const response: GetSecretValueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSecretValueCommandError
 */
const de_GetSecretValueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecretValueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DecryptionFailure":
    case "com.amazonaws.secretsmanager#DecryptionFailure":
      throw await de_DecryptionFailureRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListSecretsCommand
 */
export const de_ListSecretsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecretsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSecretsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSecretsResponse(data, context);
  const response: ListSecretsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSecretsCommandError
 */
const de_ListSecretsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecretsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.secretsmanager#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListSecretVersionIdsCommand
 */
export const de_ListSecretVersionIdsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecretVersionIdsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSecretVersionIdsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSecretVersionIdsResponse(data, context);
  const response: ListSecretVersionIdsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSecretVersionIdsCommandError
 */
const de_ListSecretVersionIdsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecretVersionIdsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.secretsmanager#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutResourcePolicyCommandError
 */
const de_PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.secretsmanager#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "PublicPolicyException":
    case "com.amazonaws.secretsmanager#PublicPolicyException":
      throw await de_PublicPolicyExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutSecretValueCommand
 */
export const de_PutSecretValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSecretValueCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutSecretValueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutSecretValueResponse(data, context);
  const response: PutSecretValueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutSecretValueCommandError
 */
const de_PutSecretValueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSecretValueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DecryptionFailure":
    case "com.amazonaws.secretsmanager#DecryptionFailure":
      throw await de_DecryptionFailureRes(parsedOutput, context);
    case "EncryptionFailure":
    case "com.amazonaws.secretsmanager#EncryptionFailure":
      throw await de_EncryptionFailureRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.secretsmanager#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.secretsmanager#ResourceExistsException":
      throw await de_ResourceExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RemoveRegionsFromReplicationCommand
 */
export const de_RemoveRegionsFromReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRegionsFromReplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveRegionsFromReplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveRegionsFromReplicationResponse(data, context);
  const response: RemoveRegionsFromReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveRegionsFromReplicationCommandError
 */
const de_RemoveRegionsFromReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRegionsFromReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ReplicateSecretToRegionsCommand
 */
export const de_ReplicateSecretToRegionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReplicateSecretToRegionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ReplicateSecretToRegionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReplicateSecretToRegionsResponse(data, context);
  const response: ReplicateSecretToRegionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ReplicateSecretToRegionsCommandError
 */
const de_ReplicateSecretToRegionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReplicateSecretToRegionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RestoreSecretCommand
 */
export const de_RestoreSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreSecretCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreSecretResponse(data, context);
  const response: RestoreSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RestoreSecretCommandError
 */
const de_RestoreSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RotateSecretCommand
 */
export const de_RotateSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateSecretCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RotateSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RotateSecretResponse(data, context);
  const response: RotateSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RotateSecretCommandError
 */
const de_RotateSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopReplicationToReplicaCommand
 */
export const de_StopReplicationToReplicaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopReplicationToReplicaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopReplicationToReplicaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopReplicationToReplicaResponse(data, context);
  const response: StopReplicationToReplicaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopReplicationToReplicaCommandError
 */
const de_StopReplicationToReplicaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopReplicationToReplicaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
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
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
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
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateSecretCommand
 */
export const de_UpdateSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecretCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSecretResponse(data, context);
  const response: UpdateSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateSecretCommandError
 */
const de_UpdateSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DecryptionFailure":
    case "com.amazonaws.secretsmanager#DecryptionFailure":
      throw await de_DecryptionFailureRes(parsedOutput, context);
    case "EncryptionFailure":
    case "com.amazonaws.secretsmanager#EncryptionFailure":
      throw await de_EncryptionFailureRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateSecretVersionStageCommand
 */
export const de_UpdateSecretVersionStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecretVersionStageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSecretVersionStageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSecretVersionStageResponse(data, context);
  const response: UpdateSecretVersionStageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateSecretVersionStageCommandError
 */
const de_UpdateSecretVersionStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecretVersionStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.secretsmanager#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ValidateResourcePolicyCommand
 */
export const de_ValidateResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ValidateResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ValidateResourcePolicyResponse(data, context);
  const response: ValidateResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ValidateResourcePolicyCommandError
 */
const de_ValidateResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.secretsmanager#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DecryptionFailureRes
 */
const de_DecryptionFailureRes = async (parsedOutput: any, context: __SerdeContext): Promise<DecryptionFailure> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DecryptionFailure(body, context);
  const exception = new DecryptionFailure({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EncryptionFailureRes
 */
const de_EncryptionFailureRes = async (parsedOutput: any, context: __SerdeContext): Promise<EncryptionFailure> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EncryptionFailure(body, context);
  const exception = new EncryptionFailure({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServiceErrorRes
 */
const de_InternalServiceErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServiceError(body, context);
  const exception = new InternalServiceError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MalformedPolicyDocumentExceptionRes
 */
const de_MalformedPolicyDocumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MalformedPolicyDocumentException(body, context);
  const exception = new MalformedPolicyDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PreconditionNotMetExceptionRes
 */
const de_PreconditionNotMetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionNotMetException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PreconditionNotMetException(body, context);
  const exception = new PreconditionNotMetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PublicPolicyExceptionRes
 */
const de_PublicPolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PublicPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PublicPolicyException(body, context);
  const exception = new PublicPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceExistsExceptionRes
 */
const de_ResourceExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceExistsException(body, context);
  const exception = new ResourceExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AddReplicaRegionListType
 */
const se_AddReplicaRegionListType = (input: ReplicaRegionType[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReplicaRegionType(entry, context);
    });
};

/**
 * serializeAws_json1_1CancelRotateSecretRequest
 */
const se_CancelRotateSecretRequest = (input: CancelRotateSecretRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecretId != null && { SecretId: input.SecretId }),
  };
};

/**
 * serializeAws_json1_1CreateSecretRequest
 */
const se_CreateSecretRequest = (input: CreateSecretRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddReplicaRegions != null && {
      AddReplicaRegions: se_AddReplicaRegionListType(input.AddReplicaRegions, context),
    }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ForceOverwriteReplicaSecret != null && {
      ForceOverwriteReplicaSecret: input.ForceOverwriteReplicaSecret,
    }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SecretBinary != null && { SecretBinary: context.base64Encoder(input.SecretBinary) }),
    ...(input.SecretString != null && { SecretString: input.SecretString }),
    ...(input.Tags != null && { Tags: se_TagListType(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteResourcePolicyRequest
 */
const se_DeleteResourcePolicyRequest = (input: DeleteResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecretId != null && { SecretId: input.SecretId }),
  };
};

/**
 * serializeAws_json1_1DeleteSecretRequest
 */
const se_DeleteSecretRequest = (input: DeleteSecretRequest, context: __SerdeContext): any => {
  return {
    ...(input.ForceDeleteWithoutRecovery != null && { ForceDeleteWithoutRecovery: input.ForceDeleteWithoutRecovery }),
    ...(input.RecoveryWindowInDays != null && { RecoveryWindowInDays: input.RecoveryWindowInDays }),
    ...(input.SecretId != null && { SecretId: input.SecretId }),
  };
};

/**
 * serializeAws_json1_1DescribeSecretRequest
 */
const se_DescribeSecretRequest = (input: DescribeSecretRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecretId != null && { SecretId: input.SecretId }),
  };
};

/**
 * serializeAws_json1_1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: se_FilterValuesStringList(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1FiltersListType
 */
const se_FiltersListType = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_json1_1FilterValuesStringList
 */
const se_FilterValuesStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetRandomPasswordRequest
 */
const se_GetRandomPasswordRequest = (input: GetRandomPasswordRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExcludeCharacters != null && { ExcludeCharacters: input.ExcludeCharacters }),
    ...(input.ExcludeLowercase != null && { ExcludeLowercase: input.ExcludeLowercase }),
    ...(input.ExcludeNumbers != null && { ExcludeNumbers: input.ExcludeNumbers }),
    ...(input.ExcludePunctuation != null && { ExcludePunctuation: input.ExcludePunctuation }),
    ...(input.ExcludeUppercase != null && { ExcludeUppercase: input.ExcludeUppercase }),
    ...(input.IncludeSpace != null && { IncludeSpace: input.IncludeSpace }),
    ...(input.PasswordLength != null && { PasswordLength: input.PasswordLength }),
    ...(input.RequireEachIncludedType != null && { RequireEachIncludedType: input.RequireEachIncludedType }),
  };
};

/**
 * serializeAws_json1_1GetResourcePolicyRequest
 */
const se_GetResourcePolicyRequest = (input: GetResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecretId != null && { SecretId: input.SecretId }),
  };
};

/**
 * serializeAws_json1_1GetSecretValueRequest
 */
const se_GetSecretValueRequest = (input: GetSecretValueRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecretId != null && { SecretId: input.SecretId }),
    ...(input.VersionId != null && { VersionId: input.VersionId }),
    ...(input.VersionStage != null && { VersionStage: input.VersionStage }),
  };
};

/**
 * serializeAws_json1_1ListSecretsRequest
 */
const se_ListSecretsRequest = (input: ListSecretsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_FiltersListType(input.Filters, context) }),
    ...(input.IncludePlannedDeletion != null && { IncludePlannedDeletion: input.IncludePlannedDeletion }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

/**
 * serializeAws_json1_1ListSecretVersionIdsRequest
 */
const se_ListSecretVersionIdsRequest = (input: ListSecretVersionIdsRequest, context: __SerdeContext): any => {
  return {
    ...(input.IncludeDeprecated != null && { IncludeDeprecated: input.IncludeDeprecated }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SecretId != null && { SecretId: input.SecretId }),
  };
};

/**
 * serializeAws_json1_1PutResourcePolicyRequest
 */
const se_PutResourcePolicyRequest = (input: PutResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.BlockPublicPolicy != null && { BlockPublicPolicy: input.BlockPublicPolicy }),
    ...(input.ResourcePolicy != null && { ResourcePolicy: input.ResourcePolicy }),
    ...(input.SecretId != null && { SecretId: input.SecretId }),
  };
};

/**
 * serializeAws_json1_1PutSecretValueRequest
 */
const se_PutSecretValueRequest = (input: PutSecretValueRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.SecretBinary != null && { SecretBinary: context.base64Encoder(input.SecretBinary) }),
    ...(input.SecretId != null && { SecretId: input.SecretId }),
    ...(input.SecretString != null && { SecretString: input.SecretString }),
    ...(input.VersionStages != null && { VersionStages: se_SecretVersionStagesType(input.VersionStages, context) }),
  };
};

/**
 * serializeAws_json1_1RemoveRegionsFromReplicationRequest
 */
const se_RemoveRegionsFromReplicationRequest = (
  input: RemoveRegionsFromReplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RemoveReplicaRegions != null && {
      RemoveReplicaRegions: se_RemoveReplicaRegionListType(input.RemoveReplicaRegions, context),
    }),
    ...(input.SecretId != null && { SecretId: input.SecretId }),
  };
};

/**
 * serializeAws_json1_1RemoveReplicaRegionListType
 */
const se_RemoveReplicaRegionListType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ReplicaRegionType
 */
const se_ReplicaRegionType = (input: ReplicaRegionType, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Region != null && { Region: input.Region }),
  };
};

/**
 * serializeAws_json1_1ReplicateSecretToRegionsRequest
 */
const se_ReplicateSecretToRegionsRequest = (input: ReplicateSecretToRegionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddReplicaRegions != null && {
      AddReplicaRegions: se_AddReplicaRegionListType(input.AddReplicaRegions, context),
    }),
    ...(input.ForceOverwriteReplicaSecret != null && {
      ForceOverwriteReplicaSecret: input.ForceOverwriteReplicaSecret,
    }),
    ...(input.SecretId != null && { SecretId: input.SecretId }),
  };
};

/**
 * serializeAws_json1_1RestoreSecretRequest
 */
const se_RestoreSecretRequest = (input: RestoreSecretRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecretId != null && { SecretId: input.SecretId }),
  };
};

/**
 * serializeAws_json1_1RotateSecretRequest
 */
const se_RotateSecretRequest = (input: RotateSecretRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.RotateImmediately != null && { RotateImmediately: input.RotateImmediately }),
    ...(input.RotationLambdaARN != null && { RotationLambdaARN: input.RotationLambdaARN }),
    ...(input.RotationRules != null && { RotationRules: se_RotationRulesType(input.RotationRules, context) }),
    ...(input.SecretId != null && { SecretId: input.SecretId }),
  };
};

/**
 * serializeAws_json1_1RotationRulesType
 */
const se_RotationRulesType = (input: RotationRulesType, context: __SerdeContext): any => {
  return {
    ...(input.AutomaticallyAfterDays != null && { AutomaticallyAfterDays: input.AutomaticallyAfterDays }),
    ...(input.Duration != null && { Duration: input.Duration }),
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
  };
};

/**
 * serializeAws_json1_1SecretVersionStagesType
 */
const se_SecretVersionStagesType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StopReplicationToReplicaRequest
 */
const se_StopReplicationToReplicaRequest = (input: StopReplicationToReplicaRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecretId != null && { SecretId: input.SecretId }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyListType
 */
const se_TagKeyListType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagListType
 */
const se_TagListType = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecretId != null && { SecretId: input.SecretId }),
    ...(input.Tags != null && { Tags: se_TagListType(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecretId != null && { SecretId: input.SecretId }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyListType(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateSecretRequest
 */
const se_UpdateSecretRequest = (input: UpdateSecretRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.SecretBinary != null && { SecretBinary: context.base64Encoder(input.SecretBinary) }),
    ...(input.SecretId != null && { SecretId: input.SecretId }),
    ...(input.SecretString != null && { SecretString: input.SecretString }),
  };
};

/**
 * serializeAws_json1_1UpdateSecretVersionStageRequest
 */
const se_UpdateSecretVersionStageRequest = (input: UpdateSecretVersionStageRequest, context: __SerdeContext): any => {
  return {
    ...(input.MoveToVersionId != null && { MoveToVersionId: input.MoveToVersionId }),
    ...(input.RemoveFromVersionId != null && { RemoveFromVersionId: input.RemoveFromVersionId }),
    ...(input.SecretId != null && { SecretId: input.SecretId }),
    ...(input.VersionStage != null && { VersionStage: input.VersionStage }),
  };
};

/**
 * serializeAws_json1_1ValidateResourcePolicyRequest
 */
const se_ValidateResourcePolicyRequest = (input: ValidateResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourcePolicy != null && { ResourcePolicy: input.ResourcePolicy }),
    ...(input.SecretId != null && { SecretId: input.SecretId }),
  };
};

/**
 * deserializeAws_json1_1CancelRotateSecretResponse
 */
const de_CancelRotateSecretResponse = (output: any, context: __SerdeContext): CancelRotateSecretResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
    VersionId: __expectString(output.VersionId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateSecretResponse
 */
const de_CreateSecretResponse = (output: any, context: __SerdeContext): CreateSecretResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
    ReplicationStatus:
      output.ReplicationStatus != null ? de_ReplicationStatusListType(output.ReplicationStatus, context) : undefined,
    VersionId: __expectString(output.VersionId),
  } as any;
};

/**
 * deserializeAws_json1_1DecryptionFailure
 */
const de_DecryptionFailure = (output: any, context: __SerdeContext): DecryptionFailure => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyResponse
 */
const de_DeleteResourcePolicyResponse = (output: any, context: __SerdeContext): DeleteResourcePolicyResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteSecretResponse
 */
const de_DeleteSecretResponse = (output: any, context: __SerdeContext): DeleteSecretResponse => {
  return {
    ARN: __expectString(output.ARN),
    DeletionDate:
      output.DeletionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletionDate)))
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSecretResponse
 */
const de_DescribeSecretResponse = (output: any, context: __SerdeContext): DescribeSecretResponse => {
  return {
    ARN: __expectString(output.ARN),
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    DeletedDate:
      output.DeletedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletedDate)))
        : undefined,
    Description: __expectString(output.Description),
    KmsKeyId: __expectString(output.KmsKeyId),
    LastAccessedDate:
      output.LastAccessedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAccessedDate)))
        : undefined,
    LastChangedDate:
      output.LastChangedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastChangedDate)))
        : undefined,
    LastRotatedDate:
      output.LastRotatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastRotatedDate)))
        : undefined,
    Name: __expectString(output.Name),
    NextRotationDate:
      output.NextRotationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NextRotationDate)))
        : undefined,
    OwningService: __expectString(output.OwningService),
    PrimaryRegion: __expectString(output.PrimaryRegion),
    ReplicationStatus:
      output.ReplicationStatus != null ? de_ReplicationStatusListType(output.ReplicationStatus, context) : undefined,
    RotationEnabled: __expectBoolean(output.RotationEnabled),
    RotationLambdaARN: __expectString(output.RotationLambdaARN),
    RotationRules: output.RotationRules != null ? de_RotationRulesType(output.RotationRules, context) : undefined,
    Tags: output.Tags != null ? de_TagListType(output.Tags, context) : undefined,
    VersionIdsToStages:
      output.VersionIdsToStages != null
        ? de_SecretVersionsToStagesMapType(output.VersionIdsToStages, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EncryptionFailure
 */
const de_EncryptionFailure = (output: any, context: __SerdeContext): EncryptionFailure => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1GetRandomPasswordResponse
 */
const de_GetRandomPasswordResponse = (output: any, context: __SerdeContext): GetRandomPasswordResponse => {
  return {
    RandomPassword: __expectString(output.RandomPassword),
  } as any;
};

/**
 * deserializeAws_json1_1GetResourcePolicyResponse
 */
const de_GetResourcePolicyResponse = (output: any, context: __SerdeContext): GetResourcePolicyResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
    ResourcePolicy: __expectString(output.ResourcePolicy),
  } as any;
};

/**
 * deserializeAws_json1_1GetSecretValueResponse
 */
const de_GetSecretValueResponse = (output: any, context: __SerdeContext): GetSecretValueResponse => {
  return {
    ARN: __expectString(output.ARN),
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    Name: __expectString(output.Name),
    SecretBinary: output.SecretBinary != null ? context.base64Decoder(output.SecretBinary) : undefined,
    SecretString: __expectString(output.SecretString),
    VersionId: __expectString(output.VersionId),
    VersionStages: output.VersionStages != null ? de_SecretVersionStagesType(output.VersionStages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InternalServiceError
 */
const de_InternalServiceError = (output: any, context: __SerdeContext): InternalServiceError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNextTokenException
 */
const de_InvalidNextTokenException = (output: any, context: __SerdeContext): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1KmsKeyIdListType
 */
const de_KmsKeyIdListType = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListSecretsResponse
 */
const de_ListSecretsResponse = (output: any, context: __SerdeContext): ListSecretsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SecretList: output.SecretList != null ? de_SecretListType(output.SecretList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSecretVersionIdsResponse
 */
const de_ListSecretVersionIdsResponse = (output: any, context: __SerdeContext): ListSecretVersionIdsResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
    NextToken: __expectString(output.NextToken),
    Versions: output.Versions != null ? de_SecretVersionsListType(output.Versions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MalformedPolicyDocumentException
 */
const de_MalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PreconditionNotMetException
 */
const de_PreconditionNotMetException = (output: any, context: __SerdeContext): PreconditionNotMetException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PublicPolicyException
 */
const de_PublicPolicyException = (output: any, context: __SerdeContext): PublicPolicyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PutResourcePolicyResponse
 */
const de_PutResourcePolicyResponse = (output: any, context: __SerdeContext): PutResourcePolicyResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1PutSecretValueResponse
 */
const de_PutSecretValueResponse = (output: any, context: __SerdeContext): PutSecretValueResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
    VersionId: __expectString(output.VersionId),
    VersionStages: output.VersionStages != null ? de_SecretVersionStagesType(output.VersionStages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RemoveRegionsFromReplicationResponse
 */
const de_RemoveRegionsFromReplicationResponse = (
  output: any,
  context: __SerdeContext
): RemoveRegionsFromReplicationResponse => {
  return {
    ARN: __expectString(output.ARN),
    ReplicationStatus:
      output.ReplicationStatus != null ? de_ReplicationStatusListType(output.ReplicationStatus, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ReplicateSecretToRegionsResponse
 */
const de_ReplicateSecretToRegionsResponse = (
  output: any,
  context: __SerdeContext
): ReplicateSecretToRegionsResponse => {
  return {
    ARN: __expectString(output.ARN),
    ReplicationStatus:
      output.ReplicationStatus != null ? de_ReplicationStatusListType(output.ReplicationStatus, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationStatusListType
 */
const de_ReplicationStatusListType = (output: any, context: __SerdeContext): ReplicationStatusType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicationStatusType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationStatusType
 */
const de_ReplicationStatusType = (output: any, context: __SerdeContext): ReplicationStatusType => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    LastAccessedDate:
      output.LastAccessedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAccessedDate)))
        : undefined,
    Region: __expectString(output.Region),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceExistsException
 */
const de_ResourceExistsException = (output: any, context: __SerdeContext): ResourceExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1RestoreSecretResponse
 */
const de_RestoreSecretResponse = (output: any, context: __SerdeContext): RestoreSecretResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1RotateSecretResponse
 */
const de_RotateSecretResponse = (output: any, context: __SerdeContext): RotateSecretResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
    VersionId: __expectString(output.VersionId),
  } as any;
};

/**
 * deserializeAws_json1_1RotationRulesType
 */
const de_RotationRulesType = (output: any, context: __SerdeContext): RotationRulesType => {
  return {
    AutomaticallyAfterDays: __expectLong(output.AutomaticallyAfterDays),
    Duration: __expectString(output.Duration),
    ScheduleExpression: __expectString(output.ScheduleExpression),
  } as any;
};

/**
 * deserializeAws_json1_1SecretListEntry
 */
const de_SecretListEntry = (output: any, context: __SerdeContext): SecretListEntry => {
  return {
    ARN: __expectString(output.ARN),
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    DeletedDate:
      output.DeletedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletedDate)))
        : undefined,
    Description: __expectString(output.Description),
    KmsKeyId: __expectString(output.KmsKeyId),
    LastAccessedDate:
      output.LastAccessedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAccessedDate)))
        : undefined,
    LastChangedDate:
      output.LastChangedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastChangedDate)))
        : undefined,
    LastRotatedDate:
      output.LastRotatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastRotatedDate)))
        : undefined,
    Name: __expectString(output.Name),
    NextRotationDate:
      output.NextRotationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NextRotationDate)))
        : undefined,
    OwningService: __expectString(output.OwningService),
    PrimaryRegion: __expectString(output.PrimaryRegion),
    RotationEnabled: __expectBoolean(output.RotationEnabled),
    RotationLambdaARN: __expectString(output.RotationLambdaARN),
    RotationRules: output.RotationRules != null ? de_RotationRulesType(output.RotationRules, context) : undefined,
    SecretVersionsToStages:
      output.SecretVersionsToStages != null
        ? de_SecretVersionsToStagesMapType(output.SecretVersionsToStages, context)
        : undefined,
    Tags: output.Tags != null ? de_TagListType(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SecretListType
 */
const de_SecretListType = (output: any, context: __SerdeContext): SecretListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SecretListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SecretVersionsListEntry
 */
const de_SecretVersionsListEntry = (output: any, context: __SerdeContext): SecretVersionsListEntry => {
  return {
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    KmsKeyIds: output.KmsKeyIds != null ? de_KmsKeyIdListType(output.KmsKeyIds, context) : undefined,
    LastAccessedDate:
      output.LastAccessedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAccessedDate)))
        : undefined,
    VersionId: __expectString(output.VersionId),
    VersionStages: output.VersionStages != null ? de_SecretVersionStagesType(output.VersionStages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SecretVersionsListType
 */
const de_SecretVersionsListType = (output: any, context: __SerdeContext): SecretVersionsListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SecretVersionsListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SecretVersionStagesType
 */
const de_SecretVersionStagesType = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1SecretVersionsToStagesMapType
 */
const de_SecretVersionsToStagesMapType = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_SecretVersionStagesType(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1StopReplicationToReplicaResponse
 */
const de_StopReplicationToReplicaResponse = (
  output: any,
  context: __SerdeContext
): StopReplicationToReplicaResponse => {
  return {
    ARN: __expectString(output.ARN),
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagListType
 */
const de_TagListType = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UpdateSecretResponse
 */
const de_UpdateSecretResponse = (output: any, context: __SerdeContext): UpdateSecretResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
    VersionId: __expectString(output.VersionId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateSecretVersionStageResponse
 */
const de_UpdateSecretVersionStageResponse = (
  output: any,
  context: __SerdeContext
): UpdateSecretVersionStageResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ValidateResourcePolicyResponse
 */
const de_ValidateResourcePolicyResponse = (output: any, context: __SerdeContext): ValidateResourcePolicyResponse => {
  return {
    PolicyValidationPassed: __expectBoolean(output.PolicyValidationPassed),
    ValidationErrors:
      output.ValidationErrors != null ? de_ValidationErrorsType(output.ValidationErrors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ValidationErrorsEntry
 */
const de_ValidationErrorsEntry = (output: any, context: __SerdeContext): ValidationErrorsEntry => {
  return {
    CheckName: __expectString(output.CheckName),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

/**
 * deserializeAws_json1_1ValidationErrorsType
 */
const de_ValidationErrorsType = (output: any, context: __SerdeContext): ValidationErrorsEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationErrorsEntry(entry, context);
    });
  return retVal;
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
