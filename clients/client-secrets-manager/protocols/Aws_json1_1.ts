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
import {
  ListSecretVersionIdsCommandInput,
  ListSecretVersionIdsCommandOutput,
} from "../commands/ListSecretVersionIdsCommand";
import { ListSecretsCommandInput, ListSecretsCommandOutput } from "../commands/ListSecretsCommand";
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
  ListSecretVersionIdsRequest,
  ListSecretVersionIdsResponse,
  ListSecretsRequest,
  ListSecretsResponse,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_1CancelRotateSecretCommand = async (
  input: CancelRotateSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.CancelRotateSecret",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelRotateSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSecretCommand = async (
  input: CreateSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.CreateSecret",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.DeleteResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSecretCommand = async (
  input: DeleteSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.DeleteSecret",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSecretCommand = async (
  input: DescribeSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.DescribeSecret",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRandomPasswordCommand = async (
  input: GetRandomPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.GetRandomPassword",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRandomPasswordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.GetResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSecretValueCommand = async (
  input: GetSecretValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.GetSecretValue",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSecretValueRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSecretsCommand = async (
  input: ListSecretsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.ListSecrets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSecretsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSecretVersionIdsCommand = async (
  input: ListSecretVersionIdsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.ListSecretVersionIds",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSecretVersionIdsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.PutResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutSecretValueCommand = async (
  input: PutSecretValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.PutSecretValue",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutSecretValueRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveRegionsFromReplicationCommand = async (
  input: RemoveRegionsFromReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.RemoveRegionsFromReplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveRegionsFromReplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ReplicateSecretToRegionsCommand = async (
  input: ReplicateSecretToRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.ReplicateSecretToRegions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ReplicateSecretToRegionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RestoreSecretCommand = async (
  input: RestoreSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.RestoreSecret",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RestoreSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RotateSecretCommand = async (
  input: RotateSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.RotateSecret",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RotateSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopReplicationToReplicaCommand = async (
  input: StopReplicationToReplicaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.StopReplicationToReplica",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopReplicationToReplicaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSecretCommand = async (
  input: UpdateSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.UpdateSecret",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSecretRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSecretVersionStageCommand = async (
  input: UpdateSecretVersionStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.UpdateSecretVersionStage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSecretVersionStageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ValidateResourcePolicyCommand = async (
  input: ValidateResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "secretsmanager.ValidateResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ValidateResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CancelRotateSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRotateSecretCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelRotateSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelRotateSecretResponse(data, context);
  const response: CancelRotateSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelRotateSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelRotateSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecretCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSecretResponse(data, context);
  const response: CreateSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionFailure":
    case "com.amazonaws.secretsmanager#EncryptionFailure":
      response = {
        ...(await deserializeAws_json1_1EncryptionFailureResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.secretsmanager#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.secretsmanager#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.secretsmanager#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.secretsmanager#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteResourcePolicyResponse(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecretCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSecretResponse(data, context);
  const response: DeleteSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecretCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSecretResponse(data, context);
  const response: DescribeSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetRandomPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRandomPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRandomPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRandomPasswordResponse(data, context);
  const response: GetRandomPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRandomPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRandomPasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourcePolicyResponse(data, context);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetSecretValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecretValueCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSecretValueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSecretValueResponse(data, context);
  const response: GetSecretValueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSecretValueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSecretValueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DecryptionFailure":
    case "com.amazonaws.secretsmanager#DecryptionFailure":
      response = {
        ...(await deserializeAws_json1_1DecryptionFailureResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListSecretsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecretsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSecretsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSecretsResponse(data, context);
  const response: ListSecretsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSecretsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecretsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.secretsmanager#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListSecretVersionIdsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecretVersionIdsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSecretVersionIdsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSecretVersionIdsResponse(data, context);
  const response: ListSecretVersionIdsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSecretVersionIdsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecretVersionIdsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.secretsmanager#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.secretsmanager#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PublicPolicyException":
    case "com.amazonaws.secretsmanager#PublicPolicyException":
      response = {
        ...(await deserializeAws_json1_1PublicPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutSecretValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSecretValueCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutSecretValueCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutSecretValueResponse(data, context);
  const response: PutSecretValueCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutSecretValueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSecretValueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionFailure":
    case "com.amazonaws.secretsmanager#EncryptionFailure":
      response = {
        ...(await deserializeAws_json1_1EncryptionFailureResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.secretsmanager#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.secretsmanager#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RemoveRegionsFromReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRegionsFromReplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveRegionsFromReplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveRegionsFromReplicationResponse(data, context);
  const response: RemoveRegionsFromReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveRegionsFromReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRegionsFromReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ReplicateSecretToRegionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReplicateSecretToRegionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ReplicateSecretToRegionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ReplicateSecretToRegionsResponse(data, context);
  const response: ReplicateSecretToRegionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ReplicateSecretToRegionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReplicateSecretToRegionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RestoreSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreSecretCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RestoreSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreSecretResponse(data, context);
  const response: RestoreSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RestoreSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RotateSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateSecretCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RotateSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RotateSecretResponse(data, context);
  const response: RotateSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RotateSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RotateSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopReplicationToReplicaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopReplicationToReplicaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopReplicationToReplicaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopReplicationToReplicaResponse(data, context);
  const response: StopReplicationToReplicaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopReplicationToReplicaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopReplicationToReplicaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecretCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSecretCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSecretResponse(data, context);
  const response: UpdateSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EncryptionFailure":
    case "com.amazonaws.secretsmanager#EncryptionFailure":
      response = {
        ...(await deserializeAws_json1_1EncryptionFailureResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.secretsmanager#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.secretsmanager#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionNotMetException":
    case "com.amazonaws.secretsmanager#PreconditionNotMetException":
      response = {
        ...(await deserializeAws_json1_1PreconditionNotMetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceExistsException":
    case "com.amazonaws.secretsmanager#ResourceExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateSecretVersionStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecretVersionStageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSecretVersionStageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSecretVersionStageResponse(data, context);
  const response: UpdateSecretVersionStageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSecretVersionStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecretVersionStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.secretsmanager#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ValidateResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ValidateResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ValidateResourcePolicyResponse(data, context);
  const response: ValidateResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ValidateResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.secretsmanager#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.secretsmanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.secretsmanager#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.secretsmanager#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.secretsmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1DecryptionFailureResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DecryptionFailure> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DecryptionFailure(body, context);
  const contents: DecryptionFailure = {
    name: "DecryptionFailure",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EncryptionFailureResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EncryptionFailure> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EncryptionFailure(body, context);
  const contents: EncryptionFailure = {
    name: "EncryptionFailure",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceError(body, context);
  const contents: InternalServiceError = {
    name: "InternalServiceError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MalformedPolicyDocumentException(body, context);
  const contents: MalformedPolicyDocumentException = {
    name: "MalformedPolicyDocumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PreconditionNotMetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionNotMetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PreconditionNotMetException(body, context);
  const contents: PreconditionNotMetException = {
    name: "PreconditionNotMetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PublicPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PublicPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PublicPolicyException(body, context);
  const contents: PublicPolicyException = {
    name: "PublicPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceExistsException(body, context);
  const contents: ResourceExistsException = {
    name: "ResourceExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AddReplicaRegionListType = (input: ReplicaRegionType[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ReplicaRegionType(entry, context);
    });
};

const serializeAws_json1_1CancelRotateSecretRequest = (
  input: CancelRotateSecretRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
  };
};

const serializeAws_json1_1CreateSecretRequest = (input: CreateSecretRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddReplicaRegions !== undefined &&
      input.AddReplicaRegions !== null && {
        AddReplicaRegions: serializeAws_json1_1AddReplicaRegionListType(input.AddReplicaRegions, context),
      }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.ForceOverwriteReplicaSecret !== undefined &&
      input.ForceOverwriteReplicaSecret !== null && { ForceOverwriteReplicaSecret: input.ForceOverwriteReplicaSecret }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.SecretBinary !== undefined &&
      input.SecretBinary !== null && { SecretBinary: context.base64Encoder(input.SecretBinary) }),
    ...(input.SecretString !== undefined && input.SecretString !== null && { SecretString: input.SecretString }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_json1_1TagListType(input.Tags, context) }),
  };
};

const serializeAws_json1_1DeleteResourcePolicyRequest = (
  input: DeleteResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
  };
};

const serializeAws_json1_1DeleteSecretRequest = (input: DeleteSecretRequest, context: __SerdeContext): any => {
  return {
    ...(input.ForceDeleteWithoutRecovery !== undefined &&
      input.ForceDeleteWithoutRecovery !== null && { ForceDeleteWithoutRecovery: input.ForceDeleteWithoutRecovery }),
    ...(input.RecoveryWindowInDays !== undefined &&
      input.RecoveryWindowInDays !== null && { RecoveryWindowInDays: input.RecoveryWindowInDays }),
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
  };
};

const serializeAws_json1_1DescribeSecretRequest = (input: DescribeSecretRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
  };
};

const serializeAws_json1_1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1FilterValuesStringList(input.Values, context) }),
  };
};

const serializeAws_json1_1FiltersListType = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Filter(entry, context);
    });
};

const serializeAws_json1_1FilterValuesStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GetRandomPasswordRequest = (
  input: GetRandomPasswordRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExcludeCharacters !== undefined &&
      input.ExcludeCharacters !== null && { ExcludeCharacters: input.ExcludeCharacters }),
    ...(input.ExcludeLowercase !== undefined &&
      input.ExcludeLowercase !== null && { ExcludeLowercase: input.ExcludeLowercase }),
    ...(input.ExcludeNumbers !== undefined &&
      input.ExcludeNumbers !== null && { ExcludeNumbers: input.ExcludeNumbers }),
    ...(input.ExcludePunctuation !== undefined &&
      input.ExcludePunctuation !== null && { ExcludePunctuation: input.ExcludePunctuation }),
    ...(input.ExcludeUppercase !== undefined &&
      input.ExcludeUppercase !== null && { ExcludeUppercase: input.ExcludeUppercase }),
    ...(input.IncludeSpace !== undefined && input.IncludeSpace !== null && { IncludeSpace: input.IncludeSpace }),
    ...(input.PasswordLength !== undefined &&
      input.PasswordLength !== null && { PasswordLength: input.PasswordLength }),
    ...(input.RequireEachIncludedType !== undefined &&
      input.RequireEachIncludedType !== null && { RequireEachIncludedType: input.RequireEachIncludedType }),
  };
};

const serializeAws_json1_1GetResourcePolicyRequest = (
  input: GetResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
  };
};

const serializeAws_json1_1GetSecretValueRequest = (input: GetSecretValueRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    ...(input.VersionId !== undefined && input.VersionId !== null && { VersionId: input.VersionId }),
    ...(input.VersionStage !== undefined && input.VersionStage !== null && { VersionStage: input.VersionStage }),
  };
};

const serializeAws_json1_1ListSecretsRequest = (input: ListSecretsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1FiltersListType(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1ListSecretVersionIdsRequest = (
  input: ListSecretVersionIdsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IncludeDeprecated !== undefined &&
      input.IncludeDeprecated !== null && { IncludeDeprecated: input.IncludeDeprecated }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
  };
};

const serializeAws_json1_1PutResourcePolicyRequest = (
  input: PutResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlockPublicPolicy !== undefined &&
      input.BlockPublicPolicy !== null && { BlockPublicPolicy: input.BlockPublicPolicy }),
    ...(input.ResourcePolicy !== undefined &&
      input.ResourcePolicy !== null && { ResourcePolicy: input.ResourcePolicy }),
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
  };
};

const serializeAws_json1_1PutSecretValueRequest = (input: PutSecretValueRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.SecretBinary !== undefined &&
      input.SecretBinary !== null && { SecretBinary: context.base64Encoder(input.SecretBinary) }),
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    ...(input.SecretString !== undefined && input.SecretString !== null && { SecretString: input.SecretString }),
    ...(input.VersionStages !== undefined &&
      input.VersionStages !== null && {
        VersionStages: serializeAws_json1_1SecretVersionStagesType(input.VersionStages, context),
      }),
  };
};

const serializeAws_json1_1RemoveRegionsFromReplicationRequest = (
  input: RemoveRegionsFromReplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RemoveReplicaRegions !== undefined &&
      input.RemoveReplicaRegions !== null && {
        RemoveReplicaRegions: serializeAws_json1_1RemoveReplicaRegionListType(input.RemoveReplicaRegions, context),
      }),
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
  };
};

