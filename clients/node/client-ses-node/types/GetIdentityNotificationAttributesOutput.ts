import { _UnmarshalledIdentityNotificationAttributes } from "./_IdentityNotificationAttributes";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the notification attributes for a list of identities.</p>
 */
export interface GetIdentityNotificationAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A map of Identity to IdentityNotificationAttributes.</p>
   */
  NotificationAttributes: {
    [key: string]: _UnmarshalledIdentityNotificationAttributes;
  };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
