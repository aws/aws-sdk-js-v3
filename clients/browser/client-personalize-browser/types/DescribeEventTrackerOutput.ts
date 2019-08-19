import { _UnmarshalledEventTracker } from "./_EventTracker";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEventTrackerOutput shape
 */
export interface DescribeEventTrackerOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that describes the event tracker.</p>
   */
  eventTracker?: _UnmarshalledEventTracker;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
