import {
  DeleteTerminologyCommandInput,
  DeleteTerminologyCommandOutput
} from "../commands/DeleteTerminologyCommand";
import {
  GetTerminologyCommandInput,
  GetTerminologyCommandOutput
} from "../commands/GetTerminologyCommand";
import {
  ImportTerminologyCommandInput,
  ImportTerminologyCommandOutput
} from "../commands/ImportTerminologyCommand";
import {
  ListTerminologiesCommandInput,
  ListTerminologiesCommandOutput
} from "../commands/ListTerminologiesCommand";
import {
  TranslateTextCommandInput,
  TranslateTextCommandOutput
} from "../commands/TranslateTextCommand";
import {
  AppliedTerminology,
  DeleteTerminologyRequest,
  DetectedLanguageLowConfidenceException,
  EncryptionKey,
  GetTerminologyRequest,
  GetTerminologyResponse,
  ImportTerminologyRequest,
  ImportTerminologyResponse,
  InternalServerException,
  InvalidParameterValueException,
  InvalidRequestException,
  LimitExceededException,
  ListTerminologiesRequest,
  ListTerminologiesResponse,
  ResourceNotFoundException,
  ServiceUnavailableException,
  Term,
  TerminologyData,
  TerminologyDataLocation,
  TerminologyProperties,
  TextSizeLimitExceededException,
  TooManyRequestsException,
  TranslateTextRequest,
  TranslateTextResponse,
  UnsupportedLanguagePairException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1DeleteTerminologyCommand(
  input: DeleteTerminologyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSShineFrontendService_20170701.DeleteTerminology";
  let body: any = {};
  const wrappedBody: any = {
    DeleteTerminologyRequest: serializeAws_json1_1DeleteTerminologyRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteTerminology",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetTerminologyCommand(
  input: GetTerminologyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShineFrontendService_20170701.GetTerminology";
  let body: any = {};
  const wrappedBody: any = {
    GetTerminologyRequest: serializeAws_json1_1GetTerminologyRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetTerminology",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ImportTerminologyCommand(
  input: ImportTerminologyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSShineFrontendService_20170701.ImportTerminology";
  let body: any = {};
  const wrappedBody: any = {
    ImportTerminologyRequest: serializeAws_json1_1ImportTerminologyRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ImportTerminology",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTerminologiesCommand(
  input: ListTerminologiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSShineFrontendService_20170701.ListTerminologies";
  let body: any = {};
  const wrappedBody: any = {
    ListTerminologiesRequest: serializeAws_json1_1ListTerminologiesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTerminologies",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TranslateTextCommand(
  input: TranslateTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShineFrontendService_20170701.TranslateText";
  let body: any = {};
  const wrappedBody: any = {
    TranslateTextRequest: serializeAws_json1_1TranslateTextRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TranslateText",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1DeleteTerminologyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTerminologyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTerminologyCommandError(output, context);
  }
  const response: DeleteTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteTerminologyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTerminologyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.shine#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shine#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.shine#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.shine#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1GetTerminologyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTerminologyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTerminologyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTerminologyResponse(data, context);
  const response: GetTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTerminologyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetTerminologyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTerminologyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.shine#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.shine#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shine#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.shine#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.shine#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ImportTerminologyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportTerminologyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportTerminologyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportTerminologyResponse(data, context);
  const response: ImportTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportTerminologyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ImportTerminologyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportTerminologyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.shine#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.shine#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.shine#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.shine#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.shine#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListTerminologiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTerminologiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTerminologiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTerminologiesResponse(data, context);
  const response: ListTerminologiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTerminologiesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTerminologiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTerminologiesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.shine#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.shine#InvalidParameterValueException":
      response = await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.shine#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.shine#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1TranslateTextCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TranslateTextCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TranslateTextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TranslateTextResponse(data, context);
  const response: TranslateTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TranslateTextResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TranslateTextCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TranslateTextCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DetectedLanguageLowConfidenceException":
    case "com.amazonaws.shine#DetectedLanguageLowConfidenceException":
      response = await deserializeAws_json1_1DetectedLanguageLowConfidenceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.shine#InternalServerException":
      response = await deserializeAws_json1_1InternalServerExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.shine#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shine#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.shine#ServiceUnavailableException":
      response = await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.shine#TextSizeLimitExceededException":
      response = await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.shine#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedLanguagePairException":
    case "com.amazonaws.shine#UnsupportedLanguagePairException":
      response = await deserializeAws_json1_1UnsupportedLanguagePairExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.shine#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

const deserializeAws_json1_1DetectedLanguageLowConfidenceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DetectedLanguageLowConfidenceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DetectedLanguageLowConfidenceException(
    body,
    context
  );
  const contents: DetectedLanguageLowConfidenceException = {
    __type: "DetectedLanguageLowConfidenceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(
    body,
    context
  );
  const contents: InternalServerException = {
    __type: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterValueException(
    body,
    context
  );
  const contents: InvalidParameterValueException = {
    __type: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(
    body,
    context
  );
  const contents: InvalidRequestException = {
    __type: "InvalidRequestException",
    $fault: "client",
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
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(
    body,
    context
  );
  const contents: ServiceUnavailableException = {
    __type: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TextSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TextSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TextSizeLimitExceededException(
    body,
    context
  );
  const contents: TextSizeLimitExceededException = {
    __type: "TextSizeLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(
    body,
    context
  );
  const contents: TooManyRequestsException = {
    __type: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedLanguagePairExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedLanguagePairException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedLanguagePairException(
    body,
    context
  );
  const contents: UnsupportedLanguagePairException = {
    __type: "UnsupportedLanguagePairException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1DeleteTerminologyRequest = (
  input: DeleteTerminologyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1EncryptionKey = (
  input: EncryptionKey,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1GetTerminologyRequest = (
  input: GetTerminologyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.TerminologyDataFormat !== undefined) {
    bodyParams["TerminologyDataFormat"] = input.TerminologyDataFormat;
  }
  return bodyParams;
};

const serializeAws_json1_1ImportTerminologyRequest = (
  input: ImportTerminologyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.EncryptionKey !== undefined) {
    bodyParams["EncryptionKey"] = serializeAws_json1_1EncryptionKey(
      input.EncryptionKey,
      context
    );
  }
  if (input.MergeStrategy !== undefined) {
    bodyParams["MergeStrategy"] = input.MergeStrategy;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.TerminologyData !== undefined) {
    bodyParams["TerminologyData"] = serializeAws_json1_1TerminologyData(
      input.TerminologyData,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ListTerminologiesRequest = (
  input: ListTerminologiesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ResourceNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TerminologyData = (
  input: TerminologyData,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.File !== undefined) {
    bodyParams["File"] = context.base64Encoder(input.File);
  }
  if (input.Format !== undefined) {
    bodyParams["Format"] = input.Format;
  }
  return bodyParams;
};

const serializeAws_json1_1TranslateTextRequest = (
  input: TranslateTextRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.SourceLanguageCode !== undefined) {
    bodyParams["SourceLanguageCode"] = input.SourceLanguageCode;
  }
  if (input.TargetLanguageCode !== undefined) {
    bodyParams["TargetLanguageCode"] = input.TargetLanguageCode;
  }
  if (input.TerminologyNames !== undefined) {
    bodyParams["TerminologyNames"] = serializeAws_json1_1ResourceNameList(
      input.TerminologyNames,
      context
    );
  }
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  return bodyParams;
};

const deserializeAws_json1_1AppliedTerminology = (
  output: any,
  context: __SerdeContext
): AppliedTerminology => {
  let contents: any = {
    __type: "AppliedTerminology",
    Name: undefined,
    Terms: undefined
  };
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Terms !== undefined) {
    contents.Terms = deserializeAws_json1_1TermList(output.Terms, context);
  }
  return contents;
};

const deserializeAws_json1_1AppliedTerminologyList = (
  output: any,
  context: __SerdeContext
): Array<AppliedTerminology> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AppliedTerminology(entry, context)
  );
};

const deserializeAws_json1_1DetectedLanguageLowConfidenceException = (
  output: any,
  context: __SerdeContext
): DetectedLanguageLowConfidenceException => {
  let contents: any = {
    __type: "DetectedLanguageLowConfidenceException",
    DetectedLanguageCode: undefined,
    Message: undefined
  };
  if (output.DetectedLanguageCode !== undefined) {
    contents.DetectedLanguageCode = output.DetectedLanguageCode;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1EncryptionKey = (
  output: any,
  context: __SerdeContext
): EncryptionKey => {
  let contents: any = {
    __type: "EncryptionKey",
    Id: undefined,
    Type: undefined
  };
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1GetTerminologyResponse = (
  output: any,
  context: __SerdeContext
): GetTerminologyResponse => {
  let contents: any = {
    __type: "GetTerminologyResponse",
    TerminologyDataLocation: undefined,
    TerminologyProperties: undefined
  };
  if (output.TerminologyDataLocation !== undefined) {
    contents.TerminologyDataLocation = deserializeAws_json1_1TerminologyDataLocation(
      output.TerminologyDataLocation,
      context
    );
  }
  if (output.TerminologyProperties !== undefined) {
    contents.TerminologyProperties = deserializeAws_json1_1TerminologyProperties(
      output.TerminologyProperties,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ImportTerminologyResponse = (
  output: any,
  context: __SerdeContext
): ImportTerminologyResponse => {
  let contents: any = {
    __type: "ImportTerminologyResponse",
    TerminologyProperties: undefined
  };
  if (output.TerminologyProperties !== undefined) {
    contents.TerminologyProperties = deserializeAws_json1_1TerminologyProperties(
      output.TerminologyProperties,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  let contents: any = {
    __type: "InternalServerException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  let contents: any = {
    __type: "InvalidParameterValueException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  let contents: any = {
    __type: "InvalidRequestException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1LanguageCodeStringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListTerminologiesResponse = (
  output: any,
  context: __SerdeContext
): ListTerminologiesResponse => {
  let contents: any = {
    __type: "ListTerminologiesResponse",
    NextToken: undefined,
    TerminologyPropertiesList: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.TerminologyPropertiesList !== undefined) {
    contents.TerminologyPropertiesList = deserializeAws_json1_1TerminologyPropertiesList(
      output.TerminologyPropertiesList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  let contents: any = {
    __type: "ServiceUnavailableException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Term = (
  output: any,
  context: __SerdeContext
): Term => {
  let contents: any = {
    __type: "Term",
    SourceText: undefined,
    TargetText: undefined
  };
  if (output.SourceText !== undefined) {
    contents.SourceText = output.SourceText;
  }
  if (output.TargetText !== undefined) {
    contents.TargetText = output.TargetText;
  }
  return contents;
};

const deserializeAws_json1_1TermList = (
  output: any,
  context: __SerdeContext
): Array<Term> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Term(entry, context)
  );
};

const deserializeAws_json1_1TerminologyDataLocation = (
  output: any,
  context: __SerdeContext
): TerminologyDataLocation => {
  let contents: any = {
    __type: "TerminologyDataLocation",
    Location: undefined,
    RepositoryType: undefined
  };
  if (output.Location !== undefined) {
    contents.Location = output.Location;
  }
  if (output.RepositoryType !== undefined) {
    contents.RepositoryType = output.RepositoryType;
  }
  return contents;
};

const deserializeAws_json1_1TerminologyProperties = (
  output: any,
  context: __SerdeContext
): TerminologyProperties => {
  let contents: any = {
    __type: "TerminologyProperties",
    Arn: undefined,
    CreatedAt: undefined,
    Description: undefined,
    EncryptionKey: undefined,
    LastUpdatedAt: undefined,
    Name: undefined,
    SizeBytes: undefined,
    SourceLanguageCode: undefined,
    TargetLanguageCodes: undefined,
    TermCount: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.CreatedAt !== undefined) {
    contents.CreatedAt = new Date(
      output.CreatedAt % 1 != 0
        ? Math.round(output.CreatedAt * 1000)
        : output.CreatedAt
    );
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.EncryptionKey !== undefined) {
    contents.EncryptionKey = deserializeAws_json1_1EncryptionKey(
      output.EncryptionKey,
      context
    );
  }
  if (output.LastUpdatedAt !== undefined) {
    contents.LastUpdatedAt = new Date(
      output.LastUpdatedAt % 1 != 0
        ? Math.round(output.LastUpdatedAt * 1000)
        : output.LastUpdatedAt
    );
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.SizeBytes !== undefined) {
    contents.SizeBytes = output.SizeBytes;
  }
  if (output.SourceLanguageCode !== undefined) {
    contents.SourceLanguageCode = output.SourceLanguageCode;
  }
  if (output.TargetLanguageCodes !== undefined) {
    contents.TargetLanguageCodes = deserializeAws_json1_1LanguageCodeStringList(
      output.TargetLanguageCodes,
      context
    );
  }
  if (output.TermCount !== undefined) {
    contents.TermCount = output.TermCount;
  }
  return contents;
};

const deserializeAws_json1_1TerminologyPropertiesList = (
  output: any,
  context: __SerdeContext
): Array<TerminologyProperties> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TerminologyProperties(entry, context)
  );
};

const deserializeAws_json1_1TextSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): TextSizeLimitExceededException => {
  let contents: any = {
    __type: "TextSizeLimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  let contents: any = {
    __type: "TooManyRequestsException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1TranslateTextResponse = (
  output: any,
  context: __SerdeContext
): TranslateTextResponse => {
  let contents: any = {
    __type: "TranslateTextResponse",
    AppliedTerminologies: undefined,
    SourceLanguageCode: undefined,
    TargetLanguageCode: undefined,
    TranslatedText: undefined
  };
  if (output.AppliedTerminologies !== undefined) {
    contents.AppliedTerminologies = deserializeAws_json1_1AppliedTerminologyList(
      output.AppliedTerminologies,
      context
    );
  }
  if (output.SourceLanguageCode !== undefined) {
    contents.SourceLanguageCode = output.SourceLanguageCode;
  }
  if (output.TargetLanguageCode !== undefined) {
    contents.TargetLanguageCode = output.TargetLanguageCode;
  }
  if (output.TranslatedText !== undefined) {
    contents.TranslatedText = output.TranslatedText;
  }
  return contents;
};

const deserializeAws_json1_1UnsupportedLanguagePairException = (
  output: any,
  context: __SerdeContext
): UnsupportedLanguagePairException => {
  let contents: any = {
    __type: "UnsupportedLanguagePairException",
    Message: undefined,
    SourceLanguageCode: undefined,
    TargetLanguageCode: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.SourceLanguageCode !== undefined) {
    contents.SourceLanguageCode = output.SourceLanguageCode;
  }
  if (output.TargetLanguageCode !== undefined) {
    contents.TargetLanguageCode = output.TargetLanguageCode;
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
  return context.streamCollector(streamBody) || new Uint8Array();
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
