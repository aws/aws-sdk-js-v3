import {
  CreateVocabularyCommandInput,
  CreateVocabularyCommandOutput,
} from "../commands/CreateVocabularyCommand";
import {
  DeleteTranscriptionJobCommandInput,
  DeleteTranscriptionJobCommandOutput,
} from "../commands/DeleteTranscriptionJobCommand";
import {
  DeleteVocabularyCommandInput,
  DeleteVocabularyCommandOutput,
} from "../commands/DeleteVocabularyCommand";
import {
  GetTranscriptionJobCommandInput,
  GetTranscriptionJobCommandOutput,
} from "../commands/GetTranscriptionJobCommand";
import {
  GetVocabularyCommandInput,
  GetVocabularyCommandOutput,
} from "../commands/GetVocabularyCommand";
import {
  ListTranscriptionJobsCommandInput,
  ListTranscriptionJobsCommandOutput,
} from "../commands/ListTranscriptionJobsCommand";
import {
  ListVocabulariesCommandInput,
  ListVocabulariesCommandOutput,
} from "../commands/ListVocabulariesCommand";
import {
  StartTranscriptionJobCommandInput,
  StartTranscriptionJobCommandOutput,
} from "../commands/StartTranscriptionJobCommand";
import {
  UpdateVocabularyCommandInput,
  UpdateVocabularyCommandOutput,
} from "../commands/UpdateVocabularyCommand";
import {
  BadRequestException,
  ConflictException,
  CreateVocabularyRequest,
  CreateVocabularyResponse,
  DeleteTranscriptionJobRequest,
  DeleteVocabularyRequest,
  GetTranscriptionJobRequest,
  GetTranscriptionJobResponse,
  GetVocabularyRequest,
  GetVocabularyResponse,
  InternalFailureException,
  LimitExceededException,
  ListTranscriptionJobsRequest,
  ListTranscriptionJobsResponse,
  ListVocabulariesRequest,
  ListVocabulariesResponse,
  Media,
  NotFoundException,
  Settings,
  StartTranscriptionJobRequest,
  StartTranscriptionJobResponse,
  Transcript,
  TranscriptionJob,
  TranscriptionJobSummary,
  UpdateVocabularyRequest,
  UpdateVocabularyResponse,
  VocabularyInfo,
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export async function serializeAws_json1_1CreateVocabularyCommand(
  input: CreateVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "Transcribe.CreateVocabulary";
  let body: any = {};
  const wrappedBody: any = {
    CreateVocabularyRequest: serializeAws_json1_1CreateVocabularyRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateVocabulary",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DeleteTranscriptionJobCommand(
  input: DeleteTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "Transcribe.DeleteTranscriptionJob";
  let body: any = {};
  const wrappedBody: any = {
    DeleteTranscriptionJobRequest: serializeAws_json1_1DeleteTranscriptionJobRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteTranscriptionJob",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DeleteVocabularyCommand(
  input: DeleteVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "Transcribe.DeleteVocabulary";
  let body: any = {};
  const wrappedBody: any = {
    DeleteVocabularyRequest: serializeAws_json1_1DeleteVocabularyRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteVocabulary",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1GetTranscriptionJobCommand(
  input: GetTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "Transcribe.GetTranscriptionJob";
  let body: any = {};
  const wrappedBody: any = {
    GetTranscriptionJobRequest: serializeAws_json1_1GetTranscriptionJobRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetTranscriptionJob",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1GetVocabularyCommand(
  input: GetVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "Transcribe.GetVocabulary";
  let body: any = {};
  const wrappedBody: any = {
    GetVocabularyRequest: serializeAws_json1_1GetVocabularyRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetVocabulary",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1ListTranscriptionJobsCommand(
  input: ListTranscriptionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "Transcribe.ListTranscriptionJobs";
  let body: any = {};
  const wrappedBody: any = {
    ListTranscriptionJobsRequest: serializeAws_json1_1ListTranscriptionJobsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTranscriptionJobs",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1ListVocabulariesCommand(
  input: ListVocabulariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "Transcribe.ListVocabularies";
  let body: any = {};
  const wrappedBody: any = {
    ListVocabulariesRequest: serializeAws_json1_1ListVocabulariesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListVocabularies",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1StartTranscriptionJobCommand(
  input: StartTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "Transcribe.StartTranscriptionJob";
  let body: any = {};
  const wrappedBody: any = {
    StartTranscriptionJobRequest: serializeAws_json1_1StartTranscriptionJobRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartTranscriptionJob",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1UpdateVocabularyCommand(
  input: UpdateVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "Transcribe.UpdateVocabulary";
  let body: any = {};
  const wrappedBody: any = {
    UpdateVocabularyRequest: serializeAws_json1_1UpdateVocabularyRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateVocabulary",
    headers: headers,
    body: body,
  });
}

export async function deserializeAws_json1_1CreateVocabularyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVocabularyResponse(data, context);
  const response: CreateVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateVocabularyResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateVocabularyCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateVocabularyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context);
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.transcribe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteTranscriptionJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTranscriptionJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTranscriptionJobCommandError(output, context);
  }
  const response: DeleteTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteTranscriptionJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteTranscriptionJobCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context);
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.transcribe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteVocabularyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteVocabularyCommandError(output, context);
  }
  const response: DeleteVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteVocabularyCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteVocabularyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context);
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.transcribe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetTranscriptionJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTranscriptionJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTranscriptionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1GetTranscriptionJobResponse(data, context);
  const response: GetTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTranscriptionJobResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetTranscriptionJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetTranscriptionJobCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context);
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.transcribe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetVocabularyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1GetVocabularyResponse(data, context);
  const response: GetVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetVocabularyResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetVocabularyCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetVocabularyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context);
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.transcribe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListTranscriptionJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTranscriptionJobsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTranscriptionJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1ListTranscriptionJobsResponse(data, context);
  const response: ListTranscriptionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTranscriptionJobsResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTranscriptionJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListTranscriptionJobsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context);
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.transcribe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListVocabulariesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabulariesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListVocabulariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1ListVocabulariesResponse(data, context);
  const response: ListVocabulariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVocabulariesResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListVocabulariesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListVocabulariesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context);
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.transcribe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StartTranscriptionJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTranscriptionJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartTranscriptionJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1StartTranscriptionJobResponse(data, context);
  const response: StartTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartTranscriptionJobResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartTranscriptionJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<StartTranscriptionJobCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context);
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.transcribe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateVocabularyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateVocabularyResponse(data, context);
  const response: UpdateVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateVocabularyResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateVocabularyCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdateVocabularyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = await deserializeAws_json1_1BadRequestExceptionResponse(parsedOutput, context);
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = await deserializeAws_json1_1InternalFailureExceptionResponse(parsedOutput, context);
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.transcribe#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const deserialized: any = deserializeAws_json1_1BadRequestException(output.body, context);
  const contents: BadRequestException = {
    __type: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const deserialized: any = deserializeAws_json1_1ConflictException(output.body, context);
  const contents: ConflictException = {
    __type: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const deserialized: any = deserializeAws_json1_1InternalFailureException(output.body, context);
  const contents: InternalFailureException = {
    __type: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1LimitExceededException(output.body, context);
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const deserialized: any = deserializeAws_json1_1NotFoundException(output.body, context);
  const contents: NotFoundException = {
    __type: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1CreateVocabularyRequest = (
  input: CreateVocabularyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.LanguageCode !== undefined) {
    bodyParams['LanguageCode'] = input.LanguageCode;
  }
  if (input.Phrases !== undefined) {
    bodyParams['Phrases'] = serializeAws_json1_1Phrases(input.Phrases, context);
  }
  if (input.VocabularyFileUri !== undefined) {
    bodyParams['VocabularyFileUri'] = input.VocabularyFileUri;
  }
  if (input.VocabularyName !== undefined) {
    bodyParams['VocabularyName'] = input.VocabularyName;
  }
  return bodyParams;
}

const serializeAws_json1_1DeleteTranscriptionJobRequest = (
  input: DeleteTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TranscriptionJobName !== undefined) {
    bodyParams['TranscriptionJobName'] = input.TranscriptionJobName;
  }
  return bodyParams;
}

const serializeAws_json1_1DeleteVocabularyRequest = (
  input: DeleteVocabularyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.VocabularyName !== undefined) {
    bodyParams['VocabularyName'] = input.VocabularyName;
  }
  return bodyParams;
}

const serializeAws_json1_1GetTranscriptionJobRequest = (
  input: GetTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TranscriptionJobName !== undefined) {
    bodyParams['TranscriptionJobName'] = input.TranscriptionJobName;
  }
  return bodyParams;
}

