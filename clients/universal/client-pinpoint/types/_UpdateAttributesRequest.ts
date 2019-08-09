/**
 * <p>Specifies one or more attributes to remove from all the endpoints that are associated with an application.</p>
 */
export interface _UpdateAttributesRequest {
  /**
   * <p>An array of the attributes to remove from all the endpoints that are associated with the application. The array can specify the complete, exact name of each attribute to remove or it can specify a glob pattern that an attribute name must match in order for the attribute to be removed.</p>
   */
  Blacklist?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledUpdateAttributesRequest
  extends _UpdateAttributesRequest {
  /**
   * <p>An array of the attributes to remove from all the endpoints that are associated with the application. The array can specify the complete, exact name of each attribute to remove or it can specify a glob pattern that an attribute name must match in order for the attribute to be removed.</p>
   */
  Blacklist?: Array<string>;
}
