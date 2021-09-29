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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1AssociateNodeCommand = async (
  input: AssociateNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.AssociateNode",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateNodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBackupCommand = async (
  input: CreateBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.CreateBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateServerCommand = async (
  input: CreateServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.CreateServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBackupCommand = async (
  input: DeleteBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.DeleteBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteServerCommand = async (
  input: DeleteServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.DeleteServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAccountAttributesCommand = async (
  input: DescribeAccountAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.DescribeAccountAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAccountAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBackupsCommand = async (
  input: DescribeBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.DescribeBackups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBackupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventsCommand = async (
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.DescribeEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeNodeAssociationStatusCommand = async (
  input: DescribeNodeAssociationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeNodeAssociationStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeServersCommand = async (
  input: DescribeServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.DescribeServers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeServersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateNodeCommand = async (
  input: DisassociateNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.DisassociateNode",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateNodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ExportServerEngineAttributeCommand = async (
  input: ExportServerEngineAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.ExportServerEngineAttribute",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ExportServerEngineAttributeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RestoreServerCommand = async (
  input: RestoreServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.RestoreServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RestoreServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartMaintenanceCommand = async (
  input: StartMaintenanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.StartMaintenance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartMaintenanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.TagResource",
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
    "x-amz-target": "OpsWorksCM_V2016_11_01.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateServerCommand = async (
  input: UpdateServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.UpdateServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateServerEngineAttributesCommand = async (
  input: UpdateServerEngineAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateServerEngineAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateNodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateNodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateNodeResponse(data, context);
  const response: AssociateNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBackupResponse(data, context);
  const response: CreateBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.opsworkscm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateServerResponse(data, context);
  const response: CreateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.opsworkscm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.opsworkscm#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBackupResponse(data, context);
  const response: DeleteBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteServerResponse(data, context);
  const response: DeleteServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeAccountAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAccountAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAccountAttributesResponse(data, context);
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAccountAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_json1_1DescribeBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBackupsResponse(data, context);
  const response: DescribeBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBackupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.opsworkscm#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.opsworkscm#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeNodeAssociationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeAssociationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeNodeAssociationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeNodeAssociationStatusResponse(data, context);
  const response: DescribeNodeAssociationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeNodeAssociationStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeAssociationStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeServersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeServersResponse(data, context);
  const response: DescribeServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeServersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.opsworkscm#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DisassociateNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateNodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateNodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateNodeResponse(data, context);
  const response: DisassociateNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ExportServerEngineAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportServerEngineAttributeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ExportServerEngineAttributeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExportServerEngineAttributeResponse(data, context);
  const response: ExportServerEngineAttributeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ExportServerEngineAttributeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportServerEngineAttributeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RestoreServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RestoreServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreServerResponse(data, context);
  const response: RestoreServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RestoreServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StartMaintenanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMaintenanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartMaintenanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartMaintenanceResponse(data, context);
  const response: StartMaintenanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartMaintenanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMaintenanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
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
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
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
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServerResponse(data, context);
  const response: UpdateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateServerEngineAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerEngineAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateServerEngineAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServerEngineAttributesResponse(data, context);
  const response: UpdateServerEngineAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateServerEngineAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerEngineAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1InvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidStateException(body, context);
  const contents: InvalidStateException = {
    name: "InvalidStateException",
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

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
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

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AssociateNodeRequest = (input: AssociateNodeRequest, context: __SerdeContext): any => {
  return {
    ...(input.EngineAttributes !== undefined &&
      input.EngineAttributes !== null && {
        EngineAttributes: serializeAws_json1_1EngineAttributes(input.EngineAttributes, context),
      }),
    ...(input.NodeName !== undefined && input.NodeName !== null && { NodeName: input.NodeName }),
    ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
  };
};

const serializeAws_json1_1CreateBackupRequest = (input: CreateBackupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateServerRequest = (input: CreateServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.AssociatePublicIpAddress !== undefined &&
      input.AssociatePublicIpAddress !== null && { AssociatePublicIpAddress: input.AssociatePublicIpAddress }),
    ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
    ...(input.BackupRetentionCount !== undefined &&
      input.BackupRetentionCount !== null && { BackupRetentionCount: input.BackupRetentionCount }),
    ...(input.CustomCertificate !== undefined &&
      input.CustomCertificate !== null && { CustomCertificate: input.CustomCertificate }),
    ...(input.CustomDomain !== undefined && input.CustomDomain !== null && { CustomDomain: input.CustomDomain }),
    ...(input.CustomPrivateKey !== undefined &&
      input.CustomPrivateKey !== null && { CustomPrivateKey: input.CustomPrivateKey }),
    ...(input.DisableAutomatedBackup !== undefined &&
      input.DisableAutomatedBackup !== null && { DisableAutomatedBackup: input.DisableAutomatedBackup }),
    ...(input.Engine !== undefined && input.Engine !== null && { Engine: input.Engine }),
    ...(input.EngineAttributes !== undefined &&
      input.EngineAttributes !== null && {
        EngineAttributes: serializeAws_json1_1EngineAttributes(input.EngineAttributes, context),
      }),
    ...(input.EngineModel !== undefined && input.EngineModel !== null && { EngineModel: input.EngineModel }),
    ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion }),
    ...(input.InstanceProfileArn !== undefined &&
      input.InstanceProfileArn !== null && { InstanceProfileArn: input.InstanceProfileArn }),
    ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
    ...(input.KeyPair !== undefined && input.KeyPair !== null && { KeyPair: input.KeyPair }),
    ...(input.PreferredBackupWindow !== undefined &&
      input.PreferredBackupWindow !== null && { PreferredBackupWindow: input.PreferredBackupWindow }),
    ...(input.PreferredMaintenanceWindow !== undefined &&
      input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_1Strings(input.SecurityGroupIds, context),
      }),
    ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
    ...(input.ServiceRoleArn !== undefined &&
      input.ServiceRoleArn !== null && { ServiceRoleArn: input.ServiceRoleArn }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1Strings(input.SubnetIds, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1DeleteBackupRequest = (input: DeleteBackupRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
  };
};

const serializeAws_json1_1DeleteServerRequest = (input: DeleteServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
  };
};

const serializeAws_json1_1DescribeAccountAttributesRequest = (
  input: DescribeAccountAttributesRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DescribeBackupsRequest = (input: DescribeBackupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
  };
};

const serializeAws_json1_1DescribeEventsRequest = (input: DescribeEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
  };
};

const serializeAws_json1_1DescribeNodeAssociationStatusRequest = (
  input: DescribeNodeAssociationStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NodeAssociationStatusToken !== undefined &&
      input.NodeAssociationStatusToken !== null && { NodeAssociationStatusToken: input.NodeAssociationStatusToken }),
    ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
  };
};

const serializeAws_json1_1DescribeServersRequest = (input: DescribeServersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
  };
};

const serializeAws_json1_1DisassociateNodeRequest = (input: DisassociateNodeRequest, context: __SerdeContext): any => {
  return {
    ...(input.EngineAttributes !== undefined &&
      input.EngineAttributes !== null && {
        EngineAttributes: serializeAws_json1_1EngineAttributes(input.EngineAttributes, context),
      }),
    ...(input.NodeName !== undefined && input.NodeName !== null && { NodeName: input.NodeName }),
    ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
  };
};

const serializeAws_json1_1EngineAttribute = (input: EngineAttribute, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1EngineAttributes = (input: EngineAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1EngineAttribute(entry, context);
    });
};

const serializeAws_json1_1ExportServerEngineAttributeRequest = (
  input: ExportServerEngineAttributeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExportAttributeName !== undefined &&
      input.ExportAttributeName !== null && { ExportAttributeName: input.ExportAttributeName }),
    ...(input.InputAttributes !== undefined &&
      input.InputAttributes !== null && {
        InputAttributes: serializeAws_json1_1EngineAttributes(input.InputAttributes, context),
      }),
    ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1RestoreServerRequest = (input: RestoreServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
    ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
    ...(input.KeyPair !== undefined && input.KeyPair !== null && { KeyPair: input.KeyPair }),
    ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
  };
};

const serializeAws_json1_1StartMaintenanceRequest = (input: StartMaintenanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.EngineAttributes !== undefined &&
      input.EngineAttributes !== null && {
        EngineAttributes: serializeAws_json1_1EngineAttributes(input.EngineAttributes, context),
      }),
    ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
  };
};

const serializeAws_json1_1Strings = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
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
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateServerEngineAttributesRequest = (
  input: UpdateServerEngineAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
    ...(input.AttributeValue !== undefined &&
      input.AttributeValue !== null && { AttributeValue: input.AttributeValue }),
    ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
  };
};

const serializeAws_json1_1UpdateServerRequest = (input: UpdateServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupRetentionCount !== undefined &&
      input.BackupRetentionCount !== null && { BackupRetentionCount: input.BackupRetentionCount }),
    ...(input.DisableAutomatedBackup !== undefined &&
      input.DisableAutomatedBackup !== null && { DisableAutomatedBackup: input.DisableAutomatedBackup }),
    ...(input.PreferredBackupWindow !== undefined &&
      input.PreferredBackupWindow !== null && { PreferredBackupWindow: input.PreferredBackupWindow }),
    ...(input.PreferredMaintenanceWindow !== undefined &&
      input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
    ...(input.ServerName !== undefined && input.ServerName !== null && { ServerName: input.ServerName }),
  };
};

const deserializeAws_json1_1AccountAttribute = (output: any, context: __SerdeContext): AccountAttribute => {
  return {
    Maximum: __expectInt32(output.Maximum),
    Name: __expectString(output.Name),
    Used: __expectInt32(output.Used),
  } as any;
};

const deserializeAws_json1_1AccountAttributes = (output: any, context: __SerdeContext): AccountAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AccountAttribute(entry, context);
    });
};

