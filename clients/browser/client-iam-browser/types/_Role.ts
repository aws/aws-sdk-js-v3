import {
  _AttachedPermissionsBoundary,
  _UnmarshalledAttachedPermissionsBoundary
} from "./_AttachedPermissionsBoundary";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Contains information about an IAM role. This structure is returned as a response element in several API operations that interact with roles.</p>
 */
export interface _Role {
  /**
   * <p> The path to the role. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide. </p>
   */
  Path: string;

  /**
   * <p>The friendly name that identifies the role.</p>
   */
  RoleName: string;

  /**
   * <p> The stable and unique string identifying the role. For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide. </p>
   */
  RoleId: string;

  /**
   * <p> The Amazon Resource Name (ARN) specifying the role. For more information about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i> guide. </p>
   */
  Arn: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the role was created.</p>
   */
  CreateDate: Date | string | number;

  /**
   * <p>The policy that grants an entity permission to assume the role.</p>
   */
  AssumeRolePolicyDocument?: string;

  /**
   * <p>A description of the role that you provide.</p>
   */
  Description?: string;

  /**
   * <p>The maximum session duration (in seconds) for the specified role. Anyone who uses the AWS CLI, or API to assume the role can specify the duration using the optional <code>DurationSeconds</code> API parameter or <code>duration-seconds</code> CLI parameter.</p>
   */
  MaxSessionDuration?: number;

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the role.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundary?: _AttachedPermissionsBoundary;

  /**
   * <p>A list of tags that are attached to the specified role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledRole extends _Role {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the role was created.</p>
   */
  CreateDate: Date;

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the role.</p> <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundary?: _UnmarshalledAttachedPermissionsBoundary;

  /**
   * <p>A list of tags that are attached to the specified role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
