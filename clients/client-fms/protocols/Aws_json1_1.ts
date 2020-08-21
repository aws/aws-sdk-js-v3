import {
  AssociateAdminAccountCommandInput,
  AssociateAdminAccountCommandOutput,
} from "../commands/AssociateAdminAccountCommand";
import { DeleteAppsListCommandInput, DeleteAppsListCommandOutput } from "../commands/DeleteAppsListCommand";
import {
  DeleteNotificationChannelCommandInput,
  DeleteNotificationChannelCommandOutput,
} from "../commands/DeleteNotificationChannelCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "../commands/DeletePolicyCommand";
import {
  DeleteProtocolsListCommandInput,
  DeleteProtocolsListCommandOutput,
} from "../commands/DeleteProtocolsListCommand";
import {
  DisassociateAdminAccountCommandInput,
  DisassociateAdminAccountCommandOutput,
} from "../commands/DisassociateAdminAccountCommand";
import { GetAdminAccountCommandInput, GetAdminAccountCommandOutput } from "../commands/GetAdminAccountCommand";
import { GetAppsListCommandInput, GetAppsListCommandOutput } from "../commands/GetAppsListCommand";
import {
  GetComplianceDetailCommandInput,
  GetComplianceDetailCommandOutput,
} from "../commands/GetComplianceDetailCommand";
import {
  GetNotificationChannelCommandInput,
  GetNotificationChannelCommandOutput,
} from "../commands/GetNotificationChannelCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "../commands/GetPolicyCommand";
import {
  GetProtectionStatusCommandInput,
  GetProtectionStatusCommandOutput,
} from "../commands/GetProtectionStatusCommand";
import { GetProtocolsListCommandInput, GetProtocolsListCommandOutput } from "../commands/GetProtocolsListCommand";
import {
  GetViolationDetailsCommandInput,
  GetViolationDetailsCommandOutput,
} from "../commands/GetViolationDetailsCommand";
import { ListAppsListsCommandInput, ListAppsListsCommandOutput } from "../commands/ListAppsListsCommand";
import {
  ListComplianceStatusCommandInput,
  ListComplianceStatusCommandOutput,
} from "../commands/ListComplianceStatusCommand";
import { ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput } from "../commands/ListMemberAccountsCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "../commands/ListPoliciesCommand";
import { ListProtocolsListsCommandInput, ListProtocolsListsCommandOutput } from "../commands/ListProtocolsListsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutAppsListCommandInput, PutAppsListCommandOutput } from "../commands/PutAppsListCommand";
import {
  PutNotificationChannelCommandInput,
  PutNotificationChannelCommandOutput,
} from "../commands/PutNotificationChannelCommand";
import { PutPolicyCommandInput, PutPolicyCommandOutput } from "../commands/PutPolicyCommand";
import { PutProtocolsListCommandInput, PutProtocolsListCommandOutput } from "../commands/PutProtocolsListCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  App,
  AppsListData,
  AppsListDataSummary,
  AssociateAdminAccountRequest,
  AwsEc2InstanceViolation,
  AwsEc2NetworkInterfaceViolation,
  AwsVPCSecurityGroupViolation,
  ComplianceViolator,
  CustomerPolicyScopeIdType,
  DeleteAppsListRequest,
  DeleteNotificationChannelRequest,
  DeletePolicyRequest,
  DeleteProtocolsListRequest,
  DependentServiceName,
  DisassociateAdminAccountRequest,
  EvaluationResult,
  GetAdminAccountRequest,
  GetAdminAccountResponse,
  GetAppsListRequest,
  GetAppsListResponse,
  GetComplianceDetailRequest,
  GetComplianceDetailResponse,
  GetNotificationChannelRequest,
  GetNotificationChannelResponse,
  GetPolicyRequest,
  GetPolicyResponse,
  GetProtectionStatusRequest,
  GetProtectionStatusResponse,
  GetProtocolsListRequest,
  GetProtocolsListResponse,
  GetViolationDetailsRequest,
  GetViolationDetailsResponse,
  InternalErrorException,
  InvalidInputException,
  InvalidOperationException,
  InvalidTypeException,
  LimitExceededException,
  ListAppsListsRequest,
  ListAppsListsResponse,
  ListComplianceStatusRequest,
  ListComplianceStatusResponse,
  ListMemberAccountsRequest,
  ListMemberAccountsResponse,
  ListPoliciesRequest,
  ListPoliciesResponse,
  ListProtocolsListsRequest,
  ListProtocolsListsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  PartialMatch,
  Policy,
  PolicyComplianceDetail,
  PolicyComplianceStatus,
  PolicySummary,
  ProtocolsListData,
  ProtocolsListDataSummary,
  PutAppsListRequest,
  PutAppsListResponse,
  PutNotificationChannelRequest,
  PutPolicyRequest,
  PutPolicyResponse,
  PutProtocolsListRequest,
  PutProtocolsListResponse,
  ResourceNotFoundException,
  ResourceTag,
  ResourceViolation,
  SecurityGroupRemediationAction,
  SecurityGroupRuleDescription,
  SecurityServicePolicyData,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  ViolationDetail,
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1AssociateAdminAccountCommand = async (
  input: AssociateAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.AssociateAdminAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateAdminAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAppsListCommand = async (
  input: DeleteAppsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.DeleteAppsList",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAppsListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteNotificationChannelCommand = async (
  input: DeleteNotificationChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.DeleteNotificationChannel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteNotificationChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.DeletePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProtocolsListCommand = async (
  input: DeleteProtocolsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.DeleteProtocolsList",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteProtocolsListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateAdminAccountCommand = async (
  input: DisassociateAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.DisassociateAdminAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateAdminAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAdminAccountCommand = async (
  input: GetAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.GetAdminAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAdminAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAppsListCommand = async (
  input: GetAppsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.GetAppsList",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAppsListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetComplianceDetailCommand = async (
  input: GetComplianceDetailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.GetComplianceDetail",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetComplianceDetailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetNotificationChannelCommand = async (
  input: GetNotificationChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.GetNotificationChannel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetNotificationChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.GetPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetProtectionStatusCommand = async (
  input: GetProtectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.GetProtectionStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetProtectionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetProtocolsListCommand = async (
  input: GetProtocolsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.GetProtocolsList",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetProtocolsListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetViolationDetailsCommand = async (
  input: GetViolationDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.GetViolationDetails",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetViolationDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAppsListsCommand = async (
  input: ListAppsListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.ListAppsLists",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAppsListsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListComplianceStatusCommand = async (
  input: ListComplianceStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.ListComplianceStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListComplianceStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMemberAccountsCommand = async (
  input: ListMemberAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.ListMemberAccounts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMemberAccountsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPoliciesCommand = async (
  input: ListPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.ListPolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListProtocolsListsCommand = async (
  input: ListProtocolsListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.ListProtocolsLists",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListProtocolsListsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAppsListCommand = async (
  input: PutAppsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.PutAppsList",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutAppsListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutNotificationChannelCommand = async (
  input: PutNotificationChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.PutNotificationChannel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutNotificationChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutPolicyCommand = async (
  input: PutPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.PutPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutProtocolsListCommand = async (
  input: PutProtocolsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.PutProtocolsList",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutProtocolsListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSFMS_20180101.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAdminAccountCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateAdminAccountCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteAppsListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppsListCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAppsListCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAppsListCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAppsListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppsListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteNotificationChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationChannelCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteNotificationChannelCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteNotificationChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteNotificationChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeletePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeletePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteProtocolsListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtocolsListCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteProtocolsListCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteProtocolsListCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProtocolsListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtocolsListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DisassociateAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAdminAccountCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateAdminAccountCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdminAccountCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAdminAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAdminAccountResponse(data, context);
  const response: GetAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAdminAccountResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetAppsListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppsListCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAppsListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAppsListResponse(data, context);
  const response: GetAppsListCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAppsListResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAppsListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppsListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetComplianceDetailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceDetailCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetComplianceDetailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetComplianceDetailResponse(data, context);
  const response: GetComplianceDetailCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetComplianceDetailResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetComplianceDetailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceDetailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetNotificationChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNotificationChannelCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetNotificationChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetNotificationChannelResponse(data, context);
  const response: GetNotificationChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetNotificationChannelResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetNotificationChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNotificationChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPolicyResponse(data, context);
  const response: GetPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.fms#InvalidTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetProtectionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProtectionStatusCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetProtectionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetProtectionStatusResponse(data, context);
  const response: GetProtectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetProtectionStatusResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetProtectionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProtectionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetProtocolsListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProtocolsListCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetProtocolsListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetProtocolsListResponse(data, context);
  const response: GetProtocolsListCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetProtocolsListResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetProtocolsListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProtocolsListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetViolationDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetViolationDetailsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetViolationDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetViolationDetailsResponse(data, context);
  const response: GetViolationDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetViolationDetailsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetViolationDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetViolationDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListAppsListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsListsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAppsListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAppsListsResponse(data, context);
  const response: ListAppsListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAppsListsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAppsListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListComplianceStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComplianceStatusCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListComplianceStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListComplianceStatusResponse(data, context);
  const response: ListComplianceStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListComplianceStatusResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListComplianceStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComplianceStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListMemberAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMemberAccountsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListMemberAccountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMemberAccountsResponse(data, context);
  const response: ListMemberAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMemberAccountsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMemberAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMemberAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPoliciesResponse(data, context);
  const response: ListPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPoliciesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListProtocolsListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtocolsListsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListProtocolsListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProtocolsListsResponse(data, context);
  const response: ListProtocolsListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProtocolsListsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListProtocolsListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtocolsListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1PutAppsListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppsListCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutAppsListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAppsListResponse(data, context);
  const response: PutAppsListCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutAppsListResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutAppsListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppsListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1PutNotificationChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutNotificationChannelCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutNotificationChannelCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutNotificationChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutNotificationChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutNotificationChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1PutPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutPolicyResponse(data, context);
  const response: PutPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutPolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.fms#InvalidTypeException":
      response = {
        ...(await deserializeAws_json1_1InvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1PutProtocolsListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProtocolsListCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutProtocolsListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutProtocolsListResponse(data, context);
  const response: PutProtocolsListCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutProtocolsListResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutProtocolsListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProtocolsListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1InternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalErrorException(body, context);
  const contents: InternalErrorException = {
    name: "InternalErrorException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOperationException(body, context);
  const contents: InvalidOperationException = {
    name: "InvalidOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTypeException(body, context);
  const contents: InvalidTypeException = {
    name: "InvalidTypeException",
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

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1App = (input: App, context: __SerdeContext): any => {
  return {
    ...(input.AppName !== undefined && { AppName: input.AppName }),
    ...(input.Port !== undefined && { Port: input.Port }),
    ...(input.Protocol !== undefined && { Protocol: input.Protocol }),
  };
};

const serializeAws_json1_1AppsList = (input: App[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1App(entry, context));
};

const serializeAws_json1_1AppsListData = (input: AppsListData, context: __SerdeContext): any => {
  return {
    ...(input.AppsList !== undefined && { AppsList: serializeAws_json1_1AppsList(input.AppsList, context) }),
    ...(input.CreateTime !== undefined && { CreateTime: Math.round(input.CreateTime.getTime() / 1000) }),
    ...(input.LastUpdateTime !== undefined && { LastUpdateTime: Math.round(input.LastUpdateTime.getTime() / 1000) }),
    ...(input.ListId !== undefined && { ListId: input.ListId }),
    ...(input.ListName !== undefined && { ListName: input.ListName }),
    ...(input.ListUpdateToken !== undefined && { ListUpdateToken: input.ListUpdateToken }),
    ...(input.PreviousAppsList !== undefined && {
      PreviousAppsList: serializeAws_json1_1PreviousAppsList(input.PreviousAppsList, context),
    }),
  };
};

const serializeAws_json1_1AssociateAdminAccountRequest = (
  input: AssociateAdminAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdminAccount !== undefined && { AdminAccount: input.AdminAccount }),
  };
};

const serializeAws_json1_1CustomerPolicyScopeIdList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1CustomerPolicyScopeMap = (
  input: { [key: string]: string[] },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string[] }, [key, value]: [CustomerPolicyScopeIdType | string, any]) => ({
      ...acc,
      [key]: serializeAws_json1_1CustomerPolicyScopeIdList(value, context),
    }),
    {}
  );
};

const serializeAws_json1_1DeleteAppsListRequest = (input: DeleteAppsListRequest, context: __SerdeContext): any => {
  return {
    ...(input.ListId !== undefined && { ListId: input.ListId }),
  };
};

const serializeAws_json1_1DeleteNotificationChannelRequest = (
  input: DeleteNotificationChannelRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DeletePolicyRequest = (input: DeletePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeleteAllPolicyResources !== undefined && { DeleteAllPolicyResources: input.DeleteAllPolicyResources }),
    ...(input.PolicyId !== undefined && { PolicyId: input.PolicyId }),
  };
};

const serializeAws_json1_1DeleteProtocolsListRequest = (
  input: DeleteProtocolsListRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ListId !== undefined && { ListId: input.ListId }),
  };
};

const serializeAws_json1_1DisassociateAdminAccountRequest = (
  input: DisassociateAdminAccountRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetAdminAccountRequest = (input: GetAdminAccountRequest, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_1GetAppsListRequest = (input: GetAppsListRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultList !== undefined && { DefaultList: input.DefaultList }),
    ...(input.ListId !== undefined && { ListId: input.ListId }),
  };
};

const serializeAws_json1_1GetComplianceDetailRequest = (
  input: GetComplianceDetailRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MemberAccount !== undefined && { MemberAccount: input.MemberAccount }),
    ...(input.PolicyId !== undefined && { PolicyId: input.PolicyId }),
  };
};

const serializeAws_json1_1GetNotificationChannelRequest = (
  input: GetNotificationChannelRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetPolicyRequest = (input: GetPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyId !== undefined && { PolicyId: input.PolicyId }),
  };
};

const serializeAws_json1_1GetProtectionStatusRequest = (
  input: GetProtectionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTime !== undefined && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.MemberAccountId !== undefined && { MemberAccountId: input.MemberAccountId }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PolicyId !== undefined && { PolicyId: input.PolicyId }),
    ...(input.StartTime !== undefined && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1GetProtocolsListRequest = (input: GetProtocolsListRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultList !== undefined && { DefaultList: input.DefaultList }),
    ...(input.ListId !== undefined && { ListId: input.ListId }),
  };
};

const serializeAws_json1_1GetViolationDetailsRequest = (
  input: GetViolationDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MemberAccount !== undefined && { MemberAccount: input.MemberAccount }),
    ...(input.PolicyId !== undefined && { PolicyId: input.PolicyId }),
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId }),
    ...(input.ResourceType !== undefined && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1ListAppsListsRequest = (input: ListAppsListsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultLists !== undefined && { DefaultLists: input.DefaultLists }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListComplianceStatusRequest = (
  input: ListComplianceStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PolicyId !== undefined && { PolicyId: input.PolicyId }),
  };
};

const serializeAws_json1_1ListMemberAccountsRequest = (
  input: ListMemberAccountsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListPoliciesRequest = (input: ListPoliciesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListProtocolsListsRequest = (
  input: ListProtocolsListsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultLists !== undefined && { DefaultLists: input.DefaultLists }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1Policy = (input: Policy, context: __SerdeContext): any => {
  return {
    ...(input.ExcludeMap !== undefined && {
      ExcludeMap: serializeAws_json1_1CustomerPolicyScopeMap(input.ExcludeMap, context),
    }),
    ...(input.ExcludeResourceTags !== undefined && { ExcludeResourceTags: input.ExcludeResourceTags }),
    ...(input.IncludeMap !== undefined && {
      IncludeMap: serializeAws_json1_1CustomerPolicyScopeMap(input.IncludeMap, context),
    }),
    ...(input.PolicyId !== undefined && { PolicyId: input.PolicyId }),
    ...(input.PolicyName !== undefined && { PolicyName: input.PolicyName }),
    ...(input.PolicyUpdateToken !== undefined && { PolicyUpdateToken: input.PolicyUpdateToken }),
    ...(input.RemediationEnabled !== undefined && { RemediationEnabled: input.RemediationEnabled }),
    ...(input.ResourceTags !== undefined && {
      ResourceTags: serializeAws_json1_1ResourceTags(input.ResourceTags, context),
    }),
    ...(input.ResourceType !== undefined && { ResourceType: input.ResourceType }),
    ...(input.ResourceTypeList !== undefined && {
      ResourceTypeList: serializeAws_json1_1ResourceTypeList(input.ResourceTypeList, context),
    }),
    ...(input.SecurityServicePolicyData !== undefined && {
      SecurityServicePolicyData: serializeAws_json1_1SecurityServicePolicyData(
        input.SecurityServicePolicyData,
        context
      ),
    }),
  };
};

const serializeAws_json1_1PreviousAppsList = (input: { [key: string]: App[] }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: App[] }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_json1_1AppsList(value, context),
    }),
    {}
  );
};

const serializeAws_json1_1PreviousProtocolsList = (
  input: { [key: string]: string[] },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string[] }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_json1_1ProtocolsList(value, context),
    }),
    {}
  );
};

