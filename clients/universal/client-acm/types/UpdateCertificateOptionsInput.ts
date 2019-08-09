import { _CertificateOptions } from "./_CertificateOptions";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateCertificateOptionsInput shape
 */
export interface UpdateCertificateOptionsInput {
  /**
   * <p>ARN of the requested certificate to update. This must be of the form:</p> <p> <code>arn:aws:acm:us-east-1:<i>account</i>:certificate/<i>12345678-1234-1234-1234-123456789012</i> </code> </p>
   */
  CertificateArn: string;

  /**
   * <p>Use to update the options for your certificate. Currently, you can specify whether to add your certificate to a transparency log. Certificate transparency makes it possible to detect SSL/TLS certificates that have been mistakenly or maliciously issued. Certificates that have not been logged typically produce an error message in a browser. </p>
   */
  Options: _CertificateOptions;

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
