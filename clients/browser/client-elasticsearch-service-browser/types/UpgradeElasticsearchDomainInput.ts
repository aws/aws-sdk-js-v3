import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Container for request parameters to <code> <a>UpgradeElasticsearchDomain</a> </code> operation. </p>
 */
export interface UpgradeElasticsearchDomainInput {
  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string;

  /**
   * <p>The version of Elasticsearch that you intend to upgrade the domain to.</p>
   */
  TargetVersion: string;

  /**
   * <p> This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed. This will not actually perform the Upgrade. </p>
   */
  PerformCheckOnly?: boolean;

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
