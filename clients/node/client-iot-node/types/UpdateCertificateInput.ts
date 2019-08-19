import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The input for the UpdateCertificate operation.</p>
 */
export interface UpdateCertificateInput {
  /**
   * <p>The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)</p>
   */
  certificateId: string;

  /**
   * <p>The new status.</p> <p> <b>Note:</b> Setting the status to PENDING_TRANSFER will result in an exception being thrown. PENDING_TRANSFER is a status used internally by AWS IoT. It is not intended for developer use.</p> <p> <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
   */
  newStatus:
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
