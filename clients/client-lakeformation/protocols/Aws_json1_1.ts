import {
  BatchGrantPermissionsCommandInput,
  BatchGrantPermissionsCommandOutput,
} from "../commands/BatchGrantPermissionsCommand";
import {
  BatchRevokePermissionsCommandInput,
  BatchRevokePermissionsCommandOutput,
} from "../commands/BatchRevokePermissionsCommand";
import {
  DeregisterResourceCommandInput,
  DeregisterResourceCommandOutput,
} from "../commands/DeregisterResourceCommand";
import {
  DescribeResourceCommandInput,
  DescribeResourceCommandOutput,
} from "../commands/DescribeResourceCommand";
import {
  GetDataLakeSettingsCommandInput,
  GetDataLakeSettingsCommandOutput,
} from "../commands/GetDataLakeSettingsCommand";
import {
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput,
} from "../commands/GetEffectivePermissionsForPathCommand";
import {
  GrantPermissionsCommandInput,
  GrantPermissionsCommandOutput,
} from "../commands/GrantPermissionsCommand";
import {
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
} from "../commands/ListPermissionsCommand";
import {
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "../commands/ListResourcesCommand";
import {
  PutDataLakeSettingsCommandInput,
  PutDataLakeSettingsCommandOutput,
} from "../commands/PutDataLakeSettingsCommand";
import {
  RegisterResourceCommandInput,
  RegisterResourceCommandOutput,
} from "../commands/RegisterResourceCommand";
import {
  RevokePermissionsCommandInput,
  RevokePermissionsCommandOutput,
} from "../commands/RevokePermissionsCommand";
import {
  UpdateResourceCommandInput,
  UpdateResourceCommandOutput,
} from "../commands/UpdateResourceCommand";
import {
  AlreadyExistsException,
  BatchGrantPermissionsRequest,
  BatchGrantPermissionsResponse,
  BatchPermissionsFailureEntry,
  BatchPermissionsRequestEntry,
  BatchRevokePermissionsRequest,
  BatchRevokePermissionsResponse,
  CatalogResource,
  ColumnWildcard,
  ConcurrentModificationException,
  DataLakePrincipal,
  DataLakeSettings,
  DataLocationResource,
  DatabaseResource,
  DeregisterResourceRequest,
  DeregisterResourceResponse,
  DescribeResourceRequest,
  DescribeResourceResponse,
  EntityNotFoundException,
  ErrorDetail,
  FilterCondition,
  GetDataLakeSettingsRequest,
  GetDataLakeSettingsResponse,
  GetEffectivePermissionsForPathRequest,
  GetEffectivePermissionsForPathResponse,
  GrantPermissionsRequest,
  GrantPermissionsResponse,
  InternalServiceException,
  InvalidInputException,
  ListPermissionsRequest,
  ListPermissionsResponse,
  ListResourcesRequest,
  ListResourcesResponse,
  OperationTimeoutException,
  Permission,
  PrincipalPermissions,
  PrincipalResourcePermissions,
  PutDataLakeSettingsRequest,
  PutDataLakeSettingsResponse,
  RegisterResourceRequest,
  RegisterResourceResponse,
  Resource,
  ResourceInfo,
  RevokePermissionsRequest,
  RevokePermissionsResponse,
  TableResource,
  TableWithColumnsResource,
  UpdateResourceRequest,
  UpdateResourceResponse,
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export async function serializeAws_json1_1BatchGrantPermissionsCommand(
  input: BatchGrantPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSLakeFormation.BatchGrantPermissions";
  let body: any = {};
  const wrappedBody: any = {
    BatchGrantPermissionsRequest: serializeAws_json1_1BatchGrantPermissionsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchGrantPermissions",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1BatchRevokePermissionsCommand(
  input: BatchRevokePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSLakeFormation.BatchRevokePermissions";
  let body: any = {};
  const wrappedBody: any = {
    BatchRevokePermissionsRequest: serializeAws_json1_1BatchRevokePermissionsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchRevokePermissions",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DeregisterResourceCommand(
  input: DeregisterResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSLakeFormation.DeregisterResource";
  let body: any = {};
  const wrappedBody: any = {
    DeregisterResourceRequest: serializeAws_json1_1DeregisterResourceRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeregisterResource",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DescribeResourceCommand(
  input: DescribeResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSLakeFormation.DescribeResource";
  let body: any = {};
  const wrappedBody: any = {
    DescribeResourceRequest: serializeAws_json1_1DescribeResourceRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeResource",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1GetDataLakeSettingsCommand(
  input: GetDataLakeSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSLakeFormation.GetDataLakeSettings";
  let body: any = {};
  const wrappedBody: any = {
    GetDataLakeSettingsRequest: serializeAws_json1_1GetDataLakeSettingsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetDataLakeSettings",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1GetEffectivePermissionsForPathCommand(
  input: GetEffectivePermissionsForPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSLakeFormation.GetEffectivePermissionsForPath";
  let body: any = {};
  const wrappedBody: any = {
    GetEffectivePermissionsForPathRequest: serializeAws_json1_1GetEffectivePermissionsForPathRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetEffectivePermissionsForPath",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1GrantPermissionsCommand(
  input: GrantPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSLakeFormation.GrantPermissions";
  let body: any = {};
  const wrappedBody: any = {
    GrantPermissionsRequest: serializeAws_json1_1GrantPermissionsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GrantPermissions",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1ListPermissionsCommand(
  input: ListPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSLakeFormation.ListPermissions";
  let body: any = {};
  const wrappedBody: any = {
    ListPermissionsRequest: serializeAws_json1_1ListPermissionsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListPermissions",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1ListResourcesCommand(
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSLakeFormation.ListResources";
  let body: any = {};
  const wrappedBody: any = {
    ListResourcesRequest: serializeAws_json1_1ListResourcesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListResources",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1PutDataLakeSettingsCommand(
  input: PutDataLakeSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSLakeFormation.PutDataLakeSettings";
  let body: any = {};
  const wrappedBody: any = {
    PutDataLakeSettingsRequest: serializeAws_json1_1PutDataLakeSettingsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutDataLakeSettings",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1RegisterResourceCommand(
  input: RegisterResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSLakeFormation.RegisterResource";
  let body: any = {};
  const wrappedBody: any = {
    RegisterResourceRequest: serializeAws_json1_1RegisterResourceRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RegisterResource",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1RevokePermissionsCommand(
  input: RevokePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSLakeFormation.RevokePermissions";
  let body: any = {};
  const wrappedBody: any = {
    RevokePermissionsRequest: serializeAws_json1_1RevokePermissionsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RevokePermissions",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1UpdateResourceCommand(
  input: UpdateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSLakeFormation.UpdateResource";
  let body: any = {};
  const wrappedBody: any = {
    UpdateResourceRequest: serializeAws_json1_1UpdateResourceRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateResource",
    headers: headers,
    body: body,
  });
}

export async function deserializeAws_json1_1BatchGrantPermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGrantPermissionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGrantPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGrantPermissionsResponse(data, context);
  const response: BatchGrantPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGrantPermissionsResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1BatchGrantPermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<BatchGrantPermissionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.michigan#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1BatchRevokePermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchRevokePermissionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchRevokePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1BatchRevokePermissionsResponse(data, context);
  const response: BatchRevokePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchRevokePermissionsResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1BatchRevokePermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<BatchRevokePermissionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.michigan#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeregisterResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeregisterResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterResourceResponse(data, context);
  const response: DeregisterResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterResourceResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeregisterResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeregisterResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
      response = await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.michigan#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeResourceResponse(data, context);
  const response: DescribeResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeResourceResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
      response = await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.michigan#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetDataLakeSettingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataLakeSettingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDataLakeSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1GetDataLakeSettingsResponse(data, context);
  const response: GetDataLakeSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDataLakeSettingsResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDataLakeSettingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetDataLakeSettingsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
      response = await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.michigan#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetEffectivePermissionsForPathCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEffectivePermissionsForPathCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetEffectivePermissionsForPathCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1GetEffectivePermissionsForPathResponse(data, context);
  const response: GetEffectivePermissionsForPathCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEffectivePermissionsForPathResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetEffectivePermissionsForPathCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetEffectivePermissionsForPathCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
      response = await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.michigan#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GrantPermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantPermissionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GrantPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1GrantPermissionsResponse(data, context);
  const response: GrantPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GrantPermissionsResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GrantPermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GrantPermissionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.michigan.common.exceptions#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
      response = await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.michigan#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListPermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1ListPermissionsResponse(data, context);
  const response: ListPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPermissionsResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListPermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListPermissionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.michigan#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourcesResponse(data, context);
  const response: ListResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResourcesResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListResourcesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.michigan#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutDataLakeSettingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataLakeSettingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutDataLakeSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1PutDataLakeSettingsResponse(data, context);
  const response: PutDataLakeSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutDataLakeSettingsResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutDataLakeSettingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<PutDataLakeSettingsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.michigan#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RegisterResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterResourceResponse(data, context);
  const response: RegisterResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterResourceResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RegisterResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<RegisterResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.michigan.common.exceptions#AlreadyExistsException":
      response = await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context);
      break;
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.michigan#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1RevokePermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokePermissionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RevokePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1RevokePermissionsResponse(data, context);
  const response: RevokePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RevokePermissionsResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RevokePermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<RevokePermissionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.michigan.common.exceptions#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
      response = await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.michigan#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateResourceResponse(data, context);
  const response: UpdateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateResourceResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdateResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
      response = await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.michigan#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const deserialized: any = deserializeAws_json1_1AlreadyExistsException(output.body, context);
  const contents: AlreadyExistsException = {
    __type: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(output.body, context);
  const contents: ConcurrentModificationException = {
    __type: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EntityNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<EntityNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1EntityNotFoundException(output.body, context);
  const contents: EntityNotFoundException = {
    __type: "EntityNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const deserialized: any = deserializeAws_json1_1InternalServiceException(output.body, context);
  const contents: InternalServiceException = {
    __type: "InternalServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const deserialized: any = deserializeAws_json1_1InvalidInputException(output.body, context);
  const contents: InvalidInputException = {
    __type: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OperationTimeoutExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<OperationTimeoutException> => {
  const deserialized: any = deserializeAws_json1_1OperationTimeoutException(output.body, context);
  const contents: OperationTimeoutException = {
    __type: "OperationTimeoutException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1BatchGrantPermissionsRequest = (
  input: BatchGrantPermissionsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CatalogId !== undefined) {
    bodyParams['CatalogId'] = input.CatalogId;
  }
  if (input.Entries !== undefined) {
    bodyParams['Entries'] = serializeAws_json1_1BatchPermissionsRequestEntryList(input.Entries, context);
  }
  return bodyParams;
}

const serializeAws_json1_1BatchPermissionsRequestEntry = (
  input: BatchPermissionsRequestEntry,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams['Id'] = input.Id;
  }
  if (input.Permissions !== undefined) {
    bodyParams['Permissions'] = serializeAws_json1_1PermissionList(input.Permissions, context);
  }
  if (input.PermissionsWithGrantOption !== undefined) {
    bodyParams['PermissionsWithGrantOption'] = serializeAws_json1_1PermissionList(input.PermissionsWithGrantOption, context);
  }
  if (input.Principal !== undefined) {
    bodyParams['Principal'] = serializeAws_json1_1DataLakePrincipal(input.Principal, context);
  }
  if (input.Resource !== undefined) {
    bodyParams['Resource'] = serializeAws_json1_1Resource(input.Resource, context);
  }
  return bodyParams;
}

const serializeAws_json1_1BatchPermissionsRequestEntryList = (
  input: Array<BatchPermissionsRequestEntry>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1BatchPermissionsRequestEntry(entry, context)
  );
}

const serializeAws_json1_1BatchRevokePermissionsRequest = (
  input: BatchRevokePermissionsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CatalogId !== undefined) {
    bodyParams['CatalogId'] = input.CatalogId;
  }
  if (input.Entries !== undefined) {
    bodyParams['Entries'] = serializeAws_json1_1BatchPermissionsRequestEntryList(input.Entries, context);
  }
  return bodyParams;
}

const serializeAws_json1_1CatalogResource = (
  input: CatalogResource,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
}

const serializeAws_json1_1ColumnNames = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1ColumnWildcard = (
  input: ColumnWildcard,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ExcludedColumnNames !== undefined) {
    bodyParams['ExcludedColumnNames'] = serializeAws_json1_1ColumnNames(input.ExcludedColumnNames, context);
  }
  return bodyParams;
}

const serializeAws_json1_1DataLakePrincipal = (
  input: DataLakePrincipal,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DataLakePrincipalIdentifier !== undefined) {
    bodyParams['DataLakePrincipalIdentifier'] = input.DataLakePrincipalIdentifier;
  }
  return bodyParams;
}

const serializeAws_json1_1DataLakePrincipalList = (
  input: Array<DataLakePrincipal>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1DataLakePrincipal(entry, context)
  );
}

const serializeAws_json1_1DataLakeSettings = (
  input: DataLakeSettings,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CreateDatabaseDefaultPermissions !== undefined) {
    bodyParams['CreateDatabaseDefaultPermissions'] = serializeAws_json1_1PrincipalPermissionsList(input.CreateDatabaseDefaultPermissions, context);
  }
  if (input.CreateTableDefaultPermissions !== undefined) {
    bodyParams['CreateTableDefaultPermissions'] = serializeAws_json1_1PrincipalPermissionsList(input.CreateTableDefaultPermissions, context);
  }
  if (input.DataLakeAdmins !== undefined) {
    bodyParams['DataLakeAdmins'] = serializeAws_json1_1DataLakePrincipalList(input.DataLakeAdmins, context);
  }
  return bodyParams;
}

const serializeAws_json1_1DataLocationResource = (
  input: DataLocationResource,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams['ResourceArn'] = input.ResourceArn;
  }
  return bodyParams;
}

const serializeAws_json1_1DatabaseResource = (
  input: DatabaseResource,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams['Name'] = input.Name;
  }
  return bodyParams;
}

const serializeAws_json1_1DeregisterResourceRequest = (
  input: DeregisterResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams['ResourceArn'] = input.ResourceArn;
  }
  return bodyParams;
}

const serializeAws_json1_1DescribeResourceRequest = (
  input: DescribeResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams['ResourceArn'] = input.ResourceArn;
  }
  return bodyParams;
}

const serializeAws_json1_1GetDataLakeSettingsRequest = (
  input: GetDataLakeSettingsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CatalogId !== undefined) {
    bodyParams['CatalogId'] = input.CatalogId;
  }
  return bodyParams;
}

const serializeAws_json1_1GetEffectivePermissionsForPathRequest = (
  input: GetEffectivePermissionsForPathRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CatalogId !== undefined) {
    bodyParams['CatalogId'] = input.CatalogId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  if (input.ResourceArn !== undefined) {
    bodyParams['ResourceArn'] = input.ResourceArn;
  }
  return bodyParams;
}

const serializeAws_json1_1GrantPermissionsRequest = (
  input: GrantPermissionsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CatalogId !== undefined) {
    bodyParams['CatalogId'] = input.CatalogId;
  }
  if (input.Permissions !== undefined) {
    bodyParams['Permissions'] = serializeAws_json1_1PermissionList(input.Permissions, context);
  }
  if (input.PermissionsWithGrantOption !== undefined) {
    bodyParams['PermissionsWithGrantOption'] = serializeAws_json1_1PermissionList(input.PermissionsWithGrantOption, context);
  }
  if (input.Principal !== undefined) {
    bodyParams['Principal'] = serializeAws_json1_1DataLakePrincipal(input.Principal, context);
  }
  if (input.Resource !== undefined) {
    bodyParams['Resource'] = serializeAws_json1_1Resource(input.Resource, context);
  }
  return bodyParams;
}

const serializeAws_json1_1ListPermissionsRequest = (
  input: ListPermissionsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CatalogId !== undefined) {
    bodyParams['CatalogId'] = input.CatalogId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  if (input.Principal !== undefined) {
    bodyParams['Principal'] = serializeAws_json1_1DataLakePrincipal(input.Principal, context);
  }
  if (input.Resource !== undefined) {
    bodyParams['Resource'] = serializeAws_json1_1Resource(input.Resource, context);
  }
  if (input.ResourceType !== undefined) {
    bodyParams['ResourceType'] = input.ResourceType;
  }
  return bodyParams;
}

const serializeAws_json1_1ListResourcesRequest = (
  input: ListResourcesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.FilterConditionList !== undefined) {
    bodyParams['FilterConditionList'] = serializeAws_json1_1FilterConditionList(input.FilterConditionList, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  return bodyParams;
}

const serializeAws_json1_1PermissionList = (
  input: Array<Permission | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1PrincipalPermissions = (
  input: PrincipalPermissions,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Permissions !== undefined) {
    bodyParams['Permissions'] = serializeAws_json1_1PermissionList(input.Permissions, context);
  }
  if (input.Principal !== undefined) {
    bodyParams['Principal'] = serializeAws_json1_1DataLakePrincipal(input.Principal, context);
  }
  return bodyParams;
}

const serializeAws_json1_1PrincipalPermissionsList = (
  input: Array<PrincipalPermissions>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1PrincipalPermissions(entry, context)
  );
}

const serializeAws_json1_1PutDataLakeSettingsRequest = (
  input: PutDataLakeSettingsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CatalogId !== undefined) {
    bodyParams['CatalogId'] = input.CatalogId;
  }
  if (input.DataLakeSettings !== undefined) {
    bodyParams['DataLakeSettings'] = serializeAws_json1_1DataLakeSettings(input.DataLakeSettings, context);
  }
  return bodyParams;
}

const serializeAws_json1_1RegisterResourceRequest = (
  input: RegisterResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams['ResourceArn'] = input.ResourceArn;
  }
  if (input.RoleArn !== undefined) {
    bodyParams['RoleArn'] = input.RoleArn;
  }
  if (input.UseServiceLinkedRole !== undefined) {
    bodyParams['UseServiceLinkedRole'] = input.UseServiceLinkedRole;
  }
  return bodyParams;
}

const serializeAws_json1_1Resource = (
  input: Resource,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Catalog !== undefined) {
    bodyParams['Catalog'] = serializeAws_json1_1CatalogResource(input.Catalog, context);
  }
  if (input.DataLocation !== undefined) {
    bodyParams['DataLocation'] = serializeAws_json1_1DataLocationResource(input.DataLocation, context);
  }
  if (input.Database !== undefined) {
    bodyParams['Database'] = serializeAws_json1_1DatabaseResource(input.Database, context);
  }
  if (input.Table !== undefined) {
    bodyParams['Table'] = serializeAws_json1_1TableResource(input.Table, context);
  }
  if (input.TableWithColumns !== undefined) {
    bodyParams['TableWithColumns'] = serializeAws_json1_1TableWithColumnsResource(input.TableWithColumns, context);
  }
  return bodyParams;
}

const serializeAws_json1_1RevokePermissionsRequest = (
  input: RevokePermissionsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CatalogId !== undefined) {
    bodyParams['CatalogId'] = input.CatalogId;
  }
  if (input.Permissions !== undefined) {
    bodyParams['Permissions'] = serializeAws_json1_1PermissionList(input.Permissions, context);
  }
  if (input.PermissionsWithGrantOption !== undefined) {
    bodyParams['PermissionsWithGrantOption'] = serializeAws_json1_1PermissionList(input.PermissionsWithGrantOption, context);
  }
  if (input.Principal !== undefined) {
    bodyParams['Principal'] = serializeAws_json1_1DataLakePrincipal(input.Principal, context);
  }
  if (input.Resource !== undefined) {
    bodyParams['Resource'] = serializeAws_json1_1Resource(input.Resource, context);
  }
  return bodyParams;
}

