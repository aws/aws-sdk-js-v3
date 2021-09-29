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
  DescribeAddressRequest,
  DescribeAddressResult,
  DescribeAddressesRequest,
  DescribeAddressesResult,
  DescribeClusterRequest,
  DescribeClusterResult,
  DescribeJobRequest,
  DescribeJobResult,
  DescribeReturnShippingLabelRequest,
  DescribeReturnShippingLabelResult,
  DeviceConfiguration,
  Ec2AmiResource,
  Ec2RequestFailedException,
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
  KMSRequestFailedException,
  KeyRange,
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
  LongTermPricingListEntry,
  NFSOnDeviceServiceConfiguration,
  Notification,
  OnDeviceServiceConfiguration,
  ReturnShippingLabelAlreadyExistsException,
  S3Resource,
  Shipment,
  ShippingDetails,
  SnowconeDeviceConfiguration,
  TargetOnDeviceService,
  TaxDocuments,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
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

export const serializeAws_json1_1CancelClusterCommand = async (
  input: CancelClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.CancelCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.CancelJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAddressCommand = async (
  input: CreateAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.CreateAddress",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAddressRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.CreateCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.CreateJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLongTermPricingCommand = async (
  input: CreateLongTermPricingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.CreateLongTermPricing",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLongTermPricingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateReturnShippingLabelCommand = async (
  input: CreateReturnShippingLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.CreateReturnShippingLabel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateReturnShippingLabelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAddressCommand = async (
  input: DescribeAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.DescribeAddress",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAddressRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAddressesCommand = async (
  input: DescribeAddressesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.DescribeAddresses",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAddressesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeClusterCommand = async (
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.DescribeCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeJobCommand = async (
  input: DescribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.DescribeJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeReturnShippingLabelCommand = async (
  input: DescribeReturnShippingLabelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.DescribeReturnShippingLabel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeReturnShippingLabelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobManifestCommand = async (
  input: GetJobManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.GetJobManifest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetJobManifestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobUnlockCodeCommand = async (
  input: GetJobUnlockCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.GetJobUnlockCode",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetJobUnlockCodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSnowballUsageCommand = async (
  input: GetSnowballUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.GetSnowballUsage",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSnowballUsageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSoftwareUpdatesCommand = async (
  input: GetSoftwareUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.GetSoftwareUpdates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSoftwareUpdatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListClusterJobsCommand = async (
  input: ListClusterJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.ListClusterJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListClusterJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.ListClusters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListClustersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCompatibleImagesCommand = async (
  input: ListCompatibleImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.ListCompatibleImages",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCompatibleImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.ListJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLongTermPricingCommand = async (
  input: ListLongTermPricingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.ListLongTermPricing",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLongTermPricingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateClusterCommand = async (
  input: UpdateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.UpdateCluster",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateClusterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateJobCommand = async (
  input: UpdateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.UpdateJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateJobShipmentStateCommand = async (
  input: UpdateJobShipmentStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.UpdateJobShipmentState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateJobShipmentStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateLongTermPricingCommand = async (
  input: UpdateLongTermPricingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSIESnowballJobManagementService.UpdateLongTermPricing",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateLongTermPricingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CancelClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelClusterResult(data, context);
  const response: CancelClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      response = {
        ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CancelJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelJobResult(data, context);
  const response: CancelJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      response = {
        ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddressCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAddressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAddressResult(data, context);
  const response: CreateAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAddressException":
    case "com.amazonaws.snowball#InvalidAddressException":
      response = {
        ...(await deserializeAws_json1_1InvalidAddressExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedAddressException":
    case "com.amazonaws.snowball#UnsupportedAddressException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedAddressExceptionResponse(parsedOutput, context)),
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
  contents = deserializeAws_json1_1CreateClusterResult(data, context);
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
    case "Ec2RequestFailedException":
    case "com.amazonaws.snowball#Ec2RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputCombinationException":
    case "com.amazonaws.snowball#InvalidInputCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      response = {
        ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateJobResult(data, context);
  const response: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterLimitExceededException":
    case "com.amazonaws.snowball#ClusterLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ClusterLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "Ec2RequestFailedException":
    case "com.amazonaws.snowball#Ec2RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputCombinationException":
    case "com.amazonaws.snowball#InvalidInputCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      response = {
        ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateLongTermPricingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLongTermPricingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLongTermPricingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLongTermPricingResult(data, context);
  const response: CreateLongTermPricingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLongTermPricingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLongTermPricingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateReturnShippingLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReturnShippingLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateReturnShippingLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateReturnShippingLabelResult(data, context);
  const response: CreateReturnShippingLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateReturnShippingLabelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReturnShippingLabelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.snowball#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputCombinationException":
    case "com.amazonaws.snowball#InvalidInputCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ReturnShippingLabelAlreadyExistsException":
    case "com.amazonaws.snowball#ReturnShippingLabelAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ReturnShippingLabelAlreadyExistsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddressCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAddressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAddressResult(data, context);
  const response: DescribeAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeAddressesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddressesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAddressesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAddressesResult(data, context);
  const response: DescribeAddressesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAddressesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddressesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClusterResult(data, context);
  const response: DescribeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeJobResult(data, context);
  const response: DescribeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeReturnShippingLabelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReturnShippingLabelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeReturnShippingLabelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeReturnShippingLabelResult(data, context);
  const response: DescribeReturnShippingLabelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeReturnShippingLabelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReturnShippingLabelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.snowball#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetJobManifestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobManifestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetJobManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobManifestResult(data, context);
  const response: GetJobManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobManifestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobManifestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetJobUnlockCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobUnlockCodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetJobUnlockCodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobUnlockCodeResult(data, context);
  const response: GetJobUnlockCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobUnlockCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobUnlockCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetSnowballUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnowballUsageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSnowballUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSnowballUsageResult(data, context);
  const response: GetSnowballUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSnowballUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnowballUsageCommandOutput> => {
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

export const deserializeAws_json1_1GetSoftwareUpdatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSoftwareUpdatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSoftwareUpdatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSoftwareUpdatesResult(data, context);
  const response: GetSoftwareUpdatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSoftwareUpdatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSoftwareUpdatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListClusterJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListClusterJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListClusterJobsResult(data, context);
  const response: ListClusterJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListClusterJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListClustersResult(data, context);
  const response: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListCompatibleImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCompatibleImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCompatibleImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCompatibleImagesResult(data, context);
  const response: ListCompatibleImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCompatibleImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCompatibleImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "Ec2RequestFailedException":
    case "com.amazonaws.snowball#Ec2RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListJobsResult(data, context);
  const response: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListLongTermPricingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLongTermPricingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLongTermPricingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLongTermPricingResult(data, context);
  const response: ListLongTermPricingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLongTermPricingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLongTermPricingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateClusterResult(data, context);
  const response: UpdateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "Ec2RequestFailedException":
    case "com.amazonaws.snowball#Ec2RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputCombinationException":
    case "com.amazonaws.snowball#InvalidInputCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      response = {
        ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateJobResult(data, context);
  const response: UpdateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClusterLimitExceededException":
    case "com.amazonaws.snowball#ClusterLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ClusterLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "Ec2RequestFailedException":
    case "com.amazonaws.snowball#Ec2RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputCombinationException":
    case "com.amazonaws.snowball#InvalidInputCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      response = {
        ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateJobShipmentStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobShipmentStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateJobShipmentStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateJobShipmentStateResult(data, context);
  const response: UpdateJobShipmentStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateJobShipmentStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobShipmentStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateLongTermPricingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLongTermPricingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateLongTermPricingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateLongTermPricingResult(data, context);
  const response: UpdateLongTermPricingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateLongTermPricingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLongTermPricingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1ClusterLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClusterLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClusterLimitExceededException(body, context);
  const contents: ClusterLimitExceededException = {
    name: "ClusterLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1Ec2RequestFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<Ec2RequestFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1Ec2RequestFailedException(body, context);
  const contents: Ec2RequestFailedException = {
    name: "Ec2RequestFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidAddressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAddressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAddressException(body, context);
  const contents: InvalidAddressException = {
    name: "InvalidAddressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputCombinationException(body, context);
  const contents: InvalidInputCombinationException = {
    name: "InvalidInputCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidJobStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidJobStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidJobStateException(body, context);
  const contents: InvalidJobStateException = {
    name: "InvalidJobStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
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

const deserializeAws_json1_1InvalidResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceException(body, context);
  const contents: InvalidResourceException = {
    name: "InvalidResourceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1KMSRequestFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSRequestFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSRequestFailedException(body, context);
  const contents: KMSRequestFailedException = {
    name: "KMSRequestFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ReturnShippingLabelAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReturnShippingLabelAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReturnShippingLabelAlreadyExistsException(body, context);
  const contents: ReturnShippingLabelAlreadyExistsException = {
    name: "ReturnShippingLabelAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedAddressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedAddressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedAddressException(body, context);
  const contents: UnsupportedAddressException = {
    name: "UnsupportedAddressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1Address = (input: Address, context: __SerdeContext): any => {
  return {
    ...(input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId }),
    ...(input.City !== undefined && input.City !== null && { City: input.City }),
    ...(input.Company !== undefined && input.Company !== null && { Company: input.Company }),
    ...(input.Country !== undefined && input.Country !== null && { Country: input.Country }),
    ...(input.IsRestricted !== undefined && input.IsRestricted !== null && { IsRestricted: input.IsRestricted }),
    ...(input.Landmark !== undefined && input.Landmark !== null && { Landmark: input.Landmark }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
    ...(input.PostalCode !== undefined && input.PostalCode !== null && { PostalCode: input.PostalCode }),
    ...(input.PrefectureOrDistrict !== undefined &&
      input.PrefectureOrDistrict !== null && { PrefectureOrDistrict: input.PrefectureOrDistrict }),
    ...(input.StateOrProvince !== undefined &&
      input.StateOrProvince !== null && { StateOrProvince: input.StateOrProvince }),
    ...(input.Street1 !== undefined && input.Street1 !== null && { Street1: input.Street1 }),
    ...(input.Street2 !== undefined && input.Street2 !== null && { Street2: input.Street2 }),
    ...(input.Street3 !== undefined && input.Street3 !== null && { Street3: input.Street3 }),
  };
};

const serializeAws_json1_1CancelClusterRequest = (input: CancelClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
  };
};

const serializeAws_json1_1CancelJobRequest = (input: CancelJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1CreateAddressRequest = (input: CreateAddressRequest, context: __SerdeContext): any => {
  return {
    ...(input.Address !== undefined &&
      input.Address !== null && { Address: serializeAws_json1_1Address(input.Address, context) }),
  };
};

const serializeAws_json1_1CreateClusterRequest = (input: CreateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.ForwardingAddressId !== undefined &&
      input.ForwardingAddressId !== null && { ForwardingAddressId: input.ForwardingAddressId }),
    ...(input.JobType !== undefined && input.JobType !== null && { JobType: input.JobType }),
    ...(input.KmsKeyARN !== undefined && input.KmsKeyARN !== null && { KmsKeyARN: input.KmsKeyARN }),
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.OnDeviceServiceConfiguration !== undefined &&
      input.OnDeviceServiceConfiguration !== null && {
        OnDeviceServiceConfiguration: serializeAws_json1_1OnDeviceServiceConfiguration(
          input.OnDeviceServiceConfiguration,
          context
        ),
      }),
    ...(input.RemoteManagement !== undefined &&
      input.RemoteManagement !== null && { RemoteManagement: input.RemoteManagement }),
    ...(input.Resources !== undefined &&
      input.Resources !== null && { Resources: serializeAws_json1_1JobResource(input.Resources, context) }),
    ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
    ...(input.ShippingOption !== undefined &&
      input.ShippingOption !== null && { ShippingOption: input.ShippingOption }),
    ...(input.SnowballType !== undefined && input.SnowballType !== null && { SnowballType: input.SnowballType }),
    ...(input.TaxDocuments !== undefined &&
      input.TaxDocuments !== null && { TaxDocuments: serializeAws_json1_1TaxDocuments(input.TaxDocuments, context) }),
  };
};

const serializeAws_json1_1CreateJobRequest = (input: CreateJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId }),
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.DeviceConfiguration !== undefined &&
      input.DeviceConfiguration !== null && {
        DeviceConfiguration: serializeAws_json1_1DeviceConfiguration(input.DeviceConfiguration, context),
      }),
    ...(input.ForwardingAddressId !== undefined &&
      input.ForwardingAddressId !== null && { ForwardingAddressId: input.ForwardingAddressId }),
    ...(input.JobType !== undefined && input.JobType !== null && { JobType: input.JobType }),
    ...(input.KmsKeyARN !== undefined && input.KmsKeyARN !== null && { KmsKeyARN: input.KmsKeyARN }),
    ...(input.LongTermPricingId !== undefined &&
      input.LongTermPricingId !== null && { LongTermPricingId: input.LongTermPricingId }),
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.OnDeviceServiceConfiguration !== undefined &&
      input.OnDeviceServiceConfiguration !== null && {
        OnDeviceServiceConfiguration: serializeAws_json1_1OnDeviceServiceConfiguration(
          input.OnDeviceServiceConfiguration,
          context
        ),
      }),
    ...(input.RemoteManagement !== undefined &&
      input.RemoteManagement !== null && { RemoteManagement: input.RemoteManagement }),
    ...(input.Resources !== undefined &&
      input.Resources !== null && { Resources: serializeAws_json1_1JobResource(input.Resources, context) }),
    ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
    ...(input.ShippingOption !== undefined &&
      input.ShippingOption !== null && { ShippingOption: input.ShippingOption }),
    ...(input.SnowballCapacityPreference !== undefined &&
      input.SnowballCapacityPreference !== null && { SnowballCapacityPreference: input.SnowballCapacityPreference }),
    ...(input.SnowballType !== undefined && input.SnowballType !== null && { SnowballType: input.SnowballType }),
    ...(input.TaxDocuments !== undefined &&
      input.TaxDocuments !== null && { TaxDocuments: serializeAws_json1_1TaxDocuments(input.TaxDocuments, context) }),
  };
};

const serializeAws_json1_1CreateLongTermPricingRequest = (
  input: CreateLongTermPricingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IsLongTermPricingAutoRenew !== undefined &&
      input.IsLongTermPricingAutoRenew !== null && { IsLongTermPricingAutoRenew: input.IsLongTermPricingAutoRenew }),
    ...(input.LongTermPricingType !== undefined &&
      input.LongTermPricingType !== null && { LongTermPricingType: input.LongTermPricingType }),
    ...(input.SnowballType !== undefined && input.SnowballType !== null && { SnowballType: input.SnowballType }),
  };
};

const serializeAws_json1_1CreateReturnShippingLabelRequest = (
  input: CreateReturnShippingLabelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    ...(input.ShippingOption !== undefined &&
      input.ShippingOption !== null && { ShippingOption: input.ShippingOption }),
  };
};

const serializeAws_json1_1DescribeAddressesRequest = (
  input: DescribeAddressesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeAddressRequest = (input: DescribeAddressRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId }),
  };
};

const serializeAws_json1_1DescribeClusterRequest = (input: DescribeClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
  };
};

const serializeAws_json1_1DescribeJobRequest = (input: DescribeJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DescribeReturnShippingLabelRequest = (
  input: DescribeReturnShippingLabelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1DeviceConfiguration = (input: DeviceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SnowconeDeviceConfiguration !== undefined &&
      input.SnowconeDeviceConfiguration !== null && {
        SnowconeDeviceConfiguration: serializeAws_json1_1SnowconeDeviceConfiguration(
          input.SnowconeDeviceConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_json1_1Ec2AmiResource = (input: Ec2AmiResource, context: __SerdeContext): any => {
  return {
    ...(input.AmiId !== undefined && input.AmiId !== null && { AmiId: input.AmiId }),
    ...(input.SnowballAmiId !== undefined && input.SnowballAmiId !== null && { SnowballAmiId: input.SnowballAmiId }),
  };
};

const serializeAws_json1_1Ec2AmiResourceList = (input: Ec2AmiResource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Ec2AmiResource(entry, context);
    });
};

const serializeAws_json1_1EventTriggerDefinition = (input: EventTriggerDefinition, context: __SerdeContext): any => {
  return {
    ...(input.EventResourceARN !== undefined &&
      input.EventResourceARN !== null && { EventResourceARN: input.EventResourceARN }),
  };
};

const serializeAws_json1_1EventTriggerDefinitionList = (
  input: EventTriggerDefinition[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1EventTriggerDefinition(entry, context);
    });
};

const serializeAws_json1_1GetJobManifestRequest = (input: GetJobManifestRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1GetJobUnlockCodeRequest = (input: GetJobUnlockCodeRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1GetSnowballUsageRequest = (input: GetSnowballUsageRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1GetSoftwareUpdatesRequest = (
  input: GetSoftwareUpdatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1INDTaxDocuments = (input: INDTaxDocuments, context: __SerdeContext): any => {
  return {
    ...(input.GSTIN !== undefined && input.GSTIN !== null && { GSTIN: input.GSTIN }),
  };
};

const serializeAws_json1_1JobResource = (input: JobResource, context: __SerdeContext): any => {
  return {
    ...(input.Ec2AmiResources !== undefined &&
      input.Ec2AmiResources !== null && {
        Ec2AmiResources: serializeAws_json1_1Ec2AmiResourceList(input.Ec2AmiResources, context),
      }),
    ...(input.LambdaResources !== undefined &&
      input.LambdaResources !== null && {
        LambdaResources: serializeAws_json1_1LambdaResourceList(input.LambdaResources, context),
      }),
    ...(input.S3Resources !== undefined &&
      input.S3Resources !== null && { S3Resources: serializeAws_json1_1S3ResourceList(input.S3Resources, context) }),
  };
};

const serializeAws_json1_1JobStateList = (input: (JobState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1KeyRange = (input: KeyRange, context: __SerdeContext): any => {
  return {
    ...(input.BeginMarker !== undefined && input.BeginMarker !== null && { BeginMarker: input.BeginMarker }),
    ...(input.EndMarker !== undefined && input.EndMarker !== null && { EndMarker: input.EndMarker }),
  };
};

const serializeAws_json1_1LambdaResource = (input: LambdaResource, context: __SerdeContext): any => {
  return {
    ...(input.EventTriggers !== undefined &&
      input.EventTriggers !== null && {
        EventTriggers: serializeAws_json1_1EventTriggerDefinitionList(input.EventTriggers, context),
      }),
    ...(input.LambdaArn !== undefined && input.LambdaArn !== null && { LambdaArn: input.LambdaArn }),
  };
};

const serializeAws_json1_1LambdaResourceList = (input: LambdaResource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1LambdaResource(entry, context);
    });
};

const serializeAws_json1_1ListClusterJobsRequest = (input: ListClusterJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListClustersRequest = (input: ListClustersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListCompatibleImagesRequest = (
  input: ListCompatibleImagesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListJobsRequest = (input: ListJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListLongTermPricingRequest = (
  input: ListLongTermPricingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1NFSOnDeviceServiceConfiguration = (
  input: NFSOnDeviceServiceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.StorageLimit !== undefined && input.StorageLimit !== null && { StorageLimit: input.StorageLimit }),
    ...(input.StorageUnit !== undefined && input.StorageUnit !== null && { StorageUnit: input.StorageUnit }),
  };
};

const serializeAws_json1_1Notification = (input: Notification, context: __SerdeContext): any => {
  return {
    ...(input.JobStatesToNotify !== undefined &&
      input.JobStatesToNotify !== null && {
        JobStatesToNotify: serializeAws_json1_1JobStateList(input.JobStatesToNotify, context),
      }),
    ...(input.NotifyAll !== undefined && input.NotifyAll !== null && { NotifyAll: input.NotifyAll }),
    ...(input.SnsTopicARN !== undefined && input.SnsTopicARN !== null && { SnsTopicARN: input.SnsTopicARN }),
  };
};

const serializeAws_json1_1OnDeviceServiceConfiguration = (
  input: OnDeviceServiceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.NFSOnDeviceService !== undefined &&
      input.NFSOnDeviceService !== null && {
        NFSOnDeviceService: serializeAws_json1_1NFSOnDeviceServiceConfiguration(input.NFSOnDeviceService, context),
      }),
  };
};

const serializeAws_json1_1S3Resource = (input: S3Resource, context: __SerdeContext): any => {
  return {
    ...(input.BucketArn !== undefined && input.BucketArn !== null && { BucketArn: input.BucketArn }),
    ...(input.KeyRange !== undefined &&
      input.KeyRange !== null && { KeyRange: serializeAws_json1_1KeyRange(input.KeyRange, context) }),
    ...(input.TargetOnDeviceServices !== undefined &&
      input.TargetOnDeviceServices !== null && {
        TargetOnDeviceServices: serializeAws_json1_1TargetOnDeviceServiceList(input.TargetOnDeviceServices, context),
      }),
  };
};

const serializeAws_json1_1S3ResourceList = (input: S3Resource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1S3Resource(entry, context);
    });
};

const serializeAws_json1_1SnowconeDeviceConfiguration = (
  input: SnowconeDeviceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.WirelessConnection !== undefined &&
      input.WirelessConnection !== null && {
        WirelessConnection: serializeAws_json1_1WirelessConnection(input.WirelessConnection, context),
      }),
  };
};

const serializeAws_json1_1TargetOnDeviceService = (input: TargetOnDeviceService, context: __SerdeContext): any => {
  return {
    ...(input.ServiceName !== undefined && input.ServiceName !== null && { ServiceName: input.ServiceName }),
    ...(input.TransferOption !== undefined &&
      input.TransferOption !== null && { TransferOption: input.TransferOption }),
  };
};

const serializeAws_json1_1TargetOnDeviceServiceList = (
  input: TargetOnDeviceService[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1TargetOnDeviceService(entry, context);
    });
};

const serializeAws_json1_1TaxDocuments = (input: TaxDocuments, context: __SerdeContext): any => {
  return {
    ...(input.IND !== undefined &&
      input.IND !== null && { IND: serializeAws_json1_1INDTaxDocuments(input.IND, context) }),
  };
};

const serializeAws_json1_1UpdateClusterRequest = (input: UpdateClusterRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId }),
    ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.ForwardingAddressId !== undefined &&
      input.ForwardingAddressId !== null && { ForwardingAddressId: input.ForwardingAddressId }),
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.OnDeviceServiceConfiguration !== undefined &&
      input.OnDeviceServiceConfiguration !== null && {
        OnDeviceServiceConfiguration: serializeAws_json1_1OnDeviceServiceConfiguration(
          input.OnDeviceServiceConfiguration,
          context
        ),
      }),
    ...(input.Resources !== undefined &&
      input.Resources !== null && { Resources: serializeAws_json1_1JobResource(input.Resources, context) }),
    ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
    ...(input.ShippingOption !== undefined &&
      input.ShippingOption !== null && { ShippingOption: input.ShippingOption }),
  };
};

const serializeAws_json1_1UpdateJobRequest = (input: UpdateJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.AddressId !== undefined && input.AddressId !== null && { AddressId: input.AddressId }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.ForwardingAddressId !== undefined &&
      input.ForwardingAddressId !== null && { ForwardingAddressId: input.ForwardingAddressId }),
    ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    ...(input.Notification !== undefined &&
      input.Notification !== null && { Notification: serializeAws_json1_1Notification(input.Notification, context) }),
    ...(input.OnDeviceServiceConfiguration !== undefined &&
      input.OnDeviceServiceConfiguration !== null && {
        OnDeviceServiceConfiguration: serializeAws_json1_1OnDeviceServiceConfiguration(
          input.OnDeviceServiceConfiguration,
          context
        ),
      }),
    ...(input.Resources !== undefined &&
      input.Resources !== null && { Resources: serializeAws_json1_1JobResource(input.Resources, context) }),
    ...(input.RoleARN !== undefined && input.RoleARN !== null && { RoleARN: input.RoleARN }),
    ...(input.ShippingOption !== undefined &&
      input.ShippingOption !== null && { ShippingOption: input.ShippingOption }),
    ...(input.SnowballCapacityPreference !== undefined &&
      input.SnowballCapacityPreference !== null && { SnowballCapacityPreference: input.SnowballCapacityPreference }),
  };
};

const serializeAws_json1_1UpdateJobShipmentStateRequest = (
  input: UpdateJobShipmentStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    ...(input.ShipmentState !== undefined && input.ShipmentState !== null && { ShipmentState: input.ShipmentState }),
  };
};

const serializeAws_json1_1UpdateLongTermPricingRequest = (
  input: UpdateLongTermPricingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IsLongTermPricingAutoRenew !== undefined &&
      input.IsLongTermPricingAutoRenew !== null && { IsLongTermPricingAutoRenew: input.IsLongTermPricingAutoRenew }),
    ...(input.LongTermPricingId !== undefined &&
      input.LongTermPricingId !== null && { LongTermPricingId: input.LongTermPricingId }),
    ...(input.ReplacementJob !== undefined &&
      input.ReplacementJob !== null && { ReplacementJob: input.ReplacementJob }),
  };
};

const serializeAws_json1_1WirelessConnection = (input: WirelessConnection, context: __SerdeContext): any => {
  return {
    ...(input.IsWifiEnabled !== undefined && input.IsWifiEnabled !== null && { IsWifiEnabled: input.IsWifiEnabled }),
  };
};

const deserializeAws_json1_1Address = (output: any, context: __SerdeContext): Address => {
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

const deserializeAws_json1_1AddressList = (output: any, context: __SerdeContext): Address[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Address(entry, context);
    });
};

const deserializeAws_json1_1CancelClusterResult = (output: any, context: __SerdeContext): CancelClusterResult => {
  return {} as any;
};

const deserializeAws_json1_1CancelJobResult = (output: any, context: __SerdeContext): CancelJobResult => {
  return {} as any;
};

const deserializeAws_json1_1ClusterLimitExceededException = (
  output: any,
  context: __SerdeContext
): ClusterLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ClusterListEntry = (output: any, context: __SerdeContext): ClusterListEntry => {
  return {
    ClusterId: __expectString(output.ClusterId),
    ClusterState: __expectString(output.ClusterState),
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    Description: __expectString(output.Description),
  } as any;
};

const deserializeAws_json1_1ClusterListEntryList = (output: any, context: __SerdeContext): ClusterListEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ClusterListEntry(entry, context);
    });
};

