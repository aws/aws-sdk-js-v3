import { _UnmarshalledRequestedServiceQuotaChange } from "./_RequestedServiceQuotaChange";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListRequestedServiceQuotaChangeHistoryOutput shape
 */
export interface ListRequestedServiceQuotaChangeHistoryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If present in the response, this value indicates there's more output available that what's included in the current response. This can occur even when the response includes no values at all, such as when you ask for a filtered view of a very long list. Use this value in the <code>NextToken</code> request parameter in a subsequent call to the operation to continue processing and get the next part of the output. You should repeat this until the <code>NextToken</code> response element comes back empty (as <code>null</code>).</p>
   */
  NextToken?: string;

  /**
   * <p>Returns a list of service quota requests.</p>
   */
  RequestedQuotas?: Array<_UnmarshalledRequestedServiceQuotaChange>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
