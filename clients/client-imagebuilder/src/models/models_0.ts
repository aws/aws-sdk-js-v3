// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ImagebuilderServiceException as __BaseException } from "./ImagebuilderServiceException";

/**
 * <p>Contains settings for the Systems Manager agent on your build instance.</p>
 */
export interface SystemsManagerAgent {
  /**
   * <p>Controls whether the Systems Manager agent is removed from your final build image, prior to creating
   * 			the new AMI. If this is set to true, then the agent is removed from the final image. If it's
   * 			set to false, then the agent is left in, so that it is included in the new AMI. The default
   * 			value is false.</p>
   */
  uninstallAfterBuild?: boolean;
}

/**
 * <p>In addition to your infrastructure configuration, these settings provide an extra layer of
 * 			control over your build instances. You can also specify commands to run on launch for all of
 * 			your build instances.</p>
 *          <p>Image Builder does not automatically install the Systems Manager agent on Windows instances. If your
 * 			base image includes the Systems Manager agent, then the AMI that you create will also include the
 * 			agent. For Linux instances, if the base image does not already include the Systems Manager agent, Image Builder
 * 			installs it. For Linux instances where Image Builder installs the Systems Manager agent, you can choose
 * 			whether to keep it for the AMI that you create.</p>
 */
export interface AdditionalInstanceConfiguration {
  /**
   * <p>Contains settings for the Systems Manager agent on your build instance.</p>
   */
  systemsManagerAgent?: SystemsManagerAgent;

  /**
   * <p>Use this property to provide commands or a command script to run when you launch
   * 			your build instance.</p>
   *          <p>The userDataOverride property replaces any commands that Image Builder might have added to ensure
   * 			that Systems Manager is installed on your Linux build instance. If you override the user data,
   * 			make sure that you add commands to install Systems Manager, if it is not pre-installed on your
   * 			base image.</p>
   *          <note>
   *             <p>The user data is always base 64 encoded. For example, the
   * 				following commands are encoded as <code>IyEvYmluL2Jhc2gKbWtkaXIgLXAgL3Zhci9iYi8KdG91Y2ggL3Zhci$</code>:</p>
   *             <p>
   *                <i>#!/bin/bash</i>
   *             </p>
   *             <p>mkdir -p /var/bb/</p>
   *             <p>touch /var</p>
   *          </note>
   */
  userDataOverride?: string;
}

export enum ImageStatus {
  AVAILABLE = "AVAILABLE",
  BUILDING = "BUILDING",
  CANCELLED = "CANCELLED",
  CREATING = "CREATING",
  DELETED = "DELETED",
  DEPRECATED = "DEPRECATED",
  DISTRIBUTING = "DISTRIBUTING",
  FAILED = "FAILED",
  INTEGRATING = "INTEGRATING",
  PENDING = "PENDING",
  TESTING = "TESTING",
}

/**
 * <p> Image state shows the image status and the reason for that status.</p>
 */
export interface ImageState {
  /**
   * <p>The status of the image.</p>
   */
  status?: ImageStatus | string;

  /**
   * <p>The reason for the image's status.</p>
   */
  reason?: string;
}

/**
 * <p> Details of an Amazon EC2 AMI.</p>
 */
export interface Ami {
  /**
   * <p>The Amazon Web Services Region of the Amazon EC2 AMI.</p>
   */
  region?: string;

  /**
   * <p>The AMI ID of the Amazon EC2 AMI.</p>
   */
  image?: string;

  /**
   * <p>The name of the Amazon EC2 AMI.</p>
   */
  name?: string;

  /**
   * <p>The description of the Amazon EC2 AMI. Minimum and maximum length are in characters.</p>
   */
  description?: string;

  /**
   * <p> Image state shows the image status and the reason for that status.</p>
   */
  state?: ImageState;

  /**
   * <p>The account ID of the owner of the AMI.</p>
   */
  accountId?: string;
}

/**
 * <p>Describes the configuration for a launch permission. The launch permission modification
 * 			request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2 ModifyImageAttribute</a>
 * 			API on behalf of the user for each Region they have selected to distribute the AMI. To make an AMI public,
 * 			set the launch permission authorized accounts to <code>all</code>. See the examples for making an AMI
 * 			public at <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2 ModifyImageAttribute</a>.</p>
 */
export interface LaunchPermissionConfiguration {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  userIds?: string[];

  /**
   * <p>The name of the group.</p>
   */
  userGroups?: string[];

  /**
   * <p>The ARN for an Amazon Web Services Organization that you want to share your AMI with. For more information, see
   * 			<a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">What is Organizations?</a>.</p>
   */
  organizationArns?: string[];

  /**
   * <p>The ARN for an Organizations organizational unit (OU) that you want to share your AMI with. For more
   * 			information about key concepts for Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html">Organizations terminology and concepts</a>.</p>
   */
  organizationalUnitArns?: string[];
}

/**
 * <p> Define and configure the output AMIs of the pipeline.</p>
 */
export interface AmiDistributionConfiguration {
  /**
   * <p>The name of the output AMI.</p>
   */
  name?: string;

  /**
   * <p>The description of the AMI distribution configuration. Minimum and maximum length are in characters.</p>
   */
  description?: string;

  /**
   * <p>The ID of an account to which you want to distribute an image.</p>
   */
  targetAccountIds?: string[];

  /**
   * <p>The tags to apply to AMIs distributed to this Region.</p>
   */
  amiTags?: Record<string, string>;

  /**
   * <p>The KMS key identifier used to encrypt the distributed image.</p>
   */
  kmsKeyId?: string;

  /**
   * <p> Launch permissions can be used to configure which Amazon Web Services accounts can use the AMI to launch
   * 			instances.</p>
   */
  launchPermission?: LaunchPermissionConfiguration;
}

export enum BuildType {
  IMPORT = "IMPORT",
  SCHEDULED = "SCHEDULED",
  USER_INITIATED = "USER_INITIATED",
}

/**
 * <p>You have exceeded the permitted request rate for the specific operation.</p>
 */
export class CallRateLimitExceededException extends __BaseException {
  readonly name: "CallRateLimitExceededException" = "CallRateLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CallRateLimitExceededException, __BaseException>) {
    super({
      name: "CallRateLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CallRateLimitExceededException.prototype);
  }
}

export interface CancelImageCreationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image whose creation you want to cancel.</p>
   */
  imageBuildVersionArn: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   */
  clientToken?: string;
}

export interface CancelImageCreationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The idempotency token that was used for this request.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image whose creation has been cancelled.</p>
   */
  imageBuildVersionArn?: string;
}

/**
 * <p>These errors are usually caused by a client action, such as using an action or resource on
 * 			behalf of a user that doesn't have permissions to use the action or resource, or specifying an
 * 			invalid resource identifier.</p>
 */
export class ClientException extends __BaseException {
  readonly name: "ClientException" = "ClientException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClientException, __BaseException>) {
    super({
      name: "ClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClientException.prototype);
  }
}

/**
 * <p>You are not authorized to perform the requested operation.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
  }
}

/**
 * <p>You have specified a client token for an operation using parameter values that differ from
 * 			a previous request that used the same client token.</p>
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name: "IdempotentParameterMismatchException" = "IdempotentParameterMismatchException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatchException, __BaseException>) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
  }
}

/**
 * <p>You have made a request for an action that is not supported by the service.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

/**
 * <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

/**
 * <p>This exception is thrown when the service encounters an unrecoverable exception.</p>
 */
export class ServiceException extends __BaseException {
  readonly name: "ServiceException" = "ServiceException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceException, __BaseException>) {
    super({
      name: "ServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceException.prototype);
  }
}

/**
 * <p>The service is unable to process your request at this time.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * <p>Defines a parameter that is used to provide configuration details for the component.</p>
 */
export interface ComponentParameterDetail {
  /**
   * <p>The name of this input parameter.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of input this parameter provides. The currently supported value is "string".</p>
   */
  type: string | undefined;

  /**
   * <p>The default value of this parameter if no input is provided.</p>
   */
  defaultValue?: string[];

  /**
   * <p>Describes this parameter.</p>
   */
  description?: string;
}

export enum Platform {
  LINUX = "Linux",
  WINDOWS = "Windows",
}

export enum ComponentStatus {
  DEPRECATED = "DEPRECATED",
}

/**
 * <p>A group of fields that describe the current status of components
 * 			that are no longer active.</p>
 */
export interface ComponentState {
  /**
   * <p>The current state of the component.</p>
   */
  status?: ComponentStatus | string;

  /**
   * <p>Describes how or why the component changed state.</p>
   */
  reason?: string;
}

export enum ComponentType {
  BUILD = "BUILD",
  TEST = "TEST",
}

/**
 * <p>A detailed view of a component.</p>
 */
export interface Component {
  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  arn?: string;

  /**
   * <p>The name of the component.</p>
   */
  name?: string;

  /**
   * <p>The version of the component.</p>
   */
  version?: string;

  /**
   * <p>The description of the component.</p>
   */
  description?: string;

  /**
   * <p>The change description of the component.</p>
   */
  changeDescription?: string;

  /**
   * <p>The component type specifies whether Image Builder uses the component to build the image or only
   * 			to test it.</p>
   */
  type?: ComponentType | string;

  /**
   * <p>The operating system platform of the component.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The operating system (OS) version supported by the component. If the OS information is
   * 			available, Image Builder performs a prefix match against the base image OS version during image recipe
   * 			creation.</p>
   */
  supportedOsVersions?: string[];

  /**
   * <p>Describes the current status of the component. This is used for
   * 			components that are no longer active.</p>
   */
  state?: ComponentState;

  /**
   * <p>Contains parameter details for each of the parameters that the component document
   * 			defined for the component.</p>
   */
  parameters?: ComponentParameterDetail[];

  /**
   * <p>The owner of the component.</p>
   */
  owner?: string;

  /**
   * <p>Component data contains the YAML document content for the component.</p>
   */
  data?: string;

  /**
   * <p>The KMS key identifier used to encrypt the component.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The encryption status of the component.</p>
   */
  encrypted?: boolean;

  /**
   * <p>The date that Image Builder created the component.</p>
   */
  dateCreated?: string;

  /**
   * <p>The tags that apply to the component.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Contains the name of the publisher if this is a third-party component. Otherwise,
   * 			this property is empty.</p>
   */
  publisher?: string;

  /**
   * <p>Indicates whether component source is hidden from view in the console,
   * 			and from component detail results for API, CLI, or SDK operations.</p>
   */
  obfuscate?: boolean;
}

/**
 * <p>Contains a key/value pair that sets the named component parameter.</p>
 */
export interface ComponentParameter {
  /**
   * <p>The name of the component parameter to set.</p>
   */
  name: string | undefined;

  /**
   * <p>Sets the value for the named component parameter.</p>
   */
  value: string[] | undefined;
}

/**
 * <p> Configuration details of the component.</p>
 */
export interface ComponentConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  componentArn: string | undefined;

  /**
   * <p>A group of parameter settings that Image Builder uses to configure the component for a specific recipe.</p>
   */
  parameters?: ComponentParameter[];
}

export enum ComponentFormat {
  SHELL = "SHELL",
}

/**
 * <p>A high-level summary of a component.</p>
 */
export interface ComponentSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  arn?: string;