const serializeAws_json1_1TableResource = (
  input: TableResource,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DatabaseName !== undefined) {
    bodyParams['DatabaseName'] = input.DatabaseName;
  }
  if (input.Name !== undefined) {
    bodyParams['Name'] = input.Name;
  }
  return bodyParams;
}

const serializeAws_json1_1TableWithColumnsResource = (
  input: TableWithColumnsResource,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ColumnNames !== undefined) {
    bodyParams['ColumnNames'] = serializeAws_json1_1ColumnNames(input.ColumnNames, context);
  }
  if (input.ColumnWildcard !== undefined) {
    bodyParams['ColumnWildcard'] = serializeAws_json1_1ColumnWildcard(input.ColumnWildcard, context);
  }
  if (input.DatabaseName !== undefined) {
    bodyParams['DatabaseName'] = input.DatabaseName;
  }
  if (input.Name !== undefined) {
    bodyParams['Name'] = input.Name;
  }
  return bodyParams;
}

const serializeAws_json1_1UpdateResourceRequest = (
  input: UpdateResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams['ResourceArn'] = input.ResourceArn;
  }
  if (input.RoleArn !== undefined) {
    bodyParams['RoleArn'] = input.RoleArn;
  }
  return bodyParams;
}

const serializeAws_json1_1FilterCondition = (
  input: FilterCondition,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ComparisonOperator !== undefined) {
    bodyParams['ComparisonOperator'] = input.ComparisonOperator;
  }
  if (input.Field !== undefined) {
    bodyParams['Field'] = input.Field;
  }
  if (input.StringValueList !== undefined) {
    bodyParams['StringValueList'] = serializeAws_json1_1StringValueList(input.StringValueList, context);
  }
  return bodyParams;
}

