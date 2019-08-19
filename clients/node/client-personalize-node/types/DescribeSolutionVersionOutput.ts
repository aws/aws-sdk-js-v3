import { _UnmarshalledSolutionVersion } from "./_SolutionVersion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSolutionVersionOutput shape
 */
export interface DescribeSolutionVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The solution version.</p>
   */
  solutionVersion?: _UnmarshalledSolutionVersion;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