const serializeAws_json1_1RemoveReplicaRegionListType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ReplicaRegionType = (input: ReplicaRegionType, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
  };
};

const serializeAws_json1_1ReplicateSecretToRegionsRequest = (
  input: ReplicateSecretToRegionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddReplicaRegions !== undefined &&
      input.AddReplicaRegions !== null && {
        AddReplicaRegions: serializeAws_json1_1AddReplicaRegionListType(input.AddReplicaRegions, context),
      }),
    ...(input.ForceOverwriteReplicaSecret !== undefined &&
      input.ForceOverwriteReplicaSecret !== null && { ForceOverwriteReplicaSecret: input.ForceOverwriteReplicaSecret }),
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
  };
};

const serializeAws_json1_1RestoreSecretRequest = (input: RestoreSecretRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
  };
};

const serializeAws_json1_1RotateSecretRequest = (input: RotateSecretRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.RotationLambdaARN !== undefined &&
      input.RotationLambdaARN !== null && { RotationLambdaARN: input.RotationLambdaARN }),
    ...(input.RotationRules !== undefined &&
      input.RotationRules !== null && {
        RotationRules: serializeAws_json1_1RotationRulesType(input.RotationRules, context),
      }),
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
  };
};

const serializeAws_json1_1RotationRulesType = (input: RotationRulesType, context: __SerdeContext): any => {
  return {
    ...(input.AutomaticallyAfterDays !== undefined &&
      input.AutomaticallyAfterDays !== null && { AutomaticallyAfterDays: input.AutomaticallyAfterDays }),
  };
};

