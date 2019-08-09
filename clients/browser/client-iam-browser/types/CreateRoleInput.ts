import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateRoleInput shape
 */
export interface CreateRoleInput {
  /**
   * <p> The path to the role. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>.</p> <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  Path?: string;

  /**
   * <p>The name of the role to create.</p> <p>IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both "MyResource" and "myresource".</p>
   */
  RoleName: string;

  /**
   * <p>The trust relationship policy document that grants an entity permission to assume the role.</p> <p>In IAM, you must provide a JSON policy that has been converted to a string. However, for AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> used to validate this parameter is a string of characters consisting of the following:</p> <ul> <li> <p>Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range</p> </li> <li> <p>The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF)</p> </li> <li> <p>The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D)</p> </li> </ul> <p> Upon success, the response includes the same trust policy as a URL-encoded JSON string.</p>
   */
  AssumeRolePolicyDocument: string;

  /**
   * <p>A description of the role.</p>
   */
  Description?: string;

  /**
   * <p>The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours.</p> <p>Anyone who assumes the role from the AWS CLI or API can use the <code>DurationSeconds</code> API parameter or the <code>duration-seconds</code> CLI parameter to request a longer session. The <code>MaxSessionDuration</code> setting determines the maximum duration that can be requested using the <code>DurationSeconds</code> parameter. If users don't specify a value for the <code>DurationSeconds</code> parameter, their security credentials are valid for one hour by default. This applies when you use the <code>AssumeRole*</code> API operations or the <code>assume-role*</code> CLI operations but does not apply when you use those operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the <i>IAM User Guide</i>.</p>
   */
  MaxSessionDuration?: number;

  /**
   * <p>The ARN of the policy that is used to set the permissions boundary for the role.</p>
   */
  PermissionsBoundary?: string;

  /**
   * <p>A list of tags that you want to attach to the newly created role. Each tag consists of a key name and an associated value. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p> <note> <p>If any one of the tags is invalid or if you exceed the allowed number of tags per role, then the entire request fails and the role is not created.</p> </note>
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
