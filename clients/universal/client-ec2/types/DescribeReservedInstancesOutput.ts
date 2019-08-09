import { _UnmarshalledReservedInstances } from "./_ReservedInstances";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output for DescribeReservedInstances.</p>
 */
export interface DescribeReservedInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of Reserved Instances.</p>
   */
  ReservedInstances?: Array<_UnmarshalledReservedInstances>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
