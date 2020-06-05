import {
  CancelClusterCommandInput,
  CancelClusterCommandOutput
} from "../commands/CancelClusterCommand";
import {
  CancelJobCommandInput,
  CancelJobCommandOutput
} from "../commands/CancelJobCommand";
import {
  CreateAddressCommandInput,
  CreateAddressCommandOutput
} from "../commands/CreateAddressCommand";
import {
  CreateClusterCommandInput,
  CreateClusterCommandOutput
} from "../commands/CreateClusterCommand";
import {
  CreateJobCommandInput,
  CreateJobCommandOutput
} from "../commands/CreateJobCommand";
import {
  DescribeAddressCommandInput,
  DescribeAddressCommandOutput
} from "../commands/DescribeAddressCommand";
import {
  DescribeAddressesCommandInput,
  DescribeAddressesCommandOutput
} from "../commands/DescribeAddressesCommand";
import {
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput
} from "../commands/DescribeClusterCommand";
import {
  DescribeJobCommandInput,
  DescribeJobCommandOutput
} from "../commands/DescribeJobCommand";
import {
  GetJobManifestCommandInput,
  GetJobManifestCommandOutput
} from "../commands/GetJobManifestCommand";
import {
  GetJobUnlockCodeCommandInput,
  GetJobUnlockCodeCommandOutput
} from "../commands/GetJobUnlockCodeCommand";
import {
  GetSnowballUsageCommandInput,
  GetSnowballUsageCommandOutput
} from "../commands/GetSnowballUsageCommand";
import {
  GetSoftwareUpdatesCommandInput,
  GetSoftwareUpdatesCommandOutput
} from "../commands/GetSoftwareUpdatesCommand";
import {
  ListClusterJobsCommandInput,
  ListClusterJobsCommandOutput
} from "../commands/ListClusterJobsCommand";
import {
  ListClustersCommandInput,
  ListClustersCommandOutput
} from "../commands/ListClustersCommand";
import {
  ListCompatibleImagesCommandInput,
  ListCompatibleImagesCommandOutput
} from "../commands/ListCompatibleImagesCommand";
import {
  ListJobsCommandInput,
  ListJobsCommandOutput
} from "../commands/ListJobsCommand";
import {
  UpdateClusterCommandInput,
  UpdateClusterCommandOutput
} from "../commands/UpdateClusterCommand";
import {
  UpdateJobCommandInput,
  UpdateJobCommandOutput
} from "../commands/UpdateJobCommand";
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
  CreateAddressRequest,
  CreateAddressResult,
  CreateClusterRequest,
  CreateClusterResult,
  CreateJobRequest,
  CreateJobResult,
  DataTransfer,
  DescribeAddressRequest,
  DescribeAddressResult,
  DescribeAddressesRequest,
  DescribeAddressesResult,
  DescribeClusterRequest,
  DescribeClusterResult,
  DescribeJobRequest,
  DescribeJobResult,
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
  Notification,
  S3Resource,
  Shipment,
  ShippingDetails,
  UnsupportedAddressException,
  UpdateClusterRequest,
  UpdateClusterResult,
  UpdateJobRequest,
  UpdateJobResult
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1CancelClusterCommand = async (
  input: CancelClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.CancelCluster"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CancelClusterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelJobCommand = async (
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.CancelJob"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.CreateAddress"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateAddressRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.CreateCluster"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateClusterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateJobCommand = async (
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.CreateJob"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAddressCommand = async (
  input: DescribeAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.DescribeAddress"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAddressRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAddressesCommand = async (
  input: DescribeAddressesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.DescribeAddresses"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAddressesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeClusterCommand = async (
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.DescribeCluster"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeClusterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeJobCommand = async (
  input: DescribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.DescribeJob"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobManifestCommand = async (
  input: GetJobManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.GetJobManifest"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetJobManifestRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobUnlockCodeCommand = async (
  input: GetJobUnlockCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.GetJobUnlockCode"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetJobUnlockCodeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSnowballUsageCommand = async (
  input: GetSnowballUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.GetSnowballUsage"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSnowballUsageRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSoftwareUpdatesCommand = async (
  input: GetSoftwareUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.GetSoftwareUpdates"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSoftwareUpdatesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListClusterJobsCommand = async (
  input: ListClusterJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.ListClusterJobs"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListClusterJobsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.ListClusters"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListClustersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCompatibleImagesCommand = async (
  input: ListCompatibleImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.ListCompatibleImages"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListCompatibleImagesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.ListJobs"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateClusterCommand = async (
  input: UpdateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.UpdateCluster"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateClusterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateJobCommand = async (
  input: UpdateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSIESnowballJobManagementService.UpdateJob"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CancelClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelClusterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CancelClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelClusterResult(data, context);
  const response: CancelClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelClusterResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      response = {
        ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CancelJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelJobResult(data, context);
  const response: CancelJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelJobResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      response = {
        ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateAddressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAddressResult(data, context);
  const response: CreateAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAddressResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidAddressException":
    case "com.amazonaws.snowball#InvalidAddressException":
      response = {
        ...(await deserializeAws_json1_1InvalidAddressExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedAddressException":
    case "com.amazonaws.snowball#UnsupportedAddressException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedAddressExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateClusterResult(data, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateClusterResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "Ec2RequestFailedException":
    case "com.amazonaws.snowball#Ec2RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputCombinationException":
    case "com.amazonaws.snowball#InvalidInputCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      response = {
        ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateJobResult(data, context);
  const response: CreateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateJobResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClusterLimitExceededException":
    case "com.amazonaws.snowball#ClusterLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ClusterLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "Ec2RequestFailedException":
    case "com.amazonaws.snowball#Ec2RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputCombinationException":
    case "com.amazonaws.snowball#InvalidInputCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      response = {
        ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAddressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAddressResult(data, context);
  const response: DescribeAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAddressResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAddressesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAddressesResult(data, context);
  const response: DescribeAddressesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAddressesResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAddressesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddressesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClusterResult(data, context);
  const response: DescribeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeClusterResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeJobResult(data, context);
  const response: DescribeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeJobResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetJobManifestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobManifestResult(data, context);
  const response: GetJobManifestCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetJobManifestResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobManifestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobManifestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetJobUnlockCodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobUnlockCodeResult(data, context);
  const response: GetJobUnlockCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetJobUnlockCodeResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobUnlockCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobUnlockCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSnowballUsageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSnowballUsageResult(data, context);
  const response: GetSnowballUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSnowballUsageResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSnowballUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnowballUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSoftwareUpdatesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSoftwareUpdatesResult(data, context);
  const response: GetSoftwareUpdatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSoftwareUpdatesResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSoftwareUpdatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSoftwareUpdatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListClusterJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListClusterJobsResult(data, context);
  const response: ListClusterJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListClusterJobsResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListClusterJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListClustersResult(data, context);
  const response: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListClustersResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListCompatibleImagesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCompatibleImagesResult(data, context);
  const response: ListCompatibleImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListCompatibleImagesResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCompatibleImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCompatibleImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "Ec2RequestFailedException":
    case "com.amazonaws.snowball#Ec2RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListJobsResult(data, context);
  const response: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJobsResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.snowball#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateClusterResult(data, context);
  const response: UpdateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateClusterResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "Ec2RequestFailedException":
    case "com.amazonaws.snowball#Ec2RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputCombinationException":
    case "com.amazonaws.snowball#InvalidInputCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      response = {
        ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateJobResult(data, context);
  const response: UpdateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateJobResult",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ClusterLimitExceededException":
    case "com.amazonaws.snowball#ClusterLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ClusterLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "Ec2RequestFailedException":
    case "com.amazonaws.snowball#Ec2RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1Ec2RequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputCombinationException":
    case "com.amazonaws.snowball#InvalidInputCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidJobStateException":
    case "com.amazonaws.snowball#InvalidJobStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.snowball#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSRequestFailedException":
    case "com.amazonaws.snowball#KMSRequestFailedException":
      response = {
        ...(await deserializeAws_json1_1KMSRequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  const deserialized: any = deserializeAws_json1_1ClusterLimitExceededException(
    body,
    context
  );
  const contents: ClusterLimitExceededException = {
    name: "ClusterLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1Ec2RequestFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<Ec2RequestFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1Ec2RequestFailedException(
    body,
    context
  );
  const contents: Ec2RequestFailedException = {
    name: "Ec2RequestFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidAddressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAddressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidAddressException(
    body,
    context
  );
  const contents: InvalidAddressException = {
    name: "InvalidAddressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputCombinationException(
    body,
    context
  );
  const contents: InvalidInputCombinationException = {
    name: "InvalidInputCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidJobStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidJobStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidJobStateException(
    body,
    context
  );
  const contents: InvalidJobStateException = {
    name: "InvalidJobStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

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
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceException(
    body,
    context
  );
  const contents: InvalidResourceException = {
    name: "InvalidResourceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KMSRequestFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSRequestFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KMSRequestFailedException(
    body,
    context
  );
  const contents: KMSRequestFailedException = {
    name: "KMSRequestFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedAddressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedAddressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedAddressException(
    body,
    context
  );
  const contents: UnsupportedAddressException = {
    name: "UnsupportedAddressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1Address = (
  input: Address,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddressId !== undefined && { AddressId: input.AddressId }),
    ...(input.City !== undefined && { City: input.City }),
    ...(input.Company !== undefined && { Company: input.Company }),
    ...(input.Country !== undefined && { Country: input.Country }),
    ...(input.IsRestricted !== undefined && {
      IsRestricted: input.IsRestricted
    }),
    ...(input.Landmark !== undefined && { Landmark: input.Landmark }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.PhoneNumber !== undefined && { PhoneNumber: input.PhoneNumber }),
    ...(input.PostalCode !== undefined && { PostalCode: input.PostalCode }),
    ...(input.PrefectureOrDistrict !== undefined && {
      PrefectureOrDistrict: input.PrefectureOrDistrict
    }),
    ...(input.StateOrProvince !== undefined && {
      StateOrProvince: input.StateOrProvince
    }),
    ...(input.Street1 !== undefined && { Street1: input.Street1 }),
    ...(input.Street2 !== undefined && { Street2: input.Street2 }),
    ...(input.Street3 !== undefined && { Street3: input.Street3 })
  };
};

const serializeAws_json1_1CancelClusterRequest = (
  input: CancelClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId })
  };
};

const serializeAws_json1_1CancelJobRequest = (
  input: CancelJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId })
  };
};

const serializeAws_json1_1CreateAddressRequest = (
  input: CreateAddressRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Address !== undefined && {
      Address: serializeAws_json1_1Address(input.Address, context)
    })
  };
};

