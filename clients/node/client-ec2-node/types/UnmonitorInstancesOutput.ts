import { _UnmarshalledInstanceMonitoring } from "./_InstanceMonitoring";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UnmonitorInstancesOutput shape
 */
export interface UnmonitorInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The monitoring information.</p>
   */
  InstanceMonitorings?: Array<_UnmarshalledInstanceMonitoring>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
