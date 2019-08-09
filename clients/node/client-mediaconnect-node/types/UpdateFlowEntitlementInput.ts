import { _UpdateEncryption } from "./_UpdateEncryption";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * The entitlement fields that you want to update.
 */
export interface UpdateFlowEntitlementInput {
  /**
   * A description of the entitlement. This description appears only on the AWS Elemental MediaConnect console and will not be seen by the subscriber or end user.
   */
  Description?: string;

  /**
   * The type of encryption that will be used on the output associated with this entitlement.
   */
  Encryption?: _UpdateEncryption;

  /**
   * The ARN of the entitlement that you want to update.
   */
  EntitlementArn: string;

  /**
   * The flow that is associated with the entitlement that you want to update.
   */
  FlowArn: string;

  /**
   * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
   */
  Subscribers?: Array<string> | Iterable<string>;

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
