import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeWorkingStorageOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>An array of the gateway's local disk IDs that are configured as working storage. Each local disk ID is specified as a string (minimum length of 1 and maximum length of 300). If no local disks are configured as working storage, then the DiskIds array is empty.</p>
   */
  DiskIds?: Array<string>;

  /**
   * <p>The total working storage in bytes in use by the gateway. If no working storage is configured for the gateway, this field returns 0.</p>
   */
  WorkingStorageUsedInBytes?: number;

  /**
   * <p>The total working storage in bytes allocated for the gateway. If no working storage is configured for the gateway, this field returns 0.</p>
   */
  WorkingStorageAllocatedInBytes?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
