import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegisterUserInput shape
 */
export interface RegisterUserInput {
  /**
   * <p>Amazon QuickSight supports several ways of managing the identity of users. This parameter accepts two values:</p> <ul> <li> <p> <code>IAM</code>: A user whose identity maps to an existing IAM user or role. </p> </li> <li> <p> <code>QUICKSIGHT</code>: A user whose identity is owned and managed internally by Amazon QuickSight. </p> </li> </ul>
   */
  IdentityType: "IAM" | "QUICKSIGHT" | string;

  /**
   * <p>The email address of the user that you want to register.</p>
   */
  Email: string;

  /**
   * <p>The Amazon QuickSight role of the user. The user role can be one of the following:</p> <ul> <li> <p> <code>READER</code>: A user who has read-only access to dashboards.</p> </li> <li> <p> <code>AUTHOR</code>: A user who can create data sources, data sets, analyses, and dashboards.</p> </li> <li> <p> <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight settings.</p> </li> </ul>
   */
  UserRole:
    | "ADMIN"
    | "AUTHOR"
    | "READER"
    | "RESTRICTED_AUTHOR"
    | "RESTRICTED_READER"
    | string;

  /**
   * <p>The ARN of the IAM user or role that you are registering with Amazon QuickSight. </p>
   */
  IamArn?: string;

  /**
   * <p>You need to use this parameter only when you register one or more users using an assumed IAM role. You don't need to provide the session name for other scenarios, for example when you are registering an IAM user or an Amazon QuickSight user. You can register multiple users using the same IAM role if each user has a different session name. For more information on assuming IAM roles, see <a href="https://docs.aws.amazon.com/cli/latest/reference/sts/assume-role.html"> <code>assume-role</code> </a> in the <i>AWS CLI Reference.</i> </p>
   */
  SessionName?: string;

  /**
   * <p>The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.</p>
   */
  AwsAccountId: string;

  /**
   * <p>The namespace. Currently, you should set this to <code>default</code>.</p>
   */
  Namespace: string;

  /**
   * <p>The Amazon QuickSight user name that you want to create for the user you are registering.</p>
   */
  UserName?: string;

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
