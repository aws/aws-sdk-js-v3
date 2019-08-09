import {
  _ThingTypeProperties,
  _UnmarshalledThingTypeProperties
} from "./_ThingTypeProperties";
import {
  _ThingTypeMetadata,
  _UnmarshalledThingTypeMetadata
} from "./_ThingTypeMetadata";

/**
 * <p>The definition of the thing type, including thing type name and description.</p>
 */
export interface _ThingTypeDefinition {
  /**
   * <p>The name of the thing type.</p>
   */
  thingTypeName?: string;

  /**
   * <p>The thing type ARN.</p>
   */
  thingTypeArn?: string;

  /**
   * <p>The ThingTypeProperties for the thing type.</p>
   */
  thingTypeProperties?: _ThingTypeProperties;

  /**
   * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when it was deprecated.</p>
   */
  thingTypeMetadata?: _ThingTypeMetadata;
}

export interface _UnmarshalledThingTypeDefinition extends _ThingTypeDefinition {
  /**
   * <p>The ThingTypeProperties for the thing type.</p>
   */
  thingTypeProperties?: _UnmarshalledThingTypeProperties;

  /**
   * <p>The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when it was deprecated.</p>
   */
  thingTypeMetadata?: _UnmarshalledThingTypeMetadata;
}
