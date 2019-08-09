import { _UnmarshalledInput } from "./_Input";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeInputOutput shape
 */
export interface DescribeInputOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the input.</p>
   */
  input?: _UnmarshalledInput;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
