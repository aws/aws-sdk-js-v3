import {
  AssociateAdminAccountCommandInput,
  AssociateAdminAccountCommandOutput,
} from "../commands/AssociateAdminAccountCommand";
import {
  DeleteNotificationChannelCommandInput,
  DeleteNotificationChannelCommandOutput,
} from "../commands/DeleteNotificationChannelCommand";
import {
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
} from "../commands/DeletePolicyCommand";
import {
  DisassociateAdminAccountCommandInput,
  DisassociateAdminAccountCommandOutput,
} from "../commands/DisassociateAdminAccountCommand";
import {
  GetAdminAccountCommandInput,
  GetAdminAccountCommandOutput,
} from "../commands/GetAdminAccountCommand";
import {
  GetComplianceDetailCommandInput,
  GetComplianceDetailCommandOutput,
} from "../commands/GetComplianceDetailCommand";
import {
  GetNotificationChannelCommandInput,
  GetNotificationChannelCommandOutput,
} from "../commands/GetNotificationChannelCommand";
import {
  GetPolicyCommandInput,
  GetPolicyCommandOutput,
} from "../commands/GetPolicyCommand";
import {
  GetProtectionStatusCommandInput,
  GetProtectionStatusCommandOutput,
} from "../commands/GetProtectionStatusCommand";
import {
  ListComplianceStatusCommandInput,
  ListComplianceStatusCommandOutput,
} from "../commands/ListComplianceStatusCommand";
import {
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput,
} from "../commands/ListMemberAccountsCommand";
import {
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "../commands/ListPoliciesCommand";
import {
  PutNotificationChannelCommandInput,
  PutNotificationChannelCommandOutput,
} from "../commands/PutNotificationChannelCommand";
import {
  PutPolicyCommandInput,
  PutPolicyCommandOutput,
} from "../commands/PutPolicyCommand";
import {
  AssociateAdminAccountRequest,
  ComplianceViolator,
  DeleteNotificationChannelRequest,
  DeletePolicyRequest,
  DisassociateAdminAccountRequest,
  EvaluationResult,
  GetAdminAccountRequest,
  GetAdminAccountResponse,
  GetComplianceDetailRequest,
  GetComplianceDetailResponse,
  GetNotificationChannelRequest,
  GetNotificationChannelResponse,
  GetPolicyRequest,
  GetPolicyResponse,
  GetProtectionStatusRequest,
  GetProtectionStatusResponse,
  InternalErrorException,
  InvalidInputException,
  InvalidOperationException,
  InvalidTypeException,
  LimitExceededException,
  ListComplianceStatusRequest,
  ListComplianceStatusResponse,
  ListMemberAccountsRequest,
  ListMemberAccountsResponse,
  ListPoliciesRequest,
  ListPoliciesResponse,
  Policy,
  PolicyComplianceDetail,
  PolicyComplianceStatus,
  PolicySummary,
  PutNotificationChannelRequest,
  PutPolicyRequest,
  PutPolicyResponse,
  ResourceNotFoundException,
  ResourceTag,
  SecurityServicePolicyData,
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export async function serializeAws_json1_1AssociateAdminAccountCommand(
  input: AssociateAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSFMS_20180101.AssociateAdminAccount";
  let body: any = {};
  const wrappedBody: any = {
    AssociateAdminAccountRequest: serializeAws_json1_1AssociateAdminAccountRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AssociateAdminAccount",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DeleteNotificationChannelCommand(
  input: DeleteNotificationChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSFMS_20180101.DeleteNotificationChannel";
  let body: any = {};
  const wrappedBody: any = {
    DeleteNotificationChannelRequest: serializeAws_json1_1DeleteNotificationChannelRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteNotificationChannel",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DeletePolicyCommand(
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSFMS_20180101.DeletePolicy";
  let body: any = {};
  const wrappedBody: any = {
    DeletePolicyRequest: serializeAws_json1_1DeletePolicyRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeletePolicy",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1DisassociateAdminAccountCommand(
  input: DisassociateAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSFMS_20180101.DisassociateAdminAccount";
  let body: any = {};
  const wrappedBody: any = {
    DisassociateAdminAccountRequest: serializeAws_json1_1DisassociateAdminAccountRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DisassociateAdminAccount",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1GetAdminAccountCommand(
  input: GetAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSFMS_20180101.GetAdminAccount";
  let body: any = {};
  const wrappedBody: any = {
    GetAdminAccountRequest: serializeAws_json1_1GetAdminAccountRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetAdminAccount",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1GetComplianceDetailCommand(
  input: GetComplianceDetailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSFMS_20180101.GetComplianceDetail";
  let body: any = {};
  const wrappedBody: any = {
    GetComplianceDetailRequest: serializeAws_json1_1GetComplianceDetailRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetComplianceDetail",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1GetNotificationChannelCommand(
  input: GetNotificationChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSFMS_20180101.GetNotificationChannel";
  let body: any = {};
  const wrappedBody: any = {
    GetNotificationChannelRequest: serializeAws_json1_1GetNotificationChannelRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetNotificationChannel",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1GetPolicyCommand(
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSFMS_20180101.GetPolicy";
  let body: any = {};
  const wrappedBody: any = {
    GetPolicyRequest: serializeAws_json1_1GetPolicyRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetPolicy",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1GetProtectionStatusCommand(
  input: GetProtectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSFMS_20180101.GetProtectionStatus";
  let body: any = {};
  const wrappedBody: any = {
    GetProtectionStatusRequest: serializeAws_json1_1GetProtectionStatusRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetProtectionStatus",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1ListComplianceStatusCommand(
  input: ListComplianceStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSFMS_20180101.ListComplianceStatus";
  let body: any = {};
  const wrappedBody: any = {
    ListComplianceStatusRequest: serializeAws_json1_1ListComplianceStatusRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListComplianceStatus",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1ListMemberAccountsCommand(
  input: ListMemberAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSFMS_20180101.ListMemberAccounts";
  let body: any = {};
  const wrappedBody: any = {
    ListMemberAccountsRequest: serializeAws_json1_1ListMemberAccountsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListMemberAccounts",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1ListPoliciesCommand(
  input: ListPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSFMS_20180101.ListPolicies";
  let body: any = {};
  const wrappedBody: any = {
    ListPoliciesRequest: serializeAws_json1_1ListPoliciesRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListPolicies",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1PutNotificationChannelCommand(
  input: PutNotificationChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSFMS_20180101.PutNotificationChannel";
  let body: any = {};
  const wrappedBody: any = {
    PutNotificationChannelRequest: serializeAws_json1_1PutNotificationChannelRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutNotificationChannel",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1PutPolicyCommand(
  input: PutPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSFMS_20180101.PutPolicy";
  let body: any = {};
  const wrappedBody: any = {
    PutPolicyRequest: serializeAws_json1_1PutPolicyRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutPolicy",
    headers: headers,
    body: body,
  });
}

export async function deserializeAws_json1_1AssociateAdminAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAdminAccountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateAdminAccountCommandError(output, context);
  }
  const response: AssociateAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AssociateAdminAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<AssociateAdminAccountCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.roshi.customerapi.v20180101#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    case "InvalidOperationException":
    case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
      response = await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.roshi.customerapi.v20180101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteNotificationChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationChannelCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteNotificationChannelCommandError(output, context);
  }
  const response: DeleteNotificationChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteNotificationChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteNotificationChannelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
      break;
    case "InvalidOperationException":
    case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
      response = await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.roshi.customerapi.v20180101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeletePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeletePolicyCommandError(output, context);
  }
  const response: DeletePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeletePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeletePolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
      break;
    case "InvalidOperationException":
    case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
      response = await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.roshi.customerapi.v20180101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DisassociateAdminAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAdminAccountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateAdminAccountCommandError(output, context);
  }
  const response: DisassociateAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisassociateAdminAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DisassociateAdminAccountCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
      break;
    case "InvalidOperationException":
    case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
      response = await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.roshi.customerapi.v20180101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetAdminAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdminAccountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAdminAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1GetAdminAccountResponse(data, context);
  const response: GetAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAdminAccountResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetAdminAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetAdminAccountCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
      break;
    case "InvalidOperationException":
    case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
      response = await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.roshi.customerapi.v20180101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetComplianceDetailCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceDetailCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetComplianceDetailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1GetComplianceDetailResponse(data, context);
  const response: GetComplianceDetailCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetComplianceDetailResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetComplianceDetailCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetComplianceDetailCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.roshi.customerapi.v20180101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetNotificationChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNotificationChannelCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetNotificationChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1GetNotificationChannelResponse(data, context);
  const response: GetNotificationChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetNotificationChannelResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetNotificationChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetNotificationChannelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
      break;
    case "InvalidOperationException":
    case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
      response = await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.roshi.customerapi.v20180101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1GetPolicyResponse(data, context);
  const response: GetPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
      break;
    case "InvalidOperationException":
    case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
      response = await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context);
      break;
    case "InvalidTypeException":
    case "com.amazonaws.roshi.customerapi.v20180101#InvalidTypeException":
      response = await deserializeAws_json1_1InvalidTypeExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.roshi.customerapi.v20180101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetProtectionStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProtectionStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetProtectionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1GetProtectionStatusResponse(data, context);
  const response: GetProtectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetProtectionStatusResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetProtectionStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetProtectionStatusCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.roshi.customerapi.v20180101#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.roshi.customerapi.v20180101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListComplianceStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComplianceStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListComplianceStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1ListComplianceStatusResponse(data, context);
  const response: ListComplianceStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListComplianceStatusResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListComplianceStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListComplianceStatusCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.roshi.customerapi.v20180101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListMemberAccountsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMemberAccountsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListMemberAccountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1ListMemberAccountsResponse(data, context);
  const response: ListMemberAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMemberAccountsResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListMemberAccountsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListMemberAccountsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.roshi.customerapi.v20180101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListPoliciesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1ListPoliciesResponse(data, context);
  const response: ListPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPoliciesResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListPoliciesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListPoliciesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
      break;
    case "InvalidOperationException":
    case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
      response = await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context);
      break;
    case "LimitExceededException":
    case "com.amazonaws.roshi.customerapi.v20180101#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.roshi.customerapi.v20180101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutNotificationChannelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutNotificationChannelCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutNotificationChannelCommandError(output, context);
  }
  const response: PutNotificationChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutNotificationChannelCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<PutNotificationChannelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
      break;
    case "InvalidOperationException":
    case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
      response = await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.roshi.customerapi.v20180101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1PutPolicyResponse(data, context);
  const response: PutPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutPolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<PutPolicyCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.roshi.customerapi.v20180101#InternalErrorException":
      response = await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context);
      break;
    case "InvalidInputException":
    case "com.amazonaws.roshi.customerapi.v20180101#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
      break;
    case "InvalidOperationException":
    case "com.amazonaws.roshi.customerapi.v20180101#InvalidOperationException":
      response = await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context);
      break;
    case "InvalidTypeException":
    case "com.amazonaws.roshi.customerapi.v20180101#InvalidTypeException":
      response = await deserializeAws_json1_1InvalidTypeExceptionResponse(parsedOutput, context);
      break;
    case "LimitExceededException":
    case "com.amazonaws.roshi.customerapi.v20180101#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.roshi.customerapi.v20180101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.roshi.customerapi.v20180101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1InternalErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const deserialized: any = deserializeAws_json1_1InternalErrorException(output.body, context);
  const contents: InternalErrorException = {
    __type: "InternalErrorException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const deserialized: any = deserializeAws_json1_1InvalidInputException(output.body, context);
  const contents: InvalidInputException = {
    __type: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidOperationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const deserialized: any = deserializeAws_json1_1InvalidOperationException(output.body, context);
  const contents: InvalidOperationException = {
    __type: "InvalidOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTypeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTypeException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTypeException(output.body, context);
  const contents: InvalidTypeException = {
    __type: "InvalidTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1LimitExceededException(output.body, context);
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(output.body, context);
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AssociateAdminAccountRequest = (
  input: AssociateAdminAccountRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AdminAccount !== undefined) {
    bodyParams['AdminAccount'] = input.AdminAccount;
  }
  return bodyParams;
}

const serializeAws_json1_1CustomerPolicyScopeIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1CustomerPolicyScopeMap = (
  input: { [key: string]: Array<string> },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1CustomerPolicyScopeIdList(input[key], context);
  });
  return mapParams;
}

const serializeAws_json1_1DeleteNotificationChannelRequest = (
  input: DeleteNotificationChannelRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
}

const serializeAws_json1_1DeletePolicyRequest = (
  input: DeletePolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DeleteAllPolicyResources !== undefined) {
    bodyParams['DeleteAllPolicyResources'] = input.DeleteAllPolicyResources;
  }
  if (input.PolicyId !== undefined) {
    bodyParams['PolicyId'] = input.PolicyId;
  }
  return bodyParams;
}

const serializeAws_json1_1DisassociateAdminAccountRequest = (
  input: DisassociateAdminAccountRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
}

const serializeAws_json1_1GetAdminAccountRequest = (
  input: GetAdminAccountRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
}

const serializeAws_json1_1GetComplianceDetailRequest = (
  input: GetComplianceDetailRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MemberAccount !== undefined) {
    bodyParams['MemberAccount'] = input.MemberAccount;
  }
  if (input.PolicyId !== undefined) {
    bodyParams['PolicyId'] = input.PolicyId;
  }
  return bodyParams;
}

const serializeAws_json1_1GetNotificationChannelRequest = (
  input: GetNotificationChannelRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
}

const serializeAws_json1_1GetPolicyRequest = (
  input: GetPolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PolicyId !== undefined) {
    bodyParams['PolicyId'] = input.PolicyId;
  }
  return bodyParams;
}

const serializeAws_json1_1GetProtectionStatusRequest = (
  input: GetProtectionStatusRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams['EndTime'] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.MemberAccountId !== undefined) {
    bodyParams['MemberAccountId'] = input.MemberAccountId;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  if (input.PolicyId !== undefined) {
    bodyParams['PolicyId'] = input.PolicyId;
  }
  if (input.StartTime !== undefined) {
    bodyParams['StartTime'] = Math.round(input.StartTime.getTime() / 1000);
  }
  return bodyParams;
}

const serializeAws_json1_1ListComplianceStatusRequest = (
  input: ListComplianceStatusRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  if (input.PolicyId !== undefined) {
    bodyParams['PolicyId'] = input.PolicyId;
  }
  return bodyParams;
}

const serializeAws_json1_1ListMemberAccountsRequest = (
  input: ListMemberAccountsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  return bodyParams;
}

const serializeAws_json1_1ListPoliciesRequest = (
  input: ListPoliciesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  return bodyParams;
}

const serializeAws_json1_1Policy = (
  input: Policy,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ExcludeMap !== undefined) {
    bodyParams['ExcludeMap'] = serializeAws_json1_1CustomerPolicyScopeMap(input.ExcludeMap, context);
  }
  if (input.ExcludeResourceTags !== undefined) {
    bodyParams['ExcludeResourceTags'] = input.ExcludeResourceTags;
  }
  if (input.IncludeMap !== undefined) {
    bodyParams['IncludeMap'] = serializeAws_json1_1CustomerPolicyScopeMap(input.IncludeMap, context);
  }
  if (input.PolicyId !== undefined) {
    bodyParams['PolicyId'] = input.PolicyId;
  }
  if (input.PolicyName !== undefined) {
    bodyParams['PolicyName'] = input.PolicyName;
  }
  if (input.PolicyUpdateToken !== undefined) {
    bodyParams['PolicyUpdateToken'] = input.PolicyUpdateToken;
  }
  if (input.RemediationEnabled !== undefined) {
    bodyParams['RemediationEnabled'] = input.RemediationEnabled;
  }
  if (input.ResourceTags !== undefined) {
    bodyParams['ResourceTags'] = serializeAws_json1_1ResourceTags(input.ResourceTags, context);
  }
  if (input.ResourceType !== undefined) {
    bodyParams['ResourceType'] = input.ResourceType;
  }
  if (input.ResourceTypeList !== undefined) {
    bodyParams['ResourceTypeList'] = serializeAws_json1_1ResourceTypeList(input.ResourceTypeList, context);
  }
  if (input.SecurityServicePolicyData !== undefined) {
    bodyParams['SecurityServicePolicyData'] = serializeAws_json1_1SecurityServicePolicyData(input.SecurityServicePolicyData, context);
  }
  return bodyParams;
}

const serializeAws_json1_1PutNotificationChannelRequest = (
  input: PutNotificationChannelRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.SnsRoleName !== undefined) {
    bodyParams['SnsRoleName'] = input.SnsRoleName;
  }
  if (input.SnsTopicArn !== undefined) {
    bodyParams['SnsTopicArn'] = input.SnsTopicArn;
  }
  return bodyParams;
}

const serializeAws_json1_1PutPolicyRequest = (
  input: PutPolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Policy !== undefined) {
    bodyParams['Policy'] = serializeAws_json1_1Policy(input.Policy, context);
  }
  return bodyParams;
}

