/**
 * <p>Specifies a key value pair for a resource tag.</p>
 */
export interface _Tag {
  /**
   * <p>Specifies the <code>TagKey</code>, the name of the tag. Tag keys must be unique for the Elasticsearch domain to which they are attached.</p>
   */
  Key: string;

  /**
   * <p>Specifies the <code>TagValue</code>, the value assigned to the corresponding tag key. Tag values can be null and do not have to be unique in a tag set. For example, you can have a key value pair in a tag set of <code>project : Trinity</code> and <code>cost-center : Trinity</code></p>
   */
  Value: string;
}

export type _UnmarshalledTag = _Tag;
