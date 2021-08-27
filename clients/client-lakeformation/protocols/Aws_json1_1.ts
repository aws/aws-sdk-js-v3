import {
  AddLFTagsToResourceCommandInput,
  AddLFTagsToResourceCommandOutput,
} from "../commands/AddLFTagsToResourceCommand";
import {
  BatchGrantPermissionsCommandInput,
  BatchGrantPermissionsCommandOutput,
} from "../commands/BatchGrantPermissionsCommand";
import {
  BatchRevokePermissionsCommandInput,
  BatchRevokePermissionsCommandOutput,
} from "../commands/BatchRevokePermissionsCommand";
import { CreateLFTagCommandInput, CreateLFTagCommandOutput } from "../commands/CreateLFTagCommand";
import { DeleteLFTagCommandInput, DeleteLFTagCommandOutput } from "../commands/DeleteLFTagCommand";
import { DeregisterResourceCommandInput, DeregisterResourceCommandOutput } from "../commands/DeregisterResourceCommand";
import { DescribeResourceCommandInput, DescribeResourceCommandOutput } from "../commands/DescribeResourceCommand";
import {
  GetDataLakeSettingsCommandInput,
  GetDataLakeSettingsCommandOutput,
} from "../commands/GetDataLakeSettingsCommand";
import {
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput,
} from "../commands/GetEffectivePermissionsForPathCommand";
import { GetLFTagCommandInput, GetLFTagCommandOutput } from "../commands/GetLFTagCommand";
import { GetResourceLFTagsCommandInput, GetResourceLFTagsCommandOutput } from "../commands/GetResourceLFTagsCommand";
import { GrantPermissionsCommandInput, GrantPermissionsCommandOutput } from "../commands/GrantPermissionsCommand";
import { ListLFTagsCommandInput, ListLFTagsCommandOutput } from "../commands/ListLFTagsCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "../commands/ListPermissionsCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "../commands/ListResourcesCommand";
import {
  PutDataLakeSettingsCommandInput,
  PutDataLakeSettingsCommandOutput,
} from "../commands/PutDataLakeSettingsCommand";
import { RegisterResourceCommandInput, RegisterResourceCommandOutput } from "../commands/RegisterResourceCommand";
import {
  RemoveLFTagsFromResourceCommandInput,
  RemoveLFTagsFromResourceCommandOutput,
} from "../commands/RemoveLFTagsFromResourceCommand";
import { RevokePermissionsCommandInput, RevokePermissionsCommandOutput } from "../commands/RevokePermissionsCommand";
import {
  SearchDatabasesByLFTagsCommandInput,
  SearchDatabasesByLFTagsCommandOutput,
} from "../commands/SearchDatabasesByLFTagsCommand";
import {
  SearchTablesByLFTagsCommandInput,
  SearchTablesByLFTagsCommandOutput,
} from "../commands/SearchTablesByLFTagsCommand";
import { UpdateLFTagCommandInput, UpdateLFTagCommandOutput } from "../commands/UpdateLFTagCommand";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "../commands/UpdateResourceCommand";
import {
  AccessDeniedException,
  AddLFTagsToResourceRequest,
  AddLFTagsToResourceResponse,
  AlreadyExistsException,
  BatchGrantPermissionsRequest,
  BatchGrantPermissionsResponse,
  BatchPermissionsFailureEntry,
  BatchPermissionsRequestEntry,
  BatchRevokePermissionsRequest,
  BatchRevokePermissionsResponse,
  CatalogResource,
  ColumnLFTag,
  ColumnWildcard,
  ConcurrentModificationException,
  CreateLFTagRequest,
  CreateLFTagResponse,
  DataLakePrincipal,
  DataLakeSettings,
  DataLocationResource,
  DatabaseResource,
  DeleteLFTagRequest,
  DeleteLFTagResponse,
  DeregisterResourceRequest,
  DeregisterResourceResponse,
  DescribeResourceRequest,
  DescribeResourceResponse,
  DetailsMap,
  EntityNotFoundException,
  ErrorDetail,
  FilterCondition,
  GetDataLakeSettingsRequest,
  GetDataLakeSettingsResponse,
  GetEffectivePermissionsForPathRequest,
  GetEffectivePermissionsForPathResponse,
  GetLFTagRequest,
  GetLFTagResponse,
  GetResourceLFTagsRequest,
  GetResourceLFTagsResponse,
  GlueEncryptionException,
  GrantPermissionsRequest,
  GrantPermissionsResponse,
  InternalServiceException,
  InvalidInputException,
  LFTag,
  LFTagError,
  LFTagKeyResource,
  LFTagPair,
  LFTagPolicyResource,
  ListLFTagsRequest,
  ListLFTagsResponse,
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
  RemoveLFTagsFromResourceRequest,
  RemoveLFTagsFromResourceResponse,
  Resource,
  ResourceInfo,
  ResourceNumberLimitExceededException,
  RevokePermissionsRequest,
  RevokePermissionsResponse,
  SearchDatabasesByLFTagsRequest,
  SearchDatabasesByLFTagsResponse,
  SearchTablesByLFTagsRequest,
  SearchTablesByLFTagsResponse,
  TableResource,
  TableWildcard,
  TableWithColumnsResource,
  TaggedDatabase,
  TaggedTable,
  UpdateLFTagRequest,
  UpdateLFTagResponse,
  UpdateResourceRequest,
  UpdateResourceResponse,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { expectString as __expectString } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1AddLFTagsToResourceCommand = async (
  input: AddLFTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.AddLFTagsToResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddLFTagsToResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchGrantPermissionsCommand = async (
  input: BatchGrantPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.BatchGrantPermissions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchGrantPermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchRevokePermissionsCommand = async (
  input: BatchRevokePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.BatchRevokePermissions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1BatchRevokePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLFTagCommand = async (
  input: CreateLFTagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.CreateLFTag",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLFTagRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLFTagCommand = async (
  input: DeleteLFTagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.DeleteLFTag",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLFTagRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterResourceCommand = async (
  input: DeregisterResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.DeregisterResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeResourceCommand = async (
  input: DescribeResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.DescribeResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDataLakeSettingsCommand = async (
  input: GetDataLakeSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.GetDataLakeSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDataLakeSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetEffectivePermissionsForPathCommand = async (
  input: GetEffectivePermissionsForPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.GetEffectivePermissionsForPath",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetEffectivePermissionsForPathRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLFTagCommand = async (
  input: GetLFTagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.GetLFTag",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLFTagRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetResourceLFTagsCommand = async (
  input: GetResourceLFTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.GetResourceLFTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetResourceLFTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GrantPermissionsCommand = async (
  input: GrantPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.GrantPermissions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GrantPermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLFTagsCommand = async (
  input: ListLFTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.ListLFTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLFTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPermissionsCommand = async (
  input: ListPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.ListPermissions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourcesCommand = async (
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.ListResources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutDataLakeSettingsCommand = async (
  input: PutDataLakeSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.PutDataLakeSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutDataLakeSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterResourceCommand = async (
  input: RegisterResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.RegisterResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveLFTagsFromResourceCommand = async (
  input: RemoveLFTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.RemoveLFTagsFromResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveLFTagsFromResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RevokePermissionsCommand = async (
  input: RevokePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.RevokePermissions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RevokePermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchDatabasesByLFTagsCommand = async (
  input: SearchDatabasesByLFTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.SearchDatabasesByLFTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchDatabasesByLFTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SearchTablesByLFTagsCommand = async (
  input: SearchTablesByLFTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.SearchTablesByLFTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SearchTablesByLFTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLFTagCommand = async (
  input: UpdateLFTagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.UpdateLFTag",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateLFTagRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateResourceCommand = async (
  input: UpdateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSLakeFormation.UpdateResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddLFTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddLFTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddLFTagsToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddLFTagsToResourceResponse(data, context);
  const response: AddLFTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddLFTagsToResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddLFTagsToResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1BatchGrantPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGrantPermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchGrantPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGrantPermissionsResponse(data, context);
  const response: BatchGrantPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGrantPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGrantPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1BatchRevokePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchRevokePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1BatchRevokePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchRevokePermissionsResponse(data, context);
  const response: BatchRevokePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchRevokePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchRevokePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateLFTagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLFTagCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLFTagCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLFTagResponse(data, context);
  const response: CreateLFTagCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLFTagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLFTagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.lakeformation#ResourceNumberLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteLFTagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLFTagCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLFTagCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLFTagResponse(data, context);
  const response: DeleteLFTagCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLFTagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLFTagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeregisterResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterResourceResponse(data, context);
  const response: DeregisterResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeResourceResponse(data, context);
  const response: DescribeResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDataLakeSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataLakeSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDataLakeSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDataLakeSettingsResponse(data, context);
  const response: GetDataLakeSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDataLakeSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataLakeSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetEffectivePermissionsForPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEffectivePermissionsForPathCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetEffectivePermissionsForPathCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEffectivePermissionsForPathResponse(data, context);
  const response: GetEffectivePermissionsForPathCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetEffectivePermissionsForPathCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEffectivePermissionsForPathCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetLFTagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLFTagCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLFTagCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLFTagResponse(data, context);
  const response: GetLFTagCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLFTagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLFTagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetResourceLFTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceLFTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetResourceLFTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetResourceLFTagsResponse(data, context);
  const response: GetResourceLFTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetResourceLFTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceLFTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.lakeformation#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GrantPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantPermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GrantPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GrantPermissionsResponse(data, context);
  const response: GrantPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GrantPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListLFTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLFTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLFTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLFTagsResponse(data, context);
  const response: ListLFTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLFTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLFTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPermissionsResponse(data, context);
  const response: ListPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourcesResponse(data, context);
  const response: ListResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1PutDataLakeSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataLakeSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutDataLakeSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutDataLakeSettingsResponse(data, context);
  const response: PutDataLakeSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutDataLakeSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataLakeSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RegisterResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterResourceResponse(data, context);
  const response: RegisterResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.lakeformation#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RemoveLFTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveLFTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveLFTagsFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveLFTagsFromResourceResponse(data, context);
  const response: RemoveLFTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveLFTagsFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveLFTagsFromResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.lakeformation#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RevokePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokePermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RevokePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RevokePermissionsResponse(data, context);
  const response: RevokePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RevokePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1SearchDatabasesByLFTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDatabasesByLFTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchDatabasesByLFTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchDatabasesByLFTagsResponse(data, context);
  const response: SearchDatabasesByLFTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchDatabasesByLFTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDatabasesByLFTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.lakeformation#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1SearchTablesByLFTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchTablesByLFTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SearchTablesByLFTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SearchTablesByLFTagsResponse(data, context);
  const response: SearchTablesByLFTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SearchTablesByLFTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchTablesByLFTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "GlueEncryptionException":
    case "com.amazonaws.lakeformation#GlueEncryptionException":
      response = {
        ...(await deserializeAws_json1_1GlueEncryptionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateLFTagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLFTagCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateLFTagCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateLFTagResponse(data, context);
  const response: UpdateLFTagCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateLFTagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLFTagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateResourceResponse(data, context);
  const response: UpdateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AlreadyExistsException(body, context);
  const contents: AlreadyExistsException = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EntityNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntityNotFoundException(body, context);
  const contents: EntityNotFoundException = {
    name: "EntityNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1GlueEncryptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlueEncryptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1GlueEncryptionException(body, context);
  const contents: GlueEncryptionException = {
    name: "GlueEncryptionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceException(body, context);
  const contents: InternalServiceException = {
    name: "InternalServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OperationTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationTimeoutException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationTimeoutException(body, context);
  const contents: OperationTimeoutException = {
    name: "OperationTimeoutException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNumberLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNumberLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNumberLimitExceededException(body, context);
  const contents: ResourceNumberLimitExceededException = {
    name: "ResourceNumberLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AddLFTagsToResourceRequest = (
  input: AddLFTagsToResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.LFTags !== undefined &&
      input.LFTags !== null && { LFTags: serializeAws_json1_1LFTagsList(input.LFTags, context) }),
    ...(input.Resource !== undefined &&
      input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }),
  };
};

const serializeAws_json1_1BatchGrantPermissionsRequest = (
  input: BatchGrantPermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Entries !== undefined &&
      input.Entries !== null && {
        Entries: serializeAws_json1_1BatchPermissionsRequestEntryList(input.Entries, context),
      }),
  };
};

const serializeAws_json1_1BatchPermissionsRequestEntry = (
  input: BatchPermissionsRequestEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && { Permissions: serializeAws_json1_1PermissionList(input.Permissions, context) }),
    ...(input.PermissionsWithGrantOption !== undefined &&
      input.PermissionsWithGrantOption !== null && {
        PermissionsWithGrantOption: serializeAws_json1_1PermissionList(input.PermissionsWithGrantOption, context),
      }),
    ...(input.Principal !== undefined &&
      input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) }),
    ...(input.Resource !== undefined &&
      input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }),
  };
};

const serializeAws_json1_1BatchPermissionsRequestEntryList = (
  input: BatchPermissionsRequestEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1BatchPermissionsRequestEntry(entry, context);
    });
};

const serializeAws_json1_1BatchRevokePermissionsRequest = (
  input: BatchRevokePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Entries !== undefined &&
      input.Entries !== null && {
        Entries: serializeAws_json1_1BatchPermissionsRequestEntryList(input.Entries, context),
      }),
  };
};

const serializeAws_json1_1CatalogResource = (input: CatalogResource, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1ColumnNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ColumnWildcard = (input: ColumnWildcard, context: __SerdeContext): any => {
  return {
    ...(input.ExcludedColumnNames !== undefined &&
      input.ExcludedColumnNames !== null && {
        ExcludedColumnNames: serializeAws_json1_1ColumnNames(input.ExcludedColumnNames, context),
      }),
  };
};

const serializeAws_json1_1CreateLFTagRequest = (input: CreateLFTagRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
    ...(input.TagValues !== undefined &&
      input.TagValues !== null && { TagValues: serializeAws_json1_1TagValueList(input.TagValues, context) }),
  };
};

const serializeAws_json1_1DatabaseResource = (input: DatabaseResource, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DataLakePrincipal = (input: DataLakePrincipal, context: __SerdeContext): any => {
  return {
    ...(input.DataLakePrincipalIdentifier !== undefined &&
      input.DataLakePrincipalIdentifier !== null && { DataLakePrincipalIdentifier: input.DataLakePrincipalIdentifier }),
  };
};

const serializeAws_json1_1DataLakePrincipalList = (input: DataLakePrincipal[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DataLakePrincipal(entry, context);
    });
};

const serializeAws_json1_1DataLakeSettings = (input: DataLakeSettings, context: __SerdeContext): any => {
  return {
    ...(input.CreateDatabaseDefaultPermissions !== undefined &&
      input.CreateDatabaseDefaultPermissions !== null && {
        CreateDatabaseDefaultPermissions: serializeAws_json1_1PrincipalPermissionsList(
          input.CreateDatabaseDefaultPermissions,
          context
        ),
      }),
    ...(input.CreateTableDefaultPermissions !== undefined &&
      input.CreateTableDefaultPermissions !== null && {
        CreateTableDefaultPermissions: serializeAws_json1_1PrincipalPermissionsList(
          input.CreateTableDefaultPermissions,
          context
        ),
      }),
    ...(input.DataLakeAdmins !== undefined &&
      input.DataLakeAdmins !== null && {
        DataLakeAdmins: serializeAws_json1_1DataLakePrincipalList(input.DataLakeAdmins, context),
      }),
    ...(input.TrustedResourceOwners !== undefined &&
      input.TrustedResourceOwners !== null && {
        TrustedResourceOwners: serializeAws_json1_1TrustedResourceOwners(input.TrustedResourceOwners, context),
      }),
  };
};

const serializeAws_json1_1DataLocationResource = (input: DataLocationResource, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1DeleteLFTagRequest = (input: DeleteLFTagRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
  };
};

const serializeAws_json1_1DeregisterResourceRequest = (
  input: DeregisterResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1DescribeResourceRequest = (input: DescribeResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1Expression = (input: LFTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1LFTag(entry, context);
    });
};

const serializeAws_json1_1FilterCondition = (input: FilterCondition, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator !== undefined &&
      input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.Field !== undefined && input.Field !== null && { Field: input.Field }),
    ...(input.StringValueList !== undefined &&
      input.StringValueList !== null && {
        StringValueList: serializeAws_json1_1StringValueList(input.StringValueList, context),
      }),
  };
};

const serializeAws_json1_1FilterConditionList = (input: FilterCondition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1FilterCondition(entry, context);
    });
};

const serializeAws_json1_1GetDataLakeSettingsRequest = (
  input: GetDataLakeSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
  };
};

const serializeAws_json1_1GetEffectivePermissionsForPathRequest = (
  input: GetEffectivePermissionsForPathRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1GetLFTagRequest = (input: GetLFTagRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
  };
};

const serializeAws_json1_1GetResourceLFTagsRequest = (
  input: GetResourceLFTagsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Resource !== undefined &&
      input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }),
    ...(input.ShowAssignedLFTags !== undefined &&
      input.ShowAssignedLFTags !== null && { ShowAssignedLFTags: input.ShowAssignedLFTags }),
  };
};

const serializeAws_json1_1GrantPermissionsRequest = (input: GrantPermissionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && { Permissions: serializeAws_json1_1PermissionList(input.Permissions, context) }),
    ...(input.PermissionsWithGrantOption !== undefined &&
      input.PermissionsWithGrantOption !== null && {
        PermissionsWithGrantOption: serializeAws_json1_1PermissionList(input.PermissionsWithGrantOption, context),
      }),
    ...(input.Principal !== undefined &&
      input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) }),
    ...(input.Resource !== undefined &&
      input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }),
  };
};

