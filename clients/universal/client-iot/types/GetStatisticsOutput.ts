import { _UnmarshalledStatistics } from "./_Statistics";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetStatisticsOutput shape
 */
export interface GetStatisticsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The statistics returned by the Fleet Indexing service based on the query and aggregation field.</p>
   */
  statistics?: _UnmarshalledStatistics;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
