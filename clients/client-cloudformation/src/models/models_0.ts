// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudFormationServiceException as __BaseException } from "./CloudFormationServiceException";

/**
 * @public
 * @enum
 */
export const AccountFilterType = {
  DIFFERENCE: "DIFFERENCE",
  INTERSECTION: "INTERSECTION",
  NONE: "NONE",
  UNION: "UNION",
} as const;

/**
 * @public
 */
export type AccountFilterType = (typeof AccountFilterType)[keyof typeof AccountFilterType];

/**
 * @public
 * @enum
 */
export const AccountGateStatus = {
  FAILED: "FAILED",
  SKIPPED: "SKIPPED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type AccountGateStatus = (typeof AccountGateStatus)[keyof typeof AccountGateStatus];

/**
 * @public
 * <p>Structure that contains the results of the account gate function which CloudFormation invokes, if present,
 *    before proceeding with a stack set operation in an account and Region.</p>
 *          <p>For each account and Region, CloudFormation lets you specify a Lambda function that encapsulates
 *    any requirements that must be met before CloudFormation can proceed with a stack set operation in that
 *    account and Region. CloudFormation invokes the function each time a stack set operation is requested for
 *    that account and Region; if the function returns <code>FAILED</code>, CloudFormation cancels the operation
 *    in that account and Region, and sets the stack set operation result status for that account and Region to
 *     <code>FAILED</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html">Configuring a target account
 *    gate</a>.</p>
 */
export interface AccountGateResult {
  /**
   * @public
   * <p>The status of the account gate function.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The account gate function has determined that the account and Region passes any
   *      requirements for a stack set operation to occur. CloudFormation proceeds with the stack operation in that
   *      account and Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The account gate function has determined that the account and Region doesn't meet the
   *      requirements for a stack set operation to occur. CloudFormation cancels the stack set operation in that account
   *      and Region, and sets the stack set operation result status for that account and Region to
   *      <code>FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIPPED</code>: CloudFormation has skipped calling the account gate function for this account and
   *      Region, for one of the following reasons:</p>
   *                <ul>
   *                   <li>
   *                      <p>An account gate function hasn't been specified for the account and Region. CloudFormation proceeds with
   *        the stack set operation in this account and Region.</p>
   *                   </li>
   *                   <li>
   *                      <p>The <code>AWSCloudFormationStackSetExecutionRole</code> of the stack set administration account lacks
   *        permissions to invoke the function. CloudFormation proceeds with the stack set operation in this account
   *        and Region.</p>
   *                   </li>
   *                   <li>
   *                      <p>Either no action is necessary, or no action is possible, on the stack. CloudFormation skips the stack
   *        set operation in this account and Region.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Status?: AccountGateStatus | string;

  /**
   * @public
   * <p>The reason for the account gate status assigned to this account and Region for the stack set operation.</p>
   */
  StatusReason?: string;
}

/**
 * @public
 * <p>The AccountLimit data type.</p>
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
 *          <p>For more information about these account limits, and other CloudFormation limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation
 *     quotas</a> in the <i>CloudFormation User Guide</i>.</p>
 */
export interface AccountLimit {
  /**
   * @public
   * <p>The name of the account limit.</p>
   *          <p>Values: <code>ConcurrentResourcesLimit</code> | <code>StackLimit</code> | <code>StackOutputsLimit</code>
   *          </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The value that's associated with the account limit name.</p>
   */
  Value?: number;
}

/**
 * @public
 */
export interface ActivateOrganizationsAccessInput {}

/**
 * @public
 */
export interface ActivateOrganizationsAccessOutput {}

/**
 * @public
 * <p>The specified operation isn't valid.</p>
 */
export class InvalidOperationException extends __BaseException {
  readonly name: "InvalidOperationException" = "InvalidOperationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOperationException, __BaseException>) {
    super({
      name: "InvalidOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The specified ID refers to an operation that doesn't exist.</p>
 */
export class OperationNotFoundException extends __BaseException {
  readonly name: "OperationNotFoundException" = "OperationNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotFoundException, __BaseException>) {
    super({
      name: "OperationNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Contains logging configuration information for an extension.</p>
 */
export interface LoggingConfig {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role that CloudFormation should assume when sending log entries
   *    to CloudWatch Logs.</p>
   */
  LogRoleArn: string | undefined;

  /**
   * @public
   * <p>The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking
   *    the extension's handlers.</p>
   */
  LogGroupName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ThirdPartyType = {
  HOOK: "HOOK",
  MODULE: "MODULE",
  RESOURCE: "RESOURCE",
} as const;

/**
 * @public
 */
export type ThirdPartyType = (typeof ThirdPartyType)[keyof typeof ThirdPartyType];

/**
 * @public
 * @enum
 */
export const VersionBump = {
  MAJOR: "MAJOR",
  MINOR: "MINOR",
} as const;

/**
 * @public
 */
export type VersionBump = (typeof VersionBump)[keyof typeof VersionBump];

/**
 * @public
 */
export interface ActivateTypeInput {
  /**
   * @public
   * <p>The extension type.</p>
   *          <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and
   *     <code>PublisherId</code>.</p>
   */
  Type?: ThirdPartyType | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the public extension.</p>
   *          <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and
   *     <code>PublisherId</code>.</p>
   */
  PublicTypeArn?: string;

  /**
   * @public
   * <p>The ID of the extension publisher.</p>
   *          <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and
   *     <code>PublisherId</code>.</p>
   */
  PublisherId?: string;

  /**
   * @public
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>, <code>Type</code>, and
   *     <code>PublisherId</code>.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>An alias to assign to the public extension, in this account and Region. If you specify an alias for the
   *    extension, CloudFormation treats the alias as the extension type name within this account and Region. You
   *    must use the alias to refer to the extension in your templates, API calls, and CloudFormation
   *    console.</p>
   *          <p>An extension alias must be unique within a given account and Region. You can activate the same public resource
   *    multiple times in the same account and Region, using different type name aliases.</p>
   */
  TypeNameAlias?: string;

  /**
   * @public
   * <p>Whether to automatically update the extension in this account and Region when a new <i>minor</i>
   *    version is published by the extension publisher. Major versions released by the publisher must be manually
   *    updated.</p>
   *          <p>The default is <code>true</code>.</p>
   */
  AutoUpdate?: boolean;

  /**
   * @public
   * <p>Contains logging configuration information for an extension.</p>
   */
  LoggingConfig?: LoggingConfig;

  /**
   * @public
   * <p>The name of the IAM execution role to use to activate the extension.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * @public
   * <p>Manually updates a previously-activated type to a new major or minor version, if available. You can also use
   *    this parameter to update the value of <code>AutoUpdate</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MAJOR</code>: CloudFormation updates the extension to the newest major version, if one is
   *      available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MINOR</code>: CloudFormation updates the extension to the newest minor version, if one is
   *      available.</p>
   *             </li>
   *          </ul>
   */
  VersionBump?: VersionBump | string;

  /**
   * @public
   * <p>The major version of this extension you want to activate, if multiple major versions are available. The default
   *    is the latest major version. CloudFormation uses the latest available <i>minor</i> version of
   *    the major version selected.</p>
   *          <p>You can specify <code>MajorVersion</code> or <code>VersionBump</code>, but not both.</p>
   */
  MajorVersion?: number;
}

/**
 * @public
 */
export interface ActivateTypeOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the activated extension, in this account and Region.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>An error occurred during a CloudFormation registry operation.</p>
 */
export class CFNRegistryException extends __BaseException {
  readonly name: "CFNRegistryException" = "CFNRegistryException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>An message with details about the error that occurred.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CFNRegistryException, __BaseException>) {
    super({
      name: "CFNRegistryException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CFNRegistryException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The specified extension doesn't exist in the CloudFormation registry.</p>
 */
export class TypeNotFoundException extends __BaseException {
  readonly name: "TypeNotFoundException" = "TypeNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>An message with details about the error that occurred.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TypeNotFoundException, __BaseException>) {
    super({
      name: "TypeNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TypeNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The resource with the name requested already exists.</p>
 */
export class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException" = "AlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>[Service-managed permissions] Describes whether StackSets automatically deploys to Organizations
 *    accounts that are added to a target organization or organizational unit (OU).</p>
 */
export interface AutoDeployment {
  /**
   * @public
   * <p>If set to <code>true</code>, StackSets automatically deploys additional stack instances to Organizations
   *    accounts that are added to a target organization or organizational unit (OU) in the specified Regions. If an account
   *    is removed from a target organization or OU, StackSets deletes stack instances from the account in the specified
   *    Regions.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>If set to <code>true</code>, stack resources are retained when an account is removed from a target organization
   *    or OU. If set to <code>false</code>, stack resources are deleted. Specify only if <code>Enabled</code> is set to
   *     <code>True</code>.</p>
   */
  RetainStacksOnAccountRemoval?: boolean;
}

/**
 * @public
 * <p>Identifying information for the configuration of a CloudFormation extension.</p>
 */
export interface TypeConfigurationIdentifier {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the extension, in this account and Region.</p>
   *          <p>For public extensions, this will be the ARN assigned when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">activate the type</a> in this account and
   *    Region. For private extensions, this will be the ARN assigned when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">register the type</a> in this account and
   *    Region.</p>
   */
  TypeArn?: string;

  /**
   * @public
   * <p>The alias specified for this configuration, if one was specified when the configuration was set.</p>
   */
  TypeConfigurationAlias?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the configuration, in this account and Region.</p>
   */
  TypeConfigurationArn?: string;

  /**
   * @public
   * <p>The type of extension.</p>
   */
  Type?: ThirdPartyType | string;

  /**
   * @public
   * <p>The name of the extension type to which this configuration applies.</p>
   */
  TypeName?: string;
}

/**
 * @public
 */
export interface BatchDescribeTypeConfigurationsInput {
  /**
   * @public
   * <p>The list of identifiers for the desired extension configurations.</p>
   */
  TypeConfigurationIdentifiers: TypeConfigurationIdentifier[] | undefined;
}

/**
 * @public
 * <p>Detailed information concerning an error generated during the setting of configuration data for a CloudFormation extension.</p>
 */
export interface BatchDescribeTypeConfigurationsError {
  /**
   * @public
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>Identifying information for the configuration of a CloudFormation extension.</p>
   */
  TypeConfigurationIdentifier?: TypeConfigurationIdentifier;
}

/**
 * @public
 * <p>Detailed information concerning the specification of a CloudFormation extension in a given account and
 *    Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at
 *     the account level</a> in the <i>CloudFormation User Guide</i>.</p>
 */
export interface TypeConfigurationDetails {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the configuration data, in this account and Region.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The alias specified for this configuration, if one was specified when the configuration was set.</p>
   */
  Alias?: string;

  /**
   * @public
   * <p>A JSON string specifying the configuration data for the extension, in this account and Region.</p>
   *          <p>If a configuration hasn't been set for a specified extension, CloudFormation returns
   *    <code>\{\}</code>.</p>
   */
  Configuration?: string;

  /**
   * @public
   * <p>When the configuration data was last updated for this extension.</p>
   *          <p>If a configuration hasn't been set for a specified extension, CloudFormation returns
   *    <code>null</code>.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the extension, in this account and Region.</p>
   *          <p>For public extensions, this will be the ARN assigned when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">activate the type</a> in this account and
   *    Region. For private extensions, this will be the ARN assigned when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">register the type</a> in this account and
   *    Region.</p>
   */
  TypeArn?: string;

  /**
   * @public
   * <p>The name of the extension.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>Whether this configuration data is the default configuration for the extension.</p>
   */
  IsDefaultConfiguration?: boolean;
}

/**
 * @public
 */
export interface BatchDescribeTypeConfigurationsOutput {
  /**
   * @public
   * <p>A list of information concerning any errors generated during the setting of the specified configurations.</p>
   */
  Errors?: BatchDescribeTypeConfigurationsError[];

  /**
   * @public
   * <p>A list of any of the specified extension configurations that CloudFormation could not process for any
   *    reason.</p>
   */
  UnprocessedTypeConfigurations?: TypeConfigurationIdentifier[];

  /**
   * @public
   * <p>A list of any of the specified extension configurations from the CloudFormation registry.</p>
   */
  TypeConfigurations?: TypeConfigurationDetails[];
}

/**
 * @public
 * <p>The specified extension configuration can't be found.</p>
 */
export class TypeConfigurationNotFoundException extends __BaseException {
  readonly name: "TypeConfigurationNotFoundException" = "TypeConfigurationNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>An message with details about the error that occurred.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TypeConfigurationNotFoundException, __BaseException>) {
    super({
      name: "TypeConfigurationNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TypeConfigurationNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const CallAs = {
  DELEGATED_ADMIN: "DELEGATED_ADMIN",
  SELF: "SELF",
} as const;

/**
 * @public
 */
export type CallAs = (typeof CallAs)[keyof typeof CallAs];

/**
 * @public
 * <p>The input for the <a>CancelUpdateStack</a> action.</p>
 */
export interface CancelUpdateStackInput {
  /**
   * @public
   * <note>
   *             <p>If you don't pass a parameter to <code>StackName</code>, the API returns a response that describes
   *        all resources in the account.</p>
   *             <p>The IAM policy below can be added to
   *        IAM policies when you want to limit resource-level permissions and
   *        avoid returning a response when no parameter is sent in the request:</p>
   *             <p>
   *                <code>\{ "Version": "2012-10-17", "Statement": [\{ "Effect": "Deny", "Action":
   *        "cloudformation:DescribeStacks", "NotResource":
   *        "arn:aws:cloudformation:*:*:stack/*\/*" \}] \}</code>
   *             </p>
   *          </note>
   *          <p>The name or the unique stack ID that's associated with the stack.</p>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>A unique identifier for this <code>CancelUpdateStack</code> request. Specify this token if you plan to retry
   *    requests so that CloudFormation knows that you're not attempting to cancel an update on a stack with the same
   *    name. You might retry <code>CancelUpdateStack</code> requests to ensure that CloudFormation successfully received
   *    them.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 * <p>A client request token already exists.</p>
 */
export class TokenAlreadyExistsException extends __BaseException {
  readonly name: "TokenAlreadyExistsException" = "TokenAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TokenAlreadyExistsException, __BaseException>) {
    super({
      name: "TokenAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TokenAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const Capability = {
  CAPABILITY_AUTO_EXPAND: "CAPABILITY_AUTO_EXPAND",
  CAPABILITY_IAM: "CAPABILITY_IAM",
  CAPABILITY_NAMED_IAM: "CAPABILITY_NAMED_IAM",
} as const;

/**
 * @public
 */
export type Capability = (typeof Capability)[keyof typeof Capability];

/**
 * @public
 * @enum
 */
export const Category = {
  ACTIVATED: "ACTIVATED",
  AWS_TYPES: "AWS_TYPES",
  REGISTERED: "REGISTERED",
  THIRD_PARTY: "THIRD_PARTY",
} as const;

/**
 * @public
 */
export type Category = (typeof Category)[keyof typeof Category];

/**
 * @public
 * @enum
 */
export const ChangeAction = {
  Add: "Add",
  Dynamic: "Dynamic",
  Import: "Import",
  Modify: "Modify",
  Remove: "Remove",
} as const;

/**
 * @public
 */
export type ChangeAction = (typeof ChangeAction)[keyof typeof ChangeAction];

/**
 * @public
 * @enum
 */
export const ChangeSource = {
  Automatic: "Automatic",
  DirectModification: "DirectModification",
  ParameterReference: "ParameterReference",
  ResourceAttribute: "ResourceAttribute",
  ResourceReference: "ResourceReference",
} as const;

/**
 * @public
 */
export type ChangeSource = (typeof ChangeSource)[keyof typeof ChangeSource];

/**
 * @public
 * @enum
 */
export const EvaluationType = {
  Dynamic: "Dynamic",
  Static: "Static",
} as const;

/**
 * @public
 */
export type EvaluationType = (typeof EvaluationType)[keyof typeof EvaluationType];

/**
 * @public
 * @enum
 */
export const ResourceAttribute = {
  CreationPolicy: "CreationPolicy",
  DeletionPolicy: "DeletionPolicy",
  Metadata: "Metadata",
  Properties: "Properties",
  Tags: "Tags",
  UpdatePolicy: "UpdatePolicy",
} as const;

/**
 * @public
 */
export type ResourceAttribute = (typeof ResourceAttribute)[keyof typeof ResourceAttribute];

/**
 * @public
 * @enum
 */
export const RequiresRecreation = {
  Always: "Always",
  Conditionally: "Conditionally",
  Never: "Never",
} as const;

/**
 * @public
 */
export type RequiresRecreation = (typeof RequiresRecreation)[keyof typeof RequiresRecreation];

/**
 * @public
 * <p>The field that CloudFormation will change, such as the name of a resource's property, and whether the
 *    resource will be recreated.</p>
 */
export interface ResourceTargetDefinition {
  /**
   * @public
   * <p>Indicates which resource attribute is triggering this update, such as a change in the resource attribute's
   *     <code>Metadata</code>, <code>Properties</code>, or <code>Tags</code>.</p>
   */
  Attribute?: ResourceAttribute | string;

  /**
   * @public
   * <p>If the <code>Attribute</code> value is <code>Properties</code>, the name of the property. For all other
   *    attributes, the value is null.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>If the <code>Attribute</code> value is <code>Properties</code>, indicates whether a change to this property
   *    causes the resource to be recreated. The value can be <code>Never</code>, <code>Always</code>, or
   *     <code>Conditionally</code>. To determine the conditions for a <code>Conditionally</code> recreation, see the update
   *    behavior for that <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">property</a> in the
   *    CloudFormation User Guide.</p>
   */
  RequiresRecreation?: RequiresRecreation | string;
}

/**
 * @public
 * <p>For a resource with <code>Modify</code> as the action, the <code>ResourceChange</code> structure describes the
 *    changes CloudFormation will make to that resource.</p>
 */
export interface ResourceChangeDetail {
  /**
   * @public
   * <p>A <code>ResourceTargetDefinition</code> structure that describes the field that CloudFormation will change
   *    and whether the resource will be recreated.</p>
   */
  Target?: ResourceTargetDefinition;

  /**
   * @public
   * <p>Indicates whether CloudFormation can determine the target value, and whether the target value will change
   *    before you execute a change set.</p>
   *          <p>For <code>Static</code> evaluations, CloudFormation can determine that the target value will change, and its
   *    value. For example, if you directly modify the <code>InstanceType</code> property of an EC2 instance, CloudFormation knows that this property value will change, and its value, so this is a <code>Static</code>
   *    evaluation.</p>
   *          <p>For <code>Dynamic</code> evaluations, can't determine the target value because it depends on the result of an
   *    intrinsic function, such as a <code>Ref</code> or <code>Fn::GetAtt</code> intrinsic function, when the stack is
   *    updated. For example, if your template includes a reference to a resource that's conditionally recreated, the value
   *    of the reference (the physical ID of the resource) might change, depending on if the resource is recreated. If the
   *    resource is recreated, it will have a new physical ID, so all references to that resource will also be
   *    updated.</p>
   */
  Evaluation?: EvaluationType | string;

  /**
   * @public
   * <p>The group to which the <code>CausingEntity</code> value belongs. There are five entity groups:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ResourceReference</code> entities are <code>Ref</code> intrinsic functions that refer to resources in the
   *      template, such as <code>\{ "Ref" : "MyEC2InstanceResource" \}</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ParameterReference</code> entities are <code>Ref</code> intrinsic functions that get template parameter
   *      values, such as <code>\{ "Ref" : "MyPasswordParameter" \}</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceAttribute</code> entities are <code>Fn::GetAtt</code> intrinsic functions that get resource attribute
   *      values, such as <code>\{ "Fn::GetAtt" : [ "MyEC2InstanceResource", "PublicDnsName" ] \}</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DirectModification</code> entities are changes that are made directly to the template.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Automatic</code> entities are <code>AWS::CloudFormation::Stack</code> resource types, which are also known as
   *      nested stacks. If you made no changes to the <code>AWS::CloudFormation::Stack</code> resource, CloudFormation
   *      sets the <code>ChangeSource</code> to <code>Automatic</code> because the nested stack's template might have
   *      changed. Changes to a nested stack's template aren't visible to CloudFormation until you run an update on the
   *      parent stack.</p>
   *             </li>
   *          </ul>
   */
  ChangeSource?: ChangeSource | string;

  /**
   * @public
   * <p>The identity of the entity that triggered this change. This entity is a member of the group that's specified by
   *    the <code>ChangeSource</code> field. For example, if you modified the value of the <code>KeyPairName</code>
   *    parameter, the <code>CausingEntity</code> is the name of the parameter (<code>KeyPairName</code>).</p>
   *          <p>If the <code>ChangeSource</code> value is <code>DirectModification</code>, no value is given for
   *     <code>CausingEntity</code>.</p>
   */
  CausingEntity?: string;
}

/**
 * @public
 * <p>Contains information about the module from which the resource was created, if the resource was created from a
 *    module included in the stack template.</p>
 *          <p>For more information about modules, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html">Using modules to encapsulate and reuse resource
 *     configurations</a> in the <i>CloudFormation User Guide</i>.</p>
 */
export interface ModuleInfo {
  /**
   * @public
   * <p>A concatenated list of the module type or types containing the resource. Module types are listed starting with
   *    the inner-most nested module, and separated by <code>/</code>.</p>
   *          <p>In the following example, the resource was created from a module of type
   *     <code>AWS::First::Example::MODULE</code>, that's nested inside a parent module of type
   *     <code>AWS::Second::Example::MODULE</code>.</p>
   *          <p>
   *             <code>AWS::First::Example::MODULE/AWS::Second::Example::MODULE</code>
   *          </p>
   */
  TypeHierarchy?: string;

  /**
   * @public
   * <p>A concatenated list of the logical IDs of the module or modules containing the resource. Modules are listed
   *    starting with the inner-most nested module, and separated by <code>/</code>.</p>
   *          <p>In the following example, the resource was created from a module, <code>moduleA</code>, that's nested inside a
   *    parent module, <code>moduleB</code>.</p>
   *          <p>
   *             <code>moduleA/moduleB</code>
   *          </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html#module-ref-resources">Referencing resources in a module</a>
   *    in the <i>CloudFormation User Guide</i>.</p>
   */
  LogicalIdHierarchy?: string;
}

/**
 * @public
 * @enum
 */
export const Replacement = {
  Conditional: "Conditional",
  False: "False",
  True: "True",
} as const;

/**
 * @public
 */
export type Replacement = (typeof Replacement)[keyof typeof Replacement];

/**
 * @public
 * <p>The <code>ResourceChange</code> structure describes the resource and the action that CloudFormation will
 *    perform on it if you execute this change set.</p>
 */
export interface ResourceChange {
  /**
   * @public
   * <p>The action that CloudFormation takes on the resource, such as <code>Add</code> (adds a new resource),
   *     <code>Modify</code> (changes a resource), <code>Remove</code> (deletes a resource), <code>Import</code> (imports a
   *    resource), or <code>Dynamic</code> (exact action for the resource can't be determined).</p>
   */
  Action?: ChangeAction | string;

  /**
   * @public
   * <p>The resource's logical ID, which is defined in the stack's template.</p>
   */
  LogicalResourceId?: string;

  /**
   * @public
   * <p>The resource's physical ID (resource name). Resources that you are adding don't have physical IDs because they
   *    haven't been created.</p>
   */
  PhysicalResourceId?: string;

  /**
   * @public
   * <p>The type of CloudFormation resource, such as <code>AWS::S3::Bucket</code>.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>For the <code>Modify</code> action, indicates whether CloudFormation will replace the resource by creating a
   *    new one and deleting the old one. This value depends on the value of the <code>RequiresRecreation</code> property in
   *    the <code>ResourceTargetDefinition</code> structure. For example, if the <code>RequiresRecreation</code> field is
   *     <code>Always</code> and the <code>Evaluation</code> field is <code>Static</code>, <code>Replacement</code> is
   *     <code>True</code>. If the <code>RequiresRecreation</code> field is <code>Always</code> and the
   *     <code>Evaluation</code> field is <code>Dynamic</code>, <code>Replacement</code> is
   *    <code>Conditionally</code>.</p>
   *          <p>If you have multiple changes with different <code>RequiresRecreation</code> values, the <code>Replacement</code>
   *    value depends on the change with the most impact. A <code>RequiresRecreation</code> value of <code>Always</code> has
   *    the most impact, followed by <code>Conditionally</code>, and then <code>Never</code>.</p>
   */
  Replacement?: Replacement | string;

  /**
   * @public
   * <p>For the <code>Modify</code> action, indicates which resource attribute is triggering this update, such as a
   *    change in the resource attribute's <code>Metadata</code>, <code>Properties</code>, or <code>Tags</code>.</p>
   */
  Scope?: (ResourceAttribute | string)[];

  /**
   * @public
   * <p>For the <code>Modify</code> action, a list of <code>ResourceChangeDetail</code> structures that describes the
   *    changes that CloudFormation will make to the resource.</p>
   */
  Details?: ResourceChangeDetail[];

  /**
   * @public
   * <p>The change set ID of the nested change set.</p>
   */
  ChangeSetId?: string;

  /**
   * @public
   * <p>Contains information about the module from which the resource was created, if the resource was created from a
   *    module included in the stack template.</p>
   */
  ModuleInfo?: ModuleInfo;
}

/**
 * @public
 * @enum
 */
export const ChangeType = {
  Resource: "Resource",
} as const;

/**
 * @public
 */
export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType];

/**
 * @public
 * <p>The <code>Change</code> structure describes the changes CloudFormation will perform if you execute the
 *    change set.</p>
 */
export interface Change {
  /**
   * @public
   * <p>The type of entity that CloudFormation changes. Currently, the only entity type is
   *    <code>Resource</code>.</p>
   */
  Type?: ChangeType | string;

  /**
   * @public
   * <p>Is either <code>null</code>, if no hooks invoke for the resource, or contains the number of hooks that will
   *    invoke for the resource.</p>
   */
  HookInvocationCount?: number;

  /**
   * @public
   * <p>A <code>ResourceChange</code> structure that describes the resource and action that CloudFormation will
   *    perform.</p>
   */
  ResourceChange?: ResourceChange;
}

/**
 * @public
 * @enum
 */
export const HookFailureMode = {
  FAIL: "FAIL",
  WARN: "WARN",
} as const;

/**
 * @public
 */
export type HookFailureMode = (typeof HookFailureMode)[keyof typeof HookFailureMode];

/**
 * @public
 * @enum
 */
export const HookInvocationPoint = {
  PRE_PROVISION: "PRE_PROVISION",
} as const;

/**
 * @public
 */
export type HookInvocationPoint = (typeof HookInvocationPoint)[keyof typeof HookInvocationPoint];

/**
 * @public
 * <p>Specifies <code>RESOURCE</code> type target details for activated hooks.</p>
 */
export interface ChangeSetHookResourceTargetDetails {
  /**
   * @public
   * <p>The resource's logical ID, which is defined in the stack's template.</p>
   */
  LogicalResourceId?: string;

  /**
   * @public
   * <p>The type of CloudFormation resource, such as <code>AWS::S3::Bucket</code>.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>Specifies the action of the resource.</p>
   */
  ResourceAction?: ChangeAction | string;
}

/**
 * @public
 * @enum
 */
export const HookTargetType = {
  RESOURCE: "RESOURCE",
} as const;

/**
 * @public
 */
export type HookTargetType = (typeof HookTargetType)[keyof typeof HookTargetType];

/**
 * @public
 * <p>Specifies target details for an activated hook.</p>
 */
export interface ChangeSetHookTargetDetails {
  /**
   * @public
   * <p>The name of the type.</p>
   */
  TargetType?: HookTargetType | string;

  /**
   * @public
   * <p>Required if <code>TargetType</code> is <code>RESOURCE</code>.</p>
   */
  ResourceTargetDetails?: ChangeSetHookResourceTargetDetails;
}

/**
 * @public
 * <p>Specifies the resource, the hook, and the hook version to be invoked.</p>
 */
export interface ChangeSetHook {
  /**
   * @public
   * <p>Specifies the points in provisioning logic where a hook is invoked.</p>
   */
  InvocationPoint?: HookInvocationPoint | string;

  /**
   * @public
   * <p>Specify the hook failure mode for non-compliant resources in the followings ways.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FAIL</code> Stops provisioning resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WARN</code> Allows provisioning to continue with a warning message.</p>
   *             </li>
   *          </ul>
   */
  FailureMode?: HookFailureMode | string;

  /**
   * @public
   * <p>The unique name for your hook. Specifies a three-part namespace for your hook, with a recommended pattern of
   *     <code>Organization::Service::Hook</code>.</p>
   *          <note>
   *             <p>The following organization namespaces are reserved and can't be used in your hook type names:</p>
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
   *                      <code>ASK</code>
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
  TypeName?: string;

  /**
   * @public
   * <p>The version ID of the type specified.</p>
   */
  TypeVersionId?: string;

  /**
   * @public
   * <p>The version ID of the type configuration.</p>
   */
  TypeConfigurationVersionId?: string;

  /**
   * @public
   * <p>Specifies details about the target that the hook will run against.</p>
   */
  TargetDetails?: ChangeSetHookTargetDetails;
}

/**
 * @public
 * @enum
 */
export const ChangeSetHooksStatus = {
  PLANNED: "PLANNED",
  PLANNING: "PLANNING",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type ChangeSetHooksStatus = (typeof ChangeSetHooksStatus)[keyof typeof ChangeSetHooksStatus];

/**
 * @public
 * <p>The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the
 *     <code>ListChangeSets</code> operation.</p>
 */
export class ChangeSetNotFoundException extends __BaseException {
  readonly name: "ChangeSetNotFoundException" = "ChangeSetNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ChangeSetNotFoundException, __BaseException>) {
    super({
      name: "ChangeSetNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ChangeSetNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ChangeSetStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_PENDING: "DELETE_PENDING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type ChangeSetStatus = (typeof ChangeSetStatus)[keyof typeof ChangeSetStatus];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  AVAILABLE: "AVAILABLE",
  EXECUTE_COMPLETE: "EXECUTE_COMPLETE",
  EXECUTE_FAILED: "EXECUTE_FAILED",
  EXECUTE_IN_PROGRESS: "EXECUTE_IN_PROGRESS",
  OBSOLETE: "OBSOLETE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * @public
 * <p>The <code>ChangeSetSummary</code> structure describes a change set, its status, and the stack with which it's
 *    associated.</p>
 */
export interface ChangeSetSummary {
  /**
   * @public
   * <p>The ID of the stack with which the change set is associated.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The name of the stack with which the change set is associated.</p>
   */
  StackName?: string;

  /**
   * @public
   * <p>The ID of the change set.</p>
   */
  ChangeSetId?: string;

  /**
   * @public
   * <p>The name of the change set.</p>
   */
  ChangeSetName?: string;

  /**
   * @public
   * <p>If the change set execution status is <code>AVAILABLE</code>, you can execute the change set. If you can't
   *    execute the change set, the status indicates why. For example, a change set might be in an <code>UNAVAILABLE</code>
   *    state because CloudFormation is still creating it or in an <code>OBSOLETE</code> state because the stack was
   *    already updated.</p>
   */
  ExecutionStatus?: ExecutionStatus | string;

  /**
   * @public
   * <p>The state of the change set, such as <code>CREATE_IN_PROGRESS</code>, <code>CREATE_COMPLETE</code>, or
   *     <code>FAILED</code>.</p>
   */
  Status?: ChangeSetStatus | string;

  /**
   * @public
   * <p>A description of the change set's status. For example, if your change set is in the <code>FAILED</code> state,
   *     CloudFormation shows the error message.</p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>The start time when the change set was created, in UTC.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>Descriptive information about the change set.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Specifies the current setting of <code>IncludeNestedStacks</code> for the change set.</p>
   */
  IncludeNestedStacks?: boolean;

  /**
   * @public
   * <p>The parent change set ID.</p>
   */
  ParentChangeSetId?: string;

  /**
   * @public
   * <p>The root change set ID.</p>
   */
  RootChangeSetId?: string;
}

/**
 * @public
 * @enum
 */
export const ChangeSetType = {
  CREATE: "CREATE",
  IMPORT: "IMPORT",
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type ChangeSetType = (typeof ChangeSetType)[keyof typeof ChangeSetType];

/**
 * @public
 * <p>The input for the <a>ContinueUpdateRollback</a> action.</p>
 */
export interface ContinueUpdateRollbackInput {
  /**
   * @public
   * <p>The name or the unique ID of the stack that you want to continue rolling back.</p>
   *          <note>
   *             <p>Don't specify the name of a nested stack (a stack that was created by using the
   *      <code>AWS::CloudFormation::Stack</code> resource). Instead, use this operation on the parent stack (the stack that
   *     contains the <code>AWS::CloudFormation::Stack</code> resource).</p>
   *          </note>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFormation assumes to roll back the stack. CloudFormation uses the role's credentials to make calls on your behalf.
   *     CloudFormation always uses this role for all future operations on the stack. Provided that users have
   *    permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to
   *    pass it. Ensure that the role grants least permission.</p>
   *          <p>If you don't specify a value, CloudFormation uses the role that was previously associated with the
   *    stack. If no role is available, CloudFormation uses a temporary session that's generated from your user
   *    credentials.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>A list of the logical IDs of the resources that CloudFormation skips during the continue update rollback
   *    operation. You can specify only resources that are in the <code>UPDATE_FAILED</code> state because a rollback failed.
   *    You can't specify resources that are in the <code>UPDATE_FAILED</code> state for other reasons, for example, because
   *    an update was canceled. To check why a resource update failed, use the <a>DescribeStackResources</a>
   *    action, and view the resource status reason.</p>
   *          <important>
   *             <p>Specify this property to skip rolling back resources that CloudFormation can't successfully roll back.
   *     We recommend that you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed">
   *      troubleshoot</a> resources before skipping them. CloudFormation sets the status of the specified
   *     resources to <code>UPDATE_COMPLETE</code> and continues to roll back the stack. After the rollback is complete, the
   *     state of the skipped resources will be inconsistent with the state of the resources in the stack template. Before
   *     performing another stack update, you must update the stack or resources to be consistent with each other. If you
   *     don't, subsequent stack updates might fail, and the stack will become unrecoverable.</p>
   *          </important>
   *          <p>Specify the minimum number of resources required to successfully roll back your stack. For example, a failed
   *    resource update might cause dependent resources to fail. In this case, it might not be necessary to skip the
   *    dependent resources.</p>
   *          <p>To skip resources that are part of nested stacks, use the following format:
   *     <code>NestedStackName.ResourceLogicalID</code>. If you want to specify the logical ID of a stack resource
   *     (<code>Type: AWS::CloudFormation::Stack</code>) in the <code>ResourcesToSkip</code> list, then its corresponding
   *    embedded stack must be in one of the following states: <code>DELETE_IN_PROGRESS</code>, <code>DELETE_COMPLETE</code>,
   *    or <code>DELETE_FAILED</code>.</p>
   *          <note>
   *             <p>Don't confuse a child stack's name with its corresponding logical ID defined in the parent stack. For an
   *     example of a continue update rollback operation with nested stacks, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html#nested-stacks">Using
   *      ResourcesToSkip to recover a nested stacks hierarchy</a>.</p>
   *          </note>
   */
  ResourcesToSkip?: string[];

  /**
   * @public
   * <p>A unique identifier for this <code>ContinueUpdateRollback</code> request. Specify this token if you plan to
   *    retry requests so that CloudFormation knows that you're not attempting to continue the rollback to a stack with
   *    the same name. You might retry <code>ContinueUpdateRollback</code> requests to ensure that CloudFormation
   *    successfully received them.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 * <p>The output for a <a>ContinueUpdateRollback</a> operation.</p>
 */
export interface ContinueUpdateRollbackOutput {}

/**
 * @public
 * @enum
 */
export const OnStackFailure = {
  DELETE: "DELETE",
  DO_NOTHING: "DO_NOTHING",
  ROLLBACK: "ROLLBACK",
} as const;

/**
 * @public
 */
export type OnStackFailure = (typeof OnStackFailure)[keyof typeof OnStackFailure];

/**
 * @public
 * <p>The Parameter data type.</p>
 */
export interface Parameter {
  /**
   * @public
   * <p>The key associated with the parameter. If you don't specify a key and value for a particular parameter, CloudFormation uses the default value that's specified in your template.</p>
   */
  ParameterKey?: string;

  /**
   * @public
   * <p>The input value associated with the parameter.</p>
   */
  ParameterValue?: string;

  /**
   * @public
   * <p>During a stack update, use the existing parameter value that the stack is using for a given parameter key. If
   *    you specify <code>true</code>, do not specify a parameter value.</p>
   */
  UsePreviousValue?: boolean;

  /**
   * @public
   * <p>Read-only. The value that corresponds to a SSM parameter key. This field is returned only for
   *     <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html#aws-ssm-parameter-types"> SSM</a>
   *    parameter types in the template.</p>
   */
  ResolvedValue?: string;
}

/**
 * @public
 * <p>Describes the target resource of an import operation.</p>
 */
export interface ResourceToImport {
  /**
   * @public
   * <p>The type of resource to import into your stack, such as <code>AWS::S3::Bucket</code>. For a list of supported
   *    resource types, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html">Resources that support import
   *     operations</a> in the CloudFormation User Guide.</p>
   */
  ResourceType: string | undefined;

  /**
   * @public
   * <p>The logical ID of the target resource as specified in the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * @public
   * <p>A key-value pair that identifies the target resource. The key is an identifier property (for example,
   *     <code>BucketName</code> for <code>AWS::S3::Bucket</code> resources) and the value is the actual property value (for
   *    example, <code>MyS3Bucket</code>).</p>
   */
  ResourceIdentifier: Record<string, string> | undefined;
}

/**
 * @public
 * <p>A rollback trigger CloudFormation monitors during creation and updating of stacks. If any of the alarms you specify goes
 *    to ALARM state during the stack operation or within the specified monitoring period afterwards, CloudFormation rolls back the entire stack operation.</p>
 */
export interface RollbackTrigger {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the rollback trigger.</p>
   *          <p>If a specified trigger is missing, the entire stack operation fails and is rolled back.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The resource type of the rollback trigger. Specify either <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cw-alarm.html">AWS::CloudWatch::Alarm</a> or <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html">AWS::CloudWatch::CompositeAlarm</a> resource types.</p>
   */
  Type: string | undefined;
}

/**
 * @public
 * <p>Structure containing the rollback triggers for CloudFormation to monitor during stack creation and updating operations,
 *    and for the specified monitoring period afterwards.</p>
 *          <p>Rollback triggers enable you to have CloudFormation monitor the state of your application during stack creation and
 *    updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've
 *    specified. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack
 *    Operations</a>.</p>
 */
export interface RollbackConfiguration {
  /**
   * @public
   * <p>The triggers to monitor during stack creation or update actions.</p>
   *          <p>By default, CloudFormation saves the rollback triggers specified for a stack and applies them to any subsequent update
   *    operations for the stack, unless you specify otherwise. If you do specify rollback triggers for this parameter, those
   *    triggers replace any list of triggers previously specified for the stack. This means:</p>
   *          <ul>
   *             <li>
   *                <p>To use the rollback triggers previously specified for this stack, if any, don't specify this parameter.</p>
   *             </li>
   *             <li>
   *                <p>To specify new or updated rollback triggers, you must specify <i>all</i> the triggers that you
   *      want used for this stack, even triggers you've specified before (for example, when creating the stack or during a
   *      previous stack update). Any triggers that you don't include in the updated list of triggers are no longer applied
   *      to the stack.</p>
   *             </li>
   *             <li>
   *                <p>To remove all currently specified triggers, specify an empty list for this parameter.</p>
   *             </li>
   *          </ul>
   *          <p>If a specified trigger is missing, the entire stack operation fails and is rolled back.</p>
   */
  RollbackTriggers?: RollbackTrigger[];

  /**
   * @public
   * <p>The amount of time, in minutes, during which CloudFormation should monitor all the rollback triggers
   *    after the stack creation or update operation deploys all necessary resources.</p>
   *          <p>The default is 0 minutes.</p>
   *          <p>If you specify a monitoring period but don't specify any rollback triggers, CloudFormation still waits
   *    the specified period of time before cleaning up old resources after update operations. You can use this monitoring
   *    period to perform any manual stack validation desired, and manually cancel the stack creation or update (using <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CancelUpdateStack.html">CancelUpdateStack</a>, for example) as necessary.</p>
   *          <p>If you specify 0 for this parameter, CloudFormation still monitors the specified rollback triggers
   *    during stack creation and update operations. Then, for update operations, it begins disposing of old resources
   *    immediately once the operation completes.</p>
   */
  MonitoringTimeInMinutes?: number;
}

/**
 * @public
 * <p>The Tag type enables you to specify a key-value pair that can be used to store information about an CloudFormation stack.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>
   *             <i>Required</i>. A string used to identify this tag. You can specify a maximum of 128 characters for a
   *    tag key. Tags owned by Amazon Web Services (Amazon Web Services) have the reserved prefix: <code>aws:</code>.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>
   *             <i>Required</i>. A string containing the value for this tag. You can specify a maximum of 256
   *    characters for a tag value.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>The input for the <a>CreateChangeSet</a> action.</p>
 */
export interface CreateChangeSetInput {
  /**
   * @public
   * <p>The name or the unique ID of the stack for which you are creating a change set. CloudFormation generates the
   *    change set by comparing this stack's information with the information that you submit, such as a modified template or
   *    different parameter input values.</p>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>A structure that contains the body of the revised template, with a minimum length of 1 byte and a maximum length
   *    of 51,200 bytes. CloudFormation generates the change set by comparing this template with the template of the
   *    stack that you specified.</p>
   *          <p>Conditional: You must specify only <code>TemplateBody</code> or <code>TemplateURL</code>.</p>
   */
  TemplateBody?: string;

  /**
   * @public
   * <p>The location of the file that contains the revised template. The URL must point to a template (max size: 460,800
   *    bytes) that's located in an Amazon S3 bucket or a Systems Manager document. CloudFormation generates the
   *    change set by comparing this template with the stack that you specified.</p>
   *          <p>Conditional: You must specify only <code>TemplateBody</code> or <code>TemplateURL</code>.</p>
   */
  TemplateURL?: string;

  /**
   * @public
   * <p>Whether to reuse the template that's associated with the stack to create the change set.</p>
   */
  UsePreviousTemplate?: boolean;

  /**
   * @public
   * <p>A list of <code>Parameter</code> structures that specify input parameters for the change set. For more
   *    information, see the <a>Parameter</a> data type.</p>
   */
  Parameters?: Parameter[];

  /**
   * @public
   * <p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order
   *    for CloudFormation to create the stack.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in your Amazon Web Services account;
   *      for example, by creating new Identity and Access Management (IAM) users. For those stacks, you must
   *      explicitly acknowledge this by specifying one of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or
   *       <code>CAPABILITY_NAMED_IAM</code> capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i> specify
   *         <code>CAPABILITY_NAMED_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
   *         <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we suggest that you review all permissions associated with
   *      them and edit their permissions if necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html">
   *         AWS::IAM::AccessKey</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">
   *         AWS::IAM::Group</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html">
   *         AWS::IAM::Policy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">
   *         AWS::IAM::Role</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html">
   *         AWS::IAM::User</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">AWS::IAM::UserToGroupAddition</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM
   *      resources in CloudFormation templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some template contain macros. Macros perform custom processing on templates; this can include simple actions
   *      like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this,
   *      users typically create a change set from the processed template, so that they can review the changes resulting from
   *      the macros before actually creating the stack. If your stack template contains one or more macros, and you choose
   *      to create a stack directly from the processed template, without first reviewing the resulting changes in a change
   *      set, you must acknowledge this capability. This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which
   *      are macros hosted by CloudFormation.</p>
   *                <note>
   *                   <p>This capacity doesn't apply to creating change sets, and specifying it when creating change sets has no
   *       effect.</p>
   *                   <p>If you want to create a stack from a stack template that contains macros <i>and</i> nested
   *       stacks, you must create or update the stack directly from the template using the <a>CreateStack</a> or
   *        <a>UpdateStack</a> action, and specifying this capability.</p>
   *                </note>
   *                <p>For more information about macros, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using CloudFormation macros to perform custom
   *      processing on templates</a>.</p>
   *             </li>
   *          </ul>
   */
  Capabilities?: (Capability | string)[];

  /**
   * @public
   * <p>The template resource types that you have permissions to work with if you execute this change set, such as
   *     <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>.</p>
   *          <p>If the list of resource types doesn't include a resource type that you're updating, the stack update fails. By
   *    default, CloudFormation grants permissions to all resource types. Identity and Access Management (IAM)
   *    uses this parameter for condition keys in IAM policies for CloudFormation. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling access
   *     with Identity and Access Management</a> in the CloudFormation User Guide.</p>
   */
  ResourceTypes?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFormation
   *    assumes when executing the change set. CloudFormation uses the role's credentials to make calls on your behalf.
   *     CloudFormation uses this role for all future operations on the stack. Provided that users have permission to
   *    operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure
   *    that the role grants least permission.</p>
   *          <p>If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If
   *    no role is available, CloudFormation uses a temporary session that is generated from your user
   *    credentials.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for
   *    the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

  /**
   * @public
   * <p>The Amazon Resource Names (ARNs) of Amazon Simple Notification Service (Amazon SNS) topics that CloudFormation
   *    associates with the stack. To remove all associated notification topics, specify an empty list.</p>
   */
  NotificationARNs?: string[];

  /**
   * @public
   * <p>Key-value pairs to associate with this stack. CloudFormation also propagates these tags to resources in the
   *    stack. You can specify a maximum of 50 tags.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The name of the change set. The name must be unique among all change sets that are associated with the specified
   *    stack.</p>
   *          <p>A change set name can contain only alphanumeric, case sensitive characters, and hyphens. It must start with an
   *    alphabetical character and can't exceed 128 characters.</p>
   */
  ChangeSetName: string | undefined;

  /**
   * @public
   * <p>A unique identifier for this <code>CreateChangeSet</code> request. Specify this token if you plan to retry
   *    requests so that CloudFormation knows that you're not attempting to create another change set with the same name.
   *    You might retry <code>CreateChangeSet</code> requests to ensure that CloudFormation successfully received
   *    them.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>A description to help you identify this change set.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of change set operation. To create a change set for a new stack, specify <code>CREATE</code>. To create
   *    a change set for an existing stack, specify <code>UPDATE</code>. To create a change set for an import operation,
   *    specify <code>IMPORT</code>.</p>
   *          <p>If you create a change set for a new stack, CloudFormation creates a stack with a unique stack ID, but no
   *    template or resources. The stack will be in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-describing-stacks.html#d0e11995">REVIEW_IN_PROGRESS</a> state
   *    until you execute the change set.</p>
   *          <p>By default, CloudFormation specifies <code>UPDATE</code>. You can't use the <code>UPDATE</code> type to
   *    create a change set for a new stack or the <code>CREATE</code> type to create a change set for an existing
   *    stack.</p>
   */
  ChangeSetType?: ChangeSetType | string;

  /**
   * @public
   * <p>The resources to import into your stack.</p>
   */
  ResourcesToImport?: ResourceToImport[];

  /**
   * @public
   * <p>Creates a change set for the all nested stacks specified in the template. The default behavior of this action is
   *    set to <code>False</code>. To include nested sets in a change set, specify <code>True</code>.</p>
   */
  IncludeNestedStacks?: boolean;

  /**
   * @public
   * <p>Determines what action will be taken if stack creation fails. If this parameter is specified, the
   *     <code>DisableRollback</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API operation must not
   *       be specified. This must be one of these values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETE</code> - Deletes the change set if the stack creation fails. This is only valid when the
   *         <code>ChangeSetType</code> parameter is set to <code>CREATE</code>. If the deletion of the stack fails, the status
   *         of the stack is <code>DELETE_FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DO_NOTHING</code> - if the stack creation fails, do nothing. This is equivalent to specifying
   *         <code>true</code> for the <code>DisableRollback</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API
   *         operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROLLBACK</code> - if the stack creation fails, roll back the stack. This is equivalent to specifying
   *         <code>false</code> for the <code>DisableRollback</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API
   *         operation.</p>
   *             </li>
   *          </ul>
   *          <p>For nested stacks, when the <code>OnStackFailure</code> parameter is set to <code>DELETE</code> for the change
   *      set for the parent stack, any failure in a child stack will cause the parent stack creation to fail and all stacks to
   *      be deleted.</p>
   */
  OnStackFailure?: OnStackFailure | string;
}

/**
 * @public
 * <p>The output for the <a>CreateChangeSet</a> action.</p>
 */
export interface CreateChangeSetOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the change set.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The unique ID of the stack.</p>
   */
  StackId?: string;
}

/**
 * @public
 * <p>The template contains resources with capabilities that weren't specified in the Capabilities parameter.</p>
 */
export class InsufficientCapabilitiesException extends __BaseException {
  readonly name: "InsufficientCapabilitiesException" = "InsufficientCapabilitiesException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientCapabilitiesException, __BaseException>) {
    super({
      name: "InsufficientCapabilitiesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientCapabilitiesException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The quota for the resource has already been reached.</p>
 *          <p>For information about resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation quotas</a> in the
 *     <i>CloudFormation User Guide</i>.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const OnFailure = {
  DELETE: "DELETE",
  DO_NOTHING: "DO_NOTHING",
  ROLLBACK: "ROLLBACK",
} as const;

/**
 * @public
 */
export type OnFailure = (typeof OnFailure)[keyof typeof OnFailure];

/**
 * @public
 * <p>The input for <a>CreateStack</a> action.</p>
 */
export interface CreateStackInput {
  /**
   * @public
   * <p>The name that's associated with the stack. The name must be unique in the Region in which you are creating the
   *    stack.</p>
   *          <note>
   *             <p>A stack name can contain only alphanumeric characters (case sensitive) and hyphens. It must start with an
   *     alphabetical character and can't be longer than 128 characters.</p>
   *          </note>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For
   *    more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template anatomy</a> in the CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify either the <code>TemplateBody</code> or the <code>TemplateURL</code> parameter,
   *    but not both.</p>
   */
  TemplateBody?: string;

  /**
   * @public
   * <p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that's
   *    located in an Amazon S3 bucket or a Systems Manager document. For more information, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template anatomy</a> in the
   *    CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify either the <code>TemplateBody</code> or the <code>TemplateURL</code> parameter,
   *    but not both.</p>
   */
  TemplateURL?: string;

  /**
   * @public
   * <p>A list of <code>Parameter</code> structures that specify input parameters for the stack. For more information,
   *    see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a>
   *    data type.</p>
   */
  Parameters?: Parameter[];

  /**
   * @public
   * <p>Set to <code>true</code> to disable rollback of the stack if stack creation failed. You can specify either
   *     <code>DisableRollback</code> or <code>OnFailure</code>, but not both.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  DisableRollback?: boolean;

  /**
   * @public
   * <p>The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and
   *    for the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

  /**
   * @public
   * <p>The amount of time that can pass before the stack status becomes CREATE_FAILED; if <code>DisableRollback</code>
   *    is not set or is set to <code>false</code>, the stack will be rolled back.</p>
   */
  TimeoutInMinutes?: number;

  /**
   * @public
   * <p>The Amazon Simple Notification Service (Amazon SNS) topic ARNs to publish stack related events. You can find your
   *     Amazon SNS topic ARNs using the Amazon SNS console or your Command Line Interface (CLI).</p>
   */
  NotificationARNs?: string[];

  /**
   * @public
   * <p>In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order
   *    for CloudFormation to create the stack.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in your Amazon Web Services account;
   *      for example, by creating new Identity and Access Management (IAM) users. For those stacks, you must
   *      explicitly acknowledge this by specifying one of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or
   *       <code>CAPABILITY_NAMED_IAM</code> capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i> specify
   *         <code>CAPABILITY_NAMED_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
   *         <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we recommend that you review all permissions associated with
   *      them and edit their permissions if necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html">
   *         AWS::IAM::AccessKey</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">
   *         AWS::IAM::Group</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html">
   *         AWS::IAM::Policy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">
   *         AWS::IAM::Role</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html">
   *         AWS::IAM::User</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">AWS::IAM::UserToGroupAddition</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM
   *      Resources in CloudFormation Templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some template contain macros. Macros perform custom processing on templates; this can include simple actions
   *      like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this,
   *      users typically create a change set from the processed template, so that they can review the changes resulting from
   *      the macros before actually creating the stack. If your stack template contains one or more macros, and you choose
   *      to create a stack directly from the processed template, without first reviewing the resulting changes in a change
   *      set, you must acknowledge this capability. This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which
   *      are macros hosted by CloudFormation.</p>
   *                <p>If you want to create a stack from a stack template that contains macros <i>and</i> nested
   *      stacks, you must create the stack directly from the template using this capability.</p>
   *                <important>
   *                   <p>You should only create stacks directly from a stack template that contains macros if you know what processing
   *       the macro performs.</p>
   *                   <p>Each macro relies on an underlying Lambda service function for processing stack templates. Be
   *       aware that the Lambda function owner can update the function operation without CloudFormation being
   *       notified.</p>
   *                </important>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using CloudFormation macros to perform custom
   *      processing on templates</a>.</p>
   *             </li>
   *          </ul>
   */
  Capabilities?: (Capability | string)[];

  /**
   * @public
   * <p>The template resource types that you have permissions to work with for this create stack action, such as
   *     <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>. Use the
   *    following syntax to describe template resource types: <code>AWS::*</code> (for all Amazon Web Services resources),
   *     <code>Custom::*</code> (for all custom resources), <code>Custom::<i>logical_ID</i>
   *             </code> (for a specific custom resource), <code>AWS::<i>service_name</i>::*</code> (for all resources
   *    of a particular Amazon Web Services service), and
   *      <code>AWS::<i>service_name</i>::<i>resource_logical_ID</i>
   *             </code> (for a specific Amazon Web Services resource).</p>
   *          <p>If the list of resource types doesn't include a resource that you're creating, the stack creation fails. By
   *    default, CloudFormation grants permissions to all resource types. Identity and Access Management (IAM)
   *    uses this parameter for CloudFormation-specific condition keys in IAM policies. For more
   *    information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with Identity and Access Management</a>.</p>
   */
  ResourceTypes?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFormation assumes to create the stack. CloudFormation uses the role's credentials to make calls on your behalf.
   *     CloudFormation always uses this role for all future operations on the stack. Provided that users have
   *    permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to
   *    pass it. Ensure that the role grants least privilege.</p>
   *          <p>If you don't specify a value, CloudFormation uses the role that was previously associated with the
   *    stack. If no role is available, CloudFormation uses a temporary session that's generated from your user
   *    credentials.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>Determines what action will be taken if stack creation fails. This must be one of: <code>DO_NOTHING</code>,
   *     <code>ROLLBACK</code>, or <code>DELETE</code>. You can specify either <code>OnFailure</code> or
   *     <code>DisableRollback</code>, but not both.</p>
   *          <p>Default: <code>ROLLBACK</code>
   *          </p>
   */
  OnFailure?: OnFailure | string;

  /**
   * @public
   * <p>Structure containing the stack policy body. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent Updates to Stack Resources</a> in
   *    the <i>CloudFormation User Guide</i>. You can specify either the <code>StackPolicyBody</code> or the
   *     <code>StackPolicyURL</code> parameter, but not both.</p>
   */
  StackPolicyBody?: string;

  /**
   * @public
   * <p>Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in
   *    an S3 bucket in the same Region as the stack. You can specify either the <code>StackPolicyBody</code> or the
   *     <code>StackPolicyURL</code> parameter, but not both.</p>
   */
  StackPolicyURL?: string;

  /**
   * @public
   * <p>Key-value pairs to associate with this stack. CloudFormation also propagates these tags to the resources
   *    created in the stack. A maximum number of 50 tags can be specified.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A unique identifier for this <code>CreateStack</code> request. Specify this token if you plan to retry requests
   *    so that CloudFormation knows that you're not attempting to create a stack with the same name. You might retry
   *     <code>CreateStack</code> requests to ensure that CloudFormation successfully received them.</p>
   *          <p>All events initiated by a given stack operation are assigned the same client request token, which you can use to
   *    track operations. For example, if you execute a <code>CreateStack</code> operation with the token
   *    <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have
   *     <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are
   *    initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you
   *    easily identify the stack operation . For example, if you create a stack using the console, each stack event would be
   *    assigned the same token in the following format:
   *     <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>Whether to enable termination protection on the specified stack. If a user attempts to delete a stack with
   *    termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From
   *    Being Deleted</a> in the <i>CloudFormation User Guide</i>. Termination protection is deactivated on stacks
   *    by default.</p>
   *          <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested
   *    stacks</a>, termination protection is set on the root stack and can't be changed directly on the nested
   *    stack.</p>
   */
  EnableTerminationProtection?: boolean;

  /**
   * @public
   * <p>This deletion policy deletes newly created resources, but retains existing resources, when a stack operation is
   *     rolled back. This ensures new, empty, and unused resources are deleted, while critical resources and their data are
   *     retained. <code>RetainExceptOnCreate</code> can be specified for any resource that supports the
   *     <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html">
   *     DeletionPolicy</a> attribute.</p>
   */
  RetainExceptOnCreate?: boolean;
}

/**
 * @public
 * <p>The output for a <a>CreateStack</a> action.</p>
 */
export interface CreateStackOutput {
  /**
   * @public
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;
}

/**
 * @public
 * <p>[Service-managed permissions] The Organizations accounts to which StackSets deploys. StackSets doesn't
 *    deploy stack instances to the organization management account, even if the organization management account is in your organization or in an OU in your organization.</p>
 *          <p>For update operations, you can specify either <code>Accounts</code> or <code>OrganizationalUnitIds</code>. For
 *    create and delete operations, specify <code>OrganizationalUnitIds</code>.</p>
 */
export interface DeploymentTargets {
  /**
   * @public
   * <p>The names of one or more Amazon Web Services accounts for which you want to deploy stack set updates.</p>
   */
  Accounts?: string[];

  /**
   * @public
   * <p>Returns the value of the <code>AccountsUrl</code> property.</p>
   */
  AccountsUrl?: string;

  /**
   * @public
   * <p>The organization root ID or organizational unit (OU) IDs to which StackSets deploys.</p>
   */
  OrganizationalUnitIds?: string[];

  /**
   * @public
   * <p>Limit deployment targets to individual accounts or include additional accounts with provided OUs.</p>
   *          <p>The following is a list of possible values for the <code>AccountFilterType</code> operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INTERSECTION</code>: StackSets deploys to the accounts specified in <code>Accounts</code> parameter.
   *     </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIFFERENCE</code>: StackSets excludes the accounts specified in <code>Accounts</code> parameter. This
   *      enables user to avoid certain accounts within an OU such as suspended accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNION</code>: StackSets includes additional accounts deployment targets. </p>
   *                <p>This is the default value if <code>AccountFilterType</code> is not provided. This enables user to update an
   *      entire OU and individual accounts from a different OU in one request, which used to be two separate
   *      requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: Deploys to all the accounts in specified organizational units (OU).</p>
   *             </li>
   *          </ul>
   */
  AccountFilterType?: AccountFilterType | string;
}

/**
 * @public
 * @enum
 */
export const RegionConcurrencyType = {
  PARALLEL: "PARALLEL",
  SEQUENTIAL: "SEQUENTIAL",
} as const;

/**
 * @public
 */
export type RegionConcurrencyType = (typeof RegionConcurrencyType)[keyof typeof RegionConcurrencyType];

/**
 * @public
 * <p>The user-specified preferences for how CloudFormation performs a stack set operation.</p>
 *          <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation
 *     options</a>.</p>
 */
export interface StackSetOperationPreferences {
  /**
   * @public
   * <p>The concurrency type of deploying StackSets operations in Regions, could be in parallel or one Region at a
   *    time.</p>
   */
  RegionConcurrencyType?: RegionConcurrencyType | string;

  /**
   * @public
   * <p>The order of the Regions where you want to perform the stack operation.</p>
   */
  RegionOrder?: string[];

  /**
   * @public
   * <p>The number of accounts, per Region, for which this operation can fail before CloudFormation stops the
   *    operation in that Region. If the operation is stopped in a Region, CloudFormation doesn't attempt the operation
   *    in any subsequent Regions.</p>
   *          <p>Conditional: You must specify either <code>FailureToleranceCount</code> or
   *     <code>FailureTolerancePercentage</code> (but not both).</p>
   *          <p>By default, <code>0</code> is specified.</p>
   */
  FailureToleranceCount?: number;

  /**
   * @public
   * <p>The percentage of accounts, per Region, for which this stack operation can fail before CloudFormation stops
   *    the operation in that Region. If the operation is stopped in a Region, CloudFormation doesn't attempt the
   *    operation in any subsequent Regions.</p>
   *          <p>When calculating the number of accounts based on the specified percentage, CloudFormation rounds
   *     <i>down</i> to the next whole number.</p>
   *          <p>Conditional: You must specify either <code>FailureToleranceCount</code> or
   *     <code>FailureTolerancePercentage</code>, but not both.</p>
   *          <p>By default, <code>0</code> is specified.</p>
   */
  FailureTolerancePercentage?: number;

  /**
   * @public
   * <p>The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of
   *     <code>FailureToleranceCount</code>.<code>MaxConcurrentCount</code> is at most one more than the
   *     <code>FailureToleranceCount</code>.</p>
   *          <p>Note that this setting lets you specify the <i>maximum</i> for operations. For large deployments,
   *    under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service
   *    throttling.</p>
   *          <p>Conditional: You must specify either <code>MaxConcurrentCount</code> or <code>MaxConcurrentPercentage</code>,
   *    but not both.</p>
   *          <p>By default, <code>1</code> is specified.</p>
   */
  MaxConcurrentCount?: number;

  /**
   * @public
   * <p>The maximum percentage of accounts in which to perform this operation at one time.</p>
   *          <p>When calculating the number of accounts based on the specified percentage, CloudFormation rounds down to
   *    the next whole number. This is true except in cases where rounding down would result is zero. In this case, CloudFormation sets the number as one instead.</p>
   *          <p>Note that this setting lets you specify the <i>maximum</i> for operations. For large deployments,
   *    under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service
   *    throttling.</p>
   *          <p>Conditional: You must specify either <code>MaxConcurrentCount</code> or <code>MaxConcurrentPercentage</code>,
   *    but not both.</p>
   *          <p>By default, <code>1</code> is specified.</p>
   */
  MaxConcurrentPercentage?: number;
}

/**
 * @public
 */
export interface CreateStackInstancesInput {
  /**
   * @public
   * <p>The name or unique ID of the stack set that you want to create stack instances from.</p>
   */
  StackSetName: string | undefined;

  /**
   * @public
   * <p>[Self-managed permissions] The names of one or more Amazon Web Services accounts that you want to create stack
   *    instances in the specified Region(s) for.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
   */
  Accounts?: string[];

  /**
   * @public
   * <p>[Service-managed permissions] The Organizations accounts for which to create stack instances in the
   *    specified Amazon Web Services Regions.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
   */
  DeploymentTargets?: DeploymentTargets;

  /**
   * @public
   * <p>The names of one or more Amazon Web Services Regions where you want to create stack instances using the specified
   *     Amazon Web Services accounts.</p>
   */
  Regions: string[] | undefined;

  /**
   * @public
   * <p>A list of stack set parameters whose values you want to override in the selected stack instances.</p>
   *          <p>Any overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions. When specifying parameters and their values, be aware of how CloudFormation sets
   *    parameter values during stack instance operations:</p>
   *          <ul>
   *             <li>
   *                <p>To override the current value for a parameter, include the parameter and specify its value.</p>
   *             </li>
   *             <li>
   *                <p>To leave an overridden parameter set to its present value, include the parameter and specify
   *       <code>UsePreviousValue</code> as <code>true</code>. (You can't specify both a value and set
   *       <code>UsePreviousValue</code> to <code>true</code>.)</p>
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
   *    delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set
   *    template.</p>
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
   *          <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the
   *    stack set operation only once, even if you retry the request multiple times. You might retry stack set operation
   *    requests to ensure that CloudFormation successfully received them.</p>
   *          <p>If you don't specify an operation ID, the SDK generates one automatically.</p>
   *          <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is
   *     <code>OUTDATED</code>.</p>
   */
  OperationId?: string;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *     management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *       administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

/**
 * @public
 */
export interface CreateStackInstancesOutput {
  /**
   * @public
   * <p>The unique identifier for this stack set operation.</p>
   */
  OperationId?: string;
}

/**
 * @public
 * <p>The specified operation ID already exists.</p>
 */
export class OperationIdAlreadyExistsException extends __BaseException {
  readonly name: "OperationIdAlreadyExistsException" = "OperationIdAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationIdAlreadyExistsException, __BaseException>) {
    super({
      name: "OperationIdAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationIdAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Another operation is currently in progress for this stack set. Only one operation can be performed for a stack
 *    set at a given time.</p>
 */
export class OperationInProgressException extends __BaseException {
  readonly name: "OperationInProgressException" = "OperationInProgressException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationInProgressException, __BaseException>) {
    super({
      name: "OperationInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationInProgressException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The specified stack set doesn't exist.</p>
 */
export class StackSetNotFoundException extends __BaseException {
  readonly name: "StackSetNotFoundException" = "StackSetNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StackSetNotFoundException, __BaseException>) {
    super({
      name: "StackSetNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StackSetNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Another operation has been performed on this stack set since the specified operation was performed.</p>
 */
export class StaleRequestException extends __BaseException {
  readonly name: "StaleRequestException" = "StaleRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StaleRequestException, __BaseException>) {
    super({
      name: "StaleRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StaleRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The specified resource exists, but has been changed.</p>
 */
export class CreatedButModifiedException extends __BaseException {
  readonly name: "CreatedButModifiedException" = "CreatedButModifiedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CreatedButModifiedException, __BaseException>) {
    super({
      name: "CreatedButModifiedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CreatedButModifiedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting
 *    operations.</p>
 */
export interface ManagedExecution {
  /**
   * @public
   * <p>When <code>true</code>, StackSets performs non-conflicting operations concurrently and queues conflicting
   *    operations. After conflicting operations finish, StackSets starts queued operations in request order.</p>
   *          <note>
   *             <p>If there are already running or queued operations, StackSets queues all incoming operations even if they are
   *     non-conflicting.</p>
   *             <p>You can't modify your stack set's execution configuration while there are running or queued operations for that
   *     stack set.</p>
   *          </note>
   *          <p>When <code>false</code> (default), StackSets performs one operation at a time in request order.</p>
   */
  Active?: boolean;
}

/**
 * @public
 * @enum
 */
export const PermissionModels = {
  SELF_MANAGED: "SELF_MANAGED",
  SERVICE_MANAGED: "SERVICE_MANAGED",
} as const;

/**
 * @public
 */
export type PermissionModels = (typeof PermissionModels)[keyof typeof PermissionModels];

/**
 * @public
 */
export interface CreateStackSetInput {
  /**
   * @public
   * <p>The name to associate with the stack set. The name must be unique in the Region where you create your stack
   *    set.</p>
   *          <note>
   *             <p>A stack name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an
   *     alphabetic character and can't be longer than 128 characters.</p>
   *          </note>
   */
  StackSetName: string | undefined;

  /**
   * @public
   * <p>A description of the stack set. You can use the description to identify the stack set's purpose or other
   *    important information.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200
   *    bytes. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the
   *    CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.</p>
   */
  TemplateBody?: string;

  /**
   * @public
   * <p>The location of the file that contains the template body. The URL must point to a template (maximum size:
   *    460,800 bytes) that's located in an Amazon S3 bucket or a Systems Manager document. For more information, see
   *     <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *    in the CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify either the TemplateBody or the TemplateURL parameter, but not both.</p>
   */
  TemplateURL?: string;

  /**
   * @public
   * <p>The stack ID you are importing into a new stack set. Specify the Amazon Resource Name (ARN) of the stack.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The input parameters for the stack set template.</p>
   */
  Parameters?: Parameter[];

  /**
   * @public
   * <p>In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in
   *    order for CloudFormation to create the stack set and related stack instances.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in your Amazon Web Services account;
   *      for example, by creating new Identity and Access Management (IAM) users. For those stack sets, you must
   *      explicitly acknowledge this by specifying one of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or
   *       <code>CAPABILITY_NAMED_IAM</code> capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i> specify
   *         <code>CAPABILITY_NAMED_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
   *         <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we recommend that you review all permissions associated with
   *      them and edit their permissions if necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html">
   *         AWS::IAM::AccessKey</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">
   *         AWS::IAM::Group</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html">
   *         AWS::IAM::Policy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">
   *         AWS::IAM::Role</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html">
   *         AWS::IAM::User</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">AWS::IAM::UserToGroupAddition</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/using-iam-template.html#capabilities">Acknowledging IAM Resources in CloudFormation Templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some templates reference macros. If your stack set template references one or more macros, you must create the
   *      stack set directly from the processed template, without first reviewing the resulting changes in a change set. To
   *      create the stack set directly, you must acknowledge this capability. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/template-macros.html">Using CloudFormation Macros to Perform
   *      Custom Processing on Templates</a>.</p>
   *                <important>
   *                   <p>Stack sets with service-managed permissions don't currently support the use of macros in templates. (This
   *       includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.) Even if you specify this capability for a
   *       stack set with service-managed permissions, if you reference a macro in your template the stack set operation will
   *       fail.</p>
   *                </important>
   *             </li>
   *          </ul>
   */
  Capabilities?: (Capability | string)[];

  /**
   * @public
   * <p>The key-value pairs to associate with this stack set and the stacks created from it. CloudFormation also
   *    propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be
   *    specified.</p>
   *          <p>If you specify tags as part of a <code>CreateStackSet</code> action, CloudFormation checks to see if you
   *    have the required IAM permission to tag resources. If you don't, the entire
   *     <code>CreateStackSet</code> action fails with an <code>access denied</code> error, and the stack set is not
   *    created.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role to use to create this stack set.</p>
   *          <p>Specify an IAM role only if you are using customized administrator roles to control which users
   *    or groups can manage specific stack sets within the same administrator account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/stacksets-prereqs.html">Prerequisites: Granting Permissions for Stack Set
   *    Operations</a> in the <i>CloudFormation User Guide</i>.</p>
   */
  AdministrationRoleARN?: string;

  /**
   * @public
   * <p>The name of the IAM execution role to use to create the stack set. If you do not specify an
   *    execution role, CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role for the stack set
   *    operation.</p>
   *          <p>Specify an IAM role only if you are using customized execution roles to control which stack
   *    resources users and groups can include in their stack sets.</p>
   */
  ExecutionRoleName?: string;

  /**
   * @public
   * <p>Describes how the IAM roles required for stack set operations are created. By default,
   *     <code>SELF-MANAGED</code> is specified.</p>
   *          <ul>
   *             <li>
   *                <p>With <code>self-managed</code> permissions, you must create the administrator and execution roles required to
   *      deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant Self-Managed Stack Set
   *       Permissions</a>.</p>
   *             </li>
   *             <li>
   *                <p>With <code>service-managed</code> permissions, StackSets automatically creates the IAM roles
   *      required to deploy to accounts managed by Organizations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant
   *       Service-Managed Stack Set Permissions</a>.</p>
   *             </li>
   *          </ul>
   */
  PermissionModel?: PermissionModels | string;

  /**
   * @public
   * <p>Describes whether StackSets automatically deploys to Organizations accounts that are added to the target
   *    organization or organizational unit (OU). Specify only if <code>PermissionModel</code> is
   *     <code>SERVICE_MANAGED</code>.</p>
   */
  AutoDeployment?: AutoDeployment;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *     management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>To create a stack set with service-managed permissions while signed in to the management account,
   *      specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>To create a stack set with service-managed permissions while signed in to a delegated administrator account,
   *      specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated admin in the management account.
   *      For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *       administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>Stack sets with service-managed permissions are created in the management account, including stack
   *    sets that are created by delegated administrators.</p>
   */
  CallAs?: CallAs | string;

  /**
   * @public
   * <p>A unique identifier for this <code>CreateStackSet</code> request. Specify this token if you plan to retry
   *    requests so that CloudFormation knows that you're not attempting to create another stack set with the same
   *    name. You might retry <code>CreateStackSet</code> requests to ensure that CloudFormation successfully
   *    received them.</p>
   *          <p>If you don't specify an operation ID, the SDK generates one automatically.</p>
   */
  ClientRequestToken?: string;

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
export interface CreateStackSetOutput {
  /**
   * @public
   * <p>The ID of the stack set that you're creating.</p>
   */
  StackSetId?: string;
}

/**
 * @public
 * <p>The specified name is already in use.</p>
 */
export class NameAlreadyExistsException extends __BaseException {
  readonly name: "NameAlreadyExistsException" = "NameAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NameAlreadyExistsException, __BaseException>) {
    super({
      name: "NameAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NameAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeactivateOrganizationsAccessInput {}

/**
 * @public
 */
export interface DeactivateOrganizationsAccessOutput {}

/**
 * @public
 */
export interface DeactivateTypeInput {
  /**
   * @public
   * <p>The type name of the extension, in this account and Region. If you specified a type name alias when enabling the
   *    extension, use the type name alias.</p>
   *          <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The extension type.</p>
   *          <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
   */
  Type?: ThirdPartyType | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the extension, in this account and Region.</p>
   *          <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface DeactivateTypeOutput {}

/**
 * @public
 * <p>The input for the <a>DeleteChangeSet</a> action.</p>
 */
export interface DeleteChangeSetInput {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the change set that you want to delete.</p>
   */
  ChangeSetName: string | undefined;

  /**
   * @public
   * <p>If you specified the name of a change set to delete, specify the stack name or Amazon Resource Name (ARN) that's
   *    associated with it.</p>
   */
  StackName?: string;
}

/**
 * @public
 * <p>The output for the <a>DeleteChangeSet</a> action.</p>
 */
export interface DeleteChangeSetOutput {}

/**
 * @public
 * <p>The specified change set can't be used to update the stack. For example, the change set status might be
 *     <code>CREATE_IN_PROGRESS</code>, or the stack status might be <code>UPDATE_IN_PROGRESS</code>.</p>
 */
export class InvalidChangeSetStatusException extends __BaseException {
  readonly name: "InvalidChangeSetStatusException" = "InvalidChangeSetStatusException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidChangeSetStatusException, __BaseException>) {
    super({
      name: "InvalidChangeSetStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidChangeSetStatusException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The input for <a>DeleteStack</a> action.</p>
 */
export interface DeleteStackInput {
  /**
   * @public
   * <p>The name or the unique stack ID that's associated with the stack.</p>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>For stacks in the <code>DELETE_FAILED</code> state, a list of resource logical IDs that are associated with the
   *    resources you want to retain. During deletion, CloudFormation deletes the stack but doesn't delete the
   *    retained resources.</p>
   *          <p>Retaining resources is useful when you can't delete a resource, such as a non-empty S3 bucket, but you want to
   *    delete the stack.</p>
   */
  RetainResources?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFormation assumes to delete the stack. CloudFormation uses the role's credentials to make calls on your
   *    behalf.</p>
   *          <p>If you don't specify a value, CloudFormation uses the role that was previously associated with the
   *    stack. If no role is available, CloudFormation uses a temporary session that's generated from your user
   *    credentials.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>A unique identifier for this <code>DeleteStack</code> request. Specify this token if you plan to retry requests
   *    so that CloudFormation knows that you're not attempting to delete a stack with the same name. You might retry
   *     <code>DeleteStack</code> requests to ensure that CloudFormation successfully received them.</p>
   *          <p>All events initiated by a given stack operation are assigned the same client request token, which you can use to
   *    track operations. For example, if you execute a <code>CreateStack</code> operation with the token
   *    <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have
   *     <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are
   *    initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you
   *    easily identify the stack operation . For example, if you create a stack using the console, each stack event would be
   *    assigned the same token in the following format:
   *     <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface DeleteStackInstancesInput {
  /**
   * @public
   * <p>The name or unique ID of the stack set that you want to delete stack instances for.</p>
   */
  StackSetName: string | undefined;

  /**
   * @public
   * <p>[Self-managed permissions] The names of the Amazon Web Services accounts that you want to delete stack instances
   *    for.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
   */
  Accounts?: string[];

  /**
   * @public
   * <p>[Service-managed permissions] The Organizations accounts from which to delete stack instances.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
   */
  DeploymentTargets?: DeploymentTargets;

  /**
   * @public
   * <p>The Amazon Web Services Regions where you want to delete stack set instances.</p>
   */
  Regions: string[] | undefined;

  /**
   * @public
   * <p>Preferences for how CloudFormation performs this stack set operation.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * @public
   * <p>Removes the stack instances from the specified stack set, but doesn't delete the stacks. You can't reassociate a
   *    retained stack or add an existing, saved stack to a new stack set.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation
   *     options</a>.</p>
   */
  RetainStacks: boolean | undefined;

  /**
   * @public
   * <p>The unique identifier for this stack set operation.</p>
   *          <p>If you don't specify an operation ID, the SDK generates one automatically.</p>
   *          <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the
   *    stack set operation only once, even if you retry the request multiple times. You can retry stack set operation
   *    requests to ensure that CloudFormation successfully received them.</p>
   *          <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is
   *     <code>OUTDATED</code>.</p>
   */
  OperationId?: string;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *     management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *       administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

/**
 * @public
 */
export interface DeleteStackInstancesOutput {
  /**
   * @public
   * <p>The unique identifier for this stack set operation.</p>
   */
  OperationId?: string;
}

/**
 * @public
 */
export interface DeleteStackSetInput {
  /**
   * @public
   * <p>The name or unique ID of the stack set that you're deleting. You can obtain this value by running <a>ListStackSets</a>.</p>
   */
  StackSetName: string | undefined;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *     management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *       administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

/**
 * @public
 */
export interface DeleteStackSetOutput {}

/**
 * @public
 * <p>You can't yet delete this stack set, because it still contains one or more stack instances. Delete all stack
 *    instances from the stack set before deleting the stack set.</p>
 */
export class StackSetNotEmptyException extends __BaseException {
  readonly name: "StackSetNotEmptyException" = "StackSetNotEmptyException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StackSetNotEmptyException, __BaseException>) {
    super({
      name: "StackSetNotEmptyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StackSetNotEmptyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const RegistryType = {
  HOOK: "HOOK",
  MODULE: "MODULE",
  RESOURCE: "RESOURCE",
} as const;

/**
 * @public
 */
export type RegistryType = (typeof RegistryType)[keyof typeof RegistryType];

/**
 * @public
 */
export interface DeregisterTypeInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The kind of extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
   */
  Type?: RegistryType | string;

  /**
   * @public
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource
   *    Name (ARN) assigned to the extension version when it is registered.</p>
   */
  VersionId?: string;
}

/**
 * @public
 */
export interface DeregisterTypeOutput {}

/**
 * @public
 * <p>The input for the <a>DescribeAccountLimits</a> action.</p>
 */
export interface DescribeAccountLimitsInput {
  /**
   * @public
   * <p>A string that identifies the next page of limits that you want to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The output for the <a>DescribeAccountLimits</a> action.</p>
 */
export interface DescribeAccountLimitsOutput {
  /**
   * @public
   * <p>An account limit structure that contain a list of CloudFormation account limits and their values.</p>
   */
  AccountLimits?: AccountLimit[];

  /**
   * @public
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of limits. If no additional page
   *    exists, this value is null.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The input for the <a>DescribeChangeSet</a> action.</p>
 */
export interface DescribeChangeSetInput {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the change set that you want to describe.</p>
   */
  ChangeSetName: string | undefined;

  /**
   * @public
   * <p>If you specified the name of a change set, specify the stack name or ID (ARN) of the change set you want to
   *    describe.</p>
   */
  StackName?: string;

  /**
   * @public
   * <p>A string (provided by the <a>DescribeChangeSet</a> response output) that identifies the next page of
   *    information that you want to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The output for the <a>DescribeChangeSet</a> action.</p>
 */
export interface DescribeChangeSetOutput {
  /**
   * @public
   * <p>The name of the change set.</p>
   */
  ChangeSetName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the change set.</p>
   */
  ChangeSetId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stack that's associated with the change set.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The name of the stack that's associated with the change set.</p>
   */
  StackName?: string;

  /**
   * @public
   * <p>Information about the change set.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A list of <code>Parameter</code> structures that describes the input parameters and their values used to create
   *    the change set. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data type.</p>
   */
  Parameters?: Parameter[];

  /**
   * @public
   * <p>The start time when the change set was created, in UTC.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>If the change set execution status is <code>AVAILABLE</code>, you can execute the change set. If you can't
   *    execute the change set, the status indicates why. For example, a change set might be in an <code>UNAVAILABLE</code>
   *    state because CloudFormation is still creating it or in an <code>OBSOLETE</code> state because the stack was
   *    already updated.</p>
   */
  ExecutionStatus?: ExecutionStatus | string;

  /**
   * @public
   * <p>The current status of the change set, such as <code>CREATE_IN_PROGRESS</code>, <code>CREATE_COMPLETE</code>, or
   *     <code>FAILED</code>.</p>
   */
  Status?: ChangeSetStatus | string;

  /**
   * @public
   * <p>A description of the change set's status. For example, if your attempt to create a change set failed, CloudFormation shows the error message.</p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>The ARNs of the Amazon Simple Notification Service (Amazon SNS) topics that will be associated with the stack if you
   *    execute the change set.</p>
   */
  NotificationARNs?: string[];

  /**
   * @public
   * <p>The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for
   *    the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

  /**
   * @public
   * <p>If you execute the change set, the list of capabilities that were explicitly acknowledged when the change set
   *    was created.</p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * @public
   * <p>If you execute the change set, the tags that will be associated with the stack.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A list of <code>Change</code> structures that describes the resources CloudFormation changes if you execute
   *    the change set.</p>
   */
  Changes?: Change[];

  /**
   * @public
   * <p>If the output exceeds 1 MB, a string that identifies the next page of changes. If there is no additional page,
   *    this value is null.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Verifies if <code>IncludeNestedStacks</code> is set to <code>True</code>.</p>
   */
  IncludeNestedStacks?: boolean;

  /**
   * @public
   * <p>Specifies the change set ID of the parent change set in the current nested change set hierarchy.</p>
   */
  ParentChangeSetId?: string;

  /**
   * @public
   * <p>Specifies the change set ID of the root change set in the current nested change set hierarchy.</p>
   */
  RootChangeSetId?: string;

  /**
   * @public
   * <p>Determines what action will be taken if stack creation fails. When this parameter is specified, the
   *     <code>DisableRollback</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API operation must not
   *     be specified. This must be one of these values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETE</code> - Deletes the change set if the stack creation fails. This is only valid when the
   *         <code>ChangeSetType</code> parameter is set to <code>CREATE</code>. If the deletion of the stack fails, the status
   *         of the stack is <code>DELETE_FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DO_NOTHING</code> - if the stack creation fails, do nothing. This is equivalent to specifying
   *         <code>true</code> for the <code>DisableRollback</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API
   *         operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROLLBACK</code> - if the stack creation fails, roll back the stack. This is equivalent to specifying
   *         <code>false</code> for the <code>DisableRollback</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API
   *         operation.</p>
   *             </li>
   *          </ul>
   */
  OnStackFailure?: OnStackFailure | string;
}

/**
 * @public
 */
export interface DescribeChangeSetHooksInput {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the change set that you want to describe.</p>
   */
  ChangeSetName: string | undefined;

  /**
   * @public
   * <p>If you specified the name of a change set, specify the stack name or stack ID (ARN) of the change set you want
   *    to describe.</p>
   */
  StackName?: string;

  /**
   * @public
   * <p>A string, provided by the <code>DescribeChangeSetHooks</code> response output, that identifies the next page of
   *    information that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>If specified, lists only the hooks related to the specified <code>LogicalResourceId</code>.</p>
   */
  LogicalResourceId?: string;
}

/**
 * @public
 */
export interface DescribeChangeSetHooksOutput {
  /**
   * @public
   * <p>The change set identifier (stack ID).</p>
   */
  ChangeSetId?: string;

  /**
   * @public
   * <p>The change set name.</p>
   */
  ChangeSetName?: string;

  /**
   * @public
   * <p>List of hook objects.</p>
   */
  Hooks?: ChangeSetHook[];

  /**
   * @public
   * <p>Provides the status of the change set hook.</p>
   */
  Status?: ChangeSetHooksStatus | string;

  /**
   * @public
   * <p>Pagination token, <code>null</code> or empty if no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The stack identifier (stack ID).</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The stack name.</p>
   */
  StackName?: string;
}

/**
 * @public
 */
export interface DescribeOrganizationsAccessInput {
  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator
   *       in the organization's management account or as a delegated administrator in a
   *       member account.</p>
   *          <p>By default, <code>SELF</code> is specified.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *           <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the
   *           management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User
   *               Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

/**
 * @public
 * @enum
 */
export const OrganizationStatus = {
  DISABLED: "DISABLED",
  DISABLED_PERMANENTLY: "DISABLED_PERMANENTLY",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type OrganizationStatus = (typeof OrganizationStatus)[keyof typeof OrganizationStatus];

/**
 * @public
 */
export interface DescribeOrganizationsAccessOutput {
  /**
   * @public
   * <p>Presents the status of the <code>OrganizationAccess</code>.</p>
   */
  Status?: OrganizationStatus | string;
}

/**
 * @public
 */
export interface DescribePublisherInput {
  /**
   * @public
   * <p>The ID of the extension publisher.</p>
   *          <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension publisher,
   *     <code>DescribePublisher</code> returns information about your own publisher account.</p>
   */
  PublisherId?: string;
}

/**
 * @public
 * @enum
 */
export const IdentityProvider = {
  AWS_Marketplace: "AWS_Marketplace",
  Bitbucket: "Bitbucket",
  GitHub: "GitHub",
} as const;

/**
 * @public
 */
export type IdentityProvider = (typeof IdentityProvider)[keyof typeof IdentityProvider];

/**
 * @public
 * @enum
 */
export const PublisherStatus = {
  UNVERIFIED: "UNVERIFIED",
  VERIFIED: "VERIFIED",
} as const;

/**
 * @public
 */
export type PublisherStatus = (typeof PublisherStatus)[keyof typeof PublisherStatus];

/**
 * @public
 */
export interface DescribePublisherOutput {
  /**
   * @public
   * <p>The ID of the extension publisher.</p>
   */
  PublisherId?: string;

  /**
   * @public
   * <p>Whether the publisher is verified. Currently, all registered publishers are verified.</p>
   */
  PublisherStatus?: PublisherStatus | string;

  /**
   * @public
   * <p>The type of account used as the identity provider when registering this publisher with CloudFormation.</p>
   */
  IdentityProvider?: IdentityProvider | string;

  /**
   * @public
   * <p>The URL to the publisher's profile with the identity provider.</p>
   */
  PublisherProfile?: string;
}

/**
 * @public
 */
export interface DescribeStackDriftDetectionStatusInput {
  /**
   * @public
   * <p>The ID of the drift detection results of this operation.</p>
   *          <p>CloudFormation generates new results, with a new drift detection ID, each time this operation is run. However, the number
   *    of drift results CloudFormation retains for any given stack, and for how long, may vary.</p>
   */
  StackDriftDetectionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StackDriftDetectionStatus = {
  DETECTION_COMPLETE: "DETECTION_COMPLETE",
  DETECTION_FAILED: "DETECTION_FAILED",
  DETECTION_IN_PROGRESS: "DETECTION_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type StackDriftDetectionStatus = (typeof StackDriftDetectionStatus)[keyof typeof StackDriftDetectionStatus];

/**
 * @public
 * @enum
 */
export const StackDriftStatus = {
  DRIFTED: "DRIFTED",
  IN_SYNC: "IN_SYNC",
  NOT_CHECKED: "NOT_CHECKED",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type StackDriftStatus = (typeof StackDriftStatus)[keyof typeof StackDriftStatus];

/**
 * @public
 */
export interface DescribeStackDriftDetectionStatusOutput {
  /**
   * @public
   * <p>The ID of the stack.</p>
   */
  StackId: string | undefined;

  /**
   * @public
   * <p>The ID of the drift detection results of this operation.</p>
   *          <p>CloudFormation generates new results, with a new drift detection ID, each time this operation is run. However, the number
   *    of reports CloudFormation retains for any given stack, and for how long, may vary.</p>
   */
  StackDriftDetectionId: string | undefined;

  /**
   * @public
   * <p>Status of the stack's actual configuration compared to its expected configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The stack differs from its expected template configuration. A stack is considered to
   *      have drifted if one or more of its resources have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation hasn't checked if the stack differs from its expected template
   *      configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The stack's actual configuration matches its expected template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: This value is reserved for future use.</p>
   *             </li>
   *          </ul>
   */
  StackDriftStatus?: StackDriftStatus | string;

  /**
   * @public
   * <p>The status of the stack drift detection operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DETECTION_COMPLETE</code>: The stack drift detection operation has successfully completed for all
   *      resources in the stack that support drift detection. (Resources that don't currently support stack detection remain
   *      unchecked.)</p>
   *                <p>If you specified logical resource IDs for CloudFormation to use as a filter for the stack drift detection operation,
   *      only the resources with those logical IDs are checked for drift.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DETECTION_FAILED</code>: The stack drift detection operation has failed for at least one resource in the
   *      stack. Results will be available for resources on which CloudFormation successfully completed drift detection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DETECTION_IN_PROGRESS</code>: The stack drift detection operation is currently in progress.</p>
   *             </li>
   *          </ul>
   */
  DetectionStatus: StackDriftDetectionStatus | string | undefined;

  /**
   * @public
   * <p>The reason the stack drift detection operation has its current status.</p>
   */
  DetectionStatusReason?: string;

  /**
   * @public
   * <p>Total number of stack resources that have drifted. This is NULL until the drift detection operation reaches a
   *    status of <code>DETECTION_COMPLETE</code>. This value will be 0 for stacks whose drift status is
   *    <code>IN_SYNC</code>.</p>
   */
  DriftedStackResourceCount?: number;

  /**
   * @public
   * <p>Time at which the stack drift detection operation was initiated.</p>
   */
  Timestamp: Date | undefined;
}

/**
 * @public
 * <p>The input for <a>DescribeStackEvents</a> action.</p>
 */
export interface DescribeStackEventsInput {
  /**
   * @public
   * <p>The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   *          <p>Default: There is no default value.</p>
   */
  StackName?: string;

  /**
   * @public
   * <p>A string that identifies the next page of events that you want to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const HookStatus = {
  HOOK_COMPLETE_FAILED: "HOOK_COMPLETE_FAILED",
  HOOK_COMPLETE_SUCCEEDED: "HOOK_COMPLETE_SUCCEEDED",
  HOOK_FAILED: "HOOK_FAILED",
  HOOK_IN_PROGRESS: "HOOK_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type HookStatus = (typeof HookStatus)[keyof typeof HookStatus];

/**
 * @public
 * @enum
 */
export const ResourceStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_SKIPPED: "DELETE_SKIPPED",
  IMPORT_COMPLETE: "IMPORT_COMPLETE",
  IMPORT_FAILED: "IMPORT_FAILED",
  IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS",
  IMPORT_ROLLBACK_COMPLETE: "IMPORT_ROLLBACK_COMPLETE",
  IMPORT_ROLLBACK_FAILED: "IMPORT_ROLLBACK_FAILED",
  IMPORT_ROLLBACK_IN_PROGRESS: "IMPORT_ROLLBACK_IN_PROGRESS",
  ROLLBACK_COMPLETE: "ROLLBACK_COMPLETE",
  ROLLBACK_FAILED: "ROLLBACK_FAILED",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_ROLLBACK_COMPLETE: "UPDATE_ROLLBACK_COMPLETE",
  UPDATE_ROLLBACK_FAILED: "UPDATE_ROLLBACK_FAILED",
  UPDATE_ROLLBACK_IN_PROGRESS: "UPDATE_ROLLBACK_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ResourceStatus = (typeof ResourceStatus)[keyof typeof ResourceStatus];

/**
 * @public
 * <p>The StackEvent data type.</p>
 */
export interface StackEvent {
  /**
   * @public
   * <p>The unique ID name of the instance of the stack.</p>
   */
  StackId: string | undefined;

  /**
   * @public
   * <p>The unique ID of this event.</p>
   */
  EventId: string | undefined;

  /**
   * @public
   * <p>The name associated with a stack.</p>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId?: string;

  /**
   * @public
   * <p>The name or unique identifier associated with the physical instance of the resource.</p>
   */
  PhysicalResourceId?: string;

  /**
   * @public
   * <p>Type of resource. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types
   *     Reference</a> in the CloudFormation User Guide.)</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>Time the status was updated.</p>
   */
  Timestamp: Date | undefined;

  /**
   * @public
   * <p>Current status of the resource.</p>
   */
  ResourceStatus?: ResourceStatus | string;

  /**
   * @public
   * <p>Success/failure message associated with the resource.</p>
   */
  ResourceStatusReason?: string;

  /**
   * @public
   * <p>BLOB of the properties used to create the resource.</p>
   */
  ResourceProperties?: string;

  /**
   * @public
   * <p>The token passed to the operation that generated this event.</p>
   *          <p>All events triggered by a given stack operation are assigned the same client request token, which you can use to
   *    track operations. For example, if you execute a <code>CreateStack</code> operation with the token
   *    <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have
   *     <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are
   *    initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you
   *    easily identify the stack operation . For example, if you create a stack using the console, each stack event would be
   *    assigned the same token in the following format:
   *     <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The name of the hook.</p>
   */
  HookType?: string;

  /**
   * @public
   * <p>Provides the status of the change set hook.</p>
   */
  HookStatus?: HookStatus | string;

  /**
   * @public
   * <p>Provides the reason for the hook status.</p>
   */
  HookStatusReason?: string;

  /**
   * @public
   * <p>Invocation points are points in provisioning logic where hooks are initiated.</p>
   */
  HookInvocationPoint?: HookInvocationPoint | string;

  /**
   * @public
   * <p>Specify the hook failure mode for non-compliant resources in the followings ways.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FAIL</code> Stops provisioning resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WARN</code> Allows provisioning to continue with a warning message.</p>
   *             </li>
   *          </ul>
   */
  HookFailureMode?: HookFailureMode | string;
}

/**
 * @public
 * <p>The output for a <a>DescribeStackEvents</a> action.</p>
 */
export interface DescribeStackEventsOutput {
  /**
   * @public
   * <p>A list of <code>StackEvents</code> structures.</p>
   */
  StackEvents?: StackEvent[];

  /**
   * @public
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of events. If no additional page
   *    exists, this value is null.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeStackInstanceInput {
  /**
   * @public
   * <p>The name or the unique stack ID of the stack set that you want to get stack instance information for.</p>
   */
  StackSetName: string | undefined;

  /**
   * @public
   * <p>The ID of an Amazon Web Services account that's associated with this stack instance.</p>
   */
  StackInstanceAccount: string | undefined;

  /**
   * @public
   * <p>The name of a Region that's associated with this stack instance.</p>
   */
  StackInstanceRegion: string | undefined;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *     management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *       administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

/**
 * @public
 * @enum
 */
export const StackInstanceDetailedStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  INOPERABLE: "INOPERABLE",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SKIPPED_SUSPENDED_ACCOUNT: "SKIPPED_SUSPENDED_ACCOUNT",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type StackInstanceDetailedStatus =
  (typeof StackInstanceDetailedStatus)[keyof typeof StackInstanceDetailedStatus];

/**
 * @public
 * <p>The detailed status of the stack instance.</p>
 */
export interface StackInstanceComprehensiveStatus {
  /**
   * @public
   * <ul>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code>: The operation in the specified account and Region has been canceled. This is either
   *      because a user has stopped the stack set operation, or because the failure tolerance of the stack set operation has
   *      been exceeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation in the specified account and Region failed. If the stack set operation
   *      fails in enough accounts within a Region, the failure tolerance for the stack set operation as a whole might be
   *      exceeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INOPERABLE</code>: A <code>DeleteStackInstances</code> operation has failed and left the stack in an
   *      unstable state. Stacks in this state are excluded from further <code>UpdateStackSet</code> operations. You might
   *      need to perform a <code>DeleteStackInstances</code> operation, with <code>RetainStacks</code> set to
   *       <code>true</code>, to delete the stack instance, and then delete the stack manually.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: The operation in the specified account and Region has yet to start.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>: The operation in the specified account and Region is currently in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIPPED_SUSPENDED_ACCOUNT</code>: The operation in the specified account and Region has been skipped
   *      because the account was suspended at the time of the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The operation in the specified account and Region completed successfully.</p>
   *             </li>
   *          </ul>
   */
  DetailedStatus?: StackInstanceDetailedStatus | string;
}

/**
 * @public
 * @enum
 */
export const StackInstanceStatus = {
  CURRENT: "CURRENT",
  INOPERABLE: "INOPERABLE",
  OUTDATED: "OUTDATED",
} as const;

/**
 * @public
 */
export type StackInstanceStatus = (typeof StackInstanceStatus)[keyof typeof StackInstanceStatus];

/**
 * @public
 * <p>An CloudFormation stack, in a specific account and Region, that's part of a stack set operation. A stack
 *    instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance
 *    can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is
 *    associated with only one stack set. Each stack instance contains the ID of its associated stack set, in addition to
 *    the ID of the actual stack and the stack status.</p>
 */
export interface StackInstance {
  /**
   * @public
   * <p>The name or unique ID of the stack set that the stack instance is associated with.</p>
   */
  StackSetId?: string;

  /**
   * @public
   * <p>The name of the Amazon Web Services Region that the stack instance is associated with.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>[Self-managed permissions] The name of the Amazon Web Services account that the stack instance is associated
   *    with.</p>
   */
  Account?: string;

  /**
   * @public
   * <p>The ID of the stack instance.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>A list of parameters from the stack set template whose values have been overridden in this stack
   *    instance.</p>
   */
  ParameterOverrides?: Parameter[];

  /**
   * @public
   * <p>The status of the stack instance, in terms of its synchronization with its associated stack set.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INOPERABLE</code>: A <code>DeleteStackInstances</code> operation has failed and left the stack in an
   *      unstable state. Stacks in this state are excluded from further <code>UpdateStackSet</code> operations. You might
   *      need to perform a <code>DeleteStackInstances</code> operation, with <code>RetainStacks</code> set to
   *       <code>true</code>, to delete the stack instance, and then delete the stack manually.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTDATED</code>: The stack isn't currently up to date with the stack set because:</p>
   *                <ul>
   *                   <li>
   *                      <p>The associated stack failed during a <code>CreateStackSet</code> or <code>UpdateStackSet</code>
   *        operation.</p>
   *                   </li>
   *                   <li>
   *                      <p>The stack was part of a <code>CreateStackSet</code> or <code>UpdateStackSet</code> operation that failed or
   *        was stopped before the stack was created or updated.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CURRENT</code>: The stack is currently up to date with the stack set.</p>
   *             </li>
   *          </ul>
   */
  Status?: StackInstanceStatus | string;

  /**
   * @public
   * <p>The detailed status of the stack instance.</p>
   */
  StackInstanceStatus?: StackInstanceComprehensiveStatus;

  /**
   * @public
   * <p>The explanation for the specific status code that's assigned to this stack instance.</p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>[Service-managed permissions] The organization root ID or organizational unit (OU) IDs that you specified for
   *     <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html">DeploymentTargets</a>.</p>
   */
  OrganizationalUnitId?: string;

  /**
   * @public
   * <p>Status of the stack instance's actual configuration compared to the expected template and parameter
   *    configuration of the stack set to which it belongs.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The stack differs from the expected template and parameter configuration of the stack
   *      set to which it belongs. A stack instance is considered to have drifted if one or more of the resources in the
   *      associated stack have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation hasn't checked if the stack instance differs from its expected stack set
   *      configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The stack instance's actual configuration matches its expected stack set
   *      configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: This value is reserved for future use.</p>
   *             </li>
   *          </ul>
   */
  DriftStatus?: StackDriftStatus | string;

  /**
   * @public
   * <p>Most recent time when CloudFormation performed a drift detection operation on the stack instance. This
   *    value will be <code>NULL</code> for any stack instance on which drift detection hasn't yet been performed.</p>
   */
  LastDriftCheckTimestamp?: Date;

  /**
   * @public
   * <p>The last unique ID of a StackSet operation performed on a stack instance.</p>
   */
  LastOperationId?: string;
}

/**
 * @public
 */
export interface DescribeStackInstanceOutput {
  /**
   * @public
   * <p>The stack instance that matches the specified request parameters.</p>
   */
  StackInstance?: StackInstance;
}

/**
 * @public
 * <p>The specified stack instance doesn't exist.</p>
 */
export class StackInstanceNotFoundException extends __BaseException {
  readonly name: "StackInstanceNotFoundException" = "StackInstanceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StackInstanceNotFoundException, __BaseException>) {
    super({
      name: "StackInstanceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StackInstanceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The input for <a>DescribeStackResource</a> action.</p>
 */
export interface DescribeStackResourceInput {
  /**
   * @public
   * <p>The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   *          <p>Default: There is no default value.</p>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>The logical name of the resource as specified in the template.</p>
   *          <p>Default: There is no default value.</p>
   */
  LogicalResourceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StackResourceDriftStatus = {
  DELETED: "DELETED",
  IN_SYNC: "IN_SYNC",
  MODIFIED: "MODIFIED",
  NOT_CHECKED: "NOT_CHECKED",
} as const;

/**
 * @public
 */
export type StackResourceDriftStatus = (typeof StackResourceDriftStatus)[keyof typeof StackResourceDriftStatus];

/**
 * @public
 * <p>Contains information about whether the resource's actual configuration differs, or has
 *     <i>drifted</i>, from its expected configuration.</p>
 */
export interface StackResourceDriftInformation {
  /**
   * @public
   * <p>Status of the resource's actual configuration compared to its expected configuration</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The resource differs from its expected configuration in that it has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFIED</code>: The resource differs from its expected configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation has not checked if the resource differs from its expected
   *      configuration.</p>
   *                <p>Any resources that do not currently support drift detection have a status of <code>NOT_CHECKED</code>. For
   *      more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift
   *       Detection</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The resource's actual configuration matches its expected configuration.</p>
   *             </li>
   *          </ul>
   */
  StackResourceDriftStatus: StackResourceDriftStatus | string | undefined;

  /**
   * @public
   * <p>When CloudFormation last checked if the resource had drifted from its expected configuration.</p>
   */
  LastCheckTimestamp?: Date;
}

/**
 * @public
 * <p>Contains detailed information about the specified stack resource.</p>
 */
export interface StackResourceDetail {
  /**
   * @public
   * <p>The name associated with the stack.</p>
   */
  StackName?: string;

  /**
   * @public
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * @public
   * <p>The name or unique identifier that corresponds to a physical instance ID of a resource supported by CloudFormation.</p>
   */
  PhysicalResourceId?: string;

  /**
   * @public
   * <p>Type of resource. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types
   *     Reference</a> in the CloudFormation User Guide.</p>
   */
  ResourceType: string | undefined;

  /**
   * @public
   * <p>Time the status was updated.</p>
   */
  LastUpdatedTimestamp: Date | undefined;

  /**
   * @public
   * <p>Current status of the resource.</p>
   */
  ResourceStatus: ResourceStatus | string | undefined;

  /**
   * @public
   * <p>Success/failure message associated with the resource.</p>
   */
  ResourceStatusReason?: string;

  /**
   * @public
   * <p>User defined description associated with the resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The content of the <code>Metadata</code> attribute declared for the resource. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-metadata.html">Metadata Attribute</a>
   *    in the CloudFormation User Guide.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>Information about whether the resource's actual configuration differs, or has <i>drifted</i>, from
   *    its expected configuration, as defined in the stack template and any values specified as template parameters. For
   *    more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: StackResourceDriftInformation;

  /**
   * @public
   * <p>Contains information about the module from which the resource was created, if the resource was created from a
   *    module included in the stack template.</p>
   */
  ModuleInfo?: ModuleInfo;
}

/**
 * @public
 * <p>The output for a <a>DescribeStackResource</a> action.</p>
 */
export interface DescribeStackResourceOutput {
  /**
   * @public
   * <p>A <code>StackResourceDetail</code> structure containing the description of the specified resource in the
   *    specified stack.</p>
   */
  StackResourceDetail?: StackResourceDetail;
}

/**
 * @public
 */
export interface DescribeStackResourceDriftsInput {
  /**
   * @public
   * <p>The name of the stack for which you want drift information.</p>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>The resource drift status values to use as filters for the resource drift results returned.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The resource differs from its expected template configuration in that the resource has
   *      been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFIED</code>: One or more resource properties differ from their expected template values.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The resource's actual configuration matches its expected template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation doesn't currently return this value.</p>
   *             </li>
   *          </ul>
   */
  StackResourceDriftStatusFilters?: (StackResourceDriftStatus | string)[];

  /**
   * @public
   * <p>A string that identifies the next page of stack resource drift results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned with a single call. If the number of available results exceeds this
   *    maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code>
   *    request parameter to get the next set of results.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Context information that enables CloudFormation to uniquely identify a resource. CloudFormation uses context key-value pairs in
 *    cases where a resource's logical and physical IDs aren't enough to uniquely identify that resource. Each context
 *    key-value pair specifies a resource that contains the targeted resource.</p>
 */
export interface PhysicalResourceIdContextKeyValuePair {
  /**
   * @public
   * <p>The resource context key.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The resource context value.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DifferenceType = {
  ADD: "ADD",
  NOT_EQUAL: "NOT_EQUAL",
  REMOVE: "REMOVE",
} as const;

/**
 * @public
 */
export type DifferenceType = (typeof DifferenceType)[keyof typeof DifferenceType];

/**
 * @public
 * <p>Information about a resource property whose actual value differs from its expected value, as defined in the
 *    stack template and any values specified as template parameters. These will be present only for resources whose
 *     <code>StackResourceDriftStatus</code> is <code>MODIFIED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated
 *     Configuration Changes to Stacks and Resources</a>.</p>
 */
export interface PropertyDifference {
  /**
   * @public
   * <p>The fully-qualified path to the resource property.</p>
   */
  PropertyPath: string | undefined;

  /**
   * @public
   * <p>The expected property value of the resource property, as defined in the stack template and any values specified
   *    as template parameters.</p>
   */
  ExpectedValue: string | undefined;

  /**
   * @public
   * <p>The actual property value of the resource property.</p>
   */
  ActualValue: string | undefined;

  /**
   * @public
   * <p>The type of property difference.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ADD</code>: A value has been added to a resource property that's an array or list data type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVE</code>: The property has been removed from the current resource configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_EQUAL</code>: The current property value differs from its expected value (as defined in the stack
   *      template and any values specified as template parameters).</p>
   *             </li>
   *          </ul>
   */
  DifferenceType: DifferenceType | string | undefined;
}

/**
 * @public
 * <p>Contains the drift information for a resource that has been checked for drift. This includes actual and expected
 *    property values for resources in which CloudFormation has detected drift. Only resource properties explicitly defined in the
 *    stack template are checked for drift. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to
 *     Stacks and Resources</a>.</p>
 *          <p>Resources that don't currently support drift detection can't be checked. For a list of resources that support
 *    drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift
 *    Detection</a>.</p>
 *          <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p>
 */
export interface StackResourceDrift {
  /**
   * @public
   * <p>The ID of the stack.</p>
   */
  StackId: string | undefined;

  /**
   * @public
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * @public
   * <p>The name or unique identifier that corresponds to a physical instance ID of a resource supported by
   *    CloudFormation.</p>
   */
  PhysicalResourceId?: string;

  /**
   * @public
   * <p>Context information that enables CloudFormation to uniquely identify a resource. CloudFormation uses context key-value pairs in
   *    cases where a resource's logical and physical IDs aren't enough to uniquely identify that resource. Each context
   *    key-value pair specifies a unique resource that contains the targeted resource.</p>
   */
  PhysicalResourceIdContext?: PhysicalResourceIdContextKeyValuePair[];

  /**
   * @public
   * <p>The type of the resource.</p>
   */
  ResourceType: string | undefined;

  /**
   * @public
   * <p>A JSON structure containing the expected property values of the stack resource, as defined in the stack template
   *    and any values specified as template parameters.</p>
   *          <p>For resources whose <code>StackResourceDriftStatus</code> is <code>DELETED</code>, this structure will not be
   *    present.</p>
   */
  ExpectedProperties?: string;

  /**
   * @public
   * <p>A JSON structure containing the actual property values of the stack resource.</p>
   *          <p>For resources whose <code>StackResourceDriftStatus</code> is <code>DELETED</code>, this structure will not be
   *    present.</p>
   */
  ActualProperties?: string;

  /**
   * @public
   * <p>A collection of the resource properties whose actual values differ from their expected values. These will be
   *    present only for resources whose <code>StackResourceDriftStatus</code> is
   *    <code>MODIFIED</code>.</p>
   */
  PropertyDifferences?: PropertyDifference[];

  /**
   * @public
   * <p>Status of the resource's actual configuration compared to its expected configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The resource differs from its expected template configuration because the resource has
   *      been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFIED</code>: One or more resource properties differ from their expected values (as defined in the
   *      stack template and any values specified as template parameters).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The resource's actual configuration matches its expected template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation does not currently return this value.</p>
   *             </li>
   *          </ul>
   */
  StackResourceDriftStatus: StackResourceDriftStatus | string | undefined;

  /**
   * @public
   * <p>Time at which CloudFormation performed drift detection on the stack resource.</p>
   */
  Timestamp: Date | undefined;

  /**
   * @public
   * <p>Contains information about the module from which the resource was created, if the resource was created from a
   *    module included in the stack template.</p>
   */
  ModuleInfo?: ModuleInfo;
}

/**
 * @public
 */
export interface DescribeStackResourceDriftsOutput {
  /**
   * @public
   * <p>Drift information for the resources that have been checked for drift in the specified stack. This includes
   *    actual and expected configuration values for resources where CloudFormation detects drift.</p>
   *          <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack resource that has been
   *    checked for drift. Resources that haven't yet been checked for drift aren't included. Resources that do not currently
   *    support drift detection aren't checked, and so not included. For a list of resources that support drift detection,
   *    see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
   */
  StackResourceDrifts: StackResourceDrift[] | undefined;

  /**
   * @public
   * <p>If the request doesn't return all the remaining results, <code>NextToken</code> is set to a token. To retrieve
   *    the next set of results, call <code>DescribeStackResourceDrifts</code> again and assign that token to the request
   *    object's <code>NextToken</code> parameter. If the request returns all results, <code>NextToken</code> is set to
   *     <code>null</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The input for <a>DescribeStackResources</a> action.</p>
 */
export interface DescribeStackResourcesInput {
  /**
   * @public
   * <p>The name or the unique stack ID that is associated with the stack, which aren't always interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   *          <p>Default: There is no default value.</p>
   *          <p>Required: Conditional. If you don't specify <code>StackName</code>, you must specify
   *     <code>PhysicalResourceId</code>.</p>
   */
  StackName?: string;

  /**
   * @public
   * <p>The logical name of the resource as specified in the template.</p>
   *          <p>Default: There is no default value.</p>
   */
  LogicalResourceId?: string;

  /**
   * @public
   * <p>The name or unique identifier that corresponds to a physical instance ID of a resource supported by CloudFormation.</p>
   *          <p>For example, for an Amazon Elastic Compute Cloud (EC2) instance, <code>PhysicalResourceId</code> corresponds to
   *    the <code>InstanceId</code>. You can pass the EC2 <code>InstanceId</code> to <code>DescribeStackResources</code> to
   *    find which stack the instance belongs to and what other resources are part of the stack.</p>
   *          <p>Required: Conditional. If you don't specify <code>PhysicalResourceId</code>, you must specify
   *     <code>StackName</code>.</p>
   *          <p>Default: There is no default value.</p>
   */
  PhysicalResourceId?: string;
}

/**
 * @public
 * <p>The StackResource data type.</p>
 */
export interface StackResource {
  /**
   * @public
   * <p>The name associated with the stack.</p>
   */
  StackName?: string;

  /**
   * @public
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * @public
   * <p>The name or unique identifier that corresponds to a physical instance ID of a resource supported by CloudFormation.</p>
   */
  PhysicalResourceId?: string;

  /**
   * @public
   * <p>Type of resource. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types
   *     Reference</a> in the CloudFormation User Guide.</p>
   */
  ResourceType: string | undefined;

  /**
   * @public
   * <p>Time the status was updated.</p>
   */
  Timestamp: Date | undefined;

  /**
   * @public
   * <p>Current status of the resource.</p>
   */
  ResourceStatus: ResourceStatus | string | undefined;

  /**
   * @public
   * <p>Success/failure message associated with the resource.</p>
   */
  ResourceStatusReason?: string;

  /**
   * @public
   * <p>User defined description associated with the resource.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Information about whether the resource's actual configuration differs, or has <i>drifted</i>, from
   *    its expected configuration, as defined in the stack template and any values specified as template parameters. For
   *    more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: StackResourceDriftInformation;

  /**
   * @public
   * <p>Contains information about the module from which the resource was created, if the resource was created from a
   *    module included in the stack template.</p>
   */
  ModuleInfo?: ModuleInfo;
}

/**
 * @public
 * <p>The output for a <a>DescribeStackResources</a> action.</p>
 */
export interface DescribeStackResourcesOutput {
  /**
   * @public
   * <p>A list of <code>StackResource</code> structures.</p>
   */
  StackResources?: StackResource[];
}

/**
 * @public
 * <p>The input for <a>DescribeStacks</a> action.</p>
 */
export interface DescribeStacksInput {
  /**
   * @public
   * <note>
   *             <p>If you don't pass a parameter to <code>StackName</code>, the API returns a response that describes all
   *     resources in the account. This requires <code>ListStacks</code> and <code>DescribeStacks</code> permissions.</p>
   *             <p>The IAM policy below can be added to IAM policies when you want to limit
   *     resource-level permissions and avoid returning a response when no parameter is sent in the request:</p>
   *             <p>\{ "Version": "2012-10-17", "Statement": [\{ "Effect": "Deny", "Action": "cloudformation:DescribeStacks",
   *     "NotResource": "arn:aws:cloudformation:*:*:stack/*\/*" \}] \}</p>
   *          </note>
   *          <p>The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   *          <p>Default: There is no default value.</p>
   */
  StackName?: string;

  /**
   * @public
   * <p>A string that identifies the next page of stacks that you want to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains information about whether the stack's actual configuration differs, or has
 *    <i>drifted</i>, from its expected configuration, as defined in the stack template and any values
 *    specified as template parameters. A stack is considered to have drifted if one or more of its resources have
 *    drifted.</p>
 */
export interface StackDriftInformation {
  /**
   * @public
   * <p>Status of the stack's actual configuration compared to its expected template configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The stack differs from its expected template configuration. A stack is considered to
   *      have drifted if one or more of its resources have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation hasn't checked if the stack differs from its expected template
   *      configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The stack's actual configuration matches its expected template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: This value is reserved for future use.</p>
   *             </li>
   *          </ul>
   */
  StackDriftStatus: StackDriftStatus | string | undefined;

  /**
   * @public
   * <p>Most recent time when a drift detection operation was initiated on the stack, or any of its individual resources
   *    that support drift detection.</p>
   */
  LastCheckTimestamp?: Date;
}

/**
 * @public
 * <p>The Output data type.</p>
 */
export interface Output {
  /**
   * @public
   * <p>The key associated with the output.</p>
   */
  OutputKey?: string;

  /**
   * @public
   * <p>The value associated with the output.</p>
   */
  OutputValue?: string;

  /**
   * @public
   * <p>User defined description associated with the output.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the export associated with the output.</p>
   */
  ExportName?: string;
}

/**
 * @public
 * @enum
 */
export const StackStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  IMPORT_COMPLETE: "IMPORT_COMPLETE",
  IMPORT_IN_PROGRESS: "IMPORT_IN_PROGRESS",
  IMPORT_ROLLBACK_COMPLETE: "IMPORT_ROLLBACK_COMPLETE",
  IMPORT_ROLLBACK_FAILED: "IMPORT_ROLLBACK_FAILED",
  IMPORT_ROLLBACK_IN_PROGRESS: "IMPORT_ROLLBACK_IN_PROGRESS",
  REVIEW_IN_PROGRESS: "REVIEW_IN_PROGRESS",
  ROLLBACK_COMPLETE: "ROLLBACK_COMPLETE",
  ROLLBACK_FAILED: "ROLLBACK_FAILED",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
  UPDATE_COMPLETE: "UPDATE_COMPLETE",
  UPDATE_COMPLETE_CLEANUP_IN_PROGRESS: "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_ROLLBACK_COMPLETE: "UPDATE_ROLLBACK_COMPLETE",
  UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS: "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS",
  UPDATE_ROLLBACK_FAILED: "UPDATE_ROLLBACK_FAILED",
  UPDATE_ROLLBACK_IN_PROGRESS: "UPDATE_ROLLBACK_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type StackStatus = (typeof StackStatus)[keyof typeof StackStatus];

/**
 * @public
 * <p>The Stack data type.</p>
 */
export interface Stack {
  /**
   * @public
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The name associated with the stack.</p>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>The unique ID of the change set.</p>
   */
  ChangeSetId?: string;

  /**
   * @public
   * <p>A user-defined description associated with the stack.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A list of <code>Parameter</code> structures.</p>
   */
  Parameters?: Parameter[];

  /**
   * @public
   * <p>The time at which the stack was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The time the stack was deleted.</p>
   */
  DeletionTime?: Date;

  /**
   * @public
   * <p>The time the stack was last updated. This field will only be returned if the stack has been updated at least
   *    once.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for
   *    the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

  /**
   * @public
   * <p>Current status of the stack.</p>
   */
  StackStatus: StackStatus | string | undefined;

  /**
   * @public
   * <p>Success/failure message associated with the stack status.</p>
   */
  StackStatusReason?: string;

  /**
   * @public
   * <p>Boolean to enable or disable rollback on stack creation failures:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>true</code>: disable rollback.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>false</code>: enable rollback.</p>
   *             </li>
   *          </ul>
   */
  DisableRollback?: boolean;

  /**
   * @public
   * <p>Amazon SNS topic Amazon Resource Names (ARNs) to which stack related events are published.</p>
   */
  NotificationARNs?: string[];

  /**
   * @public
   * <p>The amount of time within which stack creation should complete.</p>
   */
  TimeoutInMinutes?: number;

  /**
   * @public
   * <p>The capabilities allowed in the stack.</p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * @public
   * <p>A list of output structures.</p>
   */
  Outputs?: Output[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that's associated with the
   *    stack. During a stack operation, CloudFormation uses this role's credentials to make calls on your behalf.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>A list of <code>Tag</code>s that specify information about the stack.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Whether termination protection is enabled for the stack.</p>
   *          <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested
   *    stacks</a>, termination protection is set on the root stack and can't be changed directly on the nested stack.
   *    For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a>
   *    in the <i>CloudFormation User Guide</i>.</p>
   */
  EnableTerminationProtection?: boolean;

  /**
   * @public
   * <p>For nested stacks--stacks created as resources for another stack--the stack ID of the direct parent of this
   *    stack. For the first level of nested stacks, the root stack is also the parent stack.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Working with Nested Stacks</a> in the
   *    <i>CloudFormation User Guide</i>.</p>
   */
  ParentId?: string;

  /**
   * @public
   * <p>For nested stacks--stacks created as resources for another stack--the stack ID of the top-level stack to which
   *    the nested stack ultimately belongs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Working with Nested Stacks</a> in the
   *    <i>CloudFormation User Guide</i>.</p>
   */
  RootId?: string;

  /**
   * @public
   * <p>Information about whether a stack's actual configuration differs, or has <i>drifted</i>, from its
   *    expected configuration, as defined in the stack template and any values specified as template parameters. For more
   *    information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: StackDriftInformation;

  /**
   * @public
   * <p>This deletion policy deletes newly created resources, but retains existing resources, when a stack operation is
   *    rolled back. This ensures new, empty, and unused resources are deleted, while critical resources and their data are
   *    retained. <code>RetainExceptOnCreate</code> can be specified for any resource that supports the
   *    <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html">
   *    DeletionPolicy</a> attribute.</p>
   */
  RetainExceptOnCreate?: boolean;
}

/**
 * @public
 * <p>The output for a <a>DescribeStacks</a> action.</p>
 */
export interface DescribeStacksOutput {
  /**
   * @public
   * <p>A list of stack structures.</p>
   */
  Stacks?: Stack[];

  /**
   * @public
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of stacks. If no additional page
   *    exists, this value is null.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeStackSetInput {
  /**
   * @public
   * <p>The name or unique ID of the stack set whose description you want.</p>
   */
  StackSetName: string | undefined;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *     management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *       administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

/**
 * @public
 * @enum
 */
export const StackSetDriftDetectionStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PARTIAL_SUCCESS: "PARTIAL_SUCCESS",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type StackSetDriftDetectionStatus =
  (typeof StackSetDriftDetectionStatus)[keyof typeof StackSetDriftDetectionStatus];

/**
 * @public
 * @enum
 */
export const StackSetDriftStatus = {
  DRIFTED: "DRIFTED",
  IN_SYNC: "IN_SYNC",
  NOT_CHECKED: "NOT_CHECKED",
} as const;

/**
 * @public
 */
export type StackSetDriftStatus = (typeof StackSetDriftStatus)[keyof typeof StackSetDriftStatus];

/**
 * @public
 * <p>Detailed information about the drift status of the stack set.</p>
 *          <p>For stack sets, contains information about the last <i>completed</i> drift operation performed on
 *    the stack set. Information about drift operations in-progress isn't included.</p>
 *          <p>For stack set operations, includes information about drift operations currently being performed on the stack
 *    set.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting unmanaged changes in stack sets</a> in
 *    the <i>CloudFormation User Guide</i>.</p>
 */
export interface StackSetDriftDetectionDetails {
  /**
   * @public
   * <p>Status of the stack set's actual configuration compared to its expected template and parameter configuration. A
   *    stack set is considered to have drifted if one or more of its stack instances have drifted from their expected
   *    template and parameter configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: One or more of the stack instances belonging to the stack set stack differs from the
   *      expected template and parameter configuration. A stack instance is considered to have drifted if one or more of the
   *      resources in the associated stack have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation hasn't checked the stack set for drift.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: All of the stack instances belonging to the stack set stack match from the expected
   *      template and parameter configuration.</p>
   *             </li>
   *          </ul>
   */
  DriftStatus?: StackSetDriftStatus | string;

  /**
   * @public
   * <p>The status of the stack set drift detection operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code>: The drift detection operation completed without failing on any stack instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The drift detection operation exceeded the specified failure tolerance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARTIAL_SUCCESS</code>: The drift detection operation completed without exceeding the failure tolerance
   *      for the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>: The drift detection operation is currently being performed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code>: The user has canceled the drift detection operation.</p>
   *             </li>
   *          </ul>
   */
  DriftDetectionStatus?: StackSetDriftDetectionStatus | string;

  /**
   * @public
   * <p>Most recent time when CloudFormation performed a drift detection operation on the stack set. This value
   *    will be <code>NULL</code> for any stack set on which drift detection hasn't yet been performed.</p>
   */
  LastDriftCheckTimestamp?: Date;

  /**
   * @public
   * <p>The total number of stack instances belonging to this stack set.</p>
   *          <p>The total number of stack instances is equal to the total of:</p>
   *          <ul>
   *             <li>
   *                <p>Stack instances that match the stack set configuration.</p>
   *             </li>
   *             <li>
   *                <p>Stack instances that have drifted from the stack set configuration.</p>
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

  /**
   * @public
   * <p>The number of stack instances that have drifted from the expected template and parameter configuration of the
   *    stack set. A stack instance is considered to have drifted if one or more of the resources in the associated stack
   *    don't match their expected configuration.</p>
   */
  DriftedStackInstancesCount?: number;

  /**
   * @public
   * <p>The number of stack instances which match the expected template and parameter configuration of the stack
   *    set.</p>
   */
  InSyncStackInstancesCount?: number;

  /**
   * @public
   * <p>The number of stack instances that are currently being checked for drift.</p>
   */
  InProgressStackInstancesCount?: number;

  /**
   * @public
   * <p>The number of stack instances for which the drift detection operation failed.</p>
   */
  FailedStackInstancesCount?: number;
}

/**
 * @public
 * @enum
 */
export const StackSetStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
} as const;

/**
 * @public
 */
export type StackSetStatus = (typeof StackSetStatus)[keyof typeof StackSetStatus];

/**
 * @public
 * <p>A structure that contains information about a stack set. A stack set enables you to provision stacks into
 *     Amazon Web Services accounts and across Regions by using a single CloudFormation template. In the stack set,
 *    you specify the template to use, in addition to any parameters and capabilities that the template requires.</p>
 */
export interface StackSet {
  /**
   * @public
   * <p>The name that's associated with the stack set.</p>
   */
  StackSetName?: string;

  /**
   * @public
   * <p>The ID of the stack set.</p>
   */
  StackSetId?: string;

  /**
   * @public
   * <p>A description of the stack set that you specify when the stack set is created or updated.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The status of the stack set.</p>
   */
  Status?: StackSetStatus | string;

  /**
   * @public
   * <p>The structure that contains the body of the template that was used to create or update the stack set.</p>
   */
  TemplateBody?: string;

  /**
   * @public
   * <p>A list of input parameters for a stack set.</p>
   */
  Parameters?: Parameter[];

  /**
   * @public
   * <p>The capabilities that are allowed in the stack set. Some stack set templates might include resources that can
   *    affect permissions in your Amazon Web Services account—for example, by creating new Identity and Access Management (IAM) users. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM
   *     Resources in CloudFormation Templates.</a>
   *          </p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * @public
   * <p>A list of tags that specify information about the stack set. A maximum number of 50 tags can be
   *    specified.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the stack set.</p>
   */
  StackSetARN?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role used to create or update the stack set.</p>
   *          <p>Use customized administrator roles to control which users or groups can manage specific stack sets within the
   *    same administrator account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/stacksets-prereqs.html">Prerequisites: Granting Permissions for Stack Set Operations</a>
   *    in the <i>CloudFormation User Guide</i>.</p>
   */
  AdministrationRoleARN?: string;

  /**
   * @public
   * <p>The name of the IAM execution role used to create or update the stack set.</p>
   *          <p>Use customized execution roles to control which stack resources users and groups can include in their stack
   *    sets.</p>
   */
  ExecutionRoleName?: string;

  /**
   * @public
   * <p>Detailed information about the drift status of the stack set.</p>
   *          <p>For stack sets, contains information about the last <i>completed</i> drift operation performed on
   *    the stack set. Information about drift operations currently in progress isn't included.</p>
   */
  StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;

  /**
   * @public
   * <p>[Service-managed permissions] Describes whether StackSets automatically deploys to Organizations
   *    accounts that are added to a target organization or organizational unit (OU).</p>
   */
  AutoDeployment?: AutoDeployment;

  /**
   * @public
   * <p>Describes how the IAM roles required for stack set operations are created.</p>
   *          <ul>
   *             <li>
   *                <p>With <code>self-managed</code> permissions, you must create the administrator and execution roles required to
   *      deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant Self-Managed Stack Set
   *       Permissions</a>.</p>
   *             </li>
   *             <li>
   *                <p>With <code>service-managed</code> permissions, StackSets automatically creates the IAM roles
   *      required to deploy to accounts managed by Organizations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant
   *       Service-Managed Stack Set Permissions</a>.</p>
   *             </li>
   *          </ul>
   */
  PermissionModel?: PermissionModels | string;

  /**
   * @public
   * <p>[Service-managed permissions] The organization root ID or organizational unit (OU) IDs that you specified for
   *     <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html">DeploymentTargets</a>.</p>
   */
  OrganizationalUnitIds?: string[];

  /**
   * @public
   * <p>Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting
   *    operations.</p>
   */
  ManagedExecution?: ManagedExecution;

  /**
   * @public
   * <p>Returns a list of all Amazon Web Services Regions the given StackSet has stack instances deployed in. The Amazon Web Services Regions list output is in no particular order.</p>
   */
  Regions?: string[];
}

/**
 * @public
 */
export interface DescribeStackSetOutput {
  /**
   * @public
   * <p>The specified stack set.</p>
   */
  StackSet?: StackSet;
}

/**
 * @public
 */
export interface DescribeStackSetOperationInput {
  /**
   * @public
   * <p>The name or the unique stack ID of the stack set for the stack operation.</p>
   */
  StackSetName: string | undefined;

  /**
   * @public
   * <p>The unique ID of the stack set operation.</p>
   */
  OperationId: string | undefined;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *     management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *       administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

/**
 * @public
 * @enum
 */
export const StackSetOperationAction = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  DETECT_DRIFT: "DETECT_DRIFT",
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type StackSetOperationAction = (typeof StackSetOperationAction)[keyof typeof StackSetOperationAction];

/**
 * @public
 * @enum
 */
export const StackSetOperationStatus = {
  FAILED: "FAILED",
  QUEUED: "QUEUED",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type StackSetOperationStatus = (typeof StackSetOperationStatus)[keyof typeof StackSetOperationStatus];

/**
 * @public
 * <p>Detailed information about the StackSet operation.</p>
 */
export interface StackSetOperationStatusDetails {
  /**
   * @public
   * <p>The number of stack instances for which the StackSet operation failed.</p>
   */
  FailedStackInstancesCount?: number;
}

/**
 * @public
 * <p>The structure that contains information about a stack set operation.</p>
 */
export interface StackSetOperation {
  /**
   * @public
   * <p>The unique ID of a stack set operation.</p>
   */
  OperationId?: string;

  /**
   * @public
   * <p>The ID of the stack set.</p>
   */
  StackSetId?: string;

  /**
   * @public
   * <p>The type of stack set operation: <code>CREATE</code>, <code>UPDATE</code>, or <code>DELETE</code>. Create and
   *    delete operations affect only the specified stack set instances that are associated with the specified stack set.
   *    Update operations affect both the stack set itself, in addition to <i>all</i> associated stack set
   *    instances.</p>
   */
  Action?: StackSetOperationAction | string;

  /**
   * @public
   * <p>The status of the operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation exceeded the specified failure tolerance. The failure tolerance value that
   *      you've set for an operation is applied for each Region during stack create and update operations. If the number of
   *      failed stacks within a Region exceeds the failure tolerance, the status of the operation in the Region is set to
   *       <code>FAILED</code>. This in turn sets the status of the operation as a whole to <code>FAILED</code>, and CloudFormation cancels the operation in any remaining Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUEUED</code>: [Service-managed permissions] For automatic deployments that require a sequence of
   *      operations, the operation is queued to be performed. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-status-codes">stack set operation status
   *       codes</a> in the CloudFormation User Guide.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>: The operation is currently being performed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code>: The user has canceled the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPING</code>: The operation is in the process of stopping, at user request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The operation completed creating or updating all the specified stacks without
   *      exceeding the failure tolerance for the operation.</p>
   *             </li>
   *          </ul>
   */
  Status?: StackSetOperationStatus | string;

  /**
   * @public
   * <p>The preferences for how CloudFormation performs this stack set operation.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * @public
   * <p>For stack set operations of action type <code>DELETE</code>, specifies whether to remove the stack instances
   *    from the specified stack set, but doesn't delete the stacks. You can't re-associate a retained stack, or add an
   *    existing, saved stack to a new stack set.</p>
   */
  RetainStacks?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role used to perform this stack set operation.</p>
   *          <p>Use customized administrator roles to control which users or groups can manage specific stack sets within the
   *    same administrator account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/stacksets-prereqs.html">Define Permissions for Multiple Administrators</a> in the
   *    <i>CloudFormation User Guide</i>.</p>
   */
  AdministrationRoleARN?: string;

  /**
   * @public
   * <p>The name of the IAM execution role used to create or update the stack set.</p>
   *          <p>Use customized execution roles to control which stack resources users and groups can include in their stack
   *    sets.</p>
   */
  ExecutionRoleName?: string;

  /**
   * @public
   * <p>The time at which the operation was initiated. Note that the creation times for the stack set operation might
   *    differ from the creation time of the individual stacks themselves. This is because CloudFormation needs to
   *    perform preparatory work for the operation, such as dispatching the work to the requested Regions, before actually
   *    creating the first stacks.</p>
   */
  CreationTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the stack set operation ended, across all accounts and Regions specified. Note that this
   *    doesn't necessarily mean that the stack set operation was successful, or even attempted, in each account or
   *    Region.</p>
   */
  EndTimestamp?: Date;

  /**
   * @public
   * <p>[Service-managed permissions] The Organizations accounts affected by the stack operation.</p>
   */
  DeploymentTargets?: DeploymentTargets;

  /**
   * @public
   * <p>Detailed information about the drift status of the stack set. This includes information about drift operations
   *    currently being performed on the stack set.</p>
   *          <p>This information will only be present for stack set operations whose <code>Action</code> type is
   *     <code>DETECT_DRIFT</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged Changes in Stack Sets</a> in
   *    the CloudFormation User Guide.</p>
   */
  StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;

  /**
   * @public
   * <p>The status of the operation in details.</p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>Detailed information about the StackSet operation.</p>
   */
  StatusDetails?: StackSetOperationStatusDetails;
}

/**
 * @public
 */
export interface DescribeStackSetOperationOutput {
  /**
   * @public
   * <p>The specified stack set operation.</p>
   */
  StackSetOperation?: StackSetOperation;
}

/**
 * @public
 */
export interface DescribeTypeInput {
  /**
   * @public
   * <p>The kind of extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
   */
  Type?: RegistryType | string;

  /**
   * @public
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource
   *    Name (ARN) assigned to the extension version when it is registered.</p>
   *          <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific
   *    extension version. Otherwise, it returns information about the default extension version.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>The publisher ID of the extension publisher.</p>
   *          <p>Extensions provided by Amazon Web Services are not assigned a publisher ID.</p>
   */
  PublisherId?: string;

  /**
   * @public
   * <p>The version number of a public third-party extension.</p>
   */
  PublicVersionNumber?: string;
}

/**
 * @public
 * @enum
 */
export const DeprecatedStatus = {
  DEPRECATED: "DEPRECATED",
  LIVE: "LIVE",
} as const;

/**
 * @public
 */
export type DeprecatedStatus = (typeof DeprecatedStatus)[keyof typeof DeprecatedStatus];

/**
 * @public
 * @enum
 */
export const ProvisioningType = {
  FULLY_MUTABLE: "FULLY_MUTABLE",
  IMMUTABLE: "IMMUTABLE",
  NON_PROVISIONABLE: "NON_PROVISIONABLE",
} as const;

/**
 * @public
 */
export type ProvisioningType = (typeof ProvisioningType)[keyof typeof ProvisioningType];

/**
 * @public
 * <p>For extensions that are modules, a public third-party extension that must be activated in your account in order
 *    for the module itself to be activated.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html#module-enabling">Activating public modules for use in your
 *     account</a> in the <i>CloudFormation User Guide</i>.</p>
 */
export interface RequiredActivatedType {
  /**
   * @public
   * <p>An alias assigned to the public extension, in this account and Region. If you specify an alias for the
   *    extension, CloudFormation treats the alias as the extension type name within this account and Region. You
   *    must use the alias to refer to the extension in your templates, API calls, and CloudFormation
   *    console.</p>
   */
  TypeNameAlias?: string;

  /**
   * @public
   * <p>The type name of the public extension.</p>
   *          <p>If you specified a <code>TypeNameAlias</code> when enabling the extension in this account and Region, CloudFormation treats that alias as the extension's type name within the account and Region, not the type name of
   *    the public extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-alias">Specifying aliases to
   *     refer to extensions</a> in the <i>CloudFormation User Guide</i>.</p>
   */
  OriginalTypeName?: string;

  /**
   * @public
   * <p>The publisher ID of the extension publisher.</p>
   */
  PublisherId?: string;

  /**
   * @public
   * <p>A list of the major versions of the extension type that the macro supports.</p>
   */
  SupportedMajorVersions?: number[];
}

/**
 * @public
 * @enum
 */
export const TypeTestsStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_TESTED: "NOT_TESTED",
  PASSED: "PASSED",
} as const;

/**
 * @public
 */
export type TypeTestsStatus = (typeof TypeTestsStatus)[keyof typeof TypeTestsStatus];

/**
 * @public
 * @enum
 */
export const Visibility = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;

/**
 * @public
 */
export type Visibility = (typeof Visibility)[keyof typeof Visibility];

/**
 * @public
 */
export interface DescribeTypeOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The kind of extension.</p>
   */
  Type?: RegistryType | string;

  /**
   * @public
   * <p>The name of the extension.</p>
   *          <p>If the extension is a public third-party type you have activated with a type name alias, CloudFormation
   *    returns the type name alias. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">ActivateType</a>.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The ID of the default version of the extension. The default version is used when the extension version isn't
   *    specified.</p>
   *          <p>This applies only to private extensions you have registered in your account. For public extensions, both those
   *    provided by Amazon Web Services and published by third parties, CloudFormation returns <code>null</code>. For
   *    more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   *          <p>To set the default version of an extension, use <a>SetTypeDefaultVersion</a>.</p>
   */
  DefaultVersionId?: string;

  /**
   * @public
   * <p>Whether the specified extension version is set as the default version.</p>
   *          <p>This applies only to private extensions you have registered in your account, and extensions published by Amazon Web Services. For public third-party extensions, whether they are activated in your account, CloudFormation
   *    returns <code>null</code>.</p>
   */
  IsDefaultVersion?: boolean;

  /**
   * @public
   * <p>The contract test status of the registered extension version. To return the extension test status of a specific
   *    extension version, you must specify <code>VersionId</code>.</p>
   *          <p>This applies only to registered private extension versions. CloudFormation doesn't return this
   *    information for public extensions, whether they are activated in your account.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PASSED</code>: The extension has passed all its contract tests.</p>
   *                <p>An extension must have a test status of <code>PASSED</code> before it can be published. For more information,
   *      see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html">Publishing
   *       extensions to make them available for public use</a> in the <i>CloudFormation Command Line
   *       Interface User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The extension has failed one or more contract tests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>: Contract tests are currently being performed on the extension.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_TESTED</code>: Contract tests haven't been performed on the extension.</p>
   *             </li>
   *          </ul>
   */
  TypeTestsStatus?: TypeTestsStatus | string;

  /**
   * @public
   * <p>The description of the test status. To return the extension test status of a specific extension version, you
   *    must specify <code>VersionId</code>.</p>
   *          <p>This applies only to registered private extension versions. CloudFormation doesn't return this
   *    information for public extensions, whether they are activated in your account.</p>
   */
  TypeTestsStatusDescription?: string;

  /**
   * @public
   * <p>The description of the extension.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The schema that defines the extension.</p>
   *          <p>For more information about extension schemas, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">Resource Provider Schema</a> in the
   *      <i>CloudFormation CLI User Guide</i>.</p>
   */
  Schema?: string;

  /**
   * @public
   * <p>For resource type extensions, the provisioning behavior of the resource type. CloudFormation determines the provisioning
   *    type during registration, based on the types of handlers in the schema handler package submitted.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FULLY_MUTABLE</code>: The resource type includes an update handler to process updates to the type during
   *      stack update operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMMUTABLE</code>: The resource type doesn't include an update handler, so the type can't be updated and
   *      must instead be replaced during stack update operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_PROVISIONABLE</code>: The resource type doesn't include all the following handlers, and therefore
   *      can't actually be provisioned.</p>
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
   * @public
   * <p>The deprecation status of the extension version.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LIVE</code>: The extension is activated or registered and can be used in CloudFormation
   *      operations, dependent on its provisioning behavior and visibility scope.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPRECATED</code>: The extension has been deactivated or deregistered and can no longer be used in
   *       CloudFormation operations.</p>
   *             </li>
   *          </ul>
   *          <p>For public third-party extensions, CloudFormation returns <code>null</code>.</p>
   */
  DeprecatedStatus?: DeprecatedStatus | string;

  /**
   * @public
   * <p>Contains logging configuration information for private extensions. This applies only to private extensions you
   *    have registered in your account. For public extensions, both those provided by Amazon Web Services and published by
   *    third parties, CloudFormation returns <code>null</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   */
  LoggingConfig?: LoggingConfig;

  /**
   * @public
   * <p>For extensions that are modules, the public third-party extensions that must be activated in your account in
   *    order for the module itself to be activated.</p>
   */
  RequiredActivatedTypes?: RequiredActivatedType[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to register the extension. This
   *    applies only to private extensions you have registered in your account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   *          <p>If the registered extension calls any Amazon Web Services APIs, you must create an <i>
   *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM execution role</a>
   *             </i>
   *    that includes the necessary permissions to call those Amazon Web Services APIs, and provision that execution role in
   *    your account. CloudFormation then assumes that execution role to provide your extension with the appropriate
   *    credentials.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * @public
   * <p>The scope at which the extension is visible and usable in CloudFormation operations.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PRIVATE</code>: The extension is only visible and usable within the account in which it is registered.
   *      CloudFormation marks any extensions you register as <code>PRIVATE</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUBLIC</code>: The extension is publicly visible and usable within any Amazon Web Services
   *      account.</p>
   *             </li>
   *          </ul>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>The URL of the source code for the extension.</p>
   */
  SourceUrl?: string;

  /**
   * @public
   * <p>The URL of a page providing detailed documentation for this extension.</p>
   */
  DocumentationUrl?: string;

  /**
   * @public
   * <p>When the specified extension version was registered. This applies only to:</p>
   *          <ul>
   *             <li>
   *                <p>Private extensions you have registered in your account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   *             </li>
   *             <li>
   *                <p>Public extensions you have activated in your account with auto-update specified. For more information, see
   *       <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">ActivateType</a>.</p>
   *             </li>
   *          </ul>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>When the specified private extension version was registered or activated in your account.</p>
   */
  TimeCreated?: Date;

  /**
   * @public
   * <p>A JSON string that represent the current configuration data for the extension in this account and Region.</p>
   *          <p>To set the configuration data for an extension, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a>. For more
   *    information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at
   *     the account level</a> in the <i>CloudFormation User Guide</i>.</p>
   */
  ConfigurationSchema?: string;

  /**
   * @public
   * <p>The publisher ID of the extension publisher.</p>
   *          <p>This applies only to public third-party extensions. For private registered extensions, and extensions provided
   *    by Amazon Web Services, CloudFormation returns <code>null</code>.</p>
   */
  PublisherId?: string;

  /**
   * @public
   * <p>For public extensions that have been activated for this account and Region, the type name of the public
   *    extension.</p>
   *          <p>If you specified a <code>TypeNameAlias</code> when enabling the extension in this account and Region, CloudFormation treats that alias as the extension's type name within the account and Region, not the type name of
   *    the public extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-alias">Specifying aliases to
   *     refer to extensions</a> in the <i>CloudFormation User Guide</i>.</p>
   */
  OriginalTypeName?: string;

  /**
   * @public
   * <p>For public extensions that have been activated for this account and Region, the Amazon Resource Name (ARN) of
   *    the public extension.</p>
   */
  OriginalTypeArn?: string;

  /**
   * @public
   * <p>The version number of a public third-party extension.</p>
   *          <p>This applies only if you specify a public extension you have activated in your account, or specify a public
   *    extension without specifying a version. For all other extensions, CloudFormation returns
   *    <code>null</code>.</p>
   */
  PublicVersionNumber?: string;

  /**
   * @public
   * <p>The latest version of a public extension <i>that is available</i> for use.</p>
   *          <p>This only applies if you specify a public extension, and you don't specify a version. For all other requests,
   *     CloudFormation returns <code>null</code>.</p>
   */
  LatestPublicVersion?: string;

  /**
   * @public
   * <p>Whether the extension is activated in the account and Region.</p>
   *          <p>This only applies to public third-party extensions. For all other extensions, CloudFormation returns
   *     <code>null</code>.</p>
   */
  IsActivated?: boolean;

  /**
   * @public
   * <p>Whether CloudFormation automatically updates the extension in this account and Region when a new
   *     <i>minor</i> version is published by the extension publisher. Major versions released by the publisher
   *    must be manually updated. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable">Activating public extensions
   *     for use in your account</a> in the <i>CloudFormation User Guide</i>.</p>
   */
  AutoUpdate?: boolean;
}

/**
 * @public
 */
export interface DescribeTypeRegistrationInput {
  /**
   * @public
   * <p>The identifier for this registration request.</p>
   *          <p>This registration token is generated by CloudFormation when you initiate a registration request using
   *     <a>RegisterType</a>.</p>
   */
  RegistrationToken: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RegistrationStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus];

/**
 * @public
 */
export interface DescribeTypeRegistrationOutput {
  /**
   * @public
   * <p>The current status of the extension registration request.</p>
   */
  ProgressStatus?: RegistrationStatus | string;

  /**
   * @public
   * <p>The description of the extension registration request.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the extension being registered.</p>
   *          <p>For registration requests with a <code>ProgressStatus</code> of other than <code>COMPLETE</code>, this will be
   *     <code>null</code>.</p>
   */
  TypeArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of this specific version of the extension being registered.</p>
   *          <p>For registration requests with a <code>ProgressStatus</code> of other than <code>COMPLETE</code>, this will be
   *     <code>null</code>.</p>
   */
  TypeVersionArn?: string;
}

/**
 * @public
 */
export interface DetectStackDriftInput {
  /**
   * @public
   * <p>The name of the stack for which you want to detect drift.</p>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>The logical names of any resources you want to use as filters.</p>
   */
  LogicalResourceIds?: string[];
}

/**
 * @public
 */
export interface DetectStackDriftOutput {
  /**
   * @public
   * <p>The ID of the drift detection results of this operation.</p>
   *          <p>CloudFormation generates new results, with a new drift detection ID, each time this operation is run. However, the number
   *    of drift results CloudFormation retains for any given stack, and for how long, may vary.</p>
   */
  StackDriftDetectionId: string | undefined;
}

/**
 * @public
 */
export interface DetectStackResourceDriftInput {
  /**
   * @public
   * <p>The name of the stack to which the resource belongs.</p>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>The logical name of the resource for which to return drift information.</p>
   */
  LogicalResourceId: string | undefined;
}

/**
 * @public
 */
export interface DetectStackResourceDriftOutput {
  /**
   * @public
   * <p>Information about whether the resource's actual configuration has drifted from its expected template
   *    configuration, including actual and expected property values and any differences detected.</p>
   */
  StackResourceDrift: StackResourceDrift | undefined;
}

/**
 * @public
 */
export interface DetectStackSetDriftInput {
  /**
   * @public
   * <p>The name of the stack set on which to perform the drift detection operation.</p>
   */
  StackSetName: string | undefined;

  /**
   * @public
   * <p>The user-specified preferences for how CloudFormation performs a stack set operation.</p>
   *          <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation
   *     options</a>.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * @public
   * <p>
   *             <i>The ID of the stack set operation.</i>
   *          </p>
   */
  OperationId?: string;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *     management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *       administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

/**
 * @public
 */
export interface DetectStackSetDriftOutput {
  /**
   * @public
   * <p>The ID of the drift detection stack set operation.</p>
   *          <p>You can use this operation ID with <a>DescribeStackSetOperation</a> to monitor the progress of the
   *    drift detection operation.</p>
   */
  OperationId?: string;
}

/**
 * @public
 * <p>The input for an <a>EstimateTemplateCost</a> action.</p>
 */
export interface EstimateTemplateCostInput {
  /**
   * @public
   * <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.
   *    (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the
   *    CloudFormation User Guide.)</p>
   *          <p>Conditional: You must pass <code>TemplateBody</code> or <code>TemplateURL</code>. If both are passed, only
   *     <code>TemplateBody</code> is used.</p>
   */
  TemplateBody?: string;

  /**
   * @public
   * <p>Location of file containing the template body. The URL must point to a template that's located in an Amazon S3 bucket or a Systems Manager document. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the
   *    CloudFormation User Guide.</p>
   *          <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only
   *     <code>TemplateBody</code> is used.</p>
   */
  TemplateURL?: string;

  /**
   * @public
   * <p>A list of <code>Parameter</code> structures that specify input parameters.</p>
   */
  Parameters?: Parameter[];
}

/**
 * @public
 * <p>The output for a <a>EstimateTemplateCost</a> action.</p>
 */
export interface EstimateTemplateCostOutput {
  /**
   * @public
   * <p>An Amazon Web Services Simple Monthly Calculator URL with a query string that describes the resources required to
   *    run the template.</p>
   */
  Url?: string;
}

/**
 * @public
 * <p>The input for the <a>ExecuteChangeSet</a> action.</p>
 */
export interface ExecuteChangeSetInput {
  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the change set that you want use to update the specified stack.</p>
   */
  ChangeSetName: string | undefined;

  /**
   * @public
   * <p>If you specified the name of a change set, specify the stack name or Amazon Resource Name (ARN) that's
   *    associated with the change set you want to execute.</p>
   */
  StackName?: string;

  /**
   * @public
   * <p>A unique identifier for this <code>ExecuteChangeSet</code> request. Specify this token if you plan to retry
   *    requests so that CloudFormation knows that you're not attempting to execute a change set to update a stack with
   *    the same name. You might retry <code>ExecuteChangeSet</code> requests to ensure that CloudFormation successfully
   *    received them.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>Preserves the state of previously provisioned resources when an operation
   *     fails. This parameter can't be specified when
   *     the <code>OnStackFailure</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html">CreateChangeSet</a> API operation was
   *     specified.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>True</code> - if the stack creation fails, do nothing. This is equivalent to specifying
   *         <code>DO_NOTHING</code> for the <code>OnStackFailure</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html">CreateChangeSet</a> API operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>False</code> - if the stack creation fails, roll back the stack. This is equivalent to specifying
   *         <code>ROLLBACK</code> for the <code>OnStackFailure</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html">CreateChangeSet</a> API operation.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>True</code>
   *          </p>
   */
  DisableRollback?: boolean;

  /**
   * @public
   * <p>This deletion policy deletes newly created resources, but retains existing resources, when a stack operation is
   *     rolled back. This ensures new, empty, and unused resources are deleted, while critical resources and their data are
   *     retained. <code>RetainExceptOnCreate</code> can be specified for any resource that supports the
   *     <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html">
   *     DeletionPolicy</a> attribute.</p>
   */
  RetainExceptOnCreate?: boolean;
}

/**
 * @public
 * <p>The output for the <a>ExecuteChangeSet</a> action.</p>
 */
export interface ExecuteChangeSetOutput {}

/**
 * @public
 * <p>The input for the <a>GetStackPolicy</a> action.</p>
 */
export interface GetStackPolicyInput {
  /**
   * @public
   * <p>The name or unique stack ID that's associated with the stack whose policy you want to get.</p>
   */
  StackName: string | undefined;
}

/**
 * @public
 * <p>The output for the <a>GetStackPolicy</a> action.</p>
 */
export interface GetStackPolicyOutput {
  /**
   * @public
   * <p>Structure containing the stack policy body. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent Updates to Stack Resources</a> in
   *    the CloudFormation User Guide.)</p>
   */
  StackPolicyBody?: string;
}

/**
 * @public
 * @enum
 */
export const TemplateStage = {
  Original: "Original",
  Processed: "Processed",
} as const;

/**
 * @public
 */
export type TemplateStage = (typeof TemplateStage)[keyof typeof TemplateStage];

/**
 * @public
 * <p>The input for a <a>GetTemplate</a> action.</p>
 */
export interface GetTemplateInput {
  /**
   * @public
   * <p>The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   *          <p>Default: There is no default value.</p>
   */
  StackName?: string;

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of a change set for which CloudFormation returns the associated
   *    template. If you specify a name, you must also specify the <code>StackName</code>.</p>
   */
  ChangeSetName?: string;

  /**
   * @public
   * <p>For templates that include transforms, the stage of the template that CloudFormation returns. To get the
   *    user-submitted template, specify <code>Original</code>. To get the template after CloudFormation has
   *    processed all transforms, specify <code>Processed</code>.</p>
   *          <p>If the template doesn't include transforms, <code>Original</code> and <code>Processed</code> return the same
   *    template. By default, CloudFormation specifies <code>Processed</code>.</p>
   */
  TemplateStage?: TemplateStage | string;
}

/**
 * @public
 * <p>The output for <a>GetTemplate</a> action.</p>
 */
export interface GetTemplateOutput {
  /**
   * @public
   * <p>Structure containing the template body. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the
   *    CloudFormation User Guide.)</p>
   *          <p>CloudFormation returns the same template that was used when the stack was created.</p>
   */
  TemplateBody?: string;

  /**
   * @public
   * <p>The stage of the template that you can retrieve. For stacks, the <code>Original</code> and
   *     <code>Processed</code> templates are always available. For change sets, the <code>Original</code> template is always
   *    available. After CloudFormation finishes creating the change set, the <code>Processed</code> template becomes
   *    available.</p>
   */
  StagesAvailable?: (TemplateStage | string)[];
}

/**
 * @public
 * <p>Options for the <code>GetTemplateSummary</code> API action.</p>
 */
export interface TemplateSummaryConfig {
  /**
   * @public
   * <p>If set to <code>True</code>, any unrecognized resource types generate warnings and not an error. Any
   *    unrecognized resource types are returned in the <code>Warnings</code> output parameter.</p>
   */
  TreatUnrecognizedResourceTypesAsWarnings?: boolean;
}

/**
 * @public
 * <p>The input for the <a>GetTemplateSummary</a> action.</p>
 */
export interface GetTemplateSummaryInput {
  /**
   * @public
   * <p>Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes. For
   *    more information about templates, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template anatomy</a> in the
   *    CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>,
   *     <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>
   */
  TemplateBody?: string;

  /**
   * @public
   * <p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that's
   *    located in an Amazon S3 bucket or a Systems Manager document. For more information about templates, see
   *     <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template anatomy</a>
   *    in the CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>,
   *     <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>
   */
  TemplateURL?: string;

  /**
   * @public
   * <p>The name or the stack ID that's associated with the stack, which aren't always interchangeable. For running
   *    stacks, you can specify either the stack's name or its unique stack ID. For deleted stack, you must specify the
   *    unique stack ID.</p>
   *          <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>,
   *     <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>
   */
  StackName?: string;

  /**
   * @public
   * <p>The name or unique ID of the stack set from which the stack was created.</p>
   *          <p>Conditional: You must specify only one of the following parameters: <code>StackName</code>,
   *     <code>StackSetName</code>, <code>TemplateBody</code>, or <code>TemplateURL</code>.</p>
   */
  StackSetName?: string;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *     management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *       administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;

  /**
   * @public
   * <p>Specifies options for the <code>GetTemplateSummary</code> API action.</p>
   */
  TemplateSummaryConfig?: TemplateSummaryConfig;
}

/**
 * @public
 * <p>A set of criteria that CloudFormation uses to validate parameter values. Although other constraints might be
 *    defined in the stack template, CloudFormation returns only the <code>AllowedValues</code> property.</p>
 */
export interface ParameterConstraints {
  /**
   * @public
   * <p>A list of values that are permitted for a parameter.</p>
   */
  AllowedValues?: string[];
}

/**
 * @public
 * <p>The ParameterDeclaration data type.</p>
 */
export interface ParameterDeclaration {
  /**
   * @public
   * <p>The name that's associated with the parameter.</p>
   */
  ParameterKey?: string;

  /**
   * @public
   * <p>The default value of the parameter.</p>
   */
  DefaultValue?: string;

  /**
   * @public
   * <p>The type of parameter.</p>
   */
  ParameterType?: string;

  /**
   * @public
   * <p>Flag that indicates whether the parameter value is shown as plain text in logs and in the Amazon Web Services Management Console.</p>
   */
  NoEcho?: boolean;

  /**
   * @public
   * <p>The description that's associate with the parameter.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The criteria that CloudFormation uses to validate parameter values.</p>
   */
  ParameterConstraints?: ParameterConstraints;
}

/**
 * @public
 * <p>Describes the target resources of a specific type in your import template (for example, all
 *     <code>AWS::S3::Bucket</code> resources) and the properties you can provide during the import to identify resources
 *    of that type.</p>
 */
export interface ResourceIdentifierSummary {
  /**
   * @public
   * <p>The template resource type of the target resources, such as <code>AWS::S3::Bucket</code>.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The logical IDs of the target resources of the specified <code>ResourceType</code>, as defined in the import
   *    template.</p>
   */
  LogicalResourceIds?: string[];

  /**
   * @public
   * <p>The resource properties you can provide during the import to identify your target resources. For example,
   *     <code>BucketName</code> is a possible identifier property for <code>AWS::S3::Bucket</code> resources.</p>
   */
  ResourceIdentifiers?: string[];
}

/**
 * @public
 * <p>Contains any warnings returned by the <code>GetTemplateSummary</code> API action.</p>
 */
export interface Warnings {
  /**
   * @public
   * <p>A list of all of the unrecognized resource types. This is only returned if the
   *    <code>TemplateSummaryConfig</code> parameter has the <code>TreatUnrecognizedResourceTypesAsWarning</code>
   *    configuration set to <code>True</code>.</p>
   */
  UnrecognizedResourceTypes?: string[];
}

/**
 * @public
 * <p>The output for the <a>GetTemplateSummary</a> action.</p>
 */
export interface GetTemplateSummaryOutput {
  /**
   * @public
   * <p>A list of parameter declarations that describe various properties for each parameter.</p>
   */
  Parameters?: ParameterDeclaration[];

  /**
   * @public
   * <p>The value that's defined in the <code>Description</code> property of the template.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The capabilities found within the template. If your template contains IAM resources, you must
   *    specify the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> value for this parameter when you use
   *    the <a>CreateStack</a> or <a>UpdateStack</a> actions with your template; otherwise, those
   *    actions return an <code>InsufficientCapabilities</code> error.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM
   *     Resources in CloudFormation Templates</a>.</p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * @public
   * <p>The list of resources that generated the values in the <code>Capabilities</code> response element.</p>
   */
  CapabilitiesReason?: string;

  /**
   * @public
   * <p>A list of all the template resource types that are defined in the template, such as
   *     <code>AWS::EC2::Instance</code>, <code>AWS::Dynamo::Table</code>, and <code>Custom::MyCustomInstance</code>.</p>
   */
  ResourceTypes?: string[];

  /**
   * @public
   * <p>The Amazon Web Services template format version, which identifies the capabilities of the template.</p>
   */
  Version?: string;

  /**
   * @public
   * <p>The value that's defined for the <code>Metadata</code> property of the template.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>A list of the transforms that are declared in the template.</p>
   */
  DeclaredTransforms?: string[];

  /**
   * @public
   * <p>A list of resource identifier summaries that describe the target resources of an import operation and the
   *    properties you can provide during the import to identify the target resources. For example, <code>BucketName</code>
   *    is a possible identifier property for an <code>AWS::S3::Bucket</code> resource.</p>
   */
  ResourceIdentifierSummaries?: ResourceIdentifierSummary[];

  /**
   * @public
   * <p>An object containing any warnings returned.</p>
   */
  Warnings?: Warnings;
}

/**
 * @public
 */
export interface ImportStacksToStackSetInput {
  /**
   * @public
   * <p>The name of the stack set. The name must be unique in the Region where you create your stack set.</p>
   */
  StackSetName: string | undefined;

  /**
   * @public
   * <p>The IDs of the stacks you are importing into a stack set. You import up to 10 stacks per stack set at a
   *    time.</p>
   *          <p>Specify either <code>StackIds</code> or <code>StackIdsUrl</code>.</p>
   */
  StackIds?: string[];

  /**
   * @public
   * <p>The Amazon S3 URL which contains list of stack ids to be inputted.</p>
   *          <p>Specify either <code>StackIds</code> or <code>StackIdsUrl</code>.</p>
   */
  StackIdsUrl?: string;

  /**
   * @public
   * <p>The list of OU ID's to which the stacks being imported has to be mapped as deployment target.</p>
   */
  OrganizationalUnitIds?: string[];

  /**
   * @public
   * <p>The user-specified preferences for how CloudFormation performs a stack set operation.</p>
   *          <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation
   *     options</a>.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * @public
   * <p>A unique, user defined, identifier for the stack set operation.</p>
   */
  OperationId?: string;

  /**
   * @public
   * <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>For service managed stack sets, specify <code>DELEGATED_ADMIN</code>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

/**
 * @public
 */
export interface ImportStacksToStackSetOutput {
  /**
   * @public
   * <p>The unique identifier for the stack set operation.</p>
   */
  OperationId?: string;
}

/**
 * @public
 * <p>The specified stack ARN doesn't exist or stack doesn't exist corresponding to the ARN in input.</p>
 */
export class StackNotFoundException extends __BaseException {
  readonly name: "StackNotFoundException" = "StackNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StackNotFoundException, __BaseException>) {
    super({
      name: "StackNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StackNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The input for the <a>ListChangeSets</a> action.</p>
 */
export interface ListChangeSetsInput {
  /**
   * @public
   * <p>The name or the Amazon Resource Name (ARN) of the stack for which you want to list change sets.</p>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>A string (provided by the <a>ListChangeSets</a> response output) that identifies the next page of
   *    change sets that you want to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The output for the <a>ListChangeSets</a> action.</p>
 */
export interface ListChangeSetsOutput {
  /**
   * @public
   * <p>A list of <code>ChangeSetSummary</code> structures that provides the ID and status of each change set for the
   *    specified stack.</p>
   */
  Summaries?: ChangeSetSummary[];

  /**
   * @public
   * <p>If the output exceeds 1 MB, a string that identifies the next page of change sets. If there is no additional
   *    page, this value is <code>null</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListExportsInput {
  /**
   * @public
   * <p>A string (provided by the <a>ListExports</a> response output) that identifies the next page of
   *    exported output values that you asked to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The <code>Export</code> structure describes the exported output values for a stack.</p>
 */
export interface Export {
  /**
   * @public
   * <p>The stack that contains the exported output name and value.</p>
   */
  ExportingStackId?: string;

  /**
   * @public
   * <p>The name of exported output value. Use this name and the <code>Fn::ImportValue</code> function to import the
   *    associated value into other stacks. The name is defined in the <code>Export</code> field in the associated stack's
   *     <code>Outputs</code> section.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The value of the exported output, such as a resource physical ID. This value is defined in the
   *     <code>Export</code> field in the associated stack's <code>Outputs</code> section.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface ListExportsOutput {
  /**
   * @public
   * <p>The output for the <a>ListExports</a> action.</p>
   */
  Exports?: Export[];

  /**
   * @public
   * <p>If the output exceeds 100 exported output values, a string that identifies the next page of exports. If there is
   *    no additional page, this value is null.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListImportsInput {
  /**
   * @public
   * <p>The name of the exported output value. CloudFormation returns the stack names that are importing this
   *    value.</p>
   */
  ExportName: string | undefined;

  /**
   * @public
   * <p>A string (provided by the <a>ListImports</a> response output) that identifies the next page of stacks
   *    that are importing the specified exported output value.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListImportsOutput {
  /**
   * @public
   * <p>A list of stack names that are importing the specified exported output value.</p>
   */
  Imports?: string[];

  /**
   * @public
   * <p>A string that identifies the next page of exports. If there is no additional page, this value is null.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListStackInstanceResourceDriftsInput {
  /**
   * @public
   * <p>The name or unique ID of the stack set that you want to list drifted resources
   *       for.</p>
   */
  StackSetName: string | undefined;

  /**
   * @public
   * <p>If the previous paginated request didn't return all of the remaining results, the
   *       response object's <code>NextToken</code> parameter value is set to a token. To retrieve the
   *       next set of results, call this action again and assign that token to the request object's
   *       <code>NextToken</code> parameter. If there are no remaining results, the previous
   *       response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned with a single call. If the number of
   *       available results exceeds this maximum, the response includes a <code>NextToken</code>
   *       value that you can assign to the <code>NextToken</code> request parameter to get the next
   *       set of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The resource drift status of the stack instance. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The resource differs from its expected template
   *           configuration in that the resource has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFIED</code>: One or more resource properties differ from their expected
   *           template values.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The resource's actual configuration matches its expected
   *           template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation doesn't currently return this value.</p>
   *             </li>
   *          </ul>
   */
  StackInstanceResourceDriftStatuses?: (StackResourceDriftStatus | string)[];

  /**
   * @public
   * <p>The name of the Amazon Web Services account that you want to list resource drifts for.</p>
   */
  StackInstanceAccount: string | undefined;

  /**
   * @public
   * <p>The name of the Region where you want to list resource drifts.</p>
   */
  StackInstanceRegion: string | undefined;

  /**
   * @public
   * <p>The unique ID of the drift operation.</p>
   */
  OperationId: string | undefined;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account
   *       administrator in the organization's management account or as a delegated
   *       administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *           <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in
   *           the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

/**
 * @public
 * <p>The structure containing summary information about resource drifts for a stack
 *    instance.</p>
 */
export interface StackInstanceResourceDriftsSummary {
  /**
   * @public
   * <p>The ID of the stack instance.</p>
   */
  StackId: string | undefined;

  /**
   * @public
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * @public
   * <p>The name or unique identifier that corresponds to a physical instance ID of a resource
   *    supported by CloudFormation.</p>
   */
  PhysicalResourceId?: string;

  /**
   * @public
   * <p>Context information that enables CloudFormation to uniquely identify a resource. CloudFormation uses
   *    context key-value pairs in cases where a resource's logical and physical IDs aren't enough
   *    to uniquely identify that resource. Each context key-value pair specifies a unique resource
   *    that contains the targeted resource.</p>
   */
  PhysicalResourceIdContext?: PhysicalResourceIdContextKeyValuePair[];

  /**
   * @public
   * <p>Type of resource. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types Reference</a> in the CloudFormation User
   *    Guide.</p>
   */
  ResourceType: string | undefined;

  /**
   * @public
   * <p>Status of the actual configuration of the resource compared to its expected
   *    configuration. These will be present only for resources whose
   *    <code>StackInstanceResourceDriftStatus</code> is <code>MODIFIED</code>. </p>
   */
  PropertyDifferences?: PropertyDifference[];

  /**
   * @public
   * <p>The drift status of the resource in a stack instance.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The resource differs from its expected template
   *      configuration in that the resource has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFIED</code>: One or more resource properties differ from their expected
   *      template values.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The resource's actual configuration matches its expected
   *      template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation doesn't currently return this value.</p>
   *             </li>
   *          </ul>
   */
  StackResourceDriftStatus: StackResourceDriftStatus | string | undefined;

  /**
   * @public
   * <p>Time at which the stack instance drift detection operation was initiated.</p>
   */
  Timestamp: Date | undefined;
}

/**
 * @public
 */
export interface ListStackInstanceResourceDriftsOutput {
  /**
   * @public
   * <p>A list of <code>StackInstanceResourceDriftSummary</code> structures that contain
   *       information about the specified stack instances.</p>
   */
  Summaries?: StackInstanceResourceDriftsSummary[];

  /**
   * @public
   * <p>If the previous paginated request didn't return all of the remaining results, the
   *       response object's <code>NextToken</code> parameter value is set to a token. To retrieve the
   *       next set of results, call this action again and assign that token to the request object's
   *       <code>NextToken</code> parameter. If there are no remaining results, the previous
   *       response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const StackInstanceFilterName = {
  DETAILED_STATUS: "DETAILED_STATUS",
  DRIFT_STATUS: "DRIFT_STATUS",
  LAST_OPERATION_ID: "LAST_OPERATION_ID",
} as const;

/**
 * @public
 */
export type StackInstanceFilterName = (typeof StackInstanceFilterName)[keyof typeof StackInstanceFilterName];

/**
 * @public
 * <p>The filter to apply to stack instances</p>
 */
export interface StackInstanceFilter {
  /**
   * @public
   * <p>The type of filter to apply.</p>
   */
  Name?: StackInstanceFilterName | string;

  /**
   * @public
   * <p>The status to filter by.</p>
   */
  Values?: string;
}

/**
 * @public
 */
export interface ListStackInstancesInput {
  /**
   * @public
   * <p>The name or unique ID of the stack set that you want to list stack instances for.</p>
   */
  StackSetName: string | undefined;

  /**
   * @public
   * <p>If the previous request didn't return all the remaining results, the response's <code>NextToken</code> parameter
   *    value is set to a token. To retrieve the next set of results, call <code>ListStackInstances</code> again and assign
   *    that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous
   *    response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned with a single call. If the number of available results exceeds this
   *    maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code>
   *    request parameter to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The filter to apply to stack instances</p>
   */
  Filters?: StackInstanceFilter[];

  /**
   * @public
   * <p>The name of the Amazon Web Services account that you want to list stack instances for.</p>
   */
  StackInstanceAccount?: string;

  /**
   * @public
   * <p>The name of the Region where you want to list stack instances.</p>
   */
  StackInstanceRegion?: string;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *     management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *       administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

/**
 * @public
 * <p>The structure that contains summary information about a stack instance.</p>
 */
export interface StackInstanceSummary {
  /**
   * @public
   * <p>The name or unique ID of the stack set that the stack instance is associated with.</p>
   */
  StackSetId?: string;

  /**
   * @public
   * <p>The name of the Amazon Web Services Region that the stack instance is associated with.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>[Self-managed permissions] The name of the Amazon Web Services account that the stack instance is associated
   *    with.</p>
   */
  Account?: string;

  /**
   * @public
   * <p>The ID of the stack instance.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The status of the stack instance, in terms of its synchronization with its associated stack set.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INOPERABLE</code>: A <code>DeleteStackInstances</code> operation has failed and left the stack in an
   *      unstable state. Stacks in this state are excluded from further <code>UpdateStackSet</code> operations. You might
   *      need to perform a <code>DeleteStackInstances</code> operation, with <code>RetainStacks</code> set to
   *       <code>true</code>, to delete the stack instance, and then delete the stack manually.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTDATED</code>: The stack isn't currently up to date with the stack set because:</p>
   *                <ul>
   *                   <li>
   *                      <p>The associated stack failed during a <code>CreateStackSet</code> or <code>UpdateStackSet</code>
   *        operation.</p>
   *                   </li>
   *                   <li>
   *                      <p>The stack was part of a <code>CreateStackSet</code> or <code>UpdateStackSet</code> operation that failed or
   *        was stopped before the stack was created or updated.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CURRENT</code>: The stack is currently up to date with the stack set.</p>
   *             </li>
   *          </ul>
   */
  Status?: StackInstanceStatus | string;

  /**
   * @public
   * <p>The explanation for the specific status code assigned to this stack instance.</p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>The detailed status of the stack instance.</p>
   */
  StackInstanceStatus?: StackInstanceComprehensiveStatus;

  /**
   * @public
   * <p>[Service-managed permissions] The organization root ID or organizational unit (OU) IDs that you specified for
   *     <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html">DeploymentTargets</a>.</p>
   */
  OrganizationalUnitId?: string;

  /**
   * @public
   * <p>Status of the stack instance's actual configuration compared to the expected template and parameter
   *    configuration of the stack set to which it belongs.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The stack differs from the expected template and parameter configuration of the stack
   *      set to which it belongs. A stack instance is considered to have drifted if one or more of the resources in the
   *      associated stack have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation hasn't checked if the stack instance differs from its expected stack set
   *      configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The stack instance's actual configuration matches its expected stack set
   *      configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: This value is reserved for future use.</p>
   *             </li>
   *          </ul>
   */
  DriftStatus?: StackDriftStatus | string;

  /**
   * @public
   * <p>Most recent time when CloudFormation performed a drift detection operation on the stack instance. This
   *    value will be <code>NULL</code> for any stack instance on which drift detection hasn't yet been performed.</p>
   */
  LastDriftCheckTimestamp?: Date;

  /**
   * @public
   * <p>The last unique ID of a StackSet operation performed on a stack instance.</p>
   */
  LastOperationId?: string;
}

/**
 * @public
 */
export interface ListStackInstancesOutput {
  /**
   * @public
   * <p>A list of <code>StackInstanceSummary</code> structures that contain information about the specified stack
   *    instances.</p>
   */
  Summaries?: StackInstanceSummary[];

  /**
   * @public
   * <p>If the request doesn't return all the remaining results, <code>NextToken</code> is set to a token. To retrieve
   *    the next set of results, call <code>ListStackInstances</code> again and assign that token to the request object's
   *     <code>NextToken</code> parameter. If the request returns all results, <code>NextToken</code> is set to
   *     <code>null</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The input for the <a>ListStackResource</a> action.</p>
 */
export interface ListStackResourcesInput {
  /**
   * @public
   * <p>The name or the unique stack ID that is associated with the stack, which aren't always interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   *          <p>Default: There is no default value.</p>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>A string that identifies the next page of stack resources that you want to retrieve.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Summarizes information about whether the resource's actual configuration differs, or has
 *     <i>drifted</i>, from its expected configuration.</p>
 */
export interface StackResourceDriftInformationSummary {
  /**
   * @public
   * <p>Status of the resource's actual configuration compared to its expected configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The resource differs from its expected configuration in that it has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFIED</code>: The resource differs from its expected configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation hasn't checked if the resource differs from its expected configuration.</p>
   *                <p>Any resources that don't currently support drift detection have a status of <code>NOT_CHECKED</code>. For more
   *      information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift
   *       Detection</a>. If you performed an <a>ContinueUpdateRollback</a> operation on a stack, any
   *      resources included in <code>ResourcesToSkip</code> will also have a status of <code>NOT_CHECKED</code>. For more
   *      information about skipping resources during rollback operations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html">Continue Rolling
   *       Back an Update</a> in the CloudFormation User Guide.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The resource's actual configuration matches its expected configuration.</p>
   *             </li>
   *          </ul>
   */
  StackResourceDriftStatus: StackResourceDriftStatus | string | undefined;

  /**
   * @public
   * <p>When CloudFormation last checked if the resource had drifted from its expected configuration.</p>
   */
  LastCheckTimestamp?: Date;
}

/**
 * @public
 * <p>Contains high-level information about the specified stack resource.</p>
 */
export interface StackResourceSummary {
  /**
   * @public
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * @public
   * <p>The name or unique identifier that corresponds to a physical instance ID of the resource.</p>
   */
  PhysicalResourceId?: string;

  /**
   * @public
   * <p>Type of resource. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services Resource Types
   *     Reference</a> in the CloudFormation User Guide.)</p>
   */
  ResourceType: string | undefined;

  /**
   * @public
   * <p>Time the status was updated.</p>
   */
  LastUpdatedTimestamp: Date | undefined;

  /**
   * @public
   * <p>Current status of the resource.</p>
   */
  ResourceStatus: ResourceStatus | string | undefined;

  /**
   * @public
   * <p>Success/failure message associated with the resource.</p>
   */
  ResourceStatusReason?: string;

  /**
   * @public
   * <p>Information about whether the resource's actual configuration differs, or has <i>drifted</i>, from
   *    its expected configuration, as defined in the stack template and any values specified as template parameters. For
   *    more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: StackResourceDriftInformationSummary;

  /**
   * @public
   * <p>Contains information about the module from which the resource was created, if the resource was created from a
   *    module included in the stack template.</p>
   */
  ModuleInfo?: ModuleInfo;
}

/**
 * @public
 * <p>The output for a <a>ListStackResources</a> action.</p>
 */
export interface ListStackResourcesOutput {
  /**
   * @public
   * <p>A list of <code>StackResourceSummary</code> structures.</p>
   */
  StackResourceSummaries?: StackResourceSummary[];

  /**
   * @public
   * <p>If the output exceeds 1 MB, a string that identifies the next page of stack resources. If no additional page
   *    exists, this value is null.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The input for <a>ListStacks</a> action.</p>
 */
export interface ListStacksInput {
  /**
   * @public
   * <p>A string that identifies the next page of stacks that you want to retrieve.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Stack status to use as a filter. Specify one or more stack status codes to list only stacks with the specified
   *    status codes. For a complete list of stack status codes, see the <code>StackStatus</code> parameter of the <a>Stack</a> data type.</p>
   */
  StackStatusFilter?: (StackStatus | string)[];
}

/**
 * @public
 * <p>Contains information about whether the stack's actual configuration differs, or has
 *    <i>drifted</i>, from its expected configuration, as defined in the stack template and any values
 *    specified as template parameters. A stack is considered to have drifted if one or more of its resources have
 *    drifted.</p>
 */
export interface StackDriftInformationSummary {
  /**
   * @public
   * <p>Status of the stack's actual configuration compared to its expected template configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The stack differs from its expected template configuration. A stack is considered to
   *      have drifted if one or more of its resources have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation hasn't checked if the stack differs from its expected template
   *      configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The stack's actual configuration matches its expected template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: This value is reserved for future use.</p>
   *             </li>
   *          </ul>
   */
  StackDriftStatus: StackDriftStatus | string | undefined;

  /**
   * @public
   * <p>Most recent time when a drift detection operation was initiated on the stack, or any of its individual resources
   *    that support drift detection.</p>
   */
  LastCheckTimestamp?: Date;
}

/**
 * @public
 * <p>The StackSummary Data Type</p>
 */
export interface StackSummary {
  /**
   * @public
   * <p>Unique stack identifier.</p>
   */
  StackId?: string;

  /**
   * @public
   * <p>The name associated with the stack.</p>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>The template description of the template used to create the stack.</p>
   */
  TemplateDescription?: string;

  /**
   * @public
   * <p>The time the stack was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The time the stack was last updated. This field will only be returned if the stack has been updated at least
   *    once.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The time the stack was deleted.</p>
   */
  DeletionTime?: Date;

  /**
   * @public
   * <p>The current status of the stack.</p>
   */
  StackStatus: StackStatus | string | undefined;

  /**
   * @public
   * <p>Success/Failure message associated with the stack status.</p>
   */
  StackStatusReason?: string;

  /**
   * @public
   * <p>For nested stacks--stacks created as resources for another stack--the stack ID of the direct parent of this
   *    stack. For the first level of nested stacks, the root stack is also the parent stack.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Working with Nested Stacks</a> in the
   *    <i>CloudFormation User Guide</i>.</p>
   */
  ParentId?: string;

  /**
   * @public
   * <p>For nested stacks--stacks created as resources for another stack--the stack ID of the top-level stack to which
   *    the nested stack ultimately belongs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Working with Nested Stacks</a> in the
   *    <i>CloudFormation User Guide</i>.</p>
   */
  RootId?: string;

  /**
   * @public
   * <p>Summarizes information about whether a stack's actual configuration differs, or has
   *    <i>drifted</i>, from its expected configuration, as defined in the stack template and any values
   *    specified as template parameters. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to
   *    Stacks and Resources</a>.</p>
   */
  DriftInformation?: StackDriftInformationSummary;
}

/**
 * @public
 * <p>The output for <a>ListStacks</a> action.</p>
 */
export interface ListStacksOutput {
  /**
   * @public
   * <p>A list of <code>StackSummary</code> structures containing information about the specified stacks.</p>
   */
  StackSummaries?: StackSummary[];

  /**
   * @public
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of stacks. If no additional page
   *    exists, this value is null.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const OperationResultFilterName = {
  OPERATION_RESULT_STATUS: "OPERATION_RESULT_STATUS",
} as const;

/**
 * @public
 */
export type OperationResultFilterName = (typeof OperationResultFilterName)[keyof typeof OperationResultFilterName];

/**
 * @public
 * <p>The status that operation results are filtered by.</p>
 */
export interface OperationResultFilter {
  /**
   * @public
   * <p>The type of filter to apply.</p>
   */
  Name?: OperationResultFilterName | string;

  /**
   * @public
   * <p>The value to filter by.</p>
   */
  Values?: string;
}

/**
 * @public
 */
export interface ListStackSetOperationResultsInput {
  /**
   * @public
   * <p>The name or unique ID of the stack set that you want to get operation results for.</p>
   */
  StackSetName: string | undefined;

  /**
   * @public
   * <p>The ID of the stack set operation.</p>
   */
  OperationId: string | undefined;

  /**
   * @public
   * <p>If the previous request didn't return all the remaining results, the response object's <code>NextToken</code>
   *    parameter value is set to a token. To retrieve the next set of results, call
   *     <code>ListStackSetOperationResults</code> again and assign that token to the request object's <code>NextToken</code>
   *    parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set
   *    to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned with a single call. If the number of available results exceeds this
   *    maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code>
   *    request parameter to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *     management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *       administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;

  /**
   * @public
   * <p>The filter to apply to operation results.</p>
   */
  Filters?: OperationResultFilter[];
}

/**
 * @public
 * @enum
 */
export const StackSetOperationResultStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type StackSetOperationResultStatus =
  (typeof StackSetOperationResultStatus)[keyof typeof StackSetOperationResultStatus];

/**
 * @public
 * <p>The structure that contains information about a specified operation's results for a given account in a given
 *    Region.</p>
 */
export interface StackSetOperationResultSummary {
  /**
   * @public
   * <p>[Self-managed permissions] The name of the Amazon Web Services account for this operation result.</p>
   */
  Account?: string;

  /**
   * @public
   * <p>The name of the Amazon Web Services Region for this operation result.</p>
   */
  Region?: string;

  /**
   * @public
   * <p>The result status of the stack set operation for the given account in the given Region.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code>: The operation in the specified account and Region has been canceled. This is either
   *      because a user has stopped the stack set operation, or because the failure tolerance of the stack set operation has
   *      been exceeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation in the specified account and Region failed.</p>
   *                <p>If the stack set operation fails in enough accounts within a Region, the failure tolerance for the stack set
   *      operation as a whole might be exceeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>: The operation in the specified account and Region is currently in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: The operation in the specified account and Region has yet to start.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The operation in the specified account and Region completed successfully.</p>
   *             </li>
   *          </ul>
   */
  Status?: StackSetOperationResultStatus | string;

  /**
   * @public
   * <p>The reason for the assigned result status.</p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>The results of the account gate function CloudFormation invokes, if present, before proceeding with stack
   *    set operations in an account.</p>
   */
  AccountGateResult?: AccountGateResult;

  /**
   * @public
   * <p>[Service-managed permissions] The organization root ID or organizational unit (OU) IDs that you specified for
   *     <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html">DeploymentTargets</a>.</p>
   */
  OrganizationalUnitId?: string;
}

/**
 * @public
 */
export interface ListStackSetOperationResultsOutput {
  /**
   * @public
   * <p>A list of <code>StackSetOperationResultSummary</code> structures that contain information about the specified
   *    operation results, for accounts and Amazon Web Services Regions that are included in the operation.</p>
   */
  Summaries?: StackSetOperationResultSummary[];

  /**
   * @public
   * <p>If the request doesn't return all results, <code>NextToken</code> is set to a token. To retrieve the next set of
   *    results, call <code>ListOperationResults</code> again and assign that token to the request object's
   *     <code>NextToken</code> parameter. If there are no remaining results, <code>NextToken</code> is set to
   *     <code>null</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListStackSetOperationsInput {
  /**
   * @public
   * <p>The name or unique ID of the stack set that you want to get operation summaries for.</p>
   */
  StackSetName: string | undefined;

  /**
   * @public
   * <p>If the previous paginated request didn't return all of the remaining results, the response object's
   *     <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call
   *     <code>ListStackSetOperations</code> again and assign that token to the request object's <code>NextToken</code>
   *    parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set
   *    to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned with a single call. If the number of available results exceeds this
   *    maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code>
   *    request parameter to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *     management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *       administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

/**
 * @public
 * <p>The structures that contain summary information about the specified operation.</p>
 */
export interface StackSetOperationSummary {
  /**
   * @public
   * <p>The unique ID of the stack set operation.</p>
   */
  OperationId?: string;

  /**
   * @public
   * <p>The type of operation: <code>CREATE</code>, <code>UPDATE</code>, or <code>DELETE</code>. Create and delete
   *    operations affect only the specified stack instances that are associated with the specified stack set. Update
   *    operations affect both the stack set itself and <i>all</i> associated stack set instances.</p>
   */
  Action?: StackSetOperationAction | string;

  /**
   * @public
   * <p>The overall status of the operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation exceeded the specified failure tolerance. The failure tolerance value that
   *      you've set for an operation is applied for each Region during stack create and update operations. If the number of
   *      failed stacks within a Region exceeds the failure tolerance, the status of the operation in the Region is set to
   *       <code>FAILED</code>. This in turn sets the status of the operation as a whole to <code>FAILED</code>, and CloudFormation cancels the operation in any remaining Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUEUED</code>: [Service-managed permissions] For automatic deployments that require a sequence of
   *      operations, the operation is queued to be performed. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-status-codes">stack set operation status
   *       codes</a> in the CloudFormation User Guide.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>: The operation is currently being performed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code>: The user has canceled the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPING</code>: The operation is in the process of stopping, at user request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The operation completed creating or updating all the specified stacks without
   *      exceeding the failure tolerance for the operation.</p>
   *             </li>
   *          </ul>
   */
  Status?: StackSetOperationStatus | string;

  /**
   * @public
   * <p>The time at which the operation was initiated. Note that the creation times for the stack set operation might
   *    differ from the creation time of the individual stacks themselves. This is because CloudFormation needs to
   *    perform preparatory work for the operation, such as dispatching the work to the requested Regions, before actually
   *    creating the first stacks.</p>
   */
  CreationTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the stack set operation ended, across all accounts and Regions specified. Note that this
   *    doesn't necessarily mean that the stack set operation was successful, or even attempted, in each account or
   *    Region.</p>
   */
  EndTimestamp?: Date;

  /**
   * @public
   * <p>The status of the operation in details.</p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>Detailed information about the stack set operation.</p>
   */
  StatusDetails?: StackSetOperationStatusDetails;

  /**
   * @public
   * <p>The user-specified preferences for how CloudFormation performs a stack set operation.</p>
   *          <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation
   *     options</a>.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;
}

/**
 * @public
 */
export interface ListStackSetOperationsOutput {
  /**
   * @public
   * <p>A list of <code>StackSetOperationSummary</code> structures that contain summary information about operations for
   *    the specified stack set.</p>
   */
  Summaries?: StackSetOperationSummary[];

  /**
   * @public
   * <p>If the request doesn't return all results, <code>NextToken</code> is set to a token. To retrieve the next set of
   *    results, call <code>ListOperationResults</code> again and assign that token to the request object's
   *     <code>NextToken</code> parameter. If there are no remaining results, <code>NextToken</code> is set to
   *     <code>null</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListStackSetsInput {
  /**
   * @public
   * <p>If the previous paginated request didn't return all the remaining results, the response object's
   *     <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call
   *     <code>ListStackSets</code> again and assign that token to the request object's <code>NextToken</code> parameter. If
   *    there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to
   *     <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned with a single call. If the number of available results exceeds this
   *    maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code>
   *    request parameter to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The status of the stack sets that you want to get summary information about.</p>
   */
  Status?: StackSetStatus | string;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *       administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

/**
 * @public
 * <p>The structures that contain summary information about the specified stack set.</p>
 */
export interface StackSetSummary {
  /**
   * @public
   * <p>The name of the stack set.</p>
   */
  StackSetName?: string;

  /**
   * @public
   * <p>The ID of the stack set.</p>
   */
  StackSetId?: string;

  /**
   * @public
   * <p>A description of the stack set that you specify when the stack set is created or updated.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The status of the stack set.</p>
   */
  Status?: StackSetStatus | string;

  /**
   * @public
   * <p>[Service-managed permissions] Describes whether StackSets automatically deploys to Organizations
   *    accounts that are added to a target organizational unit (OU).</p>
   */
  AutoDeployment?: AutoDeployment;

  /**
   * @public
   * <p>Describes how the IAM roles required for stack set operations are created.</p>
   *          <ul>
   *             <li>
   *                <p>With <code>self-managed</code> permissions, you must create the administrator and execution roles required to
   *      deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant Self-Managed Stack Set
   *       Permissions</a>.</p>
   *             </li>
   *             <li>
   *                <p>With <code>service-managed</code> permissions, StackSets automatically creates the IAM roles
   *      required to deploy to accounts managed by Organizations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant
   *       Service-Managed Stack Set Permissions</a>.</p>
   *             </li>
   *          </ul>
   */
  PermissionModel?: PermissionModels | string;

  /**
   * @public
   * <p>Status of the stack set's actual configuration compared to its expected template and parameter configuration. A
   *    stack set is considered to have drifted if one or more of its stack instances have drifted from their expected
   *    template and parameter configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: One or more of the stack instances belonging to the stack set stack differs from the
   *      expected template and parameter configuration. A stack instance is considered to have drifted if one or more of the
   *      resources in the associated stack have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation hasn't checked the stack set for drift.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: All the stack instances belonging to the stack set stack match from the expected
   *      template and parameter configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: This value is reserved for future use.</p>
   *             </li>
   *          </ul>
   */
  DriftStatus?: StackDriftStatus | string;

  /**
   * @public
   * <p>Most recent time when CloudFormation performed a drift detection operation on the stack set. This value
   *    will be <code>NULL</code> for any stack set on which drift detection hasn't yet been performed.</p>
   */
  LastDriftCheckTimestamp?: Date;

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
export interface ListStackSetsOutput {
  /**
   * @public
   * <p>A list of <code>StackSetSummary</code> structures that contain information about the user's stack sets.</p>
   */
  Summaries?: StackSetSummary[];

  /**
   * @public
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is set to a token. To
   *    retrieve the next set of results, call <code>ListStackInstances</code> again and assign that token to the request
   *    object's <code>NextToken</code> parameter. If the request returns all results, <code>NextToken</code> is set to
   *     <code>null</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTypeRegistrationsInput {
  /**
   * @public
   * <p>The kind of extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
   */
  Type?: RegistryType | string;

  /**
   * @public
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
   */
  TypeArn?: string;

  /**
   * @public
   * <p>The current status of the extension registration request.</p>
   *          <p>The default is <code>IN_PROGRESS</code>.</p>
   */
  RegistrationStatusFilter?: RegistrationStatus | string;

  /**
   * @public
   * <p>The maximum number of results to be returned with a single call. If the number of available results exceeds this
   *    maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code>
   *    request parameter to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the previous paginated request didn't return all the remaining results, the response object's
   *     <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action
   *    again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining
   *    results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTypeRegistrationsOutput {
  /**
   * @public
   * <p>A list of extension registration tokens.</p>
   *          <p>Use <a>DescribeTypeRegistration</a> to return detailed information about a type registration
   *    request.</p>
   */
  RegistrationTokenList?: string[];

  /**
   * @public
   * <p>If the request doesn't return all the remaining results, <code>NextToken</code> is set to a token. To retrieve
   *    the next set of results, call this action again and assign that token to the request object's <code>NextToken</code>
   *    parameter. If the request returns all results, <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Filter criteria to use in determining which extensions to return.</p>
 */
export interface TypeFilters {
  /**
   * @public
   * <p>The category of extensions to return.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REGISTERED</code>: Private extensions that have been registered for this account and Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVATED</code>: Public extensions that have been activated for this account and Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>THIRD_PARTY</code>: Extensions available for use from publishers other than Amazon. This
   *      includes:</p>
   *                <ul>
   *                   <li>
   *                      <p>Private extensions registered in the account.</p>
   *                   </li>
   *                   <li>
   *                      <p>Public extensions from publishers other than Amazon, whether activated or not.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS_TYPES</code>: Extensions available for use from Amazon.</p>
   *             </li>
   *          </ul>
   */
  Category?: Category | string;

  /**
   * @public
   * <p>The id of the publisher of the extension.</p>
   *          <p>Extensions published by Amazon aren't assigned a publisher ID. Use the <code>AWS_TYPES</code> category to
   *    specify a list of types published by Amazon.</p>
   */
  PublisherId?: string;

  /**
   * @public
   * <p>A prefix to use as a filter for results.</p>
   */
  TypeNamePrefix?: string;
}

/**
 * @public
 */
export interface ListTypesInput {
  /**
   * @public
   * <p>The scope at which the extensions are visible and usable in CloudFormation operations.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PRIVATE</code>: Extensions that are visible and usable within this account and Region. This
   *      includes:</p>
   *                <ul>
   *                   <li>
   *                      <p>Private extensions you have registered in this account and Region.</p>
   *                   </li>
   *                   <li>
   *                      <p>Public extensions that you have activated in this account and Region.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUBLIC</code>: Extensions that are publicly visible and available to be activated within any Amazon Web Services account. This includes extensions from Amazon Web Services, in addition to third-party
   *      publishers.</p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>PRIVATE</code>.</p>
   */
  Visibility?: Visibility | string;

  /**
   * @public
   * <p>For resource types, the provisioning behavior of the resource type. CloudFormation determines the provisioning type
   *    during registration, based on the types of handlers in the schema handler package submitted.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FULLY_MUTABLE</code>: The resource type includes an update handler to process updates to the type during
   *      stack update operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMMUTABLE</code>: The resource type doesn't include an update handler, so the type can't be updated and
   *      must instead be replaced during stack update operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_PROVISIONABLE</code>: The resource type doesn't include create, read, and delete handlers, and
   *      therefore can't actually be provisioned.</p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>FULLY_MUTABLE</code>.</p>
   */
  ProvisioningType?: ProvisioningType | string;

  /**
   * @public
   * <p>The deprecation status of the extension that you want to get summary information about.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LIVE</code>: The extension is registered for use in CloudFormation operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPRECATED</code>: The extension has been deregistered and can no longer be used in CloudFormation operations.</p>
   *             </li>
   *          </ul>
   */
  DeprecatedStatus?: DeprecatedStatus | string;

  /**
   * @public
   * <p>The type of extension.</p>
   */
  Type?: RegistryType | string;

  /**
   * @public
   * <p>Filter criteria to use in determining which extensions to return.</p>
   *          <p>Filters must be compatible with <code>Visibility</code> to return valid results. For example, specifying
   *     <code>AWS_TYPES</code> for <code>Category</code> and <code>PRIVATE</code> for <code>Visibility</code> returns an
   *    empty list of types, but specifying <code>PUBLIC</code> for <code>Visibility</code> returns the desired list.</p>
   */
  Filters?: TypeFilters;

  /**
   * @public
   * <p>The maximum number of results to be returned with a single call. If the number of available results exceeds this
   *    maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code>
   *    request parameter to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the previous paginated request didn't return all the remaining results, the response object's
   *     <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action
   *    again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining
   *    results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains summary information about the specified CloudFormation extension.</p>
 */
export interface TypeSummary {
  /**
   * @public
   * <p>The kind of extension.</p>
   */
  Type?: RegistryType | string;

  /**
   * @public
   * <p>The name of the extension.</p>
   *          <p>If you specified a <code>TypeNameAlias</code> when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">activate this extension</a> in your account
   *    and Region, CloudFormation considers that alias as the type name.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The ID of the default version of the extension. The default version is used when the extension version isn't
   *    specified.</p>
   *          <p>This applies only to private extensions you have registered in your account. For public extensions, both those
   *    provided by Amazon and published by third parties, CloudFormation returns <code>null</code>. For more
   *    information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   *          <p>To set the default version of an extension, use <a>SetTypeDefaultVersion</a>.</p>
   */
  DefaultVersionId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   */
  TypeArn?: string;

  /**
   * @public
   * <p>When the specified extension version was registered. This applies only to:</p>
   *          <ul>
   *             <li>
   *                <p>Private extensions you have registered in your account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   *             </li>
   *             <li>
   *                <p>Public extensions you have activated in your account with auto-update specified. For more information, see
   *       <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">ActivateType</a>.</p>
   *             </li>
   *          </ul>
   *          <p>For all other extension types, CloudFormation returns <code>null</code>.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>The description of the extension.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ID of the extension publisher, if the extension is published by a third party. Extensions published by
   *    Amazon don't return a publisher ID.</p>
   */
  PublisherId?: string;

  /**
   * @public
   * <p>For public extensions that have been activated for this account and Region, the type name of the public
   *    extension.</p>
   *          <p>If you specified a <code>TypeNameAlias</code> when enabling the extension in this account and Region, CloudFormation treats that alias as the extension's type name within the account and Region, not the type name of
   *    the public extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-alias">Specifying aliases to
   *     refer to extensions</a> in the <i>CloudFormation User Guide</i>.</p>
   */
  OriginalTypeName?: string;

  /**
   * @public
   * <p>For public extensions that have been activated for this account and Region, the version of the public extension
   *    to be used for CloudFormation operations in this account and Region.</p>
   *          <p>How you specified <code>AutoUpdate</code> when enabling the extension affects whether CloudFormation
   *    automatically updates the extension in this account and Region when a new version is released. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-auto">Setting CloudFormation to automatically use new versions of extensions</a> in the
   *     <i>CloudFormation User Guide</i>.</p>
   */
  PublicVersionNumber?: string;

  /**
   * @public
   * <p>For public extensions that have been activated for this account and Region, the latest version of the public
   *    extension <i>that is available</i>. For any extensions other than activated third-arty extensions,
   *     CloudFormation returns <code>null</code>.</p>
   *          <p>How you specified <code>AutoUpdate</code> when enabling the extension affects whether CloudFormation
   *    automatically updates the extension in this account and Region when a new version is released. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-auto">Setting CloudFormation to automatically use new versions of extensions</a> in the
   *     <i>CloudFormation User Guide</i>.</p>
   */
  LatestPublicVersion?: string;

  /**
   * @public
   * <p>The service used to verify the publisher identity.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Registering your account to publish CloudFormation extensions</a> in the <i> CFN-CLI User Guide for Extension
   *    Development</i>.</p>
   */
  PublisherIdentity?: IdentityProvider | string;

  /**
   * @public
   * <p>The publisher name, as defined in the public profile for that publisher in the service used to verify the
   *    publisher identity.</p>
   */
  PublisherName?: string;

  /**
   * @public
   * <p>Whether the extension is activated for this account and Region.</p>
   *          <p>This applies only to third-party public extensions. Extensions published by Amazon are activated by
   *    default.</p>
   */
  IsActivated?: boolean;
}

/**
 * @public
 */
export interface ListTypesOutput {
  /**
   * @public
   * <p>A list of <code>TypeSummary</code> structures that contain information about the specified extensions.</p>
   */
  TypeSummaries?: TypeSummary[];

  /**
   * @public
   * <p>If the request doesn't return all the remaining results, <code>NextToken</code> is set to a token. To retrieve
   *    the next set of results, call this action again and assign that token to the request object's <code>NextToken</code>
   *    parameter. If the request returns all results, <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTypeVersionsInput {
  /**
   * @public
   * <p>The kind of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
   */
  Type?: RegistryType | string;

  /**
   * @public
   * <p>The name of the extension for which you want version summary information.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the extension for which you want version summary information.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The maximum number of results to be returned with a single call. If the number of available results exceeds this
   *    maximum, the response includes a <code>NextToken</code> value that you can assign to the <code>NextToken</code>
   *    request parameter to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>If the previous paginated request didn't return all of the remaining results, the response object's
   *     <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action
   *    again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining
   *    results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The deprecation status of the extension versions that you want to get summary information about.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LIVE</code>: The extension version is registered and can be used in CloudFormation operations,
   *      dependent on its provisioning behavior and visibility scope.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPRECATED</code>: The extension version has been deregistered and can no longer be used in CloudFormation operations.</p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>LIVE</code>.</p>
   */
  DeprecatedStatus?: DeprecatedStatus | string;

  /**
   * @public
   * <p>The publisher ID of the extension publisher.</p>
   *          <p>Extensions published by Amazon aren't assigned a publisher ID.</p>
   */
  PublisherId?: string;
}

/**
 * @public
 * <p>Contains summary information about a specific version of a CloudFormation extension.</p>
 */
export interface TypeVersionSummary {
  /**
   * @public
   * <p>The kind of extension.</p>
   */
  Type?: RegistryType | string;

  /**
   * @public
   * <p>The name of the extension.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource
   *    Name (ARN) assigned to the extension version when it's registered.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>Whether the specified extension version is set as the default version.</p>
   *          <p>This applies only to private extensions you have registered in your account, and extensions published by Amazon.
   *    For public third-party extensions, CloudFormation returns <code>null</code>.</p>
   */
  IsDefaultVersion?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the extension version.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>When the version was registered.</p>
   */
  TimeCreated?: Date;

  /**
   * @public
   * <p>The description of the extension version.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>For public extensions that have been activated for this account and Region, the version of the public extension
   *    to be used for CloudFormation operations in this account and Region. For any extensions other than activated
   *    third-arty extensions, CloudFormation returns <code>null</code>.</p>
   *          <p>How you specified <code>AutoUpdate</code> when enabling the extension affects whether CloudFormation
   *    automatically updates the extension in this account and Region when a new version is released. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-auto">Setting CloudFormation to automatically use new versions of extensions</a> in the
   *     <i>CloudFormation User Guide</i>.</p>
   */
  PublicVersionNumber?: string;
}

/**
 * @public
 */
export interface ListTypeVersionsOutput {
  /**
   * @public
   * <p>A list of <code>TypeVersionSummary</code> structures that contain information about the specified extension's
   *    versions.</p>
   */
  TypeVersionSummaries?: TypeVersionSummary[];

  /**
   * @public
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is set to a token. To
   *    retrieve the next set of results, call this action again and assign that token to the request object's
   *     <code>NextToken</code> parameter. If the request returns all results, <code>NextToken</code> is set to
   *     <code>null</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PublishTypeInput {
  /**
   * @public
   * <p>The type of the extension.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
   */
  Type?: ThirdPartyType | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The version number to assign to this version of the extension.</p>
   *          <p>Use the following format, and adhere to semantic versioning when assigning a version number to your
   *    extension:</p>
   *          <p>
   *             <code>MAJOR.MINOR.PATCH</code>
   *          </p>
   *          <p>For more information, see <a href="https://semver.org/">Semantic Versioning 2.0.0</a>.</p>
   *          <p>If you don't specify a version number, CloudFormation increments the version number by one minor
   *    version release.</p>
   *          <p>You cannot specify a version number the first time you publish a type. CloudFormation automatically sets the first
   *    version number to be <code>1.0.0</code>.</p>
   */
  PublicVersionNumber?: string;
}

/**
 * @public
 */
export interface PublishTypeOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) assigned to the public extension upon publication.</p>
   */
  PublicTypeArn?: string;
}

/**
 * @public
 * <p>Error reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
 *     CloudFormation doesn't return this error to users.</p>
 */
export class InvalidStateTransitionException extends __BaseException {
  readonly name: "InvalidStateTransitionException" = "InvalidStateTransitionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateTransitionException, __BaseException>) {
    super({
      name: "InvalidStateTransitionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateTransitionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Error reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
 *     CloudFormation doesn't return this error to users.</p>
 */
export class OperationStatusCheckFailedException extends __BaseException {
  readonly name: "OperationStatusCheckFailedException" = "OperationStatusCheckFailedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationStatusCheckFailedException, __BaseException>) {
    super({
      name: "OperationStatusCheckFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationStatusCheckFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const OperationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];

/**
 * @public
 * @enum
 */
export const HandlerErrorCode = {
  AccessDenied: "AccessDenied",
  AlreadyExists: "AlreadyExists",
  GeneralServiceException: "GeneralServiceException",
  HandlerInternalFailure: "HandlerInternalFailure",
  InternalFailure: "InternalFailure",
  InvalidCredentials: "InvalidCredentials",
  InvalidRequest: "InvalidRequest",
  InvalidTypeConfiguration: "InvalidTypeConfiguration",
  NetworkFailure: "NetworkFailure",
  NonCompliant: "NonCompliant",
  NotFound: "NotFound",
  NotUpdatable: "NotUpdatable",
  ResourceConflict: "ResourceConflict",
  ServiceInternalError: "ServiceInternalError",
  ServiceLimitExceeded: "ServiceLimitExceeded",
  ServiceTimeout: "NotStabilized",
  Throttling: "Throttling",
  Unknown: "Unknown",
  UnsupportedTarget: "UnsupportedTarget",
} as const;

/**
 * @public
 */
export type HandlerErrorCode = (typeof HandlerErrorCode)[keyof typeof HandlerErrorCode];

/**
 * @public
 */
export interface RecordHandlerProgressInput {
  /**
   * @public
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation
   *    CLI</a>.</p>
   */
  BearerToken: string | undefined;

  /**
   * @public
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation
   *    CLI</a>.</p>
   */
  OperationStatus: OperationStatus | string | undefined;

  /**
   * @public
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation
   *    CLI</a>.</p>
   */
  CurrentOperationStatus?: OperationStatus | string;

  /**
   * @public
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation
   *    CLI</a>.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation
   *    CLI</a>.</p>
   */
  ErrorCode?: HandlerErrorCode | string;

  /**
   * @public
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation
   *    CLI</a>.</p>
   */
  ResourceModel?: string;

  /**
   * @public
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation
   *    CLI</a>.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface RecordHandlerProgressOutput {}

/**
 * @public
 */
export interface RegisterPublisherInput {
  /**
   * @public
   * <p>Whether you accept the <a href="https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf">Terms and Conditions</a> for publishing extensions in the CloudFormation registry. You must accept the
   *    terms and conditions in order to register to publish public extensions to the CloudFormation
   *    registry.</p>
   *          <p>The default is <code>false</code>.</p>
   */
  AcceptTermsAndConditions?: boolean;

  /**
   * @public
   * <p>If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for
   *    your connection to that account.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Registering your account
   *     to publish CloudFormation extensions</a> in the <i>CloudFormation CLI User
   *     Guide</i>.</p>
   */
  ConnectionArn?: string;
}

/**
 * @public
 */
export interface RegisterPublisherOutput {
  /**
   * @public
   * <p>The ID assigned this account by CloudFormation for publishing extensions.</p>
   */
  PublisherId?: string;
}

/**
 * @public
 */
export interface RegisterTypeInput {
  /**
   * @public
   * <p>The kind of extension.</p>
   */
  Type?: RegistryType | string;

  /**
   * @public
   * <p>The name of the extension being registered.</p>
   *          <p>We suggest that extension names adhere to the following patterns:</p>
   *          <ul>
   *             <li>
   *                <p>For resource types,
   *       <i>company_or_organization</i>::<i>service</i>::<i>type</i>.</p>
   *             </li>
   *             <li>
   *                <p>For modules,
   *       <i>company_or_organization</i>::<i>service</i>::<i>type</i>::MODULE.</p>
   *             </li>
   *             <li>
   *                <p>For hooks,
   *      <i>MyCompany</i>::<i>Testing</i>::<i>MyTestHook</i>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The following organization namespaces are reserved and can't be used in your extension names:</p>
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

  /**
   * @public
   * <p>A URL to the S3 bucket containing the extension project package that contains the necessary files for the
   *    extension you want to register.</p>
   *          <p>For information about generating a schema handler package for the extension you want to register, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-cli-submit.html">submit</a> in the
   *      <i>CloudFormation CLI User Guide</i>.</p>
   *          <note>
   *             <p>The user registering the extension must be able to access the package in the S3 bucket. That's, the user needs
   *     to have <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> permissions for
   *     the schema handler package. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html">Actions, Resources, and Condition Keys for Amazon S3</a>
   *     in the <i>Identity and Access Management User Guide</i>.</p>
   *          </note>
   */
  SchemaHandlerPackage: string | undefined;

  /**
   * @public
   * <p>Specifies logging configuration information for an extension.</p>
   */
  LoggingConfig?: LoggingConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role for CloudFormation to assume when
   *    invoking the extension.</p>
   *          <p>For CloudFormation to assume the specified execution role, the role must contain a trust relationship
   *    with the CloudFormation service principle (<code>resources.cloudformation.amazonaws.com</code>). For more
   *    information about adding trust relationships, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-managingrole-editing-console.html#roles-managingrole_edit-trust-policy">Modifying a
   *     role trust policy</a> in the <i>Identity and Access Management User Guide</i>.</p>
   *          <p>If your extension calls Amazon Web Services APIs in any of its handlers, you must create an <i>
   *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM execution role</a>
   *             </i>
   *    that includes the necessary permissions to call those Amazon Web Services APIs, and provision that execution role in
   *    your account. When CloudFormation needs to invoke the resource type handler, CloudFormation assumes this
   *    execution role to create a temporary session token, which it then passes to the resource type handler, thereby
   *    supplying your resource type with the appropriate credentials.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * @public
   * <p>A unique identifier that acts as an idempotency key for this registration request. Specifying a client request
   *    token prevents CloudFormation from generating more than one version of an extension from the same
   *    registration request, even if the request is submitted multiple times.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface RegisterTypeOutput {
  /**
   * @public
   * <p>The identifier for this registration request.</p>
   *          <p>Use this registration token when calling <a>DescribeTypeRegistration</a>, which returns information
   *    about the status and IDs of the extension registration.</p>
   */
  RegistrationToken?: string;
}

/**
 * @public
 */
export interface RollbackStackInput {
  /**
   * @public
   * <p>The name that's associated with the stack.</p>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management role that CloudFormation assumes to rollback the
   *    stack.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>A unique identifier for this <code>RollbackStack</code> request.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>This deletion policy deletes newly created resources, but retains existing resources, when a stack operation is
   *     rolled back. This ensures new, empty, and unused resources are deleted, while critical resources and their data are
   *     retained. <code>RetainExceptOnCreate</code> can be specified for any resource that supports the
   *     <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html">
   *     DeletionPolicy</a> attribute.</p>
   */
  RetainExceptOnCreate?: boolean;
}

/**
 * @public
 */
export interface RollbackStackOutput {
  /**
   * @public
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;
}

/**
 * @public
 * <p>The input for the <a>SetStackPolicy</a> action.</p>
 */
export interface SetStackPolicyInput {
  /**
   * @public
   * <p>The name or unique stack ID that you want to associate a policy with.</p>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>Structure containing the stack policy body. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent updates to stack resources</a> in
   *    the CloudFormation User Guide. You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code>
   *    parameter, but not both.</p>
   */
  StackPolicyBody?: string;

  /**
   * @public
   * <p>Location of a file containing the stack policy. The URL must point to a policy (maximum size: 16 KB) located in
   *    an Amazon S3 bucket in the same Amazon Web Services Region as the stack. You can specify either the
   *     <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not both.</p>
   */
  StackPolicyURL?: string;
}

/**
 * @public
 */
export interface SetTypeConfigurationInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the extension, in this account and Region.</p>
   *          <p>For public extensions, this will be the ARN assigned when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">activate the type</a> in this account and
   *    Region. For private extensions, this will be the ARN assigned when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">register the type</a> in this account and
   *    Region.</p>
   *          <p>Do not include the extension versions suffix at the end of the ARN. You can set the configuration for an
   *    extension, but not for a specific extension version.</p>
   */
  TypeArn?: string;

  /**
   * @public
   * <p>The configuration data for the extension, in this account and Region.</p>
   *          <p>The configuration data must be formatted as JSON, and validate against the schema returned in the
   *     <code>ConfigurationSchema</code> response element of <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>. For more information, see
   *     <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-model.html#resource-type-howto-configuration">Defining
   *     account-level configuration data for an extension</a> in the <i>CloudFormation CLI User
   *     Guide</i>.</p>
   */
  Configuration: string | undefined;

  /**
   * @public
   * <p>An alias by which to refer to this extension configuration data.</p>
   *          <p>Conditional: Specifying a configuration alias is required when setting a configuration for a resource type
   *    extension.</p>
   */
  ConfigurationAlias?: string;

  /**
   * @public
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify <code>ConfigurationArn</code>, or <code>Type</code> and
   *    <code>TypeName</code>.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The type of extension.</p>
   *          <p>Conditional: You must specify <code>ConfigurationArn</code>, or <code>Type</code> and
   *    <code>TypeName</code>.</p>
   */
  Type?: ThirdPartyType | string;
}

/**
 * @public
 */
export interface SetTypeConfigurationOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the configuration data, in this account and Region.</p>
   *          <p>Conditional: You must specify <code>ConfigurationArn</code>, or <code>Type</code> and
   *    <code>TypeName</code>.</p>
   */
  ConfigurationArn?: string;
}

/**
 * @public
 */
export interface SetTypeDefaultVersionInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the extension for which you want version summary information.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The kind of extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
   */
  Type?: RegistryType | string;

  /**
   * @public
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
   */
  TypeName?: string;

  /**
   * @public
   * <p>The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource
   *    Name (ARN) assigned to the extension version when it is registered.</p>
   */
  VersionId?: string;
}

/**
 * @public
 */
export interface SetTypeDefaultVersionOutput {}

/**
 * @public
 * @enum
 */
export const ResourceSignalStatus = {
  FAILURE: "FAILURE",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type ResourceSignalStatus = (typeof ResourceSignalStatus)[keyof typeof ResourceSignalStatus];

/**
 * @public
 * <p>The input for the <a>SignalResource</a> action.</p>
 */
export interface SignalResourceInput {
  /**
   * @public
   * <p>The stack name or unique stack ID that includes the resource that you want to signal.</p>
   */
  StackName: string | undefined;

  /**
   * @public
   * <p>The logical ID of the resource that you want to signal. The logical ID is the name of the resource that given in
   *    the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * @public
   * <p>A unique ID of the signal. When you signal Amazon EC2 instances or Auto Scaling groups, specify the
   *    instance ID that you are signaling as the unique ID. If you send multiple signals to a single resource (such as
   *    signaling a wait condition), each signal requires a different unique ID.</p>
   */
  UniqueId: string | undefined;

  /**
   * @public
   * <p>The status of the signal, which is either success or failure. A failure signal causes CloudFormation to
   *    immediately fail the stack creation or update.</p>
   */
  Status: ResourceSignalStatus | string | undefined;
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
   *     management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *       administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
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
  Type?: ThirdPartyType | string;

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
   *          <p>If you don't specify a version, CloudFormation uses the default version of the extension in this
   *    account and Region for testing.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>The S3 bucket to which CloudFormation delivers the contract test execution logs.</p>
   *          <p>CloudFormation delivers the logs by the time contract testing has completed and the extension has been
   *    assigned a test type status of <code>PASSED</code> or <code>FAILED</code>.</p>
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
   *    CloudFormation User Guide.)</p>
   *          <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>,
   *     <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>
   */
  TemplateBody?: string;

  /**
   * @public
   * <p>Location of file containing the template body. The URL must point to a template that's located in an Amazon S3 bucket or a Systems Manager document. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the
   *    CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>,
   *     <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>
   */
  TemplateURL?: string;

  /**
   * @public
   * <p>Reuse the existing template that is associated with the stack that you are updating.</p>
   *          <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code>,
   *     <code>TemplateURL</code>, or set the <code>UsePreviousTemplate</code> to <code>true</code>.</p>
   */
  UsePreviousTemplate?: boolean;

  /**
   * @public
   * <p>Structure containing the temporary overriding stack policy body. You can specify either the
   *     <code>StackPolicyDuringUpdateBody</code> or the <code>StackPolicyDuringUpdateURL</code> parameter, but not
   *    both.</p>
   *          <p>If you want to update protected resources, specify a temporary overriding stack policy during this update. If
   *    you don't specify a stack policy, the current policy that is associated with the stack will be used.</p>
   */
  StackPolicyDuringUpdateBody?: string;

  /**
   * @public
   * <p>Location of a file containing the temporary overriding stack policy. The URL must point to a policy (max size:
   *    16KB) located in an S3 bucket in the same Region as the stack. You can specify either the
   *     <code>StackPolicyDuringUpdateBody</code> or the <code>StackPolicyDuringUpdateURL</code> parameter, but not
   *    both.</p>
   *          <p>If you want to update protected resources, specify a temporary overriding stack policy during this update. If
   *    you don't specify a stack policy, the current policy that is associated with the stack will be used.</p>
   */
  StackPolicyDuringUpdateURL?: string;

  /**
   * @public
   * <p>A list of <code>Parameter</code> structures that specify input parameters for the stack. For more information,
   *    see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a>
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
   *      for example, by creating new Identity and Access Management (IAM) users. For those stacks, you must
   *      explicitly acknowledge this by specifying one of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or
   *       <code>CAPABILITY_NAMED_IAM</code> capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i> specify
   *         <code>CAPABILITY_NAMED_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
   *         <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we suggest that you review all permissions associated with
   *      them and edit their permissions if necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html">
   *         AWS::IAM::AccessKey</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">
   *         AWS::IAM::Group</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html">
   *         AWS::IAM::Policy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">
   *         AWS::IAM::Role</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html">
   *         AWS::IAM::User</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">AWS::IAM::UserToGroupAddition</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM
   *      Resources in CloudFormation Templates</a>.</p>
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
   *      set, you must acknowledge this capability. This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which
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
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using CloudFormation Macros to Perform Custom
   *      Processing on Templates</a>.</p>
   *             </li>
   *          </ul>
   */
  Capabilities?: (Capability | string)[];

  /**
   * @public
   * <p>The template resource types that you have permissions to work with for this update stack action, such as
   *     <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or <code>Custom::MyCustomInstance</code>.</p>
   *          <p>If the list of resource types doesn't include a resource that you're updating, the stack update fails. By
   *    default, CloudFormation grants permissions to all resource types. Identity and Access Management (IAM)
   *    uses this parameter for CloudFormation-specific condition keys in IAM policies. For more
   *    information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with Identity and Access Management</a>.</p>
   */
  ResourceTypes?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that CloudFormation assumes to update the stack. CloudFormation uses the role's credentials to make calls on your behalf.
   *     CloudFormation always uses this role for all future operations on the stack. Provided that users have
   *    permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to
   *    pass it. Ensure that the role grants least privilege.</p>
   *          <p>If you don't specify a value, CloudFormation uses the role that was previously associated with the
   *    stack. If no role is available, CloudFormation uses a temporary session that is generated from your user
   *    credentials.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and
   *    for the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

  /**
   * @public
   * <p>Structure containing a new stack policy body. You can specify either the <code>StackPolicyBody</code> or the
   *     <code>StackPolicyURL</code> parameter, but not both.</p>
   *          <p>You might update the stack policy, for example, in order to protect a new resource that you created during a
   *    stack update. If you don't specify a stack policy, the current policy that is associated with the stack is
   *    unchanged.</p>
   */
  StackPolicyBody?: string;

  /**
   * @public
   * <p>Location of a file containing the updated stack policy. The URL must point to a policy (max size: 16KB) located
   *    in an S3 bucket in the same Region as the stack. You can specify either the <code>StackPolicyBody</code> or the
   *     <code>StackPolicyURL</code> parameter, but not both.</p>
   *          <p>You might update the stack policy, for example, in order to protect a new resource that you created during a
   *    stack update. If you don't specify a stack policy, the current policy that is associated with the stack is
   *    unchanged.</p>
   */
  StackPolicyURL?: string;

  /**
   * @public
   * <p>Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that CloudFormation associates
   *    with the stack. Specify an empty list to remove all notification topics.</p>
   */
  NotificationARNs?: string[];

  /**
   * @public
   * <p>Key-value pairs to associate with this stack. CloudFormation also propagates these tags to supported
   *    resources in the stack. You can specify a maximum number of 50 tags.</p>
   *          <p>If you don't specify this parameter, CloudFormation doesn't modify the stack's tags. If you specify an
   *    empty value, CloudFormation removes all associated tags.</p>
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
   *     <code>UpdateStack</code> requests to ensure that CloudFormation successfully received them.</p>
   *          <p>All events triggered by a given stack operation are assigned the same client request token, which you can use to
   *    track operations. For example, if you execute a <code>CreateStack</code> operation with the token
   *    <code>token1</code>, then all the <code>StackEvents</code> generated by that operation will have
   *     <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab. Stack operations that are
   *    initiated from the console use the token format <i>Console-StackOperation-ID</i>, which helps you
   *    easily identify the stack operation . For example, if you create a stack using the console, each stack event would be
   *    assigned the same token in the following format:
   *     <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>This deletion policy deletes newly created resources, but retains existing resources, when a stack operation is
   *   rolled back. This ensures new, empty, and unused resources are deleted, while critical resources and their data are
   *   retained. <code>RetainExceptOnCreate</code> can be specified for any resource that supports the
   *   <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html">
   *   DeletionPolicy</a> attribute.</p>
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
   *     Amazon Web Services Regions.</p>
   */
  Regions: string[] | undefined;

  /**
   * @public
   * <p>A list of input parameters whose values you want to update for the specified stack instances.</p>
   *          <p>Any overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions. When specifying parameters and their values, be aware of how CloudFormation sets
   *    parameter values during stack instance update operations:</p>
   *          <ul>
   *             <li>
   *                <p>To override the current value for a parameter, include the parameter and specify its value.</p>
   *             </li>
   *             <li>
   *                <p>To leave an overridden parameter set to its present value, include the parameter and specify
   *       <code>UsePreviousValue</code> as <code>true</code>. (You can't specify both a value and set
   *       <code>UsePreviousValue</code> to <code>true</code>.)</p>
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
   *    to a template, before you can override the parameter value specified in the stack set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to
   *    update all stack instances with the updated template and parameter value specified in the stack set. Once a stack
   *    instance has been updated with the new parameter, you can then override the parameter value using
   *     <code>UpdateStackInstances</code>.</p>
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
   *          <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the
   *    stack set operation only once, even if you retry the request multiple times. You might retry stack set operation
   *    requests to ensure that CloudFormation successfully received them.</p>
   *          <p>If you don't specify an operation ID, the SDK generates one automatically.</p>
   */
  OperationId?: string;

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *     management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *       administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
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
   *     <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true.</p>
   */
  TemplateBody?: string;

  /**
   * @public
   * <p>The location of the file that contains the template body. The URL must point to a template (maximum size:
   *    460,800 bytes) that is located in an Amazon S3 bucket or a Systems Manager document. For more information,
   *    see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template
   *     Anatomy</a> in the CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or
   *     <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true.</p>
   */
  TemplateURL?: string;

  /**
   * @public
   * <p>Use the existing template that's associated with the stack set that you're updating.</p>
   *          <p>Conditional: You must specify only one of the following parameters: <code>TemplateBody</code> or
   *     <code>TemplateURL</code>—or set <code>UsePreviousTemplate</code> to true.</p>
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
   *      for example, by creating new Identity and Access Management (IAM) users. For those stacks sets, you must
   *      explicitly acknowledge this by specifying one of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the <code>CAPABILITY_IAM</code> or
   *       <code>CAPABILITY_NAMED_IAM</code> capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i> specify
   *         <code>CAPABILITY_NAMED_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
   *         <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we recommend that you review all permissions associated with
   *      them and edit their permissions if necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-accesskey.html">
   *         AWS::IAM::AccessKey</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-group.html">
   *         AWS::IAM::Group</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html">
   *         AWS::IAM::InstanceProfile</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-policy.html">
   *         AWS::IAM::Policy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html">
   *         AWS::IAM::Role</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-user.html">
   *         AWS::IAM::User</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iam-addusertogroup.html">
   *         AWS::IAM::UserToGroupAddition</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/using-iam-template.html#capabilities">Acknowledging IAM Resources in CloudFormation Templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some templates reference macros. If your stack set template references one or more macros, you must update the
   *      stack set directly from the processed template, without first reviewing the resulting changes in a change set. To
   *      update the stack set directly, you must acknowledge this capability. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/template-macros.html">Using CloudFormation Macros to Perform
   *      Custom Processing on Templates</a>.</p>
   *                <important>
   *                   <p>Stack sets with service-managed permissions do not currently support the use of macros in templates. (This
   *       includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.) Even if you specify this capability for a
   *       stack set with service-managed permissions, if you reference a macro in your template the stack set operation will
   *       fail.</p>
   *                </important>
   *             </li>
   *          </ul>
   */
  Capabilities?: (Capability | string)[];

  /**
   * @public
   * <p>The key-value pairs to associate with this stack set and the stacks created from it. CloudFormation also
   *    propagates these tags to supported resources that are created in the stacks. You can specify a maximum number of 50
   *    tags.</p>
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
   *          <p>If you specify new tags as part of an <code>UpdateStackSet</code> action, CloudFormation checks to see if
   *    you have the required IAM permission to tag resources. If you omit tags that are currently associated
   *    with the stack set from the list of tags you specify, CloudFormation assumes that you want to remove those tags
   *    from the stack set, and checks to see if you have permission to untag resources. If you don't have the necessary
   *    permission(s), the entire <code>UpdateStackSet</code> action fails with an <code>access denied</code> error, and the
   *    stack set is not updated.</p>
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
   *          <p>Specify an IAM role only if you are using customized administrator roles to control which users
   *    or groups can manage specific stack sets within the same administrator account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/stacksets-prereqs.html">Granting Permissions for Stack Set
   *    Operations</a> in the <i>CloudFormation User Guide</i>.</p>
   *          <p>If you specified a customized administrator role when you created the stack set, you must specify a customized
   *    administrator role, even if it is the same customized administrator role used with this stack set previously.</p>
   */
  AdministrationRoleARN?: string;

  /**
   * @public
   * <p>The name of the IAM execution role to use to update the stack set. If you do not specify an
   *    execution role, CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role for the stack set
   *    operation.</p>
   *          <p>Specify an IAM role only if you are using customized execution roles to control which stack
   *    resources users and groups can include in their stack sets.</p>
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
   *     <code>TemplateURL</code> is specified), or the <code>Parameters</code>, CloudFormation marks all stack instances
   *    with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and Amazon Web Services Regions. If the stack set update doesn't include changes to the template or parameters, CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with
   *    their existing stack instance status.</p>
   */
  DeploymentTargets?: DeploymentTargets;

  /**
   * @public
   * <p>Describes how the IAM roles required for stack set operations are created. You cannot modify
   *     <code>PermissionModel</code> if there are stack instances associated with your stack set.</p>
   *          <ul>
   *             <li>
   *                <p>With <code>self-managed</code> permissions, you must create the administrator and execution roles required to
   *      deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant Self-Managed Stack Set
   *       Permissions</a>.</p>
   *             </li>
   *             <li>
   *                <p>With <code>service-managed</code> permissions, StackSets automatically creates the IAM roles
   *      required to deploy to accounts managed by Organizations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant
   *       Service-Managed Stack Set Permissions</a>.</p>
   *             </li>
   *          </ul>
   */
  PermissionModel?: PermissionModels | string;

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
   *          <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the
   *    stack set operation only once, even if you retry the request multiple times. You might retry stack set operation
   *    requests to ensure that CloudFormation successfully received them.</p>
   *          <p>If you don't specify an operation ID, CloudFormation generates one automatically.</p>
   *          <p>Repeating this stack set operation with a new operation ID retries all stack instances whose status is
   *     <code>OUTDATED</code>.</p>
   */
  OperationId?: string;

  /**
   * @public
   * <p>[Self-managed permissions] The accounts in which to update associated stack instances. If you specify accounts,
   *    you must also specify the Amazon Web Services Regions in which to update stack set instances.</p>
   *          <p>To update <i>all</i> the stack instances associated with this stack set, don't specify the
   *     <code>Accounts</code> or <code>Regions</code> properties.</p>
   *          <p>If the stack set update includes changes to the template (that is, if the <code>TemplateBody</code> or
   *     <code>TemplateURL</code> properties are specified), or the <code>Parameters</code> property, CloudFormation marks all stack
   *    instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and
   *     Amazon Web Services Regions. If the stack set update does not include changes to the template or parameters, CloudFormation
   *    updates the stack instances in the specified accounts and Amazon Web Services Regions, while leaving all other stack
   *    instances with their existing stack instance status.</p>
   */
  Accounts?: string[];

  /**
   * @public
   * <p>The Amazon Web Services Regions in which to update associated stack instances. If you specify Regions, you must
   *    also specify accounts in which to update stack set instances.</p>
   *          <p>To update <i>all</i> the stack instances associated with this stack set, do not specify the
   *     <code>Accounts</code> or <code>Regions</code> properties.</p>
   *          <p>If the stack set update includes changes to the template (that is, if the <code>TemplateBody</code> or
   *     <code>TemplateURL</code> properties are specified), or the <code>Parameters</code> property, CloudFormation marks all stack
   *    instances with a status of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts and
   *    Regions. If the stack set update does not include changes to the template or parameters, CloudFormation updates the stack
   *    instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack
   *    instance status.</p>
   */
  Regions?: string[];

  /**
   * @public
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's
   *     management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed
   *    permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated
   *       administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;

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
   *    more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p>
   *          <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only
   *     <code>TemplateBody</code> is used.</p>
   */
  TemplateBody?: string;

  /**
   * @public
   * <p>Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that
   *    is located in an Amazon S3 bucket or a Systems Manager document. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the
   *    CloudFormation User Guide.</p>
   *          <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both are passed, only
   *     <code>TemplateBody</code> is used.</p>
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
   * <p>The capabilities found within the template. If your template contains IAM resources, you must
   *    specify the CAPABILITY_IAM or CAPABILITY_NAMED_IAM value for this parameter when you use the <a>CreateStack</a> or <a>UpdateStack</a> actions with your template; otherwise, those actions return
   *    an InsufficientCapabilities error.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM
   *     Resources in CloudFormation Templates</a>.</p>
   */
  Capabilities?: (Capability | string)[];

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
