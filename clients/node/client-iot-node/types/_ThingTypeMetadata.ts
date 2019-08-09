/**
 * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated.</p>
 */
export interface _ThingTypeMetadata {
  /**
   * <p>Whether the thing type is deprecated. If <b>true</b>, no new things could be associated with this type.</p>
   */
  deprecated?: boolean;

  /**
   * <p>The date and time when the thing type was deprecated.</p>
   */
  deprecationDate?: Date | string | number;

  /**
   * <p>The date and time when the thing type was created.</p>
   */
  creationDate?: Date | string | number;
}

export interface _UnmarshalledThingTypeMetadata extends _ThingTypeMetadata {
  /**
   * <p>The date and time when the thing type was deprecated.</p>
   */
  deprecationDate?: Date;

  /**
   * <p>The date and time when the thing type was created.</p>
   */
  creationDate?: Date;
}
