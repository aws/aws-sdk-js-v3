import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListResourceDelegatesInput shape
 */
export interface ListResourceDelegatesInput {
  /**
   * <p>The identifier for the organization that contains the resource for which delegates are listed.</p>
   */
  OrganizationId: string;

  /**
   * <p>The identifier for the resource whose delegates are listed.</p>
   */
  ResourceId: string;

  /**
   * <p>The token used to paginate through the delegates associated with a resource.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of maximum results in a page.</p>
   */
  MaxResults?: number;

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