  /**
   * <p>The name of the component.</p>
   */
  name?: string;

  /**
   * <p>The version of the component.</p>
   */
  version?: string;

  /**
   * <p>The operating system platform of the component.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The operating system (OS) version that the component supports. If the OS information is
   * 			available, Image Builder performs a prefix match against the base image OS version during image recipe
   * 			creation.</p>
   */
  supportedOsVersions?: string[];

  /**
   * <p>Describes the current status of the component.</p>
   */
  state?: ComponentState;

  /**
   * <p>The component type specifies whether Image Builder uses the component to build the image or only
   * 			to test it.</p>
   */
  type?: ComponentType | string;

  /**
   * <p>The owner of the component.</p>
   */
  owner?: string;

  /**
   * <p>The description of the component.</p>
   */
  description?: string;

  /**
   * <p>The change description for the current version of the component.</p>
   */
  changeDescription?: string;

  /**
   * <p>The original creation date of the component.</p>
   */
  dateCreated?: string;

  /**
   * <p>The tags that apply to the component.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Contains the name of the publisher if this is a third-party component. Otherwise,
   * 			this property is empty.</p>
   */
  publisher?: string;

  /**
   * <p>Indicates whether component source is hidden from view in the console,
   * 			and from component detail results for API, CLI, or SDK operations.</p>
   */
  obfuscate?: boolean;
}

/**
 * <p>The defining characteristics of a specific version of an Amazon Web Services TOE component.</p>
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
   */
  arn?: string;

  /**
   * <p>The name of the component.</p>
   */
  name?: string;

  /**
   * <p>The semantic version of the component.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *             <p>
   *                <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x)
   * 	to specify the most recent versions or nodes when selecting the base image or components for your
   * 	recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be
   * 	wildcards.</p>
   *          </note>
   */
  version?: string;

  /**
   * <p>The description of the component.</p>
   */
  description?: string;

  /**
   * <p>The platform of the component.</p>
   */
  platform?: Platform | string;

  /**
   * <p>he operating system (OS) version supported by the component. If the OS information is
   * 			available, a prefix match is performed against the base image OS version during image recipe
   * 			creation.</p>
   */
  supportedOsVersions?: string[];

  /**
   * <p>The type of the component denotes whether the component is used to build the image or only
   * 			to test it.</p>
   */
  type?: ComponentType | string;

  /**
   * <p>The owner of the component.</p>
   */
  owner?: string;

  /**
   * <p>The date that the component was created.</p>
   */
  dateCreated?: string;
}

/**
 * <p>A container encapsulates the runtime environment for an application.</p>
 */
export interface Container {
  /**
   * <p>Containers and container images are Region-specific. This is the Region context for the container.</p>
   */
  region?: string;

  /**
   * <p>A list of URIs for containers created in the context Region.</p>
   */
  imageUris?: string[];
}

export enum ContainerRepositoryService {
  ECR = "ECR",
}

/**
 * <p>The container repository where the output container image is stored.</p>
 */
export interface TargetContainerRepository {
  /**
   * <p>Specifies the service in which this image was registered.</p>
   */
  service: ContainerRepositoryService | string | undefined;

  /**
   * <p>The name of the container repository where the output container image is stored. This name is prefixed by the repository location.</p>
   */
  repositoryName: string | undefined;
}

/**
 * <p>Container distribution settings for encryption, licensing, and sharing in a specific Region.</p>
 */
export interface ContainerDistributionConfiguration {
  /**
   * <p>The description of the container distribution configuration.</p>
   */
  description?: string;

  /**
   * <p>Tags that are attached to the container distribution configuration.</p>
   */
  containerTags?: string[];

  /**
   * <p>The destination repository for the container distribution configuration.</p>
   */
  targetRepository: TargetContainerRepository | undefined;
}

export enum ContainerType {
  DOCKER = "DOCKER",
}

export enum EbsVolumeType {
  GP2 = "gp2",
  GP3 = "gp3",
  IO1 = "io1",
  IO2 = "io2",
  SC1 = "sc1",
  ST1 = "st1",
  STANDARD = "standard",
}

/**
 * <p>Amazon EBS-specific block device mapping specifications.</p>
 */
export interface EbsInstanceBlockDeviceSpecification {
  /**
   * <p>Use to configure device encryption.</p>
   */
  encrypted?: boolean;

  /**
   * <p>Use to configure delete on termination of the associated device.</p>
   */
  deleteOnTermination?: boolean;

  /**
   * <p>Use to configure device IOPS.</p>
   */
  iops?: number;

  /**
   * <p>Use to configure the KMS key to use when encrypting the device.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The snapshot that defines the device contents.</p>
   */
  snapshotId?: string;

  /**
   * <p>Use to override the device's volume size.</p>
   */
  volumeSize?: number;

  /**
   * <p>Use to override the device's volume type.</p>
   */
  volumeType?: EbsVolumeType | string;

  /**
   * <p>
   *             <b>For GP3 volumes only</b> –
   * 			The throughput in MiB/s that the volume supports. </p>
   */
  throughput?: number;
}

/**
 * <p>Defines block device mappings for the instance used to configure your image.</p>
 */
export interface InstanceBlockDeviceMapping {
  /**
   * <p>The device to which these mappings apply.</p>
   */
  deviceName?: string;

  /**
   * <p>Use to manage Amazon EBS-specific configuration for this mapping.</p>
   */
  ebs?: EbsInstanceBlockDeviceSpecification;

  /**
   * <p>Use to manage instance ephemeral devices.</p>
   */
  virtualName?: string;

  /**
   * <p>Use to remove a mapping from the base image.</p>
   */
  noDevice?: string;
}

/**
 * <p>Defines a custom base AMI and block device mapping configurations of an instance
 * 			used for building and testing container images.</p>
 */
export interface InstanceConfiguration {
  /**
   * <p>The AMI ID to use as the base image for a container build and test instance. If not specified,
   * 			Image Builder will use the appropriate ECS-optimized AMI as a base image.</p>
   */
  image?: string;

  /**
   * <p>Defines the block devices to attach for building an instance from this Image Builder AMI.</p>
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[];
}

/**
 * <p>A container recipe.</p>
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
   */
  arn?: string;

  /**
   * <p>Specifies the type of container, such as Docker.</p>
   */
  containerType?: ContainerType | string;

  /**
   * <p>The name of the container recipe.</p>
   */
  name?: string;

  /**
   * <p>The description of the container recipe.</p>
   */
  description?: string;

  /**
   * <p>The system platform for the container, such as Windows or Linux.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The owner of the container recipe.</p>
   */
  owner?: string;

  /**
   * <p>The semantic version of the container recipe.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *             <p>
   *                <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x)
   * 	to specify the most recent versions or nodes when selecting the base image or components for your
   * 	recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be
   * 	wildcards.</p>
   *          </note>
   */
  version?: string;

  /**
   * <p>Build and test components that are included in the container recipe. Recipes require a minimum of one build component, and can
   * 			have a maximum of 20 build and test components in any combination.</p>
   */
  components?: ComponentConfiguration[];

  /**
   * <p>A group of options that can be used to configure an instance for building and testing container images.</p>
   */
  instanceConfiguration?: InstanceConfiguration;

  /**
   * <p>Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside. The template data consists of contextual variables where Image Builder places build information or scripts, based on your container image recipe.</p>
   */
  dockerfileTemplateData?: string;

  /**
   * <p>Identifies which KMS key is used to encrypt the container image for distribution to the target Region.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>A flag that indicates if the target container is encrypted.</p>
   */
  encrypted?: boolean;

  /**
   * <p>The base image for the container recipe.</p>
   */
  parentImage?: string;

  /**
   * <p>The date when this container recipe was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>Tags that are attached to the container recipe.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The working directory for use during build and test workflows.</p>
   */
  workingDirectory?: string;

  /**
   * <p>The destination repository for the container image.</p>
   */
  targetRepository?: TargetContainerRepository;
}

/**
 * <p>A summary of a container recipe</p>
 */
export interface ContainerRecipeSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe.</p>
   */
  arn?: string;

  /**
   * <p>Specifies the type of container, such as "Docker".</p>
   */
  containerType?: ContainerType | string;

  /**
   * <p>The name of the container recipe.</p>
   */
  name?: string;

  /**
   * <p>The system platform for the container, such as Windows or Linux.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The owner of the container recipe.</p>
   */
  owner?: string;

  /**
   * <p>The base image for the container recipe.</p>
   */
  parentImage?: string;

  /**
   * <p>The date when this container recipe was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>Tags that are attached to the container recipe.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateComponentRequest {
  /**
   * <p>The name of the component.</p>
   */
  name: string | undefined;

  /**
   * <p>The semantic version of the component. This version follows the semantic version syntax.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *          </note>
   */
  semanticVersion: string | undefined;

  /**
   * <p>Describes the contents of the component.</p>
   */
  description?: string;

  /**
   * <p>The change description of the component. Describes what change has been made in this
   * 			version, or what makes this version different from other versions of this component.</p>
   */
  changeDescription?: string;

  /**
   * <p>The operating system platform of the component.</p>
   */
  platform: Platform | string | undefined;

  /**
   * <p> The operating system (OS) version supported by the component. If the OS information is
   * 			available, a prefix match is performed against the base image OS version during image recipe
   * 			creation.</p>
   */
  supportedOsVersions?: string[];

  /**
   * <p>Component <code>data</code> contains inline YAML document content for the component.
   * 			Alternatively, you can specify the <code>uri</code> of a YAML document file stored in
   * 			Amazon S3. However, you cannot specify both properties.</p>
   */
  data?: string;

  /**
   * <p>The <code>uri</code> of a YAML component document file. This must be an S3 URL
   * 			(<code>s3://bucket/key</code>), and the requester must have permission to access
   * 			the S3 bucket it points to. If you use Amazon S3, you can specify component content
   * 			up to your service quota.</p>
   *          <p>Alternatively, you can specify the YAML document inline, using the component
   * 			<code>data</code> property. You cannot specify both properties.</p>
   */
  uri?: string;

  /**
   * <p>The ID of the KMS key that is used to encrypt this component.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The tags that apply to the component.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The idempotency token of the component.</p>
   */
  clientToken?: string;
}

export interface CreateComponentResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the component that was created by this request.</p>
   */
  componentBuildVersionArn?: string;
}

/**
 * <p>You have specified two or more mutually exclusive parameters. Review the error message for
 * 			details.</p>
 */
export class InvalidParameterCombinationException extends __BaseException {
  readonly name: "InvalidParameterCombinationException" = "InvalidParameterCombinationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterCombinationException, __BaseException>) {
    super({
      name: "InvalidParameterCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterCombinationException.prototype);
  }
}

/**
 * <p>Your version number is out of bounds or does not follow the required syntax.</p>
 */
export class InvalidVersionNumberException extends __BaseException {
  readonly name: "InvalidVersionNumberException" = "InvalidVersionNumberException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidVersionNumberException, __BaseException>) {
    super({
      name: "InvalidVersionNumberException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidVersionNumberException.prototype);
  }
}

/**
 * <p>You have exceeded the number of permitted resources or operations for this service. For service quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder">EC2 Image Builder endpoints and quotas</a>.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

export interface CreateContainerRecipeRequest {
  /**
   * <p>The type of container to create.</p>
   */
  containerType: ContainerType | string | undefined;

