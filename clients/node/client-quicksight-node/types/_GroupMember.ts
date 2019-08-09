/**
 * <p>A member of an Amazon QuickSight group. Currently, group members must be users. Groups can't be members of another group. </p>
 */
export interface _GroupMember {
  /**
   * <p>The Amazon Resource Name (ARN) for the group member (user).</p>
   */
  Arn?: string;

  /**
   * <p>The name of the group member (user).</p>
   */
  MemberName?: string;
}

export type _UnmarshalledGroupMember = _GroupMember;
