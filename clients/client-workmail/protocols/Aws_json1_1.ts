import {
  AssociateDelegateToResourceCommandInput,
  AssociateDelegateToResourceCommandOutput
} from "../commands/AssociateDelegateToResourceCommand";
import {
  AssociateMemberToGroupCommandInput,
  AssociateMemberToGroupCommandOutput
} from "../commands/AssociateMemberToGroupCommand";
import {
  CreateAliasCommandInput,
  CreateAliasCommandOutput
} from "../commands/CreateAliasCommand";
import {
  CreateGroupCommandInput,
  CreateGroupCommandOutput
} from "../commands/CreateGroupCommand";
import {
  CreateResourceCommandInput,
  CreateResourceCommandOutput
} from "../commands/CreateResourceCommand";
import {
  CreateUserCommandInput,
  CreateUserCommandOutput
} from "../commands/CreateUserCommand";
import {
  DeleteAliasCommandInput,
  DeleteAliasCommandOutput
} from "../commands/DeleteAliasCommand";
import {
  DeleteGroupCommandInput,
  DeleteGroupCommandOutput
} from "../commands/DeleteGroupCommand";
import {
  DeleteMailboxPermissionsCommandInput,
  DeleteMailboxPermissionsCommandOutput
} from "../commands/DeleteMailboxPermissionsCommand";
import {
  DeleteResourceCommandInput,
  DeleteResourceCommandOutput
} from "../commands/DeleteResourceCommand";
import {
  DeleteUserCommandInput,
  DeleteUserCommandOutput
} from "../commands/DeleteUserCommand";
import {
  DeregisterFromWorkMailCommandInput,
  DeregisterFromWorkMailCommandOutput
} from "../commands/DeregisterFromWorkMailCommand";
import {
  DescribeGroupCommandInput,
  DescribeGroupCommandOutput
} from "../commands/DescribeGroupCommand";
import {
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput
} from "../commands/DescribeOrganizationCommand";
import {
  DescribeResourceCommandInput,
  DescribeResourceCommandOutput
} from "../commands/DescribeResourceCommand";
import {
  DescribeUserCommandInput,
  DescribeUserCommandOutput
} from "../commands/DescribeUserCommand";
import {
  DisassociateDelegateFromResourceCommandInput,
  DisassociateDelegateFromResourceCommandOutput
} from "../commands/DisassociateDelegateFromResourceCommand";
import {
  DisassociateMemberFromGroupCommandInput,
  DisassociateMemberFromGroupCommandOutput
} from "../commands/DisassociateMemberFromGroupCommand";
import {
  GetMailboxDetailsCommandInput,
  GetMailboxDetailsCommandOutput
} from "../commands/GetMailboxDetailsCommand";
import {
  ListAliasesCommandInput,
  ListAliasesCommandOutput
} from "../commands/ListAliasesCommand";
import {
  ListGroupMembersCommandInput,
  ListGroupMembersCommandOutput
} from "../commands/ListGroupMembersCommand";
import {
  ListGroupsCommandInput,
  ListGroupsCommandOutput
} from "../commands/ListGroupsCommand";
import {
  ListMailboxPermissionsCommandInput,
  ListMailboxPermissionsCommandOutput
} from "../commands/ListMailboxPermissionsCommand";
import {
  ListOrganizationsCommandInput,
  ListOrganizationsCommandOutput
} from "../commands/ListOrganizationsCommand";
import {
  ListResourceDelegatesCommandInput,
  ListResourceDelegatesCommandOutput
} from "../commands/ListResourceDelegatesCommand";
import {
  ListResourcesCommandInput,
  ListResourcesCommandOutput
} from "../commands/ListResourcesCommand";
import {
  ListUsersCommandInput,
  ListUsersCommandOutput
} from "../commands/ListUsersCommand";
import {
  PutMailboxPermissionsCommandInput,
  PutMailboxPermissionsCommandOutput
} from "../commands/PutMailboxPermissionsCommand";
import {
  RegisterToWorkMailCommandInput,
  RegisterToWorkMailCommandOutput
} from "../commands/RegisterToWorkMailCommand";
import {
  ResetPasswordCommandInput,
  ResetPasswordCommandOutput
} from "../commands/ResetPasswordCommand";
import {
  UpdateMailboxQuotaCommandInput,
  UpdateMailboxQuotaCommandOutput
} from "../commands/UpdateMailboxQuotaCommand";
import {
  UpdatePrimaryEmailAddressCommandInput,
  UpdatePrimaryEmailAddressCommandOutput
} from "../commands/UpdatePrimaryEmailAddressCommand";
import {
  UpdateResourceCommandInput,
  UpdateResourceCommandOutput
} from "../commands/UpdateResourceCommand";
import {
  AssociateDelegateToResourceRequest,
  AssociateDelegateToResourceResponse,
  AssociateMemberToGroupRequest,
  AssociateMemberToGroupResponse,
  BookingOptions,
  CreateAliasRequest,
  CreateAliasResponse,
  CreateGroupRequest,
  CreateGroupResponse,
  CreateResourceRequest,
  CreateResourceResponse,
  CreateUserRequest,
  CreateUserResponse,
  Delegate,
  DeleteAliasRequest,
  DeleteAliasResponse,
  DeleteGroupRequest,
  DeleteGroupResponse,
  DeleteMailboxPermissionsRequest,
  DeleteMailboxPermissionsResponse,
  DeleteResourceRequest,
  DeleteResourceResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  DeregisterFromWorkMailRequest,
  DeregisterFromWorkMailResponse,
  DescribeGroupRequest,
  DescribeGroupResponse,
  DescribeOrganizationRequest,
  DescribeOrganizationResponse,
  DescribeResourceRequest,
  DescribeResourceResponse,
  DescribeUserRequest,
  DescribeUserResponse,
  DirectoryServiceAuthenticationFailedException,
  DirectoryUnavailableException,
  DisassociateDelegateFromResourceRequest,
  DisassociateDelegateFromResourceResponse,
  DisassociateMemberFromGroupRequest,
  DisassociateMemberFromGroupResponse,
  EmailAddressInUseException,
  EntityAlreadyRegisteredException,
  EntityNotFoundException,
  EntityStateException,
  GetMailboxDetailsRequest,
  GetMailboxDetailsResponse,
  Group,
  InvalidConfigurationException,
  InvalidParameterException,
  InvalidPasswordException,
  ListAliasesRequest,
  ListAliasesResponse,
  ListGroupMembersRequest,
  ListGroupMembersResponse,
  ListGroupsRequest,
  ListGroupsResponse,
  ListMailboxPermissionsRequest,
  ListMailboxPermissionsResponse,
  ListOrganizationsRequest,
  ListOrganizationsResponse,
  ListResourceDelegatesRequest,
  ListResourceDelegatesResponse,
  ListResourcesRequest,
  ListResourcesResponse,
  ListUsersRequest,
  ListUsersResponse,
  MailDomainNotFoundException,
  MailDomainStateException,
  Member,
  NameAvailabilityException,
  OrganizationNotFoundException,
  OrganizationStateException,
  OrganizationSummary,
  Permission,
  PermissionType,
  PutMailboxPermissionsRequest,
  PutMailboxPermissionsResponse,
  RegisterToWorkMailRequest,
  RegisterToWorkMailResponse,
  ReservedNameException,
  ResetPasswordRequest,
  ResetPasswordResponse,
  Resource,
  UnsupportedOperationException,
  UpdateMailboxQuotaRequest,
  UpdateMailboxQuotaResponse,
  UpdatePrimaryEmailAddressRequest,
  UpdatePrimaryEmailAddressResponse,
  UpdateResourceRequest,
  UpdateResourceResponse,
  User
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

export const serializeAws_json1_1AssociateDelegateToResourceCommand = async (
  input: AssociateDelegateToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.AssociateDelegateToResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateDelegateToResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateMemberToGroupCommand = async (
  input: AssociateMemberToGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.AssociateMemberToGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateMemberToGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.CreateAlias"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.CreateGroup"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateResourceCommand = async (
  input: CreateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.CreateResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.CreateUser"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAliasCommand = async (
  input: DeleteAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.DeleteAlias"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.DeleteGroup"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMailboxPermissionsCommand = async (
  input: DeleteMailboxPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.DeleteMailboxPermissions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteMailboxPermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourceCommand = async (
  input: DeleteResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.DeleteResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.DeleteUser"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterFromWorkMailCommand = async (
  input: DeregisterFromWorkMailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.DeregisterFromWorkMail"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeregisterFromWorkMailRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeGroupCommand = async (
  input: DescribeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.DescribeGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeOrganizationCommand = async (
  input: DescribeOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.DescribeOrganization"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeOrganizationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeResourceCommand = async (
  input: DescribeResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.DescribeResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeUserCommand = async (
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.DescribeUser"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeUserRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateDelegateFromResourceCommand = async (
  input: DisassociateDelegateFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.DisassociateDelegateFromResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateDelegateFromResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateMemberFromGroupCommand = async (
  input: DisassociateMemberFromGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.DisassociateMemberFromGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateMemberFromGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMailboxDetailsCommand = async (
  input: GetMailboxDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.GetMailboxDetails"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetMailboxDetailsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAliasesCommand = async (
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.ListAliases"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGroupMembersCommand = async (
  input: ListGroupMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.ListGroupMembers"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListGroupMembersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.ListGroups"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMailboxPermissionsCommand = async (
  input: ListMailboxPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.ListMailboxPermissions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListMailboxPermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListOrganizationsCommand = async (
  input: ListOrganizationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.ListOrganizations"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListOrganizationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourceDelegatesCommand = async (
  input: ListResourceDelegatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.ListResourceDelegates"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResourceDelegatesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourcesCommand = async (
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.ListResources"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResourcesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.ListUsers"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutMailboxPermissionsCommand = async (
  input: PutMailboxPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.PutMailboxPermissions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutMailboxPermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterToWorkMailCommand = async (
  input: RegisterToWorkMailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.RegisterToWorkMail"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterToWorkMailRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResetPasswordCommand = async (
  input: ResetPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.ResetPassword"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ResetPasswordRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMailboxQuotaCommand = async (
  input: UpdateMailboxQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.UpdateMailboxQuota"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateMailboxQuotaRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePrimaryEmailAddressCommand = async (
  input: UpdatePrimaryEmailAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.UpdatePrimaryEmailAddress"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdatePrimaryEmailAddressRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateResourceCommand = async (
  input: UpdateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "WorkMailService.UpdateResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateDelegateToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDelegateToResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateDelegateToResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateDelegateToResourceResponse(
    data,
    context
  );
  const response: AssociateDelegateToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateDelegateToResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateDelegateToResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDelegateToResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1AssociateMemberToGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberToGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateMemberToGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateMemberToGroupResponse(
    data,
    context
  );
  const response: AssociateMemberToGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateMemberToGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateMemberToGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberToGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1CreateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAliasResponse(data, context);
  const response: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAliasResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EmailAddressInUseException":
    case "com.amazonaws.workmail#EmailAddressInUseException":
      response = {
        ...(await deserializeAws_json1_1EmailAddressInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail#MailDomainNotFoundException":
      response = {
        ...(await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailDomainStateException":
    case "com.amazonaws.workmail#MailDomainStateException":
      response = {
        ...(await deserializeAws_json1_1MailDomainStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateGroupResponse(data, context);
  const response: CreateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NameAvailabilityException":
    case "com.amazonaws.workmail#NameAvailabilityException":
      response = {
        ...(await deserializeAws_json1_1NameAvailabilityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReservedNameException":
    case "com.amazonaws.workmail#ReservedNameException":
      response = {
        ...(await deserializeAws_json1_1ReservedNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1CreateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateResourceResponse(data, context);
  const response: CreateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NameAvailabilityException":
    case "com.amazonaws.workmail#NameAvailabilityException":
      response = {
        ...(await deserializeAws_json1_1NameAvailabilityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReservedNameException":
    case "com.amazonaws.workmail#ReservedNameException":
      response = {
        ...(await deserializeAws_json1_1ReservedNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUserResponse(data, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateUserResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPasswordException":
    case "com.amazonaws.workmail#InvalidPasswordException":
      response = {
        ...(await deserializeAws_json1_1InvalidPasswordExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NameAvailabilityException":
    case "com.amazonaws.workmail#NameAvailabilityException":
      response = {
        ...(await deserializeAws_json1_1NameAvailabilityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReservedNameException":
    case "com.amazonaws.workmail#ReservedNameException":
      response = {
        ...(await deserializeAws_json1_1ReservedNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DeleteAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAliasResponse(data, context);
  const response: DeleteAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAliasResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteGroupResponse(data, context);
  const response: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DeleteMailboxPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMailboxPermissionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteMailboxPermissionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteMailboxPermissionsResponse(
    data,
    context
  );
  const response: DeleteMailboxPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteMailboxPermissionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMailboxPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMailboxPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DeleteResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteResourceResponse(data, context);
  const response: DeleteResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteUserResponse(data, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteUserResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DeregisterFromWorkMailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterFromWorkMailCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeregisterFromWorkMailCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterFromWorkMailResponse(
    data,
    context
  );
  const response: DeregisterFromWorkMailCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterFromWorkMailResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterFromWorkMailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterFromWorkMailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DescribeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeGroupResponse(data, context);
  const response: DescribeGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DescribeOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeOrganizationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeOrganizationResponse(data, context);
  const response: DescribeOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeOrganizationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DescribeResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeResourceResponse(data, context);
  const response: DescribeResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DescribeUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUserResponse(data, context);
  const response: DescribeUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeUserResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DisassociateDelegateFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDelegateFromResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateDelegateFromResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateDelegateFromResourceResponse(
    data,
    context
  );
  const response: DisassociateDelegateFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateDelegateFromResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateDelegateFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDelegateFromResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1DisassociateMemberFromGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberFromGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateMemberFromGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateMemberFromGroupResponse(
    data,
    context
  );
  const response: DisassociateMemberFromGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateMemberFromGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateMemberFromGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberFromGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1GetMailboxDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMailboxDetailsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetMailboxDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMailboxDetailsResponse(data, context);
  const response: GetMailboxDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMailboxDetailsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMailboxDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMailboxDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1ListAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAliasesResponse(data, context);
  const response: ListAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAliasesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1ListGroupMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListGroupMembersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGroupMembersResponse(data, context);
  const response: ListGroupMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListGroupMembersResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGroupMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGroupsResponse(data, context);
  const response: ListGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListGroupsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1ListMailboxPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMailboxPermissionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListMailboxPermissionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMailboxPermissionsResponse(
    data,
    context
  );
  const response: ListMailboxPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMailboxPermissionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMailboxPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMailboxPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1ListOrganizationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListOrganizationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOrganizationsResponse(data, context);
  const response: ListOrganizationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListOrganizationsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListOrganizationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1ListResourceDelegatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDelegatesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListResourceDelegatesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourceDelegatesResponse(data, context);
  const response: ListResourceDelegatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResourceDelegatesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourceDelegatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDelegatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1ListResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourcesResponse(data, context);
  const response: ListResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResourcesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListUsersResponse(data, context);
  const response: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListUsersResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1PutMailboxPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMailboxPermissionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutMailboxPermissionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutMailboxPermissionsResponse(data, context);
  const response: PutMailboxPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutMailboxPermissionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutMailboxPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMailboxPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1RegisterToWorkMailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterToWorkMailCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterToWorkMailCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterToWorkMailResponse(data, context);
  const response: RegisterToWorkMailCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterToWorkMailResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterToWorkMailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterToWorkMailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EmailAddressInUseException":
    case "com.amazonaws.workmail#EmailAddressInUseException":
      response = {
        ...(await deserializeAws_json1_1EmailAddressInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityAlreadyRegisteredException":
    case "com.amazonaws.workmail#EntityAlreadyRegisteredException":
      response = {
        ...(await deserializeAws_json1_1EntityAlreadyRegisteredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail#MailDomainNotFoundException":
      response = {
        ...(await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailDomainStateException":
    case "com.amazonaws.workmail#MailDomainStateException":
      response = {
        ...(await deserializeAws_json1_1MailDomainStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1ResetPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetPasswordCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ResetPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResetPasswordResponse(data, context);
  const response: ResetPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ResetPasswordResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResetPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetPasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPasswordException":
    case "com.amazonaws.workmail#InvalidPasswordException":
      response = {
        ...(await deserializeAws_json1_1InvalidPasswordExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1UpdateMailboxQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMailboxQuotaCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateMailboxQuotaCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMailboxQuotaResponse(data, context);
  const response: UpdateMailboxQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateMailboxQuotaResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMailboxQuotaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMailboxQuotaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1UpdatePrimaryEmailAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrimaryEmailAddressCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdatePrimaryEmailAddressCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePrimaryEmailAddressResponse(
    data,
    context
  );
  const response: UpdatePrimaryEmailAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdatePrimaryEmailAddressResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePrimaryEmailAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrimaryEmailAddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EmailAddressInUseException":
    case "com.amazonaws.workmail#EmailAddressInUseException":
      response = {
        ...(await deserializeAws_json1_1EmailAddressInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail#MailDomainNotFoundException":
      response = {
        ...(await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailDomainStateException":
    case "com.amazonaws.workmail#MailDomainStateException":
      response = {
        ...(await deserializeAws_json1_1MailDomainStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

export const deserializeAws_json1_1UpdateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateResourceResponse(data, context);
  const response: UpdateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EmailAddressInUseException":
    case "com.amazonaws.workmail#EmailAddressInUseException":
      response = {
        ...(await deserializeAws_json1_1EmailAddressInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationException":
    case "com.amazonaws.workmail#InvalidConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail#MailDomainNotFoundException":
      response = {
        ...(await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailDomainStateException":
    case "com.amazonaws.workmail#MailDomainStateException":
      response = {
        ...(await deserializeAws_json1_1MailDomainStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NameAvailabilityException":
    case "com.amazonaws.workmail#NameAvailabilityException":
      response = {
        ...(await deserializeAws_json1_1NameAvailabilityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

const deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryServiceAuthenticationFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DirectoryServiceAuthenticationFailedException(
    body,
    context
  );
  const contents: DirectoryServiceAuthenticationFailedException = {
    name: "DirectoryServiceAuthenticationFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DirectoryUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DirectoryUnavailableException(
    body,
    context
  );
  const contents: DirectoryUnavailableException = {
    name: "DirectoryUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1EmailAddressInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EmailAddressInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EmailAddressInUseException(
    body,
    context
  );
  const contents: EmailAddressInUseException = {
    name: "EmailAddressInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1EntityAlreadyRegisteredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntityAlreadyRegisteredException(
    body,
    context
  );
  const contents: EntityAlreadyRegisteredException = {
    name: "EntityAlreadyRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1EntityNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntityNotFoundException(
    body,
    context
  );
  const contents: EntityNotFoundException = {
    name: "EntityNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1EntityStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntityStateException(
    body,
    context
  );
  const contents: EntityStateException = {
    name: "EntityStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidConfigurationException(
    body,
    context
  );
  const contents: InvalidConfigurationException = {
    name: "InvalidConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    body,
    context
  );
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidPasswordExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPasswordException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPasswordException(
    body,
    context
  );
  const contents: InvalidPasswordException = {
    name: "InvalidPasswordException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1MailDomainNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MailDomainNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MailDomainNotFoundException(
    body,
    context
  );
  const contents: MailDomainNotFoundException = {
    name: "MailDomainNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1MailDomainStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MailDomainStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MailDomainStateException(
    body,
    context
  );
  const contents: MailDomainStateException = {
    name: "MailDomainStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NameAvailabilityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NameAvailabilityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NameAvailabilityException(
    body,
    context
  );
  const contents: NameAvailabilityException = {
    name: "NameAvailabilityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OrganizationNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationNotFoundException(
    body,
    context
  );
  const contents: OrganizationNotFoundException = {
    name: "OrganizationNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OrganizationStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationStateException(
    body,
    context
  );
  const contents: OrganizationStateException = {
    name: "OrganizationStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ReservedNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReservedNameException(
    body,
    context
  );
  const contents: ReservedNameException = {
    name: "ReservedNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedOperationException(
    body,
    context
  );
  const contents: UnsupportedOperationException = {
    name: "UnsupportedOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AssociateDelegateToResourceRequest = (
  input: AssociateDelegateToResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityId !== undefined && { EntityId: input.EntityId }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    }),
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId })
  };
};

const serializeAws_json1_1AssociateMemberToGroupRequest = (
  input: AssociateMemberToGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId !== undefined && { GroupId: input.GroupId }),
    ...(input.MemberId !== undefined && { MemberId: input.MemberId }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1BookingOptions = (
  input: BookingOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoAcceptRequests !== undefined && {
      AutoAcceptRequests: input.AutoAcceptRequests
    }),
    ...(input.AutoDeclineConflictingRequests !== undefined && {
      AutoDeclineConflictingRequests: input.AutoDeclineConflictingRequests
    }),
    ...(input.AutoDeclineRecurringRequests !== undefined && {
      AutoDeclineRecurringRequests: input.AutoDeclineRecurringRequests
    })
  };
};

const serializeAws_json1_1CreateAliasRequest = (
  input: CreateAliasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Alias !== undefined && { Alias: input.Alias }),
    ...(input.EntityId !== undefined && { EntityId: input.EntityId }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1CreateGroupRequest = (
  input: CreateGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1CreateResourceRequest = (
  input: CreateResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    }),
    ...(input.Type !== undefined && { Type: input.Type })
  };
};

const serializeAws_json1_1CreateUserRequest = (
  input: CreateUserRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DisplayName !== undefined && { DisplayName: input.DisplayName }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    }),
    ...(input.Password !== undefined && { Password: input.Password })
  };
};

const serializeAws_json1_1DeleteAliasRequest = (
  input: DeleteAliasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Alias !== undefined && { Alias: input.Alias }),
    ...(input.EntityId !== undefined && { EntityId: input.EntityId }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1DeleteGroupRequest = (
  input: DeleteGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId !== undefined && { GroupId: input.GroupId }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1DeleteMailboxPermissionsRequest = (
  input: DeleteMailboxPermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityId !== undefined && { EntityId: input.EntityId }),
    ...(input.GranteeId !== undefined && { GranteeId: input.GranteeId }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1DeleteResourceRequest = (
  input: DeleteResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    }),
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId })
  };
};

const serializeAws_json1_1DeleteUserRequest = (
  input: DeleteUserRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    }),
    ...(input.UserId !== undefined && { UserId: input.UserId })
  };
};

const serializeAws_json1_1DeregisterFromWorkMailRequest = (
  input: DeregisterFromWorkMailRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityId !== undefined && { EntityId: input.EntityId }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1DescribeGroupRequest = (
  input: DescribeGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId !== undefined && { GroupId: input.GroupId }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1DescribeOrganizationRequest = (
  input: DescribeOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1DescribeResourceRequest = (
  input: DescribeResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    }),
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId })
  };
};

const serializeAws_json1_1DescribeUserRequest = (
  input: DescribeUserRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    }),
    ...(input.UserId !== undefined && { UserId: input.UserId })
  };
};

const serializeAws_json1_1DisassociateDelegateFromResourceRequest = (
  input: DisassociateDelegateFromResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityId !== undefined && { EntityId: input.EntityId }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    }),
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId })
  };
};

const serializeAws_json1_1DisassociateMemberFromGroupRequest = (
  input: DisassociateMemberFromGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId !== undefined && { GroupId: input.GroupId }),
    ...(input.MemberId !== undefined && { MemberId: input.MemberId }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1GetMailboxDetailsRequest = (
  input: GetMailboxDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    }),
    ...(input.UserId !== undefined && { UserId: input.UserId })
  };
};

const serializeAws_json1_1ListAliasesRequest = (
  input: ListAliasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityId !== undefined && { EntityId: input.EntityId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1ListGroupMembersRequest = (
  input: ListGroupMembersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId !== undefined && { GroupId: input.GroupId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1ListGroupsRequest = (
  input: ListGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1ListMailboxPermissionsRequest = (
  input: ListMailboxPermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityId !== undefined && { EntityId: input.EntityId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1ListOrganizationsRequest = (
  input: ListOrganizationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListResourceDelegatesRequest = (
  input: ListResourceDelegatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    }),
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId })
  };
};

const serializeAws_json1_1ListResourcesRequest = (
  input: ListResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1ListUsersRequest = (
  input: ListUsersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1PermissionValues = (
  input: (PermissionType | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1PutMailboxPermissionsRequest = (
  input: PutMailboxPermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityId !== undefined && { EntityId: input.EntityId }),
    ...(input.GranteeId !== undefined && { GranteeId: input.GranteeId }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    }),
    ...(input.PermissionValues !== undefined && {
      PermissionValues: serializeAws_json1_1PermissionValues(
        input.PermissionValues,
        context
      )
    })
  };
};

const serializeAws_json1_1RegisterToWorkMailRequest = (
  input: RegisterToWorkMailRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Email !== undefined && { Email: input.Email }),
    ...(input.EntityId !== undefined && { EntityId: input.EntityId }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1ResetPasswordRequest = (
  input: ResetPasswordRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    }),
    ...(input.Password !== undefined && { Password: input.Password }),
    ...(input.UserId !== undefined && { UserId: input.UserId })
  };
};

const serializeAws_json1_1UpdateMailboxQuotaRequest = (
  input: UpdateMailboxQuotaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MailboxQuota !== undefined && {
      MailboxQuota: input.MailboxQuota
    }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    }),
    ...(input.UserId !== undefined && { UserId: input.UserId })
  };
};

const serializeAws_json1_1UpdatePrimaryEmailAddressRequest = (
  input: UpdatePrimaryEmailAddressRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Email !== undefined && { Email: input.Email }),
    ...(input.EntityId !== undefined && { EntityId: input.EntityId }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    })
  };
};

const serializeAws_json1_1UpdateResourceRequest = (
  input: UpdateResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BookingOptions !== undefined && {
      BookingOptions: serializeAws_json1_1BookingOptions(
        input.BookingOptions,
        context
      )
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    }),
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId })
  };
};

const deserializeAws_json1_1Aliases = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AssociateDelegateToResourceResponse = (
  output: any,
  context: __SerdeContext
): AssociateDelegateToResourceResponse => {
  return {
    __type: "AssociateDelegateToResourceResponse"
  } as any;
};

const deserializeAws_json1_1AssociateMemberToGroupResponse = (
  output: any,
  context: __SerdeContext
): AssociateMemberToGroupResponse => {
  return {
    __type: "AssociateMemberToGroupResponse"
  } as any;
};

const deserializeAws_json1_1BookingOptions = (
  output: any,
  context: __SerdeContext
): BookingOptions => {
  return {
    __type: "BookingOptions",
    AutoAcceptRequests:
      output.AutoAcceptRequests !== undefined &&
      output.AutoAcceptRequests !== null
        ? output.AutoAcceptRequests
        : undefined,
    AutoDeclineConflictingRequests:
      output.AutoDeclineConflictingRequests !== undefined &&
      output.AutoDeclineConflictingRequests !== null
        ? output.AutoDeclineConflictingRequests
        : undefined,
    AutoDeclineRecurringRequests:
      output.AutoDeclineRecurringRequests !== undefined &&
      output.AutoDeclineRecurringRequests !== null
        ? output.AutoDeclineRecurringRequests
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateAliasResponse = (
  output: any,
  context: __SerdeContext
): CreateAliasResponse => {
  return {
    __type: "CreateAliasResponse"
  } as any;
};

const deserializeAws_json1_1CreateGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateGroupResponse => {
  return {
    __type: "CreateGroupResponse",
    GroupId:
      output.GroupId !== undefined && output.GroupId !== null
        ? output.GroupId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateResourceResponse = (
  output: any,
  context: __SerdeContext
): CreateResourceResponse => {
  return {
    __type: "CreateResourceResponse",
    ResourceId:
      output.ResourceId !== undefined && output.ResourceId !== null
        ? output.ResourceId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateUserResponse = (
  output: any,
  context: __SerdeContext
): CreateUserResponse => {
  return {
    __type: "CreateUserResponse",
    UserId:
      output.UserId !== undefined && output.UserId !== null
        ? output.UserId
        : undefined
  } as any;
};

const deserializeAws_json1_1Delegate = (
  output: any,
  context: __SerdeContext
): Delegate => {
  return {
    __type: "Delegate",
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteAliasResponse = (
  output: any,
  context: __SerdeContext
): DeleteAliasResponse => {
  return {
    __type: "DeleteAliasResponse"
  } as any;
};

const deserializeAws_json1_1DeleteGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteGroupResponse => {
  return {
    __type: "DeleteGroupResponse"
  } as any;
};

const deserializeAws_json1_1DeleteMailboxPermissionsResponse = (
  output: any,
  context: __SerdeContext
): DeleteMailboxPermissionsResponse => {
  return {
    __type: "DeleteMailboxPermissionsResponse"
  } as any;
};

const deserializeAws_json1_1DeleteResourceResponse = (
  output: any,
  context: __SerdeContext
): DeleteResourceResponse => {
  return {
    __type: "DeleteResourceResponse"
  } as any;
};

const deserializeAws_json1_1DeleteUserResponse = (
  output: any,
  context: __SerdeContext
): DeleteUserResponse => {
  return {
    __type: "DeleteUserResponse"
  } as any;
};

const deserializeAws_json1_1DeregisterFromWorkMailResponse = (
  output: any,
  context: __SerdeContext
): DeregisterFromWorkMailResponse => {
  return {
    __type: "DeregisterFromWorkMailResponse"
  } as any;
};

const deserializeAws_json1_1DescribeGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeGroupResponse => {
  return {
    __type: "DescribeGroupResponse",
    DisabledDate:
      output.DisabledDate !== undefined && output.DisabledDate !== null
        ? new Date(Math.round(output.DisabledDate * 1000))
        : undefined,
    Email:
      output.Email !== undefined && output.Email !== null
        ? output.Email
        : undefined,
    EnabledDate:
      output.EnabledDate !== undefined && output.EnabledDate !== null
        ? new Date(Math.round(output.EnabledDate * 1000))
        : undefined,
    GroupId:
      output.GroupId !== undefined && output.GroupId !== null
        ? output.GroupId
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationResponse => {
  return {
    __type: "DescribeOrganizationResponse",
    Alias:
      output.Alias !== undefined && output.Alias !== null
        ? output.Alias
        : undefined,
    CompletedDate:
      output.CompletedDate !== undefined && output.CompletedDate !== null
        ? new Date(Math.round(output.CompletedDate * 1000))
        : undefined,
    DefaultMailDomain:
      output.DefaultMailDomain !== undefined &&
      output.DefaultMailDomain !== null
        ? output.DefaultMailDomain
        : undefined,
    DirectoryId:
      output.DirectoryId !== undefined && output.DirectoryId !== null
        ? output.DirectoryId
        : undefined,
    DirectoryType:
      output.DirectoryType !== undefined && output.DirectoryType !== null
        ? output.DirectoryType
        : undefined,
    ErrorMessage:
      output.ErrorMessage !== undefined && output.ErrorMessage !== null
        ? output.ErrorMessage
        : undefined,
    OrganizationId:
      output.OrganizationId !== undefined && output.OrganizationId !== null
        ? output.OrganizationId
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeResourceResponse = (
  output: any,
  context: __SerdeContext
): DescribeResourceResponse => {
  return {
    __type: "DescribeResourceResponse",
    BookingOptions:
      output.BookingOptions !== undefined && output.BookingOptions !== null
        ? deserializeAws_json1_1BookingOptions(output.BookingOptions, context)
        : undefined,
    DisabledDate:
      output.DisabledDate !== undefined && output.DisabledDate !== null
        ? new Date(Math.round(output.DisabledDate * 1000))
        : undefined,
    Email:
      output.Email !== undefined && output.Email !== null
        ? output.Email
        : undefined,
    EnabledDate:
      output.EnabledDate !== undefined && output.EnabledDate !== null
        ? new Date(Math.round(output.EnabledDate * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    ResourceId:
      output.ResourceId !== undefined && output.ResourceId !== null
        ? output.ResourceId
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeUserResponse = (
  output: any,
  context: __SerdeContext
): DescribeUserResponse => {
  return {
    __type: "DescribeUserResponse",
    DisabledDate:
      output.DisabledDate !== undefined && output.DisabledDate !== null
        ? new Date(Math.round(output.DisabledDate * 1000))
        : undefined,
    DisplayName:
      output.DisplayName !== undefined && output.DisplayName !== null
        ? output.DisplayName
        : undefined,
    Email:
      output.Email !== undefined && output.Email !== null
        ? output.Email
        : undefined,
    EnabledDate:
      output.EnabledDate !== undefined && output.EnabledDate !== null
        ? new Date(Math.round(output.EnabledDate * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    UserId:
      output.UserId !== undefined && output.UserId !== null
        ? output.UserId
        : undefined,
    UserRole:
      output.UserRole !== undefined && output.UserRole !== null
        ? output.UserRole
        : undefined
  } as any;
};

const deserializeAws_json1_1DirectoryServiceAuthenticationFailedException = (
  output: any,
  context: __SerdeContext
): DirectoryServiceAuthenticationFailedException => {
  return {
    __type: "DirectoryServiceAuthenticationFailedException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1DirectoryUnavailableException = (
  output: any,
  context: __SerdeContext
): DirectoryUnavailableException => {
  return {
    __type: "DirectoryUnavailableException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1DisassociateDelegateFromResourceResponse = (
  output: any,
  context: __SerdeContext
): DisassociateDelegateFromResourceResponse => {
  return {
    __type: "DisassociateDelegateFromResourceResponse"
  } as any;
};

const deserializeAws_json1_1DisassociateMemberFromGroupResponse = (
  output: any,
  context: __SerdeContext
): DisassociateMemberFromGroupResponse => {
  return {
    __type: "DisassociateMemberFromGroupResponse"
  } as any;
};

const deserializeAws_json1_1EmailAddressInUseException = (
  output: any,
  context: __SerdeContext
): EmailAddressInUseException => {
  return {
    __type: "EmailAddressInUseException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1EntityAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): EntityAlreadyRegisteredException => {
  return {
    __type: "EntityAlreadyRegisteredException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1EntityNotFoundException = (
  output: any,
  context: __SerdeContext
): EntityNotFoundException => {
  return {
    __type: "EntityNotFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1EntityStateException = (
  output: any,
  context: __SerdeContext
): EntityStateException => {
  return {
    __type: "EntityStateException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1GetMailboxDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetMailboxDetailsResponse => {
  return {
    __type: "GetMailboxDetailsResponse",
    MailboxQuota:
      output.MailboxQuota !== undefined && output.MailboxQuota !== null
        ? output.MailboxQuota
        : undefined,
    MailboxSize:
      output.MailboxSize !== undefined && output.MailboxSize !== null
        ? output.MailboxSize
        : undefined
  } as any;
};

const deserializeAws_json1_1Group = (
  output: any,
  context: __SerdeContext
): Group => {
  return {
    __type: "Group",
    DisabledDate:
      output.DisabledDate !== undefined && output.DisabledDate !== null
        ? new Date(Math.round(output.DisabledDate * 1000))
        : undefined,
    Email:
      output.Email !== undefined && output.Email !== null
        ? output.Email
        : undefined,
    EnabledDate:
      output.EnabledDate !== undefined && output.EnabledDate !== null
        ? new Date(Math.round(output.EnabledDate * 1000))
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
};

const deserializeAws_json1_1Groups = (
  output: any,
  context: __SerdeContext
): Group[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Group(entry, context)
  );
};

const deserializeAws_json1_1InvalidConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidConfigurationException => {
  return {
    __type: "InvalidConfigurationException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    __type: "InvalidParameterException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidPasswordException = (
  output: any,
  context: __SerdeContext
): InvalidPasswordException => {
  return {
    __type: "InvalidPasswordException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListAliasesResponse = (
  output: any,
  context: __SerdeContext
): ListAliasesResponse => {
  return {
    __type: "ListAliasesResponse",
    Aliases:
      output.Aliases !== undefined && output.Aliases !== null
        ? deserializeAws_json1_1Aliases(output.Aliases, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListGroupMembersResponse = (
  output: any,
  context: __SerdeContext
): ListGroupMembersResponse => {
  return {
    __type: "ListGroupMembersResponse",
    Members:
      output.Members !== undefined && output.Members !== null
        ? deserializeAws_json1_1Members(output.Members, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListGroupsResponse => {
  return {
    __type: "ListGroupsResponse",
    Groups:
      output.Groups !== undefined && output.Groups !== null
        ? deserializeAws_json1_1Groups(output.Groups, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListMailboxPermissionsResponse = (
  output: any,
  context: __SerdeContext
): ListMailboxPermissionsResponse => {
  return {
    __type: "ListMailboxPermissionsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Permissions:
      output.Permissions !== undefined && output.Permissions !== null
        ? deserializeAws_json1_1Permissions(output.Permissions, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListOrganizationsResponse = (
  output: any,
  context: __SerdeContext
): ListOrganizationsResponse => {
  return {
    __type: "ListOrganizationsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    OrganizationSummaries:
      output.OrganizationSummaries !== undefined &&
      output.OrganizationSummaries !== null
        ? deserializeAws_json1_1OrganizationSummaries(
            output.OrganizationSummaries,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListResourceDelegatesResponse = (
  output: any,
  context: __SerdeContext
): ListResourceDelegatesResponse => {
  return {
    __type: "ListResourceDelegatesResponse",
    Delegates:
      output.Delegates !== undefined && output.Delegates !== null
        ? deserializeAws_json1_1ResourceDelegates(output.Delegates, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListResourcesResponse = (
  output: any,
  context: __SerdeContext
): ListResourcesResponse => {
  return {
    __type: "ListResourcesResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Resources:
      output.Resources !== undefined && output.Resources !== null
        ? deserializeAws_json1_1Resources(output.Resources, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListUsersResponse = (
  output: any,
  context: __SerdeContext
): ListUsersResponse => {
  return {
    __type: "ListUsersResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Users:
      output.Users !== undefined && output.Users !== null
        ? deserializeAws_json1_1Users(output.Users, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1MailDomainNotFoundException = (
  output: any,
  context: __SerdeContext
): MailDomainNotFoundException => {
  return {
    __type: "MailDomainNotFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1MailDomainStateException = (
  output: any,
  context: __SerdeContext
): MailDomainStateException => {
  return {
    __type: "MailDomainStateException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1Member = (
  output: any,
  context: __SerdeContext
): Member => {
  return {
    __type: "Member",
    DisabledDate:
      output.DisabledDate !== undefined && output.DisabledDate !== null
        ? new Date(Math.round(output.DisabledDate * 1000))
        : undefined,
    EnabledDate:
      output.EnabledDate !== undefined && output.EnabledDate !== null
        ? new Date(Math.round(output.EnabledDate * 1000))
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1Members = (
  output: any,
  context: __SerdeContext
): Member[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Member(entry, context)
  );
};

const deserializeAws_json1_1NameAvailabilityException = (
  output: any,
  context: __SerdeContext
): NameAvailabilityException => {
  return {
    __type: "NameAvailabilityException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1OrganizationNotFoundException = (
  output: any,
  context: __SerdeContext
): OrganizationNotFoundException => {
  return {
    __type: "OrganizationNotFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1OrganizationStateException = (
  output: any,
  context: __SerdeContext
): OrganizationStateException => {
  return {
    __type: "OrganizationStateException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1OrganizationSummaries = (
  output: any,
  context: __SerdeContext
): OrganizationSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OrganizationSummary(entry, context)
  );
};

const deserializeAws_json1_1OrganizationSummary = (
  output: any,
  context: __SerdeContext
): OrganizationSummary => {
  return {
    __type: "OrganizationSummary",
    Alias:
      output.Alias !== undefined && output.Alias !== null
        ? output.Alias
        : undefined,
    ErrorMessage:
      output.ErrorMessage !== undefined && output.ErrorMessage !== null
        ? output.ErrorMessage
        : undefined,
    OrganizationId:
      output.OrganizationId !== undefined && output.OrganizationId !== null
        ? output.OrganizationId
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
};

const deserializeAws_json1_1Permission = (
  output: any,
  context: __SerdeContext
): Permission => {
  return {
    __type: "Permission",
    GranteeId:
      output.GranteeId !== undefined && output.GranteeId !== null
        ? output.GranteeId
        : undefined,
    GranteeType:
      output.GranteeType !== undefined && output.GranteeType !== null
        ? output.GranteeType
        : undefined,
    PermissionValues:
      output.PermissionValues !== undefined && output.PermissionValues !== null
        ? deserializeAws_json1_1PermissionValues(
            output.PermissionValues,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1Permissions = (
  output: any,
  context: __SerdeContext
): Permission[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Permission(entry, context)
  );
};

const deserializeAws_json1_1PermissionValues = (
  output: any,
  context: __SerdeContext
): (PermissionType | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1PutMailboxPermissionsResponse = (
  output: any,
  context: __SerdeContext
): PutMailboxPermissionsResponse => {
  return {
    __type: "PutMailboxPermissionsResponse"
  } as any;
};

const deserializeAws_json1_1RegisterToWorkMailResponse = (
  output: any,
  context: __SerdeContext
): RegisterToWorkMailResponse => {
  return {
    __type: "RegisterToWorkMailResponse"
  } as any;
};

const deserializeAws_json1_1ReservedNameException = (
  output: any,
  context: __SerdeContext
): ReservedNameException => {
  return {
    __type: "ReservedNameException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResetPasswordResponse = (
  output: any,
  context: __SerdeContext
): ResetPasswordResponse => {
  return {
    __type: "ResetPasswordResponse"
  } as any;
};

const deserializeAws_json1_1Resource = (
  output: any,
  context: __SerdeContext
): Resource => {
  return {
    __type: "Resource",
    DisabledDate:
      output.DisabledDate !== undefined && output.DisabledDate !== null
        ? new Date(Math.round(output.DisabledDate * 1000))
        : undefined,
    Email:
      output.Email !== undefined && output.Email !== null
        ? output.Email
        : undefined,
    EnabledDate:
      output.EnabledDate !== undefined && output.EnabledDate !== null
        ? new Date(Math.round(output.EnabledDate * 1000))
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceDelegates = (
  output: any,
  context: __SerdeContext
): Delegate[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Delegate(entry, context)
  );
};

const deserializeAws_json1_1Resources = (
  output: any,
  context: __SerdeContext
): Resource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Resource(entry, context)
  );
};

const deserializeAws_json1_1UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  return {
    __type: "UnsupportedOperationException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateMailboxQuotaResponse = (
  output: any,
  context: __SerdeContext
): UpdateMailboxQuotaResponse => {
  return {
    __type: "UpdateMailboxQuotaResponse"
  } as any;
};

const deserializeAws_json1_1UpdatePrimaryEmailAddressResponse = (
  output: any,
  context: __SerdeContext
): UpdatePrimaryEmailAddressResponse => {
  return {
    __type: "UpdatePrimaryEmailAddressResponse"
  } as any;
};

const deserializeAws_json1_1UpdateResourceResponse = (
  output: any,
  context: __SerdeContext
): UpdateResourceResponse => {
  return {
    __type: "UpdateResourceResponse"
  } as any;
};

const deserializeAws_json1_1User = (
  output: any,
  context: __SerdeContext
): User => {
  return {
    __type: "User",
    DisabledDate:
      output.DisabledDate !== undefined && output.DisabledDate !== null
        ? new Date(Math.round(output.DisabledDate * 1000))
        : undefined,
    DisplayName:
      output.DisplayName !== undefined && output.DisplayName !== null
        ? output.DisplayName
        : undefined,
    Email:
      output.Email !== undefined && output.Email !== null
        ? output.Email
        : undefined,
    EnabledDate:
      output.EnabledDate !== undefined && output.EnabledDate !== null
        ? new Date(Math.round(output.EnabledDate * 1000))
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    UserRole:
      output.UserRole !== undefined && output.UserRole !== null
        ? output.UserRole
        : undefined
  } as any;
};

const deserializeAws_json1_1Users = (
  output: any,
  context: __SerdeContext
): User[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1User(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
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
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

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
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
