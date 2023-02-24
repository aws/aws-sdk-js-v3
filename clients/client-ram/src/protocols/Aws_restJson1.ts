// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AcceptResourceShareInvitationCommandInput,
  AcceptResourceShareInvitationCommandOutput,
} from "../commands/AcceptResourceShareInvitationCommand";
import {
  AssociateResourceShareCommandInput,
  AssociateResourceShareCommandOutput,
} from "../commands/AssociateResourceShareCommand";
import {
  AssociateResourceSharePermissionCommandInput,
  AssociateResourceSharePermissionCommandOutput,
} from "../commands/AssociateResourceSharePermissionCommand";
import {
  CreateResourceShareCommandInput,
  CreateResourceShareCommandOutput,
} from "../commands/CreateResourceShareCommand";
import {
  DeleteResourceShareCommandInput,
  DeleteResourceShareCommandOutput,
} from "../commands/DeleteResourceShareCommand";
import {
  DisassociateResourceShareCommandInput,
  DisassociateResourceShareCommandOutput,
} from "../commands/DisassociateResourceShareCommand";
import {
  DisassociateResourceSharePermissionCommandInput,
  DisassociateResourceSharePermissionCommandOutput,
} from "../commands/DisassociateResourceSharePermissionCommand";
import {
  EnableSharingWithAwsOrganizationCommandInput,
  EnableSharingWithAwsOrganizationCommandOutput,
} from "../commands/EnableSharingWithAwsOrganizationCommand";
import { GetPermissionCommandInput, GetPermissionCommandOutput } from "../commands/GetPermissionCommand";
import {
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "../commands/GetResourcePoliciesCommand";
import {
  GetResourceShareAssociationsCommandInput,
  GetResourceShareAssociationsCommandOutput,
} from "../commands/GetResourceShareAssociationsCommand";
import {
  GetResourceShareInvitationsCommandInput,
  GetResourceShareInvitationsCommandOutput,
} from "../commands/GetResourceShareInvitationsCommand";
import { GetResourceSharesCommandInput, GetResourceSharesCommandOutput } from "../commands/GetResourceSharesCommand";
import {
  ListPendingInvitationResourcesCommandInput,
  ListPendingInvitationResourcesCommandOutput,
} from "../commands/ListPendingInvitationResourcesCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "../commands/ListPermissionsCommand";
import {
  ListPermissionVersionsCommandInput,
  ListPermissionVersionsCommandOutput,
} from "../commands/ListPermissionVersionsCommand";
import { ListPrincipalsCommandInput, ListPrincipalsCommandOutput } from "../commands/ListPrincipalsCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "../commands/ListResourcesCommand";
import {
  ListResourceSharePermissionsCommandInput,
  ListResourceSharePermissionsCommandOutput,
} from "../commands/ListResourceSharePermissionsCommand";
import { ListResourceTypesCommandInput, ListResourceTypesCommandOutput } from "../commands/ListResourceTypesCommand";
import {
  PromoteResourceShareCreatedFromPolicyCommandInput,
  PromoteResourceShareCreatedFromPolicyCommandOutput,
} from "../commands/PromoteResourceShareCreatedFromPolicyCommand";
import {
  RejectResourceShareInvitationCommandInput,
  RejectResourceShareInvitationCommandOutput,
} from "../commands/RejectResourceShareInvitationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateResourceShareCommandInput,
  UpdateResourceShareCommandOutput,
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
  ServiceNameAndResourceType,
  ServiceUnavailableException,
  Tag,
  TagFilter,
  TagLimitExceededException,
  TagPolicyViolationException,
  ThrottlingException,
  UnknownResourceException,
} from "../models/models_0";
import { RAMServiceException as __BaseException } from "../models/RAMServiceException";

