/**
 * <p>The Tag type enables you to specify a key-value pair that can be used to store information about an AWS CloudFormation stack.</p>
 */
export interface _Tag {
  /**
   * <p> <i>Required</i>. A string used to identify this tag. You can specify a maximum of 128 characters for a tag key. Tags owned by Amazon Web Services (AWS) have the reserved prefix: <code>aws:</code>.</p>
   */
  Key: string;

  /**
   * <p> <i>Required</i>. A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.</p>
   */
  Value: string;
}

export type _UnmarshalledTag = _Tag;
