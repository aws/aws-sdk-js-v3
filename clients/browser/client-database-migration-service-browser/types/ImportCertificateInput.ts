import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ImportCertificateInput shape
 */
export interface ImportCertificateInput {
  /**
   * <p>A customer-assigned name for the certificate. Identifiers must begin with a letter; must contain only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two consecutive hyphens.</p>
   */
  CertificateIdentifier: string;

  /**
   * <p>The contents of a <code>.pem</code> file, which contains an X.509 certificate.</p>
   */
  CertificatePem?: string;

  /**
   * <p>The location of an imported Oracle Wallet certificate for use with SSL.</p>
   */
  CertificateWallet?: ArrayBuffer | ArrayBufferView | string;

  /**
   * <p>The tags associated with the certificate.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

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
