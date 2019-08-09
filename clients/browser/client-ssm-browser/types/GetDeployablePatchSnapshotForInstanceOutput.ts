import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDeployablePatchSnapshotForInstanceOutput shape
 */
export interface GetDeployablePatchSnapshotForInstanceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The user-defined snapshot ID.</p>
   */
  SnapshotId?: string;

  /**
   * <p>A pre-signed Amazon S3 URL that can be used to download the patch snapshot.</p>
   */
  SnapshotDownloadUrl?: string;

  /**
   * <p>Returns the specific operating system (for example Windows Server 2012 or Amazon Linux 2015.09) on the instance for the specified patch snapshot.</p>
   */
  Product?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
