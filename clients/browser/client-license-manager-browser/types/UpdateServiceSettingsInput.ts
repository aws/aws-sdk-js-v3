import { _OrganizationConfiguration } from "./_OrganizationConfiguration";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateServiceSettingsInput shape
 */
export interface UpdateServiceSettingsInput {
  /**
   * <p>ARN of the Amazon S3 bucket where License Manager information is stored.</p>
   */
  S3BucketArn?: string;

  /**
   * <p>ARN of the Amazon SNS topic used for License Manager alerts.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>Integrates AWS Organizations with License Manager for cross-account discovery.</p>
   */
  OrganizationConfiguration?: _OrganizationConfiguration;

  /**
   * <p>Activates cross-account discovery.</p>
   */
  EnableCrossAccountsDiscovery?: boolean;

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
