import {
  CreateVocabularyCommandInput,
  CreateVocabularyCommandOutput
} from "../commands/CreateVocabularyCommand";
import {
  CreateVocabularyFilterCommandInput,
  CreateVocabularyFilterCommandOutput
} from "../commands/CreateVocabularyFilterCommand";
import {
  DeleteTranscriptionJobCommandInput,
  DeleteTranscriptionJobCommandOutput
} from "../commands/DeleteTranscriptionJobCommand";
import {
  DeleteVocabularyCommandInput,
  DeleteVocabularyCommandOutput
} from "../commands/DeleteVocabularyCommand";
import {
  DeleteVocabularyFilterCommandInput,
  DeleteVocabularyFilterCommandOutput
} from "../commands/DeleteVocabularyFilterCommand";
import {
  GetTranscriptionJobCommandInput,
  GetTranscriptionJobCommandOutput
} from "../commands/GetTranscriptionJobCommand";
import {
  GetVocabularyCommandInput,
  GetVocabularyCommandOutput
} from "../commands/GetVocabularyCommand";
import {
  GetVocabularyFilterCommandInput,
  GetVocabularyFilterCommandOutput
} from "../commands/GetVocabularyFilterCommand";
import {
  ListTranscriptionJobsCommandInput,
  ListTranscriptionJobsCommandOutput
} from "../commands/ListTranscriptionJobsCommand";
import {
  ListVocabulariesCommandInput,
  ListVocabulariesCommandOutput
} from "../commands/ListVocabulariesCommand";
import {
  ListVocabularyFiltersCommandInput,
  ListVocabularyFiltersCommandOutput
} from "../commands/ListVocabularyFiltersCommand";
import {
  StartTranscriptionJobCommandInput,
  StartTranscriptionJobCommandOutput
} from "../commands/StartTranscriptionJobCommand";
import {
  UpdateVocabularyCommandInput,
  UpdateVocabularyCommandOutput
} from "../commands/UpdateVocabularyCommand";
import {
  UpdateVocabularyFilterCommandInput,
  UpdateVocabularyFilterCommandOutput
} from "../commands/UpdateVocabularyFilterCommand";
import {
  BadRequestException,
  ConflictException,
  CreateVocabularyFilterRequest,
  CreateVocabularyFilterResponse,
  CreateVocabularyRequest,
  CreateVocabularyResponse,
  DeleteTranscriptionJobRequest,
  DeleteVocabularyFilterRequest,
  DeleteVocabularyRequest,
  GetTranscriptionJobRequest,
  GetTranscriptionJobResponse,
  GetVocabularyFilterRequest,
  GetVocabularyFilterResponse,
  GetVocabularyRequest,
  GetVocabularyResponse,
  InternalFailureException,
  JobExecutionSettings,
  LimitExceededException,
  ListTranscriptionJobsRequest,
  ListTranscriptionJobsResponse,
  ListVocabulariesRequest,
  ListVocabulariesResponse,
  ListVocabularyFiltersRequest,
  ListVocabularyFiltersResponse,
  Media,
  NotFoundException,
  Settings,
  StartTranscriptionJobRequest,
  StartTranscriptionJobResponse,
  Transcript,
  TranscriptionJob,
  TranscriptionJobSummary,
  UpdateVocabularyFilterRequest,
  UpdateVocabularyFilterResponse,
  UpdateVocabularyRequest,
  UpdateVocabularyResponse,
  VocabularyFilterInfo,
  VocabularyInfo
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

export async function serializeAws_json1_1CreateVocabularyCommand(
  input: CreateVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Transcribe.CreateVocabulary";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateVocabularyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateVocabularyFilterCommand(
  input: CreateVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Transcribe.CreateVocabularyFilter";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateVocabularyFilterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteTranscriptionJobCommand(
  input: DeleteTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Transcribe.DeleteTranscriptionJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteTranscriptionJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteVocabularyCommand(
  input: DeleteVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Transcribe.DeleteVocabulary";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteVocabularyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteVocabularyFilterCommand(
  input: DeleteVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Transcribe.DeleteVocabularyFilter";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteVocabularyFilterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetTranscriptionJobCommand(
  input: GetTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Transcribe.GetTranscriptionJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetTranscriptionJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetVocabularyCommand(
  input: GetVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Transcribe.GetVocabulary";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetVocabularyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetVocabularyFilterCommand(
  input: GetVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Transcribe.GetVocabularyFilter";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetVocabularyFilterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTranscriptionJobsCommand(
  input: ListTranscriptionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Transcribe.ListTranscriptionJobs";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTranscriptionJobsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListVocabulariesCommand(
  input: ListVocabulariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Transcribe.ListVocabularies";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListVocabulariesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListVocabularyFiltersCommand(
  input: ListVocabularyFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Transcribe.ListVocabularyFilters";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListVocabularyFiltersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartTranscriptionJobCommand(
  input: StartTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Transcribe.StartTranscriptionJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartTranscriptionJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateVocabularyCommand(
  input: UpdateVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Transcribe.UpdateVocabulary";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateVocabularyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateVocabularyFilterCommand(
  input: UpdateVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Transcribe.UpdateVocabularyFilter";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateVocabularyFilterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CreateVocabularyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVocabularyResponse(data, context);
  const response: CreateVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateVocabularyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateVocabularyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export async function deserializeAws_json1_1CreateVocabularyFilterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyFilterCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateVocabularyFilterCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVocabularyFilterResponse(
    data,
    context
  );
  const response: CreateVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateVocabularyFilterResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateVocabularyFilterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyFilterCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export async function deserializeAws_json1_1DeleteTranscriptionJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTranscriptionJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTranscriptionJobCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteTranscriptionJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTranscriptionJobCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export async function deserializeAws_json1_1DeleteVocabularyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteVocabularyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteVocabularyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
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

export async function deserializeAws_json1_1DeleteVocabularyFilterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyFilterCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteVocabularyFilterCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteVocabularyFilterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyFilterCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
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

export async function deserializeAws_json1_1GetTranscriptionJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTranscriptionJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTranscriptionJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTranscriptionJobResponse(data, context);
  const response: GetTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTranscriptionJobResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetTranscriptionJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTranscriptionJobCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
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

export async function deserializeAws_json1_1GetVocabularyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetVocabularyResponse(data, context);
  const response: GetVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetVocabularyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetVocabularyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
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

export async function deserializeAws_json1_1GetVocabularyFilterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyFilterCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetVocabularyFilterCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetVocabularyFilterResponse(data, context);
  const response: GetVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetVocabularyFilterResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetVocabularyFilterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyFilterCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
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

export async function deserializeAws_json1_1ListTranscriptionJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTranscriptionJobsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTranscriptionJobsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTranscriptionJobsResponse(data, context);
  const response: ListTranscriptionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTranscriptionJobsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTranscriptionJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTranscriptionJobsCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export async function deserializeAws_json1_1ListVocabulariesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabulariesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListVocabulariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListVocabulariesResponse(data, context);
  const response: ListVocabulariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVocabulariesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListVocabulariesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabulariesCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export async function deserializeAws_json1_1ListVocabularyFiltersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabularyFiltersCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListVocabularyFiltersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListVocabularyFiltersResponse(data, context);
  const response: ListVocabularyFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVocabularyFiltersResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListVocabularyFiltersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabularyFiltersCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export async function deserializeAws_json1_1StartTranscriptionJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTranscriptionJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartTranscriptionJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartTranscriptionJobResponse(data, context);
  const response: StartTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartTranscriptionJobResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartTranscriptionJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTranscriptionJobCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export async function deserializeAws_json1_1UpdateVocabularyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateVocabularyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateVocabularyResponse(data, context);
  const response: UpdateVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateVocabularyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateVocabularyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.transcribe#ConflictException":
      response = {
        ...(await deserializeAws_json1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
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

export async function deserializeAws_json1_1UpdateVocabularyFilterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyFilterCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateVocabularyFilterCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateVocabularyFilterResponse(
    data,
    context
  );
  const response: UpdateVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateVocabularyFilterResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateVocabularyFilterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyFilterCommandOutput> {
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
    case "BadRequestException":
    case "com.amazonaws.transcribe#BadRequestException":
      response = {
        ...(await deserializeAws_json1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.transcribe#InternalFailureException":
      response = {
        ...(await deserializeAws_json1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.transcribe#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.transcribe#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
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

const deserializeAws_json1_1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BadRequestException(
    body,
    context
  );
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(
    body,
    context
  );
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalFailureException(
    body,
    context
  );
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(
    body,
    context
  );
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CreateVocabularyFilterRequest = (
  input: CreateVocabularyFilterRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LanguageCode !== undefined) {
    bodyParams["LanguageCode"] = input.LanguageCode;
  }
  if (input.VocabularyFilterFileUri !== undefined) {
    bodyParams["VocabularyFilterFileUri"] = input.VocabularyFilterFileUri;
  }
  if (input.VocabularyFilterName !== undefined) {
    bodyParams["VocabularyFilterName"] = input.VocabularyFilterName;
  }
  if (input.Words !== undefined) {
    bodyParams["Words"] = serializeAws_json1_1Words(input.Words, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateVocabularyRequest = (
  input: CreateVocabularyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LanguageCode !== undefined) {
    bodyParams["LanguageCode"] = input.LanguageCode;
  }
  if (input.Phrases !== undefined) {
    bodyParams["Phrases"] = serializeAws_json1_1Phrases(input.Phrases, context);
  }
  if (input.VocabularyFileUri !== undefined) {
    bodyParams["VocabularyFileUri"] = input.VocabularyFileUri;
  }
  if (input.VocabularyName !== undefined) {
    bodyParams["VocabularyName"] = input.VocabularyName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteTranscriptionJobRequest = (
  input: DeleteTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TranscriptionJobName !== undefined) {
    bodyParams["TranscriptionJobName"] = input.TranscriptionJobName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteVocabularyFilterRequest = (
  input: DeleteVocabularyFilterRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.VocabularyFilterName !== undefined) {
    bodyParams["VocabularyFilterName"] = input.VocabularyFilterName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteVocabularyRequest = (
  input: DeleteVocabularyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.VocabularyName !== undefined) {
    bodyParams["VocabularyName"] = input.VocabularyName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetTranscriptionJobRequest = (
  input: GetTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TranscriptionJobName !== undefined) {
    bodyParams["TranscriptionJobName"] = input.TranscriptionJobName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetVocabularyFilterRequest = (
  input: GetVocabularyFilterRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.VocabularyFilterName !== undefined) {
    bodyParams["VocabularyFilterName"] = input.VocabularyFilterName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetVocabularyRequest = (
  input: GetVocabularyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.VocabularyName !== undefined) {
    bodyParams["VocabularyName"] = input.VocabularyName;
  }
  return bodyParams;
};

const serializeAws_json1_1JobExecutionSettings = (
  input: JobExecutionSettings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AllowDeferredExecution !== undefined) {
    bodyParams["AllowDeferredExecution"] = input.AllowDeferredExecution;
  }
  if (input.DataAccessRoleArn !== undefined) {
    bodyParams["DataAccessRoleArn"] = input.DataAccessRoleArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTranscriptionJobsRequest = (
  input: ListTranscriptionJobsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobNameContains !== undefined) {
    bodyParams["JobNameContains"] = input.JobNameContains;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.Status !== undefined) {
    bodyParams["Status"] = input.Status;
  }
  return bodyParams;
};

const serializeAws_json1_1ListVocabulariesRequest = (
  input: ListVocabulariesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NameContains !== undefined) {
    bodyParams["NameContains"] = input.NameContains;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.StateEquals !== undefined) {
    bodyParams["StateEquals"] = input.StateEquals;
  }
  return bodyParams;
};

const serializeAws_json1_1ListVocabularyFiltersRequest = (
  input: ListVocabularyFiltersRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NameContains !== undefined) {
    bodyParams["NameContains"] = input.NameContains;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1Media = (
  input: Media,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MediaFileUri !== undefined) {
    bodyParams["MediaFileUri"] = input.MediaFileUri;
  }
  return bodyParams;
};

const serializeAws_json1_1Phrases = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1Settings = (
  input: Settings,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ChannelIdentification !== undefined) {
    bodyParams["ChannelIdentification"] = input.ChannelIdentification;
  }
  if (input.MaxAlternatives !== undefined) {
    bodyParams["MaxAlternatives"] = input.MaxAlternatives;
  }
  if (input.MaxSpeakerLabels !== undefined) {
    bodyParams["MaxSpeakerLabels"] = input.MaxSpeakerLabels;
  }
  if (input.ShowAlternatives !== undefined) {
    bodyParams["ShowAlternatives"] = input.ShowAlternatives;
  }
  if (input.ShowSpeakerLabels !== undefined) {
    bodyParams["ShowSpeakerLabels"] = input.ShowSpeakerLabels;
  }
  if (input.VocabularyFilterMethod !== undefined) {
    bodyParams["VocabularyFilterMethod"] = input.VocabularyFilterMethod;
  }
  if (input.VocabularyFilterName !== undefined) {
    bodyParams["VocabularyFilterName"] = input.VocabularyFilterName;
  }
  if (input.VocabularyName !== undefined) {
    bodyParams["VocabularyName"] = input.VocabularyName;
  }
  return bodyParams;
};

const serializeAws_json1_1StartTranscriptionJobRequest = (
  input: StartTranscriptionJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobExecutionSettings !== undefined) {
    bodyParams[
      "JobExecutionSettings"
    ] = serializeAws_json1_1JobExecutionSettings(
      input.JobExecutionSettings,
      context
    );
  }
  if (input.LanguageCode !== undefined) {
    bodyParams["LanguageCode"] = input.LanguageCode;
  }
  if (input.Media !== undefined) {
    bodyParams["Media"] = serializeAws_json1_1Media(input.Media, context);
  }
  if (input.MediaFormat !== undefined) {
    bodyParams["MediaFormat"] = input.MediaFormat;
  }
  if (input.MediaSampleRateHertz !== undefined) {
    bodyParams["MediaSampleRateHertz"] = input.MediaSampleRateHertz;
  }
  if (input.OutputBucketName !== undefined) {
    bodyParams["OutputBucketName"] = input.OutputBucketName;
  }
  if (input.OutputEncryptionKMSKeyId !== undefined) {
    bodyParams["OutputEncryptionKMSKeyId"] = input.OutputEncryptionKMSKeyId;
  }
  if (input.Settings !== undefined) {
    bodyParams["Settings"] = serializeAws_json1_1Settings(
      input.Settings,
      context
    );
  }
  if (input.TranscriptionJobName !== undefined) {
    bodyParams["TranscriptionJobName"] = input.TranscriptionJobName;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateVocabularyFilterRequest = (
  input: UpdateVocabularyFilterRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.VocabularyFilterFileUri !== undefined) {
    bodyParams["VocabularyFilterFileUri"] = input.VocabularyFilterFileUri;
  }
  if (input.VocabularyFilterName !== undefined) {
    bodyParams["VocabularyFilterName"] = input.VocabularyFilterName;
  }
  if (input.Words !== undefined) {
    bodyParams["Words"] = serializeAws_json1_1Words(input.Words, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateVocabularyRequest = (
  input: UpdateVocabularyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LanguageCode !== undefined) {
    bodyParams["LanguageCode"] = input.LanguageCode;
  }
  if (input.Phrases !== undefined) {
    bodyParams["Phrases"] = serializeAws_json1_1Phrases(input.Phrases, context);
  }
  if (input.VocabularyFileUri !== undefined) {
    bodyParams["VocabularyFileUri"] = input.VocabularyFileUri;
  }
  if (input.VocabularyName !== undefined) {
    bodyParams["VocabularyName"] = input.VocabularyName;
  }
  return bodyParams;
};

const serializeAws_json1_1Words = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const deserializeAws_json1_1BadRequestException = (
  output: any,
  context: __SerdeContext
): BadRequestException => {
  let contents: any = {
    __type: "BadRequestException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ConflictException = (
  output: any,
  context: __SerdeContext
): ConflictException => {
  let contents: any = {
    __type: "ConflictException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CreateVocabularyFilterResponse = (
  output: any,
  context: __SerdeContext
): CreateVocabularyFilterResponse => {
  let contents: any = {
    __type: "CreateVocabularyFilterResponse",
    LanguageCode: undefined,
    LastModifiedTime: undefined,
    VocabularyFilterName: undefined
  };
  if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (
    output.LastModifiedTime !== undefined &&
    output.LastModifiedTime !== null
  ) {
    contents.LastModifiedTime = new Date(
      Math.round(output.LastModifiedTime * 1000)
    );
  }
  if (
    output.VocabularyFilterName !== undefined &&
    output.VocabularyFilterName !== null
  ) {
    contents.VocabularyFilterName = output.VocabularyFilterName;
  }
  return contents;
};

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
    VocabularyState: undefined
  };
  if (output.FailureReason !== undefined && output.FailureReason !== null) {
    contents.FailureReason = output.FailureReason;
  }
  if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (
    output.LastModifiedTime !== undefined &&
    output.LastModifiedTime !== null
  ) {
    contents.LastModifiedTime = new Date(
      Math.round(output.LastModifiedTime * 1000)
    );
  }
  if (output.VocabularyName !== undefined && output.VocabularyName !== null) {
    contents.VocabularyName = output.VocabularyName;
  }
  if (output.VocabularyState !== undefined && output.VocabularyState !== null) {
    contents.VocabularyState = output.VocabularyState;
  }
  return contents;
};

const deserializeAws_json1_1GetTranscriptionJobResponse = (
  output: any,
  context: __SerdeContext
): GetTranscriptionJobResponse => {
  let contents: any = {
    __type: "GetTranscriptionJobResponse",
    TranscriptionJob: undefined
  };
  if (
    output.TranscriptionJob !== undefined &&
    output.TranscriptionJob !== null
  ) {
    contents.TranscriptionJob = deserializeAws_json1_1TranscriptionJob(
      output.TranscriptionJob,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetVocabularyFilterResponse = (
  output: any,
  context: __SerdeContext
): GetVocabularyFilterResponse => {
  let contents: any = {
    __type: "GetVocabularyFilterResponse",
    DownloadUri: undefined,
    LanguageCode: undefined,
    LastModifiedTime: undefined,
    VocabularyFilterName: undefined
  };
  if (output.DownloadUri !== undefined && output.DownloadUri !== null) {
    contents.DownloadUri = output.DownloadUri;
  }
  if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (
    output.LastModifiedTime !== undefined &&
    output.LastModifiedTime !== null
  ) {
    contents.LastModifiedTime = new Date(
      Math.round(output.LastModifiedTime * 1000)
    );
  }
  if (
    output.VocabularyFilterName !== undefined &&
    output.VocabularyFilterName !== null
  ) {
    contents.VocabularyFilterName = output.VocabularyFilterName;
  }
  return contents;
};

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
    VocabularyState: undefined
  };
  if (output.DownloadUri !== undefined && output.DownloadUri !== null) {
    contents.DownloadUri = output.DownloadUri;
  }
  if (output.FailureReason !== undefined && output.FailureReason !== null) {
    contents.FailureReason = output.FailureReason;
  }
  if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (
    output.LastModifiedTime !== undefined &&
    output.LastModifiedTime !== null
  ) {
    contents.LastModifiedTime = new Date(
      Math.round(output.LastModifiedTime * 1000)
    );
  }
  if (output.VocabularyName !== undefined && output.VocabularyName !== null) {
    contents.VocabularyName = output.VocabularyName;
  }
  if (output.VocabularyState !== undefined && output.VocabularyState !== null) {
    contents.VocabularyState = output.VocabularyState;
  }
  return contents;
};

const deserializeAws_json1_1InternalFailureException = (
  output: any,
  context: __SerdeContext
): InternalFailureException => {
  let contents: any = {
    __type: "InternalFailureException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1JobExecutionSettings = (
  output: any,
  context: __SerdeContext
): JobExecutionSettings => {
  let contents: any = {
    __type: "JobExecutionSettings",
    AllowDeferredExecution: undefined,
    DataAccessRoleArn: undefined
  };
  if (
    output.AllowDeferredExecution !== undefined &&
    output.AllowDeferredExecution !== null
  ) {
    contents.AllowDeferredExecution = output.AllowDeferredExecution;
  }
  if (
    output.DataAccessRoleArn !== undefined &&
    output.DataAccessRoleArn !== null
  ) {
    contents.DataAccessRoleArn = output.DataAccessRoleArn;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListTranscriptionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListTranscriptionJobsResponse => {
  let contents: any = {
    __type: "ListTranscriptionJobsResponse",
    NextToken: undefined,
    Status: undefined,
    TranscriptionJobSummaries: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (
    output.TranscriptionJobSummaries !== undefined &&
    output.TranscriptionJobSummaries !== null
  ) {
    contents.TranscriptionJobSummaries = deserializeAws_json1_1TranscriptionJobSummaries(
      output.TranscriptionJobSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListVocabulariesResponse = (
  output: any,
  context: __SerdeContext
): ListVocabulariesResponse => {
  let contents: any = {
    __type: "ListVocabulariesResponse",
    NextToken: undefined,
    Status: undefined,
    Vocabularies: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.Vocabularies !== undefined && output.Vocabularies !== null) {
    contents.Vocabularies = deserializeAws_json1_1Vocabularies(
      output.Vocabularies,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListVocabularyFiltersResponse = (
  output: any,
  context: __SerdeContext
): ListVocabularyFiltersResponse => {
  let contents: any = {
    __type: "ListVocabularyFiltersResponse",
    NextToken: undefined,
    VocabularyFilters: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.VocabularyFilters !== undefined &&
    output.VocabularyFilters !== null
  ) {
    contents.VocabularyFilters = deserializeAws_json1_1VocabularyFilters(
      output.VocabularyFilters,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Media = (
  output: any,
  context: __SerdeContext
): Media => {
  let contents: any = {
    __type: "Media",
    MediaFileUri: undefined
  };
  if (output.MediaFileUri !== undefined && output.MediaFileUri !== null) {
    contents.MediaFileUri = output.MediaFileUri;
  }
  return contents;
};

const deserializeAws_json1_1NotFoundException = (
  output: any,
  context: __SerdeContext
): NotFoundException => {
  let contents: any = {
    __type: "NotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

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
    VocabularyFilterMethod: undefined,
    VocabularyFilterName: undefined,
    VocabularyName: undefined
  };
  if (
    output.ChannelIdentification !== undefined &&
    output.ChannelIdentification !== null
  ) {
    contents.ChannelIdentification = output.ChannelIdentification;
  }
  if (output.MaxAlternatives !== undefined && output.MaxAlternatives !== null) {
    contents.MaxAlternatives = output.MaxAlternatives;
  }
  if (
    output.MaxSpeakerLabels !== undefined &&
    output.MaxSpeakerLabels !== null
  ) {
    contents.MaxSpeakerLabels = output.MaxSpeakerLabels;
  }
  if (
    output.ShowAlternatives !== undefined &&
    output.ShowAlternatives !== null
  ) {
    contents.ShowAlternatives = output.ShowAlternatives;
  }
  if (
    output.ShowSpeakerLabels !== undefined &&
    output.ShowSpeakerLabels !== null
  ) {
    contents.ShowSpeakerLabels = output.ShowSpeakerLabels;
  }
  if (
    output.VocabularyFilterMethod !== undefined &&
    output.VocabularyFilterMethod !== null
  ) {
    contents.VocabularyFilterMethod = output.VocabularyFilterMethod;
  }
  if (
    output.VocabularyFilterName !== undefined &&
    output.VocabularyFilterName !== null
  ) {
    contents.VocabularyFilterName = output.VocabularyFilterName;
  }
  if (output.VocabularyName !== undefined && output.VocabularyName !== null) {
    contents.VocabularyName = output.VocabularyName;
  }
  return contents;
};

const deserializeAws_json1_1StartTranscriptionJobResponse = (
  output: any,
  context: __SerdeContext
): StartTranscriptionJobResponse => {
  let contents: any = {
    __type: "StartTranscriptionJobResponse",
    TranscriptionJob: undefined
  };
  if (
    output.TranscriptionJob !== undefined &&
    output.TranscriptionJob !== null
  ) {
    contents.TranscriptionJob = deserializeAws_json1_1TranscriptionJob(
      output.TranscriptionJob,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Transcript = (
  output: any,
  context: __SerdeContext
): Transcript => {
  let contents: any = {
    __type: "Transcript",
    TranscriptFileUri: undefined
  };
  if (
    output.TranscriptFileUri !== undefined &&
    output.TranscriptFileUri !== null
  ) {
    contents.TranscriptFileUri = output.TranscriptFileUri;
  }
  return contents;
};

const deserializeAws_json1_1TranscriptionJob = (
  output: any,
  context: __SerdeContext
): TranscriptionJob => {
  let contents: any = {
    __type: "TranscriptionJob",
    CompletionTime: undefined,
    CreationTime: undefined,
    FailureReason: undefined,
    JobExecutionSettings: undefined,
    LanguageCode: undefined,
    Media: undefined,
    MediaFormat: undefined,
    MediaSampleRateHertz: undefined,
    Settings: undefined,
    StartTime: undefined,
    Transcript: undefined,
    TranscriptionJobName: undefined,
    TranscriptionJobStatus: undefined
  };
  if (output.CompletionTime !== undefined && output.CompletionTime !== null) {
    contents.CompletionTime = new Date(
      Math.round(output.CompletionTime * 1000)
    );
  }
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.FailureReason !== undefined && output.FailureReason !== null) {
    contents.FailureReason = output.FailureReason;
  }
  if (
    output.JobExecutionSettings !== undefined &&
    output.JobExecutionSettings !== null
  ) {
    contents.JobExecutionSettings = deserializeAws_json1_1JobExecutionSettings(
      output.JobExecutionSettings,
      context
    );
  }
  if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (output.Media !== undefined && output.Media !== null) {
    contents.Media = deserializeAws_json1_1Media(output.Media, context);
  }
  if (output.MediaFormat !== undefined && output.MediaFormat !== null) {
    contents.MediaFormat = output.MediaFormat;
  }
  if (
    output.MediaSampleRateHertz !== undefined &&
    output.MediaSampleRateHertz !== null
  ) {
    contents.MediaSampleRateHertz = output.MediaSampleRateHertz;
  }
  if (output.Settings !== undefined && output.Settings !== null) {
    contents.Settings = deserializeAws_json1_1Settings(
      output.Settings,
      context
    );
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  if (output.Transcript !== undefined && output.Transcript !== null) {
    contents.Transcript = deserializeAws_json1_1Transcript(
      output.Transcript,
      context
    );
  }
  if (
    output.TranscriptionJobName !== undefined &&
    output.TranscriptionJobName !== null
  ) {
    contents.TranscriptionJobName = output.TranscriptionJobName;
  }
  if (
    output.TranscriptionJobStatus !== undefined &&
    output.TranscriptionJobStatus !== null
  ) {
    contents.TranscriptionJobStatus = output.TranscriptionJobStatus;
  }
  return contents;
};

const deserializeAws_json1_1TranscriptionJobSummaries = (
  output: any,
  context: __SerdeContext
): Array<TranscriptionJobSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TranscriptionJobSummary(entry, context)
  );
};

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
    StartTime: undefined,
    TranscriptionJobName: undefined,
    TranscriptionJobStatus: undefined
  };
  if (output.CompletionTime !== undefined && output.CompletionTime !== null) {
    contents.CompletionTime = new Date(
      Math.round(output.CompletionTime * 1000)
    );
  }
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.FailureReason !== undefined && output.FailureReason !== null) {
    contents.FailureReason = output.FailureReason;
  }
  if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (
    output.OutputLocationType !== undefined &&
    output.OutputLocationType !== null
  ) {
    contents.OutputLocationType = output.OutputLocationType;
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  if (
    output.TranscriptionJobName !== undefined &&
    output.TranscriptionJobName !== null
  ) {
    contents.TranscriptionJobName = output.TranscriptionJobName;
  }
  if (
    output.TranscriptionJobStatus !== undefined &&
    output.TranscriptionJobStatus !== null
  ) {
    contents.TranscriptionJobStatus = output.TranscriptionJobStatus;
  }
  return contents;
};

const deserializeAws_json1_1UpdateVocabularyFilterResponse = (
  output: any,
  context: __SerdeContext
): UpdateVocabularyFilterResponse => {
  let contents: any = {
    __type: "UpdateVocabularyFilterResponse",
    LanguageCode: undefined,
    LastModifiedTime: undefined,
    VocabularyFilterName: undefined
  };
  if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (
    output.LastModifiedTime !== undefined &&
    output.LastModifiedTime !== null
  ) {
    contents.LastModifiedTime = new Date(
      Math.round(output.LastModifiedTime * 1000)
    );
  }
  if (
    output.VocabularyFilterName !== undefined &&
    output.VocabularyFilterName !== null
  ) {
    contents.VocabularyFilterName = output.VocabularyFilterName;
  }
  return contents;
};

const deserializeAws_json1_1UpdateVocabularyResponse = (
  output: any,
  context: __SerdeContext
): UpdateVocabularyResponse => {
  let contents: any = {
    __type: "UpdateVocabularyResponse",
    LanguageCode: undefined,
    LastModifiedTime: undefined,
    VocabularyName: undefined,
    VocabularyState: undefined
  };
  if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (
    output.LastModifiedTime !== undefined &&
    output.LastModifiedTime !== null
  ) {
    contents.LastModifiedTime = new Date(
      Math.round(output.LastModifiedTime * 1000)
    );
  }
  if (output.VocabularyName !== undefined && output.VocabularyName !== null) {
    contents.VocabularyName = output.VocabularyName;
  }
  if (output.VocabularyState !== undefined && output.VocabularyState !== null) {
    contents.VocabularyState = output.VocabularyState;
  }
  return contents;
};

const deserializeAws_json1_1Vocabularies = (
  output: any,
  context: __SerdeContext
): Array<VocabularyInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1VocabularyInfo(entry, context)
  );
};

const deserializeAws_json1_1VocabularyFilterInfo = (
  output: any,
  context: __SerdeContext
): VocabularyFilterInfo => {
  let contents: any = {
    __type: "VocabularyFilterInfo",
    LanguageCode: undefined,
    LastModifiedTime: undefined,
    VocabularyFilterName: undefined
  };
  if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (
    output.LastModifiedTime !== undefined &&
    output.LastModifiedTime !== null
  ) {
    contents.LastModifiedTime = new Date(
      Math.round(output.LastModifiedTime * 1000)
    );
  }
  if (
    output.VocabularyFilterName !== undefined &&
    output.VocabularyFilterName !== null
  ) {
    contents.VocabularyFilterName = output.VocabularyFilterName;
  }
  return contents;
};

const deserializeAws_json1_1VocabularyFilters = (
  output: any,
  context: __SerdeContext
): Array<VocabularyFilterInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1VocabularyFilterInfo(entry, context)
  );
};

const deserializeAws_json1_1VocabularyInfo = (
  output: any,
  context: __SerdeContext
): VocabularyInfo => {
  let contents: any = {
    __type: "VocabularyInfo",
    LanguageCode: undefined,
    LastModifiedTime: undefined,
    VocabularyName: undefined,
    VocabularyState: undefined
  };
  if (output.LanguageCode !== undefined && output.LanguageCode !== null) {
    contents.LanguageCode = output.LanguageCode;
  }
  if (
    output.LastModifiedTime !== undefined &&
    output.LastModifiedTime !== null
  ) {
    contents.LastModifiedTime = new Date(
      Math.round(output.LastModifiedTime * 1000)
    );
  }
  if (output.VocabularyName !== undefined && output.VocabularyName !== null) {
    contents.VocabularyName = output.VocabularyName;
  }
  if (output.VocabularyState !== undefined && output.VocabularyState !== null) {
    contents.VocabularyState = output.VocabularyState;
  }
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
