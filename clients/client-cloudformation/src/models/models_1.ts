// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudFormationServiceException as __BaseException } from "./CloudFormationServiceException";

import {
  AutoDeployment,
  CallAs,
  Capability,
  DeploymentTargets,
  ManagedExecution,
  Parameter,
  PermissionModels,
  ResourceDefinition,
  RollbackConfiguration,
  StackSetOperationPreferences,
  Tag,
  TemplateConfiguration,
  ThirdPartyType,
} from "./models_0";

/**
 * @public
 * <p>The limit on resource scans has been exceeded. Reasons include:</p>
 *          <ul>
 *             <li>
 *                <p>Exceeded the daily quota for resource scans.</p>
 *             </li>
 *             <li>
 *                <p>A resource scan recently failed. You must wait 10 minutes before starting a new resource scan.</p>
 *             </li>
 *             <li>
 *                <p>The last resource scan failed after exceeding 100,000 resources. When this happens, you must wait 24 hours
 *      before starting a new resource scan.</p>
 *             </li>
 *          </ul>
 */
export class ResourceScanLimitExceededException extends __BaseException {
  readonly name: "ResourceScanLimitExceededException" = "ResourceScanLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceScanLimitExceededException, __BaseException>) {
    super({
      name: "ResourceScanLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceScanLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartResourceScanInput {
  /**
   * @public
   * <p>A unique identifier for this <code>StartResourceScan</code> request. Specify this token if you plan to retry
   *    requests so that CloudFormation knows that you're not attempting to start a new resource scan.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface StartResourceScanOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource scan. The format is
   *    <code>arn:$\{Partition\}:cloudformation:$\{Region\}:$\{Account\}:resourceScan/$\{Id\}</code>. An example is
   *    <code>arn:aws:cloudformation:<i>us-east-1</i>:<i>123456789012</i>:resourceScan/<i>f5b490f7-7ed4-428a-aa06-31ff25db0772</i>
   *             </code>.</p>
   */
  ResourceScanId?: string;
}

/**
 * @public
 */
export interface StopStackSetOperationInput {
  /**
   * @public
   * <p>The name or unique ID of the stack set that you want to stop the operation for.</p>
   */
  StackSetName: string | undefined;

  /**
   * @public
   * <p>The ID of the stack operation.</p>
   */
  OperationId: string | undefined;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *    management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *      administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs;
}

/**
 * @public
 */
export interface StopStackSetOperationOutput {}

/**
 * @public
 */
export interface TestTypeInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The type of the extension to test.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
   */
  Type?: ThirdPartyType;

  /**
   * @public
   * <p>The name of the extension to test.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The version of the extension to test.</p>
   *          <p>You can specify the version id with either <code>Arn</code>, or with <code>TypeName</code> and
   *    <code>Type</code>.</p>
   *          <p>If you don't specify a version, CloudFormation uses the default version of the extension in this account and Region
   *    for testing.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>The S3 bucket to which CloudFormation delivers the contract test execution logs.</p>
   *          <p>CloudFormation delivers the logs by the time contract testing has completed and the extension has been assigned a
   *    test type status of <code>PASSED</code> or <code>FAILED</code>.</p>
   *          <p>The user calling <code>TestType</code> must be able to access items in the specified S3 bucket. Specifically,
   *    the user needs the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>GetObject</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PutObject</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html">Actions, Resources, and Condition Keys for Amazon S3</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>.</p>
   */
  LogDeliveryBucket?: string;
}

/**
 * @public
 */
export interface TestTypeOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   */
  TypeVersionArn?: string;
}

/**
 * @public
 */
export interface UpdateGeneratedTemplateInput {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of a generated template.</p>
   */
  GeneratedTemplateName: string | undefined;

  /**
   * @public
   * <p>An optional new name to assign to the generated template.</p>
   */
  NewGeneratedTemplateName?: string;

  /**
   * @public
   * <p>An optional list of resources to be added to the generated template.</p>
   */
  AddResources?: ResourceDefinition[];

  /**
   * @public
   * <p>A list of logical ids for resources to remove from the generated template.</p>
   */
  RemoveResources?: string[];

