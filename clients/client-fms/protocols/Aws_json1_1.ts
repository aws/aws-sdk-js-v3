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
  ActionTarget,
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
  DnsDuplicateRuleGroupViolation,
  DnsRuleGroupLimitExceededViolation,
  DnsRuleGroupPriorityConflictViolation,
  EC2AssociateRouteTableAction,
  EC2CopyRouteTableAction,
  EC2CreateRouteAction,
  EC2CreateRouteTableAction,
  EC2DeleteRouteAction,
  EC2ReplaceRouteAction,
  EC2ReplaceRouteTableAssociationAction,
  EvaluationResult,
  ExpectedRoute,
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
  NetworkFirewallBlackHoleRouteDetectedViolation,
  NetworkFirewallInternetTrafficNotInspectedViolation,
  NetworkFirewallInvalidRouteConfigurationViolation,
  NetworkFirewallMissingExpectedRTViolation,
  NetworkFirewallMissingExpectedRoutesViolation,
  NetworkFirewallMissingFirewallViolation,
  NetworkFirewallMissingSubnetViolation,
  NetworkFirewallPolicyDescription,
  NetworkFirewallPolicyModifiedViolation,
  NetworkFirewallUnexpectedFirewallRoutesViolation,
  NetworkFirewallUnexpectedGatewayRoutesViolation,
  PartialMatch,
  Policy,
  PolicyComplianceDetail,
  PolicyComplianceStatus,
  PolicySummary,
  PossibleRemediationAction,
  PossibleRemediationActions,
  ProtocolsListData,
  ProtocolsListDataSummary,
  PutAppsListRequest,
  PutAppsListResponse,
  PutNotificationChannelRequest,
  PutPolicyRequest,
  PutPolicyResponse,
  PutProtocolsListRequest,
  PutProtocolsListResponse,
  RemediationAction,
  RemediationActionWithOrder,
  ResourceNotFoundException,
  ResourceTag,
  ResourceViolation,
  Route,
  SecurityGroupRemediationAction,
  SecurityGroupRuleDescription,
  SecurityServicePolicyData,
  StatefulRuleGroup,
  StatelessRuleGroup,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  ViolationDetail,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectString as __expectString,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1AssociateAdminAccountCommand = async (
  input: AssociateAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.AssociateAdminAccount",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.DeleteAppsList",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.DeleteNotificationChannel",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.DeletePolicy",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.DeleteProtocolsList",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.DisassociateAdminAccount",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetAdminAccount",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetAppsList",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetComplianceDetail",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetNotificationChannel",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetPolicy",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetProtectionStatus",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetProtocolsList",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetViolationDetails",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.ListAppsLists",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.ListComplianceStatus",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.ListMemberAccounts",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.ListPolicies",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.ListProtocolsLists",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.ListTagsForResource",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.PutAppsList",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.PutNotificationChannel",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.PutPolicy",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.PutProtocolsList",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.TagResource",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAdminAccountCommandOutput> => {
  if (output.statusCode >= 300) {
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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

export const deserializeAws_json1_1DeleteAppsListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppsListCommandOutput> => {
  if (output.statusCode >= 300) {
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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

export const deserializeAws_json1_1DeleteProtocolsListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtocolsListCommandOutput> => {
  if (output.statusCode >= 300) {
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAdminAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAdminAccountResponse(data, context);
  const response: GetAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAppsListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAppsListResponse(data, context);
  const response: GetAppsListCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetComplianceDetailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetComplianceDetailResponse(data, context);
  const response: GetComplianceDetailCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetNotificationChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetNotificationChannelResponse(data, context);
  const response: GetNotificationChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPolicyResponse(data, context);
  const response: GetPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetProtectionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetProtectionStatusResponse(data, context);
  const response: GetProtectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetProtocolsListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetProtocolsListResponse(data, context);
  const response: GetProtocolsListCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetViolationDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetViolationDetailsResponse(data, context);
  const response: GetViolationDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAppsListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAppsListsResponse(data, context);
  const response: ListAppsListsCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListComplianceStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListComplianceStatusResponse(data, context);
  const response: ListComplianceStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListMemberAccountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMemberAccountsResponse(data, context);
  const response: ListMemberAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPoliciesResponse(data, context);
  const response: ListPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListProtocolsListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProtocolsListsResponse(data, context);
  const response: ListProtocolsListsCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutAppsListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAppsListResponse(data, context);
  const response: PutAppsListCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutPolicyResponse(data, context);
  const response: PutPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutProtocolsListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutProtocolsListResponse(data, context);
  const response: PutProtocolsListCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
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
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
    ...(input.AppName !== undefined && input.AppName !== null && { AppName: input.AppName }),
    ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
  };
};

const serializeAws_json1_1AppsList = (input: App[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1App(entry, context);
    });
};

const serializeAws_json1_1AppsListData = (input: AppsListData, context: __SerdeContext): any => {
  return {
    ...(input.AppsList !== undefined &&
      input.AppsList !== null && { AppsList: serializeAws_json1_1AppsList(input.AppsList, context) }),
    ...(input.CreateTime !== undefined &&
      input.CreateTime !== null && { CreateTime: Math.round(input.CreateTime.getTime() / 1000) }),
    ...(input.LastUpdateTime !== undefined &&
      input.LastUpdateTime !== null && { LastUpdateTime: Math.round(input.LastUpdateTime.getTime() / 1000) }),
    ...(input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId }),
    ...(input.ListName !== undefined && input.ListName !== null && { ListName: input.ListName }),
    ...(input.ListUpdateToken !== undefined &&
      input.ListUpdateToken !== null && { ListUpdateToken: input.ListUpdateToken }),
    ...(input.PreviousAppsList !== undefined &&
      input.PreviousAppsList !== null && {
        PreviousAppsList: serializeAws_json1_1PreviousAppsList(input.PreviousAppsList, context),
      }),
  };
};

const serializeAws_json1_1AssociateAdminAccountRequest = (
  input: AssociateAdminAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdminAccount !== undefined && input.AdminAccount !== null && { AdminAccount: input.AdminAccount }),
  };
};

const serializeAws_json1_1CustomerPolicyScopeIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CustomerPolicyScopeMap = (
  input: { [key: string]: string[] },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: any }, [key, value]: [CustomerPolicyScopeIdType | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: serializeAws_json1_1CustomerPolicyScopeIdList(value, context),
      };
    },
    {}
  );
};

const serializeAws_json1_1DeleteAppsListRequest = (input: DeleteAppsListRequest, context: __SerdeContext): any => {
  return {
    ...(input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId }),
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
    ...(input.DeleteAllPolicyResources !== undefined &&
      input.DeleteAllPolicyResources !== null && { DeleteAllPolicyResources: input.DeleteAllPolicyResources }),
    ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
  };
};

const serializeAws_json1_1DeleteProtocolsListRequest = (
  input: DeleteProtocolsListRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId }),
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
    ...(input.DefaultList !== undefined && input.DefaultList !== null && { DefaultList: input.DefaultList }),
    ...(input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId }),
  };
};

const serializeAws_json1_1GetComplianceDetailRequest = (
  input: GetComplianceDetailRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MemberAccount !== undefined && input.MemberAccount !== null && { MemberAccount: input.MemberAccount }),
    ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
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
    ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
  };
};

