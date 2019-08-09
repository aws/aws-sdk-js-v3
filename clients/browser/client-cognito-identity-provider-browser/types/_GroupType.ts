/**
 * <p>The group type.</p>
 */
export interface _GroupType {
  /**
   * <p>The name of the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId?: string;

  /**
   * <p>A string containing the description of the group.</p>
   */
  Description?: string;

  /**
   * <p>The role ARN for the group.</p>
   */
  RoleArn?: string;

  /**
   * <p>A nonnegative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool. If a user belongs to two or more groups, it is the group with the highest precedence whose role ARN will be used in the <code>cognito:roles</code> and <code>cognito:preferred_role</code> claims in the user's tokens. Groups with higher <code>Precedence</code> values take precedence over groups with lower <code>Precedence</code> values or with null <code>Precedence</code> values.</p> <p>Two groups can have the same <code>Precedence</code> value. If this happens, neither group takes precedence over the other. If two groups with the same <code>Precedence</code> have the same role ARN, that role is used in the <code>cognito:preferred_role</code> claim in tokens for users in each group. If the two groups have different role ARNs, the <code>cognito:preferred_role</code> claim is not set in users' tokens.</p> <p>The default <code>Precedence</code> value is null.</p>
   */
  Precedence?: number;

  /**
   * <p>The date the group was last modified.</p>
   */
  LastModifiedDate?: Date | string | number;

  /**
   * <p>The date the group was created.</p>
   */
  CreationDate?: Date | string | number;
}

export interface _UnmarshalledGroupType extends _GroupType {
  /**
   * <p>The date the group was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The date the group was created.</p>
   */
  CreationDate?: Date;
}
