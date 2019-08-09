import {
  _AttributePayload,
  _UnmarshalledAttributePayload
} from "./_AttributePayload";

/**
 * <p>Thing group properties.</p>
 */
export interface _ThingGroupProperties {
  /**
   * <p>The thing group description.</p>
   */
  thingGroupDescription?: string;

  /**
   * <p>The thing group attributes in JSON format.</p>
   */
  attributePayload?: _AttributePayload;
}

export interface _UnmarshalledThingGroupProperties
  extends _ThingGroupProperties {
  /**
   * <p>The thing group attributes in JSON format.</p>
   */
  attributePayload?: _UnmarshalledAttributePayload;
}
