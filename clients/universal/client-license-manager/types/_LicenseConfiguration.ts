import {
  _ConsumedLicenseSummary,
  _UnmarshalledConsumedLicenseSummary
} from "./_ConsumedLicenseSummary";
import {
  _ManagedResourceSummary,
  _UnmarshalledManagedResourceSummary
} from "./_ManagedResourceSummary";

/**
 * <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or VCPU), tenancy (shared tenancy, Amazon EC2 Dedicated Instance, Amazon EC2 Dedicated Host, or any of these), host affinity (how long a VM must be associated with a host), the number of licenses purchased and used.</p>
 */
export interface _LicenseConfiguration {
  /**
   * <p>Unique ID of the <code>LicenseConfiguration</code> object.</p>
   */
  LicenseConfigurationId?: string;

  /**
   * <p>ARN of the <code>LicenseConfiguration</code> object.</p>
   */
  LicenseConfigurationArn?: string;

  /**
   * <p>Name of the license configuration.</p>
   */
  Name?: string;

  /**
   * <p>Description of the license configuration.</p>
   */
  Description?: string;

  /**
   * <p>Dimension to use to track license inventory.</p>
   */
  LicenseCountingType?: "vCPU" | "Instance" | "Core" | "Socket" | string;

  /**
   * <p>Array of configured License Manager rules.</p>
   */
  LicenseRules?: Array<string> | Iterable<string>;

  /**
   * <p>Number of licenses managed by the license configuration.</p>
   */
  LicenseCount?: number;

  /**
   * <p>Sets the number of available licenses as a hard limit.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * <p>Number of licenses consumed. </p>
   */
  ConsumedLicenses?: number;

  /**
   * <p>Status of the license configuration.</p>
   */
  Status?: string;

  /**
   * <p>Account ID of the license configuration's owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>List of summaries for licenses consumed by various resources.</p>
   */
  ConsumedLicenseSummaryList?:
    | Array<_ConsumedLicenseSummary>
    | Iterable<_ConsumedLicenseSummary>;

  /**
   * <p>List of summaries for managed resources.</p>
   */
  ManagedResourceSummaryList?:
    | Array<_ManagedResourceSummary>
    | Iterable<_ManagedResourceSummary>;
}

export interface _UnmarshalledLicenseConfiguration
  extends _LicenseConfiguration {
  /**
   * <p>Array of configured License Manager rules.</p>
   */
  LicenseRules?: Array<string>;

  /**
   * <p>List of summaries for licenses consumed by various resources.</p>
   */
  ConsumedLicenseSummaryList?: Array<_UnmarshalledConsumedLicenseSummary>;

  /**
   * <p>List of summaries for managed resources.</p>
   */
  ManagedResourceSummaryList?: Array<_UnmarshalledManagedResourceSummary>;
}
