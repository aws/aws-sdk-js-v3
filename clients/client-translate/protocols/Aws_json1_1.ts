import { CreateParallelDataCommandInput, CreateParallelDataCommandOutput } from "../commands/CreateParallelDataCommand";
import { DeleteParallelDataCommandInput, DeleteParallelDataCommandOutput } from "../commands/DeleteParallelDataCommand";
import { DeleteTerminologyCommandInput, DeleteTerminologyCommandOutput } from "../commands/DeleteTerminologyCommand";
import {
  DescribeTextTranslationJobCommandInput,
  DescribeTextTranslationJobCommandOutput,
} from "../commands/DescribeTextTranslationJobCommand";
import { GetParallelDataCommandInput, GetParallelDataCommandOutput } from "../commands/GetParallelDataCommand";
import { GetTerminologyCommandInput, GetTerminologyCommandOutput } from "../commands/GetTerminologyCommand";
import { ImportTerminologyCommandInput, ImportTerminologyCommandOutput } from "../commands/ImportTerminologyCommand";
import { ListParallelDataCommandInput, ListParallelDataCommandOutput } from "../commands/ListParallelDataCommand";
import { ListTerminologiesCommandInput, ListTerminologiesCommandOutput } from "../commands/ListTerminologiesCommand";
import {
  ListTextTranslationJobsCommandInput,
  ListTextTranslationJobsCommandOutput,
} from "../commands/ListTextTranslationJobsCommand";
import {
  StartTextTranslationJobCommandInput,
  StartTextTranslationJobCommandOutput,
} from "../commands/StartTextTranslationJobCommand";
import {
  StopTextTranslationJobCommandInput,
  StopTextTranslationJobCommandOutput,
} from "../commands/StopTextTranslationJobCommand";
import { TranslateTextCommandInput, TranslateTextCommandOutput } from "../commands/TranslateTextCommand";
import { UpdateParallelDataCommandInput, UpdateParallelDataCommandOutput } from "../commands/UpdateParallelDataCommand";
import {
  AppliedTerminology,
  ConcurrentModificationException,
  ConflictException,
  CreateParallelDataRequest,
  CreateParallelDataResponse,
  DeleteParallelDataRequest,
  DeleteParallelDataResponse,
  DeleteTerminologyRequest,
  DescribeTextTranslationJobRequest,
  DescribeTextTranslationJobResponse,
  DetectedLanguageLowConfidenceException,
  EncryptionKey,
  GetParallelDataRequest,
  GetParallelDataResponse,
  GetTerminologyRequest,
  GetTerminologyResponse,
  ImportTerminologyRequest,
  ImportTerminologyResponse,
  InputDataConfig,
  InternalServerException,
  InvalidFilterException,
  InvalidParameterValueException,
  InvalidRequestException,
  JobDetails,
  LimitExceededException,
  ListParallelDataRequest,
  ListParallelDataResponse,
  ListTerminologiesRequest,
  ListTerminologiesResponse,
  ListTextTranslationJobsRequest,
  ListTextTranslationJobsResponse,
  OutputDataConfig,
  ParallelDataConfig,
  ParallelDataDataLocation,
  ParallelDataProperties,
  ResourceNotFoundException,
  ServiceUnavailableException,
  StartTextTranslationJobRequest,
  StartTextTranslationJobResponse,
  StopTextTranslationJobRequest,
  StopTextTranslationJobResponse,
  Term,
  TerminologyData,
  TerminologyDataLocation,
  TerminologyProperties,
  TextSizeLimitExceededException,
  TextTranslationJobFilter,
  TextTranslationJobProperties,
  TooManyRequestsException,
  TranslateTextRequest,
  TranslateTextResponse,
  UnsupportedLanguagePairException,
  UpdateParallelDataRequest,
  UpdateParallelDataResponse,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { expectInt as __expectInt, expectString as __expectString } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_1CreateParallelDataCommand = async (
  input: CreateParallelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.CreateParallelData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateParallelDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteParallelDataCommand = async (
  input: DeleteParallelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.DeleteParallelData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteParallelDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTerminologyCommand = async (
  input: DeleteTerminologyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.DeleteTerminology",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTerminologyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTextTranslationJobCommand = async (
  input: DescribeTextTranslationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.DescribeTextTranslationJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTextTranslationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetParallelDataCommand = async (
  input: GetParallelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.GetParallelData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetParallelDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTerminologyCommand = async (
  input: GetTerminologyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.GetTerminology",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTerminologyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportTerminologyCommand = async (
  input: ImportTerminologyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.ImportTerminology",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportTerminologyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListParallelDataCommand = async (
  input: ListParallelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.ListParallelData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListParallelDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTerminologiesCommand = async (
  input: ListTerminologiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.ListTerminologies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTerminologiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTextTranslationJobsCommand = async (
  input: ListTextTranslationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.ListTextTranslationJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTextTranslationJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartTextTranslationJobCommand = async (
  input: StartTextTranslationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.StartTextTranslationJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartTextTranslationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopTextTranslationJobCommand = async (
  input: StopTextTranslationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.StopTextTranslationJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopTextTranslationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TranslateTextCommand = async (
  input: TranslateTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.TranslateText",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TranslateTextRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateParallelDataCommand = async (
  input: UpdateParallelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSShineFrontendService_20170701.UpdateParallelData",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateParallelDataRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateParallelDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateParallelDataResponse(data, context);
  const response: CreateParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateParallelDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateParallelDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.translate#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.translate#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.translate#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteParallelDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteParallelDataResponse(data, context);
  const response: DeleteParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteParallelDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteParallelDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.translate#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteTerminologyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTerminologyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTerminologyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTerminologyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTerminologyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeTextTranslationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTextTranslationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTextTranslationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTextTranslationJobResponse(data, context);
  const response: DescribeTextTranslationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTextTranslationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTextTranslationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetParallelDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetParallelDataResponse(data, context);
  const response: GetParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetParallelDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetParallelDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetTerminologyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTerminologyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTerminologyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTerminologyResponse(data, context);
  const response: GetTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTerminologyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTerminologyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ImportTerminologyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportTerminologyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportTerminologyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportTerminologyResponse(data, context);
  const response: ImportTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportTerminologyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportTerminologyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.translate#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListParallelDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListParallelDataResponse(data, context);
  const response: ListParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListParallelDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListParallelDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTerminologiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTerminologiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTerminologiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTerminologiesResponse(data, context);
  const response: ListTerminologiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTerminologiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTerminologiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTextTranslationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTextTranslationJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTextTranslationJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTextTranslationJobsResponse(data, context);
  const response: ListTextTranslationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTextTranslationJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTextTranslationJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidFilterException":
    case "com.amazonaws.translate#InvalidFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidFilterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.translate#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StartTextTranslationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTextTranslationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartTextTranslationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartTextTranslationJobResponse(data, context);
  const response: StartTextTranslationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartTextTranslationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTextTranslationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.translate#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLanguagePairException":
    case "com.amazonaws.translate#UnsupportedLanguagePairException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLanguagePairExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StopTextTranslationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTextTranslationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopTextTranslationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopTextTranslationJobResponse(data, context);
  const response: StopTextTranslationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopTextTranslationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTextTranslationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1TranslateTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TranslateTextCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TranslateTextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TranslateTextResponse(data, context);
  const response: TranslateTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TranslateTextCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TranslateTextCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DetectedLanguageLowConfidenceException":
    case "com.amazonaws.translate#DetectedLanguageLowConfidenceException":
      response = {
        ...(await deserializeAws_json1_1DetectedLanguageLowConfidenceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.translate#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.translate#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.translate#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedLanguagePairException":
    case "com.amazonaws.translate#UnsupportedLanguagePairException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLanguagePairExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateParallelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParallelDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateParallelDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateParallelDataResponse(data, context);
  const response: UpdateParallelDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateParallelDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateParallelDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.translate#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.translate#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.translate#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.translate#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.translate#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.translate#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.translate#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.translate#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1DetectedLanguageLowConfidenceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DetectedLanguageLowConfidenceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DetectedLanguageLowConfidenceException(body, context);
  const contents: DetectedLanguageLowConfidenceException = {
    name: "DetectedLanguageLowConfidenceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidFilterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFilterException(body, context);
  const contents: InvalidFilterException = {
    name: "InvalidFilterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterValueException(body, context);
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(body, context);
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TextSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TextSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TextSizeLimitExceededException(body, context);
  const contents: TextSizeLimitExceededException = {
    name: "TextSizeLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(body, context);
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedLanguagePairExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedLanguagePairException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedLanguagePairException(body, context);
  const contents: UnsupportedLanguagePairException = {
    name: "UnsupportedLanguagePairException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1CreateParallelDataRequest = (
  input: CreateParallelDataRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EncryptionKey !== undefined &&
      input.EncryptionKey !== null && {
        EncryptionKey: serializeAws_json1_1EncryptionKey(input.EncryptionKey, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ParallelDataConfig !== undefined &&
      input.ParallelDataConfig !== null && {
        ParallelDataConfig: serializeAws_json1_1ParallelDataConfig(input.ParallelDataConfig, context),
      }),
  };
};

const serializeAws_json1_1DeleteParallelDataRequest = (
  input: DeleteParallelDataRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteTerminologyRequest = (
  input: DeleteTerminologyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeTextTranslationJobRequest = (
  input: DescribeTextTranslationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1EncryptionKey = (input: EncryptionKey, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1GetParallelDataRequest = (input: GetParallelDataRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1GetTerminologyRequest = (input: GetTerminologyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.TerminologyDataFormat !== undefined &&
      input.TerminologyDataFormat !== null && { TerminologyDataFormat: input.TerminologyDataFormat }),
  };
};

const serializeAws_json1_1ImportTerminologyRequest = (
  input: ImportTerminologyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EncryptionKey !== undefined &&
      input.EncryptionKey !== null && {
        EncryptionKey: serializeAws_json1_1EncryptionKey(input.EncryptionKey, context),
      }),
    ...(input.MergeStrategy !== undefined && input.MergeStrategy !== null && { MergeStrategy: input.MergeStrategy }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.TerminologyData !== undefined &&
      input.TerminologyData !== null && {
        TerminologyData: serializeAws_json1_1TerminologyData(input.TerminologyData, context),
      }),
  };
};

const serializeAws_json1_1InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType }),
    ...(input.S3Uri !== undefined && input.S3Uri !== null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1ListParallelDataRequest = (input: ListParallelDataRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTerminologiesRequest = (
  input: ListTerminologiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTextTranslationJobsRequest = (
  input: ListTextTranslationJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_1TextTranslationJobFilter(input.Filter, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1OutputDataConfig = (input: OutputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Uri !== undefined && input.S3Uri !== null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1ParallelDataConfig = (input: ParallelDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
    ...(input.S3Uri !== undefined && input.S3Uri !== null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_json1_1ResourceNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1StartTextTranslationJobRequest = (
  input: StartTextTranslationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn !== undefined &&
      input.DataAccessRoleArn !== null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.InputDataConfig !== undefined &&
      input.InputDataConfig !== null && {
        InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
      }),
    ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
    ...(input.OutputDataConfig !== undefined &&
      input.OutputDataConfig !== null && {
        OutputDataConfig: serializeAws_json1_1OutputDataConfig(input.OutputDataConfig, context),
      }),
    ...(input.ParallelDataNames !== undefined &&
      input.ParallelDataNames !== null && {
        ParallelDataNames: serializeAws_json1_1ResourceNameList(input.ParallelDataNames, context),
      }),
    ...(input.SourceLanguageCode !== undefined &&
      input.SourceLanguageCode !== null && { SourceLanguageCode: input.SourceLanguageCode }),
    ...(input.TargetLanguageCodes !== undefined &&
      input.TargetLanguageCodes !== null && {
        TargetLanguageCodes: serializeAws_json1_1TargetLanguageCodeStringList(input.TargetLanguageCodes, context),
      }),
    ...(input.TerminologyNames !== undefined &&
      input.TerminologyNames !== null && {
        TerminologyNames: serializeAws_json1_1ResourceNameList(input.TerminologyNames, context),
      }),
  };
};

const serializeAws_json1_1StopTextTranslationJobRequest = (
  input: StopTextTranslationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_1TargetLanguageCodeStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TerminologyData = (input: TerminologyData, context: __SerdeContext): any => {
  return {
    ...(input.File !== undefined && input.File !== null && { File: context.base64Encoder(input.File) }),
    ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
  };
};

const serializeAws_json1_1TextTranslationJobFilter = (
  input: TextTranslationJobFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
    ...(input.JobStatus !== undefined && input.JobStatus !== null && { JobStatus: input.JobStatus }),
    ...(input.SubmittedAfterTime !== undefined &&
      input.SubmittedAfterTime !== null && {
        SubmittedAfterTime: Math.round(input.SubmittedAfterTime.getTime() / 1000),
      }),
    ...(input.SubmittedBeforeTime !== undefined &&
      input.SubmittedBeforeTime !== null && {
        SubmittedBeforeTime: Math.round(input.SubmittedBeforeTime.getTime() / 1000),
      }),
  };
};

const serializeAws_json1_1TranslateTextRequest = (input: TranslateTextRequest, context: __SerdeContext): any => {
  return {
    ...(input.SourceLanguageCode !== undefined &&
      input.SourceLanguageCode !== null && { SourceLanguageCode: input.SourceLanguageCode }),
    ...(input.TargetLanguageCode !== undefined &&
      input.TargetLanguageCode !== null && { TargetLanguageCode: input.TargetLanguageCode }),
    ...(input.TerminologyNames !== undefined &&
      input.TerminologyNames !== null && {
        TerminologyNames: serializeAws_json1_1ResourceNameList(input.TerminologyNames, context),
      }),
    ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
  };
};

const serializeAws_json1_1UpdateParallelDataRequest = (
  input: UpdateParallelDataRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ParallelDataConfig !== undefined &&
      input.ParallelDataConfig !== null && {
        ParallelDataConfig: serializeAws_json1_1ParallelDataConfig(input.ParallelDataConfig, context),
      }),
  };
};

const deserializeAws_json1_1AppliedTerminology = (output: any, context: __SerdeContext): AppliedTerminology => {
  return {
    Name: __expectString(output.Name),
    Terms:
      output.Terms !== undefined && output.Terms !== null
        ? deserializeAws_json1_1TermList(output.Terms, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AppliedTerminologyList = (output: any, context: __SerdeContext): AppliedTerminology[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AppliedTerminology(entry, context);
    });
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CreateParallelDataResponse = (
  output: any,
  context: __SerdeContext
): CreateParallelDataResponse => {
  return {
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DeleteParallelDataResponse = (
  output: any,
  context: __SerdeContext
): DeleteParallelDataResponse => {
  return {
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribeTextTranslationJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeTextTranslationJobResponse => {
  return {
    TextTranslationJobProperties:
      output.TextTranslationJobProperties !== undefined && output.TextTranslationJobProperties !== null
        ? deserializeAws_json1_1TextTranslationJobProperties(output.TextTranslationJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DetectedLanguageLowConfidenceException = (
  output: any,
  context: __SerdeContext
): DetectedLanguageLowConfidenceException => {
  return {
    DetectedLanguageCode: __expectString(output.DetectedLanguageCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EncryptionKey = (output: any, context: __SerdeContext): EncryptionKey => {
  return {
    Id: __expectString(output.Id),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1GetParallelDataResponse = (
  output: any,
  context: __SerdeContext
): GetParallelDataResponse => {
  return {
    AuxiliaryDataLocation:
      output.AuxiliaryDataLocation !== undefined && output.AuxiliaryDataLocation !== null
        ? deserializeAws_json1_1ParallelDataDataLocation(output.AuxiliaryDataLocation, context)
        : undefined,
    DataLocation:
      output.DataLocation !== undefined && output.DataLocation !== null
        ? deserializeAws_json1_1ParallelDataDataLocation(output.DataLocation, context)
        : undefined,
    LatestUpdateAttemptAuxiliaryDataLocation:
      output.LatestUpdateAttemptAuxiliaryDataLocation !== undefined &&
      output.LatestUpdateAttemptAuxiliaryDataLocation !== null
        ? deserializeAws_json1_1ParallelDataDataLocation(output.LatestUpdateAttemptAuxiliaryDataLocation, context)
        : undefined,
    ParallelDataProperties:
      output.ParallelDataProperties !== undefined && output.ParallelDataProperties !== null
        ? deserializeAws_json1_1ParallelDataProperties(output.ParallelDataProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTerminologyResponse = (output: any, context: __SerdeContext): GetTerminologyResponse => {
  return {
    TerminologyDataLocation:
      output.TerminologyDataLocation !== undefined && output.TerminologyDataLocation !== null
        ? deserializeAws_json1_1TerminologyDataLocation(output.TerminologyDataLocation, context)
        : undefined,
    TerminologyProperties:
      output.TerminologyProperties !== undefined && output.TerminologyProperties !== null
        ? deserializeAws_json1_1TerminologyProperties(output.TerminologyProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ImportTerminologyResponse = (
  output: any,
  context: __SerdeContext
): ImportTerminologyResponse => {
  return {
    TerminologyProperties:
      output.TerminologyProperties !== undefined && output.TerminologyProperties !== null
        ? deserializeAws_json1_1TerminologyProperties(output.TerminologyProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  return {
    ContentType: __expectString(output.ContentType),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidFilterException = (output: any, context: __SerdeContext): InvalidFilterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1JobDetails = (output: any, context: __SerdeContext): JobDetails => {
  return {
    DocumentsWithErrorsCount: __expectInt(output.DocumentsWithErrorsCount),
    InputDocumentsCount: __expectInt(output.InputDocumentsCount),
    TranslatedDocumentsCount: __expectInt(output.TranslatedDocumentsCount),
  } as any;
};

const deserializeAws_json1_1LanguageCodeStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListParallelDataResponse = (
  output: any,
  context: __SerdeContext
): ListParallelDataResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ParallelDataPropertiesList:
      output.ParallelDataPropertiesList !== undefined && output.ParallelDataPropertiesList !== null
        ? deserializeAws_json1_1ParallelDataPropertiesList(output.ParallelDataPropertiesList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTerminologiesResponse = (
  output: any,
  context: __SerdeContext
): ListTerminologiesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TerminologyPropertiesList:
      output.TerminologyPropertiesList !== undefined && output.TerminologyPropertiesList !== null
        ? deserializeAws_json1_1TerminologyPropertiesList(output.TerminologyPropertiesList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTextTranslationJobsResponse = (
  output: any,
  context: __SerdeContext
): ListTextTranslationJobsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    TextTranslationJobPropertiesList:
      output.TextTranslationJobPropertiesList !== undefined && output.TextTranslationJobPropertiesList !== null
        ? deserializeAws_json1_1TextTranslationJobPropertiesList(output.TextTranslationJobPropertiesList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OutputDataConfig = (output: any, context: __SerdeContext): OutputDataConfig => {
  return {
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_json1_1ParallelDataConfig = (output: any, context: __SerdeContext): ParallelDataConfig => {
  return {
    Format: __expectString(output.Format),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_json1_1ParallelDataDataLocation = (
  output: any,
  context: __SerdeContext
): ParallelDataDataLocation => {
  return {
    Location: __expectString(output.Location),
    RepositoryType: __expectString(output.RepositoryType),
  } as any;
};

const deserializeAws_json1_1ParallelDataProperties = (output: any, context: __SerdeContext): ParallelDataProperties => {
  return {
    Arn: __expectString(output.Arn),
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Description: __expectString(output.Description),
    EncryptionKey:
      output.EncryptionKey !== undefined && output.EncryptionKey !== null
        ? deserializeAws_json1_1EncryptionKey(output.EncryptionKey, context)
        : undefined,
    FailedRecordCount: __expectInt(output.FailedRecordCount),
    ImportedDataSize: __expectInt(output.ImportedDataSize),
    ImportedRecordCount: __expectInt(output.ImportedRecordCount),
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? new Date(Math.round(output.LastUpdatedAt * 1000))
        : undefined,
    LatestUpdateAttemptAt:
      output.LatestUpdateAttemptAt !== undefined && output.LatestUpdateAttemptAt !== null
        ? new Date(Math.round(output.LatestUpdateAttemptAt * 1000))
        : undefined,
    LatestUpdateAttemptStatus: __expectString(output.LatestUpdateAttemptStatus),
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
    ParallelDataConfig:
      output.ParallelDataConfig !== undefined && output.ParallelDataConfig !== null
        ? deserializeAws_json1_1ParallelDataConfig(output.ParallelDataConfig, context)
        : undefined,
    SkippedRecordCount: __expectInt(output.SkippedRecordCount),
    SourceLanguageCode: __expectString(output.SourceLanguageCode),
    Status: __expectString(output.Status),
    TargetLanguageCodes:
      output.TargetLanguageCodes !== undefined && output.TargetLanguageCodes !== null
        ? deserializeAws_json1_1LanguageCodeStringList(output.TargetLanguageCodes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ParallelDataPropertiesList = (
  output: any,
  context: __SerdeContext
): ParallelDataProperties[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ParallelDataProperties(entry, context);
    });
};

const deserializeAws_json1_1ResourceNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1StartTextTranslationJobResponse = (
  output: any,
  context: __SerdeContext
): StartTextTranslationJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1StopTextTranslationJobResponse = (
  output: any,
  context: __SerdeContext
): StopTextTranslationJobResponse => {
  return {
    JobId: __expectString(output.JobId),
    JobStatus: __expectString(output.JobStatus),
  } as any;
};

const deserializeAws_json1_1TargetLanguageCodeStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Term = (output: any, context: __SerdeContext): Term => {
  return {
    SourceText: __expectString(output.SourceText),
    TargetText: __expectString(output.TargetText),
  } as any;
};

const deserializeAws_json1_1TerminologyDataLocation = (
  output: any,
  context: __SerdeContext
): TerminologyDataLocation => {
  return {
    Location: __expectString(output.Location),
    RepositoryType: __expectString(output.RepositoryType),
  } as any;
};

const deserializeAws_json1_1TerminologyProperties = (output: any, context: __SerdeContext): TerminologyProperties => {
  return {
    Arn: __expectString(output.Arn),
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Description: __expectString(output.Description),
    EncryptionKey:
      output.EncryptionKey !== undefined && output.EncryptionKey !== null
        ? deserializeAws_json1_1EncryptionKey(output.EncryptionKey, context)
        : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
        ? new Date(Math.round(output.LastUpdatedAt * 1000))
        : undefined,
    Name: __expectString(output.Name),
    SizeBytes: __expectInt(output.SizeBytes),
    SourceLanguageCode: __expectString(output.SourceLanguageCode),
    TargetLanguageCodes:
      output.TargetLanguageCodes !== undefined && output.TargetLanguageCodes !== null
        ? deserializeAws_json1_1LanguageCodeStringList(output.TargetLanguageCodes, context)
        : undefined,
    TermCount: __expectInt(output.TermCount),
  } as any;
};

const deserializeAws_json1_1TerminologyPropertiesList = (
  output: any,
  context: __SerdeContext
): TerminologyProperties[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TerminologyProperties(entry, context);
    });
};

const deserializeAws_json1_1TermList = (output: any, context: __SerdeContext): Term[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Term(entry, context);
    });
};

const deserializeAws_json1_1TextSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): TextSizeLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TextTranslationJobProperties = (
  output: any,
  context: __SerdeContext
): TextTranslationJobProperties => {
  return {
    DataAccessRoleArn: __expectString(output.DataAccessRoleArn),
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    InputDataConfig:
      output.InputDataConfig !== undefined && output.InputDataConfig !== null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobDetails:
      output.JobDetails !== undefined && output.JobDetails !== null
        ? deserializeAws_json1_1JobDetails(output.JobDetails, context)
        : undefined,
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    JobStatus: __expectString(output.JobStatus),
    Message: __expectString(output.Message),
    OutputDataConfig:
      output.OutputDataConfig !== undefined && output.OutputDataConfig !== null
        ? deserializeAws_json1_1OutputDataConfig(output.OutputDataConfig, context)
        : undefined,
    ParallelDataNames:
      output.ParallelDataNames !== undefined && output.ParallelDataNames !== null
        ? deserializeAws_json1_1ResourceNameList(output.ParallelDataNames, context)
        : undefined,
    SourceLanguageCode: __expectString(output.SourceLanguageCode),
    SubmittedTime:
      output.SubmittedTime !== undefined && output.SubmittedTime !== null
        ? new Date(Math.round(output.SubmittedTime * 1000))
        : undefined,
    TargetLanguageCodes:
      output.TargetLanguageCodes !== undefined && output.TargetLanguageCodes !== null
        ? deserializeAws_json1_1TargetLanguageCodeStringList(output.TargetLanguageCodes, context)
        : undefined,
    TerminologyNames:
      output.TerminologyNames !== undefined && output.TerminologyNames !== null
        ? deserializeAws_json1_1ResourceNameList(output.TerminologyNames, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TextTranslationJobPropertiesList = (
  output: any,
  context: __SerdeContext
): TextTranslationJobProperties[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TextTranslationJobProperties(entry, context);
    });
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TranslateTextResponse = (output: any, context: __SerdeContext): TranslateTextResponse => {
  return {
    AppliedTerminologies:
      output.AppliedTerminologies !== undefined && output.AppliedTerminologies !== null
        ? deserializeAws_json1_1AppliedTerminologyList(output.AppliedTerminologies, context)
        : undefined,
    SourceLanguageCode: __expectString(output.SourceLanguageCode),
    TargetLanguageCode: __expectString(output.TargetLanguageCode),
    TranslatedText: __expectString(output.TranslatedText),
  } as any;
};

const deserializeAws_json1_1UnsupportedLanguagePairException = (
  output: any,
  context: __SerdeContext
): UnsupportedLanguagePairException => {
  return {
    Message: __expectString(output.Message),
    SourceLanguageCode: __expectString(output.SourceLanguageCode),
    TargetLanguageCode: __expectString(output.TargetLanguageCode),
  } as any;
};

const deserializeAws_json1_1UpdateParallelDataResponse = (
  output: any,
  context: __SerdeContext
): UpdateParallelDataResponse => {
  return {
    LatestUpdateAttemptAt:
      output.LatestUpdateAttemptAt !== undefined && output.LatestUpdateAttemptAt !== null
        ? new Date(Math.round(output.LatestUpdateAttemptAt * 1000))
        : undefined,
    LatestUpdateAttemptStatus: __expectString(output.LatestUpdateAttemptStatus),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
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