  /**
   * @public
   * <p>If <code>true</code>, update the resource properties in the generated template with their current live state.
   *    This feature is useful when the resource properties in your generated a template does not reflect the live state of
   *    the resource properties. This happens when a user update the resource properties after generating a template.</p>
   */
  RefreshAllResources?: boolean;

  /**
   * @public
   * <p>The configuration details of the generated template, including the <code>DeletionPolicy</code> and
   *    <code>UpdateReplacePolicy</code>.</p>
   */
  TemplateConfiguration?: TemplateConfiguration;
}

/**
 * @public
 */
export interface UpdateGeneratedTemplateOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the generated template. The format is
   *    <code>arn:$\{Partition\}:cloudformation:$\{Region\}:$\{Account\}:generatedtemplate/$\{Id\}</code>. For example,
   *    <code>arn:aws:cloudformation:<i>us-east-1</i>:<i>123456789012</i>:generatedtemplate/<i>2e8465c1-9a80-43ea-a3a3-4f2d692fe6dc</i>
   *             </code>.</p>
   */
  GeneratedTemplateId?: string;
}

/**
 * @public
 * <p>The input for an <a>UpdateStack</a> action.</p>
 */
export interface UpdateStackInput {
  /**
   * @public
   * <p>The name or unique stack ID of the stack to update.</p>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.
   *    (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the
   *    <i>CloudFormation User Guide</i>.)</p>
   *          <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>,
   *    <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>
   */
  TemplateBody?: string;

  /**
   * @public
   * <p>Location of file containing the template body. The URL must point to a template that's located in an Amazon S3 bucket or a Systems Manager document. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the
   *    <i>CloudFormation User Guide</i>. The location for an Amazon S3 bucket must start with <code>https://</code>.</p>
   *          <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>,
   *    <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>
   */
  TemplateURL?: string;

  /**
   * @public
   * <p>Reuse the existing template that is associated with the stack that you are updating.</p>
   *          <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>,
   *    <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>
   */
  UsePreviousTemplate?: boolean;

  /**
   * @public
   * <p>Structure containing the temporary overriding stack policy body. You can specify either the
   *    <code>StackPolicyDuringUpdateBody</code> or the <code>StackPolicyDuringUpdateURL</code> parameter, but not
   *    both.</p>
   *          <p>If you want to update protected resources, specify a temporary overriding stack policy during this update. If
   *    you don't specify a stack policy, the current policy that is associated with the stack will be used.</p>
   */
  StackPolicyDuringUpdateBody?: string;

  /**
   * @public
   * <p>Location of a file containing the temporary overriding stack policy. The URL must point to a policy (max size:
   *    16KB) located in an S3 bucket in the same Region as the stack. The location for an Amazon S3 bucket must start with
   *    <code>https://</code>. You can specify either the <code>StackPolicyDuringUpdateBody</code> or the
   *    <code>StackPolicyDuringUpdateURL</code> parameter, but not both.</p>
   *          <p>If you want to update protected resources, specify a temporary overriding stack policy during this update. If
   *    you don't specify a stack policy, the current policy that is associated with the stack will be used.</p>
   */
  StackPolicyDuringUpdateURL?: string;

  /**
   * @public
   * <p>A list of <code>Parameter</code> structures that specify input parameters for the stack. For more information,
   *    see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">
   *                <code>Parameter</code>
   *             </a>
   *    data type.</p>
   */
  Parameters?: Parameter[];

