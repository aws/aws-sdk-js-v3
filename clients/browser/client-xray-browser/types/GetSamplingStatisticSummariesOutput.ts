import { _UnmarshalledSamplingStatisticSummary } from "./_SamplingStatisticSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSamplingStatisticSummariesOutput shape
 */
export interface GetSamplingStatisticSummariesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the number of requests instrumented for each sampling rule.</p>
   */
  SamplingStatisticSummaries?: Array<_UnmarshalledSamplingStatisticSummary>;

  /**
   * <p>Pagination token. Not used.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
