import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export type AccountGateStatus = "FAILED" | "SKIPPED" | "SUCCEEDED";

/**
 * <p>Structure that contains the results of the account gate function which
 *          CloudFormation invokes, if present, before proceeding with a stack set operation in an
 *          account and Region.</p>
 *          <p>For each account and Region, CloudFormation lets you specify a Lamdba function
 *          that encapsulates any requirements that must be met before CloudFormation can proceed with
 *          a stack set operation in that account and Region. CloudFormation invokes the function each
 *          time a stack set operation is requested for that account and Region; if the function
 *          returns <code>FAILED</code>, CloudFormation cancels the operation in that account and
 *          Region, and sets the stack set operation result status for that account and Region to
 *             <code>FAILED</code>. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html">Configuring a
 *             target account gate</a>.</p>
 */
export interface AccountGateResult {
  /**
   * <p>The status of the account gate function.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The account gate function has determined that the
   *                account and Region passes any requirements for a stack set operation to occur.
   *                CloudFormation proceeds with the stack operation in that account and Region.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The account gate function has determined that the account
   *                and Region does not meet the requirements for a stack set operation to occur. AWS
   *                CloudFormation cancels the stack set operation in that account and Region, and sets
   *                the stack set operation result status for that account and Region to
   *                   <code>FAILED</code>. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIPPED</code>: CloudFormation has skipped calling the account gate
   *                function for this account and Region, for one of the following reasons:</p>
   *                <ul>
   *                   <li>
   *                      <p>An account gate function has not been specified for the account and
   *                      Region. CloudFormation proceeds with the stack set operation in this
   *                      account and Region.</p>
   *                   </li>
   *                   <li>
   *                      <p>The <code>AWSCloudFormationStackSetExecutionRole</code> of the stack set
   *                      adminstration account lacks permissions to invoke the function.
   *                      CloudFormation proceeds with the stack set operation in this account and
   *                      Region.</p>
   *                   </li>
   *                   <li>
   *                      <p>Either no action is necessary, or no action is possible, on the stack.
   *                      CloudFormation skips the stack set operation in this account and
   *                      Region.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  Status?: AccountGateStatus | string;

  /**
   * <p>The reason for the account gate status assigned to this account and Region for the
   *          stack set operation.</p>
   */
  StatusReason?: string;
}

export namespace AccountGateResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountGateResult): any => ({
    ...obj,
  });
}

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
 *          <p>For more information about these account limits, and other CloudFormation
 *          limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation Limits</a> in the <i>CloudFormation User Guide</i>.</p>
 */
export interface AccountLimit {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountLimit): any => ({
    ...obj,
  });
}

/**
 * <p>Contains logging configuration information for an extension.</p>
 */
export interface LoggingConfig {
  /**
   * <p>The ARN of the role that CloudFormation should assume when sending log entries
   *          to CloudWatch logs.</p>
   */
  LogRoleArn: string | undefined;

  /**
   * <p>The Amazon CloudWatch log group to which CloudFormation sends error logging
   *          information when invoking the extension's handlers.</p>
   */
  LogGroupName: string | undefined;
}

export namespace LoggingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoggingConfig): any => ({
    ...obj,
  });
}

export enum ThirdPartyType {
  MODULE = "MODULE",
  RESOURCE = "RESOURCE",
}

export enum VersionBump {
  MAJOR = "MAJOR",
  MINOR = "MINOR",
}

export interface ActivateTypeInput {
  /**
   * <p>The extension type.</p>
   *          <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>,
   *             <code>Type</code>, and <code>PublisherId</code>.</p>
   */
  Type?: ThirdPartyType | string;

  /**
   * <p>The Amazon Resource Number (ARN) of the public extension.</p>
   *          <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>,
   *             <code>Type</code>, and <code>PublisherId</code>.</p>
   */
  PublicTypeArn?: string;

  /**
   * <p>The ID of the extension publisher.</p>
   *          <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>,
   *             <code>Type</code>, and <code>PublisherId</code>.</p>
   */
  PublisherId?: string;

  /**
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify <code>PublicTypeArn</code>, or <code>TypeName</code>,
   *             <code>Type</code>, and <code>PublisherId</code>.</p>
   */
  TypeName?: string;

  /**
   * <p>An alias to assign to the public extension, in this account and region. If you specify
   *          an alias for the extension, CloudFormation treats the alias as the extension type name
   *          within this account and region. You must use the alias to refer to the extension in your
   *          templates, API calls, and CloudFormation console.</p>
   *          <p>An extension alias must be unique within a given account and region. You can activate
   *          the same public resource multiple times in the same account and region, using different
   *          type name aliases.</p>
   */
  TypeNameAlias?: string;

  /**
   * <p>Whether to automatically update the extension in this account and region when a new
   *             <i>minor</i> version is published by the extension publisher. Major
   *          versions released by the publisher must be manually updated.</p>
   *          <p>The default is <code>true</code>.</p>
   */
  AutoUpdate?: boolean;

  /**
   * <p>Contains logging configuration information for an extension.</p>
   */
  LoggingConfig?: LoggingConfig;

  /**
   * <p>The name of the IAM execution role to use to activate the extension.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>Manually updates a previously-activated type to a new major or minor version, if
   *          available. You can also use this parameter to update the value of
   *          <code>AutoUpdate</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MAJOR</code>: CloudFormation updates the extension to the newest major
   *                version, if one is available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MINOR</code>: CloudFormation updates the extension to the newest minor
   *                version, if one is available.</p>
   *             </li>
   *          </ul>
   */
  VersionBump?: VersionBump | string;

  /**
   * <p>The major version of this extension you want to activate, if multiple major versions are
   *          available. The default is the latest major version. CloudFormation uses the latest
   *          available <i>minor</i> version of the major version selected.</p>
   *          <p>You can specify <code>MajorVersion</code> or <code>VersionBump</code>, but not
   *          both.</p>
   */
  MajorVersion?: number;
}

export namespace ActivateTypeInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActivateTypeInput): any => ({
    ...obj,
  });
}

export interface ActivateTypeOutput {
  /**
   * <p>The Amazon Resource Number (ARN) of the activated extension, in this account and
   *          region.</p>
   */
  Arn?: string;
}

export namespace ActivateTypeOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActivateTypeOutput): any => ({
    ...obj,
  });
}

/**
 * <p>An error occurred during a CloudFormation registry operation.</p>
 */
export interface CFNRegistryException extends __SmithyException, $MetadataBearer {
  name: "CFNRegistryException";
  $fault: "client";
  Message?: string;
}

export namespace CFNRegistryException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CFNRegistryException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified extension does not exist in the CloudFormation registry.</p>
 */
export interface TypeNotFoundException extends __SmithyException, $MetadataBearer {
  name: "TypeNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace TypeNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TypeNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource with the name requested already exists.</p>
 */
export interface AlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace AlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>[Service-managed permissions] Describes whether StackSets automatically deploys to
 *             Organizations accounts that are added to a target organization or organizational
 *          unit (OU).</p>
 */
export interface AutoDeployment {
  /**
   * <p>If set to <code>true</code>, StackSets automatically deploys additional stack instances
   *          to Organizations accounts that are added to a target organization or organizational
   *          unit (OU) in the specified Regions. If an account is removed from a target organization or
   *          OU, StackSets deletes stack instances from the account in the specified Regions.</p>
   */
  Enabled?: boolean;

  /**
   * <p>If set to <code>true</code>, stack resources are retained when an account is removed
   *          from a target organization or OU. If set to <code>false</code>, stack resources are
   *          deleted. Specify only if <code>Enabled</code> is set to <code>True</code>.</p>
   */
  RetainStacksOnAccountRemoval?: boolean;
}

export namespace AutoDeployment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoDeployment): any => ({
    ...obj,
  });
}

/**
 * <p>Identifying information for the configuration of a CloudFormation extension.</p>
 */
export interface TypeConfigurationIdentifier {
  /**
   * <p>The Amazon Resource Name (ARN) for the extension, in this account and region.</p>
   *          <p>For public extensions, this will be the ARN assigned when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">activate the type</a> in this account and region. For private extensions, this will
   *          be the ARN assigned when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">register the type</a> in this account and region. </p>
   */
  TypeArn?: string;

  /**
   * <p>The alias specified for this configuration, if one was specified when the configuration
   *          was set.</p>
   */
  TypeConfigurationAlias?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the configuration, in this account and region.</p>
   */
  TypeConfigurationArn?: string;

  /**
   * <p>The type of extension.</p>
   */
  Type?: ThirdPartyType | string;

  /**
   * <p>The name of the extension type to which this configuration applies.</p>
   */
  TypeName?: string;
}

export namespace TypeConfigurationIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TypeConfigurationIdentifier): any => ({
    ...obj,
  });
}

export interface BatchDescribeTypeConfigurationsInput {
  /**
   * <p>The list of identifiers for the desired extension configurations.</p>
   */
  TypeConfigurationIdentifiers: TypeConfigurationIdentifier[] | undefined;
}

export namespace BatchDescribeTypeConfigurationsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDescribeTypeConfigurationsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information concerning an error generated during the setting of configuration
 *          data for a CloudFormation extension.</p>
 */
export interface BatchDescribeTypeConfigurationsError {
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>Identifying information for the configuration of a CloudFormation extension.</p>
   */
  TypeConfigurationIdentifier?: TypeConfigurationIdentifier;
}

export namespace BatchDescribeTypeConfigurationsError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDescribeTypeConfigurationsError): any => ({
    ...obj,
  });
}

/**
 * <p>Detailed information concerning the specification of a CloudFormation extension in a
 *          given account and region.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the
 *             <i>CloudFormation User Guide</i>.</p>
 */
export interface TypeConfigurationDetails {
  /**
   * <p>The Amazon Resource Name (ARN) for the configuration data, in this account and
   *          region.</p>
   */
  Arn?: string;

  /**
   * <p>The alias specified for this configuration, if one was specified when the configuration
   *          was set.</p>
   */
  Alias?: string;

  /**
   * <p>A JSON string specifying the configuration data for the extension, in this account and
   *          region. </p>
   *          <p>If a configuration has not been set for a specified extension, CloudFormation returns
   *             <code>{}</code>.</p>
   */
  Configuration?: string;

  /**
   * <p>When the configuration data was last updated for this extension.</p>
   *          <p>If a configuration has not been set for a specified extension, CloudFormation returns
   *             <code>null</code>.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) for the extension, in this account and region.</p>
   *          <p>For public extensions, this will be the ARN assigned when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">activate the type</a> in this account and region. For private extensions, this will
   *          be the ARN assigned when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">register the type</a> in this account and region. </p>
   */
  TypeArn?: string;

  /**
   * <p>The name of the extension.</p>
   */
  TypeName?: string;

  /**
   * <p>Whether or not this configuration data is the default configuration for the
   *          extension.</p>
   */
  IsDefaultConfiguration?: boolean;
}

export namespace TypeConfigurationDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TypeConfigurationDetails): any => ({
    ...obj,
  });
}

export interface BatchDescribeTypeConfigurationsOutput {
  /**
   * <p>A list of information concerning any errors generated during the setting of the
   *          specified configurations.</p>
   */
  Errors?: BatchDescribeTypeConfigurationsError[];

  /**
   * <p>A list of any of the specified extension configurations that CloudFormation could not
   *          process for any reason.</p>
   */
  UnprocessedTypeConfigurations?: TypeConfigurationIdentifier[];

  /**
   * <p>A list of any of the specified extension configurations from the CloudFormation
   *          registry.</p>
   */
  TypeConfigurations?: TypeConfigurationDetails[];
}

export namespace BatchDescribeTypeConfigurationsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDescribeTypeConfigurationsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified extension configuration cannot be found.</p>
 */
export interface TypeConfigurationNotFoundException extends __SmithyException, $MetadataBearer {
  name: "TypeConfigurationNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace TypeConfigurationNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TypeConfigurationNotFoundException): any => ({
    ...obj,
  });
}

export enum CallAs {
  DELEGATED_ADMIN = "DELEGATED_ADMIN",
  SELF = "SELF",
}

/**
 * <p>The input for the <a>CancelUpdateStack</a> action.</p>
 */
export interface CancelUpdateStackInput {
  /**
   * <p>The name or the unique stack ID that is associated with the stack.</p>
   */
  StackName: string | undefined;

  /**
   * <p>A unique identifier for this <code>CancelUpdateStack</code> request. Specify this
   *          token if you plan to retry requests so that CloudFormation knows that you're not
   *          attempting to cancel an update on a stack with the same name. You might retry
   *          <code>CancelUpdateStack</code> requests to ensure that CloudFormation successfully
   *          received them.</p>
   */
  ClientRequestToken?: string;
}

export namespace CancelUpdateStackInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelUpdateStackInput): any => ({
    ...obj,
  });
}

/**
 * <p>A client request token already exists.</p>
 */
export interface TokenAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "TokenAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace TokenAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TokenAlreadyExistsException): any => ({
    ...obj,
  });
}

export enum Capability {
  CAPABILITY_AUTO_EXPAND = "CAPABILITY_AUTO_EXPAND",
  CAPABILITY_IAM = "CAPABILITY_IAM",
  CAPABILITY_NAMED_IAM = "CAPABILITY_NAMED_IAM",
}

export enum Category {
  ACTIVATED = "ACTIVATED",
  AWS_TYPES = "AWS_TYPES",
  REGISTERED = "REGISTERED",
  THIRD_PARTY = "THIRD_PARTY",
}

export enum ChangeAction {
  Add = "Add",
  Dynamic = "Dynamic",
  Import = "Import",
  Modify = "Modify",
  Remove = "Remove",
}

export enum ChangeSource {
  Automatic = "Automatic",
  DirectModification = "DirectModification",
  ParameterReference = "ParameterReference",
  ResourceAttribute = "ResourceAttribute",
  ResourceReference = "ResourceReference",
}

export enum EvaluationType {
  Dynamic = "Dynamic",
  Static = "Static",
}

export enum ResourceAttribute {
  CreationPolicy = "CreationPolicy",
  DeletionPolicy = "DeletionPolicy",
  Metadata = "Metadata",
  Properties = "Properties",
  Tags = "Tags",
  UpdatePolicy = "UpdatePolicy",
}

export enum RequiresRecreation {
  Always = "Always",
  Conditionally = "Conditionally",
  Never = "Never",
}

/**
 * <p>The field that CloudFormation will change, such as the name of a resource's
 *          property, and whether the resource will be recreated.</p>
 */
export interface ResourceTargetDefinition {
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
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">property</a> in the CloudFormation User Guide.</p>
   */
  RequiresRecreation?: RequiresRecreation | string;
}

export namespace ResourceTargetDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceTargetDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>For a resource with <code>Modify</code> as the action, the
 *             <code>ResourceChange</code> structure describes the changes CloudFormation will make
 *          to that resource.</p>
 */
export interface ResourceChangeDetail {
  /**
   * <p>A <code>ResourceTargetDefinition</code> structure that describes the field that
   *          CloudFormation will change and whether the resource will be recreated.</p>
   */
  Target?: ResourceTargetDefinition;

  /**
   * <p>Indicates whether CloudFormation can determine the target value, and whether the
   *          target value will change before you execute a change set.</p>
   *          <p>For <code>Static</code> evaluations, CloudFormation can determine that the target
   *          value will change, and its value. For example, if you directly modify the
   *             <code>InstanceType</code> property of an EC2 instance, CloudFormation knows that
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
   *                   <code>AWS::CloudFormation::Stack</code> resource, CloudFormation sets the
   *                   <code>ChangeSource</code> to <code>Automatic</code> because the nested stack's
   *                template might have changed. Changes to a nested stack's template aren't visible to
   *                CloudFormation until you run an update on the parent stack.</p>
   *             </li>
   *          </ul>
   */
  ChangeSource?: ChangeSource | string;

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
}

export namespace ResourceChangeDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceChangeDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the module from which the resource was created, if the
 *          resource was created from a module included in the stack template.</p>
 *          <p>For more information on modules, see <a href="AWSCloudFormation/latest/UserGuide/modules.html">Using modules to encapsulate and
 *             reuse resource configurations</a> in the <i>CloudFormation User
 *             Guide</i>.</p>
 */
export interface ModuleInfo {
  /**
   * <p>A concantenated list of the the module type or types containing the resource. Module
   *          types are listed starting with the inner-most nested module, and separated by
   *             <code>/</code>.</p>
   *          <p>In the following example, the resource was created from a module of type
   *             <code>AWS::First::Example::MODULE</code>, that is nested inside a parent module of type
   *             <code>AWS::Second::Example::MODULE</code>.</p>
   *          <p>
   *             <code>AWS::First::Example::MODULE/AWS::Second::Example::MODULE</code>
   *          </p>
   */
  TypeHierarchy?: string;

  /**
   * <p>A concantenated list of the logical IDs of the module or modules containing the
   *          resource. Modules are listed starting with the inner-most nested module, and separated by
   *             <code>/</code>.</p>
   *          <p>In the following example, the resource was created from a module, <code>moduleA</code>,
   *          that is nested inside a parent module, <code>moduleB</code>.</p>
   *          <p>
   *             <code>moduleA/moduleB</code>
   *          </p>
   *          <p>For more information, see <a href="AWSCloudFormation/latest/UserGuide/modules.html#module-ref-resources">Referencing
   *             resources in a module</a> in the <i>CloudFormation User
   *             Guide</i>.</p>
   */
  LogicalIdHierarchy?: string;
}

export namespace ModuleInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModuleInfo): any => ({
    ...obj,
  });
}

export enum Replacement {
  Conditional = "Conditional",
  False = "False",
  True = "True",
}

/**
 * <p>The <code>ResourceChange</code> structure describes the resource and the action that
 *          CloudFormation will perform on it if you execute this change set.</p>
 */
export interface ResourceChange {
  /**
   * <p>The action that CloudFormation takes on the resource, such as <code>Add</code>
   *          (adds a new resource), <code>Modify</code> (changes a resource), <code>Remove</code>
   *          (deletes a resource), <code>Import</code> (imports a resource), or <code>Dynamic</code>
   *          (exact action for the resource cannot be determined).</p>
   */
  Action?: ChangeAction | string;

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
   * <p>The type of CloudFormation resource, such as
   *          <code>AWS::S3::Bucket</code>.</p>
   */
  ResourceType?: string;

  /**
   * <p>For the <code>Modify</code> action, indicates whether CloudFormation will replace
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
   * <p>For the <code>Modify</code> action, indicates which resource attribute is triggering
   *          this update, such as a change in the resource attribute's <code>Metadata</code>,
   *             <code>Properties</code>, or <code>Tags</code>.</p>
   */
  Scope?: (ResourceAttribute | string)[];

  /**
   * <p>For the <code>Modify</code> action, a list of <code>ResourceChangeDetail</code>
   *          structures that describes the changes that CloudFormation will make to the resource.
   *       </p>
   */
  Details?: ResourceChangeDetail[];

  /**
   * <p>The change set ID of the nested change set.</p>
   */
  ChangeSetId?: string;

  /**
   * <p>Contains information about the module from which the resource was created, if the
   *          resource was created from a module included in the stack template.</p>
   */
  ModuleInfo?: ModuleInfo;
}

export namespace ResourceChange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceChange): any => ({
    ...obj,
  });
}

export enum ChangeType {
  Resource = "Resource",
}

/**
 * <p>The <code>Change</code> structure describes the changes CloudFormation will
 *          perform if you execute the change set.</p>
 */
export interface Change {
  /**
   * <p>The type of entity that CloudFormation changes. Currently, the only entity type
   *          is <code>Resource</code>.</p>
   */
  Type?: ChangeType | string;

  /**
   * <p>A <code>ResourceChange</code> structure that describes the resource and action that
   *          CloudFormation will perform.</p>
   */
  ResourceChange?: ResourceChange;
}

export namespace Change {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Change): any => ({
    ...obj,
  });
}

/**
 * <p>The specified change set name or ID doesn't exit. To view valid change sets for a
 *          stack, use the <code>ListChangeSets</code> action.</p>
 */
export interface ChangeSetNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ChangeSetNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ChangeSetNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangeSetNotFoundException): any => ({
    ...obj,
  });
}

export enum ChangeSetStatus {
  CREATE_COMPLETE = "CREATE_COMPLETE",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  CREATE_PENDING = "CREATE_PENDING",
  DELETE_COMPLETE = "DELETE_COMPLETE",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  DELETE_PENDING = "DELETE_PENDING",
  FAILED = "FAILED",
}

export enum ExecutionStatus {
  AVAILABLE = "AVAILABLE",
  EXECUTE_COMPLETE = "EXECUTE_COMPLETE",
  EXECUTE_FAILED = "EXECUTE_FAILED",
  EXECUTE_IN_PROGRESS = "EXECUTE_IN_PROGRESS",
  OBSOLETE = "OBSOLETE",
  UNAVAILABLE = "UNAVAILABLE",
}

/**
 * <p>The <code>ChangeSetSummary</code> structure describes a change set, its status, and
 *          the stack with which it's associated.</p>
 */
export interface ChangeSetSummary {
  /**
   * <p>The ID of the stack with which the change set is associated.</p>
   */
  StackId?: string;

  /**
   * <p>The name of the stack with which the change set is associated.</p>
   */
  StackName?: string;

  /**
   * <p>The ID of the change set.</p>
   */
  ChangeSetId?: string;

  /**
   * <p>The name of the change set.</p>
   */
  ChangeSetName?: string;

  /**
   * <p>If the change set execution status is <code>AVAILABLE</code>, you can execute the
   *          change set. If you can’t execute the change set, the status indicates why. For example, a
   *          change set might be in an <code>UNAVAILABLE</code> state because CloudFormation is
   *          still creating it or in an <code>OBSOLETE</code> state because the stack was already
   *          updated.</p>
   */
  ExecutionStatus?: ExecutionStatus | string;

  /**
   * <p>The state of the change set, such as <code>CREATE_IN_PROGRESS</code>,
   *             <code>CREATE_COMPLETE</code>, or <code>FAILED</code>.</p>
   */
  Status?: ChangeSetStatus | string;

  /**
   * <p>A description of the change set's status. For example, if your change set is in the
   *             <code>FAILED</code> state, CloudFormation shows the error message.</p>
   */
  StatusReason?: string;

  /**
   * <p>The start time when the change set was created, in UTC.</p>
   */
  CreationTime?: Date;

  /**
   * <p>Descriptive information about the change set.</p>
   */
  Description?: string;

  /**
   * <p>Specifies the current setting of <code>IncludeNestedStacks</code> for the change
   *          set.</p>
   */
  IncludeNestedStacks?: boolean;

  /**
   * <p>The parent change set ID.</p>
   */
  ParentChangeSetId?: string;

  /**
   * <p>The root change set ID.</p>
   */
  RootChangeSetId?: string;
}

export namespace ChangeSetSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChangeSetSummary): any => ({
    ...obj,
  });
}

export enum ChangeSetType {
  CREATE = "CREATE",
  IMPORT = "IMPORT",
  UPDATE = "UPDATE",
}

/**
 * <p>The input for the <a>ContinueUpdateRollback</a> action.</p>
 */
export interface ContinueUpdateRollbackInput {
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

  /**
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role
   *          that CloudFormation assumes to roll back the stack. CloudFormation uses the role's
   *          credentials to make calls on your behalf. CloudFormation always uses this role for all
   *          future operations on the stack. As long as users have permission to operate on the stack,
   *          CloudFormation uses this role even if the users don't have permission to pass it.
   *          Ensure that the role grants least privilege.</p>
   *          <p>If you don't specify a value, CloudFormation uses the role that was previously
   *          associated with the stack. If no role is available, CloudFormation uses a temporary
   *          session that is generated from your user credentials.</p>
   */
  RoleARN?: string;

  /**
   * <p>A list of the logical IDs of the resources that CloudFormation skips during the
   *          continue update rollback operation. You can specify only resources that are in the
   *             <code>UPDATE_FAILED</code> state because a rollback failed. You can't specify resources
   *          that are in the <code>UPDATE_FAILED</code> state for other reasons, for example, because an
   *          update was cancelled. To check why a resource update failed, use the <a>DescribeStackResources</a> action, and view the resource status reason. </p>
   *          <important>
   *             <p>Specify this property to skip rolling back resources that CloudFormation
   *             can't successfully roll back. We recommend that you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> troubleshoot</a> resources before skipping them. CloudFormation sets
   *             the status of the specified resources to <code>UPDATE_COMPLETE</code> and continues to
   *             roll back the stack. After the rollback is complete, the state of the skipped resources
   *             will be inconsistent with the state of the resources in the stack template. Before
   *             performing another stack update, you must update the stack or resources to be consistent
   *             with each other. If you don't, subsequent stack updates might fail, and the stack will
   *             become unrecoverable.</p>
   *          </important>
   *          <p>Specify the minimum number of resources required to successfully roll back your stack.
   *          For example, a failed resource update might cause dependent resources to fail. In this
   *          case, it might not be necessary to skip the dependent resources.</p>
   *          <p>To skip resources that are part of nested stacks, use the following format:
   *             <code>NestedStackName.ResourceLogicalID</code>. If you want to specify the logical ID of
   *          a stack resource (<code>Type: AWS::CloudFormation::Stack</code>) in the
   *             <code>ResourcesToSkip</code> list, then its corresponding embedded stack must be in one
   *          of the following states: <code>DELETE_IN_PROGRESS</code>, <code>DELETE_COMPLETE</code>, or
   *             <code>DELETE_FAILED</code>.</p>
   *          <note>
   *             <p>Don't confuse a child stack's name with its corresponding logical ID defined in the
   *             parent stack. For an example of a continue update rollback operation with nested stacks,
   *             see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html#nested-stacks">Using ResourcesToSkip to recover a nested stacks hierarchy</a>.</p>
   *          </note>
   */
  ResourcesToSkip?: string[];

