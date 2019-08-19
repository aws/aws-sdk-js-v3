import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * EnableMFADeviceInput shape
 */
export interface EnableMFADeviceInput {
  /**
   * <p>The name of the IAM user for whom you want to enable the MFA device.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string;

  /**
   * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the serial number is the device ARN.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: =,.@:/-</p>
   */
  SerialNumber: string;

  /**
   * <p>An authentication code emitted by the device. </p> <p>The format for this parameter is a string of six digits.</p> <important> <p>Submit your request immediately after generating the authentication codes. If you generate the codes and then wait too long to submit the request, the MFA device successfully associates with the user but the MFA device becomes out of sync. This happens because time-based one-time passwords (TOTP) expire after a short period of time. If this happens, you can <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_sync.html">resync the device</a>.</p> </important>
   */
  AuthenticationCode1: string;

  /**
   * <p>A subsequent authentication code emitted by the device.</p> <p>The format for this parameter is a string of six digits.</p> <important> <p>Submit your request immediately after generating the authentication codes. If you generate the codes and then wait too long to submit the request, the MFA device successfully associates with the user but the MFA device becomes out of sync. This happens because time-based one-time passwords (TOTP) expire after a short period of time. If this happens, you can <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_sync.html">resync the device</a>.</p> </important>
   */
  AuthenticationCode2: string;

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
