import { _UnmarshalledSolution } from "./_Solution";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSolutionOutput shape
 */
export interface DescribeSolutionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that describes the solution.</p>
   */
  solution?: _UnmarshalledSolution;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
