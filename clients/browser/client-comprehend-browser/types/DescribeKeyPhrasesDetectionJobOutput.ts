import { _UnmarshalledKeyPhrasesDetectionJobProperties } from "./_KeyPhrasesDetectionJobProperties";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeKeyPhrasesDetectionJobOutput shape
 */
export interface DescribeKeyPhrasesDetectionJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains the properties associated with a key phrases detection job. </p>
   */
  KeyPhrasesDetectionJobProperties?: _UnmarshalledKeyPhrasesDetectionJobProperties;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
