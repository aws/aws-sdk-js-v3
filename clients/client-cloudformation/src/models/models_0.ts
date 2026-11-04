// smithy-typescript generated code
import type {
  AccountFilterType,
  AccountGateStatus,
  AfterValueFrom,
  AnnotationSeverityLevel,
  AnnotationStatus,
  AttributeChangeType,
  BeaconStackOperationStatus,
  BeforeValueFrom,
  CallAs,
  Capability,
  Category,
  ChangeAction,
  ChangeSetHooksStatus,
  ChangeSetStatus,
  ChangeSetType,
  ChangeSource,
  ChangeType,
  ConcurrencyMode,
  DeletionMode,
  DeploymentConfigMode,
  DeploymentMode,
  DeprecatedStatus,
  DetailedStatus,
  DifferenceType,
  DriftIgnoredReason,
  EvaluationType,
  EventType,
  ExecutionStatus,
  GeneratedTemplateDeletionPolicy,
  GeneratedTemplateResourceStatus,
  GeneratedTemplateStatus,
  GeneratedTemplateUpdateReplacePolicy,
  HandlerErrorCode,
  HookFailureMode,
  HookInvocationPoint,
  HookStatus,
  HookTargetAction,
  HookTargetType,
  IdentityProvider,
  ListHookResultsTargetType,
  OnFailure,
  OnStackFailure,
  OperationResultFilterName,
  OperationStatus,
  OperationType,
  OrganizationStatus,
  PermissionModels,
  PolicyAction,
  ProvisioningType,
  PublisherStatus,
  RegionConcurrencyType,
  RegistrationStatus,
  RegistryType,
  Replacement,
  RequiresRecreation,
  ResourceAttribute,
  ResourceScanStatus,
  ResourceSignalStatus,
  ResourceStatus,
  ScanType,
  StackDriftDetectionStatus,
  StackDriftStatus,
  StackInstanceDetailedStatus,
  StackInstanceFilterName,
  StackInstanceStatus,
  StackRefactorActionEntity,
  StackRefactorActionType,
  StackRefactorDetection,
  StackRefactorExecutionStatus,
  StackRefactorStatus,
  StackResourceDriftStatus,
  StackSetDriftDetectionStatus,
  StackSetDriftStatus,
  StackSetOperationAction,
  StackSetOperationResultStatus,
  StackSetOperationStatus,
  StackSetStatus,
  StackStatus,
  TemplateFormat,
  TemplateStage,
  ThirdPartyType,
  TypeTestsStatus,
  ValidationStatus,
  VersionBump,
  Visibility,
  WarningType,
} from "./enums";

/**
 * Structure that contains the results of the account gate function which CloudFormation invokes, if present, before proceeding with a StackSet operation in an account and Region.
 *
 * For each account and Region, CloudFormation lets you specify a Lambda function that encapsulates any requirements that must be met before CloudFormation can proceed with a StackSet operation in that account and Region. CloudFormation invokes the function each time a StackSet operation is requested for that account and Region; if the function returns `FAILED`, CloudFormation cancels the operation in that account and Region, and sets the StackSet operation result status for that account and Region to `FAILED`.
 *
 * For more information, see [Prevent failed StackSets deployments using target account gates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-account-gating.html) in the *CloudFormation User Guide*.
 *
 * @public
 */
export interface AccountGateResult {
  /**
   * The status of the account gate function.
   *
   * - `SUCCEEDED`: The account gate function has determined that the account and Region passes any requirements for a StackSet operation to occur. CloudFormation proceeds with the stack operation in that account and Region.
   * - `FAILED`: The account gate function has determined that the account and Region doesn't meet the requirements for a StackSet operation to occur. CloudFormation cancels the StackSet operation in that account and Region, and sets the StackSet operation result status for that account and Region to `FAILED`.
   * - `SKIPPED`: CloudFormation has skipped calling the account gate function for this account and Region, for one of the following reasons:
   *
   *   - An account gate function hasn't been specified for the account and Region. CloudFormation proceeds with the StackSet operation in this account and Region.
   *   - The `AWSCloudFormationStackSetExecutionRole` of the administration account lacks permissions to invoke the function. CloudFormation proceeds with the StackSet operation in this account and Region.
   *   - Either no action is necessary, or no action is possible, on the stack. CloudFormation skips the StackSet operation in this account and Region.
   *
   * @public
   */
  Status?: AccountGateStatus | undefined;

  /**
   * The reason for the account gate status assigned to this account and Region for the StackSet operation.
   *
   * @public
   */
  StatusReason?: string | undefined;
}

/**
 * Describes the current CloudFormation limits for your account.
 *
 * CloudFormation has the following limits per account:
 *
 * - Number of concurrent resources
 * - Number of stacks
 * - Number of stack outputs
 *
 * For more information, see [Understand CloudFormation quotas](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html) in the *CloudFormation User Guide*.
 *
 * @public
 */
export interface AccountLimit {
  /**
   * The name of the account limit.
   *
   * Values: `ConcurrentResourcesLimit` | `StackLimit` | `StackOutputsLimit`
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value that's associated with the account limit name.
   *
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
 * Contains logging configuration information for an extension.
 *
 * @public
 */
export interface LoggingConfig {
  /**
   * The Amazon Resource Name (ARN) of the role that CloudFormation should assume when sending log entries to CloudWatch Logs.
   *
   * @public
   */
  LogRoleArn: string | undefined;

  /**
   * The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking the extension's handlers.
   *
   * @public
   */
  LogGroupName: string | undefined;
}

/**
 * @public
 */
export interface ActivateTypeInput {
  /**
   * The extension type.
   *
   * Conditional: You must specify `PublicTypeArn`, or `TypeName`, `Type`, and `PublisherId`.
   *
   * @public
   */
  Type?: ThirdPartyType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the public extension.
   *
   * Conditional: You must specify `PublicTypeArn`, or `TypeName`, `Type`, and `PublisherId`.
   *
   * @public
   */
  PublicTypeArn?: string | undefined;

  /**
   * The ID of the extension publisher.
   *
   * Conditional: You must specify `PublicTypeArn`, or `TypeName`, `Type`, and `PublisherId`.
   *
   * @public
   */
  PublisherId?: string | undefined;

  /**
   * The name of the extension.
   *
   * Conditional: You must specify `PublicTypeArn`, or `TypeName`, `Type`, and `PublisherId`.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * An alias to assign to the public extension in this account and Region. If you specify an alias for the extension, CloudFormation treats the alias as the extension type name within this account and Region. You must use the alias to refer to the extension in your templates, API calls, and CloudFormation console.
   *
   * An extension alias must be unique within a given account and Region. You can activate the same public resource multiple times in the same account and Region, using different type name aliases.
   *
   * @public
   */
  TypeNameAlias?: string | undefined;

  /**
   * Whether to automatically update the extension in this account and Region when a new *minor* version is published by the extension publisher. Major versions released by the publisher must be manually updated.
   *
   * The default is `true`.
   *
   * @public
   */
  AutoUpdate?: boolean | undefined;

  /**
   * Contains logging configuration information for an extension.
   *
   * @public
   */
  LoggingConfig?: LoggingConfig | undefined;

  /**
   * The name of the IAM execution role to use to activate the extension.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * Manually updates a previously-activated type to a new major or minor version, if available. You can also use this parameter to update the value of `AutoUpdate`.
   *
   * - `MAJOR`: CloudFormation updates the extension to the newest major version, if one is available.
   * - `MINOR`: CloudFormation updates the extension to the newest minor version, if one is available.
   *
   * @public
   */
  VersionBump?: VersionBump | undefined;

  /**
   * The major version of this extension you want to activate, if multiple major versions are available. The default is the latest major version. CloudFormation uses the latest available *minor* version of the major version selected.
   *
   * You can specify `MajorVersion` or `VersionBump`, but not both.
   *
   * @public
   */
  MajorVersion?: number | undefined;
}

/**
 * @public
 */
export interface ActivateTypeOutput {
  /**
   * The Amazon Resource Name (ARN) of the activated extension in this account and Region.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The `Annotation` data type.
 *
 * A `GetHookResult` call returns detailed information and remediation guidance from Control Tower, Guard, Lambda, or custom Hooks for a Hook invocation result.
 *
 * @public
 */
export interface Annotation {
  /**
   * An identifier for the evaluation logic that was used when invoking the Hook. For Control Tower, this is the control ID. For Guard, this is the rule ID. For Lambda and custom Hooks, this is a user-defined identifier.
   *
   * @public
   */
  AnnotationName?: string | undefined;

  /**
   * The status of the Hook invocation from the downstream service.
   *
   * @public
   */
  Status?: AnnotationStatus | undefined;

  /**
   * The explanation for the specific status assigned to this Hook invocation. For example, "Bucket does not block public access".
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Suggests what to change if your Hook returns a `FAILED` status. For example, "Block public access to the bucket".
   *
   * @public
   */
  RemediationMessage?: string | undefined;

  /**
   * A URL that you can access for additional remediation guidance.
   *
   * @public
   */
  RemediationLink?: string | undefined;

  /**
   * The relative risk associated with any violations of this type.
   *
   * @public
   */
  SeverityLevel?: AnnotationSeverityLevel | undefined;
}

/**
 * Describes whether StackSets automatically deploys to Organizations accounts that are added to a target organization or organizational unit (OU). For more information, see [Enable or disable automatic deployments for StackSets in Organizations](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-manage-auto-deployment.html) in the *CloudFormation User Guide*.
 *
 * @public
 */
export interface AutoDeployment {
  /**
   * If set to `true`, StackSets automatically deploys additional stack instances to Organizations accounts that are added to a target organization or organizational unit (OU) in the specified Regions. If an account is removed from a target organization or OU, StackSets deletes stack instances from the account in the specified Regions.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * If set to `true`, stack resources are retained when an account is removed from a target organization or OU. If set to `false`, stack resources are deleted. Specify only if `Enabled` is set to `True`.
   *
   * @public
   */
  RetainStacksOnAccountRemoval?: boolean | undefined;

  /**
   * A list of StackSet ARNs that this StackSet depends on for auto-deployment operations. When auto-deployment is triggered, operations will be sequenced to ensure all dependencies complete successfully before this StackSet's operation begins.
   *
   * @public
   */
  DependsOn?: string[] | undefined;
}

/**
 * Identifying information for the configuration of a CloudFormation extension.
 *
 * @public
 */
export interface TypeConfigurationIdentifier {
  /**
   * The ARN for the extension, in this account and Region.
   *
   * For public extensions, this will be the ARN assigned when you call the [ActivateType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html) API operation in this account and Region. For private extensions, this will be the ARN assigned when you call the [RegisterType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html) API operation in this account and Region.
   *
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * The alias specified for this configuration, if one was specified when the configuration was set.
   *
   * @public
   */
  TypeConfigurationAlias?: string | undefined;

  /**
   * The ARN for the configuration, in this account and Region.
   *
   * @public
   */
  TypeConfigurationArn?: string | undefined;

  /**
   * The type of extension.
   *
   * @public
   */
  Type?: ThirdPartyType | undefined;

  /**
   * The name of the extension type to which this configuration applies.
   *
   * @public
   */
  TypeName?: string | undefined;
}

/**
 * @public
 */
export interface BatchDescribeTypeConfigurationsInput {
  /**
   * The list of identifiers for the desired extension configurations.
   *
   * @public
   */
  TypeConfigurationIdentifiers: TypeConfigurationIdentifier[] | undefined;
}

/**
 * Detailed information concerning an error generated during the setting of configuration data for a CloudFormation extension.
 *
 * @public
 */
export interface BatchDescribeTypeConfigurationsError {
  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * Identifying information for the configuration of a CloudFormation extension.
   *
   * @public
   */
  TypeConfigurationIdentifier?: TypeConfigurationIdentifier | undefined;
}

/**
 * Detailed information concerning the specification of a CloudFormation extension in a given account and Region.
 *
 * For more information, see [Edit configuration data for extensions in your account](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-set-configuration.html) in the *CloudFormation User Guide*.
 *
 * @public
 */
export interface TypeConfigurationDetails {
  /**
   * The ARN for the configuration data, in this account and Region.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The alias specified for this configuration, if one was specified when the configuration was set.
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * A JSON string specifying the configuration data for the extension, in this account and Region.
   *
   * If a configuration hasn't been set for a specified extension, CloudFormation returns `\{\}`.
   *
   * @public
   */
  Configuration?: string | undefined;

  /**
   * When the configuration data was last updated for this extension.
   *
   * If a configuration hasn't been set for a specified extension, CloudFormation returns `null`.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * The ARN for the extension, in this account and Region.
   *
   * For public extensions, this will be the ARN assigned when you call the [ActivateType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html) API operation in this account and Region. For private extensions, this will be the ARN assigned when you call the [RegisterType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html) API operation in this account and Region.
   *
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * The name of the extension.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * Whether this configuration data is the default configuration for the extension.
   *
   * @public
   */
  IsDefaultConfiguration?: boolean | undefined;
}

/**
 * @public
 */
export interface BatchDescribeTypeConfigurationsOutput {
  /**
   * A list of information concerning any errors generated during the setting of the specified configurations.
   *
   * @public
   */
  Errors?: BatchDescribeTypeConfigurationsError[] | undefined;

  /**
   * A list of any of the specified extension configurations that CloudFormation could not process for any reason.
   *
   * @public
   */
  UnprocessedTypeConfigurations?: TypeConfigurationIdentifier[] | undefined;

  /**
   * A list of any of the specified extension configurations from the CloudFormation registry.
   *
   * @public
   */
  TypeConfigurations?: TypeConfigurationDetails[] | undefined;
}

/**
 * The input for the CancelUpdateStack action.
 *
 * @public
 */
export interface CancelUpdateStackInput {
  /**
   * > **Note:**
   * >
   * > If you don't pass a parameter to `StackName`, the API returns a response that describes all resources in the account.
   * >
   * > The IAM policy below can be added to IAM policies when you want to limit resource-level permissions and avoid returning a response when no parameter is sent in the request:
   * >
   * > `\{ "Version": "2012-10-17", "Statement": [\{ "Effect": "Deny", "Action": "cloudformation:DescribeStacks", "NotResource": "arn:aws:cloudformation:*:*:stack/*\/*" \}] \}`
   *
   * The name or the unique stack ID that's associated with the stack.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * A unique identifier for this `CancelUpdateStack` request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to cancel an update on a stack with the same name. You might retry `CancelUpdateStack` requests to ensure that CloudFormation successfully received them.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * Contains drift information for a resource property, including actual value, previous deployment value, and drift detection timestamp.
 *
 * @public
 */
export interface LiveResourceDrift {
  /**
   * The configuration value from the previous CloudFormation deployment.
   *
   * @public
   */
  PreviousValue?: string | undefined;

  /**
   * The current live configuration value of the resource property.
   *
   * @public
   */
  ActualValue?: string | undefined;

  /**
   * The timestamp when drift was detected for this resource property.
   *
   * @public
   */
  DriftDetectionTimestamp?: Date | undefined;
}

/**
 * The field that CloudFormation will change, such as the name of a resource's property, and whether the resource will be recreated.
 *
 * @public
 */
export interface ResourceTargetDefinition {
  /**
   * Indicates which resource attribute is triggering this update, such as a change in the resource attribute's `Metadata`, `Properties`, or `Tags`.
   *
   * @public
   */
  Attribute?: ResourceAttribute | undefined;

  /**
   * If the `Attribute` value is `Properties`, the name of the property. For all other attributes, the value is null.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * If the `Attribute` value is `Properties`, indicates whether a change to this property causes the resource to be recreated. The value can be `Never`, `Always`, or `Conditionally`. To determine the conditions for a `Conditionally` recreation, see the update behavior for that property in the [Amazon Web Services resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  RequiresRecreation?: RequiresRecreation | undefined;

  /**
   * The property path of the property.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The value of the property before the change is executed. Large values can be truncated.
   *
   * @public
   */
  BeforeValue?: string | undefined;

  /**
   * The value of the property after the change is executed. Large values can be truncated.
   *
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * Indicates the source of the before value. Valid values:
   *
   * - `ACTUAL_STATE` – The before value represents current actual state.
   * - `PREVIOUS_DEPLOYMENT_STATE` – The before value represents the previous CloudFormation deployment state.
   *
   * Only present for drift-aware change sets.
   *
   * @public
   */
  BeforeValueFrom?: BeforeValueFrom | undefined;

  /**
   * Indicates the source of the after value. Valid value:
   *
   * - `TEMPLATE` – The after value comes from the new template.
   *
   * Only present for drift-aware change sets.
   *
   * @public
   */
  AfterValueFrom?: AfterValueFrom | undefined;

  /**
   * Detailed drift information for the resource property, including actual values, previous deployment values, and drift detection timestamps.
   *
   * @public
   */
  Drift?: LiveResourceDrift | undefined;

  /**
   * The type of change to be made to the property if the change is executed.
   *
   * - `Add` The item will be added.
   * - `Remove` The item will be removed.
   * - `Modify` The item will be modified.
   * - `SyncWithActual` The drift status of this item will be reset but the item will not be modified.
   *
   * @public
   */
  AttributeChangeType?: AttributeChangeType | undefined;
}

/**
 * For a resource with `Modify` as the action, the `ResourceChange` structure describes the changes CloudFormation will make to that resource.
 *
 * @public
 */
export interface ResourceChangeDetail {
  /**
   * A `ResourceTargetDefinition` structure that describes the field that CloudFormation will change and whether the resource will be recreated.
   *
   * @public
   */
  Target?: ResourceTargetDefinition | undefined;

  /**
   * Indicates whether CloudFormation can determine the target value, and whether the target value will change before you execute a change set.
   *
   * For `Static` evaluations, CloudFormation can determine that the target value will change, and its value. For example, if you directly modify the `InstanceType` property of an EC2 instance, CloudFormation knows that this property value will change, and its value, so this is a `Static` evaluation.
   *
   * For `Dynamic` evaluations, can't determine the target value because it depends on the result of an intrinsic function, such as a `Ref` or `Fn::GetAtt` intrinsic function, when the stack is updated. For example, if your template includes a reference to a resource that's conditionally recreated, the value of the reference (the physical ID of the resource) might change, depending on if the resource is recreated. If the resource is recreated, it will have a new physical ID, so all references to that resource will also be updated.
   *
   * @public
   */
  Evaluation?: EvaluationType | undefined;

  /**
   * The group to which the `CausingEntity` value belongs. There are five entity groups:
   *
   * - `ResourceReference` entities are `Ref` intrinsic functions that refer to resources in the template, such as `\{ "Ref" : "MyEC2InstanceResource" \}`.
   * - `ParameterReference` entities are `Ref` intrinsic functions that get template parameter values, such as `\{ "Ref" : "MyPasswordParameter" \}`.
   * - `ResourceAttribute` entities are `Fn::GetAtt` intrinsic functions that get resource attribute values, such as `\{ "Fn::GetAtt" : [ "MyEC2InstanceResource", "PublicDnsName" ] \}`.
   * - `DirectModification` entities are changes that are made directly to the template.
   * - `Automatic` entities are `AWS::CloudFormation::Stack` resource types, which are also known as nested stacks. If you made no changes to the `AWS::CloudFormation::Stack` resource, CloudFormation sets the `ChangeSource` to `Automatic` because the nested stack's template might have changed. Changes to a nested stack's template aren't visible to CloudFormation until you run an update on the parent stack.
   * - `NoModification` entities are changes made to the template that matches the actual state of the resource.
   *
   * @public
   */
  ChangeSource?: ChangeSource | undefined;

  /**
   * The identity of the entity that triggered this change. This entity is a member of the group that's specified by the `ChangeSource` field. For example, if you modified the value of the `KeyPairName` parameter, the `CausingEntity` is the name of the parameter (`KeyPairName`).
   *
   * If the `ChangeSource` value is `DirectModification`, no value is given for `CausingEntity`.
   *
   * @public
   */
  CausingEntity?: string | undefined;
}

/**
 * Contains information about the module from which the resource was created, if the resource was created from a module included in the stack template.
 *
 * For more information about modules, see [Create reusable resource configurations that can be included across templates with CloudFormation modules](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/modules.html) in the *CloudFormation User Guide*.
 *
 * @public
 */
export interface ModuleInfo {
  /**
   * A concatenated list of the module type or types that contains the resource. Module types are listed starting with the inner-most nested module, and separated by `/`.
   *
   * In the following example, the resource was created from a module of type `AWS::First::Example::MODULE`, that's nested inside a parent module of type `AWS::Second::Example::MODULE`.
   *
   * `AWS::First::Example::MODULE/AWS::Second::Example::MODULE`
   *
   * @public
   */
  TypeHierarchy?: string | undefined;

  /**
   * A concatenated list of the logical IDs of the module or modules that contains the resource. Modules are listed starting with the inner-most nested module, and separated by `/`.
   *
   * In the following example, the resource was created from a module, `moduleA`, that's nested inside a parent module, `moduleB`.
   *
   * `moduleA/moduleB`
   *
   * For more information, see [Reference module resources in CloudFormation templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/module-ref-resources.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  LogicalIdHierarchy?: string | undefined;
}

/**
 * The `ResourceDriftIgnoredAttribute` data type.
 *
 * @public
 */
export interface ResourceDriftIgnoredAttribute {
  /**
   * Path of the resource attribute for which drift was ignored.
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * Reason why drift was ignored for the attribute, can have 3 possible values:
   *
   * - `WRITE_ONLY_PROPERTY` – Property is not included in read response for the resource’s live state.
   * - `MANAGED_BY_AWS` – Property is managed by an Amazon Web Services service and is expected to be dynamically modified.
   * - `SENSITIVE_PROPERTY` – Property has a sensitive value, such as an Amazon Web Services Secrets Manager value.
   *
   * @public
   */
  Reason?: DriftIgnoredReason | undefined;
}

/**
 * The `ResourceChange` structure describes the resource and the action that CloudFormation will perform on it if you execute this change set.
 *
 * @public
 */
export interface ResourceChange {
  /**
   * The action that will be taken on the physical resource when the change set is executed.
   *
   * - `Delete` The resource will be deleted.
   * - `Retain` The resource will be retained.
   * - `Snapshot` The resource will have a snapshot taken.
   * - `ReplaceAndDelete` The resource will be replaced and then deleted.
   * - `ReplaceAndRetain` The resource will be replaced and then retained.
   * - `ReplaceAndSnapshot` The resource will be replaced and then have a snapshot taken.
   *
   * @public
   */
  PolicyAction?: PolicyAction | undefined;

  /**
   * The action that CloudFormation takes on the resource, such as `Add` (adds a new resource), `Modify` (changes a resource), `Remove` (deletes a resource), `Import` (imports a resource), `Dynamic` (exact action for the resource can't be determined), or `SyncWithActual` (resource will not be changed, only CloudFormation metadata will change).
   *
   * @public
   */
  Action?: ChangeAction | undefined;

  /**
   * The resource's logical ID, which is defined in the stack's template.
   *
   * @public
   */
  LogicalResourceId?: string | undefined;

  /**
   * The resource's physical ID (resource name). Resources that you are adding don't have physical IDs because they haven't been created.
   *
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * The type of CloudFormation resource, such as `AWS::S3::Bucket`.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * For the `Modify` action, indicates whether CloudFormation will replace the resource by creating a new one and deleting the old one. This value depends on the value of the `RequiresRecreation` property in the `ResourceTargetDefinition` structure. For example, if the `RequiresRecreation` field is `Always` and the `Evaluation` field is `Static`, `Replacement` is `True`. If the `RequiresRecreation` field is `Always` and the `Evaluation` field is `Dynamic`, `Replacement` is `Conditional`.
   *
   * If you have multiple changes with different `RequiresRecreation` values, the `Replacement` value depends on the change with the most impact. A `RequiresRecreation` value of `Always` has the most impact, followed by `Conditional`, and then `Never`.
   *
   * @public
   */
  Replacement?: Replacement | undefined;

  /**
   * For the `Modify` action, indicates which resource attribute is triggering this update, such as a change in the resource attribute's `Metadata`, `Properties`, or `Tags`.
   *
   * @public
   */
  Scope?: ResourceAttribute[] | undefined;

  /**
   * The drift status of the resource. Valid values:
   *
   * - `IN_SYNC` – The resource matches its template definition.
   * - `MODIFIED` – Resource properties were modified outside CloudFormation.
   * - `DELETED` – The resource was deleted outside CloudFormation.
   * - `NOT_CHECKED` – CloudFormation doesn’t currently return this value.
   * - `UNKNOWN` – Drift status could not be determined.
   * - `UNSUPPORTED` – Resource type does not support actual state comparison.
   *
   * Only present for drift-aware change sets.
   *
   * @public
   */
  ResourceDriftStatus?: StackResourceDriftStatus | undefined;

  /**
   * List of resource attributes for which drift was ignored.
   *
   * @public
   */
  ResourceDriftIgnoredAttributes?: ResourceDriftIgnoredAttribute[] | undefined;

  /**
   * For the `Modify` action, a list of `ResourceChangeDetail` structures that describes the changes that CloudFormation will make to the resource.
   *
   * @public
   */
  Details?: ResourceChangeDetail[] | undefined;

  /**
   * The change set ID of the nested change set.
   *
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * Contains information about the module from which the resource was created, if the resource was created from a module included in the stack template.
   *
   * @public
   */
  ModuleInfo?: ModuleInfo | undefined;

  /**
   * An encoded JSON string that contains the context of the resource before the change is executed.
   *
   * @public
   */
  BeforeContext?: string | undefined;

  /**
   * An encoded JSON string that contains the context of the resource after the change is executed.
   *
   * @public
   */
  AfterContext?: string | undefined;

  /**
   * Information about the resource's state from the previous CloudFormation deployment.
   *
   * @public
   */
  PreviousDeploymentContext?: string | undefined;
}

/**
 * The `Change` structure describes the changes CloudFormation will perform if you execute the change set.
 *
 * @public
 */
export interface Change {
  /**
   * The type of entity that CloudFormation changes.
   *
   * - `Resource` This change is for a resource.
   *
   * @public
   */
  Type?: ChangeType | undefined;

  /**
   * Is either `null`, if no Hooks invoke for the resource, or contains the number of Hooks that will invoke for the resource.
   *
   * @public
   */
  HookInvocationCount?: number | undefined;

  /**
   * A `ResourceChange` structure that describes the resource and action that CloudFormation will perform.
   *
   * @public
   */
  ResourceChange?: ResourceChange | undefined;
}

/**
 * Specifies `RESOURCE` type target details for activated Hooks.
 *
 * @public
 */
export interface ChangeSetHookResourceTargetDetails {
  /**
   * The resource's logical ID, which is defined in the stack's template.
   *
   * @public
   */
  LogicalResourceId?: string | undefined;

  /**
   * The type of CloudFormation resource, such as `AWS::S3::Bucket`.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Specifies the action of the resource.
   *
   * @public
   */
  ResourceAction?: ChangeAction | undefined;
}

/**
 * Specifies target details for an activated Hook.
 *
 * @public
 */
export interface ChangeSetHookTargetDetails {
  /**
   * The Hook target type.
   *
   * @public
   */
  TargetType?: HookTargetType | undefined;

  /**
   * Required if `TargetType` is `RESOURCE`.
   *
   * @public
   */
  ResourceTargetDetails?: ChangeSetHookResourceTargetDetails | undefined;
}

/**
 * Specifies the resource, the Hook, and the Hook version to be invoked.
 *
 * @public
 */
export interface ChangeSetHook {
  /**
   * The specific point in the provisioning process where the Hook is invoked.
   *
   * @public
   */
  InvocationPoint?: HookInvocationPoint | undefined;

  /**
   * Specify the Hook failure mode for non-compliant resources in the followings ways.
   *
   * - `FAIL` Stops provisioning resources.
   * - `WARN` Allows provisioning to continue with a warning message.
   *
   * @public
   */
  FailureMode?: HookFailureMode | undefined;

  /**
   * The unique name for your Hook. Specifies a three-part namespace for your Hook, with a recommended pattern of `Organization::Service::Hook`.
   *
   * > **Note:**
   * >
   * > The following organization namespaces are reserved and can't be used in your Hook type names:
   * >
   * > - `Alexa`
   * > - `AMZN`
   * > - `Amazon`
   * > - `ASK`
   * > - `AWS`
   * > - `Custom`
   * > - `Dev`
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The version ID of the type specified.
   *
   * @public
   */
  TypeVersionId?: string | undefined;

  /**
   * The version ID of the type configuration.
   *
   * @public
   */
  TypeConfigurationVersionId?: string | undefined;

  /**
   * Specifies details about the target that the Hook will run against.
   *
   * @public
   */
  TargetDetails?: ChangeSetHookTargetDetails | undefined;
}

/**
 * The `ChangeSetSummary` structure describes a change set, its status, and the stack with which it's associated.
 *
 * @public
 */
export interface ChangeSetSummary {
  /**
   * The ID of the stack with which the change set is associated.
   *
   * @public
   */
  StackId?: string | undefined;

  /**
   * The name of the stack with which the change set is associated.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * The ID of the change set.
   *
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * The name of the change set.
   *
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * If the change set execution status is `AVAILABLE`, you can execute the change set. If you can't execute the change set, the status indicates why. For example, a change set might be in an `UNAVAILABLE` state because CloudFormation is still creating it or in an `OBSOLETE` state because the stack was already updated.
   *
   * @public
   */
  ExecutionStatus?: ExecutionStatus | undefined;

  /**
   * The state of the change set, such as `CREATE_PENDING`, `CREATE_COMPLETE`, or `FAILED`.
   *
   * @public
   */
  Status?: ChangeSetStatus | undefined;

  /**
   * A description of the change set's status. For example, if your change set is in the `FAILED` state, CloudFormation shows the error message.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The start time when the change set was created, in UTC.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * Descriptive information about the change set.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies the current setting of `IncludeNestedStacks` for the change set.
   *
   * @public
   */
  IncludeNestedStacks?: boolean | undefined;

  /**
   * The parent change set ID.
   *
   * @public
   */
  ParentChangeSetId?: string | undefined;

  /**
   * The root change set ID.
   *
   * @public
   */
  RootChangeSetId?: string | undefined;

  /**
   * Indicates if the change set imports resources that already exist.
   *
   * @public
   */
  ImportExistingResources?: boolean | undefined;
}

/**
 * The input for the ContinueUpdateRollback action.
 *
 * @public
 */
export interface ContinueUpdateRollbackInput {
  /**
   * The name or the unique ID of the stack that you want to continue rolling back.
   *
   * > **Note:** Don't specify the name of a nested stack (a stack that was created by using the `AWS::CloudFormation::Stack` resource). Instead, use this operation on the parent stack (the stack that contains the `AWS::CloudFormation::Stack` resource).
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to roll back the stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least permission.
   *
   * If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that's generated from your user credentials.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * A list of the logical IDs of the resources that CloudFormation skips during the continue update rollback operation. You can specify only resources that are in the `UPDATE_FAILED` state because a rollback failed. You can't specify resources that are in the `UPDATE_FAILED` state for other reasons, for example, because an update was canceled. To check why a resource update failed, use the DescribeStackResources action, and view the resource status reason.
   *
   * > **Important:** Specify this property to skip rolling back resources that CloudFormation can't successfully roll back. We recommend that you [troubleshoot](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed) resources before skipping them. CloudFormation sets the status of the specified resources to `UPDATE_COMPLETE` and continues to roll back the stack. After the rollback is complete, the state of the skipped resources will be inconsistent with the state of the resources in the stack template. Before performing another stack update, you must update the stack or resources to be consistent with each other. If you don't, subsequent stack updates might fail, and the stack will become unrecoverable.
   *
   * Specify the minimum number of resources required to successfully roll back your stack. For example, a failed resource update might cause dependent resources to fail. In this case, it might not be necessary to skip the dependent resources.
   *
   * To skip resources that are part of nested stacks, use the following format: `NestedStackName.ResourceLogicalID`. If you want to specify the logical ID of a stack resource (`Type: AWS::CloudFormation::Stack`) in the `ResourcesToSkip` list, then its corresponding embedded stack must be in one of the following states: `DELETE_IN_PROGRESS`, `DELETE_COMPLETE`, or `DELETE_FAILED`.
   *
   * > **Note:** Don't confuse a child stack's name with its corresponding logical ID defined in the parent stack. For an example of a continue update rollback operation with nested stacks, see [Continue rolling back from failed nested stack updates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html#nested-stacks).
   *
   * @public
   */
  ResourcesToSkip?: string[] | undefined;

