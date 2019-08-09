import { _UnmarshalledProblem } from "./_Problem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeProblemOutput shape
 */
export interface DescribeProblemOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the problem. </p>
   */
  Problem?: _UnmarshalledProblem;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
