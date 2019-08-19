import { _UnmarshalledCertificateSummary } from "./_CertificateSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCertificatesOutput shape
 */
export interface ListCertificatesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>When the list is truncated, this value is present and contains the value to use for the <code>NextToken</code> parameter in a subsequent pagination request.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of ACM certificates.</p>
   */
  CertificateSummaryList?: Array<_UnmarshalledCertificateSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
