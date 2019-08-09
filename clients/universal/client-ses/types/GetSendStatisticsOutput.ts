import { _UnmarshalledSendDataPoint } from "./_SendDataPoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a list of data points. This list contains aggregated data from the previous two weeks of your sending activity with Amazon SES.</p>
 */
export interface GetSendStatisticsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of data points, each of which represents 15 minutes of activity.</p>
   */
  SendDataPoints?: Array<_UnmarshalledSendDataPoint>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
