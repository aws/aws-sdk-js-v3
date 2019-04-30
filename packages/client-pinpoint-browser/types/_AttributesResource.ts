/**
 * Attributes.
 */
export interface _AttributesResource {
  /**
   * The unique ID for the application.
   */
  ApplicationId?: string;

  /**
   * The attribute type for the application.
   */
  AttributeType?: string;

  /**
   * The attributes for the application.
   */
  Attributes?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledAttributesResource extends _AttributesResource {
  /**
   * The attributes for the application.
   */
  Attributes?: Array<string>;
}
