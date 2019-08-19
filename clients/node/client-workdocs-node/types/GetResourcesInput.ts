import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetResourcesInput shape
 */
export interface GetResourcesInput {
  /**
   * <p>The Amazon WorkDocs authentication token. Do not set this field when using administrative API actions, as in accessing the API operation using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The user ID for the resource collection. This is a required field for accessing the API operation using IAM credentials.</p>
   */
  UserId?: string;

  /**
   * <p>The collection type.</p>
   */
  CollectionType?: "SHARED_WITH_ME" | string;

  /**
   * <p>The maximum number of resources to return.</p>
   */
  Limit?: number;

  /**
   * <p>The marker for the next set of results. This marker was received from a previous call.</p>
   */
  Marker?: string;

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