  /**
   * @public
   * <p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order
   *    for CloudFormation to update the stack.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in your Amazon Web Services account;
   *      for example, by creating new Identity and Access Management (IAM) users. For those stacks, you must explicitly
   *      acknowledge this by specifying one of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or
   *      <code>CAPABILITY_NAMED_IAM</code> capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i> specify
   *        <code>CAPABILITY_NAMED_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
   *        <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we suggest that you review all permissions associated with
   *      them and edit their permissions if necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html">
   *                            <code>AWS::IAM::AccessKey</code>
   *                         </a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">
   *                            <code>AWS::IAM::Group</code>
   *                         </a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">
   *                            <code>AWS::IAM::InstanceProfile</code>
   *                         </a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html">
   *                            <code>
   *        AWS::IAM::Policy</code>
   *                         </a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">
   *                            <code>AWS::IAM::Role</code>
   *                         </a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html">
   *                            <code>AWS::IAM::User</code>
   *                         </a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">
   *                            <code>AWS::IAM::UserToGroupAddition</code>
   *                         </a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in
   *      CloudFormation Templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some template contain macros. Macros perform custom processing on templates; this can include simple actions
   *      like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this,
   *      users typically create a change set from the processed template, so that they can review the changes resulting from
   *      the macros before actually updating the stack. If your stack template contains one or more macros, and you choose
   *      to update a stack directly from the processed template, without first reviewing the resulting changes in a change
   *      set, you must acknowledge this capability. This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">
   *                      <code>AWS::Include</code>
   *                   </a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">
   *                      <code>AWS::Serverless</code>
   *                   </a> transforms, which
   *      are macros hosted by CloudFormation.</p>
   *                <p>If you want to update a stack from a stack template that contains macros <i>and</i> nested
   *      stacks, you must update the stack directly from the template using this capability.</p>
   *                <important>
   *                   <p>You should only update stacks directly from a stack template that contains macros if you know what processing
   *       the macro performs.</p>
   *                   <p>Each macro relies on an underlying Lambda service function for processing stack templates. Be
   *       aware that the Lambda function owner can update the function operation without CloudFormation being
   *       notified.</p>
   *                </important>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using CloudFormation Macros to Perform Custom Processing
   *      on Templates</a>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Only one of the <code>Capabilities</code> and <code>ResourceType</code> parameters can be specified.</p>
   *          </note>
   */
  Capabilities?: Capability[];

  /**
   * @public
   * <p>The template resource types that you have permissions to work with for this update stack action, such as
   *    <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>.</p>
   *          <p>If the list of resource types doesn't include a resource that you're updating, the stack update fails. By
   *    default, CloudFormation grants permissions to all resource types. Identity and Access Management (IAM) uses this parameter for
   *    CloudFormation-specific condition keys in IAM policies. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with Identity and Access Management</a>.</p>
   *          <note>
   *             <p>Only one of the <code>Capabilities</code> and <code>ResourceType</code> parameters can be specified.</p>
   *          </note>
   */
  ResourceTypes?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFormation assumes to
   *    update the stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always uses this role
   *    for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses
   *    this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.</p>
   *          <p>If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role
   *    is available, CloudFormation uses a temporary session that is generated from your user credentials.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the
   *    specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

  /**
   * @public
   * <p>Structure containing a new stack policy body. You can specify either the <code>StackPolicyBody</code> or the
   *    <code>StackPolicyURL</code> parameter, but not both.</p>
   *          <p>You might update the stack policy, for example, in order to protect a new resource that you created during a
   *    stack update. If you don't specify a stack policy, the current policy that is associated with the stack is
   *    unchanged.</p>
   */
  StackPolicyBody?: string;

  /**
   * @public
   * <p>Location of a file containing the updated stack policy. The URL must point to a policy (max size: 16KB) located
   *    in an S3 bucket in the same Region as the stack. The location for an Amazon S3 bucket must start with
   *    <code>https://</code>. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code>
   *    parameter, but not both.</p>
   *          <p>You might update the stack policy, for example, in order to protect a new resource that you created during a
   *    stack update. If you don't specify a stack policy, the current policy that is associated with the stack is
   *    unchanged.</p>
   */
  StackPolicyURL?: string;

  /**
   * @public
   * <p>Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that CloudFormation associates with the stack.
   *    Specify an empty list to remove all notification topics.</p>
   */
  NotificationARNs?: string[];

  /**
   * @public
   * <p>Key-value pairs to associate with this stack. CloudFormation also propagates these tags to supported resources in the
   *    stack. You can specify a maximum number of 50 tags.</p>
   *          <p>If you don't specify this parameter, CloudFormation doesn't modify the stack's tags. If you specify an empty value,
   *    CloudFormation removes all associated tags.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Preserve the state of previously provisioned resources when an operation fails.</p>
   *          <p>Default: <code>False</code>
   *          </p>
   */
  DisableRollback?: boolean;