const serializeAws_json1_1FilterConditionList = (
  input: Array<FilterCondition>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1FilterCondition(entry, context)
  );
}

const serializeAws_json1_1StringValueList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const deserializeAws_json1_1BatchGrantPermissionsResponse = (
  output: any,
  context: __SerdeContext
): BatchGrantPermissionsResponse => {
  let contents: any = {
    __type: "BatchGrantPermissionsResponse",
    Failures: undefined,
  };
  if (output.Failures !== undefined) {
    contents.Failures = deserializeAws_json1_1BatchPermissionsFailureList(output.Failures, context);
  }
  return contents;
}

const deserializeAws_json1_1BatchPermissionsFailureEntry = (
  output: any,
  context: __SerdeContext
): BatchPermissionsFailureEntry => {
  let contents: any = {
    __type: "BatchPermissionsFailureEntry",
    Error: undefined,
    RequestEntry: undefined,
  };
  if (output.Error !== undefined) {
    contents.Error = deserializeAws_json1_1ErrorDetail(output.Error, context);
  }
  if (output.RequestEntry !== undefined) {
    contents.RequestEntry = deserializeAws_json1_1BatchPermissionsRequestEntry(output.RequestEntry, context);
  }
  return contents;
}

const deserializeAws_json1_1BatchPermissionsFailureList = (
  output: any,
  context: __SerdeContext
): Array<BatchPermissionsFailureEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchPermissionsFailureEntry(entry, context)
  );
}