const deserializeAws_json1_1AssociateNodeResponse = (output: any, context: __SerdeContext): AssociateNodeResponse => {
  return {
    NodeAssociationStatusToken: __expectString(output.NodeAssociationStatusToken),
  } as any;
};

const deserializeAws_json1_1Backup = (output: any, context: __SerdeContext): Backup => {
  return {
    BackupArn: __expectString(output.BackupArn),
    BackupId: __expectString(output.BackupId),
    BackupType: __expectString(output.BackupType),
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
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
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_json1_1Strings(output.SecurityGroupIds, context)
        : undefined,
    ServerName: __expectString(output.ServerName),
    ServiceRoleArn: __expectString(output.ServiceRoleArn),
    Status: __expectString(output.Status),
    StatusDescription: __expectString(output.StatusDescription),
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1Strings(output.SubnetIds, context)
        : undefined,
    ToolsVersion: __expectString(output.ToolsVersion),
    UserArn: __expectString(output.UserArn),
  } as any;
};

const deserializeAws_json1_1Backups = (output: any, context: __SerdeContext): Backup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Backup(entry, context);
    });
};

const deserializeAws_json1_1CreateBackupResponse = (output: any, context: __SerdeContext): CreateBackupResponse => {
  return {
    Backup:
      output.Backup !== undefined && output.Backup !== null
        ? deserializeAws_json1_1Backup(output.Backup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateServerResponse = (output: any, context: __SerdeContext): CreateServerResponse => {
  return {
    Server:
      output.Server !== undefined && output.Server !== null
        ? deserializeAws_json1_1Server(output.Server, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteBackupResponse = (output: any, context: __SerdeContext): DeleteBackupResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteServerResponse = (output: any, context: __SerdeContext): DeleteServerResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeAccountAttributesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAccountAttributesResponse => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1AccountAttributes(output.Attributes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeBackupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeBackupsResponse => {
  return {
    Backups:
      output.Backups !== undefined && output.Backups !== null
        ? deserializeAws_json1_1Backups(output.Backups, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeEventsResponse = (output: any, context: __SerdeContext): DescribeEventsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ServerEvents:
      output.ServerEvents !== undefined && output.ServerEvents !== null
        ? deserializeAws_json1_1ServerEvents(output.ServerEvents, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeNodeAssociationStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeNodeAssociationStatusResponse => {
  return {
    EngineAttributes:
      output.EngineAttributes !== undefined && output.EngineAttributes !== null
        ? deserializeAws_json1_1EngineAttributes(output.EngineAttributes, context)
        : undefined,
    NodeAssociationStatus: __expectString(output.NodeAssociationStatus),
  } as any;
};

const deserializeAws_json1_1DescribeServersResponse = (
  output: any,
  context: __SerdeContext
): DescribeServersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Servers:
      output.Servers !== undefined && output.Servers !== null
        ? deserializeAws_json1_1Servers(output.Servers, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DisassociateNodeResponse = (
  output: any,
  context: __SerdeContext
): DisassociateNodeResponse => {
  return {
    NodeAssociationStatusToken: __expectString(output.NodeAssociationStatusToken),
  } as any;
};

const deserializeAws_json1_1EngineAttribute = (output: any, context: __SerdeContext): EngineAttribute => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1EngineAttributes = (output: any, context: __SerdeContext): EngineAttribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EngineAttribute(entry, context);
    });
};

const deserializeAws_json1_1ExportServerEngineAttributeResponse = (
  output: any,
  context: __SerdeContext
): ExportServerEngineAttributeResponse => {
  return {
    EngineAttribute:
      output.EngineAttribute !== undefined && output.EngineAttribute !== null
        ? deserializeAws_json1_1EngineAttribute(output.EngineAttribute, context)
        : undefined,
    ServerName: __expectString(output.ServerName),
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

const deserializeAws_json1_1InvalidStateException = (output: any, context: __SerdeContext): InvalidStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
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

const deserializeAws_json1_1RestoreServerResponse = (output: any, context: __SerdeContext): RestoreServerResponse => {
  return {
    Server:
      output.Server !== undefined && output.Server !== null
        ? deserializeAws_json1_1Server(output.Server, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Server = (output: any, context: __SerdeContext): Server => {
  return {
    AssociatePublicIpAddress: __expectBoolean(output.AssociatePublicIpAddress),
    BackupRetentionCount: __expectInt32(output.BackupRetentionCount),
    CloudFormationStackArn: __expectString(output.CloudFormationStackArn),
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    CustomDomain: __expectString(output.CustomDomain),
    DisableAutomatedBackup: __expectBoolean(output.DisableAutomatedBackup),
    Endpoint: __expectString(output.Endpoint),
    Engine: __expectString(output.Engine),
    EngineAttributes:
      output.EngineAttributes !== undefined && output.EngineAttributes !== null
        ? deserializeAws_json1_1EngineAttributes(output.EngineAttributes, context)
        : undefined,
    EngineModel: __expectString(output.EngineModel),
    EngineVersion: __expectString(output.EngineVersion),
    InstanceProfileArn: __expectString(output.InstanceProfileArn),
    InstanceType: __expectString(output.InstanceType),
    KeyPair: __expectString(output.KeyPair),
    MaintenanceStatus: __expectString(output.MaintenanceStatus),
    PreferredBackupWindow: __expectString(output.PreferredBackupWindow),
    PreferredMaintenanceWindow: __expectString(output.PreferredMaintenanceWindow),
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_json1_1Strings(output.SecurityGroupIds, context)
        : undefined,
    ServerArn: __expectString(output.ServerArn),
    ServerName: __expectString(output.ServerName),
    ServiceRoleArn: __expectString(output.ServiceRoleArn),
    Status: __expectString(output.Status),
    StatusReason: __expectString(output.StatusReason),
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1Strings(output.SubnetIds, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ServerEvent = (output: any, context: __SerdeContext): ServerEvent => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    LogUrl: __expectString(output.LogUrl),
    Message: __expectString(output.Message),
    ServerName: __expectString(output.ServerName),
  } as any;
};

const deserializeAws_json1_1ServerEvents = (output: any, context: __SerdeContext): ServerEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServerEvent(entry, context);
    });
};

const deserializeAws_json1_1Servers = (output: any, context: __SerdeContext): Server[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Server(entry, context);
    });
};

const deserializeAws_json1_1StartMaintenanceResponse = (
  output: any,
  context: __SerdeContext
): StartMaintenanceResponse => {
  return {
    Server:
      output.Server !== undefined && output.Server !== null
        ? deserializeAws_json1_1Server(output.Server, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Strings = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateServerEngineAttributesResponse = (
  output: any,
  context: __SerdeContext
): UpdateServerEngineAttributesResponse => {
  return {
    Server:
      output.Server !== undefined && output.Server !== null
        ? deserializeAws_json1_1Server(output.Server, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateServerResponse = (output: any, context: __SerdeContext): UpdateServerResponse => {
  return {
    Server:
      output.Server !== undefined && output.Server !== null
        ? deserializeAws_json1_1Server(output.Server, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
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
