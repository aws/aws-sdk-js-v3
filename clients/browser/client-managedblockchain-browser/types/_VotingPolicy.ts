import {
  _ApprovalThresholdPolicy,
  _UnmarshalledApprovalThresholdPolicy
} from "./_ApprovalThresholdPolicy";

/**
 * <p> The voting rules for the network to decide if a proposal is accepted </p>
 */
export interface _VotingPolicy {
  /**
   * <p>Defines the rules for the network for voting on proposals, such as the percentage of <code>YES</code> votes required for the proposal to be approved and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.</p>
   */
  ApprovalThresholdPolicy?: _ApprovalThresholdPolicy;
}

export interface _UnmarshalledVotingPolicy extends _VotingPolicy {
  /**
   * <p>Defines the rules for the network for voting on proposals, such as the percentage of <code>YES</code> votes required for the proposal to be approved and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.</p>
   */
  ApprovalThresholdPolicy?: _UnmarshalledApprovalThresholdPolicy;
}
