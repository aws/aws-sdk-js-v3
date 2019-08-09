import { _UnmarshalledLicenseConfiguration } from "./_LicenseConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListLicenseConfigurationsOutput shape
 */
export interface ListLicenseConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Array of license configuration objects.</p>
   */
  LicenseConfigurations?: Array<_UnmarshalledLicenseConfiguration>;

  /**
   * <p>Token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
