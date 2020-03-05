import {
  CreateMemberCommandInput,
  CreateMemberCommandOutput
} from "../commands/CreateMemberCommand";
import {
  CreateNetworkCommandInput,
  CreateNetworkCommandOutput
} from "../commands/CreateNetworkCommand";
import {
  CreateNodeCommandInput,
  CreateNodeCommandOutput
} from "../commands/CreateNodeCommand";
import {
  CreateProposalCommandInput,
  CreateProposalCommandOutput
} from "../commands/CreateProposalCommand";
import {
  DeleteMemberCommandInput,
  DeleteMemberCommandOutput
} from "../commands/DeleteMemberCommand";
import {
  DeleteNodeCommandInput,
  DeleteNodeCommandOutput
} from "../commands/DeleteNodeCommand";
import {
  GetMemberCommandInput,
  GetMemberCommandOutput
} from "../commands/GetMemberCommand";
import {
  GetNetworkCommandInput,
  GetNetworkCommandOutput
} from "../commands/GetNetworkCommand";
import {
  GetNodeCommandInput,
  GetNodeCommandOutput
} from "../commands/GetNodeCommand";
import {
  GetProposalCommandInput,
  GetProposalCommandOutput
} from "../commands/GetProposalCommand";
import {
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput
} from "../commands/ListInvitationsCommand";
import {
  ListMembersCommandInput,
  ListMembersCommandOutput
} from "../commands/ListMembersCommand";
import {
  ListNetworksCommandInput,
  ListNetworksCommandOutput
} from "../commands/ListNetworksCommand";
import {
  ListNodesCommandInput,
  ListNodesCommandOutput
} from "../commands/ListNodesCommand";
import {
  ListProposalVotesCommandInput,
  ListProposalVotesCommandOutput
} from "../commands/ListProposalVotesCommand";
import {
  ListProposalsCommandInput,
  ListProposalsCommandOutput
} from "../commands/ListProposalsCommand";
import {
  RejectInvitationCommandInput,
  RejectInvitationCommandOutput
} from "../commands/RejectInvitationCommand";
import {
  VoteOnProposalCommandInput,
  VoteOnProposalCommandOutput
} from "../commands/VoteOnProposalCommand";
import {
  AccessDeniedException,
  ApprovalThresholdPolicy,
  IllegalActionException,
  InternalServiceErrorException,
  InvalidRequestException,
  Invitation,
  InviteAction,
  Member,
  MemberConfiguration,
  MemberFabricAttributes,
  MemberFabricConfiguration,
  MemberFrameworkAttributes,
  MemberFrameworkConfiguration,
  MemberSummary,
  Network,
  NetworkFabricAttributes,
  NetworkFabricConfiguration,
  NetworkFrameworkAttributes,
  NetworkFrameworkConfiguration,
  NetworkSummary,
  Node,
  NodeConfiguration,
  NodeFabricAttributes,
  NodeFrameworkAttributes,
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
  VoteSummary,
  VotingPolicy
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
import { v4 as generateIdempotencyToken } from "uuid";

export async function serializeAws_restJson1_1CreateMemberCommand(
  input: CreateMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/networks/{NetworkId}/members";
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace(
      "{NetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.InvitationId !== undefined) {
    bodyParams["InvitationId"] = input.InvitationId;
  }
  if (input.MemberConfiguration !== undefined) {
    bodyParams[
      "MemberConfiguration"
    ] = serializeAws_restJson1_1MemberConfiguration(
      input.MemberConfiguration,
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

export async function serializeAws_restJson1_1CreateNetworkCommand(
  input: CreateNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/networks";
  let body: any;
  const bodyParams: any = {};
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Framework !== undefined) {
    bodyParams["Framework"] = input.Framework;
  }
  if (input.FrameworkConfiguration !== undefined) {
    bodyParams[
      "FrameworkConfiguration"
    ] = serializeAws_restJson1_1NetworkFrameworkConfiguration(
      input.FrameworkConfiguration,
      context
    );
  }
  if (input.FrameworkVersion !== undefined) {
    bodyParams["FrameworkVersion"] = input.FrameworkVersion;
  }
  if (input.MemberConfiguration !== undefined) {
    bodyParams[
      "MemberConfiguration"
    ] = serializeAws_restJson1_1MemberConfiguration(
      input.MemberConfiguration,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.VotingPolicy !== undefined) {
    bodyParams["VotingPolicy"] = serializeAws_restJson1_1VotingPolicy(
      input.VotingPolicy,
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

export async function serializeAws_restJson1_1CreateNodeCommand(
  input: CreateNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/networks/{NetworkId}/members/{MemberId}/nodes";
  if (input.MemberId !== undefined) {
    const labelValue: string = input.MemberId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberId.");
    }
    resolvedPath = resolvedPath.replace(
      "{MemberId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MemberId.");
  }
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace(
      "{NetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.NodeConfiguration !== undefined) {
    bodyParams["NodeConfiguration"] = serializeAws_restJson1_1NodeConfiguration(
      input.NodeConfiguration,
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

export async function serializeAws_restJson1_1CreateProposalCommand(
  input: CreateProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/networks/{NetworkId}/proposals";
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace(
      "{NetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Actions !== undefined) {
    bodyParams["Actions"] = serializeAws_restJson1_1ProposalActions(
      input.Actions,
      context
    );
  }
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.MemberId !== undefined) {
    bodyParams["MemberId"] = input.MemberId;
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

export async function serializeAws_restJson1_1DeleteMemberCommand(
  input: DeleteMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/networks/{NetworkId}/members/{MemberId}";
  if (input.MemberId !== undefined) {
    const labelValue: string = input.MemberId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberId.");
    }
    resolvedPath = resolvedPath.replace(
      "{MemberId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MemberId.");
  }
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace(
      "{NetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteNodeCommand(
  input: DeleteNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/networks/{NetworkId}/members/{MemberId}/nodes/{NodeId}";
  if (input.MemberId !== undefined) {
    const labelValue: string = input.MemberId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberId.");
    }
    resolvedPath = resolvedPath.replace(
      "{MemberId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MemberId.");
  }
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace(
      "{NetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  if (input.NodeId !== undefined) {
    const labelValue: string = input.NodeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NodeId.");
    }
    resolvedPath = resolvedPath.replace(
      "{NodeId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: NodeId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetMemberCommand(
  input: GetMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/networks/{NetworkId}/members/{MemberId}";
  if (input.MemberId !== undefined) {
    const labelValue: string = input.MemberId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberId.");
    }
    resolvedPath = resolvedPath.replace(
      "{MemberId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MemberId.");
  }
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace(
      "{NetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetNetworkCommand(
  input: GetNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/networks/{NetworkId}";
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace(
      "{NetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetNodeCommand(
  input: GetNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/networks/{NetworkId}/members/{MemberId}/nodes/{NodeId}";
  if (input.MemberId !== undefined) {
    const labelValue: string = input.MemberId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberId.");
    }
    resolvedPath = resolvedPath.replace(
      "{MemberId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MemberId.");
  }
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace(
      "{NetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  if (input.NodeId !== undefined) {
    const labelValue: string = input.NodeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NodeId.");
    }
    resolvedPath = resolvedPath.replace(
      "{NodeId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: NodeId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetProposalCommand(
  input: GetProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/networks/{NetworkId}/proposals/{ProposalId}";
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace(
      "{NetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  if (input.ProposalId !== undefined) {
    const labelValue: string = input.ProposalId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ProposalId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ProposalId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ProposalId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListInvitationsCommand(
  input: ListInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/invitations";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListMembersCommand(
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/networks/{NetworkId}/members";
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace(
      "{NetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  const query: any = {};
  if (input.IsOwned !== undefined) {
    query["isOwned"] = input.IsOwned.toString();
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.Name !== undefined) {
    query["name"] = input.Name;
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.Status !== undefined) {
    query["status"] = input.Status;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListNetworksCommand(
  input: ListNetworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/networks";
  const query: any = {};
  if (input.Framework !== undefined) {
    query["framework"] = input.Framework;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.Name !== undefined) {
    query["name"] = input.Name;
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.Status !== undefined) {
    query["status"] = input.Status;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListNodesCommand(
  input: ListNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/networks/{NetworkId}/members/{MemberId}/nodes";
  if (input.MemberId !== undefined) {
    const labelValue: string = input.MemberId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MemberId.");
    }
    resolvedPath = resolvedPath.replace(
      "{MemberId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: MemberId.");
  }
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace(
      "{NetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.Status !== undefined) {
    query["status"] = input.Status;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListProposalVotesCommand(
  input: ListProposalVotesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/networks/{NetworkId}/proposals/{ProposalId}/votes";
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace(
      "{NetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  if (input.ProposalId !== undefined) {
    const labelValue: string = input.ProposalId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ProposalId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ProposalId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ProposalId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListProposalsCommand(
  input: ListProposalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/networks/{NetworkId}/proposals";
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace(
      "{NetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1RejectInvitationCommand(
  input: RejectInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/invitations/{InvitationId}";
  if (input.InvitationId !== undefined) {
    const labelValue: string = input.InvitationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: InvitationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{InvitationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: InvitationId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1VoteOnProposalCommand(
  input: VoteOnProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/networks/{NetworkId}/proposals/{ProposalId}/votes";
  if (input.NetworkId !== undefined) {
    const labelValue: string = input.NetworkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NetworkId.");
    }
    resolvedPath = resolvedPath.replace(
      "{NetworkId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: NetworkId.");
  }
  if (input.ProposalId !== undefined) {
    const labelValue: string = input.ProposalId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ProposalId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ProposalId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ProposalId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Vote !== undefined) {
    bodyParams["Vote"] = input.Vote;
  }
  if (input.VoterMemberId !== undefined) {
    bodyParams["VoterMemberId"] = input.VoterMemberId;
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

export async function deserializeAws_restJson1_1CreateMemberCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMemberCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateMemberCommandError(output, context);
  }
  const contents: CreateMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateMemberOutput",
    MemberId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.MemberId !== undefined && data.MemberId !== null) {
    contents.MemberId = data.MemberId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateMemberCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMemberCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.taiga.webservice.api#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.taiga.webservice.api#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotReadyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateNetworkCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateNetworkCommandError(output, context);
  }
  const contents: CreateNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateNetworkOutput",
    MemberId: undefined,
    NetworkId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.MemberId !== undefined && data.MemberId !== null) {
    contents.MemberId = data.MemberId;
  }
  if (data.NetworkId !== undefined && data.NetworkId !== null) {
    contents.NetworkId = data.NetworkId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateNetworkCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.taiga.webservice.api#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.taiga.webservice.api#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateNodeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodeCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateNodeCommandError(output, context);
  }
  const contents: CreateNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateNodeOutput",
    NodeId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NodeId !== undefined && data.NodeId !== null) {
    contents.NodeId = data.NodeId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateNodeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.taiga.webservice.api#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.taiga.webservice.api#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotReadyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateProposalCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProposalCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateProposalCommandError(
      output,
      context
    );
  }
  const contents: CreateProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateProposalOutput",
    ProposalId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ProposalId !== undefined && data.ProposalId !== null) {
    contents.ProposalId = data.ProposalId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateProposalCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProposalCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotReadyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteMemberCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteMemberCommandError(output, context);
  }
  const contents: DeleteMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteMemberOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteMemberCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotReadyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteNodeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodeCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteNodeCommandError(output, context);
  }
  const contents: DeleteNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteNodeOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteNodeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotReadyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1GetMemberCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetMemberCommandError(output, context);
  }
  const contents: GetMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMemberOutput",
    Member: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Member !== undefined && data.Member !== null) {
    contents.Member = deserializeAws_restJson1_1Member(data.Member, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetMemberCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1GetNetworkCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetNetworkCommandError(output, context);
  }
  const contents: GetNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetNetworkOutput",
    Network: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Network !== undefined && data.Network !== null) {
    contents.Network = deserializeAws_restJson1_1Network(data.Network, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetNetworkCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1GetNodeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNodeCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetNodeCommandError(output, context);
  }
  const contents: GetNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetNodeOutput",
    Node: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Node !== undefined && data.Node !== null) {
    contents.Node = deserializeAws_restJson1_1Node(data.Node, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetNodeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNodeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1GetProposalCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProposalCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetProposalCommandError(output, context);
  }
  const contents: GetProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetProposalOutput",
    Proposal: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Proposal !== undefined && data.Proposal !== null) {
    contents.Proposal = deserializeAws_restJson1_1Proposal(
      data.Proposal,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetProposalCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProposalCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1ListInvitationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListInvitationsCommandError(
      output,
      context
    );
  }
  const contents: ListInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInvitationsOutput",
    Invitations: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Invitations !== undefined && data.Invitations !== null) {
    contents.Invitations = deserializeAws_restJson1_1InvitationList(
      data.Invitations,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListInvitationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.taiga.webservice.api#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1ListMembersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListMembersCommandError(output, context);
  }
  const contents: ListMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMembersOutput",
    Members: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Members !== undefined && data.Members !== null) {
    contents.Members = deserializeAws_restJson1_1MemberSummaryList(
      data.Members,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListMembersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1ListNetworksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworksCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListNetworksCommandError(output, context);
  }
  const contents: ListNetworksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListNetworksOutput",
    Networks: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Networks !== undefined && data.Networks !== null) {
    contents.Networks = deserializeAws_restJson1_1NetworkSummaryList(
      data.Networks,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListNetworksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworksCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1ListNodesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListNodesCommandError(output, context);
  }
  const contents: ListNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListNodesOutput",
    NextToken: undefined,
    Nodes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Nodes !== undefined && data.Nodes !== null) {
    contents.Nodes = deserializeAws_restJson1_1NodeSummaryList(
      data.Nodes,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListNodesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1ListProposalVotesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalVotesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListProposalVotesCommandError(
      output,
      context
    );
  }
  const contents: ListProposalVotesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProposalVotesOutput",
    NextToken: undefined,
    ProposalVotes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.ProposalVotes !== undefined && data.ProposalVotes !== null) {
    contents.ProposalVotes = deserializeAws_restJson1_1ProposalVoteList(
      data.ProposalVotes,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListProposalVotesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalVotesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1ListProposalsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListProposalsCommandError(output, context);
  }
  const contents: ListProposalsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProposalsOutput",
    NextToken: undefined,
    Proposals: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Proposals !== undefined && data.Proposals !== null) {
    contents.Proposals = deserializeAws_restJson1_1ProposalSummaryList(
      data.Proposals,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListProposalsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1RejectInvitationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInvitationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RejectInvitationCommandError(
      output,
      context
    );
  }
  const contents: RejectInvitationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RejectInvitationOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RejectInvitationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInvitationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalActionException":
    case "com.amazonaws.taiga.webservice.api#IllegalActionException":
      response = {
        ...(await deserializeAws_restJson1_1IllegalActionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1VoteOnProposalCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VoteOnProposalCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1VoteOnProposalCommandError(
      output,
      context
    );
  }
  const contents: VoteOnProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "VoteOnProposalOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1VoteOnProposalCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VoteOnProposalCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.taiga.webservice.api#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalActionException":
    case "com.amazonaws.taiga.webservice.api#IllegalActionException":
      response = {
        ...(await deserializeAws_restJson1_1IllegalActionExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.taiga.webservice.api#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.taiga.webservice.api#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.taiga.webservice.api#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.taiga.webservice.api#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1_1IllegalActionExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IllegalActionException> => {
  const contents: IllegalActionException = {
    name: "IllegalActionException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServiceErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const contents: InternalServiceErrorException = {
    name: "InternalServiceErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: ResourceLimitExceededException = {
    name: "ResourceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotReadyExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const contents: ResourceNotReadyException = {
    name: "ResourceNotReadyException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return contents;
};

const serializeAws_restJson1_1ApprovalThresholdPolicy = (
  input: ApprovalThresholdPolicy,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ProposalDurationInHours !== undefined) {
    bodyParams["ProposalDurationInHours"] = input.ProposalDurationInHours;
  }
  if (input.ThresholdComparator !== undefined) {
    bodyParams["ThresholdComparator"] = input.ThresholdComparator;
  }
  if (input.ThresholdPercentage !== undefined) {
    bodyParams["ThresholdPercentage"] = input.ThresholdPercentage;
  }
  return bodyParams;
};

const serializeAws_restJson1_1InviteAction = (
  input: InviteAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Principal !== undefined) {
    bodyParams["Principal"] = input.Principal;
  }
  return bodyParams;
};

const serializeAws_restJson1_1InviteActionList = (
  input: Array<InviteAction>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1InviteAction(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1MemberConfiguration = (
  input: MemberConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.FrameworkConfiguration !== undefined) {
    bodyParams[
      "FrameworkConfiguration"
    ] = serializeAws_restJson1_1MemberFrameworkConfiguration(
      input.FrameworkConfiguration,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MemberFabricConfiguration = (
  input: MemberFabricConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdminPassword !== undefined) {
    bodyParams["AdminPassword"] = input.AdminPassword;
  }
  if (input.AdminUsername !== undefined) {
    bodyParams["AdminUsername"] = input.AdminUsername;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MemberFrameworkConfiguration = (
  input: MemberFrameworkConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Fabric !== undefined) {
    bodyParams["Fabric"] = serializeAws_restJson1_1MemberFabricConfiguration(
      input.Fabric,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1NetworkFabricConfiguration = (
  input: NetworkFabricConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Edition !== undefined) {
    bodyParams["Edition"] = input.Edition;
  }
  return bodyParams;
};

const serializeAws_restJson1_1NetworkFrameworkConfiguration = (
  input: NetworkFrameworkConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Fabric !== undefined) {
    bodyParams["Fabric"] = serializeAws_restJson1_1NetworkFabricConfiguration(
      input.Fabric,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1NodeConfiguration = (
  input: NodeConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AvailabilityZone !== undefined) {
    bodyParams["AvailabilityZone"] = input.AvailabilityZone;
  }
  if (input.InstanceType !== undefined) {
    bodyParams["InstanceType"] = input.InstanceType;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ProposalActions = (
  input: ProposalActions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Invitations !== undefined) {
    bodyParams["Invitations"] = serializeAws_restJson1_1InviteActionList(
      input.Invitations,
      context
    );
  }
  if (input.Removals !== undefined) {
    bodyParams["Removals"] = serializeAws_restJson1_1RemoveActionList(
      input.Removals,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1RemoveAction = (
  input: RemoveAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MemberId !== undefined) {
    bodyParams["MemberId"] = input.MemberId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RemoveActionList = (
  input: Array<RemoveAction>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1RemoveAction(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1VotingPolicy = (
  input: VotingPolicy,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApprovalThresholdPolicy !== undefined) {
    bodyParams[
      "ApprovalThresholdPolicy"
    ] = serializeAws_restJson1_1ApprovalThresholdPolicy(
      input.ApprovalThresholdPolicy,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_restJson1_1ApprovalThresholdPolicy = (
  output: any,
  context: __SerdeContext
): ApprovalThresholdPolicy => {
  let contents: any = {
    __type: "ApprovalThresholdPolicy",
    ProposalDurationInHours: undefined,
    ThresholdComparator: undefined,
    ThresholdPercentage: undefined
  };
  if (
    output.ProposalDurationInHours !== undefined &&
    output.ProposalDurationInHours !== null
  ) {
    contents.ProposalDurationInHours = output.ProposalDurationInHours;
  }
  if (
    output.ThresholdComparator !== undefined &&
    output.ThresholdComparator !== null
  ) {
    contents.ThresholdComparator = output.ThresholdComparator;
  }
  if (
    output.ThresholdPercentage !== undefined &&
    output.ThresholdPercentage !== null
  ) {
    contents.ThresholdPercentage = output.ThresholdPercentage;
  }
  return contents;
};

const deserializeAws_restJson1_1Invitation = (
  output: any,
  context: __SerdeContext
): Invitation => {
  let contents: any = {
    __type: "Invitation",
    CreationDate: undefined,
    ExpirationDate: undefined,
    InvitationId: undefined,
    NetworkSummary: undefined,
    Status: undefined
  };
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(output.CreationDate);
  }
  if (output.ExpirationDate !== undefined && output.ExpirationDate !== null) {
    contents.ExpirationDate = new Date(output.ExpirationDate);
  }
  if (output.InvitationId !== undefined && output.InvitationId !== null) {
    contents.InvitationId = output.InvitationId;
  }
  if (output.NetworkSummary !== undefined && output.NetworkSummary !== null) {
    contents.NetworkSummary = deserializeAws_restJson1_1NetworkSummary(
      output.NetworkSummary,
      context
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_restJson1_1InvitationList = (
  output: any,
  context: __SerdeContext
): Array<Invitation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Invitation(entry, context)
  );
};

const deserializeAws_restJson1_1InviteAction = (
  output: any,
  context: __SerdeContext
): InviteAction => {
  let contents: any = {
    __type: "InviteAction",
    Principal: undefined
  };
  if (output.Principal !== undefined && output.Principal !== null) {
    contents.Principal = output.Principal;
  }
  return contents;
};

const deserializeAws_restJson1_1InviteActionList = (
  output: any,
  context: __SerdeContext
): Array<InviteAction> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InviteAction(entry, context)
  );
};

const deserializeAws_restJson1_1Member = (
  output: any,
  context: __SerdeContext
): Member => {
  let contents: any = {
    __type: "Member",
    CreationDate: undefined,
    Description: undefined,
    FrameworkAttributes: undefined,
    Id: undefined,
    Name: undefined,
    NetworkId: undefined,
    Status: undefined
  };
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(output.CreationDate);
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (
    output.FrameworkAttributes !== undefined &&
    output.FrameworkAttributes !== null
  ) {
    contents.FrameworkAttributes = deserializeAws_restJson1_1MemberFrameworkAttributes(
      output.FrameworkAttributes,
      context
    );
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.NetworkId !== undefined && output.NetworkId !== null) {
    contents.NetworkId = output.NetworkId;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_restJson1_1MemberFabricAttributes = (
  output: any,
  context: __SerdeContext
): MemberFabricAttributes => {
  let contents: any = {
    __type: "MemberFabricAttributes",
    AdminUsername: undefined,
    CaEndpoint: undefined
  };
  if (output.AdminUsername !== undefined && output.AdminUsername !== null) {
    contents.AdminUsername = output.AdminUsername;
  }
  if (output.CaEndpoint !== undefined && output.CaEndpoint !== null) {
    contents.CaEndpoint = output.CaEndpoint;
  }
  return contents;
};

const deserializeAws_restJson1_1MemberFrameworkAttributes = (
  output: any,
  context: __SerdeContext
): MemberFrameworkAttributes => {
  let contents: any = {
    __type: "MemberFrameworkAttributes",
    Fabric: undefined
  };
  if (output.Fabric !== undefined && output.Fabric !== null) {
    contents.Fabric = deserializeAws_restJson1_1MemberFabricAttributes(
      output.Fabric,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1MemberSummary = (
  output: any,
  context: __SerdeContext
): MemberSummary => {
  let contents: any = {
    __type: "MemberSummary",
    CreationDate: undefined,
    Description: undefined,
    Id: undefined,
    IsOwned: undefined,
    Name: undefined,
    Status: undefined
  };
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(output.CreationDate);
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.IsOwned !== undefined && output.IsOwned !== null) {
    contents.IsOwned = output.IsOwned;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_restJson1_1MemberSummaryList = (
  output: any,
  context: __SerdeContext
): Array<MemberSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MemberSummary(entry, context)
  );
};

const deserializeAws_restJson1_1Network = (
  output: any,
  context: __SerdeContext
): Network => {
  let contents: any = {
    __type: "Network",
    CreationDate: undefined,
    Description: undefined,
    Framework: undefined,
    FrameworkAttributes: undefined,
    FrameworkVersion: undefined,
    Id: undefined,
    Name: undefined,
    Status: undefined,
    VotingPolicy: undefined,
    VpcEndpointServiceName: undefined
  };
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(output.CreationDate);
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Framework !== undefined && output.Framework !== null) {
    contents.Framework = output.Framework;
  }
  if (
    output.FrameworkAttributes !== undefined &&
    output.FrameworkAttributes !== null
  ) {
    contents.FrameworkAttributes = deserializeAws_restJson1_1NetworkFrameworkAttributes(
      output.FrameworkAttributes,
      context
    );
  }
  if (
    output.FrameworkVersion !== undefined &&
    output.FrameworkVersion !== null
  ) {
    contents.FrameworkVersion = output.FrameworkVersion;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.VotingPolicy !== undefined && output.VotingPolicy !== null) {
    contents.VotingPolicy = deserializeAws_restJson1_1VotingPolicy(
      output.VotingPolicy,
      context
    );
  }
  if (
    output.VpcEndpointServiceName !== undefined &&
    output.VpcEndpointServiceName !== null
  ) {
    contents.VpcEndpointServiceName = output.VpcEndpointServiceName;
  }
  return contents;
};

const deserializeAws_restJson1_1NetworkFabricAttributes = (
  output: any,
  context: __SerdeContext
): NetworkFabricAttributes => {
  let contents: any = {
    __type: "NetworkFabricAttributes",
    Edition: undefined,
    OrderingServiceEndpoint: undefined
  };
  if (output.Edition !== undefined && output.Edition !== null) {
    contents.Edition = output.Edition;
  }
  if (
    output.OrderingServiceEndpoint !== undefined &&
    output.OrderingServiceEndpoint !== null
  ) {
    contents.OrderingServiceEndpoint = output.OrderingServiceEndpoint;
  }
  return contents;
};

const deserializeAws_restJson1_1NetworkFrameworkAttributes = (
  output: any,
  context: __SerdeContext
): NetworkFrameworkAttributes => {
  let contents: any = {
    __type: "NetworkFrameworkAttributes",
    Fabric: undefined
  };
  if (output.Fabric !== undefined && output.Fabric !== null) {
    contents.Fabric = deserializeAws_restJson1_1NetworkFabricAttributes(
      output.Fabric,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1NetworkSummary = (
  output: any,
  context: __SerdeContext
): NetworkSummary => {
  let contents: any = {
    __type: "NetworkSummary",
    CreationDate: undefined,
    Description: undefined,
    Framework: undefined,
    FrameworkVersion: undefined,
    Id: undefined,
    Name: undefined,
    Status: undefined
  };
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(output.CreationDate);
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Framework !== undefined && output.Framework !== null) {
    contents.Framework = output.Framework;
  }
  if (
    output.FrameworkVersion !== undefined &&
    output.FrameworkVersion !== null
  ) {
    contents.FrameworkVersion = output.FrameworkVersion;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_restJson1_1NetworkSummaryList = (
  output: any,
  context: __SerdeContext
): Array<NetworkSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1NetworkSummary(entry, context)
  );
};

const deserializeAws_restJson1_1Node = (
  output: any,
  context: __SerdeContext
): Node => {
  let contents: any = {
    __type: "Node",
    AvailabilityZone: undefined,
    CreationDate: undefined,
    FrameworkAttributes: undefined,
    Id: undefined,
    InstanceType: undefined,
    MemberId: undefined,
    NetworkId: undefined,
    Status: undefined
  };
  if (
    output.AvailabilityZone !== undefined &&
    output.AvailabilityZone !== null
  ) {
    contents.AvailabilityZone = output.AvailabilityZone;
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(output.CreationDate);
  }
  if (
    output.FrameworkAttributes !== undefined &&
    output.FrameworkAttributes !== null
  ) {
    contents.FrameworkAttributes = deserializeAws_restJson1_1NodeFrameworkAttributes(
      output.FrameworkAttributes,
      context
    );
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.InstanceType !== undefined && output.InstanceType !== null) {
    contents.InstanceType = output.InstanceType;
  }
  if (output.MemberId !== undefined && output.MemberId !== null) {
    contents.MemberId = output.MemberId;
  }
  if (output.NetworkId !== undefined && output.NetworkId !== null) {
    contents.NetworkId = output.NetworkId;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_restJson1_1NodeFabricAttributes = (
  output: any,
  context: __SerdeContext
): NodeFabricAttributes => {
  let contents: any = {
    __type: "NodeFabricAttributes",
    PeerEndpoint: undefined,
    PeerEventEndpoint: undefined
  };
  if (output.PeerEndpoint !== undefined && output.PeerEndpoint !== null) {
    contents.PeerEndpoint = output.PeerEndpoint;
  }
  if (
    output.PeerEventEndpoint !== undefined &&
    output.PeerEventEndpoint !== null
  ) {
    contents.PeerEventEndpoint = output.PeerEventEndpoint;
  }
  return contents;
};

const deserializeAws_restJson1_1NodeFrameworkAttributes = (
  output: any,
  context: __SerdeContext
): NodeFrameworkAttributes => {
  let contents: any = {
    __type: "NodeFrameworkAttributes",
    Fabric: undefined
  };
  if (output.Fabric !== undefined && output.Fabric !== null) {
    contents.Fabric = deserializeAws_restJson1_1NodeFabricAttributes(
      output.Fabric,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1NodeSummary = (
  output: any,
  context: __SerdeContext
): NodeSummary => {
  let contents: any = {
    __type: "NodeSummary",
    AvailabilityZone: undefined,
    CreationDate: undefined,
    Id: undefined,
    InstanceType: undefined,
    Status: undefined
  };
  if (
    output.AvailabilityZone !== undefined &&
    output.AvailabilityZone !== null
  ) {
    contents.AvailabilityZone = output.AvailabilityZone;
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(output.CreationDate);
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.InstanceType !== undefined && output.InstanceType !== null) {
    contents.InstanceType = output.InstanceType;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_restJson1_1NodeSummaryList = (
  output: any,
  context: __SerdeContext
): Array<NodeSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1NodeSummary(entry, context)
  );
};

const deserializeAws_restJson1_1Proposal = (
  output: any,
  context: __SerdeContext
): Proposal => {
  let contents: any = {
    __type: "Proposal",
    Actions: undefined,
    CreationDate: undefined,
    Description: undefined,
    ExpirationDate: undefined,
    NetworkId: undefined,
    NoVoteCount: undefined,
    OutstandingVoteCount: undefined,
    ProposalId: undefined,
    ProposedByMemberId: undefined,
    ProposedByMemberName: undefined,
    Status: undefined,
    YesVoteCount: undefined
  };
  if (output.Actions !== undefined && output.Actions !== null) {
    contents.Actions = deserializeAws_restJson1_1ProposalActions(
      output.Actions,
      context
    );
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(output.CreationDate);
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.ExpirationDate !== undefined && output.ExpirationDate !== null) {
    contents.ExpirationDate = new Date(output.ExpirationDate);
  }
  if (output.NetworkId !== undefined && output.NetworkId !== null) {
    contents.NetworkId = output.NetworkId;
  }
  if (output.NoVoteCount !== undefined && output.NoVoteCount !== null) {
    contents.NoVoteCount = output.NoVoteCount;
  }
  if (
    output.OutstandingVoteCount !== undefined &&
    output.OutstandingVoteCount !== null
  ) {
    contents.OutstandingVoteCount = output.OutstandingVoteCount;
  }
  if (output.ProposalId !== undefined && output.ProposalId !== null) {
    contents.ProposalId = output.ProposalId;
  }
  if (
    output.ProposedByMemberId !== undefined &&
    output.ProposedByMemberId !== null
  ) {
    contents.ProposedByMemberId = output.ProposedByMemberId;
  }
  if (
    output.ProposedByMemberName !== undefined &&
    output.ProposedByMemberName !== null
  ) {
    contents.ProposedByMemberName = output.ProposedByMemberName;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.YesVoteCount !== undefined && output.YesVoteCount !== null) {
    contents.YesVoteCount = output.YesVoteCount;
  }
  return contents;
};

const deserializeAws_restJson1_1ProposalActions = (
  output: any,
  context: __SerdeContext
): ProposalActions => {
  let contents: any = {
    __type: "ProposalActions",
    Invitations: undefined,
    Removals: undefined
  };
  if (output.Invitations !== undefined && output.Invitations !== null) {
    contents.Invitations = deserializeAws_restJson1_1InviteActionList(
      output.Invitations,
      context
    );
  }
  if (output.Removals !== undefined && output.Removals !== null) {
    contents.Removals = deserializeAws_restJson1_1RemoveActionList(
      output.Removals,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ProposalSummary = (
  output: any,
  context: __SerdeContext
): ProposalSummary => {
  let contents: any = {
    __type: "ProposalSummary",
    CreationDate: undefined,
    Description: undefined,
    ExpirationDate: undefined,
    ProposalId: undefined,
    ProposedByMemberId: undefined,
    ProposedByMemberName: undefined,
    Status: undefined
  };
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(output.CreationDate);
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.ExpirationDate !== undefined && output.ExpirationDate !== null) {
    contents.ExpirationDate = new Date(output.ExpirationDate);
  }
  if (output.ProposalId !== undefined && output.ProposalId !== null) {
    contents.ProposalId = output.ProposalId;
  }
  if (
    output.ProposedByMemberId !== undefined &&
    output.ProposedByMemberId !== null
  ) {
    contents.ProposedByMemberId = output.ProposedByMemberId;
  }
  if (
    output.ProposedByMemberName !== undefined &&
    output.ProposedByMemberName !== null
  ) {
    contents.ProposedByMemberName = output.ProposedByMemberName;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_restJson1_1ProposalSummaryList = (
  output: any,
  context: __SerdeContext
): Array<ProposalSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ProposalSummary(entry, context)
  );
};

const deserializeAws_restJson1_1ProposalVoteList = (
  output: any,
  context: __SerdeContext
): Array<VoteSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1VoteSummary(entry, context)
  );
};

const deserializeAws_restJson1_1RemoveAction = (
  output: any,
  context: __SerdeContext
): RemoveAction => {
  let contents: any = {
    __type: "RemoveAction",
    MemberId: undefined
  };
  if (output.MemberId !== undefined && output.MemberId !== null) {
    contents.MemberId = output.MemberId;
  }
  return contents;
};

const deserializeAws_restJson1_1RemoveActionList = (
  output: any,
  context: __SerdeContext
): Array<RemoveAction> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RemoveAction(entry, context)
  );
};

const deserializeAws_restJson1_1VoteSummary = (
  output: any,
  context: __SerdeContext
): VoteSummary => {
  let contents: any = {
    __type: "VoteSummary",
    MemberId: undefined,
    MemberName: undefined,
    Vote: undefined
  };
  if (output.MemberId !== undefined && output.MemberId !== null) {
    contents.MemberId = output.MemberId;
  }
  if (output.MemberName !== undefined && output.MemberName !== null) {
    contents.MemberName = output.MemberName;
  }
  if (output.Vote !== undefined && output.Vote !== null) {
    contents.Vote = output.Vote;
  }
  return contents;
};

const deserializeAws_restJson1_1VotingPolicy = (
  output: any,
  context: __SerdeContext
): VotingPolicy => {
  let contents: any = {
    __type: "VotingPolicy",
    ApprovalThresholdPolicy: undefined
  };
  if (
    output.ApprovalThresholdPolicy !== undefined &&
    output.ApprovalThresholdPolicy !== null
  ) {
    contents.ApprovalThresholdPolicy = deserializeAws_restJson1_1ApprovalThresholdPolicy(
      output.ApprovalThresholdPolicy,
      context
    );
  }
  return contents;
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
