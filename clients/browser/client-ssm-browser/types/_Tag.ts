/**
 * <p>Metadata that you assign to your AWS resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. In Systems Manager, you can apply tags to documents, managed instances, maintenance windows, Parameter Store parameters, and patch baselines.</p>
 */
export interface _Tag {
  /**
   * <p>The name of the tag.</p>
   */
  Key: string;

  /**
   * <p>The value of the tag.</p>
   */
  Value: string;
}

export type _UnmarshalledTag = _Tag;
