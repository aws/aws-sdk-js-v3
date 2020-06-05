import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Structure that contains the results of the account gate function which AWS
 *          CloudFormation invokes, if present, before proceeding with a stack set operation in an
 *          account and region.</p>
 *          <p>For each account and region, AWS CloudFormation lets you specify a Lamdba function
 *          that encapsulates any requirements that must be met before CloudFormation can proceed with
 *          a stack set operation in that account and region. CloudFormation invokes the function each
 *          time a stack set operation is requested for that account and region; if the function
 *          returns <code>FAILED</code>, CloudFormation cancels the operation in that account and
 *          region, and sets the stack set operation result status for that account and region to
 *             <code>FAILED</code>. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html">Configuring a
 *             target account gate</a>.</p>
 */
export interface AccountGateResult {
  __type?: "AccountGateResult";
  /**
   * <p>The status of the account gate function.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The account gate function has determined that the
   *                account and region passes any requirements for a stack set operation to occur. AWS
   *                CloudFormation proceeds with the stack operation in that account and region.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The account gate function has determined that the account
   *                and region does not meet the requirements for a stack set operation to occur. AWS
   *                CloudFormation cancels the stack set operation in that account and region, and sets
   *                the stack set operation result status for that account and region to
   *                   <code>FAILED</code>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIPPED</code>: AWS CloudFormation has skipped calling the account gate
   *                function for this account and region, for one of the following reasons:</p>
   *                <ul>
   *                   <li>
   *                      <p>An account gate function has not been specified for the account and
   *                      region. AWS CloudFormation proceeds with the stack set operation in this
   *                      account and region.</p>
   *                   </li>
   *                   <li>
   *                      <p>The <code>AWSCloudFormationStackSetExecutionRole</code> of the stack set
   *                      adminstration account lacks permissions to invoke the function. AWS
   *                      CloudFormation proceeds with the stack set operation in this account and
   *                      region.</p>
   *                   </li>
   *                   <li>
   *                      <p>Either no action is necessary, or no action is possible, on the stack.
   *                      AWS CloudFormation skips the stack set operation in this account and
   *                      region.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Status?: AccountGateStatus | string;

  /**
   * <p>The reason for the account gate status assigned to this account and region for the
   *          stack set operation.</p>
   */
  StatusReason?: string;
}

export namespace AccountGateResult {
  export const filterSensitiveLog = (obj: AccountGateResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccountGateResult =>
    __isa(o, "AccountGateResult");
}

export type AccountGateStatus = "FAILED" | "SKIPPED" | "SUCCEEDED";

/**
 * <p>The AccountLimit data type. </p>
 *          <p>CloudFormation has the following limits per account:</p>
 *          <ul>
 *             <li>
 *                <p>Number of concurrent resources</p>
 *             </li>
 *             <li>
 *                <p>Number of stacks</p>
 *             </li>
 *             <li>
 *                <p>Number of stack outputs</p>
 *             </li>
 *          </ul>
 *          <p>For more information about these account limits, and other CloudFormation limits, see
 *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">AWS CloudFormation
 *             Limits</a> in the <i>AWS CloudFormation User Guide</i>.</p>
 */
export interface AccountLimit {
  __type?: "AccountLimit";
  /**
   * <p>The name of the account limit.</p>
   *          <p>Values: <code>ConcurrentResourcesLimit</code> | <code>StackLimit</code> |
   *             <code>StackOutputsLimit</code>
   *          </p>
   */
  Name?: string;

  /**
   * <p>The value that is associated with the account limit name.</p>
   */
  Value?: number;
}

export namespace AccountLimit {
  export const filterSensitiveLog = (obj: AccountLimit): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccountLimit => __isa(o, "AccountLimit");
}

/**
 * <p>The resource with the name requested already exists.</p>
 */
export interface AlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace AlreadyExistsException {
  export const filterSensitiveLog = (obj: AlreadyExistsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is AlreadyExistsException =>
    __isa(o, "AlreadyExistsException");
}

/**
 * <p>The input for the <a>CancelUpdateStack</a> action.</p>
 */
export interface CancelUpdateStackInput {
  __type?: "CancelUpdateStackInput";
  /**
   * <p>A unique identifier for this <code>CancelUpdateStack</code> request. Specify this
   *          token if you plan to retry requests so that AWS CloudFormation knows that you're not
   *          attempting to cancel an update on a stack with the same name. You might retry
   *             <code>CancelUpdateStack</code> requests to ensure that AWS CloudFormation successfully
   *          received them.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The name or the unique stack ID that is associated with the stack.</p>
   */
  StackName: string | undefined;
}

export namespace CancelUpdateStackInput {
  export const filterSensitiveLog = (obj: CancelUpdateStackInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelUpdateStackInput =>
    __isa(o, "CancelUpdateStackInput");
}

export enum Capability {
  CAPABILITY_AUTO_EXPAND = "CAPABILITY_AUTO_EXPAND",
  CAPABILITY_IAM = "CAPABILITY_IAM",
  CAPABILITY_NAMED_IAM = "CAPABILITY_NAMED_IAM"
}

/**
 * <p>An error occurred during a CloudFormation registry operation.</p>
 */
export interface CFNRegistryException
  extends __SmithyException,
    $MetadataBearer {
  name: "CFNRegistryException";
  $fault: "client";
  Message?: string;
}

export namespace CFNRegistryException {
  export const filterSensitiveLog = (obj: CFNRegistryException): any => ({
    ...obj
  });
  export const isa = (o: any): o is CFNRegistryException =>
    __isa(o, "CFNRegistryException");
}

/**
 * <p>The <code>Change</code> structure describes the changes AWS CloudFormation will
 *          perform if you execute the change set.</p>
 */
export interface Change {
  __type?: "Change";
  /**
   * <p>A <code>ResourceChange</code> structure that describes the resource and action that
   *          AWS CloudFormation will perform.</p>
   */
  ResourceChange?: ResourceChange;

  /**
   * <p>The type of entity that AWS CloudFormation changes. Currently, the only entity type
   *          is <code>Resource</code>.</p>
   */
  Type?: ChangeType | string;
}

export namespace Change {
  export const filterSensitiveLog = (obj: Change): any => ({
    ...obj
  });
  export const isa = (o: any): o is Change => __isa(o, "Change");
}

export enum ChangeAction {
  Add = "Add",
  Import = "Import",
  Modify = "Modify",
  Remove = "Remove"
}

/**
 * <p>The specified change set name or ID doesn't exit. To view valid change sets for a
 *          stack, use the <code>ListChangeSets</code> action.</p>
 */
export interface ChangeSetNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ChangeSetNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ChangeSetNotFoundException {
  export const filterSensitiveLog = (obj: ChangeSetNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ChangeSetNotFoundException =>
    __isa(o, "ChangeSetNotFoundException");
}

export enum ChangeSetStatus {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_PENDING = "CREATE_PENDING",
  DELETE_COMPLETE = "DELETE_COMPLETE",
  FAILED = "FAILED"
}

/**
 * <p>The <code>ChangeSetSummary</code> structure describes a change set, its status, and
 *          the stack with which it's associated.</p>
 */
export interface ChangeSetSummary {
  __type?: "ChangeSetSummary";
  /**
   * <p>The ID of the change set.</p>
   */
  ChangeSetId?: string;

  /**
   * <p>The name of the change set.</p>
   */
  ChangeSetName?: string;

  /**
   * <p>The start time when the change set was created, in UTC.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Descriptive information about the change set.</p>
   */
  Description?: string;

  /**
   * <p>If the change set execution status is <code>AVAILABLE</code>, you can execute the
   *          change set. If you can’t execute the change set, the status indicates why. For example, a
   *          change set might be in an <code>UNAVAILABLE</code> state because AWS CloudFormation is
   *          still creating it or in an <code>OBSOLETE</code> state because the stack was already
   *          updated.</p>
   */
  ExecutionStatus?: ExecutionStatus | string;

  /**
   * <p>The ID of the stack with which the change set is associated.</p>
   */
  StackId?: string;

  /**
   * <p>The name of the stack with which the change set is associated.</p>
   */
  StackName?: string;

  /**
   * <p>The state of the change set, such as <code>CREATE_IN_PROGRESS</code>,
   *             <code>CREATE_COMPLETE</code>, or <code>FAILED</code>.</p>
   */
  Status?: ChangeSetStatus | string;

  /**
   * <p>A description of the change set's status. For example, if your change set is in the
   *             <code>FAILED</code> state, AWS CloudFormation shows the error message.</p>
   */
  StatusReason?: string;
}

export namespace ChangeSetSummary {
  export const filterSensitiveLog = (obj: ChangeSetSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is ChangeSetSummary =>
    __isa(o, "ChangeSetSummary");
}

export enum ChangeSetType {
  CREATE = "CREATE",
  IMPORT = "IMPORT",
  UPDATE = "UPDATE"
}

export enum ChangeSource {
  Automatic = "Automatic",
  DirectModification = "DirectModification",
  ParameterReference = "ParameterReference",
  ResourceAttribute = "ResourceAttribute",
  ResourceReference = "ResourceReference"
}

export enum ChangeType {
  Resource = "Resource"
}

/**
 * <p>The input for the <a>ContinueUpdateRollback</a> action.</p>
 */
export interface ContinueUpdateRollbackInput {
  __type?: "ContinueUpdateRollbackInput";
  /**
   * <p>A unique identifier for this <code>ContinueUpdateRollback</code> request. Specify
   *          this token if you plan to retry requests so that AWS CloudFormation knows that you're not
   *          attempting to continue the rollback to a stack with the same name. You might retry
   *             <code>ContinueUpdateRollback</code> requests to ensure that AWS CloudFormation
   *          successfully received them.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>A list of the logical IDs of the resources that AWS CloudFormation skips during the
   *          continue update rollback operation. You can specify only resources that are in the
   *             <code>UPDATE_FAILED</code> state because a rollback failed. You can't specify resources
   *          that are in the <code>UPDATE_FAILED</code> state for other reasons, for example, because an
   *          update was cancelled. To check why a resource update failed, use the <a>DescribeStackResources</a> action, and view the resource status reason. </p>
   *          <important>
   *             <p>Specify this property to skip rolling back resources that AWS CloudFormation can't
   *             successfully roll back. We recommend that you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> troubleshoot</a> resources before skipping them. AWS CloudFormation sets the
   *             status of the specified resources to <code>UPDATE_COMPLETE</code> and continues to roll
   *             back the stack. After the rollback is complete, the state of the skipped resources will
   *             be inconsistent with the state of the resources in the stack template. Before performing
   *             another stack update, you must update the stack or resources to be consistent with each
   *             other. If you don't, subsequent stack updates might fail, and the stack will become
   *             unrecoverable. </p>
   *          </important>
   *          <p>Specify the minimum number of resources required to successfully roll back your
   *          stack. For example, a failed resource update might cause dependent resources to fail. In
   *          this case, it might not be necessary to skip the dependent resources. </p>
   *          <p>To skip resources that are part of nested stacks, use the following format:
   *             <code>NestedStackName.ResourceLogicalID</code>. If you want to specify the logical ID of
   *          a stack resource (<code>Type: AWS::CloudFormation::Stack</code>) in the
   *             <code>ResourcesToSkip</code> list, then its corresponding embedded stack must be in one
   *          of the following states: <code>DELETE_IN_PROGRESS</code>, <code>DELETE_COMPLETE</code>, or
   *             <code>DELETE_FAILED</code>. </p>
   *          <note>
   *             <p>Don't confuse a child stack's name with its corresponding logical ID defined in
   *             the parent stack. For an example of a continue update rollback operation with nested
   *             stacks, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html#nested-stacks">Using ResourcesToSkip to recover a nested stacks hierarchy</a>. </p>
   *          </note>
   */
  ResourcesToSkip?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role
   *          that AWS CloudFormation assumes to roll back the stack. AWS CloudFormation uses the role's
   *          credentials to make calls on your behalf. AWS CloudFormation always uses this role for all
   *          future operations on the stack. As long as users have permission to operate on the stack,
   *          AWS CloudFormation uses this role even if the users don't have permission to pass it.
   *          Ensure that the role grants least privilege.</p>
   *          <p>If you don't specify a value, AWS CloudFormation uses the role that was previously
   *          associated with the stack. If no role is available, AWS CloudFormation uses a temporary
   *          session that is generated from your user credentials.</p>
   */
  RoleARN?: string;

  /**
   * <p>The name or the unique ID of the stack that you want to continue rolling
   *          back.</p>
   *          <note>
   *             <p>Don't specify the name of a nested stack (a stack that was created by using the
   *                <code>AWS::CloudFormation::Stack</code> resource). Instead, use this operation on the
   *             parent stack (the stack that contains the <code>AWS::CloudFormation::Stack</code>
   *             resource).</p>
   *          </note>
   */
  StackName: string | undefined;
}

export namespace ContinueUpdateRollbackInput {
  export const filterSensitiveLog = (
    obj: ContinueUpdateRollbackInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ContinueUpdateRollbackInput =>
    __isa(o, "ContinueUpdateRollbackInput");
}

/**
 * <p>The output for a <a>ContinueUpdateRollback</a> action.</p>
 */
export interface ContinueUpdateRollbackOutput {
  __type?: "ContinueUpdateRollbackOutput";
}

export namespace ContinueUpdateRollbackOutput {
  export const filterSensitiveLog = (
    obj: ContinueUpdateRollbackOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ContinueUpdateRollbackOutput =>
    __isa(o, "ContinueUpdateRollbackOutput");
}

/**
 * <p>The input for the <a>CreateChangeSet</a> action.</p>
 */
export interface CreateChangeSetInput {
  __type?: "CreateChangeSetInput";
  /**
   * <p>In some cases, you must explicitly acknowledge that your stack template contains certain
   *          capabilities in order for AWS CloudFormation to create the stack.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in
   *                your AWS account; for example, by creating new AWS Identity and Access Management
   *                (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one
   *                of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the
   *                   <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code>
   *                capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability. </p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i>
   *                      specify <code>CAPABILITY_NAMED_IAM</code>. </p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, AWS CloudFormation returns an
   *                         <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we recommend that you review
   *                all permissions associated with them and edit their permissions if
   *                necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html">
   *                         AWS::IAM::AccessKey</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">
   *                         AWS::IAM::Group</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html">
   *                         AWS::IAM::Policy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">
   *                         AWS::IAM::Role</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html">
   *                         AWS::IAM::User</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM
   *                   Resources in AWS CloudFormation Templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some template contain macros. Macros perform custom processing on templates; this
   *                can include simple actions like find-and-replace operations, all the way to extensive
   *                transformations of entire templates. Because of this, users typically create a change
   *                set from the processed template, so that they can review the changes resulting from
   *                the macros before actually creating the stack. If your stack template contains one or
   *                more macros, and you choose to create a stack directly from the processed template,
   *                without first reviewing the resulting changes in a change set, you must acknowledge
   *                this capability. This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by AWS CloudFormation.</p>
   *                <note>
   *                   <p>This capacity does not apply to creating change sets, and specifying it when
   *                   creating change sets has no effect.</p>
   *                   <p>Also, change sets do not currently support nested stacks. If you want to create
   *                   a stack from a stack template that contains macros <i>and</i> nested
   *                   stacks, you must create or update the stack directly from the template using the
   *                      <a>CreateStack</a> or <a>UpdateStack</a> action, and
   *                   specifying this capability.</p>
   *                </note>
   *                <p>For more information on macros, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using AWS CloudFormation Macros to
   *                   Perform Custom Processing on Templates</a>.</p>
   *             </li>
   *          </ul>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>The name of the change set. The name must be unique among all change sets that are
   *          associated with the specified stack.</p>
   *          <p>A change set name can contain only alphanumeric, case sensitive characters and
   *          hyphens. It must start with an alphabetic character and cannot exceed 128
   *          characters.</p>
   */
  ChangeSetName: string | undefined;

  /**
   * <p>The type of change set operation. To create a change set for a new stack, specify
   *             <code>CREATE</code>. To create a change set for an existing stack, specify
   *             <code>UPDATE</code>. To create a change set for an import operation, specify
   *             <code>IMPORT</code>.</p>
   *          <p>If you create a change set for a new stack, AWS Cloudformation creates a stack with a
   *          unique stack ID, but no template or resources. The stack will be in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-describing-stacks.html#d0e11995">
   *                <code>REVIEW_IN_PROGRESS</code>
   *             </a> state until you execute the change
   *          set.</p>
   *          <p>By default, AWS CloudFormation specifies <code>UPDATE</code>. You can't use the
   *             <code>UPDATE</code> type to create a change set for a new stack or the
   *             <code>CREATE</code> type to create a change set for an existing stack.</p>
   */
  ChangeSetType?: ChangeSetType | string;

  /**
   * <p>A unique identifier for this <code>CreateChangeSet</code> request. Specify this token
   *          if you plan to retry requests so that AWS CloudFormation knows that you're not attempting
   *          to create another change set with the same name. You might retry
   *             <code>CreateChangeSet</code> requests to ensure that AWS CloudFormation successfully
   *          received them.</p>
   */
  ClientToken?: string;

  /**
   * <p>A description to help you identify this change set.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Names (ARNs) of Amazon Simple Notification Service (Amazon SNS)
   *          topics that AWS CloudFormation associates with the stack. To remove all associated
   *          notification topics, specify an empty list.</p>
   */
  NotificationARNs?: string[];

  /**
   * <p>A list of <code>Parameter</code> structures that specify input parameters for the
   *          change set. For more information, see the <a>Parameter</a> data type.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>The template resource types that you have permissions to work with if you execute
   *          this change set, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or
   *             <code>Custom::MyCustomInstance</code>.</p>
   *          <p>If the list of resource types doesn't include a resource type that you're updating,
   *          the stack update fails. By default, AWS CloudFormation grants permissions to all resource
   *          types. AWS Identity and Access Management (IAM) uses this parameter for condition keys in
   *          IAM policies for AWS CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with
   *             AWS Identity and Access Management</a> in the AWS CloudFormation User
   *          Guide.</p>
   */
  ResourceTypes?: string[];

  /**
   * <p>The resources to import into your stack.</p>
   */
  ResourcesToImport?: ResourceToImport[];

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role
   *          that AWS CloudFormation assumes when executing the change set. AWS CloudFormation uses the
   *          role's credentials to make calls on your behalf. AWS CloudFormation uses this role for all
   *          future operations on the stack. As long as users have permission to operate on the stack,
   *          AWS CloudFormation uses this role even if the users don't have permission to pass it.
   *          Ensure that the role grants least privilege.</p>
   *          <p>If you don't specify a value, AWS CloudFormation uses the role that was previously
   *          associated with the stack. If no role is available, AWS CloudFormation uses a temporary
   *          session that is generated from your user credentials.</p>
   */
  RoleARN?: string;

  /**
   * <p>The rollback triggers for AWS CloudFormation to monitor during stack creation and
   *          updating operations, and for the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

  /**
   * <p>The name or the unique ID of the stack for which you are creating a change set. AWS
   *          CloudFormation generates the change set by comparing this stack's information with the
   *          information that you submit, such as a modified template or different parameter input
   *          values.</p>
   */
  StackName: string | undefined;

  /**
   * <p>Key-value pairs to associate with this stack. AWS CloudFormation also propagates
   *          these tags to resources in the stack. You can specify a maximum of 50 tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A structure that contains the body of the revised template, with a minimum length of
   *          1 byte and a maximum length of 51,200 bytes. AWS CloudFormation generates the change set by
   *          comparing this template with the template of the stack that you specified.</p>
   *          <p>Conditional: You must specify only <code>TemplateBody</code> or
   *             <code>TemplateURL</code>.</p>
   */
  TemplateBody?: string;

  /**
   * <p>The location of the file that contains the revised template. The URL must point to a
   *          template (max size: 460,800 bytes) that is located in an S3 bucket. AWS CloudFormation
   *          generates the change set by comparing this template with the stack that you
   *          specified.</p>
   *          <p>Conditional: You must specify only <code>TemplateBody</code> or
   *             <code>TemplateURL</code>.</p>
   */
  TemplateURL?: string;

  /**
   * <p>Whether to reuse the template that is associated with the stack to create the change
   *          set.</p>
   */
  UsePreviousTemplate?: boolean;
}

export namespace CreateChangeSetInput {
  export const filterSensitiveLog = (obj: CreateChangeSetInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateChangeSetInput =>
    __isa(o, "CreateChangeSetInput");
}

/**
 * <p>The output for the <a>CreateChangeSet</a> action.</p>
 */
export interface CreateChangeSetOutput {
  __type?: "CreateChangeSetOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the change set.</p>
   */
  Id?: string;

  /**
   * <p>The unique ID of the stack.</p>
   */
  StackId?: string;
}

export namespace CreateChangeSetOutput {
  export const filterSensitiveLog = (obj: CreateChangeSetOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateChangeSetOutput =>
    __isa(o, "CreateChangeSetOutput");
}

/**
 * <p>The specified resource exists, but has been changed.</p>
 */
export interface CreatedButModifiedException
  extends __SmithyException,
    $MetadataBearer {
  name: "CreatedButModifiedException";
  $fault: "client";
  Message?: string;
}

export namespace CreatedButModifiedException {
  export const filterSensitiveLog = (
    obj: CreatedButModifiedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatedButModifiedException =>
    __isa(o, "CreatedButModifiedException");
}

/**
 * <p>The input for <a>CreateStack</a> action.</p>
 */
export interface CreateStackInput {
  __type?: "CreateStackInput";
  /**
   * <p>In some cases, you must explicitly acknowledge that your stack template contains certain
   *          capabilities in order for AWS CloudFormation to create the stack.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in
   *                your AWS account; for example, by creating new AWS Identity and Access Management
   *                (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one
   *                of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the
   *                   <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code>
   *                capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability. </p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i>
   *                      specify <code>CAPABILITY_NAMED_IAM</code>. </p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, AWS CloudFormation returns an
   *                         <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we recommend that you review
   *                all permissions associated with them and edit their permissions if
   *                necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html">
   *                         AWS::IAM::AccessKey</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">
   *                         AWS::IAM::Group</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html">
   *                         AWS::IAM::Policy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">
   *                         AWS::IAM::Role</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html">
   *                         AWS::IAM::User</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM
   *                   Resources in AWS CloudFormation Templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some template contain macros. Macros perform custom processing on templates; this
   *                can include simple actions like find-and-replace operations, all the way to extensive
   *                transformations of entire templates. Because of this, users typically create a change
   *                set from the processed template, so that they can review the changes resulting from
   *                the macros before actually creating the stack. If your stack template contains one or
   *                more macros, and you choose to create a stack directly from the processed template,
   *                without first reviewing the resulting changes in a change set, you must acknowledge
   *                this capability. This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by AWS CloudFormation.</p>
   *                <p>Change sets do not currently support nested stacks. If you want to create a stack
   *                from a stack template that contains macros <i>and</i> nested stacks,
   *                you must create the stack directly from the template using this capability.</p>
   *                <important>
   *                   <p>You should only create stacks directly from a stack template that contains
   *                   macros if you know what processing the macro performs.</p>
   *                   <p>Each macro relies on an underlying Lambda service function for processing stack
   *                   templates. Be aware that the Lambda function owner can update the function
   *                   operation without AWS CloudFormation being notified.</p>
   *                </important>
   *                <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using
   *                   AWS CloudFormation Macros to Perform Custom Processing on
   *                Templates</a>.</p>
   *             </li>
   *          </ul>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>A unique identifier for this <code>CreateStack</code> request. Specify this token if
   *          you plan to retry requests so that AWS CloudFormation knows that you're not attempting to
   *          create a stack with the same name. You might retry <code>CreateStack</code> requests to
   *          ensure that AWS CloudFormation successfully received them.</p>
   *          <p>All events triggered by a given stack operation are assigned the same client request
   *          token, which you can use to track operations. For example, if you execute a
   *             <code>CreateStack</code> operation with the token <code>token1</code>, then all the
   *             <code>StackEvents</code> generated by that operation will have
   *             <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab.
   *          Stack operations that are initiated from the console use the token format
   *             <i>Console-StackOperation-ID</i>, which helps you easily identify the
   *          stack operation . For example, if you create a stack using the console, each stack event
   *          would be assigned the same token in the following format:
   *             <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Set to <code>true</code> to disable rollback of the stack if stack creation failed.
   *          You can specify either <code>DisableRollback</code> or <code>OnFailure</code>, but not
   *          both.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  DisableRollback?: boolean;

  /**
   * <p>Whether to enable termination protection on the specified stack. If a user attempts
   *          to delete a stack with termination protection enabled, the operation fails and the stack
   *          remains unchanged. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being
   *             Deleted</a> in the <i>AWS CloudFormation User Guide</i>. Termination protection is
   *          disabled on stacks by default. </p>
   *          <p> For <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>,
   *          termination protection is set on the root stack and cannot be changed directly on the
   *          nested stack.</p>
   */
  EnableTerminationProtection?: boolean;

  /**
   * <p>The Simple Notification Service (SNS) topic ARNs to publish stack related events. You
   *          can find your SNS topic ARNs using the SNS console or your Command Line Interface
   *          (CLI).</p>
   */
  NotificationARNs?: string[];

  /**
   * <p>Determines what action will be taken if stack creation fails. This must be one of:
   *          DO_NOTHING, ROLLBACK, or DELETE. You can specify either <code>OnFailure</code> or
   *             <code>DisableRollback</code>, but not both.</p>
   *          <p>Default: <code>ROLLBACK</code>
   *          </p>
   */
  OnFailure?: OnFailure | string;

