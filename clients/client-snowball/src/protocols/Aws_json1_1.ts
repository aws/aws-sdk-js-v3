// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
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

import { CancelClusterCommandInput, CancelClusterCommandOutput } from "../commands/CancelClusterCommand";
import { CancelJobCommandInput, CancelJobCommandOutput } from "../commands/CancelJobCommand";
import { CreateAddressCommandInput, CreateAddressCommandOutput } from "../commands/CreateAddressCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "../commands/CreateClusterCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "../commands/CreateJobCommand";
import {
  CreateLongTermPricingCommandInput,
  CreateLongTermPricingCommandOutput,
} from "../commands/CreateLongTermPricingCommand";
import {
  CreateReturnShippingLabelCommandInput,
  CreateReturnShippingLabelCommandOutput,
} from "../commands/CreateReturnShippingLabelCommand";
import { DescribeAddressCommandInput, DescribeAddressCommandOutput } from "../commands/DescribeAddressCommand";
import { DescribeAddressesCommandInput, DescribeAddressesCommandOutput } from "../commands/DescribeAddressesCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "../commands/DescribeClusterCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "../commands/DescribeJobCommand";
import {
  DescribeReturnShippingLabelCommandInput,
  DescribeReturnShippingLabelCommandOutput,
} from "../commands/DescribeReturnShippingLabelCommand";
import { GetJobManifestCommandInput, GetJobManifestCommandOutput } from "../commands/GetJobManifestCommand";
import { GetJobUnlockCodeCommandInput, GetJobUnlockCodeCommandOutput } from "../commands/GetJobUnlockCodeCommand";
import { GetSnowballUsageCommandInput, GetSnowballUsageCommandOutput } from "../commands/GetSnowballUsageCommand";
import { GetSoftwareUpdatesCommandInput, GetSoftwareUpdatesCommandOutput } from "../commands/GetSoftwareUpdatesCommand";
import { ListClusterJobsCommandInput, ListClusterJobsCommandOutput } from "../commands/ListClusterJobsCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "../commands/ListClustersCommand";
import {
  ListCompatibleImagesCommandInput,
  ListCompatibleImagesCommandOutput,
} from "../commands/ListCompatibleImagesCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import {
  ListLongTermPricingCommandInput,
  ListLongTermPricingCommandOutput,
} from "../commands/ListLongTermPricingCommand";
import {
  ListServiceVersionsCommandInput,
  ListServiceVersionsCommandOutput,
} from "../commands/ListServiceVersionsCommand";
import { UpdateClusterCommandInput, UpdateClusterCommandOutput } from "../commands/UpdateClusterCommand";
import { UpdateJobCommandInput, UpdateJobCommandOutput } from "../commands/UpdateJobCommand";
import {
  UpdateJobShipmentStateCommandInput,
  UpdateJobShipmentStateCommandOutput,
} from "../commands/UpdateJobShipmentStateCommand";
import {
  UpdateLongTermPricingCommandInput,
  UpdateLongTermPricingCommandOutput,
} from "../commands/UpdateLongTermPricingCommand";
import {
  Address,
  CancelClusterRequest,
  CancelClusterResult,
  CancelJobRequest,
  CancelJobResult,
  ClusterLimitExceededException,
  ClusterListEntry,
  ClusterMetadata,
  CompatibleImage,
  ConflictException,
  CreateAddressRequest,
  CreateAddressResult,
  CreateClusterRequest,
  CreateClusterResult,
  CreateJobRequest,
  CreateJobResult,
  CreateLongTermPricingRequest,
  CreateLongTermPricingResult,
  CreateReturnShippingLabelRequest,
  CreateReturnShippingLabelResult,
  DataTransfer,
  DependentService,
  DescribeAddressesRequest,
  DescribeAddressesResult,
  DescribeAddressRequest,
  DescribeAddressResult,
  DescribeClusterRequest,
  DescribeClusterResult,
  DescribeJobRequest,
  DescribeJobResult,
  DescribeReturnShippingLabelRequest,
  DescribeReturnShippingLabelResult,
  DeviceConfiguration,
  Ec2AmiResource,
  Ec2RequestFailedException,
  EKSOnDeviceServiceConfiguration,
  EventTriggerDefinition,
  GetJobManifestRequest,
  GetJobManifestResult,
  GetJobUnlockCodeRequest,
  GetJobUnlockCodeResult,
  GetSnowballUsageRequest,
  GetSnowballUsageResult,
  GetSoftwareUpdatesRequest,
  GetSoftwareUpdatesResult,
  INDTaxDocuments,
  InvalidAddressException,
  InvalidInputCombinationException,
  InvalidJobStateException,
  InvalidNextTokenException,
  InvalidResourceException,
  JobListEntry,
  JobLogs,
  JobMetadata,
  JobResource,
  JobState,
  KeyRange,
  KMSRequestFailedException,
  LambdaResource,
  ListClusterJobsRequest,
  ListClusterJobsResult,
  ListClustersRequest,
  ListClustersResult,
  ListCompatibleImagesRequest,
  ListCompatibleImagesResult,
  ListJobsRequest,
  ListJobsResult,
  ListLongTermPricingRequest,
  ListLongTermPricingResult,
  ListServiceVersionsRequest,
  ListServiceVersionsResult,
  LongTermPricingListEntry,
  NFSOnDeviceServiceConfiguration,
  Notification,
  OnDeviceServiceConfiguration,
  ReturnShippingLabelAlreadyExistsException,
  S3Resource,
  ServiceVersion,
  Shipment,
  ShippingDetails,
  SnowconeDeviceConfiguration,
  TargetOnDeviceService,
  TaxDocuments,
  TGWOnDeviceServiceConfiguration,
  UnsupportedAddressException,
  UpdateClusterRequest,
  UpdateClusterResult,
  UpdateJobRequest,
  UpdateJobResult,
  UpdateJobShipmentStateRequest,
  UpdateJobShipmentStateResult,
  UpdateLongTermPricingRequest,
  UpdateLongTermPricingResult,
  WirelessConnection,
} from "../models/models_0";
import { SnowballServiceException as __BaseException } from "../models/SnowballServiceException";

/**
 * serializeAws_json1_1CancelClusterCommand
 */