const serializeAws_json1_1CreateClusterRequest = (
  input: CreateClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddressId !== undefined && { AddressId: input.AddressId }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.ForwardingAddressId !== undefined && {
      ForwardingAddressId: input.ForwardingAddressId
    }),
    ...(input.JobType !== undefined && { JobType: input.JobType }),
    ...(input.KmsKeyARN !== undefined && { KmsKeyARN: input.KmsKeyARN }),
    ...(input.Notification !== undefined && {
      Notification: serializeAws_json1_1Notification(
        input.Notification,
        context
      )
    }),
    ...(input.Resources !== undefined && {
      Resources: serializeAws_json1_1JobResource(input.Resources, context)
    }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
    ...(input.ShippingOption !== undefined && {
      ShippingOption: input.ShippingOption
    }),
    ...(input.SnowballType !== undefined && {
      SnowballType: input.SnowballType
    })
  };
};

const serializeAws_json1_1CreateJobRequest = (
  input: CreateJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddressId !== undefined && { AddressId: input.AddressId }),
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.ForwardingAddressId !== undefined && {
      ForwardingAddressId: input.ForwardingAddressId
    }),
    ...(input.JobType !== undefined && { JobType: input.JobType }),
    ...(input.KmsKeyARN !== undefined && { KmsKeyARN: input.KmsKeyARN }),
    ...(input.Notification !== undefined && {
      Notification: serializeAws_json1_1Notification(
        input.Notification,
        context
      )
    }),
    ...(input.Resources !== undefined && {
      Resources: serializeAws_json1_1JobResource(input.Resources, context)
    }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
    ...(input.ShippingOption !== undefined && {
      ShippingOption: input.ShippingOption
    }),
    ...(input.SnowballCapacityPreference !== undefined && {
      SnowballCapacityPreference: input.SnowballCapacityPreference
    }),
    ...(input.SnowballType !== undefined && {
      SnowballType: input.SnowballType
    })
  };
};

