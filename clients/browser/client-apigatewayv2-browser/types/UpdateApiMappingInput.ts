import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateApiMappingInput shape
 */
export interface UpdateApiMappingInput {
  /**
   * <p>The API identifier.</p>
   */
  ApiId: string;

  /**
   * <p>The API mapping identifier.</p>
   */
  ApiMappingId: string;

  /**
   * <p>The API mapping key.</p>
   */
  ApiMappingKey?: string;

  /**
   * <p>The domain name.</p>
   */
  DomainName: string;

  /**
   * <p>The API stage.</p>
   */
  Stage?: string;

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