export const se_CancelClusterCommand = async (
  input: CancelClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.CancelCluster",
  };
  let body: any;
  body = JSON.stringify(se_CancelClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelJobCommand
 */
export const se_CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.CancelJob",
  };
  let body: any;
  body = JSON.stringify(se_CancelJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAddressCommand
 */
export const se_CreateAddressCommand = async (
  input: CreateAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.CreateAddress",
  };
  let body: any;
  body = JSON.stringify(se_CreateAddressRequest(input, context));
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
    "x-amz-target": "AWSIESnowballJobManagementService.CreateCluster",
  };
  let body: any;
  body = JSON.stringify(se_CreateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateJobCommand
 */
export const se_CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.CreateJob",
  };
  let body: any;
  body = JSON.stringify(se_CreateJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLongTermPricingCommand
 */
export const se_CreateLongTermPricingCommand = async (
  input: CreateLongTermPricingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.CreateLongTermPricing",
  };
  let body: any;
  body = JSON.stringify(se_CreateLongTermPricingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateReturnShippingLabelCommand
 */
export const se_CreateReturnShippingLabelCommand = async (
  input: CreateReturnShippingLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.CreateReturnShippingLabel",
  };
  let body: any;
  body = JSON.stringify(se_CreateReturnShippingLabelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAddressCommand
 */
export const se_DescribeAddressCommand = async (
  input: DescribeAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.DescribeAddress",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAddressRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAddressesCommand
 */
export const se_DescribeAddressesCommand = async (
  input: DescribeAddressesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.DescribeAddresses",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAddressesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClusterCommand
 */
export const se_DescribeClusterCommand = async (
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.DescribeCluster",
  };
  let body: any;
  body = JSON.stringify(se_DescribeClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeJobCommand
 */
export const se_DescribeJobCommand = async (
  input: DescribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.DescribeJob",
  };
  let body: any;
  body = JSON.stringify(se_DescribeJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReturnShippingLabelCommand
 */
export const se_DescribeReturnShippingLabelCommand = async (
  input: DescribeReturnShippingLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.DescribeReturnShippingLabel",
  };
  let body: any;
  body = JSON.stringify(se_DescribeReturnShippingLabelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetJobManifestCommand
 */
export const se_GetJobManifestCommand = async (
  input: GetJobManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.GetJobManifest",
  };
  let body: any;
  body = JSON.stringify(se_GetJobManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetJobUnlockCodeCommand
 */
export const se_GetJobUnlockCodeCommand = async (
  input: GetJobUnlockCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.GetJobUnlockCode",
  };
  let body: any;
  body = JSON.stringify(se_GetJobUnlockCodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSnowballUsageCommand
 */
export const se_GetSnowballUsageCommand = async (
  input: GetSnowballUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.GetSnowballUsage",
  };
  let body: any;
  body = JSON.stringify(se_GetSnowballUsageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSoftwareUpdatesCommand
 */
export const se_GetSoftwareUpdatesCommand = async (
  input: GetSoftwareUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.GetSoftwareUpdates",
  };
  let body: any;
  body = JSON.stringify(se_GetSoftwareUpdatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListClusterJobsCommand
 */
export const se_ListClusterJobsCommand = async (
  input: ListClusterJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.ListClusterJobs",
  };
  let body: any;
  body = JSON.stringify(se_ListClusterJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListClustersCommand
 */
export const se_ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.ListClusters",
  };
  let body: any;
  body = JSON.stringify(se_ListClustersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCompatibleImagesCommand
 */
export const se_ListCompatibleImagesCommand = async (
  input: ListCompatibleImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.ListCompatibleImages",
  };
  let body: any;
  body = JSON.stringify(se_ListCompatibleImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListJobsCommand
 */
export const se_ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.ListJobs",
  };
  let body: any;
  body = JSON.stringify(se_ListJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLongTermPricingCommand
 */
export const se_ListLongTermPricingCommand = async (
  input: ListLongTermPricingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.ListLongTermPricing",
  };
  let body: any;
  body = JSON.stringify(se_ListLongTermPricingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServiceVersionsCommand
 */
export const se_ListServiceVersionsCommand = async (
  input: ListServiceVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.ListServiceVersions",
  };
  let body: any;
  body = JSON.stringify(se_ListServiceVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateClusterCommand
 */
export const se_UpdateClusterCommand = async (
  input: UpdateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.UpdateCluster",
  };
  let body: any;
  body = JSON.stringify(se_UpdateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateJobCommand
 */
export const se_UpdateJobCommand = async (
  input: UpdateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.UpdateJob",
  };
  let body: any;
  body = JSON.stringify(se_UpdateJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateJobShipmentStateCommand
 */
export const se_UpdateJobShipmentStateCommand = async (
  input: UpdateJobShipmentStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.UpdateJobShipmentState",
  };
  let body: any;
  body = JSON.stringify(se_UpdateJobShipmentStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLongTermPricingCommand
 */
export const se_UpdateLongTermPricingCommand = async (
  input: UpdateLongTermPricingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.UpdateLongTermPricing",
  };
  let body: any;
  body = JSON.stringify(se_UpdateLongTermPricingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CancelClusterCommand
 */
export const de_CancelClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelClusterResult(data, context);
  const response: CancelClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelClusterCommandError
 */
const de_CancelClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      throw await de_InvalidJobStateExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      throw await de_KMSRequestFailedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CancelJobCommand
 */
export const de_CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelJobResult(data, context);
  const response: CancelJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelJobCommandError
 */
const de_CancelJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      throw await de_InvalidJobStateExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      throw await de_KMSRequestFailedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateAddressCommand
 */
export const de_CreateAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAddressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAddressResult(data, context);
  const response: CreateAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAddressCommandError
 */
const de_CreateAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAddressException":
    case "com.amazonaws.snowball#InvalidAddressException":
      throw await de_InvalidAddressExceptionRes(parsedOutput, context);
    case "UnsupportedAddressException":
    case "com.amazonaws.snowball#UnsupportedAddressException":
      throw await de_UnsupportedAddressExceptionRes(parsedOutput, context);
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
  contents = de_CreateClusterResult(data, context);
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
    case "Ec2RequestFailedException":
    case "com.amazonaws.snowball#Ec2RequestFailedException":
      throw await de_Ec2RequestFailedExceptionRes(parsedOutput, context);
    case "InvalidInputCombinationException":
    case "com.amazonaws.snowball#InvalidInputCombinationException":
      throw await de_InvalidInputCombinationExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      throw await de_KMSRequestFailedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateJobCommand
 */
export const de_CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateJobResult(data, context);
  const response: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateJobCommandError
 */
const de_CreateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterLimitExceededException":
    case "com.amazonaws.snowball#ClusterLimitExceededException":
      throw await de_ClusterLimitExceededExceptionRes(parsedOutput, context);
    case "Ec2RequestFailedException":
    case "com.amazonaws.snowball#Ec2RequestFailedException":
      throw await de_Ec2RequestFailedExceptionRes(parsedOutput, context);
    case "InvalidInputCombinationException":
    case "com.amazonaws.snowball#InvalidInputCombinationException":
      throw await de_InvalidInputCombinationExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      throw await de_KMSRequestFailedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateLongTermPricingCommand
 */
export const de_CreateLongTermPricingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLongTermPricingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLongTermPricingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLongTermPricingResult(data, context);
  const response: CreateLongTermPricingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLongTermPricingCommandError
 */
const de_CreateLongTermPricingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLongTermPricingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateReturnShippingLabelCommand
 */
export const de_CreateReturnShippingLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReturnShippingLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateReturnShippingLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateReturnShippingLabelResult(data, context);
  const response: CreateReturnShippingLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateReturnShippingLabelCommandError
 */
const de_CreateReturnShippingLabelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReturnShippingLabelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.snowball#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InvalidInputCombinationException":
    case "com.amazonaws.snowball#InvalidInputCombinationException":
      throw await de_InvalidInputCombinationExceptionRes(parsedOutput, context);
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      throw await de_InvalidJobStateExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
    case "ReturnShippingLabelAlreadyExistsException":
    case "com.amazonaws.snowball#ReturnShippingLabelAlreadyExistsException":
      throw await de_ReturnShippingLabelAlreadyExistsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAddressCommand
 */
export const de_DescribeAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAddressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAddressResult(data, context);
  const response: DescribeAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAddressCommandError
 */
const de_DescribeAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAddressesCommand
 */
export const de_DescribeAddressesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddressesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAddressesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAddressesResult(data, context);
  const response: DescribeAddressesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAddressesCommandError
 */
const de_DescribeAddressesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddressesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeClusterCommand
 */
export const de_DescribeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeClusterResult(data, context);
  const response: DescribeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeClusterCommandError
 */
const de_DescribeClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeJobCommand
 */
export const de_DescribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeJobResult(data, context);
  const response: DescribeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeJobCommandError
 */
const de_DescribeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeReturnShippingLabelCommand
 */
export const de_DescribeReturnShippingLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReturnShippingLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReturnShippingLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReturnShippingLabelResult(data, context);
  const response: DescribeReturnShippingLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeReturnShippingLabelCommandError
 */
const de_DescribeReturnShippingLabelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReturnShippingLabelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.snowball#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      throw await de_InvalidJobStateExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetJobManifestCommand
 */
export const de_GetJobManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetJobManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetJobManifestResult(data, context);
  const response: GetJobManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetJobManifestCommandError
 */
const de_GetJobManifestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobManifestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      throw await de_InvalidJobStateExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetJobUnlockCodeCommand
 */
export const de_GetJobUnlockCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobUnlockCodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetJobUnlockCodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetJobUnlockCodeResult(data, context);
  const response: GetJobUnlockCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetJobUnlockCodeCommandError
 */
const de_GetJobUnlockCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobUnlockCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      throw await de_InvalidJobStateExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetSnowballUsageCommand
 */
export const de_GetSnowballUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnowballUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSnowballUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSnowballUsageResult(data, context);
  const response: GetSnowballUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSnowballUsageCommandError
 */
const de_GetSnowballUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnowballUsageCommandOutput> => {
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
 * deserializeAws_json1_1GetSoftwareUpdatesCommand
 */
export const de_GetSoftwareUpdatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSoftwareUpdatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSoftwareUpdatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSoftwareUpdatesResult(data, context);
  const response: GetSoftwareUpdatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSoftwareUpdatesCommandError
 */
const de_GetSoftwareUpdatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSoftwareUpdatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      throw await de_InvalidJobStateExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListClusterJobsCommand
 */
export const de_ListClusterJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListClusterJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListClusterJobsResult(data, context);
  const response: ListClusterJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListClusterJobsCommandError
 */
const de_ListClusterJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListClustersCommand
 */
export const de_ListClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListClustersResult(data, context);
  const response: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListClustersCommandError
 */
const de_ListClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListCompatibleImagesCommand
 */
export const de_ListCompatibleImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCompatibleImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCompatibleImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCompatibleImagesResult(data, context);
  const response: ListCompatibleImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCompatibleImagesCommandError
 */
const de_ListCompatibleImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCompatibleImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "Ec2RequestFailedException":
    case "com.amazonaws.snowball#Ec2RequestFailedException":
      throw await de_Ec2RequestFailedExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListJobsCommand
 */
export const de_ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListJobsResult(data, context);
  const response: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListJobsCommandError
 */
const de_ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListLongTermPricingCommand
 */
export const de_ListLongTermPricingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLongTermPricingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLongTermPricingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLongTermPricingResult(data, context);
  const response: ListLongTermPricingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListLongTermPricingCommandError
 */
const de_ListLongTermPricingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLongTermPricingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListServiceVersionsCommand
 */
export const de_ListServiceVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServiceVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServiceVersionsResult(data, context);
  const response: ListServiceVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListServiceVersionsCommandError
 */
const de_ListServiceVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateClusterCommand
 */
export const de_UpdateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateClusterResult(data, context);
  const response: UpdateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateClusterCommandError
 */
const de_UpdateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "Ec2RequestFailedException":
    case "com.amazonaws.snowball#Ec2RequestFailedException":
      throw await de_Ec2RequestFailedExceptionRes(parsedOutput, context);
    case "InvalidInputCombinationException":
    case "com.amazonaws.snowball#InvalidInputCombinationException":
      throw await de_InvalidInputCombinationExceptionRes(parsedOutput, context);
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      throw await de_InvalidJobStateExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      throw await de_KMSRequestFailedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateJobCommand
 */
export const de_UpdateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateJobResult(data, context);
  const response: UpdateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateJobCommandError
 */
const de_UpdateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterLimitExceededException":
    case "com.amazonaws.snowball#ClusterLimitExceededException":
      throw await de_ClusterLimitExceededExceptionRes(parsedOutput, context);
    case "Ec2RequestFailedException":
    case "com.amazonaws.snowball#Ec2RequestFailedException":
      throw await de_Ec2RequestFailedExceptionRes(parsedOutput, context);
    case "InvalidInputCombinationException":
    case "com.amazonaws.snowball#InvalidInputCombinationException":
      throw await de_InvalidInputCombinationExceptionRes(parsedOutput, context);
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      throw await de_InvalidJobStateExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      throw await de_KMSRequestFailedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateJobShipmentStateCommand
 */
export const de_UpdateJobShipmentStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobShipmentStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateJobShipmentStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateJobShipmentStateResult(data, context);
  const response: UpdateJobShipmentStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateJobShipmentStateCommandError
 */
const de_UpdateJobShipmentStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobShipmentStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      throw await de_InvalidJobStateExceptionRes(parsedOutput, context);
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateLongTermPricingCommand
 */
export const de_UpdateLongTermPricingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLongTermPricingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateLongTermPricingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateLongTermPricingResult(data, context);
  const response: UpdateLongTermPricingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateLongTermPricingCommandError
 */
const de_UpdateLongTermPricingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLongTermPricingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      throw await de_InvalidResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ClusterLimitExceededExceptionRes
 */
const de_ClusterLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClusterLimitExceededException(body, context);
  const exception = new ClusterLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1Ec2RequestFailedExceptionRes
 */
const de_Ec2RequestFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<Ec2RequestFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_Ec2RequestFailedException(body, context);
  const exception = new Ec2RequestFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidAddressExceptionRes
 */
const de_InvalidAddressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAddressException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAddressException(body, context);
  const exception = new InvalidAddressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInputCombinationExceptionRes
 */
const de_InvalidInputCombinationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInputCombinationException(body, context);
  const exception = new InvalidInputCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidJobStateExceptionRes
 */
const de_InvalidJobStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidJobStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidJobStateException(body, context);
  const exception = new InvalidJobStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
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
 * deserializeAws_json1_1InvalidResourceExceptionRes
 */
const de_InvalidResourceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidResourceException(body, context);
  const exception = new InvalidResourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KMSRequestFailedExceptionRes
 */
const de_KMSRequestFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSRequestFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KMSRequestFailedException(body, context);
  const exception = new KMSRequestFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReturnShippingLabelAlreadyExistsExceptionRes
 */
const de_ReturnShippingLabelAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReturnShippingLabelAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReturnShippingLabelAlreadyExistsException(body, context);
  const exception = new ReturnShippingLabelAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedAddressExceptionRes
 */
const de_UnsupportedAddressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedAddressException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedAddressException(body, context);
  const exception = new UnsupportedAddressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1Address
 */
const se_Address = (input: Address, context: __SerdeContext): any => {
  return {
    ...(input.AddressId != null && { AddressId: input.AddressId }),
    ...(input.City != null && { City: input.City }),
    ...(input.Company != null && { Company: input.Company }),
    ...(input.Country != null && { Country: input.Country }),
    ...(input.IsRestricted != null && { IsRestricted: input.IsRestricted }),
    ...(input.Landmark != null && { Landmark: input.Landmark }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PhoneNumber != null && { PhoneNumber: input.PhoneNumber }),
    ...(input.PostalCode != null && { PostalCode: input.PostalCode }),
    ...(input.PrefectureOrDistrict != null && { PrefectureOrDistrict: input.PrefectureOrDistrict }),
    ...(input.StateOrProvince != null && { StateOrProvince: input.StateOrProvince }),
    ...(input.Street1 != null && { Street1: input.Street1 }),
    ...(input.Street2 != null && { Street2: input.Street2 }),
    ...(input.Street3 != null && { Street3: input.Street3 }),
  };
};

/**
 * serializeAws_json1_1CancelClusterRequest
 */
const se_CancelClusterRequest = (input: CancelClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
  };
};

/**
 * serializeAws_json1_1CancelJobRequest
 */
const se_CancelJobRequest = (input: CancelJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1CreateAddressRequest
 */
const se_CreateAddressRequest = (input: CreateAddressRequest, context: __SerdeContext): any => {
  return {
    ...(input.Address != null && { Address: se_Address(input.Address, context) }),
  };
};

/**
 * serializeAws_json1_1CreateClusterRequest
 */
const se_CreateClusterRequest = (input: CreateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddressId != null && { AddressId: input.AddressId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ForwardingAddressId != null && { ForwardingAddressId: input.ForwardingAddressId }),
    ...(input.JobType != null && { JobType: input.JobType }),
    ...(input.KmsKeyARN != null && { KmsKeyARN: input.KmsKeyARN }),
    ...(input.Notification != null && { Notification: se_Notification(input.Notification, context) }),
    ...(input.OnDeviceServiceConfiguration != null && {
      OnDeviceServiceConfiguration: se_OnDeviceServiceConfiguration(input.OnDeviceServiceConfiguration, context),
    }),
    ...(input.RemoteManagement != null && { RemoteManagement: input.RemoteManagement }),
    ...(input.Resources != null && { Resources: se_JobResource(input.Resources, context) }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.ShippingOption != null && { ShippingOption: input.ShippingOption }),
    ...(input.SnowballType != null && { SnowballType: input.SnowballType }),
    ...(input.TaxDocuments != null && { TaxDocuments: se_TaxDocuments(input.TaxDocuments, context) }),
  };
};

/**
 * serializeAws_json1_1CreateJobRequest
 */
const se_CreateJobRequest = (input: CreateJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddressId != null && { AddressId: input.AddressId }),
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DeviceConfiguration != null && {
      DeviceConfiguration: se_DeviceConfiguration(input.DeviceConfiguration, context),
    }),
    ...(input.ForwardingAddressId != null && { ForwardingAddressId: input.ForwardingAddressId }),
    ...(input.JobType != null && { JobType: input.JobType }),
    ...(input.KmsKeyARN != null && { KmsKeyARN: input.KmsKeyARN }),
    ...(input.LongTermPricingId != null && { LongTermPricingId: input.LongTermPricingId }),
    ...(input.Notification != null && { Notification: se_Notification(input.Notification, context) }),
    ...(input.OnDeviceServiceConfiguration != null && {
      OnDeviceServiceConfiguration: se_OnDeviceServiceConfiguration(input.OnDeviceServiceConfiguration, context),
    }),
    ...(input.RemoteManagement != null && { RemoteManagement: input.RemoteManagement }),
    ...(input.Resources != null && { Resources: se_JobResource(input.Resources, context) }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.ShippingOption != null && { ShippingOption: input.ShippingOption }),
    ...(input.SnowballCapacityPreference != null && { SnowballCapacityPreference: input.SnowballCapacityPreference }),
    ...(input.SnowballType != null && { SnowballType: input.SnowballType }),
    ...(input.TaxDocuments != null && { TaxDocuments: se_TaxDocuments(input.TaxDocuments, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLongTermPricingRequest
 */
const se_CreateLongTermPricingRequest = (input: CreateLongTermPricingRequest, context: __SerdeContext): any => {
  return {
    ...(input.IsLongTermPricingAutoRenew != null && { IsLongTermPricingAutoRenew: input.IsLongTermPricingAutoRenew }),
    ...(input.LongTermPricingType != null && { LongTermPricingType: input.LongTermPricingType }),
    ...(input.SnowballType != null && { SnowballType: input.SnowballType }),
  };
};

/**
 * serializeAws_json1_1CreateReturnShippingLabelRequest
 */
const se_CreateReturnShippingLabelRequest = (input: CreateReturnShippingLabelRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.ShippingOption != null && { ShippingOption: input.ShippingOption }),
  };
};

/**
 * serializeAws_json1_1DependentService
 */
const se_DependentService = (input: DependentService, context: __SerdeContext): any => {
  return {
    ...(input.ServiceName != null && { ServiceName: input.ServiceName }),
    ...(input.ServiceVersion != null && { ServiceVersion: se_ServiceVersion(input.ServiceVersion, context) }),
  };
};

/**
 * serializeAws_json1_1DependentServiceList
 */
const se_DependentServiceList = (input: DependentService[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DependentService(entry, context);
    });
};

/**
 * serializeAws_json1_1DescribeAddressesRequest
 */
const se_DescribeAddressesRequest = (input: DescribeAddressesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeAddressRequest
 */
const se_DescribeAddressRequest = (input: DescribeAddressRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddressId != null && { AddressId: input.AddressId }),
  };
};

/**
 * serializeAws_json1_1DescribeClusterRequest
 */
const se_DescribeClusterRequest = (input: DescribeClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
  };
};

/**
 * serializeAws_json1_1DescribeJobRequest
 */
const se_DescribeJobRequest = (input: DescribeJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1DescribeReturnShippingLabelRequest
 */
const se_DescribeReturnShippingLabelRequest = (
  input: DescribeReturnShippingLabelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1DeviceConfiguration
 */
const se_DeviceConfiguration = (input: DeviceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SnowconeDeviceConfiguration != null && {
      SnowconeDeviceConfiguration: se_SnowconeDeviceConfiguration(input.SnowconeDeviceConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1Ec2AmiResource
 */
const se_Ec2AmiResource = (input: Ec2AmiResource, context: __SerdeContext): any => {
  return {
    ...(input.AmiId != null && { AmiId: input.AmiId }),
    ...(input.SnowballAmiId != null && { SnowballAmiId: input.SnowballAmiId }),
  };
};

/**
 * serializeAws_json1_1Ec2AmiResourceList
 */
const se_Ec2AmiResourceList = (input: Ec2AmiResource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Ec2AmiResource(entry, context);
    });
};

/**
 * serializeAws_json1_1EKSOnDeviceServiceConfiguration
 */
const se_EKSOnDeviceServiceConfiguration = (input: EKSOnDeviceServiceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EKSAnywhereVersion != null && { EKSAnywhereVersion: input.EKSAnywhereVersion }),
    ...(input.KubernetesVersion != null && { KubernetesVersion: input.KubernetesVersion }),
  };
};

/**
 * serializeAws_json1_1EventTriggerDefinition
 */
const se_EventTriggerDefinition = (input: EventTriggerDefinition, context: __SerdeContext): any => {
  return {
    ...(input.EventResourceARN != null && { EventResourceARN: input.EventResourceARN }),
  };
};

/**
 * serializeAws_json1_1EventTriggerDefinitionList
 */
const se_EventTriggerDefinitionList = (input: EventTriggerDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EventTriggerDefinition(entry, context);
    });
};

/**
 * serializeAws_json1_1GetJobManifestRequest
 */
const se_GetJobManifestRequest = (input: GetJobManifestRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1GetJobUnlockCodeRequest
 */
const se_GetJobUnlockCodeRequest = (input: GetJobUnlockCodeRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1GetSnowballUsageRequest
 */
const se_GetSnowballUsageRequest = (input: GetSnowballUsageRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1GetSoftwareUpdatesRequest
 */
const se_GetSoftwareUpdatesRequest = (input: GetSoftwareUpdatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1INDTaxDocuments
 */
const se_INDTaxDocuments = (input: INDTaxDocuments, context: __SerdeContext): any => {
  return {
    ...(input.GSTIN != null && { GSTIN: input.GSTIN }),
  };
};

/**
 * serializeAws_json1_1JobResource
 */
const se_JobResource = (input: JobResource, context: __SerdeContext): any => {
  return {
    ...(input.Ec2AmiResources != null && { Ec2AmiResources: se_Ec2AmiResourceList(input.Ec2AmiResources, context) }),
    ...(input.LambdaResources != null && { LambdaResources: se_LambdaResourceList(input.LambdaResources, context) }),
    ...(input.S3Resources != null && { S3Resources: se_S3ResourceList(input.S3Resources, context) }),
  };
};

/**
 * serializeAws_json1_1JobStateList
 */
const se_JobStateList = (input: (JobState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1KeyRange
 */
const se_KeyRange = (input: KeyRange, context: __SerdeContext): any => {
  return {
    ...(input.BeginMarker != null && { BeginMarker: input.BeginMarker }),
    ...(input.EndMarker != null && { EndMarker: input.EndMarker }),
  };
};

/**
 * serializeAws_json1_1LambdaResource
 */
const se_LambdaResource = (input: LambdaResource, context: __SerdeContext): any => {
  return {
    ...(input.EventTriggers != null && { EventTriggers: se_EventTriggerDefinitionList(input.EventTriggers, context) }),
    ...(input.LambdaArn != null && { LambdaArn: input.LambdaArn }),
  };
};

/**
 * serializeAws_json1_1LambdaResourceList
 */
const se_LambdaResourceList = (input: LambdaResource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LambdaResource(entry, context);
    });
};

/**
 * serializeAws_json1_1ListClusterJobsRequest
 */
const se_ListClusterJobsRequest = (input: ListClusterJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListClustersRequest
 */
const se_ListClustersRequest = (input: ListClustersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListCompatibleImagesRequest
 */
const se_ListCompatibleImagesRequest = (input: ListCompatibleImagesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListJobsRequest
 */
const se_ListJobsRequest = (input: ListJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListLongTermPricingRequest
 */
const se_ListLongTermPricingRequest = (input: ListLongTermPricingRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListServiceVersionsRequest
 */
const se_ListServiceVersionsRequest = (input: ListServiceVersionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DependentServices != null && {
      DependentServices: se_DependentServiceList(input.DependentServices, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceName != null && { ServiceName: input.ServiceName }),
  };
};

/**
 * serializeAws_json1_1NFSOnDeviceServiceConfiguration
 */
const se_NFSOnDeviceServiceConfiguration = (input: NFSOnDeviceServiceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.StorageLimit != null && { StorageLimit: input.StorageLimit }),
    ...(input.StorageUnit != null && { StorageUnit: input.StorageUnit }),
  };
};

/**
 * serializeAws_json1_1Notification
 */
const se_Notification = (input: Notification, context: __SerdeContext): any => {
  return {
    ...(input.JobStatesToNotify != null && { JobStatesToNotify: se_JobStateList(input.JobStatesToNotify, context) }),
    ...(input.NotifyAll != null && { NotifyAll: input.NotifyAll }),
    ...(input.SnsTopicARN != null && { SnsTopicARN: input.SnsTopicARN }),
  };
};

/**
 * serializeAws_json1_1OnDeviceServiceConfiguration
 */
const se_OnDeviceServiceConfiguration = (input: OnDeviceServiceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EKSOnDeviceService != null && {
      EKSOnDeviceService: se_EKSOnDeviceServiceConfiguration(input.EKSOnDeviceService, context),
    }),
    ...(input.NFSOnDeviceService != null && {
      NFSOnDeviceService: se_NFSOnDeviceServiceConfiguration(input.NFSOnDeviceService, context),
    }),
    ...(input.TGWOnDeviceService != null && {
      TGWOnDeviceService: se_TGWOnDeviceServiceConfiguration(input.TGWOnDeviceService, context),
    }),
  };
};

/**
 * serializeAws_json1_1S3Resource
 */
const se_S3Resource = (input: S3Resource, context: __SerdeContext): any => {
  return {
    ...(input.BucketArn != null && { BucketArn: input.BucketArn }),
    ...(input.KeyRange != null && { KeyRange: se_KeyRange(input.KeyRange, context) }),
    ...(input.TargetOnDeviceServices != null && {
      TargetOnDeviceServices: se_TargetOnDeviceServiceList(input.TargetOnDeviceServices, context),
    }),
  };
};

/**
 * serializeAws_json1_1S3ResourceList
 */
const se_S3ResourceList = (input: S3Resource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_S3Resource(entry, context);
    });
};

/**
 * serializeAws_json1_1ServiceVersion
 */
const se_ServiceVersion = (input: ServiceVersion, context: __SerdeContext): any => {
  return {
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1SnowconeDeviceConfiguration
 */
const se_SnowconeDeviceConfiguration = (input: SnowconeDeviceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.WirelessConnection != null && {
      WirelessConnection: se_WirelessConnection(input.WirelessConnection, context),
    }),
  };
};

/**
 * serializeAws_json1_1TargetOnDeviceService
 */
const se_TargetOnDeviceService = (input: TargetOnDeviceService, context: __SerdeContext): any => {
  return {
    ...(input.ServiceName != null && { ServiceName: input.ServiceName }),
    ...(input.TransferOption != null && { TransferOption: input.TransferOption }),
  };
};

/**
 * serializeAws_json1_1TargetOnDeviceServiceList
 */
const se_TargetOnDeviceServiceList = (input: TargetOnDeviceService[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TargetOnDeviceService(entry, context);
    });
};

/**
 * serializeAws_json1_1TaxDocuments
 */
const se_TaxDocuments = (input: TaxDocuments, context: __SerdeContext): any => {
  return {
    ...(input.IND != null && { IND: se_INDTaxDocuments(input.IND, context) }),
  };
};

/**
 * serializeAws_json1_1TGWOnDeviceServiceConfiguration
 */
const se_TGWOnDeviceServiceConfiguration = (input: TGWOnDeviceServiceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.StorageLimit != null && { StorageLimit: input.StorageLimit }),
    ...(input.StorageUnit != null && { StorageUnit: input.StorageUnit }),
  };
};

/**
 * serializeAws_json1_1UpdateClusterRequest
 */
const se_UpdateClusterRequest = (input: UpdateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddressId != null && { AddressId: input.AddressId }),
    ...(input.ClusterId != null && { ClusterId: input.ClusterId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ForwardingAddressId != null && { ForwardingAddressId: input.ForwardingAddressId }),
    ...(input.Notification != null && { Notification: se_Notification(input.Notification, context) }),
    ...(input.OnDeviceServiceConfiguration != null && {
      OnDeviceServiceConfiguration: se_OnDeviceServiceConfiguration(input.OnDeviceServiceConfiguration, context),
    }),
    ...(input.Resources != null && { Resources: se_JobResource(input.Resources, context) }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.ShippingOption != null && { ShippingOption: input.ShippingOption }),
  };
};

/**
 * serializeAws_json1_1UpdateJobRequest
 */
const se_UpdateJobRequest = (input: UpdateJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddressId != null && { AddressId: input.AddressId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ForwardingAddressId != null && { ForwardingAddressId: input.ForwardingAddressId }),
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.Notification != null && { Notification: se_Notification(input.Notification, context) }),
    ...(input.OnDeviceServiceConfiguration != null && {
      OnDeviceServiceConfiguration: se_OnDeviceServiceConfiguration(input.OnDeviceServiceConfiguration, context),
    }),
    ...(input.Resources != null && { Resources: se_JobResource(input.Resources, context) }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.ShippingOption != null && { ShippingOption: input.ShippingOption }),
    ...(input.SnowballCapacityPreference != null && { SnowballCapacityPreference: input.SnowballCapacityPreference }),
  };
};

/**
 * serializeAws_json1_1UpdateJobShipmentStateRequest
 */
const se_UpdateJobShipmentStateRequest = (input: UpdateJobShipmentStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.ShipmentState != null && { ShipmentState: input.ShipmentState }),
  };
};

/**
 * serializeAws_json1_1UpdateLongTermPricingRequest
 */
const se_UpdateLongTermPricingRequest = (input: UpdateLongTermPricingRequest, context: __SerdeContext): any => {
  return {
    ...(input.IsLongTermPricingAutoRenew != null && { IsLongTermPricingAutoRenew: input.IsLongTermPricingAutoRenew }),
    ...(input.LongTermPricingId != null && { LongTermPricingId: input.LongTermPricingId }),
    ...(input.ReplacementJob != null && { ReplacementJob: input.ReplacementJob }),
  };
};

/**
 * serializeAws_json1_1WirelessConnection
 */
const se_WirelessConnection = (input: WirelessConnection, context: __SerdeContext): any => {
  return {
    ...(input.IsWifiEnabled != null && { IsWifiEnabled: input.IsWifiEnabled }),
  };
};

/**
 * deserializeAws_json1_1Address
 */
const de_Address = (output: any, context: __SerdeContext): Address => {
  return {
    AddressId: __expectString(output.AddressId),
    City: __expectString(output.City),
    Company: __expectString(output.Company),
    Country: __expectString(output.Country),
    IsRestricted: __expectBoolean(output.IsRestricted),
    Landmark: __expectString(output.Landmark),
    Name: __expectString(output.Name),
    PhoneNumber: __expectString(output.PhoneNumber),
    PostalCode: __expectString(output.PostalCode),
    PrefectureOrDistrict: __expectString(output.PrefectureOrDistrict),
    StateOrProvince: __expectString(output.StateOrProvince),
    Street1: __expectString(output.Street1),
    Street2: __expectString(output.Street2),
    Street3: __expectString(output.Street3),
  } as any;
};

/**
 * deserializeAws_json1_1AddressList
 */
const de_AddressList = (output: any, context: __SerdeContext): Address[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Address(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CancelClusterResult
 */
const de_CancelClusterResult = (output: any, context: __SerdeContext): CancelClusterResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CancelJobResult
 */
const de_CancelJobResult = (output: any, context: __SerdeContext): CancelJobResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ClusterLimitExceededException
 */
const de_ClusterLimitExceededException = (output: any, context: __SerdeContext): ClusterLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ClusterListEntry
 */
const de_ClusterListEntry = (output: any, context: __SerdeContext): ClusterListEntry => {
  return {
    ClusterId: __expectString(output.ClusterId),
    ClusterState: __expectString(output.ClusterState),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    Description: __expectString(output.Description),
  } as any;
};

/**
 * deserializeAws_json1_1ClusterListEntryList
 */
const de_ClusterListEntryList = (output: any, context: __SerdeContext): ClusterListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ClusterListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClusterMetadata
 */
const de_ClusterMetadata = (output: any, context: __SerdeContext): ClusterMetadata => {
  return {
    AddressId: __expectString(output.AddressId),
    ClusterId: __expectString(output.ClusterId),
    ClusterState: __expectString(output.ClusterState),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    Description: __expectString(output.Description),
    ForwardingAddressId: __expectString(output.ForwardingAddressId),
    JobType: __expectString(output.JobType),
    KmsKeyARN: __expectString(output.KmsKeyARN),
    Notification: output.Notification != null ? de_Notification(output.Notification, context) : undefined,
    OnDeviceServiceConfiguration:
      output.OnDeviceServiceConfiguration != null
        ? de_OnDeviceServiceConfiguration(output.OnDeviceServiceConfiguration, context)
        : undefined,
    Resources: output.Resources != null ? de_JobResource(output.Resources, context) : undefined,
    RoleARN: __expectString(output.RoleARN),
    ShippingOption: __expectString(output.ShippingOption),
    SnowballType: __expectString(output.SnowballType),
    TaxDocuments: output.TaxDocuments != null ? de_TaxDocuments(output.TaxDocuments, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CompatibleImage
 */
const de_CompatibleImage = (output: any, context: __SerdeContext): CompatibleImage => {
  return {
    AmiId: __expectString(output.AmiId),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1CompatibleImageList
 */
const de_CompatibleImageList = (output: any, context: __SerdeContext): CompatibleImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CompatibleImage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    ConflictResource: __expectString(output.ConflictResource),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CreateAddressResult
 */
const de_CreateAddressResult = (output: any, context: __SerdeContext): CreateAddressResult => {
  return {
    AddressId: __expectString(output.AddressId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateClusterResult
 */
const de_CreateClusterResult = (output: any, context: __SerdeContext): CreateClusterResult => {
  return {
    ClusterId: __expectString(output.ClusterId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateJobResult
 */
const de_CreateJobResult = (output: any, context: __SerdeContext): CreateJobResult => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLongTermPricingResult
 */
const de_CreateLongTermPricingResult = (output: any, context: __SerdeContext): CreateLongTermPricingResult => {
  return {
    LongTermPricingId: __expectString(output.LongTermPricingId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateReturnShippingLabelResult
 */
const de_CreateReturnShippingLabelResult = (output: any, context: __SerdeContext): CreateReturnShippingLabelResult => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DataTransfer
 */
const de_DataTransfer = (output: any, context: __SerdeContext): DataTransfer => {
  return {
    BytesTransferred: __expectLong(output.BytesTransferred),
    ObjectsTransferred: __expectLong(output.ObjectsTransferred),
    TotalBytes: __expectLong(output.TotalBytes),
    TotalObjects: __expectLong(output.TotalObjects),
  } as any;
};

/**
 * deserializeAws_json1_1DependentService
 */
const de_DependentService = (output: any, context: __SerdeContext): DependentService => {
  return {
    ServiceName: __expectString(output.ServiceName),
    ServiceVersion: output.ServiceVersion != null ? de_ServiceVersion(output.ServiceVersion, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DependentServiceList
 */
const de_DependentServiceList = (output: any, context: __SerdeContext): DependentService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DependentService(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeAddressesResult
 */
const de_DescribeAddressesResult = (output: any, context: __SerdeContext): DescribeAddressesResult => {
  return {
    Addresses: output.Addresses != null ? de_AddressList(output.Addresses, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAddressResult
 */
const de_DescribeAddressResult = (output: any, context: __SerdeContext): DescribeAddressResult => {
  return {
    Address: output.Address != null ? de_Address(output.Address, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeClusterResult
 */
const de_DescribeClusterResult = (output: any, context: __SerdeContext): DescribeClusterResult => {
  return {
    ClusterMetadata: output.ClusterMetadata != null ? de_ClusterMetadata(output.ClusterMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeJobResult
 */
const de_DescribeJobResult = (output: any, context: __SerdeContext): DescribeJobResult => {
  return {
    JobMetadata: output.JobMetadata != null ? de_JobMetadata(output.JobMetadata, context) : undefined,
    SubJobMetadata: output.SubJobMetadata != null ? de_JobMetadataList(output.SubJobMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeReturnShippingLabelResult
 */
const de_DescribeReturnShippingLabelResult = (
  output: any,
  context: __SerdeContext
): DescribeReturnShippingLabelResult => {
  return {
    ExpirationDate:
      output.ExpirationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationDate)))
        : undefined,
    ReturnShippingLabelURI: __expectString(output.ReturnShippingLabelURI),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DeviceConfiguration
 */
const de_DeviceConfiguration = (output: any, context: __SerdeContext): DeviceConfiguration => {
  return {
    SnowconeDeviceConfiguration:
      output.SnowconeDeviceConfiguration != null
        ? de_SnowconeDeviceConfiguration(output.SnowconeDeviceConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Ec2AmiResource
 */
const de_Ec2AmiResource = (output: any, context: __SerdeContext): Ec2AmiResource => {
  return {
    AmiId: __expectString(output.AmiId),
    SnowballAmiId: __expectString(output.SnowballAmiId),
  } as any;
};

/**
 * deserializeAws_json1_1Ec2AmiResourceList
 */
const de_Ec2AmiResourceList = (output: any, context: __SerdeContext): Ec2AmiResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Ec2AmiResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Ec2RequestFailedException
 */
const de_Ec2RequestFailedException = (output: any, context: __SerdeContext): Ec2RequestFailedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EKSOnDeviceServiceConfiguration
 */
const de_EKSOnDeviceServiceConfiguration = (output: any, context: __SerdeContext): EKSOnDeviceServiceConfiguration => {
  return {
    EKSAnywhereVersion: __expectString(output.EKSAnywhereVersion),
    KubernetesVersion: __expectString(output.KubernetesVersion),
  } as any;
};

/**
 * deserializeAws_json1_1EventTriggerDefinition
 */
const de_EventTriggerDefinition = (output: any, context: __SerdeContext): EventTriggerDefinition => {
  return {
    EventResourceARN: __expectString(output.EventResourceARN),
  } as any;
};

/**
 * deserializeAws_json1_1EventTriggerDefinitionList
 */
const de_EventTriggerDefinitionList = (output: any, context: __SerdeContext): EventTriggerDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventTriggerDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetJobManifestResult
 */
const de_GetJobManifestResult = (output: any, context: __SerdeContext): GetJobManifestResult => {
  return {
    ManifestURI: __expectString(output.ManifestURI),
  } as any;
};

/**
 * deserializeAws_json1_1GetJobUnlockCodeResult
 */
const de_GetJobUnlockCodeResult = (output: any, context: __SerdeContext): GetJobUnlockCodeResult => {
  return {
    UnlockCode: __expectString(output.UnlockCode),
  } as any;
};

/**
 * deserializeAws_json1_1GetSnowballUsageResult
 */
const de_GetSnowballUsageResult = (output: any, context: __SerdeContext): GetSnowballUsageResult => {
  return {
    SnowballLimit: __expectInt32(output.SnowballLimit),
    SnowballsInUse: __expectInt32(output.SnowballsInUse),
  } as any;
};

/**
 * deserializeAws_json1_1GetSoftwareUpdatesResult
 */
const de_GetSoftwareUpdatesResult = (output: any, context: __SerdeContext): GetSoftwareUpdatesResult => {
  return {
    UpdatesURI: __expectString(output.UpdatesURI),
  } as any;
};

/**
 * deserializeAws_json1_1INDTaxDocuments
 */
const de_INDTaxDocuments = (output: any, context: __SerdeContext): INDTaxDocuments => {
  return {
    GSTIN: __expectString(output.GSTIN),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidAddressException
 */
const de_InvalidAddressException = (output: any, context: __SerdeContext): InvalidAddressException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInputCombinationException
 */
const de_InvalidInputCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidInputCombinationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidJobStateException
 */
const de_InvalidJobStateException = (output: any, context: __SerdeContext): InvalidJobStateException => {
  return {
    Message: __expectString(output.Message),
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
 * deserializeAws_json1_1InvalidResourceException
 */
const de_InvalidResourceException = (output: any, context: __SerdeContext): InvalidResourceException => {
  return {
    Message: __expectString(output.Message),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1JobListEntry
 */
const de_JobListEntry = (output: any, context: __SerdeContext): JobListEntry => {
  return {
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    Description: __expectString(output.Description),
    IsMaster: __expectBoolean(output.IsMaster),
    JobId: __expectString(output.JobId),
    JobState: __expectString(output.JobState),
    JobType: __expectString(output.JobType),
    SnowballType: __expectString(output.SnowballType),
  } as any;
};

/**
 * deserializeAws_json1_1JobListEntryList
 */
const de_JobListEntryList = (output: any, context: __SerdeContext): JobListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1JobLogs
 */
const de_JobLogs = (output: any, context: __SerdeContext): JobLogs => {
  return {
    JobCompletionReportURI: __expectString(output.JobCompletionReportURI),
    JobFailureLogURI: __expectString(output.JobFailureLogURI),
    JobSuccessLogURI: __expectString(output.JobSuccessLogURI),
  } as any;
};

/**
 * deserializeAws_json1_1JobMetadata
 */
const de_JobMetadata = (output: any, context: __SerdeContext): JobMetadata => {
  return {
    AddressId: __expectString(output.AddressId),
    ClusterId: __expectString(output.ClusterId),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    DataTransferProgress:
      output.DataTransferProgress != null ? de_DataTransfer(output.DataTransferProgress, context) : undefined,
    Description: __expectString(output.Description),
    DeviceConfiguration:
      output.DeviceConfiguration != null ? de_DeviceConfiguration(output.DeviceConfiguration, context) : undefined,
    ForwardingAddressId: __expectString(output.ForwardingAddressId),
    JobId: __expectString(output.JobId),
    JobLogInfo: output.JobLogInfo != null ? de_JobLogs(output.JobLogInfo, context) : undefined,
    JobState: __expectString(output.JobState),
    JobType: __expectString(output.JobType),
    KmsKeyARN: __expectString(output.KmsKeyARN),
    LongTermPricingId: __expectString(output.LongTermPricingId),
    Notification: output.Notification != null ? de_Notification(output.Notification, context) : undefined,
    OnDeviceServiceConfiguration:
      output.OnDeviceServiceConfiguration != null
        ? de_OnDeviceServiceConfiguration(output.OnDeviceServiceConfiguration, context)
        : undefined,
    RemoteManagement: __expectString(output.RemoteManagement),
    Resources: output.Resources != null ? de_JobResource(output.Resources, context) : undefined,
    RoleARN: __expectString(output.RoleARN),
    ShippingDetails: output.ShippingDetails != null ? de_ShippingDetails(output.ShippingDetails, context) : undefined,
    SnowballCapacityPreference: __expectString(output.SnowballCapacityPreference),
    SnowballType: __expectString(output.SnowballType),
    TaxDocuments: output.TaxDocuments != null ? de_TaxDocuments(output.TaxDocuments, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1JobMetadataList
 */
const de_JobMetadataList = (output: any, context: __SerdeContext): JobMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1JobResource
 */
const de_JobResource = (output: any, context: __SerdeContext): JobResource => {
  return {
    Ec2AmiResources:
      output.Ec2AmiResources != null ? de_Ec2AmiResourceList(output.Ec2AmiResources, context) : undefined,
    LambdaResources:
      output.LambdaResources != null ? de_LambdaResourceList(output.LambdaResources, context) : undefined,
    S3Resources: output.S3Resources != null ? de_S3ResourceList(output.S3Resources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1JobStateList
 */
const de_JobStateList = (output: any, context: __SerdeContext): (JobState | string)[] => {
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
 * deserializeAws_json1_1KeyRange
 */
const de_KeyRange = (output: any, context: __SerdeContext): KeyRange => {
  return {
    BeginMarker: __expectString(output.BeginMarker),
    EndMarker: __expectString(output.EndMarker),
  } as any;
};

/**
 * deserializeAws_json1_1KMSRequestFailedException
 */
const de_KMSRequestFailedException = (output: any, context: __SerdeContext): KMSRequestFailedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1LambdaResource
 */
const de_LambdaResource = (output: any, context: __SerdeContext): LambdaResource => {
  return {
    EventTriggers:
      output.EventTriggers != null ? de_EventTriggerDefinitionList(output.EventTriggers, context) : undefined,
    LambdaArn: __expectString(output.LambdaArn),
  } as any;
};

/**
 * deserializeAws_json1_1LambdaResourceList
 */
const de_LambdaResourceList = (output: any, context: __SerdeContext): LambdaResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LambdaResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListClusterJobsResult
 */
const de_ListClusterJobsResult = (output: any, context: __SerdeContext): ListClusterJobsResult => {
  return {
    JobListEntries: output.JobListEntries != null ? de_JobListEntryList(output.JobListEntries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListClustersResult
 */
const de_ListClustersResult = (output: any, context: __SerdeContext): ListClustersResult => {
  return {
    ClusterListEntries:
      output.ClusterListEntries != null ? de_ClusterListEntryList(output.ClusterListEntries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCompatibleImagesResult
 */
const de_ListCompatibleImagesResult = (output: any, context: __SerdeContext): ListCompatibleImagesResult => {
  return {
    CompatibleImages:
      output.CompatibleImages != null ? de_CompatibleImageList(output.CompatibleImages, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListJobsResult
 */
const de_ListJobsResult = (output: any, context: __SerdeContext): ListJobsResult => {
  return {
    JobListEntries: output.JobListEntries != null ? de_JobListEntryList(output.JobListEntries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListLongTermPricingResult
 */
const de_ListLongTermPricingResult = (output: any, context: __SerdeContext): ListLongTermPricingResult => {
  return {
    LongTermPricingEntries:
      output.LongTermPricingEntries != null
        ? de_LongTermPricingEntryList(output.LongTermPricingEntries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListServiceVersionsResult
 */
const de_ListServiceVersionsResult = (output: any, context: __SerdeContext): ListServiceVersionsResult => {
  return {
    DependentServices:
      output.DependentServices != null ? de_DependentServiceList(output.DependentServices, context) : undefined,
    NextToken: __expectString(output.NextToken),
    ServiceName: __expectString(output.ServiceName),
    ServiceVersions:
      output.ServiceVersions != null ? de_ServiceVersionList(output.ServiceVersions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LongTermPricingAssociatedJobIdList
 */
const de_LongTermPricingAssociatedJobIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1LongTermPricingEntryList
 */
const de_LongTermPricingEntryList = (output: any, context: __SerdeContext): LongTermPricingListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LongTermPricingListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LongTermPricingListEntry
 */
const de_LongTermPricingListEntry = (output: any, context: __SerdeContext): LongTermPricingListEntry => {
  return {
    CurrentActiveJob: __expectString(output.CurrentActiveJob),
    IsLongTermPricingAutoRenew: __expectBoolean(output.IsLongTermPricingAutoRenew),
    JobIds: output.JobIds != null ? de_LongTermPricingAssociatedJobIdList(output.JobIds, context) : undefined,
    LongTermPricingEndDate:
      output.LongTermPricingEndDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LongTermPricingEndDate)))
        : undefined,
    LongTermPricingId: __expectString(output.LongTermPricingId),
    LongTermPricingStartDate:
      output.LongTermPricingStartDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LongTermPricingStartDate)))
        : undefined,
    LongTermPricingStatus: __expectString(output.LongTermPricingStatus),
    LongTermPricingType: __expectString(output.LongTermPricingType),
    ReplacementJob: __expectString(output.ReplacementJob),
    SnowballType: __expectString(output.SnowballType),
  } as any;
};

/**
 * deserializeAws_json1_1NFSOnDeviceServiceConfiguration
 */
const de_NFSOnDeviceServiceConfiguration = (output: any, context: __SerdeContext): NFSOnDeviceServiceConfiguration => {
  return {
    StorageLimit: __expectInt32(output.StorageLimit),
    StorageUnit: __expectString(output.StorageUnit),
  } as any;
};

/**
 * deserializeAws_json1_1Notification
 */
const de_Notification = (output: any, context: __SerdeContext): Notification => {
  return {
    JobStatesToNotify:
      output.JobStatesToNotify != null ? de_JobStateList(output.JobStatesToNotify, context) : undefined,
    NotifyAll: __expectBoolean(output.NotifyAll),
    SnsTopicARN: __expectString(output.SnsTopicARN),
  } as any;
};

/**
 * deserializeAws_json1_1OnDeviceServiceConfiguration
 */
const de_OnDeviceServiceConfiguration = (output: any, context: __SerdeContext): OnDeviceServiceConfiguration => {
  return {
    EKSOnDeviceService:
      output.EKSOnDeviceService != null
        ? de_EKSOnDeviceServiceConfiguration(output.EKSOnDeviceService, context)
        : undefined,
    NFSOnDeviceService:
      output.NFSOnDeviceService != null
        ? de_NFSOnDeviceServiceConfiguration(output.NFSOnDeviceService, context)
        : undefined,
    TGWOnDeviceService:
      output.TGWOnDeviceService != null
        ? de_TGWOnDeviceServiceConfiguration(output.TGWOnDeviceService, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ReturnShippingLabelAlreadyExistsException
 */
const de_ReturnShippingLabelAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ReturnShippingLabelAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1S3Resource
 */
const de_S3Resource = (output: any, context: __SerdeContext): S3Resource => {
  return {
    BucketArn: __expectString(output.BucketArn),
    KeyRange: output.KeyRange != null ? de_KeyRange(output.KeyRange, context) : undefined,
    TargetOnDeviceServices:
      output.TargetOnDeviceServices != null
        ? de_TargetOnDeviceServiceList(output.TargetOnDeviceServices, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1S3ResourceList
 */
const de_S3ResourceList = (output: any, context: __SerdeContext): S3Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_S3Resource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceVersion
 */
const de_ServiceVersion = (output: any, context: __SerdeContext): ServiceVersion => {
  return {
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceVersionList
 */
const de_ServiceVersionList = (output: any, context: __SerdeContext): ServiceVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Shipment
 */
const de_Shipment = (output: any, context: __SerdeContext): Shipment => {
  return {
    Status: __expectString(output.Status),
    TrackingNumber: __expectString(output.TrackingNumber),
  } as any;
};

/**
 * deserializeAws_json1_1ShippingDetails
 */
const de_ShippingDetails = (output: any, context: __SerdeContext): ShippingDetails => {
  return {
    InboundShipment: output.InboundShipment != null ? de_Shipment(output.InboundShipment, context) : undefined,
    OutboundShipment: output.OutboundShipment != null ? de_Shipment(output.OutboundShipment, context) : undefined,
    ShippingOption: __expectString(output.ShippingOption),
  } as any;
};

/**
 * deserializeAws_json1_1SnowconeDeviceConfiguration
 */
const de_SnowconeDeviceConfiguration = (output: any, context: __SerdeContext): SnowconeDeviceConfiguration => {
  return {
    WirelessConnection:
      output.WirelessConnection != null ? de_WirelessConnection(output.WirelessConnection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TargetOnDeviceService
 */
const de_TargetOnDeviceService = (output: any, context: __SerdeContext): TargetOnDeviceService => {
  return {
    ServiceName: __expectString(output.ServiceName),
    TransferOption: __expectString(output.TransferOption),
  } as any;
};

/**
 * deserializeAws_json1_1TargetOnDeviceServiceList
 */
const de_TargetOnDeviceServiceList = (output: any, context: __SerdeContext): TargetOnDeviceService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TargetOnDeviceService(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TaxDocuments
 */
const de_TaxDocuments = (output: any, context: __SerdeContext): TaxDocuments => {
  return {
    IND: output.IND != null ? de_INDTaxDocuments(output.IND, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TGWOnDeviceServiceConfiguration
 */
const de_TGWOnDeviceServiceConfiguration = (output: any, context: __SerdeContext): TGWOnDeviceServiceConfiguration => {
  return {
    StorageLimit: __expectInt32(output.StorageLimit),
    StorageUnit: __expectString(output.StorageUnit),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedAddressException
 */
const de_UnsupportedAddressException = (output: any, context: __SerdeContext): UnsupportedAddressException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateClusterResult
 */
const de_UpdateClusterResult = (output: any, context: __SerdeContext): UpdateClusterResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateJobResult
 */
const de_UpdateJobResult = (output: any, context: __SerdeContext): UpdateJobResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateJobShipmentStateResult
 */
const de_UpdateJobShipmentStateResult = (output: any, context: __SerdeContext): UpdateJobShipmentStateResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateLongTermPricingResult
 */
const de_UpdateLongTermPricingResult = (output: any, context: __SerdeContext): UpdateLongTermPricingResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1WirelessConnection
 */
const de_WirelessConnection = (output: any, context: __SerdeContext): WirelessConnection => {
  return {
    IsWifiEnabled: __expectBoolean(output.IsWifiEnabled),
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