  /**
   * <p>A list of <code>Parameter</code> structures that specify input parameters for the
   *          stack. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data
   *          type.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>The template resource types that you have permissions to work with for this create
   *          stack action, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or
   *             <code>Custom::MyCustomInstance</code>. Use the following syntax to describe template
   *          resource types: <code>AWS::*</code> (for all AWS resource), <code>Custom::*</code> (for all
   *          custom resources), <code>Custom::<i>logical_ID</i>
   *             </code> (for a specific custom resource),
   *             <code>AWS::<i>service_name</i>::*</code> (for all resources of a
   *          particular AWS service), and
   *                <code>AWS::<i>service_name</i>::<i>resource_logical_ID</i>
   *             </code> (for a specific AWS resource).</p>
   *          <p>If the list of resource types doesn't include a resource that you're creating, the
   *          stack creation fails. By default, AWS CloudFormation grants permissions to all resource
   *          types. AWS Identity and Access Management (IAM) uses this parameter for AWS
   *          CloudFormation-specific condition keys in IAM policies. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with AWS Identity and Access Management</a>.</p>
   */
  ResourceTypes?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role
   *          that AWS CloudFormation assumes to create the stack. AWS CloudFormation uses the role's
   *          credentials to make calls on your behalf. AWS CloudFormation always uses this role for all
   *          future operations on the stack. As long as users have permission to operate on the stack,
   *          AWS CloudFormation uses this role even if the users don't have permission to pass it.
   *          Ensure that the role grants least privilege.</p>
   *          <p>If you don't specify a value, AWS CloudFormation uses the role that was previously
   *          associated with the stack. If no role is available, AWS CloudFormation uses a temporary
   *          session that is generated from your user credentials.</p>
   */
  RoleARN?: string;

  /**
   * <p>The rollback triggers for AWS CloudFormation to monitor during stack creation and
   *          updating operations, and for the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

  /**
   * <p>The name that is associated with the stack. The name must be unique in the region in
   *          which you are creating the stack.</p>
   *          <note>
   *             <p>A stack name can contain only alphanumeric characters (case sensitive) and
   *             hyphens. It must start with an alphabetic character and cannot be longer than 128
   *             characters.</p>
   *          </note>
   */
  StackName: string | undefined;

  /**
   * <p>Structure containing the stack policy body. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent Updates
   *             to Stack Resources</a> in the <i>AWS CloudFormation User Guide</i>.
   *          You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code>
   *          parameter, but not both.</p>
   */
  StackPolicyBody?: string;

  /**
   * <p>Location of a file containing the stack policy. The URL must point to a policy
   *          (maximum size: 16 KB) located in an S3 bucket in the same region as the stack. You can
   *          specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code>
   *          parameter, but not both.</p>
   */
  StackPolicyURL?: string;

  /**
   * <p>Key-value pairs to associate with this stack. AWS CloudFormation also propagates
   *          these tags to the resources created in the stack. A maximum number of 50 tags can be
   *          specified.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Structure containing the template body with a minimum length of 1 byte and a maximum
   *          length of 51,200 bytes. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the AWS CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify either the <code>TemplateBody</code> or the
   *             <code>TemplateURL</code> parameter, but not both.</p>
   */
  TemplateBody?: string;

  /**
   * <p>Location of file containing the template body. The URL must point to a template (max
   *          size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information, go to
   *          the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the AWS CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify either the <code>TemplateBody</code> or the
   *             <code>TemplateURL</code> parameter, but not both.</p>
   */
  TemplateURL?: string;

  /**
   * <p>The amount of time that can pass before the stack status becomes CREATE_FAILED; if
   *             <code>DisableRollback</code> is not set or is set to <code>false</code>, the stack will
   *          be rolled back.</p>
   */
  TimeoutInMinutes?: number;
}

export namespace CreateStackInput {
  export const filterSensitiveLog = (obj: CreateStackInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateStackInput =>
    __isa(o, "CreateStackInput");
}

export interface CreateStackInstancesInput {
  __type?: "CreateStackInstancesInput";
  /**
   * <p>The names of one or more AWS accounts that you want to create stack instances in the
   *          specified region(s) for.</p>
   */
  Accounts: string[] | undefined;

  /**
   * <p>The unique identifier for this stack set operation. </p>
   *          <p>The operation ID also functions as an idempotency token, to ensure that AWS
   *          CloudFormation performs the stack set operation only once, even if you retry the request
   *          multiple times. You might retry stack set operation requests to ensure that AWS
   *          CloudFormation successfully received them.</p>
   *          <p>If you don't specify an operation ID, the SDK generates one automatically. </p>
   *          <p>Repeating this stack set operation with a new operation ID retries all stack
   *          instances whose status is <code>OUTDATED</code>. </p>
   */
  OperationId?: string;

  /**
   * <p>Preferences for how AWS CloudFormation performs this stack set operation.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * <p>A list of stack set parameters whose values you want to override in the selected
   *          stack instances.</p>
   *          <p>Any overridden parameter values will be applied to all stack instances in the
   *          specified accounts and regions. When specifying parameters and their values, be aware of
   *          how AWS CloudFormation sets parameter values during stack instance operations:</p>
   *          <ul>
   *             <li>
   *                <p>To override the current value for a parameter, include the parameter and
   *                specify its value.</p>
   *             </li>
   *             <li>
   *                <p>To leave a parameter set to its present value, you can do one of the
   *                following:</p>
   *                <ul>
   *                   <li>
   *                      <p>Do not include the parameter in the list.</p>
   *                   </li>
   *                   <li>
   *                      <p>Include the parameter and specify <code>UsePreviousValue</code> as
   *                         <code>true</code>. (You cannot specify both a value and set
   *                         <code>UsePreviousValue</code> to <code>true</code>.)</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>To set all overridden parameter back to the values specified in the stack set,
   *                specify a parameter list but do not include any parameters.</p>
   *             </li>
   *             <li>
   *                <p>To leave all parameters set to their present values, do not specify this
   *                property at all.</p>
   *             </li>
   *          </ul>
   *          <p>During stack set updates, any parameter values overridden for a stack instance are
   *          not updated, but retain their overridden value.</p>
   *          <p>You can only override the parameter <i>values</i> that are specified in
   *          the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template.</p>
   */
  ParameterOverrides?: Parameter[];

  /**
   * <p>The names of one or more regions where you want to create stack instances using the
   *          specified AWS account(s). </p>
   */
  Regions: string[] | undefined;

  /**
   * <p>The name or unique ID of the stack set that you want to create stack instances
   *          from.</p>
   */
  StackSetName: string | undefined;
}

export namespace CreateStackInstancesInput {
  export const filterSensitiveLog = (obj: CreateStackInstancesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateStackInstancesInput =>
    __isa(o, "CreateStackInstancesInput");
}

export interface CreateStackInstancesOutput {
  __type?: "CreateStackInstancesOutput";
  /**
   * <p>The unique identifier for this stack set operation.</p>
   */
  OperationId?: string;
}

export namespace CreateStackInstancesOutput {
  export const filterSensitiveLog = (obj: CreateStackInstancesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateStackInstancesOutput =>
    __isa(o, "CreateStackInstancesOutput");
}

/**
 * <p>The output for a <a>CreateStack</a> action.</p>
 */
export interface CreateStackOutput {
  __type?: "CreateStackOutput";
  /**
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;
}

export namespace CreateStackOutput {
  export const filterSensitiveLog = (obj: CreateStackOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateStackOutput =>
    __isa(o, "CreateStackOutput");
}

export interface CreateStackSetInput {
  __type?: "CreateStackSetInput";
  /**
   * <p>The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. </p>
   *          <p>Specify an IAM role only if you are using customized administrator roles to control
   *          which users or groups can manage specific stack sets within the same administrator account.
   *          For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html">Prerequisites:
   *             Granting Permissions for Stack Set Operations</a> in the
   *             <i>AWS CloudFormation User Guide</i>.</p>
   */
  AdministrationRoleARN?: string;

  /**
   * <p>In some cases, you must explicitly acknowledge that your stack set template contains
   *          certain capabilities in order for AWS CloudFormation to create the stack set and related stack
   *          instances.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in
   *                your AWS account; for example, by creating new AWS Identity and Access Management
   *                (IAM) users. For those stack sets, you must explicitly acknowledge this by specifying
   *                one of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the
   *                   <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code>
   *                capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability. </p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i>
   *                      specify <code>CAPABILITY_NAMED_IAM</code>. </p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, AWS CloudFormation returns an
   *                         <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we recommend that you review
   *                all permissions associated with them and edit their permissions if
   *                necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html">
   *                         AWS::IAM::AccessKey</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">
   *                         AWS::IAM::Group</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html">
   *                         AWS::IAM::Policy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">
   *                         AWS::IAM::Role</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html">
   *                         AWS::IAM::User</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM
   *                   Resources in AWS CloudFormation Templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some templates contain macros. If your stack template contains one or more macros,
   *                and you choose to create a stack directly from the processed template, without first
   *                reviewing the resulting changes in a change set, you must acknowledge this
   *                capability. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using AWS CloudFormation Macros to Perform Custom Processing on
   *                Templates</a>.</p>
   *                <note>
   *                   <p>Stack sets do not currently support macros in stack templates. (This includes
   *                   the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a>
   *                   transforms, which are macros hosted by AWS CloudFormation.) Even if you specify this
   *                   capability, if you include a macro in your template the stack set operation will
   *                   fail.</p>
   *                </note>
   *             </li>
   *          </ul>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>A unique identifier for this <code>CreateStackSet</code> request. Specify this token
   *          if you plan to retry requests so that AWS CloudFormation knows that you're not attempting
   *          to create another stack set with the same name. You might retry <code>CreateStackSet</code>
   *          requests to ensure that AWS CloudFormation successfully received them.</p>
   *          <p>If you don't specify an operation ID, the SDK generates one automatically.
   *       </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>A description of the stack set. You can use the description to identify the stack
   *          set's purpose or other important information.</p>
   */
  Description?: string;

  /**
   * <p>The name of the IAM execution role to use to create the stack set. If you do not specify
   *          an execution role, AWS CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role
   *          for the stack set operation.</p>
   *          <p>Specify an IAM role only if you are using customized execution roles to control which
   *          stack resources users and groups can include in their stack sets.
   *
   *       </p>
   */
  ExecutionRoleName?: string;

  /**
   * <p>The input parameters for the stack set template. </p>
   */
  Parameters?: Parameter[];

  /**
   * <p>The name to associate with the stack set. The name must be unique in the region where
   *          you create your stack set.</p>
   *          <note>
   *             <p>A stack name can contain only alphanumeric characters (case-sensitive) and
   *             hyphens. It must start with an alphabetic character and can't be longer than 128
   *             characters.</p>
   *          </note>
   */
  StackSetName: string | undefined;

  /**
   * <p>The key-value pairs to associate with this stack set and the stacks created from it.
   *          AWS CloudFormation also propagates these tags to supported resources that are created in
   *          the stacks. A maximum number of 50 tags can be specified.</p>
   *          <p>If you specify tags as part of a <code>CreateStackSet</code> action, AWS
   *          CloudFormation checks to see if you have the required IAM permission to tag resources. If
   *          you don't, the entire <code>CreateStackSet</code> action fails with an <code>access
   *             denied</code> error, and the stack set is not created.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The structure that contains the template body, with a minimum length of 1 byte and a
   *          maximum length of 51,200 bytes. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the AWS CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify either the TemplateBody or the TemplateURL parameter,
   *          but not both.</p>
   */
  TemplateBody?: string;

  /**
   * <p>The location of the file that contains the template body. The URL must point to a
   *          template (maximum size: 460,800 bytes) that's located in an Amazon S3 bucket. For more
   *          information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the AWS CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify either the TemplateBody or the TemplateURL parameter,
   *          but not both.</p>
   */
  TemplateURL?: string;
}

export namespace CreateStackSetInput {
  export const filterSensitiveLog = (obj: CreateStackSetInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateStackSetInput =>
    __isa(o, "CreateStackSetInput");
}

export interface CreateStackSetOutput {
  __type?: "CreateStackSetOutput";
  /**
   * <p>The ID of the stack set that you're creating.</p>
   */
  StackSetId?: string;
}

export namespace CreateStackSetOutput {
  export const filterSensitiveLog = (obj: CreateStackSetOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateStackSetOutput =>
    __isa(o, "CreateStackSetOutput");
}

/**
 * <p>The input for the <a>DeleteChangeSet</a> action.</p>
 */
export interface DeleteChangeSetInput {
  __type?: "DeleteChangeSetInput";
  /**
   * <p>The name or Amazon Resource Name (ARN) of the change set that you want to
   *          delete.</p>
   */
  ChangeSetName: string | undefined;

  /**
   * <p>If you specified the name of a change set to delete, specify the stack name or ID
   *          (ARN) that is associated with it.</p>
   */
  StackName?: string;
}

export namespace DeleteChangeSetInput {
  export const filterSensitiveLog = (obj: DeleteChangeSetInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteChangeSetInput =>
    __isa(o, "DeleteChangeSetInput");
}

/**
 * <p>The output for the <a>DeleteChangeSet</a> action.</p>
 */
export interface DeleteChangeSetOutput {
  __type?: "DeleteChangeSetOutput";
}

export namespace DeleteChangeSetOutput {
  export const filterSensitiveLog = (obj: DeleteChangeSetOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteChangeSetOutput =>
    __isa(o, "DeleteChangeSetOutput");
}

/**
 * <p>The input for <a>DeleteStack</a> action.</p>
 */
export interface DeleteStackInput {
  __type?: "DeleteStackInput";
  /**
   * <p>A unique identifier for this <code>DeleteStack</code> request. Specify this token if
   *          you plan to retry requests so that AWS CloudFormation knows that you're not attempting to
   *          delete a stack with the same name. You might retry <code>DeleteStack</code> requests to
   *          ensure that AWS CloudFormation successfully received them.</p>
   *          <p>All events triggered by a given stack operation are assigned the same client request
   *          token, which you can use to track operations. For example, if you execute a
   *             <code>CreateStack</code> operation with the token <code>token1</code>, then all the
   *             <code>StackEvents</code> generated by that operation will have
   *             <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab.
   *          Stack operations that are initiated from the console use the token format
   *             <i>Console-StackOperation-ID</i>, which helps you easily identify the
   *          stack operation . For example, if you create a stack using the console, each stack event
   *          would be assigned the same token in the following format:
   *             <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>For stacks in the <code>DELETE_FAILED</code> state, a list of resource logical IDs
   *          that are associated with the resources you want to retain. During deletion, AWS
   *          CloudFormation deletes the stack but does not delete the retained resources.</p>
   *          <p>Retaining resources is useful when you cannot delete a resource, such as a non-empty
   *          S3 bucket, but you want to delete the stack.</p>
   */
  RetainResources?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role
   *          that AWS CloudFormation assumes to delete the stack. AWS CloudFormation uses the role's
   *          credentials to make calls on your behalf.</p>
   *          <p>If you don't specify a value, AWS CloudFormation uses the role that was previously
   *          associated with the stack. If no role is available, AWS CloudFormation uses a temporary
   *          session that is generated from your user credentials.</p>
   */
  RoleARN?: string;

  /**
   * <p>The name or the unique stack ID that is associated with the stack.</p>
   */
  StackName: string | undefined;
}

export namespace DeleteStackInput {
  export const filterSensitiveLog = (obj: DeleteStackInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteStackInput =>
    __isa(o, "DeleteStackInput");
}

export interface DeleteStackInstancesInput {
  __type?: "DeleteStackInstancesInput";
  /**
   * <p>The names of the AWS accounts that you want to delete stack instances for.</p>
   */
  Accounts: string[] | undefined;

  /**
   * <p>The unique identifier for this stack set operation. </p>
   *          <p>If you don't specify an operation ID, the SDK generates one automatically. </p>
   *          <p>The operation ID also functions as an idempotency token, to ensure that AWS
   *          CloudFormation performs the stack set operation only once, even if you retry the request
   *          multiple times. You can retry stack set operation requests to ensure that AWS
   *          CloudFormation successfully received them.</p>
   *          <p>Repeating this stack set operation with a new operation ID retries all stack
   *          instances whose status is <code>OUTDATED</code>. </p>
   */
  OperationId?: string;

  /**
   * <p>Preferences for how AWS CloudFormation performs this stack set operation.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * <p>The regions where you want to delete stack set instances. </p>
   */
  Regions: string[] | undefined;

  /**
   * <p>Removes the stack instances from the specified stack set, but doesn't delete the
   *          stacks. You can't reassociate a retained stack or add an existing, saved stack to a new
   *          stack set.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
   */
  RetainStacks: boolean | undefined;

  /**
   * <p>The name or unique ID of the stack set that you want to delete stack instances
   *          for.</p>
   */
  StackSetName: string | undefined;
}

export namespace DeleteStackInstancesInput {
  export const filterSensitiveLog = (obj: DeleteStackInstancesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteStackInstancesInput =>
    __isa(o, "DeleteStackInstancesInput");
}

export interface DeleteStackInstancesOutput {
  __type?: "DeleteStackInstancesOutput";
  /**
   * <p>The unique identifier for this stack set operation.</p>
   */
  OperationId?: string;
}

export namespace DeleteStackInstancesOutput {
  export const filterSensitiveLog = (obj: DeleteStackInstancesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteStackInstancesOutput =>
    __isa(o, "DeleteStackInstancesOutput");
}

export interface DeleteStackSetInput {
  __type?: "DeleteStackSetInput";
  /**
   * <p>The name or unique ID of the stack set that you're deleting. You can obtain this
   *          value by running <a>ListStackSets</a>.</p>
   */
  StackSetName: string | undefined;
}

export namespace DeleteStackSetInput {
  export const filterSensitiveLog = (obj: DeleteStackSetInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteStackSetInput =>
    __isa(o, "DeleteStackSetInput");
}

export interface DeleteStackSetOutput {
  __type?: "DeleteStackSetOutput";
}

export namespace DeleteStackSetOutput {
  export const filterSensitiveLog = (obj: DeleteStackSetOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteStackSetOutput =>
    __isa(o, "DeleteStackSetOutput");
}

export type DeprecatedStatus = "DEPRECATED" | "LIVE";

export interface DeregisterTypeInput {
  __type?: "DeregisterTypeInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the type.</p>
   *          <p>Conditional: You must specify <code>TypeName</code> or <code>Arn</code>.</p>
   */
  Arn?: string;

  /**
   * <p>The kind of type.</p>
   *          <p>Currently the only valid value is <code>RESOURCE</code>.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The name of the type.</p>
   *          <p>Conditional: You must specify <code>TypeName</code> or <code>Arn</code>.</p>
   */
  TypeName?: string;

  /**
   * <p>The ID of a specific version of the type. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the type version when it is registered.</p>
   */
  VersionId?: string;
}

export namespace DeregisterTypeInput {
  export const filterSensitiveLog = (obj: DeregisterTypeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeregisterTypeInput =>
    __isa(o, "DeregisterTypeInput");
}

export interface DeregisterTypeOutput {
  __type?: "DeregisterTypeOutput";
}

export namespace DeregisterTypeOutput {
  export const filterSensitiveLog = (obj: DeregisterTypeOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeregisterTypeOutput =>
    __isa(o, "DeregisterTypeOutput");
}

/**
 * <p>The input for the <a>DescribeAccountLimits</a> action.</p>
 */
export interface DescribeAccountLimitsInput {
  __type?: "DescribeAccountLimitsInput";
  /**
   * <p>A string that identifies the next page of limits that you want to retrieve.</p>
   */
  NextToken?: string;
}

export namespace DescribeAccountLimitsInput {
  export const filterSensitiveLog = (obj: DescribeAccountLimitsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAccountLimitsInput =>
    __isa(o, "DescribeAccountLimitsInput");
}

/**
 * <p>The output for the <a>DescribeAccountLimits</a> action.</p>
 */
export interface DescribeAccountLimitsOutput {
  __type?: "DescribeAccountLimitsOutput";
  /**
   * <p>An account limit structure that contain a list of AWS CloudFormation account limits
   *          and their values.</p>
   */
  AccountLimits?: AccountLimit[];

  /**
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of limits.
   *          If no additional page exists, this value is null.</p>
   */
  NextToken?: string;
}

export namespace DescribeAccountLimitsOutput {
  export const filterSensitiveLog = (
    obj: DescribeAccountLimitsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAccountLimitsOutput =>
    __isa(o, "DescribeAccountLimitsOutput");
}

/**
 * <p>The input for the <a>DescribeChangeSet</a> action.</p>
 */
export interface DescribeChangeSetInput {
  __type?: "DescribeChangeSetInput";
  /**
   * <p>The name or Amazon Resource Name (ARN) of the change set that you want to
   *          describe.</p>
   */
  ChangeSetName: string | undefined;

  /**
   * <p>A string (provided by the <a>DescribeChangeSet</a> response output) that
   *          identifies the next page of information that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>If you specified the name of a change set, specify the stack name or ID (ARN) of the
   *          change set you want to describe.</p>
   */
  StackName?: string;
}

export namespace DescribeChangeSetInput {
  export const filterSensitiveLog = (obj: DescribeChangeSetInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeChangeSetInput =>
    __isa(o, "DescribeChangeSetInput");
}

/**
 * <p>The output for the <a>DescribeChangeSet</a> action.</p>
 */
export interface DescribeChangeSetOutput {
  __type?: "DescribeChangeSetOutput";
  /**
   * <p>If you execute the change set, the list of capabilities that were explicitly
   *          acknowledged when the change set was created.</p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>The ARN of the change set.</p>
   */
  ChangeSetId?: string;

  /**
   * <p>The name of the change set.</p>
   */
  ChangeSetName?: string;

  /**
   * <p>A list of <code>Change</code> structures that describes the resources AWS
   *          CloudFormation changes if you execute the change set.</p>
   */
  Changes?: Change[];

  /**
   * <p>The start time when the change set was created, in UTC.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Information about the change set.</p>
   */
  Description?: string;

  /**
   * <p>If the change set execution status is <code>AVAILABLE</code>, you can execute the
   *          change set. If you can’t execute the change set, the status indicates why. For example, a
   *          change set might be in an <code>UNAVAILABLE</code> state because AWS CloudFormation is
   *          still creating it or in an <code>OBSOLETE</code> state because the stack was already
   *          updated.</p>
   */
  ExecutionStatus?: ExecutionStatus | string;

  /**
   * <p>If the output exceeds 1 MB, a string that identifies the next page of changes. If
   *          there is no additional page, this value is null.</p>
   */
  NextToken?: string;

  /**
   * <p>The ARNs of the Amazon Simple Notification Service (Amazon SNS) topics that will be
   *          associated with the stack if you execute the change set.</p>
   */
  NotificationARNs?: string[];

  /**
   * <p>A list of <code>Parameter</code> structures that describes the input parameters and
   *          their values used to create the change set. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data type.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>The rollback triggers for AWS CloudFormation to monitor during stack creation and
   *          updating operations, and for the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

  /**
   * <p>The ARN of the stack that is associated with the change set.</p>
   */
  StackId?: string;

  /**
   * <p>The name of the stack that is associated with the change set.</p>
   */
  StackName?: string;

  /**
   * <p>The current status of the change set, such as <code>CREATE_IN_PROGRESS</code>,
   *             <code>CREATE_COMPLETE</code>, or <code>FAILED</code>.</p>
   */
  Status?: ChangeSetStatus | string;

  /**
   * <p>A description of the change set's status. For example, if your attempt to create a
   *          change set failed, AWS CloudFormation shows the error message.</p>
   */
  StatusReason?: string;

  /**
   * <p>If you execute the change set, the tags that will be associated with the
   *          stack.</p>
   */
  Tags?: Tag[];
}

export namespace DescribeChangeSetOutput {
  export const filterSensitiveLog = (obj: DescribeChangeSetOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeChangeSetOutput =>
    __isa(o, "DescribeChangeSetOutput");
}

export interface DescribeStackDriftDetectionStatusInput {
  __type?: "DescribeStackDriftDetectionStatusInput";
  /**
   * <p>The ID of the drift detection results of this operation. </p>
   *          <p>AWS CloudFormation generates new results, with a new drift detection ID, each time this operation
   *          is run. However, the number of drift results AWS CloudFormation retains for any given stack, and for how
   *          long, may vary. </p>
   */
  StackDriftDetectionId: string | undefined;
}

export namespace DescribeStackDriftDetectionStatusInput {
  export const filterSensitiveLog = (
    obj: DescribeStackDriftDetectionStatusInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStackDriftDetectionStatusInput =>
    __isa(o, "DescribeStackDriftDetectionStatusInput");
}

export interface DescribeStackDriftDetectionStatusOutput {
  __type?: "DescribeStackDriftDetectionStatusOutput";
  /**
   * <p>The status of the stack drift detection operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DETECTION_COMPLETE</code>: The stack drift detection operation has
   *                successfully completed for all resources in the stack that support drift detection.
   *                (Resources that do not currently support stack detection remain unchecked.)</p>
   *                <p>If you specified logical resource IDs for AWS CloudFormation to use as a filter for the
   *                stack drift detection operation, only the resources with those logical IDs are
   *                checked for drift.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DETECTION_FAILED</code>: The stack drift detection operation has failed
   *                for at least one resource in the stack. Results will be available for resources on
   *                which AWS CloudFormation successfully completed drift detection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DETECTION_IN_PROGRESS</code>: The stack drift detection operation is
   *                currently in progress.</p>
   *             </li>
   *          </ul>
   */
  DetectionStatus: StackDriftDetectionStatus | string | undefined;

  /**
   * <p>The reason the stack drift detection operation has its current status.</p>
   */
  DetectionStatusReason?: string;

  /**
   * <p>Total number of stack resources that have drifted. This is NULL until the drift
   *          detection operation reaches a status of <code>DETECTION_COMPLETE</code>. This value will be
   *          0 for stacks whose drift status is <code>IN_SYNC</code>.</p>
   */
  DriftedStackResourceCount?: number;

