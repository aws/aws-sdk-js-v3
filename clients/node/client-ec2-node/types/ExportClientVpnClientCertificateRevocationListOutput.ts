import { _UnmarshalledClientCertificateRevocationListStatus } from "./_ClientCertificateRevocationListStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ExportClientVpnClientCertificateRevocationListOutput shape
 */
export interface ExportClientVpnClientCertificateRevocationListOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the client certificate revocation list.</p>
   */
  CertificateRevocationList?: string;

  /**
   * <p>The current state of the client certificate revocation list.</p>
   */
  Status?: _UnmarshalledClientCertificateRevocationListStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
