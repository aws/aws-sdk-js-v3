import { _UnmarshalledListener } from "./_Listener";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeListenersOutput shape
 */
export interface DescribeListenersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the listeners.</p>
   */
  Listeners?: Array<_UnmarshalledListener>;

  /**
   * <p>If there are additional results, this is the marker for the next set of results. Otherwise, this is null.</p>
   */
  NextMarker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
