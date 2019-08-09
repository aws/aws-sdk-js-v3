import { _UnmarshalledCampaignResponse } from "./_CampaignResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCampaignVersionOutput shape
 */
export interface GetCampaignVersionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about the status, configuration, and other settings for a campaign.</p>
   */
  CampaignResponse: _UnmarshalledCampaignResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