const serializeAws_json1_1ResourceTag = (
  input: ResourceTag,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams['Key'] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams['Value'] = input.Value;
  }
  return bodyParams;
}

const serializeAws_json1_1ResourceTags = (
  input: Array<ResourceTag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ResourceTag(entry, context)
  );
}

const serializeAws_json1_1ResourceTypeList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1SecurityServicePolicyData = (
  input: SecurityServicePolicyData,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ManagedServiceData !== undefined) {
    bodyParams['ManagedServiceData'] = input.ManagedServiceData;
  }
  if (input.Type !== undefined) {
    bodyParams['Type'] = input.Type;
  }
  return bodyParams;
}

const deserializeAws_json1_1ComplianceViolator = (
  output: any,
  context: __SerdeContext
): ComplianceViolator => {
  let contents: any = {
    __type: "ComplianceViolator",
    ResourceId: undefined,
    ResourceType: undefined,
    ViolationReason: undefined,
  };
  if (output.ResourceId !== undefined) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.ResourceType !== undefined) {
    contents.ResourceType = output.ResourceType;
  }
  if (output.ViolationReason !== undefined) {
    contents.ViolationReason = output.ViolationReason;
  }
  return contents;
}

const deserializeAws_json1_1ComplianceViolators = (
  output: any,
  context: __SerdeContext
): Array<ComplianceViolator> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ComplianceViolator(entry, context)
  );
}