const serializeAws_json1_1GetProtectionStatusRequest = (
  input: GetProtectionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.MemberAccountId !== undefined &&
      input.MemberAccountId !== null && { MemberAccountId: input.MemberAccountId }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1GetProtocolsListRequest = (input: GetProtocolsListRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultList !== undefined && input.DefaultList !== null && { DefaultList: input.DefaultList }),
    ...(input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId }),
  };
};

const serializeAws_json1_1GetViolationDetailsRequest = (
  input: GetViolationDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MemberAccount !== undefined && input.MemberAccount !== null && { MemberAccount: input.MemberAccount }),
    ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1ListAppsListsRequest = (input: ListAppsListsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultLists !== undefined && input.DefaultLists !== null && { DefaultLists: input.DefaultLists }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListComplianceStatusRequest = (
  input: ListComplianceStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
  };
};

const serializeAws_json1_1ListMemberAccountsRequest = (
  input: ListMemberAccountsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListPoliciesRequest = (input: ListPoliciesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListProtocolsListsRequest = (
  input: ListProtocolsListsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultLists !== undefined && input.DefaultLists !== null && { DefaultLists: input.DefaultLists }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1Policy = (input: Policy, context: __SerdeContext): any => {
  return {
    ...(input.DeleteUnusedFMManagedResources !== undefined &&
      input.DeleteUnusedFMManagedResources !== null && {
        DeleteUnusedFMManagedResources: input.DeleteUnusedFMManagedResources,
      }),
    ...(input.ExcludeMap !== undefined &&
      input.ExcludeMap !== null && {
        ExcludeMap: serializeAws_json1_1CustomerPolicyScopeMap(input.ExcludeMap, context),
      }),
    ...(input.ExcludeResourceTags !== undefined &&
      input.ExcludeResourceTags !== null && { ExcludeResourceTags: input.ExcludeResourceTags }),
    ...(input.IncludeMap !== undefined &&
      input.IncludeMap !== null && {
        IncludeMap: serializeAws_json1_1CustomerPolicyScopeMap(input.IncludeMap, context),
      }),
    ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
    ...(input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }),
    ...(input.PolicyUpdateToken !== undefined &&
      input.PolicyUpdateToken !== null && { PolicyUpdateToken: input.PolicyUpdateToken }),
    ...(input.RemediationEnabled !== undefined &&
      input.RemediationEnabled !== null && { RemediationEnabled: input.RemediationEnabled }),
    ...(input.ResourceTags !== undefined &&
      input.ResourceTags !== null && { ResourceTags: serializeAws_json1_1ResourceTags(input.ResourceTags, context) }),
    ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    ...(input.ResourceTypeList !== undefined &&
      input.ResourceTypeList !== null && {
        ResourceTypeList: serializeAws_json1_1ResourceTypeList(input.ResourceTypeList, context),
      }),
    ...(input.SecurityServicePolicyData !== undefined &&
      input.SecurityServicePolicyData !== null && {
        SecurityServicePolicyData: serializeAws_json1_1SecurityServicePolicyData(
          input.SecurityServicePolicyData,
          context
        ),
      }),
  };
};

const serializeAws_json1_1PreviousAppsList = (input: { [key: string]: App[] }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1AppsList(value, context),
    };
  }, {});
};

const serializeAws_json1_1PreviousProtocolsList = (
  input: { [key: string]: string[] },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1ProtocolsList(value, context),
    };
  }, {});
};

const serializeAws_json1_1ProtocolsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ProtocolsListData = (input: ProtocolsListData, context: __SerdeContext): any => {
  return {
    ...(input.CreateTime !== undefined &&
      input.CreateTime !== null && { CreateTime: Math.round(input.CreateTime.getTime() / 1000) }),
    ...(input.LastUpdateTime !== undefined &&
      input.LastUpdateTime !== null && { LastUpdateTime: Math.round(input.LastUpdateTime.getTime() / 1000) }),
    ...(input.ListId !== undefined && input.ListId !== null && { ListId: input.ListId }),
    ...(input.ListName !== undefined && input.ListName !== null && { ListName: input.ListName }),
    ...(input.ListUpdateToken !== undefined &&
      input.ListUpdateToken !== null && { ListUpdateToken: input.ListUpdateToken }),
    ...(input.PreviousProtocolsList !== undefined &&
      input.PreviousProtocolsList !== null && {
        PreviousProtocolsList: serializeAws_json1_1PreviousProtocolsList(input.PreviousProtocolsList, context),
      }),
    ...(input.ProtocolsList !== undefined &&
      input.ProtocolsList !== null && {
        ProtocolsList: serializeAws_json1_1ProtocolsList(input.ProtocolsList, context),
      }),
  };
};

const serializeAws_json1_1PutAppsListRequest = (input: PutAppsListRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppsList !== undefined &&
      input.AppsList !== null && { AppsList: serializeAws_json1_1AppsListData(input.AppsList, context) }),
    ...(input.TagList !== undefined &&
      input.TagList !== null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
  };
};

const serializeAws_json1_1PutNotificationChannelRequest = (
  input: PutNotificationChannelRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SnsRoleName !== undefined && input.SnsRoleName !== null && { SnsRoleName: input.SnsRoleName }),
    ...(input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn }),
  };
};

const serializeAws_json1_1PutPolicyRequest = (input: PutPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Policy !== undefined &&
      input.Policy !== null && { Policy: serializeAws_json1_1Policy(input.Policy, context) }),
    ...(input.TagList !== undefined &&
      input.TagList !== null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
  };
};

const serializeAws_json1_1PutProtocolsListRequest = (input: PutProtocolsListRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProtocolsList !== undefined &&
      input.ProtocolsList !== null && {
        ProtocolsList: serializeAws_json1_1ProtocolsListData(input.ProtocolsList, context),
      }),
    ...(input.TagList !== undefined &&
      input.TagList !== null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
  };
};

const serializeAws_json1_1ResourceTag = (input: ResourceTag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1ResourceTags = (input: ResourceTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ResourceTag(entry, context);
    });
};