const serializeAws_json1_1GetVocabularyRequest = (
  input: GetVocabularyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.VocabularyName !== undefined) {
    bodyParams['VocabularyName'] = input.VocabularyName;
  }
  return bodyParams;
}

const serializeAws_json1_1ListTranscriptionJobsRequest = (
  input: ListTranscriptionJobsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.JobNameContains !== undefined) {
    bodyParams['JobNameContains'] = input.JobNameContains;
  }
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  if (input.Status !== undefined) {
    bodyParams['Status'] = input.Status;
  }
  return bodyParams;
}

const serializeAws_json1_1ListVocabulariesRequest = (
  input: ListVocabulariesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NameContains !== undefined) {
    bodyParams['NameContains'] = input.NameContains;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  if (input.StateEquals !== undefined) {
    bodyParams['StateEquals'] = input.StateEquals;
  }
  return bodyParams;
}

const serializeAws_json1_1Media = (
  input: Media,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MediaFileUri !== undefined) {
    bodyParams['MediaFileUri'] = input.MediaFileUri;
  }
  return bodyParams;
}

const serializeAws_json1_1Phrases = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1Settings = (
  input: Settings,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ChannelIdentification !== undefined) {
    bodyParams['ChannelIdentification'] = input.ChannelIdentification;
  }
  if (input.MaxAlternatives !== undefined) {
    bodyParams['MaxAlternatives'] = input.MaxAlternatives;
  }
  if (input.MaxSpeakerLabels !== undefined) {
    bodyParams['MaxSpeakerLabels'] = input.MaxSpeakerLabels;
  }
  if (input.ShowAlternatives !== undefined) {
    bodyParams['ShowAlternatives'] = input.ShowAlternatives;
  }
  if (input.ShowSpeakerLabels !== undefined) {
    bodyParams['ShowSpeakerLabels'] = input.ShowSpeakerLabels;
  }
  if (input.VocabularyName !== undefined) {
    bodyParams['VocabularyName'] = input.VocabularyName;
  }
  return bodyParams;
}

