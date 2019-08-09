import { _UnmarshalledAnalyticsConfiguration } from "./_AnalyticsConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListBucketAnalyticsConfigurationsOutput shape
 */
export interface ListBucketAnalyticsConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Indicates whether the returned list of analytics configurations is complete. A value of true indicates that the list is not complete and the NextContinuationToken will be provided for a subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>The ContinuationToken that represents where this request began.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>NextContinuationToken is sent when isTruncated is true, which indicates that there are more analytics configurations to list. The next request must include this NextContinuationToken. The token is obfuscated and is not a usable value.</p>
   */
  NextContinuationToken?: string;

  /**
   * <p>The list of analytics configurations for a bucket.</p>
   */
  AnalyticsConfigurationList?: Array<_UnmarshalledAnalyticsConfiguration>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