  /**
   * @public
   * <p>A unique identifier for this <code>UpdateStack</code> request. Specify this token if you plan to retry requests
   *    so that CloudFormation knows that you're not attempting to update a stack with the same name. You might retry
   *    <code>UpdateStack</code> requests to ensure that CloudFormation successfully received them.</p>
   *          <p>All events triggered by a given stack operation are assigned the same client request token, which you can use to
   *    track operations. For example, if you execute a <code>CreateStack</code> operation with the token
   *    <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have
   *    <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are
   *    initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you
   *    easily identify the stack operation . For example, if you create a stack using the console, each stack event would be
   *    assigned the same token in the following format:
   *    <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>When set to <code>true</code>, newly created resources are deleted when the operation rolls back. This includes
   *    newly created resources marked with a deletion policy of <code>Retain</code>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  RetainExceptOnCreate?: boolean;
}

/**
 * @public
 * <p>The output for an <a>UpdateStack</a> action.</p>
 */
export interface UpdateStackOutput {
  /**
   * @public
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;
}

/**
 * @public
 */
export interface UpdateStackInstancesInput {
  /**
   * @public
   * <p>The name or unique ID of the stack set associated with the stack instances.</p>
   */
  StackSetName: string | undefined;

  /**
   * @public
   * <p>[Self-managed permissions] The names of one or more Amazon Web Services accounts for which you want to update
   *    parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the
   *    specified accounts and Amazon Web Services Regions.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
   */
  Accounts?: string[];

  /**
   * @public
   * <p>[Service-managed permissions] The Organizations accounts for which you want to update parameter values
   *    for stack instances. If your update targets OUs, the overridden parameter values only apply to the accounts that are
   *    currently in the target OUs and their child OUs. Accounts added to the target OUs and their child OUs in the future
   *    won't use the overridden values.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
   */
  DeploymentTargets?: DeploymentTargets;

  /**
   * @public
   * <p>The names of one or more Amazon Web Services Regions in which you want to update parameter values for stack
   *    instances. The overridden parameter values will be applied to all stack instances in the specified accounts and
   *    Amazon Web Services Regions.</p>
   */
  Regions: string[] | undefined;

  /**
   * @public
   * <p>A list of input parameters whose values you want to update for the specified stack instances.</p>
   *          <p>Any overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions. When specifying parameters and their values, be aware of how CloudFormation sets parameter values
   *    during stack instance update operations:</p>
   *          <ul>
   *             <li>
   *                <p>To override the current value for a parameter, include the parameter and specify its value.</p>
   *             </li>
   *             <li>
   *                <p>To leave an overridden parameter set to its present value, include the parameter and specify
   *      <code>UsePreviousValue</code> as <code>true</code>. (You can't specify both a value and set
   *      <code>UsePreviousValue</code> to <code>true</code>.)</p>
   *             </li>
   *             <li>
   *                <p>To set an overridden parameter back to the value specified in the stack set, specify a parameter list but
   *      don't include the parameter in the list.</p>
   *             </li>
   *             <li>
   *                <p>To leave all parameters set to their present values, don't specify this property at all.</p>
   *             </li>
   *          </ul>
   *          <p>During stack set updates, any parameter values overridden for a stack instance aren't updated, but retain their
   *    overridden value.</p>
   *          <p>You can only override the parameter <i>values</i> that are specified in the stack set; to add or
   *    delete a parameter itself, use <code>UpdateStackSet</code> to update the stack set template. If you add a parameter
   *    to a template, before you can override the parameter value specified in the stack set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">
   *                <code>UpdateStackSet</code>
   *             </a> to
   *    update all stack instances with the updated template and parameter value specified in the stack set. Once a stack
   *    instance has been updated with the new parameter, you can then override the parameter value using
   *    <code>UpdateStackInstances</code>.</p>
   */
  ParameterOverrides?: Parameter[];

  /**
   * @public
   * <p>Preferences for how CloudFormation performs this stack set operation.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * @public
   * <p>The unique identifier for this stack set operation.</p>
   *          <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the stack set
   *    operation only once, even if you retry the request multiple times. You might retry stack set operation requests to
   *    ensure that CloudFormation successfully received them.</p>
   *          <p>If you don't specify an operation ID, the SDK generates one automatically.</p>
   */
  OperationId?: string;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *    management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *      administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs;
}

/**
 * @public
 */
export interface UpdateStackInstancesOutput {
  /**
   * @public
   * <p>The unique identifier for this stack set operation.</p>
   */
  OperationId?: string;
}

/**
 * @public
 */
export interface UpdateStackSetInput {
  /**
   * @public
   * <p>The name or unique ID of the stack set that you want to update.</p>
   */
  StackSetName: string | undefined;

