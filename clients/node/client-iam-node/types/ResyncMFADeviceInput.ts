import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ResyncMFADeviceInput shape
 */
export interface ResyncMFADeviceInput {
  /**
   * <p>The name of the user whose MFA device you want to resynchronize.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string;

  /**
   * <p>Serial number that uniquely identifies the MFA device.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  SerialNumber: string;

  /**
   * <p>An authentication code emitted by the device.</p> <p>The format for this parameter is a sequence of six digits.</p>
   */
  AuthenticationCode1: string;

  /**
   * <p>A subsequent authentication code emitted by the device.</p> <p>The format for this parameter is a sequence of six digits.</p>
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