  /**
   * <p>A unique identifier for this <code>ContinueUpdateRollback</code> request. Specify
   *          this token if you plan to retry requests so that CloudFormationknows that you're not
   *          attempting to continue the rollback to a stack with the same name. You might retry
   *          <code>ContinueUpdateRollback</code> requests to ensure that CloudFormation
   *          successfully received them.</p>
   */
  ClientRequestToken?: string;
}

export namespace ContinueUpdateRollbackInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContinueUpdateRollbackInput): any => ({
    ...obj,
  });
}

/**
 * <p>The output for a <a>ContinueUpdateRollback</a> action.</p>
 */
export interface ContinueUpdateRollbackOutput {}

export namespace ContinueUpdateRollbackOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContinueUpdateRollbackOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The Parameter data type.</p>
 */
export interface Parameter {
  /**
   * <p>The key associated with the parameter. If you don't specify a key and value for a
   *          particular parameter, CloudFormation uses the default value that is specified in your
   *          template.</p>
   */
  ParameterKey?: string;

  /**
   * <p>The input value associated with the parameter.</p>
   */
  ParameterValue?: string;

  /**
   * <p>During a stack update, use the existing parameter value that the stack is using for a
   *          given parameter key. If you specify <code>true</code>, do not specify a parameter
   *          value.</p>
   */
  UsePreviousValue?: boolean;

  /**
   * <p>Read-only. The value that corresponds to a Systems Manager parameter key. This field
   *          is returned only for <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html#aws-ssm-parameter-types">
   *                <code>SSM</code> parameter types</a> in the template.</p>
   */
  ResolvedValue?: string;
}

export namespace Parameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Parameter): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the target resource of an import operation.</p>
 */
export interface ResourceToImport {
  /**
   * <p>The type of resource to import into your stack, such as <code>AWS::S3::Bucket</code>.
   *          For a list of supported resource types, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html">Resources that support import operations</a> in the CloudFormation User
   *          Guide.</p>
   */
  ResourceType: string | undefined;

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
}

export namespace ResourceToImport {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceToImport): any => ({
    ...obj,
  });
}

/**
 * <p>A rollback trigger CloudFormation monitors during creation and updating of stacks. If any of
 *          the alarms you specify goes to ALARM state during the stack operation or within the
 *          specified monitoring period afterwards, CloudFormation rolls back the entire stack
 *          operation. </p>
 */
export interface RollbackTrigger {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RollbackTrigger): any => ({
    ...obj,
  });
}

/**
 * <p>Structure containing the rollback triggers for CloudFormation to monitor during stack creation
 *          and updating operations, and for the specified monitoring period afterwards.</p>
 *          <p>Rollback triggers enable you to have CloudFormation monitor the state of your application
 *          during stack creation and updating, and to roll back that operation if the application
 *          breaches the threshold of any of the alarms you've specified. For more information, see
 *             <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html">Monitor and Roll Back Stack
 *             Operations</a>.</p>
 */
export interface RollbackConfiguration {
  /**
   * <p>The triggers to monitor during stack creation or update actions. </p>
   *          <p>By default, CloudFormation saves the rollback triggers specified for a stack and applies them
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
}

export namespace RollbackConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RollbackConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The Tag type enables you to specify a key-value pair that can be used to store
 *          information about an CloudFormation stack.</p>
 */
export interface Tag {
  /**
   * <p>
   *             <i>Required</i>. A string used to identify this tag. You can specify a
   *          maximum of 128 characters for a tag key. Tags owned by Amazon Web Services (Amazon Web Services) have the
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>CreateChangeSet</a> action.</p>
 */
export interface CreateChangeSetInput {
  /**
   * <p>The name or the unique ID of the stack for which you are creating a change set.
   *          CloudFormation generates the change set by comparing this stack's information with the
   *          information that you submit, such as a modified template or different parameter input
   *          values.</p>
   */
  StackName: string | undefined;

  /**
   * <p>A structure that contains the body of the revised template, with a minimum length of
   *          1 byte and a maximum length of 51,200 bytes. CloudFormation generates the change set by
   *          comparing this template with the template of the stack that you specified.</p>
   *          <p>Conditional: You must specify only <code>TemplateBody</code> or
   *             <code>TemplateURL</code>.</p>
   */
  TemplateBody?: string;

  /**
   * <p>The location of the file that contains the revised template. The URL must point to a
   *          template (max size: 460,800 bytes) that is located in an S3 bucket or a Systems Manager
   *          document. CloudFormation generates the change set by comparing this template with the
   *          stack that you specified.</p>
   *          <p>Conditional: You must specify only <code>TemplateBody</code> or
   *             <code>TemplateURL</code>.</p>
   */
  TemplateURL?: string;

  /**
   * <p>Whether to reuse the template that is associated with the stack to create the change
   *          set.</p>
   */
  UsePreviousTemplate?: boolean;

  /**
   * <p>A list of <code>Parameter</code> structures that specify input parameters for the
   *          change set. For more information, see the <a>Parameter</a> data type.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>In some cases, you must explicitly acknowledge that your stack template contains certain
   *          capabilities in order for CloudFormation to create the stack.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in
   *                your Amazon Web Services account; for example, by creating new Identity and Access Management
   *                (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one
   *                of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the
   *                   <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code>
   *                capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either
   *                      capability.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you
   *                         <i>must</i> specify <code>CAPABILITY_NAMED_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
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
   *                   Resources in CloudFormation Templates</a>.</p>
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
   *                this capability. This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.</p>
   *                <note>
   *                   <p>This capacity does not apply to creating change sets, and specifying it when
   *                   creating change sets has no effect.</p>
   *                   <p>If you want to create a stack from a stack template that contains macros
   *                      <i>and</i> nested stacks, you must create or update the stack
   *                   directly from the template using the <a>CreateStack</a> or <a>UpdateStack</a> action, and specifying this capability.</p>
   *                </note>
   *                <p>For more information on macros, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using CloudFormation Macros to
   *                   Perform Custom Processing on Templates</a>.</p>
   *             </li>
   *          </ul>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>The template resource types that you have permissions to work with if you execute
   *          this change set, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or
   *             <code>Custom::MyCustomInstance</code>.</p>
   *          <p>If the list of resource types doesn't include a resource type that you're updating,
   *          the stack update fails. By default, CloudFormation grants permissions to all resource
   *          types. Identity and Access Management (IAM) uses this parameter for condition keys in
   *          IAM policies for CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with
   *             Identity and Access Management</a> in the CloudFormation User
   *          Guide.</p>
   */
  ResourceTypes?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role
   *          that CloudFormation assumes when executing the change set. CloudFormation uses the
   *          role's credentials to make calls on your behalf. CloudFormation uses this role for all
   *          future operations on the stack. As long as users have permission to operate on the stack,
   *          CloudFormation uses this role even if the users don't have permission to pass it.
   *          Ensure that the role grants least privilege.</p>
   *          <p>If you don't specify a value, CloudFormation uses the role that was previously
   *          associated with the stack. If no role is available, CloudFormation uses a temporary
   *          session that is generated from your user credentials.</p>
   */
  RoleARN?: string;

  /**
   * <p>The rollback triggers for CloudFormation to monitor during stack creation and
   *          updating operations, and for the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

  /**
   * <p>The Amazon Resource Names (ARNs) of Amazon Simple Notification Service (Amazon SNS)
   *          topics that CloudFormation associates with the stack. To remove all associated
   *          notification topics, specify an empty list.</p>
   */
  NotificationARNs?: string[];

  /**
   * <p>Key-value pairs to associate with this stack. CloudFormation also propagates
   *          these tags to resources in the stack. You can specify a maximum of 50 tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the change set. The name must be unique among all change sets that are
   *          associated with the specified stack.</p>
   *          <p>A change set name can contain only alphanumeric, case sensitive characters and
   *          hyphens. It must start with an alphabetic character and cannot exceed 128
   *          characters.</p>
   */
  ChangeSetName: string | undefined;

  /**
   * <p>A unique identifier for this <code>CreateChangeSet</code> request. Specify this token
   *          if you plan to retry requests so that CloudFormation knows that you're not attempting
   *          to create another change set with the same name. You might retry
   *             <code>CreateChangeSet</code> requests to ensure that CloudFormation successfully
   *          received them.</p>
   */
  ClientToken?: string;

  /**
   * <p>A description to help you identify this change set.</p>
   */
  Description?: string;

  /**
   * <p>The type of change set operation. To create a change set for a new stack, specify
   *             <code>CREATE</code>. To create a change set for an existing stack, specify
   *             <code>UPDATE</code>. To create a change set for an import operation, specify
   *             <code>IMPORT</code>.</p>
   *          <p>If you create a change set for a new stack, CloudFormation creates a stack with a
   *          unique stack ID, but no template or resources. The stack will be in the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-describing-stacks.html#d0e11995">
   *                <code>REVIEW_IN_PROGRESS</code>
   *             </a> state until you execute the change
   *          set.</p>
   *          <p>By default, CloudFormation specifies <code>UPDATE</code>. You can't use the
   *             <code>UPDATE</code> type to create a change set for a new stack or the
   *             <code>CREATE</code> type to create a change set for an existing stack.</p>
   */
  ChangeSetType?: ChangeSetType | string;

  /**
   * <p>The resources to import into your stack.</p>
   */
  ResourcesToImport?: ResourceToImport[];

  /**
   * <p>Creates a change set for the all nested stacks specified in the template. The default
   *          behavior of this action is set to <code>False</code>. To include nested sets in a change
   *          set, specify <code>True</code>.</p>
   */
  IncludeNestedStacks?: boolean;
}

export namespace CreateChangeSetInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChangeSetInput): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the <a>CreateChangeSet</a> action.</p>
 */
export interface CreateChangeSetOutput {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChangeSetOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The template contains resources with capabilities that weren't specified in the
 *          Capabilities parameter.</p>
 */
export interface InsufficientCapabilitiesException extends __SmithyException, $MetadataBearer {
  name: "InsufficientCapabilitiesException";
  $fault: "client";
  Message?: string;
}

export namespace InsufficientCapabilitiesException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsufficientCapabilitiesException): any => ({
    ...obj,
  });
}

/**
 * <p>The quota for the resource has already been reached.</p>
 *          <p>For information on resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">Limits</a> in
 *          the <i>CloudFormation User Guide</i>.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

export enum OnFailure {
  DELETE = "DELETE",
  DO_NOTHING = "DO_NOTHING",
  ROLLBACK = "ROLLBACK",
}

/**
 * <p>The input for <a>CreateStack</a> action.</p>
 */
export interface CreateStackInput {
  /**
   * <p>The name that is associated with the stack. The name must be unique in the Region in
   *          which you are creating the stack.</p>
   *          <note>
   *             <p>A stack name can contain only alphanumeric characters (case sensitive) and hyphens.
   *             It must start with an alphabetical character and cannot be longer than 128
   *             characters.</p>
   *          </note>
   */
  StackName: string | undefined;

  /**
   * <p>Structure containing the template body with a minimum length of 1 byte and a maximum
   *          length of 51,200 bytes. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify either the <code>TemplateBody</code> or the
   *             <code>TemplateURL</code> parameter, but not both.</p>
   */
  TemplateBody?: string;

  /**
   * <p>Location of file containing the template body. The URL must point to a template (max
   *          size: 460,800 bytes) that is located in an Amazon S3 bucket or a Systems Manager document.
   *          For more information, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify either the <code>TemplateBody</code> or the
   *             <code>TemplateURL</code> parameter, but not both.</p>
   */
  TemplateURL?: string;

  /**
   * <p>A list of <code>Parameter</code> structures that specify input parameters for the
   *          stack. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data
   *          type.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>Set to <code>true</code> to disable rollback of the stack if stack creation failed.
   *          You can specify either <code>DisableRollback</code> or <code>OnFailure</code>, but not
   *          both.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  DisableRollback?: boolean;

  /**
   * <p>The rollback triggers for CloudFormation to monitor during stack creation and
   *          updating operations, and for the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

  /**
   * <p>The amount of time that can pass before the stack status becomes CREATE_FAILED; if
   *             <code>DisableRollback</code> is not set or is set to <code>false</code>, the stack will
   *          be rolled back.</p>
   */
  TimeoutInMinutes?: number;

  /**
   * <p>The Simple Notification Service (SNS) topic ARNs to publish stack related events. You
   *          can find your SNS topic ARNs using the SNS console or your Command Line Interface
   *          (CLI).</p>
   */
  NotificationARNs?: string[];

  /**
   * <p>In some cases, you must explicitly acknowledge that your stack template contains certain
   *          capabilities in order for CloudFormation to create the stack.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in
   *                your Amazon Web Services account; for example, by creating new Identity and Access Management
   *                (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one
   *                of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the
   *                   <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code>
   *                capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i>
   *                      specify <code>CAPABILITY_NAMED_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
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
   *                   Resources in CloudFormation Templates</a>.</p>
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
   *                this capability. This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.</p>
   *                <p>If you want to create a stack from a stack template that contains macros
   *                   <i>and</i> nested stacks, you must create the stack directly from
   *                the template using this capability.</p>
   *                <important>
   *                   <p>You should only create stacks directly from a stack template that contains
   *                   macros if you know what processing the macro performs.</p>
   *                   <p>Each macro relies on an underlying Lambda service function for processing stack
   *                   templates. Be aware that the Lambda function owner can update the function
   *                   operation without CloudFormation being notified.</p>
   *                </important>
   *                <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using
   *                      CloudFormation Macros to Perform Custom Processing on
   *                Templates</a>.</p>
   *             </li>
   *          </ul>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>The template resource types that you have permissions to work with for this create
   *          stack action, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or
   *             <code>Custom::MyCustomInstance</code>. Use the following syntax to describe template
   *          resource types: <code>AWS::*</code> (for all Amazon Web Services resources),
   *             <code>Custom::*</code> (for all custom resources),
   *                <code>Custom::<i>logical_ID</i>
   *             </code> (for a specific custom resource),
   *             <code>AWS::<i>service_name</i>::*</code> (for all resources of a
   *          particular Amazon Web Services service), and
   *                <code>AWS::<i>service_name</i>::<i>resource_logical_ID</i>
   *                </code> (for a specific Amazon Web Services resource).</p>
   *          <p>If the list of resource types doesn't include a resource that you're creating, the
   *          stack creation fails. By default, CloudFormation grants permissions to all resource
   *          types. Identity and Access Management (IAM) uses this parameter for CloudFormation-specific condition keys in IAM policies. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with Identity and Access Management</a>.</p>
   */
  ResourceTypes?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role
   *          that CloudFormation assumes to create the stack. CloudFormation uses the role's
   *          credentials to make calls on your behalf. CloudFormation always uses this role for all
   *          future operations on the stack. As long as users have permission to operate on the stack,
   *          CloudFormation uses this role even if the users don't have permission to pass it.
   *          Ensure that the role grants least privilege.</p>
   *          <p>If you don't specify a value, CloudFormation uses the role that was previously
   *          associated with the stack. If no role is available, CloudFormation uses a temporary
   *          session that is generated from your user credentials.</p>
   */
  RoleARN?: string;

  /**
   * <p>Determines what action will be taken if stack creation fails. This must be one of:
   *          DO_NOTHING, ROLLBACK, or DELETE. You can specify either <code>OnFailure</code> or
   *             <code>DisableRollback</code>, but not both.</p>
   *          <p>Default: <code>ROLLBACK</code>
   *          </p>
   */
  OnFailure?: OnFailure | string;

  /**
   * <p>Structure containing the stack policy body. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent Updates
   *             to Stack Resources</a> in the <i>CloudFormation User Guide</i>.
   *          You can specify either the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code>
   *          parameter, but not both.</p>
   */
  StackPolicyBody?: string;

  /**
   * <p>Location of a file containing the stack policy. The URL must point to a policy
   *          (maximum size: 16 KB) located in an S3 bucket in the same
   *          Region as the stack. You can specify either the <code>StackPolicyBody</code> or the
   *             <code>StackPolicyURL</code> parameter, but not both.</p>
   */
  StackPolicyURL?: string;

  /**
   * <p>Key-value pairs to associate with this stack. CloudFormation also propagates
   *          these tags to the resources created in the stack. A maximum number of 50 tags can be
   *          specified.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A unique identifier for this <code>CreateStack</code> request. Specify this token if
   *          you plan to retry requests so that CloudFormation knows that you're not attempting to
   *          create a stack with the same name. You might retry <code>CreateStack</code> requests to
   *          ensure that CloudFormation successfully received them.</p>
   *          <p>All events triggered by a given stack operation are assigned the same client request
   *          token, which you can use to track operations. For example, if you execute a
   *          <code>CreateStack</code> operation with the token <code>token1</code>, then all the
   *          <code>StackEvents</code> generated by that operation will have
   *          <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab.
   *          Stack operations that are initiated from the console use the token format
   *             <i>Console-StackOperation-ID</i>, which helps you easily identify the
   *          stack operation . For example, if you create a stack using the console, each stack event
   *          would be assigned the same token in the following format:
   *          <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Whether to enable termination protection on the specified stack. If a user attempts to
   *          delete a stack with termination protection enabled, the operation fails and the stack
   *          remains unchanged. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being
   *             Deleted</a> in the <i>CloudFormation User Guide</i>. Termination protection is
   *          disabled on stacks by default.</p>
   *          <p>For <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>,
   *          termination protection is set on the root stack and cannot be changed directly on the
   *          nested stack.</p>
   */
  EnableTerminationProtection?: boolean;
}

export namespace CreateStackInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStackInput): any => ({
    ...obj,
  });
}

/**
 * <p>The output for a <a>CreateStack</a> action.</p>
 */
export interface CreateStackOutput {
  /**
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;
}

export namespace CreateStackOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStackOutput): any => ({
    ...obj,
  });
}

/**
 * <p>[Service-managed permissions] The Organizations accounts to which StackSets
 *          deploys. StackSets does not deploy stack instances to the organization management account,
 *          even if the organization management account is in your organization or in an OU in your
 *          organization.</p>
 *          <p>For update operations, you can specify either <code>Accounts</code> or
 *             <code>OrganizationalUnitIds</code>. For create and delete operations, specify
 *             <code>OrganizationalUnitIds</code>.</p>
 */
export interface DeploymentTargets {
  /**
   * <p>The names of one or more Amazon Web Services accounts for which you want to deploy stack
   *          set updates.</p>
   */
  Accounts?: string[];

  /**
   * <p>Returns the value of the <code>AccountsUrl</code> property.</p>
   */
  AccountsUrl?: string;

  /**
   * <p>The organization root ID or organizational unit (OU) IDs to which StackSets
   *          deploys.</p>
   */
  OrganizationalUnitIds?: string[];
}

export namespace DeploymentTargets {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeploymentTargets): any => ({
    ...obj,
  });
}

export enum RegionConcurrencyType {
  PARALLEL = "PARALLEL",
  SEQUENTIAL = "SEQUENTIAL",
}

/**
 * <p>The user-specified preferences for how CloudFormation performs a stack set
 *          operation. </p>
 *          <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
 */
export interface StackSetOperationPreferences {
  /**
   * <p>The concurrency type of deploying StackSets operations in Regions, could be in parallel
   *          or one Region at a time.</p>
   */
  RegionConcurrencyType?: RegionConcurrencyType | string;

  /**
   * <p>The order of the Regions in where you want to perform the stack operation.</p>
   */
  RegionOrder?: string[];

  /**
   * <p>The number of accounts, per Region, for which this operation can fail before
   *          CloudFormation stops the operation in that Region. If the operation is stopped in a Region,
   *          CloudFormation doesn't attempt the operation in any subsequent Regions.</p>
   *          <p>Conditional: You must specify either <code>FailureToleranceCount</code> or
   *             <code>FailureTolerancePercentage</code> (but not both).</p>
   *          <p>By default, <code>0</code> is specified.</p>
   */
  FailureToleranceCount?: number;

  /**
   * <p>The percentage of accounts, per Region, for which this stack operation can fail
   *          before CloudFormation stops the operation in that Region. If the operation is stopped
   *          in a Region, CloudFormation doesn't attempt the operation in any subsequent
   *          Regions.</p>
   *          <p>When calculating the number of accounts based on the specified percentage,
   *          CloudFormation rounds <i>down</i> to the next whole number.</p>
   *          <p>Conditional: You must specify either <code>FailureToleranceCount</code> or
   *             <code>FailureTolerancePercentage</code>, but not both.</p>
   *          <p>By default, <code>0</code> is specified.</p>
   */
  FailureTolerancePercentage?: number;

  /**
   * <p>The maximum number of accounts in which to perform this operation at one time. This
   *          is dependent on the value of
   *             <code>FailureToleranceCount</code>. <code>MaxConcurrentCount</code> is at most one more
   *          than the <code>FailureToleranceCount</code>.</p>
   *          <p>Note that this setting lets you specify the <i>maximum</i> for
   *          operations. For large deployments, under certain circumstances the actual number of
   *          accounts acted upon concurrently may be lower due to service throttling.</p>
   *          <p>Conditional: You must specify either <code>MaxConcurrentCount</code> or
   *             <code>MaxConcurrentPercentage</code>, but not both.</p>
   *          <p>By default, <code>1</code> is specified.</p>
   */
  MaxConcurrentCount?: number;

  /**
   * <p>The maximum percentage of accounts in which to perform this operation at one
   *          time.</p>
   *          <p>When calculating the number of accounts based on the specified percentage,
   *          CloudFormation rounds down to the next whole number. This is true except in cases where
   *          rounding down would result is zero. In this case, CloudFormation sets the number as one
   *          instead.</p>
   *          <p>Note that this setting lets you specify the <i>maximum</i> for
   *          operations. For large deployments, under certain circumstances the actual number of
   *          accounts acted upon concurrently may be lower due to service throttling.</p>
   *          <p>Conditional: You must specify either <code>MaxConcurrentCount</code> or
   *             <code>MaxConcurrentPercentage</code>, but not both.</p>
   *          <p>By default, <code>1</code> is specified.</p>
   */
  MaxConcurrentPercentage?: number;
}

export namespace StackSetOperationPreferences {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackSetOperationPreferences): any => ({
    ...obj,
  });
}

export interface CreateStackInstancesInput {
  /**
   * <p>The name or unique ID of the stack set that you want to create stack instances
   *          from.</p>
   */
  StackSetName: string | undefined;

  /**
   * <p>[Self-managed permissions] The names of one or more Amazon Web Services accounts that you want to create stack instances in the
   *          specified Region(s) for.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
   */
  Accounts?: string[];

  /**
   * <p>[Service-managed permissions] The Organizations accounts for which to create
   *          stack instances in the specified Regions.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not
   *          both.</p>
   */
  DeploymentTargets?: DeploymentTargets;

  /**
   * <p>The names of one or more Regions where you want to create stack instances using the
   *          specified Amazon Web Services accounts.</p>
   */
  Regions: string[] | undefined;

  /**
   * <p>A list of stack set parameters whose values you want to override in the selected
   *          stack instances.</p>
   *          <p>Any overridden parameter values will be applied to all stack instances in the
   *          specified accounts and Regions. When specifying parameters and their values, be aware of
   *          how CloudFormation sets parameter values during stack instance operations:</p>
   *          <ul>
   *             <li>
   *                <p>To override the current value for a parameter, include the parameter and
   *                specify its value.</p>
   *             </li>
   *             <li>
   *                <p>To leave an overridden parameter set to its present value, include the parameter and specify <code>UsePreviousValue</code> as
   *                <code>true</code>. (You cannot specify both a value and set
   *                <code>UsePreviousValue</code> to <code>true</code>.)</p>
   *             </li>
   *             <li>
   *                <p>To set an overridden parameter back to the value specified in the stack set,
   *                specify a parameter list but do not include the parameter in the list.</p>
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
   * <p>Preferences for how CloudFormation performs this stack set operation.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * <p>The unique identifier for this stack set operation.</p>
   *          <p>The operation ID also functions as an idempotency token, to ensure that
   *          CloudFormation performs the stack set operation only once, even if you retry the request
   *          multiple times. You might retry stack set operation requests to ensure that
   *          CloudFormation successfully received them.</p>
   *          <p>If you don't specify an operation ID, the SDK generates one
   *          automatically.</p>
   *          <p>Repeating this stack set operation with a new operation ID retries all stack instances
   *          whose status is <code>OUTDATED</code>.</p>
   */
  OperationId?: string;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

export namespace CreateStackInstancesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStackInstancesInput): any => ({
    ...obj,
  });
}

export interface CreateStackInstancesOutput {
  /**
   * <p>The unique identifier for this stack set operation.</p>
   */
  OperationId?: string;
}

export namespace CreateStackInstancesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStackInstancesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified operation isn't valid.</p>
 */
