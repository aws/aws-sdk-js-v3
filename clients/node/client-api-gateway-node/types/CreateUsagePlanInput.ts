import { _ApiStage } from "./_ApiStage";
import { _ThrottleSettings } from "./_ThrottleSettings";
import { _QuotaSettings } from "./_QuotaSettings";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The POST request to create a usage plan with the name, description, throttle limits and quota limits, as well as the associated API stages, specified in the payload.</p>
 */
export interface CreateUsagePlanInput {
  /**
   * <p>[Required] The name of the usage plan.</p>
   */
  name: string;

  /**
   * <p>The description of the usage plan.</p>
   */
  description?: string;

  /**
   * <p>The associated API stages of the usage plan.</p>
   */
  apiStages?: Array<_ApiStage> | Iterable<_ApiStage>;

  /**
   * <p>The throttling limits of the usage plan.</p>
   */
  throttle?: _ThrottleSettings;

  /**
   * <p>The quota of the usage plan.</p>
   */
  quota?: _QuotaSettings;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

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
