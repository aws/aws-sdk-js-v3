import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateIntegrationResponseInput shape
 */
export interface CreateIntegrationResponseInput {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string;

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
   * <p>The integration ID.</p>
   */
  IntegrationId: string;

  /**
   * <p>The integration response key.</p>
   */
  IntegrationResponseKey: string;

  /**
   * <p>A key-value map specifying response parameters that are passed to the method
   *  response from the backend. The key is a method response header parameter name and the
   *  mapped value is an integration response header value, a static value enclosed within
   *  a pair of single quotes, or a JSON expression from the integration response body. The
   *  mapping key must match the pattern of method.response.header.{name},
   *  where {name} is a valid and unique header name. The mapped non-static
   *  value must match the pattern of integration.response.header.{name} or
   *  integration.response.body.{JSON-expression}, where
   *  {name} is a valid and unique response header name and
   *  {JSON-expression} is a valid JSON expression without the $
   *  prefix.</p>
   */
  ResponseParameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The collection of response templates for the integration response as a
   *  string-to-string map of key-value pairs. Response templates are represented as a
   *  key/value map, with a content-type as the key and a template as the value.</p>
   */
  ResponseTemplates?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The template selection expression for the integration response.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
