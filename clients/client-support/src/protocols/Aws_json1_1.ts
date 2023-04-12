// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
import { DescribeServicesCommandInput, DescribeServicesCommandOutput } from "../commands/DescribeServicesCommand";
import {
  DescribeSeverityLevelsCommandInput,
  DescribeSeverityLevelsCommandOutput,
} from "../commands/DescribeSeverityLevelsCommand";
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
  AddAttachmentsToSetResponse,
  AddCommunicationToCaseRequest,
  AddCommunicationToCaseResponse,
  Attachment,
  AttachmentDetails,
  AttachmentIdNotFound,
  AttachmentLimitExceeded,
  AttachmentSetExpired,
  AttachmentSetIdNotFound,
  AttachmentSetSizeLimitExceeded,
  CaseCreationLimitExceeded,
  CaseDetails,
  CaseIdNotFound,
  Category,
  Communication,
  CreateCaseRequest,
  CreateCaseResponse,
  DescribeAttachmentLimitExceeded,
  DescribeAttachmentRequest,
  DescribeAttachmentResponse,
  DescribeCasesRequest,
  DescribeCasesResponse,
  DescribeCommunicationsRequest,
  DescribeCommunicationsResponse,
  DescribeServicesRequest,
  DescribeServicesResponse,
  DescribeSeverityLevelsRequest,
  DescribeSeverityLevelsResponse,
  DescribeTrustedAdvisorCheckRefreshStatusesRequest,
  DescribeTrustedAdvisorCheckRefreshStatusesResponse,
  DescribeTrustedAdvisorCheckResultRequest,
  DescribeTrustedAdvisorCheckResultResponse,
  DescribeTrustedAdvisorChecksRequest,
  DescribeTrustedAdvisorChecksResponse,
  DescribeTrustedAdvisorCheckSummariesRequest,
  DescribeTrustedAdvisorCheckSummariesResponse,
  InternalServerError,
  RecentCaseCommunications,
  RefreshTrustedAdvisorCheckRequest,
  RefreshTrustedAdvisorCheckResponse,
  ResolveCaseRequest,
  ResolveCaseResponse,
  Service,
  SeverityLevel,
  TrustedAdvisorCategorySpecificSummary,
  TrustedAdvisorCheckDescription,
  TrustedAdvisorCheckRefreshStatus,
  TrustedAdvisorCheckResult,
  TrustedAdvisorCheckSummary,
  TrustedAdvisorCostOptimizingSummary,
  TrustedAdvisorResourceDetail,
  TrustedAdvisorResourcesSummary,
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
  body = JSON.stringify(se_AddCommunicationToCaseRequest(input, context));
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
  body = JSON.stringify(se_CreateCaseRequest(input, context));
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
  body = JSON.stringify(se_DescribeAttachmentRequest(input, context));
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
  body = JSON.stringify(se_DescribeCasesRequest(input, context));
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
  body = JSON.stringify(se_DescribeCommunicationsRequest(input, context));
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
  body = JSON.stringify(se_DescribeServicesRequest(input, context));
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
  body = JSON.stringify(se_DescribeSeverityLevelsRequest(input, context));
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
  body = JSON.stringify(se_DescribeTrustedAdvisorCheckResultRequest(input, context));
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
  body = JSON.stringify(se_DescribeTrustedAdvisorChecksRequest(input, context));
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
  body = JSON.stringify(se_RefreshTrustedAdvisorCheckRequest(input, context));
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
  body = JSON.stringify(se_ResolveCaseRequest(input, context));
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
  contents = de_AddAttachmentsToSetResponse(data, context);
  const response: AddAttachmentsToSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_AddCommunicationToCaseResponse(data, context);
  const response: AddCommunicationToCaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateCaseResponse(data, context);
  const response: CreateCaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeCasesResponse(data, context);
  const response: DescribeCasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeCommunicationsResponse(data, context);
  const response: DescribeCommunicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeServicesResponse(data, context);
  const response: DescribeServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeSeverityLevelsResponse(data, context);
  const response: DescribeSeverityLevelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeTrustedAdvisorCheckRefreshStatusesResponse(data, context);
  const response: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
  return Promise.resolve(response);
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
  return Promise.resolve(response);
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
  return Promise.resolve(response);
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
  contents = de_RefreshTrustedAdvisorCheckResponse(data, context);
  const response: RefreshTrustedAdvisorCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ResolveCaseResponse(data, context);
  const response: ResolveCaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_AttachmentIdNotFound(body, context);
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
  const deserialized: any = de_AttachmentLimitExceeded(body, context);
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
  const deserialized: any = de_AttachmentSetExpired(body, context);
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
  const deserialized: any = de_AttachmentSetIdNotFound(body, context);
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
  const deserialized: any = de_AttachmentSetSizeLimitExceeded(body, context);
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
  const deserialized: any = de_CaseCreationLimitExceeded(body, context);
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
  const deserialized: any = de_CaseIdNotFound(body, context);
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
  const deserialized: any = de_DescribeAttachmentLimitExceeded(body, context);
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
  const deserialized: any = de_InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AddAttachmentsToSetRequest
 */