const serializeAws_json1_1ProtocolsList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1ProtocolsListData = (input: ProtocolsListData, context: __SerdeContext): any => {
  return {
    ...(input.CreateTime !== undefined && { CreateTime: Math.round(input.CreateTime.getTime() / 1000) }),
    ...(input.LastUpdateTime !== undefined && { LastUpdateTime: Math.round(input.LastUpdateTime.getTime() / 1000) }),
    ...(input.ListId !== undefined && { ListId: input.ListId }),
    ...(input.ListName !== undefined && { ListName: input.ListName }),
    ...(input.ListUpdateToken !== undefined && { ListUpdateToken: input.ListUpdateToken }),
    ...(input.PreviousProtocolsList !== undefined && {
      PreviousProtocolsList: serializeAws_json1_1PreviousProtocolsList(input.PreviousProtocolsList, context),
    }),
    ...(input.ProtocolsList !== undefined && {
      ProtocolsList: serializeAws_json1_1ProtocolsList(input.ProtocolsList, context),
    }),
  };
};

const serializeAws_json1_1PutAppsListRequest = (input: PutAppsListRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppsList !== undefined && { AppsList: serializeAws_json1_1AppsListData(input.AppsList, context) }),
    ...(input.TagList !== undefined && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
  };
};

const serializeAws_json1_1PutNotificationChannelRequest = (
  input: PutNotificationChannelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SnsRoleName !== undefined && { SnsRoleName: input.SnsRoleName }),
    ...(input.SnsTopicArn !== undefined && { SnsTopicArn: input.SnsTopicArn }),
  };
};

