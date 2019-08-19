import { _UnmarshalledInsight } from "./_Insight";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetInsightsOutput shape
 */
export interface GetInsightsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The insights returned by the operation.</p>
   */
  Insights: Array<_UnmarshalledInsight>;

  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
