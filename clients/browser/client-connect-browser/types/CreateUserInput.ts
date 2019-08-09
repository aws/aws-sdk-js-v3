import { _UserIdentityInfo } from "./_UserIdentityInfo";
import { _UserPhoneConfig } from "./_UserPhoneConfig";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateUserInput shape
 */
export interface CreateUserInput {
  /**
   * <p>The user name in Amazon Connect for the account to create. If you are using SAML for identity management in your Amazon Connect, the value for <code>Username</code> can include up to 64 characters from [a-zA-Z0-9_-.\@]+.</p>
   */
  Username: string;

  /**
   * <p>The password for the user account to create. This is required if you are using Amazon Connect for identity management. If you are using SAML for identity management and include this parameter, an <code>InvalidRequestException</code> is returned.</p>
   */
  Password?: string;

  /**
   * <p>Information about the user, including email address, first name, and last name.</p>
   */
  IdentityInfo?: _UserIdentityInfo;

  /**
   * <p>Specifies the phone settings for the user, including <code>AfterContactWorkTimeLimit</code>, <code>AutoAccept</code>, <code>DeskPhoneNumber</code>, and <code>PhoneType</code>.</p>
   */
  PhoneConfig: _UserPhoneConfig;

  /**
   * <p>The unique identifier for the user account in the directory service directory used for identity management. If Amazon Connect is unable to access the existing directory, you can use the <code>DirectoryUserId</code> to authenticate users. If you include the parameter, it is assumed that Amazon Connect cannot access the directory. If the parameter is not included, the <code>UserIdentityInfo</code> is used to authenticate users from your existing directory.</p> <p>This parameter is required if you are using an existing directory for identity management in Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an <code>InvalidRequestException</code> is returned.</p>
   */
  DirectoryUserId?: string;

  /**
   * <p>The unique identifier of the security profile to assign to the user created.</p>
   */
  SecurityProfileIds: Array<string> | Iterable<string>;

  /**
   * <p>The unique identifier for the routing profile to assign to the user created.</p>
   */
  RoutingProfileId: string;

  /**
   * <p>The unique identifier for the hierarchy group to assign to the user created.</p>
   */
  HierarchyGroupId?: string;

  /**
   * <p>The identifier for your Amazon Connect instance. To find the ID of your instance, open the AWS console and select Amazon Connect. Select the alias of the instance in the Instance alias column. The instance ID is displayed in the Overview section of your instance settings. For example, the instance ID is the set of characters at the end of the instance ARN, after instance/, such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.</p>
   */
  InstanceId: string;

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
