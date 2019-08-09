/**
 * <p>A JSON string that you can use to limit the event bus permissions that you're granting to only accounts that fulfill the condition. Currently, the only supported condition is membership in a certain AWS organization. The string must contain <code>Type</code>, <code>Key</code>, and <code>Value</code> fields. The <code>Value</code> field specifies the ID of the AWS organization. The following is an example value for <code>Condition</code>:</p> <p> <code>'{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value": "o-1234567890"}'</code> </p>
 */
export interface _Condition {
  /**
   * <p>The type of condition. Currently, the only supported value is <code>StringEquals</code>.</p>
   */
  Type: string;

  /**
   * <p>The key for the condition. Currently, the only supported key is <code>aws:PrincipalOrgID</code>.</p>
   */
  Key: string;

  /**
   * <p>The value for the key. Currently, this must be the ID of the organization.</p>
   */
  Value: string;
}

export type _UnmarshalledCondition = _Condition;
