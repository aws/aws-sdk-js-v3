import { _UnmarshalledVolumeModification } from "./_VolumeModification";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVolumesModificationsOutput shape
 */
export interface DescribeVolumesModificationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the volume modifications.</p>
   */
  VolumesModifications?: Array<_UnmarshalledVolumeModification>;

  /**
   * <p>Token for pagination, null if there are no more results </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
