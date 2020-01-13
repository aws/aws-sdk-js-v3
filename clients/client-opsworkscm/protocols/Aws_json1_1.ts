import {
  AssociateNodeCommandInput,
  AssociateNodeCommandOutput
} from "../commands/AssociateNodeCommand";
import {
  CreateBackupCommandInput,
  CreateBackupCommandOutput
} from "../commands/CreateBackupCommand";
import {
  CreateServerCommandInput,
  CreateServerCommandOutput
} from "../commands/CreateServerCommand";
import {
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput
} from "../commands/DeleteBackupCommand";
import {
  DeleteServerCommandInput,
  DeleteServerCommandOutput
} from "../commands/DeleteServerCommand";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput
} from "../commands/DescribeAccountAttributesCommand";
import {
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput
} from "../commands/DescribeBackupsCommand";
import {
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput
} from "../commands/DescribeEventsCommand";
import {
  DescribeNodeAssociationStatusCommandInput,
  DescribeNodeAssociationStatusCommandOutput
} from "../commands/DescribeNodeAssociationStatusCommand";
import {
  DescribeServersCommandInput,
  DescribeServersCommandOutput
} from "../commands/DescribeServersCommand";
import {
  DisassociateNodeCommandInput,
  DisassociateNodeCommandOutput
} from "../commands/DisassociateNodeCommand";
import {
  ExportServerEngineAttributeCommandInput,
  ExportServerEngineAttributeCommandOutput
} from "../commands/ExportServerEngineAttributeCommand";
import {
  RestoreServerCommandInput,
  RestoreServerCommandOutput
} from "../commands/RestoreServerCommand";
import {
  StartMaintenanceCommandInput,
  StartMaintenanceCommandOutput
} from "../commands/StartMaintenanceCommand";
import {
  UpdateServerCommandInput,
  UpdateServerCommandOutput
} from "../commands/UpdateServerCommand";
import {
  UpdateServerEngineAttributesCommandInput,
  UpdateServerEngineAttributesCommandOutput
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
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  RestoreServerRequest,
  RestoreServerResponse,
  Server,
  ServerEvent,
  StartMaintenanceRequest,
  StartMaintenanceResponse,
  UpdateServerEngineAttributesRequest,
  UpdateServerEngineAttributesResponse,
  UpdateServerRequest,
  UpdateServerResponse,
  ValidationException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1AssociateNodeCommand(
  input: AssociateNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.AssociateNode";
  let body: any = {};
  const wrappedBody: any = {
    AssociateNodeRequest: serializeAws_json1_1AssociateNodeRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AssociateNode",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateBackupCommand(
  input: CreateBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.CreateBackup";
  let body: any = {};
  const wrappedBody: any = {
    CreateBackupRequest: serializeAws_json1_1CreateBackupRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateBackup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateServerCommand(
  input: CreateServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.CreateServer";
  let body: any = {};
  const wrappedBody: any = {
    CreateServerRequest: serializeAws_json1_1CreateServerRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateServer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteBackupCommand(
  input: DeleteBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.DeleteBackup";
  let body: any = {};
  const wrappedBody: any = {
    DeleteBackupRequest: serializeAws_json1_1DeleteBackupRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteBackup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteServerCommand(
  input: DeleteServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.DeleteServer";
  let body: any = {};
  const wrappedBody: any = {
    DeleteServerRequest: serializeAws_json1_1DeleteServerRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteServer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeAccountAttributesCommand(
  input: DescribeAccountAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.DescribeAccountAttributes";
  let body: any = {};
  const wrappedBody: any = {
    DescribeAccountAttributesRequest: serializeAws_json1_1DescribeAccountAttributesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeAccountAttributes",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeBackupsCommand(
  input: DescribeBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.DescribeBackups";
  let body: any = {};
  const wrappedBody: any = {
    DescribeBackupsRequest: serializeAws_json1_1DescribeBackupsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeBackups",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeEventsCommand(
  input: DescribeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.DescribeEvents";
  let body: any = {};
  const wrappedBody: any = {
    DescribeEventsRequest: serializeAws_json1_1DescribeEventsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeEvents",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeNodeAssociationStatusCommand(
  input: DescribeNodeAssociationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus";
  let body: any = {};
  const wrappedBody: any = {
    DescribeNodeAssociationStatusRequest: serializeAws_json1_1DescribeNodeAssociationStatusRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeNodeAssociationStatus",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeServersCommand(
  input: DescribeServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.DescribeServers";
  let body: any = {};
  const wrappedBody: any = {
    DescribeServersRequest: serializeAws_json1_1DescribeServersRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeServers",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DisassociateNodeCommand(
  input: DisassociateNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.DisassociateNode";
  let body: any = {};
  const wrappedBody: any = {
    DisassociateNodeRequest: serializeAws_json1_1DisassociateNodeRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DisassociateNode",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ExportServerEngineAttributeCommand(
  input: ExportServerEngineAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "OpsWorksCM_V2016_11_01.ExportServerEngineAttribute";
  let body: any = {};
  const wrappedBody: any = {
    ExportServerEngineAttributeRequest: serializeAws_json1_1ExportServerEngineAttributeRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ExportServerEngineAttribute",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RestoreServerCommand(
  input: RestoreServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.RestoreServer";
  let body: any = {};
  const wrappedBody: any = {
    RestoreServerRequest: serializeAws_json1_1RestoreServerRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RestoreServer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartMaintenanceCommand(
  input: StartMaintenanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.StartMaintenance";
  let body: any = {};
  const wrappedBody: any = {
    StartMaintenanceRequest: serializeAws_json1_1StartMaintenanceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartMaintenance",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateServerCommand(
  input: UpdateServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "OpsWorksCM_V2016_11_01.UpdateServer";
  let body: any = {};
  const wrappedBody: any = {
    UpdateServerRequest: serializeAws_json1_1UpdateServerRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateServer",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateServerEngineAttributesCommand(
  input: UpdateServerEngineAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes";
  let body: any = {};
  const wrappedBody: any = {
    UpdateServerEngineAttributesRequest: serializeAws_json1_1UpdateServerEngineAttributesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateServerEngineAttributes",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1AssociateNodeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateNodeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateNodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateNodeResponse(data, context);
  const response: AssociateNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateNodeResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AssociateNodeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateNodeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.opsworkscm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateBackupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBackupResponse(data, context);
  const response: CreateBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateBackupResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateBackupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.opsworkscm#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.opsworkscm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateServerResponse(data, context);
  const response: CreateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateServerResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.opsworkscm#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.opsworkscm#ResourceAlreadyExistsException":
      response = await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.opsworkscm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteBackupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBackupResponse(data, context);
  const response: DeleteBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteBackupResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteBackupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.opsworkscm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteServerResponse(data, context);
  const response: DeleteServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteServerResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.opsworkscm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeAccountAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAccountAttributesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAccountAttributesResponse(
    data,
    context
  );
  const response: DescribeAccountAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAccountAttributesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeAccountAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAttributesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      response = {
        __type: `com.amazonaws.opsworkscm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeBackupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBackupsResponse(data, context);
  const response: DescribeBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBackupsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeBackupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.opsworkscm#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.opsworkscm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
  const response: DescribeEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEventsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.opsworkscm#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.opsworkscm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeNodeAssociationStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeAssociationStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeNodeAssociationStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeNodeAssociationStatusResponse(
    data,
    context
  );
  const response: DescribeNodeAssociationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeNodeAssociationStatusResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeNodeAssociationStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeAssociationStatusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.opsworkscm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeServersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeServersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeServersResponse(data, context);
  const response: DescribeServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeServersResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeServersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.opsworkscm#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.opsworkscm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DisassociateNodeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateNodeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateNodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateNodeResponse(data, context);
  const response: DisassociateNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateNodeResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisassociateNodeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateNodeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.opsworkscm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ExportServerEngineAttributeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportServerEngineAttributeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ExportServerEngineAttributeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExportServerEngineAttributeResponse(
    data,
    context
  );
  const response: ExportServerEngineAttributeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExportServerEngineAttributeResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ExportServerEngineAttributeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportServerEngineAttributeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.opsworkscm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RestoreServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RestoreServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreServerResponse(data, context);
  const response: RestoreServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RestoreServerResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RestoreServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreServerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.opsworkscm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StartMaintenanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMaintenanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartMaintenanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartMaintenanceResponse(data, context);
  const response: StartMaintenanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartMaintenanceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartMaintenanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMaintenanceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.opsworkscm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateServerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServerResponse(data, context);
  const response: UpdateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateServerResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateServerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.opsworkscm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateServerEngineAttributesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerEngineAttributesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateServerEngineAttributesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServerEngineAttributesResponse(
    data,
    context
  );
  const response: UpdateServerEngineAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateServerEngineAttributesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateServerEngineAttributesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerEngineAttributesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidStateException":
    case "com.amazonaws.opsworkscm#InvalidStateException":
      response = await deserializeAws_json1_1InvalidStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.opsworkscm#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.opsworkscm#ValidationException":
      response = await deserializeAws_json1_1ValidationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.opsworkscm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    body,
    context
  );
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    __type: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidStateException(
    body,
    context
  );
  const contents: InvalidStateException = {
    name: "InvalidStateException",
    __type: "InvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(
    body,
    context
  );
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    __type: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(
    body,
    context
  );
  const contents: ValidationException = {
    name: "ValidationException",
    __type: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AssociateNodeRequest = (
  input: AssociateNodeRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EngineAttributes !== undefined) {
    bodyParams["EngineAttributes"] = serializeAws_json1_1EngineAttributes(
      input.EngineAttributes,
      context
    );
  }
  if (input.NodeName !== undefined) {
    bodyParams["NodeName"] = input.NodeName;
  }
  if (input.ServerName !== undefined) {
    bodyParams["ServerName"] = input.ServerName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateBackupRequest = (
  input: CreateBackupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.ServerName !== undefined) {
    bodyParams["ServerName"] = input.ServerName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateServerRequest = (
  input: CreateServerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AssociatePublicIpAddress !== undefined) {
    bodyParams["AssociatePublicIpAddress"] = input.AssociatePublicIpAddress;
  }
  if (input.BackupId !== undefined) {
    bodyParams["BackupId"] = input.BackupId;
  }
  if (input.BackupRetentionCount !== undefined) {
    bodyParams["BackupRetentionCount"] = input.BackupRetentionCount;
  }
  if (input.CustomCertificate !== undefined) {
    bodyParams["CustomCertificate"] = input.CustomCertificate;
  }
  if (input.CustomDomain !== undefined) {
    bodyParams["CustomDomain"] = input.CustomDomain;
  }
  if (input.CustomPrivateKey !== undefined) {
    bodyParams["CustomPrivateKey"] = input.CustomPrivateKey;
  }
  if (input.DisableAutomatedBackup !== undefined) {
    bodyParams["DisableAutomatedBackup"] = input.DisableAutomatedBackup;
  }
  if (input.Engine !== undefined) {
    bodyParams["Engine"] = input.Engine;
  }
  if (input.EngineAttributes !== undefined) {
    bodyParams["EngineAttributes"] = serializeAws_json1_1EngineAttributes(
      input.EngineAttributes,
      context
    );
  }
  if (input.EngineModel !== undefined) {
    bodyParams["EngineModel"] = input.EngineModel;
  }
  if (input.EngineVersion !== undefined) {
    bodyParams["EngineVersion"] = input.EngineVersion;
  }
  if (input.InstanceProfileArn !== undefined) {
    bodyParams["InstanceProfileArn"] = input.InstanceProfileArn;
  }
  if (input.InstanceType !== undefined) {
    bodyParams["InstanceType"] = input.InstanceType;
  }
  if (input.KeyPair !== undefined) {
    bodyParams["KeyPair"] = input.KeyPair;
  }
  if (input.PreferredBackupWindow !== undefined) {
    bodyParams["PreferredBackupWindow"] = input.PreferredBackupWindow;
  }
  if (input.PreferredMaintenanceWindow !== undefined) {
    bodyParams["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.SecurityGroupIds !== undefined) {
    bodyParams["SecurityGroupIds"] = serializeAws_json1_1Strings(
      input.SecurityGroupIds,
      context
    );
  }
  if (input.ServerName !== undefined) {
    bodyParams["ServerName"] = input.ServerName;
  }
  if (input.ServiceRoleArn !== undefined) {
    bodyParams["ServiceRoleArn"] = input.ServiceRoleArn;
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["SubnetIds"] = serializeAws_json1_1Strings(
      input.SubnetIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteBackupRequest = (
  input: DeleteBackupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BackupId !== undefined) {
    bodyParams["BackupId"] = input.BackupId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteServerRequest = (
  input: DeleteServerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ServerName !== undefined) {
    bodyParams["ServerName"] = input.ServerName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAccountAttributesRequest = (
  input: DescribeAccountAttributesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1DescribeBackupsRequest = (
  input: DescribeBackupsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BackupId !== undefined) {
    bodyParams["BackupId"] = input.BackupId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ServerName !== undefined) {
    bodyParams["ServerName"] = input.ServerName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEventsRequest = (
  input: DescribeEventsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ServerName !== undefined) {
    bodyParams["ServerName"] = input.ServerName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeNodeAssociationStatusRequest = (
  input: DescribeNodeAssociationStatusRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.NodeAssociationStatusToken !== undefined) {
    bodyParams["NodeAssociationStatusToken"] = input.NodeAssociationStatusToken;
  }
  if (input.ServerName !== undefined) {
    bodyParams["ServerName"] = input.ServerName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeServersRequest = (
  input: DescribeServersRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ServerName !== undefined) {
    bodyParams["ServerName"] = input.ServerName;
  }
  return bodyParams;
};

const serializeAws_json1_1DisassociateNodeRequest = (
  input: DisassociateNodeRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EngineAttributes !== undefined) {
    bodyParams["EngineAttributes"] = serializeAws_json1_1EngineAttributes(
      input.EngineAttributes,
      context
    );
  }
  if (input.NodeName !== undefined) {
    bodyParams["NodeName"] = input.NodeName;
  }
  if (input.ServerName !== undefined) {
    bodyParams["ServerName"] = input.ServerName;
  }
  return bodyParams;
};

const serializeAws_json1_1EngineAttribute = (
  input: EngineAttribute,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1EngineAttributes = (
  input: Array<EngineAttribute>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1EngineAttribute(entry, context)
  );
};

const serializeAws_json1_1ExportServerEngineAttributeRequest = (
  input: ExportServerEngineAttributeRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ExportAttributeName !== undefined) {
    bodyParams["ExportAttributeName"] = input.ExportAttributeName;
  }
  if (input.InputAttributes !== undefined) {
    bodyParams["InputAttributes"] = serializeAws_json1_1EngineAttributes(
      input.InputAttributes,
      context
    );
  }
  if (input.ServerName !== undefined) {
    bodyParams["ServerName"] = input.ServerName;
  }
  return bodyParams;
};

const serializeAws_json1_1RestoreServerRequest = (
  input: RestoreServerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BackupId !== undefined) {
    bodyParams["BackupId"] = input.BackupId;
  }
  if (input.InstanceType !== undefined) {
    bodyParams["InstanceType"] = input.InstanceType;
  }
  if (input.KeyPair !== undefined) {
    bodyParams["KeyPair"] = input.KeyPair;
  }
  if (input.ServerName !== undefined) {
    bodyParams["ServerName"] = input.ServerName;
  }
  return bodyParams;
};

const serializeAws_json1_1StartMaintenanceRequest = (
  input: StartMaintenanceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EngineAttributes !== undefined) {
    bodyParams["EngineAttributes"] = serializeAws_json1_1EngineAttributes(
      input.EngineAttributes,
      context
    );
  }
  if (input.ServerName !== undefined) {
    bodyParams["ServerName"] = input.ServerName;
  }
  return bodyParams;
};

const serializeAws_json1_1Strings = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1UpdateServerEngineAttributesRequest = (
  input: UpdateServerEngineAttributesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeName !== undefined) {
    bodyParams["AttributeName"] = input.AttributeName;
  }
  if (input.AttributeValue !== undefined) {
    bodyParams["AttributeValue"] = input.AttributeValue;
  }
  if (input.ServerName !== undefined) {
    bodyParams["ServerName"] = input.ServerName;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateServerRequest = (
  input: UpdateServerRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BackupRetentionCount !== undefined) {
    bodyParams["BackupRetentionCount"] = input.BackupRetentionCount;
  }
  if (input.DisableAutomatedBackup !== undefined) {
    bodyParams["DisableAutomatedBackup"] = input.DisableAutomatedBackup;
  }
  if (input.PreferredBackupWindow !== undefined) {
    bodyParams["PreferredBackupWindow"] = input.PreferredBackupWindow;
  }
  if (input.PreferredMaintenanceWindow !== undefined) {
    bodyParams["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
  }
  if (input.ServerName !== undefined) {
    bodyParams["ServerName"] = input.ServerName;
  }
  return bodyParams;
};

const deserializeAws_json1_1AccountAttribute = (
  output: any,
  context: __SerdeContext
): AccountAttribute => {
  let contents: any = {
    __type: "AccountAttribute",
    Maximum: undefined,
    Name: undefined,
    Used: undefined
  };
  if (output.Maximum !== undefined) {
    contents.Maximum = output.Maximum;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Used !== undefined) {
    contents.Used = output.Used;
  }
  return contents;
};

const deserializeAws_json1_1AccountAttributes = (
  output: any,
  context: __SerdeContext
): Array<AccountAttribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AccountAttribute(entry, context)
  );
};

const deserializeAws_json1_1AssociateNodeResponse = (
  output: any,
  context: __SerdeContext
): AssociateNodeResponse => {
  let contents: any = {
    __type: "AssociateNodeResponse",
    NodeAssociationStatusToken: undefined
  };
  if (output.NodeAssociationStatusToken !== undefined) {
    contents.NodeAssociationStatusToken = output.NodeAssociationStatusToken;
  }
  return contents;
};

const deserializeAws_json1_1Backup = (
  output: any,
  context: __SerdeContext
): Backup => {
  let contents: any = {
    __type: "Backup",
    BackupArn: undefined,
    BackupId: undefined,
    BackupType: undefined,
    CreatedAt: undefined,
    Description: undefined,
    Engine: undefined,
    EngineModel: undefined,
    EngineVersion: undefined,
    InstanceProfileArn: undefined,
    InstanceType: undefined,
    KeyPair: undefined,
    PreferredBackupWindow: undefined,
    PreferredMaintenanceWindow: undefined,
    S3DataSize: undefined,
    S3DataUrl: undefined,
    S3LogUrl: undefined,
    SecurityGroupIds: undefined,
    ServerName: undefined,
    ServiceRoleArn: undefined,
    Status: undefined,
    StatusDescription: undefined,
    SubnetIds: undefined,
    ToolsVersion: undefined,
    UserArn: undefined
  };
  if (output.BackupArn !== undefined) {
    contents.BackupArn = output.BackupArn;
  }
  if (output.BackupId !== undefined) {
    contents.BackupId = output.BackupId;
  }
  if (output.BackupType !== undefined) {
    contents.BackupType = output.BackupType;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.Engine !== undefined) {
    contents.Engine = output.Engine;
  }
  if (output.EngineModel !== undefined) {
    contents.EngineModel = output.EngineModel;
  }
  if (output.EngineVersion !== undefined) {
    contents.EngineVersion = output.EngineVersion;
  }
  if (output.InstanceProfileArn !== undefined) {
    contents.InstanceProfileArn = output.InstanceProfileArn;
  }
  if (output.InstanceType !== undefined) {
    contents.InstanceType = output.InstanceType;
  }
  if (output.KeyPair !== undefined) {
    contents.KeyPair = output.KeyPair;
  }
  if (output.PreferredBackupWindow !== undefined) {
    contents.PreferredBackupWindow = output.PreferredBackupWindow;
  }
  if (output.PreferredMaintenanceWindow !== undefined) {
    contents.PreferredMaintenanceWindow = output.PreferredMaintenanceWindow;
  }
  if (output.S3DataSize !== undefined) {
    contents.S3DataSize = output.S3DataSize;
  }
  if (output.S3DataUrl !== undefined) {
    contents.S3DataUrl = output.S3DataUrl;
  }
  if (output.S3LogUrl !== undefined) {
    contents.S3LogUrl = output.S3LogUrl;
  }
  if (output.SecurityGroupIds !== undefined) {
    contents.SecurityGroupIds = deserializeAws_json1_1Strings(
      output.SecurityGroupIds,
      context
    );
  }
  if (output.ServerName !== undefined) {
    contents.ServerName = output.ServerName;
  }
  if (output.ServiceRoleArn !== undefined) {
    contents.ServiceRoleArn = output.ServiceRoleArn;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.StatusDescription !== undefined) {
    contents.StatusDescription = output.StatusDescription;
  }
  if (output.SubnetIds !== undefined) {
    contents.SubnetIds = deserializeAws_json1_1Strings(
      output.SubnetIds,
      context
    );
  }
  if (output.ToolsVersion !== undefined) {
    contents.ToolsVersion = output.ToolsVersion;
  }
  if (output.UserArn !== undefined) {
    contents.UserArn = output.UserArn;
  }
  return contents;
};

const deserializeAws_json1_1Backups = (
  output: any,
  context: __SerdeContext
): Array<Backup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Backup(entry, context)
  );
};

const deserializeAws_json1_1CreateBackupResponse = (
  output: any,
  context: __SerdeContext
): CreateBackupResponse => {
  let contents: any = {
    __type: "CreateBackupResponse",
    Backup: undefined
  };
  if (output.Backup !== undefined) {
    contents.Backup = deserializeAws_json1_1Backup(output.Backup, context);
  }
  return contents;
};

const deserializeAws_json1_1CreateServerResponse = (
  output: any,
  context: __SerdeContext
): CreateServerResponse => {
  let contents: any = {
    __type: "CreateServerResponse",
    Server: undefined
  };
  if (output.Server !== undefined) {
    contents.Server = deserializeAws_json1_1Server(output.Server, context);
  }
  return contents;
};

const deserializeAws_json1_1DeleteBackupResponse = (
  output: any,
  context: __SerdeContext
): DeleteBackupResponse => {
  let contents: any = {
    __type: "DeleteBackupResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteServerResponse = (
  output: any,
  context: __SerdeContext
): DeleteServerResponse => {
  let contents: any = {
    __type: "DeleteServerResponse"
  };
  return contents;
};

const deserializeAws_json1_1DescribeAccountAttributesResponse = (
  output: any,
  context: __SerdeContext
): DescribeAccountAttributesResponse => {
  let contents: any = {
    __type: "DescribeAccountAttributesResponse",
    Attributes: undefined
  };
  if (output.Attributes !== undefined) {
    contents.Attributes = deserializeAws_json1_1AccountAttributes(
      output.Attributes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeBackupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeBackupsResponse => {
  let contents: any = {
    __type: "DescribeBackupsResponse",
    Backups: undefined,
    NextToken: undefined
  };
  if (output.Backups !== undefined) {
    contents.Backups = deserializeAws_json1_1Backups(output.Backups, context);
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeEventsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventsResponse => {
  let contents: any = {
    __type: "DescribeEventsResponse",
    NextToken: undefined,
    ServerEvents: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.ServerEvents !== undefined) {
    contents.ServerEvents = deserializeAws_json1_1ServerEvents(
      output.ServerEvents,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeNodeAssociationStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeNodeAssociationStatusResponse => {
  let contents: any = {
    __type: "DescribeNodeAssociationStatusResponse",
    EngineAttributes: undefined,
    NodeAssociationStatus: undefined
  };
  if (output.EngineAttributes !== undefined) {
    contents.EngineAttributes = deserializeAws_json1_1EngineAttributes(
      output.EngineAttributes,
      context
    );
  }
  if (output.NodeAssociationStatus !== undefined) {
    contents.NodeAssociationStatus = output.NodeAssociationStatus;
  }
  return contents;
};

const deserializeAws_json1_1DescribeServersResponse = (
  output: any,
  context: __SerdeContext
): DescribeServersResponse => {
  let contents: any = {
    __type: "DescribeServersResponse",
    NextToken: undefined,
    Servers: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Servers !== undefined) {
    contents.Servers = deserializeAws_json1_1Servers(output.Servers, context);
  }
  return contents;
};

const deserializeAws_json1_1DisassociateNodeResponse = (
  output: any,
  context: __SerdeContext
): DisassociateNodeResponse => {
  let contents: any = {
    __type: "DisassociateNodeResponse",
    NodeAssociationStatusToken: undefined
  };
  if (output.NodeAssociationStatusToken !== undefined) {
    contents.NodeAssociationStatusToken = output.NodeAssociationStatusToken;
  }
  return contents;
};

const deserializeAws_json1_1EngineAttribute = (
  output: any,
  context: __SerdeContext
): EngineAttribute => {
  let contents: any = {
    __type: "EngineAttribute",
    Name: undefined,
    Value: undefined
  };
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1EngineAttributes = (
  output: any,
  context: __SerdeContext
): Array<EngineAttribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EngineAttribute(entry, context)
  );
};

const deserializeAws_json1_1ExportServerEngineAttributeResponse = (
  output: any,
  context: __SerdeContext
): ExportServerEngineAttributeResponse => {
  let contents: any = {
    __type: "ExportServerEngineAttributeResponse",
    EngineAttribute: undefined,
    ServerName: undefined
  };
  if (output.EngineAttribute !== undefined) {
    contents.EngineAttribute = deserializeAws_json1_1EngineAttribute(
      output.EngineAttribute,
      context
    );
  }
  if (output.ServerName !== undefined) {
    contents.ServerName = output.ServerName;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidStateException = (
  output: any,
  context: __SerdeContext
): InvalidStateException => {
  let contents: any = {
    __type: "InvalidStateException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  let contents: any = {
    __type: "ResourceAlreadyExistsException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1RestoreServerResponse = (
  output: any,
  context: __SerdeContext
): RestoreServerResponse => {
  let contents: any = {
    __type: "RestoreServerResponse"
  };
  return contents;
};

const deserializeAws_json1_1Server = (
  output: any,
  context: __SerdeContext
): Server => {
  let contents: any = {
    __type: "Server",
    AssociatePublicIpAddress: undefined,
    BackupRetentionCount: undefined,
    CloudFormationStackArn: undefined,
    CreatedAt: undefined,
    CustomDomain: undefined,
    DisableAutomatedBackup: undefined,
    Endpoint: undefined,
    Engine: undefined,
    EngineAttributes: undefined,
    EngineModel: undefined,
    EngineVersion: undefined,
    InstanceProfileArn: undefined,
    InstanceType: undefined,
    KeyPair: undefined,
    MaintenanceStatus: undefined,
    PreferredBackupWindow: undefined,
    PreferredMaintenanceWindow: undefined,
    SecurityGroupIds: undefined,
    ServerArn: undefined,
    ServerName: undefined,
    ServiceRoleArn: undefined,
    Status: undefined,
    StatusReason: undefined,
    SubnetIds: undefined
  };
  if (output.AssociatePublicIpAddress !== undefined) {
    contents.AssociatePublicIpAddress = output.AssociatePublicIpAddress;
  }
  if (output.BackupRetentionCount !== undefined) {
    contents.BackupRetentionCount = output.BackupRetentionCount;
  }
  if (output.CloudFormationStackArn !== undefined) {
    contents.CloudFormationStackArn = output.CloudFormationStackArn;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.CustomDomain !== undefined) {
    contents.CustomDomain = output.CustomDomain;
  }
  if (output.DisableAutomatedBackup !== undefined) {
    contents.DisableAutomatedBackup = output.DisableAutomatedBackup;
  }
  if (output.Endpoint !== undefined) {
    contents.Endpoint = output.Endpoint;
  }
  if (output.Engine !== undefined) {
    contents.Engine = output.Engine;
  }
  if (output.EngineAttributes !== undefined) {
    contents.EngineAttributes = deserializeAws_json1_1EngineAttributes(
      output.EngineAttributes,
      context
    );
  }
  if (output.EngineModel !== undefined) {
    contents.EngineModel = output.EngineModel;
  }
  if (output.EngineVersion !== undefined) {
    contents.EngineVersion = output.EngineVersion;
  }
  if (output.InstanceProfileArn !== undefined) {
    contents.InstanceProfileArn = output.InstanceProfileArn;
  }
  if (output.InstanceType !== undefined) {
    contents.InstanceType = output.InstanceType;
  }
  if (output.KeyPair !== undefined) {
    contents.KeyPair = output.KeyPair;
  }
  if (output.MaintenanceStatus !== undefined) {
    contents.MaintenanceStatus = output.MaintenanceStatus;
  }
  if (output.PreferredBackupWindow !== undefined) {
    contents.PreferredBackupWindow = output.PreferredBackupWindow;
  }
  if (output.PreferredMaintenanceWindow !== undefined) {
    contents.PreferredMaintenanceWindow = output.PreferredMaintenanceWindow;
  }
  if (output.SecurityGroupIds !== undefined) {
    contents.SecurityGroupIds = deserializeAws_json1_1Strings(
      output.SecurityGroupIds,
      context
    );
  }
  if (output.ServerArn !== undefined) {
    contents.ServerArn = output.ServerArn;
  }
  if (output.ServerName !== undefined) {
    contents.ServerName = output.ServerName;
  }
  if (output.ServiceRoleArn !== undefined) {
    contents.ServiceRoleArn = output.ServiceRoleArn;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.StatusReason !== undefined) {
    contents.StatusReason = output.StatusReason;
  }
  if (output.SubnetIds !== undefined) {
    contents.SubnetIds = deserializeAws_json1_1Strings(
      output.SubnetIds,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ServerEvent = (
  output: any,
  context: __SerdeContext
): ServerEvent => {
  let contents: any = {
    __type: "ServerEvent",
    CreatedAt: undefined,
    LogUrl: undefined,
    Message: undefined,
    ServerName: undefined
  };
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.LogUrl !== undefined) {
    contents.LogUrl = output.LogUrl;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.ServerName !== undefined) {
    contents.ServerName = output.ServerName;
  }
  return contents;
};

const deserializeAws_json1_1ServerEvents = (
  output: any,
  context: __SerdeContext
): Array<ServerEvent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServerEvent(entry, context)
  );
};

const deserializeAws_json1_1Servers = (
  output: any,
  context: __SerdeContext
): Array<Server> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Server(entry, context)
  );
};

const deserializeAws_json1_1StartMaintenanceResponse = (
  output: any,
  context: __SerdeContext
): StartMaintenanceResponse => {
  let contents: any = {
    __type: "StartMaintenanceResponse",
    Server: undefined
  };
  if (output.Server !== undefined) {
    contents.Server = deserializeAws_json1_1Server(output.Server, context);
  }
  return contents;
};

const deserializeAws_json1_1Strings = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1UpdateServerEngineAttributesResponse = (
  output: any,
  context: __SerdeContext
): UpdateServerEngineAttributesResponse => {
  let contents: any = {
    __type: "UpdateServerEngineAttributesResponse",
    Server: undefined
  };
  if (output.Server !== undefined) {
    contents.Server = deserializeAws_json1_1Server(output.Server, context);
  }
  return contents;
};

const deserializeAws_json1_1UpdateServerResponse = (
  output: any,
  context: __SerdeContext
): UpdateServerResponse => {
  let contents: any = {
    __type: "UpdateServerResponse",
    Server: undefined
  };
  if (output.Server !== undefined) {
    contents.Server = deserializeAws_json1_1Server(output.Server, context);
  }
  return contents;
};

const deserializeAws_json1_1ValidationException = (
  output: any,
  context: __SerdeContext
): ValidationException => {
  let contents: any = {
    __type: "ValidationException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  return context.streamCollector(streamBody) || new Uint8Array();
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
