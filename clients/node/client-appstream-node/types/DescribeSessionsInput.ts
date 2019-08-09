import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSessionsInput shape
 */
export interface DescribeSessionsInput {
  /**
   * <p>The name of the stack. This value is case-sensitive.</p>
   */
  StackName: string;

  /**
   * <p>The name of the fleet. This value is case-sensitive.</p>
   */
  FleetName: string;

  /**
   * <p>The user identifier.</p>
   */
  UserId?: string;

  /**
   * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
   */
  NextToken?: string;

  /**
   * <p>The size of each page of results. The default value is 20 and the maximum value is 50.</p>
   */
  Limit?: number;

  /**
   * <p>The authentication method. Specify <code>API</code> for a user authenticated using a streaming URL or <code>SAML</code> for a SAML federated user. The default is to authenticate users using a streaming URL.</p>
   */
  AuthenticationType?: "API" | "SAML" | "USERPOOL" | string;

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
