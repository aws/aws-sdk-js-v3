import { _UnmarshalledSigningCertificate } from "./_SigningCertificate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>UploadSigningCertificate</a> request. </p>
 */
export interface UploadSigningCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the certificate.</p>
   */
  Certificate: _UnmarshalledSigningCertificate;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
