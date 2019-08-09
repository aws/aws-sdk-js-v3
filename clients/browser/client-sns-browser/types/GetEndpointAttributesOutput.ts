import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Response from GetEndpointAttributes of the EndpointArn.</p>
 */
export interface GetEndpointAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Attributes include the following:</p> <ul> <li> <p> <code>CustomUserData</code> – arbitrary user data to associate with the endpoint. Amazon SNS does not use this data. The data must be in UTF-8 format and less than 2KB.</p> </li> <li> <p> <code>Enabled</code> – flag that enables/disables delivery to the endpoint. Amazon SNS will set this to false when a notification service indicates to Amazon SNS that the endpoint is invalid. Users can set it back to true, typically after updating Token.</p> </li> <li> <p> <code>Token</code> – device token, also referred to as a registration id, for an app and mobile device. This is returned from the notification service when an app and mobile device are registered with the notification service.</p> </li> </ul>
   */
  Attributes?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
