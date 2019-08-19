import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDevicePolicyConfigurationOutput shape
 */
export interface DescribeDevicePolicyConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.</p>
   */
  DeviceCaCertificate?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