  /**
   * <p>The name of the container recipe.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the container recipe.</p>
   */
  description?: string;

  /**
   * <p>The semantic version of the container recipe. This version follows the semantic version syntax.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *          </note>
   */
  semanticVersion: string | undefined;

  /**
   * <p>Components for build and test that are included in the container recipe. Recipes require a minimum of one build component, and can
   * 			have a maximum of 20 build and test components in any combination.</p>
   */
  components: ComponentConfiguration[] | undefined;

  /**
   * <p>A group of options that can be used to configure an instance for building and testing container images.</p>
   */
  instanceConfiguration?: InstanceConfiguration;

  /**
   * <p>The Dockerfile template used to build your image as an inline data blob.</p>
   */
  dockerfileTemplateData?: string;

  /**
   * <p>The Amazon S3 URI for the Dockerfile that will be used to build your container image.</p>
   */
  dockerfileTemplateUri?: string;

  /**
   * <p>Specifies the operating system platform when you use a custom base image.</p>
   */
  platformOverride?: Platform | string;

  /**
   * <p>Specifies the operating system version for the base image.</p>
   */
  imageOsVersionOverride?: string;

  /**
   * <p>The base image for the container recipe.</p>
   */
  parentImage: string | undefined;

  /**
   * <p>Tags that are attached to the container recipe.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The working directory for use during build and test workflows.</p>
   */
  workingDirectory?: string;

  /**
   * <p>The destination repository for the container image.</p>
   */
  targetRepository: TargetContainerRepository | undefined;

  /**
   * <p>Identifies which KMS key is used to encrypt the container image.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The client token used to make this request idempotent.</p>
   */
  clientToken?: string;
}

export interface CreateContainerRecipeResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The client token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>Returns the Amazon Resource Name (ARN) of the container recipe that the request created.</p>
   */
  containerRecipeArn?: string;
}

/**
 * <p>The resource that you are trying to create already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
  }
}

/**
 * <p>Identifies the launch template that the associated Windows AMI uses for
 * 			launching an instance when faster launching is enabled.</p>
 *          <note>
 *             <p>You can specify either the <code>launchTemplateName</code> or the
 * 				<code>launchTemplateId</code>, but not both.</p>
 *          </note>
 */
export interface FastLaunchLaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template to use for faster launching for a Windows AMI.</p>
   */
  launchTemplateId?: string;

  /**
   * <p>The name of the launch template to use for faster launching for a Windows AMI.</p>
   */
  launchTemplateName?: string;

  /**
   * <p>The version of the launch template to use for faster launching for a Windows AMI.</p>
   */
  launchTemplateVersion?: string;
}

/**
 * <p>Configuration settings for creating and managing pre-provisioned snapshots
 * 			for a fast-launch enabled Windows AMI.</p>
 */
export interface FastLaunchSnapshotConfiguration {
  /**
   * <p>The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled
   * 			Windows AMI.</p>
   */
  targetResourceCount?: number;
}

/**
 * <p>Define and configure faster launching for output Windows AMIs.</p>
 */
export interface FastLaunchConfiguration {
  /**
   * <p>A Boolean that represents the current state of faster launching for the
   * 			Windows AMI. Set to <code>true</code> to start using Windows faster launching, or
   * 			<code>false</code> to stop using it.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>Configuration settings for managing the number of snapshots that are
   * 			created from pre-provisioned instances for the Windows AMI when faster
   * 			launching is enabled.</p>
   */
  snapshotConfiguration?: FastLaunchSnapshotConfiguration;

  /**
   * <p>The maximum number of parallel instances that are launched for creating
   * 			resources.</p>
   */
  maxParallelLaunches?: number;

  /**
   * <p>The launch template that the fast-launch enabled Windows AMI uses when it
   * 			launches Windows instances to create pre-provisioned snapshots.</p>
   */
  launchTemplate?: FastLaunchLaunchTemplateSpecification;

  /**
   * <p>The owner account ID for the fast-launch enabled Windows AMI.</p>
   */
  accountId?: string;
}

/**
 * <p>Identifies an Amazon EC2 launch template to use for a specific account.</p>
 */
export interface LaunchTemplateConfiguration {
  /**
   * <p>Identifies the Amazon EC2 launch template to use.</p>
   */
  launchTemplateId: string | undefined;

  /**
   * <p>The account ID that this configuration applies to.</p>
   */
  accountId?: string;

  /**
   * <p>Set the specified Amazon EC2 launch template as the default launch template for the specified account.</p>
   */
  setDefaultVersion?: boolean;
}

export enum DiskImageFormat {
  RAW = "RAW",
  VHD = "VHD",
  VMDK = "VMDK",
}

/**
 * <p>Properties that configure export from your build instance
 * 			to a compatible file format for your VM.</p>
 */
export interface S3ExportConfiguration {
  /**
   * <p>The name of the role that grants VM Import/Export permission to
   * 			export images to your S3 bucket.</p>
   */
  roleName: string | undefined;

  /**
   * <p>Export the updated image to one of the following supported disk
   * 			image formats:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Virtual Hard Disk (VHD)</b> –
   * 					Compatible with Citrix Xen and Microsoft Hyper-V virtualization products.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Stream-optimized ESX Virtual Machine Disk
   * 					(VMDK)</b> – Compatible with VMware ESX and
   * 					VMware vSphere versions 4, 5, and 6.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Raw</b> – Raw format.</p>
   *             </li>
   *          </ul>
   */
  diskImageFormat: DiskImageFormat | string | undefined;

  /**
   * <p>The S3 bucket in which to store the output disk images for your VM.</p>
   */
  s3Bucket: string | undefined;

  /**
   * <p>The Amazon S3 path for the bucket where the output disk images for your VM are stored.</p>
   */
  s3Prefix?: string;
}

/**
 * <p> Defines the settings for a specific Region.</p>
 */
export interface Distribution {
  /**
   * <p>The target Region.</p>
   */
  region: string | undefined;

  /**
   * <p>The specific AMI settings; for example, launch permissions or AMI tags.</p>
   */
  amiDistributionConfiguration?: AmiDistributionConfiguration;

  /**
   * <p>Container distribution settings for encryption, licensing, and sharing
   * 			in a specific Region.</p>
   */
  containerDistributionConfiguration?: ContainerDistributionConfiguration;

  /**
   * <p>The License Manager Configuration to associate with the AMI in the specified
   * 			Region.</p>
   */
  licenseConfigurationArns?: string[];

  /**
   * <p>A group of launchTemplateConfiguration settings that apply to image distribution
   * 			for specified accounts.</p>
   */
  launchTemplateConfigurations?: LaunchTemplateConfiguration[];

  /**
   * <p>Configure export settings to deliver disk images created from your image build,
   * 			using a file format that is compatible with your VMs in that Region.</p>
   */
  s3ExportConfiguration?: S3ExportConfiguration;

  /**
   * <p>The Windows faster-launching configurations to use for AMI distribution.</p>
   */
  fastLaunchConfigurations?: FastLaunchConfiguration[];
}

export interface CreateDistributionConfigurationRequest {
  /**
   * <p> The name of the distribution configuration.</p>
   */
  name: string | undefined;

  /**
   * <p> The description of the distribution configuration.</p>
   */
  description?: string;

  /**
   * <p> The distributions of the distribution configuration.</p>
   */
  distributions: Distribution[] | undefined;

  /**
   * <p> The tags of the distribution configuration.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p> The idempotency token of the distribution configuration.</p>
   */
  clientToken?: string;
}

export interface CreateDistributionConfigurationResponse {
  /**
   * <p> The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p> The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the distribution configuration that was created by this
   * 			request.</p>
   */
  distributionConfigurationArn?: string;
}

/**
 * <p>Configure image tests for your pipeline build. Tests run after building
 * 			the image, to verify that the AMI or container image is valid before
 * 			distributing it.</p>
 */
export interface ImageTestsConfiguration {
  /**
   * <p>Determines if tests should run after building the image. Image Builder defaults
   * 			to enable tests to run following the image build, before image distribution.</p>
   */
  imageTestsEnabled?: boolean;

  /**
   * <p>The maximum time in minutes that tests are permitted to run.</p>
   *          <note>
   *             <p>The timeoutMinutes attribute is not currently active. This value is ignored.</p>
   *          </note>
   */
  timeoutMinutes?: number;
}

export interface CreateImageRequest {
  /**
   * <p> The Amazon Resource Name (ARN) of the image recipe that defines how images are
   * 			configured, tested, and assessed.</p>
   */
  imageRecipeArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.</p>
   */
  containerRecipeArn?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the distribution configuration that defines and
   * 			configures the outputs of your pipeline.</p>
   */
  distributionConfigurationArn?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the infrastructure configuration that defines the
   * 			environment in which your image will be built and tested.</p>
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p> The image tests configuration of the image.</p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * <p> Collects additional information about the image being created, including the operating
   * 			system (OS) version and package list. This information is used to enhance the overall
   * 			experience of using EC2 Image Builder. Enabled by default.</p>
   */
  enhancedImageMetadataEnabled?: boolean;

  /**
   * <p> The tags of the image.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p> The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;
}

export interface CreateImageResponse {
  /**
   * <p> The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p> The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the image that was created by this request.</p>
   */
  imageBuildVersionArn?: string;
}

export enum PipelineExecutionStartCondition {
  EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE = "EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE",
  EXPRESSION_MATCH_ONLY = "EXPRESSION_MATCH_ONLY",
}

/**
 * <p>A schedule configures how often and when a pipeline will automatically create a new image.</p>
 */
export interface Schedule {
  /**
   * <p>The cron expression determines how often EC2 Image Builder evaluates your
   * 			<code>pipelineExecutionStartCondition</code>.</p>
   *          <p>For information on how to format a cron expression in Image Builder, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/userguide/image-builder-cron.html">Use cron
   * 			expressions in EC2 Image Builder</a>.</p>
   */
  scheduleExpression?: string;

  /**
   * <p>The timezone that applies to the scheduling expression. For example, "Etc/UTC",
   * 			"America/Los_Angeles" in the <a href="https://www.joda.org/joda-time/timezones.html">IANA
   * 				timezone format</a>. If not specified this defaults to UTC.</p>
   */
  timezone?: string;

  /**
   * <p>The condition configures when the pipeline should trigger a new image build. When the
   * 			<code>pipelineExecutionStartCondition</code> is set to
   * 			<code>EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE</code>, and you use semantic version
   * 			filters on the base image or components in your image recipe, EC2 Image Builder will build a
   * 			new image only when there are new versions of the image or components in your recipe that
   * 			match the semantic version filter. When it is set to <code>EXPRESSION_MATCH_ONLY</code>, it
   * 			will build a new image every time the CRON expression matches the current time. For semantic
   * 			version syntax, see <a href="https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_CreateComponent.html">CreateComponent</a> in the <i> EC2 Image Builder API
   * 					Reference</i>.</p>
   */
  pipelineExecutionStartCondition?: PipelineExecutionStartCondition | string;
}

