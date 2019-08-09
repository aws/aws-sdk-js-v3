/**
 * <p>The resource tags that AWS Firewall Manager uses to determine if a particular resource should be included or excluded from protection by the AWS Firewall Manager policy. Tags enable you to categorize your AWS resources in different ways, for example, by purpose, owner, or environment. Each tag consists of a key and an optional value, both of which you define. Tags are combined with an "OR." That is, if you add more than one tag, if any of the tags matches, the resource is considered a match for the include or exclude. <a href="https://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/tag-editor.html">Working with Tag Editor</a>.</p>
 */
export interface _ResourceTag {
  /**
   * <p>The resource tag key.</p>
   */
  Key: string;

  /**
   * <p>The resource tag value.</p>
   */
  Value?: string;
}

export type _UnmarshalledResourceTag = _ResourceTag;