  /**
   * <p>The ID of the drift detection results of this operation. </p>
   *          <p>AWS CloudFormation generates new results, with a new drift detection ID, each time this operation
   *          is run. However, the number of reports AWS CloudFormation retains for any given stack, and for how long,
   *          may vary.</p>
   */
  StackDriftDetectionId: string | undefined;

  /**
   * <p>Status of the stack's actual configuration compared to its expected configuration. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The stack differs from its expected template
   *                configuration. A stack is considered to have drifted if one or more of its resources
   *                have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: AWS CloudFormation has not checked if the stack differs from its
   *                expected template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The stack's actual configuration matches its expected
   *                template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: This value is reserved for future use.</p>
   *             </li>
   *          </ul>
   */
  StackDriftStatus?: StackDriftStatus | string;

  /**
   * <p>The ID of the stack.</p>
   */
  StackId: string | undefined;

  /**
   * <p>Time at which the stack drift detection operation was initiated.</p>
   */
  Timestamp: Date | undefined;
}

export namespace DescribeStackDriftDetectionStatusOutput {
  export const filterSensitiveLog = (
    obj: DescribeStackDriftDetectionStatusOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStackDriftDetectionStatusOutput =>
    __isa(o, "DescribeStackDriftDetectionStatusOutput");
}

/**
 * <p>The input for <a>DescribeStackEvents</a> action.</p>
 */
export interface DescribeStackEventsInput {
  __type?: "DescribeStackEventsInput";
  /**
   * <p>A string that identifies the next page of events that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>The name or the unique stack ID that is associated with the stack, which are not
   *          always interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack
   *                ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   *          <p>Default: There is no default value.</p>
   */
  StackName?: string;
}

export namespace DescribeStackEventsInput {
  export const filterSensitiveLog = (obj: DescribeStackEventsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStackEventsInput =>
    __isa(o, "DescribeStackEventsInput");
}

/**
 * <p>The output for a <a>DescribeStackEvents</a> action.</p>
 */
export interface DescribeStackEventsOutput {
  __type?: "DescribeStackEventsOutput";
  /**
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of events.
   *          If no additional page exists, this value is null.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>StackEvents</code> structures.</p>
   */
  StackEvents?: StackEvent[];
}

export namespace DescribeStackEventsOutput {
  export const filterSensitiveLog = (obj: DescribeStackEventsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStackEventsOutput =>
    __isa(o, "DescribeStackEventsOutput");
}

export interface DescribeStackInstanceInput {
  __type?: "DescribeStackInstanceInput";
  /**
   * <p>The ID of an AWS account that's associated with this stack instance.</p>
   */
  StackInstanceAccount: string | undefined;

  /**
   * <p>The name of a region that's associated with this stack instance.</p>
   */
  StackInstanceRegion: string | undefined;

  /**
   * <p>The name or the unique stack ID of the stack set that you want to get stack instance
   *          information for.</p>
   */
  StackSetName: string | undefined;
}

export namespace DescribeStackInstanceInput {
  export const filterSensitiveLog = (obj: DescribeStackInstanceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStackInstanceInput =>
    __isa(o, "DescribeStackInstanceInput");
}

export interface DescribeStackInstanceOutput {
  __type?: "DescribeStackInstanceOutput";
  /**
   * <p>The stack instance that matches the specified request parameters.</p>
   */
  StackInstance?: StackInstance;
}

export namespace DescribeStackInstanceOutput {
  export const filterSensitiveLog = (
    obj: DescribeStackInstanceOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStackInstanceOutput =>
    __isa(o, "DescribeStackInstanceOutput");
}

export interface DescribeStackResourceDriftsInput {
  __type?: "DescribeStackResourceDriftsInput";
  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *          available results exceeds this maximum, the response includes a <code>NextToken</code>
   *          value that you can assign to the <code>NextToken</code> request parameter to get the next
   *          set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>A string that identifies the next page of stack resource drift results.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the stack for which you want drift information.</p>
   */
  StackName: string | undefined;

  /**
   * <p>The resource drift status values to use as filters for the resource drift results
   *          returned.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The resource differs from its expected template
   *                configuration in that the resource has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFIED</code>: One or more resource properties differ from their
   *                expected template values.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The resources's actual configuration matches its expected
   *                template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: AWS CloudFormation does not currently return this value.</p>
   *             </li>
   *          </ul>
   */
  StackResourceDriftStatusFilters?: (StackResourceDriftStatus | string)[];
}

export namespace DescribeStackResourceDriftsInput {
  export const filterSensitiveLog = (
    obj: DescribeStackResourceDriftsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStackResourceDriftsInput =>
    __isa(o, "DescribeStackResourceDriftsInput");
}

export interface DescribeStackResourceDriftsOutput {
  __type?: "DescribeStackResourceDriftsOutput";
  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is
   *          set to a token. To retrieve the next set of results, call
   *             <code>DescribeStackResourceDrifts</code> again and assign that token to the request
   *          object's <code>NextToken</code> parameter. If the request returns all results,
   *             <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>Drift information for the resources that have been checked for drift in the specified
   *          stack. This includes actual and expected configuration values for resources where AWS CloudFormation
   *          detects drift.</p>
   *          <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack
   *          resource that has been checked for drift. Resources that have not yet been checked for
   *          drift are not included. Resources that do not currently support drift detection are not
   *          checked, and so not included. For a list of resources that support drift detection, see
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
   */
  StackResourceDrifts: StackResourceDrift[] | undefined;
}

export namespace DescribeStackResourceDriftsOutput {
  export const filterSensitiveLog = (
    obj: DescribeStackResourceDriftsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStackResourceDriftsOutput =>
    __isa(o, "DescribeStackResourceDriftsOutput");
}

/**
 * <p>The input for <a>DescribeStackResource</a> action.</p>
 */
export interface DescribeStackResourceInput {
  __type?: "DescribeStackResourceInput";
  /**
   * <p>The logical name of the resource as specified in the template.</p>
   *          <p>Default: There is no default value.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>The name or the unique stack ID that is associated with the stack, which are not
   *          always interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack
   *                ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   *          <p>Default: There is no default value.</p>
   */
  StackName: string | undefined;
}

export namespace DescribeStackResourceInput {
  export const filterSensitiveLog = (obj: DescribeStackResourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStackResourceInput =>
    __isa(o, "DescribeStackResourceInput");
}

/**
 * <p>The output for a <a>DescribeStackResource</a> action.</p>
 */
export interface DescribeStackResourceOutput {
  __type?: "DescribeStackResourceOutput";
  /**
   * <p>A <code>StackResourceDetail</code> structure containing the description of the
   *          specified resource in the specified stack.</p>
   */
  StackResourceDetail?: StackResourceDetail;
}

export namespace DescribeStackResourceOutput {
  export const filterSensitiveLog = (
    obj: DescribeStackResourceOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStackResourceOutput =>
    __isa(o, "DescribeStackResourceOutput");
}

/**
 * <p>The input for <a>DescribeStackResources</a> action.</p>
 */
export interface DescribeStackResourcesInput {
  __type?: "DescribeStackResourcesInput";
  /**
   * <p>The logical name of the resource as specified in the template.</p>
   *          <p>Default: There is no default value.</p>
   */
  LogicalResourceId?: string;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of a
   *          resource supported by AWS CloudFormation.</p>
   *          <p>For example, for an Amazon Elastic Compute Cloud (EC2) instance,
   *             <code>PhysicalResourceId</code> corresponds to the <code>InstanceId</code>. You can pass
   *          the EC2 <code>InstanceId</code> to <code>DescribeStackResources</code> to find which stack
   *          the instance belongs to and what other resources are part of the stack.</p>
   *          <p>Required: Conditional. If you do not specify <code>PhysicalResourceId</code>, you
   *          must specify <code>StackName</code>.</p>
   *          <p>Default: There is no default value.</p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>The name or the unique stack ID that is associated with the stack, which are not
   *          always interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack
   *                ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   *          <p>Default: There is no default value.</p>
   *          <p>Required: Conditional. If you do not specify <code>StackName</code>, you must specify
   *             <code>PhysicalResourceId</code>.</p>
   */
  StackName?: string;
}

export namespace DescribeStackResourcesInput {
  export const filterSensitiveLog = (
    obj: DescribeStackResourcesInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStackResourcesInput =>
    __isa(o, "DescribeStackResourcesInput");
}

/**
 * <p>The output for a <a>DescribeStackResources</a> action.</p>
 */
export interface DescribeStackResourcesOutput {
  __type?: "DescribeStackResourcesOutput";
  /**
   * <p>A list of <code>StackResource</code> structures.</p>
   */
  StackResources?: StackResource[];
}

export namespace DescribeStackResourcesOutput {
  export const filterSensitiveLog = (
    obj: DescribeStackResourcesOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStackResourcesOutput =>
    __isa(o, "DescribeStackResourcesOutput");
}

export interface DescribeStackSetInput {
  __type?: "DescribeStackSetInput";
  /**
   * <p>The name or unique ID of the stack set whose description you want.</p>
   */
  StackSetName: string | undefined;
}

export namespace DescribeStackSetInput {
  export const filterSensitiveLog = (obj: DescribeStackSetInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStackSetInput =>
    __isa(o, "DescribeStackSetInput");
}

export interface DescribeStackSetOperationInput {
  __type?: "DescribeStackSetOperationInput";
  /**
   * <p>The unique ID of the stack set operation. </p>
   */
  OperationId: string | undefined;

  /**
   * <p>The name or the unique stack ID of the stack set for the stack operation.</p>
   */
  StackSetName: string | undefined;
}

export namespace DescribeStackSetOperationInput {
  export const filterSensitiveLog = (
    obj: DescribeStackSetOperationInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStackSetOperationInput =>
    __isa(o, "DescribeStackSetOperationInput");
}

export interface DescribeStackSetOperationOutput {
  __type?: "DescribeStackSetOperationOutput";
  /**
   * <p>The specified stack set operation.</p>
   */
  StackSetOperation?: StackSetOperation;
}

export namespace DescribeStackSetOperationOutput {
  export const filterSensitiveLog = (
    obj: DescribeStackSetOperationOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStackSetOperationOutput =>
    __isa(o, "DescribeStackSetOperationOutput");
}

export interface DescribeStackSetOutput {
  __type?: "DescribeStackSetOutput";
  /**
   * <p>The specified stack set.</p>
   */
  StackSet?: StackSet;
}

export namespace DescribeStackSetOutput {
  export const filterSensitiveLog = (obj: DescribeStackSetOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStackSetOutput =>
    __isa(o, "DescribeStackSetOutput");
}

/**
 * <p>The input for <a>DescribeStacks</a> action.</p>
 */
export interface DescribeStacksInput {
  __type?: "DescribeStacksInput";
  /**
   * <p>A string that identifies the next page of stacks that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>The name or the unique stack ID that is associated with the stack, which are not
   *          always interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack
   *                ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   *          <p>Default: There is no default value.</p>
   */
  StackName?: string;
}

export namespace DescribeStacksInput {
  export const filterSensitiveLog = (obj: DescribeStacksInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStacksInput =>
    __isa(o, "DescribeStacksInput");
}

/**
 * <p>The output for a <a>DescribeStacks</a> action.</p>
 */
export interface DescribeStacksOutput {
  __type?: "DescribeStacksOutput";
  /**
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of stacks.
   *          If no additional page exists, this value is null.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of stack structures.</p>
   */
  Stacks?: Stack[];
}

export namespace DescribeStacksOutput {
  export const filterSensitiveLog = (obj: DescribeStacksOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeStacksOutput =>
    __isa(o, "DescribeStacksOutput");
}

export interface DescribeTypeInput {
  __type?: "DescribeTypeInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the type.</p>
   *          <p>Conditional: You must specify <code>TypeName</code> or <code>Arn</code>.</p>
   */
  Arn?: string;

  /**
   * <p>The kind of type. </p>
   *          <p>Currently the only valid value is <code>RESOURCE</code>.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The name of the type.</p>
   *          <p>Conditional: You must specify <code>TypeName</code> or <code>Arn</code>.</p>
   */
  TypeName?: string;

  /**
   * <p>The ID of a specific version of the type. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the type version when it is registered.</p>
   *          <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific type version. Otherwise, it returns information about the default type version.</p>
   */
  VersionId?: string;
}

export namespace DescribeTypeInput {
  export const filterSensitiveLog = (obj: DescribeTypeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTypeInput =>
    __isa(o, "DescribeTypeInput");
}

export interface DescribeTypeOutput {
  __type?: "DescribeTypeOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the type.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the default version of the type. The default version is used when the type version is not specified.</p>
   *          <p>To set the default version of a type, use <code>
   *                <a>SetTypeDefaultVersion</a>
   *             </code>. </p>
   */
  DefaultVersionId?: string;

  /**
   * <p>The deprecation status of the type.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LIVE</code>: The type is registered and can be used in CloudFormation operations, dependent on its provisioning behavior and visibility scope.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPRECATED</code>: The type has been deregistered and can no longer be used in CloudFormation operations. </p>
   *             </li>
   *          </ul>
   */
  DeprecatedStatus?: DeprecatedStatus | string;

  /**
   * <p>The description of the registered type.</p>
   */
  Description?: string;

  /**
   * <p>The URL of a page providing detailed documentation for this type.</p>
   */
  DocumentationUrl?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an
   *          <i>
   *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM execution
   *             role</a>
   *             </i> that includes the necessary permissions to call those
   *          AWS APIs, and provision that execution role in your account. CloudFormation then
   *          assumes that execution role to provide your resource type with the appropriate
   *          credentials.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>When the specified type version was registered.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>Contains logging configuration information for a type.</p>
   */
  LoggingConfig?: LoggingConfig;

  /**
   * <p>The provisioning behavior of the type. AWS CloudFormation determines the provisioning type during registration, based on the types of handlers in the schema handler package submitted.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FULLY_MUTABLE</code>: The type includes an update handler to process updates to the type during stack update operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMMUTABLE</code>: The type does not include an update handler, so the type cannot be updated and must instead be replaced during stack update operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_PROVISIONABLE</code>: The type does not include all of the following handlers, and therefore cannot actually be provisioned.</p>
   *                <ul>
   *                   <li>
   *                      <p>create</p>
   *                   </li>
   *                   <li>
   *                      <p>read</p>
   *                   </li>
   *                   <li>
   *                      <p>delete</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  ProvisioningType?: ProvisioningType | string;

  /**
   * <p>The schema that defines the type.</p>
   *          <p>For more information on type schemas, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">Resource Provider Schema</a> in the <i>CloudFormation CLI User Guide</i>.</p>
   */
  Schema?: string;

  /**
   * <p>The URL of the source code for the type.</p>
   */
  SourceUrl?: string;

  /**
   * <p>When the specified type version was registered.</p>
   */
  TimeCreated?: Date;

  /**
   * <p>The kind of type. </p>
   *          <p>Currently the only valid value is <code>RESOURCE</code>.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The name of the registered type.</p>
   */
  TypeName?: string;

  /**
   * <p>The scope at which the type is visible and usable in CloudFormation operations.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PRIVATE</code>: The type is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any types you register as <code>PRIVATE</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUBLIC</code>: The type is publically visible and usable within any Amazon account.</p>
   *             </li>
   *          </ul>
   */
  Visibility?: Visibility | string;
}

export namespace DescribeTypeOutput {
  export const filterSensitiveLog = (obj: DescribeTypeOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTypeOutput =>
    __isa(o, "DescribeTypeOutput");
}

export interface DescribeTypeRegistrationInput {
  __type?: "DescribeTypeRegistrationInput";
  /**
   * <p>The identifier for this registration request.</p>
   *          <p>This registration token is generated by CloudFormation when you initiate a registration request using <code>
   *                <a>RegisterType</a>
   *             </code>.</p>
   */
  RegistrationToken: string | undefined;
}

export namespace DescribeTypeRegistrationInput {
  export const filterSensitiveLog = (
    obj: DescribeTypeRegistrationInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTypeRegistrationInput =>
    __isa(o, "DescribeTypeRegistrationInput");
}

export interface DescribeTypeRegistrationOutput {
  __type?: "DescribeTypeRegistrationOutput";
  /**
   * <p>The description of the type registration request.</p>
   */
  Description?: string;

  /**
   * <p>The current status of the type registration request.</p>
   */
  ProgressStatus?: RegistrationStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the type being registered.</p>
   *          <p>For registration requests with a <code>ProgressStatus</code> of other than <code>COMPLETE</code>, this will be <code>null</code>.</p>
   */
  TypeArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of this specific version of the type being registered.</p>
   *          <p>For registration requests with a <code>ProgressStatus</code> of other than <code>COMPLETE</code>, this will be <code>null</code>.</p>
   */
  TypeVersionArn?: string;
}

export namespace DescribeTypeRegistrationOutput {
  export const filterSensitiveLog = (
    obj: DescribeTypeRegistrationOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTypeRegistrationOutput =>
    __isa(o, "DescribeTypeRegistrationOutput");
}

export interface DetectStackDriftInput {
  __type?: "DetectStackDriftInput";
  /**
   * <p>The logical names of any resources you want to use as filters.</p>
   */
  LogicalResourceIds?: string[];

  /**
   * <p>The name of the stack for which you want to detect drift. </p>
   */
  StackName: string | undefined;
}

export namespace DetectStackDriftInput {
  export const filterSensitiveLog = (obj: DetectStackDriftInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetectStackDriftInput =>
    __isa(o, "DetectStackDriftInput");
}

export interface DetectStackDriftOutput {
  __type?: "DetectStackDriftOutput";
  /**
   * <p>The ID of the drift detection results of this operation. </p>
   *          <p>AWS CloudFormation generates new results, with a new drift detection ID, each time this operation
   *          is run. However, the number of drift results AWS CloudFormation retains for any given stack, and for how
   *          long, may vary. </p>
   */
  StackDriftDetectionId: string | undefined;
}

export namespace DetectStackDriftOutput {
  export const filterSensitiveLog = (obj: DetectStackDriftOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetectStackDriftOutput =>
    __isa(o, "DetectStackDriftOutput");
}

export interface DetectStackResourceDriftInput {
  __type?: "DetectStackResourceDriftInput";
  /**
   * <p>The logical name of the resource for which to return drift information.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>The name of the stack to which the resource belongs.</p>
   */
  StackName: string | undefined;
}

export namespace DetectStackResourceDriftInput {
  export const filterSensitiveLog = (
    obj: DetectStackResourceDriftInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetectStackResourceDriftInput =>
    __isa(o, "DetectStackResourceDriftInput");
}

export interface DetectStackResourceDriftOutput {
  __type?: "DetectStackResourceDriftOutput";
  /**
   * <p>Information about whether the resource's actual configuration has drifted from its
   *          expected template configuration, including actual and expected property values and any
   *          differences detected.</p>
   */
  StackResourceDrift: StackResourceDrift | undefined;
}

export namespace DetectStackResourceDriftOutput {
  export const filterSensitiveLog = (
    obj: DetectStackResourceDriftOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetectStackResourceDriftOutput =>
    __isa(o, "DetectStackResourceDriftOutput");
}

export interface DetectStackSetDriftInput {
  __type?: "DetectStackSetDriftInput";
  /**
   * <p>
   *             <i>The ID of the stack set operation.</i>
   *          </p>
   */
  OperationId?: string;

  /**
   * <p>The user-specified preferences for how AWS CloudFormation performs a stack set
   *          operation. </p>
   *          <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * <p>The name of the stack set on which to perform the drift detection operation.</p>
   */
  StackSetName: string | undefined;
}

export namespace DetectStackSetDriftInput {
  export const filterSensitiveLog = (obj: DetectStackSetDriftInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetectStackSetDriftInput =>
    __isa(o, "DetectStackSetDriftInput");
}

export interface DetectStackSetDriftOutput {
  __type?: "DetectStackSetDriftOutput";
  /**
   * <p>The ID of the drift detection stack set operation. </p>
   *          <p>you can use this operation id with <code>
   *                <a>DescribeStackSetOperation</a>
   *             </code> to monitor the progress of the drift detection operation. </p>
   */
  OperationId?: string;
}

export namespace DetectStackSetDriftOutput {
  export const filterSensitiveLog = (obj: DetectStackSetDriftOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetectStackSetDriftOutput =>
    __isa(o, "DetectStackSetDriftOutput");
}

export enum DifferenceType {
  ADD = "ADD",
  NOT_EQUAL = "NOT_EQUAL",
  REMOVE = "REMOVE"
}

/**
 * <p>The input for an <a>EstimateTemplateCost</a> action.</p>
 */
export interface EstimateTemplateCostInput {
  __type?: "EstimateTemplateCostInput";
  /**
   * <p>A list of <code>Parameter</code> structures that specify input parameters.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>Structure containing the template body with a minimum length of 1 byte and a maximum
   *          length of 51,200 bytes. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the AWS CloudFormation User Guide.)</p>
   *          <p>Conditional: You must pass <code>TemplateBody</code> or <code>TemplateURL</code>. If
   *          both are passed, only <code>TemplateBody</code> is used.</p>
   */
  TemplateBody?: string;

  /**
   * <p>Location of file containing the template body. The URL must point to a template that
   *          is located in an Amazon S3 bucket. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the AWS CloudFormation User Guide.</p>
   *          <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If
   *          both are passed, only <code>TemplateBody</code> is used.</p>
   */
  TemplateURL?: string;
}

export namespace EstimateTemplateCostInput {
  export const filterSensitiveLog = (obj: EstimateTemplateCostInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is EstimateTemplateCostInput =>
    __isa(o, "EstimateTemplateCostInput");
}

/**
 * <p>The output for a <a>EstimateTemplateCost</a> action.</p>
 */
export interface EstimateTemplateCostOutput {
  __type?: "EstimateTemplateCostOutput";
  /**
   * <p>An AWS Simple Monthly Calculator URL with a query string that describes the resources
   *          required to run the template.</p>
   */
  Url?: string;
}

export namespace EstimateTemplateCostOutput {
  export const filterSensitiveLog = (obj: EstimateTemplateCostOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is EstimateTemplateCostOutput =>
    __isa(o, "EstimateTemplateCostOutput");
}

export enum EvaluationType {
  Dynamic = "Dynamic",
  Static = "Static"
}

/**
 * <p>The input for the <a>ExecuteChangeSet</a> action.</p>
 */
export interface ExecuteChangeSetInput {
  __type?: "ExecuteChangeSetInput";
  /**
   * <p>The name or ARN of the change set that you want use to update the specified
   *          stack.</p>
   */
  ChangeSetName: string | undefined;

  /**
   * <p>A unique identifier for this <code>ExecuteChangeSet</code> request. Specify this
   *          token if you plan to retry requests so that AWS CloudFormation knows that you're not
   *          attempting to execute a change set to update a stack with the same name. You might retry
   *             <code>ExecuteChangeSet</code> requests to ensure that AWS CloudFormation successfully
   *          received them.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>If you specified the name of a change set, specify the stack name or ID (ARN) that is
   *          associated with the change set you want to execute.</p>
   */
  StackName?: string;
}

export namespace ExecuteChangeSetInput {
  export const filterSensitiveLog = (obj: ExecuteChangeSetInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExecuteChangeSetInput =>
    __isa(o, "ExecuteChangeSetInput");
}

/**
 * <p>The output for the <a>ExecuteChangeSet</a> action.</p>
 */
export interface ExecuteChangeSetOutput {
  __type?: "ExecuteChangeSetOutput";
}

export namespace ExecuteChangeSetOutput {
  export const filterSensitiveLog = (obj: ExecuteChangeSetOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExecuteChangeSetOutput =>
    __isa(o, "ExecuteChangeSetOutput");
}

export enum ExecutionStatus {
  AVAILABLE = "AVAILABLE",
  EXECUTE_COMPLETE = "EXECUTE_COMPLETE",
  EXECUTE_FAILED = "EXECUTE_FAILED",
  EXECUTE_IN_PROGRESS = "EXECUTE_IN_PROGRESS",
  OBSOLETE = "OBSOLETE",
  UNAVAILABLE = "UNAVAILABLE"
}

/**
 * <p>The <code>Export</code> structure describes the exported output values for a
 *          stack.</p>
 */
export interface Export {
  __type?: "Export";
  /**
   * <p>The stack that contains the exported output name and value.</p>
   */
  ExportingStackId?: string;

  /**
   * <p>The name of exported output value. Use this name and the <code>Fn::ImportValue</code>
   *          function to import the associated value into other stacks. The name is defined in the
   *             <code>Export</code> field in the associated stack's <code>Outputs</code>
   *          section.</p>
   */
  Name?: string;

  /**
   * <p>The value of the exported output, such as a resource physical ID. This value is
   *          defined in the <code>Export</code> field in the associated stack's <code>Outputs</code>
   *          section.</p>
   */
  Value?: string;
}

export namespace Export {
  export const filterSensitiveLog = (obj: Export): any => ({
    ...obj
  });
  export const isa = (o: any): o is Export => __isa(o, "Export");
}

/**
 * <p>The input for the <a>GetStackPolicy</a> action.</p>
 */
export interface GetStackPolicyInput {
  __type?: "GetStackPolicyInput";
  /**
   * <p>The name or unique stack ID that is associated with the stack whose policy you want
   *          to get.</p>
   */
  StackName: string | undefined;
}

export namespace GetStackPolicyInput {
  export const filterSensitiveLog = (obj: GetStackPolicyInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetStackPolicyInput =>
    __isa(o, "GetStackPolicyInput");
}

/**
 * <p>The output for the <a>GetStackPolicy</a> action.</p>
 */
export interface GetStackPolicyOutput {
  __type?: "GetStackPolicyOutput";
  /**
   * <p>Structure containing the stack policy body. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent Updates
   *             to Stack Resources</a> in the AWS CloudFormation User Guide.)</p>
   */
  StackPolicyBody?: string;
}

export namespace GetStackPolicyOutput {
  export const filterSensitiveLog = (obj: GetStackPolicyOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetStackPolicyOutput =>
    __isa(o, "GetStackPolicyOutput");
}

/**
 * <p>The input for a <a>GetTemplate</a> action.</p>
 */
export interface GetTemplateInput {
  __type?: "GetTemplateInput";
  /**
   * <p>The name or Amazon Resource Name (ARN) of a change set for which AWS CloudFormation
   *          returns the associated template. If you specify a name, you must also specify the
   *             <code>StackName</code>.</p>
   */
  ChangeSetName?: string;

