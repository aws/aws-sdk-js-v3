import {
  AddAttachmentsToSetCommandInput,
  AddAttachmentsToSetCommandOutput
} from "../commands/AddAttachmentsToSetCommand";
import {
  AddCommunicationToCaseCommandInput,
  AddCommunicationToCaseCommandOutput
} from "../commands/AddCommunicationToCaseCommand";
import {
  CreateCaseCommandInput,
  CreateCaseCommandOutput
} from "../commands/CreateCaseCommand";
import {
  DescribeAttachmentCommandInput,
  DescribeAttachmentCommandOutput
} from "../commands/DescribeAttachmentCommand";
import {
  DescribeCasesCommandInput,
  DescribeCasesCommandOutput
} from "../commands/DescribeCasesCommand";
import {
  DescribeCommunicationsCommandInput,
  DescribeCommunicationsCommandOutput
} from "../commands/DescribeCommunicationsCommand";
import {
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput
} from "../commands/DescribeServicesCommand";
import {
  DescribeSeverityLevelsCommandInput,
  DescribeSeverityLevelsCommandOutput
} from "../commands/DescribeSeverityLevelsCommand";
import {
  DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
  DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput
} from "../commands/DescribeTrustedAdvisorCheckRefreshStatusesCommand";
import {
  DescribeTrustedAdvisorCheckResultCommandInput,
  DescribeTrustedAdvisorCheckResultCommandOutput
} from "../commands/DescribeTrustedAdvisorCheckResultCommand";
import {
  DescribeTrustedAdvisorCheckSummariesCommandInput,
  DescribeTrustedAdvisorCheckSummariesCommandOutput
} from "../commands/DescribeTrustedAdvisorCheckSummariesCommand";
import {
  DescribeTrustedAdvisorChecksCommandInput,
  DescribeTrustedAdvisorChecksCommandOutput
} from "../commands/DescribeTrustedAdvisorChecksCommand";
import {
  RefreshTrustedAdvisorCheckCommandInput,
  RefreshTrustedAdvisorCheckCommandOutput
} from "../commands/RefreshTrustedAdvisorCheckCommand";
import {
  ResolveCaseCommandInput,
  ResolveCaseCommandOutput
} from "../commands/ResolveCaseCommand";
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
  TrustedAdvisorResourcesSummary
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

