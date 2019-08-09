import { _UnmarshalledMetricFilterMatchRecord } from "./_MetricFilterMatchRecord";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TestMetricFilterOutput shape
 */
export interface TestMetricFilterOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The matched events.</p>
   */
  matches?: Array<_UnmarshalledMetricFilterMatchRecord>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