  /**
   * @public
   * <p>A brief description of updates that you are making.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200
   *    bytes. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the
   *    CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or
   *    <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true.</p>
   */
  TemplateBody?: string;

  /**
   * @public
   * <p>The location of the file that contains the template body. The URL must point to a template (maximum size:
   *    460,800 bytes) that is located in an Amazon S3 bucket or a Systems Manager document. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template
   *    Anatomy</a> in the CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or
   *    <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true.</p>
   */
  TemplateURL?: string;

  /**
   * @public
   * <p>Use the existing template that's associated with the stack set that you're updating.</p>
   *          <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or
   *    <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true.</p>
   */
  UsePreviousTemplate?: boolean;

  /**
   * @public
   * <p>A list of input parameters for the stack set template.</p>
   */
  Parameters?: Parameter[];

  /**
   * @public
   * <p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order
   *    for CloudFormation to update the stack set and its associated stack instances.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in your Amazon Web Services account;
   *      for example, by creating new Identity and Access Management (IAM) users. For those stacks sets, you must explicitly
   *      acknowledge this by specifying one of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or
   *      <code>CAPABILITY_NAMED_IAM</code> capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i> specify
   *        <code>CAPABILITY_NAMED_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
   *        <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we recommend that you review all permissions associated with
   *      them and edit their permissions if necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html">
   *                            <code>AWS::IAM::AccessKey</code>
   *                         </a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">
   *                            <code>AWS::IAM::Group</code>
   *                         </a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">
   *                            <code>AWS::IAM::InstanceProfile</code>
   *                         </a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html">
   *                            <code>AWS::IAM::Policy</code>
   *                         </a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">
   *                            <code>AWS::IAM::Role</code>
   *                         </a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html">
   *                            <code>AWS::IAM::User</code>
   *                         </a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">
   *                            <code>AWS::IAM::UserToGroupAddition</code>
   *                         </a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in
   *      CloudFormation Templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some templates reference macros. If your stack set template references one or more macros, you must update the
   *      stack set directly from the processed template, without first reviewing the resulting changes in a change set. To
   *      update the stack set directly, you must acknowledge this capability. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using CloudFormation Macros to
   *      Perform Custom Processing on Templates</a>.</p>
   *                <important>
   *                   <p>Stack sets with service-managed permissions do not currently support the use of macros in templates. (This
   *       includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">
   *                         <code>AWS::Include</code>
   *                      </a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">
   *                         <code>AWS::Serverless</code>
   *                      </a> transforms, which
   *       are macros hosted by CloudFormation.) Even if you specify this capability for a stack set with service-managed permissions,
   *       if you reference a macro in your template the stack set operation will fail.</p>
   *                </important>
   *             </li>
   *          </ul>
   */
  Capabilities?: Capability[];

  /**
   * @public
   * <p>The key-value pairs to associate with this stack set and the stacks created from it. CloudFormation also propagates these
   *    tags to supported resources that are created in the stacks. You can specify a maximum number of 50 tags.</p>
   *          <p>If you specify tags for this parameter, those tags replace any list of tags that are currently associated with
   *    this stack set. This means:</p>
   *          <ul>
   *             <li>
   *                <p>If you don't specify this parameter, CloudFormation doesn't modify the stack's tags.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <i>any</i> tags using this parameter, you must specify <i>all</i>
   *      the tags that you want associated with this stack set, even tags you've specified before (for example, when
   *      creating the stack set or during a previous update of the stack set.). Any tags that you don't include in the
   *      updated list of tags are removed from the stack set, and therefore from the stacks and resources as well.</p>
   *             </li>
   *             <li>
   *                <p>If you specify an empty value, CloudFormation removes all currently associated tags.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify new tags as part of an <code>UpdateStackSet</code> action, CloudFormation checks to see if you have the
   *    required IAM permission to tag resources. If you omit tags that are currently associated with the stack set from
   *    the list of tags you specify, CloudFormation assumes that you want to remove those tags from the stack set, and checks to see
   *    if you have permission to untag resources. If you don't have the necessary permission(s), the entire
   *    <code>UpdateStackSet</code> action fails with an <code>access denied</code> error, and the stack set is not
   *    updated.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Preferences for how CloudFormation performs this stack set operation.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role to use to update this stack set.</p>
   *          <p>Specify an IAM role only if you are using customized administrator roles to control which users or groups can
   *    manage specific stack sets within the same administrator account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html">Granting Permissions for Stack
   *    Set Operations</a> in the <i>CloudFormation User Guide</i>.</p>
   *          <p>If you specified a customized administrator role when you created the stack set, you must specify a customized
   *    administrator role, even if it is the same customized administrator role used with this stack set previously.</p>
   */
  AdministrationRoleARN?: string;

