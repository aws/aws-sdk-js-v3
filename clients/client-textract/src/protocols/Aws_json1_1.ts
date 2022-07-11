// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectString as __expectString,
  LazyJsonString as __LazyJsonString,
  limitedParseFloat32 as __limitedParseFloat32,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AnalyzeDocumentCommandInput, AnalyzeDocumentCommandOutput } from "../commands/AnalyzeDocumentCommand";
import { AnalyzeExpenseCommandInput, AnalyzeExpenseCommandOutput } from "../commands/AnalyzeExpenseCommand";
import { AnalyzeIDCommandInput, AnalyzeIDCommandOutput } from "../commands/AnalyzeIDCommand";
import { DetectDocumentTextCommandInput, DetectDocumentTextCommandOutput } from "../commands/DetectDocumentTextCommand";
import {
  GetDocumentAnalysisCommandInput,
  GetDocumentAnalysisCommandOutput,
} from "../commands/GetDocumentAnalysisCommand";
import {
  GetDocumentTextDetectionCommandInput,
  GetDocumentTextDetectionCommandOutput,
} from "../commands/GetDocumentTextDetectionCommand";
import { GetExpenseAnalysisCommandInput, GetExpenseAnalysisCommandOutput } from "../commands/GetExpenseAnalysisCommand";
import {
  StartDocumentAnalysisCommandInput,
  StartDocumentAnalysisCommandOutput,
} from "../commands/StartDocumentAnalysisCommand";
import {
  StartDocumentTextDetectionCommandInput,
  StartDocumentTextDetectionCommandOutput,
} from "../commands/StartDocumentTextDetectionCommand";
import {
  StartExpenseAnalysisCommandInput,
  StartExpenseAnalysisCommandOutput,
} from "../commands/StartExpenseAnalysisCommand";
import {
  AccessDeniedException,
  AnalyzeDocumentRequest,
  AnalyzeDocumentResponse,
  AnalyzeExpenseRequest,
  AnalyzeExpenseResponse,
  AnalyzeIDDetections,
  AnalyzeIDRequest,
  AnalyzeIDResponse,
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
  GetExpenseAnalysisRequest,
  GetExpenseAnalysisResponse,
  HumanLoopActivationOutput,
  HumanLoopConfig,
  HumanLoopDataAttributes,
  HumanLoopQuotaExceededException,
  IdempotentParameterMismatchException,
  IdentityDocument,
  IdentityDocumentField,
  InternalServerError,
  InvalidJobIdException,
  InvalidKMSKeyException,
  InvalidParameterException,
  InvalidS3ObjectException,
  LimitExceededException,
  LineItemFields,
  LineItemGroup,
  NormalizedValue,
  NotificationChannel,
  OutputConfig,
  Point,
  ProvisionedThroughputExceededException,
  QueriesConfig,
  Query,
  Relationship,
  S3Object,
  StartDocumentAnalysisRequest,
  StartDocumentAnalysisResponse,
  StartDocumentTextDetectionRequest,
  StartDocumentTextDetectionResponse,
  StartExpenseAnalysisRequest,
  StartExpenseAnalysisResponse,
  ThrottlingException,
  UnsupportedDocumentException,
  Warning,
} from "../models/models_0";
import { TextractServiceException as __BaseException } from "../models/TextractServiceException";

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

