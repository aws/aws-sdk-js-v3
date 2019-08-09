import { _UnmarshalledConsumedLicenseSummary } from "./_ConsumedLicenseSummary";
import { _UnmarshalledManagedResourceSummary } from "./_ManagedResourceSummary";
import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLicenseConfigurationOutput shape
 */
export interface GetLicenseConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Unique ID for the license configuration.</p>
   */
  LicenseConfigurationId?: string;

  /**
   * <p>ARN of the license configuration requested.</p>
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
   * <p>Dimension on which the licenses are counted (for example, instances, cores, sockets, or VCPUs).</p>
   */
  LicenseCountingType?: "vCPU" | "Instance" | "Core" | "Socket" | string;

  /**
   * <p>List of flexible text strings designating license rules.</p>
   */
  LicenseRules?: Array<string>;

  /**
   * <p>Number of available licenses.</p>
   */
  LicenseCount?: number;

  /**
   * <p>Sets the number of available licenses as a hard limit.</p>
   */
  LicenseCountHardLimit?: boolean;

  /**
   * <p>Number of licenses assigned to resources.</p>
   */
  ConsumedLicenses?: number;

  /**
   * <p>License configuration status (active, etc.).</p>
   */
  Status?: string;

  /**
   * <p>Owner account ID for the license configuration.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>List of summaries for consumed licenses used by various resources.</p>
   */
  ConsumedLicenseSummaryList?: Array<_UnmarshalledConsumedLicenseSummary>;

  /**
   * <p>List of summaries of managed resources.</p>
   */
  ManagedResourceSummaryList?: Array<_UnmarshalledManagedResourceSummary>;

  /**
   * <p>List of tags attached to the license configuration.</p>
   */
  Tags?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