  /**
   * @public
   * <p>The name of the IAM execution role to use to update the stack set. If you do not specify an execution role,
   *    CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role for the stack set operation.</p>
   *          <p>Specify an IAM role only if you are using customized execution roles to control which stack resources users
   *    and groups can include in their stack sets.</p>
   *          <p>If you specify a customized execution role, CloudFormation uses that role to update the stack. If you do not specify a
   *    customized execution role, CloudFormation performs the update using the role previously associated with the stack set, so long
   *    as you have permissions to perform operations on the stack set.</p>
   */
  ExecutionRoleName?: string;

  /**
   * @public
   * <p>[Service-managed permissions] The Organizations accounts in which to update associated stack
   *    instances.</p>
   *          <p>To update all the stack instances associated with this stack set, do not specify <code>DeploymentTargets</code>
   *    or <code>Regions</code>.</p>
   *          <p>If the stack set update includes changes to the template (that is, if <code>TemplateBody</code> or
   *    <code>TemplateURL</code> is specified), or the <code>Parameters</code>, CloudFormation marks all stack instances with a status
   *    of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and Amazon Web Services Regions. If the stack set update doesn't include changes to the template or parameters, CloudFormation updates the stack instances
   *    in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance
   *    status.</p>
   */
  DeploymentTargets?: DeploymentTargets;

  /**
   * @public
   * <p>Describes how the IAM roles required for stack set operations are created. You cannot modify
   *    <code>PermissionModel</code> if there are stack instances associated with your stack set.</p>
   *          <ul>
   *             <li>
   *                <p>With <code>self-managed</code> permissions, you must create the administrator and execution roles required to
   *      deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant Self-Managed Stack Set
   *      Permissions</a>.</p>
   *             </li>
   *             <li>
   *                <p>With <code>service-managed</code> permissions, StackSets automatically creates the IAM roles required to
   *      deploy to accounts managed by Organizations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant Service-Managed Stack Set
   *      Permissions</a>.</p>
   *             </li>
   *          </ul>
   */
  PermissionModel?: PermissionModels;

  /**
   * @public
   * <p>[Service-managed permissions] Describes whether StackSets automatically deploys to Organizations
   *    accounts that are added to a target organization or organizational unit (OU).</p>
   *          <p>If you specify <code>AutoDeployment</code>, don't specify <code>DeploymentTargets</code> or
   *    <code>Regions</code>.</p>
   */
  AutoDeployment?: AutoDeployment;

  /**
   * @public
   * <p>The unique ID for this stack set operation.</p>
   *          <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the stack set
   *    operation only once, even if you retry the request multiple times. You might retry stack set operation requests to
   *    ensure that CloudFormation successfully received them.</p>
   *          <p>If you don't specify an operation ID, CloudFormation generates one automatically.</p>
   *          <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is
   *    <code>OUTDATED</code>.</p>
   */
  OperationId?: string;

  /**
   * @public
   * <p>[Self-managed permissions] The accounts in which to update associated stack instances. If you specify accounts,
   *    you must also specify the Amazon Web Services Regions in which to update stack set instances.</p>
   *          <p>To update <i>all</i> the stack instances associated with this stack set, don't specify the
   *    <code>Accounts</code> or <code>Regions</code> properties.</p>
   *          <p>If the stack set update includes changes to the template (that is, if the <code>TemplateBody</code> or
   *    <code>TemplateURL</code> properties are specified), or the <code>Parameters</code> property, CloudFormation marks all stack
   *    instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and
   *    Amazon Web Services Regions. If the stack set update does not include changes to the template or parameters, CloudFormation
   *    updates the stack instances in the specified accounts and Amazon Web Services Regions, while leaving all other stack
   *    instances with their existing stack instance status.</p>
   */
  Accounts?: string[];

