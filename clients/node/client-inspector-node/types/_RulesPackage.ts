/**
 * <p>Contains information about an Amazon Inspector rules package. This data type is used as the response element in the <a>DescribeRulesPackages</a> action.</p>
 */
export interface _RulesPackage {
  /**
   * <p>The ARN of the rules package.</p>
   */
  arn: string;

  /**
   * <p>The name of the rules package.</p>
   */
  name: string;

  /**
   * <p>The version ID of the rules package.</p>
   */
  version: string;

  /**
   * <p>The provider of the rules package.</p>
   */
  provider: string;

  /**
   * <p>The description of the rules package.</p>
   */
  description?: string;
}

export type _UnmarshalledRulesPackage = _RulesPackage;
