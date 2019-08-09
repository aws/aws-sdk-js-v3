import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeUploadBufferOutput shape
 */
export interface DescribeUploadBufferOutput
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
   * <p>The total number of bytes being used in the gateway's upload buffer.</p>
   */
  UploadBufferUsedInBytes?: number;

  /**
   * <p>The total number of bytes allocated in the gateway's as upload buffer.</p>
   */
  UploadBufferAllocatedInBytes?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
