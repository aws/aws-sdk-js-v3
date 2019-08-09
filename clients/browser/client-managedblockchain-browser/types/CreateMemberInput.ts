import { _MemberConfiguration } from "./_MemberConfiguration";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateMemberInput shape
 */
export interface CreateMemberInput {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.</p>
   */
  ClientRequestToken: string;

  /**
   * <p>The unique identifier of the invitation that is sent to the member to join the network.</p>
   */
  InvitationId: string;

  /**
   * <p>The unique identifier of the network in which the member is created.</p>
   */
  NetworkId: string;

  /**
   * <p>Member configuration parameters.</p>
   */
  MemberConfiguration: _MemberConfiguration;

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
