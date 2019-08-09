import { _UnmarshalledDatapoint } from "./_Datapoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMetricStatisticsOutput shape
 */
export interface GetMetricStatisticsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A label for the specified metric.</p>
   */
  Label?: string;

  /**
   * <p>The data points for the specified metric.</p>
   */
  Datapoints?: Array<_UnmarshalledDatapoint>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
