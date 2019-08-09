import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListHITsForQualificationTypeInput shape
 */
export interface ListHITsForQualificationTypeInput {
  /**
   * <p> The ID of the Qualification type to use when querying HITs. </p>
   */
  QualificationTypeId: string;

  /**
   * <p>Pagination Token</p>
   */
  NextToken?: string;

  /**
   * <p> Limit the number of results returned. </p>
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
