import { _UnmarshalledCampaignsResponse } from "./_CampaignsResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCampaignVersionsOutput shape
 */
export interface GetCampaignVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about the configuration and other settings for all the campaigns that are associated with an application.</p>
   */
  CampaignsResponse: _UnmarshalledCampaignsResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
