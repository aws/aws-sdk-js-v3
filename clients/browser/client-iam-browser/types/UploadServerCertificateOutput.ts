import { _UnmarshalledServerCertificateMetadata } from "./_ServerCertificateMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>UploadServerCertificate</a> request. </p>
 */
export interface UploadServerCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The meta information of the uploaded server certificate without its certificate body, certificate chain, and private key.</p>
   */
  ServerCertificateMetadata?: _UnmarshalledServerCertificateMetadata;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
