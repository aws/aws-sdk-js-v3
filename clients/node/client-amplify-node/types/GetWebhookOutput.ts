import { _UnmarshalledWebhook } from "./_Webhook";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure for the get webhook request. </p>
 */
export interface GetWebhookOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Webhook structure. </p>
   */
  webhook: _UnmarshalledWebhook;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
