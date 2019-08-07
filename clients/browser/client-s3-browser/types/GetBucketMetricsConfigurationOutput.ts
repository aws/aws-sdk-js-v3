import { _UnmarshalledMetricsConfiguration } from "./_MetricsConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBucketMetricsConfigurationOutput shape
 */
export interface GetBucketMetricsConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies the metrics configuration.</p>
   */
  MetricsConfiguration?: _UnmarshalledMetricsConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
