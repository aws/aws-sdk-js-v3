import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeStorageOutput shape
 */
export interface DescribeStorageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The total amount of storage currently used for snapshots.</p>
   */
  TotalBackupSizeInMegaBytes?: number;

  /**
   * <p>The total amount of storage currently provisioned.</p>
   */
  TotalProvisionedStorageInMegaBytes?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
