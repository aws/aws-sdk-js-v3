import { _UnmarshalledEventSubscription } from "./_EventSubscription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyEventSubscriptionOutput shape
 */
export interface ModifyEventSubscriptionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   */
  EventSubscription?: _UnmarshalledEventSubscription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
