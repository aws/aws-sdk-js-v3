import {
  _MemberFrameworkAttributes,
  _UnmarshalledMemberFrameworkAttributes
} from "./_MemberFrameworkAttributes";

/**
 * <p>Member configuration properties.</p>
 */
export interface _Member {
  /**
   * <p>The unique identifier of the network to which the member belongs.</p>
   */
  NetworkId?: string;

  /**
   * <p>The unique identifier of the member.</p>
   */
  Id?: string;

  /**
   * <p>The name of the member.</p>
   */
  Name?: string;

  /**
   * <p>An optional description for the member.</p>
   */
  Description?: string;

  /**
   * <p>Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.</p>
   */
  FrameworkAttributes?: _MemberFrameworkAttributes;

  /**
   * <p>The status of a member.</p> <ul> <li> <p> <code>CREATING</code> - The AWS account is in the process of creating a member.</p> </li> <li> <p> <code>AVAILABLE</code> - The member has been created and can participate in the network.</p> </li> <li> <p> <code>CREATE_FAILED</code> - The AWS account attempted to create a member and creation failed.</p> </li> <li> <p> <code>DELETING</code> - The member and all associated resources are in the process of being deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code> <code>PROPOSAL</code> to remove the member.</p> </li> <li> <p> <code>DELETED</code> - The member can no longer participate on the network and all associated resources are deleted. Either the AWS account that owns the member deleted it, or the member is being deleted as the result of an <code>APPROVED</code> <code>PROPOSAL</code> to remove the member.</p> </li> </ul>
   */
  Status?:
    | "CREATING"
    | "AVAILABLE"
    | "CREATE_FAILED"
    | "DELETING"
    | "DELETED"
    | string;

  /**
   * <p>The date and time that the member was created.</p>
   */
  CreationDate?: Date | string | number;
}

export interface _UnmarshalledMember extends _Member {
  /**
   * <p>Attributes relevant to a member for the blockchain framework that the Managed Blockchain network uses.</p>
   */
  FrameworkAttributes?: _UnmarshalledMemberFrameworkAttributes;

  /**
   * <p>The date and time that the member was created.</p>
   */
  CreationDate?: Date;
}