const se_AddAttachmentsToSetRequest = (input: AddAttachmentsToSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.attachmentSetId != null && { attachmentSetId: input.attachmentSetId }),
    ...(input.attachments != null && { attachments: se_Attachments(input.attachments, context) }),
  };
};

/**
 * serializeAws_json1_1AddCommunicationToCaseRequest
 */
const se_AddCommunicationToCaseRequest = (input: AddCommunicationToCaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.attachmentSetId != null && { attachmentSetId: input.attachmentSetId }),
    ...(input.caseId != null && { caseId: input.caseId }),
    ...(input.ccEmailAddresses != null && { ccEmailAddresses: se_CcEmailAddressList(input.ccEmailAddresses, context) }),
    ...(input.communicationBody != null && { communicationBody: input.communicationBody }),
  };
};

/**
 * serializeAws_json1_1Attachment
 */
const se_Attachment = (input: Attachment, context: __SerdeContext): any => {
  return {
    ...(input.data != null && { data: context.base64Encoder(input.data) }),
    ...(input.fileName != null && { fileName: input.fileName }),
  };
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

/**
 * serializeAws_json1_1CaseIdList
 */
const se_CaseIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CcEmailAddressList
 */
const se_CcEmailAddressList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CreateCaseRequest
 */
const se_CreateCaseRequest = (input: CreateCaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.attachmentSetId != null && { attachmentSetId: input.attachmentSetId }),
    ...(input.categoryCode != null && { categoryCode: input.categoryCode }),
    ...(input.ccEmailAddresses != null && { ccEmailAddresses: se_CcEmailAddressList(input.ccEmailAddresses, context) }),
    ...(input.communicationBody != null && { communicationBody: input.communicationBody }),
    ...(input.issueType != null && { issueType: input.issueType }),
    ...(input.language != null && { language: input.language }),
    ...(input.serviceCode != null && { serviceCode: input.serviceCode }),
    ...(input.severityCode != null && { severityCode: input.severityCode }),
    ...(input.subject != null && { subject: input.subject }),
  };
};

/**
 * serializeAws_json1_1DescribeAttachmentRequest
 */
const se_DescribeAttachmentRequest = (input: DescribeAttachmentRequest, context: __SerdeContext): any => {
  return {
    ...(input.attachmentId != null && { attachmentId: input.attachmentId }),
  };
};

/**
 * serializeAws_json1_1DescribeCasesRequest
 */
