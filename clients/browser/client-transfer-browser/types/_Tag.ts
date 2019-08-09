/**
 * <p>Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to servers, users, and roles. A tag key can take more than one value. For example, to group servers for accounting purposes, you might create a tag called <code>Group</code> and assign the values <code>Research</code> and <code>Accounting</code> to that group.</p>
 */
export interface _Tag {
  /**
   * <p>The name assigned to the tag that you create.</p>
   */
  Key: string;

  /**
   * <p>This property contains one or more values that you assigned to the key name you create.</p>
   */
  Value: string;
}

export type _UnmarshalledTag = _Tag;
