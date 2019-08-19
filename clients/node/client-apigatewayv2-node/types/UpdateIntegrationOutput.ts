import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateIntegrationOutput shape
 */
export interface UpdateIntegrationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The connection ID.</p>
   */
  ConnectionId?: string;

  /**
   * <p>The type of the network connection to the integration endpoint. Currently the only
   *  valid value is INTERNET, for connections through the public routable
   *  internet.</p>
   */
  ConnectionType?: "INTERNET" | "VPC_LINK" | string;

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
   * <p>Specifies the credentials required for the integration, if any. For AWS
   *  integrations, three options are available. To specify an IAM Role for API Gateway to
   *  assume, use the role's Amazon Resource Name (ARN). To require that the caller's
   *  identity be passed through from the request, specify the string
   *  arn:aws:iam::*:user/*. To use resource-based permissions on supported
   *  AWS services, specify null.</p>
   */
  CredentialsArn?: string;

  /**
   * <p>Represents the description of an integration.</p>
   */
  Description?: string;

  /**
   * <p>Represents the identifier of an integration.</p>
   */
  IntegrationId?: string;

  /**
   * <p>Specifies the integration's HTTP method type.</p>
   */
  IntegrationMethod?: string;

  /**
   * <p>The integration response selection expression for the integration. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions">Integration Response Selection Expressions</a>.</p>
   */
  IntegrationResponseSelectionExpression?: string;

  /**
   * <p>The integration type of an integration. One of the following:</p><p>
   *  AWS: for integrating the route or method request with an AWS service
   *  action, including the Lambda function-invoking action. With the Lambda
   *  function-invoking action, this is referred to as the Lambda custom integration. With
   *  any other AWS service action, this is known as AWS integration.</p><p>
   *  AWS_PROXY: for integrating the route or method request with the Lambda
   *  function-invoking action with the client request passed through as-is. This
   *  integration is also referred to as Lambda proxy integration.</p><p>
   *  HTTP: for integrating the route or method request with an HTTP
   *  endpoint. This
   *  integration is also referred to as the HTTP custom integration.</p><p>
   *  HTTP_PROXY: for integrating route or method request with an HTTP
   *  endpoint, with the client
   *  request passed through as-is. This is also referred to as HTTP proxy
   *  integration.</p><p>
   *  MOCK: for integrating the route or method request with API Gateway as a
   *  "loopback" endpoint without invoking any backend.</p>
   */
  IntegrationType?:
    | "AWS"
    | "HTTP"
    | "MOCK"
    | "HTTP_PROXY"
    | "AWS_PROXY"
    | string;

  /**
   * <p>For a Lambda proxy integration, this is the URI of the Lambda function.</p>
   */
  IntegrationUri?: string;

  /**
   * <p>Specifies the pass-through behavior for incoming requests based on the
   *  Content-Type header in the request, and the available mapping
   *  templates specified as the requestTemplates property on the
   *  Integration resource. There are three valid values:
   *  WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and
   *  NEVER.</p><p>
   *  WHEN_NO_MATCH passes the request body for unmapped content types through
   *  to the integration backend without transformation.</p><p>
   *  NEVER rejects unmapped content types with an HTTP 415 Unsupported
   *  Media Type response.</p><p>
   *  WHEN_NO_TEMPLATES allows pass-through when the integration has no
   *  content types mapped to templates. However, if there is at least one content type
   *  defined, unmapped content types will be rejected with the same HTTP 415
   *  Unsupported Media Type response.</p>
   */
  PassthroughBehavior?:
    | "WHEN_NO_MATCH"
    | "NEVER"
    | "WHEN_NO_TEMPLATES"
    | string;

  /**
   * <p>A key-value map specifying request parameters that are passed from the method
   *  request to the backend. The key is an integration request parameter name and the
   *  associated value is a method request parameter value or static value that must be
   *  enclosed within single quotes and pre-encoded as required by the backend. The method
   *  request parameter value must match the pattern of
   *  method.request.{location}.{name}
   *  , where
   *  {location}
   *   is querystring, path, or header; and
   *  {name}
   *   must be a valid and unique method request parameter name.</p>
   */
  RequestParameters?: { [key: string]: string };

  /**
   * <p>Represents a map of Velocity templates that are applied on the request payload
   *  based on the value of the Content-Type header sent by the client. The content type
   *  value is the key in this map, and the template (as a String) is the value.</p>
   */
  RequestTemplates?: { [key: string]: string };

  /**
   * <p>The template selection expression for the integration.</p>
   */
  TemplateSelectionExpression?: string;

  /**
   * <p>Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000
   *  milliseconds or 29 seconds.</p>
   */
  TimeoutInMillis?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
