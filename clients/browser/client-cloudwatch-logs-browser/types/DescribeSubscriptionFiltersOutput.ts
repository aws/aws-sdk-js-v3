import { _UnmarshalledSubscriptionFilter } from "./_SubscriptionFilter";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSubscriptionFiltersOutput shape
 */
export interface DescribeSubscriptionFiltersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The subscription filters.</p>
   */
  subscriptionFilters?: Array<_UnmarshalledSubscriptionFilter>;

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