export async function serializeAws_json1_1AddAttachmentsToSetCommand(
  input: AddAttachmentsToSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSupport_20130415.AddAttachmentsToSet";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddAttachmentsToSetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AddCommunicationToCaseCommand(
  input: AddCommunicationToCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSupport_20130415.AddCommunicationToCase";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddCommunicationToCaseRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateCaseCommand(
  input: CreateCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSupport_20130415.CreateCase";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeAttachmentCommand(
  input: DescribeAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSupport_20130415.DescribeAttachment";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAttachmentRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeCasesCommand(
  input: DescribeCasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSupport_20130415.DescribeCases";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeCasesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeCommunicationsCommand(
  input: DescribeCommunicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSupport_20130415.DescribeCommunications";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeCommunicationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeServicesCommand(
  input: DescribeServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSupport_20130415.DescribeServices";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeServicesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeSeverityLevelsCommand(
  input: DescribeSeverityLevelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSupport_20130415.DescribeSeverityLevels";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSeverityLevelsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ResolveCaseCommand(
  input: ResolveCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSupport_20130415.ResolveCase";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResolveCaseRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand(
  input: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand(
  input: DescribeTrustedAdvisorCheckResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSSupport_20130415.DescribeTrustedAdvisorCheckResult";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTrustedAdvisorCheckResultRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand(
  input: DescribeTrustedAdvisorCheckSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeTrustedAdvisorChecksCommand(
  input: DescribeTrustedAdvisorChecksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSupport_20130415.DescribeTrustedAdvisorChecks";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTrustedAdvisorChecksRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RefreshTrustedAdvisorCheckCommand(
  input: RefreshTrustedAdvisorCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSupport_20130415.RefreshTrustedAdvisorCheck";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RefreshTrustedAdvisorCheckRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AddAttachmentsToSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddAttachmentsToSetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddAttachmentsToSetCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddAttachmentsToSetResponse(data, context);
  const response: AddAttachmentsToSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddAttachmentsToSetResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AddAttachmentsToSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddAttachmentsToSetCommandOutput> {
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
    case "AttachmentLimitExceeded":
    case "com.amazon.awssupportapi.error#AttachmentLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1AttachmentLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AttachmentSetExpired":
    case "com.amazon.awssupportapi.error#AttachmentSetExpired":
      response = {
        ...(await deserializeAws_json1_1AttachmentSetExpiredResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AttachmentSetIdNotFound":
    case "com.amazon.awssupportapi.error#AttachmentSetIdNotFound":
      response = {
        ...(await deserializeAws_json1_1AttachmentSetIdNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AttachmentSetSizeLimitExceeded":
    case "com.amazon.awssupportapi.error#AttachmentSetSizeLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1AttachmentSetSizeLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.awssupportapi.error#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
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

export async function deserializeAws_json1_1AddCommunicationToCaseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCommunicationToCaseCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddCommunicationToCaseCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddCommunicationToCaseResponse(
    data,
    context
  );
  const response: AddCommunicationToCaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddCommunicationToCaseResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AddCommunicationToCaseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCommunicationToCaseCommandOutput> {
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
    case "AttachmentSetExpired":
    case "com.amazon.awssupportapi.error#AttachmentSetExpired":
      response = {
        ...(await deserializeAws_json1_1AttachmentSetExpiredResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AttachmentSetIdNotFound":
    case "com.amazon.awssupportapi.error#AttachmentSetIdNotFound":
      response = {
        ...(await deserializeAws_json1_1AttachmentSetIdNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CaseIdNotFound":
    case "com.amazon.awssupportapi.error#CaseIdNotFound":
      response = {
        ...(await deserializeAws_json1_1CaseIdNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.awssupportapi.error#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
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

export async function deserializeAws_json1_1CreateCaseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCaseCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCaseResponse(data, context);
  const response: CreateCaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCaseResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateCaseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCaseCommandOutput> {
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
    case "AttachmentSetExpired":
    case "com.amazon.awssupportapi.error#AttachmentSetExpired":
      response = {
        ...(await deserializeAws_json1_1AttachmentSetExpiredResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AttachmentSetIdNotFound":
    case "com.amazon.awssupportapi.error#AttachmentSetIdNotFound":
      response = {
        ...(await deserializeAws_json1_1AttachmentSetIdNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CaseCreationLimitExceeded":
    case "com.amazon.awssupportapi.error#CaseCreationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1CaseCreationLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.awssupportapi.error#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
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

export async function deserializeAws_json1_1DescribeAttachmentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttachmentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAttachmentCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAttachmentResponse(data, context);
  const response: DescribeAttachmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAttachmentResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeAttachmentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttachmentCommandOutput> {
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
    case "AttachmentIdNotFound":
    case "com.amazon.awssupportapi.error#AttachmentIdNotFound":
      response = {
        ...(await deserializeAws_json1_1AttachmentIdNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DescribeAttachmentLimitExceeded":
    case "com.amazon.awssupportapi.error#DescribeAttachmentLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1DescribeAttachmentLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.awssupportapi.error#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
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

export async function deserializeAws_json1_1DescribeCasesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCasesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCasesResponse(data, context);
  const response: DescribeCasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCasesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeCasesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCasesCommandOutput> {
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
    case "CaseIdNotFound":
    case "com.amazon.awssupportapi.error#CaseIdNotFound":
      response = {
        ...(await deserializeAws_json1_1CaseIdNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.awssupportapi.error#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
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

export async function deserializeAws_json1_1DescribeCommunicationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommunicationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCommunicationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCommunicationsResponse(
    data,
    context
  );
  const response: DescribeCommunicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCommunicationsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeCommunicationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCommunicationsCommandOutput> {
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
    case "CaseIdNotFound":
    case "com.amazon.awssupportapi.error#CaseIdNotFound":
      response = {
        ...(await deserializeAws_json1_1CaseIdNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.awssupportapi.error#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
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

export async function deserializeAws_json1_1DescribeServicesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeServicesResponse(data, context);
  const response: DescribeServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeServicesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeServicesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> {
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
    case "InternalServerError":
    case "com.amazon.awssupportapi.error#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
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

export async function deserializeAws_json1_1DescribeSeverityLevelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSeverityLevelsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSeverityLevelsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSeverityLevelsResponse(
    data,
    context
  );
  const response: DescribeSeverityLevelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSeverityLevelsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeSeverityLevelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSeverityLevelsCommandOutput> {
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
    case "InternalServerError":
    case "com.amazon.awssupportapi.error#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
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

export async function deserializeAws_json1_1ResolveCaseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveCaseCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ResolveCaseCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResolveCaseResponse(data, context);
  const response: ResolveCaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ResolveCaseResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ResolveCaseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveCaseCommandOutput> {
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
    case "CaseIdNotFound":
    case "com.amazon.awssupportapi.error#CaseIdNotFound":
      response = {
        ...(await deserializeAws_json1_1CaseIdNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazon.awssupportapi.error#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
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

export async function deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesResponse(
    data,
    context
  );
  const response: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTrustedAdvisorCheckRefreshStatusesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput> {
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
    case "InternalServerError":
    case "com.amazon.awssupportapi.error#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
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

export async function deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckResultCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTrustedAdvisorCheckResultResponse(
    data,
    context
  );
  const response: DescribeTrustedAdvisorCheckResultCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTrustedAdvisorCheckResultResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckResultCommandOutput> {
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
    case "InternalServerError":
    case "com.amazon.awssupportapi.error#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
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

export async function deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckSummariesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesResponse(
    data,
    context
  );
  const response: DescribeTrustedAdvisorCheckSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTrustedAdvisorCheckSummariesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorCheckSummariesCommandOutput> {
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
    case "InternalServerError":
    case "com.amazon.awssupportapi.error#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
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

export async function deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorChecksCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTrustedAdvisorChecksCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTrustedAdvisorChecksResponse(
    data,
    context
  );
  const response: DescribeTrustedAdvisorChecksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTrustedAdvisorChecksResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeTrustedAdvisorChecksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedAdvisorChecksCommandOutput> {
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
    case "InternalServerError":
    case "com.amazon.awssupportapi.error#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
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

export async function deserializeAws_json1_1RefreshTrustedAdvisorCheckCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshTrustedAdvisorCheckCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RefreshTrustedAdvisorCheckCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RefreshTrustedAdvisorCheckResponse(
    data,
    context
  );
  const response: RefreshTrustedAdvisorCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RefreshTrustedAdvisorCheckResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RefreshTrustedAdvisorCheckCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RefreshTrustedAdvisorCheckCommandOutput> {
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
    case "InternalServerError":
    case "com.amazon.awssupportapi.error#InternalServerError":
      response = {
        ...(await deserializeAws_json1_1InternalServerErrorResponse(
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

const deserializeAws_json1_1AttachmentIdNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttachmentIdNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AttachmentIdNotFound(
    body,
    context
  );
  const contents: AttachmentIdNotFound = {
    name: "AttachmentIdNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AttachmentLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttachmentLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AttachmentLimitExceeded(
    body,
    context
  );
  const contents: AttachmentLimitExceeded = {
    name: "AttachmentLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AttachmentSetExpiredResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttachmentSetExpired> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AttachmentSetExpired(
    body,
    context
  );
  const contents: AttachmentSetExpired = {
    name: "AttachmentSetExpired",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AttachmentSetIdNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttachmentSetIdNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AttachmentSetIdNotFound(
    body,
    context
  );
  const contents: AttachmentSetIdNotFound = {
    name: "AttachmentSetIdNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AttachmentSetSizeLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AttachmentSetSizeLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AttachmentSetSizeLimitExceeded(
    body,
    context
  );
  const contents: AttachmentSetSizeLimitExceeded = {
    name: "AttachmentSetSizeLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CaseCreationLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CaseCreationLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CaseCreationLimitExceeded(
    body,
    context
  );
  const contents: CaseCreationLimitExceeded = {
    name: "CaseCreationLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
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
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DescribeAttachmentLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DescribeAttachmentLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DescribeAttachmentLimitExceeded(
    body,
    context
  );
  const contents: DescribeAttachmentLimitExceeded = {
    name: "DescribeAttachmentLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(
    body,
    context
  );
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1Attachment = (
  input: Attachment,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.data !== undefined) {
    bodyParams["data"] = context.base64Encoder(input.data);
  }
  if (input.fileName !== undefined) {
    bodyParams["fileName"] = input.fileName;
  }
  return bodyParams;
};

const serializeAws_json1_1Attachments = (
  input: Array<Attachment>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Attachment(entry, context));
  }
  return contents;
};

const serializeAws_json1_1AddAttachmentsToSetRequest = (
  input: AddAttachmentsToSetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.attachmentSetId !== undefined) {
    bodyParams["attachmentSetId"] = input.attachmentSetId;
  }
  if (input.attachments !== undefined) {
    bodyParams["attachments"] = serializeAws_json1_1Attachments(
      input.attachments,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1AddCommunicationToCaseRequest = (
  input: AddCommunicationToCaseRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.attachmentSetId !== undefined) {
    bodyParams["attachmentSetId"] = input.attachmentSetId;
  }
  if (input.caseId !== undefined) {
    bodyParams["caseId"] = input.caseId;
  }
  if (input.ccEmailAddresses !== undefined) {
    bodyParams["ccEmailAddresses"] = serializeAws_json1_1CcEmailAddressList(
      input.ccEmailAddresses,
      context
    );
  }
  if (input.communicationBody !== undefined) {
    bodyParams["communicationBody"] = input.communicationBody;
  }
  return bodyParams;
};

const serializeAws_json1_1CaseIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1CcEmailAddressList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1CreateCaseRequest = (
  input: CreateCaseRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.attachmentSetId !== undefined) {
    bodyParams["attachmentSetId"] = input.attachmentSetId;
  }
  if (input.categoryCode !== undefined) {
    bodyParams["categoryCode"] = input.categoryCode;
  }
  if (input.ccEmailAddresses !== undefined) {
    bodyParams["ccEmailAddresses"] = serializeAws_json1_1CcEmailAddressList(
      input.ccEmailAddresses,
      context
    );
  }
  if (input.communicationBody !== undefined) {
    bodyParams["communicationBody"] = input.communicationBody;
  }
  if (input.issueType !== undefined) {
    bodyParams["issueType"] = input.issueType;
  }
  if (input.language !== undefined) {
    bodyParams["language"] = input.language;
  }
  if (input.serviceCode !== undefined) {
    bodyParams["serviceCode"] = input.serviceCode;
  }
  if (input.severityCode !== undefined) {
    bodyParams["severityCode"] = input.severityCode;
  }
  if (input.subject !== undefined) {
    bodyParams["subject"] = input.subject;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAttachmentRequest = (
  input: DescribeAttachmentRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.attachmentId !== undefined) {
    bodyParams["attachmentId"] = input.attachmentId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeCasesRequest = (
  input: DescribeCasesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.afterTime !== undefined) {
    bodyParams["afterTime"] = input.afterTime;
  }
  if (input.beforeTime !== undefined) {
    bodyParams["beforeTime"] = input.beforeTime;
  }
  if (input.caseIdList !== undefined) {
    bodyParams["caseIdList"] = serializeAws_json1_1CaseIdList(
      input.caseIdList,
      context
    );
  }
  if (input.displayId !== undefined) {
    bodyParams["displayId"] = input.displayId;
  }
  if (input.includeCommunications !== undefined) {
    bodyParams["includeCommunications"] = input.includeCommunications;
  }
  if (input.includeResolvedCases !== undefined) {
    bodyParams["includeResolvedCases"] = input.includeResolvedCases;
  }
  if (input.language !== undefined) {
    bodyParams["language"] = input.language;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeCommunicationsRequest = (
  input: DescribeCommunicationsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.afterTime !== undefined) {
    bodyParams["afterTime"] = input.afterTime;
  }
  if (input.beforeTime !== undefined) {
    bodyParams["beforeTime"] = input.beforeTime;
  }
  if (input.caseId !== undefined) {
    bodyParams["caseId"] = input.caseId;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeServicesRequest = (
  input: DescribeServicesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.language !== undefined) {
    bodyParams["language"] = input.language;
  }
  if (input.serviceCodeList !== undefined) {
    bodyParams["serviceCodeList"] = serializeAws_json1_1ServiceCodeList(
      input.serviceCodeList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeSeverityLevelsRequest = (
  input: DescribeSeverityLevelsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.language !== undefined) {
    bodyParams["language"] = input.language;
  }
  return bodyParams;
};

const serializeAws_json1_1ResolveCaseRequest = (
  input: ResolveCaseRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.caseId !== undefined) {
    bodyParams["caseId"] = input.caseId;
  }
  return bodyParams;
};

const serializeAws_json1_1ServiceCodeList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesRequest = (
  input: DescribeTrustedAdvisorCheckRefreshStatusesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.checkIds !== undefined) {
    bodyParams["checkIds"] = serializeAws_json1_1StringList(
      input.checkIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeTrustedAdvisorCheckResultRequest = (
  input: DescribeTrustedAdvisorCheckResultRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.checkId !== undefined) {
    bodyParams["checkId"] = input.checkId;
  }
  if (input.language !== undefined) {
    bodyParams["language"] = input.language;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesRequest = (
  input: DescribeTrustedAdvisorCheckSummariesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.checkIds !== undefined) {
    bodyParams["checkIds"] = serializeAws_json1_1StringList(
      input.checkIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeTrustedAdvisorChecksRequest = (
  input: DescribeTrustedAdvisorChecksRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.language !== undefined) {
    bodyParams["language"] = input.language;
  }
  return bodyParams;
};

const serializeAws_json1_1RefreshTrustedAdvisorCheckRequest = (
  input: RefreshTrustedAdvisorCheckRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.checkId !== undefined) {
    bodyParams["checkId"] = input.checkId;
  }
  return bodyParams;
};

const serializeAws_json1_1StringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const deserializeAws_json1_1Attachment = (
  output: any,
  context: __SerdeContext
): Attachment => {
  let contents: any = {
    __type: "Attachment",
    data: undefined,
    fileName: undefined
  };
  if (output.data !== undefined && output.data !== null) {
    contents.data = context.base64Decoder(output.data);
  }
  if (output.fileName !== undefined && output.fileName !== null) {
    contents.fileName = output.fileName;
  }
  return contents;
};

const deserializeAws_json1_1AttachmentDetails = (
  output: any,
  context: __SerdeContext
): AttachmentDetails => {
  let contents: any = {
    __type: "AttachmentDetails",
    attachmentId: undefined,
    fileName: undefined
  };
  if (output.attachmentId !== undefined && output.attachmentId !== null) {
    contents.attachmentId = output.attachmentId;
  }
  if (output.fileName !== undefined && output.fileName !== null) {
    contents.fileName = output.fileName;
  }
  return contents;
};

const deserializeAws_json1_1AttachmentSet = (
  output: any,
  context: __SerdeContext
): Array<AttachmentDetails> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AttachmentDetails(entry, context)
  );
};

const deserializeAws_json1_1CaseDetails = (
  output: any,
  context: __SerdeContext
): CaseDetails => {
  let contents: any = {
    __type: "CaseDetails",
    caseId: undefined,
    categoryCode: undefined,
    ccEmailAddresses: undefined,
    displayId: undefined,
    language: undefined,
    recentCommunications: undefined,
    serviceCode: undefined,
    severityCode: undefined,
    status: undefined,
    subject: undefined,
    submittedBy: undefined,
    timeCreated: undefined
  };
  if (output.caseId !== undefined && output.caseId !== null) {
    contents.caseId = output.caseId;
  }
  if (output.categoryCode !== undefined && output.categoryCode !== null) {
    contents.categoryCode = output.categoryCode;
  }
  if (
    output.ccEmailAddresses !== undefined &&
    output.ccEmailAddresses !== null
  ) {
    contents.ccEmailAddresses = deserializeAws_json1_1CcEmailAddressList(
      output.ccEmailAddresses,
      context
    );
  }
  if (output.displayId !== undefined && output.displayId !== null) {
    contents.displayId = output.displayId;
  }
  if (output.language !== undefined && output.language !== null) {
    contents.language = output.language;
  }
  if (
    output.recentCommunications !== undefined &&
    output.recentCommunications !== null
  ) {
    contents.recentCommunications = deserializeAws_json1_1RecentCaseCommunications(
      output.recentCommunications,
      context
    );
  }
  if (output.serviceCode !== undefined && output.serviceCode !== null) {
    contents.serviceCode = output.serviceCode;
  }
  if (output.severityCode !== undefined && output.severityCode !== null) {
    contents.severityCode = output.severityCode;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.subject !== undefined && output.subject !== null) {
    contents.subject = output.subject;
  }
  if (output.submittedBy !== undefined && output.submittedBy !== null) {
    contents.submittedBy = output.submittedBy;
  }
  if (output.timeCreated !== undefined && output.timeCreated !== null) {
    contents.timeCreated = output.timeCreated;
  }
  return contents;
};

const deserializeAws_json1_1Category = (
  output: any,
  context: __SerdeContext
): Category => {
  let contents: any = {
    __type: "Category",
    code: undefined,
    name: undefined
  };
  if (output.code !== undefined && output.code !== null) {
    contents.code = output.code;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1CategoryList = (
  output: any,
  context: __SerdeContext
): Array<Category> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Category(entry, context)
  );
};

const deserializeAws_json1_1CcEmailAddressList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Communication = (
  output: any,
  context: __SerdeContext
): Communication => {
  let contents: any = {
    __type: "Communication",
    attachmentSet: undefined,
    body: undefined,
    caseId: undefined,
    submittedBy: undefined,
    timeCreated: undefined
  };
  if (output.attachmentSet !== undefined && output.attachmentSet !== null) {
    contents.attachmentSet = deserializeAws_json1_1AttachmentSet(
      output.attachmentSet,
      context
    );
  }
  if (output.body !== undefined && output.body !== null) {
    contents.body = output.body;
  }
  if (output.caseId !== undefined && output.caseId !== null) {
    contents.caseId = output.caseId;
  }
  if (output.submittedBy !== undefined && output.submittedBy !== null) {
    contents.submittedBy = output.submittedBy;
  }
  if (output.timeCreated !== undefined && output.timeCreated !== null) {
    contents.timeCreated = output.timeCreated;
  }
  return contents;
};

const deserializeAws_json1_1RecentCaseCommunications = (
  output: any,
  context: __SerdeContext
): RecentCaseCommunications => {
  let contents: any = {
    __type: "RecentCaseCommunications",
    communications: undefined,
    nextToken: undefined
  };
  if (output.communications !== undefined && output.communications !== null) {
    contents.communications = deserializeAws_json1_1CommunicationList(
      output.communications,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1Service = (
  output: any,
  context: __SerdeContext
): Service => {
  let contents: any = {
    __type: "Service",
    categories: undefined,
    code: undefined,
    name: undefined
  };
  if (output.categories !== undefined && output.categories !== null) {
    contents.categories = deserializeAws_json1_1CategoryList(
      output.categories,
      context
    );
  }
  if (output.code !== undefined && output.code !== null) {
    contents.code = output.code;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1AttachmentIdNotFound = (
  output: any,
  context: __SerdeContext
): AttachmentIdNotFound => {
  let contents: any = {
    __type: "AttachmentIdNotFound",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1AttachmentLimitExceeded = (
  output: any,
  context: __SerdeContext
): AttachmentLimitExceeded => {
  let contents: any = {
    __type: "AttachmentLimitExceeded",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1AttachmentSetExpired = (
  output: any,
  context: __SerdeContext
): AttachmentSetExpired => {
  let contents: any = {
    __type: "AttachmentSetExpired",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1AttachmentSetIdNotFound = (
  output: any,
  context: __SerdeContext
): AttachmentSetIdNotFound => {
  let contents: any = {
    __type: "AttachmentSetIdNotFound",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1AttachmentSetSizeLimitExceeded = (
  output: any,
  context: __SerdeContext
): AttachmentSetSizeLimitExceeded => {
  let contents: any = {
    __type: "AttachmentSetSizeLimitExceeded",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CaseCreationLimitExceeded = (
  output: any,
  context: __SerdeContext
): CaseCreationLimitExceeded => {
  let contents: any = {
    __type: "CaseCreationLimitExceeded",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CaseIdNotFound = (
  output: any,
  context: __SerdeContext
): CaseIdNotFound => {
  let contents: any = {
    __type: "CaseIdNotFound",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DescribeAttachmentLimitExceeded = (
  output: any,
  context: __SerdeContext
): DescribeAttachmentLimitExceeded => {
  let contents: any = {
    __type: "DescribeAttachmentLimitExceeded",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  let contents: any = {
    __type: "InternalServerError",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1AddAttachmentsToSetResponse = (
  output: any,
  context: __SerdeContext
): AddAttachmentsToSetResponse => {
  let contents: any = {
    __type: "AddAttachmentsToSetResponse",
    attachmentSetId: undefined,
    expiryTime: undefined
  };
  if (output.attachmentSetId !== undefined && output.attachmentSetId !== null) {
    contents.attachmentSetId = output.attachmentSetId;
  }
  if (output.expiryTime !== undefined && output.expiryTime !== null) {
    contents.expiryTime = output.expiryTime;
  }
  return contents;
};

const deserializeAws_json1_1AddCommunicationToCaseResponse = (
  output: any,
  context: __SerdeContext
): AddCommunicationToCaseResponse => {
  let contents: any = {
    __type: "AddCommunicationToCaseResponse",
    result: undefined
  };
  if (output.result !== undefined && output.result !== null) {
    contents.result = output.result;
  }
  return contents;
};

const deserializeAws_json1_1CaseList = (
  output: any,
  context: __SerdeContext
): Array<CaseDetails> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CaseDetails(entry, context)
  );
};

const deserializeAws_json1_1CommunicationList = (
  output: any,
  context: __SerdeContext
): Array<Communication> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Communication(entry, context)
  );
};

const deserializeAws_json1_1CreateCaseResponse = (
  output: any,
  context: __SerdeContext
): CreateCaseResponse => {
  let contents: any = {
    __type: "CreateCaseResponse",
    caseId: undefined
  };
  if (output.caseId !== undefined && output.caseId !== null) {
    contents.caseId = output.caseId;
  }
  return contents;
};

const deserializeAws_json1_1DescribeAttachmentResponse = (
  output: any,
  context: __SerdeContext
): DescribeAttachmentResponse => {
  let contents: any = {
    __type: "DescribeAttachmentResponse",
    attachment: undefined
  };
  if (output.attachment !== undefined && output.attachment !== null) {
    contents.attachment = deserializeAws_json1_1Attachment(
      output.attachment,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeCasesResponse = (
  output: any,
  context: __SerdeContext
): DescribeCasesResponse => {
  let contents: any = {
    __type: "DescribeCasesResponse",
    cases: undefined,
    nextToken: undefined
  };
  if (output.cases !== undefined && output.cases !== null) {
    contents.cases = deserializeAws_json1_1CaseList(output.cases, context);
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeCommunicationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeCommunicationsResponse => {
  let contents: any = {
    __type: "DescribeCommunicationsResponse",
    communications: undefined,
    nextToken: undefined
  };
  if (output.communications !== undefined && output.communications !== null) {
    contents.communications = deserializeAws_json1_1CommunicationList(
      output.communications,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeServicesResponse = (
  output: any,
  context: __SerdeContext
): DescribeServicesResponse => {
  let contents: any = {
    __type: "DescribeServicesResponse",
    services: undefined
  };
  if (output.services !== undefined && output.services !== null) {
    contents.services = deserializeAws_json1_1ServiceList(
      output.services,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeSeverityLevelsResponse = (
  output: any,
  context: __SerdeContext
): DescribeSeverityLevelsResponse => {
  let contents: any = {
    __type: "DescribeSeverityLevelsResponse",
    severityLevels: undefined
  };
  if (output.severityLevels !== undefined && output.severityLevels !== null) {
    contents.severityLevels = deserializeAws_json1_1SeverityLevelsList(
      output.severityLevels,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ResolveCaseResponse = (
  output: any,
  context: __SerdeContext
): ResolveCaseResponse => {
  let contents: any = {
    __type: "ResolveCaseResponse",
    finalCaseStatus: undefined,
    initialCaseStatus: undefined
  };
  if (output.finalCaseStatus !== undefined && output.finalCaseStatus !== null) {
    contents.finalCaseStatus = output.finalCaseStatus;
  }
  if (
    output.initialCaseStatus !== undefined &&
    output.initialCaseStatus !== null
  ) {
    contents.initialCaseStatus = output.initialCaseStatus;
  }
  return contents;
};

const deserializeAws_json1_1ServiceList = (
  output: any,
  context: __SerdeContext
): Array<Service> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Service(entry, context)
  );
};

const deserializeAws_json1_1SeverityLevel = (
  output: any,
  context: __SerdeContext
): SeverityLevel => {
  let contents: any = {
    __type: "SeverityLevel",
    code: undefined,
    name: undefined
  };
  if (output.code !== undefined && output.code !== null) {
    contents.code = output.code;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1SeverityLevelsList = (
  output: any,
  context: __SerdeContext
): Array<SeverityLevel> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SeverityLevel(entry, context)
  );
};

const deserializeAws_json1_1DescribeTrustedAdvisorCheckRefreshStatusesResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrustedAdvisorCheckRefreshStatusesResponse => {
  let contents: any = {
    __type: "DescribeTrustedAdvisorCheckRefreshStatusesResponse",
    statuses: undefined
  };
  if (output.statuses !== undefined && output.statuses !== null) {
    contents.statuses = deserializeAws_json1_1TrustedAdvisorCheckRefreshStatusList(
      output.statuses,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeTrustedAdvisorCheckResultResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrustedAdvisorCheckResultResponse => {
  let contents: any = {
    __type: "DescribeTrustedAdvisorCheckResultResponse",
    result: undefined
  };
  if (output.result !== undefined && output.result !== null) {
    contents.result = deserializeAws_json1_1TrustedAdvisorCheckResult(
      output.result,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrustedAdvisorCheckSummariesResponse => {
  let contents: any = {
    __type: "DescribeTrustedAdvisorCheckSummariesResponse",
    summaries: undefined
  };
  if (output.summaries !== undefined && output.summaries !== null) {
    contents.summaries = deserializeAws_json1_1TrustedAdvisorCheckSummaryList(
      output.summaries,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeTrustedAdvisorChecksResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrustedAdvisorChecksResponse => {
  let contents: any = {
    __type: "DescribeTrustedAdvisorChecksResponse",
    checks: undefined
  };
  if (output.checks !== undefined && output.checks !== null) {
    contents.checks = deserializeAws_json1_1TrustedAdvisorCheckList(
      output.checks,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RefreshTrustedAdvisorCheckResponse = (
  output: any,
  context: __SerdeContext
): RefreshTrustedAdvisorCheckResponse => {
  let contents: any = {
    __type: "RefreshTrustedAdvisorCheckResponse",
    status: undefined
  };
  if (output.status !== undefined && output.status !== null) {
    contents.status = deserializeAws_json1_1TrustedAdvisorCheckRefreshStatus(
      output.status,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCategorySpecificSummary => {
  let contents: any = {
    __type: "TrustedAdvisorCategorySpecificSummary",
    costOptimizing: undefined
  };
  if (output.costOptimizing !== undefined && output.costOptimizing !== null) {
    contents.costOptimizing = deserializeAws_json1_1TrustedAdvisorCostOptimizingSummary(
      output.costOptimizing,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1TrustedAdvisorCheckDescription = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCheckDescription => {
  let contents: any = {
    __type: "TrustedAdvisorCheckDescription",
    category: undefined,
    description: undefined,
    id: undefined,
    metadata: undefined,
    name: undefined
  };
  if (output.category !== undefined && output.category !== null) {
    contents.category = output.category;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.metadata !== undefined && output.metadata !== null) {
    contents.metadata = deserializeAws_json1_1StringList(
      output.metadata,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1TrustedAdvisorCheckList = (
  output: any,
  context: __SerdeContext
): Array<TrustedAdvisorCheckDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TrustedAdvisorCheckDescription(entry, context)
  );
};

const deserializeAws_json1_1TrustedAdvisorCheckRefreshStatus = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCheckRefreshStatus => {
  let contents: any = {
    __type: "TrustedAdvisorCheckRefreshStatus",
    checkId: undefined,
    millisUntilNextRefreshable: undefined,
    status: undefined
  };
  if (output.checkId !== undefined && output.checkId !== null) {
    contents.checkId = output.checkId;
  }
  if (
    output.millisUntilNextRefreshable !== undefined &&
    output.millisUntilNextRefreshable !== null
  ) {
    contents.millisUntilNextRefreshable = output.millisUntilNextRefreshable;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1TrustedAdvisorCheckRefreshStatusList = (
  output: any,
  context: __SerdeContext
): Array<TrustedAdvisorCheckRefreshStatus> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TrustedAdvisorCheckRefreshStatus(entry, context)
  );
};

const deserializeAws_json1_1TrustedAdvisorCheckResult = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCheckResult => {
  let contents: any = {
    __type: "TrustedAdvisorCheckResult",
    categorySpecificSummary: undefined,
    checkId: undefined,
    flaggedResources: undefined,
    resourcesSummary: undefined,
    status: undefined,
    timestamp: undefined
  };
  if (
    output.categorySpecificSummary !== undefined &&
    output.categorySpecificSummary !== null
  ) {
    contents.categorySpecificSummary = deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary(
      output.categorySpecificSummary,
      context
    );
  }
  if (output.checkId !== undefined && output.checkId !== null) {
    contents.checkId = output.checkId;
  }
  if (
    output.flaggedResources !== undefined &&
    output.flaggedResources !== null
  ) {
    contents.flaggedResources = deserializeAws_json1_1TrustedAdvisorResourceDetailList(
      output.flaggedResources,
      context
    );
  }
  if (
    output.resourcesSummary !== undefined &&
    output.resourcesSummary !== null
  ) {
    contents.resourcesSummary = deserializeAws_json1_1TrustedAdvisorResourcesSummary(
      output.resourcesSummary,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.timestamp !== undefined && output.timestamp !== null) {
    contents.timestamp = output.timestamp;
  }
  return contents;
};

const deserializeAws_json1_1TrustedAdvisorCheckSummary = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCheckSummary => {
  let contents: any = {
    __type: "TrustedAdvisorCheckSummary",
    categorySpecificSummary: undefined,
    checkId: undefined,
    hasFlaggedResources: undefined,
    resourcesSummary: undefined,
    status: undefined,
    timestamp: undefined
  };
  if (
    output.categorySpecificSummary !== undefined &&
    output.categorySpecificSummary !== null
  ) {
    contents.categorySpecificSummary = deserializeAws_json1_1TrustedAdvisorCategorySpecificSummary(
      output.categorySpecificSummary,
      context
    );
  }
  if (output.checkId !== undefined && output.checkId !== null) {
    contents.checkId = output.checkId;
  }
  if (
    output.hasFlaggedResources !== undefined &&
    output.hasFlaggedResources !== null
  ) {
    contents.hasFlaggedResources = output.hasFlaggedResources;
  }
  if (
    output.resourcesSummary !== undefined &&
    output.resourcesSummary !== null
  ) {
    contents.resourcesSummary = deserializeAws_json1_1TrustedAdvisorResourcesSummary(
      output.resourcesSummary,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.timestamp !== undefined && output.timestamp !== null) {
    contents.timestamp = output.timestamp;
  }
  return contents;
};

const deserializeAws_json1_1TrustedAdvisorCheckSummaryList = (
  output: any,
  context: __SerdeContext
): Array<TrustedAdvisorCheckSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TrustedAdvisorCheckSummary(entry, context)
  );
};

const deserializeAws_json1_1TrustedAdvisorCostOptimizingSummary = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorCostOptimizingSummary => {
  let contents: any = {
    __type: "TrustedAdvisorCostOptimizingSummary",
    estimatedMonthlySavings: undefined,
    estimatedPercentMonthlySavings: undefined
  };
  if (
    output.estimatedMonthlySavings !== undefined &&
    output.estimatedMonthlySavings !== null
  ) {
    contents.estimatedMonthlySavings = output.estimatedMonthlySavings;
  }
  if (
    output.estimatedPercentMonthlySavings !== undefined &&
    output.estimatedPercentMonthlySavings !== null
  ) {
    contents.estimatedPercentMonthlySavings =
      output.estimatedPercentMonthlySavings;
  }
  return contents;
};

const deserializeAws_json1_1TrustedAdvisorResourceDetail = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorResourceDetail => {
  let contents: any = {
    __type: "TrustedAdvisorResourceDetail",
    isSuppressed: undefined,
    metadata: undefined,
    region: undefined,
    resourceId: undefined,
    status: undefined
  };
  if (output.isSuppressed !== undefined && output.isSuppressed !== null) {
    contents.isSuppressed = output.isSuppressed;
  }
  if (output.metadata !== undefined && output.metadata !== null) {
    contents.metadata = deserializeAws_json1_1StringList(
      output.metadata,
      context
    );
  }
  if (output.region !== undefined && output.region !== null) {
    contents.region = output.region;
  }
  if (output.resourceId !== undefined && output.resourceId !== null) {
    contents.resourceId = output.resourceId;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1TrustedAdvisorResourceDetailList = (
  output: any,
  context: __SerdeContext
): Array<TrustedAdvisorResourceDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TrustedAdvisorResourceDetail(entry, context)
  );
};

const deserializeAws_json1_1TrustedAdvisorResourcesSummary = (
  output: any,
  context: __SerdeContext
): TrustedAdvisorResourcesSummary => {
  let contents: any = {
    __type: "TrustedAdvisorResourcesSummary",
    resourcesFlagged: undefined,
    resourcesIgnored: undefined,
    resourcesProcessed: undefined,
    resourcesSuppressed: undefined
  };
  if (
    output.resourcesFlagged !== undefined &&
    output.resourcesFlagged !== null
  ) {
    contents.resourcesFlagged = output.resourcesFlagged;
  }
  if (
    output.resourcesIgnored !== undefined &&
    output.resourcesIgnored !== null
  ) {
    contents.resourcesIgnored = output.resourcesIgnored;
  }
  if (
    output.resourcesProcessed !== undefined &&
    output.resourcesProcessed !== null
  ) {
    contents.resourcesProcessed = output.resourcesProcessed;
  }
  if (
    output.resourcesSuppressed !== undefined &&
    output.resourcesSuppressed !== null
  ) {
    contents.resourcesSuppressed = output.resourcesSuppressed;
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
