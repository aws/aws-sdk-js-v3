import { _UnmarshalledEventSubscription } from "./_EventSubscription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface CreateEventSubscriptionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The event subscription that was created.</p>
   */
  EventSubscription?: _UnmarshalledEventSubscription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
