import { _UnmarshalledEntitiesDetectionJobProperties } from "./_EntitiesDetectionJobProperties";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEntitiesDetectionJobOutput shape
 */
export interface DescribeEntitiesDetectionJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains the properties associated with an entities detection job.</p>
   */
  EntitiesDetectionJobProperties?: _UnmarshalledEntitiesDetectionJobProperties;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