export interface InvalidOperationException extends __SmithyException, $MetadataBearer {
  name: "InvalidOperationException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOperationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified operation ID already exists.</p>
 */
export interface OperationIdAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "OperationIdAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace OperationIdAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OperationIdAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>Another operation is currently in progress for this stack set. Only one operation can
 *          be performed for a stack set at a given time.</p>
 */
export interface OperationInProgressException extends __SmithyException, $MetadataBearer {
  name: "OperationInProgressException";
  $fault: "client";
  Message?: string;
}

export namespace OperationInProgressException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OperationInProgressException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified stack set doesn't exist.</p>
 */
export interface StackSetNotFoundException extends __SmithyException, $MetadataBearer {
  name: "StackSetNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace StackSetNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackSetNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Another operation has been performed on this stack set since the specified operation
 *          was performed. </p>
 */
export interface StaleRequestException extends __SmithyException, $MetadataBearer {
  name: "StaleRequestException";
  $fault: "client";
  Message?: string;
}

export namespace StaleRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StaleRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource exists, but has been changed.</p>
 */
export interface CreatedButModifiedException extends __SmithyException, $MetadataBearer {
  name: "CreatedButModifiedException";
  $fault: "client";
  Message?: string;
}

export namespace CreatedButModifiedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatedButModifiedException): any => ({
    ...obj,
  });
}

export type PermissionModels = "SELF_MANAGED" | "SERVICE_MANAGED";

export interface CreateStackSetInput {
  /**
   * <p>The name to associate with the stack set. The name must be unique in the Region where
   *          you create your stack set.</p>
   *          <note>
   *             <p>A stack name can contain only alphanumeric characters (case-sensitive) and
   *             hyphens. It must start with an alphabetic character and can't be longer than 128
   *             characters.</p>
   *          </note>
   */
  StackSetName: string | undefined;

  /**
   * <p>A description of the stack set. You can use the description to identify the stack
   *          set's purpose or other important information.</p>
   */
  Description?: string;

  /**
   * <p>The structure that contains the template body, with a minimum length of 1 byte and a
   *          maximum length of 51,200 bytes. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify either the TemplateBody or the TemplateURL parameter,
   *          but not both.</p>
   */
  TemplateBody?: string;

  /**
   * <p>The location of the file that contains the template body. The URL must point to a
   *          template (maximum size: 460,800 bytes) that's located in an Amazon S3 bucket or a Systems
   *          Manager document. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify either the TemplateBody or the TemplateURL parameter,
   *          but not both.</p>
   */
  TemplateURL?: string;

  /**
   * <p>The stack ID you are importing into a new stack set. Specify the Amazon Resource Number
   *          (ARN) of the stack.</p>
   */
  StackId?: string;

  /**
   * <p>The input parameters for the stack set template.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>In some cases, you must explicitly acknowledge that your stack set template contains
   *          certain capabilities in order for CloudFormation to create the stack set and related stack
   *          instances.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in
   *                your Amazon Web Services account; for example, by creating new Identity and Access Management
   *                (IAM) users. For those stack sets, you must explicitly acknowledge this by specifying
   *                one of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the
   *                   <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code>
   *                capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i>
   *                      specify <code>CAPABILITY_NAMED_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
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
   *                   Resources in CloudFormation Templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some templates reference macros. If your stack set template references one or more
   *                macros, you must create the stack set directly from the processed template, without
   *                first reviewing the resulting changes in a change set. To create the stack set
   *                directly, you must acknowledge this capability. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using CloudFormation Macros to
   *                   Perform Custom Processing on Templates</a>.</p>
   *                <important>
   *                   <p>Stack sets with service-managed permissions do not currently support the use of
   *                   macros in templates. (This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a>
   *                   transforms, which are macros hosted by CloudFormation.) Even if you specify this capability
   *                   for a stack set with service-managed permissions, if you reference a macro in your
   *                   template the stack set operation will fail.</p>
   *                </important>
   *             </li>
   *          </ul>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>The key-value pairs to associate with this stack set and the stacks created from it.
   *          CloudFormation also propagates these tags to supported resources that are created in
   *          the stacks. A maximum number of 50 tags can be specified.</p>
   *          <p>If you specify tags as part of a <code>CreateStackSet</code> action,
   *          CloudFormation checks to see if you have the required IAM permission to tag resources. If
   *          you don't, the entire <code>CreateStackSet</code> action fails with an <code>access
   *             denied</code> error, and the stack set is not created.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. </p>
   *          <p>Specify an IAM role only if you are using customized administrator roles to control
   *          which users or groups can manage specific stack sets within the same administrator account.
   *          For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html">Prerequisites:
   *             Granting Permissions for Stack Set Operations</a> in the
   *             <i>CloudFormation User Guide</i>.</p>
   */
  AdministrationRoleARN?: string;

  /**
   * <p>The name of the IAM execution role to use to create the stack set. If you do not specify
   *          an execution role, CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role
   *          for the stack set operation.</p>
   *          <p>Specify an IAM role only if you are using customized execution roles to control which
   *          stack resources users and groups can include in their stack sets.
   *
   *       </p>
   */
  ExecutionRoleName?: string;

  /**
   * <p>Describes how the IAM roles required for stack set operations are created. By default,
   *             <code>SELF-MANAGED</code> is specified.</p>
   *          <ul>
   *             <li>
   *                <p>With <code>self-managed</code> permissions, you must create the administrator and
   *                execution roles required to deploy to target accounts. For more information, see
   *                   <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant
   *                   Self-Managed Stack Set Permissions</a>.</p>
   *             </li>
   *             <li>
   *                <p>With <code>service-managed</code> permissions, StackSets automatically creates the
   *                IAM roles required to deploy to accounts managed by Organizations. For more
   *                information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant Service-Managed Stack Set Permissions</a>.</p>
   *             </li>
   *          </ul>
   */
  PermissionModel?: PermissionModels | string;

  /**
   * <p>Describes whether StackSets automatically deploys to Organizations accounts that
   *          are added to the target organization or organizational unit (OU). Specify only if
   *             <code>PermissionModel</code> is <code>SERVICE_MANAGED</code>.</p>
   */
  AutoDeployment?: AutoDeployment;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account
   *          administrator in the organization's management account or as a delegated administrator in a
   *          member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *          self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>To create a stack set with service-managed permissions while signed in to the
   *                management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>To create a stack set with service-managed permissions while signed in to a
   *                delegated administrator account, specify <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated admin in the
   *                management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   *          <p>Stack sets with service-managed permissions are created in the management account,
   *          including stack sets that are created by delegated administrators.</p>
   */
  CallAs?: CallAs | string;

  /**
   * <p>A unique identifier for this <code>CreateStackSet</code> request. Specify this token
   *          if you plan to retry requests so that CloudFormation knows that you're not attempting
   *          to create another stack set with the same name. You might retry <code>CreateStackSet</code>
   *          requests to ensure that CloudFormation successfully received them.</p>
   *          <p>If you don't specify an operation ID, the SDK generates one
   *          automatically.</p>
   */
  ClientRequestToken?: string;
}

export namespace CreateStackSetInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStackSetInput): any => ({
    ...obj,
  });
}

export interface CreateStackSetOutput {
  /**
   * <p>The ID of the stack set that you're creating.</p>
   */
  StackSetId?: string;
}

export namespace CreateStackSetOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateStackSetOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified name is already in use.</p>
 */
export interface NameAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "NameAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace NameAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NameAlreadyExistsException): any => ({
    ...obj,
  });
}

export interface DeactivateTypeInput {
  /**
   * <p>The type name of the extension, in this account and region. If you specified a type name
   *          alias when enabling the extension, use the type name alias.</p>
   *          <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and
   *             <code>Type</code>.</p>
   */
  TypeName?: string;

  /**
   * <p>The extension type.</p>
   *          <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and
   *             <code>Type</code>.</p>
   */
  Type?: ThirdPartyType | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the extension, in this account and region.</p>
   *          <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and
   *             <code>Type</code>.</p>
   */
  Arn?: string;
}

export namespace DeactivateTypeInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeactivateTypeInput): any => ({
    ...obj,
  });
}

export interface DeactivateTypeOutput {}

export namespace DeactivateTypeOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeactivateTypeOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>DeleteChangeSet</a> action.</p>
 */
export interface DeleteChangeSetInput {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChangeSetInput): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the <a>DeleteChangeSet</a> action.</p>
 */
export interface DeleteChangeSetOutput {}

export namespace DeleteChangeSetOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChangeSetOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified change set can't be used to update the stack. For example, the change
 *          set status might be <code>CREATE_IN_PROGRESS</code>, or the stack status might be
 *             <code>UPDATE_IN_PROGRESS</code>.</p>
 */
export interface InvalidChangeSetStatusException extends __SmithyException, $MetadataBearer {
  name: "InvalidChangeSetStatusException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidChangeSetStatusException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidChangeSetStatusException): any => ({
    ...obj,
  });
}

/**
 * <p>The input for <a>DeleteStack</a> action.</p>
 */
export interface DeleteStackInput {
  /**
   * <p>The name or the unique stack ID that is associated with the stack.</p>
   */
  StackName: string | undefined;

  /**
   * <p>For stacks in the <code>DELETE_FAILED</code> state, a list of resource logical IDs
   *          that are associated with the resources you want to retain. During deletion,
   *          CloudFormation deletes the stack but does not delete the retained resources.</p>
   *          <p>Retaining resources is useful when you cannot delete a resource, such as a non-empty
   *          S3 bucket, but you want to delete the stack.</p>
   */
  RetainResources?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role
   *          that CloudFormation assumes to delete the stack. CloudFormation uses the role's
   *          credentials to make calls on your behalf.</p>
   *          <p>If you don't specify a value, CloudFormation uses the role that was previously
   *          associated with the stack. If no role is available, CloudFormation uses a temporary
   *          session that is generated from your user credentials.</p>
   */
  RoleARN?: string;

  /**
   * <p>A unique identifier for this <code>DeleteStack</code> request. Specify this token if
   *          you plan to retry requests so that CloudFormation knows that you're not attempting to
   *          delete a stack with the same name. You might retry <code>DeleteStack</code> requests to
   *          ensure that CloudFormation successfully received them.</p>
   *          <p>All events triggered by a given stack operation are assigned the same client request
   *          token, which you can use to track operations. For example, if you execute a
   *          <code>CreateStack</code> operation with the token <code>token1</code>, then all the
   *          <code>StackEvents</code> generated by that operation will have
   *          <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab.
   *          Stack operations that are initiated from the console use the token format
   *             <i>Console-StackOperation-ID</i>, which helps you easily identify the
   *          stack operation . For example, if you create a stack using the console, each stack event
   *          would be assigned the same token in the following format:
   *             <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>
   */
  ClientRequestToken?: string;
}

export namespace DeleteStackInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStackInput): any => ({
    ...obj,
  });
}

export interface DeleteStackInstancesInput {
  /**
   * <p>The name or unique ID of the stack set that you want to delete stack instances
   *          for.</p>
   */
  StackSetName: string | undefined;

  /**
   * <p>[Self-managed permissions] The names of the Amazon Web Services accounts that you want to delete stack instances for.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
   */
  Accounts?: string[];

  /**
   * <p>[Service-managed permissions] The Organizations accounts from which to delete
   *          stack instances.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not
   *          both.</p>
   */
  DeploymentTargets?: DeploymentTargets;

  /**
   * <p>The Regions where you want to delete stack set instances.</p>
   */
  Regions: string[] | undefined;

  /**
   * <p>Preferences for how CloudFormation performs this stack set operation.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * <p>Removes the stack instances from the specified stack set, but doesn't delete the
   *          stacks. You can't reassociate a retained stack or add an existing, saved stack to a new
   *          stack set.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
   */
  RetainStacks: boolean | undefined;

  /**
   * <p>The unique identifier for this stack set operation.</p>
   *          <p>If you don't specify an operation ID, the SDK generates one
   *          automatically.</p>
   *          <p>The operation ID also functions as an idempotency token, to ensure that
   *          CloudFormation performs the stack set operation only once, even if you retry the request
   *          multiple times. You can retry stack set operation requests to ensure that
   *          CloudFormation successfully received them.</p>
   *          <p>Repeating this stack set operation with a new operation ID retries all stack instances
   *          whose status is <code>OUTDATED</code>.</p>
   */
  OperationId?: string;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account
   *          administrator in the organization's management account or as a delegated administrator in a
   *          member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *          self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *                   <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in
   *                the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

export namespace DeleteStackInstancesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStackInstancesInput): any => ({
    ...obj,
  });
}

export interface DeleteStackInstancesOutput {
  /**
   * <p>The unique identifier for this stack set operation.</p>
   */
  OperationId?: string;
}

export namespace DeleteStackInstancesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStackInstancesOutput): any => ({
    ...obj,
  });
}

export interface DeleteStackSetInput {
  /**
   * <p>The name or unique ID of the stack set that you're deleting. You can obtain this
   *          value by running <a>ListStackSets</a>.</p>
   */
  StackSetName: string | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account
   *          administrator in the organization's management account or as a delegated administrator in a
   *          member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *          self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *                   <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in
   *                the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

export namespace DeleteStackSetInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStackSetInput): any => ({
    ...obj,
  });
}

export interface DeleteStackSetOutput {}

export namespace DeleteStackSetOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteStackSetOutput): any => ({
    ...obj,
  });
}

/**
 * <p>You can't yet delete this stack set, because it still contains one or more stack
 *          instances. Delete all stack instances from the stack set before deleting the stack
 *          set.</p>
 */
export interface StackSetNotEmptyException extends __SmithyException, $MetadataBearer {
  name: "StackSetNotEmptyException";
  $fault: "client";
  Message?: string;
}

export namespace StackSetNotEmptyException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackSetNotEmptyException): any => ({
    ...obj,
  });
}

export type RegistryType = "MODULE" | "RESOURCE";

export interface DeregisterTypeInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *             <code>Arn</code>.</p>
   */
  Arn?: string;

  /**
   * <p>The kind of extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *             <code>Arn</code>.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *             <code>Arn</code>.</p>
   */
  TypeName?: string;

  /**
   * <p>The ID of a specific version of the extension. The version ID is the value at the end of
   *          the Amazon Resource Name (ARN) assigned to the extension version when it is
   *          registered.</p>
   */
  VersionId?: string;
}

export namespace DeregisterTypeInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterTypeInput): any => ({
    ...obj,
  });
}

export interface DeregisterTypeOutput {}

export namespace DeregisterTypeOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeregisterTypeOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>DescribeAccountLimits</a> action.</p>
 */
export interface DescribeAccountLimitsInput {
  /**
   * <p>A string that identifies the next page of limits that you want to retrieve.</p>
   */
  NextToken?: string;
}

export namespace DescribeAccountLimitsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountLimitsInput): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the <a>DescribeAccountLimits</a> action.</p>
 */
export interface DescribeAccountLimitsOutput {
  /**
   * <p>An account limit structure that contain a list of CloudFormation account limits
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccountLimitsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>DescribeChangeSet</a> action.</p>
 */
export interface DescribeChangeSetInput {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the change set that you want to
   *          describe.</p>
   */
  ChangeSetName: string | undefined;

  /**
   * <p>If you specified the name of a change set, specify the stack name or ID (ARN) of the
   *          change set you want to describe.</p>
   */
  StackName?: string;

  /**
   * <p>A string (provided by the <a>DescribeChangeSet</a> response output) that
   *          identifies the next page of information that you want to retrieve.</p>
   */
  NextToken?: string;
}

export namespace DescribeChangeSetInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChangeSetInput): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the <a>DescribeChangeSet</a> action.</p>
 */
export interface DescribeChangeSetOutput {
  /**
   * <p>The name of the change set.</p>
   */
  ChangeSetName?: string;

  /**
   * <p>The ARN of the change set.</p>
   */
  ChangeSetId?: string;

  /**
   * <p>The ARN of the stack that is associated with the change set.</p>
   */
  StackId?: string;

  /**
   * <p>The name of the stack that is associated with the change set.</p>
   */
  StackName?: string;

  /**
   * <p>Information about the change set.</p>
   */
  Description?: string;

  /**
   * <p>A list of <code>Parameter</code> structures that describes the input parameters and
   *          their values used to create the change set. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data type.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>The start time when the change set was created, in UTC.</p>
   */
  CreationTime?: Date;

  /**
   * <p>If the change set execution status is <code>AVAILABLE</code>, you can execute the
   *          change set. If you can’t execute the change set, the status indicates why. For example, a
   *          change set might be in an <code>UNAVAILABLE</code> state because CloudFormation is
   *          still creating it or in an <code>OBSOLETE</code> state because the stack was already
   *          updated.</p>
   */
  ExecutionStatus?: ExecutionStatus | string;

  /**
   * <p>The current status of the change set, such as <code>CREATE_IN_PROGRESS</code>,
   *             <code>CREATE_COMPLETE</code>, or <code>FAILED</code>.</p>
   */
  Status?: ChangeSetStatus | string;

  /**
   * <p>A description of the change set's status. For example, if your attempt to create a
   *          change set failed, CloudFormation shows the error message.</p>
   */
  StatusReason?: string;

  /**
   * <p>The ARNs of the Amazon Simple Notification Service (Amazon SNS) topics that will be
   *          associated with the stack if you execute the change set.</p>
   */
  NotificationARNs?: string[];

  /**
   * <p>The rollback triggers for CloudFormation to monitor during stack creation and
   *          updating operations, and for the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

  /**
   * <p>If you execute the change set, the list of capabilities that were explicitly
   *          acknowledged when the change set was created.</p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>If you execute the change set, the tags that will be associated with the
   *          stack.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A list of <code>Change</code> structures that describes the resources
   *          CloudFormation changes if you execute the change set.</p>
   */
  Changes?: Change[];

  /**
   * <p>If the output exceeds 1 MB, a string that identifies the next page of changes. If
   *          there is no additional page, this value is null.</p>
   */
  NextToken?: string;

  /**
   * <p>Verifies if <code>IncludeNestedStacks</code> is set to <code>True</code>.</p>
   */
  IncludeNestedStacks?: boolean;

  /**
   * <p>Specifies the change set ID of the parent change set in the current nested change set
   *          hierarchy.</p>
   */
  ParentChangeSetId?: string;

  /**
   * <p>Specifies the change set ID of the root change set in the current nested change set
   *          hierarchy.</p>
   */
  RootChangeSetId?: string;
}

export namespace DescribeChangeSetOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChangeSetOutput): any => ({
    ...obj,
  });
}

export interface DescribePublisherInput {
  /**
   * <p>The ID of the extension publisher.</p>
   *          <p>If you do not supply a <code>PublisherId</code>, and you have registered as an extension
   *          publisher, <code>DescribePublisher</code> returns information about your own publisher
   *          account.</p>
   */
  PublisherId?: string;
}

export namespace DescribePublisherInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePublisherInput): any => ({
    ...obj,
  });
}

export enum IdentityProvider {
  AWS_Marketplace = "AWS_Marketplace",
  Bitbucket = "Bitbucket",
  GitHub = "GitHub",
}

export enum PublisherStatus {
  UNVERIFIED = "UNVERIFIED",
  VERIFIED = "VERIFIED",
}

export interface DescribePublisherOutput {
  /**
   * <p>The ID of the extension publisher.</p>
   */
  PublisherId?: string;

  /**
   * <p>Whether the publisher is verified. Currently, all registered publishers are
   *          verified.</p>
   */
  PublisherStatus?: PublisherStatus | string;

  /**
   * <p>The type of account used as the identity provider when registering this publisher with
   *          CloudFormation.</p>
   */
  IdentityProvider?: IdentityProvider | string;

  /**
   * <p>The URL to the publisher's profile with the identity provider.</p>
   */
  PublisherProfile?: string;
}

export namespace DescribePublisherOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePublisherOutput): any => ({
    ...obj,
  });
}

export interface DescribeStackDriftDetectionStatusInput {
  /**
   * <p>The ID of the drift detection results of this operation.</p>
   *          <p>CloudFormation generates new results, with a new drift detection ID, each time this operation is
   *          run. However, the number of drift results CloudFormation retains for any given stack, and for how
   *          long, may vary.</p>
   */
  StackDriftDetectionId: string | undefined;
}

export namespace DescribeStackDriftDetectionStatusInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStackDriftDetectionStatusInput): any => ({
    ...obj,
  });
}

export enum StackDriftDetectionStatus {
  DETECTION_COMPLETE = "DETECTION_COMPLETE",
  DETECTION_FAILED = "DETECTION_FAILED",
  DETECTION_IN_PROGRESS = "DETECTION_IN_PROGRESS",
}

export enum StackDriftStatus {
  DRIFTED = "DRIFTED",
  IN_SYNC = "IN_SYNC",
  NOT_CHECKED = "NOT_CHECKED",
  UNKNOWN = "UNKNOWN",
}

export interface DescribeStackDriftDetectionStatusOutput {
  /**
   * <p>The ID of the stack.</p>
   */
  StackId: string | undefined;

  /**
   * <p>The ID of the drift detection results of this operation.</p>
   *          <p>CloudFormation generates new results, with a new drift detection ID, each time this operation
   *          is run. However, the number of reports CloudFormation retains for any given stack, and for how long,
   *          may vary.</p>
   */
  StackDriftDetectionId: string | undefined;

  /**
   * <p>Status of the stack's actual configuration compared to its expected
   *          configuration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DRIFTED</code>: The stack differs from its expected template
   *                configuration. A stack is considered to have drifted if one or more of its resources
   *                have drifted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_CHECKED</code>: CloudFormation has not checked if the stack differs from its
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
   * <p>The status of the stack drift detection operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DETECTION_COMPLETE</code>: The stack drift detection operation has
   *                successfully completed for all resources in the stack that support drift detection.
   *                (Resources that do not currently support stack detection remain unchecked.)</p>
   *                <p>If you specified logical resource IDs for CloudFormation to use as a filter for the
   *                stack drift detection operation, only the resources with those logical IDs are
   *                checked for drift.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DETECTION_FAILED</code>: The stack drift detection operation has failed
   *                for at least one resource in the stack. Results will be available for resources on
   *                which CloudFormation successfully completed drift detection.</p>
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
   * <p>Time at which the stack drift detection operation was initiated.</p>
   */
  Timestamp: Date | undefined;
}

export namespace DescribeStackDriftDetectionStatusOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStackDriftDetectionStatusOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The input for <a>DescribeStackEvents</a> action.</p>
 */
export interface DescribeStackEventsInput {
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
   * <p>A string that identifies the next page of events that you want to retrieve.</p>
   */
  NextToken?: string;
}

export namespace DescribeStackEventsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStackEventsInput): any => ({
    ...obj,
  });
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
  ROLLBACK_COMPLETE = "ROLLBACK_COMPLETE",
  ROLLBACK_FAILED = "ROLLBACK_FAILED",
  ROLLBACK_IN_PROGRESS = "ROLLBACK_IN_PROGRESS",
  UPDATE_COMPLETE = "UPDATE_COMPLETE",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_ROLLBACK_COMPLETE = "UPDATE_ROLLBACK_COMPLETE",
  UPDATE_ROLLBACK_FAILED = "UPDATE_ROLLBACK_FAILED",
  UPDATE_ROLLBACK_IN_PROGRESS = "UPDATE_ROLLBACK_IN_PROGRESS",
}

/**
 * <p>The StackEvent data type.</p>
 */
export interface StackEvent {
  /**
   * <p>The unique ID name of the instance of the stack.</p>
   */
  StackId: string | undefined;

  /**
   * <p>The unique ID of this event.</p>
   */
  EventId: string | undefined;

  /**
   * <p>The name associated with a stack.</p>
   */
  StackName: string | undefined;

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
   * <p>Type of resource. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services
   *             Resource Types Reference</a> in the CloudFormation User Guide.)</p>
   */
  ResourceType?: string;

  /**
   * <p>Time the status was updated.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>Current status of the resource.</p>
   */
  ResourceStatus?: ResourceStatus | string;

  /**
   * <p>Success/failure message associated with the resource.</p>
   */
  ResourceStatusReason?: string;

  /**
   * <p>BLOB of the properties used to create the resource.</p>
   */
  ResourceProperties?: string;

  /**
   * <p>The token passed to the operation that generated this event.</p>
   *          <p>All events triggered by a given stack operation are assigned the same client request
   *          token, which you can use to track operations. For example, if you execute a
   *          <code>CreateStack</code> operation with the token <code>token1</code>, then all the
   *          <code>StackEvents</code> generated by that operation will have
   *          <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab.
   *          Stack operations that are initiated from the console use the token format
   *             <i>Console-StackOperation-ID</i>, which helps you easily identify the
   *          stack operation . For example, if you create a stack using the console, each stack event
   *          would be assigned the same token in the following format:
   *          <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>. </p>
   */
  ClientRequestToken?: string;
}

export namespace StackEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackEvent): any => ({
    ...obj,
  });
}

/**
 * <p>The output for a <a>DescribeStackEvents</a> action.</p>
 */
export interface DescribeStackEventsOutput {
  /**
   * <p>A list of <code>StackEvents</code> structures.</p>
   */
  StackEvents?: StackEvent[];

  /**
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of events.
   *          If no additional page exists, this value is null.</p>
   */
  NextToken?: string;
}

export namespace DescribeStackEventsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStackEventsOutput): any => ({
    ...obj,
  });
}

export interface DescribeStackInstanceInput {
  /**
   * <p>The name or the unique stack ID of the stack set that you want to get stack instance
   *          information for.</p>
   */
  StackSetName: string | undefined;

