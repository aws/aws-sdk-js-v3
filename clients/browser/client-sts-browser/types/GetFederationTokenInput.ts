import { _PolicyDescriptorType } from "./_PolicyDescriptorType";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFederationTokenInput shape
 */
export interface GetFederationTokenInput {
  /**
   * <p>The name of the federated user. The name is used as an identifier for the temporary security credentials (such as <code>Bob</code>). For example, you can reference the federated user name in a resource-based policy, such as in an Amazon S3 bucket policy.</p> <p>The regex used to validate this parameter is a string of characters consisting of upper- and lower-case alphanumeric characters with no spaces. You can also include underscores or any of the following characters: =,.@-</p>
   */
  Name: string;

  /**
   * <p>An IAM policy in JSON format that you want to use as an inline session policy.</p> <p>You must pass an inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policy</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policies to use as managed session policies.</p> <p>This parameter is optional. However, if you do not pass any session policies, then the resulting federated user session has no permissions. The only exception is when the credentials are used to access a resource that has a resource-based policy that specifically references the federated user session in the <code>Principal</code> element of the policy.</p> <p>When you pass session policies, the session permissions are the intersection of the IAM user policies and the session policies that you pass. This gives you a way to further restrict the permissions for a federated user. You cannot use session policies to grant more permissions than those that are defined in the permissions policy of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <p>The plain text that you use for both inline and managed session policies shouldn't exceed 2048 characters. The JSON policy characters can be any ASCII character from the space character to the end of the valid character list (\u0020 through \u00FF). It can also include the tab (\u0009), linefeed (\u000A), and carriage return (\u000D) characters.</p> <note> <p>The characters in this parameter count towards the 2048 character session policy guideline. However, an AWS conversion compresses the session policies into a packed binary format that has a separate limit. This is the enforced limit. The <code>PackedPolicySize</code> response element indicates by percentage how close the policy is to the upper size limit.</p> </note>
   */
  Policy?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of the IAM managed policies that you want to use as a managed session policy. The policies must exist in the same account as the IAM user that is requesting federated access.</p> <p>You must pass an inline or managed <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">session policy</a> to this operation. You can pass a single JSON policy document to use as an inline session policy. You can also specify up to 10 managed policies to use as managed session policies. The plain text that you use for both inline and managed session policies shouldn't exceed 2048 characters. You can provide up to 10 managed policy ARNs. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service Namespaces</a> in the AWS General Reference.</p> <p>This parameter is optional. However, if you do not pass any session policies, then the resulting federated user session has no permissions. The only exception is when the credentials are used to access a resource that has a resource-based policy that specifically references the federated user session in the <code>Principal</code> element of the policy.</p> <p>When you pass session policies, the session permissions are the intersection of the IAM user policies and the session policies that you pass. This gives you a way to further restrict the permissions for a federated user. You cannot use session policies to grant more permissions than those that are defined in the permissions policy of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session">Session Policies</a> in the <i>IAM User Guide</i>.</p> <note> <p>The characters in this parameter count towards the 2048 character session policy guideline. However, an AWS conversion compresses the session policies into a packed binary format that has a separate limit. This is the enforced limit. The <code>PackedPolicySize</code> response element indicates by percentage how close the policy is to the upper size limit.</p> </note>
   */
  PolicyArns?: Array<_PolicyDescriptorType> | Iterable<_PolicyDescriptorType>;

  /**
   * <p>The duration, in seconds, that the session should last. Acceptable durations for federation sessions range from 900 seconds (15 minutes) to 129,600 seconds (36 hours), with 43,200 seconds (12 hours) as the default. Sessions obtained using AWS account root user credentials are restricted to a maximum of 3,600 seconds (one hour). If the specified duration is longer than one hour, the session obtained by using root user credentials defaults to one hour.</p>
   */
  DurationSeconds?: number;

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