const se_DescribeCasesRequest = (input: DescribeCasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.afterTime != null && { afterTime: input.afterTime }),
    ...(input.beforeTime != null && { beforeTime: input.beforeTime }),
    ...(input.caseIdList != null && { caseIdList: se_CaseIdList(input.caseIdList, context) }),
    ...(input.displayId != null && { displayId: input.displayId }),
    ...(input.includeCommunications != null && { includeCommunications: input.includeCommunications }),
    ...(input.includeResolvedCases != null && { includeResolvedCases: input.includeResolvedCases }),
    ...(input.language != null && { language: input.language }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeCommunicationsRequest
 */
const se_DescribeCommunicationsRequest = (input: DescribeCommunicationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.afterTime != null && { afterTime: input.afterTime }),
    ...(input.beforeTime != null && { beforeTime: input.beforeTime }),
    ...(input.caseId != null && { caseId: input.caseId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeServicesRequest
 */
const se_DescribeServicesRequest = (input: DescribeServicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.language != null && { language: input.language }),
    ...(input.serviceCodeList != null && { serviceCodeList: se_ServiceCodeList(input.serviceCodeList, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeSeverityLevelsRequest
 */
const se_DescribeSeverityLevelsRequest = (input: DescribeSeverityLevelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.language != null && { language: input.language }),
  };
};

/**
 * serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesRequest
 */
const se_DescribeTrustedAdvisorCheckRefreshStatusesRequest = (
  input: DescribeTrustedAdvisorCheckRefreshStatusesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.checkIds != null && { checkIds: se_StringList(input.checkIds, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeTrustedAdvisorCheckResultRequest
 */
const se_DescribeTrustedAdvisorCheckResultRequest = (
  input: DescribeTrustedAdvisorCheckResultRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.checkId != null && { checkId: input.checkId }),
    ...(input.language != null && { language: input.language }),
  };
};

/**
 * serializeAws_json1_1DescribeTrustedAdvisorChecksRequest
 */
const se_DescribeTrustedAdvisorChecksRequest = (
  input: DescribeTrustedAdvisorChecksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.language != null && { language: input.language }),
  };
};

/**
 * serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesRequest
 */
const se_DescribeTrustedAdvisorCheckSummariesRequest = (
  input: DescribeTrustedAdvisorCheckSummariesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.checkIds != null && { checkIds: se_StringList(input.checkIds, context) }),
  };
};

/**
 * serializeAws_json1_1RefreshTrustedAdvisorCheckRequest
 */
const se_RefreshTrustedAdvisorCheckRequest = (
  input: RefreshTrustedAdvisorCheckRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.checkId != null && { checkId: input.checkId }),
  };
};

/**
 * serializeAws_json1_1ResolveCaseRequest
 */
const se_ResolveCaseRequest = (input: ResolveCaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.caseId != null && { caseId: input.caseId }),
  };
};

/**
 * serializeAws_json1_1ServiceCodeList
 */
const se_ServiceCodeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => {
    if (entry === null) {
      return null as any;
    }
    return entry;
  });
};

/**
 * deserializeAws_json1_1AddAttachmentsToSetResponse
 */
const de_AddAttachmentsToSetResponse = (output: any, context: __SerdeContext): AddAttachmentsToSetResponse => {
  return {
    attachmentSetId: __expectString(output.attachmentSetId),
    expiryTime: __expectString(output.expiryTime),
  } as any;
};

/**
 * deserializeAws_json1_1AddCommunicationToCaseResponse
 */
const de_AddCommunicationToCaseResponse = (output: any, context: __SerdeContext): AddCommunicationToCaseResponse => {
  return {
    result: __expectBoolean(output.result),
  } as any;
};

/**
 * deserializeAws_json1_1Attachment
 */
const de_Attachment = (output: any, context: __SerdeContext): Attachment => {
  return {
    data: output.data != null ? context.base64Decoder(output.data) : undefined,
    fileName: __expectString(output.fileName),
  } as any;
};

/**
 * deserializeAws_json1_1AttachmentDetails
 */
const de_AttachmentDetails = (output: any, context: __SerdeContext): AttachmentDetails => {
  return {
    attachmentId: __expectString(output.attachmentId),
    fileName: __expectString(output.fileName),
  } as any;
};