  /**
   * <p>The ID of an Amazon Web Services account that's associated with this stack instance.</p>
   */
  StackInstanceAccount: string | undefined;

  /**
   * <p>The name of a Region that's associated with this stack instance.</p>
   */
  StackInstanceRegion: string | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account
   *          administrator in the organization's management account or as a delegated administrator in a
   *          member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *          self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *                   <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in
   *                the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

export namespace DescribeStackInstanceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStackInstanceInput): any => ({
    ...obj,
  });
}

export type StackInstanceDetailedStatus = "CANCELLED" | "FAILED" | "INOPERABLE" | "PENDING" | "RUNNING" | "SUCCEEDED";

/**
 * <p>The detailed status of the stack instance.</p>
 */
export interface StackInstanceComprehensiveStatus {
  /**
   * <ul>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code>: The operation in the specified account and Region has been
   *                cancelled. This is either because a user has stopped the stack set operation, or
   *                because the failure tolerance of the stack set operation has been exceeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation in the specified account and Region failed. If
   *                the stack set operation fails in enough accounts within a Region, the failure
   *                tolerance for the stack set operation as a whole might be exceeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INOPERABLE</code>: A <code>DeleteStackInstances</code> operation has failed
   *                and left the stack in an unstable state. Stacks in this state are excluded from
   *                further <code>UpdateStackSet</code> operations. You might need to perform a
   *                   <code>DeleteStackInstances</code> operation, with <code>RetainStacks</code> set to
   *                   <code>true</code>, to delete the stack instance, and then delete the stack
   *                manually.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: The operation in the specified account and Region has yet to
   *                start.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>: The operation in the specified account and Region is
   *                currently in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The operation in the specified account and Region
   *                completed successfully.</p>
   *             </li>
   *          </ul>
   */
  DetailedStatus?: StackInstanceDetailedStatus | string;
}

export namespace StackInstanceComprehensiveStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackInstanceComprehensiveStatus): any => ({
    ...obj,
  });
}

export type StackInstanceStatus = "CURRENT" | "INOPERABLE" | "OUTDATED";

/**
 * <p>An CloudFormation stack, in a specific account and Region, that's part of a stack
 *          set operation. A stack instance is a reference to an attempted or actual stack in a given
 *          account within a given Region. A stack instance can exist without a stack—for example, if
 *          the stack couldn't be created for some reason. A stack instance is associated with only one
 *          stack set. Each stack instance contains the ID of its associated stack set, as well as the
 *          ID of the actual stack and the stack status.</p>
 */
export interface StackInstance {
  /**
   * <p>The name or unique ID of the stack set that the stack instance is associated
   *          with.</p>
   */
  StackSetId?: string;

  /**
   * <p>The name of the Amazon Web Services Region that the stack instance is associated with.</p>
   */
  Region?: string;

  /**
   * <p>[Self-managed permissions] The name of the Amazon Web Services account that the stack instance is associated with.</p>
   */
  Account?: string;

  /**
   * <p>The ID of the stack instance.</p>
   */
  StackId?: string;

  /**
   * <p>A list of parameters from the stack set template whose values have been overridden in
   *          this stack instance.</p>
   */
  ParameterOverrides?: Parameter[];

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
   * <p>The detailed status of the stack instance.</p>
   */
  StackInstanceStatus?: StackInstanceComprehensiveStatus;

  /**
   * <p>The explanation for the specific status code that is assigned to this stack
   *          instance.</p>
   */
  StatusReason?: string;

  /**
   * <p>[Service-managed permissions] The organization root ID or organizational unit (OU) IDs
   *          that you specified for <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html">DeploymentTargets</a>.</p>
   */
  OrganizationalUnitId?: string;

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
   *                   <code>NOT_CHECKED</code>: CloudFormation has not checked if the stack instance differs from
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
   * <p>Most recent time when CloudFormation performed a drift detection operation on
   *          the stack instance. This value will be <code>NULL</code> for any stack instance on which
   *          drift detection has not yet been performed.</p>
   */
  LastDriftCheckTimestamp?: Date;
}

export namespace StackInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackInstance): any => ({
    ...obj,
  });
}

export interface DescribeStackInstanceOutput {
  /**
   * <p>The stack instance that matches the specified request parameters.</p>
   */
  StackInstance?: StackInstance;
}

export namespace DescribeStackInstanceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStackInstanceOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified stack instance doesn't exist.</p>
 */
export interface StackInstanceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "StackInstanceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace StackInstanceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackInstanceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The input for <a>DescribeStackResource</a> action.</p>
 */
export interface DescribeStackResourceInput {
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

  /**
   * <p>The logical name of the resource as specified in the template.</p>
   *          <p>Default: There is no default value.</p>
   */
  LogicalResourceId: string | undefined;
}

export namespace DescribeStackResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStackResourceInput): any => ({
    ...obj,
  });
}

export enum StackResourceDriftStatus {
  DELETED = "DELETED",
  IN_SYNC = "IN_SYNC",
  MODIFIED = "MODIFIED",
  NOT_CHECKED = "NOT_CHECKED",
}

/**
 * <p>Contains information about whether the resource's actual configuration differs, or
 *          has <i>drifted</i>, from its expected configuration.</p>
 */
export interface StackResourceDriftInformation {
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
   *                   <code>NOT_CHECKED</code>: CloudFormation has not checked if the resource differs from
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

  /**
   * <p>When CloudFormation last checked if the resource had drifted from its expected
   *          configuration.</p>
   */
  LastCheckTimestamp?: Date;
}

export namespace StackResourceDriftInformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackResourceDriftInformation): any => ({
    ...obj,
  });
}

/**
 * <p>Contains detailed information about the specified stack resource.</p>
 */
export interface StackResourceDetail {
  /**
   * <p>The name associated with the stack.</p>
   */
  StackName?: string;

  /**
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;

  /**
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of a
   *          resource supported by CloudFormation.</p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>Type of resource. ((For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services
   *             Resource Types Reference</a> in the CloudFormation User Guide.)</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>Time the status was updated.</p>
   */
  LastUpdatedTimestamp: Date | undefined;

  /**
   * <p>Current status of the resource.</p>
   */
  ResourceStatus: ResourceStatus | string | undefined;

  /**
   * <p>Success/failure message associated with the resource.</p>
   */
  ResourceStatusReason?: string;

  /**
   * <p>User defined description associated with the resource.</p>
   */
  Description?: string;

  /**
   * <p>The content of the <code>Metadata</code> attribute declared for the resource. For
   *          more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-metadata.html">Metadata
   *             Attribute</a> in the CloudFormation User Guide.</p>
   */
  Metadata?: string;

  /**
   * <p>Information about whether the resource's actual configuration differs, or has
   *             <i>drifted</i>, from its expected configuration, as defined in the stack
   *          template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration
   *             Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: StackResourceDriftInformation;

  /**
   * <p>Contains information about the module from which the resource was created, if the
   *          resource was created from a module included in the stack template.</p>
   */
  ModuleInfo?: ModuleInfo;
}

export namespace StackResourceDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackResourceDetail): any => ({
    ...obj,
  });
}

/**
 * <p>The output for a <a>DescribeStackResource</a> action.</p>
 */
export interface DescribeStackResourceOutput {
  /**
   * <p>A <code>StackResourceDetail</code> structure containing the description of the
   *          specified resource in the specified stack.</p>
   */
  StackResourceDetail?: StackResourceDetail;
}

export namespace DescribeStackResourceOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStackResourceOutput): any => ({
    ...obj,
  });
}

export interface DescribeStackResourceDriftsInput {
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
   *                   <code>NOT_CHECKED</code>: CloudFormation does not currently return this value.</p>
   *             </li>
   *          </ul>
   */
  StackResourceDriftStatusFilters?: (StackResourceDriftStatus | string)[];

  /**
   * <p>A string that identifies the next page of stack resource drift results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *          available results exceeds this maximum, the response includes a <code>NextToken</code>
   *          value that you can assign to the <code>NextToken</code> request parameter to get the next
   *          set of results.</p>
   */
  MaxResults?: number;
}

export namespace DescribeStackResourceDriftsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStackResourceDriftsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Context information that enables CloudFormation to uniquely identify a resource. CloudFormation uses
 *          context key-value pairs in cases where a resource's logical and physical IDs are not enough
 *          to uniquely identify that resource. Each context key-value pair specifies a resource that
 *          contains the targeted resource.</p>
 */
export interface PhysicalResourceIdContextKeyValuePair {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PhysicalResourceIdContextKeyValuePair): any => ({
    ...obj,
  });
}

export enum DifferenceType {
  ADD = "ADD",
  NOT_EQUAL = "NOT_EQUAL",
  REMOVE = "REMOVE",
}

/**
 * <p>Information about a resource property whose actual value differs from its expected
 *          value, as defined in the stack template and any values specified as template parameters.
 *          These will be present only for resources whose <code>StackResourceDriftStatus</code> is
 *             <code>MODIFIED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
 *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
 */
export interface PropertyDifference {
  /**
   * <p>The fully-qualified path to the resource property.</p>
   */
  PropertyPath: string | undefined;

  /**
   * <p>The expected property value of the resource property, as defined in the stack
   *          template and any values specified as template parameters.</p>
   */
  ExpectedValue: string | undefined;

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
}

export namespace PropertyDifference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyDifference): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the drift information for a resource that has been checked for drift. This
 *          includes actual and expected property values for resources in which CloudFormation has detected
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
  /**
   * <p>The ID of the stack.</p>
   */
  StackId: string | undefined;

  /**
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of a
   *          resource supported by CloudFormation. </p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>Context information that enables CloudFormation to uniquely identify a resource. CloudFormation uses
   *          context key-value pairs in cases where a resource's logical and physical IDs are not enough
   *          to uniquely identify that resource. Each context key-value pair specifies a unique resource
   *          that contains the targeted resource.</p>
   */
  PhysicalResourceIdContext?: PhysicalResourceIdContextKeyValuePair[];

  /**
   * <p>The type of the resource.</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>A JSON structure containing the expected property values of the stack resource, as
   *          defined in the stack template and any values specified as template parameters. </p>
   *          <p>For resources whose <code>StackResourceDriftStatus</code> is <code>DELETED</code>,
   *          this structure will not be present. </p>
   */
  ExpectedProperties?: string;

  /**
   * <p>A JSON structure containing the actual property values of the stack
   *          resource.</p>
   *          <p>For resources whose <code>StackResourceDriftStatus</code> is <code>DELETED</code>,
   *          this structure will not be present. </p>
   */
  ActualProperties?: string;

  /**
   * <p>A collection of the resource properties whose actual values differ from their
   *          expected values. These will be present only for resources whose
   *             <code>StackResourceDriftStatus</code> is <code>MODIFIED</code>.
   *          </p>
   */
  PropertyDifferences?: PropertyDifference[];

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
   *                   <code>NOT_CHECKED</code>: CloudFormation does not currently return this value.</p>
   *             </li>
   *          </ul>
   */
  StackResourceDriftStatus: StackResourceDriftStatus | string | undefined;

  /**
   * <p>Time at which CloudFormation performed drift detection on the stack resource.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>Contains information about the module from which the resource was created, if the
   *          resource was created from a module included in the stack template.</p>
   */
  ModuleInfo?: ModuleInfo;
}

export namespace StackResourceDrift {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackResourceDrift): any => ({
    ...obj,
  });
}

export interface DescribeStackResourceDriftsOutput {
  /**
   * <p>Drift information for the resources that have been checked for drift in the specified
   *          stack. This includes actual and expected configuration values for resources where CloudFormation
   *          detects drift.</p>
   *          <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack
   *          resource that has been checked for drift. Resources that have not yet been checked for
   *          drift are not included. Resources that do not currently support drift detection are not
   *          checked, and so not included. For a list of resources that support drift detection, see
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
   */
  StackResourceDrifts: StackResourceDrift[] | undefined;

  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is
   *          set to a token. To retrieve the next set of results, call
   *             <code>DescribeStackResourceDrifts</code> again and assign that token to the request
   *          object's <code>NextToken</code> parameter. If the request returns all results,
   *             <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace DescribeStackResourceDriftsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStackResourceDriftsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The input for <a>DescribeStackResources</a> action.</p>
 */
export interface DescribeStackResourcesInput {
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

  /**
   * <p>The logical name of the resource as specified in the template.</p>
   *          <p>Default: There is no default value.</p>
   */
  LogicalResourceId?: string;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of a
   *          resource supported by CloudFormation.</p>
   *          <p>For example, for an Amazon Elastic Compute Cloud (EC2) instance,
   *             <code>PhysicalResourceId</code> corresponds to the <code>InstanceId</code>. You can pass
   *          the EC2 <code>InstanceId</code> to <code>DescribeStackResources</code> to find which stack
   *          the instance belongs to and what other resources are part of the stack.</p>
   *          <p>Required: Conditional. If you do not specify <code>PhysicalResourceId</code>, you
   *          must specify <code>StackName</code>.</p>
   *          <p>Default: There is no default value.</p>
   */
  PhysicalResourceId?: string;
}

export namespace DescribeStackResourcesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStackResourcesInput): any => ({
    ...obj,
  });
}

/**
 * <p>The StackResource data type.</p>
 */
export interface StackResource {
  /**
   * <p>The name associated with the stack.</p>
   */
  StackName?: string;

  /**
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;

  /**
   * <p>The logical name of the resource specified in the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>The name or unique identifier that corresponds to a physical instance ID of a
   *          resource supported by CloudFormation.</p>
   */
  PhysicalResourceId?: string;

  /**
   * <p>Type of resource. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services
   *             Resource Types Reference</a> in the CloudFormation User Guide.)</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>Time the status was updated.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>Current status of the resource.</p>
   */
  ResourceStatus: ResourceStatus | string | undefined;

  /**
   * <p>Success/failure message associated with the resource.</p>
   */
  ResourceStatusReason?: string;

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
   * <p>Contains information about the module from which the resource was created, if the
   *          resource was created from a module included in the stack template.</p>
   */
  ModuleInfo?: ModuleInfo;
}

export namespace StackResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackResource): any => ({
    ...obj,
  });
}

/**
 * <p>The output for a <a>DescribeStackResources</a> action.</p>
 */
export interface DescribeStackResourcesOutput {
  /**
   * <p>A list of <code>StackResource</code> structures.</p>
   */
  StackResources?: StackResource[];
}

export namespace DescribeStackResourcesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStackResourcesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The input for <a>DescribeStacks</a> action.</p>
 */
export interface DescribeStacksInput {
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
   * <p>A string that identifies the next page of stacks that you want to retrieve.</p>
   */
  NextToken?: string;
}

export namespace DescribeStacksInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStacksInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about whether the stack's actual configuration differs, or has
 *             <i>drifted</i>, from its expected configuration, as defined in the stack
 *          template and any values specified as template parameters. A stack is considered to have
 *          drifted if one or more of its resources have drifted.</p>
 */
export interface StackDriftInformation {
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
   *                   <code>NOT_CHECKED</code>: CloudFormation has not checked if the stack differs from its
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

  /**
   * <p>Most recent time when a drift detection operation was initiated on the stack, or any
   *          of its individual resources that support drift detection.</p>
   */
  LastCheckTimestamp?: Date;
}

export namespace StackDriftInformation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackDriftInformation): any => ({
    ...obj,
  });
}

/**
 * <p>The Output data type.</p>
 */
export interface Output {
  /**
   * <p>The key associated with the output.</p>
   */
  OutputKey?: string;

  /**
   * <p>The value associated with the output.</p>
   */
  OutputValue?: string;

  /**
   * <p>User defined description associated with the output.</p>
   */
  Description?: string;

  /**
   * <p>The name of the export associated with the output.</p>
   */
  ExportName?: string;
}

export namespace Output {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Output): any => ({
    ...obj,
  });
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
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
  UPDATE_ROLLBACK_COMPLETE = "UPDATE_ROLLBACK_COMPLETE",
  UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS = "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS",
  UPDATE_ROLLBACK_FAILED = "UPDATE_ROLLBACK_FAILED",
  UPDATE_ROLLBACK_IN_PROGRESS = "UPDATE_ROLLBACK_IN_PROGRESS",
}

/**
 * <p>The Stack data type.</p>
 */
export interface Stack {
  /**
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;

  /**
   * <p>The name associated with the stack.</p>
   */
  StackName: string | undefined;

  /**
   * <p>The unique ID of the change set.</p>
   */
  ChangeSetId?: string;

  /**
   * <p>A user-defined description associated with the stack.</p>
   */
  Description?: string;

  /**
   * <p>A list of <code>Parameter</code> structures.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>The time at which the stack was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time the stack was deleted.</p>
   */
  DeletionTime?: Date;

  /**
   * <p>The time the stack was last updated. This field will only be returned if the stack
   *          has been updated at least once.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The rollback triggers for CloudFormation to monitor during stack creation and
   *          updating operations, and for the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

  /**
   * <p>Current status of the stack.</p>
   */
  StackStatus: StackStatus | string | undefined;

  /**
   * <p>Success/failure message associated with the stack status.</p>
   */
  StackStatusReason?: string;

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
   * <p>SNS topic ARNs to which stack related events are published.</p>
   */
  NotificationARNs?: string[];

  /**
   * <p>The amount of time within which stack creation should complete.</p>
   */
  TimeoutInMinutes?: number;

  /**
   * <p>The capabilities allowed in the stack.</p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>A list of output structures.</p>
   */
  Outputs?: Output[];

  /**
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role
   *          that is associated with the stack. During a stack operation, CloudFormation uses this
   *          role's credentials to make calls on your behalf.</p>
   */
  RoleARN?: string;

  /**
   * <p>A list of <code>Tag</code>s that specify information about the stack.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Whether termination protection is enabled for the stack.</p>
   *          <p> For <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>,
   *          termination protection is set on the root stack and cannot be changed directly on the
   *          nested stack. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being
   *             Deleted</a> in the <i>CloudFormation User Guide</i>.</p>
   */
  EnableTerminationProtection?: boolean;

  /**
   * <p>For nested stacks--stacks created as resources for another stack--the stack ID of the
   *          direct parent of this stack. For the first level of nested stacks, the root stack is also
   *          the parent stack.</p>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Working with Nested Stacks</a> in the
   *          <i>CloudFormation User Guide</i>.</p>
   */
  ParentId?: string;

  /**
   * <p>For nested stacks--stacks created as resources for another stack--the stack ID of the
   *          top-level stack to which the nested stack ultimately belongs.</p>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Working with Nested Stacks</a> in the
   *          <i>CloudFormation User Guide</i>.</p>
   */
  RootId?: string;

  /**
   * <p>Information on whether a stack's actual configuration differs, or has
   *             <i>drifted</i>, from it's expected configuration, as defined in the stack
   *          template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration
   *             Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: StackDriftInformation;
}

export namespace Stack {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Stack): any => ({
    ...obj,
  });
}

/**
 * <p>The output for a <a>DescribeStacks</a> action.</p>
 */
export interface DescribeStacksOutput {
  /**
   * <p>A list of stack structures.</p>
   */
  Stacks?: Stack[];

  /**
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of stacks.
   *          If no additional page exists, this value is null.</p>
   */
  NextToken?: string;
}

export namespace DescribeStacksOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStacksOutput): any => ({
    ...obj,
  });
}

export interface DescribeStackSetInput {
  /**
   * <p>The name or unique ID of the stack set whose description you want.</p>
   */
  StackSetName: string | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account
   *          administrator in the organization's management account or as a delegated administrator in a
   *          member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *          self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *                   <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in
   *                the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

export namespace DescribeStackSetInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStackSetInput): any => ({
    ...obj,
  });
}

export enum StackSetDriftDetectionStatus {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PARTIAL_SUCCESS = "PARTIAL_SUCCESS",
  STOPPED = "STOPPED",
}

export enum StackSetDriftStatus {
  DRIFTED = "DRIFTED",
  IN_SYNC = "IN_SYNC",
  NOT_CHECKED = "NOT_CHECKED",
}

/**
 * <p>Detailed information about the drift status of the stack set.</p>
 *          <p>For stack sets, contains information about the last <i>completed</i> drift
 *          operation performed on the stack set. Information about drift operations in-progress is not
 *          included. </p>
 *          <p>For stack set operations, includes information about drift operations currently being
 *          performed on the stack set.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged
 *             Changes in Stack Sets</a> in the <i>CloudFormation User Guide</i>.</p>
 */
export interface StackSetDriftDetectionDetails {
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
   *                   <code>NOT_CHECKED</code>: CloudFormation has not checked the stack set for drift.</p>
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
   * <p>Most recent time when CloudFormation performed a drift detection operation on
   *          the stack set. This value will be <code>NULL</code> for any stack set on which drift
   *          detection has not yet been performed.</p>
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

  /**
   * <p>The number of stack instances that have drifted from the expected template and parameter
   *          configuration of the stack set. A stack instance is considered to have drifted if one or
   *          more of the resources in the associated stack do not match their expected
   *          configuration.</p>
   */
  DriftedStackInstancesCount?: number;

  /**
   * <p>The number of stack instances which match the expected template and parameter
   *          configuration of the stack set.</p>
   */
  InSyncStackInstancesCount?: number;

  /**
   * <p>The number of stack instances that are currently being checked for drift.</p>
   */
  InProgressStackInstancesCount?: number;

  /**
   * <p>The number of stack instances for which the drift detection operation failed.</p>
   */
  FailedStackInstancesCount?: number;
}

export namespace StackSetDriftDetectionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackSetDriftDetectionDetails): any => ({
    ...obj,
  });
}

export type StackSetStatus = "ACTIVE" | "DELETED";

/**
 * <p>A structure that contains information about a stack set. A stack set enables you to
 *          provision stacks into Amazon Web Services accounts and across Regions by using a single CloudFormation
 *          template. In the stack set, you specify the template to use, as well as any parameters and
 *          capabilities that the template requires. </p>
 */
export interface StackSet {
  /**
   * <p>The name that's associated with the stack set.</p>
   */
  StackSetName?: string;

  /**
   * <p>The ID of the stack set.</p>
   */
  StackSetId?: string;

  /**
   * <p>A description of the stack set that you specify when the stack set is created or
   *          updated.</p>
   */
  Description?: string;

  /**
   * <p>The status of the stack set.</p>
   */
  Status?: StackSetStatus | string;

  /**
   * <p>The structure that contains the body of the template that was used to create or
   *          update the stack set.</p>
   */
  TemplateBody?: string;

  /**
   * <p>A list of input parameters for a stack set.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>The capabilities that are allowed in the stack set. Some stack set templates might
   *          include resources that can affect permissions in your Amazon Web Services account—for example, by creating
   *          new Identity and Access Management (IAM) users. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in CloudFormation Templates.</a>
   *          </p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>A list of tags that specify information about the stack set. A maximum number of 50
   *          tags can be specified.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Number (ARN) of the stack set.</p>
   */
  StackSetARN?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the IAM role used to create or update the stack
   *          set.</p>
   *          <p>Use customized administrator roles to control which users or groups can manage specific
   *          stack sets within the same administrator account. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html">Prerequisites: Granting Permissions for Stack
   *             Set Operations</a> in the <i>CloudFormation User Guide</i>.</p>
   */
  AdministrationRoleARN?: string;

  /**
   * <p>The name of the IAM execution role used to create or update the stack set. </p>
   *          <p>Use customized execution roles to control which stack resources users and groups can
   *          include in their stack sets. </p>
   */
  ExecutionRoleName?: string;

  /**
   * <p>Detailed information about the drift status of the stack set.</p>
   *          <p>For stack sets, contains information about the last <i>completed</i> drift
   *          operation performed on the stack set. Information about drift operations currently in
   *          progress is not included.</p>
   */
  StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;

  /**
   * <p>[Service-managed permissions] Describes whether StackSets automatically deploys to
   *             Organizations accounts that are added to a target organization or organizational
   *          unit (OU).</p>
   */
  AutoDeployment?: AutoDeployment;

  /**
   * <p>Describes how the IAM roles required for stack set operations are created.</p>
   *          <ul>
   *             <li>
   *                <p>With <code>self-managed</code> permissions, you must create the administrator and
   *                execution roles required to deploy to target accounts. For more information, see
   *                   <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant
   *                   Self-Managed Stack Set Permissions</a>.</p>
   *             </li>
   *             <li>
   *                <p>With <code>service-managed</code> permissions, StackSets automatically creates the
   *                IAM roles required to deploy to accounts managed by Organizations. For more
   *                information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant Service-Managed Stack Set Permissions</a>.</p>
   *             </li>
   *          </ul>
   */
  PermissionModel?: PermissionModels | string;

  /**
   * <p>[Service-managed permissions] The organization root ID or organizational unit (OU) IDs
   *          that you specified for <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html">DeploymentTargets</a>.</p>
   */
  OrganizationalUnitIds?: string[];
}

export namespace StackSet {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackSet): any => ({
    ...obj,
  });
}

export interface DescribeStackSetOutput {
  /**
   * <p>The specified stack set.</p>
   */
  StackSet?: StackSet;
}

export namespace DescribeStackSetOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStackSetOutput): any => ({
    ...obj,
  });
}

export interface DescribeStackSetOperationInput {
  /**
   * <p>The name or the unique stack ID of the stack set for the stack operation.</p>
   */
  StackSetName: string | undefined;

