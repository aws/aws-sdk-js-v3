import { _UnmarshalledWebhook } from "./_Webhook";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateWebhookOutput shape
 */
export interface CreateWebhookOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about a webhook that connects repository events to a build project in AWS CodeBuild.</p>
   */
  webhook?: _UnmarshalledWebhook;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