/**
 * deserializeAws_json1_1AttachmentIdNotFound
 */
const de_AttachmentIdNotFound = (output: any, context: __SerdeContext): AttachmentIdNotFound => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1AttachmentLimitExceeded
 */
const de_AttachmentLimitExceeded = (output: any, context: __SerdeContext): AttachmentLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1AttachmentSet
 */
const de_AttachmentSet = (output: any, context: __SerdeContext): AttachmentDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttachmentDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AttachmentSetExpired
 */
const de_AttachmentSetExpired = (output: any, context: __SerdeContext): AttachmentSetExpired => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1AttachmentSetIdNotFound
 */
const de_AttachmentSetIdNotFound = (output: any, context: __SerdeContext): AttachmentSetIdNotFound => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1AttachmentSetSizeLimitExceeded
 */
const de_AttachmentSetSizeLimitExceeded = (output: any, context: __SerdeContext): AttachmentSetSizeLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CaseCreationLimitExceeded
 */
const de_CaseCreationLimitExceeded = (output: any, context: __SerdeContext): CaseCreationLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CaseDetails
 */
const de_CaseDetails = (output: any, context: __SerdeContext): CaseDetails => {
  return {
    caseId: __expectString(output.caseId),
    categoryCode: __expectString(output.categoryCode),
    ccEmailAddresses:
      output.ccEmailAddresses != null ? de_CcEmailAddressList(output.ccEmailAddresses, context) : undefined,
    displayId: __expectString(output.displayId),
    language: __expectString(output.language),
    recentCommunications:
      output.recentCommunications != null
        ? de_RecentCaseCommunications(output.recentCommunications, context)
        : undefined,
    serviceCode: __expectString(output.serviceCode),
    severityCode: __expectString(output.severityCode),
    status: __expectString(output.status),
    subject: __expectString(output.subject),
    submittedBy: __expectString(output.submittedBy),
    timeCreated: __expectString(output.timeCreated),
  } as any;
};

/**
 * deserializeAws_json1_1CaseIdNotFound
 */
const de_CaseIdNotFound = (output: any, context: __SerdeContext): CaseIdNotFound => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CaseList
 */
const de_CaseList = (output: any, context: __SerdeContext): CaseDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CaseDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Category
 */
