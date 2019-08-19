/**
 * The Amazon Resource Name (ARN) and tags for an AWS Elemental MediaConvert resource.
 */
export interface _ResourceTags {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   */
  Arn?: string;

  /**
   * The tags for the resource.
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledResourceTags extends _ResourceTags {
  /**
   * The tags for the resource.
   */
  Tags?: { [key: string]: string };
}
