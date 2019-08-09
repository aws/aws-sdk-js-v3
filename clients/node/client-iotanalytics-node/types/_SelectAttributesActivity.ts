/**
 * <p>Creates a new message using only the specified attributes from the original message.</p>
 */
export interface _SelectAttributesActivity {
  /**
   * <p>The name of the 'selectAttributes' activity.</p>
   */
  name: string;

  /**
   * <p>A list of the attributes to select from the message.</p>
   */
  attributes: Array<string> | Iterable<string>;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export interface _UnmarshalledSelectAttributesActivity
  extends _SelectAttributesActivity {
  /**
   * <p>A list of the attributes to select from the message.</p>
   */
  attributes: Array<string>;
}
