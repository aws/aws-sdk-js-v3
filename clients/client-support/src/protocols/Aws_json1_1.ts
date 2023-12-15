// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AddAttachmentsToSetCommandInput,
  AddAttachmentsToSetCommandOutput,
} from "../commands/AddAttachmentsToSetCommand";
import {
  AddCommunicationToCaseCommandInput,
  AddCommunicationToCaseCommandOutput,
} from "../commands/AddCommunicationToCaseCommand";
import { CreateCaseCommandInput, CreateCaseCommandOutput } from "../commands/CreateCaseCommand";
import { DescribeAttachmentCommandInput, DescribeAttachmentCommandOutput } from "../commands/DescribeAttachmentCommand";
import { DescribeCasesCommandInput, DescribeCasesCommandOutput } from "../commands/DescribeCasesCommand";
import {
  DescribeCommunicationsCommandInput,
  DescribeCommunicationsCommandOutput,
} from "../commands/DescribeCommunicationsCommand";
import {
  DescribeCreateCaseOptionsCommandInput,
  DescribeCreateCaseOptionsCommandOutput,
} from "../commands/DescribeCreateCaseOptionsCommand";
import { DescribeServicesCommandInput, DescribeServicesCommandOutput } from "../commands/DescribeServicesCommand";
import {
  DescribeSeverityLevelsCommandInput,
  DescribeSeverityLevelsCommandOutput,
} from "../commands/DescribeSeverityLevelsCommand";
import {
  DescribeSupportedLanguagesCommandInput,
  DescribeSupportedLanguagesCommandOutput,
} from "../commands/DescribeSupportedLanguagesCommand";
import {
  DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
  DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput,
} from "../commands/DescribeTrustedAdvisorCheckRefreshStatusesCommand";
import {
  DescribeTrustedAdvisorCheckResultCommandInput,
  DescribeTrustedAdvisorCheckResultCommandOutput,
} from "../commands/DescribeTrustedAdvisorCheckResultCommand";
import {
  DescribeTrustedAdvisorChecksCommandInput,
  DescribeTrustedAdvisorChecksCommandOutput,
} from "../commands/DescribeTrustedAdvisorChecksCommand";
import {
  DescribeTrustedAdvisorCheckSummariesCommandInput,
  DescribeTrustedAdvisorCheckSummariesCommandOutput,
} from "../commands/DescribeTrustedAdvisorCheckSummariesCommand";
import {
  RefreshTrustedAdvisorCheckCommandInput,
  RefreshTrustedAdvisorCheckCommandOutput,
} from "../commands/RefreshTrustedAdvisorCheckCommand";
import { ResolveCaseCommandInput, ResolveCaseCommandOutput } from "../commands/ResolveCaseCommand";
import {
  AddAttachmentsToSetRequest,
  AddCommunicationToCaseRequest,
  Attachment,
  AttachmentIdNotFound,
  AttachmentLimitExceeded,
  AttachmentSetExpired,
  AttachmentSetIdNotFound,
  AttachmentSetSizeLimitExceeded,
  CaseCreationLimitExceeded,
  CaseIdNotFound,
  CreateCaseRequest,
  DescribeAttachmentLimitExceeded,
  DescribeAttachmentRequest,
  DescribeAttachmentResponse,
  DescribeCasesRequest,
  DescribeCommunicationsRequest,
  DescribeCreateCaseOptionsRequest,
  DescribeServicesRequest,
  DescribeSeverityLevelsRequest,
  DescribeSupportedLanguagesRequest,
  DescribeTrustedAdvisorCheckRefreshStatusesRequest,
  DescribeTrustedAdvisorCheckResultRequest,
  DescribeTrustedAdvisorCheckResultResponse,
  DescribeTrustedAdvisorChecksRequest,
  DescribeTrustedAdvisorChecksResponse,
  DescribeTrustedAdvisorCheckSummariesRequest,
  DescribeTrustedAdvisorCheckSummariesResponse,
  InternalServerError,
  RefreshTrustedAdvisorCheckRequest,
  ResolveCaseRequest,
  ThrottlingException,
  TrustedAdvisorCategorySpecificSummary,
  TrustedAdvisorCheckDescription,
  TrustedAdvisorCheckResult,
  TrustedAdvisorCheckSummary,
  TrustedAdvisorCostOptimizingSummary,
  TrustedAdvisorResourceDetail,
} from "../models/models_0";
import { SupportServiceException as __BaseException } from "../models/SupportServiceException";

