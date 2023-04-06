// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
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
import { CloudHSMV2ServiceException as __BaseException } from "../models/CloudHSMV2ServiceException";
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

/**
 * serializeAws_json1_1CopyBackupToRegionCommand
 */
export const se_CopyBackupToRegionCommand = async (
  input: CopyBackupToRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.CopyBackupToRegion",
  };
  let body: any;
  body = JSON.stringify(se_CopyBackupToRegionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateClusterCommand
 */
export const se_CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.CreateCluster",
  };
  let body: any;
  body = JSON.stringify(se_CreateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateHsmCommand
 */
export const se_CreateHsmCommand = async (
  input: CreateHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.CreateHsm",
  };
  let body: any;
  body = JSON.stringify(se_CreateHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBackupCommand
 */
export const se_DeleteBackupCommand = async (
  input: DeleteBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.DeleteBackup",
  };
  let body: any;
  body = JSON.stringify(se_DeleteBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteClusterCommand
 */
export const se_DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.DeleteCluster",
  };
  let body: any;
  body = JSON.stringify(se_DeleteClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteHsmCommand
 */
export const se_DeleteHsmCommand = async (
  input: DeleteHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.DeleteHsm",
  };
  let body: any;
  body = JSON.stringify(se_DeleteHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBackupsCommand
 */
export const se_DescribeBackupsCommand = async (
  input: DescribeBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.DescribeBackups",
  };
  let body: any;
  body = JSON.stringify(se_DescribeBackupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClustersCommand
 */
export const se_DescribeClustersCommand = async (
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.DescribeClusters",
  };
  let body: any;
  body = JSON.stringify(se_DescribeClustersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1InitializeClusterCommand
 */
export const se_InitializeClusterCommand = async (
  input: InitializeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.InitializeCluster",
  };
  let body: any;
  body = JSON.stringify(se_InitializeClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.ListTags",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyBackupAttributesCommand
 */
export const se_ModifyBackupAttributesCommand = async (
  input: ModifyBackupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.ModifyBackupAttributes",
  };
  let body: any;
  body = JSON.stringify(se_ModifyBackupAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyClusterCommand
 */
export const se_ModifyClusterCommand = async (
  input: ModifyClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.ModifyCluster",
  };
  let body: any;
  body = JSON.stringify(se_ModifyClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreBackupCommand
 */
export const se_RestoreBackupCommand = async (
  input: RestoreBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "BaldrApiService.RestoreBackup",
  };
  let body: any;
  body = JSON.stringify(se_RestoreBackupRequest(input, context));
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
    "x-amz-target": "BaldrApiService.TagResource",
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
    "x-amz-target": "BaldrApiService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CopyBackupToRegionCommand
 */
export const de_CopyBackupToRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyBackupToRegionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CopyBackupToRegionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopyBackupToRegionResponse(data, context);
  const response: CopyBackupToRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CopyBackupToRegionCommandError
 */
const de_CopyBackupToRegionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyBackupToRegionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      throw await de_CloudHsmAccessDeniedExceptionRes(parsedOutput, context);
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      throw await de_CloudHsmInternalFailureExceptionRes(parsedOutput, context);
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      throw await de_CloudHsmInvalidRequestExceptionRes(parsedOutput, context);
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      throw await de_CloudHsmResourceNotFoundExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      throw await de_CloudHsmTagExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateClusterCommand
 */
export const de_CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateClusterResponse(data, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateClusterCommandError
 */
const de_CreateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      throw await de_CloudHsmAccessDeniedExceptionRes(parsedOutput, context);
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      throw await de_CloudHsmInternalFailureExceptionRes(parsedOutput, context);
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      throw await de_CloudHsmInvalidRequestExceptionRes(parsedOutput, context);
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      throw await de_CloudHsmResourceNotFoundExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      throw await de_CloudHsmTagExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateHsmCommand
 */
export const de_CreateHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateHsmResponse(data, context);
  const response: CreateHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateHsmCommandError
 */
const de_CreateHsmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      throw await de_CloudHsmAccessDeniedExceptionRes(parsedOutput, context);
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      throw await de_CloudHsmInternalFailureExceptionRes(parsedOutput, context);
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      throw await de_CloudHsmInvalidRequestExceptionRes(parsedOutput, context);
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      throw await de_CloudHsmResourceNotFoundExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      throw await de_CloudHsmAccessDeniedExceptionRes(parsedOutput, context);
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      throw await de_CloudHsmInternalFailureExceptionRes(parsedOutput, context);
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      throw await de_CloudHsmInvalidRequestExceptionRes(parsedOutput, context);
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      throw await de_CloudHsmResourceNotFoundExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteClusterCommand
 */
export const de_DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteClusterResponse(data, context);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteClusterCommandError
 */
const de_DeleteClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      throw await de_CloudHsmAccessDeniedExceptionRes(parsedOutput, context);
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      throw await de_CloudHsmInternalFailureExceptionRes(parsedOutput, context);
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      throw await de_CloudHsmInvalidRequestExceptionRes(parsedOutput, context);
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      throw await de_CloudHsmResourceNotFoundExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      throw await de_CloudHsmTagExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteHsmCommand
 */
export const de_DeleteHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteHsmResponse(data, context);
  const response: DeleteHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteHsmCommandError
 */
const de_DeleteHsmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      throw await de_CloudHsmAccessDeniedExceptionRes(parsedOutput, context);
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      throw await de_CloudHsmInternalFailureExceptionRes(parsedOutput, context);
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      throw await de_CloudHsmInvalidRequestExceptionRes(parsedOutput, context);
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      throw await de_CloudHsmResourceNotFoundExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      throw await de_CloudHsmAccessDeniedExceptionRes(parsedOutput, context);
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      throw await de_CloudHsmInternalFailureExceptionRes(parsedOutput, context);
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      throw await de_CloudHsmInvalidRequestExceptionRes(parsedOutput, context);
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      throw await de_CloudHsmResourceNotFoundExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      throw await de_CloudHsmTagExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeClustersCommand
 */
export const de_DescribeClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeClustersResponse(data, context);
  const response: DescribeClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeClustersCommandError
 */
const de_DescribeClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      throw await de_CloudHsmAccessDeniedExceptionRes(parsedOutput, context);
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      throw await de_CloudHsmInternalFailureExceptionRes(parsedOutput, context);
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      throw await de_CloudHsmInvalidRequestExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      throw await de_CloudHsmTagExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1InitializeClusterCommand
 */
export const de_InitializeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitializeClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_InitializeClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_InitializeClusterResponse(data, context);
  const response: InitializeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1InitializeClusterCommandError
 */
const de_InitializeClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitializeClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      throw await de_CloudHsmAccessDeniedExceptionRes(parsedOutput, context);
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      throw await de_CloudHsmInternalFailureExceptionRes(parsedOutput, context);
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      throw await de_CloudHsmInvalidRequestExceptionRes(parsedOutput, context);
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      throw await de_CloudHsmResourceNotFoundExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsResponse(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsCommandError
 */
const de_ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      throw await de_CloudHsmAccessDeniedExceptionRes(parsedOutput, context);
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      throw await de_CloudHsmInternalFailureExceptionRes(parsedOutput, context);
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      throw await de_CloudHsmInvalidRequestExceptionRes(parsedOutput, context);
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      throw await de_CloudHsmResourceNotFoundExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      throw await de_CloudHsmTagExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ModifyBackupAttributesCommand
 */
export const de_ModifyBackupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyBackupAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyBackupAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyBackupAttributesResponse(data, context);
  const response: ModifyBackupAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifyBackupAttributesCommandError
 */
const de_ModifyBackupAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyBackupAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      throw await de_CloudHsmAccessDeniedExceptionRes(parsedOutput, context);
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      throw await de_CloudHsmInternalFailureExceptionRes(parsedOutput, context);
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      throw await de_CloudHsmInvalidRequestExceptionRes(parsedOutput, context);
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      throw await de_CloudHsmResourceNotFoundExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ModifyClusterCommand
 */
export const de_ModifyClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ModifyClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyClusterResponse(data, context);
  const response: ModifyClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ModifyClusterCommandError
 */
const de_ModifyClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      throw await de_CloudHsmAccessDeniedExceptionRes(parsedOutput, context);
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      throw await de_CloudHsmInternalFailureExceptionRes(parsedOutput, context);
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      throw await de_CloudHsmInvalidRequestExceptionRes(parsedOutput, context);
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      throw await de_CloudHsmResourceNotFoundExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RestoreBackupCommand
 */
export const de_RestoreBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreBackupResponse(data, context);
  const response: RestoreBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RestoreBackupCommandError
 */
const de_RestoreBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      throw await de_CloudHsmAccessDeniedExceptionRes(parsedOutput, context);
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      throw await de_CloudHsmInternalFailureExceptionRes(parsedOutput, context);
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      throw await de_CloudHsmInvalidRequestExceptionRes(parsedOutput, context);
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      throw await de_CloudHsmResourceNotFoundExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      throw await de_CloudHsmAccessDeniedExceptionRes(parsedOutput, context);
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      throw await de_CloudHsmInternalFailureExceptionRes(parsedOutput, context);
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      throw await de_CloudHsmInvalidRequestExceptionRes(parsedOutput, context);
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      throw await de_CloudHsmResourceNotFoundExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      throw await de_CloudHsmTagExceptionRes(parsedOutput, context);
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      throw await de_CloudHsmAccessDeniedExceptionRes(parsedOutput, context);
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      throw await de_CloudHsmInternalFailureExceptionRes(parsedOutput, context);
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      throw await de_CloudHsmInvalidRequestExceptionRes(parsedOutput, context);
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      throw await de_CloudHsmResourceNotFoundExceptionRes(parsedOutput, context);
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      throw await de_CloudHsmServiceExceptionRes(parsedOutput, context);
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      throw await de_CloudHsmTagExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CloudHsmAccessDeniedExceptionRes
 */
const de_CloudHsmAccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CloudHsmAccessDeniedException(body, context);
  const exception = new CloudHsmAccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CloudHsmInternalFailureExceptionRes
 */
const de_CloudHsmInternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmInternalFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CloudHsmInternalFailureException(body, context);
  const exception = new CloudHsmInternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CloudHsmInvalidRequestExceptionRes
 */
const de_CloudHsmInvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmInvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CloudHsmInvalidRequestException(body, context);
  const exception = new CloudHsmInvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CloudHsmResourceNotFoundExceptionRes
 */
const de_CloudHsmResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CloudHsmResourceNotFoundException(body, context);
  const exception = new CloudHsmResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CloudHsmServiceExceptionRes
 */
const de_CloudHsmServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CloudHsmServiceException(body, context);
  const exception = new CloudHsmServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CloudHsmTagExceptionRes
 */
const de_CloudHsmTagExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CloudHsmTagException(body, context);
  const exception = new CloudHsmTagException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1BackupRetentionPolicy
 */
const se_BackupRetentionPolicy = (input: BackupRetentionPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1CopyBackupToRegionRequest
 */
const se_CopyBackupToRegionRequest = (input: CopyBackupToRegionRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupId != null && { BackupId: input.BackupId }),
    ...(input.DestinationRegion != null && { DestinationRegion: input.DestinationRegion }),
    ...(input.TagList != null && { TagList: se_TagList(input.TagList, context) }),
  };
};

/**
 * serializeAws_json1_1CreateClusterRequest
 */
const se_CreateClusterRequest = (input: CreateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupRetentionPolicy != null && {
      BackupRetentionPolicy: se_BackupRetentionPolicy(input.BackupRetentionPolicy, context),
    }),
    ...(input.HsmType != null && { HsmType: input.HsmType }),
    ...(input.SourceBackupId != null && { SourceBackupId: input.SourceBackupId }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIds(input.SubnetIds, context) }),
    ...(input.TagList != null && { TagList: se_TagList(input.TagList, context) }),
  };
};

/**
 * serializeAws_json1_1CreateHsmRequest
 */
const se_CreateHsmRequest = (input: CreateHsmRequest, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZone != null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.IpAddress != null && { IpAddress: input.IpAddress }),
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
 * serializeAws_json1_1DeleteClusterRequest
 */
const se_DeleteClusterRequest = (input: DeleteClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
  };
};

/**
 * serializeAws_json1_1DeleteHsmRequest
 */
const se_DeleteHsmRequest = (input: DeleteHsmRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.EniId != null && { EniId: input.EniId }),
    ...(input.EniIp != null && { EniIp: input.EniIp }),
    ...(input.HsmId != null && { HsmId: input.HsmId }),
  };
};

/**
 * serializeAws_json1_1DescribeBackupsRequest
 */
const se_DescribeBackupsRequest = (input: DescribeBackupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortAscending != null && { SortAscending: input.SortAscending }),
  };
};

/**
 * serializeAws_json1_1DescribeClustersRequest
 */
const se_DescribeClustersRequest = (input: DescribeClustersRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1Filters
 */
const se_Filters = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Strings(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1InitializeClusterRequest
 */
const se_InitializeClusterRequest = (input: InitializeClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.SignedCert != null && { SignedCert: input.SignedCert }),
    ...(input.TrustAnchor != null && { TrustAnchor: input.TrustAnchor }),
  };
};

/**
 * serializeAws_json1_1ListTagsRequest
 */
const se_ListTagsRequest = (input: ListTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1ModifyBackupAttributesRequest
 */
const se_ModifyBackupAttributesRequest = (input: ModifyBackupAttributesRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupId != null && { BackupId: input.BackupId }),
    ...(input.NeverExpires != null && { NeverExpires: input.NeverExpires }),
  };
};

/**
 * serializeAws_json1_1ModifyClusterRequest
 */
const se_ModifyClusterRequest = (input: ModifyClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupRetentionPolicy != null && {
      BackupRetentionPolicy: se_BackupRetentionPolicy(input.BackupRetentionPolicy, context),
    }),
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
  };
};

