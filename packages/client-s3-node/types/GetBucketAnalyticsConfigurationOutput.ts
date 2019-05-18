import { _UnmarshalledAnalyticsConfiguration } from "./_AnalyticsConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBucketAnalyticsConfigurationOutput shape
 */
export interface GetBucketAnalyticsConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The configuration and any analyses for the analytics filter.</p>
   */
  AnalyticsConfiguration?: _UnmarshalledAnalyticsConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