export const serializeAws_json1_1AnalyzeIDCommand = async (
  input: AnalyzeIDCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Textract.AnalyzeID",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AnalyzeIDRequest(input, context));
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

export const serializeAws_json1_1GetExpenseAnalysisCommand = async (
  input: GetExpenseAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Textract.GetExpenseAnalysis",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetExpenseAnalysisRequest(input, context));
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

export const serializeAws_json1_1StartExpenseAnalysisCommand = async (
  input: StartExpenseAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Textract.StartExpenseAnalysis",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartExpenseAnalysisRequest(input, context));
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      throw await deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context);
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      throw await deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context);
    case "HumanLoopQuotaExceededException":
    case "com.amazonaws.textract#HumanLoopQuotaExceededException":
      throw await deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      throw await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      throw await deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context);
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      throw await deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      throw await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1AnalyzeIDCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeIDCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AnalyzeIDCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AnalyzeIDResponse(data, context);
  const response: AnalyzeIDCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AnalyzeIDCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeIDCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      throw await deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context);
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      throw await deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      throw await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      throw await deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context);
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      throw await deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      throw await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidJobIdException":
    case "com.amazonaws.textract#InvalidJobIdException":
      throw await deserializeAws_json1_1InvalidJobIdExceptionResponse(parsedOutput, context);
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      throw await deserializeAws_json1_1InvalidKMSKeyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidJobIdException":
    case "com.amazonaws.textract#InvalidJobIdException":
      throw await deserializeAws_json1_1InvalidJobIdExceptionResponse(parsedOutput, context);
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      throw await deserializeAws_json1_1InvalidKMSKeyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetExpenseAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExpenseAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetExpenseAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetExpenseAnalysisResponse(data, context);
  const response: GetExpenseAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetExpenseAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExpenseAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidJobIdException":
    case "com.amazonaws.textract#InvalidJobIdException":
      throw await deserializeAws_json1_1InvalidJobIdExceptionResponse(parsedOutput, context);
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      throw await deserializeAws_json1_1InvalidKMSKeyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      throw await deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context);
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      throw await deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.textract#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      throw await deserializeAws_json1_1InvalidKMSKeyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.textract#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      throw await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      throw await deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context);
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      throw await deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.textract#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      throw await deserializeAws_json1_1InvalidKMSKeyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.textract#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      throw await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StartExpenseAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExpenseAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartExpenseAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartExpenseAnalysisResponse(data, context);
  const response: StartExpenseAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartExpenseAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExpenseAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      throw await deserializeAws_json1_1BadDocumentExceptionResponse(parsedOutput, context);
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      throw await deserializeAws_json1_1DocumentTooLargeExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.textract#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      throw await deserializeAws_json1_1InvalidKMSKeyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await deserializeAws_json1_1InvalidS3ObjectExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.textract#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      throw await deserializeAws_json1_1UnsupportedDocumentExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1BadDocumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BadDocumentException(body, context);
  const exception = new BadDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DocumentTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DocumentTooLargeException(body, context);
  const exception = new DocumentTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1HumanLoopQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HumanLoopQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1HumanLoopQuotaExceededException(body, context);
  const exception = new HumanLoopQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidJobIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidJobIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidJobIdException(body, context);
  const exception = new InvalidJobIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidKMSKeyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKMSKeyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidKMSKeyException(body, context);
  const exception = new InvalidKMSKeyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidS3ObjectExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3ObjectException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidS3ObjectException(body, context);
  const exception = new InvalidS3ObjectException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ProvisionedThroughputExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ProvisionedThroughputExceededException(body, context);
  const exception = new ProvisionedThroughputExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedDocumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedDocumentException(body, context);
  const exception = new UnsupportedDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AnalyzeDocumentRequest = (input: AnalyzeDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.Document != undefined && { Document: serializeAws_json1_1Document(input.Document, context) }),
    ...(input.FeatureTypes != undefined && {
      FeatureTypes: serializeAws_json1_1FeatureTypes(input.FeatureTypes, context),
    }),
    ...(input.HumanLoopConfig != undefined && {
      HumanLoopConfig: serializeAws_json1_1HumanLoopConfig(input.HumanLoopConfig, context),
    }),
    ...(input.QueriesConfig != undefined && {
      QueriesConfig: serializeAws_json1_1QueriesConfig(input.QueriesConfig, context),
    }),
  };
};

const serializeAws_json1_1AnalyzeExpenseRequest = (input: AnalyzeExpenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.Document != undefined && { Document: serializeAws_json1_1Document(input.Document, context) }),
  };
};

const serializeAws_json1_1AnalyzeIDRequest = (input: AnalyzeIDRequest, context: __SerdeContext): any => {
  return {
    ...(input.DocumentPages != undefined && {
      DocumentPages: serializeAws_json1_1DocumentPages(input.DocumentPages, context),
    }),
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
    ...(input.Document != undefined && { Document: serializeAws_json1_1Document(input.Document, context) }),
  };
};

const serializeAws_json1_1Document = (input: Document, context: __SerdeContext): any => {
  return {
    ...(input.Bytes != undefined && { Bytes: context.base64Encoder(input.Bytes) }),
    ...(input.S3Object != undefined && { S3Object: serializeAws_json1_1S3Object(input.S3Object, context) }),
  };
};