const serializeAws_json1_1ResourceTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SecurityServicePolicyData = (
  input: SecurityServicePolicyData,
  context: __SerdeContext
): any => {
  return {
    ...(input.ManagedServiceData !== undefined &&
      input.ManagedServiceData !== null && { ManagedServiceData: input.ManagedServiceData }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.TagList !== undefined &&
      input.TagList !== null && { TagList: serializeAws_json1_1TagList(input.TagList, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const deserializeAws_json1_1ActionTarget = (output: any, context: __SerdeContext): ActionTarget => {
  return {
    Description: __expectString(output.Description),
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

const deserializeAws_json1_1App = (output: any, context: __SerdeContext): App => {
  return {
    AppName: __expectString(output.AppName),
    Port: __expectLong(output.Port),
    Protocol: __expectString(output.Protocol),
  } as any;
};

const deserializeAws_json1_1AppsList = (output: any, context: __SerdeContext): App[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1App(entry, context);
    });
};

const deserializeAws_json1_1AppsListData = (output: any, context: __SerdeContext): AppsListData => {
  return {
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
    ListId: __expectString(output.ListId),
    ListName: __expectString(output.ListName),
    ListUpdateToken: __expectString(output.ListUpdateToken),
    PreviousAppsList:
      output.PreviousAppsList !== undefined && output.PreviousAppsList !== null
        ? deserializeAws_json1_1PreviousAppsList(output.PreviousAppsList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AppsListDataSummary = (output: any, context: __SerdeContext): AppsListDataSummary => {
  return {
    AppsList:
      output.AppsList !== undefined && output.AppsList !== null
        ? deserializeAws_json1_1AppsList(output.AppsList, context)
        : undefined,
    ListArn: __expectString(output.ListArn),
    ListId: __expectString(output.ListId),
    ListName: __expectString(output.ListName),
  } as any;
};

const deserializeAws_json1_1AppsListsData = (output: any, context: __SerdeContext): AppsListDataSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AppsListDataSummary(entry, context);
    });
};

const deserializeAws_json1_1AwsEc2InstanceViolation = (
  output: any,
  context: __SerdeContext
): AwsEc2InstanceViolation => {
  return {
    AwsEc2NetworkInterfaceViolations:
      output.AwsEc2NetworkInterfaceViolations !== undefined && output.AwsEc2NetworkInterfaceViolations !== null
        ? deserializeAws_json1_1AwsEc2NetworkInterfaceViolations(output.AwsEc2NetworkInterfaceViolations, context)
        : undefined,
    ViolationTarget: __expectString(output.ViolationTarget),
  } as any;
};

const deserializeAws_json1_1AwsEc2NetworkInterfaceViolation = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceViolation => {
  return {
    ViolatingSecurityGroups:
      output.ViolatingSecurityGroups !== undefined && output.ViolatingSecurityGroups !== null
        ? deserializeAws_json1_1ResourceIdList(output.ViolatingSecurityGroups, context)
        : undefined,
    ViolationTarget: __expectString(output.ViolationTarget),
  } as any;
};

const deserializeAws_json1_1AwsEc2NetworkInterfaceViolations = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceViolation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AwsEc2NetworkInterfaceViolation(entry, context);
    });
};

const deserializeAws_json1_1AwsVPCSecurityGroupViolation = (
  output: any,
  context: __SerdeContext
): AwsVPCSecurityGroupViolation => {
  return {
    PartialMatches:
      output.PartialMatches !== undefined && output.PartialMatches !== null
        ? deserializeAws_json1_1PartialMatches(output.PartialMatches, context)
        : undefined,
    PossibleSecurityGroupRemediationActions:
      output.PossibleSecurityGroupRemediationActions !== undefined &&
      output.PossibleSecurityGroupRemediationActions !== null
        ? deserializeAws_json1_1SecurityGroupRemediationActions(output.PossibleSecurityGroupRemediationActions, context)
        : undefined,
    ViolationTarget: __expectString(output.ViolationTarget),
    ViolationTargetDescription: __expectString(output.ViolationTargetDescription),
  } as any;
};

const deserializeAws_json1_1ComplianceViolator = (output: any, context: __SerdeContext): ComplianceViolator => {
  return {
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    ViolationReason: __expectString(output.ViolationReason),
  } as any;
};

const deserializeAws_json1_1ComplianceViolators = (output: any, context: __SerdeContext): ComplianceViolator[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ComplianceViolator(entry, context);
    });
};

const deserializeAws_json1_1CustomerPolicyScopeIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1CustomerPolicyScopeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string[] } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string[] }, [key, value]: [CustomerPolicyScopeIdType | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_json1_1CustomerPolicyScopeIdList(value, context),
      };
    },
    {}
  );
};

const deserializeAws_json1_1DnsDuplicateRuleGroupViolation = (
  output: any,
  context: __SerdeContext
): DnsDuplicateRuleGroupViolation => {
  return {
    ViolationTarget: __expectString(output.ViolationTarget),
    ViolationTargetDescription: __expectString(output.ViolationTargetDescription),
  } as any;
};

const deserializeAws_json1_1DnsRuleGroupLimitExceededViolation = (
  output: any,
  context: __SerdeContext
): DnsRuleGroupLimitExceededViolation => {
  return {
    NumberOfRuleGroupsAlreadyAssociated: __expectInt32(output.NumberOfRuleGroupsAlreadyAssociated),
    ViolationTarget: __expectString(output.ViolationTarget),
    ViolationTargetDescription: __expectString(output.ViolationTargetDescription),
  } as any;
};

const deserializeAws_json1_1DnsRuleGroupPriorities = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
};

const deserializeAws_json1_1DnsRuleGroupPriorityConflictViolation = (
  output: any,
  context: __SerdeContext
): DnsRuleGroupPriorityConflictViolation => {
  return {
    ConflictingPolicyId: __expectString(output.ConflictingPolicyId),
    ConflictingPriority: __expectInt32(output.ConflictingPriority),
    UnavailablePriorities:
      output.UnavailablePriorities !== undefined && output.UnavailablePriorities !== null
        ? deserializeAws_json1_1DnsRuleGroupPriorities(output.UnavailablePriorities, context)
        : undefined,
    ViolationTarget: __expectString(output.ViolationTarget),
    ViolationTargetDescription: __expectString(output.ViolationTargetDescription),
  } as any;
};