export enum PipelineStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface CreateImagePipelineRequest {
  /**
   * <p> The name of the image pipeline.</p>
   */
  name: string | undefined;

  /**
   * <p> The description of the image pipeline.</p>
   */
  description?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the image recipe that will be used to configure images
   * 			created by this image pipeline.</p>
   */
  imageRecipeArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe that is used to configure images created by this container pipeline.</p>
   */
  containerRecipeArn?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to
   * 			build images created by this image pipeline.</p>
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the distribution configuration that will be used to
   * 			configure and distribute images created by this image pipeline.</p>
   */
  distributionConfigurationArn?: string;

  /**
   * <p> The image test configuration of the image pipeline.</p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * <p> Collects additional information about the image being created, including the operating
   * 			system (OS) version and package list. This information is used to enhance the overall
   * 			experience of using EC2 Image Builder. Enabled by default.</p>
   */
  enhancedImageMetadataEnabled?: boolean;

  /**
   * <p> The schedule of the image pipeline.</p>
   */
  schedule?: Schedule;

  /**
   * <p> The status of the image pipeline.</p>
   */
  status?: PipelineStatus | string;

  /**
   * <p> The tags of the image pipeline.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p> The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;
}

export interface CreateImagePipelineResponse {
  /**
   * <p> The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p> The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the image pipeline that was created by this request.</p>
   */
  imagePipelineArn?: string;
}

export interface CreateImageRecipeRequest {
  /**
   * <p> The name of the image recipe.</p>
   */
  name: string | undefined;

  /**
   * <p> The description of the image recipe.</p>
   */
  description?: string;

  /**
   * <p>The semantic version of the image recipe. This version follows the semantic version syntax.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *          </note>
   */
  semanticVersion: string | undefined;

  /**
   * <p>The components included in the image recipe.</p>
   */
  components: ComponentConfiguration[] | undefined;

  /**
   * <p>The base image of the image recipe. The value of the string can be the ARN of the base
   * 			image or an AMI ID. The format for the ARN follows this example:
   * 			<code>arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/x.x.x</code>.
   * 			You can provide the specific version that you want to use, or you can use a wildcard in
   * 			all of the fields. If you enter an AMI ID for the string value, you must have access to the AMI,
   * 			and the AMI must be in the same Region in which you are using Image Builder.</p>
   */
  parentImage: string | undefined;

  /**
   * <p>The block device mappings of the image recipe.</p>
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * <p> The tags of the image recipe.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The working directory used during build and test workflows.</p>
   */
  workingDirectory?: string;

  /**
   * <p>Specify additional settings and launch scripts for your build instances.</p>
   */
  additionalInstanceConfiguration?: AdditionalInstanceConfiguration;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;
}

export interface CreateImageRecipeResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that was created by this request.</p>
   */
  imageRecipeArn?: string;
}

/**
 * <p>The instance metadata options that apply to the HTTP requests that
 * 			pipeline builds use to launch EC2 build and test instances. For more
 * 			information about instance metadata options, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure
 * 				the instance metadata options</a> in the <i>
 *                <i>Amazon EC2 User Guide</i>
 *             </i>
 * 			for Linux instances, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure
 * 				the instance metadata options</a> in the <i>
 *                <i>Amazon EC2 Windows Guide</i>
 *             </i>
 * 			for Windows instances.</p>
 */
export interface InstanceMetadataOptions {
  /**
   * <p>Indicates whether a signed token header is required for instance metadata retrieval requests.
   * 			The values affect the response as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>required</b> – When you retrieve the
   * 					IAM role credentials, version 2.0 credentials are returned in all cases.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>optional</b> – You can include a signed token header
   * 					in your request to retrieve instance metadata, or you can leave it out. If you
   * 					include it, version 2.0 credentials are returned for the IAM role. Otherwise,
   * 					version 1.0 credentials are returned.</p>
   *             </li>
   *          </ul>
   *          <p>The default setting is <b>optional</b>.</p>
   */
  httpTokens?: string;

  /**
   * <p>Limit the number of hops that an instance metadata request can traverse to reach its
   * 			destination. The default is one hop. However, if HTTP tokens are required, container
   * 			image builds need a minimum of two hops.</p>
   */
  httpPutResponseHopLimit?: number;
}

/**
 * <p>Amazon S3 logging configuration.</p>
 */
export interface S3Logs {
  /**
   * <p>The S3 bucket in which to store the logs.</p>
   */
  s3BucketName?: string;

  /**
   * <p>The Amazon S3 path to the bucket where the logs are stored.</p>
   */
  s3KeyPrefix?: string;
}

/**
 * <p>Logging configuration defines where Image Builder uploads your logs.</p>
 */
export interface Logging {
  /**
   * <p>The Amazon S3 logging configuration.</p>
   */
  s3Logs?: S3Logs;
}

export interface CreateInfrastructureConfigurationRequest {
  /**
   * <p>The name of the infrastructure configuration.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the infrastructure configuration.</p>
   */
  description?: string;

  /**
   * <p>The instance types of the infrastructure configuration. You can specify one or more
   * 			instance types to use for this build. The service will pick one of these instance types based
   * 			on availability.</p>
   */
  instanceTypes?: string[];

  /**
   * <p>The instance profile to associate with the instance used to customize your Amazon EC2 AMI.</p>
   */
  instanceProfileName: string | undefined;

  /**
   * <p>The security group IDs to associate with the instance used to customize your Amazon EC2 AMI.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>The subnet ID in which to place the instance used to customize your Amazon EC2 AMI.</p>
   */
  subnetId?: string;

  /**
   * <p>The logging configuration of the infrastructure configuration.</p>
   */
  logging?: Logging;

  /**
   * <p>The key pair of the infrastructure configuration. You can use this to log on to and debug
   * 			the instance used to create your image.</p>
   */
  keyPair?: string;

  /**
   * <p>The terminate instance on failure setting of the infrastructure configuration. Set to
   * 			false if you want Image Builder to retain the instance used to configure your AMI if the build
   * 			or test phase of your workflow fails.</p>
   */
  terminateInstanceOnFailure?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.</p>
   *          <note>
   *             <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys
   * 				from other accounts. The key that is used to encrypt the SNS topic must reside in the
   * 				account that the Image Builder service runs under.</p>
   *          </note>
   */
  snsTopicArn?: string;

  /**
   * <p>The tags attached to the resource created by Image Builder.</p>
   */
  resourceTags?: Record<string, string>;

  /**
   * <p>The instance metadata options that you can set for the HTTP requests that
   * 			pipeline builds use to launch EC2 build and test instances.</p>
   */
  instanceMetadataOptions?: InstanceMetadataOptions;

  /**
   * <p>The tags of the infrastructure configuration.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;
}

export interface CreateInfrastructureConfigurationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that was created by
   * 			this request.</p>
   */
  infrastructureConfigurationArn?: string;
}

export interface DeleteComponentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the component build version to delete.</p>
   */
  componentBuildVersionArn: string | undefined;
}

export interface DeleteComponentResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the component build version that was deleted.</p>
   */
  componentBuildVersionArn?: string;
}

/**
 * <p>You have attempted to mutate or delete a resource with a dependency that prohibits this
 * 			action. See the error message for more details.</p>
 */
export class ResourceDependencyException extends __BaseException {
  readonly name: "ResourceDependencyException" = "ResourceDependencyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceDependencyException, __BaseException>) {
    super({
      name: "ResourceDependencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceDependencyException.prototype);
  }
}

export interface DeleteContainerRecipeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe to delete.</p>
   */
  containerRecipeArn: string | undefined;
}

export interface DeleteContainerRecipeResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe that was deleted.</p>
   */
  containerRecipeArn?: string;
}

export interface DeleteDistributionConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration to delete.</p>
   */
  distributionConfigurationArn: string | undefined;
}

export interface DeleteDistributionConfigurationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that was deleted.</p>
   */
  distributionConfigurationArn?: string;
}

export interface DeleteImageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Image Builder image resource to delete.</p>
   */
  imageBuildVersionArn: string | undefined;
}

export interface DeleteImageResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Image Builder image resource that was deleted.</p>
   */
  imageBuildVersionArn?: string;
}

export interface DeleteImagePipelineRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline to delete.</p>
   */
  imagePipelineArn: string | undefined;
}

export interface DeleteImagePipelineResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that was deleted.</p>
   */
  imagePipelineArn?: string;
}

export interface DeleteImageRecipeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe to delete.</p>
   */
  imageRecipeArn: string | undefined;
}

export interface DeleteImageRecipeResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that was deleted.</p>
   */
  imageRecipeArn?: string;
}

export interface DeleteInfrastructureConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration to delete.</p>
   */
  infrastructureConfigurationArn: string | undefined;
}

export interface DeleteInfrastructureConfigurationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that was deleted.</p>
   */
  infrastructureConfigurationArn?: string;
}

/**
 * <p>A distribution configuration.</p>
 */
export interface DistributionConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration.</p>
   */
  arn?: string;

  /**
   * <p>The name of the distribution configuration.</p>
   */
  name?: string;

  /**
   * <p>The description of the distribution configuration.</p>
   */
  description?: string;

  /**
   * <p>The distribution objects that apply Region-specific
   * 			settings for the deployment of the image to targeted Regions.</p>
   */
  distributions?: Distribution[];

  /**
   * <p>The maximum duration in minutes for this distribution configuration.</p>
   */
  timeoutMinutes: number | undefined;

  /**
   * <p>The date on which this distribution configuration was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The date on which this distribution configuration was last updated.</p>
   */
  dateUpdated?: string;

  /**
   * <p>The tags of the distribution configuration.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>A high-level overview of a distribution configuration.</p>
 */
export interface DistributionConfigurationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration.</p>
   */
  arn?: string;

  /**
   * <p>The name of the distribution configuration.</p>
   */
  name?: string;

  /**
   * <p>The description of the distribution configuration.</p>
   */
  description?: string;

  /**
   * <p>The date on which the distribution configuration was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The date on which the distribution configuration was updated.</p>
   */
  dateUpdated?: string;

  /**
   * <p>The tags associated with the distribution configuration.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A list of Regions where the container image is distributed to.</p>
   */
  regions?: string[];
}

/**
 * <p>A filter name and value pair that is used to return a more specific list of results from a
 * 			list operation. Filters can be used to match a set of resources by specific criteria, such as
 * 			tags, attributes, or IDs.</p>
 */
export interface Filter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   */
  name?: string;

  /**
   * <p>The filter values. Filter values are case-sensitive.</p>
   */
  values?: string[];
}

export interface GetComponentRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the component that you want to retrieve. Regex requires
   * 			"/\d+$" suffix.</p>
   */
  componentBuildVersionArn: string | undefined;
}

export interface GetComponentResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The component object associated with the specified ARN.</p>
   */
  component?: Component;
}

export interface GetComponentPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the component whose policy you want to retrieve.</p>
   */
  componentArn: string | undefined;
}

