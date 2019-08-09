import {
  _NetworkSummary,
  _UnmarshalledNetworkSummary
} from "./_NetworkSummary";

/**
 * <p>An invitation to an AWS account to create a member and join the network.</p>
 */
export interface _Invitation {
  /**
   * <p>The unique identifier for the invitation.</p>
   */
  InvitationId?: string;

  /**
   * <p>The date and time that the invitation was created.</p>
   */
  CreationDate?: Date | string | number;

  /**
   * <p>The date and time that the invitation expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>. After this date and time, the invitee can no longer create a member and join the network using this <code>InvitationId</code>.</p>
   */
  ExpirationDate?: Date | string | number;

  /**
   * <p>The status of the invitation:</p> <ul> <li> <p> <code>PENDING</code> - The invitee has not created a member to join the network, and the invitation has not yet expired.</p> </li> <li> <p> <code>ACCEPTING</code> - The invitee has begun creating a member, and creation has not yet completed.</p> </li> <li> <p> <code>ACCEPTED</code> - The invitee created a member and joined the network using the <code>InvitationID</code>.</p> </li> <li> <p> <code>REJECTED</code> - The invitee rejected the invitation.</p> </li> <li> <p> <code>EXPIRED</code> - The invitee neither created a member nor rejected the invitation before the <code>ExpirationDate</code>.</p> </li> </ul>
   */
  Status?:
    | "PENDING"
    | "ACCEPTED"
    | "ACCEPTING"
    | "REJECTED"
    | "EXPIRED"
    | string;

  /**
   * <p>A summary of network configuration properties.</p>
   */
  NetworkSummary?: _NetworkSummary;
}

export interface _UnmarshalledInvitation extends _Invitation {
  /**
   * <p>The date and time that the invitation was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date and time that the invitation expires. This is the <code>CreationDate</code> plus the <code>ProposalDurationInHours</code> that is specified in the <code>ProposalThresholdPolicy</code>. After this date and time, the invitee can no longer create a member and join the network using this <code>InvitationId</code>.</p>
   */
  ExpirationDate?: Date;

  /**
   * <p>A summary of network configuration properties.</p>
   */
  NetworkSummary?: _UnmarshalledNetworkSummary;
}
