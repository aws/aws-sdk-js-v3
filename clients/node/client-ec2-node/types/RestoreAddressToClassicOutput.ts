import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RestoreAddressToClassicOutput shape
 */
export interface RestoreAddressToClassicOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Elastic IP address.</p>
   */
  PublicIp?: string;

  /**
   * <p>The move status for the IP address.</p>
   */
  Status?: "MoveInProgress" | "InVpc" | "InClassic" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
