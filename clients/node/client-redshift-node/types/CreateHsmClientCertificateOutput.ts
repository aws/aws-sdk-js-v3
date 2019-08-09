import { _UnmarshalledHsmClientCertificate } from "./_HsmClientCertificate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateHsmClientCertificateOutput shape
 */
export interface CreateHsmClientCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files.</p>
   */
  HsmClientCertificate?: _UnmarshalledHsmClientCertificate;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