const de_Category = (output: any, context: __SerdeContext): Category => {
  return {
    code: __expectString(output.code),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1CategoryList
 */
const de_CategoryList = (output: any, context: __SerdeContext): Category[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Category(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CcEmailAddressList
 */
const de_CcEmailAddressList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Communication
 */
const de_Communication = (output: any, context: __SerdeContext): Communication => {
  return {
    attachmentSet: output.attachmentSet != null ? de_AttachmentSet(output.attachmentSet, context) : undefined,
    body: __expectString(output.body),
    caseId: __expectString(output.caseId),
    submittedBy: __expectString(output.submittedBy),
    timeCreated: __expectString(output.timeCreated),
  } as any;
};

/**
 * deserializeAws_json1_1CommunicationList
 */
const de_CommunicationList = (output: any, context: __SerdeContext): Communication[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Communication(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateCaseResponse
 */
const de_CreateCaseResponse = (output: any, context: __SerdeContext): CreateCaseResponse => {
  return {
    caseId: __expectString(output.caseId),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAttachmentLimitExceeded
 */
const de_DescribeAttachmentLimitExceeded = (output: any, context: __SerdeContext): DescribeAttachmentLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAttachmentResponse
 */
const de_DescribeAttachmentResponse = (output: any, context: __SerdeContext): DescribeAttachmentResponse => {
  return {
    attachment: output.attachment != null ? de_Attachment(output.attachment, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCasesResponse
 */
const de_DescribeCasesResponse = (output: any, context: __SerdeContext): DescribeCasesResponse => {
  return {
    cases: output.cases != null ? de_CaseList(output.cases, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCommunicationsResponse
 */
const de_DescribeCommunicationsResponse = (output: any, context: __SerdeContext): DescribeCommunicationsResponse => {
  return {
    communications: output.communications != null ? de_CommunicationList(output.communications, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeServicesResponse
 */
const de_DescribeServicesResponse = (output: any, context: __SerdeContext): DescribeServicesResponse => {
  return {
    services: output.services != null ? de_ServiceList(output.services, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSeverityLevelsResponse
 */
const de_DescribeSeverityLevelsResponse = (output: any, context: __SerdeContext): DescribeSeverityLevelsResponse => {
  return {
    severityLevels: output.severityLevels != null ? de_SeverityLevelsList(output.severityLevels, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesResponse
 */
const de_DescribeTrustedAdvisorCheckRefreshStatusesResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrustedAdvisorCheckRefreshStatusesResponse => {
  return {
    statuses: output.statuses != null ? de_TrustedAdvisorCheckRefreshStatusList(output.statuses, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTrustedAdvisorCheckResultResponse
 */
const de_DescribeTrustedAdvisorCheckResultResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrustedAdvisorCheckResultResponse => {
  return {
    result: output.result != null ? de_TrustedAdvisorCheckResult(output.result, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTrustedAdvisorChecksResponse
 */
const de_DescribeTrustedAdvisorChecksResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrustedAdvisorChecksResponse => {
  return {
    checks: output.checks != null ? de_TrustedAdvisorCheckList(output.checks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesResponse
 */
const de_DescribeTrustedAdvisorCheckSummariesResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrustedAdvisorCheckSummariesResponse => {
  return {
    summaries: output.summaries != null ? de_TrustedAdvisorCheckSummaryList(output.summaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InternalServerError
 */
const de_InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RecentCaseCommunications
 */
const de_RecentCaseCommunications = (output: any, context: __SerdeContext): RecentCaseCommunications => {
  return {
    communications: output.communications != null ? de_CommunicationList(output.communications, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1RefreshTrustedAdvisorCheckResponse
 */
const de_RefreshTrustedAdvisorCheckResponse = (
  output: any,
  context: __SerdeContext
): RefreshTrustedAdvisorCheckResponse => {
  return {
    status: output.status != null ? de_TrustedAdvisorCheckRefreshStatus(output.status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResolveCaseResponse
 */
const de_ResolveCaseResponse = (output: any, context: __SerdeContext): ResolveCaseResponse => {
  return {
    finalCaseStatus: __expectString(output.finalCaseStatus),
    initialCaseStatus: __expectString(output.initialCaseStatus),
  } as any;
};

/**
 * deserializeAws_json1_1Service
 */
const de_Service = (output: any, context: __SerdeContext): Service => {
  return {
    categories: output.categories != null ? de_CategoryList(output.categories, context) : undefined,
    code: __expectString(output.code),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceList
 */
const de_ServiceList = (output: any, context: __SerdeContext): Service[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Service(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SeverityLevel
 */
const de_SeverityLevel = (output: any, context: __SerdeContext): SeverityLevel => {
  return {
    code: __expectString(output.code),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1SeverityLevelsList
 */
const de_SeverityLevelsList = (output: any, context: __SerdeContext): SeverityLevel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SeverityLevel(entry, context);
    });
  return retVal;
};

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

/**
 * deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary
 */
const de_TrustedAdvisorCategorySpecificSummary = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCategorySpecificSummary => {
  return {
    costOptimizing:
      output.costOptimizing != null
        ? de_TrustedAdvisorCostOptimizingSummary(output.costOptimizing, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TrustedAdvisorCheckDescription
 */
const de_TrustedAdvisorCheckDescription = (output: any, context: __SerdeContext): TrustedAdvisorCheckDescription => {
  return {
    category: __expectString(output.category),
    description: __expectString(output.description),
    id: __expectString(output.id),
    metadata: output.metadata != null ? de_StringList(output.metadata, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1TrustedAdvisorCheckList
 */
const de_TrustedAdvisorCheckList = (output: any, context: __SerdeContext): TrustedAdvisorCheckDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TrustedAdvisorCheckDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrustedAdvisorCheckRefreshStatus
 */
const de_TrustedAdvisorCheckRefreshStatus = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCheckRefreshStatus => {
  return {
    checkId: __expectString(output.checkId),
    millisUntilNextRefreshable: __expectLong(output.millisUntilNextRefreshable),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1TrustedAdvisorCheckRefreshStatusList
 */
const de_TrustedAdvisorCheckRefreshStatusList = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCheckRefreshStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TrustedAdvisorCheckRefreshStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrustedAdvisorCheckResult
 */
const de_TrustedAdvisorCheckResult = (output: any, context: __SerdeContext): TrustedAdvisorCheckResult => {
  return {
    categorySpecificSummary:
      output.categorySpecificSummary != null
        ? de_TrustedAdvisorCategorySpecificSummary(output.categorySpecificSummary, context)
        : undefined,
    checkId: __expectString(output.checkId),
    flaggedResources:
      output.flaggedResources != null
        ? de_TrustedAdvisorResourceDetailList(output.flaggedResources, context)
        : undefined,
    resourcesSummary:
      output.resourcesSummary != null ? de_TrustedAdvisorResourcesSummary(output.resourcesSummary, context) : undefined,
    status: __expectString(output.status),
    timestamp: __expectString(output.timestamp),
  } as any;
};

/**
 * deserializeAws_json1_1TrustedAdvisorCheckSummary
 */
const de_TrustedAdvisorCheckSummary = (output: any, context: __SerdeContext): TrustedAdvisorCheckSummary => {
  return {
    categorySpecificSummary:
      output.categorySpecificSummary != null
        ? de_TrustedAdvisorCategorySpecificSummary(output.categorySpecificSummary, context)
        : undefined,
    checkId: __expectString(output.checkId),
    hasFlaggedResources: __expectBoolean(output.hasFlaggedResources),
    resourcesSummary:
      output.resourcesSummary != null ? de_TrustedAdvisorResourcesSummary(output.resourcesSummary, context) : undefined,
    status: __expectString(output.status),
    timestamp: __expectString(output.timestamp),
  } as any;
};

/**
 * deserializeAws_json1_1TrustedAdvisorCheckSummaryList
 */
const de_TrustedAdvisorCheckSummaryList = (output: any, context: __SerdeContext): TrustedAdvisorCheckSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
  return {
    estimatedMonthlySavings: __limitedParseDouble(output.estimatedMonthlySavings),
    estimatedPercentMonthlySavings: __limitedParseDouble(output.estimatedPercentMonthlySavings),
  } as any;
};

/**
 * deserializeAws_json1_1TrustedAdvisorResourceDetail
 */
const de_TrustedAdvisorResourceDetail = (output: any, context: __SerdeContext): TrustedAdvisorResourceDetail => {
  return {
    isSuppressed: __expectBoolean(output.isSuppressed),
    metadata: output.metadata != null ? de_StringList(output.metadata, context) : undefined,
    region: __expectString(output.region),
    resourceId: __expectString(output.resourceId),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1TrustedAdvisorResourceDetailList
 */
const de_TrustedAdvisorResourceDetailList = (output: any, context: __SerdeContext): TrustedAdvisorResourceDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TrustedAdvisorResourceDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrustedAdvisorResourcesSummary
 */
const de_TrustedAdvisorResourcesSummary = (output: any, context: __SerdeContext): TrustedAdvisorResourcesSummary => {
  return {
    resourcesFlagged: __expectLong(output.resourcesFlagged),
    resourcesIgnored: __expectLong(output.resourcesIgnored),
    resourcesProcessed: __expectLong(output.resourcesProcessed),
    resourcesSuppressed: __expectLong(output.resourcesSuppressed),
  } as any;
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
