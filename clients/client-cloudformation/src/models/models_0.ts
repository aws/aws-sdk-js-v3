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
 * <p>Structure that contains the results of the account gate function which CloudFormation invokes,
 *    if present, before proceeding with a StackSet operation in an account and Region.</p>
 *          <p>For each account and Region, CloudFormation lets you specify a Lambda function that encapsulates
 *    any requirements that must be met before CloudFormation can proceed with a StackSet operation in that
 *    account and Region. CloudFormation invokes the function each time a StackSet operation is requested
 *    for that account and Region; if the function returns <code>FAILED</code>, CloudFormation cancels the
 *    operation in that account and Region, and sets the StackSet operation result status for that
 *    account and Region to <code>FAILED</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html">Prevent failed StackSets
 *     deployments using target account gates</a> in the
 *    <i>CloudFormation User Guide</i>.</p>
 * @public
 */
export interface AccountGateResult {
  /**
   * <p>The status of the account gate function.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The account gate function has determined that the account and
   *      Region passes any requirements for a StackSet operation to occur. CloudFormation proceeds with the
   *      stack operation in that account and Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The account gate function has determined that the account and Region
   *      doesn't meet the requirements for a StackSet operation to occur. CloudFormation cancels the
   *      StackSet operation in that account and Region, and sets the StackSet operation result status
   *      for that account and Region to <code>FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIPPED</code>: CloudFormation has skipped calling the account gate function for this
   *      account and Region, for one of the following reasons:</p>
   *                <ul>
   *                   <li>
   *                      <p>An account gate function hasn't been specified for the account and Region. CloudFormation
   *        proceeds with the StackSet operation in this account and Region.</p>
   *                   </li>
   *                   <li>
   *                      <p>The <code>AWSCloudFormationStackSetExecutionRole</code> of the administration account
   *        lacks permissions to invoke the function. CloudFormation proceeds with the StackSet operation in
   *        this account and Region.</p>
   *                   </li>
   *                   <li>
   *                      <p>Either no action is necessary, or no action is possible, on the stack. CloudFormation skips
   *        the StackSet operation in this account and Region.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: AccountGateStatus | undefined;

  /**
   * <p>The reason for the account gate status assigned to this account and Region for the StackSet
   *    operation.</p>
   * @public
   */
  StatusReason?: string | undefined;
}

/**
 * <p>Describes the current CloudFormation limits for your account.</p>
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
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">Understand CloudFormation
 *     quotas</a> in the <i>CloudFormation User Guide</i>.</p>
 * @public
 */
export interface AccountLimit {
  /**
   * <p>The name of the account limit.</p>
   *          <p>Values: <code>ConcurrentResourcesLimit</code> | <code>StackLimit</code> |
   *     <code>StackOutputsLimit</code>
   *          </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value that's associated with the account limit name.</p>
   * @public
   */
  Value?: number | undefined;
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
 * <p>The specified operation isn't valid.</p>
 * @public
 */
export class InvalidOperationException extends __BaseException {
  readonly name: "InvalidOperationException" = "InvalidOperationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The specified ID refers to an operation that doesn't exist.</p>
 * @public
 */
export class OperationNotFoundException extends __BaseException {
  readonly name: "OperationNotFoundException" = "OperationNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>Contains logging configuration information for an extension.</p>
 * @public
 */
export interface LoggingConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the role that CloudFormation should assume when sending log
   *    entries to CloudWatch Logs.</p>
   * @public
   */
  LogRoleArn: string | undefined;

  /**
   * <p>The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking the
   *    extension's handlers.</p>
   * @public
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
   * <p>The extension type.</p>
   *          <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>,
   *         <code>Type</code>, and <code>PublisherId</code>.</p>
   * @public
   */
  Type?: ThirdPartyType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the public extension.</p>
   *          <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>,
   *         <code>Type</code>, and <code>PublisherId</code>.</p>
   * @public
   */
  PublicTypeArn?: string | undefined;

  /**
   * <p>The ID of the extension publisher.</p>
   *          <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>,
   *         <code>Type</code>, and <code>PublisherId</code>.</p>
   * @public
   */
  PublisherId?: string | undefined;

  /**
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>,
   *         <code>Type</code>, and <code>PublisherId</code>.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>An alias to assign to the public extension in this account and Region. If you specify an
   *       alias for the extension, CloudFormation treats the alias as the extension type name within this
   *       account and Region. You must use the alias to refer to the extension in your templates, API
   *       calls, and CloudFormation console.</p>
   *          <p>An extension alias must be unique within a given account and Region. You can activate the
   *       same public resource multiple times in the same account and Region, using different type name
   *       aliases.</p>
   * @public
   */
  TypeNameAlias?: string | undefined;

  /**
   * <p>Whether to automatically update the extension in this account and Region when a new
   *         <i>minor</i> version is published by the extension publisher. Major versions
   *       released by the publisher must be manually updated.</p>
   *          <p>The default is <code>true</code>.</p>
   * @public
   */
  AutoUpdate?: boolean | undefined;

  /**
   * <p>Contains logging configuration information for an extension.</p>
   * @public
   */
  LoggingConfig?: LoggingConfig | undefined;

  /**
   * <p>The name of the IAM execution role to use to activate the extension.</p>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>Manually updates a previously-activated type to a new major or minor version, if
   *       available. You can also use this parameter to update the value of
   *       <code>AutoUpdate</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MAJOR</code>: CloudFormation updates the extension to the newest major version, if
   *           one is available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MINOR</code>: CloudFormation updates the extension to the newest minor version, if
   *           one is available.</p>
   *             </li>
   *          </ul>
   * @public
   */
  VersionBump?: VersionBump | undefined;

  /**
   * <p>The major version of this extension you want to activate, if multiple major versions are
   *       available. The default is the latest major version. CloudFormation uses the latest available
   *         <i>minor</i> version of the major version selected.</p>
   *          <p>You can specify <code>MajorVersion</code> or <code>VersionBump</code>, but not
   *       both.</p>
   * @public
   */
  MajorVersion?: number | undefined;
}

/**
 * @public
 */
export interface ActivateTypeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the activated extension in this account and
   *       Region.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>An error occurred during a CloudFormation registry operation.</p>
 * @public
 */
export class CFNRegistryException extends __BaseException {
  readonly name: "CFNRegistryException" = "CFNRegistryException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message with details about the error that occurred.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>The specified extension doesn't exist in the CloudFormation registry.</p>
 * @public
 */
export class TypeNotFoundException extends __BaseException {
  readonly name: "TypeNotFoundException" = "TypeNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message with details about the error that occurred.</p>
   * @public
   */
  Message?: string | undefined;
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
 * @enum
 */
export const AfterValueFrom = {
  TEMPLATE: "TEMPLATE",
} as const;

/**
 * @public
 */
export type AfterValueFrom = (typeof AfterValueFrom)[keyof typeof AfterValueFrom];

/**
 * <p>The resource with the name requested already exists.</p>
 * @public
 */
export class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException" = "AlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * @enum
 */
export const AnnotationSeverityLevel = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  INFORMATIONAL: "INFORMATIONAL",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type AnnotationSeverityLevel = (typeof AnnotationSeverityLevel)[keyof typeof AnnotationSeverityLevel];

/**
 * @public
 * @enum
 */
export const AnnotationStatus = {
  FAILED: "FAILED",
  PASSED: "PASSED",
  SKIPPED: "SKIPPED",
} as const;

/**
 * @public
 */
export type AnnotationStatus = (typeof AnnotationStatus)[keyof typeof AnnotationStatus];

/**
 * <p>The <code>Annotation</code> data type.</p>
 *          <p>A <code>GetHookResult</code> call returns detailed information and remediation guidance from
 *    Control Tower, Guard, Lambda, or custom Hooks for a Hook invocation result.</p>
 * @public
 */
export interface Annotation {
  /**
   * <p>An identifier for the evaluation logic that was used when invoking the Hook. For Control Tower,
   *    this is the control ID. For Guard, this is the rule ID. For Lambda and custom Hooks,
   *    this is a user-defined identifier.</p>
   * @public
   */
  AnnotationName?: string | undefined;

  /**
   * <p>The status of the Hook invocation from the downstream service.</p>
   * @public
   */
  Status?: AnnotationStatus | undefined;

  /**
   * <p>The explanation for the specific status assigned to this Hook invocation. For example,
   *    "Bucket does not block public access".</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>Suggests what to change if your Hook returns a <code>FAILED</code> status. For example,
   *    "Block public access to the bucket".</p>
   * @public
   */
  RemediationMessage?: string | undefined;

  /**
   * <p>A URL that you can access for additional remediation guidance.</p>
   * @public
   */
  RemediationLink?: string | undefined;

  /**
   * <p>The relative risk associated with any violations of this type.</p>
   * @public
   */
  SeverityLevel?: AnnotationSeverityLevel | undefined;
}

/**
 * @public
 * @enum
 */
export const AttributeChangeType = {
  Add: "Add",
  Modify: "Modify",
  Remove: "Remove",
  SyncWithActual: "SyncWithActual",
} as const;

/**
 * @public
 */
export type AttributeChangeType = (typeof AttributeChangeType)[keyof typeof AttributeChangeType];

/**
 * <p>Describes whether StackSets automatically deploys to Organizations accounts that are
 *    added to a target organization or organizational unit (OU). For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-manage-auto-deployment.html">Enable or
 *     disable automatic deployments for StackSets in Organizations</a> in the
 *     <i>CloudFormation User Guide</i>.</p>
 * @public
 */
export interface AutoDeployment {
  /**
   * <p>If set to <code>true</code>, StackSets automatically deploys additional stack instances to
   *     Organizations accounts that are added to a target organization or organizational unit
   *    (OU) in the specified Regions. If an account is removed from a target organization or OU,
   *    StackSets deletes stack instances from the account in the specified Regions.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>If set to <code>true</code>, stack resources are retained when an account is removed from a
   *    target organization or OU. If set to <code>false</code>, stack resources are deleted. Specify
   *    only if <code>Enabled</code> is set to <code>True</code>.</p>
   * @public
   */
  RetainStacksOnAccountRemoval?: boolean | undefined;
}

/**
 * <p>Identifying information for the configuration of a CloudFormation extension.</p>
 * @public
 */
export interface TypeConfigurationIdentifier {
  /**
   * <p>The ARN for the extension, in this account and Region.</p>
   *          <p>For public extensions, this will be the ARN assigned when you call the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">ActivateType</a> API operation in this account and Region. For private extensions, this
   *    will be the ARN assigned when you call the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a> API
   *    operation in this account and Region.</p>
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * <p>The alias specified for this configuration, if one was specified when the configuration was
   *    set.</p>
   * @public
   */
  TypeConfigurationAlias?: string | undefined;

  /**
   * <p>The ARN for the configuration, in this account and Region.</p>
   * @public
   */
  TypeConfigurationArn?: string | undefined;

  /**
   * <p>The type of extension.</p>
   * @public
   */
  Type?: ThirdPartyType | undefined;

  /**
   * <p>The name of the extension type to which this configuration applies.</p>
   * @public
   */
  TypeName?: string | undefined;
}

/**
 * @public
 */
export interface BatchDescribeTypeConfigurationsInput {
  /**
   * <p>The list of identifiers for the desired extension configurations.</p>
   * @public
   */
  TypeConfigurationIdentifiers: TypeConfigurationIdentifier[] | undefined;
}

/**
 * <p>Detailed information concerning an error generated during the setting of configuration data
 *    for a CloudFormation extension.</p>
 * @public
 */
export interface BatchDescribeTypeConfigurationsError {
  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>Identifying information for the configuration of a CloudFormation extension.</p>
   * @public
   */
  TypeConfigurationIdentifier?: TypeConfigurationIdentifier | undefined;
}

/**
 * <p>Detailed information concerning the specification of a CloudFormation extension in a given
 *    account and Region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-set-configuration.html">Edit configuration data
 *     for extensions in your account</a> in the <i>CloudFormation User Guide</i>.</p>
 * @public
 */
export interface TypeConfigurationDetails {
  /**
   * <p>The ARN for the configuration data, in this account and Region.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The alias specified for this configuration, if one was specified when the configuration was
   *    set.</p>
   * @public
   */
  Alias?: string | undefined;

  /**
   * <p>A JSON string specifying the configuration data for the extension, in this account and
   *    Region.</p>
   *          <p>If a configuration hasn't been set for a specified extension, CloudFormation returns
   *     <code>\{\}</code>.</p>
   * @public
   */
  Configuration?: string | undefined;

  /**
   * <p>When the configuration data was last updated for this extension.</p>
   *          <p>If a configuration hasn't been set for a specified extension, CloudFormation returns
   *     <code>null</code>.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>The ARN for the extension, in this account and Region.</p>
   *          <p>For public extensions, this will be the ARN assigned when you call the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">ActivateType</a> API operation in this account and Region. For private extensions, this
   *    will be the ARN assigned when you call the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a> API
   *    operation in this account and Region.</p>
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * <p>The name of the extension.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>Whether this configuration data is the default configuration for the extension.</p>
   * @public
   */
  IsDefaultConfiguration?: boolean | undefined;
}

/**
 * @public
 */
export interface BatchDescribeTypeConfigurationsOutput {
  /**
   * <p>A list of information concerning any errors generated during the setting of the specified
   *       configurations.</p>
   * @public
   */
  Errors?: BatchDescribeTypeConfigurationsError[] | undefined;

  /**
   * <p>A list of any of the specified extension configurations that CloudFormation could not process
   *       for any reason.</p>
   * @public
   */
  UnprocessedTypeConfigurations?: TypeConfigurationIdentifier[] | undefined;

  /**
   * <p>A list of any of the specified extension configurations from the CloudFormation
   *       registry.</p>
   * @public
   */
  TypeConfigurations?: TypeConfigurationDetails[] | undefined;
}

/**
 * <p>The specified extension configuration can't be found.</p>
 * @public
 */
export class TypeConfigurationNotFoundException extends __BaseException {
  readonly name: "TypeConfigurationNotFoundException" = "TypeConfigurationNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message with details about the error that occurred.</p>
   * @public
   */
  Message?: string | undefined;
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
export const BeaconStackOperationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type BeaconStackOperationStatus = (typeof BeaconStackOperationStatus)[keyof typeof BeaconStackOperationStatus];

/**
 * @public
 * @enum
 */
export const BeforeValueFrom = {
  ACTUAL_STATE: "ACTUAL_STATE",
  PREVIOUS_DEPLOYMENT_STATE: "PREVIOUS_DEPLOYMENT_STATE",
} as const;

/**
 * @public
 */
export type BeforeValueFrom = (typeof BeforeValueFrom)[keyof typeof BeforeValueFrom];

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
 * <p>The input for the <a>CancelUpdateStack</a> action.</p>
 * @public
 */
export interface CancelUpdateStackInput {
  /**
   * <note>
   *             <p>If you don't pass a parameter to <code>StackName</code>, the API returns a response that
   *         describes all resources in the account.</p>
   *             <p>The IAM policy below can be added to IAM policies when you want to limit
   *         resource-level permissions and avoid returning a response when no parameter is sent in the
   *         request:</p>
   *             <p>
   *                <code>\{ "Version": "2012-10-17",		 	 	  "Statement": [\{ "Effect": "Deny",
   *           "Action": "cloudformation:DescribeStacks", "NotResource":
   *           "arn:aws:cloudformation:*:*:stack/*\/*" \}] \}</code>
   *             </p>
   *          </note>
   *          <p>The name or the unique stack ID that's associated with the stack.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>A unique identifier for this <code>CancelUpdateStack</code> request. Specify this token if
   *       you plan to retry requests so that CloudFormation knows that you're not attempting to cancel an
   *       update on a stack with the same name. You might retry <code>CancelUpdateStack</code> requests
   *       to ensure that CloudFormation successfully received them.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * <p>A client request token already exists.</p>
 * @public
 */
export class TokenAlreadyExistsException extends __BaseException {
  readonly name: "TokenAlreadyExistsException" = "TokenAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
  SyncWithActual: "SyncWithActual",
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
  NoModification: "NoModification",
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
  UpdateReplacePolicy: "UpdateReplacePolicy",
} as const;

/**
 * @public
 */
export type ResourceAttribute = (typeof ResourceAttribute)[keyof typeof ResourceAttribute];

/**
 * <p>Contains drift information for a resource property, including actual value, previous
 *    deployment value, and drift detection timestamp.</p>
 * @public
 */
export interface LiveResourceDrift {
  /**
   * <p>The configuration value from the previous CloudFormation deployment.</p>
   * @public
   */
  PreviousValue?: string | undefined;

  /**
   * <p>The current live configuration value of the resource property.</p>
   * @public
   */
  ActualValue?: string | undefined;

  /**
   * <p>The timestamp when drift was detected for this resource property.</p>
   * @public
   */
  DriftDetectionTimestamp?: Date | undefined;
}

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
 * <p>The field that CloudFormation will change, such as the name of a resource's property, and
 *    whether the resource will be recreated.</p>
 * @public
 */
export interface ResourceTargetDefinition {
  /**
   * <p>Indicates which resource attribute is triggering this update, such as a change in the
   *    resource attribute's <code>Metadata</code>, <code>Properties</code>, or <code>Tags</code>.</p>
   * @public
   */
  Attribute?: ResourceAttribute | undefined;

  /**
   * <p>If the <code>Attribute</code> value is <code>Properties</code>, the name of the property.
   *    For all other attributes, the value is null.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>If the <code>Attribute</code> value is <code>Properties</code>, indicates whether a change
   *    to this property causes the resource to be recreated. The value can be <code>Never</code>,
   *     <code>Always</code>, or <code>Conditionally</code>. To determine the conditions for a
   *     <code>Conditionally</code> recreation, see the update behavior for that property in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and
   *     property types reference</a> in the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  RequiresRecreation?: RequiresRecreation | undefined;

  /**
   * <p>The property path of the property.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The value of the property before the change is executed. Large values can be
   *    truncated.</p>
   * @public
   */
  BeforeValue?: string | undefined;

  /**
   * <p>The value of the property after the change is executed. Large values can be
   *    truncated.</p>
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * <p>Indicates the source of the before value. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTUAL_STATE</code> – The before value represents current actual state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PREVIOUS_DEPLOYMENT_STATE</code> – The before value represents the previous
   *      CloudFormation deployment state.</p>
   *             </li>
   *          </ul>
   *          <p>Only present for drift-aware change sets.</p>
   * @public
   */
  BeforeValueFrom?: BeforeValueFrom | undefined;

  /**
   * <p>Indicates the source of the after value. Valid value:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TEMPLATE</code> – The after value comes from the new template.</p>
   *             </li>
   *          </ul>
   *          <p>Only present for drift-aware change sets.</p>
   * @public
   */
  AfterValueFrom?: AfterValueFrom | undefined;

  /**
   * <p>Detailed drift information for the resource property, including actual values, previous
   *    deployment values, and drift detection timestamps.</p>
   * @public
   */
  Drift?: LiveResourceDrift | undefined;

  /**
   * <p>The type of change to be made to the property if the change is executed.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Add</code> The item will be added.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Remove</code> The item will be removed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Modify</code> The item will be modified.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SyncWithActual</code> The drift status of this item will be reset but the item will
   *      not be modified.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributeChangeType?: AttributeChangeType | undefined;
}

/**
 * <p>For a resource with <code>Modify</code> as the action, the <code>ResourceChange</code>
 *    structure describes the changes CloudFormation will make to that resource.</p>
 * @public
 */
export interface ResourceChangeDetail {
  /**
   * <p>A <code>ResourceTargetDefinition</code> structure that describes the field that CloudFormation
   *    will change and whether the resource will be recreated.</p>
   * @public
   */
  Target?: ResourceTargetDefinition | undefined;

  /**
   * <p>Indicates whether CloudFormation can determine the target value, and whether the target value
   *    will change before you execute a change set.</p>
   *          <p>For <code>Static</code> evaluations, CloudFormation can determine that the target value will
   *    change, and its value. For example, if you directly modify the <code>InstanceType</code> property
   *    of an EC2 instance, CloudFormation knows that this property value will change, and its value, so this
   *    is a <code>Static</code> evaluation.</p>
   *          <p>For <code>Dynamic</code> evaluations, can't determine the target value because it depends on
   *    the result of an intrinsic function, such as a <code>Ref</code> or <code>Fn::GetAtt</code>
   *    intrinsic function, when the stack is updated. For example, if your template includes a reference
   *    to a resource that's conditionally recreated, the value of the reference (the physical ID of the
   *    resource) might change, depending on if the resource is recreated. If the resource is recreated,
   *    it will have a new physical ID, so all references to that resource will also be updated.</p>
   * @public
   */
  Evaluation?: EvaluationType | undefined;

  /**
   * <p>The group to which the <code>CausingEntity</code> value belongs. There are five entity
   *    groups:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ResourceReference</code> entities are <code>Ref</code> intrinsic functions that refer to
   *      resources in the template, such as <code>\{ "Ref" : "MyEC2InstanceResource" \}</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ParameterReference</code> entities are <code>Ref</code> intrinsic functions that get
   *      template parameter values, such as <code>\{ "Ref" : "MyPasswordParameter" \}</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ResourceAttribute</code> entities are <code>Fn::GetAtt</code> intrinsic functions that
   *      get resource attribute values, such as <code>\{ "Fn::GetAtt" : [ "MyEC2InstanceResource",
   *       "PublicDnsName" ] \}</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DirectModification</code> entities are changes that are made directly to the
   *      template.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Automatic</code> entities are <code>AWS::CloudFormation::Stack</code> resource types,
   *      which are also known as nested stacks. If you made no changes to the
   *       <code>AWS::CloudFormation::Stack</code> resource, CloudFormation sets the
   *       <code>ChangeSource</code> to <code>Automatic</code> because the nested stack's template might
   *      have changed. Changes to a nested stack's template aren't visible to CloudFormation until you run
   *      an update on the parent stack.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NoModification</code> entities are changes made to the template that matches the actual
   *      state of the resource.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ChangeSource?: ChangeSource | undefined;

  /**
   * <p>The identity of the entity that triggered this change. This entity is a member of the group
   *    that's specified by the <code>ChangeSource</code> field. For example, if you modified the value
   *    of the <code>KeyPairName</code> parameter, the <code>CausingEntity</code> is the name of the
   *    parameter (<code>KeyPairName</code>).</p>
   *          <p>If the <code>ChangeSource</code> value is <code>DirectModification</code>, no value is given
   *    for <code>CausingEntity</code>.</p>
   * @public
   */
  CausingEntity?: string | undefined;
}

/**
 * <p>Contains information about the module from which the resource was created, if the resource
 *    was created from a module included in the stack template.</p>
 *          <p>For more information about modules, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html">Create reusable resource configurations
 *     that can be included across templates with CloudFormation modules</a> in the
 *     <i>CloudFormation User Guide</i>.</p>
 * @public
 */
export interface ModuleInfo {
  /**
   * <p>A concatenated list of the module type or types that contains the resource. Module types are
   *    listed starting with the inner-most nested module, and separated by <code>/</code>.</p>
   *          <p>In the following example, the resource was created from a module of type
   *     <code>AWS::First::Example::MODULE</code>, that's nested inside a parent module of type
   *     <code>AWS::Second::Example::MODULE</code>.</p>
   *          <p>
   *             <code>AWS::First::Example::MODULE/AWS::Second::Example::MODULE</code>
   *          </p>
   * @public
   */
  TypeHierarchy?: string | undefined;

  /**
   * <p>A concatenated list of the logical IDs of the module or modules that contains the resource.
   *    Modules are listed starting with the inner-most nested module, and separated by
   *    <code>/</code>.</p>
   *          <p>In the following example, the resource was created from a module, <code>moduleA</code>,
   *    that's nested inside a parent module, <code>moduleB</code>.</p>
   *          <p>
   *             <code>moduleA/moduleB</code>
   *          </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/module-ref-resources.html">Reference module resources in
   *     CloudFormation templates</a> in the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  LogicalIdHierarchy?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PolicyAction = {
  Delete: "Delete",
  ReplaceAndDelete: "ReplaceAndDelete",
  ReplaceAndRetain: "ReplaceAndRetain",
  ReplaceAndSnapshot: "ReplaceAndSnapshot",
  Retain: "Retain",
  Snapshot: "Snapshot",
} as const;

/**
 * @public
 */
export type PolicyAction = (typeof PolicyAction)[keyof typeof PolicyAction];

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
 * @enum
 */
export const DriftIgnoredReason = {
  MANAGED_BY_AWS: "MANAGED_BY_AWS",
  WRITE_ONLY_PROPERTY: "WRITE_ONLY_PROPERTY",
} as const;

/**
 * @public
 */
export type DriftIgnoredReason = (typeof DriftIgnoredReason)[keyof typeof DriftIgnoredReason];

/**
 * <p>The <code>ResourceDriftIgnoredAttribute</code> data type.</p>
 * @public
 */
export interface ResourceDriftIgnoredAttribute {
  /**
   * <p>Path of the resource attribute for which drift was ignored.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>Reason why drift was ignored for the attribute, can have 2 possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>WRITE_ONLY_PROPERTY</code> - Property is not included in read response for the
   *      resource’s live state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MANAGED_BY_AWS</code> - Property is managed by an Amazon Web Services service and is expected to be
   *      dynamically modified.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Reason?: DriftIgnoredReason | undefined;
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
  UNKNOWN: "UNKNOWN",
  UNSUPPORTED: "UNSUPPORTED",
} as const;

/**
 * @public
 */
export type StackResourceDriftStatus = (typeof StackResourceDriftStatus)[keyof typeof StackResourceDriftStatus];

/**
 * <p>The <code>ResourceChange</code> structure describes the resource and the action that
 *    CloudFormation will perform on it if you execute this change set.</p>
 * @public
 */
export interface ResourceChange {
  /**
   * <p>The action that will be taken on the physical resource when the change set is
   *    executed.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Delete</code> The resource will be deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Retain</code> The resource will be retained.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Snapshot</code> The resource will have a snapshot taken.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReplaceAndDelete</code> The resource will be replaced and then deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReplaceAndRetain</code> The resource will be replaced and then retained.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReplaceAndSnapshot</code> The resource will be replaced and then have a snapshot
   *      taken.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyAction?: PolicyAction | undefined;

  /**
   * <p>The action that CloudFormation takes on the resource, such as <code>Add</code> (adds a new
   *    resource), <code>Modify</code> (changes a resource), <code>Remove</code> (deletes a resource),
   *     <code>Import</code> (imports a resource), <code>Dynamic</code> (exact action for the resource
   *    can't be determined), or <code>SyncWithActual</code> (resource will not be changed, only
   *    CloudFormation metadata will change).</p>
   * @public
   */
  Action?: ChangeAction | undefined;

  /**
   * <p>The resource's logical ID, which is defined in the stack's template.</p>
   * @public
   */
  LogicalResourceId?: string | undefined;

  /**
   * <p>The resource's physical ID (resource name). Resources that you are adding don't have
   *    physical IDs because they haven't been created.</p>
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * <p>The type of CloudFormation resource, such as <code>AWS::S3::Bucket</code>.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>For the <code>Modify</code> action, indicates whether CloudFormation will replace the resource
   *    by creating a new one and deleting the old one. This value depends on the value of the
   *     <code>RequiresRecreation</code> property in the <code>ResourceTargetDefinition</code> structure.
   *    For example, if the <code>RequiresRecreation</code> field is <code>Always</code> and the
   *     <code>Evaluation</code> field is <code>Static</code>, <code>Replacement</code> is
   *     <code>True</code>. If the <code>RequiresRecreation</code> field is <code>Always</code> and the
   *     <code>Evaluation</code> field is <code>Dynamic</code>, <code>Replacement</code> is
   *     <code>Conditional</code>.</p>
   *          <p>If you have multiple changes with different <code>RequiresRecreation</code> values, the
   *     <code>Replacement</code> value depends on the change with the most impact. A
   *     <code>RequiresRecreation</code> value of <code>Always</code> has the most impact, followed by
   *     <code>Conditional</code>, and then <code>Never</code>.</p>
   * @public
   */
  Replacement?: Replacement | undefined;

  /**
   * <p>For the <code>Modify</code> action, indicates which resource attribute is triggering this
   *    update, such as a change in the resource attribute's <code>Metadata</code>,
   *     <code>Properties</code>, or <code>Tags</code>.</p>
   * @public
   */
  Scope?: ResourceAttribute[] | undefined;

