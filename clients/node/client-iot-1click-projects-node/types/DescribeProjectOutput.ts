import { _UnmarshalledProjectDescription } from "./_ProjectDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeProjectOutput shape
 */
export interface DescribeProjectOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object describing the project.</p>
   */
  project: _UnmarshalledProjectDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
