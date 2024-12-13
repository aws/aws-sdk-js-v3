// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
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

import { CopyBackupToRegionCommandInput, CopyBackupToRegionCommandOutput } from "../commands/CopyBackupToRegionCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "../commands/CreateClusterCommand";
import { CreateHsmCommandInput, CreateHsmCommandOutput } from "../commands/CreateHsmCommand";
import { DeleteBackupCommandInput, DeleteBackupCommandOutput } from "../commands/DeleteBackupCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "../commands/DeleteClusterCommand";
import { DeleteHsmCommandInput, DeleteHsmCommandOutput } from "../commands/DeleteHsmCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import { DescribeBackupsCommandInput, DescribeBackupsCommandOutput } from "../commands/DescribeBackupsCommand";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "../commands/DescribeClustersCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import { InitializeClusterCommandInput, InitializeClusterCommandOutput } from "../commands/InitializeClusterCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import {
  ModifyBackupAttributesCommandInput,
  ModifyBackupAttributesCommandOutput,
} from "../commands/ModifyBackupAttributesCommand";
import { ModifyClusterCommandInput, ModifyClusterCommandOutput } from "../commands/ModifyClusterCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import { RestoreBackupCommandInput, RestoreBackupCommandOutput } from "../commands/RestoreBackupCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { CloudHSMV2ServiceException as __BaseException } from "../models/CloudHSMV2ServiceException";
import {
  Backup,
  BackupRetentionPolicy,
  CloudHsmAccessDeniedException,
  CloudHsmInternalFailureException,
  CloudHsmInvalidRequestException,
  CloudHsmResourceLimitExceededException,
  CloudHsmResourceNotFoundException,
  CloudHsmServiceException,
  CloudHsmTagException,
  Cluster,
  CopyBackupToRegionRequest,
  CopyBackupToRegionResponse,
  CreateClusterRequest,
  CreateClusterResponse,
  CreateHsmRequest,
  DeleteBackupRequest,
  DeleteBackupResponse,
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteHsmRequest,
  DeleteResourcePolicyRequest,
  DescribeBackupsRequest,
  DescribeBackupsResponse,
  DescribeClustersRequest,
  DescribeClustersResponse,
  DestinationBackup,
  GetResourcePolicyRequest,
  InitializeClusterRequest,
  ListTagsRequest,
  ModifyBackupAttributesRequest,
  ModifyBackupAttributesResponse,
  ModifyClusterRequest,
  ModifyClusterResponse,
  PutResourcePolicyRequest,
  RestoreBackupRequest,
  RestoreBackupResponse,
  Tag,
  TagResourceRequest,
  UntagResourceRequest,
} from "../models/models_0";

/**
 * serializeAws_json1_1CopyBackupToRegionCommand
 */
