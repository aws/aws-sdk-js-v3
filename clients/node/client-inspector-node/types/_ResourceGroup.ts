import {
  _ResourceGroupTag,
  _UnmarshalledResourceGroupTag
} from "./_ResourceGroupTag";

/**
 * <p>Contains information about a resource group. The resource group defines a set of tags that, when queried, identify the AWS resources that make up the assessment target. This data type is used as the response element in the <a>DescribeResourceGroups</a> action.</p>
 */
export interface _ResourceGroup {
  /**
   * <p>The ARN of the resource group.</p>
   */
  arn: string;

  /**
   * <p>The tags (key and value pairs) of the resource group. This data type property is used in the <a>CreateResourceGroup</a> action.</p>
   */
  tags: Array<_ResourceGroupTag> | Iterable<_ResourceGroupTag>;

  /**
   * <p>The time at which resource group is created.</p>
   */
  createdAt: Date | string | number;
}

export interface _UnmarshalledResourceGroup extends _ResourceGroup {
  /**
   * <p>The tags (key and value pairs) of the resource group. This data type property is used in the <a>CreateResourceGroup</a> action.</p>
   */
  tags: Array<_UnmarshalledResourceGroupTag>;

  /**
   * <p>The time at which resource group is created.</p>
   */
  createdAt: Date;
}
