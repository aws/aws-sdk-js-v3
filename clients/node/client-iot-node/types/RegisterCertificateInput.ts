import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The input to the RegisterCertificate operation.</p>
 */
export interface RegisterCertificateInput {
  /**
   * <p>The certificate data, in PEM format.</p>
   */
  certificatePem: string;

  /**
   * <p>The CA certificate used to sign the device certificate being registered.</p>
   */
  caCertificatePem?: string;

  /**
   * <p>A boolean value that specifies if the certificate is set to active.</p>
   */
  setAsActive?: boolean;

  /**
   * <p>The status of the register certificate request.</p>
   */
  status?:
    | "ACTIVE"
    | "INACTIVE"
    | "REVOKED"
    | "PENDING_TRANSFER"
    | "REGISTER_INACTIVE"
    | "PENDING_ACTIVATION"
    | string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
