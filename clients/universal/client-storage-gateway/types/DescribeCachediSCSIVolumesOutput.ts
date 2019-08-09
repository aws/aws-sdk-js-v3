import { _UnmarshalledCachediSCSIVolume } from "./_CachediSCSIVolume";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface DescribeCachediSCSIVolumesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of objects where each object contains metadata about one cached volume.</p>
   */
  CachediSCSIVolumes?: Array<_UnmarshalledCachediSCSIVolume>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