const deserializeAws_json1_1BatchPermissionsRequestEntry = (
  output: any,
  context: __SerdeContext
): BatchPermissionsRequestEntry => {
  let contents: any = {
    __type: "BatchPermissionsRequestEntry",
    Id: undefined,
    Permissions: undefined,
    PermissionsWithGrantOption: undefined,
    Principal: undefined,
    Resource: undefined,
  };
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Permissions !== undefined) {
    contents.Permissions = deserializeAws_json1_1PermissionList(output.Permissions, context);
  }
  if (output.PermissionsWithGrantOption !== undefined) {
    contents.PermissionsWithGrantOption = deserializeAws_json1_1PermissionList(output.PermissionsWithGrantOption, context);
  }
  if (output.Principal !== undefined) {
    contents.Principal = deserializeAws_json1_1DataLakePrincipal(output.Principal, context);
  }
  if (output.Resource !== undefined) {
    contents.Resource = deserializeAws_json1_1Resource(output.Resource, context);
  }
  return contents;
}

const deserializeAws_json1_1BatchRevokePermissionsResponse = (
  output: any,
  context: __SerdeContext
): BatchRevokePermissionsResponse => {
  let contents: any = {
    __type: "BatchRevokePermissionsResponse",
    Failures: undefined,
  };
  if (output.Failures !== undefined) {
    contents.Failures = deserializeAws_json1_1BatchPermissionsFailureList(output.Failures, context);
  }
  return contents;
}

