import { _UnmarshalledSubscriber } from "./_Subscriber";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Response of DescribeSubscribersForNotification </p>
 */
export interface DescribeSubscribersForNotificationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of subscribers that are associated with a notification.</p>
   */
  Subscribers?: Array<_UnmarshalledSubscriber>;

  /**
   * <p>The pagination token in the service response that indicates the next set of results that you can retrieve.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
