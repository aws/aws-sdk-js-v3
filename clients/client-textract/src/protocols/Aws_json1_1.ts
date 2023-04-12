// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectString as __expectString,
  LazyJsonString as __LazyJsonString,
  limitedParseFloat32 as __limitedParseFloat32,
  throwDefaultError,
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
import { GetLendingAnalysisCommandInput, GetLendingAnalysisCommandOutput } from "../commands/GetLendingAnalysisCommand";
import {
  GetLendingAnalysisSummaryCommandInput,
  GetLendingAnalysisSummaryCommandOutput,
} from "../commands/GetLendingAnalysisSummaryCommand";
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
  StartLendingAnalysisCommandInput,
  StartLendingAnalysisCommandOutput,
} from "../commands/StartLendingAnalysisCommand";
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
  DetectedSignature,
  Document,
  DocumentGroup,
  DocumentLocation,
  DocumentMetadata,
  DocumentTooLargeException,
  EntityType,
  ExpenseCurrency,
  ExpenseDetection,
  ExpenseDocument,
  ExpenseField,
  ExpenseGroupProperty,
  ExpenseType,
  Extraction,
  FeatureType,
  Geometry,
  GetDocumentAnalysisRequest,
  GetDocumentAnalysisResponse,
  GetDocumentTextDetectionRequest,
  GetDocumentTextDetectionResponse,
  GetExpenseAnalysisRequest,
  GetExpenseAnalysisResponse,
  GetLendingAnalysisRequest,
  GetLendingAnalysisResponse,
  GetLendingAnalysisSummaryRequest,
  GetLendingAnalysisSummaryResponse,
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
  LendingDetection,
  LendingDocument,
  LendingField,
  LendingResult,
  LendingSummary,
  LimitExceededException,
  LineItemFields,
  LineItemGroup,
  NormalizedValue,
  NotificationChannel,
  OutputConfig,
  PageClassification,
  Point,
  Prediction,
  ProvisionedThroughputExceededException,
  QueriesConfig,
  Query,
  Relationship,
  S3Object,
  SignatureDetection,
  SplitDocument,
  StartDocumentAnalysisRequest,
  StartDocumentAnalysisResponse,
  StartDocumentTextDetectionRequest,
  StartDocumentTextDetectionResponse,
  StartExpenseAnalysisRequest,
  StartExpenseAnalysisResponse,
  StartLendingAnalysisRequest,
  StartLendingAnalysisResponse,
  ThrottlingException,
  UndetectedSignature,
  UnsupportedDocumentException,
  Warning,
} from "../models/models_0";
import { TextractServiceException as __BaseException } from "../models/TextractServiceException";

/**
 * serializeAws_json1_1AnalyzeDocumentCommand
 */
