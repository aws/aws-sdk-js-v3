import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPoliciesGrantingServiceAccessInput shape
 */
export interface ListPoliciesGrantingServiceAccessInput {
  /**
   * <p>Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.</p>
   */
  Marker?: string;

  /**
   * <p>The ARN of the IAM identity (user, group, or role) whose policies you want to list.</p>
   */
  Arn: string;

  /**
   * <p>The service namespace for the AWS services whose policies you want to list.</p> <p>To learn the service namespace for a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions, Resources, and Condition Keys for AWS Services</a> in the <i>IAM User Guide</i>. Choose the name of the service to view details for that service. In the first paragraph, find the service prefix. For example, <code>(service prefix: a4b)</code>. For more information about service namespaces, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ServiceNamespaces: Array<string> | Iterable<string>;

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
