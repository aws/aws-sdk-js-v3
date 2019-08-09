import { _UnmarshalledDatapoint } from "./_Datapoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetScalingPlanResourceForecastDataOutput shape
 */
export interface GetScalingPlanResourceForecastDataOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The data points to return.</p>
   */
  Datapoints: Array<_UnmarshalledDatapoint>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