const deserializeAws_json1_1CatalogResource = (
  output: any,
  context: __SerdeContext
): CatalogResource => {
  let contents: any = {
    __type: "CatalogResource",
  };
  return contents;
}

const deserializeAws_json1_1ColumnNames = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_json1_1ColumnWildcard = (
  output: any,
  context: __SerdeContext
): ColumnWildcard => {
  let contents: any = {
    __type: "ColumnWildcard",
    ExcludedColumnNames: undefined,
  };
  if (output.ExcludedColumnNames !== undefined) {
    contents.ExcludedColumnNames = deserializeAws_json1_1ColumnNames(output.ExcludedColumnNames, context);
  }
  return contents;
}

const deserializeAws_json1_1DataLakePrincipal = (
  output: any,
  context: __SerdeContext
): DataLakePrincipal => {
  let contents: any = {
    __type: "DataLakePrincipal",
    DataLakePrincipalIdentifier: undefined,
  };
  if (output.DataLakePrincipalIdentifier !== undefined) {
    contents.DataLakePrincipalIdentifier = output.DataLakePrincipalIdentifier;
  }
  return contents;
}

const deserializeAws_json1_1DataLakePrincipalList = (
  output: any,
  context: __SerdeContext
): Array<DataLakePrincipal> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DataLakePrincipal(entry, context)
  );
}

