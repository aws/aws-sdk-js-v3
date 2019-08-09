import { _UnmarshalledListWebhookItem } from "./_ListWebhookItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutWebhookOutput shape
 */
export interface PutWebhookOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The detail returned from creating the webhook, such as the webhook name, webhook URL, and webhook ARN.</p>
   */
  webhook?: _UnmarshalledListWebhookItem;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
