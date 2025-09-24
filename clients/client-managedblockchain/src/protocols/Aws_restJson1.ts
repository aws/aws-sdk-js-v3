// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

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
  MemberFabricConfiguration,
  MemberFabricLogPublishingConfiguration,
  MemberFrameworkConfiguration,
  MemberLogPublishingConfiguration,
  MemberSummary,
  Network,
  NetworkFabricConfiguration,
  NetworkFrameworkConfiguration,
  NetworkSummary,
  Node,
  NodeConfiguration,
  NodeFabricLogPublishingConfiguration,
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
  VotingPolicy,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateAccessorCommand
 */
export const se_CreateAccessorCommand = async (
  input: CreateAccessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/accessors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccessorType: [],
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      NetworkType: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMemberCommand
 */
export const se_CreateMemberCommand = async (
  input: CreateMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/networks/{NetworkId}/members");
  b.p("NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      InvitationId: [],
      MemberConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateNetworkCommand
 */
export const se_CreateNetworkCommand = async (
  input: CreateNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/networks");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      Framework: [],
      FrameworkConfiguration: (_) => _json(_),
      FrameworkVersion: [],
      MemberConfiguration: (_) => _json(_),
      Name: [],
      Tags: (_) => _json(_),
      VotingPolicy: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateNodeCommand
 */
export const se_CreateNodeCommand = async (
  input: CreateNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/networks/{NetworkId}/nodes");
  b.p("NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      MemberId: [],
      NodeConfiguration: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProposalCommand
 */
export const se_CreateProposalCommand = async (
  input: CreateProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/networks/{NetworkId}/proposals");
  b.p("NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Actions: (_) => _json(_),
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      MemberId: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAccessorCommand
 */
export const se_DeleteAccessorCommand = async (
  input: DeleteAccessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accessors/{AccessorId}");
  b.p("AccessorId", () => input.AccessorId!, "{AccessorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMemberCommand
 */
export const se_DeleteMemberCommand = async (
  input: DeleteMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/networks/{NetworkId}/members/{MemberId}");
  b.p("NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  b.p("MemberId", () => input.MemberId!, "{MemberId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteNodeCommand
 */
export const se_DeleteNodeCommand = async (
  input: DeleteNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/networks/{NetworkId}/nodes/{NodeId}");
  b.p("NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  b.p("NodeId", () => input.NodeId!, "{NodeId}", false);
  const query: any = map({
    [_mI]: [, input[_MI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAccessorCommand
 */
export const se_GetAccessorCommand = async (
  input: GetAccessorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accessors/{AccessorId}");
  b.p("AccessorId", () => input.AccessorId!, "{AccessorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMemberCommand
 */
export const se_GetMemberCommand = async (
  input: GetMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/networks/{NetworkId}/members/{MemberId}");
  b.p("NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  b.p("MemberId", () => input.MemberId!, "{MemberId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNetworkCommand
 */
export const se_GetNetworkCommand = async (
  input: GetNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/networks/{NetworkId}");
  b.p("NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNodeCommand
 */
export const se_GetNodeCommand = async (
  input: GetNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/networks/{NetworkId}/nodes/{NodeId}");
  b.p("NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  b.p("NodeId", () => input.NodeId!, "{NodeId}", false);
  const query: any = map({
    [_mI]: [, input[_MI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProposalCommand
 */
export const se_GetProposalCommand = async (
  input: GetProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/networks/{NetworkId}/proposals/{ProposalId}");
  b.p("NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  b.p("ProposalId", () => input.ProposalId!, "{ProposalId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAccessorsCommand
 */
export const se_ListAccessorsCommand = async (
  input: ListAccessorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/accessors");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
    [_nTe]: [, input[_NTe]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInvitationsCommand
 */
export const se_ListInvitationsCommand = async (
  input: ListInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/invitations");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMembersCommand
 */
export const se_ListMembersCommand = async (
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/networks/{NetworkId}/members");
  b.p("NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  const query: any = map({
    [_n]: [, input[_N]!],
    [_s]: [, input[_S]!],
    [_iO]: [() => input.IsOwned !== void 0, () => input[_IO]!.toString()],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNetworksCommand
 */
export const se_ListNetworksCommand = async (
  input: ListNetworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/networks");
  const query: any = map({
    [_n]: [, input[_N]!],
    [_f]: [, input[_F]!],
    [_s]: [, input[_S]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNodesCommand
 */
export const se_ListNodesCommand = async (
  input: ListNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/networks/{NetworkId}/nodes");
  b.p("NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  const query: any = map({
    [_mI]: [, input[_MI]!],
    [_s]: [, input[_S]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProposalsCommand
 */
export const se_ListProposalsCommand = async (
  input: ListProposalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/networks/{NetworkId}/proposals");
  b.p("NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProposalVotesCommand
 */
export const se_ListProposalVotesCommand = async (
  input: ListProposalVotesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/networks/{NetworkId}/proposals/{ProposalId}/votes");
  b.p("NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  b.p("ProposalId", () => input.ProposalId!, "{ProposalId}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RejectInvitationCommand
 */
export const se_RejectInvitationCommand = async (
  input: RejectInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/invitations/{InvitationId}");
  b.p("InvitationId", () => input.InvitationId!, "{InvitationId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMemberCommand
 */
export const se_UpdateMemberCommand = async (
  input: UpdateMemberCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/networks/{NetworkId}/members/{MemberId}");
  b.p("NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  b.p("MemberId", () => input.MemberId!, "{MemberId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LogPublishingConfiguration: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateNodeCommand
 */
export const se_UpdateNodeCommand = async (
  input: UpdateNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/networks/{NetworkId}/nodes/{NodeId}");
  b.p("NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  b.p("NodeId", () => input.NodeId!, "{NodeId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LogPublishingConfiguration: (_) => _json(_),
      MemberId: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1VoteOnProposalCommand
 */
export const se_VoteOnProposalCommand = async (
  input: VoteOnProposalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/networks/{NetworkId}/proposals/{ProposalId}/votes");
  b.p("NetworkId", () => input.NetworkId!, "{NetworkId}", false);
  b.p("ProposalId", () => input.ProposalId!, "{ProposalId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Vote: [],
      VoterMemberId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateAccessorCommand
 */
export const de_CreateAccessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccessorId: __expectString,
    BillingToken: __expectString,
    NetworkType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMemberCommand
 */
export const de_CreateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MemberId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateNetworkCommand
 */
export const de_CreateNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MemberId: __expectString,
    NetworkId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateNodeCommand
 */
export const de_CreateNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NodeId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProposalCommand
 */
export const de_CreateProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProposalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProposalId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAccessorCommand
 */
export const de_DeleteAccessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMemberCommand
 */
export const de_DeleteMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteNodeCommand
 */
export const de_DeleteNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetAccessorCommand
 */
export const de_GetAccessorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Accessor: (_) => de_Accessor(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMemberCommand
 */
export const de_GetMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Member: (_) => de_Member(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkCommand
 */
export const de_GetNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Network: (_) => de_Network(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNodeCommand
 */
export const de_GetNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Node: (_) => de_Node(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProposalCommand
 */
export const de_GetProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProposalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Proposal: (_) => de_Proposal(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAccessorsCommand
 */
export const de_ListAccessorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Accessors: (_) => de_AccessorSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInvitationsCommand
 */
export const de_ListInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Invitations: (_) => de_InvitationList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMembersCommand
 */
export const de_ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Members: (_) => de_MemberSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNetworksCommand
 */
export const de_ListNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Networks: (_) => de_NetworkSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNodesCommand
 */
export const de_ListNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Nodes: (_) => de_NodeSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProposalsCommand
 */
export const de_ListProposalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Proposals: (_) => de_ProposalSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProposalVotesCommand
 */
export const de_ListProposalVotesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProposalVotesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ProposalVotes: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RejectInvitationCommand
 */
export const de_RejectInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMemberCommand
 */
export const de_UpdateMemberCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMemberCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateNodeCommand
 */
export const de_UpdateNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1VoteOnProposalCommand
 */
export const de_VoteOnProposalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VoteOnProposalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.managedblockchain#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.managedblockchain#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.managedblockchain#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.managedblockchain#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.managedblockchain#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.managedblockchain#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.managedblockchain#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.managedblockchain#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.managedblockchain#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    case "IllegalActionException":
    case "com.amazonaws.managedblockchain#IllegalActionException":
      throw await de_IllegalActionExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1IllegalActionExceptionRes
 */
const de_IllegalActionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalActionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new IllegalActionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServiceErrorExceptionRes
 */
const de_InternalServiceErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {});
  Object.assign(contents, doc);
  const exception = new InternalServiceErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceLimitExceededExceptionRes
 */
const de_ResourceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    ResourceName: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotReadyExceptionRes
 */
const de_ResourceNotReadyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotReadyException({
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
  const doc = take(data, {});
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    ResourceName: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ApprovalThresholdPolicy omitted.

// se_InputTagMap omitted.

// se_InviteAction omitted.

// se_InviteActionList omitted.

// se_LogConfiguration omitted.

// se_LogConfigurations omitted.

// se_MemberConfiguration omitted.

// se_MemberFabricConfiguration omitted.

// se_MemberFabricLogPublishingConfiguration omitted.

// se_MemberFrameworkConfiguration omitted.

// se_MemberLogPublishingConfiguration omitted.

// se_NetworkFabricConfiguration omitted.

// se_NetworkFrameworkConfiguration omitted.

// se_NodeConfiguration omitted.

// se_NodeFabricLogPublishingConfiguration omitted.

// se_NodeLogPublishingConfiguration omitted.

// se_ProposalActions omitted.

// se_RemoveAction omitted.

// se_RemoveActionList omitted.

// se_VotingPolicy omitted.

/**
 * deserializeAws_restJson1Accessor
 */
const de_Accessor = (output: any, context: __SerdeContext): Accessor => {
  return take(output, {
    Arn: __expectString,
    BillingToken: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Id: __expectString,
    NetworkType: __expectString,
    Status: __expectString,
    Tags: _json,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AccessorSummary
 */
const de_AccessorSummary = (output: any, context: __SerdeContext): AccessorSummary => {
  return take(output, {
    Arn: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Id: __expectString,
    NetworkType: __expectString,
    Status: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AccessorSummaryList
 */
const de_AccessorSummaryList = (output: any, context: __SerdeContext): AccessorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccessorSummary(entry, context);
    });
  return retVal;
};

// de_ApprovalThresholdPolicy omitted.

/**
 * deserializeAws_restJson1Invitation
 */
const de_Invitation = (output: any, context: __SerdeContext): Invitation => {
  return take(output, {
    Arn: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ExpirationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    InvitationId: __expectString,
    NetworkSummary: (_: any) => de_NetworkSummary(_, context),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1InvitationList
 */
const de_InvitationList = (output: any, context: __SerdeContext): Invitation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Invitation(entry, context);
    });
  return retVal;
};

// de_InviteAction omitted.

// de_InviteActionList omitted.

// de_LogConfiguration omitted.

// de_LogConfigurations omitted.

/**
 * deserializeAws_restJson1Member
 */
const de_Member = (output: any, context: __SerdeContext): Member => {
  return take(output, {
    Arn: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    FrameworkAttributes: _json,
    Id: __expectString,
    KmsKeyArn: __expectString,
    LogPublishingConfiguration: _json,
    Name: __expectString,
    NetworkId: __expectString,
    Status: __expectString,
    Tags: _json,
  }) as any;
};

// de_MemberFabricAttributes omitted.

// de_MemberFabricLogPublishingConfiguration omitted.

// de_MemberFrameworkAttributes omitted.

// de_MemberLogPublishingConfiguration omitted.

/**
 * deserializeAws_restJson1MemberSummary
 */
const de_MemberSummary = (output: any, context: __SerdeContext): MemberSummary => {
  return take(output, {
    Arn: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    Id: __expectString,
    IsOwned: __expectBoolean,
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1MemberSummaryList
 */
const de_MemberSummaryList = (output: any, context: __SerdeContext): MemberSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MemberSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Network
 */
const de_Network = (output: any, context: __SerdeContext): Network => {
  return take(output, {
    Arn: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    Framework: __expectString,
    FrameworkAttributes: _json,
    FrameworkVersion: __expectString,
    Id: __expectString,
    Name: __expectString,
    Status: __expectString,
    Tags: _json,
    VotingPolicy: _json,
    VpcEndpointServiceName: __expectString,
  }) as any;
};

// de_NetworkEthereumAttributes omitted.

// de_NetworkFabricAttributes omitted.

// de_NetworkFrameworkAttributes omitted.

/**
 * deserializeAws_restJson1NetworkSummary
 */
const de_NetworkSummary = (output: any, context: __SerdeContext): NetworkSummary => {
  return take(output, {
    Arn: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    Framework: __expectString,
    FrameworkVersion: __expectString,
    Id: __expectString,
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1NetworkSummaryList
 */
const de_NetworkSummaryList = (output: any, context: __SerdeContext): NetworkSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NetworkSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Node
 */
const de_Node = (output: any, context: __SerdeContext): Node => {
  return take(output, {
    Arn: __expectString,
    AvailabilityZone: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    FrameworkAttributes: _json,
    Id: __expectString,
    InstanceType: __expectString,
    KmsKeyArn: __expectString,
    LogPublishingConfiguration: _json,
    MemberId: __expectString,
    NetworkId: __expectString,
    StateDB: __expectString,
    Status: __expectString,
    Tags: _json,
  }) as any;
};

// de_NodeEthereumAttributes omitted.

// de_NodeFabricAttributes omitted.

// de_NodeFabricLogPublishingConfiguration omitted.

// de_NodeFrameworkAttributes omitted.

// de_NodeLogPublishingConfiguration omitted.

/**
 * deserializeAws_restJson1NodeSummary
 */
const de_NodeSummary = (output: any, context: __SerdeContext): NodeSummary => {
  return take(output, {
    Arn: __expectString,
    AvailabilityZone: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Id: __expectString,
    InstanceType: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1NodeSummaryList
 */
const de_NodeSummaryList = (output: any, context: __SerdeContext): NodeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NodeSummary(entry, context);
    });
  return retVal;
};

// de_OutputTagMap omitted.

/**
 * deserializeAws_restJson1Proposal
 */
const de_Proposal = (output: any, context: __SerdeContext): Proposal => {
  return take(output, {
    Actions: _json,
    Arn: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    ExpirationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    NetworkId: __expectString,
    NoVoteCount: __expectInt32,
    OutstandingVoteCount: __expectInt32,
    ProposalId: __expectString,
    ProposedByMemberId: __expectString,
    ProposedByMemberName: __expectString,
    Status: __expectString,
    Tags: _json,
    YesVoteCount: __expectInt32,
  }) as any;
};

// de_ProposalActions omitted.

/**
 * deserializeAws_restJson1ProposalSummary
 */
const de_ProposalSummary = (output: any, context: __SerdeContext): ProposalSummary => {
  return take(output, {
    Arn: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    ExpirationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ProposalId: __expectString,
    ProposedByMemberId: __expectString,
    ProposedByMemberName: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ProposalSummaryList
 */
const de_ProposalSummaryList = (output: any, context: __SerdeContext): ProposalSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProposalSummary(entry, context);
    });
  return retVal;
};

// de_ProposalVoteList omitted.

// de_RemoveAction omitted.

// de_RemoveActionList omitted.

// de_VoteSummary omitted.

// de_VotingPolicy omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _F = "Framework";
const _IO = "IsOwned";
const _MI = "MemberId";
const _MR = "MaxResults";
const _N = "Name";
const _NT = "NextToken";
const _NTe = "NetworkType";
const _S = "Status";
const _TK = "TagKeys";
const _f = "framework";
const _iO = "isOwned";
const _mI = "memberId";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _nTe = "networkType";
const _s = "status";
const _tK = "tagKeys";
