import { _UnmarshalledCertificate } from "./_Certificate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteCertificateOutput shape
 */
export interface DeleteCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Secure Sockets Layer (SSL) certificate.</p>
   */
  Certificate?: _UnmarshalledCertificate;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
