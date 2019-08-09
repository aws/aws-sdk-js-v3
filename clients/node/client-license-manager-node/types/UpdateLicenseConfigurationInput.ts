import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateLicenseConfigurationInput shape
 */
export interface UpdateLicenseConfigurationInput {
  /**
   * <p>ARN for a license configuration.</p>
   */
  LicenseConfigurationArn: string;

  /**
   * <p>New status of the license configuration (<code>ACTIVE</code> or <code>INACTIVE</code>).</p>
   */
  LicenseConfigurationStatus?: "AVAILABLE" | "DISABLED" | string;

  /**
   * <p>List of flexible text strings designating license rules.</p>
   */
  LicenseRules?: Array<string> | Iterable<string>;

  /**
   * <p>New number of licenses managed by the license configuration.</p>
   */
  LicenseCount?: number;

  /**
   * <p>Sets the number of available licenses as a hard limit.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * <p>New name of the license configuration.</p>
   */
  Name?: string;

  /**
   * <p>New human-friendly description of the license configuration.</p>
   */
  Description?: string;

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