const serializeAws_json1_1PutPolicyRequest = (input: PutPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Policy !== undefined && { Policy: serializeAws_json1_1Policy(input.Policy, context) }),
    ...(input.TagList !== undefined && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
  };
};

const serializeAws_json1_1PutProtocolsListRequest = (input: PutProtocolsListRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProtocolsList !== undefined && {
      ProtocolsList: serializeAws_json1_1ProtocolsListData(input.ProtocolsList, context),
    }),
    ...(input.TagList !== undefined && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
  };
};

const serializeAws_json1_1ResourceTag = (input: ResourceTag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_1ResourceTags = (input: ResourceTag[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1ResourceTag(entry, context));
};

const serializeAws_json1_1ResourceTypeList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1SecurityServicePolicyData = (
  input: SecurityServicePolicyData,
  context: __SerdeContext
): any => {
  return {
    ...(input.ManagedServiceData !== undefined && { ManagedServiceData: input.ManagedServiceData }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.TagList !== undefined && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const deserializeAws_json1_1App = (output: any, context: __SerdeContext): App => {
  return {
    __type: "App",
    AppName: output.AppName !== undefined && output.AppName !== null ? output.AppName : undefined,
    Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
  } as any;
};

const deserializeAws_json1_1AppsList = (output: any, context: __SerdeContext): App[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1App(entry, context));
};

const deserializeAws_json1_1AppsListData = (output: any, context: __SerdeContext): AppsListData => {
  return {
    __type: "AppsListData",
    AppsList:
      output.AppsList !== undefined && output.AppsList !== null
        ? deserializeAws_json1_1AppsList(output.AppsList, context)
        : undefined,
    CreateTime:
      output.CreateTime !== undefined && output.CreateTime !== null
        ? new Date(Math.round(output.CreateTime * 1000))
        : undefined,
    LastUpdateTime:
      output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
        ? new Date(Math.round(output.LastUpdateTime * 1000))
        : undefined,
    ListId: output.ListId !== undefined && output.ListId !== null ? output.ListId : undefined,
    ListName: output.ListName !== undefined && output.ListName !== null ? output.ListName : undefined,
    ListUpdateToken:
      output.ListUpdateToken !== undefined && output.ListUpdateToken !== null ? output.ListUpdateToken : undefined,
    PreviousAppsList:
      output.PreviousAppsList !== undefined && output.PreviousAppsList !== null
        ? deserializeAws_json1_1PreviousAppsList(output.PreviousAppsList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AppsListDataSummary = (output: any, context: __SerdeContext): AppsListDataSummary => {
  return {
    __type: "AppsListDataSummary",
    AppsList:
      output.AppsList !== undefined && output.AppsList !== null
        ? deserializeAws_json1_1AppsList(output.AppsList, context)
        : undefined,
    ListArn: output.ListArn !== undefined && output.ListArn !== null ? output.ListArn : undefined,
    ListId: output.ListId !== undefined && output.ListId !== null ? output.ListId : undefined,
    ListName: output.ListName !== undefined && output.ListName !== null ? output.ListName : undefined,
  } as any;
};

const deserializeAws_json1_1AppsListsData = (output: any, context: __SerdeContext): AppsListDataSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1AppsListDataSummary(entry, context));
};

const deserializeAws_json1_1AwsEc2InstanceViolation = (
  output: any,
  context: __SerdeContext
): AwsEc2InstanceViolation => {
  return {
    __type: "AwsEc2InstanceViolation",
    AwsEc2NetworkInterfaceViolations:
      output.AwsEc2NetworkInterfaceViolations !== undefined && output.AwsEc2NetworkInterfaceViolations !== null
        ? deserializeAws_json1_1AwsEc2NetworkInterfaceViolations(output.AwsEc2NetworkInterfaceViolations, context)
        : undefined,
    ViolationTarget:
      output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
  } as any;
};

const deserializeAws_json1_1AwsEc2NetworkInterfaceViolation = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceViolation => {
  return {
    __type: "AwsEc2NetworkInterfaceViolation",
    ViolatingSecurityGroups:
      output.ViolatingSecurityGroups !== undefined && output.ViolatingSecurityGroups !== null
        ? deserializeAws_json1_1ResourceIdList(output.ViolatingSecurityGroups, context)
        : undefined,
    ViolationTarget:
      output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
  } as any;
};

const deserializeAws_json1_1AwsEc2NetworkInterfaceViolations = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceViolation[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1AwsEc2NetworkInterfaceViolation(entry, context));
};

const deserializeAws_json1_1AwsVPCSecurityGroupViolation = (
  output: any,
  context: __SerdeContext
): AwsVPCSecurityGroupViolation => {
  return {
    __type: "AwsVPCSecurityGroupViolation",
    PartialMatches:
      output.PartialMatches !== undefined && output.PartialMatches !== null
        ? deserializeAws_json1_1PartialMatches(output.PartialMatches, context)
        : undefined,
    PossibleSecurityGroupRemediationActions:
      output.PossibleSecurityGroupRemediationActions !== undefined &&
      output.PossibleSecurityGroupRemediationActions !== null
        ? deserializeAws_json1_1SecurityGroupRemediationActions(output.PossibleSecurityGroupRemediationActions, context)
        : undefined,
    ViolationTarget:
      output.ViolationTarget !== undefined && output.ViolationTarget !== null ? output.ViolationTarget : undefined,
    ViolationTargetDescription:
      output.ViolationTargetDescription !== undefined && output.ViolationTargetDescription !== null
        ? output.ViolationTargetDescription
        : undefined,
  } as any;
};

const deserializeAws_json1_1ComplianceViolator = (output: any, context: __SerdeContext): ComplianceViolator => {
  return {
    __type: "ComplianceViolator",
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    ViolationReason:
      output.ViolationReason !== undefined && output.ViolationReason !== null ? output.ViolationReason : undefined,
  } as any;
};

const deserializeAws_json1_1ComplianceViolators = (output: any, context: __SerdeContext): ComplianceViolator[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ComplianceViolator(entry, context));
};

const deserializeAws_json1_1CustomerPolicyScopeIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1CustomerPolicyScopeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string[] } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string[] }, [key, value]: [CustomerPolicyScopeIdType | string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_1CustomerPolicyScopeIdList(value, context),
    }),
    {}
  );
};

