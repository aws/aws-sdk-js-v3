import { CreateMemberCommandInput, CreateMemberCommandOutput } from "../commands/CreateMemberCommand";
import { CreateNetworkCommandInput, CreateNetworkCommandOutput } from "../commands/CreateNetworkCommand";
import { CreateNodeCommandInput, CreateNodeCommandOutput } from "../commands/CreateNodeCommand";
import { CreateProposalCommandInput, CreateProposalCommandOutput } from "../commands/CreateProposalCommand";
import { DeleteMemberCommandInput, DeleteMemberCommandOutput } from "../commands/DeleteMemberCommand";
import { DeleteNodeCommandInput, DeleteNodeCommandOutput } from "../commands/DeleteNodeCommand";
import { GetMemberCommandInput, GetMemberCommandOutput } from "../commands/GetMemberCommand";
import { GetNetworkCommandInput, GetNetworkCommandOutput } from "../commands/GetNetworkCommand";
import { GetNodeCommandInput, GetNodeCommandOutput } from "../commands/GetNodeCommand";
import { GetProposalCommandInput, GetProposalCommandOutput } from "../commands/GetProposalCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "../commands/ListInvitationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { ListNetworksCommandInput, ListNetworksCommandOutput } from "../commands/ListNetworksCommand";
import { ListNodesCommandInput, ListNodesCommandOutput } from "../commands/ListNodesCommand";
import { ListProposalVotesCommandInput, ListProposalVotesCommandOutput } from "../commands/ListProposalVotesCommand";
import { ListProposalsCommandInput, ListProposalsCommandOutput } from "../commands/ListProposalsCommand";
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
import {
  AccessDeniedException,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

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
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace("{NetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.InvitationId !== undefined && input.InvitationId !== null && { InvitationId: input.InvitationId }),
    ...(input.MemberConfiguration !== undefined &&
      input.MemberConfiguration !== null && {
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Framework !== undefined && input.Framework !== null && { Framework: input.Framework }),
    ...(input.FrameworkConfiguration !== undefined &&
      input.FrameworkConfiguration !== null && {
        FrameworkConfiguration: serializeAws_restJson1NetworkFrameworkConfiguration(
          input.FrameworkConfiguration,
          context
        ),
      }),
    ...(input.FrameworkVersion !== undefined &&
      input.FrameworkVersion !== null && { FrameworkVersion: input.FrameworkVersion }),
    ...(input.MemberConfiguration !== undefined &&
      input.MemberConfiguration !== null && {
        MemberConfiguration: serializeAws_restJson1MemberConfiguration(input.MemberConfiguration, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1InputTagMap(input.Tags, context) }),
    ...(input.VotingPolicy !== undefined &&
      input.VotingPolicy !== null && { VotingPolicy: serializeAws_restJson1VotingPolicy(input.VotingPolicy, context) }),
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
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace("{NetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.MemberId !== undefined && input.MemberId !== null && { MemberId: input.MemberId }),
    ...(input.NodeConfiguration !== undefined &&
      input.NodeConfiguration !== null && {
        NodeConfiguration: serializeAws_restJson1NodeConfiguration(input.NodeConfiguration, context),
      }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1InputTagMap(input.Tags, context) }),
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
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace("{NetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Actions !== undefined &&
      input.Actions !== null && { Actions: serializeAws_restJson1ProposalActions(input.Actions, context) }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.MemberId !== undefined && input.MemberId !== null && { MemberId: input.MemberId }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1InputTagMap(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteMemberCommand = async (
  input: DeleteMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks/{NetworkId}/members/{MemberId}";
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace("{NetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  if (input.MemberId !== undefined) {
    const labelValue: string = input.MemberId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberId.");
    }
    resolvedPath = resolvedPath.replace("{MemberId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MemberId.");
  }
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
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace("{NetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  if (input.NodeId !== undefined) {
    const labelValue: string = input.NodeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NodeId.");
    }
    resolvedPath = resolvedPath.replace("{NodeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NodeId.");
  }
  const query: any = {
    ...(input.MemberId !== undefined && { memberId: input.MemberId }),
  };
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

export const serializeAws_restJson1GetMemberCommand = async (
  input: GetMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks/{NetworkId}/members/{MemberId}";
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace("{NetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  if (input.MemberId !== undefined) {
    const labelValue: string = input.MemberId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberId.");
    }
    resolvedPath = resolvedPath.replace("{MemberId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MemberId.");
  }
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
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace("{NetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
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
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace("{NetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  if (input.NodeId !== undefined) {
    const labelValue: string = input.NodeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NodeId.");
    }
    resolvedPath = resolvedPath.replace("{NodeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NodeId.");
  }
  const query: any = {
    ...(input.MemberId !== undefined && { memberId: input.MemberId }),
  };
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
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace("{NetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  if (input.ProposalId !== undefined) {
    const labelValue: string = input.ProposalId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ProposalId.");
    }
    resolvedPath = resolvedPath.replace("{ProposalId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ProposalId.");
  }
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

export const serializeAws_restJson1ListInvitationsCommand = async (
  input: ListInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace("{NetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  const query: any = {
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.Status !== undefined && { status: input.Status }),
    ...(input.IsOwned !== undefined && { isOwned: input.IsOwned.toString() }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/networks";
  const query: any = {
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.Framework !== undefined && { framework: input.Framework }),
    ...(input.Status !== undefined && { status: input.Status }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace("{NetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  const query: any = {
    ...(input.MemberId !== undefined && { memberId: input.MemberId }),
    ...(input.Status !== undefined && { status: input.Status }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace("{NetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace("{NetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  if (input.ProposalId !== undefined) {
    const labelValue: string = input.ProposalId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ProposalId.");
    }
    resolvedPath = resolvedPath.replace("{ProposalId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ProposalId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
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
  if (input.InvitationId !== undefined) {
    const labelValue: string = input.InvitationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InvitationId.");
    }
    resolvedPath = resolvedPath.replace("{InvitationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: InvitationId.");
  }
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
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1InputTagMap(input.Tags, context) }),
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
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
  };
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
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace("{NetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  if (input.MemberId !== undefined) {
    const labelValue: string = input.MemberId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberId.");
    }
    resolvedPath = resolvedPath.replace("{MemberId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MemberId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.LogPublishingConfiguration !== undefined &&
      input.LogPublishingConfiguration !== null && {
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
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace("{NetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  if (input.NodeId !== undefined) {
    const labelValue: string = input.NodeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NodeId.");
    }
    resolvedPath = resolvedPath.replace("{NodeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NodeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.LogPublishingConfiguration !== undefined &&
      input.LogPublishingConfiguration !== null && {
        LogPublishingConfiguration: serializeAws_restJson1NodeLogPublishingConfiguration(
          input.LogPublishingConfiguration,
          context
        ),
      }),
    ...(input.MemberId !== undefined && input.MemberId !== null && { MemberId: input.MemberId }),
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
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace("{NetworkId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  if (input.ProposalId !== undefined) {
    const labelValue: string = input.ProposalId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ProposalId.");
    }
    resolvedPath = resolvedPath.replace("{ProposalId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ProposalId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Vote !== undefined && input.Vote !== null && { Vote: input.Vote }),
    ...(input.VoterMemberId !== undefined && input.VoterMemberId !== null && { VoterMemberId: input.VoterMemberId }),
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

export const deserializeAws_restJson1CreateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMemberCommandError(output, context);
  }
  const contents: CreateMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    MemberId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MemberId !== undefined && data.MemberId !== null) {
    contents.MemberId = __expectString(data.MemberId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.managedblockchain#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.managedblockchain#TooManyTagsException":
      response = {
        ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateNetworkCommandError(output, context);
  }
  const contents: CreateNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    MemberId: undefined,
    NetworkId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MemberId !== undefined && data.MemberId !== null) {
    contents.MemberId = __expectString(data.MemberId);
  }
  if (data.NetworkId !== undefined && data.NetworkId !== null) {
    contents.NetworkId = __expectString(data.NetworkId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.managedblockchain#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.managedblockchain#TooManyTagsException":
      response = {
        ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateNodeCommandError(output, context);
  }
  const contents: CreateNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    NodeId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NodeId !== undefined && data.NodeId !== null) {
    contents.NodeId = __expectString(data.NodeId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.managedblockchain#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.managedblockchain#TooManyTagsException":
      response = {
        ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProposalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateProposalCommandError(output, context);
  }
  const contents: CreateProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ProposalId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProposalId !== undefined && data.ProposalId !== null) {
    contents.ProposalId = __expectString(data.ProposalId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateProposalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProposalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.managedblockchain#TooManyTagsException":
      response = {
        ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMemberCommandError(output, context);
  }
  const contents: DeleteMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteNodeCommandError(output, context);
  }
  const contents: DeleteNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMemberCommandError(output, context);
  }
  const contents: GetMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    Member: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Member !== undefined && data.Member !== null) {
    contents.Member = deserializeAws_restJson1Member(data.Member, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkCommandError(output, context);
  }
  const contents: GetNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    Network: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Network !== undefined && data.Network !== null) {
    contents.Network = deserializeAws_restJson1Network(data.Network, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNodeCommandError(output, context);
  }
  const contents: GetNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    Node: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Node !== undefined && data.Node !== null) {
    contents.Node = deserializeAws_restJson1Node(data.Node, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProposalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetProposalCommandError(output, context);
  }
  const contents: GetProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
    Proposal: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Proposal !== undefined && data.Proposal !== null) {
    contents.Proposal = deserializeAws_restJson1Proposal(data.Proposal, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetProposalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProposalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInvitationsCommandError(output, context);
  }
  const contents: ListInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Invitations: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Invitations !== undefined && data.Invitations !== null) {
    contents.Invitations = deserializeAws_restJson1InvitationList(data.Invitations, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMembersCommandError(output, context);
  }
  const contents: ListMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    Members: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Members !== undefined && data.Members !== null) {
    contents.Members = deserializeAws_restJson1MemberSummaryList(data.Members, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNetworksCommandError(output, context);
  }
  const contents: ListNetworksCommandOutput = {
    $metadata: deserializeMetadata(output),
    Networks: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Networks !== undefined && data.Networks !== null) {
    contents.Networks = deserializeAws_restJson1NetworkSummaryList(data.Networks, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListNetworksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNodesCommandError(output, context);
  }
  const contents: ListNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Nodes: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Nodes !== undefined && data.Nodes !== null) {
    contents.Nodes = deserializeAws_restJson1NodeSummaryList(data.Nodes, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListNodesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListProposalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProposalsCommandError(output, context);
  }
  const contents: ListProposalsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Proposals: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Proposals !== undefined && data.Proposals !== null) {
    contents.Proposals = deserializeAws_restJson1ProposalSummaryList(data.Proposals, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProposalsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListProposalVotesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalVotesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProposalVotesCommandError(output, context);
  }
  const contents: ListProposalVotesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ProposalVotes: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ProposalVotes !== undefined && data.ProposalVotes !== null) {
    contents.ProposalVotes = deserializeAws_restJson1ProposalVoteList(data.ProposalVotes, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProposalVotesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalVotesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1OutputTagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1RejectInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RejectInvitationCommandError(output, context);
  }
  const contents: RejectInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RejectInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalActionException":
    case "com.amazonaws.managedblockchain#IllegalActionException":
      response = {
        ...(await deserializeAws_restJson1IllegalActionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.managedblockchain#TooManyTagsException":
      response = {
        ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMemberCommandError(output, context);
  }
  const contents: UpdateMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateNodeCommandError(output, context);
  }
  const contents: UpdateNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1VoteOnProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VoteOnProposalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1VoteOnProposalCommandError(output, context);
  }
  const contents: VoteOnProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1VoteOnProposalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VoteOnProposalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalActionException":
    case "com.amazonaws.managedblockchain#IllegalActionException":
      response = {
        ...(await deserializeAws_restJson1IllegalActionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1IllegalActionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalActionException> => {
  const contents: IllegalActionException = {
    name: "IllegalActionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServiceErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const contents: InternalServiceErrorException = {
    name: "InternalServiceErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: ResourceLimitExceededException = {
    name: "ResourceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceName: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName !== undefined && data.ResourceName !== null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const contents: ResourceNotReadyException = {
    name: "ResourceNotReadyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
  };
  const data: any = parsedOutput.body;
  return contents;
};

const deserializeAws_restJson1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceName: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName !== undefined && data.ResourceName !== null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  return contents;
};

const serializeAws_restJson1ApprovalThresholdPolicy = (
  input: ApprovalThresholdPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProposalDurationInHours !== undefined &&
      input.ProposalDurationInHours !== null && { ProposalDurationInHours: input.ProposalDurationInHours }),
    ...(input.ThresholdComparator !== undefined &&
      input.ThresholdComparator !== null && { ThresholdComparator: input.ThresholdComparator }),
    ...(input.ThresholdPercentage !== undefined &&
      input.ThresholdPercentage !== null && { ThresholdPercentage: input.ThresholdPercentage }),
  };
};

const serializeAws_restJson1InputTagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1InviteAction = (input: InviteAction, context: __SerdeContext): any => {
  return {
    ...(input.Principal !== undefined && input.Principal !== null && { Principal: input.Principal }),
  };
};

const serializeAws_restJson1InviteActionList = (input: InviteAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1InviteAction(entry, context);
    });
};

const serializeAws_restJson1LogConfiguration = (input: LogConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1LogConfigurations = (input: LogConfigurations, context: __SerdeContext): any => {
  return {
    ...(input.Cloudwatch !== undefined &&
      input.Cloudwatch !== null && { Cloudwatch: serializeAws_restJson1LogConfiguration(input.Cloudwatch, context) }),
  };
};

const serializeAws_restJson1MemberConfiguration = (input: MemberConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.FrameworkConfiguration !== undefined &&
      input.FrameworkConfiguration !== null && {
        FrameworkConfiguration: serializeAws_restJson1MemberFrameworkConfiguration(
          input.FrameworkConfiguration,
          context
        ),
      }),
    ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.LogPublishingConfiguration !== undefined &&
      input.LogPublishingConfiguration !== null && {
        LogPublishingConfiguration: serializeAws_restJson1MemberLogPublishingConfiguration(
          input.LogPublishingConfiguration,
          context
        ),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1InputTagMap(input.Tags, context) }),
  };
};

const serializeAws_restJson1MemberFabricConfiguration = (
  input: MemberFabricConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdminPassword !== undefined && input.AdminPassword !== null && { AdminPassword: input.AdminPassword }),
    ...(input.AdminUsername !== undefined && input.AdminUsername !== null && { AdminUsername: input.AdminUsername }),
  };
};

const serializeAws_restJson1MemberFabricLogPublishingConfiguration = (
  input: MemberFabricLogPublishingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CaLogs !== undefined &&
      input.CaLogs !== null && { CaLogs: serializeAws_restJson1LogConfigurations(input.CaLogs, context) }),
  };
};

const serializeAws_restJson1MemberFrameworkConfiguration = (
  input: MemberFrameworkConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Fabric !== undefined &&
      input.Fabric !== null && { Fabric: serializeAws_restJson1MemberFabricConfiguration(input.Fabric, context) }),
  };
};

const serializeAws_restJson1MemberLogPublishingConfiguration = (
  input: MemberLogPublishingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Fabric !== undefined &&
      input.Fabric !== null && {
        Fabric: serializeAws_restJson1MemberFabricLogPublishingConfiguration(input.Fabric, context),
      }),
  };
};

