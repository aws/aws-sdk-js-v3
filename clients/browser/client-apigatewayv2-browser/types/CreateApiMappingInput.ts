import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateApiMappingInput shape
 */
export interface CreateApiMappingInput {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string;

  /**
   * <p>After evaulating a selection expression, the result is compared against one or
   *  more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's
   *  associated selection key type.</p>
   */
  ApiMappingKey?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName: string;

  /**
   * <p>The API stage.</p>
   */
  Stage: string;

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