const deserializeAws_json1_1EC2AssociateRouteTableAction = (
  output: any,
  context: __SerdeContext
): EC2AssociateRouteTableAction => {
  return {
    Description: __expectString(output.Description),
    GatewayId:
      output.GatewayId !== undefined && output.GatewayId !== null
        ? deserializeAws_json1_1ActionTarget(output.GatewayId, context)
        : undefined,
    RouteTableId:
      output.RouteTableId !== undefined && output.RouteTableId !== null
        ? deserializeAws_json1_1ActionTarget(output.RouteTableId, context)
        : undefined,
    SubnetId:
      output.SubnetId !== undefined && output.SubnetId !== null
        ? deserializeAws_json1_1ActionTarget(output.SubnetId, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EC2CopyRouteTableAction = (
  output: any,
  context: __SerdeContext
): EC2CopyRouteTableAction => {
  return {
    Description: __expectString(output.Description),
    RouteTableId:
      output.RouteTableId !== undefined && output.RouteTableId !== null
        ? deserializeAws_json1_1ActionTarget(output.RouteTableId, context)
        : undefined,
    VpcId:
      output.VpcId !== undefined && output.VpcId !== null
        ? deserializeAws_json1_1ActionTarget(output.VpcId, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EC2CreateRouteAction = (output: any, context: __SerdeContext): EC2CreateRouteAction => {
  return {
    Description: __expectString(output.Description),
    DestinationCidrBlock: __expectString(output.DestinationCidrBlock),
    DestinationIpv6CidrBlock: __expectString(output.DestinationIpv6CidrBlock),
    DestinationPrefixListId: __expectString(output.DestinationPrefixListId),
    GatewayId:
      output.GatewayId !== undefined && output.GatewayId !== null
        ? deserializeAws_json1_1ActionTarget(output.GatewayId, context)
        : undefined,
    RouteTableId:
      output.RouteTableId !== undefined && output.RouteTableId !== null
        ? deserializeAws_json1_1ActionTarget(output.RouteTableId, context)
        : undefined,
    VpcEndpointId:
      output.VpcEndpointId !== undefined && output.VpcEndpointId !== null
        ? deserializeAws_json1_1ActionTarget(output.VpcEndpointId, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EC2CreateRouteTableAction = (
  output: any,
  context: __SerdeContext
): EC2CreateRouteTableAction => {
  return {
    Description: __expectString(output.Description),
    VpcId:
      output.VpcId !== undefined && output.VpcId !== null
        ? deserializeAws_json1_1ActionTarget(output.VpcId, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EC2DeleteRouteAction = (output: any, context: __SerdeContext): EC2DeleteRouteAction => {
  return {
    Description: __expectString(output.Description),
    DestinationCidrBlock: __expectString(output.DestinationCidrBlock),
    DestinationIpv6CidrBlock: __expectString(output.DestinationIpv6CidrBlock),
    DestinationPrefixListId: __expectString(output.DestinationPrefixListId),
    RouteTableId:
      output.RouteTableId !== undefined && output.RouteTableId !== null
        ? deserializeAws_json1_1ActionTarget(output.RouteTableId, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EC2ReplaceRouteAction = (output: any, context: __SerdeContext): EC2ReplaceRouteAction => {
  return {
    Description: __expectString(output.Description),
    DestinationCidrBlock: __expectString(output.DestinationCidrBlock),
    DestinationIpv6CidrBlock: __expectString(output.DestinationIpv6CidrBlock),
    DestinationPrefixListId: __expectString(output.DestinationPrefixListId),
    GatewayId:
      output.GatewayId !== undefined && output.GatewayId !== null
        ? deserializeAws_json1_1ActionTarget(output.GatewayId, context)
        : undefined,
    RouteTableId:
      output.RouteTableId !== undefined && output.RouteTableId !== null
        ? deserializeAws_json1_1ActionTarget(output.RouteTableId, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EC2ReplaceRouteTableAssociationAction = (
  output: any,
  context: __SerdeContext
): EC2ReplaceRouteTableAssociationAction => {
  return {
    AssociationId:
      output.AssociationId !== undefined && output.AssociationId !== null
        ? deserializeAws_json1_1ActionTarget(output.AssociationId, context)
        : undefined,
    Description: __expectString(output.Description),
    RouteTableId:
      output.RouteTableId !== undefined && output.RouteTableId !== null
        ? deserializeAws_json1_1ActionTarget(output.RouteTableId, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  return {
    ComplianceStatus: __expectString(output.ComplianceStatus),
    EvaluationLimitExceeded: __expectBoolean(output.EvaluationLimitExceeded),
    ViolatorCount: __expectLong(output.ViolatorCount),
  } as any;
};

const deserializeAws_json1_1EvaluationResults = (output: any, context: __SerdeContext): EvaluationResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EvaluationResult(entry, context);
    });
};

const deserializeAws_json1_1ExpectedRoute = (output: any, context: __SerdeContext): ExpectedRoute => {
  return {
    AllowedTargets:
      output.AllowedTargets !== undefined && output.AllowedTargets !== null
        ? deserializeAws_json1_1LengthBoundedStringList(output.AllowedTargets, context)
        : undefined,
    ContributingSubnets:
      output.ContributingSubnets !== undefined && output.ContributingSubnets !== null
        ? deserializeAws_json1_1ResourceIdList(output.ContributingSubnets, context)
        : undefined,
    IpV4Cidr: __expectString(output.IpV4Cidr),
    IpV6Cidr: __expectString(output.IpV6Cidr),
    PrefixListId: __expectString(output.PrefixListId),
    RouteTableId: __expectString(output.RouteTableId),
  } as any;
};

const deserializeAws_json1_1ExpectedRoutes = (output: any, context: __SerdeContext): ExpectedRoute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExpectedRoute(entry, context);
    });
};

const deserializeAws_json1_1GetAdminAccountResponse = (
  output: any,
  context: __SerdeContext
): GetAdminAccountResponse => {
  return {
    AdminAccount: __expectString(output.AdminAccount),
    RoleStatus: __expectString(output.RoleStatus),
  } as any;
};

const deserializeAws_json1_1GetAppsListResponse = (output: any, context: __SerdeContext): GetAppsListResponse => {
  return {
    AppsList:
      output.AppsList !== undefined && output.AppsList !== null
        ? deserializeAws_json1_1AppsListData(output.AppsList, context)
        : undefined,
    AppsListArn: __expectString(output.AppsListArn),
  } as any;
};

const deserializeAws_json1_1GetComplianceDetailResponse = (
  output: any,
  context: __SerdeContext
): GetComplianceDetailResponse => {
  return {
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
    SnsRoleName: __expectString(output.SnsRoleName),
    SnsTopicArn: __expectString(output.SnsTopicArn),
  } as any;
};

const deserializeAws_json1_1GetPolicyResponse = (output: any, context: __SerdeContext): GetPolicyResponse => {
  return {
    Policy:
      output.Policy !== undefined && output.Policy !== null
        ? deserializeAws_json1_1Policy(output.Policy, context)
        : undefined,
    PolicyArn: __expectString(output.PolicyArn),
  } as any;
};

const deserializeAws_json1_1GetProtectionStatusResponse = (
  output: any,
  context: __SerdeContext
): GetProtectionStatusResponse => {
  return {
    AdminAccountId: __expectString(output.AdminAccountId),
    Data: __expectString(output.Data),
    NextToken: __expectString(output.NextToken),
    ServiceType: __expectString(output.ServiceType),
  } as any;
};

const deserializeAws_json1_1GetProtocolsListResponse = (
  output: any,
  context: __SerdeContext
): GetProtocolsListResponse => {
  return {
    ProtocolsList:
      output.ProtocolsList !== undefined && output.ProtocolsList !== null
        ? deserializeAws_json1_1ProtocolsListData(output.ProtocolsList, context)
        : undefined,
    ProtocolsListArn: __expectString(output.ProtocolsListArn),
  } as any;
};

const deserializeAws_json1_1GetViolationDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetViolationDetailsResponse => {
  return {
    ViolationDetail:
      output.ViolationDetail !== undefined && output.ViolationDetail !== null
        ? deserializeAws_json1_1ViolationDetail(output.ViolationDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InternalErrorException = (output: any, context: __SerdeContext): InternalErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidTypeException = (output: any, context: __SerdeContext): InvalidTypeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1IssueInfoMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [DependentServiceName | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: __expectString(value) as any,
      };
    },
    {}
  );
};

const deserializeAws_json1_1LengthBoundedStringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListAppsListsResponse = (output: any, context: __SerdeContext): ListAppsListsResponse => {
  return {
    AppsLists:
      output.AppsLists !== undefined && output.AppsLists !== null
        ? deserializeAws_json1_1AppsListsData(output.AppsLists, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListComplianceStatusResponse = (
  output: any,
  context: __SerdeContext
): ListComplianceStatusResponse => {
  return {
    NextToken: __expectString(output.NextToken),
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
    MemberAccounts:
      output.MemberAccounts !== undefined && output.MemberAccounts !== null
        ? deserializeAws_json1_1MemberAccounts(output.MemberAccounts, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListPoliciesResponse = (output: any, context: __SerdeContext): ListPoliciesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
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
    NextToken: __expectString(output.NextToken),
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
    TagList:
      output.TagList !== undefined && output.TagList !== null
        ? deserializeAws_json1_1TagList(output.TagList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MemberAccounts = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1NetworkFirewallActionList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1NetworkFirewallBlackHoleRouteDetectedViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallBlackHoleRouteDetectedViolation => {
  return {
    RouteTableId: __expectString(output.RouteTableId),
    ViolatingRoutes:
      output.ViolatingRoutes !== undefined && output.ViolatingRoutes !== null
        ? deserializeAws_json1_1Routes(output.ViolatingRoutes, context)
        : undefined,
    ViolationTarget: __expectString(output.ViolationTarget),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1NetworkFirewallInternetTrafficNotInspectedViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallInternetTrafficNotInspectedViolation => {
  return {
    ActualFirewallSubnetRoutes:
      output.ActualFirewallSubnetRoutes !== undefined && output.ActualFirewallSubnetRoutes !== null
        ? deserializeAws_json1_1Routes(output.ActualFirewallSubnetRoutes, context)
        : undefined,
    ActualInternetGatewayRoutes:
      output.ActualInternetGatewayRoutes !== undefined && output.ActualInternetGatewayRoutes !== null
        ? deserializeAws_json1_1Routes(output.ActualInternetGatewayRoutes, context)
        : undefined,
    CurrentFirewallSubnetRouteTable: __expectString(output.CurrentFirewallSubnetRouteTable),
    CurrentInternetGatewayRouteTable: __expectString(output.CurrentInternetGatewayRouteTable),
    ExpectedFirewallEndpoint: __expectString(output.ExpectedFirewallEndpoint),
    ExpectedFirewallSubnetRoutes:
      output.ExpectedFirewallSubnetRoutes !== undefined && output.ExpectedFirewallSubnetRoutes !== null
        ? deserializeAws_json1_1ExpectedRoutes(output.ExpectedFirewallSubnetRoutes, context)
        : undefined,
    ExpectedInternetGatewayRoutes:
      output.ExpectedInternetGatewayRoutes !== undefined && output.ExpectedInternetGatewayRoutes !== null
        ? deserializeAws_json1_1ExpectedRoutes(output.ExpectedInternetGatewayRoutes, context)
        : undefined,
    FirewallSubnetId: __expectString(output.FirewallSubnetId),
    InternetGatewayId: __expectString(output.InternetGatewayId),
    IsRouteTableUsedInDifferentAZ: __expectBoolean(output.IsRouteTableUsedInDifferentAZ),
    RouteTableId: __expectString(output.RouteTableId),
    SubnetAvailabilityZone: __expectString(output.SubnetAvailabilityZone),
    SubnetId: __expectString(output.SubnetId),
    ViolatingRoutes:
      output.ViolatingRoutes !== undefined && output.ViolatingRoutes !== null
        ? deserializeAws_json1_1Routes(output.ViolatingRoutes, context)
        : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1NetworkFirewallInvalidRouteConfigurationViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallInvalidRouteConfigurationViolation => {
  return {
    ActualFirewallEndpoint: __expectString(output.ActualFirewallEndpoint),
    ActualFirewallSubnetId: __expectString(output.ActualFirewallSubnetId),
    ActualFirewallSubnetRoutes:
      output.ActualFirewallSubnetRoutes !== undefined && output.ActualFirewallSubnetRoutes !== null
        ? deserializeAws_json1_1Routes(output.ActualFirewallSubnetRoutes, context)
        : undefined,
    ActualInternetGatewayRoutes:
      output.ActualInternetGatewayRoutes !== undefined && output.ActualInternetGatewayRoutes !== null
        ? deserializeAws_json1_1Routes(output.ActualInternetGatewayRoutes, context)
        : undefined,
    AffectedSubnets:
      output.AffectedSubnets !== undefined && output.AffectedSubnets !== null
        ? deserializeAws_json1_1ResourceIdList(output.AffectedSubnets, context)
        : undefined,
    CurrentFirewallSubnetRouteTable: __expectString(output.CurrentFirewallSubnetRouteTable),
    CurrentInternetGatewayRouteTable: __expectString(output.CurrentInternetGatewayRouteTable),
    ExpectedFirewallEndpoint: __expectString(output.ExpectedFirewallEndpoint),
    ExpectedFirewallSubnetId: __expectString(output.ExpectedFirewallSubnetId),
    ExpectedFirewallSubnetRoutes:
      output.ExpectedFirewallSubnetRoutes !== undefined && output.ExpectedFirewallSubnetRoutes !== null
        ? deserializeAws_json1_1ExpectedRoutes(output.ExpectedFirewallSubnetRoutes, context)
        : undefined,
    ExpectedInternetGatewayRoutes:
      output.ExpectedInternetGatewayRoutes !== undefined && output.ExpectedInternetGatewayRoutes !== null
        ? deserializeAws_json1_1ExpectedRoutes(output.ExpectedInternetGatewayRoutes, context)
        : undefined,
    InternetGatewayId: __expectString(output.InternetGatewayId),
    IsRouteTableUsedInDifferentAZ: __expectBoolean(output.IsRouteTableUsedInDifferentAZ),
    RouteTableId: __expectString(output.RouteTableId),
    ViolatingRoute:
      output.ViolatingRoute !== undefined && output.ViolatingRoute !== null
        ? deserializeAws_json1_1Route(output.ViolatingRoute, context)
        : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1NetworkFirewallMissingExpectedRoutesViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallMissingExpectedRoutesViolation => {
  return {
    ExpectedRoutes:
      output.ExpectedRoutes !== undefined && output.ExpectedRoutes !== null
        ? deserializeAws_json1_1ExpectedRoutes(output.ExpectedRoutes, context)
        : undefined,
    ViolationTarget: __expectString(output.ViolationTarget),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1NetworkFirewallMissingExpectedRTViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallMissingExpectedRTViolation => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CurrentRouteTable: __expectString(output.CurrentRouteTable),
    ExpectedRouteTable: __expectString(output.ExpectedRouteTable),
    VPC: __expectString(output.VPC),
    ViolationTarget: __expectString(output.ViolationTarget),
  } as any;
};

const deserializeAws_json1_1NetworkFirewallMissingFirewallViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallMissingFirewallViolation => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    TargetViolationReason: __expectString(output.TargetViolationReason),
    VPC: __expectString(output.VPC),
    ViolationTarget: __expectString(output.ViolationTarget),
  } as any;
};

const deserializeAws_json1_1NetworkFirewallMissingSubnetViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallMissingSubnetViolation => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    TargetViolationReason: __expectString(output.TargetViolationReason),
    VPC: __expectString(output.VPC),
    ViolationTarget: __expectString(output.ViolationTarget),
  } as any;
};

const deserializeAws_json1_1NetworkFirewallPolicyDescription = (
  output: any,
  context: __SerdeContext
): NetworkFirewallPolicyDescription => {
  return {
    StatefulRuleGroups:
      output.StatefulRuleGroups !== undefined && output.StatefulRuleGroups !== null
        ? deserializeAws_json1_1StatefulRuleGroupList(output.StatefulRuleGroups, context)
        : undefined,
    StatelessCustomActions:
      output.StatelessCustomActions !== undefined && output.StatelessCustomActions !== null
        ? deserializeAws_json1_1NetworkFirewallActionList(output.StatelessCustomActions, context)
        : undefined,
    StatelessDefaultActions:
      output.StatelessDefaultActions !== undefined && output.StatelessDefaultActions !== null
        ? deserializeAws_json1_1NetworkFirewallActionList(output.StatelessDefaultActions, context)
        : undefined,
    StatelessFragmentDefaultActions:
      output.StatelessFragmentDefaultActions !== undefined && output.StatelessFragmentDefaultActions !== null
        ? deserializeAws_json1_1NetworkFirewallActionList(output.StatelessFragmentDefaultActions, context)
        : undefined,
    StatelessRuleGroups:
      output.StatelessRuleGroups !== undefined && output.StatelessRuleGroups !== null
        ? deserializeAws_json1_1StatelessRuleGroupList(output.StatelessRuleGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1NetworkFirewallPolicyModifiedViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallPolicyModifiedViolation => {
  return {
    CurrentPolicyDescription:
      output.CurrentPolicyDescription !== undefined && output.CurrentPolicyDescription !== null
        ? deserializeAws_json1_1NetworkFirewallPolicyDescription(output.CurrentPolicyDescription, context)
        : undefined,
    ExpectedPolicyDescription:
      output.ExpectedPolicyDescription !== undefined && output.ExpectedPolicyDescription !== null
        ? deserializeAws_json1_1NetworkFirewallPolicyDescription(output.ExpectedPolicyDescription, context)
        : undefined,
    ViolationTarget: __expectString(output.ViolationTarget),
  } as any;
};

const deserializeAws_json1_1NetworkFirewallUnexpectedFirewallRoutesViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallUnexpectedFirewallRoutesViolation => {
  return {
    FirewallEndpoint: __expectString(output.FirewallEndpoint),
    FirewallSubnetId: __expectString(output.FirewallSubnetId),
    RouteTableId: __expectString(output.RouteTableId),
    ViolatingRoutes:
      output.ViolatingRoutes !== undefined && output.ViolatingRoutes !== null
        ? deserializeAws_json1_1Routes(output.ViolatingRoutes, context)
        : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1NetworkFirewallUnexpectedGatewayRoutesViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallUnexpectedGatewayRoutesViolation => {
  return {
    GatewayId: __expectString(output.GatewayId),
    RouteTableId: __expectString(output.RouteTableId),
    ViolatingRoutes:
      output.ViolatingRoutes !== undefined && output.ViolatingRoutes !== null
        ? deserializeAws_json1_1Routes(output.ViolatingRoutes, context)
        : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1OrderedRemediationActions = (
  output: any,
  context: __SerdeContext
): RemediationActionWithOrder[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RemediationActionWithOrder(entry, context);
    });
};

const deserializeAws_json1_1PartialMatch = (output: any, context: __SerdeContext): PartialMatch => {
  return {
    Reference: __expectString(output.Reference),
    TargetViolationReasons:
      output.TargetViolationReasons !== undefined && output.TargetViolationReasons !== null
        ? deserializeAws_json1_1TargetViolationReasons(output.TargetViolationReasons, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PartialMatches = (output: any, context: __SerdeContext): PartialMatch[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PartialMatch(entry, context);
    });
};

const deserializeAws_json1_1Policy = (output: any, context: __SerdeContext): Policy => {
  return {
    DeleteUnusedFMManagedResources: __expectBoolean(output.DeleteUnusedFMManagedResources),
    ExcludeMap:
      output.ExcludeMap !== undefined && output.ExcludeMap !== null
        ? deserializeAws_json1_1CustomerPolicyScopeMap(output.ExcludeMap, context)
        : undefined,
    ExcludeResourceTags: __expectBoolean(output.ExcludeResourceTags),
    IncludeMap:
      output.IncludeMap !== undefined && output.IncludeMap !== null
        ? deserializeAws_json1_1CustomerPolicyScopeMap(output.IncludeMap, context)
        : undefined,
    PolicyId: __expectString(output.PolicyId),
    PolicyName: __expectString(output.PolicyName),
    PolicyUpdateToken: __expectString(output.PolicyUpdateToken),
    RemediationEnabled: __expectBoolean(output.RemediationEnabled),
    ResourceTags:
      output.ResourceTags !== undefined && output.ResourceTags !== null
        ? deserializeAws_json1_1ResourceTags(output.ResourceTags, context)
        : undefined,
    ResourceType: __expectString(output.ResourceType),
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
    EvaluationLimitExceeded: __expectBoolean(output.EvaluationLimitExceeded),
    ExpiredAt:
      output.ExpiredAt !== undefined && output.ExpiredAt !== null
        ? new Date(Math.round(output.ExpiredAt * 1000))
        : undefined,
    IssueInfoMap:
      output.IssueInfoMap !== undefined && output.IssueInfoMap !== null
        ? deserializeAws_json1_1IssueInfoMap(output.IssueInfoMap, context)
        : undefined,
    MemberAccount: __expectString(output.MemberAccount),
    PolicyId: __expectString(output.PolicyId),
    PolicyOwner: __expectString(output.PolicyOwner),
    Violators:
      output.Violators !== undefined && output.Violators !== null
        ? deserializeAws_json1_1ComplianceViolators(output.Violators, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PolicyComplianceStatus = (output: any, context: __SerdeContext): PolicyComplianceStatus => {
  return {
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
    MemberAccount: __expectString(output.MemberAccount),
    PolicyId: __expectString(output.PolicyId),
    PolicyName: __expectString(output.PolicyName),
    PolicyOwner: __expectString(output.PolicyOwner),
  } as any;
};

const deserializeAws_json1_1PolicyComplianceStatusList = (
  output: any,
  context: __SerdeContext
): PolicyComplianceStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PolicyComplianceStatus(entry, context);
    });
};

const deserializeAws_json1_1PolicySummary = (output: any, context: __SerdeContext): PolicySummary => {
  return {
    DeleteUnusedFMManagedResources: __expectBoolean(output.DeleteUnusedFMManagedResources),
    PolicyArn: __expectString(output.PolicyArn),
    PolicyId: __expectString(output.PolicyId),
    PolicyName: __expectString(output.PolicyName),
    RemediationEnabled: __expectBoolean(output.RemediationEnabled),
    ResourceType: __expectString(output.ResourceType),
    SecurityServiceType: __expectString(output.SecurityServiceType),
  } as any;
};

const deserializeAws_json1_1PolicySummaryList = (output: any, context: __SerdeContext): PolicySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PolicySummary(entry, context);
    });
};

const deserializeAws_json1_1PossibleRemediationAction = (
  output: any,
  context: __SerdeContext
): PossibleRemediationAction => {
  return {
    Description: __expectString(output.Description),
    IsDefaultAction: __expectBoolean(output.IsDefaultAction),
    OrderedRemediationActions:
      output.OrderedRemediationActions !== undefined && output.OrderedRemediationActions !== null
        ? deserializeAws_json1_1OrderedRemediationActions(output.OrderedRemediationActions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PossibleRemediationActionList = (
  output: any,
  context: __SerdeContext
): PossibleRemediationAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PossibleRemediationAction(entry, context);
    });
};

const deserializeAws_json1_1PossibleRemediationActions = (
  output: any,
  context: __SerdeContext
): PossibleRemediationActions => {
  return {
    Actions:
      output.Actions !== undefined && output.Actions !== null
        ? deserializeAws_json1_1PossibleRemediationActionList(output.Actions, context)
        : undefined,
    Description: __expectString(output.Description),
  } as any;
};

const deserializeAws_json1_1PreviousAppsList = (output: any, context: __SerdeContext): { [key: string]: App[] } => {
  return Object.entries(output).reduce((acc: { [key: string]: App[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1AppsList(value, context),
    };
  }, {});
};

const deserializeAws_json1_1PreviousProtocolsList = (
  output: any,
  context: __SerdeContext
): { [key: string]: string[] } => {
  return Object.entries(output).reduce((acc: { [key: string]: string[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1ProtocolsList(value, context),
    };
  }, {});
};

const deserializeAws_json1_1ProtocolsList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ProtocolsListData = (output: any, context: __SerdeContext): ProtocolsListData => {
  return {
    CreateTime:
      output.CreateTime !== undefined && output.CreateTime !== null
        ? new Date(Math.round(output.CreateTime * 1000))
        : undefined,
    LastUpdateTime:
      output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
        ? new Date(Math.round(output.LastUpdateTime * 1000))
        : undefined,
    ListId: __expectString(output.ListId),
    ListName: __expectString(output.ListName),
    ListUpdateToken: __expectString(output.ListUpdateToken),
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
    ListArn: __expectString(output.ListArn),
    ListId: __expectString(output.ListId),
    ListName: __expectString(output.ListName),
    ProtocolsList:
      output.ProtocolsList !== undefined && output.ProtocolsList !== null
        ? deserializeAws_json1_1ProtocolsList(output.ProtocolsList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProtocolsListsData = (output: any, context: __SerdeContext): ProtocolsListDataSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ProtocolsListDataSummary(entry, context);
    });
};

const deserializeAws_json1_1PutAppsListResponse = (output: any, context: __SerdeContext): PutAppsListResponse => {
  return {
    AppsList:
      output.AppsList !== undefined && output.AppsList !== null
        ? deserializeAws_json1_1AppsListData(output.AppsList, context)
        : undefined,
    AppsListArn: __expectString(output.AppsListArn),
  } as any;
};

const deserializeAws_json1_1PutPolicyResponse = (output: any, context: __SerdeContext): PutPolicyResponse => {
  return {
    Policy:
      output.Policy !== undefined && output.Policy !== null
        ? deserializeAws_json1_1Policy(output.Policy, context)
        : undefined,
    PolicyArn: __expectString(output.PolicyArn),
  } as any;
};

const deserializeAws_json1_1PutProtocolsListResponse = (
  output: any,
  context: __SerdeContext
): PutProtocolsListResponse => {
  return {
    ProtocolsList:
      output.ProtocolsList !== undefined && output.ProtocolsList !== null
        ? deserializeAws_json1_1ProtocolsListData(output.ProtocolsList, context)
        : undefined,
    ProtocolsListArn: __expectString(output.ProtocolsListArn),
  } as any;
};

const deserializeAws_json1_1RemediationAction = (output: any, context: __SerdeContext): RemediationAction => {
  return {
    Description: __expectString(output.Description),
    EC2AssociateRouteTableAction:
      output.EC2AssociateRouteTableAction !== undefined && output.EC2AssociateRouteTableAction !== null
        ? deserializeAws_json1_1EC2AssociateRouteTableAction(output.EC2AssociateRouteTableAction, context)
        : undefined,
    EC2CopyRouteTableAction:
      output.EC2CopyRouteTableAction !== undefined && output.EC2CopyRouteTableAction !== null
        ? deserializeAws_json1_1EC2CopyRouteTableAction(output.EC2CopyRouteTableAction, context)
        : undefined,
    EC2CreateRouteAction:
      output.EC2CreateRouteAction !== undefined && output.EC2CreateRouteAction !== null
        ? deserializeAws_json1_1EC2CreateRouteAction(output.EC2CreateRouteAction, context)
        : undefined,
    EC2CreateRouteTableAction:
      output.EC2CreateRouteTableAction !== undefined && output.EC2CreateRouteTableAction !== null
        ? deserializeAws_json1_1EC2CreateRouteTableAction(output.EC2CreateRouteTableAction, context)
        : undefined,
    EC2DeleteRouteAction:
      output.EC2DeleteRouteAction !== undefined && output.EC2DeleteRouteAction !== null
        ? deserializeAws_json1_1EC2DeleteRouteAction(output.EC2DeleteRouteAction, context)
        : undefined,
    EC2ReplaceRouteAction:
      output.EC2ReplaceRouteAction !== undefined && output.EC2ReplaceRouteAction !== null
        ? deserializeAws_json1_1EC2ReplaceRouteAction(output.EC2ReplaceRouteAction, context)
        : undefined,
    EC2ReplaceRouteTableAssociationAction:
      output.EC2ReplaceRouteTableAssociationAction !== undefined &&
      output.EC2ReplaceRouteTableAssociationAction !== null
        ? deserializeAws_json1_1EC2ReplaceRouteTableAssociationAction(
            output.EC2ReplaceRouteTableAssociationAction,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1RemediationActionWithOrder = (
  output: any,
  context: __SerdeContext
): RemediationActionWithOrder => {
  return {
    Order: __expectInt32(output.Order),
    RemediationAction:
      output.RemediationAction !== undefined && output.RemediationAction !== null
        ? deserializeAws_json1_1RemediationAction(output.RemediationAction, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceTag = (output: any, context: __SerdeContext): ResourceTag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1ResourceTags = (output: any, context: __SerdeContext): ResourceTag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceTag(entry, context);
    });
};

const deserializeAws_json1_1ResourceTypeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ResourceViolation = (output: any, context: __SerdeContext): ResourceViolation => {
  return {
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
    DnsDuplicateRuleGroupViolation:
      output.DnsDuplicateRuleGroupViolation !== undefined && output.DnsDuplicateRuleGroupViolation !== null
        ? deserializeAws_json1_1DnsDuplicateRuleGroupViolation(output.DnsDuplicateRuleGroupViolation, context)
        : undefined,
    DnsRuleGroupLimitExceededViolation:
      output.DnsRuleGroupLimitExceededViolation !== undefined && output.DnsRuleGroupLimitExceededViolation !== null
        ? deserializeAws_json1_1DnsRuleGroupLimitExceededViolation(output.DnsRuleGroupLimitExceededViolation, context)
        : undefined,
    DnsRuleGroupPriorityConflictViolation:
      output.DnsRuleGroupPriorityConflictViolation !== undefined &&
      output.DnsRuleGroupPriorityConflictViolation !== null
        ? deserializeAws_json1_1DnsRuleGroupPriorityConflictViolation(
            output.DnsRuleGroupPriorityConflictViolation,
            context
          )
        : undefined,
    NetworkFirewallBlackHoleRouteDetectedViolation:
      output.NetworkFirewallBlackHoleRouteDetectedViolation !== undefined &&
      output.NetworkFirewallBlackHoleRouteDetectedViolation !== null
        ? deserializeAws_json1_1NetworkFirewallBlackHoleRouteDetectedViolation(
            output.NetworkFirewallBlackHoleRouteDetectedViolation,
            context
          )
        : undefined,
    NetworkFirewallInternetTrafficNotInspectedViolation:
      output.NetworkFirewallInternetTrafficNotInspectedViolation !== undefined &&
      output.NetworkFirewallInternetTrafficNotInspectedViolation !== null
        ? deserializeAws_json1_1NetworkFirewallInternetTrafficNotInspectedViolation(
            output.NetworkFirewallInternetTrafficNotInspectedViolation,
            context
          )
        : undefined,
    NetworkFirewallInvalidRouteConfigurationViolation:
      output.NetworkFirewallInvalidRouteConfigurationViolation !== undefined &&
      output.NetworkFirewallInvalidRouteConfigurationViolation !== null
        ? deserializeAws_json1_1NetworkFirewallInvalidRouteConfigurationViolation(
            output.NetworkFirewallInvalidRouteConfigurationViolation,
            context
          )
        : undefined,
    NetworkFirewallMissingExpectedRTViolation:
      output.NetworkFirewallMissingExpectedRTViolation !== undefined &&
      output.NetworkFirewallMissingExpectedRTViolation !== null
        ? deserializeAws_json1_1NetworkFirewallMissingExpectedRTViolation(
            output.NetworkFirewallMissingExpectedRTViolation,
            context
          )
        : undefined,
    NetworkFirewallMissingExpectedRoutesViolation:
      output.NetworkFirewallMissingExpectedRoutesViolation !== undefined &&
      output.NetworkFirewallMissingExpectedRoutesViolation !== null
        ? deserializeAws_json1_1NetworkFirewallMissingExpectedRoutesViolation(
            output.NetworkFirewallMissingExpectedRoutesViolation,
            context
          )
        : undefined,
    NetworkFirewallMissingFirewallViolation:
      output.NetworkFirewallMissingFirewallViolation !== undefined &&
      output.NetworkFirewallMissingFirewallViolation !== null
        ? deserializeAws_json1_1NetworkFirewallMissingFirewallViolation(
            output.NetworkFirewallMissingFirewallViolation,
            context
          )
        : undefined,
    NetworkFirewallMissingSubnetViolation:
      output.NetworkFirewallMissingSubnetViolation !== undefined &&
      output.NetworkFirewallMissingSubnetViolation !== null
        ? deserializeAws_json1_1NetworkFirewallMissingSubnetViolation(
            output.NetworkFirewallMissingSubnetViolation,
            context
          )
        : undefined,
    NetworkFirewallPolicyModifiedViolation:
      output.NetworkFirewallPolicyModifiedViolation !== undefined &&
      output.NetworkFirewallPolicyModifiedViolation !== null
        ? deserializeAws_json1_1NetworkFirewallPolicyModifiedViolation(
            output.NetworkFirewallPolicyModifiedViolation,
            context
          )
        : undefined,
    NetworkFirewallUnexpectedFirewallRoutesViolation:
      output.NetworkFirewallUnexpectedFirewallRoutesViolation !== undefined &&
      output.NetworkFirewallUnexpectedFirewallRoutesViolation !== null
        ? deserializeAws_json1_1NetworkFirewallUnexpectedFirewallRoutesViolation(
            output.NetworkFirewallUnexpectedFirewallRoutesViolation,
            context
          )
        : undefined,
    NetworkFirewallUnexpectedGatewayRoutesViolation:
      output.NetworkFirewallUnexpectedGatewayRoutesViolation !== undefined &&
      output.NetworkFirewallUnexpectedGatewayRoutesViolation !== null
        ? deserializeAws_json1_1NetworkFirewallUnexpectedGatewayRoutesViolation(
            output.NetworkFirewallUnexpectedGatewayRoutesViolation,
            context
          )
        : undefined,
    PossibleRemediationActions:
      output.PossibleRemediationActions !== undefined && output.PossibleRemediationActions !== null
        ? deserializeAws_json1_1PossibleRemediationActions(output.PossibleRemediationActions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceViolations = (output: any, context: __SerdeContext): ResourceViolation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourceViolation(entry, context);
    });
};

const deserializeAws_json1_1Route = (output: any, context: __SerdeContext): Route => {
  return {
    Destination: __expectString(output.Destination),
    DestinationType: __expectString(output.DestinationType),
    Target: __expectString(output.Target),
    TargetType: __expectString(output.TargetType),
  } as any;
};

const deserializeAws_json1_1Routes = (output: any, context: __SerdeContext): Route[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Route(entry, context);
    });
};

const deserializeAws_json1_1SecurityGroupRemediationAction = (
  output: any,
  context: __SerdeContext
): SecurityGroupRemediationAction => {
  return {
    Description: __expectString(output.Description),
    IsDefaultAction: __expectBoolean(output.IsDefaultAction),
    RemediationActionType: __expectString(output.RemediationActionType),
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SecurityGroupRemediationAction(entry, context);
    });
};

const deserializeAws_json1_1SecurityGroupRuleDescription = (
  output: any,
  context: __SerdeContext
): SecurityGroupRuleDescription => {
  return {
    FromPort: __expectLong(output.FromPort),
    IPV4Range: __expectString(output.IPV4Range),
    IPV6Range: __expectString(output.IPV6Range),
    PrefixListId: __expectString(output.PrefixListId),
    Protocol: __expectString(output.Protocol),
    ToPort: __expectLong(output.ToPort),
  } as any;
};

const deserializeAws_json1_1SecurityServicePolicyData = (
  output: any,
  context: __SerdeContext
): SecurityServicePolicyData => {
  return {
    ManagedServiceData: __expectString(output.ManagedServiceData),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1StatefulRuleGroup = (output: any, context: __SerdeContext): StatefulRuleGroup => {
  return {
    ResourceId: __expectString(output.ResourceId),
    RuleGroupName: __expectString(output.RuleGroupName),
  } as any;
};

const deserializeAws_json1_1StatefulRuleGroupList = (output: any, context: __SerdeContext): StatefulRuleGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StatefulRuleGroup(entry, context);
    });
};

const deserializeAws_json1_1StatelessRuleGroup = (output: any, context: __SerdeContext): StatelessRuleGroup => {
  return {
    Priority: __expectInt32(output.Priority),
    ResourceId: __expectString(output.ResourceId),
    RuleGroupName: __expectString(output.RuleGroupName),
  } as any;
};

const deserializeAws_json1_1StatelessRuleGroupList = (output: any, context: __SerdeContext): StatelessRuleGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StatelessRuleGroup(entry, context);
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TargetViolationReasons = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1ViolationDetail = (output: any, context: __SerdeContext): ViolationDetail => {
  return {
    MemberAccount: __expectString(output.MemberAccount),
    PolicyId: __expectString(output.PolicyId),
    ResourceDescription: __expectString(output.ResourceDescription),
    ResourceId: __expectString(output.ResourceId),
    ResourceTags:
      output.ResourceTags !== undefined && output.ResourceTags !== null
        ? deserializeAws_json1_1TagList(output.ResourceTags, context)
        : undefined,
    ResourceType: __expectString(output.ResourceType),
    ResourceViolations:
      output.ResourceViolations !== undefined && output.ResourceViolations !== null
        ? deserializeAws_json1_1ResourceViolations(output.ResourceViolations, context)
        : undefined,
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
