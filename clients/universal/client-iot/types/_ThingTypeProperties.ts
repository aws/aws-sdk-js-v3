/**
 * <p>The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names.</p>
 */
export interface _ThingTypeProperties {
  /**
   * <p>The description of the thing type.</p>
   */
  thingTypeDescription?: string;

  /**
   * <p>A list of searchable thing attribute names.</p>
   */
  searchableAttributes?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledThingTypeProperties extends _ThingTypeProperties {
  /**
   * <p>A list of searchable thing attribute names.</p>
   */
  searchableAttributes?: Array<string>;
}
