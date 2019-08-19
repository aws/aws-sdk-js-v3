import { _UnmarshalledKeyPair } from "./_KeyPair";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output of the CreateKeysAndCertificate operation.</p>
 */
export interface CreateKeysAndCertificateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the certificate.</p>
   */
  certificateArn?: string;

  /**
   * <p>The ID of the certificate. AWS IoT issues a default subject name for the certificate (for example, AWS IoT Certificate).</p>
   */
  certificateId?: string;

  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem?: string;

  /**
   * <p>The generated key pair.</p>
   */
  keyPair?: _UnmarshalledKeyPair;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
