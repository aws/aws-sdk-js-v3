/**
 * <p> Properties of an individual vote that a member cast for a proposal. </p>
 */
export interface _VoteSummary {
  /**
   * <p> The vote value, either <code>YES</code> or <code>NO</code>. </p>
   */
  Vote?: "YES" | "NO" | string;

  /**
   * <p> The name of the member that cast the vote. </p>
   */
  MemberName?: string;

  /**
   * <p> The unique identifier of the member that cast the vote. </p>
   */
  MemberId?: string;
}

export type _UnmarshalledVoteSummary = _VoteSummary;