/**
 * serializeAws_json1_1AddAttachmentsToSetCommand
 */
export const se_AddAttachmentsToSetCommand = async (
  input: AddAttachmentsToSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddAttachmentsToSet");
  let body: any;
  body = JSON.stringify(se_AddAttachmentsToSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddCommunicationToCaseCommand
 */
export const se_AddCommunicationToCaseCommand = async (
  input: AddCommunicationToCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddCommunicationToCase");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCaseCommand
 */
export const se_CreateCaseCommand = async (
  input: CreateCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCase");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAttachmentCommand
 */
export const se_DescribeAttachmentCommand = async (
  input: DescribeAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAttachment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCasesCommand
 */
export const se_DescribeCasesCommand = async (
  input: DescribeCasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCases");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCommunicationsCommand
 */
export const se_DescribeCommunicationsCommand = async (
  input: DescribeCommunicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCommunications");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCreateCaseOptionsCommand
 */
export const se_DescribeCreateCaseOptionsCommand = async (
  input: DescribeCreateCaseOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCreateCaseOptions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeServicesCommand
 */
export const se_DescribeServicesCommand = async (
  input: DescribeServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeServices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSeverityLevelsCommand
 */
export const se_DescribeSeverityLevelsCommand = async (
  input: DescribeSeverityLevelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSeverityLevels");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSupportedLanguagesCommand
 */
export const se_DescribeSupportedLanguagesCommand = async (
  input: DescribeSupportedLanguagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSupportedLanguages");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand
 */
export const se_DescribeTrustedAdvisorCheckRefreshStatusesCommand = async (
  input: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTrustedAdvisorCheckRefreshStatuses");
  let body: any;
  body = JSON.stringify(se_DescribeTrustedAdvisorCheckRefreshStatusesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand
 */
export const se_DescribeTrustedAdvisorCheckResultCommand = async (
  input: DescribeTrustedAdvisorCheckResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTrustedAdvisorCheckResult");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTrustedAdvisorChecksCommand
 */
export const se_DescribeTrustedAdvisorChecksCommand = async (
  input: DescribeTrustedAdvisorChecksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTrustedAdvisorChecks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand
 */
export const se_DescribeTrustedAdvisorCheckSummariesCommand = async (
  input: DescribeTrustedAdvisorCheckSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTrustedAdvisorCheckSummaries");
  let body: any;
  body = JSON.stringify(se_DescribeTrustedAdvisorCheckSummariesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RefreshTrustedAdvisorCheckCommand
 */
export const se_RefreshTrustedAdvisorCheckCommand = async (
  input: RefreshTrustedAdvisorCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RefreshTrustedAdvisorCheck");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResolveCaseCommand
 */
export const se_ResolveCaseCommand = async (
  input: ResolveCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResolveCase");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddAttachmentsToSetCommand
 */
export const de_AddAttachmentsToSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddAttachmentsToSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddAttachmentsToSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddAttachmentsToSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddAttachmentsToSetCommandError
 */
const de_AddAttachmentsToSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddAttachmentsToSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AttachmentLimitExceeded":
    case "com.amazonaws.support#AttachmentLimitExceeded":
      throw await de_AttachmentLimitExceededRes(parsedOutput, context);
    case "AttachmentSetExpired":
    case "com.amazonaws.support#AttachmentSetExpired":
      throw await de_AttachmentSetExpiredRes(parsedOutput, context);
    case "AttachmentSetIdNotFound":
    case "com.amazonaws.support#AttachmentSetIdNotFound":
      throw await de_AttachmentSetIdNotFoundRes(parsedOutput, context);
    case "AttachmentSetSizeLimitExceeded":
    case "com.amazonaws.support#AttachmentSetSizeLimitExceeded":
      throw await de_AttachmentSetSizeLimitExceededRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AddCommunicationToCaseCommand
 */
export const de_AddCommunicationToCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCommunicationToCaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddCommunicationToCaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddCommunicationToCaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddCommunicationToCaseCommandError
 */
const de_AddCommunicationToCaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCommunicationToCaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AttachmentSetExpired":
    case "com.amazonaws.support#AttachmentSetExpired":
      throw await de_AttachmentSetExpiredRes(parsedOutput, context);
    case "AttachmentSetIdNotFound":
    case "com.amazonaws.support#AttachmentSetIdNotFound":
      throw await de_AttachmentSetIdNotFoundRes(parsedOutput, context);
    case "CaseIdNotFound":
    case "com.amazonaws.support#CaseIdNotFound":
      throw await de_CaseIdNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateCaseCommand
 */
export const de_CreateCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateCaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateCaseCommandError
 */
const de_CreateCaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AttachmentSetExpired":
    case "com.amazonaws.support#AttachmentSetExpired":
      throw await de_AttachmentSetExpiredRes(parsedOutput, context);
    case "AttachmentSetIdNotFound":
    case "com.amazonaws.support#AttachmentSetIdNotFound":
      throw await de_AttachmentSetIdNotFoundRes(parsedOutput, context);
    case "CaseCreationLimitExceeded":
    case "com.amazonaws.support#CaseCreationLimitExceeded":
      throw await de_CaseCreationLimitExceededRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAttachmentCommand
 */
export const de_DescribeAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttachmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAttachmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAttachmentResponse(data, context);
  const response: DescribeAttachmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAttachmentCommandError
 */
const de_DescribeAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AttachmentIdNotFound":
    case "com.amazonaws.support#AttachmentIdNotFound":
      throw await de_AttachmentIdNotFoundRes(parsedOutput, context);
    case "DescribeAttachmentLimitExceeded":
    case "com.amazonaws.support#DescribeAttachmentLimitExceeded":
      throw await de_DescribeAttachmentLimitExceededRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeCasesCommand
 */
export const de_DescribeCasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeCasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCasesCommandError
 */
const de_DescribeCasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CaseIdNotFound":
    case "com.amazonaws.support#CaseIdNotFound":
      throw await de_CaseIdNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeCommunicationsCommand
 */
export const de_DescribeCommunicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommunicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCommunicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeCommunicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCommunicationsCommandError
 */
const de_DescribeCommunicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommunicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CaseIdNotFound":
    case "com.amazonaws.support#CaseIdNotFound":
      throw await de_CaseIdNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeCreateCaseOptionsCommand
 */
export const de_DescribeCreateCaseOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCreateCaseOptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCreateCaseOptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeCreateCaseOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCreateCaseOptionsCommandError
 */
const de_DescribeCreateCaseOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCreateCaseOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.support#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeServicesCommand
 */
export const de_DescribeServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeServicesCommandError
 */
const de_DescribeServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeSeverityLevelsCommand
 */
export const de_DescribeSeverityLevelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSeverityLevelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSeverityLevelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeSeverityLevelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeSeverityLevelsCommandError
 */
const de_DescribeSeverityLevelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSeverityLevelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeSupportedLanguagesCommand
 */
export const de_DescribeSupportedLanguagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSupportedLanguagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSupportedLanguagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeSupportedLanguagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeSupportedLanguagesCommandError
 */
const de_DescribeSupportedLanguagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSupportedLanguagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.support#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand
 */
export const de_DescribeTrustedAdvisorCheckRefreshStatusesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTrustedAdvisorCheckRefreshStatusesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommandError
 */
const de_DescribeTrustedAdvisorCheckRefreshStatusesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.support#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand
 */
export const de_DescribeTrustedAdvisorCheckResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTrustedAdvisorCheckResultCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTrustedAdvisorCheckResultResponse(data, context);
  const response: DescribeTrustedAdvisorCheckResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommandError
 */
const de_DescribeTrustedAdvisorCheckResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.support#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand
 */
export const de_DescribeTrustedAdvisorChecksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorChecksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTrustedAdvisorChecksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTrustedAdvisorChecksResponse(data, context);
  const response: DescribeTrustedAdvisorChecksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTrustedAdvisorChecksCommandError
 */
const de_DescribeTrustedAdvisorChecksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorChecksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.support#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand
 */
export const de_DescribeTrustedAdvisorCheckSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckSummariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTrustedAdvisorCheckSummariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTrustedAdvisorCheckSummariesResponse(data, context);
  const response: DescribeTrustedAdvisorCheckSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommandError
 */
const de_DescribeTrustedAdvisorCheckSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.support#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand
 */
export const de_RefreshTrustedAdvisorCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshTrustedAdvisorCheckCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RefreshTrustedAdvisorCheckCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RefreshTrustedAdvisorCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RefreshTrustedAdvisorCheckCommandError
 */
const de_RefreshTrustedAdvisorCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshTrustedAdvisorCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ResolveCaseCommand
 */
export const de_ResolveCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveCaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResolveCaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ResolveCaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ResolveCaseCommandError
 */
const de_ResolveCaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveCaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CaseIdNotFound":
    case "com.amazonaws.support#CaseIdNotFound":
      throw await de_CaseIdNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AttachmentIdNotFoundRes
 */
const de_AttachmentIdNotFoundRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttachmentIdNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AttachmentIdNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AttachmentLimitExceededRes
 */
const de_AttachmentLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttachmentLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AttachmentLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AttachmentSetExpiredRes
 */
const de_AttachmentSetExpiredRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttachmentSetExpired> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AttachmentSetExpired({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AttachmentSetIdNotFoundRes
 */
const de_AttachmentSetIdNotFoundRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttachmentSetIdNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AttachmentSetIdNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AttachmentSetSizeLimitExceededRes
 */
const de_AttachmentSetSizeLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttachmentSetSizeLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AttachmentSetSizeLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CaseCreationLimitExceededRes
 */
const de_CaseCreationLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CaseCreationLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CaseCreationLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CaseIdNotFoundRes
 */
const de_CaseIdNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<CaseIdNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CaseIdNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DescribeAttachmentLimitExceededRes
 */
const de_DescribeAttachmentLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DescribeAttachmentLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DescribeAttachmentLimitExceeded({
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
  const deserialized: any = _json(body);
  const exception = new InternalServerError({
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
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AddAttachmentsToSetRequest
 */
const se_AddAttachmentsToSetRequest = (input: AddAttachmentsToSetRequest, context: __SerdeContext): any => {
  return take(input, {
    attachmentSetId: [],
    attachments: (_) => se_Attachments(_, context),
  });
};

// se_AddCommunicationToCaseRequest omitted.

/**
 * serializeAws_json1_1Attachment
 */
const se_Attachment = (input: Attachment, context: __SerdeContext): any => {
  return take(input, {
    data: context.base64Encoder,
    fileName: [],
  });
};

/**
 * serializeAws_json1_1Attachments
 */
const se_Attachments = (input: Attachment[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Attachment(entry, context);
    });
};

// se_CaseIdList omitted.

// se_CcEmailAddressList omitted.

// se_CreateCaseRequest omitted.

// se_DescribeAttachmentRequest omitted.

// se_DescribeCasesRequest omitted.

// se_DescribeCommunicationsRequest omitted.

// se_DescribeCreateCaseOptionsRequest omitted.

// se_DescribeServicesRequest omitted.

// se_DescribeSeverityLevelsRequest omitted.

// se_DescribeSupportedLanguagesRequest omitted.

/**
 * serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesRequest
 */
const se_DescribeTrustedAdvisorCheckRefreshStatusesRequest = (
  input: DescribeTrustedAdvisorCheckRefreshStatusesRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    checkIds: (_) => se_StringList(_, context),
  });
};

// se_DescribeTrustedAdvisorCheckResultRequest omitted.

// se_DescribeTrustedAdvisorChecksRequest omitted.

/**
 * serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesRequest
 */
const se_DescribeTrustedAdvisorCheckSummariesRequest = (
  input: DescribeTrustedAdvisorCheckSummariesRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    checkIds: (_) => se_StringList(_, context),
  });
};

// se_RefreshTrustedAdvisorCheckRequest omitted.

// se_ResolveCaseRequest omitted.

// se_ServiceCodeList omitted.

/**
 * serializeAws_json1_1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input;
};

// de_AddAttachmentsToSetResponse omitted.

// de_AddCommunicationToCaseResponse omitted.

/**
 * deserializeAws_json1_1Attachment
 */
const de_Attachment = (output: any, context: __SerdeContext): Attachment => {
  return take(output, {
    data: context.base64Decoder,
    fileName: __expectString,
  }) as any;
};

// de_AttachmentDetails omitted.

// de_AttachmentIdNotFound omitted.

// de_AttachmentLimitExceeded omitted.

// de_AttachmentSet omitted.

// de_AttachmentSetExpired omitted.

// de_AttachmentSetIdNotFound omitted.

// de_AttachmentSetSizeLimitExceeded omitted.

// de_CaseCreationLimitExceeded omitted.

// de_CaseDetails omitted.

// de_CaseIdNotFound omitted.

// de_CaseList omitted.

// de_Category omitted.

// de_CategoryList omitted.

// de_CcEmailAddressList omitted.

// de_Communication omitted.

// de_CommunicationList omitted.

// de_CommunicationTypeOptions omitted.

// de_CommunicationTypeOptionsList omitted.

// de_CreateCaseResponse omitted.

// de_DateInterval omitted.

// de_DatesWithoutSupportList omitted.

// de_DescribeAttachmentLimitExceeded omitted.

/**
 * deserializeAws_json1_1DescribeAttachmentResponse
 */
const de_DescribeAttachmentResponse = (output: any, context: __SerdeContext): DescribeAttachmentResponse => {
  return take(output, {
    attachment: (_: any) => de_Attachment(_, context),
  }) as any;
};

// de_DescribeCasesResponse omitted.

// de_DescribeCommunicationsResponse omitted.

// de_DescribeCreateCaseOptionsResponse omitted.

// de_DescribeServicesResponse omitted.

// de_DescribeSeverityLevelsResponse omitted.

// de_DescribeSupportedLanguagesResponse omitted.

// de_DescribeTrustedAdvisorCheckRefreshStatusesResponse omitted.

/**
 * deserializeAws_json1_1DescribeTrustedAdvisorCheckResultResponse
 */
const de_DescribeTrustedAdvisorCheckResultResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrustedAdvisorCheckResultResponse => {
  return take(output, {
    result: (_: any) => de_TrustedAdvisorCheckResult(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTrustedAdvisorChecksResponse
 */
const de_DescribeTrustedAdvisorChecksResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrustedAdvisorChecksResponse => {
  return take(output, {
    checks: (_: any) => de_TrustedAdvisorCheckList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesResponse
 */
const de_DescribeTrustedAdvisorCheckSummariesResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrustedAdvisorCheckSummariesResponse => {
  return take(output, {
    summaries: (_: any) => de_TrustedAdvisorCheckSummaryList(_, context),
  }) as any;
};

// de_InternalServerError omitted.

// de_RecentCaseCommunications omitted.

// de_RefreshTrustedAdvisorCheckResponse omitted.

// de_ResolveCaseResponse omitted.

// de_Service omitted.

// de_ServiceList omitted.

// de_SeverityLevel omitted.

// de_SeverityLevelsList omitted.

/**
 * deserializeAws_json1_1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      return null as any;
    }
    return __expectString(entry) as any;
  });
  return retVal;
};

// de_SupportedHour omitted.

// de_SupportedHoursList omitted.

// de_SupportedLanguage omitted.

// de_SupportedLanguagesList omitted.

// de_ThrottlingException omitted.

/**
 * deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary
 */
const de_TrustedAdvisorCategorySpecificSummary = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCategorySpecificSummary => {
  return take(output, {
    costOptimizing: (_: any) => de_TrustedAdvisorCostOptimizingSummary(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1TrustedAdvisorCheckDescription
 */
const de_TrustedAdvisorCheckDescription = (output: any, context: __SerdeContext): TrustedAdvisorCheckDescription => {
  return take(output, {
    category: __expectString,
    description: __expectString,
    id: __expectString,
    metadata: (_: any) => de_StringList(_, context),
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TrustedAdvisorCheckList
 */
const de_TrustedAdvisorCheckList = (output: any, context: __SerdeContext): TrustedAdvisorCheckDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrustedAdvisorCheckDescription(entry, context);
    });
  return retVal;
};

// de_TrustedAdvisorCheckRefreshStatus omitted.

// de_TrustedAdvisorCheckRefreshStatusList omitted.

/**
 * deserializeAws_json1_1TrustedAdvisorCheckResult
 */
const de_TrustedAdvisorCheckResult = (output: any, context: __SerdeContext): TrustedAdvisorCheckResult => {
  return take(output, {
    categorySpecificSummary: (_: any) => de_TrustedAdvisorCategorySpecificSummary(_, context),
    checkId: __expectString,
    flaggedResources: (_: any) => de_TrustedAdvisorResourceDetailList(_, context),
    resourcesSummary: _json,
    status: __expectString,
    timestamp: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TrustedAdvisorCheckSummary
 */
const de_TrustedAdvisorCheckSummary = (output: any, context: __SerdeContext): TrustedAdvisorCheckSummary => {
  return take(output, {
    categorySpecificSummary: (_: any) => de_TrustedAdvisorCategorySpecificSummary(_, context),
    checkId: __expectString,
    hasFlaggedResources: __expectBoolean,
    resourcesSummary: _json,
    status: __expectString,
    timestamp: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TrustedAdvisorCheckSummaryList
 */
const de_TrustedAdvisorCheckSummaryList = (output: any, context: __SerdeContext): TrustedAdvisorCheckSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrustedAdvisorCheckSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrustedAdvisorCostOptimizingSummary
 */
const de_TrustedAdvisorCostOptimizingSummary = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCostOptimizingSummary => {
  return take(output, {
    estimatedMonthlySavings: __limitedParseDouble,
    estimatedPercentMonthlySavings: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1TrustedAdvisorResourceDetail
 */
const de_TrustedAdvisorResourceDetail = (output: any, context: __SerdeContext): TrustedAdvisorResourceDetail => {
  return take(output, {
    isSuppressed: __expectBoolean,
    metadata: (_: any) => de_StringList(_, context),
    region: __expectString,
    resourceId: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TrustedAdvisorResourceDetailList
 */
const de_TrustedAdvisorResourceDetailList = (output: any, context: __SerdeContext): TrustedAdvisorResourceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrustedAdvisorResourceDetail(entry, context);
    });
  return retVal;
};

// de_TrustedAdvisorResourcesSummary omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
    "x-amz-target": `AWSSupport_20130415.${operation}`,
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