const deserializeAws_json1_1CustomerPolicyScopeIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_json1_1CustomerPolicyScopeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: Array<string> } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1CustomerPolicyScopeIdList(output[key], context);
  });
  return mapParams;
}

const deserializeAws_json1_1EvaluationResult = (
  output: any,
  context: __SerdeContext
): EvaluationResult => {
  let contents: any = {
    __type: "EvaluationResult",
    ComplianceStatus: undefined,
    EvaluationLimitExceeded: undefined,
    ViolatorCount: undefined,
  };
  if (output.ComplianceStatus !== undefined) {
    contents.ComplianceStatus = output.ComplianceStatus;
  }
  if (output.EvaluationLimitExceeded !== undefined) {
    contents.EvaluationLimitExceeded = output.EvaluationLimitExceeded;
  }
  if (output.ViolatorCount !== undefined) {
    contents.ViolatorCount = output.ViolatorCount;
  }
  return contents;
}

const deserializeAws_json1_1EvaluationResults = (
  output: any,
  context: __SerdeContext
): Array<EvaluationResult> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EvaluationResult(entry, context)
  );
}

const deserializeAws_json1_1GetAdminAccountResponse = (
  output: any,
  context: __SerdeContext
): GetAdminAccountResponse => {
  let contents: any = {
    __type: "GetAdminAccountResponse",
    AdminAccount: undefined,
    RoleStatus: undefined,
  };
  if (output.AdminAccount !== undefined) {
    contents.AdminAccount = output.AdminAccount;
  }
  if (output.RoleStatus !== undefined) {
    contents.RoleStatus = output.RoleStatus;
  }
  return contents;
}

