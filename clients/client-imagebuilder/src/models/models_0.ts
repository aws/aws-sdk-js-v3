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
 * <p>Includes counts by severity level for medium severity and higher level findings, plus a total
 * 			for all of the findings for the specified filter.</p>
 * @public
 */
export interface SeverityCounts {
  /**
   * <p>The total number of findings across all severity levels for the specified filter.</p>
   * @public
   */
  all?: number | undefined;

  /**
   * <p>The number of critical severity findings for the specified filter.</p>
   * @public
   */
  critical?: number | undefined;

  /**
   * <p>The number of high severity findings for the specified filter.</p>
   * @public
   */
  high?: number | undefined;

  /**
   * <p>The number of medium severity findings for the specified filter.</p>
   * @public
   */
  medium?: number | undefined;
}

/**
 * <p>Contains counts of vulnerability findings from image scans that run when you create
 * 			new Image Builder images, or build new versions of existing images. The vulnerability counts are
 * 			grouped by severity level. The counts are aggregated across resources to create the
 * 			final tally for the account that owns them.</p>
 * @public
 */
export interface AccountAggregation {
  /**
   * <p>Identifies the account that owns the aggregated resource findings.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>Counts by severity level for medium severity and higher level findings, plus a total
   * 			for all of the findings.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;
}

/**
 * <p>Contains settings for the Systems Manager agent on your build instance. This setting
 * 			applies to Linux and macOS build instances only. Requests that set it for a
 * 			recipe with a Windows base image are rejected.</p>
 * @public
 */
export interface SystemsManagerAgent {
  /**
   * <p>Specifies whether the Systems Manager agent is removed from your final build image
   * 			before Image Builder creates the new AMI. If <code>true</code>, the agent is
   * 			removed. If <code>false</code>, the agent is kept, so that it's
   * 			included in the AMI. If you don't set this property, Image Builder removes the
   * 			agent only if Image Builder installed the agent during the build. An agent that was
   * 			pre-installed on the base image is kept.</p>
   * @public
   */
  uninstallAfterBuild?: boolean | undefined;
}

/**
 * <p>In addition to your infrastructure configuration, these settings provide an extra
 * 			layer of control over your build instances. You can also specify commands to run on
 * 			launch for all of your build instances.</p>
 *          <p>Image Builder does not automatically install the Systems Manager agent on Windows instances. If your base
 * 			image includes the Systems Manager agent, then the AMI that you create will also include the
 * 			agent. For Linux instances, if the base image does not already include the Systems Manager agent,
 * 			Image Builder installs it. For Linux instances where Image Builder installs the Systems Manager agent, you can
 * 			choose whether to keep it for the AMI that you create.</p>
 * @public
 */
export interface AdditionalInstanceConfiguration {
  /**
   * <p>The Systems Manager agent settings for your build instance. This setting
   * 			applies to Linux and macOS build instances only. Requests that set it for a
   * 			recipe with a Windows base image are rejected.</p>
   * @public
   */
  systemsManagerAgent?: SystemsManagerAgent | undefined;

  /**
   * <p>Use this property to provide commands or a command script to run when you launch your
   * 			build instance.</p>
   *          <p>The userDataOverride property replaces any commands that Image Builder might have added to
   * 			ensure that Systems Manager is installed on your Linux build instance. If you override the user
   * 			data, make sure that you add commands to install Systems Manager, if it is not pre-installed on
   * 			your base image.</p>
   *          <note>
   *             <p>The user data is always base 64 encoded. For example, the following commands are
   * 				encoded as
   * 				<code>IyEvYmluL2Jhc2gKbWtkaXIgLXAgL3Zhci9iYi8KdG91Y2ggL3Zhcg==</code>:</p>
   *             <p>
   *                <i>#!/bin/bash</i>
   *             </p>
   *             <p>mkdir -p /var/bb/</p>
   *             <p>touch /var</p>
   *          </note>
   * @public
   */
  userDataOverride?: string | undefined;
}

/**
 * <p>Contains details about the component that caused the image creation process to
 * 			fail. The details identify the first step that failed when the component ran.</p>
 * @public
 */
export interface ComponentFailureContext {
  /**
   * <p>The Amazon Resource Name (ARN) of the component build version that failed.</p>
   * @public
   */
  componentArn?: string | undefined;

  /**
   * <p>The name of the phase in the component document where the failure occurred, such
   * 			as <code>build</code>, <code>validate</code>, or <code>test</code>.</p>
   * @public
   */
  phaseName?: string | undefined;

  /**
   * <p>The name of the step in the component document that failed.</p>
   * @public
   */
  stepName?: string | undefined;

  /**
   * <p>The action that the failed step runs, for example <code>ExecuteBash</code>.</p>
   * @public
   */
  action?: string | undefined;

  /**
   * <p>The error message from the step that failed. Image Builder truncates messages that are
   * 			longer than 1024 characters. The component log in Amazon CloudWatch Logs contains
   * 			the full output.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>Contains details about a distribution or image configuration failure for a single
 * 			Region.</p>
 * @public
 */
export interface RegionFailure {
  /**
   * <p>The Region where the failure occurred.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The failure status for the Region. Indicates whether the process failed, was
   * 			canceled, or timed out.</p>
   * @public
   */
  status?: RegionFailureStatus | undefined;

  /**
   * <p>The image configuration step where the failure occurred. Image Builder sets this property
   * 			when the failure happened during post-distribution configuration, such as launch
   * 			template updates or virtual machine (VM) export. This property doesn't appear
   * 			for failures that occurred while Image Builder copied the image to the Region.</p>
   * @public
   */
  imageConfigurationStep?: ImageConfigurationStep | undefined;

  /**
   * <p>The error message for the failure in the Region.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The account ID of the account that the image was distributed to in the
   * 			Region.</p>
   * @public
   */
  targetAccountId?: string | undefined;
}

/**
 * <p>Contains details about a failure that occurred while Image Builder distributed the image
 * 			or applied configuration to the distributed image.</p>
 * @public
 */
export interface DistributionFailureContext {
  /**
   * <p>The error message for the distribution failure.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The details about the failure for each Region where the image didn't finish
   * 			distribution or configuration.</p>
   * @public
   */
  regionFailures?: RegionFailure[] | undefined;
}

/**
 * <p>Contains details about the failure when the image creation process fails.
 * 			Properties appear in the failure context when the related information is available
 * 			for the failure.</p>
 * @public
 */
export interface ImageFailureContext {
  /**
   * <p>The status that the image had when the failure occurred. This indicates the stage
   * 			of the image creation process where the image failed, for example
   * 			<code>BUILDING</code> or <code>DISTRIBUTING</code>.</p>
   * @public
   */
  imageStatus?: ImageStatus | undefined;

  /**
   * <p>The unique identifier of the workflow execution that was running when the image
   * 			failed.</p>
   * @public
   */
  workflowExecutionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workflow build version that was running when the image
   * 			failed.</p>
   * @public
   */
  workflowArn?: string | undefined;

  /**
   * <p>The unique identifier of the workflow step execution that failed.</p>
   * @public
   */
  stepExecutionId?: string | undefined;

  /**
   * <p>The name of the workflow step that failed, as it appears in the workflow
   * 			document.</p>
   * @public
   */
  failedStep?: string | undefined;

  /**
   * <p>The details about the component that failed, if the failure occurred while a
   * 			component was running.</p>
   * @public
   */
  componentFailure?: ComponentFailureContext | undefined;

  /**
   * <p>The details about the distribution failure, if the failure occurred while Image Builder
   * 			distributed or configured the image.</p>
   * @public
   */
  distributionFailure?: DistributionFailureContext | undefined;
}

/**
 * <p>Image status and the reason for that status.</p>
 * @public
 */
export interface ImageState {
  /**
   * <p>The status of the image. A new image moves through build, test, and
   * 			distribution statuses during creation, and ends in the
   * 			<code>AVAILABLE</code>, <code>FAILED</code>, or <code>CANCELLED</code>
   * 			state. The <code>DEPRECATED</code>, <code>DISABLED</code>, and
   * 			<code>DELETED</code> statuses come from later resource management
   * 			actions.</p>
   * @public
   */
  status?: ImageStatus | undefined;

  /**
   * <p>The reason for the status of the image.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The details about the failure, for images that failed to complete. Image Builder only
   * 			sets this property when the image status is <code>FAILED</code>.</p>
   * @public
   */
  failureContext?: ImageFailureContext | undefined;
}

/**
 * <p>Details of an Amazon EC2 AMI.</p>
 * @public
 */
export interface Ami {
  /**
   * <p>The Amazon Web Services Region of the Amazon EC2 AMI.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The AMI ID of the Amazon EC2 AMI.</p>
   * @public
   */
  image?: string | undefined;

  /**
   * <p>The name of the Amazon EC2 AMI.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the Amazon EC2 AMI. Minimum and maximum length are in characters.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The state of the AMI, which includes the status and, if applicable,
   * 			the reason for that status.</p>
   * @public
   */
  state?: ImageState | undefined;

  /**
   * <p>The account ID of the owner of the AMI.</p>
   * @public
   */
  accountId?: string | undefined;
}

/**
 * <p>Describes the configuration for a launch permission. The launch permission
 * 			modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2
 * 				ModifyImageAttribute</a> API on behalf of the user for each Region they have
 * 			selected to distribute the AMI. To make an AMI public, set <code>userGroups</code>
 * 			to the value <code>all</code>. See the examples for making an AMI public at
 * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2
 * 				ModifyImageAttribute</a>.</p>
 * @public
 */
export interface LaunchPermissionConfiguration {
  /**
   * <p>The Amazon Web Services account IDs to grant launch permission to. Each listed account can
   * 			use the distributed AMI to launch instances.</p>
   * @public
   */
  userIds?: string[] | undefined;

  /**
   * <p>The name of the group that you want to grant launch permission to. The only
   * 			supported value is <code>all</code>, which makes the distributed AMI
   * 			public.</p>
   * @public
   */
  userGroups?: string[] | undefined;

  /**
   * <p>The ARN for an Amazon Web Services Organization that you want to share your AMI with. For more
   * 			information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">What is
   * 				Organizations?</a>.</p>
   * @public
   */
  organizationArns?: string[] | undefined;

  /**
   * <p>The ARN for an Organizations organizational unit (OU) that you want to share your AMI with.
   * 			For more information about key concepts for Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html">Organizations
   * 				terminology and concepts</a>.</p>
   * @public
   */
  organizationalUnitArns?: string[] | undefined;
}

/**
 * <p>Define and configure the output AMIs of the pipeline.</p>
 * @public
 */
export interface AmiDistributionConfiguration {
  /**
   * <p>The name of the output AMI. The name must include the
   * 			<code>\{\{ imagebuilder:buildDate \}\}</code> dynamic tag so that each build
   * 			produces a uniquely named AMI. If you don't specify a name, Image Builder
   * 			names the output AMI with the image name followed by the build timestamp,
   * 			for example <code>my-image 2022-10-26T22-30-05.912619Z</code>.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description to apply to the distributed AMI. Image Builder sets this as the
   * 			output AMI's description in each target Region and account. If you
   * 			don't specify a description, the AMI in the build Region uses the
   * 			image recipe's description, if the recipe has one. Copies distributed
   * 			to other Regions and accounts don't receive a default
   * 			description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Web Services account IDs to distribute the AMI to in this Region. Each listed
   * 			account receives its own copy of the output AMI. If you don't specify
   * 			accounts, Image Builder distributes the AMI only to your own account.</p>
   * @public
   */
  targetAccountIds?: string[] | undefined;