const deserializeAws_json1_1EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  return {
    __type: "EvaluationResult",
    ComplianceStatus:
      output.ComplianceStatus !== undefined && output.ComplianceStatus !== null ? output.ComplianceStatus : undefined,
    EvaluationLimitExceeded:
      output.EvaluationLimitExceeded !== undefined && output.EvaluationLimitExceeded !== null
        ? output.EvaluationLimitExceeded
        : undefined,
    ViolatorCount:
      output.ViolatorCount !== undefined && output.ViolatorCount !== null ? output.ViolatorCount : undefined,
  } as any;
};

const deserializeAws_json1_1EvaluationResults = (output: any, context: __SerdeContext): EvaluationResult[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1EvaluationResult(entry, context));
};

const deserializeAws_json1_1GetAdminAccountResponse = (
  output: any,
  context: __SerdeContext
): GetAdminAccountResponse => {
  return {
    __type: "GetAdminAccountResponse",
    AdminAccount: output.AdminAccount !== undefined && output.AdminAccount !== null ? output.AdminAccount : undefined,
    RoleStatus: output.RoleStatus !== undefined && output.RoleStatus !== null ? output.RoleStatus : undefined,
  } as any;
};

const deserializeAws_json1_1GetAppsListResponse = (output: any, context: __SerdeContext): GetAppsListResponse => {
  return {
    __type: "GetAppsListResponse",
    AppsList:
      output.AppsList !== undefined && output.AppsList !== null
        ? deserializeAws_json1_1AppsListData(output.AppsList, context)
        : undefined,
    AppsListArn: output.AppsListArn !== undefined && output.AppsListArn !== null ? output.AppsListArn : undefined,
  } as any;
};

