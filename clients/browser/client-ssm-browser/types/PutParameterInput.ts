import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutParameterInput shape
 */
export interface PutParameterInput {
  /**
   * <p>The fully qualified name of the parameter that you want to add to the system. The fully qualified name includes the complete hierarchy of the parameter path and name. For example: <code>/Dev/DBServer/MySQL/db-string13</code> </p> <p>Naming Constraints:</p> <ul> <li> <p>Parameter names are case sensitive.</p> </li> <li> <p>A parameter name must be unique within an AWS Region</p> </li> <li> <p>A parameter name can't be prefixed with "aws" or "ssm" (case-insensitive).</p> </li> <li> <p>Parameter names can include only the following symbols and letters: <code>a-zA-Z0-9_.-/</code> </p> </li> <li> <p>A parameter name can't include spaces.</p> </li> <li> <p>Parameter hierarchies are limited to a maximum depth of fifteen levels.</p> </li> </ul> <p>For additional information about valid values for parameter names, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html">Requirements and Constraints for Parameter Names</a> in the <i>AWS Systems Manager User Guide</i>.</p> <note> <p>The maximum length constraint listed below includes capacity for additional system attributes that are not part of the name. The maximum length for the fully qualified parameter name is 1011 characters. </p> </note>
   */
  Name: string;

  /**
   * <p>Information about the parameter that you want to add to the system. Optional but recommended.</p> <important> <p>Do not enter personally identifiable information in this field.</p> </important>
   */
  Description?: string;

  /**
   * <p>The parameter value that you want to add to the system. Standard parameters have a value limit of 4 KB. Advanced parameters have a value limit of 8 KB.</p>
   */
  Value: string;

  /**
   * <p>The type of parameter that you want to add to the system.</p> <p>Items in a <code>StringList</code> must be separated by a comma (,). You can't use other punctuation or special character to escape items in the list. If you have a parameter value that requires a comma, then use the <code>String</code> data type.</p> <note> <p> <code>SecureString</code> is not currently supported for AWS CloudFormation templates or in the China Regions.</p> </note>
   */
  Type: "String" | "StringList" | "SecureString" | string;

  /**
   * <p>The KMS Key ID that you want to use to encrypt a parameter. Either the default AWS Key Management Service (AWS KMS) key automatically assigned to your AWS account or a custom key. Required for parameters that use the <code>SecureString</code> data type.</p> <p>If you don't specify a key ID, the system uses the default key associated with your AWS account.</p> <ul> <li> <p>To use your default AWS KMS key, choose the <code>SecureString</code> data type, and do <i>not</i> specify the <code>Key ID</code> when you create the parameter. The system automatically populates <code>Key ID</code> with your default KMS key.</p> </li> <li> <p>To use a custom KMS key, choose the <code>SecureString</code> data type with the <code>Key ID</code> parameter.</p> </li> </ul>
   */
  KeyId?: string;

  /**
   * <p>Overwrite an existing parameter. If not specified, will default to "false".</p>
   */
  Overwrite?: boolean;

  /**
   * <p>A regular expression used to validate the parameter value. For example, for String types with values restricted to numbers, you can specify the following: AllowedPattern=^\d+$ </p>
   */
  AllowedPattern?: string;

  /**
   * <p>Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a Systems Manager parameter to identify the type of resource to which it applies, the environment, or the type of configuration data referenced by the parameter. In this case, you could specify the following key name/value pairs:</p> <ul> <li> <p> <code>Key=Resource,Value=S3bucket</code> </p> </li> <li> <p> <code>Key=OS,Value=Windows</code> </p> </li> <li> <p> <code>Key=ParameterType,Value=LicenseKey</code> </p> </li> </ul> <note> <p>To add tags to an existing Systems Manager parameter, use the <a>AddTagsToResource</a> action.</p> </note>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>Parameter Store offers a standard tier and an advanced tier for parameters. Standard parameters have a value limit of 4 KB and can't be configured to use parameter policies. You can create a maximum of 10,000 standard parameters per account and per Region. Standard parameters are offered at no additional cost.</p> <p>Advanced parameters have a value limit of 8 KB and can be configured to use parameter policies. You can create a maximum of 100,000 advanced parameters per account and per Region. Advanced parameters incur a charge.</p> <p>If you don't specify a parameter tier when you create a new parameter, the parameter defaults to using the standard tier. You can change a standard parameter to an advanced parameter at any time. But you can't revert an advanced parameter to a standard parameter. Reverting an advanced parameter to a standard parameter would result in data loss because the system would truncate the size of the parameter from 8 KB to 4 KB. Reverting would also remove any policies attached to the parameter. Lastly, advanced parameters use a different form of encryption than standard parameters.</p> <p>If you no longer need an advanced parameter, or if you no longer want to incur charges for an advanced parameter, you must delete it and recreate it as a new standard parameter. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html">About Advanced Parameters</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  Tier?: "Standard" | "Advanced" | string;

  /**
   * <p>One or more policies to apply to a parameter. This action takes a JSON array. Parameter Store supports the following policy types:</p> <p>Expiration: This policy deletes the parameter after it expires. When you create the policy, you specify the expiration date. You can update the expiration date and time by updating the policy. Updating the <i>parameter</i> does not affect the expiration date and time. When the expiration time is reached, Parameter Store deletes the parameter.</p> <p>ExpirationNotification: This policy triggers an event in Amazon CloudWatch Events that notifies you about the expiration. By using this policy, you can receive notification before or after the expiration time is reached, in units of days or hours.</p> <p>NoChangeNotification: This policy triggers a CloudWatch event if a parameter has not been modified for a specified period of time. This policy type is useful when, for example, a secret needs to be changed within a period of time, but it has not been changed.</p> <p>All existing policies are preserved until you send new policies or an empty policy. For more information about parameter policies, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-su-policies.html">Working with Parameter Policies</a>. </p>
   */
  Policies?: string;

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
