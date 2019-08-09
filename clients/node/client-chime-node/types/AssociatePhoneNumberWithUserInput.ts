import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociatePhoneNumberWithUserInput shape
 */
export interface AssociatePhoneNumberWithUserInput {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string;

  /**
   * <p>The user ID.</p>
   */
  UserId: string;

  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber: string;

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
