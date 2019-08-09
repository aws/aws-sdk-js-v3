import { _PolicyDetail, _UnmarshalledPolicyDetail } from "./_PolicyDetail";
import {
  _AttachedPolicy,
  _UnmarshalledAttachedPolicy
} from "./_AttachedPolicy";

/**
 * <p>Contains information about an IAM group, including all of the group's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 */
export interface _GroupDetail {
  /**
   * <p>The path to the group. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide.</p>
   */
  Path?: string;

  /**
   * <p>The friendly name that identifies the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The stable and unique string identifying the group. For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide.</p>
   */
  GroupId?: string;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn?: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the group was created.</p>
   */
  CreateDate?: Date | string | number;

  /**
   * <p>A list of the inline policies embedded in the group.</p>
   */
  GroupPolicyList?: Array<_PolicyDetail> | Iterable<_PolicyDetail>;

  /**
   * <p>A list of the managed policies attached to the group.</p>
   */
  AttachedManagedPolicies?: Array<_AttachedPolicy> | Iterable<_AttachedPolicy>;
}

export interface _UnmarshalledGroupDetail extends _GroupDetail {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the group was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A list of the inline policies embedded in the group.</p>
   */
  GroupPolicyList?: Array<_UnmarshalledPolicyDetail>;

  /**
   * <p>A list of the managed policies attached to the group.</p>
   */
  AttachedManagedPolicies?: Array<_UnmarshalledAttachedPolicy>;
}
