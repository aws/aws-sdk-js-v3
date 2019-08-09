import { _Tag } from "./_Tag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateLicenseConfigurationInput shape
 */
export interface CreateLicenseConfigurationInput {
  /**
   * <p>Name of the license configuration.</p>
   */
  Name: string;

  /**
   * <p>Human-friendly description of the license configuration.</p>
   */
  Description?: string;

  /**
   * <p>Dimension to use to track the license inventory.</p>
   */
  LicenseCountingType: "vCPU" | "Instance" | "Core" | "Socket" | string;

  /**
   * <p>Number of licenses managed by the license configuration.</p>
   */
  LicenseCount?: number;

  /**
   * <p>Flag indicating whether hard or soft license enforcement is used. Exceeding a hard limit results in the blocked deployment of new instances.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * <p>Array of configured License Manager rules.</p>
   */
  LicenseRules?: Array<string> | Iterable<string>;

  /**
   * <p>The tags to apply to the resources during launch. You can only tag instances and volumes on launch. The specified tags are applied to all instances or volumes that are created during launch. To tag a resource after it has been created, see CreateTags .</p> <p/>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

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