const deserializeAws_json1_1GetComplianceDetailResponse = (
  output: any,
  context: __SerdeContext
): GetComplianceDetailResponse => {
  let contents: any = {
    __type: "GetComplianceDetailResponse",
    PolicyComplianceDetail: undefined,
  };
  if (output.PolicyComplianceDetail !== undefined) {
    contents.PolicyComplianceDetail = deserializeAws_json1_1PolicyComplianceDetail(output.PolicyComplianceDetail, context);
  }
  return contents;
}

const deserializeAws_json1_1GetNotificationChannelResponse = (
  output: any,
  context: __SerdeContext
): GetNotificationChannelResponse => {
  let contents: any = {
    __type: "GetNotificationChannelResponse",
    SnsRoleName: undefined,
    SnsTopicArn: undefined,
  };
  if (output.SnsRoleName !== undefined) {
    contents.SnsRoleName = output.SnsRoleName;
  }
  if (output.SnsTopicArn !== undefined) {
    contents.SnsTopicArn = output.SnsTopicArn;
  }
  return contents;
}

const deserializeAws_json1_1GetPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetPolicyResponse => {
  let contents: any = {
    __type: "GetPolicyResponse",
    Policy: undefined,
    PolicyArn: undefined,
  };
  if (output.Policy !== undefined) {
    contents.Policy = deserializeAws_json1_1Policy(output.Policy, context);
  }
  if (output.PolicyArn !== undefined) {
    contents.PolicyArn = output.PolicyArn;
  }
  return contents;
}

