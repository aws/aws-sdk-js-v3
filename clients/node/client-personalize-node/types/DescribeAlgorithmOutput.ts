import { _UnmarshalledAlgorithm } from "./_Algorithm";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAlgorithmOutput shape
 */
export interface DescribeAlgorithmOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A listing of the properties of the algorithm.</p>
   */
  algorithm?: _UnmarshalledAlgorithm;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
