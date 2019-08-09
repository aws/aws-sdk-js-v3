import { _UnmarshalledVolume } from "./_Volume";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>DescribeVolumes</code> request.</p>
 */
export interface DescribeVolumesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of volume IDs.</p>
   */
  Volumes?: Array<_UnmarshalledVolume>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
