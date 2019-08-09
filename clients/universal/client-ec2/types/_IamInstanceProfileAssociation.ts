import {
  _IamInstanceProfile,
  _UnmarshalledIamInstanceProfile
} from "./_IamInstanceProfile";

/**
 * <p>Describes an association between an IAM instance profile and an instance.</p>
 */
export interface _IamInstanceProfileAssociation {
  /**
   * <p>The ID of the association.</p>
   */
  AssociationId?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: _IamInstanceProfile;

  /**
   * <p>The state of the association.</p>
   */
  State?:
    | "associating"
    | "associated"
    | "disassociating"
    | "disassociated"
    | string;

  /**
   * <p>The time the IAM instance profile was associated with the instance.</p>
   */
  Timestamp?: Date | string | number;
}

export interface _UnmarshalledIamInstanceProfileAssociation
  extends _IamInstanceProfileAssociation {
  /**
   * <p>The IAM instance profile.</p>
   */
  IamInstanceProfile?: _UnmarshalledIamInstanceProfile;

  /**
   * <p>The time the IAM instance profile was associated with the instance.</p>
   */
  Timestamp?: Date;
}
