import { _UnmarshalledCertificate } from "./_Certificate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddListenerCertificatesOutput shape
 */
export interface AddListenerCertificatesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the certificates in the certificate list.</p>
   */
  Certificates?: Array<_UnmarshalledCertificate>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