  /**
   * A unique identifier for this `ContinueUpdateRollback` request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to continue the rollback to a stack with the same name. You might retry `ContinueUpdateRollback` requests to ensure that CloudFormation successfully received them.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Specifies whether CloudFormation forces the rollback to continue by skipping resources currently in the `UPDATE_FAILED` state. Use this instead of listing each resource individually in `ResourcesToSkip`. Only resources that entered the `UPDATE_FAILED` state because a rollback failed are skipped. If you don't specify a value, the default is `false` and CloudFormation doesn't skip any resources.
   *
   * `ForceRollback` and `ResourcesToSkip` are mutually exclusive. Specifying both in the same request returns a validation error.
   *
   * > **Important:**
   * >
   * > We recommend that you [troubleshoot](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed) resources before skipping them. CloudFormation sets the status of the skipped resources to `UPDATE_COMPLETE` and continues to roll back the stack, including resources in nested stacks. After the rollback completes, the skipped resources no longer match the resources in the stack template. Before performing another stack update, you must update the stack or resources to be consistent with each other. If you don't, subsequent stack updates might fail, and the stack will become unrecoverable.
   * >
   * > Drift detection reports skipped resources as `NOT_CHECKED`. For guidance, see [Continue rolling back an update](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  ForceRollback?: boolean | undefined;
}

/**
 * The output for a ContinueUpdateRollback operation.
 *
 * @public
 */
export interface ContinueUpdateRollbackOutput {}

/**
 * The deployment configuration for a stack operation, including the deployment mode.
 *
 * @public
 */
export interface DeploymentConfig {
  /**
   * Specifies the deployment mode for the stack operation. Possible values are:
   *
   * - `STANDARD` - Use the standard deployment behavior, ensuring resources are ready to serve traffic before completing the operation. This is the default. You do not need to specify this value explicitly.
   * - `EXPRESS` - Complete the stack operation when resource configuration is applied, without waiting for resources to become ready to serve traffic. Resources continue becoming ready in the background.
   *
   * @public
   */
  Mode?: DeploymentConfigMode | undefined;

  /**
   * Specifies whether to disable rollback of the stack if the stack operation fails.
   *
   * Default: `false`
   *
   * @public
   */
  DisableRollback?: boolean | undefined;
}

/**
 * The `Parameter` data type.
 *
 * @public
 */
export interface Parameter {
  /**
   * The key associated with the parameter. If you don't specify a key and value for a particular parameter, CloudFormation uses the default value that's specified in your template.
   *
   * @public
   */
  ParameterKey?: string | undefined;

  /**
   * The input value associated with the parameter.
   *
   * @public
   */
  ParameterValue?: string | undefined;

  /**
   * During a stack update, use the existing parameter value that the stack is using for a given parameter key. If you specify `true`, do not specify a parameter value.
   *
   * @public
   */
  UsePreviousValue?: boolean | undefined;

  /**
   * Read-only. The value that corresponds to a Systems Manager parameter key. This field is returned only for Systems Manager parameter types in the template. For more information, see [Specify existing resources at runtime with CloudFormation-supplied parameter types](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-supplied-parameter-types.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  ResolvedValue?: string | undefined;
}

/**
 * Describes the target resource of an import operation.
 *
 * @public
 */
export interface ResourceToImport {
  /**
   * The type of resource to import into your stack, such as `AWS::S3::Bucket`. For a list of supported resource types, see [Resource type support for imports and drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The logical ID of the target resource as specified in the template.
   *
   * @public
   */
  LogicalResourceId: string | undefined;

  /**
   * A key-value pair that identifies the target resource. The key is an identifier property (for example, `BucketName` for `AWS::S3::Bucket` resources) and the value is the actual property value (for example, `MyS3Bucket`).
   *
   * @public
   */
  ResourceIdentifier: Record<string, string> | undefined;
}

/**
 * A rollback trigger CloudFormation monitors during creation and updating of stacks. If any of the alarms you specify goes to ALARM state during the stack operation or within the specified monitoring period afterwards, CloudFormation rolls back the entire stack operation.
 *
 * @public
 */
export interface RollbackTrigger {
  /**
   * The Amazon Resource Name (ARN) of the rollback trigger.
   *
   * If a specified trigger is missing, the entire stack operation fails and is rolled back.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The resource type of the rollback trigger. Specify either [AWS::CloudWatch::Alarm](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-cloudwatch-alarm.html) or [AWS::CloudWatch::CompositeAlarm](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-cloudwatch-compositealarm.html) resource types.
   *
   * @public
   */
  Type: string | undefined;
}

/**
 * Structure that contains the rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
 *
 * Rollback triggers enable you to have CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified. For more information, see [Roll back your CloudFormation stack on alarm breach with rollback triggers](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-rollback-triggers.html).
 *
 * @public
 */
export interface RollbackConfiguration {
  /**
   * The triggers to monitor during stack creation or update actions.
   *
   * By default, CloudFormation saves the rollback triggers specified for a stack and applies them to any subsequent update operations for the stack, unless you specify otherwise. If you do specify rollback triggers for this parameter, those triggers replace any list of triggers previously specified for the stack. This means:
   *
   * - To use the rollback triggers previously specified for this stack, if any, don't specify this parameter.
   * - To specify new or updated rollback triggers, you must specify *all* the triggers that you want used for this stack, even triggers you've specified before (for example, when creating the stack or during a previous stack update). Any triggers that you don't include in the updated list of triggers are no longer applied to the stack.
   * - To remove all currently specified triggers, specify an empty list for this parameter.
   *
   * If a specified trigger is missing, the entire stack operation fails and is rolled back.
   *
   * @public
   */
  RollbackTriggers?: RollbackTrigger[] | undefined;

  /**
   * The amount of time, in minutes, during which CloudFormation should monitor all the rollback triggers after the stack creation or update operation deploys all necessary resources.
   *
   * The default is 0 minutes.
   *
   * If you specify a monitoring period but don't specify any rollback triggers, CloudFormation still waits the specified period of time before cleaning up old resources after update operations. You can use this monitoring period to perform any manual stack validation desired, and manually cancel the stack creation or update (using [CancelUpdateStack](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CancelUpdateStack.html), for example) as necessary.
   *
   * If you specify 0 for this parameter, CloudFormation still monitors the specified rollback triggers during stack creation and update operations. Then, for update operations, it begins disposing of old resources immediately once the operation completes.
   *
   * @public
   */
  MonitoringTimeInMinutes?: number | undefined;
}

/**
 * The Tag type enables you to specify a key-value pair that can be used to store information about an CloudFormation stack.
 *
 * @public
 */
export interface Tag {
  /**
   * A string used to identify this tag. You can specify a maximum of 128 characters for a tag key. Tags owned by Amazon Web Services have the reserved prefix: `aws:`.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * A string that contains the value for this tag. You can specify a maximum of 256 characters for a tag value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The input for the CreateChangeSet action.
 *
 * @public
 */
export interface CreateChangeSetInput {
  /**
   * The name or the unique ID of the stack for which you are creating a change set. CloudFormation generates the change set by comparing this stack's information with the information that you submit, such as a modified template or different parameter input values.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * A structure that contains the body of the revised template, with a minimum length of 1 byte and a maximum length of 51,200 bytes. CloudFormation generates the change set by comparing this template with the template of the stack that you specified.
   *
   * Conditional: You must specify only one of the following parameters: `TemplateBody`, `TemplateURL`, or set the `UsePreviousTemplate` to `true`.
   *
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * The URL of the file that contains the revised template. The URL must point to a template (max size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. CloudFormation generates the change set by comparing this template with the stack that you specified. The location for an Amazon S3 bucket must start with `https://`. URLs from S3 static websites are not supported.
   *
   * Conditional: You must specify only one of the following parameters: `TemplateBody`, `TemplateURL`, or set the `UsePreviousTemplate` to `true`.
   *
   * @public
   */
  TemplateURL?: string | undefined;

  /**
   * Whether to reuse the template that's associated with the stack to create the change set.
   *
   * When using templates with the `AWS::LanguageExtensions` transform, provide the template instead of using `UsePreviousTemplate` to ensure new parameter values and Systems Manager parameter updates are applied correctly. For more information, see [AWS::LanguageExtensions transform](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/transform-aws-languageextensions.html).
   *
   * Conditional: You must specify only one of the following parameters: `TemplateBody`, `TemplateURL`, or set the `UsePreviousTemplate` to `true`.
   *
   * @public
   */
  UsePreviousTemplate?: boolean | undefined;

  /**
   * A list of `Parameter` structures that specify input parameters for the change set. For more information, see the Parameter data type.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to create the stack.
   *
   * - `CAPABILITY_IAM` and `CAPABILITY_NAMED_IAM`
   *
   *   Some stack templates might include resources that can affect permissions in your Amazon Web Services account, for example, by creating new IAM users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities.
   *
   *   The following IAM resources require you to specify either the `CAPABILITY_IAM` or `CAPABILITY_NAMED_IAM` capability.
   *
   *   - If you have IAM resources, you can specify either capability.
   *   - If you have IAM resources with custom names, you *must* specify `CAPABILITY_NAMED_IAM`.
   *   - If you don't specify either of these capabilities, CloudFormation returns an `InsufficientCapabilities` error.
   *
   *   If your stack template contains these resources, we suggest that you review all permissions associated with them and edit their permissions if necessary.
   *
   *   - [AWS::IAM::AccessKey](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-accesskey.html)
   *   - [AWS::IAM::Group](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-group.html)
   *   - [AWS::IAM::InstanceProfile](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-instanceprofile.html)
   *   - [AWS::IAM::ManagedPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-managedpolicy.html)
   *   - [AWS::IAM::Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-policy.html)
   *   - [AWS::IAM::Role](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-role.html)
   *   - [AWS::IAM::User](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-user.html)
   *   - [AWS::IAM::UserToGroupAddition](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-usertogroupaddition.html)
   *
   *   For more information, see [Acknowledging IAM resources in CloudFormation templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities).
   * - `CAPABILITY_AUTO_EXPAND`
   *
   *   Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the [AWS::Include](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-include.html) and [AWS::Serverless](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html) transforms, which are macros hosted by CloudFormation.
   *
   *   > **Note:**
   *   >
   *   > This capacity doesn't apply to creating change sets, and specifying it when creating change sets has no effect.
   *   >
   *   > If you want to create a stack from a stack template that contains macros *and* nested stacks, you must create or update the stack directly from the template using the CreateStack or UpdateStack action, and specifying this capability.
   *
   *   For more information about macros, see [Perform custom processing on CloudFormation templates with template macros](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html).
   *
   * > **Note:** Only one of the `Capabilities` and `ResourceType` parameters can be specified.
   *
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * Specifies which resource types you can work with, such as `AWS::EC2::Instance` or `Custom::MyCustomInstance`.
   *
   * If the list of resource types doesn't include a resource type that you're updating, the stack update fails. By default, CloudFormation grants permissions to all resource types. IAM uses this parameter for condition keys in IAM policies for CloudFormation. For more information, see [Control CloudFormation access with Identity and Access Management](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html) in the *CloudFormation User Guide*.
   *
   * > **Note:** Only one of the `Capabilities` and `ResourceType` parameters can be specified.
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes when executing the change set. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least permission.
   *
   * If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that is generated from your user credentials.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
   *
   * @public
   */
  RollbackConfiguration?: RollbackConfiguration | undefined;

  /**
   * The Amazon Resource Names (ARNs) of Amazon SNS topics that CloudFormation associates with the stack. To remove all associated notification topics, specify an empty list.
   *
   * @public
   */
  NotificationARNs?: string[] | undefined;

  /**
   * Key-value pairs to associate with this stack. CloudFormation also propagates these tags to resources in the stack. You can specify a maximum of 50 tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The name of the change set. The name must be unique among all change sets that are associated with the specified stack.
   *
   * A change set name can contain only alphanumeric, case sensitive characters, and hyphens. It must start with an alphabetical character and can't exceed 128 characters.
   *
   * @public
   */
  ChangeSetName: string | undefined;

  /**
   * A unique identifier for this `CreateChangeSet` request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create another change set with the same name. You might retry `CreateChangeSet` requests to ensure that CloudFormation successfully received them.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A description to help you identify this change set.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of change set operation. To create a change set for a new stack, specify `CREATE`. To create a change set for an existing stack, specify `UPDATE`. To create a change set for an import operation, specify `IMPORT`.
   *
   * If you create a change set for a new stack, CloudFormation creates a stack with a unique stack ID, but no template or resources. The stack will be in the `REVIEW_IN_PROGRESS` state until you execute the change set.
   *
   * By default, CloudFormation specifies `UPDATE`. You can't use the `UPDATE` type to create a change set for a new stack or the `CREATE` type to create a change set for an existing stack.
   *
   * @public
   */
  ChangeSetType?: ChangeSetType | undefined;

  /**
   * The resources to import into your stack.
   *
   * @public
   */
  ResourcesToImport?: ResourceToImport[] | undefined;

  /**
   * Creates a change set for the all nested stacks specified in the template. The default behavior of this action is set to `False`. To include nested sets in a change set, specify `True`.
   *
   * @public
   */
  IncludeNestedStacks?: boolean | undefined;

  /**
   * Determines what action will be taken if stack creation fails. If this parameter is specified, the `DisableRollback` parameter to the [ExecuteChangeSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html) API operation must not be specified. This must be one of these values:
   *
   * - `DELETE` - Deletes the change set if the stack creation fails. This is only valid when the `ChangeSetType` parameter is set to `CREATE`. If the deletion of the stack fails, the status of the stack is `DELETE_FAILED`.
   * - `DO_NOTHING` - if the stack creation fails, do nothing. This is equivalent to specifying `true` for the `DisableRollback` parameter to the [ExecuteChangeSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html) API operation.
   * - `ROLLBACK` - if the stack creation fails, roll back the stack. This is equivalent to specifying `false` for the `DisableRollback` parameter to the [ExecuteChangeSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html) API operation.
   *
   * For nested stacks, when the `OnStackFailure` parameter is set to `DELETE` for the change set for the parent stack, any failure in a child stack will cause the parent stack creation to fail and all stacks to be deleted.
   *
   * @public
   */
  OnStackFailure?: OnStackFailure | undefined;

  /**
   * Indicates if the change set auto-imports resources that already exist. For more information, see [Import Amazon Web Services resources into a CloudFormation stack automatically](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/import-resources-automatically.html) in the *CloudFormation User Guide*.
   *
   * > **Note:** This parameter can only import resources that have custom names in templates. For more information, see [name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-properties-name.html) in the *CloudFormation User Guide*. To import resources that do not accept custom names, such as EC2 instances, use the `ResourcesToImport` parameter instead.
   *
   * @public
   */
  ImportExistingResources?: boolean | undefined;

  /**
   * Determines how CloudFormation handles configuration drift during deployment.
   *
   * - `REVERT_DRIFT` – Creates a drift-aware change set that brings actual resource states in line with template definitions. Provides a three-way comparison between actual state, previous deployment state, and desired state.
   *
   * For more information, see [Using drift-aware change sets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/drift-aware-change-sets.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  DeploymentMode?: DeploymentMode | undefined;

  /**
   * The deployment configuration for this stack operation, including the deployment mode.
   *
   * @public
   */
  DeploymentConfig?: DeploymentConfig | undefined;

  /**
   * Set to `true` to disable pre-deployment validations in changeset or stack operations.
   *
   * Default: `false`
   *
   * @public
   */
  DisableValidation?: boolean | undefined;
}

/**
 * The output for the CreateChangeSet action.
 *
 * @public
 */
export interface CreateChangeSetOutput {
  /**
   * The Amazon Resource Name (ARN) of the change set.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The unique ID of the stack.
   *
   * @public
   */
  StackId?: string | undefined;
}

/**
 * A resource included in a generated template. This data type is used with the `CreateGeneratedTemplate` and `UpdateGeneratedTemplate` API actions.
 *
 * @public
 */
export interface ResourceDefinition {
  /**
   * The type of the resource, such as `AWS::DynamoDB::Table`. For the list of supported resources, see [Resource type support for imports and drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html) in the *CloudFormation User Guide*
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * The logical resource id for this resource in the generated template.
   *
   * @public
   */
  LogicalResourceId?: string | undefined;

  /**
   * A list of up to 256 key-value pairs that identifies the scanned resource. The key is the name of one of the primary identifiers for the resource. (Primary identifiers are specified in the `primaryIdentifier` list in the resource schema.) The value is the value of that primary identifier. For example, for a `AWS::DynamoDB::Table` resource, the primary identifiers is `TableName` so the key-value pair could be `"TableName": "MyDDBTable"`. For more information, see [primaryIdentifier](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-primaryidentifier) in the *CloudFormation Command Line Interface (CLI) User Guide*.
   *
   * @public
   */
  ResourceIdentifier: Record<string, string> | undefined;
}

/**
 * The configuration details of a generated template.
 *
 * @public
 */
export interface TemplateConfiguration {
  /**
   * The `DeletionPolicy` assigned to resources in the generated template. Supported values are:
   *
   * - `DELETE` - delete all resources when the stack is deleted.
   * - `RETAIN` - retain all resources when the stack is deleted.
   *
   * For more information, see [DeletionPolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  DeletionPolicy?: GeneratedTemplateDeletionPolicy | undefined;

  /**
   * The `UpdateReplacePolicy` assigned to resources in the generated template. Supported values are:
   *
   * - `DELETE` - delete all resources when the resource is replaced during an update operation.
   * - `RETAIN` - retain all resources when the resource is replaced during an update operation.
   *
   * For more information, see [UpdateReplacePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  UpdateReplacePolicy?: GeneratedTemplateUpdateReplacePolicy | undefined;
}

/**
 * @public
 */
export interface CreateGeneratedTemplateInput {
  /**
   * An optional list of resources to be included in the generated template.
   *
   * If no resources are specified,the template will be created without any resources. Resources can be added to the template using the `UpdateGeneratedTemplate` API action.
   *
   * @public
   */
  Resources?: ResourceDefinition[] | undefined;

  /**
   * The name assigned to the generated template.
   *
   * @public
   */
  GeneratedTemplateName: string | undefined;

  /**
   * An optional name or ARN of a stack to use as the base stack for the generated template.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * The configuration details of the generated template, including the `DeletionPolicy` and `UpdateReplacePolicy`.
   *
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateGeneratedTemplateOutput {
  /**
   * The ID of the generated template.
   *
   * @public
   */
  GeneratedTemplateId?: string | undefined;
}

/**
 * The input for CreateStack action.
 *
 * @public
 */
export interface CreateStackInput {
  /**
   * The name that's associated with the stack. The name must be unique in the Region in which you are creating the stack.
   *
   * > **Note:** A stack name can contain only alphanumeric characters (case sensitive) and hyphens. It must start with an alphabetical character and can't be longer than 128 characters.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * Structure that contains the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.
   *
   * Conditional: You must specify either `TemplateBody` or `TemplateURL`, but not both.
   *
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * The URL of a file that contains the template body. The URL must point to a template (max size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with `https://`. URLs from S3 static websites are not supported.
   *
   * Conditional: You must specify either the `TemplateBody` or the `TemplateURL` parameter, but not both.
   *
   * @public
   */
  TemplateURL?: string | undefined;

  /**
   * A list of `Parameter` structures that specify input parameters for the stack. For more information, see the [Parameter](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html) data type.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * Set to `true` to disable rollback of the stack if stack creation failed. You can specify either `DisableRollback` or `OnFailure`, but not both.
   *
   * Default: `false`
   *
   * @public
   */
  DisableRollback?: boolean | undefined;

  /**
   * The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
   *
   * @public
   */
  RollbackConfiguration?: RollbackConfiguration | undefined;

  /**
   * The amount of time that can pass before the stack status becomes `CREATE_FAILED`; if `DisableRollback` is not set or is set to `false`, the stack will be rolled back.
   *
   * @public
   */
  TimeoutInMinutes?: number | undefined;

  /**
   * The Amazon SNS topic ARNs to publish stack related events. You can find your Amazon SNS topic ARNs using the Amazon SNS console or your Command Line Interface (CLI).
   *
   * @public
   */
  NotificationARNs?: string[] | undefined;

  /**
   * In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to create the stack.
   *
   * - `CAPABILITY_IAM` and `CAPABILITY_NAMED_IAM`
   *
   *   Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new IAM users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities.
   *
   *   The following IAM resources require you to specify either the `CAPABILITY_IAM` or `CAPABILITY_NAMED_IAM` capability.
   *
   *   - If you have IAM resources, you can specify either capability.
   *   - If you have IAM resources with custom names, you *must* specify `CAPABILITY_NAMED_IAM`.
   *   - If you don't specify either of these capabilities, CloudFormation returns an `InsufficientCapabilities` error.
   *
   *   If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.
   *
   *   - [AWS::IAM::AccessKey](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-accesskey.html)
   *   - [AWS::IAM::Group](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-group.html)
   *   - [AWS::IAM::InstanceProfile](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-instanceprofile.html)
   *   - [AWS::IAM::ManagedPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-managedpolicy.html)
   *   - [AWS::IAM::Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-policy.html)
   *   - [AWS::IAM::Role](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-role.html)
   *   - [AWS::IAM::User](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-user.html)
   *   - [AWS::IAM::UserToGroupAddition](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-usertogroupaddition.html)
   *
   *   For more information, see [Acknowledging IAM resources in CloudFormation templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities).
   * - `CAPABILITY_AUTO_EXPAND`
   *
   *   Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually creating the stack. If your stack template contains one or more macros, and you choose to create a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the [AWS::Include](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-include.html) and [AWS::Serverless](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html) transforms, which are macros hosted by CloudFormation.
   *
   *   If you want to create a stack from a stack template that contains macros *and* nested stacks, you must create the stack directly from the template using this capability.
   *
   *   > **Important:**
   *   >
   *   > You should only create stacks directly from a stack template that contains macros if you know what processing the macro performs.
   *   >
   *   > Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without CloudFormation being notified.
   *
   *   For more information, see [Perform custom processing on CloudFormation templates with template macros](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html).
   *
   * > **Note:** Only one of the `Capabilities` and `ResourceType` parameters can be specified.
   *
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * Specifies which resource types you can work with, such as `AWS::EC2::Instance` or `Custom::MyCustomInstance`.
   *
   * If the list of resource types doesn't include a resource that you're creating, the stack creation fails. By default, CloudFormation grants permissions to all resource types. IAM uses this parameter for CloudFormation-specific condition keys in IAM policies. For more information, see [Control CloudFormation access with Identity and Access Management](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html).
   *
   * > **Note:** Only one of the `Capabilities` and `ResourceType` parameters can be specified.
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to create the stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.
   *
   * If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that's generated from your user credentials.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * Determines what action will be taken if stack creation fails. This must be one of: `DO_NOTHING`, `ROLLBACK`, or `DELETE`. You can specify either `OnFailure` or `DisableRollback`, but not both.
   *
   * > **Note:** Although the default setting is `ROLLBACK`, there is one exception. This exception occurs when a StackSet attempts to deploy a stack instance and the stack instance fails to create successfully. In this case, the `CreateStack` call overrides the default setting and sets the value of `OnFailure` to `DELETE`.
   *
   * Default: `ROLLBACK`
   *
   * @public
   */
  OnFailure?: OnFailure | undefined;

  /**
   * Structure that contains the stack policy body. For more information, see [Prevent updates to stack resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html) in the *CloudFormation User Guide*. You can specify either the `StackPolicyBody` or the `StackPolicyURL` parameter, but not both.
   *
   * @public
   */
  StackPolicyBody?: string | undefined;

  /**
   * Location of a file that contains the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an S3 bucket in the same Region as the stack. The location for an Amazon S3 bucket must start with `https://`. URLs from S3 static websites are not supported.
   *
   * You can specify either the `StackPolicyBody` or the `StackPolicyURL` parameter, but not both.
   *
   * @public
   */
  StackPolicyURL?: string | undefined;

  /**
   * Key-value pairs to associate with this stack. CloudFormation also propagates these tags to the resources created in the stack. A maximum number of 50 tags can be specified.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A unique identifier for this `CreateStack` request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create a stack with the same name. You might retry `CreateStack` requests to ensure that CloudFormation successfully received them.
   *
   * All events initiated by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a `CreateStack` operation with the token `token1`, then all the `StackEvents` generated by that operation will have `ClientRequestToken` set as `token1`.
   *
   * In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format *Console-StackOperation-ID*, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: `Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002`.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Whether to enable termination protection on the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see [Protect CloudFormation stacks from being deleted](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html) in the *CloudFormation User Guide*. Termination protection is deactivated on stacks by default.
   *
   * For [nested stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html), termination protection is set on the root stack and can't be changed directly on the nested stack.
   *
   * @public
   */
  EnableTerminationProtection?: boolean | undefined;

  /**
   * When set to `true`, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of `Retain`.
   *
   * Default: `false`
   *
   * @public
   */
  RetainExceptOnCreate?: boolean | undefined;

  /**
   * The deployment configuration for this stack operation, including the deployment mode.
   *
   * @public
   */
  DeploymentConfig?: DeploymentConfig | undefined;

  /**
   * Set to `true` to disable pre-deployment validations in changeset or stack operations.
   *
   * Default: `false`
   *
   * @public
   */
  DisableValidation?: boolean | undefined;
}

/**
 * The output for a CreateStack action.
 *
 * @public
 */
export interface CreateStackOutput {
  /**
   * Unique identifier of the stack.
   *
   * @public
   */
  StackId?: string | undefined;

  /**
   * A unique identifier for this stack operation that can be used to track the operation's progress and events.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * Specifies the Organizations accounts where you want to create, update, or delete stack instances. You can target either your entire organization or specific accounts using organizational units (OUs) and account filter options.
 *
 * CloudFormation doesn't deploy stack instances to the organization management account, even if the organization management account is in your organization or in an OU in your organization.
 *
 * When performing create operations, if you specify both `OrganizationalUnitIds` and `Accounts`, you must also specify the `AccountFilterType` property.
 *
 * @public
 */
export interface DeploymentTargets {
  /**
   * The Amazon Web Services account IDs where you want to perform stack operations. How these accounts are used depends on the `AccountFilterType` property.
   *
   * If you have many account numbers, you can provide those accounts using the `AccountsUrl` property instead.
   *
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * The Amazon S3 URL path to a file that contains a list of Amazon Web Services account IDs. The file format must be either `.csv` or `.txt`, and the data can be comma-separated or new-line-separated. There is currently a 10MB limit for the data (approximately 800,000 accounts).
   *
   * This property serves the same purpose as `Accounts` but allows you to specify a large number of accounts.
   *
   * @public
   */
  AccountsUrl?: string | undefined;

  /**
   * The organization root ID or organizational unit (OU) IDs where you want to perform stack operations. CloudFormation will perform operations on accounts within these OUs and their child OUs.
   *
   * @public
   */
  OrganizationalUnitIds?: string[] | undefined;

  /**
   * Refines which accounts will have stack operations performed on them by specifying how to use the `Accounts` and `OrganizationalUnitIds` properties together.
   *
   * The following values determine how CloudFormation selects target accounts:
   *
   * - `INTERSECTION`: Performs stack operations only on specific individual accounts within the selected OUs. Only accounts that are both specified in the `Accounts` property and belong to the specified OUs will be targeted.
   * - `DIFFERENCE`: Performs stack operations on all accounts in the selected OUs except for specific accounts listed in the `Accounts` property. This enables you to exclude certain accounts within an OU, such as suspended accounts.
   * - `UNION`: Performs stack operations on the specified OUs plus additional individual accounts listed in the `Accounts` property. This is the default value if `AccountFilterType` is not provided. This lets you target an entire OU and individual accounts from a different OU in one request. Note that `UNION` is not supported for `CreateStackInstances` operations.
   * - `NONE`: Performs stack operations on all accounts in the specified organizational units (OUs).
   *
   * @public
   */
  AccountFilterType?: AccountFilterType | undefined;
}

/**
 * The user-specified preferences for how CloudFormation performs a StackSet operation.
 *
 * For more information about maximum concurrent accounts and failure tolerance, see [StackSet operation options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options).
 *
 * > **Note:** `StackSetOperationPreferences` don't apply to `AutoDeployment`, even if it's enabled.
 *
 * @public
 */
export interface StackSetOperationPreferences {
  /**
   * The concurrency type of deploying StackSets operations in Regions, could be in parallel or one Region at a time.
   *
   * @public
   */
  RegionConcurrencyType?: RegionConcurrencyType | undefined;

  /**
   * The order of the Regions where you want to perform the stack operation.
   *
   * @public
   */
  RegionOrder?: string[] | undefined;

  /**
   * The number of accounts per Region this operation can fail in before CloudFormation stops the operation in that Region. If the operation is stopped in a Region, CloudFormation doesn't attempt the operation in any subsequent Regions.
   *
   * You can specify either `FailureToleranceCount` or `FailureTolerancePercentage`, but not both.
   *
   * By default, `0` is specified.
   *
   * @public
   */
  FailureToleranceCount?: number | undefined;

  /**
   * The percentage of accounts per Region this stack operation can fail in before CloudFormation stops the operation in that Region. If the operation is stopped in a Region, CloudFormation doesn't attempt the operation in any subsequent Regions.
   *
   * When calculating the number of accounts based on the specified percentage, CloudFormation rounds *down* to the next whole number.
   *
   * You can specify either `FailureToleranceCount` or `FailureTolerancePercentage`, but not both.
   *
   * By default, `0` is specified.
   *
   * @public
   */
  FailureTolerancePercentage?: number | undefined;

  /**
   * The maximum number of accounts in which to perform this operation at one time. This can depend on the value of `FailureToleranceCount` depending on your `ConcurrencyMode`. `MaxConcurrentCount` is at most one more than the `FailureToleranceCount` if you're using `STRICT_FAILURE_TOLERANCE`.
   *
   * Note that this setting lets you specify the *maximum* for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.
   *
   * You can specify either `MaxConcurrentCount` or `MaxConcurrentPercentage`, but not both.
   *
   * By default, `1` is specified.
   *
   * @public
   */
  MaxConcurrentCount?: number | undefined;

  /**
   * The maximum percentage of accounts in which to perform this operation at one time.
   *
   * When calculating the number of accounts based on the specified percentage, CloudFormation rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, CloudFormation sets the number as one instead.
   *
   * Note that this setting lets you specify the *maximum* for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.
   *
   * You can specify either `MaxConcurrentCount` or `MaxConcurrentPercentage`, but not both.
   *
   * By default, `1` is specified.
   *
   * @public
   */
  MaxConcurrentPercentage?: number | undefined;

  /**
   * Specifies how the concurrency level behaves during the operation execution.
   *
   * - `STRICT_FAILURE_TOLERANCE`: This option dynamically lowers the concurrency level to ensure the number of failed accounts never exceeds the value of `FailureToleranceCount` +1. The initial actual concurrency is set to the lower of either the value of the `MaxConcurrentCount`, or the value of `FailureToleranceCount` +1. The actual concurrency is then reduced proportionally by the number of failures. This is the default behavior.
   *
   *   If failure tolerance or Maximum concurrent accounts are set to percentages, the behavior is similar.
   * - `SOFT_FAILURE_TOLERANCE`: This option decouples `FailureToleranceCount` from the actual concurrency. This allows StackSet operations to run at the concurrency level set by the `MaxConcurrentCount` value, or `MaxConcurrentPercentage`, regardless of the number of failures.
   *
   * @public
   */
  ConcurrencyMode?: ConcurrencyMode | undefined;
}

/**
 * @public
 */
export interface CreateStackInstancesInput {
  /**
   * The name or unique ID of the StackSet that you want to create stack instances from.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * [Self-managed permissions] The account IDs of one or more Amazon Web Services accounts that you want to create stack instances in the specified Region(s) for.
   *
   * You can specify `Accounts` or `DeploymentTargets`, but not both.
   *
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * [Service-managed permissions] The Organizations accounts in which to create stack instances in the specified Amazon Web Services Regions.
   *
   * You can specify `Accounts` or `DeploymentTargets`, but not both.
   *
   * @public
   */
  DeploymentTargets?: DeploymentTargets | undefined;

  /**
   * The names of one or more Amazon Web Services Regions where you want to create stack instances using the specified Amazon Web Services accounts.
   *
   * @public
   */
  Regions: string[] | undefined;

