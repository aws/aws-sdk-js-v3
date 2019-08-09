import { _Role, _UnmarshalledRole } from "./_Role";

/**
 * <p>Contains information about an instance profile.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateInstanceProfile</a> </p> </li> <li> <p> <a>GetInstanceProfile</a> </p> </li> <li> <p> <a>ListInstanceProfiles</a> </p> </li> <li> <p> <a>ListInstanceProfilesForRole</a> </p> </li> </ul>
 */
export interface _InstanceProfile {
  /**
   * <p> The path to the instance profile. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide. </p>
   */
  Path: string;

  /**
   * <p>The name identifying the instance profile.</p>
   */
  InstanceProfileName: string;

  /**
   * <p> The stable and unique string identifying the instance profile. For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide. </p>
   */
  InstanceProfileId: string;

  /**
   * <p> The Amazon Resource Name (ARN) specifying the instance profile. For more information about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide. </p>
   */
  Arn: string;

  /**
   * <p>The date when the instance profile was created.</p>
   */
  CreateDate: Date | string | number;

  /**
   * <p>The role associated with the instance profile.</p>
   */
  Roles: Array<_Role> | Iterable<_Role>;
}

export interface _UnmarshalledInstanceProfile extends _InstanceProfile {
  /**
   * <p>The date when the instance profile was created.</p>
   */
  CreateDate: Date;

  /**
   * <p>The role associated with the instance profile.</p>
   */
  Roles: Array<_UnmarshalledRole>;
}
