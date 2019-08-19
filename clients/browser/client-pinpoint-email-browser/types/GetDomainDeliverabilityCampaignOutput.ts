import { _UnmarshalledDomainDeliverabilityCampaign } from "./_DomainDeliverabilityCampaign";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).</p>
 */
export interface GetDomainDeliverabilityCampaignOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains the deliverability data for the campaign.</p>
   */
  DomainDeliverabilityCampaign: _UnmarshalledDomainDeliverabilityCampaign;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