  /**
   * <p>The name or the unique stack ID that is associated with the stack, which are not
   *          always interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack
   *                ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   *          <p>Default: There is no default value.</p>
   */
  StackName?: string;

  /**
   * <p>For templates that include transforms, the stage of the template that AWS
   *          CloudFormation returns. To get the user-submitted template, specify <code>Original</code>.
   *          To get the template after AWS CloudFormation has processed all transforms, specify
   *             <code>Processed</code>. </p>
   *          <p>If the template doesn't include transforms, <code>Original</code> and
   *             <code>Processed</code> return the same template. By default, AWS CloudFormation
   *          specifies <code>Original</code>. </p>
   */
  TemplateStage?: TemplateStage | string;
}

export namespace GetTemplateInput {
  export const filterSensitiveLog = (obj: GetTemplateInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTemplateInput =>
    __isa(o, "GetTemplateInput");
}

/**
 * <p>The output for <a>GetTemplate</a> action.</p>
 */
export interface GetTemplateOutput {
  __type?: "GetTemplateOutput";
  /**
   * <p>The stage of the template that you can retrieve. For stacks, the
   *             <code>Original</code> and <code>Processed</code> templates are always available. For
   *          change sets, the <code>Original</code> template is always available. After AWS
   *          CloudFormation finishes creating the change set, the <code>Processed</code> template
   *          becomes available.</p>
   */
  StagesAvailable?: (TemplateStage | string)[];

  /**
   * <p>Structure containing the template body. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.)</p>
   *          <p>AWS CloudFormation returns the same template that was used when the stack was
   *          created.</p>
   */
  TemplateBody?: string;
}

export namespace GetTemplateOutput {
  export const filterSensitiveLog = (obj: GetTemplateOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTemplateOutput =>
    __isa(o, "GetTemplateOutput");
}

/**
 * <p>The input for the <a>GetTemplateSummary</a> action.</p>
 */
export interface GetTemplateSummaryInput {
  __type?: "GetTemplateSummaryInput";
  /**
   * <p>The name or the stack ID that is associated with the stack, which are not always
   *          interchangeable. For running stacks, you can specify either the stack's name or its unique
   *          stack ID. For deleted stack, you must specify the unique stack ID.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *             <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or
   *             <code>TemplateURL</code>.</p>
   */
  StackName?: string;

  /**
   * <p>The name or unique ID of the stack set from which the stack was created.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *             <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or
   *             <code>TemplateURL</code>.</p>
   */
  StackSetName?: string;

  /**
   * <p>Structure containing the template body with a minimum length of 1 byte and a maximum
   *          length of 51,200 bytes. For more information about templates, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the AWS CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *             <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or
   *             <code>TemplateURL</code>.</p>
   */
  TemplateBody?: string;

  /**
   * <p>Location of file containing the template body. The URL must point to a template (max
   *          size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information about
   *          templates, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the AWS CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *             <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or
   *             <code>TemplateURL</code>.</p>
   */
  TemplateURL?: string;
}

export namespace GetTemplateSummaryInput {
  export const filterSensitiveLog = (obj: GetTemplateSummaryInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTemplateSummaryInput =>
    __isa(o, "GetTemplateSummaryInput");
}

/**
 * <p>The output for the <a>GetTemplateSummary</a> action.</p>
 */
export interface GetTemplateSummaryOutput {
  __type?: "GetTemplateSummaryOutput";
  /**
   * <p>The capabilities found within the template. If your template contains IAM resources,
   *          you must specify the CAPABILITY_IAM or CAPABILITY_NAMED_IAM value for this parameter when
   *          you use the <a>CreateStack</a> or <a>UpdateStack</a> actions with
   *          your template; otherwise, those actions return an InsufficientCapabilities error.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>The list of resources that generated the values in the <code>Capabilities</code>
   *          response element.</p>
   */
  CapabilitiesReason?: string;

  /**
   * <p>A list of the transforms that are declared in the template.</p>
   */
  DeclaredTransforms?: string[];

  /**
   * <p>The value that is defined in the <code>Description</code> property of the
   *          template.</p>
   */
  Description?: string;

  /**
   * <p>The value that is defined for the <code>Metadata</code> property of the
   *          template.</p>
   */
  Metadata?: string;

  /**
   * <p>A list of parameter declarations that describe various properties for each
   *          parameter.</p>
   */
  Parameters?: ParameterDeclaration[];

  /**
   * <p>A list of resource identifier summaries that describe the target resources of an import
   *          operation and the properties you can provide during the import to identify the target
   *          resources. For example, <code>BucketName</code> is a possible identifier property for an
   *             <code>AWS::S3::Bucket</code> resource. </p>
   */
  ResourceIdentifierSummaries?: ResourceIdentifierSummary[];

  /**
   * <p>A list of all the template resource types that are defined in the template, such as
   *             <code>AWS::EC2::Instance</code>, <code>AWS::Dynamo::Table</code>, and
   *             <code>Custom::MyCustomInstance</code>.</p>
   */
  ResourceTypes?: string[];

  /**
   * <p>The AWS template format version, which identifies the capabilities of the
   *          template.</p>
   */
  Version?: string;
}

export namespace GetTemplateSummaryOutput {
  export const filterSensitiveLog = (obj: GetTemplateSummaryOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTemplateSummaryOutput =>
    __isa(o, "GetTemplateSummaryOutput");
}

export enum HandlerErrorCode {
  AccessDenied = "AccessDenied",
  AlreadyExists = "AlreadyExists",
  GeneralServiceException = "GeneralServiceException",
  InternalFailure = "InternalFailure",
  InvalidCredentials = "InvalidCredentials",
  InvalidRequest = "InvalidRequest",
  NetworkFailure = "NetworkFailure",
  NotFound = "NotFound",
  NotUpdatable = "NotUpdatable",
  ResourceConflict = "ResourceConflict",
  ServiceInternalError = "ServiceInternalError",
  ServiceLimitExceeded = "ServiceLimitExceeded",
  ServiceTimeout = "NotStabilized",
  Throttling = "Throttling"
}

/**
 * <p>The template contains resources with capabilities that weren't specified in the
 *          Capabilities parameter.</p>
 */
export interface InsufficientCapabilitiesException
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientCapabilitiesException";
  $fault: "client";
  Message?: string;
}

export namespace InsufficientCapabilitiesException {
  export const filterSensitiveLog = (
    obj: InsufficientCapabilitiesException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsufficientCapabilitiesException =>
    __isa(o, "InsufficientCapabilitiesException");
}

/**
 * <p>The specified change set can't be used to update the stack. For example, the change
 *          set status might be <code>CREATE_IN_PROGRESS</code>, or the stack status might be
 *             <code>UPDATE_IN_PROGRESS</code>.</p>
 */
export interface InvalidChangeSetStatusException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidChangeSetStatusException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidChangeSetStatusException {
  export const filterSensitiveLog = (
    obj: InvalidChangeSetStatusException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidChangeSetStatusException =>
    __isa(o, "InvalidChangeSetStatusException");
}

/**
 * <p>The specified operation isn't valid.</p>
 */
export interface InvalidOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidOperationException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOperationException {
  export const filterSensitiveLog = (obj: InvalidOperationException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidOperationException =>
    __isa(o, "InvalidOperationException");
}

/**
 * <p>Error reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. CloudFormation does not return this error to users.</p>
 */
export interface InvalidStateTransitionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidStateTransitionException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidStateTransitionException {
  export const filterSensitiveLog = (
    obj: InvalidStateTransitionException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidStateTransitionException =>
    __isa(o, "InvalidStateTransitionException");
}

/**
 * <p>The quota for the resource has already been reached.</p>
 *          <p>For information on resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">Limits</a> in
 *          the <i>AWS CloudFormation User Guide</i>.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

/**
 * <p>The input for the <a>ListChangeSets</a> action.</p>
 */
export interface ListChangeSetsInput {
  __type?: "ListChangeSetsInput";
  /**
   * <p>A string (provided by the <a>ListChangeSets</a> response output) that
   *          identifies the next page of change sets that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>The name or the Amazon Resource Name (ARN) of the stack for which you want to list
   *          change sets.</p>
   */
  StackName: string | undefined;
}

export namespace ListChangeSetsInput {
  export const filterSensitiveLog = (obj: ListChangeSetsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListChangeSetsInput =>
    __isa(o, "ListChangeSetsInput");
}

/**
 * <p>The output for the <a>ListChangeSets</a> action.</p>
 */
export interface ListChangeSetsOutput {
  __type?: "ListChangeSetsOutput";
  /**
   * <p>If the output exceeds 1 MB, a string that identifies the next page of change sets. If
   *          there is no additional page, this value is null.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>ChangeSetSummary</code> structures that provides the ID and status of
   *          each change set for the specified stack.</p>
   */
  Summaries?: ChangeSetSummary[];
}

export namespace ListChangeSetsOutput {
  export const filterSensitiveLog = (obj: ListChangeSetsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListChangeSetsOutput =>
    __isa(o, "ListChangeSetsOutput");
}

export interface ListExportsInput {
  __type?: "ListExportsInput";
  /**
   * <p>A string (provided by the <a>ListExports</a> response output) that
   *          identifies the next page of exported output values that you asked to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListExportsInput {
  export const filterSensitiveLog = (obj: ListExportsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListExportsInput =>
    __isa(o, "ListExportsInput");
}

export interface ListExportsOutput {
  __type?: "ListExportsOutput";
  /**
   * <p>The output for the <a>ListExports</a> action.</p>
   */
  Exports?: Export[];

  /**
   * <p>If the output exceeds 100 exported output values, a string that identifies the next
   *          page of exports. If there is no additional page, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListExportsOutput {
  export const filterSensitiveLog = (obj: ListExportsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListExportsOutput =>
    __isa(o, "ListExportsOutput");
}

export interface ListImportsInput {
  __type?: "ListImportsInput";
  /**
   * <p>The name of the exported output value. AWS CloudFormation returns the stack names
   *          that are importing this value. </p>
   */
  ExportName: string | undefined;

  /**
   * <p>A string (provided by the <a>ListImports</a> response output) that
   *          identifies the next page of stacks that are importing the specified exported output value.
   *       </p>
   */
  NextToken?: string;
}

export namespace ListImportsInput {
  export const filterSensitiveLog = (obj: ListImportsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListImportsInput =>
    __isa(o, "ListImportsInput");
}

export interface ListImportsOutput {
  __type?: "ListImportsOutput";
  /**
   * <p>A list of stack names that are importing the specified exported output value.
   *       </p>
   */
  Imports?: string[];

  /**
   * <p>A string that identifies the next page of exports. If there is no additional page,
   *          this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListImportsOutput {
  export const filterSensitiveLog = (obj: ListImportsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListImportsOutput =>
    __isa(o, "ListImportsOutput");
}

export interface ListStackInstancesInput {
  __type?: "ListStackInstancesInput";
  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *          available results exceeds this maximum, the response includes a <code>NextToken</code>
   *          value that you can assign to the <code>NextToken</code> request parameter to get the next
   *          set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous request didn't return all of the remaining results, the response's
   *             <code>NextToken</code> parameter value is set to a token. To retrieve the next set of
   *          results, call <code>ListStackInstances</code> again and assign that token to the request
   *          object's <code>NextToken</code> parameter. If there are no remaining results, the previous
   *          response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the AWS account that you want to list stack instances for.</p>
   */
  StackInstanceAccount?: string;

  /**
   * <p>The name of the region where you want to list stack instances. </p>
   */
  StackInstanceRegion?: string;

  /**
   * <p>The name or unique ID of the stack set that you want to list stack instances
   *          for.</p>
   */
  StackSetName: string | undefined;
}

export namespace ListStackInstancesInput {
  export const filterSensitiveLog = (obj: ListStackInstancesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListStackInstancesInput =>
    __isa(o, "ListStackInstancesInput");
}

export interface ListStackInstancesOutput {
  __type?: "ListStackInstancesOutput";
  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is
   *          set to a token. To retrieve the next set of results, call <code>ListStackInstances</code>
   *          again and assign that token to the request object's <code>NextToken</code> parameter. If
   *          the request returns all results, <code>NextToken</code> is set to
   *          <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>StackInstanceSummary</code> structures that contain information about
   *          the specified stack instances.</p>
   */
  Summaries?: StackInstanceSummary[];
}

export namespace ListStackInstancesOutput {
  export const filterSensitiveLog = (obj: ListStackInstancesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListStackInstancesOutput =>
    __isa(o, "ListStackInstancesOutput");
}

/**
 * <p>The input for the <a>ListStackResource</a> action.</p>
 */
export interface ListStackResourcesInput {
  __type?: "ListStackResourcesInput";
  /**
   * <p>A string that identifies the next page of stack resources that you want to
   *          retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>The name or the unique stack ID that is associated with the stack, which are not
   *          always interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack
   *                ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   *          <p>Default: There is no default value.</p>
   */
  StackName: string | undefined;
}

export namespace ListStackResourcesInput {
  export const filterSensitiveLog = (obj: ListStackResourcesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListStackResourcesInput =>
    __isa(o, "ListStackResourcesInput");
}

/**
 * <p>The output for a <a>ListStackResources</a> action.</p>
 */
export interface ListStackResourcesOutput {
  __type?: "ListStackResourcesOutput";
  /**
   * <p>If the output exceeds 1 MB, a string that identifies the next page of stack
   *          resources. If no additional page exists, this value is null.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>StackResourceSummary</code> structures.</p>
   */
  StackResourceSummaries?: StackResourceSummary[];
}

export namespace ListStackResourcesOutput {
  export const filterSensitiveLog = (obj: ListStackResourcesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListStackResourcesOutput =>
    __isa(o, "ListStackResourcesOutput");
}

export interface ListStackSetOperationResultsInput {
  __type?: "ListStackSetOperationResultsInput";
  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *          available results exceeds this maximum, the response includes a <code>NextToken</code>
   *          value that you can assign to the <code>NextToken</code> request parameter to get the next
   *          set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous request didn't return all of the remaining results, the response
   *          object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set
   *          of results, call <code>ListStackSetOperationResults</code> again and assign that token to
   *          the request object's <code>NextToken</code> parameter. If there are no remaining results,
   *          the previous response object's <code>NextToken</code> parameter is set to
   *          <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The ID of the stack set operation.</p>
   */
  OperationId: string | undefined;

  /**
   * <p>The name or unique ID of the stack set that you want to get operation results
   *          for.</p>
   */
  StackSetName: string | undefined;
}

export namespace ListStackSetOperationResultsInput {
  export const filterSensitiveLog = (
    obj: ListStackSetOperationResultsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListStackSetOperationResultsInput =>
    __isa(o, "ListStackSetOperationResultsInput");
}

export interface ListStackSetOperationResultsOutput {
  __type?: "ListStackSetOperationResultsOutput";
  /**
   * <p>If the request doesn't return all results, <code>NextToken</code> is set to a token.
   *          To retrieve the next set of results, call <code>ListOperationResults</code> again and
   *          assign that token to the request object's <code>NextToken</code> parameter. If there are no
   *          remaining results, <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>StackSetOperationResultSummary</code> structures that contain
   *          information about the specified operation results, for accounts and regions that are
   *          included in the operation.</p>
   */
  Summaries?: StackSetOperationResultSummary[];
}

export namespace ListStackSetOperationResultsOutput {
  export const filterSensitiveLog = (
    obj: ListStackSetOperationResultsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListStackSetOperationResultsOutput =>
    __isa(o, "ListStackSetOperationResultsOutput");
}

export interface ListStackSetOperationsInput {
  __type?: "ListStackSetOperationsInput";
  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *          available results exceeds this maximum, the response includes a <code>NextToken</code>
   *          value that you can assign to the <code>NextToken</code> request parameter to get the next
   *          set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous paginated request didn't return all of the remaining results, the
   *          response object's <code>NextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListStackSetOperations</code> again and assign that token
   *          to the request object's <code>NextToken</code> parameter. If there are no remaining
   *          results, the previous response object's <code>NextToken</code> parameter is set to
   *             <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The name or unique ID of the stack set that you want to get operation summaries
   *          for.</p>
   */
  StackSetName: string | undefined;
}

export namespace ListStackSetOperationsInput {
  export const filterSensitiveLog = (
    obj: ListStackSetOperationsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListStackSetOperationsInput =>
    __isa(o, "ListStackSetOperationsInput");
}

export interface ListStackSetOperationsOutput {
  __type?: "ListStackSetOperationsOutput";
  /**
   * <p>If the request doesn't return all results, <code>NextToken</code> is set to a token.
   *          To retrieve the next set of results, call <code>ListOperationResults</code> again and
   *          assign that token to the request object's <code>NextToken</code> parameter. If there are no
   *          remaining results, <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>StackSetOperationSummary</code> structures that contain summary
   *          information about operations for the specified stack set.</p>
   */
  Summaries?: StackSetOperationSummary[];
}

export namespace ListStackSetOperationsOutput {
  export const filterSensitiveLog = (
    obj: ListStackSetOperationsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListStackSetOperationsOutput =>
    __isa(o, "ListStackSetOperationsOutput");
}

export interface ListStackSetsInput {
  __type?: "ListStackSetsInput";
  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *          available results exceeds this maximum, the response includes a <code>NextToken</code>
   *          value that you can assign to the <code>NextToken</code> request parameter to get the next
   *          set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous paginated request didn't return all of the remaining results, the
   *          response object's <code>NextToken</code> parameter value is set to a token. To retrieve the
   *          next set of results, call <code>ListStackSets</code> again and assign that token to the
   *          request object's <code>NextToken</code> parameter. If there are no remaining results, the
   *          previous response object's <code>NextToken</code> parameter is set to
   *          <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The status of the stack sets that you want to get summary information
   *          about.</p>
   */
  Status?: StackSetStatus | string;
}

export namespace ListStackSetsInput {
  export const filterSensitiveLog = (obj: ListStackSetsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListStackSetsInput =>
    __isa(o, "ListStackSetsInput");
}

export interface ListStackSetsOutput {
  __type?: "ListStackSetsOutput";
  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is
   *          set to a token. To retrieve the next set of results, call <code>ListStackInstances</code>
   *          again and assign that token to the request object's <code>NextToken</code> parameter. If
   *          the request returns all results, <code>NextToken</code> is set to
   *          <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>StackSetSummary</code> structures that contain information about the
   *          user's stack sets.</p>
   */
  Summaries?: StackSetSummary[];
}

export namespace ListStackSetsOutput {
  export const filterSensitiveLog = (obj: ListStackSetsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListStackSetsOutput =>
    __isa(o, "ListStackSetsOutput");
}

/**
 * <p>The input for <a>ListStacks</a> action.</p>
 */
export interface ListStacksInput {
  __type?: "ListStacksInput";
  /**
   * <p>A string that identifies the next page of stacks that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * <p>Stack status to use as a filter. Specify one or more stack status codes to list only
   *          stacks with the specified status codes. For a complete list of stack status codes, see the
   *             <code>StackStatus</code> parameter of the <a>Stack</a> data type.</p>
   */
  StackStatusFilter?: (StackStatus | string)[];
}

export namespace ListStacksInput {
  export const filterSensitiveLog = (obj: ListStacksInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListStacksInput =>
    __isa(o, "ListStacksInput");
}

/**
 * <p>The output for <a>ListStacks</a> action.</p>
 */
export interface ListStacksOutput {
  __type?: "ListStacksOutput";
  /**
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of stacks.
   *          If no additional page exists, this value is null.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>StackSummary</code> structures containing information about the
   *          specified stacks.</p>
   */
  StackSummaries?: StackSummary[];
}

export namespace ListStacksOutput {
  export const filterSensitiveLog = (obj: ListStacksOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListStacksOutput =>
    __isa(o, "ListStacksOutput");
}

export interface ListTypeRegistrationsInput {
  __type?: "ListTypeRegistrationsInput";
  /**
   * <p>The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The current status of the type registration request.</p>
   */
  RegistrationStatusFilter?: RegistrationStatus | string;

  /**
   * <p>The kind of type.</p>
   *          <p>Currently the only valid value is <code>RESOURCE</code>.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the type.</p>
   *          <p>Conditional: You must specify <code>TypeName</code> or <code>Arn</code>.</p>
   */
  TypeArn?: string;

  /**
   * <p>The name of the type.</p>
   *          <p>Conditional: You must specify <code>TypeName</code> or <code>Arn</code>.</p>
   */
  TypeName?: string;
}

export namespace ListTypeRegistrationsInput {
  export const filterSensitiveLog = (obj: ListTypeRegistrationsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTypeRegistrationsInput =>
    __isa(o, "ListTypeRegistrationsInput");
}

export interface ListTypeRegistrationsOutput {
  __type?: "ListTypeRegistrationsOutput";
  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If the request returns all results, <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p> A list of type registration tokens.</p>
   *          <p>Use <code>
   *                <a>DescribeTypeRegistration</a>
   *             </code> to return detailed information about a type registration request.</p>
   */
  RegistrationTokenList?: string[];
}

export namespace ListTypeRegistrationsOutput {
  export const filterSensitiveLog = (
    obj: ListTypeRegistrationsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTypeRegistrationsOutput =>
    __isa(o, "ListTypeRegistrationsOutput");
}

export interface ListTypesInput {
  __type?: "ListTypesInput";
  /**
   * <p>The deprecation status of the types that you want to get summary information about.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LIVE</code>: The type is registered for use in CloudFormation operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPRECATED</code>: The type has been deregistered and can no longer be used in CloudFormation operations. </p>
   *             </li>
   *          </ul>
   */
  DeprecatedStatus?: DeprecatedStatus | string;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The provisioning behavior of the type. AWS CloudFormation determines the provisioning type during registration, based on the types of handlers in the schema handler package submitted.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FULLY_MUTABLE</code>: The type includes an update handler to process updates to the type during stack update operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMMUTABLE</code>: The type does not include an update handler, so the type cannot be updated and must instead be replaced during stack update operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_PROVISIONABLE</code>: The type does not include create, read, and delete handlers, and therefore cannot actually be provisioned.</p>
   *             </li>
   *          </ul>
   */
  ProvisioningType?: ProvisioningType | string;

  /**
   * <p>The scope at which the type is visible and usable in CloudFormation operations.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PRIVATE</code>: The type is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any types you create as <code>PRIVATE</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUBLIC</code>: The type is publically visible and usable within any Amazon account.</p>
   *             </li>
   *          </ul>
   */
  Visibility?: Visibility | string;
}

export namespace ListTypesInput {
  export const filterSensitiveLog = (obj: ListTypesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTypesInput =>
    __isa(o, "ListTypesInput");
}

export interface ListTypesOutput {
  __type?: "ListTypesOutput";
  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If the request returns all results, <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>TypeSummary</code> structures that contain information about the specified types.</p>
   */
  TypeSummaries?: TypeSummary[];
}

export namespace ListTypesOutput {
  export const filterSensitiveLog = (obj: ListTypesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTypesOutput =>
    __isa(o, "ListTypesOutput");
}

export interface ListTypeVersionsInput {
  __type?: "ListTypeVersionsInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the type for which you want version summary information.</p>
   *          <p>Conditional: You must specify <code>TypeName</code> or <code>Arn</code>.</p>
   */
  Arn?: string;

  /**
   * <p>The deprecation status of the type versions that you want to get summary information about.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LIVE</code>: The type version is registered and can be used in CloudFormation operations, dependent on its provisioning behavior and visibility scope.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPRECATED</code>: The type version has been deregistered and can no longer be used in CloudFormation operations. </p>
   *             </li>
   *          </ul>
   */
  DeprecatedStatus?: DeprecatedStatus | string;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code> request parameter to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The kind of the type.</p>
   *          <p>Currently the only valid value is <code>RESOURCE</code>.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The name of the type for which you want version summary information.</p>
   *          <p>Conditional: You must specify <code>TypeName</code> or <code>Arn</code>.</p>
   */
  TypeName?: string;
}

export namespace ListTypeVersionsInput {
  export const filterSensitiveLog = (obj: ListTypeVersionsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTypeVersionsInput =>
    __isa(o, "ListTypeVersionsInput");
}

export interface ListTypeVersionsOutput {
  __type?: "ListTypeVersionsOutput";
  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If the request returns all results, <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>TypeVersionSummary</code> structures that contain information about the specified type's versions.</p>
   */
  TypeVersionSummaries?: TypeVersionSummary[];
}

export namespace ListTypeVersionsOutput {
  export const filterSensitiveLog = (obj: ListTypeVersionsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTypeVersionsOutput =>
    __isa(o, "ListTypeVersionsOutput");
}

/**
 * <p>Contains logging configuration information for a type.</p>
 */
export interface LoggingConfig {
  __type?: "LoggingConfig";
  /**
   * <p>The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.</p>
   */
  LogGroupName: string | undefined;

