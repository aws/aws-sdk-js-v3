/**
 * <p>Properties of a proposal.</p>
 */
export interface _ProposalSummary {
  /**
   * <p> The unique identifier of the proposal. </p>
   */
  ProposalId?: string;

  /**
   * <p> The description of the proposal. </p>
   */
  Description?: string;

  /**
   * <p> The unique identifier of the member that created the proposal. </p>
   */
  ProposedByMemberId?: string;

  /**
   * <p> The name of the member that created the proposal. </p>
   */
  ProposedByMemberName?: string;

  /**
   * <p>The status of the proposal. Values are as follows:</p> <ul> <li> <p> <code>IN_PROGRESS</code> - The proposal is active and open for member voting.</p> </li> <li> <p> <code>APPROVED</code> - The proposal was approved with sufficient <code>YES</code> votes among members according to the <code>VotingPolicy</code> specified for the <code>Network</code>. The specified proposal actions are carried out.</p> </li> <li> <p> <code>REJECTED</code> - The proposal was rejected with insufficient <code>YES</code> votes among members according to the <code>VotingPolicy</code> specified for the <code>Network</code>. The specified <code>ProposalActions</code> are not carried out.</p> </li> <li> <p> <code>EXPIRED</code> - Members did not cast the number of votes required to determine the proposal outcome before the proposal expired. The specified <code>ProposalActions</code> are not carried out.</p> </li> <li> <p> <code>ACTION_FAILED</code> - One or more of the specified <code>ProposalActions</code> in a proposal that was approved could not be completed because of an error.</p> </li> </ul>
   */
  Status?:
    | "IN_PROGRESS"
    | "APPROVED"
    | "REJECTED"
    | "EXPIRED"
    | "ACTION_FAILED"
    | string;

  /**
   * <p> The date and time that the proposal was created. </p>
   */
  CreationDate?: Date | string | number;

  /**
   * <p> The date and time that the proposal expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>. After this date and time, if members have not cast enough votes to determine the outcome according to the voting policy, the proposal is <code>EXPIRED</code> and <code>Actions</code> are not carried out. </p>
   */
  ExpirationDate?: Date | string | number;
}

export interface _UnmarshalledProposalSummary extends _ProposalSummary {
  /**
   * <p> The date and time that the proposal was created. </p>
   */
  CreationDate?: Date;

  /**
   * <p> The date and time that the proposal expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>. After this date and time, if members have not cast enough votes to determine the outcome according to the voting policy, the proposal is <code>EXPIRED</code> and <code>Actions</code> are not carried out. </p>
   */
  ExpirationDate?: Date;
}
