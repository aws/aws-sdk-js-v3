import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPermissionsInput shape
 */
export interface ListPermissionsInput {
  /**
   * <p>The Amazon Resource Number (ARN) of the private CA to inspect. You can find the ARN by calling the <a>ListCertificateAuthorities</a> action. This must be of the form: <code>arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012</code> You can get a private CA's ARN by running the <a>ListCertificateAuthorities</a> action.</p>
   */
  CertificateAuthorityArn: string;

  /**
   * <p>When paginating results, use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of <b>NextToken</b> from the response you just received.</p>
   */
  NextToken?: string;

  /**
   * <p>When paginating results, use this parameter to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the <b>NextToken</b> element is sent in the response. Use this <b>NextToken</b> value in a subsequent request to retrieve additional items.</p>
   */
  MaxResults?: number;

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
