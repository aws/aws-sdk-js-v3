import { CopyBackupToRegionCommandInput, CopyBackupToRegionCommandOutput } from "../commands/CopyBackupToRegionCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "../commands/CreateClusterCommand";
import { CreateHsmCommandInput, CreateHsmCommandOutput } from "../commands/CreateHsmCommand";
import { DeleteBackupCommandInput, DeleteBackupCommandOutput } from "../commands/DeleteBackupCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "../commands/DeleteClusterCommand";
import { DeleteHsmCommandInput, DeleteHsmCommandOutput } from "../commands/DeleteHsmCommand";
import { DescribeBackupsCommandInput, DescribeBackupsCommandOutput } from "../commands/DescribeBackupsCommand";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "../commands/DescribeClustersCommand";
import { InitializeClusterCommandInput, InitializeClusterCommandOutput } from "../commands/InitializeClusterCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import {
  ModifyBackupAttributesCommandInput,
  ModifyBackupAttributesCommandOutput,
} from "../commands/ModifyBackupAttributesCommand";
import { ModifyClusterCommandInput, ModifyClusterCommandOutput } from "../commands/ModifyClusterCommand";
import { RestoreBackupCommandInput, RestoreBackupCommandOutput } from "../commands/RestoreBackupCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  Backup,
  BackupRetentionPolicy,
  Certificates,
  CloudHsmAccessDeniedException,
  CloudHsmInternalFailureException,
  CloudHsmInvalidRequestException,
  CloudHsmResourceNotFoundException,
  CloudHsmServiceException,
  CloudHsmTagException,
  Cluster,
  CopyBackupToRegionRequest,
  CopyBackupToRegionResponse,
  CreateClusterRequest,
  CreateClusterResponse,
  CreateHsmRequest,
  CreateHsmResponse,
  DeleteBackupRequest,
  DeleteBackupResponse,
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteHsmRequest,
  DeleteHsmResponse,
  DescribeBackupsRequest,
  DescribeBackupsResponse,
  DescribeClustersRequest,
  DescribeClustersResponse,
  DestinationBackup,
  Hsm,
  InitializeClusterRequest,
  InitializeClusterResponse,
  ListTagsRequest,
  ListTagsResponse,
  ModifyBackupAttributesRequest,
  ModifyBackupAttributesResponse,
  ModifyClusterRequest,
  ModifyClusterResponse,
  RestoreBackupRequest,
  RestoreBackupResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { expectBoolean as __expectBoolean, expectString as __expectString } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1CopyBackupToRegionCommand = async (
  input: CopyBackupToRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.CopyBackupToRegion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CopyBackupToRegionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.CreateCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateHsmCommand = async (
  input: CreateHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.CreateHsm",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBackupCommand = async (
  input: DeleteBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.DeleteBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.DeleteCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteHsmCommand = async (
  input: DeleteHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.DeleteHsm",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBackupsCommand = async (
  input: DescribeBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.DescribeBackups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBackupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeClustersCommand = async (
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.DescribeClusters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeClustersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1InitializeClusterCommand = async (
  input: InitializeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.InitializeCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1InitializeClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.ListTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyBackupAttributesCommand = async (
  input: ModifyBackupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.ModifyBackupAttributes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyBackupAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyClusterCommand = async (
  input: ModifyClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.ModifyCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RestoreBackupCommand = async (
  input: RestoreBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.RestoreBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RestoreBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.TagResource",
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
    "x-amz-target": "BaldrApiService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CopyBackupToRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyBackupToRegionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CopyBackupToRegionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CopyBackupToRegionResponse(data, context);
  const response: CopyBackupToRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CopyBackupToRegionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyBackupToRegionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmTagExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateClusterResponse(data, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmTagExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHsmResponse(data, context);
  const response: CreateHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateHsmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteClusterResponse(data, context);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmTagExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteHsmResponse(data, context);
  const response: DeleteHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteHsmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmTagExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClustersResponse(data, context);
  const response: DescribeClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmTagExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1InitializeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitializeClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1InitializeClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InitializeClusterResponse(data, context);
  const response: InitializeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1InitializeClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitializeClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsResponse(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmTagExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ModifyBackupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyBackupAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyBackupAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyBackupAttributesResponse(data, context);
  const response: ModifyBackupAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyBackupAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyBackupAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ModifyClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ModifyClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyClusterResponse(data, context);
  const response: ModifyClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RestoreBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RestoreBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreBackupResponse(data, context);
  const response: RestoreBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RestoreBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmTagExceptionResponse(parsedOutput, context)),
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmTagExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmAccessDeniedException(body, context);
  const contents: CloudHsmAccessDeniedException = {
    name: "CloudHsmAccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmInternalFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmInternalFailureException(body, context);
  const contents: CloudHsmInternalFailureException = {
    name: "CloudHsmInternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmInvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmInvalidRequestException(body, context);
  const contents: CloudHsmInvalidRequestException = {
    name: "CloudHsmInvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmResourceNotFoundException(body, context);
  const contents: CloudHsmResourceNotFoundException = {
    name: "CloudHsmResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmServiceException(body, context);
  const contents: CloudHsmServiceException = {
    name: "CloudHsmServiceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmTagExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmTagException(body, context);
  const contents: CloudHsmTagException = {
    name: "CloudHsmTagException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1BackupRetentionPolicy = (input: BackupRetentionPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1CopyBackupToRegionRequest = (
  input: CopyBackupToRegionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
    ...(input.DestinationRegion !== undefined &&
      input.DestinationRegion !== null && { DestinationRegion: input.DestinationRegion }),
    ...(input.TagList !== undefined &&
      input.TagList !== null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
  };
};

const serializeAws_json1_1CreateClusterRequest = (input: CreateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupRetentionPolicy !== undefined &&
      input.BackupRetentionPolicy !== null && {
        BackupRetentionPolicy: serializeAws_json1_1BackupRetentionPolicy(input.BackupRetentionPolicy, context),
      }),
    ...(input.HsmType !== undefined && input.HsmType !== null && { HsmType: input.HsmType }),
    ...(input.SourceBackupId !== undefined &&
      input.SourceBackupId !== null && { SourceBackupId: input.SourceBackupId }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
    ...(input.TagList !== undefined &&
      input.TagList !== null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
  };
};

const serializeAws_json1_1CreateHsmRequest = (input: CreateHsmRequest, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZone !== undefined &&
      input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.IpAddress !== undefined && input.IpAddress !== null && { IpAddress: input.IpAddress }),
  };
};

const serializeAws_json1_1DeleteBackupRequest = (input: DeleteBackupRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
  };
};

const serializeAws_json1_1DeleteClusterRequest = (input: DeleteClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
  };
};

const serializeAws_json1_1DeleteHsmRequest = (input: DeleteHsmRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.EniId !== undefined && input.EniId !== null && { EniId: input.EniId }),
    ...(input.EniIp !== undefined && input.EniIp !== null && { EniIp: input.EniIp }),
    ...(input.HsmId !== undefined && input.HsmId !== null && { HsmId: input.HsmId }),
  };
};

const serializeAws_json1_1DescribeBackupsRequest = (input: DescribeBackupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SortAscending !== undefined && input.SortAscending !== null && { SortAscending: input.SortAscending }),
  };
};

const serializeAws_json1_1DescribeClustersRequest = (input: DescribeClustersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1Filters = (input: { [key: string]: string[] }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1Strings(value, context),
    };
  }, {});
};

const serializeAws_json1_1InitializeClusterRequest = (
  input: InitializeClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.SignedCert !== undefined && input.SignedCert !== null && { SignedCert: input.SignedCert }),
    ...(input.TrustAnchor !== undefined && input.TrustAnchor !== null && { TrustAnchor: input.TrustAnchor }),
  };
};

const serializeAws_json1_1ListTagsRequest = (input: ListTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1ModifyBackupAttributesRequest = (
  input: ModifyBackupAttributesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
    ...(input.NeverExpires !== undefined && input.NeverExpires !== null && { NeverExpires: input.NeverExpires }),
  };
};

const serializeAws_json1_1ModifyClusterRequest = (input: ModifyClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupRetentionPolicy !== undefined &&
      input.BackupRetentionPolicy !== null && {
        BackupRetentionPolicy: serializeAws_json1_1BackupRetentionPolicy(input.BackupRetentionPolicy, context),
      }),
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
  };
};