const serializeAws_json1_1SecretVersionStagesType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1StopReplicationToReplicaRequest = (
  input: StopReplicationToReplicaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyListType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagListType = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_json1_1TagListType(input.Tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyListType(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateSecretRequest = (input: UpdateSecretRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.SecretBinary !== undefined &&
      input.SecretBinary !== null && { SecretBinary: context.base64Encoder(input.SecretBinary) }),
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    ...(input.SecretString !== undefined && input.SecretString !== null && { SecretString: input.SecretString }),
  };
};

const serializeAws_json1_1UpdateSecretVersionStageRequest = (
  input: UpdateSecretVersionStageRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MoveToVersionId !== undefined &&
      input.MoveToVersionId !== null && { MoveToVersionId: input.MoveToVersionId }),
    ...(input.RemoveFromVersionId !== undefined &&
      input.RemoveFromVersionId !== null && { RemoveFromVersionId: input.RemoveFromVersionId }),
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
    ...(input.VersionStage !== undefined && input.VersionStage !== null && { VersionStage: input.VersionStage }),
  };
};

const serializeAws_json1_1ValidateResourcePolicyRequest = (
  input: ValidateResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourcePolicy !== undefined &&
      input.ResourcePolicy !== null && { ResourcePolicy: input.ResourcePolicy }),
    ...(input.SecretId !== undefined && input.SecretId !== null && { SecretId: input.SecretId }),
  };
};

