import { _UnmarshalledAlgorithmSummary } from "./_AlgorithmSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAlgorithmsOutput shape
 */
export interface ListAlgorithmsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>&gt;An array of <code>AlgorithmSummary</code> objects, each of which lists an algorithm.</p>
   */
  AlgorithmSummaryList: Array<_UnmarshalledAlgorithmSummary>;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of algorithms, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
