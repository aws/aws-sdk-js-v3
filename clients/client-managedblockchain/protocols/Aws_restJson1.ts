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

export const serializeAws_restJson1CreateMemberCommand = async (
  input: CreateMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.InvitationId !== undefined && {
      InvitationId: input.InvitationId
    }),
    ...(input.MemberConfiguration !== undefined && {
      MemberConfiguration: serializeAws_restJson1MemberConfiguration(
        input.MemberConfiguration,
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

export const serializeAws_restJson1CreateNetworkCommand = async (
  input: CreateNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/networks";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Framework !== undefined && { Framework: input.Framework }),
    ...(input.FrameworkConfiguration !== undefined && {
      FrameworkConfiguration: serializeAws_restJson1NetworkFrameworkConfiguration(
        input.FrameworkConfiguration,
        context
      )
    }),
    ...(input.FrameworkVersion !== undefined && {
      FrameworkVersion: input.FrameworkVersion
    }),
    ...(input.MemberConfiguration !== undefined && {
      MemberConfiguration: serializeAws_restJson1MemberConfiguration(
        input.MemberConfiguration,
        context
      )
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.VotingPolicy !== undefined && {
      VotingPolicy: serializeAws_restJson1VotingPolicy(
        input.VotingPolicy,
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

export const serializeAws_restJson1CreateNodeCommand = async (
  input: CreateNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.NodeConfiguration !== undefined && {
      NodeConfiguration: serializeAws_restJson1NodeConfiguration(
        input.NodeConfiguration,
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

export const serializeAws_restJson1CreateProposalCommand = async (
  input: CreateProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.Actions !== undefined && {
      Actions: serializeAws_restJson1ProposalActions(input.Actions, context)
    }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.MemberId !== undefined && { MemberId: input.MemberId })
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

export const serializeAws_restJson1DeleteMemberCommand = async (
  input: DeleteMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteNodeCommand = async (
  input: DeleteNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetMemberCommand = async (
  input: GetMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetNetworkCommand = async (
  input: GetNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetNodeCommand = async (
  input: GetNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetProposalCommand = async (
  input: GetProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListInvitationsCommand = async (
  input: ListInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/invitations";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListMembersCommand = async (
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.IsOwned !== undefined && { isOwned: input.IsOwned.toString() }),
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.Status !== undefined && { status: input.Status })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListNetworksCommand = async (
  input: ListNetworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/networks";
  const query: any = {
    ...(input.Framework !== undefined && { framework: input.Framework }),
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.Name !== undefined && { name: input.Name }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.Status !== undefined && { status: input.Status })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListNodesCommand = async (
  input: ListNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.Status !== undefined && { status: input.Status })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListProposalsCommand = async (
  input: ListProposalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1ListProposalVotesCommand = async (
  input: ListProposalVotesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.MaxResults !== undefined && {
      maxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1RejectInvitationCommand = async (
  input: RejectInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1VoteOnProposalCommand = async (
  input: VoteOnProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.Vote !== undefined && { Vote: input.Vote }),
    ...(input.VoterMemberId !== undefined && {
      VoterMemberId: input.VoterMemberId
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

export const deserializeAws_restJson1CreateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateMemberCommandError(output, context);
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
};

const deserializeAws_restJson1CreateMemberCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMemberCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.managedblockchain#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1CreateNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateNetworkCommandError(output, context);
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
};

const deserializeAws_restJson1CreateNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.managedblockchain#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1CreateNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateNodeCommandError(output, context);
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
};

const deserializeAws_restJson1CreateNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.managedblockchain#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1CreateProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProposalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateProposalCommandError(output, context);
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
};

const deserializeAws_restJson1CreateProposalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProposalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1DeleteMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteMemberCommandError(output, context);
  }
  const contents: DeleteMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteMemberOutput"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1DeleteNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteNodeCommandError(output, context);
  }
  const contents: DeleteNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteNodeOutput"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1GetMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetMemberCommandError(output, context);
  }
  const contents: GetMemberCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMemberOutput",
    Member: undefined
  };
  const data: any = await parseBody(output.body, context);
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1GetNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetNetworkCommandError(output, context);
  }
  const contents: GetNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetNetworkOutput",
    Network: undefined
  };
  const data: any = await parseBody(output.body, context);
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1GetNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetNodeCommandError(output, context);
  }
  const contents: GetNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetNodeOutput",
    Node: undefined
  };
  const data: any = await parseBody(output.body, context);
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1GetProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProposalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetProposalCommandError(output, context);
  }
  const contents: GetProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetProposalOutput",
    Proposal: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Proposal !== undefined && data.Proposal !== null) {
    contents.Proposal = deserializeAws_restJson1Proposal(
      data.Proposal,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetProposalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProposalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1ListInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListInvitationsCommandError(output, context);
  }
  const contents: ListInvitationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInvitationsOutput",
    Invitations: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Invitations !== undefined && data.Invitations !== null) {
    contents.Invitations = deserializeAws_restJson1InvitationList(
      data.Invitations,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListMembersCommandError(output, context);
  }
  const contents: ListMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMembersOutput",
    Members: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Members !== undefined && data.Members !== null) {
    contents.Members = deserializeAws_restJson1MemberSummaryList(
      data.Members,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1ListNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListNetworksCommandError(output, context);
  }
  const contents: ListNetworksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListNetworksOutput",
    Networks: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Networks !== undefined && data.Networks !== null) {
    contents.Networks = deserializeAws_restJson1NetworkSummaryList(
      data.Networks,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListNetworksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1ListNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListNodesCommandError(output, context);
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
    contents.Nodes = deserializeAws_restJson1NodeSummaryList(
      data.Nodes,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListNodesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1ListProposalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListProposalsCommandError(output, context);
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
    contents.Proposals = deserializeAws_restJson1ProposalSummaryList(
      data.Proposals,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProposalsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1ListProposalVotesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalVotesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListProposalVotesCommandError(
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
    contents.ProposalVotes = deserializeAws_restJson1ProposalVoteList(
      data.ProposalVotes,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProposalVotesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalVotesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1RejectInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1RejectInvitationCommandError(
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
};

const deserializeAws_restJson1RejectInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalActionException":
    case "com.amazonaws.managedblockchain#IllegalActionException":
      response = {
        ...(await deserializeAws_restJson1IllegalActionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1VoteOnProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VoteOnProposalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1VoteOnProposalCommandError(output, context);
  }
  const contents: VoteOnProposalCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "VoteOnProposalOutput"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalActionException":
    case "com.amazonaws.managedblockchain#IllegalActionException":
      response = {
        ...(await deserializeAws_restJson1IllegalActionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput)
  };
  const data: any = parsedOutput.body;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    $metadata: deserializeMetadata(parsedOutput)
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
    $metadata: deserializeMetadata(parsedOutput)
  };
  const data: any = parsedOutput.body;
  return contents;
};

const serializeAws_restJson1ApprovalThresholdPolicy = (
  input: ApprovalThresholdPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProposalDurationInHours !== undefined && {
      ProposalDurationInHours: input.ProposalDurationInHours
    }),
    ...(input.ThresholdComparator !== undefined && {
      ThresholdComparator: input.ThresholdComparator
    }),
    ...(input.ThresholdPercentage !== undefined && {
      ThresholdPercentage: input.ThresholdPercentage
    })
  };
};

const serializeAws_restJson1InviteAction = (
  input: InviteAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.Principal !== undefined && { Principal: input.Principal })
  };
};

const serializeAws_restJson1InviteActionList = (
  input: InviteAction[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1InviteAction(entry, context));
};

const serializeAws_restJson1MemberConfiguration = (
  input: MemberConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.FrameworkConfiguration !== undefined && {
      FrameworkConfiguration: serializeAws_restJson1MemberFrameworkConfiguration(
        input.FrameworkConfiguration,
        context
      )
    }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_restJson1MemberFabricConfiguration = (
  input: MemberFabricConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdminPassword !== undefined && {
      AdminPassword: input.AdminPassword
    }),
    ...(input.AdminUsername !== undefined && {
      AdminUsername: input.AdminUsername
    })
  };
};

const serializeAws_restJson1MemberFrameworkConfiguration = (
  input: MemberFrameworkConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Fabric !== undefined && {
      Fabric: serializeAws_restJson1MemberFabricConfiguration(
        input.Fabric,
        context
      )
    })
  };
};

const serializeAws_restJson1NetworkFabricConfiguration = (
  input: NetworkFabricConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Edition !== undefined && { Edition: input.Edition })
  };
};

const serializeAws_restJson1NetworkFrameworkConfiguration = (
  input: NetworkFrameworkConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Fabric !== undefined && {
      Fabric: serializeAws_restJson1NetworkFabricConfiguration(
        input.Fabric,
        context
      )
    })
  };
};

const serializeAws_restJson1NodeConfiguration = (
  input: NodeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZone !== undefined && {
      AvailabilityZone: input.AvailabilityZone
    }),
    ...(input.InstanceType !== undefined && {
      InstanceType: input.InstanceType
    })
  };
};

const serializeAws_restJson1ProposalActions = (
  input: ProposalActions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Invitations !== undefined && {
      Invitations: serializeAws_restJson1InviteActionList(
        input.Invitations,
        context
      )
    }),
    ...(input.Removals !== undefined && {
      Removals: serializeAws_restJson1RemoveActionList(input.Removals, context)
    })
  };
};

