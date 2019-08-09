/**
 * <p>Contains an array of triplets made up of a condition type (such as <code>StringEquals</code>), a key, and a value. Conditions are used to filter resources in a selection that is assigned to a backup plan.</p>
 */
export interface _Condition {
  /**
   * <p>An operation, such as <code>StringEquals</code>, that is applied to a key-value pair used to filter resources in a selection.</p>
   */
  ConditionType: "STRINGEQUALS" | string;

  /**
   * <p>The key in a key-value pair. For example, in <code>"ec2:ResourceTag/Department": "accounting"</code>, <code>"ec2:ResourceTag/Department"</code> is the key.</p>
   */
  ConditionKey: string;

  /**
   * <p>The value in a key-value pair. For example, in <code>"ec2:ResourceTag/Department": "accounting"</code>, <code>"accounting"</code> is the value.</p>
   */
  ConditionValue: string;
}

export type _UnmarshalledCondition = _Condition;