  /**
   * <p>The unique ID of the stack set operation. </p>
   */
  OperationId: string | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account
   *          administrator in the organization's management account or as a delegated administrator in a
   *          member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *          self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *                   <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in
   *                the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

export namespace DescribeStackSetOperationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStackSetOperationInput): any => ({
    ...obj,
  });
}

export type StackSetOperationAction = "CREATE" | "DELETE" | "DETECT_DRIFT" | "UPDATE";

export type StackSetOperationStatus = "FAILED" | "QUEUED" | "RUNNING" | "STOPPED" | "STOPPING" | "SUCCEEDED";

/**
 * <p>The structure that contains information about a stack set operation. </p>
 */
export interface StackSetOperation {
  /**
   * <p>The unique ID of a stack set operation.</p>
   */
  OperationId?: string;

  /**
   * <p>The ID of the stack set.</p>
   */
  StackSetId?: string;

  /**
   * <p>The type of stack set operation: <code>CREATE</code>, <code>UPDATE</code>, or
   *             <code>DELETE</code>. Create and delete operations affect only the specified stack set
   *          instances that are associated with the specified stack set. Update operations affect both
   *          the stack set itself, as well as <i>all</i> associated stack set
   *          instances.</p>
   */
  Action?: StackSetOperationAction | string;

  /**
   * <p>The status of the operation. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation exceeded the specified failure tolerance.
   *                The failure tolerance value that you've set for an operation is applied for each
   *                Region during stack create and update operations. If the number of failed stacks
   *                within a Region exceeds the failure tolerance, the status of the operation in the
   *                Region is set to <code>FAILED</code>. This in turn sets the status of the operation
   *                as a whole to <code>FAILED</code>, and CloudFormation cancels the operation in
   *                any remaining Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUEUED</code>: [Service-managed permissions] For automatic deployments that
   *                require a sequence of operations, the operation is queued to be performed. For more
   *                information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-status-codes">stack set operation status codes</a> in the CloudFormation User
   *                Guide.</p>
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

  /**
   * <p>The preferences for how CloudFormation performs this stack set
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
   * <p>The Amazon Resource Number (ARN) of the IAM role used to perform this stack set
   *          operation. </p>
   *          <p>Use customized administrator roles to control which users or groups can manage specific
   *          stack sets within the same administrator account. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html">Define Permissions for Multiple
   *             Administrators</a> in the <i>CloudFormation User Guide</i>.</p>
   */
  AdministrationRoleARN?: string;

  /**
   * <p>The name of the IAM execution role used to create or update the stack set.</p>
   *          <p>Use customized execution roles to control which stack resources users and groups can
   *          include in their stack sets. </p>
   */
  ExecutionRoleName?: string;

  /**
   * <p>The time at which the operation was initiated. Note that the creation times for the
   *          stack set operation might differ from the creation time of the individual stacks
   *          themselves. This is because CloudFormation needs to perform preparatory work for the
   *          operation, such as dispatching the work to the requested Regions, before actually creating
   *          the first stacks.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The time at which the stack set operation ended, across all accounts and Regions
   *          specified. Note that this doesn't necessarily mean that the stack set operation was
   *          successful, or even attempted, in each account or Region.</p>
   */
  EndTimestamp?: Date;

  /**
   * <p>[Service-managed permissions] The Organizations accounts affected by the stack
   *          operation.</p>
   */
  DeploymentTargets?: DeploymentTargets;

  /**
   * <p>Detailed information about the drift status of the stack set. This includes information
   *          about drift operations currently being performed on the stack set.</p>
   *          <p>this information will only be present for stack set operations whose <code>Action</code>
   *          type is <code>DETECT_DRIFT</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged
   *             Changes in Stack Sets</a> in the CloudFormation User Guide.</p>
   */
  StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;
}

export namespace StackSetOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackSetOperation): any => ({
    ...obj,
  });
}

export interface DescribeStackSetOperationOutput {
  /**
   * <p>The specified stack set operation.</p>
   */
  StackSetOperation?: StackSetOperation;
}

export namespace DescribeStackSetOperationOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStackSetOperationOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified ID refers to an operation that doesn't exist.</p>
 */
export interface OperationNotFoundException extends __SmithyException, $MetadataBearer {
  name: "OperationNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace OperationNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OperationNotFoundException): any => ({
    ...obj,
  });
}

export interface DescribeTypeInput {
  /**
   * <p>The kind of extension. </p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *             <code>Arn</code>.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *             <code>Arn</code>.</p>
   */
  TypeName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *             <code>Arn</code>.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of a specific version of the extension. The version ID is the value at the end of
   *          the Amazon Resource Name (ARN) assigned to the extension version when it is
   *          registered.</p>
   *          <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information
   *          about that specific extension version. Otherwise, it returns information about the default
   *          extension version.</p>
   */
  VersionId?: string;

  /**
   * <p>The publisher ID of the extension publisher.</p>
   *          <p>Extensions provided by Amazon are not assigned a publisher ID.</p>
   */
  PublisherId?: string;

  /**
   * <p>The version number of a public third-party extension.</p>
   */
  PublicVersionNumber?: string;
}

export namespace DescribeTypeInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTypeInput): any => ({
    ...obj,
  });
}

export type DeprecatedStatus = "DEPRECATED" | "LIVE";

export type ProvisioningType = "FULLY_MUTABLE" | "IMMUTABLE" | "NON_PROVISIONABLE";

/**
 * <p>For extensions that are modules, a public third-party extension that must be activated
 *          in your account in order for the module itself to be activated.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html#module-enabling">Activating public
 *             modules for use in your account</a> in the <i>CloudFormation User
 *          Guide</i>.</p>
 */
export interface RequiredActivatedType {
  /**
   * <p>An alias assigned to the public extension, in this account and region. If you specify an
   *          alias for the extension, CloudFormation treats the alias as the extension type name within
   *          this account and region. You must use the alias to refer to the extension in your
   *          templates, API calls, and CloudFormation console.</p>
   */
  TypeNameAlias?: string;

  /**
   * <p>The type name of the public extension.</p>
   *          <p>If you specified a <code>TypeNameAlias</code> when enabling the extension in this
   *          account and region, CloudFormation treats that alias as the extension's type name within
   *          the account and region, not the type name of the public extension. For more information,
   *          see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-alias">Specifying aliases to refer to extensions</a> in the
   *             <i>CloudFormation User Guide</i>.</p>
   */
  OriginalTypeName?: string;

  /**
   * <p>The publisher ID of the extension publisher.</p>
   */
  PublisherId?: string;

  /**
   * <p>A list of the major versions of the extension type that the macro supports.</p>
   */
  SupportedMajorVersions?: number[];
}

export namespace RequiredActivatedType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RequiredActivatedType): any => ({
    ...obj,
  });
}

export enum TypeTestsStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_TESTED = "NOT_TESTED",
  PASSED = "PASSED",
}

export type Visibility = "PRIVATE" | "PUBLIC";

export interface DescribeTypeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   */
  Arn?: string;

  /**
   * <p>The kind of extension. </p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The name of the extension.</p>
   *          <p>If the extension is a public third-party type you have activated with a type name alias,
   *          CloudFormation returns the type name alias. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">ActivateType</a>.</p>
   */
  TypeName?: string;

  /**
   * <p>The ID of the default version of the extension. The default version is used when the
   *          extension version is not specified.</p>
   *          <p>This applies only to private extensions you have registered in your account. For public
   *          extensions, both those provided by Amazon and published by third parties, CloudFormation
   *          returns <code>null</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   *          <p>To set the default version of an extension, use <code>
   *                <a>SetTypeDefaultVersion</a>
   *             </code>. </p>
   */
  DefaultVersionId?: string;

  /**
   * <p>Whether the specified extension version is set as the default version.</p>
   *          <p>This applies only to private extensions you have registered in your account, and
   *          extensions published by Amazon. For public third-party extensions, whether or not they are
   *          activated in your account, CloudFormation returns <code>null</code>.</p>
   */
  IsDefaultVersion?: boolean;

  /**
   * <p>The contract test status of the registered extension version. To return the extension
   *          test status of a specifc extension version, you must specify <code>VersionId</code>. </p>
   *          <p>This applies only to registered private extension versions. CloudFormation does not
   *          return this information for public extensions, whether or not they are activated in your
   *          account.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PASSED</code>: The extension has passed all its contract tests.</p>
   *                <p>An extension must have a test status of <code>PASSED</code> before it can be
   *                published. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html">Publishing extensions to make them available for public
   *                   use</a> in the <i>CloudFormation Command Line Interface User
   *                   Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The extension has failed one or more contract tests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>: Contract tests are currently being performed on the
   *                extension.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_TESTED</code>: Contract tests have not been performed on the
   *                extension.</p>
   *             </li>
   *          </ul>
   */
  TypeTestsStatus?: TypeTestsStatus | string;

  /**
   * <p>The description of the test status. To return the extension test status of a specifc
   *          extension version, you must specify <code>VersionId</code>. </p>
   *          <p>This applies only to registered private extension versions. CloudFormation does not
   *          return this information for public extensions, whether or not they are activated in your
   *          account.</p>
   */
  TypeTestsStatusDescription?: string;

  /**
   * <p>The description of the extension.</p>
   */
  Description?: string;

  /**
   * <p>The schema that defines the extension.</p>
   *          <p>For more information on extension schemas, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">Resource Provider
   *             Schema</a> in the <i>CloudFormation CLI User
   *          Guide</i>.</p>
   */
  Schema?: string;

  /**
   * <p>For resource type extensions, the provisioning behavior of the resource type. CloudFormation
   *          determines the provisioning type during registration, based on the types of handlers in the
   *          schema handler package submitted.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FULLY_MUTABLE</code>: The resource type includes an update handler to
   *                process updates to the type during stack update operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMMUTABLE</code>: The resource type does not include an update handler, so
   *                the type cannot be updated and must instead be replaced during stack update
   *                operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_PROVISIONABLE</code>: The resource type does not include all of the
   *                following handlers, and therefore cannot actually be provisioned.</p>
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
   * <p>The deprecation status of the extension version.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LIVE</code>: The extension is activated or registered and can be used in
   *                   CloudFormation operations, dependent on its provisioning behavior and
   *                visibility scope.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPRECATED</code>: The extension has been deactivated or deregistered and
   *                can no longer be used in CloudFormation operations. </p>
   *             </li>
   *          </ul>
   *          <p>For public third-party extensions, CloudFormation returns <code>null</code>.</p>
   */
  DeprecatedStatus?: DeprecatedStatus | string;

  /**
   * <p>Contains logging configuration information for private extensions. This applies only to
   *          private extensions you have registered in your account. For public extensions, both those
   *          provided by Amazon and published by third parties, CloudFormation returns
   *          <code>null</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   */
  LoggingConfig?: LoggingConfig;

  /**
   * <p>For extensions that are modules, the public third-party extensions that must be
   *          activated in your account in order for the module itself to be activated.</p>
   */
  RequiredActivatedTypes?: RequiredActivatedType[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM execution role used to register the extension.
   *          This applies only to private extensions you have registered in your account. For more
   *          information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   *          <p></p>
   *          <p>If the registered extension calls any Amazon Web Services APIs, you must create an
   *                <i>
   *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM
   *                execution role</a>
   *             </i> that includes the necessary permissions to call
   *          those Amazon Web Services APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your extension with the
   *          appropriate credentials.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>The scope at which the extension is visible and usable in CloudFormation
   *          operations.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PRIVATE</code>: The extension is only visible and usable within the account
   *                in which it is registered. CloudFormation marks any extensions you register as
   *                   <code>PRIVATE</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUBLIC</code>: The extension is publically visible and usable within any
   *                Amazon account.</p>
   *             </li>
   *          </ul>
   */
  Visibility?: Visibility | string;

  /**
   * <p>The URL of the source code for the extension.</p>
   */
  SourceUrl?: string;

  /**
   * <p>The URL of a page providing detailed documentation for this extension.</p>
   */
  DocumentationUrl?: string;

  /**
   * <p>When the specified extension version was registered. This applies only to:</p>
   *          <ul>
   *             <li>
   *                <p>Private extensions you have registered in your account. For more information, see
   *                   <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   *             </li>
   *             <li>
   *                <p>Public extensions you have activated in your account with auto-update specified.
   *                For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">ActivateType</a>.</p>
   *             </li>
   *          </ul>
   */
  LastUpdated?: Date;

  /**
   * <p>When the specified private extension version was registered or activated in your
   *          account. </p>
   */
  TimeCreated?: Date;

  /**
   * <p>A JSON string that represent the current configuration data for the extension in this
   *          account and region.</p>
   *          <p>To set the configuration data for an extension, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation
   *             User Guide</i>.</p>
   */
  ConfigurationSchema?: string;

  /**
   * <p>The publisher ID of the extension publisher.</p>
   *          <p>This applies only to public third-party extensions. For private registered extensions,
   *          and extensions provided by Amazon, CloudFormation returns <code>null</code>.</p>
   */
  PublisherId?: string;

  /**
   * <p>For public extensions that have been activated for this account and region, the type
   *          name of the public extension.</p>
   *          <p>If you specified a <code>TypeNameAlias</code> when enabling the extension in this
   *          account and region, CloudFormation treats that alias as the extension's type name within
   *          the account and region, not the type name of the public extension. For more information,
   *          see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-alias">Specifying aliases to refer to extensions</a> in the
   *             <i>CloudFormation User Guide</i>.</p>
   */
  OriginalTypeName?: string;

  /**
   * <p>For public extensions that have been activated for this account and region, the Amazon
   *          Resource Name (ARN) of the public extension.</p>
   */
  OriginalTypeArn?: string;

  /**
   * <p>The version number of a public third-party extension.</p>
   *          <p>This applies only if you specify a public extension you have activated in your account,
   *          or specify a public extension without specifying a version. For all other extensions,
   *          CloudFormation returns <code>null</code>.</p>
   */
  PublicVersionNumber?: string;

  /**
   * <p>The latest version of a public extension <i>that is available</i> for
   *          use.</p>
   *          <p>This only applies if you specify a public extension, and you do not specify a version.
   *          For all other requests, CloudFormation returns <code>null</code>.</p>
   */
  LatestPublicVersion?: string;

  /**
   * <p>Whether or not the extension is activated in the account and region.</p>
   *          <p>This only applies to public third-party extensions. For all other extensions,
   *          CloudFormation returns <code>null</code>.</p>
   */
  IsActivated?: boolean;

  /**
   * <p>Whether CloudFormation automatically updates the extension in this account and region
   *          when a new <i>minor</i> version is published by the extension publisher.
   *          Major versions released by the publisher must be manually updated. For more information,
   *          see <a href="AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable">Activating public extensions for use in your account</a> in the <i>CloudFormation User Guide</i>.</p>
   */
  AutoUpdate?: boolean;
}

export namespace DescribeTypeOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTypeOutput): any => ({
    ...obj,
  });
}

export interface DescribeTypeRegistrationInput {
  /**
   * <p>The identifier for this registration request.</p>
   *          <p>This registration token is generated by CloudFormation when you initiate a
   *          registration request using <code>
   *                <a>RegisterType</a>
   *             </code>.</p>
   */
  RegistrationToken: string | undefined;
}

export namespace DescribeTypeRegistrationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTypeRegistrationInput): any => ({
    ...obj,
  });
}

export type RegistrationStatus = "COMPLETE" | "FAILED" | "IN_PROGRESS";

export interface DescribeTypeRegistrationOutput {
  /**
   * <p>The current status of the extension registration request.</p>
   */
  ProgressStatus?: RegistrationStatus | string;

  /**
   * <p>The description of the extension registration request.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the extension being registered.</p>
   *          <p>For registration requests with a <code>ProgressStatus</code> of other than
   *             <code>COMPLETE</code>, this will be <code>null</code>.</p>
   */
  TypeArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of this specific version of the extension being
   *          registered.</p>
   *          <p>For registration requests with a <code>ProgressStatus</code> of other than
   *             <code>COMPLETE</code>, this will be <code>null</code>.</p>
   */
  TypeVersionArn?: string;
}

export namespace DescribeTypeRegistrationOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeTypeRegistrationOutput): any => ({
    ...obj,
  });
}

export interface DetectStackDriftInput {
  /**
   * <p>The name of the stack for which you want to detect drift.</p>
   */
  StackName: string | undefined;

  /**
   * <p>The logical names of any resources you want to use as filters.</p>
   */
  LogicalResourceIds?: string[];
}

export namespace DetectStackDriftInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectStackDriftInput): any => ({
    ...obj,
  });
}

export interface DetectStackDriftOutput {
  /**
   * <p>The ID of the drift detection results of this operation.</p>
   *          <p>CloudFormation generates new results, with a new drift detection ID, each time this operation is
   *          run. However, the number of drift results CloudFormation retains for any given stack, and for how
   *          long, may vary.</p>
   */
  StackDriftDetectionId: string | undefined;
}

export namespace DetectStackDriftOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectStackDriftOutput): any => ({
    ...obj,
  });
}

export interface DetectStackResourceDriftInput {
  /**
   * <p>The name of the stack to which the resource belongs.</p>
   */
  StackName: string | undefined;

  /**
   * <p>The logical name of the resource for which to return drift information.</p>
   */
  LogicalResourceId: string | undefined;
}

export namespace DetectStackResourceDriftInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectStackResourceDriftInput): any => ({
    ...obj,
  });
}

export interface DetectStackResourceDriftOutput {
  /**
   * <p>Information about whether the resource's actual configuration has drifted from its
   *          expected template configuration, including actual and expected property values and any
   *          differences detected.</p>
   */
  StackResourceDrift: StackResourceDrift | undefined;
}

export namespace DetectStackResourceDriftOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectStackResourceDriftOutput): any => ({
    ...obj,
  });
}

export interface DetectStackSetDriftInput {
  /**
   * <p>The name of the stack set on which to perform the drift detection operation.</p>
   */
  StackSetName: string | undefined;

  /**
   * <p>The user-specified preferences for how CloudFormation performs a stack set
   *          operation. </p>
   *          <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * <p>
   *             <i>The ID of the stack set operation.</i>
   *          </p>
   */
  OperationId?: string;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account
   *          administrator in the organization's management account or as a delegated administrator in a
   *          member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *          self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *                   <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in
   *                the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

export namespace DetectStackSetDriftInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectStackSetDriftInput): any => ({
    ...obj,
  });
}

export interface DetectStackSetDriftOutput {
  /**
   * <p>The ID of the drift detection stack set operation. </p>
   *          <p>you can use this operation id with <code>
   *                <a>DescribeStackSetOperation</a>
   *             </code> to monitor the progress of the drift detection operation. </p>
   */
  OperationId?: string;
}

export namespace DetectStackSetDriftOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetectStackSetDriftOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The input for an <a>EstimateTemplateCost</a> action.</p>
 */
export interface EstimateTemplateCostInput {
  /**
   * <p>Structure containing the template body with a minimum length of 1 byte and a maximum
   *          length of 51,200 bytes. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the CloudFormation User Guide.)</p>
   *          <p>Conditional: You must pass <code>TemplateBody</code> or <code>TemplateURL</code>. If
   *          both are passed, only <code>TemplateBody</code> is used.</p>
   */
  TemplateBody?: string;

  /**
   * <p>Location of file containing the template body. The URL must point to a template that
   *          is located in an Amazon S3 bucket or a Systems Manager document. For more information, go to
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the CloudFormation User Guide.</p>
   *          <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If
   *          both are passed, only <code>TemplateBody</code> is used.</p>
   */
  TemplateURL?: string;

  /**
   * <p>A list of <code>Parameter</code> structures that specify input parameters.</p>
   */
  Parameters?: Parameter[];
}

export namespace EstimateTemplateCostInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EstimateTemplateCostInput): any => ({
    ...obj,
  });
}

/**
 * <p>The output for a <a>EstimateTemplateCost</a> action.</p>
 */
export interface EstimateTemplateCostOutput {
  /**
   * <p>An Amazon Web Services Simple Monthly Calculator URL with a query string that describes the resources
   *          required to run the template.</p>
   */
  Url?: string;
}

export namespace EstimateTemplateCostOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EstimateTemplateCostOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>ExecuteChangeSet</a> action.</p>
 */
export interface ExecuteChangeSetInput {
  /**
   * <p>The name or ARN of the change set that you want use to update the specified
   *          stack.</p>
   */
  ChangeSetName: string | undefined;

  /**
   * <p>If you specified the name of a change set, specify the stack name or ID (ARN) that is
   *          associated with the change set you want to execute.</p>
   */
  StackName?: string;

  /**
   * <p>A unique identifier for this <code>ExecuteChangeSet</code> request. Specify this
   *          token if you plan to retry requests so that CloudFormation knows that you're not
   *          attempting to execute a change set to update a stack with the same name. You might retry
   *          <code>ExecuteChangeSet</code> requests to ensure that CloudFormation successfully
   *          received them.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Preserves the state of previously provisioned resources when an operation fails.</p>
   *          <p>Default: <code>True</code>
   *          </p>
   */
  DisableRollback?: boolean;
}

export namespace ExecuteChangeSetInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecuteChangeSetInput): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the <a>ExecuteChangeSet</a> action.</p>
 */
export interface ExecuteChangeSetOutput {}

export namespace ExecuteChangeSetOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExecuteChangeSetOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>GetStackPolicy</a> action.</p>
 */
export interface GetStackPolicyInput {
  /**
   * <p>The name or unique stack ID that is associated with the stack whose policy you want
   *          to get.</p>
   */
  StackName: string | undefined;
}

export namespace GetStackPolicyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStackPolicyInput): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the <a>GetStackPolicy</a> action.</p>
 */
export interface GetStackPolicyOutput {
  /**
   * <p>Structure containing the stack policy body. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent Updates
   *             to Stack Resources</a> in the CloudFormation User Guide.)</p>
   */
  StackPolicyBody?: string;
}

export namespace GetStackPolicyOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStackPolicyOutput): any => ({
    ...obj,
  });
}

export enum TemplateStage {
  Original = "Original",
  Processed = "Processed",
}

/**
 * <p>The input for a <a>GetTemplate</a> action.</p>
 */
export interface GetTemplateInput {
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
   * <p>The name or Amazon Resource Name (ARN) of a change set for which CloudFormation
   *          returns the associated template. If you specify a name, you must also specify the
   *             <code>StackName</code>.</p>
   */
  ChangeSetName?: string;

  /**
   * <p>For templates that include transforms, the stage of the template that CloudFormation returns. To get the user-submitted template, specify
   *             <code>Original</code>. To get the template after CloudFormation has processed
   *          all transforms, specify <code>Processed</code>.</p>
   *          <p>If the template doesn't include transforms, <code>Original</code> and
   *             <code>Processed</code> return the same template. By default, CloudFormation
   *          specifies <code>Processed</code>.</p>
   */
  TemplateStage?: TemplateStage | string;
}

export namespace GetTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTemplateInput): any => ({
    ...obj,
  });
}

/**
 * <p>The output for <a>GetTemplate</a> action.</p>
 */
export interface GetTemplateOutput {
  /**
   * <p>Structure containing the template body. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.)</p>
   *          <p>CloudFormation returns the same template that was used when the stack was
   *          created.</p>
   */
  TemplateBody?: string;

  /**
   * <p>The stage of the template that you can retrieve. For stacks, the
   *             <code>Original</code> and <code>Processed</code> templates are always available. For
   *          change sets, the <code>Original</code> template is always available. After
   *          CloudFormation finishes creating the change set, the <code>Processed</code> template
   *          becomes available.</p>
   */
  StagesAvailable?: (TemplateStage | string)[];
}

export namespace GetTemplateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTemplateOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>GetTemplateSummary</a> action.</p>
 */
export interface GetTemplateSummaryInput {
  /**
   * <p>Structure containing the template body with a minimum length of 1 byte and a maximum
   *          length of 51,200 bytes. For more information about templates, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a> in the CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *             <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or
   *             <code>TemplateURL</code>.</p>
   */
  TemplateBody?: string;

  /**
   * <p>Location of file containing the template body. The URL must point to a template (max
   *          size: 460,800 bytes) that is located in an Amazon S3 bucket or a Systems Manager document.
   *          For more information about templates, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *             <code>StackName</code>, <code>StackSetName</code>, <code>TemplateBody</code>, or
   *             <code>TemplateURL</code>.</p>
   */
  TemplateURL?: string;

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
   * <p>[Service-managed permissions] Specifies whether you are acting as an account
   *          administrator in the organization's management account or as a delegated administrator in a
   *          member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *          self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *                   <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in
   *                the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

export namespace GetTemplateSummaryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTemplateSummaryInput): any => ({
    ...obj,
  });
}

/**
 * <p>A set of criteria that CloudFormation uses to validate parameter values. Although
 *          other constraints might be defined in the stack template, CloudFormation returns only
 *          the <code>AllowedValues</code> property.</p>
 */
export interface ParameterConstraints {
  /**
   * <p>A list of values that are permitted for a parameter.</p>
   */
  AllowedValues?: string[];
}

export namespace ParameterConstraints {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterConstraints): any => ({
    ...obj,
  });
}

/**
 * <p>The ParameterDeclaration data type.</p>
 */
export interface ParameterDeclaration {
  /**
   * <p>The name that is associated with the parameter.</p>
   */
  ParameterKey?: string;

  /**
   * <p>The default value of the parameter.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The type of parameter.</p>
   */
  ParameterType?: string;