  /**
   * <p>The tags to apply to AMIs distributed to this Region.</p>
   * @public
   */
  amiTags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the KMS key used to encrypt the distributed image.
   * 			This can be either the Key ARN or the Alias ARN. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">Key identifiers (KeyId)</a>
   * 			in the <i>Key Management Service Developer Guide</i>.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>Launch permissions can be used to configure which Amazon Web Services accounts can use the AMI to
   * 			launch instances.</p>
   * @public
   */
  launchPermission?: LaunchPermissionConfiguration | undefined;
}

/**
 * <p>Defines the rules by which an image pipeline is automatically disabled when
 * 			it fails. By default, if the schedule doesn't include an auto-disable
 * 			policy, Image Builder disables the pipeline after 5 consecutive failed scheduled
 * 			builds.</p>
 * @public
 */
export interface AutoDisablePolicy {
  /**
   * <p>The number of consecutive scheduled image pipeline executions that must fail before Image Builder
   * 			automatically disables the pipeline.</p>
   * @public
   */
  failureCount: number | undefined;
}

/**
 * @public
 */
export interface CancelImageCreationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image that you want to cancel creation
   * 			for.</p>
   * @public
   */
  imageBuildVersionArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelImageCreationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image whose creation this request canceled.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface CancelLifecycleExecutionRequest {
  /**
   * <p>Identifies the specific runtime instance of the image lifecycle to cancel.</p>
   * @public
   */
  lifecycleExecutionId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelLifecycleExecutionResponse {
  /**
   * <p>The unique identifier of the lifecycle execution that the cancellation
   * 			request applies to. The cancellation completes asynchronously.</p>
   * @public
   */
  lifecycleExecutionId?: string | undefined;
}

/**
 * <p>Defines a parameter that is used to provide configuration details for the
 * 			component.</p>
 * @public
 */
export interface ComponentParameterDetail {
  /**
   * <p>The name of this input parameter.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of input this parameter provides. The currently supported value is
   * 			"string".</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The default value of this parameter if no input is provided.</p>
   * @public
   */
  defaultValue?: string[] | undefined;

  /**
   * <p>Describes this parameter.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Information about a single product code.</p>
 * @public
 */
export interface ProductCodeListItem {
  /**
   * <p>For Amazon Web Services Marketplace components, this contains the product code ID that can be stamped onto
   * 			an EC2 AMI to ensure that components are billed correctly. If this property is empty,
   * 			it might mean that the component is not published.</p>
   * @public
   */
  productCodeId: string | undefined;

  /**
   * <p>The owner of the product code that's billed. If this property is
   * 			empty, it might mean that the component is not published.</p>
   * @public
   */
  productCodeType: ProductCodeType | undefined;
}

/**
 * <p>A group of fields that describe the current status of components.</p>
 * @public
 */
export interface ComponentState {
  /**
   * <p>The current state of the component. Components with a status of
   * 			<code>DEPRECATED</code> or <code>DISABLED</code> can't be added to new
   * 			recipes.</p>
   * @public
   */
  status?: ComponentStatus | undefined;

  /**
   * <p>Describes how or why the component changed state.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>A detailed view of a component.</p>
 * @public
 */
export interface Component {
  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the component.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The description of the component.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Describes what change has been made in this version of the component,
   * 			or what makes this version different from other versions of the component.</p>
   * @public
   */
  changeDescription?: string | undefined;

  /**
   * <p>The component type specifies whether Image Builder uses the component to build the image or
   * 			only to test it.</p>
   * @public
   */
  type?: ComponentType | undefined;

  /**
   * <p>The operating system platform of the component.</p>
   * @public
   */
  platform?: Platform | undefined;

  /**
   * <p>The operating system (OS) version supported by the component. If the OS information is
   * 			available, Image Builder performs a prefix match against the base image OS version during image
   * 			recipe creation.</p>
   * @public
   */
  supportedOsVersions?: string[] | undefined;

  /**
   * <p>Describes the current status of the component.</p>
   * @public
   */
  state?: ComponentState | undefined;

  /**
   * <p>Contains parameter details for each of the parameters that the component document
   * 			defined for the component.</p>
   * @public
   */
  parameters?: ComponentParameterDetail[] | undefined;

  /**
   * <p>The owner of the component. The value is your account ID for components
   * 			that you own, the sharing account's ID for shared components, or
   * 			<code>Amazon</code>, <code>ThirdParty</code>, or <code>AWSMarketplace</code>.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>Component data contains the YAML document content for the component.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The KMS key identifier used to encrypt the component. This can be either the Key ARN or the Alias ARN. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">Key identifiers (KeyId)</a>
   * 			in the <i>Key Management Service Developer Guide</i>.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>Indicates whether the component data is encrypted at rest. Image Builder encrypts
   * 			all component data at rest, so this value is always <code>true</code>. This
   * 			field is retained for backward compatibility.</p>
   * @public
   */
  encrypted?: boolean | undefined;

  /**
   * <p>The date that Image Builder created the component.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>The tags that apply to the component.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Contains the name of the publisher if this is a third-party component. Otherwise,
   * 			this property is empty.</p>
   * @public
   */
  publisher?: string | undefined;

  /**
   * <p>Indicates whether component source is hidden from view in the console, and from
   * 			component detail results for API, CLI, or SDK operations.</p>
   * @public
   */
  obfuscate?: boolean | undefined;

  /**
   * <p>Contains product codes that are used for billing purposes for Amazon Web Services Marketplace components.</p>
   * @public
   */
  productCodes?: ProductCodeListItem[] | undefined;
}

/**
 * <p>Contains a key/value pair that sets the named component parameter.</p>
 * @public
 */
export interface ComponentParameter {
  /**
   * <p>The name of the component parameter to set.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Sets the value for the named component parameter.</p>
   * @public
   */
  value: string[] | undefined;
}

/**
 * <p>Configuration details of the component. You can specify each component only
 * 			once in a recipe, regardless of version. Components with a status of
 * 			<code>DEPRECATED</code> or <code>DISABLED</code> can't be added to new
 * 			recipes.</p>
 * @public
 */
export interface ComponentConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the component. You can specify a build version ARN, or a
   * 			component version ARN whose version segments can use <code>x</code>
   * 			wildcards, for example <code>1.x.x</code>.</p>
   * @public
   */
  componentArn: string | undefined;

  /**
   * <p>A group of parameter settings that Image Builder uses to configure the component for
   * 			a specific recipe. You must supply a value for every component parameter
   * 			that has no default value, and you can only supply parameters that the
   * 			component defines.</p>
   * @public
   */
  parameters?: ComponentParameter[] | undefined;
}

/**
 * <p>A high-level summary of a component.</p>
 * @public
 */
export interface ComponentSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the component.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The operating system platform of the component.</p>
   * @public
   */
  platform?: Platform | undefined;

  /**
   * <p>The operating system (OS) version that the component supports. If the OS information
   * 			is available, Image Builder performs a prefix match against the base image OS version during
   * 			image recipe creation.</p>
   * @public
   */
  supportedOsVersions?: string[] | undefined;

  /**
   * <p>Describes the current status of the component.</p>
   * @public
   */
  state?: ComponentState | undefined;

  /**
   * <p>The component type specifies whether Image Builder uses the component to build the image or
   * 			only to test it.</p>
   * @public
   */
  type?: ComponentType | undefined;

  /**
   * <p>The owner of the component. The value is your account ID for components
   * 			that you own, the sharing account's ID for shared components, or
   * 			<code>Amazon</code>, <code>ThirdParty</code>, or <code>AWSMarketplace</code>.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>The description of the component.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The change description for this version of the component.</p>
   * @public
   */
  changeDescription?: string | undefined;

  /**
   * <p>The date that Image Builder created this version of the component.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>The tags that apply to the component.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Contains the name of the publisher if this is a third-party component. Otherwise,
   * 			this property is empty.</p>
   * @public
   */
  publisher?: string | undefined;

  /**
   * <p>Indicates whether component source is hidden from view in the console, and from
   * 			component detail results for API, CLI, or SDK operations.</p>
   * @public
   */
  obfuscate?: boolean | undefined;
}

/**
 * <p>The defining characteristics of a specific version of a component.</p>
 * @public
 */
export interface ComponentVersion {
  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   *          <note>
   *             <p>Semantic versioning is included in each object's Amazon Resource Name (ARN),
   * 	at the level that applies to that object as follows:</p>
   *             <ol>
   *                <li>
   *                   <p>Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are
   * 				either left off entirely, or they are specified as wildcards, for example: x.x.x.</p>
   *                </li>
   *                <li>
   *                   <p>Version ARNs have only the first three nodes: <major>.<minor>.<patch></p>
   *                </li>
   *                <li>
   *                   <p>Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.</p>
   *                </li>
   *             </ol>
   *          </note>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the component.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The semantic version of the component.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes, you can assign any positive integer value, including
   * 	zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *             <p>
   *                <b>Filtering:</b> You can use wildcards (x) to specify the most recent versions or nodes when
   * 	selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes
   * 	to the right of the first wildcard must also be wildcards.</p>
   *          </note>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The description of the component.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The platform of the component.</p>
   * @public
   */
  platform?: Platform | undefined;

  /**
   * <p>The operating system (OS) version supported by the component. If OS information is
   * 			available, Image Builder performs a prefix match against the base image OS version during image
   * 			recipe creation.</p>
   * @public
   */
  supportedOsVersions?: string[] | undefined;

  /**
   * <p>The type of the component denotes whether the component is used to build the image or
   * 			only to test it.</p>
   * @public
   */
  type?: ComponentType | undefined;

  /**
   * <p>The owner of the component. The value is your account ID for components
   * 			that you own, the sharing account's ID for shared components, or
   * 			<code>Amazon</code>, <code>ThirdParty</code>, or <code>AWSMarketplace</code>.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>The date that the component was created.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>Describes the current status of the component version.</p>
   * @public
   */
  status?: ComponentStatus | undefined;

  /**
   * <p>Contains product codes that are used for billing purposes for Amazon Web Services Marketplace components.</p>
   * @public
   */
  productCodes?: ProductCodeListItem[] | undefined;
}

/**
 * <p>Details of the container images that are output resources of an image build
 * 			in a given Amazon Web Services Region: the Region, and the URIs of the container
 * 			images.</p>
 * @public
 */
export interface Container {
  /**
   * <p>Containers and container images are Region-specific. This is the Region context for
   * 			the container.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>A list of URIs for containers created in the context Region.</p>
   * @public
   */
  imageUris?: string[] | undefined;
}

/**
 * <p>The container repository where the output container image is stored.</p>
 * @public
 */
export interface TargetContainerRepository {
  /**
   * <p>Specifies the service in which this image was registered.</p>
   * @public
   */
  service: ContainerRepositoryService | undefined;

  /**
   * <p>The name of the container repository where the output container image is
   * 			stored. Provide the repository name only (a namespace path such as
   * 			<code>team-a/my-repo</code> is allowed, but not the registry
   * 			hostname).</p>
   * @public
   */
  repositoryName: string | undefined;
}

/**
 * <p>Defines how the output container image is distributed in a specific
 * 			Amazon Web Services Region: the target repository, the image tags to apply to the
 * 			distributed image, and an optional description.</p>
 * @public
 */
export interface ContainerDistributionConfiguration {
  /**
   * <p>The description of the container distribution configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Tags that Image Builder applies to the distributed container image in the target
   * 			repository. These are repository image tags, not resource tags.</p>
   * @public
   */
  containerTags?: string[] | undefined;

  /**
   * <p>The destination repository for the container distribution configuration.</p>
   * @public
   */
  targetRepository: TargetContainerRepository | undefined;
}

/**
 * <p>Amazon EBS-specific block device mapping specifications.</p>
 * @public
 */
export interface EbsInstanceBlockDeviceSpecification {
  /**
   * <p>Specifies whether to encrypt the device.</p>
   * @public
   */
  encrypted?: boolean | undefined;

  /**
   * <p>Specifies whether to delete the associated device on termination.</p>
   * @public
   */
  deleteOnTermination?: boolean | undefined;

  /**
   * <p>The IOPS value for the device. Required only when volumeType is io1 or io2.</p>
   * @public
   */
  iops?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the KMS key to use when encrypting the device.
   * 			This can be either the Key ARN or the Alias ARN. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">Key identifiers (KeyId)</a>
   * 			in the <i>Key Management Service Developer Guide</i>.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The snapshot that defines the device contents.</p>
   * @public
   */
  snapshotId?: string | undefined;

  /**
   * <p>Overrides the volume size for the device.</p>
   * @public
   */
  volumeSize?: number | undefined;

  /**
   * <p>Overrides the volume type for the device.</p>
   * @public
   */
  volumeType?: EbsVolumeType | undefined;

  /**
   * <p>
   *             <b>For GP3 volumes only</b> – The throughput in MiB/s
   * 			that the volume supports.</p>
   * @public
   */
  throughput?: number | undefined;
}

/**
 * <p>Defines block device mappings for the instance used to configure your image.</p>
 * @public
 */
export interface InstanceBlockDeviceMapping {
  /**
   * <p>The device to which these mappings apply.</p>
   * @public
   */
  deviceName?: string | undefined;

  /**
   * <p>The Amazon EBS-specific configuration for this mapping.</p>
   * @public
   */
  ebs?: EbsInstanceBlockDeviceSpecification | undefined;

  /**
   * <p>The virtual device name for instance ephemeral devices.</p>
   * @public
   */
  virtualName?: string | undefined;

  /**
   * <p>Specifies a mapping to remove from the base image.</p>
   * @public
   */
  noDevice?: string | undefined;
}

/**
 * <p>Defines a custom base AMI and block device mapping configurations of an instance used
 * 			for building and testing container images.</p>
 * @public
 */
export interface InstanceConfiguration {
  /**
   * <p>The base image for a container build and test instance. This can contain an AMI ID
   * 			or it can specify an Amazon Web Services Systems Manager (SSM) Parameter Store Parameter, prefixed by <code>ssm:</code>,
   * 			followed by the parameter name or ARN.</p>
   *          <p>If not specified, Image Builder uses the appropriate ECS-optimized AMI as a base image.</p>
   * @public
   */
  image?: string | undefined;

  /**
   * <p>Defines the block device mappings for the EC2 instance that Image Builder launches
   * 			to build and test your container image.</p>
   * @public
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;
}

/**
 * <p>Defines how Image Builder builds and tests a container image: the base image,
 * 			components to apply, the Dockerfile template, the build and test instance
 * 			configuration, and the target repository for the output image.</p>
 * @public
 */
export interface ContainerRecipe {
  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe.</p>
   *          <note>
   *             <p>Semantic versioning is included in each object's Amazon Resource Name (ARN),
   * 	at the level that applies to that object as follows:</p>
   *             <ol>
   *                <li>
   *                   <p>Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are
   * 				either left off entirely, or they are specified as wildcards, for example: x.x.x.</p>
   *                </li>
   *                <li>
   *                   <p>Version ARNs have only the first three nodes: <major>.<minor>.<patch></p>
   *                </li>
   *                <li>
   *                   <p>Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.</p>
   *                </li>
   *             </ol>
   *          </note>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Specifies the type of container, such as Docker.</p>
   * @public
   */
  containerType?: ContainerType | undefined;

  /**
   * <p>The name of the container recipe.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the container recipe.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The system platform for the container. Container recipes support only the
   * 			Linux and Windows platforms.</p>
   * @public
   */
  platform?: Platform | undefined;

  /**
   * <p>The owner of the container recipe.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>The semantic version of the container recipe.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes, you can assign any positive integer value, including
   * 	zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *             <p>
   *                <b>Filtering:</b> You can use wildcards (x) to specify the most recent versions or nodes when
   * 	selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes
   * 	to the right of the first wildcard must also be wildcards.</p>
   *          </note>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>Build and test components that are included in the container recipe.
   * 			A recipe can contain a maximum of 20 build and test components
   * 			in any combination, by default. This maximum is an adjustable quota. For more information, see
   * 			<a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html">EC2 Image Builder endpoints and quotas</a>
   * 			in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  components?: ComponentConfiguration[] | undefined;

  /**
   * <p>A group of options that can be used to configure an instance for building and testing
   * 			container images.</p>
   * @public
   */
  instanceConfiguration?: InstanceConfiguration | undefined;

  /**
   * <p>The Dockerfile template that Image Builder uses to build the container image. The
   * 			template can include contextual variables that Image Builder replaces with build
   * 			information at build time. For the contextual variables that the template
   * 			can include, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/create-container-recipes.html">Create
   * 				a new version of a container recipe</a> in the
   * 			<i>EC2 Image Builder User Guide</i>.</p>
   * @public
   */
  dockerfileTemplateData?: string | undefined;

  /**
   * <p>The KMS key that Image Builder uses to encrypt the recipe's Dockerfile template
   * 			data at rest. This can be either the Key ARN or the Alias ARN. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">Key identifiers (KeyId)</a>
   * 			in the <i>Key Management Service Developer Guide</i>. If you don't specify a key, Image Builder
   * 			encrypts the template data with a KMS key that Image Builder owns. This key
   * 			isn't used to encrypt the output container image.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>Specifies whether the recipe's Dockerfile template data is encrypted at
   * 			rest. Image Builder encrypts all Dockerfile template data at rest, so this value is
   * 			always <code>true</code>. This field is retained for backward compatibility,
   * 			and doesn't describe encryption of the output container image.</p>
   * @public
   */
  encrypted?: boolean | undefined;

  /**
   * <p>The base image for customizations specified in the container recipe. This can
   * 			contain an Image Builder image resource ARN or a container image URI, for example
   * 			<code>amazonlinux:latest</code>.</p>
   * @public
   */
  parentImage?: string | undefined;

  /**
   * <p>The date when this container recipe was created.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>Tags that are attached to the container recipe.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The working directory for use during build and test workflows.</p>
   * @public
   */
  workingDirectory?: string | undefined;

  /**
   * <p>The destination repository for the container image.</p>
   * @public
   */
  targetRepository?: TargetContainerRepository | undefined;
}

/**
 * <p>A summary of a container recipe.</p>
 * @public
 */
export interface ContainerRecipeSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Specifies the type of container, such as "Docker".</p>
   * @public
   */
  containerType?: ContainerType | undefined;

  /**
   * <p>The name of the container recipe.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The system platform for the container. Container recipes support only the
   * 			Linux and Windows platforms.</p>
   * @public
   */
  platform?: Platform | undefined;

  /**
   * <p>The owner of the container recipe.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>The base image for the container recipe.</p>
   * @public
   */
  parentImage?: string | undefined;

  /**
   * <p>The date when this container recipe was created.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>The base image for a container build and test instance. This can contain an AMI ID
   * 		or it can specify an Amazon Web Services Systems Manager (SSM) Parameter Store Parameter, prefixed by <code>ssm:</code>,
   * 		followed by the parameter name or ARN.</p>
   *          <p>If not specified, Image Builder uses the appropriate ECS-optimized AMI as a base image.</p>
   * @public
   */
  instanceImage?: string | undefined;

  /**
   * <p>Tags that are attached to the container recipe.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateComponentRequest {
  /**
   * <p>The name of the component. Image Builder generates the component ARN from a
   * 			normalized form of the name, so names that differ only in case, spaces, or
   * 			underscores count as the same name. If a component with the same name and
   * 			semantic version already exists in your account in the same Amazon Web Services Region,
   * 			the request creates a new build version for it. If the content is also
   * 			identical to the latest build version, the request fails because the
   * 			component already exists.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The semantic version of the component. This version follows the semantic version
   * 			syntax.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes, you can assign any positive integer value, including
   * 	zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *          </note>
   * @public
   */
  semanticVersion: string | undefined;

  /**
   * <p>Describes the contents of the component.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The change description of the component. Describes what change has been made in this
   * 			version, or what makes this version different from other versions of the
   * 			component.</p>
   * @public
   */
  changeDescription?: string | undefined;

  /**
   * <p>The operating system platform of the component.</p>
   * @public
   */
  platform: Platform | undefined;

  /**
   * <p>The operating system (OS) version supported by the component. If the OS information is
   * 			available, a prefix match is performed against the base image OS version during image
   * 			recipe creation.</p>
   * @public
   */
  supportedOsVersions?: string[] | undefined;

  /**
   * <p>Component <code>data</code> contains inline YAML document content for the component.
   * 			Alternatively, you can specify the <code>uri</code> of a YAML document file stored in
   * 			Amazon S3. However, you cannot specify both properties.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The <code>uri</code> of a YAML component document file. This must be an S3 URL
   * 				(<code>s3://bucket/key</code>), and you must have permission to access the
   * 			S3 bucket it points to. If you use Amazon S3, you can specify component content up to your
   * 			service quota for component size, which is 64 KB by default.</p>
   *          <p>Alternatively, you can specify the YAML document inline, using the component
   * 				<code>data</code> property. You cannot specify both properties.</p>
   * @public
   */
  uri?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the KMS key used to encrypt this component.
   * 			This can be either the Key ARN or the Alias ARN. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">Key identifiers (KeyId)</a>
   * 			in the <i>Key Management Service Developer Guide</i>. If you don't specify a key, Image Builder encrypts the
   * 			component data with a KMS key that Image Builder owns.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The tags that apply to the component.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a <code>DryRunOperationException</code> error response.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * <p>A set of wildcard version ARNs that always reference the latest
 * 			version of the resource. ARNs are included for the latest version overall, and for the latest
 * 			versions within the same major, minor, and patch levels.</p>
 * @public
 */
export interface LatestVersionReferences {
  /**
   * <p>The latest version Amazon Resource Name (ARN) of the Image Builder resource.</p>
   * @public
   */
  latestVersionArn?: string | undefined;

  /**
   * <p>The latest version Amazon Resource Name (ARN) with the same <code>major</code> version of the Image Builder resource.</p>
   * @public
   */
  latestMajorVersionArn?: string | undefined;

  /**
   * <p>The latest version Amazon Resource Name (ARN) with the same <code>minor</code> version of the Image Builder resource.</p>
   * @public
   */
  latestMinorVersionArn?: string | undefined;

  /**
   * <p>The latest version Amazon Resource Name (ARN) with the same <code>patch</code> version of the Image Builder resource.</p>
   * @public
   */
  latestPatchVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateComponentResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the component that the request created.</p>
   * @public
   */
  componentBuildVersionArn?: string | undefined;

  /**
   * <p>A set of wildcard version ARNs that always reference the latest
   * 			version of the resource. ARNs are included for the latest version overall, and for the latest
   * 			versions within the same major, minor, and patch levels.</p>
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * @public
 */
export interface CreateContainerRecipeRequest {
  /**
   * <p>The type of container to create.</p>
   * @public
   */
  containerType: ContainerType | undefined;

  /**
   * <p>The name of the container recipe. The recipe name, combined with the
   * 			semantic version, must be unique to your account in each Amazon Web Services Region.
   * 			Image Builder generates the container recipe ARN from a normalized form of the
   * 			name, so names that differ only in case, spaces, or underscores count as
   * 			the same name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the container recipe.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The semantic version of the container recipe. This version follows the semantic
   * 			version syntax.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes, you can assign any positive integer value, including
   * 	zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *          </note>
   * @public
   */
  semanticVersion: string | undefined;

  /**
   * <p>The components included in the container recipe. You can specify each
   * 			component only one time in a recipe.</p>
   * @public
   */
  components?: ComponentConfiguration[] | undefined;

  /**
   * <p>A group of options that can be used to configure an instance for building and testing
   * 			container images.</p>
   * @public
   */
  instanceConfiguration?: InstanceConfiguration | undefined;

  /**
   * <p>The Dockerfile template used to build your image, as an inline data blob.
   * 			You must specify exactly one of the <code>dockerfileTemplateData</code> or
   * 			<code>dockerfileTemplateUri</code> properties. For the contextual variables
   * 			that the template can include, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/create-container-recipes.html">Create
   * 				a new version of a container recipe</a> in the
   * 			<i>EC2 Image Builder User Guide</i>.</p>
   * @public
   */
  dockerfileTemplateData?: string | undefined;

  /**
   * <p>The Amazon S3 URI for the Dockerfile template that is used to build your container
   * 			image. You must have permission to read the object. Image Builder reads the object
   * 			once, when it creates the recipe, and stores its content in the recipe.
   * 			Later changes to the S3 object don't affect the recipe. You must specify
   * 			exactly one of the <code>dockerfileTemplateData</code> or
   * 			<code>dockerfileTemplateUri</code> properties.</p>
   * @public
   */
  dockerfileTemplateUri?: string | undefined;

  /**
   * <p>Specifies the operating system platform when you use a custom base image.
   * 			Container recipes support only the Linux and Windows platforms.</p>
   * @public
   */
  platformOverride?: Platform | undefined;

  /**
   * <p>Specifies the operating system version for the base image. Use this property
   * 			only when the base image is a container image from a registry. When the base
   * 			image is an Image Builder image, the operating system version comes from the parent
   * 			image.</p>
   * @public
   */
  imageOsVersionOverride?: string | undefined;

  /**
   * <p>The base image for the container recipe. This can be an Image Builder image resource
   * 			ARN or a container image URI from a registry, for example
   * 			<code>amazonlinux:latest</code>.</p>
   * @public
   */
  parentImage: string | undefined;

  /**
   * <p>Tags that are attached to the container recipe.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The working directory for use during build and test workflows.</p>
   * @public
   */
  workingDirectory?: string | undefined;

  /**
   * <p>The destination repository for the container image. The Amazon ECR repository
   * 			must already exist in the Amazon Web Services Region where the build runs.</p>
   * @public
   */
  targetRepository: TargetContainerRepository | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies which KMS key is used to encrypt the Dockerfile
   * 			template. This can be either the Key ARN or the Alias ARN. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">Key identifiers (KeyId)</a>
   * 			in the <i>Key Management Service Developer Guide</i>.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a <code>DryRunOperationException</code> error response.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateContainerRecipeResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Returns the Amazon Resource Name (ARN) of the container recipe that the request
   * 			created.</p>
   * @public
   */
  containerRecipeArn?: string | undefined;

  /**
   * <p>A set of wildcard version ARNs that always reference the latest
   * 			version of the resource. ARNs are included for the latest version overall, and for the latest
   * 			versions within the same major, minor, and patch levels.</p>
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * <p>Identifies the launch template that the associated Windows AMI uses for launching an
 * 			instance when Windows fast launch is enabled.</p>
 *          <note>
 *             <p>You can specify either the <code>launchTemplateName</code> or the
 * 					<code>launchTemplateId</code>, but not both.</p>
 *          </note>
 * @public
 */
export interface FastLaunchLaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template to use for Windows fast launch for a Windows AMI.</p>
   * @public
   */
  launchTemplateId?: string | undefined;

  /**
   * <p>The name of the launch template to use for Windows fast launch for a Windows AMI.</p>
   * @public
   */
  launchTemplateName?: string | undefined;

  /**
   * <p>The version of the launch template to use for Windows fast launch for a Windows
   * 			AMI.</p>
   * @public
   */
  launchTemplateVersion?: string | undefined;
}

/**
 * <p>Configuration settings for creating and managing pre-provisioned snapshots for a
 * 			fast-launch enabled Windows AMI.</p>
 * @public
 */
export interface FastLaunchSnapshotConfiguration {
  /**
   * <p>The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled
   * 			Windows AMI.</p>
   * @public
   */
  targetResourceCount?: number | undefined;
}

/**
 * <p>Defines and configures EC2 Fast Launch for output Windows AMIs.</p>
 * @public
 */
export interface FastLaunchConfiguration {
  /**
   * <p>Specifies whether to enable Windows fast launch on the output AMI during
   * 			distribution. A value of <code>false</code> means Image Builder takes no
   * 			fast-launch action for this configuration.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>Configuration settings for managing the number of snapshots that are created from
   * 			pre-provisioned instances for the Windows AMI when Windows fast launch is enabled.</p>
   * @public
   */
  snapshotConfiguration?: FastLaunchSnapshotConfiguration | undefined;

  /**
   * <p>The maximum number of parallel instances that are launched for creating
   * 			resources.</p>
   * @public
   */
  maxParallelLaunches?: number | undefined;

  /**
   * <p>The launch template that the fast-launch enabled Windows AMI uses when it launches
   * 			Windows instances to create pre-provisioned snapshots.</p>
   * @public
   */
  launchTemplate?: FastLaunchLaunchTemplateSpecification | undefined;

  /**
   * <p>The owner account ID for the fast-launch enabled Windows AMI.</p>
   * @public
   */
  accountId?: string | undefined;
}

/**
 * <p>Identifies an Amazon EC2 launch template to use for a specific account.</p>
 * @public
 */
export interface LaunchTemplateConfiguration {
  /**
   * <p>Identifies the Amazon EC2 launch template to use.</p>
   * @public
   */
  launchTemplateId: string | undefined;

  /**
   * <p>The account ID that this configuration applies to.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>Specifies whether to make the new launch template version that Image Builder creates
   * 			the default version of the launch template. If you don't set a value,
   * 			Image Builder treats it as <code>true</code>.</p>
   * @public
   */
  setDefaultVersion?: boolean | undefined;
}

/**
 * <p>Properties that configure exporting the output image to a disk image file in
 * 			an Amazon S3 bucket, in a format that's compatible with your VMs.</p>
 * @public
 */
export interface S3ExportConfiguration {
  /**
   * <p>The name of the role that grants VM Import/Export permission to export images to your
   * 			S3 bucket.</p>
   * @public
   */
  roleName: string | undefined;

  /**
   * <p>Export the updated image to one of the following supported disk image formats:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Virtual Hard Disk (VHD)</b> – Compatible
   * 					with Citrix Xen and Microsoft Hyper-V virtualization products.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Stream-optimized ESX Virtual Machine Disk
   * 						(VMDK)</b> – Compatible with VMware ESX and VMware vSphere
   * 					versions 4, 5, and 6.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Raw</b> – Raw format.</p>
   *             </li>
   *          </ul>
   * @public
   */
  diskImageFormat: DiskImageFormat | undefined;

  /**
   * <p>The S3 bucket in which to store the output disk images for your VM.</p>
   * @public
   */
  s3Bucket: string | undefined;

  /**
   * <p>The Amazon S3 path for the bucket where the output disk images for your VM are
   * 			stored.</p>
   * @public
   */
  s3Prefix?: string | undefined;
}

/**
 * <p>Configuration for a single Parameter in the Amazon Web Services Systems Manager (SSM) Parameter Store in
 * 			a given Region.</p>
 * @public
 */
export interface SsmParameterConfiguration {
  /**
   * <p>Specify the account that will own the Parameter in a given Region. During distribution,
   * 			this account must be specified in distribution settings as a target account for the
   * 			Region.</p>
   * @public
   */
  amiAccountId?: string | undefined;

  /**
   * <p>This is the name of the Parameter in the target Region or account. The image
   * 			distribution creates the Parameter if it doesn't already exist. Otherwise, it updates
   * 			the parameter.</p>
   * @public
   */
  parameterName: string | undefined;

  /**
   * <p>The type of value the parameter contains.
   * 		We recommend the <code>aws:ec2:image</code> data type.</p>
   * @public
   */
  dataType?: SsmParameterDataType | undefined;
}

/**
 * <p>Defines the settings for a specific Region.</p>
 * @public
 */
export interface Distribution {
  /**
   * <p>The target Region.</p>
   * @public
   */
  region: string | undefined;

  /**
   * <p>The specific AMI settings; for example, launch permissions or AMI tags.</p>
   * @public
   */
  amiDistributionConfiguration?: AmiDistributionConfiguration | undefined;

  /**
   * <p>Container distribution settings for encryption, licensing, and sharing in a specific
   * 			Region.</p>
   * @public
   */
  containerDistributionConfiguration?: ContainerDistributionConfiguration | undefined;

  /**
   * <p>The License Manager Configuration to associate with the AMI in the specified
   * 			Region.</p>
   * @public
   */
  licenseConfigurationArns?: string[] | undefined;

  /**
   * <p>A group of launchTemplateConfiguration settings that apply to image distribution for
   * 			specified accounts.</p>
   * @public
   */
  launchTemplateConfigurations?: LaunchTemplateConfiguration[] | undefined;

  /**
   * <p>Configure export settings to deliver disk images created from your image build,
   * 			using a file format that is compatible with your VMs in that Region.</p>
   * @public
   */
  s3ExportConfiguration?: S3ExportConfiguration | undefined;

  /**
   * <p>The Windows faster-launching configurations to use for AMI distribution.</p>
   * @public
   */
  fastLaunchConfigurations?: FastLaunchConfiguration[] | undefined;

  /**
   * <p>Contains settings to update Amazon Web Services Systems Manager (SSM) Parameter Store Parameters with
   * 			output AMI IDs from the build by target Region.</p>
   * @public
   */
  ssmParameterConfigurations?: SsmParameterConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateDistributionConfigurationRequest {
  /**
   * <p>The name of the distribution configuration. Distribution configuration
   * 			names must be unique to your account in each Amazon Web Services Region. Image Builder generates
   * 			the distribution configuration ARN from a normalized form of the name, so
   * 			names that differ only in case, spaces, or underscores count as the same
   * 			name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the distribution configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The distribution settings for the configuration. Each entry defines how
   * 			output images are distributed in one target Amazon Web Services Region. A Region can
   * 			appear at most once in the list.</p>
   * @public
   */
  distributions: Distribution[] | undefined;

  /**
   * <p>The tags of the distribution configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a <code>DryRunOperationException</code> error response.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDistributionConfigurationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that was created by
   * 			this request.</p>
   * @public
   */
  distributionConfigurationArn?: string | undefined;
}

/**
 * <p>Settings that Image Builder uses to configure the ECR repository and the output container
 * 			images that Amazon Inspector scans.</p>
 * @public
 */
export interface EcrConfiguration {
  /**
   * <p>The name of the container repository where Image Builder pushes the container
   * 			image for the vulnerability scan. Provide the repository name only (a
   * 			namespace path is allowed, but not the registry hostname); the repository
   * 			must already exist in your account. If you don't specify a repository
   * 			name, Image Builder creates the default repository
   * 			<code>image-builder-image-scanning-repository</code> in your account.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>Tags for Image Builder to apply to the output container image that Amazon Inspector scans. Tags can
   * 			help you identify and manage your scanned images.</p>
   * @public
   */
  containerTags?: string[] | undefined;
}

/**
 * <p>Contains settings for Image Builder image resource and container image scans.</p>
 * @public
 */
export interface ImageScanningConfiguration {
  /**
   * <p>Specifies whether Amazon Inspector scans for vulnerabilities when you create a new
   * 			image, and whether Image Builder saves the findings. Amazon Inspector must be enabled in the
   * 			account. Image tests must also be enabled. For AMI output, Amazon Inspector scans the
   * 			test instance. For container output, Amazon Inspector scans the container image that
   * 			Image Builder pushes to the Amazon ECR repository from your <code>ecrConfiguration</code>
   * 			settings.</p>
   * @public
   */
  imageScanningEnabled?: boolean | undefined;

  /**
   * <p>Contains Amazon ECR settings for vulnerability scans.</p>
   * @public
   */
  ecrConfiguration?: EcrConfiguration | undefined;
}

/**
 * <p>Configure image tests for your pipeline build. Tests run after building the image, to
 * 			verify that the AMI or container image is valid before distributing it.</p>
 * @public
 */
export interface ImageTestsConfiguration {
  /**
   * <p>Specifies whether tests run after building the image.
   * 			When enabled, tests run after the image build and before image distribution.
   * 			Defaults to <code>true</code>.</p>
   * @public
   */
  imageTestsEnabled?: boolean | undefined;

  /**
   * <p>The maximum time in minutes that tests are permitted to run. If you don't
   * 			specify a value, Image Builder stores and returns 720.</p>
   *          <note>
   *             <p>The timeout property is not currently active. This value is
   * 				ignored.</p>
   *          </note>
   * @public
   */
  timeoutMinutes?: number | undefined;
}

/**
 * <p>The logging configuration that's defined for the image. Image Builder uses the defined settings
 * 			to direct execution log output during image creation.</p>
 * @public
 */
export interface ImageLoggingConfiguration {
  /**
   * <p>The log group name that Image Builder uses for image creation. If not specified, the log group
   * 			name defaults to <code>/aws/imagebuilder/image-name</code>.</p>
   * @public
   */
  logGroupName?: string | undefined;
}

/**
 * <p>Contains a key/value pair that sets the named workflow parameter.</p>
 * @public
 */
export interface WorkflowParameter {
  /**
   * <p>The name of the workflow parameter to set.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Sets the value for the named workflow parameter.</p>
   * @public
   */
  value: string[] | undefined;
}

/**
 * <p>Contains control settings and configurable inputs for a workflow
 * 			resource.</p>
 * @public
 */
export interface WorkflowConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow resource.</p>
   * @public
   */
  workflowArn: string | undefined;

  /**
   * <p>Contains parameter values for each of the parameters that the workflow
   * 			document defined for the workflow resource.</p>
   * @public
   */
  parameters?: WorkflowParameter[] | undefined;

  /**
   * <p>Test workflows are defined within named runtime groups called parallel groups.
   * 			The parallel group is the named group that contains this test workflow. Test
   * 			workflows within a parallel group can run at the same time. Image Builder starts up to five
   * 			test workflows in the group at the same time, and starts additional workflows as
   * 			others complete, until all workflows in the group have completed. This field only
   * 			applies for test workflows.</p>
   * @public
   */
  parallelGroup?: string | undefined;

  /**
   * <p>The action to take if the workflow fails. With <code>CONTINUE</code>, a
   * 			failed workflow is logged and image creation proceeds to the next workflow.
   * 			If you don't set a value, the image build fails when the workflow fails.
   * 			You can only set this property for test workflows.</p>
   * @public
   */
  onFailure?: OnWorkflowFailure | undefined;
}

/**
 * @public
 */
export interface CreateImageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that defines how images are
   * 			configured, tested, and assessed. You must specify either this property or
   * 			<code>containerRecipeArn</code>, but not both.</p>
   * @public
   */
  imageRecipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe that defines how images are
   * 			configured and tested. You must specify either this property or
   * 			<code>imageRecipeArn</code>, but not both.</p>
   * @public
   */
  containerRecipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that defines and
   * 			configures the outputs of the image build. If you don't specify a
   * 			distribution configuration, Image Builder creates the output image only in the
   * 			account and Amazon Web Services Region where the build runs.</p>
   * @public
   */
  distributionConfigurationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that defines the
   * 			environment in which your image will be built and tested.</p>
   * @public
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p>Settings that determine whether Image Builder runs tests on the image after
   * 			building it. Image tests are enabled by default.</p>
   * @public
   */
  imageTestsConfiguration?: ImageTestsConfiguration | undefined;

  /**
   * <p>Specifies whether to collect additional information about the image being created, including the operating
   * 			system (OS) version and package list. Defaults to <code>true</code>.</p>
   * @public
   */
  enhancedImageMetadataEnabled?: boolean | undefined;

  /**
   * <p>The tags of the image.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Settings for vulnerability scans that Amazon Inspector runs during image
   * 			creation. For AMI output, Amazon Inspector scans the test instance. For container
   * 			output, Amazon Inspector scans the container image that Image Builder pushes to the Amazon ECR
   * 			repository specified in <code>ecrConfiguration</code>.</p>
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * <p>The array of workflow configuration objects for the build. If you specify
   * 			workflows, they replace the default workflows that Image Builder otherwise runs for
   * 			the build, and you must also provide an <code>executionRole</code>.</p>
   * @public
   */
  workflows?: WorkflowConfiguration[] | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) for the IAM role you create that grants
   * 			Image Builder access to perform workflow actions. This property is required if you
   * 			specify <code>workflows</code>. If you don't provide a role, Image Builder uses the
   * 			Image Builder service-linked role in your account, and creates it if it doesn't
   * 			exist.</p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>The CloudWatch Logs log group where Image Builder sends the image build logs. If
   * 			you specify a log group name outside of the <code>/aws/imagebuilder/</code>
   * 			namespace, you must also provide an <code>executionRole</code> that has
   * 			permission to write to that log group.</p>
   * @public
   */
  loggingConfiguration?: ImageLoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateImageResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image that the request created.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * <p>A set of wildcard version ARNs that always reference the latest
   * 			version of the resource. ARNs are included for the latest version overall, and for the latest
   * 			versions within the same major, minor, and patch levels.</p>
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * <p>The logging configuration that's defined for pipeline execution.</p>
 * @public
 */
export interface PipelineLoggingConfiguration {
  /**
   * <p>Specifies the CloudWatch Logs log group name for image build logs.
   * 			The log group name can contain alphanumeric characters, hyphens,
   * 			underscores, forward slashes, and periods, up to 512 characters.
   * 			Log group names not starting with <code>/aws/imagebuilder/</code>
   * 			require an <code>executionRole</code> with CloudWatch Logs write
   * 			permissions. If not specified, defaults to
   * 			<code>/aws/imagebuilder/image-name</code>.</p>
   * @public
   */
  imageLogGroupName?: string | undefined;

  /**
   * <p>Specifies the CloudWatch Logs log group name for pipeline execution
   * 			logs. The log group name can contain alphanumeric characters, hyphens,
   * 			underscores, forward slashes, and periods, up to 512 characters.
   * 			Log group names not starting with <code>/aws/imagebuilder/</code>
   * 			require an <code>executionRole</code> with CloudWatch Logs write
   * 			permissions. If not specified, defaults to
   * 			<code>/aws/imagebuilder/pipeline/pipeline-name</code>.</p>
   * @public
   */
  pipelineLogGroupName?: string | undefined;
}

/**
 * <p>A schedule configures when and how often a pipeline will automatically create a new
 * 			image.</p>
 * @public
 */
export interface Schedule {
  /**
   * <p>The expression determines how often EC2 Image Builder evaluates your
   * 				<code>pipelineExecutionStartCondition</code>. You can specify a cron
   * 				expression, or a rate expression such as <code>rate(1 day)</code>.</p>
   *          <p>For information on how to format a cron expression in Image Builder, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/image-builder-cron.html">Use
   * 				cron expressions in EC2 Image Builder</a>.</p>
   * @public
   */
  scheduleExpression?: string | undefined;

  /**
   * <p>The timezone that applies to the scheduling expression. Specify a value in
   * 			<a href="https://www.joda.org/joda-time/timezones.html">IANA timezone
   * 				format</a>, for example <code>Etc/UTC</code> or
   * 			<code>America/Los_Angeles</code>. If not specified, this defaults to UTC.</p>
   * @public
   */
  timezone?: string | undefined;

  /**
   * <p>The start condition configures when the pipeline should trigger a new image build,
   * 			as follows. If no value is set Image Builder defaults to
   * 			<code>EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE</code> (default) –
   * 					When you use semantic version filters on the base image or components in your
   * 					image recipe, EC2 Image Builder builds a new image only when there are new versions of
   * 					the base image or components in your recipe that match the filter.</p>
   *                <note>
   *                   <p>For semantic version syntax, see
   * 						<a href="https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html">CreateComponent</a>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXPRESSION_MATCH_ONLY</code> – This condition builds a new
   * 					image every time the CRON expression matches the current time.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If the recipe references its base image through an Amazon Web Services Systems Manager Parameter
   * 				Store parameter, a change in the parameter's value also counts as an
   * 				available dependency update.</p>
   *          </note>
   * @public
   */
  pipelineExecutionStartCondition?: PipelineExecutionStartCondition | undefined;

  /**
   * <p>The policy that configures when Image Builder should automatically disable a pipeline that
   * 			is failing.</p>
   * @public
   */
  autoDisablePolicy?: AutoDisablePolicy | undefined;
}

/**
 * @public
 */
export interface CreateImagePipelineRequest {
  /**
   * <p>The name of the image pipeline. Pipeline names must be unique to your
   * 			account in each Amazon Web Services Region. Image Builder generates the pipeline ARN from a
   * 			normalized form of the name, so names that differ only in case, spaces, or
   * 			underscores count as the same name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the image pipeline.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that configures
   * 			images created by this image pipeline. You must specify either this property
   * 			or <code>containerRecipeArn</code>, but not both.</p>
   * @public
   */
  imageRecipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe that is used to configure
   * 			images created by this container pipeline. You must specify either this
   * 			property or <code>imageRecipeArn</code>, but not both.</p>
   * @public
   */
  containerRecipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that
   * 			builds images created by this image pipeline.</p>
   * @public
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that configures and
   * 			distributes images created by this image pipeline.</p>
   * @public
   */
  distributionConfigurationArn?: string | undefined;

  /**
   * <p>Specifies the test settings that Image Builder applies to images that this
   * 			pipeline creates. If you don't provide test settings, Image Builder stores a default
   * 			configuration with image tests enabled.</p>
   * @public
   */
  imageTestsConfiguration?: ImageTestsConfiguration | undefined;

  /**
   * <p>Specifies whether to collect additional information about the image being created, including the operating
   * 			system (OS) version and package list. Defaults to <code>true</code>.</p>
   * @public
   */
  enhancedImageMetadataEnabled?: boolean | undefined;

  /**
   * <p>The schedule of the image pipeline. If you don't provide a schedule, the
   * 			pipeline runs only when you call
   * 			<a>StartImagePipelineExecution</a>.</p>
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * <p>The status of the image pipeline. If you don't specify a status, it
   * 			defaults to <code>ENABLED</code>. A disabled pipeline doesn't run on its
   * 			schedule, but you can still start builds manually.</p>
   * @public
   */
  status?: PipelineStatus | undefined;

  /**
   * <p>The tags of the image pipeline.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The tags that Image Builder applies to the Image Builder image resource that this
   * 			pipeline's scheduled executions create. These tags don't apply to the
   * 			output AMI. To tag output AMIs, use <code>amiTags</code> in the
   * 			pipeline's distribution configuration.</p>
   * @public
   */
  imageTags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Contains settings for vulnerability scans that Amazon Inspector runs against the test instance
   * 			during image creation.</p>
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * <p>The array of workflow configuration objects for builds that this pipeline
   * 			starts. You must also specify <code>executionRole</code> when you provide
   * 			workflows.</p>
   * @public
   */
  workflows?: WorkflowConfiguration[] | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) for the IAM role you create that grants
   * 			Image Builder access to perform workflow actions.</p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>Specifies the logging configuration for the image pipeline. Use this
   * 			to define custom CloudWatch Logs log groups for your pipeline execution
   * 			logs and image build logs. The service manages log groups with names
   * 			starting with <code>/aws/imagebuilder/</code> using the service-linked
   * 			role. For custom log group names outside of this prefix, you must also
   * 			provide an <code>executionRole</code>.</p>
   * @public
   */
  loggingConfiguration?: PipelineLoggingConfiguration | undefined;

  /**
   * <p>Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a <code>DryRunOperationException</code> error response.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateImagePipelineResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that was created by this
   * 			request.</p>
   * @public
   */
  imagePipelineArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateImageRecipeRequest {
  /**
   * <p>The name of the image recipe. The recipe name, combined with the semantic
   * 			version, must be unique to your account in each Amazon Web Services Region. Image Builder
   * 			generates the image recipe ARN from a normalized form of the name, so
   * 			names that differ only in case, spaces, or underscores count as the same
   * 			name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the image recipe.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The semantic version of the image recipe. This version follows the semantic version
   * 			syntax.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes, you can assign any positive integer value, including
   * 	zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *          </note>
   * @public
   */
  semanticVersion: string | undefined;

  /**
   * <p>The components included in the image recipe. Components are optional. A
   * 			recipe with no components bakes the base image without additional
   * 			customization. You can
   * 			specify each component only one time in a recipe. Components with a status
   * 			of <code>DEPRECATED</code> or <code>DISABLED</code> can't be added to
   * 			new recipes.</p>
   * @public
   */
  components?: ComponentConfiguration[] | undefined;

  /**
   * <p>The base image for customizations specified in the image recipe. You can specify the
   * 			parent image using one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>AMI ID</p>
   *             </li>
   *             <li>
   *                <p>Image Builder image Amazon Resource Name (ARN)</p>
   *             </li>
   *             <li>
   *                <p>Amazon Web Services Systems Manager (SSM) Parameter Store Parameter, prefixed by <code>ssm:</code>,
   * 					followed by the parameter name or ARN.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Web Services Marketplace product ID</p>
   *             </li>
   *          </ul>
   *          <p>If you enter an AMI ID or an SSM parameter that contains the AMI ID, you must have access
   * 			to the AMI. The AMI must also be in the Region where you're creating
   * 			the recipe.</p>
   * @public
   */
  parentImage: string | undefined;

  /**
   * <p>The block device mappings that Image Builder applies to the build instance and the
   * 			output AMI. For example, you can override the size of the base image's
   * 			root volume or attach additional EBS volumes.</p>
   * @public
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;

  /**
   * <p>The tags of the image recipe.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The working directory used during build and test workflows. If you
   * 			don't specify a working directory, Image Builder uses <code>/tmp</code> for
   * 			Linux and macOS build instances, and <code>C:/</code> for Windows build
   * 			instances.</p>
   * @public
   */
  workingDirectory?: string | undefined;

  /**
   * <p>The additional settings and launch scripts for your build instances.</p>
   * @public
   */
  additionalInstanceConfiguration?: AdditionalInstanceConfiguration | undefined;

  /**
   * <p>Tags that are applied to the AMI that Image Builder creates during the Build phase
   * 			prior to image distribution.</p>
   * @public
   */
  amiTags?: Record<string, string> | undefined;

  /**
   * <p>The AMI watermark names to attach to the output AMI from this recipe.
   * 			AMI watermarks are lineage markers. They automatically propagate to
   * 			derivative AMIs when the source AMI is copied or distributed across
   * 			Regions or accounts.</p>
   *          <note>
   *             <p>AMI watermarks are supported only for image recipes. AMIs with
   * 				watermarks cannot be made public.</p>
   *          </note>
   * @public
   */
  amiWatermarks?: string[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a <code>DryRunOperationException</code> error response.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateImageRecipeResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that was created by this
   * 			request.</p>
   * @public
   */
  imageRecipeArn?: string | undefined;

  /**
   * <p>A set of wildcard version ARNs that always reference the latest
   * 			version of the resource. ARNs are included for the latest version overall, and for the latest
   * 			versions within the same major, minor, and patch levels.</p>
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * <p>The instance metadata service (IMDS) settings that Image Builder applies to the EC2
 * 			build and test instances it launches. These settings control how software
 * 			on those instances retrieves instance metadata and IAM role
 * 			credentials.</p>
 * @public
 */
export interface InstanceMetadataOptions {
  /**
   * <p>Indicates whether a signed token header is required for instance metadata retrieval
   * 			requests. The values affect the response as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>required</b> – When you retrieve the IAM
   * 					role credentials, version 2.0 credentials are returned in all cases.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>optional</b> – You can include a signed
   * 					token header in your request to retrieve instance metadata, or you can leave it
   * 					out. If you include it, version 2.0 credentials are returned for the IAM role.
   * 					Otherwise, version 1.0 credentials are returned.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't set a value, the EC2 launch default applies to the
   * 			build and test instances. That default depends on the base AMI and any
   * 			account-level instance metadata defaults. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the
   * 				<i>
   *                <i>Amazon EC2 User Guide</i>
   *             </i>.</p>
   * @public
   */
  httpTokens?: string | undefined;

  /**
   * <p>Limit the number of hops that an instance metadata request can traverse to
   * 			reach its destination. If you don't set a value, the EC2 launch default
   * 			for the instance applies. If HTTP tokens are required, container image
   * 			builds need a minimum of two hops.</p>
   * @public
   */
  httpPutResponseHopLimit?: number | undefined;
}

/**
 * <p>Amazon S3 logging configuration.</p>
 * @public
 */
export interface S3Logs {
  /**
   * <p>The name of an existing Amazon S3 bucket where Image Builder saves build logs. The bucket
   * 			isn't validated when you create or update the configuration, and Image Builder
   * 			doesn't create it. The instance profile associated with this
   * 			infrastructure configuration must have permission to write to the
   * 			bucket.</p>
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * <p>The Amazon S3 key prefix under which Image Builder writes build and test logs in the
   * 			bucket.</p>
   * @public
   */
  s3KeyPrefix?: string | undefined;
}

/**
 * <p>Logging configuration defines where Image Builder uploads your logs.</p>
 * @public
 */
export interface Logging {
  /**
   * <p>The Amazon S3 logging configuration.</p>
   * @public
   */
  s3Logs?: S3Logs | undefined;
}

/**
 * <p>By default, EC2 instances run on shared tenancy hardware. This means that multiple
 * 			Amazon Web Services accounts might share the same physical hardware. When you use dedicated hardware,
 * 			the physical server that hosts your instances is dedicated to your Amazon Web Services account.
 * 			Instance placement settings contain the details for the physical hardware where
 * 			instances that Image Builder launches during image creation will run.</p>
 * @public
 */
export interface Placement {
  /**
   * <p>The Availability Zone where your build and test instances will launch.</p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>The tenancy of the instance. An instance with a tenancy of <code>dedicated</code>
   * 			runs on single-tenant hardware. An instance with a tenancy of <code>host</code> runs
   * 			on a Dedicated Host.</p>
   *          <p>If tenancy is set to <code>host</code>, then you can optionally specify one target
   * 			for placement – either host ID or host resource group ARN. If automatic placement
   * 			is enabled for your host, and you don't specify any placement target, Amazon EC2 will try to
   * 			find an available host for your build and test instances.</p>
   * @public
   */
  tenancy?: TenancyType | undefined;

  /**
   * <p>The ID of the Dedicated Host on which build and test instances run. This only
   * 			applies if <code>tenancy</code> is <code>host</code>.</p>
   * @public
   */
  hostId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the host resource group in which to launch build and test instances.
   * 			This only applies if <code>tenancy</code> is <code>host</code>.</p>
   * @public
   */
  hostResourceGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateInfrastructureConfigurationRequest {
  /**
   * <p>The name of the infrastructure configuration. Infrastructure configuration
   * 			names must be unique to your account in each Amazon Web Services Region. Image Builder generates
   * 			the infrastructure configuration ARN from a normalized form of the name, so
   * 			names that differ only in case, spaces, or underscores count as the same
   * 			name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the infrastructure configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The instance types of the infrastructure configuration. You can specify one or more
   * 			instance types to use for this build. Image Builder picks one of these instance types
   * 			based on availability. If you don't specify instance types, Image Builder selects
   * 			compatible instance types automatically. If you specify a Dedicated Host,
   * 			Image Builder uses only instance types that the host supports.</p>
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * <p>The instance profile to associate with the instance used to customize your Amazon EC2
   * 			AMI. The instance profile must exist in your account.</p>
   * @public
   */
  instanceProfileName: string | undefined;

  /**
   * <p>The security group IDs to associate with the instance used to customize your Amazon EC2
   * 			AMI.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The subnet ID in which to place the instance used to customize your Amazon EC2
   * 			AMI. If you specify <code>subnetId</code>, you must also specify one or
   * 			more security group IDs in <code>securityGroupIds</code>. Otherwise, the
   * 			request fails.</p>
   * @public
   */
  subnetId?: string | undefined;

  /**
   * <p>The logging configuration of the infrastructure configuration. When you
   * 			configure S3 logs, Image Builder writes logs from the build and test process to the
   * 			specified bucket under the key prefix.</p>
   * @public
   */
  logging?: Logging | undefined;

  /**
   * <p>The key pair of the infrastructure configuration. You can use this to log on to and
   * 			debug the instance used to create your image.</p>
   * @public
   */
  keyPair?: string | undefined;

  /**
   * <p>Specifies whether to terminate the instance on failure. Set to
   * 			false if you want Image Builder to retain the instance used to configure your AMI if the build or
   * 			test phase of your workflow fails. Defaults to <code>true</code>.</p>
   * @public
   */
  terminateInstanceOnFailure?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic to which Image Builder sends image build event notifications.
   * 			Specify a standard topic. Image Builder doesn't support FIFO topics.
   * 			Image Builder validates the topic when you create or update the configuration. You
   * 			must have permission to publish to the topic.</p>
   *          <note>
   *             <p>EC2 Image Builder can't send notifications to SNS topics that are encrypted using keys
   * 				from other accounts. If your SNS topic is encrypted, the key must be owned by the
   * 				same account that owns your Image Builder resources.</p>
   *          </note>
   * @public
   */
  snsTopicArn?: string | undefined;

  /**
   * <p>The metadata tags to assign to the Amazon EC2 instance that Image Builder launches during
   * 			the build process. Tags are formatted as key value pairs. Tag keys can't
   * 			begin with <code>aws:</code> or match one of the following reserved keys: <code>CreatedBy</code>,
   * 			<code>Ec2ImageBuilderArn</code>, <code>Name</code>, or
   * 			<code>Tags</code>.</p>
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * <p>The instance metadata service (IMDS) settings that Image Builder applies to the EC2
   * 			build and test instances it launches during image creation. If you don't
   * 			set these options, the EC2 launch defaults for the instance apply. For more
   * 			information about instance metadata options, see one of the following
   * 			links:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the
   * 						<i>
   *                      <i>Amazon EC2 User Guide</i>
   *                   </i> for Linux instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the
   * 						<i>
   *                      <i>Amazon EC2 Windows Guide</i>
   *                   </i> for Windows instances.</p>
   *             </li>
   *          </ul>
   * @public
   */
  instanceMetadataOptions?: InstanceMetadataOptions | undefined;

  /**
   * <p>The metadata tags to assign to the infrastructure configuration resource that Image Builder
   * 			creates as output. Tags are formatted as key value pairs.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The instance placement settings that define where the build and test
   * 			instances that Image Builder launches during image creation run. These settings
   * 			don't affect instances that you launch from the output image.</p>
   * @public
   */
  placement?: Placement | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a <code>DryRunOperationException</code> error response.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateInfrastructureConfigurationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that was created by
   * 			this request.</p>
   * @public
   */
  infrastructureConfigurationArn?: string | undefined;
}

/**
 * <p>Specifies how the lifecycle policy should apply actions to selected resources.</p>
 * @public
 */
export interface LifecyclePolicyDetailActionIncludeResources {
  /**
   * <p>Specifies whether the lifecycle action should apply to distributed AMIs.</p>
   * @public
   */
  amis?: boolean | undefined;

  /**
   * <p>Specifies whether the lifecycle action should apply to snapshots associated with distributed AMIs.</p>
   * @public
   */
  snapshots?: boolean | undefined;

  /**
   * <p>Specifies whether the lifecycle action should apply to distributed containers.</p>
   * @public
   */
  containers?: boolean | undefined;
}

/**
 * <p>Contains the action configuration for a lifecycle policy rule: the action to
 * 			take, and which underlying resources the action extends to.</p>
 * @public
 */
export interface LifecyclePolicyDetailAction {
  /**
   * <p>Specifies the lifecycle action to take. <code>DELETE</code> deletes the
   * 			image resource and, with <code>includeResources</code>, also removes
   * 			distributed AMIs, snapshots, or container images. <code>DEPRECATE</code> and
   * 			<code>DISABLE</code> set the corresponding status on the image resource and,
   * 			if <code>includeResources.amis</code> is set, on its distributed AMIs.</p>
   * @public
   */
  type: LifecyclePolicyDetailActionType | undefined;

  /**
   * <p>Specifies which underlying resources the action extends to beyond the Image Builder
   * 			image resource itself: distributed AMIs, their snapshots, or distributed
   * 			container images. <code>DELETE</code> rules can include all three,
   * 			<code>DEPRECATE</code> and <code>DISABLE</code> rules can include AMIs only,
   * 			and you can only include snapshots together with AMIs.</p>
   * @public
   */
  includeResources?: LifecyclePolicyDetailActionIncludeResources | undefined;
}

/**
 * <p>Defines criteria to exclude AMIs from lifecycle actions based on the last
 * 			time they were used to launch an instance.</p>
 * @public
 */
export interface LifecyclePolicyDetailExclusionRulesAmisLastLaunched {
  /**
   * <p>The integer number of units for the time period. For example <code>6</code> (months).</p>
   * @public
   */
  value: number | undefined;

  /**
   * <p>Defines the unit of time that the lifecycle policy uses to calculate elapsed
   * 			time since the last launch.</p>
   * @public
   */
  unit: LifecyclePolicyTimeUnit | undefined;
}

/**
 * <p>Defines criteria for AMIs that are excluded from lifecycle actions.</p>
 * @public
 */
export interface LifecyclePolicyDetailExclusionRulesAmis {
  /**
   * <p>Configures whether public AMIs are excluded from the lifecycle action.</p>
   * @public
   */
  isPublic?: boolean | undefined;

  /**
   * <p>Configures Amazon Web Services Regions that are excluded from the lifecycle action.</p>
   * @public
   */
  regions?: string[] | undefined;

  /**
   * <p>The lifecycle action doesn't apply to AMIs that are shared with any of
   * 			the specified Amazon Web Services accounts.</p>
   * @public
   */
  sharedAccounts?: string[] | undefined;

  /**
   * <p>Configures Image Builder to exclude AMIs that were launched within the specified time
   * 			period from lifecycle actions. AMIs with no recorded last-launched time
   * 			aren't excluded by this rule.</p>
   * @public
   */
  lastLaunched?: LifecyclePolicyDetailExclusionRulesAmisLastLaunched | undefined;

  /**
   * <p>Lifecycle actions don't apply to AMIs that have any of these tags. Both
   * 			the key and the value must match.</p>
   * @public
   */
  tagMap?: Record<string, string> | undefined;
}

/**
 * <p>Specifies resources that lifecycle policy actions should not apply to.</p>
 * @public
 */
export interface LifecyclePolicyDetailExclusionRules {
  /**
   * <p>Contains a list of tags that Image Builder uses to skip lifecycle actions for Image Builder image
   * 			resources that have them.</p>
   * @public
   */
  tagMap?: Record<string, string> | undefined;

  /**
   * <p>Lists configuration values that apply to AMIs that Image Builder should exclude
   * 			from the lifecycle action.</p>
   * @public
   */
  amis?: LifecyclePolicyDetailExclusionRulesAmis | undefined;
}

/**
 * <p>Defines filters that the lifecycle policy uses to determine impacted resource.</p>
 * @public
 */
export interface LifecyclePolicyDetailFilter {
  /**
   * <p>Filter resources based on either <code>AGE</code> or <code>COUNT</code>.
   * 			You can only use the count filter with the <code>DELETE</code> action
   * 			type.</p>
   * @public
   */
  type: LifecyclePolicyDetailFilterType | undefined;

  /**
   * <p>The number of units for the time period or for the count. For example, a value of
   * 			<code>6</code> might refer to six months or six AMIs.</p>
   *          <note>
   *             <p>For count-based filters, this value represents the minimum number of resources
   * 				to keep on hand. If you have fewer resources than this number, the resource is
   * 				excluded from lifecycle actions.</p>
   *          </note>
   * @public
   */
  value: number | undefined;

  /**
   * <p>Defines the unit of time that the lifecycle policy uses to determine impacted
   * 			resources. This is required for age-based rules.</p>
   * @public
   */
  unit?: LifecyclePolicyTimeUnit | undefined;

  /**
   * <p>For age-based filters, this is the number of resources to keep on hand after the lifecycle
   * 			<code>DELETE</code> action is applied. Impacted resources are only deleted if you have more than
   * 			this number of resources. If you have fewer resources than this number, the impacted resource
   * 			is not deleted.</p>
   * @public
   */
  retainAtLeast?: number | undefined;
}

/**
 * <p>Defines one lifecycle policy rule: the action to take, the filter that
 * 			determines which resources the rule applies to, and optional exclusion
 * 			rules.</p>
 * @public
 */
export interface LifecyclePolicyDetail {
  /**
   * <p>Configuration details for the policy action.</p>
   * @public
   */
  action: LifecyclePolicyDetailAction | undefined;

  /**
   * <p>Specifies the resources that the lifecycle policy applies to.</p>
   * @public
   */
  filter: LifecyclePolicyDetailFilter | undefined;

  /**
   * <p>Additional rules to specify resources that should be exempt from policy actions.</p>
   * @public
   */
  exclusionRules?: LifecyclePolicyDetailExclusionRules | undefined;
}

/**
 * <p>Specifies an Image Builder recipe that the lifecycle policy uses for resource selection.</p>
 * @public
 */
export interface LifecyclePolicyResourceSelectionRecipe {
  /**
   * <p>The name of an Image Builder recipe that the lifecycle policy uses for resource selection.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the Image Builder recipe specified by the <code>name</code> field.</p>
   * @public
   */
  semanticVersion: string | undefined;
}

/**
 * <p>Resource selection criteria for the lifecycle policy. You must provide
 * 			exactly one selection criteria: either recipes or a tag map, not both.</p>
 * @public
 */
export interface LifecyclePolicyResourceSelection {
  /**
   * <p>A list of recipes that are used as selection criteria for the output
   * 			images that the lifecycle policy applies to.</p>
   * @public
   */
  recipes?: LifecyclePolicyResourceSelectionRecipe[] | undefined;

  /**
   * <p>A list of tags that are used as selection criteria for the Image Builder image
   * 			resources that the lifecycle policy applies to.</p>
   * @public
   */
  tagMap?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLifecyclePolicyRequest {
  /**
   * <p>The name of the lifecycle policy to create. Policy names must be unique to
   * 			your account in each Amazon Web Services Region. Image Builder generates the policy ARN from a
   * 			normalized form of the name, so names that differ only in case, spaces, or
   * 			underscores count as the same name. You can't change the name after
   * 			creation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Optional description for the lifecycle policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Indicates whether the lifecycle policy resource is enabled. If you don't
   * 			specify a status, it defaults to <code>ENABLED</code>. Only enabled policies
   * 			run on their schedule.</p>
   * @public
   */
  status?: LifecyclePolicyStatus | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to run
   * 			lifecycle actions. You must have permission to pass the role, and the
   * 			role's trust policy must allow the Image Builder service principal to assume it.</p>
   * @public
   */
  executionRole: string | undefined;

  /**
   * <p>The type of Image Builder resource that the lifecycle policy applies to. The resource
   * 			type determines the allowed rule actions: policies for AMI-based Image Builder images
   * 			support <code>DELETE</code>, <code>DEPRECATE</code>, and
   * 			<code>DISABLE</code>, and policies for container-based Image Builder images support
   * 			only <code>DELETE</code>. You can't
   * 			change the resource type after creation.</p>
   * @public
   */
  resourceType: LifecyclePolicyResourceType | undefined;

  /**
   * <p>Configuration details for the lifecycle policy rules. A policy can contain
   * 			at most one rule per action type: one <code>DELETE</code>, one
   * 			<code>DEPRECATE</code>, and one <code>DISABLE</code>.</p>
   * @public
   */
  policyDetails: LifecyclePolicyDetail[] | undefined;

  /**
   * <p>Selection criteria for the resources that the lifecycle policy applies to.
   * 			You must specify exactly one selection criteria: either recipes or a tag
   * 			map, not both.</p>
   * @public
   */
  resourceSelection: LifecyclePolicyResourceSelection | undefined;

  /**
   * <p>Tags to apply to the lifecycle policy resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a <code>DryRunOperationException</code> error response.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateLifecyclePolicyResponse {
  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle policy that the request created.</p>
   * @public
   */
  lifecyclePolicyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowRequest {
  /**
   * <p>The name of the workflow to create. Image Builder generates the workflow ARN from a
   * 			normalized form of the name, so names that differ only in case, spaces, or
   * 			underscores count as the same name. If a workflow with the same name and
   * 			semantic version already exists in your account in the same Amazon Web Services Region,
   * 			the request creates a new build version for it. If the content is also
   * 			identical to the latest build version, the request fails because the
   * 			workflow already exists.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The semantic version of this workflow resource. The semantic version syntax
   * 			adheres to the following rules.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes, you can assign any positive integer value, including
   * 	zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *          </note>
   * @public
   */
  semanticVersion: string | undefined;

  /**
   * <p>Describes the workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Describes what change has been made in this version of the workflow, or
   * 			what makes this version different from other versions of the workflow.</p>
   * @public
   */
  changeDescription?: string | undefined;

  /**
   * <p>The UTF-8 encoded YAML document content for the workflow, up to
   * 			16,000 characters. For larger documents, store the document in Amazon S3 and specify
   * 			the <code>uri</code> property instead. You must specify exactly one of the
   * 			<code>data</code> or <code>uri</code> properties.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The <code>uri</code> of a YAML workflow document file stored in Amazon S3. This must
   * 			be an S3 URL (<code>s3://bucket/key</code>), and you must have permission to
   * 			access the S3 bucket it points to. A workflow document that you provide from
   * 			Amazon S3 can be up to your service quota for workflow size.</p>
   *          <p>Alternatively, you can specify the YAML document inline, using the workflow
   * 			<code>data</code> property. You must specify exactly one of the <code>data</code>
   * 			or <code>uri</code> properties.</p>
   * @public
   */
  uri?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies the KMS key used to encrypt this workflow resource.
   * 			This can be either the Key ARN or the Alias ARN. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">Key identifiers (KeyId)</a>
   * 			in the <i>Key Management Service Developer Guide</i>. If you don't specify a key, Image Builder encrypts the workflow
   * 			document with a KMS key that Image Builder owns.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>Tags that apply to the workflow resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The image creation stage that this workflow applies to. Image Builder validates the
   * 			workflow document steps against the stage you specify.</p>
   * @public
   */
  type: WorkflowType | undefined;

  /**
   * <p>Validates the required permissions and request parameters without performing the operation. If validation succeeds, the operation returns a <code>DryRunOperationException</code> error response.</p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateWorkflowResponse {
  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workflow resource that the request created.</p>
   * @public
   */
  workflowBuildVersionArn?: string | undefined;

  /**
   * <p>A set of wildcard version ARNs that always reference the latest
   * 			version of the resource. ARNs are included for the latest version overall, and for the latest
   * 			versions within the same major, minor, and patch levels.</p>
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * <p>A CVSS score for the vulnerability, as published by the vulnerability
 * 			source. Sources include the National Vulnerability Database (NVD) and the
 * 			operating system vendor's security feed. A finding can include CVSS scores
 * 			from multiple sources and CVSS versions.</p>
 * @public
 */
export interface CvssScore {
  /**
   * <p>The CVSS base score.</p>
   * @public
   */
  baseScore?: number | undefined;

  /**
   * <p>The vector string of the CVSS score.</p>
   * @public
   */
  scoringVector?: string | undefined;

  /**
   * <p>The CVSS version that generated the score.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The source of the CVSS score.</p>
   * @public
   */
  source?: string | undefined;
}

/**
 * <p>Details about an adjustment that Amazon Inspector made to the CVSS score for a finding.</p>
 * @public
 */
export interface CvssScoreAdjustment {
  /**
   * <p>The metric that Amazon Inspector used to adjust the CVSS score.</p>
   * @public
   */
  metric?: string | undefined;

  /**
   * <p>The reason for the CVSS score adjustment.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>Details about the source of the score, and the factors that determined the adjustments
 * 			to create the final score.</p>
 * @public
 */
export interface CvssScoreDetails {
  /**
   * <p>The source for the CVSS score.</p>
   * @public
   */
  scoreSource?: string | undefined;

  /**
   * <p>The source of the CVSS data that the Amazon Inspector score for the finding is based
   * 			on, for example NVD or a vendor security feed.</p>
   * @public
   */
  cvssSource?: string | undefined;

  /**
   * <p>The CVSS version that generated the score.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The CVSS score.</p>
   * @public
   */
  score?: number | undefined;

  /**
   * <p>A vector that measures the severity of the vulnerability.</p>
   * @public
   */
  scoringVector?: string | undefined;

  /**
   * <p>The adjustments that Amazon Inspector applied to the base CVSS score to produce its own
   * 			score for the finding. The list is empty when Amazon Inspector made no
   * 			adjustments.</p>
   * @public
   */
  adjustments?: CvssScoreAdjustment[] | undefined;
}

/**
 * @public
 */
export interface DeleteComponentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the component build version to delete.</p>
   * @public
   */
  componentBuildVersionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteComponentResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the component build version that this request deleted.</p>
   * @public
   */
  componentBuildVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteContainerRecipeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe to delete.</p>
   * @public
   */
  containerRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteContainerRecipeResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe that was deleted.</p>
   * @public
   */
  containerRecipeArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDistributionConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration to delete.</p>
   * @public
   */
  distributionConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDistributionConfigurationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that was
   * 			deleted.</p>
   * @public
   */
  distributionConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Image Builder image resource to delete.</p>
   * @public
   */
  imageBuildVersionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Image Builder image resource that this request deleted.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteImagePipelineRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline to delete.</p>
   * @public
   */
  imagePipelineArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteImagePipelineResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that was deleted.</p>
   * @public
   */
  imagePipelineArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageRecipeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe to delete.</p>
   * @public
   */
  imageRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteImageRecipeResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that was deleted.</p>
   * @public
   */
  imageRecipeArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteInfrastructureConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration to delete.</p>
   * @public
   */
  infrastructureConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteInfrastructureConfigurationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that was
   * 			deleted.</p>
   * @public
   */
  infrastructureConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLifecyclePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle policy resource to delete.</p>
   * @public
   */
  lifecyclePolicyArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteLifecyclePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle policy that was deleted.</p>
   * @public
   */
  lifecyclePolicyArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow resource to delete.</p>
   * @public
   */
  workflowBuildVersionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow resource that this request deleted.</p>
   * @public
   */
  workflowBuildVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface DistributeImageRequest {
  /**
   * <p>The source image to distribute. You can specify the source in any of the
   * 			following formats:</p>
   *          <ul>
   *             <li>
   *                <p>An AMI ID.</p>
   *             </li>
   *             <li>
   *                <p>An Amazon Web Services Systems Manager Parameter Store reference, prefixed by
   * 					<code>ssm:</code>, followed by the parameter name or ARN.</p>
   *             </li>
   *             <li>
   *                <p>An Image Builder image Amazon Resource Name (ARN). An image version ARN resolves to the latest
   * 					available build version.</p>
   *             </li>
   *          </ul>
   *          <p>Whichever format you use, the source must resolve to an AMI in the current
   * 			Amazon Web Services Region.</p>
   * @public
   */
  sourceImage: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration. The configuration
   * 			defines target Regions, accounts, and AMI settings. The distribution
   * 			configuration must be in the same Region as this operation.</p>
   * @public
   */
  distributionConfigurationArn: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role that Image Builder assumes to distribute
   * 			the image.</p>
   * @public
   */
  executionRole: string | undefined;

  /**
   * <p>The tags to apply to the new Image Builder image resource that this operation
   * 			creates. To tag the output AMIs, use <code>amiTags</code> in the
   * 			distribution configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The logging configuration for the distribution.</p>
   * @public
   */
  loggingConfiguration?: ImageLoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface DistributeImageResponse {
  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the new Image Builder image resource that this operation creates to
   * 			track the distribution. Use this ARN with <a>GetImage</a> to
   * 			monitor distribution progress.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;
}

/**
 * <p>Defines how Image Builder distributes the output of an image build. You can
 * 			configure:</p>
 *          <ul>
 *             <li>
 *                <p>The Regions to distribute the image to.</p>
 *             </li>
 *             <li>
 *                <p>The Region-specific settings to apply, such as output AMI names,
 * 					launch permissions for other Amazon Web Services accounts, and target container
 * 					repositories.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface DistributionConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the distribution configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the distribution configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The distribution objects that apply Region-specific settings for the deployment of
   * 			the image to targeted Regions.</p>
   * @public
   */
  distributions?: Distribution[] | undefined;

  /**
   * <p>A property that Image Builder doesn't use. You can't set this property
   * 			when you create or update a distribution configuration, and it has no
   * 			effect on distribution behavior.</p>
   * @public
   */
  timeoutMinutes: number | undefined;

  /**
   * <p>The date on which this distribution configuration was created.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>The date on which this distribution configuration was last updated.</p>
   * @public
   */
  dateUpdated?: string | undefined;

  /**
   * <p>The tags of the distribution configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>A high-level overview of a distribution configuration.</p>
 * @public
 */
export interface DistributionConfigurationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the distribution configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the distribution configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date on which the distribution configuration was created.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>The date on which the distribution configuration was updated.</p>
   * @public
   */
  dateUpdated?: string | undefined;

  /**
   * <p>The tags associated with the distribution configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A list of the Regions that the distribution configuration distributes
   * 			images to.</p>
   * @public
   */
  regions?: string[] | undefined;
}

/**
 * <p>A filter name and value pair that is used to return a more specific list of results
 * 			from a list operation. Filters can be used to match a set of resources by specific
 * 			criteria, such as tags, attributes, or IDs.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The filter values. Filter values are case-sensitive.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface GetComponentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the component that you want to get. You can specify a build
   * 			version ARN, or a component version ARN. The version can use the
   * 			<code>x</code> wildcard in trailing positions, for example
   * 			<code>1.0.x</code> or <code>1.x.x</code>. Version ARNs resolve to the
   * 			latest available matching component build version.</p>
   * @public
   */
  componentBuildVersionArn: string | undefined;
}

/**
 * @public
 */
export interface GetComponentResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The component object specified in the request.</p>
   * @public
   */
  component?: Component | undefined;

  /**
   * <p>A set of wildcard version ARNs that always reference the latest
   * 			version of the resource. ARNs are included for the latest version overall, and for the latest
   * 			versions within the same major, minor, and patch levels.</p>
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * @public
 */
export interface GetComponentPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the component whose policy you want to
   * 			retrieve.</p>
   * @public
   */
  componentArn: string | undefined;
}

/**
 * @public
 */
export interface GetComponentPolicyResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The component policy.</p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetContainerRecipeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe to retrieve.</p>
   * @public
   */
  containerRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface GetContainerRecipeResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The container recipe object that is returned.</p>
   * @public
   */
  containerRecipe?: ContainerRecipe | undefined;

  /**
   * <p>A set of wildcard version ARNs that always reference the latest
   * 			version of the resource. ARNs are included for the latest version overall, and for the latest
   * 			versions within the same major, minor, and patch levels.</p>
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * @public
 */
export interface GetContainerRecipePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe for the policy being
   * 			requested.</p>
   * @public
   */
  containerRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface GetContainerRecipePolicyResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The resource policy for the container recipe, as a JSON policy document. If
   * 			no policy has been applied, the response contains an empty JSON object
   * 			(<code>\{\}</code>).</p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that you want to
   * 			retrieve.</p>
   * @public
   */
  distributionConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface GetDistributionConfigurationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The distribution configuration object.</p>
   * @public
   */
  distributionConfiguration?: DistributionConfiguration | undefined;
}

/**
 * @public
 */
export interface GetImageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image that you want to get. You can specify a full build
   * 			version ARN, or a version ARN with or without wildcards
   * 			(<code>x.x.x</code>, <code>1.x.x</code>, or <code>1.0.x</code>). A version or
   * 			wildcard ARN resolves to the latest matching build version that has reached
   * 			<code>AVAILABLE</code> status. Builds that were later deprecated, disabled,
   * 			or deleted don't resolve. To get an image in any other state, such as a
   * 			failed or in-progress build, specify the full build version ARN.</p>
   * @public
   */
  imageBuildVersionArn: string | undefined;
}

/**
 * <p>An image recipe.</p>
 * @public
 */
export interface ImageRecipe {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The output image type. For an image recipe, this is always AMI. Container
   * 			images are built from container recipes, a separate resource. This field
   * 			isn't currently returned in responses.</p>
   * @public
   */
  type?: ImageType | undefined;

  /**
   * <p>The name of the image recipe.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the image recipe.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The platform of the image recipe.</p>
   * @public
   */
  platform?: Platform | undefined;

  /**
   * <p>The owner of the image recipe.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>The version of the image recipe.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The components that are included in the image recipe. A recipe can contain a maximum of 20 build and test components
   * 			in any combination, by default. This maximum is an adjustable quota. For more information, see
   * 			<a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html">EC2 Image Builder endpoints and quotas</a>
   * 			in the <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  components?: ComponentConfiguration[] | undefined;

  /**
   * <p>The base image for customizations specified in the image recipe. You can specify the
   * 			parent image using one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>AMI ID</p>
   *             </li>
   *             <li>
   *                <p>Image Builder image Amazon Resource Name (ARN)</p>
   *             </li>
   *             <li>
   *                <p>Amazon Web Services Systems Manager (SSM) Parameter Store Parameter, prefixed by <code>ssm:</code>,
   * 					followed by the parameter name or ARN.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Web Services Marketplace product ID</p>
   *             </li>
   *          </ul>
   * @public
   */
  parentImage?: string | undefined;

  /**
   * <p>The block device mappings to apply when creating images from this recipe.</p>
   * @public
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[] | undefined;

  /**
   * <p>The date on which this image recipe was created.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>The tags of the image recipe.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The working directory used during build and test workflows. If you
   * 			don't specify a working directory, Image Builder uses <code>/tmp</code> for
   * 			Linux and macOS build instances, and <code>C:/</code> for Windows build
   * 			instances.</p>
   * @public
   */
  workingDirectory?: string | undefined;

  /**
   * <p>Before you create a new AMI, Image Builder launches temporary Amazon EC2 instances to build and test
   * 			your image configuration. Instance configuration adds a layer of control over those
   * 			instances. You can define settings and add scripts to run when Image Builder launches
   * 			your build instance.</p>
   * @public
   */
  additionalInstanceConfiguration?: AdditionalInstanceConfiguration | undefined;

  /**
   * <p>Tags that are applied to the AMI that Image Builder creates during the Build phase
   * 			prior to image distribution.</p>
   * @public
   */
  amiTags?: Record<string, string> | undefined;

  /**
   * <p>The AMI watermark names attached to the output AMI from this recipe.
   * 			AMI watermarks are lineage markers that automatically propagate to
   * 			derivative AMIs when the source AMI is copied or distributed.</p>
   * @public
   */
  amiWatermarks?: string[] | undefined;
}

/**
 * <p>Details of the infrastructure configuration.</p>
 * @public
 */
export interface InfrastructureConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the infrastructure configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the infrastructure configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The instance types of the infrastructure configuration.</p>
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * <p>The instance profile of the infrastructure configuration.</p>
   * @public
   */
  instanceProfileName?: string | undefined;

  /**
   * <p>The security group IDs of the infrastructure configuration.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The subnet ID of the infrastructure configuration.</p>
   * @public
   */
  subnetId?: string | undefined;

  /**
   * <p>The logging configuration of the infrastructure configuration. When you
   * 			configure S3 logs, Image Builder writes logs from the build and test process to the
   * 			specified bucket under the key prefix.</p>
   * @public
   */
  logging?: Logging | undefined;

  /**
   * <p>The Amazon EC2 key pair of the infrastructure configuration.</p>
   * @public
   */
  keyPair?: string | undefined;

  /**
   * <p>Indicates whether Image Builder terminates the build and test instances when the image
   * 			build fails. When <code>false</code>, Image Builder retains the instance so that you
   * 			can debug it.</p>
   * @public
   */
  terminateInstanceOnFailure?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic to which Image Builder
   * 			sends image build event notifications. Specify a standard topic. Image Builder doesn't support FIFO
   * 			topics.</p>
   *          <note>
   *             <p>EC2 Image Builder can't send notifications to SNS topics that are encrypted using keys
   * 				from other accounts. If your SNS topic is encrypted, the key must be owned by the
   * 				same account that owns your Image Builder resources.</p>
   *          </note>
   * @public
   */
  snsTopicArn?: string | undefined;

  /**
   * <p>The date on which the infrastructure configuration was created.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>The date on which the infrastructure configuration was last updated.</p>
   * @public
   */
  dateUpdated?: string | undefined;

  /**
   * <p>The metadata tags assigned to the Amazon EC2 build and test instances that Image Builder
   * 			launches during image creation.</p>
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * <p>The instance metadata option settings for the infrastructure configuration.</p>
   * @public
   */
  instanceMetadataOptions?: InstanceMetadataOptions | undefined;

  /**
   * <p>The tags of the infrastructure configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The instance placement settings that define where the build and test
   * 			instances that Image Builder launches during image creation run. These settings
   * 			don't affect instances that you launch from the output image.</p>
   * @public
   */
  placement?: Placement | undefined;
}

/**
 * <p>The resources produced by this image.</p>
 * @public
 */
export interface OutputResources {
  /**
   * <p>The Amazon EC2 AMIs created by this image. The list contains one entry per
   * 			AMI, including copies that distribution created in each target
   * 			Amazon Web Services Region and account.</p>
   * @public
   */
  amis?: Ami[] | undefined;

  /**
   * <p>The container images that Image Builder created when it built this image, stored in
   * 			the output Amazon ECR repository.</p>
   * @public
   */
  containers?: Container[] | undefined;
}

/**
 * <p>Shows the vulnerability scan status for a specific image, and the reason for that
 * 			status.</p>
 * @public
 */
export interface ImageScanState {
  /**
   * <p>The current state of vulnerability scans for the image. The scan starts as
   * 			<code>PENDING</code> and moves through <code>SCANNING</code> and
   * 			<code>COLLECTING</code> to <code>COMPLETED</code>. Image Builder sets the status to
   * 			<code>ABANDONED</code> if the image reaches a terminal state before the scan
   * 			finding collection completes. A scan can also end as <code>FAILED</code> or
   * 			<code>TIMED_OUT</code>.</p>
   * @public
   */
  status?: ImageScanStatus | undefined;

  /**
   * <p>The reason for the scan status for the image.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>An Image Builder image resource that keeps track of all of the settings used to create,
 * 			configure, and distribute output for that image. An image that Image Builder built
 * 			from a recipe contains exactly one recipe – either a container recipe
 * 			(<code>containerRecipe</code>), which creates a container image, or an image
 * 			recipe (<code>imageRecipe</code>), which creates an AMI. Imported images
 * 			don't contain a recipe.</p>
 * @public
 */
export interface Image {
  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   *          <note>
   *             <p>Semantic versioning is included in each object's Amazon Resource Name (ARN),
   * 	at the level that applies to that object as follows:</p>
   *             <ol>
   *                <li>
   *                   <p>Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are
   * 				either left off entirely, or they are specified as wildcards, for example: x.x.x.</p>
   *                </li>
   *                <li>
   *                   <p>Version ARNs have only the first three nodes: <major>.<minor>.<patch></p>
   *                </li>
   *                <li>
   *                   <p>Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.</p>
   *                </li>
   *             </ol>
   *          </note>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Specifies whether this image produces an AMI or a container image.</p>
   * @public
   */
  type?: ImageType | undefined;

  /**
   * <p>The name of the image.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The semantic version of the image.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes, you can assign any positive integer value, including
   * 	zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *             <p>
   *                <b>Filtering:</b> You can use wildcards (x) to specify the most recent versions or nodes when
   * 	selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes
   * 	to the right of the first wildcard must also be wildcards.</p>
   *          </note>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The image operating system platform, such as Linux or Windows.</p>
   * @public
   */
  platform?: Platform | undefined;

  /**
   * <p>Indicates whether Image Builder collects additional information about the image, such as
   * 			the operating system (OS) version and package list.</p>
   * @public
   */
  enhancedImageMetadataEnabled?: boolean | undefined;

  /**
   * <p>The operating system version for instances that launch from this image. For example,
   * 			Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.</p>
   * @public
   */
  osVersion?: string | undefined;

  /**
   * <p>The state of the image.</p>
   * @public
   */
  state?: ImageState | undefined;

  /**
   * <p>For images that distribute an AMI, this is the image recipe that Image Builder used to
   * 			create the image. For container images, this is empty.</p>
   * @public
   */
  imageRecipe?: ImageRecipe | undefined;

  /**
   * <p>For container images, this is the container recipe that Image Builder used to create the
   * 			image. For images that distribute an AMI, this is empty.</p>
   * @public
   */
  containerRecipe?: ContainerRecipe | undefined;

  /**
   * <p>The name of the image pipeline that created this image. Image Builder doesn't return
   * 			this field for new images. Use <code>sourcePipelineArn</code> instead.</p>
   * @public
   */
  sourcePipelineName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that created this image. This field is only
   * 			present for images that a pipeline execution created.</p>
   * @public
   */
  sourcePipelineArn?: string | undefined;

  /**
   * <p>The infrastructure that Image Builder used to create this image.</p>
   * @public
   */
  infrastructureConfiguration?: InfrastructureConfiguration | undefined;

  /**
   * <p>The distribution configuration that Image Builder used to create this image.</p>
   * @public
   */
  distributionConfiguration?: DistributionConfiguration | undefined;

  /**
   * <p>The image test settings that Image Builder used when it created this image.</p>
   * @public
   */
  imageTestsConfiguration?: ImageTestsConfiguration | undefined;

  /**
   * <p>The date on which Image Builder created this image.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>The output resources that Image Builder produces for this image.</p>
   * @public
   */
  outputResources?: OutputResources | undefined;

  /**
   * <p>The tags that apply to this image.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Indicates the type of build that created this image. The build can be initiated in the
   * 			following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>USER_INITIATED</b> – A manual
   * 					pipeline build request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SCHEDULED</b> – A pipeline build
   * 					initiated by a cron expression in the Image Builder pipeline, or from EventBridge.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IMPORT</b> – A VM import created
   * 					the image to use as the base image for the recipe.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IMPORT_ISO</b> – An ISO disk import created
   * 					the image.</p>
   *             </li>
   *          </ul>
   * @public
   */
  buildType?: BuildType | undefined;

  /**
   * <p>The origin of the base image that Image Builder used to build this image.</p>
   * @public
   */
  imageSource?: ImageSource | undefined;

  /**
   * <p>Contains information about the current state of scans for this image.</p>
   * @public
   */
  scanState?: ImageScanState | undefined;

  /**
   * <p>Settings for the vulnerability scans that Amazon Inspector runs for this
   * 			image. For AMI output, Amazon Inspector scans the test instance during image creation.
   * 			For container output, Amazon Inspector scans the container image in its Amazon ECR
   * 			repository.</p>
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * <p>The time when deprecation occurs for an image resource. This can be a past or future date.</p>
   * @public
   */
  deprecationTime?: Date | undefined;

  /**
   * <p>Identifies the last runtime instance of the lifecycle policy to take action on the image.</p>
   * @public
   */
  lifecycleExecutionId?: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) for the IAM role you create that grants
   * 			Image Builder access to perform workflow actions.</p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>The build, test, and distribution workflow configurations that are
   * 			associated with the image.</p>
   * @public
   */
  workflows?: WorkflowConfiguration[] | undefined;

  /**
   * <p>The logging configuration that's defined for the image. Image Builder uses the defined settings
   * 			to direct execution log output during image creation.</p>
   * @public
   */
  loggingConfiguration?: ImageLoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface GetImageResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The image object.</p>
   * @public
   */
  image?: Image | undefined;

  /**
   * <p>A set of wildcard version ARNs that always reference the latest
   * 			version of the resource. ARNs are included for the latest version overall, and for the latest
   * 			versions within the same major, minor, and patch levels.</p>
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * @public
 */
export interface GetImagePipelineRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that you want to retrieve.</p>
   * @public
   */
  imagePipelineArn: string | undefined;
}

/**
 * <p>Defines the automation configuration for building, testing, and
 * 			distributing images. A pipeline references the resources that its builds
 * 			use, such as the recipe and infrastructure configuration. It also holds
 * 			the settings that control its builds, such as the schedule and custom
 * 			workflows.</p>
 * @public
 */
export interface ImagePipeline {
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the image pipeline.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the image pipeline.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The platform of the image pipeline, inherited from the recipe that the
   * 			pipeline uses.</p>
   * @public
   */
  platform?: Platform | undefined;

  /**
   * <p>Specifies whether to collect additional information about the image being created, including the operating
   * 			system (OS) version and package list. Defaults to <code>true</code>.</p>
   * @public
   */
  enhancedImageMetadataEnabled?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe associated with this image
   * 			pipeline.</p>
   * @public
   */
  imageRecipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe that is used for this
   * 			pipeline.</p>
   * @public
   */
  containerRecipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration associated with
   * 			this image pipeline.</p>
   * @public
   */
  infrastructureConfigurationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration associated with this
   * 			image pipeline.</p>
   * @public
   */
  distributionConfigurationArn?: string | undefined;

  /**
   * <p>The image tests configuration of the image pipeline.</p>
   * @public
   */
  imageTestsConfiguration?: ImageTestsConfiguration | undefined;

  /**
   * <p>The schedule of the image pipeline.</p>
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * <p>The status of the image pipeline. A disabled pipeline doesn't run on its
   * 			schedule, but you can still start builds manually. Image Builder can also disable a
   * 			pipeline automatically when consecutive scheduled builds fail.</p>
   * @public
   */
  status?: PipelineStatus | undefined;

  /**
   * <p>The date on which this image pipeline was created.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>The date on which this image pipeline was last updated.</p>
   * @public
   */
  dateUpdated?: string | undefined;

  /**
   * <p>The date on which this image pipeline was last run.</p>
   * @public
   */
  dateLastRun?: string | undefined;

  /**
   * <p>The status of the last image that this pipeline built, such as
   * 			<code>BUILDING</code>, <code>TESTING</code>, <code>FAILED</code>,
   * 			or <code>AVAILABLE</code>.</p>
   * @public
   */
  lastRunStatus?: ImageStatus | undefined;

  /**
   * <p>The next date when the pipeline is scheduled to run.</p>
   * @public
   */
  dateNextRun?: string | undefined;

  /**
   * <p>The tags of this image pipeline.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Contains settings for vulnerability scans that Amazon Inspector runs against the test instance
   * 			during image creation.</p>
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * <p>The tags that Image Builder applies to the Image Builder image resource that this
   * 			pipeline's scheduled executions create. These tags don't apply to the
   * 			output AMI. Builds that you start manually use the tags from the
   * 			<a href="https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_StartImagePipelineExecution.html">StartImagePipelineExecution</a> request instead.</p>
   * @public
   */
  imageTags?: Record<string, string> | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) for the IAM role you create that grants
   * 			Image Builder access to perform workflow actions.</p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>Contains the workflows that run for the image pipeline.</p>
   * @public
   */
  workflows?: WorkflowConfiguration[] | undefined;

  /**
   * <p>The CloudWatch Logs configuration for the pipeline: the log group for
   * 			image build logs and the log group for pipeline execution logs.</p>
   * @public
   */
  loggingConfiguration?: PipelineLoggingConfiguration | undefined;

  /**
   * <p>Image Builder tracks the number of consecutive failures for scheduled pipeline
   * 			executions and takes one of the following actions each time it runs on a schedule:</p>
   *          <ul>
   *             <li>
   *                <p>If the pipeline execution is successful, the number of consecutive
   * 					failures resets to zero.</p>
   *             </li>
   *             <li>
   *                <p>If the pipeline execution fails, Image Builder increments the number of
   * 					consecutive failures. If the failure count reaches the limit defined in the
   * 					<a>AutoDisablePolicy</a>, Image Builder disables the pipeline.</p>
   *             </li>
   *          </ul>
   *          <p>The consecutive failure count is also reset to zero under the following
   * 			conditions:</p>
   *          <ul>
   *             <li>
   *                <p>The pipeline runs manually and succeeds.</p>
   *             </li>
   *             <li>
   *                <p>The pipeline configuration is updated.</p>
   *             </li>
   *          </ul>
   *          <p>If the pipeline runs manually and fails, the count remains the same. The next
   * 			scheduled run continues to increment where it left off before.</p>
   * @public
   */
  consecutiveFailures?: number | undefined;
}

/**
 * @public
 */
export interface GetImagePipelineResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The image pipeline object.</p>
   * @public
   */
  imagePipeline?: ImagePipeline | undefined;
}

/**
 * @public
 */
export interface GetImagePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image whose policy you want to retrieve.</p>
   * @public
   */
  imageArn: string | undefined;
}

/**
 * @public
 */
export interface GetImagePolicyResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The resource policy for the image, as a JSON policy document. If the image
   * 			has no policy applied, the response contains an empty JSON object
   * 			(<code>\{\}</code>).</p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetImageRecipeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that you want to retrieve. You can use the
   * 			<code>x</code> wildcard in trailing version positions to retrieve the latest
   * 			matching version, for example <code>x.x.x</code> or <code>1.x.x</code>.</p>
   * @public
   */
  imageRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface GetImageRecipeResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The image recipe object.</p>
   * @public
   */
  imageRecipe?: ImageRecipe | undefined;

  /**
   * <p>A set of wildcard version ARNs that always reference the latest
   * 			version of the resource. ARNs are included for the latest version overall, and for the latest
   * 			versions within the same major, minor, and patch levels.</p>
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * @public
 */
export interface GetImageRecipePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe whose policy you want to
   * 			retrieve.</p>
   * @public
   */
  imageRecipeArn: string | undefined;
}

/**
 * @public
 */
export interface GetImageRecipePolicyResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The resource policy for the image recipe, as a JSON policy document. If no
   * 			policy has been applied, the response contains an empty JSON object
   * 			(<code>\{\}</code>).</p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * <p>GetInfrastructureConfiguration request object.</p>
 * @public
 */
export interface GetInfrastructureConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that you want to
   * 			retrieve.</p>
   * @public
   */
  infrastructureConfigurationArn: string | undefined;
}

/**
 * <p>GetInfrastructureConfiguration response object.</p>
 * @public
 */
export interface GetInfrastructureConfigurationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The infrastructure configuration object.</p>
   * @public
   */
  infrastructureConfiguration?: InfrastructureConfiguration | undefined;
}