export interface GetComponentPolicyResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The component policy.</p>
   */
  policy?: string;
}

/**
 * <p>At least one of the resources referenced by your request does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

export interface GetContainerRecipeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe to retrieve.</p>
   */
  containerRecipeArn: string | undefined;
}

export interface GetContainerRecipeResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The container recipe object that is returned.</p>
   */
  containerRecipe?: ContainerRecipe;
}

export interface GetContainerRecipePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe for the policy being requested.</p>
   */
  containerRecipeArn: string | undefined;
}

export interface GetContainerRecipePolicyResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The container recipe policy object that is returned.</p>
   */
  policy?: string;
}

export interface GetDistributionConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that you want to
   * 			retrieve.</p>
   */
  distributionConfigurationArn: string | undefined;
}

export interface GetDistributionConfigurationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The distribution configuration object.</p>
   */
  distributionConfiguration?: DistributionConfiguration;
}

export interface GetImageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image that you want to retrieve.</p>
   */
  imageBuildVersionArn: string | undefined;
}

export enum ImageType {
  AMI = "AMI",
  DOCKER = "DOCKER",
}

/**
 * <p>An image recipe.</p>
 */
export interface ImageRecipe {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe.</p>
   */
  arn?: string;

  /**
   * <p>Specifies which type of image is created by the recipe - an AMI or a
   * 			container image.</p>
   */
  type?: ImageType | string;

  /**
   * <p>The name of the image recipe.</p>
   */
  name?: string;

  /**
   * <p>The description of the image recipe.</p>
   */
  description?: string;

  /**
   * <p>The platform of the image recipe.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The owner of the image recipe.</p>
   */
  owner?: string;

  /**
   * <p>The version of the image recipe.</p>
   */
  version?: string;

  /**
   * <p>The components that are included in the image recipe. Recipes require a minimum of one build component, and can
   * 			have a maximum of 20 build and test components in any combination.</p>
   */
  components?: ComponentConfiguration[];

  /**
   * <p>The base image of the image recipe.</p>
   */
  parentImage?: string;

  /**
   * <p>The block device mappings to apply when creating images from this recipe.</p>
   */
  blockDeviceMappings?: InstanceBlockDeviceMapping[];

  /**
   * <p>The date on which this image recipe was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The tags of the image recipe.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The working directory to be used during build and test workflows.</p>
   */
  workingDirectory?: string;

  /**
   * <p>Before you create a new AMI, Image Builder launches temporary Amazon EC2 instances to
   * 			build and test your image configuration. Instance configuration adds a layer
   * 			of control over those instances. You can define settings and add scripts to
   * 			run when an instance is launched from your AMI.</p>
   */
  additionalInstanceConfiguration?: AdditionalInstanceConfiguration;
}

export enum ImageSource {
  AMAZON_MANAGED = "AMAZON_MANAGED",
  AWS_MARKETPLACE = "AWS_MARKETPLACE",
  CUSTOM = "CUSTOM",
  IMPORTED = "IMPORTED",
}

/**
 * <p>Details of the infrastructure configuration.</p>
 */
export interface InfrastructureConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration.</p>
   */
  arn?: string;

  /**
   * <p>The name of the infrastructure configuration.</p>
   */
  name?: string;

  /**
   * <p>The description of the infrastructure configuration.</p>
   */
  description?: string;

  /**
   * <p>The instance types of the infrastructure configuration.</p>
   */
  instanceTypes?: string[];

  /**
   * <p>The instance profile of the infrastructure configuration.</p>
   */
  instanceProfileName?: string;

  /**
   * <p>The security group IDs of the infrastructure configuration.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>The subnet ID of the infrastructure configuration.</p>
   */
  subnetId?: string;

  /**
   * <p>The logging configuration of the infrastructure configuration.</p>
   */
  logging?: Logging;

  /**
   * <p>The Amazon EC2 key pair of the infrastructure configuration.</p>
   */
  keyPair?: string;

  /**
   * <p>The terminate instance on failure configuration of the infrastructure
   * 			configuration.</p>
   */
  terminateInstanceOnFailure?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.</p>
   *          <note>
   *             <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys
   * 				from other accounts. The key that is used to encrypt the SNS topic must reside in the
   * 				account that the Image Builder service runs under.</p>
   *          </note>
   */
  snsTopicArn?: string;

  /**
   * <p>The date on which the infrastructure configuration was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The date on which the infrastructure configuration was last updated.</p>
   */
  dateUpdated?: string;

  /**
   * <p>The tags attached to the resource created by Image Builder.</p>
   */
  resourceTags?: Record<string, string>;

  /**
   * <p>The instance metadata option settings for the infrastructure configuration.</p>
   */
  instanceMetadataOptions?: InstanceMetadataOptions;

  /**
   * <p>The tags of the infrastructure configuration.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>The resources produced by this image.</p>
 */
export interface OutputResources {
  /**
   * <p>The Amazon EC2 AMIs created by this image.</p>
   */
  amis?: Ami[];

  /**
   * <p>Container images that the pipeline has generated and stored in the output repository.</p>
   */
  containers?: Container[];
}

/**
 * <p>An Image Builder image. You must specify exactly one recipe for the image – either
 * 			a container recipe (<code>containerRecipe</code>), which creates a container
 * 			image, or an image recipe (<code>imageRecipe</code>), which creates an AMI.</p>
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
   */
  arn?: string;

  /**
   * <p>Specifies whether this image produces an AMI or a container image.</p>
   */
  type?: ImageType | string;

  /**
   * <p>The name of the image.</p>
   */
  name?: string;

  /**
   * <p>The semantic version of the image.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *             <p>
   *                <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x)
   * 	to specify the most recent versions or nodes when selecting the base image or components for your
   * 	recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be
   * 	wildcards.</p>
   *          </note>
   */
  version?: string;

  /**
   * <p>The image operating system platform, such as Linux or Windows.</p>
   */
  platform?: Platform | string;

  /**
   * <p>Indicates whether Image Builder collects additional information about the image, such as the
   * 			operating system (OS) version and package list.</p>
   */
  enhancedImageMetadataEnabled?: boolean;

  /**
   * <p>The operating system version for instances that launch from this image. For example,
   * 			Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.</p>
   */
  osVersion?: string;

  /**
   * <p>The state of the image.</p>
   */
  state?: ImageState;

  /**
   * <p>For images that distribute an AMI, this is the image recipe that Image Builder used to
   * 			create the image. For container images, this is empty.</p>
   */
  imageRecipe?: ImageRecipe;

  /**
   * <p>For container images, this is the container recipe that Image Builder used to create the
   * 			image. For images that distribute an AMI, this is empty.</p>
   */
  containerRecipe?: ContainerRecipe;

  /**
   * <p>The name of the image pipeline that created this image.</p>
   */
  sourcePipelineName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that created this image.</p>
   */
  sourcePipelineArn?: string;

  /**
   * <p>The infrastructure that Image Builder used to create this image.</p>
   */
  infrastructureConfiguration?: InfrastructureConfiguration;

  /**
   * <p>The distribution configuration that Image Builder used to create this image.</p>
   */
  distributionConfiguration?: DistributionConfiguration;

  /**
   * <p>The image tests that ran when that Image Builder created this image.</p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * <p>The date on which Image Builder created this image.</p>
   */
  dateCreated?: string;

  /**
   * <p>The output resources that Image Builder produces for this image.</p>
   */
  outputResources?: OutputResources;

  /**
   * <p>The tags that apply to this image.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Indicates the type of build that created this image. The build can be initiated
   * 			in the following ways:</p>
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
   *          </ul>
   */
  buildType?: BuildType | string;

  /**
   * <p>The origin of the base image that Image Builder used to build this image.</p>
   */
  imageSource?: ImageSource | string;
}

export interface GetImageResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The image object.</p>
   */
  image?: Image;
}

export interface GetImagePipelineRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that you want to retrieve.</p>
   */
  imagePipelineArn: string | undefined;
}

/**
 * <p>Details of an image pipeline.</p>
 */
export interface ImagePipeline {
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline.</p>
   */
  arn?: string;

  /**
   * <p>The name of the image pipeline.</p>
   */
  name?: string;

  /**
   * <p>The description of the image pipeline.</p>
   */
  description?: string;

  /**
   * <p>The platform of the image pipeline.</p>
   */
  platform?: Platform | string;

  /**
   * <p> Collects additional information about the image being created, including the operating
   * 			system (OS) version and package list. This information is used to enhance the overall
   * 			experience of using EC2 Image Builder. Enabled by default.</p>
   */
  enhancedImageMetadataEnabled?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe associated with this image
   * 			pipeline.</p>
   */
  imageRecipeArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe that is used for this pipeline.</p>
   */
  containerRecipeArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration associated with this
   * 			image pipeline.</p>
   */
  infrastructureConfigurationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration associated with this
   * 			image pipeline.</p>
   */
  distributionConfigurationArn?: string;

  /**
   * <p>The image tests configuration of the image pipeline.</p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * <p>The schedule of the image pipeline.</p>
   */
  schedule?: Schedule;

  /**
   * <p>The status of the image pipeline.</p>
   */
  status?: PipelineStatus | string;

  /**
   * <p>The date on which this image pipeline was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The date on which this image pipeline was last updated.</p>
   */
  dateUpdated?: string;

  /**
   * <p>This is no longer supported, and does not return a value.</p>
   */
  dateLastRun?: string;

  /**
   * <p>This is no longer supported, and does not return a value.</p>
   */
  dateNextRun?: string;

  /**
   * <p>The tags of this image pipeline.</p>
   */
  tags?: Record<string, string>;
}

export interface GetImagePipelineResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The image pipeline object.</p>
   */
  imagePipeline?: ImagePipeline;
}

export interface GetImagePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image whose policy you want to retrieve.</p>
   */
  imageArn: string | undefined;
}

export interface GetImagePolicyResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The image policy object.</p>
   */
  policy?: string;
}

export interface GetImageRecipeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that you want to retrieve.</p>
   */
  imageRecipeArn: string | undefined;
}

export interface GetImageRecipeResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The image recipe object.</p>
   */
  imageRecipe?: ImageRecipe;
}

export interface GetImageRecipePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe whose policy you want to retrieve.</p>
   */
  imageRecipeArn: string | undefined;
}

export interface GetImageRecipePolicyResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The image recipe policy object.</p>
   */
  policy?: string;
}

/**
 * <p> GetInfrastructureConfiguration request object.</p>
 */
export interface GetInfrastructureConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that you want to
   * 			retrieve.</p>
   */
  infrastructureConfigurationArn: string | undefined;
}

/**
 * <p>GetInfrastructureConfiguration response object.</p>
 */
export interface GetInfrastructureConfigurationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The infrastructure configuration object.</p>
   */
  infrastructureConfiguration?: InfrastructureConfiguration;
}

export interface ImportComponentRequest {
  /**
   * <p> The name of the component.</p>
   */
  name: string | undefined;

