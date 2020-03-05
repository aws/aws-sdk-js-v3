import {
  AcceptResourceShareInvitationCommandInput,
  AcceptResourceShareInvitationCommandOutput
} from "../commands/AcceptResourceShareInvitationCommand";
import {
  AssociateResourceShareCommandInput,
  AssociateResourceShareCommandOutput
} from "../commands/AssociateResourceShareCommand";
import {
  AssociateResourceSharePermissionCommandInput,
  AssociateResourceSharePermissionCommandOutput
} from "../commands/AssociateResourceSharePermissionCommand";
import {
  CreateResourceShareCommandInput,
  CreateResourceShareCommandOutput
} from "../commands/CreateResourceShareCommand";
import {
  DeleteResourceShareCommandInput,
  DeleteResourceShareCommandOutput
} from "../commands/DeleteResourceShareCommand";
import {
  DisassociateResourceShareCommandInput,
  DisassociateResourceShareCommandOutput
} from "../commands/DisassociateResourceShareCommand";
import {
  DisassociateResourceSharePermissionCommandInput,
  DisassociateResourceSharePermissionCommandOutput
} from "../commands/DisassociateResourceSharePermissionCommand";
import {
  EnableSharingWithAwsOrganizationCommandInput,
  EnableSharingWithAwsOrganizationCommandOutput
} from "../commands/EnableSharingWithAwsOrganizationCommand";
import {
  GetPermissionCommandInput,
  GetPermissionCommandOutput
} from "../commands/GetPermissionCommand";
import {
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput
} from "../commands/GetResourcePoliciesCommand";
import {
  GetResourceShareAssociationsCommandInput,
  GetResourceShareAssociationsCommandOutput
} from "../commands/GetResourceShareAssociationsCommand";
import {
  GetResourceShareInvitationsCommandInput,
  GetResourceShareInvitationsCommandOutput
} from "../commands/GetResourceShareInvitationsCommand";
import {
  GetResourceSharesCommandInput,
  GetResourceSharesCommandOutput
} from "../commands/GetResourceSharesCommand";
import {
  ListPendingInvitationResourcesCommandInput,
  ListPendingInvitationResourcesCommandOutput
} from "../commands/ListPendingInvitationResourcesCommand";
import {
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput
} from "../commands/ListPermissionsCommand";
import {
  ListPrincipalsCommandInput,
  ListPrincipalsCommandOutput
} from "../commands/ListPrincipalsCommand";
import {
  ListResourceSharePermissionsCommandInput,
  ListResourceSharePermissionsCommandOutput
} from "../commands/ListResourceSharePermissionsCommand";
import {
  ListResourcesCommandInput,
  ListResourcesCommandOutput
} from "../commands/ListResourcesCommand";
import {
  PromoteResourceShareCreatedFromPolicyCommandInput,
  PromoteResourceShareCreatedFromPolicyCommandOutput
} from "../commands/PromoteResourceShareCreatedFromPolicyCommand";
import {
  RejectResourceShareInvitationCommandInput,
  RejectResourceShareInvitationCommandOutput
} from "../commands/RejectResourceShareInvitationCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateResourceShareCommandInput,
  UpdateResourceShareCommandOutput
} from "../commands/UpdateResourceShareCommand";
import {
  IdempotentParameterMismatchException,
  InvalidClientTokenException,
  InvalidMaxResultsException,
  InvalidNextTokenException,
  InvalidParameterException,
  InvalidResourceTypeException,
  InvalidStateTransitionException,
  MalformedArnException,
  MissingRequiredParameterException,
  OperationNotPermittedException,
  Principal,
  Resource,
  ResourceArnNotFoundException,
  ResourceShare,
  ResourceShareAssociation,
  ResourceShareInvitation,
  ResourceShareInvitationAlreadyAcceptedException,
  ResourceShareInvitationAlreadyRejectedException,
  ResourceShareInvitationArnNotFoundException,
  ResourceShareInvitationExpiredException,
  ResourceShareLimitExceededException,
  ResourceSharePermissionDetail,
  ResourceSharePermissionSummary,
  ServerInternalException,
  ServiceUnavailableException,
  Tag,
  TagFilter,
  TagLimitExceededException,
  TagPolicyViolationException,
  UnknownResourceException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1AcceptResourceShareInvitationCommand(
  input: AcceptResourceShareInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/acceptresourceshareinvitation";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.resourceShareInvitationArn !== undefined) {
    bodyParams["resourceShareInvitationArn"] = input.resourceShareInvitationArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1AssociateResourceShareCommand(
  input: AssociateResourceShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/associateresourceshare";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.principals !== undefined) {
    bodyParams["principals"] = serializeAws_restJson1_1PrincipalArnOrIdList(
      input.principals,
      context
    );
  }
  if (input.resourceArns !== undefined) {
    bodyParams["resourceArns"] = serializeAws_restJson1_1ResourceArnList(
      input.resourceArns,
      context
    );
  }
  if (input.resourceShareArn !== undefined) {
    bodyParams["resourceShareArn"] = input.resourceShareArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1AssociateResourceSharePermissionCommand(
  input: AssociateResourceSharePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/associateresourcesharepermission";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.permissionArn !== undefined) {
    bodyParams["permissionArn"] = input.permissionArn;
  }
  if (input.replace !== undefined) {
    bodyParams["replace"] = input.replace;
  }
  if (input.resourceShareArn !== undefined) {
    bodyParams["resourceShareArn"] = input.resourceShareArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateResourceShareCommand(
  input: CreateResourceShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/createresourceshare";
  let body: any;
  const bodyParams: any = {};
  if (input.allowExternalPrincipals !== undefined) {
    bodyParams["allowExternalPrincipals"] = input.allowExternalPrincipals;
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.permissionArns !== undefined) {
    bodyParams["permissionArns"] = serializeAws_restJson1_1PermissionArnList(
      input.permissionArns,
      context
    );
  }
  if (input.principals !== undefined) {
    bodyParams["principals"] = serializeAws_restJson1_1PrincipalArnOrIdList(
      input.principals,
      context
    );
  }
  if (input.resourceArns !== undefined) {
    bodyParams["resourceArns"] = serializeAws_restJson1_1ResourceArnList(
      input.resourceArns,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteResourceShareCommand(
  input: DeleteResourceShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/deleteresourceshare";
  const query: any = {};
  if (input.clientToken !== undefined) {
    query["clientToken"] = input.clientToken;
  }
  if (input.resourceShareArn !== undefined) {
    query["resourceShareArn"] = input.resourceShareArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DisassociateResourceShareCommand(
  input: DisassociateResourceShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/disassociateresourceshare";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.principals !== undefined) {
    bodyParams["principals"] = serializeAws_restJson1_1PrincipalArnOrIdList(
      input.principals,
      context
    );
  }
  if (input.resourceArns !== undefined) {
    bodyParams["resourceArns"] = serializeAws_restJson1_1ResourceArnList(
      input.resourceArns,
      context
    );
  }
  if (input.resourceShareArn !== undefined) {
    bodyParams["resourceShareArn"] = input.resourceShareArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DisassociateResourceSharePermissionCommand(
  input: DisassociateResourceSharePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/disassociateresourcesharepermission";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.permissionArn !== undefined) {
    bodyParams["permissionArn"] = input.permissionArn;
  }
  if (input.resourceShareArn !== undefined) {
    bodyParams["resourceShareArn"] = input.resourceShareArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1EnableSharingWithAwsOrganizationCommand(
  input: EnableSharingWithAwsOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/enablesharingwithawsorganization";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetPermissionCommand(
  input: GetPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/getpermission";
  let body: any;
  const bodyParams: any = {};
  if (input.permissionArn !== undefined) {
    bodyParams["permissionArn"] = input.permissionArn;
  }
  if (input.permissionVersion !== undefined) {
    bodyParams["permissionVersion"] = input.permissionVersion;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetResourcePoliciesCommand(
  input: GetResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/getresourcepolicies";
  let body: any;
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.principal !== undefined) {
    bodyParams["principal"] = input.principal;
  }
  if (input.resourceArns !== undefined) {
    bodyParams["resourceArns"] = serializeAws_restJson1_1ResourceArnList(
      input.resourceArns,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetResourceShareAssociationsCommand(
  input: GetResourceShareAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/getresourceshareassociations";
  let body: any;
  const bodyParams: any = {};
  if (input.associationStatus !== undefined) {
    bodyParams["associationStatus"] = input.associationStatus;
  }
  if (input.associationType !== undefined) {
    bodyParams["associationType"] = input.associationType;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.principal !== undefined) {
    bodyParams["principal"] = input.principal;
  }
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.resourceShareArns !== undefined) {
    bodyParams[
      "resourceShareArns"
    ] = serializeAws_restJson1_1ResourceShareArnList(
      input.resourceShareArns,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetResourceShareInvitationsCommand(
  input: GetResourceShareInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/getresourceshareinvitations";
  let body: any;
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.resourceShareArns !== undefined) {
    bodyParams[
      "resourceShareArns"
    ] = serializeAws_restJson1_1ResourceShareArnList(
      input.resourceShareArns,
      context
    );
  }
  if (input.resourceShareInvitationArns !== undefined) {
    bodyParams[
      "resourceShareInvitationArns"
    ] = serializeAws_restJson1_1ResourceShareInvitationArnList(
      input.resourceShareInvitationArns,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetResourceSharesCommand(
  input: GetResourceSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/getresourceshares";
  let body: any;
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.resourceOwner !== undefined) {
    bodyParams["resourceOwner"] = input.resourceOwner;
  }
  if (input.resourceShareArns !== undefined) {
    bodyParams[
      "resourceShareArns"
    ] = serializeAws_restJson1_1ResourceShareArnList(
      input.resourceShareArns,
      context
    );
  }
  if (input.resourceShareStatus !== undefined) {
    bodyParams["resourceShareStatus"] = input.resourceShareStatus;
  }
  if (input.tagFilters !== undefined) {
    bodyParams["tagFilters"] = serializeAws_restJson1_1TagFilters(
      input.tagFilters,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListPendingInvitationResourcesCommand(
  input: ListPendingInvitationResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listpendinginvitationresources";
  let body: any;
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.resourceShareInvitationArn !== undefined) {
    bodyParams["resourceShareInvitationArn"] = input.resourceShareInvitationArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListPermissionsCommand(
  input: ListPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listpermissions";
  let body: any;
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.resourceType !== undefined) {
    bodyParams["resourceType"] = input.resourceType;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListPrincipalsCommand(
  input: ListPrincipalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listprincipals";
  let body: any;
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.principals !== undefined) {
    bodyParams["principals"] = serializeAws_restJson1_1PrincipalArnOrIdList(
      input.principals,
      context
    );
  }
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.resourceOwner !== undefined) {
    bodyParams["resourceOwner"] = input.resourceOwner;
  }
  if (input.resourceShareArns !== undefined) {
    bodyParams[
      "resourceShareArns"
    ] = serializeAws_restJson1_1ResourceShareArnList(
      input.resourceShareArns,
      context
    );
  }
  if (input.resourceType !== undefined) {
    bodyParams["resourceType"] = input.resourceType;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListResourceSharePermissionsCommand(
  input: ListResourceSharePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listresourcesharepermissions";
  let body: any;
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.resourceShareArn !== undefined) {
    bodyParams["resourceShareArn"] = input.resourceShareArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListResourcesCommand(
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listresources";
  let body: any;
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.principal !== undefined) {
    bodyParams["principal"] = input.principal;
  }
  if (input.resourceArns !== undefined) {
    bodyParams["resourceArns"] = serializeAws_restJson1_1ResourceArnList(
      input.resourceArns,
      context
    );
  }
  if (input.resourceOwner !== undefined) {
    bodyParams["resourceOwner"] = input.resourceOwner;
  }
  if (input.resourceShareArns !== undefined) {
    bodyParams[
      "resourceShareArns"
    ] = serializeAws_restJson1_1ResourceShareArnList(
      input.resourceShareArns,
      context
    );
  }
  if (input.resourceType !== undefined) {
    bodyParams["resourceType"] = input.resourceType;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PromoteResourceShareCreatedFromPolicyCommand(
  input: PromoteResourceShareCreatedFromPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/promoteresourcesharecreatedfrompolicy";
  const query: any = {};
  if (input.resourceShareArn !== undefined) {
    query["resourceShareArn"] = input.resourceShareArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1RejectResourceShareInvitationCommand(
  input: RejectResourceShareInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/rejectresourceshareinvitation";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.resourceShareInvitationArn !== undefined) {
    bodyParams["resourceShareInvitationArn"] = input.resourceShareInvitationArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tagresource";
  let body: any;
  const bodyParams: any = {};
  if (input.resourceShareArn !== undefined) {
    bodyParams["resourceShareArn"] = input.resourceShareArn;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagList(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/untagresource";
  let body: any;
  const bodyParams: any = {};
  if (input.resourceShareArn !== undefined) {
    bodyParams["resourceShareArn"] = input.resourceShareArn;
  }
  if (input.tagKeys !== undefined) {
    bodyParams["tagKeys"] = serializeAws_restJson1_1TagKeyList(
      input.tagKeys,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateResourceShareCommand(
  input: UpdateResourceShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/updateresourceshare";
  let body: any;
  const bodyParams: any = {};
  if (input.allowExternalPrincipals !== undefined) {
    bodyParams["allowExternalPrincipals"] = input.allowExternalPrincipals;
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.resourceShareArn !== undefined) {
    bodyParams["resourceShareArn"] = input.resourceShareArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1AcceptResourceShareInvitationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptResourceShareInvitationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AcceptResourceShareInvitationCommandError(
      output,
      context
    );
  }
  const contents: AcceptResourceShareInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AcceptResourceShareInvitationResponse",
    clientToken: undefined,
    resourceShareInvitation: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (
    data.resourceShareInvitation !== undefined &&
    data.resourceShareInvitation !== null
  ) {
    contents.resourceShareInvitation = deserializeAws_restJson1_1ResourceShareInvitation(
      data.resourceShareInvitation,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AcceptResourceShareInvitationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptResourceShareInvitationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.resourcesharing.V2018_01_04#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationAlreadyAcceptedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationAlreadyAcceptedException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationAlreadyAcceptedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationAlreadyRejectedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationAlreadyRejectedException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationAlreadyRejectedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationArnNotFoundException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationArnNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationArnNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationExpiredException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationExpiredException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationExpiredExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1AssociateResourceShareCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceShareCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AssociateResourceShareCommandError(
      output,
      context
    );
  }
  const contents: AssociateResourceShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateResourceShareResponse",
    clientToken: undefined,
    resourceShareAssociations: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (
    data.resourceShareAssociations !== undefined &&
    data.resourceShareAssociations !== null
  ) {
    contents.resourceShareAssociations = deserializeAws_restJson1_1ResourceShareAssociationList(
      data.resourceShareAssociations,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AssociateResourceShareCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceShareCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.resourcesharing.V2018_01_04#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateTransitionException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidStateTransitionException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidStateTransitionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareLimitExceededException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1AssociateResourceSharePermissionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceSharePermissionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AssociateResourceSharePermissionCommandError(
      output,
      context
    );
  }
  const contents: AssociateResourceSharePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateResourceSharePermissionResponse",
    clientToken: undefined,
    returnValue: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (data.returnValue !== undefined && data.returnValue !== null) {
    contents.returnValue = data.returnValue;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AssociateResourceSharePermissionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceSharePermissionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1CreateResourceShareCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceShareCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateResourceShareCommandError(
      output,
      context
    );
  }
  const contents: CreateResourceShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateResourceShareResponse",
    clientToken: undefined,
    resourceShare: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (data.resourceShare !== undefined && data.resourceShare !== null) {
    contents.resourceShare = deserializeAws_restJson1_1ResourceShare(
      data.resourceShare,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateResourceShareCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceShareCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.resourcesharing.V2018_01_04#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateTransitionException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidStateTransitionException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidStateTransitionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareLimitExceededException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagPolicyViolationException":
    case "com.amazonaws.resourcesharing.V2018_01_04#TagPolicyViolationException":
      response = {
        ...(await deserializeAws_restJson1_1TagPolicyViolationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DeleteResourceShareCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceShareCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteResourceShareCommandError(
      output,
      context
    );
  }
  const contents: DeleteResourceShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteResourceShareResponse",
    clientToken: undefined,
    returnValue: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (data.returnValue !== undefined && data.returnValue !== null) {
    contents.returnValue = data.returnValue;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteResourceShareCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceShareCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.resourcesharing.V2018_01_04#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateTransitionException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidStateTransitionException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidStateTransitionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DisassociateResourceShareCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceShareCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DisassociateResourceShareCommandError(
      output,
      context
    );
  }
  const contents: DisassociateResourceShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateResourceShareResponse",
    clientToken: undefined,
    resourceShareAssociations: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (
    data.resourceShareAssociations !== undefined &&
    data.resourceShareAssociations !== null
  ) {
    contents.resourceShareAssociations = deserializeAws_restJson1_1ResourceShareAssociationList(
      data.resourceShareAssociations,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisassociateResourceShareCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceShareCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.resourcesharing.V2018_01_04#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateTransitionException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidStateTransitionException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidStateTransitionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareLimitExceededException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DisassociateResourceSharePermissionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceSharePermissionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DisassociateResourceSharePermissionCommandError(
      output,
      context
    );
  }
  const contents: DisassociateResourceSharePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateResourceSharePermissionResponse",
    clientToken: undefined,
    returnValue: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (data.returnValue !== undefined && data.returnValue !== null) {
    contents.returnValue = data.returnValue;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisassociateResourceSharePermissionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceSharePermissionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1EnableSharingWithAwsOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSharingWithAwsOrganizationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1EnableSharingWithAwsOrganizationCommandError(
      output,
      context
    );
  }
  const contents: EnableSharingWithAwsOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableSharingWithAwsOrganizationResponse",
    returnValue: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.returnValue !== undefined && data.returnValue !== null) {
    contents.returnValue = data.returnValue;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1EnableSharingWithAwsOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSharingWithAwsOrganizationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1GetPermissionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetPermissionCommandError(output, context);
  }
  const contents: GetPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPermissionResponse",
    permission: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.permission !== undefined && data.permission !== null) {
    contents.permission = deserializeAws_restJson1_1ResourceSharePermissionDetail(
      data.permission,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetPermissionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1GetResourcePoliciesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetResourcePoliciesCommandError(
      output,
      context
    );
  }
  const contents: GetResourcePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResourcePoliciesResponse",
    nextToken: undefined,
    policies: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.policies !== undefined && data.policies !== null) {
    contents.policies = deserializeAws_restJson1_1PolicyList(
      data.policies,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetResourcePoliciesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1GetResourceShareAssociationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceShareAssociationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetResourceShareAssociationsCommandError(
      output,
      context
    );
  }
  const contents: GetResourceShareAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResourceShareAssociationsResponse",
    nextToken: undefined,
    resourceShareAssociations: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (
    data.resourceShareAssociations !== undefined &&
    data.resourceShareAssociations !== null
  ) {
    contents.resourceShareAssociations = deserializeAws_restJson1_1ResourceShareAssociationList(
      data.resourceShareAssociations,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetResourceShareAssociationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceShareAssociationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1GetResourceShareInvitationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceShareInvitationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetResourceShareInvitationsCommandError(
      output,
      context
    );
  }
  const contents: GetResourceShareInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResourceShareInvitationsResponse",
    nextToken: undefined,
    resourceShareInvitations: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (
    data.resourceShareInvitations !== undefined &&
    data.resourceShareInvitations !== null
  ) {
    contents.resourceShareInvitations = deserializeAws_restJson1_1ResourceShareInvitationList(
      data.resourceShareInvitations,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetResourceShareInvitationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceShareInvitationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidMaxResultsException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidMaxResultsException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidMaxResultsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationArnNotFoundException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationArnNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationArnNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1GetResourceSharesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceSharesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetResourceSharesCommandError(
      output,
      context
    );
  }
  const contents: GetResourceSharesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetResourceSharesResponse",
    nextToken: undefined,
    resourceShares: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.resourceShares !== undefined && data.resourceShares !== null) {
    contents.resourceShares = deserializeAws_restJson1_1ResourceShareList(
      data.resourceShares,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetResourceSharesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceSharesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1ListPendingInvitationResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPendingInvitationResourcesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListPendingInvitationResourcesCommandError(
      output,
      context
    );
  }
  const contents: ListPendingInvitationResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPendingInvitationResourcesResponse",
    nextToken: undefined,
    resources: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.resources !== undefined && data.resources !== null) {
    contents.resources = deserializeAws_restJson1_1ResourceList(
      data.resources,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListPendingInvitationResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPendingInvitationResourcesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_restJson1_1MissingRequiredParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationAlreadyRejectedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationAlreadyRejectedException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationAlreadyRejectedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationArnNotFoundException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationArnNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationArnNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationExpiredException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationExpiredException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationExpiredExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1ListPermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListPermissionsCommandError(
      output,
      context
    );
  }
  const contents: ListPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPermissionsResponse",
    nextToken: undefined,
    permissions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.permissions !== undefined && data.permissions !== null) {
    contents.permissions = deserializeAws_restJson1_1ResourceSharePermissionList(
      data.permissions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListPermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1ListPrincipalsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrincipalsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListPrincipalsCommandError(
      output,
      context
    );
  }
  const contents: ListPrincipalsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPrincipalsResponse",
    nextToken: undefined,
    principals: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.principals !== undefined && data.principals !== null) {
    contents.principals = deserializeAws_restJson1_1PrincipalList(
      data.principals,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListPrincipalsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrincipalsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1ListResourceSharePermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSharePermissionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListResourceSharePermissionsCommandError(
      output,
      context
    );
  }
  const contents: ListResourceSharePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResourceSharePermissionsResponse",
    nextToken: undefined,
    permissions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.permissions !== undefined && data.permissions !== null) {
    contents.permissions = deserializeAws_restJson1_1ResourceSharePermissionList(
      data.permissions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListResourceSharePermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSharePermissionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1ListResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListResourcesCommandError(output, context);
  }
  const contents: ListResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResourcesResponse",
    nextToken: undefined,
    resources: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.resources !== undefined && data.resources !== null) {
    contents.resources = deserializeAws_restJson1_1ResourceList(
      data.resources,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceTypeException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidResourceTypeException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidResourceTypeExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1PromoteResourceShareCreatedFromPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteResourceShareCreatedFromPolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PromoteResourceShareCreatedFromPolicyCommandError(
      output,
      context
    );
  }
  const contents: PromoteResourceShareCreatedFromPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PromoteResourceShareCreatedFromPolicyResponse",
    returnValue: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.returnValue !== undefined && data.returnValue !== null) {
    contents.returnValue = data.returnValue;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PromoteResourceShareCreatedFromPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteResourceShareCreatedFromPolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_restJson1_1MissingRequiredParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1RejectResourceShareInvitationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectResourceShareInvitationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RejectResourceShareInvitationCommandError(
      output,
      context
    );
  }
  const contents: RejectResourceShareInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RejectResourceShareInvitationResponse",
    clientToken: undefined,
    resourceShareInvitation: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (
    data.resourceShareInvitation !== undefined &&
    data.resourceShareInvitation !== null
  ) {
    contents.resourceShareInvitation = deserializeAws_restJson1_1ResourceShareInvitation(
      data.resourceShareInvitation,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RejectResourceShareInvitationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectResourceShareInvitationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.resourcesharing.V2018_01_04#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationAlreadyAcceptedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationAlreadyAcceptedException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationAlreadyAcceptedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationAlreadyRejectedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationAlreadyRejectedException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationAlreadyRejectedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationArnNotFoundException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationArnNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationArnNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationExpiredException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationExpiredException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationExpiredExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceArnNotFoundException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceArnNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceArnNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagLimitExceededException":
    case "com.amazonaws.resourcesharing.V2018_01_04#TagLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1TagLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagPolicyViolationException":
    case "com.amazonaws.resourcesharing.V2018_01_04#TagPolicyViolationException":
      response = {
        ...(await deserializeAws_restJson1_1TagPolicyViolationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1UpdateResourceShareCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceShareCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateResourceShareCommandError(
      output,
      context
    );
  }
  const contents: UpdateResourceShareCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateResourceShareResponse",
    clientToken: undefined,
    resourceShare: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (data.resourceShare !== undefined && data.resourceShare !== null) {
    contents.resourceShare = deserializeAws_restJson1_1ResourceShare(
      data.resourceShare,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateResourceShareCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceShareCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.resourcesharing.V2018_01_04#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_restJson1_1MissingRequiredParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

const deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const contents: IdempotentParameterMismatchException = {
    name: "IdempotentParameterMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidClientTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidClientTokenException> => {
  const contents: InvalidClientTokenException = {
    name: "InvalidClientTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidMaxResultsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidMaxResultsException> => {
  const contents: InvalidMaxResultsException = {
    name: "InvalidMaxResultsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidNextTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidParameterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidResourceTypeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidResourceTypeException> => {
  const contents: InvalidResourceTypeException = {
    name: "InvalidResourceTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidStateTransitionExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidStateTransitionException> => {
  const contents: InvalidStateTransitionException = {
    name: "InvalidStateTransitionException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1MalformedArnExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MalformedArnException> => {
  const contents: MalformedArnException = {
    name: "MalformedArnException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1MissingRequiredParameterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MissingRequiredParameterException> => {
  const contents: MissingRequiredParameterException = {
    name: "MissingRequiredParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1OperationNotPermittedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const contents: OperationNotPermittedException = {
    name: "OperationNotPermittedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceArnNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceArnNotFoundException> => {
  const contents: ResourceArnNotFoundException = {
    name: "ResourceArnNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceShareInvitationAlreadyAcceptedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceShareInvitationAlreadyAcceptedException> => {
  const contents: ResourceShareInvitationAlreadyAcceptedException = {
    name: "ResourceShareInvitationAlreadyAcceptedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceShareInvitationAlreadyRejectedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceShareInvitationAlreadyRejectedException> => {
  const contents: ResourceShareInvitationAlreadyRejectedException = {
    name: "ResourceShareInvitationAlreadyRejectedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceShareInvitationArnNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceShareInvitationArnNotFoundException> => {
  const contents: ResourceShareInvitationArnNotFoundException = {
    name: "ResourceShareInvitationArnNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceShareInvitationExpiredExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceShareInvitationExpiredException> => {
  const contents: ResourceShareInvitationExpiredException = {
    name: "ResourceShareInvitationExpiredException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceShareLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceShareLimitExceededException> => {
  const contents: ResourceShareLimitExceededException = {
    name: "ResourceShareLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServerInternalExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServerInternalException> => {
  const contents: ServerInternalException = {
    name: "ServerInternalException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TagLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TagLimitExceededException> => {
  const contents: TagLimitExceededException = {
    name: "TagLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TagPolicyViolationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TagPolicyViolationException> => {
  const contents: TagPolicyViolationException = {
    name: "TagPolicyViolationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnknownResourceExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnknownResourceException> => {
  const contents: UnknownResourceException = {
    name: "UnknownResourceException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1PermissionArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1PrincipalArnOrIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1ResourceArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1ResourceShareArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1ResourceShareInvitationArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TagFilter = (
  input: TagFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.tagKey !== undefined) {
    bodyParams["tagKey"] = input.tagKey;
  }
  if (input.tagValues !== undefined) {
    bodyParams["tagValues"] = serializeAws_restJson1_1TagValueList(
      input.tagValues,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1TagFilters = (
  input: Array<TagFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1TagFilter(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1TagValueList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const deserializeAws_restJson1_1PolicyList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Principal = (
  output: any,
  context: __SerdeContext
): Principal => {
  let contents: any = {
    __type: "Principal",
    creationTime: undefined,
    external: undefined,
    id: undefined,
    lastUpdatedTime: undefined,
    resourceShareArn: undefined
  };
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = new Date(Math.round(output.creationTime * 1000));
  }
  if (output.external !== undefined && output.external !== null) {
    contents.external = output.external;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = new Date(
      Math.round(output.lastUpdatedTime * 1000)
    );
  }
  if (
    output.resourceShareArn !== undefined &&
    output.resourceShareArn !== null
  ) {
    contents.resourceShareArn = output.resourceShareArn;
  }
  return contents;
};

const deserializeAws_restJson1_1PrincipalList = (
  output: any,
  context: __SerdeContext
): Array<Principal> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Principal(entry, context)
  );
};

const deserializeAws_restJson1_1Resource = (
  output: any,
  context: __SerdeContext
): Resource => {
  let contents: any = {
    __type: "Resource",
    arn: undefined,
    creationTime: undefined,
    lastUpdatedTime: undefined,
    resourceGroupArn: undefined,
    resourceShareArn: undefined,
    status: undefined,
    statusMessage: undefined,
    type: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = new Date(Math.round(output.creationTime * 1000));
  }
  if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = new Date(
      Math.round(output.lastUpdatedTime * 1000)
    );
  }
  if (
    output.resourceGroupArn !== undefined &&
    output.resourceGroupArn !== null
  ) {
    contents.resourceGroupArn = output.resourceGroupArn;
  }
  if (
    output.resourceShareArn !== undefined &&
    output.resourceShareArn !== null
  ) {
    contents.resourceShareArn = output.resourceShareArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.statusMessage !== undefined && output.statusMessage !== null) {
    contents.statusMessage = output.statusMessage;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceList = (
  output: any,
  context: __SerdeContext
): Array<Resource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Resource(entry, context)
  );
};

const deserializeAws_restJson1_1ResourceShare = (
  output: any,
  context: __SerdeContext
): ResourceShare => {
  let contents: any = {
    __type: "ResourceShare",
    allowExternalPrincipals: undefined,
    creationTime: undefined,
    featureSet: undefined,
    lastUpdatedTime: undefined,
    name: undefined,
    owningAccountId: undefined,
    resourceShareArn: undefined,
    status: undefined,
    statusMessage: undefined,
    tags: undefined
  };
  if (
    output.allowExternalPrincipals !== undefined &&
    output.allowExternalPrincipals !== null
  ) {
    contents.allowExternalPrincipals = output.allowExternalPrincipals;
  }
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = new Date(Math.round(output.creationTime * 1000));
  }
  if (output.featureSet !== undefined && output.featureSet !== null) {
    contents.featureSet = output.featureSet;
  }
  if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = new Date(
      Math.round(output.lastUpdatedTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.owningAccountId !== undefined && output.owningAccountId !== null) {
    contents.owningAccountId = output.owningAccountId;
  }
  if (
    output.resourceShareArn !== undefined &&
    output.resourceShareArn !== null
  ) {
    contents.resourceShareArn = output.resourceShareArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.statusMessage !== undefined && output.statusMessage !== null) {
    contents.statusMessage = output.statusMessage;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceShareAssociation = (
  output: any,
  context: __SerdeContext
): ResourceShareAssociation => {
  let contents: any = {
    __type: "ResourceShareAssociation",
    associatedEntity: undefined,
    associationType: undefined,
    creationTime: undefined,
    external: undefined,
    lastUpdatedTime: undefined,
    resourceShareArn: undefined,
    resourceShareName: undefined,
    status: undefined,
    statusMessage: undefined
  };
  if (
    output.associatedEntity !== undefined &&
    output.associatedEntity !== null
  ) {
    contents.associatedEntity = output.associatedEntity;
  }
  if (output.associationType !== undefined && output.associationType !== null) {
    contents.associationType = output.associationType;
  }
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = new Date(Math.round(output.creationTime * 1000));
  }
  if (output.external !== undefined && output.external !== null) {
    contents.external = output.external;
  }
  if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = new Date(
      Math.round(output.lastUpdatedTime * 1000)
    );
  }
  if (
    output.resourceShareArn !== undefined &&
    output.resourceShareArn !== null
  ) {
    contents.resourceShareArn = output.resourceShareArn;
  }
  if (
    output.resourceShareName !== undefined &&
    output.resourceShareName !== null
  ) {
    contents.resourceShareName = output.resourceShareName;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.statusMessage !== undefined && output.statusMessage !== null) {
    contents.statusMessage = output.statusMessage;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceShareAssociationList = (
  output: any,
  context: __SerdeContext
): Array<ResourceShareAssociation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ResourceShareAssociation(entry, context)
  );
};

const deserializeAws_restJson1_1ResourceShareInvitation = (
  output: any,
  context: __SerdeContext
): ResourceShareInvitation => {
  let contents: any = {
    __type: "ResourceShareInvitation",
    invitationTimestamp: undefined,
    receiverAccountId: undefined,
    resourceShareArn: undefined,
    resourceShareAssociations: undefined,
    resourceShareInvitationArn: undefined,
    resourceShareName: undefined,
    senderAccountId: undefined,
    status: undefined
  };
  if (
    output.invitationTimestamp !== undefined &&
    output.invitationTimestamp !== null
  ) {
    contents.invitationTimestamp = new Date(
      Math.round(output.invitationTimestamp * 1000)
    );
  }
  if (
    output.receiverAccountId !== undefined &&
    output.receiverAccountId !== null
  ) {
    contents.receiverAccountId = output.receiverAccountId;
  }
  if (
    output.resourceShareArn !== undefined &&
    output.resourceShareArn !== null
  ) {
    contents.resourceShareArn = output.resourceShareArn;
  }
  if (
    output.resourceShareAssociations !== undefined &&
    output.resourceShareAssociations !== null
  ) {
    contents.resourceShareAssociations = deserializeAws_restJson1_1ResourceShareAssociationList(
      output.resourceShareAssociations,
      context
    );
  }
  if (
    output.resourceShareInvitationArn !== undefined &&
    output.resourceShareInvitationArn !== null
  ) {
    contents.resourceShareInvitationArn = output.resourceShareInvitationArn;
  }
  if (
    output.resourceShareName !== undefined &&
    output.resourceShareName !== null
  ) {
    contents.resourceShareName = output.resourceShareName;
  }
  if (output.senderAccountId !== undefined && output.senderAccountId !== null) {
    contents.senderAccountId = output.senderAccountId;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceShareInvitationList = (
  output: any,
  context: __SerdeContext
): Array<ResourceShareInvitation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ResourceShareInvitation(entry, context)
  );
};

const deserializeAws_restJson1_1ResourceShareList = (
  output: any,
  context: __SerdeContext
): Array<ResourceShare> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ResourceShare(entry, context)
  );
};

const deserializeAws_restJson1_1ResourceSharePermissionDetail = (
  output: any,
  context: __SerdeContext
): ResourceSharePermissionDetail => {
  let contents: any = {
    __type: "ResourceSharePermissionDetail",
    arn: undefined,
    creationTime: undefined,
    defaultVersion: undefined,
    lastUpdatedTime: undefined,
    name: undefined,
    permission: undefined,
    resourceType: undefined,
    version: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = new Date(Math.round(output.creationTime * 1000));
  }
  if (output.defaultVersion !== undefined && output.defaultVersion !== null) {
    contents.defaultVersion = output.defaultVersion;
  }
  if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = new Date(
      Math.round(output.lastUpdatedTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.permission !== undefined && output.permission !== null) {
    contents.permission = output.permission;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.resourceType = output.resourceType;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceSharePermissionList = (
  output: any,
  context: __SerdeContext
): Array<ResourceSharePermissionSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ResourceSharePermissionSummary(entry, context)
  );
};

const deserializeAws_restJson1_1ResourceSharePermissionSummary = (
  output: any,
  context: __SerdeContext
): ResourceSharePermissionSummary => {
  let contents: any = {
    __type: "ResourceSharePermissionSummary",
    arn: undefined,
    creationTime: undefined,
    defaultVersion: undefined,
    lastUpdatedTime: undefined,
    name: undefined,
    resourceType: undefined,
    status: undefined,
    version: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = new Date(Math.round(output.creationTime * 1000));
  }
  if (output.defaultVersion !== undefined && output.defaultVersion !== null) {
    contents.defaultVersion = output.defaultVersion;
  }
  if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = new Date(
      Math.round(output.lastUpdatedTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.resourceType = output.resourceType;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
