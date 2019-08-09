import { _UnmarshalledListWebhookItem } from "./_ListWebhookItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListWebhooksOutput shape
 */
export interface ListWebhooksOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The JSON detail returned for each webhook in the list output for the ListWebhooks call.</p>
   */
  webhooks?: Array<_UnmarshalledListWebhookItem>;

  /**
   * <p>If the amount of returned information is significantly large, an identifier is also returned and can be used in a subsequent ListWebhooks call to return the next set of webhooks in the list. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