const serializeAws_json1_1LFTag = (input: LFTag, context: __SerdeContext): any => {
  return {
    ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
    ...(input.TagValues !== undefined &&
      input.TagValues !== null && { TagValues: serializeAws_json1_1TagValueList(input.TagValues, context) }),
  };
};

const serializeAws_json1_1LFTagKeyResource = (input: LFTagKeyResource, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
    ...(input.TagValues !== undefined &&
      input.TagValues !== null && { TagValues: serializeAws_json1_1TagValueList(input.TagValues, context) }),
  };
};

const serializeAws_json1_1LFTagPair = (input: LFTagPair, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
    ...(input.TagValues !== undefined &&
      input.TagValues !== null && { TagValues: serializeAws_json1_1TagValueList(input.TagValues, context) }),
  };
};

const serializeAws_json1_1LFTagPolicyResource = (input: LFTagPolicyResource, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Expression !== undefined &&
      input.Expression !== null && { Expression: serializeAws_json1_1Expression(input.Expression, context) }),
    ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1LFTagsList = (input: LFTagPair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1LFTagPair(entry, context);
    });
};

const serializeAws_json1_1ListLFTagsRequest = (input: ListLFTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceShareType !== undefined &&
      input.ResourceShareType !== null && { ResourceShareType: input.ResourceShareType }),
  };
};

