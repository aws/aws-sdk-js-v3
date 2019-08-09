import { _UnmarshalledCampaignSummary } from "./_CampaignSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCampaignsOutput shape
 */
export interface ListCampaignsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the campaigns.</p>
   */
  campaigns?: Array<_UnmarshalledCampaignSummary>;

  /**
   * <p>A token for getting the next set of campaigns (if they exist).</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
