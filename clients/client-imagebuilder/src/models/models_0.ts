// smithy-typescript generated code
import type {
  BuildType,
  ComponentFormat,
  ComponentStatus,
  ComponentType,
  ContainerRepositoryService,
  ContainerType,
  DiskImageFormat,
  EbsVolumeType,
  ImageConfigurationStep,
  ImageScanningType,
  ImageScanStatus,
  ImageSource,
  ImageStatus,
  ImageType,
  LifecycleExecutionResourceActionName,
  LifecycleExecutionResourceStatus,
  LifecycleExecutionStatus,
  LifecyclePolicyDetailActionType,
  LifecyclePolicyDetailFilterType,
  LifecyclePolicyResourceType,
  LifecyclePolicyStatus,
  LifecyclePolicyTimeUnit,
  MarketplaceResourceType,
  MaximumSeverityLabel,
  OnWorkflowFailure,
  Ownership,
  PipelineExecutionStartCondition,
  PipelineStatus,
  Platform,
  ProductCodeType,
  RegionFailureStatus,
  ResourceStatus,
  SsmParameterDataType,
  TenancyType,
  WorkflowExecutionStatus,
  WorkflowStatus,
  WorkflowStepActionType,
  WorkflowStepExecutionRollbackStatus,
  WorkflowStepExecutionStatus,
  WorkflowType,
} from "./enums";

/**
 * Includes counts by severity level for medium severity and higher level findings, plus a total for all of the findings for the specified filter.
 *
 * @public
 */
export interface SeverityCounts {
  /**
   * The total number of findings across all severity levels for the specified filter.
   *
   * @public
   */
  all?: number | undefined;

  /**
   * The number of critical severity findings for the specified filter.
   *
   * @public
   */
  critical?: number | undefined;

  /**
   * The number of high severity findings for the specified filter.
   *
   * @public
   */
  high?: number | undefined;

  /**
   * The number of medium severity findings for the specified filter.
   *
   * @public
   */
  medium?: number | undefined;
}

/**
 * Contains counts of vulnerability findings from image scans that run when you create new Image Builder images, or build new versions of existing images. The vulnerability counts are grouped by severity level. The counts are aggregated across resources to create the final tally for the account that owns them.
 *
 * @public
 */
export interface AccountAggregation {
  /**
   * Identifies the account that owns the aggregated resource findings.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * Counts by severity level for medium severity and higher level findings, plus a total for all of the findings.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;
}

/**
 * Contains settings for the Systems Manager agent on your build instance. This setting applies to Linux and macOS build instances only. Requests that set it for a recipe with a Windows base image are rejected.
 *
 * @public
 */
export interface SystemsManagerAgent {
  /**
   * Specifies whether the Systems Manager agent is removed from your final build image before Image Builder creates the new AMI. If `true`, the agent is removed. If `false`, the agent is kept, so that it's included in the AMI. If you don't set this property, Image Builder removes the agent only if Image Builder installed the agent during the build. An agent that was pre-installed on the base image is kept.
   *
   * @public
   */
  uninstallAfterBuild?: boolean | undefined;
}

/**
 * In addition to your infrastructure configuration, these settings provide an extra layer of control over your build instances. You can also specify commands to run on launch for all of your build instances.
 *
 * Image Builder does not automatically install the Systems Manager agent on Windows instances. If your base image includes the Systems Manager agent, then the AMI that you create will also include the agent. For Linux instances, if the base image does not already include the Systems Manager agent, Image Builder installs it. For Linux instances where Image Builder installs the Systems Manager agent, you can choose whether to keep it for the AMI that you create.
 *
 * @public
 */
export interface AdditionalInstanceConfiguration {
  /**
   * The Systems Manager agent settings for your build instance. This setting applies to Linux and macOS build instances only. Requests that set it for a recipe with a Windows base image are rejected.
   *
   * @public
   */
  systemsManagerAgent?: SystemsManagerAgent | undefined;

  /**
   * Use this property to provide commands or a command script to run when you launch your build instance.
   *
   * The userDataOverride property replaces any commands that Image Builder might have added to ensure that Systems Manager is installed on your Linux build instance. If you override the user data, make sure that you add commands to install Systems Manager, if it is not pre-installed on your base image.
   *
   * > **Note:**
   * >
   * > The user data is always base 64 encoded. For example, the following commands are encoded as `IyEvYmluL2Jhc2gKbWtkaXIgLXAgL3Zhci9iYi8KdG91Y2ggL3Zhcg==`:
   * >
   * > *#!/bin/bash*
   * >
   * > mkdir -p /var/bb/
   * >
   * > touch /var
   *
   * @public
   */
  userDataOverride?: string | undefined;
}

/**
 * Contains details about the component that caused the image creation process to fail. The details identify the first step that failed when the component ran.
 *
 * @public
 */
export interface ComponentFailureContext {
  /**
   * The Amazon Resource Name (ARN) of the component build version that failed.
   *
   * @public
   */
  componentArn?: string | undefined;

  /**
   * The name of the phase in the component document where the failure occurred, such as `build`, `validate`, or `test`.
   *
   * @public
   */
  phaseName?: string | undefined;

  /**
   * The name of the step in the component document that failed.
   *
   * @public
   */
  stepName?: string | undefined;

  /**
   * The action that the failed step runs, for example `ExecuteBash`.
   *
   * @public
   */
  action?: string | undefined;

  /**
   * The error message from the step that failed. Image Builder truncates messages that are longer than 1024 characters. The component log in Amazon CloudWatch Logs contains the full output.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Contains details about a distribution or image configuration failure for a single Region.
 *
 * @public
 */
export interface RegionFailure {
  /**
   * The Region where the failure occurred.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The failure status for the Region. Indicates whether the process failed, was canceled, or timed out.
   *
   * @public
   */
  status?: RegionFailureStatus | undefined;

  /**
   * The image configuration step where the failure occurred. Image Builder sets this property when the failure happened during post-distribution configuration, such as launch template updates or virtual machine (VM) export. This property doesn't appear for failures that occurred while Image Builder copied the image to the Region.
   *
   * @public
   */
  imageConfigurationStep?: ImageConfigurationStep | undefined;

  /**
   * The error message for the failure in the Region.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The account ID of the account that the image was distributed to in the Region.
   *
   * @public
   */
  targetAccountId?: string | undefined;
}

/**
 * Contains details about a failure that occurred while Image Builder distributed the image or applied configuration to the distributed image.
 *
 * @public
 */
export interface DistributionFailureContext {
  /**
   * The error message for the distribution failure.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The details about the failure for each Region where the image didn't finish distribution or configuration.
   *
   * @public
   */
  regionFailures?: RegionFailure[] | undefined;
}

/**
 * Contains details about the failure when the image creation process fails. Properties appear in the failure context when the related information is available for the failure.
 *
 * @public
 */
export interface ImageFailureContext {
  /**
   * The status that the image had when the failure occurred. This indicates the stage of the image creation process where the image failed, for example `BUILDING` or `DISTRIBUTING`.
   *
   * @public
   */
  imageStatus?: ImageStatus | undefined;

  /**
   * The unique identifier of the workflow execution that was running when the image failed.
   *
   * @public
   */
  workflowExecutionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workflow build version that was running when the image failed.
   *
   * @public
   */
  workflowArn?: string | undefined;

  /**
   * The unique identifier of the workflow step execution that failed.
   *
   * @public
   */
  stepExecutionId?: string | undefined;

  /**
   * The name of the workflow step that failed, as it appears in the workflow document.
   *
   * @public
   */
  failedStep?: string | undefined;

  /**
   * The details about the component that failed, if the failure occurred while a component was running.
   *
   * @public
   */
  componentFailure?: ComponentFailureContext | undefined;

  /**
   * The details about the distribution failure, if the failure occurred while Image Builder distributed or configured the image.
   *
   * @public
   */
  distributionFailure?: DistributionFailureContext | undefined;
}

/**
 * Image status and the reason for that status.
 *
 * @public
 */
export interface ImageState {
  /**
   * The status of the image. A new image moves through build, test, and distribution statuses during creation, and ends in the `AVAILABLE`, `FAILED`, or `CANCELLED` state. The `DEPRECATED`, `DISABLED`, and `DELETED` statuses come from later resource management actions.
   *
   * @public
   */
  status?: ImageStatus | undefined;

  /**
   * The reason for the status of the image.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The details about the failure, for images that failed to complete. Image Builder only sets this property when the image status is `FAILED`.
   *
   * @public
   */
  failureContext?: ImageFailureContext | undefined;
}

/**
 * Details of an Amazon EC2 AMI.
 *
 * @public
 */
export interface Ami {
  /**
   * The Amazon Web Services Region of the Amazon EC2 AMI.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The AMI ID of the Amazon EC2 AMI.
   *
   * @public
   */
  image?: string | undefined;

  /**
   * The name of the Amazon EC2 AMI.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the Amazon EC2 AMI. Minimum and maximum length are in characters.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The state of the AMI, which includes the status and, if applicable, the reason for that status.
   *
   * @public
   */
  state?: ImageState | undefined;

  /**
   * The account ID of the owner of the AMI.
   *
   * @public
   */
  accountId?: string | undefined;
}

/**
 * Describes the configuration for a launch permission. The launch permission modification request is sent to the [Amazon EC2 ModifyImageAttribute](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html) API on behalf of the user for each Region they have selected to distribute the AMI. To make an AMI public, set `userGroups` to the value `all`. See the examples for making an AMI public at [Amazon EC2 ModifyImageAttribute](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html).
 *
 * @public
 */
export interface LaunchPermissionConfiguration {
  /**
   * The Amazon Web Services account IDs to grant launch permission to. Each listed account can use the distributed AMI to launch instances.
   *
   * @public
   */
  userIds?: string[] | undefined;

  /**
   * The name of the group that you want to grant launch permission to. The only supported value is `all`, which makes the distributed AMI public.
   *
   * @public
   */
  userGroups?: string[] | undefined;

  /**
   * The ARN for an Amazon Web Services Organization that you want to share your AMI with. For more information, see [What is Organizations?](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html).
   *
   * @public
   */
  organizationArns?: string[] | undefined;

  /**
   * The ARN for an Organizations organizational unit (OU) that you want to share your AMI with. For more information about key concepts for Organizations, see [Organizations terminology and concepts](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html).
   *
   * @public
   */
  organizationalUnitArns?: string[] | undefined;
}

/**
 * Define and configure the output AMIs of the pipeline.
 *
 * @public
 */
export interface AmiDistributionConfiguration {
  /**
   * The name of the output AMI. The name must include the `\{\{ imagebuilder:buildDate \}\}` dynamic tag so that each build produces a uniquely named AMI. If you don't specify a name, Image Builder names the output AMI with the image name followed by the build timestamp, for example `my-image 2022-10-26T22-30-05.912619Z`.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description to apply to the distributed AMI. Image Builder sets this as the output AMI's description in each target Region and account. If you don't specify a description, the AMI in the build Region uses the image recipe's description, if the recipe has one. Copies distributed to other Regions and accounts don't receive a default description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Web Services account IDs to distribute the AMI to in this Region. Each listed account receives its own copy of the output AMI. If you don't specify accounts, Image Builder distributes the AMI only to your own account.
   *
   * @public
   */
  targetAccountIds?: string[] | undefined;

