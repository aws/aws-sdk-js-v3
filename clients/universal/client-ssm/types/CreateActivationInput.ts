import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateActivationInput shape
 */
export interface CreateActivationInput {
  /**
   * <p>A user-defined description of the resource that you want to register with Amazon EC2. </p> <important> <p>Do not enter personally identifiable information in this field.</p> </important>
   */
  Description?: string;

  /**
   * <p>The name of the registered, managed instance as it will appear in the Amazon EC2 console or when you use the AWS command line tools to list EC2 resources.</p> <important> <p>Do not enter personally identifiable information in this field.</p> </important>
   */
  DefaultInstanceName?: string;

  /**
   * <p>The Amazon Identity and Access Management (IAM) role that you want to assign to the managed instance. </p>
   */
  IamRole: string;

  /**
   * <p>Specify the maximum number of managed instances you want to register. The default value is 1 instance.</p>
   */
  RegistrationLimit?: number;

  /**
   * <p>The date by which this activation request should expire. The default value is 24 hours.</p>
   */
  ExpirationDate?: Date | string | number;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag an activation to identify which servers or virtual machines (VMs) in your on-premises environment you intend to activate. In this case, you could specify the following key name/value pairs:</p> <ul> <li> <p> <code>Key=OS,Value=Windows</code> </p> </li> <li> <p> <code>Key=Environment,Value=Production</code> </p> </li> </ul> <important> <p>When you install SSM Agent on your on-premises servers and VMs, you specify an activation ID and code. When you specify the activation ID and code, tags assigned to the activation are automatically applied to the on-premises servers or VMs.</p> </important> <p>You can't add tags to or delete tags from an existing activation. You can tag your on-premises servers and VMs after they connect to Systems Manager for the first time and are assigned a managed instance ID. This means they are listed in the AWS Systems Manager console with an ID that is prefixed with "mi-". For information about how to add tags to your managed instances, see <a>AddTagsToResource</a>. For information about how to remove tags from your managed instances, see <a>RemoveTagsFromResource</a>.</p>
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
