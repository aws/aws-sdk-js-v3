/**
 * <p>Defines which resources trigger an evaluation for an AWS Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration.</p>
 */
export interface _Scope {
  /**
   * <p>The resource types of only those AWS resources that you want to trigger an evaluation for the rule. You can only specify one type if you also specify a resource ID for <code>ComplianceResourceId</code>.</p>
   */
  ComplianceResourceTypes?: Array<string> | Iterable<string>;

  /**
   * <p>The tag key that is applied to only those AWS resources that you want to trigger an evaluation for the rule.</p>
   */
  TagKey?: string;

  /**
   * <p>The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule. If you specify a value for <code>TagValue</code>, you must also specify a value for <code>TagKey</code>.</p>
   */
  TagValue?: string;

  /**
   * <p>The ID of the only AWS resource that you want to trigger an evaluation for the rule. If you specify a resource ID, you must specify one resource type for <code>ComplianceResourceTypes</code>.</p>
   */
  ComplianceResourceId?: string;
}

export interface _UnmarshalledScope extends _Scope {
  /**
   * <p>The resource types of only those AWS resources that you want to trigger an evaluation for the rule. You can only specify one type if you also specify a resource ID for <code>ComplianceResourceId</code>.</p>
   */
  ComplianceResourceTypes?: Array<string>;
}
