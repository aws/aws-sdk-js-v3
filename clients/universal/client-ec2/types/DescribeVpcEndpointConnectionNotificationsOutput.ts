import { _UnmarshalledConnectionNotification } from "./_ConnectionNotification";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVpcEndpointConnectionNotificationsOutput shape
 */
export interface DescribeVpcEndpointConnectionNotificationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>One or more notifications.</p>
   */
  ConnectionNotificationSet?: Array<_UnmarshalledConnectionNotification>;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