const serializeAws_restJson1RemoveAction = (
  input: RemoveAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.MemberId !== undefined && { MemberId: input.MemberId })
  };
};

const serializeAws_restJson1RemoveActionList = (
  input: RemoveAction[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1RemoveAction(entry, context));
};

const serializeAws_restJson1VotingPolicy = (
  input: VotingPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApprovalThresholdPolicy !== undefined && {
      ApprovalThresholdPolicy: serializeAws_restJson1ApprovalThresholdPolicy(
        input.ApprovalThresholdPolicy,
        context
      )
    })
  };
};

const deserializeAws_restJson1ApprovalThresholdPolicy = (
  output: any,
  context: __SerdeContext
): ApprovalThresholdPolicy => {
  return {
    __type: "ApprovalThresholdPolicy",
    ProposalDurationInHours:
      output.ProposalDurationInHours !== undefined &&
      output.ProposalDurationInHours !== null
        ? output.ProposalDurationInHours
        : undefined,
    ThresholdComparator:
      output.ThresholdComparator !== undefined &&
      output.ThresholdComparator !== null
        ? output.ThresholdComparator
        : undefined,
    ThresholdPercentage:
      output.ThresholdPercentage !== undefined &&
      output.ThresholdPercentage !== null
        ? output.ThresholdPercentage
        : undefined
  } as any;
};

