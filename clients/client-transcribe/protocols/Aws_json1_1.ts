import {
  CreateMedicalVocabularyCommandInput,
  CreateMedicalVocabularyCommandOutput,
} from "../commands/CreateMedicalVocabularyCommand";
import { CreateVocabularyCommandInput, CreateVocabularyCommandOutput } from "../commands/CreateVocabularyCommand";
import {
  CreateVocabularyFilterCommandInput,
  CreateVocabularyFilterCommandOutput,
} from "../commands/CreateVocabularyFilterCommand";
import {
  DeleteMedicalTranscriptionJobCommandInput,
  DeleteMedicalTranscriptionJobCommandOutput,
} from "../commands/DeleteMedicalTranscriptionJobCommand";
import {
  DeleteMedicalVocabularyCommandInput,
  DeleteMedicalVocabularyCommandOutput,
} from "../commands/DeleteMedicalVocabularyCommand";
import {
  DeleteTranscriptionJobCommandInput,
  DeleteTranscriptionJobCommandOutput,
} from "../commands/DeleteTranscriptionJobCommand";
import { DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput } from "../commands/DeleteVocabularyCommand";
import {
  DeleteVocabularyFilterCommandInput,
  DeleteVocabularyFilterCommandOutput,
} from "../commands/DeleteVocabularyFilterCommand";
import {
  GetMedicalTranscriptionJobCommandInput,
  GetMedicalTranscriptionJobCommandOutput,
} from "../commands/GetMedicalTranscriptionJobCommand";
import {
  GetMedicalVocabularyCommandInput,
  GetMedicalVocabularyCommandOutput,
} from "../commands/GetMedicalVocabularyCommand";
import {
  GetTranscriptionJobCommandInput,
  GetTranscriptionJobCommandOutput,
} from "../commands/GetTranscriptionJobCommand";
import { GetVocabularyCommandInput, GetVocabularyCommandOutput } from "../commands/GetVocabularyCommand";
import {
  GetVocabularyFilterCommandInput,
  GetVocabularyFilterCommandOutput,
} from "../commands/GetVocabularyFilterCommand";
import {
  ListMedicalTranscriptionJobsCommandInput,
  ListMedicalTranscriptionJobsCommandOutput,
} from "../commands/ListMedicalTranscriptionJobsCommand";
import {
  ListMedicalVocabulariesCommandInput,
  ListMedicalVocabulariesCommandOutput,
} from "../commands/ListMedicalVocabulariesCommand";
import {
  ListTranscriptionJobsCommandInput,
  ListTranscriptionJobsCommandOutput,
} from "../commands/ListTranscriptionJobsCommand";
import { ListVocabulariesCommandInput, ListVocabulariesCommandOutput } from "../commands/ListVocabulariesCommand";
import {
  ListVocabularyFiltersCommandInput,
  ListVocabularyFiltersCommandOutput,
} from "../commands/ListVocabularyFiltersCommand";
import {
  StartMedicalTranscriptionJobCommandInput,
  StartMedicalTranscriptionJobCommandOutput,
} from "../commands/StartMedicalTranscriptionJobCommand";
import {
  StartTranscriptionJobCommandInput,
  StartTranscriptionJobCommandOutput,
} from "../commands/StartTranscriptionJobCommand";
import {
  UpdateMedicalVocabularyCommandInput,
  UpdateMedicalVocabularyCommandOutput,
} from "../commands/UpdateMedicalVocabularyCommand";
import { UpdateVocabularyCommandInput, UpdateVocabularyCommandOutput } from "../commands/UpdateVocabularyCommand";
import {
  UpdateVocabularyFilterCommandInput,
  UpdateVocabularyFilterCommandOutput,
} from "../commands/UpdateVocabularyFilterCommand";
import {
  BadRequestException,
  ConflictException,
  ContentRedaction,
  CreateMedicalVocabularyRequest,
  CreateMedicalVocabularyResponse,
  CreateVocabularyFilterRequest,
  CreateVocabularyFilterResponse,
  CreateVocabularyRequest,
  CreateVocabularyResponse,
  DeleteMedicalTranscriptionJobRequest,
  DeleteMedicalVocabularyRequest,
  DeleteTranscriptionJobRequest,
  DeleteVocabularyFilterRequest,
  DeleteVocabularyRequest,
  GetMedicalTranscriptionJobRequest,
  GetMedicalTranscriptionJobResponse,
  GetMedicalVocabularyRequest,
  GetMedicalVocabularyResponse,
  GetTranscriptionJobRequest,
  GetTranscriptionJobResponse,
  GetVocabularyFilterRequest,
  GetVocabularyFilterResponse,
  GetVocabularyRequest,
  GetVocabularyResponse,
  InternalFailureException,
  JobExecutionSettings,
  LimitExceededException,
  ListMedicalTranscriptionJobsRequest,
  ListMedicalTranscriptionJobsResponse,
  ListMedicalVocabulariesRequest,
  ListMedicalVocabulariesResponse,
  ListTranscriptionJobsRequest,
  ListTranscriptionJobsResponse,
  ListVocabulariesRequest,
  ListVocabulariesResponse,
  ListVocabularyFiltersRequest,
  ListVocabularyFiltersResponse,
  Media,
  MedicalTranscript,
  MedicalTranscriptionJob,
  MedicalTranscriptionJobSummary,
  MedicalTranscriptionSetting,
  NotFoundException,
  Settings,
  StartMedicalTranscriptionJobRequest,
  StartMedicalTranscriptionJobResponse,
  StartTranscriptionJobRequest,
  StartTranscriptionJobResponse,
  Transcript,
  TranscriptionJob,
  TranscriptionJobSummary,
  UpdateMedicalVocabularyRequest,
  UpdateMedicalVocabularyResponse,
  UpdateVocabularyFilterRequest,
  UpdateVocabularyFilterResponse,
  UpdateVocabularyRequest,
  UpdateVocabularyResponse,
  VocabularyFilterInfo,
  VocabularyInfo,
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1CreateMedicalVocabularyCommand = async (
  input: CreateMedicalVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.CreateMedicalVocabulary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateMedicalVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateVocabularyCommand = async (
  input: CreateVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.CreateVocabulary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateVocabularyFilterCommand = async (
  input: CreateVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.CreateVocabularyFilter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateVocabularyFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMedicalTranscriptionJobCommand = async (
  input: DeleteMedicalTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.DeleteMedicalTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMedicalTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMedicalVocabularyCommand = async (
  input: DeleteMedicalVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.DeleteMedicalVocabulary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMedicalVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTranscriptionJobCommand = async (
  input: DeleteTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.DeleteTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteVocabularyCommand = async (
  input: DeleteVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.DeleteVocabulary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteVocabularyFilterCommand = async (
  input: DeleteVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.DeleteVocabularyFilter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteVocabularyFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMedicalTranscriptionJobCommand = async (
  input: GetMedicalTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.GetMedicalTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMedicalTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMedicalVocabularyCommand = async (
  input: GetMedicalVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.GetMedicalVocabulary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMedicalVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTranscriptionJobCommand = async (
  input: GetTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.GetTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetVocabularyCommand = async (
  input: GetVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.GetVocabulary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetVocabularyFilterCommand = async (
  input: GetVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.GetVocabularyFilter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetVocabularyFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMedicalTranscriptionJobsCommand = async (
  input: ListMedicalTranscriptionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.ListMedicalTranscriptionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMedicalTranscriptionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMedicalVocabulariesCommand = async (
  input: ListMedicalVocabulariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.ListMedicalVocabularies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMedicalVocabulariesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTranscriptionJobsCommand = async (
  input: ListTranscriptionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.ListTranscriptionJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTranscriptionJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListVocabulariesCommand = async (
  input: ListVocabulariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.ListVocabularies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListVocabulariesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListVocabularyFiltersCommand = async (
  input: ListVocabularyFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.ListVocabularyFilters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListVocabularyFiltersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartMedicalTranscriptionJobCommand = async (
  input: StartMedicalTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.StartMedicalTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartMedicalTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartTranscriptionJobCommand = async (
  input: StartTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.StartTranscriptionJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartTranscriptionJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMedicalVocabularyCommand = async (
  input: UpdateMedicalVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.UpdateMedicalVocabulary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateMedicalVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateVocabularyCommand = async (
  input: UpdateVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.UpdateVocabulary",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateVocabularyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateVocabularyFilterCommand = async (
  input: UpdateVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Transcribe.UpdateVocabularyFilter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateVocabularyFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateMedicalVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMedicalVocabularyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateMedicalVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateMedicalVocabularyResponse(data, context);
  const response: CreateMedicalVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateMedicalVocabularyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateMedicalVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMedicalVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVocabularyResponse(data, context);
  const response: CreateVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateVocabularyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateVocabularyFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyFilterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateVocabularyFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVocabularyFilterResponse(data, context);
  const response: CreateVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateVocabularyFilterResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateVocabularyFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteMedicalTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMedicalTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteMedicalTranscriptionJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMedicalTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMedicalTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMedicalTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteMedicalVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMedicalVocabularyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteMedicalVocabularyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMedicalVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMedicalVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMedicalVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTranscriptionJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteVocabularyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteVocabularyFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyFilterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteVocabularyFilterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteVocabularyFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetMedicalTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMedicalTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetMedicalTranscriptionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMedicalTranscriptionJobResponse(data, context);
  const response: GetMedicalTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMedicalTranscriptionJobResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMedicalTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMedicalTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetMedicalVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMedicalVocabularyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetMedicalVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMedicalVocabularyResponse(data, context);
  const response: GetMedicalVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMedicalVocabularyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMedicalVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMedicalVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTranscriptionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTranscriptionJobResponse(data, context);
  const response: GetTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTranscriptionJobResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetVocabularyResponse(data, context);
  const response: GetVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetVocabularyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetVocabularyFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyFilterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetVocabularyFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetVocabularyFilterResponse(data, context);
  const response: GetVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetVocabularyFilterResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetVocabularyFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListMedicalTranscriptionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMedicalTranscriptionJobsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListMedicalTranscriptionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMedicalTranscriptionJobsResponse(data, context);
  const response: ListMedicalTranscriptionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMedicalTranscriptionJobsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMedicalTranscriptionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMedicalTranscriptionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListMedicalVocabulariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMedicalVocabulariesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListMedicalVocabulariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMedicalVocabulariesResponse(data, context);
  const response: ListMedicalVocabulariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMedicalVocabulariesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMedicalVocabulariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMedicalVocabulariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTranscriptionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTranscriptionJobsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTranscriptionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTranscriptionJobsResponse(data, context);
  const response: ListTranscriptionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTranscriptionJobsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTranscriptionJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTranscriptionJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListVocabulariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabulariesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListVocabulariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListVocabulariesResponse(data, context);
  const response: ListVocabulariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVocabulariesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListVocabulariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabulariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListVocabularyFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabularyFiltersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListVocabularyFiltersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListVocabularyFiltersResponse(data, context);
  const response: ListVocabularyFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVocabularyFiltersResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListVocabularyFiltersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabularyFiltersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StartMedicalTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMedicalTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartMedicalTranscriptionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartMedicalTranscriptionJobResponse(data, context);
  const response: StartMedicalTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartMedicalTranscriptionJobResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartMedicalTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMedicalTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StartTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartTranscriptionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartTranscriptionJobResponse(data, context);
  const response: StartTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartTranscriptionJobResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartTranscriptionJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTranscriptionJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateMedicalVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMedicalVocabularyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateMedicalVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMedicalVocabularyResponse(data, context);
  const response: UpdateMedicalVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateMedicalVocabularyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMedicalVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMedicalVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateVocabularyResponse(data, context);
  const response: UpdateVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateVocabularyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateVocabularyFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyFilterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateVocabularyFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateVocabularyFilterResponse(data, context);
  const response: UpdateVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateVocabularyFilterResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateVocabularyFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BadRequestException(body, context);
  const contents: BadRequestException = {
    name: "BadRequestException",
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

const deserializeAws_json1_1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalFailureException(body, context);
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
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

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(body, context);
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1ContentRedaction = (input: ContentRedaction, context: __SerdeContext): any => {
  return {
    ...(input.RedactionOutput !== undefined && { RedactionOutput: input.RedactionOutput }),
    ...(input.RedactionType !== undefined && { RedactionType: input.RedactionType }),
  };
};

const serializeAws_json1_1CreateMedicalVocabularyRequest = (
  input: CreateMedicalVocabularyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.VocabularyFileUri !== undefined && { VocabularyFileUri: input.VocabularyFileUri }),
    ...(input.VocabularyName !== undefined && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1CreateVocabularyFilterRequest = (
  input: CreateVocabularyFilterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.VocabularyFilterFileUri !== undefined && { VocabularyFilterFileUri: input.VocabularyFilterFileUri }),
    ...(input.VocabularyFilterName !== undefined && { VocabularyFilterName: input.VocabularyFilterName }),
    ...(input.Words !== undefined && { Words: serializeAws_json1_1Words(input.Words, context) }),
  };
};

const serializeAws_json1_1CreateVocabularyRequest = (input: CreateVocabularyRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.Phrases !== undefined && { Phrases: serializeAws_json1_1Phrases(input.Phrases, context) }),
    ...(input.VocabularyFileUri !== undefined && { VocabularyFileUri: input.VocabularyFileUri }),
    ...(input.VocabularyName !== undefined && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1DeleteMedicalTranscriptionJobRequest = (
  input: DeleteMedicalTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MedicalTranscriptionJobName !== undefined && {
      MedicalTranscriptionJobName: input.MedicalTranscriptionJobName,
    }),
  };
};

const serializeAws_json1_1DeleteMedicalVocabularyRequest = (
  input: DeleteMedicalVocabularyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.VocabularyName !== undefined && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1DeleteTranscriptionJobRequest = (
  input: DeleteTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TranscriptionJobName !== undefined && { TranscriptionJobName: input.TranscriptionJobName }),
  };
};

const serializeAws_json1_1DeleteVocabularyFilterRequest = (
  input: DeleteVocabularyFilterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.VocabularyFilterName !== undefined && { VocabularyFilterName: input.VocabularyFilterName }),
  };
};

const serializeAws_json1_1DeleteVocabularyRequest = (input: DeleteVocabularyRequest, context: __SerdeContext): any => {
  return {
    ...(input.VocabularyName !== undefined && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1GetMedicalTranscriptionJobRequest = (
  input: GetMedicalTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MedicalTranscriptionJobName !== undefined && {
      MedicalTranscriptionJobName: input.MedicalTranscriptionJobName,
    }),
  };
};

const serializeAws_json1_1GetMedicalVocabularyRequest = (
  input: GetMedicalVocabularyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.VocabularyName !== undefined && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1GetTranscriptionJobRequest = (
  input: GetTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TranscriptionJobName !== undefined && { TranscriptionJobName: input.TranscriptionJobName }),
  };
};

const serializeAws_json1_1GetVocabularyFilterRequest = (
  input: GetVocabularyFilterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.VocabularyFilterName !== undefined && { VocabularyFilterName: input.VocabularyFilterName }),
  };
};

const serializeAws_json1_1GetVocabularyRequest = (input: GetVocabularyRequest, context: __SerdeContext): any => {
  return {
    ...(input.VocabularyName !== undefined && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1JobExecutionSettings = (input: JobExecutionSettings, context: __SerdeContext): any => {
  return {
    ...(input.AllowDeferredExecution !== undefined && { AllowDeferredExecution: input.AllowDeferredExecution }),
    ...(input.DataAccessRoleArn !== undefined && { DataAccessRoleArn: input.DataAccessRoleArn }),
  };
};

const serializeAws_json1_1ListMedicalTranscriptionJobsRequest = (
  input: ListMedicalTranscriptionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobNameContains !== undefined && { JobNameContains: input.JobNameContains }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Status !== undefined && { Status: input.Status }),
  };
};

const serializeAws_json1_1ListMedicalVocabulariesRequest = (
  input: ListMedicalVocabulariesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NameContains !== undefined && { NameContains: input.NameContains }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.StateEquals !== undefined && { StateEquals: input.StateEquals }),
  };
};

const serializeAws_json1_1ListTranscriptionJobsRequest = (
  input: ListTranscriptionJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobNameContains !== undefined && { JobNameContains: input.JobNameContains }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Status !== undefined && { Status: input.Status }),
  };
};

const serializeAws_json1_1ListVocabulariesRequest = (input: ListVocabulariesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NameContains !== undefined && { NameContains: input.NameContains }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.StateEquals !== undefined && { StateEquals: input.StateEquals }),
  };
};

const serializeAws_json1_1ListVocabularyFiltersRequest = (
  input: ListVocabularyFiltersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NameContains !== undefined && { NameContains: input.NameContains }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1Media = (input: Media, context: __SerdeContext): any => {
  return {
    ...(input.MediaFileUri !== undefined && { MediaFileUri: input.MediaFileUri }),
  };
};

const serializeAws_json1_1MedicalTranscriptionSetting = (
  input: MedicalTranscriptionSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChannelIdentification !== undefined && { ChannelIdentification: input.ChannelIdentification }),
    ...(input.MaxAlternatives !== undefined && { MaxAlternatives: input.MaxAlternatives }),
    ...(input.MaxSpeakerLabels !== undefined && { MaxSpeakerLabels: input.MaxSpeakerLabels }),
    ...(input.ShowAlternatives !== undefined && { ShowAlternatives: input.ShowAlternatives }),
    ...(input.ShowSpeakerLabels !== undefined && { ShowSpeakerLabels: input.ShowSpeakerLabels }),
    ...(input.VocabularyName !== undefined && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1Phrases = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1Settings = (input: Settings, context: __SerdeContext): any => {
  return {
    ...(input.ChannelIdentification !== undefined && { ChannelIdentification: input.ChannelIdentification }),
    ...(input.MaxAlternatives !== undefined && { MaxAlternatives: input.MaxAlternatives }),
    ...(input.MaxSpeakerLabels !== undefined && { MaxSpeakerLabels: input.MaxSpeakerLabels }),
    ...(input.ShowAlternatives !== undefined && { ShowAlternatives: input.ShowAlternatives }),
    ...(input.ShowSpeakerLabels !== undefined && { ShowSpeakerLabels: input.ShowSpeakerLabels }),
    ...(input.VocabularyFilterMethod !== undefined && { VocabularyFilterMethod: input.VocabularyFilterMethod }),
    ...(input.VocabularyFilterName !== undefined && { VocabularyFilterName: input.VocabularyFilterName }),
    ...(input.VocabularyName !== undefined && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1StartMedicalTranscriptionJobRequest = (
  input: StartMedicalTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.Media !== undefined && { Media: serializeAws_json1_1Media(input.Media, context) }),
    ...(input.MediaFormat !== undefined && { MediaFormat: input.MediaFormat }),
    ...(input.MediaSampleRateHertz !== undefined && { MediaSampleRateHertz: input.MediaSampleRateHertz }),
    ...(input.MedicalTranscriptionJobName !== undefined && {
      MedicalTranscriptionJobName: input.MedicalTranscriptionJobName,
    }),
    ...(input.OutputBucketName !== undefined && { OutputBucketName: input.OutputBucketName }),
    ...(input.OutputEncryptionKMSKeyId !== undefined && { OutputEncryptionKMSKeyId: input.OutputEncryptionKMSKeyId }),
    ...(input.Settings !== undefined && {
      Settings: serializeAws_json1_1MedicalTranscriptionSetting(input.Settings, context),
    }),
    ...(input.Specialty !== undefined && { Specialty: input.Specialty }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_json1_1StartTranscriptionJobRequest = (
  input: StartTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContentRedaction !== undefined && {
      ContentRedaction: serializeAws_json1_1ContentRedaction(input.ContentRedaction, context),
    }),
    ...(input.JobExecutionSettings !== undefined && {
      JobExecutionSettings: serializeAws_json1_1JobExecutionSettings(input.JobExecutionSettings, context),
    }),
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.Media !== undefined && { Media: serializeAws_json1_1Media(input.Media, context) }),
    ...(input.MediaFormat !== undefined && { MediaFormat: input.MediaFormat }),
    ...(input.MediaSampleRateHertz !== undefined && { MediaSampleRateHertz: input.MediaSampleRateHertz }),
    ...(input.OutputBucketName !== undefined && { OutputBucketName: input.OutputBucketName }),
    ...(input.OutputEncryptionKMSKeyId !== undefined && { OutputEncryptionKMSKeyId: input.OutputEncryptionKMSKeyId }),
    ...(input.Settings !== undefined && { Settings: serializeAws_json1_1Settings(input.Settings, context) }),
    ...(input.TranscriptionJobName !== undefined && { TranscriptionJobName: input.TranscriptionJobName }),
  };
};

const serializeAws_json1_1UpdateMedicalVocabularyRequest = (
  input: UpdateMedicalVocabularyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.VocabularyFileUri !== undefined && { VocabularyFileUri: input.VocabularyFileUri }),
    ...(input.VocabularyName !== undefined && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1UpdateVocabularyFilterRequest = (
  input: UpdateVocabularyFilterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.VocabularyFilterFileUri !== undefined && { VocabularyFilterFileUri: input.VocabularyFilterFileUri }),
    ...(input.VocabularyFilterName !== undefined && { VocabularyFilterName: input.VocabularyFilterName }),
    ...(input.Words !== undefined && { Words: serializeAws_json1_1Words(input.Words, context) }),
  };
};

const serializeAws_json1_1UpdateVocabularyRequest = (input: UpdateVocabularyRequest, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode !== undefined && { LanguageCode: input.LanguageCode }),
    ...(input.Phrases !== undefined && { Phrases: serializeAws_json1_1Phrases(input.Phrases, context) }),
    ...(input.VocabularyFileUri !== undefined && { VocabularyFileUri: input.VocabularyFileUri }),
    ...(input.VocabularyName !== undefined && { VocabularyName: input.VocabularyName }),
  };
};

const serializeAws_json1_1Words = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const deserializeAws_json1_1BadRequestException = (output: any, context: __SerdeContext): BadRequestException => {
  return {
    __type: "BadRequestException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    __type: "ConflictException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ContentRedaction = (output: any, context: __SerdeContext): ContentRedaction => {
  return {
    __type: "ContentRedaction",
    RedactionOutput:
      output.RedactionOutput !== undefined && output.RedactionOutput !== null ? output.RedactionOutput : undefined,
    RedactionType:
      output.RedactionType !== undefined && output.RedactionType !== null ? output.RedactionType : undefined,
  } as any;
};

const deserializeAws_json1_1CreateMedicalVocabularyResponse = (
  output: any,
  context: __SerdeContext
): CreateMedicalVocabularyResponse => {
  return {
    __type: "CreateMedicalVocabularyResponse",
    FailureReason:
      output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    VocabularyName:
      output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
    VocabularyState:
      output.VocabularyState !== undefined && output.VocabularyState !== null ? output.VocabularyState : undefined,
  } as any;
};

const deserializeAws_json1_1CreateVocabularyFilterResponse = (
  output: any,
  context: __SerdeContext
): CreateVocabularyFilterResponse => {
  return {
    __type: "CreateVocabularyFilterResponse",
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    VocabularyFilterName:
      output.VocabularyFilterName !== undefined && output.VocabularyFilterName !== null
        ? output.VocabularyFilterName
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateVocabularyResponse = (
  output: any,
  context: __SerdeContext
): CreateVocabularyResponse => {
  return {
    __type: "CreateVocabularyResponse",
    FailureReason:
      output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    VocabularyName:
      output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
    VocabularyState:
      output.VocabularyState !== undefined && output.VocabularyState !== null ? output.VocabularyState : undefined,
  } as any;
};

const deserializeAws_json1_1GetMedicalTranscriptionJobResponse = (
  output: any,
  context: __SerdeContext
): GetMedicalTranscriptionJobResponse => {
  return {
    __type: "GetMedicalTranscriptionJobResponse",
    MedicalTranscriptionJob:
      output.MedicalTranscriptionJob !== undefined && output.MedicalTranscriptionJob !== null
        ? deserializeAws_json1_1MedicalTranscriptionJob(output.MedicalTranscriptionJob, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetMedicalVocabularyResponse = (
  output: any,
  context: __SerdeContext
): GetMedicalVocabularyResponse => {
  return {
    __type: "GetMedicalVocabularyResponse",
    DownloadUri: output.DownloadUri !== undefined && output.DownloadUri !== null ? output.DownloadUri : undefined,
    FailureReason:
      output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    VocabularyName:
      output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
    VocabularyState:
      output.VocabularyState !== undefined && output.VocabularyState !== null ? output.VocabularyState : undefined,
  } as any;
};

const deserializeAws_json1_1GetTranscriptionJobResponse = (
  output: any,
  context: __SerdeContext
): GetTranscriptionJobResponse => {
  return {
    __type: "GetTranscriptionJobResponse",
    TranscriptionJob:
      output.TranscriptionJob !== undefined && output.TranscriptionJob !== null
        ? deserializeAws_json1_1TranscriptionJob(output.TranscriptionJob, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetVocabularyFilterResponse = (
  output: any,
  context: __SerdeContext
): GetVocabularyFilterResponse => {
  return {
    __type: "GetVocabularyFilterResponse",
    DownloadUri: output.DownloadUri !== undefined && output.DownloadUri !== null ? output.DownloadUri : undefined,
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    VocabularyFilterName:
      output.VocabularyFilterName !== undefined && output.VocabularyFilterName !== null
        ? output.VocabularyFilterName
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetVocabularyResponse = (output: any, context: __SerdeContext): GetVocabularyResponse => {
  return {
    __type: "GetVocabularyResponse",
    DownloadUri: output.DownloadUri !== undefined && output.DownloadUri !== null ? output.DownloadUri : undefined,
    FailureReason:
      output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    VocabularyName:
      output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
    VocabularyState:
      output.VocabularyState !== undefined && output.VocabularyState !== null ? output.VocabularyState : undefined,
  } as any;
};

const deserializeAws_json1_1InternalFailureException = (
  output: any,
  context: __SerdeContext
): InternalFailureException => {
  return {
    __type: "InternalFailureException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1JobExecutionSettings = (output: any, context: __SerdeContext): JobExecutionSettings => {
  return {
    __type: "JobExecutionSettings",
    AllowDeferredExecution:
      output.AllowDeferredExecution !== undefined && output.AllowDeferredExecution !== null
        ? output.AllowDeferredExecution
        : undefined,
    DataAccessRoleArn:
      output.DataAccessRoleArn !== undefined && output.DataAccessRoleArn !== null
        ? output.DataAccessRoleArn
        : undefined,
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ListMedicalTranscriptionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListMedicalTranscriptionJobsResponse => {
  return {
    __type: "ListMedicalTranscriptionJobsResponse",
    MedicalTranscriptionJobSummaries:
      output.MedicalTranscriptionJobSummaries !== undefined && output.MedicalTranscriptionJobSummaries !== null
        ? deserializeAws_json1_1MedicalTranscriptionJobSummaries(output.MedicalTranscriptionJobSummaries, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
  } as any;
};

const deserializeAws_json1_1ListMedicalVocabulariesResponse = (
  output: any,
  context: __SerdeContext
): ListMedicalVocabulariesResponse => {
  return {
    __type: "ListMedicalVocabulariesResponse",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Vocabularies:
      output.Vocabularies !== undefined && output.Vocabularies !== null
        ? deserializeAws_json1_1Vocabularies(output.Vocabularies, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTranscriptionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListTranscriptionJobsResponse => {
  return {
    __type: "ListTranscriptionJobsResponse",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    TranscriptionJobSummaries:
      output.TranscriptionJobSummaries !== undefined && output.TranscriptionJobSummaries !== null
        ? deserializeAws_json1_1TranscriptionJobSummaries(output.TranscriptionJobSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListVocabulariesResponse = (
  output: any,
  context: __SerdeContext
): ListVocabulariesResponse => {
  return {
    __type: "ListVocabulariesResponse",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Vocabularies:
      output.Vocabularies !== undefined && output.Vocabularies !== null
        ? deserializeAws_json1_1Vocabularies(output.Vocabularies, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListVocabularyFiltersResponse = (
  output: any,
  context: __SerdeContext
): ListVocabularyFiltersResponse => {
  return {
    __type: "ListVocabularyFiltersResponse",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    VocabularyFilters:
      output.VocabularyFilters !== undefined && output.VocabularyFilters !== null
        ? deserializeAws_json1_1VocabularyFilters(output.VocabularyFilters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Media = (output: any, context: __SerdeContext): Media => {
  return {
    __type: "Media",
    MediaFileUri: output.MediaFileUri !== undefined && output.MediaFileUri !== null ? output.MediaFileUri : undefined,
  } as any;
};

const deserializeAws_json1_1MedicalTranscript = (output: any, context: __SerdeContext): MedicalTranscript => {
  return {
    __type: "MedicalTranscript",
    TranscriptFileUri:
      output.TranscriptFileUri !== undefined && output.TranscriptFileUri !== null
        ? output.TranscriptFileUri
        : undefined,
  } as any;
};

const deserializeAws_json1_1MedicalTranscriptionJob = (
  output: any,
  context: __SerdeContext
): MedicalTranscriptionJob => {
  return {
    __type: "MedicalTranscriptionJob",
    CompletionTime:
      output.CompletionTime !== undefined && output.CompletionTime !== null
        ? new Date(Math.round(output.CompletionTime * 1000))
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    FailureReason:
      output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    Media:
      output.Media !== undefined && output.Media !== null
        ? deserializeAws_json1_1Media(output.Media, context)
        : undefined,
    MediaFormat: output.MediaFormat !== undefined && output.MediaFormat !== null ? output.MediaFormat : undefined,
    MediaSampleRateHertz:
      output.MediaSampleRateHertz !== undefined && output.MediaSampleRateHertz !== null
        ? output.MediaSampleRateHertz
        : undefined,
    MedicalTranscriptionJobName:
      output.MedicalTranscriptionJobName !== undefined && output.MedicalTranscriptionJobName !== null
        ? output.MedicalTranscriptionJobName
        : undefined,
    Settings:
      output.Settings !== undefined && output.Settings !== null
        ? deserializeAws_json1_1MedicalTranscriptionSetting(output.Settings, context)
        : undefined,
    Specialty: output.Specialty !== undefined && output.Specialty !== null ? output.Specialty : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    Transcript:
      output.Transcript !== undefined && output.Transcript !== null
        ? deserializeAws_json1_1MedicalTranscript(output.Transcript, context)
        : undefined,
    TranscriptionJobStatus:
      output.TranscriptionJobStatus !== undefined && output.TranscriptionJobStatus !== null
        ? output.TranscriptionJobStatus
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1MedicalTranscriptionJobSummaries = (
  output: any,
  context: __SerdeContext
): MedicalTranscriptionJobSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1MedicalTranscriptionJobSummary(entry, context));
};

const deserializeAws_json1_1MedicalTranscriptionJobSummary = (
  output: any,
  context: __SerdeContext
): MedicalTranscriptionJobSummary => {
  return {
    __type: "MedicalTranscriptionJobSummary",
    CompletionTime:
      output.CompletionTime !== undefined && output.CompletionTime !== null
        ? new Date(Math.round(output.CompletionTime * 1000))
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    FailureReason:
      output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    MedicalTranscriptionJobName:
      output.MedicalTranscriptionJobName !== undefined && output.MedicalTranscriptionJobName !== null
        ? output.MedicalTranscriptionJobName
        : undefined,
    OutputLocationType:
      output.OutputLocationType !== undefined && output.OutputLocationType !== null
        ? output.OutputLocationType
        : undefined,
    Specialty: output.Specialty !== undefined && output.Specialty !== null ? output.Specialty : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    TranscriptionJobStatus:
      output.TranscriptionJobStatus !== undefined && output.TranscriptionJobStatus !== null
        ? output.TranscriptionJobStatus
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1MedicalTranscriptionSetting = (
  output: any,
  context: __SerdeContext
): MedicalTranscriptionSetting => {
  return {
    __type: "MedicalTranscriptionSetting",
    ChannelIdentification:
      output.ChannelIdentification !== undefined && output.ChannelIdentification !== null
        ? output.ChannelIdentification
        : undefined,
    MaxAlternatives:
      output.MaxAlternatives !== undefined && output.MaxAlternatives !== null ? output.MaxAlternatives : undefined,
    MaxSpeakerLabels:
      output.MaxSpeakerLabels !== undefined && output.MaxSpeakerLabels !== null ? output.MaxSpeakerLabels : undefined,
    ShowAlternatives:
      output.ShowAlternatives !== undefined && output.ShowAlternatives !== null ? output.ShowAlternatives : undefined,
    ShowSpeakerLabels:
      output.ShowSpeakerLabels !== undefined && output.ShowSpeakerLabels !== null
        ? output.ShowSpeakerLabels
        : undefined,
    VocabularyName:
      output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
  } as any;
};

const deserializeAws_json1_1NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    __type: "NotFoundException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1Settings = (output: any, context: __SerdeContext): Settings => {
  return {
    __type: "Settings",
    ChannelIdentification:
      output.ChannelIdentification !== undefined && output.ChannelIdentification !== null
        ? output.ChannelIdentification
        : undefined,
    MaxAlternatives:
      output.MaxAlternatives !== undefined && output.MaxAlternatives !== null ? output.MaxAlternatives : undefined,
    MaxSpeakerLabels:
      output.MaxSpeakerLabels !== undefined && output.MaxSpeakerLabels !== null ? output.MaxSpeakerLabels : undefined,
    ShowAlternatives:
      output.ShowAlternatives !== undefined && output.ShowAlternatives !== null ? output.ShowAlternatives : undefined,
    ShowSpeakerLabels:
      output.ShowSpeakerLabels !== undefined && output.ShowSpeakerLabels !== null
        ? output.ShowSpeakerLabels
        : undefined,
    VocabularyFilterMethod:
      output.VocabularyFilterMethod !== undefined && output.VocabularyFilterMethod !== null
        ? output.VocabularyFilterMethod
        : undefined,
    VocabularyFilterName:
      output.VocabularyFilterName !== undefined && output.VocabularyFilterName !== null
        ? output.VocabularyFilterName
        : undefined,
    VocabularyName:
      output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
  } as any;
};

const deserializeAws_json1_1StartMedicalTranscriptionJobResponse = (
  output: any,
  context: __SerdeContext
): StartMedicalTranscriptionJobResponse => {
  return {
    __type: "StartMedicalTranscriptionJobResponse",
    MedicalTranscriptionJob:
      output.MedicalTranscriptionJob !== undefined && output.MedicalTranscriptionJob !== null
        ? deserializeAws_json1_1MedicalTranscriptionJob(output.MedicalTranscriptionJob, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StartTranscriptionJobResponse = (
  output: any,
  context: __SerdeContext
): StartTranscriptionJobResponse => {
  return {
    __type: "StartTranscriptionJobResponse",
    TranscriptionJob:
      output.TranscriptionJob !== undefined && output.TranscriptionJob !== null
        ? deserializeAws_json1_1TranscriptionJob(output.TranscriptionJob, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Transcript = (output: any, context: __SerdeContext): Transcript => {
  return {
    __type: "Transcript",
    RedactedTranscriptFileUri:
      output.RedactedTranscriptFileUri !== undefined && output.RedactedTranscriptFileUri !== null
        ? output.RedactedTranscriptFileUri
        : undefined,
    TranscriptFileUri:
      output.TranscriptFileUri !== undefined && output.TranscriptFileUri !== null
        ? output.TranscriptFileUri
        : undefined,
  } as any;
};

const deserializeAws_json1_1TranscriptionJob = (output: any, context: __SerdeContext): TranscriptionJob => {
  return {
    __type: "TranscriptionJob",
    CompletionTime:
      output.CompletionTime !== undefined && output.CompletionTime !== null
        ? new Date(Math.round(output.CompletionTime * 1000))
        : undefined,
    ContentRedaction:
      output.ContentRedaction !== undefined && output.ContentRedaction !== null
        ? deserializeAws_json1_1ContentRedaction(output.ContentRedaction, context)
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    FailureReason:
      output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
    JobExecutionSettings:
      output.JobExecutionSettings !== undefined && output.JobExecutionSettings !== null
        ? deserializeAws_json1_1JobExecutionSettings(output.JobExecutionSettings, context)
        : undefined,
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    Media:
      output.Media !== undefined && output.Media !== null
        ? deserializeAws_json1_1Media(output.Media, context)
        : undefined,
    MediaFormat: output.MediaFormat !== undefined && output.MediaFormat !== null ? output.MediaFormat : undefined,
    MediaSampleRateHertz:
      output.MediaSampleRateHertz !== undefined && output.MediaSampleRateHertz !== null
        ? output.MediaSampleRateHertz
        : undefined,
    Settings:
      output.Settings !== undefined && output.Settings !== null
        ? deserializeAws_json1_1Settings(output.Settings, context)
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    Transcript:
      output.Transcript !== undefined && output.Transcript !== null
        ? deserializeAws_json1_1Transcript(output.Transcript, context)
        : undefined,
    TranscriptionJobName:
      output.TranscriptionJobName !== undefined && output.TranscriptionJobName !== null
        ? output.TranscriptionJobName
        : undefined,
    TranscriptionJobStatus:
      output.TranscriptionJobStatus !== undefined && output.TranscriptionJobStatus !== null
        ? output.TranscriptionJobStatus
        : undefined,
  } as any;
};

const deserializeAws_json1_1TranscriptionJobSummaries = (
  output: any,
  context: __SerdeContext
): TranscriptionJobSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1TranscriptionJobSummary(entry, context));
};

const deserializeAws_json1_1TranscriptionJobSummary = (
  output: any,
  context: __SerdeContext
): TranscriptionJobSummary => {
  return {
    __type: "TranscriptionJobSummary",
    CompletionTime:
      output.CompletionTime !== undefined && output.CompletionTime !== null
        ? new Date(Math.round(output.CompletionTime * 1000))
        : undefined,
    ContentRedaction:
      output.ContentRedaction !== undefined && output.ContentRedaction !== null
        ? deserializeAws_json1_1ContentRedaction(output.ContentRedaction, context)
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    FailureReason:
      output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    OutputLocationType:
      output.OutputLocationType !== undefined && output.OutputLocationType !== null
        ? output.OutputLocationType
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    TranscriptionJobName:
      output.TranscriptionJobName !== undefined && output.TranscriptionJobName !== null
        ? output.TranscriptionJobName
        : undefined,
    TranscriptionJobStatus:
      output.TranscriptionJobStatus !== undefined && output.TranscriptionJobStatus !== null
        ? output.TranscriptionJobStatus
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateMedicalVocabularyResponse = (
  output: any,
  context: __SerdeContext
): UpdateMedicalVocabularyResponse => {
  return {
    __type: "UpdateMedicalVocabularyResponse",
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    VocabularyName:
      output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
    VocabularyState:
      output.VocabularyState !== undefined && output.VocabularyState !== null ? output.VocabularyState : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateVocabularyFilterResponse = (
  output: any,
  context: __SerdeContext
): UpdateVocabularyFilterResponse => {
  return {
    __type: "UpdateVocabularyFilterResponse",
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    VocabularyFilterName:
      output.VocabularyFilterName !== undefined && output.VocabularyFilterName !== null
        ? output.VocabularyFilterName
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateVocabularyResponse = (
  output: any,
  context: __SerdeContext
): UpdateVocabularyResponse => {
  return {
    __type: "UpdateVocabularyResponse",
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    VocabularyName:
      output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
    VocabularyState:
      output.VocabularyState !== undefined && output.VocabularyState !== null ? output.VocabularyState : undefined,
  } as any;
};

const deserializeAws_json1_1Vocabularies = (output: any, context: __SerdeContext): VocabularyInfo[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1VocabularyInfo(entry, context));
};

const deserializeAws_json1_1VocabularyFilterInfo = (output: any, context: __SerdeContext): VocabularyFilterInfo => {
  return {
    __type: "VocabularyFilterInfo",
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    VocabularyFilterName:
      output.VocabularyFilterName !== undefined && output.VocabularyFilterName !== null
        ? output.VocabularyFilterName
        : undefined,
  } as any;
};

const deserializeAws_json1_1VocabularyFilters = (output: any, context: __SerdeContext): VocabularyFilterInfo[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1VocabularyFilterInfo(entry, context));
};

const deserializeAws_json1_1VocabularyInfo = (output: any, context: __SerdeContext): VocabularyInfo => {
  return {
    __type: "VocabularyInfo",
    LanguageCode: output.LanguageCode !== undefined && output.LanguageCode !== null ? output.LanguageCode : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? new Date(Math.round(output.LastModifiedTime * 1000))
        : undefined,
    VocabularyName:
      output.VocabularyName !== undefined && output.VocabularyName !== null ? output.VocabularyName : undefined,
    VocabularyState:
      output.VocabularyState !== undefined && output.VocabularyState !== null ? output.VocabularyState : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
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