const deserializeAws_json1_1DataLakeSettings = (
  output: any,
  context: __SerdeContext
): DataLakeSettings => {
  let contents: any = {
    __type: "DataLakeSettings",
    CreateDatabaseDefaultPermissions: undefined,
    CreateTableDefaultPermissions: undefined,
    DataLakeAdmins: undefined,
  };
  if (output.CreateDatabaseDefaultPermissions !== undefined) {
    contents.CreateDatabaseDefaultPermissions = deserializeAws_json1_1PrincipalPermissionsList(output.CreateDatabaseDefaultPermissions, context);
  }
  if (output.CreateTableDefaultPermissions !== undefined) {
    contents.CreateTableDefaultPermissions = deserializeAws_json1_1PrincipalPermissionsList(output.CreateTableDefaultPermissions, context);
  }
  if (output.DataLakeAdmins !== undefined) {
    contents.DataLakeAdmins = deserializeAws_json1_1DataLakePrincipalList(output.DataLakeAdmins, context);
  }
  return contents;
}

const deserializeAws_json1_1DataLocationResource = (
  output: any,
  context: __SerdeContext
): DataLocationResource => {
  let contents: any = {
    __type: "DataLocationResource",
    ResourceArn: undefined,
  };
  if (output.ResourceArn !== undefined) {
    contents.ResourceArn = output.ResourceArn;
  }
  return contents;
}

const deserializeAws_json1_1DatabaseResource = (
  output: any,
  context: __SerdeContext
): DatabaseResource => {
  let contents: any = {
    __type: "DatabaseResource",
    Name: undefined,
  };
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  return contents;
}

const deserializeAws_json1_1DeregisterResourceResponse = (
  output: any,
  context: __SerdeContext
): DeregisterResourceResponse => {
  let contents: any = {
    __type: "DeregisterResourceResponse",
  };
  return contents;
}