/**
 * @public
 */
export interface GetLifecycleExecutionRequest {
  /**
   * <p>The unique identifier for a runtime instance of the lifecycle policy.</p>
   * @public
   */
  lifecycleExecutionId: string | undefined;
}

/**
 * <p>Contains an indicator that shows whether the lifecycle execution identified
 * 			any resources to take lifecycle actions on.</p>
 * @public
 */
export interface LifecycleExecutionResourcesImpactedSummary {
  /**
   * <p>Indicates whether the lifecycle execution identified any resources to take
   * 			lifecycle actions on.</p>
   * @public
   */
  hasImpactedResources?: boolean | undefined;
}

/**
 * <p>The current state of the runtime instance of the lifecycle policy.</p>
 * @public
 */
export interface LifecycleExecutionState {
  /**
   * <p>The runtime status of the lifecycle execution.</p>
   * @public
   */
  status?: LifecycleExecutionStatus | undefined;

  /**
   * <p>The reason for the current status.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>Contains metadata from a runtime instance of a lifecycle policy.</p>
 * @public
 */
export interface LifecycleExecution {
  /**
   * <p>Identifies the lifecycle policy runtime instance.</p>
   * @public
   */
  lifecycleExecutionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle policy that ran.</p>
   * @public
   */
  lifecyclePolicyArn?: string | undefined;