/**
 * serializeAws_json1_1RestoreBackupRequest
 */
const se_RestoreBackupRequest = (input: RestoreBackupRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupId != null && { BackupId: input.BackupId }),
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
 * serializeAws_json1_1SubnetIds
 */
const se_SubnetIds = (input: string[], context: __SerdeContext): any => {
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
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.TagList != null && { TagList: se_TagList(input.TagList, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.TagKeyList != null && { TagKeyList: se_TagKeyList(input.TagKeyList, context) }),
  };
};

/**
 * deserializeAws_json1_1Backup
 */
const de_Backup = (output: any, context: __SerdeContext): Backup => {
  return {
    BackupId: __expectString(output.BackupId),
    BackupState: __expectString(output.BackupState),
    ClusterId: __expectString(output.ClusterId),
    CopyTimestamp:
      output.CopyTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CopyTimestamp)))
        : undefined,
    CreateTimestamp:
      output.CreateTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTimestamp)))
        : undefined,
    DeleteTimestamp:
      output.DeleteTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeleteTimestamp)))
        : undefined,
    NeverExpires: __expectBoolean(output.NeverExpires),
    SourceBackup: __expectString(output.SourceBackup),
    SourceCluster: __expectString(output.SourceCluster),
    SourceRegion: __expectString(output.SourceRegion),
    TagList: output.TagList != null ? de_TagList(output.TagList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BackupRetentionPolicy
 */
const de_BackupRetentionPolicy = (output: any, context: __SerdeContext): BackupRetentionPolicy => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
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
 * deserializeAws_json1_1Certificates
 */
const de_Certificates = (output: any, context: __SerdeContext): Certificates => {
  return {
    AwsHardwareCertificate: __expectString(output.AwsHardwareCertificate),
    ClusterCertificate: __expectString(output.ClusterCertificate),
    ClusterCsr: __expectString(output.ClusterCsr),
    HsmCertificate: __expectString(output.HsmCertificate),
    ManufacturerHardwareCertificate: __expectString(output.ManufacturerHardwareCertificate),
  } as any;
};

/**
 * deserializeAws_json1_1CloudHsmAccessDeniedException
 */
const de_CloudHsmAccessDeniedException = (output: any, context: __SerdeContext): CloudHsmAccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CloudHsmInternalFailureException
 */
const de_CloudHsmInternalFailureException = (
  output: any,
  context: __SerdeContext
): CloudHsmInternalFailureException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CloudHsmInvalidRequestException
 */
const de_CloudHsmInvalidRequestException = (output: any, context: __SerdeContext): CloudHsmInvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CloudHsmResourceNotFoundException
 */
const de_CloudHsmResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): CloudHsmResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CloudHsmServiceException
 */
