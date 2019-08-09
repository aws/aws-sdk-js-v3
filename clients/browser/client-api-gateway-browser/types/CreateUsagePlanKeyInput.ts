import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The POST request to create a usage plan key for adding an existing API key to a usage plan.</p>
 */
export interface CreateUsagePlanKeyInput {
  /**
   * <p>[Required] The Id of the <a>UsagePlan</a> resource representing the usage plan containing the to-be-created <a>UsagePlanKey</a> resource representing a plan customer.</p>
   */
  usagePlanId: string;

  /**
   * <p>[Required] The identifier of a <a>UsagePlanKey</a> resource for a plan customer.</p>
   */
  keyId: string;

  /**
   * <p>[Required] The type of a <a>UsagePlanKey</a> resource for a plan customer.</p>
   */
  keyType: string;

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
