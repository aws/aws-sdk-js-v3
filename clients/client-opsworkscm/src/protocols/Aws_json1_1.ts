// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
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

import { AssociateNodeCommandInput, AssociateNodeCommandOutput } from "../commands/AssociateNodeCommand";
import { CreateBackupCommandInput, CreateBackupCommandOutput } from "../commands/CreateBackupCommand";
import { CreateServerCommandInput, CreateServerCommandOutput } from "../commands/CreateServerCommand";
import { DeleteBackupCommandInput, DeleteBackupCommandOutput } from "../commands/DeleteBackupCommand";
import { DeleteServerCommandInput, DeleteServerCommandOutput } from "../commands/DeleteServerCommand";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "../commands/DescribeAccountAttributesCommand";
import { DescribeBackupsCommandInput, DescribeBackupsCommandOutput } from "../commands/DescribeBackupsCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "../commands/DescribeEventsCommand";
import {
  DescribeNodeAssociationStatusCommandInput,
  DescribeNodeAssociationStatusCommandOutput,
} from "../commands/DescribeNodeAssociationStatusCommand";
import { DescribeServersCommandInput, DescribeServersCommandOutput } from "../commands/DescribeServersCommand";
import { DisassociateNodeCommandInput, DisassociateNodeCommandOutput } from "../commands/DisassociateNodeCommand";
import {
  ExportServerEngineAttributeCommandInput,
  ExportServerEngineAttributeCommandOutput,
} from "../commands/ExportServerEngineAttributeCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { RestoreServerCommandInput, RestoreServerCommandOutput } from "../commands/RestoreServerCommand";
import { StartMaintenanceCommandInput, StartMaintenanceCommandOutput } from "../commands/StartMaintenanceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateServerCommandInput, UpdateServerCommandOutput } from "../commands/UpdateServerCommand";
import {
  UpdateServerEngineAttributesCommandInput,
  UpdateServerEngineAttributesCommandOutput,
} from "../commands/UpdateServerEngineAttributesCommand";
import {
  AccountAttribute,
  AssociateNodeRequest,
  AssociateNodeResponse,
  Backup,
  CreateBackupRequest,
  CreateBackupResponse,
  CreateServerRequest,
  CreateServerResponse,
  DeleteBackupRequest,
  DeleteBackupResponse,
  DeleteServerRequest,
  DeleteServerResponse,
  DescribeAccountAttributesRequest,
  DescribeAccountAttributesResponse,
  DescribeBackupsRequest,
  DescribeBackupsResponse,
  DescribeEventsRequest,
  DescribeEventsResponse,
  DescribeNodeAssociationStatusRequest,
  DescribeNodeAssociationStatusResponse,
  DescribeServersRequest,
  DescribeServersResponse,
  DisassociateNodeRequest,
  DisassociateNodeResponse,
  EngineAttribute,
  ExportServerEngineAttributeRequest,
  ExportServerEngineAttributeResponse,
  InvalidNextTokenException,
  InvalidStateException,
  LimitExceededException,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  RestoreServerRequest,
  RestoreServerResponse,
  Server,
  ServerEvent,
  StartMaintenanceRequest,
  StartMaintenanceResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateServerEngineAttributesRequest,
  UpdateServerEngineAttributesResponse,
  UpdateServerRequest,
  UpdateServerResponse,
  ValidationException,
} from "../models/models_0";
import { OpsWorksCMServiceException as __BaseException } from "../models/OpsWorksCMServiceException";

/**
 * serializeAws_json1_1AssociateNodeCommand
 */
