import { _UnmarshalledFindingStatistics } from "./_FindingStatistics";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFindingsStatisticsOutput shape
 */
export interface GetFindingsStatisticsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Finding statistics object.</p>
   */
  FindingStatistics: _UnmarshalledFindingStatistics;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
