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
  DescribeTrustedAdvisorCheckSummariesCommandInput,
  DescribeTrustedAdvisorCheckSummariesCommandOutput,
} from "../commands/DescribeTrustedAdvisorCheckSummariesCommand";
import {
  DescribeTrustedAdvisorChecksCommandInput,
  DescribeTrustedAdvisorChecksCommandOutput,
} from "../commands/DescribeTrustedAdvisorChecksCommand";
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
  DescribeTrustedAdvisorCheckSummariesRequest,
  DescribeTrustedAdvisorCheckSummariesResponse,
  DescribeTrustedAdvisorChecksRequest,
  DescribeTrustedAdvisorChecksResponse,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
  limitedParseFloat as __limitedParseFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1AddAttachmentsToSetCommand = async (
  input: AddAttachmentsToSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSupport_20130415.AddAttachmentsToSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddAttachmentsToSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddCommunicationToCaseCommand = async (
  input: AddCommunicationToCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSupport_20130415.AddCommunicationToCase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddCommunicationToCaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCaseCommand = async (
  input: CreateCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSupport_20130415.CreateCase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAttachmentCommand = async (
  input: DescribeAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSupport_20130415.DescribeAttachment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAttachmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCasesCommand = async (
  input: DescribeCasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSupport_20130415.DescribeCases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCommunicationsCommand = async (
  input: DescribeCommunicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSupport_20130415.DescribeCommunications",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCommunicationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeServicesCommand = async (
  input: DescribeServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSupport_20130415.DescribeServices",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSeverityLevelsCommand = async (
  input: DescribeSeverityLevelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSupport_20130415.DescribeSeverityLevels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSeverityLevelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand = async (
  input: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand = async (
  input: DescribeTrustedAdvisorCheckResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSupport_20130415.DescribeTrustedAdvisorCheckResult",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTrustedAdvisorCheckResultRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTrustedAdvisorChecksCommand = async (
  input: DescribeTrustedAdvisorChecksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSupport_20130415.DescribeTrustedAdvisorChecks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTrustedAdvisorChecksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand = async (
  input: DescribeTrustedAdvisorCheckSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RefreshTrustedAdvisorCheckCommand = async (
  input: RefreshTrustedAdvisorCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSupport_20130415.RefreshTrustedAdvisorCheck",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RefreshTrustedAdvisorCheckRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResolveCaseCommand = async (
  input: ResolveCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSupport_20130415.ResolveCase",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResolveCaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddAttachmentsToSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddAttachmentsToSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddAttachmentsToSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddAttachmentsToSetResponse(data, context);
  const response: AddAttachmentsToSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddAttachmentsToSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddAttachmentsToSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AttachmentLimitExceeded":
    case "com.amazonaws.support#AttachmentLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1AttachmentLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AttachmentSetExpired":
    case "com.amazonaws.support#AttachmentSetExpired":
      response = {
        ...(await deserializeAws_json1_1AttachmentSetExpiredResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AttachmentSetIdNotFound":
    case "com.amazonaws.support#AttachmentSetIdNotFound":
      response = {
        ...(await deserializeAws_json1_1AttachmentSetIdNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AttachmentSetSizeLimitExceeded":
    case "com.amazonaws.support#AttachmentSetSizeLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1AttachmentSetSizeLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1AddCommunicationToCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCommunicationToCaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddCommunicationToCaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddCommunicationToCaseResponse(data, context);
  const response: AddCommunicationToCaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddCommunicationToCaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCommunicationToCaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AttachmentSetExpired":
    case "com.amazonaws.support#AttachmentSetExpired":
      response = {
        ...(await deserializeAws_json1_1AttachmentSetExpiredResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AttachmentSetIdNotFound":
    case "com.amazonaws.support#AttachmentSetIdNotFound":
      response = {
        ...(await deserializeAws_json1_1AttachmentSetIdNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CaseIdNotFound":
    case "com.amazonaws.support#CaseIdNotFound":
      response = {
        ...(await deserializeAws_json1_1CaseIdNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCaseResponse(data, context);
  const response: CreateCaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AttachmentSetExpired":
    case "com.amazonaws.support#AttachmentSetExpired":
      response = {
        ...(await deserializeAws_json1_1AttachmentSetExpiredResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "AttachmentSetIdNotFound":
    case "com.amazonaws.support#AttachmentSetIdNotFound":
      response = {
        ...(await deserializeAws_json1_1AttachmentSetIdNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CaseCreationLimitExceeded":
    case "com.amazonaws.support#CaseCreationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1CaseCreationLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttachmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAttachmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAttachmentResponse(data, context);
  const response: DescribeAttachmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAttachmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttachmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AttachmentIdNotFound":
    case "com.amazonaws.support#AttachmentIdNotFound":
      response = {
        ...(await deserializeAws_json1_1AttachmentIdNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DescribeAttachmentLimitExceeded":
    case "com.amazonaws.support#DescribeAttachmentLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1DescribeAttachmentLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeCasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCasesResponse(data, context);
  const response: DescribeCasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CaseIdNotFound":
    case "com.amazonaws.support#CaseIdNotFound":
      response = {
        ...(await deserializeAws_json1_1CaseIdNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeCommunicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommunicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCommunicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCommunicationsResponse(data, context);
  const response: DescribeCommunicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCommunicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommunicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CaseIdNotFound":
    case "com.amazonaws.support#CaseIdNotFound":
      response = {
        ...(await deserializeAws_json1_1CaseIdNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeServicesResponse(data, context);
  const response: DescribeServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeSeverityLevelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSeverityLevelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSeverityLevelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSeverityLevelsResponse(data, context);
  const response: DescribeSeverityLevelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSeverityLevelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSeverityLevelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesResponse(data, context);
  const response: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckResultCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTrustedAdvisorCheckResultResponse(data, context);
  const response: DescribeTrustedAdvisorCheckResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckResultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorChecksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTrustedAdvisorChecksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTrustedAdvisorChecksResponse(data, context);
  const response: DescribeTrustedAdvisorChecksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTrustedAdvisorChecksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorChecksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckSummariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesResponse(data, context);
  const response: DescribeTrustedAdvisorCheckSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshTrustedAdvisorCheckCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RefreshTrustedAdvisorCheckCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RefreshTrustedAdvisorCheckResponse(data, context);
  const response: RefreshTrustedAdvisorCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RefreshTrustedAdvisorCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshTrustedAdvisorCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ResolveCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveCaseCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResolveCaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResolveCaseResponse(data, context);
  const response: ResolveCaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResolveCaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveCaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CaseIdNotFound":
    case "com.amazonaws.support#CaseIdNotFound":
      response = {
        ...(await deserializeAws_json1_1CaseIdNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.support#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context)),
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

const deserializeAws_json1_1AttachmentIdNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttachmentIdNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AttachmentIdNotFound(body, context);
  const contents: AttachmentIdNotFound = {
    name: "AttachmentIdNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AttachmentLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttachmentLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AttachmentLimitExceeded(body, context);
  const contents: AttachmentLimitExceeded = {
    name: "AttachmentLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AttachmentSetExpiredResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttachmentSetExpired> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AttachmentSetExpired(body, context);
  const contents: AttachmentSetExpired = {
    name: "AttachmentSetExpired",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AttachmentSetIdNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttachmentSetIdNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AttachmentSetIdNotFound(body, context);
  const contents: AttachmentSetIdNotFound = {
    name: "AttachmentSetIdNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AttachmentSetSizeLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttachmentSetSizeLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AttachmentSetSizeLimitExceeded(body, context);
  const contents: AttachmentSetSizeLimitExceeded = {
    name: "AttachmentSetSizeLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CaseCreationLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CaseCreationLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CaseCreationLimitExceeded(body, context);
  const contents: CaseCreationLimitExceeded = {
    name: "CaseCreationLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CaseIdNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CaseIdNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CaseIdNotFound(body, context);
  const contents: CaseIdNotFound = {
    name: "CaseIdNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DescribeAttachmentLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DescribeAttachmentLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DescribeAttachmentLimitExceeded(body, context);
  const contents: DescribeAttachmentLimitExceeded = {
    name: "DescribeAttachmentLimitExceeded",
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

const serializeAws_json1_1AddAttachmentsToSetRequest = (
  input: AddAttachmentsToSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attachmentSetId !== undefined &&
      input.attachmentSetId !== null && { attachmentSetId: input.attachmentSetId }),
    ...(input.attachments !== undefined &&
      input.attachments !== null && { attachments: serializeAws_json1_1Attachments(input.attachments, context) }),
  };
};

const serializeAws_json1_1AddCommunicationToCaseRequest = (
  input: AddCommunicationToCaseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attachmentSetId !== undefined &&
      input.attachmentSetId !== null && { attachmentSetId: input.attachmentSetId }),
    ...(input.caseId !== undefined && input.caseId !== null && { caseId: input.caseId }),
    ...(input.ccEmailAddresses !== undefined &&
      input.ccEmailAddresses !== null && {
        ccEmailAddresses: serializeAws_json1_1CcEmailAddressList(input.ccEmailAddresses, context),
      }),
    ...(input.communicationBody !== undefined &&
      input.communicationBody !== null && { communicationBody: input.communicationBody }),
  };
};

const serializeAws_json1_1Attachment = (input: Attachment, context: __SerdeContext): any => {
  return {
    ...(input.data !== undefined && input.data !== null && { data: context.base64Encoder(input.data) }),
    ...(input.fileName !== undefined && input.fileName !== null && { fileName: input.fileName }),
  };
};

const serializeAws_json1_1Attachments = (input: Attachment[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Attachment(entry, context);
    });
};

const serializeAws_json1_1CaseIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CcEmailAddressList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CreateCaseRequest = (input: CreateCaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.attachmentSetId !== undefined &&
      input.attachmentSetId !== null && { attachmentSetId: input.attachmentSetId }),
    ...(input.categoryCode !== undefined && input.categoryCode !== null && { categoryCode: input.categoryCode }),
    ...(input.ccEmailAddresses !== undefined &&
      input.ccEmailAddresses !== null && {
        ccEmailAddresses: serializeAws_json1_1CcEmailAddressList(input.ccEmailAddresses, context),
      }),
    ...(input.communicationBody !== undefined &&
      input.communicationBody !== null && { communicationBody: input.communicationBody }),
    ...(input.issueType !== undefined && input.issueType !== null && { issueType: input.issueType }),
    ...(input.language !== undefined && input.language !== null && { language: input.language }),
    ...(input.serviceCode !== undefined && input.serviceCode !== null && { serviceCode: input.serviceCode }),
    ...(input.severityCode !== undefined && input.severityCode !== null && { severityCode: input.severityCode }),
    ...(input.subject !== undefined && input.subject !== null && { subject: input.subject }),
  };
};

const serializeAws_json1_1DescribeAttachmentRequest = (
  input: DescribeAttachmentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.attachmentId !== undefined && input.attachmentId !== null && { attachmentId: input.attachmentId }),
  };
};

const serializeAws_json1_1DescribeCasesRequest = (input: DescribeCasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.afterTime !== undefined && input.afterTime !== null && { afterTime: input.afterTime }),
    ...(input.beforeTime !== undefined && input.beforeTime !== null && { beforeTime: input.beforeTime }),
    ...(input.caseIdList !== undefined &&
      input.caseIdList !== null && { caseIdList: serializeAws_json1_1CaseIdList(input.caseIdList, context) }),
    ...(input.displayId !== undefined && input.displayId !== null && { displayId: input.displayId }),
    ...(input.includeCommunications !== undefined &&
      input.includeCommunications !== null && { includeCommunications: input.includeCommunications }),
    ...(input.includeResolvedCases !== undefined &&
      input.includeResolvedCases !== null && { includeResolvedCases: input.includeResolvedCases }),
    ...(input.language !== undefined && input.language !== null && { language: input.language }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeCommunicationsRequest = (
  input: DescribeCommunicationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.afterTime !== undefined && input.afterTime !== null && { afterTime: input.afterTime }),
    ...(input.beforeTime !== undefined && input.beforeTime !== null && { beforeTime: input.beforeTime }),
    ...(input.caseId !== undefined && input.caseId !== null && { caseId: input.caseId }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeServicesRequest = (input: DescribeServicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.language !== undefined && input.language !== null && { language: input.language }),
    ...(input.serviceCodeList !== undefined &&
      input.serviceCodeList !== null && {
        serviceCodeList: serializeAws_json1_1ServiceCodeList(input.serviceCodeList, context),
      }),
  };
};

const serializeAws_json1_1DescribeSeverityLevelsRequest = (
  input: DescribeSeverityLevelsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.language !== undefined && input.language !== null && { language: input.language }),
  };
};

const serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesRequest = (
  input: DescribeTrustedAdvisorCheckRefreshStatusesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.checkIds !== undefined &&
      input.checkIds !== null && { checkIds: serializeAws_json1_1StringList(input.checkIds, context) }),
  };
};

const serializeAws_json1_1DescribeTrustedAdvisorCheckResultRequest = (
  input: DescribeTrustedAdvisorCheckResultRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.checkId !== undefined && input.checkId !== null && { checkId: input.checkId }),
    ...(input.language !== undefined && input.language !== null && { language: input.language }),
  };
};

const serializeAws_json1_1DescribeTrustedAdvisorChecksRequest = (
  input: DescribeTrustedAdvisorChecksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.language !== undefined && input.language !== null && { language: input.language }),
  };
};

const serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesRequest = (
  input: DescribeTrustedAdvisorCheckSummariesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.checkIds !== undefined &&
      input.checkIds !== null && { checkIds: serializeAws_json1_1StringList(input.checkIds, context) }),
  };
};

const serializeAws_json1_1RefreshTrustedAdvisorCheckRequest = (
  input: RefreshTrustedAdvisorCheckRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.checkId !== undefined && input.checkId !== null && { checkId: input.checkId }),
  };
};

const serializeAws_json1_1ResolveCaseRequest = (input: ResolveCaseRequest, context: __SerdeContext): any => {
  return {
    ...(input.caseId !== undefined && input.caseId !== null && { caseId: input.caseId }),
  };
};

const serializeAws_json1_1ServiceCodeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1AddAttachmentsToSetResponse = (
  output: any,
  context: __SerdeContext
): AddAttachmentsToSetResponse => {
  return {
    attachmentSetId: __expectString(output.attachmentSetId),
    expiryTime: __expectString(output.expiryTime),
  } as any;
};

const deserializeAws_json1_1AddCommunicationToCaseResponse = (
  output: any,
  context: __SerdeContext
): AddCommunicationToCaseResponse => {
  return {
    result: __expectBoolean(output.result),
  } as any;
};

const deserializeAws_json1_1Attachment = (output: any, context: __SerdeContext): Attachment => {
  return {
    data: output.data !== undefined && output.data !== null ? context.base64Decoder(output.data) : undefined,
    fileName: __expectString(output.fileName),
  } as any;
};

const deserializeAws_json1_1AttachmentDetails = (output: any, context: __SerdeContext): AttachmentDetails => {
  return {
    attachmentId: __expectString(output.attachmentId),
    fileName: __expectString(output.fileName),
  } as any;
};

const deserializeAws_json1_1AttachmentIdNotFound = (output: any, context: __SerdeContext): AttachmentIdNotFound => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1AttachmentLimitExceeded = (
  output: any,
  context: __SerdeContext
): AttachmentLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1AttachmentSet = (output: any, context: __SerdeContext): AttachmentDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AttachmentDetails(entry, context);
    });
};

const deserializeAws_json1_1AttachmentSetExpired = (output: any, context: __SerdeContext): AttachmentSetExpired => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1AttachmentSetIdNotFound = (
  output: any,
  context: __SerdeContext
): AttachmentSetIdNotFound => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1AttachmentSetSizeLimitExceeded = (
  output: any,
  context: __SerdeContext
): AttachmentSetSizeLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CaseCreationLimitExceeded = (
  output: any,
  context: __SerdeContext
): CaseCreationLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CaseDetails = (output: any, context: __SerdeContext): CaseDetails => {
  return {
    caseId: __expectString(output.caseId),
    categoryCode: __expectString(output.categoryCode),
    ccEmailAddresses:
      output.ccEmailAddresses !== undefined && output.ccEmailAddresses !== null
        ? deserializeAws_json1_1CcEmailAddressList(output.ccEmailAddresses, context)
        : undefined,
    displayId: __expectString(output.displayId),
    language: __expectString(output.language),
    recentCommunications:
      output.recentCommunications !== undefined && output.recentCommunications !== null
        ? deserializeAws_json1_1RecentCaseCommunications(output.recentCommunications, context)
        : undefined,
    serviceCode: __expectString(output.serviceCode),
    severityCode: __expectString(output.severityCode),
    status: __expectString(output.status),
    subject: __expectString(output.subject),
    submittedBy: __expectString(output.submittedBy),
    timeCreated: __expectString(output.timeCreated),
  } as any;
};

const deserializeAws_json1_1CaseIdNotFound = (output: any, context: __SerdeContext): CaseIdNotFound => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1CaseList = (output: any, context: __SerdeContext): CaseDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CaseDetails(entry, context);
    });
};

const deserializeAws_json1_1Category = (output: any, context: __SerdeContext): Category => {
  return {
    code: __expectString(output.code),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1CategoryList = (output: any, context: __SerdeContext): Category[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Category(entry, context);
    });
};

const deserializeAws_json1_1CcEmailAddressList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Communication = (output: any, context: __SerdeContext): Communication => {
  return {
    attachmentSet:
      output.attachmentSet !== undefined && output.attachmentSet !== null
        ? deserializeAws_json1_1AttachmentSet(output.attachmentSet, context)
        : undefined,
    body: __expectString(output.body),
    caseId: __expectString(output.caseId),
    submittedBy: __expectString(output.submittedBy),
    timeCreated: __expectString(output.timeCreated),
  } as any;
};

const deserializeAws_json1_1CommunicationList = (output: any, context: __SerdeContext): Communication[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Communication(entry, context);
    });
};

const deserializeAws_json1_1CreateCaseResponse = (output: any, context: __SerdeContext): CreateCaseResponse => {
  return {
    caseId: __expectString(output.caseId),
  } as any;
};

const deserializeAws_json1_1DescribeAttachmentLimitExceeded = (
  output: any,
  context: __SerdeContext
): DescribeAttachmentLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DescribeAttachmentResponse = (
  output: any,
  context: __SerdeContext
): DescribeAttachmentResponse => {
  return {
    attachment:
      output.attachment !== undefined && output.attachment !== null
        ? deserializeAws_json1_1Attachment(output.attachment, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeCasesResponse = (output: any, context: __SerdeContext): DescribeCasesResponse => {
  return {
    cases:
      output.cases !== undefined && output.cases !== null
        ? deserializeAws_json1_1CaseList(output.cases, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeCommunicationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeCommunicationsResponse => {
  return {
    communications:
      output.communications !== undefined && output.communications !== null
        ? deserializeAws_json1_1CommunicationList(output.communications, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeServicesResponse = (
  output: any,
  context: __SerdeContext
): DescribeServicesResponse => {
  return {
    services:
      output.services !== undefined && output.services !== null
        ? deserializeAws_json1_1ServiceList(output.services, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSeverityLevelsResponse = (
  output: any,
  context: __SerdeContext
): DescribeSeverityLevelsResponse => {
  return {
    severityLevels:
      output.severityLevels !== undefined && output.severityLevels !== null
        ? deserializeAws_json1_1SeverityLevelsList(output.severityLevels, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrustedAdvisorCheckRefreshStatusesResponse => {
  return {
    statuses:
      output.statuses !== undefined && output.statuses !== null
        ? deserializeAws_json1_1TrustedAdvisorCheckRefreshStatusList(output.statuses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTrustedAdvisorCheckResultResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrustedAdvisorCheckResultResponse => {
  return {
    result:
      output.result !== undefined && output.result !== null
        ? deserializeAws_json1_1TrustedAdvisorCheckResult(output.result, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTrustedAdvisorChecksResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrustedAdvisorChecksResponse => {
  return {
    checks:
      output.checks !== undefined && output.checks !== null
        ? deserializeAws_json1_1TrustedAdvisorCheckList(output.checks, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrustedAdvisorCheckSummariesResponse => {
  return {
    summaries:
      output.summaries !== undefined && output.summaries !== null
        ? deserializeAws_json1_1TrustedAdvisorCheckSummaryList(output.summaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1RecentCaseCommunications = (
  output: any,
  context: __SerdeContext
): RecentCaseCommunications => {
  return {
    communications:
      output.communications !== undefined && output.communications !== null
        ? deserializeAws_json1_1CommunicationList(output.communications, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1RefreshTrustedAdvisorCheckResponse = (
  output: any,
  context: __SerdeContext
): RefreshTrustedAdvisorCheckResponse => {
  return {
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_json1_1TrustedAdvisorCheckRefreshStatus(output.status, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResolveCaseResponse = (output: any, context: __SerdeContext): ResolveCaseResponse => {
  return {
    finalCaseStatus: __expectString(output.finalCaseStatus),
    initialCaseStatus: __expectString(output.initialCaseStatus),
  } as any;
};

const deserializeAws_json1_1Service = (output: any, context: __SerdeContext): Service => {
  return {
    categories:
      output.categories !== undefined && output.categories !== null
        ? deserializeAws_json1_1CategoryList(output.categories, context)
        : undefined,
    code: __expectString(output.code),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1ServiceList = (output: any, context: __SerdeContext): Service[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Service(entry, context);
    });
};

const deserializeAws_json1_1SeverityLevel = (output: any, context: __SerdeContext): SeverityLevel => {
  return {
    code: __expectString(output.code),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1SeverityLevelsList = (output: any, context: __SerdeContext): SeverityLevel[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SeverityLevel(entry, context);
    });
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCategorySpecificSummary => {
  return {
    costOptimizing:
      output.costOptimizing !== undefined && output.costOptimizing !== null
        ? deserializeAws_json1_1TrustedAdvisorCostOptimizingSummary(output.costOptimizing, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TrustedAdvisorCheckDescription = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCheckDescription => {
  return {
    category: __expectString(output.category),
    description: __expectString(output.description),
    id: __expectString(output.id),
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_json1_1StringList(output.metadata, context)
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1TrustedAdvisorCheckList = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCheckDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TrustedAdvisorCheckDescription(entry, context);
    });
};

const deserializeAws_json1_1TrustedAdvisorCheckRefreshStatus = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCheckRefreshStatus => {
  return {
    checkId: __expectString(output.checkId),
    millisUntilNextRefreshable: __expectInt(output.millisUntilNextRefreshable),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1TrustedAdvisorCheckRefreshStatusList = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCheckRefreshStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TrustedAdvisorCheckRefreshStatus(entry, context);
    });
};

const deserializeAws_json1_1TrustedAdvisorCheckResult = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCheckResult => {
  return {
    categorySpecificSummary:
      output.categorySpecificSummary !== undefined && output.categorySpecificSummary !== null
        ? deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary(output.categorySpecificSummary, context)
        : undefined,
    checkId: __expectString(output.checkId),
    flaggedResources:
      output.flaggedResources !== undefined && output.flaggedResources !== null
        ? deserializeAws_json1_1TrustedAdvisorResourceDetailList(output.flaggedResources, context)
        : undefined,
    resourcesSummary:
      output.resourcesSummary !== undefined && output.resourcesSummary !== null
        ? deserializeAws_json1_1TrustedAdvisorResourcesSummary(output.resourcesSummary, context)
        : undefined,
    status: __expectString(output.status),
    timestamp: __expectString(output.timestamp),
  } as any;
};

const deserializeAws_json1_1TrustedAdvisorCheckSummary = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCheckSummary => {
  return {
    categorySpecificSummary:
      output.categorySpecificSummary !== undefined && output.categorySpecificSummary !== null
        ? deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary(output.categorySpecificSummary, context)
        : undefined,
    checkId: __expectString(output.checkId),
    hasFlaggedResources: __expectBoolean(output.hasFlaggedResources),
    resourcesSummary:
      output.resourcesSummary !== undefined && output.resourcesSummary !== null
        ? deserializeAws_json1_1TrustedAdvisorResourcesSummary(output.resourcesSummary, context)
        : undefined,
    status: __expectString(output.status),
    timestamp: __expectString(output.timestamp),
  } as any;
};

const deserializeAws_json1_1TrustedAdvisorCheckSummaryList = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCheckSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TrustedAdvisorCheckSummary(entry, context);
    });
};

const deserializeAws_json1_1TrustedAdvisorCostOptimizingSummary = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCostOptimizingSummary => {
  return {
    estimatedMonthlySavings: __limitedParseFloat(output.estimatedMonthlySavings),
    estimatedPercentMonthlySavings: __limitedParseFloat(output.estimatedPercentMonthlySavings),
  } as any;
};

const deserializeAws_json1_1TrustedAdvisorResourceDetail = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorResourceDetail => {
  return {
    isSuppressed: __expectBoolean(output.isSuppressed),
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_json1_1StringList(output.metadata, context)
        : undefined,
    region: __expectString(output.region),
    resourceId: __expectString(output.resourceId),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1TrustedAdvisorResourceDetailList = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorResourceDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TrustedAdvisorResourceDetail(entry, context);
    });
};

const deserializeAws_json1_1TrustedAdvisorResourcesSummary = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorResourcesSummary => {
  return {
    resourcesFlagged: __expectInt(output.resourcesFlagged),
    resourcesIgnored: __expectInt(output.resourcesIgnored),
    resourcesProcessed: __expectInt(output.resourcesProcessed),
    resourcesSuppressed: __expectInt(output.resourcesSuppressed),
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
