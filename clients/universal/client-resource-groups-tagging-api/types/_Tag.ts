/**
 * <p>The metadata that you apply to AWS resources to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#tag-basics">Tag Basics</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 */
export interface _Tag {
  /**
   * <p>One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.</p>
   */
  Key: string;

  /**
   * <p>The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).</p>
   */
  Value: string;
}

export type _UnmarshalledTag = _Tag;
