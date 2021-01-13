import {
  CreateFHIRDatastoreCommandInput,
  CreateFHIRDatastoreCommandOutput,
} from "../commands/CreateFHIRDatastoreCommand";
import {
  DeleteFHIRDatastoreCommandInput,
  DeleteFHIRDatastoreCommandOutput,
} from "../commands/DeleteFHIRDatastoreCommand";
import {
  DescribeFHIRDatastoreCommandInput,
  DescribeFHIRDatastoreCommandOutput,
} from "../commands/DescribeFHIRDatastoreCommand";
import {
  DescribeFHIRImportJobCommandInput,
  DescribeFHIRImportJobCommandOutput,
} from "../commands/DescribeFHIRImportJobCommand";
import { ListFHIRDatastoresCommandInput, ListFHIRDatastoresCommandOutput } from "../commands/ListFHIRDatastoresCommand";
import { StartFHIRImportJobCommandInput, StartFHIRImportJobCommandOutput } from "../commands/StartFHIRImportJobCommand";
import {
  AccessDeniedException,
  ConflictException,
  CreateFHIRDatastoreRequest,
  CreateFHIRDatastoreResponse,
  DatastoreFilter,
  DatastoreProperties,
  DeleteFHIRDatastoreRequest,
  DeleteFHIRDatastoreResponse,
  DescribeFHIRDatastoreRequest,
  DescribeFHIRDatastoreResponse,
  DescribeFHIRImportJobRequest,
  DescribeFHIRImportJobResponse,
  ImportJobProperties,
  InputDataConfig,
  InternalServerException,
  ListFHIRDatastoresRequest,
  ListFHIRDatastoresResponse,
  PreloadDataConfig,
  ResourceNotFoundException,
  StartFHIRImportJobRequest,
  StartFHIRImportJobResponse,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_0CreateFHIRDatastoreCommand = async (
  input: CreateFHIRDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.CreateFHIRDatastore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateFHIRDatastoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteFHIRDatastoreCommand = async (
  input: DeleteFHIRDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.DeleteFHIRDatastore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteFHIRDatastoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeFHIRDatastoreCommand = async (
  input: DescribeFHIRDatastoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.DescribeFHIRDatastore",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeFHIRDatastoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeFHIRImportJobCommand = async (
  input: DescribeFHIRImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.DescribeFHIRImportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeFHIRImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListFHIRDatastoresCommand = async (
  input: ListFHIRDatastoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.ListFHIRDatastores",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListFHIRDatastoresRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StartFHIRImportJobCommand = async (
  input: StartFHIRImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "HealthLake.StartFHIRImportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StartFHIRImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0CreateFHIRDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFHIRDatastoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateFHIRDatastoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateFHIRDatastoreResponse(data, context);
  const response: CreateFHIRDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateFHIRDatastoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFHIRDatastoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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

export const deserializeAws_json1_0DeleteFHIRDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFHIRDatastoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteFHIRDatastoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteFHIRDatastoreResponse(data, context);
  const response: DeleteFHIRDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteFHIRDatastoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFHIRDatastoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.healthlake#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.healthlake#ConflictException":
      response = {
        ...(await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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

export const deserializeAws_json1_0DescribeFHIRDatastoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFHIRDatastoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeFHIRDatastoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeFHIRDatastoreResponse(data, context);
  const response: DescribeFHIRDatastoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeFHIRDatastoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFHIRDatastoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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

export const deserializeAws_json1_0DescribeFHIRImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFHIRImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeFHIRImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeFHIRImportJobResponse(data, context);
  const response: DescribeFHIRImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeFHIRImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFHIRImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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

export const deserializeAws_json1_0ListFHIRDatastoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFHIRDatastoresCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListFHIRDatastoresCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListFHIRDatastoresResponse(data, context);
  const response: ListFHIRDatastoresCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListFHIRDatastoresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFHIRDatastoresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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

export const deserializeAws_json1_0StartFHIRImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFHIRImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StartFHIRImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StartFHIRImportJobResponse(data, context);
  const response: StartFHIRImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StartFHIRImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFHIRImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.healthlake#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.healthlake#InternalServerException":
      response = {
        ...(await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.healthlake#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.healthlake#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.healthlake#ValidationException":
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

const serializeAws_json1_0CreateFHIRDatastoreRequest = (
  input: CreateFHIRDatastoreRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DatastoreName !== undefined && input.DatastoreName !== null && { DatastoreName: input.DatastoreName }),
    ...(input.DatastoreTypeVersion !== undefined &&
      input.DatastoreTypeVersion !== null && { DatastoreTypeVersion: input.DatastoreTypeVersion }),
    ...(input.PreloadDataConfig !== undefined &&
      input.PreloadDataConfig !== null && {
        PreloadDataConfig: serializeAws_json1_0PreloadDataConfig(input.PreloadDataConfig, context),
      }),
  };
};

const serializeAws_json1_0DatastoreFilter = (input: DatastoreFilter, context: __SerdeContext): any => {
  return {
    ...(input.CreatedAfter !== undefined &&
      input.CreatedAfter !== null && { CreatedAfter: Math.round(input.CreatedAfter.getTime() / 1000) }),
    ...(input.CreatedBefore !== undefined &&
      input.CreatedBefore !== null && { CreatedBefore: Math.round(input.CreatedBefore.getTime() / 1000) }),
    ...(input.DatastoreName !== undefined && input.DatastoreName !== null && { DatastoreName: input.DatastoreName }),
    ...(input.DatastoreStatus !== undefined &&
      input.DatastoreStatus !== null && { DatastoreStatus: input.DatastoreStatus }),
  };
};

const serializeAws_json1_0DeleteFHIRDatastoreRequest = (
  input: DeleteFHIRDatastoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatastoreId !== undefined && input.DatastoreId !== null && { DatastoreId: input.DatastoreId }),
  };
};

const serializeAws_json1_0DescribeFHIRDatastoreRequest = (
  input: DescribeFHIRDatastoreRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatastoreId !== undefined && input.DatastoreId !== null && { DatastoreId: input.DatastoreId }),
  };
};

const serializeAws_json1_0DescribeFHIRImportJobRequest = (
  input: DescribeFHIRImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatastoreId !== undefined && input.DatastoreId !== null && { DatastoreId: input.DatastoreId }),
    ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
  };
};

const serializeAws_json1_0InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return InputDataConfig.visit(input, {
    S3Uri: (value) => ({ S3Uri: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_json1_0ListFHIRDatastoresRequest = (
  input: ListFHIRDatastoresRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined &&
      input.Filter !== null && { Filter: serializeAws_json1_0DatastoreFilter(input.Filter, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0PreloadDataConfig = (input: PreloadDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.PreloadDataType !== undefined &&
      input.PreloadDataType !== null && { PreloadDataType: input.PreloadDataType }),
  };
};

const serializeAws_json1_0StartFHIRImportJobRequest = (
  input: StartFHIRImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DataAccessRoleArn !== undefined &&
      input.DataAccessRoleArn !== null && { DataAccessRoleArn: input.DataAccessRoleArn }),
    ...(input.DatastoreId !== undefined && input.DatastoreId !== null && { DatastoreId: input.DatastoreId }),
    ...(input.InputDataConfig !== undefined &&
      input.InputDataConfig !== null && {
        InputDataConfig: serializeAws_json1_0InputDataConfig(input.InputDataConfig, context),
      }),
    ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
  };
};

const deserializeAws_json1_0AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_0ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_0CreateFHIRDatastoreResponse = (
  output: any,
  context: __SerdeContext
): CreateFHIRDatastoreResponse => {
  return {
    DatastoreArn: output.DatastoreArn !== undefined && output.DatastoreArn !== null ? output.DatastoreArn : undefined,
    DatastoreEndpoint:
      output.DatastoreEndpoint !== undefined && output.DatastoreEndpoint !== null
        ? output.DatastoreEndpoint
        : undefined,
    DatastoreId: output.DatastoreId !== undefined && output.DatastoreId !== null ? output.DatastoreId : undefined,
    DatastoreStatus:
      output.DatastoreStatus !== undefined && output.DatastoreStatus !== null ? output.DatastoreStatus : undefined,
  } as any;
};

const deserializeAws_json1_0DatastoreProperties = (output: any, context: __SerdeContext): DatastoreProperties => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    DatastoreArn: output.DatastoreArn !== undefined && output.DatastoreArn !== null ? output.DatastoreArn : undefined,
    DatastoreEndpoint:
      output.DatastoreEndpoint !== undefined && output.DatastoreEndpoint !== null
        ? output.DatastoreEndpoint
        : undefined,
    DatastoreId: output.DatastoreId !== undefined && output.DatastoreId !== null ? output.DatastoreId : undefined,
    DatastoreName:
      output.DatastoreName !== undefined && output.DatastoreName !== null ? output.DatastoreName : undefined,
    DatastoreStatus:
      output.DatastoreStatus !== undefined && output.DatastoreStatus !== null ? output.DatastoreStatus : undefined,
    DatastoreTypeVersion:
      output.DatastoreTypeVersion !== undefined && output.DatastoreTypeVersion !== null
        ? output.DatastoreTypeVersion
        : undefined,
    PreloadDataConfig:
      output.PreloadDataConfig !== undefined && output.PreloadDataConfig !== null
        ? deserializeAws_json1_0PreloadDataConfig(output.PreloadDataConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DatastorePropertiesList = (output: any, context: __SerdeContext): DatastoreProperties[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0DatastoreProperties(entry, context);
    });
};

const deserializeAws_json1_0DeleteFHIRDatastoreResponse = (
  output: any,
  context: __SerdeContext
): DeleteFHIRDatastoreResponse => {
  return {
    DatastoreArn: output.DatastoreArn !== undefined && output.DatastoreArn !== null ? output.DatastoreArn : undefined,
    DatastoreEndpoint:
      output.DatastoreEndpoint !== undefined && output.DatastoreEndpoint !== null
        ? output.DatastoreEndpoint
        : undefined,
    DatastoreId: output.DatastoreId !== undefined && output.DatastoreId !== null ? output.DatastoreId : undefined,
    DatastoreStatus:
      output.DatastoreStatus !== undefined && output.DatastoreStatus !== null ? output.DatastoreStatus : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeFHIRDatastoreResponse = (
  output: any,
  context: __SerdeContext
): DescribeFHIRDatastoreResponse => {
  return {
    DatastoreProperties:
      output.DatastoreProperties !== undefined && output.DatastoreProperties !== null
        ? deserializeAws_json1_0DatastoreProperties(output.DatastoreProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeFHIRImportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeFHIRImportJobResponse => {
  return {
    ImportJobProperties:
      output.ImportJobProperties !== undefined && output.ImportJobProperties !== null
        ? deserializeAws_json1_0ImportJobProperties(output.ImportJobProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ImportJobProperties = (output: any, context: __SerdeContext): ImportJobProperties => {
  return {
    DataAccessRoleArn:
      output.DataAccessRoleArn !== undefined && output.DataAccessRoleArn !== null
        ? output.DataAccessRoleArn
        : undefined,
    DatastoreId: output.DatastoreId !== undefined && output.DatastoreId !== null ? output.DatastoreId : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    InputDataConfig:
      output.InputDataConfig !== undefined && output.InputDataConfig !== null
        ? deserializeAws_json1_0InputDataConfig(output.InputDataConfig, context)
        : undefined,
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    SubmitTime:
      output.SubmitTime !== undefined && output.SubmitTime !== null
        ? new Date(Math.round(output.SubmitTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_0InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  if (output.S3Uri !== undefined && output.S3Uri !== null) {
    return {
      S3Uri: output.S3Uri,
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_0ListFHIRDatastoresResponse = (
  output: any,
  context: __SerdeContext
): ListFHIRDatastoresResponse => {
  return {
    DatastorePropertiesList:
      output.DatastorePropertiesList !== undefined && output.DatastorePropertiesList !== null
        ? deserializeAws_json1_0DatastorePropertiesList(output.DatastorePropertiesList, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_0PreloadDataConfig = (output: any, context: __SerdeContext): PreloadDataConfig => {
  return {
    PreloadDataType:
      output.PreloadDataType !== undefined && output.PreloadDataType !== null ? output.PreloadDataType : undefined,
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_0StartFHIRImportJobResponse = (
  output: any,
  context: __SerdeContext
): StartFHIRImportJobResponse => {
  return {
    DatastoreId: output.DatastoreId !== undefined && output.DatastoreId !== null ? output.DatastoreId : undefined,
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
  } as any;
};

const deserializeAws_json1_0ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_0ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
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