const serializeAws_json1_1DescribeAddressesRequest = (
  input: DescribeAddressesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1DescribeAddressRequest = (
  input: DescribeAddressRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddressId !== undefined && { AddressId: input.AddressId })
  };
};

const serializeAws_json1_1DescribeClusterRequest = (
  input: DescribeClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId })
  };
};

const serializeAws_json1_1DescribeJobRequest = (
  input: DescribeJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId })
  };
};

const serializeAws_json1_1Ec2AmiResource = (
  input: Ec2AmiResource,
  context: __SerdeContext
): any => {
  return {
    ...(input.AmiId !== undefined && { AmiId: input.AmiId }),
    ...(input.SnowballAmiId !== undefined && {
      SnowballAmiId: input.SnowballAmiId
    })
  };
};

const serializeAws_json1_1Ec2AmiResourceList = (
  input: Ec2AmiResource[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Ec2AmiResource(entry, context));
};

const serializeAws_json1_1EventTriggerDefinition = (
  input: EventTriggerDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventResourceARN !== undefined && {
      EventResourceARN: input.EventResourceARN
    })
  };
};

const serializeAws_json1_1EventTriggerDefinitionList = (
  input: EventTriggerDefinition[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1EventTriggerDefinition(entry, context)
  );
};

const serializeAws_json1_1GetJobManifestRequest = (
  input: GetJobManifestRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId })
  };
};

const serializeAws_json1_1GetJobUnlockCodeRequest = (
  input: GetJobUnlockCodeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId })
  };
};

const serializeAws_json1_1GetSnowballUsageRequest = (
  input: GetSnowballUsageRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetSoftwareUpdatesRequest = (
  input: GetSoftwareUpdatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId })
  };
};

const serializeAws_json1_1JobResource = (
  input: JobResource,
  context: __SerdeContext
): any => {
  return {
    ...(input.Ec2AmiResources !== undefined && {
      Ec2AmiResources: serializeAws_json1_1Ec2AmiResourceList(
        input.Ec2AmiResources,
        context
      )
    }),
    ...(input.LambdaResources !== undefined && {
      LambdaResources: serializeAws_json1_1LambdaResourceList(
        input.LambdaResources,
        context
      )
    }),
    ...(input.S3Resources !== undefined && {
      S3Resources: serializeAws_json1_1S3ResourceList(
        input.S3Resources,
        context
      )
    })
  };
};