const serializeAws_json1_1DocumentLocation = (input: DocumentLocation, context: __SerdeContext): any => {
  return {
    ...(input.S3Object != undefined && { S3Object: serializeAws_json1_1S3Object(input.S3Object, context) }),
  };
};

const serializeAws_json1_1DocumentPages = (input: Document[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Document(entry, context);
    });
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
    ...(input.JobId != undefined && { JobId: input.JobId }),
    ...(input.MaxResults != undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken != undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetDocumentTextDetectionRequest = (
  input: GetDocumentTextDetectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != undefined && { JobId: input.JobId }),
    ...(input.MaxResults != undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken != undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1GetExpenseAnalysisRequest = (
  input: GetExpenseAnalysisRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != undefined && { JobId: input.JobId }),
    ...(input.MaxResults != undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken != undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1HumanLoopConfig = (input: HumanLoopConfig, context: __SerdeContext): any => {
  return {
    ...(input.DataAttributes != undefined && {
      DataAttributes: serializeAws_json1_1HumanLoopDataAttributes(input.DataAttributes, context),
    }),
    ...(input.FlowDefinitionArn != undefined && { FlowDefinitionArn: input.FlowDefinitionArn }),
    ...(input.HumanLoopName != undefined && { HumanLoopName: input.HumanLoopName }),
  };
};

const serializeAws_json1_1HumanLoopDataAttributes = (input: HumanLoopDataAttributes, context: __SerdeContext): any => {
  return {
    ...(input.ContentClassifiers != undefined && {
      ContentClassifiers: serializeAws_json1_1ContentClassifiers(input.ContentClassifiers, context),
    }),
  };
};

const serializeAws_json1_1NotificationChannel = (input: NotificationChannel, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn != undefined && { RoleArn: input.RoleArn }),
    ...(input.SNSTopicArn != undefined && { SNSTopicArn: input.SNSTopicArn }),
  };
};

const serializeAws_json1_1OutputConfig = (input: OutputConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket != undefined && { S3Bucket: input.S3Bucket }),
    ...(input.S3Prefix != undefined && { S3Prefix: input.S3Prefix }),
  };
};

const serializeAws_json1_1Queries = (input: Query[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Query(entry, context);
    });
};

const serializeAws_json1_1QueriesConfig = (input: QueriesConfig, context: __SerdeContext): any => {
  return {
    ...(input.Queries != undefined && { Queries: serializeAws_json1_1Queries(input.Queries, context) }),
  };
};

const serializeAws_json1_1Query = (input: Query, context: __SerdeContext): any => {
  return {
    ...(input.Alias != undefined && { Alias: input.Alias }),
    ...(input.Pages != undefined && { Pages: serializeAws_json1_1QueryPages(input.Pages, context) }),
    ...(input.Text != undefined && { Text: input.Text }),
  };
};

const serializeAws_json1_1QueryPages = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1S3Object = (input: S3Object, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != undefined && { Bucket: input.Bucket }),
    ...(input.Name != undefined && { Name: input.Name }),
    ...(input.Version != undefined && { Version: input.Version }),
  };
};

const serializeAws_json1_1StartDocumentAnalysisRequest = (
  input: StartDocumentAnalysisRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken != undefined && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.DocumentLocation != undefined && {
      DocumentLocation: serializeAws_json1_1DocumentLocation(input.DocumentLocation, context),
    }),
    ...(input.FeatureTypes != undefined && {
      FeatureTypes: serializeAws_json1_1FeatureTypes(input.FeatureTypes, context),
    }),
    ...(input.JobTag != undefined && { JobTag: input.JobTag }),
    ...(input.KMSKeyId != undefined && { KMSKeyId: input.KMSKeyId }),
    ...(input.NotificationChannel != undefined && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.OutputConfig != undefined && {
      OutputConfig: serializeAws_json1_1OutputConfig(input.OutputConfig, context),
    }),
    ...(input.QueriesConfig != undefined && {
      QueriesConfig: serializeAws_json1_1QueriesConfig(input.QueriesConfig, context),
    }),
  };
};