const serializeAws_restJson1NetworkFabricConfiguration = (
  input: NetworkFabricConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Edition !== undefined && input.Edition !== null && { Edition: input.Edition }),
  };
};

const serializeAws_restJson1NetworkFrameworkConfiguration = (
  input: NetworkFrameworkConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Fabric !== undefined &&
      input.Fabric !== null && { Fabric: serializeAws_restJson1NetworkFabricConfiguration(input.Fabric, context) }),
  };
};

const serializeAws_restJson1NodeConfiguration = (input: NodeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZone !== undefined &&
      input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
    ...(input.LogPublishingConfiguration !== undefined &&
      input.LogPublishingConfiguration !== null && {
        LogPublishingConfiguration: serializeAws_restJson1NodeLogPublishingConfiguration(
          input.LogPublishingConfiguration,
          context
        ),
      }),
    ...(input.StateDB !== undefined && input.StateDB !== null && { StateDB: input.StateDB }),
  };
};

const serializeAws_restJson1NodeFabricLogPublishingConfiguration = (
  input: NodeFabricLogPublishingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChaincodeLogs !== undefined &&
      input.ChaincodeLogs !== null && {
        ChaincodeLogs: serializeAws_restJson1LogConfigurations(input.ChaincodeLogs, context),
      }),
    ...(input.PeerLogs !== undefined &&
      input.PeerLogs !== null && { PeerLogs: serializeAws_restJson1LogConfigurations(input.PeerLogs, context) }),
  };
};