const serializeAws_json1_1JobStateList = (
  input: (JobState | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1KeyRange = (
  input: KeyRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.BeginMarker !== undefined && { BeginMarker: input.BeginMarker }),
    ...(input.EndMarker !== undefined && { EndMarker: input.EndMarker })
  };
};

const serializeAws_json1_1LambdaResource = (
  input: LambdaResource,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventTriggers !== undefined && {
      EventTriggers: serializeAws_json1_1EventTriggerDefinitionList(
        input.EventTriggers,
        context
      )
    }),
    ...(input.LambdaArn !== undefined && { LambdaArn: input.LambdaArn })
  };
};

const serializeAws_json1_1LambdaResourceList = (
  input: LambdaResource[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1LambdaResource(entry, context));
};

const serializeAws_json1_1ListClusterJobsRequest = (
  input: ListClusterJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListClustersRequest = (
  input: ListClustersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListCompatibleImagesRequest = (
  input: ListCompatibleImagesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListJobsRequest = (
  input: ListJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1Notification = (
  input: Notification,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobStatesToNotify !== undefined && {
      JobStatesToNotify: serializeAws_json1_1JobStateList(
        input.JobStatesToNotify,
        context
      )
    }),
    ...(input.NotifyAll !== undefined && { NotifyAll: input.NotifyAll }),
    ...(input.SnsTopicARN !== undefined && { SnsTopicARN: input.SnsTopicARN })
  };
};

const serializeAws_json1_1S3Resource = (
  input: S3Resource,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketArn !== undefined && { BucketArn: input.BucketArn }),
    ...(input.KeyRange !== undefined && {
      KeyRange: serializeAws_json1_1KeyRange(input.KeyRange, context)
    })
  };
};

const serializeAws_json1_1S3ResourceList = (
  input: S3Resource[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1S3Resource(entry, context));
};

const serializeAws_json1_1UpdateClusterRequest = (
  input: UpdateClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddressId !== undefined && { AddressId: input.AddressId }),
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.ForwardingAddressId !== undefined && {
      ForwardingAddressId: input.ForwardingAddressId
    }),
    ...(input.Notification !== undefined && {
      Notification: serializeAws_json1_1Notification(
        input.Notification,
        context
      )
    }),
    ...(input.Resources !== undefined && {
      Resources: serializeAws_json1_1JobResource(input.Resources, context)
    }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
    ...(input.ShippingOption !== undefined && {
      ShippingOption: input.ShippingOption
    })
  };
};

const serializeAws_json1_1UpdateJobRequest = (
  input: UpdateJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddressId !== undefined && { AddressId: input.AddressId }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.ForwardingAddressId !== undefined && {
      ForwardingAddressId: input.ForwardingAddressId
    }),
    ...(input.JobId !== undefined && { JobId: input.JobId }),
    ...(input.Notification !== undefined && {
      Notification: serializeAws_json1_1Notification(
        input.Notification,
        context
      )
    }),
    ...(input.Resources !== undefined && {
      Resources: serializeAws_json1_1JobResource(input.Resources, context)
    }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
    ...(input.ShippingOption !== undefined && {
      ShippingOption: input.ShippingOption
    }),
    ...(input.SnowballCapacityPreference !== undefined && {
      SnowballCapacityPreference: input.SnowballCapacityPreference
    })
  };
};

const deserializeAws_json1_1Address = (
  output: any,
  context: __SerdeContext
): Address => {
  return {
    __type: "Address",
    AddressId:
      output.AddressId !== undefined && output.AddressId !== null
        ? output.AddressId
        : undefined,
    City:
      output.City !== undefined && output.City !== null
        ? output.City
        : undefined,
    Company:
      output.Company !== undefined && output.Company !== null
        ? output.Company
        : undefined,
    Country:
      output.Country !== undefined && output.Country !== null
        ? output.Country
        : undefined,
    IsRestricted:
      output.IsRestricted !== undefined && output.IsRestricted !== null
        ? output.IsRestricted
        : undefined,
    Landmark:
      output.Landmark !== undefined && output.Landmark !== null
        ? output.Landmark
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    PhoneNumber:
      output.PhoneNumber !== undefined && output.PhoneNumber !== null
        ? output.PhoneNumber
        : undefined,
    PostalCode:
      output.PostalCode !== undefined && output.PostalCode !== null
        ? output.PostalCode
        : undefined,
    PrefectureOrDistrict:
      output.PrefectureOrDistrict !== undefined &&
      output.PrefectureOrDistrict !== null
        ? output.PrefectureOrDistrict
        : undefined,
    StateOrProvince:
      output.StateOrProvince !== undefined && output.StateOrProvince !== null
        ? output.StateOrProvince
        : undefined,
    Street1:
      output.Street1 !== undefined && output.Street1 !== null
        ? output.Street1
        : undefined,
    Street2:
      output.Street2 !== undefined && output.Street2 !== null
        ? output.Street2
        : undefined,
    Street3:
      output.Street3 !== undefined && output.Street3 !== null
        ? output.Street3
        : undefined
  } as any;
};

const deserializeAws_json1_1AddressList = (
  output: any,
  context: __SerdeContext
): Address[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Address(entry, context)
  );
};