  /**
   * @public
   * <p>The Amazon Web Services Regions in which to update associated stack instances. If you specify Regions, you must
   *    also specify accounts in which to update stack set instances.</p>
   *          <p>To update <i>all</i> the stack instances associated with this stack set, do not specify the
   *    <code>Accounts</code> or <code>Regions</code> properties.</p>
   *          <p>If the stack set update includes changes to the template (that is, if the <code>TemplateBody</code> or
   *    <code>TemplateURL</code> properties are specified), or the <code>Parameters</code> property, CloudFormation marks all stack
   *    instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and
   *    Regions. If the stack set update does not include changes to the template or parameters, CloudFormation updates the stack
   *    instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack
   *    instance status.</p>
   */
  Regions?: string[];

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *    management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *      administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs;

  /**
   * @public
   * <p>Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting
   *    operations.</p>
   */
  ManagedExecution?: ManagedExecution;
}

/**
 * @public
 */
export interface UpdateStackSetOutput {
  /**
   * @public
   * <p>The unique ID for this stack set operation.</p>
   */
  OperationId?: string;
}

/**
 * @public
 */
export interface UpdateTerminationProtectionInput {
  /**
   * @public
   * <p>Whether to enable termination protection on the specified stack.</p>
   */
  EnableTerminationProtection: boolean | undefined;

  /**
   * @public
   * <p>The name or unique ID of the stack for which you want to set termination protection.</p>
   */
  StackName: string | undefined;
}

/**
 * @public
 */
export interface UpdateTerminationProtectionOutput {
  /**
   * @public
   * <p>The unique ID of the stack.</p>
   */
  StackId?: string;
}

/**
 * @public
 * <p>The input for <a>ValidateTemplate</a> action.</p>
 */
export interface ValidateTemplateInput {
  /**
   * @public
   * <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For
   *    more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the <i>CloudFormation User Guide</i>.</p>
   *          <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only
   *    <code>TemplateBody</code> is used.</p>
   */
  TemplateBody?: string;

  /**
   * @public
   * <p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that
   *    is located in an Amazon S3 bucket or a Systems Manager document. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the
   *    <i>CloudFormation User Guide</i>. The location for an Amazon S3 bucket must start with <code>https://</code>.</p>
   *          <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only
   *    <code>TemplateBody</code> is used.</p>
   */
  TemplateURL?: string;
}

/**
 * @public
 * <p>The TemplateParameter data type.</p>
 */
export interface TemplateParameter {
  /**
   * @public
   * <p>The name associated with the parameter.</p>
   */
  ParameterKey?: string;

  /**
   * @public
   * <p>The default value associated with the parameter.</p>
   */
  DefaultValue?: string;

  /**
   * @public
   * <p>Flag indicating whether the parameter should be displayed as plain text in logs and UIs.</p>
   */
  NoEcho?: boolean;

  /**
   * @public
   * <p>User defined description associated with the parameter.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>The output for <a>ValidateTemplate</a> action.</p>
 */
export interface ValidateTemplateOutput {
  /**
   * @public
   * <p>A list of <code>TemplateParameter</code> structures.</p>
   */
  Parameters?: TemplateParameter[];

  /**
   * @public
   * <p>The description found within the template.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The capabilities found within the template. If your template contains IAM resources, you must specify the
   *    CAPABILITY_IAM or CAPABILITY_NAMED_IAM value for this parameter when you use the <a>CreateStack</a> or
   *    <a>UpdateStack</a> actions with your template; otherwise, those actions return an InsufficientCapabilities
   *    error.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in
   *    CloudFormation Templates</a>.</p>
   */
  Capabilities?: Capability[];

  /**
   * @public
   * <p>The list of resources that generated the values in the <code>Capabilities</code> response element.</p>
   */
  CapabilitiesReason?: string;

  /**
   * @public
   * <p>A list of the transforms that are declared in the template.</p>
   */
  DeclaredTransforms?: string[];
}
