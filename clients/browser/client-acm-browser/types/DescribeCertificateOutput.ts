import { _UnmarshalledCertificateDetail } from "./_CertificateDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeCertificateOutput shape
 */
export interface DescribeCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Metadata about an ACM certificate.</p>
   */
  Certificate?: _UnmarshalledCertificateDetail;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
