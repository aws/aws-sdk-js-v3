import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "../commands/CreateDatasetCommand";
import {
  CreateInferenceSchedulerCommandInput,
  CreateInferenceSchedulerCommandOutput,
} from "../commands/CreateInferenceSchedulerCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "../commands/CreateModelCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "../commands/DeleteDatasetCommand";
import {
  DeleteInferenceSchedulerCommandInput,
  DeleteInferenceSchedulerCommandOutput,
} from "../commands/DeleteInferenceSchedulerCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "../commands/DeleteModelCommand";
import {
  DescribeDataIngestionJobCommandInput,
  DescribeDataIngestionJobCommandOutput,
} from "../commands/DescribeDataIngestionJobCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "../commands/DescribeDatasetCommand";
import {
  DescribeInferenceSchedulerCommandInput,
  DescribeInferenceSchedulerCommandOutput,
} from "../commands/DescribeInferenceSchedulerCommand";
import { DescribeModelCommandInput, DescribeModelCommandOutput } from "../commands/DescribeModelCommand";
import {
  ListDataIngestionJobsCommandInput,
  ListDataIngestionJobsCommandOutput,
} from "../commands/ListDataIngestionJobsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import {
  ListInferenceExecutionsCommandInput,
  ListInferenceExecutionsCommandOutput,
} from "../commands/ListInferenceExecutionsCommand";
import {
  ListInferenceSchedulersCommandInput,
  ListInferenceSchedulersCommandOutput,
} from "../commands/ListInferenceSchedulersCommand";
import { ListModelsCommandInput, ListModelsCommandOutput } from "../commands/ListModelsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  StartDataIngestionJobCommandInput,
  StartDataIngestionJobCommandOutput,
} from "../commands/StartDataIngestionJobCommand";
import {
  StartInferenceSchedulerCommandInput,
  StartInferenceSchedulerCommandOutput,
} from "../commands/StartInferenceSchedulerCommand";
import {
  StopInferenceSchedulerCommandInput,
  StopInferenceSchedulerCommandOutput,
} from "../commands/StopInferenceSchedulerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateInferenceSchedulerCommandInput,
  UpdateInferenceSchedulerCommandOutput,
} from "../commands/UpdateInferenceSchedulerCommand";
import {
  AccessDeniedException,
  ConflictException,
  CreateDatasetRequest,
  CreateDatasetResponse,
  CreateInferenceSchedulerRequest,
  CreateInferenceSchedulerResponse,
  CreateModelRequest,
  CreateModelResponse,
  DataIngestionJobSummary,
  DataPreProcessingConfiguration,
  DatasetSchema,
  DatasetSummary,
  DeleteDatasetRequest,
  DeleteInferenceSchedulerRequest,
  DeleteModelRequest,
  DescribeDataIngestionJobRequest,
  DescribeDataIngestionJobResponse,
  DescribeDatasetRequest,
  DescribeDatasetResponse,
  DescribeInferenceSchedulerRequest,
  DescribeInferenceSchedulerResponse,
  DescribeModelRequest,
  DescribeModelResponse,
  InferenceExecutionSummary,
  InferenceInputConfiguration,
  InferenceInputNameConfiguration,
  InferenceOutputConfiguration,
  InferenceS3InputConfiguration,
  InferenceS3OutputConfiguration,
  InferenceSchedulerSummary,
  IngestionInputConfiguration,
  IngestionS3InputConfiguration,
  InternalServerException,
  LabelsInputConfiguration,
  LabelsS3InputConfiguration,
  ListDataIngestionJobsRequest,
  ListDataIngestionJobsResponse,
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListInferenceExecutionsRequest,
  ListInferenceExecutionsResponse,
  ListInferenceSchedulersRequest,
  ListInferenceSchedulersResponse,
  ListModelsRequest,
  ListModelsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ModelSummary,
  ResourceNotFoundException,
  S3Object,
  ServiceQuotaExceededException,
  StartDataIngestionJobRequest,
  StartDataIngestionJobResponse,
  StartInferenceSchedulerRequest,
  StartInferenceSchedulerResponse,
  StopInferenceSchedulerRequest,
  StopInferenceSchedulerResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  ThrottlingException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateInferenceSchedulerRequest,
  ValidationException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  LazyJsonString as __LazyJsonString,
  expectLong as __expectLong,
  expectString as __expectString,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_0CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.CreateDataset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateInferenceSchedulerCommand = async (
  input: CreateInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.CreateInferenceScheduler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateModelCommand = async (
  input: CreateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.CreateModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DeleteDataset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteInferenceSchedulerCommand = async (
  input: DeleteInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteModelCommand = async (
  input: DeleteModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DeleteModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeDataIngestionJobCommand = async (
  input: DescribeDataIngestionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeDataIngestionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DescribeDataset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeInferenceSchedulerCommand = async (
  input: DescribeInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeModelCommand = async (
  input: DescribeModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.DescribeModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeModelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListDataIngestionJobsCommand = async (
  input: ListDataIngestionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.ListDataIngestionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListDataIngestionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.ListDatasets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListDatasetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListInferenceExecutionsCommand = async (
  input: ListInferenceExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.ListInferenceExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListInferenceExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListInferenceSchedulersCommand = async (
  input: ListInferenceSchedulersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.ListInferenceSchedulers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListInferenceSchedulersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListModelsCommand = async (
  input: ListModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.ListModels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListModelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StartDataIngestionJobCommand = async (
  input: StartDataIngestionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.StartDataIngestionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StartDataIngestionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StartInferenceSchedulerCommand = async (
  input: StartInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.StartInferenceScheduler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StartInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StopInferenceSchedulerCommand = async (
  input: StopInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.StopInferenceScheduler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StopInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateInferenceSchedulerCommand = async (
  input: UpdateInferenceSchedulerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateInferenceSchedulerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateDatasetResponse(data, context);
  const response: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      response = {
        ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0CreateInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateInferenceSchedulerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateInferenceSchedulerResponse(data, context);
  const response: CreateInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateInferenceSchedulerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInferenceSchedulerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      response = {
        ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0CreateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateModelResponse(data, context);
  const response: CreateModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      response = {
        ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteDatasetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      response = {
        ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DeleteInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteInferenceSchedulerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteInferenceSchedulerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInferenceSchedulerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      response = {
        ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DeleteModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteModelCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      response = {
        ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DescribeDataIngestionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataIngestionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeDataIngestionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeDataIngestionJobResponse(data, context);
  const response: DescribeDataIngestionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeDataIngestionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataIngestionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeDatasetResponse(data, context);
  const response: DescribeDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DescribeInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeInferenceSchedulerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeInferenceSchedulerResponse(data, context);
  const response: DescribeInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeInferenceSchedulerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInferenceSchedulerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0DescribeModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeModelResponse(data, context);
  const response: DescribeModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ListDataIngestionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataIngestionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListDataIngestionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListDataIngestionJobsResponse(data, context);
  const response: ListDataIngestionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListDataIngestionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataIngestionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListDatasetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListDatasetsResponse(data, context);
  const response: ListDatasetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListDatasetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ListInferenceExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListInferenceExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListInferenceExecutionsResponse(data, context);
  const response: ListInferenceExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListInferenceExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ListInferenceSchedulersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceSchedulersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListInferenceSchedulersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListInferenceSchedulersResponse(data, context);
  const response: ListInferenceSchedulersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListInferenceSchedulersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceSchedulersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ListModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListModelsResponse(data, context);
  const response: ListModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0StartDataIngestionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataIngestionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StartDataIngestionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StartDataIngestionJobResponse(data, context);
  const response: StartDataIngestionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StartDataIngestionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDataIngestionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      response = {
        ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0StartInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StartInferenceSchedulerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StartInferenceSchedulerResponse(data, context);
  const response: StartInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StartInferenceSchedulerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInferenceSchedulerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      response = {
        ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0StopInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StopInferenceSchedulerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StopInferenceSchedulerResponse(data, context);
  const response: StopInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StopInferenceSchedulerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInferenceSchedulerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      response = {
        ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
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
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutequipment#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
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
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_0UpdateInferenceSchedulerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInferenceSchedulerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateInferenceSchedulerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateInferenceSchedulerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateInferenceSchedulerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInferenceSchedulerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutequipment#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lookoutequipment#ConflictException":
      response = {
        ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lookoutequipment#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutequipment#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lookoutequipment#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lookoutequipment#ValidationException":
      response = {
        ...(await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_0AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConflictException(body, context);
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerException(body, context);
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ServiceQuotaExceededException(body, context);
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ThrottlingException(body, context);
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ValidationException(body, context);
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_0CreateDatasetRequest = (input: CreateDatasetRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
    ...(input.DatasetSchema !== undefined &&
      input.DatasetSchema !== null && {
        DatasetSchema: serializeAws_json1_0DatasetSchema(input.DatasetSchema, context),
      }),
    ...(input.ServerSideKmsKeyId !== undefined &&
      input.ServerSideKmsKeyId !== null && { ServerSideKmsKeyId: input.ServerSideKmsKeyId }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0CreateInferenceSchedulerRequest = (
  input: CreateInferenceSchedulerRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataDelayOffsetInMinutes !== undefined &&
      input.DataDelayOffsetInMinutes !== null && { DataDelayOffsetInMinutes: input.DataDelayOffsetInMinutes }),
    ...(input.DataInputConfiguration !== undefined &&
      input.DataInputConfiguration !== null && {
        DataInputConfiguration: serializeAws_json1_0InferenceInputConfiguration(input.DataInputConfiguration, context),
      }),
    ...(input.DataOutputConfiguration !== undefined &&
      input.DataOutputConfiguration !== null && {
        DataOutputConfiguration: serializeAws_json1_0InferenceOutputConfiguration(
          input.DataOutputConfiguration,
          context
        ),
      }),
    ...(input.DataUploadFrequency !== undefined &&
      input.DataUploadFrequency !== null && { DataUploadFrequency: input.DataUploadFrequency }),
    ...(input.InferenceSchedulerName !== undefined &&
      input.InferenceSchedulerName !== null && { InferenceSchedulerName: input.InferenceSchedulerName }),
    ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.ServerSideKmsKeyId !== undefined &&
      input.ServerSideKmsKeyId !== null && { ServerSideKmsKeyId: input.ServerSideKmsKeyId }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0CreateModelRequest = (input: CreateModelRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataPreProcessingConfiguration !== undefined &&
      input.DataPreProcessingConfiguration !== null && {
        DataPreProcessingConfiguration: serializeAws_json1_0DataPreProcessingConfiguration(
          input.DataPreProcessingConfiguration,
          context
        ),
      }),
    ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
    ...(input.DatasetSchema !== undefined &&
      input.DatasetSchema !== null && {
        DatasetSchema: serializeAws_json1_0DatasetSchema(input.DatasetSchema, context),
      }),
    ...(input.EvaluationDataEndTime !== undefined &&
      input.EvaluationDataEndTime !== null && {
        EvaluationDataEndTime: Math.round(input.EvaluationDataEndTime.getTime() / 1000),
      }),
    ...(input.EvaluationDataStartTime !== undefined &&
      input.EvaluationDataStartTime !== null && {
        EvaluationDataStartTime: Math.round(input.EvaluationDataStartTime.getTime() / 1000),
      }),
    ...(input.LabelsInputConfiguration !== undefined &&
      input.LabelsInputConfiguration !== null && {
        LabelsInputConfiguration: serializeAws_json1_0LabelsInputConfiguration(input.LabelsInputConfiguration, context),
      }),
    ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.ServerSideKmsKeyId !== undefined &&
      input.ServerSideKmsKeyId !== null && { ServerSideKmsKeyId: input.ServerSideKmsKeyId }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    ...(input.TrainingDataEndTime !== undefined &&
      input.TrainingDataEndTime !== null && {
        TrainingDataEndTime: Math.round(input.TrainingDataEndTime.getTime() / 1000),
      }),
    ...(input.TrainingDataStartTime !== undefined &&
      input.TrainingDataStartTime !== null && {
        TrainingDataStartTime: Math.round(input.TrainingDataStartTime.getTime() / 1000),
      }),
  };
};

const serializeAws_json1_0DataPreProcessingConfiguration = (
  input: DataPreProcessingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.TargetSamplingRate !== undefined &&
      input.TargetSamplingRate !== null && { TargetSamplingRate: input.TargetSamplingRate }),
  };
};

const serializeAws_json1_0DatasetSchema = (input: DatasetSchema, context: __SerdeContext): any => {
  return {
    ...(input.InlineDataSchema !== undefined &&
      input.InlineDataSchema !== null && { InlineDataSchema: __LazyJsonString.fromObject(input.InlineDataSchema) }),
  };
};

const serializeAws_json1_0DeleteDatasetRequest = (input: DeleteDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
  };
};

const serializeAws_json1_0DeleteInferenceSchedulerRequest = (
  input: DeleteInferenceSchedulerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InferenceSchedulerName !== undefined &&
      input.InferenceSchedulerName !== null && { InferenceSchedulerName: input.InferenceSchedulerName }),
  };
};

const serializeAws_json1_0DeleteModelRequest = (input: DeleteModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
  };
};

const serializeAws_json1_0DescribeDataIngestionJobRequest = (
  input: DescribeDataIngestionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_0DescribeDatasetRequest = (input: DescribeDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
  };
};

const serializeAws_json1_0DescribeInferenceSchedulerRequest = (
  input: DescribeInferenceSchedulerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InferenceSchedulerName !== undefined &&
      input.InferenceSchedulerName !== null && { InferenceSchedulerName: input.InferenceSchedulerName }),
  };
};

const serializeAws_json1_0DescribeModelRequest = (input: DescribeModelRequest, context: __SerdeContext): any => {
  return {
    ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
  };
};

const serializeAws_json1_0InferenceInputConfiguration = (
  input: InferenceInputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InferenceInputNameConfiguration !== undefined &&
      input.InferenceInputNameConfiguration !== null && {
        InferenceInputNameConfiguration: serializeAws_json1_0InferenceInputNameConfiguration(
          input.InferenceInputNameConfiguration,
          context
        ),
      }),
    ...(input.InputTimeZoneOffset !== undefined &&
      input.InputTimeZoneOffset !== null && { InputTimeZoneOffset: input.InputTimeZoneOffset }),
    ...(input.S3InputConfiguration !== undefined &&
      input.S3InputConfiguration !== null && {
        S3InputConfiguration: serializeAws_json1_0InferenceS3InputConfiguration(input.S3InputConfiguration, context),
      }),
  };
};

const serializeAws_json1_0InferenceInputNameConfiguration = (
  input: InferenceInputNameConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComponentTimestampDelimiter !== undefined &&
      input.ComponentTimestampDelimiter !== null && { ComponentTimestampDelimiter: input.ComponentTimestampDelimiter }),
    ...(input.TimestampFormat !== undefined &&
      input.TimestampFormat !== null && { TimestampFormat: input.TimestampFormat }),
  };
};

const serializeAws_json1_0InferenceOutputConfiguration = (
  input: InferenceOutputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3OutputConfiguration !== undefined &&
      input.S3OutputConfiguration !== null && {
        S3OutputConfiguration: serializeAws_json1_0InferenceS3OutputConfiguration(input.S3OutputConfiguration, context),
      }),
  };
};

const serializeAws_json1_0InferenceS3InputConfiguration = (
  input: InferenceS3InputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
  };
};

const serializeAws_json1_0InferenceS3OutputConfiguration = (
  input: InferenceS3OutputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
  };
};

const serializeAws_json1_0IngestionInputConfiguration = (
  input: IngestionInputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3InputConfiguration !== undefined &&
      input.S3InputConfiguration !== null && {
        S3InputConfiguration: serializeAws_json1_0IngestionS3InputConfiguration(input.S3InputConfiguration, context),
      }),
  };
};

const serializeAws_json1_0IngestionS3InputConfiguration = (
  input: IngestionS3InputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
  };
};

const serializeAws_json1_0LabelsInputConfiguration = (
  input: LabelsInputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3InputConfiguration !== undefined &&
      input.S3InputConfiguration !== null && {
        S3InputConfiguration: serializeAws_json1_0LabelsS3InputConfiguration(input.S3InputConfiguration, context),
      }),
  };
};

const serializeAws_json1_0LabelsS3InputConfiguration = (
  input: LabelsS3InputConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
  };
};

const serializeAws_json1_0ListDataIngestionJobsRequest = (
  input: ListDataIngestionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_json1_0ListDatasetsRequest = (input: ListDatasetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetNameBeginsWith !== undefined &&
      input.DatasetNameBeginsWith !== null && { DatasetNameBeginsWith: input.DatasetNameBeginsWith }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListInferenceExecutionsRequest = (
  input: ListInferenceExecutionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataEndTimeBefore !== undefined &&
      input.DataEndTimeBefore !== null && { DataEndTimeBefore: Math.round(input.DataEndTimeBefore.getTime() / 1000) }),
    ...(input.DataStartTimeAfter !== undefined &&
      input.DataStartTimeAfter !== null && {
        DataStartTimeAfter: Math.round(input.DataStartTimeAfter.getTime() / 1000),
      }),
    ...(input.InferenceSchedulerName !== undefined &&
      input.InferenceSchedulerName !== null && { InferenceSchedulerName: input.InferenceSchedulerName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_json1_0ListInferenceSchedulersRequest = (
  input: ListInferenceSchedulersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InferenceSchedulerNameBeginsWith !== undefined &&
      input.InferenceSchedulerNameBeginsWith !== null && {
        InferenceSchedulerNameBeginsWith: input.InferenceSchedulerNameBeginsWith,
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.ModelName !== undefined && input.ModelName !== null && { ModelName: input.ModelName }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListModelsRequest = (input: ListModelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetNameBeginsWith !== undefined &&
      input.DatasetNameBeginsWith !== null && { DatasetNameBeginsWith: input.DatasetNameBeginsWith }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.ModelNameBeginsWith !== undefined &&
      input.ModelNameBeginsWith !== null && { ModelNameBeginsWith: input.ModelNameBeginsWith }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_json1_0ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0StartDataIngestionJobRequest = (
  input: StartDataIngestionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
    ...(input.IngestionInputConfiguration !== undefined &&
      input.IngestionInputConfiguration !== null && {
        IngestionInputConfiguration: serializeAws_json1_0IngestionInputConfiguration(
          input.IngestionInputConfiguration,
          context
        ),
      }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_0StartInferenceSchedulerRequest = (
  input: StartInferenceSchedulerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InferenceSchedulerName !== undefined &&
      input.InferenceSchedulerName !== null && { InferenceSchedulerName: input.InferenceSchedulerName }),
  };
};

const serializeAws_json1_0StopInferenceSchedulerRequest = (
  input: StopInferenceSchedulerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InferenceSchedulerName !== undefined &&
      input.InferenceSchedulerName !== null && { InferenceSchedulerName: input.InferenceSchedulerName }),
  };
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_0TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_0UpdateInferenceSchedulerRequest = (
  input: UpdateInferenceSchedulerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataDelayOffsetInMinutes !== undefined &&
      input.DataDelayOffsetInMinutes !== null && { DataDelayOffsetInMinutes: input.DataDelayOffsetInMinutes }),
    ...(input.DataInputConfiguration !== undefined &&
      input.DataInputConfiguration !== null && {
        DataInputConfiguration: serializeAws_json1_0InferenceInputConfiguration(input.DataInputConfiguration, context),
      }),
    ...(input.DataOutputConfiguration !== undefined &&
      input.DataOutputConfiguration !== null && {
        DataOutputConfiguration: serializeAws_json1_0InferenceOutputConfiguration(
          input.DataOutputConfiguration,
          context
        ),
      }),
    ...(input.DataUploadFrequency !== undefined &&
      input.DataUploadFrequency !== null && { DataUploadFrequency: input.DataUploadFrequency }),
    ...(input.InferenceSchedulerName !== undefined &&
      input.InferenceSchedulerName !== null && { InferenceSchedulerName: input.InferenceSchedulerName }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
  };
};

const deserializeAws_json1_0AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0CreateDatasetResponse = (output: any, context: __SerdeContext): CreateDatasetResponse => {
  return {
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0CreateInferenceSchedulerResponse = (
  output: any,
  context: __SerdeContext
): CreateInferenceSchedulerResponse => {
  return {
    InferenceSchedulerArn: __expectString(output.InferenceSchedulerArn),
    InferenceSchedulerName: __expectString(output.InferenceSchedulerName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0CreateModelResponse = (output: any, context: __SerdeContext): CreateModelResponse => {
  return {
    ModelArn: __expectString(output.ModelArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0DataIngestionJobSummaries = (
  output: any,
  context: __SerdeContext
): DataIngestionJobSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0DataIngestionJobSummary(entry, context);
    });
};

const deserializeAws_json1_0DataIngestionJobSummary = (
  output: any,
  context: __SerdeContext
): DataIngestionJobSummary => {
  return {
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    IngestionInputConfiguration:
      output.IngestionInputConfiguration !== undefined && output.IngestionInputConfiguration !== null
        ? deserializeAws_json1_0IngestionInputConfiguration(output.IngestionInputConfiguration, context)
        : undefined,
    JobId: __expectString(output.JobId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0DataPreProcessingConfiguration = (
  output: any,
  context: __SerdeContext
): DataPreProcessingConfiguration => {
  return {
    TargetSamplingRate: __expectString(output.TargetSamplingRate),
  } as any;
};

const deserializeAws_json1_0DatasetSummaries = (output: any, context: __SerdeContext): DatasetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0DatasetSummary(entry, context);
    });
};

const deserializeAws_json1_0DatasetSummary = (output: any, context: __SerdeContext): DatasetSummary => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0DescribeDataIngestionJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDataIngestionJobResponse => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    FailedReason: __expectString(output.FailedReason),
    IngestionInputConfiguration:
      output.IngestionInputConfiguration !== undefined && output.IngestionInputConfiguration !== null
        ? deserializeAws_json1_0IngestionInputConfiguration(output.IngestionInputConfiguration, context)
        : undefined,
    JobId: __expectString(output.JobId),
    RoleArn: __expectString(output.RoleArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0DescribeDatasetResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetResponse => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    IngestionInputConfiguration:
      output.IngestionInputConfiguration !== undefined && output.IngestionInputConfiguration !== null
        ? deserializeAws_json1_0IngestionInputConfiguration(output.IngestionInputConfiguration, context)
        : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? new Date(Math.round(output.LastUpdatedAt * 1000))
        : undefined,
    Schema: output.Schema !== undefined && output.Schema !== null ? new __LazyJsonString(output.Schema) : undefined,
    ServerSideKmsKeyId: __expectString(output.ServerSideKmsKeyId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0DescribeInferenceSchedulerResponse = (
  output: any,
  context: __SerdeContext
): DescribeInferenceSchedulerResponse => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    DataDelayOffsetInMinutes: __expectLong(output.DataDelayOffsetInMinutes),
    DataInputConfiguration:
      output.DataInputConfiguration !== undefined && output.DataInputConfiguration !== null
        ? deserializeAws_json1_0InferenceInputConfiguration(output.DataInputConfiguration, context)
        : undefined,
    DataOutputConfiguration:
      output.DataOutputConfiguration !== undefined && output.DataOutputConfiguration !== null
        ? deserializeAws_json1_0InferenceOutputConfiguration(output.DataOutputConfiguration, context)
        : undefined,
    DataUploadFrequency: __expectString(output.DataUploadFrequency),
    InferenceSchedulerArn: __expectString(output.InferenceSchedulerArn),
    InferenceSchedulerName: __expectString(output.InferenceSchedulerName),
    ModelArn: __expectString(output.ModelArn),
    ModelName: __expectString(output.ModelName),
    RoleArn: __expectString(output.RoleArn),
    ServerSideKmsKeyId: __expectString(output.ServerSideKmsKeyId),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt !== undefined && output.UpdatedAt !== null
        ? new Date(Math.round(output.UpdatedAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeModelResponse = (output: any, context: __SerdeContext): DescribeModelResponse => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    DataPreProcessingConfiguration:
      output.DataPreProcessingConfiguration !== undefined && output.DataPreProcessingConfiguration !== null
        ? deserializeAws_json1_0DataPreProcessingConfiguration(output.DataPreProcessingConfiguration, context)
        : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    EvaluationDataEndTime:
      output.EvaluationDataEndTime !== undefined && output.EvaluationDataEndTime !== null
        ? new Date(Math.round(output.EvaluationDataEndTime * 1000))
        : undefined,
    EvaluationDataStartTime:
      output.EvaluationDataStartTime !== undefined && output.EvaluationDataStartTime !== null
        ? new Date(Math.round(output.EvaluationDataStartTime * 1000))
        : undefined,
    FailedReason: __expectString(output.FailedReason),
    LabelsInputConfiguration:
      output.LabelsInputConfiguration !== undefined && output.LabelsInputConfiguration !== null
        ? deserializeAws_json1_0LabelsInputConfiguration(output.LabelsInputConfiguration, context)
        : undefined,
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? new Date(Math.round(output.LastUpdatedTime * 1000))
        : undefined,
    ModelArn: __expectString(output.ModelArn),
    ModelMetrics:
      output.ModelMetrics !== undefined && output.ModelMetrics !== null
        ? new __LazyJsonString(output.ModelMetrics)
        : undefined,
    ModelName: __expectString(output.ModelName),
    RoleArn: __expectString(output.RoleArn),
    Schema: output.Schema !== undefined && output.Schema !== null ? new __LazyJsonString(output.Schema) : undefined,
    ServerSideKmsKeyId: __expectString(output.ServerSideKmsKeyId),
    Status: __expectString(output.Status),
    TrainingDataEndTime:
      output.TrainingDataEndTime !== undefined && output.TrainingDataEndTime !== null
        ? new Date(Math.round(output.TrainingDataEndTime * 1000))
        : undefined,
    TrainingDataStartTime:
      output.TrainingDataStartTime !== undefined && output.TrainingDataStartTime !== null
        ? new Date(Math.round(output.TrainingDataStartTime * 1000))
        : undefined,
    TrainingExecutionEndTime:
      output.TrainingExecutionEndTime !== undefined && output.TrainingExecutionEndTime !== null
        ? new Date(Math.round(output.TrainingExecutionEndTime * 1000))
        : undefined,
    TrainingExecutionStartTime:
      output.TrainingExecutionStartTime !== undefined && output.TrainingExecutionStartTime !== null
        ? new Date(Math.round(output.TrainingExecutionStartTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_0InferenceExecutionSummaries = (
  output: any,
  context: __SerdeContext
): InferenceExecutionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0InferenceExecutionSummary(entry, context);
    });
};

const deserializeAws_json1_0InferenceExecutionSummary = (
  output: any,
  context: __SerdeContext
): InferenceExecutionSummary => {
  return {
    CustomerResultObject:
      output.CustomerResultObject !== undefined && output.CustomerResultObject !== null
        ? deserializeAws_json1_0S3Object(output.CustomerResultObject, context)
        : undefined,
    DataEndTime:
      output.DataEndTime !== undefined && output.DataEndTime !== null
        ? new Date(Math.round(output.DataEndTime * 1000))
        : undefined,
    DataInputConfiguration:
      output.DataInputConfiguration !== undefined && output.DataInputConfiguration !== null
        ? deserializeAws_json1_0InferenceInputConfiguration(output.DataInputConfiguration, context)
        : undefined,
    DataOutputConfiguration:
      output.DataOutputConfiguration !== undefined && output.DataOutputConfiguration !== null
        ? deserializeAws_json1_0InferenceOutputConfiguration(output.DataOutputConfiguration, context)
        : undefined,
    DataStartTime:
      output.DataStartTime !== undefined && output.DataStartTime !== null
        ? new Date(Math.round(output.DataStartTime * 1000))
        : undefined,
    FailedReason: __expectString(output.FailedReason),
    InferenceSchedulerArn: __expectString(output.InferenceSchedulerArn),
    InferenceSchedulerName: __expectString(output.InferenceSchedulerName),
    ModelArn: __expectString(output.ModelArn),
    ModelName: __expectString(output.ModelName),
    ScheduledStartTime:
      output.ScheduledStartTime !== undefined && output.ScheduledStartTime !== null
        ? new Date(Math.round(output.ScheduledStartTime * 1000))
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0InferenceInputConfiguration = (
  output: any,
  context: __SerdeContext
): InferenceInputConfiguration => {
  return {
    InferenceInputNameConfiguration:
      output.InferenceInputNameConfiguration !== undefined && output.InferenceInputNameConfiguration !== null
        ? deserializeAws_json1_0InferenceInputNameConfiguration(output.InferenceInputNameConfiguration, context)
        : undefined,
    InputTimeZoneOffset: __expectString(output.InputTimeZoneOffset),
    S3InputConfiguration:
      output.S3InputConfiguration !== undefined && output.S3InputConfiguration !== null
        ? deserializeAws_json1_0InferenceS3InputConfiguration(output.S3InputConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0InferenceInputNameConfiguration = (
  output: any,
  context: __SerdeContext
): InferenceInputNameConfiguration => {
  return {
    ComponentTimestampDelimiter: __expectString(output.ComponentTimestampDelimiter),
    TimestampFormat: __expectString(output.TimestampFormat),
  } as any;
};

const deserializeAws_json1_0InferenceOutputConfiguration = (
  output: any,
  context: __SerdeContext
): InferenceOutputConfiguration => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    S3OutputConfiguration:
      output.S3OutputConfiguration !== undefined && output.S3OutputConfiguration !== null
        ? deserializeAws_json1_0InferenceS3OutputConfiguration(output.S3OutputConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0InferenceS3InputConfiguration = (
  output: any,
  context: __SerdeContext
): InferenceS3InputConfiguration => {
  return {
    Bucket: __expectString(output.Bucket),
    Prefix: __expectString(output.Prefix),
  } as any;
};

const deserializeAws_json1_0InferenceS3OutputConfiguration = (
  output: any,
  context: __SerdeContext
): InferenceS3OutputConfiguration => {
  return {
    Bucket: __expectString(output.Bucket),
    Prefix: __expectString(output.Prefix),
  } as any;
};

const deserializeAws_json1_0InferenceSchedulerSummaries = (
  output: any,
  context: __SerdeContext
): InferenceSchedulerSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0InferenceSchedulerSummary(entry, context);
    });
};

const deserializeAws_json1_0InferenceSchedulerSummary = (
  output: any,
  context: __SerdeContext
): InferenceSchedulerSummary => {
  return {
    DataDelayOffsetInMinutes: __expectLong(output.DataDelayOffsetInMinutes),
    DataUploadFrequency: __expectString(output.DataUploadFrequency),
    InferenceSchedulerArn: __expectString(output.InferenceSchedulerArn),
    InferenceSchedulerName: __expectString(output.InferenceSchedulerName),
    ModelArn: __expectString(output.ModelArn),
    ModelName: __expectString(output.ModelName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0IngestionInputConfiguration = (
  output: any,
  context: __SerdeContext
): IngestionInputConfiguration => {
  return {
    S3InputConfiguration:
      output.S3InputConfiguration !== undefined && output.S3InputConfiguration !== null
        ? deserializeAws_json1_0IngestionS3InputConfiguration(output.S3InputConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0IngestionS3InputConfiguration = (
  output: any,
  context: __SerdeContext
): IngestionS3InputConfiguration => {
  return {
    Bucket: __expectString(output.Bucket),
    Prefix: __expectString(output.Prefix),
  } as any;
};

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0LabelsInputConfiguration = (
  output: any,
  context: __SerdeContext
): LabelsInputConfiguration => {
  return {
    S3InputConfiguration:
      output.S3InputConfiguration !== undefined && output.S3InputConfiguration !== null
        ? deserializeAws_json1_0LabelsS3InputConfiguration(output.S3InputConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0LabelsS3InputConfiguration = (
  output: any,
  context: __SerdeContext
): LabelsS3InputConfiguration => {
  return {
    Bucket: __expectString(output.Bucket),
    Prefix: __expectString(output.Prefix),
  } as any;
};

const deserializeAws_json1_0ListDataIngestionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDataIngestionJobsResponse => {
  return {
    DataIngestionJobSummaries:
      output.DataIngestionJobSummaries !== undefined && output.DataIngestionJobSummaries !== null
        ? deserializeAws_json1_0DataIngestionJobSummaries(output.DataIngestionJobSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListDatasetsResponse = (output: any, context: __SerdeContext): ListDatasetsResponse => {
  return {
    DatasetSummaries:
      output.DatasetSummaries !== undefined && output.DatasetSummaries !== null
        ? deserializeAws_json1_0DatasetSummaries(output.DatasetSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListInferenceExecutionsResponse = (
  output: any,
  context: __SerdeContext
): ListInferenceExecutionsResponse => {
  return {
    InferenceExecutionSummaries:
      output.InferenceExecutionSummaries !== undefined && output.InferenceExecutionSummaries !== null
        ? deserializeAws_json1_0InferenceExecutionSummaries(output.InferenceExecutionSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListInferenceSchedulersResponse = (
  output: any,
  context: __SerdeContext
): ListInferenceSchedulersResponse => {
  return {
    InferenceSchedulerSummaries:
      output.InferenceSchedulerSummaries !== undefined && output.InferenceSchedulerSummaries !== null
        ? deserializeAws_json1_0InferenceSchedulerSummaries(output.InferenceSchedulerSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListModelsResponse = (output: any, context: __SerdeContext): ListModelsResponse => {
  return {
    ModelSummaries:
      output.ModelSummaries !== undefined && output.ModelSummaries !== null
        ? deserializeAws_json1_0ModelSummaries(output.ModelSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_0TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ModelSummaries = (output: any, context: __SerdeContext): ModelSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ModelSummary(entry, context);
    });
};

const deserializeAws_json1_0ModelSummary = (output: any, context: __SerdeContext): ModelSummary => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    ModelArn: __expectString(output.ModelArn),
    ModelName: __expectString(output.ModelName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0S3Object = (output: any, context: __SerdeContext): S3Object => {
  return {
    Bucket: __expectString(output.Bucket),
    Key: __expectString(output.Key),
  } as any;
};

const deserializeAws_json1_0ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0StartDataIngestionJobResponse = (
  output: any,
  context: __SerdeContext
): StartDataIngestionJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0StartInferenceSchedulerResponse = (
  output: any,
  context: __SerdeContext
): StartInferenceSchedulerResponse => {
  return {
    InferenceSchedulerArn: __expectString(output.InferenceSchedulerArn),
    InferenceSchedulerName: __expectString(output.InferenceSchedulerName),
    ModelArn: __expectString(output.ModelArn),
    ModelName: __expectString(output.ModelName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0StopInferenceSchedulerResponse = (
  output: any,
  context: __SerdeContext
): StopInferenceSchedulerResponse => {
  return {
    InferenceSchedulerArn: __expectString(output.InferenceSchedulerArn),
    InferenceSchedulerName: __expectString(output.InferenceSchedulerName),
    ModelArn: __expectString(output.ModelArn),
    ModelName: __expectString(output.ModelName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
};

const deserializeAws_json1_0TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
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