  /**
   * <p>The semantic version of the component. This version follows the semantic version syntax.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x)
   * 	to specify the most recent versions or nodes when selecting the base image or components for your
   * 	recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be
   * 	wildcards.</p>
   *          </note>
   */
  semanticVersion: string | undefined;

  /**
   * <p>The description of the component. Describes the contents of the component.</p>
   */
  description?: string;

  /**
   * <p>The change description of the component. Describes what change has been made in this
   * 			version, or what makes this version different from other versions of this component.</p>
   */
  changeDescription?: string;

  /**
   * <p>The type of the component denotes whether the component is used to build the image, or only
   * 			to test it.</p>
   */
  type: ComponentType | string | undefined;

  /**
   * <p>The format of the resource that you want to import as a component.</p>
   */
  format: ComponentFormat | string | undefined;

  /**
   * <p>The platform of the component.</p>
   */
  platform: Platform | string | undefined;

  /**
   * <p>The data of the component. Used to specify the data inline. Either <code>data</code> or
   * 			<code>uri</code> can be used to specify the data within the component.</p>
   */
  data?: string;

  /**
   * <p>The uri of the component. Must be an Amazon S3 URL and the requester must have permission to
   * 			access the Amazon S3 bucket. If you use Amazon S3, you can specify component content up to your service
   * 			quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the
   * 			component.</p>
   */
  uri?: string;

  /**
   * <p>The ID of the KMS key that should be used to encrypt this component.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The tags of the component.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The idempotency token of the component.</p>
   */
  clientToken?: string;
}

export interface ImportComponentResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the imported component.</p>
   */
  componentBuildVersionArn?: string;
}

export interface ImportVmImageRequest {
  /**
   * <p>The name of the base image that is created by the import process.</p>
   */
  name: string | undefined;

  /**
   * <p>The semantic version to attach to the base image that was created during the
   * 			import process. This version follows the semantic version syntax.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *          </note>
   */
  semanticVersion: string | undefined;

  /**
   * <p>The description for the base image that is created by the import process.</p>
   */
  description?: string;

  /**
   * <p>The operating system platform for the imported VM.</p>
   */
  platform: Platform | string | undefined;

  /**
   * <p>The operating system version for the imported VM.</p>
   */
  osVersion?: string;

  /**
   * <p>The <code>importTaskId</code> (API) or <code>ImportTaskId</code> (CLI) from the
   * 			Amazon EC2 VM import process. Image Builder retrieves information from the import process to pull
   * 			in the AMI that is created from the VM source as the base image for your recipe.</p>
   */
  vmImportTaskId: string | undefined;

  /**
   * <p>Tags that are attached to the import resources.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Unique, case-sensitive identifier you provide to ensure
   *        idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>
   *        in the <i>Amazon EC2 API Reference</i>.</p>
   */
  clientToken?: string;
}

export interface ImportVmImageResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AMI that was created during the VM
   * 			import process. This AMI is used as the base image for the recipe that
   * 			imported the VM.</p>
   */
  imageArn?: string;

  /**
   * <p>The idempotency token that was used for this request.</p>
   */
  clientToken?: string;
}

/**
 * <p>You have provided an invalid pagination token in your request.</p>
 */
export class InvalidPaginationTokenException extends __BaseException {
  readonly name: "InvalidPaginationTokenException" = "InvalidPaginationTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPaginationTokenException, __BaseException>) {
    super({
      name: "InvalidPaginationTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPaginationTokenException.prototype);
  }
}

export interface ListComponentBuildVersionsRequest {
  /**
   * <p>The component version Amazon Resource Name (ARN) whose versions you want to list.</p>
   */
  componentVersionArn: string | undefined;

  /**
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   * 			truncated response.</p>
   */
  nextToken?: string;
}

export interface ListComponentBuildVersionsResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The list of component summaries for the specified semantic version.</p>
   */
  componentSummaryList?: ComponentSummary[];

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional
   * 			elements that the service has not included in this request. Use this token with the next
   * 			request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

export enum Ownership {
  AMAZON = "Amazon",
  SELF = "Self",
  SHARED = "Shared",
  THIRDPARTY = "ThirdParty",
}

export interface ListComponentsRequest {
  /**
   * <p>Filters results based on the type of owner for the component. By default, this request
   * 			returns a list of components that your account owns. To see results for other types of owners,
   * 			you can specify components that Amazon manages, third party components, or components that
   * 			other accounts have shared with you.</p>
   */
  owner?: Ownership | string;

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
   */
  filters?: Filter[];

  /**
   * <p>Returns the list of components for the specified name.</p>
   */
  byName?: boolean;

  /**
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   * 			truncated response.</p>
   */
  nextToken?: string;
}

export interface ListComponentsResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The list of component semantic versions.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *          </note>
   */
  componentVersionList?: ComponentVersion[];

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional
   * 			elements that the service has not included in this request. Use this token with the next
   * 			request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

export interface ListContainerRecipesRequest {
  /**
   * <p>Returns container recipes belonging to the specified owner, that have been shared with you. You can omit this field to return container recipes belonging to your account.</p>
   */
  owner?: Ownership | string;

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
   */
  filters?: Filter[];

  /**
   * <p>The maximum number of results to return in the list.</p>
   */
  maxResults?: number;

  /**
   * <p>Provides a token for pagination, which determines where to begin the next set of results when the current set reaches the maximum for one request.</p>
   */
  nextToken?: string;
}

export interface ListContainerRecipesResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The list of container recipes returned for the request.</p>
   */
  containerRecipeSummaryList?: ContainerRecipeSummary[];

  /**
   * <p>The next token field is used for paginated responses. When this is not empty, there are additional container recipes that the service has not included in this response. Use this token with the next request to retrieve additional list items.</p>
   */
  nextToken?: string;
}

export interface ListDistributionConfigurationsRequest {
  /**
   * <p>You can filter on <code>name</code> to streamline results.</p>
   */
  filters?: Filter[];

  /**
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   * 			truncated response.</p>
   */
  nextToken?: string;
}

export interface ListDistributionConfigurationsResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The list of distributions.</p>
   */
  distributionConfigurationSummaryList?: DistributionConfigurationSummary[];

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional
   * 			elements that the service has not included in this request. Use this token with the next
   * 			request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

export interface ListImageBuildVersionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve.</p>
   */
  imageVersionArn: string | undefined;

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
   */
  filters?: Filter[];

  /**
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   * 			truncated response.</p>
   */
  nextToken?: string;
}

/**
 * <p>An image summary.</p>
 */
export interface ImageSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the image.</p>
   */
  arn?: string;

  /**
   * <p>The name of the image.</p>
   */
  name?: string;

  /**
   * <p>Specifies whether this image produces an AMI or a container image.</p>
   */
  type?: ImageType | string;

  /**
   * <p>The version of the image.</p>
   */
  version?: string;

  /**
   * <p>The image operating system platform, such as Linux or Windows.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The operating system version of the instances that launch from this image. For
   * 			example, Amazon Linux 2, Ubuntu 18, or Microsoft Windows Server 2019.</p>
   */
  osVersion?: string;

  /**
   * <p>The state of the image.</p>
   */
  state?: ImageState;

  /**
   * <p>The owner of the image.</p>
   */
  owner?: string;

  /**
   * <p>The date on which Image Builder created this image.</p>
   */
  dateCreated?: string;

  /**
   * <p>The output resources that Image Builder produced when it created this image.</p>
   */
  outputResources?: OutputResources;

  /**
   * <p>The tags that apply to this image.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Indicates the type of build that created this image. The build can be initiated
   * 			in the following ways:</p>
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
   *          </ul>
   */
  buildType?: BuildType | string;

  /**
   * <p>The origin of the base image that Image Builder used to build this image.</p>
   */
  imageSource?: ImageSource | string;
}

export interface ListImageBuildVersionsResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The list of image build versions.</p>
   */
  imageSummaryList?: ImageSummary[];

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional
   * 			elements that the service has not included in this request. Use this token with the next
   * 			request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

export interface ListImagePackagesRequest {
  /**
   * <p>Filter results for the ListImagePackages request by the Image Build Version ARN</p>
   */
  imageBuildVersionArn: string | undefined;

  /**
   * <p>The maxiumum number of results to return from the ListImagePackages request.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously truncated response.</p>
   */
  nextToken?: string;
}

/**
 * <p>Represents a package installed on an Image Builder image.</p>
 */
export interface ImagePackage {
  /**
   * <p>The name of the package as reported to the operating system package manager.</p>
   */
  packageName?: string;

  /**
   * <p>The version of the package as reported to the operating system package manager.</p>
   */
  packageVersion?: string;
}

export interface ListImagePackagesResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The list of Image Packages returned in the response.</p>
   */
  imagePackageList?: ImagePackage[];

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously truncated response.</p>
   */
  nextToken?: string;
}

export interface ListImagePipelineImagesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline whose images you want to view.</p>
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
   */
  filters?: Filter[];

  /**
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   * 			truncated response.</p>
   */
  nextToken?: string;
}

export interface ListImagePipelineImagesResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The list of images built by this pipeline.</p>
   */
  imageSummaryList?: ImageSummary[];

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional
   * 			elements that the service has not included in this request. Use this token with the next
   * 			request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

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
   */
  filters?: Filter[];

  /**
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   * 			truncated response.</p>
   */
  nextToken?: string;
}

export interface ListImagePipelinesResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The list of image pipelines.</p>
   */
  imagePipelineList?: ImagePipeline[];

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional
   * 			elements that the service has not included in this request. Use this token with the next
   * 			request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

export interface ListImageRecipesRequest {
  /**
   * <p>The owner defines which image recipes you want to list. By default, this request will only
   * 			show image recipes owned by your account. You can use this field to specify if you want to
   * 			view image recipes owned by yourself, by Amazon, or those image recipes that have been shared
   * 			with you by other customers.</p>
   */
  owner?: Ownership | string;

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
   */
  filters?: Filter[];

  /**
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   * 			truncated response.</p>
   */
  nextToken?: string;
}

/**
 * <p>A summary of an image recipe.</p>
 */
export interface ImageRecipeSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe.</p>
   */
  arn?: string;

  /**
   * <p>The name of the image recipe.</p>
   */
  name?: string;

  /**
   * <p>The platform of the image recipe.</p>
   */
  platform?: Platform | string;

  /**
   * <p>The owner of the image recipe.</p>
   */
  owner?: string;

  /**
   * <p>The base image of the image recipe.</p>
   */
  parentImage?: string;

  /**
   * <p>The date on which this image recipe was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The tags of the image recipe.</p>
   */
  tags?: Record<string, string>;
}

export interface ListImageRecipesResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The list of image pipelines.</p>
   */
  imageRecipeSummaryList?: ImageRecipeSummary[];

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional
   * 			elements that the service has not included in this request. Use this token with the next
   * 			request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

export interface ListImagesRequest {
  /**
   * <p>The owner defines which images you want to list. By default, this request will only show
   * 			images owned by your account. You can use this field to specify if you want to view images
   * 			owned by yourself, by Amazon, or those images that have been shared with you by other
   * 			customers.</p>
   */
  owner?: Ownership | string;

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
   */
  filters?: Filter[];

