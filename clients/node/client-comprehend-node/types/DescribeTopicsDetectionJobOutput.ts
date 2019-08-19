import { _UnmarshalledTopicsDetectionJobProperties } from "./_TopicsDetectionJobProperties";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTopicsDetectionJobOutput shape
 */
export interface DescribeTopicsDetectionJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of properties for the requested job.</p>
   */
  TopicsDetectionJobProperties?: _UnmarshalledTopicsDetectionJobProperties;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
