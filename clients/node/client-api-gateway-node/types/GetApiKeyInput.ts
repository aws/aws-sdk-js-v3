import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A request to get information about the current <a>ApiKey</a> resource.</p>
 */
export interface GetApiKeyInput {
  /**
   * <p>[Required] The identifier of the <a>ApiKey</a> resource.</p>
   */
  apiKey: string;

  /**
   * <p>A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains the key value.</p>
   */
  includeValue?: boolean;

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