  /**
   * <p>A summary flag that indicates whether the lifecycle execution identified any
   * 			resources to take lifecycle actions on.</p>
   * @public
   */
  resourcesImpactedSummary?: LifecycleExecutionResourcesImpactedSummary | undefined;

  /**
   * <p>Runtime state that reports whether the lifecycle execution is in progress,
   * 			succeeded, or failed.</p>
   * @public
   */
  state?: LifecycleExecutionState | undefined;

  /**
   * <p>The timestamp when the lifecycle runtime instance started.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The timestamp when the lifecycle runtime instance completed.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetLifecycleExecutionResponse {
  /**
   * <p>Runtime details for the specified runtime instance of the lifecycle policy.</p>
   * @public
   */
  lifecycleExecution?: LifecycleExecution | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyRequest {
  /**
   * <p>Specifies the Amazon Resource Name (ARN) of the image lifecycle policy resource to get.</p>
   * @public
   */
  lifecyclePolicyArn: string | undefined;
}

/**
 * <p>Defines a lifecycle policy resource: its identity, status, execution role,
 * 			resource type, rules, resource selection, timestamps, and tags.</p>
 * @public
 */
export interface LifecyclePolicy {
  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle policy resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the lifecycle policy.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Optional description for the lifecycle policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Indicates whether the lifecycle policy resource is enabled. Only enabled
   * 			policies run on their schedule. Disabling or deleting a policy removes its
   * 			schedule and cancels any in-flight lifecycle execution.</p>
   * @public
   */
  status?: LifecyclePolicyStatus | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role that Image Builder uses to run the lifecycle policy.
   * 			This is a custom role that you create.</p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>The type of resources the lifecycle policy targets.</p>
   * @public
   */
  resourceType?: LifecyclePolicyResourceType | undefined;

