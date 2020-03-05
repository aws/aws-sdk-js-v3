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

export async function serializeAws_json1_1AssociateDelegateToResourceCommand(
  input: AssociateDelegateToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.AssociateDelegateToResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateDelegateToResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AssociateMemberToGroupCommand(
  input: AssociateMemberToGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.AssociateMemberToGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateMemberToGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateAliasCommand(
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.CreateAlias";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateGroupCommand(
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.CreateGroup";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateResourceCommand(
  input: CreateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.CreateResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateUserCommand(
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.CreateUser";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteAliasCommand(
  input: DeleteAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.DeleteAlias";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteGroupCommand(
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.DeleteGroup";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteMailboxPermissionsCommand(
  input: DeleteMailboxPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.DeleteMailboxPermissions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteMailboxPermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteResourceCommand(
  input: DeleteResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.DeleteResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteUserCommand(
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.DeleteUser";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeregisterFromWorkMailCommand(
  input: DeregisterFromWorkMailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.DeregisterFromWorkMail";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeregisterFromWorkMailRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeGroupCommand(
  input: DescribeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.DescribeGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeOrganizationCommand(
  input: DescribeOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.DescribeOrganization";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeOrganizationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeResourceCommand(
  input: DescribeResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.DescribeResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeUserCommand(
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.DescribeUser";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeUserRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateDelegateFromResourceCommand(
  input: DisassociateDelegateFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.DisassociateDelegateFromResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateDelegateFromResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateMemberFromGroupCommand(
  input: DisassociateMemberFromGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.DisassociateMemberFromGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateMemberFromGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetMailboxDetailsCommand(
  input: GetMailboxDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.GetMailboxDetails";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetMailboxDetailsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListAliasesCommand(
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.ListAliases";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListGroupMembersCommand(
  input: ListGroupMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.ListGroupMembers";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListGroupMembersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListGroupsCommand(
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.ListGroups";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListMailboxPermissionsCommand(
  input: ListMailboxPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.ListMailboxPermissions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListMailboxPermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListOrganizationsCommand(
  input: ListOrganizationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.ListOrganizations";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListOrganizationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListResourceDelegatesCommand(
  input: ListResourceDelegatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.ListResourceDelegates";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResourceDelegatesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListResourcesCommand(
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.ListResources";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResourcesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListUsersCommand(
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.ListUsers";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutMailboxPermissionsCommand(
  input: PutMailboxPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.PutMailboxPermissions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutMailboxPermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RegisterToWorkMailCommand(
  input: RegisterToWorkMailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.RegisterToWorkMail";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterToWorkMailRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ResetPasswordCommand(
  input: ResetPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.ResetPassword";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ResetPasswordRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateMailboxQuotaCommand(
  input: UpdateMailboxQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.UpdateMailboxQuota";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateMailboxQuotaRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdatePrimaryEmailAddressCommand(
  input: UpdatePrimaryEmailAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.UpdatePrimaryEmailAddress";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdatePrimaryEmailAddressRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateResourceCommand(
  input: UpdateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "WorkMailService.UpdateResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AssociateDelegateToResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDelegateToResourceCommandOutput> {
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
}

async function deserializeAws_json1_1AssociateDelegateToResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDelegateToResourceCommandOutput> {
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
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1AssociateMemberToGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberToGroupCommandOutput> {
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
}

async function deserializeAws_json1_1AssociateMemberToGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberToGroupCommandOutput> {
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
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail.service#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail.service#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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

export async function deserializeAws_json1_1CreateAliasCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> {
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
}

async function deserializeAws_json1_1CreateAliasCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> {
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
    case "EmailAddressInUseException":
    case "com.amazonaws.workmail.service#EmailAddressInUseException":
      response = {
        ...(await deserializeAws_json1_1EmailAddressInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail.service#MailDomainNotFoundException":
      response = {
        ...(await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailDomainStateException":
    case "com.amazonaws.workmail.service#MailDomainStateException":
      response = {
        ...(await deserializeAws_json1_1MailDomainStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1CreateGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> {
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
}

async function deserializeAws_json1_1CreateGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> {
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
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail.service#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NameAvailabilityException":
    case "com.amazonaws.workmail.service#NameAvailabilityException":
      response = {
        ...(await deserializeAws_json1_1NameAvailabilityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReservedNameException":
    case "com.amazonaws.workmail.service#ReservedNameException":
      response = {
        ...(await deserializeAws_json1_1ReservedNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail.service#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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

export async function deserializeAws_json1_1CreateResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceCommandOutput> {
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
}

async function deserializeAws_json1_1CreateResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceCommandOutput> {
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
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail.service#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NameAvailabilityException":
    case "com.amazonaws.workmail.service#NameAvailabilityException":
      response = {
        ...(await deserializeAws_json1_1NameAvailabilityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReservedNameException":
    case "com.amazonaws.workmail.service#ReservedNameException":
      response = {
        ...(await deserializeAws_json1_1ReservedNameExceptionResponse(
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

export async function deserializeAws_json1_1CreateUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> {
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
}

async function deserializeAws_json1_1CreateUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> {
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
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail.service#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPasswordException":
    case "com.amazonaws.workmail.service#InvalidPasswordException":
      response = {
        ...(await deserializeAws_json1_1InvalidPasswordExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NameAvailabilityException":
    case "com.amazonaws.workmail.service#NameAvailabilityException":
      response = {
        ...(await deserializeAws_json1_1NameAvailabilityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReservedNameException":
    case "com.amazonaws.workmail.service#ReservedNameException":
      response = {
        ...(await deserializeAws_json1_1ReservedNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail.service#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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

export async function deserializeAws_json1_1DeleteAliasCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteAliasCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> {
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
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1DeleteGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> {
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
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail.service#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail.service#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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

export async function deserializeAws_json1_1DeleteMailboxPermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMailboxPermissionsCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteMailboxPermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMailboxPermissionsCommandOutput> {
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
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1DeleteResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceCommandOutput> {
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
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1DeleteUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> {
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
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail.service#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail.service#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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

export async function deserializeAws_json1_1DeregisterFromWorkMailCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterFromWorkMailCommandOutput> {
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
}

async function deserializeAws_json1_1DeregisterFromWorkMailCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterFromWorkMailCommandOutput> {
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
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1DescribeGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupCommandOutput> {
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
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1DescribeOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationCommandOutput> {
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
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1DescribeResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCommandOutput> {
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
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1DescribeUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> {
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
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1DisassociateDelegateFromResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDelegateFromResourceCommandOutput> {
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
}

async function deserializeAws_json1_1DisassociateDelegateFromResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDelegateFromResourceCommandOutput> {
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
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1DisassociateMemberFromGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberFromGroupCommandOutput> {
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
}

async function deserializeAws_json1_1DisassociateMemberFromGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberFromGroupCommandOutput> {
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
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail.service#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail.service#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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

export async function deserializeAws_json1_1GetMailboxDetailsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMailboxDetailsCommandOutput> {
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
}

async function deserializeAws_json1_1GetMailboxDetailsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMailboxDetailsCommandOutput> {
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
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1ListAliasesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> {
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
}

async function deserializeAws_json1_1ListAliasesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> {
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
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1ListGroupMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembersCommandOutput> {
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
}

async function deserializeAws_json1_1ListGroupMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembersCommandOutput> {
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
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1ListGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> {
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
}

async function deserializeAws_json1_1ListGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> {
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
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1ListMailboxPermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMailboxPermissionsCommandOutput> {
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
}

async function deserializeAws_json1_1ListMailboxPermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMailboxPermissionsCommandOutput> {
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
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1ListOrganizationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationsCommandOutput> {
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
}

async function deserializeAws_json1_1ListOrganizationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationsCommandOutput> {
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
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
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

export async function deserializeAws_json1_1ListResourceDelegatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDelegatesCommandOutput> {
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
}

async function deserializeAws_json1_1ListResourceDelegatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDelegatesCommandOutput> {
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
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1ListResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> {
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
}

async function deserializeAws_json1_1ListResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> {
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
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1ListUsersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> {
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
}

async function deserializeAws_json1_1ListUsersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> {
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
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1PutMailboxPermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMailboxPermissionsCommandOutput> {
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
}

async function deserializeAws_json1_1PutMailboxPermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMailboxPermissionsCommandOutput> {
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
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1RegisterToWorkMailCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterToWorkMailCommandOutput> {
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
}

async function deserializeAws_json1_1RegisterToWorkMailCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterToWorkMailCommandOutput> {
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
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail.service#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EmailAddressInUseException":
    case "com.amazonaws.workmail.service#EmailAddressInUseException":
      response = {
        ...(await deserializeAws_json1_1EmailAddressInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityAlreadyRegisteredException":
    case "com.amazonaws.workmail.service#EntityAlreadyRegisteredException":
      response = {
        ...(await deserializeAws_json1_1EntityAlreadyRegisteredExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail.service#MailDomainNotFoundException":
      response = {
        ...(await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailDomainStateException":
    case "com.amazonaws.workmail.service#MailDomainStateException":
      response = {
        ...(await deserializeAws_json1_1MailDomainStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1ResetPasswordCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetPasswordCommandOutput> {
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
}

async function deserializeAws_json1_1ResetPasswordCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetPasswordCommandOutput> {
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
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail.service#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPasswordException":
    case "com.amazonaws.workmail.service#InvalidPasswordException":
      response = {
        ...(await deserializeAws_json1_1InvalidPasswordExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail.service#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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

export async function deserializeAws_json1_1UpdateMailboxQuotaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMailboxQuotaCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateMailboxQuotaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMailboxQuotaCommandOutput> {
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
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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

export async function deserializeAws_json1_1UpdatePrimaryEmailAddressCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrimaryEmailAddressCommandOutput> {
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
}

async function deserializeAws_json1_1UpdatePrimaryEmailAddressCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrimaryEmailAddressCommandOutput> {
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
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail.service#DirectoryServiceAuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail.service#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EmailAddressInUseException":
    case "com.amazonaws.workmail.service#EmailAddressInUseException":
      response = {
        ...(await deserializeAws_json1_1EmailAddressInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.workmail.service#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail.service#MailDomainNotFoundException":
      response = {
        ...(await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailDomainStateException":
    case "com.amazonaws.workmail.service#MailDomainStateException":
      response = {
        ...(await deserializeAws_json1_1MailDomainStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail.service#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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

export async function deserializeAws_json1_1UpdateResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> {
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
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail.service#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EmailAddressInUseException":
    case "com.amazonaws.workmail.service#EmailAddressInUseException":
      response = {
        ...(await deserializeAws_json1_1EmailAddressInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.workmail.service#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityStateException":
    case "com.amazonaws.workmail.service#EntityStateException":
      response = {
        ...(await deserializeAws_json1_1EntityStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidConfigurationException":
    case "com.amazonaws.workmail.service#InvalidConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail.service#MailDomainNotFoundException":
      response = {
        ...(await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MailDomainStateException":
    case "com.amazonaws.workmail.service#MailDomainStateException":
      response = {
        ...(await deserializeAws_json1_1MailDomainStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NameAvailabilityException":
    case "com.amazonaws.workmail.service#NameAvailabilityException":
      response = {
        ...(await deserializeAws_json1_1NameAvailabilityExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail.service#OrganizationNotFoundException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationStateException":
    case "com.amazonaws.workmail.service#OrganizationStateException":
      response = {
        ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(
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
  const bodyParams: any = {};
  if (input.EntityId !== undefined) {
    bodyParams["EntityId"] = input.EntityId;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  return bodyParams;
};

const serializeAws_json1_1AssociateMemberToGroupRequest = (
  input: AssociateMemberToGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GroupId !== undefined) {
    bodyParams["GroupId"] = input.GroupId;
  }
  if (input.MemberId !== undefined) {
    bodyParams["MemberId"] = input.MemberId;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1BookingOptions = (
  input: BookingOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AutoAcceptRequests !== undefined) {
    bodyParams["AutoAcceptRequests"] = input.AutoAcceptRequests;
  }
  if (input.AutoDeclineConflictingRequests !== undefined) {
    bodyParams["AutoDeclineConflictingRequests"] =
      input.AutoDeclineConflictingRequests;
  }
  if (input.AutoDeclineRecurringRequests !== undefined) {
    bodyParams["AutoDeclineRecurringRequests"] =
      input.AutoDeclineRecurringRequests;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateAliasRequest = (
  input: CreateAliasRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Alias !== undefined) {
    bodyParams["Alias"] = input.Alias;
  }
  if (input.EntityId !== undefined) {
    bodyParams["EntityId"] = input.EntityId;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateGroupRequest = (
  input: CreateGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateResourceRequest = (
  input: CreateResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateUserRequest = (
  input: CreateUserRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DisplayName !== undefined) {
    bodyParams["DisplayName"] = input.DisplayName;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  if (input.Password !== undefined) {
    bodyParams["Password"] = input.Password;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteAliasRequest = (
  input: DeleteAliasRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Alias !== undefined) {
    bodyParams["Alias"] = input.Alias;
  }
  if (input.EntityId !== undefined) {
    bodyParams["EntityId"] = input.EntityId;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteGroupRequest = (
  input: DeleteGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GroupId !== undefined) {
    bodyParams["GroupId"] = input.GroupId;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteMailboxPermissionsRequest = (
  input: DeleteMailboxPermissionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EntityId !== undefined) {
    bodyParams["EntityId"] = input.EntityId;
  }
  if (input.GranteeId !== undefined) {
    bodyParams["GranteeId"] = input.GranteeId;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteResourceRequest = (
  input: DeleteResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteUserRequest = (
  input: DeleteUserRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  if (input.UserId !== undefined) {
    bodyParams["UserId"] = input.UserId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeregisterFromWorkMailRequest = (
  input: DeregisterFromWorkMailRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EntityId !== undefined) {
    bodyParams["EntityId"] = input.EntityId;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeGroupRequest = (
  input: DescribeGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GroupId !== undefined) {
    bodyParams["GroupId"] = input.GroupId;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeOrganizationRequest = (
  input: DescribeOrganizationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeResourceRequest = (
  input: DescribeResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeUserRequest = (
  input: DescribeUserRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  if (input.UserId !== undefined) {
    bodyParams["UserId"] = input.UserId;
  }
  return bodyParams;
};

const serializeAws_json1_1DisassociateDelegateFromResourceRequest = (
  input: DisassociateDelegateFromResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EntityId !== undefined) {
    bodyParams["EntityId"] = input.EntityId;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  return bodyParams;
};

const serializeAws_json1_1DisassociateMemberFromGroupRequest = (
  input: DisassociateMemberFromGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GroupId !== undefined) {
    bodyParams["GroupId"] = input.GroupId;
  }
  if (input.MemberId !== undefined) {
    bodyParams["MemberId"] = input.MemberId;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetMailboxDetailsRequest = (
  input: GetMailboxDetailsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  if (input.UserId !== undefined) {
    bodyParams["UserId"] = input.UserId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListAliasesRequest = (
  input: ListAliasesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EntityId !== undefined) {
    bodyParams["EntityId"] = input.EntityId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListGroupMembersRequest = (
  input: ListGroupMembersRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GroupId !== undefined) {
    bodyParams["GroupId"] = input.GroupId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListGroupsRequest = (
  input: ListGroupsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListMailboxPermissionsRequest = (
  input: ListMailboxPermissionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EntityId !== undefined) {
    bodyParams["EntityId"] = input.EntityId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListOrganizationsRequest = (
  input: ListOrganizationsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListResourceDelegatesRequest = (
  input: ListResourceDelegatesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListResourcesRequest = (
  input: ListResourcesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListUsersRequest = (
  input: ListUsersRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1PermissionValues = (
  input: Array<PermissionType | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1PutMailboxPermissionsRequest = (
  input: PutMailboxPermissionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EntityId !== undefined) {
    bodyParams["EntityId"] = input.EntityId;
  }
  if (input.GranteeId !== undefined) {
    bodyParams["GranteeId"] = input.GranteeId;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  if (input.PermissionValues !== undefined) {
    bodyParams["PermissionValues"] = serializeAws_json1_1PermissionValues(
      input.PermissionValues,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RegisterToWorkMailRequest = (
  input: RegisterToWorkMailRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Email !== undefined) {
    bodyParams["Email"] = input.Email;
  }
  if (input.EntityId !== undefined) {
    bodyParams["EntityId"] = input.EntityId;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1ResetPasswordRequest = (
  input: ResetPasswordRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  if (input.Password !== undefined) {
    bodyParams["Password"] = input.Password;
  }
  if (input.UserId !== undefined) {
    bodyParams["UserId"] = input.UserId;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateMailboxQuotaRequest = (
  input: UpdateMailboxQuotaRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MailboxQuota !== undefined) {
    bodyParams["MailboxQuota"] = input.MailboxQuota;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  if (input.UserId !== undefined) {
    bodyParams["UserId"] = input.UserId;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdatePrimaryEmailAddressRequest = (
  input: UpdatePrimaryEmailAddressRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Email !== undefined) {
    bodyParams["Email"] = input.Email;
  }
  if (input.EntityId !== undefined) {
    bodyParams["EntityId"] = input.EntityId;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateResourceRequest = (
  input: UpdateResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BookingOptions !== undefined) {
    bodyParams["BookingOptions"] = serializeAws_json1_1BookingOptions(
      input.BookingOptions,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  return bodyParams;
};

const deserializeAws_json1_1Aliases = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AssociateDelegateToResourceResponse = (
  output: any,
  context: __SerdeContext
): AssociateDelegateToResourceResponse => {
  let contents: any = {
    __type: "AssociateDelegateToResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1AssociateMemberToGroupResponse = (
  output: any,
  context: __SerdeContext
): AssociateMemberToGroupResponse => {
  let contents: any = {
    __type: "AssociateMemberToGroupResponse"
  };
  return contents;
};

const deserializeAws_json1_1BookingOptions = (
  output: any,
  context: __SerdeContext
): BookingOptions => {
  let contents: any = {
    __type: "BookingOptions",
    AutoAcceptRequests: undefined,
    AutoDeclineConflictingRequests: undefined,
    AutoDeclineRecurringRequests: undefined
  };
  if (
    output.AutoAcceptRequests !== undefined &&
    output.AutoAcceptRequests !== null
  ) {
    contents.AutoAcceptRequests = output.AutoAcceptRequests;
  }
  if (
    output.AutoDeclineConflictingRequests !== undefined &&
    output.AutoDeclineConflictingRequests !== null
  ) {
    contents.AutoDeclineConflictingRequests =
      output.AutoDeclineConflictingRequests;
  }
  if (
    output.AutoDeclineRecurringRequests !== undefined &&
    output.AutoDeclineRecurringRequests !== null
  ) {
    contents.AutoDeclineRecurringRequests = output.AutoDeclineRecurringRequests;
  }
  return contents;
};

const deserializeAws_json1_1CreateAliasResponse = (
  output: any,
  context: __SerdeContext
): CreateAliasResponse => {
  let contents: any = {
    __type: "CreateAliasResponse"
  };
  return contents;
};

const deserializeAws_json1_1CreateGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateGroupResponse => {
  let contents: any = {
    __type: "CreateGroupResponse",
    GroupId: undefined
  };
  if (output.GroupId !== undefined && output.GroupId !== null) {
    contents.GroupId = output.GroupId;
  }
  return contents;
};

const deserializeAws_json1_1CreateResourceResponse = (
  output: any,
  context: __SerdeContext
): CreateResourceResponse => {
  let contents: any = {
    __type: "CreateResourceResponse",
    ResourceId: undefined
  };
  if (output.ResourceId !== undefined && output.ResourceId !== null) {
    contents.ResourceId = output.ResourceId;
  }
  return contents;
};

const deserializeAws_json1_1CreateUserResponse = (
  output: any,
  context: __SerdeContext
): CreateUserResponse => {
  let contents: any = {
    __type: "CreateUserResponse",
    UserId: undefined
  };
  if (output.UserId !== undefined && output.UserId !== null) {
    contents.UserId = output.UserId;
  }
  return contents;
};

const deserializeAws_json1_1Delegate = (
  output: any,
  context: __SerdeContext
): Delegate => {
  let contents: any = {
    __type: "Delegate",
    Id: undefined,
    Type: undefined
  };
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1DeleteAliasResponse = (
  output: any,
  context: __SerdeContext
): DeleteAliasResponse => {
  let contents: any = {
    __type: "DeleteAliasResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteGroupResponse = (
  output: any,
  context: __SerdeContext
): DeleteGroupResponse => {
  let contents: any = {
    __type: "DeleteGroupResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteMailboxPermissionsResponse = (
  output: any,
  context: __SerdeContext
): DeleteMailboxPermissionsResponse => {
  let contents: any = {
    __type: "DeleteMailboxPermissionsResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteResourceResponse = (
  output: any,
  context: __SerdeContext
): DeleteResourceResponse => {
  let contents: any = {
    __type: "DeleteResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteUserResponse = (
  output: any,
  context: __SerdeContext
): DeleteUserResponse => {
  let contents: any = {
    __type: "DeleteUserResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeregisterFromWorkMailResponse = (
  output: any,
  context: __SerdeContext
): DeregisterFromWorkMailResponse => {
  let contents: any = {
    __type: "DeregisterFromWorkMailResponse"
  };
  return contents;
};

const deserializeAws_json1_1DescribeGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeGroupResponse => {
  let contents: any = {
    __type: "DescribeGroupResponse",
    DisabledDate: undefined,
    Email: undefined,
    EnabledDate: undefined,
    GroupId: undefined,
    Name: undefined,
    State: undefined
  };
  if (output.DisabledDate !== undefined && output.DisabledDate !== null) {
    contents.DisabledDate = new Date(Math.round(output.DisabledDate * 1000));
  }
  if (output.Email !== undefined && output.Email !== null) {
    contents.Email = output.Email;
  }
  if (output.EnabledDate !== undefined && output.EnabledDate !== null) {
    contents.EnabledDate = new Date(Math.round(output.EnabledDate * 1000));
  }
  if (output.GroupId !== undefined && output.GroupId !== null) {
    contents.GroupId = output.GroupId;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1DescribeOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationResponse => {
  let contents: any = {
    __type: "DescribeOrganizationResponse",
    Alias: undefined,
    CompletedDate: undefined,
    DefaultMailDomain: undefined,
    DirectoryId: undefined,
    DirectoryType: undefined,
    ErrorMessage: undefined,
    OrganizationId: undefined,
    State: undefined
  };
  if (output.Alias !== undefined && output.Alias !== null) {
    contents.Alias = output.Alias;
  }
  if (output.CompletedDate !== undefined && output.CompletedDate !== null) {
    contents.CompletedDate = new Date(Math.round(output.CompletedDate * 1000));
  }
  if (
    output.DefaultMailDomain !== undefined &&
    output.DefaultMailDomain !== null
  ) {
    contents.DefaultMailDomain = output.DefaultMailDomain;
  }
  if (output.DirectoryId !== undefined && output.DirectoryId !== null) {
    contents.DirectoryId = output.DirectoryId;
  }
  if (output.DirectoryType !== undefined && output.DirectoryType !== null) {
    contents.DirectoryType = output.DirectoryType;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.OrganizationId !== undefined && output.OrganizationId !== null) {
    contents.OrganizationId = output.OrganizationId;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1DescribeResourceResponse = (
  output: any,
  context: __SerdeContext
): DescribeResourceResponse => {
  let contents: any = {
    __type: "DescribeResourceResponse",
    BookingOptions: undefined,
    DisabledDate: undefined,
    Email: undefined,
    EnabledDate: undefined,
    Name: undefined,
    ResourceId: undefined,
    State: undefined,
    Type: undefined
  };
  if (output.BookingOptions !== undefined && output.BookingOptions !== null) {
    contents.BookingOptions = deserializeAws_json1_1BookingOptions(
      output.BookingOptions,
      context
    );
  }
  if (output.DisabledDate !== undefined && output.DisabledDate !== null) {
    contents.DisabledDate = new Date(Math.round(output.DisabledDate * 1000));
  }
  if (output.Email !== undefined && output.Email !== null) {
    contents.Email = output.Email;
  }
  if (output.EnabledDate !== undefined && output.EnabledDate !== null) {
    contents.EnabledDate = new Date(Math.round(output.EnabledDate * 1000));
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.ResourceId !== undefined && output.ResourceId !== null) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1DescribeUserResponse = (
  output: any,
  context: __SerdeContext
): DescribeUserResponse => {
  let contents: any = {
    __type: "DescribeUserResponse",
    DisabledDate: undefined,
    DisplayName: undefined,
    Email: undefined,
    EnabledDate: undefined,
    Name: undefined,
    State: undefined,
    UserId: undefined,
    UserRole: undefined
  };
  if (output.DisabledDate !== undefined && output.DisabledDate !== null) {
    contents.DisabledDate = new Date(Math.round(output.DisabledDate * 1000));
  }
  if (output.DisplayName !== undefined && output.DisplayName !== null) {
    contents.DisplayName = output.DisplayName;
  }
  if (output.Email !== undefined && output.Email !== null) {
    contents.Email = output.Email;
  }
  if (output.EnabledDate !== undefined && output.EnabledDate !== null) {
    contents.EnabledDate = new Date(Math.round(output.EnabledDate * 1000));
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.UserId !== undefined && output.UserId !== null) {
    contents.UserId = output.UserId;
  }
  if (output.UserRole !== undefined && output.UserRole !== null) {
    contents.UserRole = output.UserRole;
  }
  return contents;
};

const deserializeAws_json1_1DirectoryServiceAuthenticationFailedException = (
  output: any,
  context: __SerdeContext
): DirectoryServiceAuthenticationFailedException => {
  let contents: any = {
    __type: "DirectoryServiceAuthenticationFailedException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1DirectoryUnavailableException = (
  output: any,
  context: __SerdeContext
): DirectoryUnavailableException => {
  let contents: any = {
    __type: "DirectoryUnavailableException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1DisassociateDelegateFromResourceResponse = (
  output: any,
  context: __SerdeContext
): DisassociateDelegateFromResourceResponse => {
  let contents: any = {
    __type: "DisassociateDelegateFromResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1DisassociateMemberFromGroupResponse = (
  output: any,
  context: __SerdeContext
): DisassociateMemberFromGroupResponse => {
  let contents: any = {
    __type: "DisassociateMemberFromGroupResponse"
  };
  return contents;
};

const deserializeAws_json1_1EmailAddressInUseException = (
  output: any,
  context: __SerdeContext
): EmailAddressInUseException => {
  let contents: any = {
    __type: "EmailAddressInUseException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1EntityAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): EntityAlreadyRegisteredException => {
  let contents: any = {
    __type: "EntityAlreadyRegisteredException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1EntityNotFoundException = (
  output: any,
  context: __SerdeContext
): EntityNotFoundException => {
  let contents: any = {
    __type: "EntityNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1EntityStateException = (
  output: any,
  context: __SerdeContext
): EntityStateException => {
  let contents: any = {
    __type: "EntityStateException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1GetMailboxDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetMailboxDetailsResponse => {
  let contents: any = {
    __type: "GetMailboxDetailsResponse",
    MailboxQuota: undefined,
    MailboxSize: undefined
  };
  if (output.MailboxQuota !== undefined && output.MailboxQuota !== null) {
    contents.MailboxQuota = output.MailboxQuota;
  }
  if (output.MailboxSize !== undefined && output.MailboxSize !== null) {
    contents.MailboxSize = output.MailboxSize;
  }
  return contents;
};

const deserializeAws_json1_1Group = (
  output: any,
  context: __SerdeContext
): Group => {
  let contents: any = {
    __type: "Group",
    DisabledDate: undefined,
    Email: undefined,
    EnabledDate: undefined,
    Id: undefined,
    Name: undefined,
    State: undefined
  };
  if (output.DisabledDate !== undefined && output.DisabledDate !== null) {
    contents.DisabledDate = new Date(Math.round(output.DisabledDate * 1000));
  }
  if (output.Email !== undefined && output.Email !== null) {
    contents.Email = output.Email;
  }
  if (output.EnabledDate !== undefined && output.EnabledDate !== null) {
    contents.EnabledDate = new Date(Math.round(output.EnabledDate * 1000));
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1Groups = (
  output: any,
  context: __SerdeContext
): Array<Group> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Group(entry, context)
  );
};

const deserializeAws_json1_1InvalidConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidConfigurationException => {
  let contents: any = {
    __type: "InvalidConfigurationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidPasswordException = (
  output: any,
  context: __SerdeContext
): InvalidPasswordException => {
  let contents: any = {
    __type: "InvalidPasswordException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListAliasesResponse = (
  output: any,
  context: __SerdeContext
): ListAliasesResponse => {
  let contents: any = {
    __type: "ListAliasesResponse",
    Aliases: undefined,
    NextToken: undefined
  };
  if (output.Aliases !== undefined && output.Aliases !== null) {
    contents.Aliases = deserializeAws_json1_1Aliases(output.Aliases, context);
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListGroupMembersResponse = (
  output: any,
  context: __SerdeContext
): ListGroupMembersResponse => {
  let contents: any = {
    __type: "ListGroupMembersResponse",
    Members: undefined,
    NextToken: undefined
  };
  if (output.Members !== undefined && output.Members !== null) {
    contents.Members = deserializeAws_json1_1Members(output.Members, context);
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListGroupsResponse => {
  let contents: any = {
    __type: "ListGroupsResponse",
    Groups: undefined,
    NextToken: undefined
  };
  if (output.Groups !== undefined && output.Groups !== null) {
    contents.Groups = deserializeAws_json1_1Groups(output.Groups, context);
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListMailboxPermissionsResponse = (
  output: any,
  context: __SerdeContext
): ListMailboxPermissionsResponse => {
  let contents: any = {
    __type: "ListMailboxPermissionsResponse",
    NextToken: undefined,
    Permissions: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Permissions !== undefined && output.Permissions !== null) {
    contents.Permissions = deserializeAws_json1_1Permissions(
      output.Permissions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListOrganizationsResponse = (
  output: any,
  context: __SerdeContext
): ListOrganizationsResponse => {
  let contents: any = {
    __type: "ListOrganizationsResponse",
    NextToken: undefined,
    OrganizationSummaries: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.OrganizationSummaries !== undefined &&
    output.OrganizationSummaries !== null
  ) {
    contents.OrganizationSummaries = deserializeAws_json1_1OrganizationSummaries(
      output.OrganizationSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListResourceDelegatesResponse = (
  output: any,
  context: __SerdeContext
): ListResourceDelegatesResponse => {
  let contents: any = {
    __type: "ListResourceDelegatesResponse",
    Delegates: undefined,
    NextToken: undefined
  };
  if (output.Delegates !== undefined && output.Delegates !== null) {
    contents.Delegates = deserializeAws_json1_1ResourceDelegates(
      output.Delegates,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListResourcesResponse = (
  output: any,
  context: __SerdeContext
): ListResourcesResponse => {
  let contents: any = {
    __type: "ListResourcesResponse",
    NextToken: undefined,
    Resources: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Resources !== undefined && output.Resources !== null) {
    contents.Resources = deserializeAws_json1_1Resources(
      output.Resources,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListUsersResponse = (
  output: any,
  context: __SerdeContext
): ListUsersResponse => {
  let contents: any = {
    __type: "ListUsersResponse",
    NextToken: undefined,
    Users: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Users !== undefined && output.Users !== null) {
    contents.Users = deserializeAws_json1_1Users(output.Users, context);
  }
  return contents;
};

const deserializeAws_json1_1MailDomainNotFoundException = (
  output: any,
  context: __SerdeContext
): MailDomainNotFoundException => {
  let contents: any = {
    __type: "MailDomainNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1MailDomainStateException = (
  output: any,
  context: __SerdeContext
): MailDomainStateException => {
  let contents: any = {
    __type: "MailDomainStateException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Member = (
  output: any,
  context: __SerdeContext
): Member => {
  let contents: any = {
    __type: "Member",
    DisabledDate: undefined,
    EnabledDate: undefined,
    Id: undefined,
    Name: undefined,
    State: undefined,
    Type: undefined
  };
  if (output.DisabledDate !== undefined && output.DisabledDate !== null) {
    contents.DisabledDate = new Date(Math.round(output.DisabledDate * 1000));
  }
  if (output.EnabledDate !== undefined && output.EnabledDate !== null) {
    contents.EnabledDate = new Date(Math.round(output.EnabledDate * 1000));
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1Members = (
  output: any,
  context: __SerdeContext
): Array<Member> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Member(entry, context)
  );
};

const deserializeAws_json1_1NameAvailabilityException = (
  output: any,
  context: __SerdeContext
): NameAvailabilityException => {
  let contents: any = {
    __type: "NameAvailabilityException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1OrganizationNotFoundException = (
  output: any,
  context: __SerdeContext
): OrganizationNotFoundException => {
  let contents: any = {
    __type: "OrganizationNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1OrganizationStateException = (
  output: any,
  context: __SerdeContext
): OrganizationStateException => {
  let contents: any = {
    __type: "OrganizationStateException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1OrganizationSummaries = (
  output: any,
  context: __SerdeContext
): Array<OrganizationSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OrganizationSummary(entry, context)
  );
};

const deserializeAws_json1_1OrganizationSummary = (
  output: any,
  context: __SerdeContext
): OrganizationSummary => {
  let contents: any = {
    __type: "OrganizationSummary",
    Alias: undefined,
    ErrorMessage: undefined,
    OrganizationId: undefined,
    State: undefined
  };
  if (output.Alias !== undefined && output.Alias !== null) {
    contents.Alias = output.Alias;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  if (output.OrganizationId !== undefined && output.OrganizationId !== null) {
    contents.OrganizationId = output.OrganizationId;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1Permission = (
  output: any,
  context: __SerdeContext
): Permission => {
  let contents: any = {
    __type: "Permission",
    GranteeId: undefined,
    GranteeType: undefined,
    PermissionValues: undefined
  };
  if (output.GranteeId !== undefined && output.GranteeId !== null) {
    contents.GranteeId = output.GranteeId;
  }
  if (output.GranteeType !== undefined && output.GranteeType !== null) {
    contents.GranteeType = output.GranteeType;
  }
  if (
    output.PermissionValues !== undefined &&
    output.PermissionValues !== null
  ) {
    contents.PermissionValues = deserializeAws_json1_1PermissionValues(
      output.PermissionValues,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PermissionValues = (
  output: any,
  context: __SerdeContext
): Array<PermissionType | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Permissions = (
  output: any,
  context: __SerdeContext
): Array<Permission> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Permission(entry, context)
  );
};

const deserializeAws_json1_1PutMailboxPermissionsResponse = (
  output: any,
  context: __SerdeContext
): PutMailboxPermissionsResponse => {
  let contents: any = {
    __type: "PutMailboxPermissionsResponse"
  };
  return contents;
};

const deserializeAws_json1_1RegisterToWorkMailResponse = (
  output: any,
  context: __SerdeContext
): RegisterToWorkMailResponse => {
  let contents: any = {
    __type: "RegisterToWorkMailResponse"
  };
  return contents;
};

const deserializeAws_json1_1ReservedNameException = (
  output: any,
  context: __SerdeContext
): ReservedNameException => {
  let contents: any = {
    __type: "ReservedNameException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResetPasswordResponse = (
  output: any,
  context: __SerdeContext
): ResetPasswordResponse => {
  let contents: any = {
    __type: "ResetPasswordResponse"
  };
  return contents;
};

const deserializeAws_json1_1Resource = (
  output: any,
  context: __SerdeContext
): Resource => {
  let contents: any = {
    __type: "Resource",
    DisabledDate: undefined,
    Email: undefined,
    EnabledDate: undefined,
    Id: undefined,
    Name: undefined,
    State: undefined,
    Type: undefined
  };
  if (output.DisabledDate !== undefined && output.DisabledDate !== null) {
    contents.DisabledDate = new Date(Math.round(output.DisabledDate * 1000));
  }
  if (output.Email !== undefined && output.Email !== null) {
    contents.Email = output.Email;
  }
  if (output.EnabledDate !== undefined && output.EnabledDate !== null) {
    contents.EnabledDate = new Date(Math.round(output.EnabledDate * 1000));
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1ResourceDelegates = (
  output: any,
  context: __SerdeContext
): Array<Delegate> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Delegate(entry, context)
  );
};

const deserializeAws_json1_1Resources = (
  output: any,
  context: __SerdeContext
): Array<Resource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Resource(entry, context)
  );
};

const deserializeAws_json1_1UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  let contents: any = {
    __type: "UnsupportedOperationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1UpdateMailboxQuotaResponse = (
  output: any,
  context: __SerdeContext
): UpdateMailboxQuotaResponse => {
  let contents: any = {
    __type: "UpdateMailboxQuotaResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdatePrimaryEmailAddressResponse = (
  output: any,
  context: __SerdeContext
): UpdatePrimaryEmailAddressResponse => {
  let contents: any = {
    __type: "UpdatePrimaryEmailAddressResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateResourceResponse = (
  output: any,
  context: __SerdeContext
): UpdateResourceResponse => {
  let contents: any = {
    __type: "UpdateResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1User = (
  output: any,
  context: __SerdeContext
): User => {
  let contents: any = {
    __type: "User",
    DisabledDate: undefined,
    DisplayName: undefined,
    Email: undefined,
    EnabledDate: undefined,
    Id: undefined,
    Name: undefined,
    State: undefined,
    UserRole: undefined
  };
  if (output.DisabledDate !== undefined && output.DisabledDate !== null) {
    contents.DisabledDate = new Date(Math.round(output.DisabledDate * 1000));
  }
  if (output.DisplayName !== undefined && output.DisplayName !== null) {
    contents.DisplayName = output.DisplayName;
  }
  if (output.Email !== undefined && output.Email !== null) {
    contents.Email = output.Email;
  }
  if (output.EnabledDate !== undefined && output.EnabledDate !== null) {
    contents.EnabledDate = new Date(Math.round(output.EnabledDate * 1000));
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.UserRole !== undefined && output.UserRole !== null) {
    contents.UserRole = output.UserRole;
  }
  return contents;
};

const deserializeAws_json1_1Users = (
  output: any,
  context: __SerdeContext
): Array<User> => {
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
