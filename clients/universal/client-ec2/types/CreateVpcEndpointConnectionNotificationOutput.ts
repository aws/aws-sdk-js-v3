import { _UnmarshalledConnectionNotification } from "./_ConnectionNotification";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateVpcEndpointConnectionNotificationOutput shape
 */
export interface CreateVpcEndpointConnectionNotificationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the notification.</p>
   */
  ConnectionNotification?: _UnmarshalledConnectionNotification;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure the idempotency of the request.</p>
   */
  ClientToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
