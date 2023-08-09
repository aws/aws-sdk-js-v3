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
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  ListPickupLocationsCommandInput,
  ListPickupLocationsCommandOutput,
} from "../commands/ListPickupLocationsCommand";
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
  CancelJobRequest,
  ClusterLimitExceededException,
  ClusterListEntry,
  ClusterMetadata,
  ConflictException,
  CreateAddressRequest,
  CreateClusterRequest,
  CreateClusterResult,
  CreateJobRequest,
  CreateLongTermPricingRequest,
  CreateReturnShippingLabelRequest,
  DependentService,
  DescribeAddressesRequest,
  DescribeAddressRequest,
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
  GetJobUnlockCodeRequest,
  GetSnowballUsageRequest,
  GetSoftwareUpdatesRequest,
  INDTaxDocuments,
  InvalidAddressException,
  InvalidInputCombinationException,
  InvalidJobStateException,
  InvalidNextTokenException,
  InvalidResourceException,
  JobListEntry,
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
  ListJobsRequest,
  ListJobsResult,
  ListLongTermPricingRequest,
  ListLongTermPricingResult,
  ListPickupLocationsRequest,
  ListServiceVersionsRequest,
  LongTermPricingListEntry,
  NFSOnDeviceServiceConfiguration,
  Notification,
  OnDeviceServiceConfiguration,
  PickupDetails,
  ReturnShippingLabelAlreadyExistsException,
  S3OnDeviceServiceConfiguration,
  S3Resource,
  ServiceVersion,
  SnowconeDeviceConfiguration,
  TargetOnDeviceService,
  TaxDocuments,
  TGWOnDeviceServiceConfiguration,
  UnsupportedAddressException,
  UpdateClusterRequest,
  UpdateJobRequest,
  UpdateJobShipmentStateRequest,
  UpdateLongTermPricingRequest,
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
  const headers: __HeaderBag = sharedHeaders("CancelCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelJobCommand
 */
export const se_CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAddressCommand
 */
export const se_CreateAddressCommand = async (
  input: CreateAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAddress");
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
  const headers: __HeaderBag = sharedHeaders("CreateJob");
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
  const headers: __HeaderBag = sharedHeaders("CreateLongTermPricing");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateReturnShippingLabelCommand
 */
export const se_CreateReturnShippingLabelCommand = async (
  input: CreateReturnShippingLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateReturnShippingLabel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAddressCommand
 */
export const se_DescribeAddressCommand = async (
  input: DescribeAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAddress");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAddressesCommand
 */
export const se_DescribeAddressesCommand = async (
  input: DescribeAddressesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAddresses");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClusterCommand
 */
export const se_DescribeClusterCommand = async (
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeJobCommand
 */
export const se_DescribeJobCommand = async (
  input: DescribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReturnShippingLabelCommand
 */
export const se_DescribeReturnShippingLabelCommand = async (
  input: DescribeReturnShippingLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReturnShippingLabel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetJobManifestCommand
 */
export const se_GetJobManifestCommand = async (
  input: GetJobManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetJobManifest");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetJobUnlockCodeCommand
 */
export const se_GetJobUnlockCodeCommand = async (
  input: GetJobUnlockCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetJobUnlockCode");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSnowballUsageCommand
 */
export const se_GetSnowballUsageCommand = async (
  input: GetSnowballUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSnowballUsage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSoftwareUpdatesCommand
 */
export const se_GetSoftwareUpdatesCommand = async (
  input: GetSoftwareUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSoftwareUpdates");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListClusterJobsCommand
 */
export const se_ListClusterJobsCommand = async (
  input: ListClusterJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListClusterJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListClustersCommand
 */
export const se_ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListClusters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCompatibleImagesCommand
 */
export const se_ListCompatibleImagesCommand = async (
  input: ListCompatibleImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCompatibleImages");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListJobsCommand
 */
export const se_ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLongTermPricingCommand
 */
export const se_ListLongTermPricingCommand = async (
  input: ListLongTermPricingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLongTermPricing");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPickupLocationsCommand
 */
export const se_ListPickupLocationsCommand = async (
  input: ListPickupLocationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPickupLocations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServiceVersionsCommand
 */
export const se_ListServiceVersionsCommand = async (
  input: ListServiceVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServiceVersions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateClusterCommand
 */
export const se_UpdateClusterCommand = async (
  input: UpdateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCluster");
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
  const headers: __HeaderBag = sharedHeaders("UpdateJob");
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
  const headers: __HeaderBag = sharedHeaders("UpdateJobShipmentState");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLongTermPricingCommand
 */
export const se_UpdateLongTermPricingCommand = async (
  input: UpdateLongTermPricingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLongTermPricing");
  let body: any;
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: CancelClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CancelJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLongTermPricingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateReturnShippingLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeAddressesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetJobManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetJobUnlockCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetSnowballUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  return throwDefaultError({
    output,
    parsedBody,
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
  contents = _json(data);
  const response: GetSoftwareUpdatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListCompatibleImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListPickupLocationsCommand
 */
export const de_ListPickupLocationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPickupLocationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPickupLocationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListPickupLocationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPickupLocationsCommandError
 */
const de_ListPickupLocationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPickupLocationsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListServiceVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateJobShipmentStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateLongTermPricingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UnsupportedAddressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_Address omitted.

// se_CancelClusterRequest omitted.

// se_CancelJobRequest omitted.

// se_CreateAddressRequest omitted.

/**
 * serializeAws_json1_1CreateClusterRequest
 */
const se_CreateClusterRequest = (input: CreateClusterRequest, context: __SerdeContext): any => {
  return take(input, {
    AddressId: [],
    Description: [],
    ForceCreateJobs: [],
    ForwardingAddressId: [],
    InitialClusterSize: [],
    JobType: [],
    KmsKeyARN: [],
    LongTermPricingIds: _json,
    Notification: _json,
    OnDeviceServiceConfiguration: (_) => se_OnDeviceServiceConfiguration(_, context),
    RemoteManagement: [],
    Resources: _json,
    RoleARN: [],
    ShippingOption: [],
    SnowballCapacityPreference: [],
    SnowballType: [],
    TaxDocuments: _json,
  });
};

/**
 * serializeAws_json1_1CreateJobRequest
 */
const se_CreateJobRequest = (input: CreateJobRequest, context: __SerdeContext): any => {
  return take(input, {
    AddressId: [],
    ClusterId: [],
    Description: [],
    DeviceConfiguration: _json,
    ForwardingAddressId: [],
    ImpactLevel: [],
    JobType: [],
    KmsKeyARN: [],
    LongTermPricingId: [],
    Notification: _json,
    OnDeviceServiceConfiguration: (_) => se_OnDeviceServiceConfiguration(_, context),
    PickupDetails: (_) => se_PickupDetails(_, context),
    RemoteManagement: [],
    Resources: _json,
    RoleARN: [],
    ShippingOption: [],
    SnowballCapacityPreference: [],
    SnowballType: [],
    TaxDocuments: _json,
  });
};

// se_CreateLongTermPricingRequest omitted.

// se_CreateReturnShippingLabelRequest omitted.

// se_DependentService omitted.

// se_DependentServiceList omitted.

// se_DescribeAddressesRequest omitted.

// se_DescribeAddressRequest omitted.

// se_DescribeClusterRequest omitted.

// se_DescribeJobRequest omitted.

// se_DescribeReturnShippingLabelRequest omitted.

// se_DeviceConfiguration omitted.

// se_Ec2AmiResource omitted.

// se_Ec2AmiResourceList omitted.

// se_EKSOnDeviceServiceConfiguration omitted.

// se_EventTriggerDefinition omitted.

// se_EventTriggerDefinitionList omitted.

// se_GetJobManifestRequest omitted.

// se_GetJobUnlockCodeRequest omitted.

// se_GetSnowballUsageRequest omitted.

// se_GetSoftwareUpdatesRequest omitted.

// se_INDTaxDocuments omitted.

// se_JobResource omitted.

// se_JobStateList omitted.

// se_KeyRange omitted.

// se_LambdaResource omitted.

// se_LambdaResourceList omitted.

// se_ListClusterJobsRequest omitted.

// se_ListClustersRequest omitted.

// se_ListCompatibleImagesRequest omitted.

// se_ListJobsRequest omitted.

// se_ListLongTermPricingRequest omitted.

// se_ListPickupLocationsRequest omitted.

// se_ListServiceVersionsRequest omitted.

// se_LongTermPricingIdList omitted.

// se_NFSOnDeviceServiceConfiguration omitted.

// se_Notification omitted.

/**
 * serializeAws_json1_1OnDeviceServiceConfiguration
 */
const se_OnDeviceServiceConfiguration = (input: OnDeviceServiceConfiguration, context: __SerdeContext): any => {
  return take(input, {
    EKSOnDeviceService: _json,
    NFSOnDeviceService: _json,
    S3OnDeviceService: (_) => se_S3OnDeviceServiceConfiguration(_, context),
    TGWOnDeviceService: _json,
  });
};

/**
 * serializeAws_json1_1PickupDetails
 */
const se_PickupDetails = (input: PickupDetails, context: __SerdeContext): any => {
  return take(input, {
    DevicePickupId: [],
    Email: [],
    IdentificationExpirationDate: (_) => Math.round(_.getTime() / 1000),
    IdentificationIssuingOrg: [],
    IdentificationNumber: [],
    Name: [],
    PhoneNumber: [],
  });
};

/**
 * serializeAws_json1_1S3OnDeviceServiceConfiguration
 */
const se_S3OnDeviceServiceConfiguration = (input: S3OnDeviceServiceConfiguration, context: __SerdeContext): any => {
  return take(input, {
    FaultTolerance: [],
    ServiceSize: [],
    StorageLimit: __serializeFloat,
    StorageUnit: [],
  });
};

// se_S3Resource omitted.

// se_S3ResourceList omitted.

// se_ServiceVersion omitted.

// se_SnowconeDeviceConfiguration omitted.

// se_TargetOnDeviceService omitted.

// se_TargetOnDeviceServiceList omitted.

// se_TaxDocuments omitted.

// se_TGWOnDeviceServiceConfiguration omitted.

/**
 * serializeAws_json1_1UpdateClusterRequest
 */
const se_UpdateClusterRequest = (input: UpdateClusterRequest, context: __SerdeContext): any => {
  return take(input, {
    AddressId: [],
    ClusterId: [],
    Description: [],
    ForwardingAddressId: [],
    Notification: _json,
    OnDeviceServiceConfiguration: (_) => se_OnDeviceServiceConfiguration(_, context),
    Resources: _json,
    RoleARN: [],
    ShippingOption: [],
  });
};

/**
 * serializeAws_json1_1UpdateJobRequest
 */
const se_UpdateJobRequest = (input: UpdateJobRequest, context: __SerdeContext): any => {
  return take(input, {
    AddressId: [],
    Description: [],
    ForwardingAddressId: [],
    JobId: [],
    Notification: _json,
    OnDeviceServiceConfiguration: (_) => se_OnDeviceServiceConfiguration(_, context),
    PickupDetails: (_) => se_PickupDetails(_, context),
    Resources: _json,
    RoleARN: [],
    ShippingOption: [],
    SnowballCapacityPreference: [],
  });
};

// se_UpdateJobShipmentStateRequest omitted.

// se_UpdateLongTermPricingRequest omitted.

// se_WirelessConnection omitted.

// de_Address omitted.

// de_AddressList omitted.

// de_CancelClusterResult omitted.

// de_CancelJobResult omitted.

// de_ClusterLimitExceededException omitted.

/**
 * deserializeAws_json1_1ClusterListEntry
 */
const de_ClusterListEntry = (output: any, context: __SerdeContext): ClusterListEntry => {
  return take(output, {
    ClusterId: __expectString,
    ClusterState: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ClusterListEntryList
 */
const de_ClusterListEntryList = (output: any, context: __SerdeContext): ClusterListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClusterMetadata
 */
const de_ClusterMetadata = (output: any, context: __SerdeContext): ClusterMetadata => {
  return take(output, {
    AddressId: __expectString,
    ClusterId: __expectString,
    ClusterState: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ForwardingAddressId: __expectString,
    JobType: __expectString,
    KmsKeyARN: __expectString,
    Notification: _json,
    OnDeviceServiceConfiguration: (_: any) => de_OnDeviceServiceConfiguration(_, context),
    Resources: _json,
    RoleARN: __expectString,
    ShippingOption: __expectString,
    SnowballType: __expectString,
    TaxDocuments: _json,
  }) as any;
};

// de_CompatibleImage omitted.

// de_CompatibleImageList omitted.

// de_ConflictException omitted.

// de_CreateAddressResult omitted.

/**
 * deserializeAws_json1_1CreateClusterResult
 */
const de_CreateClusterResult = (output: any, context: __SerdeContext): CreateClusterResult => {
  return take(output, {
    ClusterId: __expectString,
    JobListEntries: (_: any) => de_JobListEntryList(_, context),
  }) as any;
};

// de_CreateJobResult omitted.

// de_CreateLongTermPricingResult omitted.

// de_CreateReturnShippingLabelResult omitted.

// de_DataTransfer omitted.

// de_DependentService omitted.

// de_DependentServiceList omitted.

// de_DescribeAddressesResult omitted.

// de_DescribeAddressResult omitted.

/**
 * deserializeAws_json1_1DescribeClusterResult
 */
const de_DescribeClusterResult = (output: any, context: __SerdeContext): DescribeClusterResult => {
  return take(output, {
    ClusterMetadata: (_: any) => de_ClusterMetadata(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeJobResult
 */
const de_DescribeJobResult = (output: any, context: __SerdeContext): DescribeJobResult => {
  return take(output, {
    JobMetadata: (_: any) => de_JobMetadata(_, context),
    SubJobMetadata: (_: any) => de_JobMetadataList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeReturnShippingLabelResult
 */
const de_DescribeReturnShippingLabelResult = (
  output: any,
  context: __SerdeContext
): DescribeReturnShippingLabelResult => {
  return take(output, {
    ExpirationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReturnShippingLabelURI: __expectString,
    Status: __expectString,
  }) as any;
};

// de_DeviceConfiguration omitted.

// de_Ec2AmiResource omitted.

// de_Ec2AmiResourceList omitted.

// de_Ec2RequestFailedException omitted.

// de_EKSOnDeviceServiceConfiguration omitted.

// de_EventTriggerDefinition omitted.

// de_EventTriggerDefinitionList omitted.

// de_GetJobManifestResult omitted.

// de_GetJobUnlockCodeResult omitted.

// de_GetSnowballUsageResult omitted.

// de_GetSoftwareUpdatesResult omitted.

// de_INDTaxDocuments omitted.

// de_InvalidAddressException omitted.

// de_InvalidInputCombinationException omitted.

// de_InvalidJobStateException omitted.

// de_InvalidNextTokenException omitted.

// de_InvalidResourceException omitted.

/**
 * deserializeAws_json1_1JobListEntry
 */
const de_JobListEntry = (output: any, context: __SerdeContext): JobListEntry => {
  return take(output, {
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    IsMaster: __expectBoolean,
    JobId: __expectString,
    JobState: __expectString,
    JobType: __expectString,
    SnowballType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1JobListEntryList
 */
const de_JobListEntryList = (output: any, context: __SerdeContext): JobListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobListEntry(entry, context);
    });
  return retVal;
};

// de_JobLogs omitted.

/**
 * deserializeAws_json1_1JobMetadata
 */
const de_JobMetadata = (output: any, context: __SerdeContext): JobMetadata => {
  return take(output, {
    AddressId: __expectString,
    ClusterId: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataTransferProgress: _json,
    Description: __expectString,
    DeviceConfiguration: _json,
    ForwardingAddressId: __expectString,
    ImpactLevel: __expectString,
    JobId: __expectString,
    JobLogInfo: _json,
    JobState: __expectString,
    JobType: __expectString,
    KmsKeyARN: __expectString,
    LongTermPricingId: __expectString,
    Notification: _json,
    OnDeviceServiceConfiguration: (_: any) => de_OnDeviceServiceConfiguration(_, context),
    PickupDetails: (_: any) => de_PickupDetails(_, context),
    RemoteManagement: __expectString,
    Resources: _json,
    RoleARN: __expectString,
    ShippingDetails: _json,
    SnowballCapacityPreference: __expectString,
    SnowballId: __expectString,
    SnowballType: __expectString,
    TaxDocuments: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1JobMetadataList
 */
const de_JobMetadataList = (output: any, context: __SerdeContext): JobMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_JobMetadata(entry, context);
    });
  return retVal;
};

// de_JobResource omitted.

// de_JobStateList omitted.

// de_KeyRange omitted.

// de_KMSRequestFailedException omitted.

// de_LambdaResource omitted.

// de_LambdaResourceList omitted.

/**
 * deserializeAws_json1_1ListClusterJobsResult
 */
const de_ListClusterJobsResult = (output: any, context: __SerdeContext): ListClusterJobsResult => {
  return take(output, {
    JobListEntries: (_: any) => de_JobListEntryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListClustersResult
 */
const de_ListClustersResult = (output: any, context: __SerdeContext): ListClustersResult => {
  return take(output, {
    ClusterListEntries: (_: any) => de_ClusterListEntryList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListCompatibleImagesResult omitted.

/**
 * deserializeAws_json1_1ListJobsResult
 */
const de_ListJobsResult = (output: any, context: __SerdeContext): ListJobsResult => {
  return take(output, {
    JobListEntries: (_: any) => de_JobListEntryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListLongTermPricingResult
 */
const de_ListLongTermPricingResult = (output: any, context: __SerdeContext): ListLongTermPricingResult => {
  return take(output, {
    LongTermPricingEntries: (_: any) => de_LongTermPricingEntryList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListPickupLocationsResult omitted.

// de_ListServiceVersionsResult omitted.

// de_LongTermPricingAssociatedJobIdList omitted.

/**
 * deserializeAws_json1_1LongTermPricingEntryList
 */
const de_LongTermPricingEntryList = (output: any, context: __SerdeContext): LongTermPricingListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LongTermPricingListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LongTermPricingListEntry
 */
const de_LongTermPricingListEntry = (output: any, context: __SerdeContext): LongTermPricingListEntry => {
  return take(output, {
    CurrentActiveJob: __expectString,
    IsLongTermPricingAutoRenew: __expectBoolean,
    JobIds: _json,
    LongTermPricingEndDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LongTermPricingId: __expectString,
    LongTermPricingStartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LongTermPricingStatus: __expectString,
    LongTermPricingType: __expectString,
    ReplacementJob: __expectString,
    SnowballType: __expectString,
  }) as any;
};

// de_NFSOnDeviceServiceConfiguration omitted.

// de_Notification omitted.

/**
 * deserializeAws_json1_1OnDeviceServiceConfiguration
 */
const de_OnDeviceServiceConfiguration = (output: any, context: __SerdeContext): OnDeviceServiceConfiguration => {
  return take(output, {
    EKSOnDeviceService: _json,
    NFSOnDeviceService: _json,
    S3OnDeviceService: (_: any) => de_S3OnDeviceServiceConfiguration(_, context),
    TGWOnDeviceService: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1PickupDetails
 */
const de_PickupDetails = (output: any, context: __SerdeContext): PickupDetails => {
  return take(output, {
    DevicePickupId: __expectString,
    Email: __expectString,
    IdentificationExpirationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IdentificationIssuingOrg: __expectString,
    IdentificationNumber: __expectString,
    Name: __expectString,
    PhoneNumber: __expectString,
  }) as any;
};

// de_ReturnShippingLabelAlreadyExistsException omitted.

/**
 * deserializeAws_json1_1S3OnDeviceServiceConfiguration
 */
const de_S3OnDeviceServiceConfiguration = (output: any, context: __SerdeContext): S3OnDeviceServiceConfiguration => {
  return take(output, {
    FaultTolerance: __expectInt32,
    ServiceSize: __expectInt32,
    StorageLimit: __limitedParseDouble,
    StorageUnit: __expectString,
  }) as any;
};

// de_S3Resource omitted.

// de_S3ResourceList omitted.

// de_ServiceVersion omitted.

// de_ServiceVersionList omitted.

// de_Shipment omitted.

// de_ShippingDetails omitted.

// de_SnowconeDeviceConfiguration omitted.

// de_TargetOnDeviceService omitted.

// de_TargetOnDeviceServiceList omitted.

// de_TaxDocuments omitted.

// de_TGWOnDeviceServiceConfiguration omitted.

// de_UnsupportedAddressException omitted.

// de_UpdateClusterResult omitted.

// de_UpdateJobResult omitted.

// de_UpdateJobShipmentStateResult omitted.

// de_UpdateLongTermPricingResult omitted.

// de_WirelessConnection omitted.

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
    "x-amz-target": `AWSIESnowballJobManagementService.${operation}`,
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