  /**
   * <p>Flag that indicates whether the parameter value is shown as plain text in logs and in
   *          the Amazon Web Services Management Console.</p>
   */
  NoEcho?: boolean;

  /**
   * <p>The description that is associate with the parameter.</p>
   */
  Description?: string;

  /**
   * <p>The criteria that CloudFormation uses to validate parameter values.</p>
   */
  ParameterConstraints?: ParameterConstraints;
}

export namespace ParameterDeclaration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterDeclaration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the target resources of a specific type in your import template (for example,
 *          all <code>AWS::S3::Bucket</code> resources) and the properties you can provide during the
 *          import to identify resources of that type.</p>
 */
export interface ResourceIdentifierSummary {
  /**
   * <p>The template resource type of the target resources, such as
   *          <code>AWS::S3::Bucket</code>.</p>
   */
  ResourceType?: string;

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
}

export namespace ResourceIdentifierSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceIdentifierSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the <a>GetTemplateSummary</a> action.</p>
 */
export interface GetTemplateSummaryOutput {
  /**
   * <p>A list of parameter declarations that describe various properties for each
   *          parameter.</p>
   */
  Parameters?: ParameterDeclaration[];

  /**
   * <p>The value that is defined in the <code>Description</code> property of the
   *          template.</p>
   */
  Description?: string;

  /**
   * <p>The capabilities found within the template. If your template contains IAM resources,
   *          you must specify the CAPABILITY_IAM or CAPABILITY_NAMED_IAM value for this parameter when
   *          you use the <a>CreateStack</a> or <a>UpdateStack</a> actions with
   *          your template; otherwise, those actions return an InsufficientCapabilities error.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in CloudFormation Templates</a>.</p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>The list of resources that generated the values in the <code>Capabilities</code>
   *          response element.</p>
   */
  CapabilitiesReason?: string;

  /**
   * <p>A list of all the template resource types that are defined in the template, such as
   *             <code>AWS::EC2::Instance</code>, <code>AWS::Dynamo::Table</code>, and
   *             <code>Custom::MyCustomInstance</code>.</p>
   */
  ResourceTypes?: string[];

  /**
   * <p>The Amazon Web Services template format version, which identifies the capabilities of the
   *          template.</p>
   */
  Version?: string;

  /**
   * <p>The value that is defined for the <code>Metadata</code> property of the
   *          template.</p>
   */
  Metadata?: string;

  /**
   * <p>A list of the transforms that are declared in the template.</p>
   */
  DeclaredTransforms?: string[];

  /**
   * <p>A list of resource identifier summaries that describe the target resources of an import
   *          operation and the properties you can provide during the import to identify the target
   *          resources. For example, <code>BucketName</code> is a possible identifier property for an
   *             <code>AWS::S3::Bucket</code> resource.</p>
   */
  ResourceIdentifierSummaries?: ResourceIdentifierSummary[];
}

export namespace GetTemplateSummaryOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTemplateSummaryOutput): any => ({
    ...obj,
  });
}

export interface ImportStacksToStackSetInput {
  /**
   * <p>The name of the stack set. The name must be unique in the Region where you create your
   *          stack set.</p>
   */
  StackSetName: string | undefined;

  /**
   * <p>The IDs of the stacks you are importing into a stack set. You import up to 10 stacks per
   *          stack set at a time.</p>
   */
  StackIds: string[] | undefined;

  /**
   * <p>The user-specified preferences for how CloudFormation performs a stack set
   *          operation. </p>
   *          <p>For more information on maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * <p>A unique, user defined, identifier for the stack set operation.</p>
   */
  OperationId?: string;

  /**
   * <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *          self-managed permissions.</p>
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

export namespace ImportStacksToStackSetInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportStacksToStackSetInput): any => ({
    ...obj,
  });
}

export interface ImportStacksToStackSetOutput {
  /**
   * <p>The unique identifier for the stack set operation.</p>
   */
  OperationId?: string;
}

export namespace ImportStacksToStackSetOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportStacksToStackSetOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified stack ARN doesn’t exist or stack doesn’t exist corresponding to the ARN in
 *          input.</p>
 */
export interface StackNotFoundException extends __SmithyException, $MetadataBearer {
  name: "StackNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace StackNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>ListChangeSets</a> action.</p>
 */
export interface ListChangeSetsInput {
  /**
   * <p>The name or the Amazon Resource Name (ARN) of the stack for which you want to list
   *          change sets.</p>
   */
  StackName: string | undefined;

  /**
   * <p>A string (provided by the <a>ListChangeSets</a> response output) that
   *          identifies the next page of change sets that you want to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListChangeSetsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChangeSetsInput): any => ({
    ...obj,
  });
}

/**
 * <p>The output for the <a>ListChangeSets</a> action.</p>
 */
export interface ListChangeSetsOutput {
  /**
   * <p>A list of <code>ChangeSetSummary</code> structures that provides the ID and status of
   *          each change set for the specified stack.</p>
   */
  Summaries?: ChangeSetSummary[];

  /**
   * <p>If the output exceeds 1 MB, a string that identifies the next page of change sets. If
   *          there is no additional page, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListChangeSetsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChangeSetsOutput): any => ({
    ...obj,
  });
}

export interface ListExportsInput {
  /**
   * <p>A string (provided by the <a>ListExports</a> response output) that
   *          identifies the next page of exported output values that you asked to retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListExportsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExportsInput): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>Export</code> structure describes the exported output values for a
 *          stack.</p>
 */
export interface Export {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Export): any => ({
    ...obj,
  });
}

export interface ListExportsOutput {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExportsOutput): any => ({
    ...obj,
  });
}

export interface ListImportsInput {
  /**
   * <p>The name of the exported output value. CloudFormation returns the stack names
   *          that are importing this value.</p>
   */
  ExportName: string | undefined;

  /**
   * <p>A string (provided by the <a>ListImports</a> response output) that identifies
   *          the next page of stacks that are importing the specified exported output value.</p>
   */
  NextToken?: string;
}

export namespace ListImportsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImportsInput): any => ({
    ...obj,
  });
}

export interface ListImportsOutput {
  /**
   * <p>A list of stack names that are importing the specified exported output value.</p>
   */
  Imports?: string[];

  /**
   * <p>A string that identifies the next page of exports. If there is no additional page,
   *          this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListImportsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImportsOutput): any => ({
    ...obj,
  });
}

export type StackInstanceFilterName = "DETAILED_STATUS";

/**
 * <p>The status that stack instances are filtered by.</p>
 */
export interface StackInstanceFilter {
  /**
   * <p>The type of filter to apply.</p>
   */
  Name?: StackInstanceFilterName | string;

  /**
   * <p>The status to filter by.</p>
   */
  Values?: string;
}

export namespace StackInstanceFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackInstanceFilter): any => ({
    ...obj,
  });
}

export interface ListStackInstancesInput {
  /**
   * <p>The name or unique ID of the stack set that you want to list stack instances
   *          for.</p>
   */
  StackSetName: string | undefined;

  /**
   * <p>If the previous request didn't return all of the remaining results, the response's
   *             <code>NextToken</code> parameter value is set to a token. To retrieve the next set of
   *          results, call <code>ListStackInstances</code> again and assign that token to the request
   *          object's <code>NextToken</code> parameter. If there are no remaining results, the previous
   *          response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to be returned with a single call. If the number of
   *          available results exceeds this maximum, the response includes a <code>NextToken</code>
   *          value that you can assign to the <code>NextToken</code> request parameter to get the next
   *          set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The status that stack instances are filtered by.</p>
   */
  Filters?: StackInstanceFilter[];

  /**
   * <p>The name of the Amazon Web Services account that you want to list stack instances for.</p>
   */
  StackInstanceAccount?: string;

  /**
   * <p>The name of the Region where you want to list stack instances. </p>
   */
  StackInstanceRegion?: string;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account
   *          administrator in the organization's management account or as a delegated administrator in a
   *          member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *          self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *                   <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in
   *                the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

export namespace ListStackInstancesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStackInstancesInput): any => ({
    ...obj,
  });
}

/**
 * <p>The structure that contains summary information about a stack instance.</p>
 */
export interface StackInstanceSummary {
  /**
   * <p>The name or unique ID of the stack set that the stack instance is associated
   *          with.</p>
   */
  StackSetId?: string;

  /**
   * <p>The name of the Amazon Web Services Region that the stack instance is associated with.</p>
   */
  Region?: string;

  /**
   * <p>[Self-managed permissions] The name of the Amazon Web Services account that the stack instance is associated with.</p>
   */
  Account?: string;

  /**
   * <p>The ID of the stack instance.</p>
   */
  StackId?: string;

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

  /**
   * <p>The detailed status of the stack instance.</p>
   */
  StackInstanceStatus?: StackInstanceComprehensiveStatus;

  /**
   * <p>[Service-managed permissions] The organization root ID or organizational unit (OU) IDs
   *          that you specified for <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html">DeploymentTargets</a>.</p>
   */
  OrganizationalUnitId?: string;

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
   *                   <code>NOT_CHECKED</code>: CloudFormation has not checked if the stack instance differs from
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
   * <p>Most recent time when CloudFormation performed a drift detection operation on
   *          the stack instance. This value will be <code>NULL</code> for any stack instance on which
   *          drift detection has not yet been performed.</p>
   */
  LastDriftCheckTimestamp?: Date;
}

export namespace StackInstanceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackInstanceSummary): any => ({
    ...obj,
  });
}

export interface ListStackInstancesOutput {
  /**
   * <p>A list of <code>StackInstanceSummary</code> structures that contain information about
   *          the specified stack instances.</p>
   */
  Summaries?: StackInstanceSummary[];

  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is
   *          set to a token. To retrieve the next set of results, call <code>ListStackInstances</code>
   *          again and assign that token to the request object's <code>NextToken</code> parameter. If
   *          the request returns all results, <code>NextToken</code> is set to
   *          <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace ListStackInstancesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStackInstancesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>ListStackResource</a> action.</p>
 */
export interface ListStackResourcesInput {
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

  /**
   * <p>A string that identifies the next page of stack resources that you want to
   *          retrieve.</p>
   */
  NextToken?: string;
}

export namespace ListStackResourcesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStackResourcesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Summarizes information about whether the resource's actual configuration differs, or
 *          has <i>drifted</i>, from its expected configuration.</p>
 */
export interface StackResourceDriftInformationSummary {
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
   *                   <code>NOT_CHECKED</code>: CloudFormation has not checked if the resource differs from
   *                its expected configuration.</p>
   *                <p>Any resources that do not currently support drift detection have a status of
   *                   <code>NOT_CHECKED</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>. If you performed an <a>ContinueUpdateRollback</a> operation on a stack, any resources included in
   *                   <code>ResourcesToSkip</code> will also have a status of <code>NOT_CHECKED</code>.
   *                For more information on skipping resources during rollback operations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html">Continue Rolling Back an Update</a> in the CloudFormation User Guide.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code>: The resources's actual configuration matches its expected
   *                configuration.</p>
   *             </li>
   *          </ul>
   */
  StackResourceDriftStatus: StackResourceDriftStatus | string | undefined;

  /**
   * <p>When CloudFormation last checked if the resource had drifted from its expected
   *          configuration.</p>
   */
  LastCheckTimestamp?: Date;
}

export namespace StackResourceDriftInformationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackResourceDriftInformationSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains high-level information about the specified stack resource.</p>
 */
export interface StackResourceSummary {
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
   * <p>Type of resource. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services
   *             Resource Types Reference</a> in the CloudFormation User Guide.)</p>
   */
  ResourceType: string | undefined;

  /**
   * <p>Time the status was updated.</p>
   */
  LastUpdatedTimestamp: Date | undefined;

  /**
   * <p>Current status of the resource.</p>
   */
  ResourceStatus: ResourceStatus | string | undefined;

  /**
   * <p>Success/failure message associated with the resource.</p>
   */
  ResourceStatusReason?: string;

  /**
   * <p>Information about whether the resource's actual configuration differs, or has
   *             <i>drifted</i>, from its expected configuration, as defined in the stack
   *          template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration
   *             Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: StackResourceDriftInformationSummary;

  /**
   * <p>Contains information about the module from which the resource was created, if the
   *          resource was created from a module included in the stack template.</p>
   */
  ModuleInfo?: ModuleInfo;
}

export namespace StackResourceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackResourceSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The output for a <a>ListStackResources</a> action.</p>
 */
export interface ListStackResourcesOutput {
  /**
   * <p>A list of <code>StackResourceSummary</code> structures.</p>
   */
  StackResourceSummaries?: StackResourceSummary[];

  /**
   * <p>If the output exceeds 1 MB, a string that identifies the next page of stack
   *          resources. If no additional page exists, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListStackResourcesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStackResourcesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The input for <a>ListStacks</a> action.</p>
 */
export interface ListStacksInput {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStacksInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about whether the stack's actual configuration differs, or has
 *             <i>drifted</i>, from its expected configuration, as defined in the stack
 *          template and any values specified as template parameters. A stack is considered to have
 *          drifted if one or more of its resources have drifted.</p>
 */
export interface StackDriftInformationSummary {
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
   *                   <code>NOT_CHECKED</code>: CloudFormation has not checked if the stack differs from its
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

  /**
   * <p>Most recent time when a drift detection operation was initiated on the stack, or any
   *          of its individual resources that support drift detection.</p>
   */
  LastCheckTimestamp?: Date;
}

export namespace StackDriftInformationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackDriftInformationSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The StackSummary Data Type</p>
 */
export interface StackSummary {
  /**
   * <p>Unique stack identifier.</p>
   */
  StackId?: string;

  /**
   * <p>The name associated with the stack.</p>
   */
  StackName: string | undefined;

  /**
   * <p>The template description of the template used to create the stack.</p>
   */
  TemplateDescription?: string;

  /**
   * <p>The time the stack was created.</p>
   */
  CreationTime: Date | undefined;

  /**
   * <p>The time the stack was last updated. This field will only be returned if the stack
   *          has been updated at least once.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The time the stack was deleted.</p>
   */
  DeletionTime?: Date;

  /**
   * <p>The current status of the stack.</p>
   */
  StackStatus: StackStatus | string | undefined;

  /**
   * <p>Success/Failure message associated with the stack status.</p>
   */
  StackStatusReason?: string;

  /**
   * <p>For nested stacks--stacks created as resources for another stack--the stack ID of the
   *          direct parent of this stack. For the first level of nested stacks, the root stack is also
   *          the parent stack.</p>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Working with Nested Stacks</a> in the
   *          <i>CloudFormation User Guide</i>.</p>
   */
  ParentId?: string;

  /**
   * <p>For nested stacks--stacks created as resources for another stack--the stack ID of the
   *          top-level stack to which the nested stack ultimately belongs.</p>
   *          <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">Working with Nested Stacks</a> in the
   *          <i>CloudFormation User Guide</i>.</p>
   */
  RootId?: string;

  /**
   * <p>Summarizes information on whether a stack's actual configuration differs, or has
   *             <i>drifted</i>, from it's expected configuration, as defined in the stack
   *          template and any values specified as template parameters. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration
   *             Changes to Stacks and Resources</a>.</p>
   */
  DriftInformation?: StackDriftInformationSummary;
}

export namespace StackSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The output for <a>ListStacks</a> action.</p>
 */
export interface ListStacksOutput {
  /**
   * <p>A list of <code>StackSummary</code> structures containing information about the
   *          specified stacks.</p>
   */
  StackSummaries?: StackSummary[];

  /**
   * <p>If the output exceeds 1 MB in size, a string that identifies the next page of stacks.
   *          If no additional page exists, this value is null.</p>
   */
  NextToken?: string;
}

export namespace ListStacksOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStacksOutput): any => ({
    ...obj,
  });
}

export interface ListStackSetOperationResultsInput {
  /**
   * <p>The name or unique ID of the stack set that you want to get operation results
   *          for.</p>
   */
  StackSetName: string | undefined;

  /**
   * <p>The ID of the stack set operation.</p>
   */
  OperationId: string | undefined;

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
   * <p>The maximum number of results to be returned with a single call. If the number of
   *          available results exceeds this maximum, the response includes a <code>NextToken</code>
   *          value that you can assign to the <code>NextToken</code> request parameter to get the next
   *          set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account
   *          administrator in the organization's management account or as a delegated administrator in a
   *          member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *          self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *                   <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in
   *                the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

export namespace ListStackSetOperationResultsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStackSetOperationResultsInput): any => ({
    ...obj,
  });
}

export type StackSetOperationResultStatus = "CANCELLED" | "FAILED" | "PENDING" | "RUNNING" | "SUCCEEDED";

/**
 * <p>The structure that contains information about a specified operation's results for a
 *          given account in a given Region.</p>
 */
export interface StackSetOperationResultSummary {
  /**
   * <p>[Self-managed permissions] The name of the Amazon Web Services account for this operation result.</p>
   */
  Account?: string;

  /**
   * <p>The name of the Amazon Web Services Region for this operation result.</p>
   */
  Region?: string;

  /**
   * <p>The result status of the stack set operation for the given account in the given
   *          Region.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code>: The operation in the specified account and Region has
   *                been cancelled. This is either because a user has stopped the stack set operation, or
   *                because the failure tolerance of the stack set operation has been exceeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation in the specified account and Region failed. </p>
   *                <p>If the stack set operation fails in enough accounts within a Region, the
   *                failure tolerance for the stack set operation as a whole might be exceeded.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>: The operation in the specified account and Region is
   *                currently in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>: The operation in the specified account and Region has yet
   *                to start. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The operation in the specified account and Region
   *                completed successfully.</p>
   *             </li>
   *          </ul>
   */
  Status?: StackSetOperationResultStatus | string;

  /**
   * <p>The reason for the assigned result status.</p>
   */
  StatusReason?: string;

  /**
   * <p>The results of the account gate function CloudFormation invokes, if present,
   *          before proceeding with stack set operations in an account</p>
   */
  AccountGateResult?: AccountGateResult;

  /**
   * <p>[Service-managed permissions] The organization root ID or organizational unit (OU) IDs
   *          that you specified for <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html">DeploymentTargets</a>.</p>
   */
  OrganizationalUnitId?: string;
}

export namespace StackSetOperationResultSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackSetOperationResultSummary): any => ({
    ...obj,
  });
}

export interface ListStackSetOperationResultsOutput {
  /**
   * <p>A list of <code>StackSetOperationResultSummary</code> structures that contain
   *          information about the specified operation results, for accounts and Regions that are
   *          included in the operation.</p>
   */
  Summaries?: StackSetOperationResultSummary[];

  /**
   * <p>If the request doesn't return all results, <code>NextToken</code> is set to a token.
   *          To retrieve the next set of results, call <code>ListOperationResults</code> again and
   *          assign that token to the request object's <code>NextToken</code> parameter. If there are no
   *          remaining results, <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace ListStackSetOperationResultsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStackSetOperationResultsOutput): any => ({
    ...obj,
  });
}

export interface ListStackSetOperationsInput {
  /**
   * <p>The name or unique ID of the stack set that you want to get operation summaries
   *          for.</p>
   */
  StackSetName: string | undefined;

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
   * <p>The maximum number of results to be returned with a single call. If the number of
   *          available results exceeds this maximum, the response includes a <code>NextToken</code>
   *          value that you can assign to the <code>NextToken</code> request parameter to get the next
   *          set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account
   *          administrator in the organization's management account or as a delegated administrator in a
   *          member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *          self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *                   <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in
   *                the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

export namespace ListStackSetOperationsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStackSetOperationsInput): any => ({
    ...obj,
  });
}

/**
 * <p>The structures that contain summary information about the specified
 *          operation.</p>
 */
export interface StackSetOperationSummary {
  /**
   * <p>The unique ID of the stack set operation.</p>
   */
  OperationId?: string;

  /**
   * <p>The type of operation: <code>CREATE</code>, <code>UPDATE</code>, or
   *             <code>DELETE</code>. Create and delete operations affect only the specified stack
   *          instances that are associated with the specified stack set. Update operations affect both
   *          the stack set itself as well as <i>all</i> associated stack set
   *          instances.</p>
   */
  Action?: StackSetOperationAction | string;

  /**
   * <p>The overall status of the operation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The operation exceeded the specified failure tolerance.
   *                The failure tolerance value that you've set for an operation is applied for each
   *                Region during stack create and update operations. If the number of failed stacks
   *                within a Region exceeds the failure tolerance, the status of the operation in the
   *                Region is set to <code>FAILED</code>. This in turn sets the status of the operation
   *                as a whole to <code>FAILED</code>, and CloudFormation cancels the operation in
   *                any remaining Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>QUEUED</code>: [Service-managed permissions] For automatic deployments that
   *                require a sequence of operations, the operation is queued to be performed. For more
   *                information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-status-codes">stack set operation status codes</a> in the CloudFormation User
   *                Guide.</p>
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

  /**
   * <p>The time at which the operation was initiated. Note that the creation times for the
   *          stack set operation might differ from the creation time of the individual stacks
   *          themselves. This is because CloudFormation needs to perform preparatory work for the
   *          operation, such as dispatching the work to the requested Regions, before actually creating
   *          the first stacks.</p>
   */
  CreationTimestamp?: Date;

  /**
   * <p>The time at which the stack set operation ended, across all accounts and Regions
   *          specified. Note that this doesn't necessarily mean that the stack set operation was
   *          successful, or even attempted, in each account or Region.</p>
   */
  EndTimestamp?: Date;
}

export namespace StackSetOperationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackSetOperationSummary): any => ({
    ...obj,
  });
}

export interface ListStackSetOperationsOutput {
  /**
   * <p>A list of <code>StackSetOperationSummary</code> structures that contain summary
   *          information about operations for the specified stack set.</p>
   */
  Summaries?: StackSetOperationSummary[];

  /**
   * <p>If the request doesn't return all results, <code>NextToken</code> is set to a token.
   *          To retrieve the next set of results, call <code>ListOperationResults</code> again and
   *          assign that token to the request object's <code>NextToken</code> parameter. If there are no
   *          remaining results, <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace ListStackSetOperationsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStackSetOperationsOutput): any => ({
    ...obj,
  });
}

export interface ListStackSetsInput {
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
   * <p>The maximum number of results to be returned with a single call. If the number of
   *          available results exceeds this maximum, the response includes a <code>NextToken</code>
   *          value that you can assign to the <code>NextToken</code> request parameter to get the next
   *          set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The status of the stack sets that you want to get summary information
   *          about.</p>
   */
  Status?: StackSetStatus | string;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account
   *          administrator in the management account or as a delegated administrator in a member
   *          account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *          self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *                   <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in
   *                the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

export namespace ListStackSetsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStackSetsInput): any => ({
    ...obj,
  });
}

/**
 * <p>The structures that contain summary information about the specified stack
 *          set.</p>
 */
export interface StackSetSummary {
  /**
   * <p>The name of the stack set.</p>
   */
  StackSetName?: string;

  /**
   * <p>The ID of the stack set.</p>
   */
  StackSetId?: string;

  /**
   * <p>A description of the stack set that you specify when the stack set is created or
   *          updated.</p>
   */
  Description?: string;

  /**
   * <p>The status of the stack set.</p>
   */
  Status?: StackSetStatus | string;

  /**
   * <p>[Service-managed permissions] Describes whether StackSets automatically deploys to
   *             Organizations accounts that are added to a target organizational unit
   *          (OU).</p>
   */
  AutoDeployment?: AutoDeployment;

  /**
   * <p>Describes how the IAM roles required for stack set operations are created.</p>
   *          <ul>
   *             <li>
   *                <p>With <code>self-managed</code> permissions, you must create the administrator and
   *                execution roles required to deploy to target accounts. For more information, see
   *                   <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant
   *                   Self-Managed Stack Set Permissions</a>.</p>
   *             </li>
   *             <li>
   *                <p>With <code>service-managed</code> permissions, StackSets automatically creates the
   *                IAM roles required to deploy to accounts managed by Organizations. For more
   *                information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant Service-Managed Stack Set Permissions</a>.</p>
   *             </li>
   *          </ul>
   */
  PermissionModel?: PermissionModels | string;

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
   *                   <code>NOT_CHECKED</code>: CloudFormation has not checked the stack set for drift.</p>
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
   * <p>Most recent time when CloudFormation performed a drift detection operation on
   *          the stack set. This value will be <code>NULL</code> for any stack set on which drift
   *          detection has not yet been performed.</p>
   */
  LastDriftCheckTimestamp?: Date;
}

export namespace StackSetSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StackSetSummary): any => ({
    ...obj,
  });
}

export interface ListStackSetsOutput {
  /**
   * <p>A list of <code>StackSetSummary</code> structures that contain information about the
   *          user's stack sets.</p>
   */
  Summaries?: StackSetSummary[];

  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is
   *          set to a token. To retrieve the next set of results, call <code>ListStackInstances</code>
   *          again and assign that token to the request object's <code>NextToken</code> parameter. If
   *          the request returns all results, <code>NextToken</code> is set to
   *          <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace ListStackSetsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStackSetsOutput): any => ({
    ...obj,
  });
}

export interface ListTypeRegistrationsInput {
  /**
   * <p>The kind of extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *             <code>Arn</code>.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *             <code>Arn</code>.</p>
   */
  TypeName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *             <code>Arn</code>.</p>
   */
  TypeArn?: string;

