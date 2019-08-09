import { _UnmarshalledCampaignDateRangeKpiResponse } from "./_CampaignDateRangeKpiResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCampaignDateRangeKpiOutput shape
 */
export interface GetCampaignDateRangeKpiOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.</p>
   */
  CampaignDateRangeKpiResponse: _UnmarshalledCampaignDateRangeKpiResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
