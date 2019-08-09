import { _UnmarshalledDomainDeliverabilityCampaign } from "./_DomainDeliverabilityCampaign";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.</p>
 */
export interface ListDomainDeliverabilityCampaignsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of responses, one for each campaign that used the domain to send email during the specified time range.</p>
   */
  DomainDeliverabilityCampaigns: Array<
    _UnmarshalledDomainDeliverabilityCampaign
  >;

  /**
   * <p>A token that’s returned from a previous call to the <code>ListDomainDeliverabilityCampaigns</code> operation. This token indicates the position of the campaign in the list of campaigns.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