  /**
   * <p>The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.</p>
   */
  LogRoleArn: string | undefined;
}

export namespace LoggingConfig {
  export const filterSensitiveLog = (obj: LoggingConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is LoggingConfig => __isa(o, "LoggingConfig");
}

/**
 * <p>The specified name is already in use.</p>
 */
export interface NameAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "NameAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace NameAlreadyExistsException {
  export const filterSensitiveLog = (obj: NameAlreadyExistsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NameAlreadyExistsException =>
    __isa(o, "NameAlreadyExistsException");
}

export enum OnFailure {
  DELETE = "DELETE",
  DO_NOTHING = "DO_NOTHING",
  ROLLBACK = "ROLLBACK"
}

/**
 * <p>The specified operation ID already exists.</p>
 */
export interface OperationIdAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "OperationIdAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace OperationIdAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: OperationIdAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OperationIdAlreadyExistsException =>
    __isa(o, "OperationIdAlreadyExistsException");
}

/**
 * <p>Another operation is currently in progress for this stack set. Only one operation can
 *          be performed for a stack set at a given time.</p>
 */
export interface OperationInProgressException
  extends __SmithyException,
    $MetadataBearer {
  name: "OperationInProgressException";
  $fault: "client";
  Message?: string;
}

export namespace OperationInProgressException {
  export const filterSensitiveLog = (
    obj: OperationInProgressException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OperationInProgressException =>
    __isa(o, "OperationInProgressException");
}

/**
 * <p>The specified ID refers to an operation that doesn't exist.</p>
 */
export interface OperationNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "OperationNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace OperationNotFoundException {
  export const filterSensitiveLog = (obj: OperationNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is OperationNotFoundException =>
    __isa(o, "OperationNotFoundException");
}

export enum OperationStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS"
}

/**
 * <p>Error reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. CloudFormation does not return this error to users.</p>
 */
export interface OperationStatusCheckFailedException
  extends __SmithyException,
    $MetadataBearer {
  name: "OperationStatusCheckFailedException";
  $fault: "client";
  Message?: string;
}

export namespace OperationStatusCheckFailedException {
  export const filterSensitiveLog = (
    obj: OperationStatusCheckFailedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OperationStatusCheckFailedException =>
    __isa(o, "OperationStatusCheckFailedException");
}

/**
 * <p>The Output data type.</p>
 */
export interface Output {
  __type?: "Output";
  /**
   * <p>User defined description associated with the output.</p>
   */
  Description?: string;

  /**
   * <p>The name of the export associated with the output.</p>
   */
  ExportName?: string;

  /**
   * <p>The key associated with the output.</p>
   */
  OutputKey?: string;

  /**
   * <p>The value associated with the output.</p>
   */
  OutputValue?: string;
}

export namespace Output {
  export const filterSensitiveLog = (obj: Output): any => ({
    ...obj
  });
  export const isa = (o: any): o is Output => __isa(o, "Output");
}

/**
 * <p>The Parameter data type.</p>
 */
export interface Parameter {
  __type?: "Parameter";
  /**
   * <p>The key associated with the parameter. If you don't specify a key and value for a
   *          particular parameter, AWS CloudFormation uses the default value that is specified in your
   *          template.</p>
   */
  ParameterKey?: string;

  /**
   * <p>The input value associated with the parameter.</p>
   */
  ParameterValue?: string;

  /**
   * <p>Read-only. The value that corresponds to a Systems Manager parameter key. This field
   *          is returned only for <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html#aws-ssm-parameter-types">
   *                <code>SSM</code> parameter types</a> in the template.</p>
   */
  ResolvedValue?: string;

  /**
   * <p>During a stack update, use the existing parameter value that the stack is using for a
   *          given parameter key. If you specify <code>true</code>, do not specify a parameter
   *          value.</p>
   */
  UsePreviousValue?: boolean;
}

export namespace Parameter {
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj
  });
  export const isa = (o: any): o is Parameter => __isa(o, "Parameter");
}

/**
 * <p>A set of criteria that AWS CloudFormation uses to validate parameter values. Although
 *          other constraints might be defined in the stack template, AWS CloudFormation returns only
 *          the <code>AllowedValues</code> property.</p>
 */
export interface ParameterConstraints {
  __type?: "ParameterConstraints";
  /**
   * <p>A list of values that are permitted for a parameter.</p>
   */
  AllowedValues?: string[];
}

export namespace ParameterConstraints {
  export const filterSensitiveLog = (obj: ParameterConstraints): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterConstraints =>
    __isa(o, "ParameterConstraints");
}

/**
 * <p>The ParameterDeclaration data type.</p>
 */
export interface ParameterDeclaration {
  __type?: "ParameterDeclaration";
  /**
   * <p>The default value of the parameter.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The description that is associate with the parameter.</p>
   */
  Description?: string;

  /**
   * <p>Flag that indicates whether the parameter value is shown as plain text in logs and in
   *          the AWS Management Console.</p>
   */
  NoEcho?: boolean;

  /**
   * <p>The criteria that AWS CloudFormation uses to validate parameter values.</p>
   */
  ParameterConstraints?: ParameterConstraints;

  /**
   * <p>The name that is associated with the parameter.</p>
   */
  ParameterKey?: string;

  /**
   * <p>The type of parameter.</p>
   */
  ParameterType?: string;
}

export namespace ParameterDeclaration {
  export const filterSensitiveLog = (obj: ParameterDeclaration): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParameterDeclaration =>
    __isa(o, "ParameterDeclaration");
}

/**
 * <p>Context information that enables AWS CloudFormation to uniquely identify a resource. AWS CloudFormation uses
 *          context key-value pairs in cases where a resource's logical and physical IDs are not enough
 *          to uniquely identify that resource. Each context key-value pair specifies a resource that
 *          contains the targeted resource.</p>
 */
export interface PhysicalResourceIdContextKeyValuePair {
  __type?: "PhysicalResourceIdContextKeyValuePair";
  /**
   * <p>The resource context key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The resource context value.</p>
   */
  Value: string | undefined;
}

export namespace PhysicalResourceIdContextKeyValuePair {
  export const filterSensitiveLog = (
    obj: PhysicalResourceIdContextKeyValuePair
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PhysicalResourceIdContextKeyValuePair =>
    __isa(o, "PhysicalResourceIdContextKeyValuePair");
}

/**
 * <p>Information about a resource property whose actual value differs from its expected
 *          value, as defined in the stack template and any values specified as template parameters.
 *          These will be present only for resources whose <code>StackResourceDriftStatus</code> is
 *             <code>MODIFIED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
 *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
 */
export interface PropertyDifference {
  __type?: "PropertyDifference";
  /**
   * <p>The actual property value of the resource property.</p>
   */
  ActualValue: string | undefined;

  /**
   * <p>The type of property difference.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ADD</code>: A value has been added to a resource property that is an
   *                array or list data type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVE</code>: The property has been removed from the current resource
   *                configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_EQUAL</code>: The current property value differs from its expected
   *                value (as defined in the stack template and any values specified as template
   *                parameters).</p>
   *             </li>
   *          </ul>
   */
  DifferenceType: DifferenceType | string | undefined;

  /**
   * <p>The expected property value of the resource property, as defined in the stack
   *          template and any values specified as template parameters.</p>
   */
  ExpectedValue: string | undefined;

  /**
   * <p>The fully-qualified path to the resource property.</p>
   */
  PropertyPath: string | undefined;
}

export namespace PropertyDifference {
  export const filterSensitiveLog = (obj: PropertyDifference): any => ({
    ...obj
  });
  export const isa = (o: any): o is PropertyDifference =>
    __isa(o, "PropertyDifference");
}

export type ProvisioningType =
  | "FULLY_MUTABLE"
  | "IMMUTABLE"
  | "NON_PROVISIONABLE";

export interface RecordHandlerProgressInput {
  __type?: "RecordHandlerProgressInput";
  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.</p>
   */
  BearerToken: string | undefined;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.</p>
   */
  CurrentOperationStatus?: OperationStatus | string;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.</p>
   */
  ErrorCode?: HandlerErrorCode | string;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.</p>
   */
  OperationStatus: OperationStatus | string | undefined;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.</p>
   */
  ResourceModel?: string;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.</p>
   */
  StatusMessage?: string;
}

export namespace RecordHandlerProgressInput {
  export const filterSensitiveLog = (obj: RecordHandlerProgressInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is RecordHandlerProgressInput =>
    __isa(o, "RecordHandlerProgressInput");
}

export interface RecordHandlerProgressOutput {
  __type?: "RecordHandlerProgressOutput";
}

export namespace RecordHandlerProgressOutput {
  export const filterSensitiveLog = (
    obj: RecordHandlerProgressOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RecordHandlerProgressOutput =>
    __isa(o, "RecordHandlerProgressOutput");
}

export interface RegisterTypeInput {
  __type?: "RegisterTypeInput";
  /**
   * <p>A unique identifier that acts as an idempotency key for this registration request. Specifying a client request token prevents CloudFormation from generating more than one version of a type from the same registeration request, even if the request is submitted multiple times. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an
   *          <i>
   *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM execution
   *             role</a>
   *             </i> that includes the necessary permissions to call those
   *          AWS APIs, and provision that execution role in your account. CloudFormation then
   *          assumes that execution role to provide your resource type with the appropriate
   *          credentials.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>Specifies logging configuration information for a type.</p>
   */
  LoggingConfig?: LoggingConfig;

  /**
   * <p>A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register.</p>
   *          <p>For information on generating a schema handler package for the type you want to register, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-cli-submit.html">submit</a> in the <i>CloudFormation CLI User Guide</i>.</p>
   */
  SchemaHandlerPackage: string | undefined;

  /**
   * <p>The kind of type.</p>
   *          <p>Currently, the only valid value is <code>RESOURCE</code>.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The name of the type being registered.</p>
   *          <p>We recommend that type names adhere to the following pattern: <i>company_or_organization</i>::<i>service</i>::<i>type</i>.</p>
   *          <note>
   *             <p>The following organization namespaces are reserved and cannot be used in your resource type names:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <code>Alexa</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>AMZN</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>Amazon</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>AWS</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>Custom</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>Dev</code>
   *                   </p>
   *                </li>
   *             </ul>
   *          </note>
   */
  TypeName: string | undefined;
}

export namespace RegisterTypeInput {
  export const filterSensitiveLog = (obj: RegisterTypeInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterTypeInput =>
    __isa(o, "RegisterTypeInput");
}

export interface RegisterTypeOutput {
  __type?: "RegisterTypeOutput";
  /**
   * <p>The identifier for this registration request.</p>
   *          <p>Use this registration token when calling <code>
   *                <a>DescribeTypeRegistration</a>
   *             </code>, which returns information about the status and IDs of the type registration. </p>
   */
  RegistrationToken?: string;
}

export namespace RegisterTypeOutput {
  export const filterSensitiveLog = (obj: RegisterTypeOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterTypeOutput =>
    __isa(o, "RegisterTypeOutput");
}

export type RegistrationStatus = "COMPLETE" | "FAILED" | "IN_PROGRESS";

export type RegistryType = "RESOURCE";

export enum Replacement {
  Conditional = "Conditional",
  False = "False",
  True = "True"
}

export enum RequiresRecreation {
  Always = "Always",
  Conditionally = "Conditionally",
  Never = "Never"
}

export enum ResourceAttribute {
  CreationPolicy = "CreationPolicy",
  DeletionPolicy = "DeletionPolicy",
  Metadata = "Metadata",
  Properties = "Properties",
  Tags = "Tags",
  UpdatePolicy = "UpdatePolicy"
}

/**
 * <p>The <code>ResourceChange</code> structure describes the resource and the action that
 *          AWS CloudFormation will perform on it if you execute this change set.</p>
 */
export interface ResourceChange {
  __type?: "ResourceChange";
  /**
   * <p>The action that AWS CloudFormation takes on the resource, such as <code>Add</code>
   *          (adds a new resource), <code>Modify</code> (changes a resource), or <code>Remove</code>
   *          (deletes a resource).</p>
   */
  Action?: ChangeAction | string;

  /**
   * <p>For the <code>Modify</code> action, a list of <code>ResourceChangeDetail</code>
   *          structures that describes the changes that AWS CloudFormation will make to the resource.
   *       </p>
   */
  Details?: ResourceChangeDetail[];

  /**
   * <p>The resource's logical ID, which is defined in the stack's template.</p>
   */
  LogicalResourceId?: string;

  /**
   * <p>The resource's physical ID (resource name). Resources that you are adding don't have
   *          physical IDs because they haven't been created.</p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>For the <code>Modify</code> action, indicates whether AWS CloudFormation will replace
   *          the resource by creating a new one and deleting the old one. This value depends on the
   *          value of the <code>RequiresRecreation</code> property in the
   *             <code>ResourceTargetDefinition</code> structure. For example, if the
   *             <code>RequiresRecreation</code> field is <code>Always</code> and the
   *             <code>Evaluation</code> field is <code>Static</code>, <code>Replacement</code> is
   *             <code>True</code>. If the <code>RequiresRecreation</code> field is <code>Always</code>
   *          and the <code>Evaluation</code> field is <code>Dynamic</code>, <code>Replacement</code> is
   *             <code>Conditionally</code>.</p>
   *          <p>If you have multiple changes with different <code>RequiresRecreation</code> values,
   *          the <code>Replacement</code> value depends on the change with the most impact. A
   *             <code>RequiresRecreation</code> value of <code>Always</code> has the most impact,
   *          followed by <code>Conditionally</code>, and then <code>Never</code>.</p>
   */
  Replacement?: Replacement | string;

  /**
   * <p>The type of AWS CloudFormation resource, such as
   *          <code>AWS::S3::Bucket</code>.</p>
   */
  ResourceType?: string;

  /**
   * <p>For the <code>Modify</code> action, indicates which resource attribute is triggering
   *          this update, such as a change in the resource attribute's <code>Metadata</code>,
   *             <code>Properties</code>, or <code>Tags</code>.</p>
   */
  Scope?: (ResourceAttribute | string)[];
}

export namespace ResourceChange {
  export const filterSensitiveLog = (obj: ResourceChange): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceChange =>
    __isa(o, "ResourceChange");
}

/**
 * <p>For a resource with <code>Modify</code> as the action, the
 *             <code>ResourceChange</code> structure describes the changes AWS CloudFormation will make
 *          to that resource.</p>
 */
export interface ResourceChangeDetail {
  __type?: "ResourceChangeDetail";
  /**
   * <p>The identity of the entity that triggered this change. This entity is a member of the
   *          group that is specified by the <code>ChangeSource</code> field. For example, if you
   *          modified the value of the <code>KeyPairName</code> parameter, the
   *             <code>CausingEntity</code> is the name of the parameter
   *          (<code>KeyPairName</code>).</p>
   *          <p>If the <code>ChangeSource</code> value is <code>DirectModification</code>, no value
   *          is given for <code>CausingEntity</code>.</p>
   */
  CausingEntity?: string;

  /**
   * <p>The group to which the <code>CausingEntity</code> value belongs. There are five
   *          entity groups:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ResourceReference</code> entities are <code>Ref</code> intrinsic functions that
   *                refer to resources in the template, such as <code>{ "Ref" : "MyEC2InstanceResource"
   *                   }</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ParameterReference</code> entities are <code>Ref</code> intrinsic functions
   *                that get template parameter values, such as <code>{ "Ref" : "MyPasswordParameter"
   *                   }</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceAttribute</code> entities are <code>Fn::GetAtt</code> intrinsic
   *                functions that get resource attribute values, such as <code>{ "Fn::GetAtt" : [
   *                   "MyEC2InstanceResource", "PublicDnsName" ] }</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DirectModification</code> entities are changes that are made directly to the
   *                template.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Automatic</code> entities are <code>AWS::CloudFormation::Stack</code> resource
   *                types, which are also known as nested stacks. If you made no changes to the
   *                   <code>AWS::CloudFormation::Stack</code> resource, AWS CloudFormation sets the
   *                   <code>ChangeSource</code> to <code>Automatic</code> because the nested stack's
   *                template might have changed. Changes to a nested stack's template aren't visible to
   *                AWS CloudFormation until you run an update on the parent stack.</p>
   *             </li>
   *          </ul>
   */
  ChangeSource?: ChangeSource | string;

  /**
   * <p>Indicates whether AWS CloudFormation can determine the target value, and whether the
   *          target value will change before you execute a change set.</p>
   *          <p>For <code>Static</code> evaluations, AWS CloudFormation can determine that the target
   *          value will change, and its value. For example, if you directly modify the
   *             <code>InstanceType</code> property of an EC2 instance, AWS CloudFormation knows that
   *          this property value will change, and its value, so this is a <code>Static</code>
   *          evaluation.</p>
   *          <p>For <code>Dynamic</code> evaluations, cannot determine the target value because it
   *          depends on the result of an intrinsic function, such as a <code>Ref</code> or
   *             <code>Fn::GetAtt</code> intrinsic function, when the stack is updated. For example, if
   *          your template includes a reference to a resource that is conditionally recreated, the value
   *          of the reference (the physical ID of the resource) might change, depending on if the
   *          resource is recreated. If the resource is recreated, it will have a new physical ID, so all
   *          references to that resource will also be updated.</p>
   */
  Evaluation?: EvaluationType | string;

  /**
   * <p>A <code>ResourceTargetDefinition</code> structure that describes the field that AWS
   *          CloudFormation will change and whether the resource will be recreated.</p>
   */
  Target?: ResourceTargetDefinition;
}

export namespace ResourceChangeDetail {
  export const filterSensitiveLog = (obj: ResourceChangeDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceChangeDetail =>
    __isa(o, "ResourceChangeDetail");
}

/**
 * <p>Describes the target resources of a specific type in your import template (for example,
 *          all <code>AWS::S3::Bucket</code> resources) and the properties you can provide during the
 *          import to identify resources of that type.</p>
 */
export interface ResourceIdentifierSummary {
  __type?: "ResourceIdentifierSummary";
  /**
   * <p>The logical IDs of the target resources of the specified <code>ResourceType</code>, as
   *          defined in the import template.</p>
   */
  LogicalResourceIds?: string[];

  /**
   * <p>The resource properties you can provide during the import to identify your target
   *          resources. For example, <code>BucketName</code> is a possible identifier property for
   *             <code>AWS::S3::Bucket</code> resources.</p>
   */
  ResourceIdentifiers?: string[];

  /**
   * <p>The template resource type of the target resources, such as
   *          <code>AWS::S3::Bucket</code>.</p>
   */
  ResourceType?: string;
}

export namespace ResourceIdentifierSummary {
  export const filterSensitiveLog = (obj: ResourceIdentifierSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceIdentifierSummary =>
    __isa(o, "ResourceIdentifierSummary");
}

export enum ResourceSignalStatus {
  FAILURE = "FAILURE",
  SUCCESS = "SUCCESS"
}

export enum ResourceStatus {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETE_COMPLETE = "DELETE_COMPLETE",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  DELETE_SKIPPED = "DELETE_SKIPPED",
  IMPORT_COMPLETE = "IMPORT_COMPLETE",
  IMPORT_FAILED = "IMPORT_FAILED",
  IMPORT_IN_PROGRESS = "IMPORT_IN_PROGRESS",
  IMPORT_ROLLBACK_COMPLETE = "IMPORT_ROLLBACK_COMPLETE",
  IMPORT_ROLLBACK_FAILED = "IMPORT_ROLLBACK_FAILED",
  IMPORT_ROLLBACK_IN_PROGRESS = "IMPORT_ROLLBACK_IN_PROGRESS",
  UPDATE_COMPLETE = "UPDATE_COMPLETE",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS"
}

/**
 * <p>The field that AWS CloudFormation will change, such as the name of a resource's
 *          property, and whether the resource will be recreated.</p>
 */
export interface ResourceTargetDefinition {
  __type?: "ResourceTargetDefinition";
  /**
   * <p>Indicates which resource attribute is triggering this update, such as a change in the
   *          resource attribute's <code>Metadata</code>, <code>Properties</code>, or
   *          <code>Tags</code>.</p>
   */
  Attribute?: ResourceAttribute | string;

  /**
   * <p>If the <code>Attribute</code> value is <code>Properties</code>, the name of the
   *          property. For all other attributes, the value is null.</p>
   */
  Name?: string;

  /**
   * <p>If the <code>Attribute</code> value is <code>Properties</code>, indicates whether a
   *          change to this property causes the resource to be recreated. The value can be
   *             <code>Never</code>, <code>Always</code>, or <code>Conditionally</code>. To determine the
   *          conditions for a <code>Conditionally</code> recreation, see the update behavior for that
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">property</a> in the AWS CloudFormation User Guide.</p>
   */
  RequiresRecreation?: RequiresRecreation | string;
}

export namespace ResourceTargetDefinition {
  export const filterSensitiveLog = (obj: ResourceTargetDefinition): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceTargetDefinition =>
    __isa(o, "ResourceTargetDefinition");
}

/**
 * <p>Describes the target resource of an import operation.</p>
 */
export interface ResourceToImport {
  __type?: "ResourceToImport";
  /**
   * <p>The logical ID of the target resource as specified in the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>A key-value pair that identifies the target resource. The key is an identifier property
   *          (for example, <code>BucketName</code> for <code>AWS::S3::Bucket</code> resources) and the
   *          value is the actual property value (for example, <code>MyS3Bucket</code>).</p>
   */
  ResourceIdentifier: { [key: string]: string } | undefined;

  /**
   * <p>The type of resource to import into your stack, such as <code>AWS::S3::Bucket</code>.
   *       </p>
   */
  ResourceType: string | undefined;
}

export namespace ResourceToImport {
  export const filterSensitiveLog = (obj: ResourceToImport): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceToImport =>
    __isa(o, "ResourceToImport");
}

/**
 * <p>Structure containing the rollback triggers for AWS CloudFormation to monitor during stack creation
 *          and updating operations, and for the specified monitoring period afterwards.</p>
 *          <p>Rollback triggers enable you to have AWS CloudFormation monitor the state of your application
 *          during stack creation and updating, and to roll back that operation if the application
 *          breaches the threshold of any of the alarms you've specified. For more information, see
 *             <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack
 *             Operations</a>.</p>
 */
export interface RollbackConfiguration {
  __type?: "RollbackConfiguration";
  /**
   * <p>The amount of time, in minutes, during which CloudFormation should monitor all the
   *          rollback triggers after the stack creation or update operation deploys all necessary
   *          resources.</p>
   *          <p>The default is 0 minutes.</p>
   *          <p>If you specify a monitoring period but do not specify any rollback triggers,
   *          CloudFormation still waits the specified period of time before cleaning up old resources
   *          after update operations. You can use this monitoring period to perform any manual stack
   *          validation desired, and manually cancel the stack creation or update (using <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CancelUpdateStack.html">CancelUpdateStack</a>, for example) as necessary.</p>
   *          <p>If you specify 0 for this parameter, CloudFormation still monitors the specified
   *          rollback triggers during stack creation and update operations. Then, for update operations,
   *          it begins disposing of old resources immediately once the operation completes.</p>
   */
  MonitoringTimeInMinutes?: number;

  /**
   * <p>The triggers to monitor during stack creation or update actions. </p>
   *          <p>By default, AWS CloudFormation saves the rollback triggers specified for a stack and applies them
   *          to any subsequent update operations for the stack, unless you specify otherwise. If you do
   *          specify rollback triggers for this parameter, those triggers replace any list of triggers
   *          previously specified for the stack. This means:</p>
   *          <ul>
   *             <li>
   *                <p>To use the rollback triggers previously specified for this stack, if any, don't
   *                specify this parameter.</p>
   *             </li>
   *             <li>
   *                <p>To specify new or updated rollback triggers, you must specify
   *                   <i>all</i> the triggers that you want used for this stack, even
   *                triggers you've specifed before (for example, when creating the stack or during a
   *                previous stack update). Any triggers that you don't include in the updated list of
   *                triggers are no longer applied to the stack.</p>
   *             </li>
   *             <li>
   *                <p>To remove all currently specified triggers, specify an empty list for this
   *                parameter.</p>
   *             </li>
   *          </ul>
   *          <p>If a specified trigger is missing, the entire stack operation fails and is rolled
   *          back. </p>
   */
  RollbackTriggers?: RollbackTrigger[];
}

export namespace RollbackConfiguration {
  export const filterSensitiveLog = (obj: RollbackConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is RollbackConfiguration =>
    __isa(o, "RollbackConfiguration");
}

/**
 * <p>A rollback trigger AWS CloudFormation monitors during creation and updating of stacks. If any of
 *          the alarms you specify goes to ALARM state during the stack operation or within the
 *          specified monitoring period afterwards, CloudFormation rolls back the entire stack
 *          operation. </p>
 */
export interface RollbackTrigger {
  __type?: "RollbackTrigger";
  /**
   * <p>The Amazon Resource Name (ARN) of the rollback trigger.</p>
   *          <p>If a specified trigger is missing, the entire stack operation fails and is rolled
   *          back. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The resource type of the rollback trigger. Currently, <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cw-alarm.html">AWS::CloudWatch::Alarm</a> is the only supported resource type.</p>
   */
  Type: string | undefined;
}

export namespace RollbackTrigger {
  export const filterSensitiveLog = (obj: RollbackTrigger): any => ({
    ...obj
  });
  export const isa = (o: any): o is RollbackTrigger =>
    __isa(o, "RollbackTrigger");
}

/**
 * <p>The input for the <a>SetStackPolicy</a> action.</p>
 */
export interface SetStackPolicyInput {
  __type?: "SetStackPolicyInput";
  /**
   * <p>The name or unique stack ID that you want to associate a policy with.</p>
   */
  StackName: string | undefined;

  /**
   * <p>Structure containing the stack policy body. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent Updates
   *             to Stack Resources</a> in the AWS CloudFormation User Guide. You can specify either
   *          the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not
   *          both.</p>
   */
  StackPolicyBody?: string;

