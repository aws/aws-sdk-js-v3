import { AnalyzeDocumentCommandInput, AnalyzeDocumentCommandOutput } from "../commands/AnalyzeDocumentCommand";
import { AnalyzeExpenseCommandInput, AnalyzeExpenseCommandOutput } from "../commands/AnalyzeExpenseCommand";
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
  AnalyzeExpenseRequest,
  AnalyzeExpenseResponse,
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
  ExpenseDetection,
  ExpenseDocument,
  ExpenseField,
  ExpenseType,
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
  InvalidKMSKeyException,
  InvalidParameterException,
  InvalidS3ObjectException,
  LimitExceededException,
  LineItemFields,
  LineItemGroup,
  NotificationChannel,
  OutputConfig,
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
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  LazyJsonString as __LazyJsonString,
  expectNumber as __expectNumber,
  expectString as __expectString,
  handleFloat as __handleFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1AnalyzeDocumentCommand = async (
  input: AnalyzeDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Textract.AnalyzeDocument",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AnalyzeDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AnalyzeExpenseCommand = async (
  input: AnalyzeExpenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Textract.AnalyzeExpense",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AnalyzeExpenseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetectDocumentTextCommand = async (
  input: DetectDocumentTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Textract.DetectDocumentText",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Textract.GetDocumentAnalysis",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Textract.GetDocumentTextDetection",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Textract.StartDocumentAnalysis",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Textract.StartDocumentTextDetection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartDocumentTextDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AnalyzeDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AnalyzeDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AnalyzeDocumentResponse(data, context);
  const response: AnalyzeDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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

export const deserializeAws_json1_1AnalyzeExpenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeExpenseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AnalyzeExpenseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AnalyzeExpenseResponse(data, context);
  const response: AnalyzeExpenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AnalyzeExpenseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeExpenseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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

export const deserializeAws_json1_1DetectDocumentTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectDocumentTextCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetectDocumentTextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetectDocumentTextResponse(data, context);
  const response: DetectDocumentTextCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDocumentAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDocumentAnalysisResponse(data, context);
  const response: GetDocumentAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      response = {
        ...(await deserializeAws_json1_1InvalidKMSKeyExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDocumentTextDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDocumentTextDetectionResponse(data, context);
  const response: GetDocumentTextDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      response = {
        ...(await deserializeAws_json1_1InvalidKMSKeyExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartDocumentAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDocumentAnalysisResponse(data, context);
  const response: StartDocumentAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      response = {
        ...(await deserializeAws_json1_1InvalidKMSKeyExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartDocumentTextDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartDocumentTextDetectionResponse(data, context);
  const response: StartDocumentTextDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      response = {
        ...(await deserializeAws_json1_1InvalidKMSKeyExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1InvalidKMSKeyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKMSKeyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidKMSKeyException(body, context);
  const contents: InvalidKMSKeyException = {
    name: "InvalidKMSKeyException",
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
    ...(input.Document !== undefined &&
      input.Document !== null && { Document: serializeAws_json1_1Document(input.Document, context) }),
    ...(input.FeatureTypes !== undefined &&
      input.FeatureTypes !== null && { FeatureTypes: serializeAws_json1_1FeatureTypes(input.FeatureTypes, context) }),
    ...(input.HumanLoopConfig !== undefined &&
      input.HumanLoopConfig !== null && {
        HumanLoopConfig: serializeAws_json1_1HumanLoopConfig(input.HumanLoopConfig, context),
      }),
  };
};

const serializeAws_json1_1AnalyzeExpenseRequest = (input: AnalyzeExpenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.Document !== undefined &&
      input.Document !== null && { Document: serializeAws_json1_1Document(input.Document, context) }),
  };
};

const serializeAws_json1_1ContentClassifiers = (
  input: (ContentClassifier | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DetectDocumentTextRequest = (
  input: DetectDocumentTextRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Document !== undefined &&
      input.Document !== null && { Document: serializeAws_json1_1Document(input.Document, context) }),
  };
};

const serializeAws_json1_1Document = (input: Document, context: __SerdeContext): any => {
  return {
    ...(input.Bytes !== undefined && input.Bytes !== null && { Bytes: context.base64Encoder(input.Bytes) }),
    ...(input.S3Object !== undefined &&
      input.S3Object !== null && { S3Object: serializeAws_json1_1S3Object(input.S3Object, context) }),
  };
};

const serializeAws_json1_1DocumentLocation = (input: DocumentLocation, context: __SerdeContext): any => {
  return {
    ...(input.S3Object !== undefined &&
      input.S3Object !== null && { S3Object: serializeAws_json1_1S3Object(input.S3Object, context) }),
  };
};

const serializeAws_json1_1FeatureTypes = (input: (FeatureType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GetDocumentAnalysisRequest = (
  input: GetDocumentAnalysisRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetDocumentTextDetectionRequest = (
  input: GetDocumentTextDetectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1HumanLoopConfig = (input: HumanLoopConfig, context: __SerdeContext): any => {
  return {
    ...(input.DataAttributes !== undefined &&
      input.DataAttributes !== null && {
        DataAttributes: serializeAws_json1_1HumanLoopDataAttributes(input.DataAttributes, context),
      }),
    ...(input.FlowDefinitionArn !== undefined &&
      input.FlowDefinitionArn !== null && { FlowDefinitionArn: input.FlowDefinitionArn }),
    ...(input.HumanLoopName !== undefined && input.HumanLoopName !== null && { HumanLoopName: input.HumanLoopName }),
  };
};

const serializeAws_json1_1HumanLoopDataAttributes = (input: HumanLoopDataAttributes, context: __SerdeContext): any => {
  return {
    ...(input.ContentClassifiers !== undefined &&
      input.ContentClassifiers !== null && {
        ContentClassifiers: serializeAws_json1_1ContentClassifiers(input.ContentClassifiers, context),
      }),
  };
};

const serializeAws_json1_1NotificationChannel = (input: NotificationChannel, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.SNSTopicArn !== undefined && input.SNSTopicArn !== null && { SNSTopicArn: input.SNSTopicArn }),
  };
};

const serializeAws_json1_1OutputConfig = (input: OutputConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Prefix !== undefined && input.S3Prefix !== null && { S3Prefix: input.S3Prefix }),
  };
};

const serializeAws_json1_1S3Object = (input: S3Object, context: __SerdeContext): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_json1_1StartDocumentAnalysisRequest = (
  input: StartDocumentAnalysisRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken !== undefined &&
      input.ClientRequestToken !== null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.DocumentLocation !== undefined &&
      input.DocumentLocation !== null && {
        DocumentLocation: serializeAws_json1_1DocumentLocation(input.DocumentLocation, context),
      }),
    ...(input.FeatureTypes !== undefined &&
      input.FeatureTypes !== null && { FeatureTypes: serializeAws_json1_1FeatureTypes(input.FeatureTypes, context) }),
    ...(input.JobTag !== undefined && input.JobTag !== null && { JobTag: input.JobTag }),
    ...(input.KMSKeyId !== undefined && input.KMSKeyId !== null && { KMSKeyId: input.KMSKeyId }),
    ...(input.NotificationChannel !== undefined &&
      input.NotificationChannel !== null && {
        NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
      }),
    ...(input.OutputConfig !== undefined &&
      input.OutputConfig !== null && { OutputConfig: serializeAws_json1_1OutputConfig(input.OutputConfig, context) }),
  };
};

const serializeAws_json1_1StartDocumentTextDetectionRequest = (
  input: StartDocumentTextDetectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken !== undefined &&
      input.ClientRequestToken !== null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.DocumentLocation !== undefined &&
      input.DocumentLocation !== null && {
        DocumentLocation: serializeAws_json1_1DocumentLocation(input.DocumentLocation, context),
      }),
    ...(input.JobTag !== undefined && input.JobTag !== null && { JobTag: input.JobTag }),
    ...(input.KMSKeyId !== undefined && input.KMSKeyId !== null && { KMSKeyId: input.KMSKeyId }),
    ...(input.NotificationChannel !== undefined &&
      input.NotificationChannel !== null && {
        NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
      }),
    ...(input.OutputConfig !== undefined &&
      input.OutputConfig !== null && { OutputConfig: serializeAws_json1_1OutputConfig(input.OutputConfig, context) }),
  };
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AnalyzeDocumentResponse = (
  output: any,
  context: __SerdeContext
): AnalyzeDocumentResponse => {
  return {
    AnalyzeDocumentModelVersion: __expectString(output.AnalyzeDocumentModelVersion),
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

const deserializeAws_json1_1AnalyzeExpenseResponse = (output: any, context: __SerdeContext): AnalyzeExpenseResponse => {
  return {
    DocumentMetadata:
      output.DocumentMetadata !== undefined && output.DocumentMetadata !== null
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
    ExpenseDocuments:
      output.ExpenseDocuments !== undefined && output.ExpenseDocuments !== null
        ? deserializeAws_json1_1ExpenseDocumentList(output.ExpenseDocuments, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BadDocumentException = (output: any, context: __SerdeContext): BadDocumentException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Block = (output: any, context: __SerdeContext): Block => {
  return {
    BlockType: __expectString(output.BlockType),
    ColumnIndex: __expectNumber(output.ColumnIndex),
    ColumnSpan: __expectNumber(output.ColumnSpan),
    Confidence: __handleFloat(output.Confidence),
    EntityTypes:
      output.EntityTypes !== undefined && output.EntityTypes !== null
        ? deserializeAws_json1_1EntityTypes(output.EntityTypes, context)
        : undefined,
    Geometry:
      output.Geometry !== undefined && output.Geometry !== null
        ? deserializeAws_json1_1Geometry(output.Geometry, context)
        : undefined,
    Id: __expectString(output.Id),
    Page: __expectNumber(output.Page),
    Relationships:
      output.Relationships !== undefined && output.Relationships !== null
        ? deserializeAws_json1_1RelationshipList(output.Relationships, context)
        : undefined,
    RowIndex: __expectNumber(output.RowIndex),
    RowSpan: __expectNumber(output.RowSpan),
    SelectionStatus: __expectString(output.SelectionStatus),
    Text: __expectString(output.Text),
    TextType: __expectString(output.TextType),
  } as any;
};

const deserializeAws_json1_1BlockList = (output: any, context: __SerdeContext): Block[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Block(entry, context);
    });
};

const deserializeAws_json1_1BoundingBox = (output: any, context: __SerdeContext): BoundingBox => {
  return {
    Height: __handleFloat(output.Height),
    Left: __handleFloat(output.Left),
    Top: __handleFloat(output.Top),
    Width: __handleFloat(output.Width),
  } as any;
};

const deserializeAws_json1_1DetectDocumentTextResponse = (
  output: any,
  context: __SerdeContext
): DetectDocumentTextResponse => {
  return {
    Blocks:
      output.Blocks !== undefined && output.Blocks !== null
        ? deserializeAws_json1_1BlockList(output.Blocks, context)
        : undefined,
    DetectDocumentTextModelVersion: __expectString(output.DetectDocumentTextModelVersion),
    DocumentMetadata:
      output.DocumentMetadata !== undefined && output.DocumentMetadata !== null
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentMetadata = (output: any, context: __SerdeContext): DocumentMetadata => {
  return {
    Pages: __expectNumber(output.Pages),
  } as any;
};

const deserializeAws_json1_1DocumentTooLargeException = (
  output: any,
  context: __SerdeContext
): DocumentTooLargeException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EntityTypes = (output: any, context: __SerdeContext): (EntityType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ExpenseDetection = (output: any, context: __SerdeContext): ExpenseDetection => {
  return {
    Confidence: __handleFloat(output.Confidence),
    Geometry:
      output.Geometry !== undefined && output.Geometry !== null
        ? deserializeAws_json1_1Geometry(output.Geometry, context)
        : undefined,
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_json1_1ExpenseDocument = (output: any, context: __SerdeContext): ExpenseDocument => {
  return {
    ExpenseIndex: __expectNumber(output.ExpenseIndex),
    LineItemGroups:
      output.LineItemGroups !== undefined && output.LineItemGroups !== null
        ? deserializeAws_json1_1LineItemGroupList(output.LineItemGroups, context)
        : undefined,
    SummaryFields:
      output.SummaryFields !== undefined && output.SummaryFields !== null
        ? deserializeAws_json1_1ExpenseFieldList(output.SummaryFields, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ExpenseDocumentList = (output: any, context: __SerdeContext): ExpenseDocument[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExpenseDocument(entry, context);
    });
};

const deserializeAws_json1_1ExpenseField = (output: any, context: __SerdeContext): ExpenseField => {
  return {
    LabelDetection:
      output.LabelDetection !== undefined && output.LabelDetection !== null
        ? deserializeAws_json1_1ExpenseDetection(output.LabelDetection, context)
        : undefined,
    PageNumber: __expectNumber(output.PageNumber),
    Type:
      output.Type !== undefined && output.Type !== null
        ? deserializeAws_json1_1ExpenseType(output.Type, context)
        : undefined,
    ValueDetection:
      output.ValueDetection !== undefined && output.ValueDetection !== null
        ? deserializeAws_json1_1ExpenseDetection(output.ValueDetection, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ExpenseFieldList = (output: any, context: __SerdeContext): ExpenseField[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExpenseField(entry, context);
    });
};

const deserializeAws_json1_1ExpenseType = (output: any, context: __SerdeContext): ExpenseType => {
  return {
    Confidence: __handleFloat(output.Confidence),
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_json1_1Geometry = (output: any, context: __SerdeContext): Geometry => {
  return {
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
    AnalyzeDocumentModelVersion: __expectString(output.AnalyzeDocumentModelVersion),
    Blocks:
      output.Blocks !== undefined && output.Blocks !== null
        ? deserializeAws_json1_1BlockList(output.Blocks, context)
        : undefined,
    DocumentMetadata:
      output.DocumentMetadata !== undefined && output.DocumentMetadata !== null
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
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
    Blocks:
      output.Blocks !== undefined && output.Blocks !== null
        ? deserializeAws_json1_1BlockList(output.Blocks, context)
        : undefined,
    DetectDocumentTextModelVersion: __expectString(output.DetectDocumentTextModelVersion),
    DocumentMetadata:
      output.DocumentMetadata !== undefined && output.DocumentMetadata !== null
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
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
    HumanLoopActivationConditionsEvaluationResults:
      output.HumanLoopActivationConditionsEvaluationResults !== undefined &&
      output.HumanLoopActivationConditionsEvaluationResults !== null
        ? new __LazyJsonString(output.HumanLoopActivationConditionsEvaluationResults)
        : undefined,
    HumanLoopActivationReasons:
      output.HumanLoopActivationReasons !== undefined && output.HumanLoopActivationReasons !== null
        ? deserializeAws_json1_1HumanLoopActivationReasons(output.HumanLoopActivationReasons, context)
        : undefined,
    HumanLoopArn: __expectString(output.HumanLoopArn),
  } as any;
};

const deserializeAws_json1_1HumanLoopActivationReasons = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1HumanLoopQuotaExceededException = (
  output: any,
  context: __SerdeContext
): HumanLoopQuotaExceededException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
    QuotaCode: __expectString(output.QuotaCode),
    ResourceType: __expectString(output.ResourceType),
    ServiceCode: __expectString(output.ServiceCode),
  } as any;
};

const deserializeAws_json1_1IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1IdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidJobIdException = (output: any, context: __SerdeContext): InvalidJobIdException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidKMSKeyException = (output: any, context: __SerdeContext): InvalidKMSKeyException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidS3ObjectException = (
  output: any,
  context: __SerdeContext
): InvalidS3ObjectException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1LineItemFields = (output: any, context: __SerdeContext): LineItemFields => {
  return {
    LineItemExpenseFields:
      output.LineItemExpenseFields !== undefined && output.LineItemExpenseFields !== null
        ? deserializeAws_json1_1ExpenseFieldList(output.LineItemExpenseFields, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LineItemGroup = (output: any, context: __SerdeContext): LineItemGroup => {
  return {
    LineItemGroupIndex: __expectNumber(output.LineItemGroupIndex),
    LineItems:
      output.LineItems !== undefined && output.LineItems !== null
        ? deserializeAws_json1_1LineItemList(output.LineItems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LineItemGroupList = (output: any, context: __SerdeContext): LineItemGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LineItemGroup(entry, context);
    });
};

const deserializeAws_json1_1LineItemList = (output: any, context: __SerdeContext): LineItemFields[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LineItemFields(entry, context);
    });
};

const deserializeAws_json1_1Pages = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectNumber(entry) as any;
    });
};

const deserializeAws_json1_1Point = (output: any, context: __SerdeContext): Point => {
  return {
    X: __handleFloat(output.X),
    Y: __handleFloat(output.Y),
  } as any;
};

const deserializeAws_json1_1Polygon = (output: any, context: __SerdeContext): Point[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Point(entry, context);
    });
};

const deserializeAws_json1_1ProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputExceededException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Relationship = (output: any, context: __SerdeContext): Relationship => {
  return {
    Ids:
      output.Ids !== undefined && output.Ids !== null ? deserializeAws_json1_1IdList(output.Ids, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1RelationshipList = (output: any, context: __SerdeContext): Relationship[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Relationship(entry, context);
    });
};

const deserializeAws_json1_1StartDocumentAnalysisResponse = (
  output: any,
  context: __SerdeContext
): StartDocumentAnalysisResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1StartDocumentTextDetectionResponse = (
  output: any,
  context: __SerdeContext
): StartDocumentTextDetectionResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UnsupportedDocumentException = (
  output: any,
  context: __SerdeContext
): UnsupportedDocumentException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Warning = (output: any, context: __SerdeContext): Warning => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Pages:
      output.Pages !== undefined && output.Pages !== null
        ? deserializeAws_json1_1Pages(output.Pages, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Warnings = (output: any, context: __SerdeContext): Warning[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Warning(entry, context);
    });
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
