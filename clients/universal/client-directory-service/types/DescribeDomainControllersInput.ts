import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDomainControllersInput shape
 */
export interface DescribeDomainControllersInput {
  /**
   * <p>Identifier of the directory for which to retrieve the domain controller information.</p>
   */
  DirectoryId: string;

  /**
   * <p>A list of identifiers for the domain controllers whose information will be provided.</p>
   */
  DomainControllerIds?: Array<string> | Iterable<string>;

  /**
   * <p>The <i>DescribeDomainControllers.NextToken</i> value from a previous call to <a>DescribeDomainControllers</a>. Pass null if this is the first call. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;

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
