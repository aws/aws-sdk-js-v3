import { _UnmarshalledCampaignResponse } from "./_CampaignResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCampaignOutput shape
 */
export interface GetCampaignOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Campaign definition
   */
  CampaignResponse: _UnmarshalledCampaignResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
