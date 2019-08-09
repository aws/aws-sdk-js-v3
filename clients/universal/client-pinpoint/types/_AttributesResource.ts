/**
 * <p>Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.</p>
 */
export interface _AttributesResource {
  /**
   * <p>The unique identifier for the application.</p>
   */
  ApplicationId: string;

  /**
   * <p>The type of attribute or attributes that were removed from the endpoints. Valid values are:</p> <ul><li><p>endpoint-custom-attributes - Custom attributes that describe endpoints</p></li> <li><p>endpoint-custom-metrics - Custom metrics that your app reports to Amazon Pinpoint for endpoints</p></li> <li><p>endpoint-user-attributes - Custom attributes that describe users</p></li></ul>
   */
  AttributeType: string;

  /**
   * <p>An array that specifies the names of the attributes that were removed from the endpoints.</p>
   */
  Attributes?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledAttributesResource extends _AttributesResource {
  /**
   * <p>An array that specifies the names of the attributes that were removed from the endpoints.</p>
   */
  Attributes?: Array<string>;
}