const deserializeAws_json1_1GetProtectionStatusResponse = (
  output: any,
  context: __SerdeContext
): GetProtectionStatusResponse => {
  let contents: any = {
    __type: "GetProtectionStatusResponse",
    AdminAccountId: undefined,
    Data: undefined,
    NextToken: undefined,
    ServiceType: undefined,
  };
  if (output.AdminAccountId !== undefined) {
    contents.AdminAccountId = output.AdminAccountId;
  }
  if (output.Data !== undefined) {
    contents.Data = output.Data;
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.ServiceType !== undefined) {
    contents.ServiceType = output.ServiceType;
  }
  return contents;
}

const deserializeAws_json1_1InternalErrorException = (
  output: any,
  context: __SerdeContext
): InternalErrorException => {
  let contents: any = {
    __type: "InternalErrorException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1InvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  let contents: any = {
    __type: "InvalidOperationException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1InvalidTypeException = (
  output: any,
  context: __SerdeContext
): InvalidTypeException => {
  let contents: any = {
    __type: "InvalidTypeException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1IssueInfoMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
}

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1ListComplianceStatusResponse = (
  output: any,
  context: __SerdeContext
): ListComplianceStatusResponse => {
  let contents: any = {
    __type: "ListComplianceStatusResponse",
    NextToken: undefined,
    PolicyComplianceStatusList: undefined,
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.PolicyComplianceStatusList !== undefined) {
    contents.PolicyComplianceStatusList = deserializeAws_json1_1PolicyComplianceStatusList(output.PolicyComplianceStatusList, context);
  }
  return contents;
}

const deserializeAws_json1_1ListMemberAccountsResponse = (
  output: any,
  context: __SerdeContext
): ListMemberAccountsResponse => {
  let contents: any = {
    __type: "ListMemberAccountsResponse",
    MemberAccounts: undefined,
    NextToken: undefined,
  };
  if (output.MemberAccounts !== undefined) {
    contents.MemberAccounts = deserializeAws_json1_1MemberAccounts(output.MemberAccounts, context);
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
}

const deserializeAws_json1_1ListPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListPoliciesResponse => {
  let contents: any = {
    __type: "ListPoliciesResponse",
    NextToken: undefined,
    PolicyList: undefined,
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.PolicyList !== undefined) {
    contents.PolicyList = deserializeAws_json1_1PolicySummaryList(output.PolicyList, context);
  }
  return contents;
}

const deserializeAws_json1_1MemberAccounts = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_json1_1Policy = (
  output: any,
  context: __SerdeContext
): Policy => {
  let contents: any = {
    __type: "Policy",
    ExcludeMap: undefined,
    ExcludeResourceTags: undefined,
    IncludeMap: undefined,
    PolicyId: undefined,
    PolicyName: undefined,
    PolicyUpdateToken: undefined,
    RemediationEnabled: undefined,
    ResourceTags: undefined,
    ResourceType: undefined,
    ResourceTypeList: undefined,
    SecurityServicePolicyData: undefined,
  };
  if (output.ExcludeMap !== undefined) {
    contents.ExcludeMap = deserializeAws_json1_1CustomerPolicyScopeMap(output.ExcludeMap, context);
  }
  if (output.ExcludeResourceTags !== undefined) {
    contents.ExcludeResourceTags = output.ExcludeResourceTags;
  }
  if (output.IncludeMap !== undefined) {
    contents.IncludeMap = deserializeAws_json1_1CustomerPolicyScopeMap(output.IncludeMap, context);
  }
  if (output.PolicyId !== undefined) {
    contents.PolicyId = output.PolicyId;
  }
  if (output.PolicyName !== undefined) {
    contents.PolicyName = output.PolicyName;
  }
  if (output.PolicyUpdateToken !== undefined) {
    contents.PolicyUpdateToken = output.PolicyUpdateToken;
  }
  if (output.RemediationEnabled !== undefined) {
    contents.RemediationEnabled = output.RemediationEnabled;
  }
  if (output.ResourceTags !== undefined) {
    contents.ResourceTags = deserializeAws_json1_1ResourceTags(output.ResourceTags, context);
  }
  if (output.ResourceType !== undefined) {
    contents.ResourceType = output.ResourceType;
  }
  if (output.ResourceTypeList !== undefined) {
    contents.ResourceTypeList = deserializeAws_json1_1ResourceTypeList(output.ResourceTypeList, context);
  }
  if (output.SecurityServicePolicyData !== undefined) {
    contents.SecurityServicePolicyData = deserializeAws_json1_1SecurityServicePolicyData(output.SecurityServicePolicyData, context);
  }
  return contents;
}

const deserializeAws_json1_1PolicyComplianceDetail = (
  output: any,
  context: __SerdeContext
): PolicyComplianceDetail => {
  let contents: any = {
    __type: "PolicyComplianceDetail",
    EvaluationLimitExceeded: undefined,
    ExpiredAt: undefined,
    IssueInfoMap: undefined,
    MemberAccount: undefined,
    PolicyId: undefined,
    PolicyOwner: undefined,
    Violators: undefined,
  };
  if (output.EvaluationLimitExceeded !== undefined) {
    contents.EvaluationLimitExceeded = output.EvaluationLimitExceeded;
  }
  if (output.ExpiredAt !== undefined) {
    contents.ExpiredAt = new Date(output.ExpiredAt % 1 != 0 ? Math.round(output.ExpiredAt * 1000) : output.ExpiredAt);
  }
  if (output.IssueInfoMap !== undefined) {
    contents.IssueInfoMap = deserializeAws_json1_1IssueInfoMap(output.IssueInfoMap, context);
  }
  if (output.MemberAccount !== undefined) {
    contents.MemberAccount = output.MemberAccount;
  }
  if (output.PolicyId !== undefined) {
    contents.PolicyId = output.PolicyId;
  }
  if (output.PolicyOwner !== undefined) {
    contents.PolicyOwner = output.PolicyOwner;
  }
  if (output.Violators !== undefined) {
    contents.Violators = deserializeAws_json1_1ComplianceViolators(output.Violators, context);
  }
  return contents;
}

const deserializeAws_json1_1PolicyComplianceStatus = (
  output: any,
  context: __SerdeContext
): PolicyComplianceStatus => {
  let contents: any = {
    __type: "PolicyComplianceStatus",
    EvaluationResults: undefined,
    IssueInfoMap: undefined,
    LastUpdated: undefined,
    MemberAccount: undefined,
    PolicyId: undefined,
    PolicyName: undefined,
    PolicyOwner: undefined,
  };
  if (output.EvaluationResults !== undefined) {
    contents.EvaluationResults = deserializeAws_json1_1EvaluationResults(output.EvaluationResults, context);
  }
  if (output.IssueInfoMap !== undefined) {
    contents.IssueInfoMap = deserializeAws_json1_1IssueInfoMap(output.IssueInfoMap, context);
  }
  if (output.LastUpdated !== undefined) {
    contents.LastUpdated = new Date(output.LastUpdated % 1 != 0 ? Math.round(output.LastUpdated * 1000) : output.LastUpdated);
  }
  if (output.MemberAccount !== undefined) {
    contents.MemberAccount = output.MemberAccount;
  }
  if (output.PolicyId !== undefined) {
    contents.PolicyId = output.PolicyId;
  }
  if (output.PolicyName !== undefined) {
    contents.PolicyName = output.PolicyName;
  }
  if (output.PolicyOwner !== undefined) {
    contents.PolicyOwner = output.PolicyOwner;
  }
  return contents;
}

const deserializeAws_json1_1PolicyComplianceStatusList = (
  output: any,
  context: __SerdeContext
): Array<PolicyComplianceStatus> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PolicyComplianceStatus(entry, context)
  );
}

const deserializeAws_json1_1PolicySummary = (
  output: any,
  context: __SerdeContext
): PolicySummary => {
  let contents: any = {
    __type: "PolicySummary",
    PolicyArn: undefined,
    PolicyId: undefined,
    PolicyName: undefined,
    RemediationEnabled: undefined,
    ResourceType: undefined,
    SecurityServiceType: undefined,
  };
  if (output.PolicyArn !== undefined) {
    contents.PolicyArn = output.PolicyArn;
  }
  if (output.PolicyId !== undefined) {
    contents.PolicyId = output.PolicyId;
  }
  if (output.PolicyName !== undefined) {
    contents.PolicyName = output.PolicyName;
  }
  if (output.RemediationEnabled !== undefined) {
    contents.RemediationEnabled = output.RemediationEnabled;
  }
  if (output.ResourceType !== undefined) {
    contents.ResourceType = output.ResourceType;
  }
  if (output.SecurityServiceType !== undefined) {
    contents.SecurityServiceType = output.SecurityServiceType;
  }
  return contents;
}

const deserializeAws_json1_1PolicySummaryList = (
  output: any,
  context: __SerdeContext
): Array<PolicySummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PolicySummary(entry, context)
  );
}