  /**
   * <p>The list of rules for the lifecycle policy. Each rule pairs an action with a
   * 			filter and optional exclusion rules. A policy can contain at most one rule
   * 			per action type.</p>
   * @public
   */
  policyDetails?: LifecyclePolicyDetail[] | undefined;

  /**
   * <p>Resource selection criteria used to run the lifecycle policy.</p>
   * @public
   */
  resourceSelection?: LifecyclePolicyResourceSelection | undefined;

  /**
   * <p>The timestamp when Image Builder created the lifecycle policy resource.</p>
   * @public
   */
  dateCreated?: Date | undefined;

  /**
   * <p>The timestamp when Image Builder updated the lifecycle policy resource.</p>
   * @public
   */
  dateUpdated?: Date | undefined;

  /**
   * <p>The timestamp for the last time Image Builder ran the lifecycle policy.</p>
   * @public
   */
  dateLastRun?: Date | undefined;

  /**
   * <p>To help manage your lifecycle policy resources, you can assign your own
   * 			metadata to each resource in the form of tags. Each tag consists of a key and
   * 			an optional value, both of which you define.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyResponse {
  /**
   * <p>The details of the lifecycle policy that the request retrieved.</p>
   * @public
   */
  lifecyclePolicy?: LifecyclePolicy | undefined;
}

/**
 * @public
 */
export interface GetMarketplaceResourceRequest {
  /**
   * <p>Specifies which type of Amazon Web Services Marketplace resource Image Builder retrieves.</p>
   * @public
   */
  resourceType: MarketplaceResourceType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an Amazon Web Services Marketplace resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The Amazon S3 location of the component artifact to retrieve, in
   * 			<code>s3://bucket/key</code> form.</p>
   * @public
   */
  resourceLocation?: string | undefined;
}

/**
 * @public
 */
export interface GetMarketplaceResourceResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the Amazon Web Services Marketplace resource that was requested.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>A time-limited presigned URL for downloading the component artifact from
   * 			Amazon S3.</p>
   * @public
   */
  url?: string | undefined;

  /**
   * <p>Returns obfuscated data that contains the YAML content of the component.</p>
   * @public
   */
  data?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow resource that you want to get. You can specify a
   * 			build version ARN, or a version ARN with or without wildcards (<code>x</code>)
   * 			in its version segments. Image Builder resolves version and wildcard ARNs to the most
   * 			recent matching build version.</p>
   * @public
   */
  workflowBuildVersionArn: string | undefined;
}

/**
 * <p>Defines a parameter that's used to provide configuration details for the
 * 			workflow.</p>
 * @public
 */
export interface WorkflowParameterDetail {
  /**
   * <p>The name of this input parameter.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of input this parameter provides. Supported values are
   * 			<code>string</code>, <code>integer</code>, <code>boolean</code>, and
   * 			<code>stringList</code>.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The default value of this parameter if no input is provided.</p>
   * @public
   */
  defaultValue?: string[] | undefined;

  /**
   * <p>Describes this parameter.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>A group of fields that describe the current status of the workflow.</p>
 * @public
 */
export interface WorkflowState {
  /**
   * <p>The current state of the workflow.</p>
   * @public
   */
  status?: WorkflowStatus | undefined;

  /**
   * <p>Describes how or why the workflow changed state.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>Defines a process that Image Builder runs during the build, test, or distribution
 * 			stage of the image creation process.</p>
 * @public
 */
export interface Workflow {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the workflow resource.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The workflow resource version. Workflow resources are immutable.
   * 			To make a change, you can clone a workflow or create a new version.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The description of the workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Describes what change has been made in this version of the workflow, or
   * 			what makes this version different from other versions of the workflow.</p>
   * @public
   */
  changeDescription?: string | undefined;

  /**
   * <p>The image creation stage that the workflow applies to.</p>
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * <p>Describes the current status of the workflow and the reason for
   * 			that status.</p>
   * @public
   */
  state?: WorkflowState | undefined;

  /**
   * <p>The owner of the workflow resource.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>Contains the YAML document content for the workflow.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The KMS key identifier used to encrypt the workflow resource. This can be either the Key ARN or the Alias ARN. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">Key identifiers (KeyId)</a>
   * 			in the <i>Key Management Service Developer Guide</i>.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The timestamp when Image Builder created the workflow resource.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>The tags that apply to the workflow resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>An array of input parameters that the image workflow uses
   * 			to control actions or configure settings.</p>
   * @public
   */
  parameters?: WorkflowParameterDetail[] | undefined;
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * <p>The workflow resource specified in the request.</p>
   * @public
   */
  workflow?: Workflow | undefined;

  /**
   * <p>A set of wildcard version ARNs that always reference the latest
   * 			version of the resource. ARNs are included for the latest version overall, and for the latest
   * 			versions within the same major, minor, and patch levels.</p>
   * @public
   */
  latestVersionReferences?: LatestVersionReferences | undefined;
}

/**
 * @public
 */
export interface GetWorkflowExecutionRequest {
  /**
   * <p>Use the unique identifier for a runtime instance of the workflow to get
   * 			runtime details.</p>
   * @public
   */
  workflowExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowExecutionResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the build version for the Image Builder workflow resource
   * 			that defines the specified runtime instance of the workflow.</p>
   * @public
   */
  workflowBuildVersionArn?: string | undefined;

