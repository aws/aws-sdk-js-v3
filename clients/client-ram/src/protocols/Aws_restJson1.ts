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

/**
 * serializeAws_restJson1AcceptResourceShareInvitationCommand
 */
export const se_AcceptResourceShareInvitationCommand = async (
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

/**
 * serializeAws_restJson1AssociateResourceShareCommand
 */
export const se_AssociateResourceShareCommand = async (
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
    ...(input.principals != null && { principals: se_PrincipalArnOrIdList(input.principals, context) }),
    ...(input.resourceArns != null && { resourceArns: se_ResourceArnList(input.resourceArns, context) }),
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

/**
 * serializeAws_restJson1AssociateResourceSharePermissionCommand
 */
export const se_AssociateResourceSharePermissionCommand = async (
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

/**
 * serializeAws_restJson1CreateResourceShareCommand
 */
export const se_CreateResourceShareCommand = async (
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
    ...(input.permissionArns != null && { permissionArns: se_PermissionArnList(input.permissionArns, context) }),
    ...(input.principals != null && { principals: se_PrincipalArnOrIdList(input.principals, context) }),
    ...(input.resourceArns != null && { resourceArns: se_ResourceArnList(input.resourceArns, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
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

/**
 * serializeAws_restJson1DeleteResourceShareCommand
 */
export const se_DeleteResourceShareCommand = async (
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

/**
 * serializeAws_restJson1DisassociateResourceShareCommand
 */
export const se_DisassociateResourceShareCommand = async (
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
    ...(input.principals != null && { principals: se_PrincipalArnOrIdList(input.principals, context) }),
    ...(input.resourceArns != null && { resourceArns: se_ResourceArnList(input.resourceArns, context) }),
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

/**
 * serializeAws_restJson1DisassociateResourceSharePermissionCommand
 */
export const se_DisassociateResourceSharePermissionCommand = async (
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

/**
 * serializeAws_restJson1EnableSharingWithAwsOrganizationCommand
 */
export const se_EnableSharingWithAwsOrganizationCommand = async (
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

/**
 * serializeAws_restJson1GetPermissionCommand
 */
export const se_GetPermissionCommand = async (
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

/**
 * serializeAws_restJson1GetResourcePoliciesCommand
 */
export const se_GetResourcePoliciesCommand = async (
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
    ...(input.resourceArns != null && { resourceArns: se_ResourceArnList(input.resourceArns, context) }),
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

/**
 * serializeAws_restJson1GetResourceShareAssociationsCommand
 */
export const se_GetResourceShareAssociationsCommand = async (
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
      resourceShareArns: se_ResourceShareArnList(input.resourceShareArns, context),
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

/**
 * serializeAws_restJson1GetResourceShareInvitationsCommand
 */
export const se_GetResourceShareInvitationsCommand = async (
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
      resourceShareArns: se_ResourceShareArnList(input.resourceShareArns, context),
    }),
    ...(input.resourceShareInvitationArns != null && {
      resourceShareInvitationArns: se_ResourceShareInvitationArnList(input.resourceShareInvitationArns, context),
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

/**
 * serializeAws_restJson1GetResourceSharesCommand
 */
export const se_GetResourceSharesCommand = async (
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
      resourceShareArns: se_ResourceShareArnList(input.resourceShareArns, context),
    }),
    ...(input.resourceShareStatus != null && { resourceShareStatus: input.resourceShareStatus }),
    ...(input.tagFilters != null && { tagFilters: se_TagFilters(input.tagFilters, context) }),
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

/**
 * serializeAws_restJson1ListPendingInvitationResourcesCommand
 */
export const se_ListPendingInvitationResourcesCommand = async (
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

/**
 * serializeAws_restJson1ListPermissionsCommand
 */
export const se_ListPermissionsCommand = async (
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

/**
 * serializeAws_restJson1ListPermissionVersionsCommand
 */
export const se_ListPermissionVersionsCommand = async (
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

/**
 * serializeAws_restJson1ListPrincipalsCommand
 */
export const se_ListPrincipalsCommand = async (
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
    ...(input.principals != null && { principals: se_PrincipalArnOrIdList(input.principals, context) }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.resourceOwner != null && { resourceOwner: input.resourceOwner }),
    ...(input.resourceShareArns != null && {
      resourceShareArns: se_ResourceShareArnList(input.resourceShareArns, context),
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

/**
 * serializeAws_restJson1ListResourcesCommand
 */
export const se_ListResourcesCommand = async (
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
    ...(input.resourceArns != null && { resourceArns: se_ResourceArnList(input.resourceArns, context) }),
    ...(input.resourceOwner != null && { resourceOwner: input.resourceOwner }),
    ...(input.resourceRegionScope != null && { resourceRegionScope: input.resourceRegionScope }),
    ...(input.resourceShareArns != null && {
      resourceShareArns: se_ResourceShareArnList(input.resourceShareArns, context),
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

/**
 * serializeAws_restJson1ListResourceSharePermissionsCommand
 */
export const se_ListResourceSharePermissionsCommand = async (
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

/**
 * serializeAws_restJson1ListResourceTypesCommand
 */
export const se_ListResourceTypesCommand = async (
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

/**
 * serializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand
 */
export const se_PromoteResourceShareCreatedFromPolicyCommand = async (
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

/**
 * serializeAws_restJson1RejectResourceShareInvitationCommand
 */
export const se_RejectResourceShareInvitationCommand = async (
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

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
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
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
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

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
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
    ...(input.tagKeys != null && { tagKeys: se_TagKeyList(input.tagKeys, context) }),
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

/**
 * serializeAws_restJson1UpdateResourceShareCommand
 */
export const se_UpdateResourceShareCommand = async (
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

/**
 * deserializeAws_restJson1AcceptResourceShareInvitationCommand
 */
export const de_AcceptResourceShareInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptResourceShareInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AcceptResourceShareInvitationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.resourceShareInvitation != null) {
    contents.resourceShareInvitation = de_ResourceShareInvitation(data.resourceShareInvitation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AcceptResourceShareInvitationCommandError
 */
const de_AcceptResourceShareInvitationCommandError = async (
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
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidClientTokenException":
    case "com.amazonaws.ram#InvalidClientTokenException":
      throw await de_InvalidClientTokenExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceShareInvitationAlreadyAcceptedException":
    case "com.amazonaws.ram#ResourceShareInvitationAlreadyAcceptedException":
      throw await de_ResourceShareInvitationAlreadyAcceptedExceptionRes(parsedOutput, context);
    case "ResourceShareInvitationAlreadyRejectedException":
    case "com.amazonaws.ram#ResourceShareInvitationAlreadyRejectedException":
      throw await de_ResourceShareInvitationAlreadyRejectedExceptionRes(parsedOutput, context);
    case "ResourceShareInvitationArnNotFoundException":
    case "com.amazonaws.ram#ResourceShareInvitationArnNotFoundException":
      throw await de_ResourceShareInvitationArnNotFoundExceptionRes(parsedOutput, context);
    case "ResourceShareInvitationExpiredException":
    case "com.amazonaws.ram#ResourceShareInvitationExpiredException":
      throw await de_ResourceShareInvitationExpiredExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AssociateResourceShareCommand
 */
export const de_AssociateResourceShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateResourceShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.resourceShareAssociations != null) {
    contents.resourceShareAssociations = de_ResourceShareAssociationList(data.resourceShareAssociations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateResourceShareCommandError
 */
const de_AssociateResourceShareCommandError = async (
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
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidClientTokenException":
    case "com.amazonaws.ram#InvalidClientTokenException":
      throw await de_InvalidClientTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidStateTransitionException":
    case "com.amazonaws.ram#InvalidStateTransitionException":
      throw await de_InvalidStateTransitionExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceShareLimitExceededException":
    case "com.amazonaws.ram#ResourceShareLimitExceededException":
      throw await de_ResourceShareLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ram#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AssociateResourceSharePermissionCommand
 */
export const de_AssociateResourceSharePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceSharePermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateResourceSharePermissionCommandError(output, context);
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

/**
 * deserializeAws_restJson1AssociateResourceSharePermissionCommandError
 */
const de_AssociateResourceSharePermissionCommandError = async (
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
      throw await de_InvalidClientTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateResourceShareCommand
 */
export const de_CreateResourceShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateResourceShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.resourceShare != null) {
    contents.resourceShare = de_ResourceShare(data.resourceShare, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateResourceShareCommandError
 */
const de_CreateResourceShareCommandError = async (
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
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidClientTokenException":
    case "com.amazonaws.ram#InvalidClientTokenException":
      throw await de_InvalidClientTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidStateTransitionException":
    case "com.amazonaws.ram#InvalidStateTransitionException":
      throw await de_InvalidStateTransitionExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceShareLimitExceededException":
    case "com.amazonaws.ram#ResourceShareLimitExceededException":
      throw await de_ResourceShareLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TagPolicyViolationException":
    case "com.amazonaws.ram#TagPolicyViolationException":
      throw await de_TagPolicyViolationExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteResourceShareCommand
 */
export const de_DeleteResourceShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteResourceShareCommandError(output, context);
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

/**
 * deserializeAws_restJson1DeleteResourceShareCommandError
 */
const de_DeleteResourceShareCommandError = async (
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
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidClientTokenException":
    case "com.amazonaws.ram#InvalidClientTokenException":
      throw await de_InvalidClientTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidStateTransitionException":
    case "com.amazonaws.ram#InvalidStateTransitionException":
      throw await de_InvalidStateTransitionExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisassociateResourceShareCommand
 */
export const de_DisassociateResourceShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateResourceShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.resourceShareAssociations != null) {
    contents.resourceShareAssociations = de_ResourceShareAssociationList(data.resourceShareAssociations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateResourceShareCommandError
 */
const de_DisassociateResourceShareCommandError = async (
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
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidClientTokenException":
    case "com.amazonaws.ram#InvalidClientTokenException":
      throw await de_InvalidClientTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidStateTransitionException":
    case "com.amazonaws.ram#InvalidStateTransitionException":
      throw await de_InvalidStateTransitionExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceShareLimitExceededException":
    case "com.amazonaws.ram#ResourceShareLimitExceededException":
      throw await de_ResourceShareLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisassociateResourceSharePermissionCommand
 */
export const de_DisassociateResourceSharePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceSharePermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateResourceSharePermissionCommandError(output, context);
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

/**
 * deserializeAws_restJson1DisassociateResourceSharePermissionCommandError
 */
const de_DisassociateResourceSharePermissionCommandError = async (
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
      throw await de_InvalidClientTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidStateTransitionException":
    case "com.amazonaws.ram#InvalidStateTransitionException":
      throw await de_InvalidStateTransitionExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1EnableSharingWithAwsOrganizationCommand
 */
export const de_EnableSharingWithAwsOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSharingWithAwsOrganizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EnableSharingWithAwsOrganizationCommandError(output, context);
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

/**
 * deserializeAws_restJson1EnableSharingWithAwsOrganizationCommandError
 */
const de_EnableSharingWithAwsOrganizationCommandError = async (
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
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetPermissionCommand
 */
export const de_GetPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPermissionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.permission != null) {
    contents.permission = de_ResourceSharePermissionDetail(data.permission, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPermissionCommandError
 */
const de_GetPermissionCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetResourcePoliciesCommand
 */
export const de_GetResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourcePoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.policies != null) {
    contents.policies = de_PolicyList(data.policies, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetResourcePoliciesCommandError
 */
const de_GetResourcePoliciesCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "ResourceArnNotFoundException":
    case "com.amazonaws.ram#ResourceArnNotFoundException":
      throw await de_ResourceArnNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetResourceShareAssociationsCommand
 */
export const de_GetResourceShareAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceShareAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourceShareAssociationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resourceShareAssociations != null) {
    contents.resourceShareAssociations = de_ResourceShareAssociationList(data.resourceShareAssociations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceShareAssociationsCommandError
 */
const de_GetResourceShareAssociationsCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetResourceShareInvitationsCommand
 */
export const de_GetResourceShareInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceShareInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourceShareInvitationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resourceShareInvitations != null) {
    contents.resourceShareInvitations = de_ResourceShareInvitationList(data.resourceShareInvitations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceShareInvitationsCommandError
 */
const de_GetResourceShareInvitationsCommandError = async (
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
      throw await de_InvalidMaxResultsExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.ram#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "ResourceShareInvitationArnNotFoundException":
    case "com.amazonaws.ram#ResourceShareInvitationArnNotFoundException":
      throw await de_ResourceShareInvitationArnNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetResourceSharesCommand
 */
export const de_GetResourceSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceSharesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourceSharesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resourceShares != null) {
    contents.resourceShares = de_ResourceShareList(data.resourceShares, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceSharesCommandError
 */
const de_GetResourceSharesCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListPendingInvitationResourcesCommand
 */
export const de_ListPendingInvitationResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPendingInvitationResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPendingInvitationResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resources != null) {
    contents.resources = de_ResourceList(data.resources, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPendingInvitationResourcesCommandError
 */
const de_ListPendingInvitationResourcesCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.ram#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "ResourceShareInvitationAlreadyRejectedException":
    case "com.amazonaws.ram#ResourceShareInvitationAlreadyRejectedException":
      throw await de_ResourceShareInvitationAlreadyRejectedExceptionRes(parsedOutput, context);
    case "ResourceShareInvitationArnNotFoundException":
    case "com.amazonaws.ram#ResourceShareInvitationArnNotFoundException":
      throw await de_ResourceShareInvitationArnNotFoundExceptionRes(parsedOutput, context);
    case "ResourceShareInvitationExpiredException":
    case "com.amazonaws.ram#ResourceShareInvitationExpiredException":
      throw await de_ResourceShareInvitationExpiredExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListPermissionsCommand
 */
export const de_ListPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.permissions != null) {
    contents.permissions = de_ResourceSharePermissionList(data.permissions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPermissionsCommandError
 */
const de_ListPermissionsCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListPermissionVersionsCommand
 */
export const de_ListPermissionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPermissionVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.permissions != null) {
    contents.permissions = de_ResourceSharePermissionList(data.permissions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPermissionVersionsCommandError
 */
const de_ListPermissionVersionsCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListPrincipalsCommand
 */
export const de_ListPrincipalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrincipalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPrincipalsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.principals != null) {
    contents.principals = de_PrincipalList(data.principals, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPrincipalsCommandError
 */
const de_ListPrincipalsCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListResourcesCommand
 */
export const de_ListResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resources != null) {
    contents.resources = de_ResourceList(data.resources, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListResourcesCommandError
 */
const de_ListResourcesCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidResourceTypeException":
    case "com.amazonaws.ram#InvalidResourceTypeException":
      throw await de_InvalidResourceTypeExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListResourceSharePermissionsCommand
 */
export const de_ListResourceSharePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSharePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListResourceSharePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.permissions != null) {
    contents.permissions = de_ResourceSharePermissionList(data.permissions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceSharePermissionsCommandError
 */
const de_ListResourceSharePermissionsCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListResourceTypesCommand
 */
export const de_ListResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListResourceTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.resourceTypes != null) {
    contents.resourceTypes = de_ServiceNameAndResourceTypeList(data.resourceTypes, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListResourceTypesCommandError
 */
const de_ListResourceTypesCommandError = async (
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
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand
 */
export const de_PromoteResourceShareCreatedFromPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteResourceShareCreatedFromPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PromoteResourceShareCreatedFromPolicyCommandError(output, context);
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

/**
 * deserializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommandError
 */
const de_PromoteResourceShareCreatedFromPolicyCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.ram#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceShareLimitExceededException":
    case "com.amazonaws.ram#ResourceShareLimitExceededException":
      throw await de_ResourceShareLimitExceededExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RejectResourceShareInvitationCommand
 */
export const de_RejectResourceShareInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectResourceShareInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RejectResourceShareInvitationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.resourceShareInvitation != null) {
    contents.resourceShareInvitation = de_ResourceShareInvitation(data.resourceShareInvitation, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RejectResourceShareInvitationCommandError
 */
const de_RejectResourceShareInvitationCommandError = async (
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
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidClientTokenException":
    case "com.amazonaws.ram#InvalidClientTokenException":
      throw await de_InvalidClientTokenExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceShareInvitationAlreadyAcceptedException":
    case "com.amazonaws.ram#ResourceShareInvitationAlreadyAcceptedException":
      throw await de_ResourceShareInvitationAlreadyAcceptedExceptionRes(parsedOutput, context);
    case "ResourceShareInvitationAlreadyRejectedException":
    case "com.amazonaws.ram#ResourceShareInvitationAlreadyRejectedException":
      throw await de_ResourceShareInvitationAlreadyRejectedExceptionRes(parsedOutput, context);
    case "ResourceShareInvitationArnNotFoundException":
    case "com.amazonaws.ram#ResourceShareInvitationArnNotFoundException":
      throw await de_ResourceShareInvitationArnNotFoundExceptionRes(parsedOutput, context);
    case "ResourceShareInvitationExpiredException":
    case "com.amazonaws.ram#ResourceShareInvitationExpiredException":
      throw await de_ResourceShareInvitationExpiredExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "ResourceArnNotFoundException":
    case "com.amazonaws.ram#ResourceArnNotFoundException":
      throw await de_ResourceArnNotFoundExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TagLimitExceededException":
    case "com.amazonaws.ram#TagLimitExceededException":
      throw await de_TagLimitExceededExceptionRes(parsedOutput, context);
    case "TagPolicyViolationException":
    case "com.amazonaws.ram#TagPolicyViolationException":
      throw await de_TagPolicyViolationExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateResourceShareCommand
 */
export const de_UpdateResourceShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceShareCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateResourceShareCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.resourceShare != null) {
    contents.resourceShare = de_ResourceShare(data.resourceShare, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResourceShareCommandError
 */
const de_UpdateResourceShareCommandError = async (
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
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidClientTokenException":
    case "com.amazonaws.ram#InvalidClientTokenException":
      throw await de_InvalidClientTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.ram#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MalformedArnException":
    case "com.amazonaws.ram#MalformedArnException":
      throw await de_MalformedArnExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.ram#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.ram#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ServerInternalException":
    case "com.amazonaws.ram#ServerInternalException":
      throw await de_ServerInternalExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ram#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnknownResourceException":
    case "com.amazonaws.ram#UnknownResourceException":
      throw await de_UnknownResourceExceptionRes(parsedOutput, context);
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
/**
 * deserializeAws_restJson1IdempotentParameterMismatchExceptionRes
 */
const de_IdempotentParameterMismatchExceptionRes = async (
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

/**
 * deserializeAws_restJson1InvalidClientTokenExceptionRes
 */
const de_InvalidClientTokenExceptionRes = async (
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

/**
 * deserializeAws_restJson1InvalidMaxResultsExceptionRes
 */
const de_InvalidMaxResultsExceptionRes = async (
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

/**
 * deserializeAws_restJson1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
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

/**
 * deserializeAws_restJson1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
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

/**
 * deserializeAws_restJson1InvalidResourceTypeExceptionRes
 */
const de_InvalidResourceTypeExceptionRes = async (
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

/**
 * deserializeAws_restJson1InvalidStateTransitionExceptionRes
 */
const de_InvalidStateTransitionExceptionRes = async (
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

/**
 * deserializeAws_restJson1MalformedArnExceptionRes
 */
const de_MalformedArnExceptionRes = async (
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

/**
 * deserializeAws_restJson1MissingRequiredParameterExceptionRes
 */
const de_MissingRequiredParameterExceptionRes = async (
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

/**
 * deserializeAws_restJson1OperationNotPermittedExceptionRes
 */
const de_OperationNotPermittedExceptionRes = async (
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

/**
 * deserializeAws_restJson1ResourceArnNotFoundExceptionRes
 */
const de_ResourceArnNotFoundExceptionRes = async (
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

/**
 * deserializeAws_restJson1ResourceShareInvitationAlreadyAcceptedExceptionRes
 */
const de_ResourceShareInvitationAlreadyAcceptedExceptionRes = async (
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

/**
 * deserializeAws_restJson1ResourceShareInvitationAlreadyRejectedExceptionRes
 */
const de_ResourceShareInvitationAlreadyRejectedExceptionRes = async (
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

/**
 * deserializeAws_restJson1ResourceShareInvitationArnNotFoundExceptionRes
 */
const de_ResourceShareInvitationArnNotFoundExceptionRes = async (
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

/**
 * deserializeAws_restJson1ResourceShareInvitationExpiredExceptionRes
 */
const de_ResourceShareInvitationExpiredExceptionRes = async (
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

/**
 * deserializeAws_restJson1ResourceShareLimitExceededExceptionRes
 */
const de_ResourceShareLimitExceededExceptionRes = async (
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

/**
 * deserializeAws_restJson1ServerInternalExceptionRes
 */
const de_ServerInternalExceptionRes = async (
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

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
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

/**
 * deserializeAws_restJson1TagLimitExceededExceptionRes
 */
const de_TagLimitExceededExceptionRes = async (
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

/**
 * deserializeAws_restJson1TagPolicyViolationExceptionRes
 */
const de_TagPolicyViolationExceptionRes = async (
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

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
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

/**
 * deserializeAws_restJson1UnknownResourceExceptionRes
 */
const de_UnknownResourceExceptionRes = async (
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

/**
 * serializeAws_restJson1PermissionArnList
 */
const se_PermissionArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1PrincipalArnOrIdList
 */
const se_PrincipalArnOrIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ResourceArnList
 */
const se_ResourceArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ResourceShareArnList
 */
const se_ResourceShareArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ResourceShareInvitationArnList
 */
const se_ResourceShareInvitationArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1TagFilter
 */
const se_TagFilter = (input: TagFilter, context: __SerdeContext): any => {
  return {
    ...(input.tagKey != null && { tagKey: input.tagKey }),
    ...(input.tagValues != null && { tagValues: se_TagValueList(input.tagValues, context) }),
  };
};

/**
 * serializeAws_restJson1TagFilters
 */
const se_TagFilters = (input: TagFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TagFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1TagValueList
 */
const se_TagValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1PolicyList
 */
const de_PolicyList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Principal
 */
const de_Principal = (output: any, context: __SerdeContext): Principal => {
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

/**
 * deserializeAws_restJson1PrincipalList
 */
const de_PrincipalList = (output: any, context: __SerdeContext): Principal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Principal(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
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

/**
 * deserializeAws_restJson1ResourceList
 */
const de_ResourceList = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Resource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceShare
 */
const de_ResourceShare = (output: any, context: __SerdeContext): ResourceShare => {
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
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResourceShareAssociation
 */
const de_ResourceShareAssociation = (output: any, context: __SerdeContext): ResourceShareAssociation => {
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

/**
 * deserializeAws_restJson1ResourceShareAssociationList
 */
const de_ResourceShareAssociationList = (output: any, context: __SerdeContext): ResourceShareAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceShareAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceShareInvitation
 */
const de_ResourceShareInvitation = (output: any, context: __SerdeContext): ResourceShareInvitation => {
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
        ? de_ResourceShareAssociationList(output.resourceShareAssociations, context)
        : undefined,
    resourceShareInvitationArn: __expectString(output.resourceShareInvitationArn),
    resourceShareName: __expectString(output.resourceShareName),
    senderAccountId: __expectString(output.senderAccountId),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ResourceShareInvitationList
 */
const de_ResourceShareInvitationList = (output: any, context: __SerdeContext): ResourceShareInvitation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceShareInvitation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceShareList
 */
const de_ResourceShareList = (output: any, context: __SerdeContext): ResourceShare[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceShare(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceSharePermissionDetail
 */
const de_ResourceSharePermissionDetail = (output: any, context: __SerdeContext): ResourceSharePermissionDetail => {
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

/**
 * deserializeAws_restJson1ResourceSharePermissionList
 */
const de_ResourceSharePermissionList = (output: any, context: __SerdeContext): ResourceSharePermissionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceSharePermissionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceSharePermissionSummary
 */
const de_ResourceSharePermissionSummary = (output: any, context: __SerdeContext): ResourceSharePermissionSummary => {
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

/**
 * deserializeAws_restJson1ServiceNameAndResourceType
 */
const de_ServiceNameAndResourceType = (output: any, context: __SerdeContext): ServiceNameAndResourceType => {
  return {
    resourceRegionScope: __expectString(output.resourceRegionScope),
    resourceType: __expectString(output.resourceType),
    serviceName: __expectString(output.serviceName),
  } as any;
};

/**
 * deserializeAws_restJson1ServiceNameAndResourceTypeList
 */
const de_ServiceNameAndResourceTypeList = (output: any, context: __SerdeContext): ServiceNameAndResourceType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceNameAndResourceType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
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
