import { _UnmarshalledInsightResults } from "./_InsightResults";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetInsightResultsOutput shape
 */
export interface GetInsightResultsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The insight results returned by the operation.</p>
   */
  InsightResults: _UnmarshalledInsightResults;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