const serializeAws_json1_1ListPermissionsRequest = (input: ListPermissionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Principal !== undefined &&
      input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) }),
    ...(input.Resource !== undefined &&
      input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }),
    ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1ListResourcesRequest = (input: ListResourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.FilterConditionList !== undefined &&
      input.FilterConditionList !== null && {
        FilterConditionList: serializeAws_json1_1FilterConditionList(input.FilterConditionList, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1PermissionList = (input: (Permission | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1PrincipalPermissions = (input: PrincipalPermissions, context: __SerdeContext): any => {
  return {
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && { Permissions: serializeAws_json1_1PermissionList(input.Permissions, context) }),
    ...(input.Principal !== undefined &&
      input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) }),
  };
};

const serializeAws_json1_1PrincipalPermissionsList = (input: PrincipalPermissions[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PrincipalPermissions(entry, context);
    });
};

const serializeAws_json1_1PutDataLakeSettingsRequest = (
  input: PutDataLakeSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DataLakeSettings !== undefined &&
      input.DataLakeSettings !== null && {
        DataLakeSettings: serializeAws_json1_1DataLakeSettings(input.DataLakeSettings, context),
      }),
  };
};

const serializeAws_json1_1RegisterResourceRequest = (input: RegisterResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.UseServiceLinkedRole !== undefined &&
      input.UseServiceLinkedRole !== null && { UseServiceLinkedRole: input.UseServiceLinkedRole }),
  };
};

