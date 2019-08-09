import { _UnmarshalledCreateVolumePermission } from "./_CreateVolumePermission";
import { _UnmarshalledProductCode } from "./_ProductCode";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeSnapshotAttribute.</p>
 */
export interface DescribeSnapshotAttributeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The users and groups that have the permissions for creating volumes from the snapshot.</p>
   */
  CreateVolumePermissions?: Array<_UnmarshalledCreateVolumePermission>;

  /**
   * <p>The product codes.</p>
   */
  ProductCodes?: Array<_UnmarshalledProductCode>;

  /**
   * <p>The ID of the EBS snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