  /**
   * <p>The drift status of the resource. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code> – The resource matches its template definition.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFIED</code> – Resource properties were modified outside CloudFormation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> – The resource was deleted outside CloudFormation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code> – CloudFormation doesn’t currently return this value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code> – Drift status could not be determined.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNSUPPORTED</code> – Resource type does not support actual state comparison.</p>
   *             </li>
   *          </ul>
   *          <p>Only present for drift-aware change sets.</p>
   * @public
   */
  ResourceDriftStatus?: StackResourceDriftStatus | undefined;

  /**
   * <p>List of resource attributes for which drift was ignored.</p>
   * @public
   */
  ResourceDriftIgnoredAttributes?: ResourceDriftIgnoredAttribute[] | undefined;

  /**
   * <p>For the <code>Modify</code> action, a list of <code>ResourceChangeDetail</code> structures
   *    that describes the changes that CloudFormation will make to the resource.</p>
   * @public
   */
  Details?: ResourceChangeDetail[] | undefined;

  /**
   * <p>The change set ID of the nested change set.</p>
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * <p>Contains information about the module from which the resource was created, if the resource
   *    was created from a module included in the stack template.</p>
   * @public
   */
  ModuleInfo?: ModuleInfo | undefined;

  /**
   * <p>An encoded JSON string that contains the context of the resource before the change is
   *    executed.</p>
   * @public
   */
  BeforeContext?: string | undefined;

  /**
   * <p>An encoded JSON string that contains the context of the resource after the change is
   *    executed.</p>
   * @public
   */
  AfterContext?: string | undefined;

  /**
   * <p>Information about the resource's state from the previous CloudFormation deployment.</p>
   * @public
   */
  PreviousDeploymentContext?: string | undefined;
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
 * <p>The <code>Change</code> structure describes the changes CloudFormation will perform if you
 *    execute the change set.</p>
 * @public
 */
export interface Change {
  /**
   * <p>The type of entity that CloudFormation changes.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Resource</code> This change is for a resource.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: ChangeType | undefined;

  /**
   * <p>Is either <code>null</code>, if no Hooks invoke for the resource, or contains the number
   *    of Hooks that will invoke for the resource.</p>
   * @public
   */
  HookInvocationCount?: number | undefined;

  /**
   * <p>A <code>ResourceChange</code> structure that describes the resource and action that
   *    CloudFormation will perform.</p>
   * @public
   */
  ResourceChange?: ResourceChange | undefined;
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
 * <p>Specifies <code>RESOURCE</code> type target details for activated Hooks.</p>
 * @public
 */
export interface ChangeSetHookResourceTargetDetails {
  /**
   * <p>The resource's logical ID, which is defined in the stack's template.</p>
   * @public
   */
  LogicalResourceId?: string | undefined;

  /**
   * <p>The type of CloudFormation resource, such as <code>AWS::S3::Bucket</code>.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>Specifies the action of the resource.</p>
   * @public
   */
  ResourceAction?: ChangeAction | undefined;
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
 * <p>Specifies target details for an activated Hook.</p>
 * @public
 */
export interface ChangeSetHookTargetDetails {
  /**
   * <p>The Hook target type.</p>
   * @public
   */
  TargetType?: HookTargetType | undefined;

  /**
   * <p>Required if <code>TargetType</code> is <code>RESOURCE</code>.</p>
   * @public
   */
  ResourceTargetDetails?: ChangeSetHookResourceTargetDetails | undefined;
}

/**
 * <p>Specifies the resource, the Hook, and the Hook version to be invoked.</p>
 * @public
 */
export interface ChangeSetHook {
  /**
   * <p>The specific point in the provisioning process where the Hook is invoked.</p>
   * @public
   */
  InvocationPoint?: HookInvocationPoint | undefined;

  /**
   * <p>Specify the Hook failure mode for non-compliant resources in the followings ways.</p>
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
   * @public
   */
  FailureMode?: HookFailureMode | undefined;

  /**
   * <p>The unique name for your Hook. Specifies a three-part namespace for your Hook, with a
   *    recommended pattern of <code>Organization::Service::Hook</code>.</p>
   *          <note>
   *             <p>The following organization namespaces are reserved and can't be used in your Hook type
   *     names:</p>
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
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The version ID of the type specified.</p>
   * @public
   */
  TypeVersionId?: string | undefined;

  /**
   * <p>The version ID of the type configuration.</p>
   * @public
   */
  TypeConfigurationVersionId?: string | undefined;

  /**
   * <p>Specifies details about the target that the Hook will run against.</p>
   * @public
   */
  TargetDetails?: ChangeSetHookTargetDetails | undefined;
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
 * <p>The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the
 *    <code>ListChangeSets</code> operation.</p>
 * @public
 */
export class ChangeSetNotFoundException extends __BaseException {
  readonly name: "ChangeSetNotFoundException" = "ChangeSetNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The <code>ChangeSetSummary</code> structure describes a change set, its status, and the
 *    stack with which it's associated.</p>
 * @public
 */
export interface ChangeSetSummary {
  /**
   * <p>The ID of the stack with which the change set is associated.</p>
   * @public
   */
  StackId?: string | undefined;

  /**
   * <p>The name of the stack with which the change set is associated.</p>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>The ID of the change set.</p>
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * <p>The name of the change set.</p>
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * <p>If the change set execution status is <code>AVAILABLE</code>, you can execute the change
   *    set. If you can't execute the change set, the status indicates why. For example, a change set
   *    might be in an <code>UNAVAILABLE</code> state because CloudFormation is still creating it or in an
   *     <code>OBSOLETE</code> state because the stack was already updated.</p>
   * @public
   */
  ExecutionStatus?: ExecutionStatus | undefined;

  /**
   * <p>The state of the change set, such as <code>CREATE_PENDING</code>,
   *     <code>CREATE_COMPLETE</code>, or <code>FAILED</code>.</p>
   * @public
   */
  Status?: ChangeSetStatus | undefined;

  /**
   * <p>A description of the change set's status. For example, if your change set is in the
   *     <code>FAILED</code> state, CloudFormation shows the error message.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The start time when the change set was created, in UTC.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Descriptive information about the change set.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies the current setting of <code>IncludeNestedStacks</code> for the change set.</p>
   * @public
   */
  IncludeNestedStacks?: boolean | undefined;

  /**
   * <p>The parent change set ID.</p>
   * @public
   */
  ParentChangeSetId?: string | undefined;

  /**
   * <p>The root change set ID.</p>
   * @public
   */
  RootChangeSetId?: string | undefined;

  /**
   * <p>Indicates if the change set imports resources that already exist.</p>
   * @public
   */
  ImportExistingResources?: boolean | undefined;
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
 * <p>The input for the <a>ContinueUpdateRollback</a> action.</p>
 * @public
 */
export interface ContinueUpdateRollbackInput {
  /**
   * <p>The name or the unique ID of the stack that you want to continue rolling back.</p>
   *          <note>
   *             <p>Don't specify the name of a nested stack (a stack that was created by using the
   *           <code>AWS::CloudFormation::Stack</code> resource). Instead, use this operation on the
   *         parent stack (the stack that contains the <code>AWS::CloudFormation::Stack</code>
   *         resource).</p>
   *          </note>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to roll back the
   *       stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always
   *       uses this role for all future operations on the stack. Provided that users have permission to
   *       operate on the stack, CloudFormation uses this role even if the users don't have permission to
   *       pass it. Ensure that the role grants least permission.</p>
   *          <p>If you don't specify a value, CloudFormation uses the role that was previously associated with
   *       the stack. If no role is available, CloudFormation uses a temporary session that's generated from
   *       your user credentials.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>A list of the logical IDs of the resources that CloudFormation skips during the continue
   *       update rollback operation. You can specify only resources that are in the
   *         <code>UPDATE_FAILED</code> state because a rollback failed. You can't specify resources that
   *       are in the <code>UPDATE_FAILED</code> state for other reasons, for example, because an update
   *       was canceled. To check why a resource update failed, use the <a>DescribeStackResources</a> action, and view the resource status reason.</p>
   *          <important>
   *             <p>Specify this property to skip rolling back resources that CloudFormation can't successfully
   *         roll back. We recommend that you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> troubleshoot</a> resources before skipping them. CloudFormation sets the status of the
   *         specified resources to <code>UPDATE_COMPLETE</code> and continues to roll back the stack.
   *         After the rollback is complete, the state of the skipped resources will be inconsistent with
   *         the state of the resources in the stack template. Before performing another stack update,
   *         you must update the stack or resources to be consistent with each other. If you don't,
   *         subsequent stack updates might fail, and the stack will become unrecoverable.</p>
   *          </important>
   *          <p>Specify the minimum number of resources required to successfully roll back your stack. For
   *       example, a failed resource update might cause dependent resources to fail. In this case, it
   *       might not be necessary to skip the dependent resources.</p>
   *          <p>To skip resources that are part of nested stacks, use the following format:
   *         <code>NestedStackName.ResourceLogicalID</code>. If you want to specify the logical ID of a
   *       stack resource (<code>Type: AWS::CloudFormation::Stack</code>) in the
   *         <code>ResourcesToSkip</code> list, then its corresponding embedded stack must be in one of
   *       the following states: <code>DELETE_IN_PROGRESS</code>, <code>DELETE_COMPLETE</code>, or
   *         <code>DELETE_FAILED</code>.</p>
   *          <note>
   *             <p>Don't confuse a child stack's name with its corresponding logical ID defined in the
   *         parent stack. For an example of a continue update rollback operation with nested stacks, see
   *           <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html#nested-stacks">Continue rolling back from failed nested stack updates</a>.</p>
   *          </note>
   * @public
   */
  ResourcesToSkip?: string[] | undefined;

  /**
   * <p>A unique identifier for this <code>ContinueUpdateRollback</code> request. Specify this
   *       token if you plan to retry requests so that CloudFormation knows that you're not attempting to
   *       continue the rollback to a stack with the same name. You might retry
   *         <code>ContinueUpdateRollback</code> requests to ensure that CloudFormation successfully received
   *       them.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * <p>The output for a <a>ContinueUpdateRollback</a> operation.</p>
 * @public
 */
export interface ContinueUpdateRollbackOutput {}

/**
 * @public
 * @enum
 */
export const DeploymentMode = {
  REVERT_DRIFT: "REVERT_DRIFT",
} as const;

/**
 * @public
 */
export type DeploymentMode = (typeof DeploymentMode)[keyof typeof DeploymentMode];

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
 * <p>The <code>Parameter</code> data type.</p>
 * @public
 */
export interface Parameter {
  /**
   * <p>The key associated with the parameter. If you don't specify a key and value for a particular
   *    parameter, CloudFormation uses the default value that's specified in your template.</p>
   * @public
   */
  ParameterKey?: string | undefined;

  /**
   * <p>The input value associated with the parameter.</p>
   * @public
   */
  ParameterValue?: string | undefined;

  /**
   * <p>During a stack update, use the existing parameter value that the stack is using for a given
   *    parameter key. If you specify <code>true</code>, do not specify a parameter value.</p>
   * @public
   */
  UsePreviousValue?: boolean | undefined;

  /**
   * <p>Read-only. The value that corresponds to a Systems Manager parameter key. This field is returned only
   *    for Systems Manager parameter types in the template. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-supplied-parameter-types.html">Specify
   *     existing resources at runtime with CloudFormation-supplied parameter types</a> in the
   *     <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  ResolvedValue?: string | undefined;
}

/**
 * <p>Describes the target resource of an import operation.</p>
 * @public
 */
export interface ResourceToImport {
  /**
   * <p>The type of resource to import into your stack, such as <code>AWS::S3::Bucket</code>. For a
   *    list of supported resource types, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html">Resource type
   *     support for imports and drift detection</a> in the
   *    <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>The logical ID of the target resource as specified in the template.</p>
   * @public
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>A key-value pair that identifies the target resource. The key is an identifier property (for
   *    example, <code>BucketName</code> for <code>AWS::S3::Bucket</code> resources) and the value is the
   *    actual property value (for example, <code>MyS3Bucket</code>).</p>
   * @public
   */
  ResourceIdentifier: Record<string, string> | undefined;
}

/**
 * <p>A rollback trigger CloudFormation monitors during creation and updating of stacks. If any of the
 *    alarms you specify goes to ALARM state during the stack operation or within the specified
 *    monitoring period afterwards, CloudFormation rolls back the entire stack operation.</p>
 * @public
 */
export interface RollbackTrigger {
  /**
   * <p>The Amazon Resource Name (ARN) of the rollback trigger.</p>
   *          <p>If a specified trigger is missing, the entire stack operation fails and is rolled
   *    back.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The resource type of the rollback trigger. Specify either <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-cloudwatch-alarm.html">AWS::CloudWatch::Alarm</a> or <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-cloudwatch-compositealarm.html">AWS::CloudWatch::CompositeAlarm</a> resource types.</p>
   * @public
   */
  Type: string | undefined;
}

/**
 * <p>Structure that contains the rollback triggers for CloudFormation to monitor during stack
 *    creation and updating operations, and for the specified monitoring period afterwards.</p>
 *          <p>Rollback triggers enable you to have CloudFormation monitor the state of your application during
 *    stack creation and updating, and to roll back that operation if the application breaches the
 *    threshold of any of the alarms you've specified. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Roll back your CloudFormation stack on alarm breach with rollback triggers</a>.</p>
 * @public
 */
export interface RollbackConfiguration {
  /**
   * <p>The triggers to monitor during stack creation or update actions.</p>
   *          <p>By default, CloudFormation saves the rollback triggers specified for a stack and applies them to
   *    any subsequent update operations for the stack, unless you specify otherwise. If you do specify
   *    rollback triggers for this parameter, those triggers replace any list of triggers previously
   *    specified for the stack. This means:</p>
   *          <ul>
   *             <li>
   *                <p>To use the rollback triggers previously specified for this stack, if any, don't specify
   *      this parameter.</p>
   *             </li>
   *             <li>
   *                <p>To specify new or updated rollback triggers, you must specify <i>all</i> the
   *      triggers that you want used for this stack, even triggers you've specified before (for example,
   *      when creating the stack or during a previous stack update). Any triggers that you don't include
   *      in the updated list of triggers are no longer applied to the stack.</p>
   *             </li>
   *             <li>
   *                <p>To remove all currently specified triggers, specify an empty list for this
   *      parameter.</p>
   *             </li>
   *          </ul>
   *          <p>If a specified trigger is missing, the entire stack operation fails and is rolled
   *    back.</p>
   * @public
   */
  RollbackTriggers?: RollbackTrigger[] | undefined;

  /**
   * <p>The amount of time, in minutes, during which CloudFormation should monitor all the rollback
   *    triggers after the stack creation or update operation deploys all necessary resources.</p>
   *          <p>The default is 0 minutes.</p>
   *          <p>If you specify a monitoring period but don't specify any rollback triggers, CloudFormation still
   *    waits the specified period of time before cleaning up old resources after update operations. You
   *    can use this monitoring period to perform any manual stack validation desired, and manually
   *    cancel the stack creation or update (using <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CancelUpdateStack.html">CancelUpdateStack</a>, for example) as necessary.</p>
   *          <p>If you specify 0 for this parameter, CloudFormation still monitors the specified rollback
   *    triggers during stack creation and update operations. Then, for update operations, it begins
   *    disposing of old resources immediately once the operation completes.</p>
   * @public
   */
  MonitoringTimeInMinutes?: number | undefined;
}

/**
 * <p>The Tag type enables you to specify a key-value pair that can be used to store information
 *    about an CloudFormation stack.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>A string used to identify this tag. You can specify a maximum of 128 characters for a tag
   *    key. Tags owned by Amazon Web Services have the reserved prefix: <code>aws:</code>.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>A string that contains the value for this tag. You can specify a maximum of 256 characters
   *    for a tag value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>The input for the <a>CreateChangeSet</a> action.</p>
 * @public
 */
export interface CreateChangeSetInput {
  /**
   * <p>The name or the unique ID of the stack for which you are creating a change set. CloudFormation
   *       generates the change set by comparing this stack's information with the information that you
   *       submit, such as a modified template or different parameter input values.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>A structure that contains the body of the revised template, with a minimum length of 1
   *       byte and a maximum length of 51,200 bytes. CloudFormation generates the change set by comparing
   *       this template with the template of the stack that you specified.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *         <code>TemplateBody</code>, <code>TemplateURL</code>, or set the
   *         <code>UsePreviousTemplate</code> to <code>true</code>.</p>
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * <p>The URL of the file that contains the revised template. The URL must point to a template
   *       (max size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. CloudFormation
   *       generates the change set by comparing this template with the stack that you specified. The
   *       location for an Amazon S3 bucket must start with <code>https://</code>. URLs from S3 static
   *       websites are not supported.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *         <code>TemplateBody</code>, <code>TemplateURL</code>, or set the
   *         <code>UsePreviousTemplate</code> to <code>true</code>.</p>
   * @public
   */
  TemplateURL?: string | undefined;

  /**
   * <p>Whether to reuse the template that's associated with the stack to create the change
   *       set.</p>
   *          <p>When using templates with the <code>AWS::LanguageExtensions</code> transform, provide the
   *       template instead of using <code>UsePreviousTemplate</code> to ensure new parameter values and
   *       Systems Manager parameter updates are applied correctly. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/transform-aws-languageextensions.html">AWS::LanguageExtensions transform</a>.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *         <code>TemplateBody</code>, <code>TemplateURL</code>, or set the
   *         <code>UsePreviousTemplate</code> to <code>true</code>.</p>
   * @public
   */
  UsePreviousTemplate?: boolean | undefined;

  /**
   * <p>A list of <code>Parameter</code> structures that specify input parameters for the change
   *       set. For more information, see the <a>Parameter</a> data type.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>In some cases, you must explicitly acknowledge that your stack template contains certain
   *       capabilities in order for CloudFormation to create the stack.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in your
   *           Amazon Web Services account, for example, by creating new IAM users. For those stacks, you must
   *           explicitly acknowledge this by specifying one of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the
   *             <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i>
   *               specify <code>CAPABILITY_NAMED_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
   *                 <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we suggest that you review all
   *           permissions associated with them and edit their permissions if necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-accesskey.html">
   *                 AWS::IAM::AccessKey</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-group.html">
   *                 AWS::IAM::Group</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-managedpolicy.html"> AWS::IAM::ManagedPolicy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-policy.html">
   *                 AWS::IAM::Policy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-role.html">
   *                 AWS::IAM::Role</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-user.html">
   *                 AWS::IAM::User</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-usertogroupaddition.html">AWS::IAM::UserToGroupAddition</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities">Acknowledging IAM resources in CloudFormation templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some template contain macros. Macros perform custom processing on templates; this can
   *           include simple actions like find-and-replace operations, all the way to extensive
   *           transformations of entire templates. Because of this, users typically create a change set
   *           from the processed template, so that they can review the changes resulting from the macros
   *           before actually creating the stack. If your stack template contains one or more macros,
   *           and you choose to create a stack directly from the processed template, without first
   *           reviewing the resulting changes in a change set, you must acknowledge this capability.
   *           This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-include.html">AWS::Include</a>
   *           and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.</p>
   *                <note>
   *                   <p>This capacity doesn't apply to creating change sets, and specifying it when creating
   *             change sets has no effect.</p>
   *                   <p>If you want to create a stack from a stack template that contains macros
   *               <i>and</i> nested stacks, you must create or update the stack directly
   *             from the template using the <a>CreateStack</a> or <a>UpdateStack</a> action, and specifying this capability.</p>
   *                </note>
   *                <p>For more information about macros, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Perform custom processing
   *             on CloudFormation templates with template macros</a>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Only one of the <code>Capabilities</code> and <code>ResourceType</code> parameters can
   *         be specified.</p>
   *          </note>
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * <p>Specifies which resource types you can work with, such as <code>AWS::EC2::Instance</code>
   *       or <code>Custom::MyCustomInstance</code>.</p>
   *          <p>If the list of resource types doesn't include a resource type that you're updating, the
   *       stack update fails. By default, CloudFormation grants permissions to all resource types. IAM
   *       uses this parameter for condition keys in IAM policies for CloudFormation. For more information,
   *       see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html">Control CloudFormation
   *         access with Identity and Access Management</a> in the <i>CloudFormation User Guide</i>.</p>
   *          <note>
   *             <p>Only one of the <code>Capabilities</code> and <code>ResourceType</code> parameters can
   *         be specified.</p>
   *          </note>
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes when executing the
   *       change set. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation
   *       uses this role for all future operations on the stack. Provided that users have permission to
   *       operate on the stack, CloudFormation uses this role even if the users don't have permission to
   *       pass it. Ensure that the role grants least permission.</p>
   *          <p>If you don't specify a value, CloudFormation uses the role that was previously associated with
   *       the stack. If no role is available, CloudFormation uses a temporary session that is generated from
   *       your user credentials.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>The rollback triggers for CloudFormation to monitor during stack creation and updating
   *       operations, and for the specified monitoring period afterwards.</p>
   * @public
   */
  RollbackConfiguration?: RollbackConfiguration | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of Amazon SNS topics that CloudFormation associates with the
   *       stack. To remove all associated notification topics, specify an empty list.</p>
   * @public
   */
  NotificationARNs?: string[] | undefined;

  /**
   * <p>Key-value pairs to associate with this stack. CloudFormation also propagates these tags to
   *       resources in the stack. You can specify a maximum of 50 tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The name of the change set. The name must be unique among all change sets that are
   *       associated with the specified stack.</p>
   *          <p>A change set name can contain only alphanumeric, case sensitive characters, and hyphens.
   *       It must start with an alphabetical character and can't exceed 128 characters.</p>
   * @public
   */
  ChangeSetName: string | undefined;

  /**
   * <p>A unique identifier for this <code>CreateChangeSet</code> request. Specify this token if
   *       you plan to retry requests so that CloudFormation knows that you're not attempting to create
   *       another change set with the same name. You might retry <code>CreateChangeSet</code> requests
   *       to ensure that CloudFormation successfully received them.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>A description to help you identify this change set.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of change set operation. To create a change set for a new stack, specify
   *         <code>CREATE</code>. To create a change set for an existing stack, specify
   *         <code>UPDATE</code>. To create a change set for an import operation, specify
   *         <code>IMPORT</code>.</p>
   *          <p>If you create a change set for a new stack, CloudFormation creates a stack with a unique stack
   *       ID, but no template or resources. The stack will be in the <code>REVIEW_IN_PROGRESS</code>
   *       state until you execute the change set.</p>
   *          <p>By default, CloudFormation specifies <code>UPDATE</code>. You can't use the
   *         <code>UPDATE</code> type to create a change set for a new stack or the <code>CREATE</code>
   *       type to create a change set for an existing stack.</p>
   * @public
   */
  ChangeSetType?: ChangeSetType | undefined;

  /**
   * <p>The resources to import into your stack.</p>
   * @public
   */
  ResourcesToImport?: ResourceToImport[] | undefined;

  /**
   * <p>Creates a change set for the all nested stacks specified in the template. The default
   *       behavior of this action is set to <code>False</code>. To include nested sets in a change set,
   *       specify <code>True</code>.</p>
   * @public
   */
  IncludeNestedStacks?: boolean | undefined;

  /**
   * <p>Determines what action will be taken if stack creation fails. If this parameter is
   *       specified, the <code>DisableRollback</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API operation must not be specified. This must be one of these
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETE</code> - Deletes the change set if the stack creation fails. This is only
   *           valid when the <code>ChangeSetType</code> parameter is set to <code>CREATE</code>. If the
   *           deletion of the stack fails, the status of the stack is <code>DELETE_FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DO_NOTHING</code> - if the stack creation fails, do nothing. This is equivalent
   *           to specifying <code>true</code> for the <code>DisableRollback</code> parameter to the
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROLLBACK</code> - if the stack creation fails, roll back the stack. This is
   *           equivalent to specifying <code>false</code> for the <code>DisableRollback</code> parameter
   *           to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API operation.</p>
   *             </li>
   *          </ul>
   *          <p>For nested stacks, when the <code>OnStackFailure</code> parameter is set to
   *         <code>DELETE</code> for the change set for the parent stack, any failure in a child stack
   *       will cause the parent stack creation to fail and all stacks to be deleted.</p>
   * @public
   */
  OnStackFailure?: OnStackFailure | undefined;

  /**
   * <p>Indicates if the change set auto-imports resources that already exist. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/import-resources-automatically.html">Import Amazon Web Services
   *         resources into a CloudFormation stack automatically</a> in the
   *         <i>CloudFormation User Guide</i>.</p>
   *          <note>
   *             <p>This parameter can only import resources that have custom names in templates. For more
   *         information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-properties-name.html">name
   *           type</a> in the <i>CloudFormation User Guide</i>. To import resources that do not
   *         accept custom names, such as EC2 instances, use the <code>ResourcesToImport</code> parameter
   *         instead.</p>
   *          </note>
   * @public
   */
  ImportExistingResources?: boolean | undefined;