const serializeAws_json1_1StartDocumentTextDetectionRequest = (
  input: StartDocumentTextDetectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken != undefined && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.DocumentLocation != undefined && {
      DocumentLocation: serializeAws_json1_1DocumentLocation(input.DocumentLocation, context),
    }),
    ...(input.JobTag != undefined && { JobTag: input.JobTag }),
    ...(input.KMSKeyId != undefined && { KMSKeyId: input.KMSKeyId }),
    ...(input.NotificationChannel != undefined && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.OutputConfig != undefined && {
      OutputConfig: serializeAws_json1_1OutputConfig(input.OutputConfig, context),
    }),
  };
};

const serializeAws_json1_1StartExpenseAnalysisRequest = (
  input: StartExpenseAnalysisRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken != undefined && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.DocumentLocation != undefined && {
      DocumentLocation: serializeAws_json1_1DocumentLocation(input.DocumentLocation, context),
    }),
    ...(input.JobTag != undefined && { JobTag: input.JobTag }),
    ...(input.KMSKeyId != undefined && { KMSKeyId: input.KMSKeyId }),
    ...(input.NotificationChannel != undefined && {
      NotificationChannel: serializeAws_json1_1NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.OutputConfig != undefined && {
      OutputConfig: serializeAws_json1_1OutputConfig(input.OutputConfig, context),
    }),
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
    Blocks: output.Blocks != undefined ? deserializeAws_json1_1BlockList(output.Blocks, context) : undefined,
    DocumentMetadata:
      output.DocumentMetadata != undefined
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
    HumanLoopActivationOutput:
      output.HumanLoopActivationOutput != undefined
        ? deserializeAws_json1_1HumanLoopActivationOutput(output.HumanLoopActivationOutput, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AnalyzeExpenseResponse = (output: any, context: __SerdeContext): AnalyzeExpenseResponse => {
  return {
    DocumentMetadata:
      output.DocumentMetadata != undefined
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
    ExpenseDocuments:
      output.ExpenseDocuments != undefined
        ? deserializeAws_json1_1ExpenseDocumentList(output.ExpenseDocuments, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AnalyzeIDDetections = (output: any, context: __SerdeContext): AnalyzeIDDetections => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    NormalizedValue:
      output.NormalizedValue != undefined
        ? deserializeAws_json1_1NormalizedValue(output.NormalizedValue, context)
        : undefined,
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_json1_1AnalyzeIDResponse = (output: any, context: __SerdeContext): AnalyzeIDResponse => {
  return {
    AnalyzeIDModelVersion: __expectString(output.AnalyzeIDModelVersion),
    DocumentMetadata:
      output.DocumentMetadata != undefined
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
    IdentityDocuments:
      output.IdentityDocuments != undefined
        ? deserializeAws_json1_1IdentityDocumentList(output.IdentityDocuments, context)
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
    ColumnIndex: __expectInt32(output.ColumnIndex),
    ColumnSpan: __expectInt32(output.ColumnSpan),
    Confidence: __limitedParseFloat32(output.Confidence),
    EntityTypes:
      output.EntityTypes != undefined ? deserializeAws_json1_1EntityTypes(output.EntityTypes, context) : undefined,
    Geometry: output.Geometry != undefined ? deserializeAws_json1_1Geometry(output.Geometry, context) : undefined,
    Id: __expectString(output.Id),
    Page: __expectInt32(output.Page),
    Query: output.Query != undefined ? deserializeAws_json1_1Query(output.Query, context) : undefined,
    Relationships:
      output.Relationships != undefined
        ? deserializeAws_json1_1RelationshipList(output.Relationships, context)
        : undefined,
    RowIndex: __expectInt32(output.RowIndex),
    RowSpan: __expectInt32(output.RowSpan),
    SelectionStatus: __expectString(output.SelectionStatus),
    Text: __expectString(output.Text),
    TextType: __expectString(output.TextType),
  } as any;
};

const deserializeAws_json1_1BlockList = (output: any, context: __SerdeContext): Block[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Block(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BoundingBox = (output: any, context: __SerdeContext): BoundingBox => {
  return {
    Height: __limitedParseFloat32(output.Height),
    Left: __limitedParseFloat32(output.Left),
    Top: __limitedParseFloat32(output.Top),
    Width: __limitedParseFloat32(output.Width),
  } as any;
};

const deserializeAws_json1_1DetectDocumentTextResponse = (
  output: any,
  context: __SerdeContext
): DetectDocumentTextResponse => {
  return {
    Blocks: output.Blocks != undefined ? deserializeAws_json1_1BlockList(output.Blocks, context) : undefined,
    DetectDocumentTextModelVersion: __expectString(output.DetectDocumentTextModelVersion),
    DocumentMetadata:
      output.DocumentMetadata != undefined
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DocumentMetadata = (output: any, context: __SerdeContext): DocumentMetadata => {
  return {
    Pages: __expectInt32(output.Pages),
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1ExpenseDetection = (output: any, context: __SerdeContext): ExpenseDetection => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Geometry: output.Geometry != undefined ? deserializeAws_json1_1Geometry(output.Geometry, context) : undefined,
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_json1_1ExpenseDocument = (output: any, context: __SerdeContext): ExpenseDocument => {
  return {
    ExpenseIndex: __expectInt32(output.ExpenseIndex),
    LineItemGroups:
      output.LineItemGroups != undefined
        ? deserializeAws_json1_1LineItemGroupList(output.LineItemGroups, context)
        : undefined,
    SummaryFields:
      output.SummaryFields != undefined
        ? deserializeAws_json1_1ExpenseFieldList(output.SummaryFields, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ExpenseDocumentList = (output: any, context: __SerdeContext): ExpenseDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExpenseDocument(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExpenseField = (output: any, context: __SerdeContext): ExpenseField => {
  return {
    LabelDetection:
      output.LabelDetection != undefined
        ? deserializeAws_json1_1ExpenseDetection(output.LabelDetection, context)
        : undefined,
    PageNumber: __expectInt32(output.PageNumber),
    Type: output.Type != undefined ? deserializeAws_json1_1ExpenseType(output.Type, context) : undefined,
    ValueDetection:
      output.ValueDetection != undefined
        ? deserializeAws_json1_1ExpenseDetection(output.ValueDetection, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ExpenseFieldList = (output: any, context: __SerdeContext): ExpenseField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExpenseField(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExpenseType = (output: any, context: __SerdeContext): ExpenseType => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_json1_1Geometry = (output: any, context: __SerdeContext): Geometry => {
  return {
    BoundingBox:
      output.BoundingBox != undefined ? deserializeAws_json1_1BoundingBox(output.BoundingBox, context) : undefined,
    Polygon: output.Polygon != undefined ? deserializeAws_json1_1Polygon(output.Polygon, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetDocumentAnalysisResponse = (
  output: any,
  context: __SerdeContext
): GetDocumentAnalysisResponse => {
  return {
    AnalyzeDocumentModelVersion: __expectString(output.AnalyzeDocumentModelVersion),
    Blocks: output.Blocks != undefined ? deserializeAws_json1_1BlockList(output.Blocks, context) : undefined,
    DocumentMetadata:
      output.DocumentMetadata != undefined
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
    Warnings: output.Warnings != undefined ? deserializeAws_json1_1Warnings(output.Warnings, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetDocumentTextDetectionResponse = (
  output: any,
  context: __SerdeContext
): GetDocumentTextDetectionResponse => {
  return {
    Blocks: output.Blocks != undefined ? deserializeAws_json1_1BlockList(output.Blocks, context) : undefined,
    DetectDocumentTextModelVersion: __expectString(output.DetectDocumentTextModelVersion),
    DocumentMetadata:
      output.DocumentMetadata != undefined
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
    Warnings: output.Warnings != undefined ? deserializeAws_json1_1Warnings(output.Warnings, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetExpenseAnalysisResponse = (
  output: any,
  context: __SerdeContext
): GetExpenseAnalysisResponse => {
  return {
    AnalyzeExpenseModelVersion: __expectString(output.AnalyzeExpenseModelVersion),
    DocumentMetadata:
      output.DocumentMetadata != undefined
        ? deserializeAws_json1_1DocumentMetadata(output.DocumentMetadata, context)
        : undefined,
    ExpenseDocuments:
      output.ExpenseDocuments != undefined
        ? deserializeAws_json1_1ExpenseDocumentList(output.ExpenseDocuments, context)
        : undefined,
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
    Warnings: output.Warnings != undefined ? deserializeAws_json1_1Warnings(output.Warnings, context) : undefined,
  } as any;
};

const deserializeAws_json1_1HumanLoopActivationOutput = (
  output: any,
  context: __SerdeContext
): HumanLoopActivationOutput => {
  return {
    HumanLoopActivationConditionsEvaluationResults:
      output.HumanLoopActivationConditionsEvaluationResults != undefined
        ? new __LazyJsonString(output.HumanLoopActivationConditionsEvaluationResults)
        : undefined,
    HumanLoopActivationReasons:
      output.HumanLoopActivationReasons != undefined
        ? deserializeAws_json1_1HumanLoopActivationReasons(output.HumanLoopActivationReasons, context)
        : undefined,
    HumanLoopArn: __expectString(output.HumanLoopArn),
  } as any;
};

const deserializeAws_json1_1HumanLoopActivationReasons = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
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

const deserializeAws_json1_1IdentityDocument = (output: any, context: __SerdeContext): IdentityDocument => {
  return {
    DocumentIndex: __expectInt32(output.DocumentIndex),
    IdentityDocumentFields:
      output.IdentityDocumentFields != undefined
        ? deserializeAws_json1_1IdentityDocumentFieldList(output.IdentityDocumentFields, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1IdentityDocumentField = (output: any, context: __SerdeContext): IdentityDocumentField => {
  return {
    Type: output.Type != undefined ? deserializeAws_json1_1AnalyzeIDDetections(output.Type, context) : undefined,
    ValueDetection:
      output.ValueDetection != undefined
        ? deserializeAws_json1_1AnalyzeIDDetections(output.ValueDetection, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1IdentityDocumentFieldList = (
  output: any,
  context: __SerdeContext
): IdentityDocumentField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1IdentityDocumentField(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1IdentityDocumentList = (output: any, context: __SerdeContext): IdentityDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1IdentityDocument(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1IdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
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
      output.LineItemExpenseFields != undefined
        ? deserializeAws_json1_1ExpenseFieldList(output.LineItemExpenseFields, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LineItemGroup = (output: any, context: __SerdeContext): LineItemGroup => {
  return {
    LineItemGroupIndex: __expectInt32(output.LineItemGroupIndex),
    LineItems:
      output.LineItems != undefined ? deserializeAws_json1_1LineItemList(output.LineItems, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LineItemGroupList = (output: any, context: __SerdeContext): LineItemGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LineItemGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LineItemList = (output: any, context: __SerdeContext): LineItemFields[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LineItemFields(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1NormalizedValue = (output: any, context: __SerdeContext): NormalizedValue => {
  return {
    Value: __expectString(output.Value),
    ValueType: __expectString(output.ValueType),
  } as any;
};

const deserializeAws_json1_1Pages = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1Point = (output: any, context: __SerdeContext): Point => {
  return {
    X: __limitedParseFloat32(output.X),
    Y: __limitedParseFloat32(output.Y),
  } as any;
};

const deserializeAws_json1_1Polygon = (output: any, context: __SerdeContext): Point[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Point(entry, context);
    });
  return retVal;
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

const deserializeAws_json1_1Query = (output: any, context: __SerdeContext): Query => {
  return {
    Alias: __expectString(output.Alias),
    Pages: output.Pages != undefined ? deserializeAws_json1_1QueryPages(output.Pages, context) : undefined,
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_json1_1QueryPages = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1Relationship = (output: any, context: __SerdeContext): Relationship => {
  return {
    Ids: output.Ids != undefined ? deserializeAws_json1_1IdList(output.Ids, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1RelationshipList = (output: any, context: __SerdeContext): Relationship[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Relationship(entry, context);
    });
  return retVal;
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

const deserializeAws_json1_1StartExpenseAnalysisResponse = (
  output: any,
  context: __SerdeContext
): StartExpenseAnalysisResponse => {
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
    Pages: output.Pages != undefined ? deserializeAws_json1_1Pages(output.Pages, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Warnings = (output: any, context: __SerdeContext): Warning[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Warning(entry, context);
    });
  return retVal;
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
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
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
};