const deserializeAws_json1_1CancelRotateSecretResponse = (
  output: any,
  context: __SerdeContext
): CancelRotateSecretResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_json1_1CreateSecretResponse = (output: any, context: __SerdeContext): CreateSecretResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
    ReplicationStatus:
      output.ReplicationStatus !== undefined && output.ReplicationStatus !== null
        ? deserializeAws_json1_1ReplicationStatusListType(output.ReplicationStatus, context)
        : undefined,
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_json1_1DecryptionFailure = (output: any, context: __SerdeContext): DecryptionFailure => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DeleteResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteResourcePolicyResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1DeleteSecretResponse = (output: any, context: __SerdeContext): DeleteSecretResponse => {
  return {
    ARN: __expectString(output.ARN),
    DeletionDate:
      output.DeletionDate !== undefined && output.DeletionDate !== null
        ? new Date(Math.round(output.DeletionDate * 1000))
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1DescribeSecretResponse = (output: any, context: __SerdeContext): DescribeSecretResponse => {
  return {
    ARN: __expectString(output.ARN),
    CreatedDate:
      output.CreatedDate !== undefined && output.CreatedDate !== null
        ? new Date(Math.round(output.CreatedDate * 1000))
        : undefined,
    DeletedDate:
      output.DeletedDate !== undefined && output.DeletedDate !== null
        ? new Date(Math.round(output.DeletedDate * 1000))
        : undefined,
    Description: __expectString(output.Description),
    KmsKeyId: __expectString(output.KmsKeyId),
    LastAccessedDate:
      output.LastAccessedDate !== undefined && output.LastAccessedDate !== null
        ? new Date(Math.round(output.LastAccessedDate * 1000))
        : undefined,
    LastChangedDate:
      output.LastChangedDate !== undefined && output.LastChangedDate !== null
        ? new Date(Math.round(output.LastChangedDate * 1000))
        : undefined,
    LastRotatedDate:
      output.LastRotatedDate !== undefined && output.LastRotatedDate !== null
        ? new Date(Math.round(output.LastRotatedDate * 1000))
        : undefined,
    Name: __expectString(output.Name),
    OwningService: __expectString(output.OwningService),
    PrimaryRegion: __expectString(output.PrimaryRegion),
    ReplicationStatus:
      output.ReplicationStatus !== undefined && output.ReplicationStatus !== null
        ? deserializeAws_json1_1ReplicationStatusListType(output.ReplicationStatus, context)
        : undefined,
    RotationEnabled: __expectBoolean(output.RotationEnabled),
    RotationLambdaARN: __expectString(output.RotationLambdaARN),
    RotationRules:
      output.RotationRules !== undefined && output.RotationRules !== null
        ? deserializeAws_json1_1RotationRulesType(output.RotationRules, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagListType(output.Tags, context)
        : undefined,
    VersionIdsToStages:
      output.VersionIdsToStages !== undefined && output.VersionIdsToStages !== null
        ? deserializeAws_json1_1SecretVersionsToStagesMapType(output.VersionIdsToStages, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EncryptionFailure = (output: any, context: __SerdeContext): EncryptionFailure => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1GetRandomPasswordResponse = (
  output: any,
  context: __SerdeContext
): GetRandomPasswordResponse => {
  return {
    RandomPassword: __expectString(output.RandomPassword),
  } as any;
};

const deserializeAws_json1_1GetResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): GetResourcePolicyResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
    ResourcePolicy: __expectString(output.ResourcePolicy),
  } as any;
};

const deserializeAws_json1_1GetSecretValueResponse = (output: any, context: __SerdeContext): GetSecretValueResponse => {
  return {
    ARN: __expectString(output.ARN),
    CreatedDate:
      output.CreatedDate !== undefined && output.CreatedDate !== null
        ? new Date(Math.round(output.CreatedDate * 1000))
        : undefined,
    Name: __expectString(output.Name),
    SecretBinary:
      output.SecretBinary !== undefined && output.SecretBinary !== null
        ? context.base64Decoder(output.SecretBinary)
        : undefined,
    SecretString: __expectString(output.SecretString),
    VersionId: __expectString(output.VersionId),
    VersionStages:
      output.VersionStages !== undefined && output.VersionStages !== null
        ? deserializeAws_json1_1SecretVersionStagesType(output.VersionStages, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InternalServiceError = (output: any, context: __SerdeContext): InternalServiceError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1KmsKeyIdListType = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListSecretsResponse = (output: any, context: __SerdeContext): ListSecretsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SecretList:
      output.SecretList !== undefined && output.SecretList !== null
        ? deserializeAws_json1_1SecretListType(output.SecretList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListSecretVersionIdsResponse = (
  output: any,
  context: __SerdeContext
): ListSecretVersionIdsResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
    NextToken: __expectString(output.NextToken),
    Versions:
      output.Versions !== undefined && output.Versions !== null
        ? deserializeAws_json1_1SecretVersionsListType(output.Versions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PreconditionNotMetException = (
  output: any,
  context: __SerdeContext
): PreconditionNotMetException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PublicPolicyException = (output: any, context: __SerdeContext): PublicPolicyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PutResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutResourcePolicyResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1PutSecretValueResponse = (output: any, context: __SerdeContext): PutSecretValueResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
    VersionId: __expectString(output.VersionId),
    VersionStages:
      output.VersionStages !== undefined && output.VersionStages !== null
        ? deserializeAws_json1_1SecretVersionStagesType(output.VersionStages, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RemoveRegionsFromReplicationResponse = (
  output: any,
  context: __SerdeContext
): RemoveRegionsFromReplicationResponse => {
  return {
    ARN: __expectString(output.ARN),
    ReplicationStatus:
      output.ReplicationStatus !== undefined && output.ReplicationStatus !== null
        ? deserializeAws_json1_1ReplicationStatusListType(output.ReplicationStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ReplicateSecretToRegionsResponse = (
  output: any,
  context: __SerdeContext
): ReplicateSecretToRegionsResponse => {
  return {
    ARN: __expectString(output.ARN),
    ReplicationStatus:
      output.ReplicationStatus !== undefined && output.ReplicationStatus !== null
        ? deserializeAws_json1_1ReplicationStatusListType(output.ReplicationStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ReplicationStatusListType = (
  output: any,
  context: __SerdeContext
): ReplicationStatusType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReplicationStatusType(entry, context);
    });
};

const deserializeAws_json1_1ReplicationStatusType = (output: any, context: __SerdeContext): ReplicationStatusType => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    LastAccessedDate:
      output.LastAccessedDate !== undefined && output.LastAccessedDate !== null
        ? new Date(Math.round(output.LastAccessedDate * 1000))
        : undefined,
    Region: __expectString(output.Region),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_json1_1ResourceExistsException = (
  output: any,
  context: __SerdeContext
): ResourceExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1RestoreSecretResponse = (output: any, context: __SerdeContext): RestoreSecretResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1RotateSecretResponse = (output: any, context: __SerdeContext): RotateSecretResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_json1_1RotationRulesType = (output: any, context: __SerdeContext): RotationRulesType => {
  return {
    AutomaticallyAfterDays: __expectInt(output.AutomaticallyAfterDays),
  } as any;
};

const deserializeAws_json1_1SecretListEntry = (output: any, context: __SerdeContext): SecretListEntry => {
  return {
    ARN: __expectString(output.ARN),
    CreatedDate:
      output.CreatedDate !== undefined && output.CreatedDate !== null
        ? new Date(Math.round(output.CreatedDate * 1000))
        : undefined,
    DeletedDate:
      output.DeletedDate !== undefined && output.DeletedDate !== null
        ? new Date(Math.round(output.DeletedDate * 1000))
        : undefined,
    Description: __expectString(output.Description),
    KmsKeyId: __expectString(output.KmsKeyId),
    LastAccessedDate:
      output.LastAccessedDate !== undefined && output.LastAccessedDate !== null
        ? new Date(Math.round(output.LastAccessedDate * 1000))
        : undefined,
    LastChangedDate:
      output.LastChangedDate !== undefined && output.LastChangedDate !== null
        ? new Date(Math.round(output.LastChangedDate * 1000))
        : undefined,
    LastRotatedDate:
      output.LastRotatedDate !== undefined && output.LastRotatedDate !== null
        ? new Date(Math.round(output.LastRotatedDate * 1000))
        : undefined,
    Name: __expectString(output.Name),
    OwningService: __expectString(output.OwningService),
    PrimaryRegion: __expectString(output.PrimaryRegion),
    RotationEnabled: __expectBoolean(output.RotationEnabled),
    RotationLambdaARN: __expectString(output.RotationLambdaARN),
    RotationRules:
      output.RotationRules !== undefined && output.RotationRules !== null
        ? deserializeAws_json1_1RotationRulesType(output.RotationRules, context)
        : undefined,
    SecretVersionsToStages:
      output.SecretVersionsToStages !== undefined && output.SecretVersionsToStages !== null
        ? deserializeAws_json1_1SecretVersionsToStagesMapType(output.SecretVersionsToStages, context)
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagListType(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SecretListType = (output: any, context: __SerdeContext): SecretListEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SecretListEntry(entry, context);
    });
};

const deserializeAws_json1_1SecretVersionsListEntry = (
  output: any,
  context: __SerdeContext
): SecretVersionsListEntry => {
  return {
    CreatedDate:
      output.CreatedDate !== undefined && output.CreatedDate !== null
        ? new Date(Math.round(output.CreatedDate * 1000))
        : undefined,
    KmsKeyIds:
      output.KmsKeyIds !== undefined && output.KmsKeyIds !== null
        ? deserializeAws_json1_1KmsKeyIdListType(output.KmsKeyIds, context)
        : undefined,
    LastAccessedDate:
      output.LastAccessedDate !== undefined && output.LastAccessedDate !== null
        ? new Date(Math.round(output.LastAccessedDate * 1000))
        : undefined,
    VersionId: __expectString(output.VersionId),
    VersionStages:
      output.VersionStages !== undefined && output.VersionStages !== null
        ? deserializeAws_json1_1SecretVersionStagesType(output.VersionStages, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SecretVersionsListType = (
  output: any,
  context: __SerdeContext
): SecretVersionsListEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SecretVersionsListEntry(entry, context);
    });
};

const deserializeAws_json1_1SecretVersionStagesType = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1SecretVersionsToStagesMapType = (
  output: any,
  context: __SerdeContext
): { [key: string]: string[] } => {
  return Object.entries(output).reduce((acc: { [key: string]: string[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1SecretVersionStagesType(value, context),
    };
  }, {});
};

const deserializeAws_json1_1StopReplicationToReplicaResponse = (
  output: any,
  context: __SerdeContext
): StopReplicationToReplicaResponse => {
  return {
    ARN: __expectString(output.ARN),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagListType = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1UpdateSecretResponse = (output: any, context: __SerdeContext): UpdateSecretResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_json1_1UpdateSecretVersionStageResponse = (
  output: any,
  context: __SerdeContext
): UpdateSecretVersionStageResponse => {
  return {
    ARN: __expectString(output.ARN),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1ValidateResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): ValidateResourcePolicyResponse => {
  return {
    PolicyValidationPassed: __expectBoolean(output.PolicyValidationPassed),
    ValidationErrors:
      output.ValidationErrors !== undefined && output.ValidationErrors !== null
        ? deserializeAws_json1_1ValidationErrorsType(output.ValidationErrors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ValidationErrorsEntry = (output: any, context: __SerdeContext): ValidationErrorsEntry => {
  return {
    CheckName: __expectString(output.CheckName),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

const deserializeAws_json1_1ValidationErrorsType = (output: any, context: __SerdeContext): ValidationErrorsEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ValidationErrorsEntry(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
