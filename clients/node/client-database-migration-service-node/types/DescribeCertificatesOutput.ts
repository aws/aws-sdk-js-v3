import { _UnmarshalledCertificate } from "./_Certificate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeCertificatesOutput shape
 */
export interface DescribeCertificatesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The pagination token.</p>
   */
  Marker?: string;

  /**
   * <p>The Secure Sockets Layer (SSL) certificates associated with the replication instance.</p>
   */
  Certificates?: Array<_UnmarshalledCertificate>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
