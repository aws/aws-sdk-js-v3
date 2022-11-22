// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateAccessorCommandInput, CreateAccessorCommandOutput } from "../commands/CreateAccessorCommand";
import { CreateMemberCommandInput, CreateMemberCommandOutput } from "../commands/CreateMemberCommand";
import { CreateNetworkCommandInput, CreateNetworkCommandOutput } from "../commands/CreateNetworkCommand";
import { CreateNodeCommandInput, CreateNodeCommandOutput } from "../commands/CreateNodeCommand";
import { CreateProposalCommandInput, CreateProposalCommandOutput } from "../commands/CreateProposalCommand";
import { DeleteAccessorCommandInput, DeleteAccessorCommandOutput } from "../commands/DeleteAccessorCommand";
import { DeleteMemberCommandInput, DeleteMemberCommandOutput } from "../commands/DeleteMemberCommand";
import { DeleteNodeCommandInput, DeleteNodeCommandOutput } from "../commands/DeleteNodeCommand";
import { GetAccessorCommandInput, GetAccessorCommandOutput } from "../commands/GetAccessorCommand";
import { GetMemberCommandInput, GetMemberCommandOutput } from "../commands/GetMemberCommand";
import { GetNetworkCommandInput, GetNetworkCommandOutput } from "../commands/GetNetworkCommand";
import { GetNodeCommandInput, GetNodeCommandOutput } from "../commands/GetNodeCommand";
import { GetProposalCommandInput, GetProposalCommandOutput } from "../commands/GetProposalCommand";
import { ListAccessorsCommandInput, ListAccessorsCommandOutput } from "../commands/ListAccessorsCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "../commands/ListInvitationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { ListNetworksCommandInput, ListNetworksCommandOutput } from "../commands/ListNetworksCommand";
import { ListNodesCommandInput, ListNodesCommandOutput } from "../commands/ListNodesCommand";
import { ListProposalsCommandInput, ListProposalsCommandOutput } from "../commands/ListProposalsCommand";
import { ListProposalVotesCommandInput, ListProposalVotesCommandOutput } from "../commands/ListProposalVotesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { RejectInvitationCommandInput, RejectInvitationCommandOutput } from "../commands/RejectInvitationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateMemberCommandInput, UpdateMemberCommandOutput } from "../commands/UpdateMemberCommand";
import { UpdateNodeCommandInput, UpdateNodeCommandOutput } from "../commands/UpdateNodeCommand";
import { VoteOnProposalCommandInput, VoteOnProposalCommandOutput } from "../commands/VoteOnProposalCommand";
import { ManagedBlockchainServiceException as __BaseException } from "../models/ManagedBlockchainServiceException";
import {
  AccessDeniedException,
  Accessor,
  AccessorSummary,
  ApprovalThresholdPolicy,
  IllegalActionException,
  InternalServiceErrorException,
  InvalidRequestException,
  Invitation,
  InviteAction,
  LogConfiguration,
  LogConfigurations,
  Member,
  MemberConfiguration,
  MemberFabricAttributes,
  MemberFabricConfiguration,
  MemberFabricLogPublishingConfiguration,
  MemberFrameworkAttributes,
  MemberFrameworkConfiguration,
  MemberLogPublishingConfiguration,
  MemberSummary,
  Network,
  NetworkEthereumAttributes,
  NetworkFabricAttributes,
  NetworkFabricConfiguration,
  NetworkFrameworkAttributes,
  NetworkFrameworkConfiguration,
  NetworkSummary,
  Node,
  NodeConfiguration,
  NodeEthereumAttributes,
  NodeFabricAttributes,
  NodeFabricLogPublishingConfiguration,
  NodeFrameworkAttributes,
  NodeLogPublishingConfiguration,
  NodeSummary,
  Proposal,
  ProposalActions,
  ProposalSummary,
  RemoveAction,
  ResourceAlreadyExistsException,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ResourceNotReadyException,
  ThrottlingException,
  TooManyTagsException,
  VoteSummary,
  VotingPolicy,
} from "../models/models_0";

