import {
  _AttachedPermissionsBoundary,
  _UnmarshalledAttachedPermissionsBoundary
} from "./_AttachedPermissionsBoundary";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Contains information about an IAM user entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateUser</a> </p> </li> <li> <p> <a>GetUser</a> </p> </li> <li> <p> <a>ListUsers</a> </p> </li> </ul>
 */
export interface _User {
  /**
   * <p>The path to the user. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide.</p>
   */
  Path: string;

  /**
   * <p>The friendly name identifying the user.</p>
   */
  UserName: string;

  /**
   * <p>The stable and unique string identifying the user. For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide.</p>
   */
  UserId: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and how to use ARNs in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide. </p>
   */
  Arn: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the user was created.</p>
   */
  CreateDate: Date | string | number;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the user's password was last used to sign in to an AWS website. For a list of AWS websites that capture a user's last sign-in time, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Credential Reports</a> topic in the <i>Using IAM</i> guide. If a password is used more than once in a five-minute span, only the first use is returned in this field. If the field is null (no value), then it indicates that they never signed in with a password. This can be because:</p> <ul> <li> <p>The user never had a password.</p> </li> <li> <p>A password exists but has not been used since IAM started tracking this information on October 20, 2014.</p> </li> </ul> <p>A null value does not mean that the user <i>never</i> had a password. Also, if the user does not currently have a password, but had one in the past, then this field contains the date and time the most recent password was used.</p> <p>This value is returned only in the <a>GetUser</a> and <a>ListUsers</a> operations. </p>
   */
  PasswordLastUsed?: Date | string | number;

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the user.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundary?: _AttachedPermissionsBoundary;

  /**
   * <p>A list of tags that are associated with the specified user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledUser extends _User {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the user was created.</p>
   */
  CreateDate: Date;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the user's password was last used to sign in to an AWS website. For a list of AWS websites that capture a user's last sign-in time, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Credential Reports</a> topic in the <i>Using IAM</i> guide. If a password is used more than once in a five-minute span, only the first use is returned in this field. If the field is null (no value), then it indicates that they never signed in with a password. This can be because:</p> <ul> <li> <p>The user never had a password.</p> </li> <li> <p>A password exists but has not been used since IAM started tracking this information on October 20, 2014.</p> </li> </ul> <p>A null value does not mean that the user <i>never</i> had a password. Also, if the user does not currently have a password, but had one in the past, then this field contains the date and time the most recent password was used.</p> <p>This value is returned only in the <a>GetUser</a> and <a>ListUsers</a> operations. </p>
   */
  PasswordLastUsed?: Date;

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the user.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundary?: _UnmarshalledAttachedPermissionsBoundary;

  /**
   * <p>A list of tags that are associated with the specified user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
