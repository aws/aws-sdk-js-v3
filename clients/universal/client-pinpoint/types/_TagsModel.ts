/**
 * <p>Specifies the tags (keys and values) for an application, campaign, or segment.</p>
 */
export interface _TagsModel {
  /**
   * <p>A string-to-string map of key-value pairs that defines the tags for an application, campaign, or segment. A project, campaign, or segment can have a maximum of 50 tags.</p> <p>Each tag consists of a required tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledTagsModel extends _TagsModel {
  /**
   * <p>A string-to-string map of key-value pairs that defines the tags for an application, campaign, or segment. A project, campaign, or segment can have a maximum of 50 tags.</p> <p>Each tag consists of a required tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags: { [key: string]: string };
}
