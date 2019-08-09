/**
 * <p>Specifies the target API entity to which the documentation applies.</p>
 */
export interface _DocumentationPartLocation {
  /**
   * <p>[Required] The type of API entity to which the documentation content applies. Valid values are <code>API</code>, <code>AUTHORIZER</code>, <code>MODEL</code>, <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. Content inheritance does not apply to any entity of the <code>API</code>, <code>AUTHORIZER</code>, <code>METHOD</code>, <code>MODEL</code>, <code>REQUEST_BODY</code>, or <code>RESOURCE</code> type.</p>
   */
  type:
    | "API"
    | "AUTHORIZER"
    | "MODEL"
    | "RESOURCE"
    | "METHOD"
    | "PATH_PARAMETER"
    | "QUERY_PARAMETER"
    | "REQUEST_HEADER"
    | "REQUEST_BODY"
    | "RESPONSE"
    | "RESPONSE_HEADER"
    | "RESPONSE_BODY"
    | string;

  /**
   * <p>The URL path of the target. It is a valid field for the API entity types of <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>/</code> for the root resource. When an applicable child entity inherits the content of another entity of the same type with more general specifications of the other <code>location</code> attributes, the child entity's <code>path</code> attribute must match that of the parent entity as a prefix.</p>
   */
  path?: string;

  /**
   * <p>The HTTP verb of a method. It is a valid field for the API entity types of <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>*</code> for any method. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other <code>location</code> attributes, the child entity's <code>method</code> attribute must match that of the parent entity exactly.</p>
   */
  method?: string;

  /**
   * <p>The HTTP status code of a response. It is a valid field for the API entity types of <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. The default value is <code>*</code> for any status code. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other <code>location</code> attributes, the child entity's <code>statusCode</code> attribute must match that of the parent entity exactly.</p>
   */
  statusCode?: string;

  /**
   * <p>The name of the targeted API entity. It is a valid and required field for the API entity types of <code>AUTHORIZER</code>, <code>MODEL</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code> and <code>RESPONSE_HEADER</code>. It is an invalid field for any other entity type.</p>
   */
  name?: string;
}

export type _UnmarshalledDocumentationPartLocation = _DocumentationPartLocation;
