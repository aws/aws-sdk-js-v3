/**
 * <p>An activity that adds other attributes based on existing attributes in the message.</p>
 */
export interface _AddAttributesActivity {
  /**
   * <p>The name of the 'addAttributes' activity.</p>
   */
  name: string;

  /**
   * <p>A list of 1-50 "AttributeNameMapping" objects that map an existing attribute to a new attribute.</p> <note> <p>The existing attributes remain in the message, so if you want to remove the originals, use "RemoveAttributeActivity".</p> </note>
   */
  attributes: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export interface _UnmarshalledAddAttributesActivity
  extends _AddAttributesActivity {
  /**
   * <p>A list of 1-50 "AttributeNameMapping" objects that map an existing attribute to a new attribute.</p> <note> <p>The existing attributes remain in the message, so if you want to remove the originals, use "RemoveAttributeActivity".</p> </note>
   */
  attributes: { [key: string]: string };
}