  /**
   * <p>Location of a file containing the stack policy. The URL must point to a policy
   *          (maximum size: 16 KB) located in an S3 bucket in the same region as the stack. You can
   *          specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code>
   *          parameter, but not both.</p>
   */
  StackPolicyURL?: string;
}

export namespace SetStackPolicyInput {
  export const filterSensitiveLog = (obj: SetStackPolicyInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetStackPolicyInput =>
    __isa(o, "SetStackPolicyInput");
}

export interface SetTypeDefaultVersionInput {
  __type?: "SetTypeDefaultVersionInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the type for which you want version summary information.</p>
   *          <p>Conditional: You must specify <code>TypeName</code> or <code>Arn</code>.</p>
   */
  Arn?: string;

  /**
   * <p>The kind of type.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The name of the type.</p>
   *          <p>Conditional: You must specify <code>TypeName</code> or <code>Arn</code>.</p>
   */
  TypeName?: string;

  /**
   * <p>The ID of a specific version of the type. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the type version when it is registered.</p>
   */
  VersionId?: string;
}

export namespace SetTypeDefaultVersionInput {
  export const filterSensitiveLog = (obj: SetTypeDefaultVersionInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetTypeDefaultVersionInput =>
    __isa(o, "SetTypeDefaultVersionInput");
}

export interface SetTypeDefaultVersionOutput {
  __type?: "SetTypeDefaultVersionOutput";
}

export namespace SetTypeDefaultVersionOutput {
  export const filterSensitiveLog = (
    obj: SetTypeDefaultVersionOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetTypeDefaultVersionOutput =>
    __isa(o, "SetTypeDefaultVersionOutput");
}

/**
 * <p>The input for the <a>SignalResource</a> action.</p>
 */
export interface SignalResourceInput {
  __type?: "SignalResourceInput";
  /**
   * <p>The logical ID of the resource that you want to signal. The logical ID is the name of
   *          the resource that given in the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>The stack name or unique stack ID that includes the resource that you want to
   *          signal.</p>
   */
  StackName: string | undefined;

  /**
   * <p>The status of the signal, which is either success or failure. A failure signal causes
   *          AWS CloudFormation to immediately fail the stack creation or update.</p>
   */
  Status: ResourceSignalStatus | string | undefined;

  /**
   * <p>A unique ID of the signal. When you signal Amazon EC2 instances or Auto Scaling
   *          groups, specify the instance ID that you are signaling as the unique ID. If you send
   *          multiple signals to a single resource (such as signaling a wait condition), each signal
   *          requires a different unique ID.</p>
   */
  UniqueId: string | undefined;
}

export namespace SignalResourceInput {
  export const filterSensitiveLog = (obj: SignalResourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is SignalResourceInput =>
    __isa(o, "SignalResourceInput");
}

/**
 * <p>The Stack data type.</p>
 */
export interface Stack {
  __type?: "Stack";
  /**
   * <p>The capabilities allowed in the stack.</p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>The unique ID of the change set.</p>
   */
  ChangeSetId?: string;

  /**
   * <p>The time at which the stack was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time the stack was deleted.</p>
   */
  DeletionTime?: Date;

  /**
   * <p>A user-defined description associated with the stack.</p>
   */
  Description?: string;

  /**
   * <p>Boolean to enable or disable rollback on stack creation failures:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>true</code>: disable rollback</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>false</code>: enable rollback</p>
   *             </li>
   *          </ul>
   */
  DisableRollback?: boolean;

  /**
   * <p>Information on whether a stack's actual configuration differs, or has
   *             <i>drifted</i>, from it's expected configuration, as defined in the stack
   *          template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration
   *             Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: StackDriftInformation;

  /**
   * <p>Whether termination protection is enabled for the stack.</p>
   *          <p> For <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>,
   *          termination protection is set on the root stack and cannot be changed directly on the
   *          nested stack. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being
   *             Deleted</a> in the <i>AWS CloudFormation User Guide</i>.</p>
   */
  EnableTerminationProtection?: boolean;

  /**
   * <p>The time the stack was last updated. This field will only be returned if the stack
   *          has been updated at least once.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>SNS topic ARNs to which stack related events are published.</p>
   */
  NotificationARNs?: string[];

  /**
   * <p>A list of output structures.</p>
   */
  Outputs?: Output[];

  /**
   * <p>A list of <code>Parameter</code> structures.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>For nested stacks--stacks created as resources for another stack--the stack ID of the
   *          direct parent of this stack. For the first level of nested stacks, the root stack is also
   *          the parent stack.</p>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Working with Nested Stacks</a> in the
   *          <i>AWS CloudFormation User Guide</i>.</p>
   */
  ParentId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role
   *          that is associated with the stack. During a stack operation, AWS CloudFormation uses this
   *          role's credentials to make calls on your behalf.</p>
   */
  RoleARN?: string;

  /**
   * <p>The rollback triggers for AWS CloudFormation to monitor during stack creation and
   *          updating operations, and for the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

  /**
   * <p>For nested stacks--stacks created as resources for another stack--the stack ID of the
   *          top-level stack to which the nested stack ultimately belongs.</p>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Working with Nested Stacks</a> in the
   *          <i>AWS CloudFormation User Guide</i>.</p>
   */
  RootId?: string;

  /**
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;

  /**
   * <p>The name associated with the stack.</p>
   */
  StackName: string | undefined;

  /**
   * <p>Current status of the stack.</p>
   */
  StackStatus: StackStatus | string | undefined;

  /**
   * <p>Success/failure message associated with the stack status.</p>
   */
  StackStatusReason?: string;

  /**
   * <p>A list of <code>Tag</code>s that specify information about the stack.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The amount of time within which stack creation should complete.</p>
   */
  TimeoutInMinutes?: number;
}

export namespace Stack {
  export const filterSensitiveLog = (obj: Stack): any => ({
    ...obj
  });
  export const isa = (o: any): o is Stack => __isa(o, "Stack");
}

export enum StackDriftDetectionStatus {
  DETECTION_COMPLETE = "DETECTION_COMPLETE",
  DETECTION_FAILED = "DETECTION_FAILED",
  DETECTION_IN_PROGRESS = "DETECTION_IN_PROGRESS"
}

/**
 * <p>Contains information about whether the stack's actual configuration differs, or has
 *             <i>drifted</i>, from its expected configuration, as defined in the stack
 *          template and any values specified as template parameters. A stack is considered to have
 *          drifted if one or more of its resources have drifted.</p>
 */
export interface StackDriftInformation {
  __type?: "StackDriftInformation";
  /**
   * <p>Most recent time when a drift detection operation was initiated on the stack, or any
   *          of its individual resources that support drift detection.</p>
   */
  LastCheckTimestamp?: Date;

  /**
   * <p>Status of the stack's actual configuration compared to its expected template
   *          configuration. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The stack differs from its expected template
   *                configuration. A stack is considered to have drifted if one or more of its resources
   *                have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: AWS CloudFormation has not checked if the stack differs from its
   *                expected template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The stack's actual configuration matches its expected
   *                template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: This value is reserved for future use.</p>
   *             </li>
   *          </ul>
   */
  StackDriftStatus: StackDriftStatus | string | undefined;
}

export namespace StackDriftInformation {
  export const filterSensitiveLog = (obj: StackDriftInformation): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackDriftInformation =>
    __isa(o, "StackDriftInformation");
}

/**
 * <p>Contains information about whether the stack's actual configuration differs, or has
 *             <i>drifted</i>, from its expected configuration, as defined in the stack
 *          template and any values specified as template parameters. A stack is considered to have
 *          drifted if one or more of its resources have drifted.</p>
 */
export interface StackDriftInformationSummary {
  __type?: "StackDriftInformationSummary";
  /**
   * <p>Most recent time when a drift detection operation was initiated on the stack, or any
   *          of its individual resources that support drift detection.</p>
   */
  LastCheckTimestamp?: Date;

  /**
   * <p>Status of the stack's actual configuration compared to its expected template
   *          configuration. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The stack differs from its expected template
   *                configuration. A stack is considered to have drifted if one or more of its resources
   *                have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: AWS CloudFormation has not checked if the stack differs from its
   *                expected template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The stack's actual configuration matches its expected
   *                template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: This value is reserved for future use.</p>
   *             </li>
   *          </ul>
   */
  StackDriftStatus: StackDriftStatus | string | undefined;
}

export namespace StackDriftInformationSummary {
  export const filterSensitiveLog = (
    obj: StackDriftInformationSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackDriftInformationSummary =>
    __isa(o, "StackDriftInformationSummary");
}

export enum StackDriftStatus {
  DRIFTED = "DRIFTED",
  IN_SYNC = "IN_SYNC",
  NOT_CHECKED = "NOT_CHECKED",
  UNKNOWN = "UNKNOWN"
}

/**
 * <p>The StackEvent data type.</p>
 */
export interface StackEvent {
  __type?: "StackEvent";
  /**
   * <p>The token passed to the operation that generated this event.</p>
   *          <p>All events triggered by a given stack operation are assigned the same client request
   *          token, which you can use to track operations. For example, if you execute a
   *             <code>CreateStack</code> operation with the token <code>token1</code>, then all the
   *             <code>StackEvents</code> generated by that operation will have
   *             <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab.
   *          Stack operations that are initiated from the console use the token format
   *             <i>Console-StackOperation-ID</i>, which helps you easily identify the
   *          stack operation . For example, if you create a stack using the console, each stack event
   *          would be assigned the same token in the following format:
   *             <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The unique ID of this event.</p>
   */
  EventId: string | undefined;

  /**
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId?: string;

  /**
   * <p>The name or unique identifier associated with the physical instance of the
   *          resource.</p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>BLOB of the properties used to create the resource.</p>
   */
  ResourceProperties?: string;

  /**
   * <p>Current status of the resource.</p>
   */
  ResourceStatus?: ResourceStatus | string;

  /**
   * <p>Success/failure message associated with the resource.</p>
   */
  ResourceStatusReason?: string;

  /**
   * <p>Type of resource. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html"> AWS
   *             Resource Types Reference</a> in the AWS CloudFormation User Guide.)</p>
   */
  ResourceType?: string;

  /**
   * <p>The unique ID name of the instance of the stack.</p>
   */
  StackId: string | undefined;

  /**
   * <p>The name associated with a stack.</p>
   */
  StackName: string | undefined;

  /**
   * <p>Time the status was updated.</p>
   */
  Timestamp: Date | undefined;
}

export namespace StackEvent {
  export const filterSensitiveLog = (obj: StackEvent): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackEvent => __isa(o, "StackEvent");
}

/**
 * <p>An AWS CloudFormation stack, in a specific account and region, that's part of a stack
 *          set operation. A stack instance is a reference to an attempted or actual stack in a given
 *          account within a given region. A stack instance can exist without a stack—for example, if
 *          the stack couldn't be created for some reason. A stack instance is associated with only one
 *          stack set. Each stack instance contains the ID of its associated stack set, as well as the
 *          ID of the actual stack and the stack status.</p>
 */
export interface StackInstance {
  __type?: "StackInstance";
  /**
   * <p>The name of the AWS account that the stack instance is associated with.</p>
   */
  Account?: string;

  /**
   * <p>Status of the stack instance's actual configuration compared to the expected template
   *          and parameter configuration of the stack set to which it belongs. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The stack differs from the expected template and parameter
   *                configuration of the stack set to which it belongs. A stack instance is considered to
   *                have drifted if one or more of the resources in the associated stack have
   *                drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: AWS CloudFormation has not checked if the stack instance differs from
   *                its expected stack set configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The stack instance's actual configuration matches its
   *                expected stack set configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: This value is reserved for future use.</p>
   *             </li>
   *          </ul>
   */
  DriftStatus?: StackDriftStatus | string;

  /**
   * <p>Most recent time when CloudFormation performed a drift detection operation on the stack
   *          instance. This value will be <code>NULL</code> for any stack instance on which drift
   *          detection has not yet been performed.</p>
   */
  LastDriftCheckTimestamp?: Date;

  /**
   * <p>A list of parameters from the stack set template whose values have been overridden in
   *          this stack instance.</p>
   */
  ParameterOverrides?: Parameter[];

  /**
   * <p>The name of the AWS region that the stack instance is associated with.</p>
   */
  Region?: string;

  /**
   * <p>The ID of the stack instance.</p>
   */
  StackId?: string;

  /**
   * <p>The name or unique ID of the stack set that the stack instance is associated
   *          with.</p>
   */
  StackSetId?: string;

  /**
   * <p>The status of the stack instance, in terms of its synchronization with its associated
   *          stack set.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INOPERABLE</code>: A <code>DeleteStackInstances</code> operation has
   *                failed and left the stack in an unstable state. Stacks in this state are excluded
   *                from further <code>UpdateStackSet</code> operations. You might need to perform a
   *                   <code>DeleteStackInstances</code> operation, with <code>RetainStacks</code> set to
   *                   <code>true</code>, to delete the stack instance, and then delete the stack
   *                manually.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTDATED</code>: The stack isn't currently up to date with the stack set
   *                because:</p>
   *                <ul>
   *                   <li>
   *                      <p>The associated stack failed during a <code>CreateStackSet</code> or
   *                         <code>UpdateStackSet</code> operation. </p>
   *                   </li>
   *                   <li>
   *                      <p>The stack was part of a <code>CreateStackSet</code> or
   *                         <code>UpdateStackSet</code> operation that failed or was stopped before the
   *                      stack was created or updated. </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CURRENT</code>: The stack is currently up to date with the stack
   *                set.</p>
   *             </li>
   *          </ul>
   */
  Status?: StackInstanceStatus | string;

  /**
   * <p>The explanation for the specific status code that is assigned to this stack
   *          instance.</p>
   */
  StatusReason?: string;
}

export namespace StackInstance {
  export const filterSensitiveLog = (obj: StackInstance): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackInstance => __isa(o, "StackInstance");
}

/**
 * <p>The specified stack instance doesn't exist.</p>
 */
export interface StackInstanceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "StackInstanceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace StackInstanceNotFoundException {
  export const filterSensitiveLog = (
    obj: StackInstanceNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackInstanceNotFoundException =>
    __isa(o, "StackInstanceNotFoundException");
}

export type StackInstanceStatus = "CURRENT" | "INOPERABLE" | "OUTDATED";

/**
 * <p>The structure that contains summary information about a stack instance.</p>
 */
export interface StackInstanceSummary {
  __type?: "StackInstanceSummary";
  /**
   * <p>The name of the AWS account that the stack instance is associated with.</p>
   */
  Account?: string;

  /**
   * <p>Status of the stack instance's actual configuration compared to the expected template
   *          and parameter configuration of the stack set to which it belongs. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The stack differs from the expected template and parameter
   *                configuration of the stack set to which it belongs. A stack instance is considered to
   *                have drifted if one or more of the resources in the associated stack have
   *                drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: AWS CloudFormation has not checked if the stack instance differs from
   *                its expected stack set configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The stack instance's actual configuration matches its
   *                expected stack set configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: This value is reserved for future use.</p>
   *             </li>
   *          </ul>
   */
  DriftStatus?: StackDriftStatus | string;

  /**
   * <p>Most recent time when CloudFormation performed a drift detection operation on the stack
   *          instance. This value will be <code>NULL</code> for any stack instance on which drift
   *          detection has not yet been performed.</p>
   */
  LastDriftCheckTimestamp?: Date;

  /**
   * <p>The name of the AWS region that the stack instance is associated with.</p>
   */
  Region?: string;

  /**
   * <p>The ID of the stack instance.</p>
   */
  StackId?: string;

  /**
   * <p>The name or unique ID of the stack set that the stack instance is associated
   *          with.</p>
   */
  StackSetId?: string;

  /**
   * <p>The status of the stack instance, in terms of its synchronization with its associated
   *          stack set.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INOPERABLE</code>: A <code>DeleteStackInstances</code> operation has
   *                failed and left the stack in an unstable state. Stacks in this state are excluded
   *                from further <code>UpdateStackSet</code> operations. You might need to perform a
   *                   <code>DeleteStackInstances</code> operation, with <code>RetainStacks</code> set to
   *                   <code>true</code>, to delete the stack instance, and then delete the stack
   *                manually.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTDATED</code>: The stack isn't currently up to date with the stack set
   *                because:</p>
   *                <ul>
   *                   <li>
   *                      <p>The associated stack failed during a <code>CreateStackSet</code> or
   *                         <code>UpdateStackSet</code> operation. </p>
   *                   </li>
   *                   <li>
   *                      <p>The stack was part of a <code>CreateStackSet</code> or
   *                         <code>UpdateStackSet</code> operation that failed or was stopped before the
   *                      stack was created or updated. </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CURRENT</code>: The stack is currently up to date with the stack
   *                set.</p>
   *             </li>
   *          </ul>
   */
  Status?: StackInstanceStatus | string;

  /**
   * <p>The explanation for the specific status code assigned to this stack
   *          instance.</p>
   */
  StatusReason?: string;
}

export namespace StackInstanceSummary {
  export const filterSensitiveLog = (obj: StackInstanceSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackInstanceSummary =>
    __isa(o, "StackInstanceSummary");
}

/**
 * <p>The StackResource data type.</p>
 */
export interface StackResource {
  __type?: "StackResource";
  /**
   * <p>User defined description associated with the resource.</p>
   */
  Description?: string;

  /**
   * <p>Information about whether the resource's actual configuration differs, or has
   *             <i>drifted</i>, from its expected configuration, as defined in the stack
   *          template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration
   *             Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: StackResourceDriftInformation;

  /**
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of a
   *          resource supported by AWS CloudFormation.</p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>Current status of the resource.</p>
   */
  ResourceStatus: ResourceStatus | string | undefined;

  /**
   * <p>Success/failure message associated with the resource.</p>
   */
  ResourceStatusReason?: string;

  /**
   * <p>Type of resource. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html"> AWS
   *             Resource Types Reference</a> in the AWS CloudFormation User Guide.)</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;

  /**
   * <p>The name associated with the stack.</p>
   */
  StackName?: string;

  /**
   * <p>Time the status was updated.</p>
   */
  Timestamp: Date | undefined;
}

export namespace StackResource {
  export const filterSensitiveLog = (obj: StackResource): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackResource => __isa(o, "StackResource");
}

/**
 * <p>Contains detailed information about the specified stack resource.</p>
 */
export interface StackResourceDetail {
  __type?: "StackResourceDetail";
  /**
   * <p>User defined description associated with the resource.</p>
   */
  Description?: string;

  /**
   * <p>Information about whether the resource's actual configuration differs, or has
   *             <i>drifted</i>, from its expected configuration, as defined in the stack
   *          template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration
   *             Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: StackResourceDriftInformation;

  /**
   * <p>Time the status was updated.</p>
   */
  LastUpdatedTimestamp: Date | undefined;

  /**
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>The content of the <code>Metadata</code> attribute declared for the resource. For
   *          more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-metadata.html">Metadata
   *             Attribute</a> in the AWS CloudFormation User Guide.</p>
   */
  Metadata?: string;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of a
   *          resource supported by AWS CloudFormation.</p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>Current status of the resource.</p>
   */
  ResourceStatus: ResourceStatus | string | undefined;

  /**
   * <p>Success/failure message associated with the resource.</p>
   */
  ResourceStatusReason?: string;

  /**
   * <p>Type of resource. ((For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html"> AWS
   *             Resource Types Reference</a> in the AWS CloudFormation User Guide.)</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;

  /**
   * <p>The name associated with the stack.</p>
   */
  StackName?: string;
}

export namespace StackResourceDetail {
  export const filterSensitiveLog = (obj: StackResourceDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackResourceDetail =>
    __isa(o, "StackResourceDetail");
}

/**
 * <p>Contains the drift information for a resource that has been checked for drift. This
 *          includes actual and expected property values for resources in which AWS CloudFormation has detected
 *          drift. Only resource properties explicitly defined in the stack template are checked for
 *          drift. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
 *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
 *          <p>Resources that do not currently support drift detection cannot be checked. For a list
 *          of resources that support drift detection, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support
 *             Drift Detection</a>.</p>
 *          <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual
 *          resources, or <a>DetectStackDrift</a> to detect drift on all resources in a
 *          given stack that support drift detection.</p>
 */
export interface StackResourceDrift {
  __type?: "StackResourceDrift";
  /**
   * <p>A JSON structure containing the actual property values of the stack
   *          resource.</p>
   *          <p>For resources whose <code>StackResourceDriftStatus</code> is <code>DELETED</code>,
   *          this structure will not be present. </p>
   */
  ActualProperties?: string;

  /**
   * <p>A JSON structure containing the expected property values of the stack resource, as
   *          defined in the stack template and any values specified as template parameters. </p>
   *          <p>For resources whose <code>StackResourceDriftStatus</code> is <code>DELETED</code>,
   *          this structure will not be present. </p>
   */
  ExpectedProperties?: string;

  /**
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of a
   *          resource supported by AWS CloudFormation. </p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>Context information that enables AWS CloudFormation to uniquely identify a resource. AWS CloudFormation uses
   *          context key-value pairs in cases where a resource's logical and physical IDs are not enough
   *          to uniquely identify that resource. Each context key-value pair specifies a unique resource
   *          that contains the targeted resource.</p>
   */
  PhysicalResourceIdContext?: PhysicalResourceIdContextKeyValuePair[];

  /**
   * <p>A collection of the resource properties whose actual values differ from their
   *          expected values. These will be present only for resources whose
   *             <code>StackResourceDriftStatus</code> is <code>MODIFIED</code>.
   *          </p>
   */
  PropertyDifferences?: PropertyDifference[];

  /**
   * <p>The type of the resource.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>The ID of the stack.</p>
   */
  StackId: string | undefined;

  /**
   * <p>Status of the resource's actual configuration compared to its expected
   *          configuration</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The resource differs from its expected template
   *                configuration because the resource has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFIED</code>: One or more resource properties differ from their
   *                expected values (as defined in the stack template and any values specified as
   *                template parameters).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The resources's actual configuration matches its expected
   *                template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: AWS CloudFormation does not currently return this value.</p>
   *             </li>
   *          </ul>
   */
  StackResourceDriftStatus: StackResourceDriftStatus | string | undefined;

  /**
   * <p>Time at which AWS CloudFormation performed drift detection on the stack resource.</p>
   */
  Timestamp: Date | undefined;
}

export namespace StackResourceDrift {
  export const filterSensitiveLog = (obj: StackResourceDrift): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackResourceDrift =>
    __isa(o, "StackResourceDrift");
}

/**
 * <p>Contains information about whether the resource's actual configuration differs, or
 *          has <i>drifted</i>, from its expected configuration.</p>
 */
export interface StackResourceDriftInformation {
  __type?: "StackResourceDriftInformation";
  /**
   * <p>When AWS CloudFormation last checked if the resource had drifted from its expected
   *          configuration.</p>
   */
  LastCheckTimestamp?: Date;

  /**
   * <p>Status of the resource's actual configuration compared to its expected
   *          configuration</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The resource differs from its expected configuration in
   *                that it has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFIED</code>: The resource differs from its expected
   *                configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: AWS CloudFormation has not checked if the resource differs from
   *                its expected configuration.</p>
   *                <p>Any resources that do not currently support drift detection have a status of
   *                   <code>NOT_CHECKED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The resources's actual configuration matches its expected
   *                configuration.</p>
   *             </li>
   *          </ul>
   */
  StackResourceDriftStatus: StackResourceDriftStatus | string | undefined;
}

export namespace StackResourceDriftInformation {
  export const filterSensitiveLog = (
    obj: StackResourceDriftInformation
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackResourceDriftInformation =>
    __isa(o, "StackResourceDriftInformation");
}

/**
 * <p>Summarizes information about whether the resource's actual configuration differs, or
 *          has <i>drifted</i>, from its expected configuration.</p>
 */
export interface StackResourceDriftInformationSummary {
  __type?: "StackResourceDriftInformationSummary";
  /**
   * <p>When AWS CloudFormation last checked if the resource had drifted from its expected
   *          configuration.</p>
   */
  LastCheckTimestamp?: Date;

  /**
   * <p>Status of the resource's actual configuration compared to its expected
   *          configuration</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The resource differs from its expected configuration in
   *                that it has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFIED</code>: The resource differs from its expected
   *                configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: AWS CloudFormation has not checked if the resource differs from
   *                its expected configuration.</p>
   *                <p>Any resources that do not currently support drift detection have a status of
   *                   <code>NOT_CHECKED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>. If you performed an <a>ContinueUpdateRollback</a> operation on a stack, any resources included in
   *                   <code>ResourcesToSkip</code> will also have a status of <code>NOT_CHECKED</code>.
   *                For more information on skipping resources during rollback operations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html">Continue Rolling Back an Update</a> in the AWS CloudFormation User Guide.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The resources's actual configuration matches its expected
   *                configuration.</p>
   *             </li>
   *          </ul>
   */
  StackResourceDriftStatus: StackResourceDriftStatus | string | undefined;
}

export namespace StackResourceDriftInformationSummary {
  export const filterSensitiveLog = (
    obj: StackResourceDriftInformationSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackResourceDriftInformationSummary =>
    __isa(o, "StackResourceDriftInformationSummary");
}

export enum StackResourceDriftStatus {
  DELETED = "DELETED",
  IN_SYNC = "IN_SYNC",
  MODIFIED = "MODIFIED",
  NOT_CHECKED = "NOT_CHECKED"
}

/**
 * <p>Contains high-level information about the specified stack resource.</p>
 */
export interface StackResourceSummary {
  __type?: "StackResourceSummary";
  /**
   * <p>Information about whether the resource's actual configuration differs, or has
   *             <i>drifted</i>, from its expected configuration, as defined in the stack
   *          template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration
   *             Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: StackResourceDriftInformationSummary;

  /**
   * <p>Time the status was updated.</p>
   */
  LastUpdatedTimestamp: Date | undefined;

