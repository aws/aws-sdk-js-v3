import { _UnmarshalledAPNSChannelResponse } from "./_APNSChannelResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetApnsChannelOutput shape
 */
export interface GetApnsChannelOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.</p>
   */
  APNSChannelResponse: _UnmarshalledAPNSChannelResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
