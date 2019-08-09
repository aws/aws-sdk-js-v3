/**
 * <p>The attribute payload.</p>
 */
export interface _AttributePayload {
  /**
   * <p>A JSON string containing up to three key-value pair in JSON format. For example:</p> <p> <code>{\"attributes\":{\"string1\":\"string2\"}}</code> </p>
   */
  attributes?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Specifies whether the list of attributes provided in the <code>AttributePayload</code> is merged with the attributes stored in the registry, instead of overwriting them.</p> <p>To remove an attribute, call <code>UpdateThing</code> with an empty attribute value.</p> <note> <p>The <code>merge</code> attribute is only valid when calling <code>UpdateThing</code>.</p> </note>
   */
  merge?: boolean;
}

export interface _UnmarshalledAttributePayload extends _AttributePayload {
  /**
   * <p>A JSON string containing up to three key-value pair in JSON format. For example:</p> <p> <code>{\"attributes\":{\"string1\":\"string2\"}}</code> </p>
   */
  attributes?: { [key: string]: string };
}