  /**
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of the
   *          resource.</p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>Current status of the resource.</p>
   */
  ResourceStatus: ResourceStatus | string | undefined;

  /**
   * <p>Success/failure message associated with the resource.</p>
   */
  ResourceStatusReason?: string;

  /**
   * <p>Type of resource. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html"> AWS
   *             Resource Types Reference</a> in the AWS CloudFormation User Guide.)</p>
   */
  ResourceType: string | undefined;
}

export namespace StackResourceSummary {
  export const filterSensitiveLog = (obj: StackResourceSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackResourceSummary =>
    __isa(o, "StackResourceSummary");
}

/**
 * <p>A structure that contains information about a stack set. A stack set enables you to
 *          provision stacks into AWS accounts and across regions by using a single CloudFormation
 *          template. In the stack set, you specify the template to use, as well as any parameters and
 *          capabilities that the template requires. </p>
 */
export interface StackSet {
  __type?: "StackSet";
  /**
   * <p>The Amazon Resource Number (ARN) of the IAM role used to create or update the stack
   *          set.</p>
   *          <p>Use customized administrator roles to control which users or groups can manage specific
   *          stack sets within the same administrator account. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html">Prerequisites: Granting Permissions for Stack
   *             Set Operations</a> in the <i>AWS CloudFormation User Guide</i>.</p>
   */
  AdministrationRoleARN?: string;

  /**
   * <p>The capabilities that are allowed in the stack set. Some stack set templates might
   *          include resources that can affect permissions in your AWS account—for example, by creating
   *          new AWS Identity and Access Management (IAM) users. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates.</a>
   *          </p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>A description of the stack set that you specify when the stack set is created or
   *          updated.</p>
   */
  Description?: string;

  /**
   * <p>The name of the IAM execution role used to create or update the stack set. </p>
   *          <p>Use customized execution roles to control which stack resources users and groups can
   *          include in their stack sets.
   *
   *       </p>
   */
  ExecutionRoleName?: string;

  /**
   * <p>A list of input parameters for a stack set.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>The Amazon Resource Number (ARN) of the stack set.</p>
   */
  StackSetARN?: string;

  /**
   * <p>Detailed information about the drift status of the stack set.</p>
   *          <p>For stack sets, contains information about the last <i>completed</i> drift
   *          operation performed on the stack set. Information about drift operations currently in
   *          progress is not included.</p>
   */
  StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;

  /**
   * <p>The ID of the stack set.</p>
   */
  StackSetId?: string;

  /**
   * <p>The name that's associated with the stack set.</p>
   */
  StackSetName?: string;

  /**
   * <p>The status of the stack set.</p>
   */
  Status?: StackSetStatus | string;

  /**
   * <p>A list of tags that specify information about the stack set. A maximum number of 50
   *          tags can be specified.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The structure that contains the body of the template that was used to create or
   *          update the stack set.</p>
   */
  TemplateBody?: string;
}

export namespace StackSet {
  export const filterSensitiveLog = (obj: StackSet): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackSet => __isa(o, "StackSet");
}

/**
 * <p>Detailed information about the drift status of the stack set.</p>
 *          <p>For stack sets, contains information about the last <i>completed</i> drift
 *          operation performed on the stack set. Information about drift operations in-progress is not
 *          included. </p>
 *          <p>For stack set operations, includes information about drift operations currently being
 *          performed on the stack set.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged
 *             Changes in Stack Sets</a> in the <i>AWS CloudFormation User Guide</i>.</p>
 */
export interface StackSetDriftDetectionDetails {
  __type?: "StackSetDriftDetectionDetails";
  /**
   * <p>The status of the stack set drift detection operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code>: The drift detection operation completed without failing on
   *                any stack instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The drift detection operation exceeded the specified failure
   *                tolerance. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARTIAL_SUCCESS</code>: The drift detection operation completed without
   *                exceeding the failure tolerance for the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>: The drift detection operation is currently being
   *                performed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code>: The user has cancelled the drift detection operation.</p>
   *             </li>
   *          </ul>
   */
  DriftDetectionStatus?: StackSetDriftDetectionStatus | string;

  /**
   * <p>Status of the stack set's actual configuration compared to its expected template and
   *          parameter configuration. A stack set is considered to have drifted if one or more of its
   *          stack instances have drifted from their expected template and parameter
   *          configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: One or more of the stack instances belonging to the stack
   *                set stack differs from the expected template and parameter configuration. A stack
   *                instance is considered to have drifted if one or more of the resources in the
   *                associated stack have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: AWS CloudFormation has not checked the stack set for drift.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: All of the stack instances belonging to the stack set stack
   *                match from the expected template and parameter configuration.</p>
   *             </li>
   *          </ul>
   */
  DriftStatus?: StackSetDriftStatus | string;

  /**
   * <p>The number of stack instances that have drifted from the expected template and parameter
   *          configuration of the stack set. A stack instance is considered to have drifted if one or
   *          more of the resources in the associated stack do not match their expected
   *          configuration.</p>
   */
  DriftedStackInstancesCount?: number;

  /**
   * <p>The number of stack instances for which the drift detection operation failed.</p>
   */
  FailedStackInstancesCount?: number;

  /**
   * <p>The number of stack instances that are currently being checked for drift.</p>
   */
  InProgressStackInstancesCount?: number;

  /**
   * <p>The number of stack instances which match the expected template and parameter
   *          configuration of the stack set.</p>
   */
  InSyncStackInstancesCount?: number;

  /**
   * <p>Most recent time when CloudFormation performed a drift detection operation on the stack
   *          set. This value will be <code>NULL</code> for any stack set on which drift detection has
   *          not yet been performed.</p>
   */
  LastDriftCheckTimestamp?: Date;

  /**
   * <p>The total number of stack instances belonging to this stack set. </p>
   *          <p>The total number of stack instances is equal to the total of:</p>
   *          <ul>
   *             <li>
   *                <p>Stack instances that match the stack set configuration. </p>
   *             </li>
   *             <li>
   *                <p>Stack instances that have drifted from the stack set configuration. </p>
   *             </li>
   *             <li>
   *                <p>Stack instances where the drift detection operation has failed.</p>
   *             </li>
   *             <li>
   *                <p>Stack instances currently being checked for drift.</p>
   *             </li>
   *          </ul>
   */
  TotalStackInstancesCount?: number;
}

export namespace StackSetDriftDetectionDetails {
  export const filterSensitiveLog = (
    obj: StackSetDriftDetectionDetails
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackSetDriftDetectionDetails =>
    __isa(o, "StackSetDriftDetectionDetails");
}

export enum StackSetDriftDetectionStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PARTIAL_SUCCESS = "PARTIAL_SUCCESS",
  STOPPED = "STOPPED"
}

export enum StackSetDriftStatus {
  DRIFTED = "DRIFTED",
  IN_SYNC = "IN_SYNC",
  NOT_CHECKED = "NOT_CHECKED"
}

/**
 * <p>You can't yet delete this stack set, because it still contains one or more stack
 *          instances. Delete all stack instances from the stack set before deleting the stack
 *          set.</p>
 */
export interface StackSetNotEmptyException
  extends __SmithyException,
    $MetadataBearer {
  name: "StackSetNotEmptyException";
  $fault: "client";
  Message?: string;
}

export namespace StackSetNotEmptyException {
  export const filterSensitiveLog = (obj: StackSetNotEmptyException): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackSetNotEmptyException =>
    __isa(o, "StackSetNotEmptyException");
}

/**
 * <p>The specified stack set doesn't exist.</p>
 */
export interface StackSetNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "StackSetNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace StackSetNotFoundException {
  export const filterSensitiveLog = (obj: StackSetNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackSetNotFoundException =>
    __isa(o, "StackSetNotFoundException");
}

/**
 * <p>The structure that contains information about a stack set operation. </p>
 */
export interface StackSetOperation {
  __type?: "StackSetOperation";
  /**
   * <p>The type of stack set operation: <code>CREATE</code>, <code>UPDATE</code>, or
   *             <code>DELETE</code>. Create and delete operations affect only the specified stack set
   *          instances that are associated with the specified stack set. Update operations affect both
   *          the stack set itself, as well as <i>all</i> associated stack set
   *          instances.</p>
   */
  Action?: StackSetOperationAction | string;

  /**
   * <p>The Amazon Resource Number (ARN) of the IAM role used to perform this stack set
   *          operation. </p>
   *          <p>Use customized administrator roles to control which users or groups can manage specific
   *          stack sets within the same administrator account. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html">Define Permissions for Multiple
   *             Administrators</a> in the <i>AWS CloudFormation User Guide</i>.</p>
   */
  AdministrationRoleARN?: string;

  /**
   * <p>The time at which the operation was initiated. Note that the creation times for the
   *          stack set operation might differ from the creation time of the individual stacks
   *          themselves. This is because AWS CloudFormation needs to perform preparatory work for the
   *          operation, such as dispatching the work to the requested regions, before actually creating
   *          the first stacks.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The time at which the stack set operation ended, across all accounts and regions
   *          specified. Note that this doesn't necessarily mean that the stack set operation was
   *          successful, or even attempted, in each account or region.</p>
   */
  EndTimestamp?: Date;

  /**
   * <p>The name of the IAM execution role used to create or update the stack set.</p>
   *          <p>Use customized execution roles to control which stack resources users and groups can
   *          include in their stack sets.
   *
   *       </p>
   */
  ExecutionRoleName?: string;

  /**
   * <p>The unique ID of a stack set operation.</p>
   */
  OperationId?: string;

  /**
   * <p>The preferences for how AWS CloudFormation performs this stack set
   *          operation.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * <p>For stack set operations of action type <code>DELETE</code>, specifies whether to
   *          remove the stack instances from the specified stack set, but doesn't delete the stacks. You
   *          can't reassociate a retained stack, or add an existing, saved stack to a new stack
   *          set.</p>
   */
  RetainStacks?: boolean;

  /**
   * <p>Detailed information about the drift status of the stack set. This includes information
   *          about drift operations currently being performed on the stack set.</p>
   *          <p>this information will only be present for stack set operations whose <code>Action</code>
   *          type is <code>DETECT_DRIFT</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged
   *             Changes in Stack Sets</a> in the AWS CloudFormation User Guide.</p>
   */
  StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;

  /**
   * <p>The ID of the stack set.</p>
   */
  StackSetId?: string;

  /**
   * <p>The status of the operation. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation exceeded the specified failure tolerance.
   *                The failure tolerance value that you've set for an operation is applied for each
   *                region during stack create and update operations. If the number of failed stacks
   *                within a region exceeds the failure tolerance, the status of the operation in the
   *                region is set to <code>FAILED</code>. This in turn sets the status of the operation
   *                as a whole to <code>FAILED</code>, and AWS CloudFormation cancels the operation in
   *                any remaining regions.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>: The operation is currently being performed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code>: The user has cancelled the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPING</code>: The operation is in the process of stopping, at user
   *                request. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The operation completed creating or updating all the
   *                specified stacks without exceeding the failure tolerance for the operation.</p>
   *             </li>
   *          </ul>
   */
  Status?: StackSetOperationStatus | string;
}

export namespace StackSetOperation {
  export const filterSensitiveLog = (obj: StackSetOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackSetOperation =>
    __isa(o, "StackSetOperation");
}

export type StackSetOperationAction =
  | "CREATE"
  | "DELETE"
  | "DETECT_DRIFT"
  | "UPDATE";

/**
 * <p>The user-specified preferences for how AWS CloudFormation performs a stack set
 *          operation. </p>
 *          <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
 */
export interface StackSetOperationPreferences {
  __type?: "StackSetOperationPreferences";
  /**
   * <p>The number of accounts, per region, for which this operation can fail before AWS
   *          CloudFormation stops the operation in that region. If the operation is stopped in a region,
   *          AWS CloudFormation doesn't attempt the operation in any subsequent regions.</p>
   *          <p>Conditional: You must specify either <code>FailureToleranceCount</code> or
   *             <code>FailureTolerancePercentage</code> (but not both).</p>
   */
  FailureToleranceCount?: number;

  /**
   * <p>The percentage of accounts, per region, for which this stack operation can fail
   *          before AWS CloudFormation stops the operation in that region. If the operation is stopped
   *          in a region, AWS CloudFormation doesn't attempt the operation in any subsequent
   *          regions.</p>
   *          <p>When calculating the number of accounts based on the specified percentage, AWS
   *          CloudFormation rounds <i>down</i> to the next whole number.</p>
   *          <p>Conditional: You must specify either <code>FailureToleranceCount</code> or
   *             <code>FailureTolerancePercentage</code>, but not both.</p>
   */
  FailureTolerancePercentage?: number;

  /**
   * <p>The maximum number of accounts in which to perform this operation at one time. This
   *          is dependent on the value of
   *             <code>FailureToleranceCount</code>—<code>MaxConcurrentCount</code> is at most one more
   *          than the <code>FailureToleranceCount</code> .</p>
   *          <p>Note that this setting lets you specify the <i>maximum</i> for
   *          operations. For large deployments, under certain circumstances the actual number of
   *          accounts acted upon concurrently may be lower due to service throttling.</p>
   *          <p>Conditional: You must specify either <code>MaxConcurrentCount</code> or
   *             <code>MaxConcurrentPercentage</code>, but not both.</p>
   */
  MaxConcurrentCount?: number;

  /**
   * <p>The maximum percentage of accounts in which to perform this operation at one
   *          time.</p>
   *          <p>When calculating the number of accounts based on the specified percentage, AWS
   *          CloudFormation rounds down to the next whole number. This is true except in cases where
   *          rounding down would result is zero. In this case, CloudFormation sets the number as one
   *          instead.</p>
   *          <p>Note that this setting lets you specify the <i>maximum</i> for
   *          operations. For large deployments, under certain circumstances the actual number of
   *          accounts acted upon concurrently may be lower due to service throttling.</p>
   *          <p>Conditional: You must specify either <code>MaxConcurrentCount</code> or
   *             <code>MaxConcurrentPercentage</code>, but not both.</p>
   */
  MaxConcurrentPercentage?: number;

  /**
   * <p>The order of the regions in where you want to perform the stack operation.</p>
   */
  RegionOrder?: string[];
}

export namespace StackSetOperationPreferences {
  export const filterSensitiveLog = (
    obj: StackSetOperationPreferences
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackSetOperationPreferences =>
    __isa(o, "StackSetOperationPreferences");
}

export type StackSetOperationResultStatus =
  | "CANCELLED"
  | "FAILED"
  | "PENDING"
  | "RUNNING"
  | "SUCCEEDED";

/**
 * <p>The structure that contains information about a specified operation's results for a
 *          given account in a given region.</p>
 */
export interface StackSetOperationResultSummary {
  __type?: "StackSetOperationResultSummary";
  /**
   * <p>The name of the AWS account for this operation result.</p>
   */
  Account?: string;

  /**
   * <p>The results of the account gate function AWS CloudFormation invokes, if present,
   *          before proceeding with stack set operations in an account</p>
   */
  AccountGateResult?: AccountGateResult;

  /**
   * <p>The name of the AWS region for this operation result.</p>
   */
  Region?: string;

  /**
   * <p>The result status of the stack set operation for the given account in the given
   *          region.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code>: The operation in the specified account and region has
   *                been cancelled. This is either because a user has stopped the stack set operation, or
   *                because the failure tolerance of the stack set operation has been exceeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation in the specified account and region failed. </p>
   *                <p>If the stack set operation fails in enough accounts within a region, the
   *                failure tolerance for the stack set operation as a whole might be exceeded.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>: The operation in the specified account and region is
   *                currently in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: The operation in the specified account and region has yet
   *                to start. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The operation in the specified account and region
   *                completed successfully.</p>
   *             </li>
   *          </ul>
   */
  Status?: StackSetOperationResultStatus | string;

  /**
   * <p>The reason for the assigned result status.</p>
   */
  StatusReason?: string;
}

export namespace StackSetOperationResultSummary {
  export const filterSensitiveLog = (
    obj: StackSetOperationResultSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackSetOperationResultSummary =>
    __isa(o, "StackSetOperationResultSummary");
}

export type StackSetOperationStatus =
  | "FAILED"
  | "RUNNING"
  | "STOPPED"
  | "STOPPING"
  | "SUCCEEDED";

/**
 * <p>The structures that contain summary information about the specified
 *          operation.</p>
 */
export interface StackSetOperationSummary {
  __type?: "StackSetOperationSummary";
  /**
   * <p>The type of operation: <code>CREATE</code>, <code>UPDATE</code>, or
   *             <code>DELETE</code>. Create and delete operations affect only the specified stack
   *          instances that are associated with the specified stack set. Update operations affect both
   *          the stack set itself as well as <i>all</i> associated stack set
   *          instances.</p>
   */
  Action?: StackSetOperationAction | string;

  /**
   * <p>The time at which the operation was initiated. Note that the creation times for the
   *          stack set operation might differ from the creation time of the individual stacks
   *          themselves. This is because AWS CloudFormation needs to perform preparatory work for the
   *          operation, such as dispatching the work to the requested regions, before actually creating
   *          the first stacks.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The time at which the stack set operation ended, across all accounts and regions
   *          specified. Note that this doesn't necessarily mean that the stack set operation was
   *          successful, or even attempted, in each account or region.</p>
   */
  EndTimestamp?: Date;

  /**
   * <p>The unique ID of the stack set operation.</p>
   */
  OperationId?: string;

  /**
   * <p>The overall status of the operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation exceeded the specified failure tolerance.
   *                The failure tolerance value that you've set for an operation is applied for each
   *                region during stack create and update operations. If the number of failed stacks
   *                within a region exceeds the failure tolerance, the status of the operation in the
   *                region is set to <code>FAILED</code>. This in turn sets the status of the operation
   *                as a whole to <code>FAILED</code>, and AWS CloudFormation cancels the operation in
   *                any remaining regions.</p>
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>: The operation is currently being performed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code>: The user has cancelled the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPING</code>: The operation is in the process of stopping, at user
   *                request. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The operation completed creating or updating all the
   *                specified stacks without exceeding the failure tolerance for the operation.</p>
   *             </li>
   *          </ul>
   */
  Status?: StackSetOperationStatus | string;
}

export namespace StackSetOperationSummary {
  export const filterSensitiveLog = (obj: StackSetOperationSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackSetOperationSummary =>
    __isa(o, "StackSetOperationSummary");
}

export type StackSetStatus = "ACTIVE" | "DELETED";

/**
 * <p>The structures that contain summary information about the specified stack
 *          set.</p>
 */
export interface StackSetSummary {
  __type?: "StackSetSummary";
  /**
   * <p>A description of the stack set that you specify when the stack set is created or
   *          updated.</p>
   */
  Description?: string;

  /**
   * <p>Status of the stack set's actual configuration compared to its expected template and
   *          parameter configuration. A stack set is considered to have drifted if one or more of its
   *          stack instances have drifted from their expected template and parameter
   *          configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: One or more of the stack instances belonging to the stack
   *                set stack differs from the expected template and parameter configuration. A stack
   *                instance is considered to have drifted if one or more of the resources in the
   *                associated stack have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: AWS CloudFormation has not checked the stack set for drift.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: All of the stack instances belonging to the stack set stack
   *                match from the expected template and parameter configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: This value is reserved for future use.</p>
   *             </li>
   *          </ul>
   */
  DriftStatus?: StackDriftStatus | string;

  /**
   * <p>Most recent time when CloudFormation performed a drift detection operation on the stack
   *          set. This value will be <code>NULL</code> for any stack set on which drift detection has
   *          not yet been performed.</p>
   */
  LastDriftCheckTimestamp?: Date;

  /**
   * <p>The ID of the stack set.</p>
   */
  StackSetId?: string;

  /**
   * <p>The name of the stack set.</p>
   */
  StackSetName?: string;

  /**
   * <p>The status of the stack set.</p>
   */
  Status?: StackSetStatus | string;
}

export namespace StackSetSummary {
  export const filterSensitiveLog = (obj: StackSetSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackSetSummary =>
    __isa(o, "StackSetSummary");
}

export enum StackStatus {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETE_COMPLETE = "DELETE_COMPLETE",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  IMPORT_COMPLETE = "IMPORT_COMPLETE",
  IMPORT_IN_PROGRESS = "IMPORT_IN_PROGRESS",
  IMPORT_ROLLBACK_COMPLETE = "IMPORT_ROLLBACK_COMPLETE",
  IMPORT_ROLLBACK_FAILED = "IMPORT_ROLLBACK_FAILED",
  IMPORT_ROLLBACK_IN_PROGRESS = "IMPORT_ROLLBACK_IN_PROGRESS",
  REVIEW_IN_PROGRESS = "REVIEW_IN_PROGRESS",
  ROLLBACK_COMPLETE = "ROLLBACK_COMPLETE",
  ROLLBACK_FAILED = "ROLLBACK_FAILED",
  ROLLBACK_IN_PROGRESS = "ROLLBACK_IN_PROGRESS",
  UPDATE_COMPLETE = "UPDATE_COMPLETE",
  UPDATE_COMPLETE_CLEANUP_IN_PROGRESS = "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_ROLLBACK_COMPLETE = "UPDATE_ROLLBACK_COMPLETE",
  UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS = "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS",
  UPDATE_ROLLBACK_FAILED = "UPDATE_ROLLBACK_FAILED",
  UPDATE_ROLLBACK_IN_PROGRESS = "UPDATE_ROLLBACK_IN_PROGRESS"
}

/**
 * <p>The StackSummary Data Type</p>
 */
export interface StackSummary {
  __type?: "StackSummary";
  /**
   * <p>The time the stack was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time the stack was deleted.</p>
   */
  DeletionTime?: Date;

  /**
   * <p>Summarizes information on whether a stack's actual configuration differs, or has
   *             <i>drifted</i>, from it's expected configuration, as defined in the stack
   *          template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration
   *             Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: StackDriftInformationSummary;

  /**
   * <p>The time the stack was last updated. This field will only be returned if the stack
   *          has been updated at least once.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>For nested stacks--stacks created as resources for another stack--the stack ID of the
   *          direct parent of this stack. For the first level of nested stacks, the root stack is also
   *          the parent stack.</p>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Working with Nested Stacks</a> in the
   *          <i>AWS CloudFormation User Guide</i>.</p>
   */
  ParentId?: string;

  /**
   * <p>For nested stacks--stacks created as resources for another stack--the stack ID of the
   *          top-level stack to which the nested stack ultimately belongs.</p>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Working with Nested Stacks</a> in the
   *          <i>AWS CloudFormation User Guide</i>.</p>
   */
  RootId?: string;

  /**
   * <p>Unique stack identifier.</p>
   */
  StackId?: string;

  /**
   * <p>The name associated with the stack.</p>
   */
  StackName: string | undefined;

  /**
   * <p>The current status of the stack.</p>
   */
  StackStatus: StackStatus | string | undefined;

  /**
   * <p>Success/Failure message associated with the stack status.</p>
   */
  StackStatusReason?: string;

  /**
   * <p>The template description of the template used to create the stack.</p>
   */
  TemplateDescription?: string;
}

export namespace StackSummary {
  export const filterSensitiveLog = (obj: StackSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is StackSummary => __isa(o, "StackSummary");
}

/**
 * <p>Another operation has been performed on this stack set since the specified operation
 *          was performed. </p>
 */
export interface StaleRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "StaleRequestException";
  $fault: "client";
  Message?: string;
}

export namespace StaleRequestException {
  export const filterSensitiveLog = (obj: StaleRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is StaleRequestException =>
    __isa(o, "StaleRequestException");
}

export interface StopStackSetOperationInput {
  __type?: "StopStackSetOperationInput";
  /**
   * <p>The ID of the stack operation. </p>
   */
  OperationId: string | undefined;

  /**
   * <p>The name or unique ID of the stack set that you want to stop the operation
   *          for.</p>
   */
  StackSetName: string | undefined;
}

export namespace StopStackSetOperationInput {
  export const filterSensitiveLog = (obj: StopStackSetOperationInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopStackSetOperationInput =>
    __isa(o, "StopStackSetOperationInput");
}

export interface StopStackSetOperationOutput {
  __type?: "StopStackSetOperationOutput";
}

export namespace StopStackSetOperationOutput {
  export const filterSensitiveLog = (
    obj: StopStackSetOperationOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopStackSetOperationOutput =>
    __isa(o, "StopStackSetOperationOutput");
}

/**
 * <p>The Tag type enables you to specify a key-value pair that can be used to store
 *          information about an AWS CloudFormation stack.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>
   *             <i>Required</i>. A string used to identify this tag. You can specify a
   *          maximum of 128 characters for a tag key. Tags owned by Amazon Web Services (AWS) have the
   *          reserved prefix: <code>aws:</code>.</p>
   */
  Key: string | undefined;

  /**
   * <p>
   *             <i>Required</i>. A string containing the value for this tag. You can specify
   *          a maximum of 256 characters for a tag value.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p>The TemplateParameter data type.</p>
 */
export interface TemplateParameter {
  __type?: "TemplateParameter";
  /**
   * <p>The default value associated with the parameter.</p>
   */
  DefaultValue?: string;

  /**
   * <p>User defined description associated with the parameter.</p>
   */
  Description?: string;

  /**
   * <p>Flag indicating whether the parameter should be displayed as plain text in logs and
   *          UIs.</p>
   */
  NoEcho?: boolean;