const serializeAws_json1_1StartTranscriptionJobRequest = (
  input: StartTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.LanguageCode !== undefined) {
    bodyParams['LanguageCode'] = input.LanguageCode;
  }
  if (input.Media !== undefined) {
    bodyParams['Media'] = serializeAws_json1_1Media(input.Media, context);
  }
  if (input.MediaFormat !== undefined) {
    bodyParams['MediaFormat'] = input.MediaFormat;
  }
  if (input.MediaSampleRateHertz !== undefined) {
    bodyParams['MediaSampleRateHertz'] = input.MediaSampleRateHertz;
  }
  if (input.OutputBucketName !== undefined) {
    bodyParams['OutputBucketName'] = input.OutputBucketName;
  }
  if (input.OutputEncryptionKMSKeyId !== undefined) {
    bodyParams['OutputEncryptionKMSKeyId'] = input.OutputEncryptionKMSKeyId;
  }
  if (input.Settings !== undefined) {
    bodyParams['Settings'] = serializeAws_json1_1Settings(input.Settings, context);
  }
  if (input.TranscriptionJobName !== undefined) {
    bodyParams['TranscriptionJobName'] = input.TranscriptionJobName;
  }
  return bodyParams;
}

const serializeAws_json1_1UpdateVocabularyRequest = (
  input: UpdateVocabularyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.LanguageCode !== undefined) {
    bodyParams['LanguageCode'] = input.LanguageCode;
  }
  if (input.Phrases !== undefined) {
    bodyParams['Phrases'] = serializeAws_json1_1Phrases(input.Phrases, context);
  }
  if (input.VocabularyFileUri !== undefined) {
    bodyParams['VocabularyFileUri'] = input.VocabularyFileUri;
  }
  if (input.VocabularyName !== undefined) {
    bodyParams['VocabularyName'] = input.VocabularyName;
  }
  return bodyParams;
}