const deserializeAws_json1_1PutPolicyResponse = (
  output: any,
  context: __SerdeContext
): PutPolicyResponse => {
  let contents: any = {
    __type: "PutPolicyResponse",
    Policy: undefined,
    PolicyArn: undefined,
  };
  if (output.Policy !== undefined) {
    contents.Policy = deserializeAws_json1_1Policy(output.Policy, context);
  }
  if (output.PolicyArn !== undefined) {
    contents.PolicyArn = output.PolicyArn;
  }
  return contents;
}

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined,
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
}

const deserializeAws_json1_1ResourceTag = (
  output: any,
  context: __SerdeContext
): ResourceTag => {
  let contents: any = {
    __type: "ResourceTag",
    Key: undefined,
    Value: undefined,
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
}

const deserializeAws_json1_1ResourceTags = (
  output: any,
  context: __SerdeContext
): Array<ResourceTag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourceTag(entry, context)
  );
}

const deserializeAws_json1_1ResourceTypeList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) =>
    entry
  );
}

const deserializeAws_json1_1SecurityServicePolicyData = (
  output: any,
  context: __SerdeContext
): SecurityServicePolicyData => {
  let contents: any = {
    __type: "SecurityServicePolicyData",
    ManagedServiceData: undefined,
    Type: undefined,
  };
  if (output.ManagedServiceData !== undefined) {
    contents.ManagedServiceData = output.ManagedServiceData;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
}

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
