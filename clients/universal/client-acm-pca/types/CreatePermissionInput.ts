import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreatePermissionInput shape
 */
export interface CreatePermissionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the CA that grants the permissions. You can find the ARN by calling the <a>ListCertificateAuthorities</a> action. This must have the following form: </p> <p> <code>arn:aws:acm-pca:<i>region</i>:<i>account</i>:certificate-authority/<i>12345678-1234-1234-1234-123456789012</i> </code>. </p>
   */
  CertificateAuthorityArn: string;

  /**
   * <p>The AWS service or identity that receives the permission. At this time, the only valid principal is <code>acm.amazonaws.com</code>.</p>
   */
  Principal: string;

  /**
   * <p>The ID of the calling account.</p>
   */
  SourceAccount?: string;

  /**
   * <p>The actions that the specified AWS service principal can use. These include <code>IssueCertificate</code>, <code>GetCertificate</code>, and <code>ListPermissions</code>.</p>
   */
  Actions:
    | Array<"IssueCertificate" | "GetCertificate" | "ListPermissions" | string>
    | Iterable<
        "IssueCertificate" | "GetCertificate" | "ListPermissions" | string
      >;

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