  /**
   * <p>The unique identifier that Image Builder assigned to keep track of runtime details
   * 			when it ran the workflow.</p>
   * @public
   */
  workflowExecutionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image build version that owns the specified runtime
   * 			instance of the workflow.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * <p>The type of workflow that Image Builder ran for the specified runtime instance of the workflow.</p>
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * <p>The current runtime status for the specified runtime instance of the workflow.
   * 			<code>COMPLETED</code>, <code>FAILED</code>, <code>ROLLBACK_COMPLETED</code>,
   * 			<code>CANCELLED</code>, and <code>SKIPPED</code> are terminal states.</p>
   * @public
   */
  status?: WorkflowExecutionStatus | undefined;

  /**
   * <p>The output message from the specified runtime instance of the workflow, if applicable.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The total number of steps that the workflow document defines for this runtime
   * 			instance of the workflow. Image Builder sets this count before any steps run. The sum of
   * 			succeeded, skipped, and failed steps only reaches this total if every step
   * 			finishes in one of those states.</p>
   * @public
   */
  totalStepCount?: number | undefined;

  /**
   * <p>A runtime count for the number of steps that ran successfully in the specified runtime
   * 			instance of the workflow.</p>
   * @public
   */
  totalStepsSucceeded?: number | undefined;

  /**
   * <p>A runtime count for the number of steps that failed in the specified runtime instance
   * 			of the workflow.</p>
   * @public
   */
  totalStepsFailed?: number | undefined;

  /**
   * <p>A runtime count for the number of steps that were skipped in the specified runtime
   * 			instance of the workflow.</p>
   * @public
   */
  totalStepsSkipped?: number | undefined;

  /**
   * <p>The timestamp when the specified runtime instance of the workflow started.</p>
   * @public
   */
  startTime?: string | undefined;

  /**
   * <p>The timestamp when the specified runtime instance of the workflow finished.</p>
   * @public
   */
  endTime?: string | undefined;

  /**
   * <p>The name of the parallel group that this runtime instance of the workflow
   * 			ran in, if configured. Parallel groups apply only to test workflows.</p>
   * @public
   */
  parallelGroup?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowStepExecutionRequest {
  /**
   * <p>The unique identifier for the runtime instance of the workflow step that you
   * 			want to get runtime details for. To get the identifiers for the steps that ran
   * 			in a workflow, call <a>ListWorkflowStepExecutions</a>.</p>
   * @public
   */
  stepExecutionId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowStepExecutionResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The unique identifier for the runtime instance of the workflow step that you specified
   * 			in the request.</p>
   * @public
   */
  stepExecutionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the build version for the Image Builder workflow resource
   * 			that defines this workflow step.</p>
   * @public
   */
  workflowBuildVersionArn?: string | undefined;

  /**
   * <p>The unique identifier that Image Builder assigned to keep track of runtime details
   * 			when it ran the workflow.</p>
   * @public
   */
  workflowExecutionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image build version that owns the specified runtime
   * 			instance of the workflow step.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * <p>The name of the specified runtime instance of the workflow step.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Describes the specified workflow step.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The name of the action that the specified step performs.</p>
   * @public
   */
  action?: string | undefined;

  /**
   * <p>The current status for the specified runtime instance of the workflow step.</p>
   * @public
   */
  status?: WorkflowStepExecutionStatus | undefined;

  /**
   * <p>Reports on the rollback status of the specified runtime instance of the
   * 			workflow step, if applicable. Rollback runs when the workflow execution fails,
   * 			and undoes the work that completed steps performed.</p>
   * @public
   */
  rollbackStatus?: WorkflowStepExecutionRollbackStatus | undefined;

  /**
   * <p>The output message from the specified runtime instance of the workflow step, if applicable.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>Input parameters that Image Builder provided for the specified runtime instance of
   * 			the workflow step, as a JSON-encoded string.</p>
   * @public
   */
  inputs?: string | undefined;

  /**
   * <p>The output values that the specified runtime instance of the workflow step
   * 			produced, as a JSON-encoded string. For example, a step that launches an
   * 			instance outputs the instance ID. If the step failed, this field contains the
   * 			error message.</p>
   * @public
   */
  outputs?: string | undefined;

  /**
   * <p>The timestamp when the specified runtime instance of the workflow step started.</p>
   * @public
   */
  startTime?: string | undefined;

  /**
   * <p>The timestamp when the specified runtime instance of the workflow step finished.</p>
   * @public
   */
  endTime?: string | undefined;

  /**
   * <p>The action that the workflow takes if this step fails, as configured in the
   * 			workflow document. <code>Abort</code> fails the workflow and rolls back
   * 			completed steps. <code>Continue</code> proceeds to the next step. If the
   * 			step doesn't set a value, it defaults to <code>Abort</code>.</p>
   * @public
   */
  onFailure?: string | undefined;

  /**
   * <p>The maximum duration in seconds for this step to complete its action. If the
   * 			workflow document doesn't set a timeout for the step, Image Builder applies the
   * 			default timeout for the step's action. This field returns that value.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * <p>The current attempt number for the specified runtime instance of the workflow
   * 			step. The first run is attempt one. The number increases by one for each retry.</p>
   * @public
   */
  attemptNumber?: number | undefined;

  /**
   * <p>The maximum number of attempts allowed for the specified runtime instance of
   * 			the workflow step, based on the retry configuration in the workflow document.
   * 			If the step doesn't configure retries, the maximum is one attempt.</p>
   * @public
   */
  maxAttempts?: number | undefined;
}

/**
 * <p>Contains vulnerability counts for a specific image.</p>
 * @public
 */
export interface ImageAggregation {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the image for this aggregation.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * <p>Counts by severity level for medium severity and higher level findings, plus a total
   * 			for all of the findings for the specified image.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;
}

/**
 * @public
 */
export interface ImportComponentRequest {
  /**
   * <p>The name of the component. Image Builder generates the component ARN from a
   * 			normalized form of the name, so names that differ only in case, spaces, or
   * 			underscores count as the same name. If a component with the same name and
   * 			semantic version already exists in your account in the same Amazon Web Services Region,
   * 			the request creates a new build version for it. If the content is also
   * 			identical to the latest build version, the request fails because the
   * 			component already exists.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The semantic version of the component. This version follows the semantic version
   * 			syntax.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes, you can assign any positive integer value, including
   * 	zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *          </note>
   * @public
   */
  semanticVersion: string | undefined;

  /**
   * <p>The description of the component. Describes the contents of the component.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The change description of the component. This description indicates the change that
   * 			has been made in this version, or what makes this version different from other versions
   * 			of the component.</p>
   * @public
   */
  changeDescription?: string | undefined;

  /**
   * <p>The type of the component denotes whether the component is used to build the image, or
   * 			only to test it.</p>
   * @public
   */
  type: ComponentType | undefined;

  /**
   * <p>The format of the resource that you want to import as a component.</p>
   * @public
   */
  format: ComponentFormat | undefined;

  /**
   * <p>The platform of the component.</p>
   * @public
   */
  platform: Platform | undefined;

  /**
   * <p>The data of the component. For the <code>SHELL</code> format, this is the
   * 			plain script content. You must specify exactly one of the <code>data</code>
   * 			or <code>uri</code> properties. For scripts that exceed the inline length
   * 			constraint, use the <code>uri</code> property.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The uri of the component. Must be an Amazon S3 URL and you must have permission
   * 			to access the Amazon S3 bucket. If you use Amazon S3, you can specify component content up to your
   * 			service quota. Either <code>data</code> or <code>uri</code> can be used to specify the
   * 			data within the component.</p>
   * @public
   */
  uri?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that is used to encrypt this component.
   * 			This can be either the Key ARN or the Alias ARN. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN">Key identifiers (KeyId)</a>
   * 			in the <i>Key Management Service Developer Guide</i>. If you don't specify a key, Image Builder encrypts the
   * 			component data with a KMS key that Image Builder owns.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The tags of the component.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportComponentResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the imported component.</p>
   * @public
   */
  componentBuildVersionArn?: string | undefined;
}

/**
 * <p>Controls Secure Boot and UEFI data settings for the resulting image
 * 			during ISO imports. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html">UEFI Secure Boot for Amazon EC2 instances</a> in
 * 			the <i>
 *                <i>Amazon EC2 User Guide</i>
 *             </i>.</p>
 * @public
 */
export interface RegisterImageOptions {
  /**
   * <p>Specifies whether Secure Boot is enabled for the output AMI.
   * 			The default value is <code>true</code>. To disable Secure Boot
   * 			for custom unsigned drivers, set this value to <code>false</code>.</p>
   * @public
   */
  secureBootEnabled?: boolean | undefined;

  /**
   * <p>A Base64-encoded representation of the non-volatile UEFI variable store.
   * 			You can specify this parameter only when
   * 			<code>secureBootEnabled</code> is <code>true</code> or
   * 			unspecified. You can inspect and modify the UEFI data by using
   * 			the <a href="https://github.com/awslabs/python-uefivars">python-uefivars tool on GitHub</a>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-variables.html">UEFI
   * 				variables for Amazon EC2 instances</a>.</p>
   * @public
   */
  uefiData?: string | undefined;
}

/**
 * <p>Windows-specific configuration settings for an ISO import, including
 * 			the edition to install from a multi-edition Windows ISO file.</p>
 * @public
 */
export interface WindowsConfiguration {
  /**
   * <p>The 1-based index that specifies which Windows edition to install
   * 			from a multi-edition Windows ISO file. A Windows ISO can contain a
   * 			<code>.wim</code> file with multiple image indexes, each representing
   * 			a different edition.</p>
   * @public
   */
  imageIndex: number | undefined;
}

/**
 * @public
 */
export interface ImportDiskImageRequest {
  /**
   * <p>The name of the image resource that's created from the import. Image Builder
   * 			generates the image ARN from a normalized form of the name, so names that
   * 			differ only in case, spaces, or underscores count as the same name. If an
   * 			image with the same name and semantic version already exists in your
   * 			account in the same Amazon Web Services Region, the import creates a new build version
   * 			for it.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The semantic version to attach to the image that's created during the import
   * 			process. This version follows the semantic version syntax.</p>
   * @public
   */
  semanticVersion: string | undefined;

  /**
   * <p>The description for your disk image import.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The operating system platform for the imported image. Allowed values include
   * 			the following: <code>Windows</code>.</p>
   * @public
   */
  platform: string | undefined;

  /**
   * <p>The operating system version for the imported image. The only supported
   * 			value is <code>Microsoft Windows 11</code>.</p>
   * @public
   */
  osVersion: string | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access
   * 			to perform workflow actions to import an image from a Microsoft ISO file.
   * 			If you don't provide a role, Image Builder uses the Image Builder service-linked role in your
   * 			account, and creates it if it doesn't exist.</p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration resource that's used for
   * 			launching the EC2 instance on which the ISO image is built.</p>
   * @public
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p>The <code>uri</code> of the ISO disk file that's stored in Amazon S3, in
   * 			<code>s3://bucket/key</code> format. The key must end with the
   * 			<code>.iso</code>, <code>.ISO</code>, or <code>.Iso</code> extension, and the
   * 			bucket must be owned by the account that makes the request.</p>
   * @public
   */
  uri: string | undefined;

  /**
   * <p>The CloudWatch Logs log group where Image Builder sends the import logs. If you
   * 			specify a log group name outside of the <code>/aws/imagebuilder/</code>
   * 			namespace, you must also provide an <code>executionRole</code> that has
   * 			permission to write to that log group.</p>
   * @public
   */
  loggingConfiguration?: ImageLoggingConfiguration | undefined;

  /**
   * <p>Tags that are attached to image resources created from the import.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Configures Secure Boot and UEFI settings for the
   * 			imported image.</p>
   * @public
   */
  registerImageOptions?: RegisterImageOptions | undefined;

