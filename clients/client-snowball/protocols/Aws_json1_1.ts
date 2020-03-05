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

export async function serializeAws_json1_1CancelClusterCommand(
  input: CancelClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.CancelCluster";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CancelClusterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CancelJobCommand(
  input: CancelJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.CancelJob";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateAddressCommand(
  input: CreateAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.CreateAddress";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateAddressRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateClusterCommand(
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.CreateCluster";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateClusterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateJobCommand(
  input: CreateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.CreateJob";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeAddressCommand(
  input: DescribeAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.DescribeAddress";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAddressRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeAddressesCommand(
  input: DescribeAddressesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSIESnowballJobManagementService.DescribeAddresses";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAddressesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeClusterCommand(
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.DescribeCluster";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeClusterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeJobCommand(
  input: DescribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.DescribeJob";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetJobManifestCommand(
  input: GetJobManifestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.GetJobManifest";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetJobManifestRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetJobUnlockCodeCommand(
  input: GetJobUnlockCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSIESnowballJobManagementService.GetJobUnlockCode";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetJobUnlockCodeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetSnowballUsageCommand(
  input: GetSnowballUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSIESnowballJobManagementService.GetSnowballUsage";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSnowballUsageRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetSoftwareUpdatesCommand(
  input: GetSoftwareUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSIESnowballJobManagementService.GetSoftwareUpdates";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSoftwareUpdatesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListClusterJobsCommand(
  input: ListClusterJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.ListClusterJobs";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListClusterJobsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListClustersCommand(
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.ListClusters";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListClustersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListCompatibleImagesCommand(
  input: ListCompatibleImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSIESnowballJobManagementService.ListCompatibleImages";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListCompatibleImagesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListJobsCommand(
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.ListJobs";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateClusterCommand(
  input: UpdateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.UpdateCluster";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateClusterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateJobCommand(
  input: UpdateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSIESnowballJobManagementService.UpdateJob";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CancelClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelClusterCommandOutput> {
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
}

async function deserializeAws_json1_1CancelClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelClusterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1CancelJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> {
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
}

async function deserializeAws_json1_1CancelJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1CreateAddressCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddressCommandOutput> {
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
}

async function deserializeAws_json1_1CreateAddressCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddressCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1CreateClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> {
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
}

async function deserializeAws_json1_1CreateClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1CreateJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> {
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
}

async function deserializeAws_json1_1CreateJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1DescribeAddressCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddressCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeAddressCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddressCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1DescribeAddressesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddressesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeAddressesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddressesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1DescribeClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1DescribeJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1GetJobManifestCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobManifestCommandOutput> {
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
}

async function deserializeAws_json1_1GetJobManifestCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobManifestCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1GetJobUnlockCodeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobUnlockCodeCommandOutput> {
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
}

async function deserializeAws_json1_1GetJobUnlockCodeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobUnlockCodeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1GetSnowballUsageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnowballUsageCommandOutput> {
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
}

async function deserializeAws_json1_1GetSnowballUsageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnowballUsageCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1GetSoftwareUpdatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSoftwareUpdatesCommandOutput> {
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
}

async function deserializeAws_json1_1GetSoftwareUpdatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSoftwareUpdatesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListClusterJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterJobsCommandOutput> {
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
}

async function deserializeAws_json1_1ListClusterJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterJobsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListClustersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> {
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
}

async function deserializeAws_json1_1ListClustersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListCompatibleImagesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCompatibleImagesCommandOutput> {
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
}

async function deserializeAws_json1_1ListCompatibleImagesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCompatibleImagesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1ListJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> {
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
}

async function deserializeAws_json1_1ListJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1UpdateClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

export async function deserializeAws_json1_1UpdateJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
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
}

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
  const bodyParams: any = {};
  if (input.AddressId !== undefined) {
    bodyParams["AddressId"] = input.AddressId;
  }
  if (input.City !== undefined) {
    bodyParams["City"] = input.City;
  }
  if (input.Company !== undefined) {
    bodyParams["Company"] = input.Company;
  }
  if (input.Country !== undefined) {
    bodyParams["Country"] = input.Country;
  }
  if (input.IsRestricted !== undefined) {
    bodyParams["IsRestricted"] = input.IsRestricted;
  }
  if (input.Landmark !== undefined) {
    bodyParams["Landmark"] = input.Landmark;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.PhoneNumber !== undefined) {
    bodyParams["PhoneNumber"] = input.PhoneNumber;
  }
  if (input.PostalCode !== undefined) {
    bodyParams["PostalCode"] = input.PostalCode;
  }
  if (input.PrefectureOrDistrict !== undefined) {
    bodyParams["PrefectureOrDistrict"] = input.PrefectureOrDistrict;
  }
  if (input.StateOrProvince !== undefined) {
    bodyParams["StateOrProvince"] = input.StateOrProvince;
  }
  if (input.Street1 !== undefined) {
    bodyParams["Street1"] = input.Street1;
  }
  if (input.Street2 !== undefined) {
    bodyParams["Street2"] = input.Street2;
  }
  if (input.Street3 !== undefined) {
    bodyParams["Street3"] = input.Street3;
  }
  return bodyParams;
};

