import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateCampaignOutput shape
 */
export interface UpdateCampaignOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The same campaign ARN as given in the request.</p>
   */
  campaignArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