  /**
   * The tags to apply to AMIs distributed to this Region.
   *
   * @public
   */
  amiTags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the KMS key used to encrypt the distributed image. This can be either the Key ARN or the Alias ARN. For more information, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Launch permissions can be used to configure which Amazon Web Services accounts can use the AMI to launch instances.
   *
   * @public
   */
  launchPermission?: LaunchPermissionConfiguration | undefined;
}

/**
 * Defines the rules by which an image pipeline is automatically disabled when it fails. By default, if the schedule doesn't include an auto-disable policy, Image Builder disables the pipeline after 5 consecutive failed scheduled builds.
 *
 * @public
 */
export interface AutoDisablePolicy {
  /**
   * The number of consecutive scheduled image pipeline executions that must fail before Image Builder automatically disables the pipeline.
   *
   * @public
   */
  failureCount: number | undefined;
}

/**
 * Identifies the Amazon EC2 Auto Scaling group that Image Builder takes the build instance from, and how long Image Builder waits when the group has no instance available.
 *
 * @public
 */
export interface AutoScalingGroupConfiguration {
  /**
   * The name of the Auto Scaling group, in the same account and Amazon Web Services Region as the infrastructure configuration. To specify a group, you must have permissions to describe it.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The number of seconds that Image Builder waits for an instance to become available in the group before the build fails. If you set this value to 0 or omit it, the build fails as soon as the group has no instance available.
   *
   * @public
   */
  capacityWaitTimeoutSeconds?: number | undefined;
}

/**
 * @public
 */
export interface CancelImageCreationRequest {
  /**
   * The Amazon Resource Name (ARN) of the image that you want to cancel creation for.
   *
   * @public
   */
  imageBuildVersionArn: string | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelImageCreationResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image whose creation this request canceled.
   *
   * @public
   */
  imageBuildVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface CancelLifecycleExecutionRequest {
  /**
   * Identifies the specific runtime instance of the image lifecycle to cancel.
   *
   * @public
   */
  lifecycleExecutionId: string | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelLifecycleExecutionResponse {
  /**
   * The unique identifier of the lifecycle execution that the cancellation request applies to. The cancellation completes asynchronously.
   *
   * @public
   */
  lifecycleExecutionId?: string | undefined;
}

/**
 * Defines a parameter that is used to provide configuration details for the component.
 *
 * @public
 */
export interface ComponentParameterDetail {
  /**
   * The name of this input parameter.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of input this parameter provides. The currently supported value is "string".
   *
   * @public
   */
  type: string | undefined;

  /**
   * The default value of this parameter if no input is provided.
   *
   * @public
   */
  defaultValue?: string[] | undefined;

  /**
   * Describes this parameter.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Information about a single product code.
 *
 * @public
 */
export interface ProductCodeListItem {
  /**
   * For Amazon Web Services Marketplace components, this contains the product code ID that can be stamped onto an EC2 AMI to ensure that components are billed correctly. If this property is empty, it might mean that the component is not published.
   *
   * @public
   */
  productCodeId: string | undefined;

  /**
   * The owner of the product code that's billed. If this property is empty, it might mean that the component is not published.
   *
   * @public
   */
  productCodeType: ProductCodeType | undefined;
}

/**
 * A group of fields that describe the current status of components.
 *
 * @public
 */
export interface ComponentState {
  /**
   * The current state of the component. Components with a status of `DEPRECATED` or `DISABLED` can't be added to new recipes.
   *
   * @public
   */
  status?: ComponentStatus | undefined;

  /**
   * Describes how or why the component changed state.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * A detailed view of a component.
 *
 * @public
 */
export interface Component {
  /**
   * The Amazon Resource Name (ARN) of the component.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The version of the component.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The description of the component.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Describes what change has been made in this version of the component, or what makes this version different from other versions of the component.
   *
   * @public
   */
  changeDescription?: string | undefined;

  /**
   * The component type specifies whether Image Builder uses the component to build the image or only to test it.
   *
   * @public
   */
  type?: ComponentType | undefined;

  /**
   * The operating system platform of the component.
   *
   * @public
   */
  platform?: Platform | undefined;

  /**
   * The operating system (OS) version supported by the component. If the OS information is available, Image Builder performs a prefix match against the base image OS version during image recipe creation.
   *
   * @public
   */
  supportedOsVersions?: string[] | undefined;

  /**
   * Describes the current status of the component.
   *
   * @public
   */
  state?: ComponentState | undefined;

  /**
   * Contains parameter details for each of the parameters that the component document defined for the component.
   *
   * @public
   */
  parameters?: ComponentParameterDetail[] | undefined;

  /**
   * The owner of the component. The value is your account ID for components that you own, the sharing account's ID for shared components, or `Amazon`, `ThirdParty`, or `AWSMarketplace`.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * Component data contains the YAML document content for the component.
   *
   * @public
   */
  data?: string | undefined;

  /**
   * The KMS key identifier used to encrypt the component. This can be either the Key ARN or the Alias ARN. For more information, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Indicates whether the component data is encrypted at rest. Image Builder encrypts all component data at rest, so this value is always `true`. This field is retained for backward compatibility.
   *
   * @public
   */
  encrypted?: boolean | undefined;

  /**
   * The date that Image Builder created the component.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * The tags that apply to the component.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Contains the name of the publisher if this is a third-party component. Otherwise, this property is empty.
   *
   * @public
   */
  publisher?: string | undefined;

  /**
   * Indicates whether component source is hidden from view in the console, and from component detail results for API, CLI, or SDK operations.
   *
   * @public
   */
  obfuscate?: boolean | undefined;

  /**
   * Contains product codes that are used for billing purposes for Amazon Web Services Marketplace components.
   *
   * @public
   */
  productCodes?: ProductCodeListItem[] | undefined;
}

/**
 * Contains a key/value pair that sets the named component parameter.
 *
 * @public
 */
export interface ComponentParameter {
  /**
   * The name of the component parameter to set.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Sets the value for the named component parameter.
   *
   * @public
   */
  value: string[] | undefined;
}

/**
 * Configuration details of the component. You can specify each component only once in a recipe, regardless of version. Components with a status of `DEPRECATED` or `DISABLED` can't be added to new recipes.
 *
 * @public
 */
export interface ComponentConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the component. You can specify a build version ARN, or a component version ARN whose version segments can use `x` wildcards, for example `1.x.x`.
   *
   * @public
   */
  componentArn: string | undefined;

  /**
   * A group of parameter settings that Image Builder uses to configure the component for a specific recipe. You must supply a value for every component parameter that has no default value, and you can only supply parameters that the component defines.
   *
   * @public
   */
  parameters?: ComponentParameter[] | undefined;
}

/**
 * A high-level summary of a component.
 *
 * @public
 */
export interface ComponentSummary {
  /**
   * The Amazon Resource Name (ARN) of the component.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The version of the component.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The operating system platform of the component.
   *
   * @public
   */
  platform?: Platform | undefined;

  /**
   * The operating system (OS) version that the component supports. If the OS information is available, Image Builder performs a prefix match against the base image OS version during image recipe creation.
   *
   * @public
   */
  supportedOsVersions?: string[] | undefined;

  /**
   * Describes the current status of the component.
   *
   * @public
   */
  state?: ComponentState | undefined;

  /**
   * The component type specifies whether Image Builder uses the component to build the image or only to test it.
   *
   * @public
   */
  type?: ComponentType | undefined;

  /**
   * The owner of the component. The value is your account ID for components that you own, the sharing account's ID for shared components, or `Amazon`, `ThirdParty`, or `AWSMarketplace`.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * The description of the component.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The change description for this version of the component.
   *
   * @public
   */
  changeDescription?: string | undefined;

  /**
   * The date that Image Builder created this version of the component.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * The tags that apply to the component.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Contains the name of the publisher if this is a third-party component. Otherwise, this property is empty.
   *
   * @public
   */
  publisher?: string | undefined;

  /**
   * Indicates whether component source is hidden from view in the console, and from component detail results for API, CLI, or SDK operations.
   *
   * @public
   */
  obfuscate?: boolean | undefined;
}

/**
 * The defining characteristics of a specific version of a component.
 *
 * @public
 */
export interface ComponentVersion {
  /**
   * The Amazon Resource Name (ARN) of the component.
   *
   * > **Note:**
   * >
   * > Semantic versioning is included in each object's Amazon Resource Name (ARN), at the level that applies to that object as follows:
   * >
   * > 1. Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are either left off entirely, or they are specified as wildcards, for example: x.x.x.
   * > 2. Version ARNs have only the first three nodes: <major>.<minor>.<patch>
   * > 3. Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the component.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The semantic version of the component.
   *
   * > **Note:**
   * >
   * > The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.
   * >
   * > **Assignment:** For the first three nodes, you can assign any positive integer value, including zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the build number to the fourth node.
   * >
   * > **Patterns:** You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.
   * >
   * > **Filtering:** You can use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The description of the component.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The platform of the component.
   *
   * @public
   */
  platform?: Platform | undefined;

  /**
   * The operating system (OS) version supported by the component. If OS information is available, Image Builder performs a prefix match against the base image OS version during image recipe creation.
   *
   * @public
   */
  supportedOsVersions?: string[] | undefined;

  /**
   * The type of the component denotes whether the component is used to build the image or only to test it.
   *
   * @public
   */
  type?: ComponentType | undefined;

  /**
   * The owner of the component. The value is your account ID for components that you own, the sharing account's ID for shared components, or `Amazon`, `ThirdParty`, or `AWSMarketplace`.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * The date that the component was created.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * Describes the current status of the component version.
   *
   * @public
   */
  status?: ComponentStatus | undefined;

  /**
   * Contains product codes that are used for billing purposes for Amazon Web Services Marketplace components.
   *
   * @public
   */
  productCodes?: ProductCodeListItem[] | undefined;
}

/**
 * Details of the container images that are output resources of an image build in a given Amazon Web Services Region: the Region, and the URIs of the container images.
 *
 * @public
 */
export interface Container {
  /**
   * Containers and container images are Region-specific. This is the Region context for the container.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * A list of URIs for containers created in the context Region.
   *
   * @public
   */
  imageUris?: string[] | undefined;
}

/**
 * The container repository where the output container image is stored.
 *
 * @public
 */
export interface TargetContainerRepository {
  /**
   * Specifies the service in which this image was registered.
   *
   * @public
   */
  service: ContainerRepositoryService | undefined;

  /**
   * The name of the container repository where the output container image is stored. Provide the repository name only (a namespace path such as `team-a/my-repo` is allowed, but not the registry hostname).
   *
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * Defines how the output container image is distributed in a specific Amazon Web Services Region: the target repository, the image tags to apply to the distributed image, and an optional description.
 *
 * @public
 */
export interface ContainerDistributionConfiguration {
  /**
   * The description of the container distribution configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Tags that Image Builder applies to the distributed container image in the target repository. These are repository image tags, not resource tags.
   *
   * @public
   */
  containerTags?: string[] | undefined;

  /**
   * The destination repository for the container distribution configuration.
   *
   * @public
   */
  targetRepository: TargetContainerRepository | undefined;
}

/**
 * Amazon EBS-specific block device mapping specifications.
 *
 * @public
 */
export interface EbsInstanceBlockDeviceSpecification {
  /**
   * Specifies whether to encrypt the device.
   *
   * @public
   */
  encrypted?: boolean | undefined;

  /**
   * Specifies whether to delete the associated device on termination.
   *
   * @public
   */
  deleteOnTermination?: boolean | undefined;

  /**
   * The IOPS value for the device. Required only when volumeType is io1 or io2.
   *
   * @public
   */
  iops?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the KMS key to use when encrypting the device. This can be either the Key ARN or the Alias ARN. For more information, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The snapshot that defines the device contents.
   *
   * @public
   */
  snapshotId?: string | undefined;

  /**
   * Overrides the volume size for the device.
   *
   * @public
   */
  volumeSize?: number | undefined;

  /**
   * Overrides the volume type for the device.
   *
   * @public
   */
  volumeType?: EbsVolumeType | undefined;

  /**
   * **For GP3 volumes only** – The throughput in MiB/s that the volume supports.
   *
   * @public
   */
  throughput?: number | undefined;
}

/**
 * Defines block device mappings for the instance used to configure your image.
 *
 * @public
 */
export interface InstanceBlockDeviceMapping {
  /**
   * The device to which these mappings apply.
   *
   * @public
   */
  deviceName?: string | undefined;

  /**
   * The Amazon EBS-specific configuration for this mapping.
   *
   * @public
   */
  ebs?: EbsInstanceBlockDeviceSpecification | undefined;

  /**
   * The virtual device name for instance ephemeral devices.
   *
   * @public
   */
  virtualName?: string | undefined;

  /**
   * Specifies a mapping to remove from the base image.
   *
   * @public
   */
  noDevice?: string | undefined;
}

/**
 * Defines a custom base AMI and block device mapping configurations of an instance used for building and testing container images.
 *
 * @public
 */
export interface InstanceConfiguration {
  /**
   * The base image for a container build and test instance. This can contain an AMI ID or it can specify an Amazon Web Services Systems Manager (SSM) Parameter Store Parameter, prefixed by `ssm:`, followed by the parameter name or ARN.
   *
   * If not specified, Image Builder uses the appropriate ECS-optimized AMI as a base image.
   *
   * @public
   */
  image?: string | undefined;

  /**
   * Defines the block device mappings for the EC2 instance that Image Builder launches to build and test your container image.
   *
   * @public
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;
}

/**
 * Defines how Image Builder builds and tests a container image: the base image, components to apply, the Dockerfile template, the build and test instance configuration, and the target repository for the output image.
 *
 * @public
 */
export interface ContainerRecipe {
  /**
   * The Amazon Resource Name (ARN) of the container recipe.
   *
   * > **Note:**
   * >
   * > Semantic versioning is included in each object's Amazon Resource Name (ARN), at the level that applies to that object as follows:
   * >
   * > 1. Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are either left off entirely, or they are specified as wildcards, for example: x.x.x.
   * > 2. Version ARNs have only the first three nodes: <major>.<minor>.<patch>
   * > 3. Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Specifies the type of container, such as Docker.
   *
   * @public
   */
  containerType?: ContainerType | undefined;

  /**
   * The name of the container recipe.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the container recipe.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The system platform for the container. Container recipes support only the Linux and Windows platforms.
   *
   * @public
   */
  platform?: Platform | undefined;

  /**
   * The owner of the container recipe.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * The semantic version of the container recipe.
   *
   * > **Note:**
   * >
   * > The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.
   * >
   * > **Assignment:** For the first three nodes, you can assign any positive integer value, including zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the build number to the fourth node.
   * >
   * > **Patterns:** You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.
   * >
   * > **Filtering:** You can use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Build and test components that are included in the container recipe. A recipe can contain a maximum of 20 build and test components in any combination, by default. This maximum is an adjustable quota. For more information, see [EC2 Image Builder endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  components?: ComponentConfiguration[] | undefined;

  /**
   * A group of options that can be used to configure an instance for building and testing container images.
   *
   * @public
   */
  instanceConfiguration?: InstanceConfiguration | undefined;

  /**
   * The Dockerfile template that Image Builder uses to build the container image. The template can include contextual variables that Image Builder replaces with build information at build time. For the contextual variables that the template can include, see [Create a new version of a container recipe](https://docs.aws.amazon.com/imagebuilder/latest/userguide/create-container-recipes.html) in the *EC2 Image Builder User Guide*.
   *
   * @public
   */
  dockerfileTemplateData?: string | undefined;

  /**
   * The KMS key that Image Builder uses to encrypt the recipe's Dockerfile template data at rest. This can be either the Key ARN or the Alias ARN. For more information, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN) in the *Key Management Service Developer Guide*. If you don't specify a key, Image Builder encrypts the template data with a KMS key that Image Builder owns. This key isn't used to encrypt the output container image.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Specifies whether the recipe's Dockerfile template data is encrypted at rest. Image Builder encrypts all Dockerfile template data at rest, so this value is always `true`. This field is retained for backward compatibility, and doesn't describe encryption of the output container image.
   *
   * @public
   */
  encrypted?: boolean | undefined;

  /**
   * The base image for customizations specified in the container recipe. This can contain an Image Builder image resource ARN or a container image URI, for example `amazonlinux:latest`.
   *
   * @public
   */
  parentImage?: string | undefined;

  /**
   * The date when this container recipe was created.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * Tags that are attached to the container recipe.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The working directory for use during build and test workflows.
   *
   * @public
   */
  workingDirectory?: string | undefined;

  /**
   * The destination repository for the container image.
   *
   * @public
   */
  targetRepository?: TargetContainerRepository | undefined;
}

/**
 * A summary of a container recipe.
 *
 * @public
 */
export interface ContainerRecipeSummary {
  /**
   * The Amazon Resource Name (ARN) of the container recipe.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Specifies the type of container, such as "Docker".
   *
   * @public
   */
  containerType?: ContainerType | undefined;

  /**
   * The name of the container recipe.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The system platform for the container. Container recipes support only the Linux and Windows platforms.
   *
   * @public
   */
  platform?: Platform | undefined;

  /**
   * The owner of the container recipe.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * The base image for the container recipe.
   *
   * @public
   */
  parentImage?: string | undefined;

  /**
   * The date when this container recipe was created.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * The base image for a container build and test instance. This can contain an AMI ID or it can specify an Amazon Web Services Systems Manager (SSM) Parameter Store Parameter, prefixed by `ssm:`, followed by the parameter name or ARN.
   *
   * If not specified, Image Builder uses the appropriate ECS-optimized AMI as a base image.
   *
   * @public
   */
  instanceImage?: string | undefined;

  /**
   * Tags that are attached to the container recipe.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateComponentRequest {
  /**
   * The name of the component. Image Builder generates the component ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name. If a component with the same name and semantic version already exists in your account in the same Amazon Web Services Region, the request creates a new build version for it. If the content is also identical to the latest build version, the request fails because the component already exists.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The semantic version of the component. This version follows the semantic version syntax.
   *
   * > **Note:**
   * >
   * > The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.
   * >
   * > **Assignment:** For the first three nodes, you can assign any positive integer value, including zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the build number to the fourth node.
   * >
   * > **Patterns:** You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.
   *
   * @public
   */
  semanticVersion: string | undefined;

  /**
   * Describes the contents of the component.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of the component.
   *
   * @public
   */
  changeDescription?: string | undefined;

  /**
   * The operating system platform of the component.
   *
   * @public
   */
  platform: Platform | undefined;

  /**
   * The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the base image OS version during image recipe creation.
   *
   * @public
   */
  supportedOsVersions?: string[] | undefined;

  /**
   * Component `data` contains inline YAML document content for the component. Alternatively, you can specify the `uri` of a YAML document file stored in Amazon S3. However, you cannot specify both properties.
   *
   * @public
   */
  data?: string | undefined;

  /**
   * The `uri` of a YAML component document file. This must be an S3 URL (`s3://bucket/key`), and you must have permission to access the S3 bucket it points to. If you use Amazon S3, you can specify component content up to your service quota for component size, which is 64 KB by default.
   *
   * Alternatively, you can specify the YAML document inline, using the component `data` property. You cannot specify both properties.
   *
   * @public
   */
  uri?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the KMS key used to encrypt this component. This can be either the Key ARN or the Alias ARN. For more information, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN) in the *Key Management Service Developer Guide*. If you don't specify a key, Image Builder encrypts the component data with a KMS key that Image Builder owns.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The tags that apply to the component.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a `DryRunOperationException` error response.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * A set of wildcard version ARNs that always reference the latest version of the resource. ARNs are included for the latest version overall, and for the latest versions within the same major, minor, and patch levels.
 *
 * @public
 */
export interface LatestVersionReferences {
  /**
   * The latest version Amazon Resource Name (ARN) of the Image Builder resource.
   *
   * @public
   */
  latestVersionArn?: string | undefined;

  /**
   * The latest version Amazon Resource Name (ARN) with the same `major` version of the Image Builder resource.
   *
   * @public
   */
  latestMajorVersionArn?: string | undefined;

  /**
   * The latest version Amazon Resource Name (ARN) with the same `minor` version of the Image Builder resource.
   *
   * @public
   */
  latestMinorVersionArn?: string | undefined;

  /**
   * The latest version Amazon Resource Name (ARN) with the same `patch` version of the Image Builder resource.
   *
   * @public
   */
  latestPatchVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateComponentResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the component that the request created.
   *
   * @public
   */
  componentBuildVersionArn?: string | undefined;

  /**
   * A set of wildcard version ARNs that always reference the latest version of the resource. ARNs are included for the latest version overall, and for the latest versions within the same major, minor, and patch levels.
   *
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * @public
 */
export interface CreateContainerRecipeRequest {
  /**
   * The type of container to create.
   *
   * @public
   */
  containerType: ContainerType | undefined;

  /**
   * The name of the container recipe. The recipe name, combined with the semantic version, must be unique to your account in each Amazon Web Services Region. Image Builder generates the container recipe ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the container recipe.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The semantic version of the container recipe. This version follows the semantic version syntax.
   *
   * > **Note:**
   * >
   * > The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.
   * >
   * > **Assignment:** For the first three nodes, you can assign any positive integer value, including zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the build number to the fourth node.
   * >
   * > **Patterns:** You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.
   *
   * @public
   */
  semanticVersion: string | undefined;

  /**
   * The components included in the container recipe. You can specify each component only one time in a recipe.
   *
   * @public
   */
  components?: ComponentConfiguration[] | undefined;

  /**
   * A group of options that can be used to configure an instance for building and testing container images.
   *
   * @public
   */
  instanceConfiguration?: InstanceConfiguration | undefined;

  /**
   * The Dockerfile template used to build your image, as an inline data blob. You must specify exactly one of the `dockerfileTemplateData` or `dockerfileTemplateUri` properties. For the contextual variables that the template can include, see [Create a new version of a container recipe](https://docs.aws.amazon.com/imagebuilder/latest/userguide/create-container-recipes.html) in the *EC2 Image Builder User Guide*.
   *
   * @public
   */
  dockerfileTemplateData?: string | undefined;

  /**
   * The Amazon S3 URI for the Dockerfile template that is used to build your container image. You must have permission to read the object. Image Builder reads the object once, when it creates the recipe, and stores its content in the recipe. Later changes to the S3 object don't affect the recipe. You must specify exactly one of the `dockerfileTemplateData` or `dockerfileTemplateUri` properties.
   *
   * @public
   */
  dockerfileTemplateUri?: string | undefined;

  /**
   * Specifies the operating system platform when you use a custom base image. Container recipes support only the Linux and Windows platforms.
   *
   * @public
   */
  platformOverride?: Platform | undefined;

  /**
   * Specifies the operating system version for the base image. Use this property only when the base image is a container image from a registry. When the base image is an Image Builder image, the operating system version comes from the parent image.
   *
   * @public
   */
  imageOsVersionOverride?: string | undefined;

  /**
   * The base image for the container recipe. This can be an Image Builder image resource ARN or a container image URI from a registry, for example `amazonlinux:latest`.
   *
   * @public
   */
  parentImage: string | undefined;

  /**
   * Tags that are attached to the container recipe.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The working directory for use during build and test workflows.
   *
   * @public
   */
  workingDirectory?: string | undefined;

  /**
   * The destination repository for the container image. The Amazon ECR repository must already exist in the Amazon Web Services Region where the build runs.
   *
   * @public
   */
  targetRepository: TargetContainerRepository | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies which KMS key is used to encrypt the Dockerfile template. This can be either the Key ARN or the Alias ARN. For more information, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a `DryRunOperationException` error response.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateContainerRecipeResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Returns the Amazon Resource Name (ARN) of the container recipe that the request created.
   *
   * @public
   */
  containerRecipeArn?: string | undefined;

  /**
   * A set of wildcard version ARNs that always reference the latest version of the resource. ARNs are included for the latest version overall, and for the latest versions within the same major, minor, and patch levels.
   *
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * Identifies the launch template that the associated Windows AMI uses for launching an instance when Windows fast launch is enabled.
 *
 * > **Note:** You can specify either the `launchTemplateName` or the `launchTemplateId`, but not both.
 *
 * @public
 */
export interface FastLaunchLaunchTemplateSpecification {
  /**
   * The ID of the launch template to use for Windows fast launch for a Windows AMI.
   *
   * @public
   */
  launchTemplateId?: string | undefined;

  /**
   * The name of the launch template to use for Windows fast launch for a Windows AMI.
   *
   * @public
   */
  launchTemplateName?: string | undefined;

  /**
   * The version of the launch template to use for Windows fast launch for a Windows AMI.
   *
   * @public
   */
  launchTemplateVersion?: string | undefined;
}

/**
 * Configuration settings for creating and managing pre-provisioned snapshots for a fast-launch enabled Windows AMI.
 *
 * @public
 */
export interface FastLaunchSnapshotConfiguration {
  /**
   * The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.
   *
   * @public
   */
  targetResourceCount?: number | undefined;
}

/**
 * Defines and configures EC2 Fast Launch for output Windows AMIs.
 *
 * @public
 */
export interface FastLaunchConfiguration {
  /**
   * Specifies whether to enable Windows fast launch on the output AMI during distribution. A value of `false` means Image Builder takes no fast-launch action for this configuration.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * Configuration settings for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when Windows fast launch is enabled.
   *
   * @public
   */
  snapshotConfiguration?: FastLaunchSnapshotConfiguration | undefined;

  /**
   * The maximum number of parallel instances that are launched for creating resources.
   *
   * @public
   */
  maxParallelLaunches?: number | undefined;

  /**
   * The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots.
   *
   * @public
   */
  launchTemplate?: FastLaunchLaunchTemplateSpecification | undefined;

  /**
   * The owner account ID for the fast-launch enabled Windows AMI.
   *
   * @public
   */
  accountId?: string | undefined;
}

/**
 * Identifies an Amazon EC2 launch template to use for a specific account.
 *
 * @public
 */
export interface LaunchTemplateConfiguration {
  /**
   * Identifies the Amazon EC2 launch template to use.
   *
   * @public
   */
  launchTemplateId: string | undefined;

  /**
   * The account ID that this configuration applies to.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * Specifies whether to make the new launch template version that Image Builder creates the default version of the launch template. If you don't set a value, Image Builder treats it as `true`.
   *
   * @public
   */
  setDefaultVersion?: boolean | undefined;
}

/**
 * Properties that configure exporting the output image to a disk image file in an Amazon S3 bucket, in a format that's compatible with your VMs.
 *
 * @public
 */
export interface S3ExportConfiguration {
  /**
   * The name of the role that grants VM Import/Export permission to export images to your S3 bucket.
   *
   * @public
   */
  roleName: string | undefined;

  /**
   * Export the updated image to one of the following supported disk image formats:
   *
   * - **Virtual Hard Disk (VHD)** – Compatible with Citrix Xen and Microsoft Hyper-V virtualization products.
   * - **Stream-optimized ESX Virtual Machine Disk (VMDK)** – Compatible with VMware ESX and VMware vSphere versions 4, 5, and 6.
   * - **Raw** – Raw format.
   *
   * @public
   */
  diskImageFormat: DiskImageFormat | undefined;

  /**
   * The S3 bucket in which to store the output disk images for your VM.
   *
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * The Amazon S3 path for the bucket where the output disk images for your VM are stored.
   *
   * @public
   */
  s3Prefix?: string | undefined;
}

/**
 * Configuration for a single Parameter in the Amazon Web Services Systems Manager (SSM) Parameter Store in a given Region.
 *
 * @public
 */
export interface SsmParameterConfiguration {
  /**
   * Specify the account that will own the Parameter in a given Region. During distribution, this account must be specified in distribution settings as a target account for the Region.
   *
   * @public
   */
  amiAccountId?: string | undefined;

  /**
   * This is the name of the Parameter in the target Region or account. The image distribution creates the Parameter if it doesn't already exist. Otherwise, it updates the parameter.
   *
   * @public
   */
  parameterName: string | undefined;

  /**
   * The type of value the parameter contains. We recommend the `aws:ec2:image` data type.
   *
   * @public
   */
  dataType?: SsmParameterDataType | undefined;
}

/**
 * Defines the settings for a specific Region.
 *
 * @public
 */
export interface Distribution {
  /**
   * The target Region.
   *
   * @public
   */
  region: string | undefined;

  /**
   * The specific AMI settings; for example, launch permissions or AMI tags.
   *
   * @public
   */
  amiDistributionConfiguration?: AmiDistributionConfiguration | undefined;

  /**
   * Container distribution settings for encryption, licensing, and sharing in a specific Region.
   *
   * @public
   */
  containerDistributionConfiguration?: ContainerDistributionConfiguration | undefined;

  /**
   * The License Manager Configuration to associate with the AMI in the specified Region.
   *
   * @public
   */
  licenseConfigurationArns?: string[] | undefined;

  /**
   * A group of launchTemplateConfiguration settings that apply to image distribution for specified accounts.
   *
   * @public
   */
  launchTemplateConfigurations?: LaunchTemplateConfiguration[] | undefined;

  /**
   * Configure export settings to deliver disk images created from your image build, using a file format that is compatible with your VMs in that Region.
   *
   * @public
   */
  s3ExportConfiguration?: S3ExportConfiguration | undefined;

  /**
   * The Windows faster-launching configurations to use for AMI distribution.
   *
   * @public
   */
  fastLaunchConfigurations?: FastLaunchConfiguration[] | undefined;

  /**
   * Contains settings to update Amazon Web Services Systems Manager (SSM) Parameter Store Parameters with output AMI IDs from the build by target Region.
   *
   * @public
   */
  ssmParameterConfigurations?: SsmParameterConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateDistributionConfigurationRequest {
  /**
   * The name of the distribution configuration. Distribution configuration names must be unique to your account in each Amazon Web Services Region. Image Builder generates the distribution configuration ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the distribution configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The distribution settings for the configuration. Each entry defines how output images are distributed in one target Amazon Web Services Region. A Region can appear at most once in the list.
   *
   * @public
   */
  distributions: Distribution[] | undefined;

  /**
   * The tags of the distribution configuration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a `DryRunOperationException` error response.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDistributionConfigurationResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the distribution configuration that was created by this request.
   *
   * @public
   */
  distributionConfigurationArn?: string | undefined;
}

/**
 * Settings that Image Builder uses to configure the ECR repository and the output container images that Amazon Inspector scans.
 *
 * @public
 */
export interface EcrConfiguration {
  /**
   * The name of the container repository where Image Builder pushes the container image for the vulnerability scan. Provide the repository name only (a namespace path is allowed, but not the registry hostname); the repository must already exist in your account. If you don't specify a repository name, Image Builder creates the default repository `image-builder-image-scanning-repository` in your account.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * Tags for Image Builder to apply to the output container image that Amazon Inspector scans. Tags can help you identify and manage your scanned images.
   *
   * @public
   */
  containerTags?: string[] | undefined;
}

/**
 * A condition that sets which findings from an on-demand AMI scan fail the image. Image Builder checks the output AMI's findings against this condition during the test phase.
 *
 * @public
 */
export interface ScanResultCondition {
  /**
   * The maximum severity allowed for findings on the output AMI. A finding above this severity fails the image, unless `fixAvailable` excludes it. Valid values are `INFORMATIONAL`, `LOW`, `MEDIUM`, and `HIGH`. A `CRITICAL` finding that counts always fails the image.
   *
   * @public
   */
  maximumSeverityLabel: MaximumSeverityLabel | undefined;

  /**
   * Specifies whether only findings that have a fix available count toward `maximumSeverityLabel`. When `false`, Image Builder counts every finding. The default is `true`.
   *
   * @public
   */
  fixAvailable?: boolean | undefined;
}

/**
 * Contains settings for Image Builder image resource and container image scans.
 *
 * @public
 */
export interface ImageScanningConfiguration {
  /**
   * Specifies whether Amazon Inspector scans for vulnerabilities when you create a new image. You must also enable image tests. For AMI output, `imageScanningTypes` sets whether Amazon Inspector scans the test instance or the output AMI. For container output, Amazon Inspector scans the container image that Image Builder pushes to the Amazon ECR repository from your `ecrConfiguration` settings.
   *
   * To use container image scans, you must activate Amazon Inspector for Amazon ECR scanning in your account. The Image Builder `ListImageScanFindings` operation returns the findings of these scans.
   *
   * @public
   */
  imageScanningEnabled?: boolean | undefined;

  /**
   * Contains Amazon ECR settings for vulnerability scans.
   *
   * @public
   */
  ecrConfiguration?: EcrConfiguration | undefined;

  /**
   * The type of vulnerability scan that Image Builder runs for AMI output when `imageScanningEnabled` is `true`. Specify a single value. If you omit `imageScanningTypes`, Image Builder uses `TEST_INSTANCE_CVE`. The scan types work as follows:
   *
   * - With `TEST_INSTANCE_CVE`, Amazon Inspector scans the test instance during image tests. To use this scan, you must activate Amazon Inspector for Amazon EC2 scanning in your account. The Image Builder `ListImageScanFindings` operation returns the findings.
   * - With `ON_DEMAND_AMI_CVE`, Amazon Inspector starts an on-demand scan of the output AMI during image tests. To use this scan, you must build from an image recipe, but you do not need to activate Amazon Inspector in your account. The Amazon EC2 [GetImageFindings](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetImageFindings.html) operation returns the findings.
   *
   * @public
   */
  imageScanningTypes?: ImageScanningType[] | undefined;

  /**
   * The condition that the output AMI's scan results must meet for the image to pass. You can set `scanResultCondition` only when `imageScanningTypes` is `ON_DEMAND_AMI_CVE`. If you omit it, Image Builder starts the scan but does not wait for it or use its results to pass or fail the image.
   *
   * When you set `scanResultCondition`, the test phase waits for the scan to finish. Then Image Builder checks the findings against the condition. By default, Image Builder counts only findings that have a fix available. To count every finding, set `fixAvailable` to `false`. If a counted finding exceeds `maximumSeverityLabel`, Image Builder fails the image in the test phase and does not distribute the AMI.
   *
   * @public
   */
  scanResultCondition?: ScanResultCondition | undefined;
}

/**
 * Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.
 *
 * @public
 */
export interface ImageTestsConfiguration {
  /**
   * Specifies whether tests run after building the image. When enabled, tests run after the image build and before image distribution. Defaults to `true`.
   *
   * @public
   */
  imageTestsEnabled?: boolean | undefined;

  /**
   * The maximum time in minutes that tests are permitted to run. If you don't specify a value, Image Builder stores and returns 720.
   *
   * > **Note:** The timeout property is not currently active. This value is ignored.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;
}

/**
 * The logging configuration that's defined for the image. Image Builder uses the defined settings to direct execution log output during image creation.
 *
 * @public
 */
export interface ImageLoggingConfiguration {
  /**
   * The log group name that Image Builder uses for image creation. If not specified, the log group name defaults to `/aws/imagebuilder/image-name`.
   *
   * @public
   */
  logGroupName?: string | undefined;
}

/**
 * Contains a key/value pair that sets the named workflow parameter.
 *
 * @public
 */
export interface WorkflowParameter {
  /**
   * The name of the workflow parameter to set.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Sets the value for the named workflow parameter.
   *
   * @public
   */
  value: string[] | undefined;
}

/**
 * Contains control settings and configurable inputs for a workflow resource.
 *
 * @public
 */
export interface WorkflowConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the workflow resource.
   *
   * @public
   */
  workflowArn: string | undefined;

  /**
   * Contains parameter values for each of the parameters that the workflow document defined for the workflow resource.
   *
   * @public
   */
  parameters?: WorkflowParameter[] | undefined;

  /**
   * Test workflows are defined within named runtime groups called parallel groups. The parallel group is the named group that contains this test workflow. Test workflows within a parallel group can run at the same time. Image Builder starts up to five test workflows in the group at the same time, and starts additional workflows as others complete, until all workflows in the group have completed. This field only applies for test workflows.
   *
   * @public
   */
  parallelGroup?: string | undefined;

  /**
   * The action to take if the workflow fails. With `CONTINUE`, a failed workflow is logged and image creation proceeds to the next workflow. If you don't set a value, the image build fails when the workflow fails. You can only set this property for test workflows.
   *
   * @public
   */
  onFailure?: OnWorkflowFailure | undefined;
}

/**
 * @public
 */
export interface CreateImageRequest {
  /**
   * The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed. You must specify either this property or `containerRecipeArn`, but not both.
   *
   * @public
   */
  imageRecipeArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested. You must specify either this property or `imageRecipeArn`, but not both.
   *
   * @public
   */
  containerRecipeArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of the image build. If you don't specify a distribution configuration, Image Builder creates the output image only in the account and Amazon Web Services Region where the build runs.
   *
   * @public
   */
  distributionConfigurationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested.
   *
   * @public
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * Settings that determine whether Image Builder runs tests on the image after building it. Image tests are enabled by default.
   *
   * @public
   */
  imageTestsConfiguration?: ImageTestsConfiguration | undefined;

  /**
   * Specifies whether to collect additional information about the image being created, including the operating system (OS) version and package list. Defaults to `true`.
   *
   * @public
   */
  enhancedImageMetadataEnabled?: boolean | undefined;

  /**
   * The tags of the image.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The settings that determine whether and how Amazon Inspector scans the image for vulnerabilities.
   *
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * The array of workflow configuration objects for the build. If you specify workflows, they replace the default workflows that Image Builder otherwise runs for the build, and you must also provide an `executionRole`.
   *
   * @public
   */
  workflows?: WorkflowConfiguration[] | undefined;

  /**
   * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions. This property is required if you specify `workflows`. If you don't provide a role, Image Builder uses the Image Builder service-linked role in your account, and creates it if it doesn't exist.
   *
   * @public
   */
  executionRole?: string | undefined;

  /**
   * The CloudWatch Logs log group where Image Builder sends the image build logs. If you specify a log group name outside of the `/aws/imagebuilder/` namespace, you must also provide an `executionRole` that has permission to write to that log group.
   *
   * @public
   */
  loggingConfiguration?: ImageLoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateImageResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image that the request created.
   *
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * A set of wildcard version ARNs that always reference the latest version of the resource. ARNs are included for the latest version overall, and for the latest versions within the same major, minor, and patch levels.
   *
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * The logging configuration that's defined for pipeline execution.
 *
 * @public
 */
export interface PipelineLoggingConfiguration {
  /**
   * Specifies the CloudWatch Logs log group name for image build logs. The log group name can contain alphanumeric characters, hyphens, underscores, forward slashes, and periods, up to 512 characters. Log group names not starting with `/aws/imagebuilder/` require an `executionRole` with CloudWatch Logs write permissions. If not specified, defaults to `/aws/imagebuilder/image-name`.
   *
   * @public
   */
  imageLogGroupName?: string | undefined;

  /**
   * Specifies the CloudWatch Logs log group name for pipeline execution logs. The log group name can contain alphanumeric characters, hyphens, underscores, forward slashes, and periods, up to 512 characters. Log group names not starting with `/aws/imagebuilder/` require an `executionRole` with CloudWatch Logs write permissions. If not specified, defaults to `/aws/imagebuilder/pipeline/pipeline-name`.
   *
   * @public
   */
  pipelineLogGroupName?: string | undefined;
}

/**
 * A schedule configures when and how often a pipeline will automatically create a new image.
 *
 * @public
 */
export interface Schedule {
  /**
   * The expression determines how often EC2 Image Builder evaluates your `pipelineExecutionStartCondition`. You can specify a cron expression, or a rate expression such as `rate(1 day)`.
   *
   * For information on how to format a cron expression in Image Builder, see [Use cron expressions in EC2 Image Builder](https://docs.aws.amazon.com/imagebuilder/latest/userguide/image-builder-cron.html).
   *
   * @public
   */
  scheduleExpression?: string | undefined;

  /**
   * The timezone that applies to the scheduling expression. Specify a value in [IANA timezone format](https://www.joda.org/joda-time/timezones.html), for example `Etc/UTC` or `America/Los_Angeles`. If not specified, this defaults to UTC.
   *
   * @public
   */
  timezone?: string | undefined;

  /**
   * The start condition configures when the pipeline should trigger a new image build, as follows. If no value is set Image Builder defaults to `EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE`.
   *
   * - `EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE` (default) – When you use semantic version filters on the base image or components in your image recipe, EC2 Image Builder builds a new image only when there are new versions of the base image or components in your recipe that match the filter.
   *
   *   > **Note:** For semantic version syntax, see [CreateComponent](https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html).
   * - `EXPRESSION_MATCH_ONLY` – This condition builds a new image every time the CRON expression matches the current time.
   *
   * > **Note:** If the recipe references its base image through an Amazon Web Services Systems Manager Parameter Store parameter, a change in the parameter's value also counts as an available dependency update.
   *
   * @public
   */
  pipelineExecutionStartCondition?: PipelineExecutionStartCondition | undefined;

  /**
   * The policy that configures when Image Builder should automatically disable a pipeline that is failing.
   *
   * @public
   */
  autoDisablePolicy?: AutoDisablePolicy | undefined;
}

/**
 * @public
 */
export interface CreateImagePipelineRequest {
  /**
   * The name of the image pipeline. Pipeline names must be unique to your account in each Amazon Web Services Region. Image Builder generates the pipeline ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the image pipeline.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image recipe that configures images created by this image pipeline. You must specify either this property or `containerRecipeArn`, but not both.
   *
   * @public
   */
  imageRecipeArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container recipe that is used to configure images created by this container pipeline. You must specify either this property or `imageRecipeArn`, but not both.
   *
   * @public
   */
  containerRecipeArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration that builds images created by this image pipeline.
   *
   * @public
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the distribution configuration that configures and distributes images created by this image pipeline.
   *
   * @public
   */
  distributionConfigurationArn?: string | undefined;

  /**
   * Specifies the test settings that Image Builder applies to images that this pipeline creates. If you don't provide test settings, Image Builder stores a default configuration with image tests enabled.
   *
   * @public
   */
  imageTestsConfiguration?: ImageTestsConfiguration | undefined;

  /**
   * Specifies whether to collect additional information about the image being created, including the operating system (OS) version and package list. Defaults to `true`.
   *
   * @public
   */
  enhancedImageMetadataEnabled?: boolean | undefined;

  /**
   * The schedule of the image pipeline. If you don't provide a schedule, the pipeline runs only when you call StartImagePipelineExecution.
   *
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * The status of the image pipeline. If you don't specify a status, it defaults to `ENABLED`. A disabled pipeline doesn't run on its schedule, but you can still start builds manually.
   *
   * @public
   */
  status?: PipelineStatus | undefined;

  /**
   * The tags of the image pipeline.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The tags that Image Builder applies to the Image Builder image resource that this pipeline's scheduled executions create. These tags don't apply to the output AMI. To tag output AMIs, use `amiTags` in the pipeline's distribution configuration.
   *
   * @public
   */
  imageTags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The settings that determine whether and how Amazon Inspector scans the images that this pipeline creates.
   *
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * The array of workflow configuration objects for builds that this pipeline starts. You must also specify `executionRole` when you provide workflows.
   *
   * @public
   */
  workflows?: WorkflowConfiguration[] | undefined;

  /**
   * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions.
   *
   * @public
   */
  executionRole?: string | undefined;

  /**
   * Specifies the logging configuration for the image pipeline. Use this to define custom CloudWatch Logs log groups for your pipeline execution logs and image build logs. The service manages log groups with names starting with `/aws/imagebuilder/` using the service-linked role. For custom log group names outside of this prefix, you must also provide an `executionRole`.
   *
   * @public
   */
  loggingConfiguration?: PipelineLoggingConfiguration | undefined;

  /**
   * Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a `DryRunOperationException` error response.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateImagePipelineResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image pipeline that was created by this request.
   *
   * @public
   */
  imagePipelineArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateImageRecipeRequest {
  /**
   * The name of the image recipe. The recipe name, combined with the semantic version, must be unique to your account in each Amazon Web Services Region. Image Builder generates the image recipe ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the image recipe.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The semantic version of the image recipe. This version follows the semantic version syntax.
   *
   * > **Note:**
   * >
   * > The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.
   * >
   * > **Assignment:** For the first three nodes, you can assign any positive integer value, including zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the build number to the fourth node.
   * >
   * > **Patterns:** You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.
   *
   * @public
   */
  semanticVersion: string | undefined;

  /**
   * The components included in the image recipe. Components are optional. A recipe with no components bakes the base image without additional customization. You can specify each component only one time in a recipe. Components with a status of `DEPRECATED` or `DISABLED` can't be added to new recipes.
   *
   * @public
   */
  components?: ComponentConfiguration[] | undefined;

  /**
   * The base image for customizations specified in the image recipe. You can specify the parent image using one of the following options:
   *
   * - AMI ID
   * - Image Builder image Amazon Resource Name (ARN)
   * - Amazon Web Services Systems Manager (SSM) Parameter Store Parameter, prefixed by `ssm:`, followed by the parameter name or ARN.
   * - Amazon Web Services Marketplace product ID
   *
   * If you enter an AMI ID or an SSM parameter that contains the AMI ID, you must have access to the AMI. The AMI must also be in the Region where you're creating the recipe.
   *
   * @public
   */
  parentImage: string | undefined;

  /**
   * The block device mappings that Image Builder applies to the build instance and the output AMI. For example, you can override the size of the base image's root volume or attach additional EBS volumes.
   *
   * @public
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;

  /**
   * The tags of the image recipe.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The working directory used during build and test workflows. If you don't specify a working directory, Image Builder uses `/tmp` for Linux and macOS build instances, and `C:/` for Windows build instances.
   *
   * @public
   */
  workingDirectory?: string | undefined;

  /**
   * The additional settings and launch scripts for your build instances.
   *
   * @public
   */
  additionalInstanceConfiguration?: AdditionalInstanceConfiguration | undefined;

  /**
   * Tags that are applied to the AMI that Image Builder creates during the Build phase prior to image distribution.
   *
   * @public
   */
  amiTags?: Record<string, string> | undefined;

  /**
   * The AMI watermark names to attach to the output AMI from this recipe. AMI watermarks are lineage markers. They automatically propagate to derivative AMIs when the source AMI is copied or distributed across Regions or accounts.
   *
   * > **Note:** AMI watermarks are supported only for image recipes. AMIs with watermarks cannot be made public.
   *
   * @public
   */
  amiWatermarks?: string[] | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a `DryRunOperationException` error response.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateImageRecipeResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image recipe that was created by this request.
   *
   * @public
   */
  imageRecipeArn?: string | undefined;

  /**
   * A set of wildcard version ARNs that always reference the latest version of the resource. ARNs are included for the latest version overall, and for the latest versions within the same major, minor, and patch levels.
   *
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * The instance metadata service (IMDS) settings that Image Builder applies to the EC2 build and test instances it launches. These settings control how software on those instances retrieves instance metadata and IAM role credentials.
 *
 * @public
 */
export interface InstanceMetadataOptions {
  /**
   * Indicates whether a signed token header is required for instance metadata retrieval requests. The values affect the response as follows:
   *
   * - **required** – When you retrieve the IAM role credentials, version 2.0 credentials are returned in all cases.
   * - **optional** – You can include a signed token header in your request to retrieve instance metadata, or you can leave it out. If you include it, version 2.0 credentials are returned for the IAM role. Otherwise, version 1.0 credentials are returned.
   *
   * If you don't set a value, the EC2 launch default applies to the build and test instances. That default depends on the base AMI and any account-level instance metadata defaults. For more information, see [Configure the instance metadata options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html) in the **Amazon EC2 User Guide** .
   *
   * @public
   */
  httpTokens?: string | undefined;

  /**
   * Limit the number of hops that an instance metadata request can traverse to reach its destination. If you don't set a value, the EC2 launch default for the instance applies. If HTTP tokens are required, container image builds need a minimum of two hops.
   *
   * @public
   */
  httpPutResponseHopLimit?: number | undefined;
}

/**
 * Amazon S3 logging configuration.
 *
 * @public
 */
export interface S3Logs {
  /**
   * The name of an existing Amazon S3 bucket where Image Builder saves build logs. The bucket isn't validated when you create or update the configuration, and Image Builder doesn't create it. The instance profile associated with this infrastructure configuration must have permission to write to the bucket.
   *
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * The Amazon S3 key prefix under which Image Builder writes build and test logs in the bucket.
   *
   * @public
   */
  s3KeyPrefix?: string | undefined;
}

/**
 * Logging configuration defines where Image Builder uploads your logs.
 *
 * @public
 */
export interface Logging {
  /**
   * The Amazon S3 logging configuration.
   *
   * @public
   */
  s3Logs?: S3Logs | undefined;
}

/**
 * Settings for building on an instance that is already running, instead of an instance that Image Builder launches for the build.
 *
 * @public
 */
export interface ParentInstanceConfiguration {
  /**
   * The Amazon EC2 Auto Scaling group that Image Builder takes the build instance from. This is required when you specify `parentInstance`.
   *
   * @public
   */
  autoScalingGroup: AutoScalingGroupConfiguration | undefined;
}

/**
 * By default, EC2 instances run on shared tenancy hardware. This means that multiple Amazon Web Services accounts might share the same physical hardware. When you use dedicated hardware, the physical server that hosts your instances is dedicated to your Amazon Web Services account. Instance placement settings contain the details for the physical hardware where instances that Image Builder launches during image creation will run.
 *
 * @public
 */
export interface Placement {
  /**
   * The Availability Zone where your build and test instances will launch.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The tenancy of the instance. An instance with a tenancy of `dedicated` runs on single-tenant hardware. An instance with a tenancy of `host` runs on a Dedicated Host.
   *
   * If tenancy is set to `host`, then you can optionally specify one target for placement – either host ID or host resource group ARN. If automatic placement is enabled for your host, and you don't specify any placement target, Amazon EC2 will try to find an available host for your build and test instances.
   *
   * @public
   */
  tenancy?: TenancyType | undefined;

  /**
   * The ID of the Dedicated Host on which build and test instances run. This only applies if `tenancy` is `host`.
   *
   * @public
   */
  hostId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the host resource group in which to launch build and test instances. This only applies if `tenancy` is `host`.
   *
   * @public
   */
  hostResourceGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateInfrastructureConfigurationRequest {
  /**
   * The name of the infrastructure configuration. Infrastructure configuration names must be unique to your account in each Amazon Web Services Region. Image Builder generates the infrastructure configuration ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the infrastructure configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. Image Builder picks one of these instance types based on availability. If you don't specify instance types, Image Builder selects compatible instance types automatically. If you specify a Dedicated Host, Image Builder uses only instance types that the host supports.
   *
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * The instance profile to associate with the instance used to customize your Amazon EC2 AMI. The instance profile must exist in your account.
   *
   * @public
   */
  instanceProfileName: string | undefined;

  /**
   * The security group IDs to associate with the instance used to customize your Amazon EC2 AMI.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The subnet ID in which to place the instance used to customize your Amazon EC2 AMI. If you specify `subnetId`, you must also specify one or more security group IDs in `securityGroupIds`. Otherwise, the request fails.
   *
   * @public
   */
  subnetId?: string | undefined;

  /**
   * The logging configuration of the infrastructure configuration. When you configure S3 logs, Image Builder writes logs from the build and test process to the specified bucket under the key prefix.
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image.
   *
   * @public
   */
  keyPair?: string | undefined;

  /**
   * Specifies whether to terminate the instance on failure. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. Defaults to `true`.
   *
   * @public
   */
  terminateInstanceOnFailure?: boolean | undefined;

  /**
   * Specifies whether Image Builder terminates build and test instances when image creation ends without a failure (success, cancellation, or expiration). Defaults to `true`.
   *
   * @public
   */
  terminateInstanceOnCompletion?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SNS topic to which Image Builder sends image build event notifications. Specify a standard topic. Image Builder doesn't support FIFO topics. Image Builder validates the topic when you create or update the configuration. You must have permission to publish to the topic.
   *
   * > **Note:** EC2 Image Builder can't send notifications to SNS topics that are encrypted using keys from other accounts. If your SNS topic is encrypted, the key must be owned by the same account that owns your Image Builder resources.
   *
   * @public
   */
  snsTopicArn?: string | undefined;

  /**
   * The metadata tags to assign to the Amazon EC2 instance that Image Builder launches during the build process. Tags are formatted as key value pairs. Tag keys can't begin with `aws:` or match one of the following reserved keys: `CreatedBy`, `Ec2ImageBuilderArn`, `Name`, or `Tags`.
   *
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * The instance metadata service (IMDS) settings that Image Builder applies to the EC2 build and test instances it launches during image creation. If you don't set these options, the EC2 launch defaults for the instance apply. For more information about instance metadata options, see one of the following links:
   *
   * - [Configure the instance metadata options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html) in the **Amazon EC2 User Guide** for Linux instances.
   * - [Configure the instance metadata options](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html) in the **Amazon EC2 Windows Guide** for Windows instances.
   *
   * @public
   */
  instanceMetadataOptions?: InstanceMetadataOptions | undefined;

  /**
   * The metadata tags to assign to the infrastructure configuration resource that Image Builder creates as output. Tags are formatted as key value pairs.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The instance placement settings that define where the build and test instances that Image Builder launches during image creation run. These settings don't affect instances that you launch from the output image.
   *
   * @public
   */
  placement?: Placement | undefined;

  /**
   * The Amazon EC2 Auto Scaling group that Image Builder takes the build instance from, instead of launching a new instance. This applies only to the build phase.
   *
   * To use this feature, the execution role for the build must have permissions to describe the Auto Scaling group, tag the instance while it's still in the group, and detach it from the group. For more information, see [Build on an instance from an Auto Scaling group](https://docs.aws.amazon.com/imagebuilder/latest/userguide/infra-config-parent-instance.html) in the *EC2 Image Builder User Guide*.
   *
   * @public
   */
  parentInstance?: ParentInstanceConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a `DryRunOperationException` error response.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateInfrastructureConfigurationResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration that was created by this request.
   *
   * @public
   */
  infrastructureConfigurationArn?: string | undefined;
}

/**
 * Specifies how the lifecycle policy should apply actions to selected resources.
 *
 * @public
 */
export interface LifecyclePolicyDetailActionIncludeResources {
  /**
   * Specifies whether the lifecycle action should apply to distributed AMIs.
   *
   * @public
   */
  amis?: boolean | undefined;

  /**
   * Specifies whether the lifecycle action should apply to snapshots associated with distributed AMIs.
   *
   * @public
   */
  snapshots?: boolean | undefined;

  /**
   * Specifies whether the lifecycle action should apply to distributed containers.
   *
   * @public
   */
  containers?: boolean | undefined;
}

/**
 * Contains the action configuration for a lifecycle policy rule: the action to take, and which underlying resources the action extends to.
 *
 * @public
 */
export interface LifecyclePolicyDetailAction {
  /**
   * Specifies the lifecycle action to take. `DELETE` deletes the image resource and, with `includeResources`, also removes distributed AMIs, snapshots, or container images. `DEPRECATE` and `DISABLE` set the corresponding status on the image resource and, if `includeResources.amis` is set, on its distributed AMIs.
   *
   * @public
   */
  type: LifecyclePolicyDetailActionType | undefined;

  /**
   * Specifies which underlying resources the action extends to beyond the Image Builder image resource itself: distributed AMIs, their snapshots, or distributed container images. `DELETE` rules can include all three, `DEPRECATE` and `DISABLE` rules can include AMIs only, and you can only include snapshots together with AMIs.
   *
   * @public
   */
  includeResources?: LifecyclePolicyDetailActionIncludeResources | undefined;
}

/**
 * Defines criteria to exclude AMIs from lifecycle actions based on the last time they were used to launch an instance.
 *
 * @public
 */
export interface LifecyclePolicyDetailExclusionRulesAmisLastLaunched {
  /**
   * The integer number of units for the time period. For example `6` (months).
   *
   * @public
   */
  value: number | undefined;

  /**
   * Defines the unit of time that the lifecycle policy uses to calculate elapsed time since the last launch.
   *
   * @public
   */
  unit: LifecyclePolicyTimeUnit | undefined;
}

/**
 * Defines criteria for AMIs that are excluded from lifecycle actions.
 *
 * @public
 */
export interface LifecyclePolicyDetailExclusionRulesAmis {
  /**
   * Configures whether public AMIs are excluded from the lifecycle action.
   *
   * @public
   */
  isPublic?: boolean | undefined;

  /**
   * Configures Amazon Web Services Regions that are excluded from the lifecycle action.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * The lifecycle action doesn't apply to AMIs that are shared with any of the specified Amazon Web Services accounts.
   *
   * @public
   */
  sharedAccounts?: string[] | undefined;

  /**
   * Configures Image Builder to exclude AMIs that were launched within the specified time period from lifecycle actions. AMIs with no recorded last-launched time aren't excluded by this rule.
   *
   * @public
   */
  lastLaunched?: LifecyclePolicyDetailExclusionRulesAmisLastLaunched | undefined;

  /**
   * Lifecycle actions don't apply to AMIs that have any of these tags. Both the key and the value must match.
   *
   * @public
   */
  tagMap?: Record<string, string> | undefined;
}

/**
 * Specifies resources that lifecycle policy actions should not apply to.
 *
 * @public
 */
export interface LifecyclePolicyDetailExclusionRules {
  /**
   * Contains a list of tags that Image Builder uses to skip lifecycle actions for Image Builder image resources that have them.
   *
   * @public
   */
  tagMap?: Record<string, string> | undefined;

  /**
   * Lists configuration values that apply to AMIs that Image Builder should exclude from the lifecycle action.
   *
   * @public
   */
  amis?: LifecyclePolicyDetailExclusionRulesAmis | undefined;
}

/**
 * Defines filters that the lifecycle policy uses to determine impacted resource.
 *
 * @public
 */
export interface LifecyclePolicyDetailFilter {
  /**
   * Filter resources based on either `AGE` or `COUNT`. You can only use the count filter with the `DELETE` action type.
   *
   * @public
   */
  type: LifecyclePolicyDetailFilterType | undefined;

  /**
   * The number of units for the time period or for the count. For example, a value of `6` might refer to six months or six AMIs.
   *
   * > **Note:** For count-based filters, this value represents the minimum number of resources to keep on hand. If you have fewer resources than this number, the resource is excluded from lifecycle actions.
   *
   * @public
   */
  value: number | undefined;

  /**
   * Defines the unit of time that the lifecycle policy uses to determine impacted resources. This is required for age-based rules.
   *
   * @public
   */
  unit?: LifecyclePolicyTimeUnit | undefined;

  /**
   * For age-based filters, this is the number of resources to keep on hand after the lifecycle `DELETE` action is applied. Impacted resources are only deleted if you have more than this number of resources. If you have fewer resources than this number, the impacted resource is not deleted.
   *
   * @public
   */
  retainAtLeast?: number | undefined;
}

/**
 * Defines one lifecycle policy rule: the action to take, the filter that determines which resources the rule applies to, and optional exclusion rules.
 *
 * @public
 */
export interface LifecyclePolicyDetail {
  /**
   * Configuration details for the policy action.
   *
   * @public
   */
  action: LifecyclePolicyDetailAction | undefined;

  /**
   * Specifies the resources that the lifecycle policy applies to.
   *
   * @public
   */
  filter: LifecyclePolicyDetailFilter | undefined;

  /**
   * Additional rules to specify resources that should be exempt from policy actions.
   *
   * @public
   */
  exclusionRules?: LifecyclePolicyDetailExclusionRules | undefined;
}

/**
 * Specifies an Image Builder recipe that the lifecycle policy uses for resource selection.
 *
 * @public
 */
export interface LifecyclePolicyResourceSelectionRecipe {
  /**
   * The name of an Image Builder recipe that the lifecycle policy uses for resource selection.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the Image Builder recipe specified by the `name` field.
   *
   * @public
   */
  semanticVersion: string | undefined;
}

/**
 * Resource selection criteria for the lifecycle policy. You must provide exactly one selection criteria: either recipes or a tag map, not both.
 *
 * @public
 */
export interface LifecyclePolicyResourceSelection {
  /**
   * A list of recipes that are used as selection criteria for the output images that the lifecycle policy applies to.
   *
   * @public
   */
  recipes?: LifecyclePolicyResourceSelectionRecipe[] | undefined;

  /**
   * A list of tags that are used as selection criteria for the Image Builder image resources that the lifecycle policy applies to.
   *
   * @public
   */
  tagMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLifecyclePolicyRequest {
  /**
   * The name of the lifecycle policy to create. Policy names must be unique to your account in each Amazon Web Services Region. Image Builder generates the policy ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name. You can't change the name after creation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Optional description for the lifecycle policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Indicates whether the lifecycle policy resource is enabled. If you don't specify a status, it defaults to `ENABLED`. Only enabled policies run on their schedule.
   *
   * @public
   */
  status?: LifecyclePolicyStatus | undefined;

  /**
   * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to run lifecycle actions. You must have permission to pass the role, and the role's trust policy must allow the Image Builder service principal to assume it.
   *
   * @public
   */
  executionRole: string | undefined;

  /**
   * The type of Image Builder resource that the lifecycle policy applies to. The resource type determines the allowed rule actions: policies for AMI-based Image Builder images support `DELETE`, `DEPRECATE`, and `DISABLE`, and policies for container-based Image Builder images support only `DELETE`. You can't change the resource type after creation.
   *
   * @public
   */
  resourceType: LifecyclePolicyResourceType | undefined;

  /**
   * Configuration details for the lifecycle policy rules. A policy can contain at most one rule per action type: one `DELETE`, one `DEPRECATE`, and one `DISABLE`.
   *
   * @public
   */
  policyDetails: LifecyclePolicyDetail[] | undefined;

  /**
   * Selection criteria for the resources that the lifecycle policy applies to. You must specify exactly one selection criteria: either recipes or a tag map, not both.
   *
   * @public
   */
  resourceSelection: LifecyclePolicyResourceSelection | undefined;

  /**
   * Tags to apply to the lifecycle policy resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a `DryRunOperationException` error response.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateLifecyclePolicyResponse {
  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the lifecycle policy that the request created.
   *
   * @public
   */
  lifecyclePolicyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowRequest {
  /**
   * The name of the workflow to create. Image Builder generates the workflow ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name. If a workflow with the same name and semantic version already exists in your account in the same Amazon Web Services Region, the request creates a new build version for it. If the content is also identical to the latest build version, the request fails because the workflow already exists.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The semantic version of this workflow resource. The semantic version syntax adheres to the following rules.
   *
   * > **Note:**
   * >
   * > The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.
   * >
   * > **Assignment:** For the first three nodes, you can assign any positive integer value, including zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the build number to the fourth node.
   * >
   * > **Patterns:** You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.
   *
   * @public
   */
  semanticVersion: string | undefined;

  /**
   * Describes the workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Describes what change has been made in this version of the workflow, or what makes this version different from other versions of the workflow.
   *
   * @public
   */
  changeDescription?: string | undefined;

  /**
   * The UTF-8 encoded YAML document content for the workflow, up to 16,000 characters. For larger documents, store the document in Amazon S3 and specify the `uri` property instead. You must specify exactly one of the `data` or `uri` properties.
   *
   * @public
   */
  data?: string | undefined;

  /**
   * The `uri` of a YAML workflow document file stored in Amazon S3. This must be an S3 URL (`s3://bucket/key`), and you must have permission to access the S3 bucket it points to. A workflow document that you provide from Amazon S3 can be up to your service quota for workflow size.
   *
   * Alternatively, you can specify the YAML document inline, using the workflow `data` property. You must specify exactly one of the `data` or `uri` properties.
   *
   * @public
   */
  uri?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the KMS key used to encrypt this workflow resource. This can be either the Key ARN or the Alias ARN. For more information, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN) in the *Key Management Service Developer Guide*. If you don't specify a key, Image Builder encrypts the workflow document with a KMS key that Image Builder owns.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * Tags that apply to the workflow resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The image creation stage that this workflow applies to. Image Builder validates the workflow document steps against the stage you specify.
   *
   * @public
   */
  type: WorkflowType | undefined;

  /**
   * Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a `DryRunOperationException` error response.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowResponse {
  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workflow resource that the request created.
   *
   * @public
   */
  workflowBuildVersionArn?: string | undefined;

  /**
   * A set of wildcard version ARNs that always reference the latest version of the resource. ARNs are included for the latest version overall, and for the latest versions within the same major, minor, and patch levels.
   *
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * A CVSS score for the vulnerability, as published by the vulnerability source. Sources include the National Vulnerability Database (NVD) and the operating system vendor's security feed. A finding can include CVSS scores from multiple sources and CVSS versions.
 *
 * @public
 */
export interface CvssScore {
  /**
   * The CVSS base score.
   *
   * @public
   */
  baseScore?: number | undefined;

  /**
   * The vector string of the CVSS score.
   *
   * @public
   */
  scoringVector?: string | undefined;

  /**
   * The CVSS version that generated the score.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The source of the CVSS score.
   *
   * @public
   */
  source?: string | undefined;
}

/**
 * Details about an adjustment that Amazon Inspector made to the CVSS score for a finding.
 *
 * @public
 */
export interface CvssScoreAdjustment {
  /**
   * The metric that Amazon Inspector used to adjust the CVSS score.
   *
   * @public
   */
  metric?: string | undefined;

  /**
   * The reason for the CVSS score adjustment.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Details about the source of the score, and the factors that determined the adjustments to create the final score.
 *
 * @public
 */
export interface CvssScoreDetails {
  /**
   * The source for the CVSS score.
   *
   * @public
   */
  scoreSource?: string | undefined;

  /**
   * The source of the CVSS data that the Amazon Inspector score for the finding is based on, for example NVD or a vendor security feed.
   *
   * @public
   */
  cvssSource?: string | undefined;

  /**
   * The CVSS version that generated the score.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The CVSS score.
   *
   * @public
   */
  score?: number | undefined;

  /**
   * A vector that measures the severity of the vulnerability.
   *
   * @public
   */
  scoringVector?: string | undefined;

  /**
   * The adjustments that Amazon Inspector applied to the base CVSS score to produce its own score for the finding. The list is empty when Amazon Inspector made no adjustments.
   *
   * @public
   */
  adjustments?: CvssScoreAdjustment[] | undefined;
}

/**
 * @public
 */
export interface DeleteComponentRequest {
  /**
   * The Amazon Resource Name (ARN) of the component build version to delete.
   *
   * @public
   */
  componentBuildVersionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteComponentResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the component build version that this request deleted.
   *
   * @public
   */
  componentBuildVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteContainerRecipeRequest {
  /**
   * The Amazon Resource Name (ARN) of the container recipe to delete.
   *
   * @public
   */
  containerRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteContainerRecipeResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container recipe that was deleted.
   *
   * @public
   */
  containerRecipeArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDistributionConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the distribution configuration to delete.
   *
   * @public
   */
  distributionConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDistributionConfigurationResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the distribution configuration that was deleted.
   *
   * @public
   */
  distributionConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageRequest {
  /**
   * The Amazon Resource Name (ARN) of the Image Builder image resource to delete.
   *
   * @public
   */
  imageBuildVersionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Image Builder image resource that this request deleted.
   *
   * @public
   */
  imageBuildVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteImagePipelineRequest {
  /**
   * The Amazon Resource Name (ARN) of the image pipeline to delete.
   *
   * @public
   */
  imagePipelineArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteImagePipelineResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image pipeline that was deleted.
   *
   * @public
   */
  imagePipelineArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageRecipeRequest {
  /**
   * The Amazon Resource Name (ARN) of the image recipe to delete.
   *
   * @public
   */
  imageRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageRecipeResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image recipe that was deleted.
   *
   * @public
   */
  imageRecipeArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteInfrastructureConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration to delete.
   *
   * @public
   */
  infrastructureConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInfrastructureConfigurationResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration that was deleted.
   *
   * @public
   */
  infrastructureConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLifecyclePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the lifecycle policy resource to delete.
   *
   * @public
   */
  lifecyclePolicyArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLifecyclePolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the lifecycle policy that was deleted.
   *
   * @public
   */
  lifecyclePolicyArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowRequest {
  /**
   * The Amazon Resource Name (ARN) of the workflow resource to delete.
   *
   * @public
   */
  workflowBuildVersionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowResponse {
  /**
   * The Amazon Resource Name (ARN) of the workflow resource that this request deleted.
   *
   * @public
   */
  workflowBuildVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface DistributeImageRequest {
  /**
   * The source image to distribute. You can specify the source in any of the following formats:
   *
   * - An AMI ID.
   * - An Amazon Web Services Systems Manager Parameter Store reference, prefixed by `ssm:`, followed by the parameter name or ARN.
   * - An Image Builder image Amazon Resource Name (ARN). An image version ARN resolves to the latest available build version.
   *
   * Whichever format you use, the source must resolve to an AMI in the current Amazon Web Services Region.
   *
   * @public
   */
  sourceImage: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the distribution configuration. The configuration defines target Regions, accounts, and AMI settings. The distribution configuration must be in the same Region as this operation.
   *
   * @public
   */
  distributionConfigurationArn: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the IAM role that Image Builder assumes to distribute the image.
   *
   * @public
   */
  executionRole: string | undefined;

  /**
   * The tags to apply to the new Image Builder image resource that this operation creates. To tag the output AMIs, use `amiTags` in the distribution configuration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The logging configuration for the distribution.
   *
   * @public
   */
  loggingConfiguration?: ImageLoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface DistributeImageResponse {
  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the new Image Builder image resource that this operation creates to track the distribution. Use this ARN with GetImage to monitor distribution progress.
   *
   * @public
   */
  imageBuildVersionArn?: string | undefined;
}

/**
 * Defines how Image Builder distributes the output of an image build. You can configure:
 *
 * - The Regions to distribute the image to.
 * - The Region-specific settings to apply, such as output AMI names, launch permissions for other Amazon Web Services accounts, and target container repositories.
 *
 * @public
 */
export interface DistributionConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the distribution configuration.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the distribution configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the distribution configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The distribution objects that apply Region-specific settings for the deployment of the image to targeted Regions.
   *
   * @public
   */
  distributions?: Distribution[] | undefined;

  /**
   * A property that Image Builder doesn't use. You can't set this property when you create or update a distribution configuration, and it has no effect on distribution behavior.
   *
   * @public
   */
  timeoutMinutes: number | undefined;

  /**
   * The date on which this distribution configuration was created.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * The date on which this distribution configuration was last updated.
   *
   * @public
   */
  dateUpdated?: string | undefined;

  /**
   * The tags of the distribution configuration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * A high-level overview of a distribution configuration.
 *
 * @public
 */
export interface DistributionConfigurationSummary {
  /**
   * The Amazon Resource Name (ARN) of the distribution configuration.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the distribution configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the distribution configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date on which the distribution configuration was created.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * The date on which the distribution configuration was updated.
   *
   * @public
   */
  dateUpdated?: string | undefined;

  /**
   * The tags associated with the distribution configuration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A list of the Regions that the distribution configuration distributes images to.
   *
   * @public
   */
  regions?: string[] | undefined;
}

/**
 * A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the filter. Filter names are case-sensitive.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The filter values. Filter values are case-sensitive.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface GetComponentRequest {
  /**
   * The Amazon Resource Name (ARN) of the component that you want to get. You can specify a build version ARN, or a component version ARN. The version can use the `x` wildcard in trailing positions, for example `1.0.x` or `1.x.x`. Version ARNs resolve to the latest available matching component build version.
   *
   * @public
   */
  componentBuildVersionArn: string | undefined;
}

/**
 * @public
 */
export interface GetComponentResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The component object specified in the request.
   *
   * @public
   */
  component?: Component | undefined;

  /**
   * A set of wildcard version ARNs that always reference the latest version of the resource. ARNs are included for the latest version overall, and for the latest versions within the same major, minor, and patch levels.
   *
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * @public
 */
export interface GetComponentPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the component whose policy you want to retrieve.
   *
   * @public
   */
  componentArn: string | undefined;
}

/**
 * @public
 */
export interface GetComponentPolicyResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The component policy.
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetContainerRecipeRequest {
  /**
   * The Amazon Resource Name (ARN) of the container recipe to retrieve.
   *
   * @public
   */
  containerRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface GetContainerRecipeResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The container recipe object that is returned.
   *
   * @public
   */
  containerRecipe?: ContainerRecipe | undefined;

  /**
   * A set of wildcard version ARNs that always reference the latest version of the resource. ARNs are included for the latest version overall, and for the latest versions within the same major, minor, and patch levels.
   *
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * @public
 */
export interface GetContainerRecipePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the container recipe for the policy being requested.
   *
   * @public
   */
  containerRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface GetContainerRecipePolicyResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The resource policy for the container recipe, as a JSON policy document. If no policy has been applied, the response contains an empty JSON object (`\{\}`).
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the distribution configuration that you want to retrieve.
   *
   * @public
   */
  distributionConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionConfigurationResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The distribution configuration object.
   *
   * @public
   */
  distributionConfiguration?: DistributionConfiguration | undefined;
}

/**
 * @public
 */
export interface GetImageRequest {
  /**
   * The Amazon Resource Name (ARN) of the image that you want to get. You can specify a full build version ARN, or a version ARN with or without wildcards (`x.x.x`, `1.x.x`, or `1.0.x`). A version or wildcard ARN resolves to the latest matching build version that has reached `AVAILABLE` status. Builds that were later deprecated, disabled, or deleted don't resolve. To get an image in any other state, such as a failed or in-progress build, specify the full build version ARN.
   *
   * @public
   */
  imageBuildVersionArn: string | undefined;
}

/**
 * An image recipe.
 *
 * @public
 */
export interface ImageRecipe {
  /**
   * The Amazon Resource Name (ARN) of the image recipe.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The output image type. For an image recipe, this is always AMI. Container images are built from container recipes, a separate resource. This field isn't currently returned in responses.
   *
   * @public
   */
  type?: ImageType | undefined;

  /**
   * The name of the image recipe.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the image recipe.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The platform of the image recipe.
   *
   * @public
   */
  platform?: Platform | undefined;

  /**
   * The owner of the image recipe.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * The version of the image recipe.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The components that are included in the image recipe. A recipe can contain a maximum of 20 build and test components in any combination, by default. This maximum is an adjustable quota. For more information, see [EC2 Image Builder endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  components?: ComponentConfiguration[] | undefined;

  /**
   * The base image for customizations specified in the image recipe. You can specify the parent image using one of the following options:
   *
   * - AMI ID
   * - Image Builder image Amazon Resource Name (ARN)
   * - Amazon Web Services Systems Manager (SSM) Parameter Store Parameter, prefixed by `ssm:`, followed by the parameter name or ARN.
   * - Amazon Web Services Marketplace product ID
   *
   * @public
   */
  parentImage?: string | undefined;

  /**
   * The block device mappings to apply when creating images from this recipe.
   *
   * @public
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;

  /**
   * The date on which this image recipe was created.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * The tags of the image recipe.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The working directory used during build and test workflows. If you don't specify a working directory, Image Builder uses `/tmp` for Linux and macOS build instances, and `C:/` for Windows build instances.
   *
   * @public
   */
  workingDirectory?: string | undefined;

  /**
   * Before you create a new AMI, Image Builder launches temporary Amazon EC2 instances to build and test your image configuration. Instance configuration adds a layer of control over those instances. You can define settings and add scripts to run when Image Builder launches your build instance.
   *
   * @public
   */
  additionalInstanceConfiguration?: AdditionalInstanceConfiguration | undefined;

  /**
   * Tags that are applied to the AMI that Image Builder creates during the Build phase prior to image distribution.
   *
   * @public
   */
  amiTags?: Record<string, string> | undefined;

  /**
   * The AMI watermark names attached to the output AMI from this recipe. AMI watermarks are lineage markers that automatically propagate to derivative AMIs when the source AMI is copied or distributed.
   *
   * @public
   */
  amiWatermarks?: string[] | undefined;
}

/**
 * Details of the infrastructure configuration.
 *
 * @public
 */
export interface InfrastructureConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the infrastructure configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the infrastructure configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The instance types of the infrastructure configuration.
   *
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * The instance profile of the infrastructure configuration.
   *
   * @public
   */
  instanceProfileName?: string | undefined;

  /**
   * The security group IDs of the infrastructure configuration.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The subnet ID of the infrastructure configuration.
   *
   * @public
   */
  subnetId?: string | undefined;

  /**
   * The logging configuration of the infrastructure configuration. When you configure S3 logs, Image Builder writes logs from the build and test process to the specified bucket under the key prefix.
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * The Amazon EC2 key pair of the infrastructure configuration.
   *
   * @public
   */
  keyPair?: string | undefined;

  /**
   * Indicates whether Image Builder terminates the build and test instances when the image build fails. When `false`, Image Builder retains the instance so that you can debug it.
   *
   * @public
   */
  terminateInstanceOnFailure?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SNS topic to which Image Builder sends image build event notifications. Specify a standard topic. Image Builder doesn't support FIFO topics.
   *
   * > **Note:** EC2 Image Builder can't send notifications to SNS topics that are encrypted using keys from other accounts. If your SNS topic is encrypted, the key must be owned by the same account that owns your Image Builder resources.
   *
   * @public
   */
  snsTopicArn?: string | undefined;

  /**
   * The date on which the infrastructure configuration was created.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * The date on which the infrastructure configuration was last updated.
   *
   * @public
   */
  dateUpdated?: string | undefined;

  /**
   * The metadata tags assigned to the Amazon EC2 build and test instances that Image Builder launches during image creation.
   *
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * The instance metadata option settings for the infrastructure configuration.
   *
   * @public
   */
  instanceMetadataOptions?: InstanceMetadataOptions | undefined;

  /**
   * The tags of the infrastructure configuration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The instance placement settings that define where the build and test instances that Image Builder launches during image creation run. These settings don't affect instances that you launch from the output image.
   *
   * @public
   */
  placement?: Placement | undefined;

  /**
   * Specifies whether Image Builder terminates build and test instances when image creation ends without a failure.
   *
   * @public
   */
  terminateInstanceOnCompletion?: boolean | undefined;

  /**
   * The Amazon EC2 Auto Scaling group that Image Builder takes the build instance from, instead of launching a new instance. This applies only to the build phase.
   *
   * @public
   */
  parentInstance?: ParentInstanceConfiguration | undefined;
}

/**
 * The resources produced by this image.
 *
 * @public
 */
export interface OutputResources {
  /**
   * The Amazon EC2 AMIs created by this image. The list contains one entry per AMI, including copies that distribution created in each target Amazon Web Services Region and account.
   *
   * @public
   */
  amis?: Ami[] | undefined;

  /**
   * The container images that Image Builder created when it built this image, stored in the output Amazon ECR repository.
   *
   * @public
   */
  containers?: Container[] | undefined;
}

/**
 * Shows the vulnerability scan status for a specific image, and the reason for that status.
 *
 * @public
 */
export interface ImageScanState {
  /**
   * The current state of vulnerability scans for the image. The scan starts as `PENDING` and moves through `SCANNING` and `COLLECTING` to `COMPLETED`. Image Builder sets the status to `ABANDONED` if the image reaches a terminal state before the scan finding collection completes. A scan can also end as `FAILED` or `TIMED_OUT`.
   *
   * @public
   */
  status?: ImageScanStatus | undefined;

  /**
   * The reason for the scan status for the image.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * An Image Builder image resource that keeps track of all of the settings used to create, configure, and distribute output for that image. An image that Image Builder built from a recipe contains exactly one recipe – either a container recipe (`containerRecipe`), which creates a container image, or an image recipe (`imageRecipe`), which creates an AMI. Imported images don't contain a recipe.
 *
 * @public
 */
export interface Image {
  /**
   * The Amazon Resource Name (ARN) of the image.
   *
   * > **Note:**
   * >
   * > Semantic versioning is included in each object's Amazon Resource Name (ARN), at the level that applies to that object as follows:
   * >
   * > 1. Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are either left off entirely, or they are specified as wildcards, for example: x.x.x.
   * > 2. Version ARNs have only the first three nodes: <major>.<minor>.<patch>
   * > 3. Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Specifies whether this image produces an AMI or a container image.
   *
   * @public
   */
  type?: ImageType | undefined;

  /**
   * The name of the image.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The semantic version of the image.
   *
   * > **Note:**
   * >
   * > The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.
   * >
   * > **Assignment:** For the first three nodes, you can assign any positive integer value, including zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the build number to the fourth node.
   * >
   * > **Patterns:** You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.
   * >
   * > **Filtering:** You can use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The image operating system platform, such as Linux or Windows.
   *
   * @public
   */
  platform?: Platform | undefined;

  /**
   * Indicates whether Image Builder collects additional information about the image, such as the operating system (OS) version and package list.
   *
   * @public
   */
  enhancedImageMetadataEnabled?: boolean | undefined;

  /**
   * The operating system version for instances that launch from this image. For example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.
   *
   * @public
   */
  osVersion?: string | undefined;

  /**
   * The state of the image.
   *
   * @public
   */
  state?: ImageState | undefined;

  /**
   * For images that distribute an AMI, this is the image recipe that Image Builder used to create the image. For container images, this is empty.
   *
   * @public
   */
  imageRecipe?: ImageRecipe | undefined;

  /**
   * For container images, this is the container recipe that Image Builder used to create the image. For images that distribute an AMI, this is empty.
   *
   * @public
   */
  containerRecipe?: ContainerRecipe | undefined;

  /**
   * The name of the image pipeline that created this image. Image Builder doesn't return this field for new images. Use `sourcePipelineArn` instead.
   *
   * @public
   */
  sourcePipelineName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image pipeline that created this image. This field is only present for images that a pipeline execution created.
   *
   * @public
   */
  sourcePipelineArn?: string | undefined;

  /**
   * The infrastructure that Image Builder used to create this image.
   *
   * @public
   */
  infrastructureConfiguration?: InfrastructureConfiguration | undefined;

  /**
   * The distribution configuration that Image Builder used to create this image.
   *
   * @public
   */
  distributionConfiguration?: DistributionConfiguration | undefined;

  /**
   * The image test settings that Image Builder used when it created this image.
   *
   * @public
   */
  imageTestsConfiguration?: ImageTestsConfiguration | undefined;

  /**
   * The date on which Image Builder created this image.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * The output resources that Image Builder produces for this image.
   *
   * @public
   */
  outputResources?: OutputResources | undefined;

  /**
   * The tags that apply to this image.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Indicates the type of build that created this image. The build can be initiated in the following ways:
   *
   * - **USER_INITIATED** – A manual pipeline build request.
   * - **SCHEDULED** – A pipeline build initiated by a cron expression in the Image Builder pipeline, or from EventBridge.
   * - **IMPORT** – A VM import created the image to use as the base image for the recipe.
   * - **IMPORT_ISO** – An ISO disk import created the image.
   *
   * @public
   */
  buildType?: BuildType | undefined;

  /**
   * The origin of the base image that Image Builder used to build this image.
   *
   * @public
   */
  imageSource?: ImageSource | undefined;

  /**
   * Contains information about the current state of scans for this image.
   *
   * @public
   */
  scanState?: ImageScanState | undefined;

  /**
   * The settings that determine whether and how Amazon Inspector scans this image.
   *
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * The time when deprecation occurs for an image resource. This can be a past or future date.
   *
   * @public
   */
  deprecationTime?: Date | undefined;

  /**
   * Identifies the last runtime instance of the lifecycle policy to take action on the image.
   *
   * @public
   */
  lifecycleExecutionId?: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions.
   *
   * @public
   */
  executionRole?: string | undefined;

  /**
   * The build, test, and distribution workflow configurations that are associated with the image.
   *
   * @public
   */
  workflows?: WorkflowConfiguration[] | undefined;

  /**
   * The logging configuration that's defined for the image. Image Builder uses the defined settings to direct execution log output during image creation.
   *
   * @public
   */
  loggingConfiguration?: ImageLoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetImageResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The image object.
   *
   * @public
   */
  image?: Image | undefined;

  /**
   * A set of wildcard version ARNs that always reference the latest version of the resource. ARNs are included for the latest version overall, and for the latest versions within the same major, minor, and patch levels.
   *
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * @public
 */
export interface GetImagePipelineRequest {
  /**
   * The Amazon Resource Name (ARN) of the image pipeline that you want to retrieve.
   *
   * @public
   */
  imagePipelineArn: string | undefined;
}

/**
 * Defines the automation configuration for building, testing, and distributing images. A pipeline references the resources that its builds use, such as the recipe and infrastructure configuration. It also holds the settings that control its builds, such as the schedule and custom workflows.
 *
 * @public
 */
export interface ImagePipeline {
  /**
   * The Amazon Resource Name (ARN) of the image pipeline.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the image pipeline.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the image pipeline.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The platform of the image pipeline, inherited from the recipe that the pipeline uses.
   *
   * @public
   */
  platform?: Platform | undefined;

  /**
   * Specifies whether to collect additional information about the image being created, including the operating system (OS) version and package list. Defaults to `true`.
   *
   * @public
   */
  enhancedImageMetadataEnabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image recipe associated with this image pipeline.
   *
   * @public
   */
  imageRecipeArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container recipe that is used for this pipeline.
   *
   * @public
   */
  containerRecipeArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.
   *
   * @public
   */
  infrastructureConfigurationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.
   *
   * @public
   */
  distributionConfigurationArn?: string | undefined;

  /**
   * The image tests configuration of the image pipeline.
   *
   * @public
   */
  imageTestsConfiguration?: ImageTestsConfiguration | undefined;

  /**
   * The schedule of the image pipeline.
   *
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * The status of the image pipeline. A disabled pipeline doesn't run on its schedule, but you can still start builds manually. Image Builder can also disable a pipeline automatically when consecutive scheduled builds fail.
   *
   * @public
   */
  status?: PipelineStatus | undefined;

  /**
   * The date on which this image pipeline was created.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * The date on which this image pipeline was last updated.
   *
   * @public
   */
  dateUpdated?: string | undefined;

  /**
   * The date on which this image pipeline was last run.
   *
   * @public
   */
  dateLastRun?: string | undefined;

  /**
   * The status of the last image that this pipeline built, such as `BUILDING`, `TESTING`, `FAILED`, or `AVAILABLE`.
   *
   * @public
   */
  lastRunStatus?: ImageStatus | undefined;

  /**
   * The next date when the pipeline is scheduled to run.
   *
   * @public
   */
  dateNextRun?: string | undefined;

  /**
   * The tags of this image pipeline.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The settings that determine whether and how Amazon Inspector scans the images that the pipeline creates.
   *
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * The tags that Image Builder applies to the Image Builder image resource that this pipeline's scheduled executions create. These tags don't apply to the output AMI. Builds that you start manually use the tags from the [StartImagePipelineExecution](https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_StartImagePipelineExecution.html) request instead.
   *
   * @public
   */
  imageTags?: Record<string, string> | undefined;

  /**
   * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions.
   *
   * @public
   */
  executionRole?: string | undefined;

  /**
   * Contains the workflows that run for the image pipeline.
   *
   * @public
   */
  workflows?: WorkflowConfiguration[] | undefined;

  /**
   * The CloudWatch Logs configuration for the pipeline: the log group for image build logs and the log group for pipeline execution logs.
   *
   * @public
   */
  loggingConfiguration?: PipelineLoggingConfiguration | undefined;

  /**
   * Image Builder tracks the number of consecutive failures for scheduled pipeline executions and takes one of the following actions each time it runs on a schedule:
   *
   * - If the pipeline execution is successful, the number of consecutive failures resets to zero.
   * - If the pipeline execution fails, Image Builder increments the number of consecutive failures. If the failure count reaches the limit defined in the AutoDisablePolicy, Image Builder disables the pipeline.
   *
   * The consecutive failure count is also reset to zero under the following conditions:
   *
   * - The pipeline runs manually and succeeds.
   * - The pipeline configuration is updated.
   *
   * If the pipeline runs manually and fails, the count remains the same. The next scheduled run continues to increment where it left off before.
   *
   * @public
   */
  consecutiveFailures?: number | undefined;
}

/**
 * @public
 */
export interface GetImagePipelineResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The image pipeline object.
   *
   * @public
   */
  imagePipeline?: ImagePipeline | undefined;
}

/**
 * @public
 */
export interface GetImagePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the image whose policy you want to retrieve.
   *
   * @public
   */
  imageArn: string | undefined;
}

/**
 * @public
 */
export interface GetImagePolicyResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The resource policy for the image, as a JSON policy document. If the image has no policy applied, the response contains an empty JSON object (`\{\}`).
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetImageRecipeRequest {
  /**
   * The Amazon Resource Name (ARN) of the image recipe that you want to retrieve. You can use the `x` wildcard in trailing version positions to retrieve the latest matching version, for example `x.x.x` or `1.x.x`.
   *
   * @public
   */
  imageRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface GetImageRecipeResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The image recipe object.
   *
   * @public
   */
  imageRecipe?: ImageRecipe | undefined;

  /**
   * A set of wildcard version ARNs that always reference the latest version of the resource. ARNs are included for the latest version overall, and for the latest versions within the same major, minor, and patch levels.
   *
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * @public
 */
export interface GetImageRecipePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the image recipe whose policy you want to retrieve.
   *
   * @public
   */
  imageRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface GetImageRecipePolicyResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The resource policy for the image recipe, as a JSON policy document. If no policy has been applied, the response contains an empty JSON object (`\{\}`).
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * GetInfrastructureConfiguration request object.
 *
 * @public
 */
export interface GetInfrastructureConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration that you want to retrieve.
   *
   * @public
   */
  infrastructureConfigurationArn: string | undefined;
}

/**
 * GetInfrastructureConfiguration response object.
 *
 * @public
 */
export interface GetInfrastructureConfigurationResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The infrastructure configuration object.
   *
   * @public
   */
  infrastructureConfiguration?: InfrastructureConfiguration | undefined;
}

/**
 * @public
 */
export interface GetLifecycleExecutionRequest {
  /**
   * The unique identifier for a runtime instance of the lifecycle policy.
   *
   * @public
   */
  lifecycleExecutionId: string | undefined;
}

/**
 * Contains an indicator that shows whether the lifecycle execution identified any resources to take lifecycle actions on.
 *
 * @public
 */
export interface LifecycleExecutionResourcesImpactedSummary {
  /**
   * Indicates whether the lifecycle execution identified any resources to take lifecycle actions on.
   *
   * @public
   */
  hasImpactedResources?: boolean | undefined;
}

/**
 * The current state of the runtime instance of the lifecycle policy.
 *
 * @public
 */
export interface LifecycleExecutionState {
  /**
   * The runtime status of the lifecycle execution.
   *
   * @public
   */
  status?: LifecycleExecutionStatus | undefined;

  /**
   * The reason for the current status.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Contains metadata from a runtime instance of a lifecycle policy.
 *
 * @public
 */
export interface LifecycleExecution {
  /**
   * Identifies the lifecycle policy runtime instance.
   *
   * @public
   */
  lifecycleExecutionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the lifecycle policy that ran.
   *
   * @public
   */
  lifecyclePolicyArn?: string | undefined;

  /**
   * A summary flag that indicates whether the lifecycle execution identified any resources to take lifecycle actions on.
   *
   * @public
   */
  resourcesImpactedSummary?: LifecycleExecutionResourcesImpactedSummary | undefined;

  /**
   * Runtime state that reports whether the lifecycle execution is in progress, succeeded, or failed.
   *
   * @public
   */
  state?: LifecycleExecutionState | undefined;

  /**
   * The timestamp when the lifecycle runtime instance started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The timestamp when the lifecycle runtime instance completed.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetLifecycleExecutionResponse {
  /**
   * Runtime details for the specified runtime instance of the lifecycle policy.
   *
   * @public
   */
  lifecycleExecution?: LifecycleExecution | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyRequest {
  /**
   * Specifies the Amazon Resource Name (ARN) of the image lifecycle policy resource to get.
   *
   * @public
   */
  lifecyclePolicyArn: string | undefined;
}

/**
 * Defines a lifecycle policy resource: its identity, status, execution role, resource type, rules, resource selection, timestamps, and tags.
 *
 * @public
 */
export interface LifecyclePolicy {
  /**
   * The Amazon Resource Name (ARN) of the lifecycle policy resource.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the lifecycle policy.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Optional description for the lifecycle policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Indicates whether the lifecycle policy resource is enabled. Only enabled policies run on their schedule. Disabling or deleting a policy removes its schedule and cancels any in-flight lifecycle execution.
   *
   * @public
   */
  status?: LifecyclePolicyStatus | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the IAM role that Image Builder uses to run the lifecycle policy. This is a custom role that you create.
   *
   * @public
   */
  executionRole?: string | undefined;

  /**
   * The type of resources the lifecycle policy targets.
   *
   * @public
   */
  resourceType?: LifecyclePolicyResourceType | undefined;

  /**
   * The list of rules for the lifecycle policy. Each rule pairs an action with a filter and optional exclusion rules. A policy can contain at most one rule per action type.
   *
   * @public
   */
  policyDetails?: LifecyclePolicyDetail[] | undefined;

  /**
   * Resource selection criteria used to run the lifecycle policy.
   *
   * @public
   */
  resourceSelection?: LifecyclePolicyResourceSelection | undefined;

  /**
   * The timestamp when Image Builder created the lifecycle policy resource.
   *
   * @public
   */
  dateCreated?: Date | undefined;

  /**
   * The timestamp when Image Builder updated the lifecycle policy resource.
   *
   * @public
   */
  dateUpdated?: Date | undefined;

  /**
   * The timestamp for the last time Image Builder ran the lifecycle policy.
   *
   * @public
   */
  dateLastRun?: Date | undefined;

  /**
   * To help manage your lifecycle policy resources, you can assign your own metadata to each resource in the form of tags. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyResponse {
  /**
   * The details of the lifecycle policy that the request retrieved.
   *
   * @public
   */
  lifecyclePolicy?: LifecyclePolicy | undefined;
}

/**
 * @public
 */
export interface GetMarketplaceResourceRequest {
  /**
   * Specifies which type of Amazon Web Services Marketplace resource Image Builder retrieves.
   *
   * @public
   */
  resourceType: MarketplaceResourceType | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an Amazon Web Services Marketplace resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The Amazon S3 location of the component artifact to retrieve, in `s3://bucket/key` form.
   *
   * @public
   */
  resourceLocation?: string | undefined;
}

/**
 * @public
 */
export interface GetMarketplaceResourceResponse {
  /**
   * The Amazon Resource Name (ARN) for the Amazon Web Services Marketplace resource that was requested.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * A time-limited presigned URL for downloading the component artifact from Amazon S3.
   *
   * @public
   */
  url?: string | undefined;

  /**
   * Returns obfuscated data that contains the YAML content of the component.
   *
   * @public
   */
  data?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRequest {
  /**
   * The Amazon Resource Name (ARN) of the workflow resource that you want to get. You can specify a build version ARN, or a version ARN with or without wildcards (`x`) in its version segments. Image Builder resolves version and wildcard ARNs to the most recent matching build version.
   *
   * @public
   */
  workflowBuildVersionArn: string | undefined;
}

/**
 * Defines a parameter that's used to provide configuration details for the workflow.
 *
 * @public
 */
export interface WorkflowParameterDetail {
  /**
   * The name of this input parameter.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of input this parameter provides. Supported values are `string`, `integer`, `boolean`, and `stringList`.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The default value of this parameter if no input is provided.
   *
   * @public
   */
  defaultValue?: string[] | undefined;

  /**
   * Describes this parameter.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * A group of fields that describe the current status of the workflow.
 *
 * @public
 */
export interface WorkflowState {
  /**
   * The current state of the workflow.
   *
   * @public
   */
  status?: WorkflowStatus | undefined;

  /**
   * Describes how or why the workflow changed state.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Defines a process that Image Builder runs during the build, test, or distribution stage of the image creation process.
 *
 * @public
 */
export interface Workflow {
  /**
   * The Amazon Resource Name (ARN) of the workflow resource.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the workflow resource.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The workflow resource version. Workflow resources are immutable. To make a change, you can clone a workflow or create a new version.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The description of the workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Describes what change has been made in this version of the workflow, or what makes this version different from other versions of the workflow.
   *
   * @public
   */
  changeDescription?: string | undefined;

  /**
   * The image creation stage that the workflow applies to.
   *
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * Describes the current status of the workflow and the reason for that status.
   *
   * @public
   */
  state?: WorkflowState | undefined;

  /**
   * The owner of the workflow resource.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * Contains the YAML document content for the workflow.
   *
   * @public
   */
  data?: string | undefined;

  /**
   * The KMS key identifier used to encrypt the workflow resource. This can be either the Key ARN or the Alias ARN. For more information, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The timestamp when Image Builder created the workflow resource.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * The tags that apply to the workflow resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * An array of input parameters that the image workflow uses to control actions or configure settings.
   *
   * @public
   */
  parameters?: WorkflowParameterDetail[] | undefined;
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * The workflow resource specified in the request.
   *
   * @public
   */
  workflow?: Workflow | undefined;

  /**
   * A set of wildcard version ARNs that always reference the latest version of the resource. ARNs are included for the latest version overall, and for the latest versions within the same major, minor, and patch levels.
   *
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * @public
 */
export interface GetWorkflowExecutionRequest {
  /**
   * Use the unique identifier for a runtime instance of the workflow to get runtime details.
   *
   * @public
   */
  workflowExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowExecutionResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the build version for the Image Builder workflow resource that defines the specified runtime instance of the workflow.
   *
   * @public
   */
  workflowBuildVersionArn?: string | undefined;

  /**
   * The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow.
   *
   * @public
   */
  workflowExecutionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image build version that owns the specified runtime instance of the workflow.
   *
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * The type of workflow that Image Builder ran for the specified runtime instance of the workflow.
   *
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * The current runtime status for the specified runtime instance of the workflow. `COMPLETED`, `FAILED`, `ROLLBACK_COMPLETED`, `CANCELLED`, and `SKIPPED` are terminal states.
   *
   * @public
   */
  status?: WorkflowExecutionStatus | undefined;

  /**
   * The output message from the specified runtime instance of the workflow, if applicable.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The total number of steps that the workflow document defines for this runtime instance of the workflow. Image Builder sets this count before any steps run. The sum of succeeded, skipped, and failed steps only reaches this total if every step finishes in one of those states.
   *
   * @public
   */
  totalStepCount?: number | undefined;

  /**
   * A runtime count for the number of steps that ran successfully in the specified runtime instance of the workflow.
   *
   * @public
   */
  totalStepsSucceeded?: number | undefined;

  /**
   * A runtime count for the number of steps that failed in the specified runtime instance of the workflow.
   *
   * @public
   */
  totalStepsFailed?: number | undefined;

  /**
   * A runtime count for the number of steps that were skipped in the specified runtime instance of the workflow.
   *
   * @public
   */
  totalStepsSkipped?: number | undefined;

  /**
   * The timestamp when the specified runtime instance of the workflow started.
   *
   * @public
   */
  startTime?: string | undefined;

  /**
   * The timestamp when the specified runtime instance of the workflow finished.
   *
   * @public
   */
  endTime?: string | undefined;

  /**
   * The name of the parallel group that this runtime instance of the workflow ran in, if configured. Parallel groups apply only to test workflows.
   *
   * @public
   */
  parallelGroup?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowStepExecutionRequest {
  /**
   * The unique identifier for the runtime instance of the workflow step that you want to get runtime details for. To get the identifiers for the steps that ran in a workflow, call ListWorkflowStepExecutions.
   *
   * @public
   */
  stepExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowStepExecutionResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The unique identifier for the runtime instance of the workflow step that you specified in the request.
   *
   * @public
   */
  stepExecutionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the build version for the Image Builder workflow resource that defines this workflow step.
   *
   * @public
   */
  workflowBuildVersionArn?: string | undefined;

  /**
   * The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow.
   *
   * @public
   */
  workflowExecutionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image build version that owns the specified runtime instance of the workflow step.
   *
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * The name of the specified runtime instance of the workflow step.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Describes the specified workflow step.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the action that the specified step performs.
   *
   * @public
   */
  action?: string | undefined;

  /**
   * The current status for the specified runtime instance of the workflow step.
   *
   * @public
   */
  status?: WorkflowStepExecutionStatus | undefined;

  /**
   * Reports on the rollback status of the specified runtime instance of the workflow step, if applicable. Rollback runs when the workflow execution fails, and undoes the work that completed steps performed.
   *
   * @public
   */
  rollbackStatus?: WorkflowStepExecutionRollbackStatus | undefined;

  /**
   * The output message from the specified runtime instance of the workflow step, if applicable.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * Input parameters that Image Builder provided for the specified runtime instance of the workflow step, as a JSON-encoded string.
   *
   * @public
   */
  inputs?: string | undefined;

  /**
   * The output values that the specified runtime instance of the workflow step produced, as a JSON-encoded string. For example, a step that launches an instance outputs the instance ID. If the step failed, this field contains the error message.
   *
   * @public
   */
  outputs?: string | undefined;

  /**
   * The timestamp when the specified runtime instance of the workflow step started.
   *
   * @public
   */
  startTime?: string | undefined;

  /**
   * The timestamp when the specified runtime instance of the workflow step finished.
   *
   * @public
   */
  endTime?: string | undefined;

  /**
   * The action that the workflow takes if this step fails, as configured in the workflow document. `Abort` fails the workflow and rolls back completed steps. `Continue` proceeds to the next step. If the step doesn't set a value, it defaults to `Abort`.
   *
   * @public
   */
  onFailure?: string | undefined;

  /**
   * The maximum duration in seconds for this step to complete its action. If the workflow document doesn't set a timeout for the step, Image Builder applies the default timeout for the step's action. This field returns that value.
   *
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * The current attempt number for the specified runtime instance of the workflow step. The first run is attempt one. The number increases by one for each retry.
   *
   * @public
   */
  attemptNumber?: number | undefined;

  /**
   * The maximum number of attempts allowed for the specified runtime instance of the workflow step, based on the retry configuration in the workflow document. If the step doesn't configure retries, the maximum is one attempt.
   *
   * @public
   */
  maxAttempts?: number | undefined;
}

/**
 * Contains vulnerability counts for a specific image.
 *
 * @public
 */
export interface ImageAggregation {
  /**
   * The Amazon Resource Name (ARN) that identifies the image for this aggregation.
   *
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * Counts by severity level for medium severity and higher level findings, plus a total for all of the findings for the specified image.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;
}

/**
 * @public
 */
export interface ImportComponentRequest {
  /**
   * The name of the component. Image Builder generates the component ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name. If a component with the same name and semantic version already exists in your account in the same Amazon Web Services Region, the request creates a new build version for it. If the content is also identical to the latest build version, the request fails because the component already exists.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The semantic version of the component. This version follows the semantic version syntax.
   *
   * > **Note:**
   * >
   * > The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.
   * >
   * > **Assignment:** For the first three nodes, you can assign any positive integer value, including zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the build number to the fourth node.
   * >
   * > **Patterns:** You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.
   *
   * @public
   */
  semanticVersion: string | undefined;

  /**
   * The description of the component. Describes the contents of the component.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The change description of the component. This description indicates the change that has been made in this version, or what makes this version different from other versions of the component.
   *
   * @public
   */
  changeDescription?: string | undefined;

  /**
   * The type of the component denotes whether the component is used to build the image, or only to test it.
   *
   * @public
   */
  type: ComponentType | undefined;

  /**
   * The format of the resource that you want to import as a component.
   *
   * @public
   */
  format: ComponentFormat | undefined;

  /**
   * The platform of the component.
   *
   * @public
   */
  platform: Platform | undefined;

  /**
   * The data of the component. For the `SHELL` format, this is the plain script content. You must specify exactly one of the `data` or `uri` properties. For scripts that exceed the inline length constraint, use the `uri` property.
   *
   * @public
   */
  data?: string | undefined;

  /**
   * The uri of the component. Must be an Amazon S3 URL and you must have permission to access the Amazon S3 bucket. If you use Amazon S3, you can specify component content up to your service quota. Either `data` or `uri` can be used to specify the data within the component.
   *
   * @public
   */
  uri?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key that is used to encrypt this component. This can be either the Key ARN or the Alias ARN. For more information, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN) in the *Key Management Service Developer Guide*. If you don't specify a key, Image Builder encrypts the component data with a KMS key that Image Builder owns.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The tags of the component.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportComponentResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the imported component.
   *
   * @public
   */
  componentBuildVersionArn?: string | undefined;
}

/**
 * Controls Secure Boot and UEFI data settings for the resulting image during ISO imports. For more information, see [UEFI Secure Boot for Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html) in the **Amazon EC2 User Guide** .
 *
 * @public
 */
export interface RegisterImageOptions {
  /**
   * Specifies whether Secure Boot is enabled for the output AMI. The default value is `true`. To disable Secure Boot for custom unsigned drivers, set this value to `false`.
   *
   * @public
   */
  secureBootEnabled?: boolean | undefined;

  /**
   * A Base64-encoded representation of the non-volatile UEFI variable store. You can specify this parameter only when `secureBootEnabled` is `true` or unspecified. You can inspect and modify the UEFI data by using the [python-uefivars tool on GitHub](https://github.com/awslabs/python-uefivars).
   *
   * For more information, see [UEFI variables for Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-variables.html).
   *
   * @public
   */
  uefiData?: string | undefined;
}

/**
 * Windows-specific configuration settings for an ISO import, including the edition to install from a multi-edition Windows ISO file.
 *
 * @public
 */
export interface WindowsConfiguration {
  /**
   * The 1-based index that specifies which Windows edition to install from a multi-edition Windows ISO file. A Windows ISO can contain a `.wim` file with multiple image indexes, each representing a different edition.
   *
   * @public
   */
  imageIndex: number | undefined;
}

/**
 * @public
 */
export interface ImportDiskImageRequest {
  /**
   * The name of the image resource that's created from the import. Image Builder generates the image ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name. If an image with the same name and semantic version already exists in your account in the same Amazon Web Services Region, the import creates a new build version for it.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The semantic version to attach to the image that's created during the import process. This version follows the semantic version syntax.
   *
   * @public
   */
  semanticVersion: string | undefined;

  /**
   * The description for your disk image import.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The operating system platform for the imported image. Allowed values include the following: `Windows`.
   *
   * @public
   */
  platform: string | undefined;

  /**
   * The operating system version for the imported image. The only supported value is `Microsoft Windows 11`.
   *
   * @public
   */
  osVersion: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions to import an image from a Microsoft ISO file. If you don't provide a role, Image Builder uses the Image Builder service-linked role in your account, and creates it if it doesn't exist.
   *
   * @public
   */
  executionRole?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration resource that's used for launching the EC2 instance on which the ISO image is built.
   *
   * @public
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * The `uri` of the ISO disk file that's stored in Amazon S3, in `s3://bucket/key` format. The key must end with the `.iso`, `.ISO`, or `.Iso` extension, and the bucket must be owned by the account that makes the request.
   *
   * @public
   */
  uri: string | undefined;

  /**
   * The CloudWatch Logs log group where Image Builder sends the import logs. If you specify a log group name outside of the `/aws/imagebuilder/` namespace, you must also provide an `executionRole` that has permission to write to that log group.
   *
   * @public
   */
  loggingConfiguration?: ImageLoggingConfiguration | undefined;

  /**
   * Tags that are attached to image resources created from the import.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Configures Secure Boot and UEFI settings for the imported image.
   *
   * @public
   */
  registerImageOptions?: RegisterImageOptions | undefined;

  /**
   * Specifies Windows settings for ISO imports.
   *
   * @public
   */
  windowsConfiguration?: WindowsConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportDiskImageResponse {
  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Image Builder image resource that this request created. The AMI doesn't exist yet when the response returns. The import runs asynchronously, and the output AMI appears in the image's output resources when the import completes.
   *
   * @public
   */
  imageBuildVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface ImportVmImageRequest {
  /**
   * The name of the base image that is created by the import process. Image Builder generates the image ARN from a normalized form of the name, so names that differ only in case, spaces, or underscores count as the same name. If an image with the same name and semantic version already exists in your account in the same Amazon Web Services Region, the import creates a new build version for it.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The semantic version to attach to the base image that was created during the import process. This version follows the semantic version syntax.
   *
   * > **Note:**
   * >
   * > The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.
   * >
   * > **Assignment:** For the first three nodes, you can assign any positive integer value, including zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the build number to the fourth node.
   * >
   * > **Patterns:** You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.
   *
   * @public
   */
  semanticVersion: string | undefined;

  /**
   * The description for the base image that is created by the import process.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The operating system platform for the imported VM.
   *
   * @public
   */
  platform: Platform | undefined;

  /**
   * The operating system version for the imported VM.
   *
   * @public
   */
  osVersion?: string | undefined;

  /**
   * The `importTaskId` (API) or `ImportTaskId` (CLI) from the Amazon EC2 VM import process. The import task doesn't need to be complete when you call ImportVmImage - Image Builder monitors the task and finishes creating the image when the task completes.
   *
   * @public
   */
  vmImportTaskId: string | undefined;

  /**
   * The CloudWatch Logs log group where Image Builder sends the import logs. For ImportVmImage, the log group name must be within the `/aws/imagebuilder/` namespace.
   *
   * @public
   */
  loggingConfiguration?: ImageLoggingConfiguration | undefined;

  /**
   * Tags that are attached to the import resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportVmImageResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Image Builder image resource that this request created. Image Builder records the AMI from the VM import task in the image's output resources after the task completes.
   *
   * @public
   */
  imageArn?: string | undefined;

  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentBuildVersionsRequest {
  /**
   * The component version ARN whose build versions you want to list. The ARN must specify an exact version, without a build number suffix. If you don't specify an ARN, Image Builder returns build versions for the components that your account owns.
   *
   * @public
   */
  componentVersionArn?: string | undefined;

  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentBuildVersionsResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The list of component summaries. Each summary represents one build version of the specified component version, or of the components that your account owns if you didn't specify an ARN. Deprecated build versions aren't included.
   *
   * @public
   */
  componentSummaryList?: ComponentSummary[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsRequest {
  /**
   * Filters results based on the type of owner for the component. By default, this request returns a list of components that your account owns. To see results for other types of owners, you can specify components that Amazon manages, components from the Amazon Web Services Marketplace, third party components, or components that other accounts have shared with you.
   *
   * @public
   */
  owner?: Ownership | undefined;

  /**
   * Use the following filters to streamline results:
   *
   * - `description`
   * - `name`
   * - `platform`
   * - `productCodes`
   * - `status`
   * - `supportedOsVersion`
   * - `type`
   * - `version`
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * Specifies whether to return one entry per component name, with all versions of each component aggregated. Defaults to `false`, which returns one entry per component version. You can't combine this option with the `version` filter.
   *
   * @public
   */
  byName?: boolean | undefined;

  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The list of component semantic versions.
   *
   * > **Note:** The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.
   *
   * @public
   */
  componentVersionList?: ComponentVersion[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerRecipesRequest {
  /**
   * Returns container recipes belonging to the specified owner, that have been shared with you. You can omit this field to return container recipes belonging to your account. For container recipes, the valid owner values are `Self`, `Shared`, and `Amazon`.
   *
   * @public
   */
  owner?: Ownership | undefined;

  /**
   * Use the following filters to streamline results:
   *
   * - `containerType`
   * - `name`
   * - `parentImage`
   * - `platform`
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerRecipesResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The list of container recipes returned for the request.
   *
   * @public
   */
  containerRecipeSummaryList?: ContainerRecipeSummary[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionConfigurationsRequest {
  /**
   * You can filter on `name` to streamline results.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionConfigurationsResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The list of distributions.
   *
   * @public
   */
  distributionConfigurationSummaryList?: DistributionConfigurationSummary[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImageBuildVersionsRequest {
  /**
   * The Amazon Resource Name (ARN) of the image version whose build versions you want to retrieve. The ARN must specify an exact version (`<major>.<minor>.<patch>`) - wildcards aren't allowed. This parameter is optional. If you don't specify it, Image Builder returns build versions for all of the images in your account.
   *
   * @public
   */
  imageVersionArn?: string | undefined;

  /**
   * Use the following filters to streamline results:
   *
   * - `name`
   * - `osVersion`
   * - `platform`
   * - `type`
   * - `version`
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An image summary.
 *
 * @public
 */
export interface ImageSummary {
  /**
   * The Amazon Resource Name (ARN) of the image.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the image.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specifies whether this image produces an AMI or a container image.
   *
   * @public
   */
  type?: ImageType | undefined;

  /**
   * The version of the image.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The image operating system platform, such as Linux or Windows.
   *
   * @public
   */
  platform?: Platform | undefined;

  /**
   * The operating system version of the instances that launch from this image. For example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.
   *
   * @public
   */
  osVersion?: string | undefined;

  /**
   * The state of the image.
   *
   * @public
   */
  state?: ImageState | undefined;

  /**
   * The owner of the image.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * The date on which Image Builder created this image.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * The output resources that Image Builder produced when it created this image.
   *
   * @public
   */
  outputResources?: OutputResources | undefined;

  /**
   * The tags that apply to this image.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Indicates the type of build that created this image. The build can be initiated in the following ways:
   *
   * - **USER_INITIATED** – A manual pipeline build request.
   * - **SCHEDULED** – A pipeline build initiated by a cron expression in the Image Builder pipeline, or from EventBridge.
   * - **IMPORT** – A VM import created the image to use as the base image for the recipe.
   * - **IMPORT_ISO** – An ISO disk import created the image.
   *
   * @public
   */
  buildType?: BuildType | undefined;

  /**
   * The origin of the base image that Image Builder used to build this image.
   *
   * @public
   */
  imageSource?: ImageSource | undefined;

  /**
   * The time when deprecation occurs for an image resource. This can be a past or future date.
   *
   * @public
   */
  deprecationTime?: Date | undefined;

  /**
   * Identifies the last runtime instance of the lifecycle policy to take action on the image.
   *
   * @public
   */
  lifecycleExecutionId?: string | undefined;

  /**
   * The logging configuration that's defined for the image.
   *
   * @public
   */
  loggingConfiguration?: ImageLoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface ListImageBuildVersionsResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The list of image build versions.
   *
   * @public
   */
  imageSummaryList?: ImageSummary[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImagePackagesRequest {
  /**
   * The Amazon Resource Name (ARN) of the image build version whose packages you want to list. The value must be a full build version ARN.
   *
   * @public
   */
  imageBuildVersionArn: string | undefined;

  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A software package that's installed on an image, as detected by Amazon Web Services Systems Manager Inventory at build time. The list includes packages that shipped with the base image.
 *
 * @public
 */
export interface ImagePackage {
  /**
   * The name of the package that's reported to the operating system package manager.
   *
   * @public
   */
  packageName?: string | undefined;

  /**
   * The version of the package that's reported to the operating system package manager.
   *
   * @public
   */
  packageVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListImagePackagesResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The list of Image Packages returned in the response.
   *
   * @public
   */
  imagePackageList?: ImagePackage[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImagePipelineImagesRequest {
  /**
   * The Amazon Resource Name (ARN) of the image pipeline whose images you want to view.
   *
   * @public
   */
  imagePipelineArn: string | undefined;

  /**
   * Use the following filters to streamline results:
   *
   * - `name`
   * - `version`
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImagePipelineImagesResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The list of images built by this pipeline.
   *
   * @public
   */
  imageSummaryList?: ImageSummary[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImagePipelinesRequest {
  /**
   * Use the following filters to streamline results:
   *
   * - `description`
   * - `distributionConfigurationArn`
   * - `imageRecipeArn`
   * - `infrastructureConfigurationArn`
   * - `name`
   * - `status`
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImagePipelinesResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The list of image pipelines.
   *
   * @public
   */
  imagePipelineList?: ImagePipeline[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImageRecipesRequest {
  /**
   * You can specify the recipe owner to filter results by that owner. By default, this request will only show image recipes owned by your account. To filter by a different owner, specify one of the `Valid Values` that are listed for this parameter.
   *
   * @public
   */
  owner?: Ownership | undefined;

  /**
   * Use the following filters to streamline results:
   *
   * - `name`
   * - `parentImage`
   * - `platform`
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A summary of an image recipe.
 *
 * @public
 */
export interface ImageRecipeSummary {
  /**
   * The Amazon Resource Name (ARN) of the image recipe.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the image recipe.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The platform of the image recipe.
   *
   * @public
   */
  platform?: Platform | undefined;

  /**
   * The owner of the image recipe.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * The base image of the image recipe.
   *
   * @public
   */
  parentImage?: string | undefined;

  /**
   * The date on which this image recipe was created.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * The tags of the image recipe.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListImageRecipesResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * A list of `ImageRecipeSummary` objects that contain identifying characteristics for the image recipe, such as the name, the Amazon Resource Name (ARN), and the date created, along with other key details.
   *
   * @public
   */
  imageRecipeSummaryList?: ImageRecipeSummary[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImagesRequest {
  /**
   * Filters the list to images owned by you, by Amazon, or shared with you by other accounts. By default, only your account's images are returned.
   *
   * @public
   */
  owner?: Ownership | undefined;

  /**
   * Use the following filters to streamline results:
   *
   * - `name`
   * - `osVersion`
   * - `platform`
   * - `type`
   * - `version`
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * Specifies whether to return one entry per image name, with all versions of each image aggregated. Defaults to `false`, which returns one entry per image version. You can't combine this option with the `version` filter.
   *
   * @public
   */
  byName?: boolean | undefined;

  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Specifies whether to include deprecated Amazon-managed images in the results. Deprecated images that you own are always returned. Defaults to `false`.
   *
   * @public
   */
  includeDeprecated?: boolean | undefined;
}

/**
 * The defining characteristics of a specific version of an Image Builder image.
 *
 * @public
 */
export interface ImageVersion {
  /**
   * The Amazon Resource Name (ARN) of a specific version of an Image Builder image.
   *
   * > **Note:**
   * >
   * > Semantic versioning is included in each object's Amazon Resource Name (ARN), at the level that applies to that object as follows:
   * >
   * > 1. Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are either left off entirely, or they are specified as wildcards, for example: x.x.x.
   * > 2. Version ARNs have only the first three nodes: <major>.<minor>.<patch>
   * > 3. Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of this specific version of an Image Builder image.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specifies whether this image produces an AMI or a container image.
   *
   * @public
   */
  type?: ImageType | undefined;

  /**
   * The semantic version of the image. This version follows the semantic version syntax.
   *
   * > **Note:**
   * >
   * > The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.
   * >
   * > **Assignment:** For the first three nodes, you can assign any positive integer value, including zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the build number to the fourth node.
   * >
   * > **Patterns:** You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.
   * >
   * > **Filtering:** You can use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The operating system platform of the image version, for example "Windows" or "Linux".
   *
   * @public
   */
  platform?: Platform | undefined;

  /**
   * The operating system version of the image. For example, Amazon Linux 2023 or Microsoft Windows Server 2022.
   *
   * @public
   */
  osVersion?: string | undefined;

  /**
   * The owner of the image version.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * The date on which this specific version of the Image Builder image was created.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * Indicates the type of build that created this image. The build can be initiated in the following ways:
   *
   * - **USER_INITIATED** – A manual pipeline build request.
   * - **SCHEDULED** – A pipeline build initiated by a cron expression in the Image Builder pipeline, or from EventBridge.
   * - **IMPORT** – A VM import created the image to use as the base image for the recipe.
   * - **IMPORT_ISO** – An ISO disk import created the image.
   *
   * @public
   */
  buildType?: BuildType | undefined;

  /**
   * The origin of the base image that Image Builder used to build this image.
   *
   * @public
   */
  imageSource?: ImageSource | undefined;
}

/**
 * @public
 */
export interface ListImagesResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The list of image semantic versions.
   *
   * > **Note:**
   * >
   * > The semantic version has four nodes: <major>.<minor>.<patch>/<build>. You can assign values for the first three, and can filter on all of them.
   * >
   * > **Filtering:** You can use wildcards (x) to specify the most recent versions or nodes when selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards.
   *
   * @public
   */
  imageVersionList?: ImageVersion[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImageScanFindingAggregationsRequest {
  /**
   * A filter name and value pair that determines the type of aggregation that Image Builder returns. Use one of the following filter names:
   *
   * - `imageBuildVersionArn`
   * - `imagePipelineArn`
   * - `vulnerabilityId`
   *
   * If you don't specify a filter, Image Builder returns an aggregation for your account.
   *
   * @public
   */
  filter?: Filter | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains vulnerability counts for a specific image pipeline.
 *
 * @public
 */
export interface ImagePipelineAggregation {
  /**
   * The Amazon Resource Name (ARN) that identifies the image pipeline for this aggregation.
   *
   * @public
   */
  imagePipelineArn?: string | undefined;

  /**
   * Counts by severity level for medium severity and higher level findings, plus a total for all of the findings for the specified image pipeline.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;
}

/**
 * Includes counts of image and pipeline resource findings by vulnerability.
 *
 * @public
 */
export interface VulnerabilityIdAggregation {
  /**
   * The vulnerability Id for this set of counts.
   *
   * @public
   */
  vulnerabilityId?: string | undefined;

  /**
   * Counts by severity level for medium severity and higher level findings, plus a total for all of the findings for the specified vulnerability.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;
}

/**
 * This returns exactly one type of aggregation, based on the filter that Image Builder applies in its API action.
 *
 * @public
 */
export interface ImageScanFindingAggregation {
  /**
   * Returns an object that contains severity counts based on an account ID.
   *
   * @public
   */
  accountAggregation?: AccountAggregation | undefined;

  /**
   * Returns an object that contains severity counts based on the Amazon Resource Name (ARN) for a specific image.
   *
   * @public
   */
  imageAggregation?: ImageAggregation | undefined;

  /**
   * Returns an object that contains severity counts based on an image pipeline ARN.
   *
   * @public
   */
  imagePipelineAggregation?: ImagePipelineAggregation | undefined;

  /**
   * Returns an object that contains severity counts based on vulnerability ID.
   *
   * @public
   */
  vulnerabilityIdAggregation?: VulnerabilityIdAggregation | undefined;
}

/**
 * @public
 */
export interface ListImageScanFindingAggregationsResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The aggregation type specifies what type of key is used to group the image scan findings. Image Builder returns results based on the request filter. If you didn't specify a filter in the request, the type defaults to `accountId`.
   *
   * **Aggregation types**
   *
   * - accountId
   * - imageBuildVersionArn
   * - imagePipelineArn
   * - vulnerabilityId
   *
   * Each aggregation includes counts by severity level for medium severity and higher level findings, plus a total for all of the findings for each key value.
   *
   * @public
   */
  aggregationType?: string | undefined;

  /**
   * An array of image scan finding aggregations that match the filter criteria.
   *
   * @public
   */
  responses?: ImageScanFindingAggregation[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A name value pair that Image Builder applies to streamline results from the vulnerability scan findings list action.
 *
 * @public
 */
export interface ImageScanFindingsFilter {
  /**
   * The name of the image scan finding filter. Filter names are case-sensitive. Valid filter names are:
   *
   * - `imageBuildVersionArn` – Filters findings by the image build version that was scanned.
   * - `imagePipelineArn` – Filters findings by the pipeline that created the scanned image.
   * - `vulnerabilityId` – Filters findings by vulnerability ID, for example a CVE ID.
   * - `severity` – Filters findings by severity level.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The filter values. Filter values are case-sensitive.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListImageScanFindingsRequest {
  /**
   * An array of name value pairs that you can use to filter your results. You can use the following filters to streamline results:
   *
   * - `imageBuildVersionArn` – Filters findings by the image build version that was scanned.
   * - `imagePipelineArn` – Filters findings by the pipeline that created the scanned image.
   * - `vulnerabilityId` – Filters findings by vulnerability ID, for example a CVE ID.
   * - `severity` – Filters findings by severity level.
   *
   * If you don't request a filter, then all findings in your account are listed.
   *
   * @public
   */
  filters?: ImageScanFindingsFilter[] | undefined;

  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about the factors that influenced the score that Amazon Inspector assigned for a finding.
 *
 * @public
 */
export interface InspectorScoreDetails {
  /**
   * The CVSS score that Amazon Inspector assigned to the finding after applying its adjustments. It includes the score source, CVSS version, scoring vector, and the adjustments applied.
   *
   * @public
   */
  adjustedCvss?: CvssScoreDetails | undefined;
}

/**
 * Information about a vulnerable package that Amazon Inspector identifies in a finding.
 *
 * @public
 */
export interface VulnerablePackage {
  /**
   * The name of the vulnerable package.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The version of the vulnerable package.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The source layer hash of the vulnerable package.
   *
   * @public
   */
  sourceLayerHash?: string | undefined;

  /**
   * The epoch of the vulnerable package.
   *
   * @public
   */
  epoch?: number | undefined;

  /**
   * The release of the vulnerable package.
   *
   * @public
   */
  release?: string | undefined;

  /**
   * The architecture of the vulnerable package.
   *
   * @public
   */
  arch?: string | undefined;

  /**
   * The package manager of the vulnerable package.
   *
   * @public
   */
  packageManager?: string | undefined;

  /**
   * The file path of the vulnerable package.
   *
   * @public
   */
  filePath?: string | undefined;

  /**
   * The version of the package that contains the vulnerability fix.
   *
   * @public
   */
  fixedInVersion?: string | undefined;

  /**
   * The code to run in your environment to update packages with a fix available.
   *
   * @public
   */
  remediation?: string | undefined;
}

/**
 * Information about package vulnerability findings.
 *
 * @public
 */
export interface PackageVulnerabilityDetails {
  /**
   * A unique identifier for this vulnerability.
   *
   * @public
   */
  vulnerabilityId: string | undefined;

  /**
   * The packages that this vulnerability impacts.
   *
   * @public
   */
  vulnerablePackages?: VulnerablePackage[] | undefined;

  /**
   * The source of the vulnerability information.
   *
   * @public
   */
  source?: string | undefined;

  /**
   * The CVSS scores for the vulnerability in this finding, as published by the vulnerability sources. Sources include NVD and the operating system vendor, and scores can span CVSS versions.
   *
   * @public
   */
  cvss?: CvssScore[] | undefined;

  /**
   * Vulnerabilities that are often related to the findings for the package.
   *
   * @public
   */
  relatedVulnerabilities?: string[] | undefined;

  /**
   * A link to the source of the vulnerability information.
   *
   * @public
   */
  sourceUrl?: string | undefined;

  /**
   * The severity that the vendor assigned to this vulnerability type.
   *
   * @public
   */
  vendorSeverity?: string | undefined;

  /**
   * The date and time when this vulnerability was first added to the vendor's database.
   *
   * @public
   */
  vendorCreatedAt?: Date | undefined;

  /**
   * The date and time when the vendor last updated this vulnerability in their database.
   *
   * @public
   */
  vendorUpdatedAt?: Date | undefined;

  /**
   * Links to web pages that contain details about the vulnerabilities that Amazon Inspector identified for the package.
   *
   * @public
   */
  referenceUrls?: string[] | undefined;
}

/**
 * Details about the recommended course of action to remediate the finding.
 *
 * @public
 */
export interface RemediationRecommendation {
  /**
   * The recommended course of action to remediate the finding.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * A link to more information about the recommended remediation for this vulnerability.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * Information about how to remediate a finding.
 *
 * @public
 */
export interface Remediation {
  /**
   * An object that contains information about the recommended course of action to remediate the finding.
   *
   * @public
   */
  recommendation?: RemediationRecommendation | undefined;
}

/**
 * Contains details about a vulnerability scan finding that Amazon Inspector generated for an image.
 *
 * @public
 */
export interface ImageScanFinding {
  /**
   * The Amazon Web Services account ID that's associated with the finding.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image build version that's associated with the finding.
   *
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image pipeline that's associated with the finding.
   *
   * @public
   */
  imagePipelineArn?: string | undefined;

  /**
   * The type of the finding. Image Builder looks for findings of the type `PACKAGE_VULNERABILITY` that apply to output images, and excludes other types.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The description of the finding.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The title of the finding.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * An object that contains the details about how to remediate the finding.
   *
   * @public
   */
  remediation?: Remediation | undefined;

  /**
   * The severity of the finding. For more information, see [Severity levels for Amazon Inspector findings](https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html) in the *Amazon Inspector User Guide*.
   *
   * @public
   */
  severity?: string | undefined;

  /**
   * The date and time when the finding was first observed.
   *
   * @public
   */
  firstObservedAt?: Date | undefined;

  /**
   * The timestamp when the finding was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The score that Amazon Inspector assigned for the finding.
   *
   * @public
   */
  inspectorScore?: number | undefined;

  /**
   * An object that contains details of the Amazon Inspector score.
   *
   * @public
   */
  inspectorScoreDetails?: InspectorScoreDetails | undefined;

  /**
   * An object that contains the details of a package vulnerability finding.
   *
   * @public
   */
  packageVulnerabilityDetails?: PackageVulnerabilityDetails | undefined;

  /**
   * Details about whether a fix is available for any of the packages that are identified in the finding through a version update. Valid values include:
   *
   * - `YES` – A fix is available for all of the packages identified in the finding.
   * - `NO` – No fix is available.
   * - `PARTIAL` – A fix is available for some, but not all, of the packages identified in the finding.
   *
   * @public
   */
  fixAvailable?: string | undefined;
}

/**
 * @public
 */
export interface ListImageScanFindingsResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The image scan findings for your account that meet your request filter criteria.
   *
   * @public
   */
  findings?: ImageScanFinding[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInfrastructureConfigurationsRequest {
  /**
   * You can filter on `name` to streamline results.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains a high-level summary of an infrastructure configuration, including the environment settings that Image Builder uses to build and test images.
 *
 * @public
 */
export interface InfrastructureConfigurationSummary {
  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the infrastructure configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the infrastructure configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date on which the infrastructure configuration was created.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * The date on which the infrastructure configuration was last updated.
   *
   * @public
   */
  dateUpdated?: string | undefined;

  /**
   * The metadata tags assigned to the Amazon EC2 build and test instances that Image Builder launches during image creation.
   *
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * The tags of the infrastructure configuration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The instance types of the infrastructure configuration.
   *
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * The instance profile of the infrastructure configuration.
   *
   * @public
   */
  instanceProfileName?: string | undefined;

  /**
   * The instance placement settings that define where the build and test instances that Image Builder launches during image creation run. These settings don't affect instances that you launch from the output image.
   *
   * @public
   */
  placement?: Placement | undefined;
}

/**
 * @public
 */
export interface ListInfrastructureConfigurationsResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The list of infrastructure configurations.
   *
   * @public
   */
  infrastructureConfigurationSummaryList?: InfrastructureConfigurationSummary[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLifecycleExecutionResourcesRequest {
  /**
   * The unique identifier for a runtime instance of the lifecycle policy.
   *
   * @public
   */
  lifecycleExecutionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an image build version to get the output resources for, such as AMIs or container images in Amazon ECR. You can get this value from the `resourceId` in the top-level response. If you leave this property empty, the response lists the Image Builder resources that the lifecycle execution identified for lifecycle actions. If the image build version that you specify in `parentResourceId` wasn't part of this lifecycle execution, the response contains an empty list.
   *
   * @public
   */
  parentResourceId?: string | undefined;

  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The lifecycle policy action that was identified for the impacted resource.
 *
 * @public
 */
export interface LifecycleExecutionResourceAction {
  /**
   * The name of the lifecycle action that was identified for the resource.
   *
   * @public
   */
  name?: LifecycleExecutionResourceActionName | undefined;

  /**
   * The reason why the lifecycle policy action is taken.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Contains the state of an impacted resource that the runtime instance of the lifecycle policy identified for action.
 *
 * @public
 */
export interface LifecycleExecutionResourceState {
  /**
   * The runtime status of the lifecycle action taken for the impacted resource.
   *
   * @public
   */
  status?: LifecycleExecutionResourceStatus | undefined;

  /**
   * Messaging that clarifies the reason for the assigned status.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Contains the state of an impacted snapshot resource that the runtime instance of the lifecycle policy identified for action.
 *
 * @public
 */
export interface LifecycleExecutionSnapshotResource {
  /**
   * Identifies the impacted snapshot resource.
   *
   * @public
   */
  snapshotId?: string | undefined;

  /**
   * The runtime status of the lifecycle action taken for the snapshot.
   *
   * @public
   */
  state?: LifecycleExecutionResourceState | undefined;
}

/**
 * Contains details for a resource that the runtime instance of the lifecycle policy identified for action.
 *
 * @public
 */
export interface LifecycleExecutionResource {
  /**
   * The account that owns the impacted resource.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * Identifies the impacted resource. The resource ID depends on the type of resource, as follows.
   *
   * - Image Builder image resources: Amazon Resource Name (ARN)
   * - Distributed AMIs: AMI ID
   * - Container images distributed to an ECR repository: image URI or SHA Digest
   *
   * @public
   */
  resourceId?: string | undefined;

  /**
   * The runtime state of the lifecycle action for this resource.
   *
   * @public
   */
  state?: LifecycleExecutionResourceState | undefined;

  /**
   * The action to take for the identified resource.
   *
   * @public
   */
  action?: LifecycleExecutionResourceAction | undefined;

  /**
   * The Amazon Web Services Region where the lifecycle execution resource is stored.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * A list of associated resource snapshots for the impacted resource if it’s an AMI.
   *
   * @public
   */
  snapshots?: LifecycleExecutionSnapshotResource[] | undefined;

  /**
   * For an impacted container image, this identifies a list of URIs for associated container images distributed to ECR repositories.
   *
   * @public
   */
  imageUris?: string[] | undefined;

  /**
   * The starting timestamp from the lifecycle action that was applied to the resource.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The ending timestamp from the lifecycle action that was applied to the resource.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListLifecycleExecutionResourcesResponse {
  /**
   * The unique identifier for the runtime instance of the lifecycle policy.
   *
   * @public
   */
  lifecycleExecutionId?: string | undefined;

  /**
   * The current state of the lifecycle runtime instance.
   *
   * @public
   */
  lifecycleExecutionState?: LifecycleExecutionState | undefined;

  /**
   * A list of resources that were identified for lifecycle actions.
   *
   * @public
   */
  resources?: LifecycleExecutionResource[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLifecycleExecutionsRequest {
  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource for which to list lifecycle executions. Specify a lifecycle policy ARN to list its executions, or an image build version ARN to list the executions that StartResourceStateUpdate started for that image. Other ARN types aren't valid for this request.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListLifecycleExecutionsResponse {
  /**
   * A list of lifecycle runtime instances for the specified resource.
   *
   * @public
   */
  lifecycleExecutions?: LifecycleExecution[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLifecyclePoliciesRequest {
  /**
   * Use the following filters to streamline results: `name`, `resourceType`, and `status`. Filter names are matched exactly as shown.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains a summary of lifecycle policy resources.
 *
 * @public
 */
export interface LifecyclePolicySummary {
  /**
   * The Amazon Resource Name (ARN) of the lifecycle policy.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the lifecycle policy.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Optional description for the lifecycle policy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The lifecycle policy resource status.
   *
   * @public
   */
  status?: LifecyclePolicyStatus | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the IAM role that Image Builder uses to run the lifecycle policy.
   *
   * @public
   */
  executionRole?: string | undefined;

  /**
   * The type of resources the lifecycle policy targets.
   *
   * @public
   */
  resourceType?: LifecyclePolicyResourceType | undefined;

  /**
   * The timestamp when Image Builder created the lifecycle policy resource.
   *
   * @public
   */
  dateCreated?: Date | undefined;

  /**
   * The timestamp when Image Builder updated the lifecycle policy resource.
   *
   * @public
   */
  dateUpdated?: Date | undefined;

  /**
   * The timestamp for the last time Image Builder ran the lifecycle policy.
   *
   * @public
   */
  dateLastRun?: Date | undefined;

  /**
   * To help manage your lifecycle policy resources, you can assign your own metadata to each resource in the form of tags. Each tag consists of a key and an optional value, both of which you define.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListLifecyclePoliciesResponse {
  /**
   * A list of lifecycle policies in your Amazon Web Services account that meet the criteria specified in the request.
   *
   * @public
   */
  lifecyclePolicySummaryList?: LifecyclePolicySummary[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags for the specified resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListWaitingWorkflowStepsRequest {
  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains runtime details for a workflow step that has paused at a `WaitForAction` step, and is waiting for you to send an action.
 *
 * @public
 */
export interface WorkflowStepExecution {
  /**
   * Uniquely identifies the workflow step that ran for the associated image build version.
   *
   * @public
   */
  stepExecutionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image build version that ran the workflow.
   *
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * Uniquely identifies the runtime instance of the workflow that contains the workflow step that ran for the associated image build version.
   *
   * @public
   */
  workflowExecutionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the workflow resource that ran.
   *
   * @public
   */
  workflowBuildVersionArn?: string | undefined;

  /**
   * The name of the workflow step.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The name of the step action.
   *
   * @public
   */
  action?: string | undefined;

  /**
   * The timestamp when the workflow step started.
   *
   * @public
   */
  startTime?: string | undefined;
}

/**
 * @public
 */
export interface ListWaitingWorkflowStepsResponse {
  /**
   * An array of the workflow steps that are waiting for action in your Amazon Web Services account. Each step is paused at a `WaitForAction` step, and remains in the list until you respond with SendWorkflowStepAction or the wait times out.
   *
   * @public
   */
  steps?: WorkflowStepExecution[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowBuildVersionsRequest {
  /**
   * The Amazon Resource Name (ARN) of the workflow resource for which to get a list of build versions. The version segments can contain wildcards (`x`) to match multiple versions of the workflow. If you don't specify an ARN, the response lists build versions for all of the workflows in your account.
   *
   * @public
   */
  workflowVersionArn?: string | undefined;

  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains metadata about the workflow resource.
 *
 * @public
 */
export interface WorkflowSummary {
  /**
   * The Amazon Resource Name (ARN) of the workflow resource.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the workflow.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The version of the workflow.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Describes the workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The change description for the current version of the workflow resource.
   *
   * @public
   */
  changeDescription?: string | undefined;

  /**
   * The image creation stage that this workflow applies to.
   *
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * The owner of the workflow resource.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * Describes the current state of the workflow resource.
   *
   * @public
   */
  state?: WorkflowState | undefined;

  /**
   * The original creation date of the workflow resource.
   *
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * Contains a list of tags that are defined for the workflow.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListWorkflowBuildVersionsResponse {
  /**
   * A list that contains metadata for the build versions of the workflow resource specified in the request.
   *
   * @public
   */
  workflowSummaryList?: WorkflowSummary[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowExecutionsRequest {
  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List all workflow runtime instances for the specified image build version resource ARN.
   *
   * @public
   */
  imageBuildVersionArn: string | undefined;
}

/**
 * Metadata that includes details and status from this runtime instance of the workflow.
 *
 * @public
 */
export interface WorkflowExecutionMetadata {
  /**
   * The Amazon Resource Name (ARN) of the workflow resource build version that ran.
   *
   * @public
   */
  workflowBuildVersionArn?: string | undefined;

  /**
   * Unique identifier that Image Builder assigns to keep track of runtime resources each time it runs a workflow.
   *
   * @public
   */
  workflowExecutionId?: string | undefined;

  /**
   * Indicates what type of workflow that Image Builder ran for this runtime instance of the workflow.
   *
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * The current runtime status for this workflow.
   *
   * @public
   */
  status?: WorkflowExecutionStatus | undefined;

  /**
   * The runtime output message from the workflow, if applicable.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The total number of steps that the workflow document defines for this runtime instance of the workflow. Image Builder sets this count before any steps run. The sum of succeeded, skipped, and failed steps only reaches this total if every step finishes in one of those states.
   *
   * @public
   */
  totalStepCount?: number | undefined;

  /**
   * A runtime count for the number of steps in the workflow that ran successfully.
   *
   * @public
   */
  totalStepsSucceeded?: number | undefined;

  /**
   * A runtime count for the number of steps in the workflow that failed.
   *
   * @public
   */
  totalStepsFailed?: number | undefined;

  /**
   * A runtime count for the number of steps in the workflow that were skipped.
   *
   * @public
   */
  totalStepsSkipped?: number | undefined;

  /**
   * The timestamp when the runtime instance of this workflow started.
   *
   * @public
   */
  startTime?: string | undefined;

  /**
   * The timestamp when this runtime instance of the workflow finished.
   *
   * @public
   */
  endTime?: string | undefined;

  /**
   * The name of the test group that included the test workflow resource at runtime.
   *
   * @public
   */
  parallelGroup?: string | undefined;

  /**
   * Indicates whether a retry of the image build superseded this runtime instance of the workflow. When you retry a failed image build, Image Builder sets this flag to `true` on the original workflow executions that the retry re-ran.
   *
   * @public
   */
  retried?: boolean | undefined;
}

/**
 * @public
 */
export interface ListWorkflowExecutionsResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * An array of runtime details that represents each time a workflow ran for the requested image build version. Image Builder retains workflow execution records for a limited time, so this array can be empty for older image build versions.
   *
   * @public
   */
  workflowExecutions?: WorkflowExecutionMetadata[] | undefined;

  /**
   * The resource Amazon Resource Name (ARN) of the image build version for which you requested a list of workflow runtime details.
   *
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * The failure reason for the image build version, if it's in a failed state. This comes from the image itself, not from an individual workflow, so it's available even when no workflow executions remain for the image.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * Filters results based on the workflow owner. By default, this request returns the workflows that your account owns (`Self`). Specify `Amazon` to list the workflows that Image Builder manages. Image Builder rejects the `Shared` and `ThirdParty` owner values for workflows, and `AWSMarketplace` returns no results.
   *
   * @public
   */
  owner?: Ownership | undefined;

  /**
   * Filters to narrow the list of workflows. You can filter on `name`, `version`, `description`, and `type`.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * Specifies whether to return one entry per workflow name, with all versions of each workflow aggregated. Defaults to `false`, which returns one entry per workflow version. You can't combine this option with the `version` filter.
   *
   * @public
   */
  byName?: boolean | undefined;

  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains details about this version of the workflow.
 *
 * @public
 */
export interface WorkflowVersion {
  /**
   * The Amazon Resource Name (ARN) of the workflow resource.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the workflow.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The semantic version of the workflow resource. The format includes three nodes: <major>.<minor>.<patch>.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Describes the workflow.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The image creation stage that this workflow applies to.
   *
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * The owner of the workflow resource.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * The timestamp when Image Builder created the workflow version.
   *
   * @public
   */
  dateCreated?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * A list of workflow versions that match the request criteria.
   *
   * @public
   */
  workflowVersionList?: WorkflowVersion[] | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowStepExecutionsRequest {
  /**
   * The maximum number of items to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to specify where to start paginating. Use the `nextToken` value from a previously truncated response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow.
   *
   * @public
   */
  workflowExecutionId: string | undefined;
}

/**
 * Runtime details and status for the workflow step.
 *
 * @public
 */
export interface WorkflowStepMetadata {
  /**
   * A unique identifier for the workflow step, assigned at runtime.
   *
   * @public
   */
  stepExecutionId?: string | undefined;

  /**
   * The name of the workflow step.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Description of the workflow step.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The step action name.
   *
   * @public
   */
  action?: string | undefined;

  /**
   * Runtime status for the workflow step.
   *
   * @public
   */
  status?: WorkflowStepExecutionStatus | undefined;

  /**
   * Reports on the rollback status of the step, if applicable.
   *
   * @public
   */
  rollbackStatus?: WorkflowStepExecutionRollbackStatus | undefined;

  /**
   * Detailed output message that the workflow step provides at runtime.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * Input parameters that Image Builder provides for the workflow step, as a JSON-encoded string.
   *
   * @public
   */
  inputs?: string | undefined;

  /**
   * The output values that the workflow step produced for this runtime instance of the workflow, as a JSON-encoded string. For example, a step that launches an instance outputs the instance ID. If the step failed, this field contains the error message.
   *
   * @public
   */
  outputs?: string | undefined;

  /**
   * The timestamp when the workflow step started.
   *
   * @public
   */
  startTime?: string | undefined;

  /**
   * The timestamp when the workflow step finished.
   *
   * @public
   */
  endTime?: string | undefined;

  /**
   * The current attempt number for the workflow step. The first run is attempt one. The number increases by one for each retry.
   *
   * @public
   */
  attemptNumber?: number | undefined;

  /**
   * The maximum number of attempts allowed for the workflow step, based on the retry configuration in the workflow document. If the step doesn't configure retries, the maximum is one attempt.
   *
   * @public
   */
  maxAttempts?: number | undefined;
}

/**
 * @public
 */
export interface ListWorkflowStepExecutionsResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * Contains an array of runtime details that represents each step in this runtime instance of the workflow.
   *
   * @public
   */
  steps?: WorkflowStepMetadata[] | undefined;

  /**
   * The build version Amazon Resource Name (ARN) for the Image Builder workflow resource that defines the steps for this runtime instance of the workflow.
   *
   * @public
   */
  workflowBuildVersionArn?: string | undefined;

  /**
   * The unique identifier that Image Builder assigned to keep track of runtime details when it ran the workflow.
   *
   * @public
   */
  workflowExecutionId?: string | undefined;

  /**
   * The image build version resource Amazon Resource Name (ARN) that's associated with the specified runtime instance of the workflow.
   *
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * The output message from the list action, if applicable.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The next token used for paginated responses. When this field isn't empty, there are additional elements that the service hasn't included in this request. Use this token with the next request to retrieve additional objects.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutComponentPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the component that this policy should be applied to.
   *
   * @public
   */
  componentArn: string | undefined;

  /**
   * The policy to apply.
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutComponentPolicyResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the component that this policy was applied to.
   *
   * @public
   */
  componentArn?: string | undefined;
}

/**
 * @public
 */
export interface PutContainerRecipePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the container recipe that this policy should be applied to.
   *
   * @public
   */
  containerRecipeArn: string | undefined;

  /**
   * The policy to apply to the container recipe.
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutContainerRecipePolicyResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container recipe that this policy was applied to.
   *
   * @public
   */
  containerRecipeArn?: string | undefined;
}

/**
 * @public
 */
export interface PutImagePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the image that this policy should be applied to.
   *
   * @public
   */
  imageArn: string | undefined;

  /**
   * The resource policy to apply to the image, as a JSON policy document. Image Builder validates the policy with Amazon Web Services RAM before applying it, and rejects invalid policies with `InvalidParameterValueException`.
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutImagePolicyResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image that this policy was applied to.
   *
   * @public
   */
  imageArn?: string | undefined;
}

/**
 * @public
 */
export interface PutImageRecipePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to.
   *
   * @public
   */
  imageRecipeArn: string | undefined;

  /**
   * The policy to apply.
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutImageRecipePolicyResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image recipe that this policy was applied to.
   *
   * @public
   */
  imageRecipeArn?: string | undefined;
}

/**
 * @public
 */
export interface RetryImageRequest {
  /**
   * The Amazon Resource Name (ARN) of the image build version that you want to retry. The image must be in the `FAILED` or `CANCELLED` state.
   *
   * @public
   */
  imageBuildVersionArn: string | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface RetryImageResponse {
  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ARN of the image to be retried.
   *
   * @public
   */
  imageBuildVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface SendWorkflowStepActionRequest {
  /**
   * Uniquely identifies the waiting workflow step that you send the action to. To get this identifier, call ListWaitingWorkflowSteps.
   *
   * @public
   */
  stepExecutionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image build version associated with the workflow step execution. This value must match the image that owns the waiting step. If the ARN does not correspond to the image running the workflow, then the request fails with a validation error.
   *
   * @public
   */
  imageBuildVersionArn: string | undefined;

  /**
   * The action to perform on the paused workflow step. `RESUME` completes the waiting step, and the workflow continues. `STOP` fails the step, and the step's `onFailure` setting determines whether the workflow continues or aborts. The workflow step must be in a waiting state to accept an action. The request fails if the step has already timed out or been actioned.
   *
   * @public
   */
  action: WorkflowStepActionType | undefined;

  /**
   * The reason for the action. This value is stored with the step execution record and is accessible in subsequent workflow steps via step output references.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface SendWorkflowStepActionResponse {
  /**
   * The unique identifier for the workflow step that received the action, as specified in the request.
   *
   * @public
   */
  stepExecutionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image build version that received the action request.
   *
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartImagePipelineExecutionRequest {
  /**
   * The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke.
   *
   * @public
   */
  imagePipelineArn: string | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags for Image Builder to apply to the image resource that's created when pipeline execution starts.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartImagePipelineExecutionResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image that the request created.
   *
   * @public
   */
  imageBuildVersionArn?: string | undefined;
}

/**
 * Additional rules to specify resources that should be exempt from ad-hoc lifecycle actions.
 *
 * @public
 */
export interface ResourceStateUpdateExclusionRules {
  /**
   * Defines criteria for AMIs that Image Builder should exclude from the resource state update.
   *
   * @public
   */
  amis?: LifecyclePolicyDetailExclusionRulesAmis | undefined;
}

/**
 * Specifies which underlying resources the resource state update applies to, in addition to the Image Builder image resource itself: distributed AMIs and their snapshots for AMI images, or distributed container images for container images.
 *
 * @public
 */
export interface ResourceStateUpdateIncludeResources {
  /**
   * Specifies whether the lifecycle action should apply to distributed AMIs.
   *
   * @public
   */
  amis?: boolean | undefined;

  /**
   * Specifies whether the lifecycle action should apply to snapshots associated with distributed AMIs.
   *
   * @public
   */
  snapshots?: boolean | undefined;

  /**
   * Specifies whether the lifecycle action should apply to distributed containers.
   *
   * @public
   */
  containers?: boolean | undefined;
}

/**
 * The state to apply to the image resource in a resource state update request.
 *
 * @public
 */
export interface ResourceState {
  /**
   * The status to which you want to move the image resource. Set the status to `AVAILABLE` to restore an image that's currently deprecated or disabled.
   *
   * @public
   */
  status?: ResourceStatus | undefined;
}

/**
 * @public
 */
export interface StartResourceStateUpdateRequest {
  /**
   * The Amazon Resource Name (ARN) of the image build version to update. The image must be in one of these terminal states: `AVAILABLE`, `DEPRECATED`, `DISABLED`, `FAILED`, or `CANCELLED`. Images with `FAILED` or `CANCELLED` status can transition only to `DELETED`.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Specifies the lifecycle action to take for this request. For AMI-based images, valid values are `AVAILABLE`, `DEPRECATED`, `DISABLED`, and `DELETED`. For container-based images, only `DELETED` is supported.
   *
   * @public
   */
  state: ResourceState | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the IAM role that's used to update image state. You must provide this property together with `includeResources`. Neither is valid without the other.
   *
   * @public
   */
  executionRole?: string | undefined;

  /**
   * Specifies which underlying resources to update, in addition to the Image Builder image resource itself. Snapshots and containers are only valid for the `DELETED` state. To set an image to `DELETED`, you must include its underlying resources. To delete only the Image Builder image record, use the DeleteImage operation instead.
   *
   * @public
   */
  includeResources?: ResourceStateUpdateIncludeResources | undefined;

  /**
   * Rules that Image Builder evaluates against each of the image's AMIs. Matching AMIs and their snapshots are skipped. Exclusion rules only take effect when the request includes AMIs. If the target state is `DELETED` and any resource was skipped, the Image Builder image resource itself is also retained. For the `DEPRECATED` and `DISABLED` target states, Image Builder updates the image resource's state regardless of exclusions.
   *
   * @public
   */
  exclusionRules?: ResourceStateUpdateExclusionRules | undefined;

  /**
   * The timestamp that indicates when resources are updated by a lifecycle action. This property is valid only when the target status is `DEPRECATED`, and the value must be a future time. If you don't specify a value, Image Builder begins the state update right away. For a scheduled deprecation, included AMIs get their EC2 deprecation time set immediately, and Image Builder schedules the image resource to transition to `DEPRECATED` at that time.
   *
   * @public
   */
  updateAt?: Date | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartResourceStateUpdateResponse {
  /**
   * Identifies the lifecycle execution that performs the resource state update. Image Builder only returns this field when it started a lifecycle execution for the update. Use it with GetLifecycleExecution to track progress.
   *
   * @public
   */
  lifecycleExecutionId?: string | undefined;

  /**
   * The requested Amazon Resource Name (ARN) of the Image Builder resource for the asynchronous update.
   *
   * @public
   */
  resourceArn?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to apply to the resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to untag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDistributionConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the distribution configuration that you want to update.
   *
   * @public
   */
  distributionConfigurationArn: string | undefined;

  /**
   * The description of the distribution configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The distribution settings for the configuration. Each entry defines how output images are distributed in one target Amazon Web Services Region. A Region can appear at most once in the list. This list replaces the configuration's existing distributions entirely.
   *
   * @public
   */
  distributions: Distribution[] | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionConfigurationResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the distribution configuration that was updated by this request.
   *
   * @public
   */
  distributionConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateImagePipelineRequest {
  /**
   * The Amazon Resource Name (ARN) of the image pipeline that you want to update.
   *
   * @public
   */
  imagePipelineArn: string | undefined;

  /**
   * The description of the image pipeline.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image recipe that configures images created by this image pipeline. You must specify either this property or `containerRecipeArn`, but not both.
   *
   * @public
   */
  imageRecipeArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the container recipe that is used to configure images created by this container pipeline. You must specify either this property or `imageRecipeArn`, but not both.
   *
   * @public
   */
  containerRecipeArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration that Image Builder uses to build images created by this image pipeline.
   *
   * @public
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the distribution configuration that Image Builder uses to configure and distribute images created by this image pipeline.
   *
   * @public
   */
  distributionConfigurationArn?: string | undefined;

  /**
   * Specifies the test settings that Image Builder applies to images that this pipeline creates. If you don't provide test settings, Image Builder stores a default configuration with image tests enabled.
   *
   * @public
   */
  imageTestsConfiguration?: ImageTestsConfiguration | undefined;

  /**
   * Specifies whether to collect additional information about the image being created, including the operating system (OS) version and package list. Defaults to `true`.
   *
   * @public
   */
  enhancedImageMetadataEnabled?: boolean | undefined;

  /**
   * The schedule of the image pipeline. Because the update replaces the entire configuration, omitting this property removes any existing schedule. The pipeline then runs only when you call StartImagePipelineExecution.
   *
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * The status of the image pipeline. Defaults to `ENABLED` when omitted. To keep a pipeline disabled, include this property set to `DISABLED` in your update request.
   *
   * @public
   */
  status?: PipelineStatus | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The updated settings that determine whether and how Amazon Inspector scans the images that this pipeline creates.
   *
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * The array of workflow configuration objects for builds that this pipeline starts. You must also specify `executionRole` when you provide workflows.
   *
   * @public
   */
  workflows?: WorkflowConfiguration[] | undefined;

  /**
   * Specifies the logging configuration for the image pipeline. Use this to define custom CloudWatch Logs log groups for your pipeline execution logs and image build logs. The service manages log groups with names starting with `/aws/imagebuilder/` using the service-linked role. For custom log group names outside of this prefix, you must also provide an `executionRole`.
   *
   * @public
   */
  loggingConfiguration?: PipelineLoggingConfiguration | undefined;

  /**
   * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to perform workflow actions. If you omit this property, the pipeline reverts to the Image Builder service-linked role.
   *
   * @public
   */
  executionRole?: string | undefined;

  /**
   * The tags that Image Builder applies to the Image Builder image resource that this pipeline's scheduled executions create. These tags don't apply to the output AMI. To tag output AMIs, use `amiTags` in the pipeline's distribution configuration.
   *
   * @public
   */
  imageTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateImagePipelineResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the image pipeline that was updated by this request.
   *
   * @public
   */
  imagePipelineArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateInfrastructureConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration that you want to update.
   *
   * @public
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * The description of the infrastructure configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. Image Builder picks one of these instance types based on availability. If you don't specify instance types, Image Builder selects compatible instance types automatically. If you specify a Dedicated Host, Image Builder uses only instance types that the host supports.
   *
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * The instance profile to associate with the instance used to customize your Amazon EC2 AMI. The instance profile must exist in your account.
   *
   * @public
   */
  instanceProfileName: string | undefined;

  /**
   * The security group IDs to associate with the instance used to customize your Amazon EC2 AMI.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The subnet ID in which to place the instance used to customize your Amazon EC2 AMI. If you specify `subnetId`, you must also specify one or more security group IDs in `securityGroupIds`. Otherwise, the request fails.
   *
   * @public
   */
  subnetId?: string | undefined;

  /**
   * The logging configuration of the infrastructure configuration. When you configure S3 logs, Image Builder writes logs from the build and test process to the specified bucket under the key prefix.
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * The key pair of the infrastructure configuration. You can use this to log on to and debug the instance used to create your image.
   *
   * @public
   */
  keyPair?: string | undefined;

  /**
   * Specifies whether to terminate the instance on failure. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. Defaults to `true`.
   *
   * @public
   */
  terminateInstanceOnFailure?: boolean | undefined;

  /**
   * Specifies whether Image Builder terminates build and test instances when image creation ends without a failure (success, cancellation, or expiration). Defaults to `true`.
   *
   * @public
   */
  terminateInstanceOnCompletion?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SNS topic to which Image Builder sends image build event notifications. Specify a standard topic. Image Builder doesn't support FIFO topics. Image Builder validates the topic when you create or update the configuration. You must have permission to publish to the topic.
   *
   * > **Note:** EC2 Image Builder can't send notifications to SNS topics that are encrypted using keys from other accounts. If your SNS topic is encrypted, the key must be owned by the same account that owns your Image Builder resources.
   *
   * @public
   */
  snsTopicArn?: string | undefined;

  /**
   * The metadata tags to assign to the Amazon EC2 instance that Image Builder launches during the build process. Tags are formatted as key value pairs. Tag keys can't begin with `aws:` or match one of the following reserved keys: `CreatedBy`, `Ec2ImageBuilderArn`, `Name`, or `Tags`.
   *
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * The instance metadata service (IMDS) settings that Image Builder applies to the EC2 build and test instances it launches during image creation. If you don't set these options, the EC2 launch defaults for the instance apply. For more information about instance metadata options, see one of the following links:
   *
   * - [Configure the instance metadata options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html) in the **Amazon EC2 User Guide** for Linux instances.
   * - [Configure the instance metadata options](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html) in the **Amazon EC2 Windows Guide** for Windows instances.
   *
   * @public
   */
  instanceMetadataOptions?: InstanceMetadataOptions | undefined;

  /**
   * The instance placement settings that define where the build and test instances that Image Builder launches during image creation run. These settings don't affect instances that you launch from the output image.
   *
   * @public
   */
  placement?: Placement | undefined;

  /**
   * The Amazon EC2 Auto Scaling group that Image Builder takes the build instance from, instead of launching a new instance. This applies only to the build phase.
   *
   * To use this feature, the execution role for the build must have permissions to describe the Auto Scaling group, tag the instance while it's still in the group, and detach it from the group. For more information, see [Build on an instance from an Auto Scaling group](https://docs.aws.amazon.com/imagebuilder/latest/userguide/infra-config-parent-instance.html) in the *EC2 Image Builder User Guide*.
   *
   * @public
   */
  parentInstance?: ParentInstanceConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateInfrastructureConfigurationResponse {
  /**
   * The request ID that uniquely identifies this request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * The client token that uniquely identifies the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the infrastructure configuration that was updated by this request.
   *
   * @public
   */
  infrastructureConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLifecyclePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the lifecycle policy resource.
   *
   * @public
   */
  lifecyclePolicyArn: string | undefined;

  /**
   * Optional description for the lifecycle policy. Because the update replaces the entire configuration, omitting this property removes any existing description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Indicates whether the lifecycle policy resource is enabled. Defaults to `ENABLED` when omitted, so updating a disabled policy without setting this property re-enables it.
   *
   * @public
   */
  status?: LifecyclePolicyStatus | undefined;

  /**
   * The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to run lifecycle actions.
   *
   * @public
   */
  executionRole: string | undefined;

  /**
   * The type of image resource that the lifecycle policy applies to. The value must match the policy's existing resource type. You can't change the resource type of an existing lifecycle policy.
   *
   * @public
   */
  resourceType: LifecyclePolicyResourceType | undefined;

  /**
   * The configuration details for a lifecycle policy resource.
   *
   * @public
   */
  policyDetails: LifecyclePolicyDetail[] | undefined;

  /**
   * Selection criteria for resources that the lifecycle policy applies to. You must specify exactly one selection criteria: either recipes or a tag map, not both.
   *
   * @public
   */
  resourceSelection: LifecyclePolicyResourceSelection | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure that the operation runs no more than one time. If you retry a request with the same client token, Image Builder returns the original response without running the operation again. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html) in the *Amazon EC2 API Reference*.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLifecyclePolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the image lifecycle policy resource that was updated.
   *
   * @public
   */
  lifecyclePolicyArn?: string | undefined;
}