const serializeAws_json1_1RemoveLFTagsFromResourceRequest = (
  input: RemoveLFTagsFromResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.LFTags !== undefined &&
      input.LFTags !== null && { LFTags: serializeAws_json1_1LFTagsList(input.LFTags, context) }),
    ...(input.Resource !== undefined &&
      input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }),
  };
};

const serializeAws_json1_1Resource = (input: Resource, context: __SerdeContext): any => {
  return {
    ...(input.Catalog !== undefined &&
      input.Catalog !== null && { Catalog: serializeAws_json1_1CatalogResource(input.Catalog, context) }),
    ...(input.DataLocation !== undefined &&
      input.DataLocation !== null && {
        DataLocation: serializeAws_json1_1DataLocationResource(input.DataLocation, context),
      }),
    ...(input.Database !== undefined &&
      input.Database !== null && { Database: serializeAws_json1_1DatabaseResource(input.Database, context) }),
    ...(input.LFTag !== undefined &&
      input.LFTag !== null && { LFTag: serializeAws_json1_1LFTagKeyResource(input.LFTag, context) }),
    ...(input.LFTagPolicy !== undefined &&
      input.LFTagPolicy !== null && {
        LFTagPolicy: serializeAws_json1_1LFTagPolicyResource(input.LFTagPolicy, context),
      }),
    ...(input.Table !== undefined &&
      input.Table !== null && { Table: serializeAws_json1_1TableResource(input.Table, context) }),
    ...(input.TableWithColumns !== undefined &&
      input.TableWithColumns !== null && {
        TableWithColumns: serializeAws_json1_1TableWithColumnsResource(input.TableWithColumns, context),
      }),
  };
};

