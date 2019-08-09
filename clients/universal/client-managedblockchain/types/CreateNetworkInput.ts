import { _NetworkFrameworkConfiguration } from "./_NetworkFrameworkConfiguration";
import { _VotingPolicy } from "./_VotingPolicy";
import { _MemberConfiguration } from "./_MemberConfiguration";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateNetworkInput shape
 */
export interface CreateNetworkInput {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the operation. An idempotent operation completes no more than one time. This identifier is required only if you make a service request directly using an HTTP client. It is generated automatically if you use an AWS SDK or the AWS CLI.</p>
   */
  ClientRequestToken: string;

  /**
   * <p>The name of the network.</p>
   */
  Name: string;

  /**
   * <p>An optional description for the network.</p>
   */
  Description?: string;

  /**
   * <p>The blockchain framework that the network uses.</p>
   */
  Framework: "HYPERLEDGER_FABRIC" | string;

  /**
   * <p>The version of the blockchain framework that the network uses.</p>
   */
  FrameworkVersion: string;

  /**
   * <p> Configuration properties of the blockchain framework relevant to the network configuration. </p>
   */
  FrameworkConfiguration?: _NetworkFrameworkConfiguration;

  /**
   * <p> The voting rules used by the network to determine if a proposal is approved. </p>
   */
  VotingPolicy: _VotingPolicy;

  /**
   * <p>Configuration properties for the first member within the network.</p>
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