  /**
   * <p>Requests a list of images with a specific recipe name.</p>
   */
  byName?: boolean;

  /**
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   * 			truncated response.</p>
   */
  nextToken?: string;

  /**
   * <p>Includes deprecated images in the response list.</p>
   */
  includeDeprecated?: boolean;
}

/**
 * <p>The defining characteristics of a specific version of an Image Builder image.</p>
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
   */
  arn?: string;

  /**
   * <p>The name of this specific version of an Image Builder image.</p>
   */
  name?: string;

  /**
   * <p>Specifies whether this image produces an AMI or a container image.</p>
   */
  type?: ImageType | string;

  /**
   * <p>Details for a specific version of an Image Builder image. This version follows the semantic version syntax.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including
   * 	zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the
   * 	build number to the fourth node.</p>
   *             <p>
   *                <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for
   * 	the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or
   * 	a date, such as 2021.01.01.</p>
   *             <p>
   *                <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x)
   * 	to specify the most recent versions or nodes when selecting the base image or components for your
   * 	recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be
   * 	wildcards.</p>
   *          </note>
   */
  version?: string;

  /**
   * <p>The operating system platform of the image version, for example "Windows" or "Linux".</p>
   */
  platform?: Platform | string;

  /**
   * <p>The operating system version of the Amazon EC2 build instance. For example, Amazon Linux 2, Ubuntu 18, or
   * 			Microsoft Windows Server 2019.</p>
   */
  osVersion?: string;

  /**
   * <p>The owner of the image version.</p>
   */
  owner?: string;

  /**
   * <p>The date on which this specific version of the Image Builder image was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>Indicates the type of build that created this image. The build can be initiated
   * 			in the following ways:</p>
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
   *          </ul>
   */
  buildType?: BuildType | string;

  /**
   * <p>The origin of the base image that Image Builder used to build this image.</p>
   */
  imageSource?: ImageSource | string;
}

export interface ListImagesResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The list of image semantic versions.</p>
   *          <note>
   *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
   * 	You can assign values for the first three, and can filter on all of them.</p>
   *             <p>
   *                <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x)
   * 	to specify the most recent versions or nodes when selecting the base image or components for your
   * 	recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be
   * 	wildcards.</p>
   *          </note>
   */
  imageVersionList?: ImageVersion[];

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional
   * 			elements that the service has not included in this request. Use this token with the next
   * 			request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

export interface ListInfrastructureConfigurationsRequest {
  /**
   * <p>You can filter on <code>name</code> to streamline results.</p>
   */
  filters?: Filter[];

  /**
   * <p>The maximum items to return in a request.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   * 			truncated response.</p>
   */
  nextToken?: string;
}

/**
 * <p>The infrastructure used when building Amazon EC2 AMIs.</p>
 */
export interface InfrastructureConfigurationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration.</p>
   */
  arn?: string;

  /**
   * <p>The name of the infrastructure configuration.</p>
   */
  name?: string;

  /**
   * <p>The description of the infrastructure configuration.</p>
   */
  description?: string;

  /**
   * <p>The date on which the infrastructure configuration was created.</p>
   */
  dateCreated?: string;

  /**
   * <p>The date on which the infrastructure configuration was last updated.</p>
   */
  dateUpdated?: string;

  /**
   * <p>The tags attached to the image created by Image Builder.</p>
   */
  resourceTags?: Record<string, string>;

  /**
   * <p>The tags of the infrastructure configuration.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The instance types of the infrastructure configuration.</p>
   */
  instanceTypes?: string[];

  /**
   * <p>The instance profile of the infrastructure configuration.</p>
   */
  instanceProfileName?: string;
}

export interface ListInfrastructureConfigurationsResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The list of infrastructure configurations.</p>
   */
  infrastructureConfigurationSummaryList?: InfrastructureConfigurationSummary[];

  /**
   * <p>The next token used for paginated responses. When this is not empty, there are additional
   * 			elements that the service has not included in this request. Use this token with the next
   * 			request to retrieve additional objects.</p>
   */
  nextToken?: string;
}

/**
 * <p>The specified parameter is invalid. Review the available parameters for the API
 * 			request.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags you want to retrieve.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the specified resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>The value that you provided for the specified parameter is invalid.</p>
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name: "InvalidParameterValueException" = "InvalidParameterValueException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
  }
}

export interface PutComponentPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the component that this policy should be applied to.</p>
   */
  componentArn: string | undefined;

  /**
   * <p>The policy to apply.</p>
   */
  policy: string | undefined;
}

export interface PutComponentPolicyResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the component that this policy was applied to.</p>
   */
  componentArn?: string;
}

export interface PutContainerRecipePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe that this policy should be applied to.</p>
   */
  containerRecipeArn: string | undefined;

  /**
   * <p>The policy to apply to the container recipe.</p>
   */
  policy: string | undefined;
}

export interface PutContainerRecipePolicyResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the container recipe that this policy was applied to.</p>
   */
  containerRecipeArn?: string;
}

export interface PutImagePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image that this policy should be applied to.</p>
   */
  imageArn: string | undefined;

  /**
   * <p>The policy to apply.</p>
   */
  policy: string | undefined;
}

export interface PutImagePolicyResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image that this policy was applied to.</p>
   */
  imageArn?: string;
}

export interface PutImageRecipePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to.</p>
   */
  imageRecipeArn: string | undefined;

  /**
   * <p>The policy to apply.</p>
   */
  policy: string | undefined;
}

export interface PutImageRecipePolicyResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that this policy was applied to.</p>
   */
  imageRecipeArn?: string;
}

export interface StartImagePipelineExecutionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke.</p>
   */
  imagePipelineArn: string | undefined;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;
}

export interface StartImagePipelineExecutionResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image that was created by this request.</p>
   */
  imageBuildVersionArn?: string;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to apply to the resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateDistributionConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that you want to update.</p>
   */
  distributionConfigurationArn: string | undefined;

  /**
   * <p>The description of the distribution configuration.</p>
   */
  description?: string;

  /**
   * <p>The distributions of the distribution configuration.</p>
   */
  distributions: Distribution[] | undefined;

  /**
   * <p>The idempotency token of the distribution configuration.</p>
   */
  clientToken?: string;
}

export interface UpdateDistributionConfigurationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that was updated by this
   * 			request.</p>
   */
  distributionConfigurationArn?: string;
}

export interface UpdateImagePipelineRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that you want to update.</p>
   */
  imagePipelineArn: string | undefined;

  /**
   * <p>The description of the image pipeline.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image recipe that will be used to configure images
   * 			updated by this image pipeline.</p>
   */
  imageRecipeArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the container pipeline to update.</p>
   */
  containerRecipeArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to
   * 			build images updated by this image pipeline.</p>
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the distribution configuration that will be used to
   * 			configure and distribute images updated by this image pipeline.</p>
   */
  distributionConfigurationArn?: string;

  /**
   * <p>The image test configuration of the image pipeline.</p>
   */
  imageTestsConfiguration?: ImageTestsConfiguration;

  /**
   * <p> Collects additional information about the image being created, including the operating
   * 			system (OS) version and package list. This information is used to enhance the overall
   * 			experience of using EC2 Image Builder. Enabled by default.</p>
   */
  enhancedImageMetadataEnabled?: boolean;

  /**
   * <p>The schedule of the image pipeline.</p>
   */
  schedule?: Schedule;

  /**
   * <p>The status of the image pipeline.</p>
   */
  status?: PipelineStatus | string;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;
}

export interface UpdateImagePipelineResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the image pipeline that was updated by this request.</p>
   */
  imagePipelineArn?: string;
}

export interface UpdateInfrastructureConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that you want to
   * 			update.</p>
   */
  infrastructureConfigurationArn: string | undefined;

  /**
   * <p>The description of the infrastructure configuration.</p>
   */
  description?: string;

  /**
   * <p>The instance types of the infrastructure configuration. You can specify one or more
   * 			instance types to use for this build. The service will pick one of these instance types based
   * 			on availability.</p>
   */
  instanceTypes?: string[];

  /**
   * <p>The instance profile to associate with the instance used to customize your Amazon EC2 AMI.</p>
   */
  instanceProfileName: string | undefined;

  /**
   * <p>The security group IDs to associate with the instance used to customize your Amazon EC2 AMI.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>The subnet ID to place the instance used to customize your Amazon EC2 AMI in.</p>
   */
  subnetId?: string;

  /**
   * <p>The logging configuration of the infrastructure configuration.</p>
   */
  logging?: Logging;

  /**
   * <p>The key pair of the infrastructure configuration. You can use this to log on to and debug
   * 			the instance used to create your image.</p>
   */
  keyPair?: string;

  /**
   * <p>The terminate instance on failure setting of the infrastructure configuration. Set to
   * 			false if you want Image Builder to retain the instance used to configure your AMI if the build
   * 			or test phase of your workflow fails.</p>
   */
  terminateInstanceOnFailure?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) for the SNS topic to which we send image build event notifications.</p>
   *          <note>
   *             <p>EC2 Image Builder is unable to send notifications to SNS topics that are encrypted using keys
   * 				from other accounts. The key that is used to encrypt the SNS topic must reside in the
   * 				account that the Image Builder service runs under.</p>
   *          </note>
   */
  snsTopicArn?: string;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>The tags attached to the resource created by Image Builder.</p>
   */
  resourceTags?: Record<string, string>;

  /**
   * <p>The instance metadata options that you can set for the HTTP requests that pipeline builds
   * 			use to launch EC2 build and test instances. For more information about instance metadata
   * 			options, see one of the following links:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-options.html">Configure
   * 					the instance metadata options</a> in the <i>
   *                      <i>Amazon EC2 User Guide</i>
   *                   </i>
   * 					for Linux instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/configuring-instance-metadata-options.html">Configure
   * 					the instance metadata options</a> in the <i>
   *                      <i>Amazon EC2 Windows Guide</i>
   *                   </i>
   * 					for Windows instances.</p>
   *             </li>
   *          </ul>
   */
  instanceMetadataOptions?: InstanceMetadataOptions;
}

export interface UpdateInfrastructureConfigurationResponse {
  /**
   * <p>The request ID that uniquely identifies this request.</p>
   */
  requestId?: string;

  /**
   * <p>The idempotency token used to make this request idempotent.</p>
   */
  clientToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the infrastructure configuration that was updated by
   * 			this request.</p>
   */
  infrastructureConfigurationArn?: string;
}

/**
 * @internal
 */