  /**
   * A list of StackSet parameters whose values you want to override in the selected stack instances.
   *
   * Any overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions. When specifying parameters and their values, be aware of how CloudFormation sets parameter values during stack instance operations:
   *
   * - To override the current value for a parameter, include the parameter and specify its value.
   * - To leave an overridden parameter set to its present value, include the parameter and specify `UsePreviousValue` as `true`. (You can't specify both a value and set `UsePreviousValue` to `true`.)
   * - To set an overridden parameter back to the value specified in the StackSet, specify a parameter list but don't include the parameter in the list.
   * - To leave all parameters set to their present values, don't specify this property at all.
   *
   * During StackSet updates, any parameter values overridden for a stack instance aren't updated, but retain their overridden value.
   *
   * You can only override the parameter *values* that are specified in the StackSet; to add or delete a parameter itself, use [UpdateStackSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html) to update the StackSet template.
   *
   * @public
   */
  ParameterOverrides?: Parameter[] | undefined;

  /**
   * Preferences for how CloudFormation performs this StackSet operation.
   *
   * @public
   */
  OperationPreferences?: StackSetOperationPreferences | undefined;

  /**
   * The unique identifier for this StackSet operation.
   *
   * The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the StackSet operation only once, even if you retry the request multiple times. You might retry StackSet operation requests to ensure that CloudFormation successfully received them.
   *
   * If you don't specify an operation ID, the SDK generates one automatically.
   *
   * Repeating this StackSet operation with a new operation ID retries all stack instances whose status is `OUTDATED`.
   *
   * @public
   */
  OperationId?: string | undefined;

  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * @public
 */
export interface CreateStackInstancesOutput {
  /**
   * The unique identifier for this StackSet operation.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * The location of the resource in a stack template.
 *
 * @public
 */
export interface ResourceLocation {
  /**
   * The name associated with the stack.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The logical name of the resource specified in the template.
   *
   * @public
   */
  LogicalResourceId: string | undefined;
}

/**
 * Specifies the current source of the resource and the destination of where it will be moved to.
 *
 * @public
 */
export interface ResourceMapping {
  /**
   * The source stack `StackName` and `LogicalResourceId` for the resource being refactored.
   *
   * @public
   */
  Source: ResourceLocation | undefined;

  /**
   * The destination stack `StackName` and `LogicalResourceId` for the resource being refactored.
   *
   * @public
   */
  Destination: ResourceLocation | undefined;
}

/**
 * Describes the stack and the template used by the stack.
 *
 * @public
 */
export interface StackDefinition {
  /**
   * The name associated with the stack.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * The file path for the stack template file.
   *
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * The desired final state of the stack template.
   *
   * @public
   */
  TemplateURL?: string | undefined;
}

/**
 * @public
 */
export interface CreateStackRefactorInput {
  /**
   * A description to help you identify the stack refactor.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Determines if a new stack is created with the refactor.
   *
   * @public
   */
  EnableStackCreation?: boolean | undefined;

  /**
   * The mappings for the stack resource `Source` and stack resource `Destination`.
   *
   * @public
   */
  ResourceMappings?: ResourceMapping[] | undefined;

  /**
   * The stacks being refactored.
   *
   * @public
   */
  StackDefinitions: StackDefinition[] | undefined;
}

/**
 * @public
 */
export interface CreateStackRefactorOutput {
  /**
   * The ID associated with the stack refactor created from the CreateStackRefactor action.
   *
   * @public
   */
  StackRefactorId: string | undefined;
}

/**
 * Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
 *
 * @public
 */
export interface ManagedExecution {
  /**
   * When `true`, CloudFormation performs non-conflicting operations concurrently and queues conflicting operations. After conflicting operations finish, CloudFormation starts queued operations in request order.
   *
   * > **Note:**
   * >
   * > If there are already running or queued operations, CloudFormation queues all incoming operations even if they are non-conflicting.
   * >
   * > You can't modify your StackSet's execution configuration while there are running or queued operations for that StackSet.
   *
   * When `false` (default), StackSets performs one operation at a time in request order.
   *
   * @public
   */
  Active?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateStackSetInput {
  /**
   * The name to associate with the StackSet. The name must be unique in the Region where you create your StackSet.
   *
   * > **Note:** A stack name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and can't be longer than 128 characters.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * A description of the StackSet. You can use the description to identify the StackSet's purpose or other important information.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.
   *
   * Conditional: You must specify either the `TemplateBody` or the `TemplateURL` parameter, but not both.
   *
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * The URL of a file that contains the template body. The URL must point to a template (maximum size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with `https://`. S3 static website URLs are not supported.
   *
   * Conditional: You must specify either the `TemplateBody` or the `TemplateURL` parameter, but not both.
   *
   * @public
   */
  TemplateURL?: string | undefined;

  /**
   * The stack ID you are importing into a new StackSet. Specify the Amazon Resource Name (ARN) of the stack.
   *
   * @public
   */
  StackId?: string | undefined;

  /**
   * The input parameters for the StackSet template.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * In some cases, you must explicitly acknowledge that your StackSet template contains certain capabilities in order for CloudFormation to create the StackSet and related stack instances.
   *
   * - `CAPABILITY_IAM` and `CAPABILITY_NAMED_IAM`
   *
   *   Some stack templates might include resources that can affect permissions in your Amazon Web Services account; for example, by creating new IAM users. For those StackSets, you must explicitly acknowledge this by specifying one of these capabilities.
   *
   *   The following IAM resources require you to specify either the `CAPABILITY_IAM` or `CAPABILITY_NAMED_IAM` capability.
   *
   *   - If you have IAM resources, you can specify either capability.
   *   - If you have IAM resources with custom names, you *must* specify `CAPABILITY_NAMED_IAM`.
   *   - If you don't specify either of these capabilities, CloudFormation returns an `InsufficientCapabilities` error.
   *
   *   If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.
   *
   *   - [AWS::IAM::AccessKey](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-accesskey.html)
   *   - [AWS::IAM::Group](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-group.html)
   *   - [AWS::IAM::InstanceProfile](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-instanceprofile.html)
   *   - [AWS::IAM::Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-policy.html)
   *   - [AWS::IAM::Role](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-role.html)
   *   - [AWS::IAM::User](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-user.html)
   *   - [AWS::IAM::UserToGroupAddition](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-usertogroupaddition.html)
   *
   *   For more information, see [Acknowledging IAM resources in CloudFormation templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities).
   * - `CAPABILITY_AUTO_EXPAND`
   *
   *   Some templates reference macros. If your StackSet template references one or more macros, you must create the StackSet directly from the processed template, without first reviewing the resulting changes in a change set. To create the StackSet directly, you must acknowledge this capability. For more information, see [Perform custom processing on CloudFormation templates with template macros](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html).
   *
   *   > **Important:** StackSets with service-managed permissions don't currently support the use of macros in templates. (This includes the [AWS::Include](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-include.html) and [AWS::Serverless](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html) transforms, which are macros hosted by CloudFormation.) Even if you specify this capability for a StackSet with service-managed permissions, if you reference a macro in your template the StackSet operation will fail.
   *
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * The key-value pairs to associate with this StackSet and the stacks created from it. CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.
   *
   * If you specify tags as part of a `CreateStackSet` action, CloudFormation checks to see if you have the required IAM permission to tag resources. If you don't, the entire `CreateStackSet` action fails with an `access denied` error, and the StackSet is not created.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to use to create this StackSet.
   *
   * Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific StackSets within the same administrator account. For more information, see [Grant self-managed permissions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html) in the *CloudFormation User Guide*.
   *
   * Valid only if the permissions model is `SELF_MANAGED`.
   *
   * @public
   */
  AdministrationRoleARN?: string | undefined;

  /**
   * The name of the IAM execution role to use to create the StackSet. If you do not specify an execution role, CloudFormation uses the `AWSCloudFormationStackSetExecutionRole` role for the StackSet operation.
   *
   * Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their StackSets.
   *
   * Valid only if the permissions model is `SELF_MANAGED`.
   *
   * @public
   */
  ExecutionRoleName?: string | undefined;

  /**
   * Describes how the IAM roles required for StackSet operations are created. By default, `SELF-MANAGED` is specified.
   *
   * - With `self-managed` permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see [Grant self-managed permissions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html).
   * - With `service-managed` permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by Organizations. For more information, see [Activate trusted access for StackSets with Organizations](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate-trusted-access.html).
   *
   * @public
   */
  PermissionModel?: PermissionModels | undefined;

  /**
   * Describes whether StackSets automatically deploys to Organizations accounts that are added to the target organization or organizational unit (OU). For more information, see [Enable or disable automatic deployments for StackSets in Organizations](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-manage-auto-deployment.html) in the *CloudFormation User Guide*.
   *
   * Required if the permissions model is `SERVICE_MANAGED`. (Not used with self-managed permissions.)
   *
   * @public
   */
  AutoDeployment?: AutoDeployment | undefined;

  /**
   * Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - To create a StackSet with service-managed permissions while signed in to the management account, specify `SELF`.
   * - To create a StackSet with service-managed permissions while signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated admin in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * StackSets with service-managed permissions are created in the management account, including StackSets that are created by delegated administrators.
   *
   * Valid only if the permissions model is `SERVICE_MANAGED`.
   *
   * @public
   */
  CallAs?: CallAs | undefined;

  /**
   * A unique identifier for this `CreateStackSet` request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to create another StackSet with the same name. You might retry `CreateStackSet` requests to ensure that CloudFormation successfully received them.
   *
   * If you don't specify an operation ID, the SDK generates one automatically.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Describes whether CloudFormation performs non-conflicting operations concurrently and queues conflicting operations.
   *
   * @public
   */
  ManagedExecution?: ManagedExecution | undefined;
}

/**
 * @public
 */
export interface CreateStackSetOutput {
  /**
   * The ID of the StackSet that you're creating.
   *
   * @public
   */
  StackSetId?: string | undefined;
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
   * The type name of the extension in this account and Region. If you specified a type name alias when enabling the extension, use the type name alias.
   *
   * Conditional: You must specify either `Arn`, or `TypeName` and `Type`.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The extension type.
   *
   * Conditional: You must specify either `Arn`, or `TypeName` and `Type`.
   *
   * @public
   */
  Type?: ThirdPartyType | undefined;

  /**
   * The Amazon Resource Name (ARN) for the extension in this account and Region.
   *
   * Conditional: You must specify either `Arn`, or `TypeName` and `Type`.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface DeactivateTypeOutput {}

/**
 * The input for the DeleteChangeSet action.
 *
 * @public
 */
export interface DeleteChangeSetInput {
  /**
   * The name or Amazon Resource Name (ARN) of the change set that you want to delete.
   *
   * @public
   */
  ChangeSetName: string | undefined;

  /**
   * If you specified the name of a change set to delete, specify the stack name or Amazon Resource Name (ARN) that's associated with it.
   *
   * @public
   */
  StackName?: string | undefined;
}

/**
 * The output for the DeleteChangeSet action.
 *
 * @public
 */
export interface DeleteChangeSetOutput {}

/**
 * @public
 */
export interface DeleteGeneratedTemplateInput {
  /**
   * The name or Amazon Resource Name (ARN) of a generated template.
   *
   * @public
   */
  GeneratedTemplateName: string | undefined;
}

/**
 * The input for DeleteStack action.
 *
 * @public
 */
export interface DeleteStackInput {
  /**
   * The name or the unique stack ID that's associated with the stack.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * For stacks in the `DELETE_FAILED` state, a list of resource logical IDs that are associated with the resources you want to retain. During deletion, CloudFormation deletes the stack but doesn't delete the retained resources.
   *
   * Retaining resources is useful when you can't delete a resource, such as a non-empty S3 bucket, but you want to delete the stack.
   *
   * @public
   */
  RetainResources?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to delete the stack. CloudFormation uses the role's credentials to make calls on your behalf.
   *
   * If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that's generated from your user credentials.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * A unique identifier for this `DeleteStack` request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to delete a stack with the same name. You might retry `DeleteStack` requests to ensure that CloudFormation successfully received them.
   *
   * All events initiated by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a `CreateStack` operation with the token `token1`, then all the `StackEvents` generated by that operation will have `ClientRequestToken` set as `token1`.
   *
   * In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format *Console-StackOperation-ID*, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: `Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002`.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Specifies the deletion mode for the stack. Possible values are:
   *
   * - `STANDARD` - Use the standard behavior. Specifying this value is the same as not specifying this parameter.
   * - `FORCE_DELETE_STACK` - Delete the stack if it's stuck in a `DELETE_FAILED` state due to resource deletion failure.
   *
   * @public
   */
  DeletionMode?: DeletionMode | undefined;

  /**
   * The deployment configuration for this stack operation, including the deployment mode.
   *
   * @public
   */
  DeploymentConfig?: DeploymentConfig | undefined;
}

/**
 * @public
 */
export interface DeleteStackInstancesInput {
  /**
   * The name or unique ID of the StackSet that you want to delete stack instances for.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * [Self-managed permissions] The account IDs of the Amazon Web Services accounts that you want to delete stack instances for.
   *
   * You can specify `Accounts` or `DeploymentTargets`, but not both.
   *
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * [Service-managed permissions] The Organizations accounts from which to delete stack instances.
   *
   * You can specify `Accounts` or `DeploymentTargets`, but not both.
   *
   * @public
   */
  DeploymentTargets?: DeploymentTargets | undefined;

  /**
   * The Amazon Web Services Regions where you want to delete StackSet instances.
   *
   * @public
   */
  Regions: string[] | undefined;

  /**
   * Preferences for how CloudFormation performs this StackSet operation.
   *
   * @public
   */
  OperationPreferences?: StackSetOperationPreferences | undefined;

  /**
   * Removes the stack instances from the specified StackSet, but doesn't delete the stacks. You can't reassociate a retained stack or add an existing, saved stack to a new stack set.
   *
   * For more information, see [StackSet operation options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options).
   *
   * @public
   */
  RetainStacks: boolean | undefined;

  /**
   * The unique identifier for this StackSet operation.
   *
   * If you don't specify an operation ID, the SDK generates one automatically.
   *
   * The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the StackSet operation only once, even if you retry the request multiple times. You can retry StackSet operation requests to ensure that CloudFormation successfully received them.
   *
   * Repeating this StackSet operation with a new operation ID retries all stack instances whose status is `OUTDATED`.
   *
   * @public
   */
  OperationId?: string | undefined;

  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * @public
 */
export interface DeleteStackInstancesOutput {
  /**
   * The unique identifier for this StackSet operation.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteStackSetInput {
  /**
   * The name or unique ID of the StackSet that you're deleting. You can obtain this value by running ListStackSets.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * @public
 */
export interface DeleteStackSetOutput {}

/**
 * @public
 */
export interface DeregisterTypeInput {
  /**
   * The Amazon Resource Name (ARN) of the extension.
   *
   * Conditional: You must specify either `TypeName` and `Type`, or `Arn`.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The kind of extension.
   *
   * Conditional: You must specify either `TypeName` and `Type`, or `Arn`.
   *
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * The name of the extension.
   *
   * Conditional: You must specify either `TypeName` and `Type`, or `Arn`.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the extension version when it is registered.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface DeregisterTypeOutput {}

/**
 * The input for the DescribeAccountLimits action.
 *
 * @public
 */
export interface DescribeAccountLimitsInput {
  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The output for the DescribeAccountLimits action.
 *
 * @public
 */
export interface DescribeAccountLimitsOutput {
  /**
   * An account limit structure that contain a list of CloudFormation account limits and their values.
   *
   * @public
   */
  AccountLimits?: AccountLimit[] | undefined;

  /**
   * If the output exceeds 1 MB in size, a string that identifies the next page of limits. If no additional page exists, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The input for the DescribeChangeSet action.
 *
 * @public
 */
export interface DescribeChangeSetInput {
  /**
   * The name or Amazon Resource Name (ARN) of the change set that you want to describe.
   *
   * @public
   */
  ChangeSetName: string | undefined;

  /**
   * If you specified the name of a change set, specify the stack name or ID (ARN) of the change set you want to describe.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * If `true`, the returned changes include detailed changes in the property values.
   *
   * @public
   */
  IncludePropertyValues?: boolean | undefined;
}

/**
 * The output for the DescribeChangeSet action.
 *
 * @public
 */
export interface DescribeChangeSetOutput {
  /**
   * The name of the change set.
   *
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the change set.
   *
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the stack that's associated with the change set.
   *
   * @public
   */
  StackId?: string | undefined;

  /**
   * The name of the stack that's associated with the change set.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * Information about the change set.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of `Parameter` structures that describes the input parameters and their values used to create the change set. For more information, see the [Parameter](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html) data type.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * The start time when the change set was created, in UTC.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * If the change set execution status is `AVAILABLE`, you can execute the change set. If you can't execute the change set, the status indicates why. For example, a change set might be in an `UNAVAILABLE` state because CloudFormation is still creating it or in an `OBSOLETE` state because the stack was already updated.
   *
   * @public
   */
  ExecutionStatus?: ExecutionStatus | undefined;

  /**
   * The current status of the change set, such as `CREATE_PENDING`, `CREATE_COMPLETE`, or `FAILED`.
   *
   * @public
   */
  Status?: ChangeSetStatus | undefined;

  /**
   * A description of the change set's status. For example, if your attempt to create a change set failed, CloudFormation shows the error message.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The drift status of the stack when the change set was created. Valid values:
   *
   * - `DRIFTED` – The stack has drifted from its last deployment.
   * - `IN_SYNC` – The stack is in sync with its last deployment.
   * - `NOT_CHECKED` – CloudFormation doesn’t currently return this value.
   * - `UNKNOWN` – The drift status could not be determined.
   *
   * Only present for drift-aware change sets.
   *
   * @public
   */
  StackDriftStatus?: StackDriftStatus | undefined;

  /**
   * The ARNs of the Amazon SNS topics that will be associated with the stack if you execute the change set.
   *
   * @public
   */
  NotificationARNs?: string[] | undefined;

  /**
   * The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
   *
   * @public
   */
  RollbackConfiguration?: RollbackConfiguration | undefined;

  /**
   * If you execute the change set, the list of capabilities that were explicitly acknowledged when the change set was created.
   *
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * If you execute the change set, the tags that will be associated with the stack.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A list of `Change` structures that describes the resources CloudFormation changes if you execute the change set.
   *
   * @public
   */
  Changes?: Change[] | undefined;

  /**
   * If the output exceeds 1 MB, a string that identifies the next page of changes. If there is no additional page, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Verifies if `IncludeNestedStacks` is set to `True`.
   *
   * @public
   */
  IncludeNestedStacks?: boolean | undefined;

  /**
   * Specifies the change set ID of the parent change set in the current nested change set hierarchy.
   *
   * @public
   */
  ParentChangeSetId?: string | undefined;

  /**
   * Specifies the change set ID of the root change set in the current nested change set hierarchy.
   *
   * @public
   */
  RootChangeSetId?: string | undefined;

  /**
   * Determines what action will be taken if stack creation fails. When this parameter is specified, the `DisableRollback` parameter to the [ExecuteChangeSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html) API operation must not be specified. This must be one of these values:
   *
   * - `DELETE` - Deletes the change set if the stack creation fails. This is only valid when the `ChangeSetType` parameter is set to `CREATE`. If the deletion of the stack fails, the status of the stack is `DELETE_FAILED`.
   * - `DO_NOTHING` - if the stack creation fails, do nothing. This is equivalent to specifying `true` for the `DisableRollback` parameter to the [ExecuteChangeSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html) API operation.
   * - `ROLLBACK` - if the stack creation fails, roll back the stack. This is equivalent to specifying `false` for the `DisableRollback` parameter to the [ExecuteChangeSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ExecuteChangeSet.html) API operation.
   *
   * @public
   */
  OnStackFailure?: OnStackFailure | undefined;

  /**
   * Indicates if the change set imports resources that already exist.
   *
   * > **Note:** This parameter can only import resources that have [custom names](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-properties-name.html) in templates. To import resources that do not accept custom names, such as EC2 instances, use the [resource import](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import.html) feature instead.
   *
   * @public
   */
  ImportExistingResources?: boolean | undefined;

  /**
   * The deployment mode specified when the change set was created. Valid value is `REVERT_DRIFT`. Only present for drift-aware change sets.
   *
   * @public
   */
  DeploymentMode?: DeploymentMode | undefined;

  /**
   * The deployment configuration specified when the change set was created.
   *
   * @public
   */
  DeploymentConfig?: DeploymentConfig | undefined;
}

/**
 * @public
 */
export interface DescribeChangeSetHooksInput {
  /**
   * The name or Amazon Resource Name (ARN) of the change set that you want to describe.
   *
   * @public
   */
  ChangeSetName: string | undefined;

