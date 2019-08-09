import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Input to the <code>MergeDeveloperIdentities</code> action.</p>
 */
export interface MergeDeveloperIdentitiesInput {
  /**
   * <p>User identifier for the source user. The value should be a <code>DeveloperUserIdentifier</code>.</p>
   */
  SourceUserIdentifier: string;

  /**
   * <p>User identifier for the destination user. The value should be a <code>DeveloperUserIdentifier</code>.</p>
   */
  DestinationUserIdentifier: string;

  /**
   * <p>The "domain" by which Cognito will refer to your users. This is a (pseudo) domain name that you provide while creating an identity pool. This name acts as a placeholder that allows your backend and the Cognito service to communicate about the developer provider. For the <code>DeveloperProviderName</code>, you can use letters as well as period (.), underscore (_), and dash (-).</p>
   */
  DeveloperProviderName: string;

  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   */
  IdentityPoolId: string;

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