const deserializeAws_json1_1ClusterMetadata = (output: any, context: __SerdeContext): ClusterMetadata => {
  return {
    AddressId: __expectString(output.AddressId),
    ClusterId: __expectString(output.ClusterId),
    ClusterState: __expectString(output.ClusterState),
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    Description: __expectString(output.Description),
    ForwardingAddressId: __expectString(output.ForwardingAddressId),
    JobType: __expectString(output.JobType),
    KmsKeyARN: __expectString(output.KmsKeyARN),
    Notification:
      output.Notification !== undefined && output.Notification !== null
        ? deserializeAws_json1_1Notification(output.Notification, context)
        : undefined,
    OnDeviceServiceConfiguration:
      output.OnDeviceServiceConfiguration !== undefined && output.OnDeviceServiceConfiguration !== null
        ? deserializeAws_json1_1OnDeviceServiceConfiguration(output.OnDeviceServiceConfiguration, context)
        : undefined,
    Resources:
      output.Resources !== undefined && output.Resources !== null
        ? deserializeAws_json1_1JobResource(output.Resources, context)
        : undefined,
    RoleARN: __expectString(output.RoleARN),
    ShippingOption: __expectString(output.ShippingOption),
    SnowballType: __expectString(output.SnowballType),
    TaxDocuments:
      output.TaxDocuments !== undefined && output.TaxDocuments !== null
        ? deserializeAws_json1_1TaxDocuments(output.TaxDocuments, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CompatibleImage = (output: any, context: __SerdeContext): CompatibleImage => {
  return {
    AmiId: __expectString(output.AmiId),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1CompatibleImageList = (output: any, context: __SerdeContext): CompatibleImage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CompatibleImage(entry, context);
    });
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    ConflictResource: __expectString(output.ConflictResource),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CreateAddressResult = (output: any, context: __SerdeContext): CreateAddressResult => {
  return {
    AddressId: __expectString(output.AddressId),
  } as any;
};

const deserializeAws_json1_1CreateClusterResult = (output: any, context: __SerdeContext): CreateClusterResult => {
  return {
    ClusterId: __expectString(output.ClusterId),
  } as any;
};

const deserializeAws_json1_1CreateJobResult = (output: any, context: __SerdeContext): CreateJobResult => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1CreateLongTermPricingResult = (
  output: any,
  context: __SerdeContext
): CreateLongTermPricingResult => {
  return {
    LongTermPricingId: __expectString(output.LongTermPricingId),
  } as any;
};

const deserializeAws_json1_1CreateReturnShippingLabelResult = (
  output: any,
  context: __SerdeContext
): CreateReturnShippingLabelResult => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DataTransfer = (output: any, context: __SerdeContext): DataTransfer => {
  return {
    BytesTransferred: __expectLong(output.BytesTransferred),
    ObjectsTransferred: __expectLong(output.ObjectsTransferred),
    TotalBytes: __expectLong(output.TotalBytes),
    TotalObjects: __expectLong(output.TotalObjects),
  } as any;
};

const deserializeAws_json1_1DescribeAddressesResult = (
  output: any,
  context: __SerdeContext
): DescribeAddressesResult => {
  return {
    Addresses:
      output.Addresses !== undefined && output.Addresses !== null
        ? deserializeAws_json1_1AddressList(output.Addresses, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeAddressResult = (output: any, context: __SerdeContext): DescribeAddressResult => {
  return {
    Address:
      output.Address !== undefined && output.Address !== null
        ? deserializeAws_json1_1Address(output.Address, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeClusterResult = (output: any, context: __SerdeContext): DescribeClusterResult => {
  return {
    ClusterMetadata:
      output.ClusterMetadata !== undefined && output.ClusterMetadata !== null
        ? deserializeAws_json1_1ClusterMetadata(output.ClusterMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeJobResult = (output: any, context: __SerdeContext): DescribeJobResult => {
  return {
    JobMetadata:
      output.JobMetadata !== undefined && output.JobMetadata !== null
        ? deserializeAws_json1_1JobMetadata(output.JobMetadata, context)
        : undefined,
    SubJobMetadata:
      output.SubJobMetadata !== undefined && output.SubJobMetadata !== null
        ? deserializeAws_json1_1JobMetadataList(output.SubJobMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeReturnShippingLabelResult = (
  output: any,
  context: __SerdeContext
): DescribeReturnShippingLabelResult => {
  return {
    ExpirationDate:
      output.ExpirationDate !== undefined && output.ExpirationDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationDate)))
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DeviceConfiguration = (output: any, context: __SerdeContext): DeviceConfiguration => {
  return {
    SnowconeDeviceConfiguration:
      output.SnowconeDeviceConfiguration !== undefined && output.SnowconeDeviceConfiguration !== null
        ? deserializeAws_json1_1SnowconeDeviceConfiguration(output.SnowconeDeviceConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Ec2AmiResource = (output: any, context: __SerdeContext): Ec2AmiResource => {
  return {
    AmiId: __expectString(output.AmiId),
    SnowballAmiId: __expectString(output.SnowballAmiId),
  } as any;
};

const deserializeAws_json1_1Ec2AmiResourceList = (output: any, context: __SerdeContext): Ec2AmiResource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Ec2AmiResource(entry, context);
    });
};

const deserializeAws_json1_1Ec2RequestFailedException = (
  output: any,
  context: __SerdeContext
): Ec2RequestFailedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EventTriggerDefinition = (output: any, context: __SerdeContext): EventTriggerDefinition => {
  return {
    EventResourceARN: __expectString(output.EventResourceARN),
  } as any;
};

const deserializeAws_json1_1EventTriggerDefinitionList = (
  output: any,
  context: __SerdeContext
): EventTriggerDefinition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventTriggerDefinition(entry, context);
    });
};

const deserializeAws_json1_1GetJobManifestResult = (output: any, context: __SerdeContext): GetJobManifestResult => {
  return {
    ManifestURI: __expectString(output.ManifestURI),
  } as any;
};

const deserializeAws_json1_1GetJobUnlockCodeResult = (output: any, context: __SerdeContext): GetJobUnlockCodeResult => {
  return {
    UnlockCode: __expectString(output.UnlockCode),
  } as any;
};

const deserializeAws_json1_1GetSnowballUsageResult = (output: any, context: __SerdeContext): GetSnowballUsageResult => {
  return {
    SnowballLimit: __expectInt32(output.SnowballLimit),
    SnowballsInUse: __expectInt32(output.SnowballsInUse),
  } as any;
};

const deserializeAws_json1_1GetSoftwareUpdatesResult = (
  output: any,
  context: __SerdeContext
): GetSoftwareUpdatesResult => {
  return {
    UpdatesURI: __expectString(output.UpdatesURI),
  } as any;
};

const deserializeAws_json1_1INDTaxDocuments = (output: any, context: __SerdeContext): INDTaxDocuments => {
  return {
    GSTIN: __expectString(output.GSTIN),
  } as any;
};

const deserializeAws_json1_1InvalidAddressException = (
  output: any,
  context: __SerdeContext
): InvalidAddressException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidInputCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidInputCombinationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidJobStateException = (
  output: any,
  context: __SerdeContext
): InvalidJobStateException => {
  return {
    Message: __expectString(output.Message),
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

const deserializeAws_json1_1InvalidResourceException = (
  output: any,
  context: __SerdeContext
): InvalidResourceException => {
  return {
    Message: __expectString(output.Message),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1JobListEntry = (output: any, context: __SerdeContext): JobListEntry => {
  return {
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
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

const deserializeAws_json1_1JobListEntryList = (output: any, context: __SerdeContext): JobListEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1JobListEntry(entry, context);
    });
};

const deserializeAws_json1_1JobLogs = (output: any, context: __SerdeContext): JobLogs => {
  return {
    JobCompletionReportURI: __expectString(output.JobCompletionReportURI),
    JobFailureLogURI: __expectString(output.JobFailureLogURI),
    JobSuccessLogURI: __expectString(output.JobSuccessLogURI),
  } as any;
};

const deserializeAws_json1_1JobMetadata = (output: any, context: __SerdeContext): JobMetadata => {
  return {
    AddressId: __expectString(output.AddressId),
    ClusterId: __expectString(output.ClusterId),
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    DataTransferProgress:
      output.DataTransferProgress !== undefined && output.DataTransferProgress !== null
        ? deserializeAws_json1_1DataTransfer(output.DataTransferProgress, context)
        : undefined,
    Description: __expectString(output.Description),
    DeviceConfiguration:
      output.DeviceConfiguration !== undefined && output.DeviceConfiguration !== null
        ? deserializeAws_json1_1DeviceConfiguration(output.DeviceConfiguration, context)
        : undefined,
    ForwardingAddressId: __expectString(output.ForwardingAddressId),
    JobId: __expectString(output.JobId),
    JobLogInfo:
      output.JobLogInfo !== undefined && output.JobLogInfo !== null
        ? deserializeAws_json1_1JobLogs(output.JobLogInfo, context)
        : undefined,
    JobState: __expectString(output.JobState),
    JobType: __expectString(output.JobType),
    KmsKeyARN: __expectString(output.KmsKeyARN),
    LongTermPricingId: __expectString(output.LongTermPricingId),
    Notification:
      output.Notification !== undefined && output.Notification !== null
        ? deserializeAws_json1_1Notification(output.Notification, context)
        : undefined,
    OnDeviceServiceConfiguration:
      output.OnDeviceServiceConfiguration !== undefined && output.OnDeviceServiceConfiguration !== null
        ? deserializeAws_json1_1OnDeviceServiceConfiguration(output.OnDeviceServiceConfiguration, context)
        : undefined,
    RemoteManagement: __expectString(output.RemoteManagement),
    Resources:
      output.Resources !== undefined && output.Resources !== null
        ? deserializeAws_json1_1JobResource(output.Resources, context)
        : undefined,
    RoleARN: __expectString(output.RoleARN),
    ShippingDetails:
      output.ShippingDetails !== undefined && output.ShippingDetails !== null
        ? deserializeAws_json1_1ShippingDetails(output.ShippingDetails, context)
        : undefined,
    SnowballCapacityPreference: __expectString(output.SnowballCapacityPreference),
    SnowballType: __expectString(output.SnowballType),
    TaxDocuments:
      output.TaxDocuments !== undefined && output.TaxDocuments !== null
        ? deserializeAws_json1_1TaxDocuments(output.TaxDocuments, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1JobMetadataList = (output: any, context: __SerdeContext): JobMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1JobMetadata(entry, context);
    });
};

const deserializeAws_json1_1JobResource = (output: any, context: __SerdeContext): JobResource => {
  return {
    Ec2AmiResources:
      output.Ec2AmiResources !== undefined && output.Ec2AmiResources !== null
        ? deserializeAws_json1_1Ec2AmiResourceList(output.Ec2AmiResources, context)
        : undefined,
    LambdaResources:
      output.LambdaResources !== undefined && output.LambdaResources !== null
        ? deserializeAws_json1_1LambdaResourceList(output.LambdaResources, context)
        : undefined,
    S3Resources:
      output.S3Resources !== undefined && output.S3Resources !== null
        ? deserializeAws_json1_1S3ResourceList(output.S3Resources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1JobStateList = (output: any, context: __SerdeContext): (JobState | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1KeyRange = (output: any, context: __SerdeContext): KeyRange => {
  return {
    BeginMarker: __expectString(output.BeginMarker),
    EndMarker: __expectString(output.EndMarker),
  } as any;
};

const deserializeAws_json1_1KMSRequestFailedException = (
  output: any,
  context: __SerdeContext
): KMSRequestFailedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1LambdaResource = (output: any, context: __SerdeContext): LambdaResource => {
  return {
    EventTriggers:
      output.EventTriggers !== undefined && output.EventTriggers !== null
        ? deserializeAws_json1_1EventTriggerDefinitionList(output.EventTriggers, context)
        : undefined,
    LambdaArn: __expectString(output.LambdaArn),
  } as any;
};

const deserializeAws_json1_1LambdaResourceList = (output: any, context: __SerdeContext): LambdaResource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LambdaResource(entry, context);
    });
};

const deserializeAws_json1_1ListClusterJobsResult = (output: any, context: __SerdeContext): ListClusterJobsResult => {
  return {
    JobListEntries:
      output.JobListEntries !== undefined && output.JobListEntries !== null
        ? deserializeAws_json1_1JobListEntryList(output.JobListEntries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListClustersResult = (output: any, context: __SerdeContext): ListClustersResult => {
  return {
    ClusterListEntries:
      output.ClusterListEntries !== undefined && output.ClusterListEntries !== null
        ? deserializeAws_json1_1ClusterListEntryList(output.ClusterListEntries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCompatibleImagesResult = (
  output: any,
  context: __SerdeContext
): ListCompatibleImagesResult => {
  return {
    CompatibleImages:
      output.CompatibleImages !== undefined && output.CompatibleImages !== null
        ? deserializeAws_json1_1CompatibleImageList(output.CompatibleImages, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListJobsResult = (output: any, context: __SerdeContext): ListJobsResult => {
  return {
    JobListEntries:
      output.JobListEntries !== undefined && output.JobListEntries !== null
        ? deserializeAws_json1_1JobListEntryList(output.JobListEntries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListLongTermPricingResult = (
  output: any,
  context: __SerdeContext
): ListLongTermPricingResult => {
  return {
    LongTermPricingEntries:
      output.LongTermPricingEntries !== undefined && output.LongTermPricingEntries !== null
        ? deserializeAws_json1_1LongTermPricingEntryList(output.LongTermPricingEntries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1LongTermPricingAssociatedJobIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1LongTermPricingEntryList = (
  output: any,
  context: __SerdeContext
): LongTermPricingListEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LongTermPricingListEntry(entry, context);
    });
};

const deserializeAws_json1_1LongTermPricingListEntry = (
  output: any,
  context: __SerdeContext
): LongTermPricingListEntry => {
  return {
    CurrentActiveJob: __expectString(output.CurrentActiveJob),
    IsLongTermPricingAutoRenew: __expectBoolean(output.IsLongTermPricingAutoRenew),
    JobIds:
      output.JobIds !== undefined && output.JobIds !== null
        ? deserializeAws_json1_1LongTermPricingAssociatedJobIdList(output.JobIds, context)
        : undefined,
    LongTermPricingEndDate:
      output.LongTermPricingEndDate !== undefined && output.LongTermPricingEndDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LongTermPricingEndDate)))
        : undefined,
    LongTermPricingId: __expectString(output.LongTermPricingId),
    LongTermPricingStartDate:
      output.LongTermPricingStartDate !== undefined && output.LongTermPricingStartDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LongTermPricingStartDate)))
        : undefined,
    LongTermPricingStatus: __expectString(output.LongTermPricingStatus),
    LongTermPricingType: __expectString(output.LongTermPricingType),
    ReplacementJob: __expectString(output.ReplacementJob),
    SnowballType: __expectString(output.SnowballType),
  } as any;
};

const deserializeAws_json1_1NFSOnDeviceServiceConfiguration = (
  output: any,
  context: __SerdeContext
): NFSOnDeviceServiceConfiguration => {
  return {
    StorageLimit: __expectInt32(output.StorageLimit),
    StorageUnit: __expectString(output.StorageUnit),
  } as any;
};

const deserializeAws_json1_1Notification = (output: any, context: __SerdeContext): Notification => {
  return {
    JobStatesToNotify:
      output.JobStatesToNotify !== undefined && output.JobStatesToNotify !== null
        ? deserializeAws_json1_1JobStateList(output.JobStatesToNotify, context)
        : undefined,
    NotifyAll: __expectBoolean(output.NotifyAll),
    SnsTopicARN: __expectString(output.SnsTopicARN),
  } as any;
};

const deserializeAws_json1_1OnDeviceServiceConfiguration = (
  output: any,
  context: __SerdeContext
): OnDeviceServiceConfiguration => {
  return {
    NFSOnDeviceService:
      output.NFSOnDeviceService !== undefined && output.NFSOnDeviceService !== null
        ? deserializeAws_json1_1NFSOnDeviceServiceConfiguration(output.NFSOnDeviceService, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ReturnShippingLabelAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ReturnShippingLabelAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1S3Resource = (output: any, context: __SerdeContext): S3Resource => {
  return {
    BucketArn: __expectString(output.BucketArn),
    KeyRange:
      output.KeyRange !== undefined && output.KeyRange !== null
        ? deserializeAws_json1_1KeyRange(output.KeyRange, context)
        : undefined,
    TargetOnDeviceServices:
      output.TargetOnDeviceServices !== undefined && output.TargetOnDeviceServices !== null
        ? deserializeAws_json1_1TargetOnDeviceServiceList(output.TargetOnDeviceServices, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1S3ResourceList = (output: any, context: __SerdeContext): S3Resource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1S3Resource(entry, context);
    });
};

const deserializeAws_json1_1Shipment = (output: any, context: __SerdeContext): Shipment => {
  return {
    Status: __expectString(output.Status),
    TrackingNumber: __expectString(output.TrackingNumber),
  } as any;
};

const deserializeAws_json1_1ShippingDetails = (output: any, context: __SerdeContext): ShippingDetails => {
  return {
    InboundShipment:
      output.InboundShipment !== undefined && output.InboundShipment !== null
        ? deserializeAws_json1_1Shipment(output.InboundShipment, context)
        : undefined,
    OutboundShipment:
      output.OutboundShipment !== undefined && output.OutboundShipment !== null
        ? deserializeAws_json1_1Shipment(output.OutboundShipment, context)
        : undefined,
    ShippingOption: __expectString(output.ShippingOption),
  } as any;
};

const deserializeAws_json1_1SnowconeDeviceConfiguration = (
  output: any,
  context: __SerdeContext
): SnowconeDeviceConfiguration => {
  return {
    WirelessConnection:
      output.WirelessConnection !== undefined && output.WirelessConnection !== null
        ? deserializeAws_json1_1WirelessConnection(output.WirelessConnection, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TargetOnDeviceService = (output: any, context: __SerdeContext): TargetOnDeviceService => {
  return {
    ServiceName: __expectString(output.ServiceName),
    TransferOption: __expectString(output.TransferOption),
  } as any;
};

const deserializeAws_json1_1TargetOnDeviceServiceList = (
  output: any,
  context: __SerdeContext
): TargetOnDeviceService[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TargetOnDeviceService(entry, context);
    });
};

const deserializeAws_json1_1TaxDocuments = (output: any, context: __SerdeContext): TaxDocuments => {
  return {
    IND:
      output.IND !== undefined && output.IND !== null
        ? deserializeAws_json1_1INDTaxDocuments(output.IND, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UnsupportedAddressException = (
  output: any,
  context: __SerdeContext
): UnsupportedAddressException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UpdateClusterResult = (output: any, context: __SerdeContext): UpdateClusterResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateJobResult = (output: any, context: __SerdeContext): UpdateJobResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateJobShipmentStateResult = (
  output: any,
  context: __SerdeContext
): UpdateJobShipmentStateResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateLongTermPricingResult = (
  output: any,
  context: __SerdeContext
): UpdateLongTermPricingResult => {
  return {} as any;
};

const deserializeAws_json1_1WirelessConnection = (output: any, context: __SerdeContext): WirelessConnection => {
  return {
    IsWifiEnabled: __expectBoolean(output.IsWifiEnabled),
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