const deserializeAws_json1_1DescribeResourceResponse = (
  output: any,
  context: __SerdeContext
): DescribeResourceResponse => {
  let contents: any = {
    __type: "DescribeResourceResponse",
    ResourceInfo: undefined,
  };
  if (output.ResourceInfo !== undefined) {
    contents.ResourceInfo = deserializeAws_json1_1ResourceInfo(output.ResourceInfo, context);
  }
  return contents;
}

const deserializeAws_json1_1GetDataLakeSettingsResponse = (
  output: any,
  context: __SerdeContext
): GetDataLakeSettingsResponse => {
  let contents: any = {
    __type: "GetDataLakeSettingsResponse",
    DataLakeSettings: undefined,
  };
  if (output.DataLakeSettings !== undefined) {
    contents.DataLakeSettings = deserializeAws_json1_1DataLakeSettings(output.DataLakeSettings, context);
  }
  return contents;
}

const deserializeAws_json1_1GetEffectivePermissionsForPathResponse = (
  output: any,
  context: __SerdeContext
): GetEffectivePermissionsForPathResponse => {
  let contents: any = {
    __type: "GetEffectivePermissionsForPathResponse",
    NextToken: undefined,
    Permissions: undefined,
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Permissions !== undefined) {
    contents.Permissions = deserializeAws_json1_1PrincipalResourcePermissionsList(output.Permissions, context);
  }
  return contents;
}

const deserializeAws_json1_1GrantPermissionsResponse = (
  output: any,
  context: __SerdeContext
): GrantPermissionsResponse => {
  let contents: any = {
    __type: "GrantPermissionsResponse",
  };
  return contents;
}

const deserializeAws_json1_1ListPermissionsResponse = (
  output: any,
  context: __SerdeContext
): ListPermissionsResponse => {
  let contents: any = {
    __type: "ListPermissionsResponse",
    NextToken: undefined,
    PrincipalResourcePermissions: undefined,
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.PrincipalResourcePermissions !== undefined) {
    contents.PrincipalResourcePermissions = deserializeAws_json1_1PrincipalResourcePermissionsList(output.PrincipalResourcePermissions, context);
  }
  return contents;
}

const deserializeAws_json1_1ListResourcesResponse = (
  output: any,
  context: __SerdeContext
): ListResourcesResponse => {
  let contents: any = {
    __type: "ListResourcesResponse",
    NextToken: undefined,
    ResourceInfoList: undefined,
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.ResourceInfoList !== undefined) {
    contents.ResourceInfoList = deserializeAws_json1_1ResourceInfoList(output.ResourceInfoList, context);
  }
  return contents;
}

const deserializeAws_json1_1PermissionList = (
  output: any,
  context: __SerdeContext
): Array<Permission | string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_json1_1PrincipalPermissions = (
  output: any,
  context: __SerdeContext
): PrincipalPermissions => {
  let contents: any = {
    __type: "PrincipalPermissions",
    Permissions: undefined,
    Principal: undefined,
  };
  if (output.Permissions !== undefined) {
    contents.Permissions = deserializeAws_json1_1PermissionList(output.Permissions, context);
  }
  if (output.Principal !== undefined) {
    contents.Principal = deserializeAws_json1_1DataLakePrincipal(output.Principal, context);
  }
  return contents;
}

const deserializeAws_json1_1PrincipalPermissionsList = (
  output: any,
  context: __SerdeContext
): Array<PrincipalPermissions> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PrincipalPermissions(entry, context)
  );
}

const deserializeAws_json1_1PrincipalResourcePermissions = (
  output: any,
  context: __SerdeContext
): PrincipalResourcePermissions => {
  let contents: any = {
    __type: "PrincipalResourcePermissions",
    Permissions: undefined,
    PermissionsWithGrantOption: undefined,
    Principal: undefined,
    Resource: undefined,
  };
  if (output.Permissions !== undefined) {
    contents.Permissions = deserializeAws_json1_1PermissionList(output.Permissions, context);
  }
  if (output.PermissionsWithGrantOption !== undefined) {
    contents.PermissionsWithGrantOption = deserializeAws_json1_1PermissionList(output.PermissionsWithGrantOption, context);
  }
  if (output.Principal !== undefined) {
    contents.Principal = deserializeAws_json1_1DataLakePrincipal(output.Principal, context);
  }
  if (output.Resource !== undefined) {
    contents.Resource = deserializeAws_json1_1Resource(output.Resource, context);
  }
  return contents;
}

const deserializeAws_json1_1PrincipalResourcePermissionsList = (
  output: any,
  context: __SerdeContext
): Array<PrincipalResourcePermissions> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PrincipalResourcePermissions(entry, context)
  );
}

const deserializeAws_json1_1PutDataLakeSettingsResponse = (
  output: any,
  context: __SerdeContext
): PutDataLakeSettingsResponse => {
  let contents: any = {
    __type: "PutDataLakeSettingsResponse",
  };
  return contents;
}

