import { _UnmarshalledCampaign } from "./_Campaign";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeCampaignOutput shape
 */
export interface DescribeCampaignOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The properties of the campaign.</p>
   */
  campaign?: _UnmarshalledCampaign;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
