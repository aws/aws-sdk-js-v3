import { CreateMemberOutput } from "./CreateMemberOutput";
import { CreateNetworkOutput } from "./CreateNetworkOutput";
import { CreateNodeOutput } from "./CreateNodeOutput";
import { CreateProposalOutput } from "./CreateProposalOutput";
import { DeleteMemberOutput } from "./DeleteMemberOutput";
import { DeleteNodeOutput } from "./DeleteNodeOutput";
import { GetMemberOutput } from "./GetMemberOutput";
import { GetNetworkOutput } from "./GetNetworkOutput";
import { GetNodeOutput } from "./GetNodeOutput";
import { GetProposalOutput } from "./GetProposalOutput";
import { ListInvitationsOutput } from "./ListInvitationsOutput";
import { ListMembersOutput } from "./ListMembersOutput";
import { ListNetworksOutput } from "./ListNetworksOutput";
import { ListNodesOutput } from "./ListNodesOutput";
import { ListProposalVotesOutput } from "./ListProposalVotesOutput";
import { ListProposalsOutput } from "./ListProposalsOutput";
import { RejectInvitationOutput } from "./RejectInvitationOutput";
import { VoteOnProposalOutput } from "./VoteOnProposalOutput";
export type OutputTypesUnion =
  | CreateMemberOutput
  | CreateNetworkOutput
  | CreateNodeOutput
  | CreateProposalOutput
  | DeleteMemberOutput
  | DeleteNodeOutput
  | GetMemberOutput
  | GetNetworkOutput
  | GetNodeOutput
  | GetProposalOutput
  | ListInvitationsOutput
  | ListMembersOutput
  | ListNetworksOutput
  | ListNodesOutput
  | ListProposalVotesOutput
  | ListProposalsOutput
  | RejectInvitationOutput
  | VoteOnProposalOutput;