  /**
   * <p>Specifies Windows settings for ISO imports.</p>
   * @public
   */
  windowsConfiguration?: WindowsConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportDiskImageResponse {
  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Image Builder image resource that this request created. The AMI
   * 			doesn't exist yet when the response returns. The import runs asynchronously,
   * 			and the output AMI appears in the image's output resources when the import
   * 			completes.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface ImportVmImageRequest {
  /**
   * <p>The name of the base image that is created by the import process. Image Builder
   * 			generates the image ARN from a normalized form of the name, so names that
   * 			differ only in case, spaces, or underscores count as the same name. If an
   * 			image with the same name and semantic version already exists in your
   * 			account in the same Amazon Web Services Region, the import creates a new build version
   * 			for it.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The semantic version to attach to the base image that was created during the import
   * 			process. This version follows the semantic version syntax.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes, you can assign any positive integer value, including
   * 	zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *          </note>
   * @public
   */
  semanticVersion: string | undefined;

  /**
   * <p>The description for the base image that is created by the import process.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The operating system platform for the imported VM.</p>
   * @public
   */
  platform: Platform | undefined;

  /**
   * <p>The operating system version for the imported VM.</p>
   * @public
   */
  osVersion?: string | undefined;

  /**
   * <p>The <code>importTaskId</code> (API) or <code>ImportTaskId</code> (CLI) from the
   * 			Amazon EC2 VM import process. The import task doesn't need to be complete when you
   * 			call ImportVmImage - Image Builder monitors the task and finishes creating the image
   * 			when the task completes.</p>
   * @public
   */
  vmImportTaskId: string | undefined;

  /**
   * <p>The CloudWatch Logs log group where Image Builder sends the import logs. For
   * 			ImportVmImage, the log group name must be within the
   * 			<code>/aws/imagebuilder/</code> namespace.</p>
   * @public
   */
  loggingConfiguration?: ImageLoggingConfiguration | undefined;

  /**
   * <p>Tags that are attached to the import resources.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportVmImageResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Image Builder image resource that this request created. Image Builder
   * 			records the AMI from the VM import task in the image's output resources
   * 			after the task completes.</p>
   * @public
   */
  imageArn?: string | undefined;

  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentBuildVersionsRequest {
  /**
   * <p>The component version ARN whose build versions you want to list. The ARN
   * 			must specify an exact version, without a build number suffix. If you
   * 			don't specify an ARN, Image Builder returns build versions for the components
   * 			that your account owns.</p>
   * @public
   */
  componentVersionArn?: string | undefined;

  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentBuildVersionsResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The list of component summaries. Each summary represents one build version
   * 			of the specified component version, or of the components that your account
   * 			owns if you didn't specify an ARN. Deprecated build versions aren't
   * 			included.</p>
   * @public
   */
  componentSummaryList?: ComponentSummary[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsRequest {
  /**
   * <p>Filters results based on the type of owner for the component. By default, this request
   * 			returns a list of components that your account owns. To see results for other types of
   * 			owners, you can specify components that Amazon manages, components from the
   * 			Amazon Web Services Marketplace, third party components, or components that other accounts have shared
   * 			with you.</p>
   * @public
   */
  owner?: Ownership | undefined;

  /**
   * <p>Use the following filters to streamline results:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>productCodes</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>supportedOsVersion</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>version</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>Specifies whether to return one entry per component name, with all versions
   * 			of each component aggregated. Defaults to <code>false</code>, which returns
   * 			one entry per component version. You can't combine this option with the
   * 			<code>version</code> filter.</p>
   * @public
   */
  byName?: boolean | undefined;

  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The list of component semantic versions.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *          </note>
   * @public
   */
  componentVersionList?: ComponentVersion[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerRecipesRequest {
  /**
   * <p>Returns container recipes belonging to the specified owner, that have been
   * 			shared with you. You can omit this field to return container recipes
   * 			belonging to your account. For container recipes, the valid owner values are
   * 			<code>Self</code>, <code>Shared</code>, and <code>Amazon</code>.</p>
   * @public
   */
  owner?: Ownership | undefined;

  /**
   * <p>Use the following filters to streamline results:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>containerType</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parentImage</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContainerRecipesResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The list of container recipes returned for the request.</p>
   * @public
   */
  containerRecipeSummaryList?: ContainerRecipeSummary[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionConfigurationsRequest {
  /**
   * <p>You can filter on <code>name</code> to streamline results.</p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDistributionConfigurationsResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The list of distributions.</p>
   * @public
   */
  distributionConfigurationSummaryList?: DistributionConfigurationSummary[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImageBuildVersionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image version whose build versions you want to retrieve.
   * 			The ARN must specify an exact version
   * 			(<code><major>.<minor>.<patch></code>) - wildcards aren't allowed.
   * 			This parameter is optional. If you don't specify it, Image Builder returns build
   * 			versions for all of the images in your account.</p>
   * @public
   */
  imageVersionArn?: string | undefined;

  /**
   * <p>Use the following filters to streamline results:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>osVersion</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>version</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>An image summary.</p>
 * @public
 */
export interface ImageSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the image.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Specifies whether this image produces an AMI or a container image.</p>
   * @public
   */
  type?: ImageType | undefined;

  /**
   * <p>The version of the image.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The image operating system platform, such as Linux or Windows.</p>
   * @public
   */
  platform?: Platform | undefined;

  /**
   * <p>The operating system version of the instances that launch from this image. For
   * 			example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.</p>
   * @public
   */
  osVersion?: string | undefined;

  /**
   * <p>The state of the image.</p>
   * @public
   */
  state?: ImageState | undefined;

  /**
   * <p>The owner of the image.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>The date on which Image Builder created this image.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>The output resources that Image Builder produced when it created this image.</p>
   * @public
   */
  outputResources?: OutputResources | undefined;

  /**
   * <p>The tags that apply to this image.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Indicates the type of build that created this image. The build can be initiated in the
   * 			following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>USER_INITIATED</b> – A manual
   * 					pipeline build request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SCHEDULED</b> – A pipeline build
   * 					initiated by a cron expression in the Image Builder pipeline, or from EventBridge.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IMPORT</b> – A VM import created
   * 					the image to use as the base image for the recipe.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IMPORT_ISO</b> – An ISO disk import created
   * 					the image.</p>
   *             </li>
   *          </ul>
   * @public
   */
  buildType?: BuildType | undefined;

  /**
   * <p>The origin of the base image that Image Builder used to build this image.</p>
   * @public
   */
  imageSource?: ImageSource | undefined;

  /**
   * <p>The time when deprecation occurs for an image resource. This can be a past or future date.</p>
   * @public
   */
  deprecationTime?: Date | undefined;

  /**
   * <p>Identifies the last runtime instance of the lifecycle policy to take action on the image.</p>
   * @public
   */
  lifecycleExecutionId?: string | undefined;

  /**
   * <p>The logging configuration that's defined for the image.</p>
   * @public
   */
  loggingConfiguration?: ImageLoggingConfiguration | undefined;
}

/**
 * @public
 */
export interface ListImageBuildVersionsResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The list of image build versions.</p>
   * @public
   */
  imageSummaryList?: ImageSummary[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImagePackagesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image build version whose packages you want to list. The
   * 			value must be a full build version ARN.</p>
   * @public
   */
  imageBuildVersionArn: string | undefined;

  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A software package that's installed on an image, as detected by Amazon Web Services Systems Manager
 * 			Inventory at build time. The list includes packages that shipped with the
 * 			base image.</p>
 * @public
 */
export interface ImagePackage {
  /**
   * <p>The name of the package that's reported to the operating system package
   * 			manager.</p>
   * @public
   */
  packageName?: string | undefined;

  /**
   * <p>The version of the package that's reported to the operating system package
   * 			manager.</p>
   * @public
   */
  packageVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListImagePackagesResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The list of Image Packages returned in the response.</p>
   * @public
   */
  imagePackageList?: ImagePackage[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImagePipelineImagesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline whose images you want to
   * 			view.</p>
   * @public
   */
  imagePipelineArn: string | undefined;

  /**
   * <p>Use the following filters to streamline results:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>version</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImagePipelineImagesResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The list of images built by this pipeline.</p>
   * @public
   */
  imageSummaryList?: ImageSummary[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImagePipelinesRequest {
  /**
   * <p>Use the following filters to streamline results:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>description</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>distributionConfigurationArn</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>imageRecipeArn</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>infrastructureConfigurationArn</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImagePipelinesResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The list of image pipelines.</p>
   * @public
   */
  imagePipelineList?: ImagePipeline[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImageRecipesRequest {
  /**
   * <p>You can specify the recipe owner to filter results by that owner. By default, this request will
   * 			only show image recipes owned by your account. To filter by a different owner, specify one of the
   * 			<code>Valid Values</code> that are listed for this parameter.</p>
   * @public
   */
  owner?: Ownership | undefined;

  /**
   * <p>Use the following filters to streamline results:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parentImage</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A summary of an image recipe.</p>
 * @public
 */
export interface ImageRecipeSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the image recipe.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The platform of the image recipe.</p>
   * @public
   */
  platform?: Platform | undefined;

  /**
   * <p>The owner of the image recipe.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>The base image of the image recipe.</p>
   * @public
   */
  parentImage?: string | undefined;

  /**
   * <p>The date on which this image recipe was created.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>The tags of the image recipe.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListImageRecipesResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>A list of <code>ImageRecipeSummary</code> objects that contain identifying characteristics for the
   * 			image recipe, such as the name, the Amazon Resource Name (ARN), and the date created, along with other key details.</p>
   * @public
   */
  imageRecipeSummaryList?: ImageRecipeSummary[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImagesRequest {
  /**
   * <p>Filters the list to images owned by you, by Amazon, or shared with you by other accounts.
   * 		By default, only your account's images are returned.</p>
   * @public
   */
  owner?: Ownership | undefined;

  /**
   * <p>Use the following filters to streamline results:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>osVersion</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>platform</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>type</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>version</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>Specifies whether to return one entry per image name, with all versions of
   * 			each image aggregated. Defaults to <code>false</code>, which returns one
   * 			entry per image version. You can't combine this option with the
   * 			<code>version</code> filter.</p>
   * @public
   */
  byName?: boolean | undefined;

  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Specifies whether to include deprecated Amazon-managed images in the
   * 			results. Deprecated images that you own are always returned. Defaults to
   * 			<code>false</code>.</p>
   * @public
   */
  includeDeprecated?: boolean | undefined;
}

/**
 * <p>The defining characteristics of a specific version of an Image Builder image.</p>
 * @public
 */
export interface ImageVersion {
  /**
   * <p>The Amazon Resource Name (ARN) of a specific version of an Image Builder image.</p>
   *          <note>
   *             <p>Semantic versioning is included in each object's Amazon Resource Name (ARN),
   * 	at the level that applies to that object as follows:</p>
   *             <ol>
   *                <li>
   *                   <p>Versionless ARNs and Name ARNs do not include specific values in any of the nodes. The nodes are
   * 				either left off entirely, or they are specified as wildcards, for example: x.x.x.</p>
   *                </li>
   *                <li>
   *                   <p>Version ARNs have only the first three nodes: <major>.<minor>.<patch></p>
   *                </li>
   *                <li>
   *                   <p>Build version ARNs have all four nodes, and point to a specific build for a specific version of an object.</p>
   *                </li>
   *             </ol>
   *          </note>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of this specific version of an Image Builder image.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Specifies whether this image produces an AMI or a container image.</p>
   * @public
   */
  type?: ImageType | undefined;

  /**
   * <p>The semantic version of the image. This version follows the semantic
   * 			version syntax.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes, you can assign any positive integer value, including
   * 	zero. The upper limit is 2^30-1, or 1073741823, for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *             <p>
   *                <b>Filtering:</b> You can use wildcards (x) to specify the most recent versions or nodes when
   * 	selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes
   * 	to the right of the first wildcard must also be wildcards.</p>
   *          </note>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The operating system platform of the image version, for example "Windows" or
   * 			"Linux".</p>
   * @public
   */
  platform?: Platform | undefined;

  /**
   * <p>The operating system version of the image. For example, Amazon Linux 2023
   * 			or Microsoft Windows Server 2022.</p>
   * @public
   */
  osVersion?: string | undefined;

  /**
   * <p>The owner of the image version.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>The date on which this specific version of the Image Builder image was created.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>Indicates the type of build that created this image. The build can be initiated in the
   * 			following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>USER_INITIATED</b> – A manual
   * 					pipeline build request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SCHEDULED</b> – A pipeline build
   * 					initiated by a cron expression in the Image Builder pipeline, or from EventBridge.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IMPORT</b> – A VM import created
   * 					the image to use as the base image for the recipe.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IMPORT_ISO</b> – An ISO disk import created
   * 					the image.</p>
   *             </li>
   *          </ul>
   * @public
   */
  buildType?: BuildType | undefined;

  /**
   * <p>The origin of the base image that Image Builder used to build this image.</p>
   * @public
   */
  imageSource?: ImageSource | undefined;
}

/**
 * @public
 */
export interface ListImagesResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The list of image semantic versions.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Filtering:</b> You can use wildcards (x) to specify the most recent versions or nodes when
   * 	selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes
   * 	to the right of the first wildcard must also be wildcards.</p>
   *          </note>
   * @public
   */
  imageVersionList?: ImageVersion[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListImageScanFindingAggregationsRequest {
  /**
   * <p>A filter name and value pair that determines the type of aggregation
   * 			that Image Builder returns. Use one of the following filter names:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>imageBuildVersionArn</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>imagePipelineArn</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vulnerabilityId</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a filter, Image Builder returns an aggregation for your account.</p>
   * @public
   */
  filter?: Filter | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains vulnerability counts for a specific image pipeline.</p>
 * @public
 */
export interface ImagePipelineAggregation {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the image pipeline for this
   * 			aggregation.</p>
   * @public
   */
  imagePipelineArn?: string | undefined;

  /**
   * <p>Counts by severity level for medium severity and higher level findings, plus a total
   * 			for all of the findings for the specified image pipeline.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;
}

/**
 * <p>Includes counts of image and pipeline resource findings by vulnerability.</p>
 * @public
 */
export interface VulnerabilityIdAggregation {
  /**
   * <p>The vulnerability Id for this set of counts.</p>
   * @public
   */
  vulnerabilityId?: string | undefined;

  /**
   * <p>Counts by severity level for medium severity and higher level findings, plus a total
   * 			for all of the findings for the specified vulnerability.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;
}

/**
 * <p>This returns exactly one type of aggregation, based on the filter that Image Builder applies in
 * 			its API action.</p>
 * @public
 */
export interface ImageScanFindingAggregation {
  /**
   * <p>Returns an object that contains severity counts based on an account ID.</p>
   * @public
   */
  accountAggregation?: AccountAggregation | undefined;

  /**
   * <p>Returns an object that contains severity counts based on the Amazon Resource Name (ARN) for a specific image.</p>
   * @public
   */
  imageAggregation?: ImageAggregation | undefined;

  /**
   * <p>Returns an object that contains severity counts based on an image pipeline ARN.</p>
   * @public
   */
  imagePipelineAggregation?: ImagePipelineAggregation | undefined;

  /**
   * <p>Returns an object that contains severity counts based on vulnerability ID.</p>
   * @public
   */
  vulnerabilityIdAggregation?: VulnerabilityIdAggregation | undefined;
}

/**
 * @public
 */
export interface ListImageScanFindingAggregationsResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The aggregation type specifies what type of key is used to group the image scan
   * 			findings. Image Builder returns results based on the request filter. If you didn't specify a
   * 			filter in the request, the type defaults to <code>accountId</code>.</p>
   *          <p class="title">
   *             <b>Aggregation types</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>accountId</p>
   *             </li>
   *             <li>
   *                <p>imageBuildVersionArn</p>
   *             </li>
   *             <li>
   *                <p>imagePipelineArn</p>
   *             </li>
   *             <li>
   *                <p>vulnerabilityId</p>
   *             </li>
   *          </ul>
   *          <p>Each aggregation includes counts by severity level for medium severity and higher
   * 			level findings, plus a total for all of the findings for each key value.</p>
   * @public
   */
  aggregationType?: string | undefined;

  /**
   * <p>An array of image scan finding aggregations that match the filter criteria.</p>
   * @public
   */
  responses?: ImageScanFindingAggregation[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A name value pair that Image Builder applies to streamline results from the
 * 			vulnerability scan findings list action.</p>
 * @public
 */
export interface ImageScanFindingsFilter {
  /**
   * <p>The name of the image scan finding filter. Filter names are case-sensitive.
   * 			Valid filter names are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>imageBuildVersionArn</code> – Filters findings by the
   * 					image build version that was scanned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>imagePipelineArn</code> – Filters findings by the
   * 					pipeline that created the scanned image.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vulnerabilityId</code> – Filters findings by
   * 					vulnerability ID, for example a CVE ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>severity</code> – Filters findings by severity
   * 					level.</p>
   *             </li>
   *          </ul>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The filter values. Filter values are case-sensitive.</p>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListImageScanFindingsRequest {
  /**
   * <p>An array of name value pairs that you can use to filter your results. You can use the
   * 			following filters to streamline results:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>imageBuildVersionArn</code> – Filters findings by the
   * 					image build version that was scanned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>imagePipelineArn</code> – Filters findings by the
   * 					pipeline that created the scanned image.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>vulnerabilityId</code> – Filters findings by
   * 					vulnerability ID, for example a CVE ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>severity</code> – Filters findings by severity
   * 					level.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't request a filter, then all findings in your account are listed.</p>
   * @public
   */
  filters?: ImageScanFindingsFilter[] | undefined;

  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about the factors that influenced the score that Amazon Inspector assigned for a
 * 			finding.</p>
 * @public
 */
export interface InspectorScoreDetails {
  /**
   * <p>The CVSS score that Amazon Inspector assigned to the finding after applying its
   * 			adjustments. It includes the score source, CVSS version, scoring vector,
   * 			and the adjustments applied.</p>
   * @public
   */
  adjustedCvss?: CvssScoreDetails | undefined;
}

/**
 * <p>Information about a vulnerable package that Amazon Inspector identifies in a finding.</p>
 * @public
 */
export interface VulnerablePackage {
  /**
   * <p>The name of the vulnerable package.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the vulnerable package.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The source layer hash of the vulnerable package.</p>
   * @public
   */
  sourceLayerHash?: string | undefined;

  /**
   * <p>The epoch of the vulnerable package.</p>
   * @public
   */
  epoch?: number | undefined;

  /**
   * <p>The release of the vulnerable package.</p>
   * @public
   */
  release?: string | undefined;

  /**
   * <p>The architecture of the vulnerable package.</p>
   * @public
   */
  arch?: string | undefined;

  /**
   * <p>The package manager of the vulnerable package.</p>
   * @public
   */
  packageManager?: string | undefined;

  /**
   * <p>The file path of the vulnerable package.</p>
   * @public
   */
  filePath?: string | undefined;

  /**
   * <p>The version of the package that contains the vulnerability fix.</p>
   * @public
   */
  fixedInVersion?: string | undefined;

  /**
   * <p>The code to run in your environment to update packages with a fix available.</p>
   * @public
   */
  remediation?: string | undefined;
}

/**
 * <p>Information about package vulnerability findings.</p>
 * @public
 */
export interface PackageVulnerabilityDetails {
  /**
   * <p>A unique identifier for this vulnerability.</p>
   * @public
   */
  vulnerabilityId: string | undefined;

  /**
   * <p>The packages that this vulnerability impacts.</p>
   * @public
   */
  vulnerablePackages?: VulnerablePackage[] | undefined;

  /**
   * <p>The source of the vulnerability information.</p>
   * @public
   */
  source?: string | undefined;

  /**
   * <p>The CVSS scores for the vulnerability in this finding, as published
   * 			by the vulnerability sources. Sources include NVD and the operating system
   * 			vendor, and scores can span CVSS versions.</p>
   * @public
   */
  cvss?: CvssScore[] | undefined;

  /**
   * <p>Vulnerabilities that are often related to the findings for the package.</p>
   * @public
   */
  relatedVulnerabilities?: string[] | undefined;

  /**
   * <p>A link to the source of the vulnerability information.</p>
   * @public
   */
  sourceUrl?: string | undefined;

  /**
   * <p>The severity that the vendor assigned to this vulnerability type.</p>
   * @public
   */
  vendorSeverity?: string | undefined;

  /**
   * <p>The date and time when this vulnerability was first added to the vendor's
   * 			database.</p>
   * @public
   */
  vendorCreatedAt?: Date | undefined;

  /**
   * <p>The date and time when the vendor last updated this vulnerability in their
   * 			database.</p>
   * @public
   */
  vendorUpdatedAt?: Date | undefined;

  /**
   * <p>Links to web pages that contain details about the vulnerabilities that Amazon Inspector
   * 			identified for the package.</p>
   * @public
   */
  referenceUrls?: string[] | undefined;
}

/**
 * <p>Details about the recommended course of action to remediate the finding.</p>
 * @public
 */
export interface RemediationRecommendation {
  /**
   * <p>The recommended course of action to remediate the finding.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>A link to more information about the recommended remediation for this
   * 			vulnerability.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * <p>Information about how to remediate a finding.</p>
 * @public
 */
export interface Remediation {
  /**
   * <p>An object that contains information about the recommended course of action to
   * 			remediate the finding.</p>
   * @public
   */
  recommendation?: RemediationRecommendation | undefined;
}

/**
 * <p>Contains details about a vulnerability scan finding that Amazon Inspector generated
 * 			for an image.</p>
 * @public
 */
export interface ImageScanFinding {
  /**
   * <p>The Amazon Web Services account ID that's associated with the finding.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image build version that's associated with the
   * 			finding.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that's associated with the
   * 			finding.</p>
   * @public
   */
  imagePipelineArn?: string | undefined;

  /**
   * <p>The type of the finding. Image Builder looks for findings of the type
   * 				<code>PACKAGE_VULNERABILITY</code> that apply to output images, and excludes other
   * 			types.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The description of the finding.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The title of the finding.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>An object that contains the details about how to remediate the finding.</p>
   * @public
   */
  remediation?: Remediation | undefined;

  /**
   * <p>The severity of the finding. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html">Severity levels for Amazon Inspector findings</a> in the
   * 				<i>Amazon Inspector User Guide</i>.</p>
   * @public
   */
  severity?: string | undefined;

  /**
   * <p>The date and time when the finding was first observed.</p>
   * @public
   */
  firstObservedAt?: Date | undefined;

  /**
   * <p>The timestamp when the finding was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The score that Amazon Inspector assigned for the finding.</p>
   * @public
   */
  inspectorScore?: number | undefined;

  /**
   * <p>An object that contains details of the Amazon Inspector score.</p>
   * @public
   */
  inspectorScoreDetails?: InspectorScoreDetails | undefined;

  /**
   * <p>An object that contains the details of a package vulnerability finding.</p>
   * @public
   */
  packageVulnerabilityDetails?: PackageVulnerabilityDetails | undefined;

  /**
   * <p>Details about whether a fix is available for any of the packages that are identified
   * 			in the finding through a version update. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>YES</code> – A fix is available for all of the packages
   * 					identified in the finding.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO</code> – No fix is available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARTIAL</code> – A fix is available for some, but not
   * 					all, of the packages identified in the finding.</p>
   *             </li>
   *          </ul>
   * @public
   */
  fixAvailable?: string | undefined;
}

/**
 * @public
 */
export interface ListImageScanFindingsResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The image scan findings for your account that meet your request filter
   * 			criteria.</p>
   * @public
   */
  findings?: ImageScanFinding[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInfrastructureConfigurationsRequest {
  /**
   * <p>You can filter on <code>name</code> to streamline results.</p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains a high-level summary of an infrastructure configuration, including
 * 			the environment settings that Image Builder uses to build and test images.</p>
 * @public
 */
export interface InfrastructureConfigurationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the infrastructure configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the infrastructure configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date on which the infrastructure configuration was created.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>The date on which the infrastructure configuration was last updated.</p>
   * @public
   */
  dateUpdated?: string | undefined;

  /**
   * <p>The metadata tags assigned to the Amazon EC2 build and test instances that Image Builder
   * 			launches during image creation.</p>
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * <p>The tags of the infrastructure configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The instance types of the infrastructure configuration.</p>
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * <p>The instance profile of the infrastructure configuration.</p>
   * @public
   */
  instanceProfileName?: string | undefined;

  /**
   * <p>The instance placement settings that define where the build and test
   * 			instances that Image Builder launches during image creation run. These settings
   * 			don't affect instances that you launch from the output image.</p>
   * @public
   */
  placement?: Placement | undefined;
}

/**
 * @public
 */
export interface ListInfrastructureConfigurationsResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The list of infrastructure configurations.</p>
   * @public
   */
  infrastructureConfigurationSummaryList?: InfrastructureConfigurationSummary[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLifecycleExecutionResourcesRequest {
  /**
   * <p>The unique identifier for a runtime instance of the lifecycle policy.</p>
   * @public
   */
  lifecycleExecutionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an image build version to get the output resources for,
   * 			such as AMIs or container images in Amazon ECR. You can get this value from the
   * 			<code>resourceId</code> in the top-level response. If you leave this
   * 			property empty, the response lists the Image Builder resources that the lifecycle
   * 			execution identified for lifecycle actions. If the image build version that
   * 			you specify in <code>parentResourceId</code> wasn't part of this
   * 			lifecycle execution, the response contains an empty list.</p>
   * @public
   */
  parentResourceId?: string | undefined;

  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The lifecycle policy action that was identified for the impacted resource.</p>
 * @public
 */
export interface LifecycleExecutionResourceAction {
  /**
   * <p>The name of the lifecycle action that was identified for the resource.</p>
   * @public
   */
  name?: LifecycleExecutionResourceActionName | undefined;

  /**
   * <p>The reason why the lifecycle policy action is taken.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>Contains the state of an impacted resource that the runtime instance
 * 			of the lifecycle policy identified for action.</p>
 * @public
 */
export interface LifecycleExecutionResourceState {
  /**
   * <p>The runtime status of the lifecycle action taken for the
   * 			impacted resource.</p>
   * @public
   */
  status?: LifecycleExecutionResourceStatus | undefined;

  /**
   * <p>Messaging that clarifies the reason for the assigned status.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>Contains the state of an impacted snapshot resource that the runtime
 * 			instance of the lifecycle policy identified for action.</p>
 * @public
 */
export interface LifecycleExecutionSnapshotResource {
  /**
   * <p>Identifies the impacted snapshot resource.</p>
   * @public
   */
  snapshotId?: string | undefined;

  /**
   * <p>The runtime status of the lifecycle action taken for the snapshot.</p>
   * @public
   */
  state?: LifecycleExecutionResourceState | undefined;
}

/**
 * <p>Contains details for a resource that the runtime instance of the
 * 			lifecycle policy identified for action.</p>
 * @public
 */
export interface LifecycleExecutionResource {
  /**
   * <p>The account that owns the impacted resource.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>Identifies the impacted resource. The resource ID depends on the type of
   * 			resource, as follows.</p>
   *          <ul>
   *             <li>
   *                <p>Image Builder image resources: Amazon Resource Name (ARN)</p>
   *             </li>
   *             <li>
   *                <p>Distributed AMIs: AMI ID</p>
   *             </li>
   *             <li>
   *                <p>Container images distributed to an ECR repository: image URI or SHA Digest</p>
   *             </li>
   *          </ul>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The runtime state of the lifecycle action for this resource.</p>
   * @public
   */
  state?: LifecycleExecutionResourceState | undefined;

  /**
   * <p>The action to take for the identified resource.</p>
   * @public
   */
  action?: LifecycleExecutionResourceAction | undefined;

  /**
   * <p>The Amazon Web Services Region where the lifecycle execution resource is stored.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>A list of associated resource snapshots for the impacted resource if
   * 			it’s an AMI.</p>
   * @public
   */
  snapshots?: LifecycleExecutionSnapshotResource[] | undefined;

  /**
   * <p>For an impacted container image, this identifies a list of URIs for associated
   * 			container images distributed to ECR repositories.</p>
   * @public
   */
  imageUris?: string[] | undefined;

  /**
   * <p>The starting timestamp from the lifecycle action that was applied to the resource.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The ending timestamp from the lifecycle action that was applied to the resource.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListLifecycleExecutionResourcesResponse {
  /**
   * <p>The unique identifier for the runtime instance of the lifecycle policy.</p>
   * @public
   */
  lifecycleExecutionId?: string | undefined;

  /**
   * <p>The current state of the lifecycle runtime instance.</p>
   * @public
   */
  lifecycleExecutionState?: LifecycleExecutionState | undefined;

  /**
   * <p>A list of resources that were identified for lifecycle actions.</p>
   * @public
   */
  resources?: LifecycleExecutionResource[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLifecycleExecutionsRequest {
  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to list lifecycle executions. Specify a
   * 			lifecycle policy ARN to list its executions, or an image build version ARN
   * 			to list the executions that <a>StartResourceStateUpdate</a>
   * 			started for that image. Other ARN types aren't valid for this
   * 			request.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListLifecycleExecutionsResponse {
  /**
   * <p>A list of lifecycle runtime instances for the specified resource.</p>
   * @public
   */
  lifecycleExecutions?: LifecycleExecution[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListLifecyclePoliciesRequest {
  /**
   * <p>Use the following filters to streamline results: <code>name</code>,
   * 			<code>resourceType</code>, and <code>status</code>. Filter names are
   * 			matched exactly as shown.</p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains a summary of lifecycle policy resources.</p>
 * @public
 */
export interface LifecyclePolicySummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle policy.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the lifecycle policy.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Optional description for the lifecycle policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The lifecycle policy resource status.</p>
   * @public
   */
  status?: LifecyclePolicyStatus | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role that Image Builder uses to run the lifecycle policy.</p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>The type of resources the lifecycle policy targets.</p>
   * @public
   */
  resourceType?: LifecyclePolicyResourceType | undefined;

  /**
   * <p>The timestamp when Image Builder created the lifecycle policy resource.</p>
   * @public
   */
  dateCreated?: Date | undefined;

  /**
   * <p>The timestamp when Image Builder updated the lifecycle policy resource.</p>
   * @public
   */
  dateUpdated?: Date | undefined;

  /**
   * <p>The timestamp for the last time Image Builder ran the lifecycle policy.</p>
   * @public
   */
  dateLastRun?: Date | undefined;

  /**
   * <p>To help manage your lifecycle policy resources, you can assign your own
   * 			metadata to each resource in the form of tags. Each tag consists of a key and
   * 			an optional value, both of which you define.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListLifecyclePoliciesResponse {
  /**
   * <p>A list of lifecycle policies in your Amazon Web Services account that meet the criteria
   * 			specified in the request.</p>
   * @public
   */
  lifecyclePolicySummaryList?: LifecyclePolicySummary[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the specified resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListWaitingWorkflowStepsRequest {
  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains runtime details for a workflow step that has paused at a
 * 			<code>WaitForAction</code> step, and is waiting for you to send an action.</p>
 * @public
 */
export interface WorkflowStepExecution {
  /**
   * <p>Uniquely identifies the workflow step that ran for the associated
   * 			image build version.</p>
   * @public
   */
  stepExecutionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image build version that ran the workflow.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * <p>Uniquely identifies the runtime instance of the workflow that contains
   * 			the workflow step that ran for the associated image build version.</p>
   * @public
   */
  workflowExecutionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workflow resource that ran.</p>
   * @public
   */
  workflowBuildVersionArn?: string | undefined;

  /**
   * <p>The name of the workflow step.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The name of the step action.</p>
   * @public
   */
  action?: string | undefined;

  /**
   * <p>The timestamp when the workflow step started.</p>
   * @public
   */
  startTime?: string | undefined;
}

/**
 * @public
 */
export interface ListWaitingWorkflowStepsResponse {
  /**
   * <p>An array of the workflow steps that are waiting for action in your
   * 			Amazon Web Services account. Each step is paused at a <code>WaitForAction</code> step, and
   * 			remains in the list until you respond with
   * 			<a>SendWorkflowStepAction</a> or the wait times out.</p>
   * @public
   */
  steps?: WorkflowStepExecution[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowBuildVersionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow resource for which to get a list of build versions.
   * 			The version segments can contain wildcards (<code>x</code>) to match multiple
   * 			versions of the workflow. If you don't specify an ARN, the response lists build
   * 			versions for all of the workflows in your account.</p>
   * @public
   */
  workflowVersionArn?: string | undefined;

  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains metadata about the workflow resource.</p>
 * @public
 */
export interface WorkflowSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the workflow.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>Describes the workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The change description for the current version of the workflow resource.</p>
   * @public
   */
  changeDescription?: string | undefined;

  /**
   * <p>The image creation stage that this workflow applies to.</p>
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * <p>The owner of the workflow resource.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>Describes the current state of the workflow resource.</p>
   * @public
   */
  state?: WorkflowState | undefined;

  /**
   * <p>The original creation date of the workflow resource.</p>
   * @public
   */
  dateCreated?: string | undefined;

  /**
   * <p>Contains a list of tags that are defined for the workflow.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListWorkflowBuildVersionsResponse {
  /**
   * <p>A list that contains metadata for the build versions of the workflow
   * 			resource specified in the request.</p>
   * @public
   */
  workflowSummaryList?: WorkflowSummary[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowExecutionsRequest {
  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>List all workflow runtime instances for the specified image build version
   * 			resource ARN.</p>
   * @public
   */
  imageBuildVersionArn: string | undefined;
}

/**
 * <p>Metadata that includes details and status from this runtime instance of the workflow.</p>
 * @public
 */
export interface WorkflowExecutionMetadata {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow resource build version that ran.</p>
   * @public
   */
  workflowBuildVersionArn?: string | undefined;

  /**
   * <p>Unique identifier that Image Builder assigns to keep track of runtime resources each time it runs a
   * 			workflow.</p>
   * @public
   */
  workflowExecutionId?: string | undefined;

  /**
   * <p>Indicates what type of workflow that Image Builder ran for this runtime instance of the workflow.</p>
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * <p>The current runtime status for this workflow.</p>
   * @public
   */
  status?: WorkflowExecutionStatus | undefined;

  /**
   * <p>The runtime output message from the workflow, if applicable.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The total number of steps that the workflow document defines for this runtime
   * 			instance of the workflow. Image Builder sets this count before any steps run. The sum of
   * 			succeeded, skipped, and failed steps only reaches this total if every step
   * 			finishes in one of those states.</p>
   * @public
   */
  totalStepCount?: number | undefined;

  /**
   * <p>A runtime count for the number of steps in the workflow that ran successfully.</p>
   * @public
   */
  totalStepsSucceeded?: number | undefined;

  /**
   * <p>A runtime count for the number of steps in the workflow that failed.</p>
   * @public
   */
  totalStepsFailed?: number | undefined;

  /**
   * <p>A runtime count for the number of steps in the workflow that were skipped.</p>
   * @public
   */
  totalStepsSkipped?: number | undefined;

  /**
   * <p>The timestamp when the runtime instance of this workflow started.</p>
   * @public
   */
  startTime?: string | undefined;

  /**
   * <p>The timestamp when this runtime instance of the workflow finished.</p>
   * @public
   */
  endTime?: string | undefined;

  /**
   * <p>The name of the test group that included the test workflow resource at runtime.</p>
   * @public
   */
  parallelGroup?: string | undefined;

  /**
   * <p>Indicates whether a retry of the image build superseded this runtime instance
   *          of the workflow. When you retry a failed image build, Image Builder sets this flag to
   *          <code>true</code> on the original workflow executions that the retry re-ran.</p>
   * @public
   */
  retried?: boolean | undefined;
}

/**
 * @public
 */
export interface ListWorkflowExecutionsResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>An array of runtime details that represents each time a workflow ran for
   * 			the requested image build version. Image Builder retains workflow execution records
   * 			for a limited time, so this array can be empty for older image build
   * 			versions.</p>
   * @public
   */
  workflowExecutions?: WorkflowExecutionMetadata[] | undefined;

  /**
   * <p>The resource Amazon Resource Name (ARN) of the image build version for which you requested a list of
   * 			workflow runtime details.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * <p>The failure reason for the image build version, if it's in a failed state.
   * 			This comes from the image itself, not from an individual workflow, so it's
   * 			available even when no workflow executions remain for the image.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * <p>Filters results based on the workflow owner. By default, this request returns
   * 			the workflows that your account owns (<code>Self</code>). Specify
   * 			<code>Amazon</code> to list the workflows that Image Builder manages. Image Builder rejects
   * 			the <code>Shared</code> and <code>ThirdParty</code> owner values for
   * 			workflows, and <code>AWSMarketplace</code> returns no results.</p>
   * @public
   */
  owner?: Ownership | undefined;

  /**
   * <p>Filters to narrow the list of workflows. You can filter on
   * 			<code>name</code>, <code>version</code>, <code>description</code>, and
   * 			<code>type</code>.</p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>Specifies whether to return one entry per workflow name, with all versions of
   * 			each workflow aggregated. Defaults to <code>false</code>, which returns one
   * 			entry per workflow version. You can't combine this option with the
   * 			<code>version</code> filter.</p>
   * @public
   */
  byName?: boolean | undefined;

  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains details about this version of the workflow.</p>
 * @public
 */
export interface WorkflowVersion {
  /**
   * <p>The Amazon Resource Name (ARN) of the workflow resource.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The semantic version of the workflow resource. The format includes three nodes: <major>.<minor>.<patch>.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>Describes the workflow.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The image creation stage that this workflow applies to.</p>
   * @public
   */
  type?: WorkflowType | undefined;

  /**
   * <p>The owner of the workflow resource.</p>
   * @public
   */
  owner?: string | undefined;

  /**
   * <p>The timestamp when Image Builder created the workflow version.</p>
   * @public
   */
  dateCreated?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * <p>A list of workflow versions that match the request criteria.</p>
   * @public
   */
  workflowVersionList?: WorkflowVersion[] | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkflowStepExecutionsRequest {
  /**
   * <p>The maximum number of items to return in a single request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to specify where to start paginating. Use the <code>nextToken</code> value
   * 	from a previously truncated response.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The unique identifier that Image Builder assigned to keep track of runtime details
   * 			when it ran the workflow.</p>
   * @public
   */
  workflowExecutionId: string | undefined;
}

/**
 * <p>Runtime details and status for the workflow step.</p>
 * @public
 */
export interface WorkflowStepMetadata {
  /**
   * <p>A unique identifier for the workflow step, assigned at runtime.</p>
   * @public
   */
  stepExecutionId?: string | undefined;

  /**
   * <p>The name of the workflow step.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Description of the workflow step.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The step action name.</p>
   * @public
   */
  action?: string | undefined;

  /**
   * <p>Runtime status for the workflow step.</p>
   * @public
   */
  status?: WorkflowStepExecutionStatus | undefined;

  /**
   * <p>Reports on the rollback status of the step, if applicable.</p>
   * @public
   */
  rollbackStatus?: WorkflowStepExecutionRollbackStatus | undefined;

  /**
   * <p>Detailed output message that the workflow step provides at runtime.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>Input parameters that Image Builder provides for the workflow step, as a JSON-encoded
   * 			string.</p>
   * @public
   */
  inputs?: string | undefined;

  /**
   * <p>The output values that the workflow step produced for this runtime instance
   * 			of the workflow, as a JSON-encoded string. For example, a step that launches
   * 			an instance outputs the instance ID. If the step failed, this field contains
   * 			the error message.</p>
   * @public
   */
  outputs?: string | undefined;

  /**
   * <p>The timestamp when the workflow step started.</p>
   * @public
   */
  startTime?: string | undefined;

  /**
   * <p>The timestamp when the workflow step finished.</p>
   * @public
   */
  endTime?: string | undefined;

  /**
   * <p>The current attempt number for the workflow step. The first run is attempt one.
   * 			The number increases by one for each retry.</p>
   * @public
   */
  attemptNumber?: number | undefined;

  /**
   * <p>The maximum number of attempts allowed for the workflow step, based on the
   * 			retry configuration in the workflow document. If the step doesn't configure
   * 			retries, the maximum is one attempt.</p>
   * @public
   */
  maxAttempts?: number | undefined;
}

/**
 * @public
 */
export interface ListWorkflowStepExecutionsResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>Contains an array of runtime details that represents each step in this runtime
   * 			instance of the workflow.</p>
   * @public
   */
  steps?: WorkflowStepMetadata[] | undefined;

  /**
   * <p>The build version Amazon Resource Name (ARN) for the Image Builder workflow resource that defines the steps for
   * 			this runtime instance of the workflow.</p>
   * @public
   */
  workflowBuildVersionArn?: string | undefined;

  /**
   * <p>The unique identifier that Image Builder assigned to keep track of runtime details
   * 			when it ran the workflow.</p>
   * @public
   */
  workflowExecutionId?: string | undefined;

  /**
   * <p>The image build version resource Amazon Resource Name (ARN) that's associated with the specified runtime
   * 			instance of the workflow.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * <p>The output message from the list action, if applicable.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The next token used for paginated responses. When this field isn't empty,
   * 	there are additional elements that the service hasn't included in this request. Use this token
   * 		with the next request to retrieve additional objects.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutComponentPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the component that this policy should be applied
   * 			to.</p>
   * @public
   */
  componentArn: string | undefined;

  /**
   * <p>The policy to apply.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutComponentPolicyResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the component that this policy was applied
   * 			to.</p>
   * @public
   */
  componentArn?: string | undefined;
}

/**
 * @public
 */
export interface PutContainerRecipePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe that this policy should be
   * 			applied to.</p>
   * @public
   */
  containerRecipeArn: string | undefined;

  /**
   * <p>The policy to apply to the container recipe.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutContainerRecipePolicyResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe that this policy was applied
   * 			to.</p>
   * @public
   */
  containerRecipeArn?: string | undefined;
}

/**
 * @public
 */
export interface PutImagePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image that this policy should be applied
   * 			to.</p>
   * @public
   */
  imageArn: string | undefined;

  /**
   * <p>The resource policy to apply to the image, as a JSON policy document.
   * 			Image Builder validates the policy with Amazon Web Services RAM before applying it, and rejects
   * 			invalid policies with <code>InvalidParameterValueException</code>.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutImagePolicyResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image that this policy was applied to.</p>
   * @public
   */
  imageArn?: string | undefined;
}

/**
 * @public
 */
export interface PutImageRecipePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that this policy should be applied
   * 			to.</p>
   * @public
   */
  imageRecipeArn: string | undefined;

  /**
   * <p>The policy to apply.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutImageRecipePolicyResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that this policy was applied
   * 			to.</p>
   * @public
   */
  imageRecipeArn?: string | undefined;
}

/**
 * @public
 */
export interface RetryImageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image build version that you want to retry. The image
   * 			must be in the <code>FAILED</code> or <code>CANCELLED</code> state.</p>
   * @public
   */
  imageBuildVersionArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface RetryImageResponse {
  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ARN of the image to be retried.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;
}

/**
 * @public
 */
export interface SendWorkflowStepActionRequest {
  /**
   * <p>Uniquely identifies the waiting workflow step that you send the action to.
   * 			To get this identifier, call <a>ListWaitingWorkflowSteps</a>.</p>
   * @public
   */
  stepExecutionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image build version associated with the workflow
   * 			step execution. This value must match the image that owns the waiting step.
   * 			If the ARN does not correspond to the image running the workflow,
   * 			then the request fails with a validation error.</p>
   * @public
   */
  imageBuildVersionArn: string | undefined;

  /**
   * <p>The action to perform on the paused workflow step.
   * 			<code>RESUME</code> completes the waiting step, and the workflow continues.
   * 			<code>STOP</code> fails the step, and the step's <code>onFailure</code>
   * 			setting determines whether the workflow continues or aborts. The workflow
   * 			step must be in a waiting state to accept an action. The request fails if
   * 			the step has already timed out or been actioned.</p>
   * @public
   */
  action: WorkflowStepActionType | undefined;

  /**
   * <p>The reason for the action. This value is stored with the step
   * 			execution record and is accessible in subsequent workflow steps
   * 			via step output references.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface SendWorkflowStepActionResponse {
  /**
   * <p>The unique identifier for the workflow step that received the action, as
   * 			specified in the request.</p>
   * @public
   */
  stepExecutionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image build version that received the action
   * 			request.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;

  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartImagePipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that you want to manually
   * 			invoke.</p>
   * @public
   */
  imagePipelineArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags for Image Builder to apply to the image resource that's created
   * 			when pipeline execution starts.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartImagePipelineExecutionResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image that the request created.</p>
   * @public
   */
  imageBuildVersionArn?: string | undefined;
}

/**
 * <p>Additional rules to specify resources that should be exempt from ad-hoc lifecycle actions.</p>
 * @public
 */
export interface ResourceStateUpdateExclusionRules {
  /**
   * <p>Defines criteria for AMIs that Image Builder should exclude from the resource
   * 			state update.</p>
   * @public
   */
  amis?: LifecyclePolicyDetailExclusionRulesAmis | undefined;
}

/**
 * <p>Specifies which underlying resources the resource state update applies to,
 * 			in addition to the Image Builder image resource itself: distributed AMIs and their
 * 			snapshots for AMI images, or distributed container images for container
 * 			images.</p>
 * @public
 */
export interface ResourceStateUpdateIncludeResources {
  /**
   * <p>Specifies whether the lifecycle action should apply to distributed AMIs.</p>
   * @public
   */
  amis?: boolean | undefined;

  /**
   * <p>Specifies whether the lifecycle action should apply to snapshots associated with distributed AMIs.</p>
   * @public
   */
  snapshots?: boolean | undefined;

  /**
   * <p>Specifies whether the lifecycle action should apply to distributed containers.</p>
   * @public
   */
  containers?: boolean | undefined;
}

/**
 * <p>The state to apply to the image resource in a resource state update
 * 			request.</p>
 * @public
 */
export interface ResourceState {
  /**
   * <p>The status to which you want to move the image resource. Set the status to
   * 			<code>AVAILABLE</code> to restore an image that's currently deprecated
   * 			or disabled.</p>
   * @public
   */
  status?: ResourceStatus | undefined;
}

/**
 * @public
 */
export interface StartResourceStateUpdateRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image build version to update. The
   * 			image must be in one of these terminal states: <code>AVAILABLE</code>,
   * 			<code>DEPRECATED</code>, <code>DISABLED</code>,
   * 			<code>FAILED</code>, or <code>CANCELLED</code>. Images with
   * 			<code>FAILED</code> or <code>CANCELLED</code> status can transition only
   * 			to <code>DELETED</code>.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Specifies the lifecycle action to take for this request. For AMI-based
   * 			images, valid values are <code>AVAILABLE</code>,
   * 			<code>DEPRECATED</code>, <code>DISABLED</code>, and
   * 			<code>DELETED</code>. For container-based images, only
   * 			<code>DELETED</code> is supported.</p>
   * @public
   */
  state: ResourceState | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role that's used to update image state. You
   * 			must provide this property together with <code>includeResources</code>.
   * 			Neither is valid without the other.</p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>Specifies which underlying resources to update, in addition to the Image Builder
   * 			image resource itself. Snapshots and containers are only valid for the
   * 			<code>DELETED</code> state. To set an image to <code>DELETED</code>, you
   * 			must include its underlying resources. To delete only the Image Builder image
   * 			record, use the <a>DeleteImage</a> operation instead.</p>
   * @public
   */
  includeResources?: ResourceStateUpdateIncludeResources | undefined;

  /**
   * <p>Rules that Image Builder evaluates against each of the image's AMIs. Matching
   * 			AMIs and their snapshots are skipped. Exclusion rules only take effect when
   * 			the request includes AMIs. If the target state is <code>DELETED</code> and
   * 			any resource was skipped, the Image Builder image resource itself is also retained.
   * 			For the <code>DEPRECATED</code> and <code>DISABLED</code> target states,
   * 			Image Builder updates the image resource's state regardless of
   * 			exclusions.</p>
   * @public
   */
  exclusionRules?: ResourceStateUpdateExclusionRules | undefined;

  /**
   * <p>The timestamp that indicates when resources are updated by a lifecycle
   * 			action. This property is valid only when the target status is
   * 			<code>DEPRECATED</code>, and the value must be a future time. If you
   * 			don't specify a value, Image Builder begins the state update right away. For a
   * 			scheduled deprecation, included AMIs get their EC2 deprecation time set
   * 			immediately, and Image Builder schedules the image resource to transition to
   * 			<code>DEPRECATED</code> at that time.</p>
   * @public
   */
  updateAt?: Date | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartResourceStateUpdateResponse {
  /**
   * <p>Identifies the lifecycle execution that performs the resource state update.
   * 			Image Builder only returns this field when it started a lifecycle execution for the
   * 			update. Use it with <a>GetLifecycleExecution</a> to track
   * 			progress.</p>
   * @public
   */
  lifecycleExecutionId?: string | undefined;

  /**
   * <p>The requested Amazon Resource Name (ARN) of the Image Builder resource for the asynchronous update.</p>
   * @public
   */
  resourceArn?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to apply to the resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that you want to
   * 			update.</p>
   * @public
   */
  distributionConfigurationArn: string | undefined;

  /**
   * <p>The description of the distribution configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The distribution settings for the configuration. Each entry defines how
   * 			output images are distributed in one target Amazon Web Services Region. A Region can
   * 			appear at most once in the list. This list replaces the configuration's existing
   * 			distributions entirely.</p>
   * @public
   */
  distributions: Distribution[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDistributionConfigurationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that was updated by
   * 			this request.</p>
   * @public
   */
  distributionConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateImagePipelineRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that you want to update.</p>
   * @public
   */
  imagePipelineArn: string | undefined;

  /**
   * <p>The description of the image pipeline.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that configures
   * 			images created by this image pipeline. You must specify either this property
   * 			or <code>containerRecipeArn</code>, but not both.</p>
   * @public
   */
  imageRecipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe that is used to configure images
   * 			created by this container pipeline. You must specify either this property or
   * 			<code>imageRecipeArn</code>, but not both.</p>
   * @public
   */
  containerRecipeArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that Image Builder uses to
   * 			build images created by this image pipeline.</p>
   * @public
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that Image Builder uses to
   * 			configure and distribute images created by this image pipeline.</p>
   * @public
   */
  distributionConfigurationArn?: string | undefined;

  /**
   * <p>Specifies the test settings that Image Builder applies to images that this
   * 			pipeline creates. If you don't provide test settings, Image Builder stores a default
   * 			configuration with image tests enabled.</p>
   * @public
   */
  imageTestsConfiguration?: ImageTestsConfiguration | undefined;

  /**
   * <p>Specifies whether to collect additional information about the image being created, including the operating
   * 			system (OS) version and package list. Defaults to <code>true</code>.</p>
   * @public
   */
  enhancedImageMetadataEnabled?: boolean | undefined;

  /**
   * <p>The schedule of the image pipeline. Because the update replaces the entire
   * 			configuration, omitting this property removes any existing schedule. The
   * 			pipeline then runs only when you call
   * 			<a>StartImagePipelineExecution</a>.</p>
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * <p>The status of the image pipeline. Defaults to <code>ENABLED</code> when
   * 			omitted. To keep a pipeline disabled, include this property set to
   * 			<code>DISABLED</code> in your update request.</p>
   * @public
   */
  status?: PipelineStatus | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Contains settings for vulnerability scans that Amazon Inspector runs against the test instance
   * 			during image creation.</p>
   * @public
   */
  imageScanningConfiguration?: ImageScanningConfiguration | undefined;

  /**
   * <p>The array of workflow configuration objects for builds that this pipeline
   * 			starts. You must also specify <code>executionRole</code> when you provide
   * 			workflows.</p>
   * @public
   */
  workflows?: WorkflowConfiguration[] | undefined;

  /**
   * <p>Specifies the logging configuration for the image pipeline. Use this
   * 			to define custom CloudWatch Logs log groups for your pipeline execution
   * 			logs and image build logs. The service manages log groups with names
   * 			starting with <code>/aws/imagebuilder/</code> using the service-linked
   * 			role. For custom log group names outside of this prefix, you must also
   * 			provide an <code>executionRole</code>.</p>
   * @public
   */
  loggingConfiguration?: PipelineLoggingConfiguration | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) for the IAM role you create that grants
   * 			Image Builder access to perform workflow actions. If you omit this property, the
   * 			pipeline reverts to the Image Builder service-linked role.</p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>The tags that Image Builder applies to the Image Builder image resource that this
   * 			pipeline's scheduled executions create. These tags don't apply to the
   * 			output AMI. To tag output AMIs, use <code>amiTags</code> in the
   * 			pipeline's distribution configuration.</p>
   * @public
   */
  imageTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateImagePipelineResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that was updated by this
   * 			request.</p>
   * @public
   */
  imagePipelineArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateInfrastructureConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that you want to
   * 			update.</p>
   * @public
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p>The description of the infrastructure configuration.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The instance types of the infrastructure configuration. You can specify one or more
   * 			instance types to use for this build. Image Builder picks one of these instance types
   * 			based on availability. If you don't specify instance types, Image Builder selects
   * 			compatible instance types automatically. If you specify a Dedicated Host,
   * 			Image Builder uses only instance types that the host supports.</p>
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * <p>The instance profile to associate with the instance used to customize your Amazon EC2
   * 			AMI. The instance profile must exist in your account.</p>
   * @public
   */
  instanceProfileName: string | undefined;

  /**
   * <p>The security group IDs to associate with the instance used to customize your Amazon EC2
   * 			AMI.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The subnet ID in which to place the instance used to customize your Amazon EC2
   * 			AMI. If you specify <code>subnetId</code>, you must also specify one or
   * 			more security group IDs in <code>securityGroupIds</code>. Otherwise, the
   * 			request fails.</p>
   * @public
   */
  subnetId?: string | undefined;

  /**
   * <p>The logging configuration of the infrastructure configuration. When you
   * 			configure S3 logs, Image Builder writes logs from the build and test process to the
   * 			specified bucket under the key prefix.</p>
   * @public
   */
  logging?: Logging | undefined;

  /**
   * <p>The key pair of the infrastructure configuration. You can use this to log on to and
   * 			debug the instance used to create your image.</p>
   * @public
   */
  keyPair?: string | undefined;

  /**
   * <p>Specifies whether to terminate the instance on failure. Set to
   * 			false if you want Image Builder to retain the instance used to configure your AMI if the build or
   * 			test phase of your workflow fails. Defaults to <code>true</code>.</p>
   * @public
   */
  terminateInstanceOnFailure?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic to which Image Builder
   * 			sends image build event notifications. Specify a standard topic. Image Builder doesn't support FIFO
   * 			topics. Image Builder validates the topic when you create or update the configuration.
   * 			You must have permission to publish to the topic.</p>
   *          <note>
   *             <p>EC2 Image Builder can't send notifications to SNS topics that are encrypted using keys
   * 				from other accounts. If your SNS topic is encrypted, the key must be owned by the
   * 				same account that owns your Image Builder resources.</p>
   *          </note>
   * @public
   */
  snsTopicArn?: string | undefined;

  /**
   * <p>The metadata tags to assign to the Amazon EC2 instance that Image Builder launches during
   * 			the build process. Tags are formatted as key value pairs. Tag keys can't
   * 			begin with <code>aws:</code> or match one of the following reserved keys:
   * 			<code>CreatedBy</code>, <code>Ec2ImageBuilderArn</code>, <code>Name</code>,
   * 			or <code>Tags</code>.</p>
   * @public
   */
  resourceTags?: Record<string, string> | undefined;

  /**
   * <p>The instance metadata service (IMDS) settings that Image Builder applies to the EC2
   * 			build and test instances it launches during image creation. If you don't
   * 			set these options, the EC2 launch defaults for the instance apply. For more
   * 			information about instance metadata options, see one of the following
   * 			links:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the
   * 						<i>
   *                      <i>Amazon EC2 User Guide</i>
   *                   </i> for Linux instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure the instance metadata options</a> in the
   * 						<i>
   *                      <i>Amazon EC2 Windows Guide</i>
   *                   </i> for Windows instances.</p>
   *             </li>
   *          </ul>
   * @public
   */
  instanceMetadataOptions?: InstanceMetadataOptions | undefined;

  /**
   * <p>The instance placement settings that define where the build and test
   * 			instances that Image Builder launches during image creation run. These settings
   * 			don't affect instances that you launch from the output image.</p>
   * @public
   */
  placement?: Placement | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateInfrastructureConfigurationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>The client token that uniquely identifies the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that was updated by
   * 			this request.</p>
   * @public
   */
  infrastructureConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLifecyclePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle policy resource.</p>
   * @public
   */
  lifecyclePolicyArn: string | undefined;

  /**
   * <p>Optional description for the lifecycle policy. Because the update replaces the
   * 			entire configuration, omitting this property removes any existing
   * 			description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Indicates whether the lifecycle policy resource is enabled. Defaults to
   * 			<code>ENABLED</code> when omitted, so updating a disabled policy without
   * 			setting this property re-enables it.</p>
   * @public
   */
  status?: LifecyclePolicyStatus | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access
   * 			to run lifecycle actions.</p>
   * @public
   */
  executionRole: string | undefined;

  /**
   * <p>The type of image resource that the lifecycle policy applies to. The value
   * 			must match the policy's existing resource type. You can't change the
   * 			resource type of an existing lifecycle policy.</p>
   * @public
   */
  resourceType: LifecyclePolicyResourceType | undefined;

  /**
   * <p>The configuration details for a lifecycle policy resource.</p>
   * @public
   */
  policyDetails: LifecyclePolicyDetail[] | undefined;

  /**
   * <p>Selection criteria for resources that the lifecycle policy applies to. You
   * 			must specify exactly one selection criteria: either recipes or a tag map,
   * 			not both.</p>
   * @public
   */
  resourceSelection: LifecyclePolicyResourceSelection | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure
   *        that the operation runs no more than one time. If you retry a request with the same client
   * 	   token, Image Builder returns the original response without running the operation again. For more
   * 	   information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateLifecyclePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the image lifecycle policy resource that was updated.</p>
   * @public
   */
  lifecyclePolicyArn?: string | undefined;
}