export const se_AssociateNodeCommand = async (
  input: AssociateNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateNode");
  let body: any;
  body = JSON.stringify(se_AssociateNodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBackupCommand
 */
export const se_CreateBackupCommand = async (
  input: CreateBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBackup");
  let body: any;
  body = JSON.stringify(se_CreateBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateServerCommand
 */
export const se_CreateServerCommand = async (
  input: CreateServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateServer");
  let body: any;
  body = JSON.stringify(se_CreateServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBackupCommand
 */
export const se_DeleteBackupCommand = async (
  input: DeleteBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBackup");
  let body: any;
  body = JSON.stringify(se_DeleteBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteServerCommand
 */
export const se_DeleteServerCommand = async (
  input: DeleteServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteServer");
  let body: any;
  body = JSON.stringify(se_DeleteServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAccountAttributesCommand
 */
export const se_DescribeAccountAttributesCommand = async (
  input: DescribeAccountAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAccountAttributes");
  let body: any;
  body = JSON.stringify(se_DescribeAccountAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBackupsCommand
 */
export const se_DescribeBackupsCommand = async (
  input: DescribeBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBackups");
  let body: any;
  body = JSON.stringify(se_DescribeBackupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventsCommand
 */
export const se_DescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEvents");
  let body: any;
  body = JSON.stringify(se_DescribeEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeNodeAssociationStatusCommand
 */
export const se_DescribeNodeAssociationStatusCommand = async (
  input: DescribeNodeAssociationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeNodeAssociationStatus");
  let body: any;
  body = JSON.stringify(se_DescribeNodeAssociationStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeServersCommand
 */
export const se_DescribeServersCommand = async (
  input: DescribeServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeServers");
  let body: any;
  body = JSON.stringify(se_DescribeServersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateNodeCommand
 */
export const se_DisassociateNodeCommand = async (
  input: DisassociateNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateNode");
  let body: any;
  body = JSON.stringify(se_DisassociateNodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ExportServerEngineAttributeCommand
 */
export const se_ExportServerEngineAttributeCommand = async (
  input: ExportServerEngineAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ExportServerEngineAttribute");
  let body: any;
  body = JSON.stringify(se_ExportServerEngineAttributeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreServerCommand
 */
export const se_RestoreServerCommand = async (
  input: RestoreServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreServer");
  let body: any;
  body = JSON.stringify(se_RestoreServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartMaintenanceCommand
 */
export const se_StartMaintenanceCommand = async (
  input: StartMaintenanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartMaintenance");
  let body: any;
  body = JSON.stringify(se_StartMaintenanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
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
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateServerCommand
 */
export const se_UpdateServerCommand = async (
  input: UpdateServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateServer");
  let body: any;
  body = JSON.stringify(se_UpdateServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateServerEngineAttributesCommand
 */
export const se_UpdateServerEngineAttributesCommand = async (
  input: UpdateServerEngineAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateServerEngineAttributes");
  let body: any;
  body = JSON.stringify(se_UpdateServerEngineAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateNodeCommand
 */
export const de_AssociateNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateNodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateNodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateNodeResponse(data, context);
  const response: AssociateNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateNodeCommandError
 */
const de_AssociateNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateBackupCommand
 */
export const de_CreateBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBackupResponse(data, context);
  const response: CreateBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateBackupCommandError
 */
const de_CreateBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opsworkscm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateServerCommand
 */
export const de_CreateServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateServerResponse(data, context);
  const response: CreateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateServerCommandError
 */
const de_CreateServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.opsworkscm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.opsworkscm#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteBackupCommand
 */
export const de_DeleteBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteBackupResponse(data, context);
  const response: DeleteBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteBackupCommandError
 */
const de_DeleteBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteServerCommand
 */
export const de_DeleteServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteServerResponse(data, context);
  const response: DeleteServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteServerCommandError
 */
const de_DeleteServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAccountAttributesCommand
 */
export const de_DescribeAccountAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccountAttributesResponse(data, context);
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAccountAttributesCommandError
 */
const de_DescribeAccountAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeBackupsCommand
 */
export const de_DescribeBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBackupsResponse(data, context);
  const response: DescribeBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeBackupsCommandError
 */
const de_DescribeBackupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.opsworkscm#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEventsCommand
 */
export const de_DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventsResponse(data, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEventsCommandError
 */
const de_DescribeEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.opsworkscm#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeNodeAssociationStatusCommand
 */
export const de_DescribeNodeAssociationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeAssociationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeNodeAssociationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeNodeAssociationStatusResponse(data, context);
  const response: DescribeNodeAssociationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeNodeAssociationStatusCommandError
 */
const de_DescribeNodeAssociationStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeAssociationStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeServersCommand
 */
export const de_DescribeServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeServersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeServersResponse(data, context);
  const response: DescribeServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeServersCommandError
 */
const de_DescribeServersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.opsworkscm#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisassociateNodeCommand
 */
export const de_DisassociateNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateNodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateNodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateNodeResponse(data, context);
  const response: DisassociateNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateNodeCommandError
 */
const de_DisassociateNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ExportServerEngineAttributeCommand
 */
export const de_ExportServerEngineAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportServerEngineAttributeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ExportServerEngineAttributeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ExportServerEngineAttributeResponse(data, context);
  const response: ExportServerEngineAttributeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ExportServerEngineAttributeCommandError
 */
const de_ExportServerEngineAttributeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportServerEngineAttributeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RestoreServerCommand
 */
export const de_RestoreServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreServerResponse(data, context);
  const response: RestoreServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RestoreServerCommandError
 */
const de_RestoreServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartMaintenanceCommand
 */
export const de_StartMaintenanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMaintenanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartMaintenanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartMaintenanceResponse(data, context);
  const response: StartMaintenanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartMaintenanceCommandError
 */
const de_StartMaintenanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMaintenanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
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
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
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
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateServerCommand
 */
export const de_UpdateServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServerResponse(data, context);
  const response: UpdateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateServerCommandError
 */
const de_UpdateServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateServerEngineAttributesCommand
 */
export const de_UpdateServerEngineAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerEngineAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServerEngineAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServerEngineAttributesResponse(data, context);
  const response: UpdateServerEngineAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateServerEngineAttributesCommandError
 */
const de_UpdateServerEngineAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerEngineAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1InvalidStateExceptionRes
 */
const de_InvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidStateException(body, context);
  const exception = new InvalidStateException({
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
 * deserializeAws_json1_1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
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
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AssociateNodeRequest
 */
const se_AssociateNodeRequest = (input: AssociateNodeRequest, context: __SerdeContext): any => {
  return {
    ...(input.EngineAttributes != null && { EngineAttributes: se_EngineAttributes(input.EngineAttributes, context) }),
    ...(input.NodeName != null && { NodeName: input.NodeName }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
  };
};

/**
 * serializeAws_json1_1CreateBackupRequest
 */
const se_CreateBackupRequest = (input: CreateBackupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateServerRequest
 */
const se_CreateServerRequest = (input: CreateServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssociatePublicIpAddress != null && { AssociatePublicIpAddress: input.AssociatePublicIpAddress }),
    ...(input.BackupId != null && { BackupId: input.BackupId }),
    ...(input.BackupRetentionCount != null && { BackupRetentionCount: input.BackupRetentionCount }),
    ...(input.CustomCertificate != null && { CustomCertificate: input.CustomCertificate }),
    ...(input.CustomDomain != null && { CustomDomain: input.CustomDomain }),
    ...(input.CustomPrivateKey != null && { CustomPrivateKey: input.CustomPrivateKey }),
    ...(input.DisableAutomatedBackup != null && { DisableAutomatedBackup: input.DisableAutomatedBackup }),
    ...(input.Engine != null && { Engine: input.Engine }),
    ...(input.EngineAttributes != null && { EngineAttributes: se_EngineAttributes(input.EngineAttributes, context) }),
    ...(input.EngineModel != null && { EngineModel: input.EngineModel }),
    ...(input.EngineVersion != null && { EngineVersion: input.EngineVersion }),
    ...(input.InstanceProfileArn != null && { InstanceProfileArn: input.InstanceProfileArn }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.KeyPair != null && { KeyPair: input.KeyPair }),
    ...(input.PreferredBackupWindow != null && { PreferredBackupWindow: input.PreferredBackupWindow }),
    ...(input.PreferredMaintenanceWindow != null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
    ...(input.SecurityGroupIds != null && { SecurityGroupIds: se_Strings(input.SecurityGroupIds, context) }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.ServiceRoleArn != null && { ServiceRoleArn: input.ServiceRoleArn }),
    ...(input.SubnetIds != null && { SubnetIds: se_Strings(input.SubnetIds, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteBackupRequest
 */
const se_DeleteBackupRequest = (input: DeleteBackupRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupId != null && { BackupId: input.BackupId }),
  };
};

/**
 * serializeAws_json1_1DeleteServerRequest
 */
const se_DeleteServerRequest = (input: DeleteServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerName != null && { ServerName: input.ServerName }),
  };
};

/**
 * serializeAws_json1_1DescribeAccountAttributesRequest
 */
const se_DescribeAccountAttributesRequest = (input: DescribeAccountAttributesRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1DescribeBackupsRequest
 */
const se_DescribeBackupsRequest = (input: DescribeBackupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupId != null && { BackupId: input.BackupId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
  };
};

/**
 * serializeAws_json1_1DescribeEventsRequest
 */
const se_DescribeEventsRequest = (input: DescribeEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
  };
};

/**
 * serializeAws_json1_1DescribeNodeAssociationStatusRequest
 */
const se_DescribeNodeAssociationStatusRequest = (
  input: DescribeNodeAssociationStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NodeAssociationStatusToken != null && { NodeAssociationStatusToken: input.NodeAssociationStatusToken }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
  };
};

/**
 * serializeAws_json1_1DescribeServersRequest
 */
const se_DescribeServersRequest = (input: DescribeServersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
  };
};

/**
 * serializeAws_json1_1DisassociateNodeRequest
 */
const se_DisassociateNodeRequest = (input: DisassociateNodeRequest, context: __SerdeContext): any => {
  return {
    ...(input.EngineAttributes != null && { EngineAttributes: se_EngineAttributes(input.EngineAttributes, context) }),
    ...(input.NodeName != null && { NodeName: input.NodeName }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
  };
};

/**
 * serializeAws_json1_1EngineAttribute
 */
const se_EngineAttribute = (input: EngineAttribute, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1EngineAttributes
 */
const se_EngineAttributes = (input: EngineAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EngineAttribute(entry, context);
    });
};

/**
 * serializeAws_json1_1ExportServerEngineAttributeRequest
 */
const se_ExportServerEngineAttributeRequest = (
  input: ExportServerEngineAttributeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExportAttributeName != null && { ExportAttributeName: input.ExportAttributeName }),
    ...(input.InputAttributes != null && { InputAttributes: se_EngineAttributes(input.InputAttributes, context) }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1RestoreServerRequest
 */
const se_RestoreServerRequest = (input: RestoreServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupId != null && { BackupId: input.BackupId }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.KeyPair != null && { KeyPair: input.KeyPair }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
  };
};

/**
 * serializeAws_json1_1StartMaintenanceRequest
 */
const se_StartMaintenanceRequest = (input: StartMaintenanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.EngineAttributes != null && { EngineAttributes: se_EngineAttributes(input.EngineAttributes, context) }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
  };
};

/**
 * serializeAws_json1_1Strings
 */
const se_Strings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
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
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
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
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateServerEngineAttributesRequest
 */
const se_UpdateServerEngineAttributesRequest = (
  input: UpdateServerEngineAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.AttributeValue != null && { AttributeValue: input.AttributeValue }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
  };
};

/**
 * serializeAws_json1_1UpdateServerRequest
 */
const se_UpdateServerRequest = (input: UpdateServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupRetentionCount != null && { BackupRetentionCount: input.BackupRetentionCount }),
    ...(input.DisableAutomatedBackup != null && { DisableAutomatedBackup: input.DisableAutomatedBackup }),
    ...(input.PreferredBackupWindow != null && { PreferredBackupWindow: input.PreferredBackupWindow }),
    ...(input.PreferredMaintenanceWindow != null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
  };
};

/**
 * deserializeAws_json1_1AccountAttribute
 */
const de_AccountAttribute = (output: any, context: __SerdeContext): AccountAttribute => {
  return {
    Maximum: __expectInt32(output.Maximum),
    Name: __expectString(output.Name),
    Used: __expectInt32(output.Used),
  } as any;
};

/**
 * deserializeAws_json1_1AccountAttributes
 */
const de_AccountAttributes = (output: any, context: __SerdeContext): AccountAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccountAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociateNodeResponse
 */
const de_AssociateNodeResponse = (output: any, context: __SerdeContext): AssociateNodeResponse => {
  return {
    NodeAssociationStatusToken: __expectString(output.NodeAssociationStatusToken),
  } as any;
};

/**
 * deserializeAws_json1_1Backup
 */
const de_Backup = (output: any, context: __SerdeContext): Backup => {
  return {
    BackupArn: __expectString(output.BackupArn),
    BackupId: __expectString(output.BackupId),
    BackupType: __expectString(output.BackupType),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    Description: __expectString(output.Description),
    Engine: __expectString(output.Engine),
    EngineModel: __expectString(output.EngineModel),
    EngineVersion: __expectString(output.EngineVersion),
    InstanceProfileArn: __expectString(output.InstanceProfileArn),
    InstanceType: __expectString(output.InstanceType),
    KeyPair: __expectString(output.KeyPair),
    PreferredBackupWindow: __expectString(output.PreferredBackupWindow),
    PreferredMaintenanceWindow: __expectString(output.PreferredMaintenanceWindow),
    S3DataSize: __expectInt32(output.S3DataSize),
    S3DataUrl: __expectString(output.S3DataUrl),
    S3LogUrl: __expectString(output.S3LogUrl),
    SecurityGroupIds: output.SecurityGroupIds != null ? de_Strings(output.SecurityGroupIds, context) : undefined,
    ServerName: __expectString(output.ServerName),
    ServiceRoleArn: __expectString(output.ServiceRoleArn),
    Status: __expectString(output.Status),
    StatusDescription: __expectString(output.StatusDescription),
    SubnetIds: output.SubnetIds != null ? de_Strings(output.SubnetIds, context) : undefined,
    ToolsVersion: __expectString(output.ToolsVersion),
    UserArn: __expectString(output.UserArn),
  } as any;
};

/**
 * deserializeAws_json1_1Backups
 */
const de_Backups = (output: any, context: __SerdeContext): Backup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Backup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateBackupResponse
 */
const de_CreateBackupResponse = (output: any, context: __SerdeContext): CreateBackupResponse => {
  return {
    Backup: output.Backup != null ? de_Backup(output.Backup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateServerResponse
 */
const de_CreateServerResponse = (output: any, context: __SerdeContext): CreateServerResponse => {
  return {
    Server: output.Server != null ? de_Server(output.Server, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteBackupResponse
 */
const de_DeleteBackupResponse = (output: any, context: __SerdeContext): DeleteBackupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteServerResponse
 */
const de_DeleteServerResponse = (output: any, context: __SerdeContext): DeleteServerResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeAccountAttributesResponse
 */
const de_DescribeAccountAttributesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAccountAttributesResponse => {
  return {
    Attributes: output.Attributes != null ? de_AccountAttributes(output.Attributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeBackupsResponse
 */
const de_DescribeBackupsResponse = (output: any, context: __SerdeContext): DescribeBackupsResponse => {
  return {
    Backups: output.Backups != null ? de_Backups(output.Backups, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventsResponse
 */
const de_DescribeEventsResponse = (output: any, context: __SerdeContext): DescribeEventsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ServerEvents: output.ServerEvents != null ? de_ServerEvents(output.ServerEvents, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeNodeAssociationStatusResponse
 */
const de_DescribeNodeAssociationStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeNodeAssociationStatusResponse => {
  return {
    EngineAttributes:
      output.EngineAttributes != null ? de_EngineAttributes(output.EngineAttributes, context) : undefined,
    NodeAssociationStatus: __expectString(output.NodeAssociationStatus),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeServersResponse
 */
const de_DescribeServersResponse = (output: any, context: __SerdeContext): DescribeServersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Servers: output.Servers != null ? de_Servers(output.Servers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateNodeResponse
 */
const de_DisassociateNodeResponse = (output: any, context: __SerdeContext): DisassociateNodeResponse => {
  return {
    NodeAssociationStatusToken: __expectString(output.NodeAssociationStatusToken),
  } as any;
};

/**
 * deserializeAws_json1_1EngineAttribute
 */
const de_EngineAttribute = (output: any, context: __SerdeContext): EngineAttribute => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1EngineAttributes
 */
const de_EngineAttributes = (output: any, context: __SerdeContext): EngineAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EngineAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExportServerEngineAttributeResponse
 */
const de_ExportServerEngineAttributeResponse = (
  output: any,
  context: __SerdeContext
): ExportServerEngineAttributeResponse => {
  return {
    EngineAttribute: output.EngineAttribute != null ? de_EngineAttribute(output.EngineAttribute, context) : undefined,
    ServerName: __expectString(output.ServerName),
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
 * deserializeAws_json1_1InvalidStateException
 */
const de_InvalidStateException = (output: any, context: __SerdeContext): InvalidStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
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
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsException
 */
const de_ResourceAlreadyExistsException = (output: any, context: __SerdeContext): ResourceAlreadyExistsException => {
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
 * deserializeAws_json1_1RestoreServerResponse
 */
const de_RestoreServerResponse = (output: any, context: __SerdeContext): RestoreServerResponse => {
  return {
    Server: output.Server != null ? de_Server(output.Server, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Server
 */
const de_Server = (output: any, context: __SerdeContext): Server => {
  return {
    AssociatePublicIpAddress: __expectBoolean(output.AssociatePublicIpAddress),
    BackupRetentionCount: __expectInt32(output.BackupRetentionCount),
    CloudFormationStackArn: __expectString(output.CloudFormationStackArn),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    CustomDomain: __expectString(output.CustomDomain),
    DisableAutomatedBackup: __expectBoolean(output.DisableAutomatedBackup),
    Endpoint: __expectString(output.Endpoint),
    Engine: __expectString(output.Engine),
    EngineAttributes:
      output.EngineAttributes != null ? de_EngineAttributes(output.EngineAttributes, context) : undefined,
    EngineModel: __expectString(output.EngineModel),
    EngineVersion: __expectString(output.EngineVersion),
    InstanceProfileArn: __expectString(output.InstanceProfileArn),
    InstanceType: __expectString(output.InstanceType),
    KeyPair: __expectString(output.KeyPair),
    MaintenanceStatus: __expectString(output.MaintenanceStatus),
    PreferredBackupWindow: __expectString(output.PreferredBackupWindow),
    PreferredMaintenanceWindow: __expectString(output.PreferredMaintenanceWindow),
    SecurityGroupIds: output.SecurityGroupIds != null ? de_Strings(output.SecurityGroupIds, context) : undefined,
    ServerArn: __expectString(output.ServerArn),
    ServerName: __expectString(output.ServerName),
    ServiceRoleArn: __expectString(output.ServiceRoleArn),
    Status: __expectString(output.Status),
    StatusReason: __expectString(output.StatusReason),
    SubnetIds: output.SubnetIds != null ? de_Strings(output.SubnetIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ServerEvent
 */
const de_ServerEvent = (output: any, context: __SerdeContext): ServerEvent => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    LogUrl: __expectString(output.LogUrl),
    Message: __expectString(output.Message),
    ServerName: __expectString(output.ServerName),
  } as any;
};

/**
 * deserializeAws_json1_1ServerEvents
 */
const de_ServerEvents = (output: any, context: __SerdeContext): ServerEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServerEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Servers
 */
const de_Servers = (output: any, context: __SerdeContext): Server[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Server(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartMaintenanceResponse
 */
const de_StartMaintenanceResponse = (output: any, context: __SerdeContext): StartMaintenanceResponse => {
  return {
    Server: output.Server != null ? de_Server(output.Server, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Strings
 */
const de_Strings = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
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
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateServerEngineAttributesResponse
 */
const de_UpdateServerEngineAttributesResponse = (
  output: any,
  context: __SerdeContext
): UpdateServerEngineAttributesResponse => {
  return {
    Server: output.Server != null ? de_Server(output.Server, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateServerResponse
 */
const de_UpdateServerResponse = (output: any, context: __SerdeContext): UpdateServerResponse => {
  return {
    Server: output.Server != null ? de_Server(output.Server, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `OpsWorksCM_V2016_11_01.${operation}`,
  };
}

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
