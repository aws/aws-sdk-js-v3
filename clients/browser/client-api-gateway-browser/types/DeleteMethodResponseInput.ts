import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A request to delete an existing <a>MethodResponse</a> resource.</p>
 */
export interface DeleteMethodResponseInput {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string;

  /**
   * <p>[Required] The <a>Resource</a> identifier for the <a>MethodResponse</a> resource.</p>
   */
  resourceId: string;

  /**
   * <p>[Required] The HTTP verb of the <a>Method</a> resource.</p>
   */
  httpMethod: string;

  /**
   * <p>[Required] The status code identifier for the <a>MethodResponse</a> resource.</p>
   */
  statusCode: string;

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
