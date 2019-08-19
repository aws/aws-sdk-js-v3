import { _UnmarshalledAnomalyDetector } from "./_AnomalyDetector";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAnomalyDetectorsOutput shape
 */
export interface DescribeAnomalyDetectorsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of anomaly detection models returned by the operation.</p>
   */
  AnomalyDetectors?: Array<_UnmarshalledAnomalyDetector>;

  /**
   * <p>A token that you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
