/**
 * <p>The properties of the thing, including thing name, thing type name, and a list of thing attributes.</p>
 */
export interface _ThingAttribute {
  /**
   * <p>The name of the thing.</p>
   */
  thingName?: string;

  /**
   * <p>The name of the thing type, if the thing has been associated with a type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The thing ARN.</p>
   */
  thingArn?: string;

  /**
   * <p>A list of thing attributes which are name-value pairs.</p>
   */
  attributes?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The version of the thing record in the registry.</p>
   */
  version?: number;
}

export interface _UnmarshalledThingAttribute extends _ThingAttribute {
  /**
   * <p>A list of thing attributes which are name-value pairs.</p>
   */
  attributes?: { [key: string]: string };
}