  /**
   * <p>The current status of the extension registration request.</p>
   *          <p>The default is <code>IN_PROGRESS</code>.</p>
   */
  RegistrationStatusFilter?: RegistrationStatus | string;

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
   *          next set of results, call this action again and assign that token to the request object's
   *             <code>NextToken</code> parameter. If there are no remaining results, the previous
   *          response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace ListTypeRegistrationsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTypeRegistrationsInput): any => ({
    ...obj,
  });
}

export interface ListTypeRegistrationsOutput {
  /**
   * <p> A list of extension registration tokens.</p>
   *          <p>Use <code>
   *                <a>DescribeTypeRegistration</a>
   *             </code> to return detailed
   *          information about a type registration request.</p>
   */
  RegistrationTokenList?: string[];

  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is
   *          set to a token. To retrieve the next set of results, call this action again and assign that
   *          token to the request object's <code>NextToken</code> parameter. If the request returns all
   *          results, <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace ListTypeRegistrationsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTypeRegistrationsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Filter criteria to use in determining which extensions to return.</p>
 */
export interface TypeFilters {
  /**
   * <p>The category of extensions to return.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REGISTERED</code>: Private extensions that have been registered for this
   *                account and region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVATED</code>: Public extensions that have been activated for this
   *                account and region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>THIRD-PARTY</code>: Extensions available for use from publishers other than
   *                Amazon. This includes:</p>
   *                <ul>
   *                   <li>
   *                      <p>Private extensions registered in the account.</p>
   *                   </li>
   *                   <li>
   *                      <p>Public extensions from publishers other than Amazon, whether activated or
   *                      not.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AWS-TYPES</code>: Extensions available for use from Amazon.</p>
   *             </li>
   *          </ul>
   */
  Category?: Category | string;

  /**
   * <p>The id of the publisher of the extension. </p>
   *          <p>Extensions published by Amazon are not assigned a publisher ID. Use the
   *             <code>AWS-TYPES</code> category to specify a list of types published by Amazon.</p>
   */
  PublisherId?: string;

  /**
   * <p>A prefix to use as a filter for results.</p>
   */
  TypeNamePrefix?: string;
}

export namespace TypeFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TypeFilters): any => ({
    ...obj,
  });
}

export interface ListTypesInput {
  /**
   * <p>The scope at which the extensions are visible and usable in CloudFormation
   *          operations.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PRIVATE</code>: Extensions that are visible and usable within this account
   *                and region. This includes:</p>
   *                <ul>
   *                   <li>
   *                      <p>Private extensions you have registered in this account and region.</p>
   *                   </li>
   *                   <li>
   *                      <p>Public extensions that you have activated in this account and region.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PUBLIC</code>: Extensions that are publicly visible and available to be
   *                activated within any Amazon account. This includes extensions from Amazon, as well as
   *                third-party publishers.</p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>PRIVATE</code>.</p>
   */
  Visibility?: Visibility | string;

  /**
   * <p>For resource types, the provisioning behavior of the resource type. CloudFormation determines the
   *          provisioning type during registration, based on the types of handlers in the schema handler
   *          package submitted.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FULLY_MUTABLE</code>: The resource type includes an update handler to
   *                process updates to the type during stack update operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMMUTABLE</code>: The resource type does not include an update handler, so
   *                the type cannot be updated and must instead be replaced during stack update
   *                operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NON_PROVISIONABLE</code>: The resource type does not include create, read,
   *                and delete handlers, and therefore cannot actually be provisioned.</p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>FULLY_MUTABLE</code>.</p>
   */
  ProvisioningType?: ProvisioningType | string;

  /**
   * <p>The deprecation status of the extension that you want to get summary information
   *          about.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LIVE</code>: The extension is registered for use in CloudFormation
   *                operations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPRECATED</code>: The extension has been deregistered and can no longer be
   *                used in CloudFormation operations. </p>
   *             </li>
   *          </ul>
   */
  DeprecatedStatus?: DeprecatedStatus | string;

  /**
   * <p>The type of extension.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>Filter criteria to use in determining which extensions to return.</p>
   *          <p>If you specify a filter, CloudFormation ignores any specified <code>Visibility</code>
   *          value when returning the list of types.</p>
   */
  Filters?: TypeFilters;

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
   *          next set of results, call this action again and assign that token to the request object's
   *             <code>NextToken</code> parameter. If there are no remaining results, the previous
   *          response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace ListTypesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTypesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about the specified CloudFormation
 *          extension.</p>
 */
export interface TypeSummary {
  /**
   * <p>The kind of extension.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The name of the extension.</p>
   *          <p>If you specified a <code>TypeNameAlias</code> when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">activate this extension</a> in your account and region, CloudFormation considers
   *          that alias as the type name.</p>
   */
  TypeName?: string;

  /**
   * <p>The ID of the default version of the extension. The default version is used when the
   *          extension version is not specified.</p>
   *          <p>This applies only to private extensions you have registered in your account. For public
   *          extensions, both those provided by Amazon and published by third parties, CloudFormation
   *          returns <code>null</code>. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   *          <p>To set the default version of an extension, use <code>
   *                <a>SetTypeDefaultVersion</a>
   *             </code>. </p>
   */
  DefaultVersionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the extension.</p>
   */
  TypeArn?: string;

  /**
   * <p>When the specified extension version was registered. This applies only to:</p>
   *          <ul>
   *             <li>
   *                <p>Private extensions you have registered in your account. For more information, see
   *                   <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   *             </li>
   *             <li>
   *                <p>Public extensions you have activated in your account with auto-update specified.
   *                For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">ActivateType</a>.</p>
   *             </li>
   *          </ul>
   *          <p>For all other extension types, CloudFormation returns <code>null</code>.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The description of the extension.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the extension publisher, if the extension is published by a third party.
   *          Extensions published by Amazon do not return a publisher ID.</p>
   */
  PublisherId?: string;

  /**
   * <p>For public extensions that have been activated for this account and region, the type
   *          name of the public extension.</p>
   *          <p>If you specified a <code>TypeNameAlias</code> when enabling the extension in this
   *          account and region, CloudFormation treats that alias as the extension's type name within
   *          the account and region, not the type name of the public extension. For more information,
   *          see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-alias">Specifying aliases to refer to extensions</a> in the
   *             <i>CloudFormation User Guide</i>.</p>
   */
  OriginalTypeName?: string;

  /**
   * <p>For public extensions that have been activated for this account and region, the version
   *          of the public extension to be used for CloudFormation operations in this account and
   *          region.</p>
   *          <p>How you specified <code>AutoUpdate</code> when enabling the extension affects whether
   *          CloudFormation automatically updates the extention in this account and region when a new
   *          version is released. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-auto">Setting CloudFormation to automatically use new versions of
   *             extensions</a> in the <i>CloudFormation User Guide</i>.</p>
   */
  PublicVersionNumber?: string;

  /**
   * <p>For public extensions that have been activated for this account and region, the latest
   *          version of the public extension <i>that is available</i>. For any extensions
   *          other than activated third-arty extensions, CloudFormation returns
   *          <code>null</code>.</p>
   *          <p>How you specified <code>AutoUpdate</code> when enabling the extension affects whether
   *          CloudFormation automatically updates the extention in this account and region when a new
   *          version is released. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-auto">Setting CloudFormation to automatically use new versions of
   *             extensions</a> in the <i>CloudFormation User Guide</i>.</p>
   */
  LatestPublicVersion?: string;

  /**
   * <p>The service used to verify the publisher identity.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Registering your account to publish CloudFormation extensions</a> in the <i>
   *             CFN-CLI User Guide for Extension Development</i>.</p>
   */
  PublisherIdentity?: IdentityProvider | string;

  /**
   * <p>The publisher name, as defined in the public profile for that publisher in the service
   *          used to verify the publisher identity.</p>
   */
  PublisherName?: string;

  /**
   * <p>Whether or not the extension is activated for this account and region. </p>
   *          <p>This applies only to third-party public extensions. Extensions published by Amazon are
   *          activated by default.</p>
   */
  IsActivated?: boolean;
}

export namespace TypeSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TypeSummary): any => ({
    ...obj,
  });
}

export interface ListTypesOutput {
  /**
   * <p>A list of <code>TypeSummary</code> structures that contain information about the
   *          specified extensions.</p>
   */
  TypeSummaries?: TypeSummary[];

  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is
   *          set to a token. To retrieve the next set of results, call this action again and assign that
   *          token to the request object's <code>NextToken</code> parameter. If the request returns all
   *          results, <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace ListTypesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTypesOutput): any => ({
    ...obj,
  });
}

export interface ListTypeVersionsInput {
  /**
   * <p>The kind of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *             <code>Arn</code>.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The name of the extension for which you want version summary information.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *             <code>Arn</code>.</p>
   */
  TypeName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the extension for which you want version summary
   *          information.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *             <code>Arn</code>.</p>
   */
  Arn?: string;

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
   *          next set of results, call this action again and assign that token to the request object's
   *             <code>NextToken</code> parameter. If there are no remaining results, the previous
   *          response object's <code>NextToken</code> parameter is set to <code>null</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The deprecation status of the extension versions that you want to get summary
   *          information about.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LIVE</code>: The extension version is registered and can be used in CloudFormation operations, dependent on its provisioning behavior and visibility
   *                scope.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEPRECATED</code>: The extension version has been deregistered and can no
   *                longer be used in CloudFormation operations. </p>
   *             </li>
   *          </ul>
   *          <p>The default is <code>LIVE</code>.</p>
   */
  DeprecatedStatus?: DeprecatedStatus | string;

  /**
   * <p>The publisher ID of the extension publisher.</p>
   *          <p>Extensions published by Amazon are not assigned a publisher ID.</p>
   */
  PublisherId?: string;
}

export namespace ListTypeVersionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTypeVersionsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about a specific version of a CloudFormation
 *          extension.</p>
 */
export interface TypeVersionSummary {
  /**
   * <p>The kind of extension.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The name of the extension.</p>
   */
  TypeName?: string;

  /**
   * <p>The ID of a specific version of the extension. The version ID is the value at the end of
   *          the Amazon Resource Name (ARN) assigned to the extension version when it is
   *          registered.</p>
   */
  VersionId?: string;

  /**
   * <p>Whether the specified extension version is set as the default version.</p>
   *          <p>This applies only to private extensions you have registered in your account, and
   *          extensions published by Amazon. For public third-party extensions, whether or not they are
   *          activated in your account, CloudFormation returns <code>null</code>.</p>
   */
  IsDefaultVersion?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the extension version.</p>
   */
  Arn?: string;

  /**
   * <p>When the version was registered.</p>
   */
  TimeCreated?: Date;

  /**
   * <p>The description of the extension version.</p>
   */
  Description?: string;

  /**
   * <p>For public extensions that have been activated for this account and region, the version
   *          of the public extension to be used for CloudFormation operations in this account and
   *          region. For any extensions other than activated third-arty extensions, CloudFormation
   *          returns <code>null</code>.</p>
   *          <p>How you specified <code>AutoUpdate</code> when enabling the extension affects whether
   *          CloudFormation automatically updates the extention in this account and region when a new
   *          version is released. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-auto">Setting CloudFormation to automatically use new versions of
   *             extensions</a> in the <i>CloudFormation User Guide</i>.</p>
   */
  PublicVersionNumber?: string;
}

export namespace TypeVersionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TypeVersionSummary): any => ({
    ...obj,
  });
}

export interface ListTypeVersionsOutput {
  /**
   * <p>A list of <code>TypeVersionSummary</code> structures that contain information about the
   *          specified extension's versions.</p>
   */
  TypeVersionSummaries?: TypeVersionSummary[];

  /**
   * <p>If the request doesn't return all of the remaining results, <code>NextToken</code> is
   *          set to a token. To retrieve the next set of results, call this action again and assign that
   *          token to the request object's <code>NextToken</code> parameter. If the request returns all
   *          results, <code>NextToken</code> is set to <code>null</code>.</p>
   */
  NextToken?: string;
}

export namespace ListTypeVersionsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTypeVersionsOutput): any => ({
    ...obj,
  });
}

export interface PublishTypeInput {
  /**
   * <p>The type of the extension.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and
   *             <code>Type</code>.</p>
   */
  Type?: ThirdPartyType | string;

  /**
   * <p>The Amazon Resource Number (ARN) of the extension.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and
   *             <code>Type</code>.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and
   *             <code>Type</code>.</p>
   */
  TypeName?: string;

  /**
   * <p>The version number to assign to this version of the extension.</p>
   *          <p>Use the following format, and adhere to semantic versioning when assigning a version
   *          number to your extension: </p>
   *          <p>
   *             <code>MAJOR.MINOR.PATCH</code>
   *          </p>
   *          <p>For more information, see <a href="https://semver.org/">Semantic Versioning
   *             2.0.0</a>.</p>
   *          <p>If you do not specify a version number, CloudFormation increments the version number by
   *          one minor version release.</p>
   *          <p>The first time you publish a type, CloudFormation sets the version number to <code>1.0.0</code>,
   *          regardless of the value you specify.</p>
   */
  PublicVersionNumber?: string;
}

export namespace PublishTypeInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublishTypeInput): any => ({
    ...obj,
  });
}

export interface PublishTypeOutput {
  /**
   * <p>The Amazon Resource Number (ARN) assigned to the public extension upon
   *          publication.</p>
   */
  PublicTypeArn?: string;
}

export namespace PublishTypeOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublishTypeOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Error reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. CloudFormation does not return this error to
 *          users.</p>
 */
export interface InvalidStateTransitionException extends __SmithyException, $MetadataBearer {
  name: "InvalidStateTransitionException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidStateTransitionException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidStateTransitionException): any => ({
    ...obj,
  });
}

/**
 * <p>Error reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. CloudFormation does not return this error to
 *          users.</p>
 */
export interface OperationStatusCheckFailedException extends __SmithyException, $MetadataBearer {
  name: "OperationStatusCheckFailedException";
  $fault: "client";
  Message?: string;
}

export namespace OperationStatusCheckFailedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OperationStatusCheckFailedException): any => ({
    ...obj,
  });
}

export enum OperationStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
}

export enum HandlerErrorCode {
  AccessDenied = "AccessDenied",
  AlreadyExists = "AlreadyExists",
  GeneralServiceException = "GeneralServiceException",
  InternalFailure = "InternalFailure",
  InvalidCredentials = "InvalidCredentials",
  InvalidRequest = "InvalidRequest",
  InvalidTypeConfiguration = "InvalidTypeConfiguration",
  NetworkFailure = "NetworkFailure",
  NotFound = "NotFound",
  NotUpdatable = "NotUpdatable",
  ResourceConflict = "ResourceConflict",
  ServiceInternalError = "ServiceInternalError",
  ServiceLimitExceeded = "ServiceLimitExceeded",
  ServiceTimeout = "NotStabilized",
  Throttling = "Throttling",
}

export interface RecordHandlerProgressInput {
  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.</p>
   */
  BearerToken: string | undefined;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.</p>
   */
  OperationStatus: OperationStatus | string | undefined;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.</p>
   */
  CurrentOperationStatus?: OperationStatus | string;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.</p>
   */
  ErrorCode?: HandlerErrorCode | string;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.</p>
   */
  ResourceModel?: string;

  /**
   * <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.</p>
   */
  ClientRequestToken?: string;
}

export namespace RecordHandlerProgressInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecordHandlerProgressInput): any => ({
    ...obj,
  });
}

export interface RecordHandlerProgressOutput {}

export namespace RecordHandlerProgressOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecordHandlerProgressOutput): any => ({
    ...obj,
  });
}

export interface RegisterPublisherInput {
  /**
   * <p>Whether you accept the <a href="https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf">Terms and Conditions</a> for publishing extensions in the CloudFormation registry.
   *          You must accept the terms and conditions in order to register to publish public extensions
   *          to the CloudFormation registry.</p>
   *          <p>The default is <code>false</code>.</p>
   */
  AcceptTermsAndConditions?: boolean;

  /**
   * <p>If you are using a Bitbucket or GitHub account for identity verification, the Amazon
   *          Resource Name (ARN) for your connection to that account.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Registering your account to publish CloudFormation
   *             extensions</a> in the <i>CloudFormation CLI User Guide</i>.</p>
   */
  ConnectionArn?: string;
}

export namespace RegisterPublisherInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterPublisherInput): any => ({
    ...obj,
  });
}

export interface RegisterPublisherOutput {
  /**
   * <p>The ID assigned this account by CloudFormation for publishing extensions.</p>
   */
  PublisherId?: string;
}

export namespace RegisterPublisherOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterPublisherOutput): any => ({
    ...obj,
  });
}

export interface RegisterTypeInput {
  /**
   * <p>The kind of extension.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The name of the extension being registered.</p>
   *          <p>We recommend that extension names adhere to the following patterns: </p>
   *          <ul>
   *             <li>
   *                <p>For resource types,
   *                   <i>company_or_organization</i>::<i>service</i>::<i>type</i>.</p>
   *             </li>
   *             <li>
   *                <p>For modules,
   *                   <i>company_or_organization</i>::<i>service</i>::<i>type</i>::MODULE.</p>
   *             </li>
   *          </ul>
   *
   *          <note>
   *             <p>The following organization namespaces are reserved and cannot be used in your
   *             extension names:</p>
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
   * <p>A url to the S3 bucket containing the extension project package that contains the
   *          neccessary files for the extension you want to register.</p>
   *          <p>For information on generating a schema handler package for the extension you want to
   *          register, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-cli-submit.html">submit</a>
   *          in the <i>CloudFormation CLI User Guide</i>.</p>
   *          <note>
   *             <p>The user registering the extension must be able to access the package in the S3
   *             bucket. That is, the user needs to have <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a> permissions for the
   *             schema handler package. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html">Actions, Resources, and Condition Keys
   *                for Amazon S3</a> in the <i>Identity and Access Management User
   *             Guide</i>.</p>
   *          </note>
   */
  SchemaHandlerPackage: string | undefined;

  /**
   * <p>Specifies logging configuration information for an extension.</p>
   */
  LoggingConfig?: LoggingConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role for CloudFormation to assume
   *          when invoking the extension.</p>
   *          <p>For CloudFormation to assume the specified execution role, the role must contain a trust
   *          relationship with the CloudFormation service principle
   *             (<code>resources.cloudformation.amazonaws.com</code>). For more information on adding
   *          trust relationships, see <a href="IAM/latest/UserGuide/roles-managingrole-editing-console.html#roles-managingrole_edit-trust-policy">Modifying a role trust policy</a> in the <i>Identity and Access Management User
   *             Guide</i>.</p>
   *          <p>If your extension calls Amazon Web Services APIs in any of its handlers, you must create
   *          an <i>
   *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM
   *                execution role</a>
   *             </i> that includes the necessary permissions to call
   *          those Amazon Web Services APIs, and provision that execution role in your account. When
   *          CloudFormation needs to invoke the resource type handler, CloudFormation assumes this
   *          execution role to create a temporary session token, which it then passes to the resource
   *          type handler, thereby supplying your resource type with the appropriate credentials.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>A unique identifier that acts as an idempotency key for this registration request.
   *          Specifying a client request token prevents CloudFormation from generating more
   *          than one version of an extension from the same registeration request, even if the request
   *          is submitted multiple times. </p>
   */
  ClientRequestToken?: string;
}

export namespace RegisterTypeInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterTypeInput): any => ({
    ...obj,
  });
}

export interface RegisterTypeOutput {
  /**
   * <p>The identifier for this registration request.</p>
   *          <p>Use this registration token when calling <code>
   *                <a>DescribeTypeRegistration</a>
   *             </code>, which returns information about the status and IDs of the extension
   *          registration. </p>
   */
  RegistrationToken?: string;
}

export namespace RegisterTypeOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterTypeOutput): any => ({
    ...obj,
  });
}

export interface RollbackStackInput {
  /**
   * <p>The name that is associated with the stack.</p>
   */
  StackName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management role that CloudFormation assumes to rollback the stack.</p>
   */
  RoleARN?: string;

  /**
   * <p>A unique identifier for this <code>RollbackStack</code> request.</p>
   */
  ClientRequestToken?: string;
}

export namespace RollbackStackInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RollbackStackInput): any => ({
    ...obj,
  });
}

export interface RollbackStackOutput {
  /**
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;
}

export namespace RollbackStackOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RollbackStackOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The input for the <a>SetStackPolicy</a> action.</p>
 */
export interface SetStackPolicyInput {
  /**
   * <p>The name or unique stack ID that you want to associate a policy with.</p>
   */
  StackName: string | undefined;

  /**
   * <p>Structure containing the stack policy body. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html"> Prevent Updates
   *             to Stack Resources</a> in the CloudFormation User Guide. You can specify either
   *          the <code>StackPolicyBody</code> or the <code>StackPolicyURL</code> parameter, but not
   *          both.</p>
   */
  StackPolicyBody?: string;

  /**
   * <p>Location of a file containing the stack policy. The URL must point to a policy
   *          (maximum size: 16 KB) located in an S3 bucket in the same
   *          Region as the stack. You can specify either the <code>StackPolicyBody</code> or the
   *             <code>StackPolicyURL</code> parameter, but not both.</p>
   */
  StackPolicyURL?: string;
}

export namespace SetStackPolicyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetStackPolicyInput): any => ({
    ...obj,
  });
}

export interface SetTypeConfigurationInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the extension, in this account and region.</p>
   *          <p>For public extensions, this will be the ARN assigned when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html">activate the type</a> in this account and region. For private extensions, this will
   *          be the ARN assigned when you <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html">register the type</a> in this account and region. </p>
   *          <p>Do not include the extension versions suffix at the end of the ARN. You can set the
   *          configuration for an extension, but not for a specific extension version.</p>
   */
  TypeArn?: string;

  /**
   * <p>The configuration data for the extension, in this account and region. </p>
   *          <p>The configuration data must be formatted as JSON, and validate against the schema
   *          returned in the <code>ConfigurationSchema</code> response element of <a href="AWSCloudFormation/latest/APIReference/API_DescribeType.html">API_DescribeType</a>. For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-model.html#resource-type-howto-configuration">Defining account-level configuration data for an extension</a> in the
   *             <i>CloudFormation CLI User Guide</i>.</p>
   */
  Configuration: string | undefined;

  /**
   * <p>An alias by which to refer to this extension configuration data.</p>
   *          <p>Conditional: Specifying a configuration alias is required when setting a configuration
   *          for a resource type extension.</p>
   */
  ConfigurationAlias?: string;

  /**
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify <code>ConfigurationArn</code>, or <code>Type</code> and
   *             <code>TypeName</code>.</p>
   */
  TypeName?: string;

  /**
   * <p>The type of extension.</p>
   *          <p>Conditional: You must specify <code>ConfigurationArn</code>, or <code>Type</code> and
   *             <code>TypeName</code>.</p>
   */
  Type?: ThirdPartyType | string;
}

export namespace SetTypeConfigurationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetTypeConfigurationInput): any => ({
    ...obj,
  });
}

export interface SetTypeConfigurationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) for the configuration data, in this account and
   *          region.</p>
   *          <p>Conditional: You must specify <code>ConfigurationArn</code>, or <code>Type</code> and
   *             <code>TypeName</code>.</p>
   */
  ConfigurationArn?: string;
}

export namespace SetTypeConfigurationOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetTypeConfigurationOutput): any => ({
    ...obj,
  });
}

export interface SetTypeDefaultVersionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the extension for which you want version summary
   *          information.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *             <code>Arn</code>.</p>
   */
  Arn?: string;

  /**
   * <p>The kind of extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *             <code>Arn</code>.</p>
   */
  Type?: RegistryType | string;

  /**
   * <p>The name of the extension.</p>
   *          <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or
   *             <code>Arn</code>.</p>
   */
  TypeName?: string;

  /**
   * <p>The ID of a specific version of the extension. The version ID is the value at the end of
   *          the Amazon Resource Name (ARN) assigned to the extension version when it is
   *          registered.</p>
   */
  VersionId?: string;
}

export namespace SetTypeDefaultVersionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetTypeDefaultVersionInput): any => ({
    ...obj,
  });
}

export interface SetTypeDefaultVersionOutput {}

export namespace SetTypeDefaultVersionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SetTypeDefaultVersionOutput): any => ({
    ...obj,
  });
}

export enum ResourceSignalStatus {
  FAILURE = "FAILURE",
  SUCCESS = "SUCCESS",
}

/**
 * <p>The input for the <a>SignalResource</a> action.</p>
 */
export interface SignalResourceInput {
  /**
   * <p>The stack name or unique stack ID that includes the resource that you want to
   *          signal.</p>
   */
  StackName: string | undefined;

  /**
   * <p>The logical ID of the resource that you want to signal. The logical ID is the name of
   *          the resource that given in the template.</p>
   */
  LogicalResourceId: string | undefined;

  /**
   * <p>A unique ID of the signal. When you signal Amazon EC2 instances or Auto Scaling
   *          groups, specify the instance ID that you are signaling as the unique ID. If you send
   *          multiple signals to a single resource (such as signaling a wait condition), each signal
   *          requires a different unique ID.</p>
   */
  UniqueId: string | undefined;

  /**
   * <p>The status of the signal, which is either success or failure. A failure signal causes
   *          CloudFormation to immediately fail the stack creation or update.</p>
   */
  Status: ResourceSignalStatus | string | undefined;
}

export namespace SignalResourceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SignalResourceInput): any => ({
    ...obj,
  });
}

export interface StopStackSetOperationInput {
  /**
   * <p>The name or unique ID of the stack set that you want to stop the operation
   *          for.</p>
   */
  StackSetName: string | undefined;