const deserializeAws_restJson1Invitation = (
  output: any,
  context: __SerdeContext
): Invitation => {
  return {
    __type: "Invitation",
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(output.CreationDate)
        : undefined,
    ExpirationDate:
      output.ExpirationDate !== undefined && output.ExpirationDate !== null
        ? new Date(output.ExpirationDate)
        : undefined,
    InvitationId:
      output.InvitationId !== undefined && output.InvitationId !== null
        ? output.InvitationId
        : undefined,
    NetworkSummary:
      output.NetworkSummary !== undefined && output.NetworkSummary !== null
        ? deserializeAws_restJson1NetworkSummary(output.NetworkSummary, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_restJson1InvitationList = (
  output: any,
  context: __SerdeContext
): Invitation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Invitation(entry, context)
  );
};

const deserializeAws_restJson1InviteAction = (
  output: any,
  context: __SerdeContext
): InviteAction => {
  return {
    __type: "InviteAction",
    Principal:
      output.Principal !== undefined && output.Principal !== null
        ? output.Principal
        : undefined
  } as any;
};

const deserializeAws_restJson1InviteActionList = (
  output: any,
  context: __SerdeContext
): InviteAction[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1InviteAction(entry, context)
  );
};

const deserializeAws_restJson1Member = (
  output: any,
  context: __SerdeContext
): Member => {
  return {
    __type: "Member",
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(output.CreationDate)
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    FrameworkAttributes:
      output.FrameworkAttributes !== undefined &&
      output.FrameworkAttributes !== null
        ? deserializeAws_restJson1MemberFrameworkAttributes(
            output.FrameworkAttributes,
            context
          )
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    NetworkId:
      output.NetworkId !== undefined && output.NetworkId !== null
        ? output.NetworkId
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_restJson1MemberFabricAttributes = (
  output: any,
  context: __SerdeContext
): MemberFabricAttributes => {
  return {
    __type: "MemberFabricAttributes",
    AdminUsername:
      output.AdminUsername !== undefined && output.AdminUsername !== null
        ? output.AdminUsername
        : undefined,
    CaEndpoint:
      output.CaEndpoint !== undefined && output.CaEndpoint !== null
        ? output.CaEndpoint
        : undefined
  } as any;
};

const deserializeAws_restJson1MemberFrameworkAttributes = (
  output: any,
  context: __SerdeContext
): MemberFrameworkAttributes => {
  return {
    __type: "MemberFrameworkAttributes",
    Fabric:
      output.Fabric !== undefined && output.Fabric !== null
        ? deserializeAws_restJson1MemberFabricAttributes(output.Fabric, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1MemberSummary = (
  output: any,
  context: __SerdeContext
): MemberSummary => {
  return {
    __type: "MemberSummary",
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(output.CreationDate)
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    IsOwned:
      output.IsOwned !== undefined && output.IsOwned !== null
        ? output.IsOwned
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_restJson1MemberSummaryList = (
  output: any,
  context: __SerdeContext
): MemberSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1MemberSummary(entry, context)
  );
};

const deserializeAws_restJson1Network = (
  output: any,
  context: __SerdeContext
): Network => {
  return {
    __type: "Network",
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(output.CreationDate)
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Framework:
      output.Framework !== undefined && output.Framework !== null
        ? output.Framework
        : undefined,
    FrameworkAttributes:
      output.FrameworkAttributes !== undefined &&
      output.FrameworkAttributes !== null
        ? deserializeAws_restJson1NetworkFrameworkAttributes(
            output.FrameworkAttributes,
            context
          )
        : undefined,
    FrameworkVersion:
      output.FrameworkVersion !== undefined && output.FrameworkVersion !== null
        ? output.FrameworkVersion
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    VotingPolicy:
      output.VotingPolicy !== undefined && output.VotingPolicy !== null
        ? deserializeAws_restJson1VotingPolicy(output.VotingPolicy, context)
        : undefined,
    VpcEndpointServiceName:
      output.VpcEndpointServiceName !== undefined &&
      output.VpcEndpointServiceName !== null
        ? output.VpcEndpointServiceName
        : undefined
  } as any;
};

const deserializeAws_restJson1NetworkFabricAttributes = (
  output: any,
  context: __SerdeContext
): NetworkFabricAttributes => {
  return {
    __type: "NetworkFabricAttributes",
    Edition:
      output.Edition !== undefined && output.Edition !== null
        ? output.Edition
        : undefined,
    OrderingServiceEndpoint:
      output.OrderingServiceEndpoint !== undefined &&
      output.OrderingServiceEndpoint !== null
        ? output.OrderingServiceEndpoint
        : undefined
  } as any;
};

const deserializeAws_restJson1NetworkFrameworkAttributes = (
  output: any,
  context: __SerdeContext
): NetworkFrameworkAttributes => {
  return {
    __type: "NetworkFrameworkAttributes",
    Fabric:
      output.Fabric !== undefined && output.Fabric !== null
        ? deserializeAws_restJson1NetworkFabricAttributes(
            output.Fabric,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1NetworkSummary = (
  output: any,
  context: __SerdeContext
): NetworkSummary => {
  return {
    __type: "NetworkSummary",
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(output.CreationDate)
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Framework:
      output.Framework !== undefined && output.Framework !== null
        ? output.Framework
        : undefined,
    FrameworkVersion:
      output.FrameworkVersion !== undefined && output.FrameworkVersion !== null
        ? output.FrameworkVersion
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_restJson1NetworkSummaryList = (
  output: any,
  context: __SerdeContext
): NetworkSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1NetworkSummary(entry, context)
  );
};

const deserializeAws_restJson1Node = (
  output: any,
  context: __SerdeContext
): Node => {
  return {
    __type: "Node",
    AvailabilityZone:
      output.AvailabilityZone !== undefined && output.AvailabilityZone !== null
        ? output.AvailabilityZone
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(output.CreationDate)
        : undefined,
    FrameworkAttributes:
      output.FrameworkAttributes !== undefined &&
      output.FrameworkAttributes !== null
        ? deserializeAws_restJson1NodeFrameworkAttributes(
            output.FrameworkAttributes,
            context
          )
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InstanceType:
      output.InstanceType !== undefined && output.InstanceType !== null
        ? output.InstanceType
        : undefined,
    MemberId:
      output.MemberId !== undefined && output.MemberId !== null
        ? output.MemberId
        : undefined,
    NetworkId:
      output.NetworkId !== undefined && output.NetworkId !== null
        ? output.NetworkId
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_restJson1NodeFabricAttributes = (
  output: any,
  context: __SerdeContext
): NodeFabricAttributes => {
  return {
    __type: "NodeFabricAttributes",
    PeerEndpoint:
      output.PeerEndpoint !== undefined && output.PeerEndpoint !== null
        ? output.PeerEndpoint
        : undefined,
    PeerEventEndpoint:
      output.PeerEventEndpoint !== undefined &&
      output.PeerEventEndpoint !== null
        ? output.PeerEventEndpoint
        : undefined
  } as any;
};

const deserializeAws_restJson1NodeFrameworkAttributes = (
  output: any,
  context: __SerdeContext
): NodeFrameworkAttributes => {
  return {
    __type: "NodeFrameworkAttributes",
    Fabric:
      output.Fabric !== undefined && output.Fabric !== null
        ? deserializeAws_restJson1NodeFabricAttributes(output.Fabric, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1NodeSummary = (
  output: any,
  context: __SerdeContext
): NodeSummary => {
  return {
    __type: "NodeSummary",
    AvailabilityZone:
      output.AvailabilityZone !== undefined && output.AvailabilityZone !== null
        ? output.AvailabilityZone
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(output.CreationDate)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InstanceType:
      output.InstanceType !== undefined && output.InstanceType !== null
        ? output.InstanceType
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_restJson1NodeSummaryList = (
  output: any,
  context: __SerdeContext
): NodeSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1NodeSummary(entry, context)
  );
};

const deserializeAws_restJson1Proposal = (
  output: any,
  context: __SerdeContext
): Proposal => {
  return {
    __type: "Proposal",
    Actions:
      output.Actions !== undefined && output.Actions !== null
        ? deserializeAws_restJson1ProposalActions(output.Actions, context)
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(output.CreationDate)
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    ExpirationDate:
      output.ExpirationDate !== undefined && output.ExpirationDate !== null
        ? new Date(output.ExpirationDate)
        : undefined,
    NetworkId:
      output.NetworkId !== undefined && output.NetworkId !== null
        ? output.NetworkId
        : undefined,
    NoVoteCount:
      output.NoVoteCount !== undefined && output.NoVoteCount !== null
        ? output.NoVoteCount
        : undefined,
    OutstandingVoteCount:
      output.OutstandingVoteCount !== undefined &&
      output.OutstandingVoteCount !== null
        ? output.OutstandingVoteCount
        : undefined,
    ProposalId:
      output.ProposalId !== undefined && output.ProposalId !== null
        ? output.ProposalId
        : undefined,
    ProposedByMemberId:
      output.ProposedByMemberId !== undefined &&
      output.ProposedByMemberId !== null
        ? output.ProposedByMemberId
        : undefined,
    ProposedByMemberName:
      output.ProposedByMemberName !== undefined &&
      output.ProposedByMemberName !== null
        ? output.ProposedByMemberName
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    YesVoteCount:
      output.YesVoteCount !== undefined && output.YesVoteCount !== null
        ? output.YesVoteCount
        : undefined
  } as any;
};

const deserializeAws_restJson1ProposalActions = (
  output: any,
  context: __SerdeContext
): ProposalActions => {
  return {
    __type: "ProposalActions",
    Invitations:
      output.Invitations !== undefined && output.Invitations !== null
        ? deserializeAws_restJson1InviteActionList(output.Invitations, context)
        : undefined,
    Removals:
      output.Removals !== undefined && output.Removals !== null
        ? deserializeAws_restJson1RemoveActionList(output.Removals, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1ProposalSummary = (
  output: any,
  context: __SerdeContext
): ProposalSummary => {
  return {
    __type: "ProposalSummary",
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(output.CreationDate)
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    ExpirationDate:
      output.ExpirationDate !== undefined && output.ExpirationDate !== null
        ? new Date(output.ExpirationDate)
        : undefined,
    ProposalId:
      output.ProposalId !== undefined && output.ProposalId !== null
        ? output.ProposalId
        : undefined,
    ProposedByMemberId:
      output.ProposedByMemberId !== undefined &&
      output.ProposedByMemberId !== null
        ? output.ProposedByMemberId
        : undefined,
    ProposedByMemberName:
      output.ProposedByMemberName !== undefined &&
      output.ProposedByMemberName !== null
        ? output.ProposedByMemberName
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_restJson1ProposalSummaryList = (
  output: any,
  context: __SerdeContext
): ProposalSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ProposalSummary(entry, context)
  );
};

const deserializeAws_restJson1ProposalVoteList = (
  output: any,
  context: __SerdeContext
): VoteSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1VoteSummary(entry, context)
  );
};

const deserializeAws_restJson1RemoveAction = (
  output: any,
  context: __SerdeContext
): RemoveAction => {
  return {
    __type: "RemoveAction",
    MemberId:
      output.MemberId !== undefined && output.MemberId !== null
        ? output.MemberId
        : undefined
  } as any;
};

const deserializeAws_restJson1RemoveActionList = (
  output: any,
  context: __SerdeContext
): RemoveAction[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1RemoveAction(entry, context)
  );
};

const deserializeAws_restJson1VoteSummary = (
  output: any,
  context: __SerdeContext
): VoteSummary => {
  return {
    __type: "VoteSummary",
    MemberId:
      output.MemberId !== undefined && output.MemberId !== null
        ? output.MemberId
        : undefined,
    MemberName:
      output.MemberName !== undefined && output.MemberName !== null
        ? output.MemberName
        : undefined,
    Vote:
      output.Vote !== undefined && output.Vote !== null
        ? output.Vote
        : undefined
  } as any;
};

const deserializeAws_restJson1VotingPolicy = (
  output: any,
  context: __SerdeContext
): VotingPolicy => {
  return {
    __type: "VotingPolicy",
    ApprovalThresholdPolicy:
      output.ApprovalThresholdPolicy !== undefined &&
      output.ApprovalThresholdPolicy !== null
        ? deserializeAws_restJson1ApprovalThresholdPolicy(
            output.ApprovalThresholdPolicy,
            context
          )
        : undefined
  } as any;
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
