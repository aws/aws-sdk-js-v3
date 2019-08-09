import { _UnmarshalledLicenseConfigurationUsage } from "./_LicenseConfigurationUsage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListUsageForLicenseConfigurationOutput shape
 */
export interface ListUsageForLicenseConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>LicenseConfigurationUsage</code> objects.</p>
   */
  LicenseConfigurationUsageList?: Array<_UnmarshalledLicenseConfigurationUsage>;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
