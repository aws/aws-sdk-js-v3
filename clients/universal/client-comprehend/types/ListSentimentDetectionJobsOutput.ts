import { _UnmarshalledSentimentDetectionJobProperties } from "./_SentimentDetectionJobProperties";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSentimentDetectionJobsOutput shape
 */
export interface ListSentimentDetectionJobsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list containing the properties of each job that is returned.</p>
   */
  SentimentDetectionJobPropertiesList?: Array<
    _UnmarshalledSentimentDetectionJobProperties
  >;

  /**
   * <p>Identifies the next page of results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
