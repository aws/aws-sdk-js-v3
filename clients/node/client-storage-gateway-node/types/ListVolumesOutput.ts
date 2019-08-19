import { _UnmarshalledVolumeInfo } from "./_VolumeInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListVolumesOutput$Marker</a> </p> </li> <li> <p> <a>ListVolumesOutput$VolumeInfos</a> </p> </li> </ul>
 */
export interface ListVolumesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>Use the marker in your next request to continue pagination of iSCSI volumes. If there are no more volumes to list, this field does not appear in the response body.</p>
   */
  Marker?: string;

  /**
   * <p>An array of <a>VolumeInfo</a> objects, where each object describes an iSCSI volume. If no volumes are defined for the gateway, then <code>VolumeInfos</code> is an empty array "[]".</p>
   */
  VolumeInfos?: Array<_UnmarshalledVolumeInfo>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
