import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateLicenseConfigurationOutput shape
 */
export interface CreateLicenseConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>ARN of the license configuration object after its creation.</p>
   */
  LicenseConfigurationArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
