import { _UnmarshalledActivity } from "./_Activity";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeActivitiesOutput shape
 */
export interface DescribeActivitiesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of activities for the specified user and time period.</p>
   */
  UserActivities?: Array<_UnmarshalledActivity>;

  /**
   * <p>The marker for the next set of results.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
