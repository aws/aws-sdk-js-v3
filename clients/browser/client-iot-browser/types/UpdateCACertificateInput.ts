import { _RegistrationConfig } from "./_RegistrationConfig";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The input to the UpdateCACertificate operation.</p>
 */
export interface UpdateCACertificateInput {
  /**
   * <p>The CA certificate identifier.</p>
   */
  certificateId: string;

  /**
   * <p>The updated status of the CA certificate.</p> <p> <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
   */
  newStatus?: "ACTIVE" | "INACTIVE" | string;

  /**
   * <p>The new value for the auto registration status. Valid values are: "ENABLE" or "DISABLE".</p>
   */
  newAutoRegistrationStatus?: "ENABLE" | "DISABLE" | string;

  /**
   * <p>Information about the registration configuration.</p>
   */
  registrationConfig?: _RegistrationConfig;

  /**
   * <p>If true, removes auto registration.</p>
   */
  removeAutoRegistration?: boolean;

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