export const serializeAws_restJson1CreateAccessorCommand = async (
  input: CreateAccessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accessors";
  let body: any;
  body = JSON.stringify({
    ...(input.AccessorType != null && { AccessorType: input.AccessorType }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
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

export const serializeAws_restJson1CreateMemberCommand = async (
  input: CreateMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks/{NetworkId}/members";
  resolvedPath = __resolvedPath(resolvedPath, input, "NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.InvitationId != null && { InvitationId: input.InvitationId }),
    ...(input.MemberConfiguration != null && {
      MemberConfiguration: serializeAws_restJson1MemberConfiguration(input.MemberConfiguration, context),
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

export const serializeAws_restJson1CreateNetworkCommand = async (
  input: CreateNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Framework != null && { Framework: input.Framework }),
    ...(input.FrameworkConfiguration != null && {
      FrameworkConfiguration: serializeAws_restJson1NetworkFrameworkConfiguration(
        input.FrameworkConfiguration,
        context
      ),
    }),
    ...(input.FrameworkVersion != null && { FrameworkVersion: input.FrameworkVersion }),
    ...(input.MemberConfiguration != null && {
      MemberConfiguration: serializeAws_restJson1MemberConfiguration(input.MemberConfiguration, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1InputTagMap(input.Tags, context) }),
    ...(input.VotingPolicy != null && {
      VotingPolicy: serializeAws_restJson1VotingPolicy(input.VotingPolicy, context),
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

export const serializeAws_restJson1CreateNodeCommand = async (
  input: CreateNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks/{NetworkId}/nodes";
  resolvedPath = __resolvedPath(resolvedPath, input, "NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.MemberId != null && { MemberId: input.MemberId }),
    ...(input.NodeConfiguration != null && {
      NodeConfiguration: serializeAws_restJson1NodeConfiguration(input.NodeConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1InputTagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateProposalCommand = async (
  input: CreateProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks/{NetworkId}/proposals";
  resolvedPath = __resolvedPath(resolvedPath, input, "NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Actions != null && { Actions: serializeAws_restJson1ProposalActions(input.Actions, context) }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.MemberId != null && { MemberId: input.MemberId }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1InputTagMap(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteAccessorCommand = async (
  input: DeleteAccessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accessors/{AccessorId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccessorId", () => input.AccessorId!, "{AccessorId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteMemberCommand = async (
  input: DeleteMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks/{NetworkId}/members/{MemberId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberId", () => input.MemberId!, "{MemberId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteNodeCommand = async (
  input: DeleteNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks/{NetworkId}/nodes/{NodeId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "NodeId", () => input.NodeId!, "{NodeId}", false);
  const query: any = map({
    memberId: [, input.MemberId!],
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

export const serializeAws_restJson1GetAccessorCommand = async (
  input: GetAccessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accessors/{AccessorId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "AccessorId", () => input.AccessorId!, "{AccessorId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetMemberCommand = async (
  input: GetMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks/{NetworkId}/members/{MemberId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberId", () => input.MemberId!, "{MemberId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetNetworkCommand = async (
  input: GetNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks/{NetworkId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetNodeCommand = async (
  input: GetNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks/{NetworkId}/nodes/{NodeId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "NodeId", () => input.NodeId!, "{NodeId}", false);
  const query: any = map({
    memberId: [, input.MemberId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetProposalCommand = async (
  input: GetProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/networks/{NetworkId}/proposals/{ProposalId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ProposalId", () => input.ProposalId!, "{ProposalId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListAccessorsCommand = async (
  input: ListAccessorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accessors";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListInvitationsCommand = async (
  input: ListInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListMembersCommand = async (
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks/{NetworkId}/members";
  resolvedPath = __resolvedPath(resolvedPath, input, "NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  const query: any = map({
    name: [, input.Name!],
    status: [, input.Status!],
    isOwned: [() => input.IsOwned !== void 0, () => input.IsOwned!.toString()],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListNetworksCommand = async (
  input: ListNetworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks";
  const query: any = map({
    name: [, input.Name!],
    framework: [, input.Framework!],
    status: [, input.Status!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListNodesCommand = async (
  input: ListNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks/{NetworkId}/nodes";
  resolvedPath = __resolvedPath(resolvedPath, input, "NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  const query: any = map({
    memberId: [, input.MemberId!],
    status: [, input.Status!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListProposalsCommand = async (
  input: ListProposalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks/{NetworkId}/proposals";
  resolvedPath = __resolvedPath(resolvedPath, input, "NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListProposalVotesCommand = async (
  input: ListProposalVotesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/networks/{NetworkId}/proposals/{ProposalId}/votes";
  resolvedPath = __resolvedPath(resolvedPath, input, "NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ProposalId", () => input.ProposalId!, "{ProposalId}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1RejectInvitationCommand = async (
  input: RejectInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations/{InvitationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "InvitationId",
    () => input.InvitationId!,
    "{InvitationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: serializeAws_restJson1InputTagMap(input.Tags, context) }),
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
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
    ],
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

export const serializeAws_restJson1UpdateMemberCommand = async (
  input: UpdateMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks/{NetworkId}/members/{MemberId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "MemberId", () => input.MemberId!, "{MemberId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.LogPublishingConfiguration != null && {
      LogPublishingConfiguration: serializeAws_restJson1MemberLogPublishingConfiguration(
        input.LogPublishingConfiguration,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateNodeCommand = async (
  input: UpdateNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks/{NetworkId}/nodes/{NodeId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "NodeId", () => input.NodeId!, "{NodeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.LogPublishingConfiguration != null && {
      LogPublishingConfiguration: serializeAws_restJson1NodeLogPublishingConfiguration(
        input.LogPublishingConfiguration,
        context
      ),
    }),
    ...(input.MemberId != null && { MemberId: input.MemberId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1VoteOnProposalCommand = async (
  input: VoteOnProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/networks/{NetworkId}/proposals/{ProposalId}/votes";
  resolvedPath = __resolvedPath(resolvedPath, input, "NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ProposalId", () => input.ProposalId!, "{ProposalId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Vote != null && { Vote: input.Vote }),
    ...(input.VoterMemberId != null && { VoterMemberId: input.VoterMemberId }),
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

export const deserializeAws_restJson1CreateAccessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAccessorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessorId != null) {
    contents.AccessorId = __expectString(data.AccessorId);
  }
  if (data.BillingToken != null) {
    contents.BillingToken = __expectString(data.BillingToken);
  }
  return contents;
};

const deserializeAws_restJson1CreateAccessorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.managedblockchain#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MemberId != null) {
    contents.MemberId = __expectString(data.MemberId);
  }
  return contents;
};

const deserializeAws_restJson1CreateMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.managedblockchain#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      throw await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.managedblockchain#TooManyTagsException":
      throw await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MemberId != null) {
    contents.MemberId = __expectString(data.MemberId);
  }
  if (data.NetworkId != null) {
    contents.NetworkId = __expectString(data.NetworkId);
  }
  return contents;
};

const deserializeAws_restJson1CreateNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.managedblockchain#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.managedblockchain#TooManyTagsException":
      throw await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateNodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NodeId != null) {
    contents.NodeId = __expectString(data.NodeId);
  }
  return contents;
};

const deserializeAws_restJson1CreateNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.managedblockchain#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      throw await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.managedblockchain#TooManyTagsException":
      throw await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProposalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateProposalCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProposalId != null) {
    contents.ProposalId = __expectString(data.ProposalId);
  }
  return contents;
};

const deserializeAws_restJson1CreateProposalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProposalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      throw await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.managedblockchain#TooManyTagsException":
      throw await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteAccessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAccessorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAccessorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      throw await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteNodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      throw await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetAccessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAccessorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Accessor != null) {
    contents.Accessor = deserializeAws_restJson1Accessor(data.Accessor, context);
  }
  return contents;
};

const deserializeAws_restJson1GetAccessorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Member != null) {
    contents.Member = deserializeAws_restJson1Member(data.Member, context);
  }
  return contents;
};

const deserializeAws_restJson1GetMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Network != null) {
    contents.Network = deserializeAws_restJson1Network(data.Network, context);
  }
  return contents;
};

const deserializeAws_restJson1GetNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Node != null) {
    contents.Node = deserializeAws_restJson1Node(data.Node, context);
  }
  return contents;
};

const deserializeAws_restJson1GetNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProposalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetProposalCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Proposal != null) {
    contents.Proposal = deserializeAws_restJson1Proposal(data.Proposal, context);
  }
  return contents;
};

const deserializeAws_restJson1GetProposalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProposalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAccessorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAccessorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Accessors != null) {
    contents.Accessors = deserializeAws_restJson1AccessorSummaryList(data.Accessors, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAccessorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInvitationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Invitations != null) {
    contents.Invitations = deserializeAws_restJson1InvitationList(data.Invitations, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Members != null) {
    contents.Members = deserializeAws_restJson1MemberSummaryList(data.Members, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNetworksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Networks != null) {
    contents.Networks = deserializeAws_restJson1NetworkSummaryList(data.Networks, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListNetworksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNodesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Nodes != null) {
    contents.Nodes = deserializeAws_restJson1NodeSummaryList(data.Nodes, context);
  }
  return contents;
};

const deserializeAws_restJson1ListNodesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListProposalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProposalsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Proposals != null) {
    contents.Proposals = deserializeAws_restJson1ProposalSummaryList(data.Proposals, context);
  }
  return contents;
};

const deserializeAws_restJson1ListProposalsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListProposalVotesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalVotesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProposalVotesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ProposalVotes != null) {
    contents.ProposalVotes = deserializeAws_restJson1ProposalVoteList(data.ProposalVotes, context);
  }
  return contents;
};

const deserializeAws_restJson1ListProposalVotesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalVotesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1OutputTagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      throw await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RejectInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RejectInvitationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RejectInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalActionException":
    case "com.amazonaws.managedblockchain#IllegalActionException":
      throw await deserializeAws_restJson1IllegalActionExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      throw await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.managedblockchain#TooManyTagsException":
      throw await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context);
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
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      throw await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMemberCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateNodeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1VoteOnProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VoteOnProposalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1VoteOnProposalCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1VoteOnProposalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VoteOnProposalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "IllegalActionException":
    case "com.amazonaws.managedblockchain#IllegalActionException":
      throw await deserializeAws_restJson1IllegalActionExceptionResponse(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1IllegalActionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalActionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new IllegalActionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServiceErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const exception = new InternalServiceErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName != null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotReadyException({
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
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName != null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ApprovalThresholdPolicy = (
  input: ApprovalThresholdPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProposalDurationInHours != null && { ProposalDurationInHours: input.ProposalDurationInHours }),
    ...(input.ThresholdComparator != null && { ThresholdComparator: input.ThresholdComparator }),
    ...(input.ThresholdPercentage != null && { ThresholdPercentage: input.ThresholdPercentage }),
  };
};

const serializeAws_restJson1InputTagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1InviteAction = (input: InviteAction, context: __SerdeContext): any => {
  return {
    ...(input.Principal != null && { Principal: input.Principal }),
  };
};

const serializeAws_restJson1InviteActionList = (input: InviteAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1InviteAction(entry, context);
    });
};

const serializeAws_restJson1LogConfiguration = (input: LogConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1LogConfigurations = (input: LogConfigurations, context: __SerdeContext): any => {
  return {
    ...(input.Cloudwatch != null && { Cloudwatch: serializeAws_restJson1LogConfiguration(input.Cloudwatch, context) }),
  };
};

const serializeAws_restJson1MemberConfiguration = (input: MemberConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FrameworkConfiguration != null && {
      FrameworkConfiguration: serializeAws_restJson1MemberFrameworkConfiguration(input.FrameworkConfiguration, context),
    }),
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.LogPublishingConfiguration != null && {
      LogPublishingConfiguration: serializeAws_restJson1MemberLogPublishingConfiguration(
        input.LogPublishingConfiguration,
        context
      ),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1InputTagMap(input.Tags, context) }),
  };
};

const serializeAws_restJson1MemberFabricConfiguration = (
  input: MemberFabricConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdminPassword != null && { AdminPassword: input.AdminPassword }),
    ...(input.AdminUsername != null && { AdminUsername: input.AdminUsername }),
  };
};

const serializeAws_restJson1MemberFabricLogPublishingConfiguration = (
  input: MemberFabricLogPublishingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CaLogs != null && { CaLogs: serializeAws_restJson1LogConfigurations(input.CaLogs, context) }),
  };
};

const serializeAws_restJson1MemberFrameworkConfiguration = (
  input: MemberFrameworkConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Fabric != null && { Fabric: serializeAws_restJson1MemberFabricConfiguration(input.Fabric, context) }),
  };
};

const serializeAws_restJson1MemberLogPublishingConfiguration = (
  input: MemberLogPublishingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Fabric != null && {
      Fabric: serializeAws_restJson1MemberFabricLogPublishingConfiguration(input.Fabric, context),
    }),
  };
};

const serializeAws_restJson1NetworkFabricConfiguration = (
  input: NetworkFabricConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Edition != null && { Edition: input.Edition }),
  };
};

const serializeAws_restJson1NetworkFrameworkConfiguration = (
  input: NetworkFrameworkConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Fabric != null && { Fabric: serializeAws_restJson1NetworkFabricConfiguration(input.Fabric, context) }),
  };
};

const serializeAws_restJson1NodeConfiguration = (input: NodeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZone != null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.LogPublishingConfiguration != null && {
      LogPublishingConfiguration: serializeAws_restJson1NodeLogPublishingConfiguration(
        input.LogPublishingConfiguration,
        context
      ),
    }),
    ...(input.StateDB != null && { StateDB: input.StateDB }),
  };
};

const serializeAws_restJson1NodeFabricLogPublishingConfiguration = (
  input: NodeFabricLogPublishingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChaincodeLogs != null && {
      ChaincodeLogs: serializeAws_restJson1LogConfigurations(input.ChaincodeLogs, context),
    }),
    ...(input.PeerLogs != null && { PeerLogs: serializeAws_restJson1LogConfigurations(input.PeerLogs, context) }),
  };
};

const serializeAws_restJson1NodeLogPublishingConfiguration = (
  input: NodeLogPublishingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Fabric != null && {
      Fabric: serializeAws_restJson1NodeFabricLogPublishingConfiguration(input.Fabric, context),
    }),
  };
};

const serializeAws_restJson1ProposalActions = (input: ProposalActions, context: __SerdeContext): any => {
  return {
    ...(input.Invitations != null && {
      Invitations: serializeAws_restJson1InviteActionList(input.Invitations, context),
    }),
    ...(input.Removals != null && { Removals: serializeAws_restJson1RemoveActionList(input.Removals, context) }),
  };
};

const serializeAws_restJson1RemoveAction = (input: RemoveAction, context: __SerdeContext): any => {
  return {
    ...(input.MemberId != null && { MemberId: input.MemberId }),
  };
};

const serializeAws_restJson1RemoveActionList = (input: RemoveAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RemoveAction(entry, context);
    });
};

const serializeAws_restJson1VotingPolicy = (input: VotingPolicy, context: __SerdeContext): any => {
  return {
    ...(input.ApprovalThresholdPolicy != null && {
      ApprovalThresholdPolicy: serializeAws_restJson1ApprovalThresholdPolicy(input.ApprovalThresholdPolicy, context),
    }),
  };
};

const deserializeAws_restJson1Accessor = (output: any, context: __SerdeContext): Accessor => {
  return {
    Arn: __expectString(output.Arn),
    BillingToken: __expectString(output.BillingToken),
    CreationDate:
      output.CreationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.CreationDate)) : undefined,
    Id: __expectString(output.Id),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AccessorSummary = (output: any, context: __SerdeContext): AccessorSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate:
      output.CreationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.CreationDate)) : undefined,
    Id: __expectString(output.Id),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AccessorSummaryList = (output: any, context: __SerdeContext): AccessorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AccessorSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ApprovalThresholdPolicy = (
  output: any,
  context: __SerdeContext
): ApprovalThresholdPolicy => {
  return {
    ProposalDurationInHours: __expectInt32(output.ProposalDurationInHours),
    ThresholdComparator: __expectString(output.ThresholdComparator),
    ThresholdPercentage: __expectInt32(output.ThresholdPercentage),
  } as any;
};

const deserializeAws_restJson1Invitation = (output: any, context: __SerdeContext): Invitation => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate:
      output.CreationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.CreationDate)) : undefined,
    ExpirationDate:
      output.ExpirationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.ExpirationDate)) : undefined,
    InvitationId: __expectString(output.InvitationId),
    NetworkSummary:
      output.NetworkSummary != null
        ? deserializeAws_restJson1NetworkSummary(output.NetworkSummary, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1InvitationList = (output: any, context: __SerdeContext): Invitation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Invitation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InviteAction = (output: any, context: __SerdeContext): InviteAction => {
  return {
    Principal: __expectString(output.Principal),
  } as any;
};

const deserializeAws_restJson1InviteActionList = (output: any, context: __SerdeContext): InviteAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InviteAction(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LogConfiguration = (output: any, context: __SerdeContext): LogConfiguration => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1LogConfigurations = (output: any, context: __SerdeContext): LogConfigurations => {
  return {
    Cloudwatch:
      output.Cloudwatch != null ? deserializeAws_restJson1LogConfiguration(output.Cloudwatch, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Member = (output: any, context: __SerdeContext): Member => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate:
      output.CreationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.CreationDate)) : undefined,
    Description: __expectString(output.Description),
    FrameworkAttributes:
      output.FrameworkAttributes != null
        ? deserializeAws_restJson1MemberFrameworkAttributes(output.FrameworkAttributes, context)
        : undefined,
    Id: __expectString(output.Id),
    KmsKeyArn: __expectString(output.KmsKeyArn),
    LogPublishingConfiguration:
      output.LogPublishingConfiguration != null
        ? deserializeAws_restJson1MemberLogPublishingConfiguration(output.LogPublishingConfiguration, context)
        : undefined,
    Name: __expectString(output.Name),
    NetworkId: __expectString(output.NetworkId),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? deserializeAws_restJson1OutputTagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1MemberFabricAttributes = (
  output: any,
  context: __SerdeContext
): MemberFabricAttributes => {
  return {
    AdminUsername: __expectString(output.AdminUsername),
    CaEndpoint: __expectString(output.CaEndpoint),
  } as any;
};

const deserializeAws_restJson1MemberFabricLogPublishingConfiguration = (
  output: any,
  context: __SerdeContext
): MemberFabricLogPublishingConfiguration => {
  return {
    CaLogs: output.CaLogs != null ? deserializeAws_restJson1LogConfigurations(output.CaLogs, context) : undefined,
  } as any;
};

const deserializeAws_restJson1MemberFrameworkAttributes = (
  output: any,
  context: __SerdeContext
): MemberFrameworkAttributes => {
  return {
    Fabric: output.Fabric != null ? deserializeAws_restJson1MemberFabricAttributes(output.Fabric, context) : undefined,
  } as any;
};

const deserializeAws_restJson1MemberLogPublishingConfiguration = (
  output: any,
  context: __SerdeContext
): MemberLogPublishingConfiguration => {
  return {
    Fabric:
      output.Fabric != null
        ? deserializeAws_restJson1MemberFabricLogPublishingConfiguration(output.Fabric, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MemberSummary = (output: any, context: __SerdeContext): MemberSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate:
      output.CreationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.CreationDate)) : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    IsOwned: __expectBoolean(output.IsOwned),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1MemberSummaryList = (output: any, context: __SerdeContext): MemberSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MemberSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Network = (output: any, context: __SerdeContext): Network => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate:
      output.CreationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.CreationDate)) : undefined,
    Description: __expectString(output.Description),
    Framework: __expectString(output.Framework),
    FrameworkAttributes:
      output.FrameworkAttributes != null
        ? deserializeAws_restJson1NetworkFrameworkAttributes(output.FrameworkAttributes, context)
        : undefined,
    FrameworkVersion: __expectString(output.FrameworkVersion),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? deserializeAws_restJson1OutputTagMap(output.Tags, context) : undefined,
    VotingPolicy:
      output.VotingPolicy != null ? deserializeAws_restJson1VotingPolicy(output.VotingPolicy, context) : undefined,
    VpcEndpointServiceName: __expectString(output.VpcEndpointServiceName),
  } as any;
};

const deserializeAws_restJson1NetworkEthereumAttributes = (
  output: any,
  context: __SerdeContext
): NetworkEthereumAttributes => {
  return {
    ChainId: __expectString(output.ChainId),
  } as any;
};

const deserializeAws_restJson1NetworkFabricAttributes = (
  output: any,
  context: __SerdeContext
): NetworkFabricAttributes => {
  return {
    Edition: __expectString(output.Edition),
    OrderingServiceEndpoint: __expectString(output.OrderingServiceEndpoint),
  } as any;
};

const deserializeAws_restJson1NetworkFrameworkAttributes = (
  output: any,
  context: __SerdeContext
): NetworkFrameworkAttributes => {
  return {
    Ethereum:
      output.Ethereum != null ? deserializeAws_restJson1NetworkEthereumAttributes(output.Ethereum, context) : undefined,
    Fabric: output.Fabric != null ? deserializeAws_restJson1NetworkFabricAttributes(output.Fabric, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkSummary = (output: any, context: __SerdeContext): NetworkSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate:
      output.CreationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.CreationDate)) : undefined,
    Description: __expectString(output.Description),
    Framework: __expectString(output.Framework),
    FrameworkVersion: __expectString(output.FrameworkVersion),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1NetworkSummaryList = (output: any, context: __SerdeContext): NetworkSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Node = (output: any, context: __SerdeContext): Node => {
  return {
    Arn: __expectString(output.Arn),
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CreationDate:
      output.CreationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.CreationDate)) : undefined,
    FrameworkAttributes:
      output.FrameworkAttributes != null
        ? deserializeAws_restJson1NodeFrameworkAttributes(output.FrameworkAttributes, context)
        : undefined,
    Id: __expectString(output.Id),
    InstanceType: __expectString(output.InstanceType),
    KmsKeyArn: __expectString(output.KmsKeyArn),
    LogPublishingConfiguration:
      output.LogPublishingConfiguration != null
        ? deserializeAws_restJson1NodeLogPublishingConfiguration(output.LogPublishingConfiguration, context)
        : undefined,
    MemberId: __expectString(output.MemberId),
    NetworkId: __expectString(output.NetworkId),
    StateDB: __expectString(output.StateDB),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? deserializeAws_restJson1OutputTagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NodeEthereumAttributes = (
  output: any,
  context: __SerdeContext
): NodeEthereumAttributes => {
  return {
    HttpEndpoint: __expectString(output.HttpEndpoint),
    WebSocketEndpoint: __expectString(output.WebSocketEndpoint),
  } as any;
};

const deserializeAws_restJson1NodeFabricAttributes = (output: any, context: __SerdeContext): NodeFabricAttributes => {
  return {
    PeerEndpoint: __expectString(output.PeerEndpoint),
    PeerEventEndpoint: __expectString(output.PeerEventEndpoint),
  } as any;
};

const deserializeAws_restJson1NodeFabricLogPublishingConfiguration = (
  output: any,
  context: __SerdeContext
): NodeFabricLogPublishingConfiguration => {
  return {
    ChaincodeLogs:
      output.ChaincodeLogs != null
        ? deserializeAws_restJson1LogConfigurations(output.ChaincodeLogs, context)
        : undefined,
    PeerLogs: output.PeerLogs != null ? deserializeAws_restJson1LogConfigurations(output.PeerLogs, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NodeFrameworkAttributes = (
  output: any,
  context: __SerdeContext
): NodeFrameworkAttributes => {
  return {
    Ethereum:
      output.Ethereum != null ? deserializeAws_restJson1NodeEthereumAttributes(output.Ethereum, context) : undefined,
    Fabric: output.Fabric != null ? deserializeAws_restJson1NodeFabricAttributes(output.Fabric, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NodeLogPublishingConfiguration = (
  output: any,
  context: __SerdeContext
): NodeLogPublishingConfiguration => {
  return {
    Fabric:
      output.Fabric != null
        ? deserializeAws_restJson1NodeFabricLogPublishingConfiguration(output.Fabric, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NodeSummary = (output: any, context: __SerdeContext): NodeSummary => {
  return {
    Arn: __expectString(output.Arn),
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CreationDate:
      output.CreationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.CreationDate)) : undefined,
    Id: __expectString(output.Id),
    InstanceType: __expectString(output.InstanceType),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1NodeSummaryList = (output: any, context: __SerdeContext): NodeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NodeSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1OutputTagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Proposal = (output: any, context: __SerdeContext): Proposal => {
  return {
    Actions: output.Actions != null ? deserializeAws_restJson1ProposalActions(output.Actions, context) : undefined,
    Arn: __expectString(output.Arn),
    CreationDate:
      output.CreationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.CreationDate)) : undefined,
    Description: __expectString(output.Description),
    ExpirationDate:
      output.ExpirationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.ExpirationDate)) : undefined,
    NetworkId: __expectString(output.NetworkId),
    NoVoteCount: __expectInt32(output.NoVoteCount),
    OutstandingVoteCount: __expectInt32(output.OutstandingVoteCount),
    ProposalId: __expectString(output.ProposalId),
    ProposedByMemberId: __expectString(output.ProposedByMemberId),
    ProposedByMemberName: __expectString(output.ProposedByMemberName),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? deserializeAws_restJson1OutputTagMap(output.Tags, context) : undefined,
    YesVoteCount: __expectInt32(output.YesVoteCount),
  } as any;
};

const deserializeAws_restJson1ProposalActions = (output: any, context: __SerdeContext): ProposalActions => {
  return {
    Invitations:
      output.Invitations != null ? deserializeAws_restJson1InviteActionList(output.Invitations, context) : undefined,
    Removals: output.Removals != null ? deserializeAws_restJson1RemoveActionList(output.Removals, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ProposalSummary = (output: any, context: __SerdeContext): ProposalSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate:
      output.CreationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.CreationDate)) : undefined,
    Description: __expectString(output.Description),
    ExpirationDate:
      output.ExpirationDate != null ? __expectNonNull(__parseRfc3339DateTime(output.ExpirationDate)) : undefined,
    ProposalId: __expectString(output.ProposalId),
    ProposedByMemberId: __expectString(output.ProposedByMemberId),
    ProposedByMemberName: __expectString(output.ProposedByMemberName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1ProposalSummaryList = (output: any, context: __SerdeContext): ProposalSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProposalSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProposalVoteList = (output: any, context: __SerdeContext): VoteSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VoteSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RemoveAction = (output: any, context: __SerdeContext): RemoveAction => {
  return {
    MemberId: __expectString(output.MemberId),
  } as any;
};

const deserializeAws_restJson1RemoveActionList = (output: any, context: __SerdeContext): RemoveAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RemoveAction(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VoteSummary = (output: any, context: __SerdeContext): VoteSummary => {
  return {
    MemberId: __expectString(output.MemberId),
    MemberName: __expectString(output.MemberName),
    Vote: __expectString(output.Vote),
  } as any;
};

const deserializeAws_restJson1VotingPolicy = (output: any, context: __SerdeContext): VotingPolicy => {
  return {
    ApprovalThresholdPolicy:
      output.ApprovalThresholdPolicy != null
        ? deserializeAws_restJson1ApprovalThresholdPolicy(output.ApprovalThresholdPolicy, context)
        : undefined,
  } as any;
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
