import { _UnmarshalledTimeToLiveDescription } from "./_TimeToLiveDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTimeToLiveOutput shape
 */
export interface DescribeTimeToLiveOutput {
  /**
   * <p/>
   */
  TimeToLiveDescription?: _UnmarshalledTimeToLiveDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
