/**
 * <p>Contains information about an IAM group entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateGroup</a> </p> </li> <li> <p> <a>GetGroup</a> </p> </li> <li> <p> <a>ListGroups</a> </p> </li> </ul>
 */
export interface _Group {
  /**
   * <p>The path to the group. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide. </p>
   */
  Path: string;

  /**
   * <p>The friendly name that identifies the group.</p>
   */
  GroupName: string;

  /**
   * <p> The stable and unique string identifying the group. For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide. </p>
   */
  GroupId: string;

  /**
   * <p> The Amazon Resource Name (ARN) specifying the group. For more information about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>Using IAM</i> guide. </p>
   */
  Arn: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the group was created.</p>
   */
  CreateDate: Date | string | number;
}

export interface _UnmarshalledGroup extends _Group {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the group was created.</p>
   */
  CreateDate: Date;
}
