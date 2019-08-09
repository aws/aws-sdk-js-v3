/**
 * <p>An activity that removes attributes from a message.</p>
 */
export interface _RemoveAttributesActivity {
  /**
   * <p>The name of the 'removeAttributes' activity.</p>
   */
  name: string;

  /**
   * <p>A list of 1-50 attributes to remove from the message.</p>
   */
  attributes: Array<string> | Iterable<string>;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export interface _UnmarshalledRemoveAttributesActivity
  extends _RemoveAttributesActivity {
  /**
   * <p>A list of 1-50 attributes to remove from the message.</p>
   */
  attributes: Array<string>;
}
