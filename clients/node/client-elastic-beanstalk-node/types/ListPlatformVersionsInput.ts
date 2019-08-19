import { _PlatformFilter } from "./_PlatformFilter";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPlatformVersionsInput shape
 */
export interface ListPlatformVersionsInput {
  /**
   * <p>List only the platforms where the platform member value relates to one of the supplied values.</p>
   */
  Filters?: Array<_PlatformFilter> | Iterable<_PlatformFilter>;

  /**
   * <p>The maximum number of platform values returned in one call.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The starting index into the remaining list of platforms. Use the <code>NextToken</code> value from a previous <code>ListPlatformVersion</code> call.</p>
   */
  NextToken?: string;

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