const deserializeAws_json1_1CancelClusterResult = (
  output: any,
  context: __SerdeContext
): CancelClusterResult => {
  return {
    __type: "CancelClusterResult"
  } as any;
};

const deserializeAws_json1_1CancelJobResult = (
  output: any,
  context: __SerdeContext
): CancelJobResult => {
  return {
    __type: "CancelJobResult"
  } as any;
};

const deserializeAws_json1_1ClusterLimitExceededException = (
  output: any,
  context: __SerdeContext
): ClusterLimitExceededException => {
  return {
    __type: "ClusterLimitExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ClusterListEntry = (
  output: any,
  context: __SerdeContext
): ClusterListEntry => {
  return {
    __type: "ClusterListEntry",
    ClusterId:
      output.ClusterId !== undefined && output.ClusterId !== null
        ? output.ClusterId
        : undefined,
    ClusterState:
      output.ClusterState !== undefined && output.ClusterState !== null
        ? output.ClusterState
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined
  } as any;
};

const deserializeAws_json1_1ClusterListEntryList = (
  output: any,
  context: __SerdeContext
): ClusterListEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ClusterListEntry(entry, context)
  );
};

const deserializeAws_json1_1ClusterMetadata = (
  output: any,
  context: __SerdeContext
): ClusterMetadata => {
  return {
    __type: "ClusterMetadata",
    AddressId:
      output.AddressId !== undefined && output.AddressId !== null
        ? output.AddressId
        : undefined,
    ClusterId:
      output.ClusterId !== undefined && output.ClusterId !== null
        ? output.ClusterId
        : undefined,
    ClusterState:
      output.ClusterState !== undefined && output.ClusterState !== null
        ? output.ClusterState
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    ForwardingAddressId:
      output.ForwardingAddressId !== undefined &&
      output.ForwardingAddressId !== null
        ? output.ForwardingAddressId
        : undefined,
    JobType:
      output.JobType !== undefined && output.JobType !== null
        ? output.JobType
        : undefined,
    KmsKeyARN:
      output.KmsKeyARN !== undefined && output.KmsKeyARN !== null
        ? output.KmsKeyARN
        : undefined,
    Notification:
      output.Notification !== undefined && output.Notification !== null
        ? deserializeAws_json1_1Notification(output.Notification, context)
        : undefined,
    Resources:
      output.Resources !== undefined && output.Resources !== null
        ? deserializeAws_json1_1JobResource(output.Resources, context)
        : undefined,
    RoleARN:
      output.RoleARN !== undefined && output.RoleARN !== null
        ? output.RoleARN
        : undefined,
    ShippingOption:
      output.ShippingOption !== undefined && output.ShippingOption !== null
        ? output.ShippingOption
        : undefined,
    SnowballType:
      output.SnowballType !== undefined && output.SnowballType !== null
        ? output.SnowballType
        : undefined
  } as any;
};

