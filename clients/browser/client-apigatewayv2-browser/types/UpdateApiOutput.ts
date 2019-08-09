import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateApiOutput shape
 */
export interface UpdateApiOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The
   *  stage name is typically appended to this URI to form a complete path to a deployed
   *  API stage.</p>
   */
  ApiEndpoint?: string;

  /**
   * <p>The API ID.</p>
   */
  ApiId?: string;

  /**
   * <p>An API key selection expression. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

  /**
   * <p>The timestamp when the API was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The description of the API.</p>
   */
  Description?: string;

  /**
   * <p>Avoid validating models when creating a deployment.</p>
   */
  DisableSchemaValidation?: boolean;

  /**
   * <p>The name of the API.</p>
   */
  Name?: string;

  /**
   * <p>The API protocol: Currently only WEBSOCKET is supported.</p>
   */
  ProtocolType?: "WEBSOCKET" | string;

  /**
   * <p>The route selection expression for the API.</p>
   */
  RouteSelectionExpression?: string;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The warning messages reported when failonwarnings is turned on during
   *  API import.</p>
   */
  Warnings?: Array<string>;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..</p>
   */
  Tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