const serializeAws_json1_1RestoreBackupRequest = (input: RestoreBackupRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupId !== undefined && input.BackupId !== null && { BackupId: input.BackupId }),
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

const serializeAws_json1_1SubnetIds = (input: string[], context: __SerdeContext): any => {
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
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.TagList !== undefined &&
      input.TagList !== null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.TagKeyList !== undefined &&
      input.TagKeyList !== null && { TagKeyList: serializeAws_json1_1TagKeyList(input.TagKeyList, context) }),
  };
};

const deserializeAws_json1_1Backup = (output: any, context: __SerdeContext): Backup => {
  return {
    BackupId: __expectString(output.BackupId),
    BackupState: __expectString(output.BackupState),
    ClusterId: __expectString(output.ClusterId),
    CopyTimestamp:
      output.CopyTimestamp !== undefined && output.CopyTimestamp !== null
        ? new Date(Math.round(output.CopyTimestamp * 1000))
        : undefined,
    CreateTimestamp:
      output.CreateTimestamp !== undefined && output.CreateTimestamp !== null
        ? new Date(Math.round(output.CreateTimestamp * 1000))
        : undefined,
    DeleteTimestamp:
      output.DeleteTimestamp !== undefined && output.DeleteTimestamp !== null
        ? new Date(Math.round(output.DeleteTimestamp * 1000))
        : undefined,
    NeverExpires: __expectBoolean(output.NeverExpires),
    SourceBackup: __expectString(output.SourceBackup),
    SourceCluster: __expectString(output.SourceCluster),
    SourceRegion: __expectString(output.SourceRegion),
    TagList:
      output.TagList !== undefined && output.TagList !== null
        ? deserializeAws_json1_1TagList(output.TagList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BackupRetentionPolicy = (output: any, context: __SerdeContext): BackupRetentionPolicy => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
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

const deserializeAws_json1_1Certificates = (output: any, context: __SerdeContext): Certificates => {
  return {
    AwsHardwareCertificate: __expectString(output.AwsHardwareCertificate),
    ClusterCertificate: __expectString(output.ClusterCertificate),
    ClusterCsr: __expectString(output.ClusterCsr),
    HsmCertificate: __expectString(output.HsmCertificate),
    ManufacturerHardwareCertificate: __expectString(output.ManufacturerHardwareCertificate),
  } as any;
};

const deserializeAws_json1_1CloudHsmAccessDeniedException = (
  output: any,
  context: __SerdeContext
): CloudHsmAccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CloudHsmInternalFailureException = (
  output: any,
  context: __SerdeContext
): CloudHsmInternalFailureException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CloudHsmInvalidRequestException = (
  output: any,
  context: __SerdeContext
): CloudHsmInvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CloudHsmResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): CloudHsmResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CloudHsmServiceException = (
  output: any,
  context: __SerdeContext
): CloudHsmServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CloudHsmTagException = (output: any, context: __SerdeContext): CloudHsmTagException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Cluster = (output: any, context: __SerdeContext): Cluster => {
  return {
    BackupPolicy: __expectString(output.BackupPolicy),
    BackupRetentionPolicy:
      output.BackupRetentionPolicy !== undefined && output.BackupRetentionPolicy !== null
        ? deserializeAws_json1_1BackupRetentionPolicy(output.BackupRetentionPolicy, context)
        : undefined,
    Certificates:
      output.Certificates !== undefined && output.Certificates !== null
        ? deserializeAws_json1_1Certificates(output.Certificates, context)
        : undefined,
    ClusterId: __expectString(output.ClusterId),
    CreateTimestamp:
      output.CreateTimestamp !== undefined && output.CreateTimestamp !== null
        ? new Date(Math.round(output.CreateTimestamp * 1000))
        : undefined,
    HsmType: __expectString(output.HsmType),
    Hsms:
      output.Hsms !== undefined && output.Hsms !== null ? deserializeAws_json1_1Hsms(output.Hsms, context) : undefined,
    PreCoPassword: __expectString(output.PreCoPassword),
    SecurityGroup: __expectString(output.SecurityGroup),
    SourceBackupId: __expectString(output.SourceBackupId),
    State: __expectString(output.State),
    StateMessage: __expectString(output.StateMessage),
    SubnetMapping:
      output.SubnetMapping !== undefined && output.SubnetMapping !== null
        ? deserializeAws_json1_1ExternalSubnetMapping(output.SubnetMapping, context)
        : undefined,
    TagList:
      output.TagList !== undefined && output.TagList !== null
        ? deserializeAws_json1_1TagList(output.TagList, context)
        : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1Clusters = (output: any, context: __SerdeContext): Cluster[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Cluster(entry, context);
    });
};

const deserializeAws_json1_1CopyBackupToRegionResponse = (
  output: any,
  context: __SerdeContext
): CopyBackupToRegionResponse => {
  return {
    DestinationBackup:
      output.DestinationBackup !== undefined && output.DestinationBackup !== null
        ? deserializeAws_json1_1DestinationBackup(output.DestinationBackup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateClusterResponse = (output: any, context: __SerdeContext): CreateClusterResponse => {
  return {
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateHsmResponse = (output: any, context: __SerdeContext): CreateHsmResponse => {
  return {
    Hsm: output.Hsm !== undefined && output.Hsm !== null ? deserializeAws_json1_1Hsm(output.Hsm, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteBackupResponse = (output: any, context: __SerdeContext): DeleteBackupResponse => {
  return {
    Backup:
      output.Backup !== undefined && output.Backup !== null
        ? deserializeAws_json1_1Backup(output.Backup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteClusterResponse = (output: any, context: __SerdeContext): DeleteClusterResponse => {
  return {
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteHsmResponse = (output: any, context: __SerdeContext): DeleteHsmResponse => {
  return {
    HsmId: __expectString(output.HsmId),
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

const deserializeAws_json1_1DescribeClustersResponse = (
  output: any,
  context: __SerdeContext
): DescribeClustersResponse => {
  return {
    Clusters:
      output.Clusters !== undefined && output.Clusters !== null
        ? deserializeAws_json1_1Clusters(output.Clusters, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DestinationBackup = (output: any, context: __SerdeContext): DestinationBackup => {
  return {
    CreateTimestamp:
      output.CreateTimestamp !== undefined && output.CreateTimestamp !== null
        ? new Date(Math.round(output.CreateTimestamp * 1000))
        : undefined,
    SourceBackup: __expectString(output.SourceBackup),
    SourceCluster: __expectString(output.SourceCluster),
    SourceRegion: __expectString(output.SourceRegion),
  } as any;
};

const deserializeAws_json1_1ExternalSubnetMapping = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1Hsm = (output: any, context: __SerdeContext): Hsm => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    ClusterId: __expectString(output.ClusterId),
    EniId: __expectString(output.EniId),
    EniIp: __expectString(output.EniIp),
    HsmId: __expectString(output.HsmId),
    State: __expectString(output.State),
    StateMessage: __expectString(output.StateMessage),
    SubnetId: __expectString(output.SubnetId),
  } as any;
};

const deserializeAws_json1_1Hsms = (output: any, context: __SerdeContext): Hsm[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Hsm(entry, context);
    });
};

const deserializeAws_json1_1InitializeClusterResponse = (
  output: any,
  context: __SerdeContext
): InitializeClusterResponse => {
  return {
    State: __expectString(output.State),
    StateMessage: __expectString(output.StateMessage),
  } as any;
};

const deserializeAws_json1_1ListTagsResponse = (output: any, context: __SerdeContext): ListTagsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TagList:
      output.TagList !== undefined && output.TagList !== null
        ? deserializeAws_json1_1TagList(output.TagList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ModifyBackupAttributesResponse = (
  output: any,
  context: __SerdeContext
): ModifyBackupAttributesResponse => {
  return {
    Backup:
      output.Backup !== undefined && output.Backup !== null
        ? deserializeAws_json1_1Backup(output.Backup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ModifyClusterResponse = (output: any, context: __SerdeContext): ModifyClusterResponse => {
  return {
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RestoreBackupResponse = (output: any, context: __SerdeContext): RestoreBackupResponse => {
  return {
    Backup:
      output.Backup !== undefined && output.Backup !== null
        ? deserializeAws_json1_1Backup(output.Backup, context)
        : undefined,
  } as any;
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