const deserializeAws_json1_1CompatibleImage = (
  output: any,
  context: __SerdeContext
): CompatibleImage => {
  return {
    __type: "CompatibleImage",
    AmiId:
      output.AmiId !== undefined && output.AmiId !== null
        ? output.AmiId
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1CompatibleImageList = (
  output: any,
  context: __SerdeContext
): CompatibleImage[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CompatibleImage(entry, context)
  );
};

const deserializeAws_json1_1CreateAddressResult = (
  output: any,
  context: __SerdeContext
): CreateAddressResult => {
  return {
    __type: "CreateAddressResult",
    AddressId:
      output.AddressId !== undefined && output.AddressId !== null
        ? output.AddressId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateClusterResult = (
  output: any,
  context: __SerdeContext
): CreateClusterResult => {
  return {
    __type: "CreateClusterResult",
    ClusterId:
      output.ClusterId !== undefined && output.ClusterId !== null
        ? output.ClusterId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateJobResult = (
  output: any,
  context: __SerdeContext
): CreateJobResult => {
  return {
    __type: "CreateJobResult",
    JobId:
      output.JobId !== undefined && output.JobId !== null
        ? output.JobId
        : undefined
  } as any;
};

const deserializeAws_json1_1DataTransfer = (
  output: any,
  context: __SerdeContext
): DataTransfer => {
  return {
    __type: "DataTransfer",
    BytesTransferred:
      output.BytesTransferred !== undefined && output.BytesTransferred !== null
        ? output.BytesTransferred
        : undefined,
    ObjectsTransferred:
      output.ObjectsTransferred !== undefined &&
      output.ObjectsTransferred !== null
        ? output.ObjectsTransferred
        : undefined,
    TotalBytes:
      output.TotalBytes !== undefined && output.TotalBytes !== null
        ? output.TotalBytes
        : undefined,
    TotalObjects:
      output.TotalObjects !== undefined && output.TotalObjects !== null
        ? output.TotalObjects
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeAddressesResult = (
  output: any,
  context: __SerdeContext
): DescribeAddressesResult => {
  return {
    __type: "DescribeAddressesResult",
    Addresses:
      output.Addresses !== undefined && output.Addresses !== null
        ? deserializeAws_json1_1AddressList(output.Addresses, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeAddressResult = (
  output: any,
  context: __SerdeContext
): DescribeAddressResult => {
  return {
    __type: "DescribeAddressResult",
    Address:
      output.Address !== undefined && output.Address !== null
        ? deserializeAws_json1_1Address(output.Address, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeClusterResult = (
  output: any,
  context: __SerdeContext
): DescribeClusterResult => {
  return {
    __type: "DescribeClusterResult",
    ClusterMetadata:
      output.ClusterMetadata !== undefined && output.ClusterMetadata !== null
        ? deserializeAws_json1_1ClusterMetadata(output.ClusterMetadata, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeJobResult = (
  output: any,
  context: __SerdeContext
): DescribeJobResult => {
  return {
    __type: "DescribeJobResult",
    JobMetadata:
      output.JobMetadata !== undefined && output.JobMetadata !== null
        ? deserializeAws_json1_1JobMetadata(output.JobMetadata, context)
        : undefined,
    SubJobMetadata:
      output.SubJobMetadata !== undefined && output.SubJobMetadata !== null
        ? deserializeAws_json1_1JobMetadataList(output.SubJobMetadata, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Ec2AmiResource = (
  output: any,
  context: __SerdeContext
): Ec2AmiResource => {
  return {
    __type: "Ec2AmiResource",
    AmiId:
      output.AmiId !== undefined && output.AmiId !== null
        ? output.AmiId
        : undefined,
    SnowballAmiId:
      output.SnowballAmiId !== undefined && output.SnowballAmiId !== null
        ? output.SnowballAmiId
        : undefined
  } as any;
};

const deserializeAws_json1_1Ec2AmiResourceList = (
  output: any,
  context: __SerdeContext
): Ec2AmiResource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Ec2AmiResource(entry, context)
  );
};

const deserializeAws_json1_1Ec2RequestFailedException = (
  output: any,
  context: __SerdeContext
): Ec2RequestFailedException => {
  return {
    __type: "Ec2RequestFailedException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1EventTriggerDefinition = (
  output: any,
  context: __SerdeContext
): EventTriggerDefinition => {
  return {
    __type: "EventTriggerDefinition",
    EventResourceARN:
      output.EventResourceARN !== undefined && output.EventResourceARN !== null
        ? output.EventResourceARN
        : undefined
  } as any;
};

const deserializeAws_json1_1EventTriggerDefinitionList = (
  output: any,
  context: __SerdeContext
): EventTriggerDefinition[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventTriggerDefinition(entry, context)
  );
};

const deserializeAws_json1_1GetJobManifestResult = (
  output: any,
  context: __SerdeContext
): GetJobManifestResult => {
  return {
    __type: "GetJobManifestResult",
    ManifestURI:
      output.ManifestURI !== undefined && output.ManifestURI !== null
        ? output.ManifestURI
        : undefined
  } as any;
};

const deserializeAws_json1_1GetJobUnlockCodeResult = (
  output: any,
  context: __SerdeContext
): GetJobUnlockCodeResult => {
  return {
    __type: "GetJobUnlockCodeResult",
    UnlockCode:
      output.UnlockCode !== undefined && output.UnlockCode !== null
        ? output.UnlockCode
        : undefined
  } as any;
};

const deserializeAws_json1_1GetSnowballUsageResult = (
  output: any,
  context: __SerdeContext
): GetSnowballUsageResult => {
  return {
    __type: "GetSnowballUsageResult",
    SnowballLimit:
      output.SnowballLimit !== undefined && output.SnowballLimit !== null
        ? output.SnowballLimit
        : undefined,
    SnowballsInUse:
      output.SnowballsInUse !== undefined && output.SnowballsInUse !== null
        ? output.SnowballsInUse
        : undefined
  } as any;
};

const deserializeAws_json1_1GetSoftwareUpdatesResult = (
  output: any,
  context: __SerdeContext
): GetSoftwareUpdatesResult => {
  return {
    __type: "GetSoftwareUpdatesResult",
    UpdatesURI:
      output.UpdatesURI !== undefined && output.UpdatesURI !== null
        ? output.UpdatesURI
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidAddressException = (
  output: any,
  context: __SerdeContext
): InvalidAddressException => {
  return {
    __type: "InvalidAddressException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidInputCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidInputCombinationException => {
  return {
    __type: "InvalidInputCombinationException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidJobStateException = (
  output: any,
  context: __SerdeContext
): InvalidJobStateException => {
  return {
    __type: "InvalidJobStateException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    __type: "InvalidNextTokenException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidResourceException = (
  output: any,
  context: __SerdeContext
): InvalidResourceException => {
  return {
    __type: "InvalidResourceException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    ResourceType:
      output.ResourceType !== undefined && output.ResourceType !== null
        ? output.ResourceType
        : undefined
  } as any;
};

const deserializeAws_json1_1JobListEntry = (
  output: any,
  context: __SerdeContext
): JobListEntry => {
  return {
    __type: "JobListEntry",
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    IsMaster:
      output.IsMaster !== undefined && output.IsMaster !== null
        ? output.IsMaster
        : undefined,
    JobId:
      output.JobId !== undefined && output.JobId !== null
        ? output.JobId
        : undefined,
    JobState:
      output.JobState !== undefined && output.JobState !== null
        ? output.JobState
        : undefined,
    JobType:
      output.JobType !== undefined && output.JobType !== null
        ? output.JobType
        : undefined,
    SnowballType:
      output.SnowballType !== undefined && output.SnowballType !== null
        ? output.SnowballType
        : undefined
  } as any;
};

const deserializeAws_json1_1JobListEntryList = (
  output: any,
  context: __SerdeContext
): JobListEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1JobListEntry(entry, context)
  );
};

const deserializeAws_json1_1JobLogs = (
  output: any,
  context: __SerdeContext
): JobLogs => {
  return {
    __type: "JobLogs",
    JobCompletionReportURI:
      output.JobCompletionReportURI !== undefined &&
      output.JobCompletionReportURI !== null
        ? output.JobCompletionReportURI
        : undefined,
    JobFailureLogURI:
      output.JobFailureLogURI !== undefined && output.JobFailureLogURI !== null
        ? output.JobFailureLogURI
        : undefined,
    JobSuccessLogURI:
      output.JobSuccessLogURI !== undefined && output.JobSuccessLogURI !== null
        ? output.JobSuccessLogURI
        : undefined
  } as any;
};

const deserializeAws_json1_1JobMetadata = (
  output: any,
  context: __SerdeContext
): JobMetadata => {
  return {
    __type: "JobMetadata",
    AddressId:
      output.AddressId !== undefined && output.AddressId !== null
        ? output.AddressId
        : undefined,
    ClusterId:
      output.ClusterId !== undefined && output.ClusterId !== null
        ? output.ClusterId
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    DataTransferProgress:
      output.DataTransferProgress !== undefined &&
      output.DataTransferProgress !== null
        ? deserializeAws_json1_1DataTransfer(
            output.DataTransferProgress,
            context
          )
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    ForwardingAddressId:
      output.ForwardingAddressId !== undefined &&
      output.ForwardingAddressId !== null
        ? output.ForwardingAddressId
        : undefined,
    JobId:
      output.JobId !== undefined && output.JobId !== null
        ? output.JobId
        : undefined,
    JobLogInfo:
      output.JobLogInfo !== undefined && output.JobLogInfo !== null
        ? deserializeAws_json1_1JobLogs(output.JobLogInfo, context)
        : undefined,
    JobState:
      output.JobState !== undefined && output.JobState !== null
        ? output.JobState
        : undefined,
    JobType:
      output.JobType !== undefined && output.JobType !== null
        ? output.JobType
        : undefined,
    KmsKeyARN:
      output.KmsKeyARN !== undefined && output.KmsKeyARN !== null
        ? output.KmsKeyARN
        : undefined,
    Notification:
      output.Notification !== undefined && output.Notification !== null
        ? deserializeAws_json1_1Notification(output.Notification, context)
        : undefined,
    Resources:
      output.Resources !== undefined && output.Resources !== null
        ? deserializeAws_json1_1JobResource(output.Resources, context)
        : undefined,
    RoleARN:
      output.RoleARN !== undefined && output.RoleARN !== null
        ? output.RoleARN
        : undefined,
    ShippingDetails:
      output.ShippingDetails !== undefined && output.ShippingDetails !== null
        ? deserializeAws_json1_1ShippingDetails(output.ShippingDetails, context)
        : undefined,
    SnowballCapacityPreference:
      output.SnowballCapacityPreference !== undefined &&
      output.SnowballCapacityPreference !== null
        ? output.SnowballCapacityPreference
        : undefined,
    SnowballType:
      output.SnowballType !== undefined && output.SnowballType !== null
        ? output.SnowballType
        : undefined
  } as any;
};

const deserializeAws_json1_1JobMetadataList = (
  output: any,
  context: __SerdeContext
): JobMetadata[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1JobMetadata(entry, context)
  );
};

const deserializeAws_json1_1JobResource = (
  output: any,
  context: __SerdeContext
): JobResource => {
  return {
    __type: "JobResource",
    Ec2AmiResources:
      output.Ec2AmiResources !== undefined && output.Ec2AmiResources !== null
        ? deserializeAws_json1_1Ec2AmiResourceList(
            output.Ec2AmiResources,
            context
          )
        : undefined,
    LambdaResources:
      output.LambdaResources !== undefined && output.LambdaResources !== null
        ? deserializeAws_json1_1LambdaResourceList(
            output.LambdaResources,
            context
          )
        : undefined,
    S3Resources:
      output.S3Resources !== undefined && output.S3Resources !== null
        ? deserializeAws_json1_1S3ResourceList(output.S3Resources, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1JobStateList = (
  output: any,
  context: __SerdeContext
): (JobState | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1KeyRange = (
  output: any,
  context: __SerdeContext
): KeyRange => {
  return {
    __type: "KeyRange",
    BeginMarker:
      output.BeginMarker !== undefined && output.BeginMarker !== null
        ? output.BeginMarker
        : undefined,
    EndMarker:
      output.EndMarker !== undefined && output.EndMarker !== null
        ? output.EndMarker
        : undefined
  } as any;
};

const deserializeAws_json1_1KMSRequestFailedException = (
  output: any,
  context: __SerdeContext
): KMSRequestFailedException => {
  return {
    __type: "KMSRequestFailedException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1LambdaResource = (
  output: any,
  context: __SerdeContext
): LambdaResource => {
  return {
    __type: "LambdaResource",
    EventTriggers:
      output.EventTriggers !== undefined && output.EventTriggers !== null
        ? deserializeAws_json1_1EventTriggerDefinitionList(
            output.EventTriggers,
            context
          )
        : undefined,
    LambdaArn:
      output.LambdaArn !== undefined && output.LambdaArn !== null
        ? output.LambdaArn
        : undefined
  } as any;
};

const deserializeAws_json1_1LambdaResourceList = (
  output: any,
  context: __SerdeContext
): LambdaResource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LambdaResource(entry, context)
  );
};

const deserializeAws_json1_1ListClusterJobsResult = (
  output: any,
  context: __SerdeContext
): ListClusterJobsResult => {
  return {
    __type: "ListClusterJobsResult",
    JobListEntries:
      output.JobListEntries !== undefined && output.JobListEntries !== null
        ? deserializeAws_json1_1JobListEntryList(output.JobListEntries, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListClustersResult = (
  output: any,
  context: __SerdeContext
): ListClustersResult => {
  return {
    __type: "ListClustersResult",
    ClusterListEntries:
      output.ClusterListEntries !== undefined &&
      output.ClusterListEntries !== null
        ? deserializeAws_json1_1ClusterListEntryList(
            output.ClusterListEntries,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListCompatibleImagesResult = (
  output: any,
  context: __SerdeContext
): ListCompatibleImagesResult => {
  return {
    __type: "ListCompatibleImagesResult",
    CompatibleImages:
      output.CompatibleImages !== undefined && output.CompatibleImages !== null
        ? deserializeAws_json1_1CompatibleImageList(
            output.CompatibleImages,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListJobsResult = (
  output: any,
  context: __SerdeContext
): ListJobsResult => {
  return {
    __type: "ListJobsResult",
    JobListEntries:
      output.JobListEntries !== undefined && output.JobListEntries !== null
        ? deserializeAws_json1_1JobListEntryList(output.JobListEntries, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1Notification = (
  output: any,
  context: __SerdeContext
): Notification => {
  return {
    __type: "Notification",
    JobStatesToNotify:
      output.JobStatesToNotify !== undefined &&
      output.JobStatesToNotify !== null
        ? deserializeAws_json1_1JobStateList(output.JobStatesToNotify, context)
        : undefined,
    NotifyAll:
      output.NotifyAll !== undefined && output.NotifyAll !== null
        ? output.NotifyAll
        : undefined,
    SnsTopicARN:
      output.SnsTopicARN !== undefined && output.SnsTopicARN !== null
        ? output.SnsTopicARN
        : undefined
  } as any;
};

const deserializeAws_json1_1S3Resource = (
  output: any,
  context: __SerdeContext
): S3Resource => {
  return {
    __type: "S3Resource",
    BucketArn:
      output.BucketArn !== undefined && output.BucketArn !== null
        ? output.BucketArn
        : undefined,
    KeyRange:
      output.KeyRange !== undefined && output.KeyRange !== null
        ? deserializeAws_json1_1KeyRange(output.KeyRange, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1S3ResourceList = (
  output: any,
  context: __SerdeContext
): S3Resource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1S3Resource(entry, context)
  );
};

const deserializeAws_json1_1Shipment = (
  output: any,
  context: __SerdeContext
): Shipment => {
  return {
    __type: "Shipment",
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    TrackingNumber:
      output.TrackingNumber !== undefined && output.TrackingNumber !== null
        ? output.TrackingNumber
        : undefined
  } as any;
};

const deserializeAws_json1_1ShippingDetails = (
  output: any,
  context: __SerdeContext
): ShippingDetails => {
  return {
    __type: "ShippingDetails",
    InboundShipment:
      output.InboundShipment !== undefined && output.InboundShipment !== null
        ? deserializeAws_json1_1Shipment(output.InboundShipment, context)
        : undefined,
    OutboundShipment:
      output.OutboundShipment !== undefined && output.OutboundShipment !== null
        ? deserializeAws_json1_1Shipment(output.OutboundShipment, context)
        : undefined,
    ShippingOption:
      output.ShippingOption !== undefined && output.ShippingOption !== null
        ? output.ShippingOption
        : undefined
  } as any;
};

const deserializeAws_json1_1UnsupportedAddressException = (
  output: any,
  context: __SerdeContext
): UnsupportedAddressException => {
  return {
    __type: "UnsupportedAddressException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateClusterResult = (
  output: any,
  context: __SerdeContext
): UpdateClusterResult => {
  return {
    __type: "UpdateClusterResult"
  } as any;
};

const deserializeAws_json1_1UpdateJobResult = (
  output: any,
  context: __SerdeContext
): UpdateJobResult => {
  return {
    __type: "UpdateJobResult"
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
