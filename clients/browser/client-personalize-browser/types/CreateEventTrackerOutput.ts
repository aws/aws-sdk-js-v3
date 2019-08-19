import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateEventTrackerOutput shape
 */
export interface CreateEventTrackerOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the event tracker.</p>
   */
  eventTrackerArn?: string;

  /**
   * <p>The ID of the event tracker. Include this ID in requests to the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p>
   */
  trackingId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