export const SystemsManagerAgentFilterSensitiveLog = (obj: SystemsManagerAgent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdditionalInstanceConfigurationFilterSensitiveLog = (obj: AdditionalInstanceConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageStateFilterSensitiveLog = (obj: ImageState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AmiFilterSensitiveLog = (obj: Ami): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchPermissionConfigurationFilterSensitiveLog = (obj: LaunchPermissionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AmiDistributionConfigurationFilterSensitiveLog = (obj: AmiDistributionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelImageCreationRequestFilterSensitiveLog = (obj: CancelImageCreationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelImageCreationResponseFilterSensitiveLog = (obj: CancelImageCreationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentParameterDetailFilterSensitiveLog = (obj: ComponentParameterDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentStateFilterSensitiveLog = (obj: ComponentState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentFilterSensitiveLog = (obj: Component): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentParameterFilterSensitiveLog = (obj: ComponentParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentConfigurationFilterSensitiveLog = (obj: ComponentConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentSummaryFilterSensitiveLog = (obj: ComponentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentVersionFilterSensitiveLog = (obj: ComponentVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContainerFilterSensitiveLog = (obj: Container): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetContainerRepositoryFilterSensitiveLog = (obj: TargetContainerRepository): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContainerDistributionConfigurationFilterSensitiveLog = (obj: ContainerDistributionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EbsInstanceBlockDeviceSpecificationFilterSensitiveLog = (
  obj: EbsInstanceBlockDeviceSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceBlockDeviceMappingFilterSensitiveLog = (obj: InstanceBlockDeviceMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceConfigurationFilterSensitiveLog = (obj: InstanceConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContainerRecipeFilterSensitiveLog = (obj: ContainerRecipe): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContainerRecipeSummaryFilterSensitiveLog = (obj: ContainerRecipeSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateComponentRequestFilterSensitiveLog = (obj: CreateComponentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateComponentResponseFilterSensitiveLog = (obj: CreateComponentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContainerRecipeRequestFilterSensitiveLog = (obj: CreateContainerRecipeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContainerRecipeResponseFilterSensitiveLog = (obj: CreateContainerRecipeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FastLaunchLaunchTemplateSpecificationFilterSensitiveLog = (
  obj: FastLaunchLaunchTemplateSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FastLaunchSnapshotConfigurationFilterSensitiveLog = (obj: FastLaunchSnapshotConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FastLaunchConfigurationFilterSensitiveLog = (obj: FastLaunchConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateConfigurationFilterSensitiveLog = (obj: LaunchTemplateConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ExportConfigurationFilterSensitiveLog = (obj: S3ExportConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DistributionFilterSensitiveLog = (obj: Distribution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDistributionConfigurationRequestFilterSensitiveLog = (
  obj: CreateDistributionConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDistributionConfigurationResponseFilterSensitiveLog = (
  obj: CreateDistributionConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageTestsConfigurationFilterSensitiveLog = (obj: ImageTestsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateImageRequestFilterSensitiveLog = (obj: CreateImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateImageResponseFilterSensitiveLog = (obj: CreateImageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduleFilterSensitiveLog = (obj: Schedule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateImagePipelineRequestFilterSensitiveLog = (obj: CreateImagePipelineRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateImagePipelineResponseFilterSensitiveLog = (obj: CreateImagePipelineResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateImageRecipeRequestFilterSensitiveLog = (obj: CreateImageRecipeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateImageRecipeResponseFilterSensitiveLog = (obj: CreateImageRecipeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceMetadataOptionsFilterSensitiveLog = (obj: InstanceMetadataOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3LogsFilterSensitiveLog = (obj: S3Logs): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggingFilterSensitiveLog = (obj: Logging): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInfrastructureConfigurationRequestFilterSensitiveLog = (
  obj: CreateInfrastructureConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInfrastructureConfigurationResponseFilterSensitiveLog = (
  obj: CreateInfrastructureConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteComponentRequestFilterSensitiveLog = (obj: DeleteComponentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteComponentResponseFilterSensitiveLog = (obj: DeleteComponentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContainerRecipeRequestFilterSensitiveLog = (obj: DeleteContainerRecipeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContainerRecipeResponseFilterSensitiveLog = (obj: DeleteContainerRecipeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDistributionConfigurationRequestFilterSensitiveLog = (
  obj: DeleteDistributionConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDistributionConfigurationResponseFilterSensitiveLog = (
  obj: DeleteDistributionConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteImageRequestFilterSensitiveLog = (obj: DeleteImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteImageResponseFilterSensitiveLog = (obj: DeleteImageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteImagePipelineRequestFilterSensitiveLog = (obj: DeleteImagePipelineRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteImagePipelineResponseFilterSensitiveLog = (obj: DeleteImagePipelineResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteImageRecipeRequestFilterSensitiveLog = (obj: DeleteImageRecipeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteImageRecipeResponseFilterSensitiveLog = (obj: DeleteImageRecipeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInfrastructureConfigurationRequestFilterSensitiveLog = (
  obj: DeleteInfrastructureConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInfrastructureConfigurationResponseFilterSensitiveLog = (
  obj: DeleteInfrastructureConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DistributionConfigurationFilterSensitiveLog = (obj: DistributionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DistributionConfigurationSummaryFilterSensitiveLog = (obj: DistributionConfigurationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetComponentRequestFilterSensitiveLog = (obj: GetComponentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetComponentResponseFilterSensitiveLog = (obj: GetComponentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetComponentPolicyRequestFilterSensitiveLog = (obj: GetComponentPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetComponentPolicyResponseFilterSensitiveLog = (obj: GetComponentPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContainerRecipeRequestFilterSensitiveLog = (obj: GetContainerRecipeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContainerRecipeResponseFilterSensitiveLog = (obj: GetContainerRecipeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContainerRecipePolicyRequestFilterSensitiveLog = (obj: GetContainerRecipePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContainerRecipePolicyResponseFilterSensitiveLog = (obj: GetContainerRecipePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDistributionConfigurationRequestFilterSensitiveLog = (
  obj: GetDistributionConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDistributionConfigurationResponseFilterSensitiveLog = (
  obj: GetDistributionConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImageRequestFilterSensitiveLog = (obj: GetImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageRecipeFilterSensitiveLog = (obj: ImageRecipe): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InfrastructureConfigurationFilterSensitiveLog = (obj: InfrastructureConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputResourcesFilterSensitiveLog = (obj: OutputResources): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageFilterSensitiveLog = (obj: Image): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImageResponseFilterSensitiveLog = (obj: GetImageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImagePipelineRequestFilterSensitiveLog = (obj: GetImagePipelineRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImagePipelineFilterSensitiveLog = (obj: ImagePipeline): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImagePipelineResponseFilterSensitiveLog = (obj: GetImagePipelineResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImagePolicyRequestFilterSensitiveLog = (obj: GetImagePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImagePolicyResponseFilterSensitiveLog = (obj: GetImagePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImageRecipeRequestFilterSensitiveLog = (obj: GetImageRecipeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImageRecipeResponseFilterSensitiveLog = (obj: GetImageRecipeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImageRecipePolicyRequestFilterSensitiveLog = (obj: GetImageRecipePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImageRecipePolicyResponseFilterSensitiveLog = (obj: GetImageRecipePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInfrastructureConfigurationRequestFilterSensitiveLog = (
  obj: GetInfrastructureConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInfrastructureConfigurationResponseFilterSensitiveLog = (
  obj: GetInfrastructureConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportComponentRequestFilterSensitiveLog = (obj: ImportComponentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportComponentResponseFilterSensitiveLog = (obj: ImportComponentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportVmImageRequestFilterSensitiveLog = (obj: ImportVmImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportVmImageResponseFilterSensitiveLog = (obj: ImportVmImageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListComponentBuildVersionsRequestFilterSensitiveLog = (obj: ListComponentBuildVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListComponentBuildVersionsResponseFilterSensitiveLog = (obj: ListComponentBuildVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListComponentsRequestFilterSensitiveLog = (obj: ListComponentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListComponentsResponseFilterSensitiveLog = (obj: ListComponentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContainerRecipesRequestFilterSensitiveLog = (obj: ListContainerRecipesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContainerRecipesResponseFilterSensitiveLog = (obj: ListContainerRecipesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDistributionConfigurationsRequestFilterSensitiveLog = (
  obj: ListDistributionConfigurationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDistributionConfigurationsResponseFilterSensitiveLog = (
  obj: ListDistributionConfigurationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImageBuildVersionsRequestFilterSensitiveLog = (obj: ListImageBuildVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageSummaryFilterSensitiveLog = (obj: ImageSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImageBuildVersionsResponseFilterSensitiveLog = (obj: ListImageBuildVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImagePackagesRequestFilterSensitiveLog = (obj: ListImagePackagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImagePackageFilterSensitiveLog = (obj: ImagePackage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImagePackagesResponseFilterSensitiveLog = (obj: ListImagePackagesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImagePipelineImagesRequestFilterSensitiveLog = (obj: ListImagePipelineImagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImagePipelineImagesResponseFilterSensitiveLog = (obj: ListImagePipelineImagesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImagePipelinesRequestFilterSensitiveLog = (obj: ListImagePipelinesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImagePipelinesResponseFilterSensitiveLog = (obj: ListImagePipelinesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImageRecipesRequestFilterSensitiveLog = (obj: ListImageRecipesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageRecipeSummaryFilterSensitiveLog = (obj: ImageRecipeSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImageRecipesResponseFilterSensitiveLog = (obj: ListImageRecipesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImagesRequestFilterSensitiveLog = (obj: ListImagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageVersionFilterSensitiveLog = (obj: ImageVersion): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImagesResponseFilterSensitiveLog = (obj: ListImagesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInfrastructureConfigurationsRequestFilterSensitiveLog = (
  obj: ListInfrastructureConfigurationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InfrastructureConfigurationSummaryFilterSensitiveLog = (obj: InfrastructureConfigurationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInfrastructureConfigurationsResponseFilterSensitiveLog = (
  obj: ListInfrastructureConfigurationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutComponentPolicyRequestFilterSensitiveLog = (obj: PutComponentPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutComponentPolicyResponseFilterSensitiveLog = (obj: PutComponentPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutContainerRecipePolicyRequestFilterSensitiveLog = (obj: PutContainerRecipePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutContainerRecipePolicyResponseFilterSensitiveLog = (obj: PutContainerRecipePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutImagePolicyRequestFilterSensitiveLog = (obj: PutImagePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutImagePolicyResponseFilterSensitiveLog = (obj: PutImagePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutImageRecipePolicyRequestFilterSensitiveLog = (obj: PutImageRecipePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutImageRecipePolicyResponseFilterSensitiveLog = (obj: PutImageRecipePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartImagePipelineExecutionRequestFilterSensitiveLog = (obj: StartImagePipelineExecutionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartImagePipelineExecutionResponseFilterSensitiveLog = (
  obj: StartImagePipelineExecutionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDistributionConfigurationRequestFilterSensitiveLog = (
  obj: UpdateDistributionConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDistributionConfigurationResponseFilterSensitiveLog = (
  obj: UpdateDistributionConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateImagePipelineRequestFilterSensitiveLog = (obj: UpdateImagePipelineRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateImagePipelineResponseFilterSensitiveLog = (obj: UpdateImagePipelineResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateInfrastructureConfigurationRequestFilterSensitiveLog = (
  obj: UpdateInfrastructureConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateInfrastructureConfigurationResponseFilterSensitiveLog = (
  obj: UpdateInfrastructureConfigurationResponse
): any => ({
  ...obj,
});
