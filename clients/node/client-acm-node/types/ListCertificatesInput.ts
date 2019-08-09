import { _Filters } from "./_Filters";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCertificatesInput shape
 */
export interface ListCertificatesInput {
  /**
   * <p>Filter the certificate list by status value.</p>
   */
  CertificateStatuses?:
    | Array<
        | "PENDING_VALIDATION"
        | "ISSUED"
        | "INACTIVE"
        | "EXPIRED"
        | "VALIDATION_TIMED_OUT"
        | "REVOKED"
        | "FAILED"
        | string
      >
    | Iterable<
        | "PENDING_VALIDATION"
        | "ISSUED"
        | "INACTIVE"
        | "EXPIRED"
        | "VALIDATION_TIMED_OUT"
        | "REVOKED"
        | "FAILED"
        | string
      >;

  /**
   * <p>Filter the certificate list. For more information, see the <a>Filters</a> structure.</p>
   */
  Includes?: _Filters;

  /**
   * <p>Use this parameter only when paginating results and only in a subsequent request after you receive a response with truncated results. Set it to the value of <code>NextToken</code> from the response you just received.</p>
   */
  NextToken?: string;

  /**
   * <p>Use this parameter when paginating results to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the <code>NextToken</code> element is sent in the response. Use this <code>NextToken</code> value in a subsequent request to retrieve additional items.</p>
   */
  MaxItems?: number;

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