const deserializeAws_json1_1BadRequestException = (
  output: any,
  context: __SerdeContext
): BadRequestException => {
  let contents: any = {
    __type: "BadRequestException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1ConflictException = (
  output: any,
  context: __SerdeContext
): ConflictException => {
  let contents: any = {
    __type: "ConflictException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1CreateVocabularyResponse = (
  output: any,
  context: __SerdeContext
): CreateVocabularyResponse => {
  let contents: any = {
    __type: "CreateVocabularyResponse",
    FailureReason: undefined,
    LanguageCode: undefined,
    LastModifiedTime: undefined,
    VocabularyName: undefined,
    VocabularyState: undefined,
  };
  if (output.FailureReason !== undefined) {
    contents.FailureReason = output.FailureReason;
  }
  if (output.LanguageCode !== undefined) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (output.LastModifiedTime !== undefined) {
    contents.LastModifiedTime = new Date(output.LastModifiedTime % 1 != 0 ? Math.round(output.LastModifiedTime * 1000) : output.LastModifiedTime);
  }
  if (output.VocabularyName !== undefined) {
    contents.VocabularyName = output.VocabularyName;
  }
  if (output.VocabularyState !== undefined) {
    contents.VocabularyState = output.VocabularyState;
  }
  return contents;
}

const deserializeAws_json1_1GetTranscriptionJobResponse = (
  output: any,
  context: __SerdeContext
): GetTranscriptionJobResponse => {
  let contents: any = {
    __type: "GetTranscriptionJobResponse",
    TranscriptionJob: undefined,
  };
  if (output.TranscriptionJob !== undefined) {
    contents.TranscriptionJob = deserializeAws_json1_1TranscriptionJob(output.TranscriptionJob, context);
  }
  return contents;
}

const deserializeAws_json1_1GetVocabularyResponse = (
  output: any,
  context: __SerdeContext
): GetVocabularyResponse => {
  let contents: any = {
    __type: "GetVocabularyResponse",
    DownloadUri: undefined,
    FailureReason: undefined,
    LanguageCode: undefined,
    LastModifiedTime: undefined,
    VocabularyName: undefined,
    VocabularyState: undefined,
  };
  if (output.DownloadUri !== undefined) {
    contents.DownloadUri = output.DownloadUri;
  }
  if (output.FailureReason !== undefined) {
    contents.FailureReason = output.FailureReason;
  }
  if (output.LanguageCode !== undefined) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (output.LastModifiedTime !== undefined) {
    contents.LastModifiedTime = new Date(output.LastModifiedTime % 1 != 0 ? Math.round(output.LastModifiedTime * 1000) : output.LastModifiedTime);
  }
  if (output.VocabularyName !== undefined) {
    contents.VocabularyName = output.VocabularyName;
  }
  if (output.VocabularyState !== undefined) {
    contents.VocabularyState = output.VocabularyState;
  }
  return contents;
}

const deserializeAws_json1_1InternalFailureException = (
  output: any,
  context: __SerdeContext
): InternalFailureException => {
  let contents: any = {
    __type: "InternalFailureException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1ListTranscriptionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListTranscriptionJobsResponse => {
  let contents: any = {
    __type: "ListTranscriptionJobsResponse",
    NextToken: undefined,
    Status: undefined,
    TranscriptionJobSummaries: undefined,
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.TranscriptionJobSummaries !== undefined) {
    contents.TranscriptionJobSummaries = deserializeAws_json1_1TranscriptionJobSummaries(output.TranscriptionJobSummaries, context);
  }
  return contents;
}

const deserializeAws_json1_1ListVocabulariesResponse = (
  output: any,
  context: __SerdeContext
): ListVocabulariesResponse => {
  let contents: any = {
    __type: "ListVocabulariesResponse",
    NextToken: undefined,
    Status: undefined,
    Vocabularies: undefined,
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.Vocabularies !== undefined) {
    contents.Vocabularies = deserializeAws_json1_1Vocabularies(output.Vocabularies, context);
  }
  return contents;
}

const deserializeAws_json1_1Media = (
  output: any,
  context: __SerdeContext
): Media => {
  let contents: any = {
    __type: "Media",
    MediaFileUri: undefined,
  };
  if (output.MediaFileUri !== undefined) {
    contents.MediaFileUri = output.MediaFileUri;
  }
  return contents;
}

const deserializeAws_json1_1NotFoundException = (
  output: any,
  context: __SerdeContext
): NotFoundException => {
  let contents: any = {
    __type: "NotFoundException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1Settings = (
  output: any,
  context: __SerdeContext
): Settings => {
  let contents: any = {
    __type: "Settings",
    ChannelIdentification: undefined,
    MaxAlternatives: undefined,
    MaxSpeakerLabels: undefined,
    ShowAlternatives: undefined,
    ShowSpeakerLabels: undefined,
    VocabularyName: undefined,
  };
  if (output.ChannelIdentification !== undefined) {
    contents.ChannelIdentification = output.ChannelIdentification;
  }
  if (output.MaxAlternatives !== undefined) {
    contents.MaxAlternatives = output.MaxAlternatives;
  }
  if (output.MaxSpeakerLabels !== undefined) {
    contents.MaxSpeakerLabels = output.MaxSpeakerLabels;
  }
  if (output.ShowAlternatives !== undefined) {
    contents.ShowAlternatives = output.ShowAlternatives;
  }
  if (output.ShowSpeakerLabels !== undefined) {
    contents.ShowSpeakerLabels = output.ShowSpeakerLabels;
  }
  if (output.VocabularyName !== undefined) {
    contents.VocabularyName = output.VocabularyName;
  }
  return contents;
}

const deserializeAws_json1_1StartTranscriptionJobResponse = (
  output: any,
  context: __SerdeContext
): StartTranscriptionJobResponse => {
  let contents: any = {
    __type: "StartTranscriptionJobResponse",
    TranscriptionJob: undefined,
  };
  if (output.TranscriptionJob !== undefined) {
    contents.TranscriptionJob = deserializeAws_json1_1TranscriptionJob(output.TranscriptionJob, context);
  }
  return contents;
}

const deserializeAws_json1_1Transcript = (
  output: any,
  context: __SerdeContext
): Transcript => {
  let contents: any = {
    __type: "Transcript",
    TranscriptFileUri: undefined,
  };
  if (output.TranscriptFileUri !== undefined) {
    contents.TranscriptFileUri = output.TranscriptFileUri;
  }
  return contents;
}

const deserializeAws_json1_1TranscriptionJob = (
  output: any,
  context: __SerdeContext
): TranscriptionJob => {
  let contents: any = {
    __type: "TranscriptionJob",
    CompletionTime: undefined,
    CreationTime: undefined,
    FailureReason: undefined,
    LanguageCode: undefined,
    Media: undefined,
    MediaFormat: undefined,
    MediaSampleRateHertz: undefined,
    Settings: undefined,
    Transcript: undefined,
    TranscriptionJobName: undefined,
    TranscriptionJobStatus: undefined,
  };
  if (output.CompletionTime !== undefined) {
    contents.CompletionTime = new Date(output.CompletionTime % 1 != 0 ? Math.round(output.CompletionTime * 1000) : output.CompletionTime);
  }
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(output.CreationTime % 1 != 0 ? Math.round(output.CreationTime * 1000) : output.CreationTime);
  }
  if (output.FailureReason !== undefined) {
    contents.FailureReason = output.FailureReason;
  }
  if (output.LanguageCode !== undefined) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (output.Media !== undefined) {
    contents.Media = deserializeAws_json1_1Media(output.Media, context);
  }
  if (output.MediaFormat !== undefined) {
    contents.MediaFormat = output.MediaFormat;
  }
  if (output.MediaSampleRateHertz !== undefined) {
    contents.MediaSampleRateHertz = output.MediaSampleRateHertz;
  }
  if (output.Settings !== undefined) {
    contents.Settings = deserializeAws_json1_1Settings(output.Settings, context);
  }
  if (output.Transcript !== undefined) {
    contents.Transcript = deserializeAws_json1_1Transcript(output.Transcript, context);
  }
  if (output.TranscriptionJobName !== undefined) {
    contents.TranscriptionJobName = output.TranscriptionJobName;
  }
  if (output.TranscriptionJobStatus !== undefined) {
    contents.TranscriptionJobStatus = output.TranscriptionJobStatus;
  }
  return contents;
}

const deserializeAws_json1_1TranscriptionJobSummaries = (
  output: any,
  context: __SerdeContext
): Array<TranscriptionJobSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TranscriptionJobSummary(entry, context)
  );
}

const deserializeAws_json1_1TranscriptionJobSummary = (
  output: any,
  context: __SerdeContext
): TranscriptionJobSummary => {
  let contents: any = {
    __type: "TranscriptionJobSummary",
    CompletionTime: undefined,
    CreationTime: undefined,
    FailureReason: undefined,
    LanguageCode: undefined,
    OutputLocationType: undefined,
    TranscriptionJobName: undefined,
    TranscriptionJobStatus: undefined,
  };
  if (output.CompletionTime !== undefined) {
    contents.CompletionTime = new Date(output.CompletionTime % 1 != 0 ? Math.round(output.CompletionTime * 1000) : output.CompletionTime);
  }
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(output.CreationTime % 1 != 0 ? Math.round(output.CreationTime * 1000) : output.CreationTime);
  }
  if (output.FailureReason !== undefined) {
    contents.FailureReason = output.FailureReason;
  }
  if (output.LanguageCode !== undefined) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (output.OutputLocationType !== undefined) {
    contents.OutputLocationType = output.OutputLocationType;
  }
  if (output.TranscriptionJobName !== undefined) {
    contents.TranscriptionJobName = output.TranscriptionJobName;
  }
  if (output.TranscriptionJobStatus !== undefined) {
    contents.TranscriptionJobStatus = output.TranscriptionJobStatus;
  }
  return contents;
}

