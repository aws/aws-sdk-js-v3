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

export const serializeAws_restJson1_1AcceptResourceShareInvitationCommand = async (
  input: AcceptResourceShareInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/acceptresourceshareinvitation";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    ...(input.resourceShareInvitationArn !== undefined && {
      resourceShareInvitationArn: input.resourceShareInvitationArn
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1AssociateResourceShareCommand = async (
  input: AssociateResourceShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/associateresourceshare";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    ...(input.principals !== undefined && {
      principals: serializeAws_restJson1_1PrincipalArnOrIdList(
        input.principals,
        context
      )
    }),
    ...(input.resourceArns !== undefined && {
      resourceArns: serializeAws_restJson1_1ResourceArnList(
        input.resourceArns,
        context
      )
    }),
    ...(input.resourceShareArn !== undefined && {
      resourceShareArn: input.resourceShareArn
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1AssociateResourceSharePermissionCommand = async (
  input: AssociateResourceSharePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/associateresourcesharepermission";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    ...(input.permissionArn !== undefined && {
      permissionArn: input.permissionArn
    }),
    ...(input.replace !== undefined && { replace: input.replace }),
    ...(input.resourceShareArn !== undefined && {
      resourceShareArn: input.resourceShareArn
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateResourceShareCommand = async (
  input: CreateResourceShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/createresourceshare";
  let body: any;
  body = JSON.stringify({
    ...(input.allowExternalPrincipals !== undefined && {
      allowExternalPrincipals: input.allowExternalPrincipals
    }),
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.permissionArns !== undefined && {
      permissionArns: serializeAws_restJson1_1PermissionArnList(
        input.permissionArns,
        context
      )
    }),
    ...(input.principals !== undefined && {
      principals: serializeAws_restJson1_1PrincipalArnOrIdList(
        input.principals,
        context
      )
    }),
    ...(input.resourceArns !== undefined && {
      resourceArns: serializeAws_restJson1_1ResourceArnList(
        input.resourceArns,
        context
      )
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1_1TagList(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteResourceShareCommand = async (
  input: DeleteResourceShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/deleteresourceshare";
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    ...(input.resourceShareArn !== undefined && {
      resourceShareArn: input.resourceShareArn
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1DisassociateResourceShareCommand = async (
  input: DisassociateResourceShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/disassociateresourceshare";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    ...(input.principals !== undefined && {
      principals: serializeAws_restJson1_1PrincipalArnOrIdList(
        input.principals,
        context
      )
    }),
    ...(input.resourceArns !== undefined && {
      resourceArns: serializeAws_restJson1_1ResourceArnList(
        input.resourceArns,
        context
      )
    }),
    ...(input.resourceShareArn !== undefined && {
      resourceShareArn: input.resourceShareArn
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DisassociateResourceSharePermissionCommand = async (
  input: DisassociateResourceSharePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/disassociateresourcesharepermission";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    ...(input.permissionArn !== undefined && {
      permissionArn: input.permissionArn
    }),
    ...(input.resourceShareArn !== undefined && {
      resourceShareArn: input.resourceShareArn
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1EnableSharingWithAwsOrganizationCommand = async (
  input: EnableSharingWithAwsOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/enablesharingwithawsorganization";
  let body: any;
  body = "{}";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetPermissionCommand = async (
  input: GetPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/getpermission";
  let body: any;
  body = JSON.stringify({
    ...(input.permissionArn !== undefined && {
      permissionArn: input.permissionArn
    }),
    ...(input.permissionVersion !== undefined && {
      permissionVersion: input.permissionVersion
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetResourcePoliciesCommand = async (
  input: GetResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/getresourcepolicies";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.principal !== undefined && { principal: input.principal }),
    ...(input.resourceArns !== undefined && {
      resourceArns: serializeAws_restJson1_1ResourceArnList(
        input.resourceArns,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetResourceShareAssociationsCommand = async (
  input: GetResourceShareAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/getresourceshareassociations";
  let body: any;
  body = JSON.stringify({
    ...(input.associationStatus !== undefined && {
      associationStatus: input.associationStatus
    }),
    ...(input.associationType !== undefined && {
      associationType: input.associationType
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.principal !== undefined && { principal: input.principal }),
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.resourceShareArns !== undefined && {
      resourceShareArns: serializeAws_restJson1_1ResourceShareArnList(
        input.resourceShareArns,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetResourceShareInvitationsCommand = async (
  input: GetResourceShareInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/getresourceshareinvitations";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.resourceShareArns !== undefined && {
      resourceShareArns: serializeAws_restJson1_1ResourceShareArnList(
        input.resourceShareArns,
        context
      )
    }),
    ...(input.resourceShareInvitationArns !== undefined && {
      resourceShareInvitationArns: serializeAws_restJson1_1ResourceShareInvitationArnList(
        input.resourceShareInvitationArns,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetResourceSharesCommand = async (
  input: GetResourceSharesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/getresourceshares";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.resourceOwner !== undefined && {
      resourceOwner: input.resourceOwner
    }),
    ...(input.resourceShareArns !== undefined && {
      resourceShareArns: serializeAws_restJson1_1ResourceShareArnList(
        input.resourceShareArns,
        context
      )
    }),
    ...(input.resourceShareStatus !== undefined && {
      resourceShareStatus: input.resourceShareStatus
    }),
    ...(input.tagFilters !== undefined && {
      tagFilters: serializeAws_restJson1_1TagFilters(input.tagFilters, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListPendingInvitationResourcesCommand = async (
  input: ListPendingInvitationResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/listpendinginvitationresources";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.resourceShareInvitationArn !== undefined && {
      resourceShareInvitationArn: input.resourceShareInvitationArn
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListPermissionsCommand = async (
  input: ListPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/listpermissions";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.resourceType !== undefined && {
      resourceType: input.resourceType
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListPrincipalsCommand = async (
  input: ListPrincipalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/listprincipals";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.principals !== undefined && {
      principals: serializeAws_restJson1_1PrincipalArnOrIdList(
        input.principals,
        context
      )
    }),
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.resourceOwner !== undefined && {
      resourceOwner: input.resourceOwner
    }),
    ...(input.resourceShareArns !== undefined && {
      resourceShareArns: serializeAws_restJson1_1ResourceShareArnList(
        input.resourceShareArns,
        context
      )
    }),
    ...(input.resourceType !== undefined && {
      resourceType: input.resourceType
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListResourceSharePermissionsCommand = async (
  input: ListResourceSharePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/listresourcesharepermissions";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.resourceShareArn !== undefined && {
      resourceShareArn: input.resourceShareArn
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListResourcesCommand = async (
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/listresources";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.principal !== undefined && { principal: input.principal }),
    ...(input.resourceArns !== undefined && {
      resourceArns: serializeAws_restJson1_1ResourceArnList(
        input.resourceArns,
        context
      )
    }),
    ...(input.resourceOwner !== undefined && {
      resourceOwner: input.resourceOwner
    }),
    ...(input.resourceShareArns !== undefined && {
      resourceShareArns: serializeAws_restJson1_1ResourceShareArnList(
        input.resourceShareArns,
        context
      )
    }),
    ...(input.resourceType !== undefined && {
      resourceType: input.resourceType
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1PromoteResourceShareCreatedFromPolicyCommand = async (
  input: PromoteResourceShareCreatedFromPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/promoteresourcesharecreatedfrompolicy";
  const query: any = {
    ...(input.resourceShareArn !== undefined && {
      resourceShareArn: input.resourceShareArn
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1RejectResourceShareInvitationCommand = async (
  input: RejectResourceShareInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/rejectresourceshareinvitation";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    ...(input.resourceShareInvitationArn !== undefined && {
      resourceShareInvitationArn: input.resourceShareInvitationArn
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/tagresource";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceShareArn !== undefined && {
      resourceShareArn: input.resourceShareArn
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1_1TagList(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/untagresource";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceShareArn !== undefined && {
      resourceShareArn: input.resourceShareArn
    }),
    ...(input.tagKeys !== undefined && {
      tagKeys: serializeAws_restJson1_1TagKeyList(input.tagKeys, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateResourceShareCommand = async (
  input: UpdateResourceShareCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/updateresourceshare";
  let body: any;
  body = JSON.stringify({
    ...(input.allowExternalPrincipals !== undefined && {
      allowExternalPrincipals: input.allowExternalPrincipals
    }),
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.resourceShareArn !== undefined && {
      resourceShareArn: input.resourceShareArn
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1_1AcceptResourceShareInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptResourceShareInvitationCommandOutput> => {
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
};

const deserializeAws_restJson1_1AcceptResourceShareInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptResourceShareInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.resourcesharing.V2018_01_04#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationAlreadyAcceptedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationAlreadyAcceptedException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationAlreadyAcceptedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationAlreadyRejectedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationAlreadyRejectedException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationAlreadyRejectedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationArnNotFoundException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationArnNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationArnNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationExpiredException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationExpiredException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationExpiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_restJson1_1AssociateResourceShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceShareCommandOutput> => {
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
};

const deserializeAws_restJson1_1AssociateResourceShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.resourcesharing.V2018_01_04#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateTransitionException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidStateTransitionException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidStateTransitionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareLimitExceededException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
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

export const deserializeAws_restJson1_1AssociateResourceSharePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceSharePermissionCommandOutput> => {
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
};

const deserializeAws_restJson1_1AssociateResourceSharePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceSharePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
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

export const deserializeAws_restJson1_1CreateResourceShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceShareCommandOutput> => {
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
};

const deserializeAws_restJson1_1CreateResourceShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.resourcesharing.V2018_01_04#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateTransitionException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidStateTransitionException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidStateTransitionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareLimitExceededException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagPolicyViolationException":
    case "com.amazonaws.resourcesharing.V2018_01_04#TagPolicyViolationException":
      response = {
        ...(await deserializeAws_restJson1_1TagPolicyViolationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteResourceShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceShareCommandOutput> => {
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
};

const deserializeAws_restJson1_1DeleteResourceShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.resourcesharing.V2018_01_04#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateTransitionException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidStateTransitionException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidStateTransitionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
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

export const deserializeAws_restJson1_1DisassociateResourceShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceShareCommandOutput> => {
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
};

const deserializeAws_restJson1_1DisassociateResourceShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.resourcesharing.V2018_01_04#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateTransitionException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidStateTransitionException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidStateTransitionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareLimitExceededException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
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

export const deserializeAws_restJson1_1DisassociateResourceSharePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceSharePermissionCommandOutput> => {
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
};

const deserializeAws_restJson1_1DisassociateResourceSharePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceSharePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
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

export const deserializeAws_restJson1_1EnableSharingWithAwsOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSharingWithAwsOrganizationCommandOutput> => {
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
};

const deserializeAws_restJson1_1EnableSharingWithAwsOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSharingWithAwsOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_restJson1_1GetPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
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

export const deserializeAws_restJson1_1GetResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetResourcePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_restJson1_1GetResourceShareAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceShareAssociationsCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetResourceShareAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceShareAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
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

export const deserializeAws_restJson1_1GetResourceShareInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceShareInvitationsCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetResourceShareInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceShareInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidMaxResultsException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidMaxResultsException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidMaxResultsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationArnNotFoundException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationArnNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationArnNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_restJson1_1GetResourceSharesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceSharesCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetResourceSharesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceSharesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
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

export const deserializeAws_restJson1_1ListPendingInvitationResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPendingInvitationResourcesCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListPendingInvitationResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPendingInvitationResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_restJson1_1MissingRequiredParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationAlreadyRejectedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationAlreadyRejectedException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationAlreadyRejectedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationArnNotFoundException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationArnNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationArnNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationExpiredException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationExpiredException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationExpiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_restJson1_1ListPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_restJson1_1ListPrincipalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrincipalsCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListPrincipalsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPrincipalsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
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

export const deserializeAws_restJson1_1ListResourceSharePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSharePermissionsCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListResourceSharePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSharePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
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

export const deserializeAws_restJson1_1ListResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceTypeException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidResourceTypeException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidResourceTypeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
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

export const deserializeAws_restJson1_1PromoteResourceShareCreatedFromPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteResourceShareCreatedFromPolicyCommandOutput> => {
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
};

const deserializeAws_restJson1_1PromoteResourceShareCreatedFromPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PromoteResourceShareCreatedFromPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_restJson1_1MissingRequiredParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_restJson1_1RejectResourceShareInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectResourceShareInvitationCommandOutput> => {
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
};

const deserializeAws_restJson1_1RejectResourceShareInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectResourceShareInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.resourcesharing.V2018_01_04#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationAlreadyAcceptedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationAlreadyAcceptedException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationAlreadyAcceptedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationAlreadyRejectedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationAlreadyRejectedException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationAlreadyRejectedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationArnNotFoundException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationArnNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationArnNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceShareInvitationExpiredException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceShareInvitationExpiredException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceShareInvitationExpiredExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_restJson1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceArnNotFoundException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ResourceArnNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceArnNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagLimitExceededException":
    case "com.amazonaws.resourcesharing.V2018_01_04#TagLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1TagLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagPolicyViolationException":
    case "com.amazonaws.resourcesharing.V2018_01_04#TagPolicyViolationException":
      response = {
        ...(await deserializeAws_restJson1_1TagPolicyViolationExceptionResponse(
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

export const deserializeAws_restJson1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateResourceShareCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceShareCommandOutput> => {
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
};

const deserializeAws_restJson1_1UpdateResourceShareCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceShareCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.resourcesharing.V2018_01_04#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidClientTokenException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidClientTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidClientTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedArnException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MalformedArnException":
      response = {
        ...(await deserializeAws_restJson1_1MalformedArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.resourcesharing.V2018_01_04#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_restJson1_1MissingRequiredParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.resourcesharing.V2018_01_04#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_restJson1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServerInternalException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServerInternalException":
      response = {
        ...(await deserializeAws_restJson1_1ServerInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.resourcesharing.V2018_01_04#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceException":
    case "com.amazonaws.resourcesharing.V2018_01_04#UnknownResourceException":
      response = {
        ...(await deserializeAws_restJson1_1UnknownResourceExceptionResponse(
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

const deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const contents: IdempotentParameterMismatchException = {
    name: "IdempotentParameterMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidClientTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClientTokenException> => {
  const contents: InvalidClientTokenException = {
    name: "InvalidClientTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidMaxResultsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMaxResultsException> => {
  const contents: InvalidMaxResultsException = {
    name: "InvalidMaxResultsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidResourceTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceTypeException> => {
  const contents: InvalidResourceTypeException = {
    name: "InvalidResourceTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidStateTransitionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateTransitionException> => {
  const contents: InvalidStateTransitionException = {
    name: "InvalidStateTransitionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1MalformedArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedArnException> => {
  const contents: MalformedArnException = {
    name: "MalformedArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1MissingRequiredParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingRequiredParameterException> => {
  const contents: MissingRequiredParameterException = {
    name: "MissingRequiredParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1OperationNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const contents: OperationNotPermittedException = {
    name: "OperationNotPermittedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceArnNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceArnNotFoundException> => {
  const contents: ResourceArnNotFoundException = {
    name: "ResourceArnNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceShareInvitationAlreadyAcceptedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceShareInvitationAlreadyAcceptedException> => {
  const contents: ResourceShareInvitationAlreadyAcceptedException = {
    name: "ResourceShareInvitationAlreadyAcceptedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceShareInvitationAlreadyRejectedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceShareInvitationAlreadyRejectedException> => {
  const contents: ResourceShareInvitationAlreadyRejectedException = {
    name: "ResourceShareInvitationAlreadyRejectedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceShareInvitationArnNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceShareInvitationArnNotFoundException> => {
  const contents: ResourceShareInvitationArnNotFoundException = {
    name: "ResourceShareInvitationArnNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceShareInvitationExpiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceShareInvitationExpiredException> => {
  const contents: ResourceShareInvitationExpiredException = {
    name: "ResourceShareInvitationExpiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceShareLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceShareLimitExceededException> => {
  const contents: ResourceShareLimitExceededException = {
    name: "ResourceShareLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServerInternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerInternalException> => {
  const contents: ServerInternalException = {
    name: "ServerInternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TagLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagLimitExceededException> => {
  const contents: TagLimitExceededException = {
    name: "TagLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TagPolicyViolationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagPolicyViolationException> => {
  const contents: TagPolicyViolationException = {
    name: "TagPolicyViolationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnknownResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnknownResourceException> => {
  const contents: UnknownResourceException = {
    name: "UnknownResourceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1PermissionArnList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1PrincipalArnOrIdList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1ResourceArnList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1ResourceShareArnList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1ResourceShareInvitationArnList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  return {
    ...(input.key !== undefined && { key: input.key }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_restJson1_1TagFilter = (
  input: TagFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.tagKey !== undefined && { tagKey: input.tagKey }),
    ...(input.tagValues !== undefined && {
      tagValues: serializeAws_restJson1_1TagValueList(input.tagValues, context)
    })
  };
};

const serializeAws_restJson1_1TagFilters = (
  input: TagFilter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1TagFilter(entry, context));
};

const serializeAws_restJson1_1TagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Tag(entry, context));
};

const serializeAws_restJson1_1TagValueList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const deserializeAws_restJson1_1PolicyList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Principal = (
  output: any,
  context: __SerdeContext
): Principal => {
  return {
    __type: "Principal",
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    external:
      output.external !== undefined && output.external !== null
        ? output.external
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? new Date(Math.round(output.lastUpdatedTime * 1000))
        : undefined,
    resourceShareArn:
      output.resourceShareArn !== undefined && output.resourceShareArn !== null
        ? output.resourceShareArn
        : undefined
  } as any;
};

const deserializeAws_restJson1_1PrincipalList = (
  output: any,
  context: __SerdeContext
): Principal[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Principal(entry, context)
  );
};

const deserializeAws_restJson1_1Resource = (
  output: any,
  context: __SerdeContext
): Resource => {
  return {
    __type: "Resource",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? new Date(Math.round(output.lastUpdatedTime * 1000))
        : undefined,
    resourceGroupArn:
      output.resourceGroupArn !== undefined && output.resourceGroupArn !== null
        ? output.resourceGroupArn
        : undefined,
    resourceShareArn:
      output.resourceShareArn !== undefined && output.resourceShareArn !== null
        ? output.resourceShareArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    statusMessage:
      output.statusMessage !== undefined && output.statusMessage !== null
        ? output.statusMessage
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ResourceList = (
  output: any,
  context: __SerdeContext
): Resource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Resource(entry, context)
  );
};

const deserializeAws_restJson1_1ResourceShare = (
  output: any,
  context: __SerdeContext
): ResourceShare => {
  return {
    __type: "ResourceShare",
    allowExternalPrincipals:
      output.allowExternalPrincipals !== undefined &&
      output.allowExternalPrincipals !== null
        ? output.allowExternalPrincipals
        : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    featureSet:
      output.featureSet !== undefined && output.featureSet !== null
        ? output.featureSet
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? new Date(Math.round(output.lastUpdatedTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    owningAccountId:
      output.owningAccountId !== undefined && output.owningAccountId !== null
        ? output.owningAccountId
        : undefined,
    resourceShareArn:
      output.resourceShareArn !== undefined && output.resourceShareArn !== null
        ? output.resourceShareArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    statusMessage:
      output.statusMessage !== undefined && output.statusMessage !== null
        ? output.statusMessage
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1_1TagList(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ResourceShareAssociation = (
  output: any,
  context: __SerdeContext
): ResourceShareAssociation => {
  return {
    __type: "ResourceShareAssociation",
    associatedEntity:
      output.associatedEntity !== undefined && output.associatedEntity !== null
        ? output.associatedEntity
        : undefined,
    associationType:
      output.associationType !== undefined && output.associationType !== null
        ? output.associationType
        : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    external:
      output.external !== undefined && output.external !== null
        ? output.external
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? new Date(Math.round(output.lastUpdatedTime * 1000))
        : undefined,
    resourceShareArn:
      output.resourceShareArn !== undefined && output.resourceShareArn !== null
        ? output.resourceShareArn
        : undefined,
    resourceShareName:
      output.resourceShareName !== undefined &&
      output.resourceShareName !== null
        ? output.resourceShareName
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    statusMessage:
      output.statusMessage !== undefined && output.statusMessage !== null
        ? output.statusMessage
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ResourceShareAssociationList = (
  output: any,
  context: __SerdeContext
): ResourceShareAssociation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ResourceShareAssociation(entry, context)
  );
};

const deserializeAws_restJson1_1ResourceShareInvitation = (
  output: any,
  context: __SerdeContext
): ResourceShareInvitation => {
  return {
    __type: "ResourceShareInvitation",
    invitationTimestamp:
      output.invitationTimestamp !== undefined &&
      output.invitationTimestamp !== null
        ? new Date(Math.round(output.invitationTimestamp * 1000))
        : undefined,
    receiverAccountId:
      output.receiverAccountId !== undefined &&
      output.receiverAccountId !== null
        ? output.receiverAccountId
        : undefined,
    resourceShareArn:
      output.resourceShareArn !== undefined && output.resourceShareArn !== null
        ? output.resourceShareArn
        : undefined,
    resourceShareAssociations:
      output.resourceShareAssociations !== undefined &&
      output.resourceShareAssociations !== null
        ? deserializeAws_restJson1_1ResourceShareAssociationList(
            output.resourceShareAssociations,
            context
          )
        : undefined,
    resourceShareInvitationArn:
      output.resourceShareInvitationArn !== undefined &&
      output.resourceShareInvitationArn !== null
        ? output.resourceShareInvitationArn
        : undefined,
    resourceShareName:
      output.resourceShareName !== undefined &&
      output.resourceShareName !== null
        ? output.resourceShareName
        : undefined,
    senderAccountId:
      output.senderAccountId !== undefined && output.senderAccountId !== null
        ? output.senderAccountId
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ResourceShareInvitationList = (
  output: any,
  context: __SerdeContext
): ResourceShareInvitation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ResourceShareInvitation(entry, context)
  );
};

const deserializeAws_restJson1_1ResourceShareList = (
  output: any,
  context: __SerdeContext
): ResourceShare[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ResourceShare(entry, context)
  );
};

const deserializeAws_restJson1_1ResourceSharePermissionDetail = (
  output: any,
  context: __SerdeContext
): ResourceSharePermissionDetail => {
  return {
    __type: "ResourceSharePermissionDetail",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    defaultVersion:
      output.defaultVersion !== undefined && output.defaultVersion !== null
        ? output.defaultVersion
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? new Date(Math.round(output.lastUpdatedTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    permission:
      output.permission !== undefined && output.permission !== null
        ? output.permission
        : undefined,
    resourceType:
      output.resourceType !== undefined && output.resourceType !== null
        ? output.resourceType
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ResourceSharePermissionList = (
  output: any,
  context: __SerdeContext
): ResourceSharePermissionSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ResourceSharePermissionSummary(entry, context)
  );
};

const deserializeAws_restJson1_1ResourceSharePermissionSummary = (
  output: any,
  context: __SerdeContext
): ResourceSharePermissionSummary => {
  return {
    __type: "ResourceSharePermissionSummary",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    defaultVersion:
      output.defaultVersion !== undefined && output.defaultVersion !== null
        ? output.defaultVersion
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? new Date(Math.round(output.lastUpdatedTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    resourceType:
      output.resourceType !== undefined && output.resourceType !== null
        ? output.resourceType
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_restJson1_1TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

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
