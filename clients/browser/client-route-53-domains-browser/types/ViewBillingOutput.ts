import { _UnmarshalledBillingRecord } from "./_BillingRecord";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The ViewBilling response includes the following elements.</p>
 */
export interface ViewBillingOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If there are more billing records than you specified for <code>MaxItems</code> in the request, submit another request and include the value of <code>NextPageMarker</code> in the value of <code>Marker</code>.</p>
   */
  NextPageMarker?: string;

  /**
   * <p>A summary of billing records.</p>
   */
  BillingRecords?: Array<_UnmarshalledBillingRecord>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