const serializeAws_json1_1RevokePermissionsRequest = (
  input: RevokePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && { Permissions: serializeAws_json1_1PermissionList(input.Permissions, context) }),
    ...(input.PermissionsWithGrantOption !== undefined &&
      input.PermissionsWithGrantOption !== null && {
        PermissionsWithGrantOption: serializeAws_json1_1PermissionList(input.PermissionsWithGrantOption, context),
      }),
    ...(input.Principal !== undefined &&
      input.Principal !== null && { Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context) }),
    ...(input.Resource !== undefined &&
      input.Resource !== null && { Resource: serializeAws_json1_1Resource(input.Resource, context) }),
  };
};

const serializeAws_json1_1SearchDatabasesByLFTagsRequest = (
  input: SearchDatabasesByLFTagsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Expression !== undefined &&
      input.Expression !== null && { Expression: serializeAws_json1_1Expression(input.Expression, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1SearchTablesByLFTagsRequest = (
  input: SearchTablesByLFTagsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Expression !== undefined &&
      input.Expression !== null && { Expression: serializeAws_json1_1Expression(input.Expression, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1StringValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TableResource = (input: TableResource, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.TableWildcard !== undefined &&
      input.TableWildcard !== null && {
        TableWildcard: serializeAws_json1_1TableWildcard(input.TableWildcard, context),
      }),
  };
};

const serializeAws_json1_1TableWildcard = (input: TableWildcard, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1TableWithColumnsResource = (
  input: TableWithColumnsResource,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.ColumnNames !== undefined &&
      input.ColumnNames !== null && { ColumnNames: serializeAws_json1_1ColumnNames(input.ColumnNames, context) }),
    ...(input.ColumnWildcard !== undefined &&
      input.ColumnWildcard !== null && {
        ColumnWildcard: serializeAws_json1_1ColumnWildcard(input.ColumnWildcard, context),
      }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1TagValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TrustedResourceOwners = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1UpdateLFTagRequest = (input: UpdateLFTagRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
    ...(input.TagValuesToAdd !== undefined &&
      input.TagValuesToAdd !== null && {
        TagValuesToAdd: serializeAws_json1_1TagValueList(input.TagValuesToAdd, context),
      }),
    ...(input.TagValuesToDelete !== undefined &&
      input.TagValuesToDelete !== null && {
        TagValuesToDelete: serializeAws_json1_1TagValueList(input.TagValuesToDelete, context),
      }),
  };
};

const serializeAws_json1_1UpdateResourceRequest = (input: UpdateResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AddLFTagsToResourceResponse = (
  output: any,
  context: __SerdeContext
): AddLFTagsToResourceResponse => {
  return {
    Failures:
      output.Failures !== undefined && output.Failures !== null
        ? deserializeAws_json1_1LFTagErrors(output.Failures, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AlreadyExistsException = (output: any, context: __SerdeContext): AlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1BatchGrantPermissionsResponse = (
  output: any,
  context: __SerdeContext
): BatchGrantPermissionsResponse => {
  return {
    Failures:
      output.Failures !== undefined && output.Failures !== null
        ? deserializeAws_json1_1BatchPermissionsFailureList(output.Failures, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchPermissionsFailureEntry = (
  output: any,
  context: __SerdeContext
): BatchPermissionsFailureEntry => {
  return {
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_json1_1ErrorDetail(output.Error, context)
        : undefined,
    RequestEntry:
      output.RequestEntry !== undefined && output.RequestEntry !== null
        ? deserializeAws_json1_1BatchPermissionsRequestEntry(output.RequestEntry, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchPermissionsFailureList = (
  output: any,
  context: __SerdeContext
): BatchPermissionsFailureEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchPermissionsFailureEntry(entry, context);
    });
};

const deserializeAws_json1_1BatchPermissionsRequestEntry = (
  output: any,
  context: __SerdeContext
): BatchPermissionsRequestEntry => {
  return {
    Id: __expectString(output.Id),
    Permissions:
      output.Permissions !== undefined && output.Permissions !== null
        ? deserializeAws_json1_1PermissionList(output.Permissions, context)
        : undefined,
    PermissionsWithGrantOption:
      output.PermissionsWithGrantOption !== undefined && output.PermissionsWithGrantOption !== null
        ? deserializeAws_json1_1PermissionList(output.PermissionsWithGrantOption, context)
        : undefined,
    Principal:
      output.Principal !== undefined && output.Principal !== null
        ? deserializeAws_json1_1DataLakePrincipal(output.Principal, context)
        : undefined,
    Resource:
      output.Resource !== undefined && output.Resource !== null
        ? deserializeAws_json1_1Resource(output.Resource, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchRevokePermissionsResponse = (
  output: any,
  context: __SerdeContext
): BatchRevokePermissionsResponse => {
  return {
    Failures:
      output.Failures !== undefined && output.Failures !== null
        ? deserializeAws_json1_1BatchPermissionsFailureList(output.Failures, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CatalogResource = (output: any, context: __SerdeContext): CatalogResource => {
  return {} as any;
};

const deserializeAws_json1_1ColumnLFTag = (output: any, context: __SerdeContext): ColumnLFTag => {
  return {
    LFTags:
      output.LFTags !== undefined && output.LFTags !== null
        ? deserializeAws_json1_1LFTagsList(output.LFTags, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1ColumnLFTagsList = (output: any, context: __SerdeContext): ColumnLFTag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ColumnLFTag(entry, context);
    });
};

const deserializeAws_json1_1ColumnNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ColumnWildcard = (output: any, context: __SerdeContext): ColumnWildcard => {
  return {
    ExcludedColumnNames:
      output.ExcludedColumnNames !== undefined && output.ExcludedColumnNames !== null
        ? deserializeAws_json1_1ColumnNames(output.ExcludedColumnNames, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CreateLFTagResponse = (output: any, context: __SerdeContext): CreateLFTagResponse => {
  return {} as any;
};

const deserializeAws_json1_1DatabaseLFTagsList = (output: any, context: __SerdeContext): TaggedDatabase[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TaggedDatabase(entry, context);
    });
};

const deserializeAws_json1_1DatabaseResource = (output: any, context: __SerdeContext): DatabaseResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1DataLakePrincipal = (output: any, context: __SerdeContext): DataLakePrincipal => {
  return {
    DataLakePrincipalIdentifier: __expectString(output.DataLakePrincipalIdentifier),
  } as any;
};

const deserializeAws_json1_1DataLakePrincipalList = (output: any, context: __SerdeContext): DataLakePrincipal[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataLakePrincipal(entry, context);
    });
};

const deserializeAws_json1_1DataLakeSettings = (output: any, context: __SerdeContext): DataLakeSettings => {
  return {
    CreateDatabaseDefaultPermissions:
      output.CreateDatabaseDefaultPermissions !== undefined && output.CreateDatabaseDefaultPermissions !== null
        ? deserializeAws_json1_1PrincipalPermissionsList(output.CreateDatabaseDefaultPermissions, context)
        : undefined,
    CreateTableDefaultPermissions:
      output.CreateTableDefaultPermissions !== undefined && output.CreateTableDefaultPermissions !== null
        ? deserializeAws_json1_1PrincipalPermissionsList(output.CreateTableDefaultPermissions, context)
        : undefined,
    DataLakeAdmins:
      output.DataLakeAdmins !== undefined && output.DataLakeAdmins !== null
        ? deserializeAws_json1_1DataLakePrincipalList(output.DataLakeAdmins, context)
        : undefined,
    TrustedResourceOwners:
      output.TrustedResourceOwners !== undefined && output.TrustedResourceOwners !== null
        ? deserializeAws_json1_1TrustedResourceOwners(output.TrustedResourceOwners, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DataLocationResource = (output: any, context: __SerdeContext): DataLocationResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

const deserializeAws_json1_1DeleteLFTagResponse = (output: any, context: __SerdeContext): DeleteLFTagResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeregisterResourceResponse = (
  output: any,
  context: __SerdeContext
): DeregisterResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeResourceResponse = (
  output: any,
  context: __SerdeContext
): DescribeResourceResponse => {
  return {
    ResourceInfo:
      output.ResourceInfo !== undefined && output.ResourceInfo !== null
        ? deserializeAws_json1_1ResourceInfo(output.ResourceInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetailsMap = (output: any, context: __SerdeContext): DetailsMap => {
  return {
    ResourceShare:
      output.ResourceShare !== undefined && output.ResourceShare !== null
        ? deserializeAws_json1_1ResourceShareList(output.ResourceShare, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EntityNotFoundException = (
  output: any,
  context: __SerdeContext
): EntityNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ErrorDetail = (output: any, context: __SerdeContext): ErrorDetail => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

const deserializeAws_json1_1Expression = (output: any, context: __SerdeContext): LFTag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LFTag(entry, context);
    });
};

const deserializeAws_json1_1GetDataLakeSettingsResponse = (
  output: any,
  context: __SerdeContext
): GetDataLakeSettingsResponse => {
  return {
    DataLakeSettings:
      output.DataLakeSettings !== undefined && output.DataLakeSettings !== null
        ? deserializeAws_json1_1DataLakeSettings(output.DataLakeSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetEffectivePermissionsForPathResponse = (
  output: any,
  context: __SerdeContext
): GetEffectivePermissionsForPathResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Permissions:
      output.Permissions !== undefined && output.Permissions !== null
        ? deserializeAws_json1_1PrincipalResourcePermissionsList(output.Permissions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetLFTagResponse = (output: any, context: __SerdeContext): GetLFTagResponse => {
  return {
    CatalogId: __expectString(output.CatalogId),
    TagKey: __expectString(output.TagKey),
    TagValues:
      output.TagValues !== undefined && output.TagValues !== null
        ? deserializeAws_json1_1TagValueList(output.TagValues, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetResourceLFTagsResponse = (
  output: any,
  context: __SerdeContext
): GetResourceLFTagsResponse => {
  return {
    LFTagOnDatabase:
      output.LFTagOnDatabase !== undefined && output.LFTagOnDatabase !== null
        ? deserializeAws_json1_1LFTagsList(output.LFTagOnDatabase, context)
        : undefined,
    LFTagsOnColumns:
      output.LFTagsOnColumns !== undefined && output.LFTagsOnColumns !== null
        ? deserializeAws_json1_1ColumnLFTagsList(output.LFTagsOnColumns, context)
        : undefined,
    LFTagsOnTable:
      output.LFTagsOnTable !== undefined && output.LFTagsOnTable !== null
        ? deserializeAws_json1_1LFTagsList(output.LFTagsOnTable, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GlueEncryptionException = (
  output: any,
  context: __SerdeContext
): GlueEncryptionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1GrantPermissionsResponse = (
  output: any,
  context: __SerdeContext
): GrantPermissionsResponse => {
  return {} as any;
};

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1LFTag = (output: any, context: __SerdeContext): LFTag => {
  return {
    TagKey: __expectString(output.TagKey),
    TagValues:
      output.TagValues !== undefined && output.TagValues !== null
        ? deserializeAws_json1_1TagValueList(output.TagValues, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LFTagError = (output: any, context: __SerdeContext): LFTagError => {
  return {
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_json1_1ErrorDetail(output.Error, context)
        : undefined,
    LFTag:
      output.LFTag !== undefined && output.LFTag !== null
        ? deserializeAws_json1_1LFTagPair(output.LFTag, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LFTagErrors = (output: any, context: __SerdeContext): LFTagError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LFTagError(entry, context);
    });
};

const deserializeAws_json1_1LFTagKeyResource = (output: any, context: __SerdeContext): LFTagKeyResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    TagKey: __expectString(output.TagKey),
    TagValues:
      output.TagValues !== undefined && output.TagValues !== null
        ? deserializeAws_json1_1TagValueList(output.TagValues, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LFTagPair = (output: any, context: __SerdeContext): LFTagPair => {
  return {
    CatalogId: __expectString(output.CatalogId),
    TagKey: __expectString(output.TagKey),
    TagValues:
      output.TagValues !== undefined && output.TagValues !== null
        ? deserializeAws_json1_1TagValueList(output.TagValues, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LFTagPolicyResource = (output: any, context: __SerdeContext): LFTagPolicyResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    Expression:
      output.Expression !== undefined && output.Expression !== null
        ? deserializeAws_json1_1Expression(output.Expression, context)
        : undefined,
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1LFTagsList = (output: any, context: __SerdeContext): LFTagPair[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LFTagPair(entry, context);
    });
};

const deserializeAws_json1_1ListLFTagsResponse = (output: any, context: __SerdeContext): ListLFTagsResponse => {
  return {
    LFTags:
      output.LFTags !== undefined && output.LFTags !== null
        ? deserializeAws_json1_1LFTagsList(output.LFTags, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListPermissionsResponse = (
  output: any,
  context: __SerdeContext
): ListPermissionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PrincipalResourcePermissions:
      output.PrincipalResourcePermissions !== undefined && output.PrincipalResourcePermissions !== null
        ? deserializeAws_json1_1PrincipalResourcePermissionsList(output.PrincipalResourcePermissions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListResourcesResponse = (output: any, context: __SerdeContext): ListResourcesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceInfoList:
      output.ResourceInfoList !== undefined && output.ResourceInfoList !== null
        ? deserializeAws_json1_1ResourceInfoList(output.ResourceInfoList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OperationTimeoutException = (
  output: any,
  context: __SerdeContext
): OperationTimeoutException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PermissionList = (output: any, context: __SerdeContext): (Permission | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1PrincipalPermissions = (output: any, context: __SerdeContext): PrincipalPermissions => {
  return {
    Permissions:
      output.Permissions !== undefined && output.Permissions !== null
        ? deserializeAws_json1_1PermissionList(output.Permissions, context)
        : undefined,
    Principal:
      output.Principal !== undefined && output.Principal !== null
        ? deserializeAws_json1_1DataLakePrincipal(output.Principal, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PrincipalPermissionsList = (
  output: any,
  context: __SerdeContext
): PrincipalPermissions[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PrincipalPermissions(entry, context);
    });
};

const deserializeAws_json1_1PrincipalResourcePermissions = (
  output: any,
  context: __SerdeContext
): PrincipalResourcePermissions => {
  return {
    AdditionalDetails:
      output.AdditionalDetails !== undefined && output.AdditionalDetails !== null
        ? deserializeAws_json1_1DetailsMap(output.AdditionalDetails, context)
        : undefined,
    Permissions:
      output.Permissions !== undefined && output.Permissions !== null
        ? deserializeAws_json1_1PermissionList(output.Permissions, context)
        : undefined,
    PermissionsWithGrantOption:
      output.PermissionsWithGrantOption !== undefined && output.PermissionsWithGrantOption !== null
        ? deserializeAws_json1_1PermissionList(output.PermissionsWithGrantOption, context)
        : undefined,
    Principal:
      output.Principal !== undefined && output.Principal !== null
        ? deserializeAws_json1_1DataLakePrincipal(output.Principal, context)
        : undefined,
    Resource:
      output.Resource !== undefined && output.Resource !== null
        ? deserializeAws_json1_1Resource(output.Resource, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PrincipalResourcePermissionsList = (
  output: any,
  context: __SerdeContext
): PrincipalResourcePermissions[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PrincipalResourcePermissions(entry, context);
    });
};

const deserializeAws_json1_1PutDataLakeSettingsResponse = (
  output: any,
  context: __SerdeContext
): PutDataLakeSettingsResponse => {
  return {} as any;
};

const deserializeAws_json1_1RegisterResourceResponse = (
  output: any,
  context: __SerdeContext
): RegisterResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1RemoveLFTagsFromResourceResponse = (
  output: any,
  context: __SerdeContext
): RemoveLFTagsFromResourceResponse => {
  return {
    Failures:
      output.Failures !== undefined && output.Failures !== null
        ? deserializeAws_json1_1LFTagErrors(output.Failures, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    Catalog:
      output.Catalog !== undefined && output.Catalog !== null
        ? deserializeAws_json1_1CatalogResource(output.Catalog, context)
        : undefined,
    DataLocation:
      output.DataLocation !== undefined && output.DataLocation !== null
        ? deserializeAws_json1_1DataLocationResource(output.DataLocation, context)
        : undefined,
    Database:
      output.Database !== undefined && output.Database !== null
        ? deserializeAws_json1_1DatabaseResource(output.Database, context)
        : undefined,
    LFTag:
      output.LFTag !== undefined && output.LFTag !== null
        ? deserializeAws_json1_1LFTagKeyResource(output.LFTag, context)
        : undefined,
    LFTagPolicy:
      output.LFTagPolicy !== undefined && output.LFTagPolicy !== null
        ? deserializeAws_json1_1LFTagPolicyResource(output.LFTagPolicy, context)
        : undefined,
    Table:
      output.Table !== undefined && output.Table !== null
        ? deserializeAws_json1_1TableResource(output.Table, context)
        : undefined,
    TableWithColumns:
      output.TableWithColumns !== undefined && output.TableWithColumns !== null
        ? deserializeAws_json1_1TableWithColumnsResource(output.TableWithColumns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceInfo = (output: any, context: __SerdeContext): ResourceInfo => {
  return {
    LastModified:
      output.LastModified !== undefined && output.LastModified !== null
        ? new Date(Math.round(output.LastModified * 1000))
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_json1_1ResourceInfoList = (output: any, context: __SerdeContext): ResourceInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceInfo(entry, context);
    });
};

const deserializeAws_json1_1ResourceNumberLimitExceededException = (
  output: any,
  context: __SerdeContext
): ResourceNumberLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceShareList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1RevokePermissionsResponse = (
  output: any,
  context: __SerdeContext
): RevokePermissionsResponse => {
  return {} as any;
};

const deserializeAws_json1_1SearchDatabasesByLFTagsResponse = (
  output: any,
  context: __SerdeContext
): SearchDatabasesByLFTagsResponse => {
  return {
    DatabaseList:
      output.DatabaseList !== undefined && output.DatabaseList !== null
        ? deserializeAws_json1_1DatabaseLFTagsList(output.DatabaseList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1SearchTablesByLFTagsResponse = (
  output: any,
  context: __SerdeContext
): SearchTablesByLFTagsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TableList:
      output.TableList !== undefined && output.TableList !== null
        ? deserializeAws_json1_1TableLFTagsList(output.TableList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TableLFTagsList = (output: any, context: __SerdeContext): TaggedTable[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TaggedTable(entry, context);
    });
};

const deserializeAws_json1_1TableResource = (output: any, context: __SerdeContext): TableResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    DatabaseName: __expectString(output.DatabaseName),
    Name: __expectString(output.Name),
    TableWildcard:
      output.TableWildcard !== undefined && output.TableWildcard !== null
        ? deserializeAws_json1_1TableWildcard(output.TableWildcard, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TableWildcard = (output: any, context: __SerdeContext): TableWildcard => {
  return {} as any;
};

const deserializeAws_json1_1TableWithColumnsResource = (
  output: any,
  context: __SerdeContext
): TableWithColumnsResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    ColumnNames:
      output.ColumnNames !== undefined && output.ColumnNames !== null
        ? deserializeAws_json1_1ColumnNames(output.ColumnNames, context)
        : undefined,
    ColumnWildcard:
      output.ColumnWildcard !== undefined && output.ColumnWildcard !== null
        ? deserializeAws_json1_1ColumnWildcard(output.ColumnWildcard, context)
        : undefined,
    DatabaseName: __expectString(output.DatabaseName),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1TaggedDatabase = (output: any, context: __SerdeContext): TaggedDatabase => {
  return {
    Database:
      output.Database !== undefined && output.Database !== null
        ? deserializeAws_json1_1DatabaseResource(output.Database, context)
        : undefined,
    LFTags:
      output.LFTags !== undefined && output.LFTags !== null
        ? deserializeAws_json1_1LFTagsList(output.LFTags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TaggedTable = (output: any, context: __SerdeContext): TaggedTable => {
  return {
    LFTagOnDatabase:
      output.LFTagOnDatabase !== undefined && output.LFTagOnDatabase !== null
        ? deserializeAws_json1_1LFTagsList(output.LFTagOnDatabase, context)
        : undefined,
    LFTagsOnColumns:
      output.LFTagsOnColumns !== undefined && output.LFTagsOnColumns !== null
        ? deserializeAws_json1_1ColumnLFTagsList(output.LFTagsOnColumns, context)
        : undefined,
    LFTagsOnTable:
      output.LFTagsOnTable !== undefined && output.LFTagsOnTable !== null
        ? deserializeAws_json1_1LFTagsList(output.LFTagsOnTable, context)
        : undefined,
    Table:
      output.Table !== undefined && output.Table !== null
        ? deserializeAws_json1_1TableResource(output.Table, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TagValueList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1TrustedResourceOwners = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1UpdateLFTagResponse = (output: any, context: __SerdeContext): UpdateLFTagResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateResourceResponse = (output: any, context: __SerdeContext): UpdateResourceResponse => {
  return {} as any;
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