const serializeAws_restJson1NodeLogPublishingConfiguration = (
  input: NodeLogPublishingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Fabric !== undefined &&
      input.Fabric !== null && {
        Fabric: serializeAws_restJson1NodeFabricLogPublishingConfiguration(input.Fabric, context),
      }),
  };
};

const serializeAws_restJson1ProposalActions = (input: ProposalActions, context: __SerdeContext): any => {
  return {
    ...(input.Invitations !== undefined &&
      input.Invitations !== null && {
        Invitations: serializeAws_restJson1InviteActionList(input.Invitations, context),
      }),
    ...(input.Removals !== undefined &&
      input.Removals !== null && { Removals: serializeAws_restJson1RemoveActionList(input.Removals, context) }),
  };
};

const serializeAws_restJson1RemoveAction = (input: RemoveAction, context: __SerdeContext): any => {
  return {
    ...(input.MemberId !== undefined && input.MemberId !== null && { MemberId: input.MemberId }),
  };
};

const serializeAws_restJson1RemoveActionList = (input: RemoveAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1RemoveAction(entry, context);
    });
};

const serializeAws_restJson1VotingPolicy = (input: VotingPolicy, context: __SerdeContext): any => {
  return {
    ...(input.ApprovalThresholdPolicy !== undefined &&
      input.ApprovalThresholdPolicy !== null && {
        ApprovalThresholdPolicy: serializeAws_restJson1ApprovalThresholdPolicy(input.ApprovalThresholdPolicy, context),
      }),
  };
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
      output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
    ExpirationDate:
      output.ExpirationDate !== undefined && output.ExpirationDate !== null
        ? new Date(output.ExpirationDate)
        : undefined,
    InvitationId: __expectString(output.InvitationId),
    NetworkSummary:
      output.NetworkSummary !== undefined && output.NetworkSummary !== null
        ? deserializeAws_restJson1NetworkSummary(output.NetworkSummary, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1InvitationList = (output: any, context: __SerdeContext): Invitation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Invitation(entry, context);
    });
};