const de_CloudHsmServiceException = (output: any, context: __SerdeContext): CloudHsmServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CloudHsmTagException
 */
const de_CloudHsmTagException = (output: any, context: __SerdeContext): CloudHsmTagException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Cluster
 */
const de_Cluster = (output: any, context: __SerdeContext): Cluster => {
  return {
    BackupPolicy: __expectString(output.BackupPolicy),
    BackupRetentionPolicy:
      output.BackupRetentionPolicy != null
        ? de_BackupRetentionPolicy(output.BackupRetentionPolicy, context)
        : undefined,
    Certificates: output.Certificates != null ? de_Certificates(output.Certificates, context) : undefined,
    ClusterId: __expectString(output.ClusterId),
    CreateTimestamp:
      output.CreateTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTimestamp)))
        : undefined,
    HsmType: __expectString(output.HsmType),
    Hsms: output.Hsms != null ? de_Hsms(output.Hsms, context) : undefined,
    PreCoPassword: __expectString(output.PreCoPassword),
    SecurityGroup: __expectString(output.SecurityGroup),
    SourceBackupId: __expectString(output.SourceBackupId),
    State: __expectString(output.State),
    StateMessage: __expectString(output.StateMessage),
    SubnetMapping: output.SubnetMapping != null ? de_ExternalSubnetMapping(output.SubnetMapping, context) : undefined,
    TagList: output.TagList != null ? de_TagList(output.TagList, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1Clusters
 */
const de_Clusters = (output: any, context: __SerdeContext): Cluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Cluster(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CopyBackupToRegionResponse
 */
const de_CopyBackupToRegionResponse = (output: any, context: __SerdeContext): CopyBackupToRegionResponse => {
  return {
    DestinationBackup:
      output.DestinationBackup != null ? de_DestinationBackup(output.DestinationBackup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateClusterResponse
 */
const de_CreateClusterResponse = (output: any, context: __SerdeContext): CreateClusterResponse => {
  return {
    Cluster: output.Cluster != null ? de_Cluster(output.Cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateHsmResponse
 */
const de_CreateHsmResponse = (output: any, context: __SerdeContext): CreateHsmResponse => {
  return {
    Hsm: output.Hsm != null ? de_Hsm(output.Hsm, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteBackupResponse
 */
const de_DeleteBackupResponse = (output: any, context: __SerdeContext): DeleteBackupResponse => {
  return {
    Backup: output.Backup != null ? de_Backup(output.Backup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteClusterResponse
 */
const de_DeleteClusterResponse = (output: any, context: __SerdeContext): DeleteClusterResponse => {
  return {
    Cluster: output.Cluster != null ? de_Cluster(output.Cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteHsmResponse
 */
const de_DeleteHsmResponse = (output: any, context: __SerdeContext): DeleteHsmResponse => {
  return {
    HsmId: __expectString(output.HsmId),
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
 * deserializeAws_json1_1DescribeClustersResponse
 */
const de_DescribeClustersResponse = (output: any, context: __SerdeContext): DescribeClustersResponse => {
  return {
    Clusters: output.Clusters != null ? de_Clusters(output.Clusters, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DestinationBackup
 */
const de_DestinationBackup = (output: any, context: __SerdeContext): DestinationBackup => {
  return {
    CreateTimestamp:
      output.CreateTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTimestamp)))
        : undefined,
    SourceBackup: __expectString(output.SourceBackup),
    SourceCluster: __expectString(output.SourceCluster),
    SourceRegion: __expectString(output.SourceRegion),
  } as any;
};

/**
 * deserializeAws_json1_1ExternalSubnetMapping
 */
const de_ExternalSubnetMapping = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1Hsm
 */
const de_Hsm = (output: any, context: __SerdeContext): Hsm => {
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

/**
 * deserializeAws_json1_1Hsms
 */
const de_Hsms = (output: any, context: __SerdeContext): Hsm[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Hsm(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InitializeClusterResponse
 */
const de_InitializeClusterResponse = (output: any, context: __SerdeContext): InitializeClusterResponse => {
  return {
    State: __expectString(output.State),
    StateMessage: __expectString(output.StateMessage),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsResponse
 */
const de_ListTagsResponse = (output: any, context: __SerdeContext): ListTagsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TagList: output.TagList != null ? de_TagList(output.TagList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ModifyBackupAttributesResponse
 */
const de_ModifyBackupAttributesResponse = (output: any, context: __SerdeContext): ModifyBackupAttributesResponse => {
  return {
    Backup: output.Backup != null ? de_Backup(output.Backup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ModifyClusterResponse
 */
const de_ModifyClusterResponse = (output: any, context: __SerdeContext): ModifyClusterResponse => {
  return {
    Cluster: output.Cluster != null ? de_Cluster(output.Cluster, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RestoreBackupResponse
 */
const de_RestoreBackupResponse = (output: any, context: __SerdeContext): RestoreBackupResponse => {
  return {
    Backup: output.Backup != null ? de_Backup(output.Backup, context) : undefined,
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