  /**
   * If you specified the name of a change set, specify the stack name or stack ID (ARN) of the change set you want to describe.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * If specified, lists only the Hooks related to the specified `LogicalResourceId`.
   *
   * @public
   */
  LogicalResourceId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeChangeSetHooksOutput {
  /**
   * The change set identifier (stack ID).
   *
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * The change set name.
   *
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * List of Hook objects.
   *
   * @public
   */
  Hooks?: ChangeSetHook[] | undefined;

  /**
   * Provides the status of the change set Hook.
   *
   * @public
   */
  Status?: ChangeSetHooksStatus | undefined;

  /**
   * Pagination token, `null` or empty if no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The stack identifier (stack ID).
   *
   * @public
   */
  StackId?: string | undefined;

  /**
   * The stack name.
   *
   * @public
   */
  StackName?: string | undefined;
}

/**
 * Event filter allows you to focus on specific events in an operation.
 *
 * @public
 */
export interface EventFilter {
  /**
   * When set to true, only returns failed events within the operation. This helps quickly identify root causes for a failed operation.
   *
   * @public
   */
  FailedEvents?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeEventsInput {
  /**
   * The name or unique stack ID for which you want to retrieve events. If you specified the name of a change set, specify the stack name or ID (ARN) of the change set you want to describe.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the change set for which you want to retrieve events.
   *
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * The unique identifier of the operation for which you want to retrieve events.
   *
   * @public
   */
  OperationId?: string | undefined;

  /**
   * Filters to apply when retrieving events.
   *
   * @public
   */
  Filters?: EventFilter | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains detailed information about an event that occurred during a CloudFormation operation.
 *
 * @public
 */
export interface OperationEvent {
  /**
   * A unique identifier for this event.
   *
   * @public
   */
  EventId?: string | undefined;

  /**
   * The unique ID name of the instance of the stack.
   *
   * @public
   */
  StackId?: string | undefined;

  /**
   * The unique identifier of the operation this event belongs to.
   *
   * @public
   */
  OperationId?: string | undefined;

  /**
   * The type of operation.
   *
   * @public
   */
  OperationType?: OperationType | undefined;

  /**
   * The current status of the operation.
   *
   * @public
   */
  OperationStatus?: BeaconStackOperationStatus | undefined;

  /**
   * The type of event.
   *
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * The logical name of the resource as specified in the template.
   *
   * @public
   */
  LogicalResourceId?: string | undefined;

  /**
   * The name or unique identifier that corresponds to a physical instance ID of a resource.
   *
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * Type of resource.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Time the status was updated.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The time when the event started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time when the event ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Current status of the resource.
   *
   * @public
   */
  ResourceStatus?: ResourceStatus | undefined;

  /**
   * Success or failure message associated with the resource.
   *
   * @public
   */
  ResourceStatusReason?: string | undefined;

  /**
   * The properties used to create the resource.
   *
   * @public
   */
  ResourceProperties?: string | undefined;

  /**
   * A unique identifier for the request that initiated this operation.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The type name of the Hook that was invoked.
   *
   * @public
   */
  HookType?: string | undefined;

  /**
   * The status of the Hook invocation.
   *
   * @public
   */
  HookStatus?: HookStatus | undefined;

  /**
   * Additional information about the Hook status.
   *
   * @public
   */
  HookStatusReason?: string | undefined;

  /**
   * The point in the operation lifecycle when the Hook was invoked.
   *
   * @public
   */
  HookInvocationPoint?: HookInvocationPoint | undefined;

  /**
   * Specifies how Hook failures are handled.
   *
   * @public
   */
  HookFailureMode?: HookFailureMode | undefined;

  /**
   * Additional status information about the operation.
   *
   * @public
   */
  DetailedStatus?: DetailedStatus | undefined;

  /**
   * Specifies how validation failures are handled.
   *
   * @public
   */
  ValidationFailureMode?: HookFailureMode | undefined;

  /**
   * The name of the validation that was performed.
   *
   * @public
   */
  ValidationName?: string | undefined;

  /**
   * The status of the validation.
   *
   * @public
   */
  ValidationStatus?: ValidationStatus | undefined;

  /**
   * Additional information about the validation status.
   *
   * @public
   */
  ValidationStatusReason?: string | undefined;

  /**
   * The path within the resource where the validation was applied.
   *
   * @public
   */
  ValidationPath?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventsOutput {
  /**
   * A list of operation events that match the specified criteria.
   *
   * @public
   */
  OperationEvents?: OperationEvent[] | undefined;

  /**
   * If the request doesn't return all the remaining results, `NextToken` is set to a token. To retrieve the next set of results, call `DescribeEvents` again and assign that token to the request object's `NextToken` parameter. If the request returns all results, `NextToken` is set to `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGeneratedTemplateInput {
  /**
   * The name or Amazon Resource Name (ARN) of a generated template.
   *
   * @public
   */
  GeneratedTemplateName: string | undefined;
}

/**
 * A summary of the progress of the template generation.
 *
 * @public
 */
export interface TemplateProgress {
  /**
   * The number of resources that succeeded the template generation.
   *
   * @public
   */
  ResourcesSucceeded?: number | undefined;

  /**
   * The number of resources that failed the template generation.
   *
   * @public
   */
  ResourcesFailed?: number | undefined;

  /**
   * The number of resources that are in-process for the template generation.
   *
   * @public
   */
  ResourcesProcessing?: number | undefined;

  /**
   * The number of resources that are still pending the template generation.
   *
   * @public
   */
  ResourcesPending?: number | undefined;
}

/**
 * A specific property that is impacted by a warning.
 *
 * @public
 */
export interface WarningProperty {
  /**
   * The path of the property. For example, if this is for the `S3Bucket` member of the `Code` property, the property path would be `Code/S3Bucket`.
   *
   * @public
   */
  PropertyPath?: string | undefined;

  /**
   * If `true`, the specified property is required.
   *
   * @public
   */
  Required?: boolean | undefined;

  /**
   * The description of the property from the resource provider schema.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * The warnings generated for a specific resource for this generated template.
 *
 * @public
 */
export interface WarningDetail {
  /**
   * The type of this warning. For more information, see [Resolve write-only properties](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/generate-IaC-write-only-properties.html) in the *CloudFormation User Guide*.
   *
   * - `MUTUALLY_EXCLUSIVE_PROPERTIES` - The resource requires mutually-exclusive write-only properties. The IaC generator selects one set of mutually exclusive properties and converts the included properties into parameters. The parameter names have a suffix `OneOf` and the parameter descriptions indicate that the corresponding property can be replaced with other exclusive properties.
   * - `UNSUPPORTED_PROPERTIES` - Unsupported properties are present in the resource. One example of unsupported properties would be a required write-only property that is an array, because a parameter cannot be an array. Another example is an optional write-only property.
   * - `MUTUALLY_EXCLUSIVE_TYPES` - One or more required write-only properties are found in the resource, and the type of that property can be any of several types.
   *
   * > **Note:** Currently the resource and property reference documentation does not indicate if a property uses a type of `oneOf` or `anyOf`. You need to look at the resource provider schema.
   *
   * @public
   */
  Type?: WarningType | undefined;

  /**
   * The properties of the resource that are impacted by this warning.
   *
   * @public
   */
  Properties?: WarningProperty[] | undefined;
}

/**
 * Details about a resource in a generated template
 *
 * @public
 */
export interface ResourceDetail {
  /**
   * The type of the resource, such as `AWS::DynamoDB::Table`. For the list of supported resources, see [Resource type support for imports and drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html) In the *CloudFormation User Guide*
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The logical id for this resource in the final generated template.
   *
   * @public
   */
  LogicalResourceId?: string | undefined;

  /**
   * A list of up to 256 key-value pairs that identifies the resource in the generated template. The key is the name of one of the primary identifiers for the resource. (Primary identifiers are specified in the `primaryIdentifier` list in the resource schema.) The value is the value of that primary identifier. For example, for a `AWS::DynamoDB::Table` resource, the primary identifiers is `TableName` so the key-value pair could be `"TableName": "MyDDBTable"`. For more information, see [primaryIdentifier](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-primaryidentifier) in the *CloudFormation Command Line Interface (CLI) User Guide*.
   *
   * @public
   */
  ResourceIdentifier?: Record<string, string> | undefined;

  /**
   * Status of the processing of a resource in a generated template.
   *
   * - **InProgress**
   *
   *   The resource processing is still in progress.
   *
   * - **Complete**
   *
   *   The resource processing is complete.
   *
   * - **Pending**
   *
   *   The resource processing is pending.
   *
   * - **Failed**
   *
   *   The resource processing has failed.
   *
   * @public
   */
  ResourceStatus?: GeneratedTemplateResourceStatus | undefined;

  /**
   * The reason for the resource detail, providing more information if a failure happened.
   *
   * @public
   */
  ResourceStatusReason?: string | undefined;

  /**
   * The warnings generated for this resource.
   *
   * @public
   */
  Warnings?: WarningDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribeGeneratedTemplateOutput {
  /**
   * The Amazon Resource Name (ARN) of the generated template. The format is `arn:$\{Partition\}:cloudformation:$\{Region\}:$\{Account\}:generatedtemplate/$\{Id\}`. For example, `arn:aws:cloudformation:us-east-1:123456789012:generatedtemplate/2e8465c1-9a80-43ea-a3a3-4f2d692fe6dc`.
   *
   * @public
   */
  GeneratedTemplateId?: string | undefined;

  /**
   * The name of the generated template.
   *
   * @public
   */
  GeneratedTemplateName?: string | undefined;

  /**
   * A list of objects describing the details of the resources in the template generation.
   *
   * @public
   */
  Resources?: ResourceDetail[] | undefined;

  /**
   * The status of the template generation. Supported values are:
   *
   * - `CreatePending` - the creation of the template is pending.
   * - `CreateInProgress` - the creation of the template is in progress.
   * - `DeletePending` - the deletion of the template is pending.
   * - `DeleteInProgress` - the deletion of the template is in progress.
   * - `UpdatePending` - the update of the template is pending.
   * - `UpdateInProgress` - the update of the template is in progress.
   * - `Failed` - the template operation failed.
   * - `Complete` - the template operation is complete.
   *
   * @public
   */
  Status?: GeneratedTemplateStatus | undefined;

  /**
   * The reason for the current template generation status. This will provide more details if a failure happened.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The time the generated template was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time the generated template was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * An object describing the progress of the template generation.
   *
   * @public
   */
  Progress?: TemplateProgress | undefined;

  /**
   * The stack ARN of the base stack if a base stack was provided when generating the template.
   *
   * @public
   */
  StackId?: string | undefined;

  /**
   * The configuration details of the generated template, including the `DeletionPolicy` and `UpdateReplacePolicy`.
   *
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;

  /**
   * The number of warnings generated for this template. The warnings are found in the details of each of the resources in the template.
   *
   * @public
   */
  TotalWarnings?: number | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationsAccessInput {
  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationsAccessOutput {
  /**
   * Presents the status of the `OrganizationAccess`.
   *
   * @public
   */
  Status?: OrganizationStatus | undefined;
}

/**
 * @public
 */
export interface DescribePublisherInput {
  /**
   * The ID of the extension publisher.
   *
   * If you don't supply a `PublisherId`, and you have registered as an extension publisher, `DescribePublisher` returns information about your own publisher account.
   *
   * @public
   */
  PublisherId?: string | undefined;
}

/**
 * @public
 */
export interface DescribePublisherOutput {
  /**
   * The ID of the extension publisher.
   *
   * @public
   */
  PublisherId?: string | undefined;

  /**
   * Whether the publisher is verified. Currently, all registered publishers are verified.
   *
   * @public
   */
  PublisherStatus?: PublisherStatus | undefined;

  /**
   * The type of account used as the identity provider when registering this publisher with CloudFormation.
   *
   * @public
   */
  IdentityProvider?: IdentityProvider | undefined;

  /**
   * The URL to the publisher's profile with the identity provider.
   *
   * @public
   */
  PublisherProfile?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourceScanInput {
  /**
   * The Amazon Resource Name (ARN) of the resource scan.
   *
   * @public
   */
  ResourceScanId: string | undefined;
}

/**
 * A filter that is used to specify which resource types to scan.
 *
 * @public
 */
export interface ScanFilter {
  /**
   * An array of strings where each string represents an Amazon Web Services resource type you want to scan. Each string defines the resource type using the format `AWS::ServiceName::ResourceType`, for example, `AWS::DynamoDB::Table`. For the full list of supported resource types, see the [Resource type support](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html) table in the *CloudFormation User Guide*.
   *
   * To scan all resource types within a service, you can use a wildcard, represented by an asterisk (`*`). You can place an asterisk at only the end of the string, for example, `AWS::S3::*`.
   *
   * @public
   */
  Types?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeResourceScanOutput {
  /**
   * The Amazon Resource Name (ARN) of the resource scan. The format is `arn:$\{Partition\}:cloudformation:$\{Region\}:$\{Account\}:resourceScan/$\{Id\}`. An example is `arn:aws:cloudformation:us-east-1:123456789012:resourceScan/f5b490f7-7ed4-428a-aa06-31ff25db0772`.
   *
   * @public
   */
  ResourceScanId?: string | undefined;

  /**
   * Status of the resource scan.
   *
   * - **IN_PROGRESS**
   *
   *   The resource scan is still in progress.
   *
   * - **COMPLETE**
   *
   *   The resource scan is complete.
   *
   * - **EXPIRED**
   *
   *   The resource scan has expired.
   *
   * - **FAILED**
   *
   *   The resource scan has failed.
   *
   * @public
   */
  Status?: ResourceScanStatus | undefined;

  /**
   * The reason for the resource scan status, providing more information if a failure happened.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The time that the resource scan was started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time that the resource scan was finished.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The percentage of the resource scan that has been completed.
   *
   * @public
   */
  PercentageCompleted?: number | undefined;

  /**
   * The list of resource types for the specified scan. Resource types are only available for scans with a `Status` set to `COMPLETE` or `FAILED`.
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * The number of resources that were listed. This is only available for scans with a `Status` set to `COMPLETE`, `EXPIRED`, or `FAILED`.
   *
   * @public
   */
  ResourcesScanned?: number | undefined;

  /**
   * The number of resources that were read. This is only available for scans with a `Status` set to `COMPLETE`, `EXPIRED`, or `FAILED`.
   *
   * > **Note:** This field may be 0 if the resource scan failed with a `ResourceScanLimitExceededException`.
   *
   * @public
   */
  ResourcesRead?: number | undefined;

  /**
   * The scan filters that were used.
   *
   * @public
   */
  ScanFilters?: ScanFilter[] | undefined;
}

/**
 * @public
 */
export interface DescribeStackDriftDetectionStatusInput {
  /**
   * The ID of the drift detection results of this operation.
   *
   * CloudFormation generates new results, with a new drift detection ID, each time this operation is run. However, the number of drift results CloudFormation retains for any given stack, and for how long, may vary.
   *
   * @public
   */
  StackDriftDetectionId: string | undefined;
}

/**
 * @public
 */
export interface DescribeStackDriftDetectionStatusOutput {
  /**
   * The ID of the stack.
   *
   * @public
   */
  StackId: string | undefined;

  /**
   * The ID of the drift detection results of this operation.
   *
   * CloudFormation generates new results, with a new drift detection ID, each time this operation is run. However, the number of reports CloudFormation retains for any given stack, and for how long, may vary.
   *
   * @public
   */
  StackDriftDetectionId: string | undefined;

  /**
   * Status of the stack's actual configuration compared to its expected configuration.
   *
   * - `DRIFTED`: The stack differs from its expected template configuration. A stack is considered to have drifted if one or more of its resources have drifted.
   * - `NOT_CHECKED`: CloudFormation hasn't checked if the stack differs from its expected template configuration.
   * - `IN_SYNC`: The stack's actual configuration matches its expected template configuration.
   * - `UNKNOWN`: CloudFormation could not run drift detection for a resource in the stack. See the `DetectionStatusReason` for details.
   *
   * @public
   */
  StackDriftStatus?: StackDriftStatus | undefined;

  /**
   * The status of the stack drift detection operation.
   *
   * - `DETECTION_COMPLETE`: The stack drift detection operation has successfully completed for all resources in the stack that support drift detection. (Resources that don't currently support stack detection remain unchecked.)
   *
   *   If you specified logical resource IDs for CloudFormation to use as a filter for the stack drift detection operation, only the resources with those logical IDs are checked for drift.
   * - `DETECTION_FAILED`: The stack drift detection operation has failed for at least one resource in the stack. Results will be available for resources on which CloudFormation successfully completed drift detection.
   * - `DETECTION_IN_PROGRESS`: The stack drift detection operation is currently in progress.
   *
   * @public
   */
  DetectionStatus: StackDriftDetectionStatus | undefined;

  /**
   * The reason the stack drift detection operation has its current status.
   *
   * @public
   */
  DetectionStatusReason?: string | undefined;

  /**
   * Total number of stack resources that have drifted. This is NULL until the drift detection operation reaches a status of `DETECTION_COMPLETE`. This value will be 0 for stacks whose drift status is `IN_SYNC`.
   *
   * @public
   */
  DriftedStackResourceCount?: number | undefined;

  /**
   * Time at which the stack drift detection operation was initiated.
   *
   * @public
   */
  Timestamp: Date | undefined;
}

/**
 * The input for DescribeStackEvents action.
 *
 * @public
 */
export interface DescribeStackEventsInput {
  /**
   * The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:
   *
   * - Running stacks: You can specify either the stack's name or its unique stack ID.
   * - Deleted stacks: You must specify the unique stack ID.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The `StackEvent` data type.
 *
 * @public
 */
export interface StackEvent {
  /**
   * The unique ID name of the instance of the stack.
   *
   * @public
   */
  StackId: string | undefined;

  /**
   * The unique identifier of this event.
   *
   * @public
   */
  EventId: string | undefined;

  /**
   * The name associated with a stack.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The unique identifier of the operation that generated this stack event.
   *
   * @public
   */
  OperationId?: string | undefined;

  /**
   * The logical name of the resource specified in the template.
   *
   * @public
   */
  LogicalResourceId?: string | undefined;

  /**
   * The name or unique identifier associated with the physical instance of the resource.
   *
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * Type of resource. For more information, see [Amazon Web Services resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Time the status was updated.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * Current status of the resource.
   *
   * @public
   */
  ResourceStatus?: ResourceStatus | undefined;

  /**
   * Success/failure message associated with the resource.
   *
   * @public
   */
  ResourceStatusReason?: string | undefined;

  /**
   * BLOB of the properties used to create the resource.
   *
   * @public
   */
  ResourceProperties?: string | undefined;

  /**
   * The token passed to the operation that generated this event.
   *
   * All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a `CreateStack` operation with the token `token1`, then all the `StackEvents` generated by that operation will have `ClientRequestToken` set as `token1`.
   *
   * In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format *Console-StackOperation-ID*, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: `Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002`.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The name of the Hook.
   *
   * @public
   */
  HookType?: string | undefined;

  /**
   * Provides the status of the change set Hook.
   *
   * @public
   */
  HookStatus?: HookStatus | undefined;

  /**
   * Provides the reason for the Hook status.
   *
   * @public
   */
  HookStatusReason?: string | undefined;

  /**
   * The specific point in the provisioning process where the Hook is invoked.
   *
   * @public
   */
  HookInvocationPoint?: HookInvocationPoint | undefined;

  /**
   * The unique identifier of the Hook invocation.
   *
   * @public
   */
  HookInvocationId?: string | undefined;

  /**
   * Specify the Hook failure mode for non-compliant resources in the followings ways.
   *
   * - `FAIL` Stops provisioning resources.
   * - `WARN` Allows provisioning to continue with a warning message.
   *
   * @public
   */
  HookFailureMode?: HookFailureMode | undefined;

  /**
   * An optional field that contains information about the detailed status of the stack event.
   *
   * - `CONFIGURATION_COMPLETE` - all of the resources in the stack have reached that event. For more information, see [Understand CloudFormation stack creation events](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stack-resource-configuration-complete.html) in the *CloudFormation User Guide*.
   *
   * - `VALIDATION_FAILED` - template validation failed because of invalid properties in the template. The `ResourceStatusReason` field shows what properties are defined incorrectly.
   *
   * @public
   */
  DetailedStatus?: DetailedStatus | undefined;
}

/**
 * The output for a DescribeStackEvents action.
 *
 * @public
 */
export interface DescribeStackEventsOutput {
  /**
   * A list of `StackEvents` structures.
   *
   * @public
   */
  StackEvents?: StackEvent[] | undefined;

  /**
   * If the output exceeds 1 MB in size, a string that identifies the next page of events. If no additional page exists, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStackInstanceInput {
  /**
   * The name or the unique stack ID of the StackSet that you want to get stack instance information for.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * The ID of an Amazon Web Services account that's associated with this stack instance.
   *
   * @public
   */
  StackInstanceAccount: string | undefined;

  /**
   * The name of a Region that's associated with this stack instance.
   *
   * @public
   */
  StackInstanceRegion: string | undefined;

  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * The detailed status of the stack instance.
 *
 * @public
 */
export interface StackInstanceComprehensiveStatus {
  /**
   * - `CANCELLED`: The operation in the specified account and Region has been canceled. This is either because a user has stopped the StackSet operation, or because the failure tolerance of the StackSet operation has been exceeded.
   * - `FAILED`: The operation in the specified account and Region failed. If the StackSet operation fails in enough accounts within a Region, the failure tolerance for the StackSet operation as a whole might be exceeded.
   * - `FAILED_IMPORT`: The import of the stack instance in the specified account and Region failed and left the stack in an unstable state. Once the issues causing the failure are fixed, the import operation can be retried. If enough StackSet operations fail in enough accounts within a Region, the failure tolerance for the StackSet operation as a whole might be exceeded.
   * - `INOPERABLE`: A `DeleteStackInstances` operation has failed and left the stack in an unstable state. Stacks in this state are excluded from further `UpdateStackSet` operations. You might need to perform a `DeleteStackInstances` operation, with `RetainStacks` set to `true`, to delete the stack instance, and then delete the stack manually.
   * - `PENDING`: The operation in the specified account and Region has yet to start.
   * - `RUNNING`: The operation in the specified account and Region is currently in progress.
   * - `SKIPPED_SUSPENDED_ACCOUNT`: The operation in the specified account and Region has been skipped because the account was suspended at the time of the operation.
   * - `SUCCEEDED`: The operation in the specified account and Region completed successfully.
   *
   * @public
   */
  DetailedStatus?: StackInstanceDetailedStatus | undefined;
}

/**
 * A CloudFormation stack, in a specific account and Region, that's part of a StackSet operation. A stack instance is a reference to an attempted or actual stack in a given account within a given Region. A stack instance can exist without a stack—for example, if the stack couldn't be created for some reason. A stack instance is associated with only one StackSet. Each stack instance contains the ID of its associated StackSet, in addition to the ID of the actual stack and the stack status.
 *
 * @public
 */
export interface StackInstance {
  /**
   * The name or unique ID of the StackSet that the stack instance is associated with.
   *
   * @public
   */
  StackSetId?: string | undefined;

  /**
   * The name of the Amazon Web Services Region that the stack instance is associated with.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * [Self-managed permissions] The name of the Amazon Web Services account that the stack instance is associated with.
   *
   * @public
   */
  Account?: string | undefined;

  /**
   * The ID of the stack instance.
   *
   * @public
   */
  StackId?: string | undefined;

  /**
   * A list of parameters from the StackSet template whose values have been overridden in this stack instance.
   *
   * @public
   */
  ParameterOverrides?: Parameter[] | undefined;

  /**
   * The status of the stack instance, in terms of its synchronization with its associated stack set.
   *
   * - `INOPERABLE`: A `DeleteStackInstances` operation has failed and left the stack in an unstable state. Stacks in this state are excluded from further `UpdateStackSet` operations. You might need to perform a `DeleteStackInstances` operation, with `RetainStacks` set to `true`, to delete the stack instance, and then delete the stack manually. `INOPERABLE` can be returned here when the cause is a failed import. If it's due to a failed import, the operation can be retried once the failures are fixed. To see if this is due to a failed import, look at the `DetailedStatus` member in the `StackInstanceSummary` member that is a peer to this `Status` member.
   * - `OUTDATED`: The stack isn't currently up to date with the StackSet because:
   *
   *   - The associated stack failed during a `CreateStackSet` or `UpdateStackSet` operation.
   *   - The stack was part of a `CreateStackSet` or `UpdateStackSet` operation that failed or was stopped before the stack was created or updated.
   * - `CURRENT`: The stack is currently up to date with the StackSet.
   *
   * @public
   */
  Status?: StackInstanceStatus | undefined;

  /**
   * The detailed status of the stack instance.
   *
   * @public
   */
  StackInstanceStatus?: StackInstanceComprehensiveStatus | undefined;

  /**
   * The explanation for the specific status code that's assigned to this stack instance.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * [Service-managed permissions] The organization root ID or organizational unit (OU) IDs that you specified for [DeploymentTargets](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html).
   *
   * @public
   */
  OrganizationalUnitId?: string | undefined;

  /**
   * Status of the stack instance's actual configuration compared to the expected template and parameter configuration of the StackSet it belongs to.
   *
   * - `DRIFTED`: The stack differs from the expected template and parameter configuration of the StackSet it belongs to. A stack instance is considered to have drifted if one or more of the resources in the associated stack have drifted.
   * - `NOT_CHECKED`: CloudFormation hasn't checked if the stack instance differs from its expected StackSet configuration.
   * - `IN_SYNC`: The stack instance's actual configuration matches its expected StackSset configuration.
   * - `UNKNOWN`: This value is reserved for future use.
   *
   * @public
   */
  DriftStatus?: StackDriftStatus | undefined;

  /**
   * Most recent time when CloudFormation performed a drift detection operation on the stack instance. This value will be `NULL` for any stack instance that drift detection hasn't yet been performed on.
   *
   * @public
   */
  LastDriftCheckTimestamp?: Date | undefined;

  /**
   * The last unique ID of a StackSet operation performed on a stack instance.
   *
   * @public
   */
  LastOperationId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStackInstanceOutput {
  /**
   * The stack instance that matches the specified request parameters.
   *
   * @public
   */
  StackInstance?: StackInstance | undefined;
}

/**
 * @public
 */
export interface DescribeStackRefactorInput {
  /**
   * The ID associated with the stack refactor created from the CreateStackRefactor action.
   *
   * @public
   */
  StackRefactorId: string | undefined;
}

/**
 * @public
 */
export interface DescribeStackRefactorOutput {
  /**
   * A description to help you identify the refactor.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID associated with the stack refactor created from the CreateStackRefactor action.
   *
   * @public
   */
  StackRefactorId?: string | undefined;

  /**
   * The unique ID for each stack.
   *
   * @public
   */
  StackIds?: string[] | undefined;

  /**
   * The stack refactor execution operation status that's provided after calling the ExecuteStackRefactor action.
   *
   * @public
   */
  ExecutionStatus?: StackRefactorExecutionStatus | undefined;

  /**
   * A detailed explanation for the stack refactor `ExecutionStatus`.
   *
   * @public
   */
  ExecutionStatusReason?: string | undefined;

  /**
   * The stack refactor operation status that's provided after calling the CreateStackRefactor action.
   *
   * @public
   */
  Status?: StackRefactorStatus | undefined;

  /**
   * A detailed explanation for the stack refactor operation `Status`.
   *
   * @public
   */
  StatusReason?: string | undefined;
}

/**
 * The input for DescribeStackResource action.
 *
 * @public
 */
export interface DescribeStackResourceInput {
  /**
   * The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:
   *
   * - Running stacks: You can specify either the stack's name or its unique stack ID.
   * - Deleted stacks: You must specify the unique stack ID.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The logical name of the resource as specified in the template.
   *
   * @public
   */
  LogicalResourceId: string | undefined;
}

/**
 * Contains information about whether the resource's actual configuration differs, or has *drifted*, from its expected configuration.
 *
 * @public
 */
export interface StackResourceDriftInformation {
  /**
   * Status of the resource's actual configuration compared to its expected configuration
   *
   * - `DELETED`: The resource differs from its expected configuration in that it has been deleted.
   * - `MODIFIED`: The resource differs from its expected configuration.
   * - `NOT_CHECKED`: CloudFormation has not checked if the resource differs from its expected configuration.
   *
   *   Any resources that do not currently support drift detection have a status of `NOT_CHECKED`. For more information, see [Resource type support for imports and drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html).
   * - `IN_SYNC`: The resource's actual configuration matches its expected configuration.
   *
   * @public
   */
  StackResourceDriftStatus: StackResourceDriftStatus | undefined;

  /**
   * When CloudFormation last checked if the resource had drifted from its expected configuration.
   *
   * @public
   */
  LastCheckTimestamp?: Date | undefined;
}

/**
 * Contains detailed information about the specified stack resource.
 *
 * @public
 */
export interface StackResourceDetail {
  /**
   * The name associated with the stack.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * Unique identifier of the stack.
   *
   * @public
   */
  StackId?: string | undefined;

  /**
   * The logical name of the resource specified in the template.
   *
   * @public
   */
  LogicalResourceId: string | undefined;

  /**
   * The name or unique identifier that corresponds to a physical instance ID of a resource supported by CloudFormation.
   *
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * Type of resource. For more information, see [Amazon Web Services resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * Time the status was updated.
   *
   * @public
   */
  LastUpdatedTimestamp: Date | undefined;

  /**
   * Current status of the resource.
   *
   * @public
   */
  ResourceStatus: ResourceStatus | undefined;

  /**
   * Success/failure message associated with the resource.
   *
   * @public
   */
  ResourceStatusReason?: string | undefined;

  /**
   * User defined description associated with the resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The content of the `Metadata` attribute declared for the resource. For more information, see [Metadata attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-metadata.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  Metadata?: string | undefined;

  /**
   * Information about whether the resource's actual configuration differs, or has *drifted*, from its expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see [Detect unmanaged configuration changes to stacks and resources with drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html).
   *
   * @public
   */
  DriftInformation?: StackResourceDriftInformation | undefined;

  /**
   * Contains information about the module from which the resource was created, if the resource was created from a module included in the stack template.
   *
   * @public
   */
  ModuleInfo?: ModuleInfo | undefined;
}

/**
 * The output for a DescribeStackResource action.
 *
 * @public
 */
export interface DescribeStackResourceOutput {
  /**
   * A `StackResourceDetail` structure that contains the description of the specified resource in the specified stack.
   *
   * @public
   */
  StackResourceDetail?: StackResourceDetail | undefined;
}

/**
 * @public
 */
export interface DescribeStackResourceDriftsInput {
  /**
   * The name of the stack for which you want drift information.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The resource drift status values to use as filters for the resource drift results returned.
   *
   * - `DELETED`: The resource differs from its expected template configuration in that the resource has been deleted.
   * - `MODIFIED`: One or more resource properties differ from their expected template values.
   * - `IN_SYNC`: The resource's actual configuration matches its expected template configuration.
   * - `NOT_CHECKED`: CloudFormation doesn't currently return this value.
   * - `UNKNOWN`: CloudFormation could not run drift detection for the resource.
   *
   * @public
   */
  StackResourceDriftStatusFilters?: StackResourceDriftStatus[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can assign to the `NextToken` request parameter to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Context information that enables CloudFormation to uniquely identify a resource. CloudFormation uses context key-value pairs in cases where a resource's logical and physical IDs aren't enough to uniquely identify that resource. Each context key-value pair specifies a resource that contains the targeted resource.
 *
 * @public
 */
export interface PhysicalResourceIdContextKeyValuePair {
  /**
   * The resource context key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The resource context value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Information about a resource property whose actual value differs from its expected value, as defined in the stack template and any values specified as template parameters. These will be present only for resources whose `StackResourceDriftStatus` is `MODIFIED`. For more information, see [Detect unmanaged configuration changes to stacks and resources with drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html).
 *
 * @public
 */
export interface PropertyDifference {
  /**
   * The fully-qualified path to the resource property.
   *
   * @public
   */
  PropertyPath: string | undefined;

  /**
   * The expected property value of the resource property, as defined in the stack template and any values specified as template parameters.
   *
   * @public
   */
  ExpectedValue: string | undefined;

  /**
   * The actual property value of the resource property.
   *
   * @public
   */
  ActualValue: string | undefined;

  /**
   * The type of property difference.
   *
   * - `ADD`: A value has been added to a resource property that's an array or list data type.
   * - `REMOVE`: The property has been removed from the current resource configuration.
   * - `NOT_EQUAL`: The current property value differs from its expected value (as defined in the stack template and any values specified as template parameters).
   *
   * @public
   */
  DifferenceType: DifferenceType | undefined;
}

/**
 * Contains the drift information for a resource that has been checked for drift. This includes actual and expected property values for resources in which CloudFormation has detected drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information, see [Detect unmanaged configuration changes to stacks and resources with drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html).
 *
 * Resources that don't currently support drift detection can't be checked. For a list of resources that support drift detection, see [Resource type support for imports and drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html).
 *
 * Use DetectStackResourceDrift to detect drift on individual resources, or DetectStackDrift to detect drift on all resources in a given stack that support drift detection.
 *
 * @public
 */
export interface StackResourceDrift {
  /**
   * The ID of the stack.
   *
   * @public
   */
  StackId: string | undefined;

  /**
   * The logical name of the resource specified in the template.
   *
   * @public
   */
  LogicalResourceId: string | undefined;

  /**
   * The name or unique identifier that corresponds to a physical instance ID of a resource supported by CloudFormation.
   *
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * Context information that enables CloudFormation to uniquely identify a resource. CloudFormation uses context key-value pairs in cases where a resource's logical and physical IDs aren't enough to uniquely identify that resource. Each context key-value pair specifies a unique resource that contains the targeted resource.
   *
   * @public
   */
  PhysicalResourceIdContext?: PhysicalResourceIdContextKeyValuePair[] | undefined;

  /**
   * The type of the resource.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * A JSON structure that contains the expected property values of the stack resource, as defined in the stack template and any values specified as template parameters.
   *
   * For resources whose `StackResourceDriftStatus` is `DELETED`, this structure will not be present.
   *
   * @public
   */
  ExpectedProperties?: string | undefined;

  /**
   * A JSON structure that contains the actual property values of the stack resource.
   *
   * For resources whose `StackResourceDriftStatus` is `DELETED`, this structure will not be present.
   *
   * @public
   */
  ActualProperties?: string | undefined;

  /**
   * A collection of the resource properties whose actual values differ from their expected values. These will be present only for resources whose `StackResourceDriftStatus` is `MODIFIED`.
   *
   * @public
   */
  PropertyDifferences?: PropertyDifference[] | undefined;

  /**
   * Status of the resource's actual configuration compared to its expected configuration.
   *
   * - `DELETED`: The resource differs from its expected template configuration because the resource has been deleted.
   * - `MODIFIED`: One or more resource properties differ from their expected values (as defined in the stack template and any values specified as template parameters).
   * - `IN_SYNC`: The resource's actual configuration matches its expected template configuration.
   * - `NOT_CHECKED`: CloudFormation does not currently return this value.
   * - `UNKNOWN`: CloudFormation could not run drift detection for the resource. See the `DriftStatusReason` for details.
   *
   * @public
   */
  StackResourceDriftStatus: StackResourceDriftStatus | undefined;

  /**
   * Time at which CloudFormation performed drift detection on the stack resource.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * Contains information about the module from which the resource was created, if the resource was created from a module included in the stack template.
   *
   * @public
   */
  ModuleInfo?: ModuleInfo | undefined;

  /**
   * The reason for the drift status.
   *
   * @public
   */
  DriftStatusReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStackResourceDriftsOutput {
  /**
   * Drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where CloudFormation detects drift.
   *
   * For a given stack, there will be one `StackResourceDrift` for each stack resource that has been checked for drift. Resources that haven't yet been checked for drift aren't included. Resources that do not currently support drift detection aren't checked, and so not included. For a list of resources that support drift detection, see [Resource type support for imports and drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html).
   *
   * @public
   */
  StackResourceDrifts: StackResourceDrift[] | undefined;

  /**
   * If the request doesn't return all the remaining results, `NextToken` is set to a token. To retrieve the next set of results, call `DescribeStackResourceDrifts` again and assign that token to the request object's `NextToken` parameter. If the request returns all results, `NextToken` is set to `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The input for DescribeStackResources action.
 *
 * @public
 */
export interface DescribeStackResourcesInput {
  /**
   * The name or the unique stack ID that is associated with the stack, which aren't always interchangeable:
   *
   * - Running stacks: You can specify either the stack's name or its unique stack ID.
   * - Deleted stacks: You must specify the unique stack ID.
   *
   * Required: Conditional. If you don't specify `StackName`, you must specify `PhysicalResourceId`.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * The logical name of the resource as specified in the template.
   *
   * @public
   */
  LogicalResourceId?: string | undefined;

  /**
   * The name or unique identifier that corresponds to a physical instance ID of a resource supported by CloudFormation.
   *
   * For example, for an Amazon Elastic Compute Cloud (EC2) instance, `PhysicalResourceId` corresponds to the `InstanceId`. You can pass the EC2 `InstanceId` to `DescribeStackResources` to find which stack the instance belongs to and what other resources are part of the stack.
   *
   * Required: Conditional. If you don't specify `PhysicalResourceId`, you must specify `StackName`.
   *
   * @public
   */
  PhysicalResourceId?: string | undefined;
}

/**
 * The `StackResource` data type.
 *
 * @public
 */
export interface StackResource {
  /**
   * The name associated with the stack.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * Unique identifier of the stack.
   *
   * @public
   */
  StackId?: string | undefined;

  /**
   * The logical name of the resource specified in the template.
   *
   * @public
   */
  LogicalResourceId: string | undefined;

  /**
   * The name or unique identifier that corresponds to a physical instance ID of a resource supported by CloudFormation.
   *
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * Type of resource. For more information, see [Amazon Web Services resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * Time the status was updated.
   *
   * @public
   */
  Timestamp: Date | undefined;

  /**
   * Current status of the resource.
   *
   * @public
   */
  ResourceStatus: ResourceStatus | undefined;

  /**
   * Success/failure message associated with the resource.
   *
   * @public
   */
  ResourceStatusReason?: string | undefined;

  /**
   * User defined description associated with the resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about whether the resource's actual configuration differs, or has *drifted*, from its expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see [Detect unmanaged configuration changes to stacks and resources with drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html).
   *
   * @public
   */
  DriftInformation?: StackResourceDriftInformation | undefined;

  /**
   * Contains information about the module from which the resource was created, if the resource was created from a module included in the stack template.
   *
   * @public
   */
  ModuleInfo?: ModuleInfo | undefined;
}

/**
 * The output for a DescribeStackResources action.
 *
 * @public
 */
export interface DescribeStackResourcesOutput {
  /**
   * A list of `StackResource` structures.
   *
   * @public
   */
  StackResources?: StackResource[] | undefined;
}

/**
 * The input for DescribeStacks action.
 *
 * @public
 */
export interface DescribeStacksInput {
  /**
   * > **Note:**
   * >
   * > If you don't pass a parameter to `StackName`, the API returns a response that describes all resources in the account, which can impact performance. This requires `ListStacks` and `DescribeStacks` permissions.
   * >
   * > Consider using the ListStacks API if you're not passing a parameter to `StackName`.
   * >
   * > The IAM policy below can be added to IAM policies when you want to limit resource-level permissions and avoid returning a response when no parameter is sent in the request:
   * >
   * > \{ "Version": "2012-10-17", "Statement": [\{ "Effect": "Deny", "Action": "cloudformation:DescribeStacks", "NotResource": "arn:aws:cloudformation:*:*:stack/*\/*" \}] \}
   *
   * The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:
   *
   * - Running stacks: You can specify either the stack's name or its unique stack ID.
   * - Deleted stacks: You must specify the unique stack ID.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains information about whether the stack's actual configuration differs, or has *drifted*, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted.
 *
 * @public
 */
export interface StackDriftInformation {
  /**
   * Status of the stack's actual configuration compared to its expected template configuration.
   *
   * - `DRIFTED`: The stack differs from its expected template configuration. A stack is considered to have drifted if one or more of its resources have drifted.
   * - `NOT_CHECKED`: CloudFormation hasn't checked if the stack differs from its expected template configuration.
   * - `IN_SYNC`: The stack's actual configuration matches its expected template configuration.
   * - `UNKNOWN`: CloudFormation could not run drift detection for a resource in the stack.
   *
   * @public
   */
  StackDriftStatus: StackDriftStatus | undefined;

  /**
   * Most recent time when a drift detection operation was initiated on the stack, or any of its individual resources that support drift detection.
   *
   * @public
   */
  LastCheckTimestamp?: Date | undefined;
}

/**
 * Contains information about a CloudFormation operation.
 *
 * @public
 */
export interface OperationEntry {
  /**
   * The type of operation.
   *
   * @public
   */
  OperationType?: OperationType | undefined;

  /**
   * The unique identifier for the operation.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * The `Output` data type.
 *
 * @public
 */
export interface Output {
  /**
   * The key associated with the output.
   *
   * @public
   */
  OutputKey?: string | undefined;

  /**
   * The value associated with the output.
   *
   * @public
   */
  OutputValue?: string | undefined;

  /**
   * User defined description associated with the output.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the export associated with the output.
   *
   * @public
   */
  ExportName?: string | undefined;
}

/**
 * The `Stack` data type.
 *
 * @public
 */
export interface Stack {
  /**
   * Unique identifier of the stack.
   *
   * @public
   */
  StackId?: string | undefined;

  /**
   * The name associated with the stack.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The unique ID of the change set.
   *
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * A user-defined description associated with the stack.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of `Parameter` structures.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * The time at which the stack was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The time the stack was deleted.
   *
   * @public
   */
  DeletionTime?: Date | undefined;

  /**
   * The time the stack was last updated. This field will only be returned if the stack has been updated at least once.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
   *
   * @public
   */
  RollbackConfiguration?: RollbackConfiguration | undefined;

  /**
   * Current status of the stack.
   *
   * @public
   */
  StackStatus: StackStatus | undefined;

  /**
   * Success/failure message associated with the stack status.
   *
   * @public
   */
  StackStatusReason?: string | undefined;

  /**
   * Boolean to enable or disable rollback on stack creation failures:
   *
   * - `true`: disable rollback.
   * - `false`: enable rollback.
   *
   * @public
   */
  DisableRollback?: boolean | undefined;

  /**
   * The deployment configuration for the stack, including the deployment mode used for stack operations.
   *
   * @public
   */
  DeploymentConfig?: DeploymentConfig | undefined;

  /**
   * Amazon SNS topic Amazon Resource Names (ARNs) to which stack related events are published.
   *
   * @public
   */
  NotificationARNs?: string[] | undefined;

  /**
   * The amount of time within which stack creation should complete.
   *
   * @public
   */
  TimeoutInMinutes?: number | undefined;

  /**
   * The capabilities allowed in the stack.
   *
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * A list of output structures.
   *
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that's associated with the stack. During a stack operation, CloudFormation uses this role's credentials to make calls on your behalf.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * A list of `Tag`s that specify information about the stack.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Whether termination protection is enabled for the stack.
   *
   * For [nested stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html), termination protection is set on the root stack and can't be changed directly on the nested stack. For more information, see [Protect a CloudFormation stack from being deleted](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  EnableTerminationProtection?: boolean | undefined;

  /**
   * For nested stacks, the stack ID of the direct parent of this stack. For the first level of nested stacks, the root stack is also the parent stack.
   *
   * For more information, see [Nested stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  ParentId?: string | undefined;

  /**
   * For nested stacks, the stack ID of the top-level stack to which the nested stack ultimately belongs.
   *
   * For more information, see [Nested stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  RootId?: string | undefined;

  /**
   * Information about whether a stack's actual configuration differs, or has *drifted*, from its expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see [Detect unmanaged configuration changes to stacks and resources with drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html).
   *
   * @public
   */
  DriftInformation?: StackDriftInformation | undefined;

  /**
   * When set to `true`, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of `Retain`.
   *
   * Default: `false`
   *
   * @public
   */
  RetainExceptOnCreate?: boolean | undefined;

  /**
   * Specifies the deletion mode for the stack. Possible values are:
   *
   * - `STANDARD` - Use the standard behavior. Specifying this value is the same as not specifying this parameter.
   * - `FORCE_DELETE_STACK` - Delete the stack if it's stuck in a `DELETE_FAILED` state due to resource deletion failure.
   *
   * @public
   */
  DeletionMode?: DeletionMode | undefined;

  /**
   * The detailed status of the resource or stack. If `CONFIGURATION_COMPLETE` is present, the resource or resource configuration phase has completed and the stabilization of the resources is in progress. The StackSets `CONFIGURATION_COMPLETE` when all of the resources in the stack have reached that event. For more information, see [Understand CloudFormation stack creation events](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stack-resource-configuration-complete.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  DetailedStatus?: DetailedStatus | undefined;

  /**
   * Information about the most recent operations performed on this stack.
   *
   * @public
   */
  LastOperations?: OperationEntry[] | undefined;
}

/**
 * The output for a DescribeStacks action.
 *
 * @public
 */
export interface DescribeStacksOutput {
  /**
   * A list of stack structures.
   *
   * @public
   */
  Stacks?: Stack[] | undefined;

  /**
   * If the output exceeds 1 MB in size, a string that identifies the next page of stacks. If no additional page exists, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStackSetInput {
  /**
   * The name or unique ID of the StackSet whose description you want.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * Detailed information about the drift status of the StackSet.
 *
 * For StackSets, contains information about the last *completed* drift operation performed on the StackSet. Information about drift operations in-progress isn't included.
 *
 * For StackSet operations, includes information about drift operations currently being performed on the StackSet.
 *
 * For more information, see [Performing drift detection on CloudFormation StackSets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html) in the *CloudFormation User Guide*.
 *
 * @public
 */
export interface StackSetDriftDetectionDetails {
  /**
   * Status of the StackSet's actual configuration compared to its expected template and parameter configuration.
   *
   * - `DRIFTED`: One or more of the stack instances belonging to the StackSet differs from the expected template and parameter configuration. A stack instance is considered to have drifted if one or more of the resources in the associated stack have drifted.
   * - `NOT_CHECKED`: CloudFormation hasn't checked the StackSet for drift.
   * - `IN_SYNC`: All of the stack instances belonging to the StackSet stack match the expected template and parameter configuration.
   *
   * @public
   */
  DriftStatus?: StackSetDriftStatus | undefined;

  /**
   * The status of the StackSet drift detection operation.
   *
   * - `COMPLETED`: The drift detection operation completed without failing on any stack instances.
   * - `FAILED`: The drift detection operation exceeded the specified failure tolerance.
   * - `PARTIAL_SUCCESS`: The drift detection operation completed without exceeding the failure tolerance for the operation.
   * - `IN_PROGRESS`: The drift detection operation is currently being performed.
   * - `STOPPED`: The user has canceled the drift detection operation.
   *
   * @public
   */
  DriftDetectionStatus?: StackSetDriftDetectionStatus | undefined;

  /**
   * Most recent time when CloudFormation performed a drift detection operation on the StackSet. This value will be `NULL` for any StackSet that drift detection hasn't yet been performed on.
   *
   * @public
   */
  LastDriftCheckTimestamp?: Date | undefined;

  /**
   * The total number of stack instances belonging to this StackSet.
   *
   * The total number of stack instances is equal to the total of:
   *
   * - Stack instances that match the StackSet configuration.
   * - Stack instances that have drifted from the StackSet configuration.
   * - Stack instances where the drift detection operation has failed.
   * - Stack instances currently being checked for drift.
   *
   * @public
   */
  TotalStackInstancesCount?: number | undefined;

  /**
   * The number of stack instances that have drifted from the expected template and parameter configuration of the StackSet. A stack instance is considered to have drifted if one or more of the resources in the associated stack don't match their expected configuration.
   *
   * @public
   */
  DriftedStackInstancesCount?: number | undefined;

  /**
   * The number of stack instances which match the expected template and parameter configuration of the StackSet.
   *
   * @public
   */
  InSyncStackInstancesCount?: number | undefined;

  /**
   * The number of stack instances that are currently being checked for drift.
   *
   * @public
   */
  InProgressStackInstancesCount?: number | undefined;

  /**
   * The number of stack instances for which the drift detection operation failed.
   *
   * @public
   */
  FailedStackInstancesCount?: number | undefined;
}

/**
 * A structure that contains information about a StackSet. With StackSets, you can provision stacks across Amazon Web Services accounts and Regions from a single CloudFormation template. Each stack is based on the same CloudFormation template, but you can customize individual stacks using parameters.
 *
 * @public
 */
export interface StackSet {
  /**
   * The name that's associated with the StackSet.
   *
   * @public
   */
  StackSetName?: string | undefined;

  /**
   * The ID of the StackSet.
   *
   * @public
   */
  StackSetId?: string | undefined;

  /**
   * A description of the StackSet that you specify when the StackSet is created or updated.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the StackSet.
   *
   * @public
   */
  Status?: StackSetStatus | undefined;

  /**
   * The structure that contains the body of the template that was used to create or update the StackSet.
   *
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * A list of input parameters for a StackSet.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * The capabilities that are allowed in the StackSet. Some StackSet templates might include resources that can affect permissions in your Amazon Web Services account—for example, by creating new Identity and Access Management (IAM) users. For more information, see [Acknowledging IAM resources in CloudFormation templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities).
   *
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * A list of tags that specify information about the StackSet. A maximum number of 50 tags can be specified.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the StackSet.
   *
   * @public
   */
  StackSetARN?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used to create or update the stack set.
   *
   * Use customized administrator roles to control which users or groups can manage specific StackSets within the same administrator account. For more information, see [Prerequisites for using CloudFormation StackSets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  AdministrationRoleARN?: string | undefined;

  /**
   * The name of the IAM execution role used to create or update the StackSet.
   *
   * Use customized execution roles to control which stack resources users and groups can include in their StackSets.
   *
   * @public
   */
  ExecutionRoleName?: string | undefined;

  /**
   * Detailed information about the drift status of the StackSet.
   *
   * For StackSets, contains information about the last *completed* drift operation performed on the StackSet. Information about drift operations currently in progress isn't included.
   *
   * @public
   */
  StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails | undefined;

  /**
   * Describes whether StackSets automatically deploys to Organizations accounts that are added to a target organization or organizational unit (OU). Valid only if the StackSet uses service-managed permissions.
   *
   * @public
   */
  AutoDeployment?: AutoDeployment | undefined;

  /**
   * Describes how the IAM roles required for StackSet operations are created.
   *
   * - With `self-managed` permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see [Grant self-managed permissions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html).
   * - With `service-managed` permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by Organizations. For more information, see [Activate trusted access for StackSets with Organizations](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate-trusted-access.html).
   *
   * @public
   */
  PermissionModel?: PermissionModels | undefined;

  /**
   * [Service-managed permissions] The organization root ID or organizational unit (OU) IDs that you specified for [DeploymentTargets](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html).
   *
   * @public
   */
  OrganizationalUnitIds?: string[] | undefined;

  /**
   * Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
   *
   * @public
   */
  ManagedExecution?: ManagedExecution | undefined;

  /**
   * Returns a list of all Amazon Web Services Regions the given StackSet has stack instances deployed in. The Amazon Web Services Regions list output is in no particular order.
   *
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeStackSetOutput {
  /**
   * The specified StackSet.
   *
   * @public
   */
  StackSet?: StackSet | undefined;
}

/**
 * @public
 */
export interface DescribeStackSetOperationInput {
  /**
   * The name or the unique stack ID of the StackSet for the stack operation.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * The unique ID of the StackSet operation.
   *
   * @public
   */
  OperationId: string | undefined;

  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * Detailed information about the StackSet operation.
 *
 * @public
 */
export interface StackSetOperationStatusDetails {
  /**
   * The number of stack instances for which the StackSet operation failed.
   *
   * @public
   */
  FailedStackInstancesCount?: number | undefined;
}

/**
 * The structure that contains information about a StackSet operation.
 *
 * @public
 */
export interface StackSetOperation {
  /**
   * The unique ID of a StackSet operation.
   *
   * @public
   */
  OperationId?: string | undefined;

  /**
   * The ID of the StackSet.
   *
   * @public
   */
  StackSetId?: string | undefined;

  /**
   * The type of StackSet operation: `CREATE`, `UPDATE`, or `DELETE`. Create and delete operations affect only the specified stack instances that are associated with the specified StackSet. Update operations affect both the StackSet itself, in addition to *all* associated stack instances.
   *
   * @public
   */
  Action?: StackSetOperationAction | undefined;

  /**
   * The status of the operation.
   *
   * - `FAILED`: The operation exceeded the specified failure tolerance. The failure tolerance value that you've set for an operation is applied for each Region during stack create and update operations. If the number of failed stacks within a Region exceeds the failure tolerance, the status of the operation in the Region is set to `FAILED`. This in turn sets the status of the operation as a whole to `FAILED`, and CloudFormation cancels the operation in any remaining Regions.
   * - `QUEUED`: [Service-managed permissions] For automatic deployments that require a sequence of operations, the operation is queued to be performed. For more information, see the [StackSets status codes](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-status-codes) in the *CloudFormation User Guide*.
   * - `RUNNING`: The operation is currently being performed.
   * - `STOPPED`: The user has canceled the operation.
   * - `STOPPING`: The operation is in the process of stopping, at user request.
   * - `SUCCEEDED`: The operation completed creating or updating all the specified stacks without exceeding the failure tolerance for the operation.
   *
   * @public
   */
  Status?: StackSetOperationStatus | undefined;

  /**
   * The preferences for how CloudFormation performs this StackSet operation.
   *
   * @public
   */
  OperationPreferences?: StackSetOperationPreferences | undefined;

  /**
   * For StackSet operations of action type `DELETE`, specifies whether to remove the stack instances from the specified StackSet, but doesn't delete the stacks. You can't re-associate a retained stack, or add an existing, saved stack to a new StackSet.
   *
   * @public
   */
  RetainStacks?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used to perform this StackSet operation.
   *
   * Use customized administrator roles to control which users or groups can manage specific StackSets within the same administrator account. For more information, see [Grant self-managed permissions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  AdministrationRoleARN?: string | undefined;

  /**
   * The name of the IAM execution role used to create or update the StackSet.
   *
   * Use customized execution roles to control which stack resources users and groups can include in their StackSets.
   *
   * @public
   */
  ExecutionRoleName?: string | undefined;

  /**
   * The time at which the operation was initiated. Note that the creation times for the stack set operation might differ from the creation time of the individual stacks themselves. This is because CloudFormation needs to perform preparatory work for the operation, such as dispatching the work to the requested Regions, before actually creating the first stacks.
   *
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * The time at which the StackSet operation ended, across all accounts and Regions specified. Note that this doesn't necessarily mean that the StackSet operation was successful, or even attempted, in each account or Region.
   *
   * @public
   */
  EndTimestamp?: Date | undefined;

  /**
   * The Organizations accounts affected by the stack operation. Valid only if the StackSet uses service-managed permissions.
   *
   * @public
   */
  DeploymentTargets?: DeploymentTargets | undefined;

  /**
   * Detailed information about the drift status of the StackSet. This includes information about drift operations currently being performed on the StackSet.
   *
   * This information will only be present for StackSet operations whose `Action` type is `DETECT_DRIFT`.
   *
   * For more information, see [Performing drift detection on CloudFormation StackSets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  StackSetDriftDetectionDetails?: StackSetDriftDetectionDetails | undefined;

  /**
   * The status of the operation in details.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * Detailed information about the StackSet operation.
   *
   * @public
   */
  StatusDetails?: StackSetOperationStatusDetails | undefined;
}

/**
 * @public
 */
export interface DescribeStackSetOperationOutput {
  /**
   * The specified StackSet operation.
   *
   * @public
   */
  StackSetOperation?: StackSetOperation | undefined;
}

/**
 * @public
 */
export interface DescribeTypeInput {
  /**
   * The kind of extension.
   *
   * Conditional: You must specify either `TypeName` and `Type`, or `Arn`.
   *
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * The name of the extension.
   *
   * Conditional: You must specify either `TypeName` and `Type`, or `Arn`.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the extension.
   *
   * Conditional: You must specify either `TypeName` and `Type`, or `Arn`.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the extension version when it is registered.
   *
   * If you specify a `VersionId`, `DescribeType` returns information about that specific extension version. Otherwise, it returns information about the default extension version.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The publisher ID of the extension publisher.
   *
   * Extensions provided by Amazon Web Services are not assigned a publisher ID.
   *
   * @public
   */
  PublisherId?: string | undefined;

  /**
   * The version number of a public third-party extension.
   *
   * @public
   */
  PublicVersionNumber?: string | undefined;
}

/**
 * For extensions that are modules, a public third-party extension that must be activated in your account in order for the module itself to be activated.
 *
 * For more information, see [Requirements for activating third-party public modules](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/module-versioning.html#requirements-for-modules) in the *CloudFormation User Guide*.
 *
 * @public
 */
export interface RequiredActivatedType {
  /**
   * An alias assigned to the public extension, in this account and Region. If you specify an alias for the extension, CloudFormation treats the alias as the extension type name within this account and Region. You must use the alias to refer to the extension in your templates, API calls, and CloudFormation console.
   *
   * @public
   */
  TypeNameAlias?: string | undefined;

  /**
   * The type name of the public extension.
   *
   * If you specified a `TypeNameAlias` when enabling the extension in this account and Region, CloudFormation treats that alias as the extension's type name within the account and Region, not the type name of the public extension. For more information, see [Use aliases to refer to extensions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-alias) in the *CloudFormation User Guide*.
   *
   * @public
   */
  OriginalTypeName?: string | undefined;

  /**
   * The publisher ID of the extension publisher.
   *
   * @public
   */
  PublisherId?: string | undefined;

  /**
   * A list of the major versions of the extension type that the macro supports.
   *
   * @public
   */
  SupportedMajorVersions?: number[] | undefined;
}

/**
 * @public
 */
export interface DescribeTypeOutput {
  /**
   * The Amazon Resource Name (ARN) of the extension.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The kind of extension.
   *
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * The name of the extension.
   *
   * If the extension is a public third-party type you have activated with a type name alias, CloudFormation returns the type name alias. For more information, see [ActivateType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html).
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The ID of the default version of the extension. The default version is used when the extension version isn't specified.
   *
   * This applies only to private extensions you have registered in your account. For public extensions, both those provided by Amazon Web Services and published by third parties, CloudFormation returns `null`. For more information, see [RegisterType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html).
   *
   * To set the default version of an extension, use SetTypeDefaultVersion.
   *
   * @public
   */
  DefaultVersionId?: string | undefined;

  /**
   * Whether the specified extension version is set as the default version.
   *
   * This applies only to private extensions you have registered in your account, and extensions published by Amazon Web Services. For public third-party extensions, whether they are activated in your account, CloudFormation returns `null`.
   *
   * @public
   */
  IsDefaultVersion?: boolean | undefined;

  /**
   * The contract test status of the registered extension version. To return the extension test status of a specific extension version, you must specify `VersionId`.
   *
   * This applies only to registered private extension versions. CloudFormation doesn't return this information for public extensions, whether they are activated in your account.
   *
   * - `PASSED`: The extension has passed all its contract tests.
   *
   *   An extension must have a test status of `PASSED` before it can be published. For more information, see [Publishing extensions to make them available for public use](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html) in the *CloudFormation Command Line Interface (CLI) User Guide*.
   * - `FAILED`: The extension has failed one or more contract tests.
   * - `IN_PROGRESS`: Contract tests are currently being performed on the extension.
   * - `NOT_TESTED`: Contract tests haven't been performed on the extension.
   *
   * @public
   */
  TypeTestsStatus?: TypeTestsStatus | undefined;

  /**
   * The description of the test status. To return the extension test status of a specific extension version, you must specify `VersionId`.
   *
   * This applies only to registered private extension versions. CloudFormation doesn't return this information for public extensions, whether they are activated in your account.
   *
   * @public
   */
  TypeTestsStatusDescription?: string | undefined;

  /**
   * The description of the extension.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The schema that defines the extension.
   *
   * For more information, see [Resource type schema](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html) in the *CloudFormation Command Line Interface (CLI) User Guide* and the [CloudFormation Hooks User Guide](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/what-is-cloudformation-hooks.html).
   *
   * @public
   */
  Schema?: string | undefined;

  /**
   * For resource type extensions, the provisioning behavior of the resource type. CloudFormation determines the provisioning type during registration, based on the types of handlers in the schema handler package submitted.
   *
   * Valid values include:
   *
   * - `FULLY_MUTABLE`: The resource type includes an update handler to process updates to the type during stack update operations.
   * - `IMMUTABLE`: The resource type doesn't include an update handler, so the type can't be updated and must instead be replaced during stack update operations.
   * - `NON_PROVISIONABLE`: The resource type doesn't include all the following handlers, and therefore can't actually be provisioned.
   *
   *   - create
   *   - read
   *   - delete
   *
   * @public
   */
  ProvisioningType?: ProvisioningType | undefined;

  /**
   * The deprecation status of the extension version.
   *
   * Valid values include:
   *
   * - `LIVE`: The extension is activated or registered and can be used in CloudFormation operations, dependent on its provisioning behavior and visibility scope.
   * - `DEPRECATED`: The extension has been deactivated or deregistered and can no longer be used in CloudFormation operations.
   *
   * For public third-party extensions, CloudFormation returns `null`.
   *
   * @public
   */
  DeprecatedStatus?: DeprecatedStatus | undefined;

  /**
   * Contains logging configuration information for private extensions. This applies only to private extensions you have registered in your account. For public extensions, both those provided by Amazon Web Services and published by third parties, CloudFormation returns `null`. For more information, see [RegisterType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html).
   *
   * @public
   */
  LoggingConfig?: LoggingConfig | undefined;

  /**
   * For extensions that are modules, the public third-party extensions that must be activated in your account in order for the module itself to be activated.
   *
   * @public
   */
  RequiredActivatedTypes?: RequiredActivatedType[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM execution role used to register the extension. This applies only to private extensions you have registered in your account. For more information, see [RegisterType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html).
   *
   * If the registered extension calls any Amazon Web Services APIs, you must create an *[IAM execution role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html)* that includes the necessary permissions to call those Amazon Web Services APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your extension with the appropriate credentials.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * The scope at which the extension is visible and usable in CloudFormation operations.
   *
   * Valid values include:
   *
   * - `PRIVATE`: The extension is only visible and usable within the account in which it is registered. CloudFormation marks any extensions you register as `PRIVATE`.
   * - `PUBLIC`: The extension is publicly visible and usable within any Amazon Web Services account.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * The URL of the source code for the extension.
   *
   * @public
   */
  SourceUrl?: string | undefined;

  /**
   * The URL of a page providing detailed documentation for this extension.
   *
   * @public
   */
  DocumentationUrl?: string | undefined;

  /**
   * When the specified extension version was registered. This applies only to:
   *
   * - Private extensions you have registered in your account. For more information, see [RegisterType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html).
   * - Public extensions you have activated in your account with auto-update specified. For more information, see [ActivateType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html).
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * When the specified private extension version was registered or activated in your account.
   *
   * @public
   */
  TimeCreated?: Date | undefined;

  /**
   * A JSON string that represent the current configuration data for the extension in this account and Region.
   *
   * To set the configuration data for an extension, use [SetTypeConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html).
   *
   * @public
   */
  ConfigurationSchema?: string | undefined;

  /**
   * The publisher ID of the extension publisher.
   *
   * This applies only to public third-party extensions. For private registered extensions, and extensions provided by Amazon Web Services, CloudFormation returns `null`.
   *
   * @public
   */
  PublisherId?: string | undefined;

  /**
   * For public extensions that have been activated for this account and Region, the type name of the public extension.
   *
   * If you specified a `TypeNameAlias` when enabling the extension in this account and Region, CloudFormation treats that alias as the extension's type name within the account and Region, not the type name of the public extension. For more information, see [Use aliases to refer to extensions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-alias) in the *CloudFormation User Guide*.
   *
   * @public
   */
  OriginalTypeName?: string | undefined;

  /**
   * For public extensions that have been activated for this account and Region, the Amazon Resource Name (ARN) of the public extension.
   *
   * @public
   */
  OriginalTypeArn?: string | undefined;

  /**
   * The version number of a public third-party extension.
   *
   * This applies only if you specify a public extension you have activated in your account, or specify a public extension without specifying a version. For all other extensions, CloudFormation returns `null`.
   *
   * @public
   */
  PublicVersionNumber?: string | undefined;

  /**
   * The latest version of a public extension *that is available* for use.
   *
   * This only applies if you specify a public extension, and you don't specify a version. For all other requests, CloudFormation returns `null`.
   *
   * @public
   */
  LatestPublicVersion?: string | undefined;

  /**
   * Whether the extension is activated in the account and Region.
   *
   * This only applies to public third-party extensions. For all other extensions, CloudFormation returns `null`.
   *
   * @public
   */
  IsActivated?: boolean | undefined;

  /**
   * Whether CloudFormation automatically updates the extension in this account and Region when a new *minor* version is published by the extension publisher. Major versions released by the publisher must be manually updated. For more information, see [Automatically use new versions of extensions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-auto) in the *CloudFormation User Guide*.
   *
   * @public
   */
  AutoUpdate?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeTypeRegistrationInput {
  /**
   * The identifier for this registration request.
   *
   * This registration token is generated by CloudFormation when you initiate a registration request using RegisterType.
   *
   * @public
   */
  RegistrationToken: string | undefined;
}

/**
 * @public
 */
export interface DescribeTypeRegistrationOutput {
  /**
   * The current status of the extension registration request.
   *
   * @public
   */
  ProgressStatus?: RegistrationStatus | undefined;

  /**
   * The description of the extension registration request.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the extension being registered.
   *
   * For registration requests with a `ProgressStatus` of other than `COMPLETE`, this will be `null`.
   *
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of this specific version of the extension being registered.
   *
   * For registration requests with a `ProgressStatus` of other than `COMPLETE`, this will be `null`.
   *
   * @public
   */
  TypeVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface DetectStackDriftInput {
  /**
   * The name of the stack for which you want to detect drift.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The logical names of any resources you want to use as filters.
   *
   * @public
   */
  LogicalResourceIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DetectStackDriftOutput {
  /**
   * The ID of the drift detection results of this operation.
   *
   * CloudFormation generates new results, with a new drift detection ID, each time this operation is run. However, the number of drift results CloudFormation retains for any given stack, and for how long, may vary.
   *
   * @public
   */
  StackDriftDetectionId: string | undefined;
}

/**
 * @public
 */
export interface DetectStackResourceDriftInput {
  /**
   * The name of the stack to which the resource belongs.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The logical name of the resource for which to return drift information.
   *
   * @public
   */
  LogicalResourceId: string | undefined;
}

/**
 * @public
 */
export interface DetectStackResourceDriftOutput {
  /**
   * Information about whether the resource's actual configuration has drifted from its expected template configuration, including actual and expected property values and any differences detected.
   *
   * @public
   */
  StackResourceDrift: StackResourceDrift | undefined;
}

/**
 * @public
 */
export interface DetectStackSetDriftInput {
  /**
   * The name of the StackSet on which to perform the drift detection operation.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * The user-specified preferences for how CloudFormation performs a StackSet operation.
   *
   * For more information about maximum concurrent accounts and failure tolerance, see [StackSet operation options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options).
   *
   * @public
   */
  OperationPreferences?: StackSetOperationPreferences | undefined;

  /**
   * *The ID of the StackSet operation.*
   *
   * @public
   */
  OperationId?: string | undefined;

  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * @public
 */
export interface DetectStackSetDriftOutput {
  /**
   * The ID of the drift detection StackSet operation.
   *
   * You can use this operation ID with DescribeStackSetOperation to monitor the progress of the drift detection operation.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * The input for an EstimateTemplateCost action.
 *
 * @public
 */
export interface EstimateTemplateCostInput {
  /**
   * Structure that contains the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.
   *
   * Conditional: You must pass `TemplateBody` or `TemplateURL`. If both are passed, only `TemplateBody` is used.
   *
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * The URL of a file that contains the template body. The URL must point to a template that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with `https://`. URLs from S3 static websites are not supported.
   *
   * Conditional: You must pass `TemplateURL` or `TemplateBody`. If both are passed, only `TemplateBody` is used.
   *
   * @public
   */
  TemplateURL?: string | undefined;

  /**
   * A list of `Parameter` structures that specify input parameters.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * The output for a EstimateTemplateCost action.
 *
 * @public
 */
export interface EstimateTemplateCostOutput {
  /**
   * An Amazon Web Services Simple Monthly Calculator URL with a query string that describes the resources required to run the template.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * The input for the ExecuteChangeSet action.
 *
 * @public
 */
export interface ExecuteChangeSetInput {
  /**
   * The name or Amazon Resource Name (ARN) of the change set that you want use to update the specified stack.
   *
   * @public
   */
  ChangeSetName: string | undefined;

  /**
   * If you specified the name of a change set, specify the stack name or Amazon Resource Name (ARN) that's associated with the change set you want to execute.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * A unique identifier for this `ExecuteChangeSet` request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to execute a change set to update a stack with the same name. You might retry `ExecuteChangeSet` requests to ensure that CloudFormation successfully received them.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Preserves the state of previously provisioned resources when an operation fails. This parameter can't be specified when the `OnStackFailure` parameter to the [CreateChangeSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html) API operation was specified.
   *
   * - `True` - if the stack creation fails, do nothing. This is equivalent to specifying `DO_NOTHING` for the `OnStackFailure` parameter to the [CreateChangeSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html) API operation.
   * - `False` - if the stack creation fails, roll back the stack. This is equivalent to specifying `ROLLBACK` for the `OnStackFailure` parameter to the [CreateChangeSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateChangeSet.html) API operation.
   *
   * Default: `True`
   *
   * @public
   */
  DisableRollback?: boolean | undefined;

  /**
   * When set to `true`, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of `Retain`.
   *
   * Default: `false`
   *
   * @public
   */
  RetainExceptOnCreate?: boolean | undefined;
}

/**
 * The output for the ExecuteChangeSet action.
 *
 * @public
 */
export interface ExecuteChangeSetOutput {}

/**
 * @public
 */
export interface ExecuteStackRefactorInput {
  /**
   * The ID associated with the stack refactor created from the CreateStackRefactor action.
   *
   * @public
   */
  StackRefactorId: string | undefined;
}

/**
 * @public
 */
export interface GetGeneratedTemplateInput {
  /**
   * The language to use to retrieve for the generated template. Supported values are:
   *
   * - `JSON`
   * - `YAML`
   *
   * @public
   */
  Format?: TemplateFormat | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the generated template. The format is `arn:$\{Partition\}:cloudformation:$\{Region\}:$\{Account\}:generatedtemplate/$\{Id\}`. For example, `arn:aws:cloudformation:us-east-1:123456789012:generatedtemplate/2e8465c1-9a80-43ea-a3a3-4f2d692fe6dc`.
   *
   * @public
   */
  GeneratedTemplateName: string | undefined;
}

/**
 * @public
 */
export interface GetGeneratedTemplateOutput {
  /**
   * The status of the template generation. Supported values are:
   *
   * - `CreatePending` - the creation of the template is pending.
   * - `CreateInProgress` - the creation of the template is in progress.
   * - `DeletePending` - the deletion of the template is pending.
   * - `DeleteInProgress` - the deletion of the template is in progress.
   * - `UpdatePending` - the update of the template is pending.
   * - `UpdateInProgress` - the update of the template is in progress.
   * - `Failed` - the template operation failed.
   * - `Complete` - the template operation is complete.
   *
   * @public
   */
  Status?: GeneratedTemplateStatus | undefined;

  /**
   * The template body of the generated template, in the language specified by the `Language` parameter.
   *
   * @public
   */
  TemplateBody?: string | undefined;
}

/**
 * @public
 */
export interface GetHookResultInput {
  /**
   * The unique identifier (ID) of the Hook invocation result that you want details about. You can get the ID from the [ListHookResults](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListHookResults.html) operation.
   *
   * @public
   */
  HookResultId?: string | undefined;
}

/**
 * The `HookTarget` data type.
 *
 * @public
 */
export interface HookTarget {
  /**
   * The target type.
   *
   * @public
   */
  TargetType: HookTargetType | undefined;

  /**
   * The target name, for example, `AWS::S3::Bucket`.
   *
   * @public
   */
  TargetTypeName: string | undefined;

  /**
   * The unique identifier of the Hook invocation target.
   *
   * @public
   */
  TargetId: string | undefined;

  /**
   * The action that invoked the Hook.
   *
   * @public
   */
  Action: HookTargetAction | undefined;
}

/**
 * @public
 */
export interface GetHookResultOutput {
  /**
   * The unique identifier of the Hook result.
   *
   * @public
   */
  HookResultId?: string | undefined;

  /**
   * The specific point in the provisioning process where the Hook is invoked.
   *
   * @public
   */
  InvocationPoint?: HookInvocationPoint | undefined;

  /**
   * The failure mode of the invocation.
   *
   * @public
   */
  FailureMode?: HookFailureMode | undefined;

  /**
   * The name of the Hook that was invoked.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The original public type name of the Hook when an alias is used.
   *
   * For example, if you activate `AWS::Hooks::GuardHook` with alias `MyCompany::Custom::GuardHook`, then `TypeName` will be `MyCompany::Custom::GuardHook` and `OriginalTypeName` will be `AWS::Hooks::GuardHook`.
   *
   * @public
   */
  OriginalTypeName?: string | undefined;

  /**
   * The version identifier of the Hook that was invoked.
   *
   * @public
   */
  TypeVersionId?: string | undefined;

  /**
   * The version identifier of the Hook configuration data that was used during invocation.
   *
   * @public
   */
  TypeConfigurationVersionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Hook.
   *
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * The status of the Hook invocation. The following statuses are possible:
   *
   * - `HOOK_IN_PROGRESS`: The Hook is currently running.
   * - `HOOK_COMPLETE_SUCCEEDED`: The Hook completed successfully.
   * - `HOOK_COMPLETE_FAILED`: The Hook completed but failed validation.
   * - `HOOK_FAILED`: The Hook encountered an error during execution.
   *
   * @public
   */
  Status?: HookStatus | undefined;

  /**
   * A message that provides additional details about the Hook invocation status.
   *
   * @public
   */
  HookStatusReason?: string | undefined;

  /**
   * The timestamp when the Hook was invoked.
   *
   * @public
   */
  InvokedAt?: Date | undefined;

  /**
   * Information about the target of the Hook invocation.
   *
   * @public
   */
  Target?: HookTarget | undefined;

  /**
   * A list of objects with additional information and guidance that can help you resolve a failed Hook invocation.
   *
   * @public
   */
  Annotations?: Annotation[] | undefined;
}

/**
 * The input for the GetStackPolicy action.
 *
 * @public
 */
export interface GetStackPolicyInput {
  /**
   * The name or unique stack ID that's associated with the stack whose policy you want to get.
   *
   * @public
   */
  StackName: string | undefined;
}

/**
 * The output for the GetStackPolicy action.
 *
 * @public
 */
export interface GetStackPolicyOutput {
  /**
   * Structure that contains the stack policy body. For more information, see [Prevent updates to stack resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  StackPolicyBody?: string | undefined;
}

/**
 * The input for a GetTemplate action.
 *
 * @public
 */
export interface GetTemplateInput {
  /**
   * The name or the unique stack ID that's associated with the stack, which aren't always interchangeable:
   *
   * - Running stacks: You can specify either the stack's name or its unique stack ID.
   * - Deleted stacks: You must specify the unique stack ID.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of a change set for which CloudFormation returns the associated template. If you specify a name, you must also specify the `StackName`.
   *
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * For templates that include transforms, the stage of the template that CloudFormation returns. To get the user-submitted template, specify `Original`. To get the template after CloudFormation has processed all transforms, specify `Processed`.
   *
   * If the template doesn't include transforms, `Original` and `Processed` return the same template. By default, CloudFormation specifies `Processed`.
   *
   * @public
   */
  TemplateStage?: TemplateStage | undefined;
}

/**
 * The output for GetTemplate action.
 *
 * @public
 */
export interface GetTemplateOutput {
  /**
   * Structure that contains the template body.
   *
   * CloudFormation returns the same template that was used when the stack was created.
   *
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * The stage of the template that you can retrieve. For stacks, the `Original` and `Processed` templates are always available. For change sets, the `Original` template is always available. After CloudFormation finishes creating the change set, the `Processed` template becomes available.
   *
   * @public
   */
  StagesAvailable?: TemplateStage[] | undefined;
}

/**
 * Options for the `GetTemplateSummary` API action.
 *
 * @public
 */
export interface TemplateSummaryConfig {
  /**
   * If set to `True`, any unrecognized resource types generate warnings and not an error. Any unrecognized resource types are returned in the `Warnings` output parameter.
   *
   * @public
   */
  TreatUnrecognizedResourceTypesAsWarnings?: boolean | undefined;
}

/**
 * The input for the GetTemplateSummary action.
 *
 * @public
 */
export interface GetTemplateSummaryInput {
  /**
   * Structure that contains the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.
   *
   * Conditional: You must specify only one of the following parameters: `StackName`, `StackSetName`, `TemplateBody`, or `TemplateURL`.
   *
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * The URL of a file that contains the template body. The URL must point to a template (max size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with `https://`.
   *
   * Conditional: You must specify only one of the following parameters: `StackName`, `StackSetName`, `TemplateBody`, or `TemplateURL`.
   *
   * @public
   */
  TemplateURL?: string | undefined;

  /**
   * The name or the stack ID that's associated with the stack, which aren't always interchangeable. For running stacks, you can specify either the stack's name or its unique stack ID. For deleted stack, you must specify the unique stack ID.
   *
   * Conditional: You must specify only one of the following parameters: `StackName`, `StackSetName`, `TemplateBody`, or `TemplateURL`.
   *
   * @public
   */
  StackName?: string | undefined;

  /**
   * The name or unique ID of the StackSet from which the stack was created.
   *
   * Conditional: You must specify only one of the following parameters: `StackName`, `StackSetName`, `TemplateBody`, or `TemplateURL`.
   *
   * @public
   */
  StackSetName?: string | undefined;

  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;

  /**
   * Specifies options for the `GetTemplateSummary` API action.
   *
   * @public
   */
  TemplateSummaryConfig?: TemplateSummaryConfig | undefined;
}

/**
 * A set of criteria that CloudFormation uses to validate parameter values. Although other constraints might be defined in the stack template, CloudFormation returns only the `AllowedValues` property.
 *
 * @public
 */
export interface ParameterConstraints {
  /**
   * A list of values that are permitted for a parameter.
   *
   * @public
   */
  AllowedValues?: string[] | undefined;
}

/**
 * The `ParameterDeclaration` data type.
 *
 * @public
 */
export interface ParameterDeclaration {
  /**
   * The name that's associated with the parameter.
   *
   * @public
   */
  ParameterKey?: string | undefined;

  /**
   * The default value of the parameter.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * The type of parameter.
   *
   * @public
   */
  ParameterType?: string | undefined;

  /**
   * Flag that indicates whether the parameter value is shown as plain text in logs and in the Amazon Web Services Management Console.
   *
   * @public
   */
  NoEcho?: boolean | undefined;

  /**
   * The description that's associate with the parameter.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The criteria that CloudFormation uses to validate parameter values.
   *
   * @public
   */
  ParameterConstraints?: ParameterConstraints | undefined;
}

/**
 * Describes the target resources of a specific type in your import template (for example, all `AWS::S3::Bucket` resources) and the properties you can provide during the import to identify resources of that type.
 *
 * @public
 */
export interface ResourceIdentifierSummary {
  /**
   * The template resource type of the target resources, such as `AWS::S3::Bucket`.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The logical IDs of the target resources of the specified `ResourceType`, as defined in the import template.
   *
   * @public
   */
  LogicalResourceIds?: string[] | undefined;

  /**
   * The resource properties you can provide during the import to identify your target resources. For example, `BucketName` is a possible identifier property for `AWS::S3::Bucket` resources.
   *
   * @public
   */
  ResourceIdentifiers?: string[] | undefined;
}

/**
 * Contains any warnings returned by the `GetTemplateSummary` API action.
 *
 * @public
 */
export interface Warnings {
  /**
   * A list of all of the unrecognized resource types. This is only returned if the `TemplateSummaryConfig` parameter has the `TreatUnrecognizedResourceTypesAsWarning` configuration set to `True`.
   *
   * @public
   */
  UnrecognizedResourceTypes?: string[] | undefined;
}

/**
 * The output for the GetTemplateSummary action.
 *
 * @public
 */
export interface GetTemplateSummaryOutput {
  /**
   * A list of parameter declarations that describe various properties for each parameter.
   *
   * @public
   */
  Parameters?: ParameterDeclaration[] | undefined;

  /**
   * The value that's defined in the `Description` property of the template.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The capabilities found within the template. If your template contains IAM resources, you must specify the `CAPABILITY_IAM` or `CAPABILITY_NAMED_IAM` value for this parameter when you use the CreateStack or UpdateStack actions with your template; otherwise, those actions return an `InsufficientCapabilities` error.
   *
   * For more information, see [Acknowledging IAM resources in CloudFormation templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities).
   *
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * The list of resources that generated the values in the `Capabilities` response element.
   *
   * @public
   */
  CapabilitiesReason?: string | undefined;

  /**
   * A list of all the template resource types that are defined in the template, such as `AWS::EC2::Instance`, `AWS::Dynamo::Table`, and `Custom::MyCustomInstance`.
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * The Amazon Web Services template format version, which identifies the capabilities of the template.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The value that's defined for the `Metadata` property of the template.
   *
   * @public
   */
  Metadata?: string | undefined;

  /**
   * A list of the transforms that are declared in the template.
   *
   * @public
   */
  DeclaredTransforms?: string[] | undefined;

  /**
   * A list of resource identifier summaries that describe the target resources of an import operation and the properties you can provide during the import to identify the target resources. For example, `BucketName` is a possible identifier property for an `AWS::S3::Bucket` resource.
   *
   * @public
   */
  ResourceIdentifierSummaries?: ResourceIdentifierSummary[] | undefined;

  /**
   * An object that contains any warnings returned.
   *
   * @public
   */
  Warnings?: Warnings | undefined;
}

/**
 * @public
 */
export interface ImportStacksToStackSetInput {
  /**
   * The name of the StackSet. The name must be unique in the Region where you create your StackSet.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * The IDs of the stacks you are importing into a StackSet. You import up to 10 stacks per StackSet at a time.
   *
   * Specify either `StackIds` or `StackIdsUrl`.
   *
   * @public
   */
  StackIds?: string[] | undefined;

  /**
   * The Amazon S3 URL which contains list of stack ids to be inputted.
   *
   * Specify either `StackIds` or `StackIdsUrl`.
   *
   * @public
   */
  StackIdsUrl?: string | undefined;

  /**
   * The list of OU ID's to which the imported stacks must be mapped as deployment targets.
   *
   * @public
   */
  OrganizationalUnitIds?: string[] | undefined;

  /**
   * The user-specified preferences for how CloudFormation performs a StackSet operation.
   *
   * For more information about maximum concurrent accounts and failure tolerance, see [StackSet operation options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options).
   *
   * @public
   */
  OperationPreferences?: StackSetOperationPreferences | undefined;

  /**
   * A unique, user defined, identifier for the StackSet operation.
   *
   * @public
   */
  OperationId?: string | undefined;

  /**
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - For service managed StackSets, specify `DELEGATED_ADMIN`.
   *
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * @public
 */
export interface ImportStacksToStackSetOutput {
  /**
   * The unique identifier for the StackSet operation.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * The input for the ListChangeSets action.
 *
 * @public
 */
export interface ListChangeSetsInput {
  /**
   * The name or the Amazon Resource Name (ARN) of the stack for which you want to list change sets.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The output for the ListChangeSets action.
 *
 * @public
 */
export interface ListChangeSetsOutput {
  /**
   * A list of `ChangeSetSummary` structures that provides the ID and status of each change set for the specified stack.
   *
   * @public
   */
  Summaries?: ChangeSetSummary[] | undefined;

  /**
   * If the output exceeds 1 MB, a string that identifies the next page of change sets. If there is no additional page, this value is `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExportsInput {
  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The `Export` structure describes the exported output values for a stack.
 *
 * For more information, see [Get exported outputs from a deployed CloudFormation stack](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html).
 *
 * @public
 */
export interface Export {
  /**
   * The stack that contains the exported output name and value.
   *
   * @public
   */
  ExportingStackId?: string | undefined;

  /**
   * The name of exported output value. Use this name and the `Fn::ImportValue` function to import the associated value into other stacks. The name is defined in the `Export` field in the associated stack's `Outputs` section.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of the exported output, such as a resource physical ID. This value is defined in the `Export` field in the associated stack's `Outputs` section.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface ListExportsOutput {
  /**
   * The output for the ListExports action.
   *
   * @public
   */
  Exports?: Export[] | undefined;

  /**
   * If the output exceeds 100 exported output values, a string that identifies the next page of exports. If there is no additional page, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGeneratedTemplatesInput {
  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can use for the `NextToken` parameter to get the next set of results. By default the `ListGeneratedTemplates` API action will return at most 50 results in each response. The maximum value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The summary of a generated template.
 *
 * @public
 */
export interface TemplateSummary {
  /**
   * The Amazon Resource Name (ARN) of the generated template. The format is `arn:$\{Partition\}:cloudformation:$\{Region\}:$\{Account\}:generatedtemplate/$\{Id\}`. For example, `arn:aws:cloudformation:us-east-1:123456789012:generatedtemplate/2e8465c1-9a80-43ea-a3a3-4f2d692fe6dc`.
   *
   * @public
   */
  GeneratedTemplateId?: string | undefined;

  /**
   * The name of the generated template.
   *
   * @public
   */
  GeneratedTemplateName?: string | undefined;

  /**
   * The status of the template generation. Supported values are:
   *
   * - `CreatePending` - the creation of the template is pending.
   * - `CreateInProgress` - the creation of the template is in progress.
   * - `DeletePending` - the deletion of the template is pending.
   * - `DeleteInProgress` - the deletion of the template is in progress.
   * - `UpdatePending` - the update of the template is pending.
   * - `UpdateInProgress` - the update of the template is in progress.
   * - `Failed` - the template operation failed.
   * - `Complete` - the template operation is complete.
   *
   * @public
   */
  Status?: GeneratedTemplateStatus | undefined;

  /**
   * The reason for the current template generation status. This will provide more details if a failure happened.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The time the generated template was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time the generated template was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The number of resources in the generated template. This is a total of resources in pending, in-progress, completed, and failed states.
   *
   * @public
   */
  NumberOfResources?: number | undefined;
}

/**
 * @public
 */
export interface ListGeneratedTemplatesOutput {
  /**
   * A list of summaries of the generated templates.
   *
   * @public
   */
  Summaries?: TemplateSummary[] | undefined;

  /**
   * If the request doesn't return all the remaining results, `NextToken` is set to a token. To retrieve the next set of results, call `ListGeneratedTemplates` again and use that value for the `NextToken` parameter. If the request returns all results, `NextToken` is set to an empty string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHookResultsInput {
  /**
   * Filters results by target type. Currently, only `CHANGE_SET` and `CLOUD_CONTROL` are supported filter options.
   *
   * Required when `TargetId` is specified and cannot be used otherwise.
   *
   * @public
   */
  TargetType?: ListHookResultsTargetType | undefined;

  /**
   * Filters results by the unique identifier of the target the Hook was invoked against.
   *
   * For change sets, this is the change set ARN. When the target is a Cloud Control API operation, this value must be the `HookRequestToken` returned by the Cloud Control API request. For more information on the `HookRequestToken`, see [ProgressEvent](https://docs.aws.amazon.com/cloudcontrolapi/latest/APIReference/API_ProgressEvent.html).
   *
   * Required when `TargetType` is specified and cannot be used otherwise.
   *
   * @public
   */
  TargetId?: string | undefined;

  /**
   * Filters results by the ARN of the Hook. Can be used alone or in combination with `Status`.
   *
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * Filters results by the status of Hook invocations. Can only be used in combination with `TypeArn`. Valid values are:
   *
   * - `HOOK_IN_PROGRESS`: The Hook is currently running.
   * - `HOOK_COMPLETE_SUCCEEDED`: The Hook completed successfully.
   * - `HOOK_COMPLETE_FAILED`: The Hook completed but failed validation.
   * - `HOOK_FAILED`: The Hook encountered an error during execution.
   *
   * @public
   */
  Status?: HookStatus | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A `ListHookResults` call returns a summary of a Hook invocation.
 *
 * @public
 */
export interface HookResultSummary {
  /**
   * The unique identifier for this Hook invocation result.
   *
   * @public
   */
  HookResultId?: string | undefined;

  /**
   * The specific point in the provisioning process where the Hook is invoked.
   *
   * @public
   */
  InvocationPoint?: HookInvocationPoint | undefined;

  /**
   * The failure mode of the invocation.
   *
   * @public
   */
  FailureMode?: HookFailureMode | undefined;

  /**
   * The name of the Hook that was invoked.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The version of the Hook that was invoked.
   *
   * @public
   */
  TypeVersionId?: string | undefined;

  /**
   * The version of the Hook configuration.
   *
   * @public
   */
  TypeConfigurationVersionId?: string | undefined;

  /**
   * The status of the Hook invocation. The following statuses are possible:
   *
   * - `HOOK_IN_PROGRESS`: The Hook is currently running.
   * - `HOOK_COMPLETE_SUCCEEDED`: The Hook completed successfully.
   * - `HOOK_COMPLETE_FAILED`: The Hook completed but failed validation.
   * - `HOOK_FAILED`: The Hook encountered an error during execution.
   *
   * @public
   */
  Status?: HookStatus | undefined;

  /**
   * A description of the Hook results status. For example, if the Hook result is in a failed state, this may contain additional information for the failed state.
   *
   * @public
   */
  HookStatusReason?: string | undefined;

  /**
   * The timestamp when the Hook was invoked.
   *
   * Only shown in responses when the request does not specify `TargetType` and `TargetId` filters.
   *
   * @public
   */
  InvokedAt?: Date | undefined;

  /**
   * The target type that the Hook was invoked against.
   *
   * @public
   */
  TargetType?: ListHookResultsTargetType | undefined;

  /**
   * The unique identifier of the Hook invocation target.
   *
   * @public
   */
  TargetId?: string | undefined;

  /**
   * The ARN of the Hook that was invoked.
   *
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target stack or request token of the Cloud Control API operation.
   *
   * Only shown in responses when the request does not specify `TargetType` and `TargetId` filters.
   *
   * @public
   */
  HookExecutionTarget?: string | undefined;
}

/**
 * @public
 */
export interface ListHookResultsOutput {
  /**
   * The target type.
   *
   * @public
   */
  TargetType?: ListHookResultsTargetType | undefined;

  /**
   * The unique identifier of the Hook invocation target.
   *
   * @public
   */
  TargetId?: string | undefined;

  /**
   * A list of `HookResultSummary` structures that provides the status and Hook status reason for each Hook invocation for the specified target.
   *
   * @public
   */
  HookResults?: HookResultSummary[] | undefined;

  /**
   * Pagination token, `null` or empty if no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImportsInput {
  /**
   * The name of the exported output value. CloudFormation returns the stack names that are importing this value.
   *
   * @public
   */
  ExportName: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImportsOutput {
  /**
   * A list of stack names that are importing the specified exported output value.
   *
   * @public
   */
  Imports?: string[] | undefined;

  /**
   * A string that identifies the next page of exports. If there is no additional page, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Identifies a scanned resource. This is used with the `ListResourceScanRelatedResources` API action.
 *
 * @public
 */
export interface ScannedResourceIdentifier {
  /**
   * The type of the resource, such as `AWS::DynamoDB::Table`. For the list of supported resources, see [Resource type support for imports and drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html) In the *CloudFormation User Guide*.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * A list of up to 256 key-value pairs that identifies the scanned resource. The key is the name of one of the primary identifiers for the resource. (Primary identifiers are specified in the `primaryIdentifier` list in the resource schema.) The value is the value of that primary identifier. For example, for a `AWS::DynamoDB::Table` resource, the primary identifiers is `TableName` so the key-value pair could be `"TableName": "MyDDBTable"`. For more information, see [primaryIdentifier](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-primaryidentifier) in the *CloudFormation Command Line Interface (CLI) User Guide*.
   *
   * @public
   */
  ResourceIdentifier: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListResourceScanRelatedResourcesInput {
  /**
   * The Amazon Resource Name (ARN) of the resource scan.
   *
   * @public
   */
  ResourceScanId: string | undefined;

  /**
   * The list of resources for which you want to get the related resources. Up to 100 resources can be provided.
   *
   * @public
   */
  Resources: ScannedResourceIdentifier[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can use for the `NextToken` parameter to get the next set of results. By default the `ListResourceScanRelatedResources` API action will return up to 100 results in each response. The maximum value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A scanned resource returned by `ListResourceScanResources` or `ListResourceScanRelatedResources`.
 *
 * @public
 */
export interface ScannedResource {
  /**
   * The type of the resource, such as `AWS::DynamoDB::Table`. For the list of supported resources, see [Resource type support for imports and drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html) In the *CloudFormation User Guide*
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * A list of up to 256 key-value pairs that identifies for the scanned resource. The key is the name of one of the primary identifiers for the resource. (Primary identifiers are specified in the `primaryIdentifier` list in the resource schema.) The value is the value of that primary identifier. For example, for a `AWS::DynamoDB::Table` resource, the primary identifiers is `TableName` so the key-value pair could be `"TableName": "MyDDBTable"`. For more information, see [primaryIdentifier](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html#schema-properties-primaryidentifier) in the *CloudFormation Command Line Interface (CLI) User Guide*.
   *
   * @public
   */
  ResourceIdentifier?: Record<string, string> | undefined;

  /**
   * If `true`, the resource is managed by a CloudFormation stack.
   *
   * @public
   */
  ManagedByStack?: boolean | undefined;
}

/**
 * @public
 */
export interface ListResourceScanRelatedResourcesOutput {
  /**
   * List of up to `MaxResults` resources in the specified resource scan related to the specified resources.
   *
   * @public
   */
  RelatedResources?: ScannedResource[] | undefined;

  /**
   * If the request doesn't return all the remaining results, `NextToken` is set to a token. To retrieve the next set of results, call `ListResourceScanRelatedResources` again and use that value for the `NextToken` parameter. If the request returns all results, `NextToken` is set to an empty string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceScanResourcesInput {
  /**
   * The Amazon Resource Name (ARN) of the resource scan.
   *
   * @public
   */
  ResourceScanId: string | undefined;

  /**
   * If specified, the returned resources will have the specified resource identifier (or one of them in the case where the resource has multiple identifiers).
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * If specified, the returned resources will be of any of the resource types with the specified prefix.
   *
   * @public
   */
  ResourceTypePrefix?: string | undefined;

  /**
   * If specified, the returned resources will have a matching tag key.
   *
   * @public
   */
  TagKey?: string | undefined;

  /**
   * If specified, the returned resources will have a matching tag value.
   *
   * @public
   */
  TagValue?: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can use for the `NextToken` parameter to get the next set of results. By default the `ListResourceScanResources` API action will return at most 100 results in each response. The maximum value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListResourceScanResourcesOutput {
  /**
   * List of up to `MaxResults` resources in the specified resource scan that match all of the specified filters.
   *
   * @public
   */
  Resources?: ScannedResource[] | undefined;

  /**
   * If the request doesn't return all the remaining results, `NextToken` is set to a token. To retrieve the next set of results, call `ListResourceScanResources` again and use that value for the `NextToken` parameter. If the request returns all results, `NextToken` is set to an empty string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceScansInput {
  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can use for the `NextToken` parameter to get the next set of results. The default value is 10. The maximum value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The scan type that you want to get summary information about. The default is `FULL`.
   *
   * @public
   */
  ScanTypeFilter?: ScanType | undefined;
}

/**
 * A summary of the resource scan. This is returned by the `ListResourceScan` API action.
 *
 * @public
 */
export interface ResourceScanSummary {
  /**
   * The Amazon Resource Name (ARN) of the resource scan.
   *
   * @public
   */
  ResourceScanId?: string | undefined;

  /**
   * Status of the resource scan.
   *
   * - **IN_PROGRESS**
   *
   *   The resource scan is still in progress.
   *
   * - **COMPLETE**
   *
   *   The resource scan is complete.
   *
   * - **EXPIRED**
   *
   *   The resource scan has expired.
   *
   * - **FAILED**
   *
   *   The resource scan has failed.
   *
   * @public
   */
  Status?: ResourceScanStatus | undefined;

  /**
   * The reason for the resource scan status, providing more information if a failure happened.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The time that the resource scan was started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time that the resource scan was finished.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The percentage of the resource scan that has been completed.
   *
   * @public
   */
  PercentageCompleted?: number | undefined;

  /**
   * The scan type that has been completed.
   *
   * @public
   */
  ScanType?: ScanType | undefined;
}

/**
 * @public
 */
export interface ListResourceScansOutput {
  /**
   * The list of scans returned.
   *
   * @public
   */
  ResourceScanSummaries?: ResourceScanSummary[] | undefined;

  /**
   * If the request doesn't return all the remaining results, `NextToken` is set to a token. To retrieve the next set of results, call `ListResourceScans` again and use that value for the `NextToken` parameter. If the request returns all results, `NextToken` is set to an empty string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStackInstanceResourceDriftsInput {
  /**
   * The name or unique ID of the StackSet that you want to list drifted resources for.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can assign to the `NextToken` request parameter to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The resource drift status of the stack instance.
   *
   * - `DELETED`: The resource differs from its expected template configuration in that the resource has been deleted.
   * - `MODIFIED`: One or more resource properties differ from their expected template values.
   * - `IN_SYNC`: The resource's actual configuration matches its expected template configuration.
   * - `NOT_CHECKED`: CloudFormation doesn't currently return this value.
   *
   * @public
   */
  StackInstanceResourceDriftStatuses?: StackResourceDriftStatus[] | undefined;

  /**
   * The name of the Amazon Web Services account that you want to list resource drifts for.
   *
   * @public
   */
  StackInstanceAccount: string | undefined;

  /**
   * The name of the Region where you want to list resource drifts.
   *
   * @public
   */
  StackInstanceRegion: string | undefined;

  /**
   * The unique ID of the drift operation.
   *
   * @public
   */
  OperationId: string | undefined;

  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * The structure containing summary information about resource drifts for a stack instance.
 *
 * @public
 */
export interface StackInstanceResourceDriftsSummary {
  /**
   * The ID of the stack instance.
   *
   * @public
   */
  StackId: string | undefined;

  /**
   * The logical name of the resource specified in the template.
   *
   * @public
   */
  LogicalResourceId: string | undefined;

  /**
   * The name or unique identifier that corresponds to a physical instance ID of a resource supported by CloudFormation.
   *
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * Context information that enables CloudFormation to uniquely identify a resource. CloudFormation uses context key-value pairs in cases where a resource's logical and physical IDs aren't enough to uniquely identify that resource. Each context key-value pair specifies a unique resource that contains the targeted resource.
   *
   * @public
   */
  PhysicalResourceIdContext?: PhysicalResourceIdContextKeyValuePair[] | undefined;

  /**
   * Type of resource. For more information, see [Amazon Web Services resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * Status of the actual configuration of the resource compared to its expected configuration. These will be present only for resources whose `StackInstanceResourceDriftStatus` is `MODIFIED`.
   *
   * @public
   */
  PropertyDifferences?: PropertyDifference[] | undefined;

  /**
   * The drift status of the resource in a stack instance.
   *
   * - `DELETED`: The resource differs from its expected template configuration in that the resource has been deleted.
   * - `MODIFIED`: One or more resource properties differ from their expected template values.
   * - `IN_SYNC`: The resource's actual configuration matches its expected template configuration.
   * - `NOT_CHECKED`: CloudFormation doesn't currently return this value.
   *
   * @public
   */
  StackResourceDriftStatus: StackResourceDriftStatus | undefined;

  /**
   * Time at which the stack instance drift detection operation was initiated.
   *
   * @public
   */
  Timestamp: Date | undefined;
}

/**
 * @public
 */
export interface ListStackInstanceResourceDriftsOutput {
  /**
   * A list of `StackInstanceResourceDriftsSummary` structures that contain information about the specified stack instances.
   *
   * @public
   */
  Summaries?: StackInstanceResourceDriftsSummary[] | undefined;

  /**
   * If the previous paginated request didn't return all of the remaining results, the response object's `NextToken` parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's `NextToken` parameter. If there are no remaining results, the previous response object's `NextToken` parameter is set to `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The filter to apply to stack instances
 *
 * @public
 */
export interface StackInstanceFilter {
  /**
   * The type of filter to apply.
   *
   * @public
   */
  Name?: StackInstanceFilterName | undefined;

  /**
   * The status to filter by.
   *
   * @public
   */
  Values?: string | undefined;
}

/**
 * @public
 */
export interface ListStackInstancesInput {
  /**
   * The name or unique ID of the StackSet that you want to list stack instances for.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can assign to the `NextToken` request parameter to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The filter to apply to stack instances
   *
   * @public
   */
  Filters?: StackInstanceFilter[] | undefined;

  /**
   * The name of the Amazon Web Services account that you want to list stack instances for.
   *
   * @public
   */
  StackInstanceAccount?: string | undefined;

  /**
   * The name of the Region where you want to list stack instances.
   *
   * @public
   */
  StackInstanceRegion?: string | undefined;

  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * The structure that contains summary information about a stack instance.
 *
 * @public
 */
export interface StackInstanceSummary {
  /**
   * The name or unique ID of the StackSet that the stack instance is associated with.
   *
   * @public
   */
  StackSetId?: string | undefined;

  /**
   * The name of the Amazon Web Services Region that the stack instance is associated with.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * [Self-managed permissions] The name of the Amazon Web Services account that the stack instance is associated with.
   *
   * @public
   */
  Account?: string | undefined;

  /**
   * The ID of the stack instance.
   *
   * @public
   */
  StackId?: string | undefined;

  /**
   * The status of the stack instance, in terms of its synchronization with its associated stack set.
   *
   * - `INOPERABLE`: A `DeleteStackInstances` operation has failed and left the stack in an unstable state. Stacks in this state are excluded from further `UpdateStackSet` operations. You might need to perform a `DeleteStackInstances` operation, with `RetainStacks` set to `true`, to delete the stack instance, and then delete the stack manually. `INOPERABLE` can be returned here when the cause is a failed import. If it's due to a failed import, the operation can be retried once the failures are fixed. To see if this is due to a failed import, call the DescribeStackInstance API operation, look at the `DetailedStatus` member returned in the `StackInstanceSummary` member.
   * - `OUTDATED`: The stack isn't currently up to date with the StackSet because:
   *
   *   - The associated stack failed during a `CreateStackSet` or `UpdateStackSet` operation.
   *   - The stack was part of a `CreateStackSet` or `UpdateStackSet` operation that failed or was stopped before the stack was created or updated.
   * - `CURRENT`: The stack is currently up to date with the StackSet.
   *
   * @public
   */
  Status?: StackInstanceStatus | undefined;

  /**
   * The explanation for the specific status code assigned to this stack instance.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The detailed status of the stack instance.
   *
   * @public
   */
  StackInstanceStatus?: StackInstanceComprehensiveStatus | undefined;

  /**
   * [Service-managed permissions] The organization root ID or organizational unit (OU) IDs that you specified for [DeploymentTargets](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html).
   *
   * @public
   */
  OrganizationalUnitId?: string | undefined;

  /**
   * Status of the stack instance's actual configuration compared to the expected template and parameter configuration of the StackSet it belongs to.
   *
   * - `DRIFTED`: The stack differs from the expected template and parameter configuration of the StackSet it belongs to. A stack instance is considered to have drifted if one or more of the resources in the associated stack have drifted.
   * - `NOT_CHECKED`: CloudFormation hasn't checked if the stack instance differs from its expected StackSet configuration.
   * - `IN_SYNC`: The stack instance's actual configuration matches its expected StackSet configuration.
   * - `UNKNOWN`: This value is reserved for future use.
   *
   * @public
   */
  DriftStatus?: StackDriftStatus | undefined;

  /**
   * Most recent time when CloudFormation performed a drift detection operation on the stack instance. This value will be `NULL` for any stack instance that drift detection hasn't yet been performed on.
   *
   * @public
   */
  LastDriftCheckTimestamp?: Date | undefined;

  /**
   * The last unique ID of a StackSet operation performed on a stack instance.
   *
   * @public
   */
  LastOperationId?: string | undefined;
}

/**
 * @public
 */
export interface ListStackInstancesOutput {
  /**
   * A list of `StackInstanceSummary` structures that contain information about the specified stack instances.
   *
   * @public
   */
  Summaries?: StackInstanceSummary[] | undefined;

  /**
   * If the request doesn't return all the remaining results, `NextToken` is set to a token. To retrieve the next set of results, call `ListStackInstances` again and assign that token to the request object's `NextToken` parameter. If the request returns all results, `NextToken` is set to `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStackRefactorActionsInput {
  /**
   * The ID associated with the stack refactor created from the CreateStackRefactor action.
   *
   * @public
   */
  StackRefactorId: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can assign to the `NextToken` request parameter to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes the stack and the action that CloudFormation will perform on it if you execute the stack refactor.
 *
 * @public
 */
export interface StackRefactorAction {
  /**
   * The action that CloudFormation takes on the stack.
   *
   * @public
   */
  Action?: StackRefactorActionType | undefined;

  /**
   * The type that will be evaluated in the `StackRefactorAction`. The following are potential `Entity` types:
   *
   * - `Stack`
   * - `Resource`
   *
   * @public
   */
  Entity?: StackRefactorActionEntity | undefined;

  /**
   * The name or unique identifier associated with the physical instance of the resource.
   *
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * A key-value pair that identifies the target resource. The key is an identifier property (for example, `BucketName` for `AWS::S3::Bucket` resources) and the value is the actual property value (for example, `MyS3Bucket`).
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * A description to help you identify the refactor.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The detection type is one of the following:
   *
   * - Auto: CloudFormation figured out the mapping on its own.
   * - Manual: The customer provided the mapping in the `ResourceMapping` parameter.
   *
   * @public
   */
  Detection?: StackRefactorDetection | undefined;

  /**
   * The description of the detection type.
   *
   * @public
   */
  DetectionReason?: string | undefined;

  /**
   * Assigns one or more tags to specified resources.
   *
   * @public
   */
  TagResources?: Tag[] | undefined;

  /**
   * Removes one or more tags to specified resources.
   *
   * @public
   */
  UntagResources?: string[] | undefined;

  /**
   * The mapping for the stack resource `Source` and stack resource `Destination`.
   *
   * @public
   */
  ResourceMapping?: ResourceMapping | undefined;
}

/**
 * @public
 */
export interface ListStackRefactorActionsOutput {
  /**
   * The stack refactor actions.
   *
   * @public
   */
  StackRefactorActions: StackRefactorAction[] | undefined;

  /**
   * If the request doesn't return all the remaining results, `NextToken` is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's `NextToken` parameter. If the request returns all results, `NextToken` is set to `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStackRefactorsInput {
  /**
   * Execution status to use as a filter. Specify one or more execution status codes to list only stack refactors with the specified execution status codes.
   *
   * @public
   */
  ExecutionStatusFilter?: StackRefactorExecutionStatus[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can assign to the `NextToken` request parameter to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The summary of a stack refactor operation.
 *
 * @public
 */
export interface StackRefactorSummary {
  /**
   * The ID associated with the stack refactor created from the CreateStackRefactor action.
   *
   * @public
   */
  StackRefactorId?: string | undefined;

  /**
   * A description to help you identify the refactor.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The operation status that's provided after calling the ExecuteStackRefactor action.
   *
   * @public
   */
  ExecutionStatus?: StackRefactorExecutionStatus | undefined;

  /**
   * A detailed explanation for the stack refactor `ExecutionStatus`.
   *
   * @public
   */
  ExecutionStatusReason?: string | undefined;

  /**
   * The stack refactor operation status that's provided after calling the CreateStackRefactor action.
   *
   * @public
   */
  Status?: StackRefactorStatus | undefined;

  /**
   * A detailed explanation for the stack refactor `Status`.
   *
   * @public
   */
  StatusReason?: string | undefined;
}

/**
 * @public
 */
export interface ListStackRefactorsOutput {
  /**
   * Provides a summary of a stack refactor, including the following:
   *
   * - `StackRefactorId`
   * - `Status`
   * - `StatusReason`
   * - `ExecutionStatus`
   * - `ExecutionStatusReason`
   * - `Description`
   *
   * @public
   */
  StackRefactorSummaries: StackRefactorSummary[] | undefined;

  /**
   * If the request doesn't return all the remaining results, `NextToken` is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's `NextToken` parameter. If the request returns all results, `NextToken` is set to `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The input for the ListStackResource action.
 *
 * @public
 */
export interface ListStackResourcesInput {
  /**
   * The name or the unique stack ID that is associated with the stack, which aren't always interchangeable:
   *
   * - Running stacks: You can specify either the stack's name or its unique stack ID.
   * - Deleted stacks: You must specify the unique stack ID.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summarizes information about whether the resource's actual configuration differs, or has *drifted*, from its expected configuration.
 *
 * @public
 */
export interface StackResourceDriftInformationSummary {
  /**
   * Status of the resource's actual configuration compared to its expected configuration.
   *
   * - `DELETED`: The resource differs from its expected configuration in that it has been deleted.
   * - `MODIFIED`: The resource differs from its expected configuration.
   * - `NOT_CHECKED`: CloudFormation hasn't checked if the resource differs from its expected configuration.
   *
   *   Any resources that don't currently support drift detection have a status of `NOT_CHECKED`. For more information, see [Resource type support for imports and drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import-supported-resources.html). If you performed a ContinueUpdateRollback operation on a stack, resources skipped using `ResourcesToSkip` or `ForceRollback` also have a status of `NOT_CHECKED`. To detect whether a skipped resource actually differs from the template, run DetectStackResourceDrift. For more information about skipping resources during rollback operations, see [Continue rolling back an update](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html) in the *CloudFormation User Guide*.
   * - `IN_SYNC`: The resource's actual configuration matches its expected configuration.
   *
   * @public
   */
  StackResourceDriftStatus: StackResourceDriftStatus | undefined;

  /**
   * When CloudFormation last checked if the resource had drifted from its expected configuration.
   *
   * @public
   */
  LastCheckTimestamp?: Date | undefined;
}

/**
 * Contains high-level information about the specified stack resource.
 *
 * @public
 */
export interface StackResourceSummary {
  /**
   * The logical name of the resource specified in the template.
   *
   * @public
   */
  LogicalResourceId: string | undefined;

  /**
   * The name or unique identifier that corresponds to a physical instance ID of the resource.
   *
   * @public
   */
  PhysicalResourceId?: string | undefined;

  /**
   * Type of resource. (For more information, see [Amazon Web Services resource and property types reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html) in the *CloudFormation User Guide*.)
   *
   * @public
   */
  ResourceType: string | undefined;

  /**
   * Time the status was updated.
   *
   * @public
   */
  LastUpdatedTimestamp: Date | undefined;

  /**
   * Current status of the resource.
   *
   * @public
   */
  ResourceStatus: ResourceStatus | undefined;

  /**
   * Success/failure message associated with the resource.
   *
   * @public
   */
  ResourceStatusReason?: string | undefined;

  /**
   * Information about whether the resource's actual configuration differs, or has *drifted*, from its expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see [Detect unmanaged configuration changes to stacks and resources with drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html).
   *
   * @public
   */
  DriftInformation?: StackResourceDriftInformationSummary | undefined;

  /**
   * Contains information about the module from which the resource was created, if the resource was created from a module included in the stack template.
   *
   * @public
   */
  ModuleInfo?: ModuleInfo | undefined;
}

/**
 * The output for a ListStackResources action.
 *
 * @public
 */
export interface ListStackResourcesOutput {
  /**
   * A list of `StackResourceSummary` structures.
   *
   * @public
   */
  StackResourceSummaries?: StackResourceSummary[] | undefined;

  /**
   * If the output exceeds 1 MB, a string that identifies the next page of stack resources. If no additional page exists, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The input for ListStacks action.
 *
 * @public
 */
export interface ListStacksInput {
  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Stack status to use as a filter. Specify one or more stack status codes to list only stacks with the specified status codes. For a complete list of stack status codes, see the `StackStatus` parameter of the Stack data type.
   *
   * @public
   */
  StackStatusFilter?: StackStatus[] | undefined;
}

/**
 * Contains information about whether the stack's actual configuration differs, or has *drifted*, from its expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted.
 *
 * @public
 */
export interface StackDriftInformationSummary {
  /**
   * Status of the stack's actual configuration compared to its expected template configuration.
   *
   * - `DRIFTED`: The stack differs from its expected template configuration. A stack is considered to have drifted if one or more of its resources have drifted.
   * - `NOT_CHECKED`: CloudFormation hasn't checked if the stack differs from its expected template configuration.
   * - `IN_SYNC`: The stack's actual configuration matches its expected template configuration.
   * - `UNKNOWN`: CloudFormation could not run drift detection for a resource in the stack.
   *
   * @public
   */
  StackDriftStatus: StackDriftStatus | undefined;

  /**
   * Most recent time when a drift detection operation was initiated on the stack, or any of its individual resources that support drift detection.
   *
   * @public
   */
  LastCheckTimestamp?: Date | undefined;
}

/**
 * The `StackSummary` Data Type
 *
 * @public
 */
export interface StackSummary {
  /**
   * Unique stack identifier.
   *
   * @public
   */
  StackId?: string | undefined;

  /**
   * The name associated with the stack.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The template description of the template used to create the stack.
   *
   * @public
   */
  TemplateDescription?: string | undefined;

  /**
   * The time the stack was created.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The time the stack was last updated. This field will only be returned if the stack has been updated at least once.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The time the stack was deleted.
   *
   * @public
   */
  DeletionTime?: Date | undefined;

  /**
   * The current status of the stack.
   *
   * @public
   */
  StackStatus: StackStatus | undefined;

  /**
   * Success/Failure message associated with the stack status.
   *
   * @public
   */
  StackStatusReason?: string | undefined;

  /**
   * For nested stacks, the stack ID of the direct parent of this stack. For the first level of nested stacks, the root stack is also the parent stack.
   *
   * For more information, see [Nested stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  ParentId?: string | undefined;

  /**
   * For nested stacks, the stack ID of the top-level stack to which the nested stack ultimately belongs.
   *
   * For more information, see [Nested stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  RootId?: string | undefined;

  /**
   * Summarizes information about whether a stack's actual configuration differs, or has *drifted*, from its expected configuration, as defined in the stack template and any values specified as template parameters. For more information, see [Detect unmanaged configuration changes to stacks and resources with drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html).
   *
   * @public
   */
  DriftInformation?: StackDriftInformationSummary | undefined;

  /**
   * Information about the most recent operations performed on this stack.
   *
   * @public
   */
  LastOperations?: OperationEntry[] | undefined;
}

/**
 * The output for ListStacks action.
 *
 * @public
 */
export interface ListStacksOutput {
  /**
   * A list of `StackSummary` structures that contains information about the specified stacks.
   *
   * @public
   */
  StackSummaries?: StackSummary[] | undefined;

  /**
   * If the output exceeds 1 MB in size, a string that identifies the next page of stacks. If no additional page exists, this value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStackSetAutoDeploymentTargetsInput {
  /**
   * The name or unique ID of the StackSet that you want to get automatic deployment targets for.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can assign to the `NextToken` request parameter to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * One of the targets for the StackSet. Returned by the [ListStackSetAutoDeploymentTargets](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetAutoDeploymentTargets.html) API operation.
 *
 * @public
 */
export interface StackSetAutoDeploymentTargetSummary {
  /**
   * The organization root ID or organizational unit (OU) IDs where the StackSet is targeted.
   *
   * @public
   */
  OrganizationalUnitId?: string | undefined;

  /**
   * The list of Regions targeted for this organization or OU.
   *
   * @public
   */
  Regions?: string[] | undefined;
}

/**
 * @public
 */
export interface ListStackSetAutoDeploymentTargetsOutput {
  /**
   * An array of summaries of the deployment targets for the StackSet.
   *
   * @public
   */
  Summaries?: StackSetAutoDeploymentTargetSummary[] | undefined;

  /**
   * If the request doesn't return all the remaining results, `NextToken` is set to a token. To retrieve the next set of results, call [ListStackSetAutoDeploymentTargets](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ListStackSetAutoDeploymentTargets.html) again and use that value for the `NextToken` parameter. If the request returns all results, `NextToken` is set to an empty string.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The status that operation results are filtered by.
 *
 * @public
 */
export interface OperationResultFilter {
  /**
   * The type of filter to apply.
   *
   * @public
   */
  Name?: OperationResultFilterName | undefined;

  /**
   * The value to filter by.
   *
   * @public
   */
  Values?: string | undefined;
}

/**
 * @public
 */
export interface ListStackSetOperationResultsInput {
  /**
   * The name or unique ID of the StackSet that you want to get operation results for.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * The ID of the StackSet operation.
   *
   * @public
   */
  OperationId: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can assign to the `NextToken` request parameter to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;

  /**
   * The filter to apply to operation results.
   *
   * @public
   */
  Filters?: OperationResultFilter[] | undefined;
}

/**
 * The structure that contains information about a specified operation's results for a given account in a given Region.
 *
 * @public
 */
export interface StackSetOperationResultSummary {
  /**
   * [Self-managed permissions] The name of the Amazon Web Services account for this operation result.
   *
   * @public
   */
  Account?: string | undefined;

  /**
   * The name of the Amazon Web Services Region for this operation result.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * The result status of the StackSet operation for the given account in the given Region.
   *
   * - `CANCELLED`: The operation in the specified account and Region has been canceled. This is either because a user has stopped the StackSet operation, or because the failure tolerance of the StackSet operation has been exceeded.
   * - `FAILED`: The operation in the specified account and Region failed.
   *
   *   If the StackSet operation fails in enough accounts within a Region, the failure tolerance for the StackSet operation as a whole might be exceeded.
   * - `RUNNING`: The operation in the specified account and Region is currently in progress.
   * - `PENDING`: The operation in the specified account and Region has yet to start.
   * - `SUCCEEDED`: The operation in the specified account and Region completed successfully.
   *
   * @public
   */
  Status?: StackSetOperationResultStatus | undefined;

  /**
   * The reason for the assigned result status.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The results of the account gate function CloudFormation invokes, if present, before proceeding with StackSet operations in an account.
   *
   * @public
   */
  AccountGateResult?: AccountGateResult | undefined;

  /**
   * [Service-managed permissions] The organization root ID or organizational unit (OU) IDs that you specified for [DeploymentTargets](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DeploymentTargets.html).
   *
   * @public
   */
  OrganizationalUnitId?: string | undefined;
}

/**
 * @public
 */
export interface ListStackSetOperationResultsOutput {
  /**
   * A list of `StackSetOperationResultSummary` structures that contain information about the specified operation results, for accounts and Amazon Web Services Regions that are included in the operation.
   *
   * @public
   */
  Summaries?: StackSetOperationResultSummary[] | undefined;

  /**
   * If the request doesn't return all results, `NextToken` is set to a token. To retrieve the next set of results, call `ListOperationResults` again and assign that token to the request object's `NextToken` parameter. If there are no remaining results, `NextToken` is set to `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStackSetOperationsInput {
  /**
   * The name or unique ID of the StackSet that you want to get operation summaries for.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can assign to the `NextToken` request parameter to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * The structures that contain summary information about the specified operation.
 *
 * @public
 */
export interface StackSetOperationSummary {
  /**
   * The unique ID of the StackSet operation.
   *
   * @public
   */
  OperationId?: string | undefined;

  /**
   * The type of operation: `CREATE`, `UPDATE`, or `DELETE`. Create and delete operations affect only the specified stack instances that are associated with the specified StackSet. Update operations affect both the StackSet itself and *all* associated StackSet instances.
   *
   * @public
   */
  Action?: StackSetOperationAction | undefined;

  /**
   * The overall status of the operation.
   *
   * - `FAILED`: The operation exceeded the specified failure tolerance. The failure tolerance value that you've set for an operation is applied for each Region during stack create and update operations. If the number of failed stacks within a Region exceeds the failure tolerance, the status of the operation in the Region is set to `FAILED`. This in turn sets the status of the operation as a whole to `FAILED`, and CloudFormation cancels the operation in any remaining Regions.
   * - `QUEUED`: [Service-managed permissions] For automatic deployments that require a sequence of operations, the operation is queued to be performed. For more information, see the [StackSet status codes](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-status-codes) in the *CloudFormation User Guide*.
   * - `RUNNING`: The operation is currently being performed.
   * - `STOPPED`: The user has canceled the operation.
   * - `STOPPING`: The operation is in the process of stopping, at user request.
   * - `SUCCEEDED`: The operation completed creating or updating all the specified stacks without exceeding the failure tolerance for the operation.
   *
   * @public
   */
  Status?: StackSetOperationStatus | undefined;

  /**
   * The time at which the operation was initiated. Note that the creation times for the StackSet operation might differ from the creation time of the individual stacks themselves. This is because CloudFormation needs to perform preparatory work for the operation, such as dispatching the work to the requested Regions, before actually creating the first stacks.
   *
   * @public
   */
  CreationTimestamp?: Date | undefined;

  /**
   * The time at which the StackSet operation ended, across all accounts and Regions specified. Note that this doesn't necessarily mean that the StackSet operation was successful, or even attempted, in each account or Region.
   *
   * @public
   */
  EndTimestamp?: Date | undefined;

  /**
   * The status of the operation in details.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * Detailed information about the StackSet operation.
   *
   * @public
   */
  StatusDetails?: StackSetOperationStatusDetails | undefined;

  /**
   * The user-specified preferences for how CloudFormation performs a StackSet operation.
   *
   * For more information about maximum concurrent accounts and failure tolerance, see [StackSet operation options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options).
   *
   * @public
   */
  OperationPreferences?: StackSetOperationPreferences | undefined;
}

/**
 * @public
 */
export interface ListStackSetOperationsOutput {
  /**
   * A list of `StackSetOperationSummary` structures that contain summary information about operations for the specified StackSet.
   *
   * @public
   */
  Summaries?: StackSetOperationSummary[] | undefined;

  /**
   * If the request doesn't return all results, `NextToken` is set to a token. To retrieve the next set of results, call `ListOperationResults` again and assign that token to the request object's `NextToken` parameter. If there are no remaining results, `NextToken` is set to `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListStackSetsInput {
  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can assign to the `NextToken` request parameter to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The status of the StackSets that you want to get summary information about.
   *
   * @public
   */
  Status?: StackSetStatus | undefined;

  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * The structures that contain summary information about the specified StackSet.
 *
 * @public
 */
export interface StackSetSummary {
  /**
   * The name of the StackSet.
   *
   * @public
   */
  StackSetName?: string | undefined;

  /**
   * The ID of the StackSet.
   *
   * @public
   */
  StackSetId?: string | undefined;

  /**
   * A description of the StackSet that you specify when the StackSet is created or updated.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The status of the StackSet.
   *
   * @public
   */
  Status?: StackSetStatus | undefined;

  /**
   * [Service-managed permissions] Describes whether StackSets automatically deploys to Organizations accounts that are added to a target organizational unit (OU).
   *
   * @public
   */
  AutoDeployment?: AutoDeployment | undefined;

  /**
   * Describes how the IAM roles required for StackSet operations are created.
   *
   * - With `self-managed` permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see [Grant self-managed permissions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html).
   * - With `service-managed` permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by Organizations. For more information, see [Activate trusted access for StackSets with Organizations](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate-trusted-access.html).
   *
   * @public
   */
  PermissionModel?: PermissionModels | undefined;

  /**
   * Status of the StackSet's actual configuration compared to its expected template and parameter configuration.
   *
   * - `DRIFTED`: One or more of the stack instances belonging to the StackSet differs from the expected template and parameter configuration. A stack instance is considered to have drifted if one or more of the resources in the associated stack have drifted.
   * - `NOT_CHECKED`: CloudFormation hasn't checked the StackSet for drift.
   * - `IN_SYNC`: All the stack instances belonging to the StackSet match the expected template and parameter configuration.
   * - `UNKNOWN`: This value is reserved for future use.
   *
   * @public
   */
  DriftStatus?: StackDriftStatus | undefined;

  /**
   * Most recent time when CloudFormation performed a drift detection operation on the StackSet. This value will be `NULL` for any StackSet that drift detection hasn't yet been performed on.
   *
   * @public
   */
  LastDriftCheckTimestamp?: Date | undefined;

  /**
   * Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
   *
   * @public
   */
  ManagedExecution?: ManagedExecution | undefined;
}

/**
 * @public
 */
export interface ListStackSetsOutput {
  /**
   * A list of `StackSetSummary` structures that contain information about the user's StackSets.
   *
   * @public
   */
  Summaries?: StackSetSummary[] | undefined;

  /**
   * If the request doesn't return all of the remaining results, `NextToken` is set to a token. To retrieve the next set of results, call `ListStackInstances` again and assign that token to the request object's `NextToken` parameter. If the request returns all results, `NextToken` is set to `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTypeRegistrationsInput {
  /**
   * The kind of extension.
   *
   * Conditional: You must specify either `TypeName` and `Type`, or `Arn`.
   *
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * The name of the extension.
   *
   * Conditional: You must specify either `TypeName` and `Type`, or `Arn`.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the extension.
   *
   * Conditional: You must specify either `TypeName` and `Type`, or `Arn`.
   *
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * The current status of the extension registration request.
   *
   * The default is `IN_PROGRESS`.
   *
   * @public
   */
  RegistrationStatusFilter?: RegistrationStatus | undefined;

  /**
   * The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can assign to the `NextToken` request parameter to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTypeRegistrationsOutput {
  /**
   * A list of extension registration tokens.
   *
   * Use DescribeTypeRegistration to return detailed information about a type registration request.
   *
   * @public
   */
  RegistrationTokenList?: string[] | undefined;

  /**
   * If the request doesn't return all the remaining results, `NextToken` is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's `NextToken` parameter. If the request returns all results, `NextToken` is set to `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Filter criteria to use in determining which extensions to return.
 *
 * @public
 */
export interface TypeFilters {
  /**
   * The category of extensions to return.
   *
   * - `REGISTERED`: Private extensions that have been registered for this account and Region.
   * - `ACTIVATED`: Public extensions that have been activated for this account and Region.
   * - `THIRD_PARTY`: Extensions available for use from publishers other than Amazon. This includes:
   *
   *   - Private extensions registered in the account.
   *   - Public extensions from publishers other than Amazon, whether activated or not.
   * - `AWS_TYPES`: Extensions available for use from Amazon.
   *
   * @public
   */
  Category?: Category | undefined;

  /**
   * The id of the publisher of the extension.
   *
   * Extensions published by Amazon aren't assigned a publisher ID. Use the `AWS_TYPES` category to specify a list of types published by Amazon.
   *
   * @public
   */
  PublisherId?: string | undefined;

  /**
   * A prefix to use as a filter for results.
   *
   * @public
   */
  TypeNamePrefix?: string | undefined;
}

/**
 * @public
 */
export interface ListTypesInput {
  /**
   * The scope at which the extensions are visible and usable in CloudFormation operations.
   *
   * Valid values include:
   *
   * - `PRIVATE`: Extensions that are visible and usable within this account and Region. This includes:
   *
   *   - Private extensions you have registered in this account and Region.
   *   - Public extensions that you have activated in this account and Region.
   * - `PUBLIC`: Extensions that are publicly visible and available to be activated within any Amazon Web Services account. This includes extensions from Amazon Web Services and third-party publishers.
   *
   * The default is `PRIVATE`.
   *
   * @public
   */
  Visibility?: Visibility | undefined;

  /**
   * For resource types, the provisioning behavior of the resource type. CloudFormation determines the provisioning type during registration, based on the types of handlers in the schema handler package submitted.
   *
   * Valid values include:
   *
   * - `FULLY_MUTABLE`: The resource type includes an update handler to process updates to the type during stack update operations.
   * - `IMMUTABLE`: The resource type doesn't include an update handler, so the type can't be updated and must instead be replaced during stack update operations.
   * - `NON_PROVISIONABLE`: The resource type doesn't include create, read, and delete handlers, and therefore can't actually be provisioned.
   *
   * The default is `FULLY_MUTABLE`.
   *
   * @public
   */
  ProvisioningType?: ProvisioningType | undefined;

  /**
   * The deprecation status of the extension that you want to get summary information about.
   *
   * Valid values include:
   *
   * - `LIVE`: The extension is registered for use in CloudFormation operations.
   * - `DEPRECATED`: The extension has been deregistered and can no longer be used in CloudFormation operations.
   *
   * @public
   */
  DeprecatedStatus?: DeprecatedStatus | undefined;

  /**
   * The type of extension.
   *
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * Filter criteria to use in determining which extensions to return.
   *
   * Filters must be compatible with `Visibility` to return valid results. For example, specifying `AWS_TYPES` for `Category` and `PRIVATE` for `Visibility` returns an empty list of types, but specifying `PUBLIC` for `Visibility` returns the desired list.
   *
   * @public
   */
  Filters?: TypeFilters | undefined;

  /**
   * The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can assign to the `NextToken` request parameter to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains summary information about the specified CloudFormation extension.
 *
 * @public
 */
export interface TypeSummary {
  /**
   * The kind of extension.
   *
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * The name of the extension.
   *
   * If you specified a `TypeNameAlias` when you call the [ActivateType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html) API operation in your account and Region, CloudFormation considers that alias as the type name.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The ID of the default version of the extension. The default version is used when the extension version isn't specified.
   *
   * This applies only to private extensions you have registered in your account. For public extensions, both those provided by Amazon and published by third parties, CloudFormation returns `null`. For more information, see [RegisterType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html).
   *
   * To set the default version of an extension, use SetTypeDefaultVersion.
   *
   * @public
   */
  DefaultVersionId?: string | undefined;

  /**
   * The ARN of the extension.
   *
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * When the specified extension version was registered. This applies only to:
   *
   * - Private extensions you have registered in your account. For more information, see [RegisterType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html).
   * - Public extensions you have activated in your account with auto-update specified. For more information, see [ActivateType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html).
   *
   * For all other extension types, CloudFormation returns `null`.
   *
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * The description of the extension.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the extension publisher, if the extension is published by a third party. Extensions published by Amazon don't return a publisher ID.
   *
   * @public
   */
  PublisherId?: string | undefined;

  /**
   * For public extensions that have been activated for this account and Region, the type name of the public extension.
   *
   * If you specified a `TypeNameAlias` when enabling the extension in this account and Region, CloudFormation treats that alias as the extension's type name within the account and Region, not the type name of the public extension. For more information, see [Use aliases to refer to extensions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-alias) in the *CloudFormation User Guide*.
   *
   * @public
   */
  OriginalTypeName?: string | undefined;

  /**
   * For public extensions that have been activated for this account and Region, the version of the public extension to be used for CloudFormation operations in this account and Region.
   *
   * How you specified `AutoUpdate` when enabling the extension affects whether CloudFormation automatically updates the extension in this account and Region when a new version is released. For more information, see [Automatically use new versions of extensions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-auto) in the *CloudFormation User Guide*.
   *
   * @public
   */
  PublicVersionNumber?: string | undefined;

  /**
   * For public extensions that have been activated for this account and Region, the latest version of the public extension *that is available*. For any extensions other than activated third-party extensions, CloudFormation returns `null`.
   *
   * How you specified `AutoUpdate` when enabling the extension affects whether CloudFormation automatically updates the extension in this account and Region when a new version is released. For more information, see [Automatically use new versions of extensions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-auto) in the *CloudFormation User Guide*.
   *
   * @public
   */
  LatestPublicVersion?: string | undefined;

  /**
   * The service used to verify the publisher identity.
   *
   * For more information, see [Publishing extensions to make them available for public use](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html) in the *CloudFormation Command Line Interface (CLI) User Guide*.
   *
   * @public
   */
  PublisherIdentity?: IdentityProvider | undefined;

  /**
   * The publisher name, as defined in the public profile for that publisher in the service used to verify the publisher identity.
   *
   * @public
   */
  PublisherName?: string | undefined;

  /**
   * Whether the extension is activated for this account and Region.
   *
   * This applies only to third-party public extensions. Extensions published by Amazon are activated by default.
   *
   * @public
   */
  IsActivated?: boolean | undefined;
}

/**
 * @public
 */
export interface ListTypesOutput {
  /**
   * A list of `TypeSummary` structures that contain information about the specified extensions.
   *
   * @public
   */
  TypeSummaries?: TypeSummary[] | undefined;

  /**
   * If the request doesn't return all the remaining results, `NextToken` is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's `NextToken` parameter. If the request returns all results, `NextToken` is set to `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTypeVersionsInput {
  /**
   * The kind of the extension.
   *
   * Conditional: You must specify either `TypeName` and `Type`, or `Arn`.
   *
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * The name of the extension for which you want version summary information.
   *
   * Conditional: You must specify either `TypeName` and `Type`, or `Arn`.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the extension for which you want version summary information.
   *
   * Conditional: You must specify either `TypeName` and `Type`, or `Arn`.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The maximum number of results to be returned with a single call. If the number of available results exceeds this maximum, the response includes a `NextToken` value that you can assign to the `NextToken` request parameter to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The deprecation status of the extension versions that you want to get summary information about.
   *
   * Valid values include:
   *
   * - `LIVE`: The extension version is registered and can be used in CloudFormation operations, dependent on its provisioning behavior and visibility scope.
   * - `DEPRECATED`: The extension version has been deregistered and can no longer be used in CloudFormation operations.
   *
   * The default is `LIVE`.
   *
   * @public
   */
  DeprecatedStatus?: DeprecatedStatus | undefined;

  /**
   * The publisher ID of the extension publisher.
   *
   * Extensions published by Amazon aren't assigned a publisher ID.
   *
   * @public
   */
  PublisherId?: string | undefined;
}

/**
 * Contains summary information about a specific version of a CloudFormation extension.
 *
 * @public
 */
export interface TypeVersionSummary {
  /**
   * The kind of extension.
   *
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * The name of the extension.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The ID of a specific version of the extension. The version ID is the value at the end of the ARN assigned to the extension version when it's registered.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * Whether the specified extension version is set as the default version.
   *
   * This applies only to private extensions you have registered in your account, and extensions published by Amazon. For public third-party extensions, CloudFormation returns `null`.
   *
   * @public
   */
  IsDefaultVersion?: boolean | undefined;

  /**
   * The ARN of the extension version.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * When the version was registered.
   *
   * @public
   */
  TimeCreated?: Date | undefined;

  /**
   * The description of the extension version.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * For public extensions that have been activated for this account and Region, the version of the public extension to be used for CloudFormation operations in this account and Region. For any extensions other than activated third-party extensions, CloudFormation returns `null`.
   *
   * How you specified `AutoUpdate` when enabling the extension affects whether CloudFormation automatically updates the extension in this account and Region when a new version is released. For more information, see [Automatically use new versions of extensions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html#registry-public-enable-auto) in the *CloudFormation User Guide*.
   *
   * @public
   */
  PublicVersionNumber?: string | undefined;
}

/**
 * @public
 */
export interface ListTypeVersionsOutput {
  /**
   * A list of `TypeVersionSummary` structures that contain information about the specified extension's versions.
   *
   * @public
   */
  TypeVersionSummaries?: TypeVersionSummary[] | undefined;

  /**
   * If the request doesn't return all of the remaining results, `NextToken` is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's `NextToken` parameter. If the request returns all results, `NextToken` is set to `null`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PublishTypeInput {
  /**
   * The type of the extension.
   *
   * Conditional: You must specify `Arn`, or `TypeName` and `Type`.
   *
   * @public
   */
  Type?: ThirdPartyType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the extension.
   *
   * Conditional: You must specify `Arn`, or `TypeName` and `Type`.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the extension.
   *
   * Conditional: You must specify `Arn`, or `TypeName` and `Type`.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The version number to assign to this version of the extension.
   *
   * Use the following format, and adhere to semantic versioning when assigning a version number to your extension:
   *
   * `MAJOR.MINOR.PATCH`
   *
   * For more information, see [Semantic Versioning 2.0.0](https://semver.org/).
   *
   * If you don't specify a version number, CloudFormation increments the version number by one minor version release.
   *
   * You cannot specify a version number the first time you publish a type. CloudFormation automatically sets the first version number to be `1.0.0`.
   *
   * @public
   */
  PublicVersionNumber?: string | undefined;
}

/**
 * @public
 */
export interface PublishTypeOutput {
  /**
   * The Amazon Resource Name (ARN) assigned to the public extension upon publication.
   *
   * @public
   */
  PublicTypeArn?: string | undefined;
}

/**
 * @public
 */
export interface RecordHandlerProgressInput {
  /**
   * Reserved for use by the [CloudFormation CLI](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html).
   *
   * @public
   */
  BearerToken: string | undefined;

  /**
   * Reserved for use by the [CloudFormation CLI](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html).
   *
   * @public
   */
  OperationStatus: OperationStatus | undefined;

  /**
   * Reserved for use by the [CloudFormation CLI](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html).
   *
   * @public
   */
  CurrentOperationStatus?: OperationStatus | undefined;

  /**
   * Reserved for use by the [CloudFormation CLI](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html).
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Reserved for use by the [CloudFormation CLI](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html).
   *
   * @public
   */
  ErrorCode?: HandlerErrorCode | undefined;

  /**
   * Reserved for use by the [CloudFormation CLI](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html).
   *
   * @public
   */
  ResourceModel?: string | undefined;

  /**
   * Reserved for use by the [CloudFormation CLI](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html).
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
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
   * Whether you accept the [Terms and Conditions](https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf) for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to register to publish public extensions to the CloudFormation registry.
   *
   * The default is `false`.
   *
   * @public
   */
  AcceptTermsAndConditions?: boolean | undefined;

  /**
   * If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account.
   *
   * For more information, see [Prerequisite: Registering your account to publish CloudFormation extensions](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs) in the *CloudFormation Command Line Interface (CLI) User Guide*.
   *
   * @public
   */
  ConnectionArn?: string | undefined;
}

/**
 * @public
 */
export interface RegisterPublisherOutput {
  /**
   * The ID assigned this account by CloudFormation for publishing extensions.
   *
   * @public
   */
  PublisherId?: string | undefined;
}

/**
 * @public
 */
export interface RegisterTypeInput {
  /**
   * The kind of extension.
   *
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * The name of the extension being registered.
   *
   * We suggest that extension names adhere to the following patterns:
   *
   * - For resource types, `company_or_organization::service::type`.
   * - For modules, `company_or_organization::service::type::MODULE`.
   * - For Hooks, `MyCompany::Testing::MyTestHook`.
   *
   * > **Note:**
   * >
   * > The following organization namespaces are reserved and can't be used in your extension names:
   * >
   * > - `Alexa`
   * > - `AMZN`
   * > - `Amazon`
   * > - `AWS`
   * > - `Custom`
   * > - `Dev`
   *
   * @public
   */
  TypeName: string | undefined;

  /**
   * A URL to the S3 bucket that contains the extension project package that contains the necessary files for the extension you want to register.
   *
   * For information about generating a schema handler package for the extension you want to register, see [submit](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-cli-submit.html) in the *CloudFormation Command Line Interface (CLI) User Guide*.
   *
   * > **Note:** The user registering the extension must be able to access the package in the S3 bucket. That's, the user needs to have [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html) permissions for the schema handler package. For more information, see [Actions, Resources, and Condition Keys for Amazon S3](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html) in the *Identity and Access Management User Guide*.
   *
   * @public
   */
  SchemaHandlerPackage: string | undefined;

  /**
   * Specifies logging configuration information for an extension.
   *
   * @public
   */
  LoggingConfig?: LoggingConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role for CloudFormation to assume when invoking the extension.
   *
   * For CloudFormation to assume the specified execution role, the role must contain a trust relationship with the CloudFormation service principal (`resources.cloudformation.amazonaws.com`). For more information about adding trust relationships, see [Modifying a role trust policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-managingrole-editing-console.html#roles-managingrole_edit-trust-policy) in the *Identity and Access Management User Guide*.
   *
   * If your extension calls Amazon Web Services APIs in any of its handlers, you must create an *[IAM execution role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html)* that includes the necessary permissions to call those Amazon Web Services APIs, and provision that execution role in your account. When CloudFormation needs to invoke the resource type handler, CloudFormation assumes this execution role to create a temporary session token, which it then passes to the resource type handler, thereby supplying your resource type with the appropriate credentials.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * A unique identifier that acts as an idempotency key for this registration request. Specifying a client request token prevents CloudFormation from generating more than one version of an extension from the same registration request, even if the request is submitted multiple times.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface RegisterTypeOutput {
  /**
   * The identifier for this registration request.
   *
   * Use this registration token when calling DescribeTypeRegistration, which returns information about the status and IDs of the extension registration.
   *
   * @public
   */
  RegistrationToken?: string | undefined;
}

/**
 * @public
 */
export interface RollbackStackInput {
  /**
   * The name that's associated with the stack.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to rollback the stack.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * A unique identifier for this `RollbackStack` request.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * When set to `true`, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of `Retain`.
   *
   * Default: `false`
   *
   * @public
   */
  RetainExceptOnCreate?: boolean | undefined;

  /**
   * The deployment configuration for this stack operation, including the deployment mode.
   *
   * @public
   */
  DeploymentConfig?: DeploymentConfig | undefined;
}

/**
 * @public
 */
export interface RollbackStackOutput {
  /**
   * Unique identifier of the stack.
   *
   * @public
   */
  StackId?: string | undefined;

  /**
   * A unique identifier for this rollback operation that can be used to track the operation's progress and events.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * The input for the SetStackPolicy action.
 *
 * @public
 */
export interface SetStackPolicyInput {
  /**
   * The name or unique stack ID that you want to associate a policy with.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * Structure that contains the stack policy body. For more information, see [Prevent updates to stack resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html) in the *CloudFormation User Guide*. You can specify either the `StackPolicyBody` or the `StackPolicyURL` parameter, but not both.
   *
   * @public
   */
  StackPolicyBody?: string | undefined;

  /**
   * Location of a file that contains the stack policy. The URL must point to a policy (maximum size: 16 KB) located in an Amazon S3 bucket in the same Amazon Web Services Region as the stack. The location for an Amazon S3 bucket must start with `https://`. URLs from S3 static websites are not supported.
   *
   * You can specify either the `StackPolicyBody` or the `StackPolicyURL` parameter, but not both.
   *
   * @public
   */
  StackPolicyURL?: string | undefined;
}

/**
 * @public
 */
export interface SetTypeConfigurationInput {
  /**
   * The Amazon Resource Name (ARN) for the extension in this account and Region.
   *
   * For public extensions, this will be the ARN assigned when you call the [ActivateType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_ActivateType.html) API operation in this account and Region. For private extensions, this will be the ARN assigned when you call the [RegisterType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterType.html) API operation in this account and Region.
   *
   * Do not include the extension versions suffix at the end of the ARN. You can set the configuration for an extension, but not for a specific extension version.
   *
   * @public
   */
  TypeArn?: string | undefined;

  /**
   * The configuration data for the extension in this account and Region.
   *
   * The configuration data must be formatted as JSON and validate against the extension's schema returned in the `Schema` response element of [DescribeType](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html).
   *
   * @public
   */
  Configuration: string | undefined;

  /**
   * An alias by which to refer to this extension configuration data.
   *
   * Conditional: Specifying a configuration alias is required when setting a configuration for a resource type extension.
   *
   * @public
   */
  ConfigurationAlias?: string | undefined;

  /**
   * The name of the extension.
   *
   * Conditional: You must specify `ConfigurationArn`, or `Type` and `TypeName`.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The type of extension.
   *
   * Conditional: You must specify `ConfigurationArn`, or `Type` and `TypeName`.
   *
   * @public
   */
  Type?: ThirdPartyType | undefined;
}

/**
 * @public
 */
export interface SetTypeConfigurationOutput {
  /**
   * The Amazon Resource Name (ARN) for the configuration data in this account and Region.
   *
   * Conditional: You must specify `ConfigurationArn`, or `Type` and `TypeName`.
   *
   * @public
   */
  ConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface SetTypeDefaultVersionInput {
  /**
   * The Amazon Resource Name (ARN) of the extension for which you want version summary information.
   *
   * Conditional: You must specify either `TypeName` and `Type`, or `Arn`.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The kind of extension.
   *
   * Conditional: You must specify either `TypeName` and `Type`, or `Arn`.
   *
   * @public
   */
  Type?: RegistryType | undefined;

  /**
   * The name of the extension.
   *
   * Conditional: You must specify either `TypeName` and `Type`, or `Arn`.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the extension version when it is registered.
   *
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface SetTypeDefaultVersionOutput {}

/**
 * The input for the SignalResource action.
 *
 * @public
 */
export interface SignalResourceInput {
  /**
   * The stack name or unique stack ID that includes the resource that you want to signal.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * The logical ID of the resource that you want to signal. The logical ID is the name of the resource that given in the template.
   *
   * @public
   */
  LogicalResourceId: string | undefined;

  /**
   * A unique ID of the signal. When you signal Amazon EC2 instances or Auto Scaling groups, specify the instance ID that you are signaling as the unique ID. If you send multiple signals to a single resource (such as signaling a wait condition), each signal requires a different unique ID.
   *
   * @public
   */
  UniqueId: string | undefined;

  /**
   * The status of the signal, which is either success or failure. A failure signal causes CloudFormation to immediately fail the stack creation or update.
   *
   * @public
   */
  Status: ResourceSignalStatus | undefined;
}

/**
 * @public
 */
export interface StartResourceScanInput {
  /**
   * A unique identifier for this `StartResourceScan` request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to start a new resource scan.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The scan filters to use.
   *
   * @public
   */
  ScanFilters?: ScanFilter[] | undefined;
}

/**
 * @public
 */
export interface StartResourceScanOutput {
  /**
   * The Amazon Resource Name (ARN) of the resource scan. The format is `arn:$\{Partition\}:cloudformation:$\{Region\}:$\{Account\}:resourceScan/$\{Id\}`. An example is `arn:aws:cloudformation:us-east-1:123456789012:resourceScan/f5b490f7-7ed4-428a-aa06-31ff25db0772`.
   *
   * @public
   */
  ResourceScanId?: string | undefined;
}

/**
 * @public
 */
export interface StopStackSetOperationInput {
  /**
   * The name or unique ID of the StackSet that you want to stop the operation for.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * The ID of the stack operation.
   *
   * @public
   */
  OperationId: string | undefined;

  /**
   * Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. Valid only if the StackSet uses service-managed permissions.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;
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
   * The Amazon Resource Name (ARN) of the extension.
   *
   * Conditional: You must specify `Arn`, or `TypeName` and `Type`.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The type of the extension to test.
   *
   * Conditional: You must specify `Arn`, or `TypeName` and `Type`.
   *
   * @public
   */
  Type?: ThirdPartyType | undefined;

  /**
   * The name of the extension to test.
   *
   * Conditional: You must specify `Arn`, or `TypeName` and `Type`.
   *
   * @public
   */
  TypeName?: string | undefined;

  /**
   * The version of the extension to test.
   *
   * You can specify the version id with either `Arn`, or with `TypeName` and `Type`.
   *
   * If you don't specify a version, CloudFormation uses the default version of the extension in this account and Region for testing.
   *
   * @public
   */
  VersionId?: string | undefined;

  /**
   * The S3 bucket to which CloudFormation delivers the contract test execution logs.
   *
   * CloudFormation delivers the logs by the time contract testing has completed and the extension has been assigned a test type status of `PASSED` or `FAILED`.
   *
   * The user calling `TestType` must be able to access items in the specified S3 bucket. Specifically, the user needs the following permissions:
   *
   * - `GetObject`
   * - `PutObject`
   *
   * For more information, see [Actions, Resources, and Condition Keys for Amazon S3](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazons3.html) in the *Identity and Access Management User Guide*.
   *
   * @public
   */
  LogDeliveryBucket?: string | undefined;
}

/**
 * @public
 */
export interface TestTypeOutput {
  /**
   * The Amazon Resource Name (ARN) of the extension.
   *
   * @public
   */
  TypeVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGeneratedTemplateInput {
  /**
   * The name or Amazon Resource Name (ARN) of a generated template.
   *
   * @public
   */
  GeneratedTemplateName: string | undefined;

  /**
   * An optional new name to assign to the generated template.
   *
   * @public
   */
  NewGeneratedTemplateName?: string | undefined;

  /**
   * An optional list of resources to be added to the generated template.
   *
   * @public
   */
  AddResources?: ResourceDefinition[] | undefined;

  /**
   * A list of logical ids for resources to remove from the generated template.
   *
   * @public
   */
  RemoveResources?: string[] | undefined;

  /**
   * If `true`, update the resource properties in the generated template with their current live state. This feature is useful when the resource properties in your generated a template does not reflect the live state of the resource properties. This happens when a user update the resource properties after generating a template.
   *
   * @public
   */
  RefreshAllResources?: boolean | undefined;

  /**
   * The configuration details of the generated template, including the `DeletionPolicy` and `UpdateReplacePolicy`.
   *
   * @public
   */
  TemplateConfiguration?: TemplateConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateGeneratedTemplateOutput {
  /**
   * The Amazon Resource Name (ARN) of the generated template. The format is `arn:$\{Partition\}:cloudformation:$\{Region\}:$\{Account\}:generatedtemplate/$\{Id\}`. For example, `arn:aws:cloudformation:us-east-1:123456789012:generatedtemplate/2e8465c1-9a80-43ea-a3a3-4f2d692fe6dc`.
   *
   * @public
   */
  GeneratedTemplateId?: string | undefined;
}

/**
 * The input for an UpdateStack action.
 *
 * @public
 */
export interface UpdateStackInput {
  /**
   * The name or unique stack ID of the stack to update.
   *
   * @public
   */
  StackName: string | undefined;

  /**
   * Structure that contains the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.
   *
   * Conditional: You must specify only one of the following parameters: `TemplateBody`, `TemplateURL`, or set the `UsePreviousTemplate` to `true`.
   *
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * The URL of a file that contains the template body. The URL must point to a template that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with `https://`.
   *
   * Conditional: You must specify only one of the following parameters: `TemplateBody`, `TemplateURL`, or set the `UsePreviousTemplate` to `true`.
   *
   * @public
   */
  TemplateURL?: string | undefined;

  /**
   * Reuse the existing template that is associated with the stack that you are updating.
   *
   * When using templates with the `AWS::LanguageExtensions` transform, provide the template instead of using `UsePreviousTemplate` to ensure new parameter values and Systems Manager parameter updates are applied correctly. For more information, see [AWS::LanguageExtensions transform](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/transform-aws-languageextensions.html).
   *
   * Conditional: You must specify only one of the following parameters: `TemplateBody`, `TemplateURL`, or set the `UsePreviousTemplate` to `true`.
   *
   * @public
   */
  UsePreviousTemplate?: boolean | undefined;

  /**
   * Structure that contains the temporary overriding stack policy body. You can specify either the `StackPolicyDuringUpdateBody` or the `StackPolicyDuringUpdateURL` parameter, but not both.
   *
   * If you want to update protected resources, specify a temporary overriding stack policy during this update. If you don't specify a stack policy, the current policy that is associated with the stack will be used.
   *
   * @public
   */
  StackPolicyDuringUpdateBody?: string | undefined;

  /**
   * Location of a file that contains the temporary overriding stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. The location for an Amazon S3 bucket must start with `https://`. URLs from S3 static websites are not supported.
   *
   * You can specify either the `StackPolicyDuringUpdateBody` or the `StackPolicyDuringUpdateURL` parameter, but not both.
   *
   * If you want to update protected resources, specify a temporary overriding stack policy during this update. If you don't specify a stack policy, the current policy that is associated with the stack will be used.
   *
   * @public
   */
  StackPolicyDuringUpdateURL?: string | undefined;

  /**
   * A list of `Parameter` structures that specify input parameters for the stack. For more information, see the [Parameter](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_Parameter.html) data type.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to update the stack.
   *
   * - `CAPABILITY_IAM` and `CAPABILITY_NAMED_IAM`
   *
   *   Some stack templates might include resources that can affect permissions in your Amazon Web Services account, for example, by creating new IAM users. For those stacks, you must explicitly acknowledge this by specifying one of these capabilities.
   *
   *   The following IAM resources require you to specify either the `CAPABILITY_IAM` or `CAPABILITY_NAMED_IAM` capability.
   *
   *   - If you have IAM resources, you can specify either capability.
   *   - If you have IAM resources with custom names, you *must* specify `CAPABILITY_NAMED_IAM`.
   *   - If you don't specify either of these capabilities, CloudFormation returns an `InsufficientCapabilities` error.
   *
   *   If your stack template contains these resources, we suggest that you review all permissions associated with them and edit their permissions if necessary.
   *
   *   - [AWS::IAM::AccessKey](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-accesskey.html)
   *   - [AWS::IAM::Group](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-group.html)
   *   - [AWS::IAM::InstanceProfile](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-instanceprofile.html)
   *   - [AWS::IAM::ManagedPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-managedpolicy.html)
   *   - [AWS::IAM::Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-policy.html)
   *   - [AWS::IAM::Role](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-role.html)
   *   - [AWS::IAM::User](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-user.html)
   *   - [AWS::IAM::UserToGroupAddition](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-usertogroupaddition.html)
   *
   *   For more information, see [Acknowledging IAM resources in CloudFormation templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities).
   * - `CAPABILITY_AUTO_EXPAND`
   *
   *   Some template contain macros. Macros perform custom processing on templates; this can include simple actions like find-and-replace operations, all the way to extensive transformations of entire templates. Because of this, users typically create a change set from the processed template, so that they can review the changes resulting from the macros before actually updating the stack. If your stack template contains one or more macros, and you choose to update a stack directly from the processed template, without first reviewing the resulting changes in a change set, you must acknowledge this capability. This includes the [AWS::Include](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-include.html) and [AWS::Serverless](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html) transforms, which are macros hosted by CloudFormation.
   *
   *   If you want to update a stack from a stack template that contains macros *and* nested stacks, you must update the stack directly from the template using this capability.
   *
   *   > **Important:**
   *   >
   *   > You should only update stacks directly from a stack template that contains macros if you know what processing the macro performs.
   *   >
   *   > Each macro relies on an underlying Lambda service function for processing stack templates. Be aware that the Lambda function owner can update the function operation without CloudFormation being notified.
   *
   *   For more information, see [Perform custom processing on CloudFormation templates with template macros](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html).
   *
   * > **Note:** Only one of the `Capabilities` and `ResourceType` parameters can be specified.
   *
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * Specifies which resource types you can work with, such as `AWS::EC2::Instance` or `Custom::MyCustomInstance`.
   *
   * If the list of resource types doesn't include a resource that you're updating, the stack update fails. By default, CloudFormation grants permissions to all resource types. IAM uses this parameter for CloudFormation-specific condition keys in IAM policies. For more information, see [Control CloudFormation access with Identity and Access Management](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html).
   *
   * > **Note:** Only one of the `Capabilities` and `ResourceType` parameters can be specified.
   *
   * @public
   */
  ResourceTypes?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that CloudFormation assumes to update the stack. CloudFormation uses the role's credentials to make calls on your behalf. CloudFormation always uses this role for all future operations on the stack. Provided that users have permission to operate on the stack, CloudFormation uses this role even if the users don't have permission to pass it. Ensure that the role grants least privilege.
   *
   * If you don't specify a value, CloudFormation uses the role that was previously associated with the stack. If no role is available, CloudFormation uses a temporary session that is generated from your user credentials.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The rollback triggers for CloudFormation to monitor during stack creation and updating operations, and for the specified monitoring period afterwards.
   *
   * @public
   */
  RollbackConfiguration?: RollbackConfiguration | undefined;

  /**
   * Structure that contains a new stack policy body. You can specify either the `StackPolicyBody` or the `StackPolicyURL` parameter, but not both.
   *
   * You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you don't specify a stack policy, the current policy that is associated with the stack is unchanged.
   *
   * @public
   */
  StackPolicyBody?: string | undefined;

  /**
   * Location of a file that contains the updated stack policy. The URL must point to a policy (max size: 16KB) located in an S3 bucket in the same Region as the stack. The location for an Amazon S3 bucket must start with `https://`. URLs from S3 static websites are not supported.
   *
   * You can specify either the `StackPolicyBody` or the `StackPolicyURL` parameter, but not both.
   *
   * You might update the stack policy, for example, in order to protect a new resource that you created during a stack update. If you don't specify a stack policy, the current policy that is associated with the stack is unchanged.
   *
   * @public
   */
  StackPolicyURL?: string | undefined;

  /**
   * Amazon Simple Notification Service topic Amazon Resource Names (ARNs) that CloudFormation associates with the stack. Specify an empty list to remove all notification topics.
   *
   * @public
   */
  NotificationARNs?: string[] | undefined;

  /**
   * Key-value pairs to associate with this stack. CloudFormation also propagates these tags to supported resources in the stack. You can specify a maximum number of 50 tags.
   *
   * If you don't specify this parameter, CloudFormation doesn't modify the stack's tags. If you specify an empty value, CloudFormation removes all associated tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Preserve the state of previously provisioned resources when an operation fails.
   *
   * Default: `False`
   *
   * @public
   */
  DisableRollback?: boolean | undefined;

  /**
   * A unique identifier for this `UpdateStack` request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to update a stack with the same name. You might retry `UpdateStack` requests to ensure that CloudFormation successfully received them.
   *
   * All events triggered by a given stack operation are assigned the same client request token, which you can use to track operations. For example, if you execute a `CreateStack` operation with the token `token1`, then all the `StackEvents` generated by that operation will have `ClientRequestToken` set as `token1`.
   *
   * In the console, stack operations display the client request token on the Events tab. Stack operations that are initiated from the console use the token format *Console-StackOperation-ID*, which helps you easily identify the stack operation . For example, if you create a stack using the console, each stack event would be assigned the same token in the following format: `Console-CreateStack-7f59c3cf-00d2-40c7-b2ff-e75db0987002`.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * When set to `true`, newly created resources are deleted when the operation rolls back. This includes newly created resources marked with a deletion policy of `Retain`.
   *
   * Default: `false`
   *
   * @public
   */
  RetainExceptOnCreate?: boolean | undefined;

  /**
   * The deployment configuration for this stack operation, including the deployment mode.
   *
   * @public
   */
  DeploymentConfig?: DeploymentConfig | undefined;

  /**
   * Set to `true` to disable pre-deployment validations in changeset or stack operations.
   *
   * Default: `false`
   *
   * @public
   */
  DisableValidation?: boolean | undefined;
}

/**
 * The output for an UpdateStack action.
 *
 * @public
 */
export interface UpdateStackOutput {
  /**
   * Unique identifier of the stack.
   *
   * @public
   */
  StackId?: string | undefined;

  /**
   * A unique identifier for this update operation that can be used to track the operation's progress and events.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStackInstancesInput {
  /**
   * The name or unique ID of the StackSet associated with the stack instances.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * [Self-managed permissions] The account IDs of one or more Amazon Web Services accounts in which you want to update parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions.
   *
   * You can specify `Accounts` or `DeploymentTargets`, but not both.
   *
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * [Service-managed permissions] The Organizations accounts in which you want to update parameter values for stack instances. If your update targets OUs, the overridden parameter values only apply to the accounts that are currently in the target OUs and their child OUs. Accounts added to the target OUs and their child OUs in the future won't use the overridden values.
   *
   * You can specify `Accounts` or `DeploymentTargets`, but not both.
   *
   * @public
   */
  DeploymentTargets?: DeploymentTargets | undefined;

  /**
   * The names of one or more Amazon Web Services Regions in which you want to update parameter values for stack instances. The overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions.
   *
   * @public
   */
  Regions: string[] | undefined;

  /**
   * A list of input parameters whose values you want to update for the specified stack instances.
   *
   * Any overridden parameter values will be applied to all stack instances in the specified accounts and Amazon Web Services Regions. When specifying parameters and their values, be aware of how CloudFormation sets parameter values during stack instance update operations:
   *
   * - To override the current value for a parameter, include the parameter and specify its value.
   * - To leave an overridden parameter set to its present value, include the parameter and specify `UsePreviousValue` as `true`. (You can't specify both a value and set `UsePreviousValue` to `true`.)
   * - To set an overridden parameter back to the value specified in the StackSet, specify a parameter list but don't include the parameter in the list.
   * - To leave all parameters set to their present values, don't specify this property at all.
   *
   * During StackSet updates, any parameter values overridden for a stack instance aren't updated, but retain their overridden value.
   *
   * You can only override the parameter *values* that are specified in the StackSet. To add or delete a parameter itself, use `UpdateStackSet` to update the StackSet template. If you add a parameter to a template, before you can override the parameter value specified in the StackSet you must first use [UpdateStackSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html) to update all stack instances with the updated template and parameter value specified in the StackSet. Once a stack instance has been updated with the new parameter, you can then override the parameter value using `UpdateStackInstances`.
   *
   * @public
   */
  ParameterOverrides?: Parameter[] | undefined;

  /**
   * Preferences for how CloudFormation performs this StackSet operation.
   *
   * @public
   */
  OperationPreferences?: StackSetOperationPreferences | undefined;

  /**
   * The unique identifier for this StackSet operation.
   *
   * The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the StackSet operation only once, even if you retry the request multiple times. You might retry StackSet operation requests to ensure that CloudFormation successfully received them.
   *
   * If you don't specify an operation ID, the SDK generates one automatically.
   *
   * @public
   */
  OperationId?: string | undefined;

  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;
}

/**
 * @public
 */
export interface UpdateStackInstancesOutput {
  /**
   * The unique identifier for this StackSet operation.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStackSetInput {
  /**
   * The name or unique ID of the StackSet that you want to update.
   *
   * @public
   */
  StackSetName: string | undefined;

  /**
   * A brief description of updates that you are making.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.
   *
   * Conditional: You must specify only one of the following parameters: `TemplateBody` or `TemplateURL`—or set `UsePreviousTemplate` to true.
   *
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * The URL of a file that contains the template body. The URL must point to a template (maximum size: 1 MB) that is located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with `https://`. S3 static website URLs are not supported.
   *
   * Conditional: You must specify only one of the following parameters: `TemplateBody` or `TemplateURL`—or set `UsePreviousTemplate` to true.
   *
   * @public
   */
  TemplateURL?: string | undefined;

  /**
   * Use the existing template that's associated with the StackSet that you're updating.
   *
   * Conditional: You must specify only one of the following parameters: `TemplateBody` or `TemplateURL`—or set `UsePreviousTemplate` to true.
   *
   * @public
   */
  UsePreviousTemplate?: boolean | undefined;

  /**
   * A list of input parameters for the StackSet template.
   *
   * @public
   */
  Parameters?: Parameter[] | undefined;

  /**
   * In some cases, you must explicitly acknowledge that your stack template contains certain capabilities in order for CloudFormation to update the StackSet and its associated stack instances.
   *
   * - `CAPABILITY_IAM` and `CAPABILITY_NAMED_IAM`
   *
   *   Some stack templates might include resources that can affect permissions in your Amazon Web Services account, for example, by creating new IAM users. For those stacks sets, you must explicitly acknowledge this by specifying one of these capabilities.
   *
   *   The following IAM resources require you to specify either the `CAPABILITY_IAM` or `CAPABILITY_NAMED_IAM` capability.
   *
   *   - If you have IAM resources, you can specify either capability.
   *   - If you have IAM resources with custom names, you *must* specify `CAPABILITY_NAMED_IAM`.
   *   - If you don't specify either of these capabilities, CloudFormation returns an `InsufficientCapabilities` error.
   *
   *   If your stack template contains these resources, we recommend that you review all permissions associated with them and edit their permissions if necessary.
   *
   *   - [AWS::IAM::AccessKey](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-accesskey.html)
   *   - [AWS::IAM::Group](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-group.html)
   *   - [AWS::IAM::InstanceProfile](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-instanceprofile.html)
   *   - [AWS::IAM::Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-policy.html)
   *   - [AWS::IAM::Role](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-role.html)
   *   - [AWS::IAM::User](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-user.html)
   *   - [AWS::IAM::UserToGroupAddition](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-iam-usertogroupaddition.html)
   *
   *   For more information, see [Acknowledging IAM resources in CloudFormation templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities).
   * - `CAPABILITY_AUTO_EXPAND`
   *
   *   Some templates reference macros. If your StackSet template references one or more macros, you must update the StackSet directly from the processed template, without first reviewing the resulting changes in a change set. To update the StackSet directly, you must acknowledge this capability. For more information, see [Perform custom processing on CloudFormation templates with template macros](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html).
   *
   *   > **Important:** StackSets with service-managed permissions do not currently support the use of macros in templates. (This includes the [AWS::Include](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-include.html) and [AWS::Serverless](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-aws-serverless.html) transforms, which are macros hosted by CloudFormation.) Even if you specify this capability for a StackSet with service-managed permissions, if you reference a macro in your template the StackSet operation will fail.
   *
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * The key-value pairs to associate with this StackSet and the stacks created from it. CloudFormation also propagates these tags to supported resources that are created in the stacks. You can specify a maximum number of 50 tags.
   *
   * If you specify tags for this parameter, those tags replace any list of tags that are currently associated with this StackSet. This means:
   *
   * - If you don't specify this parameter, CloudFormation doesn't modify the stack's tags.
   * - If you specify *any* tags using this parameter, you must specify *all* the tags that you want associated with this StackSet, even tags you've specified before (for example, when creating the StackSet or during a previous update of the StackSet.). Any tags that you don't include in the updated list of tags are removed from the StackSet, and therefore from the stacks and resources as well.
   * - If you specify an empty value, CloudFormation removes all currently associated tags.
   *
   * If you specify new tags as part of an `UpdateStackSet` action, CloudFormation checks to see if you have the required IAM permission to tag resources. If you omit tags that are currently associated with the StackSet from the list of tags you specify, CloudFormation assumes that you want to remove those tags from the StackSet, and checks to see if you have permission to untag resources. If you don't have the necessary permission(s), the entire `UpdateStackSet` action fails with an `access denied` error, and the StackSet is not updated.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Preferences for how CloudFormation performs this StackSet operation.
   *
   * @public
   */
  OperationPreferences?: StackSetOperationPreferences | undefined;

  /**
   * [Self-managed permissions] The Amazon Resource Name (ARN) of the IAM role to use to update this StackSet.
   *
   * Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific StackSets within the same administrator account. For more information, see [Grant self-managed permissions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html) in the *CloudFormation User Guide*.
   *
   * If you specified a customized administrator role when you created the StackSet, you must specify a customized administrator role, even if it is the same customized administrator role used with this StackSet previously.
   *
   * @public
   */
  AdministrationRoleARN?: string | undefined;

  /**
   * [Self-managed permissions] The name of the IAM execution role to use to update the stack set. If you do not specify an execution role, CloudFormation uses the `AWSCloudFormationStackSetExecutionRole` role for the StackSet operation.
   *
   * Specify an IAM role only if you are using customized execution roles to control which stack resources users and groups can include in their StackSets.
   *
   * If you specify a customized execution role, CloudFormation uses that role to update the stack. If you do not specify a customized execution role, CloudFormation performs the update using the role previously associated with the StackSet, so long as you have permissions to perform operations on the StackSet.
   *
   * @public
   */
  ExecutionRoleName?: string | undefined;

  /**
   * [Service-managed permissions] The Organizations accounts in which to update associated stack instances.
   *
   * To update all the stack instances associated with this StackSet, do not specify `DeploymentTargets` or `Regions`.
   *
   * If the StackSet update includes changes to the template (that is, if `TemplateBody` or `TemplateURL` is specified), or the `Parameters`, CloudFormation marks all stack instances with a status of `OUTDATED` prior to updating the stack instances in the specified accounts and Amazon Web Services Regions. If the StackSet update doesn't include changes to the template or parameters, CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status.
   *
   * @public
   */
  DeploymentTargets?: DeploymentTargets | undefined;

  /**
   * Describes how the IAM roles required for StackSet operations are created. You cannot modify `PermissionModel` if there are stack instances associated with your stack set.
   *
   * - With `self-managed` permissions, you must create the administrator and execution roles required to deploy to target accounts. For more information, see [Grant self-managed permissions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html).
   * - With `service-managed` permissions, StackSets automatically creates the IAM roles required to deploy to accounts managed by Organizations. For more information, see [Activate trusted access for StackSets with Organizations](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-activate-trusted-access.html).
   *
   * @public
   */
  PermissionModel?: PermissionModels | undefined;

  /**
   * [Service-managed permissions] Describes whether StackSets automatically deploys to Organizations accounts that are added to a target organization or organizational unit (OU). For more information, see [Enable or disable automatic deployments for StackSets in Organizations](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-manage-auto-deployment.html) in the *CloudFormation User Guide*.
   *
   * If you specify `AutoDeployment`, don't specify `DeploymentTargets` or `Regions`.
   *
   * @public
   */
  AutoDeployment?: AutoDeployment | undefined;

  /**
   * The unique ID for this StackSet operation.
   *
   * The operation ID also functions as an idempotency token, to ensure that CloudFormation performs the StackSet operation only once, even if you retry the request multiple times. You might retry StackSet operation requests to ensure that CloudFormation successfully received them.
   *
   * If you don't specify an operation ID, CloudFormation generates one automatically.
   *
   * Repeating this StackSet operation with a new operation ID retries all stack instances whose status is `OUTDATED`.
   *
   * @public
   */
  OperationId?: string | undefined;

  /**
   * [Self-managed permissions] The accounts in which to update associated stack instances. If you specify accounts, you must also specify the Amazon Web Services Regions in which to update StackSet instances.
   *
   * To update *all* the stack instances associated with this StackSet, don't specify the `Accounts` or `Regions` properties.
   *
   * If the StackSet update includes changes to the template (that is, if the `TemplateBody` or `TemplateURL` properties are specified), or the `Parameters` property, CloudFormation marks all stack instances with a status of `OUTDATED` prior to updating the stack instances in the specified accounts and Amazon Web Services Regions. If the StackSet update does not include changes to the template or parameters, CloudFormation updates the stack instances in the specified accounts and Amazon Web Services Regions, while leaving all other stack instances with their existing stack instance status.
   *
   * @public
   */
  Accounts?: string[] | undefined;

  /**
   * The Amazon Web Services Regions in which to update associated stack instances. If you specify Regions, you must also specify accounts in which to update StackSet instances.
   *
   * To update *all* the stack instances associated with this StackSet, do not specify the `Accounts` or `Regions` properties.
   *
   * If the StackSet update includes changes to the template (that is, if the `TemplateBody` or `TemplateURL` properties are specified), or the `Parameters` property, CloudFormation marks all stack instances with a status of `OUTDATED` prior to updating the stack instances in the specified accounts and Regions. If the StackSet update does not include changes to the template or parameters, CloudFormation updates the stack instances in the specified accounts and Regions, while leaving all other stack instances with their existing stack instance status.
   *
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * [Service-managed permissions] Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
   *
   * By default, `SELF` is specified. Use `SELF` for StackSets with self-managed permissions.
   *
   * - If you are signed in to the management account, specify `SELF`.
   * - If you are signed in to a delegated administrator account, specify `DELEGATED_ADMIN`.
   *
   *   Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see [Register a delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) in the *CloudFormation User Guide*.
   *
   * @public
   */
  CallAs?: CallAs | undefined;

  /**
   * Describes whether CloudFormation performs non-conflicting operations concurrently and queues conflicting operations.
   *
   * @public
   */
  ManagedExecution?: ManagedExecution | undefined;
}

/**
 * @public
 */
export interface UpdateStackSetOutput {
  /**
   * The unique ID for this StackSet operation.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTerminationProtectionInput {
  /**
   * Whether to enable termination protection on the specified stack.
   *
   * @public
   */
  EnableTerminationProtection: boolean | undefined;

  /**
   * The name or unique ID of the stack for which you want to set termination protection.
   *
   * @public
   */
  StackName: string | undefined;
}

/**
 * @public
 */
export interface UpdateTerminationProtectionOutput {
  /**
   * The unique ID of the stack.
   *
   * @public
   */
  StackId?: string | undefined;
}

/**
 * The input for ValidateTemplate action.
 *
 * @public
 */
export interface ValidateTemplateInput {
  /**
   * Structure that contains the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.
   *
   * Conditional: You must pass `TemplateURL` or `TemplateBody`. If both are passed, only `TemplateBody` is used.
   *
   * @public
   */
  TemplateBody?: string | undefined;

  /**
   * The URL of a file that contains the template body. The URL must point to a template (max size: 1 MB) that is located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with `https://`.
   *
   * Conditional: You must pass `TemplateURL` or `TemplateBody`. If both are passed, only `TemplateBody` is used.
   *
   * @public
   */
  TemplateURL?: string | undefined;
}

/**
 * The `TemplateParameter` data type.
 *
 * @public
 */
export interface TemplateParameter {
  /**
   * The name associated with the parameter.
   *
   * @public
   */
  ParameterKey?: string | undefined;

  /**
   * The default value associated with the parameter.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * Flag indicating whether the parameter should be displayed as plain text in logs and UIs.
   *
   * @public
   */
  NoEcho?: boolean | undefined;

  /**
   * User defined description associated with the parameter.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * The output for ValidateTemplate action.
 *
 * @public
 */
export interface ValidateTemplateOutput {
  /**
   * A list of `TemplateParameter` structures.
   *
   * @public
   */
  Parameters?: TemplateParameter[] | undefined;

  /**
   * The description found within the template.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The capabilities found within the template. If your template contains IAM resources, you must specify the CAPABILITY_IAM or CAPABILITY_NAMED_IAM value for this parameter when you use the CreateStack or UpdateStack actions with your template; otherwise, those actions return an InsufficientCapabilities error.
   *
   * For more information, see [Acknowledging IAM resources in CloudFormation templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities).
   *
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * The list of resources that generated the values in the `Capabilities` response element.
   *
   * @public
   */
  CapabilitiesReason?: string | undefined;

  /**
   * A list of the transforms that are declared in the template.
   *
   * @public
   */
  DeclaredTransforms?: string[] | undefined;
}