export const serializeAws_restJson1AcceptResourceShareInvitationCommand = async (
  input: AcceptResourceShareInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/acceptresourceshareinvitation";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.resourceShareInvitationArn != null && { resourceShareInvitationArn: input.resourceShareInvitationArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1AssociateResourceShareCommand = async (
  input: AssociateResourceShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/associateresourceshare";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.principals != null && {
      principals: serializeAws_restJson1PrincipalArnOrIdList(input.principals, context),
    }),
    ...(input.resourceArns != null && {
      resourceArns: serializeAws_restJson1ResourceArnList(input.resourceArns, context),
    }),
    ...(input.resourceShareArn != null && { resourceShareArn: input.resourceShareArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1AssociateResourceSharePermissionCommand = async (
  input: AssociateResourceSharePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/associateresourcesharepermission";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.permissionArn != null && { permissionArn: input.permissionArn }),
    ...(input.permissionVersion != null && { permissionVersion: input.permissionVersion }),
    ...(input.replace != null && { replace: input.replace }),
    ...(input.resourceShareArn != null && { resourceShareArn: input.resourceShareArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateResourceShareCommand = async (
  input: CreateResourceShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createresourceshare";
  let body: any;
  body = JSON.stringify({
    ...(input.allowExternalPrincipals != null && { allowExternalPrincipals: input.allowExternalPrincipals }),
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.name != null && { name: input.name }),
    ...(input.permissionArns != null && {
      permissionArns: serializeAws_restJson1PermissionArnList(input.permissionArns, context),
    }),
    ...(input.principals != null && {
      principals: serializeAws_restJson1PrincipalArnOrIdList(input.principals, context),
    }),
    ...(input.resourceArns != null && {
      resourceArns: serializeAws_restJson1ResourceArnList(input.resourceArns, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteResourceShareCommand = async (
  input: DeleteResourceShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteresourceshare";
  const query: any = map({
    resourceShareArn: [, __expectNonNull(input.resourceShareArn!, `resourceShareArn`)],
    clientToken: [, input.clientToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DisassociateResourceShareCommand = async (
  input: DisassociateResourceShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/disassociateresourceshare";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.principals != null && {
      principals: serializeAws_restJson1PrincipalArnOrIdList(input.principals, context),
    }),
    ...(input.resourceArns != null && {
      resourceArns: serializeAws_restJson1ResourceArnList(input.resourceArns, context),
    }),
    ...(input.resourceShareArn != null && { resourceShareArn: input.resourceShareArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisassociateResourceSharePermissionCommand = async (
  input: DisassociateResourceSharePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/disassociateresourcesharepermission";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.permissionArn != null && { permissionArn: input.permissionArn }),
    ...(input.resourceShareArn != null && { resourceShareArn: input.resourceShareArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1EnableSharingWithAwsOrganizationCommand = async (
  input: EnableSharingWithAwsOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/enablesharingwithawsorganization";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetPermissionCommand = async (
  input: GetPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getpermission";
  let body: any;
  body = JSON.stringify({
    ...(input.permissionArn != null && { permissionArn: input.permissionArn }),
    ...(input.permissionVersion != null && { permissionVersion: input.permissionVersion }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetResourcePoliciesCommand = async (
  input: GetResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getresourcepolicies";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.principal != null && { principal: input.principal }),
    ...(input.resourceArns != null && {
      resourceArns: serializeAws_restJson1ResourceArnList(input.resourceArns, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetResourceShareAssociationsCommand = async (
  input: GetResourceShareAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getresourceshareassociations";
  let body: any;
  body = JSON.stringify({
    ...(input.associationStatus != null && { associationStatus: input.associationStatus }),
    ...(input.associationType != null && { associationType: input.associationType }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.principal != null && { principal: input.principal }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.resourceShareArns != null && {
      resourceShareArns: serializeAws_restJson1ResourceShareArnList(input.resourceShareArns, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetResourceShareInvitationsCommand = async (
  input: GetResourceShareInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getresourceshareinvitations";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceShareArns != null && {
      resourceShareArns: serializeAws_restJson1ResourceShareArnList(input.resourceShareArns, context),
    }),
    ...(input.resourceShareInvitationArns != null && {
      resourceShareInvitationArns: serializeAws_restJson1ResourceShareInvitationArnList(
        input.resourceShareInvitationArns,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetResourceSharesCommand = async (
  input: GetResourceSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getresourceshares";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.permissionArn != null && { permissionArn: input.permissionArn }),
    ...(input.resourceOwner != null && { resourceOwner: input.resourceOwner }),
    ...(input.resourceShareArns != null && {
      resourceShareArns: serializeAws_restJson1ResourceShareArnList(input.resourceShareArns, context),
    }),
    ...(input.resourceShareStatus != null && { resourceShareStatus: input.resourceShareStatus }),
    ...(input.tagFilters != null && { tagFilters: serializeAws_restJson1TagFilters(input.tagFilters, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListPendingInvitationResourcesCommand = async (
  input: ListPendingInvitationResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listpendinginvitationresources";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceRegionScope != null && { resourceRegionScope: input.resourceRegionScope }),
    ...(input.resourceShareInvitationArn != null && { resourceShareInvitationArn: input.resourceShareInvitationArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListPermissionsCommand = async (
  input: ListPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listpermissions";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListPermissionVersionsCommand = async (
  input: ListPermissionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listpermissionversions";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.permissionArn != null && { permissionArn: input.permissionArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListPrincipalsCommand = async (
  input: ListPrincipalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listprincipals";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.principals != null && {
      principals: serializeAws_restJson1PrincipalArnOrIdList(input.principals, context),
    }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.resourceOwner != null && { resourceOwner: input.resourceOwner }),
    ...(input.resourceShareArns != null && {
      resourceShareArns: serializeAws_restJson1ResourceShareArnList(input.resourceShareArns, context),
    }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListResourcesCommand = async (
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listresources";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.principal != null && { principal: input.principal }),
    ...(input.resourceArns != null && {
      resourceArns: serializeAws_restJson1ResourceArnList(input.resourceArns, context),
    }),
    ...(input.resourceOwner != null && { resourceOwner: input.resourceOwner }),
    ...(input.resourceRegionScope != null && { resourceRegionScope: input.resourceRegionScope }),
    ...(input.resourceShareArns != null && {
      resourceShareArns: serializeAws_restJson1ResourceShareArnList(input.resourceShareArns, context),
    }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListResourceSharePermissionsCommand = async (
  input: ListResourceSharePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listresourcesharepermissions";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceShareArn != null && { resourceShareArn: input.resourceShareArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListResourceTypesCommand = async (
  input: ListResourceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listresourcetypes";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceRegionScope != null && { resourceRegionScope: input.resourceRegionScope }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand = async (
  input: PromoteResourceShareCreatedFromPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/promoteresourcesharecreatedfrompolicy";
  const query: any = map({
    resourceShareArn: [, __expectNonNull(input.resourceShareArn!, `resourceShareArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1RejectResourceShareInvitationCommand = async (
  input: RejectResourceShareInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rejectresourceshareinvitation";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.resourceShareInvitationArn != null && { resourceShareInvitationArn: input.resourceShareInvitationArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tagresource";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceShareArn != null && { resourceShareArn: input.resourceShareArn }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/untagresource";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceShareArn != null && { resourceShareArn: input.resourceShareArn }),
    ...(input.tagKeys != null && { tagKeys: serializeAws_restJson1TagKeyList(input.tagKeys, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateResourceShareCommand = async (
  input: UpdateResourceShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateresourceshare";
  let body: any;
  body = JSON.stringify({
    ...(input.allowExternalPrincipals != null && { allowExternalPrincipals: input.allowExternalPrincipals }),
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.name != null && { name: input.name }),
    ...(input.resourceShareArn != null && { resourceShareArn: input.resourceShareArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1AcceptResourceShareInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptResourceShareInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AcceptResourceShareInvitationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.resourceShareInvitation != null) {
    contents.resourceShareInvitation = deserializeAws_restJson1ResourceShareInvitation(
      data.resourceShareInvitation,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1AcceptResourceShareInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptResourceShareInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.ram#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidClientTokenException":
    case "com.amazonaws.ram#InvalidClientTokenException":
      throw await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceShareInvitationAlreadyAcceptedException":
    case "com.amazonaws.ram#ResourceShareInvitationAlreadyAcceptedException":
      throw await deserializeAws_restJson1ResourceShareInvitationAlreadyAcceptedExceptionResponse(
        parsedOutput,
        context
      );
    case "ResourceShareInvitationAlreadyRejectedException":
    case "com.amazonaws.ram#ResourceShareInvitationAlreadyRejectedException":
      throw await deserializeAws_restJson1ResourceShareInvitationAlreadyRejectedExceptionResponse(
        parsedOutput,
        context
      );
    case "ResourceShareInvitationArnNotFoundException":
    case "com.amazonaws.ram#ResourceShareInvitationArnNotFoundException":
      throw await deserializeAws_restJson1ResourceShareInvitationArnNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceShareInvitationExpiredException":
    case "com.amazonaws.ram#ResourceShareInvitationExpiredException":
      throw await deserializeAws_restJson1ResourceShareInvitationExpiredExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateResourceShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateResourceShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.resourceShareAssociations != null) {
    contents.resourceShareAssociations = deserializeAws_restJson1ResourceShareAssociationList(
      data.resourceShareAssociations,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1AssociateResourceShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.ram#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidClientTokenException":
    case "com.amazonaws.ram#InvalidClientTokenException":
      throw await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidStateTransitionException":
    case "com.amazonaws.ram#InvalidStateTransitionException":
      throw await deserializeAws_restJson1InvalidStateTransitionExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceShareLimitExceededException":
    case "com.amazonaws.ram#ResourceShareLimitExceededException":
      throw await deserializeAws_restJson1ResourceShareLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ram#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateResourceSharePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceSharePermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateResourceSharePermissionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.returnValue != null) {
    contents.returnValue = __expectBoolean(data.returnValue);
  }
  return contents;
};

const deserializeAws_restJson1AssociateResourceSharePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceSharePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidClientTokenException":
    case "com.amazonaws.ram#InvalidClientTokenException":
      throw await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateResourceShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateResourceShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.resourceShare != null) {
    contents.resourceShare = deserializeAws_restJson1ResourceShare(data.resourceShare, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateResourceShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.ram#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidClientTokenException":
    case "com.amazonaws.ram#InvalidClientTokenException":
      throw await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidStateTransitionException":
    case "com.amazonaws.ram#InvalidStateTransitionException":
      throw await deserializeAws_restJson1InvalidStateTransitionExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceShareLimitExceededException":
    case "com.amazonaws.ram#ResourceShareLimitExceededException":
      throw await deserializeAws_restJson1ResourceShareLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TagPolicyViolationException":
    case "com.amazonaws.ram#TagPolicyViolationException":
      throw await deserializeAws_restJson1TagPolicyViolationExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteResourceShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResourceShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.returnValue != null) {
    contents.returnValue = __expectBoolean(data.returnValue);
  }
  return contents;
};

const deserializeAws_restJson1DeleteResourceShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.ram#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidClientTokenException":
    case "com.amazonaws.ram#InvalidClientTokenException":
      throw await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidStateTransitionException":
    case "com.amazonaws.ram#InvalidStateTransitionException":
      throw await deserializeAws_restJson1InvalidStateTransitionExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateResourceShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateResourceShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.resourceShareAssociations != null) {
    contents.resourceShareAssociations = deserializeAws_restJson1ResourceShareAssociationList(
      data.resourceShareAssociations,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DisassociateResourceShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.ram#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidClientTokenException":
    case "com.amazonaws.ram#InvalidClientTokenException":
      throw await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidStateTransitionException":
    case "com.amazonaws.ram#InvalidStateTransitionException":
      throw await deserializeAws_restJson1InvalidStateTransitionExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceShareLimitExceededException":
    case "com.amazonaws.ram#ResourceShareLimitExceededException":
      throw await deserializeAws_restJson1ResourceShareLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateResourceSharePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceSharePermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateResourceSharePermissionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.returnValue != null) {
    contents.returnValue = __expectBoolean(data.returnValue);
  }
  return contents;
};

const deserializeAws_restJson1DisassociateResourceSharePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceSharePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidClientTokenException":
    case "com.amazonaws.ram#InvalidClientTokenException":
      throw await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidStateTransitionException":
    case "com.amazonaws.ram#InvalidStateTransitionException":
      throw await deserializeAws_restJson1InvalidStateTransitionExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1EnableSharingWithAwsOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSharingWithAwsOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableSharingWithAwsOrganizationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.returnValue != null) {
    contents.returnValue = __expectBoolean(data.returnValue);
  }
  return contents;
};

const deserializeAws_restJson1EnableSharingWithAwsOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSharingWithAwsOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPermissionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.permission != null) {
    contents.permission = deserializeAws_restJson1ResourceSharePermissionDetail(data.permission, context);
  }
  return contents;
};

const deserializeAws_restJson1GetPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourcePoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.policies != null) {
    contents.policies = deserializeAws_restJson1PolicyList(data.policies, context);
  }
  return contents;
};

const deserializeAws_restJson1GetResourcePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.ram#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "ResourceArnNotFoundException":
    case "com.amazonaws.ram#ResourceArnNotFoundException":
      throw await deserializeAws_restJson1ResourceArnNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetResourceShareAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceShareAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourceShareAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resourceShareAssociations != null) {
    contents.resourceShareAssociations = deserializeAws_restJson1ResourceShareAssociationList(
      data.resourceShareAssociations,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetResourceShareAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceShareAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.ram#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetResourceShareInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceShareInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourceShareInvitationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resourceShareInvitations != null) {
    contents.resourceShareInvitations = deserializeAws_restJson1ResourceShareInvitationList(
      data.resourceShareInvitations,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetResourceShareInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceShareInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidMaxResultsException":
    case "com.amazonaws.ram#InvalidMaxResultsException":
      throw await deserializeAws_restJson1InvalidMaxResultsExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.ram#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "ResourceShareInvitationArnNotFoundException":
    case "com.amazonaws.ram#ResourceShareInvitationArnNotFoundException":
      throw await deserializeAws_restJson1ResourceShareInvitationArnNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetResourceSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceSharesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourceSharesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resourceShares != null) {
    contents.resourceShares = deserializeAws_restJson1ResourceShareList(data.resourceShares, context);
  }
  return contents;
};

const deserializeAws_restJson1GetResourceSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.ram#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListPendingInvitationResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPendingInvitationResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPendingInvitationResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resources != null) {
    contents.resources = deserializeAws_restJson1ResourceList(data.resources, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPendingInvitationResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPendingInvitationResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.ram#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.ram#MissingRequiredParameterException":
      throw await deserializeAws_restJson1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "ResourceShareInvitationAlreadyRejectedException":
    case "com.amazonaws.ram#ResourceShareInvitationAlreadyRejectedException":
      throw await deserializeAws_restJson1ResourceShareInvitationAlreadyRejectedExceptionResponse(
        parsedOutput,
        context
      );
    case "ResourceShareInvitationArnNotFoundException":
    case "com.amazonaws.ram#ResourceShareInvitationArnNotFoundException":
      throw await deserializeAws_restJson1ResourceShareInvitationArnNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceShareInvitationExpiredException":
    case "com.amazonaws.ram#ResourceShareInvitationExpiredException":
      throw await deserializeAws_restJson1ResourceShareInvitationExpiredExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.permissions != null) {
    contents.permissions = deserializeAws_restJson1ResourceSharePermissionList(data.permissions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.ram#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListPermissionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPermissionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.permissions != null) {
    contents.permissions = deserializeAws_restJson1ResourceSharePermissionList(data.permissions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPermissionVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.ram#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListPrincipalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrincipalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPrincipalsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.principals != null) {
    contents.principals = deserializeAws_restJson1PrincipalList(data.principals, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPrincipalsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrincipalsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.ram#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resources != null) {
    contents.resources = deserializeAws_restJson1ResourceList(data.resources, context);
  }
  return contents;
};

const deserializeAws_restJson1ListResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.ram#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidResourceTypeException":
    case "com.amazonaws.ram#InvalidResourceTypeException":
      throw await deserializeAws_restJson1InvalidResourceTypeExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListResourceSharePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSharePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResourceSharePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.permissions != null) {
    contents.permissions = deserializeAws_restJson1ResourceSharePermissionList(data.permissions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListResourceSharePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSharePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.ram#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResourceTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resourceTypes != null) {
    contents.resourceTypes = deserializeAws_restJson1ServiceNameAndResourceTypeList(data.resourceTypes, context);
  }
  return contents;
};

const deserializeAws_restJson1ListResourceTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.ram#InvalidNextTokenException":
      throw await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteResourceShareCreatedFromPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.returnValue != null) {
    contents.returnValue = __expectBoolean(data.returnValue);
  }
  return contents;
};

const deserializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteResourceShareCreatedFromPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.ram#MissingRequiredParameterException":
      throw await deserializeAws_restJson1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceShareLimitExceededException":
    case "com.amazonaws.ram#ResourceShareLimitExceededException":
      throw await deserializeAws_restJson1ResourceShareLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RejectResourceShareInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectResourceShareInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RejectResourceShareInvitationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.resourceShareInvitation != null) {
    contents.resourceShareInvitation = deserializeAws_restJson1ResourceShareInvitation(
      data.resourceShareInvitation,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1RejectResourceShareInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectResourceShareInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.ram#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidClientTokenException":
    case "com.amazonaws.ram#InvalidClientTokenException":
      throw await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ResourceShareInvitationAlreadyAcceptedException":
    case "com.amazonaws.ram#ResourceShareInvitationAlreadyAcceptedException":
      throw await deserializeAws_restJson1ResourceShareInvitationAlreadyAcceptedExceptionResponse(
        parsedOutput,
        context
      );
    case "ResourceShareInvitationAlreadyRejectedException":
    case "com.amazonaws.ram#ResourceShareInvitationAlreadyRejectedException":
      throw await deserializeAws_restJson1ResourceShareInvitationAlreadyRejectedExceptionResponse(
        parsedOutput,
        context
      );
    case "ResourceShareInvitationArnNotFoundException":
    case "com.amazonaws.ram#ResourceShareInvitationArnNotFoundException":
      throw await deserializeAws_restJson1ResourceShareInvitationArnNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceShareInvitationExpiredException":
    case "com.amazonaws.ram#ResourceShareInvitationExpiredException":
      throw await deserializeAws_restJson1ResourceShareInvitationExpiredExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "ResourceArnNotFoundException":
    case "com.amazonaws.ram#ResourceArnNotFoundException":
      throw await deserializeAws_restJson1ResourceArnNotFoundExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TagLimitExceededException":
    case "com.amazonaws.ram#TagLimitExceededException":
      throw await deserializeAws_restJson1TagLimitExceededExceptionResponse(parsedOutput, context);
    case "TagPolicyViolationException":
    case "com.amazonaws.ram#TagPolicyViolationException":
      throw await deserializeAws_restJson1TagPolicyViolationExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateResourceShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResourceShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.resourceShare != null) {
    contents.resourceShare = deserializeAws_restJson1ResourceShare(data.resourceShare, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateResourceShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.ram#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InvalidClientTokenException":
    case "com.amazonaws.ram#InvalidClientTokenException":
      throw await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.ram#MissingRequiredParameterException":
      throw await deserializeAws_restJson1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context);
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

const map = __map;
const deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidClientTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClientTokenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidClientTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidMaxResultsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMaxResultsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidMaxResultsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidResourceTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceTypeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidResourceTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidStateTransitionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateTransitionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidStateTransitionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1MalformedArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedArnException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new MalformedArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1MissingRequiredParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingRequiredParameterException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new MissingRequiredParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1OperationNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new OperationNotPermittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceArnNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceArnNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceArnNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceShareInvitationAlreadyAcceptedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceShareInvitationAlreadyAcceptedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceShareInvitationAlreadyAcceptedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceShareInvitationAlreadyRejectedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceShareInvitationAlreadyRejectedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceShareInvitationAlreadyRejectedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceShareInvitationArnNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceShareInvitationArnNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceShareInvitationArnNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceShareInvitationExpiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceShareInvitationExpiredException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceShareInvitationExpiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceShareLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceShareLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceShareLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServerInternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerInternalException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServerInternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TagLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new TagLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TagPolicyViolationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagPolicyViolationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new TagPolicyViolationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1UnknownResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnknownResourceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UnknownResourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1PermissionArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1PrincipalArnOrIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ResourceArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ResourceShareArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ResourceShareInvitationArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1TagFilter = (input: TagFilter, context: __SerdeContext): any => {
  return {
    ...(input.tagKey != null && { tagKey: input.tagKey }),
    ...(input.tagValues != null && { tagValues: serializeAws_restJson1TagValueList(input.tagValues, context) }),
  };
};

const serializeAws_restJson1TagFilters = (input: TagFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TagFilter(entry, context);
    });
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TagValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_restJson1PolicyList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Principal = (output: any, context: __SerdeContext): Principal => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    external: __expectBoolean(output.external),
    id: __expectString(output.id),
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    resourceShareArn: __expectString(output.resourceShareArn),
  } as any;
};

const deserializeAws_restJson1PrincipalList = (output: any, context: __SerdeContext): Principal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Principal(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    resourceGroupArn: __expectString(output.resourceGroupArn),
    resourceRegionScope: __expectString(output.resourceRegionScope),
    resourceShareArn: __expectString(output.resourceShareArn),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ResourceList = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Resource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResourceShare = (output: any, context: __SerdeContext): ResourceShare => {
  return {
    allowExternalPrincipals: __expectBoolean(output.allowExternalPrincipals),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    featureSet: __expectString(output.featureSet),
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    name: __expectString(output.name),
    owningAccountId: __expectString(output.owningAccountId),
    resourceShareArn: __expectString(output.resourceShareArn),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    tags: output.tags != null ? deserializeAws_restJson1TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceShareAssociation = (
  output: any,
  context: __SerdeContext
): ResourceShareAssociation => {
  return {
    associatedEntity: __expectString(output.associatedEntity),
    associationType: __expectString(output.associationType),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    external: __expectBoolean(output.external),
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    resourceShareArn: __expectString(output.resourceShareArn),
    resourceShareName: __expectString(output.resourceShareName),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
  } as any;
};

const deserializeAws_restJson1ResourceShareAssociationList = (
  output: any,
  context: __SerdeContext
): ResourceShareAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceShareAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResourceShareInvitation = (
  output: any,
  context: __SerdeContext
): ResourceShareInvitation => {
  return {
    invitationTimestamp:
      output.invitationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.invitationTimestamp)))
        : undefined,
    receiverAccountId: __expectString(output.receiverAccountId),
    receiverArn: __expectString(output.receiverArn),
    resourceShareArn: __expectString(output.resourceShareArn),
    resourceShareAssociations:
      output.resourceShareAssociations != null
        ? deserializeAws_restJson1ResourceShareAssociationList(output.resourceShareAssociations, context)
        : undefined,
    resourceShareInvitationArn: __expectString(output.resourceShareInvitationArn),
    resourceShareName: __expectString(output.resourceShareName),
    senderAccountId: __expectString(output.senderAccountId),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1ResourceShareInvitationList = (
  output: any,
  context: __SerdeContext
): ResourceShareInvitation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceShareInvitation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResourceShareList = (output: any, context: __SerdeContext): ResourceShare[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceShare(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResourceSharePermissionDetail = (
  output: any,
  context: __SerdeContext
): ResourceSharePermissionDetail => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    defaultVersion: __expectBoolean(output.defaultVersion),
    isResourceTypeDefault: __expectBoolean(output.isResourceTypeDefault),
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    name: __expectString(output.name),
    permission: __expectString(output.permission),
    resourceType: __expectString(output.resourceType),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1ResourceSharePermissionList = (
  output: any,
  context: __SerdeContext
): ResourceSharePermissionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceSharePermissionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResourceSharePermissionSummary = (
  output: any,
  context: __SerdeContext
): ResourceSharePermissionSummary => {
  return {
    arn: __expectString(output.arn),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    defaultVersion: __expectBoolean(output.defaultVersion),
    isResourceTypeDefault: __expectBoolean(output.isResourceTypeDefault),
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    name: __expectString(output.name),
    resourceType: __expectString(output.resourceType),
    status: __expectString(output.status),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1ServiceNameAndResourceType = (
  output: any,
  context: __SerdeContext
): ServiceNameAndResourceType => {
  return {
    resourceRegionScope: __expectString(output.resourceRegionScope),
    resourceType: __expectString(output.resourceType),
    serviceName: __expectString(output.serviceName),
  } as any;
};

const deserializeAws_restJson1ServiceNameAndResourceTypeList = (
  output: any,
  context: __SerdeContext
): ServiceNameAndResourceType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ServiceNameAndResourceType(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
