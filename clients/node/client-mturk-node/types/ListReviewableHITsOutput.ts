import { _UnmarshalledHIT } from "./_HIT";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListReviewableHITsOutput shape
 */
export interface ListReviewableHITsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p> The number of HITs on this page in the filtered results list, equivalent to the number of HITs being returned by this call. </p>
   */
  NumResults?: number;

  /**
   * <p> The list of HIT elements returned by the query.</p>
   */
  HITs?: Array<_UnmarshalledHIT>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
