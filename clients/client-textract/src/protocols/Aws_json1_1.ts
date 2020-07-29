import { AnalyzeDocumentCommandInput, AnalyzeDocumentCommandOutput } from "../commands/AnalyzeDocumentCommand";
import { DetectDocumentTextCommandInput, DetectDocumentTextCommandOutput } from "../commands/DetectDocumentTextCommand";
import {
  GetDocumentAnalysisCommandInput,
  GetDocumentAnalysisCommandOutput,
} from "../commands/GetDocumentAnalysisCommand";
import {
  GetDocumentTextDetectionCommandInput,
  GetDocumentTextDetectionCommandOutput,
} from "../commands/GetDocumentTextDetectionCommand";
import {
  StartDocumentAnalysisCommandInput,
  StartDocumentAnalysisCommandOutput,
} from "../commands/StartDocumentAnalysisCommand";
import {
  StartDocumentTextDetectionCommandInput,
  StartDocumentTextDetectionCommandOutput,
} from "../commands/StartDocumentTextDetectionCommand";
import {
  AccessDeniedException,
  AnalyzeDocumentRequest,
  AnalyzeDocumentResponse,
  BadDocumentException,
  Block,
  BoundingBox,
  ContentClassifier,
  DetectDocumentTextRequest,
  DetectDocumentTextResponse,
  Document,
  DocumentLocation,
  DocumentMetadata,
  DocumentTooLargeException,
  EntityType,
  FeatureType,
  Geometry,
  GetDocumentAnalysisRequest,
  GetDocumentAnalysisResponse,
  GetDocumentTextDetectionRequest,
  GetDocumentTextDetectionResponse,
  HumanLoopActivationOutput,
  HumanLoopConfig,
  HumanLoopDataAttributes,
  HumanLoopQuotaExceededException,
  IdempotentParameterMismatchException,
  InternalServerError,
  InvalidJobIdException,
  InvalidParameterException,
  InvalidS3ObjectException,
  LimitExceededException,
  NotificationChannel,
  Point,
  ProvisionedThroughputExceededException,
  Relationship,
  S3Object,
  StartDocumentAnalysisRequest,
  StartDocumentAnalysisResponse,
  StartDocumentTextDetectionRequest,
  StartDocumentTextDetectionResponse,
  ThrottlingException,
  UnsupportedDocumentException,
  Warning,
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { LazyJsonString as __LazyJsonString, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1AnalyzeDocumentCommand = async (
  input: AnalyzeDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Textract.AnalyzeDocument",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AnalyzeDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectDocumentTextCommand = async (
  input: DetectDocumentTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Textract.DetectDocumentText",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetectDocumentTextRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDocumentAnalysisCommand = async (
  input: GetDocumentAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Textract.GetDocumentAnalysis",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDocumentAnalysisRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDocumentTextDetectionCommand = async (
  input: GetDocumentTextDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Textract.GetDocumentTextDetection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDocumentTextDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartDocumentAnalysisCommand = async (
  input: StartDocumentAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Textract.StartDocumentAnalysis",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartDocumentAnalysisRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartDocumentTextDetectionCommand = async (
  input: StartDocumentTextDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Textract.StartDocumentTextDetection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartDocumentTextDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AnalyzeDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeDocumentCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AnalyzeDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AnalyzeDocumentResponse(data, context);
  const response: AnalyzeDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AnalyzeDocumentResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AnalyzeDocumentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeDocumentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      response = {
        ...(await deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      response = {
        ...(await deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "HumanLoopQuotaExceededException":
    case "com.amazonaws.textract#HumanLoopQuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DetectDocumentTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectDocumentTextCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetectDocumentTextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectDocumentTextResponse(data, context);
  const response: DetectDocumentTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DetectDocumentTextResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetectDocumentTextCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectDocumentTextCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      response = {
        ...(await deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      response = {
        ...(await deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDocumentAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentAnalysisCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDocumentAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDocumentAnalysisResponse(data, context);
  const response: GetDocumentAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDocumentAnalysisResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDocumentAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidJobIdException":
    case "com.amazonaws.textract#InvalidJobIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDocumentTextDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentTextDetectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDocumentTextDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDocumentTextDetectionResponse(data, context);
  const response: GetDocumentTextDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDocumentTextDetectionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDocumentTextDetectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentTextDetectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidJobIdException":
    case "com.amazonaws.textract#InvalidJobIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidJobIdExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StartDocumentAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentAnalysisCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartDocumentAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDocumentAnalysisResponse(data, context);
  const response: StartDocumentAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartDocumentAnalysisResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartDocumentAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      response = {
        ...(await deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      response = {
        ...(await deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.textract#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.textract#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StartDocumentTextDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentTextDetectionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartDocumentTextDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDocumentTextDetectionResponse(data, context);
  const response: StartDocumentTextDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartDocumentTextDetectionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartDocumentTextDetectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentTextDetectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      response = {
        ...(await deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      response = {
        ...(await deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.textract#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.textract#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1BadDocumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BadDocumentException(body, context);
  const contents: BadDocumentException = {
    name: "BadDocumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DocumentTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DocumentTooLargeException(body, context);
  const contents: DocumentTooLargeException = {
    name: "DocumentTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HumanLoopQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1HumanLoopQuotaExceededException(body, context);
  const contents: HumanLoopQuotaExceededException = {
    name: "HumanLoopQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
  const contents: IdempotentParameterMismatchException = {
    name: "IdempotentParameterMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(body, context);
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidJobIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidJobIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidJobIdException(body, context);
  const contents: InvalidJobIdException = {
    name: "InvalidJobIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidS3ObjectExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3ObjectException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidS3ObjectException(body, context);
  const contents: InvalidS3ObjectException = {
    name: "InvalidS3ObjectException",
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

const deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ProvisionedThroughputExceededException(body, context);
  const contents: ProvisionedThroughputExceededException = {
    name: "ProvisionedThroughputExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedDocumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedDocumentException(body, context);
  const contents: UnsupportedDocumentException = {
    name: "UnsupportedDocumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AnalyzeDocumentRequest = (input: AnalyzeDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.Document !== undefined && { Document: serializeAws_json1_1Document(input.Document, context) }),
    ...(input.FeatureTypes !== undefined && {
      FeatureTypes: serializeAws_json1_1FeatureTypes(input.FeatureTypes, context),
    }),
    ...(input.HumanLoopConfig !== undefined && {
      HumanLoopConfig: serializeAws_json1_1HumanLoopConfig(input.HumanLoopConfig, context),
    }),
  };
};

const serializeAws_json1_1ContentClassifiers = (
  input: (ContentClassifier | string)[],
  context: __SerdeContext
): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1DetectDocumentTextRequest = (
  input: DetectDocumentTextRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Document !== undefined && { Document: serializeAws_json1_1Document(input.Document, context) }),
  };
};

const serializeAws_json1_1Document = (input: Document, context: __SerdeContext): any => {
  return {
    ...(input.Bytes !== undefined && { Bytes: context.base64Encoder(input.Bytes) }),
    ...(input.S3Object !== undefined && { S3Object: serializeAws_json1_1S3Object(input.S3Object, context) }),
  };
};

const serializeAws_json1_1DocumentLocation = (input: DocumentLocation, context: __SerdeContext): any => {
  return {
    ...(input.S3Object !== undefined && { S3Object: serializeAws_json1_1S3Object(input.S3Object, context) }),
  };
};

const serializeAws_json1_1FeatureTypes = (input: (FeatureType | string)[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1GetDocumentAnalysisRequest = (
  input: GetDocumentAnalysisRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetDocumentTextDetectionRequest = (
  input: GetDocumentTextDetectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && { JobId: input.JobId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1HumanLoopConfig = (input: HumanLoopConfig, context: __SerdeContext): any => {
  return {
    ...(input.DataAttributes !== undefined && {
      DataAttributes: serializeAws_json1_1HumanLoopDataAttributes(input.DataAttributes, context),
    }),
    ...(input.FlowDefinitionArn !== undefined && { FlowDefinitionArn: input.FlowDefinitionArn }),
    ...(input.HumanLoopName !== undefined && { HumanLoopName: input.HumanLoopName }),
  };
};

const serializeAws_json1_1HumanLoopDataAttributes = (input: HumanLoopDataAttributes, context: __SerdeContext): any => {
  return {
    ...(input.ContentClassifiers !== undefined && {
      ContentClassifiers: serializeAws_json1_1ContentClassifiers(input.ContentClassifiers, context),
    }),
  };
};

const serializeAws_json1_1NotificationChannel = (input: NotificationChannel, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.SNSTopicArn !== undefined && { SNSTopicArn: input.SNSTopicArn }),
  };
};

const serializeAws_json1_1S3Object = (input: S3Object, context: __SerdeContext): any => {
  return {
    ...(input.Bucket !== undefined && { Bucket: input.Bucket }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Version !== undefined && { Version: input.Version }),
  };
};

const serializeAws_json1_1StartDocumentAnalysisRequest = (
  input: StartDocumentAnalysisRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken !== undefined && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.DocumentLocation !== undefined && {
      DocumentLocation: serializeAws_json1_1DocumentLocation(input.DocumentLocation, context),
    }),
    ...(input.FeatureTypes !== undefined && {
      FeatureTypes: serializeAws_json1_1FeatureTypes(input.FeatureTypes, context),
    }),
    ...(input.JobTag !== undefined && { JobTag: input.JobTag }),
    ...(input.NotificationChannel !== undefined && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
  };
};

const serializeAws_json1_1StartDocumentTextDetectionRequest = (
  input: StartDocumentTextDetectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken !== undefined && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.DocumentLocation !== undefined && {
      DocumentLocation: serializeAws_json1_1DocumentLocation(input.DocumentLocation, context),
    }),
    ...(input.JobTag !== undefined && { JobTag: input.JobTag }),
    ...(input.NotificationChannel !== undefined && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    __type: "AccessDeniedException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1AnalyzeDocumentResponse = (
  output: any,
  context: __SerdeContext
): AnalyzeDocumentResponse => {
  return {
    __type: "AnalyzeDocumentResponse",
    AnalyzeDocumentModelVersion:
      output.AnalyzeDocumentModelVersion !== undefined && output.AnalyzeDocumentModelVersion !== null
        ? output.AnalyzeDocumentModelVersion
        : undefined,
    Blocks:
      output.Blocks !== undefined && output.Blocks !== null
        ? deserializeAws_json1_1BlockList(output.Blocks, context)
        : undefined,
    DocumentMetadata:
      output.DocumentMetadata !== undefined && output.DocumentMetadata !== null
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
    HumanLoopActivationOutput:
      output.HumanLoopActivationOutput !== undefined && output.HumanLoopActivationOutput !== null
        ? deserializeAws_json1_1HumanLoopActivationOutput(output.HumanLoopActivationOutput, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BadDocumentException = (output: any, context: __SerdeContext): BadDocumentException => {
  return {
    __type: "BadDocumentException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1Block = (output: any, context: __SerdeContext): Block => {
  return {
    __type: "Block",
    BlockType: output.BlockType !== undefined && output.BlockType !== null ? output.BlockType : undefined,
    ColumnIndex: output.ColumnIndex !== undefined && output.ColumnIndex !== null ? output.ColumnIndex : undefined,
    ColumnSpan: output.ColumnSpan !== undefined && output.ColumnSpan !== null ? output.ColumnSpan : undefined,
    Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
    EntityTypes:
      output.EntityTypes !== undefined && output.EntityTypes !== null
        ? deserializeAws_json1_1EntityTypes(output.EntityTypes, context)
        : undefined,
    Geometry:
      output.Geometry !== undefined && output.Geometry !== null
        ? deserializeAws_json1_1Geometry(output.Geometry, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Page: output.Page !== undefined && output.Page !== null ? output.Page : undefined,
    Relationships:
      output.Relationships !== undefined && output.Relationships !== null
        ? deserializeAws_json1_1RelationshipList(output.Relationships, context)
        : undefined,
    RowIndex: output.RowIndex !== undefined && output.RowIndex !== null ? output.RowIndex : undefined,
    RowSpan: output.RowSpan !== undefined && output.RowSpan !== null ? output.RowSpan : undefined,
    SelectionStatus:
      output.SelectionStatus !== undefined && output.SelectionStatus !== null ? output.SelectionStatus : undefined,
    Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
  } as any;
};

const deserializeAws_json1_1BlockList = (output: any, context: __SerdeContext): Block[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Block(entry, context));
};

const deserializeAws_json1_1BoundingBox = (output: any, context: __SerdeContext): BoundingBox => {
  return {
    __type: "BoundingBox",
    Height: output.Height !== undefined && output.Height !== null ? output.Height : undefined,
    Left: output.Left !== undefined && output.Left !== null ? output.Left : undefined,
    Top: output.Top !== undefined && output.Top !== null ? output.Top : undefined,
    Width: output.Width !== undefined && output.Width !== null ? output.Width : undefined,
  } as any;
};

const deserializeAws_json1_1DetectDocumentTextResponse = (
  output: any,
  context: __SerdeContext
): DetectDocumentTextResponse => {
  return {
    __type: "DetectDocumentTextResponse",
    Blocks:
      output.Blocks !== undefined && output.Blocks !== null
        ? deserializeAws_json1_1BlockList(output.Blocks, context)
        : undefined,
    DetectDocumentTextModelVersion:
      output.DetectDocumentTextModelVersion !== undefined && output.DetectDocumentTextModelVersion !== null
        ? output.DetectDocumentTextModelVersion
        : undefined,
    DocumentMetadata:
      output.DocumentMetadata !== undefined && output.DocumentMetadata !== null
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentMetadata = (output: any, context: __SerdeContext): DocumentMetadata => {
  return {
    __type: "DocumentMetadata",
    Pages: output.Pages !== undefined && output.Pages !== null ? output.Pages : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentTooLargeException = (
  output: any,
  context: __SerdeContext
): DocumentTooLargeException => {
  return {
    __type: "DocumentTooLargeException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1EntityTypes = (output: any, context: __SerdeContext): (EntityType | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Geometry = (output: any, context: __SerdeContext): Geometry => {
  return {
    __type: "Geometry",
    BoundingBox:
      output.BoundingBox !== undefined && output.BoundingBox !== null
        ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context)
        : undefined,
    Polygon:
      output.Polygon !== undefined && output.Polygon !== null
        ? deserializeAws_json1_1Polygon(output.Polygon, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDocumentAnalysisResponse = (
  output: any,
  context: __SerdeContext
): GetDocumentAnalysisResponse => {
  return {
    __type: "GetDocumentAnalysisResponse",
    AnalyzeDocumentModelVersion:
      output.AnalyzeDocumentModelVersion !== undefined && output.AnalyzeDocumentModelVersion !== null
        ? output.AnalyzeDocumentModelVersion
        : undefined,
    Blocks:
      output.Blocks !== undefined && output.Blocks !== null
        ? deserializeAws_json1_1BlockList(output.Blocks, context)
        : undefined,
    DocumentMetadata:
      output.DocumentMetadata !== undefined && output.DocumentMetadata !== null
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    Warnings:
      output.Warnings !== undefined && output.Warnings !== null
        ? deserializeAws_json1_1Warnings(output.Warnings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDocumentTextDetectionResponse = (
  output: any,
  context: __SerdeContext
): GetDocumentTextDetectionResponse => {
  return {
    __type: "GetDocumentTextDetectionResponse",
    Blocks:
      output.Blocks !== undefined && output.Blocks !== null
        ? deserializeAws_json1_1BlockList(output.Blocks, context)
        : undefined,
    DetectDocumentTextModelVersion:
      output.DetectDocumentTextModelVersion !== undefined && output.DetectDocumentTextModelVersion !== null
        ? output.DetectDocumentTextModelVersion
        : undefined,
    DocumentMetadata:
      output.DocumentMetadata !== undefined && output.DocumentMetadata !== null
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
    JobStatus: output.JobStatus !== undefined && output.JobStatus !== null ? output.JobStatus : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    Warnings:
      output.Warnings !== undefined && output.Warnings !== null
        ? deserializeAws_json1_1Warnings(output.Warnings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HumanLoopActivationOutput = (
  output: any,
  context: __SerdeContext
): HumanLoopActivationOutput => {
  return {
    __type: "HumanLoopActivationOutput",
    HumanLoopActivationConditionsEvaluationResults:
      output.HumanLoopActivationConditionsEvaluationResults !== undefined &&
      output.HumanLoopActivationConditionsEvaluationResults !== null
        ? new __LazyJsonString(output.HumanLoopActivationConditionsEvaluationResults)
        : undefined,
    HumanLoopActivationReasons:
      output.HumanLoopActivationReasons !== undefined && output.HumanLoopActivationReasons !== null
        ? deserializeAws_json1_1HumanLoopActivationReasons(output.HumanLoopActivationReasons, context)
        : undefined,
    HumanLoopArn: output.HumanLoopArn !== undefined && output.HumanLoopArn !== null ? output.HumanLoopArn : undefined,
  } as any;
};

const deserializeAws_json1_1HumanLoopActivationReasons = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1HumanLoopQuotaExceededException = (
  output: any,
  context: __SerdeContext
): HumanLoopQuotaExceededException => {
  return {
    __type: "HumanLoopQuotaExceededException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    QuotaCode: output.QuotaCode !== undefined && output.QuotaCode !== null ? output.QuotaCode : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    ServiceCode: output.ServiceCode !== undefined && output.ServiceCode !== null ? output.ServiceCode : undefined,
  } as any;
};

const deserializeAws_json1_1IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return {
    __type: "IdempotentParameterMismatchException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1IdList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    __type: "InternalServerError",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidJobIdException = (output: any, context: __SerdeContext): InvalidJobIdException => {
  return {
    __type: "InvalidJobIdException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    __type: "InvalidParameterException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidS3ObjectException = (
  output: any,
  context: __SerdeContext
): InvalidS3ObjectException => {
  return {
    __type: "InvalidS3ObjectException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1Pages = (output: any, context: __SerdeContext): number[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Point = (output: any, context: __SerdeContext): Point => {
  return {
    __type: "Point",
    X: output.X !== undefined && output.X !== null ? output.X : undefined,
    Y: output.Y !== undefined && output.Y !== null ? output.Y : undefined,
  } as any;
};

const deserializeAws_json1_1Polygon = (output: any, context: __SerdeContext): Point[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Point(entry, context));
};

const deserializeAws_json1_1ProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputExceededException => {
  return {
    __type: "ProvisionedThroughputExceededException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1Relationship = (output: any, context: __SerdeContext): Relationship => {
  return {
    __type: "Relationship",
    Ids:
      output.Ids !== undefined && output.Ids !== null ? deserializeAws_json1_1IdList(output.Ids, context) : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1RelationshipList = (output: any, context: __SerdeContext): Relationship[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Relationship(entry, context));
};

const deserializeAws_json1_1StartDocumentAnalysisResponse = (
  output: any,
  context: __SerdeContext
): StartDocumentAnalysisResponse => {
  return {
    __type: "StartDocumentAnalysisResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
  } as any;
};

const deserializeAws_json1_1StartDocumentTextDetectionResponse = (
  output: any,
  context: __SerdeContext
): StartDocumentTextDetectionResponse => {
  return {
    __type: "StartDocumentTextDetectionResponse",
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
  } as any;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    __type: "ThrottlingException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1UnsupportedDocumentException = (
  output: any,
  context: __SerdeContext
): UnsupportedDocumentException => {
  return {
    __type: "UnsupportedDocumentException",
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1Warning = (output: any, context: __SerdeContext): Warning => {
  return {
    __type: "Warning",
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    Pages:
      output.Pages !== undefined && output.Pages !== null
        ? deserializeAws_json1_1Pages(output.Pages, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Warnings = (output: any, context: __SerdeContext): Warning[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Warning(entry, context));
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
