import {
  _ResourceShareAssociation,
  _UnmarshalledResourceShareAssociation
} from "./_ResourceShareAssociation";

/**
 * <p>Describes an invitation to join a resource share.</p>
 */
export interface _ResourceShareInvitation {
  /**
   * <p>The Amazon Resource Name (ARN) of the invitation.</p>
   */
  resourceShareInvitationArn?: string;

  /**
   * <p>The name of the resource share.</p>
   */
  resourceShareName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource share.</p>
   */
  resourceShareArn?: string;

  /**
   * <p>The ID of the AWS account that sent the invitation.</p>
   */
  senderAccountId?: string;

  /**
   * <p>The ID of the AWS account that received the invitation.</p>
   */
  receiverAccountId?: string;

  /**
   * <p>The date and time when the invitation was sent.</p>
   */
  invitationTimestamp?: Date | string | number;

  /**
   * <p>The status of the invitation.</p>
   */
  status?: "PENDING" | "ACCEPTED" | "REJECTED" | "EXPIRED" | string;

  /**
   * <p>The resources associated with the resource share.</p>
   */
  resourceShareAssociations?:
    | Array<_ResourceShareAssociation>
    | Iterable<_ResourceShareAssociation>;
}

export interface _UnmarshalledResourceShareInvitation
  extends _ResourceShareInvitation {
  /**
   * <p>The date and time when the invitation was sent.</p>
   */
  invitationTimestamp?: Date;

  /**
   * <p>The resources associated with the resource share.</p>
   */
  resourceShareAssociations?: Array<_UnmarshalledResourceShareAssociation>;
}
