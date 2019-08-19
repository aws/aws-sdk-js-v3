import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Input to the <code>LookupDeveloperIdentityInput</code> action.</p>
 */
export interface LookupDeveloperIdentityInput {
  /**
   * <p>An identity pool ID in the format REGION:GUID.</p>
   */
  IdentityPoolId: string;

  /**
   * <p>A unique identifier in the format REGION:GUID.</p>
   */
  IdentityId?: string;

  /**
   * <p>A unique ID used by your backend authentication process to identify a user. Typically, a developer identity provider would issue many developer user identifiers, in keeping with the number of users.</p>
   */
  DeveloperUserIdentifier?: string;

  /**
   * <p>The maximum number of identities to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A pagination token. The first call you make will have <code>NextToken</code> set to null. After that the service will return <code>NextToken</code> values as needed. For example, let's say you make a request with <code>MaxResults</code> set to 10, and there are 20 matches in the database. The service will return a pagination token as a part of the response. This token can be used to call the API again and get results starting from the 11th match.</p>
   */
  NextToken?: string;

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
