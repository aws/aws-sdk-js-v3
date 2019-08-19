import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A complex type that contains information about that can be associated with your hosted zone.</p>
 */
export interface ListVPCAssociationAuthorizationsInput {
  /**
   * <p>The ID of the hosted zone for which you want a list of VPCs that can be associated with the hosted zone.</p>
   */
  HostedZoneId: string;

  /**
   * <p> <i>Optional</i>: If a response includes a <code>NextToken</code> element, there are more VPCs that can be associated with the specified hosted zone. To get the next page of results, submit another request, and include the value of <code>NextToken</code> from the response in the <code>nexttoken</code> parameter in another <code>ListVPCAssociationAuthorizations</code> request.</p>
   */
  NextToken?: string;

  /**
   * <p> <i>Optional</i>: An integer that specifies the maximum number of VPCs that you want Amazon Route 53 to return. If you don't specify a value for <code>MaxResults</code>, Route 53 returns up to 50 VPCs per page.</p>
   */
  MaxResults?: string;

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
