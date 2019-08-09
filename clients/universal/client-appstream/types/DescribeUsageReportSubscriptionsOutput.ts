import { _UnmarshalledUsageReportSubscription } from "./_UsageReportSubscription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeUsageReportSubscriptionsOutput shape
 */
export interface DescribeUsageReportSubscriptionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the usage report subscription.</p>
   */
  UsageReportSubscriptions?: Array<_UnmarshalledUsageReportSubscription>;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
