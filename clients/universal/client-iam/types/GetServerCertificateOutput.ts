import { _UnmarshalledServerCertificate } from "./_ServerCertificate";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>GetServerCertificate</a> request. </p>
 */
export interface GetServerCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure containing details about the server certificate.</p>
   */
  ServerCertificate: _UnmarshalledServerCertificate;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