const deserializeAws_restJson1InviteAction = (output: any, context: __SerdeContext): InviteAction => {
  return {
    Principal: __expectString(output.Principal),
  } as any;
};

const deserializeAws_restJson1InviteActionList = (output: any, context: __SerdeContext): InviteAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InviteAction(entry, context);
    });
};

const deserializeAws_restJson1LogConfiguration = (output: any, context: __SerdeContext): LogConfiguration => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1LogConfigurations = (output: any, context: __SerdeContext): LogConfigurations => {
  return {
    Cloudwatch:
      output.Cloudwatch !== undefined && output.Cloudwatch !== null
        ? deserializeAws_restJson1LogConfiguration(output.Cloudwatch, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Member = (output: any, context: __SerdeContext): Member => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
    Description: __expectString(output.Description),
    FrameworkAttributes:
      output.FrameworkAttributes !== undefined && output.FrameworkAttributes !== null
        ? deserializeAws_restJson1MemberFrameworkAttributes(output.FrameworkAttributes, context)
        : undefined,
    Id: __expectString(output.Id),
    KmsKeyArn: __expectString(output.KmsKeyArn),
    LogPublishingConfiguration:
      output.LogPublishingConfiguration !== undefined && output.LogPublishingConfiguration !== null
        ? deserializeAws_restJson1MemberLogPublishingConfiguration(output.LogPublishingConfiguration, context)
        : undefined,
    Name: __expectString(output.Name),
    NetworkId: __expectString(output.NetworkId),
    Status: __expectString(output.Status),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1OutputTagMap(output.Tags, context)
        : undefined,
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
    CaLogs:
      output.CaLogs !== undefined && output.CaLogs !== null
        ? deserializeAws_restJson1LogConfigurations(output.CaLogs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MemberFrameworkAttributes = (
  output: any,
  context: __SerdeContext
): MemberFrameworkAttributes => {
  return {
    Fabric:
      output.Fabric !== undefined && output.Fabric !== null
        ? deserializeAws_restJson1MemberFabricAttributes(output.Fabric, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MemberLogPublishingConfiguration = (
  output: any,
  context: __SerdeContext
): MemberLogPublishingConfiguration => {
  return {
    Fabric:
      output.Fabric !== undefined && output.Fabric !== null
        ? deserializeAws_restJson1MemberFabricLogPublishingConfiguration(output.Fabric, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MemberSummary = (output: any, context: __SerdeContext): MemberSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    IsOwned: __expectBoolean(output.IsOwned),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1MemberSummaryList = (output: any, context: __SerdeContext): MemberSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MemberSummary(entry, context);
    });
};

const deserializeAws_restJson1Network = (output: any, context: __SerdeContext): Network => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
    Description: __expectString(output.Description),
    Framework: __expectString(output.Framework),
    FrameworkAttributes:
      output.FrameworkAttributes !== undefined && output.FrameworkAttributes !== null
        ? deserializeAws_restJson1NetworkFrameworkAttributes(output.FrameworkAttributes, context)
        : undefined,
    FrameworkVersion: __expectString(output.FrameworkVersion),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1OutputTagMap(output.Tags, context)
        : undefined,
    VotingPolicy:
      output.VotingPolicy !== undefined && output.VotingPolicy !== null
        ? deserializeAws_restJson1VotingPolicy(output.VotingPolicy, context)
        : undefined,
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
      output.Ethereum !== undefined && output.Ethereum !== null
        ? deserializeAws_restJson1NetworkEthereumAttributes(output.Ethereum, context)
        : undefined,
    Fabric:
      output.Fabric !== undefined && output.Fabric !== null
        ? deserializeAws_restJson1NetworkFabricAttributes(output.Fabric, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkSummary = (output: any, context: __SerdeContext): NetworkSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
    Description: __expectString(output.Description),
    Framework: __expectString(output.Framework),
    FrameworkVersion: __expectString(output.FrameworkVersion),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1NetworkSummaryList = (output: any, context: __SerdeContext): NetworkSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkSummary(entry, context);
    });
};

const deserializeAws_restJson1Node = (output: any, context: __SerdeContext): Node => {
  return {
    Arn: __expectString(output.Arn),
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
    FrameworkAttributes:
      output.FrameworkAttributes !== undefined && output.FrameworkAttributes !== null
        ? deserializeAws_restJson1NodeFrameworkAttributes(output.FrameworkAttributes, context)
        : undefined,
    Id: __expectString(output.Id),
    InstanceType: __expectString(output.InstanceType),
    KmsKeyArn: __expectString(output.KmsKeyArn),
    LogPublishingConfiguration:
      output.LogPublishingConfiguration !== undefined && output.LogPublishingConfiguration !== null
        ? deserializeAws_restJson1NodeLogPublishingConfiguration(output.LogPublishingConfiguration, context)
        : undefined,
    MemberId: __expectString(output.MemberId),
    NetworkId: __expectString(output.NetworkId),
    StateDB: __expectString(output.StateDB),
    Status: __expectString(output.Status),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1OutputTagMap(output.Tags, context)
        : undefined,
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
      output.ChaincodeLogs !== undefined && output.ChaincodeLogs !== null
        ? deserializeAws_restJson1LogConfigurations(output.ChaincodeLogs, context)
        : undefined,
    PeerLogs:
      output.PeerLogs !== undefined && output.PeerLogs !== null
        ? deserializeAws_restJson1LogConfigurations(output.PeerLogs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NodeFrameworkAttributes = (
  output: any,
  context: __SerdeContext
): NodeFrameworkAttributes => {
  return {
    Ethereum:
      output.Ethereum !== undefined && output.Ethereum !== null
        ? deserializeAws_restJson1NodeEthereumAttributes(output.Ethereum, context)
        : undefined,
    Fabric:
      output.Fabric !== undefined && output.Fabric !== null
        ? deserializeAws_restJson1NodeFabricAttributes(output.Fabric, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NodeLogPublishingConfiguration = (
  output: any,
  context: __SerdeContext
): NodeLogPublishingConfiguration => {
  return {
    Fabric:
      output.Fabric !== undefined && output.Fabric !== null
        ? deserializeAws_restJson1NodeFabricLogPublishingConfiguration(output.Fabric, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NodeSummary = (output: any, context: __SerdeContext): NodeSummary => {
  return {
    Arn: __expectString(output.Arn),
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
    Id: __expectString(output.Id),
    InstanceType: __expectString(output.InstanceType),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1NodeSummaryList = (output: any, context: __SerdeContext): NodeSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NodeSummary(entry, context);
    });
};

const deserializeAws_restJson1OutputTagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1Proposal = (output: any, context: __SerdeContext): Proposal => {
  return {
    Actions:
      output.Actions !== undefined && output.Actions !== null
        ? deserializeAws_restJson1ProposalActions(output.Actions, context)
        : undefined,
    Arn: __expectString(output.Arn),
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
    Description: __expectString(output.Description),
    ExpirationDate:
      output.ExpirationDate !== undefined && output.ExpirationDate !== null
        ? new Date(output.ExpirationDate)
        : undefined,
    NetworkId: __expectString(output.NetworkId),
    NoVoteCount: __expectInt32(output.NoVoteCount),
    OutstandingVoteCount: __expectInt32(output.OutstandingVoteCount),
    ProposalId: __expectString(output.ProposalId),
    ProposedByMemberId: __expectString(output.ProposedByMemberId),
    ProposedByMemberName: __expectString(output.ProposedByMemberName),
    Status: __expectString(output.Status),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1OutputTagMap(output.Tags, context)
        : undefined,
    YesVoteCount: __expectInt32(output.YesVoteCount),
  } as any;
};

const deserializeAws_restJson1ProposalActions = (output: any, context: __SerdeContext): ProposalActions => {
  return {
    Invitations:
      output.Invitations !== undefined && output.Invitations !== null
        ? deserializeAws_restJson1InviteActionList(output.Invitations, context)
        : undefined,
    Removals:
      output.Removals !== undefined && output.Removals !== null
        ? deserializeAws_restJson1RemoveActionList(output.Removals, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProposalSummary = (output: any, context: __SerdeContext): ProposalSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null ? new Date(output.CreationDate) : undefined,
    Description: __expectString(output.Description),
    ExpirationDate:
      output.ExpirationDate !== undefined && output.ExpirationDate !== null
        ? new Date(output.ExpirationDate)
        : undefined,
    ProposalId: __expectString(output.ProposalId),
    ProposedByMemberId: __expectString(output.ProposedByMemberId),
    ProposedByMemberName: __expectString(output.ProposedByMemberName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1ProposalSummaryList = (output: any, context: __SerdeContext): ProposalSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProposalSummary(entry, context);
    });
};

const deserializeAws_restJson1ProposalVoteList = (output: any, context: __SerdeContext): VoteSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VoteSummary(entry, context);
    });
};

const deserializeAws_restJson1RemoveAction = (output: any, context: __SerdeContext): RemoveAction => {
  return {
    MemberId: __expectString(output.MemberId),
  } as any;
};

const deserializeAws_restJson1RemoveActionList = (output: any, context: __SerdeContext): RemoveAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RemoveAction(entry, context);
    });
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
      output.ApprovalThresholdPolicy !== undefined && output.ApprovalThresholdPolicy !== null
        ? deserializeAws_restJson1ApprovalThresholdPolicy(output.ApprovalThresholdPolicy, context)
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