  /**
   * <p>The name associated with the parameter.</p>
   */
  ParameterKey?: string;
}

export namespace TemplateParameter {
  export const filterSensitiveLog = (obj: TemplateParameter): any => ({
    ...obj
  });
  export const isa = (o: any): o is TemplateParameter =>
    __isa(o, "TemplateParameter");
}

export enum TemplateStage {
  Original = "Original",
  Processed = "Processed"
}

/**
 * <p>A client request token already exists.</p>
 */
export interface TokenAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TokenAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace TokenAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: TokenAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TokenAlreadyExistsException =>
    __isa(o, "TokenAlreadyExistsException");
}

/**
 * <p>The specified type does not exist in the CloudFormation registry.</p>
 */
export interface TypeNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "TypeNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace TypeNotFoundException {
  export const filterSensitiveLog = (obj: TypeNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TypeNotFoundException =>
    __isa(o, "TypeNotFoundException");
}

/**
 * <p>Contains summary information about the specified CloudFormation type.</p>
 */
export interface TypeSummary {
  __type?: "TypeSummary";
  /**
   * <p>The ID of the default version of the type. The default version is used when the type version is not specified.</p>
   *          <p>To set the default version of a type, use <code>
   *                <a>SetTypeDefaultVersion</a>
   *             </code>. </p>
   */
  DefaultVersionId?: string;

  /**
   * <p>The description of the type.</p>
   */
  Description?: string;

  /**
   * <p>When the current default version of the type was registered.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The kind of type.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the type.</p>
   */
  TypeArn?: string;

  /**
   * <p>The name of the type.</p>
   */
  TypeName?: string;
}

export namespace TypeSummary {
  export const filterSensitiveLog = (obj: TypeSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is TypeSummary => __isa(o, "TypeSummary");
}

/**
 * <p>Contains summary information about a specific version of a CloudFormation type.</p>
 */
export interface TypeVersionSummary {
  __type?: "TypeVersionSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the type version.</p>
   */
  Arn?: string;

  /**
   * <p>The description of the type version.</p>
   */
  Description?: string;

  /**
   * <p>When the version was registered.</p>
   */
  TimeCreated?: Date;

  /**
   * <p>The kind of type.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The name of the type.</p>
   */
  TypeName?: string;

  /**
   * <p>The ID of a specific version of the type. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the type version when it is registered.</p>
   */
  VersionId?: string;
}

export namespace TypeVersionSummary {
  export const filterSensitiveLog = (obj: TypeVersionSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is TypeVersionSummary =>
    __isa(o, "TypeVersionSummary");
}

/**
 * <p>The input for an <a>UpdateStack</a> action.</p>
 */
export interface UpdateStackInput {
  __type?: "UpdateStackInput";
  /**
   * <p>In some cases, you must explicitly acknowledge that your stack template contains certain
   *          capabilities in order for AWS CloudFormation to update the stack.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in
   *                your AWS account; for example, by creating new AWS Identity and Access Management
   *                (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one
   *                of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the
   *                   <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code>
   *                capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability. </p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i>
   *                      specify <code>CAPABILITY_NAMED_IAM</code>. </p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, AWS CloudFormation returns an
   *                         <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we recommend that you review
   *                all permissions associated with them and edit their permissions if
   *                necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html">
   *                         AWS::IAM::AccessKey</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">
   *                         AWS::IAM::Group</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html">
   *                         AWS::IAM::Policy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">
   *                         AWS::IAM::Role</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html">
   *                         AWS::IAM::User</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM
   *                   Resources in AWS CloudFormation Templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some template contain macros. Macros perform custom processing on templates; this
   *                can include simple actions like find-and-replace operations, all the way to extensive
   *                transformations of entire templates. Because of this, users typically create a change
   *                set from the processed template, so that they can review the changes resulting from
   *                the macros before actually updating the stack. If your stack template contains one or
   *                more macros, and you choose to update a stack directly from the processed template,
   *                without first reviewing the resulting changes in a change set, you must acknowledge
   *                this capability. This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by AWS CloudFormation.</p>
   *                <p>Change sets do not currently support nested stacks. If you want to update a stack
   *                from a stack template that contains macros <i>and</i> nested stacks,
   *                you must update the stack directly from the template using this capability.</p>
   *                <important>
   *                   <p>You should only update stacks directly from a stack template that contains
   *                   macros if you know what processing the macro performs.</p>
   *                   <p>Each macro relies on an underlying Lambda service function for processing stack
   *                   templates. Be aware that the Lambda function owner can update the function
   *                   operation without AWS CloudFormation being notified.</p>
   *                </important>
   *                <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using
   *                   AWS CloudFormation Macros to Perform Custom Processing on
   *                Templates</a>.</p>
   *             </li>
   *          </ul>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>A unique identifier for this <code>UpdateStack</code> request. Specify this token if
   *          you plan to retry requests so that AWS CloudFormation knows that you're not attempting to
   *          update a stack with the same name. You might retry <code>UpdateStack</code> requests to
   *          ensure that AWS CloudFormation successfully received them.</p>
   *          <p>All events triggered by a given stack operation are assigned the same client request
   *          token, which you can use to track operations. For example, if you execute a
   *             <code>CreateStack</code> operation with the token <code>token1</code>, then all the
   *             <code>StackEvents</code> generated by that operation will have
   *             <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab.
   *          Stack operations that are initiated from the console use the token format
   *             <i>Console-StackOperation-ID</i>, which helps you easily identify the
   *          stack operation . For example, if you create a stack using the console, each stack event
   *          would be assigned the same token in the following format:
   *             <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that AWS
   *          CloudFormation associates with the stack. Specify an empty list to remove all notification
   *          topics.</p>
   */
  NotificationARNs?: string[];

  /**
   * <p>A list of <code>Parameter</code> structures that specify input parameters for the
   *          stack. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data
   *          type.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>The template resource types that you have permissions to work with for this update
   *          stack action, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or
   *             <code>Custom::MyCustomInstance</code>.</p>
   *          <p>If the list of resource types doesn't include a resource that you're updating, the
   *          stack update fails. By default, AWS CloudFormation grants permissions to all resource
   *          types. AWS Identity and Access Management (IAM) uses this parameter for AWS
   *          CloudFormation-specific condition keys in IAM policies. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with AWS Identity and Access Management</a>.</p>
   */
  ResourceTypes?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role
   *          that AWS CloudFormation assumes to update the stack. AWS CloudFormation uses the role's
   *          credentials to make calls on your behalf. AWS CloudFormation always uses this role for all
   *          future operations on the stack. As long as users have permission to operate on the stack,
   *          AWS CloudFormation uses this role even if the users don't have permission to pass it.
   *          Ensure that the role grants least privilege.</p>
   *          <p>If you don't specify a value, AWS CloudFormation uses the role that was previously
   *          associated with the stack. If no role is available, AWS CloudFormation uses a temporary
   *          session that is generated from your user credentials.</p>
   */
  RoleARN?: string;

  /**
   * <p>The rollback triggers for AWS CloudFormation to monitor during stack creation and
   *          updating operations, and for the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

  /**
   * <p>The name or unique stack ID of the stack to update.</p>
   */
  StackName: string | undefined;

  /**
   * <p>Structure containing a new stack policy body. You can specify either the
   *             <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not
   *          both.</p>
   *          <p>You might update the stack policy, for example, in order to protect a new resource
   *          that you created during a stack update. If you do not specify a stack policy, the current
   *          policy that is associated with the stack is unchanged.</p>
   */
  StackPolicyBody?: string;

  /**
   * <p>Structure containing the temporary overriding stack policy body. You can specify
   *          either the <code>StackPolicyDuringUpdateBody</code> or the
   *             <code>StackPolicyDuringUpdateURL</code> parameter, but not both.</p>
   *          <p>If you want to update protected resources, specify a temporary overriding stack
   *          policy during this update. If you do not specify a stack policy, the current policy that is
   *          associated with the stack will be used.</p>
   */
  StackPolicyDuringUpdateBody?: string;

  /**
   * <p>Location of a file containing the temporary overriding stack policy. The URL must
   *          point to a policy (max size: 16KB) located in an S3 bucket in the same region as the stack.
   *          You can specify either the <code>StackPolicyDuringUpdateBody</code> or the
   *             <code>StackPolicyDuringUpdateURL</code> parameter, but not both.</p>
   *          <p>If you want to update protected resources, specify a temporary overriding stack
   *          policy during this update. If you do not specify a stack policy, the current policy that is
   *          associated with the stack will be used.</p>
   */
  StackPolicyDuringUpdateURL?: string;

  /**
   * <p>Location of a file containing the updated stack policy. The URL must point to a
   *          policy (max size: 16KB) located in an S3 bucket in the same region as the stack. You can
   *          specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code>
   *          parameter, but not both.</p>
   *          <p>You might update the stack policy, for example, in order to protect a new resource
   *          that you created during a stack update. If you do not specify a stack policy, the current
   *          policy that is associated with the stack is unchanged.</p>
   */
  StackPolicyURL?: string;

  /**
   * <p>Key-value pairs to associate with this stack. AWS CloudFormation also propagates
   *          these tags to supported resources in the stack. You can specify a maximum number of 50
   *          tags.</p>
   *          <p>If you don't specify this parameter, AWS CloudFormation doesn't modify the stack's
   *          tags. If you specify an empty value, AWS CloudFormation removes all associated
   *          tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Structure containing the template body with a minimum length of 1 byte and a maximum
   *          length of 51,200 bytes. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the AWS CloudFormation User Guide.)</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *             <code>TemplateBody</code>, <code>TemplateURL</code>, or set the
   *             <code>UsePreviousTemplate</code> to <code>true</code>.</p>
   */
  TemplateBody?: string;

  /**
   * <p>Location of file containing the template body. The URL must point to a template that
   *          is located in an Amazon S3 bucket. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the AWS CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *             <code>TemplateBody</code>, <code>TemplateURL</code>, or set the
   *             <code>UsePreviousTemplate</code> to <code>true</code>.</p>
   */
  TemplateURL?: string;

  /**
   * <p>Reuse the existing template that is associated with the stack that you are
   *          updating.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *             <code>TemplateBody</code>, <code>TemplateURL</code>, or set the
   *             <code>UsePreviousTemplate</code> to <code>true</code>.</p>
   */
  UsePreviousTemplate?: boolean;
}

export namespace UpdateStackInput {
  export const filterSensitiveLog = (obj: UpdateStackInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateStackInput =>
    __isa(o, "UpdateStackInput");
}

export interface UpdateStackInstancesInput {
  __type?: "UpdateStackInstancesInput";
  /**
   * <p>The names of one or more AWS accounts for which you want to update parameter values
   *          for stack instances. The overridden parameter values will be applied to all stack instances
   *          in the specified accounts and regions.</p>
   */
  Accounts: string[] | undefined;

  /**
   * <p>The unique identifier for this stack set operation. </p>
   *          <p>The operation ID also functions as an idempotency token, to ensure that AWS
   *          CloudFormation performs the stack set operation only once, even if you retry the request
   *          multiple times. You might retry stack set operation requests to ensure that AWS
   *          CloudFormation successfully received them.</p>
   *          <p>If you don't specify an operation ID, the SDK generates one automatically.
   *       </p>
   */
  OperationId?: string;

  /**
   * <p>Preferences for how AWS CloudFormation performs this stack set operation.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * <p> A list of input parameters whose values you want to update for the specified stack
   *          instances. </p>
   *          <p>Any overridden parameter values will be applied to all stack instances in the
   *          specified accounts and regions. When specifying parameters and their values, be aware of
   *          how AWS CloudFormation sets parameter values during stack instance update
   *          operations:</p>
   *          <ul>
   *             <li>
   *                <p>To override the current value for a parameter, include the parameter and
   *                specify its value.</p>
   *             </li>
   *             <li>
   *                <p>To leave a parameter set to its present value, you can do one of the
   *                following:</p>
   *                <ul>
   *                   <li>
   *                      <p>Do not include the parameter in the list.</p>
   *                   </li>
   *                   <li>
   *                      <p>Include the parameter and specify <code>UsePreviousValue</code> as
   *                         <code>true</code>. (You cannot specify both a value and set
   *                         <code>UsePreviousValue</code> to <code>true</code>.)</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>To set all overridden parameter back to the values specified in the stack set,
   *                specify a parameter list but do not include any parameters.</p>
   *             </li>
   *             <li>
   *                <p>To leave all parameters set to their present values, do not specify this
   *                property at all.</p>
   *             </li>
   *          </ul>
   *          <p>During stack set updates, any parameter values overridden for a stack instance are
   *          not updated, but retain their overridden value.</p>
   *          <p>You can only override the parameter <i>values</i> that are specified in
   *          the stack set; to add or delete a parameter itself, use <code>UpdateStackSet</code> to
   *          update the stack set template. If you add a parameter to a template, before you can
   *          override the parameter value specified in the stack set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and
   *          parameter value specified in the stack set. Once a stack instance has been updated with the
   *          new parameter, you can then override the parameter value using
   *             <code>UpdateStackInstances</code>.</p>
   */
  ParameterOverrides?: Parameter[];

  /**
   * <p>The names of one or more regions in which you want to update parameter values for
   *          stack instances. The overridden parameter values will be applied to all stack instances in
   *          the specified accounts and regions.</p>
   */
  Regions: string[] | undefined;

  /**
   * <p>The name or unique ID of the stack set associated with the stack instances.</p>
   */
  StackSetName: string | undefined;
}

export namespace UpdateStackInstancesInput {
  export const filterSensitiveLog = (obj: UpdateStackInstancesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateStackInstancesInput =>
    __isa(o, "UpdateStackInstancesInput");
}

export interface UpdateStackInstancesOutput {
  __type?: "UpdateStackInstancesOutput";
  /**
   * <p>The unique identifier for this stack set operation. </p>
   */
  OperationId?: string;
}

export namespace UpdateStackInstancesOutput {
  export const filterSensitiveLog = (obj: UpdateStackInstancesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateStackInstancesOutput =>
    __isa(o, "UpdateStackInstancesOutput");
}

/**
 * <p>The output for an <a>UpdateStack</a> action.</p>
 */
export interface UpdateStackOutput {
  __type?: "UpdateStackOutput";
  /**
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;
}

export namespace UpdateStackOutput {
  export const filterSensitiveLog = (obj: UpdateStackOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateStackOutput =>
    __isa(o, "UpdateStackOutput");
}

export interface UpdateStackSetInput {
  __type?: "UpdateStackSetInput";
  /**
   * <p>The accounts in which to update associated stack instances. If you specify accounts, you
   *          must also specify the regions in which to update stack set instances.</p>
   *          <p>To update <i>all</i> the stack instances associated with this stack set,
   *          do not specify the <code>Accounts</code> or <code>Regions</code> properties.</p>
   *          <p>If the stack set update includes changes to the template (that is, if the
   *             <code>TemplateBody</code> or <code>TemplateURL</code> properties are specified), or the
   *             <code>Parameters</code> property, AWS CloudFormation marks all stack instances with a status of
   *             <code>OUTDATED</code> prior to updating the stack instances in the specified accounts
   *          and regions. If the stack set update does not include changes to the template or
   *          parameters, AWS CloudFormation updates the stack instances in the specified accounts and regions, while
   *          leaving all other stack instances with their existing stack instance status. </p>
   */
  Accounts?: string[];

  /**
   * <p>The Amazon Resource Number (ARN) of the IAM role to use to update this stack set.</p>
   *          <p>Specify an IAM role only if you are using customized administrator roles to control
   *          which users or groups can manage specific stack sets within the same administrator account.
   *          For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html">Granting
   *             Permissions for Stack Set Operations</a> in the
   *             <i>AWS CloudFormation User Guide</i>.</p>
   *          <p>If you specified a customized administrator role when you created the stack set, you
   *          must specify a customized administrator role, even if it is the same customized
   *          administrator role used with this stack set previously.</p>
   */
  AdministrationRoleARN?: string;

  /**
   * <p>In some cases, you must explicitly acknowledge that your stack template contains certain
   *          capabilities in order for AWS CloudFormation to update the stack set and its associated stack
   *          instances.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in
   *                your AWS account; for example, by creating new AWS Identity and Access Management
   *                (IAM) users. For those stacks sets, you must explicitly acknowledge this by
   *                specifying one of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the
   *                   <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code>
   *                capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability. </p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i>
   *                      specify <code>CAPABILITY_NAMED_IAM</code>. </p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, AWS CloudFormation returns an
   *                         <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we recommend that you review
   *                all permissions associated with them and edit their permissions if
   *                necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html">
   *                         AWS::IAM::AccessKey</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">
   *                         AWS::IAM::Group</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html"> AWS::IAM::InstanceProfile</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html">
   *                         AWS::IAM::Policy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">
   *                         AWS::IAM::Role</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html">
   *                         AWS::IAM::User</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html"> AWS::IAM::UserToGroupAddition</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM
   *                   Resources in AWS CloudFormation Templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some templates contain macros. If your stack template contains one or more macros,
   *                and you choose to update a stack directly from the processed template, without first
   *                reviewing the resulting changes in a change set, you must acknowledge this
   *                capability. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using AWS CloudFormation Macros to Perform Custom Processing on
   *                Templates</a>.</p>
   *                <important>
   *                   <p>Stack sets do not currently support macros in stack templates. (This includes
   *                   the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a>
   *                   transforms, which are macros hosted by AWS CloudFormation.) Even if you specify this
   *                   capability, if you include a macro in your template the stack set operation will
   *                   fail.</p>
   *                </important>
   *             </li>
   *          </ul>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>A brief description of updates that you are making.</p>
   */
  Description?: string;

  /**
   * <p>The name of the IAM execution role to use to update the stack set. If you do not specify
   *          an execution role, AWS CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role
   *          for the stack set operation.</p>
   *          <p>Specify an IAM role only if you are using customized execution roles to control which
   *          stack resources users and groups can include in their stack sets.
   *
   *       </p>
   *          <p> If you specify a customized execution role, AWS CloudFormation uses that role to update the stack.
   *          If you do not specify a customized execution role, AWS CloudFormation performs the update using the role
   *          previously associated with the stack set, so long as you have permissions to perform
   *          operations on the stack set.</p>
   */
  ExecutionRoleName?: string;

  /**
   * <p>The unique ID for this stack set operation. </p>
   *          <p>The operation ID also functions as an idempotency token, to ensure that AWS
   *          CloudFormation performs the stack set operation only once, even if you retry the request
   *          multiple times. You might retry stack set operation requests to ensure that AWS
   *          CloudFormation successfully received them.</p>
   *          <p>If you don't specify an operation ID, AWS CloudFormation generates one
   *          automatically.</p>
   *          <p>Repeating this stack set operation with a new operation ID retries all stack
   *          instances whose status is <code>OUTDATED</code>. </p>
   */
  OperationId?: string;

  /**
   * <p>Preferences for how AWS CloudFormation performs this stack set operation.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * <p>A list of input parameters for the stack set template. </p>
   */
  Parameters?: Parameter[];

  /**
   * <p>The regions in which to update associated stack instances. If you specify regions, you
   *          must also specify accounts in which to update stack set instances.</p>
   *          <p>To update <i>all</i> the stack instances associated with this stack set,
   *          do not specify the <code>Accounts</code> or <code>Regions</code> properties.</p>
   *          <p>If the stack set update includes changes to the template (that is, if the
   *             <code>TemplateBody</code> or <code>TemplateURL</code> properties are specified), or the
   *             <code>Parameters</code> property, AWS CloudFormation marks all stack instances with a status of
   *             <code>OUTDATED</code> prior to updating the stack instances in the specified accounts
   *          and regions. If the stack set update does not include changes to the template or
   *          parameters, AWS CloudFormation updates the stack instances in the specified accounts and regions, while
   *          leaving all other stack instances with their existing stack instance status. </p>
   */
  Regions?: string[];

  /**
   * <p>The name or unique ID of the stack set that you want to update.</p>
   */
  StackSetName: string | undefined;

  /**
   * <p>The key-value pairs to associate with this stack set and the stacks created from it.
   *          AWS CloudFormation also propagates these tags to supported resources that are created in
   *          the stacks. You can specify a maximum number of 50 tags.</p>
   *          <p>If you specify tags for this parameter, those tags replace any list of tags that are
   *          currently associated with this stack set. This means:</p>
   *          <ul>
   *             <li>
   *                <p>If you don't specify this parameter, AWS CloudFormation doesn't modify the
   *                stack's tags. </p>
   *             </li>
   *             <li>
   *                <p>If you specify <i>any</i> tags using this parameter, you must
   *                specify <i>all</i> the tags that you want associated with this stack
   *                set, even tags you've specifed before (for example, when creating the stack set or
   *                during a previous update of the stack set.). Any tags that you don't include in the
   *                updated list of tags are removed from the stack set, and therefore from the stacks
   *                and resources as well. </p>
   *             </li>
   *             <li>
   *                <p>If you specify an empty value, AWS CloudFormation removes all currently
   *                associated tags.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify new tags as part of an <code>UpdateStackSet</code> action, AWS
   *          CloudFormation checks to see if you have the required IAM permission to tag resources. If
   *          you omit tags that are currently associated with the stack set from the list of tags you
   *          specify, AWS CloudFormation assumes that you want to remove those tags from the stack set,
   *          and checks to see if you have permission to untag resources. If you don't have the
   *          necessary permission(s), the entire <code>UpdateStackSet</code> action fails with an
   *             <code>access denied</code> error, and the stack set is not updated.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The structure that contains the template body, with a minimum length of 1 byte and a
   *          maximum length of 51,200 bytes. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the AWS CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *             <code>TemplateBody</code> or <code>TemplateURL</code>—or set
   *             <code>UsePreviousTemplate</code> to true.</p>
   */
  TemplateBody?: string;

  /**
   * <p>The location of the file that contains the template body. The URL must point to a
   *          template (maximum size: 460,800 bytes) that is located in an Amazon S3 bucket. For more
   *          information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the AWS CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *             <code>TemplateBody</code> or <code>TemplateURL</code>—or set
   *             <code>UsePreviousTemplate</code> to true. </p>
   */
  TemplateURL?: string;

  /**
   * <p>Use the existing template that's associated with the stack set that you're
   *          updating.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *             <code>TemplateBody</code> or <code>TemplateURL</code>—or set
   *             <code>UsePreviousTemplate</code> to true. </p>
   */
  UsePreviousTemplate?: boolean;
}

export namespace UpdateStackSetInput {
  export const filterSensitiveLog = (obj: UpdateStackSetInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateStackSetInput =>
    __isa(o, "UpdateStackSetInput");
}

export interface UpdateStackSetOutput {
  __type?: "UpdateStackSetOutput";
  /**
   * <p>The unique ID for this stack set operation.</p>
   */
  OperationId?: string;
}

export namespace UpdateStackSetOutput {
  export const filterSensitiveLog = (obj: UpdateStackSetOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateStackSetOutput =>
    __isa(o, "UpdateStackSetOutput");
}

export interface UpdateTerminationProtectionInput {
  __type?: "UpdateTerminationProtectionInput";
  /**
   * <p>Whether to enable termination protection on the specified stack.</p>
   */
  EnableTerminationProtection: boolean | undefined;

  /**
   * <p>The name or unique ID of the stack for which you want to set termination
   *          protection.</p>
   */
  StackName: string | undefined;
}

export namespace UpdateTerminationProtectionInput {
  export const filterSensitiveLog = (
    obj: UpdateTerminationProtectionInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTerminationProtectionInput =>
    __isa(o, "UpdateTerminationProtectionInput");
}

export interface UpdateTerminationProtectionOutput {
  __type?: "UpdateTerminationProtectionOutput";
  /**
   * <p>The unique ID of the stack.</p>
   */
  StackId?: string;
}

export namespace UpdateTerminationProtectionOutput {
  export const filterSensitiveLog = (
    obj: UpdateTerminationProtectionOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTerminationProtectionOutput =>
    __isa(o, "UpdateTerminationProtectionOutput");
}

/**
 * <p>The input for <a>ValidateTemplate</a> action.</p>
 */
export interface ValidateTemplateInput {
  __type?: "ValidateTemplateInput";
  /**
   * <p>Structure containing the template body with a minimum length of 1 byte and a maximum
   *          length of 51,200 bytes. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the AWS CloudFormation User Guide.</p>
   *          <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If
   *          both are passed, only <code>TemplateBody</code> is used.</p>
   */
  TemplateBody?: string;

  /**
   * <p>Location of file containing the template body. The URL must point to a template (max
   *          size: 460,800 bytes) that is located in an Amazon S3 bucket. For more information, go to
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the AWS CloudFormation User Guide.</p>
   *          <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If
   *          both are passed, only <code>TemplateBody</code> is used.</p>
   */
  TemplateURL?: string;
}

export namespace ValidateTemplateInput {
  export const filterSensitiveLog = (obj: ValidateTemplateInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValidateTemplateInput =>
    __isa(o, "ValidateTemplateInput");
}

/**
 * <p>The output for <a>ValidateTemplate</a> action.</p>
 */
export interface ValidateTemplateOutput {
  __type?: "ValidateTemplateOutput";
  /**
   * <p>The capabilities found within the template. If your template contains IAM resources,
   *          you must specify the CAPABILITY_IAM or CAPABILITY_NAMED_IAM value for this parameter when
   *          you use the <a>CreateStack</a> or <a>UpdateStack</a> actions with
   *          your template; otherwise, those actions return an InsufficientCapabilities error.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in AWS CloudFormation Templates</a>.</p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>The list of resources that generated the values in the <code>Capabilities</code>
   *          response element.</p>
   */
  CapabilitiesReason?: string;

  /**
   * <p>A list of the transforms that are declared in the template.</p>
   */
  DeclaredTransforms?: string[];

  /**
   * <p>The description found within the template.</p>
   */
  Description?: string;

  /**
   * <p>A list of <code>TemplateParameter</code> structures.</p>
   */
  Parameters?: TemplateParameter[];
}

export namespace ValidateTemplateOutput {
  export const filterSensitiveLog = (obj: ValidateTemplateOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValidateTemplateOutput =>
    __isa(o, "ValidateTemplateOutput");
}

export type Visibility = "PRIVATE" | "PUBLIC";