export const se_AnalyzeDocumentCommand = async (
  input: AnalyzeDocumentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AnalyzeDocument");
  let body: any;
  body = JSON.stringify(se_AnalyzeDocumentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AnalyzeExpenseCommand
 */
export const se_AnalyzeExpenseCommand = async (
  input: AnalyzeExpenseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AnalyzeExpense");
  let body: any;
  body = JSON.stringify(se_AnalyzeExpenseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AnalyzeIDCommand
 */
export const se_AnalyzeIDCommand = async (
  input: AnalyzeIDCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AnalyzeID");
  let body: any;
  body = JSON.stringify(se_AnalyzeIDRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetectDocumentTextCommand
 */
export const se_DetectDocumentTextCommand = async (
  input: DetectDocumentTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetectDocumentText");
  let body: any;
  body = JSON.stringify(se_DetectDocumentTextRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDocumentAnalysisCommand
 */
export const se_GetDocumentAnalysisCommand = async (
  input: GetDocumentAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDocumentAnalysis");
  let body: any;
  body = JSON.stringify(se_GetDocumentAnalysisRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDocumentTextDetectionCommand
 */
export const se_GetDocumentTextDetectionCommand = async (
  input: GetDocumentTextDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDocumentTextDetection");
  let body: any;
  body = JSON.stringify(se_GetDocumentTextDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetExpenseAnalysisCommand
 */
export const se_GetExpenseAnalysisCommand = async (
  input: GetExpenseAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetExpenseAnalysis");
  let body: any;
  body = JSON.stringify(se_GetExpenseAnalysisRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLendingAnalysisCommand
 */
export const se_GetLendingAnalysisCommand = async (
  input: GetLendingAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLendingAnalysis");
  let body: any;
  body = JSON.stringify(se_GetLendingAnalysisRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLendingAnalysisSummaryCommand
 */
export const se_GetLendingAnalysisSummaryCommand = async (
  input: GetLendingAnalysisSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLendingAnalysisSummary");
  let body: any;
  body = JSON.stringify(se_GetLendingAnalysisSummaryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartDocumentAnalysisCommand
 */
export const se_StartDocumentAnalysisCommand = async (
  input: StartDocumentAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDocumentAnalysis");
  let body: any;
  body = JSON.stringify(se_StartDocumentAnalysisRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartDocumentTextDetectionCommand
 */
export const se_StartDocumentTextDetectionCommand = async (
  input: StartDocumentTextDetectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDocumentTextDetection");
  let body: any;
  body = JSON.stringify(se_StartDocumentTextDetectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartExpenseAnalysisCommand
 */
export const se_StartExpenseAnalysisCommand = async (
  input: StartExpenseAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartExpenseAnalysis");
  let body: any;
  body = JSON.stringify(se_StartExpenseAnalysisRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartLendingAnalysisCommand
 */
export const se_StartLendingAnalysisCommand = async (
  input: StartLendingAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartLendingAnalysis");
  let body: any;
  body = JSON.stringify(se_StartLendingAnalysisRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AnalyzeDocumentCommand
 */
export const de_AnalyzeDocumentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeDocumentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AnalyzeDocumentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AnalyzeDocumentResponse(data, context);
  const response: AnalyzeDocumentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AnalyzeDocumentCommandError
 */
const de_AnalyzeDocumentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeDocumentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      throw await de_BadDocumentExceptionRes(parsedOutput, context);
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      throw await de_DocumentTooLargeExceptionRes(parsedOutput, context);
    case "HumanLoopQuotaExceededException":
    case "com.amazonaws.textract#HumanLoopQuotaExceededException":
      throw await de_HumanLoopQuotaExceededExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      throw await de_UnsupportedDocumentExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AnalyzeExpenseCommand
 */
export const de_AnalyzeExpenseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeExpenseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AnalyzeExpenseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AnalyzeExpenseResponse(data, context);
  const response: AnalyzeExpenseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AnalyzeExpenseCommandError
 */
const de_AnalyzeExpenseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeExpenseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      throw await de_BadDocumentExceptionRes(parsedOutput, context);
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      throw await de_DocumentTooLargeExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      throw await de_UnsupportedDocumentExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AnalyzeIDCommand
 */
export const de_AnalyzeIDCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeIDCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AnalyzeIDCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AnalyzeIDResponse(data, context);
  const response: AnalyzeIDCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AnalyzeIDCommandError
 */
const de_AnalyzeIDCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AnalyzeIDCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      throw await de_BadDocumentExceptionRes(parsedOutput, context);
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      throw await de_DocumentTooLargeExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      throw await de_UnsupportedDocumentExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DetectDocumentTextCommand
 */
export const de_DetectDocumentTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectDocumentTextCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetectDocumentTextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DetectDocumentTextResponse(data, context);
  const response: DetectDocumentTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetectDocumentTextCommandError
 */
const de_DetectDocumentTextCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectDocumentTextCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      throw await de_BadDocumentExceptionRes(parsedOutput, context);
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      throw await de_DocumentTooLargeExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      throw await de_UnsupportedDocumentExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDocumentAnalysisCommand
 */
export const de_GetDocumentAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDocumentAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDocumentAnalysisResponse(data, context);
  const response: GetDocumentAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDocumentAnalysisCommandError
 */
const de_GetDocumentAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidJobIdException":
    case "com.amazonaws.textract#InvalidJobIdException":
      throw await de_InvalidJobIdExceptionRes(parsedOutput, context);
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      throw await de_InvalidKMSKeyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDocumentTextDetectionCommand
 */
export const de_GetDocumentTextDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentTextDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDocumentTextDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDocumentTextDetectionResponse(data, context);
  const response: GetDocumentTextDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDocumentTextDetectionCommandError
 */
const de_GetDocumentTextDetectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDocumentTextDetectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidJobIdException":
    case "com.amazonaws.textract#InvalidJobIdException":
      throw await de_InvalidJobIdExceptionRes(parsedOutput, context);
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      throw await de_InvalidKMSKeyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetExpenseAnalysisCommand
 */
export const de_GetExpenseAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExpenseAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetExpenseAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetExpenseAnalysisResponse(data, context);
  const response: GetExpenseAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetExpenseAnalysisCommandError
 */
const de_GetExpenseAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExpenseAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidJobIdException":
    case "com.amazonaws.textract#InvalidJobIdException":
      throw await de_InvalidJobIdExceptionRes(parsedOutput, context);
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      throw await de_InvalidKMSKeyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetLendingAnalysisCommand
 */
export const de_GetLendingAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLendingAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLendingAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLendingAnalysisResponse(data, context);
  const response: GetLendingAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLendingAnalysisCommandError
 */
const de_GetLendingAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLendingAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidJobIdException":
    case "com.amazonaws.textract#InvalidJobIdException":
      throw await de_InvalidJobIdExceptionRes(parsedOutput, context);
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      throw await de_InvalidKMSKeyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetLendingAnalysisSummaryCommand
 */
export const de_GetLendingAnalysisSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLendingAnalysisSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLendingAnalysisSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLendingAnalysisSummaryResponse(data, context);
  const response: GetLendingAnalysisSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLendingAnalysisSummaryCommandError
 */
const de_GetLendingAnalysisSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLendingAnalysisSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidJobIdException":
    case "com.amazonaws.textract#InvalidJobIdException":
      throw await de_InvalidJobIdExceptionRes(parsedOutput, context);
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      throw await de_InvalidKMSKeyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartDocumentAnalysisCommand
 */
export const de_StartDocumentAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartDocumentAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartDocumentAnalysisResponse(data, context);
  const response: StartDocumentAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartDocumentAnalysisCommandError
 */
const de_StartDocumentAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      throw await de_BadDocumentExceptionRes(parsedOutput, context);
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      throw await de_DocumentTooLargeExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.textract#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      throw await de_InvalidKMSKeyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.textract#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      throw await de_UnsupportedDocumentExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartDocumentTextDetectionCommand
 */
export const de_StartDocumentTextDetectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentTextDetectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartDocumentTextDetectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartDocumentTextDetectionResponse(data, context);
  const response: StartDocumentTextDetectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartDocumentTextDetectionCommandError
 */
const de_StartDocumentTextDetectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDocumentTextDetectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      throw await de_BadDocumentExceptionRes(parsedOutput, context);
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      throw await de_DocumentTooLargeExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.textract#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      throw await de_InvalidKMSKeyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.textract#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      throw await de_UnsupportedDocumentExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartExpenseAnalysisCommand
 */
export const de_StartExpenseAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExpenseAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartExpenseAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartExpenseAnalysisResponse(data, context);
  const response: StartExpenseAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartExpenseAnalysisCommandError
 */
const de_StartExpenseAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExpenseAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      throw await de_BadDocumentExceptionRes(parsedOutput, context);
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      throw await de_DocumentTooLargeExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.textract#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      throw await de_InvalidKMSKeyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.textract#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      throw await de_UnsupportedDocumentExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartLendingAnalysisCommand
 */
export const de_StartLendingAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLendingAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartLendingAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartLendingAnalysisResponse(data, context);
  const response: StartLendingAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartLendingAnalysisCommandError
 */
const de_StartLendingAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLendingAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.textract#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadDocumentException":
    case "com.amazonaws.textract#BadDocumentException":
      throw await de_BadDocumentExceptionRes(parsedOutput, context);
    case "DocumentTooLargeException":
    case "com.amazonaws.textract#DocumentTooLargeException":
      throw await de_DocumentTooLargeExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.textract#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.textract#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidKMSKeyException":
    case "com.amazonaws.textract#InvalidKMSKeyException":
      throw await de_InvalidKMSKeyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.textract#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3ObjectException":
    case "com.amazonaws.textract#InvalidS3ObjectException":
      throw await de_InvalidS3ObjectExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.textract#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.textract#ProvisionedThroughputExceededException":
      throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.textract#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnsupportedDocumentException":
    case "com.amazonaws.textract#UnsupportedDocumentException":
      throw await de_UnsupportedDocumentExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BadDocumentExceptionRes
 */
const de_BadDocumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_BadDocumentException(body, context);
  const exception = new BadDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DocumentTooLargeExceptionRes
 */
const de_DocumentTooLargeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DocumentTooLargeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DocumentTooLargeException(body, context);
  const exception = new DocumentTooLargeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1HumanLoopQuotaExceededExceptionRes
 */
const de_HumanLoopQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HumanLoopQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HumanLoopQuotaExceededException(body, context);
  const exception = new HumanLoopQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IdempotentParameterMismatchExceptionRes
 */
const de_IdempotentParameterMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IdempotentParameterMismatchException(body, context);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidJobIdExceptionRes
 */
const de_InvalidJobIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidJobIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidJobIdException(body, context);
  const exception = new InvalidJobIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidKMSKeyExceptionRes
 */
const de_InvalidKMSKeyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKMSKeyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidKMSKeyException(body, context);
  const exception = new InvalidKMSKeyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidS3ObjectExceptionRes
 */
const de_InvalidS3ObjectExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3ObjectException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidS3ObjectException(body, context);
  const exception = new InvalidS3ObjectException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ProvisionedThroughputExceededExceptionRes
 */
const de_ProvisionedThroughputExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ProvisionedThroughputExceededException(body, context);
  const exception = new ProvisionedThroughputExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedDocumentExceptionRes
 */
const de_UnsupportedDocumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedDocumentException(body, context);
  const exception = new UnsupportedDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AnalyzeDocumentRequest
 */
const se_AnalyzeDocumentRequest = (input: AnalyzeDocumentRequest, context: __SerdeContext): any => {
  return {
    ...(input.Document != null && { Document: se_Document(input.Document, context) }),
    ...(input.FeatureTypes != null && { FeatureTypes: se_FeatureTypes(input.FeatureTypes, context) }),
    ...(input.HumanLoopConfig != null && { HumanLoopConfig: se_HumanLoopConfig(input.HumanLoopConfig, context) }),
    ...(input.QueriesConfig != null && { QueriesConfig: se_QueriesConfig(input.QueriesConfig, context) }),
  };
};

/**
 * serializeAws_json1_1AnalyzeExpenseRequest
 */
const se_AnalyzeExpenseRequest = (input: AnalyzeExpenseRequest, context: __SerdeContext): any => {
  return {
    ...(input.Document != null && { Document: se_Document(input.Document, context) }),
  };
};

/**
 * serializeAws_json1_1AnalyzeIDRequest
 */
const se_AnalyzeIDRequest = (input: AnalyzeIDRequest, context: __SerdeContext): any => {
  return {
    ...(input.DocumentPages != null && { DocumentPages: se_DocumentPages(input.DocumentPages, context) }),
  };
};

/**
 * serializeAws_json1_1ContentClassifiers
 */
const se_ContentClassifiers = (input: (ContentClassifier | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DetectDocumentTextRequest
 */
const se_DetectDocumentTextRequest = (input: DetectDocumentTextRequest, context: __SerdeContext): any => {
  return {
    ...(input.Document != null && { Document: se_Document(input.Document, context) }),
  };
};

/**
 * serializeAws_json1_1Document
 */
const se_Document = (input: Document, context: __SerdeContext): any => {
  return {
    ...(input.Bytes != null && { Bytes: context.base64Encoder(input.Bytes) }),
    ...(input.S3Object != null && { S3Object: se_S3Object(input.S3Object, context) }),
  };
};

/**
 * serializeAws_json1_1DocumentLocation
 */
const se_DocumentLocation = (input: DocumentLocation, context: __SerdeContext): any => {
  return {
    ...(input.S3Object != null && { S3Object: se_S3Object(input.S3Object, context) }),
  };
};

/**
 * serializeAws_json1_1DocumentPages
 */
const se_DocumentPages = (input: Document[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Document(entry, context);
    });
};

/**
 * serializeAws_json1_1FeatureTypes
 */
const se_FeatureTypes = (input: (FeatureType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetDocumentAnalysisRequest
 */
const se_GetDocumentAnalysisRequest = (input: GetDocumentAnalysisRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1GetDocumentTextDetectionRequest
 */
const se_GetDocumentTextDetectionRequest = (input: GetDocumentTextDetectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1GetExpenseAnalysisRequest
 */
const se_GetExpenseAnalysisRequest = (input: GetExpenseAnalysisRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1GetLendingAnalysisRequest
 */
const se_GetLendingAnalysisRequest = (input: GetLendingAnalysisRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1GetLendingAnalysisSummaryRequest
 */
const se_GetLendingAnalysisSummaryRequest = (input: GetLendingAnalysisSummaryRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
  };
};

/**
 * serializeAws_json1_1HumanLoopConfig
 */
const se_HumanLoopConfig = (input: HumanLoopConfig, context: __SerdeContext): any => {
  return {
    ...(input.DataAttributes != null && { DataAttributes: se_HumanLoopDataAttributes(input.DataAttributes, context) }),
    ...(input.FlowDefinitionArn != null && { FlowDefinitionArn: input.FlowDefinitionArn }),
    ...(input.HumanLoopName != null && { HumanLoopName: input.HumanLoopName }),
  };
};

/**
 * serializeAws_json1_1HumanLoopDataAttributes
 */
const se_HumanLoopDataAttributes = (input: HumanLoopDataAttributes, context: __SerdeContext): any => {
  return {
    ...(input.ContentClassifiers != null && {
      ContentClassifiers: se_ContentClassifiers(input.ContentClassifiers, context),
    }),
  };
};

/**
 * serializeAws_json1_1NotificationChannel
 */
const se_NotificationChannel = (input: NotificationChannel, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SNSTopicArn != null && { SNSTopicArn: input.SNSTopicArn }),
  };
};

/**
 * serializeAws_json1_1OutputConfig
 */
const se_OutputConfig = (input: OutputConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Prefix != null && { S3Prefix: input.S3Prefix }),
  };
};

/**
 * serializeAws_json1_1Queries
 */
const se_Queries = (input: Query[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Query(entry, context);
    });
};

/**
 * serializeAws_json1_1QueriesConfig
 */
const se_QueriesConfig = (input: QueriesConfig, context: __SerdeContext): any => {
  return {
    ...(input.Queries != null && { Queries: se_Queries(input.Queries, context) }),
  };
};

/**
 * serializeAws_json1_1Query
 */
const se_Query = (input: Query, context: __SerdeContext): any => {
  return {
    ...(input.Alias != null && { Alias: input.Alias }),
    ...(input.Pages != null && { Pages: se_QueryPages(input.Pages, context) }),
    ...(input.Text != null && { Text: input.Text }),
  };
};

/**
 * serializeAws_json1_1QueryPages
 */
const se_QueryPages = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1S3Object
 */
const se_S3Object = (input: S3Object, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1StartDocumentAnalysisRequest
 */
const se_StartDocumentAnalysisRequest = (input: StartDocumentAnalysisRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.DocumentLocation != null && { DocumentLocation: se_DocumentLocation(input.DocumentLocation, context) }),
    ...(input.FeatureTypes != null && { FeatureTypes: se_FeatureTypes(input.FeatureTypes, context) }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.KMSKeyId != null && { KMSKeyId: input.KMSKeyId }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: se_NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.OutputConfig != null && { OutputConfig: se_OutputConfig(input.OutputConfig, context) }),
    ...(input.QueriesConfig != null && { QueriesConfig: se_QueriesConfig(input.QueriesConfig, context) }),
  };
};

/**
 * serializeAws_json1_1StartDocumentTextDetectionRequest
 */
const se_StartDocumentTextDetectionRequest = (
  input: StartDocumentTextDetectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.DocumentLocation != null && { DocumentLocation: se_DocumentLocation(input.DocumentLocation, context) }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.KMSKeyId != null && { KMSKeyId: input.KMSKeyId }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: se_NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.OutputConfig != null && { OutputConfig: se_OutputConfig(input.OutputConfig, context) }),
  };
};

/**
 * serializeAws_json1_1StartExpenseAnalysisRequest
 */
const se_StartExpenseAnalysisRequest = (input: StartExpenseAnalysisRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.DocumentLocation != null && { DocumentLocation: se_DocumentLocation(input.DocumentLocation, context) }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.KMSKeyId != null && { KMSKeyId: input.KMSKeyId }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: se_NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.OutputConfig != null && { OutputConfig: se_OutputConfig(input.OutputConfig, context) }),
  };
};

/**
 * serializeAws_json1_1StartLendingAnalysisRequest
 */
const se_StartLendingAnalysisRequest = (input: StartLendingAnalysisRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.DocumentLocation != null && { DocumentLocation: se_DocumentLocation(input.DocumentLocation, context) }),
    ...(input.JobTag != null && { JobTag: input.JobTag }),
    ...(input.KMSKeyId != null && { KMSKeyId: input.KMSKeyId }),
    ...(input.NotificationChannel != null && {
      NotificationChannel: se_NotificationChannel(input.NotificationChannel, context),
    }),
    ...(input.OutputConfig != null && { OutputConfig: se_OutputConfig(input.OutputConfig, context) }),
  };
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AnalyzeDocumentResponse
 */
const de_AnalyzeDocumentResponse = (output: any, context: __SerdeContext): AnalyzeDocumentResponse => {
  return {
    AnalyzeDocumentModelVersion: __expectString(output.AnalyzeDocumentModelVersion),
    Blocks: output.Blocks != null ? de_BlockList(output.Blocks, context) : undefined,
    DocumentMetadata:
      output.DocumentMetadata != null ? de_DocumentMetadata(output.DocumentMetadata, context) : undefined,
    HumanLoopActivationOutput:
      output.HumanLoopActivationOutput != null
        ? de_HumanLoopActivationOutput(output.HumanLoopActivationOutput, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AnalyzeExpenseResponse
 */
const de_AnalyzeExpenseResponse = (output: any, context: __SerdeContext): AnalyzeExpenseResponse => {
  return {
    DocumentMetadata:
      output.DocumentMetadata != null ? de_DocumentMetadata(output.DocumentMetadata, context) : undefined,
    ExpenseDocuments:
      output.ExpenseDocuments != null ? de_ExpenseDocumentList(output.ExpenseDocuments, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AnalyzeIDDetections
 */
const de_AnalyzeIDDetections = (output: any, context: __SerdeContext): AnalyzeIDDetections => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    NormalizedValue: output.NormalizedValue != null ? de_NormalizedValue(output.NormalizedValue, context) : undefined,
    Text: __expectString(output.Text),
  } as any;
};

/**
 * deserializeAws_json1_1AnalyzeIDResponse
 */
const de_AnalyzeIDResponse = (output: any, context: __SerdeContext): AnalyzeIDResponse => {
  return {
    AnalyzeIDModelVersion: __expectString(output.AnalyzeIDModelVersion),
    DocumentMetadata:
      output.DocumentMetadata != null ? de_DocumentMetadata(output.DocumentMetadata, context) : undefined,
    IdentityDocuments:
      output.IdentityDocuments != null ? de_IdentityDocumentList(output.IdentityDocuments, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BadDocumentException
 */
const de_BadDocumentException = (output: any, context: __SerdeContext): BadDocumentException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Block
 */
const de_Block = (output: any, context: __SerdeContext): Block => {
  return {
    BlockType: __expectString(output.BlockType),
    ColumnIndex: __expectInt32(output.ColumnIndex),
    ColumnSpan: __expectInt32(output.ColumnSpan),
    Confidence: __limitedParseFloat32(output.Confidence),
    EntityTypes: output.EntityTypes != null ? de_EntityTypes(output.EntityTypes, context) : undefined,
    Geometry: output.Geometry != null ? de_Geometry(output.Geometry, context) : undefined,
    Id: __expectString(output.Id),
    Page: __expectInt32(output.Page),
    Query: output.Query != null ? de_Query(output.Query, context) : undefined,
    Relationships: output.Relationships != null ? de_RelationshipList(output.Relationships, context) : undefined,
    RowIndex: __expectInt32(output.RowIndex),
    RowSpan: __expectInt32(output.RowSpan),
    SelectionStatus: __expectString(output.SelectionStatus),
    Text: __expectString(output.Text),
    TextType: __expectString(output.TextType),
  } as any;
};

/**
 * deserializeAws_json1_1BlockList
 */
const de_BlockList = (output: any, context: __SerdeContext): Block[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Block(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BoundingBox
 */
const de_BoundingBox = (output: any, context: __SerdeContext): BoundingBox => {
  return {
    Height: __limitedParseFloat32(output.Height),
    Left: __limitedParseFloat32(output.Left),
    Top: __limitedParseFloat32(output.Top),
    Width: __limitedParseFloat32(output.Width),
  } as any;
};

/**
 * deserializeAws_json1_1DetectDocumentTextResponse
 */
const de_DetectDocumentTextResponse = (output: any, context: __SerdeContext): DetectDocumentTextResponse => {
  return {
    Blocks: output.Blocks != null ? de_BlockList(output.Blocks, context) : undefined,
    DetectDocumentTextModelVersion: __expectString(output.DetectDocumentTextModelVersion),
    DocumentMetadata:
      output.DocumentMetadata != null ? de_DocumentMetadata(output.DocumentMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetectedSignature
 */
const de_DetectedSignature = (output: any, context: __SerdeContext): DetectedSignature => {
  return {
    Page: __expectInt32(output.Page),
  } as any;
};

/**
 * deserializeAws_json1_1DetectedSignatureList
 */
const de_DetectedSignatureList = (output: any, context: __SerdeContext): DetectedSignature[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DetectedSignature(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentGroup
 */
const de_DocumentGroup = (output: any, context: __SerdeContext): DocumentGroup => {
  return {
    DetectedSignatures:
      output.DetectedSignatures != null ? de_DetectedSignatureList(output.DetectedSignatures, context) : undefined,
    SplitDocuments: output.SplitDocuments != null ? de_SplitDocumentList(output.SplitDocuments, context) : undefined,
    Type: __expectString(output.Type),
    UndetectedSignatures:
      output.UndetectedSignatures != null
        ? de_UndetectedSignatureList(output.UndetectedSignatures, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DocumentGroupList
 */
const de_DocumentGroupList = (output: any, context: __SerdeContext): DocumentGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DocumentGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DocumentMetadata
 */
const de_DocumentMetadata = (output: any, context: __SerdeContext): DocumentMetadata => {
  return {
    Pages: __expectInt32(output.Pages),
  } as any;
};

/**
 * deserializeAws_json1_1DocumentTooLargeException
 */
const de_DocumentTooLargeException = (output: any, context: __SerdeContext): DocumentTooLargeException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EntityTypes
 */
const de_EntityTypes = (output: any, context: __SerdeContext): (EntityType | string)[] => {
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

/**
 * deserializeAws_json1_1ExpenseCurrency
 */
const de_ExpenseCurrency = (output: any, context: __SerdeContext): ExpenseCurrency => {
  return {
    Code: __expectString(output.Code),
    Confidence: __limitedParseFloat32(output.Confidence),
  } as any;
};

/**
 * deserializeAws_json1_1ExpenseDetection
 */
const de_ExpenseDetection = (output: any, context: __SerdeContext): ExpenseDetection => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Geometry: output.Geometry != null ? de_Geometry(output.Geometry, context) : undefined,
    Text: __expectString(output.Text),
  } as any;
};

/**
 * deserializeAws_json1_1ExpenseDocument
 */
const de_ExpenseDocument = (output: any, context: __SerdeContext): ExpenseDocument => {
  return {
    Blocks: output.Blocks != null ? de_BlockList(output.Blocks, context) : undefined,
    ExpenseIndex: __expectInt32(output.ExpenseIndex),
    LineItemGroups: output.LineItemGroups != null ? de_LineItemGroupList(output.LineItemGroups, context) : undefined,
    SummaryFields: output.SummaryFields != null ? de_ExpenseFieldList(output.SummaryFields, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ExpenseDocumentList
 */
const de_ExpenseDocumentList = (output: any, context: __SerdeContext): ExpenseDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExpenseDocument(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExpenseField
 */
const de_ExpenseField = (output: any, context: __SerdeContext): ExpenseField => {
  return {
    Currency: output.Currency != null ? de_ExpenseCurrency(output.Currency, context) : undefined,
    GroupProperties:
      output.GroupProperties != null ? de_ExpenseGroupPropertyList(output.GroupProperties, context) : undefined,
    LabelDetection: output.LabelDetection != null ? de_ExpenseDetection(output.LabelDetection, context) : undefined,
    PageNumber: __expectInt32(output.PageNumber),
    Type: output.Type != null ? de_ExpenseType(output.Type, context) : undefined,
    ValueDetection: output.ValueDetection != null ? de_ExpenseDetection(output.ValueDetection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ExpenseFieldList
 */
const de_ExpenseFieldList = (output: any, context: __SerdeContext): ExpenseField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExpenseField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExpenseGroupProperty
 */
const de_ExpenseGroupProperty = (output: any, context: __SerdeContext): ExpenseGroupProperty => {
  return {
    Id: __expectString(output.Id),
    Types: output.Types != null ? de_StringList(output.Types, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ExpenseGroupPropertyList
 */
const de_ExpenseGroupPropertyList = (output: any, context: __SerdeContext): ExpenseGroupProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExpenseGroupProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExpenseType
 */
const de_ExpenseType = (output: any, context: __SerdeContext): ExpenseType => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Text: __expectString(output.Text),
  } as any;
};

/**
 * deserializeAws_json1_1Extraction
 */
const de_Extraction = (output: any, context: __SerdeContext): Extraction => {
  return {
    ExpenseDocument: output.ExpenseDocument != null ? de_ExpenseDocument(output.ExpenseDocument, context) : undefined,
    IdentityDocument:
      output.IdentityDocument != null ? de_IdentityDocument(output.IdentityDocument, context) : undefined,
    LendingDocument: output.LendingDocument != null ? de_LendingDocument(output.LendingDocument, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ExtractionList
 */
const de_ExtractionList = (output: any, context: __SerdeContext): Extraction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Extraction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Geometry
 */
const de_Geometry = (output: any, context: __SerdeContext): Geometry => {
  return {
    BoundingBox: output.BoundingBox != null ? de_BoundingBox(output.BoundingBox, context) : undefined,
    Polygon: output.Polygon != null ? de_Polygon(output.Polygon, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDocumentAnalysisResponse
 */
const de_GetDocumentAnalysisResponse = (output: any, context: __SerdeContext): GetDocumentAnalysisResponse => {
  return {
    AnalyzeDocumentModelVersion: __expectString(output.AnalyzeDocumentModelVersion),
    Blocks: output.Blocks != null ? de_BlockList(output.Blocks, context) : undefined,
    DocumentMetadata:
      output.DocumentMetadata != null ? de_DocumentMetadata(output.DocumentMetadata, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
    Warnings: output.Warnings != null ? de_Warnings(output.Warnings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDocumentTextDetectionResponse
 */
const de_GetDocumentTextDetectionResponse = (
  output: any,
  context: __SerdeContext
): GetDocumentTextDetectionResponse => {
  return {
    Blocks: output.Blocks != null ? de_BlockList(output.Blocks, context) : undefined,
    DetectDocumentTextModelVersion: __expectString(output.DetectDocumentTextModelVersion),
    DocumentMetadata:
      output.DocumentMetadata != null ? de_DocumentMetadata(output.DocumentMetadata, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
    Warnings: output.Warnings != null ? de_Warnings(output.Warnings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetExpenseAnalysisResponse
 */
const de_GetExpenseAnalysisResponse = (output: any, context: __SerdeContext): GetExpenseAnalysisResponse => {
  return {
    AnalyzeExpenseModelVersion: __expectString(output.AnalyzeExpenseModelVersion),
    DocumentMetadata:
      output.DocumentMetadata != null ? de_DocumentMetadata(output.DocumentMetadata, context) : undefined,
    ExpenseDocuments:
      output.ExpenseDocuments != null ? de_ExpenseDocumentList(output.ExpenseDocuments, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    StatusMessage: __expectString(output.StatusMessage),
    Warnings: output.Warnings != null ? de_Warnings(output.Warnings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetLendingAnalysisResponse
 */
const de_GetLendingAnalysisResponse = (output: any, context: __SerdeContext): GetLendingAnalysisResponse => {
  return {
    AnalyzeLendingModelVersion: __expectString(output.AnalyzeLendingModelVersion),
    DocumentMetadata:
      output.DocumentMetadata != null ? de_DocumentMetadata(output.DocumentMetadata, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
    NextToken: __expectString(output.NextToken),
    Results: output.Results != null ? de_LendingResultList(output.Results, context) : undefined,
    StatusMessage: __expectString(output.StatusMessage),
    Warnings: output.Warnings != null ? de_Warnings(output.Warnings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetLendingAnalysisSummaryResponse
 */
const de_GetLendingAnalysisSummaryResponse = (
  output: any,
  context: __SerdeContext
): GetLendingAnalysisSummaryResponse => {
  return {
    AnalyzeLendingModelVersion: __expectString(output.AnalyzeLendingModelVersion),
    DocumentMetadata:
      output.DocumentMetadata != null ? de_DocumentMetadata(output.DocumentMetadata, context) : undefined,
    JobStatus: __expectString(output.JobStatus),
    StatusMessage: __expectString(output.StatusMessage),
    Summary: output.Summary != null ? de_LendingSummary(output.Summary, context) : undefined,
    Warnings: output.Warnings != null ? de_Warnings(output.Warnings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HumanLoopActivationOutput
 */
const de_HumanLoopActivationOutput = (output: any, context: __SerdeContext): HumanLoopActivationOutput => {
  return {
    HumanLoopActivationConditionsEvaluationResults:
      output.HumanLoopActivationConditionsEvaluationResults != null
        ? new __LazyJsonString(output.HumanLoopActivationConditionsEvaluationResults)
        : undefined,
    HumanLoopActivationReasons:
      output.HumanLoopActivationReasons != null
        ? de_HumanLoopActivationReasons(output.HumanLoopActivationReasons, context)
        : undefined,
    HumanLoopArn: __expectString(output.HumanLoopArn),
  } as any;
};

/**
 * deserializeAws_json1_1HumanLoopActivationReasons
 */
const de_HumanLoopActivationReasons = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1HumanLoopQuotaExceededException
 */
const de_HumanLoopQuotaExceededException = (output: any, context: __SerdeContext): HumanLoopQuotaExceededException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
    QuotaCode: __expectString(output.QuotaCode),
    ResourceType: __expectString(output.ResourceType),
    ServiceCode: __expectString(output.ServiceCode),
  } as any;
};

/**
 * deserializeAws_json1_1IdempotentParameterMismatchException
 */
const de_IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1IdentityDocument
 */
const de_IdentityDocument = (output: any, context: __SerdeContext): IdentityDocument => {
  return {
    Blocks: output.Blocks != null ? de_BlockList(output.Blocks, context) : undefined,
    DocumentIndex: __expectInt32(output.DocumentIndex),
    IdentityDocumentFields:
      output.IdentityDocumentFields != null
        ? de_IdentityDocumentFieldList(output.IdentityDocumentFields, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IdentityDocumentField
 */
const de_IdentityDocumentField = (output: any, context: __SerdeContext): IdentityDocumentField => {
  return {
    Type: output.Type != null ? de_AnalyzeIDDetections(output.Type, context) : undefined,
    ValueDetection: output.ValueDetection != null ? de_AnalyzeIDDetections(output.ValueDetection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IdentityDocumentFieldList
 */
const de_IdentityDocumentFieldList = (output: any, context: __SerdeContext): IdentityDocumentField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IdentityDocumentField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IdentityDocumentList
 */
const de_IdentityDocumentList = (output: any, context: __SerdeContext): IdentityDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IdentityDocument(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IdList
 */
const de_IdList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1InternalServerError
 */
const de_InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidJobIdException
 */
const de_InvalidJobIdException = (output: any, context: __SerdeContext): InvalidJobIdException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidKMSKeyException
 */
const de_InvalidKMSKeyException = (output: any, context: __SerdeContext): InvalidKMSKeyException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidS3ObjectException
 */
const de_InvalidS3ObjectException = (output: any, context: __SerdeContext): InvalidS3ObjectException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1LendingDetection
 */
const de_LendingDetection = (output: any, context: __SerdeContext): LendingDetection => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Geometry: output.Geometry != null ? de_Geometry(output.Geometry, context) : undefined,
    SelectionStatus: __expectString(output.SelectionStatus),
    Text: __expectString(output.Text),
  } as any;
};

/**
 * deserializeAws_json1_1LendingDetectionList
 */
const de_LendingDetectionList = (output: any, context: __SerdeContext): LendingDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LendingDetection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LendingDocument
 */
const de_LendingDocument = (output: any, context: __SerdeContext): LendingDocument => {
  return {
    LendingFields: output.LendingFields != null ? de_LendingFieldList(output.LendingFields, context) : undefined,
    SignatureDetections:
      output.SignatureDetections != null ? de_SignatureDetectionList(output.SignatureDetections, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LendingField
 */
const de_LendingField = (output: any, context: __SerdeContext): LendingField => {
  return {
    KeyDetection: output.KeyDetection != null ? de_LendingDetection(output.KeyDetection, context) : undefined,
    Type: __expectString(output.Type),
    ValueDetections:
      output.ValueDetections != null ? de_LendingDetectionList(output.ValueDetections, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LendingFieldList
 */
const de_LendingFieldList = (output: any, context: __SerdeContext): LendingField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LendingField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LendingResult
 */
const de_LendingResult = (output: any, context: __SerdeContext): LendingResult => {
  return {
    Extractions: output.Extractions != null ? de_ExtractionList(output.Extractions, context) : undefined,
    Page: __expectInt32(output.Page),
    PageClassification:
      output.PageClassification != null ? de_PageClassification(output.PageClassification, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LendingResultList
 */
const de_LendingResultList = (output: any, context: __SerdeContext): LendingResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LendingResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LendingSummary
 */
const de_LendingSummary = (output: any, context: __SerdeContext): LendingSummary => {
  return {
    DocumentGroups: output.DocumentGroups != null ? de_DocumentGroupList(output.DocumentGroups, context) : undefined,
    UndetectedDocumentTypes:
      output.UndetectedDocumentTypes != null
        ? de_UndetectedDocumentTypeList(output.UndetectedDocumentTypes, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1LineItemFields
 */
const de_LineItemFields = (output: any, context: __SerdeContext): LineItemFields => {
  return {
    LineItemExpenseFields:
      output.LineItemExpenseFields != null ? de_ExpenseFieldList(output.LineItemExpenseFields, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LineItemGroup
 */
const de_LineItemGroup = (output: any, context: __SerdeContext): LineItemGroup => {
  return {
    LineItemGroupIndex: __expectInt32(output.LineItemGroupIndex),
    LineItems: output.LineItems != null ? de_LineItemList(output.LineItems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LineItemGroupList
 */
const de_LineItemGroupList = (output: any, context: __SerdeContext): LineItemGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LineItemGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LineItemList
 */
const de_LineItemList = (output: any, context: __SerdeContext): LineItemFields[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LineItemFields(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NormalizedValue
 */
const de_NormalizedValue = (output: any, context: __SerdeContext): NormalizedValue => {
  return {
    Value: __expectString(output.Value),
    ValueType: __expectString(output.ValueType),
  } as any;
};

/**
 * deserializeAws_json1_1PageClassification
 */
const de_PageClassification = (output: any, context: __SerdeContext): PageClassification => {
  return {
    PageNumber: output.PageNumber != null ? de_PredictionList(output.PageNumber, context) : undefined,
    PageType: output.PageType != null ? de_PredictionList(output.PageType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PageList
 */
const de_PageList = (output: any, context: __SerdeContext): number[] => {
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

/**
 * deserializeAws_json1_1Pages
 */
const de_Pages = (output: any, context: __SerdeContext): number[] => {
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

/**
 * deserializeAws_json1_1Point
 */
const de_Point = (output: any, context: __SerdeContext): Point => {
  return {
    X: __limitedParseFloat32(output.X),
    Y: __limitedParseFloat32(output.Y),
  } as any;
};

/**
 * deserializeAws_json1_1Polygon
 */
const de_Polygon = (output: any, context: __SerdeContext): Point[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Point(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Prediction
 */
const de_Prediction = (output: any, context: __SerdeContext): Prediction => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1PredictionList
 */
const de_PredictionList = (output: any, context: __SerdeContext): Prediction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Prediction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProvisionedThroughputExceededException
 */
const de_ProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputExceededException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Query
 */
const de_Query = (output: any, context: __SerdeContext): Query => {
  return {
    Alias: __expectString(output.Alias),
    Pages: output.Pages != null ? de_QueryPages(output.Pages, context) : undefined,
    Text: __expectString(output.Text),
  } as any;
};

/**
 * deserializeAws_json1_1QueryPages
 */
const de_QueryPages = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1Relationship
 */
const de_Relationship = (output: any, context: __SerdeContext): Relationship => {
  return {
    Ids: output.Ids != null ? de_IdList(output.Ids, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1RelationshipList
 */
const de_RelationshipList = (output: any, context: __SerdeContext): Relationship[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Relationship(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SignatureDetection
 */
const de_SignatureDetection = (output: any, context: __SerdeContext): SignatureDetection => {
  return {
    Confidence: __limitedParseFloat32(output.Confidence),
    Geometry: output.Geometry != null ? de_Geometry(output.Geometry, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SignatureDetectionList
 */
const de_SignatureDetectionList = (output: any, context: __SerdeContext): SignatureDetection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SignatureDetection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SplitDocument
 */
const de_SplitDocument = (output: any, context: __SerdeContext): SplitDocument => {
  return {
    Index: __expectInt32(output.Index),
    Pages: output.Pages != null ? de_PageList(output.Pages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SplitDocumentList
 */
const de_SplitDocumentList = (output: any, context: __SerdeContext): SplitDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SplitDocument(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartDocumentAnalysisResponse
 */
const de_StartDocumentAnalysisResponse = (output: any, context: __SerdeContext): StartDocumentAnalysisResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StartDocumentTextDetectionResponse
 */
const de_StartDocumentTextDetectionResponse = (
  output: any,
  context: __SerdeContext
): StartDocumentTextDetectionResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StartExpenseAnalysisResponse
 */
const de_StartExpenseAnalysisResponse = (output: any, context: __SerdeContext): StartExpenseAnalysisResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StartLendingAnalysisResponse
 */
const de_StartLendingAnalysisResponse = (output: any, context: __SerdeContext): StartLendingAnalysisResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UndetectedDocumentTypeList
 */
const de_UndetectedDocumentTypeList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1UndetectedSignature
 */
const de_UndetectedSignature = (output: any, context: __SerdeContext): UndetectedSignature => {
  return {
    Page: __expectInt32(output.Page),
  } as any;
};

/**
 * deserializeAws_json1_1UndetectedSignatureList
 */
const de_UndetectedSignatureList = (output: any, context: __SerdeContext): UndetectedSignature[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UndetectedSignature(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UnsupportedDocumentException
 */
const de_UnsupportedDocumentException = (output: any, context: __SerdeContext): UnsupportedDocumentException => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Warning
 */
const de_Warning = (output: any, context: __SerdeContext): Warning => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Pages: output.Pages != null ? de_Pages(output.Pages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Warnings
 */
const de_Warnings = (output: any, context: __SerdeContext): Warning[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Warning(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `Textract.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
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
