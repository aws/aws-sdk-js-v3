import { _UnmarshalledMountTargetDescription } from "./_MountTargetDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeMountTargetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If the request included the <code>Marker</code>, the response returns that value in this field.</p>
   */
  Marker?: string;

  /**
   * <p>Returns the file system's mount targets as an array of <code>MountTargetDescription</code> objects.</p>
   */
  MountTargets?: Array<_UnmarshalledMountTargetDescription>;

  /**
   * <p>If a value is present, there are more mount targets to return. In a subsequent request, you can provide <code>Marker</code> in your request with this value to retrieve the next set of mount targets.</p>
   */
  NextMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