const deserializeAws_json1_1UpdateVocabularyResponse = (
  output: any,
  context: __SerdeContext
): UpdateVocabularyResponse => {
  let contents: any = {
    __type: "UpdateVocabularyResponse",
    LanguageCode: undefined,
    LastModifiedTime: undefined,
    VocabularyName: undefined,
    VocabularyState: undefined,
  };
  if (output.LanguageCode !== undefined) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (output.LastModifiedTime !== undefined) {
    contents.LastModifiedTime = new Date(output.LastModifiedTime % 1 != 0 ? Math.round(output.LastModifiedTime * 1000) : output.LastModifiedTime);
  }
  if (output.VocabularyName !== undefined) {
    contents.VocabularyName = output.VocabularyName;
  }
  if (output.VocabularyState !== undefined) {
    contents.VocabularyState = output.VocabularyState;
  }
  return contents;
}

const deserializeAws_json1_1Vocabularies = (
  output: any,
  context: __SerdeContext
): Array<VocabularyInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1VocabularyInfo(entry, context)
  );
}

const deserializeAws_json1_1VocabularyInfo = (
  output: any,
  context: __SerdeContext
): VocabularyInfo => {
  let contents: any = {
    __type: "VocabularyInfo",
    LanguageCode: undefined,
    LastModifiedTime: undefined,
    VocabularyName: undefined,
    VocabularyState: undefined,
  };
  if (output.LanguageCode !== undefined) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (output.LastModifiedTime !== undefined) {
    contents.LastModifiedTime = new Date(output.LastModifiedTime % 1 != 0 ? Math.round(output.LastModifiedTime * 1000) : output.LastModifiedTime);
  }
  if (output.VocabularyName !== undefined) {
    contents.VocabularyName = output.VocabularyName;
  }
  if (output.VocabularyState !== undefined) {
    contents.VocabularyState = output.VocabularyState;
  }
  return contents;
}

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
