import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateApiInput shape
 */
export interface CreateApiInput {
  /**
   * <p>An API key selection expression. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">API Key Selection Expressions</a>.</p>
   */
  ApiKeySelectionExpression?: string;

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
  Name: string;

  /**
   * <p>The API protocol: Currently only WEBSOCKET is supported.</p>
   */
  ProtocolType: "WEBSOCKET" | string;

  /**
   * <p>The route selection expression for the API.</p>
   */
  RouteSelectionExpression: string;

  /**
   * <p>A version identifier for the API.</p>
   */
  Version?: string;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..</p>
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

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
