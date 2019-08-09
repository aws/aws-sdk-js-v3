import { _UnmarshalledCertificate } from "./_Certificate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Data returned by the <b>DescribeCertificates</b> action.</p>
 */
export interface DescribeCertificatesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of <code>Certificate</code> objects for the AWS account.</p>
   */
  Certificates?: Array<_UnmarshalledCertificate>;

  /**
   * <p> An optional pagination token provided by a previous <code>DescribeCertificates</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> . </p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
