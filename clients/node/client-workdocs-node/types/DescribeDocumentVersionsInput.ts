import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDocumentVersionsInput shape
 */
export interface DescribeDocumentVersionsInput {
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the document.</p>
   */
  DocumentId: string;

  /**
   * <p>The marker for the next set of results. (You received this marker from a previous call.)</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of versions to return with this call.</p>
   */
  Limit?: number;

  /**
   * <p>A comma-separated list of values. Specify "INITIALIZED" to include incomplete versions.</p>
   */
  Include?: string;

  /**
   * <p>Specify "SOURCE" to include initialized versions and a URL for the source document.</p>
   */
  Fields?: string;

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
