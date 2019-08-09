import { CreateMemberInput } from "./CreateMemberInput";
import { CreateNetworkInput } from "./CreateNetworkInput";
import { CreateNodeInput } from "./CreateNodeInput";
import { CreateProposalInput } from "./CreateProposalInput";
import { DeleteMemberInput } from "./DeleteMemberInput";
import { DeleteNodeInput } from "./DeleteNodeInput";
import { GetMemberInput } from "./GetMemberInput";
import { GetNetworkInput } from "./GetNetworkInput";
import { GetNodeInput } from "./GetNodeInput";
import { GetProposalInput } from "./GetProposalInput";
import { ListInvitationsInput } from "./ListInvitationsInput";
import { ListMembersInput } from "./ListMembersInput";
import { ListNetworksInput } from "./ListNetworksInput";
import { ListNodesInput } from "./ListNodesInput";
import { ListProposalVotesInput } from "./ListProposalVotesInput";
import { ListProposalsInput } from "./ListProposalsInput";
import { RejectInvitationInput } from "./RejectInvitationInput";
import { VoteOnProposalInput } from "./VoteOnProposalInput";
export type InputTypesUnion =
  | CreateMemberInput
  | CreateNetworkInput
  | CreateNodeInput
  | CreateProposalInput
  | DeleteMemberInput
  | DeleteNodeInput
  | GetMemberInput
  | GetNetworkInput
  | GetNodeInput
  | GetProposalInput
  | ListInvitationsInput
  | ListMembersInput
  | ListNetworksInput
  | ListNodesInput
  | ListProposalVotesInput
  | ListProposalsInput
  | RejectInvitationInput
  | VoteOnProposalInput;