  /**
   * <p>The ID of the stack operation. </p>
   */
  OperationId: string | undefined;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account
   *          administrator in the organization's management account or as a delegated administrator in a
   *          member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *          self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *                   <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in
   *                the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

export namespace StopStackSetOperationInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopStackSetOperationInput): any => ({
    ...obj,
  });
}

export interface StopStackSetOperationOutput {}

export namespace StopStackSetOperationOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopStackSetOperationOutput): any => ({
    ...obj,
  });
}

export interface TestTypeInput {
  /**
   * <p>The Amazon Resource Number (ARN) of the extension.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and
   *             <code>Type</code>.</p>
   */
  Arn?: string;

  /**
   * <p>The type of the extension to test.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and
   *             <code>Type</code>.</p>
   */
  Type?: ThirdPartyType | string;

  /**
   * <p>The name of the extension to test.</p>
   *          <p>Conditional: You must specify <code>Arn</code>, or <code>TypeName</code> and
   *             <code>Type</code>.</p>
   */
  TypeName?: string;

  /**
   * <p>The version of the extension to test.</p>
   *          <p>You can specify the version id with either <code>Arn</code>, or with
   *             <code>TypeName</code> and <code>Type</code>.</p>
   *          <p>If you do not specify a version, CloudFormation uses the default version of the
   *          extension in this account and region for testing.</p>
   */
  VersionId?: string;

  /**
   * <p>The S3 bucket to which CloudFormation delivers the contract test execution logs.</p>
   *          <p>CloudFormation delivers the logs by the time contract testing has completed and the
   *          extension has been assigned a test type status of <code>PASSED</code> or
   *             <code>FAILED</code>.</p>
   *          <p>The user calling <code>TestType</code> must be able to access items in the specified S3
   *          bucket. Specifically, the user needs the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>GetObject</p>
   *             </li>
   *             <li>
   *                <p>PutObject</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html">Actions, Resources, and
   *             Condition Keys for Amazon S3</a> in the <i>Amazon Web Services Identity and
   *             Access Management User Guide</i>.</p>
   */
  LogDeliveryBucket?: string;
}

export namespace TestTypeInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestTypeInput): any => ({
    ...obj,
  });
}

export interface TestTypeOutput {
  /**
   * <p>The Amazon Resource Number (ARN) of the extension.</p>
   */
  TypeVersionArn?: string;
}

export namespace TestTypeOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestTypeOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The input for an <a>UpdateStack</a> action.</p>
 */
export interface UpdateStackInput {
  /**
   * <p>The name or unique stack ID of the stack to update.</p>
   */
  StackName: string | undefined;

  /**
   * <p>Structure containing the template body with a minimum length of 1 byte and a maximum
   *          length of 51,200 bytes. (For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the CloudFormation User Guide.)</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *             <code>TemplateBody</code>, <code>TemplateURL</code>, or set the
   *             <code>UsePreviousTemplate</code> to <code>true</code>.</p>
   */
  TemplateBody?: string;

  /**
   * <p>Location of file containing the template body. The URL must point to a template that
   *          is located in an Amazon S3 bucket or a Systems Manager document. For more information, go to
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the CloudFormation User Guide.</p>
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
   *          point to a policy (max size: 16KB) located in an S3 bucket in
   *          the same Region as the stack. You can specify either the
   *             <code>StackPolicyDuringUpdateBody</code> or the <code>StackPolicyDuringUpdateURL</code>
   *          parameter, but not both.</p>
   *          <p>If you want to update protected resources, specify a temporary overriding stack
   *          policy during this update. If you do not specify a stack policy, the current policy that is
   *          associated with the stack will be used.</p>
   */
  StackPolicyDuringUpdateURL?: string;

  /**
   * <p>A list of <code>Parameter</code> structures that specify input parameters for the
   *          stack. For more information, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html">Parameter</a> data
   *          type.</p>
   */
  Parameters?: Parameter[];

  /**
   * <p>In some cases, you must explicitly acknowledge that your stack template contains certain
   *          capabilities in order for CloudFormation to update the stack.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in
   *                your Amazon Web Services account; for example, by creating new Identity and Access Management
   *                (IAM) users. For those stacks, you must explicitly acknowledge this by specifying one
   *                of these capabilities.</p>
   *                <p>The following IAM resources require you to specify either the
   *                   <code>CAPABILITY_IAM</code> or <code>CAPABILITY_NAMED_IAM</code>
   *                capability.</p>
   *                <ul>
   *                   <li>
   *                      <p>If you have IAM resources, you can specify either capability.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you have IAM resources with custom names, you <i>must</i>
   *                      specify <code>CAPABILITY_NAMED_IAM</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
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
   *                   Resources in CloudFormation Templates</a>.</p>
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
   *                this capability. This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a> transforms, which are macros hosted by CloudFormation.</p>
   *                <p>If you want to update a stack from a stack template that contains macros
   *                   <i>and</i> nested stacks, you must update the stack directly from
   *                the template using this capability.</p>
   *                <important>
   *                   <p>You should only update stacks directly from a stack template that contains
   *                   macros if you know what processing the macro performs.</p>
   *                   <p>Each macro relies on an underlying Lambda service function for processing stack
   *                   templates. Be aware that the Lambda function owner can update the function
   *                   operation without CloudFormation being notified.</p>
   *                </important>
   *                <p>For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using
   *                      CloudFormation Macros to Perform Custom Processing on
   *                Templates</a>.</p>
   *             </li>
   *          </ul>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>The template resource types that you have permissions to work with for this update
   *          stack action, such as <code>AWS::EC2::Instance</code>, <code>AWS::EC2::*</code>, or
   *             <code>Custom::MyCustomInstance</code>.</p>
   *          <p>If the list of resource types doesn't include a resource that you're updating, the
   *          stack update fails. By default, CloudFormation grants permissions to all resource
   *          types. Identity and Access Management (IAM) uses this parameter for CloudFormation-specific condition keys in IAM policies. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html">Controlling Access with Identity and Access Management</a>.</p>
   */
  ResourceTypes?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role
   *          that CloudFormation assumes to update the stack. CloudFormation uses the role's
   *          credentials to make calls on your behalf. CloudFormation always uses this role for all
   *          future operations on the stack. As long as users have permission to operate on the stack,
   *          CloudFormation uses this role even if the users don't have permission to pass it.
   *          Ensure that the role grants least privilege.</p>
   *          <p>If you don't specify a value, CloudFormation uses the role that was previously
   *          associated with the stack. If no role is available, CloudFormation uses a temporary
   *          session that is generated from your user credentials.</p>
   */
  RoleARN?: string;

  /**
   * <p>The rollback triggers for CloudFormation to monitor during stack creation and
   *          updating operations, and for the specified monitoring period afterwards.</p>
   */
  RollbackConfiguration?: RollbackConfiguration;

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
   * <p>Location of a file containing the updated stack policy. The URL must point to a
   *          policy (max size: 16KB) located in an S3 bucket in the same
   *          Region as the stack. You can specify either the <code>StackPolicyBody</code> or the
   *             <code>StackPolicyURL</code> parameter, but not both.</p>
   *          <p>You might update the stack policy, for example, in order to protect a new resource
   *          that you created during a stack update. If you do not specify a stack policy, the current
   *          policy that is associated with the stack is unchanged.</p>
   */
  StackPolicyURL?: string;

  /**
   * <p>Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that
   *          CloudFormation associates with the stack. Specify an empty list to remove all notification
   *          topics.</p>
   */
  NotificationARNs?: string[];

  /**
   * <p>Key-value pairs to associate with this stack. CloudFormation also propagates
   *          these tags to supported resources in the stack. You can specify a maximum number of 50
   *          tags.</p>
   *          <p>If you don't specify this parameter, CloudFormation doesn't modify the stack's
   *          tags. If you specify an empty value, CloudFormation removes all associated
   *          tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Preserve the state of previously provisioned resources when an operation fails.</p>
   *          <p>Default: <code>False</code>
   *          </p>
   */
  DisableRollback?: boolean;

  /**
   * <p>A unique identifier for this <code>UpdateStack</code> request. Specify this token if
   *          you plan to retry requests so that CloudFormation knows that you're not attempting to
   *          update a stack with the same name. You might retry <code>UpdateStack</code> requests to
   *          ensure that CloudFormation successfully received them.</p>
   *          <p>All events triggered by a given stack operation are assigned the same client request
   *          token, which you can use to track operations. For example, if you execute a
   *          <code>CreateStack</code> operation with the token <code>token1</code>, then all the
   *          <code>StackEvents</code> generated by that operation will have
   *          <code>ClientRequestToken</code> set as <code>token1</code>.</p>
   *          <p>In the console, stack operations display the client request token on the Events tab.
   *          Stack operations that are initiated from the console use the token format
   *             <i>Console-StackOperation-ID</i>, which helps you easily identify the
   *          stack operation . For example, if you create a stack using the console, each stack event
   *          would be assigned the same token in the following format:
   *             <code>Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002</code>.</p>
   */
  ClientRequestToken?: string;
}

export namespace UpdateStackInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStackInput): any => ({
    ...obj,
  });
}

/**
 * <p>The output for an <a>UpdateStack</a> action.</p>
 */
export interface UpdateStackOutput {
  /**
   * <p>Unique identifier of the stack.</p>
   */
  StackId?: string;
}

export namespace UpdateStackOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStackOutput): any => ({
    ...obj,
  });
}

export interface UpdateStackInstancesInput {
  /**
   * <p>The name or unique ID of the stack set associated with the stack instances.</p>
   */
  StackSetName: string | undefined;

  /**
   * <p>[Self-managed permissions] The names of one or more Amazon Web Services accounts for which you want to update parameter values
   *          for stack instances. The overridden parameter values will be applied to all stack instances
   *          in the specified accounts and Regions.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not both.</p>
   */
  Accounts?: string[];

  /**
   * <p>[Service-managed permissions] The Organizations accounts for which you want to
   *          update parameter values for stack instances. If your update targets OUs, the overridden
   *          parameter values only apply to the accounts that are currently in the target OUs and their
   *          child OUs. Accounts added to the target OUs and their child OUs in the future won't use the
   *          overridden values.</p>
   *          <p>You can specify <code>Accounts</code> or <code>DeploymentTargets</code>, but not
   *          both.</p>
   */
  DeploymentTargets?: DeploymentTargets;

  /**
   * <p>The names of one or more Regions in which you want to update parameter values for
   *          stack instances. The overridden parameter values will be applied to all stack instances in
   *          the specified accounts and Regions.</p>
   */
  Regions: string[] | undefined;

  /**
   * <p> A list of input parameters whose values you want to update for the specified stack
   *          instances. </p>
   *          <p>Any overridden parameter values will be applied to all stack instances in the
   *          specified accounts and Regions. When specifying parameters and their values, be aware of
   *          how CloudFormation sets parameter values during stack instance update
   *          operations:</p>
   *          <ul>
   *             <li>
   *                <p>To override the current value for a parameter, include the parameter and
   *                specify its value.</p>
   *             </li>
   *             <li>
   *                <p>To leave an overridden parameter set to its present value, include the parameter and specify <code>UsePreviousValue</code> as
   *                <code>true</code>. (You cannot specify both a value and set
   *                <code>UsePreviousValue</code> to <code>true</code>.)</p>
   *             </li>
   *             <li>
   *                <p>To set an overridden parameter back to the value specified in the stack set,
   *                specify a parameter list but do not include the parameter in the list.</p>
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
   * <p>Preferences for how CloudFormation performs this stack set operation.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * <p>The unique identifier for this stack set operation. </p>
   *          <p>The operation ID also functions as an idempotency token, to ensure that
   *          CloudFormation performs the stack set operation only once, even if you retry the request
   *          multiple times. You might retry stack set operation requests to ensure that
   *          CloudFormation successfully received them.</p>
   *          <p>If you don't specify an operation ID, the SDK generates one automatically.
   *       </p>
   */
  OperationId?: string;

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account
   *          administrator in the organization's management account or as a delegated administrator in a
   *          member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *          self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *                   <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in
   *                the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

export namespace UpdateStackInstancesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStackInstancesInput): any => ({
    ...obj,
  });
}

export interface UpdateStackInstancesOutput {
  /**
   * <p>The unique identifier for this stack set operation. </p>
   */
  OperationId?: string;
}

export namespace UpdateStackInstancesOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStackInstancesOutput): any => ({
    ...obj,
  });
}

export interface UpdateStackSetInput {
  /**
   * <p>The name or unique ID of the stack set that you want to update.</p>
   */
  StackSetName: string | undefined;

  /**
   * <p>A brief description of updates that you are making.</p>
   */
  Description?: string;

  /**
   * <p>The structure that contains the template body, with a minimum length of 1 byte and a
   *          maximum length of 51,200 bytes. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the CloudFormation User Guide.</p>
   *          <p>Conditional: You must specify only one of the following parameters:
   *             <code>TemplateBody</code> or <code>TemplateURL</code>—or set
   *             <code>UsePreviousTemplate</code> to true.</p>
   */
  TemplateBody?: string;

  /**
   * <p>The location of the file that contains the template body. The URL must point to a
   *          template (maximum size: 460,800 bytes) that is located in an Amazon S3 bucket or a Systems
   *          Manager document. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the CloudFormation User Guide.</p>
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

  /**
   * <p>A list of input parameters for the stack set template. </p>
   */
  Parameters?: Parameter[];

  /**
   * <p>In some cases, you must explicitly acknowledge that your stack template contains certain
   *          capabilities in order for CloudFormation to update the stack set and its associated stack
   *          instances.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_IAM</code> and <code>CAPABILITY_NAMED_IAM</code>
   *                </p>
   *                <p>Some stack templates might include resources that can affect permissions in
   *                your Amazon Web Services account; for example, by creating new Identity and Access Management
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
   *                      <p>If you don't specify either of these capabilities, CloudFormation returns an
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
   *                   Resources in CloudFormation Templates</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CAPABILITY_AUTO_EXPAND</code>
   *                </p>
   *                <p>Some templates reference macros. If your stack set template references one or more
   *                macros, you must update the stack set directly from the processed template, without
   *                first reviewing the resulting changes in a change set. To update the stack set
   *                directly, you must acknowledge this capability. For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html">Using CloudFormation Macros to
   *                   Perform Custom Processing on Templates</a>.</p>
   *                <important>
   *                   <p>Stack sets with service-managed permissions do not currently support the use of
   *                   macros in templates. (This includes the <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/create-reusable-transform-function-snippets-and-add-to-your-template-with-aws-include-transform.html">AWS::Include</a> and <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html">AWS::Serverless</a>
   *                   transforms, which are macros hosted by CloudFormation.) Even if you specify this capability
   *                   for a stack set with service-managed permissions, if you reference a macro in your
   *                   template the stack set operation will fail.</p>
   *                </important>
   *             </li>
   *          </ul>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>The key-value pairs to associate with this stack set and the stacks created from it.
   *          CloudFormation also propagates these tags to supported resources that are created in
   *          the stacks. You can specify a maximum number of 50 tags.</p>
   *          <p>If you specify tags for this parameter, those tags replace any list of tags that are
   *          currently associated with this stack set. This means:</p>
   *          <ul>
   *             <li>
   *                <p>If you don't specify this parameter, CloudFormation doesn't modify the
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
   *                <p>If you specify an empty value, CloudFormation removes all currently
   *                associated tags.</p>
   *             </li>
   *          </ul>
   *          <p>If you specify new tags as part of an <code>UpdateStackSet</code> action,
   *          CloudFormation checks to see if you have the required IAM permission to tag resources. If
   *          you omit tags that are currently associated with the stack set from the list of tags you
   *          specify, CloudFormation assumes that you want to remove those tags from the stack set,
   *          and checks to see if you have permission to untag resources. If you don't have the
   *          necessary permission(s), the entire <code>UpdateStackSet</code> action fails with an
   *             <code>access denied</code> error, and the stack set is not updated.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Preferences for how CloudFormation performs this stack set operation.</p>
   */
  OperationPreferences?: StackSetOperationPreferences;

  /**
   * <p>The Amazon Resource Number (ARN) of the IAM role to use to update this stack set.</p>
   *          <p>Specify an IAM role only if you are using customized administrator roles to control
   *          which users or groups can manage specific stack sets within the same administrator account.
   *          For more information, see <a href="http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html">Granting
   *             Permissions for Stack Set Operations</a> in the
   *             <i>CloudFormation User Guide</i>.</p>
   *          <p>If you specified a customized administrator role when you created the stack set, you
   *          must specify a customized administrator role, even if it is the same customized
   *          administrator role used with this stack set previously.</p>
   */
  AdministrationRoleARN?: string;

  /**
   * <p>The name of the IAM execution role to use to update the stack set. If you do not specify
   *          an execution role, CloudFormation uses the <code>AWSCloudFormationStackSetExecutionRole</code> role
   *          for the stack set operation.</p>
   *          <p>Specify an IAM role only if you are using customized execution roles to control which
   *          stack resources users and groups can include in their stack sets. </p>
   *          <p> If you specify a customized execution role, CloudFormation uses that role to update the stack.
   *          If you do not specify a customized execution role, CloudFormation performs the update using the role
   *          previously associated with the stack set, so long as you have permissions to perform
   *          operations on the stack set.</p>
   */
  ExecutionRoleName?: string;

  /**
   * <p>[Service-managed permissions] The Organizations accounts in which to update
   *          associated stack instances.</p>
   *          <p>To update all the stack instances associated with this stack set, do not specify
   *             <code>DeploymentTargets</code> or <code>Regions</code>.</p>
   *          <p>If the stack set update includes changes to the template (that is, if
   *             <code>TemplateBody</code> or <code>TemplateURL</code> is specified), or the
   *             <code>Parameters</code>, CloudFormation marks all stack instances with a status
   *          of <code>OUTDATED</code> prior to updating the stack instances in the specified accounts
   *          and Regions. If the stack set update does not include changes to the template or
   *          parameters, CloudFormation updates the stack instances in the specified accounts
   *          and Regions, while leaving all other stack instances with their existing stack instance
   *          status.</p>
   */
  DeploymentTargets?: DeploymentTargets;

  /**
   * <p>Describes how the IAM roles required for stack set operations are created. You cannot
   *          modify <code>PermissionModel</code> if there are stack instances associated with your stack
   *          set.</p>
   *          <ul>
   *             <li>
   *                <p>With <code>self-managed</code> permissions, you must create the administrator and
   *                execution roles required to deploy to target accounts. For more information, see
   *                   <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html">Grant
   *                   Self-Managed Stack Set Permissions</a>.</p>
   *             </li>
   *             <li>
   *                <p>With <code>service-managed</code> permissions, StackSets automatically creates the
   *                IAM roles required to deploy to accounts managed by Organizations. For more
   *                information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-service-managed.html">Grant Service-Managed Stack Set Permissions</a>.</p>
   *             </li>
   *          </ul>
   */
  PermissionModel?: PermissionModels | string;

  /**
   * <p>[Service-managed permissions] Describes whether StackSets automatically deploys to
   *             Organizations accounts that are added to a target organization or organizational
   *          unit (OU).</p>
   *          <p>If you specify <code>AutoDeployment</code>, do not specify
   *             <code>DeploymentTargets</code> or <code>Regions</code>.</p>
   */
  AutoDeployment?: AutoDeployment;

  /**
   * <p>The unique ID for this stack set operation. </p>
   *          <p>The operation ID also functions as an idempotency token, to ensure that
   *          CloudFormation performs the stack set operation only once, even if you retry the request
   *          multiple times. You might retry stack set operation requests to ensure that
   *          CloudFormation successfully received them.</p>
   *          <p>If you don't specify an operation ID, CloudFormation generates one
   *          automatically.</p>
   *          <p>Repeating this stack set operation with a new operation ID retries all stack
   *          instances whose status is <code>OUTDATED</code>. </p>
   */
  OperationId?: string;

  /**
   * <p>[Self-managed permissions] The accounts in which to update associated stack instances.
   *          If you specify accounts, you must also specify the Regions in which to update stack set
   *          instances.</p>
   *          <p>To update <i>all</i> the stack instances associated with this stack set,
   *          do not specify the <code>Accounts</code> or <code>Regions</code> properties.</p>
   *          <p>If the stack set update includes changes to the template (that is, if the
   *             <code>TemplateBody</code> or <code>TemplateURL</code> properties are specified), or the
   *             <code>Parameters</code> property, CloudFormation marks all stack instances with a status of
   *             <code>OUTDATED</code> prior to updating the stack instances in the specified accounts
   *          and Regions. If the stack set update does not include changes to the template or
   *          parameters, CloudFormation updates the stack instances in the specified accounts and Regions, while
   *          leaving all other stack instances with their existing stack instance status. </p>
   */
  Accounts?: string[];

  /**
   * <p>The Regions in which to update associated stack instances. If you specify Regions, you
   *          must also specify accounts in which to update stack set instances.</p>
   *          <p>To update <i>all</i> the stack instances associated with this stack set,
   *          do not specify the <code>Accounts</code> or <code>Regions</code> properties.</p>
   *          <p>If the stack set update includes changes to the template (that is, if the
   *             <code>TemplateBody</code> or <code>TemplateURL</code> properties are specified), or the
   *             <code>Parameters</code> property, CloudFormation marks all stack instances with a status of
   *             <code>OUTDATED</code> prior to updating the stack instances in the specified accounts
   *          and Regions. If the stack set update does not include changes to the template or
   *          parameters, CloudFormation updates the stack instances in the specified accounts and Regions, while
   *          leaving all other stack instances with their existing stack instance status. </p>
   */
  Regions?: string[];

  /**
   * <p>[Service-managed permissions] Specifies whether you are acting as an account
   *          administrator in the organization's management account or as a delegated administrator in a
   *          member account.</p>
   *          <p>By default, <code>SELF</code> is specified. Use <code>SELF</code> for stack sets with
   *          self-managed permissions.</p>
   *          <ul>
   *             <li>
   *                <p>If you are signed in to the management account, specify <code>SELF</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are signed in to a delegated administrator account, specify
   *                   <code>DELEGATED_ADMIN</code>.</p>
   *                <p>Your Amazon Web Services account must be registered as a delegated administrator in
   *                the management account. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html">Register a delegated administrator</a> in the <i>CloudFormation User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  CallAs?: CallAs | string;
}

export namespace UpdateStackSetInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStackSetInput): any => ({
    ...obj,
  });
}

export interface UpdateStackSetOutput {
  /**
   * <p>The unique ID for this stack set operation.</p>
   */
  OperationId?: string;
}

export namespace UpdateStackSetOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateStackSetOutput): any => ({
    ...obj,
  });
}

export interface UpdateTerminationProtectionInput {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTerminationProtectionInput): any => ({
    ...obj,
  });
}

export interface UpdateTerminationProtectionOutput {
  /**
   * <p>The unique ID of the stack.</p>
   */
  StackId?: string;
}

export namespace UpdateTerminationProtectionOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTerminationProtectionOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The input for <a>ValidateTemplate</a> action.</p>
 */
export interface ValidateTemplateInput {
  /**
   * <p>Structure containing the template body with a minimum length of 1 byte and a maximum
   *          length of 51,200 bytes. For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the CloudFormation User Guide.</p>
   *          <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If
   *          both are passed, only <code>TemplateBody</code> is used.</p>
   */
  TemplateBody?: string;

  /**
   * <p>Location of file containing the template body. The URL must point to a template (max
   *          size: 460,800 bytes) that is located in an Amazon S3 bucket or a Systems Manager document.
   *          For more information, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html">Template Anatomy</a>
   *          in the CloudFormation User Guide.</p>
   *          <p>Conditional: You must pass <code>TemplateURL</code> or <code>TemplateBody</code>. If
   *          both are passed, only <code>TemplateBody</code> is used.</p>
   */
  TemplateURL?: string;
}

export namespace ValidateTemplateInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidateTemplateInput): any => ({
    ...obj,
  });
}

/**
 * <p>The TemplateParameter data type.</p>
 */
export interface TemplateParameter {
  /**
   * <p>The name associated with the parameter.</p>
   */
  ParameterKey?: string;

  /**
   * <p>The default value associated with the parameter.</p>
   */
  DefaultValue?: string;

  /**
   * <p>Flag indicating whether the parameter should be displayed as plain text in logs and
   *          UIs.</p>
   */
  NoEcho?: boolean;

  /**
   * <p>User defined description associated with the parameter.</p>
   */
  Description?: string;
}

export namespace TemplateParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TemplateParameter): any => ({
    ...obj,
  });
}

/**
 * <p>The output for <a>ValidateTemplate</a> action.</p>
 */
export interface ValidateTemplateOutput {
  /**
   * <p>A list of <code>TemplateParameter</code> structures.</p>
   */
  Parameters?: TemplateParameter[];

  /**
   * <p>The description found within the template.</p>
   */
  Description?: string;

  /**
   * <p>The capabilities found within the template. If your template contains IAM resources,
   *          you must specify the CAPABILITY_IAM or CAPABILITY_NAMED_IAM value for this parameter when
   *          you use the <a>CreateStack</a> or <a>UpdateStack</a> actions with
   *          your template; otherwise, those actions return an InsufficientCapabilities error.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#capabilities">Acknowledging IAM Resources in CloudFormation Templates</a>.</p>
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
}

export namespace ValidateTemplateOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidateTemplateOutput): any => ({
    ...obj,
  });
}
