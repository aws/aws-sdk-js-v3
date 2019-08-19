import { _StandardsSubscriptionRequest } from "./_StandardsSubscriptionRequest";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchEnableStandardsInput shape
 */
export interface BatchEnableStandardsInput {
  /**
   * <p>The list of standards compliance checks to enable.</p> <important> <p>In this release, Security Hub supports only the CIS AWS Foundations standard.</p> <p>The ARN for the standard is <code>arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0</code>.</p> </important>
   */
  StandardsSubscriptionRequests:
    | Array<_StandardsSubscriptionRequest>
    | Iterable<_StandardsSubscriptionRequest>;

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
