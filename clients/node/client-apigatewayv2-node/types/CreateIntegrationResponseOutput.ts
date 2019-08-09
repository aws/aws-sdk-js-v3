import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateIntegrationResponseOutput shape
 */
export interface CreateIntegrationResponseOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies how to handle response payload content type conversions. Supported
   *  values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the
   *  following behaviors:</p><p>
   *  CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded
   *  string to the corresponding binary blob.</p><p>
   *  CONVERT_TO_TEXT: Converts a response payload from a binary blob to a
   *  Base64-encoded string.</p><p>If this property is not defined, the response payload will be passed through from
   *  the integration response to the route response or method response without
   *  modification.</p>
   */
  ContentHandlingStrategy?: "CONVERT_TO_BINARY" | "CONVERT_TO_TEXT" | string;

  /**
   * <p>The integration response ID.</p>
   */
  IntegrationResponseId?: string;

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey?: string;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method
   *  response from the backend. The key is a method response header parameter name and the
   *  mapped value is an integration response header value, a static value enclosed within
   *  a pair of single quotes, or a JSON expression from the integration response body. The
   *  mapping key must match the pattern of method.response.header.{name}, where name is a
   *  valid and unique header name. The mapped non-static value must match the pattern of
   *  integration.response.header.{name} or integration.response.body.{JSON-expression},
   *  where name is a valid and unique response header name and JSON-expression is a valid
   *  JSON expression without the $ prefix.</p>
   */
  ResponseParameters?: { [key: string]: string };

  /**
   * <p>The collection of response templates for the integration response as a
   *  string-to-string map of key-value pairs. Response templates are represented as a
   *  key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: { [key: string]: string };

  /**
   * <p>The template selection expressions for the integration response.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