const deserializeAws_json1_1GetComplianceDetailResponse = (
  output: any,
  context: __SerdeContext
): GetComplianceDetailResponse => {
  return {
    __type: "GetComplianceDetailResponse",
    PolicyComplianceDetail:
      output.PolicyComplianceDetail !== undefined && output.PolicyComplianceDetail !== null
        ? deserializeAws_json1_1PolicyComplianceDetail(output.PolicyComplianceDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetNotificationChannelResponse = (
  output: any,
  context: __SerdeContext
): GetNotificationChannelResponse => {
  return {
    __type: "GetNotificationChannelResponse",
    SnsRoleName: output.SnsRoleName !== undefined && output.SnsRoleName !== null ? output.SnsRoleName : undefined,
    SnsTopicArn: output.SnsTopicArn !== undefined && output.SnsTopicArn !== null ? output.SnsTopicArn : undefined,
  } as any;
};

const deserializeAws_json1_1GetPolicyResponse = (output: any, context: __SerdeContext): GetPolicyResponse => {
  return {
    __type: "GetPolicyResponse",
    Policy:
      output.Policy !== undefined && output.Policy !== null
        ? deserializeAws_json1_1Policy(output.Policy, context)
        : undefined,
    PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
  } as any;
};

const deserializeAws_json1_1GetProtectionStatusResponse = (
  output: any,
  context: __SerdeContext
): GetProtectionStatusResponse => {
  return {
    __type: "GetProtectionStatusResponse",
    AdminAccountId:
      output.AdminAccountId !== undefined && output.AdminAccountId !== null ? output.AdminAccountId : undefined,
    Data: output.Data !== undefined && output.Data !== null ? output.Data : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ServiceType: output.ServiceType !== undefined && output.ServiceType !== null ? output.ServiceType : undefined,
  } as any;
};

const deserializeAws_json1_1GetProtocolsListResponse = (
  output: any,
  context: __SerdeContext
): GetProtocolsListResponse => {
  return {
    __type: "GetProtocolsListResponse",
    ProtocolsList:
      output.ProtocolsList !== undefined && output.ProtocolsList !== null
        ? deserializeAws_json1_1ProtocolsListData(output.ProtocolsList, context)
        : undefined,
    ProtocolsListArn:
      output.ProtocolsListArn !== undefined && output.ProtocolsListArn !== null ? output.ProtocolsListArn : undefined,
  } as any;
};

const deserializeAws_json1_1GetViolationDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetViolationDetailsResponse => {
  return {
    __type: "GetViolationDetailsResponse",
    ViolationDetail:
      output.ViolationDetail !== undefined && output.ViolationDetail !== null
        ? deserializeAws_json1_1ViolationDetail(output.ViolationDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InternalErrorException = (output: any, context: __SerdeContext): InternalErrorException => {
  return {
    __type: "InternalErrorException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    __type: "InvalidInputException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  return {
    __type: "InvalidOperationException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidTypeException = (output: any, context: __SerdeContext): InvalidTypeException => {
  return {
    __type: "InvalidTypeException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1IssueInfoMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [DependentServiceName | string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ListAppsListsResponse = (output: any, context: __SerdeContext): ListAppsListsResponse => {
  return {
    __type: "ListAppsListsResponse",
    AppsLists:
      output.AppsLists !== undefined && output.AppsLists !== null
        ? deserializeAws_json1_1AppsListsData(output.AppsLists, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListComplianceStatusResponse = (
  output: any,
  context: __SerdeContext
): ListComplianceStatusResponse => {
  return {
    __type: "ListComplianceStatusResponse",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    PolicyComplianceStatusList:
      output.PolicyComplianceStatusList !== undefined && output.PolicyComplianceStatusList !== null
        ? deserializeAws_json1_1PolicyComplianceStatusList(output.PolicyComplianceStatusList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListMemberAccountsResponse = (
  output: any,
  context: __SerdeContext
): ListMemberAccountsResponse => {
  return {
    __type: "ListMemberAccountsResponse",
    MemberAccounts:
      output.MemberAccounts !== undefined && output.MemberAccounts !== null
        ? deserializeAws_json1_1MemberAccounts(output.MemberAccounts, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListPoliciesResponse = (output: any, context: __SerdeContext): ListPoliciesResponse => {
  return {
    __type: "ListPoliciesResponse",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    PolicyList:
      output.PolicyList !== undefined && output.PolicyList !== null
        ? deserializeAws_json1_1PolicySummaryList(output.PolicyList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListProtocolsListsResponse = (
  output: any,
  context: __SerdeContext
): ListProtocolsListsResponse => {
  return {
    __type: "ListProtocolsListsResponse",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    ProtocolsLists:
      output.ProtocolsLists !== undefined && output.ProtocolsLists !== null
        ? deserializeAws_json1_1ProtocolsListsData(output.ProtocolsLists, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    __type: "ListTagsForResourceResponse",
    TagList:
      output.TagList !== undefined && output.TagList !== null
        ? deserializeAws_json1_1TagList(output.TagList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MemberAccounts = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1PartialMatch = (output: any, context: __SerdeContext): PartialMatch => {
  return {
    __type: "PartialMatch",
    Reference: output.Reference !== undefined && output.Reference !== null ? output.Reference : undefined,
    TargetViolationReasons:
      output.TargetViolationReasons !== undefined && output.TargetViolationReasons !== null
        ? deserializeAws_json1_1TargetViolationReasons(output.TargetViolationReasons, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PartialMatches = (output: any, context: __SerdeContext): PartialMatch[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1PartialMatch(entry, context));
};

const deserializeAws_json1_1Policy = (output: any, context: __SerdeContext): Policy => {
  return {
    __type: "Policy",
    ExcludeMap:
      output.ExcludeMap !== undefined && output.ExcludeMap !== null
        ? deserializeAws_json1_1CustomerPolicyScopeMap(output.ExcludeMap, context)
        : undefined,
    ExcludeResourceTags:
      output.ExcludeResourceTags !== undefined && output.ExcludeResourceTags !== null
        ? output.ExcludeResourceTags
        : undefined,
    IncludeMap:
      output.IncludeMap !== undefined && output.IncludeMap !== null
        ? deserializeAws_json1_1CustomerPolicyScopeMap(output.IncludeMap, context)
        : undefined,
    PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
    PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    PolicyUpdateToken:
      output.PolicyUpdateToken !== undefined && output.PolicyUpdateToken !== null
        ? output.PolicyUpdateToken
        : undefined,
    RemediationEnabled:
      output.RemediationEnabled !== undefined && output.RemediationEnabled !== null
        ? output.RemediationEnabled
        : undefined,
    ResourceTags:
      output.ResourceTags !== undefined && output.ResourceTags !== null
        ? deserializeAws_json1_1ResourceTags(output.ResourceTags, context)
        : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    ResourceTypeList:
      output.ResourceTypeList !== undefined && output.ResourceTypeList !== null
        ? deserializeAws_json1_1ResourceTypeList(output.ResourceTypeList, context)
        : undefined,
    SecurityServicePolicyData:
      output.SecurityServicePolicyData !== undefined && output.SecurityServicePolicyData !== null
        ? deserializeAws_json1_1SecurityServicePolicyData(output.SecurityServicePolicyData, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PolicyComplianceDetail = (output: any, context: __SerdeContext): PolicyComplianceDetail => {
  return {
    __type: "PolicyComplianceDetail",
    EvaluationLimitExceeded:
      output.EvaluationLimitExceeded !== undefined && output.EvaluationLimitExceeded !== null
        ? output.EvaluationLimitExceeded
        : undefined,
    ExpiredAt:
      output.ExpiredAt !== undefined && output.ExpiredAt !== null
        ? new Date(Math.round(output.ExpiredAt * 1000))
        : undefined,
    IssueInfoMap:
      output.IssueInfoMap !== undefined && output.IssueInfoMap !== null
        ? deserializeAws_json1_1IssueInfoMap(output.IssueInfoMap, context)
        : undefined,
    MemberAccount:
      output.MemberAccount !== undefined && output.MemberAccount !== null ? output.MemberAccount : undefined,
    PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
    PolicyOwner: output.PolicyOwner !== undefined && output.PolicyOwner !== null ? output.PolicyOwner : undefined,
    Violators:
      output.Violators !== undefined && output.Violators !== null
        ? deserializeAws_json1_1ComplianceViolators(output.Violators, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PolicyComplianceStatus = (output: any, context: __SerdeContext): PolicyComplianceStatus => {
  return {
    __type: "PolicyComplianceStatus",
    EvaluationResults:
      output.EvaluationResults !== undefined && output.EvaluationResults !== null
        ? deserializeAws_json1_1EvaluationResults(output.EvaluationResults, context)
        : undefined,
    IssueInfoMap:
      output.IssueInfoMap !== undefined && output.IssueInfoMap !== null
        ? deserializeAws_json1_1IssueInfoMap(output.IssueInfoMap, context)
        : undefined,
    LastUpdated:
      output.LastUpdated !== undefined && output.LastUpdated !== null
        ? new Date(Math.round(output.LastUpdated * 1000))
        : undefined,
    MemberAccount:
      output.MemberAccount !== undefined && output.MemberAccount !== null ? output.MemberAccount : undefined,
    PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
    PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    PolicyOwner: output.PolicyOwner !== undefined && output.PolicyOwner !== null ? output.PolicyOwner : undefined,
  } as any;
};

const deserializeAws_json1_1PolicyComplianceStatusList = (
  output: any,
  context: __SerdeContext
): PolicyComplianceStatus[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1PolicyComplianceStatus(entry, context));
};

const deserializeAws_json1_1PolicySummary = (output: any, context: __SerdeContext): PolicySummary => {
  return {
    __type: "PolicySummary",
    PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
    PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
    PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    RemediationEnabled:
      output.RemediationEnabled !== undefined && output.RemediationEnabled !== null
        ? output.RemediationEnabled
        : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    SecurityServiceType:
      output.SecurityServiceType !== undefined && output.SecurityServiceType !== null
        ? output.SecurityServiceType
        : undefined,
  } as any;
};

const deserializeAws_json1_1PolicySummaryList = (output: any, context: __SerdeContext): PolicySummary[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1PolicySummary(entry, context));
};

const deserializeAws_json1_1PreviousAppsList = (output: any, context: __SerdeContext): { [key: string]: App[] } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: App[] }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_1AppsList(value, context),
    }),
    {}
  );
};

const deserializeAws_json1_1PreviousProtocolsList = (
  output: any,
  context: __SerdeContext
): { [key: string]: string[] } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string[] }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_1ProtocolsList(value, context),
    }),
    {}
  );
};

const deserializeAws_json1_1ProtocolsList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ProtocolsListData = (output: any, context: __SerdeContext): ProtocolsListData => {
  return {
    __type: "ProtocolsListData",
    CreateTime:
      output.CreateTime !== undefined && output.CreateTime !== null
        ? new Date(Math.round(output.CreateTime * 1000))
        : undefined,
    LastUpdateTime:
      output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
        ? new Date(Math.round(output.LastUpdateTime * 1000))
        : undefined,
    ListId: output.ListId !== undefined && output.ListId !== null ? output.ListId : undefined,
    ListName: output.ListName !== undefined && output.ListName !== null ? output.ListName : undefined,
    ListUpdateToken:
      output.ListUpdateToken !== undefined && output.ListUpdateToken !== null ? output.ListUpdateToken : undefined,
    PreviousProtocolsList:
      output.PreviousProtocolsList !== undefined && output.PreviousProtocolsList !== null
        ? deserializeAws_json1_1PreviousProtocolsList(output.PreviousProtocolsList, context)
        : undefined,
    ProtocolsList:
      output.ProtocolsList !== undefined && output.ProtocolsList !== null
        ? deserializeAws_json1_1ProtocolsList(output.ProtocolsList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProtocolsListDataSummary = (
  output: any,
  context: __SerdeContext
): ProtocolsListDataSummary => {
  return {
    __type: "ProtocolsListDataSummary",
    ListArn: output.ListArn !== undefined && output.ListArn !== null ? output.ListArn : undefined,
    ListId: output.ListId !== undefined && output.ListId !== null ? output.ListId : undefined,
    ListName: output.ListName !== undefined && output.ListName !== null ? output.ListName : undefined,
    ProtocolsList:
      output.ProtocolsList !== undefined && output.ProtocolsList !== null
        ? deserializeAws_json1_1ProtocolsList(output.ProtocolsList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProtocolsListsData = (output: any, context: __SerdeContext): ProtocolsListDataSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ProtocolsListDataSummary(entry, context));
};

const deserializeAws_json1_1PutAppsListResponse = (output: any, context: __SerdeContext): PutAppsListResponse => {
  return {
    __type: "PutAppsListResponse",
    AppsList:
      output.AppsList !== undefined && output.AppsList !== null
        ? deserializeAws_json1_1AppsListData(output.AppsList, context)
        : undefined,
    AppsListArn: output.AppsListArn !== undefined && output.AppsListArn !== null ? output.AppsListArn : undefined,
  } as any;
};

const deserializeAws_json1_1PutPolicyResponse = (output: any, context: __SerdeContext): PutPolicyResponse => {
  return {
    __type: "PutPolicyResponse",
    Policy:
      output.Policy !== undefined && output.Policy !== null
        ? deserializeAws_json1_1Policy(output.Policy, context)
        : undefined,
    PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
  } as any;
};

const deserializeAws_json1_1PutProtocolsListResponse = (
  output: any,
  context: __SerdeContext
): PutProtocolsListResponse => {
  return {
    __type: "PutProtocolsListResponse",
    ProtocolsList:
      output.ProtocolsList !== undefined && output.ProtocolsList !== null
        ? deserializeAws_json1_1ProtocolsListData(output.ProtocolsList, context)
        : undefined,
    ProtocolsListArn:
      output.ProtocolsListArn !== undefined && output.ProtocolsListArn !== null ? output.ProtocolsListArn : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceTag = (output: any, context: __SerdeContext): ResourceTag => {
  return {
    __type: "ResourceTag",
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceTags = (output: any, context: __SerdeContext): ResourceTag[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ResourceTag(entry, context));
};

const deserializeAws_json1_1ResourceTypeList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ResourceViolation = (output: any, context: __SerdeContext): ResourceViolation => {
  return {
    __type: "ResourceViolation",
    AwsEc2InstanceViolation:
      output.AwsEc2InstanceViolation !== undefined && output.AwsEc2InstanceViolation !== null
        ? deserializeAws_json1_1AwsEc2InstanceViolation(output.AwsEc2InstanceViolation, context)
        : undefined,
    AwsEc2NetworkInterfaceViolation:
      output.AwsEc2NetworkInterfaceViolation !== undefined && output.AwsEc2NetworkInterfaceViolation !== null
        ? deserializeAws_json1_1AwsEc2NetworkInterfaceViolation(output.AwsEc2NetworkInterfaceViolation, context)
        : undefined,
    AwsVPCSecurityGroupViolation:
      output.AwsVPCSecurityGroupViolation !== undefined && output.AwsVPCSecurityGroupViolation !== null
        ? deserializeAws_json1_1AwsVPCSecurityGroupViolation(output.AwsVPCSecurityGroupViolation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceViolations = (output: any, context: __SerdeContext): ResourceViolation[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ResourceViolation(entry, context));
};

const deserializeAws_json1_1SecurityGroupRemediationAction = (
  output: any,
  context: __SerdeContext
): SecurityGroupRemediationAction => {
  return {
    __type: "SecurityGroupRemediationAction",
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    IsDefaultAction:
      output.IsDefaultAction !== undefined && output.IsDefaultAction !== null ? output.IsDefaultAction : undefined,
    RemediationActionType:
      output.RemediationActionType !== undefined && output.RemediationActionType !== null
        ? output.RemediationActionType
        : undefined,
    RemediationResult:
      output.RemediationResult !== undefined && output.RemediationResult !== null
        ? deserializeAws_json1_1SecurityGroupRuleDescription(output.RemediationResult, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SecurityGroupRemediationActions = (
  output: any,
  context: __SerdeContext
): SecurityGroupRemediationAction[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1SecurityGroupRemediationAction(entry, context));
};

const deserializeAws_json1_1SecurityGroupRuleDescription = (
  output: any,
  context: __SerdeContext
): SecurityGroupRuleDescription => {
  return {
    __type: "SecurityGroupRuleDescription",
    FromPort: output.FromPort !== undefined && output.FromPort !== null ? output.FromPort : undefined,
    IPV4Range: output.IPV4Range !== undefined && output.IPV4Range !== null ? output.IPV4Range : undefined,
    IPV6Range: output.IPV6Range !== undefined && output.IPV6Range !== null ? output.IPV6Range : undefined,
    PrefixListId: output.PrefixListId !== undefined && output.PrefixListId !== null ? output.PrefixListId : undefined,
    Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
    ToPort: output.ToPort !== undefined && output.ToPort !== null ? output.ToPort : undefined,
  } as any;
};

const deserializeAws_json1_1SecurityServicePolicyData = (
  output: any,
  context: __SerdeContext
): SecurityServicePolicyData => {
  return {
    __type: "SecurityServicePolicyData",
    ManagedServiceData:
      output.ManagedServiceData !== undefined && output.ManagedServiceData !== null
        ? output.ManagedServiceData
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    __type: "Tag",
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Tag(entry, context));
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {
    __type: "TagResourceResponse",
  } as any;
};

const deserializeAws_json1_1TargetViolationReasons = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {
    __type: "UntagResourceResponse",
  } as any;
};

const deserializeAws_json1_1ViolationDetail = (output: any, context: __SerdeContext): ViolationDetail => {
  return {
    __type: "ViolationDetail",
    MemberAccount:
      output.MemberAccount !== undefined && output.MemberAccount !== null ? output.MemberAccount : undefined,
    PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
    ResourceDescription:
      output.ResourceDescription !== undefined && output.ResourceDescription !== null
        ? output.ResourceDescription
        : undefined,
    ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    ResourceTags:
      output.ResourceTags !== undefined && output.ResourceTags !== null
        ? deserializeAws_json1_1TagList(output.ResourceTags, context)
        : undefined,
    ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    ResourceViolations:
      output.ResourceViolations !== undefined && output.ResourceViolations !== null
        ? deserializeAws_json1_1ResourceViolations(output.ResourceViolations, context)
        : undefined,
  } as any;
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