const serializeAws_json1_1CancelClusterRequest = (
  input: CancelClusterRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  return bodyParams;
};

const serializeAws_json1_1CancelJobRequest = (
  input: CancelJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateAddressRequest = (
  input: CreateAddressRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Address !== undefined) {
    bodyParams["Address"] = serializeAws_json1_1Address(input.Address, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateClusterRequest = (
  input: CreateClusterRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AddressId !== undefined) {
    bodyParams["AddressId"] = input.AddressId;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.ForwardingAddressId !== undefined) {
    bodyParams["ForwardingAddressId"] = input.ForwardingAddressId;
  }
  if (input.JobType !== undefined) {
    bodyParams["JobType"] = input.JobType;
  }
  if (input.KmsKeyARN !== undefined) {
    bodyParams["KmsKeyARN"] = input.KmsKeyARN;
  }
  if (input.Notification !== undefined) {
    bodyParams["Notification"] = serializeAws_json1_1Notification(
      input.Notification,
      context
    );
  }
  if (input.Resources !== undefined) {
    bodyParams["Resources"] = serializeAws_json1_1JobResource(
      input.Resources,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.ShippingOption !== undefined) {
    bodyParams["ShippingOption"] = input.ShippingOption;
  }
  if (input.SnowballType !== undefined) {
    bodyParams["SnowballType"] = input.SnowballType;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateJobRequest = (
  input: CreateJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AddressId !== undefined) {
    bodyParams["AddressId"] = input.AddressId;
  }
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.ForwardingAddressId !== undefined) {
    bodyParams["ForwardingAddressId"] = input.ForwardingAddressId;
  }
  if (input.JobType !== undefined) {
    bodyParams["JobType"] = input.JobType;
  }
  if (input.KmsKeyARN !== undefined) {
    bodyParams["KmsKeyARN"] = input.KmsKeyARN;
  }
  if (input.Notification !== undefined) {
    bodyParams["Notification"] = serializeAws_json1_1Notification(
      input.Notification,
      context
    );
  }
  if (input.Resources !== undefined) {
    bodyParams["Resources"] = serializeAws_json1_1JobResource(
      input.Resources,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.ShippingOption !== undefined) {
    bodyParams["ShippingOption"] = input.ShippingOption;
  }
  if (input.SnowballCapacityPreference !== undefined) {
    bodyParams["SnowballCapacityPreference"] = input.SnowballCapacityPreference;
  }
  if (input.SnowballType !== undefined) {
    bodyParams["SnowballType"] = input.SnowballType;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAddressRequest = (
  input: DescribeAddressRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AddressId !== undefined) {
    bodyParams["AddressId"] = input.AddressId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAddressesRequest = (
  input: DescribeAddressesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeClusterRequest = (
  input: DescribeClusterRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeJobRequest = (
  input: DescribeJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  return bodyParams;
};

const serializeAws_json1_1Ec2AmiResource = (
  input: Ec2AmiResource,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AmiId !== undefined) {
    bodyParams["AmiId"] = input.AmiId;
  }
  if (input.SnowballAmiId !== undefined) {
    bodyParams["SnowballAmiId"] = input.SnowballAmiId;
  }
  return bodyParams;
};

const serializeAws_json1_1Ec2AmiResourceList = (
  input: Array<Ec2AmiResource>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Ec2AmiResource(entry, context));
  }
  return contents;
};

const serializeAws_json1_1EventTriggerDefinition = (
  input: EventTriggerDefinition,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EventResourceARN !== undefined) {
    bodyParams["EventResourceARN"] = input.EventResourceARN;
  }
  return bodyParams;
};

const serializeAws_json1_1EventTriggerDefinitionList = (
  input: Array<EventTriggerDefinition>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1EventTriggerDefinition(entry, context));
  }
  return contents;
};

const serializeAws_json1_1GetJobManifestRequest = (
  input: GetJobManifestRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetJobUnlockCodeRequest = (
  input: GetJobUnlockCodeRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetSnowballUsageRequest = (
  input: GetSnowballUsageRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1GetSoftwareUpdatesRequest = (
  input: GetSoftwareUpdatesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  return bodyParams;
};

const serializeAws_json1_1JobResource = (
  input: JobResource,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Ec2AmiResources !== undefined) {
    bodyParams["Ec2AmiResources"] = serializeAws_json1_1Ec2AmiResourceList(
      input.Ec2AmiResources,
      context
    );
  }
  if (input.LambdaResources !== undefined) {
    bodyParams["LambdaResources"] = serializeAws_json1_1LambdaResourceList(
      input.LambdaResources,
      context
    );
  }
  if (input.S3Resources !== undefined) {
    bodyParams["S3Resources"] = serializeAws_json1_1S3ResourceList(
      input.S3Resources,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1JobStateList = (
  input: Array<JobState | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1KeyRange = (
  input: KeyRange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BeginMarker !== undefined) {
    bodyParams["BeginMarker"] = input.BeginMarker;
  }
  if (input.EndMarker !== undefined) {
    bodyParams["EndMarker"] = input.EndMarker;
  }
  return bodyParams;
};

const serializeAws_json1_1LambdaResource = (
  input: LambdaResource,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EventTriggers !== undefined) {
    bodyParams[
      "EventTriggers"
    ] = serializeAws_json1_1EventTriggerDefinitionList(
      input.EventTriggers,
      context
    );
  }
  if (input.LambdaArn !== undefined) {
    bodyParams["LambdaArn"] = input.LambdaArn;
  }
  return bodyParams;
};

const serializeAws_json1_1LambdaResourceList = (
  input: Array<LambdaResource>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1LambdaResource(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ListClusterJobsRequest = (
  input: ListClusterJobsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListClustersRequest = (
  input: ListClustersRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListCompatibleImagesRequest = (
  input: ListCompatibleImagesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListJobsRequest = (
  input: ListJobsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1Notification = (
  input: Notification,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobStatesToNotify !== undefined) {
    bodyParams["JobStatesToNotify"] = serializeAws_json1_1JobStateList(
      input.JobStatesToNotify,
      context
    );
  }
  if (input.NotifyAll !== undefined) {
    bodyParams["NotifyAll"] = input.NotifyAll;
  }
  if (input.SnsTopicARN !== undefined) {
    bodyParams["SnsTopicARN"] = input.SnsTopicARN;
  }
  return bodyParams;
};

const serializeAws_json1_1S3Resource = (
  input: S3Resource,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BucketArn !== undefined) {
    bodyParams["BucketArn"] = input.BucketArn;
  }
  if (input.KeyRange !== undefined) {
    bodyParams["KeyRange"] = serializeAws_json1_1KeyRange(
      input.KeyRange,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1S3ResourceList = (
  input: Array<S3Resource>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1S3Resource(entry, context));
  }
  return contents;
};

const serializeAws_json1_1UpdateClusterRequest = (
  input: UpdateClusterRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AddressId !== undefined) {
    bodyParams["AddressId"] = input.AddressId;
  }
  if (input.ClusterId !== undefined) {
    bodyParams["ClusterId"] = input.ClusterId;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.ForwardingAddressId !== undefined) {
    bodyParams["ForwardingAddressId"] = input.ForwardingAddressId;
  }
  if (input.Notification !== undefined) {
    bodyParams["Notification"] = serializeAws_json1_1Notification(
      input.Notification,
      context
    );
  }
  if (input.Resources !== undefined) {
    bodyParams["Resources"] = serializeAws_json1_1JobResource(
      input.Resources,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.ShippingOption !== undefined) {
    bodyParams["ShippingOption"] = input.ShippingOption;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateJobRequest = (
  input: UpdateJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AddressId !== undefined) {
    bodyParams["AddressId"] = input.AddressId;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.ForwardingAddressId !== undefined) {
    bodyParams["ForwardingAddressId"] = input.ForwardingAddressId;
  }
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  if (input.Notification !== undefined) {
    bodyParams["Notification"] = serializeAws_json1_1Notification(
      input.Notification,
      context
    );
  }
  if (input.Resources !== undefined) {
    bodyParams["Resources"] = serializeAws_json1_1JobResource(
      input.Resources,
      context
    );
  }
  if (input.RoleARN !== undefined) {
    bodyParams["RoleARN"] = input.RoleARN;
  }
  if (input.ShippingOption !== undefined) {
    bodyParams["ShippingOption"] = input.ShippingOption;
  }
  if (input.SnowballCapacityPreference !== undefined) {
    bodyParams["SnowballCapacityPreference"] = input.SnowballCapacityPreference;
  }
  return bodyParams;
};

const deserializeAws_json1_1Address = (
  output: any,
  context: __SerdeContext
): Address => {
  let contents: any = {
    __type: "Address",
    AddressId: undefined,
    City: undefined,
    Company: undefined,
    Country: undefined,
    IsRestricted: undefined,
    Landmark: undefined,
    Name: undefined,
    PhoneNumber: undefined,
    PostalCode: undefined,
    PrefectureOrDistrict: undefined,
    StateOrProvince: undefined,
    Street1: undefined,
    Street2: undefined,
    Street3: undefined
  };
  if (output.AddressId !== undefined && output.AddressId !== null) {
    contents.AddressId = output.AddressId;
  }
  if (output.City !== undefined && output.City !== null) {
    contents.City = output.City;
  }
  if (output.Company !== undefined && output.Company !== null) {
    contents.Company = output.Company;
  }
  if (output.Country !== undefined && output.Country !== null) {
    contents.Country = output.Country;
  }
  if (output.IsRestricted !== undefined && output.IsRestricted !== null) {
    contents.IsRestricted = output.IsRestricted;
  }
  if (output.Landmark !== undefined && output.Landmark !== null) {
    contents.Landmark = output.Landmark;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.PhoneNumber !== undefined && output.PhoneNumber !== null) {
    contents.PhoneNumber = output.PhoneNumber;
  }
  if (output.PostalCode !== undefined && output.PostalCode !== null) {
    contents.PostalCode = output.PostalCode;
  }
  if (
    output.PrefectureOrDistrict !== undefined &&
    output.PrefectureOrDistrict !== null
  ) {
    contents.PrefectureOrDistrict = output.PrefectureOrDistrict;
  }
  if (output.StateOrProvince !== undefined && output.StateOrProvince !== null) {
    contents.StateOrProvince = output.StateOrProvince;
  }
  if (output.Street1 !== undefined && output.Street1 !== null) {
    contents.Street1 = output.Street1;
  }
  if (output.Street2 !== undefined && output.Street2 !== null) {
    contents.Street2 = output.Street2;
  }
  if (output.Street3 !== undefined && output.Street3 !== null) {
    contents.Street3 = output.Street3;
  }
  return contents;
};

const deserializeAws_json1_1AddressList = (
  output: any,
  context: __SerdeContext
): Array<Address> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Address(entry, context)
  );
};

const deserializeAws_json1_1CancelClusterResult = (
  output: any,
  context: __SerdeContext
): CancelClusterResult => {
  let contents: any = {
    __type: "CancelClusterResult"
  };
  return contents;
};

const deserializeAws_json1_1CancelJobResult = (
  output: any,
  context: __SerdeContext
): CancelJobResult => {
  let contents: any = {
    __type: "CancelJobResult"
  };
  return contents;
};

const deserializeAws_json1_1ClusterLimitExceededException = (
  output: any,
  context: __SerdeContext
): ClusterLimitExceededException => {
  let contents: any = {
    __type: "ClusterLimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ClusterListEntry = (
  output: any,
  context: __SerdeContext
): ClusterListEntry => {
  let contents: any = {
    __type: "ClusterListEntry",
    ClusterId: undefined,
    ClusterState: undefined,
    CreationDate: undefined,
    Description: undefined
  };
  if (output.ClusterId !== undefined && output.ClusterId !== null) {
    contents.ClusterId = output.ClusterId;
  }
  if (output.ClusterState !== undefined && output.ClusterState !== null) {
    contents.ClusterState = output.ClusterState;
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  return contents;
};

const deserializeAws_json1_1ClusterListEntryList = (
  output: any,
  context: __SerdeContext
): Array<ClusterListEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ClusterListEntry(entry, context)
  );
};

const deserializeAws_json1_1ClusterMetadata = (
  output: any,
  context: __SerdeContext
): ClusterMetadata => {
  let contents: any = {
    __type: "ClusterMetadata",
    AddressId: undefined,
    ClusterId: undefined,
    ClusterState: undefined,
    CreationDate: undefined,
    Description: undefined,
    ForwardingAddressId: undefined,
    JobType: undefined,
    KmsKeyARN: undefined,
    Notification: undefined,
    Resources: undefined,
    RoleARN: undefined,
    ShippingOption: undefined,
    SnowballType: undefined
  };
  if (output.AddressId !== undefined && output.AddressId !== null) {
    contents.AddressId = output.AddressId;
  }
  if (output.ClusterId !== undefined && output.ClusterId !== null) {
    contents.ClusterId = output.ClusterId;
  }
  if (output.ClusterState !== undefined && output.ClusterState !== null) {
    contents.ClusterState = output.ClusterState;
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (
    output.ForwardingAddressId !== undefined &&
    output.ForwardingAddressId !== null
  ) {
    contents.ForwardingAddressId = output.ForwardingAddressId;
  }
  if (output.JobType !== undefined && output.JobType !== null) {
    contents.JobType = output.JobType;
  }
  if (output.KmsKeyARN !== undefined && output.KmsKeyARN !== null) {
    contents.KmsKeyARN = output.KmsKeyARN;
  }
  if (output.Notification !== undefined && output.Notification !== null) {
    contents.Notification = deserializeAws_json1_1Notification(
      output.Notification,
      context
    );
  }
  if (output.Resources !== undefined && output.Resources !== null) {
    contents.Resources = deserializeAws_json1_1JobResource(
      output.Resources,
      context
    );
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  if (output.ShippingOption !== undefined && output.ShippingOption !== null) {
    contents.ShippingOption = output.ShippingOption;
  }
  if (output.SnowballType !== undefined && output.SnowballType !== null) {
    contents.SnowballType = output.SnowballType;
  }
  return contents;
};

const deserializeAws_json1_1CompatibleImage = (
  output: any,
  context: __SerdeContext
): CompatibleImage => {
  let contents: any = {
    __type: "CompatibleImage",
    AmiId: undefined,
    Name: undefined
  };
  if (output.AmiId !== undefined && output.AmiId !== null) {
    contents.AmiId = output.AmiId;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1CompatibleImageList = (
  output: any,
  context: __SerdeContext
): Array<CompatibleImage> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CompatibleImage(entry, context)
  );
};

const deserializeAws_json1_1CreateAddressResult = (
  output: any,
  context: __SerdeContext
): CreateAddressResult => {
  let contents: any = {
    __type: "CreateAddressResult",
    AddressId: undefined
  };
  if (output.AddressId !== undefined && output.AddressId !== null) {
    contents.AddressId = output.AddressId;
  }
  return contents;
};

const deserializeAws_json1_1CreateClusterResult = (
  output: any,
  context: __SerdeContext
): CreateClusterResult => {
  let contents: any = {
    __type: "CreateClusterResult",
    ClusterId: undefined
  };
  if (output.ClusterId !== undefined && output.ClusterId !== null) {
    contents.ClusterId = output.ClusterId;
  }
  return contents;
};

const deserializeAws_json1_1CreateJobResult = (
  output: any,
  context: __SerdeContext
): CreateJobResult => {
  let contents: any = {
    __type: "CreateJobResult",
    JobId: undefined
  };
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  return contents;
};

const deserializeAws_json1_1DataTransfer = (
  output: any,
  context: __SerdeContext
): DataTransfer => {
  let contents: any = {
    __type: "DataTransfer",
    BytesTransferred: undefined,
    ObjectsTransferred: undefined,
    TotalBytes: undefined,
    TotalObjects: undefined
  };
  if (
    output.BytesTransferred !== undefined &&
    output.BytesTransferred !== null
  ) {
    contents.BytesTransferred = output.BytesTransferred;
  }
  if (
    output.ObjectsTransferred !== undefined &&
    output.ObjectsTransferred !== null
  ) {
    contents.ObjectsTransferred = output.ObjectsTransferred;
  }
  if (output.TotalBytes !== undefined && output.TotalBytes !== null) {
    contents.TotalBytes = output.TotalBytes;
  }
  if (output.TotalObjects !== undefined && output.TotalObjects !== null) {
    contents.TotalObjects = output.TotalObjects;
  }
  return contents;
};

const deserializeAws_json1_1DescribeAddressResult = (
  output: any,
  context: __SerdeContext
): DescribeAddressResult => {
  let contents: any = {
    __type: "DescribeAddressResult",
    Address: undefined
  };
  if (output.Address !== undefined && output.Address !== null) {
    contents.Address = deserializeAws_json1_1Address(output.Address, context);
  }
  return contents;
};

const deserializeAws_json1_1DescribeAddressesResult = (
  output: any,
  context: __SerdeContext
): DescribeAddressesResult => {
  let contents: any = {
    __type: "DescribeAddressesResult",
    Addresses: undefined,
    NextToken: undefined
  };
  if (output.Addresses !== undefined && output.Addresses !== null) {
    contents.Addresses = deserializeAws_json1_1AddressList(
      output.Addresses,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeClusterResult = (
  output: any,
  context: __SerdeContext
): DescribeClusterResult => {
  let contents: any = {
    __type: "DescribeClusterResult",
    ClusterMetadata: undefined
  };
  if (output.ClusterMetadata !== undefined && output.ClusterMetadata !== null) {
    contents.ClusterMetadata = deserializeAws_json1_1ClusterMetadata(
      output.ClusterMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeJobResult = (
  output: any,
  context: __SerdeContext
): DescribeJobResult => {
  let contents: any = {
    __type: "DescribeJobResult",
    JobMetadata: undefined,
    SubJobMetadata: undefined
  };
  if (output.JobMetadata !== undefined && output.JobMetadata !== null) {
    contents.JobMetadata = deserializeAws_json1_1JobMetadata(
      output.JobMetadata,
      context
    );
  }
  if (output.SubJobMetadata !== undefined && output.SubJobMetadata !== null) {
    contents.SubJobMetadata = deserializeAws_json1_1JobMetadataList(
      output.SubJobMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Ec2AmiResource = (
  output: any,
  context: __SerdeContext
): Ec2AmiResource => {
  let contents: any = {
    __type: "Ec2AmiResource",
    AmiId: undefined,
    SnowballAmiId: undefined
  };
  if (output.AmiId !== undefined && output.AmiId !== null) {
    contents.AmiId = output.AmiId;
  }
  if (output.SnowballAmiId !== undefined && output.SnowballAmiId !== null) {
    contents.SnowballAmiId = output.SnowballAmiId;
  }
  return contents;
};

const deserializeAws_json1_1Ec2AmiResourceList = (
  output: any,
  context: __SerdeContext
): Array<Ec2AmiResource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Ec2AmiResource(entry, context)
  );
};

const deserializeAws_json1_1Ec2RequestFailedException = (
  output: any,
  context: __SerdeContext
): Ec2RequestFailedException => {
  let contents: any = {
    __type: "Ec2RequestFailedException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1EventTriggerDefinition = (
  output: any,
  context: __SerdeContext
): EventTriggerDefinition => {
  let contents: any = {
    __type: "EventTriggerDefinition",
    EventResourceARN: undefined
  };
  if (
    output.EventResourceARN !== undefined &&
    output.EventResourceARN !== null
  ) {
    contents.EventResourceARN = output.EventResourceARN;
  }
  return contents;
};

const deserializeAws_json1_1EventTriggerDefinitionList = (
  output: any,
  context: __SerdeContext
): Array<EventTriggerDefinition> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventTriggerDefinition(entry, context)
  );
};

const deserializeAws_json1_1GetJobManifestResult = (
  output: any,
  context: __SerdeContext
): GetJobManifestResult => {
  let contents: any = {
    __type: "GetJobManifestResult",
    ManifestURI: undefined
  };
  if (output.ManifestURI !== undefined && output.ManifestURI !== null) {
    contents.ManifestURI = output.ManifestURI;
  }
  return contents;
};

const deserializeAws_json1_1GetJobUnlockCodeResult = (
  output: any,
  context: __SerdeContext
): GetJobUnlockCodeResult => {
  let contents: any = {
    __type: "GetJobUnlockCodeResult",
    UnlockCode: undefined
  };
  if (output.UnlockCode !== undefined && output.UnlockCode !== null) {
    contents.UnlockCode = output.UnlockCode;
  }
  return contents;
};

const deserializeAws_json1_1GetSnowballUsageResult = (
  output: any,
  context: __SerdeContext
): GetSnowballUsageResult => {
  let contents: any = {
    __type: "GetSnowballUsageResult",
    SnowballLimit: undefined,
    SnowballsInUse: undefined
  };
  if (output.SnowballLimit !== undefined && output.SnowballLimit !== null) {
    contents.SnowballLimit = output.SnowballLimit;
  }
  if (output.SnowballsInUse !== undefined && output.SnowballsInUse !== null) {
    contents.SnowballsInUse = output.SnowballsInUse;
  }
  return contents;
};

const deserializeAws_json1_1GetSoftwareUpdatesResult = (
  output: any,
  context: __SerdeContext
): GetSoftwareUpdatesResult => {
  let contents: any = {
    __type: "GetSoftwareUpdatesResult",
    UpdatesURI: undefined
  };
  if (output.UpdatesURI !== undefined && output.UpdatesURI !== null) {
    contents.UpdatesURI = output.UpdatesURI;
  }
  return contents;
};

const deserializeAws_json1_1InvalidAddressException = (
  output: any,
  context: __SerdeContext
): InvalidAddressException => {
  let contents: any = {
    __type: "InvalidAddressException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidInputCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidInputCombinationException => {
  let contents: any = {
    __type: "InvalidInputCombinationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidJobStateException = (
  output: any,
  context: __SerdeContext
): InvalidJobStateException => {
  let contents: any = {
    __type: "InvalidJobStateException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
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
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidResourceException = (
  output: any,
  context: __SerdeContext
): InvalidResourceException => {
  let contents: any = {
    __type: "InvalidResourceException",
    Message: undefined,
    ResourceType: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1JobListEntry = (
  output: any,
  context: __SerdeContext
): JobListEntry => {
  let contents: any = {
    __type: "JobListEntry",
    CreationDate: undefined,
    Description: undefined,
    IsMaster: undefined,
    JobId: undefined,
    JobState: undefined,
    JobType: undefined,
    SnowballType: undefined
  };
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.IsMaster !== undefined && output.IsMaster !== null) {
    contents.IsMaster = output.IsMaster;
  }
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  if (output.JobState !== undefined && output.JobState !== null) {
    contents.JobState = output.JobState;
  }
  if (output.JobType !== undefined && output.JobType !== null) {
    contents.JobType = output.JobType;
  }
  if (output.SnowballType !== undefined && output.SnowballType !== null) {
    contents.SnowballType = output.SnowballType;
  }
  return contents;
};

const deserializeAws_json1_1JobListEntryList = (
  output: any,
  context: __SerdeContext
): Array<JobListEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1JobListEntry(entry, context)
  );
};

const deserializeAws_json1_1JobLogs = (
  output: any,
  context: __SerdeContext
): JobLogs => {
  let contents: any = {
    __type: "JobLogs",
    JobCompletionReportURI: undefined,
    JobFailureLogURI: undefined,
    JobSuccessLogURI: undefined
  };
  if (
    output.JobCompletionReportURI !== undefined &&
    output.JobCompletionReportURI !== null
  ) {
    contents.JobCompletionReportURI = output.JobCompletionReportURI;
  }
  if (
    output.JobFailureLogURI !== undefined &&
    output.JobFailureLogURI !== null
  ) {
    contents.JobFailureLogURI = output.JobFailureLogURI;
  }
  if (
    output.JobSuccessLogURI !== undefined &&
    output.JobSuccessLogURI !== null
  ) {
    contents.JobSuccessLogURI = output.JobSuccessLogURI;
  }
  return contents;
};

const deserializeAws_json1_1JobMetadata = (
  output: any,
  context: __SerdeContext
): JobMetadata => {
  let contents: any = {
    __type: "JobMetadata",
    AddressId: undefined,
    ClusterId: undefined,
    CreationDate: undefined,
    DataTransferProgress: undefined,
    Description: undefined,
    ForwardingAddressId: undefined,
    JobId: undefined,
    JobLogInfo: undefined,
    JobState: undefined,
    JobType: undefined,
    KmsKeyARN: undefined,
    Notification: undefined,
    Resources: undefined,
    RoleARN: undefined,
    ShippingDetails: undefined,
    SnowballCapacityPreference: undefined,
    SnowballType: undefined
  };
  if (output.AddressId !== undefined && output.AddressId !== null) {
    contents.AddressId = output.AddressId;
  }
  if (output.ClusterId !== undefined && output.ClusterId !== null) {
    contents.ClusterId = output.ClusterId;
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (
    output.DataTransferProgress !== undefined &&
    output.DataTransferProgress !== null
  ) {
    contents.DataTransferProgress = deserializeAws_json1_1DataTransfer(
      output.DataTransferProgress,
      context
    );
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (
    output.ForwardingAddressId !== undefined &&
    output.ForwardingAddressId !== null
  ) {
    contents.ForwardingAddressId = output.ForwardingAddressId;
  }
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  if (output.JobLogInfo !== undefined && output.JobLogInfo !== null) {
    contents.JobLogInfo = deserializeAws_json1_1JobLogs(
      output.JobLogInfo,
      context
    );
  }
  if (output.JobState !== undefined && output.JobState !== null) {
    contents.JobState = output.JobState;
  }
  if (output.JobType !== undefined && output.JobType !== null) {
    contents.JobType = output.JobType;
  }
  if (output.KmsKeyARN !== undefined && output.KmsKeyARN !== null) {
    contents.KmsKeyARN = output.KmsKeyARN;
  }
  if (output.Notification !== undefined && output.Notification !== null) {
    contents.Notification = deserializeAws_json1_1Notification(
      output.Notification,
      context
    );
  }
  if (output.Resources !== undefined && output.Resources !== null) {
    contents.Resources = deserializeAws_json1_1JobResource(
      output.Resources,
      context
    );
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  if (output.ShippingDetails !== undefined && output.ShippingDetails !== null) {
    contents.ShippingDetails = deserializeAws_json1_1ShippingDetails(
      output.ShippingDetails,
      context
    );
  }
  if (
    output.SnowballCapacityPreference !== undefined &&
    output.SnowballCapacityPreference !== null
  ) {
    contents.SnowballCapacityPreference = output.SnowballCapacityPreference;
  }
  if (output.SnowballType !== undefined && output.SnowballType !== null) {
    contents.SnowballType = output.SnowballType;
  }
  return contents;
};

const deserializeAws_json1_1JobMetadataList = (
  output: any,
  context: __SerdeContext
): Array<JobMetadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1JobMetadata(entry, context)
  );
};

const deserializeAws_json1_1JobResource = (
  output: any,
  context: __SerdeContext
): JobResource => {
  let contents: any = {
    __type: "JobResource",
    Ec2AmiResources: undefined,
    LambdaResources: undefined,
    S3Resources: undefined
  };
  if (output.Ec2AmiResources !== undefined && output.Ec2AmiResources !== null) {
    contents.Ec2AmiResources = deserializeAws_json1_1Ec2AmiResourceList(
      output.Ec2AmiResources,
      context
    );
  }
  if (output.LambdaResources !== undefined && output.LambdaResources !== null) {
    contents.LambdaResources = deserializeAws_json1_1LambdaResourceList(
      output.LambdaResources,
      context
    );
  }
  if (output.S3Resources !== undefined && output.S3Resources !== null) {
    contents.S3Resources = deserializeAws_json1_1S3ResourceList(
      output.S3Resources,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1JobStateList = (
  output: any,
  context: __SerdeContext
): Array<JobState | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1KMSRequestFailedException = (
  output: any,
  context: __SerdeContext
): KMSRequestFailedException => {
  let contents: any = {
    __type: "KMSRequestFailedException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1KeyRange = (
  output: any,
  context: __SerdeContext
): KeyRange => {
  let contents: any = {
    __type: "KeyRange",
    BeginMarker: undefined,
    EndMarker: undefined
  };
  if (output.BeginMarker !== undefined && output.BeginMarker !== null) {
    contents.BeginMarker = output.BeginMarker;
  }
  if (output.EndMarker !== undefined && output.EndMarker !== null) {
    contents.EndMarker = output.EndMarker;
  }
  return contents;
};

const deserializeAws_json1_1LambdaResource = (
  output: any,
  context: __SerdeContext
): LambdaResource => {
  let contents: any = {
    __type: "LambdaResource",
    EventTriggers: undefined,
    LambdaArn: undefined
  };
  if (output.EventTriggers !== undefined && output.EventTriggers !== null) {
    contents.EventTriggers = deserializeAws_json1_1EventTriggerDefinitionList(
      output.EventTriggers,
      context
    );
  }
  if (output.LambdaArn !== undefined && output.LambdaArn !== null) {
    contents.LambdaArn = output.LambdaArn;
  }
  return contents;
};

const deserializeAws_json1_1LambdaResourceList = (
  output: any,
  context: __SerdeContext
): Array<LambdaResource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LambdaResource(entry, context)
  );
};

const deserializeAws_json1_1ListClusterJobsResult = (
  output: any,
  context: __SerdeContext
): ListClusterJobsResult => {
  let contents: any = {
    __type: "ListClusterJobsResult",
    JobListEntries: undefined,
    NextToken: undefined
  };
  if (output.JobListEntries !== undefined && output.JobListEntries !== null) {
    contents.JobListEntries = deserializeAws_json1_1JobListEntryList(
      output.JobListEntries,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListClustersResult = (
  output: any,
  context: __SerdeContext
): ListClustersResult => {
  let contents: any = {
    __type: "ListClustersResult",
    ClusterListEntries: undefined,
    NextToken: undefined
  };
  if (
    output.ClusterListEntries !== undefined &&
    output.ClusterListEntries !== null
  ) {
    contents.ClusterListEntries = deserializeAws_json1_1ClusterListEntryList(
      output.ClusterListEntries,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListCompatibleImagesResult = (
  output: any,
  context: __SerdeContext
): ListCompatibleImagesResult => {
  let contents: any = {
    __type: "ListCompatibleImagesResult",
    CompatibleImages: undefined,
    NextToken: undefined
  };
  if (
    output.CompatibleImages !== undefined &&
    output.CompatibleImages !== null
  ) {
    contents.CompatibleImages = deserializeAws_json1_1CompatibleImageList(
      output.CompatibleImages,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListJobsResult = (
  output: any,
  context: __SerdeContext
): ListJobsResult => {
  let contents: any = {
    __type: "ListJobsResult",
    JobListEntries: undefined,
    NextToken: undefined
  };
  if (output.JobListEntries !== undefined && output.JobListEntries !== null) {
    contents.JobListEntries = deserializeAws_json1_1JobListEntryList(
      output.JobListEntries,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1Notification = (
  output: any,
  context: __SerdeContext
): Notification => {
  let contents: any = {
    __type: "Notification",
    JobStatesToNotify: undefined,
    NotifyAll: undefined,
    SnsTopicARN: undefined
  };
  if (
    output.JobStatesToNotify !== undefined &&
    output.JobStatesToNotify !== null
  ) {
    contents.JobStatesToNotify = deserializeAws_json1_1JobStateList(
      output.JobStatesToNotify,
      context
    );
  }
  if (output.NotifyAll !== undefined && output.NotifyAll !== null) {
    contents.NotifyAll = output.NotifyAll;
  }
  if (output.SnsTopicARN !== undefined && output.SnsTopicARN !== null) {
    contents.SnsTopicARN = output.SnsTopicARN;
  }
  return contents;
};

const deserializeAws_json1_1S3Resource = (
  output: any,
  context: __SerdeContext
): S3Resource => {
  let contents: any = {
    __type: "S3Resource",
    BucketArn: undefined,
    KeyRange: undefined
  };
  if (output.BucketArn !== undefined && output.BucketArn !== null) {
    contents.BucketArn = output.BucketArn;
  }
  if (output.KeyRange !== undefined && output.KeyRange !== null) {
    contents.KeyRange = deserializeAws_json1_1KeyRange(
      output.KeyRange,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1S3ResourceList = (
  output: any,
  context: __SerdeContext
): Array<S3Resource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1S3Resource(entry, context)
  );
};

const deserializeAws_json1_1Shipment = (
  output: any,
  context: __SerdeContext
): Shipment => {
  let contents: any = {
    __type: "Shipment",
    Status: undefined,
    TrackingNumber: undefined
  };
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.TrackingNumber !== undefined && output.TrackingNumber !== null) {
    contents.TrackingNumber = output.TrackingNumber;
  }
  return contents;
};

const deserializeAws_json1_1ShippingDetails = (
  output: any,
  context: __SerdeContext
): ShippingDetails => {
  let contents: any = {
    __type: "ShippingDetails",
    InboundShipment: undefined,
    OutboundShipment: undefined,
    ShippingOption: undefined
  };
  if (output.InboundShipment !== undefined && output.InboundShipment !== null) {
    contents.InboundShipment = deserializeAws_json1_1Shipment(
      output.InboundShipment,
      context
    );
  }
  if (
    output.OutboundShipment !== undefined &&
    output.OutboundShipment !== null
  ) {
    contents.OutboundShipment = deserializeAws_json1_1Shipment(
      output.OutboundShipment,
      context
    );
  }
  if (output.ShippingOption !== undefined && output.ShippingOption !== null) {
    contents.ShippingOption = output.ShippingOption;
  }
  return contents;
};

const deserializeAws_json1_1UnsupportedAddressException = (
  output: any,
  context: __SerdeContext
): UnsupportedAddressException => {
  let contents: any = {
    __type: "UnsupportedAddressException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1UpdateClusterResult = (
  output: any,
  context: __SerdeContext
): UpdateClusterResult => {
  let contents: any = {
    __type: "UpdateClusterResult"
  };
  return contents;
};

const deserializeAws_json1_1UpdateJobResult = (
  output: any,
  context: __SerdeContext
): UpdateJobResult => {
  let contents: any = {
    __type: "UpdateJobResult"
  };
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
