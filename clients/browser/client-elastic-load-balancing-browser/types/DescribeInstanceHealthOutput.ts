import { _UnmarshalledInstanceState } from "./_InstanceState";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output for DescribeInstanceHealth.</p>
 */
export interface DescribeInstanceHealthOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the health of the instances.</p>
   */
  InstanceStates?: Array<_UnmarshalledInstanceState>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
