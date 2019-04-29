import { _UnmarshalledCampaignsResponse } from "./_CampaignsResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCampaignVersionsOutput shape
 */
export interface GetCampaignVersionsOutput {
  /**
   * List of available campaigns.
   */
  CampaignsResponse: _UnmarshalledCampaignsResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
