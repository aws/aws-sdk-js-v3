import { _UnmarshalledProblem } from "./_Problem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListProblemsOutput shape
 */
export interface ListProblemsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of problems. </p>
   */
  ProblemList?: Array<_UnmarshalledProblem>;

  /**
   * <p>The token used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