  /**
   * <p>Determines how CloudFormation handles configuration drift during deployment.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REVERT_DRIFT</code> – Creates a drift-aware change set that brings actual
   *           resource states in line with template definitions. Provides a three-way comparison between
   *           actual state, previous deployment state, and desired state.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/drift-aware-change-sets.html">Using drift-aware
   *         change sets</a> in the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  DeploymentMode?: DeploymentMode | undefined;
}

/**
 * <p>The output for the <a>CreateChangeSet</a> action.</p>
 * @public
 */
export interface CreateChangeSetOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the change set.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The unique ID of the stack.</p>
   * @public
   */
  StackId?: string | undefined;
}

/**
 * <p>The template contains resources with capabilities that weren't specified in the Capabilities parameter.</p>
 * @public
 */
export class InsufficientCapabilitiesException extends __BaseException {
  readonly name: "InsufficientCapabilitiesException" = "InsufficientCapabilitiesException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The quota for the resource has already been reached.</p>
 *          <p>For information about resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation quotas</a> in the
 *    <i>CloudFormation User Guide</i>.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>No more than 5 generated templates can be in an <code>InProgress</code> or <code>Pending</code> status at one
 *    time. This error is also returned if a generated template that is in an <code>InProgress</code> or
 *    <code>Pending</code> status is attempted to be updated or deleted.</p>
 * @public
 */
export class ConcurrentResourcesLimitExceededException extends __BaseException {
  readonly name: "ConcurrentResourcesLimitExceededException" = "ConcurrentResourcesLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentResourcesLimitExceededException, __BaseException>) {
    super({
      name: "ConcurrentResourcesLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentResourcesLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource included in a generated template. This data type is used with the
 *     <code>CreateGeneratedTemplate</code> and <code>UpdateGeneratedTemplate</code> API
 *    actions.</p>
 * @public
 */
export interface ResourceDefinition {
  /**
   * <p>The type of the resource, such as <code>AWS::DynamoDB::Table</code>. For the list of
   *    supported resources, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html">Resource type
   *     support for imports and drift detection</a> in the
   *    <i>CloudFormation User Guide</i>
   *          </p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>The logical resource id for this resource in the generated template.</p>
   * @public
   */
  LogicalResourceId?: string | undefined;

  /**
   * <p>A list of up to 256 key-value pairs that identifies the scanned resource. The key is the
   *    name of one of the primary identifiers for the resource. (Primary identifiers are specified in
   *    the <code>primaryIdentifier</code> list in the resource schema.) The value is the value of that
   *    primary identifier. For example, for a <code>AWS::DynamoDB::Table</code> resource, the primary
   *    identifiers is <code>TableName</code> so the key-value pair could be <code>"TableName":
   *     "MyDDBTable"</code>. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-primaryidentifier">primaryIdentifier</a> in the <i>CloudFormation Command Line Interface (CLI) User Guide</i>.</p>
   * @public
   */
  ResourceIdentifier: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const GeneratedTemplateDeletionPolicy = {
  DELETE: "DELETE",
  RETAIN: "RETAIN",
} as const;

/**
 * @public
 */
export type GeneratedTemplateDeletionPolicy =
  (typeof GeneratedTemplateDeletionPolicy)[keyof typeof GeneratedTemplateDeletionPolicy];

/**
 * @public
 * @enum
 */
export const GeneratedTemplateUpdateReplacePolicy = {
  DELETE: "DELETE",
  RETAIN: "RETAIN",
} as const;

/**
 * @public
 */
export type GeneratedTemplateUpdateReplacePolicy =
  (typeof GeneratedTemplateUpdateReplacePolicy)[keyof typeof GeneratedTemplateUpdateReplacePolicy];

/**
 * <p>The configuration details of a generated template.</p>
 * @public
 */
export interface TemplateConfiguration {
  /**
   * <p>The <code>DeletionPolicy</code> assigned to resources in the generated template. Supported
   *    values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETE</code> - delete all resources when the stack is deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RETAIN</code> - retain all resources when the stack is deleted.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html">DeletionPolicy
   *     attribute</a> in the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  DeletionPolicy?: GeneratedTemplateDeletionPolicy | undefined;

  /**
   * <p>The <code>UpdateReplacePolicy</code> assigned to resources in the generated template.
   *    Supported values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETE</code> - delete all resources when the resource is replaced during an update
   *      operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RETAIN</code> - retain all resources when the resource is replaced during an update
   *      operation.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html">UpdateReplacePolicy attribute</a> in the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  UpdateReplacePolicy?: GeneratedTemplateUpdateReplacePolicy | undefined;
}

/**
 * @public
 */
export interface CreateGeneratedTemplateInput {
  /**
   * <p>An optional list of resources to be included in the generated template.</p>
   *          <p>If no resources are specified,the template will be created without any resources.
   *       Resources can be added to the template using the <code>UpdateGeneratedTemplate</code> API
   *       action.</p>
   * @public
   */
  Resources?: ResourceDefinition[] | undefined;

  /**
   * <p>The name assigned to the generated template.</p>
   * @public
   */
  GeneratedTemplateName: string | undefined;

  /**
   * <p>An optional name or ARN of a stack to use as the base stack for the generated
   *       template.</p>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>The configuration details of the generated template, including the
   *         <code>DeletionPolicy</code> and <code>UpdateReplacePolicy</code>.</p>
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateGeneratedTemplateOutput {
  /**
   * <p>The ID of the generated template.</p>
   * @public
   */
  GeneratedTemplateId?: string | undefined;
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
 * <p>The input for <a>CreateStack</a> action.</p>
 * @public
 */
export interface CreateStackInput {
  /**
   * <p>The name that's associated with the stack. The name must be unique in the Region in which
   *       you are creating the stack.</p>
   *          <note>
   *             <p>A stack name can contain only alphanumeric characters (case sensitive) and hyphens. It
   *         must start with an alphabetical character and can't be longer than 128 characters.</p>
   *          </note>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>Structure that contains the template body with a minimum length of 1 byte and a maximum
   *       length of 51,200 bytes.</p>
   *          <p>Conditional: You must specify either <code>TemplateBody</code> or
   *       <code>TemplateURL</code>, but not both.</p>
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * <p>The URL of a file that contains the template body. The URL must point to a template (max
   *       size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. The location for
   *       an Amazon S3 bucket must start with <code>https://</code>. URLs from S3 static websites are not
   *       supported.</p>
   *          <p>Conditional: You must specify either the <code>TemplateBody</code> or the
   *         <code>TemplateURL</code> parameter, but not both.</p>
   * @public
   */
  TemplateURL?: string | undefined;

  /**
   * <p>A list of <code>Parameter</code> structures that specify input parameters for the stack.
   *       For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data
   *       type.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>Set to <code>true</code> to disable rollback of the stack if stack creation failed. You
   *       can specify either <code>DisableRollback</code> or <code>OnFailure</code>, but not
   *       both.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  DisableRollback?: boolean | undefined;

  /**
   * <p>The rollback triggers for CloudFormation to monitor during stack creation and updating
   *       operations, and for the specified monitoring period afterwards.</p>
   * @public
   */
  RollbackConfiguration?: RollbackConfiguration | undefined;

  /**
   * <p>The amount of time that can pass before the stack status becomes
   *         <code>CREATE_FAILED</code>; if <code>DisableRollback</code> is not set or is set to
   *         <code>false</code>, the stack will be rolled back.</p>
   * @public
   */
  TimeoutInMinutes?: number | undefined;

  /**
   * <p>The Amazon SNS topic ARNs to publish stack related events. You can find your Amazon SNS topic ARNs
   *       using the Amazon SNS console or your Command Line Interface (CLI).</p>
   * @public
   */
  NotificationARNs?: string[] | undefined;

  /**
   * <p>In some cases, you must explicitly acknowledge that your stack template contains certain
   *       capabilities in order for CloudFormation to create the stack.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in your
   *           Amazon Web Services account; for example, by creating new IAM users. For those stacks, you must
   *           explicitly acknowledge this by specifying one of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the
   *             <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i>
   *               specify <code>CAPABILITY_NAMED_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
   *                 <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we recommend that you review all
   *           permissions associated with them and edit their permissions if necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-accesskey.html">AWS::IAM::AccessKey</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-group.html">AWS::IAM::Group</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-managedpolicy.html"> AWS::IAM::ManagedPolicy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-policy.html">AWS::IAM::Policy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-role.html">AWS::IAM::Role</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-user.html">AWS::IAM::User</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-usertogroupaddition.html">AWS::IAM::UserToGroupAddition</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities">Acknowledging IAM resources in CloudFormation templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some template contain macros. Macros perform custom processing on templates; this can
   *           include simple actions like find-and-replace operations, all the way to extensive
   *           transformations of entire templates. Because of this, users typically create a change set
   *           from the processed template, so that they can review the changes resulting from the macros
   *           before actually creating the stack. If your stack template contains one or more macros,
   *           and you choose to create a stack directly from the processed template, without first
   *           reviewing the resulting changes in a change set, you must acknowledge this capability.
   *           This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-include.html">AWS::Include</a>
   *           and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.</p>
   *                <p>If you want to create a stack from a stack template that contains macros
   *             <i>and</i> nested stacks, you must create the stack directly from the
   *           template using this capability.</p>
   *                <important>
   *                   <p>You should only create stacks directly from a stack template that contains macros if
   *             you know what processing the macro performs.</p>
   *                   <p>Each macro relies on an underlying Lambda service function for processing stack
   *             templates. Be aware that the Lambda function owner can update the function operation
   *             without CloudFormation being notified.</p>
   *                </important>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Perform custom processing
   *             on CloudFormation templates with template macros</a>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Only one of the <code>Capabilities</code> and <code>ResourceType</code> parameters can
   *         be specified.</p>
   *          </note>
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * <p>Specifies which resource types you can work with, such as <code>AWS::EC2::Instance</code>
   *       or <code>Custom::MyCustomInstance</code>.</p>
   *          <p>If the list of resource types doesn't include a resource that you're creating, the stack
   *       creation fails. By default, CloudFormation grants permissions to all resource types. IAM uses
   *       this parameter for CloudFormation-specific condition keys in IAM policies. For more information,
   *       see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html">Control CloudFormation
   *         access with Identity and Access Management</a>.</p>
   *          <note>
   *             <p>Only one of the <code>Capabilities</code> and <code>ResourceType</code> parameters can
   *         be specified.</p>
   *          </note>
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to create the
   *       stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always
   *       uses this role for all future operations on the stack. Provided that users have permission to
   *       operate on the stack, CloudFormation uses this role even if the users don't have permission to
   *       pass it. Ensure that the role grants least privilege.</p>
   *          <p>If you don't specify a value, CloudFormation uses the role that was previously associated with
   *       the stack. If no role is available, CloudFormation uses a temporary session that's generated from
   *       your user credentials.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>Determines what action will be taken if stack creation fails. This must be one of:
   *         <code>DO_NOTHING</code>, <code>ROLLBACK</code>, or <code>DELETE</code>. You can specify
   *       either <code>OnFailure</code> or <code>DisableRollback</code>, but not both.</p>
   *          <note>
   *             <p>Although the default setting is <code>ROLLBACK</code>, there is one exception. This
   *         exception occurs when a StackSet attempts to deploy a stack instance and the stack instance
   *         fails to create successfully. In this case, the <code>CreateStack</code> call overrides the
   *         default setting and sets the value of <code>OnFailure</code> to <code>DELETE</code>.</p>
   *          </note>
   *          <p>Default: <code>ROLLBACK</code>
   *          </p>
   * @public
   */
  OnFailure?: OnFailure | undefined;

  /**
   * <p>Structure that contains the stack policy body. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html">Prevent updates to stack resources</a> in the <i>CloudFormation User Guide</i>.
   *       You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code>
   *       parameter, but not both.</p>
   * @public
   */
  StackPolicyBody?: string | undefined;

  /**
   * <p>Location of a file that contains the stack policy. The URL must point to a policy (maximum
   *       size: 16 KB) located in an S3 bucket in the same Region as the stack. The location for an Amazon S3
   *       bucket must start with <code>https://</code>. URLs from S3 static websites are not
   *       supported.</p>
   *          <p>You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code>
   *       parameter, but not both.</p>
   * @public
   */
  StackPolicyURL?: string | undefined;

  /**
   * <p>Key-value pairs to associate with this stack. CloudFormation also propagates these tags to the
   *       resources created in the stack. A maximum number of 50 tags can be specified.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A unique identifier for this <code>CreateStack</code> request. Specify this token if you
   *       plan to retry requests so that CloudFormation knows that you're not attempting to create a stack
   *       with the same name. You might retry <code>CreateStack</code> requests to ensure that
   *       CloudFormation successfully received them.</p>
   *          <p>All events initiated by a given stack operation are assigned the same client request
   *       token, which you can use to track operations. For example, if you execute a
   *         <code>CreateStack</code> operation with the token <code>token1</code>, then all the
   *         <code>StackEvents</code> generated by that operation will have
   *         <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab. Stack
   *       operations that are initiated from the console use the token format
   *         <i>Console-StackOperation-ID</i>, which helps you easily identify the stack
   *       operation . For example, if you create a stack using the console, each stack event would be
   *       assigned the same token in the following format:
   *         <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Whether to enable termination protection on the specified stack. If a user attempts to
   *       delete a stack with termination protection enabled, the operation fails and the stack remains
   *       unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protect CloudFormation
   *         stacks from being deleted</a> in the <i>CloudFormation User Guide</i>. Termination
   *       protection is deactivated on stacks by default.</p>
   *          <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>,
   *       termination protection is set on the root stack and can't be changed directly on the nested
   *       stack.</p>
   * @public
   */
  EnableTerminationProtection?: boolean | undefined;

  /**
   * <p>When set to <code>true</code>, newly created resources are deleted when the operation
   *       rolls back. This includes newly created resources marked with a deletion policy of
   *         <code>Retain</code>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  RetainExceptOnCreate?: boolean | undefined;
}

/**
 * <p>The output for a <a>CreateStack</a> action.</p>
 * @public
 */
export interface CreateStackOutput {
  /**
   * <p>Unique identifier of the stack.</p>
   * @public
   */
  StackId?: string | undefined;

  /**
   * <p>A unique identifier for this stack operation that can be used to track the operation's
   *       progress and events.</p>
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * <p>Specifies the Organizations accounts where you want to create, update, or delete
 *    stack instances. You can target either your entire organization or specific accounts using
 *    organizational units (OUs) and account filter options.</p>
 *          <p>CloudFormation doesn't deploy stack instances to the organization management account, even if the organization management account is in your organization or in an OU
 *    in your organization.</p>
 *          <p>When performing create operations, if you specify both <code>OrganizationalUnitIds</code>
 *    and <code>Accounts</code>, you must also specify the <code>AccountFilterType</code> property.</p>
 * @public
 */
export interface DeploymentTargets {
  /**
   * <p>The Amazon Web Services account IDs where you want to perform stack operations. How these accounts are
   *    used depends on the <code>AccountFilterType</code> property.</p>
   *          <p>If you have many account numbers, you can provide those accounts using the
   *     <code>AccountsUrl</code> property instead.</p>
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * <p>The Amazon S3 URL path to a file that contains a list of Amazon Web Services account IDs. The file
   *    format must be either <code>.csv</code> or <code>.txt</code>, and the data can be comma-separated
   *    or new-line-separated. There is currently a 10MB limit for the data (approximately 800,000
   *    accounts).</p>
   *          <p>This property serves the same purpose as <code>Accounts</code> but allows you to specify a
   *    large number of accounts.</p>
   * @public
   */
  AccountsUrl?: string | undefined;

  /**
   * <p>The organization root ID or organizational unit (OU) IDs where you want to perform stack
   *    operations. CloudFormation will perform operations on accounts within these OUs and their child
   *    OUs.</p>
   * @public
   */
  OrganizationalUnitIds?: string[] | undefined;

  /**
   * <p>Refines which accounts will have stack operations performed on them by specifying how to use
   *    the <code>Accounts</code> and <code>OrganizationalUnitIds</code> properties together.</p>
   *          <p>The following values determine how CloudFormation selects target accounts:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INTERSECTION</code>: Performs stack operations only on specific individual accounts
   *      within the selected OUs. Only accounts that are both specified in the <code>Accounts</code>
   *      property and belong to the specified OUs will be targeted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIFFERENCE</code>: Performs stack operations on all accounts in the selected OUs
   *      except for specific accounts listed in the <code>Accounts</code> property. This enables you to
   *      exclude certain accounts within an OU, such as suspended accounts.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNION</code>: Performs stack operations on the specified OUs plus additional
   *      individual accounts listed in the <code>Accounts</code> property. This is the default value if
   *       <code>AccountFilterType</code> is not provided. This lets you target an entire OU and
   *      individual accounts from a different OU in one request. Note that <code>UNION</code> is not
   *      supported for <code>CreateStackInstances</code> operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: Performs stack operations on all accounts in the specified
   *      organizational units (OUs).</p>
   *             </li>
   *          </ul>
   * @public
   */
  AccountFilterType?: AccountFilterType | undefined;
}

/**
 * @public
 * @enum
 */
export const ConcurrencyMode = {
  SOFT_FAILURE_TOLERANCE: "SOFT_FAILURE_TOLERANCE",
  STRICT_FAILURE_TOLERANCE: "STRICT_FAILURE_TOLERANCE",
} as const;

/**
 * @public
 */
export type ConcurrencyMode = (typeof ConcurrencyMode)[keyof typeof ConcurrencyMode];

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
 * <p>The user-specified preferences for how CloudFormation performs a StackSet operation.</p>
 *          <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">StackSet
 *     operation options</a>.</p>
 *          <note>
 *             <p>
 *                <code>StackSetOperationPreferences</code> don't apply to <code>AutoDeployment</code>, even
 *     if it's enabled.</p>
 *          </note>
 * @public
 */
export interface StackSetOperationPreferences {
  /**
   * <p>The concurrency type of deploying StackSets operations in Regions, could be in parallel or
   *    one Region at a time.</p>
   * @public
   */
  RegionConcurrencyType?: RegionConcurrencyType | undefined;

  /**
   * <p>The order of the Regions where you want to perform the stack operation.</p>
   * @public
   */
  RegionOrder?: string[] | undefined;

  /**
   * <p>The number of accounts per Region this operation can fail in before CloudFormation stops the
   *    operation in that Region. If the operation is stopped in a Region, CloudFormation doesn't attempt the
   *    operation in any subsequent Regions.</p>
   *          <p>You can specify either <code>FailureToleranceCount</code> or
   *     <code>FailureTolerancePercentage</code>, but not both.</p>
   *          <p>By default, <code>0</code> is specified.</p>
   * @public
   */
  FailureToleranceCount?: number | undefined;

  /**
   * <p>The percentage of accounts per Region this stack operation can fail in before CloudFormation
   *    stops the operation in that Region. If the operation is stopped in a Region, CloudFormation doesn't
   *    attempt the operation in any subsequent Regions.</p>
   *          <p>When calculating the number of accounts based on the specified percentage, CloudFormation rounds
   *     <i>down</i> to the next whole number.</p>
   *          <p>You can specify either <code>FailureToleranceCount</code> or
   *     <code>FailureTolerancePercentage</code>, but not both.</p>
   *          <p>By default, <code>0</code> is specified.</p>
   * @public
   */
  FailureTolerancePercentage?: number | undefined;

  /**
   * <p>The maximum number of accounts in which to perform this operation at one time. This can
   *    depend on the value of <code>FailureToleranceCount</code> depending on your
   *     <code>ConcurrencyMode</code>. <code>MaxConcurrentCount</code> is at most one more than the
   *     <code>FailureToleranceCount</code> if you're using <code>STRICT_FAILURE_TOLERANCE</code>.</p>
   *          <p>Note that this setting lets you specify the <i>maximum</i> for operations. For
   *    large deployments, under certain circumstances the actual number of accounts acted upon
   *    concurrently may be lower due to service throttling.</p>
   *          <p>You can specify either <code>MaxConcurrentCount</code> or
   *     <code>MaxConcurrentPercentage</code>, but not both.</p>
   *          <p>By default, <code>1</code> is specified.</p>
   * @public
   */
  MaxConcurrentCount?: number | undefined;

  /**
   * <p>The maximum percentage of accounts in which to perform this operation at one time.</p>
   *          <p>When calculating the number of accounts based on the specified percentage, CloudFormation rounds
   *    down to the next whole number. This is true except in cases where rounding down would result is
   *    zero. In this case, CloudFormation sets the number as one instead.</p>
   *          <p>Note that this setting lets you specify the <i>maximum</i> for operations. For
   *    large deployments, under certain circumstances the actual number of accounts acted upon
   *    concurrently may be lower due to service throttling.</p>
   *          <p>You can specify either <code>MaxConcurrentCount</code> or
   *     <code>MaxConcurrentPercentage</code>, but not both.</p>
   *          <p>By default, <code>1</code> is specified.</p>
   * @public
   */
  MaxConcurrentPercentage?: number | undefined;

  /**
   * <p>Specifies how the concurrency level behaves during the operation execution.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STRICT_FAILURE_TOLERANCE</code>: This option dynamically lowers the concurrency
   *      level to ensure the number of failed accounts never exceeds the value of
   *       <code>FailureToleranceCount</code> +1. The initial actual concurrency is set to the lower of
   *      either the value of the <code>MaxConcurrentCount</code>, or the value of
   *       <code>FailureToleranceCount</code> +1. The actual concurrency is then reduced proportionally
   *      by the number of failures. This is the default behavior.</p>
   *                <p>If failure tolerance or Maximum concurrent accounts are set to percentages, the behavior
   *      is similar.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SOFT_FAILURE_TOLERANCE</code>: This option decouples
   *       <code>FailureToleranceCount</code> from the actual concurrency. This allows StackSet
   *      operations to run at the concurrency level set by the <code>MaxConcurrentCount</code> value, or
   *       <code>MaxConcurrentPercentage</code>, regardless of the number of failures.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ConcurrencyMode?: ConcurrencyMode | undefined;
}

/**
 * @public
 */
export interface CreateStackInstancesInput {
  /**
   * <p>The name or unique ID of the StackSet that you want to create stack instances from.</p>
   * @public
   */
  StackSetName: string | undefined;

  /**
   * <p>[Self-managed permissions] The account IDs of one or more Amazon Web Services accounts that you want to
   *       create stack instances in the specified Region(s) for.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not
   *       both.</p>
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * <p>[Service-managed permissions] The Organizations accounts in which to create stack
   *       instances in the specified Amazon Web Services Regions.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not
   *       both.</p>
   * @public
   */
  DeploymentTargets?: DeploymentTargets | undefined;

  /**
   * <p>The names of one or more Amazon Web Services Regions where you want to create stack instances using the
   *       specified Amazon Web Services accounts.</p>
   * @public
   */
  Regions: string[] | undefined;

  /**
   * <p>A list of StackSet parameters whose values you want to override in the selected stack
   *       instances.</p>
   *          <p>Any overridden parameter values will be applied to all stack instances in the specified
   *       accounts and Amazon Web Services Regions. When specifying parameters and their values, be aware of how
   *       CloudFormation sets parameter values during stack instance operations:</p>
   *          <ul>
   *             <li>
   *                <p>To override the current value for a parameter, include the parameter and specify its
   *           value.</p>
   *             </li>
   *             <li>
   *                <p>To leave an overridden parameter set to its present value, include the parameter and
   *           specify <code>UsePreviousValue</code> as <code>true</code>. (You can't specify both a
   *           value and set <code>UsePreviousValue</code> to <code>true</code>.)</p>
   *             </li>
   *             <li>
   *                <p>To set an overridden parameter back to the value specified in the StackSet, specify a
   *           parameter list but don't include the parameter in the list.</p>
   *             </li>
   *             <li>
   *                <p>To leave all parameters set to their present values, don't specify this property at
   *           all.</p>
   *             </li>
   *          </ul>
   *          <p>During StackSet updates, any parameter values overridden for a stack instance aren't
   *       updated, but retain their overridden value.</p>
   *          <p>You can only override the parameter <i>values</i> that are specified in the
   *       StackSet; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a>
   *       to update the StackSet template.</p>
   * @public
   */
  ParameterOverrides?: Parameter[] | undefined;

  /**
   * <p>Preferences for how CloudFormation performs this StackSet operation.</p>
   * @public
   */
  OperationPreferences?: StackSetOperationPreferences | undefined;

  /**
   * <p>The unique identifier for this StackSet operation.</p>
   *          <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation
   *       performs the StackSet operation only once, even if you retry the request multiple times. You
   *       might retry StackSet operation requests to ensure that CloudFormation successfully received
   *       them.</p>
   *          <p>If you don't specify an operation ID, the SDK generates one
   *       automatically.</p>
   *          <p>Repeating this StackSet operation with a new operation ID retries all stack instances
   *       whose status is <code>OUTDATED</code>.</p>
   * @public
   */
  OperationId?: string | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator
   *       in the organization's management account or as a delegated administrator in a
   *       member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *             <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * @public
 */
export interface CreateStackInstancesOutput {
  /**
   * <p>The unique identifier for this StackSet operation.</p>
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * <p>The specified operation ID already exists.</p>
 * @public
 */
export class OperationIdAlreadyExistsException extends __BaseException {
  readonly name: "OperationIdAlreadyExistsException" = "OperationIdAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>Another operation is currently in progress for this StackSet. Only one operation can be performed for a stack
 *    set at a given time.</p>
 * @public
 */
export class OperationInProgressException extends __BaseException {
  readonly name: "OperationInProgressException" = "OperationInProgressException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The specified StackSet doesn't exist.</p>
 * @public
 */
export class StackSetNotFoundException extends __BaseException {
  readonly name: "StackSetNotFoundException" = "StackSetNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>Another operation has been performed on this StackSet since the specified operation was performed.</p>
 * @public
 */
export class StaleRequestException extends __BaseException {
  readonly name: "StaleRequestException" = "StaleRequestException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The location of the resource in a stack template.</p>
 * @public
 */
export interface ResourceLocation {
  /**
   * <p>The name associated with the stack.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The logical name of the resource specified in the template.</p>
   * @public
   */
  LogicalResourceId: string | undefined;
}

/**
 * <p>Specifies the current source of the resource and the destination of where it will be moved
 *    to.</p>
 * @public
 */
export interface ResourceMapping {
  /**
   * <p>The source stack <code>StackName</code> and <code>LogicalResourceId</code> for the resource
   *    being refactored.</p>
   * @public
   */
  Source: ResourceLocation | undefined;

  /**
   * <p>The destination stack <code>StackName</code> and <code>LogicalResourceId</code> for the
   *    resource being refactored.</p>
   * @public
   */
  Destination: ResourceLocation | undefined;
}

/**
 * <p>Describes the stack and the template used by the stack.</p>
 * @public
 */
export interface StackDefinition {
  /**
   * <p>The name associated with the stack.</p>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>The file path for the stack template file.</p>
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * <p>The desired final state of the stack template.</p>
   * @public
   */
  TemplateURL?: string | undefined;
}

/**
 * @public
 */
export interface CreateStackRefactorInput {
  /**
   * <p>A description to help you identify the stack refactor.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Determines if a new stack is created with the refactor.</p>
   * @public
   */
  EnableStackCreation?: boolean | undefined;

  /**
   * <p>The mappings for the stack resource <code>Source</code> and stack resource
   *         <code>Destination</code>.</p>
   * @public
   */
  ResourceMappings?: ResourceMapping[] | undefined;

  /**
   * <p>The stacks being refactored.</p>
   * @public
   */
  StackDefinitions: StackDefinition[] | undefined;
}

/**
 * @public
 */
export interface CreateStackRefactorOutput {
  /**
   * <p>The ID associated with the stack refactor created from the <a>CreateStackRefactor</a> action.</p>
   * @public
   */
  StackRefactorId: string | undefined;
}

/**
 * <p>The specified resource exists, but has been changed.</p>
 * @public
 */
export class CreatedButModifiedException extends __BaseException {
  readonly name: "CreatedButModifiedException" = "CreatedButModifiedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>Describes whether StackSets performs non-conflicting operations concurrently and queues
 *    conflicting operations.</p>
 * @public
 */
export interface ManagedExecution {
  /**
   * <p>When <code>true</code>, CloudFormation performs non-conflicting operations concurrently and
   *    queues conflicting operations. After conflicting operations finish, CloudFormation starts queued
   *    operations in request order.</p>
   *          <note>
   *             <p>If there are already running or queued operations, CloudFormation queues all incoming
   *     operations even if they are non-conflicting.</p>
   *             <p>You can't modify your StackSet's execution configuration while there are running or queued
   *     operations for that StackSet.</p>
   *          </note>
   *          <p>When <code>false</code> (default), StackSets performs one operation at a time in request
   *    order.</p>
   * @public
   */
  Active?: boolean | undefined;
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
   * <p>The name to associate with the StackSet. The name must be unique in the Region where you
   *       create your StackSet.</p>
   *          <note>
   *             <p>A stack name can contain only alphanumeric characters (case-sensitive) and hyphens. It
   *         must start with an alphabetic character and can't be longer than 128 characters.</p>
   *          </note>
   * @public
   */
  StackSetName: string | undefined;

  /**
   * <p>A description of the StackSet. You can use the description to identify the StackSet's
   *       purpose or other important information.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The structure that contains the template body, with a minimum length of 1 byte and a
   *       maximum length of 51,200 bytes.</p>
   *          <p>Conditional: You must specify either the <code>TemplateBody</code> or the
   *         <code>TemplateURL</code> parameter, but not both.</p>
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * <p>The URL of a file that contains the template body. The URL must point to a template
   *       (maximum size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. The
   *       location for an Amazon S3 bucket must start with <code>https://</code>. S3 static website URLs are
   *       not supported.</p>
   *          <p>Conditional: You must specify either the <code>TemplateBody</code> or the
   *         <code>TemplateURL</code> parameter, but not both.</p>
   * @public
   */
  TemplateURL?: string | undefined;

  /**
   * <p>The stack ID you are importing into a new StackSet. Specify the Amazon Resource Name (ARN)
   *       of the stack.</p>
   * @public
   */
  StackId?: string | undefined;

  /**
   * <p>The input parameters for the StackSet template.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>In some cases, you must explicitly acknowledge that your StackSet template contains
   *       certain capabilities in order for CloudFormation to create the StackSet and related stack
   *       instances.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in your
   *           Amazon Web Services account; for example, by creating new IAM users. For those StackSets, you must
   *           explicitly acknowledge this by specifying one of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the
   *             <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i>
   *               specify <code>CAPABILITY_NAMED_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
   *                 <code>InsufficientCapabilities</code> error.</p>
   *                   </li>
   *                </ul>
   *                <p>If your stack template contains these resources, we recommend that you review all
   *           permissions associated with them and edit their permissions if necessary.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-accesskey.html">AWS::IAM::AccessKey</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-group.html">AWS::IAM::Group</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-instanceprofile.html">AWS::IAM::InstanceProfile</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-policy.html">AWS::IAM::Policy</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-role.html">AWS::IAM::Role</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-user.html">AWS::IAM::User</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-usertogroupaddition.html">AWS::IAM::UserToGroupAddition</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities">Acknowledging IAM resources in CloudFormation templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some templates reference macros. If your StackSet template references one or more
   *           macros, you must create the StackSet directly from the processed template, without first
   *           reviewing the resulting changes in a change set. To create the StackSet directly, you must
   *           acknowledge this capability. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Perform custom processing
   *             on CloudFormation templates with template macros</a>.</p>
   *                <important>
   *                   <p>StackSets with service-managed permissions don't currently support the use of macros
   *             in templates. (This includes the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-include.html">AWS::Include</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.) Even if
   *             you specify this capability for a StackSet with service-managed permissions, if you
   *             reference a macro in your template the StackSet operation will fail.</p>
   *                </important>
   *             </li>
   *          </ul>
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * <p>The key-value pairs to associate with this StackSet and the stacks created from it.
   *       CloudFormation also propagates these tags to supported resources that are created in the stacks. A
   *       maximum number of 50 tags can be specified.</p>
   *          <p>If you specify tags as part of a <code>CreateStackSet</code> action, CloudFormation checks to
   *       see if you have the required IAM permission to tag resources. If you don't, the entire
   *         <code>CreateStackSet</code> action fails with an <code>access denied</code> error, and the
   *       StackSet is not created.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to use to create this StackSet.</p>
   *          <p>Specify an IAM role only if you are using customized administrator roles to control
   *       which users or groups can manage specific StackSets within the same administrator account. For
   *       more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant
   *         self-managed permissions</a> in the <i>CloudFormation User Guide</i>.</p>
   *          <p>Valid only if the permissions model is <code>SELF_MANAGED</code>.</p>
   * @public
   */
  AdministrationRoleARN?: string | undefined;

  /**
   * <p>The name of the IAM execution role to use to create the StackSet. If you do not specify
   *       an execution role, CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code>
   *       role for the StackSet operation.</p>
   *          <p>Specify an IAM role only if you are using customized execution roles to control which
   *       stack resources users and groups can include in their StackSets.</p>
   *          <p>Valid only if the permissions model is <code>SELF_MANAGED</code>.</p>
   * @public
   */
  ExecutionRoleName?: string | undefined;

  /**
   * <p>Describes how the IAM roles required for StackSet operations are created. By default,
   *         <code>SELF-MANAGED</code> is specified.</p>
   *          <ul>
   *             <li>
   *                <p>With <code>self-managed</code> permissions, you must create the administrator and
   *           execution roles required to deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant
   *             self-managed permissions</a>.</p>
   *             </li>
   *             <li>
   *                <p>With <code>service-managed</code> permissions, StackSets automatically creates the
   *           IAM roles required to deploy to accounts managed by Organizations. For more
   *           information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate-trusted-access.html">Activate trusted access for StackSets with Organizations</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PermissionModel?: PermissionModels | undefined;

  /**
   * <p>Describes whether StackSets automatically deploys to Organizations accounts that
   *       are added to the target organization or organizational unit (OU). For more information, see
   *         <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-manage-auto-deployment.html">Enable or disable automatic deployments for StackSets in Organizations</a>
   *       in the <i>CloudFormation User Guide</i>.</p>
   *          <p>Required if the permissions model is <code>SERVICE_MANAGED</code>. (Not used with
   *       self-managed permissions.)</p>
   * @public
   */
  AutoDeployment?: AutoDeployment | undefined;

  /**
   * <p>Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>To create a StackSet with service-managed permissions while signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>To create a StackSet with service-managed permissions while signed in to a delegated
   *           administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated admin in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>StackSets with service-managed permissions are created in the management account, including StackSets that are created by delegated administrators.</p>
   *          <p>Valid only if the permissions model is <code>SERVICE_MANAGED</code>.</p>
   * @public
   */
  CallAs?: CallAs | undefined;

  /**
   * <p>A unique identifier for this <code>CreateStackSet</code> request. Specify this token if
   *       you plan to retry requests so that CloudFormation knows that you're not attempting to create
   *       another StackSet with the same name. You might retry <code>CreateStackSet</code> requests to
   *       ensure that CloudFormation successfully received them.</p>
   *          <p>If you don't specify an operation ID, the SDK generates one
   *       automatically.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Describes whether CloudFormation performs non-conflicting operations concurrently and queues
   *       conflicting operations.</p>
   * @public
   */
  ManagedExecution?: ManagedExecution | undefined;
}

/**
 * @public
 */
export interface CreateStackSetOutput {
  /**
   * <p>The ID of the StackSet that you're creating.</p>
   * @public
   */
  StackSetId?: string | undefined;
}

/**
 * <p>The specified name is already in use.</p>
 * @public
 */
export class NameAlreadyExistsException extends __BaseException {
  readonly name: "NameAlreadyExistsException" = "NameAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
   * <p>The type name of the extension in this account and Region. If you specified a type name
   *       alias when enabling the extension, use the type name alias.</p>
   *          <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and
   *         <code>Type</code>.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The extension type.</p>
   *          <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and
   *         <code>Type</code>.</p>
   * @public
   */
  Type?: ThirdPartyType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the extension in this account and Region.</p>
   *          <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and
   *         <code>Type</code>.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeactivateTypeOutput {}

/**
 * <p>The input for the <a>DeleteChangeSet</a> action.</p>
 * @public
 */
export interface DeleteChangeSetInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the change set that you want to delete.</p>
   * @public
   */
  ChangeSetName: string | undefined;

  /**
   * <p>If you specified the name of a change set to delete, specify the stack name or Amazon
   *       Resource Name (ARN) that's associated with it.</p>
   * @public
   */
  StackName?: string | undefined;
}

/**
 * <p>The output for the <a>DeleteChangeSet</a> action.</p>
 * @public
 */
export interface DeleteChangeSetOutput {}

/**
 * <p>The specified change set can't be used to update the stack. For example, the change set status might be
 *    <code>CREATE_IN_PROGRESS</code>, or the stack status might be <code>UPDATE_IN_PROGRESS</code>.</p>
 * @public
 */
export class InvalidChangeSetStatusException extends __BaseException {
  readonly name: "InvalidChangeSetStatusException" = "InvalidChangeSetStatusException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 */
export interface DeleteGeneratedTemplateInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of a generated template.</p>
   * @public
   */
  GeneratedTemplateName: string | undefined;
}

/**
 * <p>The generated template was not found.</p>
 * @public
 */
export class GeneratedTemplateNotFoundException extends __BaseException {
  readonly name: "GeneratedTemplateNotFoundException" = "GeneratedTemplateNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GeneratedTemplateNotFoundException, __BaseException>) {
    super({
      name: "GeneratedTemplateNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GeneratedTemplateNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const DeletionMode = {
  FORCE_DELETE_STACK: "FORCE_DELETE_STACK",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type DeletionMode = (typeof DeletionMode)[keyof typeof DeletionMode];

/**
 * <p>The input for <a>DeleteStack</a> action.</p>
 * @public
 */
export interface DeleteStackInput {
  /**
   * <p>The name or the unique stack ID that's associated with the stack.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>For stacks in the <code>DELETE_FAILED</code> state, a list of resource logical IDs that
   *       are associated with the resources you want to retain. During deletion, CloudFormation deletes the
   *       stack but doesn't delete the retained resources.</p>
   *          <p>Retaining resources is useful when you can't delete a resource, such as a non-empty S3
   *       bucket, but you want to delete the stack.</p>
   * @public
   */
  RetainResources?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to delete the
   *       stack. CloudFormation uses the role's credentials to make calls on your behalf.</p>
   *          <p>If you don't specify a value, CloudFormation uses the role that was previously associated with
   *       the stack. If no role is available, CloudFormation uses a temporary session that's generated from
   *       your user credentials.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>A unique identifier for this <code>DeleteStack</code> request. Specify this token if you
   *       plan to retry requests so that CloudFormation knows that you're not attempting to delete a stack
   *       with the same name. You might retry <code>DeleteStack</code> requests to ensure that
   *       CloudFormation successfully received them.</p>
   *          <p>All events initiated by a given stack operation are assigned the same client request
   *       token, which you can use to track operations. For example, if you execute a
   *         <code>CreateStack</code> operation with the token <code>token1</code>, then all the
   *         <code>StackEvents</code> generated by that operation will have
   *         <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab. Stack
   *       operations that are initiated from the console use the token format
   *         <i>Console-StackOperation-ID</i>, which helps you easily identify the stack
   *       operation . For example, if you create a stack using the console, each stack event would be
   *       assigned the same token in the following format:
   *         <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Specifies the deletion mode for the stack. Possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code> - Use the standard behavior. Specifying this value is the same
   *           as not specifying this parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FORCE_DELETE_STACK</code> - Delete the stack if it's stuck in a
   *             <code>DELETE_FAILED</code> state due to resource deletion failure.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DeletionMode?: DeletionMode | undefined;
}

/**
 * @public
 */
export interface DeleteStackInstancesInput {
  /**
   * <p>The name or unique ID of the StackSet that you want to delete stack instances for.</p>
   * @public
   */
  StackSetName: string | undefined;

  /**
   * <p>[Self-managed permissions] The account IDs of the Amazon Web Services accounts that you want to delete
   *       stack instances for.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not
   *       both.</p>
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * <p>[Service-managed permissions] The Organizations accounts from which to delete
   *       stack instances.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not
   *       both.</p>
   * @public
   */
  DeploymentTargets?: DeploymentTargets | undefined;

  /**
   * <p>The Amazon Web Services Regions where you want to delete StackSet instances.</p>
   * @public
   */
  Regions: string[] | undefined;

  /**
   * <p>Preferences for how CloudFormation performs this StackSet operation.</p>
   * @public
   */
  OperationPreferences?: StackSetOperationPreferences | undefined;

  /**
   * <p>Removes the stack instances from the specified StackSet, but doesn't delete the stacks.
   *       You can't reassociate a retained stack or add an existing, saved stack to a new stack
   *       set.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">StackSet operation options</a>.</p>
   * @public
   */
  RetainStacks: boolean | undefined;

  /**
   * <p>The unique identifier for this StackSet operation.</p>
   *          <p>If you don't specify an operation ID, the SDK generates one
   *       automatically.</p>
   *          <p>The operation ID also functions as an idempotency token, to ensure that CloudFormation
   *       performs the StackSet operation only once, even if you retry the request multiple times. You
   *       can retry StackSet operation requests to ensure that CloudFormation successfully received
   *       them.</p>
   *          <p>Repeating this StackSet operation with a new operation ID retries all stack instances
   *       whose status is <code>OUTDATED</code>.</p>
   * @public
   */
  OperationId?: string | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator
   *       in the organization's management account or as a delegated administrator in a
   *       member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *             <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * @public
 */
export interface DeleteStackInstancesOutput {
  /**
   * <p>The unique identifier for this StackSet operation.</p>
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteStackSetInput {
  /**
   * <p>The name or unique ID of the StackSet that you're deleting. You can obtain this value by
   *       running <a>ListStackSets</a>.</p>
   * @public
   */
  StackSetName: string | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator
   *       in the organization's management account or as a delegated administrator in a
   *       member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *             <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * @public
 */
export interface DeleteStackSetOutput {}

/**
 * <p>You can't yet delete this StackSet, because it still contains one or more stack instances. Delete all stack
 *    instances from the StackSet before deleting the StackSet.</p>
 * @public
 */
export class StackSetNotEmptyException extends __BaseException {
  readonly name: "StackSetNotEmptyException" = "StackSetNotEmptyException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *         <code>Arn</code>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The kind of extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *         <code>Arn</code>.</p>
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *         <code>Arn</code>.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The ID of a specific version of the extension. The version ID is the value at the end of
   *       the Amazon Resource Name (ARN) assigned to the extension version when it is registered.</p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTypeOutput {}

/**
 * <p>The input for the <a>DescribeAccountLimits</a> action.</p>
 * @public
 */
export interface DescribeAccountLimitsInput {
  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The output for the <a>DescribeAccountLimits</a> action.</p>
 * @public
 */
export interface DescribeAccountLimitsOutput {
  /**
   * <p>An account limit structure that contain a list of CloudFormation account limits and their
   *       values.</p>
   * @public
   */
  AccountLimits?: AccountLimit[] | undefined;

  /**
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of limits. If
   *       no additional page exists, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The input for the <a>DescribeChangeSet</a> action.</p>
 * @public
 */
export interface DescribeChangeSetInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the change set that you want to describe.</p>
   * @public
   */
  ChangeSetName: string | undefined;

  /**
   * <p>If you specified the name of a change set, specify the stack name or ID (ARN) of the
   *       change set you want to describe.</p>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>If <code>true</code>, the returned changes include detailed changes in the property
   *       values.</p>
   * @public
   */
  IncludePropertyValues?: boolean | undefined;
}

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
 * <p>The output for the <a>DescribeChangeSet</a> action.</p>
 * @public
 */
export interface DescribeChangeSetOutput {
  /**
   * <p>The name of the change set.</p>
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the change set.</p>
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the stack that's associated with the change set.</p>
   * @public
   */
  StackId?: string | undefined;

  /**
   * <p>The name of the stack that's associated with the change set.</p>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>Information about the change set.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of <code>Parameter</code> structures that describes the input parameters and their
   *       values used to create the change set. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data type.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>The start time when the change set was created, in UTC.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>If the change set execution status is <code>AVAILABLE</code>, you can execute the change
   *       set. If you can't execute the change set, the status indicates why. For example, a change set
   *       might be in an <code>UNAVAILABLE</code> state because CloudFormation is still creating it or in an
   *         <code>OBSOLETE</code> state because the stack was already updated.</p>
   * @public
   */
  ExecutionStatus?: ExecutionStatus | undefined;

  /**
   * <p>The current status of the change set, such as <code>CREATE_PENDING</code>,
   *         <code>CREATE_COMPLETE</code>, or <code>FAILED</code>.</p>
   * @public
   */
  Status?: ChangeSetStatus | undefined;

  /**
   * <p>A description of the change set's status. For example, if your attempt to create a change
   *       set failed, CloudFormation shows the error message.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The drift status of the stack when the change set was created. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code> – The stack has drifted from its last deployment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code> – The stack is in sync with its last deployment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code> – CloudFormation doesn’t currently return this value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code> – The drift status could not be determined.</p>
   *             </li>
   *          </ul>
   *          <p>Only present for drift-aware change sets.</p>
   * @public
   */
  StackDriftStatus?: StackDriftStatus | undefined;

  /**
   * <p>The ARNs of the Amazon SNS topics that will be associated with the stack if you execute the
   *       change set.</p>
   * @public
   */
  NotificationARNs?: string[] | undefined;

  /**
   * <p>The rollback triggers for CloudFormation to monitor during stack creation and updating
   *       operations, and for the specified monitoring period afterwards.</p>
   * @public
   */
  RollbackConfiguration?: RollbackConfiguration | undefined;

  /**
   * <p>If you execute the change set, the list of capabilities that were explicitly acknowledged
   *       when the change set was created.</p>
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * <p>If you execute the change set, the tags that will be associated with the stack.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A list of <code>Change</code> structures that describes the resources CloudFormation changes
   *       if you execute the change set.</p>
   * @public
   */
  Changes?: Change[] | undefined;

  /**
   * <p>If the output exceeds 1 MB, a string that identifies the next page of changes. If there is
   *       no additional page, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Verifies if <code>IncludeNestedStacks</code> is set to <code>True</code>.</p>
   * @public
   */
  IncludeNestedStacks?: boolean | undefined;

  /**
   * <p>Specifies the change set ID of the parent change set in the current nested change set
   *       hierarchy.</p>
   * @public
   */
  ParentChangeSetId?: string | undefined;

  /**
   * <p>Specifies the change set ID of the root change set in the current nested change set
   *       hierarchy.</p>
   * @public
   */
  RootChangeSetId?: string | undefined;

  /**
   * <p>Determines what action will be taken if stack creation fails. When this parameter is
   *       specified, the <code>DisableRollback</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API operation must not be specified. This must be one of these
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETE</code> - Deletes the change set if the stack creation fails. This is only
   *           valid when the <code>ChangeSetType</code> parameter is set to <code>CREATE</code>. If the
   *           deletion of the stack fails, the status of the stack is <code>DELETE_FAILED</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DO_NOTHING</code> - if the stack creation fails, do nothing. This is equivalent
   *           to specifying <code>true</code> for the <code>DisableRollback</code> parameter to the
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROLLBACK</code> - if the stack creation fails, roll back the stack. This is
   *           equivalent to specifying <code>false</code> for the <code>DisableRollback</code> parameter
   *           to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html">ExecuteChangeSet</a> API operation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  OnStackFailure?: OnStackFailure | undefined;

  /**
   * <p>Indicates if the change set imports resources that already exist.</p>
   *          <note>
   *             <p>This parameter can only import resources that have <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-properties-name.html">custom
   *           names</a> in templates. To import resources that do not accept custom names, such as
   *         EC2 instances, use the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import.html">resource import</a>
   *         feature instead.</p>
   *          </note>
   * @public
   */
  ImportExistingResources?: boolean | undefined;

  /**
   * <p>The deployment mode specified when the change set was created. Valid value is
   *         <code>REVERT_DRIFT</code>. Only present for drift-aware change sets.</p>
   * @public
   */
  DeploymentMode?: DeploymentMode | undefined;
}

/**
 * @public
 */
export interface DescribeChangeSetHooksInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the change set that you want to describe.</p>
   * @public
   */
  ChangeSetName: string | undefined;

  /**
   * <p>If you specified the name of a change set, specify the stack name or stack ID (ARN) of the
   *       change set you want to describe.</p>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>If specified, lists only the Hooks related to the specified
   *         <code>LogicalResourceId</code>.</p>
   * @public
   */
  LogicalResourceId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeChangeSetHooksOutput {
  /**
   * <p>The change set identifier (stack ID).</p>
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * <p>The change set name.</p>
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * <p>List of Hook objects.</p>
   * @public
   */
  Hooks?: ChangeSetHook[] | undefined;

  /**
   * <p>Provides the status of the change set Hook.</p>
   * @public
   */
  Status?: ChangeSetHooksStatus | undefined;

  /**
   * <p>Pagination token, <code>null</code> or empty if no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The stack identifier (stack ID).</p>
   * @public
   */
  StackId?: string | undefined;

  /**
   * <p>The stack name.</p>
   * @public
   */
  StackName?: string | undefined;
}

/**
 * <p>Event filter allows you to focus on specific events in an operation.</p>
 * @public
 */
export interface EventFilter {
  /**
   * <p>When set to true, only returns failed events within the operation. This helps quickly
   *    identify root causes for a failed operation.</p>
   * @public
   */
  FailedEvents?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeEventsInput {
  /**
   * <p>The name or unique stack ID for which you want to retrieve events.</p>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the change set for which you want to retrieve
   *       events.</p>
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * <p>The unique identifier of the operation for which you want to retrieve events.</p>
   * @public
   */
  OperationId?: string | undefined;

  /**
   * <p>Filters to apply when retrieving events.</p>
   * @public
   */
  Filters?: EventFilter | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DetailedStatus = {
  CONFIGURATION_COMPLETE: "CONFIGURATION_COMPLETE",
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;

/**
 * @public
 */
export type DetailedStatus = (typeof DetailedStatus)[keyof typeof DetailedStatus];

/**
 * @public
 * @enum
 */
export const EventType = {
  HOOK_INVOCATION_ERROR: "HOOK_INVOCATION_ERROR",
  PROGRESS_EVENT: "PROGRESS_EVENT",
  PROVISIONING_ERROR: "PROVISIONING_ERROR",
  STACK_EVENT: "STACK_EVENT",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

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
export const OperationType = {
  CONTINUE_ROLLBACK: "CONTINUE_ROLLBACK",
  CREATE_CHANGESET: "CREATE_CHANGESET",
  CREATE_STACK: "CREATE_STACK",
  DELETE_STACK: "DELETE_STACK",
  ROLLBACK: "ROLLBACK",
  UPDATE_STACK: "UPDATE_STACK",
} as const;

/**
 * @public
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

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
  EXPORT_COMPLETE: "EXPORT_COMPLETE",
  EXPORT_FAILED: "EXPORT_FAILED",
  EXPORT_IN_PROGRESS: "EXPORT_IN_PROGRESS",
  EXPORT_ROLLBACK_COMPLETE: "EXPORT_ROLLBACK_COMPLETE",
  EXPORT_ROLLBACK_FAILED: "EXPORT_ROLLBACK_FAILED",
  EXPORT_ROLLBACK_IN_PROGRESS: "EXPORT_ROLLBACK_IN_PROGRESS",
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
 * @enum
 */
export const ValidationStatus = {
  FAILED: "FAILED",
  SKIPPED: "SKIPPED",
} as const;

/**
 * @public
 */
export type ValidationStatus = (typeof ValidationStatus)[keyof typeof ValidationStatus];

/**
 * <p>Contains detailed information about an event that occurred during a CloudFormation
 *    operation.</p>
 * @public
 */
export interface OperationEvent {
  /**
   * <p>A unique identifier for this event.</p>
   * @public
   */
  EventId?: string | undefined;

  /**
   * <p>The unique ID name of the instance of the stack.</p>
   * @public
   */
  StackId?: string | undefined;

  /**
   * <p>The unique identifier of the operation this event belongs to.</p>
   * @public
   */
  OperationId?: string | undefined;

  /**
   * <p>The type of operation.</p>
   * @public
   */
  OperationType?: OperationType | undefined;

  /**
   * <p>The current status of the operation.</p>
   * @public
   */
  OperationStatus?: BeaconStackOperationStatus | undefined;

  /**
   * <p>The type of event.</p>
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * <p>The logical name of the resource as specified in the template.</p>
   * @public
   */
  LogicalResourceId?: string | undefined;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of a
   *    resource.</p>
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * <p>Type of resource.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>Time the status was updated.</p>
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * <p>The time when the event started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time when the event ended.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>Current status of the resource.</p>
   * @public
   */
  ResourceStatus?: ResourceStatus | undefined;

  /**
   * <p>Success or failure message associated with the resource.</p>
   * @public
   */
  ResourceStatusReason?: string | undefined;

  /**
   * <p>The properties used to create the resource.</p>
   * @public
   */
  ResourceProperties?: string | undefined;

  /**
   * <p>A unique identifier for the request that initiated this operation.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The type name of the Hook that was invoked.</p>
   * @public
   */
  HookType?: string | undefined;

  /**
   * <p>The status of the Hook invocation. </p>
   * @public
   */
  HookStatus?: HookStatus | undefined;

  /**
   * <p>Additional information about the Hook status.</p>
   * @public
   */
  HookStatusReason?: string | undefined;

  /**
   * <p>The point in the operation lifecycle when the Hook was invoked.</p>
   * @public
   */
  HookInvocationPoint?: HookInvocationPoint | undefined;

  /**
   * <p>Specifies how Hook failures are handled.</p>
   * @public
   */
  HookFailureMode?: HookFailureMode | undefined;

  /**
   * <p>Additional status information about the operation.</p>
   * @public
   */
  DetailedStatus?: DetailedStatus | undefined;

  /**
   * <p>Specifies how validation failures are handled.</p>
   * @public
   */
  ValidationFailureMode?: HookFailureMode | undefined;

  /**
   * <p>The name of the validation that was performed.</p>
   * @public
   */
  ValidationName?: string | undefined;

  /**
   * <p>The status of the validation.</p>
   * @public
   */
  ValidationStatus?: ValidationStatus | undefined;

  /**
   * <p>Additional information about the validation status.</p>
   * @public
   */
  ValidationStatusReason?: string | undefined;

  /**
   * <p>The path within the resource where the validation was applied.</p>
   * @public
   */
  ValidationPath?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventsOutput {
  /**
   * <p>A list of operation events that match the specified criteria.</p>
   * @public
   */
  OperationEvents?: OperationEvent[] | undefined;

  /**
   * <p>If the request doesn't return all the remaining results, <code>NextToken</code> is set to
   *       a token. To retrieve the next set of results, call <code>DescribeEvents</code> again and
   *       assign that token to the request object's <code>NextToken</code> parameter. If the request
   *       returns all results, <code>NextToken</code> is set to <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGeneratedTemplateInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of a generated template.</p>
   * @public
   */
  GeneratedTemplateName: string | undefined;
}

/**
 * <p>A summary of the progress of the template generation.</p>
 * @public
 */
export interface TemplateProgress {
  /**
   * <p>The number of resources that succeeded the template generation.</p>
   * @public
   */
  ResourcesSucceeded?: number | undefined;

  /**
   * <p>The number of resources that failed the template generation.</p>
   * @public
   */
  ResourcesFailed?: number | undefined;

  /**
   * <p>The number of resources that are in-process for the template generation.</p>
   * @public
   */
  ResourcesProcessing?: number | undefined;

  /**
   * <p>The number of resources that are still pending the template generation.</p>
   * @public
   */
  ResourcesPending?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const GeneratedTemplateResourceStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type GeneratedTemplateResourceStatus =
  (typeof GeneratedTemplateResourceStatus)[keyof typeof GeneratedTemplateResourceStatus];

/**
 * <p>A specific property that is impacted by a warning.</p>
 * @public
 */
export interface WarningProperty {
  /**
   * <p>The path of the property. For example, if this is for the <code>S3Bucket</code> member of
   *    the <code>Code</code> property, the property path would be <code>Code/S3Bucket</code>.</p>
   * @public
   */
  PropertyPath?: string | undefined;

  /**
   * <p>If <code>true</code>, the specified property is required.</p>
   * @public
   */
  Required?: boolean | undefined;

  /**
   * <p>The description of the property from the resource provider schema.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const WarningType = {
  EXCLUDED_PROPERTIES: "EXCLUDED_PROPERTIES",
  EXCLUDED_RESOURCES: "EXCLUDED_RESOURCES",
  MUTUALLY_EXCLUSIVE_PROPERTIES: "MUTUALLY_EXCLUSIVE_PROPERTIES",
  MUTUALLY_EXCLUSIVE_TYPES: "MUTUALLY_EXCLUSIVE_TYPES",
  UNSUPPORTED_PROPERTIES: "UNSUPPORTED_PROPERTIES",
} as const;

/**
 * @public
 */
export type WarningType = (typeof WarningType)[keyof typeof WarningType];

/**
 * <p>The warnings generated for a specific resource for this generated template.</p>
 * @public
 */
export interface WarningDetail {
  /**
   * <p>The type of this warning. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/generate-IaC-write-only-properties.html">Resolve
   *     write-only properties</a> in the <i>CloudFormation User Guide</i>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MUTUALLY_EXCLUSIVE_PROPERTIES</code> - The resource requires mutually-exclusive
   *      write-only properties. The IaC generator selects one set of mutually exclusive properties and
   *      converts the included properties into parameters. The parameter names have a suffix
   *       <code>OneOf</code> and the parameter descriptions indicate that the corresponding property can
   *      be replaced with other exclusive properties.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNSUPPORTED_PROPERTIES</code> - Unsupported properties are present in the resource.
   *      One example of unsupported properties would be a required write-only property that is an array,
   *      because a parameter cannot be an array. Another example is an optional write-only
   *      property.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MUTUALLY_EXCLUSIVE_TYPES</code> - One or more required write-only properties are
   *      found in the resource, and the type of that property can be any of several types.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Currently the resource and property reference documentation does not indicate if a property
   *     uses a type of <code>oneOf</code> or <code>anyOf</code>. You need to look at the resource
   *     provider schema.</p>
   *          </note>
   * @public
   */
  Type?: WarningType | undefined;

  /**
   * <p>The properties of the resource that are impacted by this warning.</p>
   * @public
   */
  Properties?: WarningProperty[] | undefined;
}

/**
 * <p>Details about a resource in a generated template</p>
 * @public
 */
export interface ResourceDetail {
  /**
   * <p>The type of the resource, such as <code>AWS::DynamoDB::Table</code>. For the list of
   *    supported resources, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html">Resource type
   *     support for imports and drift detection</a> In the
   *    <i>CloudFormation User Guide</i>
   *          </p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The logical id for this resource in the final generated template.</p>
   * @public
   */
  LogicalResourceId?: string | undefined;

  /**
   * <p>A list of up to 256 key-value pairs that identifies the resource in the generated template.
   *    The key is the name of one of the primary identifiers for the resource. (Primary identifiers are
   *    specified in the <code>primaryIdentifier</code> list in the resource schema.) The value is the
   *    value of that primary identifier. For example, for a <code>AWS::DynamoDB::Table</code> resource,
   *    the primary identifiers is <code>TableName</code> so the key-value pair could be
   *     <code>"TableName": "MyDDBTable"</code>. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-primaryidentifier">primaryIdentifier</a> in the <i>CloudFormation Command Line Interface (CLI) User Guide</i>.</p>
   * @public
   */
  ResourceIdentifier?: Record<string, string> | undefined;

  /**
   * <p>Status of the processing of a resource in a generated template.</p>
   *          <dl>
   *             <dt>
   *
   *       InProgress
   *
   *     </dt>
   *             <dd>
   *                <p>The resource processing is still in progress.</p>
   *             </dd>
   *             <dt>
   *
   *       Complete
   *
   *     </dt>
   *             <dd>
   *                <p>The resource processing is complete.</p>
   *             </dd>
   *             <dt>
   *
   *       Pending
   *
   *     </dt>
   *             <dd>
   *                <p>The resource processing is pending.</p>
   *             </dd>
   *             <dt>
   *
   *       Failed
   *
   *     </dt>
   *             <dd>
   *                <p>The resource processing has failed.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  ResourceStatus?: GeneratedTemplateResourceStatus | undefined;

  /**
   * <p>The reason for the resource detail, providing more information if a failure happened.</p>
   * @public
   */
  ResourceStatusReason?: string | undefined;

  /**
   * <p>The warnings generated for this resource.</p>
   * @public
   */
  Warnings?: WarningDetail[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GeneratedTemplateStatus = {
  COMPLETE: "COMPLETE",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_PENDING: "DELETE_PENDING",
  FAILED: "FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
  UPDATE_PENDING: "UPDATE_PENDING",
} as const;

/**
 * @public
 */
export type GeneratedTemplateStatus = (typeof GeneratedTemplateStatus)[keyof typeof GeneratedTemplateStatus];

/**
 * @public
 */
export interface DescribeGeneratedTemplateOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the generated template. The format is
   *         <code>arn:$\{Partition\}:cloudformation:$\{Region\}:$\{Account\}:generatedtemplate/$\{Id\}</code>.
   *       For example,
   *           <code>arn:aws:cloudformation:<i>us-east-1</i>:<i>123456789012</i>:generatedtemplate/<i>2e8465c1-9a80-43ea-a3a3-4f2d692fe6dc</i>
   *             </code>.</p>
   * @public
   */
  GeneratedTemplateId?: string | undefined;

  /**
   * <p>The name of the generated template.</p>
   * @public
   */
  GeneratedTemplateName?: string | undefined;

  /**
   * <p>A list of objects describing the details of the resources in the template
   *       generation.</p>
   * @public
   */
  Resources?: ResourceDetail[] | undefined;

  /**
   * <p>The status of the template generation. Supported values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreatePending</code> - the creation of the template is pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreateInProgress</code> - the creation of the template is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeletePending</code> - the deletion of the template is pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeleteInProgress</code> - the deletion of the template is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UpdatePending</code> - the update of the template is pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UpdateInProgress</code> - the update of the template is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - the template operation failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Complete</code> - the template operation is complete.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: GeneratedTemplateStatus | undefined;

  /**
   * <p>The reason for the current template generation status. This will provide more details if a
   *       failure happened.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The time the generated template was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time the generated template was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>An object describing the progress of the template generation.</p>
   * @public
   */
  Progress?: TemplateProgress | undefined;

  /**
   * <p>The stack ARN of the base stack if a base stack was provided when generating the
   *       template.</p>
   * @public
   */
  StackId?: string | undefined;

  /**
   * <p>The configuration details of the generated template, including the
   *         <code>DeletionPolicy</code> and <code>UpdateReplacePolicy</code>.</p>
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;

  /**
   * <p>The number of warnings generated for this template. The warnings are found in the details
   *       of each of the resources in the template.</p>
   * @public
   */
  TotalWarnings?: number | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationsAccessInput {
  /**
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
   *             <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;
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
   * <p>Presents the status of the <code>OrganizationAccess</code>.</p>
   * @public
   */
  Status?: OrganizationStatus | undefined;
}

/**
 * @public
 */
export interface DescribePublisherInput {
  /**
   * <p>The ID of the extension publisher.</p>
   *          <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension
   *       publisher, <code>DescribePublisher</code> returns information about your own publisher
   *       account.</p>
   * @public
   */
  PublisherId?: string | undefined;
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
   * <p>The ID of the extension publisher.</p>
   * @public
   */
  PublisherId?: string | undefined;

  /**
   * <p>Whether the publisher is verified. Currently, all registered publishers are
   *       verified.</p>
   * @public
   */
  PublisherStatus?: PublisherStatus | undefined;

  /**
   * <p>The type of account used as the identity provider when registering this publisher with
   *       CloudFormation.</p>
   * @public
   */
  IdentityProvider?: IdentityProvider | undefined;

  /**
   * <p>The URL to the publisher's profile with the identity provider.</p>
   * @public
   */
  PublisherProfile?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourceScanInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource scan.</p>
   * @public
   */
  ResourceScanId: string | undefined;
}

/**
 * <p>A filter that is used to specify which resource types to scan.</p>
 * @public
 */
export interface ScanFilter {
  /**
   * <p>An array of strings where each string represents an Amazon Web Services resource type you want to scan.
   *    Each string defines the resource type using the format
   *     <code>AWS::ServiceName::ResourceType</code>, for example, <code>AWS::DynamoDB::Table</code>. For
   *    the full list of supported resource types, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html">Resource type
   *     support</a> table in the <i>CloudFormation User Guide</i>.</p>
   *          <p>To scan all resource types within a service, you can use a wildcard, represented by an
   *    asterisk (<code>*</code>). You can place an asterisk at only the end of the string, for example,
   *     <code>AWS::S3::*</code>.</p>
   * @public
   */
  Types?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceScanStatus = {
  COMPLETE: "COMPLETE",
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ResourceScanStatus = (typeof ResourceScanStatus)[keyof typeof ResourceScanStatus];

/**
 * @public
 */
export interface DescribeResourceScanOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource scan. The format is
   *         <code>arn:$\{Partition\}:cloudformation:$\{Region\}:$\{Account\}:resourceScan/$\{Id\}</code>. An
   *       example is
   *           <code>arn:aws:cloudformation:<i>us-east-1</i>:<i>123456789012</i>:resourceScan/<i>f5b490f7-7ed4-428a-aa06-31ff25db0772</i>
   *             </code>.</p>
   * @public
   */
  ResourceScanId?: string | undefined;

  /**
   * <p>Status of the resource scan.</p>
   *          <dl>
   *             <dt>
   *
   *             IN_PROGRESS
   *
   *         </dt>
   *             <dd>
   *                <p>The resource scan is still in progress.</p>
   *             </dd>
   *             <dt>
   *
   *             COMPLETE
   *
   *         </dt>
   *             <dd>
   *                <p>The resource scan is complete.</p>
   *             </dd>
   *             <dt>
   *
   *             EXPIRED
   *
   *         </dt>
   *             <dd>
   *                <p>The resource scan has expired.</p>
   *             </dd>
   *             <dt>
   *
   *             FAILED
   *
   *         </dt>
   *             <dd>
   *                <p>The resource scan has failed.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  Status?: ResourceScanStatus | undefined;

  /**
   * <p>The reason for the resource scan status, providing more information if a failure
   *       happened.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The time that the resource scan was started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time that the resource scan was finished.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The percentage of the resource scan that has been completed.</p>
   * @public
   */
  PercentageCompleted?: number | undefined;

  /**
   * <p>The list of resource types for the specified scan. Resource types are only available for
   *       scans with a <code>Status</code> set to <code>COMPLETE</code> or <code>FAILED </code>.</p>
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * <p>The number of resources that were listed. This is only available for scans with a
   *         <code>Status</code> set to <code>COMPLETE</code>, <code>EXPIRED</code>, or <code>FAILED
   *       </code>.</p>
   * @public
   */
  ResourcesScanned?: number | undefined;

  /**
   * <p>The number of resources that were read. This is only available for scans with a
   *         <code>Status</code> set to <code>COMPLETE</code>, <code>EXPIRED</code>, or
   *         <code>FAILED</code>.</p>
   *          <note>
   *             <p>This field may be 0 if the resource scan failed with a
   *           <code>ResourceScanLimitExceededException</code>.</p>
   *          </note>
   * @public
   */
  ResourcesRead?: number | undefined;

  /**
   * <p>The scan filters that were used.</p>
   * @public
   */
  ScanFilters?: ScanFilter[] | undefined;
}

/**
 * <p>The resource scan was not found.</p>
 * @public
 */
export class ResourceScanNotFoundException extends __BaseException {
  readonly name: "ResourceScanNotFoundException" = "ResourceScanNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceScanNotFoundException, __BaseException>) {
    super({
      name: "ResourceScanNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceScanNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeStackDriftDetectionStatusInput {
  /**
   * <p>The ID of the drift detection results of this operation.</p>
   *          <p>CloudFormation generates new results, with a new drift detection ID, each time this operation
   *       is run. However, the number of drift results CloudFormation retains for any given stack, and for
   *       how long, may vary.</p>
   * @public
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
 */
export interface DescribeStackDriftDetectionStatusOutput {
  /**
   * <p>The ID of the stack.</p>
   * @public
   */
  StackId: string | undefined;

  /**
   * <p>The ID of the drift detection results of this operation.</p>
   *          <p>CloudFormation generates new results, with a new drift detection ID, each time this operation
   *       is run. However, the number of reports CloudFormation retains for any given stack, and for how
   *       long, may vary.</p>
   * @public
   */
  StackDriftDetectionId: string | undefined;

  /**
   * <p>Status of the stack's actual configuration compared to its expected configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The stack differs from its expected template configuration. A
   *           stack is considered to have drifted if one or more of its resources have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation hasn't checked if the stack differs from its
   *           expected template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The stack's actual configuration matches its expected template
   *           configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: CloudFormation could not run drift detection for a resource in the
   *           stack. See the <code>DetectionStatusReason</code> for details.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StackDriftStatus?: StackDriftStatus | undefined;

  /**
   * <p>The status of the stack drift detection operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DETECTION_COMPLETE</code>: The stack drift detection operation has successfully
   *           completed for all resources in the stack that support drift detection. (Resources that
   *           don't currently support stack detection remain unchecked.)</p>
   *                <p>If you specified logical resource IDs for CloudFormation to use as a filter for the stack
   *           drift detection operation, only the resources with those logical IDs are checked for
   *           drift.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DETECTION_FAILED</code>: The stack drift detection operation has failed for at
   *           least one resource in the stack. Results will be available for resources on which
   *           CloudFormation successfully completed drift detection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DETECTION_IN_PROGRESS</code>: The stack drift detection operation is currently
   *           in progress.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DetectionStatus: StackDriftDetectionStatus | undefined;

  /**
   * <p>The reason the stack drift detection operation has its current status.</p>
   * @public
   */
  DetectionStatusReason?: string | undefined;

  /**
   * <p>Total number of stack resources that have drifted. This is NULL until the drift detection
   *       operation reaches a status of <code>DETECTION_COMPLETE</code>. This value will be 0 for stacks
   *       whose drift status is <code>IN_SYNC</code>.</p>
   * @public
   */
  DriftedStackResourceCount?: number | undefined;

  /**
   * <p>Time at which the stack drift detection operation was initiated.</p>
   * @public
   */
  Timestamp: Date | undefined;
}

/**
 * <p>The input for <a>DescribeStackEvents</a> action.</p>
 * @public
 */
export interface DescribeStackEventsInput {
  /**
   * <p>The name or the unique stack ID that's associated with the stack, which aren't always
   *       interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The <code>StackEvent</code> data type.</p>
 * @public
 */
export interface StackEvent {
  /**
   * <p>The unique ID name of the instance of the stack.</p>
   * @public
   */
  StackId: string | undefined;

  /**
   * <p>The unique identifier of this event.</p>
   * @public
   */
  EventId: string | undefined;

  /**
   * <p>The name associated with a stack.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The unique identifier of the operation that generated this stack event.</p>
   * @public
   */
  OperationId?: string | undefined;

  /**
   * <p>The logical name of the resource specified in the template.</p>
   * @public
   */
  LogicalResourceId?: string | undefined;

  /**
   * <p>The name or unique identifier associated with the physical instance of the resource.</p>
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * <p>Type of resource. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and
   *     property types reference</a> in the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>Time the status was updated.</p>
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * <p>Current status of the resource.</p>
   * @public
   */
  ResourceStatus?: ResourceStatus | undefined;

  /**
   * <p>Success/failure message associated with the resource.</p>
   * @public
   */
  ResourceStatusReason?: string | undefined;

  /**
   * <p>BLOB of the properties used to create the resource.</p>
   * @public
   */
  ResourceProperties?: string | undefined;

  /**
   * <p>The token passed to the operation that generated this event.</p>
   *          <p>All events triggered by a given stack operation are assigned the same client request token,
   *    which you can use to track operations. For example, if you execute a <code>CreateStack</code>
   *    operation with the token <code>token1</code>, then all the <code>StackEvents</code> generated by
   *    that operation will have <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab. Stack
   *    operations that are initiated from the console use the token format
   *     <i>Console-StackOperation-ID</i>, which helps you easily identify the stack
   *    operation . For example, if you create a stack using the console, each stack event would be
   *    assigned the same token in the following format:
   *     <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The name of the Hook.</p>
   * @public
   */
  HookType?: string | undefined;

  /**
   * <p>Provides the status of the change set Hook.</p>
   * @public
   */
  HookStatus?: HookStatus | undefined;

  /**
   * <p>Provides the reason for the Hook status.</p>
   * @public
   */
  HookStatusReason?: string | undefined;

  /**
   * <p>The specific point in the provisioning process where the Hook is invoked.</p>
   * @public
   */
  HookInvocationPoint?: HookInvocationPoint | undefined;

  /**
   * <p>The unique identifier of the Hook invocation.</p>
   * @public
   */
  HookInvocationId?: string | undefined;

  /**
   * <p>Specify the Hook failure mode for non-compliant resources in the followings ways.</p>
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
   * @public
   */
  HookFailureMode?: HookFailureMode | undefined;

  /**
   * <p>An optional field that contains information about the detailed status of the stack
   *    event.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CONFIGURATION_COMPLETE</code> - all of the resources in the stack have reached that
   *      event. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stack-resource-configuration-complete.html">Understand
   *       CloudFormation stack creation events</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>VALIDATION_FAILED</code> - template validation failed because of invalid properties
   *      in the template. The <code>ResourceStatusReason</code> field shows what properties are defined
   *      incorrectly.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DetailedStatus?: DetailedStatus | undefined;
}

/**
 * <p>The output for a <a>DescribeStackEvents</a> action.</p>
 * @public
 */
export interface DescribeStackEventsOutput {
  /**
   * <p>A list of <code>StackEvents</code> structures.</p>
   * @public
   */
  StackEvents?: StackEvent[] | undefined;

  /**
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of events. If
   *       no additional page exists, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStackInstanceInput {
  /**
   * <p>The name or the unique stack ID of the StackSet that you want to get stack instance
   *       information for.</p>
   * @public
   */
  StackSetName: string | undefined;

  /**
   * <p>The ID of an Amazon Web Services account that's associated with this stack instance.</p>
   * @public
   */
  StackInstanceAccount: string | undefined;

  /**
   * <p>The name of a Region that's associated with this stack instance.</p>
   * @public
   */
  StackInstanceRegion: string | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator
   *       in the organization's management account or as a delegated administrator in a
   *       member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *             <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * @public
 * @enum
 */
export const StackInstanceDetailedStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  FAILED_IMPORT: "FAILED_IMPORT",
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
 * <p>The detailed status of the stack instance.</p>
 * @public
 */
export interface StackInstanceComprehensiveStatus {
  /**
   * <ul>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code>: The operation in the specified account and Region has been
   *      canceled. This is either because a user has stopped the StackSet operation, or because the
   *      failure tolerance of the StackSet operation has been exceeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation in the specified account and Region failed. If the
   *      StackSet operation fails in enough accounts within a Region, the failure tolerance for the
   *      StackSet operation as a whole might be exceeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED_IMPORT</code>: The import of the stack instance in the specified account and
   *      Region failed and left the stack in an unstable state. Once the issues causing the failure are
   *      fixed, the import operation can be retried. If enough StackSet operations fail in enough
   *      accounts within a Region, the failure tolerance for the StackSet operation as a whole might be
   *      exceeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INOPERABLE</code>: A <code>DeleteStackInstances</code> operation has failed and left
   *      the stack in an unstable state. Stacks in this state are excluded from further
   *       <code>UpdateStackSet</code> operations. You might need to perform a
   *       <code>DeleteStackInstances</code> operation, with <code>RetainStacks</code> set to
   *       <code>true</code>, to delete the stack instance, and then delete the stack manually.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: The operation in the specified account and Region has yet to
   *      start.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>: The operation in the specified account and Region is currently in
   *      progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIPPED_SUSPENDED_ACCOUNT</code>: The operation in the specified account and Region
   *      has been skipped because the account was suspended at the time of the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The operation in the specified account and Region completed
   *      successfully.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DetailedStatus?: StackInstanceDetailedStatus | undefined;
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
 * <p>A CloudFormation stack, in a specific account and Region, that's part of a StackSet operation. A
 *    stack instance is a reference to an attempted or actual stack in a given account within a given
 *    Region. A stack instance can exist without a stack—for example, if the stack couldn't be created
 *    for some reason. A stack instance is associated with only one StackSet. Each stack instance
 *    contains the ID of its associated StackSet, in addition to the ID of the actual stack and the
 *    stack status.</p>
 * @public
 */
export interface StackInstance {
  /**
   * <p>The name or unique ID of the StackSet that the stack instance is associated with.</p>
   * @public
   */
  StackSetId?: string | undefined;

  /**
   * <p>The name of the Amazon Web Services Region that the stack instance is associated with.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>[Self-managed permissions] The name of the Amazon Web Services account that the stack instance is
   *    associated with.</p>
   * @public
   */
  Account?: string | undefined;

  /**
   * <p>The ID of the stack instance.</p>
   * @public
   */
  StackId?: string | undefined;

  /**
   * <p>A list of parameters from the StackSet template whose values have been overridden in this
   *    stack instance.</p>
   * @public
   */
  ParameterOverrides?: Parameter[] | undefined;

  /**
   * <p>The status of the stack instance, in terms of its synchronization with its associated stack
   *    set.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INOPERABLE</code>: A <code>DeleteStackInstances</code> operation has failed and left
   *      the stack in an unstable state. Stacks in this state are excluded from further
   *       <code>UpdateStackSet</code> operations. You might need to perform a
   *       <code>DeleteStackInstances</code> operation, with <code>RetainStacks</code> set to
   *       <code>true</code>, to delete the stack instance, and then delete the stack manually.
   *      <code>INOPERABLE</code> can be returned here when the cause is a failed import. If it's due to
   *      a failed import, the operation can be retried once the failures are fixed. To see if this is
   *      due to a failed import, look at the <code>DetailedStatus</code> member in the
   *       <code>StackInstanceSummary</code> member that is a peer to this <code>Status</code>
   *      member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTDATED</code>: The stack isn't currently up to date with the StackSet
   *      because:</p>
   *                <ul>
   *                   <li>
   *                      <p>The associated stack failed during a <code>CreateStackSet</code> or
   *         <code>UpdateStackSet</code> operation.</p>
   *                   </li>
   *                   <li>
   *                      <p>The stack was part of a <code>CreateStackSet</code> or <code>UpdateStackSet</code>
   *        operation that failed or was stopped before the stack was created or updated.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CURRENT</code>: The stack is currently up to date with the StackSet.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: StackInstanceStatus | undefined;

  /**
   * <p>The detailed status of the stack instance.</p>
   * @public
   */
  StackInstanceStatus?: StackInstanceComprehensiveStatus | undefined;

  /**
   * <p>The explanation for the specific status code that's assigned to this stack instance.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>[Service-managed permissions] The organization root ID or organizational unit (OU) IDs that
   *    you specified for <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html">DeploymentTargets</a>.</p>
   * @public
   */
  OrganizationalUnitId?: string | undefined;

  /**
   * <p>Status of the stack instance's actual configuration compared to the expected template and
   *    parameter configuration of the StackSet it belongs to.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The stack differs from the expected template and parameter
   *      configuration of the StackSet it belongs to. A stack instance is considered to have drifted if
   *      one or more of the resources in the associated stack have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation hasn't checked if the stack instance differs from its
   *      expected StackSet configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The stack instance's actual configuration matches its expected
   *      StackSset configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: This value is reserved for future use.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DriftStatus?: StackDriftStatus | undefined;

  /**
   * <p>Most recent time when CloudFormation performed a drift detection operation on the stack
   *    instance. This value will be <code>NULL</code> for any stack instance that drift detection hasn't
   *    yet been performed on.</p>
   * @public
   */
  LastDriftCheckTimestamp?: Date | undefined;

  /**
   * <p>The last unique ID of a StackSet operation performed on a stack instance.</p>
   * @public
   */
  LastOperationId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStackInstanceOutput {
  /**
   * <p>The stack instance that matches the specified request parameters.</p>
   * @public
   */
  StackInstance?: StackInstance | undefined;
}

/**
 * <p>The specified stack instance doesn't exist.</p>
 * @public
 */
export class StackInstanceNotFoundException extends __BaseException {
  readonly name: "StackInstanceNotFoundException" = "StackInstanceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 */
export interface DescribeStackRefactorInput {
  /**
   * <p>The ID associated with the stack refactor created from the <a>CreateStackRefactor</a> action.</p>
   * @public
   */
  StackRefactorId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StackRefactorExecutionStatus = {
  AVAILABLE: "AVAILABLE",
  EXECUTE_COMPLETE: "EXECUTE_COMPLETE",
  EXECUTE_FAILED: "EXECUTE_FAILED",
  EXECUTE_IN_PROGRESS: "EXECUTE_IN_PROGRESS",
  OBSOLETE: "OBSOLETE",
  ROLLBACK_COMPLETE: "ROLLBACK_COMPLETE",
  ROLLBACK_FAILED: "ROLLBACK_FAILED",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type StackRefactorExecutionStatus =
  (typeof StackRefactorExecutionStatus)[keyof typeof StackRefactorExecutionStatus];

/**
 * @public
 * @enum
 */
export const StackRefactorStatus = {
  CREATE_COMPLETE: "CREATE_COMPLETE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_COMPLETE: "DELETE_COMPLETE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type StackRefactorStatus = (typeof StackRefactorStatus)[keyof typeof StackRefactorStatus];

/**
 * @public
 */
export interface DescribeStackRefactorOutput {
  /**
   * <p>A description to help you identify the refactor.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID associated with the stack refactor created from the <a>CreateStackRefactor</a> action.</p>
   * @public
   */
  StackRefactorId?: string | undefined;

  /**
   * <p>The unique ID for each stack.</p>
   * @public
   */
  StackIds?: string[] | undefined;

  /**
   * <p>The stack refactor execution operation status that's provided after calling the <a>ExecuteStackRefactor</a> action.</p>
   * @public
   */
  ExecutionStatus?: StackRefactorExecutionStatus | undefined;

  /**
   * <p>A detailed explanation for the stack refactor <code>ExecutionStatus</code>.</p>
   * @public
   */
  ExecutionStatusReason?: string | undefined;

  /**
   * <p>The stack refactor operation status that's provided after calling the <a>CreateStackRefactor</a> action.</p>
   * @public
   */
  Status?: StackRefactorStatus | undefined;

  /**
   * <p>A detailed explanation for the stack refactor operation <code>Status</code>.</p>
   * @public
   */
  StatusReason?: string | undefined;
}

/**
 * <p>The specified stack refactor can't be found.</p>
 * @public
 */
export class StackRefactorNotFoundException extends __BaseException {
  readonly name: "StackRefactorNotFoundException" = "StackRefactorNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StackRefactorNotFoundException, __BaseException>) {
    super({
      name: "StackRefactorNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StackRefactorNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The input for <a>DescribeStackResource</a> action.</p>
 * @public
 */
export interface DescribeStackResourceInput {
  /**
   * <p>The name or the unique stack ID that's associated with the stack, which aren't always
   *       interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The logical name of the resource as specified in the template.</p>
   * @public
   */
  LogicalResourceId: string | undefined;
}

/**
 * <p>Contains information about whether the resource's actual configuration differs, or has
 *     <i>drifted</i>, from its expected configuration.</p>
 * @public
 */
export interface StackResourceDriftInformation {
  /**
   * <p>Status of the resource's actual configuration compared to its expected configuration</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The resource differs from its expected configuration in that it has
   *      been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFIED</code>: The resource differs from its expected configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation has not checked if the resource differs from its
   *      expected configuration.</p>
   *                <p>Any resources that do not currently support drift detection have a status of
   *       <code>NOT_CHECKED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html">Resource
   *       type support for imports and drift detection</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The resource's actual configuration matches its expected
   *      configuration.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StackResourceDriftStatus: StackResourceDriftStatus | undefined;

  /**
   * <p>When CloudFormation last checked if the resource had drifted from its expected
   *    configuration.</p>
   * @public
   */
  LastCheckTimestamp?: Date | undefined;
}

/**
 * <p>Contains detailed information about the specified stack resource.</p>
 * @public
 */
export interface StackResourceDetail {
  /**
   * <p>The name associated with the stack.</p>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>Unique identifier of the stack.</p>
   * @public
   */
  StackId?: string | undefined;

  /**
   * <p>The logical name of the resource specified in the template.</p>
   * @public
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of a resource
   *    supported by CloudFormation.</p>
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * <p>Type of resource. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and
   *     property types reference</a> in the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>Time the status was updated.</p>
   * @public
   */
  LastUpdatedTimestamp: Date | undefined;

  /**
   * <p>Current status of the resource.</p>
   * @public
   */
  ResourceStatus: ResourceStatus | undefined;

  /**
   * <p>Success/failure message associated with the resource.</p>
   * @public
   */
  ResourceStatusReason?: string | undefined;

  /**
   * <p>User defined description associated with the resource.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The content of the <code>Metadata</code> attribute declared for the resource. For more
   *    information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-metadata.html">Metadata attribute</a>
   *    in the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>Information about whether the resource's actual configuration differs, or has
   *     <i>drifted</i>, from its expected configuration, as defined in the stack template
   *    and any values specified as template parameters. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detect
   *     unmanaged configuration changes to stacks and resources with drift detection</a>.</p>
   * @public
   */
  DriftInformation?: StackResourceDriftInformation | undefined;

  /**
   * <p>Contains information about the module from which the resource was created, if the resource
   *    was created from a module included in the stack template.</p>
   * @public
   */
  ModuleInfo?: ModuleInfo | undefined;
}

/**
 * <p>The output for a <a>DescribeStackResource</a> action.</p>
 * @public
 */
export interface DescribeStackResourceOutput {
  /**
   * <p>A <code>StackResourceDetail</code> structure that contains the description of the
   *       specified resource in the specified stack.</p>
   * @public
   */
  StackResourceDetail?: StackResourceDetail | undefined;
}

/**
 * @public
 */
export interface DescribeStackResourceDriftsInput {
  /**
   * <p>The name of the stack for which you want drift information.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The resource drift status values to use as filters for the resource drift results
   *       returned.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The resource differs from its expected template configuration in
   *           that the resource has been deleted.</p>
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
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: CloudFormation could not run drift detection for the
   *           resource.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StackResourceDriftStatusFilters?: StackResourceDriftStatus[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *       available results exceeds this maximum, the response includes a <code>NextToken</code> value
   *       that you can assign to the <code>NextToken</code> request parameter to get the next set of
   *       results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Context information that enables CloudFormation to uniquely identify a resource. CloudFormation uses
 *    context key-value pairs in cases where a resource's logical and physical IDs aren't enough to
 *    uniquely identify that resource. Each context key-value pair specifies a resource that contains
 *    the targeted resource.</p>
 * @public
 */
export interface PhysicalResourceIdContextKeyValuePair {
  /**
   * <p>The resource context key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The resource context value.</p>
   * @public
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
 * <p>Information about a resource property whose actual value differs from its expected value, as
 *    defined in the stack template and any values specified as template parameters. These will be
 *    present only for resources whose <code>StackResourceDriftStatus</code> is <code>MODIFIED</code>.
 *    For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detect unmanaged
 *     configuration changes to stacks and resources with drift detection</a>.</p>
 * @public
 */
export interface PropertyDifference {
  /**
   * <p>The fully-qualified path to the resource property.</p>
   * @public
   */
  PropertyPath: string | undefined;

  /**
   * <p>The expected property value of the resource property, as defined in the stack template and
   *    any values specified as template parameters.</p>
   * @public
   */
  ExpectedValue: string | undefined;

  /**
   * <p>The actual property value of the resource property.</p>
   * @public
   */
  ActualValue: string | undefined;

  /**
   * <p>The type of property difference.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ADD</code>: A value has been added to a resource property that's an array or list
   *      data type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REMOVE</code>: The property has been removed from the current resource
   *      configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_EQUAL</code>: The current property value differs from its expected value (as
   *      defined in the stack template and any values specified as template parameters).</p>
   *             </li>
   *          </ul>
   * @public
   */
  DifferenceType: DifferenceType | undefined;
}

/**
 * <p>Contains the drift information for a resource that has been checked for drift. This includes
 *    actual and expected property values for resources in which CloudFormation has detected drift. Only
 *    resource properties explicitly defined in the stack template are checked for drift. For more
 *    information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detect unmanaged
 *     configuration changes to stacks and resources with drift detection</a>.</p>
 *          <p>Resources that don't currently support drift detection can't be checked. For a list of
 *    resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html">Resource type
 *     support for imports and drift detection</a>.</p>
 *          <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or
 *     <a>DetectStackDrift</a> to detect drift on all resources in a given stack that
 *    support drift detection.</p>
 * @public
 */
export interface StackResourceDrift {
  /**
   * <p>The ID of the stack.</p>
   * @public
   */
  StackId: string | undefined;

  /**
   * <p>The logical name of the resource specified in the template.</p>
   * @public
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of a resource
   *    supported by CloudFormation.</p>
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * <p>Context information that enables CloudFormation to uniquely identify a resource. CloudFormation uses
   *    context key-value pairs in cases where a resource's logical and physical IDs aren't enough to
   *    uniquely identify that resource. Each context key-value pair specifies a unique resource that
   *    contains the targeted resource.</p>
   * @public
   */
  PhysicalResourceIdContext?: PhysicalResourceIdContextKeyValuePair[] | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>A JSON structure that contains the expected property values of the stack resource, as
   *    defined in the stack template and any values specified as template parameters.</p>
   *          <p>For resources whose <code>StackResourceDriftStatus</code> is <code>DELETED</code>, this
   *    structure will not be present.</p>
   * @public
   */
  ExpectedProperties?: string | undefined;

  /**
   * <p>A JSON structure that contains the actual property values of the stack resource.</p>
   *          <p>For resources whose <code>StackResourceDriftStatus</code> is <code>DELETED</code>, this
   *    structure will not be present.</p>
   * @public
   */
  ActualProperties?: string | undefined;

  /**
   * <p>A collection of the resource properties whose actual values differ from their expected
   *    values. These will be present only for resources whose <code>StackResourceDriftStatus</code> is
   *     <code>MODIFIED</code>.</p>
   * @public
   */
  PropertyDifferences?: PropertyDifference[] | undefined;

  /**
   * <p>Status of the resource's actual configuration compared to its expected configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The resource differs from its expected template configuration
   *      because the resource has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFIED</code>: One or more resource properties differ from their expected values
   *      (as defined in the stack template and any values specified as template parameters).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The resource's actual configuration matches its expected template
   *      configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation does not currently return this value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: CloudFormation could not run drift detection for the resource. See the
   *       <code>DriftStatusReason</code> for details.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StackResourceDriftStatus: StackResourceDriftStatus | undefined;

  /**
   * <p>Time at which CloudFormation performed drift detection on the stack resource.</p>
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * <p>Contains information about the module from which the resource was created, if the resource
   *    was created from a module included in the stack template.</p>
   * @public
   */
  ModuleInfo?: ModuleInfo | undefined;

  /**
   * <p>The reason for the drift status. </p>
   * @public
   */
  DriftStatusReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStackResourceDriftsOutput {
  /**
   * <p>Drift information for the resources that have been checked for drift in the specified
   *       stack. This includes actual and expected configuration values for resources where CloudFormation
   *       detects drift.</p>
   *          <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack
   *       resource that has been checked for drift. Resources that haven't yet been checked for drift
   *       aren't included. Resources that do not currently support drift detection aren't checked, and
   *       so not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html">Resource
   *         type support for imports and drift detection</a>.</p>
   * @public
   */
  StackResourceDrifts: StackResourceDrift[] | undefined;

  /**
   * <p>If the request doesn't return all the remaining results, <code>NextToken</code> is set to
   *       a token. To retrieve the next set of results, call <code>DescribeStackResourceDrifts</code>
   *       again and assign that token to the request object's <code>NextToken</code> parameter. If the
   *       request returns all results, <code>NextToken</code> is set to <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The input for <a>DescribeStackResources</a> action.</p>
 * @public
 */
export interface DescribeStackResourcesInput {
  /**
   * <p>The name or the unique stack ID that is associated with the stack, which aren't always
   *       interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   *          <p>Required: Conditional. If you don't specify <code>StackName</code>, you must specify
   *         <code>PhysicalResourceId</code>.</p>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>The logical name of the resource as specified in the template.</p>
   * @public
   */
  LogicalResourceId?: string | undefined;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of a resource
   *       supported by CloudFormation.</p>
   *          <p>For example, for an Amazon Elastic Compute Cloud (EC2) instance,
   *         <code>PhysicalResourceId</code> corresponds to the <code>InstanceId</code>. You can pass the
   *       EC2 <code>InstanceId</code> to <code>DescribeStackResources</code> to find which stack the
   *       instance belongs to and what other resources are part of the stack.</p>
   *          <p>Required: Conditional. If you don't specify <code>PhysicalResourceId</code>, you must
   *       specify <code>StackName</code>.</p>
   * @public
   */
  PhysicalResourceId?: string | undefined;
}

/**
 * <p>The <code>StackResource</code> data type.</p>
 * @public
 */
export interface StackResource {
  /**
   * <p>The name associated with the stack.</p>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>Unique identifier of the stack.</p>
   * @public
   */
  StackId?: string | undefined;

  /**
   * <p>The logical name of the resource specified in the template.</p>
   * @public
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of a resource
   *    supported by CloudFormation.</p>
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * <p>Type of resource. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and
   *     property types reference</a> in the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>Time the status was updated.</p>
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * <p>Current status of the resource.</p>
   * @public
   */
  ResourceStatus: ResourceStatus | undefined;

  /**
   * <p>Success/failure message associated with the resource.</p>
   * @public
   */
  ResourceStatusReason?: string | undefined;

  /**
   * <p>User defined description associated with the resource.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about whether the resource's actual configuration differs, or has
   *     <i>drifted</i>, from its expected configuration, as defined in the stack template
   *    and any values specified as template parameters. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detect
   *     unmanaged configuration changes to stacks and resources with drift detection</a>.</p>
   * @public
   */
  DriftInformation?: StackResourceDriftInformation | undefined;

  /**
   * <p>Contains information about the module from which the resource was created, if the resource
   *    was created from a module included in the stack template.</p>
   * @public
   */
  ModuleInfo?: ModuleInfo | undefined;
}

/**
 * <p>The output for a <a>DescribeStackResources</a> action.</p>
 * @public
 */
export interface DescribeStackResourcesOutput {
  /**
   * <p>A list of <code>StackResource</code> structures.</p>
   * @public
   */
  StackResources?: StackResource[] | undefined;
}

/**
 * <p>The input for <a>DescribeStacks</a> action.</p>
 * @public
 */
export interface DescribeStacksInput {
  /**
   * <note>
   *             <p>If you don't pass a parameter to <code>StackName</code>, the API returns a response
   *         that describes all resources in the account, which can impact performance. This requires
   *           <code>ListStacks</code> and <code>DescribeStacks</code> permissions.</p>
   *             <p>Consider using the <a>ListStacks</a> API if you're not passing a parameter to
   *           <code>StackName</code>.</p>
   *             <p>The IAM policy below can be added to IAM policies when you want to limit
   *         resource-level permissions and avoid returning a response when no parameter is sent in the
   *         request:</p>
   *             <p>\{ "Version": "2012-10-17",		 	 	  "Statement": [\{ "Effect": "Deny", "Action":
   *         "cloudformation:DescribeStacks", "NotResource": "arn:aws:cloudformation:*:*:stack/*\/*" \}]
   *         \}</p>
   *          </note>
   *          <p>The name or the unique stack ID that's associated with the stack, which aren't always
   *       interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains information about whether the stack's actual configuration differs, or has
 *     <i>drifted</i>, from its expected configuration, as defined in the stack template
 *    and any values specified as template parameters. A stack is considered to have drifted if one or
 *    more of its resources have drifted.</p>
 * @public
 */
export interface StackDriftInformation {
  /**
   * <p>Status of the stack's actual configuration compared to its expected template
   *    configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The stack differs from its expected template configuration. A stack
   *      is considered to have drifted if one or more of its resources have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation hasn't checked if the stack differs from its expected
   *      template configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The stack's actual configuration matches its expected template
   *      configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: CloudFormation could not run drift detection for a resource in the
   *      stack.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StackDriftStatus: StackDriftStatus | undefined;

  /**
   * <p>Most recent time when a drift detection operation was initiated on the stack, or any of its
   *    individual resources that support drift detection.</p>
   * @public
   */
  LastCheckTimestamp?: Date | undefined;
}

/**
 * <p>Contains information about a CloudFormation operation.</p>
 * @public
 */
export interface OperationEntry {
  /**
   * <p>The type of operation.</p>
   * @public
   */
  OperationType?: OperationType | undefined;

  /**
   * <p>The unique identifier for the operation.</p>
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * <p>The <code>Output</code> data type.</p>
 * @public
 */
export interface Output {
  /**
   * <p>The key associated with the output.</p>
   * @public
   */
  OutputKey?: string | undefined;

  /**
   * <p>The value associated with the output.</p>
   * @public
   */
  OutputValue?: string | undefined;

  /**
   * <p>User defined description associated with the output.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the export associated with the output.</p>
   * @public
   */
  ExportName?: string | undefined;
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
 * <p>The <code>Stack</code> data type.</p>
 * @public
 */
export interface Stack {
  /**
   * <p>Unique identifier of the stack.</p>
   * @public
   */
  StackId?: string | undefined;

  /**
   * <p>The name associated with the stack.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The unique ID of the change set.</p>
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * <p>A user-defined description associated with the stack.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of <code>Parameter</code> structures.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>The time at which the stack was created.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time the stack was deleted.</p>
   * @public
   */
  DeletionTime?: Date | undefined;

  /**
   * <p>The time the stack was last updated. This field will only be returned if the stack has been
   *    updated at least once.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The rollback triggers for CloudFormation to monitor during stack creation and updating
   *    operations, and for the specified monitoring period afterwards.</p>
   * @public
   */
  RollbackConfiguration?: RollbackConfiguration | undefined;

  /**
   * <p>Current status of the stack.</p>
   * @public
   */
  StackStatus: StackStatus | undefined;

  /**
   * <p>Success/failure message associated with the stack status.</p>
   * @public
   */
  StackStatusReason?: string | undefined;

  /**
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
   * @public
   */
  DisableRollback?: boolean | undefined;

  /**
   * <p>Amazon SNS topic Amazon Resource Names (ARNs) to which stack related events are published.</p>
   * @public
   */
  NotificationARNs?: string[] | undefined;

  /**
   * <p>The amount of time within which stack creation should complete.</p>
   * @public
   */
  TimeoutInMinutes?: number | undefined;

  /**
   * <p>The capabilities allowed in the stack.</p>
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * <p>A list of output structures.</p>
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that's associated with the stack. During a
   *    stack operation, CloudFormation uses this role's credentials to make calls on your behalf.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>A list of <code>Tag</code>s that specify information about the stack.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Whether termination protection is enabled for the stack.</p>
   *          <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>,
   *    termination protection is set on the root stack and can't be changed directly on the nested
   *    stack. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protect a CloudFormation
   *     stack from being deleted</a> in the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  EnableTerminationProtection?: boolean | undefined;

  /**
   * <p>For nested stacks, the stack ID of the direct parent of this stack. For the first level of
   *    nested stacks, the root stack is also the parent stack.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Nested stacks</a> in
   *    the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  ParentId?: string | undefined;

  /**
   * <p>For nested stacks, the stack ID of the top-level stack to which the nested stack ultimately
   *    belongs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Nested stacks</a> in
   *    the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  RootId?: string | undefined;

  /**
   * <p>Information about whether a stack's actual configuration differs, or has
   *     <i>drifted</i>, from its expected configuration, as defined in the stack template
   *    and any values specified as template parameters. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detect
   *     unmanaged configuration changes to stacks and resources with drift detection</a>.</p>
   * @public
   */
  DriftInformation?: StackDriftInformation | undefined;

  /**
   * <p>When set to <code>true</code>, newly created resources are deleted when the operation rolls
   *    back. This includes newly created resources marked with a deletion policy of
   *    <code>Retain</code>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  RetainExceptOnCreate?: boolean | undefined;

  /**
   * <p>Specifies the deletion mode for the stack. Possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code> - Use the standard behavior. Specifying this value is the same as
   *      not specifying this parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FORCE_DELETE_STACK</code> - Delete the stack if it's stuck in a
   *       <code>DELETE_FAILED</code> state due to resource deletion failure.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DeletionMode?: DeletionMode | undefined;

  /**
   * <p>The detailed status of the resource or stack. If <code>CONFIGURATION_COMPLETE</code> is
   *    present, the resource or resource configuration phase has completed and the stabilization of the
   *    resources is in progress. The StackSets <code>CONFIGURATION_COMPLETE</code> when all of the
   *    resources in the stack have reached that event. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stack-resource-configuration-complete.html">Understand
   *     CloudFormation stack creation events</a> in the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  DetailedStatus?: DetailedStatus | undefined;

  /**
   * <p>Information about the most recent operations performed on this stack.</p>
   * @public
   */
  LastOperations?: OperationEntry[] | undefined;
}

/**
 * <p>The output for a <a>DescribeStacks</a> action.</p>
 * @public
 */
export interface DescribeStacksOutput {
  /**
   * <p>A list of stack structures.</p>
   * @public
   */
  Stacks?: Stack[] | undefined;

  /**
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of stacks. If
   *       no additional page exists, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStackSetInput {
  /**
   * <p>The name or unique ID of the StackSet whose description you want.</p>
   * @public
   */
  StackSetName: string | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator
   *       in the organization's management account or as a delegated administrator in a
   *       member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *             <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;
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
 * <p>Detailed information about the drift status of the StackSet.</p>
 *          <p>For StackSets, contains information about the last <i>completed</i> drift
 *    operation performed on the StackSet. Information about drift operations in-progress isn't
 *    included.</p>
 *          <p>For StackSet operations, includes information about drift operations currently being
 *    performed on the StackSet.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Performing drift detection on
 *     CloudFormation StackSets</a> in the <i>CloudFormation User Guide</i>.</p>
 * @public
 */
export interface StackSetDriftDetectionDetails {
  /**
   * <p>Status of the StackSet's actual configuration compared to its expected template and
   *    parameter configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: One or more of the stack instances belonging to the StackSet differs
   *      from the expected template and parameter configuration. A stack instance is considered to have
   *      drifted if one or more of the resources in the associated stack have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation hasn't checked the StackSet for drift.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: All of the stack instances belonging to the StackSet stack match the
   *      expected template and parameter configuration.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DriftStatus?: StackSetDriftStatus | undefined;

  /**
   * <p>The status of the StackSet drift detection operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code>: The drift detection operation completed without failing on any
   *      stack instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The drift detection operation exceeded the specified failure
   *      tolerance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARTIAL_SUCCESS</code>: The drift detection operation completed without exceeding
   *      the failure tolerance for the operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>: The drift detection operation is currently being
   *      performed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code>: The user has canceled the drift detection operation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DriftDetectionStatus?: StackSetDriftDetectionStatus | undefined;

  /**
   * <p>Most recent time when CloudFormation performed a drift detection operation on the StackSet. This
   *    value will be <code>NULL</code> for any StackSet that drift detection hasn't yet been performed
   *    on.</p>
   * @public
   */
  LastDriftCheckTimestamp?: Date | undefined;

  /**
   * <p>The total number of stack instances belonging to this StackSet.</p>
   *          <p>The total number of stack instances is equal to the total of:</p>
   *          <ul>
   *             <li>
   *                <p>Stack instances that match the StackSet configuration.</p>
   *             </li>
   *             <li>
   *                <p>Stack instances that have drifted from the StackSet configuration.</p>
   *             </li>
   *             <li>
   *                <p>Stack instances where the drift detection operation has failed.</p>
   *             </li>
   *             <li>
   *                <p>Stack instances currently being checked for drift.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TotalStackInstancesCount?: number | undefined;

  /**
   * <p>The number of stack instances that have drifted from the expected template and parameter
   *    configuration of the StackSet. A stack instance is considered to have drifted if one or more of
   *    the resources in the associated stack don't match their expected configuration.</p>
   * @public
   */
  DriftedStackInstancesCount?: number | undefined;

  /**
   * <p>The number of stack instances which match the expected template and parameter configuration
   *    of the StackSet.</p>
   * @public
   */
  InSyncStackInstancesCount?: number | undefined;

  /**
   * <p>The number of stack instances that are currently being checked for drift.</p>
   * @public
   */
  InProgressStackInstancesCount?: number | undefined;

  /**
   * <p>The number of stack instances for which the drift detection operation failed.</p>
   * @public
   */
  FailedStackInstancesCount?: number | undefined;
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
 * <p>A structure that contains information about a StackSet. With StackSets, you can provision
 *    stacks across Amazon Web Services accounts and Regions from a single CloudFormation template. Each stack is based
 *    on the same CloudFormation template, but you can customize individual stacks using parameters.</p>
 * @public
 */
export interface StackSet {
  /**
   * <p>The name that's associated with the StackSet.</p>
   * @public
   */
  StackSetName?: string | undefined;

  /**
   * <p>The ID of the StackSet.</p>
   * @public
   */
  StackSetId?: string | undefined;

  /**
   * <p>A description of the StackSet that you specify when the StackSet is created or
   *    updated.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the StackSet.</p>
   * @public
   */
  Status?: StackSetStatus | undefined;

  /**
   * <p>The structure that contains the body of the template that was used to create or update the
   *    StackSet.</p>
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * <p>A list of input parameters for a StackSet.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * <p>The capabilities that are allowed in the StackSet. Some StackSet templates might include
   *    resources that can affect permissions in your Amazon Web Services account—for example, by creating new
   *    Identity and Access Management (IAM) users. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities">Acknowledging IAM resources in CloudFormation templates</a>.</p>
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * <p>A list of tags that specify information about the StackSet. A maximum number of 50 tags can
   *    be specified.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the StackSet.</p>
   * @public
   */
  StackSetARN?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to create or update the stack
   *    set.</p>
   *          <p>Use customized administrator roles to control which users or groups can manage specific
   *    StackSets within the same administrator account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html">Prerequisites for using CloudFormation StackSets</a> in the
   *     <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  AdministrationRoleARN?: string | undefined;

  /**
   * <p>The name of the IAM execution role used to create or update the StackSet.</p>
   *          <p>Use customized execution roles to control which stack resources users and groups can include
   *    in their StackSets.</p>
   * @public
   */
  ExecutionRoleName?: string | undefined;

  /**
   * <p>Detailed information about the drift status of the StackSet.</p>
   *          <p>For StackSets, contains information about the last <i>completed</i> drift
   *    operation performed on the StackSet. Information about drift operations currently in progress
   *    isn't included.</p>
   * @public
   */
  StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails | undefined;

  /**
   * <p>Describes whether StackSets automatically deploys to Organizations accounts that are
   *    added to a target organization or organizational unit (OU). Valid only if the StackSet uses
   *    service-managed permissions.</p>
   * @public
   */
  AutoDeployment?: AutoDeployment | undefined;

  /**
   * <p>Describes how the IAM roles required for StackSet operations are created.</p>
   *          <ul>
   *             <li>
   *                <p>With <code>self-managed</code> permissions, you must create the administrator and
   *      execution roles required to deploy to target accounts. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant
   *       self-managed permissions</a>.</p>
   *             </li>
   *             <li>
   *                <p>With <code>service-managed</code> permissions, StackSets automatically creates the IAM
   *      roles required to deploy to accounts managed by Organizations. For more information,
   *      see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate-trusted-access.html">Activate
   *       trusted access for StackSets with Organizations</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PermissionModel?: PermissionModels | undefined;

  /**
   * <p>[Service-managed permissions] The organization root ID or organizational unit (OU) IDs that
   *    you specified for <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html">DeploymentTargets</a>.</p>
   * @public
   */
  OrganizationalUnitIds?: string[] | undefined;

  /**
   * <p>Describes whether StackSets performs non-conflicting operations concurrently and queues
   *    conflicting operations.</p>
   * @public
   */
  ManagedExecution?: ManagedExecution | undefined;

  /**
   * <p>Returns a list of all Amazon Web Services Regions the given StackSet has stack instances deployed in. The
   *    Amazon Web Services Regions list output is in no particular order.</p>
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeStackSetOutput {
  /**
   * <p>The specified StackSet.</p>
   * @public
   */
  StackSet?: StackSet | undefined;
}

/**
 * @public
 */
export interface DescribeStackSetOperationInput {
  /**
   * <p>The name or the unique stack ID of the StackSet for the stack operation.</p>
   * @public
   */
  StackSetName: string | undefined;

  /**
   * <p>The unique ID of the StackSet operation.</p>
   * @public
   */
  OperationId: string | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator
   *       in the organization's management account or as a delegated administrator in a
   *       member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *             <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;
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
 * <p>Detailed information about the StackSet operation.</p>
 * @public
 */
export interface StackSetOperationStatusDetails {
  /**
   * <p>The number of stack instances for which the StackSet operation failed.</p>
   * @public
   */
  FailedStackInstancesCount?: number | undefined;
}

/**
 * <p>The structure that contains information about a StackSet operation.</p>
 * @public
 */
export interface StackSetOperation {
  /**
   * <p>The unique ID of a StackSet operation.</p>
   * @public
   */
  OperationId?: string | undefined;

  /**
   * <p>The ID of the StackSet.</p>
   * @public
   */
  StackSetId?: string | undefined;

  /**
   * <p>The type of StackSet operation: <code>CREATE</code>, <code>UPDATE</code>, or
   *     <code>DELETE</code>. Create and delete operations affect only the specified stack instances that
   *    are associated with the specified StackSet. Update operations affect both the StackSet itself, in
   *    addition to <i>all</i> associated stack instances.</p>
   * @public
   */
  Action?: StackSetOperationAction | undefined;

  /**
   * <p>The status of the operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation exceeded the specified failure tolerance. The failure
   *      tolerance value that you've set for an operation is applied for each Region during stack create
   *      and update operations. If the number of failed stacks within a Region exceeds the failure
   *      tolerance, the status of the operation in the Region is set to <code>FAILED</code>. This in
   *      turn sets the status of the operation as a whole to <code>FAILED</code>, and CloudFormation cancels
   *      the operation in any remaining Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUEUED</code>: [Service-managed permissions] For automatic deployments that require
   *      a sequence of operations, the operation is queued to be performed. For more information, see
   *      the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-status-codes">StackSets status codes</a> in the <i>CloudFormation User Guide</i>.</p>
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
   *                   <code>STOPPING</code>: The operation is in the process of stopping, at user
   *      request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The operation completed creating or updating all the specified
   *      stacks without exceeding the failure tolerance for the operation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: StackSetOperationStatus | undefined;

  /**
   * <p>The preferences for how CloudFormation performs this StackSet operation.</p>
   * @public
   */
  OperationPreferences?: StackSetOperationPreferences | undefined;

  /**
   * <p>For StackSet operations of action type <code>DELETE</code>, specifies whether to remove the
   *    stack instances from the specified StackSet, but doesn't delete the stacks. You can't
   *    re-associate a retained stack, or add an existing, saved stack to a new StackSet.</p>
   * @public
   */
  RetainStacks?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to perform this StackSet
   *    operation.</p>
   *          <p>Use customized administrator roles to control which users or groups can manage specific
   *    StackSets within the same administrator account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant self-managed
   *     permissions</a> in the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  AdministrationRoleARN?: string | undefined;

  /**
   * <p>The name of the IAM execution role used to create or update the StackSet.</p>
   *          <p>Use customized execution roles to control which stack resources users and groups can include
   *    in their StackSets.</p>
   * @public
   */
  ExecutionRoleName?: string | undefined;

  /**
   * <p>The time at which the operation was initiated. Note that the creation times for the stack
   *    set operation might differ from the creation time of the individual stacks themselves. This is
   *    because CloudFormation needs to perform preparatory work for the operation, such as dispatching the
   *    work to the requested Regions, before actually creating the first stacks.</p>
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * <p>The time at which the StackSet operation ended, across all accounts and Regions specified.
   *    Note that this doesn't necessarily mean that the StackSet operation was successful, or even
   *    attempted, in each account or Region.</p>
   * @public
   */
  EndTimestamp?: Date | undefined;

  /**
   * <p>The Organizations accounts affected by the stack operation. Valid only if the
   *    StackSet uses service-managed permissions.</p>
   * @public
   */
  DeploymentTargets?: DeploymentTargets | undefined;

  /**
   * <p>Detailed information about the drift status of the StackSet. This includes information about
   *    drift operations currently being performed on the StackSet.</p>
   *          <p>This information will only be present for StackSet operations whose <code>Action</code> type
   *    is <code>DETECT_DRIFT</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Performing drift detection on
   *     CloudFormation StackSets</a> in the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails | undefined;

  /**
   * <p>The status of the operation in details.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>Detailed information about the StackSet operation.</p>
   * @public
   */
  StatusDetails?: StackSetOperationStatusDetails | undefined;
}

/**
 * @public
 */
export interface DescribeStackSetOperationOutput {
  /**
   * <p>The specified StackSet operation.</p>
   * @public
   */
  StackSetOperation?: StackSetOperation | undefined;
}

/**
 * @public
 */
export interface DescribeTypeInput {
  /**
   * <p>The kind of extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *         <code>Arn</code>.</p>
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *         <code>Arn</code>.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *         <code>Arn</code>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of a specific version of the extension. The version ID is the value at the end of
   *       the Amazon Resource Name (ARN) assigned to the extension version when it is registered.</p>
   *          <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information
   *       about that specific extension version. Otherwise, it returns information about the default
   *       extension version.</p>
   * @public
   */
  VersionId?: string | undefined;

  /**
   * <p>The publisher ID of the extension publisher.</p>
   *          <p>Extensions provided by Amazon Web Services are not assigned a publisher ID.</p>
   * @public
   */
  PublisherId?: string | undefined;

  /**
   * <p>The version number of a public third-party extension.</p>
   * @public
   */
  PublicVersionNumber?: string | undefined;
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
 * <p>For extensions that are modules, a public third-party extension that must be activated in
 *    your account in order for the module itself to be activated.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/module-versioning.html#requirements-for-modules">Requirements for activating third-party public modules</a> in the
 *     <i>CloudFormation User Guide</i>.</p>
 * @public
 */
export interface RequiredActivatedType {
  /**
   * <p>An alias assigned to the public extension, in this account and Region. If you specify an
   *    alias for the extension, CloudFormation treats the alias as the extension type name within this
   *    account and Region. You must use the alias to refer to the extension in your templates, API
   *    calls, and CloudFormation console.</p>
   * @public
   */
  TypeNameAlias?: string | undefined;

  /**
   * <p>The type name of the public extension.</p>
   *          <p>If you specified a <code>TypeNameAlias</code> when enabling the extension in this account
   *    and Region, CloudFormation treats that alias as the extension's type name within the account and
   *    Region, not the type name of the public extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-alias">Use
   *     aliases to refer to extensions</a> in the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  OriginalTypeName?: string | undefined;

  /**
   * <p>The publisher ID of the extension publisher.</p>
   * @public
   */
  PublisherId?: string | undefined;

  /**
   * <p>A list of the major versions of the extension type that the macro supports.</p>
   * @public
   */
  SupportedMajorVersions?: number[] | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The kind of extension.</p>
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * <p>The name of the extension.</p>
   *          <p>If the extension is a public third-party type you have activated with a type name alias,
   *       CloudFormation returns the type name alias. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">ActivateType</a>.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The ID of the default version of the extension. The default version is used when the
   *       extension version isn't specified.</p>
   *          <p>This applies only to private extensions you have registered in your account. For public
   *       extensions, both those provided by Amazon Web Services and published by third parties, CloudFormation returns
   *         <code>null</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   *          <p>To set the default version of an extension, use <a>SetTypeDefaultVersion</a>.</p>
   * @public
   */
  DefaultVersionId?: string | undefined;

  /**
   * <p>Whether the specified extension version is set as the default version.</p>
   *          <p>This applies only to private extensions you have registered in your account, and
   *       extensions published by Amazon Web Services. For public third-party extensions, whether they are activated
   *       in your account, CloudFormation returns <code>null</code>.</p>
   * @public
   */
  IsDefaultVersion?: boolean | undefined;

  /**
   * <p>The contract test status of the registered extension version. To return the extension test
   *       status of a specific extension version, you must specify <code>VersionId</code>.</p>
   *          <p>This applies only to registered private extension versions. CloudFormation doesn't return this
   *       information for public extensions, whether they are activated in your account.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PASSED</code>: The extension has passed all its contract tests.</p>
   *                <p>An extension must have a test status of <code>PASSED</code> before it can be
   *           published. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html">Publishing
   *             extensions to make them available for public use</a> in the
   *             <i>CloudFormation Command Line Interface (CLI) User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The extension has failed one or more contract tests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>: Contract tests are currently being performed on the
   *           extension.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_TESTED</code>: Contract tests haven't been performed on the
   *           extension.</p>
   *             </li>
   *          </ul>
   * @public
   */
  TypeTestsStatus?: TypeTestsStatus | undefined;

  /**
   * <p>The description of the test status. To return the extension test status of a specific
   *       extension version, you must specify <code>VersionId</code>.</p>
   *          <p>This applies only to registered private extension versions. CloudFormation doesn't return this
   *       information for public extensions, whether they are activated in your account.</p>
   * @public
   */
  TypeTestsStatusDescription?: string | undefined;

  /**
   * <p>The description of the extension.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The schema that defines the extension.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">Resource type
   *         schema</a> in the <i>CloudFormation Command Line Interface (CLI) User Guide</i> and the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/what-is-cloudformation-hooks.html">CloudFormation Hooks User Guide</a>.</p>
   * @public
   */
  Schema?: string | undefined;

  /**
   * <p>For resource type extensions, the provisioning behavior of the resource type. CloudFormation
   *       determines the provisioning type during registration, based on the types of handlers in the
   *       schema handler package submitted.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FULLY_MUTABLE</code>: The resource type includes an update handler to process
   *           updates to the type during stack update operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMMUTABLE</code>: The resource type doesn't include an update handler, so the
   *           type can't be updated and must instead be replaced during stack update operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_PROVISIONABLE</code>: The resource type doesn't include all the following
   *           handlers, and therefore can't actually be provisioned.</p>
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
   * @public
   */
  ProvisioningType?: ProvisioningType | undefined;

  /**
   * <p>The deprecation status of the extension version.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LIVE</code>: The extension is activated or registered and can be used in
   *           CloudFormation operations, dependent on its provisioning behavior and visibility scope.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPRECATED</code>: The extension has been deactivated or deregistered and can no
   *           longer be used in CloudFormation operations.</p>
   *             </li>
   *          </ul>
   *          <p>For public third-party extensions, CloudFormation returns <code>null</code>.</p>
   * @public
   */
  DeprecatedStatus?: DeprecatedStatus | undefined;

  /**
   * <p>Contains logging configuration information for private extensions. This applies only to
   *       private extensions you have registered in your account. For public extensions, both those
   *       provided by Amazon Web Services and published by third parties, CloudFormation returns <code>null</code>. For
   *       more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   * @public
   */
  LoggingConfig?: LoggingConfig | undefined;

  /**
   * <p>For extensions that are modules, the public third-party extensions that must be activated
   *       in your account in order for the module itself to be activated.</p>
   * @public
   */
  RequiredActivatedTypes?: RequiredActivatedType[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to register the extension.
   *       This applies only to private extensions you have registered in your account. For more
   *       information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   *          <p>If the registered extension calls any Amazon Web Services APIs, you must create an <i>
   *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM execution
   *         role</a>
   *             </i> that includes the necessary permissions to call those Amazon Web Services APIs,
   *       and provision that execution role in your account. CloudFormation then assumes that execution role
   *       to provide your extension with the appropriate credentials.</p>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>The scope at which the extension is visible and usable in CloudFormation operations.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PRIVATE</code>: The extension is only visible and usable within the account in
   *           which it is registered. CloudFormation marks any extensions you register as
   *             <code>PRIVATE</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUBLIC</code>: The extension is publicly visible and usable within any Amazon Web Services
   *           account.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * <p>The URL of the source code for the extension.</p>
   * @public
   */
  SourceUrl?: string | undefined;

  /**
   * <p>The URL of a page providing detailed documentation for this extension.</p>
   * @public
   */
  DocumentationUrl?: string | undefined;

  /**
   * <p>When the specified extension version was registered. This applies only to:</p>
   *          <ul>
   *             <li>
   *                <p>Private extensions you have registered in your account. For more information, see
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   *             </li>
   *             <li>
   *                <p>Public extensions you have activated in your account with auto-update specified. For
   *           more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">ActivateType</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>When the specified private extension version was registered or activated in your
   *       account.</p>
   * @public
   */
  TimeCreated?: Date | undefined;

  /**
   * <p>A JSON string that represent the current configuration data for the extension in this
   *       account and Region.</p>
   *          <p>To set the configuration data for an extension, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a>.</p>
   * @public
   */
  ConfigurationSchema?: string | undefined;

  /**
   * <p>The publisher ID of the extension publisher.</p>
   *          <p>This applies only to public third-party extensions. For private registered extensions, and
   *       extensions provided by Amazon Web Services, CloudFormation returns <code>null</code>.</p>
   * @public
   */
  PublisherId?: string | undefined;

  /**
   * <p>For public extensions that have been activated for this account and Region, the type name
   *       of the public extension.</p>
   *          <p>If you specified a <code>TypeNameAlias</code> when enabling the extension in this account
   *       and Region, CloudFormation treats that alias as the extension's type name within the account and
   *       Region, not the type name of the public extension. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-alias">Use aliases to refer to extensions</a> in the
   *       <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  OriginalTypeName?: string | undefined;

  /**
   * <p>For public extensions that have been activated for this account and Region, the Amazon
   *       Resource Name (ARN) of the public extension.</p>
   * @public
   */
  OriginalTypeArn?: string | undefined;

  /**
   * <p>The version number of a public third-party extension.</p>
   *          <p>This applies only if you specify a public extension you have activated in your account, or
   *       specify a public extension without specifying a version. For all other extensions, CloudFormation
   *       returns <code>null</code>.</p>
   * @public
   */
  PublicVersionNumber?: string | undefined;

  /**
   * <p>The latest version of a public extension <i>that is available</i> for
   *       use.</p>
   *          <p>This only applies if you specify a public extension, and you don't specify a version. For
   *       all other requests, CloudFormation returns <code>null</code>.</p>
   * @public
   */
  LatestPublicVersion?: string | undefined;

  /**
   * <p>Whether the extension is activated in the account and Region.</p>
   *          <p>This only applies to public third-party extensions. For all other extensions, CloudFormation
   *       returns <code>null</code>.</p>
   * @public
   */
  IsActivated?: boolean | undefined;

  /**
   * <p>Whether CloudFormation automatically updates the extension in this account and Region when a
   *       new <i>minor</i> version is published by the extension publisher. Major versions
   *       released by the publisher must be manually updated. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-auto">Automatically use new versions of extensions</a> in the
   *         <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  AutoUpdate?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeTypeRegistrationInput {
  /**
   * <p>The identifier for this registration request.</p>
   *          <p>This registration token is generated by CloudFormation when you initiate a registration
   *       request using <a>RegisterType</a>.</p>
   * @public
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
   * <p>The current status of the extension registration request.</p>
   * @public
   */
  ProgressStatus?: RegistrationStatus | undefined;

  /**
   * <p>The description of the extension registration request.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the extension being registered.</p>
   *          <p>For registration requests with a <code>ProgressStatus</code> of other than
   *         <code>COMPLETE</code>, this will be <code>null</code>.</p>
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of this specific version of the extension being
   *       registered.</p>
   *          <p>For registration requests with a <code>ProgressStatus</code> of other than
   *         <code>COMPLETE</code>, this will be <code>null</code>.</p>
   * @public
   */
  TypeVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface DetectStackDriftInput {
  /**
   * <p>The name of the stack for which you want to detect drift.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The logical names of any resources you want to use as filters.</p>
   * @public
   */
  LogicalResourceIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DetectStackDriftOutput {
  /**
   * <p>The ID of the drift detection results of this operation.</p>
   *          <p>CloudFormation generates new results, with a new drift detection ID, each time this operation
   *       is run. However, the number of drift results CloudFormation retains for any given stack, and for
   *       how long, may vary.</p>
   * @public
   */
  StackDriftDetectionId: string | undefined;
}

/**
 * @public
 */
export interface DetectStackResourceDriftInput {
  /**
   * <p>The name of the stack to which the resource belongs.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The logical name of the resource for which to return drift information.</p>
   * @public
   */
  LogicalResourceId: string | undefined;
}

/**
 * @public
 */
export interface DetectStackResourceDriftOutput {
  /**
   * <p>Information about whether the resource's actual configuration has drifted from its
   *       expected template configuration, including actual and expected property values and any
   *       differences detected.</p>
   * @public
   */
  StackResourceDrift: StackResourceDrift | undefined;
}

/**
 * @public
 */
export interface DetectStackSetDriftInput {
  /**
   * <p>The name of the StackSet on which to perform the drift detection operation.</p>
   * @public
   */
  StackSetName: string | undefined;

  /**
   * <p>The user-specified preferences for how CloudFormation performs a StackSet operation.</p>
   *          <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">StackSet operation options</a>.</p>
   * @public
   */
  OperationPreferences?: StackSetOperationPreferences | undefined;

  /**
   * <p>
   *             <i>The ID of the StackSet operation.</i>
   *          </p>
   * @public
   */
  OperationId?: string | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator
   *       in the organization's management account or as a delegated administrator in a
   *       member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *             <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * @public
 */
export interface DetectStackSetDriftOutput {
  /**
   * <p>The ID of the drift detection StackSet operation.</p>
   *          <p>You can use this operation ID with <a>DescribeStackSetOperation</a> to monitor
   *       the progress of the drift detection operation.</p>
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * <p>The input for an <a>EstimateTemplateCost</a> action.</p>
 * @public
 */
export interface EstimateTemplateCostInput {
  /**
   * <p>Structure that contains the template body with a minimum length of 1 byte and a maximum
   *       length of 51,200 bytes.</p>
   *          <p>Conditional: You must pass <code>TemplateBody</code> or <code>TemplateURL</code>. If both
   *       are passed, only <code>TemplateBody</code> is used.</p>
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * <p>The URL of a file that contains the template body. The URL must point to a template that's
   *       located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must
   *       start with <code>https://</code>. URLs from S3 static websites are not supported.</p>
   *          <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If both
   *       are passed, only <code>TemplateBody</code> is used.</p>
   * @public
   */
  TemplateURL?: string | undefined;

  /**
   * <p>A list of <code>Parameter</code> structures that specify input parameters.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * <p>The output for a <a>EstimateTemplateCost</a> action.</p>
 * @public
 */
export interface EstimateTemplateCostOutput {
  /**
   * <p>An Amazon Web Services Simple Monthly Calculator URL with a query string that describes the resources
   *       required to run the template.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>The input for the <a>ExecuteChangeSet</a> action.</p>
 * @public
 */
export interface ExecuteChangeSetInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the change set that you want use to update the
   *       specified stack.</p>
   * @public
   */
  ChangeSetName: string | undefined;

  /**
   * <p>If you specified the name of a change set, specify the stack name or Amazon Resource Name
   *       (ARN) that's associated with the change set you want to execute.</p>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>A unique identifier for this <code>ExecuteChangeSet</code> request. Specify this token if
   *       you plan to retry requests so that CloudFormation knows that you're not attempting to execute a
   *       change set to update a stack with the same name. You might retry <code>ExecuteChangeSet</code>
   *       requests to ensure that CloudFormation successfully received them.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Preserves the state of previously provisioned resources when an operation fails. This
   *       parameter can't be specified when the <code>OnStackFailure</code> parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html">CreateChangeSet</a> API operation was specified.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>True</code> - if the stack creation fails, do nothing. This is equivalent to
   *           specifying <code>DO_NOTHING</code> for the <code>OnStackFailure</code> parameter to the
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html">CreateChangeSet</a> API operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>False</code> - if the stack creation fails, roll back the stack. This is
   *           equivalent to specifying <code>ROLLBACK</code> for the <code>OnStackFailure</code>
   *           parameter to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html">CreateChangeSet</a> API operation.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>True</code>
   *          </p>
   * @public
   */
  DisableRollback?: boolean | undefined;

  /**
   * <p>When set to <code>true</code>, newly created resources are deleted when the operation
   *       rolls back. This includes newly created resources marked with a deletion policy of
   *         <code>Retain</code>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  RetainExceptOnCreate?: boolean | undefined;
}

/**
 * <p>The output for the <a>ExecuteChangeSet</a> action.</p>
 * @public
 */
export interface ExecuteChangeSetOutput {}

/**
 * @public
 */
export interface ExecuteStackRefactorInput {
  /**
   * <p>The ID associated with the stack refactor created from the <a>CreateStackRefactor</a> action.</p>
   * @public
   */
  StackRefactorId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TemplateFormat = {
  JSON: "JSON",
  YAML: "YAML",
} as const;

/**
 * @public
 */
export type TemplateFormat = (typeof TemplateFormat)[keyof typeof TemplateFormat];

/**
 * @public
 */
export interface GetGeneratedTemplateInput {
  /**
   * <p>The language to use to retrieve for the generated template. Supported values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>JSON</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>YAML</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Format?: TemplateFormat | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the generated template. The format is
   *         <code>arn:$\{Partition\}:cloudformation:$\{Region\}:$\{Account\}:generatedtemplate/$\{Id\}</code>.
   *       For example,
   *           <code>arn:aws:cloudformation:<i>us-east-1</i>:<i>123456789012</i>:generatedtemplate/<i>2e8465c1-9a80-43ea-a3a3-4f2d692fe6dc</i>
   *             </code>.</p>
   * @public
   */
  GeneratedTemplateName: string | undefined;
}

/**
 * @public
 */
export interface GetGeneratedTemplateOutput {
  /**
   * <p>The status of the template generation. Supported values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreatePending</code> - the creation of the template is pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreateInProgress</code> - the creation of the template is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeletePending</code> - the deletion of the template is pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeleteInProgress</code> - the deletion of the template is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UpdatePending</code> - the update of the template is pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UpdateInProgress</code> - the update of the template is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - the template operation failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Complete</code> - the template operation is complete.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: GeneratedTemplateStatus | undefined;

  /**
   * <p>The template body of the generated template, in the language specified by the
   *         <code>Language</code> parameter.</p>
   * @public
   */
  TemplateBody?: string | undefined;
}

/**
 * @public
 */
export interface GetHookResultInput {
  /**
   * <p>The unique identifier (ID) of the Hook invocation result that you want details about.
   *       You can get the ID from the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListHookResults.html">ListHookResults</a>
   *       operation.</p>
   * @public
   */
  HookResultId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HookTargetAction = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  IMPORT: "IMPORT",
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type HookTargetAction = (typeof HookTargetAction)[keyof typeof HookTargetAction];

/**
 * <p>The <code>HookTarget</code> data type.</p>
 * @public
 */
export interface HookTarget {
  /**
   * <p>The target type.</p>
   * @public
   */
  TargetType: HookTargetType | undefined;

  /**
   * <p>The target name, for example, <code>AWS::S3::Bucket</code>.</p>
   * @public
   */
  TargetTypeName: string | undefined;

  /**
   * <p>The unique identifier of the Hook invocation target.</p>
   * @public
   */
  TargetId: string | undefined;

  /**
   * <p>The action that invoked the Hook.</p>
   * @public
   */
  Action: HookTargetAction | undefined;
}

/**
 * @public
 */
export interface GetHookResultOutput {
  /**
   * <p>The unique identifier of the Hook result.</p>
   * @public
   */
  HookResultId?: string | undefined;

  /**
   * <p>The specific point in the provisioning process where the Hook is invoked.</p>
   * @public
   */
  InvocationPoint?: HookInvocationPoint | undefined;

  /**
   * <p>The failure mode of the invocation.</p>
   * @public
   */
  FailureMode?: HookFailureMode | undefined;

  /**
   * <p>The name of the Hook that was invoked.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The original public type name of the Hook when an alias is used.</p>
   *          <p>For example, if you activate <code>AWS::Hooks::GuardHook</code> with alias
   *         <code>MyCompany::Custom::GuardHook</code>, then <code>TypeName</code> will be
   *         <code>MyCompany::Custom::GuardHook</code> and <code>OriginalTypeName</code> will be
   *         <code>AWS::Hooks::GuardHook</code>. </p>
   * @public
   */
  OriginalTypeName?: string | undefined;

  /**
   * <p>The version identifier of the Hook that was invoked.</p>
   * @public
   */
  TypeVersionId?: string | undefined;

  /**
   * <p>The version identifier of the Hook configuration data that was used during
   *       invocation.</p>
   * @public
   */
  TypeConfigurationVersionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Hook.</p>
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * <p>The status of the Hook invocation. The following statuses are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HOOK_IN_PROGRESS</code>: The Hook is currently running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOOK_COMPLETE_SUCCEEDED</code>: The Hook completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOOK_COMPLETE_FAILED</code>: The Hook completed but failed validation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOOK_FAILED</code>: The Hook encountered an error during execution.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: HookStatus | undefined;

  /**
   * <p>A message that provides additional details about the Hook invocation status.</p>
   * @public
   */
  HookStatusReason?: string | undefined;

  /**
   * <p>The timestamp when the Hook was invoked.</p>
   * @public
   */
  InvokedAt?: Date | undefined;

  /**
   * <p>Information about the target of the Hook invocation.</p>
   * @public
   */
  Target?: HookTarget | undefined;

  /**
   * <p>A list of objects with additional information and guidance that can help you resolve a
   *       failed Hook invocation.</p>
   * @public
   */
  Annotations?: Annotation[] | undefined;
}

/**
 * <p>The specified target doesn't have any requested Hook invocations.</p>
 * @public
 */
export class HookResultNotFoundException extends __BaseException {
  readonly name: "HookResultNotFoundException" = "HookResultNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HookResultNotFoundException, __BaseException>) {
    super({
      name: "HookResultNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HookResultNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The input for the <a>GetStackPolicy</a> action.</p>
 * @public
 */
export interface GetStackPolicyInput {
  /**
   * <p>The name or unique stack ID that's associated with the stack whose policy you want to
   *       get.</p>
   * @public
   */
  StackName: string | undefined;
}

/**
 * <p>The output for the <a>GetStackPolicy</a> action.</p>
 * @public
 */
export interface GetStackPolicyOutput {
  /**
   * <p>Structure that contains the stack policy body. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html">Prevent updates to stack resources</a> in the
   *       <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  StackPolicyBody?: string | undefined;
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
 * <p>The input for a <a>GetTemplate</a> action.</p>
 * @public
 */
export interface GetTemplateInput {
  /**
   * <p>The name or the unique stack ID that's associated with the stack, which aren't always
   *       interchangeable:</p>
   *          <ul>
   *             <li>
   *                <p>Running stacks: You can specify either the stack's name or its unique stack ID.</p>
   *             </li>
   *             <li>
   *                <p>Deleted stacks: You must specify the unique stack ID.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of a change set for which CloudFormation returns the
   *       associated template. If you specify a name, you must also specify the
   *       <code>StackName</code>.</p>
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * <p>For templates that include transforms, the stage of the template that CloudFormation returns.
   *       To get the user-submitted template, specify <code>Original</code>. To get the template after
   *       CloudFormation has processed all transforms, specify <code>Processed</code>.</p>
   *          <p>If the template doesn't include transforms, <code>Original</code> and
   *         <code>Processed</code> return the same template. By default, CloudFormation specifies
   *         <code>Processed</code>.</p>
   * @public
   */
  TemplateStage?: TemplateStage | undefined;
}

/**
 * <p>The output for <a>GetTemplate</a> action.</p>
 * @public
 */
export interface GetTemplateOutput {
  /**
   * <p>Structure that contains the template body.</p>
   *          <p>CloudFormation returns the same template that was used when the stack was created.</p>
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * <p>The stage of the template that you can retrieve. For stacks, the <code>Original</code> and
   *         <code>Processed</code> templates are always available. For change sets, the
   *         <code>Original</code> template is always available. After CloudFormation finishes creating the
   *       change set, the <code>Processed</code> template becomes available.</p>
   * @public
   */
  StagesAvailable?: TemplateStage[] | undefined;
}

/**
 * <p>Options for the <code>GetTemplateSummary</code> API action.</p>
 * @public
 */
export interface TemplateSummaryConfig {
  /**
   * <p>If set to <code>True</code>, any unrecognized resource types generate warnings and not an
   *    error. Any unrecognized resource types are returned in the <code>Warnings</code> output
   *    parameter.</p>
   * @public
   */
  TreatUnrecognizedResourceTypesAsWarnings?: boolean | undefined;
}

/**
 * <p>The input for the <a>GetTemplateSummary</a> action.</p>
 * @public
 */
export interface GetTemplateSummaryInput {
  /**
   * <p>Structure that contains the template body with a minimum length of 1 byte and a maximum
   *       length of 51,200 bytes.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *       <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or
   *         <code>TemplateURL</code>.</p>
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * <p>The URL of a file that contains the template body. The URL must point to a template (max
   *       size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. The location for
   *       an Amazon S3 bucket must start with <code>https://</code>.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *       <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or
   *         <code>TemplateURL</code>.</p>
   * @public
   */
  TemplateURL?: string | undefined;

  /**
   * <p>The name or the stack ID that's associated with the stack, which aren't always
   *       interchangeable. For running stacks, you can specify either the stack's name or its unique
   *       stack ID. For deleted stack, you must specify the unique stack ID.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *       <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or
   *         <code>TemplateURL</code>.</p>
   * @public
   */
  StackName?: string | undefined;

  /**
   * <p>The name or unique ID of the StackSet from which the stack was created.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *       <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or
   *         <code>TemplateURL</code>.</p>
   * @public
   */
  StackSetName?: string | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator
   *       in the organization's management account or as a delegated administrator in a
   *       member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *             <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;

  /**
   * <p>Specifies options for the <code>GetTemplateSummary</code> API action.</p>
   * @public
   */
  TemplateSummaryConfig?: TemplateSummaryConfig | undefined;
}

/**
 * <p>A set of criteria that CloudFormation uses to validate parameter values. Although other
 *    constraints might be defined in the stack template, CloudFormation returns only the
 *     <code>AllowedValues</code> property.</p>
 * @public
 */
export interface ParameterConstraints {
  /**
   * <p>A list of values that are permitted for a parameter.</p>
   * @public
   */
  AllowedValues?: string[] | undefined;
}

/**
 * <p>The <code>ParameterDeclaration</code> data type.</p>
 * @public
 */
export interface ParameterDeclaration {
  /**
   * <p>The name that's associated with the parameter.</p>
   * @public
   */
  ParameterKey?: string | undefined;

  /**
   * <p>The default value of the parameter.</p>
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>The type of parameter.</p>
   * @public
   */
  ParameterType?: string | undefined;

  /**
   * <p>Flag that indicates whether the parameter value is shown as plain text in logs and in the
   *    Amazon Web Services Management Console.</p>
   * @public
   */
  NoEcho?: boolean | undefined;

  /**
   * <p>The description that's associate with the parameter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The criteria that CloudFormation uses to validate parameter values.</p>
   * @public
   */
  ParameterConstraints?: ParameterConstraints | undefined;
}

/**
 * <p>Describes the target resources of a specific type in your import template (for example,
 *       all <code>AWS::S3::Bucket</code> resources) and the properties you can provide during the
 *       import to identify resources of that type.</p>
 * @public
 */
export interface ResourceIdentifierSummary {
  /**
   * <p>The template resource type of the target resources, such as
   *       <code>AWS::S3::Bucket</code>.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The logical IDs of the target resources of the specified <code>ResourceType</code>, as
   *       defined in the import template.</p>
   * @public
   */
  LogicalResourceIds?: string[] | undefined;

  /**
   * <p>The resource properties you can provide during the import to identify your target
   *       resources. For example, <code>BucketName</code> is a possible identifier property for
   *         <code>AWS::S3::Bucket</code> resources.</p>
   * @public
   */
  ResourceIdentifiers?: string[] | undefined;
}

/**
 * <p>Contains any warnings returned by the <code>GetTemplateSummary</code> API action.</p>
 * @public
 */
export interface Warnings {
  /**
   * <p>A list of all of the unrecognized resource types. This is only returned if the
   *     <code>TemplateSummaryConfig</code> parameter has the
   *     <code>TreatUnrecognizedResourceTypesAsWarning</code> configuration set to
   *    <code>True</code>.</p>
   * @public
   */
  UnrecognizedResourceTypes?: string[] | undefined;
}

/**
 * <p>The output for the <a>GetTemplateSummary</a> action.</p>
 * @public
 */
export interface GetTemplateSummaryOutput {
  /**
   * <p>A list of parameter declarations that describe various properties for each
   *       parameter.</p>
   * @public
   */
  Parameters?: ParameterDeclaration[] | undefined;

  /**
   * <p>The value that's defined in the <code>Description</code> property of the template.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The capabilities found within the template. If your template contains IAM resources, you
   *       must specify the <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code> value for
   *       this parameter when you use the <a>CreateStack</a> or <a>UpdateStack</a>
   *       actions with your template; otherwise, those actions return an
   *         <code>InsufficientCapabilities</code> error.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities">Acknowledging IAM resources in CloudFormation templates</a>.</p>
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * <p>The list of resources that generated the values in the <code>Capabilities</code> response
   *       element.</p>
   * @public
   */
  CapabilitiesReason?: string | undefined;

  /**
   * <p>A list of all the template resource types that are defined in the template, such as
   *         <code>AWS::EC2::Instance</code>, <code>AWS::Dynamo::Table</code>, and
   *         <code>Custom::MyCustomInstance</code>.</p>
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * <p>The Amazon Web Services template format version, which identifies the capabilities of the
   *       template.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The value that's defined for the <code>Metadata</code> property of the template.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>A list of the transforms that are declared in the template.</p>
   * @public
   */
  DeclaredTransforms?: string[] | undefined;

  /**
   * <p>A list of resource identifier summaries that describe the target resources of an import
   *       operation and the properties you can provide during the import to identify the target
   *       resources. For example, <code>BucketName</code> is a possible identifier property for an
   *         <code>AWS::S3::Bucket</code> resource.</p>
   * @public
   */
  ResourceIdentifierSummaries?: ResourceIdentifierSummary[] | undefined;

  /**
   * <p>An object that contains any warnings returned.</p>
   * @public
   */
  Warnings?: Warnings | undefined;
}

/**
 * @public
 */
export interface ImportStacksToStackSetInput {
  /**
   * <p>The name of the StackSet. The name must be unique in the Region where you create your
   *       StackSet.</p>
   * @public
   */
  StackSetName: string | undefined;

  /**
   * <p>The IDs of the stacks you are importing into a StackSet. You import up to 10 stacks per
   *       StackSet at a time.</p>
   *          <p>Specify either <code>StackIds</code> or <code>StackIdsUrl</code>.</p>
   * @public
   */
  StackIds?: string[] | undefined;

  /**
   * <p>The Amazon S3 URL which contains list of stack ids to be inputted.</p>
   *          <p>Specify either <code>StackIds</code> or <code>StackIdsUrl</code>.</p>
   * @public
   */
  StackIdsUrl?: string | undefined;

  /**
   * <p>The list of OU ID's to which the imported stacks must be mapped as deployment
   *       targets.</p>
   * @public
   */
  OrganizationalUnitIds?: string[] | undefined;

  /**
   * <p>The user-specified preferences for how CloudFormation performs a StackSet operation.</p>
   *          <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">StackSet operation options</a>.</p>
   * @public
   */
  OperationPreferences?: StackSetOperationPreferences | undefined;

  /**
   * <p>A unique, user defined, identifier for the StackSet operation.</p>
   * @public
   */
  OperationId?: string | undefined;

  /**
   * <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>For service managed StackSets, specify <code>DELEGATED_ADMIN</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * @public
 */
export interface ImportStacksToStackSetOutput {
  /**
   * <p>The unique identifier for the StackSet operation.</p>
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * <p>The specified stack ARN doesn't exist or stack doesn't exist corresponding to the ARN in input.</p>
 * @public
 */
export class StackNotFoundException extends __BaseException {
  readonly name: "StackNotFoundException" = "StackNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
 * <p>The input for the <a>ListChangeSets</a> action.</p>
 * @public
 */
export interface ListChangeSetsInput {
  /**
   * <p>The name or the Amazon Resource Name (ARN) of the stack for which you want to list change
   *       sets.</p>
   * @public
   */
  StackName: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The output for the <a>ListChangeSets</a> action.</p>
 * @public
 */
export interface ListChangeSetsOutput {
  /**
   * <p>A list of <code>ChangeSetSummary</code> structures that provides the ID and status of each
   *       change set for the specified stack.</p>
   * @public
   */
  Summaries?: ChangeSetSummary[] | undefined;

  /**
   * <p>If the output exceeds 1 MB, a string that identifies the next page of change sets. If
   *       there is no additional page, this value is <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExportsInput {
  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The <code>Export</code> structure describes the exported output values for a stack.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html">Get exported outputs from
 *     a deployed CloudFormation stack</a>.</p>
 * @public
 */
export interface Export {
  /**
   * <p>The stack that contains the exported output name and value.</p>
   * @public
   */
  ExportingStackId?: string | undefined;

  /**
   * <p>The name of exported output value. Use this name and the <code>Fn::ImportValue</code>
   *    function to import the associated value into other stacks. The name is defined in the
   *     <code>Export</code> field in the associated stack's <code>Outputs</code> section.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value of the exported output, such as a resource physical ID. This value is defined in
   *    the <code>Export</code> field in the associated stack's <code>Outputs</code> section.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface ListExportsOutput {
  /**
   * <p>The output for the <a>ListExports</a> action.</p>
   * @public
   */
  Exports?: Export[] | undefined;

  /**
   * <p>If the output exceeds 100 exported output values, a string that identifies the next page
   *       of exports. If there is no additional page, this value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGeneratedTemplatesInput {
  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>If the number of available results exceeds this maximum, the response includes a
   *         <code>NextToken</code> value that you can use for the <code>NextToken</code> parameter to
   *       get the next set of results. By default the <code>ListGeneratedTemplates</code> API action
   *       will return at most 50 results in each response. The maximum value is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The summary of a generated template.</p>
 * @public
 */
export interface TemplateSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the generated template. The format is
   *     <code>arn:$\{Partition\}:cloudformation:$\{Region\}:$\{Account\}:generatedtemplate/$\{Id\}</code>. For
   *    example,
   *      <code>arn:aws:cloudformation:<i>us-east-1</i>:<i>123456789012</i>:generatedtemplate/<i>2e8465c1-9a80-43ea-a3a3-4f2d692fe6dc</i>
   *             </code>.</p>
   * @public
   */
  GeneratedTemplateId?: string | undefined;

  /**
   * <p>The name of the generated template.</p>
   * @public
   */
  GeneratedTemplateName?: string | undefined;

  /**
   * <p>The status of the template generation. Supported values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreatePending</code> - the creation of the template is pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreateInProgress</code> - the creation of the template is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeletePending</code> - the deletion of the template is pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DeleteInProgress</code> - the deletion of the template is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UpdatePending</code> - the update of the template is pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UpdateInProgress</code> - the update of the template is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - the template operation failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Complete</code> - the template operation is complete.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: GeneratedTemplateStatus | undefined;

  /**
   * <p>The reason for the current template generation status. This will provide more details if a
   *    failure happened.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The time the generated template was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time the generated template was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The number of resources in the generated template. This is a total of resources in pending,
   *    in-progress, completed, and failed states.</p>
   * @public
   */
  NumberOfResources?: number | undefined;
}

/**
 * @public
 */
export interface ListGeneratedTemplatesOutput {
  /**
   * <p>A list of summaries of the generated templates.</p>
   * @public
   */
  Summaries?: TemplateSummary[] | undefined;

  /**
   * <p>If the request doesn't return all the remaining results, <code>NextToken</code> is set to
   *       a token. To retrieve the next set of results, call <code>ListGeneratedTemplates</code> again
   *       and use that value for the <code>NextToken</code> parameter. If the request returns all
   *       results, <code>NextToken</code> is set to an empty string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListHookResultsTargetType = {
  CHANGE_SET: "CHANGE_SET",
  CLOUD_CONTROL: "CLOUD_CONTROL",
  RESOURCE: "RESOURCE",
  STACK: "STACK",
} as const;

/**
 * @public
 */
export type ListHookResultsTargetType = (typeof ListHookResultsTargetType)[keyof typeof ListHookResultsTargetType];

/**
 * @public
 */
export interface ListHookResultsInput {
  /**
   * <p>Filters results by target type. Currently, only <code>CHANGE_SET</code> and
   *         <code>CLOUD_CONTROL</code> are supported filter options.</p>
   *          <p>Required when <code>TargetId</code> is specified and cannot be used otherwise.</p>
   * @public
   */
  TargetType?: ListHookResultsTargetType | undefined;

  /**
   * <p>Filters results by the unique identifier of the target the Hook was invoked
   *       against.</p>
   *          <p>For change sets, this is the change set ARN. When the target is a Cloud Control API operation, this
   *       value must be the <code>HookRequestToken</code> returned by the Cloud Control API request. For more
   *       information on the <code>HookRequestToken</code>, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_ProgressEvent.html">ProgressEvent</a>.</p>
   *          <p>Required when <code>TargetType</code> is specified and cannot be used otherwise.</p>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>Filters results by the ARN of the Hook. Can be used alone or in combination with
   *         <code>Status</code>.</p>
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * <p>Filters results by the status of Hook invocations. Can only be used in combination with
   *         <code>TypeArn</code>. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HOOK_IN_PROGRESS</code>: The Hook is currently running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOOK_COMPLETE_SUCCEEDED</code>: The Hook completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOOK_COMPLETE_FAILED</code>: The Hook completed but failed validation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOOK_FAILED</code>: The Hook encountered an error during execution.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: HookStatus | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A <code>ListHookResults</code> call returns a summary of a Hook invocation.</p>
 * @public
 */
export interface HookResultSummary {
  /**
   * <p>The unique identifier for this Hook invocation result.</p>
   * @public
   */
  HookResultId?: string | undefined;

  /**
   * <p>The specific point in the provisioning process where the Hook is invoked.</p>
   * @public
   */
  InvocationPoint?: HookInvocationPoint | undefined;

  /**
   * <p>The failure mode of the invocation.</p>
   * @public
   */
  FailureMode?: HookFailureMode | undefined;

  /**
   * <p>The name of the Hook that was invoked.</p>
   * @public
   */
  TypeName?: string | undefined;

  /**
   * <p>The version of the Hook that was invoked.</p>
   * @public
   */
  TypeVersionId?: string | undefined;

  /**
   * <p>The version of the Hook configuration.</p>
   * @public
   */
  TypeConfigurationVersionId?: string | undefined;

  /**
   * <p>The status of the Hook invocation. The following statuses are possible:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HOOK_IN_PROGRESS</code>: The Hook is currently running.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOOK_COMPLETE_SUCCEEDED</code>: The Hook completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOOK_COMPLETE_FAILED</code>: The Hook completed but failed validation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOOK_FAILED</code>: The Hook encountered an error during execution.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: HookStatus | undefined;

  /**
   * <p>A description of the Hook results status. For example, if the Hook result is in a failed
   *    state, this may contain additional information for the failed state.</p>
   * @public
   */
  HookStatusReason?: string | undefined;

  /**
   * <p>The timestamp when the Hook was invoked.</p>
   *          <p>Only shown in responses when the request does not specify <code>TargetType</code> and
   *     <code>TargetId</code> filters.</p>
   * @public
   */
  InvokedAt?: Date | undefined;

  /**
   * <p>The target type that the Hook was invoked against.</p>
   * @public
   */
  TargetType?: ListHookResultsTargetType | undefined;

  /**
   * <p>The unique identifier of the Hook invocation target.</p>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>The ARN of the Hook that was invoked.</p>
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target stack or request token of the Cloud Control API
   *    operation.</p>
   *          <p>Only shown in responses when the request does not specify <code>TargetType</code> and
   *     <code>TargetId</code> filters.</p>
   * @public
   */
  HookExecutionTarget?: string | undefined;
}

/**
 * @public
 */
export interface ListHookResultsOutput {
  /**
   * <p>The target type.</p>
   * @public
   */
  TargetType?: ListHookResultsTargetType | undefined;

  /**
   * <p>The unique identifier of the Hook invocation target.</p>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>A list of <code>HookResultSummary</code> structures that provides the status and Hook
   *       status reason for each Hook invocation for the specified target.</p>
   * @public
   */
  HookResults?: HookResultSummary[] | undefined;

  /**
   * <p>Pagination token, <code>null</code> or empty if no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImportsInput {
  /**
   * <p>The name of the exported output value. CloudFormation returns the stack names that are
   *       importing this value.</p>
   * @public
   */
  ExportName: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImportsOutput {
  /**
   * <p>A list of stack names that are importing the specified exported output value.</p>
   * @public
   */
  Imports?: string[] | undefined;

  /**
   * <p>A string that identifies the next page of exports. If there is no additional page, this
   *       value is null.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Identifies a scanned resource. This is used with the
 *     <code>ListResourceScanRelatedResources</code> API action.</p>
 * @public
 */
export interface ScannedResourceIdentifier {
  /**
   * <p>The type of the resource, such as <code>AWS::DynamoDB::Table</code>. For the list of
   *    supported resources, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html">Resource type
   *     support for imports and drift detection</a> In the
   *    <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>A list of up to 256 key-value pairs that identifies the scanned resource. The key is the
   *    name of one of the primary identifiers for the resource. (Primary identifiers are specified in
   *    the <code>primaryIdentifier</code> list in the resource schema.) The value is the value of that
   *    primary identifier. For example, for a <code>AWS::DynamoDB::Table</code> resource, the primary
   *    identifiers is <code>TableName</code> so the key-value pair could be <code>"TableName":
   *     "MyDDBTable"</code>. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-primaryidentifier">primaryIdentifier</a> in the <i>CloudFormation Command Line Interface (CLI) User Guide</i>.</p>
   * @public
   */
  ResourceIdentifier: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListResourceScanRelatedResourcesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource scan.</p>
   * @public
   */
  ResourceScanId: string | undefined;

  /**
   * <p>The list of resources for which you want to get the related resources. Up to 100 resources
   *       can be provided.</p>
   * @public
   */
  Resources: ScannedResourceIdentifier[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>If the number of available results exceeds this maximum, the response includes a
   *         <code>NextToken</code> value that you can use for the <code>NextToken</code> parameter to
   *       get the next set of results. By default the <code>ListResourceScanRelatedResources</code> API
   *       action will return up to 100 results in each response. The maximum value is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A scanned resource returned by <code>ListResourceScanResources</code> or
 *     <code>ListResourceScanRelatedResources</code>.</p>
 * @public
 */
export interface ScannedResource {
  /**
   * <p>The type of the resource, such as <code>AWS::DynamoDB::Table</code>. For the list of
   *    supported resources, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html">Resource type
   *     support for imports and drift detection</a> In the
   *    <i>CloudFormation User Guide</i>
   *          </p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>A list of up to 256 key-value pairs that identifies for the scanned resource. The key is the
   *    name of one of the primary identifiers for the resource. (Primary identifiers are specified in
   *    the <code>primaryIdentifier</code> list in the resource schema.) The value is the value of that
   *    primary identifier. For example, for a <code>AWS::DynamoDB::Table</code> resource, the primary
   *    identifiers is <code>TableName</code> so the key-value pair could be <code>"TableName":
   *     "MyDDBTable"</code>. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-primaryidentifier">primaryIdentifier</a> in the <i>CloudFormation Command Line Interface (CLI) User Guide</i>.</p>
   * @public
   */
  ResourceIdentifier?: Record<string, string> | undefined;

  /**
   * <p>If <code>true</code>, the resource is managed by a CloudFormation stack.</p>
   * @public
   */
  ManagedByStack?: boolean | undefined;
}

/**
 * @public
 */
export interface ListResourceScanRelatedResourcesOutput {
  /**
   * <p>List of up to <code>MaxResults</code> resources in the specified resource scan related to
   *       the specified resources.</p>
   * @public
   */
  RelatedResources?: ScannedResource[] | undefined;

  /**
   * <p>If the request doesn't return all the remaining results, <code>NextToken</code> is set to
   *       a token. To retrieve the next set of results, call
   *         <code>ListResourceScanRelatedResources</code> again and use that value for the
   *         <code>NextToken</code> parameter. If the request returns all results, <code>NextToken</code>
   *       is set to an empty string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A resource scan is currently in progress. Only one can be run at a time for an account in a Region.</p>
 * @public
 */
export class ResourceScanInProgressException extends __BaseException {
  readonly name: "ResourceScanInProgressException" = "ResourceScanInProgressException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceScanInProgressException, __BaseException>) {
    super({
      name: "ResourceScanInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceScanInProgressException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListResourceScanResourcesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource scan.</p>
   * @public
   */
  ResourceScanId: string | undefined;

  /**
   * <p>If specified, the returned resources will have the specified resource identifier (or one
   *       of them in the case where the resource has multiple identifiers).</p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>If specified, the returned resources will be of any of the resource types with the
   *       specified prefix.</p>
   * @public
   */
  ResourceTypePrefix?: string | undefined;

  /**
   * <p>If specified, the returned resources will have a matching tag key.</p>
   * @public
   */
  TagKey?: string | undefined;

  /**
   * <p>If specified, the returned resources will have a matching tag value.</p>
   * @public
   */
  TagValue?: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>If the number of available results exceeds this maximum, the response includes a
   *         <code>NextToken</code> value that you can use for the <code>NextToken</code> parameter to
   *       get the next set of results. By default the <code>ListResourceScanResources</code> API action
   *       will return at most 100 results in each response. The maximum value is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListResourceScanResourcesOutput {
  /**
   * <p>List of up to <code>MaxResults</code> resources in the specified resource scan that match
   *       all of the specified filters.</p>
   * @public
   */
  Resources?: ScannedResource[] | undefined;

  /**
   * <p>If the request doesn't return all the remaining results, <code>NextToken</code> is set to
   *       a token. To retrieve the next set of results, call <code>ListResourceScanResources</code>
   *       again and use that value for the <code>NextToken</code> parameter. If the request returns all
   *       results, <code>NextToken</code> is set to an empty string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ScanType = {
  FULL: "FULL",
  PARTIAL: "PARTIAL",
} as const;

/**
 * @public
 */
export type ScanType = (typeof ScanType)[keyof typeof ScanType];

/**
 * @public
 */
export interface ListResourceScansInput {
  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>If the number of available results exceeds this maximum, the response includes a
   *         <code>NextToken</code> value that you can use for the <code>NextToken</code> parameter to
   *       get the next set of results. The default value is 10. The maximum value is 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The scan type that you want to get summary information about. The default is
   *         <code>FULL</code>.</p>
   * @public
   */
  ScanTypeFilter?: ScanType | undefined;
}

/**
 * <p>A summary of the resource scan. This is returned by the <code>ListResourceScan</code> API
 *    action.</p>
 * @public
 */
export interface ResourceScanSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource scan.</p>
   * @public
   */
  ResourceScanId?: string | undefined;

  /**
   * <p>Status of the resource scan.</p>
   *          <dl>
   *             <dt>
   *
   *       IN_PROGRESS
   *
   *     </dt>
   *             <dd>
   *                <p>The resource scan is still in progress.</p>
   *             </dd>
   *             <dt>
   *
   *       COMPLETE
   *
   *     </dt>
   *             <dd>
   *                <p>The resource scan is complete.</p>
   *             </dd>
   *             <dt>
   *
   *       EXPIRED
   *
   *     </dt>
   *             <dd>
   *                <p>The resource scan has expired.</p>
   *             </dd>
   *             <dt>
   *
   *       FAILED
   *
   *     </dt>
   *             <dd>
   *                <p>The resource scan has failed.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  Status?: ResourceScanStatus | undefined;

  /**
   * <p>The reason for the resource scan status, providing more information if a failure
   *    happened.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The time that the resource scan was started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time that the resource scan was finished.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The percentage of the resource scan that has been completed.</p>
   * @public
   */
  PercentageCompleted?: number | undefined;

  /**
   * <p>The scan type that has been completed.</p>
   * @public
   */
  ScanType?: ScanType | undefined;
}

/**
 * @public
 */
export interface ListResourceScansOutput {
  /**
   * <p>The list of scans returned.</p>
   * @public
   */
  ResourceScanSummaries?: ResourceScanSummary[] | undefined;

  /**
   * <p>If the request doesn't return all the remaining results, <code>NextToken</code> is set to
   *       a token. To retrieve the next set of results, call <code>ListResourceScans</code> again and
   *       use that value for the <code>NextToken</code> parameter. If the request returns all results,
   *         <code>NextToken</code> is set to an empty string.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStackInstanceResourceDriftsInput {
  /**
   * <p>The name or unique ID of the StackSet that you want to list drifted resources for.</p>
   * @public
   */
  StackSetName: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *       available results exceeds this maximum, the response includes a <code>NextToken</code> value
   *       that you can assign to the <code>NextToken</code> request parameter to get the next set of
   *       results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The resource drift status of the stack instance. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The resource differs from its expected template configuration in
   *           that the resource has been deleted.</p>
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
   * @public
   */
  StackInstanceResourceDriftStatuses?: StackResourceDriftStatus[] | undefined;

  /**
   * <p>The name of the Amazon Web Services account that you want to list resource drifts for.</p>
   * @public
   */
  StackInstanceAccount: string | undefined;

  /**
   * <p>The name of the Region where you want to list resource drifts.</p>
   * @public
   */
  StackInstanceRegion: string | undefined;

  /**
   * <p>The unique ID of the drift operation.</p>
   * @public
   */
  OperationId: string | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator
   *       in the organization's management account or as a delegated administrator in a
   *       member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *             <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * <p>The structure containing summary information about resource drifts for a stack
 *    instance.</p>
 * @public
 */
export interface StackInstanceResourceDriftsSummary {
  /**
   * <p>The ID of the stack instance.</p>
   * @public
   */
  StackId: string | undefined;

  /**
   * <p>The logical name of the resource specified in the template.</p>
   * @public
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of a resource
   *    supported by CloudFormation.</p>
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * <p>Context information that enables CloudFormation to uniquely identify a resource. CloudFormation uses
   *    context key-value pairs in cases where a resource's logical and physical IDs aren't enough to
   *    uniquely identify that resource. Each context key-value pair specifies a unique resource that
   *    contains the targeted resource.</p>
   * @public
   */
  PhysicalResourceIdContext?: PhysicalResourceIdContextKeyValuePair[] | undefined;

  /**
   * <p>Type of resource. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and
   *     property types reference</a> in the <i>CloudFormation User Guide</i>.</p>
   * @public
   */
  ResourceType: string | undefined;

  /**
   * <p>Status of the actual configuration of the resource compared to its expected configuration.
   *    These will be present only for resources whose <code>StackInstanceResourceDriftStatus</code> is
   *     <code>MODIFIED</code>. </p>
   * @public
   */
  PropertyDifferences?: PropertyDifference[] | undefined;

  /**
   * <p>The drift status of the resource in a stack instance.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETED</code>: The resource differs from its expected template configuration in
   *      that the resource has been deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFIED</code>: One or more resource properties differ from their expected template
   *      values.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The resource's actual configuration matches its expected template
   *      configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation doesn't currently return this value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  StackResourceDriftStatus: StackResourceDriftStatus | undefined;

  /**
   * <p>Time at which the stack instance drift detection operation was initiated.</p>
   * @public
   */
  Timestamp: Date | undefined;
}

/**
 * @public
 */
export interface ListStackInstanceResourceDriftsOutput {
  /**
   * <p>A list of <code>StackInstanceResourceDriftsSummary</code> structures that contain
   *       information about the specified stack instances.</p>
   * @public
   */
  Summaries?: StackInstanceResourceDriftsSummary[] | undefined;

  /**
   * <p>If the previous paginated request didn't return all of the remaining results, the response
   *       object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of
   *       results, call this action again and assign that token to the request object's
   *         <code>NextToken</code> parameter. If there are no remaining results, the previous response
   *       object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
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
 * <p>The filter to apply to stack instances</p>
 * @public
 */
export interface StackInstanceFilter {
  /**
   * <p>The type of filter to apply.</p>
   * @public
   */
  Name?: StackInstanceFilterName | undefined;

  /**
   * <p>The status to filter by.</p>
   * @public
   */
  Values?: string | undefined;
}

/**
 * @public
 */
export interface ListStackInstancesInput {
  /**
   * <p>The name or unique ID of the StackSet that you want to list stack instances for.</p>
   * @public
   */
  StackSetName: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *       available results exceeds this maximum, the response includes a <code>NextToken</code> value
   *       that you can assign to the <code>NextToken</code> request parameter to get the next set of
   *       results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The filter to apply to stack instances</p>
   * @public
   */
  Filters?: StackInstanceFilter[] | undefined;

  /**
   * <p>The name of the Amazon Web Services account that you want to list stack instances for.</p>
   * @public
   */
  StackInstanceAccount?: string | undefined;

  /**
   * <p>The name of the Region where you want to list stack instances.</p>
   * @public
   */
  StackInstanceRegion?: string | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator
   *       in the organization's management account or as a delegated administrator in a
   *       member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for StackSets with
   *       self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify
   *           <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *             <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a
   *             delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * <p>The structure that contains summary information about a stack instance.</p>
 * @public
 */
export interface StackInstanceSummary {
  /**
   * <p>The name or unique ID of the StackSet that the stack instance is associated with.</p>
   * @public
   */
  StackSetId?: string | undefined;

  /**
   * <p>The name of the Amazon Web Services Region that the stack instance is associated with.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>[Self-managed permissions] The name of the Amazon Web Services account that the stack instance is
   *    associated with.</p>
   * @public
   */
  Account?: string | undefined;

  /**
   * <p>The ID of the stack instance.</p>
   * @public
   */
  StackId?: string | undefined;

  /**
   * <p>The status of the stack instance, in terms of its synchronization with its associated stack
   *    set.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INOPERABLE</code>: A <code>DeleteStackInstances</code> operation has failed and left
   *      the stack in an unstable state. Stacks in this state are excluded from further
   *       <code>UpdateStackSet</code> operations. You might need to perform a
   *       <code>DeleteStackInstances</code> operation, with <code>RetainStacks</code> set to
   *       <code>true</code>, to delete the stack instance, and then delete the stack manually.
   *      <code>INOPERABLE</code> can be returned here when the cause is a failed import. If it's due to
   *      a failed import, the operation can be retried once the failures are fixed. To see if this is
   *      due to a failed import, call the <a>DescribeStackInstance</a> API operation, look at
   *      the <code>DetailedStatus</code> member returned in the <code>StackInstanceSummary</code>
   *      member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUTDATED</code>: The stack isn't currently up to date with the StackSet
   *      because:</p>
   *                <ul>
   *                   <li>
   *                      <p>The associated stack failed during a <code>CreateStackSet</code> or
   *         <code>UpdateStackSet</code> operation.</p>
   *                   </li>
   *                   <li>
   *                      <p>The stack was part of a <code>CreateStackSet</code> or <code>UpdateStackSet</code>
   *        operation that failed or was stopped before the stack was created or updated.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CURRENT</code>: The stack is currently up to date with the StackSet.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: StackInstanceStatus | undefined;

  /**
   * <p>The explanation for the specific status code assigned to this stack instance.</p>
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * <p>The detailed status of the stack instance.</p>
   * @public
   */
  StackInstanceStatus?: StackInstanceComprehensiveStatus | undefined;

  /**
   * <p>[Service-managed permissions] The organization root ID or organizational unit (OU) IDs that
   *    you specified for <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html">DeploymentTargets</a>.</p>
   * @public
   */
  OrganizationalUnitId?: string | undefined;

  /**
   * <p>Status of the stack instance's actual configuration compared to the expected template and
   *    parameter configuration of the StackSet it belongs to.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The stack differs from the expected template and parameter
   *      configuration of the StackSet it belongs to. A stack instance is considered to have drifted if
   *      one or more of the resources in the associated stack have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation hasn't checked if the stack instance differs from its
   *      expected StackSet configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The stack instance's actual configuration matches its expected
   *      StackSet configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>: This value is reserved for future use.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DriftStatus?: StackDriftStatus | undefined;

  /**
   * <p>Most recent time when CloudFormation performed a drift detection operation on the stack
   *    instance. This value will be <code>NULL</code> for any stack instance that drift detection hasn't
   *    yet been performed on.</p>
   * @public
   */
  LastDriftCheckTimestamp?: Date | undefined;

  /**
   * <p>The last unique ID of a StackSet operation performed on a stack instance.</p>
   * @public
   */
  LastOperationId?: string | undefined;
}

/**
 * @public
 */
export interface ListStackInstancesOutput {
  /**
   * <p>A list of <code>StackInstanceSummary</code> structures that contain information about the
   *       specified stack instances.</p>
   * @public
   */
  Summaries?: StackInstanceSummary[] | undefined;

  /**
   * <p>If the request doesn't return all the remaining results, <code>NextToken</code> is set to
   *       a token. To retrieve the next set of results, call <code>ListStackInstances</code> again and
   *       assign that token to the request object's <code>NextToken</code> parameter. If the request
   *       returns all results, <code>NextToken</code> is set to <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStackRefactorActionsInput {
  /**
   * <p>The ID associated with the stack refactor created from the <a>CreateStackRefactor</a> action.</p>
   * @public
   */
  StackRefactorId: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *       available results exceeds this maximum, the response includes a <code>NextToken</code> value
   *       that you can assign to the <code>NextToken</code> request parameter to get the next set of
   *       results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const StackRefactorActionType = {
  CREATE: "CREATE",
  MOVE: "MOVE",
} as const;

/**
 * @public
 */
export type StackRefactorActionType = (typeof StackRefactorActionType)[keyof typeof StackRefactorActionType];

/**
 * @public
 * @enum
 */
export const StackRefactorDetection = {
  AUTO: "AUTO",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type StackRefactorDetection = (typeof StackRefactorDetection)[keyof typeof StackRefactorDetection];

/**
 * @public
 * @enum
 */
export const StackRefactorActionEntity = {
  RESOURCE: "RESOURCE",
  STACK: "STACK",
} as const;

/**
 * @public
 */
export type StackRefactorActionEntity = (typeof StackRefactorActionEntity)[keyof typeof StackRefactorActionEntity];

/**
 * <p>Describes the stack and the action that CloudFormation will perform on it if you execute the
 *    stack refactor.</p>
 * @public
 */
export interface StackRefactorAction {
  /**
   * <p>The action that CloudFormation takes on the stack.</p>
   * @public
   */
  Action?: StackRefactorActionType | undefined;

  /**
   * <p>The type that will be evaluated in the <code>StackRefactorAction</code>. The following are
   *    potential <code>Entity</code> types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Stack</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Resource</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Entity?: StackRefactorActionEntity | undefined;

  /**
   * <p>The name or unique identifier associated with the physical instance of the resource.</p>
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * <p>A key-value pair that identifies the target resource. The key is an identifier property (for
   *    example, <code>BucketName</code> for <code>AWS::S3::Bucket</code> resources) and the value is the
   *    actual property value (for example, <code>MyS3Bucket</code>).</p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>A description to help you identify the refactor.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The detection type is one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Auto: CloudFormation figured out the mapping on its own.</p>
   *             </li>
   *             <li>
   *                <p>Manual: The customer provided the mapping in the <code>ResourceMapping</code>
   *      parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Detection?: StackRefactorDetection | undefined;

  /**
   * <p>The description of the detection type.</p>
   * @public
   */
  DetectionReason?: string | undefined;

  /**
   * <p>Assigns one or more tags to specified resources.</p>
   * @public
   */
  TagResources?: Tag[] | undefined;

  /**
   * <p>Removes one or more tags to specified resources.</p>
   * @public
   */
  UntagResources?: string[] | undefined;

  /**
   * <p>The mapping for the stack resource <code>Source</code> and stack resource
   *     <code>Destination</code>.</p>
   * @public
   */
  ResourceMapping?: ResourceMapping | undefined;
}

/**
 * @public
 */
export interface ListStackRefactorActionsOutput {
  /**
   * <p>The stack refactor actions.</p>
   * @public
   */
  StackRefactorActions: StackRefactorAction[] | undefined;

  /**
   * <p>If the request doesn't return all the remaining results, <code>NextToken</code> is set to
   *       a token. To retrieve the next set of results, call this action again and assign that token to
   *       the request object's <code>NextToken</code> parameter. If the request returns all results,
   *         <code>NextToken</code> is set to <code>null</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStackRefactorsInput {
  /**
   * <p>Execution status to use as a filter. Specify one or more execution status codes to list
   *       only stack refactors with the specified execution status codes.</p>
   * @public
   */
  ExecutionStatusFilter?: StackRefactorExecutionStatus[] | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous
   *       call.)</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *       available results exceeds this maximum, the response includes a <code>NextToken</code> value
   *       that you can assign to the <code>NextToken</code> request parameter to get the next set of
   *       results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}
