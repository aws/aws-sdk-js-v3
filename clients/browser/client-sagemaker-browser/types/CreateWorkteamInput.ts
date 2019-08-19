import { _MemberDefinition } from "./_MemberDefinition";
import { _NotificationConfiguration } from "./_NotificationConfiguration";
import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateWorkteamInput shape
 */
export interface CreateWorkteamInput {
  /**
   * <p>The name of the work team. Use this name to identify the work team.</p>
   */
  WorkteamName: string;

  /**
   * <p>A list of <code>MemberDefinition</code> objects that contains objects that identify the Amazon Cognito user pool that makes up the work team. For more information, see <a href="http://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito User Pools</a>.</p> <p>All of the <code>CognitoMemberDefinition</code> objects that make up the member definition must have the same <code>ClientId</code> and <code>UserPool</code> values.</p>
   */
  MemberDefinitions: Array<_MemberDefinition> | Iterable<_MemberDefinition>;

  /**
   * <p>A description of the work team.</p>
   */
  Description: string;

  /**
   * <p>Configures notification of workers regarding available or expiring work items.</p>
   */
  NotificationConfiguration?: _NotificationConfiguration;

  /**
   * <p/>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

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
