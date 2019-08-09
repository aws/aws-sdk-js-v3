import { _UnmarshalledRequestedServiceQuotaChange } from "./_RequestedServiceQuotaChange";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRequestedServiceQuotaChangeOutput shape
 */
export interface GetRequestedServiceQuotaChangeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns the <code>RequestedServiceQuotaChange</code> object for the specific increase request.</p>
   */
  RequestedQuota?: _UnmarshalledRequestedServiceQuotaChange;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
