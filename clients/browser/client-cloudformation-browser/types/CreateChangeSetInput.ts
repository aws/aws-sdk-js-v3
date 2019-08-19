import { _Parameter } from "./_Parameter";
import { _RollbackConfiguration } from "./_RollbackConfiguration";
import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The input for the <a>CreateChangeSet</a> action.</p>
 */
export interface CreateChangeSetInput {
  /**
   * <p>The name or the unique ID of the stack for which you are creating a change set. AWS CloudFormation generates the change set by comparing this stack's information with the information that you submit, such as a modified template or different parameter input values.</p>
   */
  StackName: string;

  /**
   * <p>A structure that contains the body of the revised template, with a minimum length of 1 byte and a maximum length of 51,200 bytes. AWS CloudFormation generates the change set by comparing this template with the template of the stack that you specified.</p> <p>Conditional: You must specify only <code>TemplateBody</code> or <code>TemplateURL</code>.</p>
   */
  TemplateBody?: string;

  /**
   * <p>The location of the file that contains the revised template. The URL must point to a template (max size: 460,800 bytes) that is located in an S3 bucket. AWS CloudFormation generates the change set by comparing this template with the stack that you specified.</p> <p>Conditional: You must specify only <code>TemplateBody</code> or <code>TemplateURL</code>.</p>
   */
  TemplateURL?: string;

  /**
   * <p>Whether to reuse the template that is associated with the stack to create the change set.</p>
   */
  UsePreviousTemplate?: boolean;

  /**
   * <p>A list of <code>Parameter</code> structures that specify input parameters for the change set. For more information, see the <a>Parameter</a> data type.</p>
   */
  Parameters?: Array<_Parameter> | Iterable<_Parameter>;

  /**
   * <p>In some cases, you must explicity acknowledge that your stack template contains certain capabilities in order for AWS CloudFormation to create the stack.</p> <ul> <li> <p> <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code> </p> <p>Some stack templates might include resources that can affect permissions in your AWS account; for example, by creating new AWS Identity and Access Management (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities.</p> <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p> <ul> <li> <p>If you have IAM resources, you can specify either capability. </p> </li> <li> <p>If you have IAM resources with custom names, you <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>. </p> </li> <li> <p>If you don't specify either of these capabilities, AWS CloudFormation returns an <code>InsufficientCapabilities</code> error.</p> </li> </ul> <p>If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html"> AWS::IAM::AccessKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html"> AWS::IAM::Group</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html"> AWS::IAM::Policy</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html"> AWS::IAM::Role</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html"> AWS::IAM::User</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p> </li> <li> <p> <code>CAPABILITY_AUTO_EXPAND</code> </p> <p>Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by AWS CloudFormation.</p> <note> <p>This capacity does not apply to creating change sets, and specifying it when creating change sets has no effect.</p> <p>Also, change sets do not currently support nested stacks. If you want to create a stack from a stack template that contains macros <i>and</i> nested stacks, you must create or update the stack directly from the template using the <a>CreateStack</a> or <a>UpdateStack</a> action, and specifying this capability.</p> </note> <p>For more information on macros, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using AWS CloudFormation Macros to Perform Custom Processing on Templates</a>.</p> </li> </ul>
   */
  Capabilities?:
    | Array<
        | "CAPABILITY_IAM"
        | "CAPABILITY_NAMED_IAM"
        | "CAPABILITY_AUTO_EXPAND"
        | string
      >
    | Iterable<
        | "CAPABILITY_IAM"
        | "CAPABILITY_NAMED_IAM"
        | "CAPABILITY_AUTO_EXPAND"
        | string
      >;

  /**
   * <p>The template resource types that you have permissions to work with if you execute this change set, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>.</p> <p>If the list of resource types doesn't include a resource type that you're updating, the stack update fails. By default, AWS CloudFormation grants permissions to all resource types. AWS Identity and Access Management (IAM) uses this parameter for condition keys in IAM policies for AWS CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with AWS Identity and Access Management</a> in the AWS CloudFormation User Guide.</p>
   */
  ResourceTypes?: Array<string> | Iterable<string>;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that AWS CloudFormation assumes when executing the change set. AWS CloudFormation uses the role's credentials to make calls on your behalf. AWS CloudFormation uses this role for all future operations on the stack. As long as users have permission to operate on the stack, AWS CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p> <p>If you don't specify a value, AWS CloudFormation uses the role that was previously associated with the stack. If no role is available, AWS CloudFormation uses a temporary session that is generated from your user credentials.</p>
   */
  RoleARN?: string;

  /**
   * <p>The rollback triggers for AWS CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: _RollbackConfiguration;

  /**
   * <p>The Amazon Resource Names (ARNs) of Amazon Simple Notification Service (Amazon SNS) topics that AWS CloudFormation associates with the stack. To remove all associated notification topics, specify an empty list.</p>
   */
  NotificationARNs?: Array<string> | Iterable<string>;

  /**
   * <p>Key-value pairs to associate with this stack. AWS CloudFormation also propagates these tags to resources in the stack. You can specify a maximum of 50 tags.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The name of the change set. The name must be unique among all change sets that are associated with the specified stack.</p> <p>A change set name can contain only alphanumeric, case sensitive characters and hyphens. It must start with an alphabetic character and cannot exceed 128 characters.</p>
   */
  ChangeSetName: string;

  /**
   * <p>A unique identifier for this <code>CreateChangeSet</code> request. Specify this token if you plan to retry requests so that AWS CloudFormation knows that you're not attempting to create another change set with the same name. You might retry <code>CreateChangeSet</code> requests to ensure that AWS CloudFormation successfully received them.</p>
   */
  ClientToken?: string;

  /**
   * <p>A description to help you identify this change set.</p>
   */
  Description?: string;

  /**
   * <p>The type of change set operation. To create a change set for a new stack, specify <code>CREATE</code>. To create a change set for an existing stack, specify <code>UPDATE</code>.</p> <p>If you create a change set for a new stack, AWS Cloudformation creates a stack with a unique stack ID, but no template or resources. The stack will be in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-describing-stacks.html#d0e11995"> <code>REVIEW_IN_PROGRESS</code> </a> state until you execute the change set.</p> <p>By default, AWS CloudFormation specifies <code>UPDATE</code>. You can't use the <code>UPDATE</code> type to create a change set for a new stack or the <code>CREATE</code> type to create a change set for an existing stack.</p>
   */
  ChangeSetType?: "CREATE" | "UPDATE" | string;

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
