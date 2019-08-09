/**
 * <p>Specifies a key-value pair for a resource tag.</p>
 */
export interface _Tag {
  /**
   * <p>A value that specifies the <code>TagKey</code>, the name of the tag. Tag keys must be unique for the resource to which they are attached.</p>
   */
  Key?: string;

  /**
   * <p>A value that specifies the <code>TagValue</code>, the value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of <code>finances : April</code> and also of <code>payroll : April</code>.</p>
   */
  Value?: string;
}

export type _UnmarshalledTag = _Tag;
