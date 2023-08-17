// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
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
  AssociateNodeRequest,
  Backup,
  CreateBackupRequest,
  CreateBackupResponse,
  CreateServerRequest,
  CreateServerResponse,
  DeleteBackupRequest,
  DeleteServerRequest,
  DescribeAccountAttributesRequest,
  DescribeBackupsRequest,
  DescribeBackupsResponse,
  DescribeEventsRequest,
  DescribeEventsResponse,
  DescribeNodeAssociationStatusRequest,
  DescribeServersRequest,
  DescribeServersResponse,
  DisassociateNodeRequest,
  EngineAttribute,
  ExportServerEngineAttributeRequest,
  InvalidNextTokenException,
  InvalidStateException,
  LimitExceededException,
  ListTagsForResourceRequest,
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
  UntagResourceRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: AssociateNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeNodeAssociationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ExportServerEngineAttributeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AssociateNodeRequest omitted.

// se_CreateBackupRequest omitted.

// se_CreateServerRequest omitted.

// se_DeleteBackupRequest omitted.

// se_DeleteServerRequest omitted.

// se_DescribeAccountAttributesRequest omitted.

// se_DescribeBackupsRequest omitted.

// se_DescribeEventsRequest omitted.

// se_DescribeNodeAssociationStatusRequest omitted.

// se_DescribeServersRequest omitted.

// se_DisassociateNodeRequest omitted.

// se_EngineAttribute omitted.

// se_EngineAttributes omitted.

// se_ExportServerEngineAttributeRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_RestoreServerRequest omitted.

// se_StartMaintenanceRequest omitted.

// se_Strings omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateServerEngineAttributesRequest omitted.

// se_UpdateServerRequest omitted.

// de_AccountAttribute omitted.

// de_AccountAttributes omitted.

// de_AssociateNodeResponse omitted.

/**
 * deserializeAws_json1_1Backup
 */
const de_Backup = (output: any, context: __SerdeContext): Backup => {
  return take(output, {
    BackupArn: __expectString,
    BackupId: __expectString,
    BackupType: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Engine: __expectString,
    EngineModel: __expectString,
    EngineVersion: __expectString,
    InstanceProfileArn: __expectString,
    InstanceType: __expectString,
    KeyPair: __expectString,
    PreferredBackupWindow: __expectString,
    PreferredMaintenanceWindow: __expectString,
    S3DataSize: __expectInt32,
    S3DataUrl: __expectString,
    S3LogUrl: __expectString,
    SecurityGroupIds: _json,
    ServerName: __expectString,
    ServiceRoleArn: __expectString,
    Status: __expectString,
    StatusDescription: __expectString,
    SubnetIds: _json,
    ToolsVersion: __expectString,
    UserArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Backups
 */
const de_Backups = (output: any, context: __SerdeContext): Backup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Backup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateBackupResponse
 */
const de_CreateBackupResponse = (output: any, context: __SerdeContext): CreateBackupResponse => {
  return take(output, {
    Backup: (_: any) => de_Backup(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateServerResponse
 */
const de_CreateServerResponse = (output: any, context: __SerdeContext): CreateServerResponse => {
  return take(output, {
    Server: (_: any) => de_Server(_, context),
  }) as any;
};

// de_DeleteBackupResponse omitted.

// de_DeleteServerResponse omitted.

// de_DescribeAccountAttributesResponse omitted.

/**
 * deserializeAws_json1_1DescribeBackupsResponse
 */
const de_DescribeBackupsResponse = (output: any, context: __SerdeContext): DescribeBackupsResponse => {
  return take(output, {
    Backups: (_: any) => de_Backups(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEventsResponse
 */
const de_DescribeEventsResponse = (output: any, context: __SerdeContext): DescribeEventsResponse => {
  return take(output, {
    NextToken: __expectString,
    ServerEvents: (_: any) => de_ServerEvents(_, context),
  }) as any;
};

// de_DescribeNodeAssociationStatusResponse omitted.

/**
 * deserializeAws_json1_1DescribeServersResponse
 */
const de_DescribeServersResponse = (output: any, context: __SerdeContext): DescribeServersResponse => {
  return take(output, {
    NextToken: __expectString,
    Servers: (_: any) => de_Servers(_, context),
  }) as any;
};

// de_DisassociateNodeResponse omitted.

// de_EngineAttribute omitted.

// de_EngineAttributes omitted.

// de_ExportServerEngineAttributeResponse omitted.

// de_InvalidNextTokenException omitted.

// de_InvalidStateException omitted.

// de_LimitExceededException omitted.

// de_ListTagsForResourceResponse omitted.

// de_ResourceAlreadyExistsException omitted.

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_1RestoreServerResponse
 */
const de_RestoreServerResponse = (output: any, context: __SerdeContext): RestoreServerResponse => {
  return take(output, {
    Server: (_: any) => de_Server(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Server
 */
const de_Server = (output: any, context: __SerdeContext): Server => {
  return take(output, {
    AssociatePublicIpAddress: __expectBoolean,
    BackupRetentionCount: __expectInt32,
    CloudFormationStackArn: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomDomain: __expectString,
    DisableAutomatedBackup: __expectBoolean,
    Endpoint: __expectString,
    Engine: __expectString,
    EngineAttributes: _json,
    EngineModel: __expectString,
    EngineVersion: __expectString,
    InstanceProfileArn: __expectString,
    InstanceType: __expectString,
    KeyPair: __expectString,
    MaintenanceStatus: __expectString,
    PreferredBackupWindow: __expectString,
    PreferredMaintenanceWindow: __expectString,
    SecurityGroupIds: _json,
    ServerArn: __expectString,
    ServerName: __expectString,
    ServiceRoleArn: __expectString,
    Status: __expectString,
    StatusReason: __expectString,
    SubnetIds: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ServerEvent
 */
const de_ServerEvent = (output: any, context: __SerdeContext): ServerEvent => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogUrl: __expectString,
    Message: __expectString,
    ServerName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ServerEvents
 */
const de_ServerEvents = (output: any, context: __SerdeContext): ServerEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_Server(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartMaintenanceResponse
 */
const de_StartMaintenanceResponse = (output: any, context: __SerdeContext): StartMaintenanceResponse => {
  return take(output, {
    Server: (_: any) => de_Server(_, context),
  }) as any;
};

// de_Strings omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_1UpdateServerEngineAttributesResponse
 */
const de_UpdateServerEngineAttributesResponse = (
  output: any,
  context: __SerdeContext
): UpdateServerEngineAttributesResponse => {
  return take(output, {
    Server: (_: any) => de_Server(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateServerResponse
 */
const de_UpdateServerResponse = (output: any, context: __SerdeContext): UpdateServerResponse => {
  return take(output, {
    Server: (_: any) => de_Server(_, context),
  }) as any;
};

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