export const se_CopyBackupToRegionCommand = async (
  input: CopyBackupToRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CopyBackupToRegion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateClusterCommand
 */
export const se_CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateHsmCommand
 */
export const se_CreateHsmCommand = async (
  input: CreateHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateHsm");
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
 * serializeAws_json1_1DeleteClusterCommand
 */
export const se_DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteHsmCommand
 */
export const se_DeleteHsmCommand = async (
  input: DeleteHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteHsm");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourcePolicy");
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
 * serializeAws_json1_1DescribeClustersCommand
 */
export const se_DescribeClustersCommand = async (
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeClusters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1InitializeClusterCommand
 */
export const se_InitializeClusterCommand = async (
  input: InitializeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("InitializeCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyBackupAttributesCommand
 */
export const se_ModifyBackupAttributesCommand = async (
  input: ModifyBackupAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyBackupAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ModifyClusterCommand
 */
export const se_ModifyClusterCommand = async (
  input: ModifyClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ModifyCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreBackupCommand
 */
export const se_RestoreBackupCommand = async (
  input: RestoreBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreBackup");
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
 * deserializeAws_json1_1CopyBackupToRegionCommand
 */
export const de_CopyBackupToRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyBackupToRegionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopyBackupToRegionResponse(data, context);
  const response: CopyBackupToRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateClusterCommand
 */
export const de_CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateClusterResponse(data, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateHsmCommand
 */
export const de_CreateHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteBackupCommand
 */
export const de_DeleteBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteBackupResponse(data, context);
  const response: DeleteBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteClusterCommand
 */
export const de_DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteClusterResponse(data, context);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteHsmCommand
 */
export const de_DeleteHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeBackupsCommand
 */
export const de_DescribeBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribeClustersCommand
 */
export const de_DescribeClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeClustersResponse(data, context);
  const response: DescribeClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1InitializeClusterCommand
 */
export const de_InitializeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitializeClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: InitializeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyBackupAttributesCommand
 */
export const de_ModifyBackupAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyBackupAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyBackupAttributesResponse(data, context);
  const response: ModifyBackupAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ModifyClusterCommand
 */
export const de_ModifyClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ModifyClusterResponse(data, context);
  const response: ModifyClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RestoreBackupCommand
 */
export const de_RestoreBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreBackupResponse(data, context);
  const response: RestoreBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "CloudHsmResourceLimitExceededException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceLimitExceededException":
      throw await de_CloudHsmResourceLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new CloudHsmInvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CloudHsmResourceLimitExceededExceptionRes
 */
const de_CloudHsmResourceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmResourceLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CloudHsmResourceLimitExceededException({
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new CloudHsmTagException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_BackupRetentionPolicy omitted.

// se_CopyBackupToRegionRequest omitted.

// se_CreateClusterRequest omitted.

// se_CreateHsmRequest omitted.

// se_DeleteBackupRequest omitted.

// se_DeleteClusterRequest omitted.

// se_DeleteHsmRequest omitted.

// se_DeleteResourcePolicyRequest omitted.

// se_DescribeBackupsRequest omitted.

// se_DescribeClustersRequest omitted.

// se_Filters omitted.

// se_GetResourcePolicyRequest omitted.

// se_InitializeClusterRequest omitted.

// se_ListTagsRequest omitted.

// se_ModifyBackupAttributesRequest omitted.

// se_ModifyClusterRequest omitted.

// se_PutResourcePolicyRequest omitted.

// se_RestoreBackupRequest omitted.

// se_Strings omitted.

// se_SubnetIds omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

/**
 * deserializeAws_json1_1Backup
 */
const de_Backup = (output: any, context: __SerdeContext): Backup => {
  return take(output, {
    BackupArn: __expectString,
    BackupId: __expectString,
    BackupState: __expectString,
    ClusterId: __expectString,
    CopyTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeleteTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HsmType: __expectString,
    Mode: __expectString,
    NeverExpires: __expectBoolean,
    SourceBackup: __expectString,
    SourceCluster: __expectString,
    SourceRegion: __expectString,
    TagList: _json,
  }) as any;
};

// de_BackupRetentionPolicy omitted.

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

// de_Certificates omitted.

// de_CloudHsmAccessDeniedException omitted.

// de_CloudHsmInternalFailureException omitted.

// de_CloudHsmInvalidRequestException omitted.

// de_CloudHsmResourceLimitExceededException omitted.

// de_CloudHsmResourceNotFoundException omitted.

// de_CloudHsmServiceException omitted.

// de_CloudHsmTagException omitted.

/**
 * deserializeAws_json1_1Cluster
 */
const de_Cluster = (output: any, context: __SerdeContext): Cluster => {
  return take(output, {
    BackupPolicy: __expectString,
    BackupRetentionPolicy: _json,
    Certificates: _json,
    ClusterId: __expectString,
    CreateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HsmType: __expectString,
    Hsms: _json,
    Mode: __expectString,
    NetworkType: __expectString,
    PreCoPassword: __expectString,
    SecurityGroup: __expectString,
    SourceBackupId: __expectString,
    State: __expectString,
    StateMessage: __expectString,
    SubnetMapping: _json,
    TagList: _json,
    VpcId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Clusters
 */
const de_Clusters = (output: any, context: __SerdeContext): Cluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Cluster(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CopyBackupToRegionResponse
 */
const de_CopyBackupToRegionResponse = (output: any, context: __SerdeContext): CopyBackupToRegionResponse => {
  return take(output, {
    DestinationBackup: (_: any) => de_DestinationBackup(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateClusterResponse
 */
const de_CreateClusterResponse = (output: any, context: __SerdeContext): CreateClusterResponse => {
  return take(output, {
    Cluster: (_: any) => de_Cluster(_, context),
  }) as any;
};

// de_CreateHsmResponse omitted.

/**
 * deserializeAws_json1_1DeleteBackupResponse
 */
const de_DeleteBackupResponse = (output: any, context: __SerdeContext): DeleteBackupResponse => {
  return take(output, {
    Backup: (_: any) => de_Backup(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteClusterResponse
 */
const de_DeleteClusterResponse = (output: any, context: __SerdeContext): DeleteClusterResponse => {
  return take(output, {
    Cluster: (_: any) => de_Cluster(_, context),
  }) as any;
};

// de_DeleteHsmResponse omitted.

// de_DeleteResourcePolicyResponse omitted.

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
 * deserializeAws_json1_1DescribeClustersResponse
 */
const de_DescribeClustersResponse = (output: any, context: __SerdeContext): DescribeClustersResponse => {
  return take(output, {
    Clusters: (_: any) => de_Clusters(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DestinationBackup
 */
const de_DestinationBackup = (output: any, context: __SerdeContext): DestinationBackup => {
  return take(output, {
    CreateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SourceBackup: __expectString,
    SourceCluster: __expectString,
    SourceRegion: __expectString,
  }) as any;
};

// de_ExternalSubnetMapping omitted.

// de_GetResourcePolicyResponse omitted.

// de_Hsm omitted.

// de_Hsms omitted.

// de_InitializeClusterResponse omitted.

// de_ListTagsResponse omitted.

/**
 * deserializeAws_json1_1ModifyBackupAttributesResponse
 */
const de_ModifyBackupAttributesResponse = (output: any, context: __SerdeContext): ModifyBackupAttributesResponse => {
  return take(output, {
    Backup: (_: any) => de_Backup(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModifyClusterResponse
 */
const de_ModifyClusterResponse = (output: any, context: __SerdeContext): ModifyClusterResponse => {
  return take(output, {
    Cluster: (_: any) => de_Cluster(_, context),
  }) as any;
};

// de_PutResourcePolicyResponse omitted.

/**
 * deserializeAws_json1_1RestoreBackupResponse
 */
const de_RestoreBackupResponse = (output: any, context: __SerdeContext): RestoreBackupResponse => {
  return take(output, {
    Backup: (_: any) => de_Backup(_, context),
  }) as any;
};

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_UntagResourceResponse omitted.

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
    "x-amz-target": `BaldrApiService.${operation}`,
  };
}