const deserializeAws_json1_1RegisterResourceResponse = (
  output: any,
  context: __SerdeContext
): RegisterResourceResponse => {
  let contents: any = {
    __type: "RegisterResourceResponse",
  };
  return contents;
}

const deserializeAws_json1_1Resource = (
  output: any,
  context: __SerdeContext
): Resource => {
  let contents: any = {
    __type: "Resource",
    Catalog: undefined,
    DataLocation: undefined,
    Database: undefined,
    Table: undefined,
    TableWithColumns: undefined,
  };
  if (output.Catalog !== undefined) {
    contents.Catalog = deserializeAws_json1_1CatalogResource(output.Catalog, context);
  }
  if (output.DataLocation !== undefined) {
    contents.DataLocation = deserializeAws_json1_1DataLocationResource(output.DataLocation, context);
  }
  if (output.Database !== undefined) {
    contents.Database = deserializeAws_json1_1DatabaseResource(output.Database, context);
  }
  if (output.Table !== undefined) {
    contents.Table = deserializeAws_json1_1TableResource(output.Table, context);
  }
  if (output.TableWithColumns !== undefined) {
    contents.TableWithColumns = deserializeAws_json1_1TableWithColumnsResource(output.TableWithColumns, context);
  }
  return contents;
}

const deserializeAws_json1_1RevokePermissionsResponse = (
  output: any,
  context: __SerdeContext
): RevokePermissionsResponse => {
  let contents: any = {
    __type: "RevokePermissionsResponse",
  };
  return contents;
}

const deserializeAws_json1_1TableResource = (
  output: any,
  context: __SerdeContext
): TableResource => {
  let contents: any = {
    __type: "TableResource",
    DatabaseName: undefined,
    Name: undefined,
  };
  if (output.DatabaseName !== undefined) {
    contents.DatabaseName = output.DatabaseName;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  return contents;
}

const deserializeAws_json1_1TableWithColumnsResource = (
  output: any,
  context: __SerdeContext
): TableWithColumnsResource => {
  let contents: any = {
    __type: "TableWithColumnsResource",
    ColumnNames: undefined,
    ColumnWildcard: undefined,
    DatabaseName: undefined,
    Name: undefined,
  };
  if (output.ColumnNames !== undefined) {
    contents.ColumnNames = deserializeAws_json1_1ColumnNames(output.ColumnNames, context);
  }
  if (output.ColumnWildcard !== undefined) {
    contents.ColumnWildcard = deserializeAws_json1_1ColumnWildcard(output.ColumnWildcard, context);
  }
  if (output.DatabaseName !== undefined) {
    contents.DatabaseName = output.DatabaseName;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  return contents;
}

const deserializeAws_json1_1UpdateResourceResponse = (
  output: any,
  context: __SerdeContext
): UpdateResourceResponse => {
  let contents: any = {
    __type: "UpdateResourceResponse",
  };
  return contents;
}

const deserializeAws_json1_1AlreadyExistsException = (
  output: any,
  context: __SerdeContext
): AlreadyExistsException => {
  let contents: any = {
    __type: "AlreadyExistsException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    __type: "ConcurrentModificationException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1EntityNotFoundException = (
  output: any,
  context: __SerdeContext
): EntityNotFoundException => {
  let contents: any = {
    __type: "EntityNotFoundException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1ErrorDetail = (
  output: any,
  context: __SerdeContext
): ErrorDetail => {
  let contents: any = {
    __type: "ErrorDetail",
    ErrorCode: undefined,
    ErrorMessage: undefined,
  };
  if (output.ErrorCode !== undefined) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  return contents;
}

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  let contents: any = {
    __type: "InternalServiceException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1OperationTimeoutException = (
  output: any,
  context: __SerdeContext
): OperationTimeoutException => {
  let contents: any = {
    __type: "OperationTimeoutException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1ResourceInfo = (
  output: any,
  context: __SerdeContext
): ResourceInfo => {
  let contents: any = {
    __type: "ResourceInfo",
    LastModified: undefined,
    ResourceArn: undefined,
    RoleArn: undefined,
  };
  if (output.LastModified !== undefined) {
    contents.LastModified = new Date(output.LastModified % 1 != 0 ? Math.round(output.LastModified * 1000) : output.LastModified);
  }
  if (output.ResourceArn !== undefined) {
    contents.ResourceArn = output.ResourceArn;
  }
  if (output.RoleArn !== undefined) {
    contents.RoleArn = output.RoleArn;
  }
  return contents;
}

const deserializeAws_json1_1ResourceInfoList = (
  output: any,
  context: __SerdeContext
): Array<ResourceInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourceInfo(entry, context)
  );
}

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
